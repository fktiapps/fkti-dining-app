// Osaka sweep (2-mile circle around Dotonbori), batch 179 — mom phase (≤20 seats, 30+ reviews, nearest-first).
//   + 天ぷら互生 心斎橋 (12-seat tempura course with wine pairings, run by two people; Nishi-Shinsaibashi) — mom
//   + 黒門すし酒場 花神総本店 (Kuromon Market seafood and sushi izakaya from 9 am; Nippombashi)
//   + 炭火焼き無限バーグ 無限 (all-you-can-eat charcoal hamburg steak, timed courses; Namba Sennichimae)
//   + 中華バル JAM (9-seat Chinese bar, mapo tofu, to 1 am; Higashi-Shinsaibashi)
//   Skips: 27051927 松屋 四ツ橋店, 27036253 ＣｏＣｏ壱番屋 浪速区難波中１丁目店 (national chains).
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-29';
const { put, skip, save } = openCitySweep('osaka', TODAY, 179);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27051927', 'National beef-bowl chain (Matsuya); not a sweep target.');
skip('27036253', 'National curry chain (CoCo Ichibanya); not a sweep target.');

// ================================================================ 天ぷら互生 心斎橋
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27121865/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://www.tempura-gosei.jp/';
  put({
    id: 'osaka_tempura_gosei_shinsaibashi', name: '天ぷら互生 心斎橋 (Tempura Gosei Shinsaibashi)', category: 'OMNI',
    lat: 34.673443, lng: 135.498157, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: a tempura course that opens with somen noodles; batter is not described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: the course includes shrimp, sea urchin, octopus and whitebait; nothing described as vegan.',
    hours_raw: 'Daily 18:00–24:00; irregular closures (Tabelog). Reservation only; call if running late (Tabelog). Please avoid strong perfume or hair products (Tabelog). Cards and PayPay accepted; no e-money (Tabelog). Non-smoking (Tabelog). English menu; sommelier on site (Tabelog).',
    hours: ALL(day(['18:00', '00:00'])), hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nishi-Shinsaibashi 1-8-22, Dai-5 Ace Bldg 2F, on the Amerikamura side — 1 min from Shinsaibashi Stn exit 7 or Yotsubashi Stn exit 5',
    cuisine: 'Tempura course with wine pairings at an L-shaped counter (12 seats: 8 at the counter, one table for 4) · opens with chilled kuzu somen with sudachi · small dishes such as baby octopus and boiled whitebait with sansho, wild vegetables · uni on rice cooked in a clay pot · tempura: sweet shrimp from Amakusa (heads fried crisp), shiso-wrapped tempura, scallop, vegetables, a shrimp to start · grated daikon between rounds · curry to finish (optional) · wine and sake pairings chosen by the sommelier',
    website: OWN, gmaps: gm('天ぷら互生 心斎橋'), menu_url: null,
    notes: "[Tempura · a 12-seat tempura and wine-pairing counter run by two people, Shinsaibashi] A small, stylish tempura counter a minute from Shinsaibashi Station, run by two people: one fries, the other is a sommelier who pairs affordable wines and sake with each course. The meal opens with chilled kuzu somen sharpened with sudachi, then small seasonal dishes and uni piled on clay-pot rice before the tempura, which diners call light and gentle on the stomach. The standout is sweet shrimp from Amakusa with crisp fried heads; vegetables shine too. A rich curry is an optional finish. One repeat visitor keeps bringing guests to impress. Expect ¥15,000–30,000 with pairings. Reservation only; skip the perfume.",
    chef_bio: { chef_name: null, roles: ['owner'], origin: null, background: 'Tempura and wine counter run by two people, one a sommelier (September 2026 reviews; Tabelog).', philosophy: 'Seasonal ingredients with sommelier-chosen wines (Tabelog listing).', specialty: 'Tempura course with wine pairing.',
      anecdotes: [
        { text: '"…the cold kuzusomen that came out first was absolutely perfect!… You must try the amaebi (sweet shrimp) here! The moment I took a bite, an incredible sweetness spread throughout my mouth…" — June 2026.', source: R + 'B530909376/' },
        { text: '"I always feel that the tempura here is very gentle on the stomach… The wine pairing… was, as usual, outstanding." — September 2026.', source: R + 'B520419636/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員の公式情報): 天ぷら互生 心斎橋、大阪市中央区西心斎橋1-8-22 第5エースビル 2F、心斎橋駅7番出口・四ツ橋駅5番出口から徒歩1分、毎日18:00〜24:00、不定休、完全予約制、香水や整髪料の強い香りは控えて、カード・PayPay可、電子マネー不可、禁煙、12席 (カウンター8、4人テーブル1)、ソムリエ、英語のメニュー、公式サイトあり。口コミ(2026年6〜10月): ふたりで営む店でひとりがソムリエ、L字のカウンター、最初に sudachi の冷たい kuzu somen、小ダコ、sansho の効いた釜揚げ shirasu、山菜、土鍋で炊いたご飯に uni、天草の甘エビの tempura (頭はカリッと)、shiso 巻き、ホタテ、野菜、大根おろし、しめにカレーも、手頃なワインと日本酒のペアリング、胃にやさしい軽い tempura、滋賀の作家の器、予算15,000〜30,000円。',
      confidence: 'medium', sources: [TB, OWN, R + 'B520419636/', R + 'B529947880/', R + 'B530909376/', R + 'B535925532/', R + 'B535948389/', R + 'B536882298/'] },
    cultural_comfort: { level: 'english', note: 'English menu; reservation only (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市中央区西心斎橋1-8-22 第5エースビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Staff-maintained Tabelog listing; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区西心斎橋一丁目8番22号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B530909376/', R + 'B520419636/'],
    price_note: 'No course price stated in reviews; about ¥15,000–30,000 per person with drinks (reviews).', last_checked: TODAY, items: [
      it('', '', 'Tempura course', '', 'Courses', 'no', 'no', 'June–October 2026.', 'course'),
      it('', '', 'Wine pairing', '', 'Drinks', '', '', 'September 2026.', 'pairing'),
      it('', '', 'Curry to finish', '', 'Courses', 'ask', 'no', 'June 2026.', 'curry'),
    ] }, {
    cuisine: 'L字カウンターの tempura のコースとワインのペアリング (12席: カウンター8、4人テーブル1)・最初は sudachi の冷たい kuzu somen・小ダコ、sansho の効いた釜揚げ shirasu、山菜などの小皿・土鍋で炊いたご飯に uni・tempura: 天草の甘エビ (頭はカリッと)、shiso 巻き、ホタテ、野菜、最初は海老・合間に大根おろし・しめにカレーも (お好みで)・ソムリエが選ぶワインと日本酒のペアリング',
    neighborhood: '西心斎橋1-8-22 第5エースビル 2F、アメリカ村側。心斎橋駅7番出口・四ツ橋駅5番出口から徒歩1分',
    gf_detail: '実質グルテンフリーではありません。somen で始まる tempura のコースで、衣がグルテンフリーという記載なし。',
    vegan_detail: '実質ヴィーガンではありません。コースに海老、うに、タコ、shirasu。ヴィーガンの記載なし。',
    notes: '[天ぷら・心斎橋、ふたりで営む12席の tempura とワインのペアリング] 心斎橋駅から1分の小さなおしゃれな tempura のカウンターで、ふたりで営み、ひとりが揚げ、もうひとりはソムリエとして料理ごとに手頃なワインや日本酒を合わせる。始まりは sudachi の効いた冷たい kuzu somen、続いて季節の小皿と、土鍋ご飯にたっぷりの uni、そして tempura。軽くて胃にやさしいという声。いちばんは天草の甘エビで、頭はカリッと揚げてある。野菜もおいしい。しめに濃厚なカレーもお好みで。何度も通って人を連れてくるという声も。ペアリング込みで15,000〜30,000円ほど。完全予約制、香水は控えて。',
  });
}

// ================================================================ 黒門すし酒場 花神総本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27124317/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_kuromon_sushi_sakaba_kashin', name: '黒門すし酒場 花神総本店 (Kuromon Sushi Sakaba Kashin Sohonten)', category: 'OMNI',
    lat: 34.666172, lng: 135.506945, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Raw oysters and sashimi come with ponzu or soy; fried oysters and oden are also on the menu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood and sushi bar.',
    hours_raw: 'Daily 9:00–16:00; irregular closures (Tabelog; the listing blurb says from 11:00, and diners report being served from about 10:00). No cards or e-money; PayPay, d Barai, Rakuten Pay and au PAY accepted (Tabelog). Non-smoking on the ground floor; smoking only upstairs (Tabelog). Second-floor room bookable from two people (Tabelog). Children welcome (Tabelog). Takeout (Tabelog).',
    hours: ALL(day(['09:00', '16:00'])), hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nippombashi 1-21-1, on the main street of Kuromon Market — 3 min from Kintetsu Nippombashi Stn',
    cuisine: 'Seafood and sushi bar in Kuromon Market, open from the morning (18 seats; room upstairs) · fish bought daily by the owner · oysters raw or grilled, 3 for ¥999 (October 2025) · bluefin tuna; tekka maki under ¥700 · scallops by size, served in parts · fugu with ponzu · five-kind sashimi platter · seafood rice bowl with egg yolk · fried oysters; oden · beer and sake for morning drinking',
    website: null, gmaps: gm('黒門すし酒場 花神総本店'), menu_url: null,
    notes: "[Seafood · a fair-priced seafood and sushi bar in Kuromon Market] The main shop of Kashin, a bright little seafood bar on Kuromon Market's main street that opens in the morning and welcomes a beer with breakfast. In a market known for high prices, diners single it out as fair: three big raw or grilled oysters for ¥999, tuna tekka maki for under ¥700, large scallops cut so you taste each part, fugu with ponzu, a five-kind sashimi platter and seafood bowls. Fried oysters and oden fill out the izakaya side. The owner buys fish daily and is cheerful company; staff are polite. It gets crowded, and the ground floor is cramped. No cards; QR payments only.",
    chef_bio: { chef_name: null, roles: ['owner'], origin: 'Moved to Kuromon Market\'s main street in April 2021 (Tabelog listing); main shop of a small group with an Umeda branch (January 2026 review).', background: 'Seafood and sushi izakaya with a staff-maintained Tabelog listing (Tabelog; 2023–2026 reviews).', philosophy: 'Fish bought daily by the owner; the owner wants Kuromon to be more than overpriced food (January 2026 review).', specialty: 'Oysters; bluefin tuna.',
      anecdotes: [
        { text: '"3 Fresh Oysters for JPY 999… Three for JPY 999, and the same price for both raw and grilled is a great deal!" — October 2025.', source: R + 'B516134106/' },
        { text: '"I heard that the owner of this restaurant strongly believes that Kuromon Market is not just about overpriced items!… Tuna Tekka – Amazing to get this for under JPY 700." — January 2026.', source: R + 'B506081062/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員の公式情報): 黒門すし酒場 花神総本店、大阪市中央区日本橋1-21-1、近鉄日本橋駅から徒歩3分、毎日9:00〜16:00、不定休、2021年4月に黒門市場のメイン通りへ移転、店主が毎日仕入れる魚、ぷりぷりの牡蠣と脂ののった本マグロ、昼飲み歓迎、2階は2人から貸切、カード・電子マネー不可、PayPay・d払い・楽天ペイ・au PAY可、1階禁煙・2階のみ喫煙可、18席、子ども歓迎、テイクアウト。口コミ(2023年11月〜2026年1月): 朝10時ごろから飲める、生でも焼きでも牡蠣3個999円 (2025年10月)、tekka maki 700円未満、ホタテは大小を選べ部位ごとに切ってくれる、fugu の ponzu、sashimi 5種盛り、卵黄ののった海鮮丼、カキフライ、oden 、明るい店内だが1階は狭い、店主は明るく楽しい人、スタッフが丁寧、梅田にも店がある。',
      confidence: 'medium', sources: [TB, R + 'B474788017/', R + 'B475772944/', R + 'B481965575/', R + 'B501659227/', R + 'B506081062/', R + 'B516134106/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Market bar; QR payments only (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区日本橋1-21-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Staff-maintained Tabelog listing; reviews dated January 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区日本橋一丁目21番1号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B516134106/', R + 'B506081062/'],
    price_note: 'Prices from October 2025 and January 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Oysters, raw or grilled (3)', '¥999', 'Seafood', 'ask', 'no', 'October 2025.', 'oysters'),
      it('', '', 'Tuna tekka maki', 'under ¥700', 'Sushi', 'ask', 'no', 'January 2026.', 'tekka'),
      it('', '', 'Five-kind sashimi platter', '', 'Seafood', 'ask', 'no', 'January 2026.', 'sashimi'),
      it('', '', 'Seafood rice bowl', '', 'Rice', 'ask', 'no', 'November 2023.', 'kaisendon'),
    ] }, {
    cuisine: '朝から開く黒門市場の海鮮と鮨の酒場 (18席、2階に部屋)・店主が毎日仕入れる魚・生か焼きの牡蠣3個999円 (2025年10月)・本マグロ、700円未満のtekka maki ・大小を選べ部位ごとに切ってくれるホタテ・fugu の ponzu・sashimi 5種盛り・卵黄ののった海鮮丼・カキフライ、oden ・朝飲みのビールと日本酒',
    neighborhood: '日本橋1-21-1、黒門市場のメイン通り。近鉄日本橋駅から徒歩3分',
    gf_detail: '要確認。生牡蠣やsashimi は ponzu か醤油で、カキフライやoden もある。',
    vegan_detail: 'ヴィーガンではありません。海鮮と鮨の店。',
    notes: '[海鮮・黒門市場、良心的な値段の海鮮と鮨の酒場] 花神の本店で、黒門市場のメイン通りにある明るく小さな海鮮の酒場。朝から開いて、朝ごはんにビールも歓迎。値段の高い市場の中で良心的という声が多く、大きな牡蠣は生でも焼きでも3個999円、tekka maki は700円未満、大きなホタテは部位ごとに切ってくれ、fugu の ponzu、sashimi 5種盛り、海鮮丼も。カキフライやoden など居酒屋の品も。店主が毎日魚を仕入れ、明るく楽しい人柄、スタッフも丁寧。混み合い、1階は狭め。カード不可、QR決済のみ。',
  });
}

// ================================================================ 炭火焼き無限バーグ 無限
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27134356/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_mugen_burg_namba', name: '炭火焼き無限バーグ 無限 (Sumibiyaki Mugen Burg Mugen)', category: 'OMNI',
    lat: 34.663987, lng: 135.503421, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; the hamburg steak recipe is not described, and condiments include ponzu, ketchup and other sauces.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an all-you-can-eat meat hamburg steak shop.',
    hours_raw: 'Daily 11:30–22:00 (last order 21:00); ends when the hamburg steak sells out; irregular closures (Tabelog). Weekday lunch special 11:30–15:00 (Tabelog). Bookings cancelled 15 minutes after the time (Tabelog). No cards or e-money; PayPay accepted (Tabelog). Non-smoking, but the charcoal makes a lot of smoke, so the shop advises against visits by high-school-age guests or younger (Tabelog). English-speaking staff (Tabelog).',
    hours: ALL(day(['11:30', '22:00'])), hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba Sennichimae 14-3 — 3 min from Namba Stn',
    cuisine: 'All-you-can-eat charcoal-grilled mini hamburg steaks, served one after another until you raise the "I\'m satisfied" sign (18 seats: 10 at the counter, 2 tables) · 30- or 60-minute courses · unlimited rice, eggs (for egg over rice), salad and condiments: salt, wasabi, yuzu pepper, grated daikon with ponzu, ketchup, chili oil, a very hot sauce · weekday lunch special · all-you-can-drink option',
    website: null, gmaps: gm('炭火焼き無限バーグ 無限 難波'), menu_url: TB + 'dtlmenu/',
    notes: "[Hamburg steak · all-you-can-eat charcoal mini hamburgs, Namba] A Namba counter that serves bite-sized hamburg steaks grilled over charcoal, one after another, until you hold up the 'I'm satisfied' board, a hamburg version of wanko-soba. Choose a 30- or 60-minute course; rice, eggs for egg-over-rice, salad and a long condiment line (wasabi, yuzu pepper, grated daikon and ponzu, chili oil, a fierce hot sauce) are unlimited too. Diners say the hamburgs come crisp outside and juicy inside; one managed 20 in an hour. Note that once you stop, you can't restart, so pace yourself, and service can lag when the two staff are busy. Smoky. No cards; PayPay accepted.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'All-you-can-eat hamburg steak shop (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Wanko-style charcoal hamburg steaks.',
      anecdotes: [
        { text: '"The system here is that hamburgers keep coming until you show the board that says \'I am satisfied.\'… once you stop, you cannot resume." — September 2026.', source: R + 'B536246950/' },
        { text: '"With a variety of seasonings available, such as wasabi, yuzu pepper, grated ponzu, and chili oil, you can customize the flavors to your liking." — October 2026, 30-minute course.', source: R + 'B538137585/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員の公式情報): 炭火焼き無限バーグ 無限、大阪市中央区難波千日前14-3、なんば駅から徒歩3分、毎日11:30〜22:00 (L.O. 21:00)、ハンバーグがなくなり次第終了、不定休、平日ランチ11:30〜15:00、15分遅れで自動キャンセル、カード・電子マネー不可、PayPay可、禁煙だが炭火の煙が多く高校生以下の来店はおすすめしない、英語を話すスタッフ、18席 (カウンター10、テーブル2)、wanko スタイルの炭火焼きハンバーグ食べ放題、卵・サラダ・ご飯・薬味もおかわり自由、飲み放題。口コミ(2026年9〜10月): 「満足です」の札を出すまで出てくる、一度止めると再開できない、30分か60分のコース、外はカリッと中はふんわりジューシー、ひと口サイズ、塩、わさび、yuzu こしょう、おろし ponzu、ケチャップ、ラー油、激辛ソース、卵かけご飯、1時間で20個という声、スタッフふたりで混むと間があくことも。',
      confidence: 'medium', sources: [TB, R + 'B536246950/', R + 'B536639241/', R + 'B537717272/', R + 'B537857594/', R + 'B537985508/', R + 'B538137585/'] },
    cultural_comfort: { level: 'english', note: 'English-speaking staff (Tabelog); timed courses.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波千日前14-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Staff-maintained Tabelog listing; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波千日前14番3号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537857594/', R + 'B538137585/'],
    price_note: 'No course prices in the reviews; about ¥2,000–3,000 per person (Tabelog, reviews).', last_checked: TODAY, items: [
      it('', '', '30-minute all-you-can-eat hamburg steak set', '', 'Courses', 'ask', 'no', 'October 2026.', 'thirty'),
      it('', '', '60-minute all-you-can-eat hamburg steak set', '', 'Courses', 'ask', 'no', 'October 2026.', 'sixty'),
      it('', '', 'Weekday lunch special', '', 'Lunch', 'ask', 'no', 'Tabelog listing.', 'lunch'),
    ] }, {
    cuisine: '「満足です」の札を出すまで次々出てくる炭火焼きの小さなハンバーグの食べ放題 (18席: カウンター10、テーブル2)・30分か60分のコース・ご飯、卵 (卵かけご飯に)、サラダ、薬味はおかわり自由: 塩、わさび、yuzu こしょう、大根おろしと ponzu、ケチャップ、ラー油、激辛ソース・平日のランチ・飲み放題',
    neighborhood: '難波千日前14-3。なんば駅から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。ハンバーグの材料の説明はなく、薬味には ponzu やケチャップなどのソースも。',
    vegan_detail: 'ヴィーガンではありません。肉のハンバーグの食べ放題の店。',
    notes: '[ハンバーグ・なんば、炭火焼きミニハンバーグの食べ放題] なんばのカウンターで、ひと口サイズのハンバーグを炭火で焼いて次々と出し、「満足です」の札を上げるまで続く、いわばハンバーグ版のwanko-soba。30分か60分のコースで、ご飯、卵かけご飯の卵、サラダ、わさび・yuzu こしょう・大根おろしと ponzu・ラー油・激辛ソースなどの薬味もおかわり自由。外はカリッと中はジューシーという声、1時間で20個食べた人も。一度止めると再開できないのでペース配分を。スタッフふたりで混むと間があくことも。煙が多い。カード不可、PayPay可。',
  });
}

// ================================================================ 中華バル JAM
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27084012/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['18:00', '01:00']);
  put({
    id: 'osaka_chuka_bar_jam_higashishinsaibashi', name: '中華バル JAM (Chuka Bar JAM)', category: 'OMNI',
    lat: 34.674065, lng: 135.503328, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; dishes include shumai, sweet-and-sour pork, saucy fried noodles and Chinese sauces.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: mapo tofu with meat, chicken, pork and seafood dishes; nothing described as vegan.',
    hours_raw: 'Mon–Sat 18:00–01:00; Sunday and holidays 18:00–24:00 (food last order 23:00); last entry 24:00 (22:00 on holidays); may close early if no one is in by last order; check Instagram for closures (Tabelog). Charge ¥300 per person, one-drink minimum (Tabelog). Over-20s only; heated tobacco only, no cigarettes (Tabelog). Cards and QR accepted; no e-money (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WD, 6: day(['18:00', '00:00']) }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 1-18-2, Amaki Bldg mezzanine 1F, a former snack bar — 5 min from Shinsaibashi or Nagahoribashi Stn',
    cuisine: 'Chinese bar dishes in a 9-seat bar (5 at the counter, one table) · mapo tofu ¥1,200, rich, spicy and numbing; beef-tendon mapo tofu · seafood fried noodles in thick sauce · char siu and lettuce fried rice · shrimp chili; shrimp mayo · mouthwatering chicken (yodare-dori) ¥980 · grilled shumai of Jinan mochi pork, 2 for ¥500 · black-vinegar sweet-and-sour Hiraboku Kinka pork ¥1,680 · bamboo shoots and firefly squid in Shaoxing wine (spring) · Shaoxing "Dragon" highball; baijiu jasmine highball',
    website: null, gmaps: gm('中華バル JAM 東心斎橋'), menu_url: TB + 'dtlmenu/',
    notes: "[Chinese · a 9-seat Chinese bar for mapo tofu, Higashi-Shinsaibashi] A tiny Chinese bar in a converted snack-bar space in Higashi-Shinsaibashi, nine seats and open to 1 am, serving serious Chinese food with cocktail-bar style. The mapo tofu (¥1,200) is the signature, meaty, spicy and numbing; the beef-tendon version has its own fan. Also the yodare-dori, whose sauce one diner wanted to drink, grilled shumai of Jinan mochi pork (2 for ¥500), black-vinegar sweet-and-sour pork, shrimp chili and seafood noodles in thick sauce. Pair with a Shaoxing highball or baijiu jasmine highball. The owner travels to research and source ingredients, and the room is friendly. ¥300 charge, one drink, adults only.",
    chef_bio: { chef_name: null, roles: ['owner'], origin: null, background: 'Chinese bar (Tabelog; 2025–2026 reviews).', philosophy: 'The owner researches dishes and sources ingredients on trips (November 2025 review).', specialty: 'Mapo tofu; Chinese bar dishes.',
      anecdotes: [
        { text: '"The Mapo Tofu was rich in meatiness, with a deep flavor, spiciness, and numbing sensation, all perfectly balanced… The sauce for the mouthwatering chicken was incredibly tasty!" — May 2026.', source: R + 'B527786144/' },
        { text: '"…what takes it to the next level is the \'Beef Tendon Mapo Tofu.\' I was amazed at how much more delicious it became with the addition of beef tendon." — July 2026.', source: R + 'B533158747/' },
      ],
      japanese_sources_summary: '食べログ: 中華バル JAM、大阪市中央区東心斎橋1-18-2 アマキビル 中1F、心斎橋駅・長堀橋駅から徒歩5分、月〜土18:00〜翌1:00、日・祝18:00〜24:00 (料理L.O. 23:00)、最終入店24:00 (祝22:00)、不定休 (Instagram で確認)、客がいなければ早めに閉めることも、チャージ300円・ワンドリンク制、20歳未満は入店不可、加熱式たばこのみ、9席 (カウンター5、テーブル1)、カード・QR可、電子マネー不可。口コミ(2025年4月〜2026年7月): スナックを改装した中華バル、麻婆豆腐1,200円、牛すじの麻婆豆腐、海鮮のあんかけ yakisoba、チャーシューとレタスのチャーハン、エビチリ、エビマヨ、よだれ鶏980円、Jinan mochi pork の焼き shumai2個500円、Hiraboku Kinka pork の黒酢酢豚1,680円、筍とホタルイカの紹興酒漬け、紹興酒の「ドラゴン」ハイボール、白酒のジャスミンハイボール、店主は仕入れや名店めぐりで研究熱心、人柄が温かい。',
      confidence: 'medium', sources: [TB, R + 'B506078752/', R + 'B519151907/', R + 'B527786144/', R + 'B532228820/', R + 'B533158747/', R + 'B534687677/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small bar; adults only; one-drink minimum (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-18-2 アマキビル 中1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated July 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目18番2号 (go) 4m; offset 7 m south of the Tabelog point to clear Sosaku Chuka Enishi (8.5 m); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B527786144/'],
    price_note: 'Prices from a May 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Mapo tofu', '¥1,200', 'Chinese', 'ask', 'no', 'May 2026.', 'mapo'),
      it('', '', 'Mouthwatering chicken (yodare-dori)', '¥980', 'Chinese', 'ask', 'no', 'May 2026.', 'yodare'),
      it('', '', 'Grilled shumai of Jinan mochi pork (2)', '¥500', 'Chinese', 'no', 'no', 'May 2026.', 'shumai'),
      it('', '', 'Black-vinegar sweet-and-sour Hiraboku Kinka pork', '¥1,680', 'Chinese', 'ask', 'no', 'May 2026.', 'subuta'),
    ] }, {
    cuisine: '9席の中華バル (カウンター5、テーブル1)・肉の旨みと辛さとしびれの mapo tofu 1,200円、牛すじの mapo tofu・海鮮のあんかけ yakisoba・チャーシューとレタスのチャーハン・エビチリ、エビマヨ・yodare-dori 980円・Jinan mochi pork の焼き shumai2個500円・Hiraboku Kinka pork の黒酢の酢豚1,680円・筍とホタルイカの紹興酒漬け (春)・紹興酒の「ドラゴン」ハイボール、白酒のジャスミンハイボール',
    neighborhood: '東心斎橋1-18-2 アマキビル 中1F、もとスナックの店。心斎橋駅・長堀橋駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。shumai 、酢豚、あんかけの麺、中華のたれなど。',
    vegan_detail: '実質ヴィーガンではありません。肉の入った mapo tofu、鶏、豚、海鮮の料理。ヴィーガンの記載なし。',
    notes: '[中華・東心斎橋、mapo tofu の9席の中華バル] 東心斎橋のスナックを改装した小さな中華バルで、9席、深夜1時まで。バーのような雰囲気で本格的な中華を。看板は mapo tofu (1,200円) で、肉の旨みと辛さとしびれ。牛すじの mapo tofu も人気。たれまで飲みたくなったという yodare-dori、Jinan mochi pork の焼き shumai (2個500円)、黒酢の酢豚、エビチリ、海鮮のあんかけ yakisoba も。合わせるなら紹興酒のハイボールか白酒のジャスミンハイボール。店主は仕入れや研究に熱心で、店の雰囲気も温かい。チャージ300円、ワンドリンク制、20歳以上のみ。',
  });
}

save();
