// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo circles) — lane osw10 (circle yotsuya), batch 9.
//   + たいやき わかば Taiyaki Wakaba (taiyaki since 1953, one-by-one irons; Tabelog sweets 100 six times)
//   + ラ・ボーテ La Beaute (20-seat herbal hot-pot and Italian dining bar run by one owner; homemade ice cream)
//   + 北島亭 Kitajima Tei (12-seat classic French, chef Motoyuki Kitajima; Tabelog Bronze 2017–2020, 2026)
//   + 栄進館 Eishinkan (bakery attached to the Eishinkan ryokan; kinako butter bread in rice-flour dough)
//   Chain check. All four are single shops (Wakaba's site lists one shop; La Beaute, Kitajima Tei and Eishinkan one
//   listing each). No skips: the first four non-data entries.
//   None is in data/tokyo.json (grep by name, Tabelog id and address). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, save } = openCitySweep('tokyo-gaps', TODAY, 'osw10-9');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ たいやき わかば
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130902/13000848/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.246.ne.jp/~i-ozawa/'; const TVT = 'https://www.tv-tokyo.co.jp/adomachi/backnumber/20201114/141215.html';
  const H = day(['09:00', '17:00']);
  put({
    id: 'tokyo_taiyaki_wakaba_yotsuya', name: 'たいやき わかば (Taiyaki Wakaba)', category: 'OMNI',
    lat: 35.685996, lng: 139.726882, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the shop lists wheat among the taiyaki allergens (official site). The an-dango of the warm months lists only starch syrup (corn starch) as an allergen, though nothing is called gluten-free; mitarashi dango contains soy sauce with wheat.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The shop\'s allergen list for the taiyaki names only wheat and starch syrup (corn starch), and for the an-dango only starch syrup, so no egg or milk is declared; the filling is the house tsubu-an. Ask whether anything animal-derived goes into the batter or onto the irons.',
    hours_raw: 'Mon, Tue, Thu, Fri, Sat and holidays (other than Wednesday and Sunday) 9:00–17:00; closed Wednesday and Sunday; the first taiyaki come off the irons around 9:15 (official site; Tabelog). Lines most of the day: about 10 at opening, 15–20 with 30–70 minutes\' wait in October 2026 reviews; no advance orders for now because of a staff shortage; no shipping (official site). Cash only (official site; Tabelog). 14 table seats for eating in, with self-service tea (Tabelog; October 2026). Takeaway boxes and bags cost extra (¥80–250 for boxes) (official site).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Wakaba 1-10, 小沢ビル 1F — from Yotsuya-mitsuke toward Shinjuku, the second lane on the left, fourth shop on the right; 4–5 min from Yotsuya Stn',
    cuisine: 'Taiyaki shop since 1953 (official site) · taiyaki ¥250 each: a thin, crisp shell less than a millimetre thick, house tsubu-an packed from head to tail, salty-sweet in the old Edo way, each fish baked one at a time in the shop\'s own irons with "わかば" on the tail (official site; 2026 reviews) · house anko to take home: 300 g ¥600, 600 g ¥1,200, 1 kg ¥1,950 (official site) · April–October: mitarashi or an-dango ¥180 a stick; July–September: kakigori ¥500–800, shiratama azuki ¥500 (official site) · free self-service tea when eating in (October 2026)',
    website: SITE, gmaps: gm('たいやき わかば 四谷'), menu_url: SITE,
    notes: "[Sweets · Yotsuya, taiyaki since 1953] Open since 1953 and often called one of Tokyo's three great taiyaki shops, Wakaba bakes every fish one at a time in its own irons, trims the edges with scissors and fills it to the tail with salty-sweet tsubu-an made the same way since the first owner. The shell is thin and crisp, the filling generous: ¥250 each, best eaten hot at the small tables inside with free tea. The shop's motto was given by the theatre critic 安藤鶴夫: may the taiyaki's tail always hold bean paste. Expect a line any time of day; October 2026 waits ran from 10 to 70 minutes, and one regular felt a newer cook at the irons was slower than the cheerful one before. In summer there is kakigori and from April to October dango. Cash only; closed Wednesdays and Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Open in Yotsuya since 1953 (昭和28年) (official site; TV Tokyo).',
      background: 'Official site: the house motto, "鯛焼きのしっぽにはいつもあんこがありますやうに", was given by the theatre critic 安藤鶴夫; the salty house anko is made "初代から変わらぬ製法" (the same way since the first generation); dough and anko are both made in-house, and each fish is baked in an original mould with the shop name on the tail; registered for invoices; hiring full-time staff. TV Tokyo (アド街ック天国, 14 November 2020): founded 1953, a standard snack for 上智大学 students, anko rested a day, baked in traditional single irons. An October 2026 regular on a sixth visit: "The cheerful craftsman who used to be here is gone, and now there\'s someone less efficient." Tabelog Sweets TOKYO "Tabelog 100" 2018, 2019, 2020, 2022; Japanese sweets TOKYO "Tabelog 100" 2023, 2026.',
      philosophy: '"鯛焼きのしっぽにはいつもあんこがありますやうに" — may there always be bean paste in the taiyaki\'s tail (official site).', specialty: 'Taiyaki; house anko.',
      anecdotes: [
        { text: '"Each piece is carefully grilled by hand, with any excess trimmed off with scissors. Everything is made entirely by hand." — October 2026.', source: R + 'B537740843/' },
        { text: '"I visited on a weekday at 10:00 AM and found a line of 10 people, waiting about 30 minutes… if you order three or more for takeout, there are additional charges for bags or boxes." — October 2026.', source: R + 'B537830939/' },
        { text: '"I arrived 20 minutes before opening and was second in line. I ordered 5 taiyaki with 300g of sweet red bean paste for JPY 1850… Edo-style red bean paste needs to be sweet and salty." — October 2026.', source: R + 'B538294236/' },
      ],
      japanese_sources_summary: '公式サイト: たいやき わかば、演劇評論家安藤鶴夫先生より戴いた「鯛焼きのしっぽにはいつもあんこがありますやうに」を社訓とし、四谷で昭和28年より営業、たいやき1尾250円 (税込)、あんこも生地も自家製、薄い皮に頭からしっぽまでつぶしあんがぎっしり、オリジナルの型、しっぽに「わかば」、あんこ300g 600円・600g 1,200円・1kg 1,950円 (初代から変わらぬ製法の塩気の効いた自家製あんこ)、おだんご (4月〜10月) 各1本180円、かき氷 (7月〜9月) 500〜800円、月・火・木・金・土と水日以外の祝日9:00〜17:00、定休日は水曜日・日曜日、焼き始めは9:00で買えるのは9:15ごろから、人手不足で予約販売を休止中、発送なし、支払いは現金のみ、アレルギー物質: たいやき 小麦・水あめ (コーンスターチ)、あんだんご 水あめ (コーンスターチ)、みたらしだんご 醤油 (大豆・小麦粉)、持ち帰りの箱・手提げは有料。テレビ東京「アド街ック天国」(2020年): 昭和28年創業、上智大学の女学生の定番おやつ、1日寝かせた自家製の餡子、伝統の一丁焼き。食べログ: 食べログ百名店 (スイーツ2018・2019・2020・2022、和菓子・甘味処2023・2026)、14席。口コミ(2026年10月): 30〜70分の行列、はさみで余分を切る、甘じょっぱいあんこ、職人が替わったという声。',
      confidence: 'high', sources: [SITE, TVT, TB, R + 'B458210142/', R + 'B537740843/', R + 'B537752742/', R + 'B537830939/', R + 'B537841708/', R + 'B537987246/', R + 'B538167708/', R + 'B538246609/', R + 'B538281367/', R + 'B538294236/', R + 'B538346220/', R + 'B538388191/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Expect a line; the official menu also names taiyaki in Korean and Chinese; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都新宿区若葉1-10 小沢ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (October 2026 notice) and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.685996, 139.726882); cross-checked: GSI 東京都新宿区若葉一丁目10番地 (lot) 40m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'high', sources: [SITE],
    price_note: 'Prices from the official site (tax included, read November 2026).', last_checked: TODAY, items: [
      it('たいやき', '', 'Taiyaki', '¥250', 'Taiyaki', 'no', 'ask', 'Official site; allergens: wheat, starch syrup (corn starch).', 'taiyaki'),
      it('あんこ 300g', '', 'House anko, 300 g', '¥600', 'Anko', 'ask', 'ask', 'Official site; also 600 g ¥1,200, 1 kg ¥1,950.', 'anko_300'),
      it('あんだんご', '', 'An-dango (April–October)', '¥180', 'Seasonal', 'ask', 'ask', 'Official site; allergen listed: starch syrup (corn starch).', 'an_dango'),
      it('みたらしだんご', '', 'Mitarashi dango (April–October)', '¥180', 'Seasonal', 'no', 'ask', 'Official site; soy sauce (soy, wheat).', 'mitarashi'),
      it('かき氷', '', 'Kakigori (July–September)', '¥500–800', 'Seasonal', 'ask', 'ask', 'Official site.', 'kakigori'),
    ] }, {
    cuisine: '1953年からのたい焼き屋 (公式サイト)・たいやき1尾250円: 1ミリもない薄くパリッとした皮に、頭からしっぽまでぎっしりの自家製つぶしあん。江戸風の甘じょっぱさ。オリジナルの型で一尾ずつ焼き、しっぽには「わかば」(公式サイト、2026年の口コミ)・持ち帰りのあんこ: 300g 600円、600g 1,200円、1kg 1,950円 (公式サイト)・4〜10月はみたらしだんごとあんだんご各180円、7〜9月はかき氷500〜800円、白玉あずき500円 (公式サイト)・店内で食べるとお茶はセルフで無料 (2026年10月)',
    neighborhood: '若葉1-10 小沢ビル1F。四谷見附から新宿方面へ、左手2本目の路地を入って右手4軒目。四ツ谷駅から徒歩4〜5分',
    gf_detail: 'グルテンフリーではない。店のたいやきのアレルギー表示に小麦 (公式サイト)。夏場のあんだんごの表示は水あめ (コーンスターチ) だけだが、グルテンフリーとはうたっていない。みたらしだんごの醤油には小麦。',
    vegan_detail: '要確認。たいやきのアレルギー表示は小麦と水あめ (コーンスターチ) だけ、あんだんごは水あめだけで、卵や乳は表示されていない。中身は自家製のつぶしあん。生地や型に動物性のものを使うかは確認を。',
    notes: '[甘味・四谷、1953年からのたい焼き] 1953年から営業し、東京三大たい焼きのひとつとよく言われるわかば。一尾ずつ自前の型で焼き、はさみで縁を整え、初代から変わらない作り方の甘じょっぱいつぶしあんをしっぽまで詰める。皮は薄くパリッと、あんはたっぷりで1尾250円。店内の小さなテーブルで無料のお茶と焼きたてを食べるのがいちばん。社訓は演劇評論家の安藤鶴夫から贈られた「鯛焼きのしっぽにはいつもあんこがありますやうに」。一日中行列ができ、2026年10月の待ち時間は10分から70分。6回目の常連は、以前の明るい職人に比べて新しい焼き手は手際が遅いと感じたという。夏はかき氷、4〜10月はおだんごも。現金のみ、水曜・日曜休み。',
  });
}

// ================================================================ ラ・ボーテ
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130902/13097499/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:30', '14:00'], ['17:00', '23:00']); const SAT = day(['17:00', '23:00']);
  put({
    id: 'tokyo_la_beaute_yotsuya', name: 'ラ・ボーテ (La Beaute)', category: 'OMNI',
    lat: 35.687146, lng: 139.726719, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The hot pots finish as risotto or rice porridge, and lunch is soup, salad and multigrain rice, but appetizers include spring rolls and croquettes and the desserts include pound cake; nothing gluten-free is described.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Over 20 vegetables go into each hot pot, but the broths named are soft-shell turtle with bonito, chicken bone, tomato or basil with meat, fish or seafood, and the lunch soups include clam chowder and chicken; no vegan option is stated.',
    hours_raw: 'Mon–Fri lunch 11:30–14:00 and dinner 17:00–23:00; Sat and holidays dinner 17:00–23:00; closed Sunday (Tabelog). Lunch bookings only for 4 or more or for the lunch hot-pot course; dinner bookings any time (Tabelog). Lunch fills at opening (January 2025). 20 seats: a counter of 6 and four tables; whole-shop hire up to 20; non-smoking (Tabelog). Cards accepted (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: SAT }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yotsuya 2-3-19, 四谷大新ビル 2F, in a back lane — 3 min from Exit 2 of Yotsuya Stn (Namboku Line), 5 min from JR (Yotsuya exit)',
    cuisine: 'Herbal (yakuzen) hot pots with an Italian touch and at least 12 kinds of vegetables, often 20 or more (Tabelog; 2025–26 reviews) · dinner hot pot sets with appetizers and dessert: the "Anti-Aging Nabe" with a tomato-and-herb broth and a basil-and-herb broth, finished as cheese risotto; a beauty hot pot of soft-shell turtle salt broth and spicy chicken-bone broth; a detox hot pot in curry and salt; choose chicken, beef, pork or fish; meatballs with Job\'s tears (2025–26 reviews) · appetizers such as pâté, spring rolls, chickpea croquettes, eggplant tartare; herbal sake and herbal beer · lunch: two herbal soups (e.g. pumpkin clam chowder, burdock) with salad and 14-grain rice, ¥900–1,000; teriyaki pork ¥1,200; rice size free (2025) · the owner\'s own ice creams, from a stock of over 300 recipes, e.g. red wine and fig, brown-sugar coconut (2025–26 reviews)',
    website: null, gmaps: gm('ラ・ボーテ 四谷 薬膳鍋'), menu_url: null,
    notes: "[Hot pot · Yotsuya, herbal hot pots from a one-person kitchen] A calm second-floor room in a Yotsuya back lane where one owner cooks and serves herbal hot pots with an Italian accent: two broths side by side — tomato and basil for the \"Anti-Aging Nabe\", soft-shell turtle and spicy chicken bone for the beauty pot, curry and salt for the detox pot — with twenty-odd vegetables, your choice of meat or fish, and a risotto or porridge to finish. Weekday lunch is a bargain: two herbal soups, salad and multigrain rice for about ¥1,000, and the place fills at opening. Save room for the owner's ice cream, drawn from more than 300 recipes and flavours found on travels, such as red wine and fig. Diners in 2025–26 praise the food and the owner's warmth.",
    chef_bio: { chef_name: null, roles: ['Owner, cooking and serving alone (reviews)'], origin: null,
      background: 'No source names the owner. "Surprisingly, there was only one staff member managing everything" (January 2025); "Although it is run by just one person, the service is prompt" (February 2025); "The owner changes the ice cream flavors daily" (October 2025); "over 300 recipes! The owner has traveled to many countries and uses ingredients discovered during [those] travels in [the] ice cream" (May 2026). Tabelog: herbal ingredients chosen with care to make traditional Chinese medicine easy to enjoy; at least 12 vegetables per hot pot; seasonal hot pots. A March 2025 diner notes the building\'s first floor is Osteria Pinocchio.',
      philosophy: 'To make medicinal cuisine more accessible and delicious (Tabelog).', specialty: 'Herbal hot pots; homemade ice cream.',
      anecdotes: [
        { text: '"For dessert, I chose the owner\'s special ice cream, with about seven flavors to choose from. The red wine and fig ice cream was incredibly delicious." — October 2025.', source: R + 'B516180177/' },
        { text: '"I could choose between large, medium, or small portions of rice at the same price." — January 2025, half-and-half herbal soup lunch.', source: R + 'B500063618/' },
        { text: '"They offer three types of hot pots: medicinal hot pot, beauty hot pot, and detox hot pot." — March 2026.', source: R + 'B524818559/' },
      ],
      japanese_sources_summary: '食べログ: ラ・ボーテ、鍋・イタリアン・ダイニングバー、四谷2-3-19 四谷大新ビル2F、南北線四ツ谷駅2番出口から徒歩3分、JR四ツ谷口5分、月〜金11:30〜14:00・17:00〜23:00、土・祝17:00〜23:00、日曜休み、ランチの予約は4名以上か鍋ランチコースのみ、20席 (カウンター6、テーブル)、貸切20名、禁煙、カード可、イタリアン薬膳鍋「アンチエイジング鍋」、トマトとバジルのスープ、野菜は最低12種。口コミ(2025年1月〜2026年5月): 店主ひとりで営む、薬膳スープ2種のランチ900〜1,000円、14穀米、すっぽんと鶏ガラの美容鍋、カレーと塩のデトックス鍋、締めのリゾットや雑炊、自家製アイスは300種以上のレシピ、薬膳酒。',
      confidence: 'medium', sources: [TB, R + 'B500063618/', R + 'B500518593/', R + 'B501770681/', R + 'B502407583/', R + 'B507675518/', R + 'B509007854/', R + 'B511316494/', R + 'B516180177/', R + 'B520982054/', R + 'B521166820/', R + 'B524818559/', R + 'B530308051/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One person cooks and serves; book dinner; set hot pots make ordering easy.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '東京都新宿区四谷2-3-19 四谷大新ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through May 2026.' },
    pin_source: `Tabelog ${TB} (35.687146, 139.726719); cross-checked: GSI 東京都新宿区四谷二丁目3番地 (lot) 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B500518593/', R + 'B507675518/'],
    price_note: 'Lunch prices from 2025 reviews; dinner hot pot sets not priced in the reviews read.', last_checked: TODAY, items: [
      it('', '', 'Herbal soup lunch, two soups, salad, multigrain rice', '¥900–1,000', 'Lunch', 'ask', 'ask', 'February and May 2025 reviews.', 'yakuzen_lunch'),
      it('', '', 'Teriyaki pork lunch', '¥1,200', 'Lunch', 'ask', 'no', 'May 2025 review.', 'pork_lunch'),
      it('', '', 'Herbal hot pot set (appetizers, hot pot, finish, dessert)', '', 'Dinner', 'ask', 'ask', '2025–26 reviews; about ¥5,000–6,000 per person.', 'nabe_set'),
    ] }, {
    cuisine: 'イタリアンの要素を加えた薬膳鍋。野菜は最低12種、たいてい20種以上 (食べログ、2025〜26年の口コミ)・夜は前菜とデザート付きの鍋のセット: トマトと薬膳、バジルと薬膳の2種のスープの「アンチエイジング鍋」は締めがチーズリゾット。すっぽんの塩と辛い鶏ガラの美容鍋、カレーと塩のデトックス鍋。肉は鶏、牛、豚、魚から。はと麦入りの肉団子 (2025〜26年の口コミ)・前菜はパテ、春巻き、ひよこ豆のコロッケ、なすのタルタルなど。薬膳酒、薬膳ビール・ランチは薬膳スープ2種 (かぼちゃのクラムチャウダー、ごぼうなど) にサラダと14穀米で900〜1,000円、豚の照り焼き1,200円、ご飯の量は同じ値段 (2025年)・店主の自家製アイスは300以上のレシピから。赤ワインといちじく、黒糖ココナッツなど (2025〜26年の口コミ)',
    neighborhood: '四谷2-3-19 四谷大新ビル2F、路地裏。南北線四ツ谷駅2番出口から徒歩3分、JR四ツ谷口から5分',
    gf_detail: '要確認。鍋の締めはリゾットや雑炊、ランチはスープ、サラダ、雑穀ご飯だが、前菜には春巻きやコロッケ、デザートにはパウンドケーキも。グルテンフリーの説明はない。',
    vegan_detail: '要確認。どの鍋にも野菜が20種ほど入るが、スープはすっぽんとかつお、鶏ガラ、肉や魚介入りのトマトやバジル。ランチのスープにもクラムチャウダーや鶏。ヴィーガン対応の説明はない。',
    notes: '[鍋・四谷、ひとりで営む薬膳鍋の店] 四谷の路地裏のビル2階、落ち着いた店で店主がひとりで作って出すイタリアン風の薬膳鍋。2種のスープを並べ、「アンチエイジング鍋」はトマトとバジル、美容鍋はすっぽんと辛い鶏ガラ、デトックス鍋はカレーと塩。20種ほどの野菜に好きな肉か魚、締めはリゾットか雑炊。平日のランチはお得で、薬膳スープ2種とサラダ、雑穀ご飯で1,000円ほど。開店と同時に埋まる。最後は店主のアイスを。300以上のレシピと旅先で見つけた素材から作り、赤ワインといちじくなど。2025〜26年の客は料理と店主の温かさを褒めている。',
  });
}

// ================================================================ 北島亭
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130902/13000945/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:00'], ['18:00', '22:00']);
  put({
    id: 'tokyo_kitajima_tei_yotsuya', name: '北島亭 (Kitajima Tei)', category: 'MOM_AND_POP',
    lat: 35.687851, lng: 139.727013, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. Classic French with bread and butter, a bacon quiche among the amuses, flour-dusted fish, butter and cream sauces, tarts and baked sweets (2026 reviews); nothing gluten-free is described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat, foie gras, fish and shellfish courses with butter and cream.',
    hours_raw: 'Mon and Thu–Sun (and holidays) lunch 11:30–15:00 (last food order 12:30) and dinner 18:00–22:00 (last food order 19:00); closed Tuesday and Wednesday (Tabelog). Reservations by phone; an August 2026 diner was offered a weekday the following month (Japanese review). Service charge 10% (Tabelog). 12 seats at tables; whole-shop hire; non-smoking (Tabelog; September 2026). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). Allow about 3 hours (August 2026).',
    hours: { 0: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yotsuya Sanei-cho 15-2, JHCビル 1F, under a yellow awning — 5–7 min from Yotsuya Stn',
    cuisine: 'Hearty classic French in generous portions (Tabelog; 2026 reviews) · two courses, ¥16,940 (three dishes) and ¥18,150 (four, adding fish), unchanged in price for 12 years per an August 2026 regular: amuses (chilled cucumber soup with mint, bacon quiche, légumes à la grecque), a cold starter from about six (the signature Nemuro uni on cauliflower cream under consommé jelly with junsai; a charlotte of red snow crab wrapped in asparagus; marinated spiny lobster +¥1,210), a hot starter (Hungarian foie gras with corn galette +¥1,210; cèpes Bordelaise; stuffed red pepper with mozzarella and shellfish), fish (Choshi flounder in a potato crust with soupe de poissons sauce), meat from three (Ibaraki wagyu rump with shallot butter, Zao duck with Madeira, Kawamata shamo chicken, lamb), granité, dessert (black-tea pudding with caramel ice cream, Kyoho grape tart), six petits fours · wine pairing, e.g. five glasses ¥10,285 (August 2026); totals about ¥23,000–30,000 a head',
    website: null, gmaps: gm('北島亭 四谷'), menu_url: null,
    notes: "[French · Yotsuya, a classic bistro of big portions under a yellow awning] Behind a faded yellow awning in Yotsuya Sanei-cho, a 12-seat French restaurant that the shop says has been a standout for about a quarter of a century, cooked by chef Motoyuki Kitajima in an unfashionably generous, butter-and-sauce classical style. Courses of three or four dishes (¥16,940 or ¥18,150, the same price for 12 years, says one regular) arrive with amuses, granité, dessert and a box of petits fours, and many diners can't finish: the famous Nemuro sea-urchin consommé jelly, foie gras with corn galette, flounder in a potato crust with a dense fish-soup sauce. 2026 diners loved the cucumber soup, the uni and the wine pairings; others found the sauces rough, the lamb fatty, a fish slightly off and the precision behind the volume, and one regular wonders how long the ageing chef will keep cooking. Book by phone; closed Tuesdays and Wednesdays.",
    chef_bio: { chef_name: 'Motoyuki Kitajima', roles: ['Chef (Tabelog: "Motoyuki Kitajima - A Gourmet Explorer Who Mastered the Essence")'], origin: null,
      background: 'Tabelog (shop text): a French restaurant with a striking yellow-and-blue front, "a standout for nearly a quarter of a century"; the chef wants to "master the essence", avoiding trendy techniques and complex presentation for robust dishes that maximise the ingredients. Tabelog Award Bronze 2017–2020 and 2026; French TOKYO "Tabelog 100" 2021, 2023, 2025. A September 2026 diner calls it one of the "Four Kings of Japanese French Cuisine"; another writes "Given that Chef Kitajima is getting older, I wonder how much longer [the chef] will be active." No source gives the kanji of the chef\'s given name.',
      philosophy: 'To master the essence: no trends, no fuss, maximum flavour from the ingredients (Tabelog).', specialty: 'Uni consommé jelly; foie gras with corn galette; generous classic courses.',
      anecdotes: [
        { text: '「メニューはコースが3品(16940円)・4品(18150円)の2種類…北島亭では12年前から値段が据え置かれていました。」 — August 2026, a return after 12 years.', source: R + 'B112147067/' },
        { text: '"Although it\'s called a \'4-dish\' course, it actually includes four selected dishes along with soup, appetizers, palate cleansers, desserts, and baked sweets… I couldn\'t finish the last baked sweet, so I took it home." — September 2026.', source: R + 'B535886190/' },
        { text: '"The quantity was substantial, something not often seen in recent Tokyo French cuisine… However, I felt that the precision and delicacy of the dishes did not quite match the volume." — September 2026.', source: R + 'B536639394/' },
      ],
      japanese_sources_summary: '食べログ: 北島亭、フレンチ、四谷三栄町15-2 JHCビル1F、四ツ谷駅から徒歩5分、月・木〜日・祝11:30〜15:00 (料理L.O.12:30)・18:00〜22:00 (料理L.O.19:00)、火曜・水曜休み、サービス料10%、12席、禁煙、カード可、食べログアワード Bronze 2017〜2020・2026、フレンチ TOKYO 百名店2021・2023・2025、シェフは Motoyuki Kitajima。口コミ(2026年8月〜10月): コースは3品16,940円と4品18,150円 (12年前から据え置きという声)、きゅうりの冷製スープ、雲丹のコンソメジュレ、紅ズワイガニとアスパラガスのシャルロット仕立てのサラダ、フォアグラのポワレととうもろこしのガレット、平目のじゃがいもづけ焼き、蔵王の鴨のロースト、紅茶のプリン、小菓子6種、量が多い、黄色いテント、仕上げが粗いという声も。',
      confidence: 'medium', sources: [TB, R + 'B112147067/', R + 'B526966939/', R + 'B534334527/', R + 'B534594254/', R + 'B535886190/', R + 'B535894637/', R + 'B535897963/', R + 'B536150224/', R + 'B536639394/', R + 'B537104839/', R + 'B537911047/', R + 'B62481677/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book by phone; choose dishes within the course; shared choices for groups.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都新宿区四谷三栄町15-2 JHCビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (Bronze 2026); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.687851, 139.727013); cross-checked: GSI 東京都新宿区四谷三栄町15番2号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B112147067/', R + 'B62481677/'],
    price_note: 'Course prices from August 2026 reviews (tax included; 10% service on top).', last_checked: TODAY, items: [
      it('', '', 'Course of three dishes (cold starter, hot starter, meat) with amuses, dessert, petits fours', '¥16,940', 'Course', 'ask', 'no', 'August 2026 reviews.', 'course_3'),
      it('', '', 'Course of four dishes (adds fish)', '¥18,150', 'Course', 'ask', 'no', 'August 2026 reviews.', 'course_4'),
      it('', '', 'Supplement: Hungarian foie gras with corn galette', '+¥1,210', 'Course', 'ask', 'no', 'August 2026 reviews.', 'foie_gras'),
      it('', '', 'Wine pairing, five glasses', '¥10,285', 'Drinks', '', '', 'August 2026 review.', 'pairing_5'),
    ] }, {
    cuisine: '量のたっぷりした骨太のクラシックなフレンチ (食べログ、2026年の口コミ)・コースは3品16,940円と、魚料理が加わる4品18,150円。2026年8月の客によれば12年前から値段は据え置き: アミューズ (ミントの香るきゅうりの冷製スープ、ベーコンのキッシュ、野菜のマリネ)、6種ほどから選ぶ冷前菜 (名物の Nemuro の雲丹のコンソメジュレ掛けカリフラワーのクリームとじゅんさい、紅ズワイガニをアスパラガスで巻いたシャルロット仕立てのサラダ、伊勢海老のマリネ +1,210円)、温前菜 (ハンガリー産フォアグラのポワレととうもろこしのガレット +1,210円、セップ茸のボルドー風、赤パプリカのモッツァレラチーズの詰めもの)、魚 (千葉県銚子産平目のじゃがいもづけ焼き スープ・ド・ポワソンのソース)、3種から選ぶ肉 (茨城県産黒毛和牛ランプのステーキ、宮城県産蔵王の鴨のロースト マデラソース、Kawamata の軍鶏、仔羊)、グラニテ、デザート (紅茶のプリン キャラメルアイス添え、Kyoho のタルト)、小菓子6種・ワインのペアリング (たとえば5杯10,285円、2026年8月)。1人2万3千〜3万円ほど',
    neighborhood: '四谷三栄町15-2 JHCビル1F、黄色いテントの下。四ツ谷駅から徒歩5〜7分',
    gf_detail: '予約時に要確認。パンとバター、アミューズのベーコンのキッシュ、粉をはたいた魚、バターや生クリームのソース、タルトや焼き菓子のクラシックなフレンチ (2026年の口コミ)。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではない。肉、フォアグラ、魚介のコースでバターや生クリームも使う。',
    notes: '[フレンチ・四谷、黄色いテントの量たっぷりのクラシック] 四谷三栄町の少し煤けた黄色いテントの奥にある12席のフレンチ。店によれば四半世紀近く第一線を走り、Motoyuki Kitajima シェフが流行に背を向けた、たっぷりのバターとソースのクラシックを作る。3品か4品のコース (16,940円か18,150円、ある常連によれば12年間据え置き) にアミューズ、グラニテ、デザート、小菓子の箱まで付き、食べきれない人も多い: 名物の Nemuro の雲丹のコンソメジュレ、フォアグラととうもろこしのガレット、濃厚なスープ・ド・ポワソンのソースの平目のじゃがいもづけ焼き。2026年の客はきゅうりのスープ、雲丹、ワインのペアリングを絶賛する一方、ソースが粗い、仔羊の脂が多い、魚に少し臭みがある、量に精度が追いついていないという声も。歳を重ねたシェフがいつまで続けるかと案じる常連も。予約は電話で、火曜・水曜休み。',
  });
}

// ================================================================ 栄進館
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130902/13257736/'; const R = TB + 'dtlrvwlst/';
  const H = day(['10:00', '15:00']);
  put({
    id: 'tokyo_eishinkan_bakery_yotsuya', name: '栄進館 (Eishinkan)', category: 'OMNI',
    lat: 35.68887, lng: 139.728117, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A September 2026 diner reports the signature kinako butter bread is made by wrapping kinako butter in a rice-flour dough, but nothing is labelled gluten-free and the shop also bakes croissants, Danish, pizza and other breads in the same kitchen.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the signature bread is filled with Hokkaido cream butter, and the range includes butter breads, egg mayo, sausage and pizza.',
    hours_raw: 'Mon, Tue, Thu, Fri 10:00–15:00; closed Wednesday, Saturday, Sunday and holidays (Tabelog), though an October 2026 diner bought bread on a Saturday afternoon. The kinako butter bread is baked several times a day and other breads sell out by the afternoon (March and September 2026). A free coffee, tea or rooibos with any bread purchase (2025–26 reviews). 6 seats at three small tables (Tabelog; September 2026). E-money and QR such as PayPay; no cards (Tabelog; October 2026). Bakery opened January 2021 (February and September 2026 reviews).',
    hours: { 0: H, 1: H, 3: H, 4: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yotsuya Saka-machi 1-8, at the entrance of the Eishinkan inn on the corner by the Yotsuya 1-chome crossing — 5 min from Yotsuya Stn',
    cuisine: 'Small bakery in the entrance of a long-running inn, sharing the bread served at the inn\'s breakfast (September 2026) · kinako butter bread ¥260 (mini ¥150): organic kinako and Hokkaido cream butter wrapped in rice-flour dough, crunchy outside and molten inside, on sale since January 2021 (2026 reviews) · daily breads such as maple sugar butter, crunchy sugar butter, milk butter ¥250, green-onion salt chicken with lotus root ¥290, egg mayo ¥200, sesame sausage, apple cinnamon, raisin nuts, kinako croissant, strawberry chocolate, almond chocolate Danish, a pizza of the week (2025–26 reviews) · free drink with purchase',
    website: null, gmaps: gm('栄進館 四谷坂町 パン'), menu_url: null,
    notes: "[Bakery · Yotsuya, the inn's kinako butter bread] A tiny bakery in the entrance of the Eishinkan, a long-running inn on the corner of Yotsuya Saka-machi, opened in 2021 to share the bread served at the inn's breakfast with the neighbourhood. The draw is the kinako butter bread, ¥260: organic roasted-soy flour and Hokkaido cream butter wrapped in a rice-flour dough, crunchy on top and molten inside when it comes from the oven several times a day. Daily sweet and savoury breads, a pizza of the week and mini sizes fill the case, and every purchase comes with a free coffee or tea at one of three little tables in the sunlight. Go before lunch for the full range. Open four weekdays, 10:00–15:00.",
    chef_bio: { chef_name: null, roles: [], origin: 'Bakery opened January 2021 in the Eishinkan inn (2026 reviews); the inn: "Our main business, Eishinkan, has been operating at its current location since 1953" (Tabelog); "established in 1935" per a September 2026 review.',
      background: 'No source names the owner or bakers. Tabelog remarks: "Our main business, Eishinkan, has been operating at its current location since 1953." Reviews describe the inn as in business for 87 or 90 years (February and January 2026) and established in 1935 (September 2026); the bakery was opened "with the intention of sharing the bread served at breakfast with the local community" (September 2026). An event stall at Ikebukuro Tobu is mentioned (December 2025).',
      philosophy: 'Sharing the inn\'s breakfast bread with the neighbourhood (September 2026 review).', specialty: 'Kinako butter bread.',
      anecdotes: [
        { text: '"I arrived just in time for the freshly baked bread! The kinako butter inside was still hot and melting, so I was warned to hold it carefully and eat it straight away." — March 2026.', source: R + 'B525284101/' },
        { text: '"This round bread is made by wrapping organic soybean kinako and Hokkaido fresh cream butter in a rice flour dough and baking it." — September 2026.', source: R + 'B535541286/' },
        { text: '"When you buy bread, they offer a complimentary drink, so I enjoyed a warm rooibos tea." — December 2025.', source: R + 'B518795693/' },
      ],
      japanese_sources_summary: '食べログ: 栄進館、パン、四谷坂町1-8、四ツ谷駅から徒歩5分、月・火・木・金10:00〜15:00、水・土・日・祝休み、6席、カード不可、電子マネー・QR 可、テイクアウト、本業の栄進館は1953年から現在地で営業。口コミ(2025年9月〜2026年10月): 旅館の入口のベーカリー、2021年1月から販売のきなこバターパン260円 (ミニ150円)、有機きなことHokkaido の生クリームバターを米粉の生地で包む、日替わりのパン、ピザ、パンを買うとコーヒーや紅茶が無料、午後は品薄、PayPay 可。',
      confidence: 'medium', sources: [TB, R + 'B513071312/', R + 'B516652761/', R + 'B518795693/', R + 'B521495878/', R + 'B522197614/', R + 'B522727099/', R + 'B524473197/', R + 'B525284101/', R + 'B530791201/', R + 'B532158308/', R + 'B535541286/', R + 'B536695562/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Point at the case; free drink offered with purchase.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都新宿区四谷坂町1-8',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.688870, 139.728117); cross-checked: GSI 東京都新宿区四谷坂町1番8号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535541286/', R + 'B521495878/', R + 'B536695562/'],
    price_note: 'Prices from 2026 reviews (tax included).', last_checked: TODAY, items: [
      it('', '', 'Kinako butter bread (rice-flour dough)', '¥260', 'Bread', 'ask', 'no', 'September 2026 review; mini ¥150.', 'kinako_butter'),
      it('', '', 'Milk butter bread', '¥250', 'Bread', 'ask', 'no', 'October 2026 review.', 'milk_butter'),
      it('', '', 'Green-onion salt chicken with lotus root', '¥290', 'Bread', 'ask', 'no', 'April 2026 review.', 'negi_shio_chicken'),
      it('', '', 'Egg mayo', '¥200', 'Bread', 'ask', 'no', 'April 2026 review.', 'egg_mayo'),
    ] }, {
    cuisine: '長く続く旅館の入口の小さなパン屋。旅館の朝食のパンを地域にも (2026年9月)・きなこバターパン260円 (ミニ150円): 有機きなことHokkaido の生クリームバターを米粉の生地で包んで焼き、外はカリッと中はとろり。2021年1月から販売 (2026年の口コミ)・日替わりのパン: メープルシュガーバター、カリカリシュガーバター、ミルクバター250円、ねぎ塩チキンとれんこん290円、たまごマヨ200円、ごまソーセージ、アップルシナモン、レーズンナッツ、きなこクロワッサン、いちごチョコ、アーモンドチョコのデニッシュ、週替わりのピザ (2025〜26年の口コミ)・パンを買うと飲み物が無料',
    neighborhood: '四谷坂町1-8、四谷一丁目の交差点の角の栄進館の入口。四ツ谷駅から徒歩5分',
    gf_detail: '要確認。2026年9月の客によれば名物のきなこバターパンは米粉の生地できなこバターを包むが、グルテンフリーの表示はなく、同じ厨房でクロワッサン、デニッシュ、ピザなども焼く。',
    vegan_detail: 'ヴィーガンではない。名物のパンはHokkaido の生クリームバター入りで、バターのパン、たまごマヨ、ソーセージ、ピザも。',
    notes: '[パン・四谷、旅館のきなこバターパン] 四谷坂町の角、長く続く旅館栄進館の入口にある小さなパン屋。2021年に、旅館の朝食のパンを地域の人にもと始めた。お目当てはきなこバターパン260円で、有機きなことHokkaido の生クリームバターを米粉の生地で包み、一日に何度か焼き上がる。上はカリッと中はとろり。日替わりの甘いパンやおかずパン、週替わりのピザ、ミニサイズがケースに並び、パンを買うと無料のコーヒーや紅茶を日の差す小さなテーブル3つで飲める。全種類そろうのは昼前まで。平日4日だけ10時から15時。',
  });
}

save();
