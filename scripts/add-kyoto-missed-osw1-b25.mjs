// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 25.
//   + 野菜ソムリエのお店 十祇家 木屋町御池個室店 Togiya Kiyamachi Oike (vegetable-led izakaya in machiya rooms; since 2009)
//   + 亀甲屋 Kikkouya (pull-your-own yuba and Kyoto dishes in a machiya near Karasuma-Oike; since 1989)
//   + 野菜酒場あしおと Yasai Sakaba Ashioto (vegetable izakaya with clay-pot rice off Ayanokoji; since 2019)
//   + センティード Sentido (early-opening coffee shop by Karasuma-Oike with free tastings; since 2012)
//   Picked on 2026-11-05: the first two with id mod 6 = 2 from `queue.mjs kyoto-missed next core 200` (26012648, 26003318);
//   the first two from `next notable 200` (26032592, 26019446). None is in data/kyoto.json by name (十祇家/Togiya, 亀甲屋/
//   Kikkouya, あしおと/Ashioto, センティード/Sentido). By address, 十祇家 shares アイル竹嶋 with kyoto_mughal_kiyamachi (address_ja
//   “京都府京都市中京区木屋町御池上ル アイル竹島ビル 2F”) — pin offset.
//   Same-name count across concepts (Greg's Samboa ruling): 十祇家 has two shops, 木屋町御池個室店 and 烏丸三条店 (Tabelog
//   26025381, named in this listing), neither in data — a small group. 亀甲屋 and センティード single shops. あしおと has a sister
//   restaurant nearby per an October 2026 review (unnamed) — small. Service charges checked against Tabelog's Japanese original:
//   十祇家 先付け料 ¥440 a head; 亀甲屋 お席料 (付だしつき) ¥390; あしおと 席料 ¥500, waived with two drinks; センティード none.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-25');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 十祇家 木屋町御池個室店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26012648/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://sites.google.com/view/togiyakiyamachi/';
  const L = day(['12:00', '14:30'], ['17:00', '22:30']);
  put({
    id: 'kyoto_togiya_kiyamachi_oike', name: '野菜ソムリエのお店 十祇家 木屋町御池個室店 (Togiya, Kiyamachi Oike)', category: 'OMNI',
    lat: 35.01179, lng: 135.7707, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tabelog lists gluten-free options, but the reviewed dishes include tempura, fried lotus root and camembert, shumai, chicken-dashi soba and white-miso motsunabe; which dishes are gluten-free is not stated (Tabelog; 2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegan and vegetarian options and the menu leans on vegetables (steamed seasonal vegetables with dips, whole tomato), but which dishes are plant-only and dashi-free is not stated (Tabelog; 2025–2026 reviews).',
    hours_raw: 'Lunch 12:00–14:30, reservation-only courses; dinner 17:00–22:30, daily; irregular closures (Tabelog). When full, the shop directs guests to its Karasuma Sanjo branch (075-256-5177) (Tabelog). Reservations accepted, with foreign-language booking support (Tabelog). Otoshi charge ¥440 a head (Tabelog, original 先付け料). Cards, e-money and QR accepted (Tabelog). 48 seats in machiya semi-private rooms, sunken-kotatsu tables and a room for 20; private hire 30–50 (Tabelog). Non-smoking; wheelchair accessible; Wi-Fi; children and pets welcome (Tabelog). English and Chinese menus; QR ordering (Tabelog; May 2025). Kiyamachi north of Oike, 2 min from Kyoto Shiyakusho-mae Stn (Tabelog). Opened 27 April 2009 (Tabelog).',
    hours: { 0: L, 1: L, 2: L, 3: L, 4: L, 5: L, 6: L }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi north of Oike — 2 min from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Vegetable-led izakaya “of the vegetable sommelier”, in machiya rooms (Tabelog; 2025–2026 reviews) · seasonal vegetables steamed in a bamboo basket, about twelve kinds, with miso, salt and sesame dips ¥900; artisan mapo tofu ¥700; “My House’s Whole Tomato” with sorbet ¥640 (July 2026) · white-miso motsunabe; hot-pot courses with appetizers such as white sesame tofu (2025–2026) · grilled eggplant, bamboo-shoot tempura, shumai, fried lotus root, fried camembert or mozzarella, tongue stir-fried with vegetables, pork kakuni, chicken-dashi soba (2025–2026) · Heartland draft, black-sesame shochu, craft beer, fruit liqueurs (May 2025)',
    website: SITE, gmaps: gm('十祇家 木屋町御池'), menu_url: null,
    notes: '[Izakaya · Kiyamachi-Oike, vegetables in machiya rooms] A quiet, vegetable-minded izakaya in machiya semi-private rooms just north of Oike on Kiyamachi, open since 2009. Start with a bamboo steamer of a dozen seasonal vegetables and three dips (¥900), a whole chilled tomato, and the house mapo tofu; groups come for white-miso motsunabe courses. Order by QR code; English and Chinese menus. ¥440 otoshi. A June 2026 diner met a rude staff member; an October 2026 regular praises the warm owner-chef.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)'], origin: null,
      background: 'Tabelog gives the opening as 27 April 2009; a July 2026 reviewer marks its 17th year. The Tabelog listing names a sister shop, 十祇家 烏丸三条店. An October 2026 regular was remembered after four months and calls the owner and chef warm.',
      philosophy: null, specialty: 'Steamed seasonal vegetables; mapo tofu; motsunabe.',
      anecdotes: [
        { text: 'A September 2025 diner, coupon in hand after training, ordered a three-person motsunabe alone and finished it — mostly vegetables, so it cooked down.', source: R + 'B514377393/' },
        { text: 'A June 2026 diner enjoyed the pork kakuni but was let down by a rude male staff member near the end.', source: R + 'B530332251/' },
      ],
      japanese_sources_summary: '食べログ: 野菜ソムリエのお店 十祇家 木屋町御池個室店、居酒屋・もつ鍋・中華、中京区上樵木町496 アイル竹嶋1F、市役所前駅から徒歩2分、昼12:00〜14:30 (予約制のコース)、夜17:00〜22:30、不定休、満席時は烏丸三条店へ、先付け料1人440円、カード・電子マネー・QR可、48席、半個室、掘りごたつ、20名の個室、貸切30〜50名、禁煙、車椅子可、Wi-Fi、子ども・ペット可、英語・中国語メニュー、ヴィーガン・ベジタリアン・グルテンフリー・ハラールのオプションの記載、2009年4月27日オープン。口コミ (2025〜2026年、英語): 旬の野菜のせいろ蒸し900円、職人の麻婆豆腐700円、丸ごとトマト640円、白味噌のもつ鍋、筍の天ぷら、焼売、蓮根の揚げ物、鶏だしのそば、QRで注文、17周年。',
      confidence: 'medium', sources: [TB, SITE, R + 'B423748387/', R + 'B507605503/', R + 'B514377393/', R + 'B520072883/', R + 'B528362793/', R + 'B530332251/', R + 'B532196369/', R + 'B533222964/', R + 'B537871963/', R + 'B537913236/'] },
    cultural_comfort: { level: 'english', note: 'English and Chinese menus; foreign-language booking support; ¥440 otoshi; private rooms.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区上樵木町496 アイル竹嶋 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.011822, 135.77065), offset about 6 m south-east to (35.01179, 135.7707) because kyoto_mughal_kiyamachi (same building, アイル竹島ビル 2F) sits 1.8 m from the Tabelog point; GSI matches only the town 京都府京都市中京区上樵木町, so not cross-checked at lot level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532196369/', TB],
    price_note: 'No menu read; prices from a July 2026 review; otoshi from Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Seasonal vegetables steamed in a bamboo basket, three dips', '¥900', 'Vegetables', 'ask', 'ask', 'July 2026.', 'seiro_yasai'),
      it('', '', 'Artisan mapo tofu', '¥700', 'Dishes', 'ask', 'no', 'July 2026.', 'mapo_tofu'),
      it('', '', 'My House’s Whole Tomato', '¥640', 'Vegetables', 'ask', 'ask', 'July 2026.', 'whole_tomato'),
      it('', '', 'Otoshi charge, per person', '¥440', 'Charges', '', '', 'Tabelog.', 'otoshi'),
    ] }, {
    cuisine: '「野菜ソムリエのお店」の、町家の個室で野菜を味わう居酒屋 (食べログ、2025〜2026年の口コミ)・約12種の旬の野菜のせいろ蒸し、味噌、塩、胡麻だれの3種のたれで900円、職人の麻婆豆腐700円、シャーベットを添えた丸ごとトマト640円 (2026年7月)・白味噌のもつ鍋、白胡麻豆腐などの前菜が付く鍋のコース (2025〜2026年)・焼きなす、筍の天ぷら、焼売、蓮根の揚げ物、カマンベールやモッツァレラのフライ、タンと野菜の炒め物、豚の角煮、鶏だしのそば (2025〜2026年)・ハートランドの生、黒胡麻焼酎、クラフトビール、果実酒 (2025年5月)',
    neighborhood: '御池の北の木屋町。京都市役所前駅から徒歩2分',
    gf_detail: '要確認。食べログにグルテンフリー対応の記載はあるが、口コミの料理には天ぷら、蓮根やカマンベールの揚げ物、焼売、鶏だしのそば、白味噌のもつ鍋があり、どれがグルテンフリーかは書かれていない (食べログ、2025〜2026年の口コミ)。',
    vegan_detail: '要確認。食べログにヴィーガン・ベジタリアン対応の記載があり、野菜中心のメニュー (旬の野菜のせいろ蒸し、丸ごとトマト) だが、どれが植物性のみで出汁を使わないかは書かれていない (食べログ、2025〜2026年の口コミ)。',
    notes: '[居酒屋・木屋町御池、町家の個室で野菜] 御池のすぐ北の木屋町、町家の半個室で野菜を味わう落ち着いた居酒屋。2009年から。まずは十数種の旬の野菜のせいろ蒸しと3種のたれ (900円)、冷たい丸ごとトマト、名物の麻婆豆腐を。宴会には白味噌のもつ鍋のコース。注文はQRで、英語・中国語メニューあり。先付け料440円。2026年6月には失礼なスタッフがいたという声も、10月の常連はあたたかい店主を称える。',
  });
}

// ================================================================ 亀甲屋
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26003318/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.kyo-kikkoya.com';
  const H = day(['17:00', '22:00']);
  put({
    id: 'kyoto_kikkouya_takakura', name: '亀甲屋 (Kikkouya)', category: 'OMNI',
    lat: 35.01028, lng: 135.762594, cuisine_type: 'tofu',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Pulled yuba with a dipping sauce and soy, shabu-shabu, obanzai, nama-fu (wheat gluten), tempura and fried dishes; no gluten information (Tabelog; 2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The yuba pot is soy milk set with nigari into tofu, and there are vegetable obanzai, but the sauces and shabu broth are not described for dashi (Tabelog; 2025–2026 reviews).',
    hours_raw: '17:00–22:00 (food L.O. 21:00); closed Wednesday and irregularly (Tabelog). Reservations accepted; same-day booking sometimes possible (Tabelog; December 2025). Seat charge ¥390 with an otoshi (Tabelog, original お席料 (付だしつき)); one drink per person (May 2025). Cards: VISA, Master, JCB; no e-money or QR (Tabelog). 18 seats: 8 at the counter, 10 at tables (Tabelog). Non-smoking; free Wi-Fi; English menu and English-speaking staff; children welcome (Tabelog). In a machiya — 70 years old per one review, over 100 per another — on Takakura south of Oike, 5 min from Karasuma-Oike Stn exit 3-1 (Tabelog; August 2025; June 2026). Opened 29 May 1989 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Takakura south of Oike — 5 min from Karasuma-Oike Stn',
    cuisine: 'Kyoto dishes and obanzai with local sake in a machiya (Tabelog shop text; 2025–2026 reviews) · hikiage yuba: soy milk warmed over a candle, pull the skins with a skewer, then set the rest with nigari into oboro tofu (2025–2026) · shabu-shabu of Kyoto Tanba beef and mochi pork in Kyo-bancha dashi, as a course or from one serving (Tabelog shop text; August 2025) · yuba ankake rice; chirimen-sansho rice; three-colour rice (2025–2026) · colourful nama-fu grilled with olive oil; fried taro; sawara Saikyo-yaki; potato salad; mizu-nasu with olive oil and prosciutto; octopus with Tosa vinegar; beef tendon in demi-glace; fried mochi pork; sayori sashimi (2025–2026) · Kyoto sake (including Eikun), seasonal sake, domestic wine, kokuto shochu, fruit liqueurs; Kyo-bancha (Tabelog; 2025)',
    website: SITE, gmaps: gm('亀甲屋 京都 高倉御池'), menu_url: null,
    notes: '[Kyoto dishes · Karasuma-Oike, pull your own yuba] A long-running (since 1989) counter-and-tables restaurant in an old machiya on Takakura, where the signature is hikiage yuba: you lift skins from soy milk warming over a candle, then the staff set the rest into tofu. Around it, Kyoto obanzai, grilled nama-fu, Tanba-beef or mochi-pork shabu-shabu and yuba-ankake rice, with plenty of Kyoto sake. Not cheap for the portions, some say. ¥390 seat charge; closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Tabelog gives the opening as 29 May 1989; a June 2025 visitor arrived on the 36th anniversary, with flowers at the entrance. Several reviewers return every year.',
      philosophy: 'Traditional dishes from carefully chosen Kyoto ingredients in a modern machiya (Tabelog shop text).', specialty: 'Hikiage yuba; Kyo-bancha shabu-shabu.',
      anecdotes: [
        { text: 'An August 2026 parent brought a high-school daughter who wanted to make yuba; the daughter asked for seconds of the potato salad.', source: R + 'B533292516/' },
        { text: 'A June 2025 business traveller enjoyed pulling yuba but felt the course small and the value short of the price.', source: R + 'B510068086/' },
        { text: 'An August 2025 couple who come every year found the usual Eikun sold out and shared about six go of sake.', source: R + 'B469812482/' },
      ],
      japanese_sources_summary: '食べログ: 亀甲屋、日本料理・豆腐料理・しゃぶしゃぶ、中京区高倉通御池下ル亀甲屋町601、烏丸御池駅3-1番出口から徒歩5分、17:00〜22:00 (料理L.O.21:00)、水曜・不定休、予約可、お席料 (付だしつき) 390円、カード (VISA、Master、JCB)、18席 (カウンター8、テーブル10)、禁煙、Wi-Fi、英語メニュー・英語のスタッフ、子ども可、1989年5月29日オープン。店の紹介: 京町家で京の食材の料理、引き上げ湯葉、Kyo-Tanba の牛ともち豚のしゃぶしゃぶ (Kyo-bancha の出汁)、京都の地酒、季節の酒、国産ワイン、黒糖焼酎、果実酒。口コミ (2025〜2026年、英語): 1ドリンク制、湯葉のあんかけご飯、ちりめん山椒ご飯、彩り生麩のオリーブオイル焼き、鰆の西京焼き、ポテトサラダ、水なすと生ハム、牛すじのデミグラス煮、Eikun、36周年。',
      confidence: 'medium', sources: [TB, SITE, R + 'B141062631/', R + 'B469812482/', R + 'B506711989/', R + 'B510068086/', R + 'B512906622/', R + 'B515385366/', R + 'B517964874/', R + 'B523428740/', R + 'B530061368/', R + 'B533292516/'] },
    cultural_comfort: { level: 'english', note: 'English menu and English-speaking staff; ¥390 seat charge; one drink each.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区高倉通御池下ル亀甲屋町601',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.01028, 135.762594); cross-checked: GSI 京都府京都市中京区亀甲屋町601番地 (lot) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No menu or dish prices read; seat charge from Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Hikiage yuba pot (pull your own yuba, then oboro tofu)', '', 'Signature', 'ask', 'ask', '2025–2026; price not given.', 'hikiage_yuba'),
      it('', '', 'Seat charge with otoshi', '¥390', 'Charges', '', '', 'Tabelog.', 'seat_charge'),
    ] }, {
    cuisine: '京町家で味わう京の料理とおばんざいと地酒 (食べログの店紹介、2025〜2026年の口コミ)・引き上げ湯葉: ろうそくで温めた豆乳から竹串で湯葉をすくい、残りはにがりでおぼろ豆腐に (2025〜2026年)・Kyo-Tanba の牛ともち豚のしゃぶしゃぶを Kyo-bancha の出汁で、コースか1人前から (食べログの店紹介、2025年8月)・湯葉のあんかけご飯、ちりめん山椒ご飯、三色ご飯 (2025〜2026年)・彩り生麩のオリーブオイル焼き、里芋の揚げ物、鰆の西京焼き、ポテトサラダ、水なすのオリーブオイルと生ハム、たこの土佐酢、牛すじのデミグラス煮、もち豚の揚げ物、さよりの造り (2025〜2026年)・京都の地酒 (Eikun など)、季節の酒、国産ワイン、黒糖焼酎、果実酒、Kyo-bancha (食べログ、2025年)',
    neighborhood: '御池の南の高倉通。烏丸御池駅から徒歩5分',
    gf_detail: '要確認。たれと醤油で食べる引き上げ湯葉、しゃぶしゃぶ、おばんざい、生麩 (小麦グルテン)、天ぷらや揚げ物。グルテンの情報はない (食べログ、2025〜2026年の口コミ)。',
    vegan_detail: '要確認。湯葉の鍋は豆乳をにがりで豆腐にし、野菜のおばんざいもあるが、たれやしゃぶしゃぶの出汁の説明はない (食べログ、2025〜2026年の口コミ)。',
    notes: '[京料理・烏丸御池、自分ですくう湯葉] 1989年から続く、高倉通の古い町家のカウンターとテーブルの店。名物は引き上げ湯葉で、ろうそくで温まる豆乳から湯葉をすくい、残りは店の人が豆腐に仕立てる。ほかに京のおばんざい、生麩の焼き物、Kyo-Tanba の牛ともち豚のしゃぶしゃぶ、湯葉あんかけご飯、京都の地酒もたっぷり。量の割に高めという声も。席料390円、水曜休み。',
  });
}

// ================================================================ 野菜酒場あしおと
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26032592/'; const R = TB + 'dtlrvwlst/';
  const H = day(['16:30', '22:30']);
  put({
    id: 'kyoto_yasai_sakaba_ashioto', name: '野菜酒場あしおと (Yasai Sakaba Ashioto)', category: 'OMNI',
    lat: 35.002027, lng: 135.763479, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Creative vegetable and fish dishes with house sauces; fried items (lotus root with mentaiko in seaweed tempura, rare-fried tuna) and a tempura-anago clay-pot rice are not gluten-free (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Vegetables lead the menu, but most dishes pair the vegetables with fish, prosciutto or dashi, and the clay-pot rice is finished with broth (2026 reviews).',
    hours_raw: '16:30–22:30 daily; irregular closures (Tabelog). Reservations recommended — often fully booked; two-hour limit (enter at 21:00, leave by 22:30); changes by the day before (Tabelog; 2026 reviews). Cash only (Tabelog). Seat charge ¥500 including tax, waived with two drinks (Tabelog, original text). 30 seats: 6 at the counter, 24 at tables, with tables for two up a steep stair on the second floor (Tabelog; July–September 2026). Non-smoking; English menu (Tabelog). On Sakaimachi south of Ayanokoji, 5 min from Shijo Stn (Tabelog). Opened 13 June 2019 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Sakaimachi south of Ayanokoji — 5 min from Shijo Stn',
    cuisine: 'Creative vegetable izakaya pairing seasonal vegetables with fish and unusual sauces (2026 reviews) · onion Caesar salad with prosciutto; wild kanpachi from Ehime simmered with long eggplant in sesame soy; rare-fried yokowa tuna from Tokushima with chive sauce; fried Tokushima lotus root with mentaiko and nori tempura (June–September 2026) · marinated sweet shrimp, tuna with vinegar miso (September 2026) · clay-pot rice to finish — burdock with tempura anago, or eel — served last with broth poured over (July–September 2026) · sake and shochu (Tabelog)',
    website: null, gmaps: gm('野菜酒場あしおと 京都'), menu_url: null,
    notes: '[Izakaya · Shijo-Sakaimachi, vegetables and clay-pot rice] A busy, cheerful izakaya off Ayanokoji where vegetables meet fish in unexpected pairings — kanpachi with eggplant in sesame soy, lotus root fried with mentaiko, a sweet-onion Caesar with prosciutto — and everyone saves room for the clay-pot rice (burdock and tempura anago, finished with broth). Seats are close; book ahead; two-hour limit. Cash only; ¥500 seat charge unless you have two drinks.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Tabelog gives the opening as 13 June 2019. An October 2026 reviewer heard of a sister restaurant nearby.',
      philosophy: null, specialty: 'Burdock and tempura-anago clay-pot rice.',
      anecdotes: [
        { text: 'An August 2026 visitor was charmed to find the chopstick rest was a dried chilli.', source: R + 'B534198693/' },
        { text: 'Four friends in September 2026 found a pot for three more than enough for four, finished as rice with broth.', source: R + 'B536201366/' },
        { text: 'A September 2026 diner found the tables a little too close together.', source: R + 'B535385573/' },
      ],
      japanese_sources_summary: '食べログ: 野菜酒場あしおと、居酒屋、下京区堺町通綾小路下ル永原町153-14、四条駅から徒歩5分、毎日16:30〜22:30、不定休、予約可、2時間制、現金のみ、席料税込500円 (ドリンク2杯で無し)、30席 (カウンター6、テーブル24)、禁煙、英語メニュー、2019年6月13日オープン。口コミ (2026年、英語): 玉ねぎのシーザーサラダと生ハム、Ehime の天然かんぱちと長なすの胡麻醤油煮、Tokushima のよこわのレアフライとニラだれ、Tokushima の蓮根と明太子の磯辺揚げ、甘えびの漬け、まぐろの酢味噌、ごぼうと穴子天の土鍋ご飯 (最後に出汁)、鰻の土鍋ご飯、唐辛子の箸置き、2階は急な階段、近くに姉妹店。',
      confidence: 'medium', sources: [TB, R + 'B529762070/', R + 'B530982788/', R + 'B532307669/', R + 'B534198693/', R + 'B535385573/', R + 'B536201366/', R + 'B536203402/', R + 'B536548257/', R + 'B537522151/', R + 'B538580348/'] },
    cultural_comfort: { level: 'english', note: 'English menu; cash only; ¥500 seat charge unless two drinks; two-hour limit.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区堺町通綾小路下ル永原町153-14',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.002027, 135.763479); cross-checked: GSI 京都府京都市下京区永原町153番地 (lot) 21m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No menu or dish prices read; seat charge from Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Clay-pot rice with burdock and tempura anago', '', 'Rice', 'no', 'no', 'September 2026; price not given.', 'gobo_anago_kamameshi'),
      it('', '', 'Seat charge (waived with two drinks)', '¥500', 'Charges', '', '', 'Tabelog.', 'seat_charge'),
    ] }, {
    cuisine: '旬の野菜と魚を意外なたれで合わせる創作の野菜居酒屋 (2026年の口コミ)・玉ねぎのシーザーサラダと生ハム、Ehime の天然かんぱちと長なすの胡麻醤油煮、Tokushima のよこわのレアフライとニラのたれ、Tokushima の蓮根と明太子の磯辺揚げ (2026年6〜9月)・甘えびの漬け、まぐろの酢味噌 (2026年9月)・締めの土鍋ご飯、ごぼうと穴子天か鰻、最後に出汁をかけて (2026年7〜9月)・日本酒、焼酎 (食べログ)',
    neighborhood: '綾小路の南の堺町通。四条駅から徒歩5分',
    gf_detail: '要確認。オリジナルのたれの創作の野菜と魚の料理。蓮根と明太子の磯辺揚げ、よこわのレアフライ、穴子天の土鍋ご飯はグルテンフリーではない (2026年の口コミ)。',
    vegan_detail: '要確認。野菜が主役だが、多くの料理は魚、生ハム、出汁と合わせ、土鍋ご飯も出汁で仕上げる (2026年の口コミ)。',
    notes: '[居酒屋・四条堺町、野菜と土鍋ご飯] 綾小路の南のにぎやかで明るい居酒屋。野菜と魚を思いがけない組み合わせで、かんぱちと茄子の胡麻醤油、蓮根と明太子の揚げ物、甘い玉ねぎのシーザーに生ハム。誰もがお腹をあけておくのは土鍋ご飯 (ごぼうと穴子天、最後に出汁)。席は近め、予約がおすすめ、2時間制。現金のみ、ドリンク2杯でなければ席料500円。',
  });
}

// ================================================================ センティード
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26019446/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['07:00', '15:00']); const SA = day(['08:00', '17:00']);
  put({
    id: 'kyoto_sentido_karasuma_oike', name: 'センティード (Sentido)', category: 'OMNI',
    lat: 35.010199, lng: 135.760932, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Coffee with cheese toast, banana bread, whole-grain muffins, cookies and cakes; no gluten information (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Black coffee and Americano suit; the baked goods, lattes and smoothies are not described (2025–2026 reviews).',
    hours_raw: '7:00–15:00 Monday–Friday; 8:00–17:00 Saturday; closed Sunday; hours may change (Tabelog). No reservations; takeaway popular (Tabelog; October 2026). Cards (JCB, AMEX, Diners), e-money and QR accepted (Tabelog). 18 seats: 14 at tables, 4 at the counter (Tabelog). Non-smoking (Tabelog). Self-service water (February 2026). Point card; bring back used grounds for points (September 2026). Just east of Karasuma-Oike, 1 min from Karasuma-Oike Stn exit 3 (Tabelog; September 2026). Opened 2 February 2012 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: SA }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Karasuma-Oike, east side — 1 min from Karasuma-Oike Stn',
    cuisine: 'Coffee shop where you can taste the day’s six coffees before choosing; mostly bright, light roasts — Kenya, Peru, Brazil — with beans to take home (2026 reviews) · Americano, dark roast ¥500; iced blend S ¥500 / L ¥700; small latte, light roast ¥650; banana-coffee smoothie with goji berries (2025–2026) · cheese toast, banana bread, warm whole-grain blueberry muffin ¥500, chestnut cake ¥650, oatmeal-style cookie (2025–2026)',
    website: 'http://goodcoffee.me/coffeeshop/sentido/', gmaps: gm('センティード 京都 烏丸御池'), menu_url: null,
    notes: '[Café · Karasuma-Oike, taste before you order] A small coffee shop just east of Karasuma-Oike, open from 7 a.m. on weekdays, where the staff let you sample the day’s six coffees — mostly bright, light roasts — before you choose. Pair a latte (¥650) with cheese toast, a warm blueberry muffin or chestnut cake. Busy with visitors from abroad and takeaway in the mornings. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Tabelog gives the opening as 2 February 2012. A September 2026 reviewer felt it might be run by a couple.',
      philosophy: null, specialty: 'Coffee tastings; light roasts.',
      anecdotes: [
        { text: 'A March 2026 breakfast guest at 8 a.m. sampled six coffees, had the muffin warmed, and left as the room filled with visitors from abroad.', source: R + 'B524696593/' },
        { text: 'A January 2026 visitor noticed the hot sandwiches mentioned in older reviews seemed to be gone, and had cheese toast and banana bread instead.', source: R + 'B520327069/' },
      ],
      japanese_sources_summary: '食べログ: センティード、カフェ・パン、中京区笹屋町445 日宝烏丸ビル1F、烏丸御池駅3番出口から徒歩1分、月〜金 7:00〜15:00、土 8:00〜17:00、日曜休み、予約不可、カード (JCB、AMEX、Diners)・電子マネー・QR可、18席、禁煙、テイクアウト、2012年2月2日オープン。口コミ (2025〜2026年、英語): 6種のコーヒーを試飲できる、浅煎りが多い、アメリカーノ (深煎り) 500円、アイスブレンド S 500円 / L 700円、ラテ (浅煎り) 650円、バナナコーヒーのスムージー、チーズトースト、バナナブレッド、全粒粉のブルーベリーマフィン500円、栗のケーキ650円、豆の販売、ポイントカード、海外の客が多い。',
      confidence: 'medium', sources: [TB, R + 'B375669543/', R + 'B516948743/', R + 'B518268219/', R + 'B520327069/', R + 'B522385020/', R + 'B523668419/', R + 'B523911654/', R + 'B524696593/', R + 'B534720030/', R + 'B535132466/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Coffee tastings offered; busy mornings with visitors from abroad.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区笹屋町445 日宝烏丸ビル1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.010199, 135.760932); cross-checked: GSI 京都府京都市中京区笹屋町445番地 (lot) 22m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B524696593/', R + 'B534720030/', R + 'B518268219/'],
    price_note: 'No menu read; prices from 2025–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Americano, dark roast', '¥500', 'Coffee', '', '', 'November 2025.', 'americano'),
      it('', '', 'Iced blend, S / L', '¥500', 'Coffee', '', '', 'August 2026; L ¥700.', 'iced_blend'),
      it('', '', 'Latte, small, light roast', '¥650', 'Coffee', '', 'no', 'March 2026.', 'latte_small'),
      it('', '', 'Whole-grain blueberry muffin', '¥500', 'Baked goods', 'no', 'ask', 'March 2026.', 'blueberry_muffin'),
      it('', '', 'Chestnut cake', '¥650', 'Cakes', 'ask', 'ask', 'November 2025.', 'chestnut_cake'),
    ] }, {
    cuisine: 'その日の6種のコーヒーを試飲してから選べるコーヒー店。明るい浅煎りが中心、ケニア、ペルー、ブラジル、豆の販売も (2026年の口コミ)・深煎りのアメリカーノ500円、アイスブレンド S 500円 / L 700円、浅煎りのラテ (S) 650円、クコの実をのせたバナナコーヒーのスムージー (2025〜2026年)・チーズトースト、バナナブレッド、温めた全粒粉のブルーベリーマフィン500円、栗のケーキ650円、オートミールのようなクッキー (2025〜2026年)',
    neighborhood: '烏丸御池の東。烏丸御池駅から徒歩1分',
    gf_detail: '要確認。コーヒーとチーズトースト、バナナブレッド、全粒粉のマフィン、クッキー、ケーキ。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。ブラックのコーヒーやアメリカーノは合うが、焼き菓子、ラテ、スムージーの材料は書かれていない (2025〜2026年の口コミ)。',
    notes: '[カフェ・烏丸御池、選ぶ前に試飲を] 烏丸御池のすぐ東、平日は朝7時から開く小さなコーヒー店。その日の6種のコーヒー (多くは明るい浅煎り) を試飲してから選べる。ラテ (650円) にチーズトースト、温めたブルーベリーマフィン、栗のケーキを。朝は海外の客とテイクアウトでにぎわう。日曜休み。',
  });
}

save();
