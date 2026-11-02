// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo clusters), circle `ningyocho` — lane osw11, batch 18.
//   + 生駒軒 Ikoma-ken (old-school town Chinese with unchanged prices; the oldest surviving Ikoma-ken per a 2026 review)
//   + 貝麺ふか川 Kaimen Fukagawa (clam-broth ramen, opened December 2025, supervised by Kaimen Mikawa)
//   + 岩手屋 Iwateya (60-year oden and sashimi izakaya run by the founder's granddaughter)
//   + 串揚げなかや人形町 Kushiage Nakaya Ningyocho (kushiage omakase, sister of Yanagibashi Kushiemon)
//   Picked from `node scripts/sweep/queue.mjs tokyo-gaps next core 8 ningyocho` (main repo, 2026-11-02).
//   Skipped: 13123350 博多とりかわ 長政 人形町店 — a branch of Hakata Torikawa Nagamasa (株式会社長政): shops in Yotsuya (plus a
//   separate Yotsuya "hanare"), Ningyocho, Nakano and Hakata (gnavi listings), and a company goal of 10+ shops (Indeed
//   recruitment text) — announced plans for many branches make it a chain (Greg 2026-11-02). Next candidate 13210137
//   串揚げなかや人形町 taken in its place.
//   Dedupe. None is in data/tokyo.json by name or address. Ikoma-ken and Kaimen Fukagawa share 日本橋人形町2-3-4 (Tabelog
//   points 15 m apart, own pins); Iwateya and Kushiage Nakaya share 2-10-7 (9 m apart, own pins).
//   Chain check. Ikoma-ken: a September 2026 review says the name spread "not as a chain but through a traditional
//   franchise system" (noren-wake) with "several locations remaining" in Tokyo; no count found and none in data —
//   drafted, flagged in the report. Kushiage Nakaya: two shops (Ningyocho, Kodenmacho), a sister of Yanagibashi Kushiemon
//   (Tabelog); none in data — a small group, drafted. Kaimen Fukagawa: supervised by Kaimen Mikawa (Shimokitazawa), its
//   own shop. Iwateya: single shop.
//   Ramen block left off for Kaimen Fukagawa: reviews disagree on noodles and do not source clarity (brief LESSONS).
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('tokyo-gaps', TODAY, 'osw11-18');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('13123350', '博多とりかわ 長政 人形町店: a branch of Hakata Torikawa Nagamasa (株式会社長政) — shops in Yotsuya (+ Yotsuya hanare), Ningyocho, Nakano and Hakata (gnavi), with a stated goal of 10+ shops (Indeed) — a chain under the 2026-11-02 ruling');

// ================================================================ 生駒軒
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13101011/'; const R = TB + 'dtlrvwlst/';
  const WK = day(['12:00', '15:00'], ['18:30', '21:00']); const SAT = day(['11:00', '14:00']);
  put({
    id: 'tokyo_ikoma_ken_ningyocho', name: '生駒軒 (Ikoma-ken)', category: 'OMNI',
    lat: 35.685287, lng: 139.78384, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles, gyoza and soy-based ankake sauces.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: town-Chinese dishes with pork, shrimp and squid.',
    hours_raw: 'Mon–Fri 12:00–15:00 and 18:30–21:00; Sat 11:00–14:00; closed Sunday (Tabelog). Diners mention it being closed when they tried at lunch (September 2026) and full in the evening (August 2026). Reservations accepted (Tabelog). Cash only — no cards, e-money or QR (Tabelog). 20 seats; smoking allowed (Tabelog). One cook at times, so waits of about 20 minutes (September 2026).',
    hours: { 0: WK, 1: WK, 2: WK, 3: WK, 4: WK, 5: SAT }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Nihonbashi-Ningyocho 2-3-4, on Amazake Yokocho — near Ningyocho Stn exit A2',
    cuisine: 'Old-school town Chinese (machi-chuka) (2026 reviews) · ramen ¥550; set meals ¥800 (September 2026) · Cantonese noodles with shrimp, squid, napa cabbage and pork, the favourite, ¥800; gomoku ankake noodles, soft or crispy, ¥800; tanmen ¥700 (2026) · fried rice with crab and shrimp ¥800; gyoza ¥550 (August–September 2026) · chuka-don; gomoku ankake on crispy rice (May–June 2026) · beer · prices unchanged for at least six years (August 2026) · pickled plums on the table to cleanse the palate (October 2026)',
    website: TB, gmaps: gm('生駒軒 人形町'), menu_url: null,
    notes: "[Chinese · Ningyocho, a decades-old town-Chinese counter with unchanged prices] A classic machi-chuka on Amazake Yokocho, dating from the Taisho era by one account and the Showa era by another (2026 reviews). It is one of several Tokyo shops sharing the Ikoma-ken name through the old noren-wake system rather than a chain, and a September 2026 diner calls it the oldest still open. The draws are hearty Cantonese noodles loaded with seafood and vegetables (¥800), crisp gyoza (¥550) and ramen at ¥550, at prices one diner found unchanged in six years. Pickled plums sit on the table to reset the palate. Lunch fills with locals; at busy times one cook handles everything, so expect a wait. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per 2026 reviews: established in the Taisho era (July 2026) or around since the Showa era (May 2026); the Ikoma-ken name spread through a traditional noren-wake franchise system, mainly in Tokyo, and the Ningyocho shop seems to be the oldest remaining (September 2026). A diner came after seeing it introduced by Nayumi Shiomi (September 2026).',
      philosophy: null, specialty: 'Cantonese noodles; gyoza.',
      anecdotes: [
        { text: '"Ikoma Ken is a restaurant that has spread not as a chain but through a traditional franchise system, primarily in Tokyo." — September 2026.', source: R + 'B534882633/' },
        { text: '"I can\'t believe there are still places like this nowadays." — August 2026, on prices unchanged in six years.', source: R + 'B533148723/' },
        { text: '"Interestingly, the sugar container had pickled plums inside. According to the staff, it\'s meant to cleanse the palate." — October 2026.', source: R + 'B536634908/' },
      ],
      japanese_sources_summary: '食べログ: 生駒軒、中華料理、ラーメン、日本橋人形町2-3-4、月〜金12:00〜15:00、18:30〜21:00、土11:00〜14:00、日曜休み、予約可、カード・電子マネー・QR不可、20席、喫煙可。口コミ(2026年5月〜10月): 町中華、大正創業という声と昭和からという声、のれん分けの生駒軒で人形町が現存最古らしい、ラーメン550円、定食800円、広東麺800円、五目あんかけ800円、タンメン700円、チャーハン800円、餃子550円、6年間値上げなし、卓上に梅干し、昼は混む、厨房がひとりのときは待つ。',
      confidence: 'medium', sources: [TB, R + 'B528427415/', R + 'B530293236/', R + 'B532607931/', R + 'B533095275/', R + 'B533148723/', R + 'B534882633/', R + 'B534895052/', R + 'B536230490/', R + 'B536290391/', R + 'B536634908/'] },
    cultural_comfort: { level: 'japanese', note: 'A busy local Chinese diner; cash only; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋人形町2-3-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated May–October 2026.' },
    pin_source: `Tabelog ${TB} (35.685287, 139.783840); cross-checked: GSI 東京都中央区日本橋人形町二丁目3番4号 (go) 8m. Kaimen Fukagawa shares the address, 15 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536230490/', R + 'B536290391/', R + 'B533095275/', R + 'B536634908/'],
    price_note: 'Prices from August–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Ramen', '¥550', 'Noodles', 'no', 'no', 'September 2026.', 'ramen'),
      it('', '', 'Cantonese noodles', '¥800', 'Noodles', 'no', 'no', 'September 2026.', 'canton'),
      it('', '', 'Tanmen', '¥700', 'Noodles', 'no', 'no', 'October 2026.', 'tanmen'),
      it('', '', 'Fried rice', '¥800', 'Rice', 'ask', 'no', 'August 2026.', 'chahan'),
      it('', '', 'Gyoza', '¥550', 'Sides', 'no', 'no', 'August 2026.', 'gyoza'),
    ] }, {
    cuisine: '昔ながらの町中華 (2026年の口コミ)・ラーメン550円、定食800円 (2026年9月)・海老、いか、白菜、豚肉がたっぷりの人気の広東麺800円、やわらかいかかた焼きの五目あんかけそば800円、タンメン700円 (2026年)・蟹と海老のチャーハン800円、餃子550円 (2026年8月〜9月)・中華丼、おこげの五目あんかけ (2026年5月〜6月)・ビール・少なくとも6年間値上げなし (2026年8月)・卓上の梅干しで口直し (2026年10月)',
    neighborhood: '日本橋人形町2-3-4、Amazake Yokocho。人形町駅A2出口の近く',
    gf_detail: 'グルテンフリーではない: 小麦の麺、餃子、醤油のあんかけ。',
    vegan_detail: 'ヴィーガンではない: 豚肉、海老、いかの町中華。',
    notes: '[中華・人形町、値段の変わらない老舗の町中華] Amazake Yokocho の昔ながらの町中華で、大正創業という声と昭和からという声がある (2026年の口コミ)。チェーンではなくのれん分けで広がった東京の生駒軒のひとつで、2026年9月の客は現存最古の店だという。目当ては魚介と野菜たっぷりの広東麺 (800円)、パリッとした餃子 (550円)、550円のラーメンで、6年前から値上げしていないという声も。卓上の梅干しで口直し。昼は地元の人で埋まり、混む時間は厨房がひとりなので待つことも。現金のみ。',
  });
}

// ================================================================ 貝麺ふか川
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13317025/'; const R = TB + 'dtlrvwlst/';
  const WK = day(['11:00', '14:30'], ['16:00', '23:00']); const SUN = day(['11:00', '14:30'], ['16:00', '20:00']);
  put({
    id: 'tokyo_kaimen_fukagawa_ningyocho', name: '貝麺ふか川 (Kaimen Fukagawa)', category: 'OMNI',
    lat: 35.685172, lng: 139.783743, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles (Hokkaido Yumechikara wheat, October 2026).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: clam broth blended with a beef-bone white broth, topped with pork and chicken chashu.',
    hours_raw: 'Mon–Sat 11:00–14:30 and 16:00–23:00; Sun 11:00–14:30 and 16:00–20:00; closed holidays (Tabelog). Ticket machine; buy first (October 2026). No reservations. Cards (VISA, Master, JCB), e-money and PayPay (Tabelog). 8 counter seats (Tabelog). Queues at weekday noon and weekend lunch, about 10 people one rainy Saturday (October 2026). Opened 23 December 2025 (Tabelog).',
    hours: { 0: WK, 1: WK, 2: WK, 3: WK, 4: WK, 5: WK, 6: SUN }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nihonbashi-Ningyocho 2-3-4, on Amazake Yokocho — 2 min from Ningyocho Stn',
    cuisine: 'Clam ramen: a white broth of asari and other clams blended with a beef-bone half-white broth; three chashu of pork loin, pork belly and chicken (2026 reviews) · kaimen dashi chuka soba in shoyu or shio (under ¥1,000, May 2026; large shio ¥1,130, October 2026); clam and sea bream soba ¥1,200; limited clam shio ¥1,280 (October 2026) · miso ramen with chewy thick noodles; mazesoba (2026) · small asari rice; seasoned egg; yuzu kosho on request · noodles of Hokkaido Yumechikara wheat, described as medium-thick, medium-thin or thin (2026)',
    website: TB, gmaps: gm('貝麺ふか川 人形町'), menu_url: null,
    notes: "[Ramen · Ningyocho, clam-broth ramen on Amazake Yokocho] A small eight-seat ramen counter opened in December 2025, run by an owner who learned ramen at Shichiri in Ogikubo and is supervised by Kaimen Mikawa in Shimokitazawa (Tabelog). The broth is all clams, asari among them, rounded out with a little beef-bone white broth, rich but clean, and the bowl carries three kinds of chashu. Shoyu and shio are the classics; there is also miso with thick noodles and a shellfish mazesoba, plus a small asari rice. Diners rave about the broth, though one found the chashu a poor match for it and another the room noisy, with loud patrons left unchecked (October 2026). Expect a short queue at lunch.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed; trained at Shichiri, Ogikubo; supervised by Kaimen Mikawa, Shimokitazawa — Tabelog remarks)'], origin: null,
      background: 'Per Tabelog: opened 23 December 2025; the owner learned ramen at Shichiri in Ogikubo and received supervision from Kaimen Mikawa in Shimokitazawa, with a strong commitment to shellfish noodles. Per an October 2026 review: broth of asari and other clams blended with a beef-bone half-white broth; noodles of Hokkaido Yumechikara wheat.',
      philosophy: null, specialty: 'Clam-broth shoyu and shio ramen.',
      anecdotes: [
        { text: '"According to the description, … also use beef bone broth, which enhances the clam flavor while adding a deep richness." — May 2026.', source: R + 'B528655211/' },
        { text: '"My first impression was that it tasted like clam miso soup!" — October 2026, miso ramen.', source: R + 'B538410134/' },
        { text: '"…three types of chashu … which are decent on their own but don’t quite match the clam broth." — October 2026.', source: R + 'B538147324/' },
      ],
      japanese_sources_summary: '食べログ: 貝麺ふか川、ラーメン、日本橋人形町2-3-4、月〜土11:00〜14:30、16:00〜23:00、日11:00〜14:30、16:00〜20:00、祝日休み、予約不可、カード・電子マネー・PayPay可、8席、2025年12月23日オープン、店主はOgikubo の Shichiri でラーメンを学び、Shimokitazawa の Kaimen Mikawa の監修。口コミ(2026年5月〜10月): あさりなどの貝の白湯に牛骨の半白湯、3種のチャーシュー、醤油と塩、味噌は太麺、まぜそば、あさりご飯、Hokkaido の Yumechikara の麺、券売機、昼は行列、チャーシューがスープに合わない・騒がしい客を注意しないという声も。',
      confidence: 'medium', sources: [TB, R + 'B528655211/', R + 'B531911303/', R + 'B537589959/', R + 'B537850147/', R + 'B537854858/', R + 'B538147324/', R + 'B538290405/', R + 'B538388023/', R + 'B538410134/', R + 'B538412577/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; counter only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋人形町2-3-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing; reviews dated May–October 2026.' },
    pin_source: `Tabelog ${TB} (35.685172, 139.783743); cross-checked: GSI 東京都中央区日本橋人形町二丁目3番4号 (go) 9m. Ikoma-ken shares the address, 15 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537850147/', R + 'B537854858/', R + 'B538147324/'],
    price_note: 'Prices from May–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Kaimen dashi chuka soba, shio, large', '¥1,130', 'Ramen', 'no', 'no', 'October 2026.', 'shio_large'),
      it('', '', 'Clam and sea bream soba', '¥1,200', 'Ramen', 'no', 'no', 'October 2026.', 'tai'),
      it('', '', 'Clam shio ramen (limited)', '¥1,280', 'Ramen', 'no', 'no', 'October 2026.', 'limited'),
    ] }, {
    cuisine: '貝のラーメン: あさりなどの貝の白湯に牛骨の半白湯を合わせ、豚ロース、豚バラ、鶏の3種のチャーシュー (2026年の口コミ)・醤油か塩の貝麺だし中華そば (2026年5月は1,000円以下、塩の大盛り1,130円、2026年10月)、貝と鯛のそば1,200円、限定の貝の塩1,280円 (2026年10月)・もちもちの太麺の味噌ラーメン、まぜそば (2026年)・あさりご飯 (小)、味玉、柚子胡椒は頼めばもらえる・麺は Hokkaido の Yumechikara の小麦、中太、中細、細麺という声 (2026年)',
    neighborhood: '日本橋人形町2-3-4、Amazake Yokocho。人形町駅から徒歩2分',
    gf_detail: 'グルテンフリーではない: 小麦の麺 (Hokkaido の Yumechikara、2026年10月)。',
    vegan_detail: 'ヴィーガンではない: 貝のスープに牛骨の白湯を合わせ、豚と鶏のチャーシュー。',
    notes: '[ラーメン・人形町、Amazake Yokocho の貝出汁ラーメン] 2025年12月に開いた8席の小さなラーメンのカウンターで、店主は Ogikubo の Shichiri でラーメンを学び、Shimokitazawa の Kaimen Mikawa の監修を受けた (食べログ)。スープは、あさりなどの貝に牛骨の白湯を少し合わせたもので、濃いのにすっきり。チャーシューは3種。定番は醤油と塩で、太麺の味噌、貝のまぜそば、小さなあさりご飯も。スープの評判は高いが、チャーシューがスープに合わないという声や、騒がしい客をそのままにしていて落ち着かなかったという声も (2026年10月)。昼は少し並ぶ。',
  });
}

// ================================================================ 岩手屋
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13120858/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '22:00']);
  put({
    id: 'tokyo_iwateya_ningyocho', name: '岩手屋 (Iwateya)', category: 'OMNI',
    lat: 35.685958, lng: 139.784228, cuisine_type: 'oden',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Oden broth is soy-based, and many oden items (chikuwa-bu, fish cakes) contain wheat; sashimi with soy sauce (2023–25 reviews). Nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: oden in a dashi broth, sashimi and yakitori.',
    hours_raw: 'Mon–Fri 17:00–22:00; closed Sat, Sun and holidays (Tabelog). Reservations accepted; fills early with regulars (September 2025). Cash only (July 2024; Tabelog). No prices on the menu, but bills are reasonable (2023–25 reviews). 11 seats at an L-shaped counter (Tabelog; December 2023). Smoking allowed (Tabelog). Popular items such as natto-stuffed grilled tofu sell out by later in the evening (February 2025). Featured on "Onna Sakaba Hourouki", broadcast 9 August 2019 (Tabelog), and on "Sakaba Hourouki" (May 2025 review).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Nihonbashi-Ningyocho 2-10-7, on Daimon-dori where it meets Amazake Yokocho — 2–3 min from Ningyocho Stn',
    cuisine: 'Showa-era izakaya of oden and sashimi (2023–26 reviews) · oden from the pot in front of the counter: daikon, kombu, hanpen, mochi kinchaku, squid fish cake, grilled tofu, chikuwa-bu, ganmo, egg (December 2023–May 2025) · sashimi of the day, around 14 kinds — tuna, yellowtail, octopus, squid, akagai, hokkigai, scallop (2023–25) · nikogori, vinegared octopus, yam tempura, dashimaki tamago, chicken yakitori, grilled tofu with natto (2023–25) · beer, hot sake, Iwate sake such as Asabiraki, strong shochu sodas (2023–25)',
    website: TB, gmaps: gm('岩手屋 人形町'), menu_url: null,
    notes: "[Oden · Ningyocho, a Showa izakaya kept by the founder's granddaughter] An eleven-seat L-shaped counter that has served oden and sashimi for over sixty years, founded by someone from Iwate and now run by the third-generation proprietress, the founder's granddaughter (December 2023, May 2025). The proprietress runs the room alone, with the proprietress\'s husband doing the buying and prep (September 2025). Oden simmers in front of the counter; the sashimi list runs to about fourteen kinds, and there's hot sake and Iwate sake to go with it. There are no prices on the menu, but bills come in modest. Regulars pack it early, yet first-timers are welcomed warmly. It has appeared on Sakaba Hourouki and Onna Sakaba Hourouki. Cash only; weekdays only.",
    chef_bio: { chef_name: null, roles: ['Third-generation proprietress, the founder\'s granddaughter (December 2023, May 2025 reviews)', 'The proprietress\'s husband handles sourcing and preparation (September 2025 review)'], origin: 'The founder came from Iwate Prefecture, hence the name (December 2023, May 2025 reviews)',
      background: 'Per reviews: established over 60 years ago by a founder from Iwate; now run by the third-generation proprietress, the founder\'s granddaughter (December 2023, May 2025). The counter resembles that of a former sushi shop (September 2025). Featured in "Sakaba Hourouki" and "Onna Sakaba Hourouki" (Tabelog; May 2025).',
      philosophy: null, specialty: 'Oden; sashimi.',
      anecdotes: [
        { text: '"As the name suggests, it was opened by the first generation from Iwate, and now the third-generation granddaughter manages the establishment." — May 2025.', source: R + 'B506452517/' },
        { text: '"The restaurant is run by a mother who manages everything" — September 2025.', source: R + 'B513084394/' },
        { text: '"I was worried about the prices since they weren\'t listed anywhere, but despite having a decent amount to drink, the prices were very reasonable." — September 2025.', source: R + 'B513084394/' },
      ],
      japanese_sources_summary: '食べログ: 岩手屋、居酒屋、日本橋人形町2-10-7、月〜金17:00〜22:00、土日祝休み、予約可、カード・電子マネー・QR不可、11席、カウンター、喫煙可、日本酒・焼酎、「Onna Sakaba Hourouki」2019年8月9日放送。口コミ(2023年12月〜2026年1月): 60年以上、初代が Iwate 出身、三代目の孫娘の女将がひとりで切り盛りし夫が仕入れと仕込み、L字のカウンター11席、おでん、刺身約14種、煮こごり、たこ酢、長芋の天ぷら、納豆の厚揚げ焼きは早く売り切れる、値段の表示はないが安い、熱燗、Iwate の酒、常連が多いが初めての客にも親切、現金のみ。',
      confidence: 'medium', sources: [TB, R + 'B476826271/', R + 'B487849326/', R + 'B493028585/', R + 'B501233749/', R + 'B501615964/', R + 'B506452517/', R + 'B513084394/', R + 'B515542905/', R + 'B517113543/', R + 'B521855695/'] },
    cultural_comfort: { level: 'japanese', note: 'No prices or drink menu shown; ask the proprietress; regulars\' counter.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '東京都中央区日本橋人形町2-10-7',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews to January 2026.' },
    pin_source: `Tabelog ${TB} (35.685958, 139.784228); cross-checked: GSI 東京都中央区日本橋人形町二丁目10番7号 (go) 6m. Kushiage Nakaya shares the lot number, 9 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B476826271/', R + 'B506452517/'],
    price_note: 'No prices are shown in the shop; diners call the bills reasonable (2023–25 reviews).', last_checked: TODAY, items: [
      it('', '', 'Oden (by the piece)', 'not listed', 'Oden', 'ask', 'no', 'December 2023–May 2025.', 'oden'),
      it('', '', 'Assorted sashimi', 'not listed', 'Sashimi', 'ask', 'no', 'December 2023–May 2025.', 'sashimi'),
    ] }, {
    cuisine: '昭和の居酒屋のおでんと刺身 (2023〜26年の口コミ)・カウンターの前の鍋のおでん: 大根、昆布、はんぺん、餅巾着、いか団子、焼き豆腐、ちくわぶ、がんも、玉子 (2023年12月〜2025年5月)・その日の刺身は約14種、まぐろ、ぶり、たこ、いか、赤貝、ほっき貝、帆立 (2023〜25年)・煮こごり、たこ酢、長芋の天ぷら、だし巻き玉子、焼き鳥、納豆の厚揚げ焼き (2023〜25年)・ビール、熱燗、Asabiraki などのIwate の酒、濃いめの焼酎のソーダ割り (2023〜25年)',
    neighborhood: '日本橋人形町2-10-7、Daimon 通りと Amazake Yokocho の交わるあたり。人形町駅から徒歩2〜3分',
    gf_detail: '要確認。おでんの出汁は醤油ベースで、ちくわぶや練り物には小麦が入るものが多い。刺身は醤油で (2023〜25年の口コミ)。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではない: 出汁のおでん、刺身、焼き鳥。',
    notes: '[おでん・人形町、創業者の孫娘が守る昭和の居酒屋] 60年以上おでんと刺身を出してきたL字のカウンター11席の店で、初代は Iwate 出身、いまは三代目の女将、初代の孫娘が営む (2023年12月、2025年5月)。女将がひとりで店を切り盛りし、夫が仕入れと仕込みを担う (2025年9月)。おでんはカウンターの前で煮え、刺身は約14種、熱燗やIwate の酒と合わせる。品書きに値段はないが、勘定は手ごろ。早い時間から常連でいっぱいになるが、初めての客もあたたかく迎える。「Sakaba Hourouki」と「Onna Sakaba Hourouki」にも登場。現金のみ、平日のみ。',
  });
}

// ================================================================ 串揚げなかや人形町
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13210137/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '22:30']); const SUN = day(['17:00', '21:30']);
  put({
    id: 'tokyo_kushiage_nakaya_ningyocho', name: '串揚げなかや人形町 (Kushiage Nakaya Ningyocho)', category: 'OMNI',
    lat: 35.685888, lng: 139.78428, cuisine_type: 'katsu',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: every skewer is in a wheat batter and breadcrumbs, and dessert is fried bread.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat and seafood skewers.',
    hours_raw: 'Mon–Sat 17:30–22:30 (last order 22:00); Sun 17:00–21:30 (last order 21:00); closing days irregular (Tabelog). Reservations from 17:30 to 22:00 (Sun 17:00–21:00); tell the shop about allergies and dislikes when booking (Tabelog). Cards, transport IC, Edy, iD, QUICPay, PayPay, d Barai, Rakuten Pay, au PAY, Alipay and WeChat Pay (Tabelog). 20 seats including a counter and a private room for 5–6; private rooms for 3 or more can be booked at the sister shop in Kodenmacho (Tabelog). Non-smoking. Ordering by mobile phone (July 2026). Opened 27 May 2017 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: SUN }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nihonbashi-Ningyocho 2-10-7, 山田ビル 2F, near the Amazake Yokocho and Daimon-dori crossing — 3 min from Ningyocho Stn',
    cuisine: 'Kushiage in a very thin batter with ten house dipping sauces, from a sister of Yanagibashi Kushiemon (Tabelog) · omakase "stop" course: skewers keep coming until you say stop, ¥620 appetiser plus the skewers eaten (Tabelog); set courses about ¥6,000 and ¥8,000 (August 2026) · skewers in 2026: shrimp in shiso, marinated swordfish, asparagus wrapped in meat, leek and clam, prosciutto and mozzarella, chicken tsukune, wagyu with zucchini, blanched conger eel, pork tenderloin with eggplant, crab, sukiyaki · fried bread with cocoa or kinako for dessert (2026) · Japanese sake and wine; Kirin Ichiban Shibori Premium draft (July 2026)',
    website: TB, gmaps: gm('串揚げなかや 人形町'), menu_url: TB + 'dtlmenu/',
    notes: "[Kushiage · Ningyocho, an omakase kushiage counter in an old-house room] A second-floor kushiage room near the Amazake Yokocho crossing, the sister of Yanagibashi's Kushiemon, which has fried Edo-style skewers for over forty years (Tabelog). Skewers come one by one in a very thin, crisp batter, each matched to one of ten house sauces, from shiso-wrapped shrimp to wagyu with zucchini, until you say stop; finish with fried bread dusted with cocoa or kinako. Sake and wine are chosen to match. Diners like the calm, old-house feel and the light frying, but ordering is by phone only (July 2026), service can be stretched (October 2026), and one August 2026 party of three found the omakase bill (¥36,000) higher than expected — set a budget.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened 27 May 2017 (Tabelog). Per Tabelog: a sister restaurant of Yanagibashi Kushiemon, serving Edo-style kushiage for over 40 years; a sister shop, Kushiage Nakaya Kodenmacho, takes private-room bookings for three or more. An October 2026 reviewer notes the menu and ten sauces match Kushiemon\'s.',
      philosophy: 'Seasonal ingredients in an ultra-thin, crispy batter with ten sauces (Tabelog shop text).', specialty: 'Omakase "stop" kushiage.',
      anecdotes: [
        { text: '"The kushiage here features a light batter, making every skewer delicious." — June 2026.', source: R + 'B530116792/' },
        { text: '"However, it was disappointing that the menu was only available through mobile ordering." — July 2026.', source: R + 'B531516420/' },
        { text: '"The skewers were delicious, but I was surprised by the final bill—it was too high. We spent JPY 36000 for three people." — August 2026.', source: R + 'B534573368/' },
      ],
      japanese_sources_summary: '食べログ: 串揚げなかや人形町、串揚げ、日本酒バー、海鮮、日本橋人形町2-10-7 山田ビル 2F、人形町駅から徒歩3分、月〜土17:30〜22:30、日曜17:00〜21:30、不定休、予約可、アレルギーは予約時に、カード・電子マネー・QR可、20席、個室、禁煙、2017年5月27日オープン、Yanagibashi の Kushiemon の姉妹店、薄い衣と10種類の自家製ソース、おまかせのストップ式 (お通し620円と串の代金)、小伝馬町にも店。口コミ(2026年6月〜10月): コースは約6,000円と約8,000円、大葉巻きの海老、カジキ、アスパラの肉巻き、和牛とズッキーニ、湯引きの鱧、締めの揚げパン (ココアかきなこ)、日本酒とワイン、注文はスマホ、会計が高かったという声、スタッフがひとりで回して大変そうという声も。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', R + 'B288685989/', R + 'B530116792/', R + 'B530609861/', R + 'B531028473/', R + 'B531516420/', R + 'B532347062/', R + 'B534573368/', R + 'B535847170/', R + 'B536711035/', R + 'B538013926/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order by phone; say "stop" to end the omakase.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['Tell the shop about allergies and dislikes when booking (Tabelog).'] },
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋人形町2-10-7 山田ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing; reviews dated June–October 2026.' },
    pin_source: `Tabelog ${TB} (35.685888, 139.784280); cross-checked: GSI 東京都中央区日本橋人形町二丁目10番7号 (go) 3m. Iwateya shares the lot number, 9 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B534573368/'],
    price_note: 'Omakase base from Tabelog; course prices from an August 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Omakase "stop" course (appetiser charge; skewers extra)', '¥620', 'Courses', 'no', 'no', 'Tabelog.', 'stop'),
      it('', '', 'Kushiage course', '¥6,000', 'Courses', 'no', 'no', 'August 2026 (about ¥8,000 course also).', 'course'),
    ] }, {
    cuisine: '極薄の衣の串揚げに10種類の自家製ソース、Yanagibashi の Kushiemon の姉妹店 (食べログ)・おまかせのストップ式: 止めるまで串が出る、お通し620円と食べた串の代金 (食べログ)、コースは約6,000円と約8,000円 (2026年8月)・2026年の串: 大葉巻きの海老、カジキの漬け、アスパラの肉巻き、ねぎと蛤、生ハムとモッツァレラ、鶏のつくね、和牛とズッキーニ、湯引きの鱧、豚ヒレと茄子、蟹、すき焼き・締めはココアかきなこの揚げパン (2026年)・日本酒とワイン、Kirin Ichiban Shibori Premium の生 (2026年7月)',
    neighborhood: '日本橋人形町2-10-7 山田ビル 2F、Amazake Yokocho と Daimon 通りの交差点の近く。人形町駅から徒歩3分',
    gf_detail: 'グルテンフリーではない: どの串も小麦の衣とパン粉、デザートも揚げパン。',
    vegan_detail: 'ヴィーガンではない: 肉と魚介の串。',
    notes: '[串揚げ・人形町、古民家風の部屋のおまかせ串揚げ] Amazake Yokocho の交差点近くの2階にある串揚げの店で、40年以上江戸前の串揚げを揚げてきたYanagibashi の Kushiemon の姉妹店 (食べログ)。極薄でカリッとした衣の串がひとつずつ出て、それぞれ10種類の自家製ソースのどれかと合わせる。大葉巻きの海老から和牛とズッキーニまで、止めるまで続き、締めはココアかきなこの揚げパン。日本酒とワインも串に合わせて選ぶ。落ち着いた古民家風の雰囲気と軽い揚げ方が好評だが、注文はスマホのみ (2026年7月)、人手が足りず大変そうなことも (2026年10月)、2026年8月には3人で36,000円と会計が思ったより高かったという声も。予算を伝えておくとよい。',
  });
}

save();
