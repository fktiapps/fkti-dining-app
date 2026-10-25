// Ginza Station half-mile sweep (805 m), batch 88 — all-genre phase (all OMNI).
//   + 銀座コージーコーナー 銀座1丁目本店 (sweets chain's main shop; 2F café)
//   + マリアージュフレール 銀座本店 (French tea house on Suzuran-dōri)
//   + 人形町今半 銀座店 (sukiyaki in the Kōjun Bldg; Tabelog Hot Pot 100 2024)
//   + 壁の穴 日比谷シャンテ店 (wafū-pasta chain under Hibiya Chanter)
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-25';
const { put, save } = openSweep(TODAY);

// ================================================================ 銀座コージーコーナー 銀座1丁目本店
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13013337/'; const R = TB + 'dtlrvwlst/';
  const d = day(['10:00', '20:00']);
  put({
    id: 'tokyo_ginza_cozy_corner_1chome', name: '銀座コージーコーナー 銀座1丁目本店 (Ginza Cozy Corner)', category: 'OMNI',
    lat: 35.674704, lng: 139.768912,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: cream puffs, financiers, cakes and pasta.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: cream puffs, cakes and parfaits built on cream and custard.',
    hours_raw: 'Daily 10:00–20:00 (1F takeaway); 2F café 11:00–19:00, parfaits from 14:00; open year-round (Tabelog).',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 1-chōme, Ginza Ikedaen Bldg 1F–2F, café looks out over Kyōbashi',
    cuisine: 'Sweets chain main shop · 1F cake and pastry takeaway (double cream puffs, financiers) · 2F café with seasonal parfaits, cake sets and pasta', cuisine_type: 'cafe',
    website: 'http://www.cozycorner.co.jp/index.html', gmaps: gm('銀座コージーコーナー 銀座1丁目本店'), menu_url: null,
    notes: "[Café and sweets · Cozy Corner's main shop in Ginza 1-chōme] The Ginza 1-chōme main shop of the Cozy Corner sweets chain: takeaway cakes and pastries downstairs, and a 32-seat café upstairs for pasta, cake sets and seasonal parfaits (from 2 pm), with a view over Kyōbashi from every table. Takeaway favourites are the big double cream puff (custard plus whipped cream), a seasonal pumpkin cream puff and the financier. No reservations; the café fills on holidays, but waits are short. One reviewer found it good value for tea in Ginza, another a little ordinary for Ginza prices.",
    chef_bio: { chef_name: null, roles: [], origin: 'Main shop of the chain (Tabelog listing name)', background: 'Chain (cozycorner.co.jp).', philosophy: null, specialty: 'Cream puffs; parfaits.',
      anecdotes: [
        { text: '"A double cream puff filled with whipped cream and custard! It’s always delicious and satisfying." — October 2026.', source: R + 'B532058452/' },
        { text: '"The interior offers a nice view of the Kyobashi area from every table. I ordered the seasonal parfait along with a coffee set." — October 2026.', source: R + 'B536883559/' },
      ],
      japanese_sources_summary: '食べログ: 銀座コージーコーナー 銀座1丁目本店、銀座1-8-1 銀座池田園ビル1F・2F、32席、1Fはテイクアウトの洋菓子(10:00〜20:00)、2Fはカフェ(パスタ、ケーキセット、ドリンク、11:00〜19:00、パフェは14:00から)、年中無休、予約不可、公式サイト cozycorner.co.jp。2026年の口コミ: カスタードとホイップのダブルシュークリーム、かぼちゃのシュークリーム、フィナンシェ、休日のカフェは満席で5分ほど待った、どの席からも京橋方面が見える、季節のパフェとコーヒーのセット、銀座の割に普通との声とゆっくりできる穴場との声。',
      confidence: 'medium', sources: [TB, R + 'B532058452/', R + 'B536883559/', R + 'B537738646/', R + 'B538004651/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the counter downstairs; café upstairs.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座1-8-1 銀座池田園ビル 1F・2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座一丁目8番1号 (go) 5m; OSM コージーコーナー node/4087747582 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532058452/', R + 'B536883559/'],
    price_note: 'No prices captured; café spend ¥1,000–3,000 (Tabelog).', last_checked: TODAY, items: [
      it('ダブルシュークリーム', '', 'Double cream puff (custard and whipped cream)', '', 'Takeaway', 'no', 'no', 'October 2026.', 'double_cream_puff'),
      it('フィナンシェ', '', 'Financier', '', 'Takeaway', 'no', 'no', 'September 2026.', 'financier'),
      it('季節のパフェ', '', 'Seasonal parfait (café, from 14:00)', '', 'Café', 'no', 'no', 'October 2026.', 'parfait'),
    ] }, {
    cuisine: '洋菓子チェーンの本店・1Fは洋菓子のテイクアウト(ダブルシュークリーム、フィナンシェ)・2Fのカフェで季節のパフェ、ケーキセット、パスタ',
    neighborhood: '銀座一丁目、銀座池田園ビル1F・2F。カフェから京橋方面が見える',
    gf_detail: 'グルテンフリーではありません。シュークリーム、フィナンシェ、ケーキ、パスタ。',
    vegan_detail: 'ヴィーガンではありません。クリームやカスタードのシュークリーム、ケーキ、パフェ。',
    notes: '[カフェ・洋菓子・銀座一丁目のコージーコーナー本店] 洋菓子チェーン「銀座コージーコーナー」の銀座1丁目本店。1階は洋菓子のテイクアウト、2階は32席のカフェでパスタ、ケーキセット、季節のパフェ(14時から)。どの席からも京橋方面が見えます。持ち帰りの人気はカスタードとホイップの大きなダブルシュークリーム、季節のかぼちゃのシュークリーム、フィナンシェ。予約不可で休日のカフェは満席になりますが待ちは短め。銀座でお茶するには手頃という声と、銀座の値段にしては普通という声。',
  });
}

// ================================================================ マリアージュフレール 銀座本店
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13002632/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:30', '20:00']);
  put({
    id: 'tokyo_mariage_freres_ginza_honten', name: 'マリアージュフレール 銀座本店 (Mariage Frères Ginza)', category: 'OMNI',
    lat: 35.671113, lng: 139.763924,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A tea salon pouring loose-leaf teas by the pot; the cakes (some made with tea) are not described as gluten-free, and no source mentions gluten-free handling.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Pots of plain and flavoured tea; no source says whether any cake is vegan.',
    hours_raw: 'Daily 11:30–20:00 (Tabelog).',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Suzuran-dōri, Ginza 5-chōme — 2 min from Ginza Stn exit A1',
    cuisine: 'French tea house’s Ginza main salon · loose-leaf teas by the pot, seasonal autumn teas · tea-scented cakes (cake ¥1,980) · giant iced tea', cuisine_type: 'cafe',
    website: 'http://www.mariagefreres.co.jp/', gmaps: gm('マリアージュフレール 銀座本店 すずらん通り'), menu_url: null,
    notes: "[Café · Mariage Frères' tea salon on Suzuran-dōri] The 37-seat Ginza main salon of the French tea house, now in a brighter space on Suzuran-dōri after a move within Ginza. Tea comes by the pot, from white teas to flavoured blends and about four seasonal autumn teas, and staff help you choose, including a tea that holds up with milk. Cakes, some made with tea, were ¥1,980 in October 2026; the iced tea is famously huge. Afternoon queues can run 45 minutes on busy days, though a weekday 1:30 pm visit walked straight in. Air-conditioning runs cold, and staff will adjust it.",
    chef_bio: { chef_name: null, roles: [], origin: 'Ginza main salon (Tabelog listing name); moved within Ginza (2026 review)', background: 'French tea house (mariagefreres.co.jp).', philosophy: null, specialty: 'Pots of tea; tea cakes.',
      anecdotes: [
        { text: '"One of the best things about Mariage Frères is that they serve tea in a pot, allowing you to enjoy plenty of it." — October 2026, after a 45-minute wait.', source: R + 'B44895398/' },
        { text: '"There were about four types of autumn tea available… The cakes also used tea as an ingredient… I could choose from four different cakes, priced at JPY 1,980." — October 2026.', source: R + 'B536881072/' },
      ],
      japanese_sources_summary: '食べログ: マリアージュフレール 銀座本店、銀座5-6-6 すずらん通り、銀座駅A1出口から徒歩2分、37席、毎日11:30〜20:00、予約可、公式サイト mariagefreres.co.jp。2026年の口コミ: 銀座の別の場所から移って明るくなった、ポットで出す紅茶、白茶やフレーバーティー、秋の紅茶が4種ほど、紅茶を使ったケーキ(4種から選べて1,980円)、とても大きなアイスティー、好みやミルクに合う茶葉を勧めてくれる、混む日は45分待ち・平日13時半は待ちなし、冷房が強いが頼むと調整してくれた。',
      confidence: 'medium', sources: [TB, R + 'B44895398/', R + 'B536881072/', R + 'B536636608/', R + 'B536846960/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff talk you through the tea list.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座5-6-6 すずらん通り',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座五丁目6番6号 (go) 15m; OSM Mariage Frères node/7196596447 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536881072/'],
    price_note: 'Cake price from an October 2026 review.', last_checked: TODAY, items: [
      it('紅茶(ポット)', '', 'Loose-leaf tea by the pot', '', 'Tea', 'ask', 'ask', '', 'tea_pot'),
      it('紅茶のケーキ', '', 'Tea-scented cake (choice of four)', '¥1,980', 'Cakes', 'no', 'ask', 'October 2026.', 'tea_cake'),
      it('アイスティー', '', 'Iced tea (very large)', '', 'Tea', 'ask', 'ask', 'September 2026.', 'iced_tea'),
    ] }, {
    cuisine: 'フランスの紅茶専門店の銀座本店のサロン・ポットで出す茶葉の紅茶、秋の季節の紅茶・紅茶を使ったケーキ(1,980円)・特大のアイスティー',
    neighborhood: '銀座五丁目、すずらん通り。銀座駅A1出口から徒歩2分',
    gf_detail: '要確認。ポットで出す紅茶のサロン。紅茶を使ったケーキなどがグルテンフリーかは書かれておらず、対応についての記載もありません。',
    vegan_detail: '要確認。ストレートやフレーバーの紅茶をポットで。ヴィーガンのケーキがあるかは書かれていません。',
    notes: '[カフェ・すずらん通りのマリアージュフレール] フランスの紅茶専門店の37席の銀座本店サロンで、銀座の中で移転して明るい空間に。紅茶はポットで、白茶からフレーバーティー、秋は季節の紅茶が4種ほど。ミルクに合う茶葉など、好みに合わせてスタッフが選んでくれます。紅茶を使ったものもあるケーキは2026年10月で1,980円、アイスティーはとても大きいことで知られています。混む日の午後は45分待ちになることも、平日13時半は待たずに入れた例も。冷房は強めですが、頼めば調整してくれます。',
  });
}

// ================================================================ 人形町今半 銀座店
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13016566/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:30', '15:00'], ['17:00', '22:00']);
  put({
    id: 'tokyo_ningyocho_imahan_ginza', name: '人形町今半 銀座店 (Ningyocho Imahan Ginza)', category: 'OMNI',
    lat: 35.670121, lng: 139.762819,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. Sukiyaki is simmered in a sweet soy sauce (Tabelog’s own category) and shabu-shabu sauces are not described, so assume wheat unless told otherwise; staff did confirm one family’s fish-allergy details by email before the visit.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Wagyu sukiyaki, shabu-shabu and steak; courses include sashimi.',
    hours_raw: 'Daily 11:30–15:00 and 17:00–22:00 (food L.O. 20:30) (Tabelog). 12% service charge all day; private-room fee.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 6-chōme, Kōjun Bldg 5F — 5 min from Ginza Stn exit A2',
    cuisine: 'Wagyu sukiyaki, shabu-shabu and steak, Tabelog Hot Pot 100 (2024) · Hana course with appetizers and sashimi · premium sukiyaki set (120 g) · kids’ bento · shoes off', cuisine_type: 'other',
    website: 'https://www.imahan.com/', gmaps: gm('人形町今半 銀座店 交詢ビル'), menu_url: null,
    notes: "[Sukiyaki · Ningyōchō Imahan in the Kōjun Building] The Ginza branch of Ningyōchō Imahan, a 38-seat sukiyaki house on the fifth floor of the Kōjun Building, chosen for Tabelog's Hot Pot 100 in 2024. Shoes come off at the door (slippers if you're barefoot), and there are tatami and private rooms for two or four. The Hana course runs appetizers and sashimi before sukiyaki of melt-in-the-mouth Wagyu; a premium sukiyaki set brings 120 g of beef with rice, though one diner found the dipping sauce salty. Service is warm and polished, with many overseas guests. Families get kids' bento; one family's allergy details were confirmed by email ahead, and a child got a birthday gift. 12% service charge all day.",
    chef_bio: { chef_name: null, roles: [], origin: 'Ginza branch of Ningyocho Imahan', background: 'Multi-shop (imahan.com).', philosophy: null, specialty: 'Wagyu sukiyaki.',
      anecdotes: [
        { text: '"After making a reservation, they confirmed the details of the allergies via email. I was quite surprised by how thoroughly they communicated about the severity of the allergies." — October 2026, family lunch with fish allergies and a kids’ bento.', source: R + 'B537415045/' },
        { text: '"The moment the meat touched my tongue, it melted away… The restaurant\'s style, where you remove your shoes before entering, adds to the authentic Japanese atmosphere." — October 2026, Hana course.', source: R + 'B537062318/' },
      ],
      japanese_sources_summary: '食べログ: 人形町今半 銀座店、銀座6-8-7 交詢ビル5F、銀座駅A2出口から徒歩5分、38席、2名・4名の個室(個室料あり)、座敷、毎日11:30〜15:00・17:00〜22:00(料理L.O. 20:30)、サービス料12%(終日)、お子様メニューあり、公式サイト imahan.com、すき焼き・しゃぶしゃぶ百名店2024。2026年の口コミ: 個室で前菜と刺身から始まるコース、とろけるすき焼き、プレミアムすき焼き膳(牛肉120gとご飯)、たれは少し塩辛い、熟練の仲居さん、靴を脱いで上がる(素足ならスリッパ)、海外からの客も多い、予約後に魚アレルギーの重さをメールで丁寧に確認、お子様弁当、誕生日が近い子に店からプレゼント。',
      confidence: 'medium', sources: [TB, R + 'B537415045/', R + 'B537062318/', R + 'B536984549/', R + 'B536398256/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Shoes off; staff explain each dish.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [],
      staff_allergy_handling: [{ text: 'After booking, staff confirmed the details and severity of a family’s fish allergies by email (October 2026).', source: R + 'B537415045/' }],
      positives: [{ text: 'Allergy details confirmed in advance by email.', source: R + 'B537415045/' }], confidence: 'medium', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座6-8-7 交詢ビル 5F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座六丁目8番7号 (go) 22m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537062318/', R + 'B536984549/'],
    price_note: 'No course prices captured; dinner spend ¥15,000–30,000 in reviews.', last_checked: TODAY, items: [
      it('華コース', 'hana koosu', 'Hana course: appetizers, sashimi, sukiyaki', '', 'Courses', 'ask', 'no', 'October 2026.', 'hana'),
      it('プレミアムすき焼き膳', '', 'Premium sukiyaki set (120 g beef, rice)', '', 'Sets', 'ask', 'no', 'October 2026.', 'premium_sukiyaki'),
      it('お子様弁当', '', 'Kids’ bento', '', 'Kids', 'ask', 'no', 'October 2026.', 'kids_bento'),
      it('サービス料', '', 'Service charge', '12%', 'Charge', '', '', 'Tabelog, all day.', 'service'),
    ] }, {
    cuisine: '和牛のすき焼き、しゃぶしゃぶ、ステーキ、食べログ百名店2024・前菜と刺身の付く華コース・プレミアムすき焼き膳(120g)・お子様弁当・靴を脱いで',
    neighborhood: '銀座六丁目、交詢ビル5F。銀座駅A2出口から徒歩5分',
    gf_detail: '予約時に要確認。すき焼きは甘辛い醤油で煮る料理で(食べログの分類のとおり)、しゃぶしゃぶのたれは書かれていないため、言われない限り小麦が入るものと考えてください。ある家族の魚アレルギーについては、来店前にメールで詳しく確認してくれました。',
    vegan_detail: 'ヴィーガンではありません。和牛のすき焼き、しゃぶしゃぶ、ステーキ。コースには刺身も。',
    notes: '[すき焼き・交詢ビルの人形町今半] 交詢ビル5階にある人形町今半の銀座店で38席、2024年の食べログすき焼き・しゃぶしゃぶ百名店。入口で靴を脱ぎ(素足ならスリッパあり)、座敷や2名・4名の個室もあります。華コースは前菜と刺身のあと、とろける和牛のすき焼き。プレミアムすき焼き膳は牛肉120gとご飯で、たれが少し塩辛いという声も。温かく行き届いたサービスで、海外からの客も多め。家族連れにはお子様弁当があり、ある家族はアレルギーの内容を事前にメールで確認され、子どもには誕生日のプレゼントも。サービス料は終日12%。',
  });
}

// ================================================================ 壁の穴 日比谷シャンテ店
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130102/13025827/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:00', '22:00']);
  put({
    id: 'tokyo_kabe_no_ana_hibiya_chanter', name: '壁の穴 日比谷シャンテ店 (Kabe no Ana)', category: 'OMNI',
    lat: 35.672967, lng: 139.759724,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a wheat-pasta restaurant (tarako, mentaiko carbonara, natto pasta). Tabelog says allergy information is available.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pastas built on cod roe, squid and cream; salads are not described.',
    hours_raw: 'Daily 11:00–22:00 (L.O. 21:00); closed 31 Dec–1 Jan; 11:00–20:00 on 30 Dec and 2–3 Jan; otherwise follows Hibiya Chanter (Tabelog).',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Hibiya Chanter B2F, Yūrakuchō 1-chōme — 1 min from Hibiya Stn, 5 min from Ginza Stn',
    cuisine: 'Wafū pasta chain from Shibuya · tarako with crisp nori, mentaiko carbonara, mentaiko-squid-natto · drinks from lunchtime', cuisine_type: 'other',
    website: null, gmaps: gm('壁の穴 日比谷シャンテ店'), menu_url: null,
    notes: "[Pasta · Kabe no Ana's Japanese-style spaghetti under Hibiya Chanter] A 37-seat branch, two floors below Hibiya Chanter, of Kabe no Ana, the wafū (Japanese-style) pasta chain whose main shop is in Shibuya. Fans come for tarako pasta under crisp nori, mentaiko cream and mentaiko carbonara, and a fluffy mentaiko, squid and natto pasta, in comforting Japanese flavours with plenty of toppings. Drinks are served from lunchtime, and following the shop on Instagram earns a free drink, softening prices regulars call on the high side. Queues move quickly. Wheelchair accessible; allergy information available.",
    chef_bio: { chef_name: null, roles: [], origin: 'Branch of a chain whose main shop is in Shibuya (2026 reviews)', background: 'Chain.', philosophy: null, specialty: 'Tarako and mentaiko pasta.',
      anecdotes: [
        { text: '"This time, I ordered the tarako pasta. It seems like a popular choice among diners. The crispy nori on top was delicious… I still highly recommend the mentai carbonara!" — October 2026.', source: R + 'B524477524/' },
        { text: '"I ordered the mentaiko, squid, and natto pasta as part of the appetizer set… The natto was fluffy!" — October 2026.', source: R + 'B537219694/' },
      ],
      japanese_sources_summary: '食べログ: 壁の穴 日比谷シャンテ店、千代田区有楽町1-2-2 日比谷シャンテB2F、日比谷駅徒歩1分、37席、毎日11:00〜22:00(L.O. 21:00)、12/31・1/1休、12/30と1/2・1/3は11:00〜20:00、サービス料なし、アレルギー表示あり、車椅子可。2026年の口コミ: 渋谷が本店、海苔がパリッとしたたらこスパゲッティ、明太カルボナーラ、明太子クリーム、明太子とイカと納豆のスパゲッティ(前菜セット)、どの店も具の種類が多い、昼から飲める、サラダもおいしい、インスタグラムのフォローでドリンクサービス、値段はやや高め、行列でも回転が早い、あさりとしめじのスパゲッティはあさりと色々なきのこに変わった。',
      confidence: 'medium', sources: [TB, R + 'B524477524/', R + 'B537219694/', R + 'B536550678/', R + 'B467485631/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Same-day bookings by phone.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [{ text: 'Tabelog lists allergy information as available.', source: TB }], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒100-0006 東京都千代田区有楽町1-2-2 日比谷シャンテ B2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都千代田区有楽町一丁目2番 (lot) 22m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B524477524/', R + 'B537219694/'],
    price_note: 'No prices captured; spend ¥1,000–3,000 (Tabelog).', last_checked: TODAY, items: [
      it('たらこスパゲッティ', 'tarako supagetti', 'Tarako (cod roe) spaghetti with crisp nori', '', 'Pasta', 'no', 'no', 'October 2026.', 'tarako'),
      it('明太カルボナーラ', '', 'Mentaiko carbonara', '', 'Pasta', 'no', 'no', 'October 2026.', 'mentai_carbonara'),
      it('明太子とイカと納豆のスパゲッティ', '', 'Mentaiko, squid and natto spaghetti', '', 'Pasta', 'no', 'no', 'October 2026.', 'mentai_ika_natto'),
    ] }, {
    cuisine: '渋谷発の和風スパゲッティのチェーン・海苔のパリッとしたたらこ、明太カルボナーラ、明太子とイカと納豆・昼から飲める',
    neighborhood: '有楽町一丁目、日比谷シャンテB2F。日比谷駅から徒歩1分、銀座駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。小麦のスパゲッティの店(たらこ、明太カルボナーラ、納豆)。食べログにはアレルギー表示ありとあります。',
    vegan_detail: 'ヴィーガンではありません。たらこ、イカ、クリームのスパゲッティ。サラダの内容は書かれていません。',
    notes: '[パスタ・日比谷シャンテの地下の壁の穴] 渋谷に本店がある和風スパゲッティのチェーン「壁の穴」の、日比谷シャンテ地下2階にある37席の店。ファンのお目当ては、パリッとした海苔をのせたたらこ、明太子クリームや明太カルボナーラ、ふわふわの明太子とイカと納豆のスパゲッティ。具だくさんでほっとする和の味です。昼から飲め、インスタグラムをフォローするとドリンクが一杯付くので、常連がやや高めという値段も気になりにくくなります。行列ができても回転は早め。車椅子可、アレルギー表示あり。',
  });
}

save();
