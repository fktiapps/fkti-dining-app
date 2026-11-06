// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 40.
//   + あなご料理 大金 Anago Ryori Oogane (conger-eel specialist near Shijo-Nishinotoin; since 2014)          [core]
//   + Karasumaoike UI (French bistro in a renovated machiya by Karasuma Oike)                                [core]
//   + ロティー チキン アンド ジャッキー タコス Roti Chicken & Jackie Tacos (rotisserie chicken and tacos)       [notable]
//   + 京都ダイナー Kyoto Diner (wine bar of 160 wines and black-wagyu roast beef near Nishiki; since 2012)   [notable]
//   - 葱や平吉 高瀬川店 — KIWA group restaurant (official page on kiwa-group.co.jp): sub-brand of a large parent.
//   Same-name counts first (same brand or operator): 大金 1; UI 1; ロティー 1; 京都ダイナー 1 (58DINER in data is
//   unrelated).
//   Taken in queue order on 2026-11-06: core 26024603, 26032133; notable (26002547 skip), 26025041, 26019479. None
//   drafted is in data/kyoto.json by name or address.
//   Service charges checked against Tabelog's Japanese original: UI 「チャージ料なし」; 京都ダイナー 「380円
//   付き出し（税込）」; 大金 and ロティー have no section.
//   Pins: 大金's address matches only to town level (and GSI's town point is 860 m off), so loc_precise false.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-40');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26002547', 'sub-brand of a large parent: 葱や平吉 高瀬川店 is a KIWA group restaurant (its site is kiwa-group.co.jp/negiya_takasegawa); KIWA is on the large-parent list');

// ================================================================ あなご料理 大金
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26024603/'; const R = TB + 'dtlrvwlst/';
  const D = ['18:00', '22:00']; const L = ['11:45', '14:00'];
  put({
    id: 'kyoto_anago_ryori_oogane', name: 'あなご料理 大金 (Anago Ryori Oogane)', category: 'OMNI',
    lat: 34.999740, lng: 135.755060, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Anago sashimi, salt-grilled anago and shabu-shabu in bone broth beside tempura, fries and sauce-glazed eel (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a conger-eel restaurant (Tabelog).',
    hours_raw: 'Lunch Wed, Thu and Sat 11:45–14:00 (last order 13:30); dinner Mon–Sat 18:00–22:00 (last seating 20:00); closed Sunday (Tabelog). Bookings taken; a ¥2,000 fee for same-day cancellations (Tabelog). Tabelog lists cards (VISA, Master, AMEX); an October 2026 lunch guest was told cash only. Lunch is all non-smoking; separate smoking hours otherwise (Tabelog). 12 seats: 6 at the counter, tables for 2 and 4 (Tabelog). The owner cooks alone at the counter, with a partner front of house (2025–26 reviews). At Takatsuji and Nishinotoin; 5–7 min from Shijo or Karasuma Stn (Tabelog; November 2025 review).',
    hours: { 0: day(D), 1: day(D), 2: day(L, D), 3: day(L, D), 4: day(D), 5: day(L, D) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Takatsuji-Nishinotoin, south of Shijo-Karasuma',
    cuisine: 'Conger eel every way, with anago from Tsushima (Tabelog): anago sashimi, salt- or sauce-grilled premium anago sold by weight, shabu-shabu in a broth of over 250 anago bones with seri, live anago tempura from the tank, fried bones, anago kamameshi; lunch sets — the Anago Zen (Ume) ¥1,500 (June 2026), the daily gozen (Take) ¥2,300 with kamameshi and sashimi (November 2025), simmered or grilled anago rice bowls, anago fry; omakase dinners about ¥10,000–15,000; sake (2025–26 reviews)',
    website: null, gmaps: gm('あなご料理 大金'), menu_url: TB + 'dtlmenu/',
    notes: "[Anago (conger eel) · Takatsuji-Nishinotoin] A small counter devoted to conger eel, rare in Kyoto: sashimi, grilled anago, shabu-shabu in a deep bone broth, tempura from the tank and anago kamameshi. Lunch sets ¥1,500–2,300 three days a week; omakase dinner ¥10,000–15,000. Closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed), with a partner front of house'], origin: null,
      background: 'Opened 20 October 2014 (Tabelog). Reviewers describe the owner working alone at the counter (December 2025, May 2026) and a couple running the restaurant (October 2026).',
      philosophy: 'To change the fixed idea of conger eel (Tabelog).',
      specialty: 'Anago shabu-shabu; live anago tempura; anago kamameshi.',
      anecdotes: [
        { text: 'Lunch days grew to Wednesday, Thursday and Saturday, a regular of five visits noted in November 2025.', source: R + 'B452981371/' },
        { text: 'A December 2025 diner found the anago fry served a little cold and wondered whether that was deliberate.', source: R + 'B518865289/' },
        { text: 'On a second visit in October 2026, a guest was remembered by the chef.', source: R + 'B531832341/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): あなご料理 大金、あなご・魚介料理・居酒屋、下京区高辻西洞院町801-5、四条駅・烏丸駅から徒歩5分、ランチは水木土 11:45〜14:00、ディナーは月〜土 18:00〜22:00 (最終入店20:00)、日曜休み、当日キャンセルは2,000円、12席 (カウンター6、テーブル2・4)、カード可、昼は全席禁煙、2014年10月20日オープン、対馬の穴子、250尾以上の骨の出汁のしゃぶしゃぶ、生け簀の穴子の天ぷら。口コミ (2025年8月〜2026年10月、英語): 刺身、白焼きとたれ焼き (量り売り)、骨せんべい、穴子の釜飯、穴子膳 梅1,500円、日替わり御膳 竹2,300円、煮穴子丼と焼き穴子丼、穴子フライ、おまかせコース、店主一人で調理、夫婦で営む、現金のみという声、フライが冷たかったという声。',
      confidence: 'medium', sources: [TB, R + 'B452981371/', R + 'B512260345/', R + 'B516601336/', R + 'B518865289/', R + 'B529549587/', R + 'B530254232/', R + 'B531832341/', R + 'B534481514/', R + 'B536721598/', R + 'B537503556/'] },
    cultural_comfort: { level: 'japanese', note: 'Small counter; the chef explains sizes and prices of anago sold by weight.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市下京区高辻西洞院町801-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.999740, 135.755060); GSI matched only the town (京都府京都市下京区西洞院町), so loc_precise false; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B530254232/', R + 'B452981371/'],
    price_note: 'No menu read; lunch prices from 2025–26 reviews.', last_checked: TODAY, items: [
      it('', '', 'Anago Zen (Ume) lunch set', '¥1,500', 'Lunch', 'ask', 'no', 'June 2026 review.', 'anago_zen_ume'),
      it('', '', 'Daily gozen (Take) with anago kamameshi and sashimi', '¥2,300', 'Lunch', 'ask', 'no', 'November 2025 review.', 'gozen_take'),
      it('', '', 'Anago shabu-shabu', '', 'Dinner', 'ask', 'no', 'December 2025 review.', 'anago_shabu'),
    ] }, {
    cuisine: 'Tsushima の穴子をあらゆる形で (食べログ): 穴子の刺身、量り売りの上穴子の白焼きやたれ焼き、250尾以上の骨の出汁にセリのしゃぶしゃぶ、生け簀から揚げる穴子の天ぷら、骨せんべい、穴子の釜飯。ランチは穴子膳 (梅) 1,500円 (2026年6月)、釜飯と刺身の日替わり御膳 (竹) 2,300円 (2025年11月)、煮穴子丼や焼き穴子丼、穴子フライ。夜のおまかせは1万〜1万5千円ほど、日本酒も (2025〜26年の口コミ)',
    neighborhood: '四条烏丸の南、高辻西洞院',
    gf_detail: '要確認。穴子の刺身、白焼き、骨の出汁のしゃぶしゃぶと、天ぷら、フライ、たれ焼き (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。穴子料理の店 (食べログ)。',
    notes: '[穴子料理・高辻西洞院] 京都では珍しい穴子料理の小さなカウンター。刺身、焼き穴子、骨の深い出汁のしゃぶしゃぶ、生け簀からの天ぷら、穴子の釜飯。ランチは週3日で1,500〜2,300円、夜のおまかせは1万〜1万5千円。日曜休み。',
  });
}

// ================================================================ Karasumaoike UI
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26032133/'; const R = TB + 'dtlrvwlst/';
  const L = ['11:30', '15:00']; const W = day(L, ['18:00', '22:30']);
  put({
    id: 'kyoto_karasumaoike_ui', name: 'Karasumaoike UI', category: 'OMNI',
    lat: 35.012248, lng: 135.758523, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. French bistro courses with pasta and baguette; meat and fish mains also offered (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses of fish, lamb and beef; cheese terrine (2026 reviews).',
    hours_raw: 'Tue–Sat 11:30–15:00 (last order 14:20) and 18:00–22:30 (last order 21:00); Sun 11:30–15:00; closed Monday (when Monday is a holiday, closed Monday evening and Tuesday) (Tabelog). Bookings taken; the dinner course needs a reservation for two or more a few days ahead; à la carte orders by phone only (Tabelog; March 2026 review). One drink per person (March and July 2026 reviews). Charge: Tabelog\'s Japanese original says 「チャージ料なし」 — no cover charge. Cards, IC cards and PayPay (Tabelog). 18 seats at the counter and tables, some facing a small garden; non-smoking, smoking spot in the garden (Tabelog; July 2026 review). In a renovated machiya entered from the west side of Ryogaemachi-dori; 3 min from Karasuma Oike Stn exit 2 (Tabelog).',
    hours: { 1: W, 2: W, 3: W, 4: W, 5: W, 6: day(L) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'West of Karasuma Oike — 3 min from Karasuma Oike Stn',
    cuisine: 'Delicate French bistro cooking, eaten with chopsticks (Tabelog; March 2026 review): prix-fixe lunch from ¥2,800 with pasta as the base main and supplements for others (July 2026) — sweetfish confit, bavette steak, Angus beef, roast lamb, the signature palette salad with edible flowers, house baguette; a ¥10,000 dinner course; à la carte such as sweet sea bream, beef heart and bouillabaisse rice with a crisp crust; cheese terrines, including a blue-cheese one, to finish or take away; sake and wine pairings (2026 reviews)',
    website: null, gmaps: gm('Karasumaoike UI'), menu_url: TB + 'dtlmenu/',
    notes: "[French bistro · Karasuma Oike] A stylish renovated machiya with a small garden, serving delicate, flower-strewn French plates you can eat with chopsticks: prix-fixe lunches from ¥2,800, a ¥10,000 dinner course, and a much-praised cheese terrine. One drink per person; closed Monday.",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)'], origin: null,
      background: 'Per Tabelog: a French bistro in a renovated Kyoto machiya using seasonal ingredients for delicate, gentle flavours.',
      philosophy: 'To give guests inspiration and joy through seasonal French cooking (Tabelog).',
      specialty: 'Cheese terrine; seasonal course.',
      anecdotes: [
        { text: 'A March 2026 diner found the pasta salty and the dressing divisive, and cost performance average with the one-drink rule — but loved the room.', source: R + 'B525262575/' },
        { text: 'On a near-40°C July 2026 day, a garden-side table grew hot through the glass, and hot soup spaghetti felt out of season.', source: R + 'B532367450/' },
        { text: 'An April 2026 lunch guest found most mains carried a supplement and only one was included in the base price.', source: R + 'B526620062/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): Karasumaoike UI、ビストロ・フレンチ・創作料理、中京区押小路通両替町西入金吹町459、烏丸御池駅2番出口から徒歩3分、火〜土 11:30〜15:00・18:00〜22:30、日 11:30〜15:00、月曜休み、チャージ料なし、アラカルトは電話予約のみ、18席、禁煙 (坪庭に喫煙スペース)、カード・電子マネー・PayPay 可、京町家を改装、1万円のコース、日本酒やワインのペアリング。口コミ (2026年2〜10月、英語): 箸で食べるフレンチ、2,800円からのプリフィクスランチ (パスタが基本で追加料金のメイン)、鮎のコンフィ、バヴェットステーキ、アンガス牛、仔羊のロースト、パレットサラダ、自家製バゲット、チーズのテリーヌ (ブルーチーズも)、ブイヤベースのごはん、ワンドリンク制、塩気が強いという声、夏の庭側の席は暑いという声。',
      confidence: 'medium', sources: [TB, R + 'B468247290/', R + 'B525262575/', R + 'B525365995/', R + 'B526620062/', R + 'B527425620/', R + 'B529350624/', R + 'B531166480/', R + 'B532367450/', R + 'B533047968/', R + 'B538004470/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Prix-fixe menu with supplements; one drink per person.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区押小路通両替町西入金吹町459',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.012248, 135.758523); cross-checked: GSI 京都府京都市中京区金吹町459番地 (lot) 54m; 8.6 m from kyoto_muromachi_yui; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B531166480/', TB],
    price_note: 'No menu read; lunch floor from a July 2026 review; dinner course from Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Prix-fixe lunch (pasta main; supplements for others)', '¥2,800~', 'Lunch', 'no', 'no', 'July 2026 review.', 'prix_fixe_lunch'),
      it('', '', 'Dinner course', '¥10,000', 'Courses', 'ask', 'no', 'Tabelog.', 'dinner_course'),
      it('', '', 'Cheese terrine', '', 'Desserts', 'ask', 'no', '2026 reviews.', 'cheese_terrine'),
    ] }, {
    cuisine: '箸で食べる繊細なフレンチビストロ (食べログ、2026年3月の口コミ): 2,800円からのプリフィクスランチはパスタが基本で、ほかのメインは追加料金 (2026年7月)。鮎のコンフィ、バヴェットステーキ、アンガス牛、仔羊のロースト、エディブルフラワーの看板のパレットサラダ、自家製バゲット。1万円のディナーコース。アラカルトは甘鯛、牛ハツ、おこげのできるブイヤベースのごはん。締めや持ち帰りにチーズのテリーヌ (ブルーチーズも)。日本酒やワインのペアリング (2026年の口コミ)',
    neighborhood: '烏丸御池の西の押小路。烏丸御池駅から徒歩3分',
    gf_detail: '要確認。パスタやバゲットのあるフレンチビストロのコース。肉や魚のメインもある (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚、仔羊、牛肉のコース、チーズのテリーヌ (2026年の口コミ)。',
    notes: '[フレンチビストロ・烏丸御池] 坪庭のある改装町家のおしゃれな店で、花を散らした繊細なフレンチを箸で。プリフィクスランチは2,800円から、ディナーコース1万円、評判のチーズのテリーヌ。ワンドリンク制。月曜休み。',
  });
}

// ================================================================ ロティー チキン アンド ジャッキー タコス
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26025041/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:00'], ['18:00', '23:00']);
  put({
    id: 'kyoto_roti_chicken_jackie_tacos', name: 'ロティー チキン アンド ジャッキー タコス (Roti Chicken & Jackie Tacos)', category: 'OMNI',
    lat: 35.000427, lng: 135.760199, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Corn tortillas are not confirmed; soft and hard tacos, nachos and rotisserie chicken with rice (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: rotisserie chicken, lamb and fish tacos (2026 reviews).',
    hours_raw: 'Tue–Sun and holidays 11:30–15:00 (last order 14:30) and 18:00–23:00 (last orders food 22:00, drinks 22:30); closed Monday, or Tuesday after a Monday holiday (Tabelog). Bookings taken; same-day no-shows are charged 100% for courses or ¥4,000 per person for tables (Tabelog). An hour\'s wait at Saturday lunch in September 2026. Cards and PayPay (Tabelog). 40 seats with private rooms for 4–25; non-smoking (Tabelog). On a narrow street just east of Karasuma above Takatsuji; 10 min from Shijo or Karasuma Stn (Tabelog; November 2026 review).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Just east of Karasuma above Takatsuji — 10 min from Shijo Stn',
    cuisine: 'Rotisserie chicken and Mexican tacos (Tabelog): lunch plates of roast chicken with tacos — "Dos" two-taco plate ¥1,980 (September 2026), the Quattro tacos set, chicken over rice ¥1,430 (November 2026) — tacos of grilled chicken, spicy lamb stew and fish, soft or hard by filling; guacamole, salsa, nachos, Kyoto water eggplant; Corona, sweet cocktails, sparkling wine; the all-you-can-drink "Jackie Course" for parties (2026 reviews)',
    website: null, gmaps: gm('ロティー チキン アンド ジャッキー タコス'), menu_url: TB + 'dtlmenu/',
    notes: "[Rotisserie chicken & tacos · near Shijo-Karasuma] A bright, resort-like Mexican room on a back street: lunch plates of cinnamon-scented roast chicken with tacos (about ¥1,400–2,000), and at night tacos, nachos and cocktails, with party rooms. Popular at weekend lunch; closed Monday.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Opened 22 December 2014 (Tabelog).',
      philosophy: null, specialty: 'Rotisserie chicken; tacos.',
      anecdotes: [
        { text: 'A November 2026 regular on a sixth lunch visit was asked whether cilantro was all right before the chicken over rice came.', source: R + 'B466473754/' },
        { text: 'An August 2026 diner found the tortillas too crumbly to wrap, though the fillings were tasty.', source: R + 'B534747091/' },
        { text: 'A September 2026 diner found the chairs uncomfortable and wished the roast chicken more seasoned, but liked the generously poured sparkling wine.', source: R + 'B536124759/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): ロティー チキン アンド ジャッキー タコス、メキシコ料理・居酒屋・バー、下京区高辻通烏丸東入ル匂天神町642-3、烏丸駅・四条駅から徒歩10分、火〜日・祝 11:30〜15:00・18:00〜23:00、月曜休み (祝日は営業し翌火曜休み)、当日無断キャンセルはコース100%・席のみ一人4,000円、40席、個室あり (4〜25名)、禁煙、カード・PayPay 可、2014年12月22日オープン、飲み放題の「ジャッキーコース」。口コミ (2026年7〜11月、英語): ローストチキンとタコスのランチプレート (タコス2つの「Dos」1,980円、クアトロ)、チキンオーバーライス1,430円、グリルチキン・ラムの煮込み・魚のタコス、ワカモレ、サルサ、ナチョス、水なす、コロナ、甘いカクテル、土曜昼は1時間待ち、トルティーヤが崩れるという声、椅子が座りにくいという声。',
      confidence: 'medium', sources: [TB, R + 'B466473754/', R + 'B532476640/', R + 'B534747091/', R + 'B535278372/', R + 'B535489446/', R + 'B535807694/', R + 'B536124759/', R + 'B536323396/', R + 'B536555656/', R + 'B536743929/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff check whether you eat cilantro.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区高辻通烏丸東入ル匂天神町642-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.000427, 135.760199); cross-checked: GSI 京都府京都市下京区匂天神町642番地 (lot) 9m; 15.3 m from kyoto_cenetta_barba; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535807694/', R + 'B466473754/'],
    price_note: 'No menu read; lunch prices from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Tacos and roast chicken plate "Dos" (2 tacos)', '¥1,980', 'Lunch', 'ask', 'no', 'September 2026 review.', 'dos_plate'),
      it('', '', 'Chicken over rice', '¥1,430', 'Lunch', 'ask', 'no', 'November 2026 review.', 'chicken_over_rice'),
    ] }, {
    cuisine: 'ロティサリーチキンとメキシコのタコス (食べログ): ランチはローストチキンとタコスのプレート (タコス2つの「Dos」1,980円、2026年9月)、クアトロのタコスセット、チキンオーバーライス1,430円 (2026年11月)。グリルチキン、辛いラムの煮込み、魚のタコスは具によってソフトかハード。ワカモレ、サルサ、ナチョス、京都の水なす。コロナ、甘いカクテル、スパークリングワイン、宴会向け飲み放題の「ジャッキーコース」(2026年の口コミ)',
    neighborhood: '高辻の北、烏丸のすぐ東。四条駅から徒歩10分',
    gf_detail: '要確認。トルティーヤがコーンかは不明。ソフトとハードのタコス、ナチョス、ご飯付きのローストチキン (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。ローストチキン、ラムや魚のタコス (2026年の口コミ)。',
    notes: '[ローストチキンとタコス・四条烏丸近く] 路地にあるリゾートのような明るいメキシコ料理店。昼はシナモン香るローストチキンとタコスのプレート (1,400〜2,000円ほど)、夜はタコス、ナチョス、カクテルに宴会用の個室も。週末の昼は混む。月曜休み。',
  });
}

// ================================================================ 京都ダイナー
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26019479/'; const R = TB + 'dtlrvwlst/';
  const W = day(['15:00', '22:30']); const E = day(['12:00', '22:30']);
  put({
    id: 'kyoto_kyoto_diner_nishiki', name: '京都ダイナー (Kyoto Diner)', category: 'OMNI',
    lat: 35.005410, lng: 135.763898, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Roast beef, smoked dishes and salads beside ajillo with baguette, pasta and quiche (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: wagyu, seafood ajillo, cheese and charcuterie (2026 reviews).',
    hours_raw: 'Mon–Fri 15:00–22:30; Sat, Sun and holidays 12:00–22:30 (last orders food 21:30, drinks 22:00); open daily with occasional irregular closures (Tabelog). Book to dine; phone lines open from 13:00 on weekdays and 11:00 at weekends (Tabelog). Charge: Tabelog\'s Japanese original says 「380円 付き出し（税込）」 — a ¥380 appetizer. Minors are asked not to come after 18:00; high stools are not recommended for children under middle-school age at busy weekends (Tabelog). Cards incl. UnionPay and PayPay (Tabelog). English menu with photos (Tabelog). 36 seats: 15 at the counter, 21 at tables; non-smoking, ashtrays at the barrel seats at the entrance (Tabelog). On Yanagibaba-dori just past Nishiki Market; 5 min from Shijo or Karasuma Stn (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Yanagibaba-dori by Nishiki Market — 5 min from Shijo Stn',
    cuisine: 'Wine bar with about 160 bottles chosen by an owner with an importing background and some ten wines by the glass from ¥700 (May 2026); black-wagyu roast beef from the oven ¥2,800 (September 2026) or as a course with appetizers, shrimp or oyster ajillo, fries and pasta; assorted appetizers ¥1,500, corn quiche ¥900, anchovy fries ¥600, chocolate terrine ¥680; aged cheeses, smoked dishes, omelette; draft sparkling wine and seasonal fruit cocktails; a free appetizer platter with a decanter or bottle (2026 reviews)',
    website: null, gmaps: gm('京都ダイナー 柳馬場'), menu_url: TB + 'dtlmenu/',
    notes: "[Wine bar & roast beef · by Nishiki Market] A wood-panelled wine bar open from mid-afternoon (noon at weekends), with 160 wines picked by an importer-turned-owner and oven-roasted black-wagyu beef. About ¥4,000–6,000; ¥380 appetizer. Book at weekends; no minors after 18:00; open daily.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), formerly a wine importer; manager and staff'], origin: null,
      background: 'Opened 2 February 2012 (Tabelog). A May 2026 reviewer says the owner, with a background as an importer, chose the 160 bottles.',
      philosophy: 'Good wine at fair prices with grilled dishes (Tabelog).',
      specialty: 'Black-wagyu roast beef; wine.',
      anecdotes: [
        { text: 'A June 2026 diner praised the manager\'s explanations of wine and aged cheese, but heard a young staff member answer another guest with "Please look at the blackboard."', source: R + 'B529947454/' },
        { text: 'A May 2026 couple on a date found the staff were fellow Hanshin fans and made friends.', source: R + 'B529075042/' },
        { text: 'An August 2026 diner was warned that some dishes take about an hour, so order early.', source: R + 'B533951110/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 京都ダイナー、バル・イタリアン・ワインバー、中京区柳馬場通錦小路上ル十文字町451 1F、四条駅・烏丸駅から徒歩5分、月〜金 15:00〜22:30、土日祝 12:00〜22:30、無休 (不定休あり)、要予約、付き出し380円 (税込)、18時以降は未成年不可、カード・PayPay 可、英語メニュー、36席 (カウンター15、テーブル21)、禁煙 (入口の樽席に灰皿)、2012年2月2日オープン、厳選ワイン160種、黒毛和牛のローストビーフ。口コミ (2026年5〜9月、英語): インポーター出身のオーナー、グラスワイン700円から、ローストビーフ2,800円、前菜盛り合わせ1,500円、とうもろこしのキッシュ900円、アンチョビポテト600円、チョコテリーヌ680円、熟成チーズ、ボトルで前菜盛り合わせのサービス、料理に1時間かかるものも、若いスタッフの対応への不満。',
      confidence: 'medium', sources: [TB, R + 'B528218247/', R + 'B528307155/', R + 'B528932044/', R + 'B529075042/', R + 'B529568570/', R + 'B529649023/', R + 'B529653614/', R + 'B529947454/', R + 'B533951110/', R + 'B536463691/'] },
    cultural_comfort: { level: 'english', note: 'English menu with photos (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区柳馬場通錦小路上ル十文字町451 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.005410, 135.763898); cross-checked: GSI 京都府京都市中京区十文字町451番地 (lot) 34m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B529653614/', TB],
    price_note: 'No menu read; prices from a September 2026 review; appetizer charge from Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Black-wagyu roast beef', '¥2,800', 'Dishes', 'ask', 'no', 'September 2026 review.', 'roast_beef'),
      it('', '', 'Assorted appetizers', '¥1,500', 'Dishes', 'ask', 'no', 'September 2026 review.', 'antipasti'),
      it('付き出し', '', 'Appetizer charge', '¥380', 'Charges', 'ask', 'ask', 'Tabelog.', 'tsukidashi'),
    ] }, {
    cuisine: 'インポーター出身のオーナーが選ぶ約160本のワインと、700円からのグラスワイン約10種 (2026年5月) のワインバー。オーブンで焼く黒毛和牛のローストビーフ2,800円 (2026年9月)、前菜、海老か牡蠣のアヒージョ、ポテト、パスタの付くローストビーフのコース。前菜盛り合わせ1,500円、とうもろこしのキッシュ900円、アンチョビポテト600円、大人のチョコレートテリーヌ680円、熟成チーズ、燻製、オムレツ。生のスパークリングワインや季節の果物のカクテル。デキャンタかボトルで前菜盛り合わせのサービス (2026年の口コミ)',
    neighborhood: '錦市場近くの柳馬場。四条駅から徒歩5分',
    gf_detail: '要確認。ローストビーフ、燻製、サラダと、バゲット付きのアヒージョ、パスタ、キッシュ (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。和牛、魚介のアヒージョ、チーズ、シャルキュトリー (2026年の口コミ)。',
    notes: '[ワインバーとローストビーフ・錦市場近く] 午後 (週末は昼) から開く木のワインバー。インポーター出身のオーナーが選ぶ160種のワインと、オーブンで焼く黒毛和牛のローストビーフ。4千〜6千円ほどで、付き出し380円。週末は予約を。18時以降は未成年不可。毎日営業。',
  });
}

save();
