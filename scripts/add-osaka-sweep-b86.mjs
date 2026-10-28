// Osaka sweep (2-mile circle around Dotonbori), batch 86 — mom-and-pop phase (all OMNI).
//   + 酒菜舎虎純 (fish-led Japanese izakaya run by two, sommelier owner; Shinsaibashi-suji) — mom_and_pop
//   + らんぷ屋 (8-seat basement kushikatsu counter run by one person) — mom_and_pop
//   + 川名 (hidden upstairs bar in a Hozenji alley)
//   + 創作鉄板 銀 (creative teppanyaki, Sennichimae)
//   + シーステーション (fresh-fish izakaya and bar over the Dotonbori canal, 200+ drinks)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-27';
const { put, save } = openCitySweep('osaka', TODAY, 86);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 酒菜舎虎純
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27109184/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://www.kojun.jp/';
  const WD = day(['17:30', '23:59']), SU = day(['17:30', '23:00']);
  put({
    id: 'osaka_sakanaya_kojun_shinsaibashi', name: '酒菜舎虎純 (Sakanaya Kojun)', category: 'OMNI',
    lat: 34.670501, lng: 135.500944, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: tempura and fried dishes, soy and miso seasoning; no gluten-free menu found.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish-led menu; dashi throughout.',
    hours_raw: 'Weekdays 17:30–24:00 (L.O. 23:00); Sun and holidays 17:30–23:00 (L.O. 22:00); closed Tuesdays (official site). Online reservations for counter seats; phone for tables of three or more (Tabelog, staff-maintained). Service charge added (Tabelog). Cards and PayPay accepted.',
    hours: { 0: WD, 2: WD, 3: WD, 4: WD, 5: WD, 6: SU }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shinsaibashisuji 2-7-11, back of the 1F arcade — 4 min from Namba Stn exit 14, 5 min from Shinsaibashi Stn exit 6',
    cuisine: 'Fish-led Japanese izakaya · sashimi of fish bought each morning · keema curry dashimaki with Ryu no Tamago eggs · fried dishes with tartar, e.g. chicken tempura · Kojun potato salad · Beniharuka sweet-potato tempura with salt · lotus-root dumplings with duck · fried ginkgo · sansho rice balls and red miso soup · house-smoked dishes · sake from around Japan, rotated, plus bone sake · wines chosen by the sommelier owner · omakase course by reservation the day before · takeout bento, saba bo-zushi, hot pots · 7 counter seats, 1 table for four',
    website: OWN, gmaps: gm('酒菜舎虎純 心斎橋筋'), menu_url: null,
    notes: "[Japanese · a fish-led izakaya and sake bar run by two off Shinsaibashi-suji] A hidden counter izakaya at the back of a building's ground-floor arcade, open since 2019 and run by two. The owner is a cook of Japanese cuisine and a sommelier, so it suits both sake and wine drinkers: sake from around Japan rotates, and wine is chosen to match what you eat. Fish comes first, with sashimi from the morning's buying, but the menu wanders: the signature, per the shop and one weekly regular, is the keema curry dashimaki (house keema rolled into egg), alongside chicken tempura with tartar, potato salad, salted sweet-potato tempura and sansho rice balls with red miso soup to finish. Seasonal set courses are available by advance booking; one December 2025 course included abalone chawanmushi and an assorted sashimi platter. One regular praises the pacing and attentive but unintrusive service. Book counter seats online; closed Tuesdays.",
    chef_bio: { chef_name: null, roles: ['owner-chef', 'sommelier'], origin: 'Opened 26 January 2019 (Tabelog)', background: 'Izakaya run by two; owner a cook of Japanese cuisine and a sommelier (official site kojun.jp).', philosophy: 'Seasoning made in-house; ingredients bought each morning; counter-first service so the pace suits each guest (official site).', specialty: 'Seasonal fish; keema curry dashimaki.',
      anecdotes: [
        { text: '"When I first heard about the combination of keema curry and dashimaki, I thought, \'Will that really work together?\' But it does. It works incredibly well." — August 2026.', source: R + 'B534795303/' },
        { text: '"The fish tartare mentioned in the Tabelog comments was made with Yokowa and tasted as good as pork cutlet… the fried ginkgo nuts were perfectly seasoned with salt. To finish off, we had the sansho rice balls and red miso soup." — October 2026.', source: R + 'B532994742/' },
      ],
      japanese_sources_summary: '公式 kojun.jp: 心斎橋筋のビルの1階奥にある和食中心の居酒屋、20年以上和食に携わる店主が時季の鮮魚で料理、夫婦2人で営みカウンター席がメイン、毎朝仕入れる食材、調味料もオリジナル、キーマカリーだし巻き(龍のたまご)、タルタルのフライ、自家製の燻製、盛り合わせも可、ソムリエの店主がワインを提案、全国の日本酒を定期的に入れ替え、前日までの予約でおまかせコース、松花堂弁当・オードブル・サバ棒寿司・季節の鍋の持ち帰り、平日17:30〜24:00(L.O.23:00)、日祝17:30〜23:00(L.O.22:00)、火曜定休、11席、なんば駅14番出口から徒歩4分、心斎橋駅6番出口から徒歩5分。食べログ(店舗会員): 心斎橋筋2-7-11 日宝ロイヤルビル1F、カウンター7席とテーブル1卓、オンライン予約はカウンターのみ、3名以上のテーブルは電話、サービス料あり、カード・PayPay可、2019年1月26日開店、魚料理に自信。口コミ(2024年11月〜2026年10月): 骨酒、松コース、鮑の茶碗蒸し、日生の牡蠣ポン酢、刺身の盛り合わせ、伝助穴子、鯛の兜蒸し、鴨鍋、鱧の焼霜、無花果と生ハム、鶏天のタルタル、紅はるかの天ぷらを塩で、すだちサワー、日本酒の飲み歩きイベント、弁天娘、鴨そぼろの蓮根饅頭、虎純のポテサラ、揚げ茄子の冷製、ヨコワのタルタル、銀杏の素揚げ、山椒のおにぎりと赤だし、ソーヴィニヨン・ブラン、料理の出すタイミングと程よい距離感、和食を基本に洋の料理も、キーマカリーだし巻き。',
      confidence: 'medium', sources: [TB, OWN, R + 'B534795303/', R + 'B532994742/', R + 'B468511626/', R + 'B495962302/', R + 'B515663166/', R + 'B518039704/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter-first; online booking for counter seats.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋2-7-11 日宝ロイヤルビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); official site live; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋二丁目7番11号 (go) 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [OWN, R + 'B534795303/', R + 'B532994742/', R + 'B495962302/'],
    price_note: 'No prices found; dinner spend about ¥5,000–6,000 (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Keema curry dashimaki', '', 'Signature', 'no', 'no', 'Official site; August 2026.', 'keema_dashimaki'),
      it('', '', 'Assorted sashimi', '', 'Fish', 'no', 'no', 'October 2026.', 'sashimi'),
      it('', '', 'Chicken tempura with tartar sauce', '', 'Fried', 'no', 'no', 'November 2024.', 'toriten'),
      it('', '', 'Sansho rice balls and red miso soup', '', 'Rice', 'no', 'no', 'October 2026.', 'onigiri'),
      it('', '', 'Omakase course', '', 'Courses', 'no', 'no', 'Book by the day before (official site).', 'omakase'),
    ] }, {
    cuisine: '魚が中心の和食の居酒屋・毎朝仕入れる魚の刺身・龍のたまごを使うキーマカリーだし巻き・タルタルのフライ、鶏天など・虎純のポテサラ・紅はるかの天ぷらを塩で・鴨の蓮根饅頭・銀杏の素揚げ・山椒のおにぎりと赤だし・自家製の燻製・全国の日本酒を入れ替え、骨酒も・ソムリエの店主が選ぶワイン・前日までの予約でおまかせコース・持ち帰りの弁当、サバ棒寿司、鍋・カウンター7席、4人掛けテーブル1卓',
    neighborhood: '中央区心斎橋筋2-7-11、ビル1階の奥。なんば駅14番出口から徒歩4分、心斎橋駅6番出口から徒歩5分',
    gf_detail: '実際にはグルテンフリーではありません。天ぷらや揚げ物、醤油や味噌の味付け。グルテンフリーのメニューは見つかりませんでした。',
    vegan_detail: 'ヴィーガンではありません。魚が中心で、だしを広く使う。',
    notes: '[和食・心斎橋筋近く、2人で営む魚の居酒屋と日本酒] ビル1階の通路の奥にある隠れ家のようなカウンターの居酒屋で、2019年開店、2人で営む。店主は和食の料理人でソムリエでもあり、日本酒にもワインにも向く。日本酒は全国のものを入れ替え、ワインは料理に合わせて選んでくれる。主役は毎朝仕入れる魚の刺身だが、料理の幅は広く、店と毎週通う常連がすすめるのはキーマカリーだし巻き(自家製キーマを卵で巻く)。鶏天のタルタル、ポテサラ、塩で食べるさつまいもの天ぷら、締めの山椒のおにぎりと赤だしも。季節のコースは予約制で、2025年12月のコースには鮑の茶碗蒸しや刺身の盛り合わせ。料理を出すタイミングと、気配りがありつつ踏み込みすぎない接客をほめる常連も。カウンターはネット予約を。火曜定休。',
  });
}

// ================================================================ らんぷ屋
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27053726/'; const R = TB + 'dtlrvwlst/';
  const D = day(['16:00', '23:00']);
  put({
    id: 'osaka_ranpuya_shinsaibashi', name: 'らんぷ屋 (Ranpu Ya)', category: 'OMNI',
    lat: 34.671073, lng: 135.501876, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: battered, deep-fried kushikatsu; sauce and lemon soy.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat and seafood skewers.',
    hours_raw: 'Mon–Sat 16:00–23:00; closed Sundays (Tabelog, staff-maintained). Reservations advised (April 2026). Smoking allowed. Cards, PayPay and Rakuten Pay accepted (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinsaibashisuji 2-2-29, B1F, down the stairs on the Shinsaibashi-suji arcade — 5 min from Shinsaibashi or Namba Stn',
    cuisine: 'Kushikatsu fried to order and served one skewer at a time · thin batter · dip in sauce, shrimp salt or lemon soy · kelp with roe · shrimp bread (ebi pan) · shrimp-salt rice ball to finish · drinks from the fridge, self-service; write your own order · 8 counter seats',
    website: null, gmaps: gm('らんぷ屋 心斎橋筋'), menu_url: null,
    notes: "[Japanese · a one-person basement kushikatsu counter on Shinsaibashi-suji] An eight-seat counter down a flight of stairs off the Shinsaibashi-suji arcade, run single-handedly; one diner felt most customers were regulars. Kushikatsu are fried to order and handed over one at a time, so each is crisp; the batter is thin enough that the ingredient shows through, and one diner found not a single miss. Beyond the usual sauce you can dip in shrimp salt or lemon soy. One diner recommends the kelp with roe and the shrimp bread (ebi pan), and another ended with a shrimp-salt rice ball. Portions are small, so you can try many. It's homey: take drinks from the fridge yourself and write down your order. With one person cooking it can feel busy. Book ahead; it fills up. Smoking allowed.",
    chef_bio: { chef_name: null, roles: ['owner'], origin: null, background: 'Kushikatsu counter run by one person (2024–2026 reviews; Tabelog, staff-maintained).', philosophy: null, specialty: 'Kushikatsu fried to order.',
      anecdotes: [
        { text: '"The kushikatsu is fried right after you order, and each skewer is served one by one, ensuring they are all crispy. The batter is perfectly thin, allowing the flavors of the ingredients to shine through without feeling heavy." — August 2025.', source: R + 'B513029989/' },
        { text: '"You can grab drinks from the refrigerator yourself, and you place your orders by writing them down, giving it a very homey feeling… I highly recommend the kombu kelp with roe and the shrimp bread." — November 2024.', source: R + 'B496807023/' },
      ],
      japanese_sources_summary: '食べログ(店舗会員): らんぷ屋、大阪市中央区心斎橋筋2-2-29 五ツ星ビル B1F、心斎橋駅・なんば駅から徒歩5分、月〜土16:00〜23:00、日曜定休、カード・PayPay・楽天ペイ可、電子マネー不可、カウンター8席、喫煙可。口コミ(2024年11月〜2026年4月): 地下のカウンター8席、20時の予約で満席、メニューが豊富、ソースのほか海老塩やレモン醤油、量が少なめで食べやすい、締めの海老塩おにぎり、冷蔵庫から飲み物を自分で取り、注文は紙に書く、アットホーム、子持ち昆布と海老パンがおすすめ、店主ひとりで営む、注文後に揚げて1本ずつ出す、薄い衣、外れなし、クリスマスでも入れた、喫煙可、常連が多い、ひとりなので少し忙しい、予約必須、雰囲気も接客もよい。',
      confidence: 'medium', sources: [TB, R + 'B513029989/', R + 'B496807023/', R + 'B496767835/', R + 'B519988724/', R + 'B521404536/', R + 'B526133671/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Written orders; self-service drinks.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋2-2-29 五ツ星ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated through April 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋二丁目2番29号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B496807023/', R + 'B496767835/', R + 'B519988724/'],
    price_note: 'No prices found; reviewers spent about ¥3,000–5,000.', last_checked: TODAY, items: [
      it('', '', 'Kushikatsu (assorted skewers)', '', 'Kushikatsu', 'no', 'no', 'Sauce, shrimp salt or lemon soy; 2024–2025.', 'kushikatsu'),
      it('', '', 'Kelp with roe', '', 'Kushikatsu', 'no', 'no', 'November 2024.', 'komochi_konbu'),
      it('', '', 'Shrimp bread (ebi pan)', '', 'Kushikatsu', 'no', 'no', 'November 2024.', 'ebi_pan'),
      it('', '', 'Shrimp-salt rice ball', '', 'Rice', 'no', 'no', 'November 2024.', 'onigiri'),
    ] }, {
    cuisine: '注文後に揚げて1本ずつ出す串カツ・薄い衣・ソース、海老塩、レモン醤油で・子持ち昆布・海老パン・締めの海老塩おにぎり・飲み物は冷蔵庫からセルフ、注文は紙に書く・カウンター8席',
    neighborhood: '中央区心斎橋筋2-2-29 B1F、心斎橋筋商店街から階段を下りる。心斎橋駅・なんば駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。衣をつけて揚げる串カツ、ソースやレモン醤油。',
    vegan_detail: 'ヴィーガンではありません。肉や魚介の串。',
    notes: '[和食・心斎橋筋の地下、ひとりで営む串カツのカウンター] 心斎橋筋商店街から階段を下りた地下にあるカウンター8席の店で、ひとりで切り盛りし、常連が多いと感じた人も。串カツは注文を受けてから揚げ、1本ずつ出すのでどれもサクサク。衣は薄く素材の味がわかり、外れが一本もなかったという声も。ソースのほか海老塩やレモン醤油でも。子持ち昆布と海老パンをすすめる人も、締めに海老塩おにぎりを食べた人も。量が少なめなのでいろいろ試せる。飲み物は冷蔵庫から自分で取り、注文は紙に書くアットホームな店。ひとりで回すので忙しく感じることも。満席になるので予約を。喫煙可。',
  });
}

// ================================================================ 川名
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27001598/'; const R = TB + 'dtlrvwlst/';
  const D = day(['18:00', '01:00']);
  put({
    id: 'osaka_bar_kawana_hozenji', name: '川名 (Bar Kawana)', category: 'OMNI',
    lat: 34.668077, lng: 135.502532, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: no gluten-free information; a cocktail bar with nuts and dried-fruit snacks.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'No vegan information; a bar, not a meal stop.',
    hours_raw: 'Mon–Sat 18:00–01:00; closed Sundays; hours may change (Tabelog). Non-smoking (Tabelog). Seat charge about ¥1,000 (September 2024). Cards (JCB, AMEX, Diners) and QR accepted (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba 1-1-8, up a narrow stair in an alley by Hozenji — 230 m from Namba Stn',
    cuisine: 'Classic bar · fresh-fruit cocktails, e.g. grapefruit, vodka and cranberry · gin and tonic, short cocktails left to the bartender · Bowmore and other whisky · straight rum · nuts and dried fruit, dried orange slices · records playing · counter and a table for four, 16 seats · non-smoking',
    website: null, gmaps: gm('BAR 川名 難波'), menu_url: null,
    notes: "[Bar · a hidden wood-rich bar up a staircase by Hozenji] A classic bar you would walk past: in a narrow alley near Hozenji, a barely-marked steep staircase leads to a second door and then a warm, wood-rich room with records playing, a counter and a table in back. One reviewer notes that charred marks from a 2002 fire still show on the counter. The drinks list is short but well made: fresh-fruit cocktails squeezed to order, gin and tonic, a short cocktail left to the bartender, whisky such as Bowmore. Snacks are nuts and dried fruit; one diner loved the dried orange slices. Diners describe the master as easygoing and easy to talk to, and it's calm despite Hozenji Yokocho next door, with overseas visitors among the customers. A seat charge applied (about ¥1,000 in 2024); six drinks for two came to ¥7,500 in February 2026. Non-smoking. Mind the stairs.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Bar near Hozenji (2024–2026 reviews).', philosophy: null, specialty: 'Fresh-fruit cocktails.',
      anecdotes: [
        { text: '"Inside, where records play, you feel completely separated from the outside world, losing track of both time and daylight." — September 2024.', source: R + 'B494715030/' },
        { text: '"I ordered two Bowmore whiskies and a cocktail, and the atmosphere was so pleasant that we just relaxed. The dried orange slices were surprisingly delicious. We had six drinks between the two of us, and the total was JPY 7500." — February 2026.', source: R + 'B522460948/' },
      ],
      japanese_sources_summary: '食べログ: 川名、大阪市中央区難波1-1-8、なんば駅から230m、月〜土18:00〜翌1:00、日曜定休、カード(JCB、AMEX、Diners)・QR可、16席、禁煙、カウンター。口コミ(2024年9月〜2026年6月): 法善寺水掛不動近くの細い路地の2階、木をふんだんに使った温かい内装、2002年の火事の焦げ跡がカウンターに残る、ストレートのラム、ジントニック、品数は多くないのが魅力、話しやすいマスター、ドライフルーツ、法善寺横丁の近くでも静か、左の階段を上る隠れ家、レコードが流れる、席はゆったり、席料1,000円ほど、グレープフルーツをつぶしてウォッカとクランベリーのフルーツカクテル、禁煙のバー、一人がやっと通れる細い階段、目立たない看板、もう一つの扉、カウンターと奥に4人掛けテーブル、客の半分ほどが観光客、ヨーグルトリキュールのショートカクテル、ナッツとドライフルーツ、手頃な会計、急な階段に注意、ボウモア2杯とカクテル、ドライオレンジ、2人で6杯7,500円、クラシックなバー、マスターとの会話。',
      confidence: 'medium', sources: [TB, R + 'B494715030/', R + 'B522460948/', R + 'B494552967/', R + 'B494720165/', R + 'B524323875/', R + 'B533376030/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Overseas visitors among the customers (2024, 2026); no English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波1-1-8',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波一丁目1番8号 (go) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B494715030/', R + 'B522460948/', R + 'B494552967/'],
    price_note: 'Seat charge about ¥1,000 (2024); six drinks for two ¥7,500 (February 2026).', last_checked: TODAY, items: [
      it('', '', 'Fresh-fruit cocktail', '', 'Cocktails', 'ask', 'ask', 'September 2024.', 'fruit_cocktail'),
      it('', '', 'Gin and tonic', '', 'Cocktails', 'ask', 'ask', '2024.', 'gin_tonic'),
      it('', '', 'Whisky (e.g. Bowmore)', '', 'Spirits', 'ask', 'ask', 'February 2026.', 'whisky'),
    ] }, {
    cuisine: 'クラシックなバー・グレープフルーツ、ウォッカ、クランベリーなど生のフルーツのカクテル・ジントニック、おまかせのショートカクテル・ボウモアなどのウイスキー・ストレートのラム・ナッツとドライフルーツ、ドライオレンジ・レコードが流れる・カウンターと4人掛けテーブル、16席・禁煙',
    neighborhood: '中央区難波1-1-8、法善寺そばの路地の細い階段を上る。なんば駅から230m',
    gf_detail: 'グルテンフリーではありません。グルテンフリーの情報はなく、ナッツとドライフルーツのおつまみのカクテルバー。',
    vegan_detail: 'ヴィーガンの情報はありません。食事の店ではなくバー。',
    notes: '[バー・法善寺そば、階段の上の隠れ家の木のバー] 気づかず通り過ぎてしまうクラシックなバー。法善寺近くの細い路地で、目立たない看板の急な階段を上ると、もう一つの扉の先に木をふんだんに使った温かい空間があり、レコードが流れ、カウンターと奥にテーブル。2002年の火事の焦げ跡が今もカウンターに残ると書く人も。品数は多くないが丁寧で、その場でしぼる生のフルーツのカクテル、ジントニック、おまかせのショートカクテル、ボウモアなどのウイスキー。おつまみはナッツとドライフルーツで、ドライオレンジがおいしかったという声。マスターは気さくで話しやすいと評判、法善寺横丁のすぐそばなのに静かで、海外の客も。席料あり(2024年は1,000円ほど)、2026年2月は2人で6杯7,500円。禁煙。階段に注意。',
  });
}

// ================================================================ 創作鉄板 銀
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27134725/'; const R = TB + 'dtlrvwlst/';
  const D = day(['18:00', '23:59']);
  put({
    id: 'osaka_sosaku_teppan_gin_sennichimae', name: '創作鉄板 銀 (Sosaku Teppan Gin)', category: 'OMNI',
    lat: 34.668154, lng: 135.503772, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: soba-meshi noodles, sauces, toast; shared griddle.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: steak, horumon, shrimp and bacon on a shared griddle.',
    hours_raw: 'Mon–Sat 18:00–24:00; closed Sundays (Tabelog, staff-maintained). Smoking allowed. Cards, e-money and QR (Rakuten Pay, au PAY) accepted (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sennichimae 1-7-7, Lees Bldg 2F — 4 min from Kintetsu Nippombashi Stn exit 3, 6 min from Namba Stn exit 14',
    cuisine: 'Creative teppanyaki · grilled vegetables, the onions especially · sirloin steak shabu-shabu with ponzu or a yolk sauce · large shrimp grilled with crispy heads · horumon · chicken neck with lemon · potato salad with thick-cut bacon · fluffy dashimaki-style omelet · soba-meshi, garlic rice, fried rice · honey toast · wine · 6 counter seats, 8 table seats',
    website: null, gmaps: gm('創作鉄板 銀 千日前'), menu_url: null,
    notes: "[Teppanyaki · a casual creative griddle bar in Sennichimae] A small second-floor teppanyaki bar in Sennichimae with a counter and a few tables, casual enough to drop in for a drink. The griddle menu runs to sirloin steak shabu-shabu dipped in ponzu or a sweet yolk sauce, large shrimp grilled until the heads are crisp, horumon, and grilled vegetables that two diners singled out (the onions are sweet). Start with the potato salad topped with thick-cut bacon. Finish with soba-meshi, garlic rice or fried rice, or the honey toast for dessert. One diner found the staff friendly and accommodating. There's wine. Smoking allowed; closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Teppanyaki bar (Tabelog, staff-maintained; 2024–2026 reviews).', philosophy: null, specialty: 'Creative teppanyaki; sirloin shabu-shabu.',
      anecdotes: [
        { text: '"For the sirloin steak shabu-shabu, I was torn between ponzu sauce and a yolk-style sauce. I chose the latter, which was sweet and blended well with the meat… The large shrimp were grilled with the heads crispy." — October 2024.', source: R + 'B493972922/' },
        { text: '"The meat was absolutely delicious!! While there is counter seating, it\'s a very casual place! The fried rice was tasty, and the honey on the toasted bread was exquisite!" — September 2026.', source: R + 'B535009541/' },
      ],
      japanese_sources_summary: '食べログ(店舗会員): 創作鉄板 銀、大阪市中央区千日前1-7-7 Leesビル 2F、近鉄日本橋駅3番出口から徒歩4分、なんば駅14番出口から徒歩6分、月〜土18:00〜24:00、日曜定休、カード・電子マネー・QR(楽天ペイ、au PAY)可、14席(カウンター6、テーブル8)、貸切20名まで、喫煙可。口コミ(2024年10月〜2026年9月): 金曜夜に予約、スピードメニューのポテサラに厚切りベーコン、焼き野菜は特に玉ねぎが甘い、鶏の首肉にレモン、サーロインのステーキしゃぶしゃぶはポン酢か黄身のたれ、大きな海老は頭までカリカリ、ふわふわの玉子焼きはだし巻きのよう、締めのそばめし、紅しょうがを多めに、ガーリックライス、気さくな店主、肉がおいしい、カジュアル、チャーハン、トーストのはちみつ、焼き野菜とホルモン、ワイン。',
      confidence: 'medium', sources: [TB, R + 'B493972922/', R + 'B535009541/', R + 'B536804761/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Casual counter; friendly staff (2024, 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区千日前1-7-7 Leesビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated July–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区千日前一丁目7番7号 (go) 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B493972922/', R + 'B535009541/', R + 'B536804761/'],
    price_note: 'No prices found; dinner spend about ¥4,000–8,000 (2026 reviews).', last_checked: TODAY, items: [
      it('', '', 'Sirloin steak shabu-shabu', '', 'Griddle', 'no', 'no', 'Ponzu or yolk sauce; October 2024.', 'steak_shabu'),
      it('', '', 'Large grilled shrimp', '', 'Griddle', 'no', 'no', 'October 2024.', 'ebi'),
      it('', '', 'Grilled vegetables', '', 'Griddle', 'no', 'no', 'July 2026.', 'yasai'),
      it('', '', 'Horumon', '', 'Griddle', 'no', 'no', 'July 2026.', 'horumon'),
      it('', '', 'Soba-meshi', '', 'Finish', 'no', 'no', 'October 2024.', 'sobameshi'),
    ] }, {
    cuisine: '創作鉄板・特に玉ねぎが甘い焼き野菜・ポン酢か黄身のたれのサーロインのステーキしゃぶしゃぶ・頭までカリカリに焼く大きな海老・ホルモン・鶏の首肉にレモン・厚切りベーコンのポテサラ・だし巻きのようなふわふわの玉子焼き・そばめし、ガーリックライス、チャーハン・はちみつのトースト・ワイン・カウンター6席、テーブル8席',
    neighborhood: '中央区千日前1-7-7 Leesビル 2F。近鉄日本橋駅3番出口から徒歩4分、なんば駅14番出口から徒歩6分',
    gf_detail: '実際にはグルテンフリーではありません。そばめしの麺、ソース、トースト、鉄板は共用。',
    vegan_detail: 'ヴィーガンではありません。ステーキ、ホルモン、海老、ベーコンを共用の鉄板で。',
    notes: '[鉄板焼・千日前のカジュアルな創作鉄板] 千日前のビル2階にある小さな鉄板焼の店で、カウンターとテーブルがいくつか、一杯だけでも気軽に入れる。鉄板料理は、ポン酢か甘い黄身のたれで食べるサーロインのステーキしゃぶしゃぶ、頭までカリカリに焼く大きな海老、ホルモン、そして2人が挙げる焼き野菜(玉ねぎが甘い)。まずは厚切りベーコンをのせたポテサラを。締めはそばめし、ガーリックライス、チャーハン、デザートにはちみつのトースト。スタッフは気さくで融通が利いたという声。ワインも。喫煙可、日曜定休。',
  });
}

// ================================================================ シーステーション
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27055428/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://sea-station.net/';
  put({
    id: 'osaka_sea_station_dotonbori', name: 'シーステーション (Sea Station)', category: 'OMNI',
    lat: 34.668833, lng: 135.499296, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: fried dishes, soy seasoning; no gluten-free menu found.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood and meat throughout.',
    hours_raw: 'Daily 17:30–24:00 (food L.O. 23:00, drinks 23:30); irregular holidays (Tabelog, staff-maintained; official site). Appetizer charge ¥550 (Tabelog). Cash only: no cards, e-money or QR (Tabelog). Smoking allowed (August 2026).',
    hours: ALL(day(['17:30', '23:59'])), hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Dotonbori 2-4-2, Hosen Bldg 4F, at the first corner west of Dotonbori Bridge — 2 min from Namba Stn exit 24',
    cuisine: 'Fresh-fish izakaya and bar · fish bought at the market daily, 60+ dishes plus daily specials · sashimi · katsuo tatsuta-age · shrimp mapo tofu · marinated mackerel · shirako with ponzu · Okinawan dishes such as mozuku with rock salt · eel rice ball to finish · courses with all-you-can-drink · 200+ drinks: 100+ sakes a year, shochu, cocktails, wine, whisky · 6 counter seats, 10 table seats, a four-seat sofa by the window over the canal',
    website: OWN, gmaps: gm('シーステーション 道頓堀'), menu_url: null,
    notes: "[Japanese · a fresh-fish izakaya bar over the Dotonbori canal] A fourth-floor izakaya bar right by Dotonbori Bridge, open since 2011, whose windows look out on the canal; the four-seat sofa by the window is the spot. True to the name, fish leads, bought at the market daily: excellent sashimi, crisp katsuo tatsuta-age, marinated mackerel, and a shrimp mapo tofu more than one diner insists you try. The menu runs to 60-plus dishes with Okinawan touches, and an eel rice ball makes a filling finish. Drinks are the other draw, with 200-plus choices, including over 100 sakes a year, which the manager will suggest, plus a good shochu list. The master is friendly. Courses with all-you-can-drink suit groups, up to 30 for private hire. A ¥550 appetizer charge applies; one diner found the billing unclear. Cash only; smoking allowed.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 31 January 2011 (Tabelog)', background: 'Izakaya and dining bar (official site sea-station.net; Tabelog, staff-maintained).', philosophy: 'Fish bought at the market daily; 200+ drinks (official site).', specialty: 'Fresh fish; shrimp mapo tofu.',
      anecdotes: [
        { text: '"True to its name, SeaStation offers a plethora of fresh seafood. The sashimi is excellent, and the fried bonito (Katsuo no Tatsuta-age) is crispy and delicious. The eel rice ball served as a finale is quite filling." — August 2026.', source: R + 'B534359302/' },
        { text: '"I can\'t express how much I loved the marinated mackerel… And you absolutely must try the shrimp Mapo Tofu." — September 2023.', source: R + 'B472326438/' },
      ],
      japanese_sources_summary: '公式 sea-station.net: 道頓堀のダイニングバー、毎日変わるおすすめとグランドメニューを深夜まで、その日市場で買い付けた鮮魚、60種類以上の料理、年間100種類以上の日本酒を含む200種類以上のドリンク、日本酒好きの店長がおすすめを提案、生ビール、カクテル、焼酎、ワイン、ウイスキー、飲み放題コース、30名まで貸切、窓から道頓堀の夜景、17:30〜24:00、不定休、カウンター6・テーブル10・ソファ4席、なんば駅24番出口から徒歩2分。食べログ(店舗会員): 道頓堀2-4-2 宝泉ビル4F、毎日17:30〜24:00(フードL.O.23:00、ドリンク23:30)、不定休、カード・電子マネー・QR不可、お通し550円、18席、22名まで、2011年1月31日開店、焼酎居酒屋。口コミ(2022年7月〜2026年8月): 沖縄料理、もずくの岩塩、海老の麻婆豆腐、会計がわかりにくいという声、しめ鯖、マスターとスタッフが明るい、喫煙所、締めのスープ、白子ポン酢、バーのようなおしゃれな内装、堀沿いの4階、刺身、カツオの竜田揚げ、鰻のおにぎり、肉のコースと飲み放題、堀を見下ろす4人掛けのソファ、気さくなマスター、喫煙可。',
      confidence: 'medium', sources: [TB, OWN, R + 'B534359302/', R + 'B472326438/', R + 'B451305151/', R + 'B467672269/', R + 'B491200701/', R + 'B499085737/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Bar-style izakaya; no English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区道頓堀2-4-2 宝泉ビル 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); official site posted an April 2026 notice; review dated August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区道頓堀二丁目4番2号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534359302/', R + 'B472326438/', R + 'B451305151/', OWN],
    price_note: 'No dish prices found; appetizer charge ¥550 (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Sashimi', '', 'Fish', 'no', 'no', 'August 2026.', 'sashimi'),
      it('', '', 'Katsuo tatsuta-age', '', 'Fried', 'no', 'no', 'August 2026.', 'katsuo_tatsuta'),
      it('', '', 'Shrimp mapo tofu', '', 'Mains', 'no', 'no', '2023.', 'ebi_mapo'),
      it('', '', 'Marinated mackerel', '', 'Fish', 'no', 'no', 'September 2023.', 'shimesaba'),
      it('', '', 'Eel rice ball', '', 'Rice', 'no', 'no', 'August 2026.', 'unagi_onigiri'),
    ] }, {
    cuisine: '鮮魚の居酒屋とバー・毎日市場で買い付ける魚、60種類以上の料理と日替わり・刺身・カツオの竜田揚げ・海老の麻婆豆腐・しめ鯖・白子ポン酢・もずくの岩塩など沖縄の料理・締めの鰻のおにぎり・飲み放題のコース・年間100種類以上の日本酒を含む200種類以上のドリンク、焼酎、カクテル、ワイン、ウイスキー・カウンター6席、テーブル10席、堀を見下ろす窓際の4人掛けソファ',
    neighborhood: '中央区道頓堀2-4-2 宝泉ビル4F、道頓堀橋の西の最初の角。なんば駅24番出口から徒歩2分',
    gf_detail: '実際にはグルテンフリーではありません。揚げ物、醤油の味付け。グルテンフリーのメニューは見つかりませんでした。',
    vegan_detail: 'ヴィーガンではありません。魚介と肉が中心。',
    notes: '[和食・道頓堀の堀を見下ろす鮮魚の居酒屋バー] 道頓堀橋のすぐそば、ビル4階の居酒屋バーで、2011年開店、窓から道頓堀の堀が見え、窓際の4人掛けソファが特等席。店名どおり主役は毎日市場で買い付ける魚で、すばらしい刺身、サクサクのカツオの竜田揚げ、しめ鯖、そして複数の人がぜひと推す海老の麻婆豆腐。料理は60種類以上で沖縄の料理も、締めの鰻のおにぎりはボリュームたっぷり。もう一つの魅力は200種類以上の飲み物で、年間100種類以上の日本酒は店長がおすすめを提案、焼酎も充実。マスターは気さく。飲み放題のコースは団体向けで、30名まで貸切も。お通し550円、会計がわかりにくかったという声も。現金のみ、喫煙可。',
  });
}

save();
