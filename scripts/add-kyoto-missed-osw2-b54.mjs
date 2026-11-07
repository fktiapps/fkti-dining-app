// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 54.
//   Queue run from the osw2 worktree, 2026-11-07. The lane's notable list is exhausted; all four come from core.
//   core (queue.mjs kyoto-missed next core 200, lane ids in order):
//   - 神来 イオンモールKYOTO店 — skipped: same-concept branch of a brand already in data.
//   + 西洋茶屋 山本 Western Chaya Yamamoto (5-seat dessert-course and wine counter by Umekoji Kyoto-Nishi Stn)
//   + 炭焼 鶏たか Sumiyaki Toritaka (charcoal yakitori counter near Imadegawa; about 10 years)
//   + 三興飯店 Sanko Hanten (old-style ramen and Chinese at Kujo, back from Kyoto Avanti) — no ramen block: the sources do not
//     cover the six profile dimensions.
//   + 祥和軒 Showa Ken (Chinese restaurant and izakaya near Nijo Stn)
//   None of the four is in data/kyoto.json: grep by id, name and address found none.
//   Service charges: 山本 none; 祥和軒 none (Tabelog original text: なし); none listed for the others.
//   Remarks about other diners kept only where several reviews agree.
//   Pins: Tabelog /en/ point, cross-checked with GSI only; re-checked against current main before handoff.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-54');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26026569', '神来 イオンモールKYOTO店: a same-concept branch of a brand already in data — kyr_jukusei_menya_jinrai_sai (熟成麺屋 神来 西院本店, ramen)');

// ================================================================ 西洋茶屋 山本
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26031051/'; const R = TB + 'dtlrvwlst/';
  const H = day(['13:00', '19:30']);
  put({
    id: 'kyoto_seiyo_chaya_yamamoto', name: '西洋茶屋 山本 (Western Chaya Yamamoto)', category: 'OMNI',
    lat: 34.989093207874646, lng: 135.74415075021273, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A plated-dessert course — tarts, crêpes, cakes, savoury cake, meringues, petits fours, shaved ice; no gluten information is published (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dessert courses with cream, butter and eggs (reviews).',
    hours_raw: 'Reservation only, in seatings starting together at 13:00, 15:00 and 18:00, each about 105 minutes; open Monday, Tuesday, Friday, Saturday and Sunday; closed Wednesday and Thursday (Tabelog). At least one drink per person (Tabelog). No service charge (Tabelog). Cards accepted; no e-money or QR (Tabelog). 5 counter seats, records playing; non-smoking; sommelier; takeout (Tabelog; March 2026). 2 min walk from JR Umekoji Kyoto-Nishi Stn (Tabelog).',
    hours: { 0: H, 1: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Umekoji, 2 min walk from Umekoji Kyoto-Nishi Stn',
    cuisine: 'Plated-dessert courses with wine pairings at a counter (2023–2026 reviews) · short course of five dishes ¥3,200 (November 2023); ¥4,000 course with a choice of strawberry tart or crêpe chocolat; eight-dish course ¥6,000 with a half wine pairing (March 2025); courses A and B with a seasonal main such as rose and peach with mini watermelon shaved ice, or strawberry and amaretto (2025–2026) · savoury starts: shichimi almonds, a savoury cake with Mibuna and Nara pickles, sansho meringue; petits fours (2023–2025) · strawberry shortcake; kakigori (2026) · wine pairings, half sizes available',
    website: null, gmaps: gm('西洋茶屋 山本 梅小路'), menu_url: TB,
    notes: "[Dessert course · Umekoji, a five-seat dessert-and-wine counter] A chic five-seat counter near Umekoji where a pastry chef plates a dessert course in front of you — salty-sweet starters like a pickle savoury cake and sansho meringue, a seasonal main such as rose and peach, then petits fours — with matched wines, half glasses if you like. Courses about ¥3,200–6,000. Booking only, three seatings; closed Wednesday and Thursday.",
    chef_bio: { chef_name: null, roles: ['Pastry chef and sommelier, called Chef Yamamoto by a November 2023 reviewer; first name not given'], origin: null,
      background: 'Per a November 2023 reviewer: Chef Yamamoto, a pastry chef who won a Silver Egg at the 2022 RED competition and is also a sommelier. Other reviewers (2024–2026) describe desserts made and explained before you, not overly sweet, with pairings.',
      philosophy: null,
      specialty: 'Plated-dessert course with wine pairing.',
      anecdotes: [
        { text: 'A March 2024 pair found no other bookings that day and watched each dessert made and explained.', source: R + 'B482497187/' },
        { text: 'A March 2025 diner worried about two mains in the eight-dish course and finished everything.', source: R + 'B504201738/' },
        { text: 'An August 2026 visitor came for kakigori and found a bar-like room with a great atmosphere.', source: R + 'B533715433/' },
      ],
      japanese_sources_summary: '食べログ: 西洋茶屋 山本、カフェ・洋菓子・ワインバー、下京区歓喜寺町19-1、JR梅小路京都西駅から徒歩2分、月火金土日 13:00〜19:30、水木定休、完全予約制、13時・15時・18時からの一斉スタート、各105分、1人1ドリンク以上、サービス料・チャージ料なし、カード可、電子マネー・QR不可、カウンター5席、禁煙、ソムリエ、テイクアウト。口コミ (2023〜2026年、英語): デザートコース、ワインのペアリング、ハーフサイズ、ショートコース3,200円、4,000円のコース (いちごのタルトかクレープショコラ)、8品のコース6,000円、コースAとB、薔薇と桃のメイン、小さなすいかのかき氷、いちごとアマレット、七味のアーモンド、壬生菜と奈良漬のケークサレ、山椒のメレンゲ、プティフール、いちごのショートケーキ、かき氷、レコード、2022年のREDでシルバーエッグを受賞したパティシエの山本シェフ (ソムリエでもある)。',
      confidence: 'medium', sources: [TB, R + 'B474192298/', R + 'B482497187/', R + 'B485545852/', R + 'B488510097/', R + 'B498444652/', R + 'B502639474/', R + 'B504201738/', R + 'B511440744/', R + 'B524492672/', R + 'B526104884/', R + 'B531267377/', R + 'B533715433/'] },
    cultural_comfort: { level: 'japanese', note: 'Booking only; fixed seatings.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市下京区歓喜寺町19-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with booking; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (34.989093, 135.744151); GSI resolves the address only to the ward (1,045m), so not lot-checked; the point matches the stated 97 m from Umekoji Kyoto-Nishi Stn; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B488510097/', R + 'B504201738/'],
    price_note: 'Prices from November 2023 and March 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Short dessert course (five dishes)', '¥3,200', 'Course', 'no', 'no', 'November 2023.', 'short_course'),
      it('', '', 'Dessert course with tart or crêpe main', '¥4,000', 'Course', 'no', 'no', 'March 2025.', 'course_4000'),
      it('', '', 'Eight-dish dessert course', '¥6,000', 'Course', 'no', 'no', 'Half wine pairing extra; March 2025.', 'course_6000'),
    ] }, {
    cuisine: 'カウンターのデザートコースとワインのペアリング (2023〜2026年の口コミ)・5品のショートコース3,200円 (2023年11月)、いちごのタルトかクレープショコラを選ぶ4,000円のコース、ハーフのワインペアリング付きの8品のコース6,000円 (2025年3月)、薔薇と桃に小さなすいかのかき氷、いちごとアマレットなど季節のメインのコースAとB (2025〜2026年)・塩味の始まり: 七味のアーモンド、壬生菜と奈良漬のケークサレ、山椒のメレンゲ、プティフール (2023〜2025年)・いちごのショートケーキ、かき氷 (2026年)・ワインのペアリング、ハーフサイズも',
    neighborhood: '梅小路、梅小路京都西駅から徒歩2分',
    gf_detail: '要確認。タルト、クレープ、ケーキ、ケークサレ、メレンゲ、プティフール、かき氷のデザートコース。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: 'ヴィーガン不可。クリーム、バター、卵を使うデザートコース (口コミ)。',
    notes: '[デザートコース・梅小路、5席のデザートとワインのカウンター] 梅小路近くの5席のおしゃれなカウンターで、パティシエが目の前でデザートコースを盛る。漬物のケークサレや山椒のメレンゲなど塩味の前菜、薔薇と桃などの季節のメイン、プティフールに合わせるワイン、ハーフも。コースは3,200〜6,000円ほど。完全予約制で3部制、水木休み。',
  });
}

// ================================================================ 炭焼 鶏たか
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26025423/'; const R = TB + 'dtlrvwlst/';
  const IG = 'https://instagram.com/toritakakyoto2015';
  const H = day(['17:00', '22:30']);
  put({
    id: 'kyoto_sumiyaki_toritaka', name: '炭焼 鶏たか (Sumiyaki Toritaka)', category: 'OMNI',
    lat: 35.02852712785762, lng: 135.76934052059335, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Charcoal yakitori with salt or tare, smoked chicken, chicken tataki and a chicken-broth soba to finish; no gluten information is published (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken specialist (reviews).',
    hours_raw: '17:00–22:30, Monday–Saturday and holidays; closed Sunday (irregular) (Tabelog). Bookings recommended — it fills with reservations; call even during service; walk-ins at opening sometimes fit (Tabelog; October 2026). Cards accepted; no e-money or QR (Tabelog). 11 seats at an L-shaped counter; non-smoking, ashtrays outside (Tabelog). Near the Imadegawa crossing, 5 min walk from Demachiyanagi Stn (Tabelog; June 2025).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Imadegawa, west of Demachiyanagi — 5 min walk',
    cuisine: 'Charcoal yakitori grilled one skewer at a time at the counter (Tabelog) · thigh, breast, heart, soft cartilage, garlic-stuffed gizzard, white liver (2025–2026 reviews) · smoked chicken and a smoked platter; chicken tataki and chicken sashimi in season; two potato salads, with smoked bacon or kimchi; cabbage with white miso (2025–2026) · chicken soba or chicken-broth ramen to finish (2025–2026) · sake, shochu, wine (Tabelog)',
    website: IG, gmaps: gm('炭焼 鶏たか 出町'), menu_url: TB,
    notes: "[Yakitori · Imadegawa near Demachiyanagi, charcoal skewers and chicken soba] An eleven-seat L-shaped counter where the cheerful owner grills each skewer over charcoal and serves it at its best: garlic-stuffed gizzards, white liver, smoked chicken, seasonal chicken tataki, and a gentle chicken-broth soba to finish. About ¥3,000–6,000. Book ahead; closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Owner-griller not named'], origin: null,
      background: 'Tabelog’s introduction: 11 seats at an L-shaped counter the owner can see from the grill, each skewer grilled in front of you and served at its most delicious moment. A March 2025 reviewer says it has been open about ten years; the Instagram handle dates from 2015.',
      philosophy: 'Per Tabelog’s introduction: serve each skewer at its most delicious moment.',
      specialty: 'Charcoal yakitori; chicken soba to finish.',
      anecdotes: [
        { text: 'A six-time regular (October 2026) came for the autumn chicken tataki and, of course, finished with chicken soba.', source: R + 'B525513593/' },
        { text: 'A March 2025 diner looking for food at 21:00 near Demachiyanagi found it among few options.', source: R + 'B503004773/' },
        { text: 'A June 2026 guest found the owner’s cheerful manner kept the counter laughing.', source: R + 'B529474034/' },
      ],
      japanese_sources_summary: '食べログ: 炭焼 鶏たか、焼鳥・居酒屋・鶏料理、上京区大宮町323-2 アーバン北村1F、京阪出町柳駅から徒歩5分、月〜土・祝 17:00〜22:30、日曜休み (2023年4月11日から、不定)、予約可、営業中も電話可、カード可、電子マネー・QR不可、L字のカウンター11席、禁煙 (店外に灰皿)、インボイス T8810543535619。公式紹介: 店主が見渡せるL字のカウンター11席、1本ずつ目の前で焼き「一番おいしい瞬間」に。口コミ (2025〜2026年、英語): もも、むね、ハツ、軟骨、にんにくを詰めた砂肝、白レバー、燻製の鶏と燻製の盛り合わせ、季節の鶏のたたきと鶏刺し、燻製ベーコンとキムチの2種のポテトサラダ、キャベツと白味噌、締めの鶏そばや鶏白湯ラーメン、開業10年ほど、明るい店主、予約で埋まる。',
      confidence: 'medium', sources: [TB, IG, R + 'B467918071/', R + 'B493319621/', R + 'B503004773/', R + 'B506428492/', R + 'B519008707/', R + 'B525513593/', R + 'B525985506/', R + 'B529157168/', R + 'B529474034/', R + 'B530264633/', R + 'B538191086/', R + 'B538388245/'] },
    cultural_comfort: { level: 'japanese', note: 'Counter only; book ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区大宮町323-2 アーバン北村 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.028527, 135.769341); cross-checked: GSI 京都府京都市上京区大宮町323番地 (lot) 32m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B525513593/'],
    price_note: 'No item prices in reviews; spend about ¥3,000–6,000 (2025–2026).', last_checked: TODAY, items: [
      it('', '', 'Yakitori, by the skewer', '', 'Yakitori', 'ask', 'no', '', 'yakitori'),
      it('', '', 'Smoked chicken platter', '', 'Dishes', 'ask', 'no', '', 'smoked'),
      it('', '', 'Chicken soba (to finish)', '', 'Noodles', 'no', 'no', '', 'tori_soba'),
    ] }, {
    cuisine: 'カウンターで1本ずつ焼く炭火の焼鳥 (食べログ)・もも、むね、ハツ、軟骨、にんにくを詰めた砂肝、白レバー (2025〜2026年の口コミ)・燻製の鶏と燻製の盛り合わせ、季節の鶏のたたきと鶏刺し、燻製ベーコンとキムチの2種のポテトサラダ、キャベツと白味噌 (2025〜2026年)・締めの鶏そばや鶏白湯ラーメン (2025〜2026年)・日本酒、焼酎、ワイン (食べログ)',
    neighborhood: '今出川、出町柳の西。徒歩5分',
    gf_detail: '要確認。塩やタレの炭火焼鳥、燻製の鶏、鶏のたたき、締めの鶏そば。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: 'ヴィーガン不可。鶏料理の店 (口コミ)。',
    notes: '[焼鳥・出町柳近くの今出川、炭火の串と鶏そば] 明るい店主が1本ずつ炭火で焼き、一番おいしい瞬間に出すL字のカウンター11席。にんにく詰めの砂肝、白レバー、燻製の鶏、季節の鶏のたたき、締めはやさしい鶏そば。3,000〜6,000円ほど。予約がおすすめ、日曜休み。',
  });
}

// ================================================================ 三興飯店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26022141/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:00'], ['18:00', '21:00']);
  put({
    id: 'kyoto_sanko_hanten', name: '三興飯店 (Sanko Hanten)', category: 'OMNI',
    lat: 34.97938378788595, lng: 135.76026086010333, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a wheat-noodle ramen shop with gyoza and kara-age sets (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat-based ramen broths, beef-tendon ramen, gyoza (reviews).',
    hours_raw: 'Lunch 11:30–14:00, dinner 18:00–21:00, Tuesday–Saturday; closed Sunday and Monday; hours may change (Tabelog). No reservations. Cash only — no cards, e-money or QR (Tabelog; February 2026). 15 seats: 7 at the counter, 8 at tables; smoking allowed per Tabelog. Back at its original spot after about eight years in Kyoto Avanti (Tabelog). On Kujo-dori at Karasuma, 2 min walk from Kujo Stn (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Higashi-Kujo, Karasuma-Kujo crossing — 2 min walk from Kujo Stn',
    cuisine: 'Old-style ramen and town Chinese (2025–2026 reviews) · ramen with a gentle broth and smooth noodles; Hakata ramen; beef-tendon ramen (2025–2026) · ramen set with a half or mini fried rice ¥950, also on Saturdays; kara-age set ¥950 (February–October 2026) · fried rice ¥550, garlicky gyoza ¥300, bottled beer ¥600 (July 2025)',
    website: null, gmaps: gm('三興飯店 九条'), menu_url: TB,
    notes: "[Ramen · Karasuma-Kujo, a neighbourhood ramen and Chinese counter] A nostalgic local ramen shop on the Kujo crossing, back at its old spot after years in Kyoto Avanti: a gentle, comforting ramen, beef-tendon ramen and garlicky gyoza, with a ¥950 set of ramen and fried rice. Warm, friendly service; cat decorations. Cash only; smoking allowed; closed Sunday and Monday.",
    chef_bio: { chef_name: null, roles: ['Owner not named'], origin: null,
      background: 'Tabelog’s remarks: about eight years inside Kyoto Avanti, then back to the original location with a grand reopening. Reviewers (2025–2026) call it a long-established local Chinese shop, now focused on ramen, with cat decorations.',
      philosophy: null,
      specialty: 'Ramen with a mini fried rice.',
      anecdotes: [
        { text: 'A February 2026 traveller ordered the beef-tendon ramen and found the jelly-like tendon melting in the mouth.', source: R + 'B523721585/' },
        { text: 'An April 2026 diner had known the old Avanti shop for years before a first visit here.', source: R + 'B526255811/' },
        { text: 'A May 2026 visitor came because the line at a nearby ramen shop was too long, and found it ordinary.', source: R + 'B531913244/' },
      ],
      japanese_sources_summary: '食べログ: 三興飯店、ラーメン、南区東九条南烏丸町32、九条駅から徒歩2分、火〜土 11:30〜14:00・18:00〜21:00、日月定休、予約不可、カード・電子マネー・QR不可、15席 (カウンター7、テーブル8)、喫煙可、2013年1月1日オープン、京都アバンティで約8年営業した後、元の場所でグランドリニューアル。口コミ (2025〜2026年、英語): 町中華、やさしいスープとなめらかな麺のラーメン、博多ラーメン、牛すじラーメン、ラーメンと半チャーハンのセット950円 (土曜も)、唐揚げセット950円、炒飯550円、にんにくの効いた餃子300円、瓶ビール600円、猫の飾り、現金のみ。',
      confidence: 'low', sources: [TB, R + 'B505969305/', R + 'B508292464/', R + 'B509565099/', R + 'B512556178/', R + 'B522033027/', R + 'B523721585/', R + 'B526255811/', R + 'B530691063/', R + 'B531913244/', R + 'B532594706/', R + 'B535787539/', R + 'B536630559/'] },
    cultural_comfort: { level: 'japanese', note: 'Cash only; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市南区東九条南烏丸町32',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (34.979384, 135.760261); cross-checked: GSI 京都府京都市南区東九条南烏丸町32番地 (lot) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B522033027/', R + 'B509565099/', R + 'B536630559/'],
    price_note: 'Prices from July 2025–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Ramen with half fried rice', '¥950', 'Set', 'no', 'no', 'February 2026.', 'ramen_set'),
      it('', '', 'Kara-age set', '¥950', 'Set', 'no', 'no', 'October 2026.', 'karaage_set'),
      it('', '', 'Fried rice', '¥550', 'Rice', 'ask', 'no', 'July 2025.', 'chahan'),
      it('', '', 'Gyoza', '¥300', 'Side', 'no', 'no', 'July 2025.', 'gyoza'),
    ] }, {
    cuisine: '昔ながらのラーメンと町中華 (2025〜2026年の口コミ)・やさしいスープとなめらかな麺のラーメン、博多ラーメン、牛すじラーメン (2025〜2026年)・ラーメンと半チャーハンのセット950円 (土曜も)、唐揚げセット950円 (2026年2〜10月)・炒飯550円、にんにくの効いた餃子300円、瓶ビール600円 (2025年7月)',
    neighborhood: '東九条、烏丸九条の交差点。九条駅から徒歩2分',
    gf_detail: 'グルテンフリー不可。小麦の麺のラーメン店で、餃子や唐揚げのセット (口コミ)。',
    vegan_detail: 'ヴィーガン不可。肉系のラーメンスープ、牛すじラーメン、餃子 (口コミ)。',
    notes: '[ラーメン・烏丸九条、町のラーメンと中華] 京都アバンティでの営業を経て元の場所に戻った、九条の交差点の懐かしい町のラーメン店。やさしいラーメン、牛すじラーメン、にんにくの効いた餃子、ラーメンと炒飯のセットは950円。温かい接客、猫の飾り。現金のみ、喫煙可、日月休み。',
  });
}

// ================================================================ 祥和軒
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26028543/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:30'], ['17:30', '22:00']);
  put({
    id: 'kyoto_showaken_nijo', name: '祥和軒 (Showa Ken)', category: 'OMNI',
    lat: 35.016267217856836, lng: 135.74238642048843, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Chinese set meals — mapo tofu, black-vinegar sweet-and-sour pork, fried rice, gyoza, spring rolls — with no gluten information published (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat and seafood dishes (reviews).',
    hours_raw: 'Lunch 11:30–14:30 (last order 14:00), dinner 17:30–22:00 (last order 21:30); closed Tuesday (Tabelog). Bookings accepted. No cards (Tabelog). No service charge (Tabelog original text: なし). 21 seats: a 5-seat counter, tables and sofa tables; smoking allowed per Tabelog. The "horo-yoi" drink-and-dish sets run from 17:30 (October 2026). On Senbon-dori near Senbon-Marutamachi, 3 min walk from Nijo Stn (subway) (Tabelog; June 2026).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Senbon-Marutamachi, near Nijo Stn',
    cuisine: 'Authentic Chinese cooking with a town-Chinese feel, run by Chinese cooks (2024–2026 reviews) · lunch sets under ¥1,000: mapo tofu set ¥980 (April 2025), fried rice set ¥980 (November 2024), black-vinegar sweet-and-sour pork set (November 2023) · stir-fried garlic shoots; Chinese rice bowl; gyoza and spring-roll sets (2024–2025) · evening "horo-yoi" sets of a drink with dishes (2024; October 2026)',
    website: null, gmaps: gm('祥和軒 千本丸太町'), menu_url: TB,
    notes: "[Chinese · Senbon-Marutamachi near Nijo, authentic cooking at town prices] An unassuming Chinese restaurant run by Chinese cooks, with lively kitchen chatter and attentive service in Japanese: mapo tofu, black-vinegar sweet-and-sour pork and fried rice sets under ¥1,000 at lunch, and drink-and-dish \"horo-yoi\" sets in the evening. Cash only; smoking allowed; closed Tuesday.",
    chef_bio: { chef_name: null, roles: ['Cooks and staff from China (2024–2025 reviews); names not given'], origin: 'China',
      background: 'Reviewers (2024–2026) describe a Chinese restaurant run by Chinese staff, with dishes more authentic than its local-diner look suggests and attentive service in Japanese.',
      philosophy: null,
      specialty: 'Mapo tofu set.',
      anecdotes: [
        { text: 'An April 2024 pair followed the sign for the "horo-yoi" set and had the gyoza and spring-roll sets.', source: R + 'B483252330/' },
        { text: 'A December 2024 diner enjoyed the Chinese chatter from the kitchen alongside service in Japanese.', source: R + 'B497039665/' },
        { text: 'An October 2026 passer-by learned the horo-yoi set starts only from 17:30.', source: R + 'B537102960/' },
      ],
      japanese_sources_summary: '食べログ: 祥和軒、中華料理・居酒屋・ラーメン、中京区聚楽廻東町20番地6、JR二条駅から徒歩5分、地下鉄二条駅から徒歩3分、昼11:30〜14:30 (L.O. 14:00)、夜17:30〜22:00 (L.O. 21:30)、火曜定休、予約可、カード不可、サービス料なし、21席 (カウンター5、2人掛け2、4人掛けソファ席3)、喫煙可。口コミ (2023〜2026年、英語): 中国の方が営む本格中華、町中華の雰囲気、昼は1,000円以下の定食、麻婆豆腐定食980円、炒飯定食980円、黒酢酢豚定食、にんにくの芽の炒め物、中華丼、餃子と春巻きのセット、夜の「ほろ酔いセット」 (17時半から)、日本語での丁寧な接客、千本丸太町の近く。',
      confidence: 'low', sources: [TB, R + 'B475480186/', R + 'B483252330/', R + 'B483644253/', R + 'B496315692/', R + 'B497039665/', R + 'B504174136/', R + 'B513651556/', R + 'B521829776/', R + 'B525112775/', R + 'B530422331/', R + 'B530772803/', R + 'B537102960/'] },
    cultural_comfort: { level: 'japanese', note: 'Cash only; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区聚楽廻東町20-6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.016267, 135.742386); cross-checked: GSI 京都府京都市中京区聚楽廻東町20番地 (lot) 25m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B504174136/', R + 'B496315692/'],
    price_note: 'Prices from November 2024 and April 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Mapo tofu set meal', '¥980', 'Lunch', 'ask', 'no', 'April 2025.', 'mapo'),
      it('', '', 'Fried rice set meal', '¥980', 'Lunch', 'ask', 'no', 'November 2024.', 'chahan'),
      it('', '', 'Horo-yoi set (drink with dishes)', '', 'Evening', 'ask', 'no', 'From 17:30.', 'horoyoi'),
    ] }, {
    cuisine: '中国の料理人による町中華の雰囲気の本格中華 (2024〜2026年の口コミ)・1,000円以下の昼の定食: 麻婆豆腐定食980円 (2025年4月)、炒飯定食980円 (2024年11月)、黒酢酢豚定食 (2023年11月)・にんにくの芽の炒め物、中華丼、餃子や春巻きのセット (2024〜2025年)・夜はドリンクと料理の「ほろ酔いセット」 (2024年、2026年10月)',
    neighborhood: '千本丸太町、二条駅の近く',
    gf_detail: '要確認。麻婆豆腐、黒酢酢豚、炒飯、餃子、春巻きなどの中華の定食。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: 'ヴィーガン不可。肉や魚介の料理 (口コミ)。',
    notes: '[中華・二条近くの千本丸太町、町の値段で本格中華] 中国の料理人が営む飾らない中華料理店。厨房からは中国語の活気、接客は丁寧な日本語。昼は麻婆豆腐や黒酢酢豚、炒飯の1,000円以下の定食、夜はドリンクと料理の「ほろ酔いセット」。現金のみ、喫煙可、火曜休み。',
  });
}

save();
