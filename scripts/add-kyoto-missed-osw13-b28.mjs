// Kyoto "what did we miss" pass (kyoto-missed) — lane osw13 (Tabelog id mod 6 = 0), batch 28.
// Kyoto priority (Greg, 2026-11-05): 2 shops from `next core`, 2 from `next notable`, lane only.
//   core:    + BOCCA del VINO (12-seat southern-Italian trattoria on Kiyamachi; chef cooks alone)
//            + 京都スタンド きよきよ 木屋町 Kyoto Stand Kiyokiyo (¥300 obanzai and Kyoto sake from 14:00; 2018)
//   notable: + フルーツパーラーヤオイソ Fruit Parlour Yaoiso (Shijo-Omiya fruit shop's parlour; fruit sandwiches)
//            + 酒場 井倉木材 Sakaba Ikura Mokuzai (lumber yard by day, standing bar by night; Tachinomi 100 2025)
//   None is in data/kyoto.json: grep by name (ボッカ/Bocca, きよきよ/Kiyokiyo, 京家きよみず/kyoya-kiyomizu, ヤオイソ/
//   Yaoiso, 井倉/Ikura Mokuzai) and address (斎藤町138-9 holds only kyoto_lescamoteur_bar on the 2F, 鍋屋町220-1,
//   立中町496, 薮之内町77-1) found none. Tabelog URLs copied from each listing.txt line 1.
//   Group check (working line): Kiyokiyo has 3 same-concept stands (木屋町, 三条商店街, BiVi二条; Tabelog remarks) — a
//   small group, none in data; its sister izakaya brand 京家きよみず is a different concept. Yaoiso has the Shijo-Omiya
//   fruit shop and parlour plus a Karasuma-Imadegawa shop with a parlour (official site) — a small group.
//   Pins: GSI only (no OSM). No new pin within 3 m of another (check-stacked-pins run before hand-off).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-28');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ BOCCA del VINO
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26025876/'; const R = TB + 'dtlrvwlst/';
  const BLOG = 'http://bocca-del-vino.com/weblog'; const PDF = 'http://bocca-del-vino.com/blog/wp-content/uploads/2015/11/Dinner-English-2026.3.pdf';
  const L = day(['12:00', '16:00']); const D = day(['18:00', '22:00']);
  put({
    id: 'kyoto_bocca_del_vino', name: 'BOCCA del VINO (ボッカ・デル・ヴィーノ)', category: 'OMNI',
    lat: 35.00179, lng: 135.76993, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information; the dinner guide asks guests to mention allergies and foods they cannot eat for the omakase. Pasta is central (from ¥1,800 at lunch) and the dinner table charge includes bread; fried dishes include oysters and moroko (2025–2026 reviews; official dinner guide).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the official English dinner guide (March 2026) says the restaurant does not cater for vegans.',
    hours_raw: 'Official blog: lunch 12:00–16:00 (last order 15:00), à la carte, at least one dish per person, no café use for dessert or drinks only; dinner last order 21:00, closing 22:00; closing days on the blog calendar, sometimes changed at short notice. A May 2026 review lists lunch on Monday, Tuesday and Sunday and dinner Wednesday–Saturday; Tabelog lists dinner every day and lunch on Monday, Tuesday and Sunday, and says lunch was limited to Monday and Tuesday from late March 2025. Closed 30 December–1 January (Tabelog). Book by phone (075-585-8267, up to two months ahead) or by email; not through Auto Reserve. Dinner table charge ¥550 per person, bread included; omakase ¥8,800 (tax and table charge included), for groups only, booked by the day before, ¥4,400 per person for same-day cancellation (official dinner guide, March 2026). 12 seats; one table for two by the counter is exposed to the weather; no river view or terrace; no smoking; no large luggage; strollers folded; children by prior arrangement; smart casual, no strong fragrance (Tabelog; official blog). Cash, cards, e-money and QR (Tabelog). 5 min walk south along Kiyamachi from Hankyu Kawaramachi Stn exit 1 (Tabelog).',
    hours: { 0: L, 1: L, 2: D, 3: D, 4: D, 5: D, 6: L }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kiyamachi south of Dango-bashi — 5 min walk from Hankyu Kawaramachi Stn',
    cuisine: 'Southern-Italian trattoria built around Italian wine (Tabelog; November 2025 review) · lunch à la carte: pasta from ¥1,800 (bluefin tuna and tomato, cacio e pepe, August 2025), an 11-item antipasto plate ¥800, artichoke aglio e olio ¥2,500 (May 2026); many dishes in half sizes (August 2026) · dinner from the blackboard: vegetable dishes from ¥2,000, meat from ¥2,500, pasta and risotto from ¥2,500 (May 2026); fried moroko, fried oysters with house tartar sauce, marinated mackerel, nanohana and anchovy pasta, sautéed venison, rum baba (February 2025); roast venison with persimmon sauce (October 2026) · omakase ¥8,800 for groups (official) · glass and bottle wines',
    website: BLOG, gmaps: gm('BOCCA del VINO 京都 木屋町'), menu_url: PDF,
    notes: "[Italian · Kiyamachi, a one-cook trattoria] A 12-seat Italian on Kiyamachi south of Dango-bashi, open here since May 2015, where the chef cooks alone and dishes come to share: tomatoes and olive oil in the southern way, blackboard antipasti, pasta, venison in winter, Italian wines by the glass and bottle. Lunch is à la carte (pasta from ¥1,800); dinner adds a ¥550 table charge with bread, or an ¥8,800 omakase for groups. The restaurant asks for no hurry, says it speaks no English and does not cater for vegans. Book ahead.",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed) who cooks alone, per the official dinner guide'], origin: null,
      background: 'Tabelog’s introduction says the ristorante opened in May 2015 for enjoying Italian wines; the blog speaks of six years of irregular closing days "after the move" (March 2021). The official English dinner guide (March 2026) says the chef cooks alone, so dishes take time and are best shared, and the restaurant cannot serve guests in a hurry. A November 2025 review explains the name as "mouth of wine" and describes a Southern-Italian trattoria of tomatoes and olive oil that does not adapt to Kyoto styles, and calls it a Bib Gourmand selection, as does a May 2026 review. A February 2025 diner praised the service of a gentle madam; an October 2026 diner, the chef’s charming manner.',
      philosophy: null,
      specialty: 'Blackboard antipasti; southern-Italian pasta; venison.',
      anecdotes: [
        { text: 'After a kabuki show at Minami-za, a diner booked for a course was steered to à la carte so as to catch the last train — December 2024.', source: R + 'B496840636/' },
        { text: 'Of the cacio e pepe: "it was indeed quite thick, just as the customer at the next table remarked, \'It’s like udon!\'" — August 2025.', source: R + 'B512105681/' },
        { text: 'A February 2025 diner heard the maritozzo, popular during the pandemic, can be made if reserved in advance; the blog (March 2021) had limited it to breakfast.', source: R + 'B501673771/' },
        { text: '"Personally, I especially loved the roasted venison! It was topped with a persimmon sauce." — October 2026.', source: R + 'B537396218/' },
      ],
      japanese_sources_summary: '公式ブログ (bocca-del-vino.com): ランチ OPEN 12:00、ラストオーダー 15:00、CLOSE 16:00、お昼用のアラカルト、お一人様1品以上、ドルチェのみ・ドリンクのみのカフェ利用不可、ディナーはコース (要予約) とアラカルト、テラス席・川床なし、店内から鴨川・高瀬川は見えない、大きな荷物はご遠慮、ベビーカーは折り畳み、店舗前の駐輪禁止、下京区木屋町団栗橋下る斎藤町138-9 赤煉瓦造りの建物1階、電話予約がおすすめ (2カ月先まで)、オートリザーヴ不可、2021年3月: 移転後6年間不定休、マリトッツォは朝食限定。英語のディナー案内 (2026年3月更新): 英語不可・日本語メニューのみ、ヴィーガン不可、ピザなし、シェフひとりで調理、急ぎの客は不可、ディナーL.O. 21時・22時閉店、席料550円 (パン込み)、ひとり1品以上、おまかせ8,800円 (前日までに予約、グループのみ、当日キャンセル4,400円)、アレルギーは事前に。食べログ: イタリアン、12席、ディナー席料550円、禁煙、スマートカジュアル、2015年5月オープン、2025年3月下旬から月・火曜に限定してランチ。口コミ (2024年12月〜2026年10月、英語): パスタランチ1,800円、前菜盛り合わせ800円、カルチョーフィのアーリオ・オーリオ2,500円、鹿のロースト、ラムババ、ビブグルマン。',
      confidence: 'medium', sources: [TB, BLOG, PDF, R + 'B496840636/', R + 'B501673771/', R + 'B505245769/', R + 'B512105681/', R + 'B523597735/', R + 'B524342346/', R + 'B529006995/', R + 'B534362266/', R + 'B535166905/', R + 'B537396218/'] },
    cultural_comfort: { level: 'japanese', note: 'The official English dinner guide says no English is spoken and the menu is Japanese only; change or cancel bookings by email. Mostly a blackboard menu.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市下京区木屋町団栗橋下る斎藤町138-9 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official blog and English dinner guide (updated March 2026) and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.001841, 135.769946), set 6 m south-west so as not to sit on kyoto_lescamoteur_bar (same building, 斎藤町138番地9 2階 per its address_ja; 3 m from the Tabelog point); cross-checked: GSI 京都府京都市下京区斎藤町138番地 (lot) 32m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [PDF, R + 'B512105681/', R + 'B529006995/'],
    price_note: 'The menu is a blackboard; prices from 2025–2026 reviews and the official dinner guide (March 2026).', last_checked: TODAY, items: [
      it('', '', 'Lunch pasta', 'from ¥1,800', 'Lunch', 'no', 'no', 'August 2025; May 2026.', 'lunch_pasta'),
      it('', '', 'Antipasto plate (11 items)', '¥800', 'Lunch', 'ask', 'no', 'May 2026.', 'antipasto_plate'),
      it('', '', 'Artichoke aglio e olio', '¥2,500', 'Pasta', 'no', 'no', 'May 2026.', 'artichoke_aglio'),
      it('', '', 'Omakase (antipasto, pasta, main, dolce, caffè)', '¥8,800', 'Dinner', 'ask', 'no', 'Groups only; book by the day before.', 'omakase'),
      it('', '', 'Table charge with bread (dinner)', '¥550', 'Dinner', '', '', '', 'coperto'),
    ] }, {
    cuisine: 'イタリアワインを軸にした南イタリアのトラットリア (食べログ、2025年11月の口コミ)・ランチはアラカルト: パスタ1,800円から (本マグロとトマト、カチョエペペ、2025年8月)、11種の前菜盛り合わせ800円、カルチョーフィのアーリオ・オーリオ2,500円 (2026年5月)、ハーフサイズの料理も多い (2026年8月)・ディナーは黒板から: 畑の料理2,000円から、牧場の料理2,500円から、パスタとリゾット2,500円から (2026年5月)、もろこのフリット、自家製タルタルのカキフライ、しめ鯖、菜の花とアンチョビのパスタ、鹿のソテー、ラムババ (2025年2月)、柿のソースの鹿のロースト (2026年10月)・グループ向けのおまかせ8,800円 (公式)・グラスとボトルのワイン',
    neighborhood: '団栗橋の南の木屋町。阪急京都河原町駅から徒歩5分',
    gf_detail: '予約時に要確認。グルテンの情報はない。おまかせはアレルギーや食べられないものを事前に伝えるよう案内がある。パスタが中心 (ランチ1,800円から) で、ディナーの席料にはパンが含まれ、カキやもろこのフリットもある (2025〜2026年の口コミ、公式のディナー案内)。',
    vegan_detail: 'ヴィーガン不可: 公式の英語のディナー案内 (2026年3月) にヴィーガンには対応しないとある。',
    notes: '[イタリアン・木屋町、シェフひとりのトラットリア] 団栗橋の南、木屋町の12席のイタリアン。2015年5月からこの場所で営業し、シェフがひとりで作る料理は取り分けて食べるスタイル。トマトとオリーブオイルの南イタリアの料理、黒板の前菜、パスタ、冬は鹿、グラスとボトルのイタリアワイン。ランチはアラカルト (パスタ1,800円から)、ディナーはパン込みの席料550円、グループならおまかせ8,800円。急ぎの客は受けられず、英語は話せず、ヴィーガン対応はしないと店が案内している。要予約。',
  });
}

// ================================================================ 京都スタンド きよきよ 木屋町
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26030988/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.kyoya-kiyomizu.com/kiyokiyo/';
  const H = day(['14:00', '22:30']);
  put({
    id: 'kyoto_stand_kiyokiyo_kiyamachi', name: '京都スタンド きよきよ 木屋町 (Kyoto Stand Kiyokiyo Kiyamachi)', category: 'OMNI',
    lat: 35.00451, lng: 135.77083, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The food is daily obanzai and beef tongue simmered in Kyoto-style dashi (official site); seasonings are not described.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options, but the obanzai change daily and reviewers describe them as dashi-flavoured; some include jako or herring (August 2026).',
    hours_raw: 'Tabelog: every day 14:00–22:30 (last order 22:00), closing days irregular; the official site says it opens at 14:00 for daytime drinking. Bookings taken (Tabelog). No service or cover charge (Tabelog; August 2026). 31 places: 15 at the counter and 4 tables; a standing bar, but reviewers found chairs at the counter (2026 reviews). Heated tobacco only (Tabelog; official site). Cards, IC and QR payments including Alipay and WeChat Pay (Tabelog). English menu (Tabelog). At the end of a narrow passage on the ground floor of the FORUM木屋町先斗町ビル; 1 min walk from Hankyu Kawaramachi Stn (Tabelog; August 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi north of Shijo — 1 min walk from Hankyu Kawaramachi Stn',
    cuisine: 'Standing bar for Kyoto sake and obanzai from 14:00, sister to the 京家きよみず izakaya (official site) · obanzai ¥300 each from a blackboard and large platters on the counter (October 2026): sansho potato salad with fried baby sardines, edamame and corn okara, eggplant with herring, jako and manganji peppers; three obanzai omakase ¥900 · the house beef tongue simmered long in Kyoto-style dashi ¥1,000 · pickled ginger between dishes, "the Kiyokiyo way" (official site) · about 20 Kyoto sakes from ¥400, three-sake tasting sets, a dice game (chinchiro) that can discount or double the price of a sake (August 2026) · draft beer ¥550, lemon sour ¥600, fruit chuhai with plenty of fruit pulp, house sansho gin soda (2026 reviews; official site)',
    website: SITE, gmaps: gm('京都スタンド きよきよ 木屋町'), menu_url: SITE,
    notes: "[Standing bar · Kiyamachi, sake from 2 pm] A bright standing bar at the end of a narrow passage off Kiyamachi, open from 14:00 every day: about 20 Kyoto sakes from ¥400 (roll the dice and a glass can be ¥100 off, double, or free), obanzai at ¥300 a dish chosen from platters on the counter, and beef tongue simmered in Kyoto dashi (¥1,000). No cover charge, and there are chairs at the counter. Opened in July 2018 by the company behind the 京家きよみず izakaya; two more Kiyokiyo stands are in Sanjo and Nijo. 14:00–22:30.",
    chef_bio: { chef_name: null, roles: ['Standing bar of the 京家きよみず group (company not named on the site)'], origin: null,
      background: 'Per the official site: opened in July 2018 as a sister shop of the izakaya 京家きよみず, which has four shops in Kyoto, with a wide range of carefully chosen Kyoto sake and Kyoto food centred on obanzai; the house dishes are beef tongue simmered for a long time in Kyoto-style dashi and the daily obanzai, and pickled ginger is served between dishes. A second stand opened on the Sanjo shopping street and a third, BiVi二条, later (official site; Tabelog). Tabelog gives the opening day as 5 July 2018.',
      philosophy: 'Per the official site: to let people enjoy Kyoto food culture more casually and more stylishly — for a daytime drink, a quick drink or a woman drinking alone.',
      specialty: 'Obanzai at ¥300; dashi-simmered beef tongue; Kyoto sake.',
      anecdotes: [
        { text: '"When I tried it, I got a discount of JPY 100 on both drinks!" — of the sake dice game, August 2026.', source: R + 'B533626203/' },
        { text: 'An August 2026 diner got eggplant, a disliked vegetable, in the omakase obanzai, but praised the dashi-simmered beef tongue and noted signage "geared towards foreigners and tourists".', source: R + 'B533515989/' },
        { text: '"As a Kyotoite, I found all the dishes to have a nostalgic sweetness." — August 2026.', source: R + 'B534558801/' },
      ],
      japanese_sources_summary: '公式サイト (kyoya-kiyomizu.com/kiyokiyo): 京都の立ち飲み・昼飲みにおすすめの「京都スタンド きよきよ」、祇園四条・河原町・木屋町・先斗町、京都に4店舗展開する人気居酒屋「京家きよみず」の姉妹店として木屋町は2018年7月にオープン、厳選された京の地酒、3種飲み比べ、おばんざいを中心とした京料理、果肉たっぷりのフルーツチューハイ、14時から営業、名物は京風のお出汁でじっくり炊く牛タン煮と日替わりの京おばんざい、箸休めにガリ、加熱式タバコのみ喫煙可、三条商店街と BiVi二条にも店舗。食べログ: 立ち飲み・居酒屋・日本料理、中京区木屋町通四条上ル鍋屋町220-1 FORUM木屋町先斗町ビル 1F、毎日14:00〜22:30 (L.O. 22:00)、不定休、予約可、サービス料・チャージ料なし、31席 (カウンター15、テーブル4)、カード・電子マネー・QR 可、ベジタリアンメニューあり、英語メニュー、2018年7月5日オープン。口コミ (2026年7月〜10月、英語): おばんざい各300円、おまかせ3品900円、牛タン煮1,000円、生ビール550円、レモンサワー600円、地酒400円から、チンチロ、山椒のポテトサラダ。',
      confidence: 'medium', sources: [TB, SITE, R + 'B533037297/', R + 'B533162861/', R + 'B533515989/', R + 'B533626203/', R + 'B533668755/', R + 'B533728543/', R + 'B533822221/', R + 'B534530612/', R + 'B534558801/', R + 'B536172412/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu (Tabelog); point at the obanzai on the counter; no cover charge.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区木屋町通四条上ル鍋屋町220-1 FORUM木屋町先斗町ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004510, 135.770830); cross-checked: GSI 京都府京都市中京区鍋屋町220番地 (lot) 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533515989/', R + 'B533626203/', R + 'B533822221/'],
    price_note: 'Blackboard menu; prices from August–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Obanzai, any dish', '¥300', 'Obanzai', 'ask', 'ask', 'October 2026.', 'obanzai'),
      it('', '', 'Omakase three obanzai', '¥900', 'Obanzai', 'ask', 'ask', 'August 2026.', 'obanzai_3'),
      it('牛タン煮', '', 'Beef tongue simmered in Kyoto-style dashi', '¥1,000', 'House dishes', 'ask', 'no', 'August 2026.', 'beef_tongue_stew'),
      it('', '', 'Kyoto sake, by the glass', 'from ¥400', 'Drinks', '', '', 'October 2026.', 'kyoto_sake'),
    ] }, {
    cuisine: '14時から京の地酒とおばんざいの立ち飲み、居酒屋「京家きよみず」の姉妹店 (公式サイト)・おばんざいは黒板とカウンターの大皿から各300円 (2026年10月): 山椒のポテトサラダ (ちりめんじゃこ揚げのせ)、枝豆とコーンのおから、茄子とにしん、じゃこ万願寺、おまかせ3品900円・京風のお出汁でじっくり炊く名物の牛タン煮1,000円・箸休めにガリが「きよきよ流」(公式サイト)・京都の地酒約20種、400円から、3種飲み比べ、サイコロ (チンチロ) で地酒が割引や倍額になる遊び (2026年8月)・生ビール550円、レモンサワー600円、果肉たっぷりのフルーツチューハイ、自家製の山椒ジンソーダ (2026年の口コミ、公式サイト)',
    neighborhood: '四条の北の木屋町。阪急京都河原町駅から徒歩1分',
    gf_detail: '要確認。グルテンの情報はない。料理は日替わりのおばんざいと、京風のお出汁で炊く牛タン煮 (公式サイト)。調味料については書かれていない。',
    vegan_detail: '要確認。食べログにはベジタリアンメニューありとあるが、おばんざいは日替わりで、口コミはだしの味と書いている。じゃこやにしんを使うものもある (2026年8月)。',
    notes: '[立ち飲み・木屋町、14時から地酒] 木屋町の細い通路の奥の明るい立ち飲み。毎日14時から。京都の地酒約20種が400円から (サイコロを振れば100円引き、倍額、無料も)、カウンターの大皿から選ぶおばんざいは1品300円、京風のお出汁で炊いた牛タン煮 (1,000円)。チャージなし、カウンターには椅子もある。居酒屋「京家きよみず」の会社が2018年7月に開き、きよきよは三条と二条にもある。14時〜22時半。',
  });
}

// ================================================================ フルーツパーラーヤオイソ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26022444/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://yaoiso.com/'; const ABOUT = SITE + 'page_id-7.html'; const MENU = SITE + 'page_id-2245.html'; const REC = SITE + 'page_id-2933.html';
  const H = day(['09:30', '17:00']);
  put({
    id: 'kyoto_yaoiso_fruit_parlour', name: 'フルーツパーラーヤオイソ (Fruit Parlour Yaoiso)', category: 'OMNI',
    lat: 35.003512, lng: 135.750072, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The famous fruit sandwiches are on bread; parfaits, cut fruit, fruit kanten, kuzu-arare and juices are also on the menu (official menu; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Cut-fruit plates, fruit kanten and fresh juices are on the menu, but the sandwiches and parfaits use cream and vanilla ice cream (official menu; 2026 reviews).',
    hours_raw: 'Official site: parlour 9:30–17:00 (last order 16:45); Tabelog gives every day 9:30–17:00 with last order 16:30. The fruit shop next door is open 9:00–18:00 all year except the New Year (official site). Seats cannot be booked; bookings are for takeaway only (Tabelog), and the listed phone number is the fruit shop’s (July 2025 review). A Saturday diner waited about 15 minutes at 13:00 (September 2026); morning visits found it nearly empty. 32 seats at tables and sofas; non-smoking; children welcome (Tabelog; September 2026). JCB and AMEX cards and IC cards, no QR (Tabelog). Next to Hankyu Omiya Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shijo-Omiya — next to Hankyu Omiya Stn',
    cuisine: 'Fruit parlour of a fruit shop founded in 1869, known for its fruit sandwiches (official site) · fruit sandwich with mixed juice ¥900, special sandwich set ¥1,100, ladies’ set (sandwich, mixed-juice float, house jelly) ¥1,000, royal fruit sandwich ¥1,100, seasonal fruit parfait ¥1,100, musk-melon parfait ¥1,100, cut fruit ¥1,100, fruit kanten ¥750, cream kuzu-arare ¥900 (official menu from April 2022, before tax; about ¥50 added from February 2025) · seasonal: peach sets ¥2,700 (August 2026), mango set ¥2,600 (September 2026), fig and strawberry sandwiches, Yamagata cherry parfait, hot cakes and crêpes with fruit · classic fruit parfait ¥1,045 (September 2026) · lemon squash with house lemon syrup ¥550 · sandwiches to take away (official site; 2026 reviews)',
    website: SITE, gmaps: gm('フルーツパーラーヤオイソ 四条大宮'), menu_url: MENU,
    notes: "[Fruit parlour · Shijo-Omiya, the fruit sandwich] The parlour of Yaoiso, a Shijo-Omiya fruit shop founded in 1869, which added a fruit parlour in 1972 and moved it into this room next door in 2013: soft cream (lightly sweet to some reviewers, quite sweet to one) and generous seasonal fruit in soft bread (a set with mixed juice about ¥900–1,000), parfaits, and set plates of peaches or mangoes in season. Sweets WEST Tabelog 100 2026. One September 2026 diner found the fruit cut too small and the staff unfriendly. Daily 9:30–17:00; sandwiches also to take away.",
    chef_bio: { chef_name: null, roles: ['Parlour of the fruit shop Yaoiso (no owner named)'], origin: null,
      background: 'Per the official site: a fruit specialist founded in Meiji 2 (1869), selling gift fruit and household fruit, known for Okayama white peaches in the summer gift season and Saga Sagahonoka strawberries in winter; a fruit parlour was added in Showa 47 (1972), and its signature fruit sandwich is widely loved; a certified fruit-adviser shop, with a governor’s award as an old Kyoto business. A second shop with a parlour stands on Karasuma-dori north of Imadegawa, next to Doshisha University (official site). Tabelog gives the opening day of this parlour as 23 May 2013; a September 2026 review says it began on the second floor of the main shop in 1972 and moved here in 2013. Tabelog Sweets WEST "Tabelog 100" 2022, 2023 and 2026.',
      philosophy: null,
      specialty: 'Fruit sandwich; seasonal fruit parfaits.',
      anecdotes: [
        { text: 'A sign advises eating the sandwich quickly because the air conditioning dries the bread — August 2026.', source: R + 'B510355593/' },
        { text: 'A September 2026 diner found even strawberries and muscat grapes cut small in the ¥1,045 parfait and the staff "not particularly friendly".', source: R + 'B536084326/' },
        { text: '"How do they do this?" — of the soft yet firm cream in the fruit sandwich, October 2026.', source: R + 'B537338616/' },
        { text: 'A November 2026 takeaway buyer got ice packs but no guidance on how long the sandwich keeps.', source: R + 'B538620112/' },
      ],
      japanese_sources_summary: '公式サイト (yaoiso.com): 創業明治2年の果物専門店、進物用の高級果物から家庭の果物まで、お中元時期の岡山直送の水蜜桃、お歳暮時期の佐賀のさがほのか苺、昭和47年にフルーツパーラーを併設、代表作「フルーツサンド」、フルーツアドバイザー認定店、京の老舗 知事賞受賞。本店 9:00〜18:00 年中無休 (年末年始を除く)、下京区四条大宮東入ル立中町488。パーラー 9:30〜17:00 (ラストオーダー 16:45)、立中町496。烏丸通今出川上ル東側 (同志社大学北隣) の店にもパーラー、10:00〜17:00、不定休。メニュー (2022年4月以降、税抜): フルーツサンドとミックスジュースのセット900円、スペシャルサンドのセット1,100円、ミニパフェセット1,250円、ロイヤルフルーツサンド1,100円、季節のフルーツパフェ1,100円、クリーム葛あられ900円、カットフルーツ1,100円、レディースセット1,000円、フルーツ寒天750円、マスクメロンパフェ1,100円、持ち帰りのフルーツサンド750円など。2025年2月から税抜50円程度の値上げ。レモンスカッシュ550円 (税込)、山形さくらんぼパフェ (四条大宮店のみ)。食べログ: フルーツパーラー・カフェ、立中町496、毎日9:30〜17:00 (L.O. 16:30)、予約はテイクアウトのみ、32席、禁煙、子供可、カード (JCB、AMEX)・電子マネー可、2013年5月23日オープン、スイーツ WEST 百名店 2022・2023・2026。口コミ (2025年7月〜2026年11月、英語): 桃づくし2,700円、マンゴーづくし2,600円、定番のフルーツパフェ1,045円、ミックスジュース、スペシャルフルーツサンド。',
      confidence: 'medium', sources: [TB, SITE, ABOUT, MENU, REC, R + 'B510355593/', R + 'B514536169/', R + 'B536083995/', R + 'B536084326/', R + 'B536587285/', R + 'B536609295/', R + 'B537006052/', R + 'B537338616/', R + 'B538189476/', R + 'B538620112/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the table from a set menu of sandwiches, parfaits and juices; seats cannot be booked.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区四条大宮東立中町496',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through November 2026; Sweets WEST Tabelog 100 2026.' },
    pin_source: `Tabelog ${TB} (35.003512, 135.750072); cross-checked: GSI 京都府京都市下京区立中町496番地 (lot) 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU, REC, R + 'B536084326/'],
    price_note: 'Official menu dated from April 2022, before tax, with about ¥50 added from February 2025 (official notice); parfait price from a September 2026 review.', last_checked: TODAY, items: [
      it('フルーツサンドとミックスジュースのセット', '', 'Fruit sandwich and mixed juice set', '¥900 + tax', 'Sets', 'no', 'no', 'April 2022 price.', 'sandwich_juice_set'),
      it('レディースセット', '', 'Ladies’ set (sandwich, mixed-juice float, house jelly)', '¥1,000 + tax', 'Sets', 'no', 'no', 'April 2022 price.', 'ladies_set'),
      it('季節のフルーツパフェ', '', 'Seasonal fruit parfait', '¥1,100 + tax', 'Parfaits', 'ask', 'no', 'April 2022 price.', 'seasonal_parfait'),
      it('カットフルーツ(B)', '', 'Cut fruit plate (B)', '¥1,100 + tax', 'Fruit', 'ask', 'ask', 'April 2022 price.', 'cut_fruit'),
      it('フルーツ寒天', '', 'Fruit kanten', '¥750 + tax', 'Fruit', 'ask', 'ask', 'April 2022 price.', 'fruit_kanten'),
      it('レモンスカッシュ', '', 'Lemon squash (house lemon syrup)', '¥550', 'Drinks', '', '', '', 'lemon_squash'),
    ] }, {
    cuisine: '明治2年創業の果物店のフルーツパーラー、名物はフルーツサンド (公式サイト)・フルーツサンドとミックスジュースのセット900円、スペシャルサンドのセット1,100円、レディースセット (サンド、ミックスジュースフロート、手作りゼリー) 1,000円、ロイヤルフルーツサンド1,100円、季節のフルーツパフェ1,100円、マスクメロンパフェ1,100円、カットフルーツ1,100円、フルーツ寒天750円、クリーム葛あられ900円 (2022年4月以降の公式メニュー、税抜。2025年2月から税抜50円程度の値上げ)・季節: 桃のセット2,700円 (2026年8月)、マンゴーのセット2,600円 (2026年9月)、いちじくやいちごのサンド、山形さくらんぼパフェ、フルーツのホットケーキやクレープ・定番のフルーツパフェ1,045円 (2026年9月)・手作りレモンシロップのレモンスカッシュ550円・サンドは持ち帰りも (公式サイト、2026年の口コミ)',
    neighborhood: '四条大宮。阪急大宮駅のすぐ隣',
    gf_detail: '要確認。グルテンの情報はない。名物のフルーツサンドはパン。パフェ、カットフルーツ、フルーツ寒天、葛あられ、ジュースもある (公式メニュー、2026年の口コミ)。',
    vegan_detail: '要確認。カットフルーツ、フルーツ寒天、生ジュースはあるが、サンドとパフェには生クリームやバニラアイスを使う (公式メニュー、2026年の口コミ)。',
    notes: '[フルーツパーラー・四条大宮、フルーツサンド] 明治2年創業の四条大宮の果物店ヤオイソのパーラー。昭和47年にフルーツパーラーを併設し、2013年に隣のこの店に移った。やわらかなクリーム (甘さ控えめという客も、かなり甘いという客もいる) と旬の果物をたっぷり挟んだフルーツサンド (ミックスジュースとのセットで900〜1,000円ほど)、パフェ、季節の桃やマンゴーのセット。スイーツ WEST 百名店 2026。2026年9月の客は果物が小さく切られすぎ、店員の愛想がないと書いている。毎日9時半〜17時、サンドは持ち帰りも。',
  });
}

// ================================================================ 酒場 井倉木材
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26021340/'; const R = TB + 'dtlrvwlst/';
  const SERAI = 'https://serai.jp/gourmet/253979/4';
  const H = day(['17:00', '22:00']);
  put({
    id: 'kyoto_sakaba_ikura_mokuzai', name: '酒場 井倉木材 (Sakaba Ikura Mokuzai)', category: 'MOM_AND_POP',
    lat: 35.022759, lng: 135.755277, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information and no printed sake menu; dishes include chicken-skin gyoza, mentaiko mochi, karinto with cream-cheese dip and conger-eel tempura alongside sashimi and charcoal-grilled fish (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The food is mostly fish and seafood; cucumber dishes and potato salad are on the menu, but nothing is said about their dressings (2026 reviews).',
    hours_raw: 'Tabelog: Monday–Saturday 17:00–22:00 (last seating and last order 21:00), closed Sundays and public holidays; hours may change. No reservations: queues form before 17:00 (about ten people at 16:30 in June 2026); in December 2025 a regular came an hour before opening for the winter crab; later in the evening there may be no wait, but dishes sell out (2025–2026 reviews). Up to three people at the counter; groups of four or more go to the outdoor tables in the lumber yard (June 2026). Counter seats non-smoking; smoking allowed in the yard seats (Tabelog). Cash only (no cards, e-money or QR) (Tabelog). No telephone (Serai 2017). About 15 min walk from Imadegawa or Marutamachi stations (June 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Kamigyo, near the Horikawa shopping street — about 15 min walk from Marutamachi Stn',
    cuisine: 'Standing bar in a working lumber yard: seasonal fish and drinking snacks that regulars rank with kappo cooking (Serai 2017; Tabelog) · salt-seared bonito tataki, flamed outside, with mustard ¥1,500; bluefin tuna and myoga roll ¥1,200; tuna sashimi ¥1,200; grilled hamo ¥1,800; very large rock oyster ¥2,500 (June 2026) · potato salad ¥90 (October 2026), chicken-skin gyoza, mentaiko mochi ¥450, cucumber dishes ¥500, karinto with cream-cheese dip ¥600, shuto with cream cheese, natto omelette, dried fish, charcoal-grilled pork belly and bacon, frozen crab-miso ruibe, conger eel in hot pot and tempura (2026 reviews) · a giant crab from mid-November to the end of December · Kyoto and rare sake told out loud, Heartland draft, original highball, jabara sake soda',
    website: TB, gmaps: gm('酒場 井倉木材 京都'), menu_url: TB,
    notes: "[Standing bar · Kamigyo, a lumber yard at night] By day a family lumber yard, by night a standing bar: the fourth-generation 井倉康博 turned a three-tatami office into a counter and the car park into tables (Serai 2017). Salt-seared bonito flamed outside (¥1,500), tuna and myoga rolls, grilled hamo, a ¥90 potato salad, and sake recommended out loud. A queue forms before 17:00, and the giant crab of November–December draws longer ones; popular dishes sell out. Tachinomi Tabelog 100 2025. Cash only, no bookings; Mon–Sat 17:00–22:00.",
    chef_bio: { chef_name: '井倉康博', roles: ['Owner (fourth generation of the family lumber business), per Serai 2017'], origin: null,
      background: 'Serai (5 October 2017): as the name says, the family has long made its living in the lumber trade; the fourth generation, 井倉康博 (then 40), could not give up a dream of running a restaurant, and five years earlier had opened a night-only standing bar while carrying on the family business, turning a three-tatami office into the counter and the car park into the shop; seven or eight people fit inside, and drinking outside in the autumn wind is part of the fun. Serai then listed house oil sardines (made only when large sardines come in), crab-miso ruibe ¥800, sake from ¥600 a gō, and closing on Sundays and holidays. A September 2026 diner heard that the lumber business, once run by the owner’s father, is no longer very active and the bar is now the main focus. Tabelog tachinomi "Tabelog 100" 2025.',
      philosophy: null,
      specialty: 'Salt-seared bonito tataki; grilled hamo; winter crab.',
      anecdotes: [
        { text: '"Don’t underestimate it because it’s a standing bar" — what regulars say, per Serai (2017).', source: SERAI },
        { text: 'The bonito "was cooked with flames roaring!" — October 2026.', source: R + 'B536947142/' },
        { text: '"As for the Japanese sake, there wasn\'t a menu; they just explained the brands verbally." — August 2026.', source: R + 'B534870774/' },
        { text: 'An October 2026 diner ended up chatting and sharing dishes with the people at the same table.', source: R + 'B537982117/' },
      ],
      japanese_sources_summary: 'サライ (2017年10月5日): 酒場 井倉木材、京都市上京区、旨いものを知り尽くした客が集う立ち飲み店、かにみそのルイべ800円、自家製オイルサーディン700円 (大羽の鰯が入ったときだけ)、日本酒は1合600円〜、「立ち飲みと侮るな」と常連、ポテトサラダやするめ天、割烹にも引けをとらない旬の味、新鮮な鰹やウニは造り、肉厚しいたけは炭焼き、本来は材木業を生業としてきた家、4代目の井倉康博さん (40歳) が家業を継ぎながら5年前に夜だけの立ち飲み屋を開店、3畳の事務所を改装してカウンターに、駐車場を店舗に、店内は7〜8名、薮之内町77-1、電話なし、17時〜22時30分 (最終注文)、日曜・祝日休み。食べログ: 立ち飲み、月〜土 17:00〜22:00 (L.O. 21:00、最終入店21:00)、日・祝休み、予約不可、カード・電子マネー・QR 不可、カウンターは禁煙、倉庫の席は喫煙可、立ち飲み 百名店 2025。口コミ (2025年12月〜2026年10月、英語): 鰹の塩たたき1,500円、本マグロとみょうがの巻き1,200円、鱧の焼き霜1,800円、ポテトサラダ90円、鶏皮餃子、冬の大きな蟹、開店前の行列。',
      confidence: 'medium', sources: [TB, SERAI, R + 'B473296041/', R + 'B530815988/', R + 'B534638662/', R + 'B534870774/', R + 'B535047183/', R + 'B535473560/', R + 'B535595647/', R + 'B536655759/', R + 'B536947142/', R + 'B537982117/'] },
    cultural_comfort: { level: 'japanese', note: 'No sake menu — the staff name the brands out loud; queue before opening, cash only, no bookings.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市上京区薮之内町77-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026; Tachinomi Tabelog 100 2025.' },
    pin_source: `Tabelog ${TB} (35.022759, 135.755277); GSI matched only the town (京都府京都市上京区藪之内町, written with 藪) at 153m, so the pin rests on the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B473296041/', R + 'B537982117/'],
    price_note: 'No printed sake menu; food prices from June and October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Salt-seared bonito tataki', '¥1,500', 'Fish', 'ask', 'no', 'June 2026.', 'katsuo_shio_tataki'),
      it('', '', 'Bluefin tuna and myoga roll', '¥1,200', 'Fish', 'ask', 'no', 'June 2026.', 'maguro_myoga_roll'),
      it('', '', 'Grilled hamo (yaki-shimo)', '¥1,800', 'Fish', 'ask', 'no', 'June 2026.', 'hamo_yakishimo'),
      it('', '', 'Potato salad', '¥90', 'Snacks', 'ask', 'ask', 'October 2026.', 'potato_salad'),
      it('', '', 'Mentaiko mochi', '¥450', 'Snacks', 'ask', 'no', 'June 2026.', 'mentaiko_mochi'),
    ] }, {
    cuisine: '現役の材木屋の立ち飲み: 常連が割烹にも引けをとらないという旬の魚と酒肴 (サライ 2017年、食べログ)・外であぶる鰹の塩たたき (からし付き) 1,500円、本マグロとみょうがの巻き1,200円、マグロの刺身1,200円、鱧の焼き霜1,800円、特大の岩牡蠣2,500円 (2026年6月)・ポテトサラダ90円 (2026年10月)、鶏皮餃子、明太子もち450円、きゅうりの料理500円、かりんとうとクリームチーズのディップ600円、酒盗とクリームチーズ、納豆オムレツ、干物、炭火焼きの豚バラとベーコン、凍らせたかにみそのルイベ、鱧の鍋と天ぷら (2026年の口コミ)・11月中旬〜12月末の大きな蟹・京都や希少な日本酒は口頭で、ハートランドの生、オリジナルハイボール、じゃばらの酒ソーダ',
    neighborhood: '上京区、堀川商店街の近く。丸太町駅から徒歩15分ほど',
    gf_detail: '要確認。グルテンの情報はなく、日本酒のメニューもない。刺身や炭火の魚のほか、鶏皮餃子、明太子もち、かりんとうのクリームチーズディップ、鱧の天ぷらもある (2026年の口コミ)。',
    vegan_detail: '要確認。料理はほとんど魚介。きゅうりの料理やポテトサラダもあるが、味付けについては書かれていない (2026年の口コミ)。',
    notes: '[立ち飲み・上京区、夜の材木屋] 昼は家業の材木屋、夜は立ち飲み。4代目の井倉康博さんが3畳の事務所をカウンターに、駐車場を客席にした (サライ 2017年)。外であぶる鰹の塩たたき (1,500円)、マグロとみょうがの巻き、鱧の焼き霜、90円のポテトサラダ、日本酒は口頭でおすすめ。17時前から行列ができ、11〜12月の大きな蟹の時期はさらに長い。人気の品は売り切れる。立ち飲み 百名店 2025。現金のみ、予約不可。月〜土 17時〜22時。',
  });
}

save();
