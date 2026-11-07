// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 49.
//   + チャーミングチャーハン 丸太町本店 Charming Chahan (local Chinese diner famous for fried-rice sets, Horikawa Marutamachi) — core
//   + 千龍 Senryu (Northeast Chinese cooking with tatami rooms, Shijo Omiya) — core
//   + オステリア コナチネッタ Osteria Conacinetta (one-person Puglian osteria, Shogoin) — core
//   + ほっこり酒場なごみ家 Hokkori Sakaba Nagomiya (couple-run izakaya with fish from Kochi, Mibu) — core
//   - skip 26015812 鶏三和 JR京都伊勢丹店 (chain)
//   The lane's notable list is empty; core taken nearest-first.
//   Same-name counts first, per brand or operator (2026-11-06): チャーミングチャーハン — two (this main shop and Imadegawa), a local
//   pair, so the main shop is drafted. 千龍 — one in Kyoto (other "Senryu" hits are unrelated; a 2024 review says two former
//   branches have closed). コナチネッタ — one. ほっこり酒場なごみ家 — one.
//   None is in data/kyoto.json: grep by name and address (丸太町27 高陽院ハイツ, 壬生坊城町20-9, 聖護院東町14, 壬生馬場町21-7) found none.
//   Service charges per Tabelog's Japanese original: 千龍 「サービス料・チャージ料なし」; コナチネッタ 「ディナーのみチャージ料300円」;
//   the other two list none. No halal claims; no owner deaths in the sources; no single-review remarks about other diners kept.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-49');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26015812', 'chain: Tori Sanwa — Tabelog lists 20+ Tori Sanwa shops (Tokyo Midtown, Yokohama, LUCUA Osaka, Sakae, Okayama, Chiba and more) (https://tabelog.com/en/rstLst/?sw=%E9%B6%8F%E4%B8%89%E5%92%8C).');

// ================================================================ チャーミングチャーハン 丸太町本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26003680/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '14:45'], ['17:00', '21:00']);
  put({
    id: 'kyoto_charming_chahan_marutamachi', name: 'チャーミングチャーハン 丸太町本店 (Charming Chahan)', category: 'OMNI',
    lat: 35.017476, lng: 135.752799, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: ramen, gyoza and fried set meals; fried rice and stir-fries are soy-seasoned (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: egg fried rice, pork and chicken dishes, ramen broths (2025–26 reviews).',
    hours_raw: 'Tue–Sun 11:00–14:45 and 17:00–21:00; closed Monday; hours may change (Tabelog). No reservations; take-away and delivery (Tabelog; December 2025). No cards or e-money; QR payments accepted (Tabelog). Counter and table seats (Tabelog; June 2026). Smoking allowed per Tabelog. On Marutamachi-dori at the Horikawa crossing, about 10 min west of Marutamachi Stn (Tabelog; June 2026).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Horikawa Marutamachi — 10 min from Marutamachi Stn',
    cuisine: 'Local Chinese diner known for adding fried rice to any dish — even to fried rice (2025–26 reviews) · fried rice swapped into a set for +¥300 (June 2026) or added for ¥400–450 (July–August 2026) · shrimp fried rice, curry fried rice, omelette curry fried rice (November 2025; April 2026) · Sichuan mapo rice bowl (May 2025; August 2026) · sweet-and-sour meatball set ¥950 (June 2026); kara-age set (December 2025) · miso ramen (January 2026); chilled tantanmen in summer (July–August 2026) · pork kimchi, stir-fried vegetables (2025–26 reviews)',
    website: 'https://ameblo.jp/charhan11/', gmaps: gm('チャーミングチャーハン 丸太町本店'), menu_url: TB,
    notes: '[Local Chinese · Horikawa Marutamachi, fried rice with everything] A neighbourhood Chinese diner whose gimmick is a side of fried rice with any dish — ramen, mapo, even fried rice — plus curry and shrimp fried rice, a numbing Sichuan mapo bowl and a summer chilled tantanmen. Cheap, quick and local; QR payment but no cards. Closed Monday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: a Chinese and ramen restaurant on Marutamachi with a second shop in Imadegawa. A January 2026 review notes signed photos from visiting celebrities on the walls; a December 2025 regular who mostly orders take-away recalls the fried-rice add-on once costing ¥200.',
      philosophy: null, specialty: 'Fried rice; Sichuan mapo rice bowl.',
      anecdotes: [
        { text: 'A November 2025 visitor came in because of the sign promising fried rice with fried rice, and ordered stir-fried vegetables with it instead.', source: R + 'B517245390/' },
        { text: 'A June 2026 diner suspected a secret sweet ingredient in the fried rice and could not pin it down.', source: R + 'B529753284/' },
        { text: 'An August 2026 first-timer loved the chilled tantanmen but found the fried rice a little dry.', source: R + 'B533837680/' },
      ],
      japanese_sources_summary: '食べログ: 中華料理・ラーメン、中京区丸太町通り油小路西入ル丸太町27 高陽院ハイツ 1F、火〜日11:00〜14:45と17:00〜21:00、月曜休み、予約不可、テイクアウト・デリバリー、カード・電子マネー不可、QR 可、カウンターとテーブル、喫煙可、今出川店もある。口コミ (2025年5月〜2026年8月、英語): どの料理にも炒飯を付けられる、炒飯に炒飯も、セットで炒飯に変更300円、追加400〜450円、エビ炒飯、カレー炒飯、四川の麻婆丼、肉団子の甘酢の定食950円、味噌ラーメン、夏の冷やし担々麺、有名人のサイン。',
      confidence: 'medium', sources: [TB, R + 'B217525541/', R + 'B507080982/', R + 'B517245390/', R + 'B518282482/', R + 'B519557764/', R + 'B523035344/', R + 'B526588273/', R + 'B529753284/', R + 'B531213450/', R + 'B531549230/', R + 'B533837680/', R + 'B534131673/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order a set and ask to add fried rice; pay by QR or cash. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区丸太町通り油小路西入ル丸太町27 高陽院ハイツ 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.017476, 135.752799); cross-checked: GSI 京都府京都市中京区丸太町27番地 (lot) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B529753284/', R + 'B531213450/', R + 'B533837680/'],
    price_note: 'Prices from June–August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Sweet-and-sour meatball set', '¥950', 'Set meals', 'no', 'no', 'June 2026.', 'niku_dango_set'),
      it('', '', 'Fried rice in place of rice in a set', '+¥300', 'Fried rice', 'no', 'no', 'June 2026.', 'chahan_swap'),
      it('', '', 'Fried rice added to any dish', '¥400–450', 'Fried rice', 'no', 'no', 'July–August 2026.', 'chahan_add'),
      it('', '', 'Chilled tantanmen', '', 'Noodles', 'no', 'no', 'Summer; July–August 2026.', 'hiyashi_tantan'),
      it('', '', 'Sichuan mapo rice bowl', '', 'Rice bowls', 'no', 'no', 'August 2026.', 'mabo_don'),
    ] }, {
    cuisine: 'どの料理にも炒飯を付けられる町中華、炒飯に炒飯も (2025〜2026年の口コミ)・セットのご飯を炒飯に変えて+300円 (2026年6月)、追加は400〜450円 (2026年7月〜8月)・エビ炒飯、カレー炒飯、オムカレー炒飯 (2025年11月、2026年4月)・四川の麻婆丼 (2025年5月、2026年8月)・肉団子の甘酢の定食950円 (2026年6月)、唐揚げの定食 (2025年12月)・味噌ラーメン (2026年1月)、夏は冷やし担々麺 (2026年7月〜8月)・豚キムチ、野菜炒め (2025〜2026年の口コミ)',
    neighborhood: '堀川丸太町。丸太町駅から徒歩10分',
    gf_detail: 'グルテンフリーではない。ラーメン、餃子、揚げ物の定食。炒飯や炒め物は醤油の味付け (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。卵の炒飯、豚肉や鶏肉の料理、ラーメンのスープ (2025〜2026年の口コミ)。',
    notes: '[町中華・堀川丸太町、何にでも炒飯] どの料理にも炒飯を付けられるのが名物の町中華。ラーメン、麻婆、炒飯にまで炒飯を。カレー炒飯やエビ炒飯、しびれる四川の麻婆丼、夏の冷やし担々麺も。安くて早い、地元の店。QR 決済可、カード不可。月曜休み。',
  });
}

// ================================================================ 千龍
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26007658/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '23:00']);
  put({
    id: 'kyoto_senryu_mibu', name: '千龍 (Senryu)', category: 'OMNI',
    lat: 35.003743, lng: 135.745415, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: ramen, Sara Udon, shumai, battered sweet-and-sour pork and soy-based sauces (2024–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat and seafood Chinese dishes, chicken-based soups (2024–26 reviews).',
    hours_raw: 'Dinner only, 17:30–23:00 (last order 22:30); closed Tuesday (Tabelog). Lunch was stopped a few years ago (September 2025). Reservations accepted; the set menu is not served on holidays (Tabelog; April 2026). Cards (VISA, Master, JCB, AMEX) and PayPay; no e-money (Tabelog). No service or cover charge (Tabelog, Japanese text: 「サービス料・チャージ料なし」). 62 seats: tables, semi-private tatami rooms and an upstairs tatami room for up to 30 (Tabelog). Non-smoking; wheelchair accessible (Tabelog). Opposite the Life supermarket, 5 min from Hankyu Omiya or Randen Shijo-Omiya (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shijo Omiya, east of Omiya — 5 min from Hankyu Omiya',
    cuisine: 'Generous Chinese home cooking by a chef from Northeast China, open since 2000 (Tabelog) · authentic mapo tofu with Sichuan pepper, beef with green peppers, fried rice, egg soup (June 2026) · Guo Bao Rou (April 2026); sweet-and-sour pork ¥1,100, shark-fin shumai, three for ¥700 (February 2025) · Sara Udon set with rice and kara-age ¥1,480 (September 2025) · lemon chicken, chive and egg, Chinese rice bowl (September 2025) · fried-rice dinner set ¥1,100, draft beer with a set ¥550 (October 2024) · chilled noodles in summer (May 2026); Sennari ramen Friday to Sunday (September 2024)',
    website: null, gmaps: gm('千龍 四条大宮 中華'), menu_url: TB,
    notes: '[Chinese · Shijo Omiya, Northeast Chinese home cooking] A busy neighbourhood Chinese restaurant run since 2000 by a chef from Northeast China: numbing mapo tofu, Guo Bao Rou, shark-fin shumai, Sara Udon and good-value dinner sets with beer, plus tatami rooms for groups of up to 30. Dinner only; closed Tuesday; book for groups.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed), from Northeast China (Tabelog)'], origin: 'Northeast China (Tabelog)',
      background: 'Per Tabelog: run by a chef from Northeast China, formerly Manchuria; open since 2000 as a local Chinese restaurant. An April 2025 review describes a Chinese family running it; reviews in 2024 and 2026 say it once had other branches, including one on Horikawa, now closed.',
      philosophy: null, specialty: 'Authentic mapo tofu; Northeast Chinese dishes.',
      anecdotes: [
        { text: 'A September 2025 regular returned for the Sara Udon remembered from the old lunch menu and found it as good as ever, at ¥1,480 for the evening set.', source: R + 'B513202726/' },
        { text: 'For an April 2025 group it is the usual second stop after yakiniku in Omiya, for mapo tofu and spicy eggplant with Shaoxing wine.', source: R + 'B505481735/' },
        { text: 'An April 2026 diner loved the Guo Bao Rou but called the fried rice burnt and unsalted.', source: R + 'B526500732/' },
      ],
      japanese_sources_summary: '食べログ: 中華・居酒屋・ラーメン、中京区壬生坊城町20-9、阪急大宮駅・嵐電四条大宮駅から徒歩5分、ライフ四条大宮店の向かい、17:30〜23:00 (L.O. 22:30)、火曜休み、予約可、カード・PayPay 可、サービス料・チャージ料なし、62席 (テーブル、半個室、座敷、2階は30名まで)、禁煙、中国東北部出身の料理人、2000年開業。口コミ (2024年9月〜2026年9月、英語): 麻婆豆腐、牛肉とピーマンの炒め物、炒飯、Guo Bao Rou、酢豚1,100円、フカヒレ焼売3個700円、Sara Udon の定食1,480円、レモンチキン、ニラと卵、中華丼、炒飯のディナーセット1,100円、生ビール550円、昼の営業はやめた、炒飯が焦げて塩気がないとの声も。',
      confidence: 'medium', sources: [TB, R + 'B468947652/', R + 'B490640827/', R + 'B491958297/', R + 'B500404554/', R + 'B500698571/', R + 'B504287914/', R + 'B505481735/', R + 'B513202726/', R + 'B514478956/', R + 'B518621633/', R + 'B526500732/', R + 'B531032894/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set meals for solo diners on weekdays; tatami rooms for groups. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区壬生坊城町20-9',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.003743, 135.745415); cross-checked: GSI 京都府京都市中京区壬生坊城町20番地 (lot) 19m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B500404554/', R + 'B500698571/', R + 'B513202726/'],
    price_note: 'Prices from 2024–25 reviews; no service charge.', last_checked: TODAY, items: [
      it('', '', 'Sweet-and-sour pork', '¥1,100', 'Main dishes', 'no', 'no', 'February 2025.', 'subuta'),
      it('', '', 'Shark-fin shumai (3)', '¥700', 'Dim sum', 'no', 'no', 'February 2025.', 'fukahire_shumai'),
      it('', '', 'Sara Udon set (with rice and kara-age)', '¥1,480', 'Set meals', 'no', 'no', 'September 2025.', 'sara_udon_set'),
      it('', '', 'Fried-rice dinner set', '¥1,100', 'Set meals', 'no', 'no', 'October 2024.', 'chahan_dinner_set'),
      it('', '', 'Authentic mapo tofu', '', 'Main dishes', 'no', 'no', 'June 2026.', 'mabo_tofu'),
    ] }, {
    cuisine: '中国東北部出身の料理人による量の多い家庭の中華、2000年から (食べログ)・山椒のきいた本格麻婆豆腐、牛肉とピーマンの炒め物、炒飯、卵スープ (2026年6月)・Guo Bao Rou (2026年4月)、酢豚1,100円、フカヒレ焼売3個700円 (2025年2月)・ご飯と唐揚げ付きの Sara Udon の定食1,480円 (2025年9月)・レモンチキン、ニラと卵、中華丼 (2025年9月)・炒飯のディナーセット1,100円、セットに生ビール550円 (2024年10月)・夏は冷たい麺 (2026年5月)、金〜日は Sennari ラーメン (2024年9月)',
    neighborhood: '四条大宮、大宮の東。阪急大宮駅から徒歩5分',
    gf_detail: 'グルテンフリーではない。ラーメン、Sara Udon、焼売、衣の酢豚、醤油のたれ (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。肉や魚介の中華、鶏のスープ (2024〜2026年の口コミ)。',
    notes: '[中華・四条大宮、中国東北部の家庭料理] 2000年から中国東北部出身の料理人が営む、いつも賑わう町の中華。しびれる麻婆豆腐、Guo Bao Rou、フカヒレ焼売、Sara Udon、ビール付きのお得なディナーセット。30名までの座敷もある。夜のみ、火曜休み、団体は予約を。',
  });
}

// ================================================================ オステリア コナチネッタ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26025520/'; const R = TB + 'dtlrvwlst/';
  const OF = 'https://conacinetta.com/';
  const H = day(['12:00', '15:00'], ['18:00', '23:00']);
  put({
    id: 'kyoto_osteria_conacinetta', name: 'オステリア コナチネッタ (Osteria Conacinetta)', category: 'OMNI',
    lat: 35.019552, lng: 135.78262, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Courses centre on handmade pasta such as orecchiette, plus a fried seafood platter; antipasti and grilled mains may suit (official menu; 2022–26 reviews). No gluten information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options, and a chickpea pasta appears on the lunch menu (official site); most dishes use seafood, meat or cheese.',
    hours_raw: 'Lunch 12:00–15:00 (last order 13:00 per the official site, 14:00 per Tabelog), dinner 18:00–23:00 (last order 21:30 per the official site, 22:00 per Tabelog); closed irregularly — the site posts each month\'s open days (official site; Tabelog). Reservations by phone only (official site); lunch is courses only (November 2022; June 2026). Cover charge ¥300 at dinner only (Tabelog, Japanese text: 「ディナーのみチャージ料300円」). Cards accepted; no e-money (Tabelog). 14 seats, all tables (Tabelog). Non-smoking (Tabelog). In the residential streets east of Kyoto University Hospital, about 10 min east of Jingu-Marutamachi (Tabelog; November 2022).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shogoin, east of Kyoto University Hospital — 10 min from Jingu-Marutamachi',
    cuisine: 'Traditional Puglian cooking from the heel of Italy (official site) · lunch course from ¥3,850 incl. tax: chef\'s antipasti, then a choice of pasta or main (official menu) · orecchiette with tomato and cacioricotta, chickpea pasta, burnt-wheat orecchiette with cima di rapa and anchovy (official menu) · Sagne Incannulate with hairy crab, orecchiette with fresh tuna, grilled horse skirt, seaside fritto misto (May 2025) · four antipasti, homemade pasta chosen from samples shown at the table (November 2024; May 2025) · tiramisu and espresso (January 2025); natural wines and wine by the glass (2025 reviews)',
    website: OF, gmaps: gm('Osteria Conacinetta 聖護院'), menu_url: OF,
    notes: '[Italian · Shogoin, a one-person Puglian osteria] A 14-seat osteria in a quiet residential street serving the rustic cooking of Puglia: handmade orecchiette and other pasta shown to you before you choose, generous antipasti, fritto misto and grilled mains, with a strong natural-wine list. Lunch courses from ¥3,850. Book by phone; ¥300 cover at dinner; open days vary.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed), running the room alone (June 2026)'], origin: null,
      background: 'Per the official site: an osteria of typical Puglian cooking, with thanks to the Colucci family, and Stefano in particular. A June 2026 review says the owner runs everything alone.',
      philosophy: 'Simple, strong and somehow comforting food in the spirit of Puglia (official site).', specialty: 'Puglian handmade pasta; orecchiette.',
      anecdotes: [
        { text: 'A May 2025 business traveller started with a pretzel-like nibble and named the Sagne Incannulate with hairy crab a new favourite.', source: R + 'B506432363/' },
        { text: 'A June 2026 diner phoned just before arriving, found lunch was courses only, and watched the room fill up soon after.', source: R + 'B530270895/' },
        { text: 'A March 2025 solo diner took a last-minute table, ordered an Aperol at once, and felt transported to Italy.', source: R + 'B511671511/' },
      ],
      japanese_sources_summary: '公式サイト: プーリア州の郷土料理のオステリア、左京区聖護院東町14、昼12:00〜13:00 L.O.、夜18:00〜21:30 L.O.、不定休 (今月の営業日を掲載)、予約は電話のみ、ランチ3,500円 (税込3,850円)、店主のお楽しみ前菜、パスタかメインを選ぶ、オレキエッテ、ひよこ豆のパスタ、焦がし小麦のオレキエッテ、海辺のフリットゥーラミスタ、「素朴で、力強い、そしてどこかほっとする、そんな滋味深い料理を目指します」。食べログ: イタリアン、ディナーのみチャージ料300円、カード可、14席、禁煙。口コミ (2022年11月〜2026年6月、英語): 店主が一人で営む、手打ちパスタを見本から選ぶ、自然派ワイン、ティラミス、ランチはコースのみ。',
      confidence: 'medium', sources: [TB, OF, R + 'B114744120/', R + 'B456503522/', R + 'B457022383/', R + 'B464739169/', R + 'B466460129/', R + 'B483137311/', R + 'B488345225/', R + 'B499952988/', R + 'B504345563/', R + 'B506432363/', R + 'B511671511/', R + 'B530270895/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book by phone; the pasta shapes are shown and explained at the table; ¥300 cover at dinner. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市左京区聖護院東町14',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB} (35.019552, 135.782620); cross-checked: GSI 京都府京都市左京区聖護院東町14番地 (lot) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [OF],
    price_note: 'Official lunch menu, checked 2026-11-06; ¥300 cover at dinner (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Lunch course (antipasti, then pasta or main)', '¥3,850', 'Lunch', 'ask', 'ask', 'Tax included; official menu.', 'pranzo'),
      it('', '', 'Orecchiette with tomato and cacioricotta', '', 'Pasta', 'no', 'no', 'Lunch choice; official menu.', 'orecchiette_pomodoro'),
      it('', '', 'Chickpea pasta', '', 'Pasta', 'no', 'ask', 'Lunch choice; official menu.', 'ciceri_e_tria'),
      it('', '', 'Spaghettoni with clams and mussels', '+¥1,300', 'Pasta', 'no', 'no', 'Lunch supplement; official menu.', 'spaghettoni_vongole'),
      it('', '', 'Seaside fritto misto', '+¥500 / +¥1,900', 'Mains', 'no', 'no', 'Small or large, lunch supplement; official menu.', 'frittura_mista'),
    ] }, {
    cuisine: 'イタリアのかかと、プーリア州の郷土料理 (公式サイト)・ランチは税込3,850円から、店主のお楽しみ前菜にパスタかメインを選ぶ (公式メニュー)・トマトソースとカチョリコッタのオレキエッテ、ひよこ豆のパスタ、焦がし小麦のオレキエッテ (公式メニュー)・毛ガニの Sagne Incannulate、生まぐろのオレキエッテ、馬のハラミのグリル、海辺のフリットゥーラミスタ (2025年5月)・前菜4種、手打ちパスタは見本を見て選ぶ (2024年11月、2025年5月)・ティラミスとエスプレッソ (2025年1月)、自然派ワインやグラスワイン (2025年の口コミ)',
    neighborhood: '聖護院、京大病院の東。神宮丸太町駅から徒歩10分',
    gf_detail: '要確認。オレキエッテなどの手打ちパスタと魚介のフリットが中心。前菜やグリルは合うかもしれない (公式メニュー、2022〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: '要確認。食べログはベジタリアン対応ありと表示、ランチにひよこ豆のパスタ (公式サイト)。多くの料理は魚介、肉、チーズを使う。',
    notes: '[イタリアン・聖護院、店主一人のプーリア料理のオステリア] 静かな住宅街の14席のオステリア。プーリアの素朴な料理を、手打ちのオレキエッテなどのパスタを見せてもらって選び、たっぷりの前菜、フリット、グリル、自然派ワインと。ランチは3,850円から。予約は電話で、夜はチャージ300円、営業日は月ごとに。',
  });
}

// ================================================================ ほっこり酒場なごみ家
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26007976/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '22:00']);
  put({
    id: 'kyoto_hokkori_sakaba_nagomiya', name: 'ほっこり酒場なごみ家 (Hokkori Sakaba Nagomiya)', category: 'OMNI',
    lat: 35.006157, lng: 135.744939, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sashimi, obanzai, salads and fried dishes (2020–24 reviews); fried items are battered; no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish izakaya — sashimi, namero, fried seafood, dashi obanzai (2020–24 reviews).',
    hours_raw: 'Tue–Sat and holidays 17:00–22:00 (last order 21:30); closed Sunday, Monday and over New Year, with occasional extra closures (Tabelog). Reservations accepted (Tabelog). Cards, e-money and QR accepted (Tabelog). 13 seats: a counter of 7 and tables for 4 and 2, with a small courtyard garden (Tabelog). Non-smoking; children welcome (Tabelog). 1 min from the Mibu Sosakuba-mae bus stop, 10 min from Hankyu Omiya (Tabelog). Opened 28 March 2007 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Mibu, west of Omiya — 10 min from Hankyu Omiya',
    cuisine: 'Fish sent direct from Sukumo in Kochi and from Kyoto Central Market, with shochu and sake from around Japan (Tabelog) · sashimi, namero (November 2023), carefully fried dishes (2023 reviews) · a long menu of obanzai and small plates (August 2023; November 2023) · ¥2,000 course with four starters, sashimi, fried dishes and salad (August 2020)',
    website: null, gmaps: gm('ほっこり酒場なごみ家 壬生'), menu_url: TB,
    notes: '[Izakaya · Mibu, a couple-run local with Kochi fish] A 13-seat neighbourhood izakaya, open since 2007 and run by a friendly couple, with a tiny courtyard garden and fish shipped straight from Sukumo in Kochi: sashimi, namero, crisp fried dishes and a long list of homely small plates, with shochu and sake. Closed Sunday and Monday.',
    chef_bio: { chef_name: null, roles: ['Couple (unnamed) running the izakaya (2020–23 reviews)'], origin: null,
      background: 'Per Tabelog: an izakaya opened in March 2007 with fish from Sukumo in Kochi and Kyoto Central Market. Reviews from 2020 to 2023 describe a friendly couple running it; a February 2022 neighbour learned the couple are not from Kochi but take part in a project supporting fish from Kochi\'s ports.',
      philosophy: null, specialty: 'Kochi fish; sashimi and fried dishes.',
      anecdotes: [
        { text: 'An August 2020 party of two adults and two first-graders could not finish the ¥2,000 course.', source: R + 'B429498534/' },
        { text: 'A March 2024 regular gets the first beer poured before ordering and extra vegetables because the sides always come back empty.', source: R + 'B495070689/' },
        { text: 'A November 2023 visitor of many years singled out the namero.', source: R + 'B463385091/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・海鮮・揚げ物、中京区壬生馬場町21-7、壬生操車場前バス停から徒歩1分、阪急大宮駅から徒歩10分、火〜土・祝17:00〜22:00 (L.O. 21:30)、日月と年末年始休み、予約可、カード・電子マネー・QR 可、13席 (カウンター7、テーブル4と2)、禁煙、子供可、2007年3月28日オープン、高知の Sukumo と京都中央市場から直送の魚、坪庭、各地の焼酎と日本酒。口コミ (2019年〜2026年1月、英語): 夫婦で営む、刺身、namero、揚げ物、おばんざい、2,000円のコース、高知の魚を応援。',
      confidence: 'medium', sources: [TB, R + 'B351732410/', R + 'B411809813/', R + 'B429498534/', R + 'B446131984/', R + 'B461536524/', R + 'B461831564/', R + 'B463385091/', R + 'B467510409/', R + 'B469856076/', R + 'B484948239/', R + 'B495070689/', R + 'B521448562/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter seats with the couple; the long menu is easiest via the course. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区壬生馬場町21-7',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; latest review January 2026.' },
    pin_source: `Tabelog ${TB} (35.006157, 135.744939); cross-checked: GSI 京都府京都市中京区壬生馬場町21番地 (lot) 39m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B429498534/'],
    price_note: 'One course price from August 2020 — may have changed.', last_checked: TODAY, items: [
      it('', '', 'Course (four starters, sashimi, fried dishes, salad)', '¥2,000', 'Courses', 'ask', 'no', 'August 2020.', 'course'),
      it('', '', 'Sashimi (Kochi fish)', '', 'Sashimi', 'ask', 'no', '2019–23 reviews.', 'sashimi'),
      it('', '', 'Namero', '', 'Small plates', 'ask', 'no', 'November 2023.', 'namero'),
    ] }, {
    cuisine: '高知の Sukumo と京都中央市場から直送の魚、各地の焼酎と日本酒 (食べログ)・刺身、namero (2023年11月)、丁寧な揚げ物 (2023年の口コミ)・品数の多いおばんざいと小皿 (2023年8月・11月)・前菜4種、刺身、揚げ物、サラダの2,000円のコース (2020年8月)',
    neighborhood: '壬生、大宮の西。阪急大宮駅から徒歩10分',
    gf_detail: '要確認。刺身、おばんざい、サラダ、揚げ物 (2020〜2024年の口コミ)。揚げ物は衣がある。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。刺身、namero、魚介の揚げ物、出汁のおばんざいの魚の居酒屋 (2020〜2024年の口コミ)。',
    notes: '[居酒屋・壬生、夫婦で営む高知の魚の店] 2007年開業、気さくな夫婦が営む13席の町の居酒屋。小さな坪庭があり、高知の Sukumo から直送の魚で、刺身、namero、からりとした揚げ物、品数の多い家庭的な小皿を焼酎や日本酒と。日月休み。',
  });
}

save();
