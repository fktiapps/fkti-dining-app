// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first — lane osw3 (Tabelog id mod 4 = 2), batch 16.
//   + お好み焼 とんべえ (Tonbee: okonomiyaki since 1976 by Hozenji, staff cook at the table; cash only)
//   + 玄米カフェ 実身美 心斎橋店 (Genmai Cafe Sanmi: brown-rice healthy set meals with koji dressings)
//   + エンプレスルーム (Empress Room: Cantonese and cart dim sum on the 10th floor of Swissotel Nankai Osaka)
//   + LA FINESTRA (Shinmachi Italian: homemade pasta, charcoal-grilled game)
//   Lane: the first four ids with id mod 4 = 2 in `queue.mjs osaka next notable 80` (2026-11-02, after batch 15):
//   27001626, 27083950, 27002606, 27108042 (last two digits 26, 50, 06, 42: each = 2 mod 4).
//   None is in data/osaka.json (grep by Tabelog id, name, romaji and address).
//   Group checks (working line: 2–4 same-concept shops with none in data = small group, 5+ = chain).
//   Sanmi: the official site lists four shops (Abeno, Kyobashi, Shinsaibashi, Otemachi in Tokyo), none in data — small
//   group, drafted. Tonbee, Empress Room and LA FINESTRA: single shops.
//   Latin-in-JA for proper names only (brief, 2026-11-02); generic dish words in ordinary Japanese.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw3-16');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ とんべえ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27001626/'; const R = TB + 'dtlrvwlst/'; const SITE = 'http://www.tombe.co.jp/';
  const H = day(['11:00', '15:45'], ['17:00', '21:45']);
  put({
    id: 'osaka_tonbee_namba', name: 'お好み焼 とんべえ (Tonbee)', category: 'OMNI',
    lat: 34.66808, lng: 135.501516, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: okonomiyaki, modern-yaki, pechan-yaki and yakisoba are wheat batter or wheat noodles, cooked on the table griddle.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the batter is made with a dashi simmered for over ten hours (Tabelog), and the okonomiyaki carry pork, octopus or beef tendon.',
    hours_raw: 'Daily except Thursday 11:00–15:45 (last order 15:00) and 17:00–21:45 (last order 21:00); open on holidays; closed Thursdays and 31 December–2 January (Tabelog; official site). Live updates on X @Tombe1976 (official site). No reservations (Tabelog; official site). Cash only: no cards, e-money or QR (Tabelog; April 2026). 24 seats at tables for 4–6 with griddles, second floor; non-smoking; free Wi-Fi and outlets; children welcome; menus in Japanese, English, Chinese and Korean (Tabelog). Staff cook at your table (2026). Opened 1 November 1976 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Namba 1-6-16, 2F, west of Hozenji — 2 min from Ebisubashi (official site), 5 min from Namba Stn',
    cuisine: 'Standard Osaka okonomiyaki since 1976, from a batter made with a dashi simmered over ten hours, with house-made sauce and mayonnaise (Tabelog; official site) · okonomiyaki, modern-yaki (with noodles), pechan-yaki of Kujo negi, yakisoba and omusoba (official site) · butatama ¥924, takotama ¥980, pork modern ¥1,110 (April–September 2026); the popular Pork and Cheese Ball ¥1,056 (Tabelog); Tako-suji Pechan (August 2026); tonpei-yaki (September 2026) · sweet, regular and spicy sauces, mayonnaise, aonori and bonito flakes on the table; bonito flakes go on before grilling (2026) · lemon sour ¥440 (April 2026); sake and shochu (Tabelog)',
    website: SITE, gmaps: gm('お好み焼 とんべえ 難波'), menu_url: null,
    notes: "[Okonomiyaki · Namba, a 1976 okonomiyaki house by Hozenji] A second-floor okonomiyaki restaurant west of Hozenji, open since 1976 and still making the standard Osaka style: a batter built on a dashi simmered for over ten hours, house sauce and mayonnaise, and staff who cook it at your table. Try the butatama, a pork modern-yaki or a Kujo negi pechan-yaki, and the yakisoba. It is a quieter alternative to the queues at bigger names nearby, with menus in four languages. Diners in 2026 found it reliable and good value; a few found the pieces small or a little burnt, and one regular found communication with the staff, mostly from overseas, hard at times. No reservations, cash only; closed Thursdays.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed); operated by Tombe Corporation (official site)'], origin: null,
      background: 'Per the official site: since founding in 1976 (Showa 51) the shop has kept to a standard Osaka taste; its pride is a batter made with a secret soup. Per Tabelog: opened 1 November 1976; the batter uses a dashi simmered for over ten hours with several seasonings; the sauce and mayonnaise are made in-house. A 2026 diner notes it is about to mark 50 years.',
      philosophy: 'A standard Osaka taste, kept since 1976 (official site).', specialty: 'Okonomiyaki in a dashi batter; pechan-yaki.',
      anecdotes: [
        { text: '"On the table, there are three types of homemade sauces: sweet, regular, and spicy, along with homemade mayonnaise." — April 2026, butatama ¥924.', source: R + 'B525643021/' },
        { text: '"It was my first time experiencing the style of adding bonito flakes before grilling, and it was very delicious and satisfying." — July 2026.', source: R + 'B532104141/' },
        { text: '"There were times when communication was a bit challenging." — September 2026, a returning fan of the yakisoba.', source: R + 'B535581377/' },
      ],
      japanese_sources_summary: '公式サイト (tombe.co.jp): お好み焼 とんべえ、大阪 難波、道頓堀の戎橋から徒歩2分、昭和51年 (1976) の創業から大阪らしいスタンダードな味、秘伝のスープで作るこだわりの生地、お好み焼き、モダン焼き、九条葱のネギ焼きのぺっちゃん焼、焼きそば、オムそば、難波1丁目6-16、予約は承っておりません、昼11:00〜15:45 (L.O.15:00)、夜17:00〜21:45 (L.O.21:00)、毎週木曜定休、X @Tombe1976 で最新の営業情報、Tombe Corporation。食べログ (店舗会員): 2F、24席、禁煙、無料Wi-Fi、電源、日・英・中・韓のメニュー、カード・電子マネー・QR不可、12月31日〜1月2日休み、1976年11月1日オープン、10時間以上煮込んだ出汁の生地、自家製ソースとマヨネーズ、人気の Pork and Cheese Ball 1,056円。口コミ(2026年2月〜9月): 店員が焼いてくれる、豚玉924円、たこ玉980円、豚モダン1,110円、卓上に甘口・普通・辛口のソースと自家製マヨ、焼く前に鰹節、現金のみ、海外出身のスタッフ、やや小さい、少し焦げたという声も。',
      confidence: 'medium', sources: [SITE, TB, R + 'B524986928/', R + 'B525643021/', R + 'B528697937/', R + 'B529224813/', R + 'B529696728/', R + 'B530061161/', R + 'B532104141/', R + 'B534235531/', R + 'B534245770/', R + 'B534420953/', R + 'B535581377/', R + 'B536408849/'] },
    cultural_comfort: { level: 'english', note: 'Menus in English, Chinese and Korean (Tabelog); staff cook at the table.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波1-6-16 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site live and the shop-maintained Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波一丁目6番16号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B525643021/', R + 'B534245770/', R + 'B536408849/', TB],
    price_note: 'Prices from April–September 2026 reviews (as reported) and Tabelog (read November 2026).', last_checked: TODAY, items: [
      it('豚玉', 'butatama', 'Pork okonomiyaki', '¥924', 'Okonomiyaki', 'no', 'no', 'April 2026.', 'butatama'),
      it('たこ玉', 'takotama', 'Octopus okonomiyaki', '¥980', 'Okonomiyaki', 'no', 'no', 'September 2026.', 'takotama'),
      it('豚モダン', 'buta modan', 'Pork modern-yaki (with noodles)', '¥1,110', 'Okonomiyaki', 'no', 'no', 'August 2026.', 'pork_modern'),
      it('', 'Pork and Cheese Ball', 'Pork and cheese okonomiyaki', '¥1,056', 'Okonomiyaki', 'no', 'no', 'Tabelog.', 'pork_cheese'),
      it('', '', 'Lemon sour', '¥440', 'Drinks', 'ask', 'ask', 'April 2026.', 'lemon_sour'),
    ] }, {
    cuisine: '1976年からの大阪のスタンダードなお好み焼きで、10時間以上煮込んだ出汁の生地、自家製のソースとマヨネーズ (食べログ、公式サイト)・お好み焼き、モダン焼き、九条葱のぺっちゃん焼、焼きそば、オムそば (公式サイト)・豚玉924円、たこ玉980円、豚モダン1,110円 (2026年4〜9月)、人気の Pork and Cheese Ball 1,056円 (食べログ)、Tako-suji Pechan (2026年8月)、とん平焼き (2026年9月)・卓上に甘口・普通・辛口のソース、マヨネーズ、青のり、鰹節。鰹節は焼く前にのせる (2026年)・レモンサワー440円 (2026年4月)、日本酒と焼酎 (食べログ)',
    neighborhood: '難波1-6-16 2F、Hozenji の西。戎橋から徒歩2分 (公式サイト)、Namba 駅から5分',
    gf_detail: 'グルテンフリーではありません。お好み焼き、モダン焼き、ぺっちゃん焼、焼きそばは小麦の生地や麺で、卓上の鉄板で焼く。',
    vegan_detail: 'ヴィーガンではありません。生地に10時間以上煮込んだ出汁を使い (食べログ)、豚、たこ、牛すじのお好み焼き。',
    notes: '[お好み焼き・難波、Hozenji そばの1976年からのお好み焼き] Hozenji の西、2階のお好み焼き店で、1976年から大阪のスタンダードな味を守る。10時間以上煮込んだ出汁の生地、自家製のソースとマヨネーズで、店員が席で焼いてくれる。豚玉、豚モダン、九条葱のぺっちゃん焼、焼きそばを。近くの有名店の行列を避けたいときの選択肢で、メニューは4か国語。2026年の口コミでは安定して手頃という声が多く、少し小さい、少し焦げたという声や、海外出身の多いスタッフと言葉が通じにくいことがあったという常連の声も。予約不可、現金のみ、木曜休み。',
  });
}

// ================================================================ 玄米カフェ 実身美 心斎橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27083950/'; const R = TB + 'dtlrvwlst/'; const SITE = 'https://sangmi.jp/shop/shinsaibashi/';
  const H = day(['11:00', '21:00']);
  put({
    id: 'osaka_genmai_cafe_sanmi_shinsaibashi', name: '玄米カフェ 実身美 心斎橋店 (Genmai Cafe Sanmi Shinsaibashi ten)', category: 'OMNI',
    lat: 34.674678, lng: 135.501937, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tabelog says allergy information is available. Brown rice, salads and many side dishes look plain, but the miso, soy-milk sauces, koji dressings and fried mains are not described for gluten.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options and some daily sides are vegetable dishes (such as a vegetable chili con carne with koya tofu on 2 November 2026), but the daily mains are meat or fish and bonito flakes appear on sides.',
    hours_raw: 'Mon–Sat 11:00–21:00: lunch 11:00–15:00 (last order 14:30), café 15:00–17:00, dinner 17:00–21:00 (last order 20:30); closed Sundays; closed 15:00–17:30 once a month for staff training (official site). Year-end closure (Tabelog). Reservations (Tabelog); walk-ins usually seated (2026). Larger rice free (October 2026); water self-service, room temperature or hot (August and October 2026); a raw egg on "Sanmi Day", dates with a 3 (July 2026). Cards, PayPay and Alipay; no e-money (Tabelog). 31 seats with a counter; non-smoking; free Wi-Fi and outlets; kids menu; strollers welcome; takeaway and delivery (Tabelog). Opened 2 March 2015 (Tabelog); the brand dates from 2002 (official site).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinsaibashisuji 1-2-22, 日宝サニーサイドプレイス 1F — 3 min from gate 2 of Shinsaibashi Stn (Midosuji Line)',
    cuisine: 'Healthy brown-rice set meals with koji "enzyme" dressings (official site; 2026 reviews) · the daily healthy meal: a main, three deli sides, brown rice and miso soup; on 2 November 2026: pork and chunky vegetables stewed in soy-milk ginger miso; vegetable chili con carne with Kyoto Fushimi peppers and koya tofu; satsuma mandarin and red radish pickles; makomodake nametake on chilled tofu (official site) · past mains: cold pork shabu with homemade sesame sauce, pork bossam, yangnyeom chicken, salmon, fried chicken (2025–2026) · brown-rice taco rice with soft egg and fresh salsa ¥1,880 (July 2026); brown-rice curry (July 2026) · salads with koji dressings such as purple cabbage or ginger (2025–2026); no white sugar (July 2026) · chai; parfaits, shaved ice such as honey plum, cheesecake (2026); a daily set with shaved ice ¥1,570 (August 2026) · dressings to buy (2026)',
    website: SITE, gmaps: gm('玄米カフェ 実身美 心斎橋'), menu_url: SITE,
    notes: "[Café · Shinsaibashi, brown-rice health set meals] A calm brown-rice café off Shinsaibashi-suji, one of four Sanmi shops (since 2002), serving a daily healthy set of a main, three deli sides, chewy brown rice and miso soup, with salads under its koji dressings; there is also brown-rice taco rice and curry, and parfaits or shaved ice in the afternoon café hours. No white sugar is used, a July 2026 diner notes, and rice can be upsized free. Diners in 2026 call it gentle and delicious; one found the portions small, another the water lukewarm (the self-service water is room temperature or hot, October 2026). Open Monday–Saturday to 21:00.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Per the official site: "Made by sangmi since 2002"; shops in Abeno, Kyobashi, Shinsaibashi and Otemachi (Tokyo); an online shop for its enzyme dressings; a daily-changing healthy menu posted each day. Opened 2 March 2015 (Tabelog).',
      philosophy: 'Healthy meals for the changing seasons (Tabelog).', specialty: 'Daily healthy set with brown rice; koji dressings.',
      anecdotes: [
        { text: '"The dressing on the salad was made with koji, and this time it was a daily special featuring purple cabbage dressing." — August 2026.', source: R + 'B534748182/' },
        { text: '"I was also pleased that I could get a large portion of rice at no extra charge, as I love brown rice." — October 2026, the daily healthy meal and cheesecake.', source: R + 'B537550788/' },
        { text: '"However, the water was lukewarm instead of cold, and I would prefer it to be chilled, especially since it\'s summer and hot outside." — August 2026.', source: R + 'B533761457/' },
      ],
      japanese_sources_summary: '公式サイト (sangmi.jp): 実身美 心斎橋、Made by sangmi since 2002、店舗はあべの・京橋・心斎橋・大手町、11月2日(月)の日替わり健康ごはん (メイン: 豚肉とごろっと野菜の豆乳生姜味噌煮、デリ3品: 京都産伏見トウガラシと高野豆腐のベジチリコンカン、温州みかんと紅大根のピクルス、鹿児島県産マコモダケのなめたけのせ奴っこ)、心斎橋筋1-2-22 日宝サニーサイドプレイス 1F、月〜土 11:00〜21:00 (ランチ11:00〜15:00 L.O.14:30、カフェ15:00〜17:00、ディナー17:00〜21:00 L.O.20:30)、月1回スタッフ勉強会で15:00〜17:30休業、日曜定休、御堂筋線心斎橋駅2番改札口から徒歩3分、酵素ドレッシング。食べログ (店舗会員): オーガニック、予約可、カード・PayPay・Alipay可、31席、禁煙、Wi-Fi、電源、野菜にこだわり、ヘルシーメニュー、アレルギー表示、ベジタリアンメニュー、キッズメニュー、テイクアウト・デリバリー、2015年3月2日オープン。口コミ(2026年4月〜10月): 日替わり健康ごはん、玄米と味噌汁、紫キャベツのドレッシング、タコライス1,880円、玄米カレー、白砂糖不使用、ご飯の大盛り無料、水は常温かお湯、量が少ない、水がぬるいという声も。',
      confidence: 'medium', sources: [SITE, TB, R + 'B495666407/', R + 'B502477310/', R + 'B532038161/', R + 'B533622458/', R + 'B533761457/', R + 'B534239102/', R + 'B534347141/', R + 'B534748182/', R + 'B536272753/', R + 'B537273818/', R + 'B537516963/', R + 'B537550788/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Alipay accepted (Tabelog). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋1-2-22 日宝サニーサイドプレイス 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site posting the menu for 2 November 2026, and the shop-maintained Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋一丁目2番22号 (go) 8m; same building as osaka_danke_shinsaibashi (2F, 1.1 m apart), so set 5 m north of it; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE, R + 'B536272753/', R + 'B534239102/'],
    price_note: 'Menu from the official site for 2 November 2026 (no prices given); prices from July–August 2026 reviews.', last_checked: TODAY, items: [
      it('日替わり健康ごはん', '', 'Daily healthy meal (main, three sides, brown rice, miso soup)', '', 'Set meals', 'ask', 'ask', 'Official site, 2 November 2026.', 'daily_set'),
      it('京都産伏見トウガラシと高野豆腐のベジチリコンカン', '', 'Vegetable chili con carne with Fushimi peppers and koya tofu (side)', '', 'Sides', 'ask', 'ask', 'Official site, 2 November 2026.', 'veg_chili'),
      it('', '', 'Brown-rice taco rice with soft egg and salsa', '¥1,880', 'Rice', 'ask', 'no', 'July 2026.', 'taco_rice'),
      it('', '', 'Daily set with shaved ice', '¥1,570', 'Set meals', 'ask', 'ask', 'August 2026.', 'set_kakigori'),
    ] }, {
    cuisine: '玄米の健康定食と麹の「酵素」ドレッシング (公式サイト、2026年の口コミ)・日替わり健康ごはんはメイン、デリ3品、玄米、味噌汁。2026年11月2日は豚肉とごろっと野菜の豆乳生姜味噌煮、京都産伏見トウガラシと高野豆腐のベジチリコンカン、温州みかんと紅大根のピクルス、鹿児島県産マコモダケのなめたけのせ奴っこ (公式サイト)・これまでのメイン: 豚ロースの冷しゃぶと自家製ごまだれ、ポッサム、ヤンニョムチキン、サーモン、唐揚げ (2025〜2026年)・半熟卵とフレッシュサルサの玄米タコライス1,880円 (2026年7月)、玄米カレー (2026年7月)・紫キャベツやしょうがの麹ドレッシングのサラダ (2025〜2026年)、白砂糖不使用 (2026年7月)・チャイ、パフェ、はちみつ梅などのかき氷、チーズケーキ (2026年)、かき氷つきの日替わり1,570円 (2026年8月)・ドレッシングの販売 (2026年)',
    neighborhood: '心斎橋筋1-2-22 日宝サニーサイドプレイス 1F。御堂筋線心斎橋駅2番改札口から徒歩3分 (公式サイト)',
    gf_detail: '要確認。食べログによるとアレルギー表示あり。玄米、サラダ、多くの副菜はシンプルに見えるが、味噌、豆乳のソース、麹ドレッシング、揚げ物のグルテンは書かれていない。',
    vegan_detail: '要確認。食べログにベジタリアンメニューがあり、日替わりの副菜には野菜料理もある (2026年11月2日の高野豆腐のベジチリコンカンなど) が、メインは肉か魚で、副菜に鰹節を使うことも。',
    notes: '[カフェ・心斎橋、玄米の健康定食] 心斎橋筋近くの落ち着いた玄米カフェで、2002年からの実身美の4店のひとつ。日替わり健康ごはんはメイン、デリ3品、もちもちの玄米、味噌汁で、サラダには麹のドレッシング。玄米のタコライスやカレー、午後のカフェタイムにはパフェやかき氷も。2026年7月の口コミでは白砂糖不使用、ご飯の大盛りは無料。2026年の口コミではやさしくおいしいという声が多く、量が少ない、水がぬるいという声も (セルフの水は常温かお湯、2026年10月)。月〜土の21時まで。',
  });
}

// ================================================================ エンプレスルーム
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27002606/'; const R = TB + 'dtlrvwlst/';
  const MTH = day(['11:30', '15:00'], ['17:30', '21:00']); const FR = day(['11:30', '15:00'], ['17:30', '21:30']);
  const SA = day(['11:00', '15:00'], ['17:30', '21:30']); const SU = day(['11:00', '15:00'], ['17:30', '21:00']);
  put({
    id: 'osaka_empress_room_swissotel', name: 'エンプレスルーム (Empress Room)', category: 'OMNI',
    lat: 34.664185, lng: 135.501147, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Dim sum wrappers, spring rolls and noodles are wheat-based, and Cantonese sauces usually use soy or oyster sauce; steamed fish and herbal soups are where to ask.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Cantonese dim sum and dishes of shrimp, pork, chicken, beef and seafood.',
    hours_raw: 'Lunch 11:30–15:00 on weekdays, 11:00–15:00 at weekends and holidays (last order 14:30); dinner 17:30–21:00 Sun–Thu and holidays (last order 20:30), 17:30–21:30 Fri–Sat (last order 21:00); open all year (Tabelog). A 13% service charge is added to the tax-inclusive prices (Tabelog). Yum cha lunch with dim sum carts, all you can eat: ¥5,800 weekdays, ¥6,500 weekends and holidays, ¥6,800 on 21–31 December (Tabelog). Booking through the official hotel site adds a welcome drink (September 2026). Reservations; private rooms (Tabelog; August–October 2026). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), IC cards, Rakuten Edy, nanaco, WAON, iD, QUICPay and QR including Alipay and WeChat Pay (Tabelog).',
    hours: { 0: MTH, 1: MTH, 2: MTH, 3: MTH, 4: FR, 5: SA, 6: SU }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba 5-1-60, スイスホテル南海大阪 10F — directly connected to Nankai Namba Stn by a dedicated escalator from the third-floor gate',
    cuisine: 'Creative Cantonese cuisine joining traditional technique and herbal ingredients (Tabelog) · yum cha lunch, all you can eat, with dim sum carts going round the tables: steamed shrimp dumplings, xiaolongbao, shumai, pork with black bean sauce, clam dumplings, boiled dumplings, buns shaped like pigs and penguins; soup, salad and fried dishes first; seaweed seafood rolls; shrimp-miso kara-age; dan dan noodles; fried rice; spring rolls; desserts (Tabelog; August–October 2026) · dinner courses in private rooms: assorted appetizers, crab and kinugasa mushroom soup, abalone and chicken herbal soup, Hong Kong-style steamed sea bream, spare ribs with a coffee sauce, black-pepper beef, seafood noodles with thick sauce, pumpkin pudding and coconut dumplings (September–October 2026) · a limited summer cold noodle with a whole lobster, about ¥4,500 (August 2026); scallop congee (August 2026) · Chinese tea with the yum cha (2026)',
    website: null, gmaps: gm('エンプレスルーム スイスホテル南海大阪'), menu_url: null,
    notes: "[Cantonese · Swissotel Nankai, cart dim sum above Namba Station] The Cantonese restaurant on the 10th floor of Swissotel Nankai Osaka, right above Nankai Namba Station, led by a chef the shop says has won awards in Singapore and specializes in medicinal cooking. Lunch is an all-you-can-eat yum cha where dim sum carts circle the room (¥5,800 weekdays, ¥6,500 weekends, plus 13% service), with shrimp dumplings, xiaolongbao and buns shaped like pigs and penguins; dinner brings courses with herbal soups and steamed fish in private rooms. A 39-visit regular and others love the dim sum; several 2026 diners found it ordinary or over-filling for the price. Open daily for lunch and dinner.",
    chef_bio: { chef_name: 'Leo', roles: ['Chef'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: the chef, Leo, has won numerous awards in Singapore and specializes in medicinal cuisine, combining fine ingredients with herbal medicine; the restaurant serves authentic Cantonese cuisine blending traditional techniques with new ones, and calls itself the only restaurant in Osaka with a dim sum cart. 2026 reviews describe attentive international staff.',
      philosophy: 'Tradition meeting innovation in Cantonese cuisine (Tabelog).', specialty: 'Cart dim sum; herbal soups.',
      anecdotes: [
        { text: '"I had dim sum over there, but... Empress Room is amazing!!" — October 2026, a 39th visit, after a family member\'s school trip to Taiwan.', source: R + 'B313591368/' },
        { text: '"The pork spare ribs were paired with a coffee sauce, showcasing a creative twist on traditional dishes." — October 2026, a private-room course.', source: R + 'B537847917/' },
        { text: '"The taste was quite ordinary, nothing particularly delicious." — September 2026, the dim sum lunch.', source: R + 'B536429744/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): エンプレスルーム、中華料理・ダイニングバー・飲茶・点心、難波5-1-60 スイスホテル南海大阪 10F、Nankai Namba 駅3階改札から専用エスカレーターで直結、月〜木 11:30〜15:00・17:30〜21:00、金 11:30〜15:00・17:30〜21:30、土 11:00〜15:00・17:30〜21:30、日祝 11:00〜15:00・17:30〜21:00、年中無休、税込料金にサービス料13%、ワゴンで回る点心の飲茶ランチ食べ放題 (平日5,800円、土日祝6,500円、12月21〜31日6,800円)、大阪で唯一の点心ワゴン、シンガポールで数々の賞を受けた Leo シェフ、薬膳、伝統と革新の広東料理、個室、カード・電子マネー・QR可。口コミ(2026年8月〜10月): エビ蒸し餃子、小籠包、豚の豆豉蒸し、ブタやペンギンの饅頭、ロブスターの冷麺約4,500円、ホタテ粥、個室のコース (アワビと鶏の薬膳スープ、香港式の鯛の蒸し物、コーヒーソースのスペアリブ)、海外出身のスタッフの接客、味は普通、量が多いという声も。',
      confidence: 'medium', sources: [TB, R + 'B313591368/', R + 'B493035328/', R + 'B501572926/', R + 'B533737036/', R + 'B535068771/', R + 'B535214818/', R + 'B535846944/', R + 'B536086369/', R + 'B536429744/', R + 'B536483408/', R + 'B536958937/', R + 'B537847917/'] },
    cultural_comfort: { level: 'english', note: 'A hotel restaurant with international staff (August 2026); Alipay and WeChat Pay accepted (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波5-1-60 スイスホテル南海大阪 10F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波五丁目1番60号 (go) 82m (large station-hotel complex); osaka_table_36_swissotel in the same hotel is 11.5 m away, not stacked; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B493035328/'],
    price_note: 'Yum cha prices from Tabelog (read November 2026), tax included, plus 13% service; the cold noodle from an August 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Yum cha lunch, all you can eat (weekdays)', '¥5,800', 'Lunch', 'ask', 'no', 'Tabelog; plus 13% service.', 'yumcha_weekday'),
      it('', '', 'Yum cha lunch, all you can eat (weekends and holidays)', '¥6,500', 'Lunch', 'ask', 'no', 'Tabelog; plus 13% service.', 'yumcha_weekend'),
      it('', '', 'Limited cold noodles with whole lobster', '¥4,500', 'Noodles', 'no', 'no', 'August 2026 (about).', 'lobster_noodle'),
    ] }, {
    cuisine: '伝統の技と薬膳の素材を合わせた創作広東料理 (食べログ)・ワゴンで点心がテーブルを回る食べ放題の飲茶ランチ: エビ蒸し餃子、小籠包、焼売、豚の豆豉蒸し、アサリの餃子、水餃子、ブタやペンギンの形の饅頭。最初にスープ、サラダ、揚げ物。海苔の海鮮巻き、エビ味噌風味の唐揚げ、担々麺、炒飯、春巻き、デザート (食べログ、2026年8〜10月)・個室でのディナーのコース: 前菜の盛り合わせ、カニとキヌガサタケのスープ、アワビと鶏の薬膳スープ、香港式の鯛の蒸し物、コーヒーソースのスペアリブ、牛肉の黒胡椒炒め、海鮮のあんかけ麺、かぼちゃプリンとココナッツ団子 (2026年9〜10月)・夏の限定、ロブスターを1尾のせた冷麺約4,500円 (2026年8月)、ホタテ粥 (2026年8月)・飲茶には中国茶 (2026年)',
    neighborhood: '難波5-1-60 スイスホテル南海大阪 10F。Nankai Namba 駅3階改札から専用エスカレーターで直結',
    gf_detail: '要確認。グルテンの情報なし。点心の皮、春巻き、麺は小麦で、広東料理のタレはふつう醤油やオイスターソースを使う。蒸し魚や薬膳スープから確認を。',
    vegan_detail: 'ヴィーガンではありません。エビ、豚、鶏、牛、魚介の点心と広東料理。',
    notes: '[広東料理・スイスホテル南海、難波駅の上のワゴン点心] Nankai Namba 駅の真上、スイスホテル南海大阪10階の広東料理店で、店によればシンガポールで数々の賞を受け薬膳を得意とするシェフが率いる。昼は点心のワゴンがテーブルを回る食べ放題の飲茶 (平日5,800円、週末6,500円、サービス料13%別) で、エビ蒸し餃子、小籠包、ブタやペンギンの形の饅頭。夜は個室で薬膳スープや蒸し魚のコース。39回通う常連をはじめ点心を愛する声がある一方、2026年には値段のわりに普通、量が多すぎるという声もいくつか。毎日昼と夜。',
  });
}

// ================================================================ LA FINESTRA
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27108042/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:30', '15:00'], ['18:00', '22:00']); const WE = day(['11:30', '15:00'], ['17:30', '22:00']);
  put({
    id: 'osaka_la_finestra_shinmachi', name: 'LA FINESTRA', category: 'OMNI',
    lat: 34.67775, lng: 135.493955, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The homemade pasta, focaccia and herb-crusted pork are wheat-based; charcoal-grilled meats, risotto and salads are where to ask.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: game, pork, beef and seafood; the lunch starters include house bacon and mousses (2026).',
    hours_raw: 'Lunch 11:30–15:00 (last food order 14:00) daily; dinner 18:00–22:00 on weekdays and 17:30–22:00 at weekends and holidays (last food order 21:00); irregular closures (Tabelog). Lunch from ¥1,200 with some mains +¥200 (August 2026); the LA FINESTRA lunch of ten appetizers, a main, focaccia and coffee was ¥2,000 in June–July 2026 and is ¥2,500 on Tabelog (paid in October 2026); omakase lunch course ¥3,500; weekday casual dinner course with a drink ¥4,500 (Tabelog). Reservations; message plates need three days\' notice; groups of 11 or more by phone (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), IC cards, Rakuten Edy, nanaco, WAON, iD, QUICPay and PayPay (Tabelog). 30 seats: 6 at the counter, 24 at tables; a terrace; non-smoking; free Wi-Fi; children welcome, strollers by arrangement (Tabelog). Opened 15 November 2018 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinmachi 1-33-8, ISSビル 1F (Nishi-ku), near the Orix Theater — 2 min from exit 2 of Nishi-Ohashi Stn',
    cuisine: 'Italian with homemade hand-pulled pasta, charcoal-grilled game from around Japan and Italian wine (Tabelog) · lunch: a spread of ten appetizers such as carrot cake, cucumber jelly, ginger and basil mousse, salad with homemade bacon, tomato jelly, pumpkin soup or minestrone; a choice of pasta (carbonara, seafood, zucchini and tomato, bonito and mushroom aglio e olio) or a main (pork steak with cheese and tomato, herb-crusted pork tenderloin, seafood lasagna, beef tendon and daikon in tomato); focaccia; coffee with a cookie or financier (June–October 2026) · dinner: fig and prosciutto; squid-ink pasta; saffron risotto with veal ragù (September 2026); courses (August–September 2026)',
    website: 'https://lafinestra.jp', gmaps: gm('LA FINESTRA 新町'), menu_url: null,
    notes: "[Italian · Shinmachi, homemade pasta and charcoal-grilled game] A bright, spacious Italian restaurant in Shinmachi with a garden view and a counter, where chef Hirano makes hand-pulled pasta and grills game from around Japan over charcoal. Lunch is the draw: a plate of about ten colourful appetizers, then pasta or a generous meat main, focaccia and coffee with a cookie, for ¥2,000–¥2,500. Dinner brings figs with prosciutto, squid-ink pasta, risotto and courses. Diners in 2026 praise the starters and the meat; one couple found the course service minimal, with little explanation of the dishes. Near the Orix Theater, so busy before shows.",
    chef_bio: { chef_name: 'Hirano', roles: ['Chef'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: chef Hirano travelled to Italy to bring authentic pasta to Osaka; signature dishes use fresh game and vegetables sourced from across Japan, homemade pasta and charcoal grilling; opened 15 November 2018.',
      philosophy: 'A casual yet luxurious meal with friendly service (Tabelog).', specialty: 'Homemade pasta; charcoal-grilled game.',
      anecdotes: [
        { text: '"I have the impression that this restaurant excels at cooking meat, no matter what you order." — August 2026, herb-crusted pork tenderloin at lunch ¥1,400.', source: R + 'B506515391/' },
        { text: '"The crispy cookie that came with the coffee was so good that my friend said, \'I would buy it if it were for sale.\'" — July 2026, the ¥2,000 lunch.', source: R + 'B532117053/' },
        { text: '"The service was minimal, and there was hardly any explanation about the dishes." — September 2026, a dinner course for two.', source: R + 'B537955170/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): LA FINESTRA (ラフィネストラ)、イタリアン・パスタ・ジビエ料理、西区新町1-33-8 ISSビル 1F、Nishi-Ohashi 駅2番出口から徒歩2分、昼11:30〜15:00 (L.O.14:00)、夜 平日18:00〜22:00・土日祝17:30〜22:00 (L.O.21:00)、不定休、予約可、メッセージプレートは3日前までに、11名以上は電話で、前菜10種盛りとメインのランチ2,500円、おまかせランチコース3,500円、平日限定のカジュアルコース4,500円 (1ドリンクつき)、カード・電子マネー・PayPay可、30席 (カウンター6、テーブル24)、テラス、禁煙、無料Wi-Fi、2018年11月15日オープン、Hirano シェフがイタリアで学んだ手打ちパスタ、全国から仕入れるジビエ、炭火焼き、イタリアワイン。口コミ(2026年6月〜10月): 前菜の盛り合わせ (キャロットケーキ、きゅうりのジュレ、しょうがとバジルのムース)、パスタかメイン、フォカッチャ、コーヒーとクッキーやフィナンシェ、ランチ2,000円 (+200円でメイン変更)、ハーブ衣の豚ヒレ、いちじくと生ハム、イカ墨パスタ、サフランのリゾット、コースの説明が少ないという声。',
      confidence: 'medium', sources: [TB, R + 'B506515391/', R + 'B529888091/', R + 'B529960211/', R + 'B530021034/', R + 'B531084528/', R + 'B532117053/', R + 'B532930524/', R + 'B535998920/', R + 'B536144288/', R + 'B536566605/', R + 'B536875741/', R + 'B537955170/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区新町1-33-8 ISSビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区新町一丁目33番8号 (go) 20m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B536875741/', R + 'B506515391/'],
    price_note: 'Course prices from Tabelog (read November 2026), tax included; lunch prices from June–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'LA FINESTRA lunch: ten appetizers, main, focaccia, coffee', '¥2,500', 'Lunch', 'no', 'no', 'Tabelog; October 2026 (¥2,000 in June–July 2026).', 'lunch'),
      it('', '', 'Omakase lunch course', '¥3,500', 'Lunch', 'no', 'no', 'Tabelog.', 'lunch_course'),
      it('', '', 'Weekday casual dinner course with a drink', '¥4,500', 'Dinner', 'no', 'no', 'Tabelog.', 'casual_course'),
      it('', '', 'Herb-crusted pork tenderloin lunch', '¥1,400', 'Lunch', 'no', 'no', 'August 2026.', 'pork_lunch'),
    ] }, {
    cuisine: '手打ちパスタ、全国のジビエの炭火焼き、イタリアワインのイタリアン (食べログ)・ランチ: キャロットケーキ、きゅうりのジュレ、しょうがとバジルのムース、自家製ベーコンのサラダ、トマトのジュレ、かぼちゃのスープやミネストローネなど10種ほどの前菜、パスタ (カルボナーラ、魚介、ズッキーニのトマト、カツオとキノコのアーリオ・オーリオ) かメイン (チーズとトマトの豚のステーキ、ハーブ衣の豚ヒレ、魚介のラザニア、牛すじと大根のトマト煮)、フォカッチャ、コーヒーとクッキーかフィナンシェ (2026年6〜10月)・夜: いちじくと生ハム、イカ墨のパスタ、仔牛のラグーのサフランリゾット (2026年9月)、コース (2026年8〜9月)',
    neighborhood: '西区新町1-33-8 ISSビル 1F、Orix Theater の近く。Nishi-Ohashi 駅2番出口から徒歩2分',
    gf_detail: '要確認。グルテンの情報なし。手打ちパスタ、フォカッチャ、ハーブ衣の豚は小麦。炭火焼きの肉、リゾット、サラダから確認を。',
    vegan_detail: 'ヴィーガンではありません。ジビエ、豚、牛、魚介で、ランチの前菜にも自家製ベーコンやムース (2026年)。',
    notes: '[イタリアン・新町、手打ちパスタと炭火のジビエ] 新町の明るく広いイタリアンで、庭が見え、カウンターも。Hirano シェフが手打ちのパスタを作り、全国のジビエを炭火で焼く。目当てはランチで、10種ほどの彩りのよい前菜、パスタかボリュームのあるメイン、フォカッチャ、クッキーつきのコーヒーで2,000〜2,500円。夜はいちじくと生ハム、イカ墨のパスタ、リゾット、コース。2026年の口コミでは前菜と肉が好評で、コースの接客が少なく料理の説明がほとんどなかったという2人連れの声も。Orix Theater に近く、公演前は混む。',
  });
}

save();
