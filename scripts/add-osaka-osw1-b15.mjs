// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first; worker osw1 (lane: Tabelog id mod 4 = 0), batch 15.
//   + 鯛之鯛 難波店 Tai no Tai (fish izakaya: aged sashimi, simmered fish, ikura rice, Shinsaibashi-suji basement, 2023)
//   + カフェ 太陽ノ塔 なんばシティ店 Cafe Taiyo No To (decorated cakes and family-friendly cafe in Namba CITY, 2011)
//   - skip(): ゆかり 千日前店, 四川伝統火鍋 蜀漢 心斎橋店, 玄品 法善寺 総本店, 宮崎地鶏炭火焼 車 心斎橋店, 中納言 千日前味楽館,
//     お好み焼き 京ちゃばな 心斎橋南船場店, 原価ビストロチーズプラス なんば千日前 — chains (reasons in each skip()).
//   Lane: `queue.mjs osaka next notable 500`, mod-4 = 0, after batch 14: 27136664 (ぼんぞ) and 27149612 (TORA鶏YA) still
//   undecided; 27135560 +; 27003660 skip; 27037228 甘党まえだ なんばウォーク店 left undecided (a review calls it a chain, and
//   Retty names a Tennoji MIO shop and closed Umeda and Crysta shops, but I found no current shop count); 27114568 skip;
//   27001624 skip; 27002628 skip; 27006880 skip; 27057156 +; 27008088 skip; 27135152 skip. That is the end of the lane's
//   notable list; only two keeps this batch.
//   Chain check for the two kept:
//   - 鯛之鯛: Namba, Umeda, Kyoto Karasuma and Sannomiya (September 2026 review; shops.jsonl has 烏丸店 26034388); a group of
//     four, none in data (coordinator 2026-11-02: keep).
//   - 太陽ノ塔 (taiyounotou.com): three cafes (本店 in Nakazakicho, GREEN WEST, NAMBA CITY) and a parlour, ニュー太陽ノ塔パーラー,
//     opening at Daimaru Umeda; the 洋菓子店 cake shops are a different format. Kept on the group-of-four precedent; please
//     confirm. None in data.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw1-15');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27003660', 'Chain: お好み焼 ゆかり has 曽根崎本店 and KITTE大阪 (web search) besides 天三店, 千日前店 and なんばウォーク店 (shops.jsonl); reviews call it "a long-established okonomiyaki chain".');
skip('27114568', 'Chain: 蜀漢 has five shops in Nagoya (本店, 金山, 名駅), Osaka (心斎橋) and Tokyo (池袋) (syokukan.co.jp).');
skip('27001624', 'Chain flagship: 玄品 has 12 shops in shops.jsonl across Osaka and Kyoto (梅田東通, 新大阪, 天満, 京都祇園, 烏丸, 四条 …).');
skip('27002628', 'Chain: 宮崎地鶏炭火焼 車 has seven Osaka shops, one in Kyoto and four in Tokyo (kuruma-jp.com).');
skip('27006880', 'Chain: 活 伊勢海老料理 中納言 has shops at Osaka Ekimae Dai-3 Building, Tokyo Omori Bellport, Yokohama and Kobe Harborland besides this one (gnavi; web search).');
skip('27008088', 'Chain: 京ちゃばな has shops at Kyoto Station, Minamishinmachi (Kyoto), Umeda Kitashinchi, Shin-Osaka Station and Shinsaibashi Minami-Senba (shops.jsonl; web search).');
skip('27135152', 'Chain: 原価ビストロチーズプラス has 23 shops in nine prefectures (than.co.jp).');

// ================================================================ 鯛之鯛 難波店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27135560/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['17:00', '23:30']); const WE = day(['12:00', '23:30']);
  put({
    id: 'osaka_tai_no_tai_namba', name: '鯛之鯛 難波店 (Tai no Tai)', category: 'OMNI',
    lat: 34.670264, lng: 135.500644, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Sashimi is served with salt or soy sauce, simmered fish is cooked in soy-based sauce, and tempura and croquettes are on the menu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish izakaya; the rice dishes come with bonito broth.',
    hours_raw: 'Mon–Fri 17:00–23:30; Sat, Sun and holidays 12:00–23:30; food last order 22:30, drinks 23:00 (Tabelog). Reservations accepted; cancel at least three days ahead; online bookings are confirmed by phone; a two-hour limit at all tables; seating may be at the counter even if a table is requested (Tabelog). Cards, e-money and QR payments including Alipay (Tabelog). 80 seats round a central open kitchen, with noren-curtained semi-private rooms for up to 12 (Tabelog; August 2026). Heated-tobacco smoking allowed (Tabelog; August 2026). Weak phone signal in the basement; ask for the Wi-Fi to use the QR ordering (August–September 2026). Opened 14 April 2023, after moving from elsewhere in Namba (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shinsaibashi-suji 2-6-14, アクロスビル B1F — 5 min from Namba Stn, 6 min from Shinsaibashi Stn',
    cuisine: 'Fish izakaya: staff visit Amakusa, Akashi and Kochi to buy fish, and serve aged sashimi, simmered fish of the day, grilled and fried fish (Tabelog; 2026 reviews) · sashimi platter ¥1,099 (Tabelog, 2026); sashimi with salt; sesame kanpachi (August–September 2026) · Tai no Tai course ¥7,500: edamame, mentaiko and simmered eggplant, a seven-kind sashimi platter with aged white fish, a salad of Kajitani Farm greens with fish sauce, snow crab and crab-miso cream croquettes, simmered fish, a clay-pot rice of ikura, uni and seafood; all-you-can-drink +¥1,500 (Tabelog; September 2026) · own-brand ikura from Hokkaido; ikura rice finished with bonito broth (May 2025; Tabelog); conger eel tempura, salmon and avocado poke, fried monkfish, tai-meshi (August–October 2026) · regional sake from ¥499 (Tabelog)',
    website: null, gmaps: gm('鯛之鯛 難波店'), menu_url: null,
    notes: "[Fish izakaya · Shinsaibashi-suji, aged fish in a bright basement] A fish izakaya in a surprisingly high-ceilinged basement between Namba and Shinsaibashi, with a counter wrapped round an open kitchen and tables on both sides. Staff travel to Amakusa, Akashi and Kochi for fish, and the menu covers sashimi (aged white fish, sesame kanpachi, sashimi with salt), simmered fish of the day, conger eel tempura and fried monkfish. The ¥7,500 course (September 2026) ends with a clay-pot rice of ikura and uni; the ikura rice is finished with bonito broth poured over at the end (May 2025). Regional sake starts at ¥499. Staff are warm and quick. It can be loud and signal is weak underground, so ask for the Wi-Fi to order; heated tobacco is allowed. Weekends from noon.",
    chef_bio: { chef_name: null, roles: ['Manager and kitchen staff (unnamed); the Tai no Tai course is "crafted by the manager" (Tabelog)'], origin: null, background: 'Shop-maintained Tabelog listing: a popular restaurant relocated from elsewhere in Namba; staff visit Amakusa, Akashi, Kochi and elsewhere for fresh and aged fish; a space modelled on izakayas abroad; own-brand ikura shipped from Hokkaido; daytime drinking at weekends; opened 14 April 2023. A September 2026 review: other Tai no Tai shops in Umeda, Kyoto Karasuma and Sannomiya.', philosophy: '"Make delicious fish even better" (Tabelog).', specialty: 'Aged sashimi; simmered fish; ikura clay-pot rice.',
      anecdotes: [
        { text: '"Although it\'s located in the basement of a building, the ceiling is surprisingly high. The central kitchen is surrounded by a counter, with tables arranged on both sides" — August 2026.', source: R + 'B533188524/' },
        { text: '"The salmon roe seafood rice bowl came with bonito broth, and I poured the broth over it at the end" — May 2025.', source: R + 'B506948982/' },
        { text: '"The combination of mentaiko, sesame oil, and green onions served as an appetizer was shockingly delicious." — August 2026.', source: R + 'B533598671/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 鯛之鯛 難波店、居酒屋・海鮮・炉端焼き、大阪市中央区心斎橋筋2-6-14 アクロスビル B1F、なんば駅から徒歩5分、心斎橋駅から6分、月〜金17:00〜23:30、土日祝12:00〜23:30 (料理L.O.22:30、ドリンクL.O.23:00)、予約可 (キャンセルは3日前まで、全席2時間制)、カード・電子マネー・QR 可、80席、のれんで仕切った半個室、加熱式たばこの喫煙可、2023年4月14日オープン。店の紹介 (英訳): なんばの別の場所から移転した人気店、Amakusa、Akashi、Kochi などをスタッフが訪ねて仕入れる魚と熟成魚、海外の居酒屋のような空間、Hokkaido から直送の自社ブランドのいくら、週末は昼飲み、刺身の盛り合わせ1,099円、地酒499円から、店長のコース7,500円 (締めはいくらとうにの土鍋ご飯)、飲み放題1,500円追加。口コミ(2025年5月〜2026年10月): 塩で食べる刺身、熟成の白身、ごまかんぱち、明太子とごま油とねぎの小鉢、Kajitani Farm の葉野菜のサラダ、ずわいがにとかにみそのクリームコロッケ、煮魚、穴子の天ぷら、サーモンとアボカドのポキ、あんこうの唐揚げ、鯛めし、だしをかけるいくらの丼、天井が高い地下、中央のキッチンを囲むカウンター、にぎやか、電波が弱く Wi-Fi で注文、スタッフが気さく。',
      confidence: 'medium', sources: [TB, R + 'B506948982/', R + 'B533129675/', R + 'B533188524/', R + 'B533598671/', R + 'B533971549/', R + 'B535172857/', R + 'B535531887/', R + 'B535950508/', R + 'B537227360/', R + 'B537809008/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'QR-code ordering over the shop Wi-Fi; friendly staff. No English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋2-6-14 アクロスビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋二丁目6番14号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B535531887/'],
    price_note: 'Prices from the Tabelog listing (2026) and a September 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Tai no Tai course (8 dishes, ikura and uni clay-pot rice)', '¥7,500', 'Courses', 'ask', 'no', 'Tabelog; September 2026 review.', 'tai_no_tai_course'),
      it('', '', 'Sashimi platter', '¥1,099', 'Sashimi', 'ask', 'no', 'Tabelog listing (2026 promotion).', 'sashimi_moriawase'),
      it('', '', 'Regional sake', '¥499', 'Drinks', 'ask', 'ask', 'Tabelog listing.', 'jizake'),
    ] }, {
    cuisine: '魚の居酒屋: スタッフが Amakusa、Akashi、Kochi を訪ねて仕入れる魚で、熟成の刺身、日替わりの煮魚、焼き魚、揚げ物 (食べログ、2026年の口コミ)・刺身の盛り合わせ1,099円 (食べログ、2026年)。塩で食べる刺身、ごまかんぱち (2026年8月〜9月)・鯛之鯛のコース7,500円: 枝豆、明太子、なすの煮びたし、熟成の白身を含む刺身7種、Kajitani Farm の葉野菜と魚醤のサラダ、ずわいがにとかにみそのクリームコロッケ、煮魚、いくらとうにと魚介の土鍋ご飯。飲み放題は1,500円追加 (食べログ、2026年9月)・Hokkaido からの自社ブランドのいくら。最後にかつおのだしをかけるいくらの丼 (2025年5月、食べログ)。穴子の天ぷら、サーモンとアボカドのポキ、あんこうの唐揚げ、鯛めし (2026年8月〜10月)・地酒は499円から (食べログ)',
    neighborhood: '心斎橋筋2-6-14、アクロスビル地下1階。なんば駅から5分、心斎橋駅から6分',
    gf_detail: '要確認。グルテンの情報なし。刺身は塩か醤油、煮魚は醤油の味つけで、天ぷらやコロッケもある。',
    vegan_detail: 'ヴィーガンではありません。魚の居酒屋で、ご飯ものにはかつおのだし。',
    notes: '[魚の居酒屋・心斎橋筋、明るい地下の熟成魚] なんばと心斎橋の間の、意外に天井の高い地下の魚の居酒屋で、オープンキッチンを囲むカウンターと両側のテーブル。スタッフが Amakusa、Akashi、Kochi まで魚を仕入れに行き、熟成の白身やごまかんぱち、塩で食べる刺身、日替わりの煮魚、穴子の天ぷら、あんこうの唐揚げなどが並ぶ。7,500円のコース (2026年9月) の締めはいくらとうにの土鍋ご飯。最後にかつおのだしをかけるいくらの丼も。地酒は499円から。スタッフは明るく手早い。にぎやかで地下は電波が弱いので、注文には Wi-Fi を。加熱式たばこは可。週末は昼から。',
  });
}

// ================================================================ カフェ 太陽ノ塔 なんばシティ店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27057156/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.taiyounotou.com';
  const H = day(['11:00', '22:00']);
  put({
    id: 'osaka_cafe_taiyo_no_to_namba_city', name: 'カフェ 太陽ノ塔 なんばシティ店 (Cafe Taiyo No To)', category: 'OMNI',
    lat: 34.661963, lng: 135.502687, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The draw is decorated cakes; lunch is pasta and loco moco plates.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No vegan information. The cakes use cream and chocolate, and the lunch plates include meat and egg.',
    hours_raw: 'Daily 11:00–22:00 (food last order 21:00, drinks 21:30); closed when Namba CITY closes (Tabelog). Reservations accepted by phone, but not from 12:00 to 18:00; a two-hour limit when busy (Tabelog). Cards, e-money and QR payments (Tabelog). 100 seats: sofas, a tatami area where babies can lie down, toys and small chairs for children; smoking on the terrace only (Tabelog; June–October 2026). Children must order one kids-menu item each or pay ¥200 plus tax; one May 2026 diner with a baby was asked to buy baby food (Tabelog; May 2026). Orders by QR code (April and September 2026). English menu (Tabelog). Opened 26 April 2011 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'なんばCITY なんばカーニバルモール, Namba 5-1-60 — by Namba Stn',
    cuisine: 'Colourful retro café, a branch of the café whose main shop is in Nakazakicho (official site; September 2026) · cakes in the ¥900 range, served on plates drawn with sauce: seasonal lemon cake, Mont Blanc, chocolate cake with berry sauce, berry and blackberry cakes, a parfait (April–October 2026) · lunch plates with a drink bar and soup: loco moco with vegetables, tomato pasta (April–July 2026) · passion-fruit cream soda, raspberry tea, café latte, iced coffee, draft beer (April–October 2026)',
    website: SITE, gmaps: gm('カフェ 太陽ノ塔 なんばシティ店'), menu_url: null,
    notes: "[Café · Namba CITY, cakes and a tatami corner for families] A bright, colourful branch of the Nakazakicho café in the Namba CITY mall, best known for its cakes, served on plates painted with sauce: lemon, Mont Blanc and berry cakes were around ¥900 in July 2026. It is unusually easy with small children: a tatami corner where babies can lie down, toys, small chairs and staff who offer to reheat a parent's plate (June 2026). Each child must order from the kids' menu or pay a ¥200 charge, which surprised one parent of a baby in May 2026. Lunch is loco moco or pasta with a drink bar; order by QR code. No phone bookings from noon to 6 p.m. Open daily to 10 p.m.",
    chef_bio: { chef_name: null, roles: ['Café staff (unnamed)'], origin: null, background: 'Official site (taiyounotou.com): a café and retro kissa in Nakazakicho and Namba; shops cafe太陽ノ塔 本店, GREEN WEST and NAMBA CITY, the 太陽ノ塔洋菓子店 cake shops (Nakazakicho, Hanshin Umeda, Shin-Osaka Station) and ニュー太陽ノ塔パーラー opening at Daimaru Umeda. Tabelog: café in Namba CITY, opened 26 April 2011.', philosophy: null, specialty: 'Decorated cakes; family-friendly café.',
      anecdotes: [
        { text: '"a staff member noticed and kindly asked, \'Would you like me to reheat that for you?\'" — June 2026, a parent feeding a small child.', source: R + 'B531111010/' },
        { text: '"The cake was in the 900 yen range, which seemed a bit pricey, but considering the decoration and the decent size of the cake, it felt reasonable." — July 2026.', source: R + 'B531388557/' },
        { text: '"there is a system where you must order at least one item per baby, which was a bit surprising since my little one can only drink milk." — May 2026.', source: R + 'B531284318/' },
      ],
      japanese_sources_summary: '公式サイト (taiyounotou.com): 中崎町・なんばのレトロ喫茶、cafe太陽ノ塔 本店、GREEN WEST、NAMBA CITY、太陽ノ塔洋菓子店、阪神梅田本店、大丸梅田店のニュー太陽ノ塔パーラー、新大阪駅の売場。食べログ: カフェ 太陽ノ塔 なんばシティ店、カフェ、大阪市中央区難波5-1-60 なんばCITY なんばカーニバルモール、毎日11:00〜22:00 (料理L.O.21:00、ドリンクL.O.21:30)、なんばCITYの休みに準ずる、予約可 (12時〜18時は受けない、混雑時は2時間制)、カード・電子マネー・QR 可、100席、テラスは喫煙可、子どもはキッズメニュー1品か200円のチャージ、英語のメニュー、2011年4月26日オープン。口コミ(2026年4月〜10月): 900円台のケーキ、ソースで絵を描いた皿、レモンケーキ、モンブラン、ベリーのケーキ、パフェ、ロコモコとトマトのパスタのランチ (ドリンクバーとスープ)、パッションフルーツのクリームソーダ、生ビール、座敷とおもちゃと子ども用のいす、料理を温め直してくれたスタッフ、赤ちゃんにも1品の注文が必要で驚いたという声、QR コードで注文。',
      confidence: 'medium', sources: [TB, SITE, R + 'B526455352/', R + 'B531111010/', R + 'B531284318/', R + 'B531388557/', R + 'B531435368/', R + 'B533113622/', R + 'B535700041/', R + 'B536225187/', R + 'B536390881/', R + 'B537863747/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu listed (Tabelog); QR-code ordering.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'single', address_ja: '大阪府大阪市中央区難波5-1-60 なんばCITY なんばカーニバルモール',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and the group site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; GSI 大阪府大阪市中央区難波五丁目1番60号 (go) about 370m — the lot spans Namba CITY and the station, so the pin is approximate (Tabelog point), as for osaka_mita_seimenjo_namba_city (27 m away); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B531388557/', R + 'B531435368/'],
    price_note: 'One price band from a July 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Seasonal cake (e.g. lemon cake)', '¥900 range', 'Cakes', 'no', 'no', 'July 2026 review.', 'cake'),
      it('', '', 'Loco moco lunch set with drink bar and soup', '', 'Lunch', 'ask', 'no', 'April and June 2026 reviews.', 'locomoco_lunch'),
      it('', '', 'Passion-fruit cream soda', '', 'Drinks', 'ask', 'no', 'April 2026 review.', 'cream_soda'),
    ] }, {
    cuisine: '中崎町に本店のあるカフェの、カラフルなレトロカフェ (公式サイト、2026年9月)・900円台のケーキはソースで絵を描いた皿で: 季節のレモンケーキ、モンブラン、ベリーソースのチョコレートケーキ、ベリーやブラックベリーのケーキ、パフェ (2026年4月〜10月)・ドリンクバーとスープつきのランチ: 野菜たっぷりのロコモコ、トマトのパスタ (2026年4月〜7月)・パッションフルーツのクリームソーダ、ラズベリーティー、カフェラテ、アイスコーヒー、生ビール (2026年4月〜10月)',
    neighborhood: 'なんばCITY なんばカーニバルモール、難波5-1-60。なんば駅すぐ',
    gf_detail: '要確認。グルテンの情報なし。主役はデコレーションしたケーキで、ランチはパスタとロコモコ。',
    vegan_detail: '要確認。ヴィーガンの情報なし。ケーキにはクリームやチョコレート、ランチには肉や卵を使う。',
    notes: '[カフェ・なんばCITY、ケーキと家族向けの座敷] なんばCITYの中の、中崎町のカフェの明るくカラフルな店。名物はソースで絵を描いた皿のケーキで、2026年7月はレモン、モンブラン、ベリーのケーキが900円ほど。小さな子ども連れにとても優しく、赤ちゃんを寝かせられる座敷、おもちゃ、子ども用のいす、親の料理を温め直そうかと声をかけてくれるスタッフ (2026年6月)。子どもはキッズメニューを1品頼むか200円のチャージが必要で、2026年5月には赤ちゃん連れの親が驚いたそう。ランチはドリンクバーつきのロコモコかパスタで、注文は QR コード。12時〜18時は電話予約不可。毎日夜10時まで。',
  });
}

save();
