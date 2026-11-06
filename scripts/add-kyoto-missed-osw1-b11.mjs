// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 11.
//   + かね正 Kane Sho (old eel house in a Gion back alley, home of the kinshi-don; founded 1866 per reviews)
//   + ムムリク mumurik (small Italian bar and lunch spot off Nishiki Market; since 2011)
//   + オステリア・イル・カント・デル・マッジョ OSTERIA IL CANTO DEL MAGGIO (Tuscan osteria, bistecca by the kilo; since 2011)
//   + 萬亀樓 Mankame Rou (yusoku-ryori ryotei in Nishijin, founded 1722; Ikama-ryu shikibocho)
//   Picked on 2026-11-05: the first two with id mod 6 = 2 from `queue.mjs kyoto-missed next core 200` (26000252, 26020292)
//   and from `next notable 200` (26017856, 26001536). None is in data/kyoto.json: grep by name (かね正/Kane Sho, ムムリク/
//   mumurik, マッジョ/Maggio, 萬亀樓/萬亀楼/Mankame) and address (常盤町155, 梅屋町488, 菊屋町512, 猪熊通出水上ル/蛭子町387)
//   found none.
//   Nearest existing pins: kyoto_ristorante_dei_cacciatori 16 m from Kane Sho (address_ja "…常盤町158-2", a neighbouring lot);
//   kyoto_yakiniku_yamachan 54 m from mumurik; mp_okuniya 78 m from Canto del Maggio; vm_soshoku_cafe_ren_horikaw 98 m from
//   Mankame Rou. None within 3 m.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-11');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ かね正
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26000252/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:00'], ['17:30', '21:00']);
  put({
    id: 'kyoto_kanesho_gion', name: 'かね正 (Kane Sho)', category: 'OMNI',
    lat: 35.004615, lng: 135.772754, cuisine_type: 'unagi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Grilled eel with a soy-based tare over rice, liver in sauce, rolled omelette and clear soup; no gluten information (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an eel restaurant; the rice bowls also carry egg (2025–2026 reviews).',
    hours_raw: '11:30–14:00 and 17:30–21:00; closed Thursday and Sunday; hours may change (Tabelog). Reservations for dinner only (Tabelog); a wait at weekend lunches (July 2026). Lunch serves the rice dishes only; omakase and side dishes such as liver and the eel omelette in the evening (January, October 2026). Eel is grilled to order, about 20 minutes (September 2026). 14 seats (6 counter, 8 table); non-smoking; cash only; no service charge (Tabelog). At the end of a back alley off Yamatooji north of Shijo — the entrance is hard to find; 3 min from Gion-Shijo Stn (Tabelog; 2026 reviews).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'A back alley off Yamatooji, north of Shijo, Gion — 3 min from Gion-Shijo Stn',
    cuisine: 'Old Gion eel house, grilling in the Kansai style without steaming: crisp skin, soft flesh (2026 reviews) · kinshi-don, eel under a heap of shredded omelette on sesame rice, said to have started here, ¥2,700 (September 2026) · unaju · mamushi-don · eel ochazuke with real green tea · evening omakase: simmered liver, shirayaki, dashimaki, eel omelette (January 2026) · liver soup · Yebisu beer; sake such as Gekkeikan and Matsuno Midori (2025–2026 reviews)',
    website: null, gmaps: gm('かね正 祇園 うなぎ'), menu_url: null,
    notes: '[Unagi · Gion, the kinshi-don\'s home in a back alley] A small eel house at the end of an alley off Yamatooji, said by reviewers to date from 1866 and to have created the kinshi-don: eel tucked under a mound of fine shredded omelette on rice mixed with sesame and sauce (¥2,700, September 2026). The eel is grilled Kansai-style without steaming, to order, so allow about 20 minutes. Unaju and an eel ochazuke with green tea are the other classics; liver and the eel omelette are evening-only. Run by two cooks; cash only; closed Thursday and Sunday; book for dinner.',
    chef_bio: { chef_name: null, roles: ['Two cooks run the shop (September 2026 reviews); unnamed'], origin: null,
      background: 'Reviews from January–August 2026 give the founding as 1866 (Keio era) and call it the birthplace of the eel kinshi-don; two 2026 reviewers mention a Michelin Bib Gourmand. A January 2026 reviewer says the eel is mainly domestic, from Mikawa.',
      philosophy: null, specialty: 'Kinshi-don; Kansai-style unaju.',
      anecdotes: [
        { text: 'A September 2026 diner, back after 12 years, could not have grilled liver because there was not enough eel that night, and was talked out of ordering both an omelette and a kinshi-don ("too much egg").', source: R + 'B18525859/' },
        { text: '"The teapot contained actual tea, not dashi broth." — the eel ochazuke, July 2026.', source: R + 'B532712383/' },
        { text: 'An October 2026 lunch diner, frustrated by reheated eel elsewhere, found the freshly grilled skin still crisp at the last bite.', source: R + 'B536692900/' },
      ],
      japanese_sources_summary: '食べログ: かね正、うなぎ、東山区大和大路通四条上ル2丁目常盤町155-2、祇園四条駅から徒歩3分、11:30〜14:00・17:30〜21:00、木曜・日曜休み、予約は夜のみ、14席 (カウンター6、テーブル8)、禁煙、カード・電子マネー・QR 不可、サービス料・チャージなし。口コミ (2025〜2026年、英語): 1866年 (Keio) 創業、きんし丼発祥の店、ミシュランのビブグルマン、蒸さずに焼く関西風、きんし丼2,700円、うな重、まむし丼、お茶漬け (本物のお茶)、夜のおまかせ (肝煮、白焼き、だし巻き、う巻き)、肝吸い、二人で営む、入口がわかりにくい。',
      confidence: 'medium', sources: [TB, R + 'B18525859/', R + 'B44048896/', R + 'B521667067/', R + 'B532193819/', R + 'B532712383/', R + 'B534448457/', R + 'B535416618/', R + 'B536692900/', R + 'B536745196/', R + 'B537597880/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book for dinner; grilled to order (about 20 minutes); cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区大和大路通四条上ル2丁目常盤町155-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004615, 135.772754); cross-checked: GSI 京都府京都市東山区常盤町155番地 (lot) 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536745196/'],
    price_note: 'No menu read; one price from a September 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Kinshi-don (eel and shredded omelette on rice, with pickles and clear soup)', '¥2,700', 'Eel', 'ask', 'no', 'September 2026.', 'kinshi_don'),
      it('', '', 'Unaju', '', 'Eel', 'ask', 'no', '2026 reviews.', 'unaju'),
      it('', '', 'Eel ochazuke', '', 'Eel', 'ask', 'no', 'July 2026.', 'una_chazuke'),
    ] }, {
    cuisine: '蒸さずに焼く関西風で、皮はぱりっと身はふっくらの祇園の老舗のうなぎ屋 (2026年の口コミ)・きんし丼: 胡麻を混ぜたご飯にうなぎ、その上にたっぷりの錦糸玉子、この店が発祥とされる、2,700円 (2026年9月)・うな重・まむし丼・本物の緑茶をかけるうなぎ茶漬け・夜のおまかせ: 肝の煮物、白焼き、だし巻き、う巻き (2026年1月)・肝吸い・エビスビール、Gekkeikan や Matsuno Midori などの日本酒 (2025〜2026年の口コミ)',
    neighborhood: '祇園、四条の北の大和大路から入る路地。祇園四条駅から徒歩3分',
    gf_detail: '要確認。醤油ベースのたれで焼いたうなぎのご飯、肝のたれ煮、だし巻き、吸い物。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。うなぎの店で、丼には卵ものる (2025〜2026年の口コミ)。',
    notes: '[うなぎ・祇園、路地の奥のきんし丼の店] 大和大路から入った路地の突き当たりの小さなうなぎ屋。口コミによれば1866年創業で、きんし丼の発祥の店。胡麻とたれを混ぜたご飯にうなぎをのせ、細い錦糸玉子をこんもりと (2026年9月に2,700円)。うなぎは蒸さずに関西風で注文ごとに焼くので約20分。ほかにうな重と緑茶のうなぎ茶漬け、肝やう巻きは夜のみ。料理人2人で営む。現金のみ、木曜・日曜休み、夜は予約を。',
  });
}

// ================================================================ ムムリク
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26020292/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '14:30'], ['17:00', '22:00']); const HL = day(['12:00', '14:30'], ['17:00', '22:30']);
  put({
    id: 'kyoto_mumurik', name: 'ムムリク (mumurik)', category: 'OMNI',
    lat: 35.005693, lng: 135.765783, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Pasta and bread alongside carpaccio, grilled meats, ajillo and vegetable plates; no gluten information (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Vegetable dishes appear (sweet-potato fries, mushroom salad, white asparagus), but sauces use egg, butter and cheese and no vegan dish is named (2026 reviews).',
    hours_raw: 'Lunch 12:00–14:30 daily except Tuesday, and no lunch on the 1st, 3rd and 5th Wednesdays; dinner 17:00–22:00 (Friday and Saturday to 22:30), last food order 21:30; closed Tuesday (Tabelog). At dinner at least one drink and one food item each, and no pasta-only orders — come at lunch for pasta alone (Tabelog). Reservations online or by phone; weekends book out (Tabelog; September 2026). Lunch sets A and B, with appetizers, dessert and a drink in B (May, September 2026). 14 seats (8 table, 6 counter); non-smoking; cards and PayPay (Tabelog). Off Nishiki Market on Fuyacho south of Takoyakushi, 5 min from Kawaramachi Stn (Tabelog; May 2026). Opened 5 December 2011 (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: HL, 5: HL, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Fuyacho south of Takoyakushi, by Nishiki Market — 5 min from Kawaramachi Stn',
    cuisine: 'Small Italian bar with a long, tempting menu and a strong wine list (2026 reviews) · appetizer platter, liver pâté, prosciutto, figs with butter, mascarpone and honey, La France pear with blue cheese · Naruto-kintoki sweet-potato fries, yuri-ne (lily bulb), white asparagus with egg-lemon sauce, baked vegetables with blue cheese, mushroom salad, duck and eggplant salad · sea bream carpaccio, oyster and mushroom carpaccio, firefly squid, ajillo · balsamic-braised pork spare ribs, beef skirt steak with mashed potato · pastas such as tomato with mascarpone and bacon on flat noodles · crêpes · lunch set B with appetizers, dessert and a drink (+¥650 on set A, May 2026)',
    website: null, gmaps: gm('mumurik 京都'), menu_url: null,
    notes: '[Italian · Nishiki, a small wine bar with a big menu] A fourteen-seat Italian on Fuyacho, steps from Nishiki Market, calm and stylish, with a menu so long it is hard to choose: figs with mascarpone and honey, Naruto-kintoki fries, lily bulb, white asparagus with egg-lemon sauce, balsamic spare ribs, carpaccio, then pasta to finish. Staff suggest wines to your taste. At night order at least a drink and a dish — pasta-only diners are asked to come at lunch, when sets with appetizers and dessert are good value. Weekends book out. Closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed; Tabelog lists a corporate invoice number)'], origin: null,
      background: 'Tabelog gives the opening as 5 December 2011. A July 2026 reviewer has been coming on every Kyoto trip for nearly eight years.',
      philosophy: 'Per Tabelog: the shop welcomes guests who come to enjoy both food and drink, and asks pasta-only diners to come at lunch because seats are few.',
      specialty: 'Antipasti; balsamic spare ribs; lily bulb.',
      anecdotes: [
        { text: 'A May 2026 group found the tables booked and the counter full of visitors from abroad, saw several walk-in groups turned away, and was briefly served a neighbour\'s salad.', source: R + 'B528220134/' },
        { text: 'A January 2026 diner described the wines wanted and was recommended excellent ones.', source: R + 'B524223492/' },
        { text: 'A July 2026 regular of nearly eight years recommends the lily bulb above all and likes eating alone early in the evening.', source: R + 'B533037771/' },
      ],
      japanese_sources_summary: '食べログ: ムムリク (mumurik)、イタリアン・バル、中京区麩屋町蛸薬師下ル梅屋町488 1F、阪急河原町駅から徒歩5分、昼12:00〜14:30、夜17:00〜22:00 (金土22:30まで、L.O. 料理21:30)、火曜休み、第1・3・5水曜はランチ休み、予約可、夜は1ドリンク1フード以上でパスタのみは不可、14席 (テーブル8、カウンター6)、禁煙、カード・PayPay 可、2011年12月5日オープン。口コミ (2026年、英語): 錦市場のそば、前菜の盛り合わせ、レバーパテ、生ハム、いちじくとマスカルポーネ、Naruto-kintoki のフライ、百合根、ホワイトアスパラガス、スペアリブのバルサミコ煮、鯛のカルパッチョ、アヒージョ、パスタ、ランチの A と B のセット、ワインが豊富。',
      confidence: 'medium', sources: [TB, R + 'B524109134/', R + 'B524223492/', R + 'B525904473/', R + 'B527723507/', R + 'B528220134/', R + 'B528998129/', R + 'B533037771/', R + 'B536104291/', R + 'B537703501/', R + 'B538407899/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book for dinner; one drink and one dish each at night; cards and PayPay.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区麩屋町蛸薬師下ル梅屋町488 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.005693, 135.765783); cross-checked: GSI 京都府京都市中京区梅屋町488番地 (lot) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B527723507/'],
    price_note: 'No menu read; the only price is the lunch set B upgrade from a May 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Lunch set B upgrade (appetizers, dessert, drink)', '+¥650', 'Lunch', 'ask', 'ask', 'May 2026.', 'lunch_b'),
      it('', '', 'Balsamic-braised pork spare ribs', '', 'Mains', 'ask', 'no', 'January, September 2026.', 'spare_ribs'),
      it('', '', 'Figs with butter, mascarpone and honey', '', 'Antipasti', 'ask', 'no', 'April 2026.', 'fig_mascarpone'),
    ] }, {
    cuisine: '迷うほどメニューが多く、ワインも充実した小さなイタリアンのバル (2026年の口コミ)・前菜の盛り合わせ、レバーパテ、生ハム、いちじくとバターとマスカルポーネとはちみつ、ラ・フランスとブルーチーズ・Naruto-kintoki のフライ、百合根、卵とレモンのソースのホワイトアスパラガス、野菜のブルーチーズ焼き、きのこのサラダ、鴨と茄子のサラダ・鯛のカルパッチョ、牡蠣ときのこのカルパッチョ、ホタルイカ、アヒージョ・豚スペアリブのバルサミコ煮、牛ハラミのステーキとマッシュポテト・平打ち麺のトマトとマスカルポーネとベーコンなどのパスタ・クレープ・ランチの B セット (A に650円で前菜、デザート、ドリンク、2026年5月)',
    neighborhood: '錦市場のそば、蛸薬師の南の麩屋町。河原町駅から徒歩5分',
    gf_detail: '要確認。パスタやパンのほか、カルパッチョ、グリルした肉、アヒージョ、野菜の皿もある。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: '要確認。野菜の料理 (Naruto-kintoki のフライ、きのこのサラダ、ホワイトアスパラガス) はあるが、ソースに卵、バター、チーズを使い、ヴィーガンの料理名は出てこない (2026年の口コミ)。',
    notes: '[イタリアン・錦、メニューの多い小さなワインバル] 錦市場からすぐの麩屋町にある14席の落ち着いたおしゃれなイタリアン。いちじくとマスカルポーネとはちみつ、Naruto-kintoki のフライ、百合根、卵とレモンのソースのホワイトアスパラガス、スペアリブのバルサミコ煮、カルパッチョと選びきれないほどで、締めはパスタ。ワインは好みを伝えれば選んでくれる。夜は1ドリンク1フード以上、パスタだけならランチへ。前菜とデザート付きのランチのセットがお得。週末は予約で埋まる。火曜休み。',
  });
}

// ================================================================ オステリア・イル・カント・デル・マッジョ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26017856/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '22:00']);
  put({
    id: 'kyoto_osteria_il_canto_del_maggio', name: 'オステリア・イル・カント・デル・マッジョ (OSTERIA IL CANTO DEL MAGGIO)', category: 'OMNI',
    lat: 35.005905, lng: 135.763226, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tuscan bistecca and grilled meats sit beside crostini, bread and pasta such as pappardelle; no gluten information (2024–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Minestrone and white beans appear, but the menu centres on beef, boar and duck, and no vegan dish is named (2024–2026 reviews).',
    hours_raw: '18:00–22:00; closed Wednesday and Thursday; hours may change (Tabelog). Reservations needed (July 2025); some nights are reservations only (December 2025). Bread and water are charged; still or sparkling (May 2026). 14 seats at four tables; non-smoking; JCB, AMEX and Diners only (Tabelog). Few non-alcoholic choices (May 2026). On Sakaimachi south of Takoyakushi, 7 min from Karasuma or Shijo Stn (Tabelog). Opened 27 April 2011 (Tabelog).',
    hours: { 0: H, 1: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sakaimachi south of Takoyakushi — 7 min from Karasuma Stn',
    cuisine: 'Tuscan osteria cooking simply in the home style (2024–2026 reviews) · bistecca alla fiorentina, from 1 kg on the bone or 500 g off it, cooked rare from lean beef — one diner was offered 800 g (July 2025) · beef fillet from 150 g (June 2026) · crostini, salsiccia bruschetta, tuna and white bean salad, minestrone · pasta: ragù spaghetti, wild boar pappardelle, peach and porcini pasta, bamboo shoot pasta · peposo (braised beef shin), hand-cut beef hamburg · apple tart and other desserts · Tuscan wines, e.g. Brunello di Montalcino, Chianti Classico (2024–2026 reviews)',
    website: null, gmaps: gm('OSTERIA IL CANTO DEL MAGGIO 京都'), menu_url: null,
    notes: '[Italian · Sakaimachi, a Tuscan osteria for bistecca] A small four-table osteria south of Takoyakushi that cooks Tuscany without fuss: crostini, minestrone, wild-boar pappardelle, peposo and, above all, the bistecca alla fiorentina, lean and rare, sold from 500 g off the bone or 1 kg on it — bring friends, though the kitchen has cut smaller. Classic LPs line the room and the chef will put one on. Bread and water are charged; wine-led, with few soft drinks. Book ahead; dinner only, closed Wednesday and Thursday.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed in the sources)'], origin: null,
      background: 'Tabelog gives the opening as 27 April 2011; a June 2026 reviewer calls it about 15 years old. Tabelog Italian WEST "Tabelog 100" 2021.',
      philosophy: null, specialty: 'Bistecca alla fiorentina; wild boar pappardelle.',
      anecdotes: [
        { text: 'An October 2024 diner talked music with the chef among shelves of classic LPs, and the chef played the record requested.', source: R + 'B493279447/' },
        { text: 'A July 2025 diner who could not manage the listed 1 kg was offered a smaller bistecca and finished 800 g with a Brunello.', source: R + 'B512570844/' },
        { text: 'A May 2026 diner noted that bread and water are charged and that the only alcohol-free choice was non-alcoholic beer.', source: R + 'B527859954/' },
      ],
      japanese_sources_summary: '食べログ: オステリア・イル・カント・デル・マッジョ、イタリアン、中京区堺町通蛸薬師下ル菊屋町512-2、阪急烏丸駅・地下鉄四条駅から徒歩約7分、月火金土日 18:00〜22:00、水木休み、予約可、14席 (2人テーブル1、4人テーブル3)、禁煙、カード (JCB・AMEX・Diners)、ワインにこだわり、2011年4月27日オープン、イタリアン WEST 百名店 2021。口コミ (2024〜2026年、英語): トスカーナ料理、ビステッカ (骨付き1kg、骨なし500gから)、牛フィレ150gから、クロスティーニ、ミネストローネ、猪のパッパルデッレ、ペポーゾ、りんごのタルト、パンと水は有料、クラシックのレコード。',
      confidence: 'medium', sources: [TB, R + 'B493279447/', R + 'B509865421/', R + 'B512570844/', R + 'B514423591/', R + 'B519427613/', R + 'B523305019/', R + 'B527859954/', R + 'B530278623/', R + 'B532413025/', R + 'B533712718/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; bread and water charged; cards JCB, AMEX and Diners only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区堺町通蛸薬師下ル菊屋町512-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB} (35.005905, 135.763226); cross-checked: GSI 京都府京都市中京区菊屋町512番地 (lot) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B512570844/', R + 'B530278623/'],
    price_note: 'No prices read; sizes from July 2025 and June 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Bistecca alla fiorentina (1 kg on the bone, or 500 g off it)', '', 'Meat', 'ask', 'no', 'June 2026.', 'bistecca'),
      it('', '', 'Beef fillet, from 150 g', '', 'Meat', 'ask', 'no', 'June 2026.', 'filetto'),
      it('', '', 'Wild boar pappardelle', '', 'Pasta', 'no', 'no', 'January 2026.', 'cinghiale_pappardelle'),
    ] }, {
    cuisine: '家庭風に飾らず作るトスカーナのオステリア (2024〜2026年の口コミ)・ビステッカ・アッラ・フィオレンティーナ: 骨付き1kgか骨なし500gから、赤身をレアで。800gにしてくれたことも (2025年7月)・牛フィレは150gから (2026年6月)・クロスティーニ、サルシッチャのブルスケッタ、ツナと白いんげん豆のサラダ、ミネストローネ・パスタ: ラグーのスパゲッティ、猪のパッパルデッレ、桃とポルチーニのパスタ、筍のパスタ・ペポーゾ (牛すね肉の煮込み)、手切りの牛のハンバーグ・りんごのタルトなどのデザート・トスカーナのワイン、たとえば Brunello di Montalcino、Chianti Classico (2024〜2026年の口コミ)',
    neighborhood: '蛸薬師の南の堺町通。烏丸駅から徒歩7分',
    gf_detail: '要確認。トスカーナのビステッカやグリルした肉のほか、クロスティーニ、パン、パッパルデッレなどのパスタ。グルテンの情報はない (2024〜2026年の口コミ)。',
    vegan_detail: '要確認。ミネストローネや白いんげん豆もあるが、牛、猪、鴨が中心で、ヴィーガンの料理名は出てこない (2024〜2026年の口コミ)。',
    notes: '[イタリアン・堺町、ビステッカのトスカーナのオステリア] 蛸薬師の南、テーブル4つの小さなオステリア。飾らないトスカーナ料理で、クロスティーニ、ミネストローネ、猪のパッパルデッレ、ペポーゾ、そしてなによりビステッカ・アッラ・フィオレンティーナ。赤身をレアに焼き、骨なし500g、骨付き1kgから。人数をそろえて行くのがよいが、少なめにしてくれたことも。クラシックのレコードが並び、シェフがかけてくれる。パンと水は有料、ワイン中心でソフトドリンクは少ない。要予約、夜のみ、水木休み。',
  });
}

// ================================================================ 萬亀樓
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26001536/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.mankamerou.com/';
  const H = day(['12:00', '22:00']);
  put({
    id: 'kyoto_mankamerou', name: '萬亀樓 (Mankame Rou)', category: 'OMNI',
    lat: 35.022136, lng: 135.750529, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kyoto kaiseki with soy- and miso-based seasonings, fu, udon or somen and sweets; no gluten information (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the courses run on dashi and fish, with eel, crab and beef (2025–2026 reviews).',
    hours_raw: 'Tabelog: 12:00–22:00 daily, irregular closures. The official site gives closing days as every Wednesday and the 1st and 4th Tuesdays (may change with bookings), and closes 26 December–5 January. Reservations taken, also online through Pocket Concierge; the phone can be hard to reach during service (Tabelog). About 20% is added for service and taxes (Tabelog). 60 seats in private tatami rooms for 2–6 and larger rooms, with a garden (Tabelog; 2026 reviews). Cards, e-money and QR payments (Tabelog). Parking for 5 cars behind the building (Tabelog; official site). Inokuma-dori north of Demizu in Nishijin: 3 min from the Horikawa-Shimochojamachi bus stop, about 20 min on foot from Nijojo-mae or Marutamachi Stn (official site).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Inokuma-dori north of Demizu, Nishijin — 3 min from the Horikawa-Shimochojamachi bus stop',
    cuisine: 'Yusoku-ryori (court cuisine) and Kyoto kaiseki in private tatami rooms (official site; 2025–2026 reviews) · seasonal courses: e.g. sesame tofu, hamo and green-plum soup, sashimi, hassun, ayu grilled live in the room, shiso udon, Kamo eggplant and scallops with miso, sea-bream chazuke, fruit, wagashi and matcha (June 2026) · winter: crab chawanmushi, sun-and-moon hassun on gold and silver plates, grilled black cod in saikyo miso, house karasumi, buri daikon (January 2026) · spring: sweet shrimp and scallops dressed with egg yolk and white miso, clear soup with sesame tofu, steamed sushi, bamboo shoots with Ise lobster (March 2026) · kago bento (October 2026) · Ikama-ryu shikibocho, a ceremonial knife performance, for some events (July 2026)',
    website: SITE, gmaps: gm('萬亀楼 京都'), menu_url: null,
    notes: '[Kaiseki · Nishijin, a 300-year-old ryotei of court cuisine] A ryotei on Inokuma-dori in Nishijin that began in 1722 as a sake brewery, 萬屋, and later became the restaurant 萬亀楼; it formally carries on the Imperial Court\'s Ikama-ryu ceremonial knife school and yusoku-ryori, and the present head is the tenth generation. Meals are served in private tatami rooms over a garden: seasonal courses with hamo and live-grilled ayu in summer, crab and karasumi in winter, and a kago bento at lunch. Courses run about ¥30,000–40,000 a head with about 20% added; at events there may be shikibocho and maiko. Book ahead.',
    chef_bio: { chef_name: null, roles: ['The tenth-generation head of the house (official site; not named)', 'Proprietress (March 2026 review)'], origin: null,
      background: 'Per the official site: founded in Kyoho 7 (1722) as the sake brewery 萬屋 in a corner of Kyoto\'s Nishijin, later renamed 萬亀楼 as a restaurant; it formally carries on the Ikama-ryu shikibocho and yusoku-ryori connected with the Imperial Palace; the present head is the tenth generation; the house values sincerity, wisdom and humility (「堅実・賢明・謙虚」). Reviewers give its age as 300 years (January, March 2026) or 400 years (December 2025).',
      philosophy: 'Per the official site: hospitality first — 「おもてなしの心を第一に」.',
      specialty: 'Yusoku-ryori; seasonal kaiseki; Ikama-ryu shikibocho.',
      anecdotes: [
        { text: 'A July 2026 party, after a small-drum recital, watched a ceremonial knife performance before dinner and was joined later by maiko and geiko.', source: R + 'B533368471/' },
        { text: 'A June 2026 diner timed the visit for the Gion Festival season and saw live ayu grilled in the room, with hamo in soup and as sashimi.', source: R + 'B530273897/' },
        { text: 'An October 2025 reviewer found the cooking prized purity, beauty and the seasons over bold flavour, served in a quiet tatami room with flowers.', source: R + 'B514993281/' },
      ],
      japanese_sources_summary: '公式サイト (mankamerou.com): 享保七年 (1722年) 創業、京都西陣の一角で造り酒屋「萬屋」として営みを始め、のちに料理屋として「萬亀楼」と改める、御所ゆかりの生間流式庖丁・有職料理を正式に継承、当代は十代目、「堅実・賢明・謙虚」、上京区猪熊通り出水上ル蛭子町387、定休日は毎週水曜日と第1・第4火曜日、12月26日〜1月5日休み、駐車場5台、市バス堀川下長者町から徒歩3分。食べログ: 日本料理・弁当、上京区猪熊通出水上ル、12:00〜22:00、不定休、予約可 (ポケットコンシェルジュ)、サービス料と税で約20%、60席、個室、カード・電子マネー・QR 可。口コミ (2025〜2026年、英語): 有職料理、個室の座敷と庭、鱧の吸い物、鮎の焼き物、鯛茶漬け、八寸、かご弁当、女将のもてなし、式包丁と舞妓。',
      confidence: 'medium', sources: [TB, SITE, R + 'B514993281/', R + 'B518132007/', R + 'B521102878/', R + 'B523593433/', R + 'B524189173/', R + 'B524732825/', R + 'B529960578/', R + 'B530273897/', R + 'B533368471/', R + 'B538031245/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead (Pocket Concierge online); private tatami rooms; about 20% service and tax added.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区猪熊通り出水上ル蛭子町387',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.022136, 135.750529); cross-checked: GSI 京都府京都市上京区蛭子町387番地 (lot, from the official address) 29m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No menu read; reviewers spent ¥30,000–39,999 a head at dinner (2025–2026) and ¥10,000–14,999 for the kago bento (October 2026).', last_checked: TODAY, items: [
      it('', '', 'Seasonal kaiseki course', '', 'Courses', 'ask', 'no', '2025–2026 reviews.', 'kaiseki'),
      it('', '', 'Kago bento', '', 'Lunch', 'ask', 'no', 'October 2026.', 'kago_bento'),
    ] }, {
    cuisine: '個室の座敷でいただく有職料理と京懐石 (公式サイト、2025〜2026年の口コミ)・季節のコース: たとえば胡麻豆腐、鱧と青梅の吸い物、お造り、八寸、座敷で焼く活け鮎、しそのうどん、賀茂なすと帆立の味噌、鯛茶漬け、果物、和菓子と抹茶 (2026年6月)・冬: 蟹の茶碗蒸し、金と銀の皿の日月の八寸、銀鱈の西京焼き、自家製からすみ、ぶり大根 (2026年1月)・春: 甘えびと帆立の黄身白味噌和え、胡麻豆腐の吸い物、蒸し寿司、筍と伊勢海老 (2026年3月)・かご弁当 (2026年10月)・行事によっては生間流の式庖丁 (2026年7月)',
    neighborhood: '西陣、出水の北の猪熊通。市バス堀川下長者町から徒歩3分',
    gf_detail: '要確認。醤油や味噌の味付け、麩、うどんやそうめん、和菓子の京懐石。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。コースは出汁と魚が中心で、鰻、蟹、牛肉も (2025〜2026年の口コミ)。',
    notes: '[懐石・西陣、300年の有職料理の料亭] 西陣の猪熊通にある料亭。1722年に造り酒屋「萬屋」として始まり、のちに料理屋「萬亀楼」に。御所ゆかりの生間流式庖丁と有職料理を正式に継ぎ、当代は十代目。料理は庭に面した座敷の個室で、夏は鱧と座敷で焼く活け鮎、冬は蟹やからすみ、昼はかご弁当。夜は一人3万〜4万円ほどにサービス料と税で約2割。行事では式庖丁や舞妓も。要予約。',
  });
}

save();
