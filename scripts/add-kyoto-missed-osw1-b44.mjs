// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 44.
//   Part 1 — clearing the notable lane: nine chain skips (each with a same-name count or the brand's own shop list) and one
//   notable draft:
//   + 全席個室居酒屋 四季の詩 京都駅前店 Shiki no Uta (private-room izakaya north of Kyoto Station; flagged, see below)
//   Part 2 — core fill:
//   + 小皿料理 38 sawa (small-plate fish izakaya near Shichijo-Takakura)
//   + ときわ Tokiwa (Showa-era udon and donburi shop by Kumano Shrine)
//   + 旬菜 あだち Shunsai Adachi (home-style set meals at lunch prices, Kawaramachi-Marutamachi)
//   - ローズルーム (26007128, core): skipped — temporarily closed (below).
//   Picked on 2026-11-06: `queue.mjs kyoto-missed next notable 2000` lane ids 26005502, 26028818, 26001506, 26038652,
//   26002148, 26026052, 26003270, 26034662, 26000414, 26010440 (the whole remaining notable lane); `next core 300` lane ids
//   26037602, 26007242, 26007128 (skipped), 26006132. None of the four drafted is in data/kyoto.json by name (四季の詩/Shiki no
//   Uta, sawa/38, ときわ/Tokiwa — ラーメン京都てんぐ 常盤店 and 松屋常盤 are unrelated — あだち/Adachi — あだち家 is a Gion
//   tonjiru shop) or address (東塩小路町736 1F — see the 和ノ音 note below; 小稲荷町22; 聖護院山王町43; 上生洲町247).
//   Same-name count: 四季の詩 — Tabelog shows a 四季の詩 at Kobe-Sannomiya ekimae as well as this shop (two); invoice holder
//   株式会社ＮＢＭ (Minato-ku, Tokyo; NTA register), whose brand page lists six other brands, none named 四季の詩; not a proven
//   chain, drafted and flagged. sawa, ときわ, あだち — one shop each. Large-parent list checked.
//   Service charges, checked against Tabelog's Japanese original: 四季の詩 お1人様お通し418円+サービス料5%（飲み放題付き
//   コースにはかかりません）; sawa お通し代500円(税込). Others none listed.
//   Halal: no operator in this batch claims halal.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-44');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ---------------------------------------------------------------- Part 1: notable-lane chain skips
skip('26005502', '551蓬莱 京都伊勢丹店: a chain — a Tabelog name search (2026-11-06) lists 551 HORAI / 551 Horai shops at Honten, Namba Walk, JR Kyoto Station, Kyoto Isetan, Shin-Osaka (four), Kansai Airport, Itami Airport and JR Sannomiya, among others');
skip('26028818', '辻利 京都タワーサンド店: a chain — our crawl (scripts/sweep/kyoto-missed/shops.jsonl) has six 辻利 shops in Kyoto alone');
skip('26001506', '鶴屋吉信 (本店): a chain’s flagship — the brand’s own shop page (tsuruyayoshinobu.jp/shop, read 2026-11-06) lists five directly run shops (本店, IRODORI, FACTORY店, 虎ノ門ヒルズ店, tubara cafe) and 55 outlets across Japan');
skip('26002148', '珉珉 三条大橋店: a chain — a Tabelog name search (2026-11-06) lists Minmin shops at Minami-Sennichimae honten, Ibaraki, Kobe Sannomiya, Kyobashi and Namba Walk, among others');
skip('26026052', 'イノダコーヒ 八条口支店: a chain — our crawl has six イノダコーヒ shops in Kyoto (the 本店 was skipped as a chain flagship in osw13-51)');
skip('26003270', 'スターバックス・コーヒー 京都三条大橋店: a chain — our crawl has 21 スターバックス shops in Kyoto alone');
skip('26034662', 'パンとエスプレッソと京と: a chain — a Tabelog name search (2026-11-06) lists Pan to Espresso to shops at Arashiyama Teien, Beppu, Biwako Bunka Koen, Chiba Koen, Hakata, Inuyama, Kuwana, Minamimorimachi and Sakaisuji, among others');
skip('26000414', 'イノダコーヒ 四条支店: a chain — our crawl has six イノダコーヒ shops in Kyoto');
skip('26010440', '小川珈琲 京都駅中央口店: a chain — a Tabelog name search (2026-11-06) lists Ogawa Coffee shops at Honten, Kyoto Station, Kadonooji, Kiyomizu, Hakubaicho, Uji-Higashi, Kawanishi, Kisogawa, Inazawa, Kuwana and Aeon Akashi, among others');

// ---------------------------------------------------------------- Part 2 core skip
skip('26007128', 'ローズルーム (京都全日空ホテル B1F): temporarily closed — Tabelog’s hours read “Currently closed for temporary reasons”, and the newest review opened is from 2017');

skip('26038652', '全席個室居酒屋 四季の詩 京都駅前店: sub-brand of a non-local multi-brand group — invoice holder 株式会社NBM (Tokyo) runs about 30 Japanese and Western restaurants centred on Tokyo (careermap.jp/corporations/94720; Indeed listing) — integrator 2026-11-06');

// ================================================================ 小皿料理 38 (sawa)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26037602/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['17:00', '22:30']); const WE = day(['12:00', '14:00'], ['17:00', '22:30']);
  put({
    id: 'kyoto_kozara_ryori_38_shichijo', name: '小皿料理 38 (sawa)', category: 'OMNI',
    lat: 34.988754, lng: 135.762872, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Small plates of fish and obanzai — sashimi, simmered dishes, fried dishes, grilled sweetfish, Kamo eggplant dengaku, beef tongue, sushi; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish izakaya; obanzai and simmered dishes use dashi (2026 reviews).',
    hours_raw: 'Monday–Thursday and holidays 17:00–22:30; Friday–Sunday also lunch 12:00–14:00; L.O. 21:30 (Tabelog). Two-hour seating on weekdays (Tabelog). Reservations accepted, same-day too; often full (Tabelog; 2026 reviews). Otoshi ¥500 (Tabelog, original お通し代500円(税込)). Cards and PayPay (Tabelog). Counter and tables; tablet ordering since 2026 (July 2026). On Shichijo south of Takakura, 5 min from Kyoto Station (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WE, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Takakura south of Shichijo — 5 min from Kyoto Station',
    cuisine: 'Small plates of fresh fish and obanzai with a good sake list (2026 reviews) · assorted sashimi — tuna, sea bream, sea urchin, hamo; rich sardine sashimi (March–August 2026) · today’s obanzai; young bamboo shoots simmered in broth; grilled sweetfish (April 2026) · grilled red shrimp and scallops; Kamo eggplant dengaku; simmered eggplant (July–August 2026) · fried dishes; duck breast; beef tongue (2026) · sushi for a light bite (August 2026) · ¥500 shaved ice in summer (July 2026)',
    website: null, gmaps: gm('小皿料理 38 京都 七条高倉'), menu_url: null,
    notes: '[Fish izakaya · Shichijo-Takakura, near Kyoto Station] A lively counter-and-table izakaya a short walk from Kyoto Station: plump sashimi, sardines, grilled ayu and hamo in season, obanzai and Kamo eggplant dengaku, sushi and a strong sake list, with ¥500 shaved ice in summer. Usually busy; book, even same-day. ¥500 otoshi.',
    chef_bio: { chef_name: '澤井 俊秀', roles: ['Owner (the invoice holder)'], origin: null,
      background: 'Tabelog’s invoice number T8810755440012 is registered to the individual 澤井 俊秀 (NTA register); the Tabelog English name is “sawa”. Reviewers watch several chefs at work from the counter (August 2026); one found the food slow to come and the counter lighting shadowy (July–August 2026).',
      philosophy: null, specialty: 'Sashimi; obanzai.',
      anecdotes: [
        { text: 'An April 2026 diner’s friends from the countryside were delighted by the obanzai.', source: R + 'B487603772/' },
        { text: 'A guest at a nearby hotel found it on the spot and liked the tuna, sea bream, sea urchin and hamo (August 2026).', source: R + 'B534665385/' },
      ],
      japanese_sources_summary: '食べログ: 小皿料理 38 (英語名 sawa)、居酒屋・日本料理・魚介、下京区七条高倉下がる小稲荷町22、京都駅から徒歩5分、月〜木・祝 17:00〜22:30、金〜日は昼12:00〜14:00も、L.O.21:30、平日は2時間制、予約可、お通し代500円、カード・PayPay可、適格請求書 T8810755440012 (澤井 俊秀)。口コミ (2026年、英語): 刺身の盛り合わせ (鮪、鯛、うに、鱧)、いわしの刺身、おばんざい、若竹煮、鮎の塩焼き、赤海老と帆立の焼き物、Kamo なすの田楽、牛タン、寿司、夏は500円のかき氷、タブレット注文、料理が出るのが遅いとの声も。',
      confidence: 'medium', sources: [TB, 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=8810755440012', R + 'B486008644/', R + 'B487603772/', R + 'B525137479/', R + 'B527526245/', R + 'B532107387/', R + 'B532607719/', R + 'B533055576/', R + 'B534212445/', R + 'B534665385/', R + 'B535691090/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Tablet ordering; counter for solo diners; ¥500 otoshi.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区七条高倉下がる小稲荷町22',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (34.988754, 135.762872); cross-checked: GSI 京都府京都市下京区小稲荷町22番地 (lot) 38m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532607719/', TB],
    price_note: 'Shaved-ice price from a July 2026 review; otoshi from Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Assorted sashimi', '', 'Fish', 'ask', 'no', '2026 reviews.', 'sashimi'),
      it('', '', 'Kamo eggplant dengaku', '', 'Small plates', 'ask', 'ask', 'July 2026.', 'kamonasu_dengaku'),
      it('', '', 'Shaved ice (summer)', '¥500', 'Dessert', 'ask', 'ask', 'July 2026.', 'kakigori'),
      it('', '', 'Otoshi', '¥500', 'Charges', '', '', 'Tabelog.', 'otoshi'),
    ] }, {
    cuisine: '新鮮な魚とおばんざいの小皿、日本酒も充実 (2026年の口コミ)・刺身の盛り合わせ (鮪、鯛、うに、鱧)、脂ののったいわしの刺身 (2026年3〜8月)・本日のおばんざい、若竹煮、鮎の塩焼き (2026年4月)・赤海老と帆立の焼き物、Kamo なすの田楽、茄子の煮物 (2026年7〜8月)・揚げ物、鴨ロース、牛タン (2026年)・軽く寿司も (2026年8月)・夏は500円のかき氷 (2026年7月)',
    neighborhood: '七条の南の高倉。京都駅から徒歩5分',
    gf_detail: '要確認。刺身、炊いたもの、揚げ物、鮎の塩焼き、田楽、牛タン、寿司などの魚とおばんざいの小皿。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。魚の居酒屋。おばんざいや炊いたものは出汁を使う (2026年の口コミ)。',
    notes: '[魚の居酒屋・七条高倉、京都駅の近く] 京都駅から歩けるにぎやかなカウンターとテーブルの居酒屋。ぷりぷりの刺身、いわし、季節の鮎や鱧、おばんざい、Kamo なすの田楽、寿司、日本酒が充実、夏は500円のかき氷。いつも混んでいるので当日でも予約を。お通し500円。',
  });
}

// ================================================================ ときわ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26007242/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '18:00']);
  put({
    id: 'kyoto_tokiwa_udon_kumano', name: 'ときわ (Tokiwa)', category: 'OMNI',
    lat: 35.017214, lng: 135.778205, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat udon (also soba and Chinese noodles) in a sweet Kyoto dashi, tempura udon, nama-fu on the shippoku udon (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi-based broths, kamaboko, egg and meat donburi (2024–2026 reviews).',
    hours_raw: '11:00–18:00; closed Tuesday (Tabelog; hours may change — check). Reviewers found it open around 17:30 (March 2026). No reservations (Tabelog). Cash only (Tabelog). 18 seats; non-smoking; coin parking nearby (Tabelog). At the south-east corner of Kyoto University Hospital, opposite Kumano Shrine at Higashioji-Marutamachi, about 550 m from Jingu-Marutamachi Stn (Tabelog; 2024–2025 reviews).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Higashioji-Marutamachi, opposite Kumano Shrine — 7 min from Jingu-Marutamachi Stn',
    cuisine: 'A Showa-era udon and donburi shop with soft udon in a gentle, slightly sweet Kyoto dashi (2024–2026 reviews) · shippoku udon ¥780 with two kamaboko, nama-fu, yuba, spinach and shiitake (April 2024) · tempura udon with a mini tamago-don ¥1,150 (June 2025); kitsune udon and mini tamago-don (March 2026); nabe-yaki udon (April 2026) · oyakodon with Kyoto-style broth (September 2024); meat curry don ¥1,000 (June 2025); meat bowl and mini udon set ¥1,300 (November 2025) · somen in summer (August 2024); soba and Chinese-style noodles too (March 2026)',
    website: null, gmaps: gm('ときわ うどん 熊野神社前'), menu_url: null,
    notes: '[Udon · opposite Kumano Shrine, a Showa noodle shop] A retro neighbourhood udon shop at the corner of Kyoto University Hospital: soft Kyoto udon in sweet dashi — shippoku, kitsune, tempura, nabe-yaki — with mini tamago-don sets and oyakodon, mostly ¥800–1,300. Cash only; closed Tuesdays.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'No owner is named in the sources read. Reviewers describe a long-established, Showa-era shop with friendly staff (2025–2026).',
      philosophy: null, specialty: 'Kyoto udon; donburi sets.',
      anecdotes: [
        { text: 'A June 2025 visitor came for lunch after a check-up at Kyoto University Hospital next door.', source: R + 'B508184372/' },
        { text: 'A March 2026 visitor, planning only a rice ball before a live show, was greeted with “We’re open!” and stayed for kitsune udon.', source: R + 'B525183035/' },
      ],
      japanese_sources_summary: '食べログ: ときわ、うどん・食堂、左京区聖護院山王町43、神宮丸太町駅から553m、11:00〜18:00、火曜定休 (最新の営業時間は要確認)、予約不可、現金のみ、18席、禁煙。口コミ (2024〜2026年、英語): 熊野神社前、京大病院の南東の角、昭和の老舗、やわらかいうどんとほんのり甘い京都の出汁、しっぽくうどん780円 (蒲鉾2種、生麩、湯葉、ほうれん草、椎茸)、天ぷらうどんとミニ玉子丼1,150円、きつねうどん、鍋焼きうどん、親子丼、肉カレー丼1,000円、肉丼とミニうどん1,300円、夏はそうめん、そばや中華そばも。',
      confidence: 'medium', sources: [TB, R + 'B484430365/', R + 'B490866571/', R + 'B491442721/', R + 'B508184372/', R + 'B508745800/', R + 'B517496223/', R + 'B523958047/', R + 'B524073444/', R + 'B525183035/', R + 'B526894509/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Old neighbourhood noodle shop; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区聖護院山王町43',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through April 2026.' },
    pin_source: `Tabelog ${TB} (35.017214, 135.778205); cross-checked: GSI 京都府京都市左京区聖護院山王町43番地 (lot) 40m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B484430365/', R + 'B508745800/', R + 'B517496223/'],
    price_note: 'Prices from April 2024 to November 2025 reviews.', last_checked: TODAY, items: [
      it('しっぽくうどん', '', 'Shippoku udon', '¥780', 'Udon', 'no', 'no', 'April 2024.', 'shippoku'),
      it('', '', 'Tempura udon with mini tamago-don', '¥1,150', 'Sets', 'no', 'no', 'June 2025.', 'tempura_set'),
      it('', '', 'Meat curry don', '¥1,000', 'Donburi', 'ask', 'no', 'June 2025.', 'curry_don'),
      it('', '', 'Meat bowl and mini udon set', '¥1,300', 'Sets', 'no', 'no', 'November 2025.', 'nikudon_set'),
    ] }, {
    cuisine: '昭和のうどんと丼の店。やわらかいうどんとやさしくほんのり甘い京都の出汁 (2024〜2026年の口コミ)・しっぽくうどん780円 (蒲鉾2種、生麩、湯葉、ほうれん草、椎茸) (2024年4月)・天ぷらうどんとミニ玉子丼1,150円 (2025年6月)、きつねうどんとミニ玉子丼 (2026年3月)、鍋焼きうどん (2026年4月)・京都の出汁の親子丼 (2024年9月)、肉カレー丼1,000円 (2025年6月)、肉丼とミニうどんのセット1,300円 (2025年11月)・夏はそうめん (2024年8月)、そばや中華そばも (2026年3月)',
    neighborhood: '東大路丸太町、熊野神社の向かい。神宮丸太町駅から徒歩7分',
    gf_detail: 'グルテンフリーではない。小麦のうどん (そばや中華そばも) とほんのり甘い京都の出汁、天ぷらうどん、しっぽくの生麩 (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。出汁のつゆ、蒲鉾、玉子や肉の丼 (2024〜2026年の口コミ)。',
    notes: '[うどん・熊野神社の向かい、昭和のうどん屋] 京大病院の角の、懐かしい町のうどん屋。やわらかい京都のうどんを甘めの出汁で (しっぽく、きつね、天ぷら、鍋焼き)、ミニ玉子丼のセットや親子丼も。だいたい800〜1,300円。現金のみ、火曜休み。',
  });
}

// ================================================================ 旬菜 あだち
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26006132/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '14:00'], ['17:00', '21:30']);
  put({
    id: 'kyoto_shunsai_adachi', name: '旬菜 あだち (Shunsai Adachi)', category: 'OMNI',
    lat: 35.01968, lng: 135.769528, cuisine_type: 'shokudo',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Japanese set meals — grilled and simmered fish, dashimaki, yudofu, obanzai — but fried oysters, tonkatsu and vegetable tempura sets contain wheat; no gluten information (2021–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Vegetable tempura and yudofu sets are offered, but the dashi, sake-lees soup and miso soup are not described (2023–2025 reviews).',
    hours_raw: 'Lunch 12:00–14:00, dinner 17:00–21:30; closed Tuesday (Tabelog; hours may change). Set meals at dinner at lunch prices (April 2024; March 2025). Reservations accepted (Tabelog). Cards (JCB, AMEX, Diners); no e-money or QR (Tabelog). 20 seats: 10 at the counter, 10 at tables; smoking area (Tabelog). About 100 m north of the Kawaramachi-Marutamachi crossing, 4 min from the Kawaramachi-Marutamachi bus stop and 6 min from Jingu-Marutamachi Stn (Tabelog; March 2023).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kawaramachi just north of Marutamachi — 6 min from Jingu-Marutamachi Stn',
    cuisine: 'Home-style Kyoto set meals (teishoku) at lunch and dinner for about ¥1,000–1,500 (2021–2026 reviews) · simmered flounder set ¥1,300 (March 2025); grilled sardine set (March 2025); grilled saury (September 2026); grilled horse mackerel; pork cutlet set (March 2026) · fried oysters fried to order (February 2025) · dashimaki tamago set; vegetable tempura set (April 2024) · obanzai set ¥1,000: two small dishes chosen from the counter, rice and miso soup (November 2021; September 2025) · winter yudofu lunch with sake-lees soup and pickles (January 2023)',
    website: null, gmaps: gm('旬菜 あだち 河原町丸太町'), menu_url: null,
    notes: '[Set meals · Kawaramachi-Marutamachi, home cooking at lunch prices] A counter-and-table Japanese kitchen just north of Kawaramachi-Marutamachi serving honest teishoku — simmered flounder, grilled saury or sardine, fried oysters, dashimaki, yudofu in winter — with obanzai picked from the counter, at about ¥1,000–1,500 day and night. The chef looks stern but is friendly.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)'], origin: null,
      background: 'An April 2024 reviewer describes a chef with a stern expression who is nonetheless friendly; the restaurant serves dinner set meals at lunch prices. A March 2025 diner valued the orthodox, homemade cooking.',
      philosophy: null, specialty: 'Kyoto set meals; obanzai.',
      anecdotes: [
        { text: 'A September 2026 regular, drawn in by the smell of grilling fish, was pleased the saury set price had not risen despite costly saury.', source: R + 'B517207705/' },
        { text: 'A February 2025 diner watched the year’s first fried oysters being fried right in front of the counter.', source: R + 'B501159425/' },
      ],
      japanese_sources_summary: '食べログ: 旬菜 あだち、日本料理、上京区上生洲町247、市バス河原町丸太町から徒歩4分、神宮丸太町駅から徒歩6分、昼12:00〜14:00、夜17:00〜21:30、火曜定休、予約可、カード (JCB、AMEX、Diners)、20席 (カウンター10、テーブル10)、喫煙所あり。口コミ (2021〜2026年、英語): 夜も昼と同じ値段の定食、カレイの煮付け定食1,300円、いわしの塩焼き、さんま、あじの塩焼き、とんかつ定食、カキフライ、だし巻き、野菜天ぷら、カウンターから選ぶおばんざい定食1,000円、冬は湯豆腐と粕汁、店主は強面だが気さく。',
      confidence: 'medium', sources: [TB, R + 'B443308068/', R + 'B460509630/', R + 'B461760111/', R + 'B483683893/', R + 'B500034679/', R + 'B501159425/', R + 'B502681389/', R + 'B514090861/', R + 'B517207705/', R + 'B524221895/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter set-meal shop; pick obanzai at the counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区上生洲町247',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.01968, 135.769528); cross-checked: GSI 京都府京都市上京区上生洲町247番地 (lot) 95m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B500034679/', R + 'B443308068/'],
    price_note: 'Prices from November 2021 and March 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Simmered flounder set', '¥1,300', 'Set meals', 'ask', 'no', 'March 2025.', 'karei_nitsuke'),
      it('', '', 'Obanzai set (two small dishes, rice, miso soup)', '¥1,000', 'Set meals', 'ask', 'ask', 'November 2021 price.', 'obanzai_set'),
      it('', '', 'Fried oyster set', '', 'Set meals', 'no', 'no', 'February 2025.', 'kaki_fry'),
    ] }, {
    cuisine: '昼も夜も1,000〜1,500円ほどの家庭的な京都の定食 (2021〜2026年の口コミ)・カレイの煮付け定食1,300円 (2025年3月)、いわしの塩焼き定食 (2025年3月)、さんま (2026年9月)、あじの塩焼き、とんかつ定食 (2026年3月)・注文してから揚げるカキフライ (2025年2月)・だし巻きの定食、野菜天ぷらの定食 (2024年4月)・カウンターから小鉢を2つ選ぶおばんざい定食1,000円 (2021年11月、2025年9月)・冬は湯豆腐と粕汁、漬物の昼の定食 (2023年1月)',
    neighborhood: '丸太町のすぐ北の河原町通。神宮丸太町駅から徒歩6分',
    gf_detail: '要確認。焼き魚や煮魚、だし巻き、湯豆腐、おばんざいの定食だが、カキフライ、とんかつ、野菜天ぷらの定食は小麦を含む。グルテンの情報はない (2021〜2026年の口コミ)。',
    vegan_detail: '要確認。野菜天ぷらや湯豆腐の定食もあるが、出汁、粕汁、味噌汁の中身は書かれていない (2023〜2025年の口コミ)。',
    notes: '[定食・河原町丸太町、昼の値段の家庭料理] 河原町丸太町のすぐ北の、カウンターとテーブルの和食。カレイの煮付け、さんまやいわしの塩焼き、カキフライ、だし巻き、冬の湯豆腐などのまっとうな定食に、カウンターから選ぶおばんざい。昼も夜も1,000〜1,500円ほど。店主は強面だが気さく。',
  });
}

save();
