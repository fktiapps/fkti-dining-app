// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), core queue, circle shin-osaka; worker osw8 (lane: Tabelog id odd), batch 4.
//   + 釜たけうどん 新大阪店 Kamatake Udon Shin'osaka ten (nine-seat Sanuki udon counter in the station's 味の小路, run by one person)
//   + 鯛白湯らーめん ○de▽ Tai Paitan Ramen ○de▽ (sea-bream paitan ramen; Tabelog Ramen 100 2023–2025; no ramen block, see below)
//   + SOSラーメン 新大阪 SOS Ramen Shin osaka (Thursday-only spicy shoyu ramen, 40 bowls a sitting; no ramen block)
//   + 割烹 八彩 新大阪店 Kappou Hassai Shin osaka ten (monthly kaiseki course by Higashi-Mikuni station, ¥7,800)
//   - skipped 辻利 アルデ新大阪店 27100313: the Uji tea brand 辻利 (TSUJIRI), with shops in Kyoto Gion, Kyoto Tower Sando and here named in a
//     2026 brand release (zaikei.co.jp/releases/3295851), plus 祇園辻利 shops; a tea-sweets chain.
//   Chain check of the four added:
//   - Kamatake: a small udon group whose Namba Sennichimae shop a July 2026 diner calls "a famous spot in Minami"; not in data
//     (grep 釜たけ / Kamatake, 2026-11-01). Kept: a handful of shops, not a fast-growing chain. Flagged for the integrator.
//   - ○de▽: listed on the shop page of its operator 株式会社 銀の葡萄 (silver-grape.com/shop/, read 2026-11-01) with a Sannomiya shop and two in
//     Hong Kong; the same company runs 鶏soba 座銀 (in data: osaka_tori_soba_zagin_honten, osaka_tori_soba_zagin_niboshi) and 麺's room 神虎.
//     Kept because Zagin branches are already recorded individually and this is the brand's first shop (opened 14 November 2018);
//     flagged for the integrator.
//   - SOS Ramen: one shop (Tabelog; sosram.com did not answer on 2026-11-01). Hassai: one shop (Tabelog; no sister shop named).
//   None is in data/osaka.json (grep by id, name and address, 2026-11-01). ○de▽ shares 西宮原1-5-6 with osaka_tonton_byoshi_nishimiyahara
//   (address_ja "大阪府大阪市淀川区西宮原1-5-6"), 9 m apart on Tabelog; the two points are kept separate.
//   No ramen block for ○de▽ or SOS Ramen: ○de▽'s reviews give richness, clarity, noodle firmness and aroma but nothing on oiliness or
//   tare strength; SOS Ramen's 2025–2026 reviews describe too little of the bowl. Left off rather than guessed (2026-11-01 lesson).
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw8-4');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27100313', 'chain: 辻利 (TSUJIRI) Uji tea brand, shops in Kyoto Gion, Kyoto Tower Sando and Arde Shin-Osaka named in a 2026 brand release (zaikei.co.jp/releases/3295851)');

// ================================================================ 釜たけうどん 新大阪店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27106459/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '15:00']);
  put({
    id: 'osaka_kamatake_udon_shin_osaka', name: '釜たけうどん 新大阪店 (Kamatake Udon Shin\'osaka ten)', category: 'OMNI',
    lat: 34.733454, lng: 135.500782, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat udon, with tempura toppings (chikuwa, soft-boiled egg, chicken, maitake) and a bonito dashi or bukkake sauce.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a bonito dashi (October 2026) and toppings of chikuwa, egg, chicken and beef.',
    hours_raw: 'Daily except Tuesday 11:00–15:00 (last order 14:30), holidays included (Tabelog; reopened 2 September 2025 after a break). The listing notes also say "closed on Wednesdays", which contradicts its own table; check before going. Buy a ticket at the machine outside first; cash, or PayPay if you call the staff out to the machine (September and October 2026). 9 counter seats; non-smoking (Tabelog). Lunch lines of five to ten are usual on weekdays, with waits of 5–10 minutes; one person cooks and serves, so the next group goes in only when seats are cleared (September–October 2026).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: '西中島5-16-1, 味の小路 ("Flavor Alley") on the ground floor of JR Shin-Osaka Stn, outside the ticket gates and under the tracks, at the end of the alley (Tabelog; September–October 2026)',
    cuisine: 'Sanuki udon with a Kansai-style dashi, cut and boiled to order (October 2026) · the signature chiku-tama tempura bukkake, chikuwa and soft-boiled egg tempura with ginger, green onion and lemon, hot or cold, ¥880; the regular size is about two portions (September–October 2026) · chicken and egg tempura bukkake (September 2026) · meat bukkake with domestic wagyu and maitake tempura ¥1,350 (October 2026) · kasu udon ¥930 (October 2026) · kake udon with chikuwa and egg tempura ¥880 (October 2026)',
    website: null, gmaps: gm('釜たけうどん 新大阪店 味の小路'), menu_url: null,
    notes: "[Udon · Shin-Osaka Station, a one-person Sanuki counter] A nine-seat udon counter at the end of the 味の小路 food alley under the Shin-Osaka tracks, outside the ticket gates, from the Kamatake udon shops that a July 2026 diner calls famous in Minami. One person makes, boils and serves every bowl (2026). The order is the chiku-tama tempura bukkake (¥880): glossy, neatly folded noodles, chewy but smooth, under a big crisp chikuwa tempura and a runny soft-boiled egg tempura, with ginger, green onion and lemon, cold or hot. Meat bukkake with wagyu and maitake tempura (¥1,350) and kasu udon (¥930) are the richer choices. Buy your ticket at the machine before joining the line; lunchtime waits are short but steady. Lunch only, closed Tuesdays. A good stop between trains.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), runs the counter alone (October 2026 review)'], origin: null,
      background: 'Per the Tabelog listing: reopened 2 September 2025, with Tuesday as the regular day off. Per reviews: "The owner was running the place by himself" (October 2026); "The restaurant operates with just one staff member, who seemed quite busy" (September 2026); "Even with just one staff member, the service felt efficient without any unnecessary movements" (October 2026); "Kamatake Udon is a famous spot in Minami" (July 2026).',
      philosophy: null, specialty: 'Chiku-tama tempura bukkake udon.',
      anecdotes: [
        { text: '"The presentation of the udon is beautiful, neatly folded, and it shines with a wonderful gloss … [The shop serves] it freshly cut and boiled." — October 2026, chiku-tama tempura bukkake ¥880.', source: R + 'B538090381/' },
        { text: '"I thought katsu udon referred to tenkasu (tempura scraps), but it actually had pieces of beef in it." — October 2026; the diner\'s photo caption reads かすうどん 930円.', source: R + 'B538333254/' },
        { text: '"The regular size comes with about two servings, making it quite filling." — September 2026.', source: R + 'B537232186/' },
      ],
      japanese_sources_summary: '食べログ: 釜たけうどん 新大阪店、うどん、大阪市淀川区西中島5-16-1 JR新大阪駅 味の小路 1F、11:00〜15:00 (L.O.14:30)、火曜休み (祝日は営業)、2025年9月2日に営業再開、カード・電子マネー不可、PayPay 可、カウンター9席、禁煙。口コミ(2026年7月〜10月): 店の外の券売機、PayPay は店員さんを呼ぶ、ちくわ天と半熟卵天のぶっかけ880円 (生姜、ねぎ、レモン)、普通盛りで約2玉、かけうどんにちくわ天と半熟卵天880円、肉ぶっかけ1,350円 (国産和牛、舞茸天)、かすうどん930円、鶏天ぶっかけ、讃岐うどんに関西のだし、切りたてゆでたて、店主ひとりで営業、昼は行列。',
      confidence: 'medium', sources: [TB, R + 'B532419999/', R + 'B535739086/', R + 'B536555713/', R + 'B536770024/', R + 'B536925780/', R + 'B537041597/', R + 'B537232186/', R + 'B538090381/', R + 'B538313218/', R + 'B538333254/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine outside; choose hot or cold when you hand it over. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島5-16-1 JR新大阪駅 味の小路 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島五丁目16番1号 (go) 32m (the station block); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537232186/', R + 'B536770024/', R + 'B538333254/'],
    price_note: 'Ticket prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Chiku-tama tempura bukkake (chikuwa and soft-boiled egg tempura), hot or cold', '¥880', 'Udon', 'no', 'no', 'September–October 2026.', 'chikutama_bukkake'),
      it('', '', 'Meat bukkake with wagyu and maitake tempura', '¥1,350', 'Udon', 'no', 'no', 'October 2026.', 'niku_bukkake'),
      it('かすうどん', '', 'Kasu udon (with fried beef offal)', '¥930', 'Udon', 'no', 'no', 'October 2026.', 'kasu_udon'),
      it('', '', 'Kake udon with chikuwa and egg tempura', '¥880', 'Udon', 'no', 'no', 'October 2026.', 'kake_chikutama'),
    ] }, {
    cuisine: '関西風のだしの讃岐うどん、切りたてゆでたて (2026年10月)・名物は、ちくわと半熟卵の天ぷらのぶっかけで、生姜、ねぎ、レモン、温か冷、880円。普通盛りで約2玉 (2026年9〜10月)・鶏天と卵天のぶっかけ (2026年9月)・国産和牛と舞茸天の肉ぶっかけ1,350円 (2026年10月)・かすうどん930円 (2026年10月)・ちくわ天と卵天のかけうどん880円 (2026年10月)',
    neighborhood: '西中島5-16-1、JR 新大阪駅の1階、改札の外の高架下の味の小路のいちばん奥 (食べログ、2026年9〜10月)',
    gf_detail: 'グルテンフリーではありません。小麦のうどんに、ちくわ、半熟卵、鶏、舞茸の天ぷら、カツオのだしかぶっかけのつゆ。',
    vegan_detail: 'ヴィーガンではありません。カツオのだし (2026年10月) に、ちくわ、卵、鶏、牛肉の具。',
    notes: '[うどん・新大阪駅、ひとりで切り盛りする讃岐うどんのカウンター] 新大阪駅の高架下、改札の外の味の小路のいちばん奥にある9席のうどんのカウンター。Minami で有名だという釜たけうどんの店 (2026年7月)。ひとりでうどんを作り、ゆで、出している (2026年)。頼むならちくわ天と半熟卵天のぶっかけ (880円): つやのある、きれいにたたまれた麺はもちもちでなめらか、大きなサクサクのちくわ天ととろりとした半熟卵天、生姜、ねぎ、レモン。冷でも温でも。和牛と舞茸天の肉ぶっかけ (1,350円) やかすうどん (930円) はもっとしっかり。並ぶ前に券売機で食券を。昼の待ち時間は短いが、列は途切れない。昼だけ、火曜休み。新幹線の乗りかえにちょうどいい。',
  });
}

// ================================================================ 鯛白湯らーめん ○de▽
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27107953/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://silver-grape.com/shop/';
  const H = day(['10:30', '22:30']);
  put({
    id: 'osaka_tai_paitan_ramen_marusankaku_shin_osaka', name: '鯛白湯らーめん ○de▽ (Tai Paitan Ramen ○de▽)', category: 'OMNI',
    lat: 34.732823, lng: 135.494122, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; the toppings include fried burdock.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sea-bream broth, sea-bream sashimi and pork chashu.',
    hours_raw: 'Daily 10:30–22:30 (food last order 22:00), open all year except 30 December–3 January; late arrivals welcome (Tabelog). Buy a ticket at the machine first, cash only (Tabelog; October 2026). 15 seats: 7 at the counter, one table for four, two for two; non-smoking; children and strollers welcome (Tabelog). Six people ahead at 13:00 on a weekday; half full at 18:40 on a rainy night (October 2026). Staff took a diner\'s suitcase without being asked (November 2026). Opened 14 November 2018 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: '西宮原1-5-6, about 5 min from exit 4 of Shin-Osaka Stn (Midosuji Line) (Tabelog); the same street number as the okonomiyaki shop osaka_tonton_byoshi_nishimiyahara',
    cuisine: 'Ramen built on sea bream (Tabelog: "Meccha Tai") · Tabelog Ramen 100 (OSAKA 2023–2025) · tai paitan "torori", rich and creamy, from ¥1,290 with sea-bream rice (November 2026) · special tai paitan ¥1,460 with two slices of kombu-cured sea bream, smoked seasoned egg, chashu, fried burdock and menma cut into circles and triangles (October 2026) · clear sea-bream soup ("tai clear") with crisp sea-bream skin and an oyster ajillo to add (October 2026) · "Merari", tai paitan with chili (October 2026) · tsukemen (Tabelog) · sides: sea-bream rice (to pour the broth over), "Blissful Two Pieces" of sea-bream and meat sushi ¥450 (October 2026) · large noodles ¥100 (November 2025)',
    website: SITE, gmaps: gm('鯛白湯らーめん ○de▽ 新大阪'), menu_url: null,
    notes: "[Ramen · Shin-Osaka west, sea-bream paitan in a kaiseki-like room] A 15-seat ramen shop five minutes from the Shin-Osaka subway exit, open since 2018 and in Tabelog's Ramen 100 every year from 2023 to 2025, where everything is built on sea bream. The tai paitan is blended at the counter (one diner saw the bow-tied chef finish it with a blender) into a thick, creamy, \"liquid sea bream\" broth over medium-thin noodles, and the special bowl adds kombu-cured sea-bream slices, a smoked egg, fried burdock and menma cut into the ○ and ▽ of the name (¥1,460). There is a clear sea-bream soup too, tsukemen, and sea-bream rice to finish with the broth. The room is designed like a kaiseki restaurant, and the staff are attentive. On one October 2026 evening most of the customers were from overseas. Cash only.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff of 株式会社 銀の葡萄 (unnamed)'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: a ramen shop where every main bowl features sea bream, "Meccha Tai"; an interior like a kaiseki restaurant, chosen music, roomy seats and attentive staff; opened 14 November 2018; Tabelog Ramen OSAKA 100 2023–2025. Per the operator\'s shop page (silver-grape.com/shop/, read 2026-11-01): 株式会社 銀の葡萄 lists 鯛白湯らーめん ○de▽ 新大阪店, 三ノ宮店 and two Hong Kong shops, describing the brand as "まるでラーメン屋じゃないみたいな店", a rich sea-bream paitan in a space that overturns the fixed idea of a ramen shop. Per reviews: a chef in a bow tie finishing the broth with a blender (October 2026); staff warmed the ladle before handing it over (October 2026).',
      philosophy: '"A shop that hardly seems like a ramen shop" (まるでラーメン屋じゃないみたいな店; operator\'s site).', specialty: 'Tai paitan ramen; tai clear soup.',
      anecdotes: [
        { text: '"I could see the charming chef in a bow tie finishing the broth with a blender … with a texture that felt like liquid sea bream." — October 2026.', source: R + 'B538220483/' },
        { text: '"The staff\'s presentation was impressive; [the staff] even warmed the ladle before handing it to me." — October 2026; about 80% of the room were overseas visitors that evening.', source: R + 'B538104933/' },
        { text: 'スーツケースを持っていたのですが、こちらからお願いする前に気づいて声をかけ、預かってくださいました。 ("I had a suitcase, and before I asked, the staff noticed and offered to keep it.") — November 2026.', source: R + 'B517745788/' },
      ],
      japanese_sources_summary: '運営会社のサイト (株式会社 銀の葡萄、店舗紹介): 鯛白湯らーめん ○de▽ 新大阪店 (大阪市淀川区西宮原1-5-6)、三ノ宮店、香港の2店、まるでラーメン屋じゃないみたいな店、濃厚鯛白湯にラーメン屋の固定概念を覆す空間。食べログ (店舗会員): 鯛白湯らーめん ○de▽、ラーメン・つけ麺、地下鉄新大阪駅4番出口から徒歩5分、毎日10:30〜22:30 (L.O.22:00)、12月30日〜1月3日休み、現金のみ、15席、禁煙、子ども可、2018年11月14日オープン、ラーメン百名店 OSAKA 2023〜2025、すべてのメインのラーメンに鯛、懐石料理店のような内装。口コミ(2025年11月〜2026年11月): 鯛白湯とろり＋鯛めし1,290円、具の多い特製の鯛白湯1,460円、鯛の昆布じめ、燻製の味玉、揚げごぼう、○と▽のメンマ、澄んだ鯛のスープ、牡蠣のアヒージョ、辛い Merari、鯛と肉の寿司2貫450円、蝶ネクタイの大将がブレンダーで仕上げる、スーツケースを預かってくれた、海外からの客が多い夜も。',
      confidence: 'high', sources: [TB, SITE, R + 'B517745788/', R + 'B537185916/', R + 'B537302330/', R + 'B537306139/', R + 'B538104933/', R + 'B538139268/', R + 'B538194346/', R + 'B538220483/', R + 'B538264154/', R + 'B538269796/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash ticket machine; one October 2026 evening most customers were from overseas. No English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西宮原1-5-6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and the operator\'s shop list; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西宮原一丁目5番6号 (go) 15m; 9 m from osaka_tonton_byoshi_nishimiyahara at the same street number; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B517745788/', R + 'B538139268/', R + 'B538194346/'],
    price_note: 'Ticket prices from October–November 2026 reviews.', last_checked: TODAY, items: [
      it('鯛白湯とろり＋鯛めし', '', 'Tai paitan "torori" with sea-bream rice', '¥1,290', 'Ramen', 'no', 'no', 'November 2026.', 'torori_taimeshi'),
      it('', '', 'Special tai paitan (kombu-cured sea bream, smoked egg, fried burdock)', '¥1,460', 'Ramen', 'no', 'no', 'October 2026.', 'tokusei_tai_paitan'),
      it('', '', 'Special tai clear soup ramen', '', 'Ramen', 'no', 'no', 'October 2026.', 'tai_chintan'),
      it('', '', '"Blissful Two Pieces": sea-bream and meat sushi', '¥450', 'Sides', 'ask', 'no', 'October 2026.', 'nikan_sushi'),
    ] }, {
    cuisine: '鯛が主役のラーメン (食べログ: "Meccha Tai")・食べログ ラーメン百名店 (OSAKA 2023〜2025)・濃厚でクリーミーな鯛白湯「とろり」、鯛めしつきで1,290円 (2026年11月)・具の多い特製の鯛白湯1,460円、鯛の昆布じめ2切れ、燻製の味玉、チャーシュー、揚げごぼう、○と▽に切ったメンマ (2026年10月)・パリパリの鯛の皮をのせた澄んだ鯛のスープ、追加で牡蠣のアヒージョ (2026年10月)・唐辛子をきかせた "Merari" (2026年10月)・つけ麺 (食べログ)・サイド: スープをかける鯛めし、鯛と肉のお寿司2貫で450円 (2026年10月)・大盛り100円 (2025年11月)',
    neighborhood: '西宮原1-5-6、地下鉄新大阪駅4番出口から徒歩約5分 (食べログ)。お好み焼きのトントン拍子と同じ番地',
    gf_detail: 'グルテンフリーではありません。小麦の麺で、揚げごぼうものる。',
    vegan_detail: 'ヴィーガンではありません。鯛のスープ、鯛の刺身、豚のチャーシュー。',
    notes: '[ラーメン・新大阪の西、懐石料理店のような店の鯛白湯] 地下鉄新大阪駅の出口から5分、15席のラーメン店で、2018年から。食べログのラーメン百名店に2023年から2025年まで毎年選ばれ、すべてが鯛。鯛白湯はカウンターで仕上げ (蝶ネクタイの大将がブレンダーにかけるのを見た人も)、とろりとクリーミーな「液体の鯛」のようなスープに中細麺。特製には鯛の昆布じめ、燻製の味玉、揚げごぼう、店名の○と▽に切ったメンマがのって1,460円。澄んだ鯛のスープ、つけ麺、締めにスープをかける鯛めしも。店は懐石料理店のような内装で、スタッフの気配りもいい。2026年10月のある夜は、客のほとんどが海外から。現金のみ。',
  });
}

// ================================================================ SOSラーメン 新大阪
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27052617/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_sos_ramen_shin_osaka', name: 'SOSラーメン 新大阪 (SOS Ramen Shin osaka)', category: 'OMNI',
    lat: 34.731286, lng: 135.503706, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles in a shoyu broth with spicy meat miso.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken-based shoyu broth (2017 review), minced-meat miso and chashu.',
    hours_raw: 'Thursdays only: lunch from 11:30 and dinner from 18:00, 40 bowls each, closing when the noodles or soup run out; temporary closures possible (Tabelog). A January 2025 diner mentions Thursdays and Saturdays; the current listing says Thursdays only. Cash only (Tabelog). 8 counter seats; non-smoking (Tabelog). Free small rice at lunch (August 2023, January 2025).',
    hours: {}, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: '東中島1-13-43, ground floor of 新大阪第一ダイヤモンドマンション — 7 min from JR Shin-Osaka Stn, 12 min from Nishinakajima-Minamigata (Tabelog)',
    cuisine: 'Spicy shoyu ramen in the style of Taiwan ramen (reviews) · SOS ramen: shoyu broth with garlic chives, bean sprouts and a generous spicy minced-meat miso (June 2026) · SOS chashu ramen ¥1,100 (July 2026) · spice levels up to 6, from two chili toppings, one fragrant and one fiercely hot (June 2024, July 2026) · grated garlic and vinegar to add (2023, October 2026)',
    website: null, gmaps: gm('SOSラーメン 新大阪 東中島'), menu_url: null,
    notes: "[Ramen · Shin-Osaka east side, open Thursdays only] A self-styled \"phantom\" ramen counter seven minutes from the Shin-Osaka east side, with eight seats and one day a week: Thursdays, 40 bowls at lunch and 40 at dinner. The bowl is a shoyu ramen in the spirit of Taiwan ramen, with garlic chives, bean sprouts and a heap of spicy minced-meat miso, and you choose the heat from mild up to level 6 with two chili toppings, one fragrant and one painful (2024–2026). Chashu ramen is ¥1,100 (July 2026). Reviews split, from \"incredibly delicious\" after ten years away (August 2025) to below average (January 2025). The owner hums along to the shop's own song while cooking (June 2026). Cash only; check it is Thursday.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), the master (reviews)'], origin: null,
      background: 'Per the Tabelog listing: open Thursdays only, 40 bowls per sitting, closing when noodles or soup run out. Per reviews: "The owner, who seemed to be of advanced age, was happily humming while preparing the dishes", with the shop\'s original background music playing (June 2026); "The owner looks intimidating, but [is] actually very kind once you start talking" (June 2024); "It was great to see the master looking well" after more than ten years (August 2025); the owner welcomed a diner ten minutes before the end of lunch and explained the ramen (April 2026).',
      philosophy: null, specialty: 'SOS ramen with spicy meat miso.',
      anecdotes: [
        { text: '"As I listened to the original BGM playing in the restaurant … I couldn\'t help but smile." — June 2026, SOS ramen at spice level 5.', source: R + 'B303122919/' },
        { text: '"You can choose from two types of chili powder: one with a flavorful heat and the other with a painful heat." — June 2024.', source: R + 'B487496075/' },
        { text: '"I was finally able to visit SOS Ramen after more than 10 years … It was great to see the master looking well too!" — August 2025.', source: R + 'B512488964/' },
      ],
      japanese_sources_summary: '食べログ: SOSラーメン 新大阪、ラーメン、大阪市東淀川区東中島1-13-43 新大阪第一ダイヤモンドマンション 1F、JR 新大阪駅から徒歩7分、木曜のみ営業、昼11:30〜・夜18:00〜、各40杯、麺かスープがなくなりしだい終了、臨時休業あり、現金のみ、カウンター8席、禁煙。口コミ(2023年7月〜2026年10月): 木曜だけの店、醤油ラーメンに辛い肉みそ、ニラ、もやし、台湾ラーメンのよう、辛さは6まで、2種類の唐辛子、SOS chashu ramen 1,100円、昼は小ライスのサービス、おろしニンニク、店主の鼻歌とオリジナルの BGM、評価は分かれる。',
      confidence: 'medium', sources: [TB, R + 'B303122919/', R + 'B469014203/', R + 'B470406036/', R + 'B487496075/', R + 'B499354843/', R + 'B512488964/', R + 'B528574690/', R + 'B531030651/', R + 'B531586991/', R + 'B537877768/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Eight counter seats; choose a spice level. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市東淀川区東中島1-13-43 新大阪第一ダイヤモンドマンション 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市東淀川区東中島一丁目13番43号 (go) 27m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B531030651/', R + 'B303122919/'],
    price_note: 'One price from a July 2026 review; no menu published.', last_checked: TODAY, items: [
      it('', '', 'SOS ramen with spicy minced-meat miso (spice level of your choice)', '', 'Ramen', 'no', 'no', 'June 2026.', 'sos_ramen'),
      it('', '', 'SOS chashu ramen', '¥1,100', 'Ramen', 'no', 'no', 'July 2026.', 'sos_chashu'),
    ] }, {
    cuisine: '台湾ラーメンのような辛い醤油ラーメン (口コミ)・SOSラーメン: 醤油のスープにニラ、もやし、たっぷりの辛い肉みそ (2026年6月)・SOS chashu ramen 1,100円 (2026年7月)・辛さは6まで、香りのいい唐辛子と、とても辛い唐辛子の2種類 (2024年6月、2026年7月)・おろしニンニクや酢を足して (2023年、2026年10月)',
    neighborhood: '東中島1-13-43、新大阪第一ダイヤモンドマンションの1階。JR 新大阪駅から徒歩7分、西中島南方から12分 (食べログ)',
    gf_detail: 'グルテンフリーではありません。醤油のスープに小麦の麺と辛い肉みそ。',
    vegan_detail: 'ヴィーガンではありません。鶏ベースの醤油のスープ (2017年の口コミ)、ひき肉の肉みそ、チャーシュー。',
    notes: '[ラーメン・新大阪の東側、木曜だけの店] 新大阪の東側、駅から7分の8席のラーメンのカウンターで、営業は週に1日、木曜だけ。昼40杯、夜40杯。台湾ラーメンのような醤油ラーメンに、ニラ、もやし、辛い肉みそがたっぷり。辛さは甘口から6まで、香りのいい唐辛子と痛いほど辛い唐辛子で選ぶ (2024〜2026年)。SOS chashu ramen は1,100円 (2026年7月)。評価は分かれ、10年ぶりに食べてとてもおいしかったという人 (2025年8月) も、平均以下という人 (2025年1月) も。店主はオリジナルの曲を流しながら鼻歌まじりに作る (2026年6月)。現金のみ。木曜かどうか確かめてから。',
  });
}

// ================================================================ 割烹 八彩 新大阪店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27091119/'; const R = TB + 'dtlrvwlst/';
  const D = day(['17:00', '22:00']); const WE = day(['12:00', '15:00'], ['17:00', '22:00']);
  put({
    id: 'osaka_kappou_hassai_shin_osaka', name: '割烹 八彩 新大阪店 (Kappou Hassai Shin osaka ten)', category: 'OMNI',
    lat: 34.739109, lng: 135.499432, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information. One kaiseki course of the month built on dashi, with soy-dressed sashimi, sauced simmered dishes and fried items; nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish-led kaiseki course built on dashi.',
    hours_raw: 'Tue–Sun and holidays 17:00–22:00; lunch on weekends and holidays 12:00–15:00 (last seating 13:00); closed Monday, but the shop says to call even on closing days (Tabelog). Reservations accepted; when online booking shows no seats, phone (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR; no service charge (Tabelog\'s original text: なし). 20 seats: 8 at the counter and 3 tables for four; private rooms for 4 to 20, with groups of nine or more seated privately; non-smoking (Tabelog). Opened 15 March 2016 (Tabelog).',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '宮原2-13-1, ground floor of サンパレス ("Sun Palace", September 2026 review), in a quiet residential area — 2 min from exit 4 of Higashi-Mikuni Stn, 6 min from Shin-Osaka Stn (Tabelog; March 2026)',
    cuisine: 'Kaiseki course of the month (Tabelog) · "Seasonal Kaiseki", 8 dishes ¥7,800 tax included (Tabelog; February–May 2026) · "Mini Kaiseki" for drinkers, the same course without rice and dessert, ¥5,800 (May 2026) · a March 2026 course: spring cabbage and sakura shrimp on a celeriac and new-potato purée; sakura domyoji with clam; Akashi sea bream with flower wasabi and irizake, and Kochi horse mackerel; lotus-root dumpling with shrimp; an assortment of firefly squid in Shaoxing wine, egg tofu, ribbonfish, anago sushi and more; a small pot of trout with watercress and Yodo daikon; clay-pot rice of mackerel and young burdock, red miso soup; mascarpone yokan · clay-pot rice with sakura shrimp, spring cabbage and young ginger at a May 2026 lunch, the leftovers wrapped as onigiri to take home · about 20 sakes and wines from a temperature-controlled showcase, with pairing advice (Tabelog; March 2026)',
    website: null, gmaps: gm('割烹 八彩 新大阪店 宮原'), menu_url: null,
    notes: "[Kaiseki · Higashi-Mikuni, a monthly course by the station] A 20-seat kappo in a quiet residential block two minutes from Higashi-Mikuni Station and six from Shin-Osaka, open since 2016, with an eight-seat counter where the chefs cook in front of you and private rooms for groups. There is one kaiseki course a month, eight dishes for ¥7,800 (2026), or a ¥5,800 mini version without rice and dessert for those who mainly drink. A March 2026 course ran from sakura shrimp and spring cabbage through Akashi sea bream with irizake, a small pot of trout and Yodo daikon, to mackerel clay-pot rice. About 20 sakes are kept in a showcase and matched to each dish. Diners praise the explanations and the farewell bows at the door (May 2026). Weekend lunch too.",
    chef_bio: { chef_name: null, roles: ['Chefs at the counter (unnamed); a sake sommelier on staff (March 2026 review)'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: a seasonal kaiseki course in a calm space, about 20 sakes and wines by the bottle or glass, small pots of seasonal ingredients, dishes "that transcend genres"; opened 15 March 2016. Per reviews: dishes prepared in front of the counter (February and May 2026); detailed explanations of each dish and drink (May 2026); sake chosen by the sake sommelier (March 2026); staff saw guests to the door and bowed until out of sight (May 2026).',
      philosophy: '"Enjoy seasonal flavors with exquisite dishes that transcend genres" (Tabelog).', specialty: 'Monthly kaiseki course; small pots; clay-pot rice.',
      anecdotes: [
        { text: '"The rice cooked in a clay pot with sakura shrimp, spring cabbage, and young ginger was so delicious that [the staff] kindly offered to wrap up the leftovers as onigiri for me to take home." — May 2026, a Sunday lunch.', source: R + 'B529165818/' },
        { text: '"Everything was tasty, but as a sashimi lover, I wished there had been some in the JPY 7800 course." — February 2026.', source: R + 'B523220213/' },
        { text: '"I tried the Mini Kaiseki Course for JPY 5,800, which featured meticulously prepared dishes full of creativity." — May 2026.', source: R + 'B528536734/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 割烹 八彩 新大阪店、日本料理・海鮮、大阪市淀川区宮原2-13-1 サンパレス 1F、Higashi-Mikuni 駅4番出口から徒歩2分、新大阪駅から6分、火〜日・祝17:00〜22:00、土日祝のランチ12:00〜15:00 (最終入店13:00)、月曜休み (休みの日も電話で相談可)、予約可、カード可、電子マネー・QR 不可、サービス料なし、20席 (カウンター8、4名テーブル3)、個室4〜20名、禁煙、2016年3月15日オープン、季節の懐石コース8品7,800円 (税込)、日本酒約20種とワイン、季節の小鍋。口コミ(2026年2月〜10月): 毎月かわる懐石、ミニ懐石5,800円、目の前で仕上げる、料理と酒のていねいな説明、日本酒のソムリエ、桜えびと春キャベツ、Akashi の鯛と irizake、小鍋、土鍋ごはん、残りはおにぎりに、見えなくなるまで見送り、Higashi-Mikuni の静かな住宅街。',
      confidence: 'medium', sources: [TB, R + 'B523150590/', R + 'B523220213/', R + 'B524422461/', R + 'B524526684/', R + 'B527338688/', R + 'B527981831/', R + 'B528536734/', R + 'B529165818/', R + 'B535004058/', R + 'B537994110/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One course with explanations at the counter (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区宮原2-13-1 サンパレス 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区宮原二丁目13番1号 (go) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B524526684/', R + 'B528536734/'],
    price_note: 'Course price from the Tabelog listing (tax included); mini course from a May 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Seasonal kaiseki course, 8 dishes', '¥7,800', 'Course', 'ask', 'no', 'Tabelog; February–May 2026.', 'kaiseki_course'),
      it('', '', 'Mini kaiseki course (no rice or dessert)', '¥5,800', 'Course', 'ask', 'no', 'May 2026.', 'mini_kaiseki'),
    ] }, {
    cuisine: '毎月の懐石コース (食べログ)・季節の懐石、8品7,800円、税込 (食べログ、2026年2〜5月)・お酒を飲む人向けの「ミニ懐石」、同じコースからごはんとデザートを抜いて5,800円 (2026年5月)・2026年3月のコース: 春キャベツと桜えび、セロリアックと新じゃがのピュレ。桜色の道明寺とハマグリ。Akashi の鯛に花わさびと irizake、Kochi のアジ。エビとレンコンのまんじゅう。ホタルイカの紹興酒漬け、玉子豆腐、タチウオ、穴子寿司などの八寸。マスとクレソンと Yodo の大根の小鍋。サバと新ごぼうの土鍋ごはん、赤だし。マスカルポーネの羊かん・2026年5月の昼の、桜えびと春キャベツと新生姜の土鍋ごはん、残りはおにぎりにして持ち帰り・温度を管理したショーケースの約20種の日本酒とワイン、料理に合わせて選んでくれる (食べログ、2026年3月)',
    neighborhood: '宮原2-13-1、サンパレスの1階、静かな住宅街 (2026年3月)。Higashi-Mikuni 駅4番出口から徒歩2分、新大阪駅から6分 (食べログ)',
    gf_detail: '予約時に要確認。グルテンの情報なし。だしを使う月がわりの懐石のコースひとつで、醤油で食べる刺身、たれをかけた煮物、揚げ物もある。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではありません。だしを使う魚が中心の懐石のコース。',
    notes: '[日本料理・Higashi-Mikuni、駅近くの月がわりのコース] Higashi-Mikuni 駅から2分、新大阪から6分の静かな住宅街にある20席の割烹で、2016年から。8席のカウンターでは目の前で料理を仕上げ、グループには個室も。コースは毎月かわる懐石ひとつで、8品7,800円 (2026年)。おもに飲む人には、ごはんとデザートを抜いた5,800円のミニ版も。2026年3月のコースは、桜えびと春キャベツから、Akashi の鯛と irizake、マスと Yodo の大根の小鍋、そしてサバの土鍋ごはんまで。日本酒は約20種をショーケースで管理し、料理ごとに合わせてくれる。ていねいな説明と、店の前で見えなくなるまでのお見送りが好評 (2026年5月)。週末は昼も。',
  });
}

save();
