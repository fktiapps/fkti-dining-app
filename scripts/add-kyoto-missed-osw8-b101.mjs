// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 101 (2026-11-08).
//   + 喫茶どんぐり Kissa Donguri (bar-like kissa with coffee-cup pudding, Marutamachi; rest)
//   + NATURAL BAL MEAT UP (hunter-run venison bar in a hotel, Awataguchi near Higashiyama; rest)
//   + more (plate-lunch café with homemade soups, Jingu-Marutamachi; rest)
//   + ボゴタ Bogotá (Showa siphon-coffee kissa, Horikawa-Rokkaku; rest)
//   + やっこ Yako (old udon shop known for “keeshima”, Ebisugawa-Muromachi; rest)
//   Rest list (mod 6 = 1) after batch 100, nearest-first — skipped:
//   - ステーキハウス 听 京都本店 26022499: chain — 听 (eight same-name shops in our crawls; as ruled for 26036634, 26029417,
//     26034750).
//   - BAR BAGLIORE 26041543: thin listing (4 reviews).
//   - ハイアット プレイス 京都 26038207: big-chain hotel (Greg 11-08) — Hyatt Place.
//   Note: 喫茶どんぐり is a coffee shop unrelated to the どんぐり okonomiyaki chain skipped earlier (26002363, 26005291,
//   26021995) — different name, category and concept.
//   Brand check: queue-status.jsonl, than.co.jp/brands and the WILL brands checked — none matches. None of the five is in
//   data (main 5be86ad4, hidden records included).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-101');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260202/26022499/', 'chain: 听 — eight same-name 听 shops in our crawls (as ruled for 26036634, 26029417, 26034750)');
skip('https://tabelog.com/en/kyoto/A2601/A260302/26041543/', 'thin listing: 4 reviews');
skip('https://tabelog.com/en/kyoto/A2601/A260202/26038207/', 'big-chain hotel (Greg 11-08): Hyatt Place Kyoto');

// ================================================================ 喫茶どんぐり Kissa Donguri
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26020453/'; const R = TB + 'dtlrvwlst/';
  const A = day(['08:00', '19:00']); const B = day(['08:00', '17:00']);
  put({
    id: 'kyoto_kissa_donguri_marutamachi', name: '喫茶どんぐり (Kissa Donguri)', category: 'OMNI',
    lat: 35.015077477862974, lng: 135.7593276504645, cuisine_type: 'kissaten',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Caramel pudding and coffee may suit; toasts, French toast, cakes and lunch dishes contain wheat (2024–2026 reviews). No gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan for food: pudding, cakes and toast use egg, dairy or butter; black coffee is fine (2024–2026 reviews).',
    hours_raw: 'Monday–Wednesday 8:00–19:00; Thursday and Friday 8:00–17:00; closed Saturday and Sunday; hours may change (Tabelog). Tabelog also mentions a café-bar time on Thursday and Friday nights and at weekends, when smoking is not allowed, but gives no hours for it, so it is not in the hours. No reservations (Tabelog). Cash only — no cards, e-money or QR (Tabelog). 22 seats: an 8-seat counter like a bar and 14 at tables; smoking allowed outside café-bar time (Tabelog; February 2025). Building HANA 1F, a minute from Marutamachi Stn. Opened 2012 (February 2025 review).',
    hours: { 0: A, 1: A, 2: A, 3: B, 4: B }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Karasuma-Marutamachi',
    cuisine: 'Dim, bar-like kissa run quietly by a single master (2024–2026 reviews) · caramel pudding served in a coffee cup; neatly cut French toast; gâteau chocolat with rum; honey-cinnamon toast, butter toast, baked cheesecake (May 2024–June 2026) · blend coffee, hot or iced (2024–2026 reviews) · lunch: a daily special such as tenshin-han with mini salad and coffee (July 2026) · morning menus (May 2024) · about ¥1,000–2,000 (Tabelog)',
    website: null, gmaps: gm('喫茶どんぐり 丸太町'), menu_url: null,
    notes: '[Kissa · Karasuma-Marutamachi, cash only] A hidden, dim, bar-style coffee shop with a long counter, run by one quiet master: smooth coffee with caramel pudding in a coffee cup, rum gâteau chocolat or French toast, and a daily lunch set. Smoking allowed. Closed weekends.',
    chef_bio: { chef_name: null, roles: ['Master (unnamed)'], origin: null,
      background: 'Per reviewers: a stylish café run quietly by a single master, opened in 2012 in front of Marutamachi Station, with a long bar-like counter, jazz and a dim interior (September 2024; February 2025).',
      philosophy: null, specialty: 'Caramel pudding; French toast.',
      anecdotes: [
        { text: 'A May 2024 visitor came specially for the caramel pudding served in a coffee cup.', source: R + 'B484771937/' },
        { text: 'A January 2026 business traveller stepped in and found the mood quiet and relaxing, with carefully made coffee.', source: R + 'B521477643/' },
        { text: 'A July 2026 lunch guest found it nearly full after 1 p.m. and had the daily tenshin-han with salad and iced coffee.', source: R + 'B532325837/' },
      ],
      japanese_sources_summary: '食べログ: 喫茶店、中京区少将井町250 ビルHANA 1F、丸太町駅から徒歩すぐ、月〜水 8:00〜19:00、木・金 8:00〜17:00、土・日休み、予約不可、カード・電子マネー・QR 不可、22席 (カウンター8、テーブル14)、喫煙可 (木・金の夜と土・日のカフェバータイムは禁煙)。口コミ (2024年5月〜2026年7月、英語): 一人のマスターが静かに営むバーのような喫茶店、2012年開店、長いカウンター、ジャズ、コーヒーカップのカラメルプリン、フレンチトースト、ラム酒のガトーショコラ、ハニーシナモントースト、バタートースト、ベイクドチーズケーキ、ブレンド、日替わりの昼 (天津飯、ミニサラダ、コーヒー)、モーニング。',
      confidence: 'medium', sources: [TB, R + 'B484318884/', R + 'B484771937/', R + 'B488176388/', R + 'B492692203/', R + 'B495928050/', R + 'B500764772/', R + 'B501478462/', R + 'B521477643/', R + 'B530906259/', R + 'B532325837/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only; smoking allowed; closed weekends.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区少将井町250 ビルHANA 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through July 2026.' },
    pin_source: `Tabelog ${TB} (35.015077, 135.759328); cross-checked: GSI 京都府京都市中京区少将井町250番地 (lot) 56 m; nearest existing record 33.5 m (kyoto_takano_bakushu_ten); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B484771937/'],
    price_note: 'No item prices in the sources.', last_checked: TODAY, items: [
      it('', '', 'Caramel pudding (in a coffee cup)', '', 'Sweets', 'ask', 'no', 'May 2024.', 'pudding'),
      it('', '', 'Blend coffee', '', 'Coffee', 'ask', 'vegan', 'June 2026.', 'blend'),
    ] }, {
    cuisine: '一人のマスターが静かに営む薄暗いバーのような喫茶店 (2024〜2026年の口コミ)・コーヒーカップのカラメルプリン、きれいに切ったフレンチトースト、ラム酒のガトーショコラ、ハニーシナモントースト、バタートースト、ベイクドチーズケーキ (2024年5月〜2026年6月)・ブレンドのホットとアイス (2024〜2026年の口コミ)・昼は天津飯などの日替わりにミニサラダとコーヒー (2026年7月)・モーニング (2024年5月)・1,000〜2,000円ほど (食べログ)',
    neighborhood: '烏丸丸太町',
    gf_detail: '要確認。カラメルプリンとコーヒーは合う可能性があるが、トースト、フレンチトースト、ケーキ、昼の料理は小麦 (2024〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: '料理はヴィーガン不可。プリン、ケーキ、トーストは卵、乳製品、バター。ブラックコーヒーは問題なし (2024〜2026年の口コミ)。',
    notes: '[喫茶店・烏丸丸太町、現金のみ] 長いカウンターの隠れた薄暗いバー風の喫茶店。静かなマスターのなめらかなコーヒーに、コーヒーカップのカラメルプリン、ラム酒のガトーショコラやフレンチトースト、日替わりの昼も。喫煙可。土・日休み。',
  });
}

// ================================================================ NATURAL BAL MEAT UP
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26043259/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '21:00']);
  put({
    id: 'kyoto_natural_bal_meat_up', name: 'NATURAL BAL MEAT UP', category: 'OMNI',
    lat: 35.00966344787446, lng: 135.78459384039212, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Venison steak and stewed tendon may suit, but burgers, pizza, crêpes, fries and sauces may contain wheat (2025–2026 reviews). No gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a venison and game specialist (Tabelog; 2025–2026 reviews).',
    hours_raw: 'Thursday–Tuesday and holidays 12:00–21:00 (last order 20:30); closed Wednesday (Tabelog). Reservations accepted; all-you-can-drink party plans (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), IC cards and QR (Tabelog). 30 seats: 5 at the counter, 25 at tables, plus a terrace with a smoking area; wheelchair accessible; free Wi-Fi; projector (Tabelog). Hotel Material 1F near Awata Shrine, about 5 min walk from Higashiyama Stn (Tabelog; March 2026).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Awataguchi, near Higashiyama Stn',
    cuisine: 'Natural-style bar of venison hunted by its own staff, with craft beer (Tabelog; 2025–2026 reviews) · venison steak, venison burger, venison soup-hamburg set with rice ¥1,800, waterless venison curry (November 2025–March 2026) · venison ham and jerky, stewed venison tendon with konnyaku, venison and pork sausage, nachos, pizza, fries (January–July 2026) · butter crêpe with vanilla ice; craft ginger ale; local beers (November 2025–March 2026) · lunch about ¥1,000–2,000, dinner about ¥4,000–5,000 (Tabelog)',
    website: null, gmaps: gm('NATURAL BAL MEAT UP'), menu_url: TB + 'dtlmenu/',
    notes: '[Venison bar · near Awata Shrine] A bright bar in a small hotel where the staff are hunters: tender, ungamey venison steaks, burgers, curry and sausages, venison ham and jerky, with craft beer. Open from noon; closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Hunter-cooks (unnamed)'], origin: null,
      background: 'Per Tabelog and reviewers: a natural-style bar specialising in venison, run by a Kyoto business that handles everything from hunting to sale; all the staff are hunters, and the young cook goes hunting himself (October 2025–February 2026).',
      philosophy: 'Healthy dishes of game, natural ingredients and fresh vegetables; culled wild animals treated as a blessing (Tabelog; October 2025).', specialty: 'Venison steak; venison curry.',
      anecdotes: [
        { text: 'An October 2025 visitor after the Hello Kitty exhibition at the Kyocera Museum had fresh venison in a cosy, ten-seat-feeling room.', source: R + 'B515319689/' },
        { text: 'A November 2025 diner expected little from a young cook, then learned the cook hunts too — the steak was bright red and juicy.', source: R + 'B516751004/' },
        { text: 'A February 2026 guest was surprised that the stewed venison tendon with konnyaku had no gamey taste at all.', source: R + 'B521885877/' },
      ],
      japanese_sources_summary: '食べログ: ジビエ料理・バル・創作料理、東山区中之町210-4 ホテルマテリアル 1F、東山駅から徒歩5分ほど、木〜火・祝日 12:00〜21:00 (L.O.20:30)、水曜休み、予約可、飲み放題あり、カード (VISA・Master・JCB・AMEX・Diners・銀聯)・交通系IC・楽天Edy・nanaco・WAON・iD・QUICPay・QR 可、30席 (カウンター5、テーブル25)、禁煙 (テラスに喫煙所)、車いす可、Wi-Fi、紹介文 (英訳): 自社の猟師による本格ジビエとクラフトビール、鹿肉専門のナチュラルなバル、狩猟から扱う京都の会社が運営。口コミ (2025年10月〜2026年7月、英語): スタッフ全員が猟師、鹿のステーキ、鹿のバーガー、鹿のスープハンバーグ (ご飯付き) 1,800円、無水の鹿カレー、鹿のハムとジャーキー、鹿すじとこんにゃくの煮込み、鹿と豚のソーセージ、ナチョス、ピザ、ポテト、バタークレープとバニラアイス、クラフトジンジャーエール、地ビール、粟田神社の近く。',
      confidence: 'medium', sources: [TB, R + 'B515319689/', R + 'B515438812/', R + 'B516751004/', R + 'B517599675/', R + 'B521712370/', R + 'B521885877/', R + 'B522038529/', R + 'B524419352/', R + 'B524781411/', R + 'B532530988/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Open from noon; cards, IC and QR; terrace.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区中之町210-4 ホテルマテリアル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing; reviews through July 2026.' },
    pin_source: `Tabelog ${TB} (35.009663, 135.784594); GSI matched a different 中之町 1.3 km away, so the Tabelog pin (near Awata Shrine, consistent with the reviews) is kept unconfirmed; nearest existing record 164 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B524419352/'],
    price_note: 'Price from a March 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Venison soup-hamburg with rice', '¥1,800', 'Lunch', 'ask', 'no', 'March 2026.', 'souphamburg'),
      it('', '', 'Venison steak', '', 'Mains', 'ask', 'no', 'November 2025.', 'steak'),
    ] }, {
    cuisine: '自社のスタッフが獲った鹿肉とクラフトビールのナチュラルなバル (食べログ、2025〜2026年の口コミ)・鹿のステーキ、鹿のバーガー、ご飯付きの鹿のスープハンバーグ1,800円、無水の鹿カレー (2025年11月〜2026年3月)・鹿のハムとジャーキー、鹿すじとこんにゃくの煮込み、鹿と豚のソーセージ、ナチョス、ピザ、ポテト (2026年1〜7月)・バタークレープとバニラアイス、クラフトジンジャーエール、地ビール (2025年11月〜2026年3月)・昼1,000〜2,000円ほど、夜4,000〜5,000円ほど (食べログ)',
    neighborhood: '粟田口、東山駅の近く',
    gf_detail: '要確認。鹿のステーキや鹿すじの煮込みは合う可能性があるが、バーガー、ピザ、クレープ、ポテト、ソースは小麦の可能性 (2025〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。鹿肉とジビエの専門店 (食べログ、2025〜2026年の口コミ)。',
    notes: '[鹿肉のバル・粟田神社の近く] 小さなホテルの明るいバル、スタッフが自分で鹿を獲る。くさみのないやわらかな鹿のステーキ、バーガー、カレー、ソーセージ、鹿のハムやジャーキーにクラフトビール。昼から営業、水曜休み。',
  });
}

// ================================================================ more
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26023135/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '18:00']);
  put({
    id: 'kyoto_more_cafe_jingu_marutamachi', name: 'more', category: 'OMNI',
    lat: 35.01739000786581, lng: 135.7728125404784, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Plate lunches of chicken, five-grain rice and vegetables and the homemade soups may suit, but dressings and cakes are not described for gluten (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The seasonal soup lunch (e.g. a pumpkin or cabbage potage) and vegetable-heavy plates may be adaptable; mains are chicken (2025–2026 reviews).',
    hours_raw: 'Monday–Saturday 11:30–18:00; closed Sunday; hours may change (Tabelog). Reservations accepted; a short queue at 11:30 on some weekdays (Tabelog; October 2025). Cards (JCB, AMEX, Diners) and QR; no e-money (Tabelog). 22 seats incl. counter, sofas and semi- and fully private rooms; non-smoking; free Wi-Fi and some power outlets; English menu; take-out (Tabelog). Children, babies and strollers welcome, STOKKE high chairs (Tabelog; October 2026). Excel Jingu 1F, 1 min walk from Jingu-Marutamachi Stn exit 4 (Tabelog). Opened 2 August 2013 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Jingu-Marutamachi, by the Kamo River',
    cuisine: 'Calm, child-friendly café of vegetable-rich plate lunches and homemade sweets (2025–2026 reviews) · daily plate lunches of chicken — honey mustard, Japanese mustard, salt-lemon or with tomato sauce — with five-grain rice, plenty of vegetables and a pumpkin dressing (October 2025–October 2026) · seasonal homemade soup lunch ¥1,100, e.g. a spring cabbage and new onion potage (March 2025); pumpkin soup set (October 2026) · Basque cheesecake, coffee and daily teas (June–October 2026) · about ¥1,000–2,500 (Tabelog; 2025–2026 reviews)',
    website: null, gmaps: gm('more カフェ 神宮丸太町'), menu_url: null,
    notes: '[Café · Jingu-Marutamachi] A calm, stylish café by the Kamo River, very welcoming to families: wholesome plate lunches of chicken, five-grain rice and lots of vegetables, seasonal homemade soups, Basque cheesecake and good coffee. Arrive at opening. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Per Tabelog and reviewers: a café opened 2 August 2013 by Jingu-Marutamachi station, known for gently seasoned, vegetable-rich plate lunches and a welcome for children, with high chairs and room for strollers (2025–2026 reviews).',
      philosophy: null, specialty: 'Plate lunch; seasonal soup.',
      anecdotes: [
        { text: 'An October 2025 diner arrived ten minutes before opening to find three people already queuing.', source: R + 'B515384090/' },
        { text: 'A June 2026 parent could bring the stroller inside, and paired a Japanese-style chicken plate with Basque cheesecake.', source: R + 'B531017231/' },
        { text: 'An October 2026 regular calls it a rare café for good coffee and sweets with children, handy after a picnic by the river.', source: R + 'B538399707/' },
      ],
      japanese_sources_summary: '食べログ: カフェ・ケーキ、左京区下堤町77 エクセル神宮 1F、京阪神宮丸太町駅4番出口から徒歩1分、月〜土 11:30〜18:00、日曜休み、予約可、カード (JCB・AMEX・Diners)・QR 可、電子マネー不可、22席、半個室と個室、禁煙、Wi-Fi、一部の席に電源、英語のメニュー、テイクアウト、子ども・ベビーカー可、子ども用の椅子、2013年8月2日開店。口コミ (2025年3月〜2026年10月、英語): 野菜たっぷりのプレートランチ (はちみつマスタードチキン、和風マスタードチキン、塩レモンチキン、トマトソースのチキン)、五穀米、かぼちゃのドレッシング、季節の手作りスープランチ1,100円 (春キャベツと新玉ねぎのポタージュ)、かぼちゃのスープのセット、バスクチーズケーキ、コーヒーと日替わりのお茶、STOKKE の子ども用の椅子、開店前に行列も。',
      confidence: 'medium', sources: [TB, R + 'B442511467/', R + 'B515384090/', R + 'B516495984/', R + 'B518066628/', R + 'B518159085/', R + 'B530450235/', R + 'B531017231/', R + 'B536198147/', R + 'B536974415/', R + 'B538399707/'] },
    cultural_comfort: { level: 'english', note: 'English menu; child-friendly; cards and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市左京区下堤町77 エクセル神宮 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.017390, 135.772813); GSI matches only the town 下堤町 (119 m), so the Tabelog pin by Jingu-Marutamachi Stn exit 4 is kept unconfirmed; nearest existing record 38.5 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B442511467/'],
    price_note: 'Price from a 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Seasonal homemade soup lunch', '¥1,100', 'Lunch', 'ask', 'ask', 'March 2025.', 'soup'),
      it('', '', 'Plate lunch (chicken, five-grain rice, vegetables)', '', 'Lunch', 'ask', 'no', 'October 2025–October 2026.', 'plate'),
    ] }, {
    cuisine: '野菜たっぷりのプレートランチと手作りの甘味の、子ども連れにやさしい落ち着いたカフェ (2025〜2026年の口コミ)・日替わりのチキンのプレート (はちみつマスタード、和風マスタード、塩レモン、トマトソース) に五穀米、たっぷりの野菜、かぼちゃのドレッシング (2025年10月〜2026年10月)・季節の手作りスープランチ1,100円 (春キャベツと新玉ねぎのポタージュなど) (2025年3月)、かぼちゃのスープのセット (2026年10月)・バスクチーズケーキ、コーヒー、日替わりのお茶 (2026年6〜10月)・1,000〜2,500円ほど (食べログ、2025〜2026年の口コミ)',
    neighborhood: '神宮丸太町、鴨川のそば',
    gf_detail: '要確認。チキン、五穀米、野菜のプレートや手作りスープは合う可能性があるが、ドレッシングやケーキのグルテンは不明 (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。季節のスープランチ (かぼちゃやキャベツのポタージュなど) や野菜の多いプレートは相談の余地があるが、主菜はチキン (2025〜2026年の口コミ)。',
    notes: '[カフェ・神宮丸太町] 鴨川のそばの落ち着いたしゃれたカフェ、子ども連れにもとてもやさしい。チキン、五穀米、たっぷり野菜の体にやさしいプレート、季節の手作りスープ、バスクチーズケーキとおいしいコーヒー。開店時に。日曜休み。',
  });
}

// ================================================================ ボゴタ Bogotá
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26019313/'; const R = TB + 'dtlrvwlst/';
  const W = day(['07:00', '15:00']); const S = day(['08:00', '15:00']);
  put({
    id: 'kyoto_bogota_horikawa', name: 'ボゴタ (Bogotá)', category: 'OMNI',
    lat: 35.00728430786562, lng: 135.7520595603909, cuisine_type: 'kissaten',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF for food: toast, egg sandwiches and morning sets; coffee itself is fine (2022–2025 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Black siphon coffee is plant-based; morning sets include egg and ham; café au lait uses milk (2023–2025 reviews).',
    hours_raw: 'Monday–Saturday 7:00–15:00; Sunday 8:00–15:00; hours may change (Tabelog). No reservations (Tabelog). Cash only — no cards, e-money or QR (Tabelog). Non-smoking now (Tabelog; November 2021). Menu in three languages (July 2025). On the south-east corner of Horikawa and Rokkaku; about 10 min walk north of Hankyu Omiya (November 2021; February 2025).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: W, 6: S }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Horikawa-Rokkaku',
    cuisine: 'Showa-era town kissa of siphon coffee, open from 7:00 (2021–2025 reviews) · siphon-brewed blend, café au lait, cappuccino with a cinnamon stick (November 2021–July 2025) · morning sets such as egg sandwich or ham and egg (August 2023; October 2025) · lettuce pilaf and other light meals (December 2025) · under ¥1,000–2,000 (Tabelog; 2025 reviews)',
    website: null, gmaps: gm('ボゴタ 堀川六角 喫茶'), menu_url: null,
    notes: '[Kissa · Horikawa-Rokkaku, from 7:00] A nostalgic Showa coffee shop on a busy corner: siphon coffee, cappuccino with a cinnamon stick, and good-value morning sets of egg sandwiches or ham and eggs, now popular with overseas visitors too. Cash only.',
    chef_bio: { chef_name: null, roles: ['Owners and staff (unnamed)'], origin: null,
      background: 'Per reviewers: a long-standing neighbourhood café with a retro Showa interior, brewing siphon coffee, run by an older couple with two more staff (November 2022), drawing local families and early-rising travellers (2021–2025 reviews).',
      philosophy: null, specialty: 'Siphon coffee; morning sets.',
      anecdotes: [
        { text: 'A November 2021 regular found the siphon coffee as deep as ever, though now non-smoking.', source: R + 'B443423189/' },
        { text: 'An October 2025 couple on day two in Kyoto found it on Google Maps because it opens at 7 a.m.', source: R + 'B515563617/' },
        { text: 'A December 2025 visitor who had long seen it from the bus finally came in for the lettuce pilaf among local families.', source: R + 'B520049371/' },
      ],
      japanese_sources_summary: '食べログ: 喫茶店・カフェ、中京区東堀川通六角下る壷屋町240、月〜土 7:00〜15:00、日 8:00〜15:00、予約不可、カード・電子マネー・QR 不可、禁煙。口コミ (2021年11月〜2025年12月、英語): 堀川通と六角通の南東の角、昭和レトロの店内、サイフォンのコーヒー、カフェオレ、シナモンスティックのカプチーノ、卵サンドやハムエッグのモーニング、レタスピラフ、年配の夫婦とスタッフ2人 (2022年11月)、3か国語のメニュー、海外の客や地元の家族。',
      confidence: 'medium', sources: [TB, R + 'B443423189/', R + 'B450293283/', R + 'B456257518/', R + 'B499673500/', R + 'B504136217/', R + 'B510080493/', R + 'B510432032/', R + 'B514836225/', R + 'B515563617/', R + 'B520049371/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only; multilingual menu; opens 7:00.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区東堀川通六角下る壷屋町240',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through December 2025.' },
    pin_source: `Tabelog ${TB} (35.007284, 135.752060); cross-checked: GSI 京都府京都市中京区壺屋町240番地 (lot) 60 m; nearest existing record 67.8 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B514836225/'],
    price_note: 'No item prices in the sources.', last_checked: TODAY, items: [
      it('', '', 'Siphon blend coffee', '', 'Coffee', 'ask', 'vegan', 'July 2025.', 'siphon'),
      it('', '', 'Ham and egg morning set', '', 'Morning', 'no', 'no', 'October 2025.', 'morning'),
    ] }, {
    cuisine: '朝7時からのサイフォンのコーヒーの昭和の町の喫茶店 (2021〜2025年の口コミ)・サイフォンのブレンド、カフェオレ、シナモンスティックのカプチーノ (2021年11月〜2025年7月)・卵サンドやハムエッグのモーニング (2023年8月、2025年10月)・レタスピラフなどの軽食 (2025年12月)・1,000〜2,000円未満 (食べログ、2025年の口コミ)',
    neighborhood: '堀川六角',
    gf_detail: '料理はグルテンフリー不可。トースト、卵サンド、モーニング。コーヒーは問題なし (2022〜2025年の口コミ)。',
    vegan_detail: '要確認。サイフォンのブラックコーヒーは植物性。モーニングは卵やハム、カフェオレは牛乳 (2023〜2025年の口コミ)。',
    notes: '[喫茶店・堀川六角、朝7時から] にぎやかな角の懐かしい昭和の喫茶店。サイフォンのコーヒー、シナモンスティックのカプチーノ、卵サンドやハムエッグのお得なモーニング。海外の客にも人気。現金のみ。',
  });
}

// ================================================================ やっこ Yako
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26000113/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:30', '17:00']); const S = day(['11:30', '14:30']);
  put({
    id: 'kyoto_yakko_udon_ebisugawa', name: 'やっこ (Yako)', category: 'OMNI',
    lat: 35.01486936786275, lng: 135.75819890046324, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: wheat udon and Chinese noodles in soy-dashi broth, tempura (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi broths, oyakodon and fried rice with fish cake (2025–2026 reviews).',
    hours_raw: 'Monday–Friday 11:30–17:00; Saturday 11:30–14:30; closed Sunday, holidays and over New Year; closes when sold out; temporary closures on Instagram (Tabelog). No reservations; queues of about three groups at noon (Tabelog; January 2026). Cash only — no cards, e-money or QR (Tabelog). 40 seats: 6 at the counter, 7 tables and 2 tatami rooms; non-smoking (Tabelog; January 2026). On Ebisugawa-dori east of Muromachi, 3 min walk from Marutamachi Stn exit 6 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: S }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Ebisugawa-Muromachi, near Marutamachi',
    cuisine: 'Long-running local udon and soba shop known for “keeshima” — Chinese noodles in udon broth (2016–2026 reviews) · keeshima; tempura udon in a rich broth (December 2025–August 2026) · fried rice ¥800 with kamaboko; oyakodon (August–October 2026) · under ¥1,000–2,000 (Tabelog)',
    website: null, gmaps: gm('やっこ うどん 夷川 室町'), menu_url: null,
    notes: '[Udon · Ebisugawa-Muromachi, cash only] A busy old-fashioned noodle shop of regulars, famous for keeshima — Chinese noodles in a gentle Kyoto udon broth — plus tempura udon, oyakodon and an old-style fried rice. Closes when sold out. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Per reviewers: a small traditional udon shop near Marutamachi with regulars and a growing number of visitors, known for keeshima, Chinese noodles in udon broth, a dish some call a local Kyoto speciality (2016–2026 reviews).',
      philosophy: null, specialty: 'Keeshima; tempura udon.',
      anecdotes: [
        { text: 'A July 2026 diner came after the Gion Matsuri procession to try the keeshima read about in a book on Kyoto Chinese restaurants.', source: R + 'B531917096/' },
        { text: 'A January 2026 regular who wondered about keeshima since living in Osaka finally tried it after moving to Kyoto.', source: R + 'B97814889/' },
        { text: 'An October 2026 visitor after a long night of drinking found the late lunch gentle and soothing.', source: R + 'B537045157/' },
      ],
      japanese_sources_summary: '食べログ: うどん・そば、中京区夷川通室町東入ル冷泉町76、丸太町駅6番出口から徒歩3分、月〜金 11:30〜17:00、土 11:30〜14:30、日・祝日と年末年始休み、売り切れ次第終了、臨時休業はインスタグラムで、予約不可、カード・電子マネー・QR 不可、40席 (カウンター6、テーブル7、座敷2)、禁煙。口コミ (2016年11月〜2026年10月、英語): 中華麺をうどんのだしで食べる Keeshima、天ぷらうどん、焼き飯800円 (かまぼこ入り)、親子丼、昼は3組ほど待つ、常連と海外の客。',
      confidence: 'medium', sources: [TB, R + 'B97814889/', R + 'B519759453/', R + 'B520724016/', R + 'B526679789/', R + 'B531917096/', R + 'B532829616/', R + 'B534463361/', R + 'B537045157/', R + 'B537215278/', R + 'B538691388/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only; queues at noon; closes when sold out.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区夷川通室町東入ル冷泉町76',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.014869, 135.758199); cross-checked: GSI 京都府京都市中京区冷泉町76番地 (lot) 63 m; nearest existing record 12.7 m (kyoto_ginjo_kuraudo_marutamachi); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537215278/'],
    price_note: 'Price from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Keeshima (Chinese noodles in udon broth)', '', 'Noodles', 'no', 'no', 'July–August 2026.', 'keeshima'),
      it('', '', 'Fried rice', '¥800', 'Rice', 'no', 'no', 'October 2026.', 'yakimeshi'),
    ] }, {
    cuisine: '中華麺をうどんのだしで食べる「Keeshima」で知られる長く続く町のうどんとそばの店 (2016〜2026年の口コミ)・Keeshima、濃いだしの天ぷらうどん (2025年12月〜2026年8月)・かまぼこ入りの焼き飯800円、親子丼 (2026年8〜10月)・1,000〜2,000円未満 (食べログ)',
    neighborhood: '夷川室町、丸太町の近く',
    gf_detail: 'グルテンフリー不可。醤油のだしの小麦のうどんと中華麺、天ぷら (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。だしのつゆ、親子丼、かまぼこ入りの焼き飯 (2025〜2026年の口コミ)。',
    notes: '[うどん・夷川室町、現金のみ] 常連でにぎわう昔ながらのうどん屋。やさしい京のうどんのだしで中華麺を食べる Keeshima が名物、天ぷらうどん、親子丼、昔ながらの焼き飯も。売り切れ次第終了。日曜休み。',
  });
}

save();
