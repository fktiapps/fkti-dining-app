// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 63.
//   Queue run from the osw2 worktree, 2026-11-07. Rest tier, nearest-first (queue.mjs kyoto-missed next rest 2000, lane ids by distance).
//   Rest rule: at least one 2025–26 review and enough sourced detail.
//   - フラッフィーズ カフェ — thin as a place to eat (see the reason; cat-café question raised in the report)
//   + 逆鉾 Sakahoko (chanko-nabe opened 1966 by the 8th Sakahoko, Izutsu-stable recipe; Kiyamachi)
//   + PIZZERIA Brown Blossom (wood-fired Neapolitan pizza in a townhouse off Shijo; run single-handed; since 2022)
//   + 岩焼 先斗町 ことし Iwayaki Pontocho Kotoshi (stone-grilled wagyu and Kyoto lunch sets on the Kamo yuka)
//   - 志津屋 京阪祇園四条店 — chain (earlier 志津屋 rulings)
//   - Bar Toast of the Town — thin
//   - 井筒八ッ橋本舗 京都四條 南座 — large parent (井筒八ッ橋本舗)
//   - 京のお肉処 弘 錦 — chain (弘 group, earlier rulings)
//   + 焼肉ダイニング 大黒戎 先斗町店 Yakiniku Dining Daikoku Ebisu (Kobe-beef yakiniku in a Pontocho townhouse; sister of 大黒戎 in Saiin, which is not in data)
//   None of the four is in data/kyoto.json: grep by id, name and address. Brand names grepped in queue-status.jsonl: rulings followed for 志津屋, 井筒 and 弘.
//   Service charges: ことし 10% plus 5% for private rooms (Tabelog).
//   Remarks about other diners kept only where several reviews agree.
//   Pins: Tabelog /en/ point, cross-checked with GSI only; 逆鉾 offset ~3 m off 深夜めし 雑魚屋 (6 m), ことし ~5 m off 菜味 たき井 (5 m); each now 9 m+ from every pin on main.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-63');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26032005', 'フラッフィーズ カフェ: thin as a place to eat — a breeder-run cat café (Tabelog remarks; balu.jp) whose ground-floor café was, per a November 2026 review, "set to open", with food served only there; no menu or prices on Tabelog. Not drafted; whether cat cafés belong is a question for Greg');
skip('26020653', '志津屋 京阪祇園四条店: a same-name chain — 志津屋 has about 21 Kyoto shops (earlier rulings, e.g. 26005532)');
skip('26037729', 'Bar Toast of the Town: thin — 5 Tabelog reviews, the only 2025–26 one (December 2025) a list of four drinks; no hours or prices published');
skip('26017719', '井筒八ッ橋本舗 京都四條 南座: a counter of the yatsuhashi maker 井筒八ッ橋本舗 — same large-parent ruling as 井筒茶店 (26025006) and イヅツカフェ (26022339)');
skip('26030985', '京のお肉処 弘 錦: the 弘 group (yakiniku-hiro.com) — same ruling as the other 弘 shops (e.g. 26034639); our crawls also hold 京のお肉処 弘 at Daimaru Kyoto, Rakuhoku Hankyu Square and 亰店');

// ================================================================ 逆鉾
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26001195/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.sakahoko.net/';
  const H = day(['17:00', '22:00']);
  put({
    id: 'kyoto_sakahoko_chanko', name: '逆鉾 (Sakahoko)', category: 'OMNI',
    lat: 35.005641, lng: 135.770633, cuisine_type: 'chanko',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The broth is chicken-bone and soy sauce; finishes include udon (official site).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken-bone broth with chicken and garlic meatballs (official site).',
    hours_raw: '17:00–22:00; closing days irregular (official site; Tabelog). Closed for the summer in 2026 until after mid-September (official notice, 24 June 2026). Reservations taken; often full from opening to about 19:00 (Tabelog; 2024–2025 reviews). Cash only — no cards, e-money or QR (official site; Tabelog). 26 seats at tables (Tabelog). Staff cook the hot pot at your table, from the order of ingredients to the finish (official site; 2024–2026 reviews). Take-away and nationwide delivery (official site). On Kiyamachi south of Takoyakushi, 3 min from Kawaramachi Stn exit 5 (official site).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Kiyamachi south of Takoyakushi — 3 min from Kyoto Kawaramachi Stn',
    cuisine: 'Chanko-nabe on the Izutsu-stable recipe, since 1966 (official site) · soppu-nabe of chicken-bone soy broth with house garlic meatballs, chicken and vegetables, with an appetizer, ¥3,950 a person; "umakara" chanko adds a spicy miso blend (official site) · finish with udon or mochi ¥380, zosui ¥640, or the favourite mochi zosui ¥820 (official site) · bottled Kirin or Asahi ¥670; sake from ¥550, Kyoto Tamanohikari among the cold sakes; 逆鉾 imo shochu from ¥590 (official site)',
    website: SITE, gmaps: gm('逆鉾 ちゃんこ 木屋町'), menu_url: SITE + 'menu/',
    notes: "[Chanko-nabe · Kiyamachi, a sumo wrestler's shop since 1966] Opened in 1966 by the wrestler Sakahoko Yojiro of the Izutsu stable, and still serving its chanko: a chicken-bone and soy broth with garlicky house meatballs, cooked at the table by staff, then finished as mochi zosui. About ¥4,000 a head before the finish; cash only; book ahead in winter.",
    chef_bio: { chef_name: null, roles: ['Current proprietors not named'], origin: null,
      background: 'The official site says the restaurant was opened in Kiyamachi in 1966 by the 8th Sakahoko (逆鉾 與治郎, Sakahoko Yojiro), and still serves the Izutsu-stable chanko introduced by the founder, with a traditional broth and special meatballs; geiko, maiko and kabuki actors have long been guests. A January 2025 reviewer was told by the three women running it that a local took it over when no successor was found.',
      philosophy: 'Every hot pot is made by the staff, from the order of ingredients to the heat and timing, so guests need not lift a finger (official site).',
      specialty: 'Soppu-nabe with garlic chicken meatballs.',
      anecdotes: [
        { text: 'A January 2024 diner arrived at 17:00; by 18:00 the shop was full and turning people away.', source: R + 'B477601764/' },
        { text: 'A February 2025 guest noted a signature of the singer Saburo Kitajima displayed inside.', source: R + 'B500946168/' },
        { text: 'A November 2026 visitor came as the weather turned cold and switched the soy broth to spicy miso halfway.', source: R + 'B538701277/' },
      ],
      japanese_sources_summary: '公式サイト: 京都木屋町のちゃんこ鍋 逆鉾、京都市中京区木屋町通蛸薬師下る下樵木町203-5、阪急河原町駅5番出口から徒歩3分、京阪祇園四条駅3番出口から徒歩4分、17:00〜22:00、不定休、カード不可、全国発送・持ち帰り可、1966年に八代目逆鉾 (逆鉾 與治郎) が開業、芸舞妓や歌舞伎役者も来店、井筒部屋直伝の味、鶏ガラ醤油の出汁、にんにくの効いた特製肉団子、ちゃんこ鍋は全てスタッフが作る。メニュー: ソップ鍋 (付き出し・肉団子・鶏肉・野菜) 1人前3,950円、うま辛ちゃんこ、〆はうどん380円・もち380円・雑炊640円・もち雑炊820円、ビール中瓶670円、熱燗550円、玉乃光、焼酎「逆鉾」590円から。2026年6月24日: 夏季 (9月中頃過ぎ) まで休業。食べログ: 26席、予約可、カード・電子マネー・QR不可。口コミ (2021〜2026年、英語): 女将が鍋を作る、うま辛味噌で味を変える、北島三郎のサイン、三人の女性が切り盛り、地元の人が継いだ、開店から19時ごろまで満席。',
      confidence: 'medium', sources: [SITE, SITE + 'concept/', SITE + 'menu/', SITE + 'information/', SITE + 'news/2026/06/6844.html', TB, R + 'B477601764/', R + 'B497086593/', R + 'B499049193/', R + 'B499884272/', R + 'B500946168/', R + 'B520039520/', R + 'B520490352/', R + 'B538701277/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only; staff cook at the table.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区木屋町通蛸薬師下ル下樵木町203-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (summer-closure notice June 2026) and Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.005663, 135.770649), offset ~3m to clear 深夜めし 雑魚屋 (6m); cross-checked: GSI 京都府京都市中京区下樵木町203番地 (lot) 15m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE + 'menu/'],
    price_note: 'Prices from the official menu page (read 2026-11-07).', last_checked: TODAY, items: [
      it('ソップ鍋', '', 'Soppu-nabe (appetizer, meatballs, chicken, vegetables), per person', '¥3,950', 'Chanko', 'ask', 'no', 'Cooked by staff.', 'soppu'),
      it('うま辛ちゃんこ', '', 'Umakara chanko (soppu broth with spicy miso)', '', 'Chanko', 'ask', 'no', '', 'umakara'),
      it('うどん', '', 'Udon to finish', '¥380', 'Finish', 'no', 'no', '', 'udon'),
      it('雑炊', '', 'Zosui to finish', '¥640', 'Finish', 'ask', 'no', '', 'zosui'),
      it('もち雑炊', '', 'Mochi zosui to finish (most popular)', '¥820', 'Finish', 'ask', 'no', '', 'mochi_zosui'),
      it('', '', 'Bottled beer, medium (Kirin or Asahi)', '¥670', 'Drink', 'no', 'ask', '', 'beer'),
    ] }, {
    cuisine: '1966年からの井筒部屋直伝のちゃんこ鍋 (公式サイト)・鶏ガラ醤油の出汁に特製のにんにく肉団子、鶏肉、野菜のソップ鍋、付き出し付き1人前3,950円、うま辛味噌を加えた「うま辛ちゃんこ」 (公式サイト)・〆はうどん・もち380円、雑炊640円、一番人気のもち雑炊820円 (公式サイト)・瓶ビール (キリン・アサヒ) 670円、日本酒550円から、冷酒に京都の玉乃光、芋焼酎「逆鉾」590円から (公式サイト)',
    neighborhood: '木屋町の蛸薬師下ル。京都河原町駅から徒歩3分',
    gf_detail: '要確認。出汁は鶏ガラと醤油。〆にうどんもある (公式サイト)。',
    vegan_detail: 'ヴィーガン不可。鶏ガラの出汁に鶏肉とにんにくの肉団子 (公式サイト)。',
    notes: '[ちゃんこ鍋・木屋町、1966年からの力士の店] 井筒部屋の力士、八代目逆鉾 (逆鉾與治郎) が1966年に開いた店。今もそのちゃんこ: 鶏ガラ醤油の出汁ににんにくの効いた特製肉団子、スタッフがテーブルで炊いてくれ、〆はもち雑炊。〆の前で1人4,000円ほど。現金のみ、冬は予約を。',
  });
}

// ================================================================ PIZZERIA Brown Blossom
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26037501/'; const R = TB + 'dtlrvwlst/';
  const D = day(['17:30', '22:00']), WE = day(['11:30', '15:00'], ['17:30', '22:00']);
  put({
    id: 'kyoto_pizzeria_brown_blossom', name: 'PIZZERIA Brown Blossom', category: 'OMNI',
    lat: 35.00246277787309, lng: 135.76593451033247, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: wood-fired wheat-dough pizza (Tabelog; reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The marinara is tomato-based with no cheese listed; other pizzas carry mozzarella or prosciutto (Tabelog menu).',
    hours_raw: 'Monday and Wednesday–Friday 17:30–22:00 (last order 21:30); Saturday, Sunday and holidays 11:30–15:00 (last order 14:30) and 17:30–22:00; closed Tuesday and some other days (Tabelog). Reservations taken; walk-ins often seated (2025 reviews). Cards and e-money accepted (Tabelog). 26 seats: a 1st-floor counter and tables, more tables upstairs by a steep staircase; non-smoking (Tabelog; 2025–2026 reviews). Lunch and dinner menus are the same (August 2026). Pizzas are about 30 cm and cut by yourself (February 2025; February 2026). In a converted townhouse south of Shijo, within walking distance of Kyoto Kawaramachi Stn (Tabelog; January and October 2026).',
    hours: { 0: D, 2: D, 3: D, 4: D, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'South of Shijo, by Ayanokoji (Tabiya-cho) — a walk from Kyoto Kawaramachi Stn',
    cuisine: 'Neapolitan pizza from a wood-fired oven, opened May 2022 (Tabelog) · margherita ¥1,900, mushroom Bismarck ¥2,200 (August 2026); marinara and margherita ¥1,680, quattro formaggi and buffalo margherita ¥1,980, salsiccia e friarielli ¥1,980 (Tabelog menu, January 2025) · green salad ¥780, caprese ¥1,280, buffalo mozzarella with prosciutto ¥1,980 (Tabelog menu) · chocolate cake or cheesecake ¥580, gelato ¥480 · Italian beer about ¥700 (August 2026)',
    website: null, gmaps: gm('PIZZERIA Brown Blossom 京都'), menu_url: TB + 'dtlmenu/',
    notes: "[Pizzeria · off Shijo, wood-fired in a townhouse] A small wood-fired pizzeria in a converted townhouse south of Shijo, run single-handed and turning out big, chewy-crusted Neapolitan pizzas fast. Margherita about ¥1,900; the mushroom Bismarck and quattro formaggi are favourites. Counter downstairs, tables up a steep stair; closed Tuesday.",
    chef_bio: { chef_name: null, roles: ['Owner-pizzaiolo not named'], origin: null,
      background: 'Opened in May 2022 (Tabelog). An August 2026 reviewer describes a pizza shop run by a single person, turning out pizzas remarkably fast from the wood-fired oven at the back; others note the converted townhouse and steep stairs.',
      philosophy: 'Fragrant Neapolitan dough of carefully chosen flour, baked in a wood-fired oven (Tabelog).',
      specialty: 'Wood-fired Neapolitan pizza.',
      anecdotes: [
        { text: 'An August 2026 pair could not believe one person was making the pizzas so quickly.', source: R + 'B533140739/' },
        { text: 'A January 2026 party of four had the shared pizzas sent out one at a time so each arrived hot.', source: R + 'B520499695/' },
        { text: 'A May 2025 walk-in arrived just after 21:00 and still made the 21:30 last order.', source: R + 'B507526918/' },
      ],
      japanese_sources_summary: '食べログ: PIZZERIA Brown Blossom、ピザ・イタリアン、京都市下京区足袋屋町317-2、月・水〜金 17:30〜22:00 (L.O.21:30)、土日祝 11:30〜15:00 (L.O.14:30)・17:30〜22:00、火曜定休、不定休あり、予約可、カード・電子マネー可、26席、禁煙、2022年5月1日オープン、厳選した小麦粉の香り高いナポリピッツァを薪窯で。メニュー (2025年1月): マリナーラ・マルゲリータ1,680円、クアトロフォルマッジ・水牛のマルゲリータ1,980円、サルシッチャとフリアリエッリ1,980円、グリーンサラダ780円、カプレーゼ1,280円、水牛モッツァレラと生ハム1,980円、チョコレートケーキ・チーズケーキ580円、ジェラート480円。口コミ (2025〜2026年、英語): 町家を改装、急な階段、1階カウンター、2階テーブル、30cm以上の大きなピザ、自分で切る、マルゲリータ1,900円、きのこのビスマルク2,200円 (2026年8月)、イタリアビール700円ほど、ひとりで切り盛り、薪窯。',
      confidence: 'low', sources: [TB, TB + 'dtlmenu/', R + 'B499923670/', R + 'B501773535/', R + 'B507526918/', R + 'B511778100/', R + 'B514504712/', R + 'B520499695/', R + 'B523494598/', R + 'B530624885/', R + 'B533140739/', R + 'B534212145/', R + 'B537043090/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cards accepted; steep stairs to the upper floor.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市下京区足袋屋町317-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.002463, 135.765935); cross-checked: GSI 京都府京都市下京区足袋屋町317番地 (lot) 20m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB + 'dtlmenu/', R + 'B534212145/'],
    price_note: 'Margherita and Bismarck prices from an August 2026 review; others from the Tabelog menu (January 2025) and may have risen.', last_checked: TODAY, items: [
      it('', '', 'Margherita', '¥1,900', 'Pizza', 'no', 'no', 'August 2026.', 'margherita'),
      it('', '', 'Mushroom Bismarck', '¥2,200', 'Pizza', 'no', 'no', 'August 2026.', 'bismarck'),
      it('', '', 'Marinara', '¥1,680', 'Pizza', 'no', 'ask', 'January 2025 menu.', 'marinara'),
      it('', '', 'Quattro formaggi', '¥1,980', 'Pizza', 'no', 'no', 'January 2025 menu.', 'quattro'),
      it('', '', 'Green salad', '¥780', 'Antipasti', 'ask', 'ask', '', 'salad'),
      it('', '', 'Gelato', '¥480', 'Dolci', 'ask', 'no', '', 'gelato'),
    ] }, {
    cuisine: '薪窯のナポリピッツァ、2022年5月開業 (食べログ)・マルゲリータ1,900円、きのこのビスマルク2,200円 (2026年8月)、マリナーラとマルゲリータ1,680円、クアトロフォルマッジと水牛のマルゲリータ1,980円、サルシッチャとフリアリエッリ1,980円 (食べログのメニュー、2025年1月)・グリーンサラダ780円、カプレーゼ1,280円、水牛モッツァレラと生ハム1,980円 (食べログのメニュー)・チョコレートケーキ・チーズケーキ580円、ジェラート480円・イタリアビール700円ほど (2026年8月)',
    neighborhood: '四条の南、綾小路のあたり (足袋屋町)。京都河原町駅から歩ける',
    gf_detail: 'グルテンフリー不可。小麦の生地の薪窯ピッツァ (食べログ、口コミ)。',
    vegan_detail: '要確認。マリナーラはトマトでチーズの記載なし。ほかのピザはモッツァレラや生ハム入り (食べログのメニュー)。',
    notes: '[ピッツェリア・四条の南、町家の薪窯] 四条の南、町家を改装した小さな薪窯のピッツェリア。ひとりで切り盛りし、大きくもちもちのナポリピッツァを手早く焼く。マルゲリータは1,900円ほど、きのこのビスマルクやクアトロフォルマッジが人気。1階はカウンター、2階へは急な階段。火曜休み。',
  });
}

// ================================================================ 岩焼 先斗町 ことし
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26005473/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:30', '15:00'], ['17:00', '24:00']), SA = day(['11:30', '15:00'], ['16:00', '24:00']), SU = day(['11:30', '15:00'], ['16:00', '23:00']);
  put({
    id: 'kyoto_iwayaki_pontocho_kotoshi', name: '岩焼 先斗町 ことし (Iwayaki Pontocho Kotoshi)', category: 'OMNI',
    lat: 35.00539, lng: 135.771244, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Stone-grilled meat and seafood, lunch sets with tempura, hot pots, udon and homemade tofu; no gluten information is published (Tabelog; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: wagyu, duck, hamo and seafood sets (reviews).',
    hours_raw: 'Lunch 11:30–15:00 daily; dinner 17:00–24:00 Monday–Friday, 16:00–24:00 Saturday, 16:00–23:00 Sunday and holidays; closing days not fixed (Tabelog). Reservations taken; riverside seats book up (November 2025). Cards accepted; no e-money (Tabelog). 10% service charge, 5% more for private rooms (Tabelog). 56 seats with tatami and private rooms; a Kamo River noryo-yuka from 1 May to 30 September; designated smoking area (Tabelog; 2024 reviews).  On Pontocho north of Shijo, 4 min from Kawaramachi Stn exit 1 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: SA, 6: SU }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Pontocho, north of Shijo — on the Kamo River, 4 min from Kyoto Kawaramachi Stn',
    cuisine: 'Iwayaki — meat, seafood and vegetables grilled on hot stone — with wagyu dishes, by the Kamo River (Tabelog; reviews) · lunch sets with homemade tofu, small side dishes, rice, miso soup and sherbet: hamo set with sashimi, tempura and a small hot pot about ¥2,000 (2024), duck and Kujo-onion curry udon ¥1,890 (June 2024), seafood bowl with tempura and udon ¥2,900 (July 2026) · dinner of wagyu tataki and sashimi, duck hot pot with zosui, about ¥6,000 a head (April 2026)',
    website: null, gmaps: gm('岩焼 先斗町 ことし'), menu_url: TB,
    notes: "[Iwayaki & Kyoto lunch · Pontocho, on the Kamo yuka] A long-running Pontocho restaurant with a summer yuka over the Kamo, known for stone-grilled meat and good-value lunch sets — hamo, duck curry udon or a seafood bowl with homemade tofu, about ¥2,000–2,900. Dinner runs to wagyu tataki and duck hot pot. 10% service; open to midnight.",
    chef_bio: { chef_name: null, roles: ['Chef not named'], origin: null,
      background: 'Reviewers (2023–2026) describe a long-established Pontocho restaurant facing the Kamo River with a red-themed interior, tatami rooms and a seasonal riverside yuka, serving meat-centred dishes and Kyoto lunch sets.',
      philosophy: null,
      specialty: 'Iwayaki (stone-grilled) meat and seafood.',
      anecdotes: [
        { text: 'A July 2026 family brought a mother with walking difficulties, who realised a dream of riverside dining in Kyoto.', source: R + 'B531504526/' },
        { text: 'A June 2024 diner on the cool yuka had the duck and Kujo-onion curry udon lunch with three side dishes and sherbet.', source: R + 'B486768691/' },
        { text: 'An August 2026 family took a river table at noon in mid-August heat, for the cold beer.', source: R + 'B534606037/' },
      ],
      japanese_sources_summary: '食べログ: 岩焼 先斗町 ことし、フレンチ・ステーキ・創作料理、京都市中京区先斗町通四条上ル松本町163、阪急河原町駅1番出口から徒歩4分、京阪祇園四条駅から徒歩5分、昼11:30〜15:00、夜 月〜金17:00〜24:00・土16:00〜24:00・日祝16:00〜23:00、不定休、予約可、カード可、電子マネー不可、サービス料10%、個室料5%、56席、個室あり、分煙、鴨川納涼床は5月1日〜9月30日、岩焼 (石で焼く魚介・肉・野菜)。口コミ (2023〜2026年、英語): 鴨川に面した老舗、赤を基調にした店内、座敷、鱧鍋御膳2,000円ほど、鱧の刺身・天ぷら・小鍋、手作り豆腐、鴨と九条ねぎのカレーうどんランチ1,890円、海鮮丼と天ぷらとうどん2,900円、和牛のたたき、鴨鍋と雑炊、夜は1人6,000円ほど、床の席は予約で埋まる。',
      confidence: 'low', sources: [TB, R + 'B482366451/', R + 'B483250419/', R + 'B485009888/', R + 'B486768691/', R + 'B486814708/', R + 'B494825503/', R + 'B516502757/', R + 'B526209359/', R + 'B531504526/', R + 'B534273806/', R + 'B534606037/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cards accepted; 10% service; riverside yuka in summer.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区先斗町通四条上ル松本町163',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026. The website on Tabelog (kotoshi-pontcyo.com) did not respond on 2026-11-07.' },
    pin_source: `Tabelog ${TB} (35.005372, 135.771200), offset ~5m to clear 菜味 たき井 (5m); cross-checked: GSI 京都府京都市中京区松本町163番地 (lot) 24m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B482366451/', R + 'B486768691/', R + 'B531504526/'],
    price_note: 'Prices from 2024 and July 2026 reviews; the Tabelog menu dates from 2010.', last_checked: TODAY, items: [
      it('', '', 'Hamo hot-pot lunch set (hamo sashimi, tempura, small hot pot, sides)', '¥2,000', 'Lunch', 'no', 'no', 'About; summer 2024.', 'hamo_gozen'),
      it('', '', 'Duck and Kujo-onion curry udon lunch', '¥1,890', 'Lunch', 'no', 'no', 'June 2024; seasonal.', 'curry_udon'),
      it('', '', 'Seafood bowl lunch with tempura and udon', '¥2,900', 'Lunch', 'no', 'no', 'July 2026.', 'kaisendon'),
    ] }, {
    cuisine: '鴨川沿いの岩焼 (石で焼く肉・魚介・野菜) と和牛料理 (食べログ、口コミ)・手作り豆腐、小鉢、ご飯、味噌汁、シャーベット付きのランチ: 鱧の刺身・天ぷら・小鍋の御膳2,000円ほど (2024年)、鴨と九条ねぎのカレーうどん1,890円 (2024年6月)、天ぷらとうどん付きの海鮮丼2,900円 (2026年7月)・夜は和牛のたたき、刺身、鴨鍋と雑炊で1人6,000円ほど (2026年4月)',
    neighborhood: '先斗町、四条の北。鴨川沿い、京都河原町駅から徒歩4分',
    gf_detail: '要確認。石焼きの肉と魚介、天ぷらのランチ、鍋、うどん、手作り豆腐。グルテンの情報は公開されていない (食べログ、口コミ)。',
    vegan_detail: 'ヴィーガン不可。和牛、鴨、鱧、魚介の料理 (口コミ)。',
    notes: '[岩焼と京のランチ・先斗町、鴨川の床] 夏は鴨川に床が出る先斗町の老舗。石焼きの肉と、お得なランチ: 鱧、鴨のカレーうどん、海鮮丼に手作り豆腐が付いて2,000〜2,900円ほど。夜は和牛のたたきや鴨鍋。サービス料10%、深夜0時まで。',
  });
}

// ================================================================ 焼肉ダイニング 大黒戎 先斗町店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26039505/'; const R = TB + 'dtlrvwlst/';
  const D = day(['17:00', '23:00']), LD = day(['11:30', '15:30'], ['17:00', '23:00']);
  put({
    id: 'kyoto_daikoku_ebisu_pontocho', name: '焼肉ダイニング 大黒戎 先斗町店 (Yakiniku Dining Daikoku Ebisu)', category: 'OMNI',
    lat: 35.00566411736333, lng: 135.77105273770218, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Yakiniku with sauces and salt, yukhoe and rice bowls; no gluten information is published (Tabelog menu; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a yakiniku restaurant (Tabelog).',
    hours_raw: 'Monday–Thursday and the day after a holiday 17:00–23:00 (last order 22:30); Friday–Sunday, holidays and holiday eves also 11:30–15:30 (last order 14:30); open all year (Tabelog). Reservations taken; heavily intoxicated guests may be refused (Tabelog). Cards and PayPay accepted; no e-money (Tabelog). 30 seats: a 6-seat counter downstairs; tables, a sofa seat and two tatami rooms upstairs; heated tobacco only in a designated area (Tabelog). Smartphone ordering and English menu descriptions; many foreign guests (2026 reviews). In a townhouse in an alley off Pontocho north of Shijo, 5 min from Kawaramachi Stn (Tabelog; October 2026).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: LD, 5: LD, 6: LD }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Pontocho–Kiyamachi, north of Shijo — 5 min from Kyoto Kawaramachi Stn',
    cuisine: 'Kobe-beef and wagyu yakiniku in a Pontocho townhouse, opened May 2023 (Tabelog) · special assorted meat platter ¥6,000; thick-cut tongue ¥1,780; kimchi assortment ¥580; the signature small rice bowl with Oita "Ran-ou" eggs ¥1,960 (April 2026) · Kobe beef karubi or loin ¥2,200, Kobe lean ¥1,800, special skirt ¥1,480, horumon platter ¥2,500, sea-urchin and ikura yukhoe ¥1,880 (Tabelog menu, 2023)',
    website: null, gmaps: gm('焼肉ダイニング 大黒戎 先斗町店'), menu_url: TB + 'dtlmenu/',
    notes: "[Yakiniku · Pontocho, Kobe beef in a townhouse] A townhouse yakiniku off Pontocho, sister to Daikoku Ebisu in Saiin, grilling Kobe beef and wagyu at fair prices — the special platter is ¥6,000 — plus a sparkly little rice bowl of Ran-ou egg. Counter downstairs, tatami and sofas upstairs; English menu; open daily, lunch at weekends.",
    chef_bio: { chef_name: null, roles: ['Owner not named'], origin: null,
      background: 'Opened in May 2023 (Tabelog). A Tabelog reviewer notes it as a new Pontocho branch of the Saiin yakiniku 大黒戎; the shop stresses domestic wagyu and a signature small rice bowl made with Oita Ran-ou eggs (Tabelog).',
      philosophy: null,
      specialty: 'Kobe beef yakiniku; Ran-ou egg small rice bowl.',
      anecdotes: [
        { text: 'A March 2026 cherry-blossom walker stumbled on it after Kyoto Gyoen and found Kobe beef at a fair price.', source: R + 'B525193044/' },
        { text: 'An October 2026 parent and daughter ordered salted tongue, thick-cut tongue and skirt several times over in a semi-private room.', source: R + 'B536755450/' },
        { text: 'A September 2026 bar-hopper made it the eighth stop of the night, with imo shochu.', source: R + 'B535574397/' },
      ],
      japanese_sources_summary: '食べログ: 焼肉ダイニング 大黒戎 先斗町店、焼肉・ホルモン、京都市中京区下樵木町203-9、阪急河原町駅から北へ徒歩5分、月〜木・祝翌日 17:00〜23:00 (L.O.22:30)、金土日祝・祝前日 11:30〜15:30 (L.O.14:30)・17:00〜23:00、年中無休、予約可、泥酔の方は入店を断る場合あり、カード・PayPay可、電子マネー不可、30席 (カウンター6、テーブル、ソファ、座敷2)、加熱式たばこのみの喫煙所、2023年5月25日オープン、大分県の蘭王卵の「魅惑の小丼」、国産和牛へのこだわり。メニュー (2023年): 神戸牛カルビ・ロース2,200円、神戸牛赤身1,800円、特上ハラミ1,480円、ホルモン盛り合わせ2,500円、うにといくらのユッケ1,880円。口コミ (2026年、英語): 町家、特選盛り合わせ6,000円、厚切りタン1,780円、キムチ盛り合わせ580円、魅惑の小丼1,960円、スマホで注文、英語の案内、外国からの客が多い、西院の大黒戎の姉妹店。',
      confidence: 'low', sources: [TB, TB + 'dtlmenu/', R + 'B525193044/', R + 'B525673326/', R + 'B525746030/', R + 'B525801358/', R + 'B525890708/', R + 'B526710157/', R + 'B530766216/', R + 'B535574397/', R + 'B536755450/'] },
    cultural_comfort: { level: 'english', note: 'English menu descriptions; smartphone ordering; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区下樵木町203-9',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.005664, 135.771053); cross-checked: GSI 京都府京都市中京区下樵木町203番地 (lot) 22m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B525890708/', R + 'B526710157/', TB + 'dtlmenu/'],
    price_note: 'Platter, tongue, kimchi and rice-bowl prices from April 2026 reviews; others from the Tabelog menu (November 2023).', last_checked: TODAY, items: [
      it('', '', 'Special selection assorted meat platter', '¥6,000', 'Meat', 'ask', 'no', 'April 2026.', 'tokusen'),
      it('', '', 'Thick-cut beef tongue', '¥1,780', 'Meat', 'ask', 'no', 'April 2026.', 'atsugiri_tan'),
      it('', '', 'Small rice bowl with Ran-ou egg', '¥1,960', 'Rice', 'ask', 'no', 'April 2026.', 'kodon'),
      it('', '', 'Kobe beef karubi', '¥2,200', 'Meat', 'ask', 'no', '2023 menu.', 'kobe_karubi'),
      it('', '', 'Kimchi assortment', '¥580', 'Sides', 'ask', 'ask', 'April 2026.', 'kimchi'),
    ] }, {
    cuisine: '先斗町の町家の神戸牛と和牛の焼肉、2023年5月開業 (食べログ)・特選盛り合わせ6,000円、厚切りタン1,780円、キムチ盛り合わせ580円、大分の蘭王卵の名物「魅惑の小丼」1,960円 (2026年4月)・神戸牛カルビ・ロース2,200円、神戸牛赤身1,800円、特上ハラミ1,480円、ホルモン盛り合わせ2,500円、うにといくらのユッケ1,880円 (食べログのメニュー、2023年)',
    neighborhood: '先斗町・木屋町、四条の北。京都河原町駅から徒歩5分',
    gf_detail: '要確認。タレや塩の焼肉、ユッケ、丼。グルテンの情報は公開されていない (食べログのメニュー、口コミ)。',
    vegan_detail: 'ヴィーガン不可。焼肉店 (食べログ)。',
    notes: '[焼肉・先斗町、町家で神戸牛] 先斗町の路地の町家の焼肉店。西院の大黒戎の姉妹店で、神戸牛や和牛を手頃に (特選盛り合わせ6,000円)。蘭王卵のきらきらの小丼も。1階はカウンター、2階に座敷とソファ。英語メニュー、毎日営業、週末は昼も。',
  });
}

save();
