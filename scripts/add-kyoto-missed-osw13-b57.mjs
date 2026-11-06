// Kyoto priority (kyoto-missed), worker osw13, batch 57 — lane: Tabelog id mod 6 = 0.
// Core: 円屋 三条小路店, ビストロ ヴェルジュ. Notable: 2eme MAISON, 点邑.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-06';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-57');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 円屋 三条小路店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26042136/'; const R = TB + 'dtlrvwlst/';
  const LD = day(['11:30', '15:30'], ['17:00', '22:00']); const D = day(['17:00', '22:00']);
  put({
    id: 'kyoto_enya_sanjo_koji', name: '円屋 三条小路店 (Enya Sanjo Koji)', category: 'OMNI',
    lat: 35.007693, lng: 135.757189, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles, shumai and wonton wrappers, kara-age (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken broths, chicken chashu, meat and shrimp shumai (reviews).',
    hours_raw: 'Tabelog: Mon, Tue, Wed, Fri, Sat lunch 11:30–15:30 and dinner 17:00–22:00 (last order 21:30); Thu dinner only; closed Sunday (a March 2025 diner noted lunch as 11:00–14:00). 20 seats — 10 at the counter and three tables; picture menu; non-smoking; cards, transit IC and most QR (Tabelog). Service charge: none — Tabelog’s Japanese original says 「なし」 (the English auto-translation wrongly says one is added). The entrance is on the alley side, easy to miss; look for the red lantern (2024–2026 reviews). Opened 4 December 2024 (Tabelog).',
    hours: { 0: LD, 1: LD, 2: LD, 3: D, 4: LD, 5: LD }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sanjo back alley near Karasuma Oike — 5 min walk from Karasuma Oike Stn',
    cuisine: '"Kyoto Chinese": light noodles and big steamed shumai, with drinks at night (2025–2026 reviews) · noodles ¥900: Kyoto white-miso noodles (the signature), Kyoto wonton noodles, spicy black-sesame mixed noodles, chilled noodles in summer; limited noodles ¥1,000 (2024–2026 reviews) · lunch set ¥1,300: noodles with shumai, a small dish and rice with pickled mustard greens, or with kara-age (2025–2026 reviews) · assorted appetizers ¥600, assorted shumai (meat and shrimp) ¥650, umeshu and water ¥550 (December 2024) · sesame dumplings, black shichimi on the table (reviews)',
    website: null, gmaps: gm('円屋 三条町'), menu_url: null,
    notes: '[Chinese noodles & shumai · Sanjo alley near Karasuma Oike, white-miso noodles] A small "Kyoto Chinese" shop under a red lantern in a back alley, the sister of 円屋 near Shijo: the signature is a creamy Kyoto white-miso noodle soup, eaten with big, juicy steamed shumai, in a ¥1,300 lunch set. A December 2025 regular found the once-too-light broth much improved. No service charge. Closed Sunday; Thursday dinner only.',
    chef_bio: { chef_name: null, roles: ['Owner, not named; "cheerful, energetic, and very kind" (June 2026)'], origin: null,
      background: 'Opened 4 December 2024 (Tabelog), the second shop under the name 円屋 after the original near Shijo (Tabelog listing). Reviewers describe a counter around the kitchen, two or three tables in the back, a Taiwanese-looking front with a red lantern and a Japanese-modern interior, a friendly owner and manager, and set lunches where you pick the noodles.',
      philosophy: null,
      specialty: 'Kyoto white-miso noodles; steamed shumai.',
      anecdotes: [
        { text: 'A December 2025 regular had stayed away after the ramen "had become quite light," came back for the first anniversary, and found it "now has a richer depth and umami" — with a free sweet at the till.', source: R + 'B496786983/' },
        { text: 'The same regular, in August 2026, wished for a set without rice: "I’ve thought this since the restaurant opened and even mentioned it to them once."', source: R + 'B496786983/' },
      ],
      japanese_sources_summary: '食べログ: 円屋 三条小路店、中華料理・居酒屋・麺類、中京区新町通六角上る三条町342、烏丸御池駅から徒歩5分、月火水金土 11:30〜15:30・17:00〜22:00 (L.O. 21:30)、木曜は夜のみ、日曜休み、20席 (カウンター10、テーブル3)、写真付きメニュー、禁煙、カード・交通系IC・QR可、サービス料は原文で「なし」、2024年12月4日オープン。口コミ (2024年12月〜2026年9月、英語): 京都の白味噌の麺が名物、京都のワンタン麺、黒胡麻の辛い混ぜ麺、夏の冷やし麺、麺は900円 (限定1,000円)、焼売セット・唐揚げセット1,300円 (ご飯と高菜)、前菜盛り合わせ600円、焼売盛り合わせ650円、梅酒の水割り550円、黒七味、胡麻団子、赤提灯、路地の奥、店主は明るく元気、開店当初より味が良くなったという声、ご飯なしのセットがほしいという声。',
      confidence: 'medium', sources: [TB, R + 'B496786983/', R + 'B504262917/', R + 'B530750606/', R + 'B531287770/', R + 'B534130279/', R + 'B534166385/', R + 'B534907654/', R + 'B535926184/', R + 'B536143232/', R + 'B538233278/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Picture menu; order by telling the staff.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区新町通六角上る三条町342',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.007693, 135.757189); cross-checked: GSI 京都府京都市中京区三条町342番地 (lot) 38m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B496786983/', R + 'B530750606/'],
    price_note: 'Prices from 2024–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Kyoto white-miso noodles', '¥900', 'Noodles', 'no', 'no', 'December 2024 and 2025.', 'miso_ramen'),
      it('', '', 'Noodle and shumai lunch set', '¥1,300', 'Lunch', 'no', 'no', '2025–2026.', 'set_meal'),
      it('', '', 'Assorted shumai (2 meat, 2 shrimp)', '¥650', 'Dim sum', 'no', 'no', 'December 2024.', 'shumai'),
      it('', '', 'Chilled noodles (summer)', '¥900', 'Noodles', 'no', 'no', 'August 2026.', 'hiyashi'),
    ] }, {
    cuisine: '軽い麺と大きな蒸し焼売の「京都中華」。夜は飲みにも (2025〜2026年の口コミ)・麺は900円で、京都の白味噌の麺 (名物)、京都のワンタン麺、黒胡麻の辛い混ぜ麺、夏は冷やし麺。限定麺は1,000円 (2024〜2026年の口コミ)・ランチは1,300円のセットで、麺に焼売と小鉢と高菜のご飯、または唐揚げ (2025〜2026年の口コミ)・前菜の盛り合わせ600円、焼売の盛り合わせ (肉と海老) 650円、梅酒の水割り550円 (2024年12月)・胡麻団子、卓上の黒七味 (口コミ)',
    neighborhood: '烏丸御池近くの三条の路地。烏丸御池駅から徒歩5分',
    gf_detail: 'グルテンフリーではない: 小麦の麺、焼売やワンタンの皮、唐揚げ (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 鶏のスープ、鶏チャーシュー、肉と海老の焼売 (口コミ)。',
    notes: '[中華麺と焼売・烏丸御池近くの三条の路地、白味噌の麺] 路地の奥の赤提灯が目印の小さな「京都中華」の店で、四条近くの円屋の2号店。名物はクリーミーな京都の白味噌の麺で、大きくジューシーな蒸し焼売と合わせた1,300円のランチセットが人気。2025年12月には、薄かったスープがずっと良くなったという常連の声。サービス料なし。日曜休み、木曜は夜のみ。',
  });
}

// ================================================================ ビストロ ヴェルジュ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26006754/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.bistro-verjus.com/';
  const LD = day(['12:00', '14:30'], ['18:00', '22:00']); const L = day(['12:00', '14:30']); const D = day(['18:00', '22:00']);
  put({
    id: 'kyoto_bistro_verjus', name: 'ビストロ ヴェルジュ (BISTRO Verjus)', category: 'MOM_AND_POP',
    lat: 35.013765, lng: 135.774104, cuisine_type: 'french',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: cutlets, fried shrimp, hamburg steak, pound cake, bread with the courses (official site; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a bistro of beef, pork, chicken and fish (official site).',
    hours_raw: 'Official site: lunch 12:00–14:30, dinner 18:00–22:00; Tuesday lunch only; Thursday dinner only; closed Wednesday; occasional closures posted in its news. 16 seats per the site (Tabelog: 20, five tables); private hire for 10–16; reservations advised, lunch often full (December 2024; April 2026). Non-smoking; children welcome; cards (JCB, Amex, Diners), e-money and QR (Tabelog). One parking space nearby and a temple car park (Tabelog; April 2025).',
    hours: { 0: LD, 1: L, 3: D, 4: LD, 5: LD, 6: LD }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kawabata-Nijo — 2 min walk from the Kawabata-Nijo bus stop; 7–10 min from Sanjo Stn',
    cuisine: 'French bistro and old-style yoshoku, tax included (official site) · lunch: recommended lunch ¥1,100 (¥1,510 with soup), fresh-fish lunch ¥1,300, Verjus course ¥2,700, fish course ¥3,020, kuroge wagyu course ¥5,130; hamburg steak, hamburg and fried shrimp, Kyoto pork grill, pork or chicken cutlet ¥980–1,300, buckwheat galette ¥1,200; drink +¥220, dessert +¥200 (official site) · dinner courses A ¥4,200, B ¥6,000, C ¥7,000, petit course ¥2,900; kuroge wagyu steak sets 100–200 g ¥4,100–7,500; smoked chicken, Kyoto pork and camembert; bouillabaisse ¥2,400; lamb roast ¥2,900 (official site) · organic vegetables the chef grows, kuroge wagyu, fish sent by a fisherman friend in Miyazu (official site)',
    website: SITE, gmaps: gm('ビストロ ヴェルジュ 難波町'), menu_url: SITE + 'lunch',
    notes: '[French bistro & yoshoku · Kawabata-Nijo, a couple’s neighbourhood bistro] A small bistro near the Kamo River at Nijo, run by chef 小川 潤 in the kitchen and his wife out front: ¥1,100 lunches of Kyoto pork or hamburg steak, ¥2,700 lunch courses, and French dinner courses from ¥4,200 with vegetables he grows himself. Regulars swap the main for the house hamburg steak and fried shrimp. Book lunch. Closed Wednesday.',
    chef_bio: { chef_name: '小川 潤', roles: ['Owner-chef (official site)'], origin: null,
      background: 'Per the official site: a small bistro serving traditional French technique at reasonable prices, from everyday lunch to special dinners, in a quiet residential area; the owner-chef grows organic vegetables himself, uses domestic kuroge wagyu, and gets fish direct from a fisherman acquaintance in Miyazu. Reviewers in 2025–2026 describe a couple — "The front of house is managed by the wife, and the chef is her husband" — chatting with regulars, sending postcards, and roses at the door in spring.',
      philosophy: 'Official site: 「シンプルに旬の素材の味を引き出すこと」 — simply drawing out the flavour of seasonal ingredients.',
      specialty: 'Hamburg steak with fried shrimp; Kyoto pork grill.',
      anecdotes: [
        { text: '"The front of house is managed by the wife, and the chef is her husband, making it a lovely couple-run establishment." — July 2026.', source: R + 'B533134750/' },
        { text: 'A four-time regular in June 2026: "I enjoy chatting with the owner and his wife," and always swaps the main for the hamburg steak and fried shrimp.', source: R + 'B504534315/' },
        { text: 'April 2026: the fully booked room left the staff "a bit rushed," and the diner asked that the corner furniture be cleaned.', source: R + 'B526574913/' },
      ],
      japanese_sources_summary: '公式サイト (bistro-verjus.com): BISTRO Verjus (ビストロ ヴェルジュ)、オーナーシェフ 小川 潤、本格フレンチをカジュアルに、オーナーシェフ自家栽培の有機野菜、国産の黒毛和牛、宮津の知人漁師から直送の魚、ランチ12:00〜14:30・ディナー18:00〜22:00、火曜はランチのみ、木曜はディナーのみ、水曜休み、16席、10〜16人で貸切、おすすめランチ1,100円 (スープ付き1,510円)、鮮魚ランチ1,300円、ヴェルジュコースランチ2,700円、お魚のコースランチ3,020円、黒毛和牛コースランチ5,130円、特製ハンバーグ、エビフライとハンバーグ、京都ポークグリル、そば粉のガレット、ドリンク220円・デザート200円、ディナーコースA 4,200円・B 6,000円・C 7,000円、プチディナーコース2,900円、黒毛和牛ステーキ100〜200g 4,100〜7,500円、スモーク料理、ブイヤベース2,400円、仔羊のロースト2,900円、税込。食べログ: フレンチ・洋食、左京区二条通川端東入ル難波町218、川端二条バス停から徒歩2分、20席、子供可、禁煙、カード・電子マネー・QR可。口コミ (2024年11月〜2026年7月、英語): 夫婦で営む、奥さんが接客でご主人がシェフ、常連はハンバーグとエビフライ、昼は満席が多い、温かい接客、ポストカード、入口のバラ、混んで慌ただしかった・隅の家具の掃除をという声。',
      confidence: 'high', sources: [SITE, SITE + 'about', SITE + 'concept', SITE + 'lunch', SITE + 'dinner', TB, R + 'B496543438/', R + 'B501744306/', R + 'B504019283/', R + 'B504534315/', R + 'B506966315/', R + 'B512850882/', R + 'B526574913/', R + 'B527967265/', R + 'B533134750/', R + 'B534917483/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A neighbourhood bistro; book ahead for lunch.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市左京区二条通川端東入ル難波町218',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with notices through October 2026; Tabelog reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.013765, 135.774104); cross-checked: GSI 京都府京都市左京区難波町218番地 (lot) 37m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE + 'lunch', SITE + 'dinner'],
    price_note: 'Official site, tax included.', last_checked: TODAY, items: [
      it('おすすめランチ', '', 'Recommended lunch', '¥1,100', 'Lunch', 'no', 'no', 'Official site; ¥1,510 with soup.', 'set_meal'),
      it('エビフライとハンバーグ', '', 'Fried shrimp and hamburg steak', '¥1,300', 'Lunch', 'no', 'no', 'Official site.', 'hamburg'),
      it('ヴェルジュコースランチ', '', 'Verjus lunch course', '¥2,700', 'Lunch', 'no', 'no', 'Official site.', 'set_course'),
      it('Aコース', '', 'Dinner course A', '¥4,200', 'Dinner', 'no', 'no', 'Official site.', 'set_course'),
    ] }, {
    cuisine: 'フレンチのビストロと昔ながらの洋食、税込 (公式サイト)・ランチはおすすめランチ1,100円 (スープ付き1,510円)、鮮魚ランチ1,300円、ヴェルジュコースランチ2,700円、お魚のコースランチ3,020円、黒毛和牛コースランチ5,130円。特製ハンバーグ、エビフライとハンバーグ、京都ポークグリル、ポークやチキンのカツ980〜1,300円、そば粉のガレット1,200円。ドリンク+220円、デザート+200円 (公式サイト)・ディナーはコースA 4,200円、B 6,000円、C 7,000円、プチディナーコース2,900円。黒毛和牛ステーキ100〜200g 4,100〜7,500円、鶏・京都ポーク・カマンベールのスモーク、ブイヤベース2,400円、仔羊のロースト2,900円 (公式サイト)・シェフが自家栽培する有機野菜、黒毛和牛、宮津の知人漁師から届く魚 (公式サイト)',
    neighborhood: '川端二条。川端二条バス停から徒歩2分、三条駅から7〜10分',
    gf_detail: 'グルテンフリーではない: カツ、エビフライ、ハンバーグ、パウンドケーキ、コースのパン (公式サイト、口コミ)。',
    vegan_detail: 'ヴィーガン不可: 牛、豚、鶏、魚のビストロ (公式サイト)。',
    notes: '[フレンチビストロと洋食・川端二条、夫婦の街のビストロ] 二条の鴨川近くの小さなビストロで、厨房はシェフの小川 潤さん、接客は奥さん。1,100円の京都ポークやハンバーグのランチ、2,700円のランチコース、自家栽培の野菜を使う4,200円からのディナーコース。常連はメインをハンバーグとエビフライに変える。ランチは予約がおすすめ。水曜休み。',
  });
}

// ================================================================ 2eme MAISON
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26037954/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '23:00']);
  put({
    id: 'kyoto_2eme_maison', name: '2eme MAISON', category: 'OMNI',
    lat: 34.996096, lng: 135.767166, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: pasta, focaccia sandwiches, shrimp tempura, cutlets, chicken nanban and pies (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: steak, hamburg, chicken, clam chowder, rillettes, pudding (reviews).',
    hours_raw: 'Tabelog: daily 11:30–23:00, dinner from 17:00; hours may change. Reservations for dinner from 17:00 only; at lunch, queues form before opening (October 2026). Cards; no e-money or QR (Tabelog). Non-smoking; children welcome; counter seating. An August 2026 diner found the Tabelog phone number out of service but the Google Maps number worked. Opened 20 July 2022 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gojo — 3 min walk from Kiyomizu-Gojo Stn',
    cuisine: 'A dim, antique-styled café and dining bar: café lunches by day, wine and small plates at night (2024–2026 reviews) · lunch plates with salad and bread: steak lunch, hamburg, mixed plate with shrimp tempura and hamburg, chicken nanban with lemon tartare, a weekly special such as Milanese cutlet, seasonal pasta, salmon and cream-cheese focaccia sandwich (2024–2026 reviews) · night: rillettes, pickles, vongole (August 2026) · sweets: cherry pie, fig and caramel pie, a large pudding, brandy cake (2024–2026 reviews) · lemon sour, lemon squash, iced tea (reviews)',
    website: null, gmaps: gm('2eme MAISON 西橋詰町'), menu_url: null,
    notes: '[Café & dining bar · Gojo, antique-styled lunch spot] A dim, antique-filled café three minutes from Kiyomizu-Gojo: hearty lunch plates — steak, hamburg with shrimp tempura, chicken nanban with lemon tartare — then wine, rillettes and vongole at night, with cherry or fig pie any time. Popular, with queues at opening and many visitors from abroad. One diner found lunch with a drink over ¥2,000 a bit much. Dinner bookings only.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Opened 20 July 2022 (Tabelog). Reviewers in 2024–2026 describe a stylish café with an antique, overseas feel and a slightly dim, calming interior, busy at lunch with many customers from abroad, daily and weekly specials that change often, and a cosy night-bar mood after dark.',
      philosophy: null,
      specialty: 'Lunch plates; seasonal pies.',
      anecdotes: [
        { text: 'September 2026: the pudding "had lost its shape," so the staff "kindly offered a scoop of vanilla ice cream as a complimentary treat."', source: R + 'B536664806/' },
        { text: 'An October 2026 diner found two queues at opening — "they were keeping track of the order in which people lined up" — and a set with a drink "over JPY 2000, which seemed a bit much."', source: R + 'B537461401/' },
        { text: 'August 2026: the cold corn-soup pasta was good, but "as I ate, it felt a bit watery and the flavor gradually became lighter."', source: R + 'B481061107/' },
      ],
      japanese_sources_summary: '食べログ: 2eme MAISON (ドゥージィエムメゾン)、カフェ・アジア・エスニック・ダイニングバー、下京区寺町通り五条上る西橋詰町794、清水五条駅から徒歩3分、毎日 11:30〜23:00 (ディナー17:00〜23:00)、予約は17時からのディナーのみ、カード可、電子マネー・QR不可、禁煙、子供可、カウンター席、2022年7月20日オープン。口コミ (2024年2月〜2026年10月、英語): アンティークで海外のような雰囲気、少し暗く落ち着く、ステーキランチ、ハンバーグ、海老天とハンバーグのミックスプレート、チキン南蛮のレモンタルタル、週替わりのミラノ風カツ、季節のパスタ (冷たいコーンスープのパスタ)、サーモンとクリームチーズのフォカッチャサンド、クラムチャウダー、リエット、ピクルス、ボンゴレ、チェリーパイ、無花果とキャラメルのパイ、大きなプリン、ブランデーケーキ、開店前に行列、海外からの客が多い、食べログの電話番号は不通でGoogleマップの番号はつながった (2026年8月)、ドリンク付きで2,000円超は高めという声。',
      confidence: 'medium', sources: [TB, R + 'B481061107/', R + 'B528308676/', R + 'B532823826/', R + 'B533804956/', R + 'B535409707/', R + 'B535570425/', R + 'B535831565/', R + 'B536495568/', R + 'B536664806/', R + 'B537461401/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Many visitors from abroad; dinner bookings only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区寺町通り五条上る西橋詰町794',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.996096, 135.767166); cross-checked: GSI 京都府京都市下京区西橋詰町794番地 (lot) 18m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535570425/', R + 'B536495568/'],
    price_note: 'No prices in the sources beyond "over ¥2,000 with a drink" (October 2026); spend ¥1,000–3,999 (reviews).', last_checked: TODAY, items: [
      it('', '', 'Mixed lunch plate (shrimp tempura, hamburg)', null, 'Lunch', 'no', 'no', 'August–September 2026.', 'mixed_plate'),
      it('', '', 'Chicken nanban with lemon tartare', null, 'Lunch', 'no', 'no', 'September–October 2026.', 'chicken_nanban'),
      it('', '', 'Fig and caramel pie', null, 'Sweets', 'no', 'no', 'September 2026.', 'pie'),
    ] }, {
    cuisine: '少し暗いアンティーク調のカフェ兼ダイニングバー。昼はカフェごはん、夜はワインと小皿 (2024〜2026年の口コミ)・昼はサラダとパン付きのプレート。ステーキランチ、ハンバーグ、海老天とハンバーグのミックスプレート、レモンタルタルのチキン南蛮、週替わりのミラノ風カツ、季節のパスタ、サーモンとクリームチーズのフォカッチャサンド (2024〜2026年の口コミ)・夜はリエット、ピクルス、ボンゴレ (2026年8月)・甘いものはチェリーパイ、無花果とキャラメルのパイ、大きなプリン、ブランデーケーキ (2024〜2026年の口コミ)・レモンサワー、レモンスカッシュ、アイスティー (口コミ)',
    neighborhood: '寺町五条。清水五条駅から徒歩3分',
    gf_detail: 'グルテンフリーではない: パスタ、フォカッチャサンド、海老天、カツ、チキン南蛮、パイ (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: ステーキ、ハンバーグ、鶏、クラムチャウダー、リエット、プリン (口コミ)。',
    notes: '[カフェとダイニングバー・寺町五条、アンティーク調のランチ] 清水五条から3分、アンティークに囲まれた少し暗いカフェ。昼はステーキ、海老天とハンバーグ、レモンタルタルのチキン南蛮などのボリュームのあるプレート、夜はワインとリエットやボンゴレ、いつでもチェリーや無花果のパイ。開店前から並ぶ人気で、海外からの客も多い。ドリンク付きで2,000円超は高めという声も。予約はディナーのみ。',
  });
}

// ================================================================ 点邑
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26026440/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.ten-you.jp';
  const MENU = SITE + '/wp/wp-content/uploads/2026/09/tenyou_meal_menu_jp.pdf';
  const H = day(['11:30', '14:30'], ['17:30', '21:00']);
  put({
    id: 'kyoto_tenyu_tempura', name: '点邑 (Ten’yuu)', category: 'OMNI',
    lat: 35.009446, lng: 135.765681, cuisine_type: 'tempura',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tempura in wheat batter, a tendon, and fresh wheat gluten among the dishes (official menu; 2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: shrimp, conger eel and fish tempura; dashi dipping sauce; seasonal hamo, soft-shell turtle and fugu (official menu; reviews).',
    hours_raw: 'Official site: lunch from 11:30 (last order 13:00), dinner from 17:30 (last order 19:00); closed Tuesday plus two other days a month, listed in its monthly notices (Tabelog: Wednesdays are often irregular closures). Online booking via TableCheck. 22 seats — a 10-seat counter upstairs, private rooms of 4 and 6 (or 8) downstairs; private hire of either floor; corkage ¥3,300; no shorts or tank tops, no strong scent (Tabelog). Children welcome, private rooms suggested. Wheelchair accessible, with a lift (Tabelog; August 2025). Cards; no e-money or QR. Service charge: none — Tabelog’s Japanese original says 「なし」 (the English auto-translation wrongly says one is added). Prices revised in September 2026 (official site). Opened 30 May 1994 (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Fuyamachi, near Tawaraya Ryokan — 5 min walk from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Tempura fried lightly in cottonseed oil, from the people of Tawaraya Ryokan (official site) · lunch, tax included: tempura donburi ¥4,950 (three small dishes, tendon or a tempura plate, fruit); tenshin tempura ¥13,200 (three small dishes, 11 tempura, rice, fruit); kaiseki tempura "Hanamizuki" ¥18,700 (official menu, September 2026) · dinner kaiseki tempura: "Sazanka" ¥22,000 (12 tempura), "Tsubaki" ¥27,500 (four dishes, 12 tempura), "Botan" ¥33,000 (with a seasonal hot pot — hamo shabu, soft-shell turtle or fugu — and 13 tempura); hamo, suppon and fugu on request; boxed meals on set days (official menu) · seen: shrimp and shrimp heads, conger eel and its bones, eel wrapped in shiso, whiting, Kamo eggplant, corn, fuki-no-tou in spring; to finish, tendon, tempura chazuke or rice with chirimen (2025–2026 reviews) · dipping sauce with plenty of grated daikon and kabosu (September 2025)',
    website: SITE, gmaps: gm('点邑 下白山町'), menu_url: MENU,
    notes: '[Tempura · Fuyamachi near Tawaraya Ryokan, the inn’s tempura house] The tempura restaurant of Tawaraya Ryokan, close to the inn on the same street: an alley and garden lead to a ten-seat counter upstairs and private rooms below. Light, cottonseed-oil tempura — conger eel, shrimp, Kamo eggplant — from a ¥4,950 tendon lunch to kaiseki tempura at ¥22,000–33,000 (2026 prices). Two 2025 diners found the counter hectic because tempura for both floors is fried upstairs. No service charge. Closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Head chef not named; run by Tawaraya Ryokan, which its site calls the main house (本店)'], origin: null,
      background: 'Per the official site: Ten’yuu stands close to its main house, Tawaraya Ryokan; it uses Kyoto’s deep plots to make an alley so both the counter and the private rooms look onto their own gardens; it fries in cottonseed oil for a light finish. Its related facilities are Tawaraya Ryokan and Gallery Yukei (ギャラリー遊形). Opened 30 May 1994 (Tabelog). Two August 2025 diners call it a Michelin one-star tempura restaurant.',
      philosophy: null,
      specialty: 'Kaiseki tempura; conger eel tempura.',
      anecdotes: [
        { text: 'October 2025: "I felt a bit rushed as the tempura for both the first and second floors was being fried on the second floor, creating a bustling atmosphere similar to a casual diner."', source: R + 'B515641014/' },
        { text: 'A September 2025 diner drank every drop of the dipping sauce; the owner said there was nothing special in it, but it had plenty of grated daikon and half a kabosu squeezed in.', source: R + 'B514593821/' },
        { text: 'March 2026: a walk-in on a weekday afternoon got fuki-no-tou tempura — "The flavors reminded me of Tawarayasan, with a careful and gentle taste."', source: R + 'B524176182/' },
      ],
      japanese_sources_summary: '公式サイト (ten-you.jp): 点邑 (てんゆう)、本店の俵屋旅館にほど近い麩屋町、京都の奥行きのある土地に路地を設け、カウンターからも個室からも庭を楽しめる、2階にカウンター10席、1階に4人と6人の個室、綿実油であっさり揚げた天ぷら、昼は天ぷらどんぶりやてんぷらコース、夜は懐石てんぷらコース、昼11:30から (L.O. 13:00)、夜17:30から (L.O. 19:00)、火曜休み・月2回の店休日、TableCheckで予約、2026年9月に価格改定、関連施設は俵屋旅館とギャラリー遊形。お品書き (2026年9月、税込): 昼 天ぷらどんぶり4,950円、点心てんぷら13,200円、懐石天ぷら はなみずき18,700円、夜 懐石天ぷら さざんか22,000円、つばき27,500円、ぼたん33,000円 (鱧しゃぶ・丸なべ・てっちりなど季節のお料理)、鱧・すっぽん・ふぐは相談、折詰。食べログ: 天ぷら・日本料理、中京区麩屋町三条上ル下白山町299、22席、個室、持ち込み料3,300円、服装と香りの注意、子供可、車椅子可、カード可、サービス料は原文で「なし」、1994年5月30日オープン。口コミ (2025年8月〜2026年8月、英語): ミシュラン一つ星、俵屋旅館の天ぷら店、穴子、海老と海老の頭、大葉巻きの鰻、鱚、賀茂茄子、とうもろこし、ふきのとう、締めは天丼・天茶・じゃこご飯、大根おろしとかぼすの天つゆ、1階と2階の天ぷらを2階で揚げるので慌ただしいという声 (2件)、外国人客が多い。',
      confidence: 'high', sources: [SITE, MENU, TB, R + 'B512656223/', R + 'B512675061/', R + 'B514593821/', R + 'B515333778/', R + 'B515641014/', R + 'B517330429/', R + 'B521291881/', R + 'B524176182/', R + 'B526239718/', R + 'B534734175/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu on the official site; online booking.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区麩屋町三条上ル下白山町299',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with November 2026 notices; Tabelog reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.009446, 135.765681); cross-checked: GSI 京都府京都市中京区下白山町299番地 (lot) 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'high', sources: [MENU],
    price_note: 'Official menu, September 2026, tax included.', last_checked: TODAY, items: [
      it('天ぷらどんぶり', '', 'Tempura donburi lunch (three small dishes, tendon or tempura plate, fruit)', '¥4,950', 'Lunch', 'no', 'no', 'Official menu.', 'tendon'),
      it('点心てんぷら', '', 'Tenshin tempura lunch (three small dishes, 11 tempura, rice, fruit)', '¥13,200', 'Lunch', 'no', 'no', 'Official menu.', 'tempura_course'),
      it('懐石天ぷら はなみずき', '', 'Kaiseki tempura "Hanamizuki" (lunch)', '¥18,700', 'Lunch', 'no', 'no', 'Official menu.', 'tempura_course'),
      it('懐石天ぷら さざんか', '', 'Kaiseki tempura "Sazanka" (dinner, 12 tempura)', '¥22,000', 'Dinner', 'no', 'no', 'Official menu.', 'tempura_course'),
      it('つばき', '', 'Kaiseki tempura "Tsubaki" (dinner, four dishes, 12 tempura)', '¥27,500', 'Dinner', 'no', 'no', 'Official menu; ¥22,000 in August 2025.', 'tempura_course'),
      it('ぼたん', '', 'Kaiseki tempura "Botan" (dinner, seasonal hot pot, 13 tempura)', '¥33,000', 'Dinner', 'no', 'no', 'Official menu.', 'tempura_course'),
    ] }, {
    cuisine: '俵屋旅館の天ぷら店で、綿実油であっさり揚げる (公式サイト)・昼 (税込): 天ぷらどんぶり4,950円 (点心三品、天丼か盛合せ、水もの)、点心てんぷら13,200円 (点心三品、天ぷら十一品、ごはん、水もの)、懐石天ぷら はなみずき18,700円 (お品書き、2026年9月)・夜の懐石天ぷら: さざんか22,000円 (天ぷら十二品)、つばき27,500円 (お料理四品、天ぷら十二品)、ぼたん33,000円 (鱧しゃぶ・丸なべ・てっちりなど季節のお料理と天ぷら十三品)。鱧・すっぽん・ふぐは相談、折詰の日も (お品書き)・口コミでは海老と海老の頭、穴子と骨、大葉巻きの鰻、鱚、賀茂茄子、とうもろこし、春のふきのとう。締めは天丼、天茶、じゃこご飯 (2025〜2026年)・大根おろしたっぷりにかぼすを搾った天つゆ (2025年9月)',
    neighborhood: '麩屋町三条、俵屋旅館の近く。京都市役所前駅から徒歩5分',
    gf_detail: 'グルテンフリーではない: 小麦の衣の天ぷら、天丼、生麩も (お品書き、2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 海老、穴子、魚の天ぷら、出汁の天つゆ、季節の鱧・すっぽん・ふぐ (お品書き、口コミ)。',
    notes: '[天ぷら・麩屋町、俵屋旅館の天ぷら処] 麩屋町の俵屋旅館のすぐ近くにある、旅館の天ぷら店。路地と庭を抜けると2階に10席のカウンター、1階に個室。綿実油の軽い天ぷら (穴子、海老、賀茂茄子など) を、4,950円の天丼の昼から22,000〜33,000円の懐石天ぷらまで (2026年の価格)。2025年には、両方の階の天ぷらを2階で揚げるのでカウンターが慌ただしいという声が2件。サービス料なし。火曜休み。',
  });
}

save();
