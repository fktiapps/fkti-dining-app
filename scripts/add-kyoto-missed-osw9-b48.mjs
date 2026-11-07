// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 48.
// The notable lane is empty (cleared in b47); the core lane is not yet exhausted, so all four come from core,
// in queue order:
//   + タコとケンタロー Taco to Kentaro (takoyaki bar of many named flavours by Shogoin; since 2010)              [core]
//   + 葉月 Hazuki (Korean home cooking and samgyeopsal south of Hachijo-Kawaramachi)                           [core]
//   - 夢現家 京都八条口店 — probable 町田商店 (Gift Holdings) produce shop: FLAGGED
//   + すし昌 Sushi Masa (sushi and seasonal fish in Kintetsu Meitengai Miyakomichi at Kyoto Station)          [core]
//   + SCHOLE (custom-pizza American diner by the Kyoto Aquarium; sister of Apitt Burger)                       [core]
//   Same-name counts first: タコとケンタロー 0 (an earlier Niomon-dori shop moved, and a Demachiyanagi second
//   shop is mentioned — at most 2); 葉月 0 in Kyoto (小料理 葉月 elsewhere is unrelated); すし昌 0 — run by
//   株式会社AYT (job listing), one shop found; SCHOLE 0 — a sister of Apitt Burger (3), Craft Dining Apitt and
//   Rice Overalls per an October 2025 review; none of those in data: a local group's sister concept, drafted.
//   None drafted is in data/kyoto.json by name or address.
//   Service charges checked against Tabelog's Japanese original: SCHOLE 「なし」; the other three have no section.
//   Pins: すし昌 — GSI lot 31 (the Kintetsu building) is 221 m away, so loc_precise false.
//   Ruling applied: single-review remarks about other diners left out.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-48');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26040743', 'probable sub-brand of a large parent: a September 2026 review places 夢現家 (iekei ramen, opened 2024) in the 町田商店 chain by its menu, and the 京都八条口店 branch name implies more shops; 町田商店 is Gift Holdings (287 own shops, 614 produce shops). Not confirmed on an official page — FLAGGED');

// ================================================================ タコとケンタロー
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26017085/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '23:00']);
  put({
    id: 'kyoto_taco_to_kentaro', name: 'タコとケンタロー (Taco to Kentaro)', category: 'OMNI',
    lat: 35.020587, lng: 135.782423, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: takoyaki batter is wheat (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: octopus in every takoyaki; octopus rice, salad and soup (2025–26 reviews).',
    hours_raw: 'Daily 11:00–23:00; irregular closures (Tabelog). Bookings taken; private hire up to 20 (Tabelog). No cards or e-money (Tabelog). 10 counter seats; smoking allowed; takeaway (Tabelog). 8 min from the Kumano-jinja-mae bus stop, 16 min from Jingu-Marutamachi Stn; coin parking a minute away (Tabelog; January 2024 and May 2026 reviews).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shogoin, north of Kumano-jinja — 8 min from Kumano-jinja-mae bus stop',
    cuisine: 'Takoyaki in many named flavours, large and made in front of you (2024–26 reviews): plain, Kujo green onion, potato, cheese, tororo, tomato, "Italian", tacos, mentaiko and lotus root, a sour one called "First Love"; octopus salad with sautéed octopus and cheese, octopus rice, octopus soup, chilled tofu, set meals; sake, shochu and wine, bottled Sapporo Lager (Tabelog; 2025–26 reviews)',
    website: null, gmaps: gm('タコとケンタロー'), menu_url: null,
    notes: "[Takoyaki bar · Shogoin] A small octopus-themed counter where the owner makes big takoyaki to order in dozens of oddly named flavours — Kujo green onion, potato, mentaiko and lotus root — with octopus salad, rice and soup, and beer or sake. About ¥1,000–2,000. No cards; smoking allowed.",
    chef_bio: { chef_name: 'Kentaro', roles: ['Owner (given name, per reviews and the shop name)'], origin: null,
      background: 'Opened 17 September 2010 (Tabelog). A May 2026 regular had visited the earlier shop on Niomon-dori, event stalls and a second shop at Demachiyanagi before this Yoshida location. The shop runs a recurring music event, "Octopus Night" (vol. 6 on 10 January 2026, Kyoto City tourism site).',
      philosophy: 'A passionate octopus lover\'s menu of original takoyaki (March 2026 review).',
      specialty: 'Kujo green onion takoyaki.',
      anecdotes: [
        { text: 'A May 2026 regular of the old Niomon-dori shop sat at the counter with chilled tofu and two bottles of beer, watching eight Kujo green-onion takoyaki being made.', source: R + 'B528035877/' },
        { text: 'A May 2026 goshuin pilgrim stopped for lunch and had takoyaki, octopus rice, octopus salad and octopus soup.', source: R + 'B529452569/' },
        { text: 'In March 2025 a returning visitor started with the octopus salad, then tacos takoyaki and mentaiko-and-lotus-root takoyaki.', source: R + 'B503656870/' },
      ],
      japanese_sources_summary: '食べログ: タコとケンタロー、たこ焼き、左京区聖護院東町1-2 聖護院ハイツ1F、市バス熊野神社前から徒歩8分、神宮丸太町駅から徒歩16分、毎日 11:00〜23:00、不定休、予約可、カード・電子マネー不可、10席、喫煙可、テイクアウト可、貸切20名まで、2010年9月17日オープン。京都観光 Navi: 主催の音楽イベント「オクトパスナイト」vol.6 (2026年1月10日)。口コミ (2024年1月〜2026年5月、英語): 目の前で作る大きなたこ焼き、名前の凝った多くの種類 (Kujo ねぎ、ポテト、チーズ、とろろ、トマト、イタリアン、タコス、明太子とれんこん、酸っぱい「初恋」)、たこのサラダ、たこ飯、たこのスープ、冷奴、定食、瓶ビール、店内はたこの飾り、仁王門通の旧店と出町柳の2号店を経て今の吉田の店。',
      confidence: 'medium', sources: [TB, 'https://ja.kyoto.travel/event/single.php?event_id=13369', R + 'B477850445/', R + 'B478975291/', R + 'B490202902/', R + 'B498443749/', R + 'B503656870/', R + 'B516384272/', R + 'B524003988/', R + 'B528035877/', R + 'B529452569/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Playfully named Japanese menu; counter only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区聖護院東町1-2 聖護院ハイツ1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through May 2026; event in January 2026.' },
    pin_source: `Tabelog ${TB} (35.020587, 135.782423); cross-checked: GSI 京都府京都市左京区聖護院東町1番地 (lot) 36m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B528035877/'],
    price_note: 'No menu or prices read.', last_checked: TODAY, items: [
      it('', '', 'Kujo green-onion takoyaki (8)', '', 'Takoyaki', 'no', 'no', 'May 2026 review.', 'tako_kujo'),
      it('', '', 'Octopus salad', '', 'Sides', 'ask', 'no', 'March 2025 and May 2026 reviews.', 'tako_salad'),
    ] }, {
    cuisine: '目の前で作る大きなたこ焼き、名前の凝った多くの種類 (2024〜26年の口コミ): 定番、Kujo ねぎ、ポテト、チーズ、とろろ、トマト、「イタリアン」、タコス、明太子とれんこん、酸っぱい「初恋」。たこと炒めたチーズのサラダ、たこ飯、たこのスープ、冷奴、定食。日本酒、焼酎、ワイン、瓶ビール (食べログ、2025〜26年の口コミ)',
    neighborhood: '聖護院、熊野神社の北。熊野神社前バス停から徒歩8分',
    gf_detail: 'グルテンフリー不可。たこ焼きの生地は小麦 (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。どのたこ焼きにもたこ。たこ飯、サラダ、スープも (2025〜26年の口コミ)。',
    notes: '[たこ焼きのカウンター・聖護院] たこの飾りの小さなカウンターで、店主が大きなたこ焼きを注文ごとに焼く。Kujo ねぎ、ポテト、明太子とれんこんなど、名前の凝った多くの種類に、たこのサラダやたこ飯、ビールや日本酒。千〜2千円ほど。カード不可。喫煙可。',
  });
}

// ================================================================ 葉月
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26012135/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:30', '14:00'], ['17:00', '23:00']);
  put({
    id: 'kyoto_hazuki_korean_higashikujo', name: '葉月 (Hazuki)', category: 'OMNI',
    lat: 34.982862, lng: 135.764062, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: seafood pancakes, japchae and bibim noodles; soy and gochujang seasonings (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork belly, seafood and meat-broth stews (2025–26 reviews).',
    hours_raw: 'Mon and Wed–Sun 11:30–14:00 and 17:00–23:00 (last order 22:30); closed Tuesday; hours may change (Tabelog). Bookings taken (Tabelog). No cards or e-money; QR accepted (Tabelog). About 20 seats at tables, with a raised tatami area and a counter used by solo diners; smoking allowed (Tabelog; July 2025, April and July 2026 reviews). Recently renovated (July 2025 review). 100 m south of Hachijo-Kawaramachi on the west side; about 10 min from Kyoto Stn Hachijo exit (Tabelog).',
    hours: { 0: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashikujo, south of Hachijo-Kawaramachi — 10 min from Kyoto Stn',
    cuisine: 'Korean home cooking and yakiniku (Tabelog; 2025–26 reviews): samgyeopsal set with perilla leaves, king oyster mushrooms, garlic and three dips ¥1,800 (October 2025); all-you-can-eat samgyeopsal with all-you-can-drink ¥4,500, with unlimited kimchi and lettuce (July 2026); napa kimchi ¥500 and seafood jeon ¥1,150 (September 2025); tteokbokki, japchae, pajeon, assorted namul, chige, stone-grilled bibimbap, bibim noodles; shabu-shabu also offered (September 2026); generous portions',
    website: null, gmaps: gm('葉月 韓国料理 東九条'), menu_url: null,
    notes: "[Korean home cooking · Higashikujo] A bright, recently renovated Korean spot south of Kyoto Station known for big portions: thick samgyeopsal sets wrapped in perilla, seafood jeon, tteokbokki and stews, and an all-you-can-eat-and-drink samgyeopsal plan at ¥4,500. Cards not taken (QR yes); closed Tuesday.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Not stated on Tabelog. A July 2025 regular returning after a long gap found it renovated.',
      philosophy: null, specialty: 'Samgyeopsal.',
      anecdotes: [
        { text: 'After visiting the new teamLab in Kyoto in October 2025, two friends had the ¥1,800 samgyeopsal set; the staff brought new chopsticks with a smile each of the three times one dropped them.', source: R + 'B516462936/' },
        { text: 'A September 2025 diner compared the seafood jeon and tteokbokki to food eaten in Seoul.', source: R + 'B514197608/' },
        { text: 'A pair of July 2026 diners sheltering from rain could not finish a shared stone-grilled bibimbap, bibim noodles and miso chige.', source: R + 'B531536702/' },
      ],
      japanese_sources_summary: '食べログ: 葉月、韓国料理・焼肉、南区東九条西岩本町38-1、京都駅八条口から徒歩約10分、八条河原町の100m南 (西側)、月・水〜日 11:30〜14:00・17:00〜23:00 (L.O. 22:30)、火曜休み、予約可、カード・電子マネー不可、QR 可、約20席、座敷、喫煙可。口コミ (2025年4月〜2026年9月、英語): 改装されてきれい、サムギョプサルのセット1,800円 (えごまの葉、エリンギ、にんにく、3種のたれ)、サムギョプサル食べ放題と飲み放題4,500円 (キムチとサンチュも食べ放題)、白菜キムチ500円、海鮮チヂミ1,150円、トッポッキ、チャプチェ、パジョン、ナムルの盛り合わせ、チゲ、石焼ビビンバ、ビビン麺、しゃぶしゃぶも、量が多い、一人でも使えるカウンター。',
      confidence: 'medium', sources: [TB, R + 'B505491457/', R + 'B511268419/', R + 'B514197608/', R + 'B514561972/', R + 'B516462936/', R + 'B525799234/', R + 'B529455534/', R + 'B531451542/', R + 'B531536702/', R + 'B536430444/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Smoking allowed; no cards (QR accepted).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市南区東九条西岩本町38-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (34.982862, 135.764062); cross-checked: GSI 京都府京都市南区東九条西岩本町38番地 (lot) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B516462936/', R + 'B531451542/', R + 'B514197608/'],
    price_note: 'Prices from September 2025–July 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Samgyeopsal set', '¥1,800', 'Grill', 'ask', 'no', 'October 2025 review.', 'samgyeopsal_set'),
      it('', '', 'All-you-can-eat samgyeopsal with all-you-can-drink', '¥4,500', 'Plans', 'ask', 'no', 'July 2026 review.', 'tabehoudai'),
      it('', '', 'Seafood jeon', '¥1,150', 'Dishes', 'no', 'no', 'September 2025 review.', 'kaisen_jeon'),
    ] }, {
    cuisine: '韓国の家庭料理と焼肉 (食べログ、2025〜26年の口コミ): えごまの葉、エリンギ、にんにく、3種のたれのサムギョプサルのセット1,800円 (2025年10月)、サムギョプサル食べ放題と飲み放題4,500円 (キムチとサンチュも食べ放題、2026年7月)、白菜キムチ500円と海鮮チヂミ1,150円 (2025年9月)、トッポッキ、チャプチェ、パジョン、ナムルの盛り合わせ、チゲ、石焼ビビンバ、ビビン麺、しゃぶしゃぶも (2026年9月)。量が多い',
    neighborhood: '東九条、八条河原町の南。京都駅から徒歩10分',
    gf_detail: 'グルテンフリー不可。チヂミ、チャプチェ、ビビン麺、醤油やコチュジャンの味付け (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。豚バラ、魚介、肉のだしのチゲ (2025〜26年の口コミ)。',
    notes: '[韓国の家庭料理・東九条] 京都駅の南の、改装された明るい韓国料理店。量の多さで知られ、えごまの葉で包む厚切りサムギョプサルのセット、海鮮チヂミ、トッポッキ、チゲ、4,500円のサムギョプサル食べ放題と飲み放題。カード不可 (QR 可)。火曜休み。',
  });
}

// ================================================================ すし昌
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26008997/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '22:00']);
  put({
    id: 'kyoto_sushi_masa_miyakomichi', name: 'すし昌 (Sushi Masa)', category: 'OMNI',
    lat: 34.984682, lng: 135.756243, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sushi and sashimi with soy sauce; lunch sets include tempura and fried oysters (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi and seafood restaurant (2025–26 reviews).',
    hours_raw: 'Daily 11:00–22:00 (last order 21:30), following the hours of Kintetsu Meitengai Miyakomichi (Tabelog). Bookings taken (Tabelog). Cards (VISA, JCB, AMEX, Diners); no e-money or QR (Tabelog). 20 counter seats per Tabelog; an undated job listing for the operator, 株式会社AYT, says 32 seats; reviewers describe a sushi counter, tables and a sunken kotatsu table (January 2025). Non-smoking; children welcome; photo menu; takeaway; free Wi-Fi (Tabelog). Inside Kintetsu Meitengai Miyakomichi at the Hachijo side of Kyoto Station, about 1 min from the gates (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kyoto Station Hachijo side — Kintetsu Meitengai Miyakomichi',
    cuisine: 'Sushi and seasonal fish (Tabelog; 2025–26 reviews): lunch sets — sushi set ¥1,200 and recommended set of sushi, tempura and sides ¥1,950 (2025), fried-oyster set ¥1,250 (April 2025), a sashimi, eel and tempura set ¥2,500 (January 2026), eel set ¥1,400 (June 2026), a thick-cut seafood bowl with tuna, chutoro, uni, yellowtail, snapper and sweet shrimp (March 2026); at night an omakase course with Hokkaido uni, tuna and Kyoto vegetables (Tabelog), returning bonito, very large raw oysters, matsutake dobin-mushi, sanma wrapped around matsutake (September 2025–October 2026); sake and shochu a focus (Tabelog)',
    website: null, gmaps: gm('すし昌 京都駅 みやこみち'), menu_url: TB + 'dtlmenu/',
    notes: "[Sushi & seasonal fish · Kyoto Station] A sushi counter in the Miyakomichi arcade, right by the Hachijo gates: quick lunch sets and seafood bowls for about ¥1,200–2,500 before a train, and seasonal dinners — returning bonito, big oysters, matsutake dobin-mushi — with sake for about ¥8,000–15,000. Open daily.",
    chef_bio: { chef_name: null, roles: ['Chefs (unnamed); run by 株式会社AYT (job listing)'], origin: null,
      background: 'Run by 株式会社AYT, per a public job listing that gives the shop as 「株式会社 AYT すし昌」 in Miyakomichi. Tabelog\'s shop text describes seasonal seafood from skilled chefs and an omakase course.',
      philosophy: 'Seasonal seafood and chef\'s-choice sushi right at Kyoto Station (Tabelog).',
      specialty: 'Seafood bowl; seasonal fish.',
      anecdotes: [
        { text: 'With little time before a Shinkansen in March 2026, a returning diner asked for something quick and got a thick-cut seafood bowl that beat expectations.', source: R + 'B444682370/' },
        { text: 'An October 2026 party celebrated a mentor\'s retirement over seasonal dishes, matsutake dobin-mushi and sake, finishing with nigiri.', source: R + 'B537084451/' },
        { text: 'A January 2025 lunch diner found the recommended set ordinary and the staff\'s teamwork in need of work, though the red miso soup was good.', source: R + 'B499782856/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): すし昌、寿司・海鮮・居酒屋、下京区東塩小路釜殿町31-1 近鉄京都駅 1F みやこみち、京都駅の各改札から徒歩約1分、毎日 11:00〜22:00 (L.O. 21:30、近鉄名店街みやこみちの営業時間に準ずる)、予約可、カード可、電子マネー・QR 不可、20席 (カウンター)、禁煙、子ども可、写真メニュー、テイクアウト、Wi-Fi、魚にこだわる、日本酒・焼酎にこだわる、北海道のウニ、本まぐろ、京野菜のおまかせコース。求人 (indeed): 株式会社 AYT すし昌、みやこみち内、32席。口コミ (2025年1月〜2026年10月、英語): 寿司定食1,200円、おすすめ定食1,950円、カキフライ定食1,250円、刺身・鰻・天ぷらの膳2,500円、鰻の定食1,400円、厚切りの海鮮丼、戻り鰹、大きな生牡蠣、松茸の土瓶蒸し、さんまの松茸巻き、カウンター、テーブル、掘りごたつ。',
      confidence: 'medium', sources: [TB, 'https://jp.indeed.com/q-%e6%a0%aa%e5%bc%8f%e4%bc%9a%e7%a4%be-ayt-%e3%81%99%e3%81%97%e6%98%8c-%e6%b1%82%e4%ba%ba.html', R + 'B444682370/', R + 'B483406249/', R + 'B499007006/', R + 'B499782856/', R + 'B504329447/', R + 'B511031125/', R + 'B516350381/', R + 'B522633841/', R + 'B529617826/', R + 'B537084451/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Photo menu; station arcade.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市下京区東塩小路釜殿町31-1 近鉄京都駅 1F みやこみち',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.984682, 135.756243); GSI 京都府京都市下京区東塩小路釜殿町31番地 (lot) is 221 m east — a large station lot — so loc_precise false; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B499007006/', R + 'B504329447/', R + 'B529617826/'],
    price_note: 'Lunch prices from 2025–26 reviews.', last_checked: TODAY, items: [
      it('', '', 'Recommended lunch set (sushi, tempura, sides, soup)', '¥1,950', 'Lunch', 'no', 'no', 'January and April 2025 reviews.', 'osusume_teishoku'),
      it('', '', 'Eel set', '¥1,400', 'Lunch', 'no', 'no', 'June 2026 review.', 'unagi_teishoku'),
    ] }, {
    cuisine: '寿司と季節の魚 (食べログ、2025〜26年の口コミ): 昼は寿司定食1,200円、寿司・天ぷら・小鉢のおすすめ定食1,950円 (2025年)、カキフライ定食1,250円 (2025年4月)、刺身・鰻・天ぷらの膳2,500円 (2026年1月)、鰻の定食1,400円 (2026年6月)、まぐろ・中トロ・ウニ・ぶり・鯛・甘えびの厚切りの海鮮丼 (2026年3月)。夜は北海道のウニ、本まぐろ、京野菜のおまかせコース (食べログ)、戻り鰹、大きな生牡蠣、松茸の土瓶蒸し、さんまの松茸巻き (2025年9月〜2026年10月)。日本酒と焼酎にこだわる (食べログ)',
    neighborhood: '京都駅八条口側。近鉄名店街みやこみち',
    gf_detail: '要確認。醤油で食べる寿司と刺身。昼の定食には天ぷらやカキフライ (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。寿司と魚介の店 (2025〜26年の口コミ)。',
    notes: '[寿司と季節の魚・京都駅] 八条口の改札すぐ、みやこみちの寿司店。電車の前に昼の定食や海鮮丼を1,200〜2,500円ほどで、夜は戻り鰹、大きな牡蠣、松茸の土瓶蒸しなど季節の料理を日本酒と8千〜1万5千円ほどで。無休。',
  });
}

// ================================================================ SCHOLE
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26038973/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:30', '21:00']);
  put({
    id: 'kyoto_schole_umekoji', name: 'SCHOLE (Schole, Umekoji)', category: 'OMNI',
    lat: 34.988625, lng: 135.74898, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat pizza crusts, onion rings and fried chicken (2025–26 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options and custom pizzas, but most dishes have cheese or meat (Tabelog; 2025–26 reviews).',
    hours_raw: 'Daily 11:30–21:00 (last order 20:30); no regular holiday (Tabelog). Bookings taken; private hire for 10+ at lunch, up to 24 seated or 40 standing (Tabelog; August 2025 review). Service charge: Tabelog\'s Japanese original says 「なし」 (none). Cards (VISA, Master, JCB), iD, QUICPay and PayPay (Tabelog). 19 seats (counter 3, tables 16); non-smoking; English menu; kids\' menu; strollers welcome; free Wi-Fi (Tabelog). 1 min from the Shichijo-Omiya/Kyoto Aquarium bus stop, 8 min from Umekoji-Kyotonishi Stn (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Near the Kyoto Aquarium, Umekoji — 8 min from Umekoji-Kyotonishi Stn',
    cuisine: 'American diner pizzas, custom or set (2025–26 reviews): build your own dough and toppings, or Margherita ¥980 (October 2025), Quattro Formaggi, BBQ beef with pineapple, teriyaki, a seasonal pizza (mushroom in October 2026), a special +¥500 with cheese fondue over potatoes; lunch sets of a half pizza with potato salad or a full pizza with Caesar salad; taco rice, chicken over rice, jambalaya; buffalo wings, garlic shrimp, onion rings, salsa chips, fries; desserts; beer, wine and cocktails; private-party course ¥4,000 (August 2025)',
    website: null, gmaps: gm('SCHOLE 梅小路'), menu_url: TB + 'dtlmenu/',
    notes: "[Custom-pizza diner · Kyoto Aquarium] A bright American-style diner a minute from the Kyoto Aquarium bus stop: build-your-own pizzas, Margherita from about ¥1,000, BBQ beef, buffalo wings and onion rings, and half-pizza lunch sets. English and kids' menus; family-friendly. Open daily.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Opened 9 January 2023 (Tabelog). An October 2025 reviewer lists sister restaurants — Apitt Burger (Arashiyama, Minami-Kusatsu, Kinugasa), Craft Dining Apitt (Sanjo) and Rice Overalls (Seika) — and says the shop supports urban sports such as BMX and breaking, with many staff experienced in double dutch, shown on the in-shop screens. The name is Greek for "leisure" (same review).',
      philosophy: null, specialty: 'Custom pizza.',
      anecdotes: [
        { text: 'A family of four in December 2025 made a custom pizza with Kujo green onion and shirasu on the son\'s suggestion; the parents liked it best.', source: R + 'B519992911/' },
        { text: 'An August 2025 organiser booked a 2–4 p.m. private lunch for about 15 before a match, on the ¥4,000 party course.', source: R + 'B513199192/' },
        { text: 'A March 2026 diner was charmed to get ginger ale in the old green Canada Dry bottle with a chilled glass.', source: R + 'B525448464/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): SCHOLE、ピザ・バー・カフェ、下京区上之町417 ナカキンズフラット、梅小路京都西駅から徒歩8分、京都駅から徒歩14分、七条大宮・京都水族館前バス停から徒歩1分、毎日 11:30〜21:00 (L.O. 20:30)、定休日なし、予約可、サービス料なし、カード・電子マネー・PayPay 可、19席 (カウンター3、テーブル16)、貸切可、禁煙、英語メニュー、お子様メニュー、ベジタリアンメニュー、Wi-Fi、2023年1月9日オープン。口コミ (2025年2月〜2026年10月、英語): 生地と具を選ぶカスタムピザ、マルゲリータ980円、クアトロフォルマッジ、パイナップルの BBQ ビーフ、照り焼き、季節のピザ、チーズフォンデュのスペシャル +500円、ハーフピザのランチセット、タコライス、ジャンバラヤ、バッファローウィング、ガーリックシュリンプ、オニオンリング、貸切パーティーコース4,000円、姉妹店 Apitt Burger など、アーバンスポーツの応援、ダブルダッチ。',
      confidence: 'medium', sources: [TB, R + 'B501112991/', R + 'B501366482/', R + 'B513199192/', R + 'B515426066/', R + 'B519992911/', R + 'B524713153/', R + 'B525448464/', R + 'B536415669/', R + 'B536943478/', R + 'B537300006/'] },
    cultural_comfort: { level: 'english', note: 'English menu; family-friendly diner.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区上之町417 ナカキンズフラット',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.988625, 135.748980); cross-checked: GSI 京都府京都市下京区上之町417番地 (lot) 38m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B515426066/', R + 'B513199192/'],
    price_note: 'Prices from August and October 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Margherita pizza', '¥980', 'Pizza', 'no', 'no', 'October 2025 review.', 'margherita'),
      it('', '', 'Private-party course', '¥4,000', 'Courses', 'no', 'ask', 'August 2025 review.', 'party_course'),
    ] }, {
    cuisine: 'アメリカンダイナーのピザ (2025〜26年の口コミ): 生地と具を選ぶカスタムピザ、マルゲリータ980円 (2025年10月)、クアトロフォルマッジ、パイナップルの BBQ ビーフ、照り焼き、季節のピザ (2026年10月はきのこ)、ポテトにチーズフォンデュをかけるスペシャル +500円。ハーフピザとポテトサラダ、またはピザとシーザーサラダのランチセット。タコライス、チキンオーバーライス、ジャンバラヤ。バッファローウィング、ガーリックシュリンプ、オニオンリング、サルサチップス、ポテト、デザート。ビール、ワイン、カクテル。貸切パーティーコース4,000円 (2025年8月)',
    neighborhood: '京都水族館の近く、梅小路。梅小路京都西駅から徒歩8分',
    gf_detail: 'グルテンフリー不可。小麦のピザ生地、オニオンリング、フライドチキン (2025〜26年の口コミ)。',
    vegan_detail: '要確認。食べログにベジタリアンメニューとあり、カスタムピザもあるが、多くはチーズか肉を使う (食べログ、2025〜26年の口コミ)。',
    notes: '[カスタムピザのダイナー・京都水族館] 京都水族館前のバス停から1分の、明るいアメリカン調のダイナー。自分で選ぶピザ、千円ほどからのマルゲリータ、BBQ ビーフ、バッファローウィング、オニオンリング、ハーフピザのランチセット。英語メニューとお子様メニュー。家族向け。無休。',
  });
}

save();
