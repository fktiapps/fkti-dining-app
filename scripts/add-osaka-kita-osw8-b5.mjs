// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), core queue, circle shin-osaka; worker osw8 (lane: Tabelog id odd), batch 5.
//   + 龍旗信LEO Ryukishin LEO (shio ramen in アルデ新大阪, from the Sakai shio-ramen shop 龍旗信; full ramen block)
//   + レストラン ヨコオ 大阪のれんめぐり店 Restaurant YOKOO (beef-katsu sandwiches and curry inside the Shinkansen gates; from a Fukushima yoshoku house)
//   + ねぎ焼 やまもと 新大阪店 Negiyaki Yamamoto Shin osaka ten (Juso's negiyaki house, inside the Shinkansen gates)
//   + 秀月 Shugetsu (one-man okonomiyaki and kushikatsu counter by the Shin-Osaka east exit, since 1999)
//   - skipped らーめん 熊五郎 新大阪１号店 27019003: chain (熊五郎 shops at Shin-Osaka, Tennoji Apollo and Senchu Pal per a web search,
//     2026-11-01; the name carries "1号店").
//   Chain check of the four added:
//   - Ryukishin: a review says the shop is "a specialty shop for Shio Ramen that originated in Osaka", another mentions "the main store in Sakai";
//     a web search (2026-11-01) shows 株式会社 龍旗信 with a 総本店 in Sakai and a Kansai Airport shop. A small group, not in data; flagged.
//   - YOKOO and Yamamoto: station outposts in the "Osaka Noren Meguri" food court of well-known single restaurants (YOKOO in Fukushima since 1971,
//     per an August 2026 review; Yamamoto, the negiyaki house in Juso, per an October 2026 review); neither parent is in data.
//   - Shugetsu: one shop, run by its owner alone (reviews).
//   None is in data/osaka.json (grep by id, name and address, 2026-11-01). Nearest record to Shugetsu: osaka_chochin_supika_shin_osaka_higashiguchi,
//   29 m (address_ja 東中島1-20-9; Shugetsu is 1-19-13), so no shared-building claim. YOKOO and Yamamoto are 13 m apart in the same food court
//   (Tabelog points kept). GSI matches the whole station block (西中島五丁目16番1号) for the three station shops, 71–87 m from their Tabelog points.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw8-5');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27019003', 'chain: らーめん 熊五郎 (shops at Shin-Osaka, Tennoji Apollo and Senchu Pal per a web search 2026-11-01; this one is "新大阪１号店")');

// ================================================================ 龍旗信LEO
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27098049/'; const R = TB + 'dtlrvwlst/';
  const H = day(['10:00', '22:30']);
  put({
    id: 'osaka_ryukishin_leo_shin_osaka', name: '龍旗信LEO (Ryukishin LEO)', category: 'OMNI',
    lat: 34.733617, lng: 135.500096, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; gyoza and soy-flavoured kara-age on the side.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken broth with a mussel salt tare (October 2026), chicken and pork chashu.',
    hours_raw: 'Daily 10:00–22:30 (Tabelog). Buy a ticket at the machine by the entrance (October 2026). PayPay and Rakuten Pay; no cards or e-money (Tabelog). 33 seats with a counter; non-smoking; wheelchair accessible; children welcome (Tabelog); roomy enough for a carry-on suitcase (October 2026). Almost full at 11:30 (October 2026); food comes in about five minutes (September–October 2026). Side rice dishes said to be half price at lunch (September 2026). Opened 28 April 2017 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: '西中島5-16-1, アルデ新大阪 on the 2nd floor of JR Shin-Osaka Stn (Tabelog), in the dining area by the transfer route (October 2026)',
    cuisine: 'Shio ramen (Tabelog; reviews) · shio ramen, a clear golden broth of chicken bones, whole chickens, kombu and dried shiitake with a salt tare built on mussels (October 2026 review describing the shop\'s recipe) · chicken shio ramen ¥1,350 with chicken chashu (September 2026), with a hint of lemon or citrus (October 2026) · premium shio ramen and shio ramen DX (October 2026) · shio tonkotsu ramen ¥1,030 (July 2024), tonkotsu ramen ¥1,250 (September 2026) · cold seafood ramen ¥1,300 with rare pork and chicken chashu and lemon (October 2026) · tsukemen, garlic-heavy (October 2026) · large size ¥150 (July 2024) · shio gyoza, kara-age, chashu rice bowl (October 2026)',
    website: 'http://www.ryukishin.com/', gmaps: gm('龍旗信LEO アルデ新大阪'), menu_url: null,
    notes: "[Ramen · Shin-Osaka Station, Sakai shio ramen by the platforms] A 33-seat shio ramen shop in アルデ新大阪, the station's second-floor dining area, from the Sakai shio-ramen shop 龍旗信, open from 10:00. The classic bowl is a clear, golden chicken broth with kombu and shiitake and a mussel-salt tare, \"light yet surprisingly rich\" under a sheen of chicken fat (September 2026), with medium-thick straight noodles; the chicken shio adds tender chicken chashu and a citrus lift for ¥1,350. There is shio tonkotsu, a cold seafood ramen in summer, shio gyoza and kara-age. Fast: food in about five minutes, which suits a tight connection. Some regulars of the Sakai shop find it slipped (October 2026), and one diner noted staff from overseas.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff of 龍旗信 (unnamed)'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: Ryukishin LEO, ramen, gyoza and kara-age in アルデ新大阪, opened 28 April 2017; website ryukishin.com (did not load on 2026-11-01). Per reviews: "a specialty shop for Shio Ramen that originated in Osaka" whose shio ramen "features a broth made from simmering chicken bones, whole chickens, kombu kelp, and dried shiitake mushrooms, combined with a salt sauce that concentrates the umami of natural mussels" (October 2026); "Just like the main store in Sakai, the quality has definitely declined … It was much better when [the shop was] located in Ishizu, Sakai" and "All the staff were foreigners" (October 2026); "The staff provided pleasant service" (September 2026).',
      philosophy: null, specialty: 'Shio ramen; chicken shio ramen.',
      anecdotes: [
        { text: '"The broth had a layer of what seemed to be chicken fat. Though it appeared light, it was surprisingly rich." — September 2026, chicken shio ramen ¥1,350.', source: R + 'B535781318/' },
        { text: '"The gyoza arrived in about a minute after I was seated … this place is definitely a friend to busy salarymen." — September 2026.', source: R + 'B535509934/' },
        { text: '"I had only 20 minutes before my shinkansen departure … I finished my meal in 3 minutes." — October 2026.', source: R + 'B537809853/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 龍旗信LEO、ラーメン・餃子・からあげ、大阪市淀川区西中島5-16-1 JR新大阪駅 2F アルデ新大阪、毎日10:00〜22:30、カード・電子マネー不可、PayPay・楽天ペイ可、33席、禁煙、車いす可、子ども可、2017年4月28日オープン。口コミ(2024年7月〜2026年10月): 入口の券売機、大阪発祥の塩ラーメン専門店、鶏ガラ、丸鶏、昆布、干し椎茸のスープに天然のムール貝のうまみの塩ダレ、澄んだ金色のスープ、鶏塩ラーメン1,350円、鶏チャーシュー、レモンや柑橘の香り、塩とんこつ、とんこつラーメン1,250円、冷やしの魚介ラーメン1,300円、つけ麺はニンニクが強い、中太のストレート麺、もちもち、塩加減はちょうどいい、鶏油が多めという声、料理が早い、Sakai の本店のころのほうがよかったという声、スタッフは外国の人。',
      confidence: 'medium', sources: [TB, R + 'B438515138/', R + 'B488651699/', R + 'B535313562/', R + 'B535509934/', R + 'B535781318/', R + 'B536892056/', R + 'B537476545/', R + 'B537671110/', R + 'B537694197/', R + 'B537849921/', R + 'B538126415/', R + 'B538329552/', R + 'B538336384/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine at the entrance; staff from overseas (October 2026). No English menu evidence found.' },
    safety: SAFETY0,
    ramen: {
      broth_base: ['chicken', 'shellfish'], broth_texture: 'chintan', tare: ['shio'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'medium-thick', shape: 'straight', hydration: null, handmade: false, notes: 'Straight medium-thick noodles, chewy and smooth (September–October 2026); thin noodles in the cold ramen (October 2026).' },
      regional_style: [], sub_genre: ['ramen', 'tsukemen'],
      signature_bowl: 'Chicken shio ramen, ¥1,350 (September 2026).',
      chashu: 'Tender chicken chashu (September 2026); pork chashu with a pleasant saltiness (October 2026).',
      notable_toppings: ['chicken chashu', 'lemon (cold ramen)', 'menma'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken broth; mussel tare.' },
      pantheon: 'Shin-Osaka Station\'s Sakai-born shio: a clear golden chicken broth with a mussel-salt tare.',
      profile: { richness: 3, oiliness: 3, clarity: 4, tare_strength: 3, noodle_firmness: 3, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B535781318/', '"Though it appeared light, it was surprisingly rich" — mid-scale between the two.'],
        oiliness: [R + 'B538336384/', '"I felt there was a bit too much oil (maybe chicken fat)"; "a layer of what seemed to be chicken fat" (B535781318).'],
        clarity: [R + 'B537849921/', '"The clear, golden broth"; "The clear broth had a refined flavor" (B537694197).'],
        tare_strength: [R + 'B538336384/', '"The flavor was just right with a perfect saltiness."'],
        noodle_firmness: [R + 'B438515138/', '"The noodles had a nice chewiness"; "smooth and easy to eat" (B538336384) — mid-scale.'],
        aroma_punch: [R + 'B537671110/', '"A relatively classic taste, lacking any special impact"; "the citrus flavor enhanced the refreshing taste, making it light" (B538126415) — placed low.'],
      },
    },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島5-16-1 JR新大阪駅 2F アルデ新大阪',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; GSI 大阪府大阪市淀川区西中島五丁目16番1号 (go) 71m, the station block; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535781318/', R + 'B488651699/', R + 'B536892056/'],
    price_note: 'Ticket prices from 2024–2026 reviews; no menu published.', last_checked: TODAY, items: [
      it('', '', 'Chicken shio ramen', '¥1,350', 'Ramen', 'no', 'no', 'September 2026.', 'tori_shio'),
      it('', '', 'Tonkotsu ramen', '¥1,250', 'Ramen', 'no', 'no', 'September 2026.', 'tonkotsu'),
      it('', '', 'Cold seafood ramen with rare pork and chicken chashu', '¥1,300', 'Ramen', 'no', 'no', 'October 2026.', 'hiyashi_gyokai'),
      it('', '', 'Shio gyoza', '', 'Sides', 'no', 'no', 'October 2026.', 'shio_gyoza'),
    ] }, {
    cuisine: '塩ラーメン (食べログ、口コミ)・塩ラーメン: 鶏ガラ、丸鶏、昆布、干し椎茸の澄んだ金色のスープに、天然のムール貝のうまみの塩ダレ (店の作り方を書いた2026年10月の口コミ)・鶏チャーシューの鶏塩ラーメン1,350円 (2026年9月)、レモンや柑橘の香り (2026年10月)・Premium の塩ラーメンと塩ラーメン DX (2026年10月)・塩とんこつラーメン1,030円 (2024年7月)、とんこつラーメン1,250円 (2026年9月)・レアの豚と鶏のチャーシュー、レモンの冷たい魚介のラーメン1,300円 (2026年10月)・ニンニクの強いつけ麺 (2026年10月)・大盛り150円 (2024年7月)・塩の gyoza、kara-age、チャーシュー丼 (2026年10月)',
    neighborhood: '西中島5-16-1、JR 新大阪駅2階のアルデ新大阪 (食べログ)、乗りかえの通路そばの飲食店のエリア (2026年10月)',
    gf_detail: 'グルテンフリーではありません。小麦の麺で、サイドに gyoza と醤油味の kara-age。',
    vegan_detail: 'ヴィーガンではありません。鶏のスープにムール貝の塩ダレ (2026年10月)、鶏と豚のチャーシュー。',
    notes: '[ラーメン・新大阪駅、ホームのそばの Sakai の塩ラーメン] 駅の2階の飲食店のエリア、アルデ新大阪にある33席の塩ラーメンの店で、Sakai の塩ラーメンの店、龍旗信の系列。10時から開いている。定番は鶏と昆布と椎茸の澄んだ金色のスープにムール貝の塩ダレで、鶏油が浮き「見た目は軽いのに意外と濃い」(2026年9月)。麺は中太のストレート。鶏塩ラーメンはやわらかい鶏チャーシューと柑橘の香りで1,350円。塩とんこつ、夏の冷たい魚介ラーメン、塩の gyoza、kara-age も。料理は約5分で出てくるので、乗りかえが短いときに。Sakai の店の常連には味が落ちたという声も (2026年10月)。スタッフは海外の人だったという口コミも。',
  });
}

// ================================================================ レストラン ヨコオ 大阪のれんめぐり店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27095351/'; const R = TB + 'dtlrvwlst/';
  const H = day(['10:00', '21:30']);
  put({
    id: 'osaka_restaurant_yokoo_noren_meguri_shin_osaka', name: 'レストラン ヨコオ 大阪のれんめぐり店 (Restaurant YOKOO Oosaka no ren meguri ten)', category: 'OMNI',
    lat: 34.733906, lng: 135.500417, cuisine_type: 'yoshoku',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: breaded beef and egg cutlets in sandwich bread, and curry.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef cutlets, fried dashi omelette, beef curry.',
    hours_raw: 'Daily 10:00–21:30 (last order 21:10), open all year (Tabelog). Inside the Shinkansen ticket gates: you need a Shinkansen ticket to reach it (Tabelog; August 2026). Phone orders for katsu sandwiches welcome, even a single item (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) and transport IC cards; no QR (Tabelog). 5 counter seats; non-smoking; wheelchair accessible; children welcome (Tabelog). Takeaway sandwiches and bento for the train (Tabelog). Opened 7 November 2016 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '西中島5-16-1, the "Osaka Noren Meguri" food court inside the JR Tokai Shinkansen gates at Shin-Osaka Stn (Tabelog)',
    cuisine: 'Kansai-style thick-cut beef katsu sandwiches and omurice (Tabelog) · beef katsu sandwich of tenderloin cooked medium-rare, six pieces (August 2026; ¥1,890 in 2022) · mixed sandwich of beef katsu and a deep-fried dashi omelette: six pieces ¥1,850 (October 2026), small ¥1,180 (August–September 2026), small with a drink ¥1,810 (September 2026) · beef katsu curry ¥1,880 (September 2026) · draft beer (2026)',
    website: 'http://www.osaka-norenmeguri.com/', gmaps: gm('レストラン ヨコオ 大阪のれんめぐり 新大阪'), menu_url: null,
    notes: "[Yoshoku · Shin-Osaka Station, beef-katsu sandwiches inside the Shinkansen gates] A five-seat counter and takeaway window in the Osaka Noren Meguri food court inside the Shinkansen gates, the station branch of YOKOO, a yoshoku house in Fukushima since 1971 where the second generation added French training (August 2026). The draw is the thick-cut beef katsu sandwich, tenderloin fried medium-rare in a light coat with a homemade sauce, and the mixed sandwich that pairs it with a deep-fried dashi omelette, an Osaka touch; both travel well as a Shinkansen bento. Beef katsu curry (¥1,880) is the sit-down choice. Prices are station prices: ¥1,180 for four small pieces, ¥1,850 for six. One diner found the frying oil tired late in the day (September 2026).",
    chef_bio: { chef_name: null, roles: ['Station branch staff of Restaurant YOKOO (unnamed)'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: a specialty shop for Kansai-style thick-cut beef katsu sandwiches and omurice inside Shin-Osaka Station, with plenty to take away for the Shinkansen; opened 7 November 2016. Per reviews: "this long-established Western-style restaurant has been serving customers since 1971 in Fukushima. This station branch of \'Yokoo\' continues the tradition of Western cuisine, enhanced by the second generation who learned French cooking" (August 2026); "Restaurant YOKOO has been serving Western cuisine for over 50 years" near JR Fukushima Station (August 2026).',
      philosophy: null, specialty: 'Thick-cut beef katsu sandwich; mixed sandwich with fried dashi omelette.',
      anecdotes: [
        { text: '"The egg sandwich features a style typical of Osaka, where the fluffy dashi omelet is sandwiched between the bread … the dashi omelet is deep-fried to create a cutlet, which helps prevent the juices from soaking into the bread." — August 2026, mixed sandwich (S) ¥1,180.', source: R + 'B534611676/' },
        { text: '"Considering its location inside the Shinkansen ticket gate, the beef cutlet sandwich is definitely one of the highlights of my time at Shin-Osaka." — August 2026.', source: R + 'B457328700/' },
        { text: '"The busiest place is Kukuru, followed by Imai, Daruma, and Yamamoto … for some reason, Restaurant YOKOO is quite empty." — September 2026, beef katsu curry.', source: R + 'B535186584/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): レストラン ヨコオ 大阪のれんめぐり店、洋食・サンドイッチ・弁当、大阪市淀川区西中島5-16-1 JR東海新大阪駅 新幹線改札、毎日10:00〜21:30 (L.O.21:10)、無休、カツサンドの電話予約可、カード・交通系 IC 可、QR 不可、5席、禁煙、車いす可、子ども可、テイクアウト、2016年11月7日オープン、関西風の厚切り牛カツサンドとオムライスの専門店。口コミ(2022年12月〜2026年10月): Fukushima で1971年から続く洋食店の駅の店、2代目はフランス料理を学んだ、牛ヒレのカツサンドはミディアムレア、ミックスサンド (牛カツと揚げただし巻き) 6切れ1,850円、S 1,180円、牛カツカレー1,880円、生ビール、新幹線のおともに、揚げ油が気になったという声。',
      confidence: 'medium', sources: [TB, R + 'B457328700/', R + 'B534075316/', R + 'B534611676/', R + 'B535186584/', R + 'B535485020/', R + 'B535561544/', R + 'B535647017/', R + 'B535935190/', R + 'B537007599/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the counter; takeaway for the train. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島5-16-1 JR東海新大阪駅 新幹線改札',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; GSI 大阪府大阪市淀川区西中島五丁目16番1号 (go) 84m, the station block; 13 m from Negiyaki Yamamoto in the same food court; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534075316/', R + 'B534611676/', R + 'B535561544/'],
    price_note: 'Prices from August–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Mixed sandwich (beef katsu and fried dashi omelette), six pieces', '¥1,850', 'Sandwiches', 'no', 'no', 'October 2026.', 'mix_sand_6'),
      it('', '', 'Mixed sandwich, small (four pieces)', '¥1,180', 'Sandwiches', 'no', 'no', 'August–September 2026.', 'mix_sand_s'),
      it('', '', 'Beef katsu sandwich, six pieces', '', 'Sandwiches', 'no', 'no', 'August 2026.', 'gyukatsu_sand'),
      it('', '', 'Beef katsu curry', '¥1,880', 'Curry', 'no', 'no', 'September 2026.', 'gyukatsu_curry'),
    ] }, {
    cuisine: '関西風の厚切り牛カツサンドとオムライス (食べログ)・ヒレをミディアムレアにした牛カツサンド6切れ (2026年8月。2022年は1,890円)・牛カツと揚げただし巻きのミックスサンド: 6切れ1,850円 (2026年10月)、S 1,180円 (2026年8〜9月)、S と飲み物のセット1,810円 (2026年9月)・牛カツカレー1,880円 (2026年9月)・生ビール (2026年)',
    neighborhood: '西中島5-16-1、新大阪駅の JR東海 新幹線改札内のフードコート「大阪のれんめぐり」(食べログ)',
    gf_detail: 'グルテンフリーではありません。衣をつけた牛カツと卵のカツをパンにはさんだサンドと、カレー。',
    vegan_detail: 'ヴィーガンではありません。牛カツ、揚げただし巻き、牛肉のカレー。',
    notes: '[洋食・新大阪駅、新幹線改札内の牛カツサンド] 新幹線改札内のフードコート「大阪のれんめぐり」にある5席のカウンターとテイクアウトの窓口で、Fukushima で1971年から続く洋食店ヨコオの駅の店。2代目がフランス料理を学んで加えたという (2026年8月)。人気は厚切りの牛カツサンドで、ヒレを薄い衣でミディアムレアに揚げ、自家製のソース。牛カツと揚げただし巻きを合わせたミックスサンドは大阪らしく、どちらも新幹線のお弁当にちょうどいい。座って食べるなら牛カツカレー (1,880円)。値段は駅の値段で、小さな4切れで1,180円、6切れで1,850円。夜遅くは揚げ油が気になったという人も (2026年9月)。',
  });
}

// ================================================================ ねぎ焼 やまもと 新大阪店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27060413/'; const R = TB + 'dtlrvwlst/';
  const H = day(['10:00', '21:30']);
  put({
    id: 'osaka_negiyaki_yamamoto_shin_osaka', name: 'ねぎ焼 やまもと 新大阪店 (Negiyaki Yamamoto Shin osaka ten)', category: 'OMNI',
    lat: 34.73396, lng: 135.500539, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: negiyaki is a wheat batter, finished with soy sauce; yakisoba too.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: negiyaki with beef tendon, pork belly or shrimp.',
    hours_raw: 'Daily 10:00–21:30 (last order 21:00) (Tabelog). Inside the Shinkansen ticket gates, in the "Osaka Noren Meguri" food court: find a seat first, then order (August 2025, September 2026). Cards (VISA, Master, JCB), e-money and QR such as PayPay (Tabelog; September 2026). About 5–6 counter seats of its own plus shared food-court seats; non-smoking; takeaway (Tabelog). Busy on holiday weekends (September 2026); dishes other than negiyaki can take about 20 minutes (September 2026). Opened 29 September 2011 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: '西中島5-16-1, the "Osaka Noren Meguri" food court inside the JR Tokai Shinkansen gates at Shin-Osaka Stn (Tabelog)',
    cuisine: 'Negiyaki, the green-onion okonomiyaki of Yamamoto in Juso (October 2026) · beef tendon negiyaki (sujinegi-yaki) with konnyaku, finished with soy sauce, ¥1,350 (October 2026) · the original negiyaki with salt and green onion instead of sauce (September 2026) · a special negiyaki only here, with pork belly, beef tendon and shrimp (September 2026) · Shin-Osaka negiyaki and grilled beef tendon (August 2025) · yakisoba (Tabelog) · draft beer and highballs (2026)',
    website: 'http://www.osaka-norenmeguri.com/', gmaps: gm('ねぎ焼 やまもと 新大阪店'), menu_url: null,
    notes: "[Okonomiyaki · Shin-Osaka Station, Juso negiyaki inside the Shinkansen gates] The station counter of Yamamoto, the negiyaki house from Juso, in the Osaka Noren Meguri food court inside the Shinkansen gates, a last taste of Osaka before the train. Negiyaki is okonomiyaki buried in chopped green onion, crisp outside and soft inside, here with beef tendon and konnyaku and a soy-sauce finish (¥1,350), and there is a special version only at this shop with pork belly, tendon and shrimp. It is lighter than sauced okonomiyaki, though some found it salty (2025–2026). Grab a seat before ordering; at busy times the negiyaki comes fast but other dishes can take 20 minutes (September 2026). One diner found ¥1,350 a little steep (October 2026).",
    chef_bio: { chef_name: null, roles: ['Station branch staff of Negiyaki Yamamoto (unnamed)'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: in the Shinkansen-gate food court "Osaka Noren Meguri", opened 29 September 2011. Per reviews: "the familiar Negiyaki from Yamamoto in Juso … While it may not compare to the original location, it brought back fond memories" (October 2026); "The staff works efficiently and cooks in large quantities, so even if I\'m cutting it close to my train, I feel reassured" (September 2026); "The service was friendly" (August 2025).',
      philosophy: null, specialty: 'Beef tendon negiyaki; the station-only special negiyaki.',
      anecdotes: [
        { text: '"I tried the special Negiyaki, exclusive to this location. It included pork belly, beef tendon, and shrimp—all in one dish." — September 2026.', source: R + 'B536449597/' },
        { text: '"This simple okonomiyaki was grilled with just salt and green onions instead of sauce." — September 2026, the original negiyaki.', source: R + 'B536464173/' },
        { text: '"There are only a few tables, so it\'s best to secure a seat before ordering." — August 2025.', source: R + 'B512121462/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): ねぎ焼 やまもと 新大阪店、お好み焼き・焼きそば、大阪市淀川区西中島5-16-1 JR東海新大阪駅 新幹線改札内、大阪のれんめぐり、毎日10:00〜21:30 (L.O.21:00)、カード・電子マネー・QR 可、カウンター席とフードコートの席、禁煙、テイクアウト、2011年9月29日オープン。口コミ(2025年8月〜2026年10月): Juso のやまもとのねぎ焼、すじねぎ焼1,350円 (牛すじ、こんにゃく、醤油)、塩とねぎで焼くもとのねぎ焼、この店だけの豚バラ、牛すじ、エビの特製ねぎ焼、牛すじ焼き、外はカリッと中はふんわり、塩辛いという声、先に席をとってから注文、ねぎ焼以外は20分ほどかかることも、ビールやハイボールに合う。',
      confidence: 'medium', sources: [TB, R + 'B512121462/', R + 'B536080037/', R + 'B536449597/', R + 'B536464173/', R + 'B536557752/', R + 'B537083670/', R + 'B537352753/', R + 'B537624948/', R + 'B538233779/', R + 'B538306325/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Food-court ordering: take a seat, then order at the counter. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島5-16-1 JR東海新大阪駅 新幹線改札内',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; GSI 大阪府大阪市淀川区西中島五丁目16番1号 (go) 87m, the station block; 13 m from Restaurant YOKOO in the same food court; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537083670/', R + 'B538306325/'],
    price_note: 'One price from October 2026 reviews; no menu published.', last_checked: TODAY, items: [
      it('', '', 'Beef tendon negiyaki with konnyaku, soy-sauce finish', '¥1,350', 'Negiyaki', 'no', 'no', 'October 2026.', 'suji_negiyaki'),
      it('', '', 'Special negiyaki with pork belly, beef tendon and shrimp (this shop only)', '', 'Negiyaki', 'no', 'no', 'September 2026.', 'tokusei_negiyaki'),
      it('', '', 'Grilled beef tendon', '', 'Teppan', 'ask', 'no', 'August 2025.', 'suji_yaki'),
    ] }, {
    cuisine: 'Juso のやまもとの、青ねぎのお好み焼き、ねぎ焼 (2026年10月)・こんにゃく入りで醤油で仕上げる牛すじのねぎ焼、1,350円 (2026年10月)・ソースのかわりに塩とねぎで焼くもとのねぎ焼 (2026年9月)・この店だけの、豚バラ、牛すじ、エビの特製ねぎ焼 (2026年9月)・新大阪のねぎ焼と牛すじ焼き (2025年8月)・焼きそば (食べログ)・生ビールとハイボール (2026年)',
    neighborhood: '西中島5-16-1、新大阪駅の JR東海 新幹線改札内のフードコート「大阪のれんめぐり」(食べログ)',
    gf_detail: 'グルテンフリーではありません。ねぎ焼は小麦の生地で、醤油で仕上げる。焼きそばも。',
    vegan_detail: 'ヴィーガンではありません。牛すじ、豚バラ、エビのねぎ焼。',
    notes: '[お好み焼き・新大阪駅、新幹線改札内の Juso のねぎ焼] Juso のねぎ焼の店、やまもとの駅の店で、新幹線改札内のフードコート「大阪のれんめぐり」にある。電車の前の最後の大阪の味に。ねぎ焼は刻んだ青ねぎにうもれたお好み焼きで、外はカリッと中はふんわり。ここでは牛すじとこんにゃく入りで醤油で仕上げて1,350円。この店だけの豚バラ、牛すじ、エビの特製ねぎ焼も。ソースのお好み焼きより軽いが、塩辛いという人も (2025〜2026年)。先に席をとってから注文。混む時間はねぎ焼はすぐ出るが、ほかの料理は20分かかることも (2026年9月)。1,350円は少し高いという声も (2026年10月)。',
  });
}

// ================================================================ 秀月
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27034399/'; const R = TB + 'dtlrvwlst/';
  const W = day(['18:00', '23:00']);
  put({
    id: 'osaka_shugetsu_higashinakajima', name: '秀月 (Shugetsu)', category: 'OMNI',
    lat: 34.733615, lng: 135.50289, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: okonomiyaki and negiyaki batter, breaded kushikatsu and yakisoba.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork okonomiyaki, beef tendon, doteyaki, motsuni; vegetable kushikatsu (lotus root, potato, shiitake, asparagus) exist, but batter and sauce are not described.',
    hours_raw: 'Tue–Fri 18:00–23:00; Sat 18:00–22:00; closed Sunday and Monday, open on the Sunday of a three-day weekend (Tabelog). Reservations accepted and wise: walk-ins were turned away when full (November 2025). Cash only (Tabelog). 18 seats: 14 at an L-shaped counter and one table for four; whole hire up to 20; smoking allowed (Tabelog). Opened 21 November 1999 (Tabelog).',
    hours: { 1: W, 2: W, 3: W, 4: W, 5: day(['18:00', '22:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: '東中島1-19-13, 30 seconds from the east exit of JR Shin-Osaka Stn (Tabelog)',
    cuisine: 'Okonomiyaki, teppan dishes and kushikatsu (Tabelog) · kushikatsu one by one, with a sauce for one dip: lotus root, potato, sausage, pork, shiitake, asparagus, cheese and seafood (July 2026) · pork okonomiyaki and mixed okonomiyaki, fluffy and light (March–April 2026); a fluffy egg okonomiyaki (October 2025) · negiyaki with chunky green onions, slowly cooked (July 2026) · tonpei-yaki, beef tendon, suji-kon, doteyaki, motsuni, kimchi with an extra step (2025–2026) · squid-ink yakisoba (July 2026) · "Osaka Happy", the house answer to Hoppy (April 2026) · ¥2,000–8,000 a head in Tabelog review price bands (2025–2026)',
    website: null, gmaps: gm('秀月 新大阪 東中島'), menu_url: null,
    notes: "[Okonomiyaki · Shin-Osaka east exit, a one-man teppan and kushikatsu counter] An 18-seat L-shaped counter thirty seconds from the Shin-Osaka east exit, open since 1999, where one cheerful owner fries kushikatsu, grills okonomiyaki and pours drinks alone. Start with kushikatsu, lotus root, sausage or shiitake, served piping hot one at a time with a sauce for one dip, then move to the teppan: fluffy pork or egg okonomiyaki, a slow-cooked negiyaki with chunky green onion, tonpei-yaki, doteyaki, and squid-ink yakisoba to finish. The owner asks where you are from, chats across languages with visitors (one evening, a Taiwanese couple, October 2025) and keeps the room laughing. Book ahead; cash only; smoking allowed.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), runs the shop alone (reviews 2025–2026)'], origin: null,
      background: 'Per the Tabelog listing: okonomiyaki, kushi-age and teppanyaki, opened 21 November 1999. Per reviews: "the owner manages everything alone" (October 2025); "The master, who was managing everything alone, seemed very busy but maintained a cheerful demeanor"; the master noted that many customers over 50 order the sausage skewer (March 2026); "The owner, who manages everything [alone], is [cheerful]" (April 2026); "The friendly master seems to be running the place solo" (October 2026); the owner "communicated with a Taiwanese couple sitting next to me, taking [orders from the couple] mostly in Japanese and through gestures, and even took a photo with [the couple]" (October 2025).',
      philosophy: null, specialty: 'Kushikatsu and okonomiyaki from one teppan.',
      anecdotes: [
        { text: '"The master has a wonderful technique for engaging in conversation, casually asking, \'Where are you from?\'" — March 2026.', source: R + 'B524070648/' },
        { text: '"[The owner\'s] conversations are delightful, making it feel like I\'m watching a drama set in downtown Osaka." — April 2026.', source: R + 'B524067440/' },
        { text: '"Those who arrived later without a reservation were turned away due to being fully booked." — November 2025.', source: R + 'B518689753/' },
      ],
      japanese_sources_summary: '食べログ: 秀月、お好み焼き・串揚げ・鉄板焼き、大阪市東淀川区東中島1-19-13、JR 新大阪駅東口から徒歩30秒、火〜金18:00〜23:00、土18:00〜22:00、日・月休み (三連休の日曜は営業)、予約可、現金のみ、18席 (カウンター14、テーブル1)、貸切20名まで、喫煙可、1999年11月21日オープン。口コミ(2025年10月〜2026年10月): 店主ひとりで営業、明るい大将、どこから来たのと話しかける、串カツ (レンコン、じゃがいも、ソーセージ、豚、しいたけ、アスパラ、チーズ、魚介)、ソースは二度づけ禁止、豚玉、ミックス、ふわふわの卵のお好み焼き、ねぎ焼、とんぺい焼き、すじこん、どて焼、もつ煮、キムチ、イカスミ焼きそば、Osaka Happy、Taiwan からの夫婦と身ぶりで話す、予約がおすすめ。',
      confidence: 'medium', sources: [TB, R + 'B515243552/', R + 'B518689753/', R + 'B520766807/', R + 'B521157831/', R + 'B524067440/', R + 'B524070648/', R + 'B527282266/', R + 'B531004199/', R + 'B531231545/', R + 'B536881854/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'The owner took a Taiwanese couple\'s orders "mostly in Japanese and through gestures" (October 2025). No English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市東淀川区東中島1-19-13',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市東淀川区東中島一丁目19番13号 (go) 1m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B531004199/', R + 'B524067440/', R + 'B515243552/'],
    price_note: 'No prices in the listing or reviews.', last_checked: TODAY, items: [
      it('', '', 'Kushikatsu (lotus root, potato, sausage, pork, shiitake …)', '', 'Kushikatsu', 'no', 'no', 'July 2026.', 'kushikatsu'),
      it('', '', 'Negiyaki', '', 'Teppan', 'no', 'no', 'November 2025; July 2026.', 'negiyaki'),
      it('豚玉', '', 'Pork okonomiyaki', '', 'Teppan', 'no', 'no', 'April 2026.', 'butatama'),
      it('', '', 'Squid-ink yakisoba', '', 'Teppan', 'no', 'no', 'July 2026.', 'ikasumi_yakisoba'),
    ] }, {
    cuisine: 'お好み焼き、鉄板焼き、串カツ (食べログ)・ひとつずつ揚げる串カツ、ソースは二度づけ禁止: レンコン、じゃがいも、ソーセージ、豚、しいたけ、アスパラ、チーズ、魚介 (2026年7月)・ふんわり軽い豚玉とミックス (2026年3〜4月)。ふわふわの卵のお好み焼き (2025年10月)・大きく切ったねぎでじっくり焼くねぎ焼 (2026年7月)・とんぺい焼き、牛すじ、すじこん、どて焼、もつ煮、ひと手間かけたキムチ (2025〜2026年)・イカスミの焼きそば (2026年7月)・Hoppy に対抗した店の「Osaka Happy」(2026年4月)・口コミの価格帯はひとり2,000〜8,000円 (2025〜2026年)',
    neighborhood: '東中島1-19-13、JR 新大阪駅の東口から徒歩30秒 (食べログ)',
    gf_detail: 'グルテンフリーではありません。お好み焼きとねぎ焼の生地、衣をつけた串カツ、焼きそば。',
    vegan_detail: 'ヴィーガンではありません。豚玉、牛すじ、どて焼、もつ煮。野菜の串カツ (レンコン、じゃがいも、しいたけ、アスパラ) もあるが、衣やソースの説明はない。',
    notes: '[お好み焼き・新大阪東口、大将ひとりの鉄板と串カツのカウンター] 新大阪駅の東口から30秒、1999年からの18席の L 字のカウンターの店で、明るい大将がひとりで串カツを揚げ、お好み焼きを焼き、飲み物も出す。まずは串カツ、レンコン、ソーセージ、しいたけなどを、熱々でひとつずつ、ソースは二度づけ禁止。そして鉄板へ: ふわふわの豚玉や卵のお好み焼き、大きなねぎでじっくり焼くねぎ焼、とんぺい焼き、どて焼、締めはイカスミの焼きそば。大将はどこから来たのかとたずね、海外の客とも身ぶりで話し (2025年10月、Taiwan からの夫婦)、店はいつも笑い声でいっぱい。予約がおすすめ。現金のみ。喫煙可。',
  });
}

save();
