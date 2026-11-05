// Kyoto "what did we miss" pass (kyoto-missed) — lane osw13 (Tabelog id mod 6 = 0), batch 26.
// Kyoto priority (Greg, 2026-11-05): 2 shops from `next core`, 2 from `next notable`, lane only.
//   core:    + 鯛壽司 Tai Sushi (17-seat counter, Kawaramachi, over 50 years; negima soup)
//            + ザ ノーザンライツコーナー The Northern Lights Corner (standing bar with terrace, Hanayu Koji; K-stage, 2013)
//            - ぎょうざ歩兵 京都髙島屋S.C.店 26040180 skipped: chain (six shops on the official site)
//   notable: + イル ギオットーネ 京都本店 IL GHIOTTONE (Yasuhiro Sasajima's Italian by the Yasaka Pagoda, 2002)
//            + たかつじ 佳粋 Takatsuji Kasui (14-seat izakaya, Izakaya WEST 100 2025–26; ex-Pontocho Kasui)
//   None is in data/kyoto.json: grep by name (鯛壽司/Tai Sushi, ノーザン/Northern Lights, ギオットーネ/Ghiottone,
//   佳粋/Kasui, 歩兵/Hohei) and address (一筋目東入ル, 中之町565-23, 八坂上町388, 茶磨屋町233) found none (the one
//   "Ghiottone" hit is a line in another record's chef history). Tabelog URLs copied from each listing.txt line 1.
//   Pins: GSI only (no OSM). No new pin within 3 m of another (check-stacked-pins run before hand-off).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-26');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26040180', 'ぎょうざ歩兵 京都髙島屋S.C.店 (Gyoza Hohei Kyoto Takashimaya S.C.): a chain — the official shop page (gyozahohei.com/access/) lists six shops: 祇園本店, 京都髙島屋S.C.店, 銀座店, 名古屋錦店, 仙台一番町店 and a Paris shop; this one opened 17 October 2023 with the same menu as the Gion honten (Tabelog)');

// ================================================================ 鯛壽司
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26000082/'; const R = TB + 'dtlrvwlst/';
  const RETTY = 'https://retty.me/restaurant/100000797366/';
  const H = day(['17:00', '22:00']);
  put({
    id: 'kyoto_tai_sushi_kawaramachi', name: '鯛壽司 (Tai Sushi)', category: 'OMNI',
    lat: 35.004285, lng: 135.769759, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Nigiri omakase and sashimi plates; no gluten or soy-sauce information. Dislikes have been swapped out of the omakase when asked (November 2021).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: every guest must order one dish, a fish sushi set or a sashimi plate (February 2026), and the house negima soup is tuna and leek.',
    hours_raw: 'Tabelog: 17:00–22:00, closed Thursday; hours may change, check before visiting. Reservations taken by phone (075-221-6598); a January 2023 diner booked the same day and the counter filled at opening. One dish per person is required (a sashimi plate or a sushi set), drinks are optional (February 2026). Cash only (no cards, e-money or QR). 17 counter seats; non-smoking (Tabelog). 2 min walk from Hankyu Kawaramachi Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'First lane east, north of Shijo-Kawaramachi — 2 min walk from Hankyu Kawaramachi Stn',
    cuisine: 'Neighbourhood Edomae sushi at a U-shaped 17-seat counter, more than 50 years in business (Retty) · omakase nigiri: 8 pieces ¥2,000 (2021–22), ¥2,640 (January 2023); a sushi set for one ¥3,300 before tax (January 2025) · thick-sliced chu-toro sashimi, 8 slices ¥3,300 (February 2026) · extra pieces to order: chu-toro, squid, scallop, negi-toro, kanpachi, anago, toro-taku · the house negima soup (tuna and leek) to finish · sake (one kind, 2017) and shochu',
    website: TB, gmaps: gm('鯛壽司 京都 河原町'), menu_url: TB,
    notes: "[Sushi · Shijo-Kawaramachi, old-style counter] A family sushi counter up the first lane off Kawaramachi north of Shijo, in business for over 50 years: a U-shaped counter of 17 seats, large cuts on traditional rice, and the house negima soup of tuna and leek. A long-time regular found in January 2023 that the previous owner had handed over to a son. Omakase of 8 pieces was ¥2,640 in 2023; a set was ¥3,300 before tax in January 2025, and 8 thick slices of chu-toro sashimi ¥3,300 in February 2026. One dish per person; cash only. 17:00–22:00, closed Thursday; book by phone.",
    chef_bio: { chef_name: null, roles: ['Chef at the counter (unnamed); a son of the previous owner, per a January 2023 review'], origin: null,
      background: 'Retty describes a long-established sushi shop at Shijo-Kawaramachi with more than 50 years in business; a 2017 Retty review calls it a popular Edomae sushi shop of "50 years and more", and a 2015 Retty review says it was run by a friendly couple, another the warmth of a family business. A Tabelog review of a March 2021 visit describes a kind chef and the chef’s wife working quickly; a January 2023 diner, a regular under the previous owner, found the previous owner had passed the shop on to a son who looks just like the father.',
      philosophy: null,
      specialty: 'Omakase nigiri; negima soup; toro-taku.',
      anecdotes: [
        { text: '"I once asked the owner if it was okay to order just chu-toro. … [The answer was] yes but … it would put [the shop] in the red." — remembered by a former regular, January 2023.', source: R + 'B458997927/' },
        { text: '"I had so many pieces of toro-taku … that I even lost count, and the chef laughed at me." — December 2021.', source: R + 'B443846321/' },
        { text: 'A diner who had come long before felt a little let down in January 2025 by a menu now "tailored for foreign customers", while finding the sushi delicious; in November 2024 another found every other guest was from overseas.', source: R + 'B498987820/' },
        { text: '"I was honestly surprised to receive 8 generous slices of fatty tuna sashimi for just JPY 3,300." — February 2026.', source: R + 'B522560308/' },
      ],
      japanese_sources_summary: 'Retty: 四条河原町で創業50年を超える老舗の寿司屋、カウンターのみ17席、全席禁煙、毎週木曜日休み、カード不可。口コミ: 「京都最高の大衆江戸前寿司」「50年有余」(2017年)、お任せ8貫2000円・瓶ビール500円 (2015年)、気さくなご夫婦でやっておられて (2015年)、御家族経営の暖かさ、名物のねぎま(汁)、メニューや値段表はない、酒は一種類 (2017年)。食べログ: 寿司・海鮮・日本料理、中京区四条河原町上ル一筋目東入ル、17:00〜22:00、木曜定休、予約可、カード・電子マネー・QR 不可、カウンター17席、禁煙。口コミ (2021年3月〜2026年2月、英語): お任せ8貫2,000円 (2021〜22年)・2,640円 (2023年1月)、セット3,300円税別 (2025年1月)、中トロの刺身8切れ3,300円 (2026年2月)、ねぎま汁、とろたく、ひとり一品の注文制、2023年1月に先代から息子さんへ代替わり。',
      confidence: 'medium', sources: [TB, RETTY, R + 'B443846321/', R + 'B444646435/', R + 'B454789570/', R + 'B458997927/', R + 'B465704678/', R + 'B495375564/', R + 'B498987820/', R + 'B503519516/', R + 'B521473177/', R + 'B522560308/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set omakase at the counter, so little ordering is needed; book by phone and bring cash. Many overseas guests (November 2024).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区四条河原町上ル一筋目東入ル',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated October 2025 and February 2026.' },
    pin_source: `Tabelog ${TB} (35.004285, 135.769759); GSI could not place the lot-less address (it matched 一之船入町, about 900 m north), so the pin stays on the Tabelog point; mp_tsukiji is 12 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B458997927/', R + 'B498987820/', R + 'B522560308/'],
    price_note: 'No menu or price list at the counter (Retty, 2017); prices from dated reviews.', last_checked: TODAY, items: [
      it('', '', 'Omakase nigiri, 8 pieces', '¥2,640', 'Sushi', 'ask', 'no', 'January 2023 (¥2,000 in 2021–22).', 'omakase_8'),
      it('', '', 'Sushi set for one', '¥3,300 + tax', 'Sushi', 'ask', 'no', 'January 2025.', 'sushi_set'),
      it('', '', 'Chu-toro sashimi, 8 thick slices', '¥3,300', 'Sashimi', 'ask', 'no', 'February 2026.', 'chutoro_sashimi'),
      it('ねぎま汁', '', 'Negima soup (tuna and leek)', '', 'Soup', 'ask', 'no', 'House specialty.', 'negima_soup'),
    ] }, {
    cuisine: 'U字の17席のカウンターの町の江戸前寿司、創業50年以上 (Retty)・お任せ握り: 8貫2,000円 (2021〜22年)、2,640円 (2023年1月)、ひとり用のセット3,300円税別 (2025年1月)・厚切りの中トロの刺身8切れ3,300円 (2026年2月)・追加で中トロ、イカ、ホタテ、ネギトロ、カンパチ、穴子、とろたく・締めは名物のねぎま汁 (マグロとネギ)・日本酒 (一種類、2017年)、焼酎',
    neighborhood: '四条河原町の北、一筋目を東へ。阪急京都河原町駅から徒歩2分',
    gf_detail: '要確認。お任せ握りと刺身。グルテンや醤油の情報はない。苦手なネタは頼めば替えてもらえた (2021年11月)。',
    vegan_detail: 'ヴィーガン不可: ひとり一品、魚の寿司セットか刺身の注文が必要 (2026年2月)。名物のねぎま汁はマグロとネギ。',
    notes: '[寿司・四条河原町、昔ながらのカウンター] 四条の北、河原町から一筋目を東に入った、創業50年を超える家族の寿司屋。U字のカウンター17席、昔ながらのシャリに大ぶりのネタ、締めは名物のねぎま汁。先代のころからの常連は2023年1月、息子さんに代替わりしていたと書いている。お任せ8貫は2023年に2,640円、2025年1月にはセット3,300円税別、2026年2月には厚切りの中トロの刺身8切れが3,300円。ひとり一品の注文制、現金のみ。17時〜22時、木曜休み、電話で予約。',
  });
}

// ================================================================ ザ ノーザンライツコーナー
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26024874/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://k-stage.jp/the_northern_lights_corner.html'; const CO = 'https://k-stage.jp/company.html';
  const H = day(['15:00', '23:00']);
  put({
    id: 'kyoto_northern_lights_corner', name: 'ザ ノーザンライツコーナー (The Northern Lights Corner)', category: 'OMNI',
    lat: 35.004133, lng: 135.767835, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A drinks bar: beer, gin and tonics, whisky and cocktails; the only food reviewers mention is potato bread and cream cheese with rum raisins on crackers (March 2025).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Spirits and fruit cocktails may suit; some cocktails use cream (a Grasshopper, June 2025) and the snacks seen include cream cheese.',
    hours_raw: 'Official site: 15:00–23:00 (last order 22:30), opened as a bar for a light drink from the afternoon; Tabelog also gives 15:00–23:00 every day; an October 2025 review gave 15:00–24:00 with irregular closures. No cover charge (Tabelog; 2025 reviews). Bookings taken (Tabelog). Mostly standing at the counter, with high tables and a terrace by the entrance; 16 places (Tabelog). Smoking is allowed inside (Tabelog; October 2025 and October 2026 reviews). Cards and QR payments (Tabelog). On the ground floor of the Hare no Hi Hanayu Koji building, the first alley east off Shinkyogoku north of Shijo; 1 min from Hankyu Kawaramachi Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Hanayu Koji alley off Shinkyogoku, north of Shijo — 1 min walk from Hankyu Kawaramachi Stn',
    cuisine: 'Afternoon-to-late standing bar with a terrace, from the company behind Gion’s Finlandia Bar (official site; Tabelog) · no cover charge; recommended drinks in the low ¥1,000s (2025 reviews) · Earl Grey gin and tonic ¥1,300, yuzu gin and tonic ¥1,300 (October 2025); seasonal fruit Bellinis (Shine Muscat, Asian pear) and a strawberry rum cocktail; Moscow mule, China Blue, Grasshopper, Naked and Famous; a wide whisky list with some pours around ¥3,000 (December 2025) · snacks: potato bread, cream cheese with rum raisins (March 2025)',
    website: SITE, gmaps: gm('The Northern Lights Corner 京都 花遊小路'), menu_url: TB,
    notes: "[Bar · Shinkyogoku, a drink from 3 pm] A standing bar with a small terrace at the mouth of the Hanayu Koji alley off Shinkyogoku, opened in 2013 by K-stage, the company that runs Gion's Finlandia Bar; it was named for the aurora, as a curtain of light over the alley. No cover charge and most drinks in the low ¥1,000s: gin and tonics with Earl Grey or yuzu (¥1,300), seasonal fruit Bellinis, a long whisky list. A year-end regular praises the young manager's knowledge; smoking is allowed inside, so non-smokers take the terrace. 15:00–23:00.",
    chef_bio: { chef_name: null, roles: ['Bar of K-stage (株式会社ケイ・ステージ), which also runs ぎをん FINLANDIA BAR, The Common One Bar Kyoto, Turquoise Bar and ぎをん新橋 何生庵'], origin: null,
      background: 'Per the K-stage company history: in August 2013 the company opened The Northern Lights Corner on the ground floor and the more formal Bar The Northern Lights on the first floor of the new Hare no Hi Hanayu Koji building in Shinkyogoku (the upstairs bar closed in December 2021; the space is now an office of アルコ・ノルディック株式会社, the company’s vodka importer). The name wishes for a curtain of light like the aurora over Hanayu Koji. The corner bar first opened at 14:00 and now opens at 15:00. K-stage took over Gion’s Finlandia Bar (founded February 1982 as a sister to the Finnish restaurant FINLANDIA, opened at Gojo-Yanaginobaba in 1976) in November 2002. Tabelog’s note calls it Finlandia’s first try at a standing bar. A June 2025 review says staff sometimes rotate between the sister bars.',
      philosophy: 'Per the official site: opened as a bar for a light drink from midday, with everything from beer to proper cocktails to enjoy casually.',
      specialty: 'Gin and tonics; seasonal fruit cocktails; whisky.',
      anecdotes: [
        { text: '"I received a business card later and found out [the bartender] was the manager, which made sense." — December 2024; the same diner returns every year-end (December 2025).', source: R + 'B498603210/' },
        { text: '"I was tempted by bartender Nakagawa\'s conversation to try the trendy Naked and Famous cocktail." — June 2025.', source: R + 'B509296092/' },
        { text: 'A June 2025 diner found guests "of all ages and nationalities" and the owner serving at the counter that day.', source: R + 'B508534768/' },
        { text: '"I can\'t stand the smell of cigarettes, so I chose to drink outside." — October 2026.', source: R + 'B536933877/' },
      ],
      japanese_sources_summary: '公式サイト (k-stage.jp): ザ ノーザンライツコーナー、Northern Lights はオーロラのような光のカーテン、お昼から軽く飲めるバーとして開店、新京極花遊小路、エントランス前にテラス席、ビールから本格的カクテルまで、Open 15:00 - 23:00 (L.o. 22:30)、京都市中京区新京極四条上ル中之町565番23。会社沿革: 1976年フィンランド料理店「FINLANDIA」、1982年「ぎをんFINLANDIA BAR」、2002年株式会社ケイ・ステージ設立、2013年8月「The Northern Lights Corner」と「Bar The Northern Lights」を開業 (2階の Bar The Northern Lights は2021年12月で営業終了)、午後2時開店 (現在は3時オープン)。食べログ: バー、15:00〜23:00、予約可、ノーチャージ、スタンディング (テラス席あり)、16席、喫煙可、カード・QR 可、祇園のフィンランディアが初めて手がけたスタンディングバー。口コミ (2024年12月〜2026年10月、英語): アールグレイのジントニック1,300円、柚子のジントニック1,300円、季節のフルーツのベリーニ、ポテトのパン、ラムレーズンのクリームチーズ、若い店長、バーテンダーの Nakagawa さん、店内は喫煙可。',
      confidence: 'medium', sources: [TB, SITE, CO, 'https://k-stage.jp/', R + 'B498603210/', R + 'B502849297/', R + 'B508534768/', R + 'B509296092/', R + 'B509336427/', R + 'B513314391/', R + 'B514835673/', R + 'B518897755/', R + 'B528324922/', R + 'B536933877/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Walk-in standing bar; tell the bartender the spirits or flavours you like and a drink is suggested. Smoking is allowed inside.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区新京極通四条上ル中之町565-23 ハレの日 花遊小路1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (K-stage, © 2025) and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004133, 135.767835); cross-checked: GSI 京都府京都市中京区中之町565番地 (lot) 34m; kyr_mendokoro_janomeya (also on 中之町565, per its pin_source) is 6 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B514835673/', R + 'B518897755/', R + 'B502849297/'],
    price_note: 'No menu published; prices from October 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Earl Grey gin and tonic', '¥1,300', 'Cocktails', '', '', 'October 2025.', 'earl_grey_gin_tonic'),
      it('', '', 'Yuzu gin and tonic', '¥1,300', 'Cocktails', '', '', 'October 2025.', 'yuzu_gin_tonic'),
      it('', '', 'Seasonal fruit Bellini (Shine Muscat or Asian pear)', '', 'Cocktails', '', '', 'October 2025.', 'seasonal_bellini'),
      it('', '', 'Cream cheese with rum raisins, with crackers', '', 'Snacks', 'ask', 'no', 'March 2025.', 'rum_raisin_cream_cheese'),
    ] }, {
    cuisine: '祇園のフィンランディアバーの会社による、昼過ぎから夜まで飲めるテラス付きのスタンディングバー (公式サイト、食べログ)・ノーチャージ、おすすめは1,000円台前半 (2025年の口コミ)・アールグレイのジントニック1,300円、柚子のジントニック1,300円 (2025年10月)、季節のフルーツのベリーニ (シャインマスカット、梨)、苺のラムのカクテル、モスコミュール、チャイナブルー、グラスホッパー、ネイキッド・アンド・フェイマス、ウイスキーが豊富で1杯3,000円ほどのものも (2025年12月)・つまみ: ポテトのパン、ラムレーズンのクリームチーズ (2025年3月)',
    neighborhood: '四条の北、新京極から入る花遊小路。阪急京都河原町駅から徒歩1分',
    gf_detail: '要確認。ビール、ジントニック、ウイスキー、カクテルが中心のバー。口コミに出る食べ物はポテトのパンと、クラッカーにのせたラムレーズンのクリームチーズだけ (2025年3月)。',
    vegan_detail: '要確認。スピリッツやフルーツのカクテルは合いそう。クリームを使うカクテル (グラスホッパー、2025年6月) があり、つまみにはクリームチーズ。',
    notes: '[バー・新京極、15時から一杯] 新京極の花遊小路の入り口にある、小さなテラス付きのスタンディングバー。祇園のフィンランディアバーを営むケイ・ステージが2013年に開き、小路にオーロラのような光のカーテンをと名付けた。ノーチャージで、ドリンクはおおむね1,000円台前半: アールグレイや柚子のジントニック (1,300円)、季節のフルーツのベリーニ、豊富なウイスキー。毎年末に通う客は若い店長の知識をほめる。店内は喫煙可なので、たばこが苦手ならテラスへ。15時〜23時。',
  });
}

// ================================================================ イル ギオットーネ 京都本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26001006/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://ilghiottone.com/'; const KYOTO = SITE + 'kyoto/';
  const SERAI = 'https://serai.jp/gourmet/5657/2'; const BUNSHUN = 'https://bunshun.jp/articles/-/2929';
  const H = day(['12:00', '14:00'], ['18:00', '20:00']);
  put({
    id: 'kyoto_il_ghiottone_honten', name: 'イル ギオットーネ 京都本店 (IL GHIOTTONE Kyoto honten)', category: 'MOM_AND_POP',
    lat: 34.998921, lng: 135.77926, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information. Every course has two pasta courses (chitarra, orecchiette, tagliatelle, linguine) plus house focaccia and bread (2026 reviews; official course list); a September 2026 diner who pre-ordered had disliked ingredients left out, so some changes are made.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask when booking. No vegetarian course is listed; courses run on fish, shellfish, duck, lamb, veal and beef, with burrata and Parmigiano (2026 reviews). A September 2026 diner noted many vegetable dishes.',
    hours_raw: 'Tabelog: lunch 12:00–14:00 and dinner 18:00–20:00 (both times are the last seating), closed Tuesday and Wednesday; changes to closing days on the official website. Booking online (Toreta, via the official site) or by phone; a September 2026 diner booked a weekday lunch about a month ahead, and the same month a diner saw walk-ins turned away. Courses only: lunch Pranzo A ¥6,000, B ¥8,000, C ¥12,000, D ¥16,000; dinner Cena A ¥12,000, B ¥16,000, C ¥20,000; tax and service (5% lunch, 10% dinner) added (official site). Children 6 and under: ask the restaurant; à la carte and a kids’ plate can be made (official site). 45 seats with counter, sofa seats and private rooms for 2–12; non-smoking; cards (Tabelog). On the lane just below the Yasaka Pagoda; 8 min walk from Keihan Gion-Shijo Stn, or tell a taxi "Yasaka Pagoda" (Tabelog).',
    hours: { 0: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Below the Yasaka Pagoda, Higashiyama — 8 min walk from Gion-Shijo Stn',
    cuisine: '"What if Italy had a region called Kyoto?" — Italian courses built on Kyoto ingredients (official site) · lunch Pranzo A ¥6,000 (3 antipasti, 1 pasta, main, dessert and coffee), B ¥8,000 (2 pasta), C ¥12,000 and D ¥16,000; dinner Cena A ¥12,000, B ¥16,000, C ¥20,000; tax and service extra (official site) · 2026 dishes: charcoal-grilled sea snail and tairagi, burrata with autumn fruit, caviar and osmanthus wine; Spanish mackerel with Kyoto dashi, sea urchin and snow crab; chitarra with barracuda and matsutake; orecchiette with sausage and porcini; tagliatelle with Parmigiano and black truffle (+¥2,420); New Zealand duck, Australian lamb or Kyoto heifer (+¥3,630); house focaccia kept warm in a wooden box',
    website: SITE, gmaps: gm('IL GHIOTTONE 京都本店 八坂の塔'), menu_url: KYOTO,
    notes: "[Italian · Yasaka Pagoda, Kyoto as an Italian region] Chef-owner Yasuhiro Sasajima's restaurant in a converted townhouse right beside the Yasaka Pagoda, open since 2002 and built on one idea: what if Italy had a region called Kyoto? Courses only, lunch from ¥6,000 and dinner from ¥12,000 (plus tax and service): Kyoto vegetables and seasonal fish, two pastas with cheese or truffle grated at the table, charcoal-grilled meat. Italian WEST Tabelog 100 (2021, 2023, 2025). One September 2026 diner found the floor short-staffed. Lunch and dinner, closed Tuesday and Wednesday; book online.",
    chef_bio: { chef_name: 'Yasuhiro Sasajima (笹島保弘)', roles: ['Owner-chef (オーナーシェフ, official site)'], origin: 'Osaka Prefecture (Serai, 2013)',
      background: 'Born in Osaka Prefecture in 1964 (Serai, from its spring 2013 issue). Bunshun Online (2017) recalls the chef at イル・パッパラルド in Kyoto, with generous, energetic, reasonably priced plates, and dates the chef’s independence to 2002, launching IL GHIOTTONE as "Italian sent out from Kyoto": courses based on kombu dashi, scented with kinome and yuzu, with Kyoto vegetables such as Kujo leek and Shogoin turnip. Serai gives the Kyoto opening as 2002 and a Marunouchi (Tokyo) branch as 2005; the official site now lists the Kyoto honten, the wine shop Officina IL GHIOTTONE KYOTO (which also sells the group’s frozen pasta sauces) and IL GHIOTTONE DI PIÙ in Grand Front Osaka. Tabelog Italian WEST "Tabelog 100" 2021, 2023 and 2025. A September 2026 diner praised the service of the chef’s wife.',
      philosophy: 'Per the official site: the cooking grew from the thought "what if Italy had a region called Kyoto?" — the chef’s answer, as a Japanese cook, to the meaning of going on making the Italian food the chef loves in Japan: Italian cooking found only in Japan.',
      specialty: 'Kyoto-ingredient Italian courses; chitarra and tagliatelle; charcoal-grilled meat.',
      anecdotes: [
        { text: 'A diner who came after a YouTube video by Junya Chihara found personal message cards at each reserved seat, and lotus leaves and a shaved-ice machine used as props during the course (August 2025); in August 2026 the machine shaved cucumber into a sauce.', source: R + 'B511743369/' },
        { text: '"The hall staff was working alone … I was left waiting at the entrance without any acknowledgment." The same September 2026 diner found the flavours average and saw walk-ins turned away though seats were empty.', source: R + 'B537346185/' },
        { text: '"Before I knew it, two and a half hours had flown by." — a weekday lunch booked a month ahead, September 2026.', source: R + 'B537227712/' },
        { text: '"The bread is served in a wooden box to keep it warm." — October 2026.', source: R + 'B537251285/' },
      ],
      japanese_sources_summary: '公式サイト (ilghiottone.com): 京都 笹島シェフのイタリアンレストラン、オーナーシェフ 笹島保弘、「もしイタリアに京都という州があったら」、日本でしか出会えない唯一無二のイタリア料理、京都本店 (東山区下河原通塔ノ前下ル八坂上町388-1)、Pranzo A 6,000円・B 8,000円・C 12,000円・D 16,000円、Cena A 12,000円・B 16,000円・C 20,000円、税別・サービス料 (昼5%・夜10%) 別、6歳以下は要問い合わせ、アラカルトやキッズプレートも用意、Officina IL GHIOTTONE KYOTO (ワインショップ、冷凍パスタソース)、グランフロント大阪の IL GHIOTTONE DI PIÙ。サライ (2013年春号): 昭和39年大阪府生まれ、平成14年京都に「イル ギオットーネ」、17年に丸の内店。文春オンライン (2017年): イル・パッパラルドのシェフ、2002年に独立、「京都発信のイタリアン」、昆布だし、木の芽や柚子、九条ネギや聖護院蕪。食べログ: イタリアン・パスタ・イノベーティブ、12:00〜14:00・18:00〜20:00 (最終入店)、火・水曜定休、45席、個室 (2〜12名)、禁煙、カード可、イタリアン WEST 百名店 2021・2023・2025。口コミ (2025年8月〜2026年10月、英語): Pranzo B 8,000円、Cena A 12,000円、キタッラ、オレキエッテ、タリアテッレと黒トリュフ、八坂の塔の隣の町家、シェフの奥さまのサービス、ホールがひとりで手が回らない日も。',
      confidence: 'medium', sources: [TB, SITE, KYOTO, SERAI, BUNSHUN, R + 'B447730314/', R + 'B511743369/', R + 'B534341048/', R + 'B535165751/', R + 'B536410167/', R + 'B536503945/', R + 'B537149362/', R + 'B537227712/', R + 'B537251285/', R + 'B537346185/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set courses booked online through the official site (Toreta); dishes are explained at the table. Many kimono-clad overseas visitors around the pagoda (September 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区下河原通塔の前下ル八坂上町388-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (updated September 2026) and Tabelog listing; reviews dated through October 2026; Italian WEST Tabelog 100 2025.' },
    pin_source: `Tabelog ${TB} (34.998921, 135.77926); cross-checked: GSI 京都府京都市東山区八坂上町388番地 (lot) 36m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [KYOTO, R + 'B447730314/'],
    price_note: 'Course prices from the official site (tax and 5% lunch / 10% dinner service extra); supplements from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Pranzo A (3 antipasti, 1 pasta, main, dessert and coffee)', '¥6,000', 'Lunch courses', 'ask', 'ask', '', 'pranzo_a'),
      it('', '', 'Pranzo B (3 antipasti, 2 pasta, main, dessert and coffee)', '¥8,000', 'Lunch courses', 'ask', 'ask', '', 'pranzo_b'),
      it('', '', 'Pranzo C (4 antipasti, 2 pasta, main, dessert and coffee)', '¥12,000', 'Lunch courses', 'ask', 'ask', '', 'pranzo_c'),
      it('', '', 'Pranzo D', '¥16,000', 'Lunch courses', 'ask', 'ask', '', 'pranzo_d'),
      it('', '', 'Cena A (4 antipasti, 2 pasta, main, dessert and coffee)', '¥12,000', 'Dinner courses', 'ask', 'ask', '', 'cena_a'),
      it('', '', 'Cena B', '¥16,000', 'Dinner courses', 'ask', 'ask', '', 'cena_b'),
      it('', '', 'Cena C', '¥20,000', 'Dinner courses', 'ask', 'ask', '', 'cena_c'),
      it('', '', 'Supplement: tagliatelle with Parmigiano and black truffle', '+¥2,420', 'Supplements', 'no', 'no', 'March 2026.', 'truffle_tagliatelle'),
    ] }, {
    cuisine: '「もしイタリアに京都という州があったら」京都の食材で組み立てるイタリアンのコース (公式サイト)・昼 Pranzo A 6,000円 (前菜3、パスタ1、メイン、デザートとコーヒー)、B 8,000円 (パスタ2)、C 12,000円、D 16,000円・夜 Cena A 12,000円、B 16,000円、C 20,000円、税・サービス料別 (公式サイト)・2026年の料理: 炭火で焼いた貝やタイラギ、秋の果物とキャビアと金木犀のワインのブッラータ、京都のだしに雲丹とズワイガニを合わせた鰆、カマスと松茸のキタッラ、ソーセージとポルチーニのオレキエッテ、パルミジャーノと黒トリュフのタリアテッレ (+2,420円)、ニュージーランドの鴨、オーストラリアの仔羊、京都の牛 (+3,630円)、木箱で温かく出す自家製フォカッチャ',
    neighborhood: '東山、八坂の塔のすぐ下。祇園四条駅から徒歩8分',
    gf_detail: '予約時に要確認。グルテンの情報はない。どのコースもパスタが2皿 (キタッラ、オレキエッテ、タリアテッレ、リングイネ) に自家製フォカッチャとパン (2026年の口コミ、公式のコース表)。2026年9月に事前に頼んだ客は苦手な食材を外してもらえたので、ある程度の変更はできる。',
    vegan_detail: '予約時に要確認。ベジタリアンのコースはない。魚、貝、鴨、仔羊、仔牛、牛にブッラータやパルミジャーノ (2026年の口コミ)。2026年9月の客は野菜の料理が多いと書いている。',
    notes: '[イタリアン・八坂の塔、京都州のイタリア料理] オーナーシェフ笹島保弘さんの店。八坂の塔のすぐ脇の町家を改装し、2002年から「もしイタリアに京都という州があったら」という考えで料理を作る。コースのみで、昼は6,000円から、夜は12,000円から (税・サービス料別): 京野菜と旬の魚、目の前でチーズやトリュフを削る2皿のパスタ、炭火の肉。イタリアン WEST 百名店 (2021・2023・2025)。2026年9月にはホールの人手が足りないと感じた客もいる。昼と夜、火・水曜休み、ネットで予約。',
  });
}

// ================================================================ たかつじ 佳粋
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26039136/'; const R = TB + 'dtlrvwlst/';
  const RETTY = 'https://retty.me/restaurant/100001696372/'; const IG = 'https://www.instagram.com/takatsuji_kasui/';
  const WD = day(['17:00', '23:00']); const WE = day(['16:00', '23:00']);
  put({
    id: 'kyoto_takatsuji_kasui', name: 'たかつじ 佳粋 (Takatsuji Kasui)', category: 'OMNI',
    lat: 35.000235, lng: 135.765933, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking: the shop asks guests to state allergies when reserving and will do its best, but may not always be able to accommodate (Tabelog). No gluten information; dishes include nuta with miso, dashi soups and seasoned rice.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: every first visit is served a soup and two small dishes (Tabelog), and the soup is a dashi broth, in 2026 with shrimp dumpling; the rest of the menu is fish, shellfish and sashimi.',
    hours_raw: 'Tabelog: Monday–Friday 17:00–23:00, Saturday, Sunday and holidays 16:00–23:00, last order 22:00; closed irregularly. Bookings taken; the shop does not accept bookings from overseas guests because of no-shows — visitors should book through their hotel front desk or come in person beforehand, and bookings made through a Japanese individual are not accepted; a booking more than 10 minutes late may be cancelled. Minors are not admitted (ask). First visits are served a soup and two small dishes even on a seats-only booking (the set was ¥3,000 in September and October 2026); à la carte prices are not printed, so ask; a seat charge may apply if nothing à la carte is ordered (Tabelog; October 2026). 14 seats (10 counter, one table of 4); non-smoking; cards accepted, no e-money or QR (Tabelog; Retty lists PayPay). Behind a heavy iron door at the back of the ground floor of アネックス2番館; 5 min walk from Hankyu Kawaramachi Stn (Tabelog; September 2026).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Takatsuji-dori, Shimogyo-ku — 5 min walk from Hankyu Kawaramachi Stn',
    cuisine: 'Counter izakaya with Japanese and some Western dishes and a deep sake list (Tabelog; 2026 reviews) · first-visit set of appetiser, soup and sashimi ¥3,000 (September and October 2026): in autumn simmered grilled eggplant, a jelly and sesame tofu, a shrimp-dumpling soup with winter melon and sudachi, bonito and kombu-cured sea bream · à la carte without printed prices: vinegared sardine, whelk and Kujo leek nuta with red miso, grilled Spanish mackerel with sudachi soy, soft-shell turtle soup, a grilled fish with yuzu ¥1,200, an assortment of sea bream, grilled Spanish mackerel and mackerel ¥1,500 (October 2026), octopus with myoga · donabe rice (from 2 servings; about 30 minutes; anago rice in October 2026) with leftovers wrapped as onigiri to take home · sake kept at −5 °C (March 2023), shochu, beer, white wine from ¥800',
    website: IG, gmaps: gm('たかつじ 佳粋 京都'), menu_url: TB,
    notes: "[Izakaya · Takatsuji-dori, a hidden counter] A 14-seat counter izakaya behind a heavy iron door at the back of a building on Takatsuji-dori, opened in March 2023 by the former owner of Kasui in Pontocho. A first visit starts with appetisers, a dashi soup and sashimi (¥3,000 in 2026), then à la carte — vinegared fish, nuta, grilled Spanish mackerel — and donabe rice, the leftovers sent home as onigiri in a paper bag with a drawing of the owner. Prices are not printed; ask. Izakaya WEST Tabelog 100 2025 and 2026. Overseas guests book through their hotel front desk or in person. Evenings, from 16:00 at weekends.",
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed), the former owner of Kasui in Pontocho'], origin: null,
      background: 'A Tabelog review of a March 2023 visit says the owner of the former Pontocho shop Kasui reopened in Takatsuji after three years; a March 2023 Retty review likewise says the owner ran 佳粋 in Pontocho before opening Takatsuji Kasui. Tabelog gives the opening day as 28 March 2023. A September 2026 diner found two staff running the counter with jazz playing; another remembered the master in a bow tie. Tabelog izakaya WEST "Tabelog 100" 2025 and 2026; Tabelog Hot Restaurant 2026.',
      philosophy: null,
      specialty: 'Dashi soups; donabe rice; sake.',
      anecdotes: [
        { text: 'Leftover donabe rice goes home as onigiri "in a paper bag with a drawing of the owner on it" — October 2026.', source: R + 'B537717317/' },
        { text: '"I nervously asked for the prices, but [the staff] didn’t provide an immediate answer." The same October 2026 diner wished prices were shown, though every dish was delicious.', source: R + 'B537855260/' },
        { text: '"Smartphone reception is weak … Limited to Softbank." — September 2026.', source: R + 'B536114657/' },
        { text: 'A diner in October 2026 loved the food and drink but found the water tasted of chlorine.', source: R + 'B537752524/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋、下京区高辻通り御幸町西入ル茶磨屋町233 アネックス2番館 1F、月〜金 17:00〜23:00・土日祝 16:00〜23:00 (L.O. 22:00)、不定休、インバウンドの方は近隣ホテルのフロント経由で予約、海外の方の予約は受け付けない (日本人を通した予約も不可)、未成年不可、初回は席のみの予約でも汁物と2品を提供、アラカルトに価格表示なし、アレルギーは予約時に、14席 (カウンター10、4名テーブル1)、禁煙、カード可、2023年3月28日オープン、居酒屋 WEST 百名店 2025・2026、ホットレストラン 2026。Retty: たかつじ 佳粋 (たかつじ かすい)、以前は先斗町で「佳粋」、一汁二菜、土鍋ご飯、ウニ乗せ玉子豆腐、鰻のお寿司、出汁巻き、PayPay 可、Instagram takatsuji_kasui。口コミ (2023年3月〜2026年10月、英語): 一汁二菜3,000円、えびしんじょうのお椀、土鍋ご飯の残りはおにぎりに、日本酒は−5℃で管理、蝶ネクタイのマスター、値段が書かれていない、水がカルキ臭い。',
      confidence: 'medium', sources: [TB, RETTY, IG, R + 'B462988436/', R + 'B524135136/', R + 'B535833239/', R + 'B536114657/', R + 'B536249046/', R + 'B536891260/', R + 'B537230924/', R + 'B537717317/', R + 'B537752524/', R + 'B537855260/'] },
    cultural_comfort: { level: 'relay', note: 'The shop takes no bookings from overseas guests directly: book through your hotel front desk, or visit in person beforehand. À la carte prices are not printed — ask.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区高辻通り御幸町西入ル茶磨屋町233 アネックス2番館 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026; Izakaya WEST Tabelog 100 2026.' },
    pin_source: `Tabelog ${TB} (35.000235, 135.765933); cross-checked: GSI 京都府京都市下京区茶磨屋町233番地 (lot) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536114657/', R + 'B537717317/', R + 'B537855260/'],
    price_note: 'À la carte prices are not printed; prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('一汁二菜', '', 'First-visit set: appetisers, soup and sashimi', '¥3,000', 'Set', 'ask', 'no', 'September–October 2026.', 'ichiju_nisai'),
      it('', '', 'Grilled fish marinated with yuzu', '¥1,200', 'À la carte', 'ask', 'no', 'October 2026.', 'yuzu_grilled_fish'),
      it('', '', 'Assortment: sea bream, grilled Spanish mackerel, mackerel', '¥1,500', 'À la carte', 'ask', 'no', 'October 2026.', 'fish_assortment'),
      it('土鍋ご飯', '', 'Donabe rice (from 2 servings)', '', 'Rice', 'ask', 'no', 'About 30 minutes; leftovers as onigiri.', 'donabe_rice'),
      it('', '', 'White wine by the glass', 'from ¥800', 'Drinks', '', '', 'October 2026 (menu).', 'white_wine_glass'),
    ] }, {
    cuisine: '和食に洋の料理も少し、日本酒の揃うカウンターの居酒屋 (食べログ、2026年の口コミ)・初回の前菜、お椀、お造りの一汁二菜3,000円 (2026年9・10月): 秋は焼き茄子、ジュレ、胡麻豆腐、冬瓜とすだちのえびしんじょうのお椀、鰹と昆布締めの鯛・値段の書かれていないアラカルト: 酢じめの鰯、ツブ貝と九条ネギの赤味噌のぬた、鰆のすだち醤油焼き、すっぽんのスープ、柚子に漬けた焼き魚1,200円、鯛と焼いた鰆と鯖の盛り合わせ1,500円 (2026年10月)、蛸とみょうが・土鍋ご飯 (2合から、約30分、2026年10月は穴子)、残りはおにぎりにして持ち帰り・−5℃で管理する日本酒 (2023年3月)、焼酎、ビール、白ワイン800円から',
    neighborhood: '高辻通、御幸町の西。阪急京都河原町駅から徒歩5分',
    gf_detail: '予約時に要確認: アレルギーは予約時に伝えるよう店が求めており、できる限り対応するが、できない場合もある (食べログ)。グルテンの情報はない。味噌のぬた、だしのお椀、炊き込みご飯がある。',
    vegan_detail: 'ヴィーガン不可: 初回は必ず汁物と2品が出て (食べログ)、汁物はだしのお椀、2026年はえびしんじょう入り。ほかの料理も魚、貝、お造りが中心。',
    notes: '[居酒屋・高辻御幸町、隠れたカウンター] 高辻通のビルの1階奥、重い鉄の扉の向こうにある14席のカウンターの居酒屋。先斗町で「佳粋」を営んでいた店主が2023年3月に開いた。初回は前菜、だしのお椀、お造り (2026年は3,000円) から始まり、酢じめの魚、ぬた、鰆の焼き物などをアラカルトで。締めは土鍋ご飯で、残りは店主の絵が描かれた紙袋に入れたおにぎりになる。値段は書かれていないので聞くとよい。居酒屋 WEST 百名店 2025・2026。海外からの客はホテルのフロント経由か、事前に来店して予約。夜のみ、土日は16時から。',
  });
}

save();
