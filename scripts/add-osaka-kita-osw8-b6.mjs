// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), core queue, circle shin-osaka; worker osw8 (lane: Tabelog id odd), batch 6.
//   + バッファローマン Buffalo Man (11-seat stone-plate steak counter east of Shin-Osaka, evenings only, cash)
//   + 拉麺 にわ鶏 Chicken Ramen Niwatori (creamy chicken paitan "ramen you can drink with", evenings; no ramen block, see below)
//   + Imakoko Kitchen Merrymomo (macrobiotic and organic set meals since 2014; plant-based sets every day; vegan options)
//   + 鰻家 Unagiya (ten-seat Kansai-style eel counter, live eel grilled to order; Tabelog Unagi 100 2018–2026)
//   - skipped らーめん鱗 西中島店 27082871: chain already in data (osaka_ramen_uroko_namba, "らーめん 鱗 難波店").
//   - skipped きりん寺 東三国店 27120573: chain already in data (osaka_kirinji_sennichimae, osaka_kirinji_amemura, osaka_kirinji_ura_namba,
//     osaka_kirinji_namba_ekimae).
//   Chain check of the four added: Buffalo Man, Niwatori and Unagiya: one shop each (Tabelog; no sister shop named). Merrymomo: one shop
//   (Tabelog; merrymomo.org did not resolve on 2026-11-01). None is in data/osaka.json (grep by id, name and address, 2026-11-01).
//   Unagiya shares 西中島4-5-22 第３新大阪ビル 1F with osaka_furafura_nishinakajima (こだわり炭火焼鳥 ふらふら; its address_ja reads
//   "大阪府大阪市淀川区西中島4-5-22 第３新大阪ビル １Ｆ"), 8 m apart on Tabelog; both points kept.
//   No ramen block for Niwatori: all 20 first-page reviews read (fetchshop 20) give richness, oiliness (as heaviness), clarity,
//   noodle firmness and aroma, but none describes the saltiness or strength of the tare, so the block is left off rather than guessed.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw8-6');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27082871', 'chain already in data: らーめん 鱗 (osaka_ramen_uroko_namba)');
skip('27120573', 'chain already in data: きりん寺 (osaka_kirinji_sennichimae, osaka_kirinji_amemura, osaka_kirinji_ura_namba, osaka_kirinji_namba_ekimae)');

// ================================================================ バッファローマン
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27064321/'; const R = TB + 'dtlrvwlst/';
  const H = day(['19:00', '22:00']);
  put({
    id: 'osaka_buffalo_man_higashinakajima', name: 'バッファローマン (Buffalo Man)', category: 'OMNI',
    lat: 34.730891, lng: 135.502527, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Steak on a hot stone plate with three condiments, a sweet sauce, ponzu and rock salt (2024–2026); the rock salt avoids the soy-based sauces, but nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a steak restaurant.',
    hours_raw: 'Tue, Wed, Fri, Sat and Sun 19:00–22:00 (food last order 21:30); closed Monday and Thursday; hours may change (Tabelog). Reservations accepted (Tabelog). Cash only (Tabelog; December 2019). 11 seats: about seven at the counter and one table at the back (November 2022); whole-shop hire possible (Tabelog). Almost full on a July 2026 weekday night. Rice refills free (October 2024, April 2025). Opened 11 December 2011 (Tabelog).',
    hours: { 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: '東中島1-11-7, in a residential street 4 min from the east exit of JR Shin-Osaka Stn (Tabelog; November 2022)',
    cuisine: 'Steak grilled and sliced, served sizzling on a stone plate over bean sprouts and cabbage, with sweet sauce, ponzu and rock salt (2022–2026) · Buffalo Man regular steak ¥2,100, ribeye with sweet fat, "probably about 200g", a diner guessed (July 2026) · large steak about 280–300 g (July 2026) · double steak rice set ¥4,100 (April 2025, July 2026) · rice set with miso soup ¥400 (July 2026), rice refills free · outside skirt steak rice set (February 2024) · green onion natto with eggs (October 2023, May 2025)',
    website: 'http://jyanbopapa.exblog.jp/i6/', gmaps: gm('バッファローマン 東中島 ステーキ'), menu_url: null,
    notes: "[Steak · Shin-Osaka east side, a stone-plate steak counter] An 11-seat steak counter in a residential street four minutes from the Shin-Osaka east exit, open evenings only since 2011, plainer outside than in. The steak is grilled, sliced and brought sizzling on a hot stone plate over bean sprouts and cabbage, so you finish the cooking yourself; one diner was told to rest slices on the vegetables so they would not overcook (November 2022). The regular Buffalo Man steak, ribeye with sweet fat, is ¥2,100 (July 2026), the double ¥4,100 with rice; three condiments sit on the counter, a sweet sauce, ponzu and rock salt, and rice refills are free. Cash only; closed Mondays and Thursdays. One visitor recommended it to anyone who misses \"steakhouses back in the States\" (May 2025).",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), at the grill (November 2022 review)', 'Counter staff'], origin: null,
      background: 'Per the Tabelog listing: steak, opened 11 December 2011, website a blog (jyanbopapa.exblog.jp). Per reviews: the steak "is cooked right in front of me on a stone plate by the passionate owner", who insists, "Don\'t overcook the meat, place it on top of the vegetables" (November 2022); "The staff exuded a strong sense of dedication and efficiency" (July 2026); "the owner has a quirky personality" (August 2019).',
      philosophy: null, specialty: 'Stone-plate steak with sweet sauce, ponzu and rock salt.',
      anecdotes: [
        { text: '"Given the price, I expected it to be some bland imported beef, but I was pleasantly surprised in a good way. The flavor is rich, the fat is sweet." — July 2026, the regular Buffalo Man steak ¥2,100.', source: R + 'B531901310/' },
        { text: '"This is a great steak place near Shin Osaka station. I recommend it if you miss steakhouses back in the States." — May 2025.', source: R + 'B508295698/' },
        { text: '"The steak is cut after being grilled, making it easy to eat with chopsticks." — July 2026, double steak rice set ¥4,100.', source: R + 'B533611509/' },
      ],
      japanese_sources_summary: '食べログ: バッファローマン、ステーキ、大阪市東淀川区東中島1-11-7、JR 新大阪駅東口から徒歩4分、火・水・金・土・日19:00〜22:00 (料理 L.O.21:30)、月・木休み、予約可、現金のみ、11席、2011年12月11日オープン。口コミ(2019年〜2026年): 住宅街、カウンターと奥にテーブル、焼いて切ったステーキを熱い石の皿で、もやしとキャベツの上に、甘いタレ、ポン酢、岩塩、ごはんのおかわり無料、バッファローマンのレギュラーステーキ2,100円 (2026年7月の口コミでは約200gと推測)、ラージは約280〜300g、ダブルステーキのライスセット4,100円、ごはんとみそ汁400円、ねぎ納豆、平日の夜はほぼ満席、アメリカのステーキハウスが恋しい人に、という口コミ。',
      confidence: 'medium', sources: [TB, R + 'B307405139/', R + 'B422748460/', R + 'B473101167/', R + 'B479532613/', R + 'B484696023/', R + 'B493980391/', R + 'B505170233/', R + 'B508295698/', R + 'B528477893/', R + 'B531901310/', R + 'B533611509/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter, cash only. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市東淀川区東中島1-11-7',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市東淀川区東中島一丁目11番7号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B531901310/', R + 'B533611509/', R + 'B505170233/'],
    price_note: 'Prices from April 2025 and July 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Buffalo Man regular steak', '¥2,100', 'Steak', 'ask', 'no', 'July 2026.', 'regular_steak'),
      it('', '', 'Double steak rice set', '¥4,100', 'Steak', 'ask', 'no', 'April 2025; July 2026.', 'double_steak_set'),
      it('', '', 'Rice set with miso soup (free rice refills)', '¥400', 'Sides', 'ask', 'no', 'July 2026.', 'rice_set'),
    ] }, {
    cuisine: '焼いて切ったステーキを、もやしとキャベツの上に熱い石の皿でジュージューと、甘いタレ、ポン酢、岩塩で (2022〜2026年)・バッファローマンのレギュラーステーキ2,100円、脂の甘いリブロース、たぶん約200gという声 (2026年7月)・ラージは約280〜300g (2026年7月)・ダブルステーキのライスセット4,100円 (2025年4月、2026年7月)・ごはんとみそ汁のセット400円 (2026年7月)、ごはんはおかわり無料・ハラミのライスセット (2024年2月)・ねぎ納豆と卵 (2023年10月、2025年5月)',
    neighborhood: '東中島1-11-7、JR 新大阪駅の東口から徒歩4分の住宅街 (食べログ、2022年11月)',
    gf_detail: '要確認。グルテンの情報なし。熱い石の皿のステーキに、甘いタレ、ポン酢、岩塩の3つ (2024〜2026年)。岩塩なら醤油のタレを避けられるが、グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではありません。ステーキの店。',
    notes: '[ステーキ・新大阪の東側、石の皿のステーキのカウンター] 新大阪の東口から4分の住宅街にある11席のステーキのカウンターで、2011年から夜だけ営業。外見より中は落ち着いている。ステーキは焼いて切り、もやしとキャベツの上に熱い石の皿でジュージューのまま出てくるので、焼き加減は自分で。焼きすぎないよう野菜の上にのせてと言われた人も (2022年11月)。レギュラーのバッファローマンステーキは脂の甘いリブロースで2,100円 (2026年7月)、ダブルはライスつきで4,100円。カウンターには甘いタレ、ポン酢、岩塩、ごはんはおかわり無料。現金のみ、月・木休み。アメリカのステーキハウスが恋しい人におすすめという口コミも (2025年5月)。',
  });
}

// ================================================================ 拉麺 にわ鶏
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27136691/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '00:00']);
  put({
    id: 'osaka_ramen_niwatori_nishinakajima', name: '拉麺 にわ鶏 (Chicken Ramen Niwatori Osaka Nishinakajima)', category: 'OMNI',
    lat: 34.727912, lng: 135.500322, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; kara-age, croquettes and minced cutlets on the side.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken paitan and chicken chashu.',
    hours_raw: 'Mon–Sat 18:00–24:00 (last order 23:00); closed Sundays and holidays; hours may change (Tabelog). Evenings only (2025–2026). Order from the staff and pay after; no ticket machine (April 2026). No cards; e-money and QR accepted (Tabelog). A few counter seats and one booth (March 2025); non-smoking (Tabelog). Reservations accepted (Tabelog). Opened 8 June 2023 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '西中島3-10-13, a little down an alley 2–3 min from Nishinakajima-Minamigata Stn (Tabelog; August and November 2025)',
    cuisine: 'Chicken paitan ramen with snacks and drinks (reviews) · chicken bone ramen, a frothy, creamy chicken paitan with simmered chicken-breast chashu ¥1,000 (2025–2026); a milder version (August 2025) · chicken shoyu ramen ¥950, medium-thick wavy noodles, served with pepper (August 2025) · chicken paitan curry ramen ¥1,050 (April 2026) · extra noodles ¥230, chicken rice ¥450 (September 2025) · snacks: kara-age ¥150 a piece, chicken-skin gyoza ¥150, croquette ¥250 (2025–2026), minced cutlet, chicken tataki, chicken ham with yuzu pepper (2025–2026) · cold chuka noodles in summer (August 2025) · bottled beer ¥650 (2025–2026) · pickled ginger, yuzu pepper and black pepper on the counter (April 2026)',
    website: null, gmaps: gm('拉麺 にわ鶏 西中島'), menu_url: null,
    notes: "[Ramen · Nishinakajima-Minamigata, a chicken paitan bar for the evening] A small, wood-lined ramen counter a little down an alley near Nishinakajima-Minamigata, open since 2023, evenings only, with a sign calling it a ramen shop where you can drink. Start with kara-age or chicken-skin gyoza at ¥150 a piece and a beer, then the chicken bone ramen (¥1,000): a frothy, creamy white chicken paitan, rich but easy to finish, with simmered chicken-breast chashu and medium-thin noodles. The chicken shoyu (¥950) and a chicken curry ramen are the other bowls, and extra noodles are ¥230. The owner and one part-time staff member run it (August 2025), and foreign travellers turn up too (June 2025). Pay after; closed Sundays.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed) and a part-time staff member (August 2025 review)'], origin: null,
      background: 'Per the Tabelog listing: Chicken Ramen Niwatori, ramen, opened 8 June 2023. Per reviews: "There are two staff members: the owner and a part-time female employee" and "The sign at the entrance claims it\'s a ramen shop where you can drink" (August 2025); "The staff were very friendly, and the interior felt new and comfortable" (May 2026); a "ramen bar" with a wooden theme (April 2026).',
      philosophy: null, specialty: 'Creamy chicken paitan ramen; snacks by the piece.',
      anecdotes: [
        { text: '"Both of the appetizers I ordered were crispy and juicy … The soup had a rich and creamy flavor, spreading the essence of chicken throughout my mouth." — April 2026, chicken bone ramen ¥1,000, kara-age and chicken-skin gyoza ¥150 each.', source: R + 'B530593047/' },
        { text: '"Next to me, there were a couple of foreign travelers quietly enjoying [the ramen]. I can see why: [the bowls are] easy to finish in one go." — June 2025.', source: R + 'B508200200/' },
        { text: '"It was quite a rich chicken paitan, but surprisingly easy to finish even after a night out." — December 2025.', source: R + 'B522047842/' },
      ],
      japanese_sources_summary: '食べログ: 拉麺 にわ鶏、ラーメン、大阪市淀川区西中島3-10-13、西中島南方駅から226m、月〜土18:00〜24:00 (L.O.23:00)、日・祝休み、予約可、カード不可、電子マネー・QR 可、禁煙、2023年6月8日オープン。口コミ(2024年12月〜2026年8月): 路地を少し入った店、飲めるラーメン屋の看板、泡立ったクリーミーな鶏白湯の鶏ガララーメン1,000円、鶏むねのチャーシュー、中細麺、鶏醤油ラーメン950円 (中太の縮れ麺、こしょう)、鶏白湯カレーラーメン1,050円、替え玉230円、鶏めし450円、kara-age と鶏皮 gyoza 各150円、コロッケ250円、メンチカツ、鶏たたき、鶏ハムと柚子こしょう、瓶ビール650円、紅しょうが、柚子こしょう、黒こしょう、後払い、店主とアルバイトのスタッフ、海外からの客も。',
      confidence: 'medium', sources: [TB, R + 'B503432069/', R + 'B506668903/', R + 'B506852053/', R + 'B508200200/', R + 'B512597132/', R + 'B513769100/', R + 'B514620334/', R + 'B518349251/', R + 'B522047842/', R + 'B524719049/', R + 'B525407700/', R + 'B527321201/', R + 'B530593047/', R + 'B536512457/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order from the staff and pay after; foreign travellers seen (June 2025). No English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島3-10-13',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島三丁目10番13号 (go) 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B530593047/', R + 'B514620334/', R + 'B513769100/'],
    price_note: 'Prices from 2025–2026 reviews; no menu published.', last_checked: TODAY, items: [
      it('', '', 'Chicken bone ramen (creamy chicken paitan)', '¥1,000', 'Ramen', 'no', 'no', 'April and August 2026.', 'torigara_ramen'),
      it('', '', 'Chicken shoyu ramen', '¥950', 'Ramen', 'no', 'no', 'August 2025.', 'tori_shoyu'),
      it('', '', 'Chicken paitan curry ramen', '¥1,050', 'Ramen', 'no', 'no', 'April 2026.', 'curry_ramen'),
      it('', '', 'Chicken rice', '¥450', 'Rice', 'ask', 'no', 'September 2025.', 'tori_meshi'),
      it('', '', 'Kara-age, one piece', '¥150', 'Snacks', 'no', 'no', 'August 2025; April 2026.', 'karaage_1'),
    ] }, {
    cuisine: '飲み物とつまみもある鶏白湯ラーメン (口コミ)・鶏ガララーメン、泡立ったクリーミーな鶏白湯に、煮た鶏むねのチャーシュー、1,000円 (2025〜2026年)。もっとやさしい味のものも (2025年8月)・鶏醤油ラーメン950円、中太の縮れ麺、こしょうを添えて (2025年8月)・鶏白湯のカレーラーメン1,050円 (2026年4月)・替え玉230円、鶏めし450円 (2025年9月)・つまみ: kara-age 1個150円、鶏皮 gyoza 150円、コロッケ250円 (2025〜2026年)、メンチカツ、鶏のたたき、鶏ハムと柚子こしょう (2025〜2026年)・夏は冷やし中華 (2025年8月)・瓶ビール650円 (2025〜2026年)・カウンターに紅しょうが、柚子こしょう、黒こしょう (2026年4月)',
    neighborhood: '西中島3-10-13、西中島南方駅から2〜3分、路地を少し入ったところ (食べログ、2025年8月、11月)',
    gf_detail: 'グルテンフリーではありません。小麦の麺で、サイドに kara-age、コロッケ、メンチカツ。',
    vegan_detail: 'ヴィーガンではありません。鶏白湯と鶏のチャーシュー。',
    notes: '[ラーメン・西中島南方、夜の鶏白湯のバー] 西中島南方の近く、路地を少し入った木の内装の小さなラーメンのカウンターで、2023年から夜だけ営業。看板には飲めるラーメン屋とある。まずは1個150円の kara-age や鶏皮 gyoza とビール、それから鶏ガララーメン (1,000円): 泡立ったクリーミーな白い鶏白湯で、濃いのに最後まで食べやすく、煮た鶏むねのチャーシューと中細麺。鶏醤油 (950円) と鶏のカレーラーメンもあり、替え玉は230円。店主とアルバイトのスタッフのふたりで営業 (2025年8月)。海外からの旅行者も (2025年6月)。後払い。日曜休み。',
  });
}

// ================================================================ Imakoko Kitchen Merrymomo
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27078823/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['07:30', '22:00']);
  put({
    id: 'osaka_imakoko_kitchen_merrymomo_nishinakajima', name: 'Imakoko Kitchen Merrymomo', category: 'OMNI',
    lat: 34.727881, lng: 135.494894, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten statement from the shop. Brown rice is the base of every set, and a March 2025 diner mentions cakes "free from wheat and eggs" and rice-flour cakes, but the menu also has wheat noodles (tantanmen, lemon ramen), fried dishes and canned wheat-gluten meat, and the miso soup relies on a dashi of unstated make (May 2026).',
    vegan_status: 'options', vegan_label: 'Some vegan options', vegan_detail: 'Every day there is a plant-based set: set A has a plant-based main with five sides, brown rice and miso soup, and set C is brown-rice onigiri with miso soup and pickles; a June 2026 diner calls A and C vegan (¥1,300 and ¥1,100). The vegetable curry is "made entirely vegan, without any animal products" (June 2026), and there are veggie mapo tofu, a veggie hamburger and veggie taco rice (Tabelog; 2025). Set B and some noodles use meat or fish. Ask what goes into the miso-soup dashi (May 2026).',
    hours_raw: 'Mon–Fri 07:30–22:00; Sat 11:00–22:00 (last order 21:00); closed Sundays, holidays and some days at New Year and Obon (Tabelog). Lunch sets until 14:00, an "After Lunch" menu after that (January and May 2025), set meals from 17:00 (October 2025). Dinner courses need a booking for two or more by the business day before (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) and PayPay, d Barai, au PAY; no e-money (Tabelog). 30 seats at tables, sofas and a counter; a private room for four; smoking allowed per Tabelog. A shelf of organic condiments, brown rice and drinks for sale (October 2024; May 2026). Full at a May 2026 weekday lunch, with a short wait. Opened 1 April 2014 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: day(['11:00', '22:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '西中島6-8-8, ground floor of 花原第8ビル — 5 min from Nishinakajima-Minamigata Stn, 7 min from Hankyu Minamikata, 10 min from JR Shin-Osaka (Tabelog)',
    cuisine: 'Macrobiotic and organic set meals around brown rice, vegetables, grains and seaweed (reviews; Tabelog: organic, vegetable dishes, vegetarian options) · weekday lunch: set A, plant-based main with five daily sides, brown rice with red quinoa and miso soup ¥1,300; set B, the same with a meat or fish main (chicken katsu, sautéed horse mackerel, tara fritto) ¥1,300; set C, brown-rice onigiri with miso soup and pickles ¥1,100 (June 2026) · vegetable curry of lentils with fresh and grilled vegetables, fully vegan (June 2026) · soupless sesame tantanmen with minced meat, white or black sesame (May 2026) · veggie mapo tofu (January 2025), veggie hamburger and shungiku tempura (March 2025) · summer menu: lemon ramen, veggie taco rice, soupless dandan noodles, chilled chuka noodles, ¥1,280 or ¥1,080 at lunch; lunch set with three sides, miso soup and salad +¥200, drink +¥100, dessert +¥220 (Tabelog) · dandelion coffee; soy-yogurt and rice-flour cheesecake (June 2026); cakes free from wheat and eggs (March 2025) · wine, cocktails and smoothies (Tabelog; 2023)',
    website: 'http://www.merrymomo.org/', gmaps: gm('Imakoko Kitchen Merrymomo 西中島'), menu_url: null,
    notes: "[Macrobiotic · Nishinakajima, brown-rice set meals from 7:30] A roomy 30-seat organic kitchen in the Nishinakajima office blocks, open since 2014 and from 7:30 on weekdays, where macrobiotic cooking means a tray of brown rice with red quinoa, miso soup and five small vegetable dishes around a main. Choose set A with a plant-based main, set B with meat or fish, or a ¥1,100 brown-rice onigiri set; a June 2026 diner counts A and C as vegan. There is also a lentil vegetable curry made without animal products, veggie mapo tofu, and summer noodles. Desserts lean on soy yogurt and rice flour, with dandelion coffee. Diners praise the kind staff and a knowledgeable owner (2024), and visitors come from other prefectures and abroad (2024–2025). Book dinner courses a day ahead.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)', 'Kitchen and floor staff'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: Imakoko Kitchen Merrymomo, organic and vegetable dishes with vegetarian options, opened 1 April 2014. Per reviews: "a kitchen diner that offers traditional Japanese meals centered around brown rice, vegetables, grains, and seaweed" with ideas like "non-separation of spirit and matter" and "yin-yang balance" (October 2024); "Having chats with the incredibly interesting and knowledgeable owner is priceless" (November 2024); "All the staff members are lovely and kind" (May 2024); "attracts many international visitors" (July 2025).',
      philosophy: null, specialty: 'Brown-rice set meals with a plant-based main; vegan curry.',
      anecdotes: [
        { text: '"Sets A and C are vegan options." — June 2026, weekday lunch (A ¥1,300, C ¥1,100).', source: R + 'B530234981/' },
        { text: '"It\'s made entirely vegan, without any animal products. The rice is brown rice, and the curry is a special healthy blend based on lentils." — June 2026, vegetable curry.', source: R + 'B529030640/' },
        { text: '"They also offer cakes that are free from wheat and eggs, and you can enjoy dandelion coffee here. This place is suitable for vegetarians and even has canned gluten meat available." — March 2025.', source: R + 'B519512551/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): Imakoko Kitchen Merrymomo、オーガニック・野菜料理・居酒屋、大阪市淀川区西中島6-8-8 花原第8ビル 1F、西中島南方駅から徒歩5分、月〜金7:30〜22:00、土11:00〜22:00 (L.O.21:00)、日・祝休み、ディナーのコースは2名から前営業日までに予約、カード・PayPay・d払い・au PAY 可、電子マネー不可、30席、4名の個室、喫煙可、2014年4月1日オープン、ベジタリアン対応、夏のメニュー (レモンラーメン、ベジタコライス、汁なし担々麺、冷やし中華、1,280円、ランチ1,080円)。口コミ(2020年5月〜2026年6月): マクロビオティック、玄米と赤キヌア、みそ汁、日替わりの小鉢5品、A セットは植物性のメイン1,300円、B セットは肉か魚のメイン1,300円、C セットは玄米おにぎり1,100円、A と C はヴィーガン、レンズ豆のベジカレーは動物性なし、汁なしごま担々麺、ベジ麻婆豆腐、ベジハンバーグ、たんぽぽコーヒー、豆乳ヨーグルトと米粉のチーズケーキ、小麦と卵を使わないケーキ、グルテンミートの缶詰も販売、みそ汁はだしの味、物知りな店主、他府県や海外からの客も。',
      confidence: 'medium', sources: [TB, R + 'B427390033/', R + 'B479481408/', R + 'B484216654/', R + 'B494322738/', R + 'B502800425/', R + 'B507562736/', R + 'B519512551/', R + 'B528528484/', R + 'B529030640/', R + 'B530234981/', R + 'B533204520/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Popular with visitors from abroad (July 2025). No English menu evidence found.' },
    safety: { ...SAFETY0,
      vegan_cross_contact: [{ text: 'The miso soup that comes with every set "relies almost entirely on the dashi for flavor" (May 2026); the dashi is not described, so ask before counting it as vegan.', source: R + 'B528528484/' }],
      positives: [
        { text: 'June 2026 review: "Sets A and C are vegan options" (plant-based main set and brown-rice onigiri set).', source: R + 'B530234981/' },
        { text: 'June 2026 review: the vegetable curry is "made entirely vegan, without any animal products".', source: R + 'B529030640/' },
        { text: 'Tabelog listing (shop-maintained): vegetarian options; summer "Veggie Taco Rice".', source: TB },
      ] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島6-8-8 花原第8ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島六丁目8番8号 (go) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B530234981/', R + 'B529030640/', TB],
    price_note: 'Lunch set prices from a June 2026 review; summer menu prices from the Tabelog listing.', last_checked: TODAY, items: [
      it('', '', 'Set A: plant-based main, five sides, brown rice, miso soup', '¥1,300', 'Lunch', 'ask', 'ask', 'June 2026; called vegan by the reviewer; ask about the miso-soup dashi.', 'set_a'),
      it('', '', 'Set B: meat or fish main, five sides, brown rice, miso soup', '¥1,300', 'Lunch', 'ask', 'no', 'June 2026.', 'set_b'),
      it('', '', 'Set C: brown-rice onigiri, miso soup, pickles', '¥1,100', 'Lunch', 'ask', 'ask', 'June 2026; called vegan by the reviewer.', 'set_c'),
      it('', '', 'Vegetable curry (lentils, brown rice), made without animal products', '', 'Mains', 'ask', 'vegan', 'June 2026.', 'veg_curry'),
      it('', '', 'Veggie taco rice (summer)', '¥1,280', 'Mains', 'ask', 'ask', 'Tabelog; ¥1,080 at lunch.', 'veggie_taco_rice'),
      it('', '', 'Soupless sesame tantanmen with minced meat', '', 'Noodles', 'no', 'no', 'May 2026.', 'shirunashi_tantan'),
    ] }, {
    cuisine: '玄米、野菜、穀物、海藻を中心にしたマクロビオティックとオーガニックの定食 (口コミ。食べログ: オーガニック、野菜料理、ベジタリアン対応)・平日の昼: A セット、植物性のメインに日替わりの小鉢5品、赤キヌア入りの玄米、みそ汁1,300円。B セット、同じく肉か魚のメイン (チキンカツ、アジのソテー、タラのフリット) 1,300円。C セット、玄米おにぎり、みそ汁、漬物1,100円 (2026年6月)・レンズ豆の野菜カレーに生と焼いた野菜、動物性なし (2026年6月)・ひき肉のせの汁なしごま担々麺、白ごまか黒ごま (2026年5月)・ベジ麻婆豆腐 (2025年1月)、ベジハンバーグと春菊の天ぷら (2025年3月)・夏のメニュー: レモンラーメン、ベジタコライス、汁なし担々麺、冷やし中華、1,280円、ランチは1,080円。ランチは小鉢3品、みそ汁、サラダのセットで+200円、飲み物+100円、デザート+220円 (食べログ)・たんぽぽコーヒー、豆乳ヨーグルトと米粉のチーズケーキ (2026年6月)。小麦と卵を使わないケーキ (2025年3月)・ワイン、カクテル、スムージー (食べログ、2023年)',
    neighborhood: '西中島6-8-8、花原第8ビルの1階。西中島南方駅から徒歩5分、Hankyu Minamikata 駅から7分、JR 新大阪駅から10分 (食べログ)',
    gf_detail: '要確認。店のグルテンの説明はない。どのセットも玄米で、2025年3月の口コミには「小麦と卵を使わないケーキ」や米粉のケーキとあるが、小麦の麺 (担々麺、レモンラーメン)、揚げ物、小麦のグルテンミートの缶詰もあり、みそ汁は何のだしか書かれていない (2026年5月)。',
    vegan_detail: '毎日、植物性のセットがある: A セットは植物性のメインに小鉢5品、玄米、みそ汁、C セットは玄米おにぎりとみそ汁と漬物。2026年6月の口コミでは A と C はヴィーガン (1,300円、1,100円)。野菜カレーは「動物性の材料を使わず、すべてヴィーガン」(2026年6月)。ベジ麻婆豆腐、ベジハンバーグ、ベジタコライスも (食べログ、2025年)。B セットや一部の麺は肉か魚を使う。みそ汁のだしは確認を (2026年5月)。',
    notes: '[マクロビオティック・西中島、朝7:30からの玄米定食] 西中島のオフィス街にある広い30席のオーガニックのキッチンで、2014年から。平日は7:30から開く。マクロビオティックの定食は、赤キヌア入りの玄米、みそ汁、野菜の小鉢5品にメインが1品。植物性のメインの A、肉か魚の B、1,100円の玄米おにぎりの C から選び、2026年6月の口コミでは A と C はヴィーガン。動物性を使わないレンズ豆の野菜カレー、ベジ麻婆豆腐、夏の麺も。デザートは豆乳ヨーグルトや米粉で、たんぽぽコーヒーも。やさしいスタッフと物知りな店主が好評 (2024年)。他府県や海外からの客も (2024〜2025年)。ディナーのコースは前日までに予約を。',
  });
}

// ================================================================ 鰻家
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27080635/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:00', '17:00']);
  put({
    id: 'osaka_unagiya_nishinakajima', name: '鰻家 (Unagiya)', category: 'OMNI',
    lat: 34.727326, lng: 135.496682, cuisine_type: 'unagi',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: Kansai-style kabayaki glazed with a sweet tare (the usual unagi tare is soy-based), and more sauce on the table; ask if you want to try it plain.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: eel, eel liver soup and rolled omelette with eel.',
    hours_raw: 'Tue–Fri 11:00–17:00; Sat 11:00–19:00; closed Sunday, Monday and holidays; until sold out (Tabelog). No phone bookings: a sign-up board goes out at the shop at 9:30 for the 11:00, 12:00, 13:00 and 14:00 seatings, ten seats each, and people start queuing before 9:30 (2026 reviews); Saturday-evening seatings (16:00 and 18:00) can be booked (Tabelog; July and October 2026). The 14:00 slot sometimes has room; one diner phoned around 13:00 to check (October 2026). Cards accepted (Tabelog; September 2026). 10 counter seats; non-smoking; no photos of the cooking or kitchen (Tabelog; September 2026). Eel is prepared after you order, so allow 20–25 minutes (September–October 2026).',
    hours: { 1: W, 2: W, 3: W, 4: W, 5: day(['11:00', '19:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '西中島4-5-22, ground floor of 第3新大阪ビル, the same building as the yakitori shop osaka_furafura_nishinakajima — 3 min from Nishinakajima-Minamigata Stn (Tabelog)',
    cuisine: 'Kansai-style eel: live eel taken from the tank, split, skewered and grilled over charcoal in front of the counter, without steaming, crisp outside and soft inside (2023–2026) · Tabelog Unagi 100 (2018, 2019, 2022, 2024, 2026) · unaju regular ¥5,000 (July and September 2026) · unaju "jo" ¥6,200 with eel omelette, liver soup and pickles (2026) · unaju "tokujo" ¥8,000, adding uzaku and eel rolled round burdock (July and October 2026) · unadon (August 2026) · grilled liver ¥550 (July 2026) · extra rice free (July 2026) · the unaju comes with sauce and sansho on the table to add (September and October 2026) · eel from Aichi (January 2023) or Tokushima (July 2026) · Yebisu medium bottle ¥680, non-alcoholic beer ¥450 (2026)',
    website: null, gmaps: gm('鰻家 西中島 第3新大阪ビル'), menu_url: null,
    notes: "[Unagi · Nishinakajima-Minamigata, Kansai eel grilled to order] A ten-seat counter three minutes from Nishinakajima-Minamigata, in Tabelog's Unagi 100 five times since 2018, where every eel comes live from the tank and is split, skewered and grilled over charcoal in front of you, Kansai style, without steaming: crisp, fragrant skin and soft, fatty flesh. The unaju runs ¥5,000, ¥6,200 with an eel omelette, liver soup and pickles, or ¥8,000 with uzaku and eel-wrapped burdock as well; it arrives lightly glazed, with a sweetish sauce and sansho on the counter to add. There is no phone booking: write your name on the board outside at 9:30 for a seating between 11:00 and 14:00 (queues start earlier), or try the 14:00 slot later. No photos of the kitchen. Allow 20–25 minutes.",
    chef_bio: { chef_name: null, roles: ['Eel chef at the grill (unnamed)', 'Counter staff'], origin: null,
      background: 'Per the Tabelog listing: unagi, ten counter seats, reservations only for Saturday evenings, open until sold out, no photos for posting; Tabelog Unagi 100 in 2018, 2019, 2022, 2024 and 2026. Per reviews: the chef "takes live eels from the fish tank, prepares them, skewers them, and grills them over charcoal right in front of you" (October 2026); "[It is said that] it takes three years to master skewering, eight years to learn filleting, and a lifetime to perfect grilling, and I truly appreciate the skill of the master chef" (October 2026); a nine-time visitor describes the same ritual from 2023 to 2026 (August 2026).',
      philosophy: null, specialty: 'Kansai-style unaju grilled over charcoal from live eel.',
      anecdotes: [
        { text: '"When I drove by the restaurant just after 9:10 AM, there were three people waiting … I returned to the restaurant at 9:20 AM to find about 15 people already waiting." — July 2026, the special unaju ¥8,000 and regular ¥5,000.', source: R + 'B383696043/' },
        { text: '"It arrives without sauce, just the rice bowl itself. You can add as much sauce as you like from the table, and this sauce is incredibly delicious!" — September 2026, unaju ¥5,000.', source: R + 'B536303595/' },
        { text: '"Unlike the Kanto style, there\'s no steaming involved, resulting in a crispy texture while the eel remains tender." — October 2026.', source: R + 'B537300196/' },
      ],
      japanese_sources_summary: '食べログ: 鰻家、うなぎ、大阪市淀川区西中島4-5-22 第3新大阪ビル 1F、西中島南方駅から徒歩3分、火〜金11:00〜17:00、土11:00〜19:00、月・日・祝休み、売り切れまで、予約は土曜の夜のみ、当日9:30から店頭で、カード可、カウンター10席、禁煙、投稿のための撮影は不可、食べログ うなぎ百名店 (2018、2019、2022、2024、2026)。口コミ(2023年1月〜2026年10月): 9:30から店頭の名簿に名前を書く、11時、12時、13時、14時の各10席、9時すぎから行列、活けの鰻をさばいて串を打ち、炭火で焼く、蒸さない関西風、皮はパリッと身はふんわり、うな重 並5,000円、上6,200円 (う巻、肝吸い、香の物)、特上8,000円 (うざく、八幡巻きも)、うな丼、肝焼き550円、ご飯の大盛り無料、タレと山椒は卓上で、Aichi や Tokushima の鰻、エビス中瓶680円、ノンアルコールビール450円。',
      confidence: 'high', sources: [TB, R + 'B383696043/', R + 'B386127148/', R + 'B459538578/', R + 'B522092997/', R + 'B531635069/', R + 'B532229883/', R + 'B533955284/', R + 'B534169910/', R + 'B535403923/', R + 'B536303595/', R + 'B536622033/', R + 'B537300196/', R + 'B537559013/', R + 'B538398254/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Sign-up board at the door from 9:30; orders taken at the counter. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島4-5-22 第3新大阪ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (Unagi 100 2026); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島四丁目5番22号 (go) 7m; 8 m from osaka_furafura_nishinakajima in the same building; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B383696043/', R + 'B459538578/', R + 'B531635069/', R + 'B537559013/'],
    price_note: 'Prices from June–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Unaju, regular', '¥5,000', 'Unagi', 'no', 'no', 'July and September 2026.', 'unaju_nami'),
      it('', '', 'Unaju "jo" with eel omelette, liver soup and pickles', '¥6,200', 'Unagi', 'no', 'no', 'June–October 2026.', 'unaju_jo'),
      it('特上', '', 'Unaju "tokujo" with uzaku, eel-wrapped burdock, eel omelette, liver soup', '¥8,000', 'Unagi', 'no', 'no', 'July and October 2026.', 'unaju_tokujo'),
      it('', '', 'Grilled eel liver', '¥550', 'Sides', 'no', 'no', 'July 2026.', 'kimoyaki'),
    ] }, {
    cuisine: '関西風の鰻: 生け簀の活けの鰻をさばき、串を打ち、カウンターの前の炭火で蒸さずに焼く。外はパリッと中はふんわり (2023〜2026年)・食べログ うなぎ百名店 (2018、2019、2022、2024、2026)・うな重 並5,000円 (2026年7月、9月)・う巻、肝吸い、香の物つきの上6,200円 (2026年)・うざくと八幡巻きもつく特上8,000円 (2026年7月、10月)・うな丼 (2026年8月)・肝焼き550円 (2026年7月)・ご飯の大盛り無料 (2026年7月)・うな重のタレはひかえめで、卓上のタレと山椒で足す (2026年9月、10月)・鰻は Aichi (2023年1月) や Tokushima (2026年7月) から・エビスの中瓶680円、ノンアルコールビール450円 (2026年)',
    neighborhood: '西中島4-5-22、第3新大阪ビルの1階、焼鳥のふらふらと同じビル。西中島南方駅から徒歩3分 (食べログ)',
    gf_detail: 'グルテンフリーではありません。関西風の蒲焼きに甘いタレ (鰻のタレはふつう醤油ベース)、卓上にもタレ。タレなしで食べたいなら相談を。',
    vegan_detail: 'ヴィーガンではありません。鰻、肝吸い、う巻。',
    notes: '[うなぎ・西中島南方、注文してからさばく関西の鰻] 西中島南方から3分、10席のカウンターの店で、食べログのうなぎ百名店に2018年から5回選ばれている。鰻はすべて生け簀から出して、目の前でさばき、串を打ち、炭火で蒸さずに焼く関西風: 皮は香ばしくパリッと、身はふんわりと脂がのる。うな重は5,000円、う巻と肝吸いと香の物がついて6,200円、さらにうざくと八幡巻きもつくと8,000円。タレはひかえめにかかっていて、卓上の甘めのタレと山椒で足す。電話予約はなく、9:30に店の前に出る名簿に名前を書いて11時から14時の回を選ぶ (その前から列ができる)。あとから14時の回をねらう手も。厨房の撮影は不可。待ち時間は20〜25分。',
  });
}

save();
