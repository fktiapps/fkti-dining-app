// Osaka sweep (2-mile circle around Dotonbori), batch 176 — mom phase (≤20 seats, 30+ reviews, nearest-first).
//   + J BOWL 心斎橋店 (açaí bowls and Greek yogurt; Higashi-Shinsaibashi)
//   + ROCO (small wood-fired pizza bar; Higashi-Shinsaibashi 1-17 cluster)
//   + 鮨 けやき 心斎橋 (8-seat Edomae sushi counter, Bamboo Alley 2F; Nishi-Shinsaibashi)
//   + 鉄板dining 葉 -you- (teppan and okonomiyaki, vegan options listed; Bamboo Alley 1F) — mom
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-29';
const { put, skip, save } = openCitySweep('osaka', TODAY, 176);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ J BOWL 心斎橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27153343/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://acai.jbowl.info/acai/';
  put({
    id: 'osaka_j_bowl_shinsaibashi', name: 'J BOWL 心斎橋店 (J BOWL Shinsaibashi ten)', category: 'OMNI',
    lat: 34.673592, lng: 135.502699, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Bowls can be topped with granola (May 2026); no gluten information otherwise.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegan options; açaí bowls come with fruit and honey or yogurt, so check the base and toppings.',
    hours_raw: 'Tabelog lists Monday 19:00–23:00 and Tue–Sun and holidays 19:00–04:00, with irregular closures, yet reviews describe lunch visits and the listing says seating changes between lunch and dinner, so check before going. One diner arrived at 22:45 for a booking to find it closing and was given takeout (August 2026). Cards, e-money and QR accepted (Tabelog). Designated smoking area (Tabelog). Children and pets welcome; takeout and delivery (Tabelog).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 1-18-14, Midou Shinsaibashi Bldg 1F — 2 min from Shinsaibashi Stn exit 5',
    cuisine: 'Açaí bowl and Greek yogurt shop (14 seats; counter and sofa tables) · thick açaí bowls with fruit and honey, about ¥1,680 · build-your-own toppings: honey, granola, kiwi, coconut, nuts, pineapple, mango · nuts bowl · mini orange and lemon bowls · Greek yogurt with comb honey · hojicha float · peach tea',
    website: OWN, gmaps: gm('J BOWL 心斎橋店'), menu_url: null,
    notes: "[Café · thick açaí bowls and Greek yogurt in a bar-like room, Shinsaibashi] A small açaí-bowl and Greek-yogurt shop near Shinsaibashi Station with a dim, bar-like room and plush sofas. The açaí is thick and creamy, piled with fruit and honey, and you can build your own with granola, kiwi, coconut, nuts or mango; the Greek yogurt with comb honey is rich and filling. Bowls run about ¥1,680, which diners call a little pricey. Two diners called it the best açaí bowl ever, but one found a smaller, unripe-mango bowl on a return visit. Tabelog lists vegan options. Hours are unclear (the listing shows evenings to 4 am, reviewers came at lunch), so check before you go.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Açaí and Greek-yogurt shop (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Açaí bowls; Greek yogurt with comb honey.',
      anecdotes: [
        { text: '"…the acai was thick and creamy, loaded with fruits, and generously drizzled with honey! The interior had a bar-like atmosphere… we could relax comfortably on the plush sofas." — June 2026, about ¥1,680.', source: R + 'B530545457/' },
        { text: '"I ordered the Greek yogurt with comb honey. The yogurt was quite rich and filling." — April 2026.', source: R + 'B525549257/' },
      ],
      japanese_sources_summary: '食べログ: J BOWL 心斎橋店、大阪市中央区東心斎橋1-18-14 ミドウ心斎橋ビル 1F、心斎橋駅5番出口から徒歩2分、月19:00〜23:00、火〜日・祝19:00〜翌4:00、不定休、アサイーボウルとギリシャヨーグルトの店、昼と夜で席の配置が変わる、14席、カード・電子マネー・QR可、分煙、子ども・ペット歓迎、テイクアウト・デリバリー、ヴィーガン対応ありと掲載。口コミ(2026年4〜8月): 濃厚なアサイーにフルーツとはちみつたっぷり、約1,680円でやや高め、はちみつ・グラノーラ・キウイ・ココナッツ・ナッツ・パイン・マンゴーのトッピング、ナッツボウル、ミニのオレンジとレモンのボウル、コムハニーのギリシャヨーグルト、hojicha のフロート、ピーチティー、バーのような店内とソファ、今まででいちばんのアサイーボウルという声がふたり、2回目は量が少なくマンゴーが熟していなかったという声、予約の時間に閉店していて持ち帰りにしてくれたという声。',
      confidence: 'low', sources: [TB, OWN, R + 'B525549257/', R + 'B525650241/', R + 'B527814186/', R + 'B527947500/', R + 'B530545457/', R + 'B534344048/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Build-your-own bowls; takeout (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-18-14 ミドウ心斎橋ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目18番14号 (go) 1m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B530545457/', R + 'B525549257/'],
    price_note: 'One price in the reviews (June 2026).', last_checked: TODAY, items: [
      it('', '', 'Açaí bowl with fruit and honey', 'about ¥1,680', 'Bowls', 'ask', 'ask', 'June 2026.', 'acai'),
      it('', '', 'Greek yogurt with comb honey', '', 'Bowls', 'ask', 'no', 'April 2026.', 'yogurt'),
      it('', '', 'Nuts bowl', '', 'Bowls', 'ask', 'ask', 'August 2026.', 'nuts'),
    ] }, {
    cuisine: 'アサイーボウルとギリシャヨーグルトの店 (14席、カウンターとソファ席)・フルーツとはちみつをのせた濃厚なアサイーボウル約1,680円・トッピングを選べる: はちみつ、グラノーラ、キウイ、ココナッツ、ナッツ、パイン、マンゴー・ナッツボウル・ミニのオレンジとレモンのボウル・コムハニーのギリシャヨーグルト・hojicha のフロート・ピーチティー',
    neighborhood: '東心斎橋1-18-14 ミドウ心斎橋ビル 1F。心斎橋駅5番出口から徒歩2分',
    gf_detail: '要確認。グラノーラをのせることもできる (2026年5月)。そのほかのグルテンの情報なし。',
    vegan_detail: '要確認。食べログにヴィーガン対応ありとある。アサイーボウルはフルーツとはちみつやヨーグルトなので、ベースとトッピングを確認を。',
    notes: '[カフェ・心斎橋、バーのような店内の濃厚アサイーボウルとギリシャヨーグルト] 心斎橋駅近くの小さなアサイーボウルとギリシャヨーグルトの店で、ほの暗いバーのような店内にふかふかのソファ。アサイーは濃厚でクリーミー、フルーツとはちみつたっぷりで、グラノーラ、キウイ、ココナッツ、ナッツ、マンゴーなどを選んで自分好みにも。コムハニーのギリシャヨーグルトは濃くて食べごたえあり。ボウルは約1,680円で少し高めという声。今まででいちばんのアサイーボウルという声がふたり、2回目は量が少なくマンゴーが熟していなかったという声も。食べログにヴィーガン対応あり。営業時間ははっきりせず (掲載は夜から朝4時、口コミは昼の訪問)、行く前に確認を。',
  });
}

// ================================================================ ROCO
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27056334/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_roco_pizza_higashishinsaibashi', name: 'ROCO', category: 'OMNI',
    lat: 34.673575, lng: 135.503236, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: a pizza bar; no gluten-free crust described.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Pizzas are mostly cheese-based (four cheese, Margherita); nothing described as vegan.',
    hours_raw: 'Daily 17:30–24:00 (last order 23:30); may change, so check (Tabelog). One-drink rule (June 2025). Cards accepted (Tabelog). Smoking allowed (Tabelog). Backless wooden stools at small tables (2018).',
    hours: ALL(day(['17:30', '00:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 1-17-1, in the bar cluster near Shinsaibashi Stn exit 6',
    cuisine: 'Small oven-baked pizza bar (20 seats: 6 at the counter, tables) · small, chewy, homemade-style pizzas, once ¥500–600 each · Margherita; basil pizza; quattro formaggi with honey; mentaiko pizza · ahijo · prosciutto; appetizer platter · cheap wine by the glass and bottle; cocktails and non-alcoholic drinks',
    website: null, gmaps: gm('ROCO 東心斎橋 ピザ'), menu_url: null,
    notes: "[Pizza · a cheap oven-baked pizza bar, Higashi-Shinsaibashi] A small Italian-bar-style pizza place in the Higashi-Shinsaibashi drinking streets, known for cheap, chewy, rustic pizzas that are on the small side, so a group can order several. Diners like the Margherita, a basil pizza, the quattro formaggi with honey and a mentaiko pizza, with ahijo and prosciutto to start and inexpensive wine. There's a one-drink rule. Pizzas were ¥500–600 in older reviews; recent prices aren't reported. Service reports range from attentive (pizzas sent one at a time so each stays hot) to curt, and one diner found the backless stools hard going after an hour. Most reviews are older; the latest is June 2025.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Pizza and dining bar (Tabelog; 2018–2025 reviews).', philosophy: null, specialty: 'Small oven-baked pizzas.',
      anecdotes: [
        { text: '"The size of the pizza is a bit smaller, but it\'s just the right size and has a rustic homemade flavor. There is a one-drink policy. My favorite is the Quattro Formaggi with honey." — June 2025.', source: R + 'B507977833/' },
        { text: '"The pizzas were about JPY 600 each, and we enjoyed authentic, oven-baked varieties. They were fluffy and delicious." — February 2020.', source: R + 'B425708090/' },
      ],
      japanese_sources_summary: '食べログ: ROCO、大阪市中央区東心斎橋1-17-1、毎日17:30〜24:00 (L.O. 23:30)、カード可、喫煙可、20席 (カウンター6、テーブル14)。口コミ(2018年9月〜2025年6月): イタリアのバルのような店内、小ぶりでもちもちの素朴なピザ、以前は1枚500〜600円、マルゲリータ、バジルのピザ、はちみつのクアトロフォルマッジ、mentaiko のピザ、アヒージョ、生ハム、前菜の盛り合わせ、安いワイン、ワンドリンク制、ピザを1枚ずつ出して熱々にしてくれたという声、接客がそっけなかったという声、背もたれのない木の丸椅子が疲れたという声、最新の口コミは2025年6月。',
      confidence: 'low', sources: [TB, R + 'B248139639/', R + 'B341295390/', R + 'B383848096/', R + 'B425708090/', R + 'B507977833/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small bar; one-drink rule (2025).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-17-1',
    existence: { status: 'probable', checked: TODAY, note: 'Tabelog listing current; most recent review June 2025.' },
    pin_source: `Tabelog ${TB}; cross-checked: OSM ROCO node/2417575394 7m; GSI 大阪府大阪市中央区東心斎橋一丁目17番1号 (go) 8m; offset 7 m north of the Tabelog point to clear Monja Mugi (4.9 m) in the 1-17-1 cluster; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B507977833/', R + 'B425708090/'],
    price_note: 'Only older prices (2018–2020: pizzas ¥500–600); current prices not reported.', last_checked: TODAY, items: [
      it('', '', 'Quattro formaggi with honey', '', 'Pizza', 'no', 'no', 'June 2025.', 'quattro'),
      it('', '', 'Mentaiko pizza', '', 'Pizza', 'no', 'no', 'June 2025.', 'mentaiko'),
      it('', '', 'Margherita', '', 'Pizza', 'no', 'no', '2018–2020.', 'margherita'),
    ] }, {
    cuisine: '窯で焼く小さなピザのバー (20席: カウンター6、テーブル)・小ぶりでもちもちの素朴なピザ、以前は1枚500〜600円・マルゲリータ、バジルのピザ、はちみつのクアトロフォルマッジ、mentaiko のピザ・アヒージョ・生ハム、前菜の盛り合わせ・グラスやボトルの手頃なワイン、カクテル、ノンアルコール',
    neighborhood: '東心斎橋1-17-1、心斎橋駅6番出口近くの飲み屋街',
    gf_detail: '実質グルテンフリーではありません。ピザのバーで、グルテンフリーの生地の記載なし。',
    vegan_detail: '要確認。ピザはクアトロフォルマッジやマルゲリータなどチーズが中心。ヴィーガンの記載なし。',
    notes: '[ピザ・東心斎橋、手頃な窯焼きピザのバー] 東心斎橋の飲み屋街にあるイタリアのバルのような小さなピザの店で、安くてもちもち、素朴で小ぶりなピザが知られ、何人かで何枚も頼みやすい。マルゲリータ、バジルのピザ、はちみつのクアトロフォルマッジ、mentaiko のピザが好評で、アヒージョや生ハム、手頃なワインも。ワンドリンク制。以前の口コミではピザは500〜600円、最近の値段は不明。1枚ずつ出して熱々にしてくれたという声と、そっけなかったという声があり、背もたれのない丸椅子が1時間でつらかったという声も。口コミは古いものが多く、最新は2025年6月。',
  });
}

// ================================================================ 鮨 けやき 心斎橋
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27082754/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://sushi-keyaki.com';
  const LD = day(['12:00', '14:30'], ['17:30', '22:00']);
  put({
    id: 'osaka_sushi_keyaki_shinsaibashi', name: '鮨 けやき 心斎橋 (Sushi Keyaki Shinsaibashi)', category: 'OMNI',
    lat: 34.672998, lng: 135.498437, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Each piece is seasoned for you with salt, citrus or plum paste rather than soy sauce (April 2026), but the course also includes cooked dishes; ask about any soy-based glaze.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish sushi counter.',
    hours_raw: 'Tuesday 17:30–22:00; Wed–Sun and holidays 12:00–14:30 and 17:30–22:00 (food last orders 14:00 and 21:30); closed Monday (Tabelog). Cards (VISA, Master, JCB, Diners) accepted; no e-money or QR (Tabelog). Non-smoking (Tabelog). Upstairs, entrance a little hard to find (May 2023). Opened 29 November 2014 (Tabelog).',
    hours: { 1: day(['17:30', '22:00']), 2: LD, 3: LD, 4: LD, 5: LD, 6: LD }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishi-Shinsaibashi 1-9-20, Bamboo Alley 2F, on the Amerikamura side — 3 min from Shinsaibashi or Yotsubashi Stn',
    cuisine: 'Edomae sushi at an 8-seat counter · omakase course ¥20,000: appetizer, three kinds of sashimi, grilled fish, a side dish, chawanmushi, ten nigiri (squid, white fish, striped jack, chutoro, seasonal fish, white shrimp, ikura, seared snapper, sea urchin, eel), miso soup, fruit · special sushi course ¥12,000 · three course tiers at dinner · lunch courses · pieces seasoned with salt, citrus or plum paste instead of soy · salt-crusted tuna; kohada; bonito with salt · sake, shochu and wine',
    website: OWN, gmaps: gm('鮨 けやき 心斎橋'), menu_url: TB + 'dtlmenu/',
    notes: "[Sushi · a quiet 8-seat Edomae counter near Amerikamura, Nishi-Shinsaibashi] A calm, upstairs Edomae sushi counter of eight seats on the quieter edge of Amerikamura, open since 2014 and serving lunch as well as dinner. Each piece arrives already seasoned, with salt, citrus or plum paste instead of soy sauce. The ¥20,000 omakase runs like a small kaiseki: appetizer, three sashimi, grilled fish and chawanmushi before ten nigiri from squid and striped jack to chutoro, sea urchin and eel; there's also a ¥12,000 sushi course and lunch courses that diners call good value. Past highlights include tuna cooked in a salt crust, well-judged kohada and bonito with salt. You can ask for less rice. Closed Mondays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 29 November 2014 (Tabelog).', background: 'Counter sushi restaurant with a staff-maintained Tabelog listing (Tabelog; 2020–2026 reviews).', philosophy: 'Fish sourced each morning, seasoned piece by piece (Tabelog listing; April 2026).', specialty: 'Edomae omakase.',
      anecdotes: [
        { text: '"\'Sushi without Soy Sauce\' seasoned for each topping — Delicate flavors enhanced with salt, citrus, and plum paste." — April 2026, Omakase Course ¥20,000.', source: R + 'B526189822/' },
        { text: '"That day, we enjoyed tuna done in a salt crust, which was rich in flavor. The kohada (gizzard shad) was perfectly seasoned with vinegar…" — March 2023.', source: R + 'B462621784/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員の公式情報): 鮨 けやき 心斎橋、大阪市中央区西心斎橋1-9-20 Bamboo Alley 2F、心斎橋駅・四ツ橋駅から徒歩3分、火17:30〜22:00、水〜日・祝12:00〜14:30・17:30〜22:00 (料理L.O. 14:00・21:30)、月曜休み、2014年11月29日開店、カウンター8席、カード (VISA・Master・JCB・Diners) 可、電子マネー・QR不可、禁煙、毎朝仕入れる魚、日本酒・焼酎・ワイン、公式サイトあり。口コミ(2020年10月〜2026年4月): おまかせコース20,000円 (前菜、旬の魚3種、焼き魚、一品、chawanmushi、握り10貫、みそ汁、季節の果物)、特上の鮨コース12,000円、夜はコースが3段階、昼のコースはお得、醤油を使わず塩・柑橘・梅で一貫ずつ味つけ、マグロの塩釜、kohada、鰹の塩、シャリを少なめにできる、入口がわかりにくい2階。',
      confidence: 'medium', sources: [TB, OWN, R + 'B437909135/', R + 'B462621784/', R + 'B467741362/', R + 'B525723004/', R + 'B526189822/', R + 'B532765998/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter omakase; ask for less rice if you like (2023).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区西心斎橋1-9-20 Bamboo Alley 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Staff-maintained Tabelog listing; reviews dated April 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区西心斎橋一丁目9番20号 (go) 6m; same building as Teppan Dining Yo (16 m apart), no offset; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B526189822/'],
    price_note: 'Course prices from an April 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Omakase course (ten nigiri plus dishes)', '¥20,000', 'Courses', 'ask', 'no', 'April 2026.', 'omakase'),
      it('', '', 'Special sushi course', '¥12,000', 'Courses', 'ask', 'no', 'April 2026.', 'tokujo'),
      it('', '', 'Lunch course', '', 'Lunch', 'ask', 'no', 'May 2023.', 'lunch'),
    ] }, {
    cuisine: 'カウンター8席の Edomae の鮨・おまかせコース20,000円: 前菜、sashimi 3種、焼き魚、一品、chawanmushi、握り10貫 (イカ、白身、シマアジ、中トロ、旬の魚、白海老、ikura、炙りの鯛、うに、うなぎ)、みそ汁、果物・特上の鮨コース12,000円・夜はコースが3段階・昼のコース・醤油を使わず塩・柑橘・梅で味つけ・マグロの塩釜、kohada、鰹の塩・日本酒、焼酎、ワイン',
    neighborhood: '西心斎橋1-9-20 Bamboo Alley 2F、アメリカ村の静かな側。心斎橋駅・四ツ橋駅から徒歩3分',
    gf_detail: '要確認。一貫ずつ醤油を使わず塩・柑橘・梅で味つけして出す (2026年4月) が、コースには料理もあるので、醤油を使ったたれについて確認を。',
    vegan_detail: 'ヴィーガンではありません。魚の鮨のカウンター。',
    notes: '[鮨・西心斎橋、アメリカ村近くの静かな8席の Edomae] アメリカ村の静かな端の2階にある、8席の落ち着いた鮨のカウンターで、2014年から、昼も夜も営業。一貫ずつ醤油を使わず、塩・柑橘・梅で味をつけて出す。20,000円のおまかせは小さなコース料理のようで、前菜、sashimi 3種、焼き魚、chawanmushi のあと、イカやシマアジから中トロ、うに、うなぎまで握り10貫。12,000円の鮨のコースや、お得という声の昼のコースも。過去にはマグロの塩釜、ほどよい kohada、鰹の塩も。シャリは少なめにもできる。月曜休み。',
  });
}

// ================================================================ 鉄板dining 葉 -you-
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27133260/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_teppan_dining_yo_nishishinsaibashi', name: '鉄板dining 葉 -you- (Teppan Dining Yo)', category: 'OMNI',
    lat: 34.67309, lng: 135.498575, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: okonomiyaki, negiyaki and yakisoba with sauce; no gluten-free option described.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegan and vegetarian options, but no vegan dishes are named.',
    hours_raw: 'Daily 18:00–24:00 (last order 23:00); may close early some days, so call (Tabelog). Reservations 17:30–23:00 (Tabelog). Cards, e-money and QR accepted (Tabelog). Smoking allowed; one diner smelled e-cigarettes from the next table (May 2024). English menu (May 2024). All-you-can-drink plans (Tabelog). One person runs the kitchen, so dishes can be slow (September 2026). Opened 5 December 2022 (Tabelog).',
    hours: ALL(day(['18:00', '00:00'])), hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishi-Shinsaibashi 1-9-20, Nippo Bamboo Alley Bldg 1F, opposite J Hotel — 3 min from Shinsaibashi Stn exit 7',
    cuisine: 'Teppan dishes and okonomiyaki in a wooden room (18 seats: 8 at the counter, 10 at tables) · okonomiyaki: pork, oyster, mixed "modern"; Hiroshima-style · yam-yaki · negiyaki · cheese tonpei-yaki · shio soba-meshi (salt-seasoned noodles and rice) · shrimp mayo; shrimp toast · grilled salt offal; chicken gizzards; thick-cut beef tongue; oysters · tomato salad · shochu, sake and wine; all-you-can-drink plans',
    website: null, gmaps: gm('鉄板dining 葉 西心斎橋'), menu_url: TB + 'dtlmenu/',
    notes: "[Okonomiyaki · a calm wooden teppan bar off Amerikamura, Nishi-Shinsaibashi] A tidy, wood-lined teppan bar tucked away in Nishi-Shinsaibashi, a quiet alternative to the Dotonbori okonomiyaki queues. Okonomiyaki comes in several styles, pork, oyster, a mixed modern and even Hiroshima-style, served on individual pans; around it, yam-yaki, cheese tonpei-yaki, shrimp mayo, shrimp toast and a salty, well-liked soba-meshi, plus salt-grilled offal and thick beef tongue. One diner didn't care for the sauce. One person runs the kitchen, so it can be slow, but diners like the warm touches (a message card on the table, a candy on the way out) and fair prices. Tabelog lists vegan options; ask.",
    chef_bio: { chef_name: null, roles: ['owner'], origin: 'Opened 5 December 2022 (Tabelog).', background: 'Teppan and okonomiyaki bar run by its owner, who cooks alone (September 2026 review; Tabelog).', philosophy: null, specialty: 'Okonomiyaki; teppan small plates.',
      anecdotes: [
        { text: '"I tried shrimp toast for the first time, which was like toast topped with shrimp chili, and it was delightful! The cheese tonpei-yaki was, as expected, delicious and paired perfectly with beer!" — September 2026.', source: R + 'B535998772/' },
        { text: '"I had the mixed modern okonomiyaki as my main dish. Instead of being served on a teppan table, it came out on an individual frying pan-like plate." — May 2024.', source: R + 'B485983246/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員の公式情報): 鉄板dining 葉 -you-、大阪市中央区西心斎橋1-9-20 日宝Bamboo Alleyビル 1F、Jホテルの前、心斎橋駅7番出口から徒歩3分、毎日18:00〜24:00 (L.O. 23:00)、早く閉める日もある、予約は17:30〜23:00、2022年12月5日開店、18席 (カウンター8、テーブル10)、カード・電子マネー・QR可、喫煙可、飲み放題、ヴィーガン・ベジタリアン対応ありと掲載、山芋の鉄板焼き、negiyaki 、焼酎・ワイン・日本酒。口コミ(2023年5月〜2026年10月): 木の内装のきれいな店、テーブルにメッセージカード、帰りに飴、豚・牡蠣・ミックスの modernのお好み焼き、広島風、山芋の鉄板焼き、チーズの tonpei-yaki、塩の soba-meshi、海老マヨ、海老トースト、塩ホルモン、砂肝、厚切り牛タン、牡蠣、トマト、英語のメニュー、ソースが好みではなかったという声、厨房はひとりで提供は少しゆっくり、手頃な値段。',
      confidence: 'medium', sources: [TB, R + 'B464769823/', R + 'B474701191/', R + 'B478366029/', R + 'B485983246/', R + 'B535998772/', R + 'B537593089/'] },
    cultural_comfort: { level: 'english', note: 'English menu (May 2024).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市中央区西心斎橋1-9-20 日宝Bamboo Alleyビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Staff-maintained Tabelog listing; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区西心斎橋一丁目9番20号 (go) 21m; same building as Sushi Keyaki (16 m apart), no offset; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535998772/', R + 'B478366029/'],
    price_note: 'No dish prices in the reviews; about ¥3,000–6,000 per person (Tabelog, reviews).', last_checked: TODAY, items: [
      it('', '', 'Mixed modern okonomiyaki', '', 'Okonomiyaki', 'no', 'no', 'May 2024.', 'modern'),
      it('', '', 'Oyster okonomiyaki', '', 'Okonomiyaki', 'no', 'no', 'December 2024.', 'kaki'),
      it('', '', 'Cheese tonpei-yaki', '', 'Teppan', 'ask', 'no', 'September 2026.', 'tonpei'),
      it('', '', 'Shio soba-meshi', '', 'Teppan', 'no', 'no', 'December 2024.', 'sobameshi'),
      it('', '', 'Shrimp toast', '', 'Teppan', 'no', 'no', 'September 2026.', 'ebitoast'),
    ] }, {
    cuisine: '木の内装の鉄板料理とお好み焼き (18席: カウンター8、テーブル10)・お好み焼き: 豚、牡蠣、ミックスの modern、広島風・山芋の鉄板焼き・negiyaki ・チーズの tonpei-yaki・塩の soba-meshi・海老マヨ、海老トースト・塩ホルモン、砂肝、厚切り牛タン、牡蠣・トマトのサラダ・焼酎、日本酒、ワイン、飲み放題',
    neighborhood: '西心斎橋1-9-20 日宝Bamboo Alleyビル 1F、Jホテルの向かい。心斎橋駅7番出口から徒歩3分',
    gf_detail: '実質グルテンフリーではありません。ソースのお好み焼き、negiyaki 、yakisoba 。グルテンフリーの品の記載なし。',
    vegan_detail: '要確認。食べログにヴィーガン・ベジタリアン対応ありとあるが、具体的な料理名はなし。',
    notes: '[お好み焼き・西心斎橋、アメリカ村近くの落ち着いた木の鉄板バー] 西心斎橋の奥まった場所にある、木の内装のきれいな鉄板の店で、道頓堀のお好み焼きの行列を避けたいときに。お好み焼きは豚、牡蠣、ミックスの modern、広島風まであり、ひとりずつの鉄皿で出てくる。ほかに山芋の鉄板焼き、チーズの tonpei-yaki、海老マヨ、海老トースト、好評の塩の soba-meshi、塩ホルモンや厚切り牛タンも。ソースが好みではなかったという声も。厨房はひとりなので少し時間がかかるが、テーブルのメッセージカードや帰りの飴など心づかいと手頃な値段が好評。食べログにヴィーガン対応あり、確認を。',
  });
}

save();
