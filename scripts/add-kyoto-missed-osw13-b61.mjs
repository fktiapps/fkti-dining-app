// Kyoto priority (kyoto-missed), worker osw13, batch 61 — lane: Tabelog id mod 6 = 0.
// Core: イル ポッツオ, マーマー コーヒー 京都. Notable: SAGAN, 炭火串焼とりと.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-61');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26031528', 'chain: SCHOOL BUS COFFEE STOP KYOTO is one of 8 SCHOOL BUS COFFEE shops (COFFEE STOP Kitahama, Kyoto, Motomachi, Namba Parks, Nakameguro, Fukuoka; ROASTERS Sakai; BAKERS Hyatt Place Kyoto) per schoolbus.coffee — same ruling as 26037906 in osw13-52 (Greg ruling 2026-11-05)');

// ================================================================ イル ポッツオ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26013012/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://ilpozzo.jp/';
  const H = day(['11:30', '14:30'], ['17:30', '22:00']);
  put({
    id: 'kyoto_il_pozzo', name: 'イル ポッツォ (il pozzo)', category: 'OMNI',
    lat: 35.007952, lng: 135.755297, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: handmade pasta, pizza, lasagna and focaccia (official site; 2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: cream pastas, pork, chicken and seafood (2025–2026 reviews).',
    hours_raw: 'Official site: lunch 11:30–14:30 (last order 14:00), dinner 17:30–22:00 (last orders food 21:00, drinks 21:15); closed Monday — when Monday is a holiday it opens and closes Tuesday instead; occasional other days off, posted on Instagram (Tabelog). 20 seats — 6 at the counter, tables and a sunken kotatsu room; parties up to 28; non-smoking, with a smoking spot in the courtyard; English menu; children welcome; cards and iD. Tabelog lists no service charge. Opened 2 May 2009 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishinotoin-Sanjo — 6–9 min walk from Karasuma Oike Stn',
    cuisine: 'A machiya trattoria with a courtyard: handmade pasta in several shapes matched to the sauces, ingredients from Italy, everything made in-house (official site) · lunch "Pranzo A": salad, focaccia and the day’s pasta, oil, cream or tomato (August 2026) — e.g. sea grapes and karasumi, clams and zucchini · dinner courses including an anniversary course: antipasti, two pastas, grilled Yoro pork, dessert platter (September 2025); Tanba chicken and porcini cream pasta, corn lasagna, roast beef, pesto, oil sardines, pizza (2025–2026 reviews) · wine and cocktails; imported Italian jams sold online (official site)',
    website: SITE, gmaps: gm('イル ポッツォ 柳水町'), menu_url: SITE + 'lunch.html',
    notes: '[Italian · Nishinotoin-Sanjo, a machiya trattoria with a courtyard] A warm-lit machiya trattoria near Karasuma Oike since 2009, with a counter, tatami kotatsu seats and a courtyard: handmade pastas, pizza and Italian-imported ingredients, with weekday lunch sets around ¥1,500. Reviewers like the room and food; some found dishes unexplained (September 2025) or the pasta less good than before (February 2026). Closed Monday.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Opened 2 May 2009 (Tabelog). The official site describes a Kyoto machiya marked by warm lights near Karasuma Oike, ingredients bought from Italy, everything handmade, and its pride, handmade pasta in various shapes chosen for each sauce; it also sells Italian jams online. Reviewers in 2025–2026 note the courtyard, the sunken kotatsu tables, and a local rather than tourist crowd.',
      philosophy: null,
      specialty: 'Handmade pasta.',
      anecdotes: [
        { text: 'September 2025: "I found it disappointing that there was almost no explanation of the dishes or drinks."', source: R + 'B512995582/' },
        { text: 'A returning diner after four years, February 2026: "I feel like the pasta has lost some of its deliciousness."', source: R + 'B523523901/' },
        { text: 'December 2025: no photos on the menu, so "I ended up Googling the types of pasta on my phone while ordering! Haha."', source: R + 'B519683753/' },
      ],
      japanese_sources_summary: '公式サイト (ilpozzo.jp): 京都烏丸のイタリアン「イル ポッツォ」、烏丸御池近くの京町家、イタリアから仕入れる食材、一つ一つ手作り、自慢の手打ちパスタはソースに合わせて様々な麺、ランチ11:30〜14:30・ディナー17:30〜22:00、月曜休み (祝日の場合は翌日)、イタリアのジャムを直輸入して販売、中京区西洞院通三条下る柳水町77-2。食べログ: イタリアン・パスタ・ピザ、20席 (カウンター6、テーブル、掘りごたつ)、28名まで、禁煙 (坪庭に喫煙所)、英語メニュー、子供可、カード・iD可、2009年5月2日オープン。口コミ (2025年8月〜2026年8月、英語): 町家と坪庭、ランチの Pranzo A (サラダ、フォカッチャ、本日のパスタをオイル・クリーム・トマトから)、海ぶどうとからすみ、あさりとズッキーニ、記念日コース (前菜盛り合わせ、パスタ2種、養老豚の肩ロースのグリル、デザート盛り合わせ)、丹波の鶏とポルチーニのクリームパスタ、とうもろこしのラザニア、ローストビーフ、ジェノベーゼ、オイルサーディン、ピザ、料理や飲み物の説明がほとんどないという声、パスタが以前ほどではないという声、メニューに写真がない。',
      confidence: 'medium', sources: [SITE, TB, R + 'B512061059/', R + 'B512995582/', R + 'B519683753/', R + 'B522145284/', R + 'B523523901/', R + 'B528825517/', R + 'B531370581/', R + 'B533471626/', R + 'B533499557/', R + 'B533557400/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); no photos on the menu (December 2025).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区西洞院三条下る柳水町77-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site live; Tabelog reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.007952, 135.755297); cross-checked: GSI 京都府京都市中京区柳水町77番地 (lot) 23m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533471626/', R + 'B512995582/'],
    price_note: 'Spend ¥1,000–1,999 at lunch, ¥4,000–7,999 at dinner (Tabelog; 2025–2026 reviews).', last_checked: TODAY, items: [
      it('Pranzo A', '', 'Lunch Pranzo A (salad, focaccia, pasta of the day)', null, 'Lunch', 'no', 'no', 'August 2026.', 'pasta_lunch'),
      it('', '', 'Anniversary course', null, 'Dinner', 'no', 'no', 'September 2025.', 'set_course'),
    ] }, {
    cuisine: '坪庭のある町家のトラットリア。ソースに合わせた何種類もの手打ちパスタ、イタリアから仕入れる食材、すべて手作り (公式サイト)・ランチの Pranzo A はサラダ、フォカッチャ、オイル・クリーム・トマトから選ぶ本日のパスタ (2026年8月)。海ぶどうとからすみ、あさりとズッキーニなど・夜は記念日コースなど。前菜の盛り合わせ、パスタ2種、養老豚の肩ロースのグリル、デザートの盛り合わせ (2025年9月)。丹波の鶏とポルチーニのクリームパスタ、とうもろこしのラザニア、ローストビーフ、ジェノベーゼ、オイルサーディン、ピザ (2025〜2026年の口コミ)・ワインとカクテル。イタリアから直輸入のジャムを通販でも (公式サイト)',
    neighborhood: '西洞院三条。烏丸御池駅から徒歩6〜9分',
    gf_detail: 'グルテンフリーではない: 手打ちパスタ、ピザ、ラザニア、フォカッチャ (公式サイト、2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: クリームパスタ、豚、鶏、魚介 (2025〜2026年の口コミ)。',
    notes: '[イタリアン・西洞院三条、坪庭のある町家のトラットリア] 2009年から烏丸御池近くにある温かい灯りの町家のトラットリア。カウンター、掘りごたつ、坪庭があり、手打ちパスタ、ピザ、イタリアの食材を。平日ランチは1,500円前後。店も料理も好評だが、料理の説明がないという声 (2025年9月) や、パスタが以前ほどではないという声 (2026年2月) も。月曜休み。',
  });
}

// ================================================================ マーマー コーヒー 京都
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26028246/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://murmur-coffee.com/index.html';
  const WD = day(['09:00', '18:00']); const SA = day(['09:00', '17:00']);
  put({
    id: 'kyoto_murmur_coffee', name: 'マーマー コーヒー 京都 (murmur coffee kyoto)', category: 'OMNI',
    lat: 34.991535, lng: 135.765423, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: coffee is fine, but the food is pizza toast, pound cake and biscuits (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask: black coffee is plant-based; café au lait, cocoa and pizza toast are not (2026 reviews).',
    hours_raw: 'Tabelog: Tue–Fri 9:00–18:00, Sat 9:00–17:00; closed Sunday, Monday and holidays. The shop’s own site (under renewal) says 9:00–17:00, closed Sunday, with irregular days off. No reservations. 14 seats, some by windows that open onto the Takase River (2026 reviews); non-smoking; cards (JCB, Amex), e-money and QR. Opened 22 November 2016 (Tabelog).',
    hours: { 1: WD, 2: WD, 3: WD, 4: WD, 5: SA }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'On the Takase River at Shomen-dori — 10 min walk from Keihan Shichijo Stn',
    cuisine: 'A small riverside coffee stand and café (2026 reviews) · house blends: Murmur, Takase River, Kikuhama, and a "Marufuku" blend with 1.5× the beans (2026 reviews); coffee with a biscuit under ¥500 (July 2026); iced coffee, iced café au lait, cocoa · pizza toast; matcha and black-bean pound cake (2026 reviews) · coffee beans to take home (April 2026)',
    website: SITE, gmaps: gm('murmur coffee kyoto 正面通高瀬'), menu_url: null,
    notes: '[Coffee · Takase River at Shomen-dori, a riverside window seat] A tiny café on the Takase River, open from 9 am, with windows that fold open onto the water and trees and chairs made by art-university students. House blends named for the neighbourhood, pizza toast and pound cake, coffee and a biscuit under ¥500. One regular misses the cherry tree out front, replaced by young trees (May 2026). Closed Sunday and Monday.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Opened 22 November 2016 (Tabelog). Reviewers in 2026 describe a compact café on the Takase River near Hotel Marufuku, windows that open to the water and the birds, chairs designed by students of Kyoto University of Art and Design, friendly staff, and beans for sale. A May 2026 regular since opening notes that the cherry tree in front is gone and new young trees have been planted along the river.',
      philosophy: null,
      specialty: 'Takase River blend; pizza toast.',
      anecdotes: [
        { text: '"When you fully open the windows, you’re greeted by the sparkling water surface and a beautiful tree-lined street right in front of you." — February 2026.', source: R + 'B522301043/' },
        { text: 'A regular since opening, May 2026: "I was disappointed to see that the beautiful cherry tree in front is gone."', source: R + 'B527300035/' },
        { text: 'July 2026: the Kikuhama blend’s bitterness was milder than this lover of strong coffee hoped — next time, the Marufuku blend "which uses 1.5 times the usual amount of beans."', source: R + 'B531338106/' },
      ],
      japanese_sources_summary: '公式サイト (murmur-coffee.com、リニューアル中): murmur coffee kyoto (マーマーコーヒー京都)、下京区正面通高瀬角、営業時間 9:00〜17:00、定休日 日曜 (不定休あり)。食べログ: カフェ、京阪七条駅から徒歩10分、火〜金 9:00〜18:00、土 9:00〜17:00、日月祝休み、予約不可、14席、禁煙、カード (JCB・AMEX)・電子マネー・QR可、2016年11月22日オープン。口コミ (2026年2月〜9月、英語): 高瀬川沿い、窓を開けると川と並木、Kyoto University of Art and Design の学生がデザインした椅子、Hotel Marufuku の近く、マーマーブレンド、高瀬川ブレンド、Kikuhama ブレンド、豆1.5倍の Marufuku ブレンド、コーヒーとビスケットで500円以下、アイスコーヒー、アイスカフェオレ、ココア、ピザトースト、抹茶と黒豆のパウンドケーキ、豆の販売、前の桜の木がなくなったという声。',
      confidence: 'medium', sources: [SITE, TB, R + 'B522301043/', R + 'B522514416/', R + 'B524031676/', R + 'B525707275/', R + 'B527300035/', R + 'B530217872/', R + 'B531338106/', R + 'B534156412/', R + 'B536305218/', R + 'B536523455/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the counter; a quiet riverside room.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市下京区正面通高瀬角',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop site live (under renewal); Tabelog reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (34.991535, 135.765423); the address is a corner (正面通高瀬角) with no lot and GSI matches only the ward, so loc_precise false; mp_kikoku is 140m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B531338106/'],
    price_note: 'Few prices in the sources.', last_checked: TODAY, items: [
      it('', '', 'Blend coffee with a biscuit', 'under ¥500', 'Coffee', 'ask', 'ask', 'July 2026.', 'coffee'),
      it('', '', 'Pizza toast', null, 'Food', 'no', 'no', 'February and September 2026.', 'pizza_toast'),
    ] }, {
    cuisine: '川沿いの小さなコーヒーの店 (2026年の口コミ)・ハウスブレンドはマーマー、高瀬川、Kikuhama、豆を1.5倍使う Marufuku (2026年の口コミ)。コーヒーとビスケットで500円以下 (2026年7月)。アイスコーヒー、アイスカフェオレ、ココア・ピザトースト、抹茶と黒豆のパウンドケーキ (2026年の口コミ)・持ち帰りのコーヒー豆 (2026年4月)',
    neighborhood: '高瀬川沿いの正面通。京阪七条駅から徒歩10分',
    gf_detail: '要確認: コーヒーは問題ないが、食べ物はピザトースト、パウンドケーキ、ビスケット (2026年の口コミ)。',
    vegan_detail: '要確認: ブラックコーヒーは植物性。カフェオレ、ココア、ピザトーストは不可 (2026年の口コミ)。',
    notes: '[コーヒー・正面通の高瀬川、川沿いの窓の席] 高瀬川沿いの小さなカフェで、朝9時から。窓を開けると川と並木が広がり、椅子は芸術系の大学の学生がデザインしたもの。町の名前を付けたブレンド、ピザトースト、パウンドケーキ。コーヒーとビスケットで500円以下。店の前の桜の木がなくなり若木が植えられたのが寂しいという常連の声も (2026年5月)。日・月曜休み。',
  });
}

// ================================================================ SAGAN
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26019282/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.sagankyoto.com';
  const H = day(['08:00', '21:00']);
  put({
    id: 'kyoto_sagan_rokuhara', name: 'SAGAN', category: 'OMNI',
    lat: 34.997698, lng: 135.773889, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: the Japanese breakfast sets of rice, miso soup and pickles may suit, but muffins, bread, burgers and tiramisu are wheat-based (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: egg dishes, salmon, bacon, hamburg steak and dashi miso soup (reviews).',
    hours_raw: 'Tabelog: daily 8:00–21:00; hours may change. Reservations through its online booking page; at breakfast there can be a wait list (May 2026). Order by mobile, then pay in advance at the register (August 2026). 75 seats — 12 in the café, 12 in an inner room, 50 in a party room — plus a terrace; non-smoking; cards, transit IC and most QR. Run by 株式会社S (official site).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Rokuhara on Matsubara-dori, Higashiyama — 10 min walk from Kiyomizu-Gojo Stn',
    cuisine: 'An all-day café in a renovated house with its own ceramics: Kyoto breakfasts and muffins (official site; reviews) · breakfast: rice-ball set with 西利 pickles ¥1,210, Japanese set ¥660 with rice, miso soup and pickles, plus sides — tamagoyaki ¥440, grilled salmon ¥495, fried egg, bacon; tamago-kake-gohan (September 2025; May and August 2026) · muffins ¥324 to take out (walnut, chocolate-chip banana, hojicha raisin, matcha white chocolate, salted kombu), muffin set ¥700 (2025–2026 reviews) · hamburg steak, a burger, namul and dashimaki set, hojicha tiramisu with Tanba black beans (2026 reviews) · fresh grape juice ¥700 (September 2025)',
    website: SITE, gmaps: gm('SAGAN 轆轤町'), menu_url: SITE + '/menu/',
    notes: '[Café · Rokuhara on Matsubara-dori, Kyoto breakfasts and muffins] An airy all-day café in a renovated house near Kiyomizu-Gojo, open from 8 am, serving Kyoto breakfasts of rice, pickles and miso soup with a choice of sides, then burgers and hamburg steak, plus moist muffins to take away — on its own sturdy ceramics. Very popular with visitors from abroad; expect a wait at breakfast. One diner disliked the mobile-order-then-pay system and the clanking concrete chairs (August 2026).',
    chef_bio: { chef_name: null, roles: ['Run by 株式会社S (official site); chef not named'], origin: null,
      background: 'Per the official site: "Kyoto Rokuhara CAFE SAGAN," run by 株式会社S under the line "less is more," with its own ceramics line (SABOTEN), kintsugi repairs, a news-paper-style menu and online booking; mobile ordering since April 2025. Reviewers in 2025–2026 describe a renovated house with an open entrance, terrace seats, glass tables and minimal walls, and a clientele that is about 80% visitors from abroad (May 2026).',
      philosophy: 'Official site: 「LESS IS MORE」.',
      specialty: 'Kyoto breakfast set; muffins.',
      anecdotes: [
        { text: 'August 2026: "after placing a mobile order, you have to go to the register to pay in advance" — and the concrete chairs "make a metallic sound" when people stand.', source: R + 'B534153669/' },
        { text: 'September 2026: the menu "reminiscent of an English newspaper," and a staff member who "was bright and had a charming smile."', source: R + 'B535825866/' },
        { text: 'At 9 am on a weekday in May 2026, six groups were ahead and the quoted wait was 40 minutes, but many did not answer the call, so it took about 15.', source: R + 'B529054972/' },
      ],
      japanese_sources_summary: '公式サイト (sagankyoto.com): 京都 六波羅 CAFE SAGAN、株式会社S、LESS IS MORE、フード・ドリンク・マフィンセット・パン、新聞風のメニュー、器の SABOTEN、金継ぎ、予約はオンライン、2025年4月からモバイルオーダー。食べログ: カフェ・パン、東山区松原通大和大路東入2丁目轆轤町93、清水五条駅から徒歩10分、毎日 8:00〜21:00、75席 (カフェ12、奥の部屋12、パーティールーム50)、テラス、禁煙、カード・交通系IC・QR可。口コミ (2025年9月〜2026年11月、英語): 西利の漬物のおにぎりセット1,210円、和定食660円、だし巻き440円、焼き鮭495円、目玉焼き、ベーコン、卵かけご飯、マフィン324円 (くるみ、チョコチップバナナ、ほうじ茶レーズン、抹茶ホワイトチョコ、塩昆布)、マフィンセット700円、ハンバーグ、バーガー、ナムルとだし巻きの定食、丹波黒豆のほうじ茶ティラミス、ぶどうジュース700円、外国人客が8割ほど、朝は順番待ち、モバイルオーダーのあと先にレジで支払うのが面倒、コンクリートの椅子の音が気になる、笑顔の素敵なスタッフ。',
      confidence: 'medium', sources: [SITE, TB, R + 'B514006006/', R + 'B528881658/', R + 'B529054972/', R + 'B534153669/', R + 'B535825866/', R + 'B536182629/', R + 'B536586484/', R + 'B536817856/', R + 'B537846734/', R + 'B538754161/'] },
    cultural_comfort: { level: 'english', note: 'English newspaper-style menu; mobile ordering; mostly visitors from abroad (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区松原通大和大路東入2丁目轆轤町93',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with October 2026 news; Tabelog reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (34.997699, 135.773823), moved 6m east to (34.997698, 135.773889) because the Tabelog point sat 4.8m from mp_rokuhara_hanten; now 10.7m from it; GSI 京都府京都市東山区轆轤町93番地 (lot) 48m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B514006006/', R + 'B536817856/'],
    price_note: 'Prices from 2025–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Rice-ball breakfast set with 西利 pickles', '¥1,210', 'Breakfast', 'ask', 'no', 'September 2025.', 'onigiri_set'),
      it('', '', 'Japanese set (rice, miso soup, pickles)', '¥660', 'Breakfast', 'ask', 'no', 'September 2025; sides extra.', 'teishoku'),
      it('', '', 'Muffin (take-out)', '¥324', 'Bakery', 'no', 'no', 'October and November 2026.', 'muffin'),
      it('', '', 'Muffin set with a drink', '¥700', 'Café', 'no', 'no', 'October 2026.', 'muffin'),
    ] }, {
    cuisine: '自前の器で出す、改装した家の終日営業のカフェ。京都らしい朝ごはんとマフィン (公式サイト、口コミ)・朝は西利の漬物のおにぎりセット1,210円、ご飯・味噌汁・漬物の和定食660円に、だし巻き440円、焼き鮭495円、目玉焼き、ベーコンを追加。卵かけご飯も (2025年9月、2026年5月・8月)・持ち帰りのマフィン324円 (くるみ、チョコチップバナナ、ほうじ茶レーズン、抹茶ホワイトチョコ、塩昆布)、マフィンセット700円 (2025〜2026年の口コミ)・ハンバーグ、バーガー、ナムルとだし巻きの定食、丹波黒豆のほうじ茶ティラミス (2026年の口コミ)・生のぶどうジュース700円 (2025年9月)',
    neighborhood: '東山、松原通の六波羅。清水五条駅から徒歩10分',
    gf_detail: '要確認: ご飯・味噌汁・漬物の和の朝ごはんは合うかもしれないが、マフィン、パン、バーガー、ティラミスは小麦 (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 卵料理、鮭、ベーコン、ハンバーグ、出汁の味噌汁 (口コミ)。',
    notes: '[カフェ・松原通の六波羅、京都の朝ごはんとマフィン] 清水五条近く、改装した家の開放的な終日営業のカフェ。朝8時から、ご飯・漬物・味噌汁におかずを選ぶ京都の朝ごはん、昼からはバーガーやハンバーグ、持ち帰りのしっとりしたマフィンも。器も自前。海外からの客に大人気で、朝は待つことも。モバイルオーダーのあと先払いの仕組みと、コンクリートの椅子の音が気になるという声も (2026年8月)。',
  });
}

// ================================================================ 炭火串焼とりと
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26002638/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.sumibi-torito.jp/';
  const H = day(['17:30', '23:00']);
  put({
    id: 'kyoto_sumibi_kushiyaki_torito', name: '炭火串焼とりと (Sumibi Kushiyaki Torito)', category: 'OMNI',
    lat: 35.017696, lng: 135.772520, cuisine_type: 'yakitori',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tare-glazed skewers, kara-age and cucumber tempura (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken house — skewers, tsukune, ostrich, chicken rice (Tabelog; reviews).',
    hours_raw: 'Tabelog: daily 17:30–23:00 (last order 22:30); closed irregularly. Even when online booking shows full, call — seats may be free (Tabelog). 25 seats at the counter and tables; non-smoking; children welcome; cards, e-money and most QR. Otoshi ¥350, not charged with set menus (Tabelog, Japanese original 「お通し３5０円(セットメニューでは頂きません)」). Founded 10 December 2001 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kawabata-Marutamachi — by Jingu-Marutamachi Stn exit 4',
    cuisine: 'Charcoal-grilled chicken skewers since 2001, focused on chicken, charcoal, sauces and salt (Tabelog blurb) · house tsukune, Kyoto hinadori, Kyo-jidori skewers, rare cuts, ostrich (Tabelog; official site) · kara-age, salads, tempura cucumber, soboro rice bowl, clay-pot rice to finish, grilled rice balls (2026 reviews) · a wide range of sake (August 2026)',
    website: SITE, gmaps: gm('炭火串焼とりと 東丸太町'), menu_url: SITE + 'menu/',
    notes: '[Yakitori · Kawabata-Marutamachi, chicken over charcoal since 2001] A dim, stylish chicken house right at Jingu-Marutamachi Station: charcoal skewers with rare cuts, house tsukune, ostrich, and clay-pot rice to finish, with plenty of sake. Most 2026 diners were happy; one found the service rushed and the value poor (September 2026), another found new staff slow with drinks (November 2026). ¥350 otoshi.',
    chef_bio: { chef_name: null, roles: ['Owner not named; sister shops 炭火串焼とりと 四条烏丸店 and sumiyaki 燈 (official site)'], origin: null,
      background: 'Founded 10 December 2001 (Tabelog). The shop’s Tabelog blurb promises to keep exploring yakitori and chicken: special tsukune, Kyoto hinadori, rare skewers and ostrich, with attention to chicken, charcoal, sauces, salt and grilling. Its site links a second Torito at Shijo-Karasuma (26026431) and a sister shop, sumiyaki 燈. Reviewers in 2026 describe a clean, dim room for dates, and an owner attentive even behind the acrylic screen (November 2026).',
      philosophy: null,
      specialty: 'Tsukune; rare chicken skewers; clay-pot rice.',
      anecdotes: [
        { text: 'September 2026: "The service was incredibly fast… but honestly, it felt too rushed, as if they wanted us to leave quickly… The cost-performance ratio is poor."', source: R + 'B534972205/' },
        { text: 'Before the Okuribi in August 2026, a diner loved the tempura cucumber, tried it at home, and "the batter fell off."', source: R + 'B534988607/' },
        { text: 'November 2026: "We waited a long time for our drinks, even though they were already prepared on the counter" — a new staff member, the diner guessed.', source: R + 'B538639307/' },
      ],
      japanese_sources_summary: '公式サイト (sumibi-torito.jp): 炭火串焼きとりと、京都の焼き鳥・鳥料理、川端丸太町店と四条烏丸店、姉妹店 sumiyaki 燈、京地どり串。食べログ: 焼き鳥・鍋・居酒屋、左京区丸太町通川端東入東丸太町9-5 神原ビル 1F、京阪神宮丸太町駅4番出口すぐ、毎日 17:30〜23:00 (L.O. 22:30)、不定休、ネット予約が満席でも電話で問い合わせを、25席、禁煙、子供可、カード・電子マネー・QR可、お通し350円 (セットメニューでは頂かない)、2001年12月10日創業、特製つくね、京都ひな鶏、希少部位、ダチョウ、鶏・炭・たれ・塩・焼きへのこだわり。口コミ (2026年3月〜11月、英語): 炭火の香り、希少部位、唐揚げ、サラダ、きゅうりの天ぷら、そぼろ丼、土鍋ご飯、焼きおにぎり、日本酒が豊富、薄暗くデート向き、急かされるようでコスパが悪いという声 (2026年9月)、新人で飲み物が遅いという声 (2026年11月)。',
      confidence: 'medium', sources: [SITE, TB, R + 'B528006048/', R + 'B528572681/', R + 'B529065655/', R + 'B530367001/', R + 'B531654683/', R + 'B532326941/', R + 'B533277670/', R + 'B534972205/', R + 'B534988607/', R + 'B538639307/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter and tables; book online or by phone.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区丸太町通川端東入東丸太町9-5 神原ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.017696, 135.772520); cross-checked: GSI 京都府京都市左京区東丸太町9番地 (lot) 45m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No item prices in the sources; spend ¥5,000–7,999 (Tabelog; reviews); otoshi ¥350.', last_checked: TODAY, items: [
      it('', '', 'House tsukune skewer', null, 'Skewers', 'no', 'no', 'Tabelog.', 'tsukune'),
      it('', '', 'Clay-pot rice', null, 'Rice', 'ask', 'no', 'March 2026.', 'donabe_gohan'),
    ] }, {
    cuisine: '2001年からの炭火の鶏の串焼き。鶏、炭、たれ、塩、焼きにこだわる (食べログの紹介文)・特製つくね、京都ひな鶏、京地どりの串、希少部位、ダチョウ (食べログ、公式サイト)・唐揚げ、サラダ、きゅうりの天ぷら、そぼろ丼、締めの土鍋ご飯、焼きおにぎり (2026年の口コミ)・日本酒が豊富 (2026年8月)',
    neighborhood: '川端丸太町。神宮丸太町駅4番出口すぐ',
    gf_detail: 'グルテンフリーではない: たれの串、唐揚げ、きゅうりの天ぷら (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 鶏料理の店。串、つくね、ダチョウ、鶏のご飯 (食べログ、口コミ)。',
    notes: '[焼き鳥・川端丸太町、2001年からの炭火の鶏] 神宮丸太町駅すぐの、薄暗くおしゃれな鶏料理の店。希少部位の炭火の串、特製つくね、ダチョウ、締めの土鍋ご飯に、日本酒もたっぷり。2026年は満足の声が多いが、急かされるようでコスパが悪いという声 (2026年9月)、新人で飲み物が遅かったという声 (2026年11月) も。お通し350円。',
  });
}

save();
