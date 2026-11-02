// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), core queue, circle shin-osaka; worker osw7 (lane: Tabelog id even), batch 6.
//   + 次男坊ラーメン Jinanbo Ramen (tonkotsu, tantan and shoyu ramen in iron pots east of Shin-Osaka; late opening)
//   + 昴 新大阪店 Subaru Shin osaka ten (iekei-style tonkotsu shoyu and tsukemen with free large portions, open 11:00–24:00)
//   + 時屋 Toki Ya (rich pork tsukemen, Tabelog Ramen 100 2019–2025, opened 2009)
//   + 中華そば ココカラサキゑ Chuka Soba Kokokara Sakie (whole-chicken shoyu chuka soba, Ramen 100 2023–2025; ramen block)
//   - skipped 27002352 麺匠 はなみち 新大阪店: chain (新大阪店, 十三店, 市岡店 and 東三国店 in the osaka-kita crawl).
//   Lane check: every id above is even. Taken in queue order (nearest first) after the chain skip.
//   Chain check: Jinanbo and Kokokara Sakie name no other shop. Subaru: the listing's name carries "新大阪店" and reviewers guess at a
//   chain or franchise ("one of the better options among the chain restaurants", June 2026), but no other Subaru shop is named
//   anywhere I read, its site menyasubaru.com no longer resolves, and a web search on 2026-11-01 finds none; kept, flagged in the
//   report. (osaka_chuka_soba_subaru_honmachibashi, 中華そば 昴 in Honmachibashi, is a different whole-chicken shop with no stated
//   link.) Toki Ya: the listing says its social posts are "written for the entire group", and an October 2026 diner mentions a
//   closed Tenma branch; the group's site (tokiya.jp.net) shows three or four shop names under different brands, so a small group.
//   None of the four is in data/osaka.json (grep by id, name and address, 2026-11-01).
//   Ramen blocks: Kokokara Sakie's whole-chicken shoyu is described on all six dimensions in its reviews, so it has a full block.
//   Jinanbo, Subaru and Toki Ya do not (no clarity or aroma for Jinanbo, no aroma for Subaru, no oil for Toki Ya), so per the
//   2026-11-01 lesson they have none and the bowls are described in cuisine/notes.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw7-6');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27002352', 'chain: 麺匠 はなみち, with 新大阪店, 十三店, 市岡店 and 東三国店 in the osaka-kita crawl');

// ================================================================ 次男坊ラーメン
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27022846/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '15:00'], ['18:00', '00:00']);
  put({
    id: 'osaka_jinanbo_ramen_higashinakajima', name: '次男坊ラーメン (Jinanbo Ramen)', category: 'OMNI',
    lat: 34.729937, lng: 135.503247, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat ramen noodles; sets add fried rice or kara-age.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: tonkotsu-based broths with minced meat and chashu.',
    hours_raw: 'Daily 11:00–15:00 and 18:00–24:00; hours may change (Tabelog); a June 2026 diner says it is open until 1 am. No reservations; no cards or e-money; QR payments accepted (Tabelog). Counter seating and big tables, including an octagonal one (June 2026); smoking allowed (Tabelog). Reviews go back to 2007 on a ramen database, per a June 2026 diner.',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: '東中島1-12-30 — 10 min from the JR Shin-Osaka east exit (Tabelog); a glass-fronted shop with banners on the main street south-east of the station, past the JR tracks (May 2026), reached over the footbridge toward the Shin-Osaka Station Hotel (June 2026)',
    cuisine: 'Ramen in tonkotsu, dandan, shio and shoyu, plus the house "Jinanbo" bowl (June 2026) · Jinanbo ramen: a tonkotsu base with spicy miso and sautéed minced meat, served in a cast-iron pot (May and June 2026); "Jinanbo All Toppings" with chashu, minced meat, seasoned egg, wood ear, menma and green onion ¥1,350 (June 2026); the large size comes in a mortar-like bowl (September 2026) · tonkotsu ramen, mild for the style (July and September 2026) · tantanmen, creamy (May 2026); tantan mazesoba with medium-thick wavy noodles, minced meat, nori and chashu (May 2026) · sets with fried rice made with minced meat, ¥1,300 (May 2026), or kara-age (September 2026); Tianjin rice set (April 2026)',
    website: null, gmaps: gm('次男坊ラーメン 東中島1-12-30'), menu_url: null,
    notes: "[Ramen · Higashinakajima, tonkotsu in an iron pot] A long-running ramen shop on the main road south-east of Shin-Osaka Station, with reviews going back to 2007 (June 2026), open till midnight or later. The house \"Jinanbo\" ramen is a tonkotsu base with spicy miso and minced meat, brought bubbling in a cast-iron pot, \"neither a true pork bone ramen nor a dan dan noodle\" to one doubter (September 2026). There is also a mild tonkotsu, a creamy tantanmen, a tantan mazesoba with chewy wavy noodles, and shio and shoyu, usually ordered with fried rice made with minced meat; the half portion is close to a full one (May 2026). Portions are big; lunch fills it to 80% (May 2026). Smoking is allowed.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null, background: 'No shop description on Tabelog. A June 2026 diner notes reviews on a ramen database dating back to 2007, "so it seems this place has been in business for nearly 20 years"; staff explained that the minced meat in the Jinanbo is milder than in the dandan (June 2026).', philosophy: null, specialty: 'Jinanbo ramen in a cast-iron pot; tantan mazesoba.',
      anecdotes: [
        { text: '"It\'s also unique that it\'s served in a cast iron pot instead of a regular bowl." — June 2026, the Jinanbo All Toppings for JPY 1,350.', source: R + 'B529987774/' },
        { text: '"The half rice … was actually double what I imagined! It was practically a full portion of fried rice." — May 2026, with the tantan mazesoba.', source: R + 'B528795556/' },
        { text: '"They are open until 1 AM, making it perfect for a late-night snack." — June 2026.', source: R + 'B532276315/' },
      ],
      japanese_sources_summary: '食べログ: 次男坊ラーメン、ラーメン、大阪市東淀川区東中島1-12-30、JR 新大阪駅東口から徒歩10分、毎日11:00〜15:00、18:00〜24:00、予約不可、カード・電子マネー不可、QR 可、カウンター、喫煙可。口コミ(2026年4月〜9月): とんこつ、担々、塩、醤油と看板の「次男坊」、次男坊は辛味噌とそぼろのとんこつで鉄鍋で出てくる、Jinanbo All Toppings 1,350円、大盛りはすり鉢のような器、マイルドなとんこつ、クリーミーな担々麺、担々まぜそば (中太のちぢれ麺)、そぼろのチャーハンのセット1,300円、kara-age のセット、天津飯のセット、大きなテーブル、2007年からの口コミがあるらしい、夜1時までという声も。',
      confidence: 'medium', sources: [TB, R + 'B526972947/', R + 'B528698553/', R + 'B528795556/', R + 'B529987774/', R + 'B531022239/', R + 'B531587070/', R + 'B532078116/', R + 'B532276315/', R + 'B535974051/', R + 'B536568090/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A wide ramen menu with sets; staff recommend sets. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市東淀川区東中島1-12-30',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市東淀川区東中島一丁目12番30号 (go) 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B529987774/', R + 'B528698553/'],
    price_note: 'Prices from May and June 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Jinanbo All Toppings (in a cast-iron pot)', '¥1,350', 'Ramen', 'no', 'no', 'June 2026.', 'jinanbo_zenbu'),
      it('', '', 'Jinanbo ramen with fried rice set', '¥1,300', 'Sets', 'no', 'no', 'May 2026.', 'jinanbo_set'),
      it('', '', 'Tonkotsu ramen', '', 'Ramen', 'no', 'no', 'July and September 2026.', 'tonkotsu'),
      it('', '', 'Tantan mazesoba', '', 'Ramen', 'no', 'no', 'May 2026.', 'tantan_maze'),
    ] }, {
    cuisine: 'とんこつ、担々、塩、醤油のラーメンと、看板の「次男坊」(2026年6月)・次男坊ラーメン: とんこつのスープに辛味噌と炒めたそぼろ、鉄鍋で出てくる (2026年5月と6月)。チャーシュー、そぼろ、味玉、きくらげ、メンマ、ねぎの「Jinanbo All Toppings」1,350円 (2026年6月)。大盛りはすり鉢のような器 (2026年9月)・とんこつラーメン、とんこつにしてはマイルド (2026年7月と9月)・クリーミーな担々麺 (2026年5月)。中太のちぢれ麺、そぼろ、のり、チャーシューの担々まぜそば (2026年5月)・そぼろのチャーハンのセット1,300円 (2026年5月)、kara-age のセット (2026年9月)、天津飯のセット (2026年4月)',
    neighborhood: '東中島1-12-30。JR 新大阪駅東口から徒歩10分 (食べログ)。駅の南東、JR の線路をくぐった先の大通りぞいの、のぼりのあるガラス張りの店 (2026年5月)。Shin-Osaka Station Hotel のほうへ歩道橋をわたって (2026年6月)',
    gf_detail: 'グルテンフリーではありません。ラーメンは小麦の麺で、セットにはチャーハンか kara-age がつく。',
    vegan_detail: 'ヴィーガンではありません。とんこつのスープに、そぼろとチャーシュー。',
    notes: '[ラーメン・東中島、鉄鍋のとんこつ] 新大阪駅の南東の大通りぞいの、長く続くラーメン店で、2007年からの口コミがあるという (2026年6月)。夜は12時かそれ以降まで。看板の「次男坊」は、とんこつに辛味噌とそぼろをのせて、鉄鍋でぐつぐつのまま出てくる。「とんこつでも担々麺でもない」という人も (2026年9月)。ほかにマイルドなとんこつ、クリーミーな担々麺、もちもちのちぢれ麺の担々まぜそば、塩と醤油も。たいていはそぼろのチャーハンのセットで、半分でもほぼ一人前 (2026年5月)。量は多め。昼は8割ほど埋まる (2026年5月)。喫煙可。',
  });
}

// ================================================================ 昴 新大阪店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27077536/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '00:00']);
  put({
    id: 'osaka_subaru_shin_osaka', name: '昴 新大阪店 (Subaru Shin osaka ten)', category: 'OMNI',
    lat: 34.727771, lng: 135.498974, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat ramen and tsukemen noodles; sets add fried rice, gyoza and kara-age.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: tonkotsu shoyu and seafood-and-pork-bone broths with chashu.',
    hours_raw: 'Daily 11:00–24:00, until sold out; open all year (Tabelog). No reservations; cash only, no cards, e-money or QR (Tabelog); buy a ticket at the machine inside (May 2026). 26 seats at counters (Tabelog). Smoking area: weekdays from 14:00, all day on Saturdays, Sundays and holidays (Tabelog). One bowl of rice free, the second ¥150 (June 2026). Busy at lunch (June 2026). Opened 3 December 2013 (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: '西中島3-23-9 — 2 min from Exit 1 of Nishinakajima-Minamigata Stn, 7 min from Shin-Osaka (Tabelog)',
    cuisine: 'Iekei-style tonkotsu shoyu ramen and tsukemen (2025–2026) · tonkotsu shoyu ramen: thick or thin noodles, firmness, strength and chicken oil to order, with a free bowl of rice (2025–2026); a layer of oil, chashu and quail eggs on the house tonkotsu (July 2026); tonkotsu shio with seasoned egg ¥980 (June 2026); nori tonkotsu shoyu (September 2025) · tsukemen in a seafood and pork-bone dip with thick noodles, regular 350 g and large 550 g free (October 2026), up to 750 g free (June 2026); Super Rich Seafood Tsukemen SP ¥1,180 (May 2026); tsukemen special with chashu (July 2026) · sets with half fried rice, or rice, gyoza and kara-age (July and September 2026) · pickled ginger on the table (2025)',
    website: null, gmaps: gm('昴 新大阪店 西中島3-23-9'), menu_url: null,
    notes: "[Ramen · Nishinakajima, iekei bowls and free big tsukemen till midnight] A 26-seat ramen counter two minutes from Nishinakajima-Minamigata, open 11:00 to midnight every day since 2013. The ramen is in the iekei mould, a rich tonkotsu shoyu where you choose thick or thin noodles, firmness, strength and oil, with a free bowl of rice, \"more like Hakata Tonkotsu Ramen than Yokohama Iekei\" to one diner (September 2025). Many come for the tsukemen: thick noodles in a seafood and pork-bone dip, with the large 550 g portion free and up to 750 g on request (2026), though the dip can run short. Fast, filling and cash only; smoking is allowed in the afternoon on weekdays and all day at weekends.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null, background: 'No shop description on Tabelog; opened 3 December 2013 (Tabelog). The listing links menyasubaru.com, which no longer resolved on 2026-11-01. Reviewers describe the style as "Yokohama-style" or iekei (2025–2026) and guess at a chain or franchise (June and August 2026); no other branch is named in any source read.', philosophy: null, specialty: 'Iekei-style tonkotsu shoyu; tsukemen with free large portions.',
      anecdotes: [
        { text: '"As always, I ordered the extra-large serving of 750 grams. One of the great things about this place is that you can choose your portion size for free." — June 2026, the tsukemen.', source: R + 'B500525701/' },
        { text: '"The broth was rich with soy sauce flavor and very delicious. It felt more like Hakata Tonkotsu Ramen than Yokohama Iekei." — September 2025.', source: R + 'B513040659/' },
        { text: '"After drinking at two places, I visited this restaurant for a late-night ramen fix for the first time." — June 2026, tonkotsu shoyu with thick noodles.', source: R + 'B529871212/' },
      ],
      japanese_sources_summary: '食べログ: 昴 新大阪店、ラーメン・つけ麺、大阪市淀川区西中島3-23-9、西中島南方駅1番出口から2分、新大阪駅から徒歩7分、毎日11:00〜24:00、売り切れまで、年中無休、予約不可、現金のみ、26席 (カウンター)、分煙 (平日14時から、土日祝は終日喫煙可)、2013年12月3日オープン、サイトは menyasubaru.com (2026年11月1日はつながらない)。口コミ(2025年2月〜2026年10月): 家系スタイルのとんこつ醤油、太麺か細麺、かたさ、味の濃さ、鶏油を選べる、ごはん1杯無料 (2杯目150円)、味玉のとんこつ塩980円、つけ麺は魚介と豚骨のつけ汁に太麺、並350g、大550g は無料、750g まで無料という声も、Super Rich Seafood Tsukemen SP 1,180円、半チャーハン、gyoza、kara-age のセット、昼は混む、チェーンかという声も。',
      confidence: 'medium', sources: [TB, R + 'B500525701/', R + 'B505270348/', R + 'B513040659/', R + 'B529871212/', R + 'B531021118/', R + 'B532260881/', R + 'B532520650/', R + 'B533348590/', R + 'B536391573/', R + 'B536636841/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine (cash only); noodles, firmness and strength chosen when ordering. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島3-23-9',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島三丁目23番9号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B505270348/', R + 'B536636841/'],
    price_note: 'Prices from May and June 2026 reviews (tax included).', last_checked: TODAY, items: [
      it('', '', 'Tonkotsu shio ramen with seasoned egg', '¥980', 'Ramen', 'no', 'no', 'June 2026.', 'tonkotsu_shio'),
      it('', '', 'Tonkotsu shoyu ramen (iekei style)', '', 'Ramen', 'no', 'no', '2025–2026.', 'tonkotsu_shoyu'),
      it('', '', 'Super Rich Seafood Tsukemen SP, large 550 g free', '¥1,180', 'Tsukemen', 'no', 'no', 'May 2026.', 'tsukemen_sp'),
      it('', '', 'Tsukemen, regular 350 g or large 550 g', '', 'Tsukemen', 'no', 'no', 'October 2026.', 'tsukemen'),
    ] }, {
    cuisine: '家系スタイルのとんこつ醤油ラーメンとつけ麺 (2025〜2026年)・とんこつ醤油ラーメン: 太麺か細麺、かたさ、味の濃さ、鶏油を選べて、ごはん1杯は無料 (2025〜2026年)。看板のとんこつは油の層、チャーシュー、うずらの卵 (2026年7月)。味玉のとんこつ塩980円 (2026年6月)。のりのとんこつ醤油 (2025年9月)・魚介と豚骨のつけ汁に太麺のつけ麺。並350g と大550g は無料 (2026年10月)、750g まで無料という声も (2026年6月)。Super Rich Seafood Tsukemen SP 1,180円 (2026年5月)。チャーシューのつけ麺の特製 (2026年7月)・半チャーハン、またはごはん、gyoza、kara-age のセット (2026年7月と9月)・卓上に紅しょうが (2025年)',
    neighborhood: '西中島3-23-9。西中島南方駅1番出口から2分、新大阪から徒歩7分 (食べログ)',
    gf_detail: 'グルテンフリーではありません。ラーメンとつけ麺は小麦の麺で、セットにはチャーハン、gyoza、kara-age がつく。',
    vegan_detail: 'ヴィーガンではありません。とんこつ醤油や魚介と豚骨のスープに、チャーシュー。',
    notes: '[ラーメン・西中島、家系の一杯と無料の大盛りつけ麺を夜12時まで] 西中島南方駅から2分の26席のラーメン店で、2013年から毎日11時から夜12時まで。ラーメンは家系スタイルの濃いとんこつ醤油で、太麺か細麺、かたさ、濃さ、油を選べて、ごはんは1杯無料。「Yokohama の家系より Hakata のとんこつに近い」という人も (2025年9月)。多くの人のお目当てはつけ麺: 魚介と豚骨のつけ汁に太麺で、大盛り550g が無料、頼めば750g まで (2026年)。ただ、つけ汁がたりなくなることも。早くて量が多く、現金のみ。平日は午後から、週末は一日中喫煙可。',
  });
}

// ================================================================ 時屋
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27040424/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://tokiya.jp.net/';
  const W = day(['11:30', '14:50'], ['18:00', '22:20']); const E = day(['11:30', '22:20']);
  put({
    id: 'osaka_tokiya_nishinakajima', name: '時屋 (Toki Ya)', category: 'OMNI',
    lat: 34.728340, lng: 135.501227, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat tsukemen noodles.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork and chicken tsukemen dips of pork bone and seafood, with chashu.',
    hours_raw: 'Mon–Fri 11:30–14:50 and 18:00–22:20; Sat and Sun 11:30–22:20 (Tabelog). No reservations; cash only (Tabelog); buy a ticket first, then join the line (October 2026). 15 seats: 7 at the counter, one table for 4 and two for 2; non-smoking; children, babies and strollers welcome (Tabelog). A line is normal, even on weekday evenings; it moves fast, about ten minutes for seven people at 21:00 (October 2026). Opened 10 March 2009 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: '西中島5-1-4, ground floor — 4 min from Nishinakajima-Minamigata Stn, 6 min from Hankyu Minamikata, about 8 min from JR Shin-Osaka (Tabelog)',
    cuisine: 'Tsukemen: pork tsukemen in a very rich dip of pork bone and seafood, with tender braised pork in it (October 2026); Toki Ya Special Pork Tsukemen ¥1,550 (October 2026); pork tsukemen special with plenty of chashu (October 2026); pork spicy tsukemen, spice level 2, ¥1,150 (October 2026) · chicken tsukemen, a lighter, slightly tangy dip, special with nori and chashu (October 2026) · smooth medium-thick noodles, dipped lightly because the dip is strong (October 2026); seared chashu, soft-boiled egg and kaiware on the special (October 2026) · a small bowl of rice at the end to pour the leftover dip over, included (October 2026) · bottled beer (October 2026)',
    website: SITE, gmaps: gm('時屋 西中島5-1-4'), menu_url: null,
    notes: "[Tsukemen · Nishinakajima, rich pork tsukemen since 2009] A 15-seat tsukemen shop between Nishinakajima-Minamigata and Shin-Osaka, open since 2009 and a Tabelog Ramen 100 pick every year from 2019 to 2025, with a line most lunchtimes and many evenings. The pork tsukemen is the reason: a very rich dip of pork bone and seafood with braised pork in it, so the shop's own instructions tell you to dip the smooth medium-thick noodles only lightly (October 2026); a lighter, slightly tangy chicken tsukemen is the alternative. Every bowl ends with a bite of rice to pour the last of the dip over. Buy your ticket before you queue; the line moves fast. Cash only. Open till 22:20, all day at weekends.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null, background: 'Per the Tabelog listing: opened 10 March 2009; social media posts on Facebook and Instagram "tend to be written for the entire group"; Tabelog Ramen WEST 100 2019–2022 and Ramen OSAKA 100 2023–2025. An October 2026 diner regrets that "the Tenma location closed down". Reviewers note a detailed written guide to the menu and to how lightly to dip (October 2026).', philosophy: null, specialty: 'Pork tsukemen; chicken tsukemen; rice for the leftover dip.',
      anecdotes: [
        { text: '"What stood out to me was the detailed explanation of the menu and how to enjoy the tsukemen." — October 2026, the Toki Ya Special Pork Tsukemen for JPY 1,550.', source: R + 'B538159809/' },
        { text: '"There was a line of seven people waiting at that hour, which shows how popular this place is." — October 2026, just before 21:00, seated in about ten minutes.', source: R + 'B537909417/' },
        { text: '"The final broth rice was creamy and surprisingly good." — October 2026, the pork spicy tsukemen for JPY 1,150.', source: R + 'B448682725/' },
      ],
      japanese_sources_summary: '食べログ: 時屋、つけ麺、食べログ ラーメン WEST 百名店 2019〜2022、ラーメン OSAKA 百名店 2023〜2025、大阪市淀川区西中島5-1-4 1F、西中島南方駅から約4分、阪急 南方駅から6分、JR 新大阪駅から約8分、月〜金11:30〜14:50、18:00〜22:20、土日11:30〜22:20、予約不可、現金のみ、15席 (カウンター7、テーブル8)、禁煙、子ども可、2009年3月10日オープン、SNS はグループ全体の記事が多い。口コミ(2026年10月〜11月): 先に食券を買って並ぶ、行列は早く進む、豚つけ麺は豚骨と魚介のとても濃いつけ汁に煮豚、Toki Ya Special Pork Tsukemen 1,550円、辛い豚つけ麺 (辛さ2) 1,150円、鶏つけ麺は少し酸味のあるさっぱりしたつけ汁、なめらかな中太麺、つけ汁は軽くつける、食べ方の説明、あぶったチャーシュー、半熟卵、かいわれ、最後に残ったつけ汁をかけるごはん、瓶ビール、Tenma の店は閉店。',
      confidence: 'medium', sources: [TB, R + 'B448682725/', R + 'B537823294/', R + 'B537909417/', R + 'B537947307/', R + 'B537980349/', R + 'B538159809/', R + 'B538204016/', R + 'B538298461/', R + 'B538407730/', R + 'B538466510/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine first, then the line; a written guide explains how to dip. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島5-1-4 １Ｆ',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (Ramen 100 2025); reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島五丁目1番4号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B538159809/', R + 'B448682725/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Toki Ya Special Pork Tsukemen', '¥1,550', 'Tsukemen', 'no', 'no', 'October 2026.', 'tokubetsu_buta'),
      it('', '', 'Pork tsukemen', '', 'Tsukemen', 'no', 'no', 'October 2026.', 'buta_tsukemen'),
      it('', '', 'Pork spicy tsukemen (regular, spice level 2)', '¥1,150', 'Tsukemen', 'no', 'no', 'October 2026.', 'buta_kara'),
      it('', '', 'Chicken tsukemen special', '', 'Tsukemen', 'no', 'no', 'October 2026.', 'tori_tsukemen'),
    ] }, {
    cuisine: 'つけ麺: 豚骨と魚介のとても濃いつけ汁に煮豚の入った豚つけ麺 (2026年10月)。Toki Ya Special Pork Tsukemen 1,550円 (2026年10月)。チャーシューたっぷりの豚つけ麺の特製 (2026年10月)。辛い豚つけ麺、辛さ2で1,150円 (2026年10月)・鶏つけ麺は少し酸味のある軽いつけ汁、のりとチャーシューの特製 (2026年10月)・なめらかな中太麺。つけ汁が濃いので軽くつける (2026年10月)。特製はあぶったチャーシュー、半熟卵、かいわれ (2026年10月)・最後に残ったつけ汁をかける小さなごはんつき (2026年10月)・瓶ビール (2026年10月)',
    neighborhood: '西中島5-1-4 の1階。西中島南方駅から4分、阪急 南方駅から6分、JR 新大阪駅から約8分 (食べログ)',
    gf_detail: 'グルテンフリーではありません。つけ麺は小麦の麺。',
    vegan_detail: 'ヴィーガンではありません。豚骨と魚介の豚と鶏のつけ汁に、チャーシュー。',
    notes: '[つけ麺・西中島、2009年からの濃厚な豚つけ麺] 西中島南方駅と新大阪駅のあいだにある15席のつけ麺の店で、2009年から。食べログのラーメン百名店に2019年から2025年まで毎年選ばれていて、昼はたいてい、夜も行列ができる。目当ては豚つけ麺: 豚骨と魚介のとても濃いつけ汁に煮豚が入っていて、店の説明にもあるように、なめらかな中太麺は軽くつけるのがいい (2026年10月)。少し酸味のある軽い鶏つけ麺もある。最後は小さなごはんに残ったつけ汁をかけて。並ぶ前に食券を買う。列は早く進む。現金のみ。22時20分まで、週末は通し営業。',
  });
}

// ================================================================ 中華そば ココカラサキゑ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27105350/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:30', '14:30'], ['18:00', '21:00']);
  put({
    id: 'osaka_kokokara_sakie_nishimiyahara', name: '中華そば ココカラサキゑ (Chuka Soba Kokokara Sakie)', category: 'OMNI',
    lat: 34.733557, lng: 135.490707, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles from Menya Teigaku in Kyoto (October 2026); the chashu bowl is topped with mayonnaise.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: whole-chicken broths of Hinai and Men-suke chicken with pork chashu; seafood, squid and sanma bowls.',
    hours_raw: 'Wed–Sun 11:30–14:30 and 18:00–21:00; closed Mon and Tue; hours may change (Tabelog); one September 2026 diner found it shut one day and checked Instagram before going. No reservations; cash only (Tabelog); buy a ticket at the machine at the entrance (2026). Counter and table seats; non-smoking (Tabelog); children\'s cutlery and table seats (October 2026). When busy, write your name on the list and come back (September 2026). Morning ramen once a month on the second Sunday, by lottery, until sold out; queue on the road side, not by the apartments; no preschool children when there is a queue outside (October 2026). Opened 9 June 2018 (Tabelog).',
    hours: { 2: W, 3: W, 4: W, 5: W, 6: W }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: '西宮原1-7-39 — 10 min from Shin-Osaka (JR and Midosuji Line) (Tabelog); west from the north exit of Shin-Osaka Station (September 2026), also walkable from Hankyu Mikuni (October 2026)',
    cuisine: 'Whole-chicken shoyu chuka soba and monthly specials · marudori (whole-chicken) shoyu: Hinai chicken broth ¥1,100 (October 2026); with flavoured egg ¥1,250, large noodles +¥150, Kujo green onion +¥200 (October 2026); special with two slices of rare chashu, egg, meat wontons, menma and green onion (September 2026) · a clear broth of Hinai and Men-suke chicken, glossy with chicken oil (2026); on a September 2026 "Chicken Day", Hinai and Men-suke chicken with a dashi of Rishiri kombu and shiitake · medium-thin straight noodles from Menya Teigaku (October 2026) · rare pork-shoulder chashu (October 2026); chicken chashu (September 2026) · special salt seafood ramen, oil soba (October 2026); squid-and-niboshi ramen and a limited cold dried-squid ramen (October 2026) · morning ramen, sanma and Hinai chicken ¥1,400 (October 2026) · chashu rice bowl with mayonnaise and shichimi ¥480 (October 2026) · Sapporo Lager, with a small plate of menma (October 2026)',
    website: null, gmaps: gm('中華そば ココカラサキゑ 西宮原1-7-39'), menu_url: null,
    notes: "[Ramen · Nishimiyahara, whole-chicken shoyu from a Mutahiro alumnus] A bright, spotless chuka soba shop a ten-minute walk west of Shin-Osaka Station, opened in 2018 by a former manager of Chuka Soba Mutahiro (October 2026) and on Tabelog's Ramen 100 list from 2023 to 2025. The bowl to order is the marudori shoyu: a clear, chicken-oil-glossy broth of Hinai and Men-suke chicken, Kyoto noodles from Menya Teigaku, rare pork-shoulder chashu and Kujo green onion, ¥1,100–1,250 (October 2026). Specials change often (squid and niboshi, salt seafood, oil soba), and once a month on the second Sunday there is a lottery morning ramen, sanma in October 2026. One devotee has logged 155 visits (October 2026). The owner cooks each bowl; when it's busy, write your name and wander. Cash only; closed Monday and Tuesday.",
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed) and floor staff'], origin: null, background: 'Per an October 2026 review: "opened in 2018 by the former manager of the renowned \'Chuka Soba Mutahiro\' in Osaka"; "The owner was in the kitchen skillfully preparing each bowl with great care"; noodles from Menya Teigaku in Kyoto. Opened 9 June 2018; Tabelog Ramen OSAKA 100 2023–2025 (Tabelog).', philosophy: null, specialty: 'Marudori (whole-chicken) shoyu ramen; monthly morning ramen.',
      anecdotes: [
        { text: '"Wow, the broth, concentrated with the flavors of Hinai chicken and Men-suke chicken, is incredibly delicious!" — October 2026, a diner on visit 155, the marudori shoyu with flavoured egg for JPY 1,250.', source: R + 'B381447962/' },
        { text: '"You can taste the essence of sanma even without its physical form." — October 2026, the monthly morning ramen, sanma and Hinai chicken for JPY 1,400.', source: R + 'B472648243/' },
        { text: '"I found the noodles to be somewhat lacking. They just couldn\'t compete with the broth." — October 2026, the large marudori ramen.', source: R + 'B538017857/' },
      ],
      japanese_sources_summary: '食べログ: 中華そば ココカラサキゑ、ラーメン、食べログ ラーメン OSAKA 百名店 2023・2024・2025、大阪市淀川区西宮原1-7-39、JR・Midosuji 線 新大阪駅から徒歩10分、水〜日11:30〜14:30、18:00〜21:00、月・火休み、予約不可、現金のみ、カウンター、禁煙、2018年6月9日オープン。口コミ(2026年9月〜10月): Chuka Soba Mutahiro の元店長が2018年に開いた店、Marudori 醤油 (Hinai の鶏) 1,100円、味玉1,250円、麺大盛り150円、Kujo ねぎ200円、特製はレアチャーシュー2枚、卵、肉ワンタン、メンマ、ねぎ、Hinai と Men-suke の鶏の澄んだスープに鶏油、「Chicken Day」は Rishiri の昆布としいたけのだしも、麺は Kyoto の Menya Teigaku の中細ストレート、豚肩ロースのレアチャーシュー、鶏チャーシューも、特製塩の魚介ラーメン、油そば、イカと煮干し、冷たいスルメのラーメン、毎月第2日曜の朝ラーメンは抽選でサンマと Hinai の鶏1,400円、チャーシュー丼480円、Sapporo Lager にメンマの小皿、入口の券売機、混んでいたら名前を書く、店主が一杯ずつ、155回通った人も、麺が物足りないという声も。',
      confidence: 'medium', sources: [TB, R + 'B381447962/', R + 'B472648243/', R + 'B536226912/', R + 'B536353030/', R + 'B536624473/', R + 'B536994677/', R + 'B537223075/', R + 'B538017857/', R + 'B538267792/', R + 'B538491364/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine at the entrance; a name list when busy; check Instagram for closures. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西宮原1-7-39',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (Ramen 100 2025); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西宮原一丁目7番39号 (go) 5m; ${TODAY}`,
    ramen: {
      broth_base: ['chicken'], broth_texture: 'chintan', tare: ['shoyu'], aroma_oil: ['chicken oil'], richness: 'medium',
      noodles: { thickness: 'medium-thin', shape: 'straight', hydration: null, handmade: false, notes: 'Medium-thin straight noodles made by Menya Teigaku in Kyoto, with "a smooth texture and a pleasant bite" (October 2026 review); "slightly soft" to a September 2026 diner, "smooth medium-thick" to another (September 2026), and no match for the broth to a third (October 2026).' },
      regional_style: [], sub_genre: ['chuka soba'],
      signature_bowl: 'Marudori (whole-chicken) shoyu, Hinai chicken, ¥1,100; with flavoured egg ¥1,250 (October 2026).',
      chashu: 'Rare pork-shoulder chashu, "perfectly balanced between lean and fatty" (October 2026); chicken chashu in a September 2026 bowl.',
      notable_toppings: ['rare pork-shoulder chashu', 'flavoured egg', 'Kujo green onion', 'meat wontons (special)', 'menma'],
      gf: { status: 'no', note: 'Wheat noodles (Menya Teigaku).' },
      vegan: { status: 'no', note: 'Whole-chicken broth; pork chashu.' },
      pantheon: 'Shin-Osaka\'s whole-chicken shoyu from a former Chuka Soba Mutahiro manager: a clear, chicken-oil-glossy broth of Hinai and Men-suke chicken over Kyoto noodles, with a monthly lottery morning ramen.',
      profile: { richness: 3, oiliness: 3, clarity: 4, tare_strength: 3, noodle_firmness: 3, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B536624473/', '"It was light yet had a deep flavor" (September 2026); "the rich broth was absolutely delicious" (October 2026, ' + R + 'B537223075/) — mid-scale.'],
        oiliness: [R + 'B537223075/', '"the glistening chicken oil broth" (October 2026); "The high-quality chicken fat is incredibly delicious" (October 2026, ' + R + 'B538491364/) — oil present and noticed, mid-scale.'],
        clarity: [R + 'B536353030/', '"The clear broth made from whole chicken" (September 2026) — a clear chintan.'],
        tare_strength: [R + 'B536226912/', '"an incredibly drinkable soy sauce base" (September 2026); "perfectly balanced in both sharpness and richness" (October 2026, ' + R + 'B538491364/) — mid-scale.'],
        noodle_firmness: [R + 'B537223075/', '"a smooth texture and a pleasant bite" (October 2026); "slightly soft" (September 2026, ' + R + 'B536226912/) — mid-scale.'],
        aroma_punch: [R + 'B537223075/', '"The aroma was indescribably rich" (October 2026) — above mid-scale.'],
      },
    },
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B381447962/', R + 'B538491364/', R + 'B537223075/', R + 'B472648243/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Marudori (whole-chicken) shoyu, Hinai chicken', '¥1,100', 'Ramen', 'no', 'no', 'October 2026.', 'marudori_shoyu'),
      it('', '', 'Marudori shoyu with flavoured egg', '¥1,250', 'Ramen', 'no', 'no', 'October 2026; large noodles +¥150.', 'marudori_ajitama'),
      it('', '', 'Topping: Kujo green onion', '¥200', 'Toppings', 'ask', 'ask', 'October 2026.', 'kujo_negi'),
      it('', '', 'Chashu rice bowl', '¥480', 'Rice', 'ask', 'no', 'October 2026; mayonnaise and shichimi.', 'chashu_don'),
      it('', '', 'Morning ramen: sanma and Hinai chicken (monthly, lottery)', '¥1,400', 'Specials', 'no', 'no', 'October 2026.', 'asa_ramen'),
    ] }, {
    cuisine: '丸鶏の醤油の中華そばと毎月の限定・Marudori 醤油: Hinai の鶏のスープで1,100円 (2026年10月)。味玉1,250円、麺大盛り150円増し、Kujo ねぎ200円増し (2026年10月)。特製はレアチャーシュー2枚、卵、肉ワンタン、メンマ、ねぎ (2026年9月)・Hinai と Men-suke の鶏の澄んだスープに鶏油が光る (2026年)。2026年9月の「Chicken Day」は Hinai と Men-suke の鶏に、Rishiri の昆布としいたけのだし・Kyoto の Menya Teigaku の中細ストレート麺 (2026年10月)・豚肩ロースのレアチャーシュー (2026年10月)、鶏チャーシュー (2026年9月)・特製塩の魚介ラーメン、油そば (2026年10月)。イカと煮干しのラーメン、期間限定の冷たいスルメのラーメン (2026年10月)・朝ラーメン、サンマと Hinai の鶏1,400円 (2026年10月)・マヨネーズと七味のチャーシュー丼480円 (2026年10月)・Sapporo Lager にメンマの小皿 (2026年10月)',
    neighborhood: '西宮原1-7-39。JR・Midosuji 線 新大阪駅から徒歩10分 (食べログ)。新大阪駅北口から西へ (2026年9月)、阪急 三国駅からも歩ける (2026年10月)',
    gf_detail: 'グルテンフリーではありません。麺は Kyoto の Menya Teigaku の小麦の麺 (2026年10月)。チャーシュー丼にはマヨネーズ。',
    vegan_detail: 'ヴィーガンではありません。Hinai と Men-suke の鶏の丸鶏スープに豚のチャーシュー。魚介、イカ、サンマの一杯も。',
    notes: '[ラーメン・西宮原、Mutahiro 出身の Marudori 醤油] 新大阪駅から西へ歩いて10分の、明るくて清潔な中華そばの店。Chuka Soba Mutahiro の元店長が2018年に開いた (2026年10月)。食べログのラーメン百名店に2023年から2025年まで選ばれている。頼むべきは Marudori 醤油: Hinai と Men-suke の鶏の澄んだスープに鶏油が光り、Kyoto の Menya Teigaku の麺、豚肩ロースのレアチャーシュー、Kujo ねぎで1,100〜1,250円 (2026年10月)。限定はよく変わり (イカと煮干し、塩の魚介、油そば)、毎月第2日曜には抽選の朝ラーメンがあり、2026年10月はサンマ。155回通った人も (2026年10月)。店主が一杯ずつ作る。混んでいたら名前を書いて待つ。現金のみ。月曜と火曜休み。',
  });
}

save();
