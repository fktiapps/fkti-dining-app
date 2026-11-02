// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), core queue, circle shin-osaka; worker osw8 (lane: Tabelog id odd), batch 16.
//   + カリトロ三国 Karitoro Mikuni (27004767, taken by id after the shop count the coordinator asked for: takoyaki made to order by Hankyu Mikuni)
//   + 味噌之達人 三国店 Miso no Tatsujin Mikuni (Sapporo-style miso ramen with sesame you grind yourself, open to 1:30; no ramen block)
//   + Cheese Dining ItaRu (cheese restaurant by Hankyu Mikuni: raclette, fondue and stone-pot risotto from a prize-winning cheese chef)
//   - skip re-confirmed with a count: 焼鳥と焼野菜 ぎんすけ 27077943: at least five shops, 緑地公園店, 中津店, JR尼崎店 and 江坂店 (Gurunavi; Yahoo map;
//     a 2024 opening article for Esaka) plus this Mikuni shop; Gurunavi also lists a 焼鳥・焼野菜 ぎんすけ under 新大阪駅 that may be this one
//     (web search 2026-11-02). 5 or more, so the chain skip stands.
//   Shop counts for the two drafted:
//   - カリトロ: four shops confirmed with addresses: 十三総本店 (十三本町1-20-5, karitoro.com), 梅田店 (北区堂山町, karitoro.com and Hot Pepper),
//     豊中店 (豊中市本町, Yahoo map) and this 三国 shop; a 庄内店 appears by name only on a map site, with no address or hours (web search
//     2026-11-02). Four confirmed, so drafted per the coordinator's rule; the possible fifth is flagged. The official site lists only 十三 and 梅田;
//     this shop has its own mobile site (eeemoh.com).
//   - 味噌之達人: three shops found: 箕面本店 (箕面市今宮3-10-10; Gurunavi, Ramen DB, Retty), a 川西池田 shop named in a 2015 blog as the parent of the
//     三国 shop, and this one (web search 2026-11-02); not in data; 4 or fewer, so drafted as a small group. Flagged.
//   - ItaRu: one shop (shop site cd-itaru.jp, read 2026-11-02).
//   Lane note: after these, the core queue for shin-osaka has no odd ids left (queue.mjs next core 400 shin-osaka, 2026-11-02).
//   None is in data/osaka.json (grep by id, name and address, 2026-11-02). Karitoro is 16 m from Butta (西三国3-4-9, next door at 3-4-7) and 48 m from
//   Horibata: separate shops with their own Tabelog and GSI points, not a stacked pin. The other two have no record within 60 m.
//   No ramen block for Miso no Tatsujin: reviews cover richness and the sesame aroma but nothing on oiliness or clarity.
//   open_late per the brief: Miso no Tatsujin to 1:30 set true; Karitoro 23:30 (a takeaway stand, my judgement) false; ItaRu 22:30 false.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw8-16');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27077943', 'chain, counted: 焼鳥と焼野菜 ぎんすけ has at least 5 shops (緑地公園, 中津, JR尼崎, 江坂, 三国), Gurunavi and others, web search 2026-11-02');

// ================================================================ カリトロ三国
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270302/27004767/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '23:30']);
  put({
    id: 'osaka_karitoro_mikuni', name: 'カリトロ三国 (Karitoro Mikuni)', category: 'OMNI',
    lat: 34.738385, lng: 135.483789, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat takoyaki batter with sauce, soy sauce or ponzu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: octopus in every piece; katsuobushi and mayonnaise as toppings.',
    hours_raw: 'Daily 11:00–23:30 (Tabelog). Nothing is made ahead: call about 20 minutes before you arrive and the takoyaki will be ready (Tabelog; 2024–2025). No cards or e-money (Tabelog). Two seats; mostly takeaway; a bench outside (Tabelog; March 2026). Non-smoking (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: '西三国3-4-7, 3 min from Hankyu Mikuni toward the shopping street; next door to ぶった (Tabelog; GSI)',
    cuisine: 'Takoyaki, crisp outside and soft inside, as the name says (2014–2026) · konnyaku in the batter with the octopus (2017–2026) · six pieces ¥480 (February 2024, February 2026); eight pieces ¥520 (October 2018) · with sauce, salt, soy sauce, ponzu or dashi soy sauce; extra green onion free (2014–2024) · cooked to order, about 20 minutes (2024–2025)',
    website: 'http://m.eeemoh.com/karitoro/', gmaps: gm('カリトロ三国 西三国'), menu_url: null,
    notes: '[Takoyaki · Hankyu Mikuni, made-to-order takoyaki with a crisp shell] A two-seat takoyaki stand three minutes from Hankyu Mikuni, where nothing is cooked ahead: phone about 20 minutes before and your order is waiting. The takoyaki live up to the name, crisp outside and runny inside, with konnyaku alongside the octopus; six cost ¥480 (2026). Regulars recommend them with salt rather than sauce, and the owner is known for slipping in an extra piece or two. Open daily 11:00–23:30; cash only.',
    chef_bio: { chef_name: null, roles: ['Owner at the griddle (unnamed)'], origin: null,
      background: 'Per Tabelog: takoyaki; phone 20 minutes ahead. Part of a small Karitoro group: 十三総本店 and 梅田店 on the official site (karitoro.com), 豊中店 on a map site. Per reviews: "The owner is very friendly and generously added a couple extra pieces for me" and the owner remembered a customer who orders with salt (May 2014); "the kind owner even gave us 12 pieces instead of just the 8 that were ordered" (June 2024); "This takoyaki shop doesn’t prepare anything in advance" (August 2025); when a customer dropped a box on the bench outside, the owner made a fresh batch with extra (March 2026); "a place that has been around for a long time" (December 2024).',
      philosophy: null, specialty: 'Takoyaki with konnyaku; salt takoyaki.',
      anecdotes: [
        { text: '"Not many people order it with salt, so when I asked for it today after a long time, [the owner] greeted me by saying, ‘Hey, it’s been a while!’" — May 2014.', source: R + 'B493535614/' },
        { text: '"The large pieces of konnyaku add a great texture that makes it quite addictive!" — March 2026.', source: R + 'B524799415/' },
        { text: '"It takes about 20 minutes to cook, so if you tell them the time and quantity you want, they’ll give you a number." — August 2025.', source: R + 'B487661728/' },
      ],
      japanese_sources_summary: '食べログ: カリトロ三国、たこ焼き、大阪市淀川区西三国3-4-7、阪急三国駅から商店街のほうへ徒歩3分、毎日11:00〜23:30、電話予約は20分前に、カード・電子マネー不可、2席、禁煙。口コミ (2014年〜2026年4月): 外はカリッ、中はトロッ、生地にこんにゃく、6個480円、8個520円 (2018年)、ソース、塩、醤油、ポン酢、だし醤油、ねぎは無料で増量、作り置きなし、注文から約20分、店主がおまけをくれる、塩で食べる常連、十三や梅田にも店があるという声。',
      confidence: 'medium', sources: [TB, 'https://karitoro.com/', R + 'B284741328/', R + 'B395203195/', R + 'B473966891/', R + 'B480581963/', R + 'B486298931/', R + 'B487661728/', R + 'B493535614/', R + 'B496995999/', R + 'B523302246/', R + 'B524450674/', R + 'B524799415/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order by phone ahead or at the window. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西三国3-4-7',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through April 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西三国三丁目4番7号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B523302246/', R + 'B480581963/'],
    price_note: 'Prices from 2024–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Takoyaki, six pieces', '¥480', 'Takoyaki', 'no', 'no', 'February 2026.', 'takoyaki_6'),
      it('', '', 'Takoyaki with dashi soy sauce, six pieces', '¥480', 'Takoyaki', 'no', 'no', 'February 2024.', 'takoyaki_dashi_shoyu'),
    ] }, {
    cuisine: '名前のとおり外はカリッ、中はトロッのたこ焼き (2014〜2026年)・生地にはタコといっしょにこんにゃく (2017〜2026年)・6個480円 (2024年2月、2026年2月)。8個520円 (2018年10月)・ソース、塩、醤油、ポン酢、だし醤油。ねぎの増量は無料 (2014〜2024年)・注文してから焼き、約20分 (2024〜2025年)',
    neighborhood: '西三国3-4-7、阪急三国駅から商店街のほうへ3分。ぶったのとなり (食べログ、GSI)',
    gf_detail: 'グルテンフリーではありません。小麦のたこ焼きの生地に、ソース、醤油、ポン酢。',
    vegan_detail: 'ヴィーガンではありません。どれにもタコ。かつお節とマヨネーズもトッピングに。',
    notes: '[たこ焼き・阪急三国、注文してから焼くカリッとしたたこ焼き] 阪急三国駅から3分、2席のたこ焼きの店で、作り置きはしない: 20分ほど前に電話すれば、着くころに焼き上がっている。名前どおり外はカリッ、中はトロッで、タコといっしょにこんにゃく入り。6個480円 (2026年)。常連はソースより塩をすすめ、店主はよく1〜2個おまけしてくれる。毎日11時から23時半。現金のみ。',
  });
}

// ================================================================ 味噌之達人 三国店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270302/27088959/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '15:00'], ['17:30', '01:30']);
  put({
    id: 'osaka_miso_no_tatsujin_mikuni', name: '味噌之達人 三国店 (Miso no Tatsujin Mikuni)', category: 'OMNI',
    lat: 34.73568, lng: 135.482182, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: Hokkaido wheat noodles in miso broth; gyoza and kara-age on the side.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork chashu, butter toppings; gyoza and kara-age.',
    hours_raw: 'Daily 11:00–15:00 (last order 14:30) and 17:30–1:30 (last order 1:00); open year-round (Tabelog). No reservations; no cards (Tabelog). 12 seats, a counter and two small tables (Tabelog; September 2026). Non-smoking 11:00–15:00, smoking allowed after 17:00 (Tabelog). Coin parking nearby (February 2026). Opened 19 November 2015 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: '新高3-4-26, 5 min from Hankyu Mikuni (Tabelog)',
    cuisine: 'Miso ramen (Tabelog) · miso from the long-established Iwata brewery in Hokkaido; noodles flown in from Hokkaido; curly yellow egg noodles (Tabelog; 2026) · a mortar of white, black and gold sesame, roasted in the shop, to grind while you wait and add to the bowl (Tabelog; 2025–2026) · "Miso Tatsu" ramen, the house bowl; corn butter miso ramen ¥1,100; ginger miso ramen (2025–2026) · spicy-and-numbing miso ramen ¥1,000, heat and numbing to order, only at the Mikuni shop (Tabelog; March 2026) · toppings: butter, corn, free garlic; Sichuan pepper and black pepper on the counter (2025–2026) · sets: half fried rice, chashu rice bowl, half rice ¥250; gyoza, a large kara-age (2024–2026)',
    website: null, gmaps: gm('味噌之達人 三国店 新高'), menu_url: null,
    notes: '[Ramen · Hankyu Mikuni, Sapporo-style miso ramen with sesame you grind yourself, open to 1:30] A 12-seat miso ramen shop five minutes from Hankyu Mikuni, where you are handed a mortar of three house-roasted sesames to grind while your bowl is made. The broth is built on miso from Hokkaido’s Iwata brewery with curly egg noodles from Hokkaido, rich and a little sweet; corn butter (¥1,100) is the regulars’ favourite, and the spicy-and-numbing miso, with heat to order, is only made here (2026). Fried rice and gyoza sets on the side. Open daily to 1:30; no cards.',
    chef_bio: { chef_name: null, roles: ['Chef and floor staff (unnamed)'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: "The Pioneer of Miso Ramen"; Iwata Brewing miso from Hokkaido; noodles airlifted from Hokkaido; a house blend of white, black and gold sesame roasted in the shop; the spiced miso ramen only at the Mikuni shop. Part of a small group: 味噌之達人 箕面本店 in 箕面市今宮 (Gurunavi; Ramen DB), and a 2015 blog names a 川西池田 shop as the parent of this one. Per reviews: "the chef and a female staff member were running the place together" (September 2026); an apron lent on request (September 2026); "It may seem like a chain restaurant in Osaka, but it truly captures the flavors of Sapporo" (August 2026); one diner found the floor sticky (May 2025).',
      philosophy: null, specialty: 'Miso ramen with freshly ground sesame; spicy-and-numbing miso.',
      anecdotes: [
        { text: '"While waiting for my order, I diligently ground sesame seeds with a pestle and added them to the bowl once it was served. The aroma of sesame filled the air." — September 2026, corn butter ramen ¥1,100.', source: R + 'B499746079/' },
        { text: '"For the Spicy and Numbing Miso Ramen, I could choose the levels of spiciness and numbing sensation, so I went with level 3 for both." — March 2026, ¥1,000.', source: R + 'B524580422/' },
        { text: '"Unquestionably the taste of Sapporo!" — August 2026.', source: R + 'B534208922/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 味噌之達人 三国店、ラーメン・餃子、大阪市淀川区新高3-4-26、阪急三国駅から徒歩5分、毎日11:00〜15:00 (L.O.14:30)、17:30〜翌1:30 (L.O.1:00)、年中無休、予約不可、カード不可、12席、11時〜15時は禁煙、17時からは喫煙可、2015年11月19日オープン、北海道の Iwata 醸造の味噌、北海道から空輸の麺、店で焙煎した白・黒・金の三種のごまを自分ですって、三国店だけの辛い味噌ラーメン。口コミ (2024年〜2026年9月): すり鉢でごまをすりながら待つ、Miso Tatsu ラーメン、コーンバター味噌ラーメン1,100円、生姜の味噌ラーメン、辛さとしびれを選べる味噌ラーメン1,000円、バター、コーン、無料のにんにく、Sichuan pepper と黒こしょう、黄色いちぢれ麺、半チャーハン、チャーシュー丼、半ライス250円、餃子、大きな唐揚げ、店主と女性スタッフのふたり、エプロンの貸し出し。',
      confidence: 'medium', sources: [TB, R + 'B455198024/', R + 'B492189127/', R + 'B499746079/', R + 'B506320943/', R + 'B508656937/', R + 'B518563627/', R + 'B523742341/', R + 'B524580422/', R + 'B527907098/', R + 'B532200507/', R + 'B534208922/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter seats for solo diners (Tabelog). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区新高3-4-26',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区新高三丁目4番26号 (go) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B499746079/', R + 'B524580422/'],
    price_note: 'Prices from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Corn butter miso ramen', '¥1,100', 'Ramen', 'no', 'no', 'March and September 2026.', 'corn_butter_miso'),
      it('', '', 'Spicy-and-numbing miso ramen (Mikuni only)', '¥1,000', 'Ramen', 'no', 'no', 'March 2026.', 'shibikara_miso'),
      it('', '', 'Half rice', '¥250', 'Sides', 'ask', 'no', 'September 2026.', 'half_rice'),
    ] }, {
    cuisine: '味噌ラーメン (食べログ)・北海道の老舗 Iwata 醸造の味噌、北海道から空輸の麺、黄色いちぢれ麺 (食べログ、2026年)・店で焙煎した白・黒・金のごまをすり鉢で、待つあいだに自分ですって丼に (食べログ、2025〜2026年)・店の看板の Miso Tatsu ラーメン。コーンバター味噌ラーメン1,100円。生姜の味噌ラーメン (2025〜2026年)・辛さとしびれを選べる味噌ラーメン1,000円、三国店だけ (食べログ、2026年3月)・トッピング: バター、コーン、無料のにんにく。卓上に Sichuan pepper と黒こしょう (2025〜2026年)・セット: 半チャーハン、チャーシュー丼、半ライス250円。餃子、大きな唐揚げ (2024〜2026年)',
    neighborhood: '新高3-4-26、阪急三国駅から5分 (食べログ)',
    gf_detail: 'グルテンフリーではありません。北海道の小麦の麺を味噌スープで。餃子や唐揚げも。',
    vegan_detail: 'ヴィーガンではありません。豚のチャーシュー、バターのトッピング。餃子、唐揚げ。',
    notes: '[ラーメン・阪急三国、ごまを自分でする札幌風の味噌ラーメン、深夜1時半まで] 阪急三国駅から5分、12席の味噌ラーメン店で、席につくと店で焙煎した3種のごまとすり鉢が出て、ラーメンを待つあいだにすっておく。スープは北海道の Iwata 醸造の味噌、麺は北海道のちぢれ卵麺で、コクがあって少し甘い。常連の人気はコーンバター (1,100円)。辛さを選べる辛い味噌ラーメンはこの店だけ (2026年)。半チャーハンや餃子のセットも。毎日深夜1時半まで。カード不可。',
  });
}

// ================================================================ Cheese Dining ItaRu
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270302/27046671/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.cd-itaru.jp/';
  const L = ['11:30', '14:30'];
  put({
    id: 'osaka_cheese_dining_itaru_mikuni', name: 'Cheese Dining ItaRu', category: 'OMNI',
    lat: 34.736831, lng: 135.481916, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: bread with fondue and raclette, pasta, cutlets, baguette; ask about the risotto.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: cheese in nearly every dish; meat and seafood mains.',
    hours_raw: 'Lunch Tue–Sun 11:30–14:30 (last order 14:00); dinner Tue–Thu and Sun 17:30–22:00 (food last order 21:00, last entry 20:45), Fri–Sat 17:30–22:30 (food last order 21:30, last entry 21:00); closed Monday (shop site; Tabelog gives dinner from 17:30 the same). Reservations taken, online and by phone; cancel by the day before or pay up to the full food price (site). Cards, e-money and QR including PayPay and Alipay; no cover charge (Tabelog). 23 seats: 20 at tables and 3 at the counter (site); private hire from 20 (site). Non-smoking; free Wi-Fi; projector (Tabelog). Coin parking nearby (Tabelog).',
    hours: { 1: day(L, ['17:30', '22:00']), 2: day(L, ['17:30', '22:00']), 3: day(L, ['17:30', '22:00']), 4: day(L, ['17:30', '22:30']), 5: day(L, ['17:30', '22:30']), 6: day(L, ['17:30', '22:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '新高3-7-14 1F, 3 min west of Hankyu Mikuni; look for the cow statue at the door (site; Tabelog; September 2025)',
    cuisine: 'Cheese restaurant: cheeses from around the world in cooked dishes, with wine (site; Tabelog) · raclette scraped onto potatoes and baguette ¥1,900; cheese fondue, alone or in a share set ¥3,630 a head with Caesar salad, pasta and dessert (2025–2026); cheese fondue course (2025–2026) · lunch sets with an appetiser platter, bread and a drink: stone-pot mushroom risotto with Kiki Dairy provolone from Shimane ¥1,540; slow-cooked pork and mushroom cream spaghetti ¥1,870; premium Galician pork shoulder cutlet with fresh cheese and caper sauce ¥2,000 before tax (2024–2025) · "ItaRu baguette" with honey or mentaiko butter, ¥250 before tax or ¥429 (2025) · prosciutto ¥920, spicy sausage ¥730, mushroom ajillo ¥1,380, wagyu braised in red wine ¥2,200, cheese platter, soft-shell crab or blue crab tomato cream pasta (2025–2026) · cheese sweets also sold online: Idiazabal Basque cheesecake, Morbier-style rich cheesecake, Camembert crème brûlée (site) · wines chosen to pair, Belgian white beer (2024–2025)',
    website: SITE, gmaps: gm('Cheese Dining ItaRu 三国'), menu_url: SITE + 'dinner.html',
    notes: '[Cheese · Hankyu Mikuni, raclette and fondue from a prize-winning cheese chef] A 23-seat cheese restaurant three minutes from Hankyu Mikuni, marked by a cow statue at the door, whose owner-chef was runner-up in a 2023 cheese-art fromager competition. Evenings are for raclette scraped at the table (¥1,900) and creamy cheese fondue, with wine picked to match; lunch brings ¥1,540 stone-pot risotto with Shimane provolone, finished bubbling at your seat. The chef often runs the room alone but service keeps pace (2026). Book ahead at lunch; closed Mondays; cards accepted.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: cheeses from around the world and selected wines; dishes by a chef who was runner-up in the Cheese Art Fromager Competition 2023. Per the shop site (cd-itaru.jp, read 2026-11-02): a cheese specialist where guests experience "the unknown world of cheese" through cooking; classic cheese dishes at lunch, a wider range of cheeses at dinner; three cheese sweets sold online. Per reviews: "The restaurant was run by a quiet owner-chef who managed everything on [the chef’s] own" (January 2026); "the staff seemed busy serving solo" (August 2026); a cheese-making video plays on screens inside (October 2026); "the owner chef might seem quiet at first, but [was] very pleasant" and has been on TV (June 2024).',
      philosophy: '"Cheese is actually very deep": the animal, the land and the history behind each one, shown through cooking (site, translated).', specialty: 'Raclette and cheese fondue; stone-pot cheese risotto.',
      anecdotes: [
        { text: '"The Raclette was served by scraping the gooey melted cheese right in front of me onto bread and potatoes." — September 2025, ¥1,900.', source: R + 'B514741435/' },
        { text: '"They mixed it for me while it was bubbling." — November 2024, stone-pot risotto.', source: R + 'B495897838/' },
        { text: '"When I asked which wine pairs well with the cheese, [the staff] provided detailed recommendations." — December 2024.', source: R + 'B499533644/' },
      ],
      japanese_sources_summary: '店のサイト (cd-itaru.jp): 大阪・三国のチーズ専門店 Cheese Dining ItaRu (チーズダイニング イタル)、料理を通してチーズの知られざる世界を、昼は王道のチーズメニュー、夜は個性豊かなチーズ、イディアサバルのバスクチーズケーキ、モルビエ仕立ての濃厚チーズケーキ、カマンベール・ド・ノルマンディのクレームブリュレをオンラインで販売、大阪市淀川区新高3-7-14 1階、阪急三国駅から徒歩3分、ランチ11:30〜14:30 (L.O.14:00)、ディナー平日・日曜17:30〜22:00、金・土17:30〜22:30、月曜休み、23席 (テーブル20、カウンター3)、貸切20名から、カード・電子マネー可、キャンセルは前日まで、入口に牛。食べログ: Cheese Art Fromager Competition 2023 で準優勝のシェフ、QR 決済可 (PayPay、Alipay など)、チャージなし、禁煙、Wi-Fi。口コミ (2024年〜2026年10月): ラクレット1,900円、チーズフォンデュ、シェアセット3,630円、島根の Kiki Dairy のプロボローネの石鍋リゾット1,540円、豚ときのこのクリームスパゲッティ1,870円、ガリシア豚のカツ、ItaRu バゲット、生ハム920円、ソーセージ730円、きのこのアヒージョ1,380円、和牛の赤ワイン煮2,200円、カニのトマトクリームパスタ、静かなオーナーシェフがひとりで切り盛り。',
      confidence: 'medium', sources: [SITE, TB, R + 'B136372601/', R + 'B288827464/', R + 'B370524877/', R + 'B480432073/', R + 'B495897838/', R + 'B499533644/', R + 'B512954325/', R + 'B514741435/', R + 'B522317757/', R + 'B533146713/', R + 'B537891146/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Alipay accepted; free Wi-Fi (Tabelog). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市淀川区新高3-7-14 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区新高三丁目7番14号 (go) 19m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B514741435/', R + 'B522317757/', R + 'B512954325/', R + 'B288827464/'],
    price_note: 'Prices from 2024–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Raclette with potatoes and baguette', '¥1,900', 'Cheese', 'no', 'no', 'September 2025.', 'raclette'),
      it('', '', 'Cheese fondue share set (per person)', '¥3,630', 'Cheese', 'no', 'no', 'January 2026.', 'fondue_share_set'),
      it('', '', 'Stone-pot mushroom risotto with Shimane provolone, lunch set', '¥1,540', 'Lunch', 'ask', 'no', 'August 2025.', 'ishinabe_risotto'),
      it('', '', 'Wagyu braised in red wine', '¥2,200', 'Mains', 'ask', 'no', 'September 2025.', 'wagyu_red_wine'),
    ] }, {
    cuisine: 'チーズ専門店: 世界のチーズを料理にして、ワインといっしょに (店のサイト、食べログ)・ラクレットをじゃがいもとバゲットに削りかけて1,900円。チーズフォンデュ、シーザーサラダ、パスタ、デザートつきのシェアセットはひとり3,630円 (2025〜2026年)。チーズフォンデュのコース (2025〜2026年)・昼は前菜の盛り合わせ、パン、飲み物つきのセット: 島根の Kiki Dairy のプロボローネのきのこの石鍋リゾット1,540円。豚ときのこのクリームスパゲッティ1,870円。ガリシア豚の肩ロースのカツ、フレッシュチーズとケッパーのソース2,000円、税別 (2024〜2025年)・ItaRu バゲット、はちみつバターか明太子バター、250円 (税別) か429円 (2025年)・生ハム920円、辛いソーセージ730円、きのこのアヒージョ1,380円、和牛の赤ワイン煮2,200円、チーズの盛り合わせ、ソフトシェルクラブなどカニのトマトクリームパスタ (2025〜2026年)・チーズのスイーツはオンラインでも: イディアサバルのバスクチーズケーキ、モルビエ仕立ての濃厚チーズケーキ、カマンベールのクレームブリュレ (店のサイト)・チーズに合わせて選ぶワイン、ベルギーの白ビール (2024〜2025年)',
    neighborhood: '新高3-7-14 1F、阪急三国駅から西へ3分、入口の牛の像が目印 (店のサイト、食べログ、2025年9月)',
    gf_detail: 'グルテンフリーではありません。フォンデュやラクレットのパン、パスタ、カツ、バゲット。リゾットは確認を。',
    vegan_detail: 'ヴィーガンではありません。ほとんどの料理にチーズ。肉や魚介のメイン。',
    notes: '[チーズ・阪急三国、受賞シェフのラクレットとフォンデュ] 阪急三国駅から3分、入口の牛の像が目印の23席のチーズ料理の店で、オーナーシェフは2023年のチーズのコンクールで準優勝。夜は席で削るラクレット (1,900円) となめらかなチーズフォンデュに、合わせて選んでくれるワイン。昼は島根のプロボローネの石鍋リゾットが1,540円で、席でぐつぐつのまま仕上げてくれる。シェフがひとりで回すことも多いが、料理は遅れない (2026年)。昼は予約がおすすめ。月曜休み。カード可。',
  });
}

save();
