// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 100.
// Core and notable have nothing left in the lane; rest list, nearest-first (queue.mjs ... next rest 2000):
//   - えびす楽庵 清水販売店 — retail food shop (integrator ruling on b99's open item)
//   + お皿とスプーン (wine and small-plates dining bar in an old townhouse west of Gojo Stn; opened 18 April 2021)
//   - 煎餅堂 — retail food shop (takeaway senbei; the shopkeeper called it part of a chain in a 2013 review)
//   + 京都寺町 きゅうどう (izakaya of Miyazaki jidori chicken and fish on Teramachi; lunch set meals)
//   + 洋食グリルスタンド (one-chef yoshoku counter of seven seats near Higashi Honganji; since 2019)
//   + つむぎカフェ (sweet-potato dessert café by Heian Shrine; opened 18 July 2025)
//   Not reached this round (nearest-first stopped at four drafts): なか卯 烏丸夷川店 (26018543, a national chain), 富易流行 (26045363).
//   Brand checks: data/*.json grepped for お皿とスプーン, きゅうどう, グリルスタンド, grillstand, つむぎカフェ, Tsumugi — no hits;
//   no other worker's pending script names 26022197, 26035847, 26022929, 26032487, 26032193 or 26043335.
//   Pins: Tabelog /en/ geo; not OSM-checked by the worker.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-26';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-100');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26022197', 'retail food shop (Greg 11-07 ruling; integrator ruling 2026-11-26): えびす楽庵 清水販売店 is a takeaway steamed-bun stand on Kiyomizu-zaka, not historic, with no sourced GF or vegan options');
skip('26022929', 'retail food shop (Greg 11-07 ruling): 煎餅堂 is a takeaway senbei shop on Nijo-dori in Okazaki (rice crackers grilled to order and packaged senbei, 2016–2026 reviews); a November 2013 reviewer quotes the shopkeeper saying the senbei are made in the shop but it is part of a chain; no founding date, GF or vegan options sourced');

// ================================================================ お皿とスプーン
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26035847/'; const R = TB + 'dtlrvwlst/';
  const D = day(['15:00', '22:00']);
  put({
    id: 'kyoto_dining_bar_tb26035847_gojo', name: 'お皿とスプーン', category: 'OMNI',
    lat: 34.99437933707009, lng: 135.75724877909514, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Pasta (venison Bolognese, yellowtail with pesto), fish fried or topped with herb breadcrumbs, pâté and bread served with the meat are on the menu (2025–26 reviews); no gluten information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The five-vegetable appetizer plate is a favourite, but a November 2025 plate included potato salad with anchovy and persimmon with butter; most other dishes are meat, game and fish (2023–26 reviews).',
    hours_raw: 'Mon, Tue, Thu–Sun 15:00–22:00 (L.O. 21:30); closed Wednesdays, plus irregular closing days (Tabelog). Reservations by Instagram DM (Tabelog; a May 2024 reviewer booked that way). Cash only — no cards, e-money or QR (Tabelog). A November 2023 reviewer noted a house rule that groups of three or more order at least six dishes. Shoes off in the main room: sofa seats and mismatched tables, plus a brighter counter (2024–25 reviews). Non-smoking (Tabelog). An old townhouse with an ivy-covered entrance among houses in a residential street, 3 min walk west of Exit 8 of Gojo Stn, 257 m (Tabelog; 2024–25 reviews). Bicycles can be left in front of the bicycle shop (Tabelog). Opened 18 April 2021 (Tabelog).',
    hours: { 0: D, 1: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'West of Gojo Stn (Karasuma), Shimogyo — 257 m from Gojo Stn',
    cuisine: 'Wine and small plates: five-vegetable appetizer plate (butternut squash, potato salad with anchovy and olive oil, carrot râpée, semi-dried persimmon with butter, marinated mushrooms), cervelle de canut dip with grapes, pâté de campagne, yellowtail pasta with pesto, confit mackerel with herb breadcrumbs (November 2025); fried fish with nuka-pickle tartare, three-meat platter, venison Bolognese, chocolate terrine (February 2026); fried conger eel, venison steak (August 2025); marinated kochoudai, turnip gratin (November 2023); sparkling wine and ham (May 2023); wine by the bottle (May 2024), white and red (February 2026). About ¥4,000–6,000 per person (2023–26 reviews).',
    website: null, gmaps: gm('お皿とスプーン 京都 銭屋町'), menu_url: null,
    notes: '[Dining bar · Gojo] An old townhouse behind an ivy-hung door west of Gojo Stn: shoes off, sofas and antique furniture, records playing, and wine with plates of seasonal vegetables, pâté, game and pasta. About ¥4,000–6,000; cash only; book by Instagram DM.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened 18 April 2021 (Tabelog). Reviewers describe a dim, wooden old house with antique furniture and records playing (2024–26), the room "like my grandparents\' house" with tables spaced apart (August 2025).',
      philosophy: null,
      specialty: 'Five-vegetable appetizer plate; pâté de campagne; game dishes; wine.',
      anecdotes: [
        { text: 'A party of three in May 2024 found the drink list mostly in English, but a staff member described each of five white wines and their labels; the bill came with the three-way split written beside it, about ¥6,000 each.', source: R + 'B485975973/' },
        { text: 'A November 2023 reviewer liked the marinated kochoudai and turnip gratin, but noted that the posted rules did not mention that groups of three or more must order at least six dishes.', source: R + 'B474893523/' },
        { text: 'Kenji Ozawa\'s "LIFE" was on the turntable during an October 2024 visit; the reviewer left soon after dessert as the dessert menu had no drinks.', source: R + 'B494983180/' },
        { text: 'A March 2026 visitor found the loud music inside a funny contrast with the quiet exterior, and liked the chewy bread that came with the meat.', source: R + 'B525055970/' },
      ],
      japanese_sources_summary: '食べログ: お皿とスプーン、ダイニングバー、下京区銭屋町249、五条駅8番出口から西へ徒歩3分 (257m)、月火木金土日 15:00〜22:00 (L.O. 21:30)、水曜休み、不定休、予約は Instagram の DM、カード・電子マネー・QR 不可、禁煙、カウンター席、2021年4月18日オープン。口コミ (2023〜2026年、英語): 住宅街の古い町家、つたの入口、靴を脱ぐソファ席、アンティークの家具、レコードの音楽、野菜の前菜5種盛り、パテ・ド・カンパーニュ、ジビエ、パスタ、ワイン、1人4,000〜6,000円ほど、3人以上は6品以上の注文 (2023年11月)。',
      confidence: 'medium', sources: [TB, R + 'B474893523/', R + 'B480919770/', R + 'B485975973/', R + 'B486563116/', R + 'B494983180/', R + 'B513508666/', R + 'B516377938/', R + 'B517567446/', R + 'B519181014/', R + 'B521804754/', R + 'B525055970/', R + 'B538171003/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Drink list mostly in English and staff who explain the wines (May 2024 review); booking by Instagram DM (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区銭屋町249',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.994379, 135.757249); not OSM-checked by the worker; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B516377938/', R + 'B521804754/', R + 'B486563116/'],
    price_note: 'No item prices in sources; spending per person from 2023–26 reviews (about ¥5,000 in February 2026; two drinks, four dishes and a dessert for about ¥7,000 for two in May 2024).', last_checked: TODAY, items: [
      it('', '', 'Five-vegetable appetizer plate', '', 'Appetizers', 'ask', 'ask', 'November 2025 and February 2026 reviews; the November plate included potato salad with anchovy and persimmon with butter.', 'vegetable_plate'),
      it('', '', 'Pâté de campagne', '', 'Appetizers', 'ask', 'no', 'May 2024 and November 2025 reviews.', 'pate_de_campagne'),
      it('', '', 'Venison Bolognese pasta', '', 'Pasta', 'no', 'no', 'February 2026 review.', 'venison_bolognese'),
      it('', '', 'Fried fish with nuka-pickle tartare', '', 'Mains', 'ask', 'no', 'February 2026 review.', 'fried_fish_tartare'),
      it('', '', 'Three-meat platter', '', 'Mains', 'ask', 'no', 'February 2026 review; served with bread (March 2026).', 'meat_platter'),
      it('', '', 'Chocolate terrine', '', 'Desserts', 'ask', 'ask', 'February 2026 review.', 'chocolate_terrine'),
    ] }, {
    cuisine: 'ワインと小皿: 野菜の前菜5種盛り (バターナッツかぼちゃ、アンチョビとオリーブオイルのポテトサラダ、キャロットラペ、半生の干し柿とバター、きのこのマリネ)、cervelle de canut のディップとぶどう、パテ・ド・カンパーニュ、はまちのジェノベーゼのパスタ、さばのコンフィのハーブパン粉焼き (2025年11月)、魚のフライのぬか漬けタルタル、肉の3種盛り、鹿肉のボロネーゼ、ショコラテリーヌ (2026年2月)、conger eel の揚げ物、鹿肉のステーキ (2025年8月)、kochoudai のマリネ、かぶのグラタン (2023年11月)、スパークリングワインと生ハム (2023年5月)、ボトルのワイン (2024年5月)、白と赤のワイン (2026年2月)。1人4,000〜6,000円ほど (2023〜26年の口コミ)。',
    neighborhood: '五条駅 (烏丸) の西、下京区。五条駅から257m',
    gf_detail: '要確認。パスタ (鹿肉のボロネーゼ、はまちのジェノベーゼ)、魚のフライやハーブパン粉焼き、パテ、肉に添えるパン (2025〜26年の口コミ)。グルテンの情報はない。',
    vegan_detail: '要確認。野菜の前菜5種盛りが人気だが、2025年11月の盛り合わせにはアンチョビのポテトサラダとバターの干し柿。ほかは肉、ジビエ、魚の料理が多い (2023〜26年の口コミ)。',
    notes: '[ダイニングバー・五条] 五条駅の西、つたの入口の古い町家。靴を脱いで上がる部屋にソファとアンティークの家具、レコードの音楽。季節の野菜、パテ、ジビエ、パスタとワイン。4,000〜6,000円ほど、現金のみ、予約は Instagram の DM。',
  });
}

// ================================================================ 京都寺町 きゅうどう
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26032487/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:30', '14:00'], ['18:00', '23:00']);
  put({
    id: 'kyoto_izakaya_tb26032487_teramachi', name: '京都寺町 きゅうどう (Kyoto Teramachi Kyudo)', category: 'OMNI',
    lat: 35.01676124209573, lng: 135.76717400276, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Fried dishes — chicken nanban, Tatsuta-style karaage, fried horse mackerel — anchor the lunch sets, and bonito is marinated in sweet soy sauce (2024–26 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken and fish izakaya; the lunch soup is made with dashi (February and September 2026 reviews).',
    hours_raw: 'Mon, Tue, Thu–Sun and holidays 11:30–14:00 and 18:00–23:00; closed Wednesdays (Tabelog). Reservations taken; courses from ¥6,000 including tax, with the details arranged by phone (Tabelog). Appetizer charge ¥500 per person (Tabelog, original text お通し代としてお一人様当たり５００円（税込）). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay) and PayPay; no e-money (Tabelog). 36 seats: a ground-floor counter and an upstairs room; private use possible (Tabelog). A September 2025 reviewer describes a private room for four and an upstairs space for up to 24 for private bookings. Heated tobacco only, in a designated area (Tabelog). School-age children welcome (Tabelog); takeaway (Tabelog). On Teramachi-dori north of Takeyamachi, a big lantern at the door; 10 min walk from Keihan Jingu-Marutamachi Stn and from Kyoto Shiyakusho-mae Stn, 488 m from Jingu-Marutamachi (Tabelog; April 2024 review).',
    hours: { 0: D, 1: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Teramachi north of Takeyamachi, near the Imperial Palace — 488 m from Jingu-Marutamachi Stn',
    cuisine: 'Izakaya of Miyazaki jidori chicken and fish: charcoal-grilled jidori thigh, grilled skin and jidori tataki with ponzu (2022–24; the tataki is not served in the colder months, April 2024), bone-in grilled chicken (April 2024), karaage and chicken wings (August 2023), charcoal-grilled vegetables (December 2023); sashimi, grilled young chicken, clay-pot rice (April 2025); eel and rice (May 2025); mixed rice made to order (September 2025). Lunch sets: chicken nanban ¥950 (mayonnaise +¥30, tartar sauce +¥50), vegetable and karaage ¥900, fried horse mackerel ¥850 (March 2024); chicken nanban off the main menu (September 2025); fried horse mackerel and karaage sets with refills of rice (February 2026); marinated bonito bowl ¥1,500 with potato salad and clear soup (September 2026). Sake, shochu and wine; bottled beer, no draught (Tabelog; September 2025). About ¥4,000–5,000 at dinner (2023–25 reviews).',
    website: null, gmaps: gm('京都寺町 きゅうどう'), menu_url: null,
    notes: '[Izakaya · Teramachi] A two-storey izakaya under a big lantern on Teramachi: Miyazaki jidori grilled over charcoal, jidori tataki, sashimi and clay-pot rice at night, and chicken nanban or fried horse mackerel sets at lunch for about ¥900–1,500. Dinner about ¥4,000–5,000; closed Wednesdays.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'A January 2022 reviewer from Miyazaki wrote that the chef trained at a restaurant in Miyazaki; reviewers call it a Miyazaki-style jidori restaurant (2021–23). An August 2023 review is titled "Relocation and Renovation". The owner loves high-school baseball — the upstairs room is hung with jerseys (August 2023) — and a February 2026 reviewer writes that the shop\'s name comes from the owner\'s baseball background. The owner writes the menu by hand each day from the day\'s ingredients (September 2025); an April 2025 reviewer noted more emphasis on fish lately.',
      philosophy: null,
      specialty: 'Charcoal-grilled Miyazaki jidori; jidori tataki; lunch sets.',
      anecdotes: [
        { text: 'An April 2024 diner at the counter was told by the owner that the jidori tataki is not served in the colder months, and took bone-in grilled chicken home.', source: R + 'B484175947/' },
        { text: 'At a September 2025 lunch the staff adjusted the seating height for a family\'s small children; the reviewer, back after a dinner days before, had the off-menu chicken nanban.', source: R + 'B513875793/' },
        { text: 'An April 2025 reviewer found the manager friendly and easy to talk to, but thought guests who dislike a homey atmosphere might find it a bit much.', source: R + 'B505760483/' },
        { text: 'At a February 2026 lunch the owner offered a refill of rice and pointed out that there was more soup.', source: R + 'B523012603/' },
      ],
      japanese_sources_summary: '食べログ: 京都寺町 きゅうどう、居酒屋、中京区寺町通竹屋町上ル下御霊前町647-1、神宮丸太町駅から488m、京阪神宮丸太町駅・地下鉄市役所前駅から徒歩10分、月火木金土日・祝日 11:30〜14:00、18:00〜23:00、水曜休み、予約可、コース6,000円 (税込) から、お通し代500円 (税込)、カード・PayPay 可、36席、貸切可、加熱式たばこのみ喫煙所、子ども可、テイクアウト。口コミ (2021〜2026年、英語): 宮崎の地鶏の炭火焼き、地鶏のたたき、料理人は宮崎の店で修業 (2022年1月)、2階に野球のユニフォーム (2023年8月)、店名は店主の野球から (2026年2月)、手書きの日替わりメニュー (2025年9月)、チキン南蛮定食950円、あじフライ定食850円 (2024年3月)、かつおの漬け丼1,500円 (2026年9月)。',
      confidence: 'medium', sources: [TB, R + 'B444037025/', R + 'B475552533/', R + 'B477331650/', R + 'B481688253/', R + 'B483349249/', R + 'B484175947/', R + 'B484782111/', R + 'B505760483/', R + 'B506413476/', R + 'B513875793/', R + 'B523012603/', R + 'B538454620/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A handwritten daily menu (September 2025 review); course details arranged by phone, and phone service may be Japanese only (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区寺町通竹屋町上ル下御霊前町647-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated February and September 2026.' },
    pin_source: `Tabelog ${TB} (35.016761, 135.767174); not OSM-checked by the worker; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B481688253/', R + 'B538454620/', TB],
    price_note: 'Lunch prices from March 2024 and September 2026 reviews; course price and appetizer charge from Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Course (from)', '¥6,000', 'Course', 'ask', 'no', 'Tabelog; tax included; details arranged by phone.', 'course'),
      it('', '', 'Chicken nanban set meal', '¥950', 'Lunch', 'no', 'no', 'March 2024 review; mayonnaise +¥30, tartar sauce +¥50.', 'chicken_nanban_set'),
      it('', '', 'Vegetable and karaage set meal', '¥900', 'Lunch', 'no', 'no', 'March 2024 review.', 'karaage_set'),
      it('', '', 'Fried horse mackerel set meal', '¥850', 'Lunch', 'no', 'no', 'March 2024 review.', 'aji_fry_set'),
      it('', '', 'Marinated bonito bowl', '¥1,500', 'Lunch', 'ask', 'no', 'September 2026 review; with potato salad and clear soup.', 'katsuo_zuke_don'),
      it('', '', 'Charcoal-grilled jidori', '', 'Mains', 'ask', 'no', '2022–24 reviews.', 'jidori_grill'),
    ] }, {
    cuisine: '宮崎の地鶏と魚の居酒屋: 地鶏のもも肉の炭火焼き、皮焼き、ポン酢の地鶏のたたき (2022〜24年。たたきは寒い時期は出ない、2024年4月)、骨付きの焼き鳥 (2024年4月)、唐揚げと手羽先 (2023年8月)、野菜の炭火焼き (2023年12月)、お造り、ひな鶏の焼き物、土鍋ごはん (2025年4月)、うなぎとごはん (2025年5月)、好みで作る混ぜごはん (2025年9月)。昼の定食: チキン南蛮950円 (マヨネーズ+30円、タルタルソース+50円)、野菜と唐揚げ900円、あじフライ850円 (2024年3月)、メニューにないチキン南蛮 (2025年9月)、あじフライと唐揚げの定食、ごはんのおかわり (2026年2月)、かつおの漬け丼1,500円、ポテトサラダとすまし汁つき (2026年9月)。日本酒、焼酎、ワイン、瓶ビール (生ビールなし、2025年9月)。夜は4,000〜5,000円ほど (2023〜25年の口コミ)。',
    neighborhood: '寺町通竹屋町の北、御所の近く。神宮丸太町駅から488m',
    gf_detail: '要確認。昼の定食はチキン南蛮、竜田揚げの唐揚げ、あじフライなどの揚げ物。かつおは甘いしょうゆの漬け (2024〜26年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。鶏と魚の居酒屋。昼の汁物はだし (2026年2月と9月の口コミ)。',
    notes: '[居酒屋・寺町] 寺町通の大きな提灯の2階建ての居酒屋。夜は宮崎の地鶏の炭火焼き、地鶏のたたき、お造り、土鍋ごはん。昼はチキン南蛮やあじフライの定食が900〜1,500円ほど。夜は4,000〜5,000円ほど、水曜休み。',
  });
}

// ================================================================ 洋食グリルスタンド
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26032193/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://grillstand.jp/';
  const D = day(['11:30', '13:30'], ['17:30', '20:00']);
  put({
    id: 'kyoto_grill_stand_higashinotoin', name: '洋食グリルスタンド (Grill Stand)', category: 'MOM_AND_POP',
    lat: 34.9918043878783, lng: 135.76101263022827, cuisine_type: 'yoshoku',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Pork cutlet, fried oysters and mixed fry are breaded, the Napolitan is spaghetti, and the curry and hayashi rice are house-made sauces with no ingredient list (official menu); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: every set is beef, pork, oysters or egg (official menu); no vegan dish sourced.',
    hours_raw: 'Official site: 11:30–13:30 and 17:30–20:00; closed Tuesdays and the 4th Wednesday; may close early when ingredients run out. Tabelog lists 11:30–14:30 (L.O. 14:00) and 17:30–21:30 (L.O. 21:00), closed Tuesdays; a November 2025 reviewer found it closing at 20:00. No reservations for seats — guests are seated in order of arrival; cash only; no takeaway (official site). Groups of four or more, guests not ordering food, and children of primary-school age or younger are not admitted (official site, original text 食事の御注文をされない方、四名様以上のグループ、小学生以下のお子様のご入店をお断りさせていただきます). Seven counter seats around the kitchen (official site). No smoking anywhere, e-cigarettes included (official site). On Higashinotoin-dori north of Shomen-dori, about 10 min walk from the JR Kyoto Stn central exit and 7 min from Exit 5 of Gojo Stn (official site); bicycles can be left in front of the shop sign (official site). Notices in English inside (October 2026 review).',
    hours: { 0: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Higashinotoin between Kyoto Station and Higashi Honganji — 418 m from Gojo Stn',
    cuisine: 'Yoshoku set meals (official menu, tax included; sets come with soup, Western-style okara and salad): domestic beef fillet steak ¥4,700, beef-fillet steak bowl ¥4,200, beef curry ¥2,100, hayashi rice ¥2,100, pork fillet cutlet with mustard sauce ¥1,850, demi-glace hamburg steak ¥1,850, fried oysters from Hinase, Okayama (five, with house tartar sauce) ¥1,850, omurice with Tamba eggs and house ketchup ¥1,600, sizzling-plate Napolitan ¥1,500; coffee after lunch ¥250; seasonal gelato ¥200; house fruit-syrup drinks ¥400. Dinner à la carte (paused in the busy season): beef stew ¥2,750, Tamba beef fillet steak ¥5,800. Reviews: fried oyster set ¥1,750 with ginger clam chowder (November 2025); demi-glace hamburg set ¥1,850 with pumpkin soup (October 2026); omurice (August 2026); beef curry (June 2024).',
    website: SITE, gmaps: gm('洋食グリルスタンド 京都'), menu_url: SITE + 'menu/',
    notes: '[Yoshoku · Higashinotoin] A seven-seat counter in a renovated townhouse near Higashi Honganji where the owner-chef, a Tsuji-trained former hotel chef, cooks every set alone: demi-glace hamburg, omurice, beef curry and Hinase oysters in winter, with everything from soup to ketchup made in-house. ¥1,500–4,700; cash only, no bookings.',
    chef_bio: { chef_name: 'Tomoya Itoh (伊藤智哉)', roles: ['Owner-chef'], origin: null,
      background: 'The official site lists the career of the chef and owner, 伊藤智哉 (Tomoya Itoh): a graduate of 辻フランス料理専門学校 in Abeno, Osaka; the Western banquet kitchen and the French restaurant 「ル・パラディ」 of 株式会社伊良湖ガーデンホテル in Aichi; the Italian 「ストリーム」 and French 「フルーヴ」 of ホテルグランヴィア大阪; eighth head chef of the Osaka French restaurant 「アーゴ」 (which the site says ran for 37 years); second head chef of 「Cook＆Deli プレサンテ」; then director and chef of ﾌｰｽﾞﾊﾞﾝｸｲﾝﾀｰﾅｼｮﾅﾙ株式会社, developing sauces and deli dishes for ホテルグランヴィア京都, products for 阪急阪神百貨店, and the signature croquettes of お菜屋「わだ家」, a shop produced by 和田アキ子. The site\'s posts start in April 2019, when the shop appeared in the new-openings corner of the local site まいぷれ.',
      philosophy: 'The site calls it a shop for the Western-style dishes Japanese people love, with soups, curry, ketchup and dressings all made in-house by the owner, and invites guests to talk food with the owner across the counter.',
      specialty: 'Beef stew (the dinner speciality); demi-glace hamburg steak; omurice; beef curry; fried oysters in winter.',
      anecdotes: [
        { text: 'Arriving at about 19:20 on a holiday weekend in November 2025 without a booking, a diner got a seat at the U-shaped counter, where the owner cooks and serves alone, and had five juicy fried oysters with tartar sauce.', source: R + 'B517926958/' },
        { text: 'A January 2026 diner came for the winter-only fried oysters and ordered them without looking at the rest of the menu.', source: R + 'B521721852/' },
        { text: 'An October 2026 reviewer noticed a new white noren on the renovated townhouse and notices in English inside, and found two small hamburg steaks in a light, slightly sweet demi-glace.', source: R + 'B537289753/' },
        { text: 'After a visit to Shosei-en garden in September 2025, a diner had the demi-glace hamburg lunch with chestnut gelato and iced coffee, and liked the okara on the side.', source: R + 'B513898013/' },
      ],
      japanese_sources_summary: '公式サイト (grillstand.jp): 洋食グリルスタンド、下京区東洞院通正面上ル筒金町51-2、11:30〜13:30、17:30〜20:00、火曜と第四水曜休み、カウンター席のみ7席、席の予約不可、現金のみ、テイクアウトなし、四名様以上のグループ・小学生以下のお子様はお断り、全面禁煙、スープ・カレー・ケチャップ・ドレッシングまで店主の手作り、セットはスープ・洋風おから・サラダつき、国産牛ヒレ肉ステーキ4,700円、ビーフカレーライス2,100円、デミグラスソースハンバーグ1,850円、カキフライ (岡山県日生産) 1,850円、オムライス1,600円、鉄板ナポリタン1,500円。シェフ 伊藤智哉 (Tomoya Itoh)、辻フランス料理専門学校卒、ホテルグランヴィア大阪ほか、フレンチ「アーゴ」8代目料理長。2019年4月、まいぷれの新店オープンに掲載。食べログ: 五条駅から418m、火曜休み。口コミ (2024〜2026年、英語): 店主がひとりでカウンターを切り盛り、冬のカキフライ、英語の案内。',
      confidence: 'high', sources: [SITE, SITE + 'menu/', SITE + 'alacarte/', SITE + 'chef/', SITE + 'access/', SITE + 'blog-190423', 'https://www.instagram.com/grillstand110/', TB, R + 'B494477086/', R + 'B513898013/', R + 'B517926958/', R + 'B521721852/', R + 'B537289753/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Notices in English inside (October 2026 review); counter seating with the owner; no groups of four or more and no children of primary-school age or younger (official site).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市下京区東洞院通正面上ル筒金町51-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with posts dated through October 2026 and a closure notice for 24–26 November 2026; Tabelog reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (34.991804, 135.761013); not OSM-checked by the worker; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE + 'menu/', SITE + 'alacarte/'],
    price_note: 'Official menu, tax included (read November 2026); set prices include soup, Western-style okara and salad; à la carte prices in brackets on the site. The November 2025 fried oyster set was ¥1,750.', last_checked: TODAY, items: [
      it('国産牛ヒレ肉ステーキ', '', 'Domestic beef fillet steak set', '¥4,700', 'Set meals', 'ask', 'no', 'Official menu; à la carte ¥4,250.', 'beef_fillet_steak'),
      it('ビフテキ丼', '', 'Beef-fillet steak bowl set', '¥4,200', 'Set meals', 'ask', 'no', 'Official menu; à la carte ¥3,750.', 'steak_bowl'),
      it('ビーフカレーライス', '', 'Beef curry rice set', '¥2,100', 'Set meals', 'ask', 'no', 'Official menu; à la carte ¥1,650.', 'beef_curry'),
      it('ハヤシライス', '', 'Hayashi rice set', '¥2,100', 'Set meals', 'ask', 'no', 'Official menu; à la carte ¥1,650.', 'hayashi_rice'),
      it('ポークヒレカツ', '', 'Pork fillet cutlet set', '¥1,850', 'Set meals', 'no', 'no', 'Official menu; à la carte ¥1,400.', 'pork_fillet_katsu'),
      it('デミグラスソースハンバーグ', '', 'Demi-glace hamburg steak set', '¥1,850', 'Set meals', 'ask', 'no', 'Official menu; à la carte ¥1,400.', 'hamburg_steak'),
      it('カキフライ', '', 'Fried oysters set (five, from Hinase)', '¥1,850', 'Set meals', 'no', 'no', 'Official menu; à la carte ¥1,400; winter only (January 2026 review).', 'kaki_fry'),
      it('オムライス', '', 'Omurice set', '¥1,600', 'Set meals', 'ask', 'no', 'Official menu; à la carte ¥1,200; large +¥150.', 'omurice'),
      it('鉄板ナポリタンスパゲッティ', '', 'Sizzling-plate Napolitan spaghetti set', '¥1,500', 'Set meals', 'no', 'no', 'Official menu; à la carte ¥1,100; large +¥150.', 'napolitan'),
      it('ビーフシチュー', '', 'Beef stew (dinner)', '¥2,750', 'À la carte', 'ask', 'no', 'Official à la carte menu, dinner only; paused in the busy season.', 'beef_stew'),
    ] }, {
    cuisine: '洋食の定食 (公式メニュー、税込。セットはスープ・洋風おから・サラダつき): 国産牛ヒレ肉ステーキ4,700円、ビフテキ丼4,200円、ビーフカレーライス2,100円、ハヤシライス2,100円、ポークヒレカツ1,850円、デミグラスソースハンバーグ1,850円、岡山県日生産のカキフライ5個と自家製タルタルソース1,850円、丹波産の卵と自家製トマトケチャップのオムライス1,600円、鉄板ナポリタンスパゲッティ1,500円、ランチの食後のコーヒー250円、季節のジェラート200円、自家製シロップドリンク400円。夜の単品 (繁忙期は休止): ビーフシチュー2,750円、丹波牛ヒレステーキ5,800円。口コミ: カキフライ定食1,750円としょうがのクラムチャウダー (2025年11月)、デミグラスソースハンバーグ定食1,850円とかぼちゃのスープ (2026年10月)、オムライス (2026年8月)、ビーフカレー (2024年6月)。',
    neighborhood: '東洞院通、京都駅と東本願寺のあいだ。五条駅から418m',
    gf_detail: '要確認。ポークヒレカツ、カキフライ、ミックスフライは衣つき、ナポリタンはスパゲッティ、カレーとハヤシライスは自家製のルーで材料の記載はない (公式メニュー)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。セットはどれも牛肉、豚肉、カキ、卵の料理 (公式メニュー)。ヴィーガンの料理は確認できない。',
    notes: '[洋食・東洞院] 東本願寺の近く、改装した町家のカウンター7席。辻フランス料理専門学校を出てホテルで働いた店主がひとりで作る、デミグラスソースハンバーグ、オムライス、ビーフカレー、冬は日生のカキフライ。スープからケチャップまで手作り。1,500〜4,700円、現金のみ、予約不可。',
  });
}

// ================================================================ つむぎカフェ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26043335/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '18:00']);
  put({
    id: 'kyoto_tsumugi_cafe_okazaki', name: 'つむぎカフェ (Tsumugi Cafe)', category: 'OMNI',
    lat: 35.01094509208408, lng: 135.78255130587354, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Pancakes, spaghetti and nama-fu (wheat gluten) are on the menu (2026 reviews); no gluten information for the sweet-potato desserts.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The sweet-potato desserts use dairy (salted-butter soft serve; the shop\'s Tabelog text), and the lunch plates have hamburg steak and cod roe; the lemon drinks use lemons pickled in honey (July 2026). Salads (two of five to choose, July 2026), kinpira and carrot râpée appear on the plates, but none is described as vegan.',
    hours_raw: 'Daily 11:00–18:00 (food L.O. 17:30), with occasional irregular closures (Tabelog). Lunch ended at 15:00 on a January 2026 visit, with an all-day menu after. No reservations; takeaway (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), transport IC, iD, QUICPay and PayPay (Tabelog). 20 seats at a counter, tables and sofas; wheelchair accessible; free Wi-Fi; English menu (Tabelog). Children and strollers welcome (Tabelog). Non-smoking (Tabelog). In ポルトド岡崎 101 on Jingumichi, 1 min from the Jingu-michi bus stop, 5 min walk from Higashiyama Stn, near Heian Shrine and the Kyoto City Kyocera Museum of Art (Tabelog). Full within half an hour of an 11:00 opening in September 2026; a November 2026 reviewer suggests coming at opening time. Opened 18 July 2025 (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Okazaki, Jingumichi by Heian Shrine and the museums — 334 m from Higashiyama Stn',
    cuisine: 'Café of sweet-potato desserts and lunch plates: baked sweet potato with salted-butter soft serve and baked sweet-potato pancakes (the shop\'s Tabelog text); sweet-potato pancakes with sweet-potato cream (January 2026), pancakes about ¥1,500 for two (November 2026); sweet-potato ice cream with a cat face, homemade lemon squash with organic lemons pickled in honey (July 2026); Heian Shrine lemon squash that changes colour as the syrup goes in, omurice plate (September 2026); plate of two potato salads, Japanese-style hamburg steak, carrot râpée, kinpira and salad with mini soft serve, garlic tarako spaghetti with soup ¥1,500 (April 2026); Neapolitan ¥1,500 and seafood three-colour rice bowl (January 2026); matcha latte about ¥900 (June 2026); nama-fu, sencha cheesecake (October 2026); Heartland beer.',
    website: null, gmaps: gm('つむぎカフェ 京都 岡崎'), menu_url: null,
    notes: '[Café · Okazaki] A cat-themed café on Jingumichi by Heian Shrine and the art museums, run by an owner from Tokachi, Hokkaido: baked-sweet-potato soft serve with salted butter, sweet-potato pancakes, lemon squash, and lunch plates. Two shop cats come in on a few days a month. About ¥1,000–2,000.',
    chef_bio: { chef_name: null, roles: [], origin: 'Tokachi, Hokkaido (the owner; the shop\'s Tabelog text)',
      background: 'Opened 18 July 2025 (Tabelog). The shop\'s own Tabelog text says the owner comes from Tokachi in Hokkaido and builds original recipes featuring local dairy products and seasonal ingredients, with homemade drinks made with lemons from Awaji Island. Two cats are on a calendar for about two working days a month (April 2026 review) and were seen at the register in June, July, August and October 2026.',
      philosophy: null,
      specialty: 'Baked sweet potato with salted-butter soft serve; sweet-potato pancakes; lemon squash.',
      anecdotes: [
        { text: 'An August 2026 visitor who had been handed a flyer at the opening finally took away the baked-sweet-potato salted-butter soft serve, and found two cats asleep by the register.', source: R + 'B534140551/' },
        { text: 'In June 2026 a guest came on hearing a cat was in unexpectedly; the staff brought the cat over with a toy.', source: R + 'B530972714/' },
        { text: 'A January 2026 reviewer found the ¥1,500 Neapolitan disappointing — thin sausage and little pepper — while a companion liked the seafood rice bowl; an April 2026 couple found the garlic tarako spaghetti hardly tasted of garlic but liked the mini soft serve.', source: R + 'B521012039/' },
        { text: 'An October 2026 reviewer noted many visitors from overseas during the Ghibli exhibition at the nearby museum; in November 2026 Ghibli music played as visitors came from the exhibition.', source: R + 'B538414671/' },
      ],
      japanese_sources_summary: '食べログ (店舗の公式情報): つむぎカフェ、カフェ・スイーツ・ソフトクリーム、左京区岡崎円勝寺町140 ポルトド岡崎 101、東山駅から徒歩5分 (334m)、バス停「神宮道」から徒歩1分、毎日 11:00〜18:00 (フードL.O. 17:30)、不定休あり、予約不可、テイクアウト、カード・交通系IC・iD・QUICPay・PayPay 可、20席、車いす可、英語メニュー、子ども可、2025年7月18日オープン。店主は北海道十勝の出身、焼き芋の塩バターソフトクリーム、焼き芋のパンケーキ、淡路島のレモンのドリンク、猫のインテリア。口コミ (2026年、英語): 看板猫が月2回ほど出勤、ナポリタン1,500円、たらこスパゲッティ1,500円、抹茶ラテ900円ほど、海外からの客が多い (2026年10月)。',
      confidence: 'medium', sources: [TB, R + 'B521012039/', R + 'B521863454/', R + 'B527084424/', R + 'B530972714/', R + 'B531442520/', R + 'B532520035/', R + 'B534140551/', R + 'B535867351/', R + 'B537762699/', R + 'B537884115/', R + 'B538414671/', R + 'B538425896/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); many overseas visitors (October 2026 review); friendly staff (2026 reviews).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区岡崎円勝寺町140 ポルトド岡崎 101',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (official information); reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.010945, 135.782551); same building as kyoto_hourandou_heian_jingu (ポルト・ド岡崎 105, 35.010867, 135.78249), about 10 m apart; not OSM-checked by the worker; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B521012039/', R + 'B527084424/', R + 'B530972714/', R + 'B538425896/'],
    price_note: 'Prices from 2026 reviews; the shop\'s own menu prices were not seen.', last_checked: TODAY, items: [
      it('', '', 'Baked sweet potato with salted-butter soft serve', '', 'Sweets', 'ask', 'no', 'The shop\'s Tabelog text; taken away in August 2026.', 'sweet_potato_soft_serve'),
      it('', '', 'Baked sweet-potato pancakes', '', 'Sweets', 'no', 'ask', 'The shop\'s Tabelog text; about ¥1,500 for two (November 2026).', 'sweet_potato_pancakes'),
      it('', '', 'Garlic tarako spaghetti with soup', '¥1,500', 'Lunch', 'no', 'no', 'April 2026 review.', 'tarako_spaghetti'),
      it('', '', 'Neapolitan spaghetti', '¥1,500', 'Lunch', 'no', 'no', 'January 2026 review; on the all-day menu.', 'napolitan'),
      it('', '', 'Omurice plate', '', 'Lunch', 'ask', 'no', 'September and October 2026 reviews.', 'omurice_plate'),
      it('', '', 'Homemade lemon squash', '', 'Drinks', 'ask', 'no', 'July 2026 review; lemons pickled in honey.', 'lemon_squash'),
      it('', '', 'Matcha latte', '¥900', 'Drinks', 'ask', 'ask', 'June 2026 review ("around ¥900").', 'matcha_latte'),
    ] }, {
    cuisine: 'さつまいものスイーツと昼のプレートのカフェ: 焼き芋の塩バターソフトクリーム、焼き芋のパンケーキ (店の食べログの紹介文)、さつまいものクリームのパンケーキ (2026年1月)、パンケーキ2人分で1,500円ほど (2026年11月)、猫の顔のさつまいものアイス、はちみつ漬けの有機レモンの自家製レモンスカッシュ (2026年7月)、シロップを入れると色が変わる平安神宮のレモンスカッシュ、オムライスのプレート (2026年9月)、2種のポテトサラダ、和風ハンバーグ、キャロットラペ、きんぴら、サラダとミニソフトクリームのプレート、にんにくのたらこスパゲッティとスープ1,500円 (2026年4月)、ナポリタン1,500円と海鮮の三色丼 (2026年1月)、抹茶ラテ900円ほど (2026年6月)、生麩、煎茶のチーズケーキ (2026年10月)、Heartland のビール。',
    neighborhood: '岡崎、平安神宮と美術館の近くの神宮道。東山駅から334m',
    gf_detail: '要確認。パンケーキ、スパゲッティ、生麩 (小麦グルテン) がある (2026年の口コミ)。さつまいものスイーツのグルテンの情報はない。',
    vegan_detail: '要確認。さつまいものスイーツは乳製品を使う (塩バターのソフトクリーム、店の食べログの紹介文)。昼のプレートはハンバーグやたらこ。レモンのドリンクははちみつ漬けのレモン (2026年7月)。サラダ (5種から2つ、2026年7月)、きんぴら、キャロットラペもあるが、ヴィーガンとは書かれていない。',
    notes: '[カフェ・岡崎] 平安神宮と美術館の近く、神宮道の猫のカフェ。北海道十勝出身の店主の、焼き芋の塩バターソフトクリーム、さつまいものパンケーキ、レモンスカッシュ、昼のプレート。看板猫は月に数日の出勤。1,000〜2,000円ほど。',
  });
}

save();
