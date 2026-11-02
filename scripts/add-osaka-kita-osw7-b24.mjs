// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), notable queue, circle shin-osaka; worker osw7 (lane: Tabelog id even), batch 24.
//   + さかなやのmaru寿司 新大阪店 Sakanaya no Maru Zushi (fishmonger-run sushi in Alde Shin-Osaka; sushi by the piece, sets, takeout)
//   + ラム・ジェネレーション 西中島店 Ram Generation (fresh Australian grass-fed lamb yakiniku, Nishinakajima)
//   + ベジョータ マス Bellota Mas (standing Spanish bar in 新なにわ大食堂: overflowing cava, jamón, rotisserie chicken)
//   + 酒屋直営和食バル yanaken boo 新大阪駅店 (liquor-shop-run Japanese bar by the Shinkansen central gate; salt-seared katsuo)
//   - skipped 27127202 ニュー焼肉食堂匠: the 匠 group's yakiniku is already in data (osaka_koshitsu_yakiniku_takumi_nishinakajima),
//     integrator ruling 2026-11-02.
//   Lane check: every id above is even. Taken in notable-queue order after the skip.
//   Chain check (integrator asked for maru寿司 and ラム・ジェネレーション):
//   - Maru Zushi: web search (2026-11-02) finds the Shin-Osaka shop and a Kintetsu Uehonmachi shop (gurunavi). Two known = small
//     group, kept; neither other shop is in data.
//   - Ram Generation: the operator's site (hitsuziya.com, read 2026-11-02) lists one Ram Generation and one sister concept,
//     ラム・ストーリーは突然に in Fukushima. Drafted.
//   - Bellota Mas: a reviewer says the company brands its own GYOKURO jamón, and search finds a ベジョータ ムチョ in Kyoto; no shop
//     list found, so the group size is unknown. Drafted; flagged in the report.
//   - yanaken boo: no other shop named (a reviewer mentions an earlier ground-floor location, since changed). Drafted.
//   None of the four is in data/osaka.json (grep by id, name and address, 2026-11-02).
//   Pins: Ram Generation's Tabelog point is under 1 m from osaka_wafu_motsu_ryori_arata_nishinakajima (same building, 4-2-8, B1F), so
//   the GSI point for 西中島4-2-8 (go, 7 m from Tabelog's) is used instead, about 10 m from Arata. Stacked-pin check run before handoff.
//   No ramen blocks. open_late per Greg's 2026-11-02 ruling (true when the shop closes after 22:00).
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw7-24');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27127202', 'same group\'s yakiniku already in data: 匠 (osaka_koshitsu_yakiniku_takumi_nishinakajima); integrator ruling 2026-11-02');

// ================================================================ さかなやのmaru寿司 新大阪店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27086920/'; const R = TB + 'dtlrvwlst/'; const W = 'http://marusushi-shinosaka.jp/';
  const D = day(['10:30', '22:00']);
  put({
    id: 'osaka_sakanaya_no_maru_zushi_shin_osaka', name: 'さかなやのmaru寿司 新大阪店 (Sakanaya no Maru Zushi Shin-Osaka Ten)', category: 'OMNI',
    lat: 34.733272, lng: 135.499988, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Sushi comes with soy sauce; tempura and simmered fish are on the menu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sushi, sashimi and fish dishes; clam miso soup with lunch.',
    hours_raw: 'Daily 10:30–22:00 (last order 21:00); closed when Alde Shin-Osaka closes (Tabelog). Reservations accepted, including by phone; busier lately at dinner (Tabelog; October 2026). Cards accepted; no e-money (Tabelog). 40 seats: 8 at the counter in front of the open kitchen and 32 at tables; non-smoking; wheelchair access; children welcome; takeout sushi and side dishes (Tabelog; October 2026). Sushi can take a while at busy times (October 2026).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '西中島5-16-1, Alde Shin-Osaka on the 2nd floor of JR Shin-Osaka Station, directly connected (Tabelog)',
    cuisine: 'Sushi run by a fishmonger: seasonal fish direct from its fish shop, sushi from one piece, value sets, homemade dishes, takeout (Tabelog shop text) · lunch: nigiri lunch of eight pieces and a thick roll with clam miso soup and a small simmered fish ¥1,210; lunch specials from ¥1,540 (October 2026) · special assortment set ¥1,980 (October 2026) · by the piece: eel, conger eel, red snapper, ikura (October 2026); raw shirasu gunkan, shiny fish, white fish, uni, tekka maki (September 2026) · dishes: braised sea bream, Okinawa mozuku about ¥300, chawanmushi, tempura, sashimi; seafood rice bowl (September–October 2026) · "Horoyoi" drinks set; Mogura sweet-potato shochu (October 2026)',
    website: W, gmaps: gm('さかなやのmaru寿司 新大阪'), menu_url: null,
    notes: "[Sushi · Shin-Osaka Station, fishmonger's sushi before the train] A fishmonger-run sushi restaurant in Alde Shin-Osaka with a counter in front of the open kitchen, popular for a sit-down meal before the Shinkansen (2026). Order by the piece from the seasonal boards, eel, conger, red snapper, uni, or take a set; the ¥1,210 nigiri lunch of eight pieces and a roll with clam soup is good value for the station (October 2026). Side dishes such as braised sea bream and chawanmushi are worth adding (2026). Some find it no better than a good conveyor-belt shop, and sushi can be slow when busy (2026). Takeout available.",
    chef_bio: { chef_name: null, roles: ['Sushi chefs and staff (unnamed)'], origin: null, background: 'Tabelog shop text: run directly by a fresh-fish shop, serving reasonably priced sushi of seasonal fish, made by skilled craftsmen, with many homemade dishes; counter and tables for solo diners before a Shinkansen. A Kintetsu Uehonmachi shop shares the name (web search, 2026-11-02). Reviewers: efficient, friendly staff who adjust to requests (September 2026).', philosophy: null, specialty: 'Sushi by the piece; nigiri lunch.',
      anecdotes: [
        { text: '"The sushi arrived on a heavy black plate, featuring eight pieces of nigiri and one thick roll, accompanied by clam miso soup and a small bowl of simmered fish." — October 2026, nigiri lunch for JPY 1,210.', source: R + 'B537835764/' },
        { text: '"The eel, conger eel, red snapper, and salmon roe were particularly outstanding." — October 2026.', source: R + 'B526000972/' },
        { text: '"Upon entering, I was pleasantly surprised by the quiet and calming atmosphere, despite the bustling surroundings of Shin-Osaka Station." — September 2026.', source: R + 'B536499152/' },
      ],
      japanese_sources_summary: '食べログ: さかなやのmaru寿司 新大阪店、寿司・居酒屋・海鮮、大阪市淀川区西中島5-16-1 JR新大阪駅 2F アルデ新大阪、駅直結、毎日10:30〜22:00 (L.O. 21:00)、休みはアルデ新大阪に準じる、予約可 (電話も)、カード可、電子マネー不可、40席 (カウンター8、テーブル32)、禁煙、車いす可、子ども可、テイクアウト。店の紹介: 鮮魚店の直営、季節の魚を手頃な値段で、1貫から、お得なセット、職人の手作り、新幹線の前に。口コミ (2026年6〜10月): にぎりのランチ (8貫と太巻き、貝のみそ汁、小さな煮魚) 1,210円、ランチは1,540円から、特選盛り合わせのセット1,980円、うなぎ、穴子、鯛、いくら、生しらすの軍艦、光り物、白身、ウニ、鉄火巻き、鯛の煮付け、Okinawa のもずく約300円、茶碗蒸し、天ぷら、刺身、海鮮丼、「Horoyoi」セット、芋焼酎 Mogura のソーダ割り、混むと寿司が遅いことも、回転寿司のほうがという声も、持ち帰りも。',
      confidence: 'medium', sources: [TB, W, R + 'B526000972/', R + 'B530996668/', R + 'B536499152/', R + 'B536538186/', R + 'B537142194/', R + 'B537314040/', R + 'B537454164/', R + 'B537730163/', R + 'B537835764/', R + 'B538412471/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Station restaurant used to travellers; order by the piece or as a set. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島5-16-1 JR新大阪駅 2F アルデ新大阪',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島五丁目16番1号 (go) 63m — GSI places the whole Shin-Osaka Station block; Tabelog's point is in Alde 2F, about 31 m from osaka_osaka_yakiniku_matsuya_shin_osaka and 23 m from osaka_messe_kuma_shin_osaka (1F); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537835764/', R + 'B537730163/', R + 'B536499152/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Nigiri lunch (8 pieces, thick roll, clam miso soup, simmered fish)', '¥1,210', 'Lunch', 'ask', 'no', 'October 2026.', 'nigiri_lunch'),
      it('', '', 'Special assortment set', '¥1,980', 'Sets', 'ask', 'no', 'October 2026.', 'tokusen_set'),
      it('', '', 'Okinawa mozuku', 'about ¥300', 'Dishes', 'ask', 'no', 'September 2026.', 'mozuku'),
      it('', '', 'Braised sea bream', '', 'Dishes', 'ask', 'no', 'September 2026.', 'tai_arani'),
    ] }, {
    cuisine: '鮮魚店が営む寿司: 店の魚屋から季節の魚、1貫から、お得なセット、自家製の一品、持ち帰り (食べログの店の紹介)・ランチ: にぎり8貫と太巻き、貝のみそ汁、小さな煮魚で1,210円。ランチは1,540円から (2026年10月)・特選盛り合わせのセット1,980円 (2026年10月)・1貫ずつ: うなぎ、穴子、鯛、いくら (2026年10月)。生しらすの軍艦、光り物、白身、ウニ、鉄火巻き (2026年9月)・一品: 鯛の煮付け、Okinawa のもずく約300円、茶碗蒸し、天ぷら、刺身。海鮮丼 (2026年9〜10月)・「Horoyoi」のセット。芋焼酎 Mogura (2026年10月)',
    neighborhood: '西中島5-16-1、JR 新大阪駅2階のアルデ新大阪、駅直結 (食べログ)',
    gf_detail: '要確認。グルテンの情報なし。寿司は醤油で、天ぷらや煮魚もある。',
    vegan_detail: 'ヴィーガンではありません。寿司、刺身、魚料理。ランチには貝のみそ汁。',
    notes: '[寿司・新大阪駅、電車の前に魚屋の寿司] アルデ新大阪にある魚屋が営む寿司の店で、オープンキッチンの前にカウンターがあり、新幹線の前にゆっくり食べたい人に人気 (2026年)。季節の札から1貫ずつ、うなぎ、穴子、鯛、ウニなどを頼むか、セットで。8貫と巻物に貝のみそ汁がつく1,210円のにぎりのランチは駅の中ではお得 (2026年10月)。鯛の煮付けや茶碗蒸しも足したい (2026年)。いい回転寿司と変わらないという人もいて、混むと寿司が遅いことも (2026年)。持ち帰りもできる。',
  });
}

// ================================================================ ラム・ジェネレーション 西中島店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27121092/'; const R = TB + 'dtlrvwlst/'; const W = 'https://hitsuziya.com/lambgene/';
  const D = day(['11:30', '15:00'], ['17:00', '23:00']); const S = day(['11:30', '15:00'], ['17:00', '22:00']);
  put({
    id: 'osaka_ram_generation_nishinakajima', name: 'ラム・ジェネレーション 西中島店 (Ram Generation Nishinakajima Ten)', category: 'OMNI',
    lat: 34.726482, lng: 135.497635, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Lamb comes with a dipping sauce or salt and wasabi (October 2026); courses end with yakisoba and lamb curry.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a lamb yakiniku restaurant.',
    hours_raw: 'Mon–Sat and days before holidays 11:30–15:00 and 17:00–23:00; Sun and holidays 11:30–15:00 and 17:00–22:00 (last order 21:15); irregular days off (Tabelog). Reservations accepted; tables may be limited to two hours (Tabelog). Cards and PayPay accepted (Tabelog). 35 seats with counter; private rooms for up to five, ¥2,000 or free for members (sign up on the day); non-smoking; children welcome but bring your own child cutlery (Tabelog). Can be hot inside in summer (July 2026). Opened 24 November 2020 (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '西中島4-2-8 — 2 min from the north exit of Nishinakajima-Minamigata Stn, 5 min from Hankyu Minamikata Stn (Tabelog); same building as osaka_wafu_motsu_ryori_arata_nishinakajima',
    cuisine: 'Fresh lamb yakiniku and jingisukan: all Australian grass-fed lamb, including the Roaring Forties brand, cooked on thick custom iron plates; staff grill the lamb chops (operator site) · cuts: thick-cut tongue, chuck eye roll, top sirloin, shoulder, rump, kalbi, heart, boneless lamb chops, red wiener, lamb horumon (2026) · vegetables grilled in the lamb fat (September 2026) · courses with all-you-can-drink: standard course ¥5,500 and a ¥6,970 course, with kimchi, salad, "Unmotivated Yakisoba", mini lamb curry and dessert (August–October 2026) · lunch: lamb lunch set with rice and kimchi (September 2026) · about ¥4,000–6,000 a head at night (2026)',
    website: W, gmaps: gm('ラム・ジェネレーション 西中島'), menu_url: null,
    notes: "[Lamb · Nishinakajima, fresh grass-fed lamb on a thick iron plate] A retro hideaway near Nishinakajima-Minamigata that grills fresh Australian grass-fed lamb, mild with no gamey smell, on thick iron plates (operator site; 2026). Work through thick-cut tongue, chuck eye roll, top sirloin and boneless lamb chops, grill the vegetables in the fat, and finish with yakisoba and a mini lamb curry (2026). The ¥5,500 standard course with all-you-can-drink is the popular choice; lunch sets are cheaper (2026). Book ahead; it can be hot inside in summer.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null, background: 'Operator site (羊屋総本舗): all lamb is Australian grass-fed, including Roaring Forties lamb; custom thick iron plates; staff train twice a year on lamb and grill the lamb chops and lamb burgers for guests; a sister restaurant, ラム・ストーリーは突然に, is in Fukushima. Opened 24 November 2020 (Tabelog).', philosophy: 'Let guests know the true flavour of lamb (operator site).', specialty: 'Thick-cut lamb tongue; standard course.',
      anecdotes: [
        { text: '"When you think of lamb, you might imagine a strong gamey taste, but the lamb here is incredibly easy to eat." — September 2026.', source: R + 'B535026156/' },
        { text: '"While the dipping sauce was tasty, I also loved the combination of salt and wasabi." — October 2026, standard course for JPY 5,500.', source: R + 'B533263602/' },
        { text: '"Additionally, frying vegetables in lamb fat is a great idea." — September 2026.', source: R + 'B535026156/' },
      ],
      japanese_sources_summary: '食べログ: ラム・ジェネレーション 西中島店、ジンギスカン・焼肉・居酒屋、大阪市淀川区西中島4-2-8、西中島南方駅北口から徒歩2分、阪急 南方駅から徒歩5分、月〜土・祝前日11:30〜15:00、17:00〜23:00、日・祝11:30〜15:00、17:00〜22:00 (L.O. 21:15)、不定休、予約可 (2時間制のことも)、カードと PayPay 可、35席、5人までの個室 (2,000円、会員は無料)、禁煙、子ども可 (子ども用の食器はなし)、2020年11月24日オープン、サイト hitsuziya.com。運営 (羊屋総本舗) のサイト: ラムはすべてオーストラリアのグラスフェッド、ロアリングフォーティーズラム、特注の厚い鉄板、ラムチョップはスタッフが焼く、姉妹店「ラム・ストーリーは突然に」(福島)。口コミ (2026年6〜10月): 厚切りタン、肩ロース、サーロイン、肩、ランプ、カルビ、ハツ、骨なしラムチョップ、赤ウインナー、ラムホルモン、くさみがない、野菜はラムの脂で焼く、たれのほかに塩とわさび、飲み放題つきのスタンダードコース5,500円、6,970円のコース、キムチ、サラダ、「Unmotivated Yakisoba」、ミニラムカレー、デザート、ランチのラムのセット (ごはんとキムチ)、夏は店内が暑い。',
      confidence: 'medium', sources: [TB, W, R + 'B523640809/', R + 'B532001384/', R + 'B532210460/', R + 'B532831040/', R + 'B533263602/', R + 'B534980543/', R + 'B535026156/', R + 'B536475191/', R + 'B536522539/', R + 'B537121762/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; tables may be limited to two hours. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島4-2-8',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and operator site; reviews dated October 2026.' },
    pin_source: `GSI 大阪府大阪市淀川区西中島四丁目2番8号 (go); Tabelog ${TB} point is 7 m away but under 1 m from osaka_wafu_motsu_ryori_arata_nishinakajima (same building, B1F), so the GSI point is used to avoid stacking, about 10 m from Arata; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B533263602/', R + 'B536475191/'],
    price_note: 'Course prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Standard course with all-you-can-drink', '¥5,500', 'Courses', 'ask', 'no', 'October 2026.', 'standard_course'),
      it('', '', 'Larger course with all-you-can-drink', '¥6,970', 'Courses', 'ask', 'no', 'October 2026.', 'premium_course'),
      it('', '', 'Thick-cut lamb tongue', '', 'Lamb', 'ask', 'no', 'August–September 2026.', 'atsugiri_tan'),
      it('', '', 'Lamb lunch set with rice and kimchi', '', 'Lunch', 'ask', 'no', 'September 2026.', 'lamb_lunch'),
    ] }, {
    cuisine: '生ラムの焼肉とジンギスカン: ラムはすべてオーストラリアのグラスフェッドで、ロアリングフォーティーズラムも。特注の厚い鉄板で焼き、ラムチョップはスタッフが焼く (運営のサイト)・部位: 厚切りタン、肩ロース、サーロイン、肩、ランプ、カルビ、ハツ、骨なしラムチョップ、赤ウインナー、ラムホルモン (2026年)・野菜はラムの脂で焼く (2026年9月)・飲み放題つきのコース: スタンダード5,500円と6,970円のコース。キムチ、サラダ、「Unmotivated Yakisoba」、ミニラムカレー、デザート (2026年8〜10月)・ランチ: ごはんとキムチのラムのセット (2026年9月)・夜はひとり約4,000〜6,000円 (2026年)',
    neighborhood: '西中島4-2-8。西中島南方駅北口から徒歩2分、阪急 南方駅から徒歩5分 (食べログ)。和風もつ料理 あらたと同じ建物',
    gf_detail: '要確認。グルテンの情報なし。ラムはたれか、塩とわさびで (2026年10月)。コースのしめは焼きそばとラムカレー。',
    vegan_detail: 'ヴィーガンではありません。ラムの焼肉の店。',
    notes: '[ラム・西中島、厚い鉄板で焼く生のグラスフェッドラム] 西中島南方駅の近くのレトロな隠れ家で、オーストラリアのグラスフェッドの生ラムを厚い鉄板で焼く。くさみがなくてやさしい味 (運営のサイト。2026年)。厚切りタン、肩ロース、サーロイン、骨なしラムチョップと進み、野菜は脂で焼いて、しめは焼きそばとミニラムカレー (2026年)。人気は飲み放題つきのスタンダードコース5,500円、ランチのセットはもっと安い (2026年)。予約を。夏は店内が暑いことも。',
  });
}

// ================================================================ ベジョータ マス
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27090950/'; const R = TB + 'dtlrvwlst/';
  const D = day(['10:00', '23:00']);
  put({
    id: 'osaka_bellota_mas_shin_osaka', name: 'ベジョータ マス (Bellota Mas)', category: 'OMNI',
    lat: 34.732608, lng: 135.498544, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Jamón, cheese and roast chicken may suit, but pinchos are on bread and ajillo comes with bread.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a Spanish bar of jamón, roast chicken and seafood tapas.',
    hours_raw: 'Daily 10:00–23:00 (Tabelog). No reservations (Tabelog). Cards accepted (Tabelog). 30 places: 6 counter seats, 7 high-counter seats, 14 low-table seats and 8–10 standing (Tabelog); non-smoking (Tabelog). Happy hour with highballs at ¥190 (October 2026). Busy at weekends (October 2026). Opened 30 March 2016 (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: '西中島5-15-5, 新なにわ大食堂 2F — 30 seconds from Exit 4 of Shin-Osaka Stn, by the subway ticket gate (Tabelog; September 2025)',
    cuisine: 'Standing-style Spanish bar, quick to drink and quick to pay: tapas from ¥90, jamón ¥390, wine from ¥390, beer ¥390, highball ¥190 (Tabelog shop text) · signature "Kobore" cava poured until it overflows into the coaster (2026) · GYOKURO jamón ibérico de bellota, the house brand, served with a certificate (October 2026) · rotisserie chicken, crisp skin and juicy meat over potatoes, half size available, with a spicy sauce (2026) · tapas: herb-confit gizzards, anchovy mayonnaise egg, marinated mushrooms, shrimp ajillo, pinchos of seafood, jamón with mozzarella, smoked salmon; cheese platter; katsuo tataki; kawahagi carpaccio (2026) · sangria and wine by the glass (October 2026)',
    website: null, gmaps: gm('ベジョータ マス 新大阪'), menu_url: null,
    notes: "[Spanish · Shin-Osaka Station, overflowing cava and jamón by the subway gate] A busy little Spanish bar upstairs in Shin-Osaka's 新なにわ大食堂, steps from the Midosuji gate, built for a quick drink: tapas from ¥90, jamón and wine from ¥390 (Tabelog). Start with the \"Kobore\" cava, poured until it spills over, then the house GYOKURO jamón ibérico and the rotisserie chicken, crisp-skinned and juicy, the dish regulars always order (2026). Happy-hour highballs are ¥190 (October 2026). No bookings; open 10:00 to 23:00 every day.",
    chef_bio: { chef_name: null, roles: ['Bar staff (unnamed)'], origin: null, background: 'Tabelog shop text: a cheap, fast, delicious standing Spanish bar inside Shin-Osaka Station, "Bellota style" being jamón and Spanish wine with the famous roast chicken; drop in and leave quickly, as in Spain. Opened 30 March 2016 (Tabelog). An October 2026 diner says the company brands its own GYOKURO jamón; a Kyoto bar named ベジョータ ムチョ appears in search results (2026-11-02).', philosophy: null, specialty: 'Rotisserie chicken; GYOKURO jamón.',
      anecdotes: [
        { text: '"The performance of pouring the sparkling wine to the brim of the glass, and even overflowing into the square coaster below, was truly impressive." — October 2026, Kobore cava.', source: R + 'B427170404/' },
        { text: '"The rotisserie chicken features a crispy, fragrant skin and juicy meat, with the delicious juices soaking into the potatoes." — August 2026.', source: R + 'B492737877/' },
        { text: '"During happy hour, highballs are just JPY 190." — October 2026.', source: R + 'B536950004/' },
      ],
      japanese_sources_summary: '食べログ: ベジョータ マス、スペインバル・ヨーロッパ料理、大阪市淀川区西中島5-15-5 新なにわ大食堂 2F、新大阪駅4番出口から徒歩30秒、毎日10:00〜23:00、予約不可、カード可、30席 (カウンター6、ハイカウンター7、ローテーブル14、立ち飲み8〜10)、禁煙、2016年3月30日オープン、店の紹介: 新大阪駅の中の安くて早くておいしい立ち飲みのスペインバル、タパス90円から、生ハム390円、ワイン390円から、ビール390円、ハイボール190円、名物のローストチキン。口コミ (2025年9月〜2026年10月): あふれるまで注ぐ「Kobore」のカバ、店のブランドの生ハム「GYOKURO」(証明書つき)、皮がパリッとしてジューシーなローストチキン (ハーフも、辛いソース)、砂肝のハーブコンフィ、アンチョビマヨの卵、きのこのマリネ、エビのアヒージョ、魚介のピンチョス、生ハムとモッツァレラ、スモークサーモン、チーズの盛り合わせ、カツオのたたき、カワハギのカルパッチョ、サングリア、ハッピーアワーのハイボール190円、地下鉄の改札のすぐ前、週末は混む。',
      confidence: 'medium', sources: [TB, R + 'B419490200/', R + 'B420457653/', R + 'B427170404/', R + 'B492737877/', R + 'B534489375/', R + 'B535820060/', R + 'B536818739/', R + 'B536950004/', R + 'B537015723/', R + 'B537470586/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Standing-bar style; order at the counter, pay as you go. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島5-15-5 新なにわ大食堂 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島五丁目15番5号 (go) 93m; the same food hall's other shops in data sit about 100 m north (osaka_sakanaya_stand_fuji_shin_osaka, osaka_kawakita_shoten_shin_osaka, both loc_approx); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B536950004/'],
    price_note: 'Base prices from the Tabelog shop text; happy-hour price from October 2026.', last_checked: TODAY, items: [
      it('', '', 'Tapas', 'from ¥90', 'Tapas', 'ask', 'ask', 'Tabelog shop text.', 'tapas'),
      it('', '', 'Jamón', '¥390', 'Tapas', 'ask', 'no', 'Tabelog shop text.', 'jamon'),
      it('', '', 'Wine by the glass', 'from ¥390', 'Drinks', 'ask', 'ask', 'Tabelog shop text.', 'wine'),
      it('', '', 'Rotisserie chicken (half available)', '', 'Mains', 'ask', 'no', '2026.', 'roast_chicken'),
    ] }, {
    cuisine: 'さっと飲んでさっと払える立ち飲みのスペインバル: タパス90円から、生ハム390円、ワイン390円から、ビール390円、ハイボール190円 (食べログの店の紹介)・名物はあふれてコースターまでこぼれる「Kobore」のカバ (2026年)・店のブランドのイベリコ・ベジョータの生ハム「GYOKURO」、証明書つき (2026年10月)・ローストチキン: 皮はパリッと、肉はジューシーでじゃがいもの上に。ハーフもあり、辛いソースで (2026年)・タパス: 砂肝のハーブコンフィ、アンチョビマヨの卵、きのこのマリネ、エビのアヒージョ、魚介や生ハムとモッツァレラ、スモークサーモンのピンチョス。チーズの盛り合わせ。カツオのたたき。カワハギのカルパッチョ (2026年)・サングリアとグラスワイン (2026年10月)',
    neighborhood: '西中島5-15-5、新なにわ大食堂の2階。新大阪駅4番出口から徒歩30秒、地下鉄の改札のそば (食べログ。2025年9月)',
    gf_detail: '要確認。グルテンの情報なし。生ハム、チーズ、ローストチキンはいいかもしれないが、ピンチョスはパンの上で、アヒージョにはパン。',
    vegan_detail: 'ヴィーガンではありません。生ハム、ローストチキン、魚介のタパスのスペインバル。',
    notes: '[スペイン料理・新大阪駅、地下鉄の改札のそばのあふれるカバと生ハム] 新大阪駅の新なにわ大食堂の2階、御堂筋線の改札のすぐそばのにぎやかな小さなスペインバルで、さっと一杯のための店。タパス90円から、生ハムとワインは390円から (食べログ)。まずはこぼれるまで注ぐ「Kobore」のカバ、それから店のブランドの生ハム GYOKURO と、常連がかならず頼む皮がパリッとジューシーなローストチキン (2026年)。ハッピーアワーのハイボールは190円 (2026年10月)。予約不可。毎日10時から23時。',
  });
}

// ================================================================ 酒屋直営和食バル yanaken boo 新大阪駅店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27067444/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '22:00']);
  put({
    id: 'osaka_yanaken_boo_shin_osaka', name: '酒屋直営和食バル yanaken boo 新大阪駅店 (Sakaya Chokuei Washoku Bar yanaken boo)', category: 'OMNI',
    lat: 34.733805, lng: 135.499396, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The katsuo tataki is served with salt and wasabi (September 2026), but sets include chicken nanban and tonkatsu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: katsuo tataki, roast beef and other meat and fish dishes.',
    hours_raw: 'Daily 11:00–22:00; lunch menu 11:00–15:00; dinner menu all day (food last order 21:00, drinks 21:30); takeout bento 11:00–21:30; open all year (Tabelog). Reservations accepted; two-hour limit, last order 90 minutes after arrival (Tabelog). No cover charge; cards, e-money and QR accepted (Tabelog). 27 seats: 20 at tables and 7 at the counter; non-smoking; wheelchair access (Tabelog). Happy hour (June and August 2026). Cold green tea instead of water (August and October 2026).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '宮原1-1-1, 新大阪阪急ビル 3F — right in front of the Shinkansen central gate at Shin-Osaka Stn (turn right out of the gate) (Tabelog)',
    cuisine: 'Liquor-shop-run Japanese bar (Tabelog) · signature salt-seared katsuo tataki, cut thick, with coarse salt and wasabi, four slices as a quick snack (August–September 2026) · lunch: "Yanaken Boo" set of katsuo tataki, roast beef and chicken nanban ¥2,500 (September 2026); set meals with white or shirasu rice (October 2026); Kumamoto pork tonkatsu with salt (September 2026) · small dishes: three-kind appetiser, quail egg, yam, celery (2026) · sake tasting set of three; Kyoto Nichinichi and other sakes; wine; Premium Malts Aroma Ale (2026) · takeout bento (Tabelog)',
    website: null, gmaps: gm('yanaken boo 新大阪'), menu_url: null,
    notes: "[Izakaya · Shin-Osaka Station, salt-seared katsuo by the Shinkansen gate] A stylish Japanese bar run by a liquor shop, right beside the Shinkansen central gate, so close you can drink until a few minutes before your train (2026). The thing to order is the salt-seared katsuo tataki, thick-cut, with coarse salt and wasabi, clean and full of umami (2026). Pair it with a three-sake tasting set or wine; lunch sets combine katsuo, roast beef and chicken nanban for ¥2,500 (September 2026). Two-hour limit; happy hour in the afternoon. Open daily 11:00–22:00; takeout bento too.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null, background: 'No shop description on Tabelog beyond the name: a Japanese bar run directly by a liquor shop. Reviewers: friendly, quick service (August–September 2026); the shop used to be on the ground floor before moving (August 2026).', philosophy: null, specialty: 'Salt-seared katsuo tataki.',
      anecdotes: [
        { text: '"The thickly sliced fish topped with coarse salt and wasabi had no strange aftertaste or odor, just pure umami." — September 2026, salt katsuo tataki.', source: R + 'B535264454/' },
        { text: '"Located inside Shin-Osaka Station, \'yanaken boo\' is just a 30-second walk from the Shinkansen ticket gates (laughs)." — September 2026.', source: R + 'B519296027/' },
        { text: '"I ordered the Yanaken Boo Set Meal for JPY 2500, which included a generous serving of bonito tataki, roast beef, and chicken nanban." — September 2026, lunch.', source: R + 'B534830418/' },
      ],
      japanese_sources_summary: '食べログ: 酒屋直営和食バル yanaken boo 新大阪駅店、居酒屋・バル・弁当、大阪市淀川区宮原1-1-1 新大阪阪急ビル 3F、JR と地下鉄の新大阪駅直結、新幹線の中央改札を出て右すぐ、毎日11:00〜22:00、ランチ11:00〜15:00、ディナーは11:00から (L.O. 料理21:00、ドリンク21:30)、テイクアウトの弁当11:00〜21:30、無休、予約可 (2時間制、入店から90分でラストオーダー)、チャージなし、カード・電子マネー・QR 可、27席 (テーブル20、カウンター7)、禁煙、車いす可。口コミ (2026年6〜10月): 名物は塩のカツオのたたき、厚切りで粗塩とわさび、4切れからさっと、ランチの「Yanaken Boo」定食2,500円 (カツオのたたき、ローストビーフ、チキン南蛮)、白ごはんかしらすごはん、Kumamoto の豚のとんかつを塩で、前菜3種、うずらの卵、山芋、セロリ、日本酒の飲みくらべ3種、Kyoto Nichinichi、ワイン、Premium Malts Aroma Ale、ハッピーアワー、水のかわりに冷たい緑茶、新幹線の直前まで飲める、前は1階にあった。',
      confidence: 'medium', sources: [TB, R + 'B519296027/', R + 'B529702591/', R + 'B533787521/', R + 'B533859693/', R + 'B534639565/', R + 'B534820272/', R + 'B534830418/', R + 'B535264454/', R + 'B537392618/', R + 'B537856072/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Station bar used to travellers; two-hour limit. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区宮原1-1-1 新大阪阪急ビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区宮原一丁目1番1号 (go) 148m — GSI places the whole Shin-Osaka Hankyu Building block; Tabelog's point is by the Shinkansen central gate, about 130 m from osaka_ngon_ca_phe_shin_osaka in the same building; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534830418/', R + 'B534639565/'],
    price_note: 'One lunch price from a September 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Yanaken Boo set (katsuo tataki, roast beef, chicken nanban)', '¥2,500', 'Lunch', 'no', 'no', 'September 2026.', 'yanaken_set'),
      it('', '', 'Salt-seared katsuo tataki', '', 'Dishes', 'ask', 'no', 'August–September 2026.', 'katsuo_shio'),
      it('', '', 'Sake tasting set (three)', '', 'Drinks', 'ask', 'ask', 'August 2026.', 'kikizake'),
      it('', '', 'Kumamoto pork tonkatsu with salt', '', 'Dishes', 'no', 'no', 'September 2026.', 'tonkatsu'),
    ] }, {
    cuisine: '酒屋が営む和食バル (食べログ)・名物は塩のカツオのたたき、厚切りで粗塩とわさび、さっと4切れでも (2026年8〜9月)・ランチ: カツオのたたき、ローストビーフ、チキン南蛮の「Yanaken Boo」定食2,500円 (2026年9月)。白ごはんかしらすごはんの定食 (2026年10月)。Kumamoto の豚のとんかつを塩で (2026年9月)・小皿: 前菜3種、うずらの卵、山芋、セロリ (2026年)・日本酒の飲みくらべ3種、Kyoto Nichinichi などの日本酒、ワイン、Premium Malts Aroma Ale (2026年)・持ち帰りの弁当 (食べログ)',
    neighborhood: '宮原1-1-1、新大阪阪急ビルの3階。新大阪駅の新幹線中央改札を出て右すぐ (食べログ)',
    gf_detail: '要確認。グルテンの情報なし。カツオのたたきは塩とわさびで (2026年9月) だが、定食にはチキン南蛮やとんかつもある。',
    vegan_detail: 'ヴィーガンではありません。カツオのたたき、ローストビーフなど肉と魚の料理。',
    notes: '[居酒屋・新大阪駅、新幹線の改札のそばの塩のカツオのたたき] 酒屋が営むおしゃれな和食バルで、新幹線の中央改札のすぐ横。電車の数分前まで飲めるほど近い (2026年)。頼むなら塩のカツオのたたき、厚切りで粗塩とわさび、くせがなくてうまみたっぷり (2026年)。日本酒の飲みくらべ3種やワインと。ランチはカツオ、ローストビーフ、チキン南蛮の2,500円の定食 (2026年9月)。2時間制。昼すぎにハッピーアワー。毎日11時から22時。弁当の持ち帰りも。',
  });
}

save();
