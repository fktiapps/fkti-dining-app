// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 24.
//   + 逸品さかい Ippin Sakai (one-man kappo of value omakase courses, Takoyakushi Takakura)
//   + 京串カツ轟 Kyokushi Katsu Todoroki (sauce-free kushikatsu till 3 a.m., Gion)
//   + 一華 Ichihana (seven-seat kamameshi counter by Nijo Castle)
//   + 茶寮哲心 Saryo Tesshin (all-day 100% buckwheat soba, Karasuma Marutamachi)
//   Same-name counts first, per brand or operator (2026-11-05): 逸品さかい — one; 京串カツ轟 — one (Restaurant Todoroki in
//   another area of Kyoto is unrelated); 一華 — one; 哲心 — two of the brand: Soba ya Tesshin in Miyazaki and this Kyoto
//   shop, which a September 2026 review calls a popular Miyazaki City soba restaurant (a small group).
//   Taken on 2026-11-05: `next core 200` gave 逸品さかい 26034508 and 京串カツ轟 26038720; `next notable 200` gave
//   一華 26025178 and 茶寮哲心 26041180. None is in data/kyoto.json: grep by name and address (泉正寺町323 松本ビル,
//   祇園町北側347-26 ピッケルビル, 二条油小路町264-1, 真如堂町321-2) found none. 京串カツ轟 is in the same building as
//   kyoto_pingping_gion (ピッケルビル). Service charges per Tabelog's Japanese original: 轟 「お席チャージ料、お一人様200円+税
//   頂いております。」; 一華 「先付け 880円」; 逸品さかい and 哲心 none listed.
//   No shop asks diners not to post it; no remarks on anyone's looks are recorded (a review's remark on a staff member's looks
//   is left out).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-24');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 逸品さかい
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26034508/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '14:00'], ['18:00', '22:00']);
  put({
    id: 'kyoto_ippin_sakai', name: '逸品さかい (Ippin Sakai)', category: 'OMNI',
    lat: 35.006328, lng: 135.761806, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Omakase courses with dashi and soy, tempura and somen (2026 reviews). No gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish courses built on dashi (2026 reviews).',
    hours_raw: 'Lunch from 12:00 (enter by 13:00) and dinner from 18:00 (enter by 20:00); closed Tuesday (Tabelog). Reservations accepted (Tabelog). Lunch is cash only — no cards at lunch (Tabelog). Service in Japanese only (Tabelog). Lunch omakase ¥3,300 (7 dishes), with dearer lunch courses around ¥4,600; dinner omakase about ¥6,500 (Tabelog; June–October 2026). 19 seats: 8 at the counter and a semi-private sunken-kotatsu room for up to 12 (Tabelog). Free Wi-Fi (February 2026). On Takoyakushi west of Takakura; 4 min from Karasuma Stn (Tabelog). Opened 1 August 2020 (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Takoyakushi Takakura — 4 min from Karasuma Stn',
    cuisine: 'Seasonal Kyoto cooking as good-value omakase courses from a one-man kitchen (Tabelog, shop text; 2026 reviews) · lunch omakase ¥3,300 for 7 dishes, also ¥3,000 and ¥4,600 courses; dinner omakase ¥6,500 (Tabelog; June–October 2026) · sashimi including fatty tuna, matsutake dobin-mushi, bonito Saikyo-yaki, conger eel in sashimi and soup, sea-bream somen, tempura of sweetfish, eggplant and sweet potato, nama-fu, eel, clay-pot new rice with chirimen sansho, black-sesame dessert, seasonal fruit (July–October 2026) · sake from ¥800, Dassai about ¥1,500 (July 2026)',
    website: null, gmaps: gm('逸品さかい 烏丸 蛸薬師'), menu_url: TB + 'dtlmenu/',
    notes: "[Kappo · Karasuma, a one-man kitchen at lunch prices] A hidden kappo near Karasuma where the owner cooks every dish alone, yet serves a seven-dish seasonal lunch for ¥3,300 — sashimi, hot tempura, conger eel, clay-pot rice — and a ¥6,500 dinner omakase. Counter or a sunken-kotatsu room; Japanese-only service; cash at lunch. One July 2026 diner flagged housekeeping (a sticky floor, clutter in view). Closed Tuesday.",
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed), cooking every dish alone (2026 reviews)'], origin: null,
      background: 'Opened 1 August 2020 (Tabelog). Reviewers describe the owner preparing every dish single-handed, still stopping to explain dishes in the private room (July and November 2026), and a gentle, attentive manner (June and August 2026). The shop text pitches seasonal Kyoto flavours at reasonable prices, suited to memorial gatherings and longevity celebrations (Tabelog).',
      philosophy: 'Per Tabelog (the shop’s own text): "Enjoying the moment through interaction, not just flavor."',
      specialty: 'Value omakase courses; clay-pot rice.',
      anecdotes: [
        { text: 'A July 2026 diner liked the food but listed housekeeping lapses: cardboard by the entrance, a sticky floor, and papers and notebooks piled in view of guests.', source: R + 'B533117974/' },
        { text: 'A July 2026 diner celebrating a husband’s birthday had been brought here by a mother for a birthday years before.', source: R + 'B532062221/' },
        { text: 'An October 2026 regular used Tabelog points for the ¥4,600 course with the year’s first matsutake dobin-mushi.', source: R + 'B471921916/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理、中京区蛸薬師通高倉西入る泉正寺町323 松本ビル 101、烏丸駅から徒歩4分、昼 12:00〜 (13:00までに入店、カード不可)・夜 18:00〜 (20:00までに入店)、火曜休み、予約可、日本語のみの対応、昼のおまかせ3,300円 (7品)、19席 (カウンター8、掘りごたつの半個室)、2020年8月1日オープン、旬の京の味を手頃に。口コミ (2024年6月〜2026年11月、英語): 店主が一人で全部作る、昼3,000円・4,600円、夜のおまかせ6,500円、鱧、松茸の土瓶蒸し、天ぷら、土鍋の新米、日本酒800円から、床がべたつくなど清掃が気になったという声 (2026年7月)。',
      confidence: 'medium', sources: [TB, R + 'B471921916/', R + 'B487528930/', R + 'B522033061/', R + 'B532062221/', R + 'B532669117/', R + 'B533117974/', R + 'B533254431/', R + 'B533340902/', R + 'B533374751/', R + 'B535500854/', R + 'B535832526/', R + 'B536211501/'] },
    cultural_comfort: { level: 'japanese', note: 'Japanese-only service (Tabelog); book a course; cash at lunch.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区蛸薬師通高倉西入る泉正寺町323 松本ビル 101',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.006328, 135.761806); cross-checked: GSI 京都府京都市中京区泉正寺町323番地 (lot) 25m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B487528930/', R + 'B471921916/'],
    price_note: 'Lunch course price from the Tabelog set-menu page (tax included); other course prices from June–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch omakase (7 dishes)', '¥3,300', 'Lunch', 'ask', 'no', 'Tabelog; cash only at lunch.', 'lunch_omakase'),
      it('', '', 'Lunch omakase (with matsutake and premium sashimi in October)', '¥4,600', 'Lunch', 'ask', 'no', 'October 2026.', 'lunch_omakase_4600'),
      it('', '', 'Dinner omakase', '¥6,500', 'Dinner', 'ask', 'no', 'June and August 2026.', 'dinner_omakase'),
    ] }, {
    cuisine: '店主一人の厨房の、旬の京料理を手頃なおまかせで (食べログの店の紹介、2026年の口コミ)・昼のおまかせ7品3,300円、3,000円や4,600円のコースも。夜のおまかせ6,500円 (食べログ、2026年6〜10月)・とろを含むお造り、松茸の土瓶蒸し、鰹の西京焼き、鱧のお造りと椀、鯛そうめん、鮎・茄子・さつまいもの天ぷら、生麩、鰻、ちりめん山椒をのせた土鍋の新米、黒胡麻のデザート、季節の果物 (2026年7〜10月)・日本酒は800円から、Dassai は約1,500円 (2026年7月)',
    neighborhood: '蛸薬師高倉。烏丸駅から徒歩4分',
    gf_detail: '要確認。出汁と醤油のおまかせで、天ぷらやそうめんも出る (2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。出汁を使う魚のコース (2026年の口コミ)。',
    notes: '[割烹・烏丸、店主一人の昼の値段の割烹] 烏丸近くの隠れた割烹。店主が一人で全部作るが、昼は季節の7品が3,300円 (お造り、揚げたての天ぷら、鱧、土鍋ご飯)、夜のおまかせは6,500円。カウンターか掘りごたつの部屋で。日本語のみの対応、昼は現金のみ。2026年7月の客は床のべたつきや散らかりなど清掃を指摘。火曜休み。',
  });
}

// ================================================================ 京串カツ轟
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26038720/'; const R = TB + 'dtlrvwlst/';
  const W = day(['18:00', '03:00']); const S = day(['18:00', '24:00']);
  put({
    id: 'kyoto_kyokushikatsu_todoroki', name: '京串カツ轟 (Kyokushi Katsu Todoroki)', category: 'OMNI',
    lat: 35.004616, lng: 135.77668, cuisine_type: 'katsu',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: kushikatsu in a wheat batter, fried in shared oil (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: vegetable skewers share the fryer with meat and seafood, and seasonings include dashi soy (2025–26 reviews).',
    hours_raw: 'Mon–Sat 18:00–3:00 (last order 2:00); Sun 18:00–24:00 (last order 23:00); closed irregularly (Tabelog). Reservations accepted (Tabelog). Seat charge ¥200 a person plus tax (Tabelog, Japanese text: 「お席チャージ料、お一人様200円+税頂いております。」). 11 seats: 7–8 at the counter and a sunken-kotatsu table for 4; private hire up to 20 (Tabelog; July 2026). Smoking allowed (Tabelog). Cards, e-money and some QR (Tabelog). Up the stairs on the second floor of a Gion building, easy to miss; 5 min from Gion-Shijo Stn (Tabelog; August 2025). Opened 11 December 2022 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: W, 6: S }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion north of Shijo — 5 min from Gion-Shijo Stn',
    cuisine: 'Kushikatsu in a delicate batter, each seasoned to its ingredient so no sauce is needed (dashi soy and salt on the side), about 20 seasonal kinds (Tabelog, shop text; 2025–26 reviews) · omakase course of appetizers and 8 skewers ¥2,700 (Tabelog; July 2026) · pork, ume-shiso cheese, beef tongue, duck, sukiyaki, beef sirloin cap with yam, swordfish, nama-fu, asparagus, zucchini, eggplant, mizu-nasu, yam with nori tsukudani (2025–26 reviews) · daily seafood from Ishikawa, horse sashimi (Tabelog; 2025 reviews) · sake from around Japan, highballs (Tabelog; July 2026) · usually under ¥5,000–8,000 a head (2025–26 reviews)',
    website: null, gmaps: gm('京串カツ轟 祇園'), menu_url: TB + 'dtlmenu/',
    notes: "[Kushikatsu · Gion, sauce-free skewers till 3 a.m.] A small second-floor counter in Gion frying kushikatsu in a thin, light batter and seasoning each skewer so it needs no sauce — duck, beef tongue, swordfish, nama-fu, mizu-nasu. The ¥2,700 course of eight skewers and starters is a bargain for Gion; add horse sashimi or Ishikawa fish. ¥200 seat charge; smoking allowed. Open to 3:00 (midnight on Sunday).",
    chef_bio: { chef_name: null, roles: ['Chef and young staff (unnamed)'], origin: null,
      background: 'Per Tabelog (the shop’s own text): kushikatsu in a delicate batter with house-made sauces, daily seafood from Ishikawa and sake from around Japan; opened 11 December 2022. Reviewers mention a youthful team, sometimes one staff member on alone (August 2025, July 2026).',
      philosophy: null, specialty: 'Sauce-free kushikatsu.',
      anecdotes: [
        { text: 'An August 2025 diner found it still finding its direction, was put off seeing staff accept drinks from acquaintances while cooking, and might go elsewhere next time.', source: R + 'B512678142/' },
        { text: 'A July 2026 solo diner found one person serving six guests until a second arrived, and still ate eight skewers plus five more for under ¥5,000.', source: R + 'B532802829/' },
        { text: 'An August 2025 diner with a picky companion found the staff accommodating with the omakase.', source: R + 'B512905243/' },
      ],
      japanese_sources_summary: '食べログ: 串揚げ・居酒屋、東山区祇園町北側347-26 ピッケルビル 2F、祇園四条駅から徒歩5分、月〜土 18:00〜翌3:00 (L.O. 2:00)、日 18:00〜24:00 (L.O. 23:00)、不定休、予約可、お席チャージ1人200円+税、11席 (カウンター7、掘りごたつのテーブル4名)、貸切20名まで、喫煙可、カード・電子マネー可、2022年12月11日オープン、繊細な衣の串カツ、自家製ソース、Ishikawa の魚、全国の日本酒、おまかせ串揚げ8本と前菜2,700円。口コミ (2024年12月〜2026年9月、英語): ソースなしで食べる串カツ、牛タン、鴨、すき焼き、生麩、水茄子、馬刺し、祇園にしては安い、まだ方向性を模索中という声 (2025年8月)。',
      confidence: 'medium', sources: [TB, R + 'B498047078/', R + 'B504088323/', R + 'B507194499/', R + 'B509007886/', R + 'B512678142/', R + 'B512905243/', R + 'B514078923/', R + 'B525613586/', R + 'B528724766/', R + 'B532802829/', R + 'B534405255/', R + 'B535835153/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Take the omakase course or order skewers à la carte; ¥200 seat charge; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側347-26 ピッケルビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.004571, 135.776680); cross-checked: GSI 京都府京都市東山区祇園町北側347番地 (lot) 93m; the Tabelog point sits 1.7 m from kyoto_pingping_gion in the same ピッケルビル, so moved 5 m north to 35.004616; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B532802829/'],
    price_note: 'Course price from the Tabelog set-menu page and a July 2026 review; seat charge ¥200 plus tax (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Omakase kushiage course: appetizers and 8 skewers', '¥2,700', 'Course', 'no', 'no', 'Tabelog; July 2026.', 'kushiage_course'),
      it('', '', 'Seat charge (per person, plus tax)', '¥200', 'Charge', '', '', 'Tabelog.', 'seat_charge'),
    ] }, {
    cuisine: '繊細な衣で、素材ごとに味を付けてソースなしで食べる串カツ (出汁醤油と塩も添える)、季節の約20種 (食べログの店の紹介、2025〜2026年の口コミ)・前菜と串8本のおまかせ2,700円 (食べログ、2026年7月)・豚、梅しそチーズ、牛タン、鴨、すき焼き、牛イチボと長芋、かじき、生麩、アスパラ、ズッキーニ、茄子、水茄子、長芋と海苔の佃煮 (2025〜2026年の口コミ)・Ishikawa から届く日替わりの魚、馬刺し (食べログ、2025年の口コミ)・全国の日本酒、ハイボール (食べログ、2026年7月)・1人だいたい5,000〜8,000円以下 (2025〜2026年の口コミ)',
    neighborhood: '四条の北の祇園。祇園四条駅から徒歩5分',
    gf_detail: 'グルテンフリーではない。小麦の衣の串カツで、油は共用 (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。野菜の串も肉や魚介と同じ油で揚げ、出汁醤油も使う (2025〜2026年の口コミ)。',
    notes: '[串カツ・祇園、朝3時までのソースいらずの串] 祇園のビルの2階の小さなカウンター。薄く軽い衣で揚げ、串ごとに味を付けるのでソースはいらない。鴨、牛タン、かじき、生麩、水茄子など。前菜と串8本の2,700円のコースは祇園では破格で、馬刺しや石川の魚も。お席チャージ200円、喫煙可。翌3時まで (日曜は24時まで)。',
  });
}

// ================================================================ 一華
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26025178/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '14:00'], ['17:00', '21:00']);
  put({
    id: 'kyoto_ichihana_nijo', name: '一華 (Ichihana)', category: 'OMNI',
    lat: 35.012184, lng: 135.753282, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Courses with dashi and soy, tempura and a beef cutlet, finished with kamameshi (2024–26 reviews). No gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses built on dashi with fish and meat (2024–26 reviews).',
    hours_raw: 'Lunch 12:00–14:00 and dinner 17:00–21:00; closed Wednesday and Sunday (Tabelog). Because of a staff shortage, lunch is by phone reservation only (Tabelog). Appetizer charge ¥880 (Tabelog, Japanese text: 「先付け 880円」). Lunch: two kamameshi courses, with or without sashimi (September 2026); dinner courses from ¥7,700 (the basic Koka course, November 2024) or à la carte (December 2025, February 2026). 7 counter seats only (Tabelog). Non-smoking; cards, IC cards, e-money and QR (Tabelog). Near Nijo Castle; 3 min from Nijojo-mae Stn exit 2 (Tabelog). Opened 3 February 2015 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'By Nijo Castle — 3 min from Nijojo-mae Stn',
    cuisine: 'Seasonal Japanese cooking finished with kamameshi — about seven kinds, cooked to order in an iron pot (2024–26 reviews) · kamameshi of octopus and young ginger, oyster, crab, chicken and mushroom, clam (2024–26 reviews) · yuba with uni, sashimi of sea bream, kanpachi, yellowtail, bonito and sweet shrimp, chawanmushi, anago sashimi, braised sea-bream head, fried sweetfish, tempura of sakura shrimp and new onion, beef cutlet (2024–26 reviews) · lunch kamameshi courses about ¥3,000–5,000; dinner course from ¥7,700, about ¥8,000–15,000 a head (2024–26 reviews) · sake such as Eiko Fuji and Garyubai (February 2026)',
    website: 'https://nijo-ichihana.com/', gmaps: gm('一華 釜めし 二条城'), menu_url: TB + 'dtlmenu/',
    notes: "[Kamameshi kappo · Nijo Castle, seven seats and an iron pot] A seven-seat counter near Nijo Castle where the chef cooks alone and ends every meal with kamameshi — oyster, crab, octopus and young ginger — cooked to order with a crisp crust. Lunch is a kamameshi course (about ¥3,000–5,000, phone booking only); dinner is a course from ¥7,700 or à la carte with sake. ¥880 appetizer charge. Closed Wednesday and Sunday.",
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed), cooking alone at the counter (November 2025)'], origin: null,
      background: 'Opened 3 February 2015 (Tabelog). Reviewers describe a friendly owner-chef who runs the counter alone and talks with guests while cooking (2024–26 reviews); a December 2025 reviewer calls it a Bib Gourmand restaurant.',
      philosophy: null, specialty: 'Kamameshi; seasonal small dishes.',
      anecdotes: [
        { text: 'A February 2026 diner found the dishes slow to arrive but the care worth the wait.', source: R + 'B522070180/' },
        { text: 'A January 2025 same-day booker heard about the etiquette of doing business in Kyoto from the chef.', source: R + 'B499696813/' },
        { text: 'A November 2024 diner noted prices had been raised because of rising costs.', source: R + 'B495716264/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理・釜飯、中京区押小路油小路西入る二条油小路町264-1、二条城前駅2番出口から徒歩3分、昼 12:00〜14:00・夜 17:00〜21:00、水曜・日曜休み、人手不足のため昼は電話予約のみ、先付け880円、カウンター7席のみ、禁煙、カード・電子マネー・QR 可、2015年2月3日オープン。口コミ (2024年5月〜2026年9月、英語): 約7種の釜めし (蛸と新生姜、牡蠣、蟹、鶏ときのこ)、湯葉と雲丹、お造り、茶碗蒸し、鯛のあら炊き、天ぷら、牛カツ、夜のコース7,700円から、昼の釜めしコース、店主一人で切り盛り、ビブグルマンという声、料理が出るまで時間がかかるという声。',
      confidence: 'medium', sources: [TB, 'https://nijo-ichihana.com/', R + 'B443965196/', R + 'B488569030/', R + 'B491175979/', R + 'B492557387/', R + 'B495716264/', R + 'B499696813/', R + 'B511428801/', R + 'B513581595/', R + 'B518563563/', R + 'B519415296/', R + 'B522070180/', R + 'B537695229/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book by phone (lunch phone only); counter of seven; ¥880 appetizer charge.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区押小路油小路西入る二条油小路町264-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.012184, 135.753282); cross-checked: GSI 京都府京都市中京区二条油小路町264番地 (lot) 30m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B495716264/', R + 'B537695229/'],
    price_note: 'Dinner course price from a November 2024 review (raised since for costs); lunch range from 2024–26 reviews; ¥880 appetizer charge (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Koka course (basic dinner course)', '¥7,700', 'Dinner', 'ask', 'no', 'November 2024.', 'koka_course'),
      it('', '', 'Lunch kamameshi course (with or without sashimi)', 'about ¥3,000–5,000', 'Lunch', 'ask', 'no', '2024–26 reviews.', 'lunch_kamameshi'),
      it('', '', 'Appetizer charge', '¥880', 'Charge', '', '', 'Tabelog.', 'sakizuke'),
    ] }, {
    cuisine: '締めの釜めしで終わる季節の和食。約7種の釜めしを注文してから炊く (2024〜2026年の口コミ)・蛸と新生姜、牡蠣、蟹、鶏ときのこ、あさりの釜めし (2024〜2026年の口コミ)・湯葉と雲丹、鯛・かんぱち・鰤・鰹・甘海老のお造り、茶碗蒸し、穴子のお造り、鯛のあら炊き、鮎の唐揚げ、桜海老と新玉ねぎの天ぷら、牛カツ (2024〜2026年の口コミ)・昼の釜めしコース約3,000〜5,000円、夜はコース7,700円から、1人約8,000〜15,000円 (2024〜2026年の口コミ)・Eiko Fuji や Garyubai などの日本酒 (2026年2月)',
    neighborhood: '二条城の近く。二条城前駅から徒歩3分',
    gf_detail: '要確認。出汁と醤油のコースで、天ぷらや牛カツもあり、締めは釜めし (2024〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。出汁に魚と肉のコース (2024〜2026年の口コミ)。',
    notes: '[釜めし割烹・二条城、7席と鉄釜] 二条城近くの7席のカウンター。店主が一人で料理し、最後は注文してから炊く釜めし (牡蠣、蟹、蛸と新生姜) をおこげまで。昼は釜めしのコース (約3,000〜5,000円、電話予約のみ)、夜は7,700円からのコースか、日本酒とアラカルトで。先付け880円。水曜・日曜休み。',
  });
}

// ================================================================ 茶寮哲心
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26041180/'; const R = TB + 'dtlrvwlst/';
  const H = day(['08:00', '16:00'], ['17:00', '21:00']); const WED = day(['10:00', '16:00']);
  put({
    id: 'kyoto_saryo_tesshin', name: '茶寮哲心 (Saryo Tesshin)', category: 'OMNI',
    lat: 35.014578, lng: 135.760305, cuisine_type: 'udon_soba',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The soba is 100% buckwheat (October 2026), but the dipping sauces and broths use soy, and there is fried tofu and a financier (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: broths are bonito or duck, and the signature Daigo soba has cheese and egg yolk (2026 reviews).',
    hours_raw: 'Japanese breakfast 8:00–11:00 (reservation by 21:00 the day before); lunch 11:00–16:00 (last order 15:15); dinner 17:00–21:00 (last entry 20:00; evening course by reservation the day before); Wednesday 10:00–16:00 only (Tabelog). Seating limited to 45 minutes; one drink per person; preschool children only in the 15:00 slot; same-day bookings by phone (Tabelog). No cash — cards, IC cards, e-money and QR only (Tabelog; September 2026). 13 counter seats, some beside a small garden; English menu and English-speaking staff (Tabelog; October 2026). Just south of Karasuma Marutamachi, 3 min from Marutamachi Stn (Tabelog; September 2026). Opened 27 April 2024 (Tabelog).',
    hours: { 0: H, 1: H, 2: WED, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Karasuma Marutamachi, south of the Imperial Palace — 3 min from Marutamachi Stn',
    cuisine: 'Soba of 100% buckwheat in an elegant, ryotei-like room, from breakfast to dinner — the Kyoto shop of a Miyazaki soba restaurant (2026 reviews) · Daigo soba with Parmigiano and egg yolk, hot or cold (September–October 2026) · duck nanban set with grilled leek, maitake, fried tofu and grilled eggplant; duck seiro and duck tsuke-soba (2026 reviews) · soba-yu to finish; a financier with sets; yuzu cider (2026 reviews) · Japanese breakfast and an evening course by reservation (Tabelog) · about ¥4,000–6,000 a head; a large duck soba came to ¥5,200 (September 2026)',
    website: 'https://saryo-tessin.instatry.org/', gmaps: gm('茶寮哲心 京都 丸太町'), menu_url: TB + 'dtlmenu/',
    notes: "[Soba · Karasuma Marutamachi, luxury soba from 8 a.m.] A plush thirteen-seat soba counter south of the Imperial Palace, the Kyoto shop of a Miyazaki soba house, open from breakfast. Try the Daigo soba — 100% buckwheat under Parmigiano and egg yolk — or the duck nanban in a rich broth. Pricey at about ¥4,000–6,000, and two diners found the soba's aroma faint for the price. 45-minute seatings; one drink each; no cash.",
    chef_bio: { chef_name: null, roles: ['Soba restaurant; staff unnamed'], origin: null,
      background: 'Opened 27 April 2024 (Tabelog). A September 2026 reviewer calls it the Kyoto shop of a long-popular soba restaurant from Miyazaki City (Tabelog lists Soba ya Tesshin in Miyazaki), notes a painting of a tiger and cub by Shinsuke Kawahara, and a Tabelog review title cites a Michelin Bib Gourmand. The soba flour came from Azumino, a September 2026 diner was told.',
      philosophy: null, specialty: 'Daigo soba; duck nanban soba.',
      anecdotes: [
        { text: 'A September 2026 diner found the soba’s aroma and sweetness barely there for ¥5,200 and the bowl too hot to hold, though the décor and service were striking.', source: R + 'B535473246/' },
        { text: 'An October 2026 diner liked the cheese aroma of the Daigo soba but felt it lacked buckwheat fragrance for the price.', source: R + 'B538337682/' },
        { text: 'An October 2026 visitor found the English menu and fluent English service thorough, and urged finishing with soba-yu.', source: R + 'B537352032/' },
      ],
      japanese_sources_summary: '食べログ: そば、中京区車屋町二条上ル真如堂町321-2、丸太町駅から徒歩3分、朝 8:00〜11:00 (前日21時までに予約)・昼 11:00〜16:00 (L.O. 15:15)・夜 17:00〜21:00 (最終入店20:00、コースは前日までに予約)、水曜は10:00〜16:00、45分制、1人1ドリンク、未就学児は15時の枠のみ、現金不可 (カード・電子マネー・QR)、カウンター13席、禁煙、2024年4月27日オープン。口コミ (2026年2〜11月、英語): 十割そば、パルミジャーノと卵黄のDaigo そば、鴨南蛮、鴨せいろ、そば湯、フィナンシェ、Miyazaki 市の人気そば店の京都店、ビブグルマンという声、英語の品書きと対応、値段のわりにそばの香りが弱いという声。',
      confidence: 'medium', sources: [TB, 'https://saryo-tessin.instatry.org/', R + 'B521987838/', R + 'B535113479/', R + 'B535473246/', R + 'B535942806/', R + 'B536349808/', R + 'B536865350/', R + 'B537207579/', R + 'B537230602/', R + 'B537352032/', R + 'B537536373/', R + 'B538337682/', R + 'B538667387/'] },
    cultural_comfort: { level: 'english', note: 'English menu and English-speaking staff; book online; cashless only; 45-minute seatings.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区車屋町二条上ル真如堂町321-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.014578, 135.760305); cross-checked: GSI 京都府京都市中京区真如堂町321番地 (lot) 25m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535473246/', R + 'B536349808/'],
    price_note: 'No menu prices read; a large duck soba came to ¥5,200 (September 2026); reviews give about ¥4,000–6,000 a head (2026).', last_checked: TODAY, items: [
      it('', '', 'Daigo soba (Parmigiano and egg yolk; hot or cold)', '', 'Soba', 'ask', 'no', 'September–October 2026.', 'daigo_soba'),
      it('', '', 'Duck nanban soba set', '', 'Soba', 'ask', 'no', 'October 2026.', 'kamo_nanban'),
      it('', '', 'Duck soba, large', '¥5,200', 'Soba', 'ask', 'no', 'September 2026 (bill).', 'kamo_soba_large'),
    ] }, {
    cuisine: '料亭のような上品な店で、朝から夜まで十割そば。Miyazaki のそば店の京都店 (2026年の口コミ)・パルミジャーノと卵黄のDaigo そば、温か冷 (2026年9〜10月)・焼きねぎ、舞茸、揚げ、焼き茄子の鴨南蛮セット、鴨せいろ、鴨のつけそば (2026年の口コミ)・締めのそば湯、セットのフィナンシェ、柚子サイダー (2026年の口コミ)・予約制の和朝食と夜のコース (食べログ)・1人約4,000〜6,000円、鴨そばの大盛りで5,200円 (2026年9月)',
    neighborhood: '烏丸丸太町、御所の南。丸太町駅から徒歩3分',
    gf_detail: '要確認。そばは十割 (2026年10月) だが、つゆや汁に醤油を使い、揚げやフィナンシェもある (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。汁は鰹か鴨で、名物のDaigo そばはチーズと卵黄 (2026年の口コミ)。',
    notes: '[そば・烏丸丸太町、朝8時からの上質なそば] 御所の南の、豪華な13席のそばのカウンター。Miyazaki のそば店の京都店で、朝食から営業。十割そばにパルミジャーノと卵黄をのせたDaigo そばや、濃い汁の鴨南蛮を。1人4,000〜6,000円ほどと高めで、値段のわりにそばの香りが弱いという声も2件。45分制、1人1ドリンク、現金不可。',
  });
}

save();
