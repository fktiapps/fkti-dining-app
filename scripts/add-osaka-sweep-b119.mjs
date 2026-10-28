// Osaka sweep (2-mile circle around Dotonbori), batch 119 — mom / small-shop phase (all OMNI).
//   + 鰻師玄斎 (new eel counter: crisp unsteamed kabayaki and shirayaki, eel shabu-shabu, courses from ¥7,700; Higashi-Shinsaibashi)
//   + 鮨 樋口 (à-la-carte high-end sushi since 2009, no fixed start time; Tabelog Sushi 100 2022)
//   + 料太 (one-chef creative washoku counter on a 4F, courses and kamameshi; by Shinsaibashi) — mom_and_pop
//   + 居酒屋おだし (oden izakaya with a dashi based on the long-established 神楽, sake; Higashi-Shinsaibashi)
//   + お食事処 今ちゃん (one-person Showa-retro izakaya deep in Jumbo Yokocho, since 2009) — mom_and_pop
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-28';
const { put, save } = openCitySweep('osaka', TODAY, 119);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 鰻師玄斎
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27158704/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_unagi_shi_gensai', name: '鰻師玄斎 (Unagi Shi Gensai)', category: 'OMNI',
    lat: 34.671155, lng: 135.505444, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: soy-based kabayaki sauce and rice sauce; ponzu for the shabu-shabu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: eel throughout; liver soup; sushi.',
    hours_raw: 'Daily 12:00–21:00 (food L.O. 20:00, drinks 20:30) (Tabelog). Often fully booked from noon to close; reserve, and ask a few days ahead if you want sushi (October 2026). Tell the shop about allergies in advance (Tabelog). Cards incl. UnionPay, IC cards, e-money and QR incl. Alipay and WeChat Pay accepted (Tabelog).',
    hours: ALL(day(['12:00', '21:00'])), hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 2-1-14, ZOOM Bldg 2F — 5 min from Nagahoribashi, 7 from Nipponbashi',
    cuisine: 'Eel courses from live eels · course ¥7,700: yuba sesame tofu with fresh cream, eel shabu-shabu with ponzu, crisp shirayaki and kabayaki (two each), bettara-zuke, fresh kimchi, unaju of a whole eel, liver soup · premium course ¥9,900 · unadon ¥4,800 · Kansai-style, unsteamed and grilled over strong heat: crisp skin, fluffy flesh · three kinds of sansho on the counter · Yamagata Tsuyahime rice · red-vinegar sushi and eel nigiri on request · 8 counter seats',
    website: null, gmaps: gm('鰻師玄斎 東心斎橋'), menu_url: null,
    notes: "[Eel · crisp, unsteamed eel courses with eel shabu-shabu, Higashi-Shinsaibashi] An eight-seat eel counter on a second floor in Higashi-Shinsaibashi, opened at the end of August 2026 and on some days already booked from noon to close. Live eels are prepared on the spot and grilled Kansai-style without steaming over fierce heat, so the skin comes out crisp, like a potato chip in the shirayaki, while the flesh stays fluffy and juicy. The ¥7,700 course walks through it all: a creamy yuba sesame tofu, rare eel shabu-shabu in ponzu, crisp shirayaki and kabayaki side by side, then an unaju of a whole eel with liver soup; three kinds of sansho let you play with the finish. A ¥4,800 unadon is the shorter route. Call ahead for red-vinegar sushi. Diners compare it favorably with Japan's best eel shops. Cards and QR accepted.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 31 August 2026 (Tabelog)', background: 'Eel restaurant (Tabelog; September–October 2026 reviews).', philosophy: 'Live eels prepared to order; no steaming, grilled over strong heat for crisp skin and fluffy flesh (October 2026 reviews).', specialty: 'Eel courses; shirayaki; eel shabu-shabu.',
      anecdotes: [
        { text: '"By skipping the steaming process… the skin is crispy while the inside remains juicy and rich in flavor… You can enjoy the crispy unaju, the rare \'unagi shabu-shabu,\' and even sushi." — October 2026.', source: R + 'B535993452/' },
        { text: '"The shirayaki (grilled unagi without sauce) was as crispy as potato chips and absolutely delicious… The kabayaki (grilled unagi with sauce) was not crispy but rather fluffy and moist." — September 2026, unadon ¥4,800.', source: R + 'B534982691/' },
      ],
      japanese_sources_summary: '食べログ: 鰻師玄斎、大阪市中央区東心斎橋2-1-14 ZOOMビル 2F、長堀橋から徒歩5分、日本橋から7分、心斎橋・なんばから10分、毎日12:00〜21:00(L.O. 料理20:00・ドリンク20:30)、アレルギーは事前に、カード(銀聯含む)・交通系IC・電子マネー・QR(Alipay、WeChat Pay含む)可、カウンター8席、2026年8月31日開店。口コミ(2026年9〜10月): トロと鰻の握り、手巻き、店内で活け鰻をさばく、昼から夜まで満席、赤酢のシャリ、3貫の寿司、鰻丼4,800円、ポテトチップスのような白焼き、生キムチ、ふわふわの蒲焼き、ご飯のたれは鰻のたれと別、雌の鰻、蒸さずに独自の焼きで皮はパリッと中はジューシー、関西風、鰻しゃぶしゃぶ、4日前に電話して寿司も、アイルランド産の鮪、7,700円のコース(湯葉豆腐、鰻しゃぶ2切れ、パリパリの白焼き2切れ、蒲焼き2切れ、べったら漬け、生キムチ、鰻一本の鰻重、肝吸い)、強い火力、プレミアムコース9,900円、生クリームと湯葉の胡麻豆腐、山椒3種、山形のTsuyahime、肝吸いはやや塩辛いという声、スタッフが気さく。',
      confidence: 'medium', sources: [TB, R + 'B534982691/', R + 'B535993452/', R + 'B538063926/', R + 'B538094202/', R + 'B538145612/', R + 'B538145945/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter; friendly staff; Alipay and WeChat Pay accepted (Tabelog; October 2026).' },
    safety: { ...SAFETY0, staff_allergy_handling: ['Asks guests to report allergies in advance (Tabelog).'] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋2-1-14 ZOOMビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Opened 31 August 2026 (Tabelog); reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋二丁目1番14号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534982691/', R + 'B538063926/', R + 'B538145945/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Eel course', '¥7,700', 'Course', 'no', 'no', 'September 2026.', 'course'),
      it('', '', 'Premium eel course', '¥9,900', 'Course', 'no', 'no', 'October 2026; tax included.', 'premium'),
      it('', '', 'Unadon', '¥4,800', 'Eel', 'no', 'no', 'September 2026.', 'unadon'),
      it('', '', 'Eel shabu-shabu', '', 'Eel', 'no', 'no', 'October 2026; in courses.', 'shabu'),
      it('', '', 'Sushi (on request)', '', 'Sushi', 'no', 'no', 'October 2026; call ahead.', 'sushi'),
    ] }, {
    cuisine: '活け鰻のコース・7,700円のコース: 生クリームと湯葉の胡麻豆腐、ポン酢の鰻しゃぶしゃぶ、パリパリの白焼きと蒲焼き各2切れ、べったら漬け、生キムチ、鰻一本の鰻重、肝吸い・プレミアムコース9,900円・鰻丼4,800円・関西風で蒸さず強火で焼き、皮はパリッと身はふわふわ・カウンターに山椒3種・山形のTsuyahime・頼めば赤酢の寿司と鰻の握り・カウンター8席',
    neighborhood: '中央区東心斎橋2-1-14 ZOOMビル 2F。長堀橋から徒歩5分、日本橋から7分',
    gf_detail: 'グルテンフリーではありません。醤油ベースの蒲焼きのたれとご飯のたれ、しゃぶしゃぶのポン酢。',
    vegan_detail: 'ヴィーガンではありません。全体に鰻、肝吸い、寿司。',
    notes: '[鰻・東心斎橋、蒸さずにパリッと焼く鰻のコースと鰻しゃぶ] 東心斎橋のビル2階、カウンター8席の鰻の店で、2026年8月末に開店、すでに昼から閉店まで予約で埋まる日も。活け鰻をその場でさばき、関西風に蒸さず強い火で焼くので、白焼きはポテトチップスのように皮がパリッと、身はふわふわでジューシー。7,700円のコースで全部を: クリーミーな湯葉の胡麻豆腐、ポン酢で食べる珍しい鰻しゃぶ、パリパリの白焼きと蒲焼きの食べ比べ、そして鰻一本の鰻重と肝吸い。山椒3種で締めの味を変えて。短く済ませるなら4,800円の鰻丼。赤酢の寿司は事前に電話を。日本有数の鰻の名店と比べても上という声。カード、QR可。',
  });
}

// ================================================================ 鮨 樋口
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27043154/'; const R = TB + 'dtlrvwlst/';
  const D = day(['17:00', '22:30']);
  put({
    id: 'osaka_sushi_higuchi_higashi_shinsaibashi', name: '鮨 樋口 (Sushi Higuchi)', category: 'OMNI',
    lat: 34.671731, lng: 135.505059, cuisine_type: 'sushi',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: soy seasoning on sushi and sashimi; small dishes and grilled fish with soy-based sauces.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish and seafood throughout; shiitake sushi is the one plant piece reported.',
    hours_raw: 'Mon–Wed, Fri, Sat 17:00–22:30 (L.O. 22:00, last entry 20:30); closed Thu and Sun (Tabelog). No fixed start time: book the time that suits you (July 2026). Same-day reservations sometimes possible (September 2026). Cards (VISA, Master, JCB, AMEX); no e-money or QR (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 2-4-30, Grand Janis Bldg 1F — 2 min from Nagahoribashi Stn, 5 from Shinsaibashi',
    cuisine: 'High-end sushi, ordered your way · choose from a parade of small dishes shown at the counter · grilled fish of your choice (e.g. flounder, striped jack collar) · sashimi · nigiri on lightly pressed rice that settles under the topping · shiitake sushi · crisp-skinned eel · sake chosen by the chef (Harushika among them) · spend ¥15,000–30,000 · 8 counter seats',
    website: null, gmaps: gm('鮨 樋口 東心斎橋'), menu_url: null,
    notes: "[Sushi · high-end sushi ordered your way near Nagahoribashi, since 2009] An eight-seat counter near Nagahoribashi, open since 2009 and on Tabelog's sushi 100 in 2022, that breaks the high-end sushi mold: there's no fixed course or common start time. Small dishes are shown at the counter and you pick what you like, then grilled fish, sashimi and nigiri as you please, so light drinkers can go straight to sushi and sake lovers can linger. The rice is pressed so gently that it settles under the topping, and one diner singles out a surprising shiitake nigiri and crisp-skinned eel. The chef keeps the room lively and picks sake to match. Expect ¥15,000–30,000. One diner has come for 24 years. Closed Thursday and Sunday; last entry 20:30.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 17 July 2009 (Tabelog)', background: 'Sushi counter; Tabelog Sushi WEST 100, 2022 (Tabelog).', philosophy: 'À-la-carte high-end sushi with no fixed course or start time (2025–2026 reviews).', specialty: 'Nigiri; small dishes and grilled fish.',
      anecdotes: [
        { text: '"What sets it apart is the ability to order a la carte according to your preferences. While high-end sushi restaurants typically offer a set course, here there\'s no fixed start time." — July 2025.', source: R + 'B468357231/' },
        { text: '"The moment the sushi is placed on the serving board, the rice, which is gently pressed, sinks under the weight of the topping, allowing it to absorb air!" — August 2026.', source: R + 'B533295734/' },
      ],
      japanese_sources_summary: '食べログ: 鮨 樋口、大阪市中央区東心斎橋2-4-30 グランドジャニスビル 1F、長堀橋駅から徒歩2分、心斎橋駅・日本橋駅から5分、月・火・水・金・土 17:00〜22:30(L.O. 22:00、最終入店20:30)、木・日休み、カード可、電子マネー・QR不可、カウンター8席、2009年7月17日開店、食べログ 寿司 WEST 百名店 2022。口コミ(2023年7月〜2026年9月): 17年目、長く通う常連、「樋口劇場」、江戸前にこだわらない、コースがなく好みで注文、開始時間が決まっていない、酒を飲まない人も寿司を存分に、刺身やつまみも、コスパがいい、店主が感じよく気配り、小鉢、焼き魚、つまみと日本酒、椎茸の握りが印象的、皮がパリッとした鰻、平目と縞鯵のカマ、Harushika、気取らない雰囲気、元気な店主という声、好きな時間に予約、ふんわり握ったシャリがネタの重みで沈む、店主の選ぶ日本酒、当日電話で予約、小鉢を見て選べる、焼き方も選べる。',
      confidence: 'medium', sources: [TB, R + 'B128744562/', R + 'B468357231/', R + 'B531085571/', R + 'B532418071/', R + 'B533295734/', R + 'B536294838/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Lively counter; order at your own pace (2025–2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋2-4-30 グランドジャニスビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋二丁目4番30号 (go) 19m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B468357231/', R + 'B536294838/'],
    price_note: 'No item prices reported; spend ¥15,000–30,000 (2025–2026 reviews).', last_checked: TODAY, items: [
      it('', '', 'À-la-carte sushi, small dishes, grilled fish and sashimi', '', 'À la carte', 'no', 'no', 'September 2026.', 'alacarte'),
      it('', '', 'Shiitake nigiri', '', 'Sushi', 'ask', 'ask', 'July 2026.', 'shiitake'),
      it('', '', 'Eel', '', 'Sushi', 'no', 'no', 'July 2026.', 'unagi'),
    ] }, {
    cuisine: '好きに注文する高級鮨・カウンターに並ぶ小鉢から選ぶ・好みの焼き魚(平目、縞鯵のカマなど)・刺身・ふんわり握りネタの重みで沈むシャリの握り・椎茸の握り・皮がパリッとした鰻・店主が選ぶ日本酒(Harushikaなど)・一人15,000〜30,000円・カウンター8席',
    neighborhood: '中央区東心斎橋2-4-30 グランドジャニスビル 1F。長堀橋駅から徒歩2分、心斎橋から5分',
    gf_detail: 'グルテンフリーではありません。寿司や刺身の醤油、小鉢や焼き魚の醤油ベースのたれ。',
    vegan_detail: 'ヴィーガンではありません。全体に魚介、報告のある植物性の一貫は椎茸の握り。',
    notes: '[寿司・長堀橋近く、2009年からの好きに注文できる高級鮨] 長堀橋近くのカウンター8席の鮨店で、2009年開店、食べログ 寿司 百名店 2022に選出、高級鮨の型を破る: 決まったコースも一斉スタートもない。カウンターに並ぶ小鉢から好きなものを選び、焼き魚、刺身、握りを好きなだけ。お酒を飲まない人はすぐ寿司へ、酒好きはゆっくりと。シャリはネタの重みで沈むほどふんわり握られ、意外な椎茸の握りと皮がパリッとした鰻を挙げる声も。店主が場を明るくし、日本酒も合わせて選んでくれる。一人15,000〜30,000円。24年通う人も。木・日休み、最終入店20時半。',
  });
}

// ================================================================ 料太
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27141249/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_ryota_higashi_shinsaibashi', name: '料太 (Ryota)', category: 'OMNI',
    lat: 34.672936, lng: 135.502564, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tempura; kuzu-sauced dumplings; Saikyo-miso grilled fish; soy-based cooking.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood, beef and dashi throughout.',
    hours_raw: '18:00–24:00; closing days vary (check Tabelog online booking); may close early when ingredients run out (Tabelog). Run by one chef (August 2026). Otoshi charge, included in courses; heated tobacco only (Tabelog). Takeout on request (Tabelog). Cards incl. UnionPay; no e-money or QR (Tabelog).',
    hours: ALL(day(['18:00', '23:59'])), hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 1-17-15, Marusei Bldg 4F B — about 1 min from Shinsaibashi Stn; entrance a little hard to find',
    cuisine: 'Creative Japanese, course or à la carte · seven-dish course with all-you-can-drink ¥11,000 (July 2026): small appetizers (mizuna simmered with beef and egg, octopus with winter melon), sashimi platter (tuna, seared barracuda, squid, sea urchin, crab with crab miso, horse), lotus-root dumpling in kuzu sauce, flounder grilled with Saikyo miso, seasonal tempura, clay-pot rice (ayu, corn and edamame), homemade dessert · kamameshi as a course option, leftovers made into onigiri to take home · à la carte: tuna, sea urchin, a well-judged steak, Kyoto vegetables, shirako, abalone with liver sauce · broad sake list · 6–8 counter seats',
    website: null, gmaps: gm('料太 東心斎橋'), menu_url: null,
    notes: "[Japanese · one-chef creative washoku counter by Shinsaibashi] A quiet counter of six to eight seats on the fourth floor of a building a minute from Shinsaibashi, open since 2024 and run by a single chef who cooks, serves and watches over every guest. The cooking is refined rather than flashy: the seven-dish course with drinks (¥11,000) runs from a mizuna and beef appetizer through a sashimi platter with sea urchin and crab, a chewy lotus-root dumpling in kuzu sauce and Saikyo-grilled flounder to seasonal tempura and a clay-pot rice, with leftovers turned into onigiri for tomorrow. À la carte, diners praise the firm tuna, very fresh sea urchin and a precisely cooked steak. The sake list is broad. Open late, and on Sunday nights when much of Minami is closed. Heated tobacco only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 23 April 2024 (Tabelog)', background: 'Creative Japanese counter run by one chef (August 2026 review; Tabelog).', philosophy: null, specialty: 'Creative Japanese courses; kamameshi.',
      anecdotes: [
        { text: '"It\'s a small restaurant with about eight seats, all at the counter, run solely by the owner… There are no excessive explanations or flashy presentations. Still, every movement is efficient." — August 2026.', source: R + 'B535108099/' },
        { text: '"The hot, clay pot-cooked rice was served at the perfect moment. Today\'s ingredients included sweetfish, two types of corn, and edamame." — July 2026, course ¥11,000.', source: R + 'B532817254/' },
      ],
      japanese_sources_summary: '食べログ: 料太、大阪市中央区東心斎橋1-17-15 丸清ビル 4F B、心斎橋駅から徒歩約1分、18:00〜24:00、不定休(食べログのネット予約で確認)、食材がなくなり次第閉店の場合あり、テイクアウト可、突き出し料あり(コースは込み)、加熱式たばこのみ可、カード(銀聯含む)可、電子マネー・QR不可、6〜8席、6名以上で貸切、2024年4月23日開店。口コミ(2026年7〜10月): 飲み放題付き7品のコース11,000円、水菜と牛の炊いたん、蛸と冬瓜、もずく酢、鮪・炙り魳・烏賊・雲丹・蟹の身と蟹味噌和え・馬刺しのお造り、蓮根饅頭の葛あん、鰈の西京焼き、鱧・とうもろこし・オクラの天ぷら、鮎ととうもろこしと枝豆の土鍋ご飯、自家製のデザート、残りのご飯はおにぎりに、当日予約、釜めし、京野菜、日曜夜も営業、店主一人で切り盛り、しっかりした身の鮪、新鮮な雲丹、焼き加減のいいステーキ、食材のパッケージを見せてくれる、丸い芋饅頭、白子、鮑の肝ソース、入口が少し分かりにくい、日本酒が豊富。',
      confidence: 'medium', sources: [TB, R + 'B532817254/', R + 'B534033249/', R + 'B534800869/', R + 'B535108099/', R + 'B536826972/', R + 'B537583439/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Online booking via Tabelog; calm counter (2026).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-17-15 丸清ビル 4F B',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目17番15号 (go) 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B532817254/'],
    price_note: 'Course price from a July 2026 review; à la carte not priced.', last_checked: TODAY, items: [
      it('', '', 'Seven-dish course with all-you-can-drink', '¥11,000', 'Course', 'no', 'no', 'July 2026; tax included.', 'course'),
      it('', '', 'Kamameshi (course option)', '', 'Course', 'no', 'no', 'August–October 2026.', 'kamameshi'),
      it('', '', 'Steak', '', 'À la carte', 'no', 'no', 'August 2026.', 'steak'),
    ] }, {
    cuisine: 'コースかアラカルトの創作和食・飲み放題付き7品のコース11,000円(2026年7月): 小鉢(水菜と牛の卵とじ、蛸と冬瓜)、お造り(鮪、炙り魳、烏賊、雲丹、蟹の身と蟹味噌、馬刺し)、蓮根饅頭の葛あん、鰈の西京焼き、季節の天ぷら、土鍋ご飯(鮎、とうもろこし、枝豆)、自家製デザート・コースのオプションの釜めし、残りはおにぎりにして持ち帰り・アラカルト: 鮪、雲丹、焼き加減のいいステーキ、京野菜、白子、鮑の肝ソース・日本酒が豊富・カウンター6〜8席',
    neighborhood: '中央区東心斎橋1-17-15 丸清ビル 4F B。心斎橋駅から徒歩約1分、入口がやや分かりにくい',
    gf_detail: 'グルテンフリーではありません。天ぷら、葛あんの饅頭、西京焼き、醤油を使う料理。',
    vegan_detail: 'ヴィーガンではありません。全体に魚介、牛肉、出汁。',
    notes: '[和食・心斎橋近く、料理人一人の創作和食のカウンター] 心斎橋から1分、ビル4階の6〜8席の静かなカウンターで、2024年開店、料理も配膳も一人の料理人がこなし、すべての客に目を配る。料理は派手さより確かさ: 飲み放題付き7品のコース(11,000円)は水菜と牛の小鉢から、雲丹や蟹のお造り、もちもちの蓮根饅頭の葛あん、鰈の西京焼き、季節の天ぷら、土鍋ご飯まで、残りは翌日用のおにぎりに。アラカルトではしっかりした鮪、新鮮な雲丹、焼き加減の見事なステーキをほめる声。日本酒も豊富。夜遅くまで、ミナミの多くが休む日曜の夜も営業。加熱式たばこのみ可。',
  });
}

// ================================================================ 居酒屋おだし
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27120288/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://izakaya-odashi.com/';
  const W = day(['17:00', '23:00']); const F = day(['17:00', '01:00']);
  put({
    id: 'osaka_izakaya_odashi_higashi_shinsaibashi', name: '居酒屋おだし (Izakaya Odashi)', category: 'OMNI',
    lat: 34.672564, lng: 135.50424, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: dashi broth seasoned with soy; oden items such as fish cakes and mochi pouches; gyoza; fried dishes.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: bonito dashi for the oden; beef tendon; sashimi.',
    hours_raw: 'Mon–Thu 17:00–23:00 (L.O. 22:30); Fri–Sat 17:00–01:00; closed Sun and public holidays (Tabelog). Two-hour limit (Tabelog; official site). Seat charge ¥600 (Tabelog). Smoking allowed, incl. e-cigarettes (2026 reviews). Book ahead: full even on rainy weekday nights (October 2026). Cards and PayPay accepted (Tabelog). Takeaway (official site).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: F, 5: F }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 1-15-2, Matsumura Bldg 1F — 4 min from Nagahoribashi exit 7, 5 from Shinsaibashi exit 6',
    cuisine: 'Oden and Japanese plates with sake · house dashi blended on the base of the long-established 神楽\'s taste · oden: daikon cut with a star in the middle, tofu scored like sea anemones, shungiku steeped in broth, beef tendon, yuba, mochi kinchaku · sashimi platter · fried dishes, gyoza, salted green peppers · broad sake list · 12 counter seats and a table for four; semi-private seating',
    website: OWN, gmaps: gm('居酒屋おだし 東心斎橋'), menu_url: null,
    notes: "[Izakaya · oden and sake by Nagahoribashi] A modern, lively oden izakaya in Higashi-Shinsaibashi, open since 2020, where the counter lets you watch the cooking and it's often fully booked, even on a rainy Monday. The house dashi is a blend built on the taste of the long-established 神楽; diners call it fresh and deep, though one wanted it stronger. The oden is playfully cut, with a star in the daikon and tofu scored like sea anemones; one diner had never understood shungiku in oden until it arrived here, steeped and fragrant. The sashimi is serious, there's gyoza and fried food, and the sake list is long. Service is quick and friendly. Note the ¥600 seat charge, the two-hour limit, and that smoking is allowed.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 10 October 2020 (Tabelog)', background: 'Oden izakaya (official site izakaya-odashi.com; Tabelog).', philosophy: 'House dashi blended on the base of the taste of the long-established 神楽 (official site).', specialty: 'Oden; sake.',
      anecdotes: [
        { text: '"The shungiku here is incredibly delicious. Soaked in the broth, it comes out as if to say, \'I\'m the star of the show from today on.\'… Additionally, the sashimi is genuinely good." — September 2026.', source: R + 'B535226135/' },
        { text: '"I noticed some creative touches, like the daikon radish being cut into a star shape in the center and the tofu having cuts resembling sea anemones." — September 2026.', source: R + 'B535673898/' },
      ],
      japanese_sources_summary: '公式 izakaya-odashi.com: 心斎橋駅から徒歩5分、旨いお出汁と選び抜いた銘酒、目の前で店主が調理するカウンター、接待向けの半個室、老舗「神楽」の味をベースにブレンドした特製のお出汁、一品料理(餃子、塩ピーマン)、テイクアウト、4月から2時間制、日・祝休み。食べログ: 居酒屋おだし、大阪市中央区東心斎橋1-15-2 松村ビル 1F、心斎橋駅6番出口から徒歩5分、長堀橋駅7番出口から4分、月〜木 17:00〜23:00、金土 17:00〜翌1:00、日祝休み、2時間制、席料600円、カード・PayPay可、16席(カウンター12、4人席1)、2020年10月10日開店。口コミ(2026年8〜10月): 濃いめの出汁、日本酒が豊富、紙巻きも電子たばこも可、接客がいい、春菊が絶品、刺身もしっかり、混むと提供に時間、濃い色の新鮮な出汁、大根の中心が星形、豆腐がイソギンチャクのような切り込み、平日でも満席、会計で待たされた日、雨の月曜でも満席、一品料理も、カウンターで調理が見える、くり抜いた大根、ゆで卵のお通し、お造り盛り、大根・春菊・牛すじ・湯葉・餅巾着、思ったより優しい出汁という声。',
      confidence: 'medium', sources: [TB, OWN, R + 'B534181627/', R + 'B535226135/', R + 'B535673898/', R + 'B536879265/', R + 'B536920956/', R + 'B537100894/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter with cooking on view; English pages on the official site.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-15-2 松村ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目15番2号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [OWN, R + 'B537100894/'],
    price_note: 'Item prices not reported; spend about ¥3,000–9,000 (2026 reviews); seat charge ¥600.', last_checked: TODAY, items: [
      it('', '', 'Oden (daikon, shungiku, beef tendon, yuba, mochi kinchaku)', '', 'Oden', 'no', 'no', 'October 2026.', 'oden'),
      it('', '', 'Assorted sashimi', '', 'Dishes', 'no', 'no', 'October 2026.', 'otsukuri'),
      it('', '', 'Gyoza', '', 'Dishes', 'no', 'no', 'Official site.', 'gyoza'),
      it('', '', 'Salted green peppers', '', 'Dishes', 'ask', 'ask', 'Official site.', 'shio_piman'),
      it('', '', 'Seat charge', '¥600', 'Charge', 'no', 'no', 'Tabelog.', 'seki'),
    ] }, {
    cuisine: 'おでんと和の一品、日本酒・老舗「神楽」の味をベースにブレンドした特製の出汁・おでん: 中心が星形の大根、イソギンチャクのように切り込んだ豆腐、出汁を含んだ春菊、牛すじ、湯葉、餅巾着・お造り盛り・揚げ物、餃子、塩ピーマン・日本酒が豊富・カウンター12席と4人席、半個室も',
    neighborhood: '中央区東心斎橋1-15-2 松村ビル 1F。長堀橋7番出口から徒歩4分、心斎橋6番出口から5分',
    gf_detail: 'グルテンフリーではありません。醤油で味付けした出汁、練り物や餅巾着などのおでん、餃子、揚げ物。',
    vegan_detail: 'ヴィーガンではありません。おでんの鰹出汁、牛すじ、刺身。',
    notes: '[居酒屋・長堀橋近く、おでんと日本酒] 東心斎橋のモダンでにぎやかなおでんの居酒屋で、2020年開店、カウンターで調理が見え、雨の月曜でも満席になるほど。特製の出汁は老舗「神楽」の味をベースにブレンドしたもので、新鮮で深いという声、もっと濃くてもという人も。おでんは遊び心のある切り方で、大根の中心に星、豆腐にはイソギンチャクのような切り込み。おでんの春菊の良さが初めてわかったという声も。刺身も本格的、餃子や揚げ物もあり、日本酒も豊富。接客は早く気持ちいい。席料600円、2時間制、喫煙可に注意。',
  });
}

// ================================================================ お食事処 今ちゃん
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27044552/'; const R = TB + 'dtlrvwlst/';
  const D = day(['18:00', '02:00']);
  put({
    id: 'osaka_oshokuji_dokoro_imachan', name: 'お食事処 今ちゃん (Oshokuji Dokoro Imachan)', category: 'OMNI',
    lat: 34.671352, lng: 135.505722, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: home-style dishes with soy seasoning; gyoza; kara-age.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork kimchi, nikujaga, mackerel, fish cake, chicken.',
    hours_raw: 'Mon–Sat 18:00–02:00; Sun and public holidays 18:00–24:00; hours may change (Tabelog). Run by one person; order a few dishes at a time (2017–2026 reviews). Entrance hard to find, deep in Jumbo Yokocho. Cash only: no cards, e-money or QR (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: day(['18:00', '23:59']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 2-1-13, Osakaya Jumbo Bldg 1F, deep in Jumbo Yokocho — about 10 min from Nagahoribashi or Nipponbashi',
    cuisine: 'Showa-retro home cooking and strong drinks · natto-yaki · pork kimchi · itawasa stir-fried in butter · butter edamame · nikujaga · shime-saba · kara-age · chikuzen-ni · firefly squid with vinegar miso · assorted salad · gyoza · "Showa set" · shochu with green tea, poured strong · about 8 counter seats',
    website: null, gmaps: gm('お食事処 今ちゃん ジャンボ横丁'), menu_url: null,
    notes: "[Izakaya · one-person Showa-retro izakaya deep in Jumbo Yokocho] A tiny, warm counter at the back of the neon-lit Jumbo Yokocho alley in Higashi-Shinsaibashi, run single-handed since 2009 by a friendly owner. It feels straight out of the Showa era: cheap, homemade dishes like natto-yaki, pork kimchi, butter-fried itawasa and edamame, nikujaga and chikuzen-ni, and drinks poured famously strong, with shochu and green tea at about seven to three. Order a few dishes at a time, since one person cooks everything; customers end up helping each other out and chatting, which is half the charm. The entrance is easy to miss, so allow time to find it. Open until 2 am most nights. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 24 August 2009 (Tabelog)', background: 'Izakaya run by one person (2017–2026 reviews; Tabelog).', philosophy: null, specialty: 'Showa-style home cooking.',
      anecdotes: [
        { text: '"It\'s a mysterious space where customers naturally cooperate and care for each other, creating a sense of teamwork as soon as you step inside." — February 2026.', source: R + 'B523069877/' },
        { text: '"…First off, the drinks are strong! Haha. The shochu with green tea is about 70% shochu and 30% green tea." — February 2026.', source: R + 'B523293155/' },
      ],
      japanese_sources_summary: '食べログ: お食事処 今ちゃん、大阪市中央区東心斎橋2-1-13 大阪屋ジャンボビル 1F、長堀橋駅・日本橋駅から徒歩約10分、月〜土 18:00〜翌2:00、日・祝 18:00〜24:00、予約可、カード・電子マネー・QR不可、カウンター約8席、2009年8月24日開店。口コミ(2017年7月〜2026年2月): 納豆焼き、豚キムチ、板わさのバター炒め、ほたるいかの酢味噌、盛り合わせサラダ、枝豆のバター炒め、餃子、一度に頼みすぎると叱られるので少しずつ、ジャンボ横丁の奥、一人で営業、肉じゃが、落ち着いた雰囲気、ジャンボ横丁のネオン、改装、店主は変わらない、入口が分かりにくい、気さくな店主、昭和の家庭料理のような安いメニュー、濃いハイボール、温かい雰囲気、すべて手作り、しめ鯖、唐揚げ、筑前煮、昭和セット、客同士が自然に協力し合う、店主一人で切り盛り、緑茶ハイは焼酎7割、懐かしい味、一人でも楽しめる。',
      confidence: 'medium', sources: [TB, R + 'B190689514/', R + 'B333384536/', R + 'B384848316/', R + 'B512426002/', R + 'B523069877/', R + 'B523293155/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Warm, chatty counter; order a little at a time (2017–2026).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋2-1-13 大阪屋ジャンボビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; newest review February 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋二丁目1番13号 (go) 26m (inside the Jumbo Yokocho alley); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B190689514/', R + 'B512426002/'],
    price_note: 'Item prices not reported; spend about ¥2,000–4,000 (2023–2026 reviews).', last_checked: TODAY, items: [
      it('納豆焼き', '', 'Natto-yaki', '', 'Dishes', 'no', 'ask', 'June 2020.', 'natto_yaki'),
      it('', '', 'Pork kimchi', '', 'Dishes', 'no', 'no', 'June 2020.', 'butakimu'),
      it('', '', 'Itawasa stir-fried in butter', '', 'Dishes', 'no', 'no', 'July 2017.', 'itawasa'),
      it('', '', 'Nikujaga', '', 'Dishes', 'no', 'no', 'July 2025.', 'nikujaga'),
      it('', '', 'Shime-saba, kara-age, chikuzen-ni', '', 'Dishes', 'no', 'no', 'August 2025.', 'home'),
      it('', '', 'Shochu with green tea', '', 'Drinks', 'ask', 'ask', 'February 2026.', 'ocha_hai'),
    ] }, {
    cuisine: '昭和レトロな家庭料理と濃いお酒・納豆焼き・豚キムチ・板わさのバター炒め・枝豆のバター炒め・肉じゃが・しめ鯖・唐揚げ・筑前煮・ほたるいかの酢味噌・盛り合わせサラダ・餃子・「昭和セット」・焼酎7割ほどの濃い緑茶ハイ・カウンター約8席',
    neighborhood: '中央区東心斎橋2-1-13 大阪屋ジャンボビル 1F、ジャンボ横丁の奥。長堀橋・日本橋から徒歩約10分',
    gf_detail: 'グルテンフリーではありません。醤油で味付けした家庭料理、餃子、唐揚げ。',
    vegan_detail: 'ヴィーガンではありません。豚キムチ、肉じゃが、しめ鯖、練り物、鶏肉。',
    notes: '[居酒屋・ジャンボ横丁の奥、ひとりで営む昭和レトロな居酒屋] 東心斎橋、ネオンのジャンボ横丁の奥にある小さく温かいカウンターで、2009年から気さくな店主が一人で切り盛り。まるで昭和: 納豆焼き、豚キムチ、板わさや枝豆のバター炒め、肉じゃが、筑前煮など安い手作りの料理に、焼酎7割ほどの緑茶ハイなど濃いお酒で有名。料理は一人で作るので少しずつ注文を。客同士が自然に助け合い会話が生まれるのも魅力の半分。入口が見つけにくいので時間に余裕を。ほぼ毎晩深夜2時まで。現金のみ。',
  });
}

save();
