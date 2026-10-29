// Osaka sweep (2-mile circle around Dotonbori), batch 180 — mom phase (≤20 seats, 30+ reviews, nearest-first).
//   + KAMINARI BURGERS (Wagyu-and-pork patty burgers, crisp fries; Higashi-Shinsaibashi 1-18-2 2F)
//   + 小料理 たく庵 (5F koryori: seasonal small plates, sashimi, house kombu salt; near Nagahoribashi)
//   + 和牛ステーキ しばらく (lean Wagyu steak with premium rice, opened December 2025; near Nagahoribashi)
//   + ウエストウッドベーカーズ (WEST WOOD BAKERS: American breakfast café, pancakes and burgers; Minami-Horie)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-29';
const { put, skip, save } = openCitySweep('osaka', TODAY, 180);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ KAMINARI BURGERS
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27132015/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://www.kaminariburgers.com/';
  put({
    id: 'osaka_kaminari_burgers_higashishinsaibashi', name: 'KAMINARI BURGERS', category: 'OMNI',
    lat: 34.674148, lng: 135.503205, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: burgers on toasted buns; no gluten-free bun described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef-and-pork patty burgers.',
    hours_raw: 'Daily 13:00–22:00; may open earlier when ready; closes when the burgers sell out; days off posted on Instagram (Tabelog). No reservations (Tabelog). Cards, e-money and PayPay accepted (Tabelog). Non-smoking. English menu; children welcome (Tabelog). Opened 20 September 2022 (Tabelog).',
    hours: ALL(day(['13:00', '22:00'])), hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 1-18-2, 2F — 3 min from Shinsaibashi Stn',
    cuisine: 'Burger shop (10 seats: 2 at the counter, 8 at tables) · thick, juicy patties of black Wagyu and domestic brand pork on toasted buns · Kaminari Burger Comple; Classic Burger; a recommended stack of about three patties · Kaminari Burger B set ¥2,500 with fries and a drink · very crisp fries; coleslaw · a monthly lottery whose losing ticket earns a free fried egg next time',
    website: OWN, gmaps: gm('KAMINARI BURGERS 東心斎橋'), menu_url: null,
    notes: "[Burgers · big Wagyu-and-pork burgers with crisp fries, Higashi-Shinsaibashi] A small second-floor burger shop near Shinsaibashi Station, known for thick, juicy patties of black Wagyu blended with domestic brand pork on a well-toasted bun, with a light sauce that lets the meat lead. The burgers are big: some diners use a knife and fork, one prefers to wrap them in paper and bite. The fries get nearly as much praise, crisp with a refined sweetness; one diner called them the best fries ever. Get the Classic, the Comple, or the B set (¥2,500 with fries and a drink); a three-patty stack is there if you're hungry. Ten seats; it closes when the burgers sell out.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 20 September 2022 (Tabelog).', background: 'Burger shop (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Black Wagyu and pork patty burgers; fries.',
      anecdotes: [
        { text: '"The combination of Japanese black wagyu and domestic brand pork creates an addictive masterpiece! The sauce is subtle, allowing the natural flavors of the meat to shine through." — March 2026, Kaminari Burger B set ¥2,500.', source: R + 'B524406272/' },
        { text: '"They also have a monthly lottery, and if you bring a losing ticket, you can get a fried egg added to your meal…" — July 2026.', source: R + 'B499094331/' },
      ],
      japanese_sources_summary: '食べログ: KAMINARI BURGERS、大阪市中央区東心斎橋1-18-2 2F、心斎橋駅から徒歩3分、毎日13:00〜22:00、準備ができれば早く開ける、売り切れ次第終了、休みは Instagram で、予約不可、カード・電子マネー・PayPay可、禁煙、10席 (カウンター2、テーブル8)、英語のメニュー、子ども歓迎、2022年9月20日開店、公式サイトあり。口コミ(2026年1〜8月): 黒毛和牛と国産のブランド豚のパティ、厚くてジューシー、香ばしいバンズ、控えめなソース、ピクルス、KAMINARI バーガー Comple、クラシックバーガー、パティ3枚のおすすめ、Bセット2,500円 (ポテトとドリンク)、カリッとしたポテト、コールスロー、大きいので紙で包んでかぶりつくという声、毎月のくじで外れ券を持っていくと目玉焼きをサービス。',
      confidence: 'medium', sources: [TB, OWN, R + 'B499094331/', R + 'B522703452/', R + 'B524403563/', R + 'B524406272/', R + 'B524558333/', R + 'B533510326/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-18-2 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目18番2号 (go) 1m; offset 7 m west of the Tabelog point to clear Sosaku Chuka Enishi (5.2 m) and Chuka Bar JAM (same building); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B524406272/'],
    price_note: 'One set price in the reviews (March 2026); about ¥2,000–3,000 per person (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Kaminari Burger B set (fries and a drink)', '¥2,500', 'Burgers', 'no', 'no', 'March 2026.', 'bset'),
      it('', '', 'Classic Burger', '', 'Burgers', 'no', 'no', 'February–August 2026.', 'classic'),
      it('', '', 'Kaminari Burger Comple', '', 'Burgers', 'no', 'no', 'January 2026.', 'comple'),
      it('', '', 'French fries', '', 'Sides', 'ask', 'ask', 'March–July 2026.', 'fries'),
    ] }, {
    cuisine: 'ハンバーガーの店 (10席: カウンター2、テーブル8)・黒毛和牛と国産のブランド豚の厚くてジューシーなパティ、香ばしいバンズ・KAMINARI バーガー Comple、クラシックバーガー、パティ約3枚のおすすめ・ポテトとドリンクつきのBセット2,500円・カリッとしたポテト、コールスロー・毎月のくじ (外れ券で次回目玉焼きをサービス)',
    neighborhood: '東心斎橋1-18-2 2F。心斎橋駅から徒歩3分',
    gf_detail: '実質グルテンフリーではありません。香ばしいバンズのハンバーガーで、グルテンフリーのバンズの記載なし。',
    vegan_detail: 'ヴィーガンではありません。牛と豚のパティのハンバーガー。',
    notes: '[ハンバーガー・東心斎橋、和牛と豚の大きなバーガーとカリカリのポテト] 心斎橋駅近くの2階にある小さなハンバーガーの店で、黒毛和牛と国産のブランド豚を合わせた厚くてジューシーなパティを香ばしいバンズで。ソースは控えめで肉が主役。大きいのでナイフとフォークを使う人も、紙で包んでかぶりつく人も。ポテトも好評で、カリッとして上品な甘さ、今まででいちばんという声も。クラシック、Comple、ポテトとドリンクつきのBセット (2,500円) を。お腹がすいていればパティ3枚の一品も。10席、売り切れたら閉店。',
  });
}

// ================================================================ 小料理 たく庵
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27121907/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '00:00']);
  put({
    id: 'osaka_koryori_takuan_higashishinsaibashi', name: '小料理 たく庵 (Koryori Takuan)', category: 'OMNI',
    lat: 34.673688, lng: 135.504738, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; dishes include tempura, spring rolls, miso-glazed fish and dishes with ponzu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: dashi-based small plates, sashimi, chicken and pork dishes; nothing described as vegan.',
    hours_raw: 'Mon–Sat 18:00–24:00; closed Sunday; may change, so check (Tabelog). Cards: AMEX only on Tabelog (an older note said cash only until cards were added); no e-money or QR (Tabelog). Smoking allowed (Tabelog). Courses and occasional events such as an all-you-can-drink sake course (May 2026); tables can be fully booked (September 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 1-8-14, Aubenate 5F, near Nanba Elementary School — 2 min from Nagahoribashi Stn',
    cuisine: 'Koryori (small seasonal plates) and sake (18 seats: 6 at the counter, three tables of 4) · starter of several small dishes with a rich dashi · sashimi platter: grilled amberjack, kombu-cured sea bream, Akashi octopus, threadfin bream, conger eel, squid, whitebait · rare chicken tempura with the chef\'s own kombu salt · corn tempura · lightly boiled conger eel; fried conger and eggplant · spring rolls of whitebait and perilla with sake-lees mushroom sauce · straw-grilled chicken · stuffed green peppers with meat miso · pork-wrapped Manganji peppers · grilled eel liver · Wagyu tataki · salted rice balls cooked in an iron pot · milt or oysters with ponzu in winter · sake and shochu',
    website: null, gmaps: gm('小料理 たく庵 東心斎橋'), menu_url: null,
    notes: "[Japanese · a hidden 5th-floor koryori for seasonal small plates and sake, Nagahoribashi] A calm Japanese room on the fifth floor of a building near Nagahoribashi, hard to find but often full, serving Osaka-style small plates with sake and shochu. Dinner starts with a run of small dishes and a rich dashi that two diners single out, then a generous sashimi platter. The kitchen makes its own kombu salt for the rare chicken tempura, and the seasonal list runs from lightly boiled or fried conger eel and straw-grilled chicken to stuffed peppers with meat miso and spring rolls of whitebait and perilla. Finish with salted rice balls from an iron pot. Mostly à la carte, with courses too. Smoking allowed; closed Sundays.",
    chef_bio: { chef_name: null, roles: ['owner'], origin: null, background: 'Koryori restaurant (Tabelog; 2026 reviews).', philosophy: 'Seasonal ingredients; house-made kombu salt (June 2026 review).', specialty: 'Seasonal small plates; sashimi; rare chicken tempura.',
      anecdotes: [
        { text: '"\'I make my own salt.\' I instinctively stopped my chopsticks. The salt served with the chicken tempura was homemade." — June 2026.', source: R + 'B526379794/' },
        { text: '"I especially enjoyed the homemade salted rice balls cooked in a cast iron pot that were highly recommended." — January 2026.', source: R + 'B521805754/' },
      ],
      japanese_sources_summary: '食べログ: 小料理 たく庵、大阪市中央区東心斎橋1-8-14 オーブナテ 5F、長堀橋駅から徒歩2分、月〜土18:00〜24:00、日曜休み、カードはAMEXのみ (以前は現金のみの案内も)、電子マネー・QR不可、喫煙可、18席 (カウンター6、4人テーブル3)、日本酒と焼酎にこだわり。口コミ(2026年1〜9月): ビルの5階でわかりにくいが満席が多い、最初の小鉢とだしがおいしい、sashimi の盛り合わせ (炙りかんぱち、昆布の鯛、明石のタコ、イトヨリ、穴子、イカ、shirasu)、自家製の昆布塩で食べる鶏のレア天ぷら、とうもろこしの天ぷら、穴子の湯引き、穴子と秋茄子の揚げ物、shirasu と大葉の春巻き 酒粕ときのこのソース、藁焼きの鶏、ピーマンの肉味噌詰め、豚巻きの Manganji とうがらし、鰻の肝焼き、和牛のたたき、鉄鍋で炊いた塩おにぎり、冬はshirako や牡蠣のポン酢、日本酒の飲み放題コースのイベントも。',
      confidence: 'medium', sources: [TB, R + 'B484727024/', R + 'B521805754/', R + 'B526379794/', R + 'B527212363/', R + 'B531964386/', R + 'B537362229/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Hidden fifth-floor room; book ahead (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-8-14 オーブナテ 5F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目8番14号 (go) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B527212363/', R + 'B537362229/'],
    price_note: 'No dish prices in the reviews; about ¥6,000–10,000 per person (Tabelog, reviews).', last_checked: TODAY, items: [
      it('', '', 'Assorted sashimi platter', '', 'Fish', 'ask', 'no', 'May–September 2026.', 'sashimi'),
      it('', '', 'Rare chicken tempura with house kombu salt', '', 'Dishes', 'no', 'no', 'June–August 2026.', 'toriten'),
      it('', '', 'Salted rice balls from an iron pot', '', 'Rice', 'ask', 'ask', 'January 2026.', 'onigiri'),
    ] }, {
    cuisine: '季節の小料理と日本酒 (18席: カウンター6、4人テーブル3)・最初に小鉢と濃いだし・sashimi の盛り合わせ: 炙ったかんぱち、昆布の鯛、明石のタコ、イトヨリ、穴子、イカ、shirasu・自家製の昆布塩で食べる鶏のレアの tempura・とうもろこしの tempura・穴子の湯引き、穴子と秋茄子の揚げ物・shirasu と shiso の春巻き 酒粕ときのこのソース・藁焼きの鶏・ピーマンの肉味噌詰め・豚巻きの Manganji とうがらし・鰻の肝焼き・和牛の tataki・鉄鍋で炊いた塩おにぎり・冬はshirako や牡蠣の ponzu・日本酒、焼酎',
    neighborhood: '東心斎橋1-8-14 オーブナテ 5F、難波小学校の近く。長堀橋駅から徒歩2分',
    gf_detail: '要確認。グルテンの情報なし。tempura、春巻き、味噌焼きの魚、ponzu を使う料理も。',
    vegan_detail: '実質ヴィーガンではありません。だしの小鉢、sashimi、鶏や豚の料理。ヴィーガンの記載なし。',
    notes: '[小料理・長堀橋、ビルの5階に隠れた季節の小料理と日本酒] 長堀橋近くのビルの5階にある落ち着いた和の店で、見つけにくいのに満席が多い。大阪らしい小料理を日本酒や焼酎とともに。始まりは小鉢と、ふたりがほめる濃いだし、続いてたっぷりの sashimi の盛り合わせ。鶏のレアの tempura には店で作る昆布塩を添える。季節の品は穴子の湯引きや揚げ物、藁焼きの鶏、ピーマンの肉味噌詰め、shirasu と shiso の春巻きなど。しめは鉄鍋で炊いた塩おにぎり。主にアラカルトで、コースもある。喫煙可、日曜休み。',
  });
}

// ================================================================ 和牛ステーキ しばらく
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27152818/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_wagyu_steak_shibaraku', name: '和牛ステーキ しばらく (Wagyu Steak Shibaraku)', category: 'OMNI',
    lat: 34.673446, lng: 135.505398, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Steak is served with grated wasabi (May 2026); the set also includes a beef-tendon curry, kimchi and miso soup that are not described for gluten.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a Wagyu steak restaurant.',
    hours_raw: 'Daily 11:00–23:00 (food last order 22:00); irregular closures (Tabelog). Opened 16 December 2025 (Tabelog). Reservations cancelled 15 minutes after the time (Tabelog). Cards and PayPay accepted; no e-money (Tabelog). Non-smoking. English digital menu; children welcome (Tabelog). Rice refills free (May 2026).',
    hours: ALL(day(['11:00', '23:00'])), hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 1-4-23 — 2 min from Nagahoribashi Stn exit 7',
    cuisine: 'Wagyu steak and rice set at a 20-seat counter · lean black Wagyu cut into bite-size pieces, 200 g ¥3,960 (May 2026) · sirloin cap; mixed 100 g + 100 g · premium Japanese rice chosen for steak, free refills · with beef-tendon curry, kimchi and miso soup · grated wasabi and Japanese condiments · sake, shochu and wine',
    website: null, gmaps: gm('和牛ステーキ しばらく 東心斎橋'), menu_url: TB + 'dtlmenu/',
    notes: "[Steak · lean Wagyu steak with premium rice, near Nagahoribashi] A counter steak restaurant near Nagahoribashi, opened December 2025, built around a simple pairing: lean black Wagyu, cut into bite-size pieces, and rice chosen to go with it. The lean 200 g set (¥3,960 in May 2026) comes tender and juicy, with free rice refills, a small beef-tendon curry good enough to stand alone, kimchi and miso soup; add sirloin cap if you want more fat, and try the grated wasabi. Two diners are already repeat visitors. Open 11:00–23:00, so it works for a late lunch. One diner found the staff chatted among themselves a bit much.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 16 December 2025 (Tabelog).', background: 'Wagyu steak restaurant with a staff-maintained Tabelog listing (Tabelog; 2026 reviews).', philosophy: 'Lean Wagyu steak chosen by origin and cut, with rice chosen to match (Tabelog listing).', specialty: 'Lean Wagyu steak with rice.',
      anecdotes: [
        { text: '"I ordered the lean beef 200g for JPY 3960, tax included… As always, the meal was incredibly delicious…" — May 2026.', source: R + 'B523587066/' },
        { text: '"They take pride in their rice, and indeed, it was delicious with a rich flavor and sweetness. It came with kimchi, tendon curry, and miso soup." — April 2026.', source: R + 'B525941146/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員の公式情報): 和牛ステーキ しばらく、大阪市中央区東心斎橋1-4-23、長堀橋駅7番出口から徒歩2分、毎日11:00〜23:00 (料理L.O. 22:00)、不定休、2025年12月16日開店、15分遅れでキャンセル、カード・PayPay可、電子マネー不可、禁煙、20席 (カウンター)、英語のデジタルメニュー、子ども歓迎、産地と部位を選んだ和牛の赤身ステーキとステーキに合う米。口コミ(2026年4〜7月): 赤身200g 3,960円 (税込)、ひと口大に切ってある、やわらかくジューシー、サーロインキャップとの食べ比べ、すりおろしわさび、牛すじカレー・キムチ・みそ汁つき、ご飯おかわり自由、米がおいしい、何度も通う人が多い、スタッフ同士の雑談が少し多いという声。',
      confidence: 'medium', sources: [TB, R + 'B523587066/', R + 'B525941146/', R + 'B527653328/', R + 'B528882271/', R + 'B529892889/', R + 'B532356607/'] },
    cultural_comfort: { level: 'english', note: 'English digital menu (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-4-23',
    existence: { status: 'confirmed', checked: TODAY, note: 'Staff-maintained Tabelog listing; reviews dated July 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目4番23号 (go) 5m; offset 7 m north of the Tabelog point to clear Bistro Bar Visco (1.9 m); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B523587066/'],
    price_note: 'Price from a May 2026 review, tax included.', last_checked: TODAY, items: [
      it('', '', 'Lean Wagyu steak set, 200 g', '¥3,960', 'Steak', 'ask', 'no', 'May 2026.', 'akami200'),
      it('', '', 'Lean and sirloin cap, 100 g each', '', 'Steak', 'ask', 'no', 'May 2026.', 'mix'),
    ] }, {
    cuisine: 'カウンター20席の和牛ステーキとご飯のセット・ひと口大に切った黒毛和牛の赤身、200g 3,960円 (2026年5月)・サーロインキャップ、100gずつの食べ比べ・ステーキに合わせて選んだ米、おかわり自由・牛すじカレー、キムチ、みそ汁つき・すりおろしわさびと和の薬味・日本酒、焼酎、ワイン',
    neighborhood: '東心斎橋1-4-23。長堀橋駅7番出口から徒歩2分',
    gf_detail: '要確認。ステーキはすりおろしわさびで (2026年5月)。セットの牛すじカレー、キムチ、みそ汁はグルテンについての記載なし。',
    vegan_detail: 'ヴィーガンではありません。和牛ステーキの店。',
    notes: '[ステーキ・長堀橋、赤身の和牛ステーキとこだわりのご飯] 長堀橋近くのカウンターのステーキの店で、2025年12月開店。黒毛和牛の赤身をひと口大に切り、それに合わせて選んだご飯で食べるシンプルな組み合わせ。赤身200gのセット (2026年5月で3,960円) はやわらかくジューシーで、ご飯はおかわり自由、単品でも通用しそうな牛すじカレー、キムチ、みそ汁つき。脂がほしければサーロインキャップを足し、すりおろしわさびもぜひ。すでに何度も通う人がふたり。11時〜23時なので遅めの昼にも。スタッフ同士の雑談が少し多いという声も。',
  });
}

// ================================================================ ウエストウッドベーカーズ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27072989/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://www.westwoodbakers.com';
  put({
    id: 'osaka_west_wood_bakers_minamihorie', name: 'ウエストウッドベーカーズ (WEST WOOD BAKERS)', category: 'OMNI',
    lat: 34.670525, lng: 135.495302, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: a bakery café of pancakes, French toast, house bread, burgers and donuts; no gluten-free items described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: pancakes with bacon and eggs, burgers, cheese and ice cream; nothing described as vegan.',
    hours_raw: 'Daily 9:00–16:00, open year-round; donuts on weekends and holidays only (Tabelog). No reservations; weekend waits of 20–60 minutes, with sun umbrellas lent to the queue (September–October 2026). Cards, e-money and QR (PayPay) accepted (Tabelog; October 2026). Non-smoking. English menu and English-speaking staff (Tabelog; 2026). Children welcome (Tabelog). Opened 8 May 2013 (Tabelog).',
    hours: ALL(day(['09:00', '16:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Minami-Horie 1-16-9, among the Horie fashion shops — about 8 min from Yotsubashi or Namba Stn',
    cuisine: 'American-style bakery café for breakfast and lunch (18 seats) · thin pancakes with bacon and eggs and maple syrup ¥1,250 · French toast with vanilla ice cream · croque madame breakfast set on house natural-yeast bread ¥1,485 · burgers, e.g. avocado and mozzarella; two burgers can be cut for sharing · truffle fries · arugula, prosciutto and strawberry salad · iced café latte ¥500 · weekend donuts, about ¥300–400 each',
    website: OWN, gmaps: gm('WEST WOOD BAKERS 南堀江'), menu_url: null,
    notes: "[Café · a queue-worthy American breakfast café in Minami-Horie] A warm, wood-and-vintage American bakery café among the Horie fashion shops, open for breakfast and lunch since 2013, with a line on weekends. The pancakes are the draw: thin, flavorful, piled with bacon and eggs and plenty of maple syrup (¥1,250). The croque madame on the house natural-yeast bread (¥1,485) makes a hearty breakfast, and the burgers, such as avocado and mozzarella, come with crisp fries; one diner didn't care for the thick truffle fries. Donuts appear only on weekends and holidays. Arrive at 9 am on a weekday to skip the wait; at weekends expect 20–60 minutes.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 8 May 2013 (Tabelog).', background: 'American-style bakery café (Tabelog; 2026 reviews).', philosophy: '"A little happiness on busy mornings"; care from flour selection to baking (October 2026 review).', specialty: 'Pancakes; burgers; weekend donuts.',
      anecdotes: [
        { text: '"…the pancakes, which were the most popular item, were so delicious… They came with bacon and eggs, drenched in plenty of maple syrup…" — October 2026, BACON & EGG PANCAKES ¥1,250.', source: R + 'B464080823/' },
        { text: '"I ordered the homemade natural yeast bread Croque Madame breakfast set for JPY 1,485. The bread had a chewy texture, paired with soft ham and rich eggs…" — October 2026.', source: R + 'B537667376/' },
      ],
      japanese_sources_summary: '食べログ: ウエストウッドベーカーズ、大阪市西区南堀江1-16-9、四ツ橋駅・なんば駅から、毎日9:00〜16:00、年中無休、ドーナツは土日祝のみ、予約不可、カード・電子マネー・QR可、禁煙、18席、英語のメニュー、子ども歓迎、2013年5月8日開店、公式サイトあり。口コミ(2026年9〜10月): アメリカンなベーカリーカフェ、週末は20〜60分待ち、並ぶ人に日傘を貸してくれる、ベーコンエッグのパンケーキ1,250円、アイスカフェラテ500円、自家製天然酵母パンのクロックマダムの朝食セット1,485円、アボカドモッツァレラチーズバーガー、トリュフポテト (好みではなかったという声)、ルッコラと生ハムといちごのサラダ、フレンチトーストのバニラアイスのせ、ハンバーガーを2つ頼むと切ってくれる、週末のドーナツは300〜400円ほど、英語を話すスタッフ、平日の9時は並ばず入れた。',
      confidence: 'medium', sources: [TB, OWN, R + 'B464080823/', R + 'B528207021/', R + 'B535546578/', R + 'B537667376/', R + 'B537708315/', R + 'B538261833/'] },
    cultural_comfort: { level: 'english', note: 'English menu and English-speaking staff (Tabelog; 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区南堀江1-16-9',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区南堀江一丁目16番9号 (go) 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B464080823/', R + 'B537667376/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Bacon and egg pancakes', '¥1,250', 'Breakfast', 'no', 'no', 'September–October 2026.', 'pancakes'),
      it('', '', 'Croque madame breakfast set', '¥1,485', 'Breakfast', 'no', 'no', 'October 2026.', 'croque'),
      it('アボガドモッツァレラチーズバーガー', '', 'Avocado mozzarella cheeseburger', '', 'Burgers', 'no', 'no', 'October 2026.', 'avocado'),
      it('', '', 'Iced café latte', '¥500', 'Drinks', '', 'no', 'September 2026.', 'latte'),
      it('', '', 'Donuts (weekends and holidays)', 'about ¥300–400', 'Bakery', 'no', 'no', 'September 2026.', 'donuts'),
    ] }, {
    cuisine: 'アメリカンな朝食とランチのベーカリーカフェ (18席)・ベーコンエッグとメープルの薄いパンケーキ1,250円・バニラアイスのせのフレンチトースト・自家製天然酵母パンのクロックマダムの朝食セット1,485円・アボカドとモッツァレラなどのハンバーガー、2つ頼むと切ってくれる・トリュフポテト・ルッコラと生ハムといちごのサラダ・アイスカフェラテ500円・週末のドーナツ300〜400円ほど',
    neighborhood: '南堀江1-16-9、堀江のアパレル店の並ぶ通り。四ツ橋駅・なんば駅から約8分',
    gf_detail: '実質グルテンフリーではありません。パンケーキ、フレンチトースト、自家製パン、ハンバーガー、ドーナツの店で、グルテンフリーの品の記載なし。',
    vegan_detail: '実質ヴィーガンではありません。ベーコンエッグのパンケーキ、ハンバーガー、チーズ、アイス。ヴィーガンの記載なし。',
    notes: '[カフェ・南堀江、並んでも行きたいアメリカンな朝ごはんのカフェ] 堀江のアパレル店の並ぶ通りにある、木とヴィンテージの温かいアメリカンなベーカリーカフェで、2013年から朝食とランチ。週末は行列。目当てはパンケーキで、薄くて生地がおいしく、ベーコンエッグとたっぷりのメープル (1,250円)。自家製天然酵母パンのクロックマダム (1,485円) は食べごたえのある朝ごはんに。アボカドとモッツァレラなどのハンバーガーはカリッとしたポテトつき。太いトリュフポテトは好みではなかったという声も。ドーナツは土日祝だけ。平日の9時なら待たずに入れたという声、週末は20〜60分待ちを覚悟。',
  });
}

save();
