// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 73.
// Rest list in the lane, nearest-first from Shijo-Kawaramachi (queue.mjs ... next rest 2000):
//   + !? (Intero Pan ya) (bakery by Nishiki Market with 30 cm tartines and "treasure bread"; since January 2026)
//   - tLOUNGE BY Dilmah KYOTO — sub-brand of a large parent (the Dilmah tea company)
//   + ごはん處 月かげ Gohan Doko Tsukikage (à la carte Kyoto kappo by the Takase River; since February 2026)
//   + にほんしゅ屋 しゅうろく Nihonshuya Shuroku (warm-sake bar with oden in Momiji no Koji; since 2021)
//   - 丸常蒲鉾店 大丸京都店 — department-store counter of 丸常蒲鉾; the brand's own shop 丸常蒲鉾 (26009061) is in the crawl
//     and is the record to draft
//   - 河原町三条 焼肉ヤマカワ — branch of 先斗町 焼肉やまかわ (本店 26031987 is in the crawl; a はなれ also exists); the 本店 is
//     the record to draft
//   - イノダコーヒ コーヒーサロン支店 — chain (イノダコーヒ, six or more shops), as ruled for 26000412 and 26026052
//   - 寺子屋本舗 錦市場店 — large parent (株式会社寺子屋, 140 directly run shops), as ruled for 26037502
//   + こいまりや Koimariya (one-man sake bar and kappo on Takakura; since 2015)
//   Same-name counts first (data and queue-status.jsonl): イノダ and 寺子屋 have earlier rulings (followed); 月かげ — an
//   April 2026 review says the same people run "Nakahigashi" and "Yamakishi" (possibly kyoto_soujiki_nakahigashi and
//   kyoto_nominokoji_yamagishi; different concepts either way) — drafted as a sister concept; none for !?, Dilmah, しゅうろく, 丸常, ヤマカワ, こいまりや. None drafted is in data/kyoto.json by name or
//   address (hidden records included).
//   Service charges checked against Tabelog's Japanese original: 月かげ 「なし」 (the English translation wrongly says a
//   service charge applies); こいまりや 「税別380円」 (a ¥380 cover before tax); !? and しゅうろく have no section.
//   Pins (checked against main, hidden records included): しゅうろく's Tabelog point is 5.4 m from kyoto_yoshokuya_nakago
//   (もみじの小路 H-8) → moved 1 m east-north-east (6.4 m clearance). Others ≥ 13 m; no offsets.
//   Also: per the coordinator, kyoto_mojio_karasuma's Japanese summary is patched so 三田 (Sanda, Hyogo) is written "Sanda"
//   instead of kanji that kuromoji reads みた.
import fs from 'node:fs';
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-73');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26041571', 'sub-brand of a large parent: tLOUNGE BY Dilmah is the café brand of the Dilmah tea company');
skip('26023079', 'department-store counter: 丸常蒲鉾店 大丸京都店 is a counter of 丸常蒲鉾, whose own shop (26009061) is in the crawl and is the record to draft');
skip('26044367', 'branch: 河原町三条 焼肉ヤマカワ is a shop of 先斗町 焼肉やまかわ, whose 本店 (26031987) is in the crawl and is the record to draft (a はなれ also exists)');
skip('26043557', 'chain: イノダコーヒ — six or more shops in the crawl, as ruled for 26000412 and 26026052');
skip('26007071', 'large parent: 寺子屋本舗 is a brand of 株式会社寺子屋 (140 directly run shops), as ruled for 26037502');

// ================================================================ !? (Intero Pan ya)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26044331/'; const R = TB + 'dtlrvwlst/';
  const D = day(['08:00', '17:00']);
  put({
    id: 'kyoto_intero_panya_nishiki', name: '!? (Intero Pan ya)', category: 'OMNI',
    lat: 35.005114, lng: 135.762738, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a bakery of wheat breads, tartines and doughnuts (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: croissants, cream doughnuts, cheese breads (2026 reviews).',
    hours_raw: 'Mon–Wed, Fri–Sun 08:00–17:00; closed Thursdays; hours may change (Tabelog). No bookings (Tabelog). Cards; no e-money or QR (Tabelog). A small standing eat-in space (August 2026 review). On Takakura just north of Nishiki Market, 3 min from Karasuma (Tabelog; July 2026 review).',
    hours: { 0: D, 1: D, 2: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishiki Market, Takakura — 3 min from Karasuma Stn',
    cuisine: 'Bakery and doughnuts: 30 cm-plus tartines with toppings such as tomato, shrimp and avocado, tandoori chicken, mushroom-and-truffle gratin, and fresh doughnuts (February 2026); croissant ¥280, cheese fondue bread ¥280, custard and chocolate cream cubes ¥280 (May–October 2026); cream doughnuts — custard, matcha, lemon — ¥380 (July 2026); ratatouille hard-bread roll (October 2026); "treasure bread" of the previous day\'s bake at about ¥100–110 to cut waste (April–August 2026)',
    website: null, gmaps: gm('!? Intero Pan ya 京都'), menu_url: null,
    notes: '[Bakery · Nishiki Market] A long, clean bakery by the Takakura end of Nishiki Market: 30 cm tartines, buttery croissants, cream-filled doughnuts and ¥100 "treasure bread" from the day before. Takeaway, with a little standing room. About ¥300–2,000.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened 13 January 2026 (Tabelog). Sells the previous day\'s bread as "treasure bread" to reduce food waste (May 2026 review). Instagram @interopanya (July 2026 review).',
      philosophy: 'Reducing food waste with day-old "treasure bread" (May 2026 review).',
      specialty: 'Giant tartines; cream doughnuts.',
      anecdotes: [
        { text: 'A February 2026 visitor came for the famous tartines, over 30 cm long, and liked the light fresh doughnuts too.', source: R + 'B523430695/' },
        { text: 'An August 2026 first-timer at opening found no names or prices on the shelves and waited five minutes for the staff.', source: R + 'B534541186/' },
        { text: 'An October 2026 visitor praised the croissant\'s fine, crackling layers, still good after the trip home.', source: R + 'B536889708/' },
      ],
      japanese_sources_summary: '食べログ: !?、パン、中京区錦小路通高倉上ル中魚屋町508、烏丸駅から281m、月〜水・金〜日 8:00〜17:00、木曜休み、予約不可、カード可、電子マネー・QR 不可、2026年1月13日オープン。口コミ (2026年、英語): 30cm を超えるタルティーヌ (トマト、海老とアボカド、タンドリーチキン、きのことトリュフのグラタン)、生ドーナツ、クロワッサン280円、チーズフォンデュのパン280円、カスタードやチョコのクリームキューブ280円、クリームドーナツ380円、ラタトゥイユのハードパン、前日のパンを「Treasure Bread」として100〜110円で (食品ロス削減)、立ち食いのスペース、Instagram @interopanya。',
      confidence: 'medium', sources: [TB, R + 'B523430695/', R + 'B529465953/', R + 'B530905773/', R + 'B532252522/', R + 'B532596944/', R + 'B534541186/', R + 'B534759288/', R + 'B535016632/', R + 'B536889708/', R + 'B537190460/'] },
    cultural_comfort: { level: 'none_needed', note: 'Self-service bakery; shelves may lack labels (August 2026 review).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区錦小路通高倉上ル中魚屋町508',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.005114, 135.762738); cross-checked: GSI 京都府京都市中京区中魚屋町508番地 (lot) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532596944/', R + 'B532252522/', R + 'B530905773/'],
    price_note: 'Prices from April–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Croissant', '¥280', 'Bread', 'no', 'no', 'July and October 2026 reviews.', 'croissant'),
      it('', '', 'Cream doughnut (custard, matcha or lemon)', '¥380', 'Doughnuts', 'no', 'no', 'July 2026 review.', 'cream_donut'),
      it('', '', 'Treasure bread (previous day\'s bake)', '¥110', 'Bread', 'no', 'no', 'April and May 2026 reviews.', 'treasure'),
      it('', '', 'Tartine (30 cm)', '', 'Tartines', 'no', 'no', 'February 2026 review.', 'tartine'),
    ] }, {
    cuisine: 'パンとドーナツ: トマト、海老とアボカド、タンドリーチキン、きのことトリュフのグラタンなどをのせた30cm を超えるタルティーヌと生ドーナツ (2026年2月)、クロワッサン280円、チーズフォンデュのパン280円、カスタードやチョコのクリームキューブ280円 (2026年5〜10月)、カスタード・抹茶・レモンのクリームドーナツ380円 (2026年7月)、ラタトゥイユのハードパン (2026年10月)、食品ロスを減らす前日のパンの「Treasure Bread」100〜110円ほど (2026年4〜8月)',
    neighborhood: '錦市場、高倉。烏丸駅から徒歩3分',
    gf_detail: 'グルテンフリー不可。小麦のパン、タルティーヌ、ドーナツの店 (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。クロワッサン、クリームドーナツ、チーズのパン (2026年の口コミ)。',
    notes: '[パン・錦市場] 錦市場の高倉側の細長くきれいなパン屋。30cm のタルティーヌ、バターの香るクロワッサン、クリームたっぷりのドーナツ、前日のパンの100円の「Treasure Bread」。持ち帰り中心で立ち食いのスペースも。300〜2,000円ほど。',
  });
}

// ================================================================ ごはん處 月かげ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26044259/'; const R = TB + 'dtlrvwlst/';
  const D = day(['17:00', '23:00']);
  put({
    id: 'kyoto_gohandoko_tsukikage', name: 'ごはん處 月かげ (Gohan Doko Tsukikage)', category: 'OMNI',
    lat: 34.998258, lng: 135.767772, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Dashi-based Kyoto dishes with fried items, gyoza and croquettes; soy and miso throughout (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish, duck, wagyu, turtle, hamo and dashi (2026 reviews).',
    hours_raw: 'Mon–Sat and holidays 17:00–23:00 (food L.O. 22:00, drinks 22:30); closed Sundays (Tabelog). Bookings taken; same-day and private-room (course only) bookings by phone (Tabelog). No service charge (Tabelog Japanese original 「なし」; the English translation wrongly says one applies). Cards, e-money and QR (Tabelog). 12 seats: 8 at the counter, a private room for 4; smoking area; children welcome; BYO drinks (Tabelog). By the Takase River, about 5 min from Kiyomizu-Gojo exit 3 (Tabelog; April 2026 review).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Takase River near Gojo — 5 min from Kiyomizu-Gojo Stn',
    cuisine: 'Kyoto kappo, à la carte or as a course: kombu-cured sea bream with vinegar jelly, sawara, bincho tuna with ponzu, duck breast, fried butterbur (February 2026); asparagus with white miso, gyoza, turtle soup, fried small taro, wagyu with bamboo shoots, anago (April 2026); butterbur cream croquette, freshly cooked rice with chirimen-jako and red miso soup (March 2026); dried ayu, hamo grilled with white soy and sansho, Managiri peppers, Kamo aubergine with sea urchin and wagyu, clay-pot rice (July 2026); turtle hot pot by the portion, shishamo (October 2026)',
    website: null, gmaps: gm('ごはん處 月かげ 京都'), menu_url: null,
    notes: '[Kyoto kappo · Takase River] A new white-wood counter by the Takase River near Gojo serving Kyoto kappo à la carte or as a course — hamo, Kamo aubergine, turtle, and freshly cooked rice with jako to finish. About ¥10,000–15,000.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened 23 February 2026 (Tabelog). An April 2026 reviewer says it is run by the same people as Nakahigashi and Yamakishi. An October 2026 diner describes it as run by a young couple.',
      philosophy: null,
      specialty: 'Kyoto kappo à la carte; donabe rice.',
      anecdotes: [
        { text: 'A diner at the pre-opening in February 2026 noted power outlets under the counter and ordered freely from the à la carte list.', source: R + 'B522607908/' },
        { text: 'A July 2026 diner\'s favourite was hamo grilled with a Naruto-negi sauce, then Kamo aubergine with sea urchin and wagyu.', source: R + 'B532573178/' },
        { text: 'An October 2026 diner ordered turtle hot pot for one; the zosui came early, as the third dish.', source: R + 'B538487810/' },
        { text: 'Another October 2026 course diner found it average for the price and the regulars loud.', source: R + 'B538172939/' },
      ],
      japanese_sources_summary: '食べログ: ごはん處 月かげ、日本料理・魚介料理、下京区難波町420-8、清水五条駅から徒歩6分、月〜土・祝 17:00〜23:00 (料理 L.O. 22:00、ドリンク L.O. 22:30)、日曜休み、予約可 (当日・個室は電話、個室はコースのみ)、サービス料「なし」、カード・電子マネー・QR 可、12席 (カウンター8、4人用の個室)、喫煙所、子ども可、持ち込み可、2026年2月23日オープン。口コミ (2026年、英語): アラカルトとコース、鯛の昆布締め、鰆、鴨、ふきのとうの天ぷら、すっぽんのスープ、和牛と筍、穴子、ふきのとうのクリームコロッケ、炊きたてのご飯とちりめんじゃこと赤だし、鱧の白醤油焼き、Kamo なすと雲丹と和牛、土鍋ご飯、Nakahigashi と Yamakishi と同じ人たちの店 (2026年4月)、若い夫婦 (2026年10月)。',
      confidence: 'medium', sources: [TB, R + 'B522607908/', R + 'B527244835/', R + 'B527928721/', R + 'B530919440/', R + 'B532573178/', R + 'B534665282/', R + 'B538009877/', R + 'B538172939/', R + 'B538487810/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter kappo; à la carte ordering.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区難波町420-8',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.998258, 135.767772); cross-checked: GSI 京都府京都市下京区難波町420番地 (lot) 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B532573178/'],
    price_note: 'No item prices found; reviews give ¥8,000–20,000 a head.', last_checked: TODAY, items: [
      it('', '', 'Kamo aubergine with sea urchin and wagyu', '', 'À la carte', 'ask', 'no', 'July 2026 review.', 'kamo_nasu'),
      it('', '', 'Grilled hamo with white soy and sansho', '', 'À la carte', 'ask', 'no', 'July 2026 review.', 'hamo'),
      it('', '', 'Clay-pot rice', '', 'Rice', 'ask', 'ask', 'July 2026 review.', 'donabe'),
      it('', '', 'Turtle hot pot (per portion)', '', 'Hot pot', 'ask', 'no', 'October 2026 review.', 'suppon'),
    ] }, {
    cuisine: 'アラカルトかコースの京の割烹: 鯛の昆布締めとジュレの酢、鰆、まぐろのポン酢、鴨の胸肉、ふきのとうの天ぷら (2026年2月)、アスパラの白味噌、餃子、すっぽんのスープ、小芋の揚げ物、和牛と筍、穴子 (2026年4月)、ふきのとうのクリームコロッケ、炊きたてのご飯とちりめんじゃこ、赤だし (2026年3月)、干し鮎、鱧の白醤油と山椒の焼き物、Managiri peppers、Kamo なすと雲丹と和牛、土鍋ご飯 (2026年7月)、一人前からのすっぽん鍋、ししゃも (2026年10月)',
    neighborhood: '五条近くの高瀬川沿い。清水五条駅から徒歩5分',
    gf_detail: '要確認。出汁の京料理に揚げ物、餃子、コロッケもあり、醤油や味噌が全体に使われる (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚、鴨、和牛、すっぽん、鱧、出汁 (2026年の口コミ)。',
    notes: '[京の割烹・高瀬川] 五条近くの高瀬川沿いの白木のカウンターの新しい店。鱧、Kamo なす、すっぽんなどの京の割烹をアラカルトかコースで、締めは炊きたてのご飯とじゃこ。1万〜1万5千円ほど。',
  });
}

// ================================================================ にほんしゅ屋 しゅうろく
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26036411/'; const R = TB + 'dtlrvwlst/';
  const W = day(['18:00', '24:00']); const E = day(['15:00', '17:30'], ['18:00', '24:00']);
  put({
    id: 'kyoto_nihonshuya_shuroku', name: 'にほんしゅ屋 しゅうろく (Nihonshuya Shuroku)', category: 'OMNI',
    lat: 34.998741, lng: 135.765993, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Oden broth, miso-grilled rice balls and the ramen to finish are soy, miso or wheat-based (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: oden in dashi, sashimi, steamed sea-bream head (2024–2026 reviews).',
    hours_raw: 'Tue–Fri 18:00–24:00; Sat and Sun 15:00–17:30 and 18:00–24:00; closed Mondays; hours may change (Tabelog). Bookings taken (Tabelog). Cards; no e-money or QR (Tabelog). 11 counter seats; non-smoking, smoking area; restroom outside (Tabelog; November 2024 and February 2025 reviews). In the Momiji no Koji courtyard of a renovated townhouse off Gokomachi–Matsubara, 8 min from Kiyomizu-Gojo (Tabelog; January 2025 review).',
    hours: { 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Momiji no Koji, Matsubara — 8 min from Kiyomizu-Gojo Stn',
    cuisine: 'Sake bar with oden and small plates: a wide range of sake warmed or chilled from a cellar of isshobin — Maibijin, Yuki no Bosha, Akika and others (October 2025), Eiko Fuji ¥770, Furosen ¥660, Ippongi ¥725 (March 2026), recommendations to suit your taste (November 2025); oden (2024–2026), Ishigaki sea bream sashimi, sake-steamed sea-bream head (October 2025); oden with shuto butter, octopus sashimi, ramen to finish, barley-miso grilled rice balls (August 2026); fish-bone crackers (2024)',
    website: null, gmaps: gm('にほんしゅ屋 しゅうろく'), menu_url: null,
    notes: '[Sake bar & oden · Matsubara] An eleven-seat counter in a townhouse courtyard off Matsubara, built around a cellar of sake served at just the right warmth, with oden and generous small plates. About ¥4,000–8,000.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'Opened 1 July 2021 (Tabelog). A sake cellar of isshobin at the back (January 2025 and January 2026 reviews). The illustration on the sign was drawn by the owner\'s wife (February 2025 review).',
      philosophy: 'A place to enjoy Japanese sake, with house notes for customers (January 2025 review).',
      specialty: 'Warmed sake; oden.',
      anecdotes: [
        { text: 'A November 2025 warm-sake fan described a taste, received recommendations, and found every cup at exactly the right temperature.', source: R + 'B521270770/' },
        { text: 'A March 2026 visitor asked for the best sake for warming and was impressed by the range.', source: R + 'B527592481/' },
        { text: 'A neighbour (August 2026) finally came in for oden with shuto butter, octopus sashimi and ramen to finish.', source: R + 'B533962642/' },
      ],
      japanese_sources_summary: '食べログ: にほんしゅ屋 しゅうろく、日本酒バー・おでん、下京区御幸町通り松原西入ル石不動之町682-3 もみじの小路H-7、京都河原町駅から徒歩10分・清水五条駅から徒歩8分、火〜金 18:00〜24:00、土日 15:00〜17:30・18:00〜24:00、月曜休み、予約可、カード可、電子マネー・QR 不可、カウンター11席、禁煙 (喫煙所あり)、2021年7月1日オープン。口コミ (2024〜2026年、英語): 一升瓶の並ぶ酒蔵、燗酒と冷酒、Maibijin、Yuki no Bosha、Akika など、Eiko Fuji 770円、Furosen 660円、Ippongi 725円、おでん、Ishigaki daiのお造り、鯛のかぶとの酒蒸し、shuto バターのおでん、たこのお造り、締めのラーメン、麦味噌の焼きおにぎり、看板の絵は店主の奥さん (2025年2月)、トイレは外。',
      confidence: 'medium', sources: [TB, R + 'B440657363/', R + 'B486612740/', R + 'B498433920/', R + 'B500096828/', R + 'B501008716/', R + 'B521270770/', R + 'B521351508/', R + 'B524735455/', R + 'B527592481/', R + 'B533962642/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter sake bar; staff recommend sake by taste.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区御幸町通り松原西入ル石不動之町682-3 もみじの小路H-7',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (34.998738, 135.765983), 5.4 m from kyoto_yoshokuya_nakago (もみじの小路 H-8) — moved 1 m east-north-east to (34.998741, 135.765993), 6.4 m clearance; cross-checked: GSI 京都府京都市下京区石不動之町682番地 (lot) 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B524735455/'],
    price_note: 'Sake prices from a March 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Sake by the glass (e.g. Eiko Fuji)', '¥660–770', 'Sake', 'ask', 'ask', 'March 2026 review.', 'sake'),
      it('', '', 'Oden', '', 'Oden', 'ask', 'no', '2024–2026 reviews.', 'oden'),
      it('', '', 'Barley-miso grilled rice ball', '', 'To finish', 'ask', 'ask', 'August 2026 review.', 'yaki_onigiri'),
    ] }, {
    cuisine: 'おでんと小皿の日本酒バー: 一升瓶の酒蔵から燗でも冷やでも楽しめる幅広い日本酒 — Maibijin、Yuki no Bosha、Akika など (2025年10月)、Eiko Fuji 770円、Furosen 660円、Ippongi 725円 (2026年3月)、好みに合わせたおすすめ。おでん (2024〜2026年)、Ishigaki daiのお造り、鯛のかぶとの酒蒸し (2025年10月)、shuto バターのおでん、たこのお造り、締めのラーメン、麦味噌の焼きおにぎり (2026年8月)、骨せんべい (2024年)',
    neighborhood: 'もみじの小路、松原。清水五条駅から徒歩8分',
    gf_detail: '要確認。おでんの出汁、味噌の焼きおにぎり、締めのラーメンは醤油・味噌・小麦を使う (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。出汁のおでん、お造り、鯛のかぶとの酒蒸し (2024〜2026年の口コミ)。',
    notes: '[日本酒バーとおでん・松原] 松原近くの町家の中庭にあるカウンター11席の店。酒蔵の日本酒をちょうどよい温度の燗で、おでんとたっぷりの小皿とともに。4,000〜8,000円ほど。',
  });
}

// ================================================================ こいまりや
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26026085/'; const R = TB + 'dtlrvwlst/';
  const D = day(['17:30', '23:30']);
  put({
    id: 'kyoto_koimariya_takakura', name: 'こいまりや (Koimariya)', category: 'OMNI',
    lat: 35.002244, lng: 135.762507, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sashimi and grilled fish may suit, but tempura and seasoned dishes are not (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sashimi, grilled fish, Kyoto chicken, beef steak (2025–26 reviews).',
    hours_raw: 'Daily 17:30–23:30; irregular closures; hours may change (Tabelog). Bookings taken; courses such as ¥4,500 and all-you-can-drink local sake (2025 reviews). Cover charge ¥380 before tax (Tabelog Japanese original 「税別380円」). Cards; no e-money or QR (Tabelog). Counter on the 1st floor and rooms upstairs; smoking allowed (Tabelog; April 2026 review). On Takakura south of Shijo, near Daimaru, 4 min from Karasuma (Tabelog; April 2026 review).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Takakura, south of Shijo — 4 min from Karasuma Stn',
    cuisine: 'Sake bar with seasonal kappo plates: a ¥4,500 course with Kyoto chicken grilled as the main, hamo and ayu (June 2025); sweetfish and mountain-vegetable tempura, grilled fish (May 2025); beef steak (April 2025); grated yam and marinated tuna bowl, eel and summer vegetable soup, sashimi (July 2025); fried mejikari (April 2026); five-kind sashimi platter, Lake Biwa young ayu tempura, salmon chazuke, sake such as Mansaku, Eikun and Hoshijiman (September 2026); all-you-can-drink local sake on courses (February 2025)',
    website: null, gmaps: gm('こいまりや 京都 高倉'), menu_url: null,
    notes: '[Sake bar & kappo · Takakura] A narrow counter (and rooms upstairs) on Takakura near Daimaru, run by one owner who cooks seasonal kappo — sashimi, hamo, ayu tempura, grilled fish — to go with a good list of sake. About ¥4,000–9,000.',
    chef_bio: { chef_name: null, roles: ['Owner-cook (unnamed)'], origin: null,
      background: 'Opened 1 July 2015 (Tabelog). The owner runs everything alone, pacing dishes to each group (June 2025 review); busier lately with larger groups upstairs (April 2026 review). Tabelog notes its map pin cannot be corrected by the shop.',
      philosophy: null,
      specialty: 'Seasonal fish with sake.',
      anecdotes: [
        { text: 'A couple who rarely drink took the ¥4,500 course in June 2025 and enjoyed the owner\'s gentle conversation, timed to each table.', source: R + 'B508236394/' },
        { text: 'A diner back in June 2026 for the first time since June 2020 left the order to the owner, starting with a sashimi platter.', source: R + 'B530662774/' },
        { text: 'An April 2026 first-timer, brought by colleagues, discovered the deep-sea fish mejikari, fried.', source: R + 'B527563036/' },
      ],
      japanese_sources_summary: '食べログ: こいまりや、日本酒バー・居酒屋、下京区高倉通綾小路下ル竹屋町388-5 高倉ビル1F・2F、烏丸駅から264m、毎日 17:30〜23:30 (不定休)、予約可、チャージ税別380円、カード可、電子マネー・QR 不可、個室、喫煙可、2015年7月1日オープン、地図の位置を直せないとの店の注記。口コミ (2025〜2026年、英語): 店主が一人で切り盛り、4,500円のコース (京都の鶏の焼き物、鱧、鮎)、鮎と山菜の天ぷら、焼き魚、牛のステーキ、とろろとまぐろの漬け丼、鰻と夏野菜の椀、mejikariの唐揚げ、刺身5種盛り、Lake Biwa の稚鮎の天ぷら、紅鮭の茶漬け、Mansaku・Eikun・Hoshijiman などの日本酒、地酒の飲み放題。',
      confidence: 'medium', sources: [TB, R + 'B500837577/', R + 'B505489055/', R + 'B506107200/', R + 'B508236394/', R + 'B509529750/', R + 'B527563036/', R + 'B530662774/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One-person counter; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市下京区高倉通綾小路下ル竹屋町388-5 高倉ビル 1F・2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.002244, 135.762507); cross-checked: GSI 京都府京都市下京区竹屋町388番地 (lot) 54m; the shop notes on Tabelog that it cannot move its pin; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B508236394/', TB],
    price_note: 'Course price from a June 2025 review; cover charge from Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Course', '¥4,500', 'Courses', 'ask', 'no', 'June 2025 review.', 'course'),
      it('', '', 'Cover charge (before tax)', '¥380', 'Charge', 'ask', 'ask', 'Tabelog.', 'charge'),
      it('', '', 'Assorted sashimi (5 kinds)', '', 'Sashimi', 'ask', 'no', 'September 2026 review.', 'sashimi'),
    ] }, {
    cuisine: '季節の割烹料理の日本酒バー: 京都の鶏の焼き物をメインに鱧や鮎の4,500円のコース (2025年6月)、鮎と山菜の天ぷら、焼き魚 (2025年5月)、牛のステーキ (2025年4月)、とろろとまぐろの漬け丼、鰻と夏野菜の椀、お造り (2025年7月)、mejikariの唐揚げ (2026年4月)、刺身5種盛り、Lake Biwa の稚鮎の天ぷら、紅鮭の茶漬け、Mansaku・Eikun・Hoshijiman などの日本酒 (2026年9月)、コースの地酒の飲み放題 (2025年2月)',
    neighborhood: '高倉通、四条の南。烏丸駅から徒歩4分',
    gf_detail: '要確認。刺身や焼き魚は合う可能性があるが、天ぷらや味付けの料理は不可 (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。刺身、焼き魚、京都の鶏、牛のステーキ (2025〜26年の口コミ)。',
    notes: '[日本酒バーと割烹・高倉] 大丸近くの高倉通の細長いカウンターと2階の部屋。店主が一人で刺身、鱧、鮎の天ぷら、焼き魚などの季節の割烹料理を作り、日本酒の品揃えも良い。4,000〜9,000円ほど。',
  });
}

save();

// ---------------------------------------------------------------- coordinator fix: もじお summary
{
  const f = 'data/kyoto.json'; const raw = fs.readFileSync(f, 'utf8'); const d = JSON.parse(raw);
  const p = d.places.find(x => x.id === 'kyoto_mojio_karasuma');
  const from = '検索結果の口コミ: 三田の neo鉄板焼き もじおの姉妹店。', to = '検索結果の口コミ: Sanda の neo鉄板焼き もじおの姉妹店。';
  if (p && p.chef_bio.japanese_sources_summary.includes(from)) {
    p.chef_bio.japanese_sources_summary = p.chef_bio.japanese_sources_summary.replace(from, to);
    fs.writeFileSync(f, raw.includes('\n') ? JSON.stringify(d, null, 1) : JSON.stringify(d));
    console.log('kyoto_mojio_karasuma: summary 三田 → Sanda');
  }
}
