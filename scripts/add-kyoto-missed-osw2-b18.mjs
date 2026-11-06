// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 18.
//   core (queue.mjs kyoto-missed next core 200, 2026-11-05, first two lane ids):
//   + 祇園鮨 琢 Gion Sushi Taku (6-seat sushi-and-tempura counter on Hanamikoji)
//   + 京野菜フレンチ懐石 祇園 重なが Gion Shigenaga (French kaiseki with Kyoto vegetables off Hanamikoji; since 2019)
//   notable (queue.mjs kyoto-missed next notable 200, lane ids in order):
//   + ハシヤとナカセ Hashiya to Nakase (creative Italian-leaning izakaya near Gojo; since 2022)
//   - ピエール・エルメ・パリ ザ・リッツ・カールトン京都 (26023293) skipped: a shop of the famous brand house Pierre Hermé Paris —
//     3 in the Tabelog crawl (ザ・リッツ・カールトン京都, ジェイアール京都伊勢丹, 大丸心斎橋) — and inside The Ritz-Carlton, Kyoto,
//     whose dining the hotel-wide record vm_the_ritz_carlton_kyoto already covers.
//   + 辻布紗 Tsujifusa (12-seat Kyoto kaiseki of a former Aji Fukushima head chef; since 2024)
//   None is in data/kyoto.json: grep by id, name (琢/Taku, 重なが/Shigenaga, ハシヤ/Hashiya, 辻布紗/Tsujifusa) and address
//   (清本町352, 橋本町398, 大江町547, 百足屋町155) found none.
//   Same-name counts (Samboa ruling): 祇園鮨 琢, 重なが, ハシヤとナカセ, 辻布紗 — one listing each in the Tabelog crawl. 重なが has one
//   sister shop (京野菜フレンチ ルラーシュ, per the shop’s own notice) — a small group.
//   Service charges checked against Tabelog’s Japanese original: 琢 「サービス料10％」; 重なが 「サービス料10％」; ハシヤとナカセ
//   「お通し300円」 (a ¥300 starter cover); 辻布紗 none listed.
//   Pins: Tabelog /en/ point, cross-checked with GSI only.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-18');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26023293', 'Pierre Hermé Paris is a famous brand house (a large parent under the brief’s 2026-11-05 definition): 3 shops in the Tabelog crawl (ザ・リッツ・カールトン京都, ジェイアール京都伊勢丹, 大丸心斎橋); this one is inside The Ritz-Carlton, Kyoto, whose dining the hotel-wide record vm_the_ritz_carlton_kyoto already covers');

// ================================================================ 祇園鮨 琢
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26040681/'; const R = TB + 'dtlrvwlst/';
  const CORP = 'https://www.houjin-bangou.nta.go.jp/henkorireki-johoto.html?selHouzinNo=2120001214766';
  const H = day(['17:30', '22:00']);
  put({
    id: 'kyoto_gion_sushi_taku', name: '祇園鮨 琢 (Gion Sushi Taku)', category: 'OMNI',
    lat: 35.004756, lng: 135.77537, cuisine_type: 'sushi',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the course pairs sushi with freshly fried tempura, and sushi is seasoned with soy (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi, tempura and Kobe-beef course (2026 reviews).',
    hours_raw: 'Two dinner seatings daily: 17:30–19:30 (last order 19:00) and 20:00–22:00 (last order 21:30); closed 31 December 2026–4 January 2027 (Tabelog). Bookings cancelled automatically after 15 minutes late without notice (Tabelog). Service charge 10% (Tabelog’s Japanese original: サービス料10％). 14 seats: a white-wood counter of 6 and tables; non-smoking; cards, UnionPay, Alipay and WeChat Pay (Tabelog; October 2026). Staff explain dishes in several languages, including Chinese (October 2026). On the 1st floor of SAKIZO花見小路ビル on Hanamikoji; 5 min from Gion-Shijo Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Hanamikoji in Gion, north of Shijo — 5 min from Gion-Shijo Stn',
    cuisine: 'Edomae sushi and freshly fried tempura in one course (2026 reviews) · sushi-and-tempura course ¥12,000 including tax (October 2026), about 25 items: yuba and matsumae-zuke to start, sashimi, otoro on black squid-ink red-vinegar rice, squid with karasumi, kinmedai, striped jack, botan shrimp dusted with "snow" salt at the counter, a small crab and ikura bowl, seared Kobe beef with caviar, tempura of shrimp, sweet potato and Tanba shimeji, half-size last roll on request · sake such as Hibi and Gakki Masamune, Pinot Noir',
    website: null, gmaps: gm('祇園鮨 琢 花見小路'), menu_url: TB,
    notes: "[Sushi · Gion, sushi and tempura on Hanamikoji] A six-seat white-wood counter on Hanamikoji serving one generous course (about ¥12,000) that mixes Edomae sushi with freshly fried tempura: otoro on black squid-ink rice, shrimp dusted with salt like falling snow, a crab-and-ikura bowl, seared Kobe beef with caviar. Two seatings a night; the chefs explain dishes in several languages, and reviewers praise the friendly head chef and the counter chat. 10% service.",
    chef_bio: { chef_name: null, roles: ['Head chef, not named; operator 株式会社ファイブディアライフ (the invoice holder)'], origin: null,
      background: 'The invoice number belongs to 株式会社ファイブディアライフ (NTA corporate-number site). October 2026 reviewers praise a friendly head chef who explains each dish, and multilingual service for overseas guests.',
      philosophy: null,
      specialty: 'Otoro on squid-ink rice; "snow" salt shrimp; sushi with tempura.',
      anecdotes: [
        { text: 'An October 2026 diner was mesmerised as the chef sprinkled salt over the shrimp like falling snow.', source: R + 'B538277251/' },
        { text: 'An October 2026 pair of light eaters were glad the last roll could be served as a half portion, and noticed staff explaining the sushi in Chinese to guests from China.', source: R + 'B538424835/' },
      ],
      japanese_sources_summary: '食べログ: 祇園鮨 琢、寿司・海鮮・うなぎ、東山区清本町352 SAKIZO花見小路ビル 1F、祇園四条駅から徒歩5分、17:00〜22:00 (1部 17:30〜19:30・2部 20:00〜22:00)、年末年始休み (2026年12月31日〜2027年1月4日)、15分以上の遅刻は自動キャンセル、サービス料10%、14席 (カウンター6、テーブル)、禁煙、カード・銀聯・Alipay・WeChat Pay 可、インボイス T2120001214766 (株式会社ファイブディアライフ)。口コミ (2026年10〜11月、英語): 寿司と天ぷらのコース12,000円、イカスミと赤酢の黒いシャリ、雪のような塩の海老、蟹といくらの小丼、Kobe 牛とキャビア、多言語の説明。',
      confidence: 'medium', sources: [TB, CORP, R + 'B487462289/', R + 'B537859116/', R + 'B537859239/', R + 'B537862069/', R + 'B538097745/', R + 'B538142396/', R + 'B538277251/', R + 'B538327890/', R + 'B538424835/', R + 'B538426312/', R + 'B538476179/', R + 'B538723981/'] },
    cultural_comfort: { level: 'english', note: 'Dishes explained in several languages (October 2026); two fixed seatings; 10% service.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区清本町352 SAKIZO花見小路ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.004756, 135.77537); cross-checked: GSI 京都府京都市東山区清本町352番地 (lot) 15m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537862069/', R + 'B538723981/'],
    price_note: 'Course price from October–November 2026 reviews (tax included; 10% service).', last_checked: TODAY, items: [
      it('', '', 'Sushi and tempura course', '¥12,000', 'Course', 'no', 'no', 'October–November 2026.', 'sushi_tempura'),
    ] }, {
    cuisine: '江戸前の寿司と揚げたての天ぷらを一つのコースで (2026年の口コミ)・寿司と天ぷらのコース12,000円 (税込、2026年10月)、約25品: 湯葉と松前漬けの先付、刺身、イカスミと赤酢の黒いシャリの大トロ、からすみのイカ、金目鯛、縞鯵、カウンターで雪のような塩をふる海老、蟹といくらの小丼、キャビアをのせたKobe 牛の炙り、海老・さつまいも・Tanba のしめじの天ぷら、最後の巻物はハーフも可・Hibi、Gakki Masamune などの日本酒、ピノ・ノワール',
    neighborhood: '四条の北、祇園の花見小路。祇園四条駅から徒歩5分',
    gf_detail: 'グルテンフリーではない。寿司と揚げたての天ぷらのコースで、寿司は醤油で味をつける (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。寿司、天ぷら、Kobe 牛のコース (2026年の口コミ)。',
    notes: '[寿司・祇園、花見小路の寿司と天ぷら] 花見小路にある白木の6席のカウンター。江戸前の寿司と揚げたての天ぷらをまぜた充実のコース (12,000円ほど) が一つ: イカスミの黒いシャリの大トロ、雪のように塩をふる海老、蟹といくらの小丼、キャビアをのせたKobe 牛の炙り。夜は2部制。料理人は複数の言葉で料理を説明し、気さくな大将とカウンターの会話が好評。サービス料10%。',
  });
}

// ================================================================ 京野菜フレンチ懐石 祇園 重なが
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26033331/'; const R = TB + 'dtlrvwlst/';
  const L = day(['11:30', '14:30']); const D = day(['17:30', '22:00']);
  const LD = [['11:30', '14:30'], ['17:30', '22:00']];
  const B = day(...LD);
  put({
    id: 'kyoto_gion_shigenaga', name: '京野菜フレンチ懐石 祇園 重なが (Gion Shigenaga)', category: 'OMNI',
    lat: 35.005493, lng: 135.77538, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. French kaiseki eaten with chopsticks, with consommés, sauces and Japanese ingredients such as yuba; no gluten information is published (2023–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses use fish, beef, pâté and consommé alongside Kyoto vegetables (2023–26 reviews).',
    hours_raw: 'Lunch 11:30–14:30 (last entry 12:30) and dinner 17:30–22:00 (last entry 20:00); closed Wednesday and the second Tuesday of each month (Tabelog). Reservation only; the door opens 15 minutes before the booking (October 2025). Service charge 10% (Tabelog’s Japanese original: サービス料10％). 18 seats: a counter of 8 decorated with bonsai and three tatami private rooms (shoes off; up to 8); non-smoking; cards (Tabelog; January 2026). On the 2nd floor of 祇園神聖ビル on Hanamikoji north of Shijo; about 6 min from Gion-Shijo Stn (Tabelog). Opened 16 November 2019 (Tabelog).',
    hours: { 0: B, 1: B, 3: B, 4: B, 5: B, 6: B }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Hanamikoji north of Shijo, Gion — 6 min from Gion-Shijo Stn',
    cuisine: 'French kaiseki built on Kyoto vegetables and Japanese ingredients, eaten with chopsticks (Tabelog; 2023–26 reviews) · lunch courses about ¥4,840 (January 2023) · dinner course ¥12,100 (January 2026) · dishes reviewers had: yokowa with yuba and caviar, salmon and pork pâté, turnip and ginger soup, Goto Islands kampachi with Tanba black soybeans, katsuo and yuba, white-fish consommé, poached otome-dai or roast domestic beef, homemade pudding, Spanish ham with shredded gourd · about five red and five white wines, sake such as Tamano Hikari',
    website: null, gmaps: gm('京野菜フレンチ懐石 祇園 重なが'), menu_url: TB,
    notes: "[French · Gion, French kaiseki with Kyoto vegetables] A second-floor restaurant on Hanamikoji serving French cooking as a kaiseki eaten with chopsticks — Kyoto vegetables, yuba and Japanese fish in consommés and sauces, then poached sea bream or roast beef and a homemade pudding. Counter seats with bonsai, or one of three tatami rooms, good for business lunches. Chef Shigenaga also runs the Kyoto-vegetable French restaurant Lulache. Lunch from about ¥4,800, dinner about ¥12,100, plus 10% service. Closed Wednesday.",
    chef_bio: { chef_name: 'Shigenaga', roles: ['Chef and owner (Tabelog’s official introduction); a December 2023 diner met the chef and the chef’s wife'], origin: null,
      background: 'Per Tabelog’s official introduction: chef Shigenaga, owner of the Kyoto-vegetable French restaurant Lulache in Ogura, Uji, cooks French kaiseki focused on Kyoto vegetables and traditional ingredients, at a counter decorated with bonsai and in private rooms. Opened 16 November 2019 (Tabelog). A December 2023 diner found the chef and the chef’s wife very friendly. Name known only in Latin letters from the English page.',
      philosophy: 'Per Tabelog’s official introduction: French kaiseki that catches each seasonal ingredient at its most delicious.',
      specialty: 'French kaiseki with Kyoto vegetables.',
      anecdotes: [
        { text: 'A September 2024 diner who came just after a typhoon was met by an owner who had worried whether the party could make it.', source: R + 'B491912194/' },
        { text: 'A September 2026 diner found the cooking leaned so Japanese that it was hard to call French, and lacking novelty, but enjoyed talking with the chef and the owner.', source: R + 'B535364571/' },
        { text: 'A September 2025 diner found the air conditioning too strong.', source: R + 'B515393179/' },
      ],
      japanese_sources_summary: '食べログ: 京野菜フレンチ懐石 祇園 重なが、フレンチ・日本料理、東山区橋本町398-3 祇園神聖ビル 2F、祇園四条駅から東へ約300m、四条花見小路を北へ約150m、11:30〜14:30 (最終入店12:30)・17:30〜22:00 (最終入店20:00)、水曜と第2火曜休み、完全予約制、サービス料10%、18席 (カウンター8、座敷8)、禁煙、カード可、2019年11月16日オープン、店の紹介 (英語表示): Uji・Ogura の京野菜フレンチ Lulache のオーナー、Shigenaga シェフ、京野菜と伝統の食材、盆栽のカウンター、個室。口コミ (2023〜2026年、英語): お箸で食べるフレンチ、ランチ4,840円、ディナー12,100円、マスターと奥さん。',
      confidence: 'medium', sources: [TB, R + 'B459641256/', R + 'B474232310/', R + 'B476651625/', R + 'B491912194/', R + 'B497080033/', R + 'B505939087/', R + 'B511139136/', R + 'B515393179/', R + 'B516564023/', R + 'B520857447/', R + 'B535364571/', R + 'B535428611/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Booking only; shoes off in the private rooms; 10% service.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区橋本町398-3 祇園神聖ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.005493, 135.77538); cross-checked: GSI 京都府京都市東山区橋本町398番地 (lot) 36m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B459641256/', R + 'B520857447/'],
    price_note: 'Course prices from January 2023 and January 2026 reviews (10% service).', last_checked: TODAY, items: [
      it('', '', 'French kaiseki dinner course', '¥12,100', 'Dinner', 'ask', 'no', 'January 2026.', 'dinner_course'),
      it('', '', 'French kaiseki lunch course', '¥4,840', 'Lunch', 'ask', 'no', 'January 2023; may have changed.', 'lunch_course'),
    ] }, {
    cuisine: '京野菜と和の食材のフレンチ懐石、お箸で (食べログ、2023〜2026年の口コミ)・ランチのコース4,840円ほど (2023年1月)・ディナーのコース12,100円 (2026年1月)・口コミの料理: 湯葉とキャビアのよこわ、サーモンと豚のパテ、蕪と生姜のスープ、Goto のカンパチと Tanba の黒豆、鰹と湯葉、白身魚のコンソメ、乙女鯛のポシェか国産牛のロースト、自家製プリン、生ハムとかんぴょう・赤白各5種ほどのワイン、玉乃光などの日本酒',
    neighborhood: '四条の北、祇園の花見小路。祇園四条駅から徒歩6分',
    gf_detail: '予約時に要確認。お箸で食べるフレンチ懐石で、コンソメ、ソース、湯葉などの和の食材を使う。グルテンの情報は公開されていない (2023〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。京野菜とともに魚、牛肉、パテ、コンソメを使うコース (2023〜2026年の口コミ)。',
    notes: '[フレンチ・祇園、京野菜のフレンチ懐石] 花見小路のビル2階で、フランス料理をお箸で食べる懐石として出す店。京野菜、湯葉、和の魚をコンソメやソースで、最後は乙女鯛のポシェか牛肉のロースト、自家製プリン。盆栽のあるカウンターか3つの座敷の個室で、ビジネスランチにも。Shigenaga シェフは京野菜フレンチ Lulache も営む。昼は4,800円ほどから、夜は12,100円ほど、サービス料10%。水曜休み。',
  });
}

// ================================================================ ハシヤとナカセ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26037723/'; const R = TB + 'dtlrvwlst/'; const TC = 'https://www.tablecheck.com/hashiyatonakase';
  const H = day(['16:00', '22:00']);
  put({
    id: 'kyoto_hashiya_to_nakase', name: 'ハシヤとナカセ (Hashiya to Nakase)', category: 'OMNI',
    lat: 34.998331, lng: 135.761465, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Pasta, risotto, bruschetta, spring rolls, cutlets and fried dishes fill much of the menu; no gluten information is published (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Mostly fish, meat and cheese; dishes such as a yam and broccoli aglio e olio or tomato salads may suit, but no ingredient list is published (2026 reviews).',
    hours_raw: '16:00–22:00 Monday to Saturday; closed Sunday and irregularly (Tabelog). Starter cover ¥300 — a generous salad (Tabelog’s Japanese original: お通し300円; May 2026). Bookings by TableCheck or phone; may be treated as cancelled if 30 minutes late (Tabelog); popular, often full on Fridays (June 2026). 28 seats: a counter of 10 and tables; non-smoking; children welcome, with a high chair and a nappy-changing station; aisles narrow for strollers (Tabelog; July 2026). Cards, transit IC, iD, QUICPay and PayPay (Tabelog). In a renovated townhouse in a quiet residential lane south of Karasuma-Matsubara; about 5 min from Gojo Stn (TableCheck; 2026 reviews). Opened 26 May 2022 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Residential lane near Gojo-Karasuma — 5 min from Gojo Stn',
    cuisine: 'Genre-free creative dishes on an Italian base with Japanese and Asian touches, for drinking (TableCheck; Tabelog) · daily whiteboard menu (2026 reviews): Caesar salad starter, margherita spring rolls, shirasu and shiso-genovese bruschetta, yodare katsuo, beef tartare with cheese and truffle-oil bruschetta, venison cutlet, chicken wings marinated in dashi, fried lotus-root cake with crab sauce, crab and shiitake puttanesca, scallop and aonori cream risotto, gorgonzola risotto, fruit-tomato or Shine Muscat caprese, grilled duck, pâté de campagne · wines and a wide range of sake',
    website: null, gmaps: gm('ハシヤとナカセ 大江町'), menu_url: TB,
    notes: "[Izakaya · Gojo, creative Italian-leaning plates] A cosy townhouse izakaya hidden in a residential lane near Gojo, opening at 4 p.m., where a whiteboard of genre-free plates on an Italian base meets plenty of wine and sake: margherita spring rolls, shirasu bruschetta, yodare katsuo, venison cutlet, creamy risottos. Solo diners get smaller portions; families with small children are welcome. ¥300 salad cover. Tabelog Izakaya WEST 'Tabelog 100' 2024. Closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Not named in any source found; a June 2026 diner watched two staff working together'], origin: null,
      background: 'Opened 26 May 2022 (Tabelog). Per Tabelog’s official introduction: an izakaya on the theme of "drinks and food", with genre-free creative dishes of seasonal ingredients. Tabelog Izakaya WEST "Tabelog 100" 2024 (Tabelog).',
      philosophy: null,
      specialty: 'Margherita spring rolls; shirasu bruschetta; risotto.',
      anecdotes: [
        { text: 'A July 2026 diner’s two-year-old tasted the margherita spring roll and exclaimed that it was pizza.', source: R + 'B532192564/' },
        { text: 'A May 2026 solo diner, ordering before 17:00, was given smaller portions.', source: R + 'B528935698/' },
      ],
      japanese_sources_summary: '食べログ: ハシヤとナカセ、居酒屋・イタリアン・バル、下京区大江町547-8、五条駅から徒歩約5分、月〜土 16:00〜22:00、日曜・不定休、お通し300円、30分以上の遅刻はキャンセル扱いも、28席 (カウンター10、テーブル)、禁煙、子ども可、おむつ台、カード・交通系IC・iD・QUICPay・PayPay 可、2022年5月26日オープン、居酒屋 WEST 百名店 2024。TableCheck: 町家を改装、イタリアンベースに和やアジアの要素、ワインと日本酒、16時から。口コミ (2026年、英語): マルゲリータの春巻き、しらすのブルスケッタ、よだれ鰹、鹿のカツ、リゾット。',
      confidence: 'medium', sources: [TB, TC, R + 'B453529524/', R + 'B511371092/', R + 'B528112739/', R + 'B528385053/', R + 'B528935698/', R + 'B528942878/', R + 'B529049611/', R + 'B530259829/', R + 'B532192564/', R + 'B532611408/', R + 'B533612631/', R + 'B538687595/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; ¥300 salad cover; hard to find in a back lane.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区大江町547-8',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog and TableCheck listings; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (34.998331, 135.761465); cross-checked: GSI 京都府京都市下京区大江町547番地 (lot) 23m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B528942878/'],
    price_note: 'No menu prices published; dishes from 2026 reviews; ¥300 cover.', last_checked: TODAY, items: [
      it('', '', 'Margherita spring rolls', '', 'Small plates', 'no', 'no', '', 'margherita_rolls'),
      it('', '', 'Shirasu and shiso-genovese bruschetta', '', 'Small plates', 'no', 'no', '', 'shirasu_bruschetta'),
    ] }, {
    cuisine: 'イタリアンを基本に和やアジアの要素を加えたジャンルにとらわれない酒に合う料理 (TableCheck、食べログ)・ホワイトボードの日替わりメニュー (2026年の口コミ): お通しのシーザーサラダ、マルゲリータの春巻き、しらすと大葉ジェノベーゼのブルスケッタ、よだれ鰹、牛タルタルとチーズとトリュフオイルのブルスケッタ、鹿のカツ、だしに漬けた手羽先、れんこん餅の揚げ物の蟹あん、蟹と椎茸のプッタネスカ、帆立と青のりのクリームリゾット、ゴルゴンゾーラのリゾット、フルーツトマトやシャインマスカットのカプレーゼ、鴨のグリル、パテ・ド・カンパーニュ・ワインと豊富な日本酒',
    neighborhood: '五条烏丸に近い住宅街の路地。五条駅から徒歩5分',
    gf_detail: '要確認。パスタ、リゾット、ブルスケッタ、春巻き、カツ、揚げ物がメニューの多くを占める。グルテンの情報は公開されていない (2026年の口コミ)。',
    vegan_detail: '要確認。魚、肉、チーズが中心。長芋とブロッコリーのアーリオ・オーリオやトマトのサラダなど合いそうな皿もあるが、原材料は公開されていない (2026年の口コミ)。',
    notes: '[居酒屋・五条、イタリアン寄りの創作料理] 五条近くの住宅街の路地に隠れた町家の居酒屋。16時から開き、イタリアンをベースにしたジャンルにとらわれないホワイトボードの料理を、たっぷりのワインと日本酒と: マルゲリータの春巻き、しらすのブルスケッタ、よだれ鰹、鹿のカツ、クリーミーなリゾット。一人なら量を少なめにしてくれ、小さな子ども連れも歓迎。お通しのサラダ300円。食べログ 居酒屋 WEST 百名店 2024。日曜休み。',
  });
}

// ================================================================ 辻布紗
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26041215/'; const R = TB + 'dtlrvwlst/';
  const MICH = 'https://guide.michelin.com/jp/ja/kyoto-region/kyoto/restaurant/tsujifusa'; const OMK = 'https://omakaseje.com/ja/restaurants/kc468690';
  const M = day(['18:00', '21:30']); const W = day(['12:00', '13:30'], ['18:00', '21:30']);
  put({
    id: 'kyoto_tsujifusa', name: '辻布紗 (Tsujifusa)', category: 'MOM_AND_POP',
    lat: 35.014976, lng: 135.763473, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. Kyoto kaiseki built on dashi with citrus, vinegar and soy; no gluten information is published (Michelin Guide; 2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a kaiseki of dashi, fish and seafood such as hamo, ayu, crab and soft-shell crab (2025–26 reviews).',
    hours_raw: 'Lunch 12:00–13:30 Tuesday to Saturday; dinner 18:00–21:30 (last food order 19:30) Monday to Saturday; closed Sunday (Tabelog; Michelin Guide). Reservation only; ask ahead for the private room (Tabelog). 12 seats: a counter of 7 and a private counter room of 5 with sunken seating; non-smoking (Tabelog; September 2026). Cash only — no cards, e-money or QR (Tabelog; OMAKASE). Lunch ¥10,000–10,500, dinner about ¥24,000 (OMAKASE; 2026 reviews). The entrance window and counter lights use kumiko woodwork from Okawa, Fukuoka (Michelin Guide). About 6 min from Marutamachi Stn (Tabelog). Opened 9 May 2024 (Tabelog).',
    hours: { 0: M, 1: W, 2: W, 3: W, 4: W, 5: W }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'South of the Imperial Palace, near Marutamachi — 6 min from Marutamachi Stn',
    cuisine: 'Kyoto kaiseki of gentle dashi lifted by citrus, vinegar, ume and ginger (Michelin Guide; 2026 reviews) · lunch omakase ¥10,000–10,500, dinner about ¥24,000 (OMAKASE; September 2026) · summer: cold-brewed gyokuro to start, soft-shell crab and ito-uri, hamo, ayu, winter melon (July–August 2026) · autumn: fig with sesame dressing, egg tofu with hairy crab, grilled sawara with chilli vinegar, simmered turnip, chestnut rice, matsutake (September–October 2026) · sake and wine chosen by the okami, a sommelier and kikisake-shi (OMAKASE)',
    website: null, gmaps: gm('辻布紗 百足屋町'), menu_url: TB,
    notes: "[Kaiseki · Marutamachi, a couple's quiet Kyoto counter] A twelve-seat kaiseki counter near the Imperial Palace, opened in May 2024 by chef 辻 義勝 — long trained at Oryori Hayashi and head chef at Aji Fukushima for eleven years — with the okami, a sommelier, pairing sake and wine. The cooking is gentle dashi sharpened with citrus and vinegar: soft-shell crab, hamo and ayu in summer, figs with sesame and matsutake in autumn. Lunch about ¥10,000, dinner about ¥24,000. Listed with a Michelin star soon after opening. Cash only; closed Sunday.",
    chef_bio: { chef_name: '辻 義勝', roles: ['Owner-chef, with the okami (a sommelier and kikisake-shi) — a couple (OMAKASE; July 2025 review)'], origin: 'A hometown known for woodworking, per the Michelin Guide (the kumiko is from Okawa, Fukuoka).',
      background: 'Per OMAKASE: 店主 辻義勝 trained for many years at the long-established 御料理はやし, helped launch 味ふくしま and was its head chef for eleven years, then went independent and opened 辻布紗 in May 2024; the okami is a qualified sommelier and kikisake-shi who pairs wine and sake. An August 2026 reviewer adds training at "Yoshiyasu". Per the Michelin Guide: an owner devoted to Kyoto cuisine, attentive to the harmony of ingredients and dashi, using citrus and vinegar for rhythm; the name 布紗 refers to a hemp cloth used in Shinto rites, and plain hemp hangs as the noren. July 2026 reviewers note a Michelin star soon after opening.',
      philosophy: 'Per the Michelin Guide: deep, nourishing flavour from the harmony of ingredients and dashi, with acidity giving the menu its rise and fall.',
      specialty: 'Dashi-led kaiseki; seasonal rice.',
      anecdotes: [
        { text: 'A September 2026 guest enjoyed the chef’s cooking again for the first time in more than a decade.', source: R + 'B536491211/' },
        { text: 'An October 2026 diner had a second helping of the matsutake rice and noted overseas guests nearby were also impressed.', source: R + 'B537416467/' },
        { text: 'A September 2026 group of chatty friends booked the private tatami counter room for five within a ¥15,000 budget with drinks.', source: R + 'B531260746/' },
      ],
      japanese_sources_summary: 'OMAKASE (omakaseje.com): 辻布紗、丸太町駅から徒歩6分の日本料理店、店主の辻義勝氏は老舗の名店「御料理はやし」で長年修行、「味ふくしま」の立ち上げに参加し11年間料理長、2024年5月に独立、ソムリエで利き酒師の資格を持つ女将がワインやお酒を選ぶ、ランチ10,500円、ディナー24,000円。ミシュランガイド: 辻布紗、¥¥¥、中京区百足屋町155、京料理にひたむきに打ち込んできた主人、食材の風味とだしの調和、柑橘や酢の酸味、組子細工は福岡県大川市の伝統工芸、月 18:00–21:30、火〜土 12:00–13:30・18:00–21:30、日曜休み。食べログ: 日本料理、完全予約制、12席 (カウンター7、個室カウンター5)、禁煙、カード・電子マネー・QR 不可、2024年5月9日オープン。口コミ (2025年7月〜2026年10月、英語): 夫婦で営む、ミシュラン一つ星、無花果の胡麻和え、松茸。',
      confidence: 'medium', sources: [TB, MICH, OMK, R + 'B511410039/', R + 'B517979088/', R + 'B531260746/', R + 'B531504697/', R + 'B536491211/', R + 'B537416467/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Booking only; cash only.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区百足屋町155',
    existence: { status: 'confirmed', checked: TODAY, note: 'Michelin Guide, OMAKASE and Tabelog listings; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.014976, 135.763473); cross-checked: GSI 京都府京都市中京区百足屋町155番地 (lot) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [OMK, R + 'B531260746/'],
    price_note: 'OMAKASE listing and a September 2026 review (lunch ¥10,000 tax included).', last_checked: TODAY, items: [
      it('', 'omakase', 'Lunch omakase', '¥10,500', 'Lunch', 'ask', 'no', '¥10,000 in a September 2026 review.', 'lunch'),
      it('', 'omakase', 'Dinner omakase', '¥24,000', 'Dinner', 'ask', 'no', '', 'dinner'),
    ] }, {
    cuisine: 'やさしいだしに柑橘、酢、梅、生姜の酸味を効かせた京料理の会席 (ミシュランガイド、2026年の口コミ)・昼のおまかせ10,000〜10,500円、夜は24,000円ほど (OMAKASE、2026年9月)・夏: 水出しの玉露に始まり、ソフトシェルクラブと糸瓜、鱧、鮎、冬瓜 (2026年7〜8月)・秋: 無花果の胡麻和え、毛蟹の玉子豆腐、鰆の焼き霜と唐辛子酢、蕪の炊いたん、栗ご飯、松茸 (2026年9〜10月)・ソムリエで利き酒師の女将が選ぶ日本酒とワイン (OMAKASE)',
    neighborhood: '御所の南、丸太町の近く。丸太町駅から徒歩6分',
    gf_detail: '予約時に要確認。だしを基本に柑橘、酢、醤油を使う京料理の会席。グルテンの情報は公開されていない (ミシュランガイド、2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。だし、魚、鱧、鮎、蟹、ソフトシェルクラブなどの会席 (2025〜2026年の口コミ)。',
    notes: '[日本料理・丸太町、夫婦で営む静かな京料理のカウンター] 御所近くの12席の会席のカウンター。御料理はやしで長く修業し、味ふくしまで11年料理長を務めた辻義勝さんが2024年5月に開き、ソムリエの女将が日本酒とワインを合わせる。やさしいだしを柑橘と酢で引き締めた料理で、夏はソフトシェルクラブ、鱧、鮎、秋は無花果の胡麻和えや松茸。昼は10,000円ほど、夜は24,000円ほど。開店後まもなくミシュランの星を得たという。現金のみ、日曜休み。',
  });
}

save();
