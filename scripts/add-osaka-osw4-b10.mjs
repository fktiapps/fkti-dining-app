// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first; worker osw4 (lane: Tabelog id mod 4 = 3), batch 10.
//   + 千日前 はつせ Sennichimae Hatsuse (cook-it-yourself okonomiyaki in private tatami rooms; family business since 1945)
//   + IL MERCATO ANGELO (market-style Italian in the Crysta Nagahori underground mall; Anjou group)
//   + 本家 大たこ 法善寺店 Honke Otako Hozenji (konamon izakaya branch of the Dotonbori takoyaki stand)
//   + ガフーリオ Gaffurio (northern Italian trattoria near Nippombashi, 26 years in 2026)
//   - skip 富久重ホルモン 大阪店 27067227: the Osaka branch of an Ehime yakiniku chain founded in 1969 (Tabelog; September
//     2026 reviews), with a sister concept opening next door (Tabelog shop text) — multi-prefecture chain.
//   Chain check: Hatsuse one shop. IL MERCATO ANGELO is run by the anjou.co.jp group, three of whose shops are already
//   in data and were kept (osaka_creperie_alcyon_namba, osaka_bistro_d_ange_shinsaibashi, osaka_salon_de_the_alcyon_hozenji),
//   so it follows that precedent. Honke Otako: the Dotonbori stand and this branch (2026 reviews), neither in data.
//   Gaffurio one shop. None of the four is in data/osaka.json (grep by name, Tabelog id and address, 2026-11-02).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw4-10');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27067227', '富久重ホルモン 大阪店: Osaka branch of an Ehime yakiniku chain founded 1969, with a sister concept next door — multi-prefecture chain');

// ================================================================ 千日前 はつせ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27002675/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.hatsuse.net/';
  const WD = day(['11:30', '24:00']), WE = day(['11:00', '24:00']);
  put({
    id: 'osaka_sennichimae_hatsuse', name: '千日前 はつせ (Sennichimae Hatsuse)', category: 'OMNI',
    lat: 34.665433, lng: 135.503712, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: the batter is a blend of four flours with Japanese dashi (official site), finished with two sauces; no gluten-free option described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the batter is made with dashi (official site) and the okonomiyaki carry pork, squid or shrimp.',
    hours_raw: 'Mon–Fri 11:30–24:00; Sat, Sun and holidays 11:00–24:00; last order 23:00 (Tabelog). Open over New Year (official site, 2021 notice). Reservations accepted (Tabelog; official site). Cards (VISA, Master, JCB, AMEX, Diners), transport IC, Edy, nanaco, WAON, iD, QUICPay, PayPay, Alipay, WeChat Pay (Tabelog). 120 seats, all in private tatami rooms for 2 to over 30, on the second floor up a stair with no lift (official site; Tabelog; July 2026). Order by the phone in your room (September 2026). Tabelog lists it as non-smoking, while July and September 2026 diners say smoking or e-cigarettes are allowed in the closed rooms. Children welcome (Tabelog). Founded 1945 (official site).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba Sennichimae 11-25, はつせビル 2F, beside Namba Grand Kagetsu — 5 min from Namba or Nippombashi Stn',
    cuisine: 'Okonomiyaki and yakisoba you cook yourself on the teppan in a private room, with instructions on the wall (official site; 2026 reviews) · secret batter of four selected flours with Japanese dashi, crisp outside and fluffy inside; the fillings are stir-fried first, then returned to the batter; "double sauce" of a Worcester-type sauce and a sweet thick sauce (official site) · pork okonomiyaki with fresh shoulder loin, the Hatsuse original mix, deluxe series (official site) · mixed okonomiyaki ¥1,243 (September 2026); lunch mixed set ¥994 (July 2026) · modern-yaki, pork, squid and shrimp, okonomiyaki with green onion, fried pork-fat topping · yakisoba (staff cook it, October 2026), teppan dishes, sausages · courses with free drinks · beer ¥580 (August 2026)',
    website: SITE, gmaps: gm('千日前 はつせ'), menu_url: SITE,
    notes: '[Okonomiyaki · Sennichimae, cook it yourself in a tatami room] A family okonomiyaki house next to Namba Grand Kagetsu, begun as the Hatsuse ryokan in the late Meiji era and reopened in 1945 as a canteen, where every table is a private tatami room, a holdover from the inn. You cook your own: fry the pork, squid and shrimp, fold them into the dashi batter, flip, then paint on the two house sauces, a Worcester and a sweet thick one; the instructions are on the wall. Order the mixed (¥1,243 in September 2026) or the pork, and call for more by the room phone. Up a steep stair, no lift; the rooms show their age (July 2026). Open until midnight.',
    chef_bio: { chef_name: '長谷川清之', roles: ['Founder of the okonomiyaki business (first generation), per the official site'], origin: null, background: 'Per the official site: founded at the end of the Meiji era in Sennichimae as the Hatsuse ryokan (inn); closed during the war; in 1945 the first generation, 長谷川清之, rebuilt the burnt-out building and opened はつせ食堂, whose "Bikkuri udon" in a huge bowl was a hit; the okonomiyaki house opened later and has kept Osaka\'s food for some 70 years. The all-private-room layout keeps the inn\'s heritage, and the founder wanted visitors, couples and friends to enjoy okonomiyaki at leisure like a family meal. Featured in 旅の手帖 (May 2020) and ぴあMOOK関西 on Kansai konamon (2019) (official site).', philosophy: 'A family meal at leisure, cooking okonomiyaki yourself (official site, translated).', specialty: 'Self-cooked okonomiyaki with the "double sauce".',
      anecdotes: [
        { text: '"I will remember the advice to grill the meat and seafood first before mixing it when I return to Sapporo." — September 2026, mixed okonomiyaki for JPY 1,243.', source: R + 'B536300730/' },
        { text: '"Is it really 40 years later? … The style of cooking your own okonomiyaki is still alive and well." — October 2026, with classmates.', source: R + 'B536873260/' },
        { text: '"The restaurant is located on the second floor, and since there\'s no elevator, it was quite challenging to carry a stroller up the stairs." — July 2026, lunch soon after opening.', source: R + 'B532942055/' },
      ],
      japanese_sources_summary: '公式サイト: 大阪の味 お好み焼 千日前はつせ、明治末に千日前で「はつせ旅館」として創業、戦争で一時廃業、昭和20年に初代・長谷川清之が焼け落ちたビルを建て直し「はつせ食堂」、大きな器の「ビックリうどん」が大ヒット、その後お好み焼店、以来70年、旅館の名残りで全席個室、お好み焼も焼きそばもお客様自身で焼くスタイル、一家団欒、厳選した四種類の粉と和ダシの秘伝の生地、表面はパリっと中はふっくら、具材を軽く炒めてから生地に戻して焼く、肩ロースの豚玉、オリジナルミックス、デラックス、ウスター系と甘口特濃の「ダブルソース」、年末年始も無休、旅の手帖2020年5月号、ぴあMOOK関西、大阪市中央区難波千日前11-25 はつせビル2F。食べログ (店舗会員): 月〜金11:30〜24:00、土・日・祝11:00〜24:00 (L.O. 23:00)、予約可、カード・電子マネー・QR可、120席、個室 (2名から30名以上)、禁煙、子ども可。口コミ(2026年7月〜10月): 壁に焼き方、ミックス1,243円、ランチのミックス994円、ビール580円、部屋の電話で注文、個室では喫煙や電子タバコ可という口コミ、エレベーターなしで2階、古さが気になったという口コミも、焼きそばはスタッフが焼く、なんばグランド花月のすぐそば。',
      confidence: 'high', sources: [TB, SITE, R + 'B467779919/', R + 'B532293966/', R + 'B532585419/', R + 'B532942055/', R + 'B533464954/', R + 'B533805078/', R + 'B534362567/', R + 'B535092318/', R + 'B535131682/', R + 'B535849171/', R + 'B536257649/', R + 'B536300730/', R + 'B536873260/', R + 'B537262249/', R + 'B537309868/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'You cook it yourself with the instructions on the wall; order by the room phone (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波千日前11-25 はつせビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and official site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波千日前11番25号 (go) 2m. No other record in data within 20 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536300730/', R + 'B532293966/', R + 'B533805078/'],
    price_note: 'Prices from 2026 reviews; the official menu pages were not read.', last_checked: TODAY, items: [
      it('', '', 'Mixed okonomiyaki (cook it yourself)', '¥1,243', 'Okonomiyaki', 'no', 'no', 'September 2026 review.', 'mix_okonomiyaki'),
      it('', '', 'Lunch mixed okonomiyaki set', '¥994', 'Lunch', 'no', 'no', 'July 2026 review.', 'lunch_mix'),
      it('豚玉', '', 'Pork okonomiyaki (shoulder loin)', '', 'Okonomiyaki', 'no', 'no', 'Official site.', 'butatama'),
      it('', '', 'Beer', '¥580', 'Drinks', 'ask', 'ask', 'August 2026 review.', 'beer'),
    ] }, {
    cuisine: '個室の鉄板で自分で焼くお好み焼と焼きそば、焼き方は壁に (公式サイト、2026年の口コミ)・厳選した四種類の粉と和ダシの秘伝の生地、表面はパリっと中はふっくら、具材を軽く炒めてから生地に戻して焼く、ウスター系と甘口特濃の「ダブルソース」(公式サイト)・肩ロースの豚玉、はつせだけのオリジナルミックス、デラックス (公式サイト)・ミックス1,243円 (2026年9月)、ランチのミックス994円 (2026年7月)・モダン焼き、豚、イカ、エビ、ねぎ入り、トッピングの油かす・焼きそば (スタッフが焼く、2026年10月)、鉄板の一品、ソーセージ・飲み放題つきのコース・ビール580円 (2026年8月)',
    neighborhood: '難波千日前11-25 はつせビル 2階、なんばグランド花月のそば。なんば駅・日本橋駅から徒歩5分',
    gf_detail: '実質グルテンフリーではありません。生地は四種類の粉を和ダシと合わせたもので (公式サイト)、2種のソースをかける。グルテンフリーの選択肢の説明はない。',
    vegan_detail: 'ヴィーガンではありません。生地に和ダシを使い (公式サイト)、豚、イカ、エビが入る。',
    notes: '[お好み焼・千日前、座敷の個室で自分で焼く] なんばグランド花月のそば、明治末の「はつせ旅館」に始まり1945年に食堂として再開した家族のお好み焼店で、旅館の名残りで全席が個室の座敷。自分で焼くのが流儀で、豚、イカ、エビを炒めてから和ダシの生地に戻し、返して、ウスターと甘口特濃の2つのソースを塗る。焼き方は壁に貼ってある。ミックス (2026年9月は1,243円) か豚玉を頼み、追加は部屋の電話で。エレベーターのない急な階段の上で、部屋は年季が入っている (2026年7月)。深夜0時まで。',
  });
}

// ================================================================ IL MERCATO ANGELO
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27000935/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.anjou.co.jp/shop/mercato/';
  const H = day(['11:00', '16:00'], ['17:00', '22:00']);
  put({
    id: 'osaka_il_mercato_angelo_crysta', name: 'IL MERCATO ANGELO', category: 'OMNI',
    lat: 34.675188, lng: 135.498596, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information. Pasta and pizza are central and lunch comes with bread; lamb chops, roast beef, prosciutto and cheese are dishes without obvious wheat, but nothing is stated about their sauces.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No vegan information. The menu leans on prosciutto, cheese and meat; ask which pasta or vegetable dishes can be made without them.',
    hours_raw: 'Daily 11:00–16:00 (last order 14:30) and 17:00–22:00 (last order 21:00); closed over New Year and on Crysta Nagahori\'s closing days (Tabelog). Reservations accepted; lunch bookings are for courses only (October 2026). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), transport IC, Edy, nanaco, WAON, iD, QUICPay and many QR payments (Tabelog). 67 seats, mostly tables for two; non-smoking; wheelchair accessible; free Wi-Fi; menu in English, Chinese and Korean; one hour free at Nagahori underground parking for ¥3,000 spent (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Minamisenba 4-12, Crysta Nagahori underground mall No. 7, West Town — underground between Shinsaibashi and Yotsubashi stations',
    cuisine: 'Casual Italian with a market counter of vegetables, imported prosciutto and a 35 kg wheel of Parmigiano Reggiano (Tabelog shop text) · lunch sets: Mercato lunch with an appetiser plate, bread and a choice of pasta; Pranzo Angelo with five appetisers; a lunch course ¥1,950 (October 2026); monthly special pasta, porcini cream about +¥600 (October 2026) · pasta such as cacio e pepe, penne with water eggplant and spicy tomato, genovese · aged lamb chops, roast beef of sirloin cap, burrata, prosciutto, cheese platter · desserts with a message plate on request · wines by the glass from ¥800 (13 kinds), house wine charged by the amount drunk, Italian wines imported direct, a sommelier (Tabelog) · 90-minute free-drinks courses · a monthly all-you-can-eat prosciutto event (September 2026)',
    website: SITE, gmaps: gm('IL MERCATO ANGELO クリスタ長堀'), menu_url: SITE,
    notes: '[Italian · Crysta Nagahori, a market under the street] A bright, market-style Italian in the Crysta Nagahori underground mall, reachable from the station without going outside, with prosciutto and a whole wheel of Parmigiano on show. Lunch is the draw: a set of small appetisers and a pasta that changes monthly (¥1,950 for the lunch course in October 2026); at night order the aged lamb chops and a bottle of Italian wine. Staff will add extra cheese, write a birthday plate and, one October 2026 diner saw, play a birthday song on a small accordion. Part of the Anjou group (Alcyon, Bistro d\'Ange).',
    chef_bio: { chef_name: null, roles: ['Anjou group (anjou.co.jp); chef unnamed'], origin: null, background: 'Per the Tabelog shop text: "Mercato" means market; a showcase of fresh vegetables, European prosciutto and a whole 35 kg wheel of Parmigiano Reggiano; wines chosen by a sommelier and imported directly from Italy. An October 2026 diner notes it belongs to the same group as Sant\'Angelo and the Alcyon cake and crêpe shops.', philosophy: null, specialty: 'Monthly pasta lunch; aged lamb chops.',
      anecdotes: [
        { text: '"At the next table, a birthday celebration was taking place, and the staff played a birthday song on a small accordion" — October 2026, the JPY 1,950 lunch course.', source: R + 'B537666481/' },
        { text: '"when I mentioned that I love cheese, the friendly staff said, \'I\'ll make sure to add plenty for you!\'" — September 2026, a course meal.', source: R + 'B536053445/' },
        { text: '"The pasta changes every month, so there\'s always something new to enjoy. This month\'s special was Porcini!" — October 2026, a sixth visit.', source: R + 'B512286327/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): IL MERCATO ANGELO、イタリアン・パスタ・ピザ、大阪市中央区南船場4-12 クリスタ長堀地下街7号、四ツ橋駅のクリスタ長堀 WEST TOWN、毎日11:00〜16:00 (L.O. 14:30) と17:00〜22:00 (L.O. 21:00)、年末年始とクリスタ長堀の休みに準ずる、予約可、カード・電子マネー・QR可、67席、禁煙、車いす可、英語・中国語・韓国語のメニュー、ソムリエ、メルカートはイタリア語で市場、野菜、ヨーロッパの生ハム、35kg のパルミジャーノ・レッジャーノ、量り売りのハウスワイン、グラスワイン800円から13種、90分飲み放題のコース、熟成ラムチョップ、ローストビーフ。公式サイト anjou.co.jp。口コミ(2026年7月〜10月): Mercato ランチ、Pranzo Angelo、ランチコース1,950円 (ランチの予約はコースのみ)、月替わりのパスタ、ポルチーニは追加600円ほど、カチョ・エ・ペペ、水なすの辛いトマトのペンネ、ブッラータ、生ハム、毎月の生ハム食べ放題、チーズをたっぷり、メッセージプレート、アコーディオンで誕生日の歌、Alcyon と同じグループ。',
      confidence: 'medium', sources: [TB, SITE, R + 'B111857789/', R + 'B512286327/', R + 'B521443282/', R + 'B529092501/', R + 'B536053445/', R + 'B536123262/', R + 'B536169563/', R + 'B536538444/', R + 'B536837272/', R + 'B536886624/', R + 'B537580574/', R + 'B537662989/', R + 'B537666481/', R + 'B538239769/'] },
    cultural_comfort: { level: 'english', note: 'Menu in English, Chinese and Korean, with photos (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場4-12 クリスタ長堀地下街7号',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and group site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; GSI matched only 南船場四丁目12番 (lot), about 55 m north, so the Tabelog point in the underground mall stands. ラーメン 横綱 クリスタ長堀店 (osaka_ramen_yokozuna_crysta_nagahori, same West Town) is 19 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537666481/', R + 'B536886624/', TB],
    price_note: 'Lunch course ¥1,950 from an October 2026 review; wine by the glass from ¥800 from Tabelog; other prices not seen.', last_checked: TODAY, items: [
      it('', '', 'Lunch course (appetisers, pasta, dessert)', '¥1,950', 'Lunch', 'ask', 'no', 'October 2026 review.', 'lunch_course'),
      it('', '', 'Monthly special pasta (porcini cream)', '+¥600', 'Pasta', 'no', 'no', 'October 2026 review, as a lunch supplement.', 'porcini_pasta'),
      it('', '', 'Aged lamb chops', '', 'Meat', 'ask', 'no', 'Tabelog; October 2026 reviews.', 'lamb_chops'),
      it('', '', 'Wine by the glass', 'from ¥800', 'Drinks', 'ask', 'ask', 'Tabelog.', 'glass_wine'),
    ] }, {
    cuisine: '野菜、輸入の生ハム、35kg のパルミジャーノ・レッジャーノのホールが並ぶ市場風のカジュアルなイタリアン (食べログの店の紹介)・ランチ: 前菜の盛り合わせ、パン、選べるパスタの Mercato ランチ、前菜5種の Pranzo Angelo、ランチコース1,950円 (2026年10月)、月替わりのパスタ、ポルチーニのクリームは追加600円ほど (2026年10月)・カチョ・エ・ペペ、水なすの辛いトマトのペンネ、ジェノベーゼなど・熟成ラムチョップ、イチボのローストビーフ、ブッラータ、生ハム、チーズの盛り合わせ・希望でメッセージプレートのデザート・グラスワインは800円から13種、飲んだ分だけのハウスワイン、イタリアから直輸入のワイン、ソムリエ (食べログ)・90分飲み放題のコース・毎月の生ハム食べ放題 (2026年9月)',
    neighborhood: '南船場4-12 クリスタ長堀地下街7号、WEST TOWN。心斎橋駅と四ツ橋駅の間の地下',
    gf_detail: '予約時に要確認。グルテンの情報なし。パスタとピザが中心で、ランチにはパンがつく。ラムチョップ、ローストビーフ、生ハム、チーズは小麦が目立たないが、ソースの説明はない。',
    vegan_detail: '要確認。ヴィーガンの情報なし。生ハム、チーズ、肉が中心なので、それなしでできるパスタや野菜料理を聞いてみて。',
    notes: '[イタリアン・クリスタ長堀、地下の市場] クリスタ長堀の地下街にある明るい市場風のイタリアンで、駅から外に出ずに行け、生ハムやパルミジャーノのホールが並ぶ。目当てはランチで、小さな前菜と月替わりのパスタ (2026年10月のランチコースは1,950円)。夜は熟成ラムチョップとイタリアワインを。チーズを多めにしてくれたり、誕生日のプレートを書いてくれたり、2026年10月には小さなアコーディオンで誕生日の歌を演奏していたそう。Anjou のグループの店 (Alcyon、Bistro d\'Ange)。',
  });
}

// ================================================================ 本家 大たこ 法善寺店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27051095/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '23:00']);
  put({
    id: 'osaka_honke_otako_hozenji', name: '本家 大たこ 法善寺店 (Honke Otako Hozenji)', category: 'OMNI',
    lat: 34.667997, lng: 135.502825, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: takoyaki, okonomiyaki, negiyaki and yakisoba are wheat dishes, and kushikatsu is battered; no gluten-free option described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: octopus takoyaki, pork and tendon negiyaki, horumon yakisoba and seafood teppan dishes.',
    hours_raw: 'Daily 11:30–23:00 without a break, last order 22:00; open all year (Tabelog). Reservations accepted, recommended at weekend dinner when a queue forms; no same-day online changes; phone for 10 or more (Tabelog; September–October 2026). No service or seat charge (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), transport IC, Edy, nanaco, WAON, iD, QUICPay and PayPay (Tabelog). 70 seats over three floors: counter and tables on 1F, tables and sunken seating on 2F, a private room on 3F (for up to 18 in the shop text, 22 in the seat list); non-smoking (Tabelog; September 2026). Takoyaki also sold at the window to take away (October 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba 1-1-6, a narrow alley by Hozenji — 3 min from Namba Stn exit 14',
    cuisine: 'Konamon izakaya of the Ootako takoyaki brand, with its own sauce (Tabelog shop text) · takoyaki with big pieces of octopus, 6 to take away (October 2026) · okonomiyaki, e.g. mix, buta-tama, with a fried egg on request · negiyaki with pork and tendon, in sauce or soy (September 2026) · yakisoba, horumon yakisoba, sobameshi · kushikatsu, motsuni, dashimaki, chicken kara-age, spinach salad, seafood teppan · courses: Hozenji course for 2 or more; Dotonbori course with free drinks for 4–10 ¥6,000 (Tabelog) · beer, lemon sour, yuzu-sake highball · about ¥4,000 for two dishes and two drinks for two (September 2026)',
    website: null, gmaps: gm('本家 大たこ 法善寺店'), menu_url: null,
    notes: '[Konamon · Hozenji, the Ootako sit-down shop] The sit-down branch of Honke Otako, the Dotonbori takoyaki stand known for its queue by the Glico sign, tucked in a narrow alley by Hozenji. Upstairs are sunken tables and a private room, so you can work through the whole konamon list: takoyaki with big pieces of octopus, okonomiyaki, a pork-and-tendon negiyaki in sauce or soy, yakisoba or sobameshi, and kushikatsu. Diners in 2026 found it calmer than the Dotonbori stand and good for groups; a few found the takoyaki lukewarm or the side dishes small. Open all day, every day; book for weekend evenings.',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per the Tabelog shop text: Ootako\'s okonomiyaki and yakisoba with a unique sauce and expert knowledge of konamon, a third-floor private room for up to 18 and sunken seating on the second floor. A July 2026 diner remembers buying takoyaki for years at the Honke Ootako stand by the Glico sign in Dotonbori, with its long queues; a September 2026 diner contrasts this branch\'s atmosphere with the Dotonbori shop.', philosophy: null, specialty: 'Takoyaki with large octopus; negiyaki.',
      anecdotes: [
        { text: '"As always, the takoyaki was generously filled with large pieces of octopus" — July 2026, a return after years of buying at the Dotonbori stand.', source: R + 'B532138492/' },
        { text: '"I was surprised that the takoyaki was lukewarm when I expected it to be piping hot, but the negiyaki was served hot." — September 2026, about JPY 4,000 for two dishes and two drinks.', source: R + 'B535668244/' },
        { text: '"It was great to experience both the rich sauce and the refreshing soy sauce." — September 2026, pork and tendon negiyaki at a quiet weekday lunch.', source: R + 'B534892628/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 本家 大たこ 法善寺店、たこ焼き・お好み焼き・居酒屋、大阪市中央区難波1-1-6、なんば駅14番出口から徒歩3分、毎日11:30〜23:00 (L.O. 22:00)、通し営業、年中無休、予約可、当日のネットでの変更は不可、10名以上は電話で、サービス料・チャージなし、カード・電子マネー・PayPay 可、70席 (1階カウンター4とテーブル17、2階テーブル10と掘りごたつ17、3階テーブル22まで)、禁煙、粉もんなら大たこ、独自のソース、3階に18名までの個室、コース: 道頓堀コース (4名から、飲み放題) 6,000円、法善寺コース (2名から)。口コミ(2026年6月〜10月): タコが大きいたこ焼き、持ち帰りの6個、お好み焼き、豚とすじのネギ焼き (ソースか醤油)、焼きそば、ホルモン焼きそば、sobameshi、串カツ、もつ煮、だし巻き、kara-age、海鮮の鉄板、週末の夜は行列、たこ焼きがぬるかったという口コミも、道頓堀の店より落ち着いている。',
      confidence: 'medium', sources: [TB, R + 'B530777762/', R + 'B531048750/', R + 'B531684290/', R + 'B532138492/', R + 'B532229938/', R + 'B532280381/', R + 'B532402310/', R + 'B534892628/', R + 'B535313802/', R + 'B535668244/', R + 'B536113635/', R + 'B536303859/', R + 'B536783509/', R + 'B537974224/', R + 'B538176648/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A long à la carte list of Osaka konamon; many overseas visitors in the area (July 2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波1-1-6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波一丁目1番6号 (go) 7m. 焼肉侘び寂び 法善寺横丁店 (osaka_yakiniku_wabisabi_hozenji, 難波1-1-5 1F) is 6 m away at the next house number; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B535668244/'],
    price_note: 'Only the course price is published (Dotonbori course with free drinks ¥6,000, Tabelog); à la carte prices not seen.', last_checked: TODAY, items: [
      it('', '', 'Takoyaki (large octopus)', '', 'Takoyaki', 'no', 'no', '2026 reviews.', 'takoyaki'),
      it('', '', 'Negiyaki with pork and tendon (sauce or soy)', '', 'Teppan', 'no', 'no', 'September 2026 review.', 'negiyaki'),
      it('', '', 'Dotonbori course with free drinks (4–10 people)', '¥6,000', 'Course', 'no', 'no', 'Tabelog.', 'dotonbori_course'),
      it('', '', 'Sobameshi', '', 'Teppan', 'no', 'no', 'July and October 2026 reviews.', 'sobameshi'),
    ] }, {
    cuisine: '大たこの独自のソースの粉もん居酒屋 (食べログの店の紹介)・タコが大きいたこ焼き、持ち帰りは6個 (2026年10月)・お好み焼き、たとえばミックス、豚玉、頼めば目玉焼きをのせて・豚とすじのネギ焼き、ソースか醤油で (2026年9月)・焼きそば、ホルモン焼きそば、sobameshi・串カツ、もつ煮、だし巻き、鶏の kara-age、ほうれん草のサラダ、海鮮の鉄板焼き・コース: 2名からの法善寺コース、4〜10名の飲み放題つき道頓堀コース6,000円 (食べログ)・ビール、レモンサワー、柚子酒のハイボール・2人で2品と2杯で4,000円ほど (2026年9月)',
    neighborhood: '難波1-1-6、法善寺横の細い路地。なんば駅14番出口から徒歩3分',
    gf_detail: '実質グルテンフリーではありません。たこ焼き、お好み焼き、ネギ焼き、焼きそばは小麦の料理で、串カツは衣をつけて揚げる。グルテンフリーの選択肢の説明はない。',
    vegan_detail: 'ヴィーガンではありません。タコのたこ焼き、豚とすじのネギ焼き、ホルモン焼きそば、魚介の鉄板焼き。',
    notes: '[粉もん・法善寺、大たこの座れる店] Glico の看板のそばの行列で知られる道頓堀のたこ焼きの本家大たこの、法善寺横の細い路地にある座れる店。上の階には掘りごたつや個室があり、粉もんをひと通り。タコが大きいたこ焼き、お好み焼き、ソースか醤油の豚とすじのネギ焼き、焼きそばかsobameshi、それに串カツ。2026年の口コミでは道頓堀の店より落ち着いていてグループ向き。たこ焼きがぬるい、一品が小さめという声も少し。毎日通しで営業。週末の夜は予約を。',
  });
}

// ================================================================ ガフーリオ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27004243/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:15'], ['18:00', '22:15']);
  put({
    id: 'osaka_gaffurio_sennichimae', name: 'ガフーリオ (Gaffurio)', category: 'MOM_AND_POP',
    lat: 34.666045, lng: 135.505439, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information. Pasta is the heart of the lunch courses, with bread refills; the fish and meat mains (yellowtail, flatfish, duck, chicken) are dishes without obvious wheat, but nothing is stated about their sauces.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No vegan information. Courses run on fish, meat, cheese and cream; there is a mushroom oil pasta and seasonal vegetables, so ask what can be made without animal products.',
    hours_raw: 'Daily 11:30–14:15 and 18:00–22:15; can open from 16:30 by request; closed irregularly (Tabelog). Reservations accepted, by phone or online; same-day bookings were full on a September 2026 weekday, but a walk-in before noon found a table; a booking lapses at 15 minutes late without a call; avoid strong perfume (Tabelog; 2026 reviews). No cover charge; cards (VISA, Master, JCB, AMEX), e-money, PayPay, d払い, au PAY (Tabelog). 26 seats: 3 at the counter and tables, a private room for four (Tabelog). A loyalty card for every 10 visits (October 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sennichimae 2-3-1, セブンマンション 103, a side street south of Sennichimae Chuo shopping street — 2 min from Nippombashi Stn exit 5',
    cuisine: 'Northern Italian by a chef recognised by the Milanese chef Aldo Russo, with Italian ingredients and over 50 Italian wines, about 50 daily specials (Tabelog shop text) · lunch courses: A (one dish from the lunch menu), B ¥1,800 with four appetisers or pasta, a fish or meat main, two desserts, salad and a drink (October 2026), C with a pasta and a main · pasta such as oil pasta of spear squid and mushrooms, beef-and-pork mince oil pasta, a mushroom oil pasta · mains such as pan-seared wild yellowtail, flatfish, stuffed spear squid, duck, grilled Okutamba chicken, Nagasaki pork (2026) · bread and coffee refills at lunch · dinner à la carte with an appetiser assortment · an anniversary festival each year; 26th in 2026',
    website: null, gmaps: gm('ガフーリオ 千日前'), menu_url: null,
    notes: '[Italian · Sennichimae, a 26-year trattoria near Nippombashi] A small northern Italian trattoria on the ground floor of an apartment block off Sennichimae, marking 26 years in 2026, with a following of regulars who fill loyalty cards. The lunch courses are the draw: the B course (¥1,800 in October 2026) brings appetisers or a pasta, a fish or meat main such as rare-seared wild yellowtail or crisp-skinned chicken, two desserts and coffee. Dinner is a long list of daily specials and over 50 Italian wines. The owner, Shibuya by name, keeps an eye on regulars\' orders (September 2026). Book ahead for lunch; no strong perfume.',
    chef_bio: { chef_name: null, roles: ['Owner: "Mr. Shibuya" (September 2026 review)', 'Chef recognised by the Milanese chef Aldo Russo (Tabelog shop text); not named'], origin: null, background: 'Per the Tabelog shop text: northern Italian cuisine by a chef recognised by Aldo Russo of Milan, simple flavours, over 50 Italian wines and Italian ingredients. A September 2026 regular thanks "the owner, Mr. Shibuya" for making sure appetisers did not overlap at the annual anniversary festival, the 26th in 2026; a diner that month saw the 26th anniversary marked outside.', philosophy: null, specialty: 'Lunch courses with pasta and a main; northern Italian daily specials.',
      anecdotes: [
        { text: '"Thanks to the owner, Mr. Shibuya, for … thoughtful communication to ensure that the appetizers didn\'t overlap." — September 2026, the 26th-anniversary festival.', source: R + 'B493285570/' },
        { text: '"I\'ve accumulated points on the loyalty card after visiting more than 30 times" — October 2026, the B course with pan-seared wild yellowtail.', source: R + 'B460152511/' },
        { text: '"It includes a choice of 4 appetizers or pasta, a main dish of either fish or meat, 2 desserts, salad, and a drink" — October 2026, the B course lunch for JPY 1,800.', source: R + 'B537614662/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): ガフーリオ (Gaffurio)、イタリアン・バル・パスタ、大阪市中央区千日前2-3-1 セブンマンション 103、日本橋駅5番出口から徒歩2分、毎日11:30〜14:15と18:00〜22:15、16:30からの営業も相談可、不定休、予約可、15分遅れると自動キャンセル、強い香水は控えて、チャージなし、カード・電子マネー・QR可、26席 (カウンター3、テーブル23)、4名の個室、ミラノの Aldo Russo シェフが認めた料理人の北イタリア料理、50種以上のイタリアワイン、イタリアの食材、日替わり50種。口コミ(2025年5月〜2026年10月): ランチの A・B・C コース、B コース1,800円 (前菜4種かパスタ、魚か肉のメイン、デザート2種、サラダ、飲み物)、ヤリイカときのこのオイルパスタ、天然ブリのソテー、ヒラメ、ヤリイカの詰め物、鴨、Okutamba の鶏のグリル、Nagasaki の豚、パンとコーヒーのおかわり、ポイントカード、毎年の周年祭は2026年で26周年、オーナーの Shibuya さん、当日予約は満席でも昼前なら入れたことも。',
      confidence: 'medium', sources: [TB, R + 'B27382822/', R + 'B460152511/', R + 'B470925079/', R + 'B493285570/', R + 'B509297030/', R + 'B523569296/', R + 'B533919242/', R + 'B534110510/', R + 'B535841381/', R + 'B536724551/', R + 'B537614662/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Lunch courses chosen from a short list; book by phone or online (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区千日前2-3-1 セブンマンション 103',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.666117, 135.505439); おいしい酒と料理 なかよし 日本橋店 (osaka_oishii_sake_nakayoshi_nipponbashi, address_ja "千日前2-3-1 セブンビル1F") shares the lot and is pinned 5 m from the Tabelog point, so this pin is offset ~8 m south to keep the two apart; GSI 大阪府大阪市中央区千日前二丁目3番1号 (go) 8m from the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537614662/'],
    price_note: 'Only the B lunch course price seen (¥1,800, October 2026); dinner prices not seen.', last_checked: TODAY, items: [
      it('', '', 'Lunch course B: four appetisers or pasta, fish or meat main, two desserts, salad, drink', '¥1,800', 'Lunch', 'ask', 'no', 'October 2026 review.', 'lunch_b'),
      it('', '', 'Oil pasta of spear squid and mushrooms', '', 'Pasta', 'no', 'no', 'October 2026 review.', 'squid_mushroom_pasta'),
      it('', '', 'Pan-seared wild yellowtail', '', 'Main', 'ask', 'no', 'October 2026 review.', 'wild_yellowtail'),
    ] }, {
    cuisine: 'ミラノの Aldo Russo シェフが認めた料理人の北イタリア料理、イタリアの食材、50種以上のイタリアワイン、日替わり50種ほど (食べログの店の紹介)・ランチコース: A (ランチメニューから1品)、B 1,800円 (前菜4種かパスタ、魚か肉のメイン、デザート2種、サラダ、飲み物、2026年10月)、C (パスタとメイン)・パスタはヤリイカときのこのオイルパスタ、牛と豚のミンチのオイルパスタ、いろいろなきのこのオイルパスタなど・メインは天然ブリのソテー、ヒラメ、ヤリイカの詰め物、鴨、Okutamba の鶏のグリル、Nagasaki の豚など (2026年)・ランチはパンとコーヒーのおかわり可・夜は前菜の盛り合わせとアラカルト・毎年の周年祭、2026年は26周年',
    neighborhood: '千日前2-3-1 セブンマンション 103、千日前の商店街の南の脇道。日本橋駅5番出口から徒歩2分',
    gf_detail: '予約時に要確認。グルテンの情報なし。ランチコースはパスタが中心で、パンのおかわりもある。ブリ、ヒラメ、鴨、鶏のメインは小麦が目立たないが、ソースの説明はない。',
    vegan_detail: '要確認。ヴィーガンの情報なし。コースは魚、肉、チーズ、クリームが中心。きのこのオイルパスタや季節の野菜もあるので、動物性のものなしでできるか聞いてみて。',
    notes: '[イタリアン・千日前、日本橋近くの26年のトラットリア] 千日前の脇道、マンションの1階にある小さな北イタリアのトラットリアで、2026年に26周年。ポイントカードを何枚もためる常連が多い。目当てはランチコースで、B コース (2026年10月は1,800円) は前菜かパスタ、天然ブリのレアなソテーや皮がパリッとした鶏などの魚か肉のメイン、デザート2種とコーヒー。夜は日替わりの多い料理と50種以上のイタリアワイン。オーナーの Shibuya さんは常連の注文にも気を配る (2026年9月)。ランチは予約を。強い香水は控えて。',
  });
}

save();
