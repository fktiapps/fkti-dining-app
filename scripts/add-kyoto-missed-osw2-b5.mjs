// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 5.
//   core (queue.mjs kyoto-missed next core 200, 2026-11-05, first two lane ids):
//   + 京料理 本家たん熊 本店 Honke Tankuma (Kiyamachi ryotei since 1928: suppon, halal, kosher and vegan kaiseki)
//   + てらまち福田 Teramachi Fukuda (kappo-style izakaya on Teramachi; saba-zushi lunch sets)
//   notable (queue.mjs kyoto-missed next notable 200, first two lane ids):
//   + kashiya (plated wagashi-style desserts in a machiya café by the Kamo River; since 2014)
//   + 楽庵 Raku An (Karasuma Ayakoji izakaya of fish and dashi, deep sake list)
//   None is in data/kyoto.json: grep by id, name (たん熊/Tankuma, てらまち福田, かしや/kashiya, 楽庵/Rakuan) and address
//   (和泉屋町168, 恵美須之町528, 吉永町270, 神明町241) found none. ("Fukuda" and "Kashiya" hit only other records:
//   MOON and BACK's chef Tatsuya Fukuda.)
//   Group check: 本家たん熊 has two shops, 本店 and 京都高島屋店 (official site 店舗案内), none in data: drafted.
//   Pins: Tabelog /en/ point, cross-checked with GSI only.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-5');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 京料理 本家たん熊 本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26000907/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://tankuma.jp/'; const EN = SITE + 'en/'; const HONTEN = SITE + 'honten/'; const MENU = SITE + 'menu/';
  const HIST = SITE + 'history/'; const CO = SITE + 'company/';
  const H = day(['17:00', '22:00']);
  put({
    id: 'kyoto_honke_tankuma_honten', name: '京料理 本家たん熊 本店 (Honke Tankuma Honten)', category: 'MOM_AND_POP',
    lat: 35.000285, lng: 135.769230, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. Courses include tempura (油物), red-miso soup and dashi-simmered dishes; the shop prepares halal, kosher and vegan courses on request, but publishes no gluten information (official site).',
    vegan_status: 'options', vegan_label: 'Some vegan options', vegan_detail: 'A shojin kaiseki of vegetables only, with vegetable dashi and no alcohol or the five pungent roots, ¥22,000 plus 15% service — book two days ahead (official site). The standard kaiseki is built on suppon, fish and dashi.',
    hours_raw: '17:00–22:00 (last order 19:30); closed Sunday, the 2nd and 4th Monday and 25 December–6 January, with a calendar of closures on the official site (official site). Tabelog lists Tuesday–Saturday 17:00–19:30. Bookings from one person, up to three months ahead, by phone or TableCheck; vegan menus two days ahead, kosher seven days ahead, some halal menus the same day (official site). 15% service charge (official site; Tabelog). Seven or eight private rooms for 1 to 35 people; kawadoko riverside seating 1 May–30 September, 17:00–22:00, seat fee ¥1,650 (official site). Children’s platter ¥3,000 by booking (Tabelog). English menu; the okami speaks English (Tabelog; official site). Cards (Tabelog). 5 min walk from Kyoto Kawaramachi Stn, 7 min from Gion-Shijo Stn (official site).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: true, open_late: false },
    neighborhood: 'Kiyamachi south of Bukkoji, between the Takase and Kamo rivers — 5 min from Kyoto Kawaramachi Stn',
    cuisine: 'Kyoto ryotei of "monmo" cooking — ingredients served as they are — founded in 1928; famous for suppon (official site) · Kyoto kaiseki: Suma ¥22,000 (11 dishes, with the signature 丸吸 suppon soup), Kocho ¥33,000 (11 dishes, with 丸鍋, a one-person suppon hot pot), Hana-utage ¥19,800 for 10 or more; seasonal matsutake kaiseki to ¥55,000; all plus 15% service (official site) · halal kaiseki ¥33,000 and special ¥44,000, halal wagyu and chicken course ¥33,000, certified by the Kyoto Halal Council; kosher menu (Kosher Japan); shojin kaiseki of vegetables only ¥22,000 (official site) · over 150 wines and 30 sakes, chosen by the fourth-generation owner, a certified sommelier (official site) · 2019–25 reviews: suppon liver and shoulder sashimi, zosui, dobin-mushi, matsutake, ayu with roe',
    website: SITE, gmaps: gm('本家たん熊 本店 木屋町'), menu_url: MENU,
    notes: "[Kaiseki · Kiyamachi, a 1928 ryotei famous for suppon] A sukiya-style ryotei between the Takase River and the Kamo, founded in 1928 by 栗栖 熊三郎 at a five-seat counter and now run by the family's fourth generation, Junichi Kurisu (from September 2026), a sommelier who travelled some 80 countries. The kaiseki is 'monmo' — ingredients served as they are — and its signature is suppon, in the 丸吸 soup or the 丸鍋 hot pot. It was among the first Kyoto ryotei with halal certification (2014) and serves kosher and vegan kaiseki on request. Courses from ¥22,000 plus 15% service; riverside kawadoko in summer. Booking required; closed Sunday.",
    chef_bio: { chef_name: 'Junichi Kurisu (栗栖 純一)', roles: ['4th-generation executive chef and owner from September 2026 (official site)', 'Sommelier: A.S.I. Sommelier Diploma, WSET Level 3 Wines and Sake, J.S.A. Sake Diploma (official site)'], origin: 'Great-grandson of the founder (official site).',
      background: 'Per the official site: founded on 13 December 1928 by 栗栖 熊三郎 and 栗栖 フミ子 as a five-seat counter by the Takase River; the name joins 丹 of Tanba, the founder’s home, with 熊 of 熊三郎; moved to the present site in 1954 as たん熊南店 and opened the Kyoto Takashimaya shop the same year; renamed 本家 たん熊 in 1989 (the separate たん熊北店 was founded in 1957); the third generation, Kumasaburo Kurisu (born 栗栖 富滋), took the name in 1991 and is now senior advisor; Junichi Kurisu trained at the tea-kaiseki house 東京 柿傳, joined in 2009 and became the fourth-generation owner in September 2026, having travelled about 80 countries; the okami, Haruko Kurisu, speaks English. Two Michelin stars in the Kyoto/Osaka 2010 guide; one star in the 2024 guide. Halal certification from the Kyoto Halal Council (2014); kosher certification from Kosher Japan (2023).',
      philosophy: 'Per the official site: "monmo" cooking — 「もんも」 is Kyoto dialect for "as it is" — drawing out the flavour of carefully chosen natural ingredients without ornament; and food diversity, so that visitors of any faith or diet can enjoy Kyoto cuisine.',
      specialty: '丸吸 (suppon soup); 丸鍋 (suppon hot pot); うずら饅頭, 玉子宝楽.',
      anecdotes: [
        { text: 'A 2015 review of the course lists the signature one-person suppon hot pot, yudofu and Kyoto-style dashimaki (November 2015).', source: R + 'B228889082/' },
        { text: '"The soft-shelled turtle was exquisite, with its tender, collagen-rich meat complemented by a gentle ginger broth" — October 2025.', source: R + 'B515998175/' },
        { text: 'An April 2024 business dinner began with suppon liver and shoulder sashimi and ended with zosui.', source: R + 'B482683004/' },
      ],
      japanese_sources_summary: '公式サイト (tankuma.jp): 京料理 本家たん熊、創業より100年の「もんも」な京料理 (「もんも」は京都の言葉で「そのままな」)、1928年 (昭和3年) 12月13日に初代 栗栖 熊三郎と妻 栗栖 フミ子が高瀬川のほとりで5名がけのカウンターから創業、名は出身地の丹波の「丹」と熊三郎の「熊」、名物は丸鍋 (すっぽん鍋)・うずら饅頭・玉子宝楽、1954年に現在地へ移転し京都高島屋店を出店、1989年に「本家 たん熊」に改称、1991年に三代目 栗栖 富滋が栗栖 熊三郎を襲名、2009年に栗栖 純一が東京 柿傳での修行を経て入店、2010年ミシュラン2つ星、2014年京都ハラール評議会の認証、2023年 Kosher Japan の認証、2026年9月に栗栖 純一が四代目主人に就任、女将 栗栖晴子は英語可、ワイン150種以上・日本酒30種、本店: 下京区木屋町通仏光寺下る和泉屋町168、17時〜22時 (L.O. 19時30分)、日曜・第2第4月曜・12月25日〜1月6日休み、須磨22,000円、胡蝶33,000円 (サービス料15%別)、精進会席22,000円 (2日前まで)、ハラール会席33,000円、ハラール特別会席44,000円、納涼床5月1日〜9月30日 (席料1,650円)、ミシュランガイド京都・大阪2024で一つ星、店舗は本店と京都高島屋店。食べログ: 日本料理・すっぽん、サービス料15%、50席・個室7、英語メニュー、お子様の盛り合わせ3,000円 (要予約)、1928年12月13日創業。口コミ (2015〜2025年、英語): すっぽんの肝と肩の刺身、雑炊、土瓶蒸し、子持ち鮎。',
      confidence: 'medium', sources: [TB, SITE, EN, HONTEN, MENU, HIST, CO, R + 'B217617377/', R + 'B228889082/', R + 'B450402943/', R + 'B451668179/', R + 'B476696282/', R + 'B482683004/', R + 'B498931675/', R + 'B515998175/'] },
    cultural_comfort: { level: 'english', note: 'English menu; the okami speaks English (official site); book halal, kosher or vegan courses ahead.' },
    safety: { ...SAFETY0, positives: [
      { text: 'Shojin kaiseki uses vegetables only, with vegetable dashi, and is suitable for vegans; book two days ahead (official site).', source: MENU, verified: TODAY },
      { text: 'Halal menus certified by the Kyoto Halal Council; all ingredients halal-certified, no pork or alcohol (official site).', source: MENU, verified: TODAY },
    ] },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区木屋町通仏光寺下ル和泉屋町168',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (owner change September 2026; holiday notice August 2026) and Tabelog listing; latest review October 2025.' },
    pin_source: `Tabelog ${TB} (35.000285, 135.769230); cross-checked: GSI 京都府京都市下京区和泉屋町168番地 (lot) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'high', sources: [MENU, HONTEN],
    price_note: 'Official site menu page (prices including tax; 15% service charge extra).', last_checked: TODAY, items: [
      it('須磨', '', 'Suma Kyoto kaiseki (11 dishes, suppon soup)', '¥22,000', 'Course', 'ask', 'no', '', 'suma'),
      it('胡蝶', '', 'Kocho Kyoto kaiseki (11 dishes, suppon hot pot)', '¥33,000', 'Course', 'ask', 'no', '', 'kocho'),
      it('精進会席料理', '', 'Shojin kaiseki, vegetables only (vegan)', '¥22,000', 'Course', 'ask', 'vegan', 'Book two days ahead.', 'shojin_kaiseki'),
      it('ハラール会席', '', 'Halal kaiseki (Kyoto Halal Council certified)', '¥33,000', 'Course', 'ask', 'no', 'Book two days ahead.', 'halal_kaiseki'),
    ] }, {
    cuisine: '1928年創業、素材「そのまま」の「もんも」な京料理の料亭。名物はすっぽん (公式サイト)・京風会席: 須磨22,000円 (全11品、名物 丸吸)、胡蝶33,000円 (全11品、名物 丸鍋)、10名以上の花宴19,800円、季節の松茸会席は55,000円まで、いずれもサービス料15%別 (公式サイト)・京都ハラール評議会認証のハラール会席33,000円・特別会席44,000円、ハラール和牛・国産鶏のコース33,000円、コーシャメニュー (Kosher Japan)、野菜のみの精進会席22,000円 (公式サイト)・四代目のソムリエが選ぶワイン150種以上、日本酒30種 (公式サイト)・2019〜2025年の口コミ: すっぽんの肝と肩の刺身、雑炊、土瓶蒸し、松茸、子持ち鮎',
    neighborhood: '仏光寺の南の木屋町、高瀬川と鴨川の間。京都河原町駅から徒歩5分',
    gf_detail: '予約時に要確認。コースには油物、赤出汁、だしの炊き物が入る。ハラール、コーシャ、ヴィーガンのコースは用意するが、グルテンの情報は公開されていない (公式サイト)。',
    vegan_detail: '野菜のみ、出汁も精進出汁で、アルコールと五葷を使わない精進会席22,000円 (サービス料15%別)、2日前までに予約 (公式サイト)。通常の会席はすっぽん、魚、だしが中心。',
    notes: '[会席・木屋町、すっぽんで知られる1928年創業の料亭] 高瀬川と鴨川の間の数寄屋造りの料亭。1928年に栗栖 熊三郎が5席のカウンターで創業し、2026年9月からは四代目の栗栖 純一さんが主人。約80か国を旅したソムリエでもある。料理は素材そのままの「もんも」な京料理で、名物はすっぽんの丸吸と丸鍋。京料理でいち早くハラール認証を取得 (2014年) し、コーシャやヴィーガンの会席も予約で用意する。コースは22,000円 (サービス料15%別) から、夏は納涼床。要予約、日曜休み。',
  });
}

// ================================================================ てらまち福田
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26020479/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://teramachi-fukuda.jp/'; const MENU = SITE + 'menu.html'; const COURSE = SITE + 'corce.html'; const SHOP = SITE + 'shopinfo.html';
  const H = day(['12:00', '14:00'], ['17:00', '22:30']);
  put({
    id: 'kyoto_teramachi_fukuda', name: 'てらまち福田 (Teramachi Fukuda)', category: 'MOM_AND_POP',
    lat: 35.000805, lng: 135.766705, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Many dishes use dashi, soy or miso, and the menu has tempura, fried dishes, ramen and somen; no gluten information is published (official menu).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish, chicken, duck and suppon dishes built on dashi; even the vegetable dishes use dashi or fish (official menu; 2026 reviews).',
    hours_raw: 'Lunch 12:00–14:00 (last order 13:30) and dinner 17:00–22:30 (last order 22:00); closed Tuesday and Wednesday (official site; Tabelog). Lunch takes no bookings and is cash only (official site; July 2026); queues can form before 12:00 and the saba-zushi can sell out (March 2026). Dinner bookings taken; courses from ¥5,000 by booking, full charge for same-day cancellations (official site). 20 seats (6 at the counter, three tables for 4); non-smoking; no children under junior-high age; no strong perfume; English menu (Tabelog). Cards and cashless at dinner only (Tabelog). On the 2nd floor of えびすテラス on Teramachi south of Bukkoji, opposite the Watts 100-yen shop — walk to the back of the 1st floor and up the stairs (official site). Opened 5 July 2012 as 美碧 and renamed Teramachi Fukuda on 5 June 2020 (Tabelog).',
    hours: { 0: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Teramachi south of Bukkoji, quiet side of Shijo — 5 min from Kyoto Kawaramachi Stn',
    cuisine: 'Kappo-standard Japanese cooking served the casual izakaya way, by owner-chef 福田 竹志 (official site) · lunch (tax included): daily set ¥1,000, saba simmered in sansho miso ¥1,100, tendon ¥1,300, kaisen-don ¥1,500, saba-zushi with seasonal nyumen or somen ¥1,500 (official site); clam ramen ¥1,500 (March 2026) · evening: suppon dobin-mushi, zosui or ramen ¥2,600 each; seasonal fish salt-grilled, fried or sake-steamed ¥2,400; Kyoto duck roast ¥1,800; kombu-cured sasami ¥1,200; tempura platter (about 7 pieces) ¥1,650; sashimi platter (about 8 kinds) ¥2,000 (official site) · small dishes: potato salad with prosciutto ¥550, burdock with sesame ¥600, homemade raisin butter ¥700, steamed onion with sea-urchin soy ¥850, house squid satsuma-age ¥850, daikon and millet-fu dengaku ¥900, fried Kyoto mochi-pork kakuni ¥900, tempura spring roll of toro yuba and salted uni ¥900, beef tendon and atsuage ¥1,100 (official site) · hamo cutlet, saba-zushi, roast beef (2026 reviews) · courses ¥5,000, ¥7,700 and up (official site) · a long sake list; wine by the bottle only (June 2026)',
    website: SITE, gmaps: gm('てらまち福田 京都'), menu_url: MENU,
    notes: "[Izakaya · Teramachi, kappo cooking at izakaya prices] A second-floor room on Teramachi south of Bukkoji, hard to find — through the building and up the back stairs — where owner-chef 福田 竹志, in Japanese cooking since 18, serves kappo-standard dishes the casual izakaya way. Order the sea-urchin-soy onion, the toro-yuba and uni spring roll, a hamo cutlet in summer, and finish with the house saba-zushi; or come at lunch for the saba-zushi and somen set (¥1,500) or the clam ramen. A strong sake list. Lunch is walk-in and cash only; dinner by booking. Closed Tuesday and Wednesday; no children under junior-high age.",
    chef_bio: { chef_name: '福田 竹志', roles: ['Owner and cook (official site: "店主・料理人 福田竹志")'], origin: null,
      background: 'Per the official site: in Japanese cooking since the age of 18, aiming to serve kaiseki-style dishes casually, for locals and visitors alike; the menu follows the four phases of a season (走り、旬、名残り) with orthodox technique, "過ぎず、程よく" (not too much, just right). Per Tabelog: opened 5 July 2012 as 美碧 (みどり) and reopened under the present name on 5 June 2020. Tabelog Izakaya WEST "Tabelog 100" 2024.',
      philosophy: 'Per the official site: "過ぎず、程よく" — the handwork of a kappo with the ease of an izakaya.',
      specialty: 'Saba-zushi; steamed onion with sea-urchin soy; suppon dishes.',
      anecdotes: [
        { text: 'A regular on a ninth visit (May 2026) had hamo with jelly and fried young ayu, and finished as always with the saba-zushi.', source: R + 'B463264322/' },
        { text: 'A March 2026 diner who arrived ten minutes before opening found the saba-zushi sold out early and the noodle soup weak.', source: R + 'B525951700/' },
        { text: 'A July 2026 diner asked about a dish listed only with niboshi as a condiment, and the kitchen kindly made it with somen.', source: R + 'B533858774/' },
      ],
      japanese_sources_summary: '公式サイト (teramachi-fukuda.jp): てらまち福田、店主・料理人 福田竹志、18歳から和食の世界、懐石で提供するようなお料理を気軽に、「過ぎず、程よく」、走り・旬・名残り、割烹のような手技と居酒屋のような気軽さ、下京区寺町通仏光寺下る恵美須之町528 えびすテラス2F (Watts の向かいのビル、1F 奥の階段)、昼 12:00〜13:30 (L.O) 14:00 close、夜 17:00〜22:00 (L.O) 22:30 close、昼は予約不可、火・水曜定休 (2024年11月から)、ランチ: 日替わり1,000円、鯖の山椒味噌煮定食1,100円、天丼定食1,300円、海鮮丼定食1,500円、鯖寿司と季節の煮麺 (素麺) セット1,500円、夜: すっぽんの土瓶蒸し・雑炊・ラーメン各2,600円、京都産鴨ロース1,800円、天ぷら盛り合わせ1,650円、造り盛り合わせ2,000円、生ハムのポテトサラダ550円、玉葱の蒸し焼き雲丹醤油850円、トロ湯波と塩雲丹の春巻天900円、コース5,000円から (要予約、当日キャンセルは全額)。食べログ: 居酒屋・日本料理、旧店名 美碧、20席、禁煙、中学生未満不可、英語メニュー、夜のみカード・QR 可、2012年7月5日オープン、2020年6月5日に改称、居酒屋 WEST 百名店 2024。口コミ (2025年11月〜2026年7月、英語): 鯖寿司、鱧カツ、clam のラーメン、昼は現金のみ、ワインはボトルのみ。',
      confidence: 'medium', sources: [TB, SITE, MENU, COURSE, SHOP, R + 'B134836588/', R + 'B463264322/', R + 'B525229702/', R + 'B525951700/', R + 'B526833557/', R + 'B529461567/', R + 'B529785742/', R + 'B529877366/', R + 'B530444841/', R + 'B531016255/', R + 'B532388222/', R + 'B533858774/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu; lunch is walk-in and cash only; book for dinner; no children under junior-high age.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区寺町通仏光寺下る恵美須之町528 えびすテラス 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (notice December 2025) and Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.000805, 135.766705); cross-checked: GSI 京都府京都市下京区恵美須之町528番地 (lot) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'high', sources: [MENU],
    price_note: 'Official site menu (prices including tax; undated).', last_checked: TODAY, items: [
      it('鯖寿司と季節の煮麺(素麺)セット', '', 'Saba-zushi with seasonal nyumen (somen) set (lunch)', '¥1,500', 'Lunch', 'no', 'no', '', 'saba_zushi_set'),
      it('海鮮丼定食', '', 'Kaisen-don set (lunch)', '¥1,500', 'Lunch', 'ask', 'no', '', 'kaisendon_set'),
      it('玉葱の蒸し焼き雲丹醤油', '', 'Steamed onion with sea-urchin soy', '¥850', 'Small dishes', 'ask', 'no', '', 'onion_uni'),
      it('トロ湯波と塩雲丹の春巻天', '', 'Tempura spring roll of toro yuba and salted uni', '¥900', 'Small dishes', 'no', 'no', '', 'yuba_uni_harumaki'),
      it('造り盛り合わせ', '', 'Sashimi platter (about 8 kinds)', '¥2,000', 'Sashimi', 'ask', 'no', '', 'tsukuri'),
      it('すっぽんの土瓶蒸し', '', 'Suppon dobin-mushi', '¥2,600', 'Suppon', 'ask', 'no', '', 'suppon_dobin'),
    ] }, {
    cuisine: '店主・料理人 福田 竹志さんの、割烹のような手技の和食を居酒屋のように気軽に (公式サイト)・ランチ (税込): 日替わり1,000円、鯖の山椒味噌煮定食1,100円、天丼定食1,300円、海鮮丼定食1,500円、鯖寿司と季節の煮麺 (素麺) セット1,500円 (公式サイト)、clam のラーメン1,500円 (2026年3月)・夜: すっぽんの土瓶蒸し・雑炊・ラーメン各2,600円、旬の魚の塩焼き・唐揚げ・酒蒸し各2,400円、京都産鴨ロース1,800円、ささみ昆布〆1,200円、天ぷら盛り合わせ (約7種) 1,650円、造り盛り合わせ (約8種) 2,000円 (公式サイト)・一品: 生ハムのポテトサラダ550円、牛蒡の胡麻和え600円、自家製レーズンバター700円、玉葱の蒸し焼き雲丹醤油850円、自家製烏賊のさつま揚げ850円、大根と粟麩の田楽900円、京もち豚の角煮フライ900円、トロ湯波と塩雲丹の春巻天900円、牛すじと厚揚げの炊いたん1,100円 (公式サイト)・鱧カツ、鯖寿司、ローストビーフ (2026年の口コミ)・コース5,000円、7,700円など (公式サイト)・日本酒が豊富、ワインはボトルのみ (2026年6月)',
    neighborhood: '仏光寺の南の寺町、四条の静かな側。京都河原町駅から徒歩5分',
    gf_detail: '要確認。だし、醤油、味噌を使う料理が多く、天ぷら、揚げ物、ラーメン、素麺もある。グルテンの情報は公開されていない (公式メニュー)。',
    vegan_detail: 'ヴィーガン不可。魚、鶏、鴨、すっぽんの料理でだしを使い、野菜の料理もだしや魚を使う (公式メニュー、2026年の口コミ)。',
    notes: '[居酒屋・寺町、居酒屋の値段で割烹の料理] 仏光寺の南、寺町のビルの2階。1階を奥まで進んで階段を上がるので見つけにくい。18歳から和食一筋の店主・料理人 福田 竹志さんが、割烹のような料理を居酒屋の気軽さで出す。玉葱の蒸し焼き雲丹醤油、トロ湯波と塩雲丹の春巻天、夏は鱧カツ、締めに鯖寿司を。昼は鯖寿司と素麺のセット (1,500円) や clam のラーメン。日本酒も豊富。昼は予約不可で現金のみ、夜は予約を。火・水曜休み、中学生未満は不可。',
  });
}

// ================================================================ kashiya
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26024343/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '19:00']);
  put({
    id: 'kyoto_kashiya_cafe', name: 'kashiya', category: 'OMNI',
    lat: 35.013782, lng: 135.774898, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Plated desserts mix mochi, uirou and bean paste with crepe, sablé, cookie and roll-cake elements; no ingredient list is published (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Many plates use cream, cream cheese, ice cream or butter; no vegan items are marked (2026 reviews).',
    hours_raw: '12:00–19:00 (last order 18:00); closed Tuesday; temporary closures on Instagram (Tabelog). No reservations (Tabelog). Photos of the food only — no other photos or video, to avoid disturbing guests (Tabelog; October 2026). 16 seats at tables, front and back rooms, with garden green at the back (Tabelog; October 2026). Cards (AMEX) and QR payments (Tabelog). Takeaway sweets in a showcase at the door (June 2026). On Nijo-dori east of the Kamo River (June and August 2026); 6 min walk from Keihan Sanjo Stn exit 11, 7 min from Jingu-Marutamachi Stn (Tabelog). Opened 12 September 2014 (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nijo-dori east of the Kamo River — 6 min from Keihan Sanjo Stn',
    cuisine: 'Plated desserts that blend wagashi and Western pastry, served with tea or coffee in a long, narrow machiya (2026 reviews) · plates named for their pairings: Amazon cacao and banana ¥1,600 (June 2026), grapes and cream cheese ¥1,400 (October 2026), amanatsu and yomogi, banana and chocolate, passion fruit and coconut, nashi and osmanthus (May–September 2026); anmitsu with shiratama and kuromitsu (June 2026) · takeaway: passion-fruit uirou and miso-walnut cookies (¥900 together, May 2026), Amazon cocoa sand ¥500 (May 2026), coconut-mango roll cake ¥1,200 (August 2026), salted-caramel kinako sablé (October 2026), smoked pickled nuts (June 2026) · blend coffee ¥550, café latte, tea ¥600 (2026 reviews)',
    website: null, gmaps: gm('kashiya 京都 二条 カフェ'), menu_url: null,
    notes: "[Café & sweets · Nijo, wagashi-meets-pastry plates in a machiya] A quiet dessert café in a long, narrow townhouse on Nijo-dori just east of the Kamo River, with garden green at the back. The plates pair a fruit with something unexpected — Amazon cacao and banana, grapes and cream cheese, amanatsu and yomogi, nashi and osmanthus — mixing mochi, uirou and bean paste with crepe and sablé; the anmitsu is the simpler classic. Takeaway sweets in the front case. Photos of the food only. Reviewers praise the drinks; a few found the welcome cool and the house rules strict. 12:00–19:00, closed Tuesday.",
    chef_bio: { chef_name: null, roles: ['No person is named in the sources'], origin: null,
      background: 'Opened 12 September 2014 (Tabelog). Tabelog Sweets WEST "Tabelog 100" 2018–2020, Cafe "Tabelog 100" 2021, 2022 and Cafe WEST 2025. A September 2026 reviewer notes it was serving plated desserts before the recent wave of dessert-course shops.',
      philosophy: null, specialty: 'Plated seasonal desserts; Amazon cacao and banana; anmitsu.',
      anecdotes: [
        { text: 'A June 2026 visitor, wary after mixed reviews of the service, was met with a silent stare at the door but found the sweets and the drinks exceptional.', source: R + 'B537346862/' },
        { text: 'A May 2026 visitor asking for a plate to share was told there were none, and found the photography rules unusual.', source: R + 'B534917861/' },
        { text: 'A September 2026 colleague’s dessert was hefty; the coffee alone had "a perfect balance of acidity".', source: R + 'B536119207/' },
      ],
      japanese_sources_summary: '食べログ: カフェ・スイーツ、左京区吉永町270-3、京阪三条駅11番出口から徒歩約6分、神宮丸太町駅2番出口から約7分、12:00〜19:00 (L.O. 18:00)、火曜休み、臨時休業は Instagram で、予約不可、16席 (テーブル)、禁煙、カード (AMEX)・QR 可、テイクアウト可、料理以外の撮影不可、2014年9月12日オープン、スイーツ WEST 百名店 2018〜2020、カフェ百名店 2021・2022、カフェ WEST 百名店 2025。口コミ (2026年5〜10月、英語): アマゾンカカオとバナナ1,600円、ぶどうとクリームチーズ1,400円、甘夏とよもぎ、梨と金木犀、あんみつ、パッションフルーツのういろう、ロールケーキ1,200円、ブレンドコーヒー550円。',
      confidence: 'medium', sources: [TB, R + 'B528683272/', R + 'B529207859/', R + 'B529464842/', R + 'B530236911/', R + 'B530410674/', R + 'B532963967/', R + 'B534917861/', R + 'B535547562/', R + 'B536119207/', R + 'B537346862/', R + 'B538120550/', R + 'B538177830/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'No bookings; photos of the food only; plates are not shared.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区吉永町270-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026; Cafe WEST Tabelog 100 2025.' },
    pin_source: `Tabelog ${TB} (35.013782, 135.774898); cross-checked: GSI 京都府京都市左京区吉永町270番地 (lot) 23m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B530236911/', R + 'B538120550/', R + 'B532963967/'],
    price_note: 'No menu published; prices from May–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Amazon cacao and banana (plated dessert)', '¥1,600', 'Desserts', 'no', 'ask', 'June 2026.', 'cacao_banana'),
      it('', '', 'Grapes and cream cheese (plated dessert)', '¥1,400', 'Desserts', 'ask', 'no', 'October 2026.', 'grape_cream_cheese'),
      it('', '', 'Coconut and mango roll cake (takeaway)', '¥1,200', 'Takeaway', 'no', 'no', 'August 2026.', 'roll_cake'),
      it('', '', 'Blend coffee', '¥550', 'Drinks', '', '', 'June 2026.', 'blend_coffee'),
    ] }, {
    cuisine: '和菓子と洋菓子を合わせた皿盛りのデザートを、細長い町家でお茶やコーヒーと (2026年の口コミ)・組み合わせの名のデザート: アマゾンカカオとバナナ1,600円 (2026年6月)、ぶどうとクリームチーズ1,400円 (2026年10月)、甘夏とよもぎ、バナナとチョコレート、パッションフルーツとココナッツ、梨と金木犀 (2026年5〜9月)。白玉と黒蜜のあんみつ (2026年6月)・持ち帰り: パッションフルーツのういろうと味噌くるみのクッキー (合わせて900円、2026年5月)、アマゾンカカオのサンド500円 (2026年5月)、ココナッツとマンゴーのロールケーキ1,200円 (2026年8月)、塩キャラメルきなこのサブレ (2026年10月)、燻製のナッツ (2026年6月)・ブレンドコーヒー550円、カフェラテ、紅茶600円 (2026年の口コミ)',
    neighborhood: '鴨川の東の二条通。京阪三条駅から徒歩6分',
    gf_detail: '要確認。皿盛りのデザートは餅、ういろう、あんにクレープ、サブレ、クッキー、ロールケーキを合わせる。原材料の一覧は公開されていない (2026年の口コミ)。',
    vegan_detail: '要確認。多くの皿にクリーム、クリームチーズ、アイス、バターを使う。ヴィーガンと書かれた品はない (2026年の口コミ)。',
    notes: '[カフェとスイーツ・二条、町家の和洋折衷の皿盛りデザート] 鴨川のすぐ東、二条通の細長い町家の静かなデザートカフェ。奥には庭の緑。果物と意外な素材を組み合わせた皿で、アマゾンカカオとバナナ、ぶどうとクリームチーズ、甘夏とよもぎ、梨と金木犀など、餅やういろう、あんにクレープやサブレを合わせる。素朴なあんみつも。入口のケースには持ち帰りの菓子。撮影は料理のみ。飲み物も好評だが、出迎えがそっけない、決まりが厳しいという声も。12時〜19時、火曜休み。',
  });
}

// ================================================================ 楽庵
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26000829/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '22:00']);
  put({
    id: 'kyoto_rakuan_ayakoji', name: '楽庵 (Raku An)', category: 'OMNI',
    lat: 35.002592, lng: 135.761861, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A fish-and-dashi izakaya: sashimi with soy, Saikyo-miso grills, tempura, kara-age and simmered dishes; no gluten information is published (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish, eel, duck and dashi-based dishes make up the menu (2026 reviews).',
    hours_raw: '17:30–22:00 (last order 21:30), Monday to Saturday; closed Sunday and holidays; hours may change (Tabelog). Usually fully booked: reservations a must (May 2026). 30 seats with a counter; non-smoking; cards (JCB, AMEX, Diners) (Tabelog). On the west side of Takakura-dori by Ayakoji, a short walk from Shijo Karasuma (November 2025; May and August 2026); 193 m from Karasuma Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Takakura-dori by Ayakoji, south of Shijo Karasuma — 3 min from Karasuma Stn',
    cuisine: 'Busy Japanese izakaya of fish, dashi and a long sake list, much loved by regulars at the counter (2026 reviews) · sashimi platter of about eight kinds (sea bream, yokowa, bonito tataki, shima-aji, octopus, swordfish, sweet shrimp) · grilled guji (amadai), sawara in Saikyo miso, grilled natural eel, squid legs in Saikyo miso ¥780 · hamo tempura, oyster tempura, white shrimp and new-onion tempura ¥980, kara-age · lotus-root manju ¥1,000, duck manju, flounder liver with ponzu ¥780, stewed meat, simmered taro, beef tendon and daikon, nama-fu dengaku, matsutake and hamo dobin-mushi, unagi sushi · pickled mizu-nasu ¥780 · a fruit dessert to finish (April–October 2026) · sake such as Juyondai and 黒龍; Ebisu and Sapporo beer (May–October 2026)',
    website: null, gmaps: gm('楽庵 京都 綾小路 高倉'), menu_url: null,
    notes: "[Izakaya · Shijo Karasuma, fish, dashi and sake by Ayakoji] A busy, always-booked izakaya on Takakura-dori near Ayakoji, a few minutes from Shijo Karasuma, where regulars fill the counter. The broth is the star: duck or lotus-root manju in dashi, matsutake and hamo dobin-mushi in autumn; then an eight-kind sashimi platter, sawara or squid in Saikyo miso, hamo tempura, grilled natural eel. Dishes are made to order and fairly priced — around ¥6,000–8,000 a head in 2026 — with a deep sake list. Book ahead. Closed Sunday and holidays.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed in the sources)'], origin: null,
      background: 'Reviewers in 2026 describe a counter full of regulars and a friendly, chatty owner (September 2026); a September 2026 reviewer heard that the usual chef is now running a new establishment. Tabelog Izakaya "Tabelog 100" 2022 and Izakaya WEST 2024, 2026.',
      philosophy: null, specialty: 'Lotus-root manju; sashimi platter; Saikyo-miso grills.',
      anecdotes: [
        { text: 'A May 2026 regular came back for the duck manju, a favourite, and found it as good as remembered.', source: R + 'B245745425/' },
        { text: 'An April 2026 diner found the dashi the star — "not the kind that hits you hard at first" — and called it a steal for Kyoto.', source: R + 'B527219218/' },
        { text: 'A September 2026 couple from Kanto ate and drank well for about ¥7,000 a head.', source: R + 'B534918273/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・日本料理、下京区神明町241-1、烏丸駅から193m、月〜土 17:30〜22:00 (L.O. 21:30)、日・祝休み、予約可、30席、カウンター席、禁煙、カード可 (JCB・AMEX・Diners)、居酒屋百名店 2022、居酒屋 WEST 百名店 2024・2026。口コミ (2025年11月〜2026年10月、英語、一部日本語): 高倉通綾小路、ほぼ満席で要予約、鴨まんじゅう、蓮根まんじゅう、鱧天ぷら、コチ、茄子とニシン、下足西京焼780円、刺身盛り合わせ、天然うなぎの焼き物、土瓶蒸し、黒龍、Juyondai、1人7,000円ほど。',
      confidence: 'medium', sources: [TB, R + 'B245745425/', R + 'B508604871/', R + 'B527219218/', R + 'B529557532/', R + 'B529635053/', R + 'B533753208/', R + 'B534347510/', R + 'B534918273/', R + 'B535334465/', R + 'B535344155/', R + 'B537497483/', R + 'B537512755/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; à la carte menu with daily fish.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区神明町241-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026; Izakaya WEST Tabelog 100 2026.' },
    pin_source: `Tabelog ${TB} (35.002592, 135.761861); cross-checked: GSI 京都府京都市下京区神明町241番地 (lot) 20m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B527219218/'],
    price_note: 'No menu published; prices from an April 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Lotus-root manju', '¥1,000', 'Simmered', 'ask', 'no', 'April 2026.', 'renkon_manju'),
      it('下足西京焼', '', 'Squid legs grilled in Saikyo miso', '¥780', 'Grills', 'ask', 'no', 'April 2026.', 'geso_saikyo'),
      it('', '', 'White shrimp and new-onion tempura', '¥980', 'Fried', 'no', 'no', 'April 2026.', 'shiroebi_ten'),
      it('', '', 'Flounder liver with ponzu', '¥780', 'Small dishes', 'ask', 'no', 'April 2026.', 'karei_kimo'),
    ] }, {
    cuisine: '魚とだしと日本酒の、にぎやかな居酒屋。カウンターは常連でいっぱい (2026年の口コミ)・刺身盛り合わせは約8種 (鯛、ヨコワ、鰹のたたき、シマアジ、タコ、カジキ、甘海老)・甘鯛の焼き物、鰆の西京焼、天然うなぎの焼き物、下足西京焼780円・鱧天ぷら、牡蠣の天ぷら、白海老と新玉ねぎの天ぷら980円、唐揚げ・蓮根まんじゅう1,000円、鴨まんじゅう、flounder の肝ポン酢780円、肉の煮込み、小芋の煮物、牛すじと大根、生麩田楽、松茸と鱧の土瓶蒸し、うなぎの寿司・水茄子の漬物780円・締めに果物のデザート (2026年4〜10月)・日本酒は Juyondai、黒龍など。ビールはエビスとサッポロ (2026年5〜10月)',
    neighborhood: '四条烏丸の南、綾小路の高倉通。烏丸駅から徒歩3分',
    gf_detail: '要確認。魚とだしの居酒屋で、醤油の刺身、西京焼、天ぷら、唐揚げ、煮物。グルテンの情報は公開されていない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚、うなぎ、鴨、だしの料理が中心 (2026年の口コミ)。',
    notes: '[居酒屋・四条烏丸、綾小路の魚とだしと酒] 四条烏丸から数分、綾小路近くの高倉通の、いつも予約で埋まる居酒屋。カウンターは常連でいっぱい。主役はだしで、鴨まんじゅうや蓮根まんじゅう、秋は松茸と鱧の土瓶蒸し。続いて約8種の刺身盛り合わせ、鰆や下足の西京焼、鱧天ぷら、天然うなぎの焼き物。注文を受けてから作り、値段も手頃で2026年は1人6,000〜8,000円ほど。日本酒も豊富。要予約、日・祝休み。',
  });
}

save();
