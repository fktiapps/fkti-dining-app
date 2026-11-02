// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first — lane osw3 (Tabelog id mod 4 = 2), batch 3.
//   + ダマン リュミエール 高島屋大阪店 DAMMANN lumière (Dammann Frères tea salon by the Lumière Group, Takashimaya Osaka 2F; Cafe 100)
//   + 北極 難波本店 Hokkyoku (handmade ice candy on Ebisubashi-suji since 1945; Ice cream/gelato 100)
//   + 心斎橋かわぐち Shinsaibashi Kawaguchi (14-seat binchotan yakitori with chicken sashimi; Yakitori 100 six times)
//   + 丑寅 Ushi Tora (Ura Namba standing bar of seafood and obanzai; Tachinomi 100 2025)
//   Lane: the first four ids with id mod 4 = 2 in `queue.mjs osaka next notable 80` (2026-11-01, after batch 2):
//   27055738, 27002810, 27011662, 27017138. None is in data/osaka.json (grep by Tabelog id, name, romaji, address).
//   Chain check. DAMMANN lumière: one of two DAMMANN lumière tea salons (Takashimaya Osaka, Daimaru Ashiya; dammann.jp
//   store page) in the Lumière Group's ten shops (k-coeur.com), whose head restaurant lumière is already in data
//   (osaka_lumiere_higashishinsaibashi); a different concept, not a fast-growing chain, so kept (as with Alcyon/Crêperie
//   Alcyon in batch 1). Hokkyoku: one shop (株式会社アークティック, hokkyoku.jp company page); the ice candies are also sold
//   at department-store events and KITTE Osaka (site news), not as branches. Kawaguchi: one Tabelog listing; no other
//   branch found. Ushi Tora: one listing. Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw3-3');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ ダマン リュミエール 高島屋大阪店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27055738/'; const R = TB + 'dtlrvwlst/'; const MENU = TB + 'dtlmenu/';
  const DJ = 'https://dammann.jp/'; const STORE = DJ + 'store/'; const GROUP = 'https://k-coeur.com/';
  const H = day(['10:00', '20:00']);
  put({
    id: 'osaka_dammann_lumiere_takashimaya', name: 'ダマン リュミエール 高島屋大阪店 (DAMMANN lumière Takashimaya Osaka)', category: 'OMNI',
    lat: 34.664519, lng: 135.501321, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The Tabelog listing says allergy information is available, but nothing is called gluten-free. Much of the food is wheat (pasta, croque monsieur, French toast, scones, pancakes, baguettes with the lunch); the galettes are not described as buckwheat-only. Teas themselves are leaf blends. The steaks and the pudding are the dishes to ask about.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. More than 60 Dammann Frères teas (official site) served in a pot are the safe ground; milk tea is an option (September 2026). The food uses cream, egg, butter, cheese, meat and seafood; no vegan dish is listed.',
    hours_raw: 'Daily 10:00–20:00 (last order 19:00); closed when Takashimaya Osaka closes (Tabelog; official site). Reservations on weekdays only, for two or more; a private room for up to 6 on weekdays for groups of 5 or more (Tabelog). Afternoon tea is served on weekdays from 13:00 (shop menu on Tabelog; a September 2026 diner missed it on a weekend). Lunch fills up: half full at 11:45, full by 12:30 on a weekday (October 2026); one diner queued (September 2026). Cards, e-money and QR accepted; non-smoking; parking in the store\'s contracted car park (Tabelog). Seats: 36 (Tabelog) or 52 including the private room (official store page). Opened 3 March 2011 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba 5-1-5, Takashimaya Osaka 2F, among the brand boutiques — by Namba Stn (Midosuji Line), Nankai Namba and Kintetsu Osaka-Namba',
    cuisine: 'French tea salon and boutique of Dammann Frères teas with food from the lumière kitchen (prices from the shop menu on Tabelog, tax included, read November 2026) · over 60 teas (official site), served in a pot with the leaves removed (October 2026), numbered on the menu; e.g. グールース, a French take on Earl Grey (official site; "Goulus" in a September 2026 review), Jardin Bleu, Oriental Noa (Ceylon with passion fruit, peach and wild strawberry), Anichai with ginger, Oriental rooibos (2025–2026 reviews) · afternoon tea with free-flow tea ¥4,950, weekdays from 13:00 (logo macarons, salmon, chocolate-orange in September 2026) · galettes ¥1,760–¥1,870 (prosciutto with tomato sauce; salmon with mushroom cream; shrimp with lobster sauce and a warm egg); pastas ¥1,760–¥1,870; vegetable croque monsieur ¥1,760; healthy lunch set ¥1,430 (salad, pumpkin soup and two baguettes in October 2026); a seasonal one-plate lunch of fish, meat and vegetables on a large Ginori plate (July and October 2026); Japanese strip loin ¥5,500 and bavette ¥4,400 with bread, soup and salad · sweets ¥1,430–¥1,980: modern French toast, pancakes with berry sauce, chocolate cake with cream espuma, a Mont Blanc, a "Dragon Egg" and Jersey-milk pudding, the special scone; seasonal dessert set (a grape parfait with rooibos aroma and a choice of three teas) ¥2,200 (September 2026)',
    website: STORE, gmaps: gm('ダマン リュミエール 高島屋大阪店'), menu_url: MENU,
    notes: "[Café · Namba, a French tea salon in Takashimaya] Up on Takashimaya's second floor among the brand boutiques, a calm, black-toned salon that the official site calls Japan's first tea salon and boutique made with Dammann Frères, the Paris tea house given France's tea monopoly by Louis XIV in 1692, and chef Yasushi Karato of lumière in Shinsaibashi. Pick from more than 60 teas, served in a pot with the leaves taken out so they do not stew, alongside food from the lumière side: galettes folded around shrimp in lobster sauce or salmon, a seasonal one-plate lunch, a croque monsieur, steaks, and sweets from French toast to a Mont Blanc. The weekday afternoon tea (¥4,950, from 13:00) comes with free-flow tea. Weekday lunches fill by 12:30. Tabelog Cafe 100 in 2021 and Cafe WEST 100 in 2025. Teas and tea accessories are sold too. Open daily 10:00–20:00 with the store.",
    chef_bio: { chef_name: 'Yasushi Karato (唐渡 泰)', roles: ['Producer: chef Yasushi Karato of lumière (osaka_lumiere_higashishinsaibashi), head of the Lumière Group (official sites)', 'Run by the Lumière Group as one of its two DAMMANN lumière tea salons (k-coeur.com; dammann.jp)'], origin: null,
      background: 'Per dammann.jp: DAMMANN lumière is a collaboration between Dammann Frères and the French restaurant lumière, produced by Yasushi Karato, and Japan\'s first tea salon and boutique for the brand; besides Dammann Frères teas and accessories it serves seasonal dishes and desserts with more than 60 teas. Dammann Frères dates its history to 1692, when Louis XIV granted サー・ダマン (as written) the sole right to sell tea in France, and blends more than 300 teas, among them グールース, a French take on Earl Grey. The second DAMMANN lumière is in Daimaru Ashiya. Per the store page and Karato\'s profile there: trained at many famous restaurants and hotels, opened lumière in 2006, imports Dammann Frères, and heads a ten-shop group. This salon opened on 3 March 2011 (Tabelog). A September 2026 diner calls it "a well-known collaboration between Chef Takawata and Daman Frere" (as written).',
      philosophy: null, specialty: 'Dammann Frères teas in the pot; galettes; afternoon tea; French toast.',
      anecdotes: [
        { text: '"When I arrived at 11:45 AM, about half of the seats were filled, but by 12:30 PM, it was completely full. It\'s clear that this place is popular even on weekdays." — October 2026, a sixth visit, one-plate lunch with Anichai tea.', source: R + 'B514327425/' },
        { text: '"I appreciated that [the staff] removed the tea leaves, so it didn\'t become overly bitter even if I took my time." — October 2026, Darjeeling with a sweets set.', source: R + 'B537116025/' },
        { text: '"There was a brief explanation about Goulus included, which I thought was a nice touch." — September 2026, the seasonal dessert set, ¥2,200.', source: R + 'B536184235/' },
      ],
      japanese_sources_summary: 'ダマンフレール公式サイト (dammann.jp): ダマンフレールの歴史は1692年、ルイ14世からフランス国内での紅茶の独占販売権を許可されたことに始まる、「グールース」をはじめ300種以上のブレンドティー、12年連続でミシュランの星を獲得したシェフ唐渡泰がオーナーシェフのフレンチレストラン「リュミエール」とのコラボレーションによる日本初のティーサロン&ブティック「ダマンリュミエール」、旬の食材の料理やデザートと60種類以上の紅茶。店舗: ダマンリュミエール 高島屋大阪店、難波5丁目1番5号 高島屋大阪店2F、10:00-20:00 (LO19:00)、定休日は施設に準ずる、52席 (個室あり)。芦屋店 (大丸芦屋店1階) も。リュミエールグループ (k-coeur.com): ティーサロンとして DAMMANN lumière 高島屋大阪店と芦屋店。食べログ (店舗会員): カフェ・フレンチ・スイーツ、平日のみ2名から予約可、個室は平日5名以上、36席、禁煙、カード・電子マネー・QR可、アレルギー表示あり、2011年3月3日オープン、カフェ 百名店 2021、カフェ WEST 百名店 2025。食べログのメニュー (英訳で確認): アフタヌーンティー4,950円 (平日13時から、紅茶はおかわり自由)、ガレット1,760〜1,870円、パスタ、クロックムッシュ、ヘルシーランチセット1,430円、ステーキ、フレンチトースト1,980円、モンブラン、スコーン。口コミ(2025年9月〜2026年10月): 番号で選ぶ紅茶、ポットで茶葉を抜いて出す、Ginori の大皿のワンプレートランチ、エビのガレット、平日の昼は満席に、季節のデザートセット2,200円、グールースの説明つき、週末はアフタヌーンティーなし。',
      confidence: 'medium', sources: [TB, MENU, DJ, STORE, GROUP, R + 'B514327425/', R + 'B535670306/', R + 'B535934441/', R + 'B536071587/', R + 'B536075696/', R + 'B536081420/', R + 'B536184235/', R + 'B536377341/', R + 'B536553551/', R + 'B537116025/', R + 'B538077139/', R + 'B538172578/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Teas are numbered on the menu; reservations on weekdays only. No English evidence found.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['Tabelog listing: "Allergy information available".'] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波5-1-5 大阪タカシマヤ 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and the dammann.jp store page; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波五丁目1番5号 (go) 68m (a block-sized department store; the GSI point is the parcel centre); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU, R + 'B536184235/'],
    price_note: 'Prices from the shop-maintained Tabelog menu (tax included; read November 2026; English translation); dessert set from a September 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Afternoon tea with free-flow Dammann Frères tea (weekdays from 13:00)', '¥4,950', 'Tea', 'no', 'no', 'Shop menu; September 2026.', 'afternoon_tea'),
      it('', '', 'Shrimp galette with lobster-flavoured sauce', '¥1,870', 'Meals', 'ask', 'no', 'Shop menu; September 2026.', 'shrimp_galette'),
      it('', '', 'Salmon galette with mushroom cream sauce', '¥1,760', 'Meals', 'ask', 'no', 'Shop menu; October 2025 and October 2026.', 'salmon_galette'),
      it('', '', 'Vegetable-loaded croque monsieur', '¥1,760', 'Meals', 'no', 'no', 'Shop menu; September 2026.', 'croque_monsieur'),
      it('', '', 'Healthy lunch set', '¥1,430', 'Meals', 'no', 'ask', 'Shop menu; salad, pumpkin soup and baguettes in October 2026.', 'healthy_lunch'),
      it('', '', 'Modern French toast', '¥1,980', 'Sweets', 'no', 'no', 'Shop menu; January 2026.', 'french_toast'),
      it('', '', 'Dragon Egg and Jersey-milk pudding', '¥1,430', 'Sweets', 'ask', 'no', 'Shop menu.', 'pudding'),
      it('', '', 'Seasonal dessert set (grape parfait with rooibos aroma, choice of three teas)', '¥2,200', 'Sweets', 'ask', 'no', 'September 2026.', 'dessert_set'),
    ] }, {
    cuisine: 'ダマンフレールの紅茶のティーサロン&ブティックで、料理はリュミエール (値段は食べログの店のメニュー、税込み、2026年11月に確認)・60種類以上の紅茶 (公式サイト)、ポットで茶葉を抜いて出す (2026年10月)、メニューには番号。たとえばグールース、Jardin Bleu、Oriental Noa (セイロンにパッションフルーツ、桃、野いちご)、生姜の Anichai、Oriental ルイボス (2025〜2026年の口コミ)・平日13時からのアフタヌーンティー、紅茶はおかわり自由で4,950円 (2026年9月はロゴのマカロン、サーモン、チョコレートとオレンジ)・ガレット1,760〜1,870円 (生ハムとトマトソース、サーモンときのこのクリーム、エビとオマール風味のソースに温かい卵)、パスタ1,760〜1,870円、野菜たっぷりのクロックムッシュ1,760円、ヘルシーランチセット1,430円 (2026年10月はサラダ、かぼちゃのスープ、2種類のバゲット)、魚、肉、野菜を Ginori の大皿にのせた季節のワンプレートランチ (2026年7月と10月)、国産サーロイン5,500円とバベット4,400円 (パン、スープ、サラダ付き)・スイーツ1,430〜1,980円: フレンチトースト、ベリーソースのパンケーキ、エスプーマのクリームのチョコレートケーキ、モンブラン、Dragon Egg と Jersey 牛乳のプリン、スコーン。季節のデザートセット (ルイボス香るぶどうのパフェと3種から選ぶ紅茶) 2,200円 (2026年9月)',
    neighborhood: '難波5丁目1番5号 高島屋大阪店2F、ブランドの店が並ぶフロア。地下鉄なんば駅、南海なんば駅、近鉄大阪難波駅から',
    gf_detail: '要確認。食べログにはアレルギー表示ありとあるが、グルテンフリーの説明はない。料理の多くは小麦 (パスタ、クロックムッシュ、フレンチトースト、スコーン、パンケーキ、ランチのバゲット)。ガレットがそば粉だけかは書かれていない。紅茶そのものは茶葉のブレンド。ステーキとプリンは確認を。',
    vegan_detail: '要確認。ポットで出るダマンフレールの60種類以上の紅茶 (公式サイト) は安心、ミルクティーも選べる (2026年9月)。料理は生クリーム、卵、バター、チーズ、肉、魚介を使い、ヴィーガンの料理は載っていない。',
    notes: '[カフェ・難波、高島屋のフランスの紅茶のサロン] 高島屋の2階、ブランドの店が並ぶ一角にある、黒を基調にした落ち着いたサロン。公式サイトによれば、1692年にルイ14世から紅茶の独占販売権を得たパリのダマンフレールと、心斎橋のリュミエールの唐渡泰シェフが組んだ日本初のティーサロン&ブティック。60種類以上の紅茶は茶葉を抜いたポットで出てくるので、ゆっくり飲んでも渋くならない。料理はリュミエールの側から: エビのオマール風味のソースやサーモンのガレット、季節のワンプレートランチ、クロックムッシュ、ステーキ、フレンチトーストからモンブランまでのスイーツ。平日のアフタヌーンティー (4,950円、13時から) は紅茶がおかわり自由。平日の昼は12時半には満席に。食べログ カフェ 百名店 2021、カフェ WEST 百名店 2025。紅茶や茶器も買える。高島屋に合わせて毎日10時〜20時。',
  });
}

// ================================================================ 北極 難波本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27002810/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://hokkyoku.jp/'; const HIST = SITE + 'history/'; const CO = SITE + 'company/'; const LINE = SITE + 'lineup/'; const ABOUT = SITE + 'about-us/';
  const H = day(['10:30', '20:00']);
  put({
    id: 'osaka_hokkyoku_namba_honten', name: '北極 難波本店 (Hokkyoku Namba Honten)', category: 'OMNI',
    lat: 34.665776, lng: 135.501428, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The milk ice candy\'s label lists sweetened condensed milk, sugar, starch and flavouring (October 2026 review); the type of starch is not given, and the other flavours\' ingredients are not published.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The milk ice candy is made with condensed milk and the soft serve with Hokkaido milk; the azuki (Tokachi beans, per the shop), fruit, ramune and matcha candies are not described, so ask about milk in them.',
    hours_raw: 'Daily 10:30–20:00, open all year (official company page; an October 2026 review gives the same). Tabelog lists 10:00–20:00. No reservations (Tabelog). The ground floor is takeaway only, with a bin but no seats (October 2026); the 2F café opened on 25 April 2023 (Tabelog) and asks for one drink per person, with a last order (October 2026). Free dry ice for up to an hour with six candies (October 2026). Cards (VISA, Master, JCB, AMEX, Diners) and QR (PayPay, d Barai, Rakuten Pay, au PAY); no e-money (Tabelog). Non-smoking; children welcome (Tabelog). Online shop and shipping (official site). Founded 1945 (official site).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba 3-8-22, on the Ebisubashi-suji shopping street (light-blue sign with two penguins) — 3 min from Namba Stn (Midosuji Line)',
    cuisine: 'Handmade ice candy since 1945 (official site; prices tax included) · ice candy ¥200: milk, cocoa, matcha, azuki, pineapple; ¥230: mixed juice, mango, strawberry, ramune, grape (new in August 2026) · cup ice ¥380: mango, milk, hyuganatsu, Osaka mixed juice · soft serve ¥500: Hokkaido milk, Uji matcha, or the two mixed (October 2026) · reduced-price candies in the case at times, ¥150–¥180 (October 2026) · a separate menu at the 2F café (October 2026) · penguin goods',
    website: SITE, gmaps: gm('北極 難波本店 アイスキャンデー'), menu_url: LINE,
    notes: "[Sweets · Namba, Osaka's 1945 ice-candy shop] On the Ebisubashi-suji shopping street under a light-blue sign with two penguins, the ice-candy maker Osaka has known since just after the war. The founder started in 1945, when hardly any shop around Namba had food to sell, wanting to give children and women something cold and sweet, using precious sugar and selling each candy for ¥20 (official site). The milk, azuki and pineapple of that first year are still made, now with cocoa (first made in 1946 with cocoa imported from the occupation forces), matcha, strawberry, mango, ramune, mixed juice and, since August 2026, grape. Eight craftsmen make about 6,000 a day by hand, sweetened with white sugar crystals rather than sweeteners, with Tokachi azuki and diagonal sticks of Yoshino hinoki and cedar. Most are ¥200–¥230; soft serve of Hokkaido milk and Uji matcha is ¥500. Takeaway downstairs, a café upstairs since 2023. Tabelog Ice cream/gelato 100 in 2023 and 2026. Open daily 10:30–20:00.",
    chef_bio: { chef_name: null, roles: ['Representative: 久保田光恵 (as written; no romaji given), since 2005, of 株式会社アークティック (official company page)', 'Eight ice-candy craftsmen (official site)'], origin: null,
      background: 'Per the official history and company pages: founded in Namba in 1945 (昭和20年), selling milk, azuki and pineapple ice candy at ¥20; in 1946 made cocoa ice candy with cocoa imported from the occupation forces; radio advertising from 1952 and television and film advertising from 1953; in 1955 the Hokkyoku Building was completed, with a factory in the basement and a café and light meals on the first and second floors, also selling Western cakes and Japanese sweets; it was the second shop in Namba with an automatic door and brought in a colour television, filling the room for 力道山 wrestling broadcasts. In 2005 久保田光恵 became representative and 株式会社アークティック was set up. The company page recalls children who came for candy then and now buy them as gifts as grown men. Eight craftsmen make about 6,000 candies a day, 700,000 a year. The 2F café opened on 25 April 2023 (Tabelog). Tabelog Ice cream/gelato 100 in 2023 and 2026.',
      philosophy: 'From the founder on: a cold, tasty ice candy for children and women in the hungry years after the war; a place to relax on the Ebisubashi shopping street; the same handmade taste then and now (official site).', specialty: 'Milk ice candy; azuki ice candy; soft serve.',
      anecdotes: [
        { text: '"My parents used to frequent it when [my parents] were kids." — October 2026, soft serve mix, ¥500.', source: R + 'B537192641/' },
        { text: '"The ice candy here features a stick (a chopstick from Yoshino, Nara) inserted diagonally, which is a unique touch for easier eating." — October 2026, milk ice candy ¥200.', source: R + 'B536942484/' },
        { text: '"Thanks to years of commercials, it\'s hard to find someone who hasn\'t heard of it." — October 2026.', source: R + 'B537358422/' },
      ],
      japanese_sources_summary: '公式サイト (hokkyoku.jp): 北極、なんば戎橋筋、大阪名物手作りアイスキャンデー、創業昭和20年、当初からの味「ミルク」「あずき」「パイン」、現在は「ココア」「イチゴ」「抹茶」「マンゴー」「ラムネ」「ぶどう」も、職人が一本一本手作り。歴史: 昭和20年大阪難波にて創業 (当時20円)、昭和21年進駐軍からココアを輸入しココア味を製造、昭和27年ラジオCM、昭和28年東宝映画とテレビCM、昭和30年北極ビル完成 (地下に工場、1階・2階で喫茶・軽食、洋菓子や和菓子も)、難波で2番目に自動ドア、カラーテレビで力道山のプロレス中継は毎回満席、平成17年久保田光恵が代表に就任、株式会社アークティック設立。会社概要: 終戦直後に初代が「せめて、子供達や女性にだけでも冷たくて美味しいアイスキャンデーを造ってあげたい」と思ったのがきっかけ、難波3-8-22、10:30-20:00、年中無休。こだわり: 奈良県吉野産のひのきと杉の棒を斜めに刺す、白双糖を使い甘味料は使わない、北海道の十勝産あずき100%、8人の職人で1日6000本、年間70万本。商品: ミルク・ココア・抹茶・あずき・パイン200円、ミックスジュース・マンゴー・イチゴ・ラムネ・ぶどう230円、カップ380円 (マンゴー、ミルク、日向夏、大阪名物ミックスジュース)。食べログ: アイスクリーム・ジェラート 百名店 2023・2026、2023年4月25日に2階にカフェ、予約不可、カード・QR可。口コミ(2026年10月〜11月): ソフトクリーム500円 (北海道のミルク、宇治抹茶、ミックス)、1階は持ち帰りのみ、2階カフェはワンドリンク制、6本でドライアイス1時間無料、値引きのアイス。',
      confidence: 'medium', sources: [SITE, HIST, CO, LINE, ABOUT, TB, R + 'B480609866/', R + 'B515817366/', R + 'B536942484/', R + 'B537192641/', R + 'B537299983/', R + 'B537358422/', R + 'B537630613/', R + 'B537850745/', R + 'B537893650/', R + 'B538378214/', R + 'B538421742/', R + 'B538450861/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Choose from the two cases and pay; staff are friendly (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波3-8-22',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (news into September 2026) and Tabelog; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波三丁目8番22号 (go) 24m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [LINE, R + 'B536942484/'],
    price_note: 'Ice candy and cup prices from the official line-up page (tax included; read November 2026); soft serve from October 2026 reviews.', last_checked: TODAY, items: [
      it('ミルク', '', 'Milk ice candy', '¥200', 'Ice candy', 'ask', 'no', 'Official site; condensed milk, sugar, starch, flavouring (October 2026 label).', 'milk'),
      it('あずき', '', 'Azuki ice candy (Tokachi azuki)', '¥200', 'Ice candy', 'ask', 'ask', 'Official site.', 'azuki'),
      it('パイン', '', 'Pineapple ice candy', '¥200', 'Ice candy', 'ask', 'ask', 'Official site; one of the 1945 flavours.', 'pineapple'),
      it('ミックスジュース', '', 'Mixed juice ice candy', '¥230', 'Ice candy', 'ask', 'ask', 'Official site; November 2026.', 'mixed_juice'),
      it('（カップ）大阪名物ミックスジュース', '', 'Cup ice: Osaka mixed juice', '¥380', 'Cups', 'ask', 'ask', 'Official site.', 'cup_mixed_juice'),
      it('', '', 'Soft serve (Hokkaido milk, Uji matcha, or mix)', '¥500', 'Soft serve', 'ask', 'no', 'October 2026.', 'soft_serve'),
    ] }, {
    cuisine: '1945年から手作りのアイスキャンデー (公式サイト、税込み)・アイスキャンデー200円: ミルク、ココア、抹茶、あずき、パイン。230円: ミックスジュース、マンゴー、イチゴ、ラムネ、ぶどう (2026年8月に新登場)・カップ380円: マンゴー、ミルク、日向夏、大阪名物ミックスジュース・ソフトクリーム500円: 北海道のミルク、宇治抹茶、ミックス (2026年10月)・ケースに値引きのアイスがあることも、150〜180円 (2026年10月)・2階のカフェは別メニュー (2026年10月)・ペンギンのグッズ',
    neighborhood: '難波3-8-22、戎橋筋商店街 (水色にペンギン2羽の看板)。地下鉄なんば駅から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。ミルクの表示は加糖練乳、砂糖、でん粉、香料 (2026年10月の口コミ)。でん粉の種類は書かれておらず、ほかの味の原材料は公開されていない。',
    vegan_detail: '要確認。ミルクは練乳、ソフトクリームは北海道のミルク。あずき (店によれば十勝産)、フルーツ、ラムネ、抹茶は説明がないので、乳を使うか確認して。',
    notes: '[スイーツ・難波、1945年からの大阪のアイスキャンデー] 戎橋筋商店街、ペンギン2羽の水色の看板。戦後まもなくから大阪で知られるアイスキャンデーの店。創業は昭和20年、難波あたりに食べ物を売る店がほとんどなかったころ、初代が「せめて、子供達や女性にだけでも冷たくて美味しいアイスキャンデーを」と、貴重な砂糖を使い1本20円で売り始めた (公式サイト)。その年のミルク、あずき、パインは今も作られ、ココア (昭和21年に進駐軍から輸入したココアで)、抹茶、イチゴ、マンゴー、ラムネ、ミックスジュース、2026年8月からはぶどうも。8人の職人が1日約6000本を手作りし、甘味料ではなく白双糖、十勝産のあずき、吉野のひのきと杉の棒を斜めに刺す。多くは200〜230円、北海道のミルクと宇治抹茶のソフトクリームは500円。1階は持ち帰り、2階は2023年からカフェ。食べログ アイスクリーム・ジェラート 百名店 2023・2026。毎日10時半〜20時。',
  });
}

// ================================================================ 心斎橋かわぐち
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27011662/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://kawaguchi-9489.com/';
  const H = day(['17:00', '00:00']);
  put({
    id: 'osaka_shinsaibashi_kawaguchi', name: '心斎橋かわぐち (Shinsaibashi Kawaguchi)', category: 'OMNI',
    lat: 34.674465, lng: 135.502684, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Salt skewers and chicken sashimi (with wasabi or salt) are the plainest; tsukune comes with sauce (October 2026), the rice with raw egg uses soy-sauce koji (April 2025), and side dishes include kara-age, keema curry and truffle salt bread.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken restaurant. Vegetable skewers (shiitake, tomato, ginkgo, raw-eatable corn in season) are on the menu, but nothing is described as vegan.',
    hours_raw: 'Daily 17:00–24:00 (last order 23:30) (official site; Tabelog). Reservations through the official site (Tabelog; official site); often fully booked even on the day, so book ahead (2025–2026 reviews), though a diner walked in after 22:00 on a July 2026 holiday. Cards: JCB, AMEX and Diners only; no e-money or QR (official site; Tabelog). Smoking allowed (official site). 14 seats at a counter facing the charcoal, plus private rooms for 4, 6 or 8 (official site; Tabelog); an October 2025 diner mentions a separate area on the third floor. No parking (official site).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 1-19-11, ピテカントロプスビル 1F, in an alley of the Unagidani area — 3 min from Shinsaibashi Stn',
    cuisine: 'Binchotan yakitori of morning-slaughtered jidori, with chicken sashimi (official site) · the sashimi platter of six cuts (breast, thigh, tender, heart, gizzard, liver) that diners call the must-order; seasoned liver sashimi ¥850; red-chicken yukke; smoked liver; tataki · skewers: neck, white liver, heart, gizzard, tamahimo, chicken tail (served medium-rare, October 2026), tsukune with egg yolk, breast with wasabi or ume-shiso, "sori", a rare cut (2025–2026 reviews); vegetables such as Tokushima shiitake, tomato and ginkgo · side dishes: tamahimo shigure-ni (a soy simmer), dashimaki with minced chicken inside, kara-age, potato salad, truffle salt bread with keema curry, a limited five servings of keema curry, sweet-potato brûlée · finish with rice and raw egg · courses ¥6,600 (official site) and an omakase of six skewers and three dishes (September 2026) · a back bar of premium sake, plus shochu and wine (Tabelog; 2024 review) · diners report ¥6,000–¥14,999 a head (2026). The chicken is named as Satsuma chicken in May 2024 and October 2026 reviews and as Ise Akadori from Mie in another October 2026 review',
    website: SITE, gmaps: gm('心斎橋かわぐち 焼鳥'), menu_url: SITE,
    notes: "[Yakitori · Higashi-Shinsaibashi, chicken sashimi and binchotan skewers in an alley] A 14-seat counter in a Shinsaibashi back alley, where you watch each skewer grilled over the charcoal in front of you; the official site counts six Tabelog Yakitori 100 selections (2018–2024). Start with the six-cut platter of morning-slaughtered chicken sashimi, which diners call the dish you would regret skipping, then move to the offal skewers the kitchen is known for (liver that even liver-haters eat, white liver, heart, neck, tamahimo) and finish with rice and raw egg. Side dishes are generous: a dashimaki with minced chicken inside, keema curry, truffle salt bread, a sweet-potato brûlée. It is almost always full, so book through the site; one diner who has come for over ten years, with children, recommends it to anyone asking for yakitori, while a busy September 2026 night meant an hour for the first three skewers. Smoking is allowed; JCB, AMEX and Diners only. Open daily 17:00–24:00.",
    chef_bio: { chef_name: null, roles: ['Grill cooks and a manager (unnamed; "the person grilling in front of the charcoal", April 2026; "Thank you, manager", August 2026)'], origin: null,
      background: 'Per the official site (built on AutoReserve and linked from the Tabelog listing): a charcoal yakitori shop in a Shinsaibashi alley, selected for Tabelog Yakitori 100 in 2018, 2019, 2021, 2022, 2023 and 2024; morning-slaughtered jidori, a six-cut sashimi platter, offal skewers grilled so the liver stays soft and the heart juicy, tamahimo shigure-ni (a soy simmer), Tokushima shiitake, and rice with raw egg to finish; 14 seats including the counter and small private rooms. No opening date or owner is given in the sources read. Diners name the chicken as Satsuma chicken (May 2024; a Satsuma chicken tataki in October 2026) and as Ise Akadori from Mie (another October 2026 review). A September 2026 reviewer calls the shop "Kawaguchi Hanare", a name not found elsewhere.',
      philosophy: 'Freshness of morning-slaughtered chicken and careful charcoal heat in every skewer (official site).', specialty: 'Chicken sashimi platter; white liver; rice with raw egg.',
      anecdotes: [
        { text: '"I\'ve been a regular at this restaurant for over 10 years, and I used to visit every month. My kids love it too!" — August 2026.', source: R + 'B534029940/' },
        { text: '"I had the chicken tail served medium-rare, and it was exceptional as well! Only restaurants confident in their freshness serve chicken tail this way." — October 2026, a third visit.', source: R + 'B256612517/' },
        { text: '"Given the crowd, it was understandable that [the staff] forgot my drink order, and it took an hour for just three skewers to arrive." — September 2026, the omakase course.', source: R + 'B517990480/' },
      ],
      japanese_sources_summary: '公式サイト (kawaguchi-9489.com): 心斎橋かわぐち、心斎橋の路地で朝引き地鶏を炭火で焼き上げる百名店の焼き鳥店、心斎橋駅から徒歩3分、食べログ焼鳥百名店に2018・2019・2021・2022・2023・2024年の6度選出、朝引き地鶏のむね・もも・ささみ・こころ・ずり・きもの6種盛りお造り、内臓系の炭火串 (レバーは柔らかくトロトロ、こころはジューシー)、玉ひもしぐれ煮、徳島産じいじいしいたけ、〆の卵かけご飯、6,000円コース (6,600円)、味肝のお造り850円、カウンター席と少人数向けの個室で14席、予約必須、月〜日 17:00〜24:00 (L.O.23:30)、駐車場なし、カードは JCB・AMEX・Diners、電子マネー・QR不可、店内で喫煙可、東心斎橋1-19-11 ピテカントロプスビル 1F。食べログ: 焼き鳥・鶏料理・創作料理、予約は公式サイトから、個室 (4、6、8名)、日本酒・焼酎・ワインにこだわり。口コミ(2025年4月〜2026年10月): お造り盛り合わせは必須、白レバー、ぼんじり、つくね、ささみのわさび、トリュフの塩パン、キーマカレー、肉入りのだし巻き、卵かけご飯、いつも満席で予約必須、10年以上通う人も、Ise Akadori (2026年10月)。',
      confidence: 'medium', sources: [SITE, TB, R + 'B256612517/', R + 'B471689631/', R + 'B517990480/', R + 'B532467744/', R + 'B534029940/', R + 'B534556176/', R + 'B534632272/', R + 'B534743830/', R + 'B535118109/', R + 'B535470299/', R + 'B537105907/', R + 'B537258677/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book on the official site, which has an English version; order à la carte or a course at the counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-19-11 ピテカントロプスビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (current hours and course) and Tabelog; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.674420, 135.502684); same building as Stand Catenaccio (osaka_stand_catenaccio_higashishinsaibashi, address_ja "東心斎橋1-19-11 B1F", pinned on this exact Tabelog point), so this pin is offset ~5 m north to keep the two apart; GSI 大阪府大阪市中央区東心斎橋一丁目19番11号 (go) 10m from the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE, R + 'B471689631/', R + 'B517990480/'],
    price_note: 'Course and liver sashimi from the official site (read November 2026); dishes from 2025–2026 reviews, unpriced.', last_checked: TODAY, items: [
      it('6,000円コース', '', 'Course', '¥6,600', 'Course', 'ask', 'no', 'Official site.', 'course'),
      it('味肝のお造り', '', 'Seasoned liver sashimi', '¥850', 'Sashimi', 'ask', 'no', 'Official site; Tabelog menu.', 'liver_sashimi'),
      it('', '', 'Chicken sashimi platter (breast, thigh, tender, heart, gizzard, liver)', '', 'Sashimi', 'ask', 'no', 'Official site; 2025–2026 reviews.', 'sashimi_platter'),
      it('', '', 'White liver skewer', '', 'Skewers', 'ask', 'no', 'March and July 2026.', 'white_liver'),
      it('', '', 'Tsukune with egg yolk', '', 'Skewers', 'ask', 'no', 'April 2026.', 'tsukune'),
      it('', '', 'Rice with raw egg (soy-sauce koji)', '', 'Rice', 'ask', 'no', 'April 2025 and April 2026.', 'tkg'),
    ] }, {
    cuisine: '朝引き地鶏の炭火焼き鳥とお造り (公式サイト)・むね、もも、ささみ、こころ、ずり、きもの6種盛りお造り、口コミでは必ず頼むべき一皿。味肝のお造り850円、赤鶏のユッケ、きもの燻製、たたき・串: せせり、白レバー、こころ、ずり、玉ひも、ぼんじり (2026年10月はレアで)、卵黄のつくね、ささみのわさびや梅しそ、「そり」(2025〜2026年の口コミ)、徳島産じいじいしいたけ、トマト、ぎんなんなどの野菜・一品: 玉ひもしぐれ煮、鶏ひき肉入りのだし巻き、kara-age、ポテトサラダ、キーマカレーをはさんだトリュフの塩パン、1日5食のキーマカレー、さつまいものブリュレ・〆は卵かけご飯・6,000円コース (6,600円、公式サイト)、串6本と一品3つのおまかせ (2026年9月)・プレミアムな日本酒、焼酎、ワイン (食べログ、2024年の口コミ)・口コミの予算は1人6,000〜14,999円 (2026年)。鶏は2024年5月と2026年10月の口コミでは Satsuma の鶏、2026年10月の別の口コミでは Mie の Ise Akadori',
    neighborhood: '東心斎橋1-19-11 ピテカントロプスビル 1F、Unagidani の路地。心斎橋駅から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。塩の串とお造り (わさびか塩) がいちばんシンプル。つくねはタレ (2026年10月)、卵かけご飯は醤油麹 (2025年4月)、一品には kara-age、キーマカレー、トリュフの塩パンも。',
    vegan_detail: 'ヴィーガンではありません。鶏の店。しいたけ、トマト、ぎんなん、季節の生で食べられるとうもろこしなど野菜もあるが、ヴィーガンの説明はない。',
    notes: '[焼き鳥・東心斎橋、路地の朝引き地鶏のお造りと炭火の串] 心斎橋の路地裏、炭火の前で一串ずつ焼く姿を間近に見る14席。公式サイトによれば食べログ焼鳥百名店に6度 (2018〜2024年)。まずは朝引き地鶏の6種盛りお造り、頼まないと後悔するという声の一皿。続いて名物の内臓の串 (レバー嫌いでも食べられるというレバー、白レバー、こころ、せせり、玉ひも)、〆は卵かけご飯。一品も充実していて、鶏ひき肉入りのだし巻き、キーマカレー、トリュフの塩パン、さつまいものブリュレ。いつも満席なのでサイトで予約を。10年以上、子どもとも通う人は焼き鳥ならここと勧めるが、混んだ2026年9月の夜は最初の3本まで1時間かかったという声も。店内は喫煙可、カードは JCB、AMEX、Diners のみ。毎日17時〜24時。',
  });
}

// ================================================================ 丑寅
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27017138/'; const R = TB + 'dtlrvwlst/'; const MENU = TB + 'dtlmenu/';
  const W = day(['16:00', '23:00']); const E = day(['15:00', '23:00']);
  put({
    id: 'osaka_ushitora_namba', name: '丑寅 (Ushi Tora)', category: 'OMNI',
    lat: 34.663897, lng: 135.502931, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Sashimi, grilled fish and salt-grilled chicken neck are the plainest; kara-age, tempura (conger eel, maitake, ginger), macaroni salads, rice noodles and dishes in sauce or broth are not.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The menu is mainly seafood and meat, and several small plates use broth (fried eggplant in broth, dashi omelette). Grilled shiitake and ginger tempura appear on the menu; ask what is in the batter and sauces.',
    hours_raw: 'Mon–Fri 16:00–23:00; Sat–Sun 15:00–23:00; public holidays 15:00–22:00; open all year (Tabelog). No reservations; often a short queue outside (2026 reviews). From October 2026 the shop takes no groups of three or more; come alone or as a pair (Tabelog notice). No soft drinks; no minors (Tabelog). The shop asks you not to linger (Tabelog), and diners describe drinking quickly and moving on (2024–2026). No cards or e-money (Tabelog). 28 standing places at the counter; smoking allowed (Tabelog). Behind Takashimaya, near Nankai Namba Station, behind a vinyl curtain (September 2026 reviews).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba Sennichimae 15-19, in Ura Namba behind Takashimaya — 3 min from Nankai Namba Stn, 5 min from Namba Stn (Midosuji Line)',
    cuisine: 'Standing bar of creative Japanese small plates and seafood (dated from 2026 reviews; shop menu on Tabelog) · a three-item assortment for solo drinkers ¥500 (September 2026), the obanzai of the day laid out along the counter: e.g. motsu-ni, shrimp and avocado mentaiko macaroni, spinach (October 2026) · sashimi platter for one, fresh bluefin tuna, namero with yuzu · the house kara-age with rakkyo tartar sauce ¥350 a piece (shop menu), double-fried · grilled and simmered conger eel, conger-eel jelly, uzaku, unagi shirayaki · fried eggplant in broth, dashi omelette with pickled ginger, tsukune and thick fried tofu in chilli sauce ¥400, mentaiko-tomato macaroni with clams ¥380, seaweed rolls ¥580 (October 2026); lamb, chicken neck grilled with salt and black shichimi; ginger tempura ¥180 (shop menu) · bottled Sapporo beer, mega Kaku highball ¥700, imo shochu soda, seasonal sours and a wide sake list; no soft drinks · a typical visit ¥1,750–¥3,660 (2026)',
    website: null, gmaps: gm('丑寅 立ち飲み 難波'), menu_url: MENU,
    notes: "[Izakaya · Ura Namba, a standing bar for one or two] Behind a vinyl curtain in the lanes behind Takashimaya, a long standing counter for 28, lined with the day's small plates. The shop's own words: a place for a quick drink after work, not for lingering or large groups, and since October 2026 for one or two only, with no soft drinks. Order the ¥500 assortment of three plates for one, then sashimi, the double-fried kara-age with rakkyo tartar sauce (a diner on a 21st visit jokes about quitting work to make the tartar sauce), conger eel grilled or set in jelly, and whatever is on the counter. Staff, mostly women in an October 2026 visit, keep it moving. Tabelog Tachinomi 100 in 2025. Expect a short wait outside; open daily from 16:00, 15:00 at weekends.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed; "mostly women" in an October 2026 review)'], origin: null,
      background: 'Shop-maintained (corporate-member) Tabelog listing with the shop\'s own welcome note for first-time visitors; no opening date or owner is given. October 2026 reviewers call it a long-established standing bar and "a pioneer of the standing bar boom". Tabelog Tachinomi 100, 2025. Several diners have visited 11 to 24 times (2024–2026).',
      philosophy: 'A standing bar for a quick drink without lingering, a cozy spot to unwind after work; come alone or as a pair (shop note on Tabelog).', specialty: 'Three-plate assortment for one; kara-age with rakkyo tartar sauce; conger eel.',
      anecdotes: [
        { text: '"I love it so much that I\'m considering quitting my job to become a pickled shallot tartar sauce vendor." — September 2026, a 21st visit; kara-age, sashimi platter, roast pork and a highball, ¥3,080.', source: R + 'B258055414/' },
        { text: '"The jelly-like dish was beautifully garnished with chrysanthemum flowers, and I was once again amazed that this is a standing bar in the back streets of Namba." — September 2026, a tenth visit.', source: R + 'B320682771/' },
        { text: '"It seems like the rule here is to drink quickly and not linger, as everyone seems to understand" — June 2024, a 12th visit.', source: R + 'B289918463/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 丑寅、立ち飲み、難波千日前15-19、地下鉄なんば駅から徒歩5分、南海なんば駅から徒歩3分、月〜金 16:00〜23:00、土日 15:00〜23:00、祝日 15:00〜22:00、年中無休、予約不可、カード・電子マネー不可、28名の立ち飲み、喫煙可、未成年は入店不可、ソフトドリンクなし、2026年10月から3名以上の団体は不可、立ち飲み 百名店 2025。食べログのメニュー (英訳で確認): kara-age のらっきょうタルタル350円、生姜の天ぷら180円。口コミ(2024年6月〜2026年10月): おひとりさまの3種盛り500円、カウンターに並ぶおばんざい、刺身盛り、本まぐろ、なめろう、穴子の白焼き、うざく、だし巻き、kara-age、メガ角ハイボール700円、日本酒の品ぞろえ、長居しないのがルール、外で少し待つ、スタッフは女性が多い。',
      confidence: 'medium', sources: [TB, MENU, R + 'B258055414/', R + 'B289918463/', R + 'B320682771/', R + 'B361922417/', R + 'B536120363/', R + 'B536335241/', R + 'B536476513/', R + 'B536782706/', R + 'B537158189/', R + 'B537292880/', R + 'B537481920/', R + 'B537994514/'] },
    cultural_comfort: { level: 'japanese', note: 'A crowded standing counter; order from the dishes laid out or the menu; one or two people only; no soft drinks. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波千日前15-19',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with an October 2026 notice; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波千日前15番19号 (go) 18m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU, R + 'B536120363/', R + 'B537292880/', R + 'B537481920/'],
    price_note: 'Prices from the shop menu on Tabelog and September–October 2026 reviews (tax included as reported).', last_checked: TODAY, items: [
      it('', '', 'Three-item assortment for one', '¥500', 'Small plates', 'ask', 'ask', 'September 2026.', 'three_assortment'),
      it('', '', 'Chicken kara-age with rakkyo tartar sauce (per piece)', '¥350', 'Small plates', 'no', 'no', 'Shop menu; 2026 reviews.', 'karaage'),
      it('', '', 'Ginger tempura', '¥180', 'Small plates', 'no', 'ask', 'Shop menu.', 'ginger_tempura'),
      it('', '', 'Mentaiko-tomato macaroni with clams', '¥380', 'Small plates', 'no', 'no', 'October 2026.', 'macaroni'),
      it('', '', 'Tsukune and thick fried tofu in chilli sauce', '¥400', 'Small plates', 'ask', 'no', 'October 2026.', 'tsukune_tofu'),
      it('', '', 'Mega Kaku highball', '¥700', 'Drinks', 'ask', 'ask', 'October 2026.', 'mega_highball'),
    ] }, {
    cuisine: '創作の和の小皿と魚介の立ち飲み (2026年の口コミ、食べログの店のメニュー)・おひとりさま向けの3種盛り500円 (2026年9月)、カウンターに並ぶその日のおばんざいから。たとえばもつ煮、エビとアボカドの明太マカロニ、ほうれん草 (2026年10月)・おひとり用の刺身盛り、本まぐろ、柚子のなめろう・名物の kara-age のらっきょうタルタル、1個350円 (店のメニュー)、二度揚げ・穴子の焼きや煮こごり、うざく、うなぎの白焼き・揚げなすの煮びたし、ガリ入りのだし巻き、つくねと厚揚げのチリソース400円、あさりの明太トマトマカロニ380円、海苔巻き580円 (2026年10月)、ラム、塩と黒七味のせせり焼き、生姜の天ぷら180円 (店のメニュー)・瓶の Sapporo のビール、メガ角ハイボール700円、芋焼酎のソーダ割り、季節のサワー、日本酒の品ぞろえ。ソフトドリンクはなし・1回の予算は1,750〜3,660円ほど (2026年)',
    neighborhood: '難波千日前15-19、高島屋の裏の Ura Namba。南海なんば駅から徒歩3分、地下鉄なんば駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。刺身、焼き魚、塩のせせり焼きがいちばんシンプル。kara-age、天ぷら (穴子、舞茸、生姜)、マカロニサラダ、ライスヌードル、タレや出汁の料理は合わない。',
    vegan_detail: '要確認。メニューは魚介と肉が中心で、出汁を使う小皿も多い (揚げなすの煮びたし、だし巻き)。焼きしいたけや生姜の天ぷらもあるので、衣とタレの中身を確認して。',
    notes: '[居酒屋・Ura Namba、ひとりかふたりで寄る立ち飲み] 高島屋の裏の路地、ビニールの幕をくぐると、その日の小皿が並ぶ28人の立ち飲みの長いカウンター。店の言葉では、仕事帰りにさっと一杯の店で、長居や大人数の店ではなく、2026年10月からは1〜2名のみ、ソフトドリンクもない。まずは500円のおひとりさま3種盛り、それから刺身、二度揚げの kara-age のらっきょうタルタル (21回目の客は仕事を辞めてタルタルを作りたいと冗談を言うほど)、穴子の焼きや煮こごり、カウンターに並ぶもの。2026年10月にはスタッフは女性が多く、手際よく回していたという。食べログ 立ち飲み 百名店 2025。外で少し待つことも。毎日16時から、土日は15時から。',
  });
}

save();
