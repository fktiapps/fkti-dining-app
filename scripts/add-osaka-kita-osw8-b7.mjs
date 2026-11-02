// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), core queue, circle shin-osaka; worker osw8 (lane: Tabelog id odd), batch 7.
//   + タコたこ Tako Tako (nine-seat takoyaki counter by Higashi-Mikuni station, takeaway line and highballs; the singer aiko's old haunt)
//   + 福来麻辣烫 西中島店 Fu Lai Mala Tang Nishinakajima ten (pick-by-bamboo-tag mala tang, opened February 2026)
//   + 南蛮食堂 東三国店 Namban Shokudo Higashimikuni ten (chicken nanban set meals since 2009, phone ordering)
//   + バラの木 Bara no Ki (small yoshoku house at Higashi-Mikuni, reopened in 2024 after a renovation)
//   - skipped ラーメンステーション 東三国店 27151507: a franchise concept that serves ramen from famous shops around Japan, changing the
//     featured shop every two months, with a franchise recruitment site (press releases on san-tatsu.jp, web search 2026-11-02); a chain,
//     and the bowl changes too often to describe.
//   - skipped BUTAKIN 西中島南方店 27145315: chain already in data (osaka_butakin_uehommachi, "BUTAKIN 上本町店 (BUTAKIN Uehommachi)").
//   Chain check of the four added:
//   - Tako Tako and Bara no Ki: one shop each (Tabelog; reviews).
//   - Fu Lai: the name carries 西中島店, but no other 福来 mala tang shop turned up in two web searches (2026-11-02); kept, flagged.
//   - Namban Shokudo: a web search shows a 南蛮食堂 四ツ橋本町店 too (4travel.jp); at least two shops, not in data; kept, flagged.
//   None is in data/osaka.json (grep by id, name and address, 2026-11-02). Tako Tako shares the street number 宮原2-13-14 with the skipped
//   Ramen Station. Namban Shokudo (東三国4-16-16) and Bara no Ki (東三国4-16-15) are neighbours 13 m apart; both points kept.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw8-7');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27151507', 'chain: Ramen Station, a franchise that serves famous ramen shops\' bowls in rotation every two months, recruiting franchisees (press releases, web search 2026-11-02)');
skip('27145315', 'chain already in data: BUTAKIN (osaka_butakin_uehommachi, BUTAKIN 上本町店)');

// ================================================================ タコたこ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27013121/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '23:00']);
  put({
    id: 'osaka_tako_tako_higashimikuni', name: 'タコたこ (Tako Tako)', category: 'OMNI',
    lat: 34.739826, lng: 135.498897, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: takoyaki and akashiyaki are a wheat batter; tenkasu inside (April 2026).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: octopus takoyaki, akashiyaki in dashi, grilled squid.',
    hours_raw: 'Daily 11:00–23:00; hours may change (Tabelog). Reviews mention last orders around 21:00–21:30 (2025–2026), so go before then. No cards or e-money; QR payment accepted (Tabelog). 9 counter seats, plus takeaway; non-smoking (Tabelog). A takeaway line forms in the evening, while eat-in seats fill by 21:00 (December 2025, May 2026). Akashiyaki takes a while, so order it early (August 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: '宮原2-13-14, by the south exit of Higashi-Mikuni Stn (Midosuji Line), on the side road of Shin-Midosuji (Tabelog; 2024–2026 reviews)',
    cuisine: 'Takoyaki and akashiyaki (Tabelog) · takoyaki: small, crisp outside and creamy inside, light on the mayonnaise, 10 for ¥700 (April 2026), also 12 and 15 (2024–2026); extra bonito flakes on request (April 2026) · shiso-yaki and shiroyaki (2025–2026) · akashiyaki in broth (2025–2026) · grilled squid, ¥300 each (March 2026), two for ¥500 (June 2026) · Kaku highball ¥550, beer and chuhai (2026)',
    website: null, gmaps: gm('タコたこ 東三国'), menu_url: null,
    notes: "[Takoyaki · Higashi-Mikuni, a station-side counter for decades] A nine-seat takoyaki counter by the south exit of Higashi-Mikuni Station, around 30 years old by one regular's count (May 2026; another says over 40), with a takeaway window that draws a line in the evenings. The takoyaki are the old Osaka kind, small, crisp outside and creamy inside, lightly sauced, ten for ¥700; there is also shiso-yaki, a plain shiroyaki, akashiyaki in broth (order it early) and grilled squid from ¥300. Sit at the counter with a ¥550 highball and watch the owner work the griddles. The walls carry celebrity signatures, and diners say the singer aiko came here before debuting (2025–2026). Open until late; no cards.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), at the griddles (May 2026 review)'], origin: null,
      background: 'Per the Tabelog listing: takoyaki, 9 counter seats, takeaway. Per reviews: "this long-established shop has been around for about 30 years" (May 2026); "Over 40 Years of Tradition in Takoyaki" and "The walls are adorned with signatures from various celebrities" (April 2026); "It seems that this place was often visited by the singer aiko during [the singer’s] student days, as there was a signed photo displayed" (July 2025); "well-known as the place aiko frequented before [the] debut" (May 2026); "I watched the back of the owner, sweating" at the griddle (May 2026).',
      philosophy: null, specialty: 'Small Osaka-style takoyaki; akashiyaki; grilled squid.',
      anecdotes: [
        { text: '"Recently, there has been a trend towards larger and fluffier takoyaki, but I find joy in [the shop’s] small, simple takoyaki. Crispy on the outside and gooey on the inside." — May 2026.', source: R + 'B527683084/' },
        { text: '"It seems that this place was often visited by the singer aiko during [the singer’s] student days, as there was a signed photo displayed." — July 2025.', source: R + 'B510231811/' },
        { text: '"Before 8 PM, there were plenty of seats available, but by 9 PM, it was completely full! The takeout line was also quite long." — December 2025.', source: R + 'B490311307/' },
      ],
      japanese_sources_summary: '食べログ: タコたこ、たこ焼き、大阪市淀川区宮原2-13-14、東三国駅から124m、毎日11:00〜23:00、カード・電子マネー不可、QR 可、カウンター9席、禁煙、テイクアウト。口コミ(2018年〜2026年): 東三国駅の南口のすぐそば、Shin-Midosuji の側道、創業約30年 (40年以上という声も)、小ぶりで外はカリッと中はとろりのたこ焼き10個700円、マヨネーズは細く少しだけ、かつお節の追加も、しそ焼き、白焼き、明石焼き (時間がかかる)、いか焼き300円 (2枚500円)、角ハイボール550円、夜は持ち帰りの行列、壁に有名人のサイン、デビュー前の aiko が通った店、店主が鉄板の前で汗をかきながら焼く。',
      confidence: 'medium', sources: [TB, R + 'B378714393/', R + 'B490311307/', R + 'B510231811/', R + 'B523715528/', R + 'B525599997/', R + 'B527159145/', R + 'B527370572/', R + 'B527683084/', R + 'B528370565/', R + 'B528483521/', R + 'B528556899/', R + 'B529207233/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter and takeaway window; order by number of pieces. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区宮原2-13-14',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区宮原二丁目13番14号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B527370572/', R + 'B523715528/', R + 'B378714393/'],
    price_note: 'Prices from March–June 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Takoyaki, 10 pieces', '¥700', 'Takoyaki', 'no', 'no', 'April 2026.', 'takoyaki_10'),
      it('', '', 'Grilled squid', '¥300', 'Grilled', 'ask', 'no', 'March 2026 (two for ¥500, June 2026).', 'ikayaki'),
      it('', '', 'Akashiyaki in broth', '', 'Takoyaki', 'no', 'no', '2025–2026.', 'akashiyaki'),
      it('', '', 'Shiso-yaki', '', 'Takoyaki', 'no', 'no', 'May and August 2026.', 'shisoyaki'),
      it('', '', 'Kaku highball', '¥550', 'Drinks', '', '', 'April 2026.', 'highball'),
    ] }, {
    cuisine: 'たこ焼きと明石焼き (食べログ)・たこ焼き: 小ぶりで外はカリッと中はとろり、マヨネーズはひかえめ、10個700円 (2026年4月)、12個や15個も (2024〜2026年)。かつお節の追加もできる (2026年4月)・しそ焼きと白焼き (2025〜2026年)・だしにつける明石焼き (2025〜2026年)・いか焼き1枚300円 (2026年3月)、2枚500円 (2026年6月)・角ハイボール550円、ビール、チューハイ (2026年)',
    neighborhood: '宮原2-13-14、東三国駅 (Midosuji Line) の南口のすぐそば、Shin-Midosuji の側道 (食べログ、2024〜2026年の口コミ)',
    gf_detail: 'グルテンフリーではありません。たこ焼きと明石焼きは小麦の生地で、中に天かす (2026年4月)。',
    vegan_detail: 'ヴィーガンではありません。タコのたこ焼き、だしにつける明石焼き、いか焼き。',
    notes: '[たこ焼き・東三国、駅のそばで長く続くカウンター] 東三国駅の南口のそばにある9席のたこ焼きのカウンターで、常連によると創業約30年 (2026年5月。40年以上という人も)。持ち帰りの窓口もあり、夜は列ができる。たこ焼きは昔ながらの大阪のもので、小ぶりで外はカリッと中はとろり、ソースはひかえめで10個700円。しそ焼き、白焼き、だしにつける明石焼き (早めに注文を)、300円からのいか焼きも。カウンターで550円のハイボールを飲みながら、店主が鉄板で焼くのを見るのも楽しい。壁には有名人のサインがあり、歌手の aiko がデビュー前に通った店だという (2025〜2026年)。夜遅くまで。カード不可。',
  });
}

// ================================================================ 福来麻辣烫 西中島店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27154957/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '15:00'], ['17:00', '21:00']);
  put({
    id: 'osaka_fu_lai_mala_tang_nishinakajima', name: '福来麻辣烫 西中島店 (Fu Lai Mala Tang Nishinakajima ten)', category: 'OMNI',
    lat: 34.727544, lng: 135.500937, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. You choose the noodles (vermicelli, thick vermicelli, corn noodles, spinach noodles or Chinese wheat noodles) and toppings such as fish balls, dumplings and cheese tteokbokki, in one of three broths whose ingredients are not described.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Many of the ingredients you pick are vegetables, mushrooms, tofu skin and noodles, but none of the three broths (traditional, golden, sesame "sticky") is described, and fish balls, shrimp and meat sit on the same counter.',
    hours_raw: 'Daily 11:00–15:00 and 17:00–21:00; hours may change (Tabelog). Lunch lines on weekdays (May and September 2026). Pick ingredients by bamboo tag from a display of samples at the door, hand them over, and the kitchen cooks the bowl; priced per tag, not by weight (2026). Cards, e-money and QR accepted (Tabelog). 16 seats: 4 at the counter and 6 tables for two; non-smoking; children welcome (Tabelog). Delivery via Uber (September 2026). Opened 22 February 2026 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: '西中島3-11-24, near Nishinakajima-Minamigata Stn (Tabelog; October 2026)',
    cuisine: 'Mala tang, built ingredient by ingredient (Tabelog: tantanmen genre) · three broths: traditional mala, a milder "golden" broth, and a thick, numbing sesame "sticky" broth; spice levels you choose (2026) · ingredients from ¥100 a tag: vegetables, mushrooms, tofu skin, fish and shrimp balls, dumplings, cheese tteokbokki, seasoned egg, baby corn, white fungus and more (2026) · noodles: vermicelli, thick vermicelli, corn noodles, spinach noodles, Chinese noodles (2026) · a nine-ingredient bowl with spinach noodles came to ¥2,010, tax included (October 2026); another to ¥1,345 (September 2026) · sides and sweets: sweet potato sticks in rice paper, a panda "Nomi Chi" mochi with red bean ¥150, panda-pattern buns (2026)',
    website: null, gmaps: gm('福来麻辣烫 西中島店'), menu_url: null,
    notes: "[Mala tang · Nishinakajima, a pick-your-own spicy soup shop with pandas] A 16-seat mala tang shop near Nishinakajima-Minamigata, opened in February 2026 and already lined up at lunch. Instead of weighing a self-served bowl, you pick bamboo tags from a display of samples, each tag a fixed portion from ¥100, and the kitchen cooks it: vegetables, mushrooms, tofu skin, fish balls, dumplings and a choice of five noodles. Then choose the broth, a classic spicy mala, a milder golden one, or a thick sesame \"sticky\" broth, and a spice level; level 2 is properly hot (2026). A full bowl runs about ¥1,300–2,000. Panda decor, panda mochi for dessert. One regular found the spice and the order inconsistent once (September 2026).",
    chef_bio: { chef_name: null, roles: ['Kitchen and counter staff (unnamed)'], origin: null,
      background: 'Per the Tabelog listing: mala tang (listed as tantanmen), opened 22 February 2026. Per reviews: "Instead of the typical weight-based selling style, [the shop uses] a method where you select bamboo tags while looking at food samples" (October 2026); "The staff are incredibly kind" (October 2026); "The staff provided a thorough explanation" (May 2026); the shop is themed around pandas, with panda aprons and panda sweets (2026).',
      philosophy: null, specialty: 'Mala tang by bamboo tag; sesame "sticky" broth.',
      anecdotes: [
        { text: '"Most of the ingredients and noodles are JPY 100, so the soup feels a bit pricey in comparison—what a strange phenomenon!" — March 2026.', source: R + 'B524493773/' },
        { text: '"While Mala Tang typically features a light broth, this version is rich and thick, infused with a generous amount of sesame and a spicy kick from the chili." — September 2026.', source: R + 'B536702764/' },
        { text: '"I ordered my usual Tradition 2, but it was clearly different in spiciness this time." — September 2026, a sixth visit.', source: R + 'B529206533/' },
      ],
      japanese_sources_summary: '食べログ: 福来麻辣烫 西中島店、担々麺、大阪市淀川区西中島3-11-24、西中島南方駅から246m、毎日11:00〜15:00、17:00〜21:00、カード・電子マネー・QR 可、16席 (カウンター4、2名テーブル6)、禁煙、子ども可、2026年2月22日オープン。口コミ(2026年3月〜10月): 見本を見て竹の札で具を選ぶ、重さで量らない、具は1つ100円から、スープは3種 (伝統の麻辣、やさしい金色のスープ、ごまの濃いスープ)、辛さを選べる、春雨、太い春雨、とうもろこしの麺、ほうれん草の麺、中華麺、9品で2,010円、昼は行列、パンダの内装とスイーツ、辛さや具がいつもとちがった日も。',
      confidence: 'medium', sources: [TB, R + 'B524493773/', R + 'B529056627/', R + 'B529206533/', R + 'B531310627/', R + 'B531835504/', R + 'B533019222/', R + 'B535692948/', R + 'B535866732/', R + 'B536078232/', R + 'B536702764/', R + 'B536846510/', R + 'B537087267/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Pick ingredients from a sample display by bamboo tag, then choose broth and spice level. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島3-11-24',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島三丁目11番24号 (go) 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536846510/', R + 'B524493773/'],
    price_note: 'Per-tag prices from 2026 reviews; no menu published.', last_checked: TODAY, items: [
      it('', '', 'Mala tang ingredients and noodles, per bamboo tag', '¥100', 'Mala tang', 'ask', 'ask', 'March–October 2026 ("from ¥100").', 'per_tag'),
      it('', '', 'Panda "Nomi Chi" mochi with red bean', '¥150', 'Sweets', 'ask', 'ask', 'October 2026.', 'panda_mochi'),
    ] }, {
    cuisine: '具をひとつずつ選ぶ麻辣烫 (食べログのジャンルは担々麺)・スープは3種: 伝統の麻辣、辛さひかえめの金色のスープ、ごまたっぷりでしびれる濃いスープ。辛さも選べる (2026年)・具は札1つ100円から: 野菜、きのこ、湯葉、魚や海老のつみれ、餃子、チーズトッポギなど (2026年)・麺: 春雨、太い春雨、とうもろこしの麺、ほうれん草の麺、中華麺 (2026年)・ほうれん草の麺に9品で2,010円、税込 (2026年10月)。別の日は1,345円 (2026年9月)・サイドとスイーツ: さつまいものライスペーパー巻き、パンダの Nomi Chi (あんこ入りのもち) 150円、パンダ柄のまんじゅう (2026年)',
    neighborhood: '西中島3-11-24、西中島南方駅の近く (食べログ、2026年10月)',
    gf_detail: '要確認。グルテンの情報なし。麺 (春雨、太い春雨、とうもろこしの麺、ほうれん草の麺、中華麺) と、つみれ、餃子、チーズトッポギなどの具を選び、材料の書かれていない3種のスープで食べる。',
    vegan_detail: '要確認。野菜、きのこ、湯葉、麺など選べる具は多いが、3種のスープ (伝統、金色、ごまの濃いスープ) の材料は書かれておらず、つみれや海老、肉も同じ棚にある。',
    notes: '[麻辣烫・西中島、パンダのいる具を選ぶ辛いスープの店] 西中島南方の近くにある16席の麻辣烫の店で、2026年2月に開き、すでに昼は行列。自分でよそって量るのではなく、見本を見ながら竹の札を選び (1つ100円から)、厨房で作ってもらう: 野菜、きのこ、湯葉、つみれ、餃子、5種の麺。スープは定番の辛い麻辣、やさしい金色のスープ、ごまの濃いスープから選び、辛さも選ぶ。2辛でもしっかり辛い (2026年)。1杯は約1,300〜2,000円。パンダの内装に、デザートはパンダのもち。辛さや注文が一度いつもとちがったという常連も (2026年9月)。',
  });
}

// ================================================================ 南蛮食堂 東三国店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27049145/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '22:00']);
  put({
    id: 'osaka_namban_shokudo_higashimikuni', name: '南蛮食堂 東三国店 (Namban Shokudo Higashimikuni ten)', category: 'OMNI',
    lat: 34.740039, lng: 135.49739, cuisine_type: 'shokudo',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: chicken nanban, kara-age and chicken katsu are battered or breaded and fried; the kara-age is soy-flavoured (June 2026).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken set-meal shop; tartar sauce, miso soup, keema curry.',
    hours_raw: 'Mon–Sat 11:00–22:00 (last order 21:40); closed Sunday (Tabelog). Lunch lines before noon on weekdays (June 2026, December 2025); order on your phone by QR code, even while waiting in line, and pay by card on screen (2024–2026); the old ticket machine is gone (June 2024). Cards (VISA, Master, JCB, AMEX), e-money and QR including Alipay and WeChat Pay (Tabelog). 16 seats: 4 at the counter, 12 at tables; non-smoking; children welcome; takeaway (Tabelog). Opened 1 September 2009 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: '東三国4-16-16, 2 min from Higashi-Mikuni Stn (Midosuji Line), 10 min from JR Shin-Osaka (Tabelog); next door to the yoshoku shop Bara no Ki (東三国4-16-15)',
    cuisine: 'Chicken nanban set meals (Tabelog: cafeteria, curry) · chicken nanban set of breast or thigh, sweet vinegar and homemade tartar ¥1,300 (June 2026) · chicken nanban mix of breast nanban, thigh nanban and kara-age ¥1,650 (June 2026; ¥1,400 in February 2026) · Japanese-style kara-age set, five pieces ¥1,300 (August 2026) · chicken katsu set (October 2024, July 2026) · keema curry, with chicken nanban on top if you like (June and August 2026) · sets with rice, miso soup and cabbage; large rice free; stir-fried takana free on the table; onion or sesame dressing; "Maximum" seasoning on the table, also sold ¥880 (2024–2026) · draft beer ¥550, side dishes for drinking (June 2026)',
    website: null, gmaps: gm('南蛮食堂 東三国店'), menu_url: null,
    notes: "[Set meals · Higashi-Mikuni, chicken nanban for office lunches] A 16-seat chicken nanban specialist two minutes from Higashi-Mikuni Station, open since 2009, full before noon on weekdays with office workers and tradesmen (June 2026). You order on your phone by QR code, even while in line. The chicken nanban comes as breast, juicy and tender, or thigh, fried, dipped in sweet vinegar and covered in homemade tartar; the mix adds kara-age (¥1,650), and plain sets are ¥1,300. Large rice is free and there is stir-fried takana on the table to stretch it, plus a jar of \"Maximum\" seasoning. Keema curry with a chicken nanban on top is the other draw. One diner credits Miyazaki chicken for the flavour (December 2025). Closed Sundays.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: cafeteria and curry, opened 1 September 2009. Per reviews: "a Chicken Nanban specialty set meal restaurant" with "an atmosphere reminiscent of an old-fashioned set meal restaurant" (June 2026); "As expected, it\'s chicken from Miyazaki!" (December 2025); "Maximum seasoning, which is popular among camping enthusiasts and locals from Miyazaki" (May 2026); the order system moved from a ticket machine to phone ordering in 2024 (June 2024 review).',
      philosophy: null, specialty: 'Chicken nanban with homemade tartar; keema curry.',
      anecdotes: [
        { text: '"Orders are placed via QR code. It seems you can order on your smartphone while waiting in line." — June 2026.', source: R + 'B345469530/' },
        { text: '"It\'s a popular place with a wait of 7 people. After about 15 minutes, I was seated … my food arrived in just 2 minutes after sitting down." — December 2025, chicken nanban mix.', source: R + 'B519483565/' },
        { text: '"I decided to try the curry for the first time, and it was packed with more meat than I expected! Mixing in a bit of tartar sauce made it incredibly delicious!" — August 2026.', source: R + 'B528617992/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 南蛮食堂 東三国店、食堂・カレー、大阪市淀川区東三国4丁目16-16、東三国駅から徒歩2分、JR 新大阪駅から10分、月〜土11:00〜22:00 (L.O.21:40)、日曜休み、カード・電子マネー・QR (Alipay、WeChat Pay も) 可、16席 (カウンター4、テーブル12)、禁煙、子ども可、テイクアウト、2009年9月1日オープン。口コミ(2023年5月〜2026年8月): チキン南蛮の定食の専門店、むねかももを選ぶ、甘酢と自家製タルタル、チキン南蛮定食1,300円、むね・もも・kara-age のミックス1,650円、kara-age 定食5個1,300円、チキンカツ定食、キーマカレー、チキン南蛮のせカレー、ごはん大盛り無料、卓上の高菜炒め食べ放題、玉ねぎとごまのドレッシング、卓上の Maximum (店でも880円で販売)、スマホの QR コードで注文、昼前から行列、生ビール550円、Miyazaki の鶏という声。',
      confidence: 'medium', sources: [TB, R + 'B345469530/', R + 'B466596235/', R + 'B519483565/', R + 'B527129561/', R + 'B528617992/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order on your phone by QR code; Alipay and WeChat Pay accepted (Tabelog). No English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区東三国4丁目16-16',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区東三国四丁目16番16号 (go) 5m; 13 m from Bara no Ki next door; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B345469530/', R + 'B466596235/'],
    price_note: 'Prices from June–August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Chicken nanban set (breast or thigh)', '¥1,300', 'Set meals', 'no', 'no', 'June 2026.', 'nanban_teishoku'),
      it('', '', 'Chicken nanban mix: breast and thigh nanban with kara-age', '¥1,650', 'Set meals', 'no', 'no', 'June 2026.', 'nanban_mix'),
      it('', '', 'Japanese-style kara-age set, five pieces', '¥1,300', 'Set meals', 'no', 'no', 'August 2026.', 'karaage_teishoku'),
      it('', '', 'Keema curry', '', 'Curry', 'ask', 'no', 'June and August 2026.', 'keema_curry'),
      it('', '', 'Draft beer', '¥550', 'Drinks', '', '', 'June 2026.', 'nama_beer'),
    ] }, {
    cuisine: 'チキン南蛮の定食 (食べログ: 食堂、カレー)・むねかももを選ぶチキン南蛮定食、甘酢と自家製タルタル1,300円 (2026年6月)・むねとももの南蛮と kara-age のミックス1,650円 (2026年6月。2026年2月は1,400円)・和風の kara-age 定食5個1,300円 (2026年8月)・チキンカツ定食 (2024年10月、2026年7月)・キーマカレー、チキン南蛮をのせても (2026年6月、8月)・定食はごはん、みそ汁、キャベツ。ごはん大盛り無料、卓上の高菜炒めは食べ放題、玉ねぎかごまのドレッシング、卓上の「Maximum」、店でも880円で販売 (2024〜2026年)・生ビール550円、飲むための一品も (2026年6月)',
    neighborhood: '東三国4-16-16、東三国駅 (Midosuji Line) から2分、JR 新大阪から10分 (食べログ)。洋食のバラの木 (東三国4-16-15) のとなり',
    gf_detail: 'グルテンフリーではありません。チキン南蛮、kara-age、チキンカツは衣をつけて揚げる。kara-age は醤油味 (2026年6月)。',
    vegan_detail: 'ヴィーガンではありません。鶏の定食の店で、タルタル、みそ汁、キーマカレー。',
    notes: '[定食・東三国、昼の会社員のチキン南蛮] 東三国駅から2分、2009年からの16席のチキン南蛮の専門店で、平日は正午前から会社員や職人さんでいっぱい (2026年6月)。注文はスマホで QR コードから、列に並びながらでもできる。チキン南蛮はむね (ジューシーでやわらかい) かももを揚げて甘酢にくぐらせ、自家製タルタルをたっぷり。ミックスは kara-age もついて1,650円、ふつうの定食は1,300円。ごはん大盛りは無料で、卓上の高菜炒めでごはんが進む。「Maximum」の瓶も。チキン南蛮をのせたキーマカレーも人気。Miyazaki の鶏だからおいしいという人も (2025年12月)。日曜休み。',
  });
}

// ================================================================ バラの木
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27000489/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '14:00'], ['17:30', '22:00']);
  put({
    id: 'osaka_bara_no_ki_higashimikuni', name: 'バラの木 (Bara no Ki)', category: 'OMNI',
    lat: 34.740152, lng: 135.497409, cuisine_type: 'yoshoku',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: fried shrimp, tonkatsu, cutlets and croquettes in breadcrumbs, demi-glace sauce, and Neapolitan pasta.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: hamburg steak, fried shrimp, pork cutlets, sausages.',
    hours_raw: 'Mon–Sat 11:00–14:00 and 17:30–22:00; closed Sunday; hours may change (Tabelog). Cash only at lunch; at dinner cards (VISA, Master, JCB, AMEX, Diners) and e-money (Tabelog). 20 seats, about five tables for four (February 2025); non-smoking (Tabelog). Lunch is served quickly; self-service miso soup with refills (2024–2026). Reopened in July 2024 after a closure and renovation (October 2024 review).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: '東三国4-16-15, クイーンハイツ, 2 min from Higashi-Mikuni Stn (Tabelog; March 2025); next door to Namban Shokudo (東三国4-16-16)',
    cuisine: 'Yoshoku (Tabelog) · lunch: the "Bara no Ki Lunch" of a small hamburg steak and butterflied fried shrimp with salad and potatoes ¥1,000 (2024–2025); tonkatsu lunch with demi-glace, ginger pork lunch, katsu curry (September 2026); fillet cutlet lunch ¥1,000, Neapolitan large ¥1,200 (August 2024); large rice free, miso soup self-service with refills (2024) · evening: pork fillet cutlet and Kagoshima-chicken kara-age rice set ¥1,200 (March–April 2025); appetizer trio ¥800, fries ¥500, Sanriku fried oysters with homemade tartar ¥1,000, shrimp and shirasu ajillo with baguette ¥900 (February 2025); Iwate pork sausages, garlic toast, prosciutto (October 2024) · Peroni draft ¥800, Kaku highball ¥550 (February 2025)',
    website: null, gmaps: gm('バラの木 東三国 洋食'), menu_url: null,
    notes: "[Yoshoku · Higashi-Mikuni, a neighbourhood western-food house] A small yoshoku restaurant two minutes from Higashi-Mikuni Station that closed for a while and reopened in July 2024 after a renovation, now clean and calm with soft music. Lunch is the reason to come: the house \"Bara no Ki Lunch\" of a small hamburg steak and crisp butterflied fried shrimp for about ¥1,000, or tonkatsu with demi-glace, ginger pork and katsu curry, with self-service miso soup that one diner rated the best part (October 2024). In the evening it becomes a small bistro-izakaya with Sanriku fried oysters, ajillo, sausages and Peroni. Portions are on the modest side (2024). Cash only at lunch; closed Sundays.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed); two staff per reviews'], origin: null,
      background: 'Per the Tabelog listing: yoshoku, 20 seats, lunch cash only. Per reviews: before the closure, "the owner manages everything alone" (October 2023); after reopening, "The master and a lady in the hall were managing the place" (September 2024) and "The staff consists of two men responsible for both service and cooking … The service was attentive, giving off a feeling of experience and professionalism" (October 2024); "I heard that [the restaurant] had been closed for a while, but [it] reopened in July of this year" (October 2024); the menu was narrowed to four lunches by September 2026.',
      philosophy: null, specialty: 'Hamburg steak and fried shrimp lunch.',
      anecdotes: [
        { text: '"Overall, the plate was well-balanced, but the standout was the miso soup. It had a perfect saltiness and temperature … of course, I went for a refill." — October 2024.', source: R + 'B493036038/' },
        { text: '"I tried the fried oysters from Sanriku (JPY 1000). They were freshly fried and bursting with the rich flavor of the oysters. The homemade tartar sauce was a nice touch." — February 2025.', source: R + 'B506651315/' },
        { text: '"The menu features only the Bara no Ki Lunch, Tonkatsu Lunch, Katsu Curry, and Ginger Pork Lunch." — September 2026.', source: R + 'B488772046/' },
      ],
      japanese_sources_summary: '食べログ: バラの木、洋食、大阪市淀川区東三国4-16-15 クイーンハイツ、東三国駅から130m、月〜土11:00〜14:00、17:30〜22:00、日曜休み、昼は現金のみ、カード・電子マネー可、20席、禁煙。口コミ(2023年10月〜2026年9月): 休業のあと2024年7月に改装して再開、小さなハンバーグとエビフライのバラの木ランチ1,000円、デミグラスのとんかつランチ、生姜焼き、カツカレー、ヒレカツランチ、ナポリタン、ごはん大盛り無料、みそ汁はセルフでおかわり自由、夜は前菜3種800円、フライドポテト、Sanriku のカキフライ1,000円、エビとしらすのアヒージョ900円、Iwate の豚のソーセージ、ガーリックトースト、生ハム、Kagoshima の鶏の kara-age のライスセット1,200円、Peroni、角ハイボール、量はひかえめ、静かな BGM。',
      confidence: 'medium', sources: [TB, R + 'B473054434/', R + 'B479255221/', R + 'B488772046/', R + 'B490297641/', R + 'B490580639/', R + 'B492149512/', R + 'B493036038/', R + 'B493365566/', R + 'B502668860/', R + 'B504536023/', R + 'B506651315/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the table; cash only at lunch. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区東三国4-16-15 クイーンハイツ',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区東三国四丁目16番15号 (go) 3m; 13 m from Namban Shokudo next door; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B473054434/', R + 'B506651315/', R + 'B504536023/'],
    price_note: 'Prices from 2024–2025 reviews; the September 2026 review gives no prices.', last_checked: TODAY, items: [
      it('', '', '"Bara no Ki Lunch": small hamburg steak and fried shrimp', '¥1,000', 'Lunch', 'no', 'no', 'October 2025.', 'bara_lunch'),
      it('', '', 'Tonkatsu lunch with demi-glace', '', 'Lunch', 'no', 'no', 'July 2024; September 2026.', 'tonkatsu_lunch'),
      it('', '', 'Sanriku fried oysters with homemade tartar', '¥1,000', 'Evening', 'no', 'no', 'February 2025.', 'kaki_fry'),
      it('', '', 'Shrimp and shirasu ajillo with baguette', '¥900', 'Evening', 'no', 'no', 'February 2025.', 'ajillo'),
    ] }, {
    cuisine: '洋食 (食べログ)・昼: 小さなハンバーグと開いたエビフライにサラダとポテトの「バラの木ランチ」1,000円 (2024〜2025年)。デミグラスのとんかつランチ、生姜焼きランチ、カツカレー (2026年9月)。ヒレカツランチ1,000円、ナポリタン大盛り1,200円 (2024年8月)。ごはん大盛り無料、みそ汁はセルフでおかわり自由 (2024年)・夜: ヒレカツと Kagoshima の鶏の kara-age のライスセット1,200円 (2025年3〜4月)。前菜3種800円、フライドポテト500円、Sanriku のカキフライと自家製タルタル1,000円、エビとしらすのアヒージョにバゲット900円 (2025年2月)。Iwate の豚のソーセージ、ガーリックトースト、生ハム (2024年10月)・Peroni の生ビール800円、角ハイボール550円 (2025年2月)',
    neighborhood: '東三国4-16-15、クイーンハイツ。東三国駅から2分 (食べログ、2025年3月)。南蛮食堂 (東三国4-16-16) のとなり',
    gf_detail: 'グルテンフリーではありません。パン粉のエビフライ、とんかつ、カツ、コロッケ、デミグラスソース、ナポリタン。',
    vegan_detail: 'ヴィーガンではありません。ハンバーグ、エビフライ、豚カツ、ソーセージ。',
    notes: '[洋食・東三国、町の洋食屋] 東三国駅から2分の小さな洋食店で、しばらく休業したあと2024年7月に改装して再開し、今は清潔で静かな BGM が流れる。来るなら昼: 小さなハンバーグとカリッと開いたエビフライの「バラの木ランチ」が約1,000円、デミグラスのとんかつ、生姜焼き、カツカレーも。セルフのみそ汁がいちばんおいしかったという人も (2024年10月)。夜は小さなビストロ風の居酒屋になり、Sanriku のカキフライ、アヒージョ、ソーセージ、Peroni。量はひかえめ (2024年)。昼は現金のみ。日曜休み。',
  });
}

save();
