// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first — lane osw3 (Tabelog id mod 4 = 2), batch 8.
//   + ステーキハウス ウイスキーノヴァ Steak House Whisky Nova (dry-aged steaks on the 32nd floor of Centara Grand Hotel Osaka)
//   + とんかつ 豚しゃぶ 樋ぞの Tonkatsu Butashabu Hizono (TOKYO X and Kagoshima kurobuta tonkatsu and shabu-shabu; Shinmachi)
//   + Pane E VINO Porcini 新町 (Shinmachi branch of the Fukushima bakery Pane Porcini)
//   + グランフルーヴ Grand Fleuve (Minami-Horie cake shop since 2013)
//   Lane: the first four ids with id mod 4 = 2 in `queue.mjs osaka next notable 80` (2026-11-01, after batch 7):
//   27136010, 27135310, 27133382, 27070430 (last two digits 10, 10, 82, 30: each = 2 mod 4).
//   None is in data/osaka.json (grep by Tabelog id, name, romaji and address; the two "Porcini" hits in data are a pizza
//   and a ramen, not this group).
//   Chain check. Whisky Nova: one of the restaurants of Centara Grand Hotel Osaka (hotel site); not a chain. Hizono: one
//   shop. Porcini: the Shinmachi branch of Pane Porcini (Fukushima); the Porcini group (porcini.jp) runs a bakery, an
//   Italian taverna, a bar, a latteria and a salumeria, all in Fukushima, plus this shop; none in data; small, kept.
//   Grand Fleuve: one shop. Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw3-8');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ ステーキハウス ウイスキーノヴァ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27136010/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.centarahotelsresorts.com/centaragrand/ja/cgoj/whiskeynova';
  const H = day(['11:30', '14:30'], ['17:30', '22:30']);
  put({
    id: 'osaka_steak_house_whisky_nova_namba', name: 'ステーキハウス ウイスキーノヴァ (Steak House Whisky Nova)', category: 'OMNI',
    lat: 34.660152, lng: 135.502298, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information. Steaks and fish are charcoal-grilled and the sides include potatoes, mushrooms and salads, but courses come with focaccia or brioche and sauces are not described; nothing is called gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a steakhouse; courses are built around dry-aged beef, pork or fish.',
    hours_raw: 'Daily 11:30–14:30 (last order 14:00) and 17:30–22:30 (last order 21:30) (hotel site; Tabelog). Reservations online or by phone; same-day walk-ins found a table (September 2026). Service charge 15% (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 58 seats (hotel site; 56 on Tabelog), private rooms for 4–8, a counter, window seats over the city; non-smoking; smart casual (hotel site; Tabelog). Birthday plates and cakes; a kids\' plate (hotel site; September 2026). Corkage was ¥10,000 for wine (June 2026). On the 32nd floor of the hotel, linked to Namba Station (May 2026). Opened 1 July 2023 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nambanaka 2-11-50, Centara Grand Hotel Osaka 32F — 4 min from Namba Stn (Osaka Metro)',
    cuisine: 'Dry-aged steaks over charcoal with produce from around Osaka (hotel site) · beef aged 2–4 weeks in a dedicated dry-ageing room and seared in a charcoal oven at about 500°C (hotel site) · signature cuts: T-bone, L-bone, sirloin (hotel site); strip loin and fillet (March 2026) · also caviar with house brioche, grilled seasonal fish, charcoal-grilled Caesar salad, an aged-beef burger, a lunch charcoal-grilled sirloin (hotel site) · lunch courses: ¥7,700 a person (October 2026); a September 2026 course of seasonal-leaf salad, Bocchan pumpkin soup, a choice of wood-fired fish (120 g) or domestic sirloin (90 g), two-year-aged potato fries, aged maitake and sorbet; dry-aged pork as a main (September 2026); corn ice cream and a cow-shaped cinnamon cookie · a two-person ¥8,000 course with dining-club perks (June 2026) · a Japanese-whisky-led collection with bottle keep (hotel site); Nova Highball Citrus (May 2026); premium wines · steak knives made by 實光 of Sakai, with a choice of handle (hotel site) · on the 29th of each month some courses are 29% off (hotel site)',
    website: SITE, gmaps: gm('ステーキハウス ノヴァ センタラグランドホテル大阪'), menu_url: SITE,
    notes: "[Steak · Namba, dry-aged beef on the 32nd floor] On the 32nd floor of Centara Grand Hotel Osaka, linked to Namba station, a calm steakhouse with big windows over the city. The beef is dry-aged two to four weeks in its own ageing room and seared in a charcoal oven at around 500°C (hotel site); T-bone, L-bone and sirloin are the signatures, cut with knives made for the restaurant by the Sakai knifesmith 實光. Lunch courses (about ¥7,700 in October 2026) bring salad, soup, a choice of fish or steak and sides that diners rate as highly as the meat, above all the sweet two-year-aged potato fries. The whisky list leans Japanese, with bottle keep. Diners in 2026 praise the view and the birthday touches; one found the steak ordinary for the price and the ¥10,000 corkage steep. 15% service. Open daily for lunch and dinner.",
    chef_bio: { chef_name: null, roles: ['Hotel restaurant team of Centara Grand Hotel Osaka (unnamed)'], origin: null,
      background: 'Per the hotel site: a steakhouse of aged beef and produce from around Osaka, with premium wines, on the 32nd floor overlooking the city; beef dry-aged 2–4 weeks and cooked in a charcoal oven at about 500°C; steak knives specially made by 實光, a Sakai knife maker of more than 110 years, with a choice of persimmon, laurel, oak or cherry handles; a collection centred on Japanese whisky with a bottle-keep service. Opened 1 July 2023 (Tabelog). The Tabelog listing is shop-maintained; the service charge rose from 13% to 15% on 1 January 2024.',
      philosophy: null, specialty: 'Dry-aged T-bone and sirloin; two-year-aged potato fries.',
      anecdotes: [
        { text: '"Two-year aged meikuin potato fries were sweet and delicious." — September 2026, a same-day birthday lunch.', source: R + 'B536423786/' },
        { text: '"We chose both the strip loin and filet, and [the staff] kindly served them on separate plates." — March 2026, a weekend lunch.', source: R + 'B524784319/' },
        { text: '"The corkage fee for wine was JPY 10,000!" — June 2026, a diner who found the steak inferior to other steak restaurants.', source: R + 'B529702999/' },
      ],
      japanese_sources_summary: 'センタラグランドホテル大阪 (公式サイト): ステーキハウス ノヴァ、熟成肉と大阪近郊の食材を味わうステーキハウス、熟成と火入れの技で仕上げたステーキ、厳選したプレミアムワイン、大阪の街を一望する32階、11:30〜14:30 (L.O.14:00)、17:30〜22:30 (L.O.21:30)、スマートカジュアル、58席、T-Bone、L-Bone、サーロイン、キャビアと自家製ブリオッシュ、鮮魚のグリル、炭火グリルシーザーサラダ、熟成ビーフバーガー、キッズプレート、ランチのサーロイン炭火焼き、毎月29日は特定のコースが29%OFF、ドライエイジング専用熟成庫で2〜4週間、約500度の炭オーブン、アニバーサリーケーキ、ジャパニーズウイスキーを中心にボトルキープ、ステーキナイフは創業百十余年の堺包丁の實光が特別に製作、ハンドルはシャム柿・月桂樹・オーク・チェリーから。食べログ (店舗会員): ステーキ・洋食・肉料理、浪速区難波中2-11-50 センタラグランドホテル大阪 32F、サービス料15% (2024年1月1日から)、56席、個室 (4〜8名)、禁煙、夜景、2023年7月1日オープン。口コミ(2026年3月〜10月): 窓からの眺め、ランチのコース7,700円、2年熟成のじゃがいものフライ、Tボーン、誕生日のプレート、持ち込み料1万円、肉はふつうという声も。',
      confidence: 'medium', sources: [SITE, TB, R + 'B469746148/', R + 'B524784319/', R + 'B528732393/', R + 'B528770047/', R + 'B529379144/', R + 'B529702999/', R + 'B535359960/', R + 'B536377977/', R + 'B536423786/', R + 'B537055063/', R + 'B537688793/', R + 'B537711394/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A hotel restaurant; book online through the hotel site. No English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区難波中2-11-50 センタラグランドホテル大阪 32F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Hotel site (current hours and menu) and the shop-maintained Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区難波中二丁目11番50号 (go) 33m (a large hotel parcel); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [SITE, R + 'B537688793/', R + 'B536423786/'],
    price_note: 'Dishes from the hotel site (no prices shown); course prices from 2026 reviews. Service charge 15%.', last_checked: TODAY, items: [
      it('', '', 'Lunch course', '¥7,700', 'Lunch', 'ask', 'no', 'October 2026.', 'lunch_course'),
      it('', '', 'T-bone steak (dry-aged)', '', 'Steaks', 'ask', 'no', 'Hotel site; March and October 2026.', 't_bone'),
      it('', '', 'Sirloin steak (dry-aged)', '', 'Steaks', 'ask', 'no', 'Hotel site.', 'sirloin'),
      it('', '', 'Aged-beef burger', '', 'Mains', 'no', 'no', 'Hotel site.', 'burger'),
      it('', '', 'Two-year-aged potato fries', '', 'Sides', 'ask', 'ask', 'September–October 2026.', 'potato'),
    ] }, {
    cuisine: '炭火で焼く熟成肉のステーキと大阪近郊の食材 (ホテルの公式サイト)・ドライエイジング専用熟成庫で2〜4週間熟成させ、約500度の炭オーブンで焼く (公式サイト)・看板は T-Bone、L-Bone、サーロイン (公式サイト)、ストリップロインとフィレも (2026年3月)・キャビアと自家製ブリオッシュ、鮮魚のグリル、炭火グリルシーザーサラダ、熟成ビーフバーガー、ランチのサーロイン炭火焼き (公式サイト)・ランチのコース: 1人7,700円 (2026年10月)。2026年9月は季節の葉野菜のサラダ、Bocchan かぼちゃのスープ、薪火で焼く魚 (120g) か国産サーロイン (90g)、2年熟成のじゃがいものフライ、熟成まいたけ、ソルベ。メインに熟成豚も (2026年9月)。とうもろこしのアイス、牛の形のシナモンクッキー・ダイニングクラブの特典つきの2人8,000円のコース (2026年6月)・ジャパニーズウイスキー中心の品ぞろえとボトルキープ (公式サイト)、Nova Highball Citrus (2026年5月)、プレミアムワイン・ステーキナイフは堺の實光の特製、ハンドルを選べる (公式サイト)・毎月29日は一部のコースが29%OFF (公式サイト)',
    neighborhood: '難波中2-11-50 センタラグランドホテル大阪 32F。Namba 駅 (Osaka Metro) から徒歩4分',
    gf_detail: '予約時に要確認。グルテンの情報なし。ステーキと魚は炭火焼き、付け合わせはじゃがいも、きのこ、サラダだが、コースにはフォカッチャやブリオッシュがつき、ソースの説明はない。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではありません。ステーキハウスで、コースは熟成牛、豚、魚が中心。',
    notes: '[ステーキ・難波、32階で熟成肉] なんば駅とつながるセンタラグランドホテル大阪の32階、大きな窓から街を見下ろす落ち着いたステーキハウス。牛肉は専用の熟成庫で2〜4週間ドライエイジングし、約500度の炭オーブンで焼く (公式サイト)。看板は T-Bone、L-Bone、サーロインで、堺の刃物の實光がこの店のために作ったナイフで切る。ランチのコース (2026年10月は約7,700円) はサラダ、スープ、魚かステーキ、付け合わせで、付け合わせ、特に甘い2年熟成のじゃがいものフライは肉と同じくらい評判。ウイスキーはジャパニーズ中心でボトルキープも。2026年の口コミでは眺めと誕生日の演出が好評、肉は値段のわりにふつう、持ち込み料1万円は高いという声も。サービス料15%。毎日、昼と夜。',
  });
}

// ================================================================ とんかつ 豚しゃぶ 樋ぞの
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27135310/'; const R = TB + 'dtlrvwlst/'; const SITE = 'https://tonkatsu-butashabu-hizono.com/';
  const WD = day(['11:30', '14:00'], ['18:00', '22:30']); const SA = day(['18:00', '22:30']);
  put({
    id: 'osaka_tonkatsu_butashabu_hizono_shinmachi', name: 'とんかつ 豚しゃぶ 樋ぞの (Tonkatsu Butashabu Hizono)', category: 'OMNI',
    lat: 34.676621, lng: 135.494722, cuisine_type: 'katsu',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tonkatsu and the other katsu are breaded and fried. The shabu-shabu is dipped in a house "soba dashi" made without buckwheat flour and in ponzu (official site), but both are soy-based and the course ends with green-tea soba; nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a pork restaurant (tonkatsu and pork shabu-shabu), with a pork miso soup.',
    hours_raw: 'Mon–Fri lunch 11:30–14:00 (last order 13:30) and dinner 18:00–22:30 (last order 22:00); Sat dinner only; closed Sundays and public holidays, though open on some holidays as announced on Instagram (official site; Tabelog). Book on the official site, which takes priority over other booking sites; late arrivals keep the two-hour slot from the booked time (official site; Tabelog). At dinner one drink per person (soft drinks fine) and a ¥330 appetizer charge with alcohol; no appetizer at lunch (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay) and QR (PayPay, Alipay, WeChat Pay) (Tabelog). 22 seats: an 8-seat counter, tables and a tatami room for 4–6 without a sunken floor; non-smoking; children welcome; takeaway and delivery; English, Chinese and Korean menus (Tabelog). One chef cooks, so food can take time (October 2026). Opened 3 April 2023 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: SA }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinmachi 1-22-19, 桑名ビル 1F (Nishi-ku) — 3 min from Yotsubashi Stn exit 2, 2 min from Nishi-Ohashi Stn exit 2',
    cuisine: 'Tonkatsu and pork shabu-shabu of brand pork: TOKYO X and Kagoshima kurobuta (official site) · the signature is a TOKYO X top-loin katsudon (official site) · tonkatsu of TOKYO X loin and fillet, Kagoshima kurobuta (150 g, September 2026), fried in a revised double-fry style since a summer 2026 relaunch as "Shin Hizono" (September 2026) · new weekday lunch from September 2026: loin tonkatsu set (120 g) ¥1,500 with free rice refills, chicken katsu, curry, katsudon, a mini katsudon (September–October 2026); pork miso soup with plenty of burdock · dinner: TOKYO X shabu-shabu course ¥4,950 (appetizer, shabu-shabu in a clay pot, house tsukune, vegetables, green-tea soba or zosui, yuzu sorbet; October 2026); courses comparing three brand pork (official site); a tonkatsu course of chicken, salmon, vegetables, fillet, loin and a spencer roll, finishing with katsudon or katsu curry (September 2026) · shabu-shabu dipped in a house soba dashi (no buckwheat flour) and ponzu, with yuzu kosho (official site) · à la carte: sliced chicken sashimi, kurobuta gyoza, seasonal specials such as autumn salmon in saikyo miso (September 2026) · characterful shochu, e.g. 夢幻 (imo), chosen by a chef from Kagoshima (official site)',
    website: SITE, gmaps: gm('とんかつ 豚しゃぶ 樋ぞの 新町'), menu_url: SITE + 'menu.html',
    notes: "[Tonkatsu · Shinmachi, TOKYO X and kurobuta by a pork-loving owner] A clean, calm counter-and-table room on a Shinmachi back street, opened in 2023 by an owner the site calls a pork lover, with a chef from Kagoshima. The pork is TOKYO X and Kagoshima kurobuta: crisp, light tonkatsu that one diner says is best with just salt, a TOKYO X top-loin katsudon as the signature, and at night shabu-shabu of the same pork in a clay pot with a house soba dashi and ponzu, finished with green-tea soba. The kitchen relaunched as \"Shin Hizono\" in summer 2026 with a new frying method and, from September, a ¥1,500 weekday lunch set. With one chef at the stove, food takes a little time; dinner is by course or à la carte with one drink each. Regulars come from as far as France (September 2026). Book on the official site; closed Sundays and holidays.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed; "豚好きな店主", a pork-loving owner, per the official site)', 'Chef from Kagoshima (official site: 当店の料理人は…鹿児島県の出身)'], origin: 'Kagoshima (the chef, per the official site)',
      background: 'Per the official site: tonkatsu and shabu-shabu by a pork-loving owner, using the "phantom pork" TOKYO X and Kagoshima kurobuta; the signature is a TOKYO X top-loin katsudon; shabu-shabu dipped in an original soba dashi made without buckwheat flour; the chef comes from Kagoshima, the home of shochu, and picks shochu for taste, not fame. Opened 3 April 2023 (Tabelog). A September 2026 regular describes a "Shin Hizono" relaunch with a new frying technique that summer and a new lunch menu from September, and a night when, with a staff member ill, two people ran the room.',
      philosophy: 'Shochu chosen for being truly delicious regardless of fame (official site).', specialty: 'TOKYO X tonkatsu and katsudon; TOKYO X shabu-shabu.',
      anecdotes: [
        { text: '"Guests from Kanto, repeat visitors from France, and regulars gathered to enjoy tonkatsu and shabu-shabu" — September 2026, an 11th visit, the Shin Hizono banquet course.', source: R + 'B501053068/' },
        { text: '"Tokyo X has an incredible sweetness, so I recommend enjoying it with salt. It feels like a waste to use sauce." — May 2026, lunch.', source: R + 'B526229261/' },
        { text: '"Since the cooking is done by a single chef, it takes a little time to prepare." — October 2026, the ¥1,500 lunch loin set.', source: R + 'B537324918/' },
      ],
      japanese_sources_summary: '公式サイト (tonkatsu-butashabu-hizono.com): とんかつ 豚しゃぶ 樋ぞの、四ツ橋駅3分、豚好きな店主が創るとんかつや豚しゃぶ、このサイトからのネット予約が最優先、幻の豚 TOKYO X や鹿児島黒豚、名物は TOKYO X を使用した上ロースかつ丼、TOKYO X のしゃぶしゃぶ鍋、銘柄豚それぞれの鍋コース、焼酎は「夢幻 (芋)」をはじめ、当店の料理人は焼酎の本場・鹿児島県の出身、しゃぶしゃぶはオリジナルのそば出汁 (そば粉不使用) とポン酢、柚子胡椒、締めの茶そば (雑炊に変更可能)、3種食べ比べのコース、西区新町1-22-19 桑名ビル 1F、四ツ橋駅2番出口徒歩3分、西大橋駅2番出口徒歩2分、心斎橋駅徒歩8分、月〜金 11:30-14:00・18:00-22:30、土 18:00-22:30、日曜・祝日休み (祝日はまれに営業)。食べログ (店舗会員): とんかつ・豚しゃぶ・かつ丼、22席 (カウンター8)、座敷の個室 (掘りごたつなし)、夜は1人1ドリンク、お酒を頼むと付き出し330円、禁煙、子ども可、テイクアウト・デリバリー、英語・中国語・韓国語のメニュー、2023年4月3日オープン。口コミ(2026年5月〜10月): TOKYO X は塩で、2026年夏に揚げ方を変えて「Shin Hizono」に、9月から新しいランチ (ロースかつ定食1,500円、ご飯おかわり無料)、TOKYO X しゃぶしゃぶコース4,950円、とんかつのコース、ごぼうたっぷりの豚汁、Kanto や France からの客、料理人ひとりなので少し時間がかかる。',
      confidence: 'medium', sources: [SITE, TB, R + 'B489990071/', R + 'B501053068/', R + 'B515735579/', R + 'B523538762/', R + 'B526229261/', R + 'B527545839/', R + 'B535994035/', R + 'B536294278/', R + 'B536560812/', R + 'B537324918/', R + 'B538049342/', R + 'B538297593/'] },
    cultural_comfort: { level: 'english', note: 'English, Chinese and Korean menus (Tabelog); book on the official site; regulars from abroad (September 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区新町1-22-19 桑名ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and the shop-maintained Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区新町一丁目22番19号 (go) 6m. Patisserie Rainette (osaka_patisserie_rainette_shinmachi, address_ja "新町1-22-19", no building or floor given) shares the street number and is pinned 8m away, so no offset; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE, R + 'B537324918/', R + 'B538049342/'],
    price_note: 'Signature dish from the official site; prices from September–October 2026 reviews (tax included as reported).', last_checked: TODAY, items: [
      it('TOKYO X を使用した上ロースかつ丼', '', 'TOKYO X top-loin katsudon (the signature)', '', 'Katsu', 'no', 'no', 'Official site.', 'tokyox_katsudon'),
      it('', '', 'Lunch loin tonkatsu set (120 g)', '¥1,500', 'Lunch', 'no', 'no', 'October 2026; rice refills free.', 'lunch_loin'),
      it('', '', 'TOKYO X shabu-shabu course', '¥4,950', 'Dinner', 'ask', 'no', 'October 2026; soba dashi and ponzu; green-tea soba or zosui to finish.', 'tokyox_shabu'),
      it('', '', 'Kagoshima kurobuta tonkatsu (150 g)', '', 'Katsu', 'no', 'no', 'September 2026.', 'kurobuta_katsu'),
    ] }, {
    cuisine: '銘柄豚のとんかつと豚しゃぶ: TOKYO X と鹿児島黒豚 (公式サイト)・名物は TOKYO X を使用した上ロースかつ丼 (公式サイト)・TOKYO X のロースとヒレ、鹿児島黒豚 (150g、2026年9月) のとんかつ、2026年夏の「Shin Hizono」から揚げ方を変えた (2026年9月)・2026年9月からの平日の新しいランチ: ロースかつ定食 (120g) 1,500円、ご飯おかわり無料、チキンカツ、カレー、かつ丼、ミニかつ丼 (2026年9〜10月)、ごぼうたっぷりの豚汁・夜: TOKYO X しゃぶしゃぶのコース4,950円 (先付、土鍋のしゃぶしゃぶ、自家製のつくね、野菜、茶そばか雑炊、柚子のシャーベット、2026年10月)、3種の銘柄豚の食べ比べのコース (公式サイト)、チキン、サーモン、野菜、ヒレ、ロース、スペンサーロールのとんかつのコース、締めはかつ丼かカツカレー (2026年9月)・しゃぶしゃぶはオリジナルのそば出汁 (そば粉不使用) とポン酢、柚子胡椒で (公式サイト)・一品: 鶏の刺身、黒豚の餃子、季節の Saikyo miso の秋鮭のフライなど (2026年9月)・鹿児島出身の料理人が選ぶ個性的な焼酎、たとえば夢幻 (芋) (公式サイト)',
    neighborhood: '西区新町1-22-19 桑名ビル 1F。四ツ橋駅2番出口から徒歩3分、西大橋駅2番出口から徒歩2分',
    gf_detail: 'グルテンフリーではありません。とんかつなどのカツは衣をつけて揚げる。しゃぶしゃぶはそば粉を使わない自家製のそば出汁とポン酢で食べる (公式サイト) が、どちらも醤油ベースで、コースの締めは茶そば。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではありません。豚の店 (とんかつと豚しゃぶ) で、豚汁もつく。',
    notes: '[とんかつ・新町、豚好きな店主の TOKYO X と黒豚] 新町の裏通りの、カウンターとテーブルの清潔で落ち着いた店。公式サイトによれば豚好きな店主が2023年に開き、料理人は鹿児島出身。豚は TOKYO X と鹿児島黒豚で、塩だけがいいという声もあるカリッと軽いとんかつ、名物の TOKYO X の上ロースかつ丼、夜は同じ豚の土鍋のしゃぶしゃぶを自家製のそば出汁とポン酢で、締めは茶そば。2026年夏に揚げ方を変えて「Shin Hizono」になり、9月からは平日1,500円のランチも。料理人ひとりなので少し時間がかかり、夜はコースかアラカルトで1人1ドリンク。France から通う常連も (2026年9月)。予約は公式サイトから、日曜・祝日休み。',
  });
}

// ================================================================ Pane E VINO Porcini 新町
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27133382/'; const R = TB + 'dtlrvwlst/'; const GROUP = 'https://www.porcini.jp/';
  const W = day(['10:00', '20:00']); const S = day(['09:00', '20:00']);
  put({
    id: 'osaka_pane_e_vino_porcini_shinmachi', name: 'Pane E VINO Porcini 新町 (Pane E VINO Porcini Shinmachi)', category: 'OMNI',
    lat: 34.676673, lng: 135.49457, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a wheat bakery (focaccia, mochi bread, campagne, baguettes, buns, scones); the group says it uses domestic wheat where it can (official site).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The salt focaccia (olive oil, salt) and plain hard breads may suit, but many breads use cream, butter, cheese, mentaiko or bacon; nothing is labelled vegan.',
    hours_raw: 'Mon–Fri 10:00–20:00; Sat 09:00–20:00; closed Sunday; a night bar on the last Saturday of each month, 19:00–22:00 (Tabelog). Takeaway only (Tabelog). Cards (VISA, Master) and PayPay; no e-money (Tabelog). Bags cost ¥30–¥50 (October 2026). A small shop with little room to turn (June 2026); usually no queue, unlike the Fukushima shop (2026 reviews). Opened 10 May 2023 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: S }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinmachi 1-22-17 (Nishi-ku), opposite Lions Mansion Osaka Sky Tower — 2 min from Nishi-Ohashi Stn exit 2, 5 min from Yotsubashi Stn exit 2',
    cuisine: 'The breads of Pane Porcini, the Fukushima bakery (2026 reviews; official group site) · salt focaccia ¥269 (June 2026) or ¥290 (August 2026); mochi bread ¥269; salt roll with truffle butter ¥231; peach bressane ¥220; mentaiko campagne on a whole-wheat dough; the chewy "mochiri" baguette; cream bread; bacon épi; a creamy Margherita focaccia pizza; Earl Grey scone; Florentine; corn dog; chocolate breads (2026 reviews) · the group\'s bakery is known for salt focaccia, mochi bread and cream bread and uses domestic wheat as far as possible (official site)',
    website: GROUP, gmaps: gm('Pane E VINO Porcini 新町'), menu_url: null,
    notes: "[Bakery · Shinmachi, the Fukushima favourite without the queue] A small bakery near Nishi-Ohashi that sells the breads of Pane Porcini, the popular Fukushima bakery whose group also runs an Italian taverna, bar, latteria and salumeria there. Diners come for the same signatures without the Fukushima line: a big, salty, olive-oil salt focaccia, chewy mochi bread, a soft custard cream bread, mentaiko campagne and a chewy baguette, mostly ¥220–¥300. On the last Saturday of the month it turns into a night bar (19:00–22:00). Reviews are mixed: most 2026 diners were happy, but a long-time Fukushima customer felt the quality had dropped after a change of staff (October 2026). Closed Sundays.",
    chef_bio: { chef_name: null, roles: ['Bakers (unnamed) of the Porcini group (porcini.jp)'], origin: null,
      background: 'Per the Porcini group site (porcini.jp): the group\'s bakery Pane Porcini in Fukushima, a small back-street bakery open late, is known for salt focaccia, mochi bread and cream bread and uses domestic wheat where it can; the group also runs Taverna Porcini, Bar Porcini, a latteria and a salumeria in Fukushima. Diners describe this Shinmachi shop as Pane Porcini\'s sister store (2026). Opened 10 May 2023 (Tabelog).',
      philosophy: null, specialty: 'Salt focaccia; mochi bread; cream bread.',
      anecdotes: [
        { text: '"This is a sister restaurant of the extremely popular bakery \'Pane Porcini,\' known for its long lines in the gourmet hotspot of Fukushima." — June 2026.', source: R + 'B529760792/' },
        { text: '"The Mentaiko Campagne immediately caught my eye. The flavor of the whole wheat dough combined with the mentaiko paste creates a unique deliciousness!" — August 2026.', source: R + 'B534276081/' },
        { text: '"Since the time the shop in Fukushima opened, I\'ve bought around 200 items, but this might be the end for me." — October 2026.', source: R + 'B536788917/' },
      ],
      japanese_sources_summary: 'ポルチーニ公式サイト (porcini.jp): 大阪福島、焼き立てパン「パネ・ポルチーニ」は塩フォカッチャ・もちパン・クリームパンが人気、できるだけ国産小麦にこだわり、夜遅くまで営業している路地裏の小さなパン屋 (福島区福島5-10-22)、イタリア食堂「タヴェルナ・ポルチーニ」、酒場「バール・ポルチーニ」、ラッテリア、サルメリア。食べログ: Pane E VINO Porcini 新町、パン、西区新町1-22-17、Nishi-Ohashi 駅2番出口から徒歩2分、月〜金 10:00〜20:00、土 9:00〜20:00、日曜休み、毎月最終土曜はナイトバー19:00〜22:00、持ち帰り、カード・PayPay可、禁煙、2023年5月10日オープン。口コミ(2026年2月〜10月): 福島のパネ・ポルチーニの姉妹店、塩フォカッチャ269〜290円、もちパン269円、トリュフバターの塩パン231円、桃のブレッサン220円、明太カンパーニュ、クリームパン、福島より並ばずに買える、袋は30〜50円、店員が替わって質が落ちたという声も。',
      confidence: 'medium', sources: [GROUP, TB, R + 'B482580001/', R + 'B529760792/', R + 'B530288192/', R + 'B530943438/', R + 'B533365260/', R + 'B534276081/', R + 'B535434433/', R + 'B536445404/', R + 'B536788917/', R + 'B538100674/', R + 'B538243953/', R + 'B538481434/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Self-service trays at a small counter shop (June 2026); bring your own bag.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区新町1-22-17',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026; the group site is current.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区新町一丁目22番17号 (go) 4m; 15m from Tonkatsu Butashabu Hizono (osaka_tonkatsu_butashabu_hizono_shinmachi, next door at 新町1-22-19); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B530288192/', R + 'B533365260/'],
    price_note: 'Prices from June–August 2026 reviews (tax included as reported).', last_checked: TODAY, items: [
      it('', '', 'Salt focaccia', '¥290', 'Bread', 'no', 'ask', 'August 2026; ¥269 in June 2026.', 'salt_focaccia'),
      it('', '', 'Mochi bread', '¥269', 'Bread', 'no', 'ask', 'June 2026.', 'mochi_pan'),
      it('', '', 'Salt roll with truffle butter', '¥231', 'Bread', 'no', 'no', 'June 2026.', 'truffle_butter'),
      it('', '', 'Peach bressane', '¥220', 'Bread', 'no', 'ask', 'August 2026.', 'peach_bressane'),
      it('', '', 'Cream bread', '', 'Bread', 'no', 'no', 'June and September 2026.', 'cream_pan'),
    ] }, {
    cuisine: '福島のパン屋パネ・ポルチーニのパン (2026年の口コミ、グループの公式サイト)・塩フォカッチャ269円 (2026年6月) または290円 (2026年8月)、もちパン269円、トリュフバターの塩パン231円、桃のブレッサン220円、全粒粉の生地の明太カンパーニュ、もっちりしたバゲット、クリームパン、ベーコンエピ、クリーミーなマルゲリータのフォカッチャピザ、アールグレイのスコーン、フロランタン、コーンドッグ、チョコレートのパン (2026年の口コミ)・グループのパン屋は塩フォカッチャ、もちパン、クリームパンが人気で、できるだけ国産小麦を使う (公式サイト)',
    neighborhood: '西区新町1-22-17、Lions Mansion Osaka Sky Tower の前。Nishi-Ohashi 駅2番出口から徒歩2分、Yotsubashi 駅2番出口から徒歩5分',
    gf_detail: 'グルテンフリーではありません。小麦のパン屋 (フォカッチャ、もちパン、カンパーニュ、バゲット、菓子パン、スコーン)。グループはできるだけ国産小麦を使う (公式サイト)。',
    vegan_detail: '要確認。オリーブオイルと塩の塩フォカッチャやシンプルなハード系のパンは合うかもしれないが、多くのパンは生クリーム、バター、チーズ、明太子、ベーコンを使う。ヴィーガンの表示はない。',
    notes: '[パン・新町、並ばずに買える福島の人気店のパン] Nishi-Ohashi 近くの小さなパン屋で、福島の人気店パネ・ポルチーニのパンが並ぶ。グループは福島でイタリア食堂、バール、ラッテリア、サルメリアも営む。福島の行列なしで同じ看板が買えると評判: 大きくて塩とオリーブオイルの効いた塩フォカッチャ、もちもちのもちパン、カスタードたっぷりのクリームパン、明太カンパーニュ、もっちりしたバゲット、多くは220〜300円ほど。毎月最終土曜の夜はナイトバー (19時〜22時)。口コミは分かれ、2026年はおおむね好評だが、福島の開店以来の常連は店員が替わって質が落ちたと書いた (2026年10月)。日曜休み。',
  });
}

// ================================================================ グランフルーヴ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27070430/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '22:30']);
  put({
    id: 'osaka_grand_fleuve_minamihorie', name: 'グランフルーヴ (Grand Fleuve)', category: 'OMNI',
    lat: 34.670732, lng: 135.495409, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Most cakes sit on sponge, tart or mille-feuille pastry and the baked goods are financiers and similar; the Horie pudding and the mousses are not described either way.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a French-style patisserie of cream, butter and egg cakes, puddings and baked goods.',
    hours_raw: 'Mon and Thu–Sun 11:00–22:30; closed Tuesday and Wednesday (Tabelog). Takeaway, with one table outside (February and August 2026). No cards, e-money or QR (Tabelog). Prices were raised in April 2026, per a notice seen in March 2026. Non-smoking (Tabelog). Opened 4 January 2013 (Tabelog).',
    hours: { 0: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Minami-Horie 1-16-3 (Nishi-ku) — 5 min from Yotsubashi Stn or Namba Stn exit 26-C',
    cuisine: 'French-based cakes and baked goods (2025–2026 reviews) · Mont Blanc on a tart base with rich cream, chestnut Mont Blanc, pistachio Mont Blanc; strawberry shortcake; strawberry cheese tart; matcha and chocolate; double chocolate; raspberry mousse; Shine Muscat tart; domestic summer-strawberry mille-feuille; seasonal peach (2025–2026) · the Horie pudding, featured on TV (September 2026); mochiri fromage; Horie potato · baked goods: moelleux chocolat ¥410, tigre ¥410, financiers (plain, Earl Grey, chocolate, matcha) ¥302 (March 2026, before an April price rise); Grand Tigre; rusk · crepes (November 2025); small whole cakes',
    website: null, gmaps: gm('グランフルーヴ 南堀江'), menu_url: null,
    notes: "[Sweets · Minami-Horie, a neighbourhood patisserie since 2013] A small, stylish patisserie in the sweets-crowded streets of Horie, open since 2013 and praised by one local family as the best cake shop around. The case runs from a rich Mont Blanc on a tart base and a pistachio Mont Blanc to strawberry shortcake, Shine Muscat tart and raspberry mousse, with the TV-famous Horie pudding and a shelf of baked goods (moelleux chocolat and tigre at ¥410 in March 2026, before an April price rise). Diners call the cream light and not too sweet; one found a mille-feuille ordinary. Takeaway, with one table outside. Cash only. Closed Tuesdays and Wednesdays.",
    chef_bio: { chef_name: null, roles: ['Patissier (unnamed)'], origin: null,
      background: 'Shop-maintained (corporate-member) Tabelog listing; opened 4 January 2013. A March 2026 reviewer describes high-quality fresh and baked sweets based on classic French pastry, well regarded among Kansai patisserie fans. No owner or official site was found.',
      philosophy: null, specialty: 'Mont Blanc; Horie pudding; baked goods.',
      anecdotes: [
        { text: '"As for the Pistachio Mont Blanc, if you read this, you should rush to buy it. You must not leave this world without trying it." — November 2025.', source: R + 'B517960531/' },
        { text: '"There was only one seat outside, so we enjoyed it in the freezing cold, but it was delicious!" — February 2026, a Mont Blanc.', source: R + 'B521825331/' },
        { text: '"The pudding in Horie has gained fame from being featured on television." — September 2026.', source: R + 'B535350685/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): グランフルーヴ、ケーキ、西区南堀江1-16-3、Yotsubashi 駅から徒歩5分、Namba 駅26C出口から徒歩5分、月・木〜日 11:00〜22:30、火・水休み、カード・電子マネー・QR不可、禁煙、2013年1月4日オープン。口コミ(2025年11月〜2026年9月): タルト生地のモンブラン、ピスタチオのモンブラン、苺のショートケーキ、苺のチーズタルト、ラズベリーのムース、シャインマスカットのタルト、夏いちごのミルフィーユ、テレビで紹介されたHorie Pudding、モワルーショコラ410円、ティグレ410円、フィナンシェ302円 (2026年3月、4月から値上げの告知)、外に席がひとつ。',
      confidence: 'medium', sources: [TB, R + 'B468990701/', R + 'B517257266/', R + 'B517960531/', R + 'B519744190/', R + 'B521825331/', R + 'B524116020/', R + 'B524280330/', R + 'B525475817/', R + 'B528280981/', R + 'B533584810/', R + 'B534423039/', R + 'B535350685/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Choose from the case; cash only. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区南堀江1-16-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区南堀江一丁目16番3号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B525475817/'],
    price_note: 'Prices from a March 2026 review, before an April 2026 price rise; no menu online.', last_checked: TODAY, items: [
      it('', '', 'Moelleux chocolat', '¥410', 'Baked goods', 'no', 'no', 'March 2026.', 'moelleux'),
      it('', '', 'Tigre', '¥410', 'Baked goods', 'no', 'no', 'March 2026.', 'tigre'),
      it('', '', 'Financier (plain, Earl Grey, chocolate, matcha)', '¥302', 'Baked goods', 'no', 'no', 'March 2026.', 'financier'),
      it('', '', 'Mont Blanc on a tart base', '', 'Cakes', 'no', 'no', 'December 2025; May 2026 (chestnut).', 'mont_blanc'),
      it('', '', 'Horie pudding', '', 'Cakes', 'ask', 'no', 'December 2025; September 2026.', 'horie_pudding'),
    ] }, {
    cuisine: 'フランス菓子がベースのケーキと焼き菓子 (2025〜2026年の口コミ)・タルト生地にクリームたっぷりのモンブラン、栗のモンブラン、ピスタチオのモンブラン、苺のショートケーキ、苺のチーズタルト、抹茶とチョコレート、ダブルチョコレート、ラズベリーのムース、シャインマスカットのタルト、国産の夏いちごのミルフィーユ、季節の桃 (2025〜2026年)・テレビで紹介されたHorie Pudding (2026年9月)、Mochiri Fromage、Horie Potato・焼き菓子: モワルーショコラ410円、ティグレ410円、フィナンシェ (プレーン、アールグレイ、チョコレート、抹茶) 302円 (2026年3月、4月の値上げ前)、グランティグレ、ラスク・クレープ (2025年11月)、小さなホールケーキ',
    neighborhood: '西区南堀江1-16-3。Yotsubashi 駅または Namba 駅26C出口から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。ケーキの多くはスポンジ、タルト、ミルフィーユの生地で、焼き菓子はフィナンシェなど。Horie Puddingやムースについては説明がない。',
    vegan_detail: 'ヴィーガンではありません。生クリーム、バター、卵のケーキ、プリン、焼き菓子のフランス菓子店。',
    notes: '[スイーツ・南堀江、2013年からの街のケーキ屋] スイーツ店がひしめく堀江の小さくおしゃれなパティスリーで、2013年から。ある家族からは近所で一番のケーキ屋と褒められる。ショーケースにはタルト生地の濃厚なモンブラン、ピスタチオのモンブランから苺のショートケーキ、シャインマスカットのタルト、ラズベリーのムースまで。テレビで紹介されたHorie Pudding、焼き菓子の棚も (2026年3月はモワルーショコラとティグレが410円、4月に値上げ)。クリームは軽く甘さ控えめという声、ミルフィーユはふつうだったという声も。持ち帰りで、外にテーブルがひとつ。現金のみ。火・水休み。',
  });
}

save();
