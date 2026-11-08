// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 77.
// Rest list in the lane, nearest-first from Shijo-Kawaramachi (queue.mjs ... next rest 2000):
//   - ステーキ花郷 祇園店 — same-concept branch of a brand already in data (kyoto_gion_hanasato 花郷; tokyo_hanasato_roppongi)
//   - 祇をん新門荘 — no 2025–26 review (the newest fetched review is from 2018)
//   - 大衆酒場 むに 京都三条店 — chain, as ruled for 26039408 (大衆酒場 むに 京都河原町店)
//   + 祇園らーめん 京都総本店 Gion Ramen Kyoto Sohonten (ramen in front of Yasaka Shrine) — no ramen block: the bowls are
//     described only briefly and the house broth and noodles are not sourced
//   + 板前割烹 千花 Itamae Kappo Chihana (founded 1946; relocated in October 2022)
//   + 祇園料理 鳥居本 Gion Ryori Toriimoto (Gion ryotei with a garden, run by the okami and the okami's daughter)
//   + Cendrillon bis. (couple-run French–Italian bistro on Yanagibamba; since 2022)
//   Same-name counts first (data and queue-status.jsonl): 花郷 in data (Gion, Roppongi); むに ruled (26039408); 祇園らーめん
//   京都本店 (26038758) was skipped as unverifiable, but this 総本店 has reviews into 2026; none for 新門荘, 千花, 鳥居本 or
//   Cendrillon. None drafted is in data/kyoto.json by name or address (hidden records included).
//   Big-chain hotel rule (Greg 11-08): none of these is in a chain hotel.
//   Service charges checked against Tabelog's Japanese original: Cendrillon bis. 「チャージ料なし」; the others have no section.
//   Pins (checked against main, hidden records included): 祇園らーめん's Tabelog point is 2.5 m from kyoto_gion_juen → moved
//   4 m south-south-west (6.5 m clearance). 千花's point is 0.6 m from kyoto_gibier_miyama (same lot 279) → moved 6 m
//   north-east (6.6 m clearance). 鳥居本 — GSI gave only the 祇園町南側570 block point, about 240 m away → approximate.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-77');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26026559', 'same-concept branch of a brand already in data: 花郷 (kyoto_gion_hanasato in Gion; tokyo_hanasato_roppongi)');
skip('26020445', 'no 2025–26 review (the newest fetched review is from 2018)');
skip('26041925', 'chain: 大衆酒場 むに — as ruled for 26039408 (大衆酒場 むに 京都河原町店)');

// ================================================================ 祇園らーめん 京都総本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26039753/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'kyoto_gion_ramen_sohonten', name: '祇園らーめん 京都総本店 (Gion Ramen Kyoto Sohonten)', category: 'OMNI',
    lat: 35.003929, lng: 135.776168, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat ramen noodles (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef, back-fat and shrimp broths (2025–26 reviews).',
    hours_raw: 'Hours not listed (Tabelog). Reviewers found it open from 11:00 (February 2024) and until about 2 am (October 2024). Tickets from a vending machine (May 2025). Cash only — no cards, e-money or QR (Tabelog). No bookings (Tabelog). On the approach to Yasaka Shrine in Gion, many overseas visitors; a 40-minute wait for a bowl in February 2026 (reviews).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Gion, in front of Yasaka Shrine — 6 min from Gion-Shijo Stn',
    cuisine: 'Ramen: beef shio ramen ¥1,180 with roast beef, green onion and white onion (May 2025); Kyoto back-fat shoyu ramen ¥1,200 (February 2026); shrimp soba ¥1,200 with a rich shrimp broth (April 2026); chilled ramen (May 2025)',
    website: null, gmaps: gm('祇園らーめん 京都総本店'), menu_url: null,
    notes: '[Ramen · Yasaka Shrine] A tourist-heavy ramen shop on the approach to Yasaka Shrine, with flavours said to be supervised by a ramen veteran: beef shio, back-fat shoyu and a shrimp soba that reviewers rate best. About ¥1,200 a bowl; cash only.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'A May 2025 reviewer writes that the flavours were supervised by Mr. Takemuro, founder of Mutsumi-ya; a May 2024 reviewer calls it premium ramen supervised by a legend of the ramen world. Tabelog also lists a 京都本店.',
      philosophy: null,
      specialty: 'Shrimp soba; beef shio ramen.',
      anecdotes: [
        { text: 'An April 2026 diner found the shrimp soba a real bowl rather than a tourist one, with deep shrimp richness in every sip.', source: R + 'B527264355/' },
        { text: 'A February 2026 diner waited 40 minutes among tour groups for a ¥1,200 back-fat shoyu, with no apology.', source: R + 'B522626509/' },
        { text: 'A May 2025 diner found the beef shio ramen ordinary for over ¥1,000, which explained the quiet room at 1 pm.', source: R + 'B506179317/' },
      ],
      japanese_sources_summary: '食べログ: 祇園らーめん 京都総本店、ラーメン、東山区祇園町北側280、祇園四条駅から391m、営業時間の記載なし、予約不可、カード・電子マネー・QR 不可。口コミ (2024〜2026年、英語): 11時開店 (2024年2月)、深夜2時ごろまで (2024年10月)、食券制 (2025年5月)、Beef Sio Ramen 1,180円 (ローストビーフ、ねぎ、白ねぎ)、Kyoto Backfat Shoyu Ramen 1,200円、Shrimp Soba 1,200円、冷やしらーめん、Mutsumi-ya の創業者 Takemuro 氏の監修 (2025年5月)、八坂神社の前で海外の客が多い、40分待ち (2026年2月)。',
      confidence: 'low', sources: [TB, R + 'B506179317/', R + 'B506364458/', R + 'B522626509/', R + 'B527264355/'] },
    cultural_comfort: { level: 'english', note: 'Ticket machine; many overseas guests (2025–26 reviews).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側280',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through April 2026. No ramen block: bowl details are too thin.' },
    pin_source: `Tabelog ${TB} (35.003962, 135.776185), 2.5 m from kyoto_gion_juen — moved 4 m south-south-west to (35.003929, 135.776168), 6.5 m clearance; cross-checked: GSI 京都府京都市東山区祇園町北側280番地 (lot) 24m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B506179317/', R + 'B522626509/', R + 'B527264355/'],
    price_note: 'Prices from May 2025 – April 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Beef shio ramen', '¥1,180', 'Ramen', 'no', 'no', 'May 2025 review.', 'beef_shio'),
      it('', '', 'Kyoto back-fat shoyu ramen', '¥1,200', 'Ramen', 'no', 'no', 'February 2026 review.', 'seabura_shoyu'),
      it('', '', 'Shrimp soba (regular)', '¥1,200', 'Ramen', 'no', 'no', 'April 2026 review.', 'ebi_soba'),
    ] }, {
    cuisine: 'ラーメン: ローストビーフ、ねぎ、白ねぎの Beef Sio Ramen 1,180円 (2025年5月)、Kyoto Backfat Shoyu Ramen 1,200円 (2026年2月)、濃い海老のスープの Shrimp Soba 1,200円 (2026年4月)、冷やしらーめん (2025年5月)',
    neighborhood: '祇園、八坂神社の前。祇園四条駅から徒歩6分',
    gf_detail: 'グルテンフリー不可。小麦のらーめんの麺 (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。牛、背脂、海老のスープ (2025〜26年の口コミ)。',
    notes: '[ラーメン・八坂神社前] 八坂神社の参道の観光客の多いラーメン店。ラーメン界のベテランの監修とされ、牛の塩、背脂の醤油、口コミで評価の高い海老のスープのそば。1杯1,200円ほど、現金のみ。',
  });
}

// ================================================================ 板前割烹 千花
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26037995/'; const R = TB + 'dtlrvwlst/';
  const D = day(['12:00', '14:00'], ['18:00', '22:00']);
  put({
    id: 'kyoto_itamae_kappo_chihana', name: '板前割烹 千花 (Itamae Kappo Chihana)', category: 'OMNI',
    lat: 35.00428, lng: 135.776241, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A kappo course with tempura, yuba, broths and vinegared dishes (June 2025 review).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: eel, pork jowl, shrimp, fish and dashi (June 2025 review).',
    hours_raw: 'Mon and Wed–Sun, holidays and the days around them 12:00–14:00 (L.O. 13:00) and 18:00–22:00 (food L.O. 20:00); closed Tuesdays (Tabelog). Bookings by phone or online (Tabelog). Cards; no e-money or QR (Tabelog). 14 seats: an 8-seat counter and a private room for up to 6; non-smoking (Tabelog). Down a narrow alley off Shijo east of Hanamikoji, 5–7 min from Gion-Shijo (Tabelog; June 2025 review).',
    hours: { 0: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion, off Shijo east of Hanamikoji — 5 min from Gion-Shijo Stn',
    cuisine: 'Itamae kappo courses: anago with okra, kiwi and passion fruit; yuba soup; pork jowl; shrimp tempura; yuba-wrapped fish in shiitake broth; managatsuo and shima-aji sashimi; sea-bream roe with jako, squid with sea urchin; octopus with egg-yolk vinegar; grilled salt-cured shima-aji collar; Kamo aubergine with thick fried tofu; shiso rice; salted-milk ice cream (June 2025); served on Rosanjin and Kutani ware (August 2025); about ¥15,000–30,000 (2025–26 reviews)',
    website: null, gmaps: gm('板前割烹 千花 祇園'), menu_url: null,
    notes: '[Kappo · Gion] A historic Gion counter kappo, founded in 1946 and moved in 2022 to a white-wood counter down an alley off Shijo: long seasonal courses served on fine old tableware. About ¥15,000–30,000.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Founded in 1946 by the late Yoshio Nagata; moved to this site in October 2022 (June 2025 review). The restaurant says it has been rooted in Gion for over 70 years and moved from Shinmonzen-dori in the autumn (Tabelog). Reviewers note three Michelin stars for nine consecutive years from the 2010 Kyoto–Osaka guide (June and August 2025 reviews).',
      philosophy: 'True to the founder\'s spirit, with carefully chosen ingredients (Tabelog).',
      specialty: 'Seasonal kappo course; tableware by Rosanjin.',
      anecdotes: [
        { text: 'A June 2025 diner on a tour of top-ranked restaurants listed fourteen dishes, from anago with passion fruit to salted-milk ice cream.', source: R + 'B508258181/' },
        { text: 'An August 2025 regular singled out sashimi on Rosanjin plates and mountain vegetables on Kutani ware.', source: R + 'B468210852/' },
        { text: 'A May 2026 diner found playful twists behind a classic look, though the alley entrance was hard to find.', source: R + 'B528662636/' },
      ],
      japanese_sources_summary: '食べログ: 板前割烹 千花、日本料理、東山区祇園町北側279-8、祇園四条駅から徒歩7分、月・水〜日・祝日・祝日の前日・祝日の翌日 12:00〜14:00 (L.O. 13:00)・18:00〜22:00 (料理 L.O. 20:00)、火曜休み、予約は電話かウェブ、カード可、電子マネー・QR 不可、14席 (カウンター8、6名までの個室)、禁煙、祇園に70年以上、秋に Shinmonzen Street から移転 (紹介文、英訳)。口コミ (2025〜2026年、英語): 1946年に故 Yoshio Nagata が創業、2022年10月に移転、ミシュラン三つ星9年連続 (2010年版から)、穴子とオクラとキウイ、湯葉の椀、海老の天ぷら、まながつおとしまあじのお造り、Kamo なす、Rosanjin や Kutani ware の器、15,000〜30,000円。',
      confidence: 'medium', sources: [TB, R + 'B468210852/', R + 'B508258181/', R + 'B528662636/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter kappo; book ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側279-8',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through May 2026.' },
    pin_source: `Tabelog ${TB} (35.004242, 135.776194), 0.6 m from kyoto_gibier_miyama (same lot 279) — moved 6 m north-east to (35.004280, 135.776241), 6.6 m clearance; cross-checked: GSI 京都府京都市東山区祇園町北側279番地 (lot) 36m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B508258181/'],
    price_note: 'No item prices found; reviews give ¥15,000–30,000 a head.', last_checked: TODAY, items: [
      it('', '', 'Kappo course', '', 'Courses', 'ask', 'no', '2025–26 reviews.', 'course'),
    ] }, {
    cuisine: '板前割烹のコース: 穴子とオクラとキウイとパッションフルーツ、湯葉の椀、豚ほほ肉、海老の天ぷら、湯葉で巻いた魚としいたけの椀、まながつおとしまあじのお造り、鯛の子とじゃこ、いかと雲丹、たこの黄身酢、しまあじのかま塩焼き、Kamo なすと厚揚げの炊き合わせ、しその混ぜご飯、塩ミルクのアイス (2025年6月)、Rosanjin と Kutani ware の器 (2025年8月)、15,000〜30,000円ほど (2025〜26年の口コミ)',
    neighborhood: '祇園、四条の北、花見小路の東。祇園四条駅から徒歩5分',
    gf_detail: '要確認。天ぷら、湯葉、椀、酢の物のある割烹のコース (2025年6月の口コミ)。',
    vegan_detail: 'ヴィーガン不可。穴子、豚、海老、魚、出汁 (2025年6月の口コミ)。',
    notes: '[割烹・祇園] 1946年創業、2022年に四条から入った路地の白木のカウンターへ移った祇園の老舗の板前割烹。上質な古い器で出す季節の長いコース。15,000〜30,000円ほど。',
  });
}

// ================================================================ 祇園料理 鳥居本
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26003153/'; const R = TB + 'dtlrvwlst/';
  const D = day(['12:00', '14:00'], ['17:30', '20:00']);
  put({
    id: 'kyoto_gion_ryori_toriimoto', name: '祇園料理 鳥居本 (Gion Ryori Toriimoto)', category: 'OMNI',
    lat: 35.002293, lng: 135.776148, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kyoto ryotei courses with miso-marinated fish, sushi and broths (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sea bream sushi, sawara, hamo, shirako, sea urchin (2025–26 reviews).',
    hours_raw: 'Tue–Sun 12:00–14:00 and 17:30–20:00; closed Mondays and the evenings of the second and last Sunday of the month (Tabelog). Bookings taken (Tabelog). Cards (JCB, AMEX, Diners); no e-money (Tabelog). Private rooms, some with sunken kotatsu and a garden view; smoking allowed (Tabelog; 2025 reviews). In south Gion, 8 min from Gion-Shijo (Tabelog).',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion, south of Shijo — 8 min from Gion-Shijo Stn',
    cuisine: 'Gion ryotei courses in private rooms over a garden: freshly made yuba with tsukudani, carrot dumpling with sea urchin, shirako with grated daikon (February 2025); nine dishes from yam tofu and chilled chawanmushi to Ako sea bream sushi, miso-marinated sawara, hamo yanagawa nabe and two melon ice creams (July 2026); a house-label beer and original cold sake (2024–25 reviews); about ¥8,000–14,000 at lunch, ¥20,000–30,000 at dinner',
    website: 'http://shimo-higashi-kyoto.mypl.net/shop/00000335087/', gmaps: gm('祇園料理 鳥居本'), menu_url: null,
    notes: '[Ryotei · Gion] A quiet old Gion house with a garden — and a resident cat — where the okami and the okami\'s daughter serve classic Kyoto courses in private rooms. Lunch about ¥8,000–14,000; dinner ¥20,000–30,000.',
    chef_bio: { chef_name: null, roles: ['Okami and daughter (front of house)'], origin: null,
      background: 'Service by the okami and the okami\'s daughter (October 2025 review) or, as a January 2026 regular puts it, by the head and assistant managers rather than ordinary staff. A July 2024 diner places it on former Kenninji temple grounds. A garden cat greets guests (2025 reviews).',
      philosophy: null,
      specialty: 'Seasonal Kyoto courses in private rooms.',
      anecdotes: [
        { text: 'A February 2025 guest drank beer in a warm sunken-kotatsu room, watching a cat in the garden and snowmelt dripping in the sun.', source: R + 'B501063745/' },
        { text: 'An August 2025 guest sent by an acquaintance chatted with the owner over the house-label beer.', source: R + 'B512222381/' },
        { text: 'A July 2026 guest braved the heat for nine dishes ending in two kinds of melon ice cream.', source: R + 'B532214363/' },
      ],
      japanese_sources_summary: '食べログ: 祇園料理 鳥居本、日本料理、東山区祇園町南側570-8、火〜日 12:00〜14:00・17:30〜20:00、月曜と第2・最終日曜の夜は休み、予約可、カード (JCB・AMEX・Diners) 可、電子マネー不可、個室、喫煙可。口コミ (2024〜2026年、英語): 女将と娘さんのもてなし (2025年10月)、Kenninji の旧境内 (2024年7月)、庭の猫、作りたての湯葉と佃煮、人参の団子と雲丹、白子、長芋の豆腐、冷やし茶碗蒸し、Ako の鯛の寿司、鰆の味噌漬け、Hamo Yanagawa Nabe、2種のメロンのアイス (2026年7月)、鳥居本のラベルのビール、オリジナルの冷酒。',
      confidence: 'medium', sources: [TB, R + 'B320804923/', R + 'B489389839/', R + 'B501063745/', R + 'B512222381/', R + 'B516046742/', R + 'B532214363/'] },
    cultural_comfort: { level: 'japanese', note: 'Traditional ryotei; may be easier with an introduction (October 2025 review).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区祇園町南側570-8',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.002293, 135.776148); GSI returns only the 祇園町南側570 block point, about 240 m away, so approximate; 23 m from kyoto_gion_kida; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532214363/', R + 'B501063745/'],
    price_note: 'No item prices found; reviews give ¥8,000–14,000 at lunch and ¥20,000–30,000 at dinner.', last_checked: TODAY, items: [
      it('', '', 'Kyoto course (nine dishes)', '', 'Courses', 'ask', 'no', 'July 2026 review.', 'course'),
      it('', '', 'House-label beer', '', 'Drinks', 'no', 'ask', 'August 2025 review.', 'beer'),
    ] }, {
    cuisine: '庭に面した個室の祇園の料亭のコース: 作りたての湯葉と佃煮、人参の団子と雲丹、白子とおろし (2025年2月)、長芋の豆腐と冷やし茶碗蒸しから Ako の鯛の寿司、鰆の味噌漬け、Hamo Yanagawa Nabe、2種のメロンのアイスまで9品 (2026年7月)、店のラベルのビールとオリジナルの冷酒 (2024〜25年の口コミ)、昼は8,000〜14,000円、夜は20,000〜30,000円ほど',
    neighborhood: '祇園、四条の南。祇園四条駅から徒歩8分',
    gf_detail: '要確認。味噌漬けの魚、寿司、椀のある京料理のコース (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鯛の寿司、鰆、鱧、白子、雲丹 (2025〜26年の口コミ)。',
    notes: '[料亭・祇園] 庭と猫のいる祇園の静かな古い家。女将と娘さんが個室で京料理のコースをもてなす。昼は8,000〜14,000円、夜は2万〜3万円ほど。',
  });
}

// ================================================================ Cendrillon bis.
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26038253/'; const R = TB + 'dtlrvwlst/';
  const N = day(['17:30', '22:00']); const S = day(['11:30', '14:30'], ['17:30', '22:00']); const U = day(['11:30', '14:30'], ['17:30', '21:30']);
  put({
    id: 'kyoto_cendrillon_bis', name: 'Cendrillon bis.', category: 'MOM_AND_POP',
    lat: 35.008133, lng: 135.764054, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Pizza, gratin and fried dishes are wheat; carpaccio and steak may suit (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish carpaccio, beef tendon, prosciutto, steak (2025–26 reviews).',
    hours_raw: 'Tue–Fri 17:30–22:00; Sat 11:30–14:30 and 17:30–22:00; Sun 11:30–14:30 and 17:30–21:30; closed Mondays; days off posted on Instagram (Tabelog). No cover charge (Tabelog Japanese original 「チャージ料なし」). Cards, e-money and PayPay (Tabelog). 24 seats: 6 at the counter, 18 at tables; non-smoking (Tabelog). On Yanagibamba south of Sanjo, 10 min from Karasuma Oike (Tabelog).',
    hours: { 1: N, 2: N, 3: N, 4: N, 5: S, 6: U }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sanjo–Yanagibamba — 10 min from Karasuma Oike Stn',
    cuisine: 'French–Italian bistro: a "quick drink" set of a drink and three snacks (2025–26), pumpkin gratin (March 2025), fresh-fish carpaccio ¥920, beef-tendon miso curry stew ¥700, Kimagure pizza ¥1,480, prosciutto with dried fruit ¥800 (December 2025), curry stew and pizza (July and September 2026); a weekend "holiday lunch" ¥1,590 of steak and two fried dishes with bread or rice (April 2026)',
    website: null, gmaps: gm('Cendrillon bis. 京都'), menu_url: null,
    notes: '[Bistro · Sanjo-Yanagibamba] A small blue-lit bistro run by a couple, mixing French and Italian plates — a cheap drink-and-three-snacks set, pizza, a miso beef-tendon stew — with weekend lunches. Many overseas guests. About ¥2,000–4,000.',
    chef_bio: { chef_name: null, roles: ['Owners (a couple, unnamed)'], origin: null,
      background: 'Opened 11 September 2022 (Tabelog). Run by a couple (March and December 2025 reviews).',
      philosophy: null,
      specialty: 'Quick-drink set; beef-tendon miso curry stew.',
      anecdotes: [
        { text: 'A swimmer who drops in monthly after the nearby pool (July and September 2026) always takes the quick-drink set and tries one new dish.', source: R + 'B511140425/' },
        { text: 'A December 2025 guest staying nearby found prices a little high and portions small, but the beef-tendon miso curry stew original.', source: R + 'B519484670/' },
        { text: 'An April 2026 lunch diner had the ¥1,590 holiday lunch of steak and two fried dishes, though it was slow to arrive.', source: R + 'B526595593/' },
      ],
      japanese_sources_summary: '食べログ: Cendrillon bis.、ビストロ・フレンチ・イタリアン、中京区三条柳馬場下る槌屋町84-1、烏丸御池駅から徒歩10分、火〜金 17:30〜22:00、土 11:30〜14:30・17:30〜22:00、日 11:30〜14:30・17:30〜21:30、月曜休み、休みは Instagram で、チャージ料なし、カード・電子マネー・PayPay 可、24席 (カウンター6、テーブル18)、禁煙、2022年9月11日オープン。口コミ (2025〜2026年、英語): 夫婦で営む、飲み物と小皿3品の Quick Drink のセット、かぼちゃのグラタン、鮮魚のカルパッチョ920円、牛すじの味噌カレー煮込み700円、Kimagure pizza 1,480円、生ハムとドライフルーツ800円、休日ランチ1,590円 (ステーキと揚げ物2種)、海外の客が多い。',
      confidence: 'medium', sources: [TB, R + 'B503566602/', R + 'B505390771/', R + 'B511140425/', R + 'B512289165/', R + 'B519484670/', R + 'B526595593/', R + 'B527152035/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Many overseas guests (December 2025 and April 2026 reviews).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区三条柳馬場下る槌屋町84-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.008133, 135.764054); cross-checked: GSI 京都府京都市中京区槌屋町84番地 (lot) 29m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B519484670/', R + 'B526595593/'],
    price_note: 'Prices from December 2025 and April 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Fresh-fish carpaccio', '¥920', 'Plates', 'ask', 'no', 'December 2025 review.', 'carpaccio'),
      it('', '', 'Beef-tendon miso curry stew', '¥700', 'Plates', 'ask', 'no', 'December 2025 review.', 'gyusuji'),
      it('', '', 'Kimagure pizza', '¥1,480', 'Pizza', 'no', 'no', 'December 2025 review.', 'pizza'),
      it('', '', 'Holiday lunch', '¥1,590', 'Lunch', 'ask', 'no', 'April 2026 review.', 'holiday_lunch'),
    ] }, {
    cuisine: 'フレンチとイタリアンのビストロ: 飲み物と小皿3品の「Quick Drink」セット (2025〜26年)、かぼちゃのグラタン (2025年3月)、鮮魚のカルパッチョ920円、牛すじの味噌カレー煮込み700円、Kimagure pizza 1,480円、生ハムとドライフルーツ800円 (2025年12月)、カレー煮込みとピザ (2026年7月・9月)、ステーキと揚げ物2種にパンかご飯の週末の休日ランチ1,590円 (2026年4月)',
    neighborhood: '三条柳馬場。烏丸御池駅から徒歩10分',
    gf_detail: '要確認。ピザ、グラタン、揚げ物は小麦。カルパッチョやステーキは合う可能性 (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚のカルパッチョ、牛すじ、生ハム、ステーキ (2025〜26年の口コミ)。',
    notes: '[ビストロ・三条柳馬場] 夫婦で営む青い明かりの小さなビストロ。安い Quick Drink のセット、ピザ、牛すじの味噌カレー煮込みなどフレンチとイタリアンの料理、週末は昼も。海外の客が多い。2,000〜4,000円ほど。',
  });
}

save();
