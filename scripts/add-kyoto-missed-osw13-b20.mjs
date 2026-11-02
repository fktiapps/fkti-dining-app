// Kyoto "what did we miss" pass (kyoto-missed, notable phase) — lane osw13, batch 20.
//   + フランソア喫茶室 Salon de thé FRANCOIS (the 1934 salon kissaten on Nishi-Kiyamachi)
//   + boulangerie Artisan'Halles アルチザナル (takeaway bakery near Demachiyanagi; since 2012)
//   + 亀末廣 Kamesuehiro (wagashi maker by Karasuma-Oike, founded 1804)
//   + 鮨まつもと Sushi Matsumoto (Daiten Matsumoto's Edomae counter in Gion; since 2006)
//   - skipped ベンジャミンステーキハウス 京都 26031586: a chain — the brand's own shop list names a New York flagship and
//     four Japan steakhouses (六本木店, 紀尾井町店, 京都店, KITTE 大阪店) plus ベンジャミン グリル 京都店 (benjaminsteakhouse.jp).
//   - skipped 満月 JR京都伊勢丹店 26014448: a department-store counter of Mangetsu, whose main shop is already in data
//     (kyoto_mangetsu_ajari_mochi_honten, batch 15) — a branch of a brand already in data.
//   Taken in queue order from `queue.mjs kyoto-missed next notable 80` on 2026-11-02.
//   None of the four is in data/kyoto.json: grep by name (フランソア/Francois, アルチザナル/Artisan, 亀末廣/Kamesuehiro,
//   まつもと/Matsumoto) and address (船頭町184, 一真町89, 車屋町251) found nothing; Sushi Matsumoto shares the address
//   祇園町南側570-123 with kyoto_gion_matayoshi, whose pin is 13 m away — not stacked.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-20');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26031586', 'ベンジャミンステーキハウス 京都 (Benjamin Steakhouse Kyoto): a chain — the brand\'s shop list (benjaminsteakhouse.jp) names a New York flagship, four Japan steakhouses (六本木店, 紀尾井町店, 京都店, KITTE 大阪店) and ベンジャミン グリル 京都店; the Kyoto shop opened in December 2018 as the second in Japan');
skip('26014448', '満月 JR京都伊勢丹店 (Mangetsu JR Kyoto Isetan): a department-store counter of Mangetsu, whose main shop is already in data (kyoto_mangetsu_ajari_mochi_honten) — a branch of a brand already in data');

// ================================================================ フランソア喫茶室
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26000900/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.francois1934.com/';
  const H = day(['11:00', '22:00']);
  put({
    id: 'kyoto_francois_kissa', name: 'フランソア喫茶室 (Salon de thé FRANCOIS)', category: 'OMNI',
    lat: 35.003292, lng: 135.770213, cuisine_type: 'kissaten',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Cakes and tarts (rare cheesecake, pear and lemon tarts) and pudding; no gluten information (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Black coffee and tea suit; the cakes and pudding use dairy and eggs, and coffee comes with fresh cream unless you say otherwise (October 2026).',
    hours_raw: '11:00–22:00 (last order 21:30), every day except 31 December to 2 January (Tabelog). No reservations (Tabelog); weekend afternoons often have a queue, weekdays and late morning are easier (October 2026). 80 seats at tables (Tabelog). Non-smoking (Tabelog). Children not allowed (Tabelog). Cash only (Tabelog). In a lane south of Shijo-Kobashi on Nishi-Kiyamachi, 1 min from Kyoto-Kawaramachi Stn (official site; Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Nishi-Kiyamachi, a lane just south of Shijo-Kobashi — 1 min from Kyoto-Kawaramachi Stn',
    cuisine: 'A 1934 salon-style kissaten for coffee, tea and cakes (official site) · cake set ¥1,450: house rare cheesecake with blueberry sauce, pear tart, lemon tart (October 2026; Tabelog shop text) · special pudding with dried orange, pudding set ¥1,600 · coffee served with fresh cream; tea, including a "whiskey tea" and tea with a splash of brandy for aroma (October 2026) · diners spend about ¥1,000–1,999',
    website: SITE, gmaps: gm('フランソア喫茶室'), menu_url: null,
    notes: "[Kissaten · Kawaramachi, the 1934 salon of free speech] Opened in 1934 down a lane off Shijo-Kobashi and designed by young artist friends of founder 立野正一, this European salon of stained glass, a white domed ceiling and red velvet chairs was meant as a place to talk about peace and art as wartime speech closed in; reviewers note it is a registered cultural property. Order the cake set — the house rare cheesecake with blueberry sauce, with coffee and fresh cream — or the special pudding. Open late, to 22:00, which suits a night after Minamiza. Cash only; no children; weekend queues.",
    chef_bio: { chef_name: null, roles: ['Historic café founded by 立野正一 (official site); present staff not named'], origin: null,
      background: 'Per the official site (quoting エキゾチック京都, 淡交社, 左方郁子): opened in Showa 9 (1934) in a lane just south of Shijo-Kobashi; designed by 立野正一, 高木四郎 and the Italian ベンチベニ, young artist friends; stained-glass windows, an elegant white ceiling, red velvet chairs and a copy of the Mona Lisa; the owner meant it as a place to discuss anti-war and avant-garde art as free speech became hard, and the anti-fascist tabloid 「土曜日」 (1936–1937) could always be found there. An October 2026 review calls it a nationally registered tangible cultural property. Tabelog Kissaten "Tabelog 100" 2021, 2022, 2026.',
      philosophy: 'A cultural, free oasis where anyone could talk about peace and art (official site; October 2026 review).', specialty: 'Rare cheesecake; special pudding.',
      anecdotes: [
        { text: '"This place was once an oasis where people could freely discuss art, literature, and peace during a time when freedom of speech was restricted." — October 2026.', source: R + 'B537225976/' },
        { text: '"Most nearby cafes were closed, but this place is open until 10 PM!" — October 2026, after kabuki at Minami-za.', source: R + 'B538482101/' },
        { text: '"When ordering coffee, I was asked if I needed milk, and upon confirming, I received coffee that already had milk added." — October 2026.', source: R + 'B537225976/' },
      ],
      japanese_sources_summary: '公式サイト (francois1934.com): フランソア喫茶室、1934年創業、四条小橋を南に少し下がった路地、立野正一・高木四郎・イタリア人のベンチベニら若い芸術家仲間が設計、ステンドグラスの窓、白い天井、赤いビロードの椅子、「モナ・リザ」の複製、戦時色が深まる時代に反戦や前衛芸術を議論する場、『土曜新聞』(「土曜日」)、出典はエキゾチック京都 (淡交社、左方郁子)、下京区西木屋町通四条下ル船頭町184。食べログ: 喫茶店・ケーキ、11:00〜22:00 (L.O.21:30)、12月31日〜1月2日以外は無休、予約不可、80席、禁煙、子ども不可、カード不可、昭和9年創業、自家製レアチーズケーキ、喫茶店百名店 2021・2022・2026。口コミ (2026年10月、英語): ケーキセット1,450円、特製プリン、国の登録有形文化財、週末の行列。',
      confidence: 'high', sources: [SITE, TB, R + 'B537138108/', R + 'B537225976/', R + 'B537310984/', R + 'B537675500/', R + 'B537873849/', R + 'B537918463/', R + 'B537921082/', R + 'B538014179/', R + 'B538142258/', R + 'B538482101/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Table service; say if you want coffee black (it comes with cream).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区西木屋町通四条下ル船頭町184',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with an October 2026 notice; ten reviews dated October 2026.' },
    pin_source: `Tabelog ${TB} (35.003292, 135.770213); cross-checked: GSI 京都府京都市下京区船頭町184番地 (lot) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537675500/', R + 'B538142258/'],
    price_note: 'No price list read; prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Cake set (e.g. rare cheesecake with coffee)', '¥1,450', 'Cake sets', 'ask', 'no', 'October 2026.', 'cake_set'),
      it('', '', 'Pudding set', '¥1,600', 'Cake sets', 'ask', 'no', 'October 2026.', 'pudding_set'),
    ] }, {
    cuisine: '1934年創業のサロン風の喫茶室で珈琲、紅茶、ケーキ (公式サイト)・ケーキセット1,450円: ブルーベリーソースの自家製レアチーズケーキ、洋梨のタルト、レモンタルト (2026年10月、食べログの店舗紹介)・オレンジピール入りの特製プリン、プリンセット1,600円・珈琲は生クリーム入りで、紅茶にはウイスキーティーや香り付けにブランデーを数滴たらすものも (2026年10月)・予算は約1,000〜1,999円',
    neighborhood: '西木屋町、四条小橋のすぐ南の路地。京都河原町駅から徒歩1分',
    gf_detail: '要確認。ケーキやタルト (レアチーズケーキ、洋梨やレモンのタルト) とプリン。グルテンの情報なし (2026年の口コミ)。',
    vegan_detail: '要確認。ブラックの珈琲や紅茶は合う。ケーキやプリンには乳製品や卵、珈琲は断らないと生クリームが入る (2026年10月)。',
    notes: '[喫茶・河原町、1934年の自由のサロン] 1934年、四条小橋を少し下がった路地に開店。店主の立野正一の若い芸術家仲間が設計した、ステンドグラス、白い円天井、赤いビロードの椅子のヨーロッパ風のサロンは、言論が狭まる戦時に平和や芸術を語る場をめざした。口コミによれば国の登録有形文化財。ブルーベリーソースの自家製レアチーズケーキと生クリーム入りの珈琲のケーキセットか、特製プリンを。夜22時までなので Minami-za の帰りにも。現金のみ、子ども不可、週末は行列。',
  });
}

// ================================================================ Artisan'Halles
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26020779/'; const R = TB + 'dtlrvwlst/';
  const H = day(['09:00', '19:00']);
  put({
    id: 'kyoto_artisan_halles', name: "boulangerie Artisan'Halles (アルチザナル)", category: 'OMNI',
    lat: 35.029306, lng: 135.768437, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a wheat bakery of hard breads, danishes and rolls (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Many breads use butter, cream, cheese or meat; plain breads may suit, but no ingredient list is published (2026 reviews).',
    hours_raw: '9:00–19:00; closed Wednesday and Thursday (Tabelog). Takeaway only since May 2025 (Tabelog). Reservations accepted (Tabelog). Breads sell down by early afternoon (October 2026). Cash only — no cards or mobile payment (Tabelog; October 2026). On Imadegawa-dori east of Teramachi, 5 min from Demachiyanagi Stn; a small sign, brick front and wooden door (Tabelog; September 2026). Opened 14 August 2012 (Tabelog).',
    hours: { 0: H, 1: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Imadegawa-dori east of Teramachi, near the Kamo river delta and the Imperial Palace — 5 min from Demachiyanagi Stn',
    cuisine: 'French-style bakery of hard breads and viennoiserie, takeaway only (Tabelog; 2026 reviews) · examples (September–October 2026): basil sausage ¥360, pain au chocolat ¥320, cinnamon roll ¥360, smoked cheese and bacon ¥380, cream cheese ¥380, raisin bread ¥420, seasonal chestnut bread ¥480, fromage à la crème, cardamom roll, bacon épi, olive bread, tandoori chicken, sliced white loaf; danishes with custard or berries and white chocolate · most items under ¥500',
    website: null, gmaps: gm('アルチザナル 京都'), menu_url: null,
    notes: "[Bakery · Demachiyanagi, the bakery that doesn't look like one] Behind a brick front and a wooden door with a tiny sign on Imadegawa-dori, a quiet, stylish bakery of hard breads and viennoiserie: a cinnamon roll one diner called life-changing, the fromage à la crème the staff recommend, cardamom rolls, basil sausage, chestnut bread in autumn and danishes that stay crisp on the way home. Takeaway only; breads sell out by early afternoon. Cash only; closed Wednesday and Thursday.",
    chef_bio: { chef_name: null, roles: ['Bakery staff; no person is named in the sources'], origin: null,
      background: 'Tabelog: bread and café, opened 14 August 2012; takeaway only from May 2025; Bread WEST "Tabelog 100" 2020, 2022, 2026.',
      philosophy: null, specialty: 'Cinnamon roll; danishes; hard breads.',
      anecdotes: [
        { text: '"The cinnamon roll was so delicious that I might not be able to enjoy other cinnamon rolls again." — September 2026.', source: R + 'B537022724/' },
        { text: '"Isn\'t it amazing that the danish retains its crispiness until you take it home?" — October 2026.', source: R + 'B503695794/' },
        { text: '"Please note that they only accept cash, with no card or mobile payment options available." — October 2026.', source: R + 'B536805432/' },
      ],
      japanese_sources_summary: '食べログ: アルチザナル (boulangerie Artisan\'Halles)、パン・カフェ、上京区今出川通寺町東入ル一真町89、出町柳駅から徒歩5分、月・火・金〜日 9:00〜19:00、水・木休み、2025年5月からテイクアウトのみ、予約可、カード不可、2012年8月14日オープン、パン WEST 百名店 2020・2022・2026。口コミ (2026年9〜10月、英語): レンガとドアの目立たない外観、シナモンロール、デニッシュ、ハード系、昼過ぎには品薄、現金のみ。',
      confidence: 'medium', sources: [TB, R + 'B463186775/', R + 'B503695794/', R + 'B536344015/', R + 'B536422171/', R + 'B536805432/', R + 'B537022724/', R + 'B537340775/', R + 'B537342395/', R + 'B538074670/', R + 'B538216113/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Self-service bread trays; cash at the register.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区今出川通寺町東入ル一真町89',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026; Bread WEST Tabelog 100 2026.' },
    pin_source: `Tabelog ${TB} (35.029306, 135.768437); cross-checked: GSI 京都府京都市上京区一真町89番地 (lot) 48m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537340775/', R + 'B536344015/'],
    price_note: 'No price list; prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Cinnamon roll', '¥360', 'Pastries', 'no', 'no', 'October 2026.', 'cinnamon_roll'),
      it('', '', 'Pain au chocolat', '¥320', 'Pastries', 'no', 'no', 'October 2026.', 'pain_chocolat'),
      it('', '', 'Raisin bread', '¥420', 'Bread', 'no', 'ask', 'September 2026.', 'raisin_bread'),
    ] }, {
    cuisine: 'ハード系とヴィエノワズリーのフランス風のパン屋、持ち帰りのみ (食べログ、2026年の口コミ)・例 (2026年9〜10月): バジルソーセージ360円、パン・オ・ショコラ320円、シナモンロール360円、スモークチーズとベーコン380円、クリームチーズ380円、レーズンパン420円、季節の栗のパン480円、フロマージュ・ア・ラ・クレーム、カルダモンロール、ベーコンエピ、オリーブのパン、タンドリーチキン、食パン、カスタードやベリーとホワイトチョコのデニッシュ・多くは500円未満',
    neighborhood: '寺町の東の今出川通、Kamogawa Delta と Kyoto Gyoen の近く。出町柳駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。ハード系、デニッシュ、ロールなど小麦のパン (2026年の口コミ)。',
    vegan_detail: '要確認。多くのパンにバター、クリーム、チーズ、肉を使う。シンプルなパンなら合うかもしれないが、原材料は公開されていない (2026年の口コミ)。',
    notes: '[パン・出町柳、パン屋に見えないパン屋] 今出川通の、レンガの壁に木のドア、小さな看板だけの店。中は静かでおしゃれなハード系とヴィエノワズリーのパン屋で、ほかのシナモンロールが食べられなくなるという声のシナモンロール、店員おすすめのフロマージュ・ア・ラ・クレーム、カルダモンロール、バジルソーセージ、秋の栗のパン、持ち帰ってもさくさくのデニッシュ。持ち帰りのみ、昼過ぎには品薄に。現金のみ、水・木曜休み。',
  });
}

// ================================================================ 亀末廣
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26000641/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.kyomeibutuhyakumikai.jp/shop/kamesuehiro.html';
  const H = day(['09:00', '17:00']);
  put({
    id: 'kyoto_kamesuehiro', name: '亀末廣 (Kamesuehiro)', category: 'OMNI',
    lat: 35.009936, lng: 135.760378, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Dry sweets (rakugan of rice flour and brown rice), fresh sweets and yokan, and a senbei-manju of mochi wafer; no ingredient list is published (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Bean-paste and sugar sweets are likely candidates, but no ingredient list is published (2026 reviews).',
    hours_raw: '9:00–17:00, Mon, Tue and Thu–Sat; closed Wednesday, Sunday and holidays (Tabelog). Takeaway only (Tabelog). Fresh sweets keep only to the day, the senbei-manju to the next day (August–September 2026). Reservations accepted (Tabelog). Cash only (Tabelog). On Aneyakoji-dori, 3 min from Karasuma-Oike Stn (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Aneyakoji-dori near Karasuma-Oike, an old shopfront — 3 min from Karasuma-Oike Stn',
    cuisine: 'Kyoto confectioner founded in 1804, said to be run by the seventh generation (August 2026 review) · dry sweets: the seasonal boxed assortment "Kyo no Yosuga", rakugan including a brown-rice one with salted soybeans · fresh sweets such as chestnut kinton and a raspberry jelly sweet · the senbei-manju "Miyo" ¥300, mochi wafers filled with bean paste to order · yokan, kintsuba, kuzuyaki; limited "Hoshi no Omoi" and "Karukaru" (2026 reviews)',
    website: SITE, gmaps: gm('亀末廣 京都'), menu_url: null,
    notes: "[Wagashi · Karasuma-Oike, a confectioner since 1804] Behind an old shopfront near the Shinpukan, a quiet, old-fashioned shop where the staff explain each sweet in a soft Kyoto lilt. It is known for refined dry sweets — the seasonal boxed assortment and delicate rakugan — and for fresh sweets that must be eaten the same day; the senbei-manju (¥300), crisp mochi wafers filled with bean paste as you buy, is the local favourite. Takeaway only; cash only; closed Wednesdays, Sundays and holidays. A September 2026 buyer found the wrapping and handling careless.",
    chef_bio: { chef_name: null, roles: ['Family-run confectioner, said to be in its seventh generation (August 2026 review); no names in a source'], origin: null,
      background: 'Per 2026 reviews: founded in 1804 and said to be run by the seventh generation; dry sweets, fresh sweets and yokan. Listed by the Kyoto meibutsu association 京名物百味会 (its shop page). Tabelog Sweets WEST "Tabelog 100" 2018–2020, 2022 and Japanese sweets WEST 2023, 2026.',
      philosophy: null, specialty: 'Boxed dry sweets; senbei-manju; fresh sweets.',
      anecdotes: [
        { text: '"When I bought it, they filled the red bean paste on the spot for takeout." — August 2026, the senbei-manju.', source: R + 'B534569048/' },
        { text: '"As I looked at the array of wagashi, the staff kindly explained each sweet in detail." — September 2026.', source: R + 'B535731892/' },
        { text: '"The cashier carelessly dropped the tray on top of the product samples, which felt rather sloppy." — September 2026.', source: R + 'B536163817/' },
      ],
      japanese_sources_summary: '京名物百味会のページ (kyomeibutuhyakumikai.jp)。食べログ: 亀末廣、和菓子、中京区姉小路車屋町東入ル車屋町251、烏丸御池駅から徒歩約3分、月・火・木〜土 9:00〜17:00、水・日・祝休み、持ち帰りのみ、予約可、カード不可、スイーツ WEST 百名店 2018〜2020・2022、和菓子・甘味処 WEST 百名店 2023・2026。口コミ (2026年8〜10月、英語): 1804年創業、7代目、干菓子、落雁、生菓子、その場で餡を詰める煎餅饅頭、丁寧な説明、包装や扱いが雑だったという声も。',
      confidence: 'medium', sources: [TB, SITE, R + 'B533691526/', R + 'B533733277/', R + 'B534569048/', R + 'B534754417/', R + 'B535372064/', R + 'B535731892/', R + 'B536163817/', R + 'B536651458/', R + 'B537016137/', R + 'B537118308/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Point at the sweets; staff explain each one.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区姉小路車屋町東入ル車屋町251',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026; Japanese sweets WEST Tabelog 100 2026.' },
    pin_source: `Tabelog ${TB} (35.009936, 135.760378); cross-checked: GSI 京都府京都市中京区車屋町251番地 (lot) 18m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534569048/'],
    price_note: 'No price list read; from an August 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Senbei-manju "Miyo" (filled to order)', '¥300', 'Sweets', 'ask', 'ask', 'August 2026.', 'senbei_manju'),
    ] }, {
    cuisine: '1804年創業、7代目が営むという京菓子の店 (2026年8月の口コミ)・干菓子: 季節の詰め合わせ「Kyo no Yosuga」、塩豆入りの玄米の落雁など・栗きんとんやラズベリーのゼリーの生菓子・その場で餡を詰める煎餅饅頭「Miyo」300円・羊羹、きんつば、くず焼き、限定の「Hoshi no Omoi」「Karukaru」(2026年の口コミ)',
    neighborhood: '烏丸御池近くの姉小路通、古い店構え。烏丸御池駅から徒歩3分',
    gf_detail: '要確認。干菓子 (米粉や玄米の落雁)、生菓子、羊羹、もち米の皮の煎餅饅頭。原材料は公開されていない (2026年の口コミ)。',
    vegan_detail: '要確認。餡や砂糖の菓子は候補になりそうだが、原材料は公開されていない (2026年の口コミ)。',
    notes: '[和菓子・烏丸御池、1804年からの京菓子] Shinpukan の近く、年季の入った店構えの静かな昔ながらの店で、京ことばの店員が菓子を一つずつ説明してくれる。季節の干菓子の詰め合わせや繊細な落雁、当日限りの生菓子で知られ、買うときに餡を詰めるぱりっとした煎餅饅頭 (300円) が人気。持ち帰りのみ、現金のみ、水・日・祝休み。2026年9月には包装や扱いが雑だったという声も。',
  });
}

// ================================================================ 鮨まつもと
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26002579/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'kyoto_sushi_matsumoto_gion', name: '鮨まつもと (Sushi Matsumoto)', category: 'MOM_AND_POP',
    lat: 35.003399, lng: 135.774437, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. Edomae sushi with seasoned toppings and sauces (nikiri, tsume for anago and clams); nigiri come with salt and sudachi or soy sauce (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish omakase.',
    hours_raw: 'Lunch 12:00–14:00 (last order 13:00) and dinner 18:00–21:00 (last order 19:00) on Mon and Thu–Sun; Wednesday is listed with no times; closed Tuesday and occasionally (Tabelog). Because Wednesday has no published times, no hours are stored. Reservations accepted, by phone or Ikyu (Tabelog; December 2025); no strong perfume or fabric softener (Tabelog). Omakase only (September 2026); a 17-piece lunch course (July 2026). 11 seats: a counter of 7 and two tables for 2 (Tabelog). Non-smoking; smoking in the courtyard (Tabelog). Cards (Tabelog). On the Yayoi-koji lane on the south side of Gion, 5 min from Gion-Shijo Stn (Tabelog; May 2026). Opened 2006 (May 2026 review).',
    hours: {}, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion south side, on the Yayoi-koji lane behind an indigo noren — 5 min from Gion-Shijo Stn',
    cuisine: 'Edomae sushi in the line of Tokyo\'s Shinbashi Shimizu: red-vinegar rice without sugar, toppings cured and seasoned for sake (2026 reviews) · omakase only, lunch and dinner; a 17-piece lunch course (July 2026); diners report ¥20,000–29,999 · 2026 pieces: kombu-cured sea bream and flounder, sumi-ika, kohada, flaked and medium-fatty tuna, simmered clams from Kuwana, hokki clam, ayu, Lake Biwa trout, horse mackerel, purple and red sea urchin, ribbonfish, anago, kanpyo · small dishes such as white sweet sea bream with kinome, tomato with mozuku · sake, shochu, wine, highballs',
    website: null, gmaps: gm('鮨まつもと 祇園'), menu_url: null,
    notes: "[Sushi · Gion, Kyoto's Edomae counter] Through an indigo noren on the Yayoi-koji lane, a white-wood counter of seven where Daiten Matsumoto, from Kanagawa and trained at Tokyo's Shinbashi Shimizu, makes true Edomae sushi: red-vinegar rice with no sugar, kombu-cured sea bream, kohada, simmered Kuwana clams, anago with tsume, served briskly piece by piece. 2026 reviewers call it Michelin-starred and good value, with more locals than tourists. Omakase only; book by phone or Ikyu; no strong perfume. About ¥20,000–30,000.",
    chef_bio: { chef_name: 'Daiten Matsumoto (May and September 2026 reviews; no given-name kanji in a source)', roles: ['Owner-chef (2026 reviews)'], origin: 'Kanagawa Prefecture (May 2026 review).',
      background: 'Per 2026 reviews: from Kanagawa; trained at Shinbashi Shimizu in Tokyo, a first disciple per one July 2026 review; opened Sushi Matsumoto in Gion in 2006; Michelin one star. Tabelog Sushi WEST "Tabelog 100" 2021, 2022, 2025.',
      philosophy: null, specialty: 'Edomae nigiri; kohada; simmered clams.',
      anecdotes: [
        { text: '"The rice is made without sugar, using only red vinegar and salt, resulting in a fluffy and slightly softer texture" — October 2026.', source: R + 'B537490407/' },
        { text: '"In fact, it seems like there are more local customers compared to other restaurants." — August 2026.', source: R + 'B533320150/' },
        { text: '"After visiting almost all the sushi restaurants in Kyoto, I finally returned to this place, my last stronghold." — October 2026.', source: R + 'B537490407/' },
      ],
      japanese_sources_summary: '食べログ: 鮨まつもと、寿司、東山区祇園町南側570-123、祇園四条駅から徒歩5分、月・木〜日 12:00〜14:00 (L.O.13:00)・18:00〜21:00 (L.O.19:00)、水曜は時間の記載なし、火曜休み、臨時休業あり、予約可、強い香水や柔軟剤は控えて、11席 (カウンター7、テーブル2×2)、中庭で喫煙可、カード可、寿司 WEST 百名店 2021・2022・2025。口コミ (2025年12月〜2026年10月、英語): 2006年創業、Kanagawa 出身の Daiten Matsumoto さん、Shinbashi Shimizu で修業、砂糖を使わない赤酢のシャリ、江戸前、ミシュラン一つ星、おまかせのみ、地元の客が多い。',
      confidence: 'medium', sources: [TB, R + 'B512465653/', R + 'B519711374/', R + 'B520102123/', R + 'B524149414/', R + 'B531246428/', R + 'B531327822/', R + 'B531504688/', R + 'B533320150/', R + 'B535728801/', R + 'B537490407/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Omakase at the counter; book by phone or Ikyu.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町南側570-123',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.003399, 135.774437); cross-checked: GSI 京都府京都市東山区祇園町南側570番地 (lot) 44m; shares 570-123 with kyoto_gion_matayoshi, 13 m away — not stacked; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No published prices; diners report ¥20,000–29,999 (2025–2026 reviews).', last_checked: TODAY, items: [
      it('', '', 'Omakase sushi (lunch or dinner)', '', 'Course', 'ask', 'no', '2026 reviews.', 'omakase'),
    ] }, {
    cuisine: '東京の Shinbashi Shimizu の流れの江戸前鮨: 砂糖を使わない赤酢のシャリ、酒に合う仕事をしたネタ (2026年の口コミ)・昼夜ともおまかせのみ、昼は17貫のコース (2026年7月)、予算は20,000〜29,999円・2026年のネタ: 昆布締めの鯛や平目、墨烏賊、小鰭、マグロのほぐしと中トロ、Kuwana の煮蛤、北寄貝、鮎、琵琶鱒、鯵、紫雲丹と赤雲丹、太刀魚、穴子、干瓢・つまみ: 木の芽の白甘鯛、もずくとトマトなど・日本酒、焼酎、ワイン、ハイボール',
    neighborhood: '祇園の南側、藍ののれんの Yayoi-koji の路地。祇園四条駅から徒歩5分',
    gf_detail: '予約時に要確認。煮切りや穴子・煮蛤のつめなど味付けしたネタの江戸前鮨。塩とすだち、または醤油で出る (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではありません。魚のおまかせ。',
    notes: '[鮨・祇園、京都の江戸前のカウンター] Yayoi-koji の路地の藍ののれんをくぐると、白木のカウンター7席。Kanagawa 出身で東京の Shinbashi Shimizu で修業した Daiten Matsumoto さんが本格の江戸前を握る: 砂糖なしの赤酢のシャリ、昆布締めの鯛、小鰭、Kuwana の煮蛤、つめを塗った穴子を、テンポよく一貫ずつ。2026年の口コミではミシュランの星付きで値ごろ、観光客より地元の客が多いという。おまかせのみ、予約は電話か一休で、強い香水は控えて。20,000〜30,000円ほど。',
  });
}

save();
