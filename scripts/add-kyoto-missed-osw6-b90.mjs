// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 90.
//   + 北風と太陽 Kitchen & Wine (basement Italian wine dining at Shijo-Muromachi, open from lunch to late) — rest
//   + 腸活 OKAMI LABO (fermented-food breakfasts and set lunches near Higashiyama Station) — rest
//   + ちょこっと 色々旨いもん 色 -Shiki- (small-plates izakaya at Muromachi-Rokkaku; dashi-curry lunches) — rest
//   + KAEru coffee (house-roasting café with frog décor, south of Gojo) — rest
//   Rest tier, nearest-first from `next rest 2000`. Every brand checked against queue-status.jsonl, the THAN brand list
//   (than.co.jp/brands, read 2026-11-08) and the 株式会社WILL ruling (26043489): no matches for 北風と太陽, OKAMI, 色 -Shiki- or
//   KAEru (the only "KAEru"-like name, 茶亭 カエルノウタ, is unrelated). Same-name counts (2026-11-08): one each.
//   None of the drafted shops is in data/kyoto.json.
//   Charges: 色 -Shiki- 「単品料理ご注文の方のみお通し代400円（税込み）」 (Tabelog). 北風と太陽: Tabelog's reservation note (English
//   only) mentions a private-room fee of 10% for two guests, 5% for three, free for four or more. Others: none listed.
//   No halal claims; no owner deaths; single-review remarks about other diners left out.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-90');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 北風と太陽 Kitchen & Wine
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26040442/'; const R = TB + 'dtlrvwlst/';
  const A = day(['11:30', '23:30']); const P = day(['15:00', '23:30']);
  put({
    id: 'kyoto_kitakaze_to_taiyo', name: '北風と太陽 Kitchen & Wine (Kitakaze to Taiyo)', category: 'OMNI',
    lat: 35.002326, lng: 135.757178, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: pasta, bread and risotto are central; lunch courses are built around pasta (2025–26 reviews). Staff accommodated one regular’s dietary restrictions (October 2026) — ask.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: duck, roast beef, oysters, Camembert, sausages and boudin noir (2025–26 reviews).',
    hours_raw: 'Mon, Thu–Sun 11:30–23:30 (food last order 22:30, drinks 23:00); Tue–Wed 15:00–23:30 (Tabelog). Lunch courses 11:30–14:30 (Tabelog). A wine event once a month, announced on Instagram (Tabelog). Tabelog’s reservation note mentions a private-room fee: 10% for two guests, 5% for three, none for four or more. Cards, e-money and QR (Tabelog). 28 seats: counter, tables and private rooms (Tabelog; June 2026). Basement of AMI Shijo Karasuma, through a heavy door at the foot of the stairs (June 2026), on Ayanokoji west of Muromachi.',
    hours: { 0: A, 1: P, 2: P, 3: A, 4: A, 5: A, 6: A }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ayanokoji-Muromachi — Shijo Karasuma',
    cuisine: 'Italian kitchen and wine bar, dishes served divided per person · lunch from ¥1,400: salad with three dressings, pasta (aglio e olio, tomato or cream) and bread; Taiyo course with appetizers, soup, pasta, dessert and a drink (November 2025, February 2026) · evening: duck carpaccio with sansho foam, roast beef (August 2025), oyster ajillo, Camembert ajillo (December 2025), oyster and Kujo negi ajillo, wine-steamed seafood finished as risotto (March 2026), duck, bonito, boudin noir (June 2026) · wine pairings (October and November 2026)',
    website: null, gmaps: gm('北風と太陽 Kitchen & Wine 京都'), menu_url: TB,
    notes: '[Italian & wine · Shijo-Muromachi] A calm basement Italian dining bar near Shijo-Karasuma, open from lunch through to late on most days: good-value pasta lunch courses, then duck carpaccio with sansho foam, ajillos, roast beef and seasonal plates, each served split per person, with wine pairings. Private rooms carry a small fee for two or three. Tuesday and Wednesday from 15:00.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed) (June 2026)'], origin: null,
      background: 'Per Tabelog: an Italian dining bar opened 4 December 2023 in the basement of AMI Shijo Karasuma.',
      philosophy: null, specialty: 'Duck carpaccio with sansho foam; per-person plating of à la carte dishes.',
      anecdotes: [
        { text: 'A June 2026 solo visitor, expecting a casual bistro behind the heavy basement door, found glasses and napkins laid and dishes timed to the diner’s pace like a course — corn soup, duck, bonito and boudin noir with three glasses of wine.', source: R + 'B530063884/' },
        { text: 'A November 2026 regular on a fourth visit came for à la carte and was offered a course built to taste instead, with a financier wrapped to take home when full.', source: R + 'B534041186/' },
      ],
      japanese_sources_summary: '食べログ: ダイニングバー・ビストロ、下京区綾小路通室町西入る善長寺町139 AMI四条烏丸 B1F、月木金土日11:30〜23:30 (料理L.O.22:30・ドリンクL.O.23:00)、火水15:00〜23:30、ランチコース11:30〜14:30、月1回のワインイベント、個室料 (2名10%・3名5%・4名以上無料)、カード・電子マネー・QR 可、28席、2023年12月4日オープン。口コミ (2025年8月〜2026年11月、英語): 鴨のカルパッチョ山椒の泡、ローストビーフ、牡蠣やカマンベールのアヒージョ、牡蠣と九条ねぎのアヒージョ、ワイン蒸しをリゾットに、ブーダンノワール、ランチ1,400円から (サラダ、パスタ、パン)、太陽コース、料理は一人ずつ取り分けて出す、ワインのペアリング、オーナーシェフ、地下の重い扉。',
      confidence: 'medium', sources: [TB, R + 'B511137015/', R + 'B517704195/', R + 'B519235273/', R + 'B520021375/', R + 'B522351740/', R + 'B522927114/', R + 'B523841950/', R + 'B525164338/', R + 'B530063884/', R + 'B532622693/', R + 'B534041186/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book the sofa or private seats ahead; à la carte dishes come split per person. Tell staff your budget for wine. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区綾小路通室町西入る善長寺町139 AMI四条烏丸 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.002326, 135.757178); cross-checked: GSI 京都府京都市下京区善長寺町139番地 (lot) 20m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B522351740/', R + 'B522927114/'],
    price_note: 'Lunch from ¥1,400 (February 2026); reviewers report ¥6,000–19,999 at dinner.', last_checked: TODAY, items: [
      it('', '', 'Pasta lunch (salad, pasta, bread)', '¥1,400', 'Lunch', 'no', 'no', 'February 2026; from ¥1,400.', 'pasta_lunch'),
      it('', '', 'Taiyo lunch course', '', 'Lunch', 'no', 'no', 'November 2025 and February 2026.', 'taiyo_course'),
      it('', '', 'Duck carpaccio with sansho foam', '', 'À la carte', 'ask', 'no', 'August 2025.', 'duck_carpaccio'),
      it('', '', 'Oyster and Kujo negi ajillo', '', 'À la carte', 'ask', 'no', 'March 2026.', 'oyster_ajillo'),
    ] }, {
    cuisine: '料理を一人ずつ取り分けて出すイタリアンとワインのバー・昼は1,400円からのサラダ (ドレッシング3種)、パスタ (アーリオオーリオ、トマト、クリーム)、パン、前菜・スープ・デザート・ドリンク付きの太陽コース (2025年11月、2026年2月)・夜は鴨のカルパッチョ山椒の泡、ローストビーフ (2025年8月)、牡蠣のアヒージョ、カマンベールのアヒージョ (2025年12月)、牡蠣と九条ねぎのアヒージョ、魚介のワイン蒸しをしめにリゾット (2026年3月)、鴨、かつお、ブーダンノワール (2026年6月)・ワインのペアリング (2026年10月・11月)',
    neighborhood: '綾小路室町。四条烏丸',
    gf_detail: 'グルテンフリーではない。パスタ、パン、リゾットが中心。ランチコースもパスタ (2025〜2026年の口コミ)。常連の食事制限に対応した例あり (2026年10月)、確認を。',
    vegan_detail: 'ヴィーガン不可。鴨、ローストビーフ、牡蠣、カマンベール、ソーセージ、ブーダンノワール (2025〜2026年の口コミ)。',
    notes: '[イタリアンとワイン・四条室町] 四条烏丸近くの落ち着いた地下のイタリアンのダイニングバー。多くの日は昼から夜遅くまで。お得なパスタのランチコース、夜は鴨のカルパッチョ山椒の泡、アヒージョ、ローストビーフ、季節の皿を一人ずつ取り分けて、ワインのペアリングも。2〜3名の個室は個室料あり。火・水は15時から。',
  });
}

// ================================================================ 腸活 OKAMI LABO
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26041510/'; const R = TB + 'dtlrvwlst/'; const SITE = 'https://okamilabo.jp/';
  const H = day(['08:00', '09:30'], ['11:30', '18:00']);
  put({
    id: 'kyoto_chokatsu_okami_labo', name: '腸活 OKAMI LABO (Chokatsu OKAMI LABO)', category: 'OMNI',
    lat: 35.009353, lng: 135.77837, cuisine_type: 'shokudo',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Set meals of fermented, koji-seasoned dishes with aged brown rice, plus a fermented curry (2025–26 reviews); koji seasonings and soy-based ones are not described for wheat. No allergen information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Many seasonal vegetable sides, but the mains are meat or fish (pork shabu-shabu, sawara with plum, chicken gratin) and no vegan option is sourced (2024–26 reviews).',
    hours_raw: 'Breakfast 8:00–9:30 and lunch/café 11:30–18:00; closed Thursday; may change (Tabelog). Seats fill soon after lunch opens on Saturdays — reservations advised (December 2025). Cards; no e-money or QR (Tabelog). Staff speak English and Japanese (September 2026). On the main street near Higashiyama Station (November 2024, August 2025). The shop also offers abdominal massage treatments (shop site; 2024–25 reviews).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Near Higashiyama Station — Higashiyama',
    cuisine: 'Gut-health café of fermented foods · Chokatsu set: meat or fish main with three of six to eight small sides, aged brown rice and soup — meat ¥1,540 (June 2025); sawara simmered with plum (December 2025); pork shabu-shabu with mushrooms and mizuna (October 2026) · fermented curry (August and December 2025) · koji sweets, sake-lees smoothie (June and August 2025) · breakfast sets, Japanese or Western, from 8:00 (June 2025)',
    website: SITE, gmaps: gm('腸活 OKAMI LABO 京都 東山'), menu_url: TB,
    notes: '[Fermented-food set meals · Higashiyama] A bright café near Higashiyama Station built around fermented food: set lunches of a meat or fish main with three chosen seasonal sides and aged brown rice, a fermented curry, koji sweets, and Japanese or Western breakfasts from 8:00. English spoken. Closed Thursday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), who runs it with a daughter (April 2025)'], origin: null,
      background: 'Per Tabelog and reviews: a café opened 25 May 2024 near Higashiyama Station, serving fermented-food meals; the shop also offers abdominal massage treatments (May 2024, June 2025).',
      philosophy: 'Per the shop’s name and reviews: meals of fermented foods and seasonal vegetables for gut health (June 2025).', specialty: 'Chokatsu set meal; fermented curry.',
      anecdotes: [
        { text: 'An April 2025 traveller liked the breakfast enough to come back the same trip for lunch, glad of the vegetables, served by the owner and daughter.', source: R + 'B504671715/' },
        { text: 'A December 2025 Saturday diner arrived at opening to find the seats filling fast, and had sawara simmered with plum among three chosen sides.', source: R + 'B518439546/' },
      ],
      japanese_sources_summary: '食べログ: カフェ、東山区西海子町47、朝8:00〜9:30・昼11:30〜18:00、木曜休み、カード可、電子マネー・QR 不可、2024年5月25日オープン。口コミ (2024年5月〜2026年10月、英語): 腸活ごはん、肉か魚の主菜に6〜8種から小鉢3品、熟成玄米、腸活定食 (肉) 1,540円、鰆の梅煮、豚しゃぶときのこと水菜、発酵カレー、麹のスイーツ、酒かすのスムージー、和洋の朝食、お腹のマッサージの施術も、店主と娘さん、英語と日本語で対応、土曜は予約がおすすめ、東山駅の近く。',
      confidence: 'medium', sources: [TB, SITE, R + 'B504671715/', R + 'B509116412/', R + 'B512174788/', R + 'B513172437/', R + 'B515777772/', R + 'B518439546/', R + 'B538277431/'] },
    cultural_comfort: { level: 'english', note: 'Staff explain the menu in English and Japanese (September 2026). Book for Saturday lunch.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区西海子町47',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop site; Tabelog reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.009353, 135.778370); cross-checked: GSI 京都府京都市東山区西海子町47番地 (lot) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B513172437/'],
    price_note: 'One price from June 2025; reviewers report ¥1,000–1,999 per person.', last_checked: TODAY, items: [
      it('', '', 'Chokatsu set meal (meat)', '¥1,540', 'Lunch', 'ask', 'no', 'June 2025.', 'chokatsu_set'),
      it('', '', 'Fermented curry set', '', 'Lunch', 'ask', 'ask', 'August and December 2025.', 'fermented_curry'),
      it('', '', 'Breakfast set (Japanese or Western)', '', 'Breakfast', 'ask', 'ask', 'June 2025.', 'breakfast'),
    ] }, {
    cuisine: '発酵食品の腸活カフェ・腸活定食: 肉か魚の主菜に6〜8種から小鉢3品、熟成玄米、汁物、肉1,540円 (2025年6月)、鰆の梅煮 (2025年12月)、豚しゃぶときのこと水菜 (2026年10月)・発酵カレー (2025年8月・12月)・麹のスイーツ、酒かすのスムージー (2025年6月・8月)・8時からの和洋の朝食 (2025年6月)',
    neighborhood: '東山駅の近く。東山',
    gf_detail: '要確認。発酵食品と麹の調味料の定食、熟成玄米、発酵カレー (2025〜2026年の口コミ)。麹や醤油系の調味料の小麦の有無は不明。アレルゲンの情報なし。',
    vegan_detail: '要確認。季節の野菜の小鉢は多いが、主菜は肉か魚 (豚しゃぶ、鰆の梅煮、チキングラタン)。ヴィーガンの選択肢の情報はない (2024〜2026年の口コミ)。',
    notes: '[発酵食品の定食・東山] 東山駅近くの明るい腸活カフェ。肉か魚の主菜に好きな季節の小鉢3品と熟成玄米の定食、発酵カレー、麹のスイーツ、8時からは和洋の朝食。英語も通じる。木曜休み。',
  });
}

// ================================================================ ちょこっと 色々旨いもん 色 -Shiki-
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26042620/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '15:00'], ['17:00', '23:00']);
  put({
    id: 'kyoto_chokotto_shiki', name: 'ちょこっと 色々旨いもん 色 -Shiki- (Chokotto Iroiro Umaimon Shiki)', category: 'OMNI',
    lat: 35.007199, lng: 135.757883, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: gyoza, tempura, karaage, shrimp pasta, curry and dashi dishes (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sea bream, tuna, chicken, beef tendon, dashi throughout (2025–26 reviews).',
    hours_raw: 'Daily 11:00–15:00 (last order 14:00) and 17:00–23:00 (food last order 22:00, drinks 22:30); closing days vary (Tabelog). 「単品料理ご注文の方のみお通し代400円（税込み）」 — a ¥400 appetizer charge applies only when ordering à la carte, not on courses (Tabelog). Cards and QR; no e-money (Tabelog). 22 seats: a counter and private table rooms for four, which join for eight (Tabelog; March and May 2025). Small sign at the building entrance, just south of the Rokkaku–Muromachi crossing, near Karasuma Oike (March 2025).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Muromachi-Rokkaku — Karasuma Oike',
    cuisine: 'Small-plates izakaya ranging over Japanese, Western, Chinese and Italian dishes · lunch: karaage set ¥1,000 (March 2025), vegetable soup curry ¥1,300 (April 2025), sea-bream dashi curry, omurice (May 2025), sea-bream rice (July 2025) · dinner: mini course ¥3,300 — Yamato somen, dashimaki, beef tendon with daikon, pumpkin mousse, gyoza with vinegar, ponzu or sansho salt, tempura (August 2026); sashimi, marinated sea bream, sea-bream chazuke (July 2026); shrimp pasta (March 2025)',
    website: null, gmaps: gm('色 Shiki 室町六角 京都'), menu_url: TB,
    notes: '[Izakaya · Muromachi-Rokkaku] A calm small-plates izakaya with a counter and private rooms, opened in 2025 near Karasuma Oike: set lunches such as sea-bream dashi curry or karaage, and in the evening a ¥3,300 mini course — dashimaki, beef tendon, gyoza, tempura — or sashimi and sea-bream chazuke, with dishes split per person. ¥400 appetizer charge on à la carte orders only.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog and reviews: an izakaya opened 1 March 2025 on the ground floor of Ramblas Muromachi Rokkaku, serving Japanese, Western, Chinese and Italian dishes (March 2025).',
      philosophy: null, specialty: 'Mini course; sea-bream dashi curry.',
      anecdotes: [
        { text: 'An August 2026 diner tried the ¥3,300 mini course of six dishes and was most struck by the dashimaki and the gyoza with three dips.', source: R + 'B534001788/' },
        { text: 'A July 2026 pair asked for no cucumber in the salad; the staff remade and re-plated it, and the two came back the next day.', source: R + 'B531732917/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋、中京区鯉山町507 ランブラス室町六角 1F、毎日11:00〜15:00 (L.O.14:00)・17:00〜23:00 (料理L.O.22:00・ドリンクL.O.22:30)、不定休、単品料理ご注文の方のみお通し代400円 (税込み)、カード・QR 可、電子マネー不可、22席、2025年3月1日オープン。口コミ (2025年3月〜2026年11月、英語): 和洋中伊の料理、カウンターと個室、昼は唐揚げ1,000円、野菜のスープカレー1,300円、鯛だしカレー、オムライス、鯛めし、夜はミニコース3,300円 (Yamato somen、だし巻き、牛すじと大根、かぼちゃのムース、餃子、天ぷら)、刺身、鯛の漬け、鯛茶漬け、海老のパスタ、料理を取り分けて出す、六角室町の少し南。',
      confidence: 'medium', sources: [TB, R + 'B502452650/', R + 'B502479849/', R + 'B505372024/', R + 'B506902374/', R + 'B510536412/', R + 'B531333214/', R + 'B531732917/', R + 'B534001788/', R + 'B535370146/', R + 'B538607479/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order a course to skip the ¥400 à la carte appetizer charge. Mention dislikes — the staff adjust dishes. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区鯉山町507 ランブラス室町六角 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.007199, 135.757883); cross-checked: GSI 京都府京都市中京区鯉山町507番地 (lot) 53m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B502452650/', R + 'B505372024/', R + 'B534001788/'],
    price_note: 'Prices from March and April 2025 and August 2026.', last_checked: TODAY, items: [
      it('', '', 'Mini course (six dishes)', '¥3,300', 'Courses', 'no', 'no', 'August 2026.', 'mini_course'),
      it('', '', 'Karaage lunch', '¥1,000', 'Lunch', 'no', 'no', 'March 2025.', 'karaage_lunch'),
      it('', '', 'Vegetable soup curry with salad (lunch)', '¥1,300', 'Lunch', 'no', 'no', 'April 2025.', 'soup_curry'),
      it('', '', 'Sea-bream dashi curry (lunch)', '', 'Lunch', 'no', 'no', 'May 2025.', 'tai_curry'),
    ] }, {
    cuisine: '和洋中伊のちょこっとした料理の居酒屋・昼は唐揚げ1,000円 (2025年3月)、野菜のスープカレー1,300円 (2025年4月)、鯛だしカレー、オムライス (2025年5月)、鯛めし (2025年7月)・夜はミニコース3,300円: Yamato somen、だし巻き、牛すじと大根、かぼちゃのムース、酢・ポン酢・山椒塩の餃子、天ぷら (2026年8月)、刺身、鯛の漬け、鯛茶漬け (2026年7月)、海老のパスタ (2025年3月)',
    neighborhood: '室町六角。烏丸御池',
    gf_detail: 'グルテンフリーではない。餃子、天ぷら、唐揚げ、海老のパスタ、カレー、出汁の料理 (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鯛、まぐろ、鶏、牛すじ、出汁 (2025〜2026年の口コミ)。',
    notes: '[居酒屋・室町六角] 烏丸御池近く、2025年開店のカウンターと個室の落ち着いた居酒屋。昼は鯛だしカレーや唐揚げの定食、夜は3,300円のミニコース (だし巻き、牛すじ、餃子、天ぷら) や刺身、鯛茶漬けを取り分けて。単品の注文のみお通し代400円。',
  });
}

// ================================================================ KAEru coffee
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26030668/'; const R = TB + 'dtlrvwlst/';
  const H = day(['09:00', '18:00']);
  put({
    id: 'kyoto_kaeru_coffee', name: 'KAEru coffee (カエル コーヒー)', category: 'OMNI',
    lat: 34.995306, lng: 135.762446, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: food is toast, sandwiches, scones, banana bread and carrot cake (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: butter chicken curry, cheese toast, carrot cake with whipped cream (2026 reviews). Black coffee is the plant-based choice.',
    hours_raw: 'Mon, Wed–Sun 9:00–18:00; closed Tuesday and some irregular days (Tabelog). Cards and e-money; no QR (Tabelog). Fills by mid-afternoon on weekdays (February 2026). Faces a small park, just south of Gojo near Takakura, close to Gojo Station (March, May and July 2026).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'South of Gojo, by Takakura — Gojo',
    cuisine: 'House-roasting café with frog décor · single origins and blends chosen from a bitterness–acidity chart — Mandheling, Colombia, a fruity blend (February–May 2026) · café latte with coffee jelly (February 2026) · butter chicken curry (May 2026) · cheese toast (March and July 2026), sandwich (May 2026) · warm carrot cake with whipped cream, four kinds of scone (February 2026), banana bread (July 2026)',
    website: null, gmaps: gm('KAEru coffee 京都 五条'), menu_url: TB,
    notes: '[Coffee · south of Gojo] A wood-panelled café facing a small park just south of Gojo, roasting its own beans and full of frog figurines: single origins and blends picked from a taste chart, cheese toast for breakfast, butter chicken curry, warm carrot cake and banana bread. Closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), described as kind (September 2026)'], origin: null,
      background: 'Per Tabelog and reviews: a café opened 2 May 2018 south of Gojo, roasting its own beans (February 2026).',
      philosophy: null, specialty: 'House-roasted coffee; butter chicken curry.',
      anecdotes: [
        { text: 'A May 2026 regular, posting for the first time, chose an iced fruity blend from the menu’s bitterness–acidity chart to go with the long-standing butter chicken curry, and came back the next weekend.', source: R + 'B531249536/' },
        { text: 'A February 2026 visitor spent the visit spotting the frogs hidden around the room over a café latte with coffee jelly.', source: R + 'B522111400/' },
      ],
      japanese_sources_summary: '食べログ: カフェ・喫茶店、下京区堺町20 穂積ビル1F、月水木金土日9:00〜18:00、火曜休み・不定休、カード・電子マネー可、QR 不可、2018年5月2日オープン。口コミ (2026年2月〜9月、英語): 自家焙煎、カエルの置物、苦味と酸味のチャート、マンデリン、コロンビア、フルーティーなブレンド、コーヒーゼリー入りのカフェラテ、バターチキンカレー、チーズトースト、サンドイッチ、温かいキャロットケーキとホイップクリーム、スコーン4種、バナナブレッド、小さな公園の前、五条通の南、五条高倉、五条駅の近く。',
      confidence: 'medium', sources: [TB, R + 'B522111400/', R + 'B522329994/', R + 'B522863602/', R + 'B523885300/', R + 'B524178765/', R + 'B526936735/', R + 'B529767656/', R + 'B531249536/', R + 'B531946086/', R + 'B532592200/', R + 'B532692353/', R + 'B534912557/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Use the coffee chart on the menu to pick a bean. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区堺町20 穂積ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (34.995306, 135.762446); cross-checked: GSI 京都府京都市下京区堺町20番地 (lot) 42m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B531249536/', R + 'B522863602/'],
    price_note: 'No prices quoted in 2026 reviews; reviewers report ¥1,000–1,999 per person.', last_checked: TODAY, items: [
      it('', '', 'House-roasted coffee (single origins and blends)', '', 'Coffee', 'ask', 'ask', '2026 reviews.', 'coffee'),
      it('', '', 'Butter chicken curry', '', 'Food', 'no', 'no', 'May 2026.', 'butter_chicken'),
      it('', '', 'Carrot cake with whipped cream', '', 'Sweets', 'no', 'no', 'February 2026.', 'carrot_cake'),
    ] }, {
    cuisine: 'カエルの飾りの自家焙煎のカフェ・苦味と酸味のチャートから選ぶストレートとブレンド、マンデリン、コロンビア、フルーティーなブレンド (2026年2月〜5月)・コーヒーゼリー入りのカフェラテ (2026年2月)・バターチキンカレー (2026年5月)・チーズトースト (2026年3月・7月)、サンドイッチ (2026年5月)・温かいキャロットケーキとホイップクリーム、スコーン4種 (2026年2月)、バナナブレッド (2026年7月)',
    neighborhood: '五条の南、高倉のそば。五条',
    gf_detail: 'グルテンフリーではない。食事はトースト、サンドイッチ、スコーン、バナナブレッド、キャロットケーキ (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。バターチキンカレー、チーズトースト、ホイップクリームのキャロットケーキ (2026年の口コミ)。植物性ならブラックコーヒー。',
    notes: '[コーヒー・五条の南] 五条通の少し南、小さな公園に面した木の内装のカフェ。自家焙煎で、店じゅうにカエルの置物。チャートから選ぶストレートやブレンド、朝はチーズトースト、バターチキンカレー、温かいキャロットケーキやバナナブレッド。火曜休み。',
  });
}

save();
