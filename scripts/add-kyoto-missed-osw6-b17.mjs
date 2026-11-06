// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 17.
//   + Freestyle Italian Restaurant DA CIRO (9-seat creative Italian counter, Gion north of Shijo)
//   + kogamo 京野菜 桜肉 鴨肉 子鴨 (Kyoto duck, horse meat and Kyoto vegetables, Kawaramachi Sanjo)
//   + 鮨 楽味 Sushi Rakumi (Gion Sasaki's 8-seat sushi counter on the Shirakawa)
//   + 近又 Kinmata (kaiseki since 1801 in a registered townhouse, Nishiki area)
//   Same-name counts first (2026-11-05): DA CIRO — one ("Pizzeria da Ciro" in Okazaki is a different shop);
//   子鴨/kogamo — one; 近又 — one; 鮨 楽味 — one, the sushi concept of the small Gion Sasaki group (祇園 さゝ木, 祇園楽味,
//   鮨 楽味, 食ばぁー 楽味 on Tabelog). Two of the group are in data (kyoto_gion_sasaki, kyoto_gion_rakumi); 鮨 楽味 is a
//   different concept at a different address, so it is drafted as a sister concept of a small group.
//   Taken on 2026-11-05: `next core 200` gave DA CIRO 26038918 and kogamo 26025700; `next notable 200` gave DA CIRO again,
//   then 鮨 楽味 26031820 and 近又 26000452. None is in data/kyoto.json: grep by name and address (祇園町北側266 井澤ビル,
//   大黒町46-1, 三吉町332-6, 大日町407) found none. Service charges per Tabelog's Japanese original: DA CIRO
//   「サービス料 ランチ5% ディナー10%」; 鮨 楽味 「コース料金に含まれております」; 近又 「サービス料15％」; kogamo none listed.
//   No shop asks diners not to post it; no remarks on anyone's looks are recorded.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-17');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ DA CIRO
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26038918/'; const R = TB + 'dtlrvwlst/';
  const W = day(['12:00', '15:00'], ['18:00', '22:00']); const S = day(['12:00', '15:00']);
  put({
    id: 'kyoto_da_ciro', name: 'Freestyle Italian Restaurant DA CIRO', category: 'OMNI',
    lat: 35.004077, lng: 135.774862, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking — the restaurant cannot handle dietary needs or allergies raised on the day (Tabelog). Courses include fresh pasta, focaccia, pizza fritta and baked sweets (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as served: vegetable-led courses but with fish, meat, cheese and cured meats in most dishes (2025–26 reviews). Ask when booking.',
    hours_raw: 'Lunch Tue–Sun and holidays from 12:00 (12:00–15:00); dinner Tue–Sat and holidays, starting at 18:00 or 19:00 (to 22:00); no dinner on Sunday; closed Monday (Tabelog). Reservation only; tell the restaurant of any dietary needs or allergies, including companions’, when booking — none can be handled on the day (Tabelog). Courses: lunch ¥7,500 (7 dishes), lunch with five-drink pairing ¥12,700 (non-alcoholic ¥9,900), dinner ¥15,730 (9 dishes) (Tabelog). Service charge 5% at lunch, 10% at dinner (Tabelog, Japanese text). À la carte on two days every two months (July 2026). 9 counter seats on the fifth floor; private hire; non-smoking, smoking space available; cards, e-money and QR (Tabelog). 5 min from Gion-Shijo Stn (Tabelog). Opened 25 April 2023 (Tabelog).',
    hours: { 1: W, 2: W, 3: W, 4: W, 5: W, 6: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion north of Shijo — 5 min from Gion-Shijo Stn',
    cuisine: 'Freestyle Italian courses built on seasonal vegetables, with wine pairings chosen by the owner-chef, a sommelier (Tabelog; May 2026) · lunch ¥7,500 (7 dishes), dinner ¥15,730 (9 dishes), pairings from ¥9,900 non-alcoholic to ¥12,700 at lunch (Tabelog) · 2025–26 dishes: corn soup with corn mini-pizza and corn gelato; horse mackerel carpaccio; fig soup and fig zeppole with prosciutto; Hida beef with zucchini and gorgonzola; Densuke conger eel with corn, beef tongue and black truffle; chicken with a burdock tiramisu; cold pasta with peach, tomato and burrata; Shinshu salmon with pumpkin gnocchi; foie gras terrine monaka (2025–26 reviews) · a final pasta ordered by weight in 10 g steps (May and October 2026) · focaccia, also to take away by pre-order (October 2026) · homemade cola, cream melon soda (2026 reviews)',
    website: 'http://restaurant-daciro.com', gmaps: gm('Restaurant DA CIRO 祇園'), menu_url: TB + 'dtlmenu/',
    notes: "[Creative Italian · Gion, a sommelier-chef's nine-seat counter] A quiet fifth-floor counter north of Shijo where the owner-chef, also a sommelier, builds playful seasonal courses around vegetables — a corn soup served with corn pizza and corn gelato, figs four ways, cold pasta with peach and burrata — then lets you choose the size of the final pasta by the 10 g. Lunch ¥7,500, dinner ¥15,730, with wine or non-alcoholic pairings; 5–10% service. Give allergies when booking. Closed Monday.",
    chef_bio: { chef_name: null, roles: ['Owner-chef and sommelier (unnamed in the sources)'], origin: null,
      background: 'Per Tabelog (the shop’s own text): a freestyle Italian restaurant where the owner-chef combines techniques and ingredients freely, with wines from a specialist shop and pairing as part of the concept. A May 2026 reviewer notes the chef is also a sommelier; reviewers describe the chef as approachable and often at the counter explaining dishes (May and October 2026).',
      philosophy: null, specialty: 'Seasonal vegetable courses; pasta by weight; focaccia.',
      anecdotes: [
        { text: 'An October 2026 diner who could not choose between four white wines was offered two 50 ml pours.', source: R + 'B537228745/' },
        { text: 'A July 2026 diner found the pairing pours only 50 cc and ordered a glass of white instead.', source: R + 'B532817934/' },
        { text: 'A July 2026 regular said à la carte is offered on just two days every two months.', source: R + 'B532636583/' },
      ],
      japanese_sources_summary: '食べログ: イタリアン・イノベーティブ、東山区祇園町北側266 井澤ビル 5F、祇園四条駅から徒歩5分、昼 12:00 スタート (12:00〜15:00、火〜日・祝)、夜 18:00 か 19:00 スタート (〜22:00、火〜土・祝)、日曜は夜なし、月曜休み、完全予約制、アレルギーや苦手なものは予約時に (当日は対応不可)、ランチ7,500円、ペアリング付き12,700円 (ノンアルコール9,900円)、ディナー15,730円、サービス料 ランチ5% ディナー10%、カウンター9席、禁煙、カード・電子マネー・QR 可、2023年4月25日オープン。口コミ (2025年11月〜2026年10月、英語): 野菜中心の創作コース、ソムリエでもあるシェフ、パスタは10g 単位、フォカッチャの持ち帰り、2か月に2日だけのアラカルト、ペアリングは50cc という声。',
      confidence: 'medium', sources: [TB, R + 'B518706509/', R + 'B518838857/', R + 'B520258182/', R + 'B528241416/', R + 'B528353649/', R + 'B529765797/', R + 'B530986879/', R + 'B532636583/', R + 'B532817934/', R + 'B532840569/', R + 'B536385859/', R + 'B537228745/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead and give allergies at booking; set course; cards, e-money and QR accepted.' },
    safety: { ...SAFETY0, staff_allergy_handling: [{ text: 'Dietary restrictions and allergies, including companions’, must be given at booking or before arrival; none can be accommodated on the day.', source: TB, verified: TODAY }] },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側266 井澤ビル 5F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004077, 135.774862); cross-checked: GSI 京都府京都市東山区祇園町北側266番地 (lot) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course prices from the Tabelog set-menu page (tax included); service charge 5% at lunch, 10% at dinner. A July 2026 review paid ¥7,150 for lunch.', last_checked: TODAY, items: [
      it('', '', 'Omakase lunch course (7 dishes)', '¥7,500', 'Lunch', 'ask', 'no', 'Tabelog.', 'lunch_course'),
      it('', '', 'Lunch course with five-drink pairing', '¥12,700', 'Lunch', 'ask', 'no', 'Tabelog; non-alcoholic pairing ¥9,900.', 'lunch_pairing'),
      it('', '', 'Omakase dinner course (9 dishes)', '¥15,730', 'Dinner', 'ask', 'no', 'Tabelog.', 'dinner_course'),
    ] }, {
    cuisine: 'ソムリエでもあるオーナーシェフの、季節の野菜を軸にした自由なイタリアンのコースとワインのペアリング (食べログ、2026年5月)・ランチ7,500円 (7品)、ディナー15,730円 (9品)、ペアリングはノンアルコール9,900円からランチ12,700円 (食べログ)・2025〜2026年の料理: とうもろこしのスープ、とうもろこしのミニピザとジェラート、鯵のカルパッチョ、いちじくのスープと生ハムのゼッポレ、Hida の牛肉とズッキーニとゴルゴンゾーラ、Densuke の穴子ととうもろこしと牛タンと黒トリュフ、鶏とごぼうのティラミス、桃とトマトと burrata の冷製パスタ、Shinshu のサーモンとかぼちゃのニョッキ、フォアグラのテリーヌの最中 (2025〜2026年の口コミ)・締めのパスタは10g 単位で量を選べる (2026年5月・10月)・フォカッチャは予約で持ち帰りも (2026年10月)・自家製コーラ、クリームメロンソーダ (2026年の口コミ)',
    neighborhood: '四条の北の祇園。祇園四条駅から徒歩5分',
    gf_detail: '要確認。予約時に伝えること。当日は食事制限やアレルギーに対応できない (食べログ)。コースには生パスタ、フォカッチャ、pizza fritta、焼き菓子が入る (2025〜2026年の口コミ)。',
    vegan_detail: 'このままではヴィーガン不可。野菜が中心だが、ほとんどの皿に魚、肉、チーズ、生ハムなどが入る (2025〜2026年の口コミ)。予約時に確認を。',
    notes: '[創作イタリアン・祇園、ソムリエのシェフの9席のカウンター] 四条の北、ビルの5階の静かなカウンター。ソムリエでもあるオーナーシェフが、野菜を軸に遊び心のある季節のコースを組む。とうもろこしのスープにとうもろこしのピザとジェラート、いちじくを4皿、桃と burrata の冷製パスタ。締めのパスタは10g 単位で量を選べる。ランチ7,500円、ディナー15,730円、ワインかノンアルコールのペアリングも。サービス料5〜10%。アレルギーは予約時に。月曜休み。',
  });
}

// ================================================================ kogamo 子鴨
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26025700/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '22:00']);
  put({
    id: 'kyoto_kogamo', name: '京野菜 桜肉 鴨肉 子鴨 (kogamo)', category: 'OMNI',
    lat: 35.008505, lng: 135.769899, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Courses include tempura and a soy- or ponzu-seasoned hot pot; grilled duck and horse sashimi are served with condiments and ponzu (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a duck and horse-meat restaurant; the hot pot is cooked with duck (2025–26 reviews).',
    hours_raw: '18:00–22:00 (last food order 21:00); closed Monday (Tabelog). Ingredients are limited, so an early booking or a course is recommended; ask for horse meat when booking, as supply is limited (Tabelog; September 2025). Courses: Kyoto duck salt-grill course ¥7,900, duck hot pot course ¥9,700, horse and duck hot pot course ¥12,900 — the hot pots in autumn and winter (Tabelog). 12 seats at a hinoki counter facing the open kitchen; private hire up to 20; non-smoking; cards and QR, no e-money (Tabelog). Bookings for one are accepted (September 2026). In a small alley off Kawaramachi south of Sanjo; 3 min from Sanjo Stn (Tabelog; January 2026). Opened 13 July 2013 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kawaramachi south of Sanjo — 3 min from Sanjo Stn',
    cuisine: 'Kyoto duck, horse meat (sakura-niku) and Kyoto vegetables at a counter, with sake from Kyoto and Omi and French and Italian wines (Tabelog, shop text) · duck yukhoe, duck breast and tenderloin sashimi, salt-grilled and roast duck, duck soboro rice (2025–26 reviews) · horse sashimi, horse liver sashimi, steak, sakura-don of horse yukhoe on rice ¥1,900 (2024–26 reviews; March 2025) · duck hot pot in a copper pot with Kyoto vegetables, finished as rice porridge with egg (autumn–winter) (February–March 2025) · seasonal salads, vegetable and nama-fu tempura (2025–26 reviews) · lemon beer and dekopon highball ¥980 each (March 2025) · courses ¥7,900–12,900 (Tabelog)',
    website: 'http://ko-gamo.com/', gmaps: gm('子鴨 kogamo 河原町三条'), menu_url: TB + 'dtlmenu/',
    notes: "[Duck & horse meat · Kawaramachi Sanjo, a hinoki counter in an alley] A 12-seat counter tucked off Kawaramachi where the cooks serve Kyoto duck — as yukhoe, sashimi so fresh it barely needs the hot pot, salt-grilled or roasted — alongside tender horse sashimi and liver, with Kyoto vegetables as salad and tempura. In autumn and winter the duck hot pot in a copper pot is the draw. Courses ¥7,900–12,900; ask for horse meat when booking. Solo diners welcome. Closed Monday.",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed in the sources)'], origin: null,
      background: 'Per Tabelog (the shop’s own text): Kyoto vegetables, Kyoto duck and horse meat prepared by chefs specialising in Kyoto cuisine, at a hinoki counter with an open kitchen; opened 13 July 2013. Reviewers note the chef’s care over seasoning and the order of dishes (March 2025) and passion for the ingredients (September 2026).',
      philosophy: null, specialty: 'Kyoto duck; horse sashimi; duck hot pot.',
      anecdotes: [
        { text: 'A November 2024 diner loved the horse liver but found the menu a little limited.', source: R + 'B496602060/' },
        { text: 'A September 2026 solo diner felt unwell mid-course; the staff were kind as the diner left early.', source: R + 'B535749329/' },
        { text: 'A September 2026 diner wished for more dishes unique to the restaurant, as many are simply grilled or in hot pot.', source: R + 'B538124408/' },
      ],
      japanese_sources_summary: '食べログ: 馬肉料理・日本料理・居酒屋、中京区河原町三条下ル大黒町46-1、三条駅から徒歩約3分、火〜日 18:00〜22:00 (料理 L.O. 21:00)、月曜休み、食材に限りがあるため早めの予約かコースを、京鴨の塩焼きコース7,900円、鴨鍋コース9,700円、桜肉と鴨の鍋コース12,900円 (鍋は秋冬)、12席、檜のカウンターとオープンキッチン、貸切20名まで、禁煙、カード・QR 可、2013年7月13日オープン。口コミ (2024年11月〜2026年9月、英語): 鴨のユッケ、鴨の刺身、桜肉の刺身、レバー刺し、銅鍋の鴨鍋と雑炊、京野菜の天ぷら、生麩の天ぷら、馬肉は予約時に伝えると確実、メニューが少ないという声。',
      confidence: 'medium', sources: [TB, R + 'B496602060/', R + 'B501314467/', R + 'B502430226/', R + 'B504162545/', R + 'B514256739/', R + 'B516119441/', R + 'B519104287/', R + 'B521993840/', R + 'B524754537/', R + 'B533316717/', R + 'B535749329/', R + 'B538124408/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book a course online; ask for horse meat when booking; solo diners accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区河原町三条下ル大黒町46-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.008505, 135.769899); cross-checked: GSI 京都府京都市中京区大黒町46番地 (lot) 18m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B502430226/'],
    price_note: 'Course prices from the Tabelog set-menu page (tax included); à la carte and drink prices from a March 2025 review (the duck hot pot course was then ¥9,000).', last_checked: TODAY, items: [
      it('', '', 'Kyoto duck salt-grill course (7 dishes)', '¥7,900', 'Course', 'ask', 'no', 'Tabelog.', 'duck_course'),
      it('', '', 'Duck hot pot course (5 dishes; autumn–winter)', '¥9,700', 'Course', 'ask', 'no', 'Tabelog.', 'duck_nabe_course'),
      it('', '', 'Horse and duck hot pot course (6 dishes; autumn–winter)', '¥12,900', 'Course', 'ask', 'no', 'Tabelog.', 'horse_duck_nabe_course'),
      it('', '', 'Sakura-don (horse yukhoe rice bowl)', '¥1,900', 'À la carte', 'ask', 'no', 'March 2025.', 'sakura_don'),
    ] }, {
    cuisine: '京鴨、桜肉、京野菜をカウンターで。京都と Omi の日本酒、フランスとイタリアのワイン (食べログの店の紹介)・鴨のユッケ、鴨の胸とささみの刺身、塩焼きとローストの鴨、鴨そぼろご飯 (2025〜2026年の口コミ)・桜肉の刺身、レバー刺し、ステーキ、桜肉ユッケ丼1,900円 (2024〜2026年の口コミ、2025年3月)・銅鍋で京野菜と炊く鴨鍋、締めは卵の雑炊 (秋冬) (2025年2〜3月)・季節のサラダ、野菜と生麩の天ぷら (2025〜2026年の口コミ)・レモンビール、デコポンハイボール各980円 (2025年3月)・コース7,900〜12,900円 (食べログ)',
    neighborhood: '三条の南、河原町。三条駅から徒歩3分',
    gf_detail: '要確認。コースには天ぷらと、醤油やポン酢の鍋が入る。鴨の焼き物や桜肉の刺身は薬味とポン酢で (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鴨と馬肉の店で、鍋も鴨で炊く (2025〜2026年の口コミ)。',
    notes: '[鴨と桜肉・河原町三条、路地の檜のカウンター] 河原町から入った12席のカウンター。京鴨をユッケ、鍋に入れるのが惜しいほど新鮮な刺身、塩焼き、ローストで出し、やわらかな桜肉の刺身やレバー刺し、京野菜のサラダと天ぷらも。秋冬は銅鍋の鴨鍋が目当て。コースは7,900〜12,900円、馬肉は予約時に伝えて。一人でも予約できる。月曜休み。',
  });
}

// ================================================================ 鮨 楽味
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26031820/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '21:30']);
  put({
    id: 'kyoto_sushi_rakumi', name: '鮨 楽味 (Sushi Rakumi)', category: 'MOM_AND_POP',
    lat: 35.00673, lng: 135.776051, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Edomae sushi with soy, marinated fish and sauces, plus cooked dishes such as fried sea bream (2025–26 reviews). No gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi omakase of fish and shellfish (2025–26 reviews).',
    hours_raw: 'Two sittings, starting 17:00 and 19:30, about two hours each; closed Sunday and the second and fourth Mondays — ask about holidays (Tabelog). Reservation only; bookings for the month after next open at the start of each month; cancellation charges 50% three days before, 80% two days before, 100% the day before or on the day (Tabelog). Card payment only, no cash; service charge included in the course price (Tabelog, Japanese text). 8 counter seats of a single slab of cypress, with a waiting room and bar upstairs overlooking the river; private hire (Tabelog; October 2025). Non-smoking (Tabelog). On the Shirakawa north of Shijo; 5 min from Sanjo Stn (Tabelog; May 2026). Opened 11 January 2019 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shirakawa, north Gion — 5 min from Sanjo Stn',
    cuisine: 'Edomae sushi with Kyoto dashi techniques from Gion Sasaki, as an omakase of small dishes then nigiri (Tabelog, shop text; 2025–26 reviews) · rice seasoned with both red and white vinegar; fish from Kyoto, Toyosu and Yaizu (Tabelog) · marinated tuna, grilled eel with simmered daikon, abalone jelly in a persimmon, nodoguro and horse-mackerel sashimi, chawanmushi with ikura or shirako, abalone with an abalone-liver risotto, grilled squid tentacles, snow crab with ikura, monkfish liver; lotus root with the gari (2025–26 reviews) · sake and wine with pairing advice (October 2025) · bills about ¥20,000–49,999 a head (2025–26 reviews)',
    website: null, gmaps: gm('鮨 楽味 祇園'), menu_url: null,
    notes: "[Sushi · Gion Shirakawa, Gion Sasaki's sushi counter] An eight-seat cypress counter on the Shirakawa, produced by Gion Sasaki and led by chef Kazuya Nomura, from Toyama. The omakase moves from Kyoto-style small dishes — abalone with its liver risotto, chawanmushi, seasonal sashimi — to Edomae nigiri on red- and white-vinegar rice. A cheerful, chatty counter; on some nights most guests are from abroad (2025). Card only, service included; about ¥20,000–50,000. Two sittings, 17:00 and 19:30.",
    chef_bio: { chef_name: 'Kazuya Nomura', roles: ['Sushi chef (Tabelog, shop text)'], origin: 'Toyama (October 2025 review)',
      background: 'Per Tabelog (the shop’s own text): sushi chefs trained at Gion Sasaki and Sushi Yoshitake; the sushi concept of Gion Sasaki, blending Kyoto dashi with Edomae technique. An October 2025 reviewer says the chef is from Toyama; reviewers describe a cheerful, friendly chef and a lively counter (October 2025 to October 2026).',
      philosophy: 'Per Tabelog (the shop’s own text): "learning from the past to create the new."',
      specialty: 'Edomae sushi with red- and white-vinegar rice.',
      anecdotes: [
        { text: 'An April 2025 diner liked the cooking but found the seasoning slightly salty and the sushi, about seven pieces, a little few for a big appetite.', source: R + 'B504293072/' },
        { text: 'An October 2025 diner found the Akashi sea bream sashimi exquisite but missed explanations of the dishes.', source: R + 'B515828661/' },
        { text: 'A six-time regular looks forward to the lotus root served with the gari on every visit (November 2025).', source: R + 'B478489502/' },
      ],
      japanese_sources_summary: '食べログ: 寿司・海鮮・日本料理、東山区三吉町332-6、三条駅から徒歩5分、2部制 (17:00〜、19:30〜、約2時間)、日曜・第2・第4月曜休み、完全予約制、翌々月の予約は月初から、キャンセル料3日前50%・2日前80%・前日と当日100%、カードのみ (現金不可)、サービス料はコース料金に含む、カウンター8席 (一枚板)、2階に待合、貸切可、禁煙、2019年1月11日オープン、祇園さゝ木の寿司、料理人 Kazuya Nomura、京の出汁と江戸前、赤酢と白酢のシャリ。口コミ (2025年4月〜2026年10月、英語): 白川沿い、Toyama 出身の大将、漬けのまぐろ、鮑と肝のリゾット、茶碗蒸し、明るく気さくな店、塩味がやや強いという声。',
      confidence: 'medium', sources: [TB, R + 'B478489502/', R + 'B504293072/', R + 'B506774535/', R + 'B509496350/', R + 'B515828661/', R + 'B518118553/', R + 'B520592216/', R + 'B521337942/', R + 'B525672460/', R + 'B526155091/', R + 'B530303182/', R + 'B537953363/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book two months ahead at the start of the month; card only; strict cancellation fees.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区三吉町332-6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.006730, 135.776051); cross-checked: GSI 京都府京都市東山区三吉町332番地 (lot) 25m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B520592216/', R + 'B504293072/'],
    price_note: 'No course price found; 2025–26 reviews give bills of about ¥20,000–49,999 a head; service charge included (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Omakase: small dishes and nigiri', 'about ¥20,000–50,000', 'Course', 'ask', 'no', '2025–26 reviews.', 'omakase'),
    ] }, {
    cuisine: '祇園さゝ木の京の出汁の技と江戸前寿司の、つまみから握りへのおまかせ (食べログの店の紹介、2025〜2026年の口コミ)・赤酢と白酢の2種のシャリ。魚は京都、Toyosu、Yaizu から (食べログ)・漬けのまぐろ、焼き穴子と炊いた大根、柿に入れた鮑のジュレ、のどぐろと鯵のお造り、いくらや白子の茶碗蒸し、鮑と肝のリゾット、ゲソ串、ずわい蟹といくら、あん肝。ガリには蓮根も (2025〜2026年の口コミ)・日本酒とワイン、ペアリングの相談も (2025年10月)・1人約20,000〜49,999円 (2025〜2026年の口コミ)',
    neighborhood: '四条の北、白川沿いの祇園。三条駅から徒歩5分',
    gf_detail: '要確認。醤油、漬け、たれを使う江戸前寿司と、鯛のフライなどの料理 (2025〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。魚と貝のおまかせ寿司 (2025〜2026年の口コミ)。',
    notes: '[寿司・祇園白川、祇園さゝ木の寿司カウンター] 白川沿いの、一枚板の8席のカウンター。祇園さゝ木がプロデュースし、Toyama 出身の Kazuya Nomura が握る。鮑と肝のリゾット、茶碗蒸し、季節のお造りなど京風のつまみから、赤酢と白酢のシャリの江戸前の握りへ。明るくにぎやかなカウンターで、海外の客が多い日も (2025年)。カードのみ、サービス料込みで約20,000〜50,000円。17時と19時30分の2部制。',
  });
}

// ================================================================ 近又
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26000452/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '13:30'], ['17:30', '19:00']);
  put({
    id: 'kyoto_kinmata', name: '近又 (Kinmata)', category: 'OMNI',
    lat: 35.004738, lng: 135.766304, cuisine_type: 'kaiseki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free as a whole: tempura is central — the lunch tendon, the sesame-tofu tempura and the counter’s fried "uni bread" — alongside a dashi-and-soy kaiseki (2026 reviews). Ask about a kaiseki without fried dishes.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a kaiseki built on dashi, with fish and wagyu (2026 reviews).',
    hours_raw: 'Lunch 12:00–13:30 and dinner 17:30–19:00 are the last seatings (counter lunch to 13:00, counter dinner from 18:00); closed mainly on Wednesday, irregularly — see the calendar on the official site (Tabelog; official site). Reservations accepted; a booking may be cancelled if the guest cannot be reached 30 minutes after the time (Tabelog). Service charge 15% (Tabelog, Japanese text). Tatami-room lunch kaiseki ¥10,000, ¥15,000 and ¥20,000 for 2–8 (Tabelog); tempura-bowl lunches ¥2,200–5,750 (March 2026); dinners about ¥20,000–60,000 (March 2026). 50 seats: a 9-seat counter and six tatami rooms for 2 to 20 (Tabelog). Non-smoking; cards, IC cards, e-money and QR (Tabelog). Near Nishiki Market; 5 min from Kyoto Kawaramachi Stn (Tabelog; March 2026).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Near Nishiki Market — 5 min from Kyoto Kawaramachi Stn',
    cuisine: 'Kyoto kaiseki since 1801 in a townhouse that is a registered tangible cultural property, with ingredients from Nishiki Market (official site; Tabelog) · tatami-room lunch kaiseki ¥10,000–20,000 with matcha (Tabelog) · counter lunch of tempura bowls ¥2,200–5,750 with red miso soup, the special with conger eel, shrimp, abalone, scallop, sea bream and hamo (March 2026) · sesame-tofu tempura, a house speciality (2026 reviews) · counter-only "uni bread" — fried fish paste topped with sea urchin at the counter (April 2026) · spring 2026: wild vegetables with isaza, white asparagus soup with fresh-shaved bonito, kue sashimi, grilled anago with sansho, black wagyu or strip loin, hojicha dashi chazuke (April 2026) · summer: hamo, Saikyo-grilled sawara, dashimaki (June 2026) · autumn: conger eel shabu-shabu, saury kamameshi (September 2026) · rice from Shiga (March 2026)',
    website: 'https://www.kinmata.com/', gmaps: gm('近又 懐石 錦'), menu_url: TB + 'dtlmenu/',
    notes: "[Kaiseki · Nishiki, an 1801 inn-turned-kaiseki house] A registered-heritage Kyoto townhouse by Nishiki Market that began in 1801 as an inn for medicine merchants from Omi and still serves kaiseki in tatami rooms around a small courtyard garden. Book a private room for a seasonal kaiseki (lunch from ¥10,000), or sit at the 9-seat counter for the theatrical uni bread and hojicha chazuke — or a tempura-bowl lunch from ¥2,200. Eighth-generation family run; 15% service. Mainly closed Wednesday.",
    chef_bio: { chef_name: null, roles: ['Family-run house; seventh- and eighth-generation owners (2026 reviews)'], origin: null,
      background: 'Per the official site: founded in 1801 (Kyowa 1) as an inn for medicine merchants from Omi under the name 近江屋; the fourth-generation 又八 renamed it 近又, from 近 of 近江 and 又 of 又八. Reviewers met the seventh- and eighth-generation owners (March 2026) and heard stories from the eighth generation (August 2026); a June 2026 diner had breakfast there before.',
      philosophy: null, specialty: 'Kyoto kaiseki; sesame-tofu tempura; uni bread.',
      anecdotes: [
        { text: 'A February 2023 diner who had said at booking that raw fish was a problem was served sea bream sashimi; the owner ran after the diner to apologise.', source: R + 'B460613210/' },
        { text: 'A March 2026 diner waited about 50 minutes for a tempura bowl while a course guest was served first.', source: R + 'B525333041/' },
        { text: 'A September 2026 couple, too full to finish, were given the rest of the saury kamameshi as rice balls to take home.', source: R + 'B535048308/' },
      ],
      japanese_sources_summary: '公式サイト (kinmata.com): 創業1801年 (享和元年) の京懐石料理店、登録有形文化財の京町家、近江の国からの薬商人の定宿として始まり、初代又八が「近江屋」として宿を始め、四代目又八の代に「近又」と改名、錦市場の材料、少人数向けのカウンター席「近また」は昼はミニ懐石や天ぷら、夜は天ぷらコースや鉄板焼きを含む料理長の特別コース。食べログ: 日本料理、中京区大日町407、京都河原町駅から徒歩5分、昼 12:00〜13:30・夜 17:30〜19:00 (最終入店、カウンターは昼13:00まで・夜18:00から)、主に水曜不定休、サービス料15％、座敷の昼懐石10,000円・15,000円・20,000円、50席 (カウンター9席と座敷6室)、禁煙、カード・電子マネー・QR 可。口コミ (2023年2月〜2026年9月、英語): 七代目と八代目、天丼のランチ2,200〜5,750円、胡麻豆腐の天ぷら、カウンターの Uni Bread、ほうじ茶の出汁茶漬け、天丼を50分ほど待ったという声。',
      confidence: 'medium', sources: [TB, 'https://www.kinmata.com/', R + 'B460613210/', R + 'B524073887/', R + 'B525333041/', R + 'B526377454/', R + 'B526380366/', R + 'B527338149/', R + 'B529585091/', R + 'B530919067/', R + 'B532732368/', R + 'B534566888/', R + 'B535048308/', R + 'B535988644/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book a tatami room or the counter; staff explain each dish; 15% service charge.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区大日町407',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with a business calendar and Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.004738, 135.766304); cross-checked: GSI 京都府京都市中京区大日町407番地 (lot) 53m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B524073887/'],
    price_note: 'Lunch kaiseki prices from the Tabelog set-menu page (tax included; 15% service charge); tempura-bowl prices from a March 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Tatami-room lunch kaiseki (7 dishes, matcha)', '¥10,000', 'Lunch', 'ask', 'no', 'Tabelog; 2–8 people.', 'lunch_kaiseki_10000'),
      it('', '', 'Tatami-room lunch kaiseki (8 dishes, matcha)', '¥15,000', 'Lunch', 'ask', 'no', 'Tabelog.', 'lunch_kaiseki_15000'),
      it('', '', 'Special Kyoto tempura bowl', '¥5,750', 'Lunch', 'no', 'no', 'March 2026.', 'tokusen_tendon'),
    ] }, {
    cuisine: '1801年からの京懐石。登録有形文化財の京町家で、錦市場の材料を使う (公式サイト、食べログ)・座敷の昼懐石10,000〜20,000円、抹茶付き (食べログ)・カウンターの昼は天丼2,200〜5,750円と赤だし。5,750円の天丼は穴子、海老、鮑、帆立、鯛、鱧 (2026年3月)・名物の胡麻豆腐の天ぷら (2026年の口コミ)・カウンター限定の Uni Bread: 揚げた練り物に目の前で雲丹をのせる (2026年4月)・2026年春: 山菜といさざ、白アスパラの椀に削りたての鰹節、クエのお造り、焼き穴子と山椒、黒毛和牛やサーロイン、ほうじ茶の出汁茶漬け (2026年4月)・夏: 鱧、鰆の西京焼き、だし巻き (2026年6月)・秋: 鱧しゃぶ、秋刀魚の釜飯 (2026年9月)・米は Shiga 産 (2026年3月)',
    neighborhood: '錦市場の近く。京都河原町駅から徒歩5分',
    gf_detail: '全体としてはグルテンフリーではない。昼の天丼、胡麻豆腐の天ぷら、カウンターの揚げた Uni Bread など天ぷらが中心で、出汁と醤油の懐石 (2026年の口コミ)。揚げ物なしの懐石ができるか確認を。',
    vegan_detail: 'ヴィーガン不可。出汁が基本で、魚と和牛を使う懐石 (2026年の口コミ)。',
    notes: '[懐石・錦、1801年の宿から続く懐石] 錦市場の近く、登録有形文化財の京町家。1801年に近江の薬商人の定宿として始まり、今は座敷で懐石を出す。個室で季節の懐石 (昼10,000円から)、9席のカウンターなら目の前で仕上げる Uni Bread やほうじ茶の出汁茶漬け、または2,200円からの天丼のランチ。八代目の家族経営。サービス料15%。主に水曜休み。',
  });
}

save();
