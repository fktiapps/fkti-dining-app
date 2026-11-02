// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first — worker osw2, batch 20 (lane: Tabelog id mod 4 = 1).
//   + TORICO MEAT 難波店 (wagyu-and-pizza Italian meat bar by Nankai Namba; all-you-can-eat and drink from ¥3,500)
//   + キャベツ焼 難波店 Cabbage Yaki Namba (standing street stall by Nankai Namba: ¥200 cabbage yaki, open 10:00–01:00, cash only)
//   This batch closes the notable queue for this lane; core and rest candidates follow in later batches.
//   Skipped (lane order):
//   - そばよし 本店 27003345 — chain (5+): the official shop list names 元町本店, 上本町店, 心斎橋店, 本町店, 西中島店 and a 近鉄百貨店
//     阿倍野店 counter (sobayoshi.com/shop, read 2026-11-02); the flagship counts as the chain.
//   - 新福菜館 天王寺ミオ店 27129365 — branch of a chain in data: 新福菜館 本店 is in data/kyoto.json (kyr_shinpuku_saikan_honten).
//   - 旬和席 うおまん なんばパークス店 27010685 — chain: the operator's brand page links ten うおまん shops (abeno, amagasaki,
//     apahotel-namba, kyoto, nakanoshima, namba, nishiumeda, tokyo, uehommachi, yodoyabashi; cfs-japan.com, read 2026-11-02).
//   - 千房 千日前本店 27002621 — chain: the operator's site has a 店舗一覧, several 千房 brands (千房, 千房エレガンス, ぷれじでんと千房) and
//     franchised (FC加盟店) shops (chibo.com, shop.chibo.com, read 2026-11-02); the flagship counts as the chain.
//   - 野乃鳥 なんば堂 27107677 — chain: 株式会社野乃鳥 lists 12 shops in Osaka, Hyogo and Tokyo (nonotory.jp, read 2026-11-02).
//   - キリンシティプラス なんばCITY店 27005857 — chain: the shop list names about 28 キリンシティ shops from Tohoku to Kansai
//     (kirincity.co.jp/shop, read 2026-11-02).
//   - 寿し炉端 喜多郎寿し 道具屋筋横丁店 27140201 — chain: the official site lists over a dozen shops in Osaka, Okinawa and Thailand
//     (kitarou.jp, read 2026-11-02).
//   - 古潭 アベ地下店 27002785 — branch of a chain in data (osaka_kotan_namba_walk, osaka_ramen_kotan_namba_city).
//   - 三田製麺所 阿倍野店 27073081 — branch of a chain in data (osaka_mita_seimenjo_namba, osaka_mita_seimenjo_namba_city).
//   - オリジナルパンケーキハウス なんばパークス店 27097285 — chain: the store list covers Tokyo, Osaka, Fukuoka and Kumamoto
//     (pancake-house.jp, read 2026-11-02).
//   - 大衆酒場 ひとめぼれ 裏難波店 27135873 — chain: HotPepper and Gnavi list 梅田, 京橋, 京都河原町, 名古屋 栄 and 栄2号店, 名駅3丁目 and
//     静岡 shops (hotpepper.jp/gstr02390/SA23/Y300/, hotpepper.jp/gstr02390/SA33/, r.gnavi.co.jp/j7hshhp30000/,
//     r.gnavi.co.jp/gjh12k730000); per the coordinator's batch-20 review.
//   Chain check of the two kept:
//   - TORICO MEAT: search results (not opened) name 梅田 and 京橋 shops as well; none in data. Small group: kept; flagged.
//   - Cabbage Yaki: the キャベ焼 group's shop guide lists four shops (難波, 鶴橋, ららぽーと甲子園, 大阪ドームシティ;
//     kyabetuyaki.com/shopguide); none in data. Small group: kept; flagged.
//   None is in data/osaka.json (grep by name, romaji and address, 2026-11-02). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw2-20');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27003345', 'Chain: そばよし has six shops (元町本店, 上本町, 心斎橋, 本町, 西中島, 近鉄阿倍野; sobayoshi.com/shop).');
skip('27129365', 'Chain in data: 新福菜館 is in data as kyr_shinpuku_saikan_honten.');
skip('27010685', 'Chain: うおまん has ten shops (cfs-japan.com brand page).');
skip('27002621', 'Chain: 千房 runs several brands and franchised shops (chibo.com; shop.chibo.com).');
skip('27107677', 'Chain: 野乃鳥 has 12 shops (nonotory.jp).');
skip('27005857', 'Chain: キリンシティ has about 28 shops (kirincity.co.jp/shop).');
skip('27140201', 'Chain: 喜多郎寿し has over a dozen shops in Osaka, Okinawa and Thailand (kitarou.jp).');
skip('27002785', 'Chain in data: 古潭 (osaka_kotan_namba_walk, osaka_ramen_kotan_namba_city).');
skip('27073081', 'Chain in data: 三田製麺所 (osaka_mita_seimenjo_namba, osaka_mita_seimenjo_namba_city).');
skip('27097285', 'Chain: オリジナルパンケーキハウス has shops in Tokyo, Osaka, Fukuoka and Kumamoto (pancake-house.jp).');
skip('27135873', 'Chain: 大衆酒場 ひとめぼれ has shops in 梅田, 京橋, 京都河原町, 名古屋 栄 and 栄2号店, 名駅3丁目 and 静岡 besides this one (hotpepper.jp/gstr02390/SA23/Y300/, hotpepper.jp/gstr02390/SA33/, r.gnavi.co.jp/j7hshhp30000/, r.gnavi.co.jp/gjh12k730000).');

// ================================================================ TORICO MEAT 難波店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27144069/'; const R = TB + 'dtlrvwlst/'; const M = TB + 'dtlmenu/';
  const H = day(['12:00', '23:30']);
  put({
    id: 'osaka_torico_meat_namba', name: 'TORICO MEAT 難波店 (TORICO MEAT Nanba ten)', category: 'OMNI',
    lat: 34.665588, lng: 135.502197, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: an all-you-can-eat Italian meat bar built on pizza, pasta, focaccia and fried dishes alongside the steaks (Tabelog menu; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wagyu and pizza meat bar; no vegan options are described.',
    hours_raw: 'Daily 12:00–23:30 (last food order 22:30, drinks 23:00); closed New Year\'s Day (Tabelog). Reservations taken; popular at weekends, with a weekend surcharge (September 2026 review). ¥400 charge per person (Tabelog). Cards (VISA, Master, JCB, AMEX) and PayPay; no e-money. 50 seats; private hire for 4–50 by phone (Tabelog). Third floor up outdoor stairs, no lift (2026 reviews). Orders by smartphone; the next order opens only when the last arrives (2026 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba 3-1-23, N2 PLACE 3F — 2 min from Nankai Namba; 5 min from Namba Stns',
    cuisine: 'Italian meat bar with black wagyu and house pizza: all-you-can-eat-and-drink courses (Gold, Black and wagyu-tasting courses about ¥3,500–4,500; reviews; Tabelog) with strip-loin and outside-skirt steak, roast beef, beef-tongue roast, pizza, pasta, ajillo, burrata with seasonal fruit, truffle fries, focaccia (Tabelog menu, November 2026) · wine cocktails; birthday dessert plates with chocolate art',
    website: TB, gmaps: gm('TORICO MEAT 難波'), menu_url: M,
    notes: "[Italian · Namba, wagyu-and-pizza all-you-can-eat] A dim third-floor meat bar up outdoor stairs by Nankai Namba, opened in September 2024, popular for girls' nights and birthdays, where all-you-can-eat-and-drink courses bring wagyu steaks, roast beef, pizza and pasta to order by phone. Diners in 2026 like the value, the strip-loin steak and the decorated birthday plates; others found the time limit short, the drinks watery, the pasta and pizza tough or the staff stiff. Order one round at a time: the next opens only when the last arrives.",
    chef_bio: { chef_name: null, roles: ['Staff unnamed (Tabelog)'], origin: null, background: 'Per Tabelog, the house serves carefully selected Japanese black wagyu at an affordable price with Italian dishes of domestic wagyu and seasonal produce, and a buffet of creative dishes; opened 5 September 2024.', philosophy: null, specialty: 'Wagyu steak and pizza all-you-can-eat.',
      anecdotes: [
        { text: '"I was truly surprised by how popular this place is among women!" — August 2026, girls\' night out.', source: R + 'B519362059/' },
        { text: '"While it was a luxurious all-you-can-eat experience, I was disappointed by the short time limit that didn’t allow for a leisurely meal." — September 2026.', source: R + 'B537115077/' },
        { text: '"I ordered the Black Course, and the strip loin steak served first was the most delicious dish." — October 2026.', source: R + 'B537749371/' },
      ],
      japanese_sources_summary: '日本語の情報源は未確認。食べログ (英語版): TORICO MEAT 難波店、難波3-1-23 N2 PLACE 3F、南海なんば駅から徒歩2分、2024年9月5日オープン、毎日12:00〜23:30、元日休み、チャージ1人400円、50席、4〜50名の貸切は電話で、黒毛和牛のステーキと自家製ピザのイタリアン肉バル、食べ飲み放題3,500円〜。メニュー (2026年11月): 生ハム、チーズ、ブッラータと季節の果物、自家製ローストビーフ、トリュフ塩のポテト、フォカッチャ、ガーリックシュリンプ、アヒージョ、マルゲリータ、クアトロ・フォルマッジ、ビスマルク。口コミ (2026年7月〜10月): 女子会に人気、誕生日のチョコアートのプレート、ゴールドの食べ飲み放題4,500円、ブラックコースのサーロイン、外階段で3階 (エレベーターなし)、スマホで注文、前の皿が届くまで次を注文できない、週末は追加料金、制限時間が短い・飲み物が薄い・ピザとパスタが硬い・スタッフが硬いという声も。',
      confidence: 'medium', sources: [TB, M, R + 'B519362059/', R + 'B534264179/', R + 'B534555178/', R + 'B536892060/', R + 'B537010119/', R + 'B537115077/', R + 'B537168357/', R + 'B537544760/', R + 'B537749371/', R + 'B538095576/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Orders by smartphone (2026 reviews). No English menu or English-speaking staff found in the sources.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波3-1-23 N2 PLACE 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with a November 2026 menu; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波三丁目1番23号 (go) 5m. Nearest record (osaka_bettei_takei_edion_namba, "…難波3-2-18") is about 32 m away, so the pin stays precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [M, TB, R + 'B536892060/'],
    price_note: 'Tabelog menu last updated November 2026, tax included; ¥400 charge per person; weekend surcharge. All-you-can-eat-and-drink courses about ¥3,500–4,500 (2026 reviews; Tabelog). Diners report ¥3,000–7,999 a head.', last_checked: TODAY, items: [
      it('', '', 'Gold all-you-can-eat with all-you-can-drink', '¥4,500', 'Courses', 'no', 'no', 'September 2026 review.', 'gold_course'),
      it('', '', 'Pizza Margherita', '¥1,000', 'Pizza', 'no', 'no', '', 'margherita'),
      it('', '', 'Burrata with seasonal fruit', '¥1,300', 'Appetizers', 'ask', 'no', '', 'burrata'),
      it('', '', 'Homemade roast beef', '¥900', 'Appetizers', 'ask', 'no', '', 'roast_beef'),
    ] }, {
    cuisine: '黒毛和牛と自家製ピザのイタリアン肉バル: 食べ飲み放題のコース (ゴールド、ブラック、和牛食べ比べなど約3,500〜4,500円、口コミ、食べログ) でサーロインやハラミのステーキ、ローストビーフ、牛タン、ピザ、パスタ、アヒージョ、ブッラータと季節の果物、トリュフ塩のポテト、フォカッチャ (食べログのメニュー、2026年11月)・ワインカクテル、チョコアートの誕生日プレート',
    neighborhood: '難波3-1-23 N2 PLACE 3F。南海なんば駅から徒歩2分、各線なんば駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。ステーキのほか、ピザ、パスタ、フォカッチャ、揚げ物が中心の食べ放題の肉バル (食べログのメニュー、口コミ)。',
    vegan_detail: 'ヴィーガンではありません。和牛とピザの肉バルで、ヴィーガンの選択肢の説明はない。',
    notes: '[イタリアン・難波、和牛とピザの食べ放題] 南海なんば駅近く、外階段を上がった3階の薄暗い肉バルで、2024年9月オープン。女子会や誕生日に人気で、食べ飲み放題のコースで和牛のステーキ、ローストビーフ、ピザ、パスタをスマホで注文する。2026年の客はお得さ、サーロイン、飾った誕生日プレートを褒める。一方、制限時間が短い、飲み物が薄い、パスタとピザが硬い、スタッフが硬いという声も。注文は前の皿が届いてから次へ。',
  });
}

// ================================================================ キャベツ焼 難波店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27007921/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.kyabetuyaki.com/shopguide';
  const H = day(['10:00', '01:00']);
  put({
    id: 'osaka_cabbage_yaki_namba', name: 'キャベツ焼 難波店 (Cabbage Yaki Nanba ten)', category: 'OMNI',
    lat: 34.663086, lng: 135.500793, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: cabbage yaki is a thin wheat-batter pancake of cabbage, egg, green onion and sauce; takosen and okonomiyaki are on the menu too (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: each cabbage yaki is finished with an egg (reviews); batter and sauce are not described.',
    hours_raw: 'Daily 10:00–01:00 (official shop guide; Tabelog); hours may change. No reservations. Cash only: no cards, e-money or QR (Tabelog). A standing stall; eat at the counter or take away (reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Nambanaka 1-18-18 (Naniwa-ku), across from the Swissotel and Nankai headquarters — 1 min from Nankai Namba',
    cuisine: 'Osaka street snack: cabbage yaki — a thin round of batter with hand-chopped steamed cabbage, green onion, an egg cracked on top and sauce — ¥200; takosen ¥300; okonomiyaki ¥400; each shop has its own toppings (official site; 2026 reviews)',
    website: SITE, gmaps: gm('キャベツ焼 難波店'), menu_url: SITE,
    notes: "[Okonomiyaki · Nambanaka, ¥200 cabbage yaki street stall] A tiny standing stall across from the Swissotel by Nankai Namba, open from 10 AM to 1 AM, selling cabbage yaki — a thin, egg-topped cabbage pancake — for ¥200, still the price in 2026, plus takosen and a ¥400 okonomiyaki. Diners call it Osaka soul food for a snack or after drinks; one saw about twenty children eating there, another praises the hand-chopped cabbage. Cash only; eat on the spot or take away.",
    chef_bio: { chef_name: null, roles: ['Staff unnamed; a shop of the キャベ焼 group (official site)'], origin: null, background: 'Per the official site, the キャベ焼 group (president 山本昌美) has four shops: 難波, 鶴橋, ららぽーと甲子園 and 大阪ドームシティ, each with its own menu and toppings; the Namba shop opens 10:00–1:00. An October 2026 diner notes the cabbage is chopped by hand, adjusted to the day\'s cabbage.', philosophy: null, specialty: '¥200 cabbage yaki.',
      anecdotes: [
        { text: '"Amid rising prices, the JPY 200 Cabbage Yaki is a delightful snack for the everyday person." — June 2026.', source: R + 'B517675200/' },
        { text: '"I realized it truly is soul food when I saw about 20 kids enjoying it!" — May 2026.', source: R + 'B528955480/' },
        { text: '"At just JPY 200, it was an incredibly reasonable price, and the taste was quite good." — November 2026, third visit.', source: R + 'B526746918/' },
      ],
      japanese_sources_summary: 'キャベ焼グループ公式サイト: 社長 山本昌美、店舗案内は難波店 (浪速区難波中1-18-18、10:00〜1:00)、鶴橋店、ららぽーと甲子園店、大阪ドームシティ店、店ごとにオリジナルのメニューとトッピング、2020年4月7日に近大前店オープンのお知らせ。食べログ (英語版): キャベツ焼 難波店、南海なんば駅から徒歩1分、スイスホテルと南海本社の向かい、毎日10:00〜1:00、予約不可、カード・電子マネー・QR不可、テイクアウト。口コミ (2026年3月〜11月): キャベツ焼200円、たこせん300円、お好み焼き400円、卵をのせて仕上げる、キャベツは手切り、立ち食い、子ども20人ほどが食べていた、大阪のソウルフード。',
      confidence: 'medium', sources: [TB, SITE, 'https://www.kyabetuyaki.com/', R + 'B517675200/', R + 'B526746918/', R + 'B528955480/', R + 'B530005494/', R + 'B532971788/', R + 'B533334420/', R + 'B535213801/', R + 'B535618820/', R + 'B537461366/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A standing stall; point and pay cash. No English menu or English-speaking staff found in the sources.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区難波中1-18-18',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official shop guide and Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区難波中一丁目18番18号 (go) 3m. Nearest record (osaka_chuka_soba_nanba_ro, "…難波中1-18-14") is about 35 m away, so the pin stays precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B517675200/', R + 'B532971788/', R + 'B535213801/'],
    price_note: 'No Tabelog menu; prices from 2026 reviews. Cash only. Diners report under ¥1,000.', last_checked: TODAY, items: [
      it('キャベツ焼', '', 'Cabbage yaki (batter, cabbage, green onion, egg, sauce)', '¥200', 'Snacks', 'no', 'no', '2026 reviews.', 'cabbage_yaki'),
      it('', '', 'Takosen', '¥300', 'Snacks', 'no', 'no', 'August 2026.', 'takosen'),
      it('', '', 'Okonomiyaki', '¥400', 'Snacks', 'no', 'no', 'September 2026.', 'okonomiyaki'),
    ] }, {
    cuisine: '大阪の屋台のおやつ: キャベツ焼 (薄い生地に手切りのキャベツ、青ねぎ、卵、ソース) 200円、たこせん300円、お好み焼き400円、店ごとにオリジナルのトッピング (公式サイト、2026年の口コミ)',
    neighborhood: '浪速区難波中1-18-18、スイスホテルと南海本社の向かい。南海なんば駅から徒歩1分',
    gf_detail: 'グルテンフリーではありません。キャベツ焼は小麦の薄い生地にキャベツ、卵、青ねぎ、ソース。たこせんやお好み焼きもある (口コミ)。',
    vegan_detail: 'ヴィーガンではありません。キャベツ焼は卵で仕上げる (口コミ)。生地とソースの説明はない。',
    notes: '[お好み焼き・難波中、200円のキャベツ焼の屋台] 南海なんば駅近く、スイスホテルの向かいの小さな立ち食いの店で、朝10時から夜1時まで。卵をのせた薄いキャベツのお好み焼き、キャベツ焼が2026年も200円で、たこせんや400円のお好み焼きも。おやつにも飲んだ後にも大阪のソウルフードと言われ、子ども20人ほどが食べていたという客や、手切りのキャベツを褒める客も。現金のみ、その場でもテイクアウトでも。',
  });
}

save();
