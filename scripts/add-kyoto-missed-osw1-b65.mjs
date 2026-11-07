// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 65.
//   + 先斗町すいしん 本店 Pontocho Suishin Honten (obanzai and Kyoto-vegetable courses in a Pontocho machiya; 株式会社黛)
//   + 祇園 ぷらむ Gion Plum (French-based teppan and à la carte bistro in a Gion machiya)
//   + すし処 北の幸 Sushi Dokoro Kita no Sachi (Hokkaido-fish sushi omakase in Gion, open late)
//   + ナギサ クラブ NAGISA CLUB (cocktail bar off Kiyamachi, since 1956)
//   - VOYAGER STAND KYOTO, ぎおん刀: skipped (reasons below).
//   Rest list (`queue.mjs kyoto-missed next rest 2000`), nearest-first, lane ids 26045288 (skipped), 26041466 (skipped),
//   26003336, 26038214, 26025872, 26002490.
//   queue-status.jsonl grepped for each brand (VOYAGER, ぎおん刀, すいしん, ぷらむ, 北の幸, ナギサ): no earlier rulings.
//   None of the four drafted is in data/kyoto.json by name or address (材木町181, 祇園町北側259-1, 祇園町北側256,
//   大黒町71 ワールド会館B1).
//   Same-name count (same brand or operator only): すいしん — our crawl has 京すいしん, 先斗町すいしん 本店 and 炭火焼酒房 すいしん;
//   the honten's invoice holder is 株式会社黛 (Kyoto, NTA register). Tabelog's name search also shows Suishin shops in
//   Tokyo and Hiroshima with no link found to this company — drafted as a local group, flagged. ぷらむ, 北の幸, ナギサ — one shop
//   each. Large-parent list checked.
//   Service charges, checked against Tabelog's Japanese original: ぷらむ サービス料10%; ナギサ チャージ300円; none listed for
//   the other two.
//   Other-diner remarks (Greg 2026-11-06): single-review remarks about other customers left out (すいしん July and
//   August 2026).
//   Halal: no operator in this batch claims halal.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-65');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26045288', 'VOYAGER STAND KYOTO: no reviews on Tabelog');
skip('26041466', 'ぎおん刀: large parent — the invoice holder (T6010401054605) is 株式会社ワイズテーブルコーポレーション (Tokyo, NTA register), the listed company behind XEX that runs casual Italian and Japanese restaurants directly and by franchise in Japan and Manila (traders.co.jp company profile, ticker 2798)');

// ================================================================ 先斗町すいしん 本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26003336/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_pontocho_suishin_honten', name: '先斗町すいしん 本店 (Pontocho Suishin Honten)', category: 'OMNI',
    lat: 35.007722, lng: 135.771004, cuisine_type: 'obanzai',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Obanzai sets, Kyoto-vegetable courses, nama-fu dengaku, agedashi tofu, tempura, kamameshi and shabu-shabu; no gluten information (Tabelog; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Many Kyoto-vegetable and tofu dishes, but dashi is not described (Tabelog; 2026 reviews).',
    hours_raw: '17:00–23:00 (L.O. 22:15; last entry 22:00) daily (Tabelog). Reservations accepted (Tabelog; 2026). Cards; no e-money or QR (Tabelog). 105 seats over two floors, with private rooms for 6 to 30 and a counter (Tabelog; August 2026). In a machiya on Pontocho south of Sanjo, about 5 min from Keihan Sanjo (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Pontocho south of Sanjo — 5 min from Keihan Sanjo',
    cuisine: 'Obanzai and Kyoto-vegetable cooking in a Pontocho machiya at reasonable prices (Tabelog) · Kyoto delicacies course “Arashiyama” ¥4,950; kaiseki “Momoyama” from ¥5,500 (Tabelog) · “Kamo” course with matsutake-and-hamo dobin-mushi, grilled ayu with roe, turnip with ayu and yuba sauce (September 2026) · five-obanzai set; agedashi tofu; eggplant and nama-fu dengaku; corn tempura; kamameshi including matsutake; dashimaki (June–October 2026) · Kyoto-pork and vegetable shabu-shabu as the main of the Arashiyama course (July 2026) · yuba and tomato jelly, chewy nama-fu, Kyoto sake, cooked live at the counter (August 2026)',
    website: null, gmaps: gm('先斗町すいしん 本店'), menu_url: TB + 'dtlmenu/',
    notes: '[Obanzai and kaiseki · Pontocho machiya, Kyoto vegetables] A big, calm two-storey machiya on Pontocho with a counter and private rooms, serving obanzai sets, nama-fu dengaku and kamameshi à la carte, and Kyoto-vegetable courses from ¥4,950 — seasonal touches like matsutake-and-hamo dobin-mushi in autumn. Good for families and celebrations.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Tabelog’s invoice number T8130001022725 is registered to 株式会社黛 of Kyoto (NTA register). Our crawl also lists 京すいしん and 炭火焼酒房 すいしん; how many shops the company runs was not established. Reviewers praise attentive staff who explain the ingredients (August and October 2026).',
      philosophy: null, specialty: 'Obanzai; Kyoto-vegetable courses.',
      anecdotes: [
        { text: 'An August 2026 family shared a laugh with the staff over what obanzai means, then shared a five-dish set and kamameshi.', source: R + 'B533415748/' },
        { text: 'An October 2026 trio of mother, brother and diner, rarely drinkers, ended up ordering drinks over matsutake kamameshi.', source: R + 'B537727544/' },
      ],
      japanese_sources_summary: '食べログ: 先斗町すいしん 本店、日本料理・海鮮・居酒屋、中京区先斗町三条下ル材木町181、京阪三条駅から徒歩5分、毎日17:00〜23:00 (L.O.22:15、最終入店22:00)、カード可、105席、6〜30名の個室、京町家、京野菜とおばんざい、京の味覚コース「嵐山」4,950円、会席「桃山」5,500円から、適格請求書 T8130001022725 (株式会社黛)。口コミ (2026年、英語): 「加茂」コース (松茸と鱧の土瓶蒸し、子持ち鮎の塩焼き、蕪と鮎の湯葉あん)、おばんざい5種盛り、揚げ出し豆腐、茄子や生麩の田楽、とうもろこしの天ぷら、松茸の釜飯、だし巻き、京都ポークと野菜のしゃぶしゃぶ、湯葉とトマトのゼリー、カウンターの実演、京都の地酒。',
      confidence: 'medium', sources: [TB, 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=8130001022725', R + 'B489967245/', R + 'B531265731/', R + 'B532032347/', R + 'B532405120/', R + 'B533415748/', R + 'B534546733/', R + 'B536035949/', R + 'B536564712/', R + 'B536823023/', R + 'B537727544/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Large machiya with private rooms; staff explain dishes.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区先斗町三条下ル材木町181',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.007772, 135.771004), offset about 5.5 m south to (35.007722, 135.771004) because ワインと串揚げ こぱん 先斗町店 (kyoto_kopan_kushiage_pontocho) sits within 4 m; cross-checked: GSI 京都府京都市中京区材木町181番地 (lot) 28m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course prices from Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Kyoto delicacies course “Arashiyama”', '¥4,950', 'Courses', 'ask', 'no', 'Tabelog; Kyoto-pork shabu-shabu main.', 'arashiyama'),
      it('', '', 'Kaiseki “Momoyama”', 'from ¥5,500', 'Courses', 'ask', 'no', 'Tabelog.', 'momoyama'),
      it('', '', 'Five-obanzai set', '', 'Obanzai', 'ask', 'ask', 'August 2026.', 'obanzai5'),
      it('生麩田楽', 'namafu dengaku', 'Nama-fu dengaku', '', 'À la carte', 'no', 'ask', 'October 2026.', 'namafu'),
    ] }, {
    cuisine: '先斗町の町家で手頃な値段のおばんざいと京野菜の料理 (食べログ)・京の味覚コース「嵐山」4,950円、会席「桃山」5,500円から (食べログ)・松茸と鱧の土瓶蒸し、子持ち鮎の塩焼き、蕪と鮎の湯葉あんの「加茂」コース (2026年9月)・おばんざい5種盛り、揚げ出し豆腐、茄子と生麩の田楽、とうもろこしの天ぷら、松茸などの釜飯、だし巻き (2026年6〜10月)・嵐山コースのメインは京都ポークと野菜のしゃぶしゃぶ (2026年7月)・湯葉とトマトのゼリー、もちもちの生麩、京都の地酒、カウンターでの実演 (2026年8月)',
    neighborhood: '三条の南の先斗町。京阪三条から徒歩5分',
    gf_detail: '要確認。おばんざい、京野菜のコース、生麩田楽、揚げ出し豆腐、天ぷら、釜飯、しゃぶしゃぶ。グルテンの情報はない (食べログ、2026年の口コミ)。',
    vegan_detail: '要確認。京野菜や豆腐の料理が多いが、出汁については書かれていない (食べログ、2026年の口コミ)。',
    notes: '[おばんざいと会席・先斗町の町家、京野菜] カウンターと個室のある先斗町の大きく落ち着いた2階建ての町家。おばんざい、生麩田楽、釜飯をアラカルトで、4,950円からの京野菜のコースも。秋は松茸と鱧の土瓶蒸しなど季節の品。家族連れやお祝いにも。',
  });
}

// ================================================================ 祇園 ぷらむ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26038214/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '22:00']);
  put({
    id: 'kyoto_gion_plum', name: '祇園 ぷらむ (Gion Plum)', category: 'OMNI',
    lat: 35.00401, lng: 135.774487, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. French-based teppan and à la carte — steaks, abalone steak with bread, gratins, onion gratin soup, tempura of mino, pilaf; no gluten information (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Wagyu, abalone, oysters, tongue and offal (2025–2026 reviews).',
    hours_raw: 'Monday–Saturday and holidays 17:00–22:00 (L.O. 21:30); closed Sunday (Tabelog). Reservations accepted (Tabelog). Service charge 10% (Tabelog, original サービス料10%). Cards; no e-money or QR (Tabelog). 20 seats: a counter on the left and two tables for four (Tabelog; February 2026). Now at street level on Gion-machi Kitagawa after a move (September 2026), about 5 min from Keihan Gion-Shijo (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion-machi Kitagawa — 5 min from Keihan Gion-Shijo',
    cuisine: 'Creative, French-based dishes of Kyoto ingredients, with Wagyu and abalone steaks cooked on the teppan in front of you, in a machiya (Tabelog) · abalone steak with a sauce mopped up with bread (2025–2026) · filet steak, beef tataki, onion gratin soup, oyster gratin, garlic rice, salad; mino tempura (March 2025) · baked oysters, grilled tongue, tongue stew, the special pilaf (January 2025) · crab vinegar; sashimi and salad sized to the party (February 2026) · Japanese and Chinese dishes à la carte (September 2026)',
    website: null, gmaps: gm('祇園 ぷらむ'), menu_url: TB + 'dtlmenu/',
    notes: '[Teppan bistro · Gion Kitagawa, abalone and Wagyu] A small machiya counter and two tables in Gion where chefs cook French-leaning dishes on the teppan in front of you — a much-loved abalone steak, filet and tongue, oyster gratins, onion soup and a garlic pilaf — à la carte. 10% service charge; closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Chefs (unnamed)'], origin: null,
      background: 'Tabelog’s shop text describes skilled chefs cooking Wagyu and abalone steaks before guests in a machiya, with French-based creative dishes of Kyoto ingredients. A September 2026 regular notes the restaurant has moved to a street-level site.',
      philosophy: null, specialty: 'Abalone steak.',
      anecdotes: [
        { text: 'A January 2025 visitor who comes to Kyoto once a year was thrilled by fried fish as the first nibble and finished with the special pilaf.', source: R + 'B500417116/' },
        { text: 'An October 2025 regular back after a long gap found the place packed, but missed the matsutake that year.', source: R + 'B489300952/' },
      ],
      japanese_sources_summary: '食べログ: 祇園 ぷらむ、鉄板焼き・ビストロ、東山区祇園町北側259-1、京阪祇園四条駅から徒歩5分、月〜土・祝 17:00〜22:00 (L.O.21:30)、日曜定休、サービス料10%、カード可、20席、町家、京都の食材のフレンチがベースの創作料理、目の前で焼く和牛や鮑のステーキ。口コミ (2025〜2026年、英語): 鮑のステーキとパン、フィレステーキ、牛のたたき、オニオングラタンスープ、牡蠣のグラタン、ガーリックライス、ミノの天ぷら、焼き牡蠣、牛タンの焼き物とシチュー、特製ピラフ、蟹酢、人数に合わせた刺身とサラダ、移転して1階の店に。',
      confidence: 'medium', sources: [TB, R + 'B482024142/', R + 'B489300952/', R + 'B500417116/', R + 'B514574770/', R + 'B523135710/', R + 'B524199476/', R + 'B527834766/', R + 'B536190739/'] },
    cultural_comfort: { level: 'konnichiwa', note: '10% service charge; counter cooking.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側259-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.00401, 135.774487); cross-checked: GSI 京都府京都市東山区祇園町北側259番地 (lot) 24m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No prices read; reviewers spend ¥10,000–20,000; 10% service charge.', last_checked: TODAY, items: [
      it('', '', 'Abalone steak', '', 'Teppan', 'ask', 'no', '2025–2026.', 'abalone'),
      it('', '', 'Filet steak', '', 'Teppan', 'ask', 'no', 'March 2025.', 'filet'),
      it('', '', 'Special pilaf', '', 'Rice', 'ask', 'no', 'January 2025.', 'pilaf'),
    ] }, {
    cuisine: '京都の食材を使うフレンチがベースの創作料理、目の前の鉄板で和牛や鮑のステーキ。町家の店 (食べログ)・パンでソースまで食べる鮑のステーキ (2025〜2026年)・フィレステーキ、牛のたたき、オニオングラタンスープ、牡蠣のグラタン、ガーリックライス、サラダ、ミノの天ぷら (2025年3月)・焼き牡蠣、牛タンの焼き物、タンシチュー、特製ピラフ (2025年1月)・蟹酢、人数に合わせた刺身とサラダ (2026年2月)・和や中華の一品も (2026年9月)',
    neighborhood: '祇園町北側。京阪祇園四条から徒歩5分',
    gf_detail: '要確認。ステーキ、パンを添えた鮑のステーキ、グラタン、オニオングラタンスープ、ミノの天ぷら、ピラフなどフレンチがベースの鉄板とアラカルト。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。和牛、鮑、牡蠣、牛タン、ホルモン (2025〜2026年の口コミ)。',
    notes: '[鉄板ビストロ・祇園北側、鮑と和牛] 祇園の町家の小さなカウンターと2卓。目の前の鉄板でフレンチ寄りの料理を焼く。人気の鮑のステーキ、フィレや牛タン、牡蠣のグラタン、オニオンスープ、ガーリックピラフをアラカルトで。サービス料10%、日曜定休。',
  });
}

// ================================================================ すし処 北の幸
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26025872/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '02:00']);
  put({
    id: 'kyoto_sushi_kita_no_sachi', name: 'すし処 北の幸 (Sushi Dokoro Kita no Sachi)', category: 'OMNI',
    lat: 35.004194, lng: 135.774455, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Omakase of sushi and Hokkaido seafood — hairy crab, scallops, herring-roe rolls; soy sauce not described (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi counter (reviews).',
    hours_raw: 'Monday–Saturday 18:00–2:00; closed Sunday; hours may change (Tabelog). No menu — the chef’s omakase (March 2026). Cards (JCB, AMEX, Diners); no e-money or QR (Tabelog). On Gion-machi Kitagawa, about 240 m from Gion-Shijo Station (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion-machi Kitagawa — 240 m from Gion-Shijo',
    cuisine: 'A Gion sushi counter built on Hokkaido and northern seafood, served as omakase with no menu (March 2026) · hairy crab in season; firm, sweet scallops (March 2026) · a herring-roe sushi roll found nowhere else (March 2026) · reviewers spend ¥20,000–30,000 (2026)',
    website: null, gmaps: gm('すし処 北の幸 祇園'), menu_url: null,
    notes: '[Sushi · Gion Kitagawa, Hokkaido seafood late] A Gion sushi counter serving Hokkaido and northern fish as omakase — hairy crab, scallops, a herring-roe roll — from a kind chef who explains each piece, open until 2:00. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)'], origin: null,
      background: 'A March 2026 reviewer describes a kind chef who explains each dish and ingredients mostly from Hokkaido and the north; a September 2025 regular calls it a usual haunt.',
      philosophy: null, specialty: 'Hokkaido seafood omakase.',
      anecdotes: [
        { text: 'A March 2026 visitor, on a second stop, was surprised to find Hokkaido flavours in Kyoto and took the chef’s omakase.', source: R + 'B525062008/' },
        { text: 'Another March 2026 diner singled out a herring-roe sushi roll as something found only here.', source: R + 'B526388351/' },
      ],
      japanese_sources_summary: '食べログ: すし処 北の幸、寿司、東山区祇園町北側256、祇園四条駅から241m、月〜土 18:00〜翌2:00、日曜定休、カード可 (JCB・AMEX・Diners)。口コミ (2025〜2026年、英語): 北海道や北の産地の魚介、品書きのないおまかせ、旬の毛蟹、ほたて、数の子の巻物、説明してくれる優しい大将、2〜3万円ほど。',
      confidence: 'low', sources: [TB, R + 'B514603619/', R + 'B525062008/', R + 'B526388351/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Omakase only; open late.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側256',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through March 2026.' },
    pin_source: `Tabelog ${TB} (35.004194, 135.774455); cross-checked: GSI 京都府京都市東山区祇園町北側256番地 (lot) 32m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B525062008/'],
    price_note: 'No prices read; reviewers spend ¥20,000–30,000.', last_checked: TODAY, items: [
      it('', '', 'Chef’s omakase of Hokkaido seafood and sushi', '', 'Omakase', 'ask', 'no', 'March 2026.', 'omakase'),
      it('', '', 'Herring-roe sushi roll', '', 'Sushi', 'ask', 'no', 'March 2026.', 'kazunoko'),
    ] }, {
    cuisine: '北海道や北の魚介をおまかせで出す祇園の寿司のカウンター。品書きはない (2026年3月)・旬の毛蟹、歯ごたえがあって甘いほたて (2026年3月)・ここだけの数の子の巻物 (2026年3月)・2〜3万円ほど (2026年)',
    neighborhood: '祇園町北側。祇園四条から240m',
    gf_detail: '要確認。毛蟹、ほたて、数の子の巻物など北海道の魚介と寿司のおまかせ。醤油については書かれていない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。寿司のカウンター (口コミ)。',
    notes: '[寿司・祇園北側、夜遅くまで北海道の魚介] 北海道や北の魚をおまかせで出す祇園の寿司のカウンター。毛蟹、ほたて、数の子の巻物などを優しい大将が一つずつ説明してくれる。深夜2時まで、日曜定休。',
  });
}

// ================================================================ ナギサ クラブ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26002490/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '03:00']);
  put({
    id: 'kyoto_nagisa_club', name: 'ナギサ クラブ (NAGISA CLUB)', category: 'OMNI',
    lat: 35.008085, lng: 135.769667, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A cocktail bar — fruit cocktails and a few sweets; no gluten information (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Fresh-fruit cocktails, some with yogurt (2026 reviews).',
    hours_raw: 'Monday and Wednesday–Sunday 18:00–3:00; closed Tuesday (Tabelog). Charge ¥300 (Tabelog, original チャージ300円). Cards including UnionPay; no e-money or QR (Tabelog). 28 seats with tables (Tabelog; January 2026). In the basement of the World Kaikan, just west of where the 南大黒橋通 lane leaves Kiyamachi, 5 min from Keihan Sanjo (Tabelog; May 2026). Founded in 1956 (May 2026 review).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Off Kiyamachi south of Sanjo — basement, 5 min from Keihan Sanjo',
    cuisine: 'A long-established, calm cocktail bar, said to date from 1956 (May 2026) · fresh-fruit cocktails such as Amagatsu gin and tonic, raspberry yogurt, pink-grapefruit salty dog, espresso martini (May 2026) · non-alcoholic kiwi frozen-yogurt cocktail; fresh chocolate (January 2026)',
    website: null, gmaps: gm('ナギサクラブ 京都 木屋町'), menu_url: null,
    notes: '[Cocktail bar · off Kiyamachi, since 1956] A surprisingly calm, retro basement bar off Kiyamachi, said to date from 1956, mixing fresh-fruit cocktails — gin and tonic, raspberry yogurt, salty dog, espresso martini — and alcohol-free versions, with fresh chocolate. ¥300 charge; open until 3:00; closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Bartender (unnamed)'], origin: null,
      background: 'A May 2026 reviewer calls it an authentic bar in business since 1956; a January 2026 visitor was greeted by a polite, gentle bartender.',
      philosophy: null, specialty: 'Fresh-fruit cocktails.',
      anecdotes: [
        { text: 'A January 2026 group of four, unsure of space, found a table free and had a non-alcoholic kiwi frozen-yogurt cocktail.', source: R + 'B520180227/' },
      ],
      japanese_sources_summary: '食べログ: ナギサ クラブ、バー、中京区河原町三条二筋下がる東入ル大黒町71 ワールド会館B1、京阪三条駅から徒歩5分、月・水〜日 18:00〜翌3:00、火曜定休、チャージ300円、カード可、28席。口コミ (2026年、英語): 1956年からの老舗のバー、木屋町の南大黒橋通の入口の少し西、果物のカクテル (Amagatsu のジントニック、ラズベリーヨーグルト、ピンクグレープフルーツのソルティドッグ、エスプレッソマティーニ)、ノンアルコールのキウイのフローズンヨーグルト、生チョコ、丁寧なバーテンダー。',
      confidence: 'low', sources: [TB, R + 'B506031969/', R + 'B520180227/', R + 'B522980647/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Basement bar; ¥300 charge; open late.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区河原町三条二筋下がる東入ル東入る大黒町71 ワールド会館B1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through May 2026.' },
    pin_source: `Tabelog ${TB} (35.008085, 135.769667); GSI resolves 大黒町71 to a different 大黒町 in Nakagyo, but OSM Nominatim reverse-geocodes the Tabelog point to 大黒町 on 龍馬通, matching the address (河原町三条下ル) and Tabelog’s 267 m from Sanjo; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B506031969/'],
    price_note: 'No drink prices read; ¥300 charge.', last_checked: TODAY, items: [
      it('', '', 'Fresh-fruit cocktail (e.g. pink-grapefruit salty dog)', '', 'Cocktails', '', '', 'May 2026.', 'cocktail'),
      it('', '', 'Charge', '¥300', 'Charges', '', '', 'Tabelog.', 'charge'),
    ] }, {
    cuisine: '1956年からとされる落ち着いた老舗のカクテルバー (2026年5月)・Amagatsu のジントニック、ラズベリーヨーグルト、ピンクグレープフルーツのソルティドッグ、エスプレッソマティーニなど果物のカクテル (2026年5月)・ノンアルコールのキウイのフローズンヨーグルト、生チョコ (2026年1月)',
    neighborhood: '三条の南、木屋町から入った地下。京阪三条から徒歩5分',
    gf_detail: '要確認。果物のカクテルと少しの甘いもののバー。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: '要確認。生の果物のカクテルで、ヨーグルトを使うものもある (2026年の口コミ)。',
    notes: '[カクテルバー・木屋町の路地、1956年から] 木屋町から入った、意外なほど落ち着いたレトロな地下のバー。1956年からとされ、ジントニック、ラズベリーヨーグルト、ソルティドッグ、エスプレッソマティーニなど果物のカクテルやノンアルコールも、生チョコとともに。チャージ300円、深夜3時まで、火曜定休。',
  });
}

save();
