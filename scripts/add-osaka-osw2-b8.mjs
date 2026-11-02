// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first — worker osw2, batch 8 (lane: Tabelog id mod 4 = 1).
//   + 吟味屋 西区新町店 Ginmiya Shinmachi (whole-cattle black-wagyu yakiniku in a kappo-style room; one of five Ginmiya shops)
//   + 宗寿苑 HANARE Soujuen HANARE (second shop of a three-generation Konohana yakiniku; heifer black wagyu, tsurami sashimi)
//   + インターナショナルブラッスリー KUNSEI (smoke-accented modern French on the 33rd floor of Centara Grand Hotel Osaka)
//   + 自然とお肉 green (charcoal-grill izakaya in Shinmachi known for its oyakodon; dogs welcome)
//   Skipped: 心斎橋ミツヤ なんばウォーク店 27055429 — chain: one of many shops of the 心斎橋ミツヤ company, whose site lists eight
//   brands (心斎橋 ミツヤ, 昔洋食 みつけ亭, ピッコロカリー, CAFE BREAK, 蜜家珈琲店, ハンバール, ミツケキッチン, a fruit parlour) and
//   frequent openings (mitsuya.co.jp, read 2026-11-01); listing not shop-maintained.
//   Chain check of the four kept:
//   - Ginmiya: five Osaka shops (天満, 西区新町, 新大阪, 北浜, バルチカ03; ginmiya.jp); none in data; kept as a small group like
//     Mitsuba; flagged.
//   - Soujuen HANARE: the official site lists 宗寿苑 (Konohana), 宗寿苑 HANARE and 神戸 宗寿苑, and names as group shops
//     "つけ麺 雀・きりん寺" (suzume-group.co.jp). Kirinji is in data (e.g. osaka_kirinji_ura_namba, "大阪府大阪市中央区日本橋2-5-8").
//     A different brand and format (yakiniku vs abura-soba), kept on the Alcyon/Kitan precedent; flagged.
//   - KUNSEI: the restaurant of one hotel (Tabelog).
//   - green: one shop (Tabelog).
//   None is in data/osaka.json (grep by name, romaji and address, 2026-11-01). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw2-8');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27055429', 'Chain: 心斎橋ミツヤ なんばウォーク店 is one shop of the 心斎橋ミツヤ company, which runs eight brands and many branches (mitsuya.co.jp).');

// ================================================================ 吟味屋 西区新町店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27013237/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://ginmiya.jp/';
  const H = day(['17:00', '23:15']);
  put({
    id: 'osaka_ginmiya_shinmachi', name: '吟味屋 西区新町店 (Ginmiya Nishiku shimmachi ten)', category: 'OMNI',
    lat: 34.677257, lng: 135.495105, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Much of the meat is marinated or sauced, and the sides include chijimi and cold noodles of the house\'s own noodles (official site); nothing is stated about wheat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a black-wagyu yakiniku restaurant; the kimchi, salad and namul are sides, and the kimchi is not described.',
    hours_raw: 'Mon, Tue, Thu–Sun and holidays 17:00–23:15 (last order 22:45); closed Wednesday and the third Thursday of each month, when the Tenma, Shin-Osaka and Baltica 03 shops stay open (Tabelog). Reservations by phone to each shop (official site; Tabelog); an October 2026 regular says bookings are only taken on the day around opening time, while Tabelog simply lists reservations as available; a February 2026 diner waited without one on a Saturday. Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), transport IC and other e-money, and QR incl. Alipay and WeChat Pay (Tabelog). 40 seats with private rooms for 2–20; non-smoking throughout (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinmachi 1-18-3 — 5 min from Nishi-Ohashi Stn exit 2 and Yotsubashi Stn exit 2',
    cuisine: 'Charcoal yakiniku of top black wagyu bought as whole cattle from around Japan, Kobe, Omi and Yamagata beef among them, in a calm room like a high-end ryotei or kappo (official site; Tabelog) · sides "taught by a Korean chef": kimchi, chijimi, ika-fe (raw squid), changja, cold noodles of the house\'s own noodles and Korean dishes (official site) · from 2025–2026 reviews: sukiyaki-style beef dipped in egg, rare thigh steak with a peppery egg-yolk sauce, negi-shio tongue, thick-cut tongue (book ahead), nakaochi kalbi, outside skirt, hanging tender, salted tongue, tenderloin, Chateaubriand, marinated meat in a jar, sausages, toro sushi, seafood chijimi, Ginmiya salad, abalone porridge, garlic rice; green tea or pineapple juice to finish · sake, shochu, wine, cocktails',
    website: SITE, gmaps: gm('吟味屋 西区新町店'), menu_url: SITE,
    notes: "[Yakiniku · Shinmachi, whole-cattle black wagyu in a kappo-style room] The Shinmachi shop of Ginmiya, a five-shop Osaka yakiniku name whose Tenma shop Tabelog calls the main store. The house buys top black wagyu as whole cattle and grills it over charcoal in a quiet, ryotei-like room with private rooms, a favourite for business dinners. Diners in 2025–2026 single out the sukiyaki-style beef and the rare thigh steak dipped in a peppery egg-yolk sauce, thick-cut tongue (book ahead or it may run out), the marinated meat in a jar and the seafood chijimi; the meal ends with a glass of green tea or pineapple juice. Signed photos of celebrities line the entrance (November 2025). Diners differ on price: some call it great value, others about ¥10,000 a head with drinks (September and October 2026).",
    chef_bio: { chef_name: null, roles: ['Shop staff unnamed; part of the Ginmiya group of five Osaka shops (official site)'], origin: null, background: 'Per the official site, Ginmiya is particular about whole-cattle black wagyu, yakiniku, interiors and tableware; its sides reproduce Korean flavours "taught by a Korean chef"; shops in Tenma, Nishiku Shinmachi, Shin-Osaka, Kitahama and Baltica 03 (Innogate Osaka), the last opened at the end of July 2024. Tabelog calls Tenma the main store. A March 2026 diner heard the staff get no staff meals; a November 2025 diner saw many celebrity signed photos at the entrance.', philosophy: '"Particular about black wagyu, about yakiniku, about the interior, about the tableware" (official site).', specialty: 'Whole-cattle black wagyu; sukiyaki-style beef; seafood chijimi.',
      anecdotes: [
        { text: '"Sukiyaki → Dip it in egg before eating. It\'s tender, sweet, and simply delicious! Rare Steak from the Thigh → This was incredibly tasty." — August 2026, a second visit.', source: R + 'B516573715/' },
        { text: '"What stood out the most was the marinated meat in a jar. It was surprisingly tender, with flavors deeply infused." — October 2026, private room.', source: R + 'B537478628/' },
        { text: '"I visited on a Saturday around 8 PM. Since there was a wait, I recommend making a reservation for a guaranteed spot." — February 2026.', source: R + 'B523426488/' },
      ],
      japanese_sources_summary: '公式サイト: 吟味屋、黒毛和牛一頭買いにこだわる、焼肉・内装・食器にこだわる、高級料亭や割烹店を思わせる落ち着いた和の雰囲気、全国各地から厳選された最高級の黒毛和牛を炭火で、宴会も、韓国人シェフ直伝のキムチ、チヂミ、イカフェ、チャンジャ、吟味屋独自の麺の冷麺、韓国料理、予約は各店舗に電話で。店舗: 天満店、西区新町店 (新町1-18-3)、新大阪店、北浜店、バルチカ03店 (2024年7月末オープン)。食べログ (店舗会員、英語版): Ginmiya Nishiku shimmachi ten、焼肉・ステーキ・韓国料理、西大橋駅・四ツ橋駅2番出口から徒歩5分、月・火・木〜日・祝17:00〜23:15 (L.O.22:45)、水曜と第3木曜休み (天満本店、新大阪店、バルチカ03店は営業)、予約可、カード・電子マネー・QR (Alipay、WeChat Pay など) 可、40席、個室 (2〜20名)、全面禁煙、神戸牛・近江牛・山形牛。口コミ(2025年11月〜2026年10月): 卵にくぐらせるすき焼き、胡椒の効いた卵黄のたれで食べるもものレアステーキ、ねぎ塩タン、厚切りタン (予約しないとなくなるかも)、Nakaochi カルビ、ハラミ、サガリ、塩タン、ヘレ、シャトーブリアン、壺漬けの肉、ソーセージ、とろの sushi、海鮮チヂミ、吟味屋サラダ、あわび粥、ガーリックライス、締めに緑茶かパイナップルジュース、入口に有名人のサイン、予約は当日の開店ごろだけという声、待った土曜、1人1万円ほどという声、北浜店にも行ったという声。',
      confidence: 'medium', sources: [TB, SITE, R + 'B516573715/', R + 'B518733777/', R + 'B520252073/', R + 'B523426488/', R + 'B524227185/', R + 'B530264597/', R + 'B536355949/', R + 'B536508146/', R + 'B537478628/', R + 'B538070544/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Private rooms; book by phone. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区新町1-18-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (shop list) and shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区新町一丁目18番3号 (go) 5m. Nearest record やまもと菓子店 (osaka_yamamoto_kashiten_shinmachi, "…新町1-21-3 小林ビル 1F") is about 44 m away, so the pin stays precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [SITE, TB],
    price_note: 'No menu prices found; diners report about ¥4,000–14,999 a head (2026).', last_checked: TODAY, items: [
      it('', '', 'Sukiyaki-style beef dipped in egg', '', 'Wagyu', 'ask', 'no', 'August 2026.', 'sukiyaki'),
      it('', '', 'Rare thigh steak with peppery egg-yolk sauce', '', 'Wagyu', 'ask', 'no', 'November 2025, August 2026.', 'rare_steak'),
      it('', '', 'Thick-cut tongue', '', 'Tongue', 'ask', 'no', 'March 2026.', 'thick_tongue'),
      it('', '', 'Seafood chijimi', '', 'Sides', 'no', 'no', 'November 2025, August 2026.', 'seafood_chijimi'),
    ] }, {
    cuisine: '全国から一頭買いする最高級の黒毛和牛 (神戸牛、近江牛、山形牛など) を炭火で、高級料亭や割烹のような落ち着いた和の空間で (公式サイト、食べログ)・韓国人シェフ直伝のサイド: キムチ、チヂミ、イカフェ、チャンジャ、吟味屋独自の麺の冷麺、韓国料理 (公式サイト)・2025〜2026年の口コミから: 卵にくぐらせるすき焼き、胡椒の効いた卵黄のたれのもものレアステーキ、ねぎ塩タン、厚切りタン (予約しないとなくなるかも)、Nakaochi カルビ、ハラミ、サガリ、塩タン、ヘレ、シャトーブリアン、壺漬けの肉、ソーセージ、とろの sushi、海鮮チヂミ、吟味屋サラダ、あわび粥、ガーリックライス、締めに緑茶かパイナップルジュース・日本酒、焼酎、ワイン、カクテル',
    neighborhood: '新町1-18-3。西大橋駅2番出口、四ツ橋駅2番出口から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。多くの肉はタレや漬けだれで、サイドにはチヂミや吟味屋独自の麺の冷麺も (公式サイト)。小麦の説明はない。',
    vegan_detail: 'ヴィーガンではありません。黒毛和牛の焼肉の店で、キムチ、サラダ、ナムルはサイド。キムチの説明はない。',
    notes: '[焼肉・新町、一頭買いの黒毛和牛を割烹のような部屋で] 大阪に5店ある吟味屋の新町店で、食べログでは天満店が本店。最高級の黒毛和牛を一頭買いし、料亭のような静かな部屋で炭火で焼く。個室もあり接待にもよく使われる。2025〜2026年の口コミで名前が挙がるのは、卵にくぐらせるすき焼き、胡椒の効いた卵黄のたれで食べるもものレアステーキ、厚切りタン (予約しないとなくなるかも)、壺漬けの肉、海鮮チヂミ。締めには緑茶かパイナップルジュースが出る。入口には有名人のサインがずらり (2025年11月)。値段の感じ方は分かれ、とてもお得という声も、飲み物込みで1人1万円ほどという声も (2026年9月、10月)。',
  });
}

// ================================================================ 宗寿苑 HANARE
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27126013/'; const R = TB + 'dtlrvwlst/'; const P = TB + 'party/';
  const SITE = 'https://soujyuen.co.jp/';
  const W = day(['17:00', '01:00']); const S = day(['17:00', '23:00']);
  put({
    id: 'osaka_soujuen_hanare_minamisenba', name: '宗寿苑 HANARE (Soujuen HANARE)', category: 'OMNI',
    lat: 34.67606, lng: 135.498901, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Much of the beef is eaten with the house sauce (official site), and the seared yukhoe comes in a sauce with egg yolk; nothing is stated about wheat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a black-wagyu yakiniku restaurant; namul, salad and kimchi are sides.',
    hours_raw: 'Mon–Sat and holiday eves 17:00–01:00; Sundays and holidays 17:00–23:00 (Tabelog). Reservations accepted; courses for 2–38 (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) and PayPay (Tabelog). 46 seats: an 8-seat counter on 1F, tables and table private rooms on 2F; non-smoking, with e-cigarettes allowed upstairs per an August 2026 diner; wheelchair accessible; sports viewing (Tabelog; 2026). Opened 8 October 2021 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: W, 6: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Minami-Semba 4-11-8 — 5 min from Shinsaibashi Stn and Yotsubashi Stn',
    cuisine: 'Yakiniku of black-wagyu heifers, chosen for clean-tasting fat from long-standing suppliers, with offal fresh enough for tsurami (cheek) sashimi (official site) · menu highlights (official site): special ribeye as yaki-shabu or steak cut, special wagyu assortment, tongue platter from premium to regular cuts, the day\'s lean thigh, seared yukhoe dipped in egg · rice of a five-star rice meister\'s blend cooked in a gas kama, namul and salads of vegetables bought each morning, real unpasteurised makgeolli (official site) · courses, tax included (Tabelog): Namba Senba ¥5,500 (5 items), Soujuen ¥8,800 (8 items), Goku ¥11,000 (9 items) · from 2026 reviews: special Spencer-roll (ribeye) steak about ¥3,000, tail soup, Chateaubriand, raw omasum, grilled liver, akasen, salted tongue, outside skirt · sake, shochu, wine, cocktails',
    website: SITE, gmaps: gm('宗寿苑 HANARE 南船場'), menu_url: P,
    notes: "[Yakiniku · Minami-Semba, a three-generation family's second shop] The stylish second shop, opened in 2021, of 宗寿苑, a Konohana yakiniku run by its third-generation owner, 竹城成吉, for about sixty years (official site). It serves only black-wagyu heifers, picked for clean fat, and offal fresh enough to eat raw: the tsurami (cheek) sashimi is the house proof and the dish diners remember. Also order the seared yukhoe in egg yolk, the special ribeye as a steak (about ¥3,000 in September 2026) and the collagen-rich tail soup; the rice is cooked from a rice meister's blend. Counter seats downstairs, tables and private rooms up a stair lined with athletes' signatures. Courses run ¥5,500–11,000. One June 2026 diner had all the meat brought at once and remembered frozen meat on an earlier visit.",
    chef_bio: { chef_name: null, roles: ['宗寿苑 owner 竹城成吉, third generation (official site); HANARE staff unnamed', 'Group shops listed on the site: つけ麺 雀 and きりん寺 (suzume-group.co.jp)'], origin: 'Konohana, Osaka (the original 宗寿苑; official site).', background: 'Per the official greeting, 宗寿苑\'s owner 竹城成吉 is the third generation since the grandfather, about 60 years, keeping to the basics while adding new sensibility; heifers are bought from trusted suppliers on colour, size and fat quality; tsurami sashimi proves the offal\'s freshness; cuts and sauces reflect the cook\'s care. The site lists 宗寿苑 (Konohana), 宗寿苑 HANARE (Minami-Semba, opened 8 October 2021 per Tabelog) and 神戸 宗寿苑, and promises "the owner\'s distinctive talk". Diners describe friendly staff (2026).', philosophy: '"Without chasing fashion, keep to the basics while adding new sensibility" (official site).', specialty: 'Tsurami (cheek) sashimi; seared yukhoe; special ribeye.',
      anecdotes: [
        { text: '"What left the biggest impression on me was the tsurami sashimi. The moment I took a bite, the rich flavor of the meat spread gently in my mouth." — August 2026.', source: R + 'B534607475/' },
        { text: '"I highly recommend the Special Spencer Roll Steak… And it\'s only about JPY 3000!" — September 2026.', source: R + 'B536047098/' },
        { text: '"As mentioned in the reviews, we tried the Aburi Yukhoe and Tsurami Sashimi. They were indeed delicious… And above all, the cost performance was excellent!" — October 2026.', source: R + 'B537128115/' },
      ],
      japanese_sources_summary: '公式サイト: 宗寿苑、店主 竹城成吉、祖父の代から三代目、約60年間、流行に左右されず基本を守りながら新しい感性を盛り込む、黒毛和牛の雌牛、色・大きさ・脂の質を見極め信頼を築いてきた取引先から、鮮度が命のホルモン、その証がつらみの刺身、食感を大切にした切り方と肉の旨みを引き出すタレ、毎朝仕入れる野菜のナムルやサラダ、五つ星お米マイスターが当店の肉を味わってブレンドした米をガス釜で、乳酸菌が生きた本場の生マッコリ、リーズナブル。メニュー: 特選リブロース (焼きしゃぶかステーキカット)、特選和牛盛合せ、タン盛り、本日の赤身モモ、炙りユッケ (卵にくぐらせて)。店舗: 宗寿苑 (此花区酉島1-14-17、ノスタルジックな本店)、宗寿苑 HANARE (南船場4-11-8、カウンター席・テーブル席・テーブル個室)、神戸 宗寿苑。グループ店: つけ麺 雀・きりん寺。食べログ (店舗会員、英語版): 心斎橋駅・四ツ橋駅から徒歩5分、月〜土・祝前17:00〜翌1:00、日・祝17:00〜23:00、カード・PayPay可、46席 (カウンター8、テーブル4×5)、個室、禁煙、車椅子可、オープン2021年10月8日、コース (税込): 難波船場5,500円、宗寿苑8,800円、極11,000円。口コミ(2026年6月〜10月): つらみ刺し、炙り Yukhoe、生センマイ、タン、ハラミ、シャトーブリアン、炙りレバー、Akasen、特選リブロースのステーキ3,000円ほど、テールスープ、1階カウンター、2階テーブル、階段にスポーツ選手のサイン、2階は電子たばこ可、肉が一度に出てきた・以前は冷凍だったという声。',
      confidence: 'medium', sources: [TB, P, SITE, R + 'B531229735/', R + 'B532148961/', R + 'B533077418/', R + 'B533320830/', R + 'B534273674/', R + 'B534607475/', R + 'B534909035/', R + 'B536047098/', R + 'B537128115/', R + 'B537828713/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter downstairs, tables upstairs. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場4-11-8',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場四丁目11番8号 (go) 5m. Nearest record アマーク ド パラディ (osaka_hamac_de_paradis_minamisenba, "…南船場4-12-21") is about 52 m away, so the pin stays precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [P, R + 'B536047098/'],
    price_note: 'Course prices from the shop-maintained Tabelog course pages (tax included); the ribeye steak from a September 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Namba Senba course (5 items)', '¥5,500', 'Course', 'ask', 'no', 'Tabelog; the most booked.', 'namba_senba_course'),
      it('', '', 'Soujuen course (8 items)', '¥8,800', 'Course', 'ask', 'no', 'Tabelog.', 'soujuen_course'),
      it('つらみの刺身', '', 'Tsurami (cheek) sashimi', '', 'Raw', 'ask', 'no', 'Official site; 2026 reviews.', 'tsurami_sashi'),
      it('炙りユッケ', '', 'Seared yukhoe dipped in egg', '', 'Raw', 'ask', 'no', 'Official site.', 'aburi_yukhoe'),
      it('特選リブロース', '', 'Special ribeye, yaki-shabu or steak cut', '¥3,000', 'Wagyu', 'ask', 'no', 'Official site; about ¥3,000 per a September 2026 review.', 'ribeye'),
    ] }, {
    cuisine: '脂のキレがいい黒毛和牛の雌牛を信頼を築いてきた取引先から、鮮度の証のつらみの刺身 (公式サイト)・メニューから (公式サイト): 焼きしゃぶかステーキカットの特選リブロース、特選和牛盛合せ、特上から並までのタン盛り、本日の赤身モモ、卵にくぐらせる炙りユッケ・五つ星お米マイスターのブレンド米をガス釜で、毎朝仕入れる野菜のナムルやサラダ、乳酸菌が生きた本場の生マッコリ (公式サイト)・コース (税込、食べログ): 難波船場5,500円 (5品)、宗寿苑8,800円 (8品)、極11,000円 (9品)・2026年の口コミから: 3,000円ほどの特選リブロース (Spencer roll) のステーキ、テールスープ、シャトーブリアン、生センマイ、炙りレバー、Akasen、塩タン、ハラミ・日本酒、焼酎、ワイン、カクテル',
    neighborhood: '南船場4-11-8。心斎橋駅、四ツ橋駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。多くの肉は店のタレで (公式サイト)、炙りユッケはタレと卵黄で。小麦の説明はない。',
    vegan_detail: 'ヴィーガンではありません。黒毛和牛の焼肉の店で、ナムル、サラダ、キムチはサイド。',
    notes: '[焼肉・南船場、三代続く焼肉屋の2号店] 此花区で約60年、三代目の店主 竹城成吉が営む焼肉店「宗寿苑」(公式サイト) が2021年に開いた、スタイリッシュな2号店。肉は脂のキレがいい黒毛和牛の雌牛だけ、ホルモンは生で食べられるほど新鮮で、その証のつらみの刺身がいちばん記憶に残る一皿。ほかに卵黄の炙りユッケ、ステーキの特選リブロース (2026年9月で3,000円ほど)、コラーゲンたっぷりのテールスープ。ご飯はお米マイスターのブレンド。1階はカウンター、2階はテーブルと個室で、階段にはスポーツ選手のサイン。コースは5,500〜11,000円。2026年6月には肉が一度に出てきた、以前は冷凍の肉だったという声も。',
  });
}

// ================================================================ KUNSEI
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27136009/'; const R = TB + 'dtlrvwlst/'; const P = TB + 'party/';
  const SITE = 'https://www.centarahotelsresorts.com/centaragrand/ja/cgoj/kunsei-kitchen';
  const H = day(['11:30', '15:00'], ['17:30', '22:30']);
  put({
    id: 'osaka_kunsei_centara_grand_namba', name: 'インターナショナルブラッスリー KUNSEI (International Brasserie Kunsei)', category: 'OMNI',
    lat: 34.660151, lng: 135.502297, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Courses come with bread and smoked butter, cream and beurre-blanc sauces, churros and crêpe wraps; nothing is stated about wheat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: French courses of fish, duck, wagyu, butter and cream.',
    hours_raw: 'Mon, Thu–Sun and holidays: lunch 11:30–15:00 (last order 14:00), dinner 17:30–22:30 (last order 21:30); wine bar 17:30–22:30 (last order 22:00); closed Tuesday and Wednesday (Tabelog). Reservations online or by phone; no children under 12; course prices include tax and service, otherwise a 15% service charge (Tabelog). Cards, e-money and QR accepted (Tabelog). 52 seats; private rooms for 4–8 with a minimum charge; non-smoking (Tabelog). Opened 1 July 2023 as innovative French KUNSEI (Tabelog); a new chef from May 2026 (June 2026 review).',
    hours: { 0: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nambanaka 2-11-50, 33F of Centara Grand Hotel Osaka — 4 min from Namba Stn',
    cuisine: 'Modern bistro and French cooking with smoked touches, Western technique on Japanese seasonal produce, over a panorama of Osaka (Tabelog) · lunch course LUMIÈRE ¥5,000, ¥4,000 on weekdays with 20% off, ¥6,000 with a drink (Tabelog); a ¥8,000 lunch course adds fish (September 2026) · dinner courses incl. CIEL (September 2026) · from 2026 reviews: thick carpaccio with French cream, cold clam chowder with corn blancmange, chicken wrapped in beef fat with a foie-gras sauce and garam masala, potato churros, white asparagus and squid with yuzu-kosho, vichyssoise or pumpkin potage with chorizo oil, salmon and lotus-root tartare with hazelnut and tapenade, sea bream and shrimp in beurre blanc, sea bream in an herb crêpe with red-wine sauce, smoked duck breast with foie-gras Madeira sauce, charcoal-grilled pork shoulder, black wagyu with wasabi sauce, smoked potato écrasée, a bread with smoked butter, sorbets, a message plate for birthdays · wines, and a wine bar with light snacks',
    website: SITE, gmaps: gm('KUNSEI センタラグランドホテル大阪'), menu_url: P,
    notes: "[French · Namba, smoked-accent courses on the 33rd floor] The top-floor brasserie of the Centara Grand Hotel Osaka, with a panorama over Minami, serving French courses with a smoky signature, smoked duck, smoked potatoes and above all a smoked butter for the bread that diners keep asking more of. A new chef took over in May 2026; a regular on an eleventh visit found the cooking now more classical, rich in butter and cream. Lunch is a four-course LUMIÈRE at ¥5,000 (¥4,000 on weekdays), or ¥8,000 with a fish course; dinner courses suit anniversaries, with a message plate on request. Views and service usually win praise, but one October 2026 diner found the courses slow, the service inattentive and a ¥1,400 oolong tea hard to justify. No children under 12.",
    chef_bio: { chef_name: null, roles: ['Chef unnamed; new chef from May 2026 (June 2026 review)'], origin: null, background: 'Opened 1 July 2023 as innovative French KUNSEI in the Centara Grand Hotel Osaka (Tabelog). Per the Tabelog text, it combines Western techniques with seasonal Japanese ingredients and offers wines to match. A regular since at least 2025 noted a new chef from May 2026 and a shift to classical French with plenty of butter and cream (June and August 2026).', philosophy: '"A supreme dining experience for all your senses" (Tabelog shop text).', specialty: 'Smoked butter and bread; smoked duck; seasonal French courses.',
      anecdotes: [
        { text: '"I visited the restaurant with high expectations for the new chef who took over in May. First off, I was surprised by how reasonable the prices were." — June 2026.', source: R + 'B471732988/' },
        { text: '"Especially, the smoked butter paired with a cute brioche-like baguette was incredibly tasty and really enhanced the dishes (I ended up asking for more!)." — September 2026, lunch course.', source: R + 'B535895536/' },
        { text: '"The course took an unexpectedly long time, and the waitstaff seemed inattentive." — October 2026.', source: R + 'B537311780/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員、英語版): International Brasserie Kunsei (旧店名 イノベーティブフレンチKUNSEI)、フレンチ・創作・洋食、難波中2-11-50 センタラグランドホテル大阪 33F、なんば駅から徒歩4分、月・木〜日・祝 ランチ11:30〜15:00 (L.O.14:00)・ディナー17:30〜22:30 (L.O.21:30)、ワインバー17:30〜22:30、火・水休み、12歳未満不可、コースは税・サービス料込み、サービス料15%、カード・電子マネー・QR可、52席、個室 (4〜8名、最低料金あり)、禁煙、オープン2023年7月1日。店の説明: 33階からの大阪のパノラマ、西洋の調理法と日本の四季の食材のモダンビストロ、ワイン。コース: ランチ LUMIÈRE 5,000円 (平日20%オフ4,000円、1ドリンク付き6,000円)。口コミ(2025年1月〜2026年10月): 5月から新しいシェフ、クラシカルなフレンチ、バターと生クリーム、厚いカルパッチョ、冷たいクラムチャウダーととうもろこしのブランマンジェ、牛の脂で包んだ鶏とフォアグラのソース、ガラムマサラ、ポテトのチュロス、ホワイトアスパラとイカ、ヴィシソワーズやかぼちゃのポタージュにチョリソーのオイル、サーモンと蓮根のタルタル、鯛と海老のブールブラン、ハーブのクレープで包んだ鯛、燻製の鴨とフォアグラのマデラソース、豚肩ロースの炭火焼き、黒毛和牛とわさびのソース、燻製のじゃがいも、燻製バターとパン、ソルベ、誕生日のメッセージプレート、ランチ8,000円のコースは魚付き、夜景、コースが長く接客が行き届かなかったという声、ウーロン茶1,400円。',
      confidence: 'medium', sources: [TB, P, SITE, R + 'B471732988/', R + 'B499455188/', R + 'B530526123/', R + 'B530609068/', R + 'B530772869/', R + 'B533870115/', R + 'B535895536/', R + 'B536382225/', R + 'B536485495/', R + 'B537311780/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Hotel restaurant with set courses; no English evidence found in the sources read.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区難波中2-11-50 センタラグランドホテル大阪 33F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with bookable courses; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区難波中二丁目11番50号 (go) 33m (hotel tower). Nearest record 河童ラーメン本舗 なんばパークスサウス店 is about 64 m away, so the pin stays precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [P, R + 'B536382225/'],
    price_note: 'Lunch prices from the shop-maintained Tabelog course pages (tax and service included) and a September 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Lunch course LUMIÈRE (weekday price ¥4,000)', '¥5,000', 'Lunch', 'ask', 'no', 'Tabelog.', 'lumiere'),
      it('', '', 'Lunch course with fish', '¥8,000', 'Lunch', 'ask', 'no', 'September 2026.', 'lunch_fish'),
      it('', '', 'Bread with smoked butter', '', 'Course', 'no', 'no', '2026 reviews.', 'smoked_butter'),
    ] }, {
    cuisine: '33階から大阪のパノラマを眺めながら、燻製を効かせたモダンビストロとフレンチ。西洋の調理法と日本の四季の食材 (食べログ)・ランチコース LUMIÈRE 5,000円、平日は20%オフで4,000円、1ドリンク付き6,000円 (食べログ)、魚料理の入る8,000円のランチコース (2026年9月)・ディナーは CIEL などのコース (2026年9月)・2026年の口コミから: フランスのクリームの厚いカルパッチョ、冷たいクラムチャウダーととうもろこしのブランマンジェ、牛の脂で包んだ鶏とフォアグラのソースにガラムマサラ、ポテトのチュロス、ホワイトアスパラとイカに柚子胡椒、ヴィシソワーズやかぼちゃのポタージュにチョリソーのオイル、サーモンと蓮根のタルタルにヘーゼルナッツとタプナード、鯛と海老のブールブラン、ハーブのクレープで包んだ鯛と赤ワインソース、燻製の鴨胸肉とフォアグラのマデラソース、豚肩ロースの炭火焼き、黒毛和牛とわさびのソース、燻製のじゃがいものエクラゼ、燻製バターとパン、ソルベ、誕生日のメッセージプレート・ワイン、軽食のワインバーも',
    neighborhood: '難波中2-11-50 センタラグランドホテル大阪 33F。なんば駅から徒歩4分',
    gf_detail: '要確認。グルテンの情報なし。コースにはパンと燻製バター、クリームやブールブランのソース、チュロス、クレープ包みが出る。小麦の説明はない。',
    vegan_detail: 'ヴィーガンではありません。魚、鴨、和牛、バター、クリームのフレンチのコース。',
    notes: '[フレンチ・なんば、33階で燻製を効かせたコース] センタラグランドホテル大阪の最上階のブラッスリーで、ミナミを一望しながら、燻製の香りを効かせたフレンチのコースを。燻製の鴨、燻製のじゃがいも、そしてパンに添える燻製バターはおかわりを頼む人が多い。2026年5月に新しいシェフになり、11回目の常連はバターと生クリームのクラシカルな料理になったと。ランチは4品の LUMIÈRE が5,000円 (平日は4,000円)、魚料理の入るコースは8,000円。夜のコースは記念日向きで、メッセージプレートも頼める。眺めと接客はおおむね好評だが、2026年10月にはコースが長く接客が行き届かず、ウーロン茶1,400円は高いという声も。12歳未満は不可。',
  });
}

// ================================================================ 自然とお肉 green
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27138121/'; const R = TB + 'dtlrvwlst/'; const P = TB + 'party/';
  const H = day(['11:30', '14:00'], ['17:00', '23:00']);
  put({
    id: 'osaka_shizen_to_oniku_green_shinmachi', name: '自然とお肉 green (Shizen to Oniku green)', category: 'OMNI',
    lat: 34.676253, lng: 135.495535, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The oyakodon is in a rich dashi with dashi vinegar on the side, and the menu has kara-age and fried taro; nothing is stated about wheat or soy sauce.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken-and-beef charcoal-grill izakaya; the grilled vegetables come within meat courses.',
    hours_raw: 'Daily 11:30–14:00 and 17:00–23:00 (last order 22:30; charcoal grill, fried dishes and clay-pot rice 60 minutes before closing); occasional closures for staff training, posted on Instagram (Tabelog). Reservations recommended, especially for tables; a booking is cancelled 15 minutes late without a call; same-day cancellation ¥5,000 a head (Tabelog; 2026). Appetizer charge ¥439 at dinner only (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), transport IC and other e-money, PayPay, d Barai, au PAY (Tabelog). 21 seats, mostly counter; dogs welcome (Tabelog; 2026 reviews). Opened 15 September 2023 as Dining&Bar green (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinmachi 1-24-14 — 3 min from Yotsubashi Stn and Nishi-Ohashi Stn',
    cuisine: 'Charcoal-grill izakaya of A5 wagyu, fresh chicken and seasonal vegetables (Tabelog) · the signature: "the oyakodon you want to eat before you die", ¥1,400 (+¥100 large, November 2026), in a clay pot at dinner, a runny, creamy egg over chicken in a rich dashi, with lemon, pickles and dashi vinegar to change the taste (2026 reviews); at lunch the oyakodon is the main dish, with a kara-age set added (February–April 2026) · courses with 2-hour all-you-can-drink: 9 dishes ¥4,000, 11 dishes ¥5,000, 13 dishes ¥7,500 (Tabelog) · from 2026 reviews: charcoal-grilled vegetables, chicken and beef tongue, mouthwatering chicken, fried taro, clay-pot rice with beef and burdock, seasonal small plates · served on Doraemon and Heidi plates in a Kutani-like style (September 2026) · beer, sake, wine, cocktails',
    website: null, gmaps: gm('自然とお肉 green 新町'), menu_url: P,
    notes: "[Izakaya · Shinmachi, the oyakodon you want before you die, with your dog] A small, green-styled charcoal-grill izakaya near Yotsubashi, mostly counter seats, that welcomes dogs. Its name dish is billed as the oyakodon you want to eat before you die (¥1,400): a mound of chicken under a rich, almost drinkable layer of runny egg in dashi, with lemon, pickles and dashi vinegar to change the taste; at lunch it is nearly the only thing on the menu and the room is packed. Evenings bring charcoal-grilled vegetables, chicken and beef tongue and clay-pot rice in all-you-can-drink courses from ¥4,000, served on Doraemon and Heidi plates. Book a table ahead. One November 2026 diner who fears dogs was moved to the counter away from an unleashed dog; another wished the shop had asked whether the oyakodon should be shared.",
    chef_bio: { chef_name: null, roles: ['Owner and staff unnamed in every source read'], origin: null, background: 'Opened 15 September 2023 as Dining&Bar green (Tabelog). The Tabelog text calls charcoal grilling the speciality and the oyakodon the dish to eat before you die; the shop is dog-friendly and closes occasionally for staff training. Diners describe kind, attentive staff and well-timed courses (2026).', philosophy: null, specialty: 'Oyakodon; charcoal-grilled vegetables, chicken and beef.',
      anecdotes: [
        { text: '"It\'s topped with a generous amount of rich, silky egg sauce and even more egg on top, with tender chunks of chicken throughout, making it the ultimate oyakodon. It\'s truly a dish you can almost drink." — November 2026, ¥1,400.', source: R + 'B538462045/' },
        { text: '"The plates were so cute, featuring characters like Doraemon and Heidi from the Alps, that I almost wanted to take them home." — September 2026.', source: R + 'B535109960/' },
        { text: '"What stood out to me were the grilled vegetables over charcoal and the clay pot rice with beef and burdock." — October 2026.', source: R + 'B536785388/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員、英語版): Shizen to Oniku green (旧店名 Dining&Bar green)、居酒屋、新町1-24-14 1F、四ツ橋駅・西大橋駅から徒歩3分、毎日11:30〜14:00・17:00〜23:00 (L.O.22:30、炭火焼き・揚げ物・土鍋ご飯は閉店60分前)、研修で休むことも (Instagram でお知らせ)、15分遅れて連絡がなければキャンセル、当日キャンセルは1人5,000円、夜のみお通し439円、カード・電子マネー・QR可、21席、犬同伴可、オープン2023年9月15日。店の説明: 炭火焼きが自慢、A5和牛、新鮮な鶏、旬の野菜、名物は「死ぬまでに食べたい親子丼」、コース飲み放題付き9品4,000円・11品5,000円・13品7,500円。口コミ(2026年2月〜11月): 親子丼1,400円 (大盛り+100円)、とろとろの卵と鶏、濃いだし、レモン・漬物・だし酢で味変、昼はほぼ親子丼だけで満席、kara-age の定食も、炭火焼きの野菜・鶏・牛タン、よだれ鶏、里芋の唐揚げ、牛肉とごぼうの土鍋ご飯、ドラえもんやハイジの器、テーブルは要予約、犬が苦手な人は席を移してもらえた、親子丼を取り分けるか聞いてほしかったという声。',
      confidence: 'medium', sources: [TB, P, R + 'B522072615/', R + 'B535109960/', R + 'B535691775/', R + 'B535792096/', R + 'B536785388/', R + 'B537589778/', R + 'B537606837/', R + 'B537821601/', R + 'B538174334/', R + 'B538462045/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Mostly counter seats; book a table ahead; dogs welcome. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区新町1-24-14 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with bookable courses; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区新町一丁目24番14号 (go) 8m. Nearest records イタリア料理 小西屋 and ヴレ ド ヴレ シェ ヒロ (osaka_italian_konishiya_shinmachi "…新町1-23-9 2F", osaka_vrai_de_vrai_chez_hiro_shinmachi "…新町1-24-8") are about 28 m away, so the pin stays precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [P, R + 'B538462045/'],
    price_note: 'Course prices from the shop-maintained Tabelog course pages (tax included); oyakodon from a November 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Oyakodon ("the one to eat before you die")', '¥1,400', 'Rice bowls', 'ask', 'no', 'November 2026; large +¥100.', 'oyakodon'),
      it('', '', 'Course of 9 dishes with 2-hour all-you-can-drink', '¥4,000', 'Course', 'ask', 'no', 'Tabelog.', 'course_9'),
      it('', '', 'Course of 11 dishes with 2-hour all-you-can-drink', '¥5,000', 'Course', 'ask', 'no', 'Tabelog; the most booked.', 'course_11'),
    ] }, {
    cuisine: 'A5和牛、新鮮な鶏、旬の野菜の炭火焼きの居酒屋 (食べログ)・名物は「死ぬまでに食べたい親子丼」1,400円 (大盛り+100円、2026年11月)。夜は土鍋で、濃いだしの鶏にとろとろの卵がたっぷり、レモン、漬物、だし酢で味変 (2026年の口コミ)。昼はほぼ親子丼だけで、kara-age の定食も加わった (2026年2〜4月)・2時間飲み放題付きのコース: 9品4,000円、11品5,000円、13品7,500円 (食べログ)・2026年の口コミから: 炭火焼きの野菜、鶏、牛タン、よだれ鶏、里芋の揚げ物、牛肉とごぼうの土鍋ご飯、季節の小皿・九谷焼のようなドラえもんやハイジの器 (2026年9月)・ビール、日本酒、ワイン、カクテル',
    neighborhood: '新町1-24-14 1F。四ツ橋駅、西大橋駅から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。親子丼は濃いだしで、だし酢が添えられ、kara-age や里芋の揚げ物もある。小麦や醤油の説明はない。',
    vegan_detail: 'ヴィーガンではありません。鶏と牛の炭火焼きの居酒屋で、焼き野菜は肉のコースの一品。',
    notes: '[居酒屋・新町、犬といっしょに死ぬまでに食べたい親子丼] 四ツ橋の近く、緑の内装の小さな炭火焼きの居酒屋で、席はほとんどカウンター、犬連れも歓迎。名物は「死ぬまでに食べたい親子丼」(1,400円): 鶏の上に、だしの効いたとろとろの卵が飲めるほどたっぷり、レモン、漬物、だし酢で味を変えながら。昼はほぼこれだけで、店は満席。夜は炭火の野菜、鶏、牛タン、土鍋ご飯を4,000円からの飲み放題付きコースで、ドラえもんやハイジの器で出てくる。テーブルは予約を。2026年11月には犬が苦手な人がリードなしの犬から離れたカウンターに移してもらったという声や、親子丼を取り分けるか聞いてほしかったという声も。',
  });
}

save();
