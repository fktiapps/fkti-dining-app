// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo clusters), circle `ningyocho` — lane osw11, batch 22.
//   + 笹新 Sasa Shin (1970 izakaya of a sake merchant, reopened July 2026 after three years; negima and sashimi)
//   + 六文そば 人形町店 Rokumon Soba Ningyocho (standing soba from 6:30, bowls from ¥290)
//   + らーめん 佐々舟 Ramen Sasafune (couple-run wonton ramen, shio/shoyu/miso)
//   + もとじま Motojima (extruded ju-wari soba at lunch, Toyosu fish and sake at night)
//   Picked from `node scripts/sweep/queue.mjs tokyo-gaps next core 8 ningyocho` (main repo, 2026-11-02): the first four,
//   226, 226, 228 and 229 m from the centre.
//   Dedupe. None is in data/tokyo.json by name or address (2-20-3, 1-10-5, 2-22-6, 3-1-5); nearest records 11.5 m+ away.
//   Chain check. Rokumon Soba: web sources list five Tokyo shops (Nakanobu, Sudacho, Ningyocho, Nippori, Kanasugibashi)
//   described as "not a chain but independent shops with the same roots" — the same noren-wake case as Ikoma-ken, now
//   with Greg; none in data; drafted and flagged. Sasa Shin is run by Shinkawa-ya Sasaki Sake Shop (founded 1915), a
//   single izakaya. Others: single shops.
//   Ramen block left off for Sasafune: reviews do not source all six dimensions (brief LESSONS).
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, save } = openCitySweep('tokyo-gaps', TODAY, 'osw11-22');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 笹新
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13018155/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '22:30']);
  put({
    id: 'tokyo_sasa_shin_ningyocho', name: '笹新 (Sasa Shin)', category: 'OMNI',
    lat: 35.68572, lng: 139.784595, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The signature negima and simmered fish are cooked in soy, and there is tempura and satsuma-age (2026 reviews); nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood izakaya; dishes are simmered in dashi and soy.',
    hours_raw: 'Mon–Sat 17:00–22:30 (last order 22:00); closed Sundays and holidays (Tabelog). No reservations; the counter fills within about 20–30 minutes of opening, and it is easier after 19:00 (August–September 2026). Cash only — no cards, e-money or QR (Tabelog). No appetiser charge (Tabelog). 18 seats, counter and shared tables (Tabelog; October 2026). Smoking allowed (Tabelog). Founded in 1970; closed from summer 2023 after the chef was injured, and reopened in July 2026 (October 2026 review).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Nihonbashi-Ningyocho 2-20-3, on Amazake Yokocho, in a building dating from the Taisho era (August 2026) — 2 min from Ningyocho Stn exit A1, 3 min from Suitengumae Stn exit 7',
    cuisine: 'Classic Showa izakaya of fish from Toyosu and sake (2026 reviews) · the signature negima — thick tuna simmered with green onion in soy — ordered by almost everyone; tuna with mitsuba; negitoro (August–October 2026) · sashimi platters and single-fish sashimi: horse mackerel, sardine, bonito, kampachi (2026) · simmered dishes: kinmedai, sardines, white clam and whelk; miso-simmered mackerel (2026) · grilled ayu with roe, grilled anago with wasabi, grilled squid tentacles, grilled sardines (2026) · potato salad, which sells out; dashimaki tamago; satsuma-age; kuruma-ebi tempura; nanban-zuke (2026) · bottled beer, sours, shochu, sake warmed in a water bath (2026)',
    website: TB, gmaps: gm('笹新 人形町'), menu_url: null,
    notes: "[Izakaya · Ningyocho, a 1970 fish izakaya that came back] A Showa-era izakaya on Amazake Yokocho, opened in 1970 by the sake merchant Shinkawa-ya Sasaki (founded 1915), closed in summer 2023 when the chef was injured, and reopened in July 2026 to delighted regulars (October 2026). Little has changed: a counter and shared tables in a Taisho-era building, Toyosu fish, and the signature negima — thick tuna simmered with green onion — that nearly every table orders, alongside simmered whelk, grilled ayu, mackerel in miso and a potato salad that sells out. Sake is warmed in a water bath. Prices are low (three men drank and ate for under ¥5,000 each, August 2026), and one diner found portions a little smaller than before. No reservations; it fills within half an hour of the 17:00 opening. Cash only; smoking allowed.",
    chef_bio: { chef_name: null, roles: ['Run by Shinkawa-ya Sasaki Sake Shop, founded 1915 (October 2026 review)'], origin: null,
      background: 'Per an October 2026 review: established 1970; closed since summer 2023 because of an injury to the chef, and reopened in July 2026; operated by the long-established Shinkawa-ya Sasaki Sake Shop (founded 1915). The building dates from the Taisho era (August 2026 review).',
      philosophy: null, specialty: 'Negima (tuna simmered with green onion).',
      anecdotes: [
        { text: '"After being closed since the summer of 2023 due to an injury to the chef, it finally reopened in July this year." — October 2026.', source: R + 'B423087927/' },
        { text: '"Signature negima... As expected of a specialty, almost everyone ordered this." — September 2026.', source: R + 'B7440155/' },
        { text: '"The dishes seem a bit smaller now, but that\'s understandable in today\'s world." — September 2026.', source: R + 'B390102182/' },
      ],
      japanese_sources_summary: '食べログ: 笹新、居酒屋、海鮮、日本料理、日本橋人形町2-20-3、人形町駅A1出口から徒歩2分、月〜土17:00〜22:30 (L.O.22:00)、日祝休み、予約不可、カード・電子マネー・QR不可、お通し代なし、18席、喫煙可、日本酒・焼酎、魚にこだわり。口コミ(2026年8月〜10月): 1970年創業、Shinkawa-ya Sasaki 酒店 (1915年創業) が営む、料理人のけがで2023年夏から休業し2026年7月に再開、大正時代の建物、名物のねぎま、まぐろの三つ葉和え、刺身、きんめの煮付け、白貝の煮物、鮎の塩焼き、さばの味噌煮、売り切れるポテサラ、湯煎の燗酒、開店30分で満席、量が少し小さくなったという声も、現金のみ。',
      confidence: 'medium', sources: [TB, R + 'B390102182/', R + 'B415849138/', R + 'B423087927/', R + 'B532977020/', R + 'B534353685/', R + 'B536572296/', R + 'B536655079/', R + 'B537089674/', R + 'B537603252/', R + 'B7440155/'] },
    cultural_comfort: { level: 'japanese', note: 'No reservations; come at 17:00 or after 19:00; cash only; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋人形町2-20-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Reopened July 2026 after a three-year closure; reviews August–October 2026.' },
    pin_source: `Tabelog ${TB} (35.685720, 139.784595); cross-checked: GSI 東京都中央区日本橋人形町二丁目20番3号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534353685/'],
    price_note: 'No menu prices published; three diners paid under ¥5,000 each with drinks (August 2026).', last_checked: TODAY, items: [
      it('', '', 'Negima (tuna simmered with green onion)', 'not listed', 'Signature', 'no', 'no', '2026 reviews.', 'negima'),
      it('', '', 'Assorted sashimi', 'not listed', 'Sashimi', 'ask', 'no', 'August 2026.', 'sashimi'),
    ] }, {
    cuisine: 'Toyosu の魚と日本酒の昭和の居酒屋 (2026年の口コミ)・ほとんどの客が頼む名物のねぎま、厚切りのまぐろとねぎの醤油煮、まぐろの三つ葉和え、ねぎとろ (2026年8月〜10月)・刺身の盛り合わせと鯵、鰯、鰹、かんぱちの刺身 (2026年)・煮物: きんめ、鰯、白貝、つぶ貝、さばの味噌煮 (2026年)・子持ち鮎の塩焼き、穴子のわさび焼き、げそ焼き、鰯の塩焼き (2026年)・売り切れることもあるポテトサラダ、だし巻き玉子、さつま揚げ、車海老の天ぷら、南蛮漬け (2026年)・瓶ビール、サワー、焼酎、湯煎の燗酒 (2026年)',
    neighborhood: '日本橋人形町2-20-3、Amazake Yokocho、大正時代の建物 (2026年8月)。人形町駅A1出口から徒歩2分、水天宮前駅7番出口から徒歩3分',
    gf_detail: '要確認。名物のねぎまや煮魚は醤油で煮て、天ぷらやさつま揚げもある (2026年の口コミ)。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではない: 魚の居酒屋で、出汁と醤油で煮る料理。',
    notes: '[居酒屋・人形町、戻ってきた1970年の魚の居酒屋] Amazake Yokocho にある昭和の居酒屋で、1915年創業の酒屋、Shinkawa-ya Sasaki 酒店が1970年に開いた。料理人のけがで2023年夏に休業し、2026年7月に再開して常連を喜ばせた (2026年10月)。大正時代の建物のカウンターと相席のテーブル、Toyosu の魚、ほとんどの客が頼む名物のねぎま (厚切りのまぐろとねぎの煮物) はそのまま。つぶ貝の煮物、鮎の塩焼き、さばの味噌煮、売り切れるポテトサラダも。燗酒は湯煎で。値段は安く (2026年8月、男性3人がひとり5,000円以下)、量が以前より少し小さいという声も。予約不可で、17時の開店から30分で埋まる。現金のみ、喫煙可。',
  });
}

// ================================================================ 六文そば 人形町店
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13045837/'; const R = TB + 'dtlrvwlst/';
  const H = day(['06:30', '15:00']);
  put({
    id: 'tokyo_rokumon_soba_ningyocho', name: '六文そば 人形町店 (Rokumon Soba Ningyocho)', category: 'OMNI',
    lat: 35.684304, lng: 139.782795, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat-blend soba and udon in a soy-based broth with fried tempura toppings.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the broth is bonito-based (October 2026).',
    hours_raw: 'Mon–Fri 06:30–15:00; closed Sat, Sun and holidays (Tabelog). Cash only — pay as you order and collect change at the counter (April 2026; Tabelog). Standing counter with 5 seats (Tabelog). Non-smoking. Queues at lunch, quick turnover (2026 reviews); popular toppings such as kakiage can run out (October 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Nihonbashi-Ningyocho 1-10-5, 富士ビル 1F — 1 min from Ningyocho Stn exit A2, 2 min from Suitengumae Stn exit 8',
    cuisine: 'Standing soba (tachigui) with tempura toppings in a dark, sweet bonito broth; soba or udon (2026 reviews) · squid tempura soba ¥350; squid-tentacle soba ¥330; sausage (fish sausage) soba ¥290; burdock and onion tempura soba ¥360; croquette and kakiage soba ¥450; large squid legs and burdock ¥480; squid tempura topping ¥150 each (October 2026) · kakiage soba with raw egg and an inari ¥410 (April 2026) · eggplant tempura; kake soba',
    website: TB, gmaps: gm('六文そば 人形町'), menu_url: null,
    notes: "[Soba · Ningyocho, a standing soba bar from 6:30 a.m.] One of a handful of Tokyo standing-soba shops sharing the Rokumon name — independent shops with the same roots, not a chain — open on weekday mornings from 6:30. Bowls start under ¥300: soba or udon in a sweet, dark bonito broth, topped with tempura such as the beloved squid legs, burdock, croquette or kakiage. A squid tempura soba is ¥350 (October 2026). Regulars count their visits in dozens — one has eaten a hundred bowls — and queues at lunch move fast at the standing counter. The noodles are soft rather than firm, and some toppings run out. Cash only; pay as you order.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Web sources list five Tokyo Rokumon Soba shops (Nakanobu, Sudacho, Ningyocho, Nippori, Kanasugibashi) and describe them as "independent shops with the same roots", not a chain. An October 2026 diner thanks "the grandma" serving.',
      philosophy: null, specialty: 'Squid-leg tempura soba.',
      anecdotes: [
        { text: '"I learned for the first time that the sausage soba costs JPY 290! … This is my 101st bowl." — October 2026.', source: R + 'B420718418/' },
        { text: '"Currently, each piece of squid tempura is JPY 150; I believe it used to be JPY 90." — October 2026.', source: R + 'B489368510/' },
        { text: '"The soba was soft and lacked firmness." — October 2026.', source: R + 'B538491415/' },
      ],
      japanese_sources_summary: '食べログ: 六文そば 人形町店、そば、うどん、立ち食いそば、日本橋人形町1-10-5 富士ビル 1F、人形町駅A2出口から徒歩1分、月〜金6:30〜15:00、土日祝休み、予約不可、カード・電子マネー・QR不可、立ち食いカウンター (5席)、禁煙。口コミ(2026年1月〜10月): 朝から行列、回転が早い、いか天そば350円、げそそば330円、ソーセージそば290円、ごぼう玉ねぎ天そば360円、コロッケとかき揚げのそば450円、いか天は1個150円、甘辛い鰹のつゆ、そばはやわらかめ、かき揚げが売り切れることも、現金のみ。',
      confidence: 'medium', sources: [TB, R + 'B420718418/', R + 'B489368510/', R + 'B506383791/', R + 'B507099749/', R + 'B525428101/', R + 'B533030944/', R + 'B537735737/', R + 'B537893953/', R + 'B538143734/', R + 'B538491415/'] },
    cultural_comfort: { level: 'japanese', note: 'Order and pay in cash at the counter; standing; quick turnover.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋人形町1-10-5 富士ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews to October 2026.' },
    pin_source: `Tabelog ${TB} (35.684304, 139.782795); cross-checked: GSI 東京都中央区日本橋人形町一丁目10番5号 (go) 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B420718418/', R + 'B525428101/', R + 'B538491415/', R + 'B506383791/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Squid tempura soba', '¥350', 'Soba', 'no', 'no', 'October 2026.', 'ikaten'),
      it('', '', 'Squid-tentacle soba', '¥330', 'Soba', 'no', 'no', 'October 2026.', 'geso'),
      it('', '', 'Fish-sausage soba', '¥290', 'Soba', 'no', 'no', 'October 2026.', 'sausage'),
      it('', '', 'Croquette and kakiage soba', '¥450', 'Soba', 'no', 'no', 'October 2026.', 'croquette'),
    ] }, {
    cuisine: '天ぷらをのせる立ち食いそば、甘辛く濃い鰹のつゆ、そばかうどん (2026年の口コミ)・いか天そば350円、げそそば330円、魚肉ソーセージのそば290円、ごぼうと玉ねぎの天ぷらそば360円、コロッケとかき揚げのそば450円、げそとごぼうの大盛り480円、いか天は1個150円 (2026年10月)・かき揚げそばと生卵といなりで410円 (2026年4月)・茄子天、かけそば',
    neighborhood: '日本橋人形町1-10-5 富士ビル 1F。人形町駅A2出口から徒歩1分、水天宮前駅8番出口から徒歩2分',
    gf_detail: 'グルテンフリーではない: 小麦入りのそばとうどん、醤油のつゆ、揚げた天ぷら。',
    vegan_detail: 'ヴィーガンではない: つゆは鰹のだし (2026年10月)。',
    notes: '[そば・人形町、朝6時半からの立ち食いそば] 六文そばの名を持つ東京の数軒の立ち食いそばのひとつで、チェーンではなく同じルーツの独立した店。平日の朝6時半から開く。一杯300円以下からで、甘辛く濃い鰹のつゆのそばかうどんに、人気のげそ天、ごぼう天、コロッケ、かき揚げなどをのせる。いか天そばは350円 (2026年10月)。何十回も通う常連が多く、100杯食べた人も。立ち食いのカウンターなので昼の行列も早く進む。そばはコシより柔らかめで、売り切れるトッピングも。現金のみ、注文と同時に払う。',
  });
}

// ================================================================ らーめん 佐々舟
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13035293/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://sasafune-ningyocho.com/';
  const WK = day(['11:00', '14:00'], ['17:30', '22:00']); const SAT = day(['11:00', '14:00']);
  put({
    id: 'tokyo_ramen_sasafune_ningyocho', name: 'らーめん 佐々舟 (Ramen Sasafune)', category: 'OMNI',
    lat: 35.686577, lng: 139.784688, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles and wontons; gyoza and shumai alongside.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat-based broths (chicken-like or pork-bone, per 2026 reviews) with chashu.',
    hours_raw: 'Mon–Fri 11:00–14:00 and 17:30–22:00; Sat 11:00–14:00; closed Sunday, and occasionally on holidays and other days (Tabelog). Reservations accepted (Tabelog). Cash only — no cards, e-money or QR (Tabelog). 15 seats at an L-shaped counter (Tabelog; April 2026). Smoking allowed (Tabelog). English menu; takeaway (Tabelog). Tabelog gives the opening date as 31 October 2020, though one reviewer first visited in 2013 (April 2026 review).',
    hours: { 0: WK, 1: WK, 2: WK, 3: WK, 4: WK, 5: SAT }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Nihonbashi-Ningyocho 2-22-6, 佐々舟ビル 1F, in an alley off Amazake Yokocho near the Meijiza theatre — 2 min from Ningyocho Stn exit A1',
    cuisine: 'Gentle old-style ramen in shio, shoyu or miso, with thin curly noodles and homemade wontons (2026 reviews) · menu (April 2026): ramen ¥850; spicy ramen ¥1,000; chashu ramen ¥1,150; spicy chashu ramen ¥1,250; dandan tsukemen ¥1,000; special wonton ¥900; special wonton ramen ¥1,100; chashu rice bowl ¥900 (mini ¥800); homemade fried gyoza ¥550; homemade shumai ¥550 · miso chashu ¥1,200 (August 2026) · a small bowl of rice with umeboshi comes free with ramen (April, June 2026) · evening sake, shochu and snacks (September 2026)',
    website: SITE, gmaps: gm('らーめん 佐々舟 人形町'), menu_url: null,
    notes: "[Ramen · Ningyocho, an old couple's gentle wonton ramen] A small L-shaped ramen counter in an alley off Amazake Yokocho, run by a warm elderly couple, the master cooking and the wife serving (2026 reviews). The ramen is old-fashioned and gentle — a mild broth (one diner tasted traditional chicken stock, another a soy base with pork bone) in shio, shoyu or miso, thin curly noodles, and a special wonton bowl crowded with silky homemade wontons, chashu, half-boiled egg, menma and naruto (¥1,100). A small bowl of rice with umeboshi comes free. At night it doubles as a place for sake and snacks; a signed photo of the actor Tomio Umezawa hangs on the wall, a nod to the Meijiza theatre nearby (August 2026). One April 2026 diner found the portion small. Cash only; smoking allowed.",
    chef_bio: { chef_name: null, roles: ['Run by an elderly couple: the master cooks and the wife serves (2026 reviews)'], origin: null,
      background: 'Per reviews: run by an elderly couple (August 2026; "the owner and … wife", May 2026; "an elderly chef and … wife", June 2026). A signed photo of Tomio Umezawa is displayed, perhaps because of the nearby Meijiza theatre (August 2026). Tabelog gives an opening date of 31 October 2020; a reviewer first visited in 2013.',
      philosophy: null, specialty: 'Special wonton ramen.',
      anecdotes: [
        { text: '"It’s been a while! This place is run by an elderly couple, and it’s great to see that they both look healthy." — August 2026.', source: R + 'B502491171/' },
        { text: '"The wontons had a thin, silky skin that felt pleasant in the mouth, and the small, firm filling provided a great contrast in texture and flavor." — June 2026.', source: R + 'B530243754/' },
        { text: '"To be honest, the portion size was a bit lacking." — April 2026.', source: R + 'B525546260/' },
      ],
      japanese_sources_summary: '食べログ: らーめん 佐々舟、ラーメン、日本橋人形町2-22-6 佐々舟ビル 1F、人形町駅A1出口から徒歩2分、月〜金11:00〜14:00、17:30〜22:00、土11:00〜14:00、日曜休み、祝日などは不定休、予約可、カード・電子マネー・QR不可、15席、喫煙可、英語メニュー、テイクアウト、ホームページ sasafune-ningyocho.com、2020年10月31日オープン。口コミ(2025年2月〜2026年10月): 年配の夫婦が営む、塩・醤油・味噌、細い縮れ麺、自家製ワンタン、らーめん850円、特製ワンタンメン1,100円、味噌チャーシュー1,200円、ラーメンに梅干しのご飯が無料、夜は酒とつまみも、Tomio Umezawa さんのサイン、量が少なめという声も。',
      confidence: 'medium', sources: [TB, SITE, R + 'B502491171/', R + 'B510492555/', R + 'B525546260/', R + 'B525791915/', R + 'B526190533/', R + 'B529076047/', R + 'B530243754/', R + 'B533247789/', R + 'B534958512/', R + 'B537455004/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); counter only; cash.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '東京都中央区日本橋人形町2-22-6 佐々舟ビル １Ｆ',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews to October 2026.' },
    pin_source: `Tabelog ${TB} (35.686577, 139.784688); cross-checked: GSI 東京都中央区日本橋人形町二丁目22番6号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B529076047/', R + 'B502491171/'],
    price_note: 'Menu prices from an April 2026 review; miso chashu from August 2026.', last_checked: TODAY, items: [
      it('', '', 'Ramen', '¥850', 'Ramen', 'no', 'no', 'April 2026.', 'ramen'),
      it('', '', 'Special wonton ramen', '¥1,100', 'Ramen', 'no', 'no', 'April 2026.', 'wantanmen'),
      it('', '', 'Chashu ramen', '¥1,150', 'Ramen', 'no', 'no', 'April 2026.', 'chashumen'),
      it('', '', 'Dandan tsukemen', '¥1,000', 'Ramen', 'no', 'no', 'April 2026.', 'dandan'),
      it('', '', 'Homemade fried gyoza', '¥550', 'Sides', 'no', 'no', 'April 2026.', 'gyoza'),
    ] }, {
    cuisine: '塩・醤油・味噌のやさしい昔ながらのラーメン、細い縮れ麺と自家製ワンタン (2026年の口コミ)・メニュー (2026年4月): らーめん850円、辛いらーめん1,000円、チャーシューめん1,150円、辛いチャーシューめん1,250円、担々つけ麺1,000円、特製ワンタン900円、特製ワンタンメン1,100円、チャーシュー丼900円 (ミニ800円)、自家製焼き餃子550円、自家製焼売550円・味噌チャーシュー1,200円 (2026年8月)・ラーメンには梅干しのご飯が無料で付く (2026年4月、6月)・夜は日本酒、焼酎、つまみも (2026年9月)',
    neighborhood: '日本橋人形町2-22-6 佐々舟ビル 1F、Amazake Yokocho から入った路地、Meijizaの近く。人形町駅A1出口から徒歩2分',
    gf_detail: 'グルテンフリーではない: 小麦の麺とワンタン。餃子と焼売も。',
    vegan_detail: 'ヴィーガンではない: 鶏と豚のスープにチャーシュー。',
    notes: '[ラーメン・人形町、年配の夫婦のやさしいワンタンメン] Amazake Yokocho から入った路地のL字のカウンターの小さなラーメン店で、温かい年配の夫婦が営み、ご主人が作り奥さんが接客する (2026年の口コミ)。ラーメンは昔ながらのやさしい味で、塩・醤油・味噌のやさしいスープ (鶏がらのようだという声と、豚骨の醤油ベースという声がある) に細い縮れ麺。特製ワンタンメンは、つるりとした自家製ワンタン、チャーシュー、半熟卵、メンマ、なるとがたっぷり (1,100円)。梅干しの小さなご飯が無料で付く。夜は酒とつまみの店にも。近くのMeijizaゆかりか、Tomio Umezawa さんのサインが壁に (2026年8月)。2026年4月には量が少なめという声も。現金のみ、喫煙可。',
  });
}

// ================================================================ もとじま
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13090303/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '13:30'], ['17:00', '22:00']);
  put({
    id: 'tokyo_motojima_ningyocho', name: 'もとじま (Motojima)', category: 'OMNI',
    lat: 35.686006, lng: 139.779672, cuisine_type: 'udon_soba',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The soba is ju-wari (100% buckwheat), but the dipping sauce is soy-based and tempura and curry are on the menu (2026 reviews). Nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the dipping sauce has a strong bonito flavour (August 2026).',
    hours_raw: 'Mon–Fri 11:30–13:30 and 17:00–22:00; closed Sat, Sun and holidays, with weekend banquets on request (Tabelog). Reservations accepted (Tabelog). Cards and PayPay; no e-money; no service charge (Tabelog). 16 seats at the counter and tables; private hire up to 20 (Tabelog). Children welcome (Tabelog). Opened 24 September 2008 (Tabelog). Queues at weekday lunch by noon (2025–26 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nihonbashi-Ningyocho 3-1-5, 半沢ビル 1F — about 250 m from Ningyocho Stn',
    cuisine: 'Ju-wari (100% buckwheat) soba from domestic stone-ground flour, extruded into round, very firm noodles, with local sake chosen by a sake master (Tabelog; 2025–26 reviews) · lunch: mori soba ¥700, large +¥100 (May 2026); tempura soba with two shrimp, white fish and quail eggs ¥1,200 (February 2026); curry nanban ¥1,000, large +¥200 (August 2026); tororo, ume-oroshi and wild-vegetable soba (2026); mini curry or mini tsuke-don ¥300 (May, September 2026) · evening (Tabelog menu, September 2026): Toyosu fish — saba sushi ¥780, tuna ¥780, kinmedai ¥880, octopus ¥780, assorted ¥1,280; daily dishes such as duck and mushrooms in soba sauce, Tochigi-style fried tofu, simmered eggs; finish with soba',
    website: TB, gmaps: gm('もとじま 人形町'), menu_url: TB + 'dtlmenu/',
    notes: "[Soba · Ningyocho, firm ju-wari soba by day, fish and sake by night] A sixteen-seat soba shop near Ningyocho, open since 2008, serving 100% buckwheat soba at lunch-counter prices — mori soba ¥700 — so popular with office workers that there is a queue by noon. The noodles are extruded rather than cut, round in cross-section and remarkably firm for ju-wari, with a strong bonito dipping sauce; tempura, curry nanban and ume-oroshi soba round out the lunch. In the evening it becomes a quiet place to drink sake chosen by a sake master, with Toyosu fish, small dishes and soba to finish. Some find the lunchtime pace hurried, with no oshibori (November 2025). Weekdays only.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened 24 September 2008 (Tabelog). Per the Tabelog shop text: local sake carefully selected by a sake master, and domestic stone-ground 100% soba. Reviewers note the soba appears to be extruded by machine, giving a round cross-section (May, August 2026).',
      philosophy: null, specialty: 'Ju-wari soba.',
      anecdotes: [
        { text: '"When people think of Ju-wari soba, they often imagine it being \'fragile\' or \'soft,\' but here, the soba has an incredibly strong chewiness" — August 2026.', source: R + 'B533621251/' },
        { text: '"It’s not a place where you can relax for long; there’s a pressure to eat quickly and leave." — November 2025.', source: R + 'B446663410/' },
        { text: '"The soba was served with a round cross-section, suggesting it was extruded. The broth had a strong bonito flavor." — August 2026, evening.', source: R + 'B8066236/' },
      ],
      japanese_sources_summary: '食べログ: もとじま、そば、日本料理、日本橋人形町3-1-5 半沢ビル 1F、人形町駅から約250m、月〜金11:30〜13:30、17:00〜22:00、土日祝休み、週末は宴会の相談可、予約可、カード・PayPay可、電子マネー不可、サービス料なし、16席、貸切20名まで、子ども可、2008年9月24日オープン、利き酒師が選ぶ地酒と国産の石臼挽き十割そば。口コミ(2025年7月〜2026年9月): もりそば700円、天ぷらそば1,200円、カレー南蛮1,000円、とろろそば、梅おろしそば、山菜そば、ミニカレー300円、押し出しの丸い十割そばで強いコシ、鰹の強いつゆ、昼は正午前に行列、夜はToyosu の魚と日本酒、鴨ときのこのそばつゆ炒め、慌ただしい・おしぼりがないという声も。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', R + 'B446663410/', R + 'B500058651/', R + 'B516741088/', R + 'B521999890/', R + 'B528531197/', R + 'B529061185/', R + 'B531265869/', R + 'B533621251/', R + 'B535513339/', R + 'B8066236/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Quick lunch counter; quieter for sake in the evening.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋人形町3-1-5 半沢ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing (menu updated 2026-09-05); reviews to September 2026.' },
    pin_source: `Tabelog ${TB} (35.686006, 139.779672); cross-checked: GSI 東京都中央区日本橋人形町三丁目1番5号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B500058651/', R + 'B521999890/', TB + 'dtlmenu/'],
    price_note: 'Lunch from February–August 2026 reviews; evening fish from the Tabelog menu (2026-09-05).', last_checked: TODAY, items: [
      it('', '', 'Mori soba (ju-wari)', '¥700', 'Lunch', 'ask', 'no', 'May 2026; large +¥100.', 'mori'),
      it('', '', 'Tempura soba', '¥1,200', 'Lunch', 'no', 'no', 'February 2026.', 'tenpura'),
      it('', '', 'Curry nanban soba', '¥1,000', 'Lunch', 'no', 'no', 'August 2026.', 'curry_nanban'),
      it('', '', 'Assorted fresh fish', '¥1,280', 'Evening', 'ask', 'no', 'Tabelog menu, September 2026.', 'sashimi'),
    ] }, {
    cuisine: '国産の石臼挽きの十割そばを押し出しで丸くコシの強い麺にし、利き酒師が選ぶ地酒と (食べログ、2025〜26年の口コミ)・昼: もりそば700円、大盛り+100円 (2026年5月)、海老2本、白身魚、うずらの卵の天ぷらそば1,200円 (2026年2月)、カレー南蛮1,000円、大盛り+200円 (2026年8月)、とろろそば、梅おろしそば、山菜そば (2026年)、ミニカレーかミニ漬け丼300円 (2026年5月、9月)・夜 (食べログのメニュー、2026年9月): Toyosu の魚、さば寿司780円、まぐろ780円、金目鯛880円、水だこ780円、盛り合わせ1,280円、鴨ときのこのそばつゆ炒め、Tochigi 風の揚げ、煮卵などの日替わり、締めにそば',
    neighborhood: '日本橋人形町3-1-5 半沢ビル 1F。人形町駅から約250m',
    gf_detail: '要確認。そばは十割だが、つゆは醤油ベースで、天ぷらやカレーもある (2026年の口コミ)。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではない: つゆは鰹の味が強い (2026年8月)。',
    notes: '[そば・人形町、昼はコシの強い十割そば、夜は魚と日本酒] 人形町近くにある2008年からの16席のそば屋で、十割そばを昼のカウンター価格で出す。もりそば700円。会社員に人気で正午には行列。麺は切らずに押し出すので断面が丸く、十割とは思えないほどコシが強く、つゆは鰹が濃い。天ぷら、カレー南蛮、梅おろしのそばも。夜は利き酒師が選ぶ日本酒を、Toyosu の魚、小皿、締めのそばとともに静かに飲める店になる。昼は慌ただしく、おしぼりもないという声も (2025年11月)。平日のみ。',
  });
}

save();
