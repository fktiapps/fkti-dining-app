// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 38.
//   + mati (bread and natural-wine bar near Kawabata-Marutamachi)
//   + EL BOGAVANTE 346 (Spanish gastrobar on Sanjo-Nishinotoin; paella, tapas, Spanish wines)
//   + 六盛 Rokusei (Okazaki Kyoto-cuisine house since 1899, known for the teoke bento)
//   + 京豆冨 不二乃 Kyoto Tofu Fujino (tofu restaurant of the tofu maker 京とうふ藤野, JR Kyoto Isetan 11F)
//   - ニューすしセンター 京都ポルタ (26037326): skipped (reason below).
//   Picked on 2026-11-06: from `queue.mjs kyoto-missed next core 200`, lane ids 26039852, 26007458; from `next notable
//   200`: 26037326 (skipped), 26002316, 26000864. None is in data/kyoto.json by name (mati, ボガバンテ/Bogavante,
//   六盛/Rokusei, 不二乃/Fujino) or address (聖護院東寺領町8-1, 塩屋町53, 岡崎西天王町71, 東塩小路町901 伊勢丹 11F).
//   Same-name count (same brand or operator only): mati, EL BOGAVANTE 346 (invoice holder 株式会社カナルトレス, NTA
//   register), 六盛 — one shop each in the sources opened. 不二乃 — the restaurant of 京とうふ藤野株式会社 (official site), a Kyoto tofu maker
//   with four Tabelog Kyoto listings (本店 一服処, 本店/TOFU CAFE FUJINO, 伊勢丹店, this restaurant); not on the large-parent list
//   and under the 8-shop line, so drafted as a sister concept and flagged. Large-parent list checked.
//   Service charges, checked against Tabelog's Japanese original: 六盛 サービス料１０％ 個室利用・貸切の場合は１５％.
//   Others none listed. Halal: no operator in this batch claims halal.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-38');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26037326', 'ニューすしセンター 京都ポルタ: a branch of a chain — a Tabelog name search (2026-11-06) lists seven ニューすしセンター shops in Kyoto and Osaka (Kyoto Porta, Kiyamachi, Shinsaibashi Parco, Ura-Namba, Umeda, Doyama, Nishikujo, per the Tabelog English names)');

// ================================================================ mati
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26039852/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '19:00']);
  put({
    id: 'kyoto_mati_shogoin', name: 'mati', category: 'OMNI',
    lat: 35.015356, lng: 135.773417, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a bakery wine bar — croissants, focaccia, bread plates, bruschetta, open sandwiches (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Vegetable appetizers, a burdock salad and plain breads appear alongside pâté, ham, fish and butter pastries; ingredients are not described (2026 reviews).',
    hours_raw: 'Monday, Tuesday, Saturday and Sunday 12:00–19:00; Friday 16:00–21:00; closed Wednesday and Thursday (Tabelog; hours may change). No reservations (Tabelog). Cards, e-money and PayPay (Tabelog). 7 table seats plus a standing area — a counter and three tables, with standing space up a steep stair on the second floor (Tabelog; March and June 2026). Bread on wooden shelves to eat in or buy (March and May 2026). Near Kawabata-Marutamachi, about 330 m from Jingu-Marutamachi Stn (Tabelog; August 2026).',
    hours: { 0: H, 1: H, 4: day(['16:00', '21:00']), 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shogoin near Kawabata-Marutamachi — 4 min from Jingu-Marutamachi Stn',
    cuisine: 'Bread and wine — bakers make the next day’s bread in front of you (August 2026) · croissant ¥500, focaccia ¥450, chilled eggplant potage ¥800 (July 2026) · open sandwich of the day’s fish (katsuo with okra, myoga and dried sardine sauce) ¥1,400 (July 2026) · appetizer bread plate, vegetable appetizers, meat-miso bread, burdock salad, firefly squid (March and August 2026) · sea bream bruschetta (May 2026) · pâté, homemade roast ham, prosciutto (2026) · natural wines by the glass from ¥1,200, orange and rosé wines, Heartland beer (2026)',
    website: null, gmaps: gm('mati 京都 聖護院 パン ワイン'), menu_url: null,
    notes: '[Bread and wine · Shogoin near Kawabata-Marutamachi] A small bakery-bar off the main street where you drink natural wine with bread baked on site — flaky croissants, focaccia, an open sandwich of the day’s fish, bruschetta piled with sea bream — plus pâté and roast ham. A few tables and a standing area upstairs; afternoons from noon, Friday evenings. Some find it pricey.',
    chef_bio: { chef_name: null, roles: ['Bakers and staff (unnamed)'], origin: null,
      background: 'An August 2026 regular chatted with the staff, “skilled bakers making bread for the next day right in front of me”. A June 2026 visitor found the bread decent but the prices high, and was bothered by guests passing the second-floor standing area on the way to the third floor.',
      philosophy: null, specialty: 'Croissants; bread with natural wine.',
      anecdotes: [
        { text: 'A July 2026 regular on a seventh visit had the day’s katsuo open sandwich with a Dennis Wolf white.', source: R + 'B518383983/' },
        { text: 'A July 2026 visitor, turned away by crowds at Kibune, found the bar on a search for somewhere to drink nearby.', source: R + 'B532540460/' },
      ],
      japanese_sources_summary: '食べログ: mati、パン・ワインバー、左京区聖護院東寺領町8-1、神宮丸太町駅から327m、月・火・土・日 12:00〜19:00、金 16:00〜21:00、水・木定休、予約不可、カード・電子マネー・PayPay可、テーブル7席とスタンディング。口コミ (2023〜2026年、英語): パンとワインの店、目の前で翌日のパンを焼く、クロワッサン500円、フォカッチャ450円、魚のオープンサンド1,400円、鯛のブルスケッタ、パテ、自家製ローストハム、ナチュールワインのグラス1,200円から、2階のスタンディングは急な階段、価格は高めとの声も。',
      confidence: 'medium', sources: [TB, R + 'B471606826/', R + 'B518383983/', R + 'B524232664/', R + 'B524778279/', R + 'B529420276/', R + 'B532540460/', R + 'B532765891/', R + 'B532808171/', R + 'B534059271/', R + 'B534650027/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small bar; order bread from the shelves; staff attentive (July 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市左京区聖護院東寺領町8-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.015356, 135.773417); GSI matched only the town (聖護院東寺領町, centroid 56m away) and OpenStreetMap has no node for the shop, so the pin is marked approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532765891/', R + 'B518383983/'],
    price_note: 'Prices from July 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Croissant', '¥500', 'Bread', 'no', 'no', 'July 2026.', 'croissant'),
      it('', '', 'Focaccia', '¥450', 'Bread', 'no', 'ask', 'July 2026.', 'focaccia'),
      it('', '', 'Open sandwich of the day’s fish', '¥1,400', 'Plates', 'no', 'no', 'July 2026.', 'open_sandwich'),
      it('', '', 'Natural wine by the glass, from', '¥1,200', 'Drinks', '', '', 'July 2026.', 'glass_wine'),
    ] }, {
    cuisine: 'パンとワイン。目の前で翌日のパンを焼く (2026年8月)・クロワッサン500円、フォカッチャ450円、冷たい茄子のポタージュ800円 (2026年7月)・その日の魚のオープンサンド (鰹にオクラ、茗荷、煮干しのソース) 1,400円 (2026年7月)・前菜のパン盛り、野菜の前菜、肉味噌のパン、ごぼうのサラダ、ほたるいか (2026年3月、8月)・鯛のブルスケッタ (2026年5月)・パテ、自家製ローストハム、生ハム (2026年)・ナチュールワインのグラス1,200円から、オレンジやロゼ、ハートランドビール (2026年)',
    neighborhood: '川端丸太町近くの聖護院。神宮丸太町駅から徒歩4分',
    gf_detail: 'グルテンフリーではない。パンのワインバー。クロワッサン、フォカッチャ、パン盛り、ブルスケッタ、オープンサンド (2026年の口コミ)。',
    vegan_detail: '要確認。野菜の前菜、ごぼうのサラダ、プレーンなパンもあるが、パテ、ハム、魚、バターのパンも多く、材料は書かれていない (2026年の口コミ)。',
    notes: '[パンとワイン・川端丸太町近くの聖護院] 大通りから少し入った小さなパンのワインバー。店で焼くパン (さくさくのクロワッサン、フォカッチャ、魚のオープンサンド、鯛たっぷりのブルスケッタ) とナチュールワイン、パテやローストハムも。テーブル数席と2階のスタンディング。昼から、金曜は夕方から。高めとの声も。',
  });
}

// ================================================================ EL BOGAVANTE 346
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26007458/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.elbogavante346.com';
  const H = day(['12:00', '15:00'], ['17:30', '22:00']);
  put({
    id: 'kyoto_el_bogavante_346', name: 'EL BOGAVANTE 346 (エル・ボガバンテ346)', category: 'OMNI',
    lat: 35.008498, lng: 135.754889, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tabelog lists gluten-free options, but no dish is named; paella (rice) is the specialty, alongside ajillo with bread, croquettes and other tapas (Tabelog; 2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options; alioli potatoes and vegetable dishes appear, but stocks for paella are seafood-based (Tabelog; 2025–2026 reviews).',
    hours_raw: 'Lunch 12:00–15:00 (last entry 14:00; food L.O. 14:00), dinner 17:30–22:00 (last entry 21:00; food L.O. 21:00); closed Wednesday, with summer and winter breaks (Tabelog). Take-away: order by the day before, 11:00–20:30; pickup 12:00–15:00 and 17:30–21:00 (Tabelog). Reservations accepted; fills quickly (April 2025); paella takes about 30 minutes (April 2025). Cards, IC, e-money and QR (Tabelog). 24 seats with counter, a semi-private room for 8 and a terrace; smoking only on the terrace; pets on the terrace in a cart (Tabelog). Children of primary-school age at dinner; preschoolers also welcome at lunch (Tabelog). Wheelchair accessible; free Wi-Fi; sommelier (Tabelog). On Sanjo just west of Nishinotoin, 10 min from Karasuma Oike Stn exit 6 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sanjo-dori just west of Nishinotoin — 10 min from Karasuma Oike Stn',
    cuisine: 'Spanish gastrobar, “restaurant-quality tapas” and mains by a chef trained in Barcelona, with Spanish ingredients and morning-market produce (Tabelog shop text); the site calls itself a Spanish-government-recognised quality Spanish restaurant (official site title) · paella: lobster, squid ink, kinmedai seafood, mixed; squid-ink paella lunch ¥2,530 in an individual pan with Spanish omelette (2025–2026 reviews) · paella lunch with Spanish omelette, croquettes and salad (February 2026) · course ¥4,800 with ajillo and paella (April 2025) · assorted tapas of about seven kinds, grilled firefly squid, alioli potatoes, lobster croquettes, Hungarian duck confit, Spanish cured-ham tasting (2025–2026) · crème brûlée caramelised at the table (May 2026) · nine Spanish wines by the glass, 50-plus bottles; white wine ¥1,100; cider (Tabelog; 2025)',
    website: SITE, gmaps: gm('EL BOGAVANTE 346 京都 三条西洞院'), menu_url: null,
    notes: '[Spanish · Sanjo-Nishinotoin, paella and tapas] A bright Spanish gastrobar with a counter, a semi-private room and a terrace, where a Barcelona-trained chef turns out paella in individual pans — squid ink, lobster, kinmedai seafood — plus ajillo, croquettes, cured ham and a tableside crème brûlée, with a sommelier’s list of Spanish wines. Paella lunches from about ¥2,500; dinner course ¥4,800. Book ahead; closed Wednesdays.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed), trained in Barcelona', 'Sommelier (unnamed)'], origin: null,
      background: 'Tabelog’s shop text: dishes by a chef trained in Barcelona, Spain, and a sommelier-selected list of Spanish wines. The official site’s title reads 「スペイン政府公認優良スペインレストラン」. Invoice T1130001034702 is registered to 株式会社カナルトレス (NTA register). A February 2026 diner returned after several decades away.',
      philosophy: '“Restaurant-quality tapas” (Tabelog shop text).', specialty: 'Paella; tapas.',
      anecdotes: [
        { text: 'An April 2025 diner was told the paella would take about 30 minutes, so ordered it first.', source: R + 'B505700236/' },
        { text: 'A May 2026 guest watched the crème brûlée, hiding fruit and ice cream, caramelised at the table.', source: R + 'B531797554/' },
      ],
      japanese_sources_summary: '公式サイト: EL BOGAVANTE 346、スペイン政府公認優良スペインレストラン。食べログ: スペイン料理・ワインバー・バル、中京区塩屋町53 オリザ三条西洞院1F、烏丸御池駅6番出口から徒歩10分、昼12:00〜15:00 (最終入店14:00)、夜17:30〜22:00 (最終入店21:00)、水曜定休 (夏季・冬季休業あり)、テイクアウトは前日までに注文、予約可、カード・電子マネー・QR可、24席 (テラス、半個室8名)、テラスのみ喫煙可、ペットはテラス席のみ、夜は小学生以上、昼は未就学児も可、ベジタリアン・グルテンフリー対応ありとの表示、ソムリエ、適格請求書 T1130001034702 (株式会社カナルトレス)。店の紹介: バルセロナで修業したシェフのタパスとメイン、スペインの食材と朝市の旬の食材、ソムリエが選ぶスペインワインのグラス9種、ボトル50種以上。口コミ (2025〜2026年、英語): パエリア (オマール、イカ墨、金目鯛)、イカ墨パエリアのランチ2,530円、4,800円のコース、アヒージョ、生ハム、目の前で仕上げるクレームブリュレ。',
      confidence: 'medium', sources: [SITE, TB, 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=1130001034702', R + 'B505700236/', R + 'B507438988/', R + 'B507914759/', R + 'B511220625/', R + 'B512549427/', R + 'B521803843/', R + 'B524118416/', R + 'B525294921/', R + 'B531797554/', R + 'B535877685/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter seats suit solo diners (September 2026); children of primary-school age at dinner, younger at lunch.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区塩屋町53 オリザ三条西洞院 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.008498, 135.754889); cross-checked: GSI 京都府京都市中京区塩屋町53番地 (lot) 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535877685/', R + 'B507438988/'],
    price_note: 'Prices from April 2025 to September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Squid-ink paella lunch (with Spanish omelette)', '¥2,530', 'Lunch', 'ask', 'no', 'September 2026.', 'squid_paella_lunch'),
      it('', '', 'Dinner course with ajillo and paella', '¥4,800', 'Courses', 'ask', 'no', 'April 2025.', 'course'),
      it('', '', 'Lobster paella', '', 'Paella', 'ask', 'no', 'March 2026.', 'lobster_paella'),
      it('', '', 'Glass of white wine', '¥1,100', 'Drinks', '', '', 'June 2025.', 'glass_white'),
    ] }, {
    cuisine: 'スペインのガストロバル。バルセロナで修業したシェフの「レストラン品質のタパス」とメイン、スペインの食材と朝市の旬の食材 (食べログの店の紹介)。公式サイトはスペイン政府公認優良スペインレストランと名乗る・パエリア: オマール、イカ墨、金目鯛の魚介、ミックス。1人用の鍋のイカ墨パエリアのランチ2,530円、スペインオムレツ付き (2025〜2026年の口コミ)・スペインオムレツ、コロッケ、サラダのパエリアランチ (2026年2月)・アヒージョとパエリアの4,800円のコース (2025年4月)・7種ほどのタパス盛り、ほたるいかのグリル、アリオリポテト、オマールのコロッケ、ハンガリー産鴨のコンフィ、スペインの生ハムの食べ比べ (2025〜2026年)・目の前でキャラメリゼするクレームブリュレ (2026年5月)・スペインワインのグラス9種、ボトル50種以上、白ワイン1,100円、シードラ (食べログ、2025年)',
    neighborhood: '西洞院のすぐ西の三条通。烏丸御池駅から徒歩10分',
    gf_detail: '要確認。食べログにはグルテンフリー対応とあるが具体的な料理は書かれていない。看板はパエリア (米)、ほかにパンを添えたアヒージョ、コロッケなどのタパス (食べログ、2025〜2026年の口コミ)。',
    vegan_detail: '要確認。食べログにはベジタリアン対応とあり、アリオリポテトや野菜の皿もあるが、パエリアのスープは魚介 (食べログ、2025〜2026年の口コミ)。',
    notes: '[スペイン料理・三条西洞院、パエリアとタパス] カウンター、半個室、テラスのある明るいスペインのガストロバル。バルセロナで修業したシェフが1人用の鍋でパエリア (イカ墨、オマール、金目鯛) を炊き、アヒージョ、コロッケ、生ハム、目の前で仕上げるクレームブリュレも。ソムリエが選ぶスペインワイン。パエリアのランチは約2,500円から、夜のコースは4,800円。予約がおすすめ、水曜休み。',
  });
}

// ================================================================ 六盛
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26002316/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.rokusei.co.jp';
  const H = day(['11:30', '14:00'], ['17:00', '21:00']);
  put({
    id: 'kyoto_rokusei_okazaki', name: '六盛 (Rokusei)', category: 'OMNI',
    lat: 35.015792, lng: 135.779597, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Seasonal Kyoto cuisine — the teoke bento of many small dishes, sashimi, dobin-mushi, hamo, eel rice, Omi beef; soy sauce and dashi throughout; no gluten information (official site; 2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi-based Kyoto cuisine with fish and beef (2024–2026 reviews).',
    hours_raw: 'Lunch 11:30–14:00 (arrive by 14:00); dinner 17:00–21:00 by reservation only (arrive by 18:00); Soufflé & Café 茶庭 14:00–18:00 (L.O. 17:00); closed Mondays (open on holidays) and some Wednesdays (Tabelog; official site). November 2026: closed 2, 9, 16 and 30 November; lunch only on 24 November; evenings may be cancelled, so always book (official site). Reservations by phone or TableCheck (official site). Service charge 10%, 15% for private rooms and exclusive use (Tabelog, original サービス料１０％ 個室利用・貸切の場合は１５％); private rooms from the “Hana” course ¥10,120 (old wing) or “Chokyu” ¥12,650 (new wing), tax and service included (Tabelog). Cards (VISA, Master, JCB, Diners, UnionPay); no e-money or QR (Tabelog). 250 seats: counter, tatami and sunken seating, five private rooms, two banquet halls and a wedding venue (Tabelog). Seven parking spaces, first come, height 1.9 m (official site). English menu; children’s meals from ¥1,100, baby beds and chairs (Tabelog). Non-smoking, smoking area outside (Tabelog). West of Heian Shrine north of the Biwa canal, 10 min from Higashiyama Stn (Tabelog; October 2026). Founded 1899 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Okazaki, west of Heian Shrine — 10 min from Higashiyama Stn',
    cuisine: 'Kyoto cuisine famous for the teoke bento — seasonal dishes in a wooden tub of aged Kiso cedar, made by the Living National Treasure Kiyoshi Nakagawa (Tabelog shop text; official site) · November 2026 “momiji” course ¥8,800, tax included, service extra (official site) · Shichi-Go-San children’s celebration tray ¥3,850 (official site) · teoke bento with seasonal vegetables, hamo in summer and eel rice (July 2026) · teoke bento with added sashimi and Omi beef (October 2026) · limited SixTONES course ¥6,600: teoke bento, matsutake and hamo dobin-mushi, magnolia-leaf grill (October 2026) · private-room kaiseki; osechi “Miyabi” ¥64,800 and “Heian” ¥43,200 (official site) · Soufflé & Café 茶庭 in the afternoon (Tabelog; official site)',
    website: SITE, gmaps: gm('六盛 京都 岡崎'), menu_url: SITE + '/?men=3',
    notes: '[Kyoto cuisine · Okazaki by Heian Shrine, since 1899] A large old Kyoto restaurant west of Heian Shrine, known for its teoke bento — a cedar tub of seasonal small dishes, the tubs made by a Living National Treasure — at lunch (about ¥4,000–6,000), with kaiseki in private rooms, a soufflé café in the afternoon, and dinner by reservation only. A favourite before or after the KYOCERA Museum or a shrine visit. 10% service charge.',
    chef_bio: { chef_name: null, roles: ['Kitchen (unnamed)'], origin: null,
      background: 'Tabelog’s shop note gives the founding year as 1899 and calls the teoke tubs the work of the Living National Treasure Kiyoshi Nakagawa, of Kiso cedar aged several years. The official site trademarks 「手をけ弁当」. A limited course was offered in October 2026 in connection with the group SixTONES, and an October 2026 guest was seated in a room the group had used.',
      philosophy: null, specialty: 'Teoke bento.',
      anecdotes: [
        { text: 'An October 2026 driver arrived before 11:00 for the first-come parking and found staff guiding cars in.', source: R + 'B537268709/' },
        { text: 'A July 2026 couple on a tour watched the Gion Festival from an air-conditioned room on the same tour itinerary that included lunch here.', source: R + 'B533057761/' },
      ],
      japanese_sources_summary: '公式サイト: 京料理 手をけ弁当 六盛 (ろくせい)、十一月限定もみじコース8,800円 (税込サ別)、七五三祝膳3,850円、おせち「雅」64,800円・「平安」43,200円、11月の休み (2日、9日、16日、30日)、24日は昼のみ、夜は予約のみ、駐車場7台 (予約不可)、個室は会席料理で案内、スフレ＆カフェコーナー茶庭。食べログ: 日本料理、左京区岡崎西天王町71、東山駅から徒歩10分、昼11:30〜14:00、夜17:00〜21:00 (夜は予約のみ)、茶庭14:00〜18:00、月曜 (祝日は営業) と不定の水曜休み、サービス料10% (個室・貸切は15%)、カード可、250席、英語メニュー、子ども料理1,100円から、1899年創業。店の紹介: 人間国宝 Kiyoshi Nakagawa による、数年寝かせた Kiso の木の手桶に季節の京料理を盛る「手をけ弁当」。口コミ (2024〜2026年、英語): 手をけ弁当、鱧、鰻ご飯、近江牛、SixTONES の限定コース6,600円。',
      confidence: 'medium', sources: [SITE, SITE + '/?men=2', TB, R + 'B479930783/', R + 'B532243687/', R + 'B533057761/', R + 'B537268709/', R + 'B537290520/', R + 'B537298352/', R + 'B537787129/', R + 'B537931718/', R + 'B538095265/', R + 'B538570106/'] },
    cultural_comfort: { level: 'english', note: 'English menu and an English page (Tabelog; official site); large, family-friendly restaurant; dinner by reservation only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区岡崎西天王町71',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with November 2026 notices; Tabelog reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.015792, 135.779597); cross-checked: GSI 京都府京都市左京区岡崎西天王町71番地 (lot) 26m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE + '/?men=2', R + 'B538095265/'],
    price_note: 'Official site prices (tax included, service extra) read 2026-11-06; SixTONES course from an October 2026 review.', last_checked: TODAY, items: [
      it('もみじコース', '', 'November “momiji” course', '¥8,800', 'Courses', 'ask', 'no', 'Official site, 1–29 November 2026; service extra.', 'momiji_course'),
      it('手をけ弁当', '', 'Teoke bento', '', 'Lunch', 'ask', 'no', '2024–2026 reviews; price not given.', 'teoke_bento'),
      it('七五三祝膳', '', 'Shichi-Go-San children’s tray', '¥3,850', 'Children', 'ask', 'no', 'Official site.', 'shichigosan'),
      it('', '', 'Children’s meal, from', '¥1,100', 'Children', 'ask', 'no', 'Tabelog; service charge extra.', 'kids_meal'),
    ] }, {
    cuisine: '「手をけ弁当」で知られる京料理。人間国宝の手による、数年寝かせた Kiso の木の手桶に季節の料理を盛る (食べログの店の紹介、公式サイト)・十一月限定もみじコース8,800円 (税込サ別) (公式サイト)・七五三祝膳3,850円 (公式サイト)・夏は鱧と鰻ご飯の手をけ弁当 (2026年7月)・造りと近江牛を加えた手をけ弁当 (2026年10月)・SixTONES の限定コース6,600円: 手をけ弁当、松茸と鱧の土瓶蒸し、朴葉焼き (2026年10月)・個室の会席、おせち「雅」64,800円、「平安」43,200円 (公式サイト)・午後はスフレ＆カフェ 茶庭 (食べログ、公式サイト)',
    neighborhood: '岡崎、平安神宮の西。東山駅から徒歩10分',
    gf_detail: '要確認。季節の京料理。手をけ弁当の小鉢、造り、土瓶蒸し、鱧、鰻ご飯、近江牛。醤油と出汁を全体に使う。グルテンの情報はない (公式サイト、2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。出汁の京料理、魚と牛肉 (2024〜2026年の口コミ)。',
    notes: '[京料理・平安神宮近くの岡崎、1899年から] 平安神宮の西の大きな老舗の京料理。人間国宝の手桶に季節の小鉢を詰めた「手をけ弁当」が昼の名物 (4,000〜6,000円ほど)。個室の会席、午後はスフレのカフェ、夜は予約のみ。京セラ美術館や神社参りの前後にも。サービス料10%。',
  });
}

// ================================================================ 京豆冨 不二乃
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26000864/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.kyotofu.co.jp/';
  const H = day(['11:00', '22:00']);
  put({
    id: 'kyoto_kyotofu_fujino_isetan', name: '京豆冨 不二乃 (Kyoto Tofu Fujino)', category: 'OMNI',
    lat: 34.985863, lng: 135.757571, cuisine_type: 'tofu',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tofu dishes — oboro tofu, yudofu, kuzu tofu, sesame tofu, yuba sashimi — are eaten with soy-based sauces and dashi; agedashi tofu, nama-fu dengaku and a soy-milk baumkuchen contain wheat (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Mostly tofu, yuba and vegetables, but broths and sauces are not described and dashi is likely; the sets include pickles and seasoned rice (2026 reviews).',
    hours_raw: '11:00–22:00 (L.O. 21:15); closures follow JR Kyoto Isetan (Tabelog). Reservations accepted, but not for the same day (Tabelog); walk-ins take a numbered ticket, with waits of 15–30 minutes at lunch (July–October 2026). Cards and QR codes; no e-money (Tabelog). 52 seats at tables, window seats with a view of the city; non-smoking; wheelchair accessible (Tabelog; 2026 reviews). Fujino tofu is also sold on Isetan B2F (July 2026). JR Kyoto Isetan 11F, directly connected to Kyoto Station (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kyoto Station, JR Kyoto Isetan 11F',
    cuisine: 'Tofu restaurant of the Kitano tofu maker 京とうふ藤野, which uses only Japanese soybeans (official site) · Fujino colourful gozen: oboro tofu with free refills, kuzu tofu, agedashi tofu, simmered aburaage with seasonal vegetables, ginger and aburaage rice, soup, pickles, soy-milk baumkuchen and black-bean coffee (September–October 2026) · three courses at lunch, including all-you-can-eat oboro tofu or yudofu; eight dishes from appetizers to dessert (July 2026) · evening “enjoyment set” with warm oboro tofu, fried tofu and dengaku, seasonal rice to finish (September 2026) · à la carte yuba sashimi, kuzu tofu, sesame tofu, nama-fu dengaku (2026) · lunch about ¥2,970 with dessert (October 2026)',
    website: SITE, gmaps: gm('京豆冨 不二乃 京都伊勢丹'), menu_url: null,
    notes: '[Tofu · Kyoto Station, Isetan 11F] The restaurant of the Kitano tofu maker Fujino, on Isetan’s restaurant floor with window views over Kyoto: tofu sets built around warm oboro tofu you can refill, with kuzu tofu, agedashi, yuba and a ginger-aburaage rice, about ¥3,000 at lunch, plus yudofu courses. Take a numbered ticket at lunch; no same-day bookings. Fujino tofu to take home is sold on B2F.',
    chef_bio: { chef_name: null, roles: ['Operated by 京とうふ藤野株式会社 (official site)'], origin: null,
      background: 'The Tabelog listing links to the site of 京とうふ藤野株式会社, a tofu maker in Kitano, Kyoto, that makes its tofu from 100% Japanese soybeans. A Tabelog Kyoto name search shows the company’s other listings: the main shop’s tea corner and TOFU CAFE FUJINO, and a counter at JR Kyoto Isetan. A September 2026 guest returned for dinner after about 25 years.',
      philosophy: 'Only domestic soybeans, 100% (official site).', specialty: 'Oboro tofu; yudofu.',
      anecdotes: [
        { text: 'A July 2026 diner asked for a second helping of the warm oboro tofu.', source: R + 'B531740500/' },
        { text: 'An October 2026 visitor took a number 20 minutes before opening and still missed the window seats.', source: R + 'B537603829/' },
      ],
      japanese_sources_summary: '京とうふ藤野株式会社の公式サイト: 京都・北野のお豆腐屋さん、国産大豆100%。食べログ: 京豆冨 不二乃、豆腐料理・日本料理、下京区烏丸通塩小路下る東塩小路町901 ジェイアール京都伊勢丹11F、11:00〜22:00 (L.O.21:15)、伊勢丹に準じ不定休、予約可 (当日予約は不可)、カード・QR可、52席、禁煙、車椅子可。口コミ (2026年、英語): おかわりできるおぼろ豆腐、葛豆腐、揚げ出し、ごま豆腐、湯葉の刺身、生麩田楽、しょうがと油揚げのご飯、豆乳バウム、黒豆コーヒー、昼のコース3種、昼は整理券で15〜30分待ち、窓際の席から京都の眺め、地下2階で豆腐を販売。',
      confidence: 'medium', sources: [TB, SITE, R + 'B513687640/', R + 'B531740500/', R + 'B532014686/', R + 'B532982566/', R + 'B533738377/', R + 'B534391647/', R + 'B535791583/', R + 'B537603829/', R + 'B537658952/', R + 'B537848166/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Department-store restaurant by the station; numbered tickets at lunch; no same-day bookings.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区烏丸通塩小路下る東塩小路町901 ジェイアール京都伊勢丹 11F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.985863, 135.757571); cross-checked: GSI 京都府京都市下京区東塩小路町901番地 (lot) 82m — the station building lot; 75m from kyoto_kokekokko_isetan (10F); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537848166/', R + 'B537658952/'],
    price_note: 'One price from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Fujino colourful gozen (oboro tofu refills)', '', 'Lunch', 'no', 'ask', 'September–October 2026.', 'irodori_gozen'),
      it('', '', 'Lunch with dessert', '¥2,970', 'Lunch', 'ask', 'ask', 'October 2026.', 'lunch'),
      it('', '', 'Yuba sashimi', '', 'À la carte', 'ask', 'ask', 'July 2026.', 'yuba_sashimi'),
    ] }, {
    cuisine: '国産大豆だけを使う北野の豆腐店、京とうふ藤野の店 (公式サイト)・不二乃の彩り御膳: おかわりできるおぼろ豆腐、葛豆腐、揚げ出し豆腐、季節の揚げと野菜の炊いたん、しょうがと油揚げのご飯、汁物、漬物、豆乳のバウムクーヘン、黒豆コーヒー (2026年9〜10月)・昼はおぼろ豆腐や湯豆腐が食べ放題のコースなど3種、前菜から甘味まで8品 (2026年7月)・夜は温かいおぼろ豆腐、揚げ、田楽、季節のご飯の締め (2026年9月)・一品で湯葉の刺身、葛豆腐、ごま豆腐、生麩田楽 (2026年)・昼は甘味付きで約2,970円 (2026年10月)',
    neighborhood: '京都駅、ジェイアール京都伊勢丹11F',
    gf_detail: '要確認。おぼろ豆腐、湯豆腐、葛豆腐、ごま豆腐、湯葉の刺身は醤油のたれや出汁で食べる。揚げ出し豆腐、生麩田楽、豆乳バウムは小麦を含む (2026年の口コミ)。',
    vegan_detail: '要確認。豆腐、湯葉、野菜が中心だが、出汁やたれの中身は書かれておらず、出汁を使う可能性が高い。セットには漬物と味付けご飯 (2026年の口コミ)。',
    notes: '[豆腐料理・京都駅、伊勢丹11F] 北野の豆腐店・藤野の料理店。伊勢丹のレストラン街で、窓から京都の街が見える。おかわりできる温かいおぼろ豆腐を中心に、葛豆腐、揚げ出し、湯葉、しょうがと油揚げのご飯の御膳で昼は約3,000円、湯豆腐のコースも。昼は整理券、当日予約は不可。地下2階で豆腐も買える。',
  });
}

save();
