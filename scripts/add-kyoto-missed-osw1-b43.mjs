// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 43.
//   + カフェ 奏 Cafe Kanade (machiya café with lunch sets at Sakaimachi-Marutamachi)
//   + 京夕け 善哉 Kyou Yuuke Yokikana (Yoshitaka Sasai's Kyoto kappo off Muromachi near Marutamachi)
//   + Pub & Grill 7 TAPS TAVERN 京都駅 (all-day Kyoto-ingredient Italian with house craft beer, Kyoto Station)
//   + YUGEN (Japanese tea and wagashi counter by Marutamachi Stn, with a gallery upstairs)
//   - nine notable-lane shops skipped (reasons below); the notable lane had no other non-chain shop in `next notable 400`,
//     so a third core shop (YUGEN) fills the fourth place — flagged for the coordinator.
//   Picked on 2026-11-06: from `queue.mjs kyoto-missed next core 200`, lane ids 26028056, 26007482, 26037176; from `next
//   notable 200/400`: 26042306, then skipped 26025740, 26003348, 26033378, 26039618, 26001422, 26038130, 26033372,
//   26037350, 26001464. None of the four drafted is in data/kyoto.json by name (奏/Kanade, 善哉/Yokikana, 7 TAPS, YUGEN)
//   or address (橘町88, 鏡屋町44-3, 京都駅ビル 東ゾーン1F, 亀屋町146).
//   Same-name count (same brand or operator only): 奏, 善哉, YUGEN — one shop each. 7 TAPS TAVERN — invoice holder イコン
//   株式会社 of Kyoto (NTA register); no other 7 TAPS shop found — drafted, operator flagged. Large-parent list checked.
//   Service charges, checked against Tabelog's Japanese original: 善哉 サービス料10%. Others none listed.
//   Halal: no operator in this batch claims halal.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-43');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26025740', '藤菜美 三年坂本店: a chain — a Tabelog name search (2026-11-06) lists eight Fujinami shops (Sannenzaka honten, Kodaiji, Shimizu, Arashiyama, JR Kyoto Isetan, Kyoto Station Hachijo-guchi, factory shop, Shibuya Tokyu; Tabelog English names)');
skip('26003348', 'くらま 京都アスティロード店: operated by a large national restaurant company — the Tabelog invoice number T1010001026001 is registered to 株式会社ニユートーキヨー (Chiyoda-ku, Tokyo; NTA register); flagged as a large-parent call');
skip('26033378', '京焼肉 新 先斗町店: same operator with seven 新-named shops — the 株式会社プロシード site (proceed-kyoto.com, read 2026-11-06) lists 祇園肉亭 新, 京焼肉 新, 焼肉牛匠新 (Gion and Taiwan) and three 肉まぶし専科 肉亭新 shops');
skip('26039618', 'らぁ～めん京 京都駅ビル店: a same-concept branch of a brand already in data — らぁ～めん京 祇園本店 is in data/kyoto.json');
skip('26001422', '天壇 祇園本店: a chain — a Tabelog name search (2026-11-06) lists seven Tendan yakiniku shops in Kyoto (Gion honten, Kamogawa Sky BBQ Garden, Saiin, Kitayama, Takeda, Yamashina and another)');
skip('26038130', '三重人 京都ポルタ店: a chain — a Tabelog name search (2026-11-06) lists Mie Jin shops in Mie (honten, bettei, Kuwana), Nagoya (KITTE, Meieki), Osaka (Grand Front) and Kyoto Porta');
skip('26033372', '炭火とワイン 京都河原町店: a chain — a Tabelog name search (2026-11-06) lists Sumibi to Wine shops at Kyoto Ekimae (and its hanare), Karasuma, Kawaramachi, Namba, Tennoji and Sakai-Higashi');
skip('26037350', '天ぷらとワイン 小島 京都店: a chain — a Tabelog name search (2026-11-06) lists Tempura to Wine Kojima shops in Nagoya (honten, Fushimi-kita, Nishikibashi, Kanayama-kita, Ozone), Hiroshima and Kyoto');
skip('26001464', '笹屋伊織 本店: a chain’s flagship — a Tabelog name search (2026-11-06) lists twelve or more Sasaya Iori shops (honten, bettei, Minami, JR Kyoto Isetan, Daimaru, Takashimaya, and department-store shops in Sendai, Mito, Yokohama, Takamatsu, Kokura and more)');

// ================================================================ カフェ 奏
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26028056/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '20:00']);
  put({
    id: 'kyoto_cafe_kanade_marutamachi', name: 'カフェ 奏 (Cafe Kanade)', category: 'OMNI',
    lat: 35.017208, lng: 135.763268, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Lunch sets of hamburg steak, beef stew (bread or rice), green curry, marinated mackerel, pork miso soup with side dishes; cakes; no gluten information (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Lunch plates come with plenty of fried and grilled vegetables, but mains are meat or fish and dashi is not described (2025–2026 reviews).',
    hours_raw: '11:00–20:00; closed Thursday (Tabelog; hours may change). Lunch menu until 15:00 (February 2025). Reservations accepted; weekend tables fill with bookings (Tabelog; May 2026). Cash only — no cards, e-money or QR (Tabelog). 20 seats including counter; window seats onto a small garden with goldfish (Tabelog; September 2025). Non-smoking; children welcome (Tabelog). In a renovated machiya at the corner of Sakaimachi and Marutamachi, about 350 m from Marutamachi Stn (Tabelog; March 2025). Opened 7 October 2016 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Sakaimachi at Marutamachi, south of the Imperial Palace — 5 min from Marutamachi Stn',
    cuisine: 'Machiya café with homemade lunch plates and set meals (2025–2026 reviews) · lunch: beef stew set ¥1,350 with bread or rice; hamburg steak; “Manzoku” set of hamburg and beef stew; green curry; pork miso soup set ¥950; marinated mackerel under ¥1,000 — with fried and grilled vegetables and side dishes (2025–2026) · coffee set ¥300 with lunch (September 2025) · house blend ¥600 from Unir (Nagaokakyo) specialty beans in a French press; today’s cake ¥550, ¥50 off as a set (March 2025) · zenzai, matcha latte, hojicha latte, royal milk tea (2025–2026)',
    website: null, gmaps: gm('カフェ 奏 京都 堺町丸太町'), menu_url: null,
    notes: '[Café · Sakaimachi-Marutamachi, a machiya with goldfish] A bright, calm café in a renovated townhouse by the Imperial Palace, with a little garden of goldfish: good-value lunch sets (beef stew ¥1,350, pork miso soup ¥950, marinated mackerel) heaped with vegetables, then Unir coffee, cakes and zenzai in the afternoon. Popular with locals and nearby workers. Cash only; closed Thursdays.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'No owner is named in the sources read. Reviewers describe a homey café used by people working nearby, with solo diners at lunch (2026).',
      philosophy: null, specialty: 'Lunch sets; beef stew.',
      anecdotes: [
        { text: 'A September 2026 visitor had lunch here before the gallery across the street and was surprised to find a Kyoto lunch under ¥1,000 by the Imperial Palace.', source: R + 'B536173384/' },
        { text: 'An October 2026 visitor, tense after a dentist’s appointment, was comforted by the homey room over a royal milk tea.', source: R + 'B537579142/' },
      ],
      japanese_sources_summary: '食べログ: カフェ 奏、カフェ、中京区橘町88、地下鉄丸太町駅から徒歩2分 (347m)、11:00〜20:00、木曜定休、予約可、現金のみ、20席、禁煙、子ども可、2016年10月7日オープン。口コミ (2025〜2026年、英語): 町家のカフェ、坪庭と金魚、昼は15時まで、ビーフシチュー定食1,350円、ハンバーグ、満足セット、グリーンカレー、豚汁定食950円、鯖の南蛮漬け、コーヒーセット300円、長岡京の Unir の豆のフレンチプレスのブレンド600円、本日のケーキ550円、ぜんざい、抹茶ラテ、ほうじ茶ラテ。',
      confidence: 'medium', sources: [TB, R + 'B501034707/', R + 'B504051946/', R + 'B514601377/', R + 'B526383780/', R + 'B527678402/', R + 'B529179820/', R + 'B533158554/', R + 'B536173384/', R + 'B537060930/', R + 'B537579142/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Homey local café; lunch sets; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区橘町88',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.017208, 135.763268); GSI matched only the town (橘町, centroid 50m away) and OpenStreetMap has no node for the shop, so the pin is marked approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B514601377/', R + 'B537060930/', R + 'B504051946/'],
    price_note: 'Prices from March 2025 to September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Beef stew lunch set', '¥1,350', 'Lunch', 'ask', 'no', 'September 2025.', 'beef_stew'),
      it('', '', 'Pork miso soup set (daily lunch)', '¥950', 'Lunch', 'ask', 'no', 'September 2026.', 'tonjiru_set'),
      it('', '', 'House blend coffee (Unir beans)', '¥600', 'Drinks', 'gf', 'vegan', 'March 2025; black.', 'house_blend'),
      it('', '', 'Today’s cake', '¥550', 'Sweets', 'ask', 'no', 'March 2025.', 'cake'),
    ] }, {
    cuisine: '手作りのランチプレートと定食の町家カフェ (2025〜2026年の口コミ)・昼: パンかご飯のビーフシチュー定食1,350円、ハンバーグ、ハンバーグとビーフシチューの「満足セット」、グリーンカレー、豚汁定食950円、鯖の南蛮漬け (1,000円以下)、揚げ野菜や焼き野菜と小鉢つき (2025〜2026年)・昼はコーヒーセット300円 (2025年9月)・長岡京の Unir のスペシャルティ豆をフレンチプレスで淹れるブレンド600円、本日のケーキ550円、セットで50円引き (2025年3月)・ぜんざい、抹茶ラテ、ほうじ茶ラテ、ロイヤルミルクティー (2025〜2026年)',
    neighborhood: '御所の南、堺町と丸太町の角。丸太町駅から徒歩5分',
    gf_detail: '要確認。ハンバーグ、パンかご飯のビーフシチュー、グリーンカレー、鯖の南蛮漬け、豚汁と小鉢のランチセット、ケーキ。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。ランチプレートには揚げ野菜や焼き野菜がたっぷりだが、主菜は肉か魚で、出汁については書かれていない (2025〜2026年の口コミ)。',
    notes: '[カフェ・堺町丸太町、金魚のいる町家] 御所近くの、改装した町家の明るく落ち着いたカフェ。金魚のいる小さな庭。野菜たっぷりのお値打ちのランチ (ビーフシチュー1,350円、豚汁950円、鯖の南蛮漬け)、午後は Unir のコーヒー、ケーキ、ぜんざい。近所の人や勤め人に人気。現金のみ、木曜休み。',
  });
}

// ================================================================ 京夕け 善哉
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26007482/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_kyou_yuuke_yokikana', name: '京夕け 善哉 (Kyou Yuuke Yokikana)', category: 'MOM_AND_POP',
    lat: 35.01536, lng: 135.758347, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Seasonal Kyoto kappo courses — sashimi, clear soups, grilled sweetfish, clam rice — with soy and dashi; the shop asks guests to declare allergies when booking (Tabelog; 2022–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi-based Kyoto cooking with fish and shellfish (2022–2026 reviews).',
    hours_raw: 'Lunch 11:30–15:00 (food L.O. 13:00), dinner 17:00–22:00 (food L.O. 20:00); closed Wednesday (Tabelog). Reservations accepted; the shop asks callers to phone before 17:00 or after 22:00, as evenings are busy, and to mention any food allergies (Tabelog). Service charge 10% (Tabelog, original サービス料10%). Cards (Tabelog). 14 seats, up to 20: 6 at the counter and three private rooms for 2–16, including a sunken-kotatsu room at the back (Tabelog; July 2025). On Muromachi north of Ebisugawa, down a quiet alley, 5 min from Marutamachi Stn exit 6 (Tabelog; 2024–2025).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Muromachi north of Ebisugawa — 5 min from Marutamachi Stn',
    cuisine: 'Seasonal Kyoto kappo courses in private rooms and at a small counter (2022–2026 reviews) · thick-cut sashimi with flatfish liver; grilled sweetfish; a clear soup; miso-cured egg yolk served in a hōzuki husk; clam rice, the leftovers made into onigiri to take home (August 2024) · about five or six sakes (July 2025) · shaved ice to finish (August 2022) · dinner about ¥10,000–20,000, lunch ¥6,000–8,000 (Tabelog averages)',
    website: null, gmaps: gm('京夕け 善哉 室町'), menu_url: null,
    notes: '[Kyoto kappo · Muromachi near Marutamachi, a chef from Toriimoto] A quiet townhouse down an alley off Muromachi where owner-chef Yoshitaka Sasai, long trained at Gion’s Toriimoto, cooks seasonal Kyoto courses served in private rooms or at a six-seat counter: thick sashimi, grilled ayu, clam rice and delicate dashi. A Michelin-starred address, per a 2024 reviewer. 10% service charge; closed Wednesdays.',
    chef_bio: { chef_name: '笹井 喜晃', roles: ['Owner-chef; also the invoice holder (NTA register)'], origin: null,
      background: 'An April 2012 review: “The owner, Yoshitaka Sasai, trained for a long time at the renowned restaurant ‘Toriimoto’ in Gion”, then worked at well-known places in Nagaokakyo and central Kyoto before opening in a townhouse. The Tabelog invoice number T6810343961900 is registered to 笹井 喜晃 (NTA register). Reviewers praise the owner’s hospitality (2023–2024); a 2023 diner found the part-time staff’s service only average; a November 2024 reviewer mentions a Michelin star.',
      philosophy: null, specialty: 'Seasonal Kyoto kappo.',
      anecdotes: [
        { text: 'An August 2024 diner was served the leftover clam rice as onigiri, and a miso-cured egg yolk in a hōzuki husk said to be modelled on a dish from the manga “Oishinbo”.', source: R + 'B491006840/' },
        { text: 'A July 2025 guest was welcomed with “Okoshiyasu” and led down the alley to a sunken-kotatsu room at the back.', source: R + 'B510735975/' },
      ],
      japanese_sources_summary: '食べログ: 京夕け 善哉、日本料理、中京区室町通夷川上ル鏡屋町44-3、丸太町駅6番出口から徒歩5分、昼11:30〜15:00 (料理L.O.13:00)、夜17:00〜22:00 (料理L.O.20:00)、水曜定休、予約可 (夕方は電話に出にくいので17時前か22時以降に)、アレルギーは必ず伝えること、サービス料10%、カード可、14席 (最大20、カウンター6、個室3つで2〜16名)、適格請求書 T6810343961900 (笹井 喜晃)。口コミ (2012〜2026年、英語): 店主 Yoshitaka Sasai は祇園の Toriimoto で長く修業し、長岡京や街中の名店を経て町家で独立、厚切りの刺身と肝、鮎の焼き物、ほおずきの卵黄の味噌漬け、蛤ご飯とおにぎり、日本酒5〜6種、ミシュランの星との声。',
      confidence: 'medium', sources: [TB, 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=6810343961900', R + 'B453481170/', R + 'B461977786/', R + 'B463379586/', R + 'B481745010/', R + 'B483276864/', R + 'B491006840/', R + 'B495358579/', R + 'B509520039/', R + 'B510735975/', R + 'B526046297/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Phone bookings before 17:00 or after 22:00; private rooms; 10% service charge.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区室町通夷川上ル鏡屋町44-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through April 2026.' },
    pin_source: `Tabelog ${TB} (35.01536, 135.758347); cross-checked: GSI 京都府京都市中京区鏡屋町44番地 (lot) 26m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No dish prices read; Tabelog averages dinner ¥10,000–14,999 and lunch ¥6,000–7,999 (review-based).', last_checked: TODAY, items: [
      it('', '', 'Dinner course', '', 'Courses', 'ask', 'no', '2024–2026 reviews.', 'dinner_course'),
      it('', '', 'Lunch course', '', 'Courses', 'ask', 'no', 'Tabelog.', 'lunch_course'),
      it('', '', 'Clam rice', '', 'Courses', 'ask', 'no', 'August 2024.', 'hamaguri_gohan'),
    ] }, {
    cuisine: '個室と小さなカウンターでいただく季節の京料理の割烹のコース (2022〜2026年の口コミ)・厚切りの刺身と鰈の肝、鮎の焼き物、お吸い物、ほおずきに入れた卵黄の味噌漬け、蛤ご飯 (残りはおにぎりに) (2024年8月)・日本酒は5〜6種ほど (2025年7月)・締めのかき氷 (2022年8月)・夜は1万〜2万円、昼は6,000〜8,000円ほど (食べログの平均)',
    neighborhood: '夷川の北の室町通。丸太町駅から徒歩5分',
    gf_detail: '要確認。季節の京料理の割烹のコース。醤油と出汁の刺身、お吸い物、鮎の焼き物、蛤ご飯。アレルギーは予約時に伝えるよう店から案内あり (食べログ、2022〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。出汁の京料理、魚と貝 (2022〜2026年の口コミ)。',
    notes: '[京料理の割烹・室町、Toriimoto 出身の料理人] 室町から路地を入った静かな町家。祇園の Toriimoto で長く修業した店主 Yoshitaka Sasai が、個室と6席のカウンターで季節の京料理のコースを。厚切りの刺身、鮎の焼き物、蛤ご飯、繊細な出汁。2024年の口コミではミシュランの星付き。サービス料10%、水曜休み。',
  });
}

// ================================================================ 7 TAPS TAVERN
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26042306/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://7taps-tavern.com/';
  const H = day(['11:00', '24:00']);
  put({
    id: 'kyoto_7_taps_tavern_station', name: 'Pub & Grill 7 TAPS TAVERN 京都駅', category: 'OMNI',
    lat: 34.986014, lng: 135.760881, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. About 90 Italian dishes with Kyoto ingredients — pasta, pizza, pintxos, grills, desserts; no gluten information (Tabelog shop text; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A large menu with salads and vegetables, but no vegan dishes are named; most plates use meat, fish or cheese (2026 reviews).',
    hours_raw: '11:00–24:00 daily (grand-menu food L.O. 22:00, bar food L.O. 23:00); special New Year hours; on the second Tuesday of each month the kitchen closes 15:00–17:00 (café and bar only) (Tabelog). Reservations accepted, online too; 2-hour limit when busy; bookings held 15 minutes (Tabelog; October 2026). Cards and e-money (Tabelog). 104 seats including sofas; views of Kyoto Tower from some tables (Tabelog; October 2026). Kyoto Station Building East Zone 1F, below the Kyoto Theater and opposite The Thousand Kyoto hotel, 1 min from the Central Exit (Tabelog). Opened 24 January 2025 (2026 review).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kyoto Station Building East Zone 1F, by the Central Exit',
    cuisine: 'All-day Italian with Kyoto ingredients by three chefs, about 90 dishes from ¥330 — Kameoka Nanatani duck, Kyoto Mochi pork, pasta and pizza, a matcha Basque cheesecake (Tabelog shop text) · seven draft beers including four original craft beers (session pale ale, Belgian white, IPA, seasonal) brewed in Fukuchiyama, Kyoto; pint ¥1,650 (Tabelog; September 2026) · 60-plus wines, casual bottles at ¥4,290; seasonal cocktails and mocktails (Tabelog) · lunch course ¥2,640 with soup, salad and bread, e.g. aged heshiko and Kujo green onion aglio e olio (October 2026) · 7 Taps plate, fresh fish carpaccio, pintxos, grilled chicken breast (September–October 2026) · free-drink courses from ¥5,000 (Tabelog)',
    website: SITE, gmaps: gm('7 TAPS TAVERN 京都駅'), menu_url: SITE,
    notes: '[Italian and craft beer · Kyoto Station Central Exit, open 11:00–24:00] A big, stylish all-day restaurant under the Kyoto Theater, a minute from the station gates: Kyoto-ingredient Italian (heshiko-and-Kujo-onion pasta, Nanatani duck, matcha Basque cheesecake), four house craft beers brewed in Fukuchiyama, and plenty of wine. Lunch course ¥2,640; useful before a train. Service from student staff draws some complaints.',
    chef_bio: { chef_name: null, roles: ['Three chefs (unnamed); operated by イコン株式会社'], origin: null,
      background: 'Tabelog’s shop text credits three chefs. Invoice T7130001026710 is registered to イコン株式会社 of Shimogyo-ku, Kyoto (NTA register). An October 2026 diner found the food just okay; another noted student staff setting down dishes without explanation (October 2026), while a birthday group was given a surprise plate (October 2026).',
      philosophy: 'Kyoto ingredients in Italian cooking (Tabelog shop text).', specialty: 'House craft beer; Kyoto-ingredient Italian.',
      anecdotes: [
        { text: 'An October 2026 group of four booked a birthday plate that was not on the listing, and the staff added it anyway; the group stayed three hours on the sofas.', source: R + 'B537451734/' },
        { text: 'An October 2026 diner booked online and got a table with a view of Kyoto Tower.', source: R + 'B538652144/' },
      ],
      japanese_sources_summary: '食べログ: Pub & Grill 7 TAPS TAVERN 京都駅、イタリアン・バル・ビアホール、下京区東塩小路町901 京都駅ビル東ゾーン1F、Kyoto Theater の下、The Thousand Kyoto の向かい、中央口から徒歩1分、11:00〜24:00 (グランドメニューL.O.22:00、バーフードL.O.23:00)、毎月第2火曜15〜17時は厨房メンテナンス、予約可 (混雑時2時間制、15分遅れで取消)、カード・電子マネー可、104席、店の紹介: 3人のシェフの京食材のイタリアン約90品 330円から (亀岡の Nanatani 鴨、Kyoto Mochi 豚、抹茶のバスクチーズケーキ)、オリジナル4種を含む生ビール7種、ワイン60種以上、季節のカクテル、飲み放題コース5,000円から。適格請求書 T7130001026710 (イコン株式会社)。口コミ (2026年、英語): 福知山で造るクラフトビール、パイント1,650円、ランチコース2,640円、熟成へしこと九条ねぎのアーリオオーリオ、2025年1月24日開店、学生スタッフの接客に不満の声も。',
      confidence: 'medium', sources: [SITE, TB, 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=7130001026710', R + 'B511781199/', R + 'B512352990/', R + 'B536174406/', R + 'B536386698/', R + 'B536819602/', R + 'B536842629/', R + 'B536847132/', R + 'B537451734/', R + 'B537903071/', R + 'B538652144/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Large station restaurant; online booking; 2-hour limit when busy.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市下京区東塩小路町901 京都駅ビル 東ゾーン 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with an October 2026 notice; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.986014, 135.760881); GSI 京都府京都市下京区東塩小路町901番地 matches the whole station building with a point 244m away, and OpenStreetMap has no node for the shop, so the pin is marked approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B512352990/', R + 'B536819602/', TB],
    price_note: 'Lunch course and beer prices from September–October 2026 reviews; wine and course floors from the Tabelog shop text.', last_checked: TODAY, items: [
      it('', '', 'Lunch course (soup, salad, bread, main)', '¥2,640', 'Lunch', 'ask', 'ask', 'October 2026.', 'lunch_course'),
      it('', '', 'House craft beer, pint', '¥1,650', 'Drinks', 'no', 'ask', 'September 2026.', 'craft_pint'),
      it('', '', 'Casual wine, bottle', '¥4,290', 'Drinks', '', '', 'Tabelog shop text.', 'casual_wine'),
      it('', '', 'Free-drink course, from', '¥5,000', 'Courses', 'ask', 'no', 'Tabelog shop text.', 'nomihodai'),
    ] }, {
    cuisine: '3人のシェフによる京都の食材のオールデイのイタリアン約90品、330円から。亀岡の Nanatani 鴨、Kyoto Mochi 豚、パスタやピザ、抹茶のバスクチーズケーキ (食べログの店の紹介)・オリジナルのクラフトビール4種 (セッションペールエール、ベルジャンホワイト、IPA、季節) を含む生ビール7種、福知山で醸造、パイント1,650円 (食べログ、2026年9月)・ワイン60種以上、カジュアルなボトルは一律4,290円、季節のカクテルとモクテル (食べログ)・スープ、サラダ、パンのランチコース2,640円、熟成へしこと九条ねぎのアーリオオーリオなど (2026年10月)・7 Taps プレート、鮮魚のカルパッチョ、ピンチョス、鶏むねのグリル (2026年9〜10月)・飲み放題コース5,000円から (食べログ)',
    neighborhood: '京都駅ビル東ゾーン1F、中央口のそば',
    gf_detail: '要確認。京都の食材のイタリアン約90品、パスタ、ピザ、ピンチョス、グリル、デザート。グルテンの情報はない (食べログの店の紹介、2026年の口コミ)。',
    vegan_detail: '要確認。サラダや野菜の皿も多いが、ヴィーガンの料理は名前が挙がっておらず、肉、魚、チーズの皿が多い (2026年の口コミ)。',
    notes: '[イタリアンとクラフトビール・京都駅中央口、11時〜24時] Kyoto Theater の下、改札から1分の大きくおしゃれなオールデイのレストラン。京都の食材のイタリアン (へしこと九条ねぎのパスタ、Nanatani 鴨、抹茶のバスクチーズケーキ)、福知山で造る4種のオリジナルクラフトビール、ワインも豊富。ランチコース2,640円、電車の前に便利。学生スタッフの接客に不満の声も。',
  });
}

// ================================================================ YUGEN
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26037176/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.yugen-kyoto.com/';
  const H = day(['11:00', '18:00']);
  put({
    id: 'kyoto_yugen_tea_marutamachi', name: 'YUGEN', category: 'OMNI',
    lat: 35.016215, lng: 135.758625, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Japanese tea with wagashi — seasonal yokan, ohagi, fried sesame dumplings, yubeshi, kakigori with red-bean soup; ingredients are not described (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tea is plant-based and a shojin sesame dumpling comes with oat-milk gelato (December 2025), but the other sweets are not described (2025–2026 reviews).',
    hours_raw: '11:00–18:00 (L.O. 17:30); closed Thursday and irregular days — see Instagram (Tabelog). Reservations accepted and advised; booked about two weeks ahead in September 2026 (Tabelog; September 2026). Seasonal wagashi sell out by mid-afternoon (June and December 2025). Cards, IC, e-money and QR (Tabelog). 11 counter seats, high chairs — children welcome but warned of the chair height (Tabelog; December 2025). Non-smoking (Tabelog). Gallery and shop on the 2nd and 3rd floors, shoes changed to enter (December 2025). 1 min from Marutamachi Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'By Marutamachi Stn, south of the Imperial Palace',
    cuisine: 'A Japanese tea specialist pairing seasonal teas — sencha, hojicha (three brewing styles), black tea, matcha — with wagashi (August 2025) · tea and wagashi of the day; choose your matcha bowl from a display (January 2026) · sencha brewed in three infusions in front of you (May–June 2026) · minazuki and tea ¥2,000 (June 2026); seasonal yokan with sudachi sauce and yam with matcha ¥1,600 (September 2026) · shojin sesame dumplings with oat-milk gelato and tea ¥2,100, up to three cups (December 2025) · fig ohagi (September 2026) · kakigori with red-bean soup (June 2026) · tea to take home, e.g. a New Year daifuku tea (December 2025)',
    website: SITE, gmaps: gm('YUGEN 京都 丸太町 日本茶'), menu_url: null,
    notes: '[Japanese tea · by Marutamachi Stn, a tea counter with a gallery] An elegant 11-seat counter where tea is brewed in front of you over several infusions and matcha is whisked in a bowl you choose, paired with seasonal wagashi (about ¥1,600–2,100). Pottery gallery and shop upstairs. Book ahead; seasonal sweets sell out. Featured on NHK’s “Bi no Tsubo”; English explanations given.',
    chef_bio: { chef_name: null, roles: ['Tea staff (unnamed)'], origin: null,
      background: 'No owner is named in the sources read. Reviewers note English explanations for overseas guests (December 2025), about half of the guests from abroad (September 2026), and a feature on NHK’s “Bi no Tsubo” (September 2026).',
      philosophy: null, specialty: 'Japanese tea in several infusions; matcha; seasonal wagashi.',
      anecdotes: [
        { text: 'A May 2026 visitor was surprised that the first infusion tasted almost like dashi and each later one differed.', source: R + 'B529159540/' },
        { text: 'A September 2025 visitor came for the pottery and stayed for matcha and a walnut wagashi.', source: R + 'B513731166/' },
      ],
      japanese_sources_summary: '食べログ: YUGEN、カフェ、中京区亀屋町146、丸太町駅から徒歩1分、11:00〜18:00 (L.O.17:30)、木曜と不定休 (インスタグラムで案内)、予約可、カード・電子マネー・QR可、11席、子ども可だが椅子が高い、禁煙。口コミ (2025〜2026年、英語): 日本茶と和菓子、煎茶、ほうじ茶 (3種の淹れ方)、紅茶、抹茶、選べる抹茶碗、3煎まで、水無月とお茶2,000円、季節の羊羹と抹茶1,600円、精進の胡麻団子とオーツミルクのジェラート2,100円、いちじくのおはぎ、かき氷、2・3階はギャラリーと販売、NHK の Bi no Tsubo で紹介。',
      confidence: 'medium', sources: [TB, SITE, R + 'B511482720/', R + 'B513731166/', R + 'B520184888/', R + 'B521551227/', R + 'B529159540/', R + 'B530108984/', R + 'B530413381/', R + 'B535653975/', R + 'B536488778/', R + 'B536680835/'] },
    cultural_comfort: { level: 'english', note: 'Staff explain in English (December 2025); counter only with high chairs; book ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区亀屋町146',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.016215, 135.758625); cross-checked: GSI 京都府京都市中京区亀屋町146番地 (lot) 12m; 16m from kyoto_mirei; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536680835/', R + 'B520184888/', R + 'B530108984/'],
    price_note: 'Prices from June 2026, September 2026 and December 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Seasonal wagashi and matcha', '¥1,600', 'Tea sets', 'ask', 'ask', 'September 2026.', 'wagashi_matcha'),
      it('', '', 'Minazuki and tea', '¥2,000', 'Tea sets', 'ask', 'ask', 'June 2026.', 'minazuki_tea'),
      it('', '', 'Shojin sesame dumplings with oat-milk gelato and tea', '¥2,100', 'Tea sets', 'ask', 'ask', 'December 2025.', 'sesame_dango'),
    ] }, {
    cuisine: '季節の日本茶 (煎茶、3種の淹れ方のほうじ茶、紅茶、抹茶) と和菓子の専門店 (2025年8月)・その日のお茶と和菓子、抹茶碗は並べた中から選ぶ (2026年1月)・目の前で3煎淹れる煎茶 (2026年5〜6月)・水無月とお茶2,000円 (2026年6月)、すだちのソースと山芋の季節の羊羹と抹茶1,600円 (2026年9月)・精進の胡麻団子とオーツミルクのジェラートとお茶2,100円、3杯まで (2025年12月)・いちじくのおはぎ (2026年9月)・ぜんざいのかき氷 (2026年6月)・持ち帰りのお茶、正月の大福茶など (2025年12月)',
    neighborhood: '丸太町駅のそば、御所の南',
    gf_detail: '要確認。季節の羊羹、おはぎ、胡麻団子の揚げ物、ゆべし、ぜんざいのかき氷などの和菓子とお茶。材料は書かれていない (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。お茶は植物性で、精進の胡麻団子にはオーツミルクのジェラート (2025年12月) だが、ほかの菓子の中身は書かれていない (2025〜2026年の口コミ)。',
    notes: '[日本茶・丸太町駅のそば、ギャラリーのあるお茶のカウンター] 11席の上品なカウンター。目の前で何煎かに分けてお茶を淹れ、選んだ茶碗で抹茶を点て、季節の和菓子と (1,600〜2,100円ほど)。上の階に器のギャラリーとショップ。予約がおすすめ、季節の菓子は売り切れることも。NHK の Bi no Tsubo で紹介、英語での説明もある。',
  });
}

save();
