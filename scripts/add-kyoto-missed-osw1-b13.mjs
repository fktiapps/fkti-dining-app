// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 13.
//   + ラム＆ウイスキー Rum and Whisky (rum-led bar on Kiyamachi south of Sanjo; open to 2:00; since 2009)
//   + ラーメン 大志 Ramen Taishi (Kyoto back-fat shoyu ramen on Kawaramachi at Matsubara; since November 2025)
//   + 壺味 Tsubomi (Showa-era konamon counter by Omiya: negiyaki of Kujo green onions, takoyaki; family-run)
//   + 京料理 藤本 Kyo Ryori Fujimoto (Michelin-starred Kyoto cuisine counter off Shinmachi-Oike; husband-and-wife)
//   - 祇園 やま岸 (26039228): skipped (same-name chain, reason below).
//   Picked on 2026-11-05: the first two with id mod 6 = 2 from `queue.mjs kyoto-missed next core 200` (26013926, 26043878);
//   from `next notable 200`, after the skip: 26023844, 26031062. None is in data/kyoto.json: grep by name (Rum/ラム,
//   大志/Taishi, 壺味/Tsubomi, 藤本/Fujimoto) and address (材木町188, 清水町281, 錦大宮町152, 神明町72) found none.
//   Same-name count (Greg's Samboa ruling): no second shop found for ラム＆ウイスキー, 壺味 or 京料理 藤本. For ラーメン 大志,
//   a web search found no branch list; three 2026 Tabelog reviews on this listing describe a shop at Shijo Takakura or
//   near Yamashina Stn (one with a chicken broth), which may be misfiled reviews or other shops — not used here; flagged.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-13');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26039228', '祇園 やま岸: a same-name chain (Greg, 2026-11-05: five or more same-name shops) whose group is already in data — the 京都やま岸 group site (https://tominokoji-yamagishi.com/, read 2026-11-05) lists 富小路やま岸, 呑小路やま岸, 二条やま岸, 祇園やま岸 and 富小路やま岸 麻布台ヒルズ, kyoto_nominokoji_yamagishi also records 銀座 呑小路やま岸, and とりの小路 やま岸 makes seven やま岸 shops');

// ================================================================ ラム＆ウイスキー
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26013926/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://rumlovers.net/';
  const H = day(['19:00', '02:00']);
  put({
    id: 'kyoto_rum_and_whisky_kiyamachi', name: 'ラム＆ウイスキー (Rum and Whisky)', category: 'OMNI',
    lat: 35.007005, lng: 135.770607, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A spirits bar — rum, whisky and fruit cocktails; no food or gluten information in the sources (2018–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Rum, whisky and seasonal fruit cocktails; no information on ingredients (2018–2026 reviews).',
    hours_raw: '19:00–2:00, Monday and Thursday–Sunday; closed Tuesday and Wednesday; hours may change (Tabelog). Reservations accepted (Tabelog). ¥500 charge (Tabelog). 10 seats: 8 at the counter and one table for two (Tabelog). Smoking allowed (Tabelog). Cards: JCB, AMEX, Diners; no e-money (Tabelog). Fourth floor of 光ビル on Kiyamachi south of Sanjo, up by elevator; 283 m from Sanjo Stn (Tabelog; 2018 review). Opened 30 May 2009 (Tabelog).',
    hours: { 0: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi south of Sanjo — 283 m from Sanjo Stn',
    cuisine: 'Rum-led spirits bar with whisky too: a back bar packed with rum bottles, likened by two reviewers to the rows of Sanjusangendo (2022, 2025 reviews) · the owner guides choices by taste — a cask-strength English rum, a French rum, a JM aged in Calvados barrels (October 2022) · Rhum J.M Single Barrel and Ardbeg Uigeadail (February 2025) · a rare Captain Morgan (December 2024) · seasonal fruit daiquiris and other fruit cocktails (2018 review)',
    website: SITE, gmaps: gm('Rum and Whisky 京都 木屋町'), menu_url: null,
    notes: '[Bar · Kiyamachi, a library of rum] Up an elevator from the noise of Kiyamachi, a quiet room of soft lamps and a back bar lined with rum — and some whisky — bottles, open until two in the morning. Tell the owner what you like and the pours follow: cask-strength rums, Martinique rhum, smoky Islay malts, or a seasonal fruit daiquiri. Quiet enough that one regular reads here. Ten seats; ¥500 charge; four drinks came to about ¥8,000 in 2022. Closed Tuesday and Wednesday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), who guides the rum choices'], origin: null,
      background: 'Tabelog gives the opening as 30 May 2009. Reviewers call it a rum specialist and the owner a "master of rum" (2022–2024 reviews).',
      philosophy: 'A 2018 reviewer felt in the owner a deep respect for alcohol, for people and for Kyoto culture.', specialty: 'Aged rum; seasonal fruit daiquiri.',
      anecdotes: [
        { text: 'An October 2022 visitor, meaning to have one quick drink, followed the owner’s recommendations through four rums, ending with a JM aged in Calvados barrels — about ¥8,000.', source: R + 'B445321797/' },
        { text: 'A January 2022 visitor had the bar almost alone for the whole evening, thanks to Omicron and heavy snow.', source: R + 'B445321797/' },
        { text: 'An August 2024 first-timer had never tasted a rum so strong that just touching it to the lips brought out the alcohol and the sweetness.', source: R + 'B491186515/' },
      ],
      japanese_sources_summary: '食べログ: ラム＆ウイスキー、バー、中京区木屋町三条下ル材木町188-3 光ビル4F、三条駅から283m、月・木〜日 19:00〜翌2:00、火・水休み、予約可、チャージ500円、10席 (カウンター8、2人掛けテーブル1)、喫煙可、カード可 (JCB、AMEX、Diners)、公式サイト rumlovers.net、2009年5月30日オープン。口コミ (2018〜2026年、英語): ラムの専門バー、棚いっぱいのラム、店主のおすすめ、Rhum J.M Single Barrel、Ardbeg Uigeadail、Captain Morgan、季節のフルーツのダイキリ、静かで本が読める。',
      confidence: 'medium', sources: [TB, SITE, R + 'B426450621/', R + 'B445321797/', R + 'B455984656/', R + 'B474875008/', R + 'B483432678/', R + 'B491186515/', R + 'B497860008/', R + 'B534814261/', R + 'B58847845/'] },
    cultural_comfort: { level: 'konnichiwa', note: '¥500 charge; smoking allowed; the owner helps choose by taste.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区木屋町三条下ル材木町188-3 光ビル4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through February 2025 and a September 2026 update.' },
    pin_source: `Tabelog ${TB} (35.007005, 135.770607); cross-checked: GSI 京都府京都市中京区材木町188番地 (lot) 22m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B445321797/'],
    price_note: 'No menu read; charge from Tabelog; spend from an October 2022 review.', last_checked: TODAY, items: [
      it('', '', 'Table charge', '¥500', 'Charges', '', '', 'Tabelog.', 'charge'),
      it('', '', 'Four rums chosen with the owner', '¥8,000', 'Drinks', '', '', 'Total for four drinks, October 2022.', 'rum_flight_4'),
    ] }, {
    cuisine: 'ラムを中心にウイスキーもそろうバー。カウンターの後ろにラムの瓶がぎっしり並び、二人の口コミがSanjusangendo の列にたとえる (2022年、2025年の口コミ)・店主が好みを聞いて選ぶ。カスクストレングスのイギリスのラム、フランスのラム、Calvados 樽熟成の JM (2022年10月)・Rhum J.M Single Barrel と Ardbeg Uigeadail (2025年2月)・珍しい Captain Morgan (2024年12月)・季節のフルーツのダイキリなどフルーツカクテル (2018年の口コミ)',
    neighborhood: '三条の南の木屋町。三条駅から283m',
    gf_detail: '要確認。ラム、ウイスキー、フルーツカクテルのバー。食べ物やグルテンの情報はない (2018〜2026年の口コミ)。',
    vegan_detail: '要確認。ラム、ウイスキー、季節のフルーツカクテル。材料の情報はない (2018〜2026年の口コミ)。',
    notes: '[バー・木屋町、ラムの図書館] にぎやかな木屋町からエレベーターで上がると、やわらかな灯りの静かな部屋に、ラム (とウイスキー) の瓶がずらりと並ぶ。深夜2時まで。好みを伝えれば店主が選んでくれる。カスクストレングスのラム、Martinique のラム、スモーキーなIslay のモルト、季節のフルーツのダイキリ。本を読みに来る常連もいるほど静か。10席、チャージ500円、2022年には4杯で約8,000円。火・水休み。',
  });
}

// ================================================================ ラーメン 大志
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26043878/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '22:30']);
  put({
    id: 'kyoto_ramen_taishi_kawaramachi', name: 'ラーメン 大志 (Ramen Taishi)', category: 'OMNI',
    lat: 34.99973, lng: 135.768117, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles in a soy-sauce broth; gyoza (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone broth with back fat, chashu; a raw egg on the mazesoba (2025–2026 reviews).',
    hours_raw: '11:00–22:30 daily, holidays included; closing days may vary (Tabelog). No reservations (Tabelog). Meal tickets from a machine at the door that takes cash, cards and QR codes (Tabelog; August 2026). 12 seats: 8 at the counter and a table for four at the back (Tabelog; August 2026). Non-smoking (Tabelog). English and Chinese menus, English-speaking staff, children welcome (Tabelog). On Kawaramachi-dori just north of Matsubara, 5 min from Hankyu Kawaramachi and Keihan Kiyomizu-Gojo (Tabelog). Opened 1 November 2025 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kawaramachi-dori just north of Matsubara — 5 min from Hankyu Kawaramachi Stn',
    cuisine: 'Kyoto-style back-fat shoyu ramen: a rich pork-bone soy broth with back fat, thin straight noodles, chashu, green onion and bean sprouts (July–August 2026 reviews) · shoyu ramen ¥930, seasoned egg ¥150 · a shio ramen and a black-shoyu bowl are also named (August–September 2026) · mazesoba ¥950 with thick wavy noodles, two kinds of chashu, minced meat, garlic chips and a raw egg (December 2025) · grilled gyoza ¥400, rice ¥250, pork rice bowl · Kirin small bottle ¥550 (August 2026)',
    website: null, gmaps: gm('ラーメン 大志 河原町松原'), menu_url: null,
    notes: '[Ramen · Kawaramachi-Matsubara, back-fat shoyu until 22:30] A small ramen counter opened in November 2025 on Kawaramachi between Shijo and Gojo, serving the Kyoto classic: a pork-bone shoyu with floating back fat over thin straight noodles (¥930 in August 2026). Diners split on it — some found the broth rich with a smoky charcoal-grilled chashu, others light, sweet-leaning or quite salty. There is also a mazesoba with thick noodles and a raw egg, plus gyoza and rice. Tickets from the machine; English menu; open daily to 22:30.',
    chef_bio: { chef_name: null, roles: ['Operator not named in the sources'], origin: null,
      background: 'Tabelog gives the opening as 1 November 2025.',
      philosophy: null, specialty: 'Back-fat pork-bone shoyu ramen; mazesoba.',
      anecdotes: [
        { text: 'An August 2026 parent, with nothing planned in the middle of Obon, came on a Kyoto ramen stamp rally because the daughter wanted ramen — and, taken with the shoyu, wanted to try the shio next.', source: R + 'B533804616/' },
        { text: 'An August 2026 visitor stopped in after a night of drinking and found the bowl lighter than it looked.', source: R + 'B535060636/' },
      ],
      japanese_sources_summary: '食べログ: ラーメン 大志、ラーメン、下京区河原町通松原上ル清水町281-1、阪急河原町駅・京阪清水五条駅から徒歩5分、毎日 11:00〜22:30、不定休、予約不可、カード可、12席 (カウンター8、テーブル4)、禁煙、英語・中国語メニュー、英語を話すスタッフ、2025年11月1日オープン。口コミ (2025〜2026年、英語): 背脂の豚骨醤油ラーメン930円、細ストレート麺、味玉150円、焼き餃子400円、ご飯250円、瓶ビール小550円、まぜそば950円、塩ラーメンもある、券売機。',
      confidence: 'medium', sources: [TB, R + 'B517098320/', R + 'B533562695/', R + 'B533804616/', R + 'B535060636/', R + 'B535697160/', R + 'B536064671/', R + 'B537346422/'] },
    cultural_comfort: { level: 'english', note: 'English and Chinese menus and English-speaking staff (Tabelog); ticket machine.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区河原町通松原上ル清水町281-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026. Three 2026 reviews on the listing describe a shop at Shijo Takakura or near Yamashina Stn and were not used.' },
    pin_source: `Tabelog ${TB} (34.99973, 135.768117); cross-checked: GSI 京都府京都市下京区清水町281番地 (lot) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533804616/', R + 'B536064671/', R + 'B517098320/'],
    price_note: 'No menu read; prices from December 2025 and August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Shoyu ramen', '¥930', 'Ramen', 'no', 'no', 'Back-fat pork-bone shoyu; August 2026.', 'shoyu_ramen'),
      it('', '', 'Seasoned egg', '¥150', 'Toppings', '', 'no', 'August 2026.', 'ajitama'),
      it('', '', 'Mazesoba', '¥950', 'Ramen', 'no', 'no', 'Thick wavy noodles, raw egg; December 2025.', 'mazesoba'),
      it('', '', 'Grilled gyoza', '¥400', 'Sides', 'no', 'no', 'August 2026.', 'gyoza'),
      it('', '', 'Rice', '¥250', 'Sides', '', '', 'August 2026.', 'rice'),
      it('', '', 'Kirin beer, small bottle', '¥550', 'Drinks', '', '', 'August 2026.', 'beer_small'),
    ] }, {
    cuisine: '京都らしい背脂醤油ラーメン: 背脂を浮かべた濃い豚骨醤油のスープに細ストレート麺、チャーシュー、ねぎ、もやし (2026年7〜8月の口コミ)・醤油ラーメン930円、味玉150円・塩ラーメンと黒醤油の一杯も (2026年8〜9月)・まぜそば950円、太い縮れ麺、2種のチャーシュー、ひき肉、フライドガーリック、生卵 (2025年12月)・焼き餃子400円、ご飯250円、豚丼・Kirin の瓶ビール小550円 (2026年8月)',
    neighborhood: '松原のすぐ北の河原町通。阪急河原町駅から徒歩5分',
    gf_detail: 'グルテンフリーではない。醤油スープの小麦の麺、餃子 (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。背脂入りの豚骨スープ、チャーシュー、まぜそばに生卵 (2025〜2026年の口コミ)。',
    notes: '[ラーメン・河原町松原、22時半までの背脂醤油] 2025年11月、四条と五条のあいだの河原町通に開いた小さなラーメン店。京都の定番、背脂を浮かべた豚骨醤油に細ストレート麺 (2026年8月に930円)。評価は分かれ、濃厚で炭火焼きのチャーシューが香ばしいという声もあれば、あっさり、甘め、かなりしょっぱいという声も。太麺と生卵のまぜそば、餃子、ご飯もある。券売機、英語メニューあり、毎日22時半まで。',
  });
}

// ================================================================ 壺味
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26023844/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_tsubomi_omiya', name: '壺味 (Tsubomi)', category: 'OMNI',
    lat: 35.004867, lng: 135.749019, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat-batter negiyaki, okonomiyaki and takoyaki are the core of the menu (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: octopus, wagyu, pork kimchi, and egg in the negiyaki (2026 reviews).',
    hours_raw: '17:00–23:00 (food L.O. 22:00, drinks 22:30), Monday, Tuesday and Thursday–Sunday; closed Wednesday; hours may change (Tabelog). Reservations accepted (Tabelog); a June 2026 visitor booked by phone. Usually crowded; long queues in cherry-blossom and autumn-leaf seasons, easier in summer (July 2026). The negiyaki is grilled to order and takes about 40 minutes to an hour (July–August 2026). Hot inside in summer (2026 reviews). Cash only — no cards, e-money or QR (Tabelog). No charge (Tabelog). 8 counter seats plus standing room for about 5; private hire up to 20 (Tabelog). Smoking allowed (Tabelog). Under an old fishing-tackle-shop sign with takoyaki lanterns (June 2026), 115 m from Omiya Stn (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Nishiki-Omiya — 115 m from Hankyu Omiya Stn',
    cuisine: 'Showa-era konamon counter: negiyaki, okonomiyaki and takoyaki on the teppan (2026 reviews) · the signature negiyaki ¥1,500, piled with Kujo green onions — three stalks a serving, cut to order by the owner’s mother — and grilled slowly until sweet (June–August 2026) · mixed okonomiyaki ¥1,200 · takoyaki, eight for ¥500 (August 2026; a June 2026 diner recalled eight large for ¥700), also with garlic · garlic-grilled octopus with cabbage, wagyu steak on the teppan, white corn, pork kimchi · highballs, beer, sake and shochu (Tabelog; 2026 reviews)',
    website: null, gmaps: gm('壺味 京都 大宮'), menu_url: null,
    notes: '[Okonomiyaki · Omiya, the hour-long negiyaki] A worn, Showa-era counter of eight seats near Omiya Station, under an old fishing-tackle sign, run by the owner and the owner’s mother. Come for the negiyaki (¥1,500): a mountain of Kujo green onions, cut to order and grilled slowly on the teppan for 40 minutes to an hour until sweet and creamy. Order takoyaki, garlic octopus or a mixed okonomiyaki while you wait among chatty regulars and travellers — the owner speaks English. Cash only; hot in summer; queues in the cherry-blossom and autumn seasons. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), at the teppan', 'The owner’s mother, who cuts the green onions'], origin: null,
      background: 'An August 2026 review calls it a long-established konamon shop; another says the owner and the owner’s mother run it. An April 2026 reviewer heard the owner speaking English with tourists and wondered whether it came from earlier work abroad.',
      philosophy: null, specialty: 'Negiyaki of Kujo green onions.',
      anecdotes: [
        { text: 'A July 2026 diner asked the owner about the negiyaki and learned that each one takes three stalks of Kujo green onion, thicker than the usual kind.', source: R + 'B531451114/' },
        { text: 'A June 2026 regular was greeted with "Thank you for coming on such a hot day," on a day that was actually cool, and noted that the owner’s mother cuts the green onions after each order.', source: R + 'B426217309/' },
        { text: 'A July 2026 visitor during the Gion Festival was waved inside by regulars drinking outside, and heard from the owner that summer is the easy season — cherry-blossom and autumn-leaf seasons bring long lines.', source: R + 'B535783936/' },
        { text: 'An April 2026 neighbour had walked past for years, too shy to go in; the owner’s "Sorry for the wait, I’ll cook the next batch for you!" settled that.', source: R + 'B528012109/' },
      ],
      japanese_sources_summary: '食べログ: 壺味、たこ焼き・お好み焼き、中京区錦大宮町152、大宮駅から115m、月・火・木〜日 17:00〜23:00 (料理L.O.22:00、ドリンクL.O.22:30)、水曜休み、予約可、カード・電子マネー・QR不可、サービス料・チャージなし、8席 (立ち飲み約5人)、貸切20人まで、喫煙可。口コミ (2026年、英語): 名物のねぎ焼き1,500円 (Kujo ねぎ3本、注文後に母が切る、焼き上がりまで40分〜1時間)、ミックスお好み焼き1,200円、たこ焼き8個500円、にんにくのたこ焼き、たこのガーリック焼き、和牛ステーキ、豚キムチ、店主と母で営む昭和の雰囲気の店、店主は英語で外国人客と話す、夏は店内が暑い。',
      confidence: 'medium', sources: [TB, R + 'B410645258/', R + 'B426217309/', R + 'B527788223/', R + 'B528012109/', R + 'B529464661/', R + 'B530127762/', R + 'B531451114/', R + 'B533695682/', R + 'B534750923/', R + 'B535783936/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only; smoking allowed; the owner speaks English with travellers (April 2026); allow up to an hour for the negiyaki.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区錦大宮町152',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.004867, 135.749019); cross-checked: GSI 京都府京都市中京区錦大宮町152番地 (lot) 54m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534750923/', R + 'B529464661/'],
    price_note: 'No menu read; prices from June and August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Negiyaki (Kujo green onion pancake)', '¥1,500', 'Teppan', 'no', 'no', 'August 2026; grilled to order, 40–60 min.', 'negiyaki'),
      it('', '', 'Mixed okonomiyaki', '¥1,200', 'Teppan', 'no', 'no', 'August 2026.', 'okonomiyaki_mix'),
      it('', '', 'Takoyaki, 8 pieces', '¥500', 'Takoyaki', 'no', 'no', 'August 2026; a June 2026 diner recalled ¥700 for eight large.', 'takoyaki_8'),
    ] }, {
    cuisine: '昭和の雰囲気の粉もんカウンター: 鉄板のねぎ焼き、お好み焼き、たこ焼き (2026年の口コミ)・名物のねぎ焼き1,500円はKujo ねぎをたっぷり、1枚に3本、注文後に店主の母が切り、甘くなるまでじっくり焼く (2026年6〜8月)・ミックスお好み焼き1,200円・たこ焼き8個500円 (2026年8月。2026年6月には大きめ8個700円という記憶も)、にんにく入りも・キャベツと焼くたこのガーリック焼き、和牛の鉄板ステーキ、白いとうもろこし、豚キムチ・ハイボール、ビール、日本酒、焼酎 (食べログ、2026年の口コミ)',
    neighborhood: '錦大宮。阪急大宮駅から115m',
    gf_detail: 'グルテンフリーではない。小麦の生地のねぎ焼き、お好み焼き、たこ焼きが中心 (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。たこ、和牛、豚キムチ、ねぎ焼きの卵 (2026年の口コミ)。',
    notes: '[お好み焼き・大宮、1時間かけるねぎ焼き] 大宮駅近く、古い釣具店の看板を掲げた昭和の8席のカウンター。店主と店主の母が営む。目当てはねぎ焼き (1,500円)。注文後に切るKujo ねぎを山のように盛り、鉄板で40分から1時間かけて甘くとろりと焼き上げる。待つあいだはたこ焼き、たこのガーリック焼き、ミックスお好み焼きを、にぎやかな常連や旅行者と。店主は英語も話す。現金のみ、夏は店内が暑く、桜と紅葉の季節は行列。水曜休み。',
  });
}

// ================================================================ 京料理 藤本
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26031062/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://kyoto-cuisine-fujimoto.com/'; const MG = 'https://guide.michelin.com/jp/ja/kyoto-region/kyoto/restaurant/kyoryori-fujimoto';
  const D = day(['18:00', '22:00']); const LD = day(['12:00', '14:00'], ['18:00', '22:00']);
  put({
    id: 'kyoto_kyoryori_fujimoto', name: '京料理 藤本 (Kyo Ryori Fujimoto)', category: 'MOM_AND_POP',
    lat: 35.010388, lng: 135.75678, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Omakase courses of sashimi, dashi soups and simmered dishes, with tempura and desserts such as mille-feuille; the kitchen took likes, dislikes and menu requests at booking (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood-led courses and soups on bonito and kombu dashi (2025–2026 reviews).',
    hours_raw: 'Official site: dinner 18:00–22:00 (L.O. 21:30) Monday, Tuesday and Thursday–Sunday; lunch 12:00–14:00 (L.O. 12:30) Tuesday, Friday and Sunday; closed Wednesday and public holidays. Tabelog differs: closed Tuesday as well as Wednesday. Reservations through the official site (Tabelog). Cash only — no cards, e-money or QR (official site; Michelin). 13 seats at a white-wood counter (Tabelog; official site). Non-smoking; no parking (official site). Off Shinmachi south of Oike, 266 m from Karasuma-Oike Stn (Tabelog). At this address since July 2018 (official site; Tabelog).',
    hours: { 0: D, 1: LD, 3: D, 4: LD, 5: D, 6: LD }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Shinmachi south of Oike — 266 m from Karasuma-Oike Stn',
    cuisine: 'Seasonal Kyoto cuisine as omakase at a white-wood counter, with a Michelin star after the 2018 move (official site) · evening omakase ¥14,300 (official site); lunch courses of ¥5,000, ¥7,000, ¥7,700 and ¥10,000 named (2025 reviews) · abalone cooked in sake to open, sesame tofu in soups on bonito and Rishiri kombu dashi, sashimi with sea urchin and tuna, hamo with Kamo eggplant, Manganji peppers in tempura, figs in sesame with black shichimi, Kagoshima roast beef, grilled fish under homemade karasumi, seasonal rice (2025–2026 reviews) · desserts from a cart — guests ask for "one of everything" (2025–2026 reviews) · sake chosen to taste (2025 review)',
    website: SITE, gmaps: gm('京料理 藤本 新町御池'), menu_url: null,
    notes: '[Kyoto cuisine · Shinmachi-Oike, a Michelin-starred counter run by a couple] A thirteen-seat white-wood counter just off Shinmachi south of Oike, run by the chef, Fujimoto, and the chef’s wife. The omakase follows the market: abalone simmered in sake, hamo and matsutake soup, sashimi with sea urchin, Manganji pepper tempura, grilled fish under homemade karasumi, and a dessert cart where guests ask for everything. Lunch (¥5,000–10,000 in 2025) is the bargain; dinner is ¥14,300. Give likes and dislikes when you book. Cash only; closed Wednesday.',
    chef_bio: { chef_name: 'Fujimoto', roles: ['Owner-chef', 'The chef’s wife, front of house'], origin: 'Kyoto (September 2026 review).',
      background: 'Per a September 2026 review: a Kyoto native who trained at restaurants including Shuhaku, went independent in 2008, and moved to the present address in 2018. The Michelin Guide says the family were vegetable wholesalers, so markets were familiar from childhood, and that trips to the market with a mentor taught the eye for ingredients. The official site dates the move to July 2018 and says a Michelin star followed.',
      philosophy: 'The Michelin Guide writes that the chef wants a menu rich in ingredients to convey the seasons and the people behind the ingredients.', specialty: 'Seasonal omakase; homemade karasumi; the dessert cart.',
      anecdotes: [
        { text: 'A September 2025 diner who had disliked conger eel in Tokyo, where it came boiled with plum paste, came round here over grilled conger eel and tempura — and ordered a Nagasaki sake, Hiran, for home after the shop introduced it.', source: R + 'B514883217/' },
        { text: 'At a holiday lunch in July 2026, with the chef cooking solo, the dishes came out together, and two guests drank seven cups of sake for ¥20,680 in all.', source: R + 'B532459012/' },
        { text: 'A November 2025 guest on a third visit took the dessert option of “everything” — a Shine Muscat mille-feuille and a monaka made on the spot.', source: R + 'B473170263/' },
      ],
      japanese_sources_summary: '食べログ: 京料理 藤本、日本料理、中京区新町通御池下ル神明町72 エリタージュ新町1F、烏丸御池駅から266m、予約は公式サイトから、カード不可、13席、禁煙、2018年7月2日オープン。公式サイト: 夜18:00〜22:00 (月・火・木〜日)、昼12:00〜14:00 (火・金・日)、水曜・祝日休み、夜のおまかせ14,300円、白木のカウンター、2018年7月に移転、移転後もミシュランの星。ミシュランガイド: 実家が野菜の卸業で幼い頃から市場に親しみ、師匠と市場へ行き目利きを学んだ、現金のみ。口コミ (2025〜2026年、英語): 夫婦で営む、店主の Fujimoto さんは京都出身で Shuhaku などで修業、2008年に独立、鮑の酒煮、胡麻豆腐、鱧と松茸、自家製からすみ、デザートワゴン、昼のコース5,000〜10,000円。',
      confidence: 'medium', sources: [TB, SITE + 'ja', SITE + 'en', MG, R + 'B473170263/', R + 'B513481354/', R + 'B514883217/', R + 'B517900369/', R + 'B525566104/', R + 'B530108518/', R + 'B532459012/', R + 'B535463971/', R + 'B535781492/', R + 'B537877063/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book through the official site and give likes and dislikes; cash only; omakase only.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区新町通御池下ル神明町72 エリタージュ新町 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.010388, 135.75678); cross-checked: GSI 京都府京都市中京区神明町72番地 (lot) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [SITE + 'en', R + 'B473170263/', R + 'B517900369/'],
    price_note: 'Dinner price from the official site; lunch prices from November 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Evening omakase', '¥14,300', 'Courses', 'ask', 'no', 'Official site.', 'omakase_dinner'),
      it('', '', 'Lunch course', '¥7,700', 'Courses', 'ask', 'no', 'November 2025; ¥5,000, ¥7,000 and ¥10,000 courses also named.', 'lunch_course'),
    ] }, {
    cuisine: '白木のカウンターで味わう季節の京料理のおまかせ。2018年の移転後にミシュランの星 (公式サイト)・夜のおまかせ14,300円 (公式サイト)、昼のコースは5,000円、7,000円、7,700円、10,000円 (2025年の口コミ)・鮑の酒煮の先付、鰹と Rishiri の昆布の出汁に胡麻豆腐の椀、雲丹や鮪の造り、鱧と Kamo なす、Manganji とうがらしの天ぷら、胡麻をまとった無花果と黒七味、Kagoshima のローストビーフ、自家製からすみをのせた焼き魚、季節のご飯 (2025〜2026年の口コミ)・デザートはワゴンから、「全部」と頼む客も (2025〜2026年の口コミ)・好みに合わせて選ぶ日本酒 (2025年の口コミ)',
    neighborhood: '御池の南の新町通。烏丸御池駅から266m',
    gf_detail: '要確認。造り、出汁の椀、炊き合わせ、天ぷら、ミルフィーユなどのデザートを含むおまかせ。予約時に好き嫌いや希望を聞いてくれた (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。魚介中心のコースと鰹と昆布の出汁 (2025〜2026年の口コミ)。',
    notes: '[京料理・新町御池、夫婦で営むミシュランのカウンター] 御池の南、新町通沿いの白木のカウンター13席。店主で料理人の Fujimoto さんと妻が営む。市場に合わせたおまかせは、鮑の酒煮、鱧と松茸の椀、雲丹の造り、Manganji とうがらしの天ぷら、自家製からすみの焼き魚、そして「全部」と頼みたくなるデザートワゴン。昼 (2025年に5,000〜10,000円) がお得、夜は14,300円。好き嫌いは予約時に。現金のみ、水曜休み。',
  });
}

save();
