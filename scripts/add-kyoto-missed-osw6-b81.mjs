// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 81.
//   - skip 26028976 居酒屋 ニュータコヤクシ (one of seven "ニュー〜" izakaya of 株式会社マネジメントブレーン)
//   - skip 26042842 しんぱち食堂 ゼスト御池店 (chain)
//   + 石臼挽 手打ちそば 蒼 Sou (stone-milled juwari soba, lunch only, Furukawa-cho) — rest
//   + イザカヤ ちりえーじょ Izakaya Ciliegio (seafood, wagyu and Kyoto vegetables with natural wine, Higashinotoin-Rokkaku) — rest
//   - skip 26044546 かきだ鮨 はなれ sekka (thin: two reviews)
//   - skip 26028292 シズヤパン 四条烏丸店 (chain, earlier ruling 26022799)
//   - skip 26014348 京都･六角 蕪村菴 本店 (retail food shop)
//   + ILHA FORMOSA (creative Taiwanese run by a Taiwanese owner and spouse, Higashinotoin-Takatsuji) — rest
//   + 麺や TORICHU Menya TORICHU (Kyoto-chicken paitan ramen from a 60-year-old chicken shop, Higashiyama Yasui) — rest
//   Rest tier, nearest-first from `next rest 2000`. queue-status.jsonl grepped for each brand: シズヤパン is ruled a chain (26022799);
//   no rulings for ニュータコヤクシ, しんぱち, 蒼, ちりえーじょ, かきだ, 蕪村菴, ILHA FORMOSA or TORICHU.
//   Same-name counts first (2026-11-08): 蒼 — one. ちりえーじょ — one. ILHA FORMOSA — one. TORICHU — one (its parent is a Kyoto
//   chicken shop said to be 60 years old). None of the four is in data/kyoto.json.
//   Retail rule (Greg 11-07): 蕪村菴's site (buson-an.co.jp, read 2026-11-08) gives no founding year, no family history and no GF
//   or vegan claim; it is a takeaway okaki shop, so skipped.
//   Charges per Tabelog's Japanese original: ちりえーじょ 「つきだし料500円」; 蒼, ILHA FORMOSA and TORICHU none listed. No halal
//   claims; no owner deaths; single-review remarks about other diners left out.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-81');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26028976', 'chain: 居酒屋 ニュータコヤクシ is one of seven "ニュー〜" izakaya (ニューエビスノ, ニューシンマチ, ニュー鳥丸, ニュータコヤクシ, ニューテラマチ, ニュー東寺, ニュー百万遍) among about a dozen Kyoto shops of 株式会社マネジメントブレーン (https://management-brain.jp/; https://tabelog.com/en/kyoto/A2601/A260201/26028976/).');
skip('26042842', 'chain: しんぱち食堂 — a national grilled-fish set-meal chain (https://tabelog.com/en/kyoto/A2601/A260201/26042842/).');
skip('26044546', 'thin: かきだ鮨 はなれ sekka has two Tabelog reviews — not enough sourced detail to draft (https://tabelog.com/en/kyoto/A2601/A260202/26044546/).');
skip('26028292', 'chain: シズヤパン is the Kyoto bakery chain 志津屋, already ruled a chain at 26022799 (https://tabelog.com/en/kyoto/A2601/A260201/26028292/).');
skip('26014348', 'retail food shop (Greg 11-07 ruling): 蕪村菴 本店 is a takeaway okaki shop; its site gives no founding year or family history and no GF or vegan claim (http://www.buson-an.co.jp/; https://tabelog.com/en/kyoto/A2601/A260202/26014348/).');

// ================================================================ 石臼挽 手打ちそば 蒼
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26042164/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '15:00']);
  put({
    id: 'kyoto_teuchi_soba_sou', name: '石臼挽 手打ちそば 蒼 (Ishiusubiki Teuchi Soba Sou)', category: 'OMNI',
    lat: 35.007123, lng: 135.777095, cuisine_type: 'udon_soba',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Juwari (100% buckwheat) soba is made fresh daily and is good with just salt (August and November 2026), but there is also 80% soba, the dipping sauce is soy-based and tempura is served; no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi-based dipping sauce, duck nanban, tempura sets (2026 reviews).',
    hours_raw: 'Mon and Wed–Sun 11:00–15:00 (lunch only); closed Tuesday and often Monday; may change (Tabelog). No cards; e-money and QR (Tabelog). A stone mill by the entrance; noodles made fresh each day (August 2026). Ground floor of an apartment-style building near Furukawa-cho, on Komonmae-dori at the edge of Gion, near Higashiyama station (Tabelog; November 2025; February and August 2026).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Komonmae-dori, near Furukawa-cho — Higashiyama',
    cuisine: 'Stone-milled, hand-cut soba, lunch only · juwari zaru soba with large shiitake; soba-yu (November 2025) · 80% zaru soba; soba pudding (February 2026) · duck nanban; appetizers with drinks (May 2026) · juwari made fresh daily on the stone mill (August 2026) · inaka soba set with tempura (October 2026) · juwari soba eaten with salt (November 2026)',
    website: null, gmaps: gm('石臼挽 手打ちそば 蒼'), menu_url: TB,
    notes: '[Hand-cut soba · Furukawa-cho, lunch only] A clean, quiet soba shop in an apartment building near Furukawa-cho market, milling buckwheat on a stone mill by the door and cutting juwari (100% buckwheat) noodles fresh each day — good enough to eat with just salt — plus inaka soba with tempura, duck nanban and soba pudding. Lunch only; closed Tuesday and often Monday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per reviews: a soba shop with a stone mill by its entrance, making juwari soba fresh every day (August 2026).',
      philosophy: null, specialty: 'Stone-milled juwari soba.',
      anecdotes: [
        { text: 'A November 2025 visitor came on from buying fresh wheat gluten in Furukawa-cho and found large, perfectly cooked shiitake on the soba.', source: R + 'B517672050/' },
        { text: 'An August 2026 visitor, nervous at the apartment-like entrance, found a spotless room and a stone mill grinding the day’s flour.', source: R + 'B534096840/' },
        { text: 'A November 2026 diner found the juwari soba delicious with nothing but salt.', source: R + 'B538915646/' },
      ],
      japanese_sources_summary: '食べログ: そば、東山区古西町310-1、月・水〜日11:00〜15:00、火曜休み (月曜も休みが多い)、カード不可、電子マネー・QR 可。口コミ (2024年12月〜2026年11月、英語): 古川町の近く、Komonmae 通、マンションのような建物の1階、入口の石臼、毎日打つ十割そば、大きな椎茸のそば、二八のざる、そばプリン、鴨南蛮、田舎そばと天ぷらのセット、塩だけで食べる十割そば。',
      confidence: 'medium', sources: [TB, R + 'B495872333/', R + 'B500879799/', R + 'B510490773/', R + 'B517672050/', R + 'B523567155/', R + 'B526175844/', R + 'B528641151/', R + 'B534096840/', R + 'B534119016/', R + 'B535053135/', R + 'B537767190/', R + 'B538915646/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ask for juwari soba and try it with salt first. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区古西町310-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.007123, 135.777095); cross-checked: GSI 京都府京都市東山区古西町310番地 (lot) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No item prices in the sources; reviewers report ¥1,000–2,999 per person.', last_checked: TODAY, items: [
      it('', '', 'Juwari zaru soba (100% buckwheat)', '', 'Soba', 'ask', 'no', 'November 2025; August and November 2026.', 'juwari'),
      it('', '', 'Inaka soba set with tempura', '', 'Sets', 'no', 'no', 'October 2026.', 'inaka_tempura'),
      it('', '', 'Duck nanban soba', '', 'Soba', 'ask', 'no', 'May 2026.', 'kamonanban'),
      it('', '', 'Soba pudding', '', 'Dessert', 'ask', 'no', 'February 2026.', 'soba_pudding'),
    ] }, {
    cuisine: '石臼挽きの手打ちそば、昼のみ・大きな椎茸の十割のざるそば、そば湯 (2025年11月)・二八のざるそば、そばプリン (2026年2月)・鴨南蛮、酒のあて (2026年5月)・石臼で毎日打つ十割そば (2026年8月)・天ぷら付きの田舎そばのセット (2026年10月)・塩で食べる十割そば (2026年11月)',
    neighborhood: '古川町の近く。東山',
    gf_detail: '要確認。毎日打つ十割そばは塩だけでもおいしい (2026年8月・11月) が、二八そばもあり、つゆは醤油ベースで、天ぷらもある。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。出汁のつゆ、鴨南蛮、天ぷらのセット (2026年の口コミ)。',
    notes: '[手打ちそば・古川町、昼のみ] 古川町商店街の近く、マンションの1階の清潔で静かなそば屋。入口の石臼でそばを挽き、毎日十割そばを打つ。塩だけでもおいしい。天ぷら付きの田舎そば、鴨南蛮、そばプリンも。昼のみ、火曜と月曜の多くは休み。',
  });
}

// ================================================================ イザカヤ ちりえーじょ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26041930/'; const R = TB + 'dtlrvwlst/'; const SITE = 'https://www.ciliegio1101.com/';
  const H = day(['17:00', '00:00']);
  put({
    id: 'kyoto_izakaya_ciliegio', name: 'イザカヤ ちりえーじょ (Izakaya Ciliegio)', category: 'OMNI',
    lat: 35.007507, lng: 135.760893, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Seafood, sashimi and wagyu, with fried dishes in the courses (2025–26 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood, oysters, wagyu and dashi-based dishes (Tabelog; 2025–26 reviews).',
    hours_raw: 'Daily 17:00–0:00 (last order 23:00); closing days may vary (Tabelog). Reservations accepted; courses with all-you-can-drink (Tabelog; January 2026). Appetizer charge ¥500 (Tabelog, Japanese text: 「つきだし料500円」). Cards; no e-money or QR (Tabelog). 24 seats: a 6-seat counter, tables for 8 and a private sunken-kotatsu room for 10 (Tabelog; October 2026). Non-alcoholic chuhai available (Tabelog). 朝陽ビル 1F, at the back, Higashinotoin north of Rokkaku, 5 min from Hankyu Karasuma or Karasuma Oike (Tabelog; October 2025). Opened 1 November 2024 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashinotoin, north of Rokkaku — Karasuma / Karasuma Oike',
    cuisine: 'Genre-free izakaya of fresh seafood, Kuroge wagyu and seasonal Kyoto vegetables, with local sake and natural wines (Tabelog) · seafood from many regions (October 2025) · all-you-can-drink course with a sashimi platter including seared fish and kombu (January 2026) · bamboo shoot and firefly squid appetizer; a rich broth for hot pot and oden (May 2026) · course of sashimi, fried dishes, meat and rice porridge to finish (June 2026) · fresh oysters and sashimi (October 2026)',
    website: SITE, gmaps: gm('イザカヤ ちりえーじょ 京都'), menu_url: TB,
    notes: '[Seafood izakaya · Higashinotoin-Rokkaku, since 2024] A tucked-away izakaya at the back of a building near Karasuma, with a counter, tables and a private sunken-kotatsu room, serving fish from around Japan — sashimi, oysters — plus Kuroge wagyu and Kyoto vegetables, with local sake and natural wine. Courses with all-you-can-drink; a talkative owner; ¥500 appetizer charge.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), described as entertaining and food-obsessed (October 2026)'], origin: null,
      background: 'Per Tabelog: an izakaya opened in November 2024, cooking genre-free dishes from fresh seafood, Kuroge wagyu and seasonal Kyoto vegetables.',
      philosophy: null, specialty: 'Seafood; sashimi; natural wine.',
      anecdotes: [
        { text: 'A January 2026 group of four on the all-you-can-drink course singled out the sashimi platter.', source: R + 'B521613668/' },
        { text: 'An October 2026 regular stayed drinking with the owner, swapping food stories, ahead of the anniversary.', source: R + 'B522347829/' },
        { text: 'An October 2026 host took clients to the private sunken-kotatsu room for oysters and sashimi.', source: R + 'B537174443/' },
      ],
      japanese_sources_summary: '食べログ・公式サイト: 居酒屋・日本料理・海鮮、中京区東洞院通六角上ル三文字町225 朝陽ビル 1F、阪急烏丸駅・地下鉄烏丸御池駅から徒歩5分、毎日17:00〜24:00 (L.O. 23:00)、不定休、つきだし料500円、カード可、24席 (カウンター6、テーブル8、個室10)、2024年11月1日オープン、新鮮な魚介、黒毛和牛、京野菜のジャンルにとらわれない料理、地酒と自然派ワイン、ノンアルコールのチューハイ、飲み放題のコース。口コミ (2024年11月〜2026年10月、英語): 各地の魚介、炙りの魚や昆布を添えた刺身の盛り合わせ、筍とホタルイカのお通し、刺身・揚げ物・肉・締めの雑炊のコース、生牡蠣、掘りごたつの個室、話好きの店主。',
      confidence: 'medium', sources: [TB, SITE, R + 'B495119690/', R + 'B496291695/', R + 'B504060672/', R + 'B515357461/', R + 'B520009576/', R + 'B521613668/', R + 'B522347829/', R + 'B522463310/', R + 'B528391743/', R + 'B529661240/', R + 'B530379869/', R + 'B537174443/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'The entrance is at the back of the building; private room for groups. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区東洞院通六角上ル三文字町225 朝陽ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.007507, 135.760970), offset 7 m west: kyr_mentomeshi_zakoya sat 1.6 m away; cross-checked: GSI 京都府京都市中京区三文字町225番地 (lot) 54m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No item prices in the sources; ¥500 appetizer charge; reviewers report ¥3,000–19,999 per person.', last_checked: TODAY, items: [
      it('', '', 'Sashimi platter', '', 'Sashimi', 'ask', 'no', 'January and October 2026.', 'sashimi'),
      it('', '', 'Fresh oysters', '', 'Seafood', 'ask', 'no', 'October 2026.', 'oysters'),
      it('', '', 'Course with all-you-can-drink', '', 'Courses', 'no', 'no', 'January and June 2026.', 'course'),
    ] }, {
    cuisine: '新鮮な魚介、黒毛和牛、旬の京野菜のジャンルにとらわれない居酒屋、地酒と自然派ワイン (食べログ)・各地の魚介 (2025年10月)・炙りの魚や昆布を添えた刺身の盛り合わせの飲み放題のコース (2026年1月)・筍とホタルイカのお通し、鍋やおでんに合いそうな濃い出汁 (2026年5月)・刺身、揚げ物、肉、締めの雑炊のコース (2026年6月)・生牡蠣と刺身 (2026年10月)',
    neighborhood: '東洞院、六角の北。烏丸・烏丸御池',
    gf_detail: '要確認。魚介、刺身、和牛、コースに揚げ物 (2025〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。魚介、牡蠣、和牛、出汁の料理 (食べログ、2025〜2026年の口コミ)。',
    notes: '[魚介の居酒屋・東洞院六角、2024年から] 烏丸近くのビルの奥にある居酒屋。カウンター、テーブル、掘りごたつの個室で、各地の魚の刺身、牡蠣、黒毛和牛、京野菜を、地酒や自然派ワインとともに。飲み放題のコースあり。話好きの店主。お通し500円。',
  });
}

// ================================================================ ILHA FORMOSA
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26041402/'; const R = TB + 'dtlrvwlst/';
  const LD = day(['12:00', '14:30'], ['17:00', '22:00']); const D = day(['17:00', '22:00']);
  put({
    id: 'kyoto_ilha_formosa', name: 'ILHA FORMOSA', category: 'OMNI',
    lat: 34.999255, lng: 135.761057, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: lu rou fan and appetizers in soy-based braising sauce; curry (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: braised pork, egg, meat with water spinach (2025–26 reviews).',
    hours_raw: 'Mon, Sat and Sun 12:00–14:30 (last order 14:15) and 17:00–22:00 (last order 21:15); Tue, Thu and Fri 17:00–22:00; closed Wednesday and the second and fourth Tuesdays (Tabelog). Reservations accepted (August 2026). Cards, e-money and QR (Tabelog). 28 seats: a counter of 8 and tables for 20; private hire from 18 people (Tabelog). Non-smoking (Tabelog). Behind a blue door near Higashinotoin-Takatsuji, 7 min from Shijo-Karasuma or Gojo (Tabelog; August 2026). Opened 16 June 2024 (Tabelog).',
    hours: { 0: LD, 1: D, 3: D, 4: D, 5: LD, 6: LD }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashinotoin-Takatsuji — Shijo / Gojo',
    cuisine: 'Creative Taiwanese cooking from a Taiwanese owner, in an antique-and-modern room; Quick Drink and five-appetizer Suisei courses (Tabelog; 2026 reviews) · Taiwanese railway bento with braised egg, pressed tofu, greens, pickled mustard greens and pork (May 2025) · assorted appetizers (December 2025) · lu rou fan (March and August 2026) · special curry; Taiwan beer (March 2026) · three-kind appetizer platter, large soup with corn (August 2026) · omelette, meat with water spinach, Kavalan highball (August 2026)',
    website: null, gmaps: gm('ILHA FORMOSA 京都'), menu_url: TB,
    notes: '[Taiwanese · Higashinotoin-Takatsuji, since 2024] A stylish, unexpectedly roomy Taiwanese restaurant behind a blue door, run by a Taiwanese owner and spouse: lu rou fan and railway-style bento at lunch, appetizer platters, omelettes, water spinach and a fiery curry at night, with Taiwan beer and Kavalan whisky. Closed Wednesday and alternate Tuesdays.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), from Taiwan, and spouse (March and August 2026)'], origin: 'Taiwan (March 2026)',
      background: 'Per Tabelog and reviews: a Taiwanese restaurant opened in June 2024, run by a couple; the owner is from Taiwan.',
      philosophy: null, specialty: 'Lu rou fan; creative Taiwanese dishes.',
      anecdotes: [
        { text: 'A May 2025 lunch guest chose the Taiwanese railway bento over the bestselling lu rou fan.', source: R + 'B509397548/' },
        { text: 'A March 2026 lunch guest chatted about Taiwan with the Taiwan-born owner over lu rou fan.', source: R + 'B523899268/' },
        { text: 'An August 2026 solo diner was looked after by the owner and spouse over Taiwan beer and a Kavalan highball.', source: R + 'B532933742/' },
      ],
      japanese_sources_summary: '食べログ: 台湾料理、下京区燈籠町592、四条烏丸・地下鉄四条駅・五条駅から徒歩7分、月・土・日12:00〜14:30 と17:00〜22:00、火・木・金17:00〜22:00、水曜と第2・第4火曜休み、カード・電子マネー・QR 可、28席 (カウンター8、テーブル20)、禁煙、2024年6月16日オープン、Quick Drink のコースと前菜5種の Suisei のコース。口コミ (2025年2月〜2026年8月、英語): 台湾出身の店主と奥さま、台湾の駅弁、魯肉飯、前菜の盛り合わせ、創作台湾料理、スペシャルカレー、台湾ビール、コーンのスープ、オムレツ、空芯菜と肉、Kavalan のハイボール、青い扉。',
      confidence: 'medium', sources: [TB, R + 'B492538919/', R + 'B503032249/', R + 'B509397548/', R + 'B519069027/', R + 'B519206226/', R + 'B521374227/', R + 'B522160778/', R + 'B523899268/', R + 'B524806198/', R + 'B525176322/', R + 'B532932412/', R + 'B532933742/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Look for the blue door; the Taiwanese owner enjoys talking about Taiwan (March 2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市下京区燈籠町592',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (34.999255, 135.761057); cross-checked: GSI 京都府京都市下京区燈籠町592番地 (lot) 20m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No item prices in the sources; reviewers report ¥1,000–1,999 at lunch and ¥5,000–9,999 at dinner.', last_checked: TODAY, items: [
      it('', '', 'Lu rou fan (braised pork rice)', '', 'Rice', 'no', 'no', 'March and August 2026.', 'luroufan'),
      it('', '', 'Taiwanese railway bento', '', 'Lunch', 'no', 'no', 'May 2025.', 'bento'),
      it('', '', 'Assorted appetizers', '', 'Small plates', 'ask', 'no', 'December 2025; August 2026.', 'appetizers'),
      it('', '', 'Meat with water spinach', '', 'Mains', 'ask', 'no', 'August 2026.', 'kongxincai'),
    ] }, {
    cuisine: '台湾出身の店主の創作台湾料理、アンティークとモダンの店内。Quick Drink のコースと前菜5種の Suisei のコース (食べログ、2026年の口コミ)・煮卵、押し豆腐、青菜、高菜漬け、豚肉の台湾の駅弁 (2025年5月)・前菜の盛り合わせ (2025年12月)・魯肉飯 (2026年3月・8月)・スペシャルカレー、台湾ビール (2026年3月)・前菜3種の盛り合わせ、コーン入りの大きなスープ (2026年8月)・オムレツ、肉と空芯菜、Kavalan のハイボール (2026年8月)',
    neighborhood: '東洞院高辻。四条・五条',
    gf_detail: 'グルテンフリーではない。醤油ベースのたれの魯肉飯や前菜、カレー (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。豚の煮込み、卵、空芯菜と肉 (2025〜2026年の口コミ)。',
    notes: '[台湾料理・東洞院高辻、2024年から] 青い扉の奥の、思いのほか広くおしゃれな台湾料理店。台湾出身の店主と奥さまが営む。昼は魯肉飯や駅弁風の弁当、夜は前菜の盛り合わせ、オムレツ、空芯菜、辛いカレーを台湾ビールや Kavalan とともに。水曜と隔週火曜休み。',
  });
}

// ================================================================ 麺や TORICHU
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26038402/'; const R = TB + 'dtlrvwlst/'; const SITE = 'https://www.menya-torichu.com/';
  const WD = day(['11:30', '16:00'], ['17:30', '21:00']); const WE = day(['11:30', '21:00']);
  put({
    id: 'kyoto_menya_torichu', name: '麺や TORICHU (Menya TORICHU)', category: 'OMNI',
    lat: 35.000599, lng: 135.777665, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thin wheat noodles; kara-age sets (2023–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken paitan broth and chicken chashu (2026 reviews).',
    hours_raw: 'Mon–Thu and the day before or after a holiday 11:30–16:00 and 17:30–21:00 (last order 20:30); Fri–Sun and holidays 11:30–21:00; open all year with occasional days off (Tabelog). Cards, e-money and PayPay (Tabelog). 12 seats incl. a counter (Tabelog; January 2026). Heated tobacco only, in a designated area (Tabelog). Bellagio Kyoto Kodaiji 1F on Higashiyama-dori, 1 min from the Higashiyama Yasui bus stop (Tabelog). Opened 26 September 2022 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WE, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashiyama-dori, Yasui — Gion-Shijo / Kiyomizu',
    cuisine: 'Chicken paitan ramen from a Kyoto chicken shop with 60 years of history, using local Akaji chicken and Kujo green onion; special shoyu ramen (Tabelog; June 2023) · paitan ramen set with kara-age and rice (June 2023) · smooth paitan with thin noodles and plenty of green onion (January 2026) · rich broth with tender chicken chashu (November 2026)',
    website: SITE, gmaps: gm('麺や TORICHU 東山'), menu_url: TB,
    notes: '[Chicken paitan ramen · Higashiyama Yasui] A twelve-seat ramen counter on the Higashiyama-dori walk between Yasaka Shrine and Kiyomizu, run by a Kyoto chicken shop with 60 years of history: a smooth, rich Akaji-chicken paitan with thin noodles, chicken chashu and lots of Kujo green onion, plus a shoyu bowl and kara-age sets. Open daily, until 21:00.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: opened in September 2022 by a long-established Kyoto chicken restaurant said to have 60 years of history, making Kyoto-style ramen with local chicken and Kujo green onion.',
      philosophy: null, specialty: 'Kyoto-chicken paitan ramen.',
      anecdotes: [
        { text: 'A June 2023 visitor followed a banner reading "ramen made by a chicken shop founded in Kyoto 60 years ago" and had the set with kara-age and rice.', source: R + 'B466965023/' },
        { text: 'A January 2026 weekday lunch guest found the counter empty and had a bowl in about five minutes.', source: R + 'B521023053/' },
        { text: 'A November 2026 diner found the broth rich and the chicken chashu tender, if a little pricey for the location.', source: R + 'B538657766/' },
      ],
      japanese_sources_summary: '食べログ・公式サイト: ラーメン、東山区毘沙門町31 ベラジオ京都高台寺 1F、東山安井バス停から徒歩1分、祇園四条駅から約12分、月〜木・祝日前後11:30〜16:00 と17:30〜21:00 (L.O. 20:30)、金〜日・祝日11:30〜21:00、年中無休 (不定休あり)、カード・電子マネー・PayPay 可、12席、加熱式たばこのみ分煙、2022年9月26日オープン、創業60年の鶏料理店の、京都の地鶏と Kujo ねぎの鶏白湯ラーメン、特製醤油ラーメン。口コミ (2022年11月〜2026年11月、英語): なめらかな鶏白湯と細麺、たっぷりのねぎ、鶏チャーシュー、からあげとご飯のセット。',
      confidence: 'medium', sources: [TB, SITE, R + 'B456321689/', R + 'B459668201/', R + 'B460293590/', R + 'B463338150/', R + 'B466965023/', R + 'B490611851/', R + 'B521023053/', R + 'B538657766/'] },
    cultural_comfort: { level: 'none_needed', note: 'A small counter on a busy sightseeing street; quick service.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区毘沙門町31 ベラジオ京都高台寺 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.000599, 135.777665); cross-checked: GSI 京都府京都市東山区毘沙門町31番地 (lot) 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No item prices in the sources; reviewers report ¥1,000–1,999 per person.', last_checked: TODAY, items: [
      it('', '', 'Chicken paitan ramen', '', 'Ramen', 'no', 'no', 'January and November 2026.', 'paitan'),
      it('', '', 'Special shoyu ramen', '', 'Ramen', 'no', 'no', 'Tabelog.', 'shoyu'),
      it('', '', 'Ramen set with kara-age and rice', '', 'Sets', 'no', 'no', 'June 2023.', 'set'),
    ] }, {
    cuisine: '創業60年の京都の鶏料理店の、地鶏 (Akaji) と Kujo ねぎの鶏白湯ラーメン、特製醤油ラーメン (食べログ、2023年6月)・からあげとご飯の鶏白湯ラーメンのセット (2023年6月)・細麺となめらかな白湯、たっぷりのねぎ (2026年1月)・濃厚なスープとやわらかい鶏チャーシュー (2026年11月)',
    neighborhood: '東大路、東山安井。祇園四条・清水',
    gf_detail: 'グルテンフリーではない。小麦の細麺、からあげのセット (2023〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鶏白湯のスープと鶏チャーシュー (2026年の口コミ)。',
    notes: '[鶏白湯ラーメン・東山安井] 八坂神社と清水のあいだの東大路沿いの12席のラーメン店。創業60年の京都の鶏料理店が営む。地鶏のなめらかで濃厚な鶏白湯に細麺、鶏チャーシュー、たっぷりの Kujo ねぎ。醤油ラーメンやからあげのセットも。毎日21時まで。',
  });
}

save();
