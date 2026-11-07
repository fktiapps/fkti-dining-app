// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 57.
//   + TEA WAVE (matcha dessert café over five floors of an art building on Pontocho; Kagoshima-based group of four)
//   + 鮨 やぶ内 Sushi Yabuuchi (introduction-only sushi counter by Nishiki Market)
//   + 彩味 たき井 Saimi Takii (Pontocho house with a kawadoko; hamo and beef hot pots; run by the founder's two sons)
//   + 食べもん家 まっさん Tabemonya Massan (one-man izakaya up an alley between Kiyamachi and Pontocho)
//   - 但馬屋 ドン・キホーテ河原町店, 炉端とおでん 呼炉凪来 京都河原町店, C.STAND 京都河原町店, 京町家の黒毛和牛一頭買い焼肉
//     市場小路 木屋町店, 上島珈琲店 河原町店, ザ ゲート ホテル 京都高瀬川: skipped (reasons below).
//   Rest list (`queue.mjs kyoto-missed next rest 2000`), nearest-first, lane ids 26042768, 26034656 (skipped),
//   26045768 (skipped), 26041316 (skipped), 26032274 (skipped), 26004848 (skipped), 26035040 (skipped), 26021720,
//   26032148, 26021102.
//   None of the four drafted is in data/kyoto.json by name (TEA WAVE, やぶ内/Yabuuchi, たき井/Takii, まっさん/Massan) or
//   address (鍋屋町209-2, 御幸町通錦小路東北角, 松本町161-1, 木屋町四条上ル15番ロージ).
//   Same-name count (same brand or operator only): TEA WAVE — one in Kyoto; Tabelog's name search lists TEA WAVE Honten
//   and a second shop near Tenmonkan-dori (Kagoshima) and one in Fukuoka — a non-local group of four, drafted and flagged.
//   やぶ内, たき井, まっさん — one shop each. Large-parent list checked.
//   Service charges, checked against Tabelog's Japanese original: none listed for any of the four.
//   Other-diner remarks (Greg 2026-11-06): none used.
//   Halal: no operator in this batch claims halal.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-57');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26034656', '但馬屋 ドン・キホーテ河原町店: same-name shops of five or more — our crawl has five 但馬屋 shops in Kyoto (京都ヨドバシ店, PREMIUM 京都駅八条口店, ドン・キホーテ河原町店, イオンモールKYOTO店, 四条河原町店), and Tabelog lists more in Osaka and Tokyo');
skip('26045768', '炉端とおでん 呼炉凪来 京都河原町店: chain — Tabelog’s name search lists Koronagirai shops at Numazu, Toyota-shi, Susukino, Ichikawa, Nagoya, Yokohama, Obihiro, Yamato and more');
skip('26041316', 'C.STAND 京都河原町店: chain — Tabelog’s name search lists C.STAND shops at Namba, Shinjuku-sanchome, Ueno, Roppongi, Nagoya Sakae, Ikebukuro and more');
skip('26032274', '京町家の黒毛和牛一頭買い焼肉 市場小路 木屋町店: same-name shops of five or more — Tabelog’s name search lists six 市場小路 shops (JR京都伊勢丹店, 烏丸店, イオンモール京都桂川店, イオンモール北大路店, 木屋町店, 寺町本店); the 寺町本店 is already in data');
skip('26004848', '上島珈琲店 河原町店: chain — Tabelog’s name search lists Ueshima Coffee shops at Sapporo Apia, Amu-est, Kobe Airport, COREDO Nihonbashi, Kansai Airport, Azabu-juban and more');
skip('26035040', 'ザ ゲート ホテル 京都高瀬川: too thin to verify — Tabelog gives no hours or seats for the hotel’s top-floor lounge-restaurant, and only one review (March 2025) falls in 2025–26');

// ================================================================ TEA WAVE
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26042768/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '18:00']);
  put({
    id: 'kyoto_tea_wave_pontocho', name: 'TEA WAVE', category: 'OMNI',
    lat: 35.005225, lng: 135.770729, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Matcha and hojicha sweets — Basque cheesecake, gâteau chocolat, brownie, pudding, raw chocolate, ice cream, kakigori — and tea drinks; no gluten information (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Straight teas such as saemidori and tea sodas are plant-based, but the sweets and lattes use dairy and nothing is described as vegan (2026 reviews).',
    hours_raw: '12:00–18:00 daily; hours may change (Tabelog). No reservations (Tabelog); waits of up to about 40 minutes at busy times (June and August 2026). Order and pay at a touch panel on the ground floor, collect your tray and climb to a seat on floors 2–5 — no lift mentioned (May and July 2026). Cards and e-money; no QR (Tabelog). In the MINATO / COCO Gallery KYOTO building, an art space, near Pontocho, about 200 m from Gion-Shijo Station (Tabelog; 2026). Opened 20 March 2025 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Pontocho / Kiyamachi, north of Shijo — 200 m from Gion-Shijo Stn',
    cuisine: 'A matcha dessert café across five floors of an art gallery building (2026 reviews) · matcha plate of Basque cheesecake, ice cream, gâteau chocolat and raw chocolate, about ¥1,400–1,450 (May 2026) · iced chocolate matcha latte ¥800; saemidori tea ¥700; tea soda about ¥700 (May 2026) · matcha pudding with caramel, hojicha Basque cheesecake, rich hojicha shake, matcha brownie (June–August 2026) · summer matcha and hojicha kakigori (July 2026)',
    website: null, gmaps: gm('TEA WAVE 京都 先斗町'), menu_url: null,
    notes: '[Matcha café · near Pontocho, five floors of art] A self-service matcha dessert café in a five-storey gallery building: order at a touch panel, then climb to a seat among the art — a matcha plate of cheesecake, ice cream and chocolate (about ¥1,450), lattes, hojicha shakes and summer kakigori. Expect a queue at weekends; stairs only.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Reviewers describe the shop as a matcha-dessert specialist opened in 2025, with each floor of the building styled differently (May and July 2026). Tabelog’s name search lists TEA WAVE Honten and another shop near Tenmonkan-dori (Kagoshima) and one in Fukuoka.',
      philosophy: null, specialty: 'Matcha plate; matcha lattes.',
      anecdotes: [
        { text: 'An August 2026 group waited about 40 minutes and shared a matcha plate, a chocolate matcha latte, a hojicha shake and a hojicha cheesecake.', source: R + 'B533505300/' },
        { text: 'A July 2026 visitor recommends it to matcha lovers who prefer things less sweet.', source: R + 'B531663474/' },
      ],
      japanese_sources_summary: '食べログ: TEA WAVE、カフェ、中京区鍋屋町209-2 MINATO / COCO Gallery KYOTO、祇園四条駅から216m、毎日12:00〜18:00、予約不可、カード・電子マネー可、2025年3月20日オープン。口コミ (2026年、英語): 抹茶の甘味の専門店、5階建てのアートスペース、1階のタッチパネルで注文と支払い、2〜5階の好きな席へ、抹茶プレート1,400〜1,450円 (バスクチーズケーキ、アイス、ガトーショコラ、生チョコ)、チョコ抹茶ラテ800円、さえみどり700円、ティーソーダ700円ほど、抹茶プリン、ほうじ茶のバスクチーズケーキ、ほうじ茶シェイク、夏の抹茶とほうじ茶のかき氷、混むと40分ほど待つ。',
      confidence: 'medium', sources: [TB, 'https://tabelog.com/en/rstLst/?sw=TEA%20WAVE', R + 'B528401420/', R + 'B529007929/', R + 'B529547408/', R + 'B530706477/', R + 'B530957275/', R + 'B531338477/', R + 'B531663474/', R + 'B532564770/', R + 'B532647473/', R + 'B533505300/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Touch-panel ordering; self-service; stairs to every floor.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区鍋屋町209-2 MINATO / COCO Gallery KYOTO',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.005185, 135.770699), offset about 5.6 m north-east to (35.005225, 135.770729) because 和彩たか (kyoto_wasai_taka_kiyamachi) sits within 5 m; cross-checked: GSI 京都府京都市中京区鍋屋町209番地 (lot) 25m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B529007929/', R + 'B528401420/'],
    price_note: 'Prices from May 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Matcha plate (cheesecake, ice cream, gâteau chocolat, raw chocolate)', '¥1,450', 'Sweets', 'no', 'no', 'May 2026.', 'matcha_plate'),
      it('', '', 'Iced chocolate matcha latte', '¥800', 'Drinks', 'ask', 'no', 'May 2026.', 'choco_latte'),
      it('', '', 'Saemidori tea', '¥700', 'Drinks', 'gf', 'vegan', 'May 2026.', 'saemidori'),
    ] }, {
    cuisine: 'アートギャラリーのビル5フロアを使う抹茶の甘味のカフェ (2026年の口コミ)・バスクチーズケーキ、アイス、ガトーショコラ、生チョコの抹茶プレート1,400〜1,450円ほど (2026年5月)・アイスのチョコ抹茶ラテ800円、さえみどり700円、ティーソーダ700円ほど (2026年5月)・カラメルの抹茶プリン、ほうじ茶のバスクチーズケーキ、濃いほうじ茶シェイク、抹茶ブラウニー (2026年6〜8月)・夏の抹茶とほうじ茶のかき氷 (2026年7月)',
    neighborhood: '四条の北の先斗町・木屋町。祇園四条駅から200m',
    gf_detail: '要確認。抹茶やほうじ茶のバスクチーズケーキ、ガトーショコラ、ブラウニー、プリン、生チョコ、アイス、かき氷とお茶の飲み物。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: '要確認。さえみどりなどのお茶やティーソーダは植物性だが、甘味やラテには乳製品を使い、ヴィーガンと書かれたものはない (2026年の口コミ)。',
    notes: '[抹茶カフェ・先斗町近く、5フロアのアート] 5階建てのギャラリービルのセルフサービスの抹茶の甘味のカフェ。タッチパネルで注文し、アートの並ぶ階段を上って好きな席へ。チーズケーキ、アイス、チョコの抹茶プレート (1,450円ほど)、ラテ、ほうじ茶シェイク、夏のかき氷。週末は行列、階段のみ。',
  });
}

// ================================================================ 鮨 やぶ内
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26021720/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '22:00']);
  put({
    id: 'kyoto_sushi_yabuuchi', name: '鮨 やぶ内 (Sushi Yabuuchi)', category: 'OMNI',
    lat: 35.005089, lng: 135.766421, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sushi and side dishes ordered à la carte — nigiri, grilled fish, karasumi, crab in season; soy sauce and tsume not described (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi counter (reviews).',
    hours_raw: 'Tuesday–Sunday 18:00–22:00; closed Monday; hours may change (Tabelog). By introduction only; à la carte only; budget from ¥15,000 (Tabelog remarks) — reviewers spend ¥20,000–30,000 (2017–2020). Cards (JCB, AMEX, Diners) (Tabelog). 16 seats: 10 at the counter and a private room for 6 (Tabelog). Upstairs on the north-east corner of Gokomachi and Nishikikoji, by Nishiki Market (Tabelog; 2017). Opened 17 May 2012 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'by_reservation',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gokomachi-Nishikikoji, by Nishiki Market — 5 min from Shijo-Kawaramachi',
    cuisine: 'À la carte sushi with the day’s market fish, no set course — order more snacks or more nigiri as you like (2020 review; Tabelog) · June 2025: grilled nodoguro, torigai, chutoro, murasaki uni, kohada, kuruma ebi, hamo, anago, tsubugai, hamako, toro-taku, karasumi · crab on the first day of the season, crab miso mixed with sushi rice (November 2023) · marinated fresh shrimp (2020); natural eel (2017)',
    website: null, gmaps: gm('鮨 やぶ内 錦小路'), menu_url: null,
    notes: '[Sushi · by Nishiki Market, introduction only] A small upstairs sushi counter at Gokomachi-Nishikikoji where you order à la carte from the day’s market fish — nodoguro, uni, kohada, kuruma ebi, crab in season. By introduction only; from about ¥15,000; closed Monday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)', 'Chef (unnamed)'], origin: null,
      background: 'Tabelog’s remarks say the restaurant is by introduction only, à la carte only, with a budget from ¥15,000. Earlier reviewers describe a lively owner front of house and a quiet chef behind the counter (2018, 2020); a June 2025 visitor praised a chef who prepares everything from scratch.',
      philosophy: null, specialty: 'À la carte nigiri from the market.',
      anecdotes: [
        { text: 'A June 2025 visitor, there on a recommendation, worked through nine kinds of nigiri and found the purple uni at its best.', source: R + 'B509183902/' },
        { text: 'A November 2023 regular came for crab on the opening day of the season.', source: R + 'B125106838/' },
      ],
      japanese_sources_summary: '食べログ: 鮨 やぶ内、寿司、中京区御幸町通錦小路東北角 さしあのビル2F、河原町四条から徒歩5分、火〜日 18:00〜22:00、月曜定休、紹介制、アラカルトのみ、予算15,000円から (備考)、カード可 (JCB・AMEX・Diners)、16席 (カウンター10、個室6)、2012年5月17日オープン。口コミ (2017〜2025年、英語): のどぐろの焼き物、鳥貝、中トロ、ムラサキウニ、コハダ、車海老、鱧、穴子、つぶ貝、はまこ、とろたく、からすみ (2025年6月)、蟹の解禁日、蟹味噌とシャリ、元気な店主と寡黙な職人、天然うなぎ。',
      confidence: 'low', sources: [TB, R + 'B125106838/', R + 'B236225317/', R + 'B272703188/', R + 'B422651747/', R + 'B432107986/', R + 'B509183902/'] },
    cultural_comfort: { level: 'japanese', note: 'By introduction only; à la carte from about ¥15,000.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区御幸町通錦小路東北角 さしあのビル 2Ｆ',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; latest review June 2025.' },
    pin_source: `Tabelog ${TB} (35.005089, 135.766421); GSI resolves the address only to the wrong town, but OSM Nominatim reverse-geocodes the Tabelog point to 錦小路通, matching the address (north-east corner of Gokomachi and Nishikikoji); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'Budget from ¥15,000 (Tabelog); no dish prices read.', last_checked: TODAY, items: [
      it('', '', 'À la carte nigiri (e.g. chutoro, murasaki uni, kohada, kuruma ebi)', '', 'Sushi', 'ask', 'no', 'June 2025.', 'nigiri'),
      it('', '', 'Grilled nodoguro', '', 'Small dishes', 'ask', 'no', 'June 2025.', 'nodoguro'),
    ] }, {
    cuisine: 'その日の市場の魚で握るアラカルトの鮨。コースはなく、つまみも握りも好きなだけ (2020年の口コミ、食べログ)・2025年6月: のどぐろの焼き物、鳥貝、中トロ、ムラサキウニ、コハダ、車海老、鱧、穴子、つぶ貝、はまこ、とろたく、からすみ・解禁日の蟹、蟹味噌をシャリに混ぜて (2023年11月)・生海老の漬け (2020年)、天然うなぎ (2017年)',
    neighborhood: '錦市場そばの御幸町錦小路。四条河原町から徒歩5分',
    gf_detail: '要確認。アラカルトの握りとつまみ (焼き魚、からすみ、季節の蟹)。醤油やツメについては書かれていない (口コミ)。',
    vegan_detail: 'ヴィーガンではない。鮨のカウンター (口コミ)。',
    notes: '[鮨・錦市場そば、紹介制] 御幸町錦小路の2階の小さな鮨のカウンター。のどぐろ、ウニ、コハダ、車海老、季節の蟹など、その日の市場の魚をアラカルトで。紹介制、15,000円ほどから、月曜定休。',
  });
}

// ================================================================ 彩味 たき井
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26032148/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'kyoto_saimi_takii_pontocho', name: '彩味 たき井 (Saimi Takii)', category: 'OMNI',
    lat: 35.005358, lng: 135.771153, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Japanese dishes and hot pots — hamo nabe and hamo sukiyaki, gyu-suki, pork shabu, sesame tofu, dashimaki, soba; no gluten information (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: hamo, beef, pork and jidori dishes, hot pots in dashi (reviews).',
    hours_raw: 'Hours are not listed on Tabelog — phone ahead (075-213-3153). Reservations accepted (Tabelog). Cards (JCB, AMEX) and e-money (Tabelog). A kawadoko deck over the Kamo in season (2022–2026). A smoking area for heated tobacco only (Tabelog). À la carte welcome as well as courses (May 2026). On Pontocho, about 200 m from Gion-Shijo Station (Tabelog).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Pontocho north of Shijo — kawadoko over the Kamo',
    cuisine: 'A long-standing Pontocho restaurant with a summer kawadoko (reviews) · hamo sukiyaki finished with zosui (May 2026); hamo nabe course with grilled hamo (2022–2023) · gyu-suki nabe with yam, grated daikon and egg (2022) · stir-fried Omi beef with Kujo onion, a soba set, chirimen-sansho rice (May 2026) · sesame tofu, boiled bamboo shoots, dashimaki, grilled jidori, pork shabu-shabu hot pot (March 2026) · sake including Shimeharitsuru (May 2026)',
    website: null, gmaps: gm('彩味 たき井 先斗町'), menu_url: null,
    notes: '[Japanese · Pontocho kawadoko, hamo and beef hot pots] A Pontocho house with a deck over the Kamo in summer, now run by the founding chef’s two sons: hamo sukiyaki and hamo hot pots, gyu-suki, Omi beef with Kujo onion, sesame tofu and dashimaki, with courses or à la carte. Hours unlisted — phone ahead.',
    chef_bio: { chef_name: null, roles: ['Chefs (the founder’s two sons, unnamed)'], origin: null,
      background: 'A regular of nearly 30 years writes that the long-time chef has retired and the chef’s two sons now run the kitchen well (March 2026). Earlier reviewers mention welcoming owners (July 2022).',
      philosophy: null, specialty: 'Hamo sukiyaki; kawadoko dining.',
      anecdotes: [
        { text: 'A seven-time regular of nearly 30 years brought a junior from a college rakugo club to the counter in March 2026.', source: R + 'B458445443/' },
        { text: 'A May 2026 walker was welcomed with “feel free to order à la carte” and had Omi beef, soba and a beer by the river.', source: R + 'B528760922/' },
      ],
      japanese_sources_summary: '食べログ: 彩味 たき井、日本料理、中京区先斗町四条上ル松本町161-1、祇園四条駅から215m、営業時間の記載なし、予約可、カード (JCB・AMEX)・電子マネー可、加熱式たばこ専用の喫煙所。口コミ (2022〜2026年、英語): 夏の川床、鱧すき (締めの雑炊)、鱧鍋のコースと焼き鱧、牛すき鍋、近江牛と九条ねぎの炒め、そばのセット、ちりめん山椒ご飯、胡麻豆腐、筍の炊いたん、だし巻き、地鶏の焼き物、豚しゃぶ鍋、〆張鶴、長年の料理人が引退し二人の息子が継ぐ (2026年3月)、アラカルトも可。',
      confidence: 'low', sources: [TB, R + 'B451675200/', R + 'B458445443/', R + 'B469598901/', R + 'B515008521/', R + 'B528337915/', R + 'B528760922/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Hours unlisted — phone ahead; kawadoko in season.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区先斗町四条上ル松本町161-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through May 2026.' },
    pin_source: `Tabelog ${TB} (35.005358, 135.771153); cross-checked: GSI 京都府京都市中京区松本町161番地 (lot) 27m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B528337915/', R + 'B528760922/'],
    price_note: 'No prices read; reviewers spend ¥2,000–15,000.', last_checked: TODAY, items: [
      it('', '', 'Hamo sukiyaki with zosui', '', 'Hot pots', 'ask', 'no', 'May 2026.', 'hamo_suki'),
      it('', '', 'Omi beef and Kujo onion stir-fry', '', 'À la carte', 'ask', 'no', 'May 2026.', 'omi_beef'),
    ] }, {
    cuisine: '夏の川床のある先斗町の老舗 (口コミ)・鱧すき、締めは雑炊 (2026年5月)。焼き鱧と鱧鍋のコース (2022〜2023年)・とろろ、大根おろし、卵で食べる牛すき鍋 (2022年)・近江牛と九条ねぎの炒め、そばのセット、ちりめん山椒ご飯 (2026年5月)・胡麻豆腐、筍の炊いたん、だし巻き、地鶏の焼き物、豚しゃぶ鍋 (2026年3月)・〆張鶴などの日本酒 (2026年5月)',
    neighborhood: '四条の北の先斗町。鴨川の川床',
    gf_detail: '要確認。鱧鍋や鱧すき、牛すき、豚しゃぶ、胡麻豆腐、だし巻き、そばなどの和食と鍋。グルテンの情報はない (口コミ)。',
    vegan_detail: 'ヴィーガンではない。鱧、牛、豚、地鶏の料理と出汁の鍋 (口コミ)。',
    notes: '[和食・先斗町の川床、鱧と牛の鍋] 夏は鴨川に床を出す先斗町の店で、今は創業の料理人の二人の息子が営む。鱧すきや鱧鍋、牛すき、近江牛と九条ねぎ、胡麻豆腐やだし巻きを、コースでもアラカルトでも。営業時間の記載がないので電話で確認を。',
  });
}

// ================================================================ 食べもん家 まっさん
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26021102/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '24:00']);
  put({
    id: 'kyoto_tabemonya_massan', name: '食べもん家 まっさん (Tabemonya Massan)', category: 'OMNI',
    lat: 35.005807, lng: 135.7709, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Fish-led izakaya dishes — sashimi with house dressings, sushi, obanzai, horse-meat shabu, matsutake fried rice; no gluten information (2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sashimi, sushi, tuna and horse meat (2025 reviews).',
    hours_raw: 'Tuesday–Sunday 17:00–24:00; closed Monday; hours may change (Tabelog). Reservations accepted (Tabelog). Cards; no e-money or QR (Tabelog). 16 seats: 8 at the counter and 8 in booths (Tabelog). Smoking allowed at all seats (September 2025). Upstairs in alley no. 15 between Kiyamachi and Pontocho, north of Shijo — easy to miss (Tabelog; August 2025).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Alley no. 15 between Kiyamachi and Pontocho, north of Shijo',
    cuisine: 'A small izakaya of about 26 years’ standing where the owner cooks everything (2025 reviews) · fresh fish prepared in front of you; sashimi served with house dressings (truffle-based, ponzu-based) even for the garnish (June and August 2025) · tuna from Oma; shime-saba with lemon (August–September 2025) · horse sashimi done shabu-shabu style; early matsutake from early summer and matsutake fried rice, packed to take home (July and September 2025) · sushi with big toppings; gentle obanzai (February 2025) · buri shabu (January 2024) · sake and shochu (Tabelog)',
    website: null, gmaps: gm('食べもん家 まっさん 木屋町'), menu_url: null,
    notes: '[Izakaya · Kiyamachi-Pontocho alley, upstairs, the owner’s fish] A tiny upstairs izakaya hidden in an alley between Kiyamachi and Pontocho, where the owner, Massan, has cooked for about 26 years: very fresh sashimi with house dressings, Oma tuna, horse-meat shabu, sushi, obanzai and, in season, matsutake fried rice. Smoking allowed; closed Monday.',
    chef_bio: { chef_name: null, roles: ['Owner-chef, known as “Massan”'], origin: null,
      background: 'An August 2025 first-timer learned the shop has run for 26 years and that the owner goes by “Massan”, like the shop. A February 2025 reviewer says the owner runs everything single-handed, a little stern at first but good company; earlier reviewers describe a couple running it (2023, January 2024).',
      philosophy: null, specialty: 'Sashimi with house dressings; matsutake fried rice.',
      anecdotes: [
        { text: 'A July 2025 regular travels from Aichi for the early matsutake and takes the fried rice home for breakfast.', source: R + 'B511453298/' },
        { text: 'A June 2025 guest, an hour late after a flight delay in heavy rain, was still kindly seated.', source: R + 'B508904502/' },
      ],
      japanese_sources_summary: '食べログ: 食べもん家 まっさん、居酒屋、中京区木屋町四条上ル15番ロージ2F、火〜日 17:00〜24:00、月曜定休、予約可、カード可、16席 (カウンター8、ボックス8)。口コミ (2025年、英語): 創業26年、店主の呼び名は「まっさん」、ひとりで切り盛り、目の前でさばく新鮮な魚、トリュフやポン酢系の自家製ドレッシングで食べる刺身のつま、大間のまぐろ、しめ鯖にレモン、馬刺しのしゃぶしゃぶ、初夏からの早松茸と松茸の炒飯の持ち帰り、ネタの大きな寿司、おばんざい、全席喫煙可、路地の2階で見つけにくい。',
      confidence: 'medium', sources: [TB, R + 'B477880878/', R + 'B481894918/', R + 'B502645783/', R + 'B508904502/', R + 'B511453298/', R + 'B511855299/', R + 'B535878217/'] },
    cultural_comfort: { level: 'japanese', note: 'Tiny hidden counter; smoking allowed; the owner guides you on how to eat things.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区木屋町四条上ル15番ロージ 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through January 2026.' },
    pin_source: `Tabelog ${TB} (35.005747, 135.7709), offset about 6.7 m north to (35.005807, 135.7709) because 先斗町 たばこや (kyoto_pontocho_tabakoya) sits within 3 m; GSI has no lot for 15番ロージ, but OSM Nominatim reverse-geocodes the Tabelog point to 15番路地, matching the address; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B511855299/', R + 'B535878217/'],
    price_note: 'No prices read; reviewers spend ¥2,000–10,000.', last_checked: TODAY, items: [
      it('', '', 'Sashimi with house dressings', '', 'Fish', 'ask', 'no', 'August 2025.', 'sashimi'),
      it('', '', 'Horse sashimi, shabu-shabu style', '', 'Meat', 'ask', 'no', 'September 2025.', 'basashi'),
      it('', '', 'Matsutake fried rice (in season)', '', 'Rice', 'ask', 'no', 'July and September 2025.', 'matsutake_rice'),
    ] }, {
    cuisine: '店主がすべて作る、26年ほど続く小さな居酒屋 (2025年の口コミ)・目の前でさばく新鮮な魚。刺身はつままで自家製のドレッシング (トリュフ系、ポン酢系) で (2025年6月・8月)・大間のまぐろ。レモンで食べるしめ鯖 (2025年8〜9月)・しゃぶしゃぶ風の馬刺し。初夏からの早松茸と松茸の炒飯、持ち帰りも (2025年7月・9月)・ネタの大きな寿司、やさしいおばんざい (2025年2月)・ぶりしゃぶ (2024年1月)・日本酒と焼酎 (食べログ)',
    neighborhood: '四条の北、木屋町と先斗町のあいだの15番路地',
    gf_detail: '要確認。自家製ドレッシングの刺身、寿司、おばんざい、馬肉のしゃぶしゃぶ、松茸の炒飯などの魚中心の居酒屋料理。グルテンの情報はない (2025年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。刺身、寿司、まぐろ、馬肉 (2025年の口コミ)。',
    notes: '[居酒屋・木屋町と先斗町の路地の2階、店主の魚] 木屋町と先斗町のあいだの路地に隠れた2階の小さな居酒屋。「まっさん」と呼ばれる店主が26年ほど腕をふるう。自家製ドレッシングの新鮮な刺身、大間のまぐろ、馬肉のしゃぶしゃぶ、寿司、おばんざい、季節には松茸の炒飯。喫煙可、月曜定休。',
  });
}

save();
