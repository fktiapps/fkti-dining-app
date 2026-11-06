// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 14.
//   + 京フレンチきしもと Kyo French Kishimoto (Kyoto-style French on Pontocho, with a Kamo River yuka May–September)
//   + ぎをん縄手 とり安 Gion Nawate Tori Yasu (mizutaki house founded 1955; reopened 1 March 2026)
//   + 肉料理 澁谷 Niku Ryori Shibuya (raw-and-grilled beef in a machiya near City Hall; father and daughter; since 2019)
//   + 炭棲堂 Sumizumi Do (irori charcoal izakaya and vegetable breakfast by Kyoto Station Hachijo exit; since 2025)
//   - 浅野日本酒店KYOTO (26038010): skipped (same-name chain, reason below).
//   Picked on 2026-11-05: from `queue.mjs kyoto-missed next core 200`, lane ids 26000684, 26038010 (skipped), 26002442;
//   from `next notable 200`: 26032586, 26042786. None is in data/kyoto.json: grep by name (きしもと/Kishimoto, とり安/Tori Yasu,
//   澁谷/Shibuya, 炭棲堂/Sumizumi) and address (若松町141, 弁財天町18, 西革堂193, 東九条西山王町12) found none.
//   Same-name count (Greg's Samboa ruling): 浅野日本酒店 has five shops (skipped). No second shop found for きしもと, 縄手 とり安
//   or 肉料理 澁谷. 炭棲堂 is a single shop, but a Leaf KYOTO PR article names its operator as the Kyoto izakaya group 五十家
//   (Isoya), whose other shops carry other names (焼野菜 五十家, イソスタンド, 五十棲, isoizm and others; one Tabelog review says
//   seven shops in Kyoto) — sister concepts, not a same-name chain; drafted and flagged for the coordinator.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-14');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26038010', '浅野日本酒店KYOTO: a same-name chain (Greg, 2026-11-05: five or more same-name shops) — the operator 株式会社浅野日本酒店 says on its Makuake project page (https://www.makuake.com/project/asano-nihonshuten06/, read 2026-11-05) that it has four shops in Osaka, Kyoto, Kobe and Tokyo and that Yokohama is the fifth; an April 2026 Tabelog review (B527461930) lists Umeda, Hamamatsucho, Yokohama and Sannomiya besides Kyoto');

// ================================================================ 京フレンチきしもと
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26000684/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.french-kishimoto.com/'; const ABOUT = SITE + 'about/index.html'; const MENU = SITE + 'menu/index.html';
  const H = day(['11:30', '14:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_kyo_french_kishimoto', name: '京フレンチきしもと (Kyo French Kishimoto)', category: 'OMNI',
    lat: 35.006865, lng: 135.771227, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Set courses of hors d’oeuvres, soup, amadai meunière or beef fillet, and dessert; soy sauce is used as a hidden seasoning (official site); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: every course centres on fish meunière or beef fillet, with cream soups and gratins (official site).',
    hours_raw: 'Official site: lunch 11:30–14:00 (L.O. 13:30), dinner 17:00–22:00 (L.O. 21:00); closed Tuesday; tables limited to two hours. Tabelog gives dinner L.O. 21:30. Reservations by phone only (official site). Kamo River yuka (riverside terrace) 1 May–30 September, dinner only except lunch in May and September; outside the yuka season a terrace for two a day, with 10% added (official site). Cards (official site: VISA only; Tabelog: VISA, Master, AMEX, Diners) at dinner only — cash at lunch. 16 seats: 10 at the counter, 6 at tables; 16 more on the summer terrace (Tabelog). Non-smoking (Tabelog). On Pontocho south of Sanjo, 5 min from Hankyu Kawaramachi (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Pontocho south of Sanjo, on the Kamo River — 5 min from Hankyu Kawaramachi Stn',
    cuisine: '“Kyoto-style” French: French technique with Kyoto ingredients and seasonings — soy sauce as a hidden seasoning, beef steak with fresh wasabi, duck with black shichimi — eaten with chopsticks (official site; 2025–2026 reviews) · dinner courses A ¥6,600, B ¥8,800, C ¥13,200, chef’s selection ¥16,500; lunch A ¥4,400, B ¥6,600, C ¥11,000; yuka courses ¥7,260–18,150 (official site) · each built from hors d’oeuvres, soup, amadai meunière and/or beef fillet, dessert and coffee or herb tea · example dishes: salmon with grape and pear jelly, persimmon and barracuda with sesame sauce, kuruma prawn and pumpkin gratin, crab and autumn vegetable salad, mushroom cream soup, amadai with sweet potato and chestnut sauce (official site) · summer yuka menus with hamo and Kamo eggplant (official site) · wine',
    website: SITE, gmaps: gm('京フレンチきしもと 先斗町'), menu_url: MENU,
    notes: '[French · Pontocho, French with chopsticks above the Kamo River] A long-running Pontocho French restaurant where a chef of more than twenty years in French cooking hides soy sauce in the sauces, serves the beef fillet with fresh wasabi and lays chopsticks on the table. From May to September you can eat on the yuka over the Kamo River at dusk. Courses only: a sea bream meunière or beef fillet at the centre, from ¥4,400 at lunch and ¥6,600 at dinner (more on the yuka). Book by phone; two-hour seating; cash only at lunch; closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)'], origin: null,
      background: 'The official site describes cooking from more than twenty years devoted to French cuisine, built on French technique with Kyoto ingredients and seasonings. The yuka stands on a former teahouse’s terrace (official site). A September 2025 regular found the restaurant unchanged as Pontocho changed after the pandemic.',
      philosophy: 'A light, easy-to-eat French for all ages, adapted to Kyoto (official site).', specialty: 'Beef fillet steak with fresh wasabi; amadai meunière.',
      anecdotes: [
        { text: 'A September 2025 regular recalled the chef explaining that soy sauce and other Japanese flavours go into the cooking as a hidden seasoning.', source: R + 'B513967987/' },
        { text: 'In July 2025, after rain, the chef and staff still let a pair dine on the riverside terrace; the reviewer had chosen French because the companion does not like raw food.', source: R + 'B511141068/' },
        { text: 'A May 2026 pair on the terrace at 6 p.m. on a Sunday were the only guests on the yuka all evening, while the Pontocho alley outside was full of visitors from abroad.', source: R + 'B528437405/' },
      ],
      japanese_sources_summary: '公式サイト: 京フレンチ 先斗町きしもと、中京区先斗町三条下ル若松町141番地、昼11:30〜14:00 (L.O.13:30)、夜17:00〜22:00 (L.O.21:00)、火曜休み、予約は電話のみ、カードは VISA のみ、昼はカード不可、席は2時間まで、鴨川納涼床は5月1日〜9月30日 (5月と9月は昼も)、床の時期以外は1日2名のテラス席 (別途10%)。フレンチ一筋20年余、隠し味に醤油、ステーキにワサビ、鴨に黒七味、箸を添える。夜のコース6,600円〜16,500円、昼4,400円〜11,000円、床のコース7,260円〜18,150円、甘鯛のムニエルか牛フィレ肉。食べログ: 16席 (カウンター10、テーブル6、夏は床16席)、禁煙。口コミ (2022〜2026年、英語): 床で食べるフレンチ、箸で食べる、柔らかいフィレ、デザート3種。',
      confidence: 'medium', sources: [TB, SITE, ABOUT, MENU, R + 'B452761937/', R + 'B475289098/', R + 'B487040249/', R + 'B507970065/', R + 'B511141068/', R + 'B513967987/', R + 'B525959196/', R + 'B528437405/', R + 'B532282363/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book by phone; two-hour seating; cash only at lunch; chopsticks provided.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区先斗町通三条下ル若松町141',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.006865, 135.771227); cross-checked: GSI 京都府京都市中京区若松町141番地 (lot) 36m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU],
    price_note: 'Official site menu page, read 2026-11-05; dishes change with the day’s ingredients.', last_checked: TODAY, items: [
      it('', '', 'Dinner A course (3 hors d’oeuvres, soup, amadai meunière or beef fillet steak, dessert, coffee or herb tea)', '¥6,600', 'Dinner', 'ask', 'no', 'Official site.', 'dinner_a'),
      it('', '', 'Dinner B course (4 hors d’oeuvres)', '¥8,800', 'Dinner', 'ask', 'no', 'Official site.', 'dinner_b'),
      it('', '', 'Dinner C course (amadai and beef fillet)', '¥13,200', 'Dinner', 'ask', 'no', 'Official site.', 'dinner_c'),
      it('', '', 'Chef’s selection course', '¥16,500', 'Dinner', 'ask', 'no', 'Official site.', 'dinner_chef'),
      it('', '', 'Lunch A course', '¥4,400', 'Lunch', 'ask', 'no', 'Official site.', 'lunch_a'),
      it('', '', 'Lunch B course', '¥6,600', 'Lunch', 'ask', 'no', 'Official site.', 'lunch_b'),
      it('', '', 'Lunch C course', '¥11,000', 'Lunch', 'ask', 'no', 'Official site.', 'lunch_c'),
      it('', '', 'Yuka A course (May–September)', '¥7,260', 'Yuka', 'ask', 'no', 'Official site.', 'yuka_a'),
    ] }, {
    cuisine: '「京風」フレンチ: フレンチの技術に京都の食材と調味料、隠し味に醤油、ステーキに生わさび、鴨に黒七味、お箸で食べる (公式サイト、2025〜2026年の口コミ)・夜のコース A 6,600円、B 8,800円、C 13,200円、シェフ特選 16,500円、昼 A 4,400円、B 6,600円、C 11,000円、床のコース 7,260〜18,150円 (公式サイト)・オードブル、スープ、甘鯛のムニエルや牛フィレ肉、デザート、コーヒーかハーブティー・料理の一例: サーモンと葡萄と梨のジュレ、柿とカマスの胡麻ソース、車海老とかぼちゃのグラタン、蟹と秋野菜のサラダ、マッシュルームのクリームスープ、甘鯛のムニエルのサツマイモと栗のソース (公式サイト)・夏の床は鱧や Kamo なす (公式サイト)・ワイン',
    neighborhood: '三条の南の先斗町、鴨川沿い。阪急河原町駅から徒歩5分',
    gf_detail: '要確認。オードブル、スープ、甘鯛のムニエルか牛フィレ肉、デザートのコース。隠し味に醤油を使う (公式サイト)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガンではない。どのコースも甘鯛のムニエルか牛フィレ肉が中心で、クリームスープやグラタンも (公式サイト)。',
    notes: '[フレンチ・先斗町、鴨川を望むお箸のフレンチ] 先斗町で長く続くフレンチ。フレンチ一筋20年余の料理人が、ソースに醤油をしのばせ、牛フィレには生わさびを添え、テーブルにはお箸を置く。5月から9月は鴨川の納涼床で夕暮れの食事を。コースのみで、甘鯛のムニエルか牛フィレが主役、昼4,400円から、夜6,600円から (床はやや高め)。予約は電話で、席は2時間、昼は現金のみ、火曜休み。',
  });
}

// ================================================================ ぎをん縄手 とり安
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26002442/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://toriyasu.net/'; const INFO = SITE + 'information/'; const MENU = SITE + 'menu/';
  const NOTICE = 'https://toriyasu.net/2026/02/21/%e9%87%8d%e8%a6%81%e3%80%80%e5%96%b6%e6%a5%ad%e5%86%8d%e9%96%8b%e3%81%ae%e3%81%8a%e7%9f%a5%e3%82%89%e3%81%9b/';
  const H = day(['17:00', '22:00']);
  put({
    id: 'kyoto_gion_nawate_toriyasu', name: 'ぎをん縄手 とり安 (Gion Nawate Tori Yasu)', category: 'OMNI',
    lat: 35.006056, lng: 135.772815, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The mizutaki is a white chicken-bone broth (seasoned with salt and ginger, per an October 2026 review) eaten with house ponzu; the course also has simmered liver, salt-grilled thigh, and udon or zosui to finish; ponzu and the liver seasoning are not described (official site; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken house — chicken-bone broth, Tanba chicken, liver (official site).',
    hours_raw: 'Official site: 17:00–22:00, last entry 21:00; closed Monday and Thursday. Tabelog asks for entry by 20:30. Reopened on 1 March 2026 after a long closure, with fewer seats and mainly by reservation (official notice, 21 February 2026). Reservations online or by phone; changes by the day before (Tabelog). Prices include tax and service (official site). Cards: VISA, Master, JCB, AMEX; no e-money or QR (Tabelog). 15 seats with a counter, tatami rooms for 2 and 4; the upstairs tatami room has tables and chairs (Tabelog; October 2026). Non-smoking (Tabelog). Children welcome (Tabelog). On Nawate in Gion, 3 min from Gion-Shijo and Sanjo Stns (Tabelog).',
    hours: { 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nawate in Gion, near Shinbashi — 3 min from Keihan Gion-Shijo Stn',
    cuisine: 'Mizutaki specialist since 1955: a white chicken-bone broth simmered for a full day with well water from the premises, morning-killed Kyoto Tanba chicken, house ponzu (official site) · mizutaki course ¥11,000 — simmered liver, salt-grilled thigh with three seasonal vegetables, mizutaki, zosui, fruit (official site) · chicken sukiyaki course ¥9,500 (official site) · à la carte: simmered liver ¥1,300, salt-grilled or teriyaki thigh ¥2,000, karaage ¥2,200, duck loin ¥2,500, zosui ¥1,200 (official site) · Kyoto sake, shochu, Suntory whiskies, wine (official site)',
    website: SITE, gmaps: gm('ぎをん縄手 とり安'), menu_url: MENU,
    notes: '[Mizutaki · Gion Nawate, seventy years of white chicken broth] A Gion house that has served one thing since 1955: mizutaki, Tanba chicken in a milky chicken-bone broth simmered for a day with well water from under the shop, dipped in house ponzu and finished as zosui. The ¥11,000 course starts with simmered liver and salt-grilled thigh. It reopened on 1 March 2026 after a long closure, with fewer seats — book ahead. Tatami rooms upstairs have tables and chairs. Closed Monday and Thursday.',
    chef_bio: { chef_name: null, roles: ['Head chef and owner (named only in Japanese on the official site; no reading given)'], origin: null,
      background: 'Per the official site: founded in 1955 by the previous owner, 岸澤邦夫, in Kawaramachi-Takoyakushi, and moved in 1962 to the present spot on Nawate at Shinbashi in Gion; a white-broth mizutaki specialist ever since. The February 2026 reopening notice is signed 岸澤邦和. An October 2026 diner mentions a head chef and an owner.',
      philosophy: 'To keep the taste inherited from the previous owner while staying aware of the times (official site).', specialty: 'Mizutaki in white chicken-bone broth.',
      anecdotes: [
        { text: 'A regular of about twenty years was saddened to hear early in 2026 that the shop would close for a long time, and came back as soon as it reopened.', source: R + 'B524637668/' },
        { text: 'Asked in July 2025 how much zosui to serve, a diner said half a bowl; the staff answered, "Just enough to float away!"', source: R + 'B509985858/' },
        { text: 'A June 2025 diner who does not eat liver asked for the liver starter to be swapped, and the kitchen obliged.', source: R + 'B508918773/' },
      ],
      japanese_sources_summary: '公式サイト: ぎをん縄手とり安、東山区弁財天町18、創業七十年の水だき専門店、昭和30年に先代の岸澤邦夫が河原町蛸薬師で開業、昭和37年に祇園縄手新橋へ移転、白い鶏がらスープ、朝びきの京都丹波地鶏、敷地内の井戸の東山の名水で丸一日かけて取るスープ、自家製ポン酢、17:00〜22:00 (入店21:00まで)、月・木休み、特選水だきコース11,000円、特選すき焼きコース9,500円 (税・サ込)、一品料理 (肝だき、もも肉塩焼き、唐揚げ、鴨ロース、雑炊)。2026年2月21日のお知らせ: 3月1日から営業再開、席数を絞り予約中心、署名は岸澤邦和。食べログ: 15席、個室 (2人・4人)、禁煙、カード可、子ども可。口コミ (2025〜2026年、英語): 肝だき、もも肉の塩焼き、水だき、雑炊、果物、70年のスープ。',
      confidence: 'medium', sources: [TB, SITE, INFO, MENU, NOTICE, R + 'B485726396/', R + 'B508517925/', R + 'B508918773/', R + 'B509985858/', R + 'B524637668/', R + 'B530316360/', R + 'B533703857/', R + 'B534697089/', R + 'B537277271/', R + 'B537826882/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; tax and service included; chairs in the upstairs tatami room.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区弁財天町18',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (reopened 1 March 2026); Tabelog reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.006056, 135.772815); cross-checked: GSI 京都府京都市東山区弁財天町18番地 (lot) 24m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU],
    price_note: 'Official site menu page, read 2026-11-05; tax and service included.', last_checked: TODAY, items: [
      it('特選水だきコース', '', 'Mizutaki course (simmered liver, salt-grilled thigh and vegetables, mizutaki, zosui, fruit)', '¥11,000', 'Courses', 'ask', 'no', 'Official site.', 'mizutaki_course'),
      it('特選すき焼きコース', '', 'Chicken sukiyaki course', '¥9,500', 'Courses', 'ask', 'no', 'Official site.', 'sukiyaki_course'),
      it('特製肝だき', '', 'Simmered chicken liver', '¥1,300', 'À la carte', 'ask', 'no', 'Official site.', 'kimodaki'),
      it('もも肉塩焼き', '', 'Salt-grilled chicken thigh', '¥2,000', 'À la carte', 'ask', 'no', 'Official site.', 'momo_shioyaki'),
      it('もも肉唐揚げ', '', 'Chicken thigh karaage', '¥2,200', 'À la carte', 'ask', 'no', 'Official site.', 'karaage'),
      it('〆のお雑炊', '', 'Closing zosui', '¥1,200', 'À la carte', 'ask', 'no', 'Official site.', 'zosui'),
    ] }, {
    cuisine: '1955年創業の水だき専門店: 敷地内の井戸水で丸一日かけて取る白い鶏がらスープ、朝びきの京都丹波地鶏、自家製ポン酢 (公式サイト)・特選水だきコース11,000円、肝だき、もも肉塩焼きと季節野菜三種盛、水だき、雑炊、フルーツ (公式サイト)・特選すき焼きコース9,500円 (公式サイト)・一品: 特製肝だき1,300円、もも肉の塩焼きか照焼き2,000円、唐揚げ2,200円、鴨ロース2,500円、雑炊1,200円 (公式サイト)・京都の日本酒、焼酎、サントリーのウイスキー、ワイン (公式サイト)',
    neighborhood: '祇園の縄手、新橋の近く。京阪祇園四条駅から徒歩3分',
    gf_detail: '要確認。水だきは白い鶏がらスープ (2026年10月の口コミでは塩と生姜で味付け) を自家製ポン酢で。コースには肝だき、もも肉塩焼き、〆のうどんか雑炊。ポン酢と肝だきの味付けの説明はない (公式サイト、口コミ)。',
    vegan_detail: 'ヴィーガンではない。鶏の店で、鶏がらスープ、丹波地鶏、肝 (公式サイト)。',
    notes: '[水だき・祇園縄手、七十年の白い鶏がらスープ] 1955年から水だきひとすじの祇園の店。丹波地鶏を、店の井戸水で丸一日かけた白濁の鶏がらスープで炊き、自家製ポン酢で食べ、雑炊で締める。11,000円のコースは肝だきともも肉の塩焼きから。長い休業を経て2026年3月1日に席数を絞って再開したので、予約がおすすめ。2階の座敷はテーブルと椅子。月・木休み。',
  });
}

// ================================================================ 肉料理 澁谷
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26032586/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '21:00']);
  put({
    id: 'kyoto_niku_ryori_shibuya', name: '肉料理 澁谷 (Niku Ryori Shibuya)', category: 'OMNI',
    lat: 35.014867, lng: 135.768606, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Raw and grilled beef with sauces and mustard, salted grills, stews, a hot pot and tail soup; the sauces are not described (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a beef restaurant — raw tongue, heart, yukhoe, tripe, grilled cuts, tail soup (2026 reviews).',
    hours_raw: '17:00–21:00; closed Wednesday; hours may change (Tabelog). Reservations only (Tabelog); hard to get through by phone, but callbacks come and same-day bookings sometimes work (March–September 2026). Cards: VISA, Master, JCB, AMEX, Diners; IC cards, iD, QUICPay; no QR (Tabelog). Counter and tatami room; private rooms for 10–20 (Tabelog); about ten guests in all (July 2026). Non-smoking (Tabelog). In a renovated machiya in a lane off Kawaramachi north of Ebisugawa, 5 min from Kyoto Shiyakusho-mae Stn exit 16 (Tabelog; 2026 reviews). Opened 9 June 2019 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'A lane off Kawaramachi north of Ebisugawa — 5 min from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Beef kappo in small plates: no fixed brand of beef, the best available each time (Tabelog) · a set ordering rule — dishes come in order from the right of the menu until an off-menu Yanagawa-style dish marks the break, skipping any you decline, then free ordering (September 2026) · raw tongue, raw heart and yukhoe ¥1,200 each, blanched mino ¥1,200, salad ¥400 (September 2026) · grilled mino ¥2,500, tail soup ¥1,000; salt-grilled tongue, tripe and loin; stews and a hot pot (2026 reviews) · courses on request (Tabelog) · sake, shochu, wine (Tabelog)',
    website: null, gmaps: gm('肉料理 澁谷 京都'), menu_url: null,
    notes: '[Beef · Kyoto City Hall, raw tongue and heart in a machiya] A renovated machiya in a lane near City Hall, opened in 2019 by a chef who for many years led the kitchen at Anzan, the old Gion meat restaurant, and runs it with the chef’s daughter. Beef arrives in small plates in menu order — raw tongue, raw heart and yukhoe (¥1,200 each), blanched mino — until a Yanagawa-style dish signals the break; then order freely from the grill: tongue, tripe, loin, tail soup. About ten seats; reservations only, and the phone is busy. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Chef-owner (unnamed), formerly head chef at Anzan in Gion', 'The chef’s daughter, front of house'], origin: null,
      background: 'Per Tabelog’s shop note: the chef was head chef for many years at the well-known Anzan in Gion before going independent and opened Niku Ryori Shibuya with the chef’s daughter on 9 June 2019. A March 2026 reviewer describes a skilled chef and a friendly daughter.',
      philosophy: 'Not tied to any beef brand; the best quality available each time (Tabelog shop note).', specialty: 'Raw tongue, raw heart and yukhoe; Yanagawa-style beef.',
      anecdotes: [
        { text: 'A September 2026 diner who could not book Anzan alone came here instead, struggled to get through on the phone, got a callback, and saw why — the phone in front of the counter rang constantly.', source: R + 'B536468940/' },
        { text: 'An April 2026 solo traveller had the counter alone just after opening on a weekday and found the young proprietress friendly.', source: R + 'B527478002/' },
        { text: 'A May 2026 solo diner at Golden Week found it tasty but not extraordinary for the price and did not plan to return.', source: R + 'B529716585/' },
      ],
      japanese_sources_summary: '食べログ: 肉料理 澁谷、牛料理・日本料理、中京区河原町夷川西入一筋目上ル西革堂193-1、京都市役所前駅16番出口から北へ徒歩5分、17:00〜21:00、水曜休み、完全予約制、カード可、電子マネー可、個室 (10〜20人)、禁煙、2019年6月9日オープン。店の紹介: 祇園の名店 Anzan で長く料理長を務めて独立、娘と開業、銘柄にこだわらずその時の最良の牛肉、アラカルト中心でコースも相談可。口コミ (2026年、英語): 生のタン、ハツ、ユッケ各1,200円、湯引きのミノ、サラダ400円、柳川風、焼きミノ2,500円、テールスープ1,000円、町家を改装した店、メニューの右から順に出てくる独特の注文の仕方。',
      confidence: 'medium', sources: [TB, R + 'B522770718/', R + 'B523417504/', R + 'B525423277/', R + 'B526668873/', R + 'B527478002/', R + 'B529320412/', R + 'B529716585/', R + 'B531751126/', R + 'B532735815/', R + 'B536468940/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Reservations only, by phone (keep trying); a set ordering rule; raw beef dishes.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区河原町夷川西入一筋目上ル西革堂193-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.014867, 135.768606); cross-checked: GSI 京都府京都市中京区西革堂町193番地 (lot) 17m — the Tabelog form 西革堂193-1 needed 町 added for a lot match; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536468940/'],
    price_note: 'No menu read; prices from a September 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Raw tongue', '¥1,200', 'Raw', 'ask', 'no', 'September 2026.', 'raw_tongue'),
      it('', '', 'Raw heart', '¥1,200', 'Raw', 'ask', 'no', 'September 2026.', 'raw_heart'),
      it('', '', 'Yukhoe', '¥1,200', 'Raw', 'ask', 'no', 'September 2026.', 'yukhoe'),
      it('', '', 'Blanched mino (tripe)', '¥1,200', 'Small plates', 'ask', 'no', 'September 2026.', 'yubiki_mino'),
      it('', '', 'Salad', '¥400', 'Small plates', 'ask', '', 'September 2026.', 'salad'),
      it('', '', 'Grilled mino', '¥2,500', 'Grill', 'ask', 'no', 'September 2026.', 'grilled_mino'),
      it('', '', 'Tail soup', '¥1,000', 'Soup', 'ask', 'no', 'September 2026.', 'tail_soup'),
    ] }, {
    cuisine: '小皿で出す牛肉の割烹: 銘柄にこだわらず、その時いちばんの牛肉 (食べログ)・独特の注文の仕方: メニューの右から順に出て、メニューにない柳川風が出たら区切り、不要な品は断れ、その後は自由に追加 (2026年9月)・生のタン、生のハツ、ユッケ各1,200円、湯引きのミノ1,200円、サラダ400円 (2026年9月)・焼きミノ2,500円、テールスープ1,000円、タン、ミノ、ロースの塩焼き、煮込みと鍋 (2026年の口コミ)・コースも相談可 (食べログ)・日本酒、焼酎、ワイン (食べログ)',
    neighborhood: '夷川の北、河原町から入った路地。京都市役所前駅から徒歩5分',
    gf_detail: '要確認。生と焼きの牛肉にタレやからし、塩焼き、煮込み、鍋、テールスープ。タレの説明はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。牛肉の店で、生のタン、ハツ、ユッケ、ミノ、焼き物、テールスープ (2026年の口コミ)。',
    notes: '[牛肉料理・市役所前、町家で味わう生のタンとハツ] 市役所近くの路地、改装した町家で2019年に開いた店。祇園の老舗 Anzan で長く料理長を務めた主人が、娘と営む。牛肉はメニューの順に小皿で、生のタン、ハツ、ユッケ (各1,200円)、湯引きのミノと続き、柳川風が出たら区切り。あとは焼きのタン、ミノ、ロース、テールスープなどを自由に。10席ほど、完全予約制で電話はつながりにくい。水曜休み。',
  });
}

// ================================================================ 炭棲堂
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26042786/'; const R = TB + 'dtlrvwlst/';
  const LEAF = 'https://www.leafkyoto.net/en/?p=157796';
  const HB = day(['08:00', '12:00'], ['17:00', '23:00']); const HD = day(['17:00', '23:00']);
  put({
    id: 'kyoto_sumizumido_hachijo', name: '炭棲堂 (Sumizumi Do)', category: 'OMNI',
    lat: 34.982782, lng: 135.760566, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Charcoal-grilled vegetables and meat with soy-based sauces such as fermented-butter soy and dashi soy; yuba tempura and fries on the menu; no gluten information (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Many vegetable dishes — grilled vegetables, yudofu in a broth of nine vegetables, nine small dishes at breakfast — but sauces include dashi and butter and the meat dishes are many; the kitchen adjusted dishes for a pregnant guest and an onion-averse guest (2026 reviews).',
    hours_raw: 'Breakfast 8:00–12:00 Monday and Thursday–Sunday, in three reserved seatings at 8:00, 9:15 and 10:30 (Tabelog; September 2026); dinner 17:00–23:00 daily; charcoal-grill orders by 22:00 (October 2026); hours may change (Tabelog). Reservations accepted (Tabelog). Cards, e-money and QR accepted (Tabelog). Counter around an irori on the first floor, tables on the second (Tabelog; October 2026). Half portions for solo diners on many items (October 2026). Non-smoking (Tabelog). In a back lane 4 min from the JR Hachijo exit of Kyoto Station (October 2026). Opened 26 March 2025 (Tabelog; Leaf KYOTO).',
    hours: { 0: HB, 1: HD, 2: HD, 3: HB, 4: HB, 5: HB, 6: HB }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Behind the Kyoto Station Hachijo exit — 4 min on foot',
    cuisine: 'Irori izakaya of binchotan grilling and vegetables from its own ISO FARM and partner farmers (Leaf KYOTO, a PR article) · charcoal-grilled vegetables ¥800 — lotus root with wild boar mince, shiitake with fermented-butter soy; onion with sakura shrimp and dashi soy; sweet potato with black tea, lemon and honey (2026 reviews) · domestic beef hanging tender 150 g ¥2,800, black wagyu inside round 200 g ¥3,800 (October 2026) · seared bonito and vegetable carpaccio ¥1,300, spicy chicken ¥1,300, yudofu ¥800, yuba and okra tempura with Nara pickles ¥950, venison and apple salad, fries with black-shichimi butter soy (2026 reviews) · breakfast ¥2,400: rice, white-miso soup, nine small dishes and a huge yudofu in vegetable broth (September–October 2026)',
    website: null, gmaps: gm('炭棲堂 京都 八条口'), menu_url: null,
    notes: '[Izakaya · Kyoto Station Hachijo, charcoal and farm vegetables] A few minutes from the Hachijo exit, an irori counter where vegetables from the group’s own farm and partner growers go over binchotan: shiitake with fermented-butter soy, onion with sakura shrimp, a sweet potato with tea, lemon and honey that eats like dessert, then wagyu by weight. Many dishes come in half portions for solo diners. In the morning it turns into a reserved breakfast (¥2,400) of nine small dishes, rice and a vast block of tofu in vegetable broth. Opened 2025.',
    chef_bio: { chef_name: null, roles: ['Operated by the Kyoto izakaya group 五十家 (Isoya), per Leaf KYOTO'], origin: null,
      background: 'Leaf KYOTO (a PR article) introduces it as a new concept from the izakaya group 五十家, with irori and charcoal grilling, using vegetables from the group’s own ISO FARM and partner farmers; opened 26 March 2025.',
      philosophy: null, specialty: 'Charcoal-grilled vegetables; vegetable breakfast with yudofu.',
      anecdotes: [
        { text: 'A September 2026 breakfast guest was startled by the size of the tofu, and loved the broth made from nine vegetables most of all — finishing it with a spoon.', source: R + 'B535113235/' },
        { text: 'An October 2026 solo traveller wrote it was worth taking the Shinkansen for, praised the half portions, and was walked to the door on leaving.', source: R + 'B537491355/' },
        { text: 'An October 2026 breakfast guest who noted a dislike of onions at booking found a different dish prepared instead.', source: R + 'B538105724/' },
      ],
      japanese_sources_summary: '食べログ: 炭棲堂、居酒屋、南区東九条西山王町12-7、京都駅から305m、月・木〜日 8:00〜12:00 と 17:00〜23:00、火・水 17:00〜23:00、予約可、カード・電子マネー・QR可、禁煙、2025年3月26日オープン。Leaf KYOTO (PR記事): 五十家グループの新業態、自社農園 ISO FARM と提携農家の野菜。口コミ (2026年、英語): 炭火焼き野菜800円、蓮根の猪ミンチのせ、椎茸の発酵バター醤油、国産牛ハラミ150g 2,800円、黒毛和牛内もも200g 3,800円、鰹と野菜のカルパッチョ1,300円、湯豆腐800円、湯葉とオクラの天ぷら950円、朝ごはん2,400円 (小鉢9品、大きな湯豆腐、9種の野菜の出汁)、一人客にハーフサイズ。',
      confidence: 'medium', sources: [TB, LEAF, R + 'B535113235/', R + 'B535866588/', R + 'B535907993/', R + 'B536776520/', R + 'B536854336/', R + 'B536924582/', R + 'B537334167/', R + 'B537491355/', R + 'B537810906/', R + 'B538105724/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book breakfast seatings ahead; half portions for solo diners; cards and QR accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市南区東九条西山王町12-7',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.982782, 135.760566); cross-checked: GSI 京都府京都市南区東九条西山王町12番地 (lot) 30m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537334167/', R + 'B535113235/'],
    price_note: 'No menu read; prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Charcoal-grilled lotus root with wild boar mince', '¥800', 'Charcoal vegetables', 'ask', 'no', 'October 2026.', 'renkon_inoshishi'),
      it('', '', 'Charcoal-grilled shiitake with fermented-butter soy', '¥800', 'Charcoal vegetables', 'ask', 'no', 'October 2026.', 'shiitake_butter_shoyu'),
      it('', '', 'Domestic beef hanging tender, 150 g', '¥2,800', 'Charcoal meat', 'ask', 'no', 'October 2026.', 'harami_150'),
      it('', '', 'Black wagyu inside round, 200 g', '¥3,800', 'Charcoal meat', 'ask', 'no', 'October 2026.', 'uchimomo_200'),
      it('', '', 'Yudofu', '¥800', 'Dishes', 'ask', 'ask', 'October 2026.', 'yudofu'),
      it('', '', 'Seared bonito and vegetable carpaccio', '¥1,300', 'Dishes', 'ask', 'no', 'October 2026.', 'katsuo_carpaccio'),
      it('', '', 'Yuba and okra tempura with Nara pickles', '¥950', 'Dishes', 'no', 'ask', 'October 2026.', 'yuba_okra_tempura'),
      it('', '', 'Breakfast: small vegetable dishes and chilled tofu', '¥2,400', 'Breakfast', 'ask', 'ask', 'September 2026.', 'breakfast'),
    ] }, {
    cuisine: '備長炭で焼く囲炉裏の居酒屋。野菜は自社農園 ISO FARM と提携農家から (Leaf KYOTO、PR記事)・炭火焼き野菜800円: 蓮根の猪ミンチのせ、椎茸の発酵バター醤油。桜えびと出汁醤油の玉ねぎ、紅茶とレモンと蜂蜜のさつまいも (2026年の口コミ)・国産牛ハラミ150g 2,800円、黒毛和牛内もも200g 3,800円 (2026年10月)・鰹と野菜のカルパッチョ1,300円、よだれ鶏1,300円、湯豆腐800円、湯葉とオクラの天ぷら 奈良漬添え950円、鹿肉とりんごのサラダ、黒七味バター醤油のフライドポテト (2026年の口コミ)・朝ごはん2,400円: ご飯、白味噌の味噌汁、小鉢9品、野菜の出汁の大きな湯豆腐 (2026年9〜10月)',
    neighborhood: '京都駅八条口の裏手。徒歩4分',
    gf_detail: '要確認。炭火焼きの野菜と肉に発酵バター醤油や出汁醤油などのタレ。湯葉の天ぷらやフライドポテトもある。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: '要確認。焼き野菜、9種の野菜の出汁の湯豆腐、朝の小鉢9品など野菜料理は多いが、タレには出汁やバターを使い、肉料理も多い。妊婦の客や玉ねぎが苦手な客に合わせて料理を変えてくれた (2026年の口コミ)。',
    notes: '[居酒屋・京都駅八条口、炭火と畑の野菜] 八条口から数分、囲炉裏のカウンターで、グループの自社農園と提携農家の野菜を備長炭で焼く。発酵バター醤油の椎茸、桜えびをのせた玉ねぎ、デザートのような紅茶とレモンと蜂蜜のさつまいも、そしてグラム売りの和牛。一人ならハーフサイズで頼める料理が多い。朝は予約制の朝ごはん (2,400円) で、小鉢9品とご飯、野菜の出汁に大きな豆腐。2025年開店。',
  });
}

save();
