// Kyoto priority (kyoto-missed), worker osw13, batch 47 — lane: Tabelog id mod 6 = 0.
// Core: パエリアレストラン バラッカ, ヒレ焼肉 京都園. Notable: Rauk 本店, 肉料理 川もり.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-05';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-47');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ パエリアレストラン バラッカ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26027532/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.barraca.jp/';
  const H = day(['11:30', '21:30']);
  put({
    id: 'kyoto_barraca_paella', name: 'パエリアレストラン バラッカ (Barraca)', category: 'OMNI',
    lat: 35.009976, lng: 135.764060, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Paella is rice, but no gluten information is given; there is homemade bread, ajillo and pasta-style dishes beside it (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegan and vegetarian options, and there is a vegetable paella (2026 reviews), but how the stock is made is not stated. Most paellas use seafood, chicken or bacon.',
    hours_raw: 'Tabelog: daily 11:30–21:30 — lunch 11:30–16:00, dinner 16:00–21:30 (food L.O. 20:30, drinks 21:00); take-away paella orders until 20:30, pick-up by 21:00; irregular closures. Bookings online through the official site; parties of 7 or more by phone. No service charge or cover (Tabelog; Japanese original 「サービス料・チャージ無し」). 40 seats: 24 downstairs, 16 upstairs (upstairs can be hired); non-smoking; children welcome; BYO allowed; cards and IC e-money, no QR (Tabelog). Opened 12 June 2016 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yanagibamba-dori near Oike — 5 min walk from Karasuma Oike Stn',
    cuisine: 'Paella restaurant of the local Bajarbol group, named after the farmhouses of the Albufera near Valencia (official site) · about eleven paellas, including a small one-gō size; iron-pan paella lunch with salad and soup — vegetable ¥2,350 (May 2026) or ¥2,480 (August 2026), mixed chicken and seafood ¥2,780, sardine and tomato ¥2,150, bacon and cheese (2026 reviews; Tabelog) · tapas: oven-baked lamb with lemon ¥1,540, gizzard ajillo ¥1,100, prosciutto and mushroom ajillo ¥1,100, smoked salmon salad ¥1,050, sea bass with garlic-lemon sauce ¥1,800, homemade bread ¥400 (2026 reviews) · Spanish courses; wine, cocktails and mocktails ¥660 (2026 reviews) · take-away paella by the day before (official site)',
    website: SITE, gmaps: gm('パエリアレストラン バラッカ 柳八幡町'), menu_url: SITE + 'paella.html',
    notes: '[Paella · Oike, a Valencian farmhouse in Kyoto] A two-floor Spanish dining room by Oike that cooks about eleven paellas in iron pans, from vegetable to seafood and chicken, in one-gō sizes for one or two. Lunch sets with salad and soup run ¥2,150–2,780; tapas like gizzard ajillo and lemon lamb fill out dinner. Paella takes time — reviewers say it is worth the wait. A regular noted prices rising and bread dropped from the lunch set (August 2026). Vegan options are listed — ask. Sister café nearby.',
    chef_bio: { chef_name: null, roles: ['Not named in a source; run by Bajarbol Co. (official site)'], origin: null,
      background: 'Per the official sites: run by Bajarbol (バハルボール), a company that began with a small restaurant at Teramachi-Nijo and also runs a paella food truck (Paella Bus) and the sister Café Barraca nearby (亀屋町380); the name Barraca is the thatched, whitewashed farmhouse around Lake Albufera near Valencia, where paella began with rabbit and chicken. Opened 12 June 2016 (Tabelog).',
      philosophy: 'Official site: everyday Spanish food, without formality, that turns an ordinary meal into a good memory.',
      specialty: 'Iron-pan paella; tapas.',
      anecdotes: [
        { text: 'A seventh-time regular noted in August 2026 that paella prices had risen since May and that homemade bread was no longer part of the lunch set.', source: R + 'B492752591/' },
        { text: 'A wall display of pan sizes helps choose how big a paella to order (August 2026).', source: R + 'B533369585/' },
        { text: '"I heard that this is the only paella specialty restaurant in Kyoto." — October 2026.', source: R + 'B538691147/' },
      ],
      japanese_sources_summary: '公式サイト (barraca.jp、bajarbol.jp): パエリアレストラン バラッカ、店名はバレンシアのアルブフェラ湖のまわりの漆喰塗りで藁ぶき屋根の家「BARRACA」から、パエリアは猟師がウサギや鶏で作ったのが始まり、伝統的なパエリアからオリジナルまで、パエリアの持ち帰りは前日までの予約、中京区柳八幡町78 (柳馬場通姉小路上ル)、姉妹店カフェバラッカ (亀屋町380、御幸町通御池上ル)、運営はバハルボール (寺町二条のビルの奥の小さなレストランから始まった会社、パエリアバス)。食べログ: スペイン料理・バル・居酒屋、毎日11:30〜21:30 (ランチ〜16:00、ディナー16:00〜、料理 L.O. 20:30)、テイクアウトは20:30まで注文・21:00受け取り、不定休、7名以上は電話予約、サービス料・チャージ無し、40席 (1階24、2階16)、2階は貸切可、禁煙、子供可、持ち込み可、ヴィーガン・ベジタリアン対応、カード・交通系IC可、QR不可、2016年6月12日オープン、パエリア11種ほど、1合の小サイズ。口コミ (2026年5月〜10月、英語): 鉄鍋パエリアランチ (サラダとスープ付き)、野菜2,350円 (5月)・2,480円 (8月)、鶏と魚介のミックス2,780円、鰯とトマト2,150円、ベーコンとチーズ、仔羊のオーブン焼きレモン1,540円、砂肝のアヒージョ1,100円、生ハムときのこのアヒージョ1,100円、スモークサーモンのサラダ1,050円、スズキのガーリックレモンソース1,800円、自家製パン400円、モクテル660円、パエリアは時間がかかる、値上げとランチのパンがなくなった、京都で唯一のパエリア専門店と聞いたという声。',
      confidence: 'medium', sources: [TB, SITE, 'http://www.bajarbol.jp/', R + 'B492752591/', R + 'B531422162/', R + 'B531566268/', R + 'B531720749/', R + 'B532513837/', R + 'B533131524/', R + 'B533369585/', R + 'B537345889/', R + 'B538494770/', R + 'B538691147/'] },
    cultural_comfort: { level: 'english', note: 'English page on the official site; photo and digital menus (Tabelog); book online.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区柳八幡町78',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.009931, 135.764060) moved 5 m north to (35.009976, 135.764060): the Tabelog point was 4.7 m from kyoto_comme_chez_michel (柳八幡町80-1, next door); now 9.7 m from it; cross-checked: GSI 京都府京都市中京区柳八幡町78番地 (lot) 47m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B492752591/', R + 'B532513837/'],
    price_note: 'Prices from 2026 reviews; paella prices rose between May and August 2026.', last_checked: TODAY, items: [
      it('', '', 'Iron-pan paella lunch: vegetable (with salad and soup)', '¥2,480', 'Lunch', 'ask', 'ask', 'August 2026; ¥2,350 in May.', 'paella'),
      it('', '', 'Iron-pan paella lunch: mixed chicken and seafood', '¥2,780', 'Lunch', 'ask', 'no', 'August 2026.', 'paella'),
      it('', '', 'Oven-baked lamb with lemon', '¥1,540', 'Tapas', 'ask', 'no', '', 'lamb'),
      it('', '', 'Gizzard ajillo', '¥1,100', 'Tapas', 'ask', 'no', '', 'ajillo'),
      it('', '', 'Homemade bread (4 pieces)', '¥400', 'Tapas', 'no', 'ask', 'July 2026.', 'bread'),
      it('', '', 'Mocktail / soda', '¥660', 'Drink', 'ask', 'ask', 'July 2026.', 'drink'),
    ] }, {
    cuisine: '地元のバハルボールのパエリア専門店で、店名はバレンシアのアルブフェラ湖の農家から (公式サイト)・パエリア11種ほど、1合の小サイズも、サラダとスープ付きの鉄鍋パエリアランチ: 野菜2,350円 (2026年5月)・2,480円 (2026年8月)、鶏と魚介のミックス2,780円、鰯とトマト2,150円、ベーコンとチーズ (2026年の口コミ、食べログ)・タパス: 仔羊のオーブン焼きレモン1,540円、砂肝のアヒージョ1,100円、生ハムときのこのアヒージョ1,100円、スモークサーモンのサラダ1,050円、スズキのガーリックレモンソース1,800円、自家製パン400円 (2026年の口コミ)・スペイン料理のコース、ワイン、カクテル、モクテル660円 (2026年の口コミ)・前日までの予約でパエリアの持ち帰り (公式サイト)',
    neighborhood: '姉小路の北の柳馬場通、御池近く。烏丸御池駅から徒歩5分',
    gf_detail: '要確認。パエリアは米だがグルテンの情報はなく、自家製パンやアヒージョもある (2026年の口コミ)。',
    vegan_detail: '要確認。食べログにはヴィーガン・ベジタリアン対応とあり、野菜のパエリアもある (2026年の口コミ) が、スープの取り方は書かれていない。ほとんどのパエリアは魚介、鶏、ベーコン入り。',
    notes: '[パエリア・御池、京都のバレンシアの農家] 御池近くの2階建てのスペイン料理店で、野菜から魚介や鶏まで11種ほどのパエリアを鉄鍋で炊き、1〜2人向けの1合サイズもある。サラダとスープ付きのランチは2,150〜2,780円、夜は砂肝のアヒージョや仔羊のレモン焼きなどのタパスも。パエリアは時間がかかるが待つ価値ありという声。2026年8月の常連は値上がりとランチのパンがなくなったことを書く。ヴィーガン対応の記載あり (要確認)。近くに姉妹店のカフェ。',
  });
}

// ================================================================ ヒレ焼肉 京都園
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26039682/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_hire_yakiniku_kyotoen', name: 'ヒレ焼肉 京都園 (Hire Yakiniku Kyoto En)', category: 'OMNI',
    lat: 35.005709, lng: 135.777868, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; yakiniku with house sauces and ponzu, a sukiyaki in sweet soy, and cold noodles to finish (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wagyu tenderloin course with beef sashimi and sukiyaki (2026 reviews).',
    hours_raw: 'Tabelog: daily 17:00–23:00 (food L.O. 21:30, drinks 22:00); large groups outside these hours by arrangement; irregular closures. Same-day bookings accepted if seats are free. 20 seats at four tables; smoking allowed — ask before bringing children; English menu; cards, e-money and QR (Tabelog). No service charge listed on Tabelog. Opened 6 July 2023 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion near Yasaka Shrine and Chion-in, second floor — 7 min walk from Gion-Shijo Stn',
    cuisine: 'Yakiniku specialising in wagyu tenderloin · the "Hire Yakiniku" course ¥22,000: kimchi, namul, Korean seaweed, beef sashimi (salt yukhoe with caviar), about 200 g each of wagyu Chateaubriand and tenderloin grilled at the table and pulled apart with a fork, sirloin sukiyaki under shaved summer truffle with egg, seaweed soup, rice, mini cold noodles (2026 reviews) · Omi beef cuts (July 2026) · sauces, salt, grated-daikon ponzu, wasabi, yuzu pepper, meat miso (July 2026) · lemon chuhai, makgeolli (2026 reviews)',
    website: null, gmaps: gm('ヒレ焼肉 京都園 松原町'), menu_url: null,
    notes: '[Yakiniku · Gion, tenderloin only] A small upstairs yakiniku near Yasaka Shrine that serves only tenderloin: one ¥22,000 course where the staff grill thick wagyu Chateaubriand and fillet at the table until it pulls apart with a fork, then a sirloin sukiyaki buried in shaved truffle. Diners call it pricey but worth it. Smoking allowed. Open daily till 23:00.',
    chef_bio: { chef_name: null, roles: ['Owner who grills at the table (October 2026); not named'], origin: null,
      background: 'Opened 6 July 2023 (Tabelog). Reviewers in 2026 describe a tenderloin-only yakiniku on the second floor near Yasaka Shrine and Chion-in, where the owner or staff grill each cut at the table and guests compare Chateaubriand, head tenderloin and fillet of Omi beef.',
      philosophy: null,
      specialty: 'Wagyu Chateaubriand and tenderloin; truffle sukiyaki.',
      anecdotes: [
        { text: 'For the first bite, a July 2026 guest was told to dip the meat in a cocotte of beef fat and whole garlic warming on the grill.', source: R + 'B531921021/' },
        { text: '"What surprised me the most was the enormous Chateaubriand and Tenderloin, which looked like Ayers Rock!" — September 2026.', source: R + 'B536340003/' },
        { text: 'An October 2026 guest used the egg left from the sukiyaki to make egg over rice at the end.', source: R + 'B536859627/' },
      ],
      japanese_sources_summary: '食べログ: ヒレ焼肉 京都園、焼肉、東山区松原町272-5 コミュニティ祇園ビル2F、八坂神社から200m、毎日 17:00〜23:00 (料理 L.O. 21:30、ドリンク L.O. 22:00)、営業時間外の団体は相談、不定休、空きがあれば当日予約可、20席 (4名2卓・6名2卓)、喫煙可 (子供連れは相談)、英語メニュー、カード・電子マネー・QR可、2023年7月6日オープン。口コミ (2026年7月〜10月、英語): ヒレ焼肉コース22,000円、キムチ、ナムル、韓国のり、肉刺し (塩ユッケとキャビア)、和牛シャトーブリアンとヒレ各200gほどをフォークで裂ける焼き加減に、サーロインの夏トリュフすき焼き、わかめスープ、ご飯、冷麺、近江牛、タレ・塩・おろしポン酢・わさび・柚子胡椒・肉味噌、店主が焼いてくれる、高いが価値があるという声。',
      confidence: 'medium', sources: [TB, R + 'B531808976/', R + 'B531853796/', R + 'B531921021/', R + 'B532112757/', R + 'B533771630/', R + 'B533871705/', R + 'B536256516/', R + 'B536340003/', R + 'B536859627/', R + 'B537512836/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); one course, grilled for you at the table.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区松原町272-5 コミュニティ祇園ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.005709, 135.777868); cross-checked: GSI 京都府京都市東山区松原町272番地 (lot) 52m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B531853796/', R + 'B533771630/'],
    price_note: 'Course price from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Hire Yakiniku course (tenderloin, Chateaubriand, truffle sukiyaki)', '¥22,000', 'Course', 'ask', 'no', 'July–October 2026.', 'yakiniku'),
    ] }, {
    cuisine: '和牛のヒレ専門の焼肉・「ヒレ焼肉コース」22,000円: キムチ、ナムル、韓国のり、肉刺し (塩ユッケとキャビア)、テーブルで焼いてフォークで裂ける和牛シャトーブリアンとヒレ各200gほど、夏トリュフを削ったサーロインのすき焼きと卵、わかめスープ、ご飯、ミニ冷麺 (2026年の口コミ)・近江牛 (2026年7月)・タレ、塩、おろしポン酢、わさび、柚子胡椒、肉味噌 (2026年7月)・レモンチューハイ、マッコリ (2026年の口コミ)',
    neighborhood: '八坂神社と知恩院の近くの祇園、ビルの2階。祇園四条駅から徒歩7分',
    gf_detail: '要確認。グルテンの情報なし。タレやポン酢の焼肉、甘い醤油のすき焼き、〆の冷麺 (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 肉刺しとすき焼きのある和牛ヒレのコース (2026年の口コミ)。',
    notes: '[焼肉・祇園、ヒレだけ] 八坂神社近くのビルの2階の、ヒレだけの焼肉。22,000円のコース一本で、分厚い和牛のシャトーブリアンとヒレをテーブルで焼いてフォークで裂けるほどに仕上げ、最後はトリュフを削ったサーロインのすき焼き。高いが価値ありという声。喫煙可。毎日23時まで。',
  });
}

// ================================================================ Rauk 本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26002626/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://rauk.okoshi-yasu.com/';
  const H = day(['07:00', '18:30']);
  put({
    id: 'kyoto_rauk_honten', name: 'Rauk 本店 (Boulangerie Rauk)', category: 'OMNI',
    lat: 34.989975, lng: 135.755131, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a wheat bakery of breads, sandwiches, Danishes and pies (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: cream buns, bacon epi, burgers and egg sandwiches; no item is marked vegan (2026 reviews).',
    hours_raw: 'Official site and Tabelog: 7:00–18:30; closed Thursday. Take-away only; products can be reserved (Tabelog). No cards; e-money and QR accepted (Tabelog). No service charge listed on Tabelog. Opened 2 October 2001 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishinotoin north of Shichijo, between the two Hongan-ji temples — 7 min walk from Kyoto Stn',
    cuisine: 'Neighbourhood bakery with some 30 kinds of bread from 7 am · signature "California Uji" (red-bean paste and walnuts, soft or hard) about ¥250; custard cream bun ¥240; chocolate gâteau ¥280; Western-style curry bread ¥260; pain aux raisins ¥460; Kyoto melon bread with matcha ¥305; "Wasa Mayo" bacon bread with wasabi mayo and shiso; Tsukimi cheese burger ¥519; bacon epi; mizuna sandwich (2026 reviews)',
    website: SITE, gmaps: gm('Rauk ルーク 福本町 西洞院'), menu_url: null,
    notes: '[Bakery · Nishinotoin-Shichijo, from 7 am] A small retro bakery blending into a residential street north of Shichijo, open from 7 am with about thirty breads: the walnut-and-red-bean "California Uji", a lemony custard cream bun, wasabi-mayo bacon bread, burgers. A friendly owner and classical music; a May 2026 regular found prices higher and a sandwich’s tomato thin. Take-away only. Closed Thursday.',
    chef_bio: { chef_name: null, roles: ['Owner (April 2026 review); not named'], origin: null,
      background: 'Opened 2 October 2001 (Tabelog). The shop’s own page shows the main shop blending into the houses around it, so that drivers often pass it. Reviewers in 2026 describe a small retro bakery between Higashi and Nishi Hongan-ji, about 30 breads, classical music and a friendly owner.',
      philosophy: null,
      specialty: 'California Uji; cream bun.',
      anecdotes: [
        { text: 'A February 2026 hotel guest next door bought breakfast here and found the wasabi mayo on the bacon bread a combination never tasted before.', source: R + 'B523371542/' },
        { text: '"Overall, the prices seem a bit high. I wonder if they have increased in line with the recent rise in living costs?" — May 2026, after five years away.', source: R + 'B527821285/' },
        { text: 'A September 2026 customer arriving at the 7 am opening wondered what time baking must start.', source: R + 'B536111872/' },
      ],
      japanese_sources_summary: '店のページ (rauk.okoshi-yasu.com): Boulangerie Rauk (ルーク)、本店の外観は周りの民家にとけこんでいて車では通り過ぎる人も多い、下京区西洞院七条上る福本町422-2、7:00〜18:30、木曜定休。食べログ: パン・サンドイッチ・ベーグル、京都駅から徒歩約7分、持ち帰りのみ、予約可、カード不可、電子マネー・QR可、2001年10月2日オープン。口コミ (2026年2月〜10月、英語): パン30種ほど、California Uji (あんこと胡桃、ソフトとハード) 250円ほど、クリームパン240円、ショコラガトー280円、洋風カレーパン260円、パン・オ・レザン460円、Kyoto Melon Bread 305円、Wasa Mayo、Tsukimi Cheese Burger 519円、ベーコンエピ、水菜のサンド、気さくな店主、クラシック音楽、値上がりした、トマトが薄いという声。',
      confidence: 'medium', sources: [TB, SITE, R + 'B523371542/', R + 'B524649211/', R + 'B526464309/', R + 'B526983283/', R + 'B527821285/', R + 'B529078319/', R + 'B532256310/', R + 'B535163654/', R + 'B536111872/', R + 'B537148677/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Pick breads from the shelves and pay at the till; no cards.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区西洞院通七条上ル福本町422-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop page and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.989975, 135.755131); cross-checked: GSI 京都府京都市下京区福本町422番地 (lot) 23m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535163654/', R + 'B526464309/', R + 'B537148677/'],
    price_note: 'Prices from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'California Uji (red-bean paste and walnuts)', '~¥250', 'Bread', 'no', 'ask', 'March 2026.', 'bread'),
      it('', '', 'Cream bun', '¥240', 'Bread', 'no', 'no', 'September 2026.', 'cream_bun'),
      it('', '', 'Western-style curry bread', '¥260', 'Bread', 'no', 'no', 'April 2026 (tax extra).', 'curry_bread'),
      it('', '', 'Tsukimi cheese burger', '¥519', 'Sandwich', 'no', 'no', 'October 2026.', 'burger'),
    ] }, {
    cuisine: '朝7時からパン30種ほどの街のパン屋・名物の「California Uji」(あんこと胡桃、ソフトとハード) 250円ほど、カスタードのクリームパン240円、ショコラガトー280円、洋風カレーパン260円、パン・オ・レザン460円、抹茶のメロンパン「Kyoto Melon Bread」305円、わさびマヨと大葉のベーコンパン「Wasa Mayo」、「Tsukimi Cheese Burger」519円、ベーコンエピ、水菜のサンド (2026年の口コミ)',
    neighborhood: '七条の北の西洞院通、東西の本願寺の間。京都駅から徒歩7分',
    gf_detail: 'グルテンフリーではない: パン、サンドイッチ、デニッシュ、パイの小麦のパン屋 (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: クリームパン、ベーコンエピ、バーガー、卵のサンドなどで、ヴィーガン表示の品はない (2026年の口コミ)。',
    notes: '[パン屋・西洞院七条、朝7時から] 七条の北の住宅街にとけこむ小さなレトロなパン屋で、朝7時から30種ほどのパン。胡桃とあんこの「California Uji」、レモンの香るクリームパン、わさびマヨのベーコンパン、バーガーなど。気さくな店主とクラシック音楽。2026年5月には値上がりした、サンドのトマトが薄いという声も。持ち帰りのみ。木曜休み。',
  });
}

// ================================================================ 肉料理 川もり
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26038722/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '22:00']);
  put({
    id: 'kyoto_niku_ryori_kawamori', name: '肉料理 川もり (Niku Ryori Kawamori)', category: 'OMNI',
    lat: 35.016412, lng: 135.763502, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; yakiniku with house sauces, japchae and garlic rice (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a beef and offal yakiniku (2026 reviews).',
    hours_raw: 'Tabelog: Tue–Sun 17:00–22:00 (last entry 21:30); closed Monday and one other day a month. Bookings taken; a reservation-only restaurant per an October 2026 diner. A charge of ¥500 including tax per guest (Tabelog; Japanese original 「500円（税込）」). 30 seats with a counter, sunken and partitioned private rooms; English menu; children welcome; cards, no e-money or QR (Tabelog). Tabelog lists it as non-smoking, but July 2026 diners and a September 2026 diner say smoking is allowed, including in the semi-private room. A July 2026 regular knew it from its earlier site in Higashiyama.',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'South of Marutamachi, in a machiya down an alley — 7–10 min walk from Marutamachi Stn',
    cuisine: 'Yakiniku of very fresh beef and offal in a Kyoto machiya, à la carte or by course (2026 reviews) · seen: beef sashimi, premium beef-tongue yukhoe, fresh tongue, special outside skirt, seared heart, tetchan, thin-sliced tripe, front-leg cuts, beef tendon, japchae, yukgaejang, garlic rice (2026 reviews) · the house chilli is a must (July 2026) · makgeolli, wine, sake, shochu (2026 reviews; Tabelog) · about ¥10,000–20,000 a head with drinks (2026 reviews)',
    website: null, gmaps: gm('肉料理 川もり 橘町'), menu_url: null,
    notes: '[Yakiniku · near the Imperial Palace, beef fresh enough to eat raw] A tidy yakiniku in a machiya down an alley south of Marutamachi, moved here from Higashiyama, where diners sear very fresh beef and offal only lightly — tongue, skirt, heart, tripe — and the house chilli is a must. Staff show first-timers how to grill and are relaxed with children. ¥500 charge. Smoking allowed in parts despite Tabelog’s listing. Closed Monday.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'A July 2026 regular followed it from its earlier site in Higashiyama. Reviewers in 2026 describe a small, tidy yakiniku in a Kyoto machiya down an alley, popular with locals, with staff who teach guests how to grill and welcome families.',
      philosophy: null,
      specialty: 'Very fresh beef and offal; house chilli.',
      anecdotes: [
        { text: '"Everything except for the Tetchan can be eaten raw!" — October 2026.', source: R + 'B536962212/' },
        { text: 'A September 2026 diner who phoned on the off-chance got a table, and the staff showed how to grill each cut.', source: R + 'B535917991/' },
        { text: '"Considering the abundance of similar quality restaurants in Tokyo, I would rate it a solid 3.5." — June 2026.', source: R + 'B534652995/' },
      ],
      japanese_sources_summary: '食べログ: 肉料理 川もり、焼肉・牛料理、中京区堺町通竹屋町上る橘町97、丸太町駅5番出口から徒歩7〜10分、火〜日 17:00〜22:00 (最終入店21:30)、月曜と月1回の不定休、予約可、チャージ料500円 (税込)、30席 (カウンター、掘りごたつ、仕切りのある個室)、禁煙と記載、英語メニュー、子供可、カード可、電子マネー・QR不可。口コミ (2026年6月〜10月、英語): 以前は東山にあった、路地の京町家、生でも食べられそうな新鮮な肉、肉刺し、上タンのユッケ、生タン、ハラミ、ハツの炙り、テッチャン、センマイ、トウガラシ、牛すじ、チャプチェ、ユッケジャン、ガーリックライス、名物の唐辛子、マッコリ、2人で2万円ほど、焼き方を教えてくれる、子供連れにやさしい、喫煙可 (半個室も)、東京なら同等の店が多いという声。',
      confidence: 'medium', sources: [TB, R + 'B485504107/', R + 'B530295955/', R + 'B531666249/', R + 'B533866634/', R + 'B534652995/', R + 'B534940164/', R + 'B535917991/', R + 'B536418724/', R + 'B536962212/', R + 'B538290600/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); staff show how to grill (September 2026); book ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区堺町通竹屋町上る橘町97',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.016412, 135.763502); cross-checked: GSI 京都府京都市中京区橘町97番地 (lot) 26m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'Only the per-guest charge is published (Tabelog); diners paid about ¥10,000–20,000 a head with drinks (2026).', last_checked: TODAY, items: [
      it('', '', 'Charge per guest', '¥500', 'Charge', 'ask', 'ask', 'Tax included (Tabelog).', 'cover'),
      it('', '', 'Beef sashimi', '', 'À la carte', 'ask', 'no', 'Price not given.', 'beef'),
    ] }, {
    cuisine: '京町家で新鮮な牛肉とホルモンの焼肉、アラカルトかコース (2026年の口コミ)・これまでの品: 肉刺し、上タンのユッケ、生タン、ハラミ、ハツの炙り、テッチャン、センマイ、トウガラシ、牛すじ、チャプチェ、ユッケジャン、ガーリックライス (2026年の口コミ)・名物の唐辛子 (2026年7月)・マッコリ、ワイン、日本酒、焼酎 (2026年の口コミ、食べログ)・飲み物込みで1人1万〜2万円ほど (2026年の口コミ)',
    neighborhood: '竹屋町の北の堺町通、路地の町家。丸太町駅から徒歩7〜10分',
    gf_detail: '要確認。グルテンの情報なし。タレの焼肉、チャプチェ、ガーリックライス (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 牛肉とホルモンの焼肉 (2026年の口コミ)。',
    notes: '[焼肉・御所南、生でもいける肉] 丸太町の南の路地の町家にある、東山から移転したこぢんまりした焼肉屋。生でも食べられそうな新鮮な牛肉とホルモンをさっと炙る。タン、ハラミ、ハツ、センマイ、名物の唐辛子。初めての客には焼き方を教え、子供連れにもやさしい。チャージ500円。食べログは禁煙だが一部喫煙可という口コミ。月曜休み。',
  });
}

save();
