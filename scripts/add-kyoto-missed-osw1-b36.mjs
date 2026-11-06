// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 36.
//   + 麺屋 とりひさ Menya Torihisa (chicken-broth ramen in a chicken shop near Okazaki)
//   + NINUKI (egg-sandwich shop on Yabushita-cho, Shimogyo)
//   + 錦・だいやす Nishiki Daiyasu (oyster bar in Nishiki Market, family business since 1921)
//   + 菊水 Kikusui (1916 Western-style restaurant at the east end of Shijo Ohashi, opposite Minami-za)
//   - 竈炊き立てごはん 土井 京都駅八条口店 (26026058): skipped (reason below).
//   Picked on 2026-11-06: from `queue.mjs kyoto-missed next core 200`, lane ids 26040032, 26038220; from `next notable
//   200`: 26026058 (skipped), 26005004, 26001440. None is in data/kyoto.json by name (とりひさ/Torihisa, NINUKI, だいやす/
//   Daiyasu, 菊水 — 南禅寺参道 菊水 is an unrelated Nanzen-ji ryokan restaurant with its own site) or address (蓮華蔵町31,
//   藪下町6, 中魚屋町509, 四条大橋東詰南座前).
//   Same-name count (same brand or operator only): とりひさ — the ramen shop of a Higashiyama chicken shop of the same name
//   (April 2026 review); NINUKI, だいやす, 菊水 — one shop each in the sources opened. Large-parent list checked.
//   Service charges, checked against Tabelog's Japanese original: だいやす — the English page says a service charge “may be
//   added”, but the original reads なし (none); 菊水 — 10% service charge only for reserved use of the 3rd and 4th floors.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-36');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26026058', '竈炊き立てごはん 土井 京都駅八条口店: a branch of a sub-brand of a famous brand house — the restaurant brand of 土井志ば漬本舗 (Doi Shibazuke Honpo; Tabelog lists its official site at doishibazuke.co.jp), with three 竈炊き立てごはん 土井 shops (本店, 祇園店, 京都駅八条口店) and seven or more 土井志ば漬本舗 shops in a Tabelog Kyoto name search (2026-11-06); flagged as a large-parent call for the coordinator');

// ================================================================ 麺屋 とりひさ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26040032/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '14:00']);
  put({
    id: 'kyoto_menya_torihisa', name: '麺屋 とりひさ (Menya Torihisa)', category: 'OMNI',
    lat: 35.013828, lng: 135.776722, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat ramen noodles in shoyu, chicken paitan and abura soba; fried chicken kara-age (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken broths and chicken toppings; the shop is part of a chicken shop (2025–2026 reviews).',
    hours_raw: '11:00–14:00 (L.O. 14:00); closed Thursday (Tabelog). No reservations (Tabelog). Pay first, then sit (March 2026). No cards or e-money; PayPay and other QR codes (Tabelog). 8 seats: 4 at the counter and a table for 2 (Tabelog); a counter inside a chicken shop that also sells meat and kara-age bento (2026 reviews). Non-smoking; school-age children welcome (Tabelog). Shogoin, 5 min from the Higashiyama-Nijo / Okazaki-koen bus stop and about 6 min from Miyako Messe (Tabelog; October 2026). Opened 10 October 2023 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shogoin, west of Okazaki — 6 min from Miyako Messe',
    cuisine: 'Chicken ramen from a chicken specialist (April 2026): a clear chicken-broth shoyu ramen ¥850 (November 2025) and a frothy chicken paitan; special shoyu ramen with seasoned egg ¥1,290 (May 2026) · noodles from a Kyoto noodle maker the reviewer calls “Teigaku”, firmness on request (July 2026) · chilled shio ramen in summer (May 2026) · abura soba with vinegar, spicy miso and rich mayonnaise (September 2026) · chicken kara-age; chicken rice bowl (2025–2026) · pickled daikon on the table (July 2026)',
    website: null, gmaps: gm('麺屋 とりひさ 聖護院'), menu_url: null,
    notes: '[Ramen · Shogoin near Okazaki, inside a chicken shop] An eight-seat lunch counter tucked into a chicken shop near Miyako Messe and Heian Shrine, said by a reviewer to belong to the Higashiyama chicken specialist Torihisa: clear or creamy chicken-broth ramen from ¥850 with chicken chashu, abura soba, and the shop’s own kara-age. Pay first; PayPay or cash. Lunch only; closed Thursdays.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed) of the chicken shop Torihisa'], origin: null,
      background: 'An April 2026 reviewer writes that the shop is run by “Torihisa,” a chicken specialty restaurant in Higashiyama; others describe a ramen counter attached to a butcher-style chicken shop that sells meat and kara-age bento, with friendly staff (March and September 2026).',
      philosophy: null, specialty: 'Chicken-broth shoyu and chicken paitan ramen; kara-age.',
      anecdotes: [
        { text: 'A September 2025 regular comes every June and August for events nearby and brought a daughter home from Tokyo.', source: R + 'B486477701/' },
        { text: 'An October 2026 visitor found it by searching for ramen near Miyako Messe during an event.', source: R + 'B537939403/' },
      ],
      japanese_sources_summary: '食べログ: 麺屋 とりひさ、ラーメン、左京区聖護院蓮華蔵町31 近建第二ビル1F、市バス東山二条・岡崎公園口から徒歩5分、11:00〜14:00、木曜定休、予約不可、カード・電子マネー不可、PayPay など QR決済可、8席 (カウンター4、テーブル2)、禁煙、小学生以上の子ども可、2023年10月10日オープン。口コミ (2025〜2026年、英語): 東山の鶏の専門店「とりひさ」の店、鶏肉や唐揚げ弁当も売る店内のカウンター、鶏ガラの醤油ラーメン850円、鶏白湯、特製醤油1,290円、夏は冷やし塩、油そば、唐揚げ、鶏丼、先に会計。',
      confidence: 'medium', sources: [TB, R + 'B473676840/', R + 'B486477701/', R + 'B516826311/', R + 'B523538261/', R + 'B524799149/', R + 'B528491640/', R + 'B530962236/', R + 'B535080798/', R + 'B536068621/', R + 'B537939403/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Pay at the counter first; small shop inside a chicken shop. PayPay or cash.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区聖護院蓮華蔵町31 近建第二ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.013828, 135.776722); cross-checked: GSI 京都府京都市左京区聖護院蓮華蔵町31番地 (lot) 40m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B516826311/', R + 'B530962236/'],
    price_note: 'Prices from November 2025 and May 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Chicken-broth shoyu ramen', '¥850', 'Ramen', 'no', 'no', 'November 2025.', 'shoyu_ramen'),
      it('', '', 'Special chicken-broth shoyu ramen (with egg)', '¥1,290', 'Ramen', 'no', 'no', 'May 2026.', 'tokusei_shoyu'),
      it('', '', 'Chicken paitan ramen', '', 'Ramen', 'no', 'no', '2026 reviews.', 'tori_paitan'),
      it('', '', 'Chicken kara-age', '', 'Sides', 'no', 'no', '2026 reviews.', 'karaage'),
    ] }, {
    cuisine: '鶏の専門店のラーメン (2026年4月): 澄んだ鶏ガラの醤油ラーメン850円 (2025年11月)、泡立つ鶏白湯、味玉入りの特製醤油ラーメン1,290円 (2026年5月)・口コミが「Teigaku」と呼ぶ京都の製麺所の麺、麺の硬さを選べる (2026年7月)・夏は冷やし塩ラーメン (2026年5月)・酢、辛味噌、濃いマヨネーズで食べる油そば (2026年9月)・鶏の唐揚げ、鶏丼 (2025〜2026年)・卓上のたくあん (2026年7月)',
    neighborhood: '岡崎の西、聖護院。みやこめっせから徒歩6分',
    gf_detail: 'グルテンフリーではない。小麦のラーメンの麺 (醤油、鶏白湯、油そば)、鶏の唐揚げ (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。鶏のスープと鶏のトッピング。鶏肉店の中の店 (2025〜2026年の口コミ)。',
    notes: '[ラーメン・聖護院、鶏肉店の中] みやこめっせや平安神宮の近く、鶏肉店の中にある8席の昼だけのカウンター。口コミによれば東山の鶏の専門店「とりひさ」の店で、澄んだ醤油かクリーミーな鶏白湯のラーメンが850円から、鶏チャーシュー、油そば、店の唐揚げも。先に会計、PayPay か現金。昼のみ、木曜休み。',
  });
}

// ================================================================ NINUKI
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26038220/'; const R = TB + 'dtlrvwlst/';
  const H = day(['09:00', '17:00']);
  put({
    id: 'kyoto_ninuki_yabushita', name: 'NINUKI', category: 'OMNI',
    lat: 34.998593, lng: 135.755287, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: egg sandwiches on white bread (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an egg-sandwich shop — boiled, scrambled and fried eggs with mayonnaise, ham, tuna or mentaiko (2025–2026 reviews).',
    hours_raw: '9:00–17:00; irregular closures (Tabelog). No reservations (Tabelog). Cards (AMEX), e-money, PayPay and QR (Tabelog; November 2026). 6 seats; take-away too (Tabelog; May 2026). Non-smoking (Tabelog). A yellow, egg-themed room with an egg song playing and coffee in egg-shaped cups (April and July 2026). On Yabushita-cho in Shimogyo, about 540 m from Gojo Stn; coin parking nearby (Tabelog; 2025 review). Opened 1 September 2022 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shimogyo between Shijo and Gojo, west of Karasuma — 7 min from Gojo Stn',
    cuisine: 'Egg sandwiches — “ninuki” is Kyoto dialect for a boiled egg (July 2026 review) · mashed boiled-egg or scrambled-egg sandwiches, or a double of both; scrambled ¥550 (August 2026) · ham and egg about ¥600 (November 2026); egg double and bacon-lettuce about ¥1,560 for two (February 2025) · fried egg with mayonnaise and ham; soft-boiled egg; tuna egg; teriyaki egg; mentaiko egg (April–May 2026) · omelette and egg-salad set; sandwiches around ¥450 each (October 2026) · coffee in egg-shaped cups (July 2026)',
    website: null, gmaps: gm('NINUKI 京都 たまごサンド'), menu_url: null,
    notes: '[Egg sandwiches · Shimogyo, a yellow egg café] A tiny six-seat, all-yellow café — an egg song on the speakers, coffee in egg-shaped cups — making nothing but egg sandwiches: mashed boiled egg, scrambled, fried egg with ham, teriyaki or mentaiko, generously filled, from about ¥450–600. Eat in or take away; open 9:00–17:00. The name is Kyoto dialect for a boiled egg.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'No owner is named in the sources read. A February 2025 reviewer found the service very pleasant but the bread a little dry; on a later visit (November 2026) the bread was moist. A July 2026 reviewer recalled a grandmother explaining that “ninuki” means the boiled egg served with morning coffee and toast.',
      philosophy: null, specialty: 'Egg sandwiches.',
      anecdotes: [
        { text: 'An April 2026 visitor could not get the shop’s egg song out of the visitor’s head for the rest of the day.', source: R + 'B526935587/' },
        { text: 'An April 2026 restaurateur on a camper-van trip to Ise called the soft-boiled egg sandwich the best egg sandwich ever.', source: R + 'B526940366/' },
      ],
      japanese_sources_summary: '食べログ: NINUKI、サンドイッチ、下京区藪下町6、五条駅から538m、9:00〜17:00、不定休、予約不可、カード (AMEX)・電子マネー・QR可、6席、禁煙、2022年9月1日オープン。口コミ (2025〜2026年、英語): たまごサンドの専門店、「にぬき」は京都の言葉でゆで卵、ゆで卵をつぶしたものかスクランブルか両方、スクランブル550円、ハムエッグ約600円、照り焼き、明太子、ツナ、目玉焼き、黄色い店内、卵の歌、卵形のカップのコーヒー、持ち帰り可。',
      confidence: 'medium', sources: [TB, R + 'B501783662/', R + 'B526935587/', R + 'B526940366/', R + 'B527889908/', R + 'B528723914/', R + 'B531091406/', R + 'B532731750/', R + 'B533773887/', R + 'B534205752/', R + 'B537455075/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Point-and-order sandwich counter; take-away available.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区藪下町6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (34.998593, 135.755287); cross-checked: GSI 京都府京都市下京区藪下町6番地 (lot) 25m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533773887/', R + 'B501783662/'],
    price_note: 'Prices from 2025–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Scrambled-egg sandwich', '¥550', 'Sandwiches', 'no', 'no', 'August 2026.', 'scrambled_sando'),
      it('', '', 'Ham and egg sandwich', '¥600', 'Sandwiches', 'no', 'no', 'November 2026, about ¥600.', 'ham_egg_sando'),
      it('', '', 'Teriyaki egg sandwich', '', 'Sandwiches', 'no', 'no', 'April–May 2026.', 'teriyaki_egg_sando'),
    ] }, {
    cuisine: 'たまごサンド。「にぬき」は京都の言葉でゆで卵 (2026年7月の口コミ)・つぶしたゆで卵かスクランブルエッグ、両方のダブルも。スクランブル550円 (2026年8月)・ハムエッグ約600円 (2026年11月)、ダブルとベーコンレタスで約1,560円 (2025年2月)・目玉焼きとマヨネーズとハム、半熟卵、ツナ、照り焼き、明太子 (2026年4〜5月)・オムレツとたまごサラダのセット、1つ約450円 (2026年10月)・卵形のカップのコーヒー (2026年7月)',
    neighborhood: '烏丸の西、四条と五条の間の下京区。五条駅から徒歩7分',
    gf_detail: 'グルテンフリーではない。食パンのたまごサンド (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。たまごサンドの店。ゆで卵、スクランブル、目玉焼きにマヨネーズ、ハム、ツナ、明太子 (2025〜2026年の口コミ)。',
    notes: '[たまごサンド・下京区、黄色い卵のカフェ] 卵の歌が流れ、卵形のカップでコーヒーが出る、黄色づくしの6席の小さなカフェ。メニューはたまごサンドだけ。つぶしたゆで卵、スクランブル、ハムと目玉焼き、照り焼き、明太子など、具がたっぷりで450〜600円ほど。店内でも持ち帰りでも。9時〜17時。店名は京都の言葉でゆで卵のこと。',
  });
}

// ================================================================ 錦・だいやす
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26005004/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://kyoto-nishiki.or.jp/stores/daiyasu/index.html';
  const H = day(['11:00', '19:00']);
  put({
    id: 'kyoto_nishiki_daiyasu', name: '錦・だいやす (Nishiki Daiyasu)', category: 'OMNI',
    lat: 35.004966, lng: 135.762721, cuisine_type: 'oyster',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Raw oysters are naturally gluten-free, but sauces are not described; fried oysters, tempura and oyster gratin contain wheat (Tabelog shop text; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an oyster and seafood bar (Tabelog shop text; 2026 reviews).',
    hours_raw: '11:00–19:00 (L.O. 18:30) daily; hours may vary (Tabelog). No reservations (Tabelog). No service charge (Tabelog, original なし; the English page’s “a service charge may be added” is a mistranslation). Cards, IC, e-money and QR (Tabelog; PayPay per September 2026). 38 seats: 18 at the counter and two tables inside, plus a back garden with 4 counter seats and two tables (Tabelog). Non-smoking; wheelchair accessible; children and strollers welcome (Tabelog). English, Simplified Chinese and Korean menus with photos; digital menu (Tabelog). In Nishiki Market between Takakura and Sakaimachi, about 4 min from Hankyu Karasuma Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishiki Market east of Takakura — 4 min from Hankyu Karasuma Stn',
    cuisine: 'An oyster shop founded in 1921: four kinds of raw oysters, all safety-tested, plus sashimi, obanzai and tempura (Tabelog shop text) · assorted four raw oysters ¥2,750 — e.g. Akkeshi “Maruemon” (Hokkaido), Kagoshima rock oysters, Kamaishi (Iwate) (August 2026); Kijima (Hiroshima) (October 2026); origins change with the season (September 2026) · grilled, steamed and fried oysters; oyster gratin (2026 reviews) · simmered isotsubu shellfish; grilled ginkgo nuts (September–October 2026) · a set of steamed oysters with a drink, three raw oysters and fried oysters (October 2026) · draft beer and sake',
    website: SITE, gmaps: gm('錦・だいやす 錦市場'), menu_url: null,
    notes: '[Oysters · Nishiki Market, since 1921] A long counter and a small back garden inside Nishiki Market where a fourth-generation oyster family shucks four kinds of raw oysters from around Japan — about ¥2,750 for an assortment of four — alongside fried and grilled oysters, gratin and sashimi. Multilingual menus; no reservations; quieter in mid-afternoon. No service charge.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), fourth generation per the shop text'], origin: null,
      background: 'Tabelog’s shop text: founded in 1921, when the current owner’s great-grandfather began selling oysters from a boat at the foot of Shijo Ohashi, later setting up the shop in Nishiki Market. Reviewers praise friendly staff and an enthusiastic young woman calling in customers at the front (October 2026); an August 2026 first-timer found the system unclear until asking.',
      philosophy: 'Fresh oysters, rigorously tested for safety (Tabelog shop text).', specialty: 'Raw oysters; oyster gratin.',
      anecdotes: [
        { text: 'An October 2026 couple shared twenty raw oysters and ordered the gratin twice.', source: R + 'B538066200/' },
        { text: 'An October 2026 regular hopes the shop keeps its style as Nishiki fills with inbound-oriented stalls.', source: R + 'B538694074/' },
      ],
      japanese_sources_summary: '食べログ: 錦・だいやす、牡蠣・魚介・オイスターバー、中京区錦小路通高倉東入中魚屋町509 京都市錦市場、阪急烏丸駅から徒歩約4分、毎日11:00〜19:00 (L.O.18:30)、予約不可、サービス料なし、カード・電子マネー・QR可、38席 (店内カウンター18・テーブル2、奥の庭にカウンター4・テーブル2)、禁煙、車椅子可、子ども可、英語・簡体字・韓国語メニュー。店の紹介: 1921年創業、現店主の曾祖父が四条大橋のたもとで船から牡蠣を売り、のちに錦市場に店を構えた、検査済みの生牡蠣4種、造り、おばんざい、天ぷら、奥に庭の席。口コミ (2026年、英語): 生牡蠣4種盛り2,750円、Akkeshi の Maruemon、焼き牡蠣、蒸し牡蠣、カキフライ、牡蠣グラタン、昼過ぎは空いている。',
      confidence: 'medium', sources: [TB, SITE, R + 'B534212923/', R + 'B534247488/', R + 'B535718861/', R + 'B535791091/', R + 'B535793359/', R + 'B536550429/', R + 'B538066200/', R + 'B538217327/', R + 'B538327000/', R + 'B538694074/'] },
    cultural_comfort: { level: 'english', note: 'English, Chinese and Korean menus with photos (Tabelog); ask staff about the ordering system.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区錦小路通高倉東入中魚屋町509 京都市錦市場',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004966, 135.762721); cross-checked: GSI 京都府京都市中京区中魚屋町509番地 (lot) 22m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534247488/'],
    price_note: 'One price from an August 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Assorted four raw oysters', '¥2,750', 'Oysters', 'ask', 'no', 'August 2026.', 'nama_kaki_4'),
      it('', '', 'Fried oysters', '', 'Oysters', 'no', 'no', '2026 reviews.', 'kaki_fry'),
      it('', '', 'Oyster gratin', '', 'Oysters', 'no', 'no', 'October 2026.', 'kaki_gratin'),
    ] }, {
    cuisine: '1921年創業の牡蠣の店: 検査済みの生牡蠣4種、造り、おばんざい、天ぷら (食べログの店の紹介)・生牡蠣4種盛り2,750円。Hokkaido の Akkeshi の Maruemon、Kagoshima の岩牡蠣、Iwate の Kamaishi など (2026年8月)、Hiroshima の Kijima (2026年10月)、産地は季節で変わる (2026年9月)・焼き牡蠣、蒸し牡蠣、カキフライ、牡蠣グラタン (2026年の口コミ)・いそつぶ貝の煮付け、焼き銀杏 (2026年9〜10月)・蒸し牡蠣とドリンク、生牡蠣3種とカキフライのセット (2026年10月)・生ビールと日本酒',
    neighborhood: '錦市場、高倉の東。阪急烏丸駅から徒歩4分',
    gf_detail: '要確認。生牡蠣そのものはグルテンフリーだが、たれは書かれていない。カキフライ、天ぷら、牡蠣グラタンは小麦を含む (食べログの店の紹介、2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。牡蠣と魚介の店 (食べログの店の紹介、2026年の口コミ)。',
    notes: '[牡蠣・錦市場、1921年から] 錦市場の中、長いカウンターと奥の小さな庭の席。4代目の牡蠣の店で、全国の生牡蠣4種 (4種盛りで約2,750円) に、カキフライ、焼き牡蠣、グラタン、造りも。多言語メニュー、予約不可、昼過ぎは比較的すいている。サービス料なし。',
  });
}

// ================================================================ 菊水
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26001440/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.restaurant-kikusui.com';
  const H = day(['10:00', '21:30']);
  put({
    id: 'kyoto_restaurant_kikusui_shijo', name: '菊水 (Restaurant Kikusui)', category: 'OMNI',
    lat: 35.003981, lng: 135.772275, cuisine_type: 'yoshoku',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free as a menu: bifkatsu, croquettes, beef stew with demi-glace, sandwiches, bread or rice with sets (official site; 2026 reviews). Ask for grilled dishes.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a Western-style meat and seafood menu (official site; 2026 reviews).',
    hours_raw: 'Ground floor café-restaurant 10:00–21:30; 2nd-floor French grill 11:00–20:00; rooftop beer garden in summer 16:30–22:00 (food L.O. 21:30; the 2026 season ran 7 May–17 October); open year-round (Tabelog; official site). Reservations accepted (Tabelog). 10% service charge only for reserved use of the 3rd and 4th floors (Tabelog). Cards; no e-money or QR (Tabelog). 400 seats over several floors; banquet halls on 3F–4F for up to 130; designated smoking area (Tabelog; official site). Children welcome, kids’ menu (Tabelog). Minami-za intermission bento ordered at the restaurant and collected at the theatre (October 2026). 10% off food and drink with the municipal Kamohigashi car park next door (Tabelog). At the east end of Shijo Ohashi, opposite Minami-za, by Gion-Shijo Stn exit 7 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'East end of Shijo Ohashi, opposite Minami-za — Gion-Shijo Stn',
    cuisine: 'Gion’s old Western-style restaurant, founded 1916, in a registered cultural property (official site) · ground floor café and parlour: bifkatsu and beef stew are the favourites (official site) · lunch sets with soup, salad, rice or bread, dessert and coffee: hamburg steak (100% beef) ¥2,640, cream croquette ¥2,420 (September 2026); seafood croquette set; beef stew set (September 2026) · hamburg steak sandwich (September 2026) · 2nd-floor French grill: Gion dinner, braised lobster, steaks, crêpes Suzette flambéed at the table, wines chosen by the owner-sommelier; a winter tiger-fugu and beef course (official site) · autumn dinner course ¥4,400 with charcuterie, chilled mushroom consommé, steak or beef stew (September 2026) · summer rooftop beer garden with BBQ sets about ¥5,200 before tax, overlooking the Kamo (September 2026) · take-away dishes (official site)',
    website: SITE, gmaps: gm('レストラン菊水 四条大橋'), menu_url: SITE,
    notes: '[Yoshoku · Shijo Ohashi opposite Minami-za, since 1916] A landmark Western-style restaurant in a registered cultural-property building at the Gion end of Shijo Ohashi: a retro ground-floor parlour for bifkatsu, beef stew and hamburg sets (about ¥2,400–2,700 with soup, dessert and coffee), a French grill upstairs with crêpes Suzette flambéed at the table, banquet halls, and a rooftop beer garden over the Kamo in summer. Handy before or between Kabuki at Minami-za.',
    chef_bio: { chef_name: null, roles: ['Owner-sommelier 奥村洋史 (official site)'], origin: null,
      background: 'The official site: founded in 1916 (Taisho 5) at the foot of Shijo Ohashi; the building is a registered tangible cultural property that keeps its original retro atmosphere; the owner, 奥村洋史, chooses the wines as sommelier and holds a Kyoto Prefecture fugu-handling licence. A September 2026 reviewer adds that the site was a rice-cracker shop before Kojiro Okumura turned it into a Western restaurant after a visit to Shanghai. A September 2026 diner on the autumn course found the service “horrendous from start to finish”; others praised quick service between Kabuki performances (October 2026).',
      philosophy: null, specialty: 'Bifkatsu; beef stew; crêpes Suzette.',
      anecdotes: [
        { text: 'An October 2026 Kabuki-goer ordered the “Gion” Western bento across from Minami-za and collected it at the theatre entrance in the first interval.', source: R + 'B537236163/' },
        { text: 'An October 2026 diner between afternoon and evening Kabuki performances had lunch on the table five minutes after ordering.', source: R + 'B537489672/' },
      ],
      japanese_sources_summary: '公式サイト: レストラン菊水、四条大橋のたもと、大正5年 (1916年) 創業、国登録文化財の建物、1Fはカフェ・喫茶・軽食のレストランパーラー (ビフカツ、ビーフシチューが人気)、2Fは本格フレンチグリル (祇園ディナー、ロブスターの煮込み、ステーキ、目の前でフランベするクレープシュゼット、オーナーソムリエ選びのワイン、冬はとらふぐと牛のコース、オーナー奥村洋史はふぐ処理師免許)、3F・4Fは130名までの宴会場、屋上ビアガーデン (2026年は5月7日〜10月17日)、テイクアウト。食べログ: 洋食・フレンチ・ビアガーデン、東山区四条大橋東詰南座前、1F 10:00〜21:30、2F 11:00〜20:00、年中無休、予約可、3・4F貸切はサービス料10%、カード可、400席、子ども可。口コミ (2026年、英語): ハンバーグ定食2,640円、クリームコロッケ定食2,420円、ビーフシチュー、秋のディナー4,400円、南座の幕間弁当、接客がひどかったとの声も。',
      confidence: 'medium', sources: [SITE, TB, R + 'B497466704/', R + 'B535608254/', R + 'B535836247/', R + 'B535904272/', R + 'B536095668/', R + 'B536242895/', R + 'B536336212/', R + 'B536539997/', R + 'B537236163/', R + 'B537489672/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Large, easy-going restaurant by Minami-za; a name list at the door when busy (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区四条大橋東詰南座前',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with October 2026 beer-garden notice; Tabelog reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.003981, 135.772275); GSI gives only the ward for this unnumbered address, so cross-checked with OpenStreetMap restaurant 菊水 (way 162038405) at 35.0040065, 135.7722921, about 3m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536336212/', R + 'B535904272/'],
    price_note: 'Prices from September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Hamburg steak set (soup, rice, dessert, coffee)', '¥2,640', 'Lunch', 'no', 'no', 'September 2026.', 'hamburg_set'),
      it('', '', 'Cream croquette set', '¥2,420', 'Lunch', 'no', 'no', 'September 2026.', 'croquette_set'),
      it('', '', 'Autumn dinner course', '¥4,400', 'Courses', 'no', 'no', 'September 2026.', 'autumn_course'),
      it('ビーフシチュー', '', 'Beef stew', '', 'Signature', 'no', 'no', 'Official site.', 'beef_stew'),
      it('ビフカツ', '', 'Bifkatsu', '', 'Signature', 'no', 'no', 'Official site.', 'bifkatsu'),
    ] }, {
    cuisine: '1916年創業、国登録文化財の建物の祇園の老舗洋食 (公式サイト)・1Fのカフェとパーラー: 人気はビフカツとビーフシチュー (公式サイト)・スープ、サラダ、ご飯かパン、デザート、コーヒー付きの昼のセット: ハンバーグ (牛100%) 2,640円、クリームコロッケ2,420円 (2026年9月)、シーフードコロッケ、ビーフシチュー (2026年9月)・ハンバーグサンド (2026年9月)・2Fのフレンチグリル: 祇園ディナー、ロブスターの煮込み、ステーキ、目の前でフランベするクレープシュゼット、オーナーソムリエが選ぶワイン、冬はとらふぐと牛のコース (公式サイト)・秋のディナーコース4,400円: シャルキュトリー、冷たいきのこのコンソメ、ステーキかビーフシチュー (2026年9月)・夏は鴨川を見下ろす屋上ビアガーデン、BBQ のセット税別約5,200円 (2026年9月)・テイクアウト (公式サイト)',
    neighborhood: '四条大橋の東詰、南座の向かい。祇園四条駅すぐ',
    gf_detail: 'メニューとしてはグルテンフリーではない。ビフカツ、コロッケ、デミグラスのビーフシチュー、サンドイッチ、セットのパンかご飯 (公式サイト、2026年の口コミ)。焼き物は要確認。',
    vegan_detail: 'ヴィーガンではない。肉と魚介の洋食 (公式サイト、2026年の口コミ)。',
    notes: '[洋食・四条大橋の南座前、1916年から] 四条大橋の祇園側のたもと、国登録文化財の建物の老舗洋食。1Fはレトロなパーラーで、ビフカツ、ビーフシチュー、ハンバーグのセット (スープ、デザート、コーヒー付きで2,400〜2,700円ほど)、2Fはクレープシュゼットを目の前でフランベするフレンチグリル、宴会場、夏は鴨川を見下ろす屋上ビアガーデン。南座の歌舞伎の前後や幕間にも。',
  });
}

save();
