// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 50.
//   Queue run from the osw2 worktree, 2026-11-07.
//   core (queue.mjs kyoto-missed next core 200, lane ids in order):
//   + リンク 京都タワーサンド店 Link Kyoto Tower Sando (fried-chicken and highball counter in the Kyoto Tower Sando food hall;
//     since 2017) — a branch of Link, Kawaramachi-Sanjo (August 2025 review); two shops found.
//   + SOUTH BOUND KYOTO (natural-wine Italian bar near Shijo-Omiya; since 2024)
//   notable (queue.mjs kyoto-missed next notable 200, lane ids in order) — seven skipped, two drafted:
//   - BONSAI1877 (BALNIBARBI, 100+ shops); - 京の焼肉処 弘 京都駅前店 (弘 group); - 天丼まきの 京都寺町店 (TORIDOLL);
//   - 鼎's by JIN DIN ROU 京都三条店 (京鼎樓, 30+ shops); - 京家 きよみず 柳馬場本家 (brand in data); - 食堂・酒場 京へそ (へそ chain);
//   + ロビンソン 烏丸 Robinson Karasuma (bakery-café Italian in a townhouse off Shijo-Karasuma) — the Kobe shop closed August 2025.
//   - 石塀小路豆ちゃ 京都 (Diamond Dining / DD Holdings);
//   + 祇園 蕪屋 Gion Kaburaya (Kyoto-vegetable obanzai izakaya off Hanamikoji) — Groupe ZION (蕪屋 and a live space).
//   None of the four is in data/kyoto.json: grep by id, name and address found none.
//   Service charges: 蕪屋 ¥440 (not for lunch or courses; Tabelog); none listed for the others.
//   Remarks about other diners kept only where several reviews agree.
//   Pins: Tabelog /en/ point, cross-checked with GSI only.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-50');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26041659', 'BONSAI1877: a shop of a large parent — the official site (bonsai1877.jp) is © BALNIBARBI SPIRITS & COMPANY; 株式会社バルニバービ (Osaka, listed 3418) runs about 104 restaurants and cafés (kabuyoho.jp, January 2026)');
skip('26022699', '京の焼肉処 弘 京都駅前店: a chain — the 弘 group site (yakiniku-hiro.com/shop, read 2026-11-07) lists eight 京の焼肉処 弘 shops plus 京やきにく 弘 and 焼肉 弘商店');
skip('26028159', '天丼まきの 京都寺町店: a brand of TORIDOLL — a July 2026 Walkerplus article (walkerplus.com/article/133583) names a TORIDOLL Japan manager in charge of the new 天丼まきの format; a Tabelog name search (2026-11-07) lists Kyoto Teramachi, Kyoto Sanjo and Namba Sennichimae shops');
skip('26030535', '鼎\'s by JIN DIN ROU 京都三条店: sister brand of a chain — the official site (jin-din-rou.net, read 2026-11-07) says 京鼎樓 runs over 30 shops across Japan');
skip('26016279', '京家 きよみず 柳馬場本家: a same-concept branch of a brand already in data — 京家 きよみず 祇をん新橋 is in data/kyoto.json; the official site lists 京家きよみず 木屋町, 柳馬場本家, 祇をん新橋 and 錦小路 (invoice 株式会社ＫＹＯＹＡ)');
skip('26037855', '食堂・酒場 京へそ JR京都駅地下ポルタ店: a chain — invoice holder 株式会社メビウス (Shinbashi, Tokyo); a reviewer notes the brand began in Shinbashi; our crawls list 天ぷら・割鮮酒処 へそ 京都店, 新橋へそ 京都駅前本店, へそ 南森町店 (Osaka) and this one, beside the Shinbashi shops');
skip('26001963', '石塀小路豆ちゃ 京都: a shop of a large parent — the invoice holder is 株式会社ダイヤモンドダイニング (Tokyo), and Tabelog links the shop page on dd-holdings.jp (DD Holdings)');

// ================================================================ リンク 京都タワーサンド店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26028867/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '23:00']);
  put({
    id: 'kyoto_link_tower_sando', name: 'リンク 京都タワーサンド店 (Link Kyoto Tower Sando)', category: 'OMNI',
    lat: 34.98755537788048, lng: 135.75940323018648, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: battered fried chicken, a chicken-katsu sandwich and fries (Tabelog; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fried-chicken counter (Tabelog).',
    hours_raw: '11:00–23:00 (last order 22:30), daily (Tabelog). No reservations. Order at the counter; a buzzer calls you for some drinks (August 2023). Cards and e-money (Tabelog). 6 counter seats plus the shared 300-seat food hall; non-smoking; English menu (Tabelog). In the Kyoto Tower Sando B1F food hall, 2 min walk from Kyoto Station (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kyoto Tower Sando B1F food hall — 2 min walk from Kyoto Station',
    cuisine: 'Fried chicken and highballs (Tabelog) · chicken slow-fried at ultra-low temperature for juiciness, several cuts (Tabelog) · chicken tasting set of thigh and breast with a draught beer ¥1,000–1,300 (2024–2026); a five-cut fried chicken set; skin with ponzu (2024) · "senbero" set ¥1,000: draught beer or a mega highball with two snacks (August 2026) · fruit highballs; fries; chicken-katsu sandwich set at lunch (Tabelog; 2024–2025)',
    website: 'https://klu-kyoto.com', gmaps: gm('リンク 京都タワーサンド'), menu_url: TB,
    notes: "[Fried chicken bar · Kyoto Tower Sando food hall] A six-seat counter in the food hall under Kyoto Tower, frying chicken to order — juicy thigh and breast in a light, crisp coat — with mega highballs and fruit highballs. A tasting set with a beer is about ¥1,000–1,300; a ¥1,000 senbero set suits a quick drink before the train. Open daily 11:00–23:00. Branch of Link at Kawaramachi-Sanjo.",
    chef_bio: { chef_name: null, roles: ['Not named; a branch of the fried-chicken-and-highball bar Link in Kawaramachi-Sanjo (August 2025 review)'], origin: null,
      background: 'Opened 14 April 2017 (Tabelog). Tabelog’s introduction: juicy fried chicken cooked slowly at ultra-low temperature, many cuts, extra-fizzy highballs, a chicken tasting set for first-timers and a chicken-katsu sandwich set at lunch. An August 2025 reviewer calls it the branch of the Kawaramachi-Sanjo Link known for juicy chicken and highballs.',
      philosophy: null,
      specialty: 'Fried chicken tasting set with a highball.',
      anecdotes: [
        { text: 'A five-time regular (June 2026) praised the crisp, fluffy coat and moist meat.', source: R + 'B425904035/' },
        { text: 'An August 2023 visitor ordered the "mega" highball and was handed a slightly larger plastic cup.', source: R + 'B469517514/' },
        { text: 'A July 2024 visitor who used to struggle with highballs was won over by the fruit highballs.', source: R + 'B488180418/' },
      ],
      japanese_sources_summary: '食べログ: リンク 京都タワーサンド店、鶏料理・居酒屋・ダイニングバー、下京区烏丸通七条下ル東塩小路町721-1 京都タワーサンドB1F、京都駅から徒歩約2分、毎日 11:00〜23:00 (L.O. 22:30)、予約不可、カード・電子マネー可、6席 (別にフードコート300席)、禁煙、英語メニュー、2017年4月14日オープン。公式紹介: 超低温でじっくり揚げるジューシーな唐揚げ、部位いろいろ、強炭酸ハイボール、初めてなら「唐揚げ食べ比べセット」(むねともも、ドリンク付き)、ランチはチキンカツサンドのセット。口コミ (2023〜2026年、英語): 食べ比べセット1,000〜1,300円、5種の部位のセット、皮ポン酢、せんべろセット1,000円 (生ビールかメガハイボールとおつまみ2品)、フルーツハイボール、ポテト、河原町三条のリンクの支店。',
      confidence: 'medium', sources: [TB, R + 'B425904035/', R + 'B469517514/', R + 'B486703885/', R + 'B488180418/', R + 'B489428992/', R + 'B491890541/', R + 'B492710716/', R + 'B504027076/', R + 'B512519805/', R + 'B515345025/', R + 'B533528225/', R + 'B535850226/'] },
    cultural_comfort: { level: 'english', note: 'English menu; food-hall counter (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区烏丸通七条下ル東塩小路町721-1 京都タワーサンド B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (34.987555, 135.759403); cross-checked: GSI 京都府京都市下京区東塩小路町721番地 (lot) 5m; 8m from kyoto_tower_sand_bar and 15m from kyoto_gihan_hajimedo_tower_sando (same food hall); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B512519805/', R + 'B533528225/', R + 'B535850226/'],
    price_note: 'Prices from 2024–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Chicken tasting set (thigh, breast, drink)', '¥1,000', 'Set', 'no', 'no', '¥1,300 with beer (September 2026).', 'tasting'),
      it('', '', 'Senbero set: beer or mega highball with two snacks', '¥1,000', 'Set', 'ask', 'ask', 'August 2026.', 'senbero'),
      it('', '', 'Fried chicken, five cuts', '', 'Chicken', 'no', 'no', '', 'five_cuts'),
    ] }, {
    cuisine: '唐揚げとハイボール (食べログ)・超低温でじっくり揚げるジューシーな唐揚げ、部位いろいろ (食べログ)・もも・むねとビールの唐揚げ食べ比べセット1,000〜1,300円 (2024〜2026年)、5種の部位のセット、皮ポン酢 (2024年)・せんべろセット1,000円: 生ビールかメガハイボールにおつまみ2品 (2026年8月)・フルーツハイボール、ポテト、昼はチキンカツサンドのセット (食べログ、2024〜2025年)',
    neighborhood: '京都タワーサンドB1Fのフードホール。京都駅から徒歩2分',
    gf_detail: 'グルテンフリー不可。衣を付けた唐揚げ、チキンカツサンド、ポテト (食べログ、口コミ)。',
    vegan_detail: 'ヴィーガン不可。唐揚げのカウンター (食べログ)。',
    notes: '[唐揚げバー・京都タワーサンドのフードホール] 京都タワー地下のフードホールにある6席のカウンター。注文ごとに揚げる、軽くカリッとした衣のジューシーなもも・むねに、メガハイボールやフルーツハイボール。ビール付きの食べ比べセットは1,000〜1,300円ほど、1,000円のせんべろセットは電車前の一杯に。毎日11:00〜23:00。河原町三条のリンクの支店。',
  });
}

// ================================================================ SOUTH BOUND KYOTO
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26041701/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '01:00']);
  put({
    id: 'kyoto_south_bound', name: 'SOUTH BOUND KYOTO', category: 'OMNI',
    lat: 35.004964457865555, lng: 135.74724776037084, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Pasta, pizza and fritters alongside charcoal grills, pâté, bagna cauda and fish dishes; no gluten information is published (Tabelog; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat and seafood plates; bagna cauda is anchovy-based (reviews).',
    hours_raw: '17:00–1:00, Tuesday–Sunday and holidays; closed Monday, or Tuesday when Monday is a holiday (Tabelog). Bookings accepted. Cards, e-money and QR (Tabelog). 13 seats: about 9 at the counter and a table for 4; heated tobacco only; free Wi-Fi; sommelier (Tabelog; June and August 2026). Run by two friends — one cooks, one serves (June and September 2026). On Koin-dori, 3 min walk from Hankyu Omiya Stn (Tabelog; July 2026).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shijo-Omiya, Koin-dori — 3 min walk from Hankyu Omiya Stn',
    cuisine: 'Italian bar with about 100 natural wines and wine tastings (Tabelog) · signature pasta and charcoal grills: pasta of the day such as conger and grilled aubergine ¥1,580 (May 2026); spare ribs; pâté de campagne (July 2026) · bagna cauda; mentaiko fritters; tripe in tomato; sea bream en papillote; seasonal plates such as fried wakasagi, marinated shellfish with myoga, bamboo shoots with sansho (2026 reviews) · pizza (September 2026) · half portions on request (August 2026)',
    website: null, gmaps: gm('SOUTH BOUND KYOTO 四条大宮'), menu_url: TB,
    notes: "[Italian wine bar · Shijo-Omiya, natural wine late] A small, homey counter on Koin-dori run by two old classmates — one cooking, one pouring — with around 100 natural wines and Italian plates till 1 a.m.: seasonal pasta, charcoal-grilled spare ribs, pâté, bagna cauda and seasonal fish. Half portions for solo diners. About ¥5,000–8,000. Closed Monday.",
    chef_bio: { chef_name: null, roles: ['Two owners, classmates, not named (September 2026)'], origin: null,
      background: 'Opened 20 August 2024 (Tabelog); an August 2026 reviewer noted the second anniversary. Tabelog’s introduction: signature pasta and charcoal-grilled dishes with about 100 natural wines, wine tasting to find favourites, counter and table seating, a bar for a second or third stop.',
      philosophy: null,
      specialty: 'Pasta and charcoal grills with natural wine.',
      anecdotes: [
        { text: 'A June 2026 couple booked for 22:30 and found both staff chatting with everyone at the counter.', source: R + 'B530770194/' },
        { text: 'An August 2026 solo diner was offered half portions and was full after three dishes.', source: R + 'B534799740/' },
        { text: 'A September 2026 first-timer at a small celebration learned the two owners were classmates and recommended the bagna cauda.', source: R + 'B536555610/' },
      ],
      japanese_sources_summary: '食べログ: SOUTH BOUND KYOTO、イタリアン・ワインバー、中京区壬生坊城町55 坊城ビル1F、阪急四条大宮駅から徒歩3分 (211m)、火〜日・祝 17:00〜翌1:00、月曜定休 (祝日の場合は火曜休み)、予約可、カード・電子マネー・QR可、13席、加熱式たばこのみ、Wi-Fi、ソムリエ、2024年8月20日オープン。公式紹介: 名物のパスタと炭火焼き、約100種の自然派ワイン、ワインのテイスティング、カウンターとテーブル、2軒目3軒目にも。口コミ (2026年、英語): 本日のパスタ (穴子と焼き茄子1,580円)、スペアリブ、パテ・ド・カンパーニュ、バーニャカウダ、明太子のフリット、トリッパのトマト煮、鯛の紙包み焼き、わかさぎのフリット、貝とみょうがのマリネ、筍と山椒、ピザ、ハーフサイズ、店主2人は同級生、1人が料理・1人が接客、後院通、2周年。',
      confidence: 'medium', sources: [TB, R + 'B493989334/', R + 'B511576751/', R + 'B516028286/', R + 'B524649550/', R + 'B526054845/', R + 'B528195267/', R + 'B530770194/', R + 'B531769578/', R + 'B532567962/', R + 'B534799740/', R + 'B536555610/', R + 'B537025699/'] },
    cultural_comfort: { level: 'japanese', note: 'Small counter; ask the staff about wines.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区壬生坊城町55 坊城ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.004964, 135.747248); cross-checked: GSI 京都府京都市中京区壬生坊城町55番地 (lot) 36m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B528195267/'],
    price_note: 'Price from a May 2026 review; most dishes unpriced in reviews.', last_checked: TODAY, items: [
      it('', '', 'Pasta of the day (e.g. conger and grilled aubergine)', '¥1,580', 'Pasta', 'no', 'no', 'May 2026.', 'pasta'),
      it('', '', 'Charcoal-grilled spare ribs', '', 'Grill', 'ask', 'no', '', 'spare_ribs'),
      it('', '', 'Bagna cauda', '', 'Appetizer', 'ask', 'no', '', 'bagna_cauda'),
    ] }, {
    cuisine: '約100種の自然派ワインとテイスティングのイタリアンバー (食べログ)・名物のパスタと炭火焼き: 本日のパスタ、たとえば穴子と焼き茄子1,580円 (2026年5月)、スペアリブ、パテ・ド・カンパーニュ (2026年7月)・バーニャカウダ、明太子のフリット、トリッパのトマト煮、鯛の紙包み焼き、わかさぎのフリット、貝とみょうがのマリネ、筍と山椒など季節の皿 (2026年の口コミ)・ピザ (2026年9月)・頼めばハーフサイズ (2026年8月)',
    neighborhood: '四条大宮、後院通。阪急大宮駅から徒歩3分',
    gf_detail: '要確認。パスタ、ピザ、フリットに、炭火焼き、パテ、バーニャカウダ、魚料理。グルテンの情報は公開されていない (食べログ、口コミ)。',
    vegan_detail: 'ヴィーガン不可。肉と魚介の皿、バーニャカウダはアンチョビ (口コミ)。',
    notes: '[イタリアンワインバー・四条大宮、深夜まで自然派ワイン] 後院通の小さく居心地のいいカウンター。同級生の二人がひとりは料理、ひとりはワインを担当。約100種の自然派ワインと、季節のパスタ、炭火のスペアリブ、パテ、バーニャカウダ、季節の魚を深夜1時まで。ひとりならハーフサイズも。5,000〜8,000円ほど。月曜休み。',
  });
}

// ================================================================ ロビンソン 烏丸
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26002395/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.dreamwks.com/';
  const H = day(['11:30', '16:00'], ['17:30', '21:30']);
  put({
    id: 'kyoto_robinson_karasuma', name: 'ロビンソン 烏丸 (Robinson Karasuma)', category: 'OMNI',
    lat: 35.0012811578715, lng: 135.7585566803257, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: a bakery-café restaurant whose lunches centre on all-you-can-eat house breads and pasta (Tabelog; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: ham salads, cream soups, fish and meat courses (reviews).',
    hours_raw: 'Lunch 11:30–16:00 (last order 15:00), dinner 17:30–21:30 (last order 21:00); closed Tuesday, with monthly closing days posted on the official site (Tabelog; official site, October 2026). Bookings recommended — lunch fills from opening (September 2026). Cards and PayPay (Tabelog). 100 seats including private rooms with sunken seats; the second floor for groups of 10–20; party plans; non-smoking (Tabelog). In a Kyoto townhouse on Bukkoji-dori just west of Karasuma, 2 min walk from Shijo Stn Exit 6 (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shijo-Karasuma, Bukkoji-dori — 2 min walk from Shijo Stn',
    cuisine: 'Boulangerie café dining: French-Italian in a Kyoto townhouse (Tabelog) · lunch with all-you-can-eat house breads brought to the table — over ten kinds, such as basil focaccia, mentaiko, pepper and tea bread (2026 reviews) · lunch course ¥2,900 with salad and ham, choice of pasta and more (September 2026); salad lunch; pasta such as tomato and asparagus or peperoncino; breaded salmon with tartar; vichyssoise (2026) · dinner courses: smoked-salmon carpaccio, pasta, roast chicken thigh (August 2026); anniversary and party courses; lunch private-room plans (official site)',
    website: SITE, gmaps: gm('ロビンソン 烏丸 仏光寺'), menu_url: TB + 'dtlmenu/',
    notes: "[Italian bakery café · Shijo-Karasuma, bread-basket lunches in a townhouse] A stylish townhouse restaurant a block from Shijo-Karasuma, known for lunches where staff keep bringing warm house breads — focaccia, mentaiko, tea bread — to go with salad and pasta (course about ¥2,900). Dinner is French-Italian courses; private rooms and an upstairs for groups. Book: lunch fills at opening. Closed Tuesday.",
    chef_bio: { chef_name: null, roles: ['Chef not named'], origin: null,
      background: 'Per the official site (dreamwks.com): Robinson Karasuma, Italian in Kyoto; the sister Robinson Kobe closed on 31 August 2025; anniversary courses, lunch private-room party plans in the storehouse room, and girls’-night courses. Tabelog: a boulangerie café dining room, French-Italian with seasonal ingredients, party plans for up to 80.',
      philosophy: null,
      specialty: 'All-you-can-eat house breads at lunch.',
      anecdotes: [
        { text: 'A September 2026 lunch guest found a queue of booked parties before the 11:30 opening.', source: R + 'B535509477/' },
        { text: 'An October 2026 big eater returning after years came for the bread but felt the staff came round with it too seldom.', source: R + 'B538245395/' },
        { text: 'A July 2026 group added a dessert plate to the lunch course for a farewell party.', source: R + 'B532051228/' },
      ],
      japanese_sources_summary: '公式サイト (dreamwks.com): 京都烏丸でイタリアンならRobinson、11月の定休日のご案内 (2026年10月)、9月2日からのランチ・ディナーメニュー (2026年8月)、ロビンソン神戸は2025年8月31日で閉店、ロビンソン烏丸の女子会コース、蔵の個室を貸し切るランチの会プラン、アニバーサリーコース。食べログ: イタリアン・カフェ・フレンチ、下京区仏光寺通烏丸西入ル釘隠町238-240、四条駅6番出口から徒歩2分、昼11:30〜16:00 (L.O. 15:00)、夜17:30〜21:30 (L.O. 21:00)、火曜定休、カード・PayPay可、100席 (掘りごたつの個室、テーブル)、2階は10〜20名の貸切、宴会は80名まで、禁煙、Boulangerie cafe dining Robinson、町家でフレンチ・イタリアン。口コミ (2026年、英語): パン食べ放題のランチ、10種以上のパン (バジルのフォカッチャ、明太子、胡椒、紅茶)、ランチコース2,900円、サラダランチ、トマトとアスパラのパスタ、ペペロンチーノ、サーモンのフライとタルタル、ヴィシソワーズ、スモークサーモンのカルパッチョ、鶏ももローストのディナーコース、開店前から予約客の列。',
      confidence: 'medium', sources: [TB, SITE, R + 'B517691709/', R + 'B532051228/', R + 'B532210093/', R + 'B532908005/', R + 'B533660896/', R + 'B533703221/', R + 'B535436342/', R + 'B535509477/', R + 'B535692390/', R + 'B536293860/', R + 'B538245395/', R + 'B538772487/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead for lunch.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区仏光寺通烏丸西入ル釘隠町238-240',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with an October 2026 notice; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.001281, 135.758557); cross-checked: GSI 京都府京都市下京区釘隠町238番地 (lot) 31m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535509477/'],
    price_note: 'Lunch course price from a September 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Lunch course with all-you-can-eat breads', '¥2,900', 'Lunch', 'no', 'no', 'September 2026.', 'lunch_course'),
      it('', '', 'Salad lunch with breads', '', 'Lunch', 'no', 'no', '', 'salad_lunch'),
      it('', '', 'Pasta lunch (e.g. peperoncino)', '', 'Lunch', 'no', 'no', '', 'pasta_lunch'),
    ] }, {
    cuisine: 'ブーランジェリーカフェダイニング、京町家のフレンチ・イタリアン (食べログ)・昼は焼きたてのパンをテーブルに運ぶ食べ放題、バジルのフォカッチャ、明太子、胡椒、紅茶のパンなど10種以上 (2026年の口コミ)・サラダと生ハム、選べるパスタなどのランチコース2,900円 (2026年9月)、サラダランチ、トマトとアスパラ、ペペロンチーノなどのパスタ、サーモンのフライとタルタル、ヴィシソワーズ (2026年)・夜のコース: スモークサーモンのカルパッチョ、パスタ、鶏ももローストなど (2026年8月)、アニバーサリーや宴会のコース、昼の個室プラン (公式サイト)',
    neighborhood: '四条烏丸、仏光寺通。四条駅から徒歩2分',
    gf_detail: 'グルテンフリーは実質不可。食べ放題の自家製パンとパスタが中心のブーランジェリーカフェのランチ (食べログ、口コミ)。',
    vegan_detail: 'ヴィーガン不可。生ハムのサラダ、クリームスープ、魚や肉のコース (口コミ)。',
    notes: '[イタリアン・ブーランジェリーカフェ・四条烏丸、町家でパン食べ放題のランチ] 四条烏丸から1筋のおしゃれな町家のレストラン。昼はフォカッチャ、明太子、紅茶のパンなど焼きたてのパンを次々運んでくれ、サラダとパスタと (コース2,900円ほど)。夜はフレンチ・イタリアンのコース、個室や2階の貸切も。昼は開店で埋まるので予約を。火曜休み。',
  });
}

// ================================================================ 祇園 蕪屋
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26001441/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://cabura.co.jp/kaburaya/';
  const H = day(['17:00', '22:00']);
  put({
    id: 'kyoto_gion_kaburaya', name: '祇園 蕪屋 (Gion Kaburaya)', category: 'OMNI',
    lat: 35.00337492403864, lng: 135.77428317441866, cuisine_type: 'obanzai',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Obanzai and Kyoto dishes seasoned with soy sauce and miso, plus kushikatsu and tempura; no gluten information is published (Tabelog; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi from kombu and katsuobushi, fish and meat dishes (Tabelog).',
    hours_raw: '17:00–22:00 (last food order 21:00), daily; irregular closures (Tabelog). Bookings recommended; tables limited to 2 hours (2.5 for courses); no-shows after 20 minutes may be cancelled; L-shaped counter in the main building (Tabelog). Table charge ¥440, not for courses (Tabelog). Cards and PayPay; no e-money (Tabelog). 80 seats with semi-private and private rooms for 2–30; separated smoking area; English menu; small children welcome (Tabelog; June 2026). On the first lane west off Hanamikoji south of Shijo, 5 min walk from Gion-Shijo Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion, just off Hanamikoji — 5 min walk from Gion-Shijo Stn',
    cuisine: 'Kyoto obanzai and Kyoto vegetables in izakaya style (Tabelog) · heirloom and organic Kyoto vegetables picked up from growers in Kamigamo, Kamitoba and Fushimi; naturally brewed soy sauce and miso; kombu and katsuobushi from an old Kyoto wholesaler (Tabelog) · obanzai; sashimi of hamo, blanched and raw; saikyo-grilled sawara; Kamo-aubergine agedashi; Kaga aubergine; salt-grilled ayu; diced octopus; grilled-octopus shabu; marbled roast beef; dobin-mushi; kushikatsu with a Kyoto sauce (2026 reviews) · seasonal courses such as hamo; limited-time buri-shabu with Kyoto vegetables (2026; Tabelog) · local sake',
    website: SITE, gmaps: gm('祇園 蕪屋 花見小路'), menu_url: TB + 'dtlmenu/',
    notes: "[Obanzai izakaya · Gion off Hanamikoji, Kyoto vegetables] A renovated townhouse just off Hanamikoji serving obanzai and Kyoto dishes built on vegetables picked up from Kamigamo and Fushimi growers, with stock from an old Kyoto kombu and bonito wholesaler: Kamo-aubergine agedashi, hamo two ways, saikyo-grilled fish, kushikatsu. Reasonable for Gion — about ¥4,000–8,000. English menu; families welcome.",
    chef_bio: { chef_name: null, roles: ['Chef not named; operated by Groupe ZION, which also runs a live and party space (official site)'], origin: null,
      background: 'Per Tabelog’s introduction: signature obanzai and Kyoto vegetables sourced through its own channels — heirloom and organic vegetables collected from growers in Kamigamo, Kamitoba and Fushimi — with brewery-direct soy sauce and miso, and kombu and katsuobushi from a long-established Kyoto wholesaler, served izakaya style. The operator’s site names Groupe ZION, running 祇園 蕪屋 and the live and party space SPACE ZION.',
      philosophy: null,
      specialty: 'Obanzai and Kyoto vegetables.',
      anecdotes: [
        { text: 'A June 2026 family with a preschooler found a semi-private room — rare in Gion for small children.', source: R + 'B530955349/' },
        { text: 'An October 2026 guest came after a Kyo-mai dance performance at Gion Kobu for a seasonal two-tier starter.', source: R + 'B536861852/' },
        { text: 'An October 2026 diner ordered the grilled-octopus shabu over the obanzai and found it underwhelming.', source: R + 'B537124893/' },
      ],
      japanese_sources_summary: '食べログ: 祇園 蕪屋、日本料理・居酒屋、東山区祇園花見小路四条下ル一筋目西入ル南側、京阪祇園四条駅から徒歩5分、阪急河原町駅から徒歩8分、毎日 17:00〜22:00 (L.O. 料理21:00)、不定休、席は2時間 (コースは2時間半)、20分以上の遅刻はキャンセルの場合あり、本館のカウンターはL字、英語メニュー、席料440円 (ランチとコースは無し)、カード・PayPay可、電子マネー不可、80席、個室・半個室、分煙、インボイス T4130001046380。公式紹介: 名物のおばんざいと独自ルートの京野菜、上賀茂・上鳥羽・伏見の農家から京の伝統野菜や有機野菜を自ら引き取り、蔵元直送の天然醸造の醤油と味噌、京都の老舗問屋の昆布と鰹節、居酒屋スタイルの京料理、期間限定の京野菜のぶりしゃぶ。運営サイト (cabura.co.jp): Groupe ZION、ライブ&パーティースペース SPACE ZION・祇園 蕪屋。口コミ (2026年、英語): 加賀なす、鮎の塩焼き、鱧の湯引きとお造り、鰆の西京焼き、賀茂なすの揚げ出し、おばんざい3種、たこぶつ、焼きだこしゃぶ、霜降りのローストビーフ、土瓶蒸し、京風のソースの串カツ、鱧のコース、子ども連れでも。',
      confidence: 'medium', sources: [TB, SITE, R + 'B529576946/', R + 'B530955349/', R + 'B532431348/', R + 'B533647474/', R + 'B533692738/', R + 'B534456074/', R + 'B535793759/', R + 'B536005340/', R + 'B536861852/', R + 'B536997643/', R + 'B537124893/', R + 'B538679110/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区祇園花見小路四条下ル一筋目西入ル南側',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with online booking; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.003375, 135.774283); the address has no lot number and GSI resolves 祇園町南側 only to the district (179m), so not lot-checked; the point sits just west of Hanamikoji south of Shijo, as the address describes; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533647474/'],
    price_note: 'No prices in reviews; dinner about ¥4,000–8,000 a head (2026).', last_checked: TODAY, items: [
      it('', '', 'Obanzai, three kinds', '', 'Obanzai', 'ask', 'no', '', 'obanzai'),
      it('', '', 'Kamo aubergine agedashi', '', 'Dishes', 'ask', 'no', '', 'kamonasu'),
      it('', '', 'Kushikatsu', '', 'Dishes', 'no', 'no', '', 'kushikatsu'),
    ] }, {
    cuisine: '居酒屋スタイルの京のおばんざいと京野菜 (食べログ)・上賀茂、上鳥羽、伏見の農家から引き取る京の伝統野菜や有機野菜、天然醸造の醤油と味噌、京都の老舗問屋の昆布と鰹節 (食べログ)・おばんざい、鱧の湯引きとお造り、鰆の西京焼き、賀茂なすの揚げ出し、加賀なす、鮎の塩焼き、たこぶつ、焼きだこしゃぶ、霜降りのローストビーフ、土瓶蒸し、京風のソースの串カツ (2026年の口コミ)・鱧などの季節のコース、期間限定の京野菜のぶりしゃぶ (2026年、食べログ)・地酒',
    neighborhood: '祇園、花見小路のすぐ西。祇園四条駅から徒歩5分',
    gf_detail: '要確認。醤油や味噌で味付けしたおばんざいや京料理、串カツや天ぷら。グルテンの情報は公開されていない (食べログ、口コミ)。',
    vegan_detail: 'ヴィーガン不可。昆布と鰹節の出汁、魚や肉の料理 (食べログ)。',
    notes: '[おばんざい居酒屋・花見小路のすぐ西の祇園、京野菜] 花見小路を入った改装町家で、上賀茂や伏見の農家から引き取る京野菜と老舗問屋の昆布・鰹節の出汁で、おばんざいと京料理。賀茂なすの揚げ出し、鱧の二通り、西京焼き、串カツ。祇園にしては手頃で4,000〜8,000円ほど。英語メニュー、子ども連れも歓迎。',
  });
}

save();
