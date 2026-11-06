// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 25.
//   core (queue.mjs kyoto-missed next core 200, 2026-11-05, first two lane ids):
//   + 石焼地鶏とりくら Torikura (stone-grilled jidori chicken off Shijo-Karasuma)
//   + Severance (yoshoku and teppan by the Sanjo bridge; since 2023)
//   notable (queue.mjs kyoto-missed next notable 200, next two lane ids; Severance heads both lists and is drafted once):
//   + 魚料理 あぎやお Agiyao (ten-seat fish counter at Gojo-Higashinotoin; since 2007) — sister of バル agiyao, already in data
//   + 祇園 鮨よし田 Sushi Yoshida (kappo and Edomae sushi off Hanamikoji; since 2014) — reviewers call it introduction-only; flagged
//   None of the four drafted is in data/kyoto.json: grep by id, name (とりくら/Torikura, Severance, あぎやお — only the 1F bar
//   kyoto_bar_agiyao_gojo, a different concept — and よし田 — only 麺心 よし田, unrelated) and address (元法然寺町685,
//   三条大橋東2-82, 深草町592-3 2F, 祇園町南側570-179) found none.
//   Same-name counts (same brand or operator): とりくら, Severance — one listing each (Severance’s sister is Dining Bar MO-JI in
//   Gion, not in data); あぎやお — two concepts in one building (this fish counter on 2F, バル agiyao on 1F) plus the owner’s
//   魚料理 青柳 near Gion per a review; operator 株式会社ＦＯＩＳ (invoice); a small local group, drafted as a sister concept and flagged.
//   Service charges checked against Tabelog’s Japanese original: とりくら 「記載なし」; Severance 「サービス料5%」; あぎやお
//   「【アラカルトの場合】席料として5500円（税込）（その日のオススメ2〜3皿含み）」; 鮨よし田 none listed.
//   Pins: Tabelog /en/ point, cross-checked with GSI only.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-25');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 石焼地鶏とりくら
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26006163/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '24:00']);
  put({
    id: 'kyoto_ishiyaki_jidori_torikura', name: '石焼地鶏とりくら (Torikura)', category: 'OMNI',
    lat: 35.00507255534428, lng: 135.7603903611644, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Chicken grilled on stone with three seasonings, plus kara-age, spring rolls, carbonara and tsukune; no gluten information is published (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken specialist, with chicken sashimi and seafood (Tabelog; 2026 reviews).',
    hours_raw: '17:00–24:00 daily (last order food 23:00, drinks 23:30) (Tabelog). Bookings taken; it fills early in the evening (2026 reviews). Tabelog’s Japanese original for service charge reads 「記載なし」 (none stated). 11 seats per Tabelog, at a counter and tatami or sunken-floor tables, with private rooms for 2 and 4 and private hire for up to 20; non-smoking; children and strollers welcome; cards (VISA, Master, JCB, AMEX, Diners), no e-money or QR (Tabelog). On the 1st floor of the WISTERIA Building on Nishikikoji east of Karasuma, one block north of Shijo-Karasuma, 155 m from Karasuma Stn (Tabelog; September 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shijo-Karasuma, Nishikikoji — 155 m from Karasuma Stn',
    cuisine: 'Jidori chicken from Nishiki Market grilled slowly on a far-infrared stone at the table; over 200 drinks including more than 30 sakes such as Aramasa; limited Kagoshima chicken sashimi and Nagoya Cochin liver and heart sashimi (Tabelog official introduction) · seven-cut stone-grill platter (bonjiri, shoulder, wings, heart, thigh, breast, tenderloin) · Yusui chicken tataki · chicken yukhoe · tulip kara-age · tsukune · corn tempura · grilled rice balls · oyakodon · carbonara to finish · courses about ¥5,000, also with all-you-can-drink (2026 reviews)',
    website: null, gmaps: gm('石焼地鶏とりくら 烏丸'), menu_url: TB,
    notes: "[Yakitori · Shijo-Karasuma, grill-it-yourself jidori on hot stone] A chicken izakaya just north of Shijo-Karasuma where cuts of fresh jidori from Nishiki Market arrive raw with a hot stone for grilling at the table: the seven-cut platter is the way to compare. Chicken sashimi and tataki, tulip kara-age and a rich carbonara to finish round it out, with a deep sake list. Courses about ¥5,000. Open to midnight every day; book for early evening.",
    chef_bio: { chef_name: null, roles: ['Owner not named'], origin: null,
      background: 'Per Tabelog’s official introduction: chicken delivered directly from Nishiki Market, grilled slowly on a special stone with a strong far-infrared effect; over 200 drinks and more than 30 sakes; limited Kagoshima chicken sashimi and Nagoya Cochin liver and heart sashimi. The operator is not stated.',
      philosophy: null,
      specialty: 'Seven-cut stone-grill platter of jidori.',
      anecdotes: [
        { text: 'A September 2026 diner hoping for the liver sashimi found it unavailable that night and had thigh sashimi instead.', source: R + 'B535957595/' },
        { text: 'A September 2026 guest sent back a beer that was not cold enough, and it was exchanged.', source: R + 'B535870891/' },
        { text: 'An October 2026 visitor enjoyed grilling yakitori at the table and found the owner and staff friendly, with thorough explanations.', source: R + 'B537456499/' },
      ],
      japanese_sources_summary: '食べログ: 石焼地鶏とりくら、焼き鳥・居酒屋、中京区錦小路烏丸東入ル元法然寺町685 WISTERIAビル1F、烏丸駅から155m、17:00〜24:00 (料理L.O. 23:00、ドリンクL.O. 23:30)、サービス料は記載なし、11席、2名・4名の個室、20名まで貸切可、座敷・掘りごたつ、禁煙、子供可、カード可。公式紹介: 錦市場から直送の新鮮な鶏を、遠赤外線効果の高い特製の石でじっくり焼く、200種以上のドリンク、30種以上の日本酒 (新政など)、数量限定の鹿児島の鶏刺し、名古屋コーチンのレバー・ハツ刺し。口コミ (2026年8〜10月、英語): 7種の石焼盛り合わせ、自分で焼く、チューリップの唐揚げ、締めのカルボナーラ、5,000円のコース、飲み放題付きのコース。',
      confidence: 'medium', sources: [TB, R + 'B487326872/', R + 'B533045929/', R + 'B533962572/', R + 'B534239172/', R + 'B535870891/', R + 'B535957595/', R + 'B536123524/', R + 'B536882716/', R + 'B537456499/', R + 'B537463080/', R + 'B538043880/', R + 'B538062618/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff explain the cuts and the stone grill.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区錦小路烏丸東入ル元法然寺町685 WISTERIAビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.005073, 135.76039); cross-checked: GSI 京都府京都市中京区元法然寺町685番地 (lot) 22m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533962572/', R + 'B536882716/', R + 'B533045929/'],
    price_note: 'Dishes from 2026 reviews; the course price from August and October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Course (about ¥5,000; an all-you-can-drink version also offered)', '¥5,000', 'Course', 'ask', 'no', '', 'course'),
      it('', '', 'Seven-cut stone-grilled jidori platter', '', 'Stone grill', 'ask', 'no', 'Salt recommended among three seasonings.', 'ishiyaki_7'),
      it('', '', 'Chicken sashimi and tataki', '', 'Sashimi', 'ask', 'no', 'Limited quantities.', 'chicken_sashimi'),
      it('', '', 'Tulip-shaped kara-age', '', 'Dishes', 'no', 'no', '', 'tulip_karaage'),
      it('', '', 'Carbonara to finish', '', 'Finish', 'no', 'no', '', 'carbonara'),
    ] }, {
    cuisine: '錦市場から直送の地鶏を、遠赤外線効果の高い石で席でじっくり焼く。新政など30種以上の日本酒を含む200種以上のドリンク。数量限定の鹿児島の鶏刺しと Nagoya Cochin のレバー・ハツ刺し (食べログの公式紹介)・7種の石焼盛り合わせ (ぼんじり、肩、手羽、ハツ、もも、むね、ささみ)・Yusui の鶏のたたき・鶏のユッケ・チューリップの唐揚げ・つくね・とうもろこしの天ぷら・焼きおにぎり・親子丼・締めのカルボナーラ・コースは5,000円ほど、飲み放題付きも (2026年の口コミ)',
    neighborhood: '四条烏丸、錦小路。烏丸駅から155m',
    gf_detail: '要確認。石で焼く鶏に3種の味付け、唐揚げ、春巻き、カルボナーラ、つくね。グルテンの情報は公開されていない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鶏の専門店で、鶏刺しや魚介も (食べログ、2026年の口コミ)。',
    notes: '[焼き鳥・四条烏丸、熱い石で自分で焼く地鶏] 四条烏丸のすぐ北の鶏の居酒屋。錦市場からの新鮮な地鶏が生のまま熱い石とともに出て、自分で焼く。部位を比べるなら7種の盛り合わせ。鶏刺しやたたき、チューリップの唐揚げ、濃厚な締めのカルボナーラ、日本酒の品ぞろえも充実。コースは5,000円ほど。毎日深夜0時まで。早い時間は予約を。',
  });
}

// ================================================================ Severance
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26038827/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://severance-kyoto.com/'; const ABOUT = SITE + 'about/'; const DINNER = SITE + 'dinner/';
  const EVENT = SITE + '2025/04/17/event-404kitchen-tokyo/';
  const H = day(['11:30', '15:00'], ['18:00', '22:00']);
  put({
    id: 'kyoto_severance_sanjo', name: 'Severance (セヴェランス)', category: 'MOM_AND_POP',
    lat: 35.009365237871286, lng: 135.77400308039654, cuisine_type: 'yoshoku',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Yoshoku with demi-glace, cream croquettes, kataifi-wrapped fried shrimp, katsu sandwiches and bread; no gluten information is published (official site).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A meat- and seafood-led yoshoku menu with a few salads; nothing vegan is marked (official site).',
    hours_raw: 'Lunch 11:30–15:00 (last order food 14:00, drinks 14:30); dinner 18:00–22:00 (last order food 21:00, drinks 21:30); closed Monday and every other Tuesday — see the official Instagram for the calendar (official site; Tabelog). Lunch bookings by phone or Instagram DM (official site). Service charge 5% (Tabelog’s Japanese original: 「サービス料5%」). 14 seats: a 5-seat counter facing the teppan and 9 table seats; private hire for up to 20; non-smoking; cards (VISA, Master, JCB, AMEX, Diners) and d Barai (official site; Tabelog). A small house on Sanjo-dori east of the Sanjo bridge, 1 min (110 m) from Sanjo Keihan Stn (official site). Opened 6 January 2023 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sanjo-dori east of the Sanjo bridge — 1 min from Sanjo Keihan Stn',
    cuisine: 'Classic-meets-modern yoshoku with a teppan in front of the counter (official site) · lunch: the "adult’s kids’ lunch" Severance plate, four choices of signature dishes ¥5,000, or the Casual plate, three choices ¥3,800 — e.g. beef hamburg with demi-glace, "angel" fried shrimp wrapped in kataifi with bisque sauce, lobster and crab cream croquette, wagyu sirloin-cap roast beef, fried hamo, with soup, salad and rice or bread (official site; 2026 reviews) · dinner à la carte: wagyu roast-beef temari sushi ¥3,000, rare-fried salmon ¥2,420, chef’s salad ¥2,200, angel fried shrimp ¥3,800, cheese omelette with week-long demi-glace ¥1,430, wagyu lean steak from 100 g ¥5,000 · Standard course, 9 dishes ¥10,000; Special course with foie-gras hamburg and wagyu katsu sandwich ¥17,250 (official site, tax included)',
    website: SITE, gmaps: gm('Severance 京都 三条'), menu_url: DINNER,
    notes: "[Yoshoku · Sanjo bridge, grown-up kids' lunch plates] A small blue-toned house just over the Sanjo bridge where a chef from old-school yoshoku and hotel French kitchens cooks in front of a teppan. Lunch is the famous \"adult's kids' lunch\": pick three or four of hamburg, kataifi-wrapped giant fried shrimp, crab cream croquette, roast wagyu or fried hamo on one plate (¥3,800–5,000). Dinner is à la carte or courses, with wines chosen by the owner-sommelier; half portions on request. 5% service. Closed Monday and alternate Tuesdays.",
    chef_bio: { chef_name: 'Shuhei Koishi (小石 修平)', roles: ['Chef; the owner is a sommelier (not named)'], origin: null,
      background: 'Per the official site: trained at long-established yoshoku restaurants and in hotel French kitchens; after going independent ran ROKUMEI, a pop-up curry shop known for European-style curry and grown-up kids’-plate lunches; cooked at Dining Bar MO-JI in Gion for a year, then became chef at its sister restaurant Severance. Severance ran a five-day pop-up at 404Kitchen in Shibuya Sakura Stage on 8–12 May 2025 (official news). Opened 6 January 2023 (Tabelog).',
      philosophy: 'Per the official site: the name means a dividing line — "beyond the door, a blissful space and food apart from everyday life"; old-style yoshoku such as hamburg and steak, updated for today.',
      specialty: '"Angel" fried shrimp wrapped in kataifi; the adult’s kids’ lunch plate.',
      anecdotes: [
        { text: 'A July 2026 regular reported that the chef brought back the adult’s kids’ lunch after a break because people kept asking for it, now with Manyo beef in the hamburg.', source: R + 'B459645878/' },
        { text: 'At an August 2026 à la carte dinner the staff offered half portions, since servings are large.', source: R + 'B533413644/' },
        { text: 'An August 2026 diner liked the homely mood but found the banter among staff too loud.', source: R + 'B533413644/' },
      ],
      japanese_sources_summary: '公式サイト (severance-kyoto.com): 京都三条鴨川近くの隠れ家洋食レストラン、三条通に面した小さな一軒家、青を基調とした店内、カウンター前に鉄板、最大14名、クラシックとモダンが重なった洋食、ドリンクはオーナーソムリエが厳選、系列店 Dining Bar MO-JI (祇園)。シェフ 小石修平: 老舗洋食店やホテルのフレンチで修業、独立後に間借りカレー店 ROKUMEI、欧風カレーや大人のお子様プレート、MO-JI で1年料理を担当したのち Severance のシェフ。ランチ: 大人のお子様ランチ、Severance プレート5,000円 (4種)、Casual プレート3,800円 (3種)、予約は電話か Instagram の DM。ディナーのアラカルト: 和牛ローストビーフの手毬寿司3,000円、サーモンレアフライ2,420円、Chef’s サラダ2,200円、天使のエビフライ3,800円、とろっとチーズのオムレツ1,430円、和牛の赤身ステーキ5,000円。コース: Standard 10,000円、Special 17,250円。東山区三条大橋東2丁目82、京阪三条から徒歩1分、ランチ火〜日11:30〜15:00、ディナー18:00〜22:00、月曜・隔週火曜定休、14席、カード可。2025年5月8〜12日に渋谷サクラステージ「404Kitchen」に出店。食べログ: 洋食・ビストロ、サービス料5%、d払い可、2023年1月6日オープン。',
      confidence: 'high', sources: [TB, SITE, ABOUT, DINNER, EVENT, R + 'B459645878/', R + 'B531235165/', R + 'B532678473/', R + 'B532852455/', R + 'B533133353/', R + 'B533413644/', R + 'B533565747/', R + 'B533862624/', R + 'B534174591/', R + 'B535173176/', R + 'B537056492/', R + 'B538634262/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Lunch bookings by phone or Instagram DM.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区三条大橋東2-82',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (news November 2026) and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.009365, 135.774003); GSI resolves 三条大橋東2-82 only to a town (三吉町, 291m away), so not lot-checked; the point is on Sanjo-dori east of the bridge, consistent with the official 110 m from Sanjo Keihan Stn; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE, DINNER],
    price_note: 'Official menu prices (tax included), checked November 2026; 5% service charge added.', last_checked: TODAY, items: [
      it('Severanceプレート', '', 'Severance plate: four signature yoshoku dishes, with soup and salad', '¥5,000', 'Lunch', 'no', 'no', '', 'severance_plate'),
      it('Casualプレート', '', 'Casual plate: three yoshoku dishes', '¥3,800', 'Lunch', 'no', 'no', '', 'casual_plate'),
      it('天使のエビフライ', '', '"Angel" fried shrimp wrapped in kataifi, bisque and citrus mayonnaise', '¥3,800', 'À la carte', 'no', 'no', '', 'angel_ebi_fry'),
      it('和牛ローストビーフの手毬寿司', '', 'Wagyu roast-beef temari sushi', '¥3,000', 'À la carte', 'ask', 'no', '', 'roastbeef_temari'),
      it('とろっとチーズのオムレツ', '', 'Cheese omelette with week-long demi-glace', '¥1,430', 'À la carte', 'ask', 'no', '', 'cheese_omelette'),
      it('和牛の赤身ステーキ', '', 'Wagyu lean steak (from 100 g)', '¥5,000', 'À la carte', 'ask', 'no', '', 'wagyu_steak'),
      it('Standard Course', '', 'Standard course, 9 dishes', '¥10,000', 'Course', 'no', 'no', '', 'standard_course'),
      it('Special Course', '', 'Special course with foie-gras hamburg and wagyu katsu sandwich', '¥17,250', 'Course', 'no', 'no', '', 'special_course'),
    ] }, {
    cuisine: 'カウンター前に鉄板を置いた、クラシックとモダンが重なる洋食 (公式サイト)・昼は「大人のお子様ランチ」: 名物から4種選ぶ Severance プレート5,000円、3種の Casual プレート3,800円。例: デミグラスのハンバーグ、カダイフを巻いた天使のエビフライとビスクソース、オマールと蟹のクリームコロッケ、和牛イチボのローストビーフ、鱧のフライ。スープ、サラダ、ライスかパン付き (公式サイト、2026年の口コミ)・夜のアラカルト: 和牛ローストビーフの手毬寿司3,000円、サーモンレアフライ2,420円、Chef’s サラダ2,200円、天使のエビフライ3,800円、1週間かけたデミグラスのとろっとチーズのオムレツ1,430円、和牛の赤身ステーキ100gから5,000円・9品の Standard コース10,000円、フォアグラハンバーグや和牛カツサンドの Special コース17,250円 (公式サイト、税込)',
    neighborhood: '三条大橋の東の三条通。三条京阪駅から徒歩1分',
    gf_detail: '要確認。デミグラスソース、クリームコロッケ、カダイフを巻いたエビフライ、カツサンド、パンのある洋食。グルテンの情報は公開されていない (公式サイト)。',
    vegan_detail: '要確認。肉と魚介が中心の洋食でサラダもいくつか。ヴィーガンの表示はない (公式サイト)。',
    notes: '[洋食・三条大橋、大人のお子様ランチ] 三条大橋を渡ってすぐの、青を基調にした小さな一軒家。老舗洋食店やホテルのフレンチで腕を磨いたシェフが鉄板の前で料理する。昼は名物の「大人のお子様ランチ」: ハンバーグ、カダイフを巻いた特大エビフライ、蟹のクリームコロッケ、和牛のローストビーフ、鱧のフライから3〜4種をワンプレートに (3,800〜5,000円)。夜はアラカルトかコースで、ワインはオーナーソムリエが選ぶ。頼めばハーフポーションも。サービス料5%。月曜と隔週火曜休み。',
  });
}

// ================================================================ 魚料理 あぎやお
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26006073/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://sakana-agiyao.jp/'; const RYORI = SITE + '%e6%96%99%e7%90%86/'; const ABOUT = SITE + 'sample-page/';
  const INV = 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=1130001073080';
  const H = day(['17:00', '24:00']);
  put({
    id: 'kyoto_sakana_ryori_agiyao', name: '魚料理 あぎやお (Sakana Ryori Agiyao)', category: 'OMNI',
    lat: 34.996635, lng: 135.7611136802766, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Seasonal fish served as sashimi with soy, grilled, simmered, fried and in miso dishes; no gluten information is published (official site; 2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish specialist (official site).',
    hours_raw: 'Dinner 17:00–24:00 per Tabelog; the official site gives lunch from 12:00 and dinner 17:00–23:00. Closed irregularly (official site; Tabelog). Bookings by phone or online (official site); late bookings such as 21:00 are taken (October 2026). À la carte carries a seat charge of ¥5,500 including two or three of the day’s recommended dishes (Tabelog’s Japanese original: 「【アラカルトの場合】席料として5500円（税込）（その日のオススメ2〜3皿含み）」); courses also offered; the à la carte menu shows no prices (November 2025). 10 counter seats (official site; a February 2026 reviewer counted 8); private hire for up to 20; non-smoking; cards (VISA, Master, JCB, AMEX, Diners), no e-money or QR (Tabelog). On the 2nd floor above バル agiyao on Higashinotoin north of Gojo; the entrance is a separate door beside the bar, and bar staff point the way (official site; February and October 2026). Opened 10 December 2007 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gojo-Higashinotoin — near Gojo Stn',
    cuisine: 'Fish specialist: the owner’s seasonal seafood and Kyoto vegetables, à la carte or chef’s omakase, with over 20 sakes chosen by a kikizakeshi and white wines by the glass from the bar downstairs (official site) · e.g. sashimi of striped jack, yellowtail, beardfish or trout, Hokkaido uni, koppe-gani crab, charcoal-grilled guchi, fried Spanish mackerel served rare, fried oysters and cod milt with sansho sauce, buri teppai with Kujo negi, monkfish liver, rock oysters in summer, red-miso clam soup (2025–2026 reviews)',
    website: SITE, gmaps: gm('魚料理 あぎやお 五条'), menu_url: RYORI,
    notes: '[Seafood · Gojo, a ten-seat fish counter] A wood-scented counter upstairs from the white-wine bar バル agiyao, devoted to seasonal fish: choose sashimi, grilled, simmered and fried dishes one by one, or leave it to the chef, with a deep sake list and wine from downstairs. À la carte has a ¥5,500 seat charge that covers two or three dishes of the day; dinners run ¥15,000–20,000. Use the separate door beside the bar. Open late; closed irregularly.',
    chef_bio: { chef_name: null, roles: ['Head chef not named (changed in late 2025, per reviews); operator 株式会社ＦＯＩＳ (invoice holder)'], origin: null,
      background: 'Per the official site: a fish specialist with only ten counter seats, a calm grown-up izakaya away from the bustle, cooking the owner’s seasonal seafood and Kyoto vegetables and supporting Kyoto food culture with Kyoto-grown ingredients; sake chosen by a kikizakeshi, white wine from バル agiyao on the 1st floor (a separate record). Reviewers in December 2025 and July 2026 note a new head chef. The invoice number belongs to 株式会社ＦＯＩＳ. Opened 10 December 2007 (Tabelog).',
      philosophy: 'Per the official site: a time that changes what you think "good fish" is.',
      specialty: 'Seasonal sashimi and charcoal-grilled fish, à la carte.',
      anecdotes: [
        { text: 'An October 2026 guest arriving late from a delayed Shinkansen was met outside by staff and shown through the right door.', source: R + 'B537517979/' },
        { text: 'A February 2026 diner unsure which door to use was guided upstairs by the bar staff.', source: R + 'B523440897/' },
        { text: 'A November 2025 diner found the ¥1,000 appetizers arrived only after three dishes.', source: R + 'B517533771/' },
      ],
      japanese_sources_summary: '公式サイト (sakana-agiyao.jp): 魚料理 あぎやお、京都 五条、大人のための居酒屋、カウンター10席のみの魚料理専門店、店主が仕入れる旬の魚介と季節の京野菜、一皿ずつアラカルトでも料理長のおまかせでも、唎酒師が厳選した日本酒を常時20種類以上、1階バル agiyao の白ワインもグラスで、京都産の食材で京都の食文化と地元産業を応援、下京区東洞院五条上る深草町592-3 2階、ランチ12:00〜、ディナー17:00〜23:00、不定休。食べログ: 魚介料理・日本料理・居酒屋、17:00〜24:00、アラカルトは席料5,500円 (その日のオススメ2〜3皿含む)、カウンター10席、20名まで貸切可、禁煙、カード可、2007年12月10日オープン、インボイス T1130001073080 (株式会社ＦＯＩＳ)。口コミ (2025年11月〜2026年10月、英語): 料理長が交代、値段のないメニュー、こっぺ蟹、ぐじの炭火焼き、岩牡蠣、入口は1階のバルの隣。',
      confidence: 'medium', sources: [TB, SITE, ABOUT, RYORI, INV, R + 'B458091129/', R + 'B483750724/', R + 'B504081588/', R + 'B517533771/', R + 'B519701788/', R + 'B523440897/', R + 'B526506992/', R + 'B532273067/', R + 'B532431307/', R + 'B536925358/', R + 'B537517979/', R + 'B537767814/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'The menu shows no prices; ask as you order.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区東洞院通五条上ル深草町592-3 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.996595, 135.761114); cross-checked: GSI 京都府京都市下京区深草町592番地 (lot) 56m; the Tabelog point was 5m from kyoto_bar_agiyao_gojo (the 1F bar of the same building), so moved about 4m north to keep the pins apart; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B517533771/', R + 'B537517979/', R + 'B504081588/'],
    price_note: 'Seat charge from Tabelog; dishes from 2025–2026 reviews; the menu shows no prices.', last_checked: TODAY, items: [
      it('', '', 'À la carte seat charge, including 2–3 dishes of the day', '¥5,500', 'Charge', 'ask', 'no', '', 'seat_charge'),
      it('', '', 'Seasonal sashimi', '', 'À la carte', 'ask', 'no', '', 'sashimi'),
      it('', '', 'Charcoal-grilled guchi (amadai)', '', 'À la carte', 'ask', 'no', 'Seasonal.', 'grilled_guchi'),
      it('', '', 'Fried oysters and cod milt with sansho sauce', '', 'À la carte', 'no', 'no', 'Seasonal.', 'fried_oyster_shirako'),
      it('', '', 'Red-miso clam soup', '', 'À la carte', 'ask', 'no', '', 'clam_akadashi'),
    ] }, {
    cuisine: '魚料理の専門店: 店主が仕入れる旬の魚介と季節の京野菜を、アラカルトでも料理長のおまかせでも。唎酒師が選ぶ20種以上の日本酒、1階のバルの白ワインもグラスで (公式サイト)・例: シマアジ、ブリ、ヒゲダイ、マスのお造り、北海道の雲丹、こっぺ蟹、ぐじの炭火焼き、レアに揚げた鰆のフライ、牡蠣と白子のフライと山椒のソース、九条ねぎのぶりのてっぱい、あん肝、夏の岩牡蠣、蛤の赤だし (2025〜2026年の口コミ)',
    neighborhood: '五条東洞院。五条駅の近く',
    gf_detail: '要確認。旬の魚をお造りと醤油、焼き物、煮付け、揚げ物、味噌の料理で。グルテンの情報は公開されていない (公式サイト、2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚料理の専門店 (公式サイト)。',
    notes: '[魚介・五条、10席の魚のカウンター] 白ワインのバル agiyao の上の階にある、木の香りのカウンター。旬の魚に専念し、お造り、焼き物、煮付け、揚げ物を一品ずつ選ぶか、料理長におまかせ。日本酒が充実し、下のバルのワインも頼める。アラカルトはその日の料理2〜3皿を含む席料5,500円、夜は15,000〜20,000円ほど。入口はバルの隣の別の扉。遅くまで営業、不定休。',
  });
}

// ================================================================ 祇園 鮨よし田
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26024841/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://gion-yoshida.com/';
  const H = day(['17:30', '21:00']);
  put({
    id: 'kyoto_gion_sushi_yoshida', name: '祇園 鮨よし田 (Sushi Yoshida)', category: 'MOM_AND_POP',
    lat: 35.00277207787615, lng: 135.77615241032845, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kappo dishes and Edomae sushi with soy, plus tempura and fried dishes; no gluten information is published (official site; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: kappo and Edomae sushi built on seafood (official site).',
    hours_raw: 'Dinner 17:30–21:00, bookings only (official site); Tabelog also lists lunch 11:30–13:30; closed irregularly (Tabelog). Bookings by phone or LINE (official site). Access: reviewers in June 2025, January 2026 and June 2026 describe it as introduction-only (一見さんお断り) and hard to book; the official site invites enquiries. No service charge listed (Tabelog). 10 seats: an 8-seat counter, a raised area for 2 and an upstairs private room for 4; non-smoking; cards, no e-money (Tabelog; official site). In a lane off Hanamikoji in south Gion, 394 m from Gion-Shijo Stn (Tabelog). Opened 11 November 2014 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion, off Hanamikoji — 394 m from Gion-Shijo Stn',
    cuisine: 'Kappo and Edomae sushi on red-vinegar rice, à la carte or as a course, with close care over temperature and ageing (official site; Tabelog) · courses: 8 dishes, 10 nigiri and red-miso soup from ¥25,000; kappo of your choice with nigiri from ¥30,000 (official site) · e.g. hamo sashimi, matsutake dobin-mushi, kawahagi with liver sauce, seared mackerel, fugu, monkfish liver, Lake Biwa moroko, grilled eel, turtle hot pot, corn tempura, fried abalone, an uni tasting with Amakusa uni, nigiri of akagai, white shrimp, kuruma ebi, abalone, anago and tuna, futomaki cut to size (reviews 2023–2026)',
    website: SITE, gmaps: gm('祇園 鮨よし田'), menu_url: SITE,
    notes: '[Sushi · Gion, kappo and Edomae sushi as you like it] A ten-seat Gion counter off Hanamikoji where the motto is "what you like, how you like, as much as you like": kappo dishes such as hamo, fugu or turtle hot pot first, then Edomae nigiri on red-vinegar rice, ordered piece by piece or as a course (from ¥25,000; most spend ¥30,000–50,000). Several reviewers describe it as introduction-only and hard to book; the official site takes enquiries by phone or LINE. Dinner, bookings only.',
    chef_bio: { chef_name: '吉田紀彦', roles: ['Owner (店主) and chef'], origin: null,
      background: 'Per the official site, signed by the owner 吉田紀彦: kappo and Edomae sushi served in peak condition, with care over the number of dishes, temperature and ageing, matched to each guest’s taste; à la carte, omakase courses or dishes to a budget; a raised area and an upstairs private room for business use. Opened November 2014 in Hanamikoji (Tabelog official introduction).',
      philosophy: 'Per the official site: 「お好きなものを お好きな様に お好きなだけ」 — what you like, how you like, as much as you like; a food utopia where truly good things can be enjoyed freely.',
      specialty: 'Edomae nigiri on red-vinegar rice after à la carte kappo dishes.',
      anecdotes: [
        { text: 'A January 2026 diner, there by a friend’s introduction, found the chef gentle-mannered and happy to adjust portions to taste.', source: R + 'B521222820/' },
        { text: 'A June 2025 guest watched the futomaki being cut to a chosen size.', source: R + 'B509195347/' },
        { text: 'A September 2026 diner returning after seven years ate eight dishes and then 15 pieces of sushi.', source: R + 'B419246751/' },
      ],
      japanese_sources_summary: '公式サイト (gion-yoshida.com): 祇園 鮨よし田、「お好きなものを お好きな様に お好きなだけ」、品数・温度管理・熟成にこだわり割烹と江戸前鮨を最高の状態で、アラカルト・おまかせコース・ご予算に合わせた料理、小上がりと二階個室、店主 吉田紀彦。ディナー17:30〜21:00 (予約のみ)、料理8品・にぎり10貫・赤だし25,000円〜、お好み割烹とにぎり30,000円〜、東山区祇園町南側570-179、予約は電話か LINE。食べログ: 寿司・日本料理、2014年11月花見小路に開店、赤酢のシャリの江戸前鮨、昼11:30〜13:30・夜17:30〜21:00、不定休、10席 (カウンター8、小上がり2、個室4)、カード可。口コミ: 一見さんお断り (2025年6月、2026年1月・6月)、大将は物腰が柔らかく量も調整、基本はアラカルト。',
      confidence: 'medium', sources: [TB, SITE, R + 'B419246751/', R + 'B462688945/', R + 'B468249557/', R + 'B469069938/', R + 'B478606296/', R + 'B489185345/', R + 'B509195347/', R + 'B512462742/', R + 'B517593830/', R + 'B518257058/', R + 'B521222820/'] },
    cultural_comfort: { level: 'japanese', note: 'Reported as introduction-only; bookings by phone or LINE in Japanese.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区祇園町南側570-179',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (copyright 2026) and Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.002772, 135.776152); GSI 京都府京都市東山区祇園町南側570番地 (lot) is 215m away — 570 is a very large lot covering much of south Gion — so not lot-checked; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE],
    price_note: 'Official course prices, checked November 2026.', last_checked: TODAY, items: [
      it('お料理8品にぎり10貫と赤だし', '', 'Course: 8 dishes, 10 nigiri and red-miso soup', '¥25,000', 'Course', 'ask', 'no', 'From ¥25,000.', 'course'),
      it('お好み割烹とにぎり', '', 'Kappo dishes of your choice with nigiri', '¥30,000', 'Course', 'ask', 'no', 'From ¥30,000.', 'okonomi'),
    ] }, {
    cuisine: '赤酢のシャリの江戸前鮨と割烹を、アラカルトでもコースでも。温度管理と熟成にこだわる (公式サイト、食べログ)・コース: 料理8品・にぎり10貫・赤だし25,000円〜、お好み割烹とにぎり30,000円〜 (公式サイト)・例: 鱧のお造り、松茸の土瓶蒸し、カワハギの肝ソース、鯖の炙り、河豚、あん肝、琵琶湖の諸子、蒲焼き鰻、すっぽん鍋、とうもろこしの天ぷら、鮑の唐揚げ、Amakusa の雲丹の食べ比べ、赤貝・白海老・車海老・鮑・穴子・鮪の握り、好みの大きさに切る太巻き (2023〜2026年の口コミ)',
    neighborhood: '祇園、花見小路の路地。祇園四条駅から394m',
    gf_detail: '要確認。醤油を使う割烹と江戸前鮨、天ぷらや揚げ物も。グルテンの情報は公開されていない (公式サイト、口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚介が中心の割烹と江戸前鮨 (公式サイト)。',
    notes: '[寿司・祇園、好きなものを好きなだけの割烹と江戸前鮨] 花見小路から入る祇園の10席のカウンター。合言葉は「お好きなものを お好きな様に お好きなだけ」: 鱧や河豚、すっぽん鍋などの割烹の後に、赤酢のシャリの江戸前の握りを一貫ずつでもコースでも (25,000円から、30,000〜50,000円ほどが多い)。複数の口コミでは一見さんお断りで予約が取りにくいとされるが、公式サイトは電話か LINE で問い合わせを受け付けている。夜のみ、予約制。',
  });
}

save();
