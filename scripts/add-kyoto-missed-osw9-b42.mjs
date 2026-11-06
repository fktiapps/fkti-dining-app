// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 42.
//   + バーヤナギ Bar Yanagi (whisky bar of over 40 years with vinyl records, south of the Imperial Palace)       [core]
//   + 手打ち蕎麦みながわ 京・御池 Teuchi Soba Minagawa (Oike branch of the Kitashirakawa hand-made soba house)  [core]
//   + 本鮪と創作和食 吟醸くらうど 丸太町本店 Ginjo Kuraudo (bluefin tuna and local sake izakaya, Marutamachi)    [notable]
//   + Wine蔵しおり Wine Gura Shiori (creative teppan and all-you-can-drink wine near Kyoto Station)          [notable]
//   - 清水 順正 おかべ家 — same-concept branch of 順正 (yudofu), already in data as kyoto_nanzenji_junsei.
//   - 串くら 本店 — run by 株式会社フクナガ (also かつくら, Patisserie Fukunaga; job listing via web search), on
//     the large-parent list (Fukunaga).
//   - 京の焼肉処 弘 京都タワーサンド店 — chain: the official site lists 8 京の焼肉処 弘 shops plus 7 other 弘 concepts.
//   - 點心茶室 京都店 — chain: 維新號's site lists 8+ shops (二子玉川, 上大岡, 吉祥寺, 京都, 神戸, なんば, 新宿, 浦和…).
//   - マスターズドリームハウス 京都 — Dynac Japan (Suntory group) brand: sub-brand of a large parent.
//   - 551蓬莱 JR京都駅店 — chain: four 551蓬莱 counters in the Kyoto crawl alone, part of the Osaka 551蓬莱 chain.
//   - 鮨酒場スシトフジ — same-concept branch of スシトフジ, already in data as osaka_ura_namba_sushi_to_fuji.
//   Same-name counts first (same brand or operator): バーヤナギ 1; みながわ — the Kitashirakawa original and this
//   branch (Tabelog), neither in data, a small group; 吟醸くらうど — 丸太町本店, にしき雲 and 京都駅前店 (crawl),
//   none in data, a small group, the 本店 drafted; Wine蔵しおり 1.
//   Taken in queue order on 2026-11-06: core (26001215 skip), 26007767, 26029037; notable (26000465, 26028815,
//   26000483, 26034419 skip), 26032229, (26002301, 26038511 skip), 26023793. None drafted is in data/kyoto.json.
//   Service charges checked against Tabelog's Japanese original: みながわ "なし" (its English says a fee may be
//   added); くらうど 「単品のお客様のみチャージ料（付きだし）380円 コースのお客様はかかりません。」; しおり
//   「■先付：480円／コース時は除く」; バーヤナギ has no section.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-42');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26001215', 'same-concept branch: 清水 順正 おかべ家 is a 順正 yudofu restaurant; 南禅寺 順正 is already in data (kyoto_nanzenji_junsei)');
skip('26000465', 'sub-brand of a large parent: 串くら is run by 株式会社フクナガ (also かつくら and Patisserie Fukunaga, per a job listing found by web search); Fukunaga is on the large-parent list');
skip('26028815', 'chain: 京の焼肉処 弘 lists 8 shops (千本三条本店, 三条木屋町, 京都駅前, 八条口, 京都タワーサンド, 西院, 四条木屋町, 山科駅前) plus 7 other 弘 concepts (yakiniku-hiro.com)');
skip('26000483', 'chain: 點心茶室 belongs to 維新號, whose site lists 8+ shops (二子玉川, 上大岡, 吉祥寺, 京都, 神戸, なんば, 新宿, 浦和)');
skip('26034419', 'sub-brand of a large parent: MASTER\'S DREAM HOUSE is a Dynac Japan (Suntory group) brand (dynacjapan.com/brands/masters-dream-house)');
skip('26002301', 'chain: 551蓬莱 — four counters in the Kyoto crawl alone (JR京都駅, ポルタ, 伊勢丹, 高島屋), part of the Osaka 551蓬莱 chain');
skip('26038511', 'same-concept branch: 鮨酒場スシトフジ is a スシトフジ shop; 裏難波スシトフジ is already in data (osaka_ura_namba_sushi_to_fuji)');

// ================================================================ バーヤナギ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26007767/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '24:00']);
  put({
    id: 'kyoto_bar_yanagi', name: 'バーヤナギ (Bar Yanagi)', category: 'OMNI',
    lat: 35.014856, lng: 135.762558, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A whisky and cocktail bar; snacks such as mixed nuts (2025 review).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A bar; cream-free cocktails noted in an older review (2018); snacks such as nuts (2025 review).',
    hours_raw: 'Mon–Sat 17:00–24:00; closed Sunday; hours may change (Tabelog). Bookings taken; often full — a June 2025 visitor phoned ahead (Tabelog; June 2025 review). Smoking allowed (Tabelog; May 2026 review). Cards (JCB, AMEX, Diners) (Tabelog). 15 counter seats (Tabelog). On Ebisugawa east of Takakura, in a residential area south of the Imperial Palace; 5 min from Marutamachi Stn (Tabelog; 2023–24 reviews). Relocated from Kita-ku long ago (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ebisugawa south of the Imperial Palace — 5 min from Marutamachi Stn',
    cuisine: 'A whisky-focused authentic bar playing vinyl records: a wide whisky selection (Super Nikka, Bunnahabhain 12, Caol Ila 12 as highballs, June 2025), the master\'s recommendations to suit your mood, gin and tonic, gimlet with fresh lime, improvised cocktails; mixed nuts (2018–26 reviews)',
    website: null, gmaps: gm('バーヤナギ 京都'), menu_url: null,
    notes: "[Whisky bar · Ebisugawa near the Imperial Palace] A quiet, moody counter bar of over 40 years, records on the turntable and a deep whisky shelf; tell the calm master your mood and get a recommendation. About ¥2,000–5,000. Smoking allowed. Mon–Sat 17:00–24:00.",
    chef_bio: { chef_name: null, roles: ['Master (unnamed)'], origin: null,
      background: 'A May 2026 reviewer says the bar has been running for over 40 years; Tabelog notes it moved from Shichiku in Kita-ku.',
      philosophy: null, specialty: 'Whisky.',
      anecdotes: [
        { text: 'Turned away several times when full, a June 2025 visitor phoned ahead and finally got in, finding the owner calm and pleasant.', source: R + 'B194940258/' },
        { text: 'A May 2026 visitor saw the friendly master serving many international guests with care, and warned that smoking is allowed.', source: R + 'B528123991/' },
      ],
      japanese_sources_summary: '食べログ: バーヤナギ、バー、中京区夷川通高倉東入天守町757、丸太町駅から332m、月〜土 17:00〜24:00、日曜休み、予約可、喫煙可、カード (JCB・AMEX・Diners)、15席、北区紫竹から移転。口コミ (2018年〜2026年、英語): 御所南の住宅街、レコードの流れる落ち着いたバー、ウイスキーの品揃え、ハイボール、ジントニック、生ライムのギムレット、マスターのおすすめ、40年以上続く、外国人客も多い。',
      confidence: 'low', sources: [TB, R + 'B194940258/', R + 'B471497321/', R + 'B488616563/', R + 'B493997180/', R + 'B528123991/', R + 'B534232150/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'The master serves many international guests (May 2026 review); smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区夷川通高倉東入天守町757',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.014856, 135.762558); cross-checked: GSI 京都府京都市中京区天守町757番地 (lot) 54m; 6.9 m from kyoto_agreable_ebisugawa; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B194940258/'],
    price_note: 'No menu or prices read.', last_checked: TODAY, items: [
      it('', '', 'Whisky highball (master\'s recommendation)', '', 'Drinks', 'ask', 'ask', 'June 2025 review.', 'highball'),
    ] }, {
    cuisine: 'レコードの流れるウイスキー中心の正統派バー: 豊富なウイスキー (2025年6月はスーパーニッカ、ブナハーブン12年、カリラ12年をハイボールで)、気分に合わせたマスターのおすすめ、ジントニック、生ライムのギムレット、即興のカクテル、ミックスナッツ (2018〜26年の口コミ)',
    neighborhood: '御所の南の夷川通。丸太町駅から徒歩5分',
    gf_detail: '要確認。ウイスキーとカクテルのバー。つまみはミックスナッツなど (2025年の口コミ)。',
    vegan_detail: '要確認。バー。クリームを使わないカクテルの記述 (2018年)、つまみはナッツなど (2025年の口コミ)。',
    notes: '[ウイスキーバー・御所近くの夷川通] 40年以上続く静かで雰囲気のあるカウンターのバー。レコードが回り、ウイスキーの棚が充実。落ち着いたマスターに気分を伝えればおすすめを。2千〜5千円ほど。喫煙可。月〜土の17〜24時。',
  });
}

// ================================================================ 手打ち蕎麦みながわ 京・御池
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26029037/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://soba-minagawa-oike.com';
  const W = day(['11:30', '14:30'], ['17:30', '22:30']); const E = day(['12:00', '20:30']);
  put({
    id: 'kyoto_teuchi_soba_minagawa_oike', name: '手打ち蕎麦みながわ 京・御池 (Teuchi Soba Minagawa Kyo Oike)', category: 'OMNI',
    lat: 35.011099, lng: 135.756342, cuisine_type: 'udon_soba',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Coarse-ground seiro is 100% buckwheat (September 2026 review); other soba not described; soy-based tsuyu, tempura (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi-based tsuyu, chicken and duck nanban, tempura (2025–26 reviews).',
    hours_raw: 'Mon and Wed–Fri 11:30–14:30 (last order 14:00) and 17:30–22:30 (last order 22:00); Sat, Sun and holidays 12:00–20:30 continuous (last order 20:00); closed Tuesday (Tabelog). Bookings by phone only; queues at lunch; soba can sell out (Tabelog; 2026 reviews). Service charge: none — Tabelog\'s Japanese original says "なし" (its English says a fee may be added). Cash only (Tabelog; October 2026 review). No photos inside (October 2026 review). 19 seats: 9 at the counter, 10 at tables; non-smoking (Tabelog). Facing Oike-dori; 4 min from Karasuma Oike Stn (Tabelog).',
    hours: { 0: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Oike-dori west of Karasuma — 4 min from Karasuma Oike Stn',
    cuisine: 'Hand-made soba from the Kitashirakawa みながわ, with sides and sake (Tabelog): zaru, inaka and coarse-ground 100% buckwheat seiro, chilled kake soba, summer cold ume-oroshi soba ¥1,700 (July 2026), dipping ume-oroshi, tempura seiro, tempura with grated daikon, Tanba chicken or duck nanban; a lunch set with seasonal rice, salted tofu and fried soba; sake and soba shochu with soba-yu (2025–26 reviews)',
    website: SITE, gmaps: gm('手打ち蕎麦みながわ 京・御池'), menu_url: null,
    notes: "[Hand-made soba · Oike-dori] The Oike branch of a long-loved Kitashirakawa soba house: fine, fragrant hand-cut soba — try the coarse 100% buckwheat seiro or summer ume-oroshi — with tempura, duck nanban and sake in the evening. About ¥1,200–2,000 at lunch. Cash only; closed Tuesday.",
    chef_bio: { chef_name: null, roles: ['Soba makers (unnamed)'], origin: null,
      background: 'Opened 5 April 2017 (Tabelog) as the Oike branch of みながわ, long loved in Kitashirakawa, "so more customers can enjoy our handmade soba" (Tabelog).',
      philosophy: 'Hand-made soba with sides to enjoy with sake and shochu (Tabelog).',
      specialty: 'Hand-cut soba.',
      anecdotes: [
        { text: 'A May 2026 diner who joined a queue at opening found the soba thin and mild in aroma, and the tsuyu and wasabi a little scant.', source: R + 'B527532851/' },
        { text: 'A September 2026 regular noticed prices well up on a few years before, and wondered whether inbound tourism was the cause.', source: R + 'B527468764/' },
        { text: 'A family arriving late in Silver Week 2026 got the last soba before it ran out.', source: R + 'B536567446/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 手打ち蕎麦みながわ 京・御池、そば・居酒屋・日本料理、中京区橋之町755、烏丸御池駅から徒歩4分、月水木金 11:30〜14:30・17:30〜22:30、土日祝 12:00〜20:30 (通し営業)、火曜休み、電話予約のみ、サービス料なし、カード・電子マネー不可、19席 (カウンター9、テーブル10)、禁煙、2017年4月5日オープン、北白川で愛されてきたみながわの御池店。口コミ (2025年7月〜2026年10月、英語): ざる、田舎そば、粗挽き十割のせいろ、冷やかけ、夏の冷やし梅おろし1,700円、つけ梅おろし、天せいろ、天おろし、丹波鶏や鴨の南蛮、旬のご飯と小鉢2品のランチセット、蕎麦焼酎の蕎麦湯割り、現金のみ、店内撮影不可、昼は行列、売り切れも、値上がりしたという声。',
      confidence: 'medium', sources: [TB, SITE, R + 'B509562341/', R + 'B524910777/', R + 'B526419012/', R + 'B527468764/', R + 'B527532851/', R + 'B527842647/', R + 'B533790417/', R + 'B536513596/', R + 'B536567446/', R + 'B537041217/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter seats facing the kitchen; no photos inside; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区橋之町755',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.011099, 135.756342); cross-checked: GSI 京都府京都市中京区橋之町755番地 (lot) 25m; 7.6 m from kyoto_chatei_kaerunouta; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B526419012/'],
    price_note: 'No menu read; one price from a July 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Chilled ume-oroshi soba (June–August)', '¥1,700', 'Soba', 'ask', 'no', 'July 2026 review.', 'hiyashi_ume_oroshi'),
      it('', '', 'Coarse-ground 100% buckwheat seiro', '', 'Soba', 'ask', 'ask', 'September 2026 review.', 'arabiki_seiro'),
    ] }, {
    cuisine: '北白川のみながわの手打ちそばと一品、酒 (食べログ): ざる、田舎そば、粗挽き十割のせいろ、冷やかけ、夏の冷やし梅おろし1,700円 (2026年7月)、つけ梅おろし、天せいろ、天おろし、丹波鶏や鴨の南蛮。旬のご飯、塩豆腐、揚げそばの付くランチセット。日本酒や蕎麦焼酎の蕎麦湯割り (2025〜26年の口コミ)',
    neighborhood: '烏丸の西の御池通。烏丸御池駅から徒歩4分',
    gf_detail: '要確認。粗挽きのせいろは十割 (2026年9月の口コミ)、ほかのそばは不明。醤油のつゆ、天ぷら (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。出汁のつゆ、鶏や鴨の南蛮、天ぷら (2025〜26年の口コミ)。',
    notes: '[手打ちそば・御池通] 北白川で長く愛されてきたそば屋の御池店。細く香る手打ちそば (粗挽き十割のせいろや夏の梅おろしを) に、夜は天ぷら、鴨南蛮、日本酒も。昼は1,200〜2,000円ほど。現金のみ。火曜休み。',
  });
}

// ================================================================ 本鮪と創作和食 吟醸くらうど 丸太町本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26032229/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:30']);
  put({
    id: 'kyoto_ginjo_kuraudo_marutamachi', name: '本鮪と創作和食 吟醸くらうど 丸太町本店 (Ginjo Kuraudo Marutamachi)', category: 'OMNI',
    lat: 35.014935, lng: 135.758085, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Bluefin tuna sashimi with soy beside menchi katsu, tempura and dan dan noodles (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a tuna and fish izakaya (Tabelog).',
    hours_raw: '17:00–23:30 daily (Tabelog). Bookings taken; seats cannot be specified; private rooms for 3 or more; course bookings have a time limit (Tabelog; August 2026 review). Charge: Tabelog\'s Japanese original says 「単品のお客様のみチャージ料（付きだし）380円 コースのお客様はかかりません。」 — ¥380 for à la carte guests, none with a course. Cards, e-money, PayPay (Tabelog). 48 seats: counter and tables downstairs, a shoes-off sunken-kotatsu room upstairs; parties up to 26–28 (Tabelog; November 2026 review). A two-storey house on the corner of Ebisugawa and Muromachi; 3 min from Marutamachi Stn exit 6 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ebisugawa-Muromachi — 3 min from Marutamachi Stn',
    cuisine: 'Bluefin tuna and about 40 seasonal local sakes at ¥580 a glass (Tabelog): the "Tuna Treasure Box" of ten bluefin cuts ¥980 per person (Tabelog), toro-taku, grilled tuna skin; courses such as the "Akagumo" with all-you-can-drink, from about ¥7,000 (November 2026) — taro potato salad, soy-milk dashimaki sandwich, grilled fatty mackerel, menchi katsu, sushi; fig tempura, taro kara-age, aosa omelette, eel, duck, fiery dan dan noodles (2024–26 reviews)',
    website: null, gmaps: gm('吟醸くらうど 丸太町本店'), menu_url: TB + 'dtlmenu/',
    notes: "[Tuna & sake izakaya · Marutamachi] A lively two-storey corner house, the main shop of a small Kyoto group: a ten-cut bluefin \"treasure box\" for ¥980, creative small plates and some 40 local sakes by the glass, or all-you-can-drink courses. About ¥5,000–7,000. Open daily to 23:30; packed on Fridays.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Opened 9 May 2019 (Tabelog); the main shop of 吟醸くらうど, with にしき雲 and 京都駅前店 (Tabelog crawl).',
      philosophy: null, specialty: 'Bluefin tuna; local sake.',
      anecdotes: [
        { text: 'On a packed Friday in August 2026, a diner\'s only complaint was being asked to leave at the set time.', source: R + 'B533722698/' },
        { text: 'Seated upstairs beside a banquet in November 2026, a party of four was asked first whether the noise was all right.', source: R + 'B538767163/' },
        { text: 'A September 2026 diner warned that the extra-spicy dan dan noodles are hotter than most.', source: R + 'B536323630/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 本鮪と創作和食 吟醸くらうど 丸太町本店、居酒屋・魚介料理・日本酒バー、中京区鏡屋町50-2、丸太町駅6番出口から徒歩3分、夷川通と室町通の角の二階建て、17:00〜23:30、無休、予約可 (席の指定不可)、単品のお客様のみチャージ料 (付きだし) 380円・コースはなし、48席 (カウンター8、テーブル16、掘りごたつ24)、個室、カード・電子マネー・PayPay 可、2019年5月9日オープン、本鮪の玉手箱 (10種) 一人980円、地酒約40種を580円。口コミ (2024年11月〜2026年11月、英語): 赤雲コース、飲み放題、里芋のポテサラ、豆乳だし巻きサンド、鯖の塩焼き、メンチカツ、寿司、いちじくの天ぷら、里芋の唐揚げ、あおさの卵焼き、トロたく、担々麺、時間制、2階の掘りごたつ。',
      confidence: 'medium', sources: [TB, R + 'B482500564/', R + 'B531971412/', R + 'B533722698/', R + 'B533731754/', R + 'B534428432/', R + 'B535071962/', R + 'B536323630/', R + 'B537076721/', R + 'B538767163/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Shoes off upstairs; course time limits.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区鏡屋町50-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.014935, 135.758085); cross-checked: GSI 京都府京都市中京区鏡屋町50番地 (lot) 73m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'Prices from Tabelog\'s shop text.', last_checked: TODAY, items: [
      it('', '', 'Bluefin tuna treasure box (10 cuts), per person', '¥980', 'Tuna', 'ask', 'no', 'Tabelog.', 'maguro_tamatebako'),
      it('', '', 'Local sake by the glass', '¥580', 'Drinks', 'ask', 'ask', 'Tabelog; about 40 kinds.', 'jizake_glass'),
      it('付きだし', '', 'Appetizer charge (à la carte only)', '¥380', 'Charges', 'ask', 'ask', 'Tabelog.', 'tsukidashi'),
    ] }, {
    cuisine: '本鮪と季節の地酒約40種 (グラス580円) (食べログ): 本鮪10種の「本鮪の玉手箱」一人980円 (食べログ)、トロたく、鮪の皮の焼き物。飲み放題付きの「赤雲」などのコース (2026年11月は7千円ほど): 里芋のポテサラ、豆乳だし巻きサンド、脂ののった鯖の焼き物、メンチカツ、寿司。いちじくの天ぷら、里芋の唐揚げ、あおさの卵焼き、鰻、鴨、激辛の担々麺 (2024〜26年の口コミ)',
    neighborhood: '夷川室町。丸太町駅から徒歩3分',
    gf_detail: '要確認。醤油の本鮪の刺身と、メンチカツ、天ぷら、担々麺 (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鮪と魚の居酒屋 (食べログ)。',
    notes: '[鮪と日本酒の居酒屋・丸太町] 京都の小さなグループの本店で、賑やかな角の二階建て。本鮪10種の「玉手箱」が980円、創作の小皿、グラスの地酒約40種、飲み放題のコースも。5千〜7千円ほど。毎日23時半まで。金曜は満席。',
  });
}

// ================================================================ Wine蔵しおり
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26023793/'; const R = TB + 'dtlrvwlst/';
  const H = day(['16:00', '23:00']);
  put({
    id: 'kyoto_wine_gura_shiori', name: 'Wine蔵しおり (Wine Gura Shiori)', category: 'OMNI',
    lat: 34.989362, lng: 135.757901, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Teppan dishes, gyoza in tomato sauce, pizza and pasta beside grilled squid and vegetables (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood, beef tendon, cheese dishes (2026 reviews).',
    hours_raw: '16:00–23:00 daily (last orders food 22:00, drinks 22:30); closed 31 December–1 January (Tabelog). Bookings taken; seat-only bookings need one drink and one dish each; stays capped at 3 hours (Tabelog). Charge: Tabelog\'s Japanese original says 「■先付：480円／コース時は除く」 — a ¥480 appetizer, not with courses. Unlimited all-you-can-drink ¥3,200; courses of 8 dishes ¥6,600 or 9 dishes ¥7,700 with drinks (Tabelog). Cards incl. UnionPay, IC cards and PayPay (Tabelog). 42 seats: counter, private tables and sunken-kotatsu rooms for 3–8, a hall for 30; non-smoking (Tabelog). Order by wine number; call button at tables (2026 reviews). On Shichijo-dori; 5 min from Kyoto Stn, reachable by the underground walkway (Tabelog; September 2026 review).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shichijo-dori near Kyoto Station',
    cuisine: 'Creative teppan cooking with wine — about 13 wines on the all-you-can-drink list, sparkling to red, ordered by number (2026 reviews): teppan squid, eggplant and zucchini baked with cheese, gyoza in tomato sauce, omelette topped with braised beef tendon, pizza, pasta, fried scallops, quail egg and cherry tomato pinchos, cheese aligot, smoked nuts; courses of 8–9 dishes with drinks ¥6,600–7,700 (Tabelog; 2026 reviews)',
    website: null, gmaps: gm('Wine蔵しおり 京都'), menu_url: TB + 'dtlmenu/',
    notes: "[Teppan & wine · near Kyoto Station] A Japanese-style room full of wine bottles, popular for group dinners: creative teppan plates and around 13 all-you-can-drink wines ordered by number, with private kotatsu rooms. Courses with drinks ¥6,600–7,700; ¥480 appetizer à la carte. Open daily from 16:00.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Per Tabelog: a creative teppan restaurant and wine bar 5 minutes from Kyoto Station.',
      philosophy: null, specialty: 'Teppan dishes; wine all-you-can-drink.',
      anecdotes: [
        { text: 'An August 2026 banquet host found the drinks so slow to come that the toast was delayed, and the call button went unanswered — "not suitable for banquets".', source: R + 'B534445821/' },
        { text: 'A September 2026 regular who brings mostly female groups praised ordering wine by number and fast glass changes.', source: R + 'B466375357/' },
        { text: 'An October 2026 company party found it quiet and free of tourist crowds, but went for ramen afterwards as the food was limited.', source: R + 'B538109138/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): Wine蔵しおり、居酒屋・鉄板焼き・ダイニングバー、下京区七条通新町東入ル西境町158、JR京都駅から徒歩5分、16:00〜23:00、12月31日・1月1日休み、先付480円 (コース時は除く)、席のみ予約はワンドリンク・ワンオーダー、最長3時間、飲み放題3,200円、コース8品6,600円・9品7,700円、42席 (カウンター、個室テーブル、掘りごたつ個室、30名の大広間)、禁煙、カード・電子マネー・PayPay 可。口コミ (2026年7〜11月、英語): ワイン13種の飲み放題 (番号で注文)、鉄板のいか、なすとズッキーニのチーズ焼き、トマトソースの餃子、牛すじのオムレツ、ピザ、パスタ、ホタテフライ、うずらとミニトマトのピンチョス、アリゴ、宴会には向かないという声、店員の声が大きいという声。',
      confidence: 'medium', sources: [TB, R + 'B466375357/', R + 'B529243232/', R + 'B533407155/', R + 'B534445821/', R + 'B534583356/', R + 'B536320671/', R + 'B536782177/', R + 'B537781694/', R + 'B538109138/', R + 'B538674322/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order drinks by number; private rooms.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区七条通新町東入ル西境町158',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (34.989362, 135.757901); cross-checked: GSI 京都府京都市下京区西境町158番地 (lot) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'Prices from Tabelog\'s shop text.', last_checked: TODAY, items: [
      it('', '', 'Course, 8 dishes with all-you-can-drink', '¥6,600', 'Courses', 'ask', 'no', 'Tabelog.', 'course8'),
      it('', '', 'Unlimited all-you-can-drink (excl. bottles)', '¥3,200', 'Drinks', 'ask', 'ask', 'Tabelog.', 'nomihodai'),
      it('先付', '', 'Appetizer charge (not with courses)', '¥480', 'Charges', 'ask', 'ask', 'Tabelog.', 'sakizuke'),
    ] }, {
    cuisine: 'ワインと創作鉄板料理。飲み放題のワインは泡から赤まで約13種で番号で注文 (2026年の口コミ): 鉄板のいか、なすとズッキーニのチーズ焼き、トマトソースの餃子、牛すじのせオムレツ、ピザ、パスタ、ホタテフライ、うずら卵とミニトマトのピンチョス、チーズのアリゴ、燻製ナッツ。飲み放題付き8〜9品のコース6,600〜7,700円 (食べログ、2026年の口コミ)',
    neighborhood: '京都駅近くの七条通',
    gf_detail: '要確認。鉄板料理、トマトソースの餃子、ピザ、パスタと、いかや野菜の鉄板焼き (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚介、牛すじ、チーズの料理 (2026年の口コミ)。',
    notes: '[鉄板とワイン・京都駅近く] ワインボトルの並ぶ和の空間で、宴会に人気。創作の鉄板料理と番号で頼む約13種の飲み放題ワイン、掘りごたつの個室も。飲み放題付きコース6,600〜7,700円、単品は先付480円。毎日16時から。',
  });
}

save();
