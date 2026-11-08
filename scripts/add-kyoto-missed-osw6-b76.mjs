// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 76.
//   - re-skip 26033590 蔵代味噌 (retail food shop; neither historic-family nor sourced GF/vegan options)
//   + Arfa cafe (fifth-floor dining bar with party courses and night views, Sanjo-Kiyamachi) — rest
//   + 祇園 ふぐ松 Gion Fugu Matsu (grilled-fugu specialist, Gion north side) — rest
//   + 雪月花 Setsu Gekka (family-run cigar, whisky and chocolate bar in a Taisho-era former bank, Sanjo) — rest
//   + 個室焼肉 一龍萬倍 Ichiryuu Manbai (private-room yakiniku courses near Shijo-Karasuma) — rest
//   Greg's 11-07 ruling on retail food shops: list particularly historic family-owned shops and those with GF or vegan options.
//   蔵代味噌 opened in October 2018 (Tabelog), and neither its site (kuradai-miso.com, read 2026-11-08) nor its reviews name a
//   founding family, a GF product or a vegan product (its range includes barley miso; a reviewed negi miso has anchovies), so it
//   stays skipped.
//   Rest tier, nearest-first from `next rest 2000`. queue-status.jsonl grepped for each brand (Arfa, ふぐ松, 雪月花, 一龍萬倍): no
//   earlier rulings.
//   Same-name counts first (2026-11-08): Arfa cafe — one. ふぐ松 — one. 雪月花 — one Kyoto bar. 一龍萬倍 — Tabelog shows many
//   unrelated "Ichiryu Manbai" names and a Kyoto ramen group 麺匠 一龍萬倍 (three open shops, one on hold); no source ties the
//   yakiniku to it, and either way it is under five — drafted, flagged. None of the four is in data/kyoto.json.
//   Charges per Tabelog's Japanese original: Arfa 「サービス料、チャージ料なし。ワンドリンク制」; 雪月花 「チャージ料500円（ シガー販売）」;
//   ふぐ松 and 一龍萬倍 none listed. No halal claims; no owner deaths; single-review remarks about other diners and staff looks left out.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-76');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26033590', 'retail food shop (Greg 11-07 ruling): 蔵代味噌 is a miso shop selling to take home, opened October 2018 — not a historic family business, and no GF or vegan options are sourced (https://www.kuradai-miso.com; https://tabelog.com/en/kyoto/A2601/A260202/26033590/).');

// ================================================================ Arfa cafe
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26006944/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '15:00'], ['17:00', '00:00']);
  put({
    id: 'kyoto_arfa_cafe_sanjo', name: 'Arfa cafe', category: 'OMNI',
    lat: 35.009558, lng: 135.770395, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: pizza, pasta, baguette snacks, gratin and waffles (2024–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: cheese fondue, cream gratin and pasta, prosciutto, bacon (2024–26 reviews).',
    hours_raw: 'Daily 12:00–15:00 (last orders food 14:00, drinks 14:30) and 17:00–0:00 (last orders food 23:00, drinks 23:30); irregular closures; private hire outside hours by phone (Tabelog). No service or cover charge; one drink per person (Tabelog, Japanese text: 「サービス料、チャージ料なし。ワンドリンク制」). Cards; no e-money or QR (Tabelog). 31 seats, up to 40 standing; private rooms for 2–8 (Tabelog). Non-smoking (Tabelog). USEN.X Kiyamachi 5F, Kawaramachi north of Sanjo, with big windows over the city (Tabelog; November 2024). Opened 1 August 2008 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kawaramachi, north of Sanjo — Kyoto Shiyakusho-mae / Sanjo',
    cuisine: 'Dining bar of pizza, pasta and small plates with party courses and a heart-shaped surprise cake · lunch birthday course ¥2,200 (April 2024) · course with tofu and daikon salad, potato omelette, chicken cream gratin, pizza and pasta; all-you-can-drink (June 2024) · baguette snacks from ¥100, shrimp and broccoli ajillo, pumpkin gratin, half-and-half pizza, pork with anchovy butter (November 2024) · Standard PARTY course with all-you-can-drink (January 2026) · waffles with ice cream and honey, prosciutto, cheese fondue, lemon cream pasta (September 2026)',
    website: null, gmaps: gm('Arfa cafe 京都 木屋町'), menu_url: TB,
    notes: '[Dining bar · Sanjo-Kiyamachi, since 2008] A fifth-floor dining bar with large windows over the Kiyamachi night view, popular for birthdays and parties: pizza, pasta, cheese fondue and gratins, courses with all-you-can-drink and a heart-shaped surprise cake. Open for lunch and until midnight; no cover charge, one drink each.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: a dining bar opened in August 2008 on the fifth floor of a building on Kawaramachi north of Sanjo, available for private hire.',
      philosophy: null, specialty: 'Party and birthday courses.',
      anecdotes: [
        { text: 'An April 2024 diner celebrated with the ¥2,200 lunch birthday course and its heart-shaped cake.', source: R + 'B488570022/' },
        { text: 'A November 2024 diner ordered baguette snacks at ¥100 each and admired the night view from the big windows.', source: R + 'B495382801/' },
        { text: 'A January 2026 guest pulled off a surprise for a friend with the Standard PARTY course.', source: R + 'B520884441/' },
      ],
      japanese_sources_summary: '食べログ: ダイニングバー・カフェ、中京区河原町通三条上ル恵比寿町534-31 USEN.X 木屋町 5F、地下鉄京都市役所前駅から徒歩3分、毎日12:00〜15:00 と17:00〜24:00、不定休、サービス料・チャージなし (ワンドリンク制)、カード可、31席 (立食40名)、個室、禁煙、2008年8月1日オープン。口コミ (2017年5月〜2026年10月、英語): 誕生日のコースとハートのケーキ、ランチの誕生日コース2,200円、ピザとパスタ、グラタン、アヒージョ、バゲット1本100円から、チーズフォンデュ、ワッフル、飲み放題、5階の窓からの夜景。',
      confidence: 'medium', sources: [TB, R + 'B253513591/', R + 'B412092837/', R + 'B416130828/', R + 'B442236522/', R + 'B460105612/', R + 'B488570022/', R + 'B488666365/', R + 'B495382801/', R + 'B520884441/', R + 'B534649844/', R + 'B535221725/', R + 'B538384522/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book a course for celebrations; one drink per person. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区河原町通三条上ル恵比寿町534-31 USEN.X 木屋町 5F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.009558, 135.770285), offset 10 m east: kyr_namae_no_nai_ramen_ya sat 1.6 m away and kyoto_echa_art_cafe_sanjo (3F, same building) 7.4 m; cross-checked: GSI 京都府京都市中京区恵比須町534番地 (lot) 62m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B488570022/', R + 'B495382801/'],
    price_note: 'Prices from April and November 2024 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch birthday course (with a drink)', '¥2,200', 'Courses', 'no', 'no', 'April 2024.', 'birthday_lunch'),
      it('', '', 'Snack baguette (each)', '¥100', 'Snacks', 'no', 'ask', 'November 2024.', 'baguette'),
      it('', '', 'Pizza (half and half)', '', 'Pizza', 'no', 'no', 'November 2024.', 'pizza'),
      it('', '', 'Cheese fondue', '', 'Plates', 'ask', 'no', 'September 2026.', 'fondue'),
    ] }, {
    cuisine: 'ピザ、パスタ、小皿のダイニングバー。パーティーのコースとハートのサプライズケーキ・ランチの誕生日コース2,200円 (2024年4月)・豆腐と大根のサラダ、ポテトのオムレツ、鶏のクリームグラタン、ピザとパスタのコース、飲み放題 (2024年6月)・1本100円からのバゲット、えびとブロッコリーのアヒージョ、かぼちゃのグラタン、ハーフ&ハーフのピザ、豚のアンチョビバター (2024年11月)・飲み放題付きの Standard PARTY コース (2026年1月)・アイスとはちみつのワッフル、生ハム、チーズフォンデュ、レモンクリームのパスタ (2026年9月)',
    neighborhood: '河原町、三条の北。京都市役所前・三条',
    gf_detail: 'グルテンフリーではない。ピザ、パスタ、バゲット、グラタン、ワッフル (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。チーズフォンデュ、クリームのグラタンとパスタ、生ハム、ベーコン (2024〜2026年の口コミ)。',
    notes: '[ダイニングバー・三条木屋町、2008年から] 木屋町の夜景を大きな窓から望むビル5階のダイニングバー。誕生日や宴会に人気で、ピザ、パスタ、チーズフォンデュ、グラタン、飲み放題付きのコースとハートのサプライズケーキ。昼も営業、夜は深夜0時まで。チャージなし、ワンドリンク制。',
  });
}

// ================================================================ 祇園 ふぐ松
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26036194/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '22:00']);
  put({
    id: 'kyoto_gion_fugu_matsu', name: '祇園 ふぐ松 (Gion Fugu Matsu)', category: 'OMNI',
    lat: 35.004414, lng: 135.776375, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Grilled fugu can be seasoned with olive oil, sesame oil or soy sauce (2024 reviews); ponzu and zosui also appear; no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fugu restaurant (2022–26 reviews).',
    hours_raw: 'Mon–Sat and holidays 18:00–22:00 (last order 21:00); closed Sunday and the second Monday; may change (Tabelog). Reservations accepted (Tabelog). Cards; no e-money or QR (Tabelog). 24 seats at tables for 2–6; private room (Tabelog). Non-smoking (Tabelog). Children welcome (Tabelog). Amica Building 2, 1F, Gion north side, 6 min from Gion-Shijo exit 7 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion north side — Gion-Shijo',
    cuisine: 'Fugu specialist known for grilled fugu, seasoned to choice with olive oil, sesame oil or soy sauce · three courses — grilled-fugu, Yasaka and the all-in Gion course of eight fugu dishes — plus à la carte (March 2024; January 2024) · zosui even without the hot pot; grilled skin (January 2024) · fugu with wasabi (December 2024) · hot pot with ponzu; garlic soy sauce (December 2024) · grilled shirako; dashi chazuke (February and April 2025) · grilled fugu course, white wine (October 2025 to May 2026)',
    website: null, gmaps: gm('祇園 ふぐ松'), menu_url: TB,
    notes: '[Fugu · Gion] A Gion fugu restaurant whose signature is yaki-fugu, grilled at the table and seasoned as you like — olive oil is the regulars’ favourite, or sesame oil or soy sauce — with courses up to eight fugu dishes, hot pot with ponzu, grilled shirako and zosui. Children welcome. Closed Sunday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog and reviews: a fugu restaurant on the north side of Gion, reviewed since December 2022, known for grilled fugu with a choice of seasonings.',
      philosophy: null, specialty: 'Grilled fugu (yaki-fugu).',
      anecdotes: [
        { text: 'A regular since 2024 brought a son, who was so taken with it as to want to return alone (October 2025).', source: R + 'B496123200/' },
        { text: 'A December 2024 diner was grateful the kitchen made dishes it normally skips at busy times.', source: R + 'B498626544/' },
        { text: 'A January 2024 visitor added grilled skin to an eight-dish course because the olive-oil fugu was that good.', source: R + 'B479042657/' },
      ],
      japanese_sources_summary: '食べログ: ふぐ・日本料理、東山区祇園町北側282-6 アミカビル2 1F、京阪祇園四条駅7番出口から徒歩約6分、月〜土・祝日18:00〜22:00 (L.O. 21:00)、日曜と第2月曜休み、予約可、カード可、電子マネー・QR 不可、24席、個室、禁煙、子ども可。口コミ (2022年12月〜2026年5月、英語): 焼きふぐ (オリーブオイル・ごま油・醤油から選べる)、焼きふぐ・八坂・祇園の3コースとアラカルト、ふぐ8品、皮の焼き、雑炊、ふぐのわさび、ポン酢の鍋、白子焼き、出汁茶漬け、白ワイン。',
      confidence: 'medium', sources: [TB, R + 'B458135327/', R + 'B458178525/', R + 'B463803573/', R + 'B467189127/', R + 'B478369657/', R + 'B479042657/', R + 'B480779067/', R + 'B484866958/', R + 'B496123200/', R + 'B497214986/', R + 'B498626544/', R + 'B524867949/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Choose the grilled-fugu seasoning (olive oil, sesame oil or soy sauce). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側282-6 アミカビル2 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through May 2026.' },
    pin_source: `Tabelog ${TB} (35.004414, 135.776375); cross-checked: GSI 京都府京都市東山区祇園町北側282番地 (lot) 29m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B480779067/', R + 'B479042657/'],
    price_note: 'No prices in the sources; reviewers report ¥6,000–14,999 per person.', last_checked: TODAY, items: [
      it('', '', 'Grilled-fugu course', '', 'Courses', 'ask', 'no', '2024–26 reviews.', 'yakifugu_course'),
      it('', '', 'Gion course (eight fugu dishes)', '', 'Courses', 'ask', 'no', 'January and March 2024.', 'gion_course'),
      it('', '', 'Grilled fugu (à la carte)', '', 'À la carte', 'ask', 'no', 'Olive oil, sesame oil or soy sauce.', 'yakifugu'),
      it('', '', 'Grilled shirako', '', 'À la carte', 'ask', 'no', 'February 2025.', 'shirako'),
    ] }, {
    cuisine: '焼きふぐが名物のふぐ専門店。味付けはオリーブオイル、ごま油、醤油から選べる・焼きふぐ、八坂、ふぐ8品の祇園の3コースとアラカルト (2024年3月・1月)・鍋なしでも雑炊、皮の焼き (2024年1月)・わさびで食べるふぐ (2024年12月)・ポン酢の鍋、にんにく醤油 (2024年12月)・白子焼き、出汁茶漬け (2025年2月・4月)・焼きふぐのコース、白ワイン (2025年10月〜2026年5月)',
    neighborhood: '祇園町北側。祇園四条',
    gf_detail: '要確認。焼きふぐはオリーブオイル、ごま油、醤油から選べる (2024年の口コミ)。ポン酢や雑炊もある。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。ふぐの店 (2022〜2026年の口コミ)。',
    notes: '[ふぐ・祇園] 祇園のふぐ料理店。名物は焼きふぐで、常連に人気のオリーブオイル、またはごま油か醤油で好みの味に。ふぐ8品までのコース、ポン酢の鍋、白子焼き、雑炊。子ども可。日曜休み。',
  });
}

// ================================================================ 雪月花
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26000626/'; const R = TB + 'dtlrvwlst/'; const SITE = 'http://www.kyoto-setsugekka.com/';
  const H = day(['19:00', '02:00']);
  put({
    id: 'kyoto_setsugekka_sanjo', name: '雪月花 (Setsu Gekka)', category: 'OMNI',
    lat: 35.008694, lng: 135.764797, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A bar with homemade chocolates, fruit platters and desserts (2025–26 reviews); no gluten information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Fruit platters and fruit juices (June 2025; September 2026); the chocolates and cakes are unconfirmed; no vegan information.',
    hours_raw: 'Daily 19:00–2:00; open all year; check for changes (Tabelog). Charge ¥500 (Tabelog, Japanese text: 「チャージ料500円（ シガー販売）」); a July 2025 diner paid an ¥800 cover. Cards; no e-money (Tabelog). 58 seats across counter, tables, a tatami room, raised private rooms for 4–12 and a cigar room (Tabelog). Smoking allowed (Tabelog). SACRA Building B1F and 1F, Sanjo-dori west of Tominokoji — a Taisho-era former bank, a registered tangible cultural property (Tabelog; June and August 2025). Basement floor open at weekends (April 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sanjo-dori, west of Tominokoji — Kyoto Shiyakusho-mae',
    cuisine: 'Bar of four themed spaces — Snow, Moon, Flower and a salon — with whisky, original and non-alcoholic cocktails, cigars and homemade chocolates (Tabelog; January 2026) · mojito (March 2025) · wine with snacks (May 2025) · Yamazaki highball; pineapple juice (June 2025) · original cocktails (July 2025) · kumquat gin and tonic; dessert wine (December 2025) · cigar with a homemade chocolate plate (January 2026) · chocolate and fruit platters; whiskies (September 2026)',
    website: SITE, gmaps: gm('雪月花 京都 三条 バー'), menu_url: TB,
    notes: '[Cigar and whisky bar · Sanjo, in a Taisho-era bank] A bar, said to be family-run, inside the SACRA building, a Taisho-era former bank on Sanjo-dori, with themed rooms named Snow, Moon and Flower, a cigar room and a long counter. Whiskies, original cocktails and non-alcoholic drinks, with homemade chocolate plates and fruit. Open every night to 2:00; smoking allowed; small cover charge.',
    chef_bio: { chef_name: null, roles: ['Described as family-run (September 2026)'], origin: null,
      background: 'Per reviews: a bar in the SACRA building, formerly a Kyoto branch of a mutual savings bank built in the early Taisho era and now a registered tangible cultural property; a September 2026 visitor describes it as family-run.',
      philosophy: null, specialty: 'Whisky, cigars and homemade chocolate.',
      anecdotes: [
        { text: 'A January 2026 regular was shown to the "Moon" room on a second visit to the bar’s four themed spaces.', source: R + 'B501992726/' },
        { text: 'An April 2026 visitor notes a separate cigar-bar floor and a basement opened at weekends.', source: R + 'B526304913/' },
        { text: 'A January 2026 guest relaxed with a cigar and the homemade chocolate plate.', source: R + 'B522504656/' },
      ],
      japanese_sources_summary: '食べログ・公式サイト: バー・カフェ・チョコレート、中京区三条通冨小路西入ル中之町20 SACRAビル B1・1F、地下鉄京都市役所前駅8番出口から徒歩7分、毎日19:00〜翌2:00、年中無休、チャージ500円 (シガー販売)、カード可、58席 (カウンター、テーブル、座敷、小上がりの個室、シガールーム)、喫煙可。口コミ (2025年3月〜2026年9月、英語): 大正初期の旧銀行の登録有形文化財の建物、雪・月・花とサロンの4つの空間、モヒート、Yamazaki のハイボール、オリジナルカクテル、ノンアルコール、金柑のジントニック、デザートワイン、葉巻、自家製のチョコレートの盛り合わせ、フルーツ、家族経営とされる。',
      confidence: 'medium', sources: [TB, SITE, R + 'B501992726/', R + 'B503037794/', R + 'B507092117/', R + 'B508656365/', R + 'B510318846/', R + 'B512096601/', R + 'B515205175/', R + 'B519771592/', R + 'B522504656/', R + 'B526304913/', R + 'B535457849/', R + 'B538097897/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ask for a room or the counter; non-alcoholic cocktails available (July 2025). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区三条通冨小路西入ル中之町20 SACRAビル B1・1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.008694, 135.764797); cross-checked: GSI 京都府京都市中京区中之町20番地 (lot) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No item prices in the sources; ¥500 charge (¥800 reported July 2025); reviewers report ¥2,000–9,999 per person.', last_checked: TODAY, items: [
      it('', '', 'Homemade chocolate plate', '', 'Sweets', 'ask', 'ask', 'January and September 2026.', 'chocolate'),
      it('', '', 'Fruit platter', '', 'Snacks', 'ask', 'ask', 'September 2026.', 'fruit'),
      it('', '', 'Original cocktails (incl. non-alcoholic)', '', 'Drinks', 'ask', 'ask', 'July 2025.', 'cocktails'),
    ] }, {
    cuisine: '雪・月・花とサロンの4つの空間のバー。ウイスキー、オリジナルとノンアルコールのカクテル、葉巻、自家製のチョコレート (食べログ、2026年1月)・モヒート (2025年3月)・ワインとつまみ (2025年5月)・Yamazaki のハイボール、パイナップルジュース (2025年6月)・オリジナルカクテル (2025年7月)・金柑のジントニック、デザートワイン (2025年12月)・葉巻と自家製チョコレートの盛り合わせ (2026年1月)・チョコレートとフルーツの盛り合わせ、ウイスキー (2026年9月)',
    neighborhood: '三条通、冨小路の西。京都市役所前',
    gf_detail: '要確認。自家製のチョコレート、フルーツの盛り合わせ、デザートのあるバー (2025〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: '要確認。フルーツの盛り合わせやジュースはある (2025年6月、2026年9月) が、チョコレートやケーキは不明。ヴィーガンの情報はない。',
    notes: '[葉巻とウイスキーのバー・三条、大正の旧銀行] 三条通の大正時代の旧銀行、SACRA ビルに入る、家族経営とされるバー。雪・月・花の名の部屋、シガールーム、長いカウンター。ウイスキー、オリジナルやノンアルコールのカクテル、自家製チョコレートの盛り合わせやフルーツ。毎晩深夜2時まで。喫煙可、チャージあり。',
  });
}

// ================================================================ 個室焼肉 一龍萬倍
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26042500/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_ichiryu_manbai_yakiniku', name: '個室焼肉 一龍萬倍 (Private Rooms Yakiniku Ichiryuu Manbai)', category: 'OMNI',
    lat: 35.00247, lng: 135.761412, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: seasoned tongue and kalbi, yukgaejang ramen to finish (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a yakiniku house with meat sushi and yukhoe (2025–26 reviews).',
    hours_raw: 'Daily 17:00–23:00 (last order 22:30); irregular closures (Tabelog). Reservations recommended (August 2025). Cards (incl. UnionPay), Alipay and WeChat Pay; no e-money (Tabelog). 28 seats, all in private or curtained semi-private rooms (Tabelog; September 2025; March 2026). Non-smoking (Tabelog). Children welcome (Tabelog). Imai Building B1F, by Shijo and Hankyu Karasuma stations (Tabelog; August 2025). Opened 10 March 2025 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Near Shijo-Karasuma — Shijo / Karasuma',
    cuisine: 'Charcoal yakiniku courses in private rooms, with flambéed meat sushi and yukhoe finished at the table · course ¥5,990 with meat sushi and yukhoe (June 2025) · Manpuku course ¥6,589 (August 2025); seared yukhoe (August 2025) · clay-pot rice (September 2025) · outside skirt; seasoned tongue; yukgaejang ramen to finish (March 2026) · meat sushi and silver rice (May 2026) · Manzoku course of many small plates and dessert (October 2026)',
    website: null, gmaps: gm('個室焼肉 一龍萬倍'), menu_url: TB,
    notes: '[Private-room yakiniku · Shijo-Karasuma, since 2025] A basement yakiniku house by Karasuma station where every table is a private room, serving charcoal-grilled courses from about ¥6,000 — flambéed meat sushi and yukhoe, outside skirt, clay-pot rice and yukgaejang ramen to finish — with warm, attentive service.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: a private-room yakiniku restaurant opened in March 2025 in a basement near Shijo-Karasuma.',
      philosophy: null, specialty: 'Yakiniku courses; meat sushi.',
      anecdotes: [
        { text: 'A June 2025 diner watched a staff member flambé the meat sushi and yukhoe at the table.', source: R + 'B537536414/' },
        { text: 'A September 2025 host found the staff happy to grow a booking from four to six at short notice.', source: R + 'B513671475/' },
        { text: 'An August 2025 diner praised the smiling service from greeting to farewell.', source: R + 'B511624207/' },
      ],
      japanese_sources_summary: '食べログ: 焼肉・すき焼き、下京区神明町274-1 今井ビル B1F、地下鉄四条駅・阪急烏丸駅、毎日17:00〜23:00 (L.O. 22:30)、不定休、カード・Alipay・WeChat Pay 可、28席、個室、禁煙、子ども可、2025年3月10日オープン。口コミ (2025年6月〜2026年10月、英語): 全席個室、炭火の焼肉のコース (5,990円、Manpuku コース6,589円)、炙りユッケ、肉寿司のフランベ、土鍋ご飯、ハラミ、味付けタン、ユッケジャンラーメン、Manzoku コース、丁寧な接客。',
      confidence: 'medium', sources: [TB, R + 'B511278405/', R + 'B511624207/', R + 'B513327049/', R + 'B513671475/', R + 'B519866409/', R + 'B520197834/', R + 'B522565602/', R + 'B524218533/', R + 'B527619213/', R + 'B537536414/', R + 'B538224829/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Courses are the easy order; staff grill and flambé some dishes. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市下京区神明町274-1 今井ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.002470, 135.761412); GSI matches only the town (神明町), so approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537536414/', R + 'B511624207/'],
    price_note: 'Course prices from June and August 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Yakiniku course (meat sushi, yukhoe)', '¥5,990', 'Courses', 'no', 'no', 'June 2025.', 'course_5990'),
      it('', '', 'Manpuku course', '¥6,589', 'Courses', 'no', 'no', 'August 2025.', 'manpuku'),
      it('', '', 'Clay-pot rice', '', 'Rice', 'ask', 'no', 'September 2025.', 'donabe'),
    ] }, {
    cuisine: '個室で食べる炭火焼肉のコース。肉寿司とユッケはテーブルでフランベ・肉寿司とユッケ付きのコース5,990円 (2025年6月)・Manpuku コース6,589円、炙りユッケ (2025年8月)・土鍋ご飯 (2025年9月)・ハラミ、味付けのタン、締めのユッケジャンラーメン (2026年3月)・肉寿司と銀シャリ (2026年5月)・小皿が続きデザートで締める Manzoku コース (2026年10月)',
    neighborhood: '四条烏丸の近く。四条・烏丸',
    gf_detail: 'グルテンフリーではない。味付けのタンやカルビ、締めのユッケジャンラーメン (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。肉寿司とユッケのある焼肉店 (2025〜2026年の口コミ)。',
    notes: '[個室焼肉・四条烏丸、2025年から] 烏丸駅近くの地下の、全席個室の焼肉店。炭火で焼くコースは6,000円ほどから。テーブルでフランベする肉寿司とユッケ、ハラミ、土鍋ご飯、締めのユッケジャンラーメン。笑顔の丁寧な接客。',
  });
}

save();
