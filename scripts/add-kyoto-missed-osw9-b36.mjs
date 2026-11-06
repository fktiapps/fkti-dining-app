// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 36.
//   + ブロシェット Brochette (French charcoal skewers and natural wine by Karasuma Oike; since 2010)              [core]
//   + メリメロ Merimero (one-chef French restaurant below Gojozaka, by reservation)                             [core]
//   + 総本家にしんそば 松葉 本店 Matsuba (the 1861 house that created nishin soba, beside Minamiza)              [notable]
//   + 三味洪庵 京都本店 Sanmi Koan (stone-milled juwari soba and duck hot pot on the Shirakawa)                  [notable]
//   - フォーチュンガーデンキョウト — Plan・Do・See restaurant: sub-brand of a large parent (brief, 2026-11-06).
//   - 祇園 鰻 川藤 — run by 株式会社F&Co (Osaka), which describes it as its 25th shop (15 sushi, 8 izakaya, 1 eel
//     restaurant across Kansai, Tokyo and Nagoya; careermap.jp, April 2024): sub-brand of a large parent — FLAGGED.
//   - 味味香 京都ポルタ店 — same-concept branch of 京のカレーうどん 味味香 祇園店 (vm_mimikou_kyo_no_curry_udo).
//   Same-name counts first (same brand or operator): ブロシェット 1; メリメロ 1; 松葉 — the official site lists 本店,
//   北店 (currently closed), 京都駅店 and the Arashiyama head-office shop; none in data, a small group, the 本店
//   drafted; 三味洪庵 1 restaurant (the site's other outlets are department-store counters).
//   Taken in queue order on 2026-11-06: core (26020163 skip), 26016935, 26001617; notable (26040749 skip), 26001629,
//   (26030405 skip), 26020763. None drafted is in data/kyoto.json by name or address.
//   Service charges checked against Tabelog's Japanese original: ブロシェット 「ディナータイムに限りテーブルチャージ
//   料金頂戴しております(テラスは除外)」; 三味洪庵 「お一人様550円（テラス席）、一部屋10,000円（個室）…」;
//   メリメロ and 松葉 have no section.
//   Pins: 松葉's address matches only to town level, so loc_precise false.
//   Owner deaths (Greg 2026-11-06): 松葉's own history page records the deaths of 松野与三吉 (1940) and 松野貞雄
//   (1981); included, dated and attributed.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-36');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26020163', 'sub-brand of a large parent: フォーチュンガーデンキョウト is a Plan・Do・See restaurant (large-parent list, brief 2026-11-06)');
skip('26040749', 'sub-brand of a large parent: 祇園 鰻 川藤 is run by 株式会社F&Co (Osaka), its 25th shop among 15 sushi, 8 izakaya and 1 eel restaurant across Kansai, Tokyo and Nagoya (careermap.jp, April 2024)');
skip('26030405', 'same-concept branch: 味味香 京都ポルタ店 is a branch of 京のカレーうどん 味味香 祇園店, already in data (vm_mimikou_kyo_no_curry_udo)');

// ================================================================ ブロシェット
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26016935/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://brochette-kyoto.com/';
  const W = day(['11:45', '14:00'], ['18:00', '22:30']);
  put({
    id: 'kyoto_brochette_karasuma_oike', name: 'ブロシェット (Brochette)', category: 'OMNI',
    lat: 35.010391, lng: 135.761221, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Skewers come with sauces such as demi-glace, tartare and teriyaki; baguette or multigrain rice at lunch (2025–26 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A mixed grilled-vegetable skewer with anchovy-garlic sauce exists, but most skewers are meat or seafood (August 2026 review).',
    hours_raw: 'Tue–Sat 11:45–14:00 and 18:00–22:30; Sun 11:45–14:00 and 18:00–22:00; holidays 18:00–22:00; closed Monday (Tabelog). Bookings taken; private hire up to 20 (Tabelog). Charge: Tabelog\'s Japanese original says 「ディナータイムに限りテーブルチャージ料金頂戴しております(テラスは除外)」 — a table charge at dinner only, not on the terrace (amount not stated). Lunch is cash or PayPay (August 2025 review); cards (VISA, Master, AMEX, Diners) (Tabelog). 20 seats plus a terrace; non-smoking indoors, smoking on the terrace; free Wi-Fi; children welcome (Tabelog). On the street just below Oike; 1 min from Karasuma Oike Stn exit 3-1 (Tabelog; March 2026 review).',
    hours: { 1: W, 2: W, 3: W, 4: W, 5: W, 6: day(['11:45', '14:00'], ['18:00', '22:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Just south of Oike — 1 min from Karasuma Oike Stn',
    cuisine: 'French "brochettes" grilled over charcoal and grapevine, each with its own sauce, and natural wines picked by a sommelier (Tabelog): lunch sets of two to four skewers with soup and baguette or multigrain rice, ¥1,300 (August 2025) and four for ¥1,900 (August 2026) — shrimp and avocado, wagyu and Kyoto-pork hamburg with demi-glace, Tanba chicken with Awaji onion, Norwegian salmon with Inca no Mezame potato, Nishikigumo pork with pineapple, chicken tsukune; the "Jumbo Brochette" (May 2026); Spanish omelette, prosciutto, assorted appetizers and courses at night (2025–26 reviews)',
    website: SITE, gmaps: gm('ブロシェット 京都 烏丸御池'), menu_url: TB + 'dtlmenu/',
    notes: "[French skewers & natural wine · Karasuma Oike] A small bistro of charcoal-and-vine-grilled French skewers, each with its own sauce, poured with natural wines chosen by a sommelier. Lunch sets ¥1,300–1,900 (cash or PayPay); dinner about ¥6,000–8,000 with a table charge, terrace exempt. Closed Monday.",
    chef_bio: { chef_name: null, roles: ['Staff and sommelier (unnamed)'], origin: null,
      background: 'Opened 22 October 2010 (Tabelog).',
      philosophy: null, specialty: 'Charcoal-grilled French skewers with natural wine.',
      anecdotes: [
        { text: 'An August 2025 lunch guest noted many solo diners and women, Wi-Fi, and a lunch that fits an hour\'s break.', source: R + 'B511682919/' },
        { text: 'Four colleagues at lunch in June 2026 found the table cramped and the skewer orders mixed up, but liked the shrimp and avocado with tarako sauce.', source: R + 'B529902223/' },
        { text: 'A July 2026 first-timer was recommended a bottle to suit and noticed many foreign guests.', source: R + 'B531394769/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): ブロシェット、バル・イタリアン・フレンチ、中京区東洞院通御池下ル笹屋町438-4 シカタアブニールビルディング 1F、烏丸御池駅3-1番出口から徒歩1分、火〜土 11:45〜14:00・18:00〜22:30、日 11:45〜14:00・18:00〜22:00、祝 18:00〜22:00、月曜休み、ディナーのみテーブルチャージ (テラスは除く)、20席とテラス、店内禁煙 (喫煙はテラス)、Wi-Fi、子供可、2010年10月22日オープン、炭と葡萄の木で焼くブロシェット、自然派ワイン、ソムリエ。口コミ (2025年8月〜2026年8月、英語): ランチは串2〜4本とスープ、バゲットか雑穀米 (1,300円、4本で1,900円)、海老とアボカド、和牛と京都の豚のハンバーグ、Tanba の鶏、ジャンボブロシェット、ランチは現金か PayPay、外国人客も多い。',
      confidence: 'medium', sources: [TB, SITE, R + 'B511556142/', R + 'B511682919/', R + 'B525312340/', R + 'B528121166/', R + 'B528296437/', R + 'B528359322/', R + 'B528371946/', R + 'B529902223/', R + 'B531394769/', R + 'B533575145/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Pick skewers and sauces from the menu; many foreign guests (July 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区東洞院通御池下ル笹屋町438-4 シカタアブニールビルディング 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.010391, 135.761221); cross-checked: GSI 京都府京都市中京区笹屋町438番地 (lot) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533575145/', R + 'B511682919/'],
    price_note: 'No menu read; lunch prices from 2025–26 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch: choose 4 brochettes, soup, baguette', '¥1,900', 'Lunch', 'ask', 'ask', 'August 2026 review.', 'brochette4'),
      it('', '', 'Lunch: brochettes, cold soup and bread', '¥1,300', 'Lunch', 'ask', 'ask', 'August 2025 review.', 'brochette_lunch'),
    ] }, {
    cuisine: '炭と葡萄の木で焼き、一本ずつソースを変えるフランスのブロシェット (串焼き) と、ソムリエの選ぶ自然派ワイン (食べログ): ランチは串2〜4本にスープとバゲットか雑穀米、1,300円 (2025年8月)、4本で1,900円 (2026年8月)。海老とアボカド、和牛と京都の豚のハンバーグのデミグラス、Tanba の鶏と Awaji の玉ねぎ、ノルウェーサーモンと Inca no Mezame、Nishikigumo ポークとパイナップル、鶏つくね。「ジャンボブロシェット」(2026年5月)。夜はスペインオムレツ、生ハム、前菜盛り合わせ、コース (2025〜26年の口コミ)',
    neighborhood: '御池のすぐ南。烏丸御池駅から徒歩1分',
    gf_detail: '要確認。串にはデミグラス、タルタル、照り焼きなどのソース。ランチはバゲットか雑穀米 (2025〜26年の口コミ)。',
    vegan_detail: '要確認。アンチョビとにんにくのソースの焼き野菜の串はあるが、多くは肉か魚介 (2026年8月の口コミ)。',
    notes: '[フレンチの串焼きと自然派ワイン・烏丸御池] 炭と葡萄の木で焼き、一本ずつソースを変えるフレンチの串焼きの小さなビストロ。ソムリエの選ぶ自然派ワインと。ランチは1,300〜1,900円 (現金か PayPay)、夜は6千〜8千円ほどでテーブルチャージあり (テラスは除く)。月曜休み。',
  });
}

// ================================================================ メリメロ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26001617/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.eonet.ne.jp/~meli-melo/';
  const D = ['17:30', '22:00']; const L = ['11:30', '15:00'];
  put({
    id: 'kyoto_merimero_gojozaka', name: 'メリメロ (Merimero)', category: 'OMNI',
    lat: 34.995894, lng: 135.776468, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. French courses with house-baked bread, sauces and pastry; no gluten information (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: French courses of meat, fish, pâté and rillettes (2025–26 reviews).',
    hours_raw: 'Tue 17:30–22:00 (last order 20:00); Wed–Sun 11:30–15:00 (last order 13:30) and 17:30–22:00 (last order 20:00); closed Monday; dinner only on the 24th of each month (Tabelog). Book ahead — one chef works alone, and lunch and dinner fill (2025–26 reviews); a March 2026 diner booked through Instagram. No dinner for children under 10 (Tabelog). Cards (Tabelog). 12 seats, some at the counter; one parking space by reservation (Tabelog) — a May 2025 diner counted two. 2 min from the Gojozaka bus stop, 10 min from Kiyomizu-Gojo Stn (Tabelog).',
    hours: { 1: day(D), 2: day(L, D), 3: day(L, D), 4: day(L, D), 5: day(L, D), 6: day(L, D) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Below Gojozaka — 2 min from the Gojozaka bus stop',
    cuisine: 'Gentle French cooking with bread baked each morning and house desserts (Tabelog): lunch B course ¥3,800 (May 2025, March 2026) — appetizer platter, pâté de campagne, pork or two kinds of fish, four desserts; dinner B course ¥6,800 (March 2026) — raspberry aperitif, pork rillettes, smoked anago with akagai salad, turnip mousse, duck pâté, seafood mousse in kadaif; beef braised in sherry; walnut bread and baguette (+¥100 at lunch); rosé 500 ml ¥3,800 (2025–26 reviews)',
    website: SITE, gmaps: gm('メリメロ 京都 五条坂'), menu_url: null,
    notes: "[French · below Gojozaka, near Kiyomizu] A small French restaurant where one chef bakes the bread, cooks and serves: careful appetizer platters, pâtés, braises and a four-part dessert. Lunch course ¥3,800, dinner ¥6,800 — remarkable value, regulars say. Book ahead; no children under 10 at dinner; closed Monday.",
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed), working alone'], origin: null,
      background: 'Reviewers describe one chef running the restaurant alone (April 2025, October 2026); an October 2026 family has celebrated here for twenty years.',
      philosophy: 'Warm, body-friendly French cooking with bread baked every morning (Tabelog).',
      specialty: 'Lunch and dinner courses.',
      anecdotes: [
        { text: 'A March 2026 regular on a sixth visit booked through Instagram and was welcomed by the chef for the ¥6,800 dinner.', source: R + 'B460847359/' },
        { text: 'An October 2026 family, regulars for twenty years, celebrated a grandmother\'s birthday and hoped the chef could keep going alone.', source: R + 'B537956781/' },
        { text: 'A May 2025 lunch guest joked about parking right in front of a police station.', source: R + 'B507087005/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): メリメロ、フレンチ、東山区小島町143-15、市バス五条坂から徒歩2分、清水五条駅から徒歩10分、火 17:30〜22:00、水〜日 11:30〜15:00・17:30〜22:00、月曜休み、毎月24日はディナーのみ、12席、カード可、駐車場1台 (要予約)、ディナーは10歳未満不可、毎朝焼くパンと自家製デザート。口コミ (2025年2月〜2026年10月、英語): シェフが一人で営む、要予約 (Instagram から)、ランチ B コース3,800円、ディナー B コース6,800円、パテ・ド・カンパーニュ、リエット、穴子の燻製と赤貝、鴨のパテ、カダイフの魚介ムース、牛のシェリー煮、デザート4種、パン +100円、20年通う家族。',
      confidence: 'medium', sources: [TB, SITE, R + 'B460847359/', R + 'B501090551/', R + 'B507087005/', R + 'B524234805/', R + 'B531419015/', R + 'B537956781/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small reservation-only room run by one chef; no children under 10 at dinner.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市東山区小島町143-15',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.995894, 135.776468); cross-checked: GSI 京都府京都市東山区小島町143番地 (lot) 65m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B524234805/', R + 'B460847359/'],
    price_note: 'No menu read; prices from 2025–26 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch B course', '¥3,800', 'Courses', 'ask', 'no', 'May 2025 and March 2026 reviews.', 'lunch_b'),
      it('', '', 'Dinner B course', '¥6,800', 'Courses', 'ask', 'no', 'March 2026 review.', 'dinner_b'),
    ] }, {
    cuisine: '毎朝焼くパンと自家製デザートのやさしいフランス料理 (食べログ): ランチ B コース3,800円 (2025年5月、2026年3月) は前菜盛り合わせ、パテ・ド・カンパーニュ、豚か2種の魚、4種のデザート。ディナー B コース6,800円 (2026年3月) はラズベリーの食前酒、豚のリエット、穴子の燻製と赤貝のサラダ、かぶのムース、鴨のパテ、カダイフ包みの魚介のムース。牛のシェリー煮、くるみパンとバゲット (ランチは +100円)、ロゼ500ml 3,800円 (2025〜26年の口コミ)',
    neighborhood: '五条坂の下。五条坂バス停から徒歩2分',
    gf_detail: '要確認。自家製パン、ソース、パイのあるフランス料理のコース。グルテンの情報はない (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。肉、魚、パテ、リエットのフランス料理のコース (2025〜26年の口コミ)。',
    notes: '[フレンチ・清水近くの五条坂の下] シェフが一人でパンを焼き、料理し、サービスまでする小さなフランス料理店。丁寧な前菜盛り合わせ、パテ、煮込み、4種のデザート。ランチ3,800円、ディナー6,800円のコースで、常連いわく抜群のコスパ。要予約。ディナーは10歳未満不可。月曜休み。',
  });
}

// ================================================================ 総本家にしんそば 松葉 本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26001629/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.sobamatsuba.co.jp/';
  const H = day(['10:30', '20:30']);
  put({
    id: 'kyoto_matsuba_honten', name: '総本家にしんそば 松葉 本店 (Sohonke Nishin Soba Matsuba Honten)', category: 'OMNI',
    lat: 35.003689, lng: 135.772287, cuisine_type: 'udon_soba',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Soba in soy-based dashi with sweet-simmered herring; the noodle flour mix is not stated; tempura and oyako-don also served (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: herring, dashi, chicken and egg (2026 reviews).',
    hours_raw: '10:30–20:30, closed Wednesday (Tabelog). The official site gives 10:30–21:00 (last order 20:30), closed Wednesday unless a holiday, hours varying by season. Tabelog says no bookings; an October 2026 Minamiza-goer says you can book and pre-order to be served within minutes in the long intermission. Cards and e-money (Tabelog). Several floors by lift; window seats look over Shijo-dori; at peak the queue runs from the 1st floor to the 3rd (October–November 2026 reviews). Children welcome (Tabelog). Beside Minamiza at the east end of Shijo-Ohashi; 1 min from Gion-Shijo Stn exit 6 (Tabelog; official site).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Beside Minamiza, east end of Shijo-Ohashi — Gion-Shijo Stn',
    cuisine: 'The original nishin soba: soba with a whole sweet-simmered dried herring hidden under the noodles, ¥1,870 (August 2026); chilled nishin soba with grated yam and quail egg ¥2,090 (September 2026); grated-daikon and tororo nishin soba; yuba an-kake; hamo tempura seiro in summer; oyako-don ¥1,760 (November 2026); herring soboro with the house sake "Matsuba"; herring products to take home (official site; 2026 reviews)',
    website: SITE, gmaps: gm('総本家にしんそば 松葉 本店'), menu_url: SITE + 'menu/',
    notes: "[Nishin soba · beside Minamiza, Gion-Shijo] The house that invented nishin soba in 1882: a bowl of soba hiding a whole sweet-simmered herring, about ¥1,900, eaten upstairs with a view over Shijo-dori. Theatre-goers pre-order for the Minamiza interval. Expect a queue at lunch; closed Wednesday.",
    chef_bio: { chef_name: null, roles: ['株式会社 松葉 (representative director 松野 和代, official site)'], origin: null,
      background: 'Per the official history: founded in 1861 when 初代 松野与衛門 opened a soba shop at 18; in 1882 the second generation, 松野与三吉, created nishin soba, moved to a corner of Minamiza and named the shop 松葉. 松野与三吉 died in 1940. In 1945 the wooden Meiji building was torn down in a forced wartime clearance to protect Minamiza from air raids; in 1946 松野貞雄 returned from the war and became owner, and in 1951 the first post-war building, four storeys, rose on the same plot. The present building dates from 1973–74; 北店 opened opposite in 1976; 松野貞雄 (third 松野与衛門) died in 1981; the Kyoto Station shop opened in 2003; 松野和代 became representative director in 2024.',
      philosophy: null, specialty: 'Nishin soba.',
      anecdotes: [
        { text: 'An October 2026 kabuki-goer who disliked sweet herring tried it, was moved to a window seat over Shijo-dori, and found it milder than feared.', source: R + 'B405589715/' },
        { text: 'Theatre-goers can book and pre-order to be served within minutes in Minamiza\'s longest interval, an October 2026 diner says, and recommends zaru soba over the broth dishes.', source: R + 'B538016698/' },
        { text: 'By 11:30 on a November 2026 morning the queue stretched from the 1st floor to the 3rd.', source: R + 'B538658998/' },
      ],
      japanese_sources_summary: '公式サイト: 総本家にしんそば・松葉、本店は東山区四条大橋東入ル川端町192、10:30〜21:00 (L.O. 20:30)、水曜休み (祝日は営業)、南座横、祇園四条駅6番出口すぐ。店舗は本店、北店 (休業中)、京都駅店 (新幹線コンコース)、嵐山の本社売店。株式会社松葉、代表取締役 松野和代、創業1861年 (文久元年)。沿革: 初代松野与衛門が18才でそば屋を開業、1882年二代目松野与三吉がにしんそばを発案し南座の一角に移って屋号を松葉に、1940年松野与三吉没、1945年南座を空襲から守るための強制疎開で店舗を取り壊し、1946年松野貞雄が復員して店主に、1951年同じ場所に戦後初の鉄筋ビル、1973〜74年に現在のビル、1976年北店開店、1981年三代目松野与衛門 (松野貞雄) 没、2003年京都駅店、2024年松野和代が代表取締役に。食べログ: 総本家にしんそば 松葉 本店、そば・食堂、10:30〜20:30、水曜休み、予約不可、カード・電子マネー可。口コミ (2026年8〜11月、英語): にしんそば1,870円、冷やしにしんそば2,090円、親子丼1,760円、鱧天せいろ、にしんのそぼろ、限定の酒「松葉」、窓から四条通、南座の幕間に事前注文、行列。',
      confidence: 'high', sources: [TB, SITE, SITE + 'about/', SITE + 'access/', R + 'B405589715/', R + 'B443378880/', R + 'B533397479/', R + 'B533893486/', R + 'B536298007/', R + 'B537637538/', R + 'B538016698/', R + 'B538069953/', R + 'B538658998/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Busy, long-established soba house; lift to upper floors.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区川端町192 松林ビル',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.003689, 135.772287); GSI matched only the town (京都府京都市東山区川端町), so loc_precise false; 27.9 m from kyoto_wagyu_panga_gion_shijo; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533397479/', R + 'B443378880/', R + 'B538658998/'],
    price_note: 'No menu read; prices from 2026 reviews (tax included).', last_checked: TODAY, items: [
      it('にしんそば', 'nishin soba', 'Nishin soba (herring soba)', '¥1,870', 'Soba', 'ask', 'no', 'August 2026 review.', 'nishin_soba'),
      it('', '', 'Chilled nishin soba with grated yam and quail egg', '¥2,090', 'Soba', 'ask', 'no', 'September 2026 review.', 'hiyashi_nishin'),
      it('親子丼', 'oyako donburi', 'Oyako-don', '¥1,760', 'Rice', 'ask', 'no', 'November 2026 review.', 'oyakodon'),
    ] }, {
    cuisine: '元祖にしんそば: 甘く炊いた身欠きにしんを丸ごとそばの下に隠したにしんそば1,870円 (2026年8月)、とろろとうずらの卵の冷やしにしんそば2,090円 (2026年9月)、おろしやとろろのにしんそば、湯葉あんかけ、夏の鱧天せいろ、親子丼1,760円 (2026年11月)、にしんのそぼろと限定の酒「松葉」、にしんの加工品の持ち帰り (公式サイト、2026年の口コミ)',
    neighborhood: '四条大橋の東、南座の横。祇園四条駅',
    gf_detail: '要確認。醤油の出汁のそばに甘く炊いたにしん。そば粉の配合は不明。天ぷらや親子丼もある (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。にしん、出汁、鶏、卵 (2026年の口コミ)。',
    notes: '[にしんそば・祇園四条の南座の横] 1882年ににしんそばを生んだ店。そばの下に甘く炊いたにしんを丸ごと隠した一杯 (1,900円ほど) を、四条通を見下ろす上の階で。南座の幕間に合わせて事前注文する観劇客も。昼は行列。水曜休み。',
  });
}

// ================================================================ 三味洪庵 京都本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26020763/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.sanmikouan.jp';
  const H = day(['11:00', '15:00'], ['17:00', '20:30']);
  put({
    id: 'kyoto_sanmi_koan', name: '三味洪庵 京都本店 (Sanmi Koan Kyoto Honten)', category: 'OMNI',
    lat: 35.009776, lng: 135.780817, cuisine_type: 'udon_soba',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The soba is 100% buckwheat, stone-milled in house (Tabelog), but the dipping sauces are soy-based and tempura is battered (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi-based soba broths, duck, hamo and herring (2026 reviews).',
    hours_raw: '11:00–15:00 (last order 14:30) and 17:00–20:30 (last order 20:00); closed Monday, or Tuesday when Monday is a holiday; festival days can change this (Tabelog; official site). Bookings online — a group must all order the same course; walk-ins take a number by QR code or touch panel and wait, often 40–50 minutes at lunch (official site; 2026 reviews). Charges: Tabelog\'s Japanese original says 「お一人様550円（テラス席）、一部屋10,000円（個室）頂戴いたします。※本店2F「京都はなれ」室料はかかりません」 — ¥550 per person on the riverside terrace, ¥10,000 per private room (none for the 2F "Kyoto Hanare"). Preschool children only in a private room (Tabelog). Cards, PayPay, Alipay, WeChat Pay (Tabelog). 28 seats; shoes off; free Wi-Fi; non-smoking (Tabelog; October 2026 review). In a machiya of over 100 years on the Shirakawa; 1 min from Higashiyama Stn (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'On the Shirakawa near Sanjo — 1 min from Higashiyama Stn',
    cuisine: 'House stone-milled juwari (100% buckwheat) soba and duck hot pot, tempura fried in rice oil, natural wines and sake chosen by a sommelier (Tabelog): summer sudachi soba — sudachi tororo ¥1,750, nishin soba ¥1,530, kakiage ¥1,100 (October 2026); hamo sudachi soba and hamo tempura, corn tempura, duck-broth seiro soba, yuba soba, domestic duck-breast roast; soba gozen ¥4,500, +¥550 to switch to sudachi soba (September 2026) (2026 reviews)',
    website: SITE, gmaps: gm('三味洪庵 京都本店'), menu_url: TB + 'dtlmenu/',
    notes: "[Juwari soba & duck · on the Shirakawa near Higashiyama Stn] A century-old machiya by the Shirakawa where you eat stone-milled 100% buckwheat soba on a riverside terrace — famous for summer sudachi soba floating with citrus — or duck hot pot indoors. About ¥2,000–5,000; ¥550 extra on the terrace. Take a queue number by QR; closed Monday.",
    chef_bio: { chef_name: null, roles: ['Staff and sommelier (unnamed)'], origin: null,
      background: 'Tabelog\'s shop text says the house was founded in 1861 (Bunkyū 1) and occupies a renovated machiya of over 100 years; the listing\'s opening day is 15 June 2012. The official site also sells 西京漬 and tsukudani at its own shop and at Kyoto Takashimaya and JR Kyoto Isetan.',
      philosophy: 'Stone-milled 100% buckwheat soba and an unhurried time (official site).',
      specialty: 'Juwari soba; sudachi soba; duck hot pot.',
      anecdotes: [
        { text: 'Arriving at 11:30 in September 2026, a pair got a 13:00 terrace slot and explored the area until the slot came up.', source: R + 'B535687655/' },
        { text: 'A September 2026 visitor found the QR e-mail confirmation slow and advised using a Recruit ID instead.', source: R + 'B536054469/' },
        { text: 'A September 2026 diner noted many insects drawn to the terrace lights in the evening, and did not care for the citrus broth.', source: R + 'B536700059/' },
      ],
      japanese_sources_summary: '公式サイト: 三味洪庵 京都本店、自家製臼挽き十割蕎麦と鴨鍋、東山区石泉院町393、11:00〜15:00 (L.O. 14:30)・17:00〜20:30 (L.O. 20:00)、月曜休み (祝日は火曜)、ネット予約は1グループ同一コース、西京漬や佃煮は本店・京都タカシマヤ・ジェイアール京都伊勢丹で販売。食べログ (店舗会員): 三味洪庵 京都本店、そば・鍋・日本料理、三条通北裏白川筋西入ル、東山駅から徒歩1分、テラス席は一人550円、個室は一部屋10,000円 (2F「京都はなれ」は室料なし)、28席、未就学児は個室のみ、カード・PayPay・Alipay・WeChat Pay 可、2012年6月15日オープン、文久年間創業とする記載、築100年超の町家、白川の流れ、米油の天ぷら、ソムリエのワインと日本酒。口コミ (2026年9〜10月、英語): すだちそば、すだちとろろ1,750円、にしん1,530円、かき揚げ1,100円、鱧のすだちそばと鱧天、とうもろこしの天ぷら、鴨汁せいろ、湯葉そば、鴨ロース、そば御膳4,500円、QR の順番待ち、靴を脱ぐ、夜のテラスは虫が多いという声。',
      confidence: 'medium', sources: [TB, SITE, R + 'B535687655/', R + 'B535884846/', R + 'B536054469/', R + 'B536353259/', R + 'B536404948/', R + 'B536700059/', R + 'B536890960/', R + 'B537650827/', R + 'B537847280/', R + 'B538296836/'] },
    cultural_comfort: { level: 'english', note: 'Online booking page in English (official site); QR queue system.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区三条通北裏白川筋西入ル石泉院町393 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop and the official site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.009776, 135.780817); cross-checked: GSI 京都府京都市東山区石泉院町393番地 (lot) 11m; 14.9 m from kyoto_shirakawa_kyotomi; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536890960/', R + 'B536700059/'],
    price_note: 'No menu read; prices from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Sudachi tororo soba (summer)', '¥1,750', 'Soba', 'ask', 'no', 'October 2026 review.', 'sudachi_tororo'),
      it('にしんそば', 'nishin soba', 'Nishin soba', '¥1,530', 'Soba', 'ask', 'no', 'October 2026 review.', 'nishin_soba'),
      it('', '', 'Kakiage tempura', '¥1,100', 'Tempura', 'no', 'ask', 'October 2026 review.', 'kakiage'),
      it('', '', 'Soba gozen', '¥4,500', 'Sets', 'ask', 'no', 'September 2026 review; +¥550 for sudachi soba.', 'soba_gozen'),
    ] }, {
    cuisine: '自家製臼挽きの十割蕎麦と鴨鍋、米油の天ぷら、ソムリエの選ぶ自然派ワインと日本酒 (食べログ): 夏のすだちそば (すだちとろろ1,750円)、にしんそば1,530円、かき揚げ1,100円 (2026年10月)、鱧のすだちそばと鱧天、とうもろこしの天ぷら、鴨汁せいろ、湯葉そば、国産鴨ロース、そば御膳4,500円 (すだちそばへの変更は +550円、2026年9月) (2026年の口コミ)',
    neighborhood: '三条近くの白川沿い。東山駅から徒歩1分',
    gf_detail: '要確認。そばは自家製臼挽きの十割 (食べログ) だが、つゆは醤油ベースで天ぷらは衣付き (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。出汁のそばつゆ、鴨、鱧、にしん (2026年の口コミ)。',
    notes: '[十割蕎麦と鴨・東山駅近くの白川沿い] 白川沿いの築100年超の町家で、川辺のテラス席で臼挽きの十割蕎麦を。夏はすだちを浮かべたすだちそばが名物、室内では鴨鍋も。2千〜5千円ほどで、テラスは一人550円。QR で順番待ち。月曜休み。',
  });
}

save();
