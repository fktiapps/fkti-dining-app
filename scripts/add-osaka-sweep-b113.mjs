// Osaka sweep (2-mile circle around Dotonbori), batch 113 — mom / small-shop phase (all OMNI).
//   + 楽楽座 (one-person Italian bar since 1999: ¥790–990 iron-pan pasta lunches, wine at night; Ura-Namba) — mom_and_pop
//   + 杏樹亭 (A5 Kuroge wagyu and fresh horumon yakiniku with Kyoto-style washing sauce, to 02:00+; Soemoncho alley)
//   + 海鍋亭 心斎橋店 (1 kg oyster and shrimp hot pots; Higashi-Shinsaibashi)
//   + カレー屋 みーやん (weekend-only three-curry plates inside Rakuraku Za; Ura-Namba)
//   + 創作和食 Jampa (hidden 7F creative washoku omakase: toro-taku, Saga beef, clay-pot rice; Amemura)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-28';
const { put, save } = openCitySweep('osaka', TODAY, 113);
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 楽楽座
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27003149/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://rakurakuza.smafo.biz/';
  const LD = day(['12:00', '14:30'], ['18:00', '01:00']); const DN = day(['18:00', '01:00']);
  put({
    id: 'osaka_rakuraku_za_namba', name: '楽楽座 (Rakuraku Za)', category: 'OMNI',
    lat: 34.66619, lng: 135.498975, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: pasta lunches with bread; demi-glace; doria.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: egg around the iron-pan pasta; bacon, sausage, cream and cheese.',
    hours_raw: 'Mon–Thu 12:00–14:30 and 18:00–01:00 (L.O. 24:00); Fri–Sat 18:00–01:00; Sun 18:00–24:00 (L.O. 23:00); closing days vary (Tabelog). On Fri–Sun lunch the space runs as the curry shop Curry Ya Miyan (Tabelog). Seat charge ¥300 at night (Tabelog). Run by one person, so food takes time (2026 reviews). Cash only: no cards or e-money (Tabelog). Reservations from ¥4,000 courses; private hire for 10+ (Tabelog).',
    hours: { 0: LD, 1: LD, 2: LD, 3: LD, 4: DN, 5: DN, 6: day(['18:00', '23:59']) }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Namba 4-8-11, in the Ura-Namba "Zaura" backstreets — 120 m from Osaka-Namba Stn',
    cuisine: 'Italian bar · weekday lunch ¥890–990 (2026) with salad and bread: daily pasta (bacon-tomato tagliatelle, sausage and komatsuna basil cream, fettuccine in cream), carbonara, Napolitan served sizzling in an iron pan ringed with egg, iron-pot doria of ketchup rice, cheese and egg, omurice with demi-glace · glass of white wine ¥550 · evenings: Italian dishes and plenty of wine; courses from ¥4,000 · 8 counter seats and tables',
    website: OWN, gmaps: gm('楽楽座 難波'), menu_url: null,
    notes: "[Italian · one-person Italian bar with ¥890 iron-pan pasta lunches in Ura-Namba] A cozy, slightly chaotic Italian bar in the Ura-Namba backstreets behind the old Kabukiza, running since 1999 and cooked by one person. Weekday lunch is the find: ¥890–990 (2026) buys the day's pasta with a tangy mini salad and bread, or the Napolitan, served sizzling in an iron pan ringed with egg, in a large size one diner thought could feed three. The iron-pot doria hides a melting egg under ketchup rice and cheese, and the carbonara (¥890) pairs well with a ¥550 glass of white. Expect a wait: one diner waited about 20 minutes, and another saw a fellow diner carry plates to help. At night it's a wine bar with Italian plates (¥300 seat charge). On Friday to Sunday lunch the room becomes the curry shop Curry Ya Miyan. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 30 November 1999 (Tabelog)', background: 'Italian bar run by one person (September–October 2026 reviews); official site rakurakuza.smafo.biz.', philosophy: '"Authentic Italian in a homey atmosphere, where you can eat and drink cheerfully" (official site).', specialty: 'Iron-pan Napolitan; pasta lunches.',
      anecdotes: [
        { text: '"The iron pot was sizzling with a generous amount of ketchup-covered Neapolitan spaghetti! The edges of the pot were lined with eggs… a rich and nostalgic flavor!" — October 2026, iron-pot pasta lunch, large.', source: R + 'B538047340/' },
        { text: '"Today\'s special pasta lunch for JPY 890. Includes a salad and toast. Since it\'s a one-man operation, it takes a little time." — September 2026.', source: R + 'B535625222/' },
      ],
      japanese_sources_summary: '公式 rakurakuza.smafo.biz: ブラッセリー楽楽座、アットホームな雰囲気の本格イタリアン、わいわい食べて飲めるイタリアン、大阪市中央区難波4-8-11。食べログ: 楽楽座、大阪難波から120m、月〜木 12:00〜14:30・18:00〜翌1:00(L.O. 24:00)、金土 18:00〜翌1:00、日 18:00〜24:00、金土日はカレー、不定休、カード・電子マネー不可、チャーム300円、13席(カウンター8、テーブル5)、4,000円のコースから予約可、10名以上で貸切、1999年11月30日開店。口コミ(2024年5月〜2026年10月): パスタランチのカルボナーラ890円と白ワイン550円、サラダとパン付き、夜のコース、鉄板のナポリタンに卵、アイスコーヒー付き790円、黒板のランチ、クリームのフェットチーネ、デミグラスのオムライス、スタッフが親切、ワインの種類が多い、カウンター約12席、日替わりパスタ890円、ワンオペで時間がかかる、ベーコントマトのタリアテッレ、ソーセージと小松菜のバジルクリームソースパスタ大盛り990円、ちょっと雑然とした居心地のいい店内、ポテトサラダ、座裏のアットホームな店、マスターが一人で切り盛り、客が料理を運ぶのを手伝う、約20分待ち、大盛りのナポリタンは3人分ほど、鉄鍋ドリア(ケチャップライス、チーズ、卵)、日替わりランチ890円。',
      confidence: 'medium', sources: [TB, OWN, R + 'B484282983/', R + 'B529353234/', R + 'B535625222/', R + 'B536106590/', R + 'B538047340/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Warm, chatty host; seat yourself (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市中央区難波4-8-11',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026; OSM node 楽楽座 2 m.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波四丁目8番11号 (go) 6m; OSM node/2315713046 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B484282983/', R + 'B535625222/', R + 'B536106590/', R + 'B538047340/'],
    price_note: 'Lunch prices from 2024–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Daily pasta lunch (salad, bread)', '¥890', 'Lunch', 'no', 'no', 'September 2026.', 'pasta_lunch'),
      it('', '', 'Carbonara lunch', '¥890', 'Lunch', 'no', 'no', 'September 2026.', 'carbonara'),
      it('ソーセージと小松菜のバジルクリームソースパスタ大盛り', '', 'Sausage and komatsuna basil cream pasta, large', '¥990', 'Lunch', 'no', 'no', 'September 2026.', 'basil_cream'),
      it('', '', 'Iron-pan Napolitan lunch', '', 'Lunch', 'no', 'no', 'October 2026.', 'napolitan'),
      it('', '', 'Iron-pot doria lunch', '¥890', 'Lunch', 'no', 'no', 'October 2026.', 'doria'),
      it('', '', 'Omurice with demi-glace', '¥790', 'Lunch', 'no', 'no', 'May 2024.', 'omurice'),
      it('', '', 'Glass of white wine', '¥550', 'Drinks', 'ask', 'ask', 'September 2026.', 'wine'),
      it('', '', 'Seat charge (evening)', '¥300', 'Charge', 'no', 'no', 'Tabelog.', 'charm'),
    ] }, {
    cuisine: 'イタリアンバル・平日ランチ890〜990円(2026年)、サラダとパン付き: 日替わりパスタ(ベーコントマトのタリアテッレ、ソーセージと小松菜のバジルクリーム、クリームのフェットチーネ)、カルボナーラ、卵で囲んで鉄板で出すナポリタン、ケチャップライス・チーズ・卵の鉄鍋ドリア、デミグラスのオムライス・白ワイン1杯550円・夜はイタリアンの料理と豊富なワイン、コース4,000円から・カウンター8席とテーブル',
    neighborhood: '中央区難波4-8-11、裏なんばの「座裏」。大阪難波駅から120m',
    gf_detail: 'グルテンフリーではありません。パンの付くパスタランチ、デミグラス、ドリア。',
    vegan_detail: 'ヴィーガンではありません。鉄板パスタの周りの卵、ベーコン、ソーセージ、クリーム、チーズ。',
    notes: '[イタリアン・裏なんば、890円の鉄板パスタランチ、ひとりで営むイタリアンバル] 旧歌舞伎座裏、裏なんばの路地のちょっと雑然として居心地のいいイタリアンバルで、1999年から、料理はひとりで。見つけものは平日ランチ: 890〜990円(2026年)で日替わりパスタに酸味の効いたミニサラダとパン、あるいは卵で囲んでジュウジュウの鉄板で出すナポリタン、大盛りは3人分ほどという声も。鉄鍋ドリアはケチャップライスとチーズの下にとろける卵、カルボナーラ(890円)には550円の白ワインを。待つ覚悟を: 約20分待ったという声、客が料理を運ぶのを手伝っていたという声も。夜は料理とワインのバル(チャーム300円)。金〜日の昼はカレー屋 みーやんに。現金のみ。',
  });
}

// ================================================================ 杏樹亭
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27130723/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://www.kyoto-anjutei.com/';
  const D = day(['18:00', '02:00']);
  put({
    id: 'osaka_anju_tei_soemoncho', name: '杏樹亭 (Anju Tei)', category: 'OMNI',
    lat: 34.669903, lng: 135.505525, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: yakiniku sauces and soy-based dips; cold noodles.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef and offal are the meal; dashi in the cold noodles.',
    hours_raw: 'Tue–Sun and public holidays 18:00–02:00; closed Mon (Tabelog); the official site says 18:00 to 06:00. For late visits reserve by 02:00, or the shop closes; easiest to reach by phone 16:00–24:00 (Tabelog). No children below elementary-school age (Tabelog). Cards incl. UnionPay; no e-money or QR (Tabelog).',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Soemoncho 1-21, down an alley off Sennichimae-suji — 5 min from Nipponbashi Stn exit 2',
    cuisine: 'Yakiniku of A5 female Kuroge wagyu and fresh horumon · heart sashimi ¥1,000 · white raw senmai with cho-jang ¥1,000 · seared sirloin-cap yukhoe with egg yolk ¥1,600 · premium tongue ¥3,200–3,800 · tongue kalbi ¥900 · grilled wagyu shabu-shabu, seared by the owner, with ponzu or egg yolk ¥2,800 · outside skirt ¥2,800 · sirloin cap ¥2,500 · A5 strip loin ¥4,000 · kalbi ¥1,900 · thinly sliced salted tripe ¥1,200 · colon ¥1,200 · white honeycomb tripe ¥900 · a different sauce or salt for each cut, incl. a Kyoto-style "washing" dip · sudachi cold noodles ¥1,100–1,200 · 5 counter seats downstairs; private tatami rooms upstairs',
    website: OWN, gmaps: gm('杏樹亭 宗右衛門町'), menu_url: null,
    notes: "[Yakiniku · A5 wagyu and fresh horumon with a sauce for every cut, down a Soemoncho alley] A small yakiniku house hidden in an alley off Sennichimae-suji, open since 2022, with a five-seat counter below and private tatami rooms above, taking only three groups at a time. Non-offal cuts are A5 female Kuroge wagyu, the shop says, and the offal is chosen for freshness: start with the clean heart sashimi and the white senmai, then the seared yukhoe with egg yolk. Each cut comes with its own sauce, salt or dip, including a light Kyoto-style dip that washes away excess fat, and staff explain how to eat each one; the owner sears the wagyu yaki-shabu for you. Finish with the bright sudachi cold noodles. Diners spent ¥8,000–15,000. Open late; reserve for after 02:00. No small children.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 August 2022 (Tabelog)', background: 'Yakiniku restaurant (official site kyoto-anjutei.com; Tabelog).', philosophy: 'Offal such as tongue, skirt, liver and mino chosen above all for freshness; other cuts limited to A5 female Kuroge wagyu; only three groups at a time (official site).', specialty: 'A5 wagyu yakiniku; fresh horumon.',
      anecdotes: [
        { text: '"Each type of meat is served with a different sauce… Especially the Kalbi, which I enjoyed with a Kyoto-style washing sauce, was refreshing with a nice umami and acidity." — September 2026.', source: R + 'B535656038/' },
        { text: '"A5-rank Miyazaki beef strip loin, grilled by the owner. The beautifully marbled meat is quickly seared, igniting a flame. Enjoy it with refreshing ponzu sauce or rich, beautiful egg yolk." — October 2026, grilled wagyu shabu-shabu ¥2,800.', source: R + 'B537313514/' },
      ],
      japanese_sources_summary: '公式 kyoto-anjutei.com: 難波・日本橋の焼肉屋「杏樹亭(あんじゅてい)」、路地裏の隠れ家、タン・ハラミ・レバー・ミノなどのホルモンは鮮度にこだわる、ホルモン以外はA5ランクの黒毛和牛雌牛に限定、18時から朝6時まで、1Fカウンター・2F個室、同時に3組まで。食べログ: 大阪市中央区宗右衛門町1-21、日本橋駅から徒歩5分、火〜日・祝 18:00〜翌2:00、月休み、深夜は2時までに予約がなければ閉店、電話は16〜24時、未就学児不可、カード(銀聯含む)可、電子マネー・QR不可、15席(カウンター5、個室10)、2022年8月1日開店。口コミ(2026年9〜10月): 白センマイ刺し1,000円、ハツ刺し1,000円、ユッケ1,600円、上タン3,200円、タンカルビ900円、和牛の焼きしゃぶ2,800円、ハラミ2,800円、イチボ2,500円、白ハチノス900円、すだち冷麺1,100円、部位ごとに違う薬味と食べ方の説明、焼きしゃぶを目の前で焼き卵黄で、上厚切りタン3,800円、千葉のA5サーロイン4,000円、上カルビ1,900円、薄切りの塩ミノ1,200円、すだち冷麺1,200円、京都風の洗いだれ、店主が焼く、2階の座敷は約8名、掘りごたつ、靴は自分で靴箱へ、強火のガスロースター、鉄網、宮崎牛、テッチャン1,200円、瓶ビール、知多のハイボール。',
      confidence: 'medium', sources: [TB, OWN, R + 'B535211401/', R + 'B535221124/', R + 'B535656038/', R + 'B535680202/', R + 'B537313514/', R + 'B537504266/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff explain how to eat each cut (September 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区宗右衛門町1-21',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区宗右衛門町1番21号 (go) 24m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'high', sources: [R + 'B535211401/', R + 'B535656038/', R + 'B537313514/'],
    price_note: 'Prices from September–October 2026 reviews; some differ slightly between visits.', last_checked: TODAY, items: [
      it('', '', 'Heart sashimi', '¥1,000', 'Sashimi', 'no', 'no', 'October 2026.', 'hatsu_sashi'),
      it('', '', 'White raw senmai', '¥1,000', 'Sashimi', 'no', 'no', 'October 2026.', 'senmai'),
      it('', '', 'Yukhoe (sirloin cap)', '¥1,600', 'Sashimi', 'no', 'no', 'October 2026.', 'yukhoe'),
      it('', '', 'Premium tongue', '¥3,200', 'Beef', 'no', 'no', 'October 2026.', 'jo_tan'),
      it('', '', 'Tongue kalbi', '¥900', 'Beef', 'no', 'no', 'September 2026.', 'tan_kalbi'),
      it('', '', 'Grilled wagyu shabu-shabu', '¥2,800', 'Beef', 'no', 'no', 'October 2026.', 'yaki_shabu'),
      it('', '', 'Outside skirt', '¥2,800', 'Beef', 'no', 'no', 'October 2026.', 'harami'),
      it('', '', 'Sirloin cap', '¥2,500', 'Beef', 'no', 'no', 'October 2026.', 'ichibo'),
      it('', '', 'Thinly sliced salted tripe', '¥1,200', 'Horumon', 'no', 'no', 'October 2026.', 'mino'),
      it('', '', 'Colon', '¥1,200', 'Horumon', 'no', 'no', 'October 2026.', 'tetchan'),
      it('', '', 'Sudachi cold noodles', '¥1,200', 'Noodles', 'no', 'no', 'October 2026.', 'reimen'),
    ] }, {
    cuisine: 'A5黒毛和牛雌牛と新鮮なホルモンの焼肉・ハツ刺し1,000円・白センマイ刺しとチョジャン1,000円・炙ったイチボのユッケに卵黄1,600円・上タン3,200〜3,800円・タンカルビ900円・店主が焼く和牛の焼きしゃぶ、ポン酢か卵黄で2,800円・ハラミ2,800円・イチボ2,500円・A5サーロイン4,000円・カルビ1,900円・薄切りの塩ミノ1,200円・テッチャン1,200円・白ハチノス900円・部位ごとに違うたれや塩、京都風の洗いだれも・すだち冷麺1,100〜1,200円・1階にカウンター5席、2階に座敷の個室',
    neighborhood: '中央区宗右衛門町1-21、千日前筋から入った路地。日本橋駅2番出口から徒歩5分',
    gf_detail: 'グルテンフリーではありません。焼肉のたれと醤油ベースのつけだれ、冷麺。',
    vegan_detail: 'ヴィーガンではありません。牛肉とホルモンが中心、冷麺の出汁。',
    notes: '[焼肉・宗右衛門町の路地、部位ごとのたれで食べるA5和牛と新鮮なホルモン] 千日前筋から入った路地の小さな焼肉店で、2022年開店、1階にカウンター5席、2階に座敷の個室、同時に3組まで。店によればホルモン以外はA5の黒毛和牛雌牛、ホルモンは鮮度で選ぶ: まずは臭みのないハツ刺しと白センマイ、それから卵黄をのせた炙りのユッケを。部位ごとにたれ、塩、薬味が違い、余分な脂を落とす京都風のさっぱりした洗いだれも、食べ方はスタッフが説明してくれる。和牛の焼きしゃぶは店主が目の前で焼く。締めはさわやかなすだち冷麺。8,000〜15,000円という声。深夜まで営業、2時以降は予約を。未就学児は不可。',
  });
}

// ================================================================ 海鍋亭 心斎橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27139150/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['18:00', '01:00']); const WE = day(['17:00', '01:00']);
  put({
    id: 'osaka_umi_nabe_tei_shinsaibashi', name: '海鍋亭 心斎橋店 (Umi Nabe Tei Shinsaibashi)', category: 'OMNI',
    lat: 34.6715, lng: 135.504278, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: miso-butter broth; ramen finish; gratin.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: oysters, shrimp, scallops and seafood throughout; pork in the oyster pot.',
    hours_raw: 'Mon–Fri 18:00–01:00; Sat, Sun and public holidays 17:00–01:00 (Tabelog). Courses by reservation; private hire on request (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). Smoking allowed (August 2026).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 2-5-6, Tsukushi Kaikan 1F — 5 min from Shinsaibashi or Namba Stn',
    cuisine: 'Seafood hot pots · 豪快牡蠣鍋 (big oyster hot pot) ¥2,490–2,739 per person: over 1 kg of plump oysters and large scallops in a rich miso-butter broth with pork, bean sprouts, garlic chives and napa cabbage · shrimp shabu-shabu course: about 1 kg of shrimp, five-kind sashimi, two sushi, risotto or noodles, ice cream · seafood hot pot with shrimp, offal, scallops and oysters · fresh Hiroshima oysters, 3 for ¥990 · three-shrimp tasting ¥990 · shrimp yukhoe ¥869 · crab-miso gratin · grilled scallop and squid skewers · finishes: miso-butter risotto ¥649, oyster miso-butter ramen ¥539, cheese +¥100 · 7 counter seats, two tables for four',
    website: null, gmaps: gm('海鍋亭 心斎橋店'), menu_url: null,
    notes: "[Hot pot · 1 kg oyster and shrimp hot pots in Higashi-Shinsaibashi] A compact seafood hot-pot shop in Higashi-Shinsaibashi, open since 2023 and open until 1 am, built around two show-stoppers. The big oyster hot pot (about ¥2,500–2,700 per person) piles more than a kilo of plump oysters and big scallops into a rich miso-butter broth with pork and vegetables; finish with the miso-butter risotto or ramen, cheese optional. The shrimp shabu-shabu course brings about a kilo of shrimp to swish briefly, cook longer or eat raw, after five kinds of sashimi and two pieces of sushi, ending in shrimp-broth risotto and ice cream. Start with fresh Hiroshima oysters (3 for ¥990) or the three-shrimp tasting. Smoking is allowed. Cards accepted.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 20 November 2023 (Tabelog)', background: 'Seafood hot-pot restaurant, Shinsaibashi branch (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Oyster hot pot; shrimp shabu-shabu.',
      anecdotes: [
        { text: '"The popular 豪快牡蠣鍋 (Gokai Kaki Nabe) featured over 1 kg of carefully selected plump oysters and large scallops… The rich miso butter-based broth not only infused the oysters and scallops but also absorbed the flavors of pork and vegetables." — September 2026.', source: R + 'B537344307/' },
        { text: '"The shrimp shabu-shabu came with about 1 kg (around 10 pieces), which was very satisfying. You can quickly dip them in the broth or leave them a bit longer for a firmer texture, and they can even be enjoyed raw." — August 2026, shrimp shabu-shabu course.', source: R + 'B534419202/' },
      ],
      japanese_sources_summary: '食べログ: 海鍋亭 心斎橋店、大阪市中央区東心斎橋2-5-6 つく志会館 1F、心斎橋駅・なんば駅から徒歩5分、月〜金 18:00〜翌1:00、土日祝 17:00〜翌1:00、カード可、電子マネー・QR不可、15席(カウンター7、4人席2)、貸切は相談、2023年11月20日開店。口コミ(2026年8〜10月): 海老、もつ、帆立、牡蠣の海鮮鍋、蟹味噌グラタン、海老しゃぶが人気、喫煙可、週末18時の海老しゃぶコース、サインの色紙、刺身5種(甘海老など)、寿司2貫、海老約1kg(約10尾)、生でも、締めはリゾットか麺、チーズ、アイスはバニラ・チョコ・柚子、豪快牡蠣鍋2,490円(一人前)、海老3種食べ比べ990円、生牡蠣3個990円、まぐろ山かけ590円、帆立串490円、いか串290円、寿司盛り3貫990円、牡蠣1kg、味噌バターのスープ、もやし・ニラ・白菜、生牡蠣3個999円(広島直送)、豪快牡蠣鍋2,739円、海老ユッケ869円、寿司2貫759円、牡蠣味噌バターラーメン539円、味噌バターリゾット649円、チーズ100円、牡蠣鍋に豚と野菜、ねぎとろと鰻の手巻き。',
      confidence: 'medium', sources: [TB, R + 'B533882010/', R + 'B534419202/', R + 'B537217081/', R + 'B537344307/', R + 'B537777501/', R + 'B537778020/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Courses by reservation; cards accepted (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋2-5-6 つく志会館 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋二丁目5番6号 (go) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537217081/', R + 'B537344307/'],
    price_note: 'Prices from September–October 2026 reviews; the two oyster-pot prices differ.', last_checked: TODAY, items: [
      it('豪快牡蠣鍋', '', 'Big oyster hot pot (per person)', '¥2,490–2,739', 'Hot pot', 'no', 'no', 'September–October 2026.', 'kaki_nabe'),
      it('', '', 'Shrimp shabu-shabu course', '', 'Course', 'no', 'no', 'August 2026.', 'ebi_shabu'),
      it('', '', 'Fresh oysters (3)', '¥990', 'Seafood', 'no', 'no', 'October 2026.', 'nama_kaki'),
      it('', '', 'Three-shrimp tasting', '¥990', 'Seafood', 'no', 'no', 'October 2026.', 'ebi3'),
      it('', '', 'Shrimp yukhoe', '¥869', 'Seafood', 'no', 'no', 'September 2026.', 'ebi_yukhoe'),
      it('', '', 'Crab-miso gratin', '', 'Seafood', 'no', 'no', 'August 2026.', 'kanimiso'),
      it('', '', 'Miso-butter risotto (finish)', '¥649', 'Finish', 'no', 'no', 'September 2026.', 'risotto'),
      it('', '', 'Oyster miso-butter ramen (finish)', '¥539', 'Finish', 'no', 'no', 'September 2026.', 'ramen'),
    ] }, {
    cuisine: '海鮮鍋・豪快牡蠣鍋一人前2,490〜2,739円: 1kg超のぷりぷりの牡蠣と大きな帆立に濃厚な味噌バターのスープ、豚、もやし、ニラ、白菜・海老しゃぶコース: 約1kgの海老、刺身5種、寿司2貫、リゾットか麺、アイス・海老、もつ、帆立、牡蠣の海鮮鍋・広島直送の生牡蠣3個990円・海老3種食べ比べ990円・海老ユッケ869円・蟹味噌グラタン・帆立といかの串・締めは味噌バターリゾット649円、牡蠣味噌バターラーメン539円、チーズ+100円・カウンター7席、4人席2卓',
    neighborhood: '中央区東心斎橋2-5-6 つく志会館 1F。心斎橋駅・なんば駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。味噌バターのスープ、締めのラーメン、グラタン。',
    vegan_detail: 'ヴィーガンではありません。牡蠣、海老、帆立など魚介が中心、牡蠣鍋に豚肉。',
    notes: '[鍋・東心斎橋、1kgの牡蠣と海老の鍋] 東心斎橋のこぢんまりした海鮮鍋の店で、2023年開店、深夜1時まで、目玉は2つ。豪快牡蠣鍋(一人前約2,500〜2,700円)は1kg超のぷりぷりの牡蠣と大きな帆立を濃厚な味噌バターのスープに、豚と野菜も。締めは味噌バターのリゾットかラーメン、チーズもお好みで。海老しゃぶコースは約1kgの海老を、さっとくぐらせても、しっかり火を通しても、生でも。その前に刺身5種と寿司2貫、締めは海老出汁のリゾットとアイス。まずは広島直送の生牡蠣(3個990円)か海老3種の食べ比べから。喫煙可。カード可。',
  });
}

// ================================================================ カレー屋 みーやん
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27118985/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:30', '15:00']);
  put({
    id: 'osaka_curry_ya_miyan_namba', name: 'カレー屋 みーやん (Curry Ya Miyan)', category: 'OMNI',
    lat: 34.66613, lng: 135.49897, cuisine_type: 'curry',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Spiced keema and potage curries over rice, but no source lists the ingredients or whether flour or barley miso is used.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef and pork keema and pork green keema on every plate reported; scallop potage once.',
    hours_raw: 'Fri–Sun 11:30–15:00, until sold out (Tabelog). Runs in the Rakuraku Za space at weekend lunch (2026 reviews). Cash only: no cards, e-money or QR (Tabelog).',
    hours: { 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Namba 4-8-11, in Rakuraku Za, Ura-Namba — 2 min from Namba Stn',
    cuisine: 'Weekend-only mild spiced curry · three-curry plate ¥1,300, changing with the season: a beef and pork keema (spring cabbage, tomato, citrus, red miso or shrimp), a vegetable potage curry (new potato and onion, spinach, corn, scallop, seaweed) and a pork green keema; mix them together at the end · grilled cheese +¥100 · grilled corn +¥200 · long-yam achaar · mild, not spicy · 8 counter seats and a small table',
    website: null, gmaps: gm('カレー屋 みーやん 難波'), menu_url: null,
    notes: "[Curry · weekend-only three-curry plates in Ura-Namba] A Friday-to-Sunday lunch curry counter that takes over the Italian bar Rakuraku Za in the Ura-Namba backstreets. There's one order: the three-curry plate (¥1,300), which changes with the season but in every review has paired a beef and pork keema, a gentle vegetable potage curry and a pork green keema. Recent potages have been new potato, corn, scallop and seaweed; the keemas have run from spring cabbage to citrus and red miso. Each is mild and well balanced, and the menu suggests mixing all three at the end. Add grilled cheese (+¥100) or grilled corn (+¥200). Lovers of fiery curry may find it tame. It can sell out; one diner was charged less when a curry ran short. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Weekend curry shop run in the Rakuraku Za space (2026 reviews; Tabelog).', philosophy: null, specialty: 'Three-curry plate.',
      anecdotes: [
        { text: '"The potage had a gentle flavor, combining the sweetness and umami of the fresh vegetables with a hint of spice. The two types of keema were not overly spicy, offering a well-balanced spice profile." — March 2026, three types ¥1,300.', source: R + 'B523770667/' },
        { text: '"The standout was definitely the scallop potage. What a creative idea! The Beef, Pork, Shrimp, and Tomato Keema was also exceptional." — April 2026.', source: R + 'B525582507/' },
      ],
      japanese_sources_summary: '食べログ: カレー屋 みーやん、大阪市中央区難波4-8-11、近鉄大阪難波駅8番出口・なんば駅13番出口から徒歩2分、金〜日 11:30〜15:00(売り切れ次第終了)、カード・電子マネー・QR不可、13席(カウンター8、テーブル5)。口コミ(2025年3月〜2026年8月): 週末だけの合いがけカレー、3種1,300円、牛豚と春キャベツのキーマ、新じゃがと新玉ねぎのポタージュ、豚のグリーンキーマ、焼きチーズ+100円、やさしいのに奥深い、辛いのが好きな人には物足りないかも、ほうれん草のポタージュ、牛豚トマトキーマ、金土日だけの間借りのカレー、本店は楽楽座、季節の食材、長芋のアチャール、品切れで1,200円にしてくれた、店主が親切、座裏、帆立のポタージュ、牛豚海老トマトキーマ、牛豚の柑橘キーマ、コーンポタージュ、焼きとうもろこし200円、全部混ぜて、辛くない、甘みとコク、海苔のポタージュ、牛豚の赤味噌キーマ。',
      confidence: 'medium', sources: [TB, R + 'B502550063/', R + 'B523770667/', R + 'B525582507/', R + 'B531782512/', R + 'B532892534/', R + 'B535320134/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One-order menu; kind host (March 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波4-8-11',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; newest review August 2026.' },
    pin_source: `Tabelog ${TB} (34.666181, 135.498964, 1 m from Rakuraku Za's pin); same space as Rakuraku Za (osaka_rakuraku_za_namba), pin offset ~7 m south so the two do not stack; GSI 大阪府大阪市中央区難波四丁目8番11号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B502550063/', R + 'B531782512/'],
    price_note: 'Prices from March–July 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Three-curry plate', '¥1,300', 'Curry', 'ask', 'no', 'July 2026.', 'three'),
      it('', '', 'Grilled cheese topping', '+¥100', 'Toppings', 'no', 'no', 'March 2026.', 'cheese'),
      it('', '', 'Grilled corn topping', '+¥200', 'Toppings', 'ask', 'ask', 'July 2026.', 'corn'),
    ] }, {
    cuisine: '週末だけのやさしいスパイスカレー・3種盛り1,300円、季節で変わる: 牛豚のキーマ(春キャベツ、トマト、柑橘、赤味噌、海老など)、野菜のポタージュカレー(新じゃがと新玉ねぎ、ほうれん草、コーン、帆立、海苔)、豚のグリーンキーマ、最後は全部混ぜて・焼きチーズ+100円・焼きとうもろこし+200円・長芋のアチャール・辛くない・カウンター8席と小さなテーブル',
    neighborhood: '中央区難波4-8-11、楽楽座の店内、裏なんば。なんば駅から徒歩2分',
    gf_detail: '要確認。スパイスのキーマとポタージュのカレーにご飯ですが、材料や小麦粉・麦味噌の使用を示す情報源はありません。',
    vegan_detail: 'ヴィーガンではありません。報告のあるどの皿にも牛豚のキーマと豚のグリーンキーマ、帆立のポタージュも。',
    notes: '[カレー・裏なんば、週末だけの3種盛り] 金〜日の昼だけ、裏なんばのイタリアンバル楽楽座を借りて開くカレーのカウンター。注文はひとつ、3種盛り(1,300円): 季節で変わるが、どの口コミでも牛豚のキーマ、やさしい野菜のポタージュカレー、豚のグリーンキーマの組み合わせ。最近のポタージュは新じゃが、コーン、帆立、海苔、キーマは春キャベツから柑橘、赤味噌まで。どれも辛さ控えめでバランスがよく、最後は3種を全部混ぜるのがおすすめ。焼きチーズ(+100円)か焼きとうもろこし(+200円)も。激辛好きには物足りないかも。売り切れることもあり、1種が足りず安くしてくれたという声。現金のみ。',
  });
}

// ================================================================ 創作和食 Jampa
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27097854/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://jampa.co.jp/';
  const D = day(['17:00', '23:00']);
  put({
    id: 'osaka_sosaku_washoku_jampa', name: '創作和食 Jampa (Sosaku Washoku Jampa)', category: 'OMNI',
    lat: 34.671757, lng: 135.498678, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a set omakase with dashi, soy-based dishes and a wagyu cutlet; tell the shop about allergies in advance.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood, wagyu and dashi throughout the omakase.',
    hours_raw: 'Mon–Sat and public holidays 17:00–23:00 (L.O. 22:30); closed Sun; seating may be limited to about 2½ hours (Tabelog). À la carte from 20:00 (November 2025). Courses ¥8,800 and ¥11,000; all-you-can-drink ¥5,000 (2026 reviews). Hard to find: call when close (Tabelog; April 2026). Cards (VISA, Master, JCB, AMEX, Diners) and PayPay accepted (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishi-Shinsaibashi 2-10-31, ASUKA Amemura Bldg 7F, across from BIG STEP; entrance via the narrow alley on the south side — 5 min from Shinsaibashi or Yotsubashi Stn',
    cuisine: 'Creative Japanese omakase that changes monthly · courses ¥8,800 and ¥11,000 · seasonal platter of about ten small appetizers · warm dish (hamo and matsutake in autumn) · toro-taku on red-vinegar rice · Saga beef roast beef over achar · Western-style seafood dish (abalone gratin or butter sauté) · Kuroge wagyu with simmered egg in a small pot, or a wagyu mille-feuille cutlet · ayu; turtle hot pot as an add-on · clay-pot rice · "Japanese ultra-smooth pudding" · sake and wine pairings · 6 counter seats, 8 semi-private table seats; private room for 4+',
    website: OWN, gmaps: gm('創作和食 Jampa 西心斎橋'), menu_url: null,
    notes: "[Japanese · hidden creative washoku omakase on a 7th floor in Amemura] A hideaway on the seventh floor of an Amemura building across from BIG STEP, reached through a narrow alley on the building's south side (call when close; first-timers get lost), open since 2017. The monthly omakase (¥8,800 or ¥11,000) is Japanese at heart with Western and ethnic twists, from a platter of about ten seasonal small bites to a warm hamo and matsutake bowl in autumn. The fixtures are what bring repeat diners back each month: toro-taku on red-vinegar rice, Saga beef roast beef over achar, a bubbling pot of wagyu with simmered egg, clay-pot rice, and a melting pudding one diner said could rival a dessert shop. Staff suggest sake and wine to match. Report allergies when you book.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 18 February 2017 (Tabelog)', background: 'Creative Japanese restaurant (official site jampa.co.jp; Tabelog).', philosophy: null, specialty: 'Monthly creative omakase; toro-taku; pudding.',
      anecdotes: [
        { text: '"The red vinegar sushi and roast beef are my all-time favorites… The black-haired Wagyu was served with simmered eggs… When the lid of the small pot was lifted, it was bubbling away." — September 2026, seasonal omakase, ninth visit.', source: R + 'B478064093/' },
        { text: '"Despite being Japanese cuisine, the addition of ethnic flavors created a perfect balance… The conger eel was served in an ethnic style, wrapped in lettuce." — August 2026.', source: R + 'B533372024/' },
      ],
      japanese_sources_summary: '食べログ: 創作和食 Jampa、大阪市中央区西心斎橋2-10-31 ASUKAアメ村BLD 7F、心斎橋駅・四ツ橋駅から徒歩5分、アメ村のBIG STEPの向かい、建物北側の看板から南側の細い路地を回りエレベーターで7階、月〜土・祝 17:00〜23:00(L.O. 22:30)、日休み、混雑時は約2時間半制、アレルギーは事前に、カード・PayPay可、14席(カウンター6、半個室テーブル8、4名以上で個室)、2017年2月18日開店、公式 jampa.co.jp。口コミ(2025年11月〜2026年9月): 9月のおまかせ、季節の前菜、鱧と松茸の温物、赤酢寿司 鮪のトロと沢庵の趣、佐賀牛のローストビーフ、洋風の魚介、鮑のグラタン、黒毛和牛の煮玉子添えの小鍋、白ご飯、土鍋ご飯、和の超なめらかプリン、鮎、鮑のバターソテー、和牛、20時からアラカルト、日本酒とワインのペアリング、プリンに米油、コース11,000円、飲み放題5,000円、迷いやすいので近くで電話を、アチャールを敷いたローストビーフ、8,800円のコース、すっぽん鍋の追加、子持ち鮎、10品の前菜盛り、鱧と玉ねぎの出汁、赤身とミスジのローストビーフ、鱧をレタスで巻くエスニック風、鮑と砂肝のフライ、ゴーヤとピーマン、海老せん、黒毛和牛のミルフィーユカツ。',
      confidence: 'medium', sources: [TB, OWN, R + 'B478064093/', R + 'B517638352/', R + 'B527359067/', R + 'B528948464/', R + 'B532347460/', R + 'B533372024/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff suggest drink pairings; call for directions (2026 reviews).' },
    safety: { ...SAFETY0, staff_allergy_handling: ['Asks guests to report allergies and dislikes in advance (Tabelog).'] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区西心斎橋2-10-31 ASUKAアメ村BLD 7F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区西心斎橋二丁目10番31号 (go) 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B527359067/', R + 'B533372024/'],
    price_note: 'Course prices from April and September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Monthly omakase course', '¥8,800', 'Course', 'no', 'no', 'September 2026.', 'course_8800'),
      it('', '', 'Monthly omakase course', '¥11,000', 'Course', 'no', 'no', 'April 2026.', 'course_11000'),
      it('', '', 'All-you-can-drink', '¥5,000', 'Drinks', 'ask', 'ask', 'April 2026.', 'nomihodai'),
      it('赤酢寿司 鮪のトロと沢庵の趣', '', 'Red-vinegar sushi of toro and takuan (toro-taku)', '', 'Course dishes', 'no', 'no', 'September 2026.', 'torotaku'),
      it('和の超なめらかプリン', '', 'Japanese ultra-smooth pudding', '', 'Course dishes', 'no', 'no', 'September 2026.', 'pudding'),
    ] }, {
    cuisine: '毎月変わる創作和食のおまかせ・コース8,800円と11,000円・約10品の季節の前菜盛り・温物(秋は鱧と松茸)・赤酢のシャリのトロたく・アチャールを敷いた佐賀牛のローストビーフ・洋風の魚介(鮑のグラタンやバターソテー)・黒毛和牛の煮玉子添えの小鍋、または和牛のミルフィーユカツ・鮎、追加ですっぽん鍋・土鍋ご飯・和の超なめらかプリン・日本酒とワインのペアリング・カウンター6席、半個室テーブル8席、4名以上で個室',
    neighborhood: '中央区西心斎橋2-10-31 ASUKAアメ村BLD 7F、BIG STEPの向かい、入口は建物南側の細い路地から。心斎橋駅・四ツ橋駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。出汁や醤油の料理、和牛のカツを含むおまかせ。アレルギーは事前に伝えてください。',
    vegan_detail: 'ヴィーガンではありません。おまかせ全体に魚介、和牛、出汁。',
    notes: '[和食・アメ村のビル7階に隠れた創作和食のおまかせ] アメ村のBIG STEPの向かい、建物南側の細い路地から入るビル7階の隠れ家で(近くで電話を、初めてだと迷う)、2017年開店。毎月変わるおまかせ(8,800円か11,000円)は和が軸に洋やエスニックをひねり、約10品の季節の小鉢から秋の鱧と松茸の温物まで。毎月通う人を呼ぶのは定番: 赤酢のシャリのトロたく、アチャールを敷いた佐賀牛のローストビーフ、ぐつぐつの和牛の煮玉子添えの小鍋、土鍋ご飯、そして甘味処にも負けないという声もあるとろけるプリン。日本酒やワインは料理に合わせて提案してくれる。アレルギーは事前に。',
  });
}

save();
