// Osaka sweep (2-mile circle around Dotonbori), batch 83 — mom-and-pop phase (all OMNI).
//   + 京さか亭 (Japanese courses at night, wagyu hitsumabushi at lunch, off Shinsaibashi-suji)
//   + 日本酒AWA (sake bar upstairs from Tempura Tenzan, opened 2025)
//   + ワインダイニングキャトル (sommelier-led wine dining bar in Souemoncho, opened 2017)
//   + 寿し 壱佳 (late-night sushi counter in Higashi-Shinsaibashi, opened December 2025)
//   + 犇三昧 道頓堀店 (alley yakiniku off Sennichimae, opened 2020)
//   Owner names and backgrounds mentioned in reviews are left out. None solo-run → mom_and_pop false.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-27';
const { put, save } = openCitySweep('osaka', TODAY, 83);
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 京さか亭
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27117252/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://www.liberojapan.com/';
  const D = day(['11:00', '01:00']);
  put({
    id: 'osaka_kyosakatei_shinsaibashi', name: '京さか亭 (Kyosakatei)', category: 'OMNI',
    lat: 34.670315, lng: 135.501788, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: sukiyaki and eel sauces, monaka shell, soy seasoning.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: wagyu, crab, fish and eel throughout.',
    hours_raw: 'Mon–Sat and holidays 11:00–1:00 am (L.O. 24:00); closed Sunday (Tabelog). Evenings are courses only (May 2026). Pets allowed on private bookings only (Tabelog). Cards accepted (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shinsaibashi-suji 2-3-32, Tomiya Bldg 2F — just inside Mitsudera-suji, 4 min from Shinsaibashi or Namba Stn',
    cuisine: 'Japanese courses and sake · lunch: A5 kuroge wagyu ribeye sukiyaki hitsumabushi gozen ¥3,800, with dashi served in a flask · evening courses around ¥10,000: Matsuba crab, ankimo monaka, katsuo tataki with myoga, unagi-maki · seafood, meat, hot pot and rice tailored to appetite · homemade-syrup shaved ice',
    website: OWN, gmaps: gm('京さか亭 心斎橋'), menu_url: null,
    notes: "[Japanese · lunch-to-late Japanese courses off Shinsaibashi-suji] A calm second-floor Japanese restaurant just inside Mitsudera-suji, unusual for serving from lunch until 1 am. At lunch the wagyu sukiyaki hitsumabushi gozen (¥3,800) puts A5 kuroge ribeye over rice, eaten plain, then changed up halfway, then finished with dashi poured from a flask. Evenings are courses only, around ¥10,000 and generous. A winter course brought Matsuba crab with its roe, ankimo in a crisp monaka shell, fragrant katsuo tataki and unagi-maki; the chef will also pace seafood, meat, hot pot and rice to your appetite and take requests. Finish with shaved ice in homemade syrup. Friendly staff, and international guests too. Closed Sundays.",
    chef_bio: { chef_name: null, roles: ['owner'], origin: null, background: 'Japanese restaurant (Tabelog, staff-maintained); operator site liberojapan.com.', philosophy: null, specialty: 'Japanese courses; wagyu hitsumabushi lunch.',
      anecdotes: [
        { text: '"Kyosakatei offers an astonishingly luxurious course for just around JPY 10,000… Ankimo Monaka: Inside the crispy, fragrant monaka shell is a generous amount of rich and creamy ankimo (monkfish liver)." — December 2025.', source: R + 'B521743526/' },
        { text: '"The luxurious Wagyu rice bowl was delicious on its own, and it was also great when I changed the flavor halfway through or turned it into Hitsumabushi. The dashi was served in a flask." — May 2026.', source: R + 'B528179409/' },
      ],
      japanese_sources_summary: '運営サイト liberojapan.com。食べログ(店舗会員): 京さか亭、大阪市中央区心斎橋筋2-3-32 トミヤビル 2F、心斎橋筋商店街の三津寺筋から45歩、心斎橋駅・なんば駅から徒歩4分、月〜土・祝11:00〜翌1:00(L.O.24:00)、日曜休み、カード可、ペットは貸切時のみ。口コミ(2025年12月〜2026年6月): 丁寧な和食、海外の客も、10,000円ほどの豪華なコース、松葉蟹、あん肝最中、鰹のたたきに茗荷、鰻巻き、昼から営業する珍しい和の居酒屋、A5の黒毛和牛リブロースのすき焼きひつまぶし御膳3,800円、夜はコースのみ、気さくな店主、フラスコで出るだし、自家製シロップのかき氷、親切なスタッフ、空腹具合に合わせて魚介・肉・鍋・ご飯、リクエストにも対応、落ち着いた和の店内、接待や特別な日にも。',
      confidence: 'medium', sources: [TB, OWN, R + 'B521743526/', R + 'B528179409/', R + 'B527265729/', R + 'B529313516/', R + 'B529604414/', R + 'B521735994/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'International guests seen (January 2026); no English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋2-3-32 トミヤビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated December 2025–June 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋二丁目3番32号 (go) 6m; same building as 炭焼鳥miya; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B527265729/', R + 'B521743526/'],
    price_note: 'Prices from December 2025 and May 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Wagyu sukiyaki hitsumabushi gozen (lunch)', '¥3,800', 'Lunch', 'no', 'no', 'May 2026.', 'hitsumabushi'),
      it('', '', 'Evening course', 'about ¥10,000', 'Courses', 'no', 'no', 'December 2025.', 'course'),
      it('', '', 'Shaved ice with homemade syrup', '', 'Dessert', 'ask', 'ask', 'May 2026.', 'kakigori'),
    ] }, {
    cuisine: '和食のコースと日本酒・昼はA5黒毛和牛リブロースのすき焼きひつまぶし御膳3,800円、だしはフラスコで・夜は10,000円ほどのコース: 松葉蟹、あん肝最中、茗荷を添えた鰹のたたき、鰻巻き・空腹具合に合わせた魚介、肉、鍋、ご飯・自家製シロップのかき氷',
    neighborhood: '中央区心斎橋筋2-3-32 トミヤビル 2F。三津寺筋を入ってすぐ、心斎橋駅・なんば駅から徒歩4分',
    gf_detail: '実際にはグルテンフリーではありません。すき焼きや鰻のたれ、最中の皮、醤油の味付け。',
    vegan_detail: 'ヴィーガンではありません。和牛、蟹、魚、鰻が中心。',
    notes: '[和食・心斎橋筋の昼から深夜までの和食コース] 三津寺筋を入ってすぐの2階にある落ち着いた和食店で、昼から深夜1時まで営業するのが珍しい。昼のすき焼きひつまぶし御膳(3,800円)はA5黒毛和牛のリブロースをご飯にのせ、そのまま、途中で味を変え、最後はフラスコから注ぐだしで。夜はコースのみで10,000円ほど、品数も豊富。冬のコースは内子と外子の松葉蟹、パリッとした最中に詰めたあん肝、香ばしい鰹のたたき、鰻巻きなど。空腹具合に合わせて魚介、肉、鍋、ご飯を出し、リクエストにも応えてくれる。締めは自家製シロップのかき氷。スタッフは親切で、海外の客も。日曜定休。',
  });
}

// ================================================================ 日本酒AWA
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27151155/'; const R = TB + 'dtlrvwlst/';
  const D = day(['19:00', '03:00']);
  put({
    id: 'osaka_nihonshu_awa_hozenji', name: '日本酒AWA (Nihonshu AWA)', category: 'OMNI',
    lat: 34.668118, lng: 135.50261, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: food comes from the tempura restaurant downstairs.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a bar; food is ordered from the tempura restaurant below.',
    hours_raw: 'Mon, Tue and Thu–Sun and holidays 19:00–3:00 am (drinks L.O. 2:30); closed Wednesday from 21 January (Tabelog). Cards, e-money and QR accepted (Tabelog).',
    hours: { 0: D, 1: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba 1-1-17, 2F above Tempura Tenzan, Hōzenji Yokocho — 5 min from Namba Stn',
    cuisine: 'Sake bar · tasting set of three ¥1,980, such as Hakkaisan junmai ginjo, Tenzan honjozo and Gohshun · premium Juyondai and Dassai · junmai daiginjo · kiriko glasses · whisky, wine and fruit cocktails · Taketsuru highball · food from Tempura Tenzan downstairs',
    website: null, gmaps: gm('日本酒AWA 法善寺'), menu_url: null,
    notes: "[Bar · a sake bar upstairs from Tempura Tenzan in Hōzenji Yokocho] A hidden sake bar on the second floor above Tempura Tenzan, opened in July 2025, with a calm, modern Japanese room and sake served in kiriko cut glass. Start with the tasting set of three (¥1,980), which has paired Hakkaisan, Tenzan and Gohshun, then move on to premium bottles like Juyondai and Dassai. Whisky, wine and fruit cocktails are on hand too, and food can be ordered from the tempura restaurant downstairs, which makes it an easy second stop after dinner below. The master is chatty and attentive. It's popular with overseas visitors, and one sake fan found the prices set for tourists. Open until 3 am; closed Wednesdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 18 July 2025 (Tabelog)', background: 'Sake bar on the second floor of Tempura Tenzan (October 2025 reviews; Tabelog, staff-maintained).', philosophy: null, specialty: 'Sake tasting sets.',
      anecdotes: [
        { text: '"I ordered the \'Japanese Sake Tasting Set (JPY 1,980)\' featuring three different varieties: Hakkaisan (Junmai Ginjo), Tenzan (Honjozo, Extra Dry), and Gohshun (Honjozo, Honmaru)." — October 2025.', source: R + 'B515538934/' },
        { text: '"The master was very attentive and seemed to genuinely engage with each customer… the prices for the sake seemed to be set for tourists, making it quite expensive." — April 2026.', source: R + 'B527383235/' },
      ],
      japanese_sources_summary: '食べログ(店舗会員): 日本酒AWA、大阪市中央区難波1-1-17 2F、なんば駅から徒歩5分、月・火・木〜日・祝19:00〜翌3:00(ドリンクL.O.2:30)、1月21日から水曜休み、カード・電子マネー・QR可、2025年7月18日開店。口コミ(2025年10月〜2026年4月): 日本酒専門のバー、切子のグラス、1階の天ぷら天山の料理も注文できる、天ぷら屋の2階の隠れ家、和モダンの落ち着いた空間、日本酒飲み比べ3種1,980円(Hakkaisan純米吟醸、Tenzan本醸造、Gohshun本醸造)、Juyondai・Dassaiも、純米大吟醸、ウイスキーとワイン、外国人にも人気、マスターが気さくで丁寧、キウイのフルーツカクテル、Taketsuruのハイボール、前菜3種盛り、日本酒の値段は観光客向けで高めという声。',
      confidence: 'medium', sources: [TB, R + 'B515538934/', R + 'B527383235/', R + 'B515124445/', R + 'B515988081/', R + 'B515994668/', R + 'B524355009/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Popular with overseas visitors (March 2026); no English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波1-1-17 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated October 2025–April 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波一丁目1番17号 (go) 10m; upstairs from 法善寺横丁 天ぷら天山; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B515538934/', R + 'B515988081/'],
    price_note: 'Price from October 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Sake tasting set (3 kinds)', '¥1,980', 'Drinks', 'ask', 'vegan', 'October 2025.', 'nomikurabe'),
      it('', '', 'Fruit cocktail', '', 'Drinks', 'ask', 'ask', 'April 2026.', 'fruit_cocktail'),
    ] }, {
    cuisine: '日本酒バー・飲み比べ3種1,980円(Hakkaisanの純米吟醸、Tenzanの本醸造、Gohshunなど)・Juyondai、Dassaiも・純米大吟醸・切子のグラス・ウイスキー、ワイン、フルーツカクテル・Taketsuruのハイボール・料理は1階の天ぷら天山から',
    neighborhood: '中央区難波1-1-17 2F、法善寺横丁の天ぷら天山の上。なんば駅から徒歩5分',
    gf_detail: '実際にはグルテンフリーではありません。料理は1階の天ぷら店から。',
    vegan_detail: 'ヴィーガンではありません。バーで、料理は下の天ぷら店から注文。',
    notes: '[バー・法善寺横丁の天ぷら天山の上の日本酒バー] 天ぷら天山の2階にある2025年7月開店の隠れ家の日本酒バーで、落ち着いた和モダンの空間、日本酒は切子のグラスで。まずは飲み比べ3種(1,980円)、Hakkaisan、Tenzan、Gohshunが並んだことも、続いてJuyondaiやDassaiなどの銘酒へ。ウイスキー、ワイン、フルーツカクテルもあり、料理は下の天ぷら店から頼めるので、1階で食事をした後の2軒目にちょうどいい。マスターは話好きで丁寧。海外の客にも人気で、値段が観光客向けと感じた日本酒好きも。深夜3時まで、水曜定休。',
  });
}

// ================================================================ ワインダイニングキャトル
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27100591/'; const R = TB + 'dtlrvwlst/';
  const D = day(['17:00', '23:59']);
  put({
    id: 'osaka_wine_dining_quatre', name: 'ワインダイニングキャトル (Wine Dining Quatre)', category: 'OMNI',
    lat: 34.669617, lng: 135.503187, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: pasta, pizza, bruschetta and fritters.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood pastas, roast duck, roast beef and lamb. Vegetables are a strong point (July 2026); ask.',
    hours_raw: 'Mon, Tue and Thu–Sun 17:00–24:00; closed Wednesday (Tabelog). Courses built to budget by phone (Tabelog). Cards, e-money and QR accepted (Tabelog).',
    hours: { 0: D, 1: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Souemoncho 6-8, KS Kasayamachi Bldg B1F — 5 min from Namba Stn',
    cuisine: 'Sommelier-led wine dining · generous eight-dish appetizer platter with bruschetta and cold soup · uni pasta · mentaiko cream pasta · karasumi pasta · risotto · roast duck · roast beef · isaki carpaccio · seafood tomato pizza · fritters · lamb · seasonal fruit with prosciutto · chocolate parfait · wines by the bottle to budget · courses on request · a few counter seats and one table',
    website: null, gmaps: gm('ワインダイニングキャトル 宗右衛門町'), menu_url: null,
    notes: "[Italian · a sommelier's basement wine dining bar in Souemoncho] A cozy basement wine bar in Souemoncho, open since 2017, with a few counter seats and one table and a sommelier who picks bottles to taste and budget; one group asked for something reasonable and got an exceptional bottle. Start with the generous appetizer platter of about eight small dishes, bruschetta and a cold soup among them, then go to the pastas: uni (one diner's dish of the night), mentaiko cream, or loaded with karasumi. Risotto, roast duck, roast beef, isaki carpaccio, a seafood pizza and lamb follow, and the vegetables earn praise. Finish with a chocolate parfait. Courses can be set to your budget by phone. Closed Wednesdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 June 2017 (Tabelog)', background: 'Wine dining bar with a sommelier (2025–2026 reviews; Tabelog, staff-maintained).', philosophy: null, specialty: 'Wine pairings; pasta.',
      anecdotes: [
        { text: '"The assorted appetizers included eight dishes and were quite generous in portion… As expected from the sommelier!" — August 2026.', source: R + 'B534586215/' },
        { text: '"The standout dish of the evening was undoubtedly the \'Uni Pasta\'." — March 2026.', source: R + 'B525335530/' },
      ],
      japanese_sources_summary: '食べログ(店舗会員): ワインダイニングキャトル、大阪市中央区宗右衛門町6-8 KS笠屋町ビル B1F、なんば駅から徒歩5分、月・火・木〜日17:00〜24:00、水曜休み、カード・電子マネー・QR可、2017年6月1日開店、予算と品数に合わせたコースは電話で。口コミ(2025年5月〜2026年8月): 女子会、たっぷりの前菜盛り合わせ(ブルスケッタ、冷製スープ)、明太子クリームパスタ、からすみたっぷりのパスタ、フリット、赤ワイン3種、ソムリエがいる、鴨のロースト、ローストビーフ、イサキのカルパッチョ、魚介のトマトピザ、デザート、うにのパスタ、季節のフルーツと生ハム、アボカドのディップ、コース、ワイン選び、リゾット、前菜、ニュージーランドのソーヴィニヨン・ブラン、カリフォルニアのカベルネと仔羊、チョコレートパフェ、野菜がおいしい、カウンター数席とテーブル1卓、前菜8品、手頃なワインを頼んでも良いワイン。',
      confidence: 'medium', sources: [TB, R + 'B534586215/', R + 'B525335530/', R + 'B506988775/', R + 'B508689284/', R + 'B528392142/', R + 'B531049548/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small basement bar; the sommelier picks wines to taste.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区宗右衛門町6-8 KS笠屋町ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区宗右衛門町6番8号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534586215/', R + 'B506988775/'],
    price_note: 'No prices captured; reviewers spent ¥6,000–9,999.', last_checked: TODAY, items: [
      it('', '', 'Assorted appetizers (about 8 dishes)', '', 'Starters', 'no', 'ask', 'August 2026.', 'antipasto'),
      it('', '', 'Uni pasta', '', 'Pasta', 'no', 'no', 'March 2026.', 'uni_pasta'),
      it('', '', 'Karasumi pasta', '', 'Pasta', 'no', 'no', 'August 2026.', 'karasumi_pasta'),
      it('', '', 'Roast duck', '', 'Mains', 'ask', 'no', 'June 2025–March 2026.', 'roast_duck'),
      it('', '', 'Chocolate parfait', '', 'Dessert', 'no', 'no', 'July 2026.', 'parfait'),
    ] }, {
    cuisine: 'ソムリエのいるワインダイニング・ブルスケッタや冷製スープを含む8品ほどのたっぷりの前菜盛り合わせ・うにのパスタ・明太子クリームパスタ・からすみのパスタ・リゾット・鴨のロースト・ローストビーフ・イサキのカルパッチョ・魚介のトマトピザ・フリット・仔羊・季節のフルーツと生ハム・チョコレートパフェ・予算に合わせたボトルワイン・コースは要相談・カウンター数席とテーブル1卓',
    neighborhood: '中央区宗右衛門町6-8 KS笠屋町ビル B1F。なんば駅から徒歩5分',
    gf_detail: '実際にはグルテンフリーではありません。パスタ、ピザ、ブルスケッタ、フリット。',
    vegan_detail: 'ヴィーガンではありません。魚介のパスタ、鴨、ローストビーフ、仔羊。野菜料理は好評(2026年7月)、要確認。',
    notes: '[イタリアン・宗右衛門町の地下のソムリエのワインダイニング] 宗右衛門町の地下にある2017年開店のこぢんまりしたワインバーで、カウンター数席とテーブル1卓、ソムリエが好みと予算に合わせてボトルを選んでくれ、手頃なものを頼んで素晴らしい一本が出てきたグループも。まずはブルスケッタや冷製スープなど8品ほどのたっぷりの前菜盛り合わせ、続いてうに(ある客のこの夜のMVP)、明太子クリーム、からすみたっぷりのパスタ。リゾット、鴨のロースト、ローストビーフ、イサキのカルパッチョ、魚介のピザ、仔羊も、野菜もおいしいと好評。締めはチョコレートパフェ。予算に合わせたコースは電話で相談を。水曜定休。',
  });
}

// ================================================================ 寿し 壱佳
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27154511/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://plum385077.studio.site/';
  const D = day(['18:00', '03:00']);
  put({
    id: 'osaka_sushi_ikkei_higashishinsaibashi', name: '寿し 壱佳 (Sushi Ikkei)', category: 'OMNI',
    lat: 34.670383, lng: 135.50335, cuisine_type: 'sushi',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: soy sauce, eel tare, dashimaki seasoning.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi counter.',
    hours_raw: 'Mon, Tue and Thu–Sun and holidays 18:00–3:00 am; closed Wednesday (Tabelog). No table charge (Tabelog). Cards, e-money and QR accepted (Tabelog).',
    hours: { 0: D, 1: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 2-6-19, Mitsudera Galaxy Bldg No. 5 1F — 7 min from Namba, Nipponbashi or Shinsaibashi Stn',
    cuisine: 'Late-night sushi counter · omakase nigiri · eel · jumbo shrimp · special tuna salad · wagyu tataki · overflowing crab and ikura gunkan · sardine with condiments · sake-steamed clams · salmon tasting plate · fluffy dashimaki · local sake · red-themed counter',
    website: OWN, gmaps: gm('寿し 壱佳 東心斎橋'), menu_url: null,
    notes: "[Sushi · a red-lit late-night sushi counter in Higashi-Shinsaibashi] A casual sushi counter opened in December 2025 among the flashy signs of Higashi-Shinsaibashi, serving until 3 am. Inside, a red-themed counter keeps it relaxed rather than stiff. Order omakase nigiri or graze: eel that one diner loved, jumbo shrimp, a special tuna salad, wagyu tataki, sake-steamed clams, a salmon tasting plate, and a fluffy dashimaki full of dashi. The crab and ikura gunkan come piled to overflowing, though one diner found the taste average next to the looks. Local sake is well stocked. The head chef and staff are friendly, and it has worked for both dates and business meals. No table charge. Closed Wednesdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 22 December 2025 (Tabelog)', background: 'Late-night sushi counter (Tabelog, staff-maintained).', philosophy: null, specialty: 'Eel; dashimaki; gunkan.',
      anecdotes: [
        { text: '"I highly recommend the unagi (grilled eel), jumbo shrimp, and special tuna salad—definitely a must-try! Also, don\'t miss the Wagyu tataki!" — August 2026.', source: R + 'B535850866/' },
        { text: '"Both the sushi and the dishes were delicious, but my favorite was definitely the dashi-maki! … It was fluffy with a rich dashi flavor." — September 2026.', source: R + 'B535619602/' },
      ],
      japanese_sources_summary: '食べログ(店舗会員): 寿し 壱佳、大阪市中央区東心斎橋2-6-19 三ッ寺ギャラクシービル5号館 1F、なんば・日本橋・心斎橋駅から徒歩7分、月・火・木〜日・祝18:00〜翌3:00、水曜休み、チャージなし、カード・電子マネー・QR可、2025年12月22日開店。口コミ(2026年6〜10月): 刺身がおいしい、だし巻きが一番、デートに、接待に、鰻、大海老、特製マグロサラダ、和牛たたき、地酒、カウンター席、派手な看板の中の店、赤いカウンター、いわし、蟹の軍艦、あふれるいくら軍艦、見た目に比べて味は普通という声、気軽な雰囲気、おまかせ握り、あさりの酒蒸し、サーモンの食べ比べ、大将とスタッフが親切、日本酒が豊富。',
      confidence: 'medium', sources: [TB, OWN, R + 'B535850866/', R + 'B535619602/', R + 'B536416069/', R + 'B537647739/', R + 'B537734632/', R + 'B531316759/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter only; relaxed atmosphere (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋2-6-19 三ッ寺ギャラクシービル5号館 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated June–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋二丁目6番19号 (go) 14m; same address as 湯火功夫; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535850866/', R + 'B537647739/'],
    price_note: 'No prices captured; most reviewers spent ¥2,000–5,999.', last_checked: TODAY, items: [
      it('', '', 'Omakase nigiri', '', 'Sushi', 'no', 'no', 'October 2026.', 'omakase'),
      it('', '', 'Eel', '', 'Sushi', 'no', 'no', 'August–October 2026.', 'unagi'),
      it('', '', 'Special tuna salad', '', 'Small plates', 'ask', 'no', 'August–October 2026.', 'maguro_salad'),
      it('', '', 'Dashimaki', '', 'Small plates', 'no', 'no', 'September–October 2026.', 'dashimaki'),
      it('', '', 'Ikura gunkan', '', 'Sushi', 'ask', 'no', 'September 2026.', 'ikura'),
    ] }, {
    cuisine: '深夜営業の鮨のカウンター・おまかせ握り・鰻・大海老・特製マグロサラダ・和牛たたき・あふれる蟹といくらの軍艦・薬味をのせたいわし・あさりの酒蒸し・サーモンの食べ比べ・ふわふわのだし巻き・地酒・赤を基調にしたカウンター',
    neighborhood: '中央区東心斎橋2-6-19 三ッ寺ギャラクシービル5号館 1F。なんば・日本橋・心斎橋駅から徒歩7分',
    gf_detail: '実際にはグルテンフリーではありません。醤油、鰻のたれ、だし巻きの味付け。',
    vegan_detail: 'ヴィーガンではありません。鮨のカウンター。',
    notes: '[鮨・東心斎橋の赤いカウンターの深夜の鮨] 東心斎橋の派手な看板の中に2025年12月に開店した気軽な鮨のカウンターで、深夜3時まで。赤を基調にしたカウンターは堅苦しくない雰囲気。おまかせ握りか、つまみで: 好評の鰻、大海老、特製マグロサラダ、和牛たたき、あさりの酒蒸し、サーモンの食べ比べ、だしたっぷりのふわふわのだし巻き。蟹といくらの軍艦はあふれるほどの盛りだが、見た目に比べて味は普通と感じた人も。地酒も豊富。大将とスタッフは気さくで、デートにも接待にも使われている。チャージなし。水曜定休。',
  });
}

// ================================================================ 犇三昧 道頓堀店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27119086/'; const R = TB + 'dtlrvwlst/';
  const E = day(['17:00', '23:00']), L = day(['17:00', '03:00']);
  put({
    id: 'osaka_ushi_zanmai_dotonbori', name: '犇三昧 道頓堀店 (Ushi Zanmai Dotonbori)', category: 'OMNI',
    lat: 34.668266, lng: 135.503867, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: marinades and sauces; bibimbap noodles.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a yakiniku and offal restaurant.',
    hours_raw: 'Tue, Fri–Sun and holidays 17:00–23:00 (food L.O. 22:00); Wed–Thu 17:00–3:00 am (L.O. 2:30); closed Monday (Tabelog). Cards, e-money and QR accepted (Tabelog).',
    hours: { 1: E, 2: L, 3: L, 4: E, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sennichimae 1-7-23, a narrow alley off the Sennichimae shopping street — 2 min from Namba Stn',
    cuisine: 'Alley yakiniku on shichirin grills · outside skirt, a standout · garlic-salt tongue and salted tongue · kuroge wagyu · assorted meat platter · kimchi · egg soup ¥440 · bibimbap noodles ¥980 · counter and a back table',
    website: null, gmaps: gm('犇三昧 道頓堀店'), menu_url: null,
    notes: "[Yakiniku · a smoky alley yakiniku off Sennichimae] A small yakiniku restaurant down a narrow alley off the Sennichimae shopping street, open since 2020, whose red lanterns make it look like an izakaya. Meat is grilled on shichirin at the counter or a back table. The outside skirt is the star: one diner rated it above a famous chain's, and another ordered seconds. Also order the garlic-salt tongue, salted tongue, an assorted platter of kuroge wagyu cuts, and kimchi, then finish with piping-hot egg soup (¥440) or bibimbap noodles (¥980). Staff explain the cuts. The aisle is narrow and the room smoky, which is part of the charm. Open until 3 am on Wednesdays and Thursdays; closed Mondays. The newest review is from September 2025.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 August 2020 (Tabelog)', background: 'Yakiniku restaurant (Tabelog, staff-maintained).', philosophy: null, specialty: 'Outside skirt; tongue.',
      anecdotes: [
        { text: '"I ordered the garlic salt grilled tongue, outside skirt, salted tongue (regular), egg soup (JPY 440), and bibimbap noodles (JPY 980)… The outside skirt was so good that I had to order more." — November 2024.', source: R + 'B494826500/' },
        { text: '"The best outside skirt I\'ve ever had… enjoying it in a small, smoky restaurant was the best experience. The seasoning was spot on." — November 2024.', source: R + 'B519141025/' },
      ],
      japanese_sources_summary: '食べログ(店舗会員): 犇三昧 道頓堀店、大阪市中央区千日前1-7-23、なんば駅から徒歩2分、火・金・土・日・祝17:00〜23:00(料理L.O.22:00、ドリンクL.O.22:30)、水・木17:00〜翌3:00(L.O.2:30)、月曜休み、カード・電子マネー・QR可、2020年8月1日開店。口コミ(2023年11月〜2025年9月): 千日前商店街から入った細い路地、赤ちょうちんで居酒屋に見える、カウンターとテーブル、予約して夕食、にんにく塩タン、ハラミ、塩タン、玉子スープ440円、ビビン麺980円、ハラミをおかわり、黒毛和牛と魚介、スタッフが食材を説明、七輪で焼く、盛り合わせ、奥のテーブルを予約、通路が狭い、肉とキムチ、人生で一番のハラミ、小さく煙たい店、味付けが絶妙、実は有名店。',
      confidence: 'medium', sources: [TB, R + 'B494826500/', R + 'B519141025/', R + 'B474271695/', R + 'B498337629/', R + 'B511030536/', R + 'B512950022/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small alley yakiniku; staff explain the cuts (2024).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区千日前1-7-23',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained) with current hours; newest review September 2025.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区千日前一丁目7番23号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B494826500/', R + 'B519141025/'],
    price_note: 'Prices from a November 2024 review; check current prices.', last_checked: TODAY, items: [
      it('', '', 'Outside skirt', '', 'Grill', 'ask', 'no', 'November 2024.', 'harami'),
      it('', '', 'Garlic-salt tongue', '', 'Grill', 'ask', 'no', 'November 2024.', 'ninniku_shio_tan'),
      it('', '', 'Egg soup', '¥440', 'Sides', 'ask', 'no', 'November 2024.', 'tamago_soup'),
      it('', '', 'Bibimbap noodles', '¥980', 'Noodles', 'no', 'no', 'November 2024.', 'bibin_men'),
    ] }, {
    cuisine: '七輪で焼く路地の焼肉・名物のハラミ・にんにく塩タンと塩タン・黒毛和牛・盛り合わせ・キムチ・玉子スープ440円・ビビン麺980円・カウンターと奥のテーブル',
    neighborhood: '中央区千日前1-7-23、千日前商店街から入った細い路地。なんば駅から徒歩2分',
    gf_detail: '実際にはグルテンフリーではありません。たれや漬けだれ、ビビン麺。',
    vegan_detail: 'ヴィーガンではありません。焼肉とホルモンの店。',
    notes: '[焼肉・千日前の路地の煙たい焼肉] 千日前商店街から細い路地を入った小さな焼肉店で、2020年開店、赤ちょうちんで一見居酒屋のよう。カウンターか奥のテーブルで七輪で焼く。主役はハラミで、有名チェーンより上と評した人も、おかわりした人も。にんにく塩タン、塩タン、黒毛和牛の盛り合わせ、キムチも頼んで、締めは熱々の玉子スープ(440円)かビビン麺(980円)。スタッフが部位を説明してくれる。通路は狭く店内は煙たいが、それも味わい。水・木は深夜3時まで、月曜定休。最新の口コミは2025年9月です。',
  });
}

save();
