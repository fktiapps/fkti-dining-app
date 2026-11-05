// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 1.
//   core (queue.mjs kyoto-missed next core 200, 2026-11-05, first ids in the lane):
//   - FAUCHON 京都高島屋店 (26005569) skipped: department-store branch of a brand (see skip below)
//   - リンガーハット 京都四条河原町店 (26019513) skipped: chain (ringer_hut in data/kyoto_chains.json)
//   + NIKOLABO ニコラボ (stews for wine, south of Shijo Kawaramachi; since 2017)
//   + 乙羽 Otowa (Kyoto-style sushi in Shinkyogoku, winter mushi-zushi; Meiji-era house)
//   notable (queue.mjs kyoto-missed next notable 200, first two ids in the lane):
//   + La Biographie... ラ ビオグラフィ (Masahiro Takimoto's counter French at Senbon Shimodachiuri; Michelin star)
//   + 京うどん 生蕎麦 岡北 Okakita (Okazaki udon house near Heian Shrine; since 1940)
//   None is in data/kyoto.json: grep by id, name (NIKOLABO/ニコラボ, 乙羽/Otowa, Biographie/ビオグラフィ, 岡北/Okakita)
//   and address (稲荷町329, 中之町565, 田中町422, 岡崎南御所町34) found none. Tabelog URLs copied from each listing.txt line 1.
//   Pins: Tabelog /en/ point, cross-checked with GSI only (no OSM, per docs/sweep-streams.md Kyoto priority).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-1');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26005569', 'FAUCHON 京都高島屋店 (FAUCHON Kyoto Takashimaya ten): a counter of the Paris brand FAUCHON in the Takashimaya department store; an August 2026 reviewer had "visited other locations before" — a branch of a multi-shop brand, so a chain');
skip('26019513', 'リンガーハット 京都四条河原町店 (Ringer Hut): chain — ringer_hut is in data/kyoto_chains.json');

// ================================================================ NIKOLABO
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26030025/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.nikolabo1201.com/'; const MENU = TB + 'dtlmenu/'; const PARTY = TB + 'party/';
  const L = ['12:00', '14:00'];
  const D = day(['18:00', '23:00']); const LD = day(L, ['18:00', '23:00']); const SAT = day(L, ['17:00', '23:00']); const SUN = day(['17:00', '23:00']);
  put({
    id: 'kyoto_nikolabo', name: 'NIKOLABO (ニコラボ)', category: 'OMNI',
    lat: 35.002388, lng: 135.769110, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Stews, carpaccio and salads sit beside pasta, risotto, pizza and rice croquettes; no gluten information is published (Tabelog menu; 2025–26 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Most stews are meat or fish, and the vegetable dishes reviewers name come with cheese (water eggplant with parmesan, caprese); no vegan dishes are listed (Tabelog menu; 2023–26 reviews).',
    hours_raw: 'Dinner 18:00–23:00 Tuesday to Friday and 17:00–23:00 Saturday and Sunday; lunch 12:00–14:00 on Tuesday, Thursday and Saturday; closed Monday; last order 22:30 (Tabelog; the official site gives last order 22:00). Lunch opens only for bookings made by phone by the day before, with a one-drink minimum, and serves the evening menu (official site; Tabelog). Booking is recommended even on weekdays (November 2025). All-you-can-drink courses ¥7,000 and ¥8,000 for groups (Tabelog). 16 seats (6 at the counter, 10 at tables), the whole room can be hired for up to 25 standing, from ¥60,000 Tuesday–Friday and ¥80,000 at weekends; BYO wine ¥2,000 a bottle (Tabelog). Non-smoking, with a smoking space; cards and PayPay (Tabelog). On the 2nd floor of the エリッツ四条河原町ビル on the west side of Kawaramachi-dori, south of Takashimaya (October 2025); 1 min from Kyoto Kawaramachi Stn (Tabelog). Opened 1 December 2017 (Tabelog).',
    hours: { 1: LD, 2: D, 3: LD, 4: D, 5: SAT, 6: SUN }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kawaramachi-dori south of Shijo — 1 min from Kyoto Kawaramachi Stn',
    cuisine: 'Italian wine bistro built on stews — the official site calls it ワインのための煮込み料理研究所, a research lab for stews to go with wine; produce and fish come from Kyotango, the chef’s home area (official site) · Kyotango fish carpaccio ¥1,200 (fish of the day) · caprese of Kumihama Toma Kobo fruit tomato and buffalo mozzarella ¥1,200 · more than 30 stews, e.g. tripe in tomato ¥1,680, coq au vin ¥2,300, carbonade (beef in beer) ¥2,400, saffron-stewed Kyotango fish ¥2,600 · risotto with scallops ¥1,880, black-tea chiffon cake with vanilla ice cream ¥800 (Tabelog menu, December 2024) · braised pork belly with a choice of sauces (lotus root, apple, sansho), lamb stewed in tomato, oven-baked chicken wings, water eggplant with parmesan, persimmon and gorgonzola canapés, taro fritters, rice croquettes, pasta with gorgonzola or oyster cream (2023–26 reviews) · over 40 wines chosen by the chef, who is a sommelier; glass from ¥780, bottle from ¥3,900; draft beer ¥600, highball ¥700 (official site; Tabelog menu, December 2024)',
    website: SITE, gmaps: gm('NIKOLABO ニコラボ 京都 河原町'), menu_url: MENU,
    notes: "[Italian · Shijo Kawaramachi, stews made for wine] A second-floor wine bistro on Kawaramachi-dori that calls itself a research lab for stews to go with wine. The chef — a sommelier from Kyotango — brings in fish and vegetables from that coast, and the menu lists more than 30 stews: braised pork belly tender enough for chopsticks with a lotus-root or apple sauce, lamb in tomato, coq au vin, tripe. Start with the carpaccio of the day or the water eggplant with parmesan. Reviewers in 2026 found the owner running the room alone, cooking, taking orders and the bill, so order starters and mains together. Dinner daily except Monday (from 17:00 at weekends); lunch on Tuesday, Thursday and Saturday by booking only.",
    chef_bio: { chef_name: null, roles: ['Owner-chef and sommelier (official site: "ソムリエでもあるシェフ"; reviews describe one owner who cooks, serves and takes payment); not named in the sources'], origin: 'Kyotango, Kyoto Prefecture (official site: "シェフの地元でもある京丹後市").',
      background: 'Per the official site: the shop researches dishes made for wine every day, with seasonal ingredients ordered in from Kyotango, the chef’s home area, and wines chosen by the chef, who is also a sommelier. Opened 1 December 2017 (Tabelog). Reviews from October 2025 to August 2026 describe a single person on duty: drinks for a group course were self-served from the bottles (October 2025), "The owner was managing everything alone" (April 2026), and the owner "handles everything from cooking to taking orders and processing payments" (August 2026).',
      philosophy: 'Per the official site: to serve the season’s ingredients from Kyotango at their best, as dishes made to go with wine.',
      specialty: 'Braised pork belly with lotus-root sauce; stewed lamb; carpaccio of the day.',
      anecdotes: [
        { text: '"Since the owner handles everything from cooking to taking orders and processing payments, it’s a good idea to order your appetizers and main dishes in advance." — August 2026.', source: R + 'B534311484/' },
        { text: 'An April 2026 diner arrived early and found that the lift in the building did not stop at the restaurant’s floor.', source: R + 'B525646668/' },
        { text: 'An October 2025 regular booked ahead to have a message written on a dessert for a daughter’s 18th birthday.', source: R + 'B462930185/' },
        { text: '"Almost everything with chicken here is delicious." — August 2026.', source: R + 'B411609407/' },
      ],
      japanese_sources_summary: '公式サイト (nikolabo1201.com): ワインのための煮込み料理研究所 NIKOLABO、ワインのための料理を日々研究、シェフの地元でもある京丹後市から取り寄せた四季折々の旬の食材、ソムリエでもあるシェフ自らが厳選したワイン、下京区稲荷町329 エリッツ四条河原町ビル2F、12:00〜14:00 (前日までの事前予約・1ドリンク制)、18:00〜23:00 (土・日は17:00から、ラストオーダー22:00)、定休日 月曜日。食べログ: イタリアン・肉料理・ワインバー、河原町駅から徒歩1分、火・木・土 12:00〜14:00、火〜金 18:00〜23:00、土・日 17:00〜23:00 (L.O. 22:30)、月曜休み、16席 (カウンター6、テーブル10)、貸切は立食25名まで、ワイン持ち込み1本2,000円、カード・PayPay 可、2017年12月1日オープン、メニュー (2024年12月更新): 京丹後の鮮魚のカルパッチョ1,200円、煮込み30種以上、ワイン40種以上、飲み放題コース7,000円・8,000円。口コミ (2023〜2026年、英語): 豚バラの煮込み (れんこん・りんごのソース)、ラムのトマト煮込み、水茄子とパルメザン、柿とゴルゴンゾーラ、オーナーが一人で調理と接客。',
      confidence: 'medium', sources: [TB, SITE, MENU, PARTY, R + 'B411609407/', R + 'B452770700/', R + 'B462930185/', R + 'B512346620/', R + 'B517089780/', R + 'B517813785/', R + 'B525646668/', R + 'B533826359/', R + 'B534280780/', R + 'B534311484/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book by phone or online; lunch only by booking by the day before; one person runs the room, so order early.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市下京区稲荷町329 エリッツ四条河原町ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.002343, 135.769110), moved ~5 m north so it does not stack on kyr_menya_yukou_kawaramachi (same lot, 稲荷町329番地; 1.6 m apart on the Tabelog points); cross-checked: GSI 京都府京都市下京区稲荷町329番地 (lot) 15m from the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU, TB + 'dtlmenu/drink/', R + 'B534311484/'],
    price_note: 'Tabelog menu, last updated December 2024 (prices including tax); stews and fish change with the season.', last_checked: TODAY, items: [
      it('', '', 'Kyotango fish carpaccio (fish of the day)', '¥1,200', 'Appetizers', 'ask', 'no', 'Price varies with the fish.', 'carpaccio'),
      it('', '', 'Caprese of fruit tomato and buffalo mozzarella', '¥1,200', 'Appetizers', 'ask', 'no', '', 'caprese'),
      it('', '', 'Tripe stewed in tomato', '¥1,680', 'Stews', 'ask', 'no', '', 'tripe_tomato'),
      it('', '', 'Coq au vin', '¥2,300', 'Stews', 'ask', 'no', '', 'coq_au_vin'),
      it('', '', 'Carbonade (beef braised in beer)', '¥2,400', 'Stews', 'no', 'no', 'Beer.', 'carbonade'),
      it('', '', 'Saffron-stewed Kyotango fish', '¥2,600', 'Stews', 'ask', 'no', '', 'saffron_fish'),
      it('', '', 'Risotto with scallops and seasonal vegetables', '¥1,880', 'Pasta & risotto', 'ask', 'no', '', 'scallop_risotto'),
      it('', '', 'Black-tea chiffon cake with vanilla ice cream', '¥800', 'Dessert', 'no', 'no', '', 'chiffon'),
    ] }, {
    cuisine: 'ワインに合う煮込みが中心のイタリアンのワインバル。公式サイトでは「ワインのための煮込み料理研究所」、野菜と魚はシェフの地元の京丹後から (公式サイト)・京丹後の鮮魚のカルパッチョ1,200円 (日替わり)・Kumihama Toma Kobo のフルーツトマトとバッファローモッツァレラのカプレーゼ1,200円・煮込みは30種以上、例えば tripe のトマト煮込み1,680円、コック・オー・ヴァン2,300円、カルボナード (牛肉のビール煮込み) 2,400円、京丹後の魚のサフラン煮込み2,600円・ホタテと季節野菜のリゾット1,880円、紅茶のシフォンケーキとバニラアイス800円 (食べログのメニュー、2024年12月)・ソースを選べる豚バラの煮込み (れんこん、りんご、山椒)、ラムのトマト煮込み、手羽先のオーブン焼き、水茄子とパルメザン、柿とゴルゴンゾーラのカナッペ、里芋のフリット、ライスコロッケ、ゴルゴンゾーラや牡蠣のクリームのパスタ (2023〜2026年の口コミ)・ソムリエでもあるシェフが選ぶワイン40種以上、グラス780円から、ボトル3,900円から、生ビール600円、ハイボール700円 (公式サイト、食べログのメニュー、2024年12月)',
    neighborhood: '四条の南の河原町通。京都河原町駅から徒歩1分',
    gf_detail: '要確認。煮込み、カルパッチョ、サラダのほか、パスタ、リゾット、ピザ、ライスコロッケもある。グルテンの情報は公開されていない (食べログのメニュー、2025〜2026年の口コミ)。',
    vegan_detail: '要確認。煮込みの多くは肉か魚で、口コミにある野菜の料理にはチーズがのる (水茄子とパルメザン、カプレーゼ)。ヴィーガンの料理は載っていない (食べログのメニュー、2023〜2026年の口コミ)。',
    notes: '[イタリアン・四条河原町、ワインのための煮込み] 河原町通のビル2階のワインバル。自ら「ワインのための煮込み料理研究所」と名乗る。ソムリエでもある京丹後出身のシェフが地元の魚と野菜を取り寄せ、煮込みは30種以上。箸で切れる豚バラの煮込みにれんこんやりんごのソース、ラムのトマト煮込み、コック・オー・ヴァン、tripe。前菜は日替わりのカルパッチョか水茄子とパルメザンを。2026年の口コミでは、調理から注文、会計までオーナーが一人でこなしているので、前菜とメインはまとめて頼むとよい。夜は月曜以外 (土日は17時から)、昼は火・木・土で前日までの予約のみ。',
  });
}

// ================================================================ 乙羽
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26000667/'; const R = TB + 'dtlrvwlst/';
  const BLOG = 'https://menma825.com/mushisushi-otowa/';
  const H = day(['11:00', '20:00']);
  put({
    id: 'kyoto_otowa_sushi', name: '乙羽 (Otowa)', category: 'OMNI',
    lat: 35.004177, lng: 135.767298, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kyoto-style sushi: the inari skins are soaked in broth, the anago is grilled and the shiitake simmered sweet and savoury; no gluten information is published (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: mackerel, conger eel, egg and shrimp run through the menu, and the inari skins are soaked in broth (2025–26 reviews).',
    hours_raw: '11:00–20:00 (last order 19:45), Tuesday to Sunday; closed Monday; hours may change (Tabelog). No reservations (Tabelog). Takeaway: sit on the chair by the entrance; an order took about ten minutes (June 2024). Mushi-zushi (steamed sushi) is a winter dish: roughly October to March by a February 2026 blog, served into early April in the cold spring of 2025, and not served in summer (August 2026); in summer the speciality is hamo box sushi (February 2026). 20 seats; non-smoking; cards (VISA, AMEX, Diners), e-money and QR payments (Tabelog). At the Shijo end of the Shinkyogoku arcade, a short walk from exit 9 of Kyoto Kawaramachi Stn (February 2026 blog; Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinkyogoku arcade just north of Shijo — 2 min from Kyoto Kawaramachi Stn',
    cuisine: 'Long-running Kyoto-sushi house of the Meiji era (2025–26 reviews) · winter mushi-zushi (むしすし): vinegared rice steamed in a lidded Imari bowl under fluffy shredded egg, with grilled anago, simmered shiitake, bamboo shoot and kanpyo, ¥1,600 before tax (February 2026 blog), ¥1,760 (November 2025) · inari-zushi in thick, broth-soaked fried tofu, ¥840 (April 2025); single pieces of inari, saba-zushi and mushi-zushi can be ordered (February–March 2026) · saba-zushi (five pieces) (January 2026) · Kyoto sushi set of box sushi, roll and mackerel ¥1,650 (December 2025) · "Kyo no Shiki" chirashi with shrimp, anago, snap peas and shiitake ¥2,100 (December 2025) · Kurama (くらま): steamed shrimp, snap peas, pickled ginger and shredded egg over anago and shiitake (October 2026) · mini maki ¥550 (October 2026); kappa and shinko rolls (August 2026); anago-cucumber roll ¥1,600 (April 2025) · hamo box sushi in summer (February 2026) · sake, shochu (Tabelog)',
    website: null, gmaps: gm('乙羽 新京極 寿司'), menu_url: null,
    notes: "[Sushi · Shinkyogoku, Kyoto's winter steamed sushi] An old Kyoto-sushi shop at the Shijo end of the Shinkyogoku arcade, dated to the Meiji era and said to be more than 120 years old. In winter a steamer at the door sends up clouds for the mushi-zushi: warm vinegared rice in a lidded Imari bowl, under shredded egg, with grilled anago and sweet-simmered shiitake (¥1,760, November 2025). Year round, reviewers praise the inari, with thick tofu skins soaked in broth, the saba-zushi and the small rolls; in summer, hamo box sushi. Single pieces can be ordered, and everything can be taken away. 11:00–20:00, closed Monday; no bookings.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed in the sources)'], origin: null,
      background: 'A Kyoto-sushi shop dated to the Meiji era: a March 2025 review says "established in the Meiji era", a January 2026 review "founded in the mid-Meiji period", and reviews from December 2025 and October 2026 give its age as 120 years and over 120 years. A February 2026 blog found no official site and notes that the shop is often introduced as founded in 1902 (Meiji 35); some articles present it as the birthplace of mushi-zushi. A January 2026 reviewer writes that the sushi rice is rested overnight to soften the vinegar before steaming.',
      philosophy: null, specialty: 'Mushi-zushi (winter); inari-zushi; saba-zushi.',
      anecdotes: [
        { text: '"In winter, there’s a large steamer in front of the restaurant, and passing by always makes me crave their steamed sushi." — February 2026.', source: R + 'B522158298/' },
        { text: '"I was warned that it would be hot, and when I opened the lid, steam rose up" — March 2026.', source: R + 'B523534258/' },
        { text: 'An October 2026 diner who came in just before closing was given a ¥30 discount on a ¥550 mini maki, and called the owner "such a wonderful person".', source: R + 'B537890882/' },
        { text: 'A long-time regular wrote in June 2024 that a foreign visitor left after being shown a paper in English and that the shop might not be very welcoming to inbound customers; on the same regular’s April 2025 visit, a group of Western tourists was dining and the staff spoke English fluently.', source: R + 'B50403287/' },
      ],
      japanese_sources_summary: '食べログ: 寿司、中京区新京極通四条上ル中之町565、阪急「河原町」駅から徒歩約5分、火〜日 11:00〜20:00 (L.O. 19:45)、月曜休み、予約不可、20席、禁煙、カード・電子マネー・QR 可、テイクアウト可、日本酒・焼酎。ブログ「日本全国食べ歩き」(2026年2月13日訪問): 京都の冬の名物の蒸し寿司を代表する老舗、公式サイトは見当たらない、明治35年 (1902年) 創業と紹介されることが多い、冬は蒸し寿司、夏は鱧の箱寿司、蒸し寿司はおおむね10〜3月、店頭にせいろ、京都河原町駅の9番出口のすぐ近く、むしすし1,600円 (税別)。口コミ (2024〜2026年、英語): 明治創業、120年以上、蒸し寿司 (錦糸玉子、穴子、椎茸、筍、かんぴょう)、いなり寿司840円、鯖寿司、京寿司 (箱・巻・鯖) 1,650円、Kyo no Shiki 2,100円、くらま、ミニ巻き寿司550円、かっぱ巻き・しんこ巻き、穴子きゅうり巻き1,600円、1個から注文可。',
      confidence: 'medium', sources: [TB, BLOG, R + 'B126494400/', R + 'B395652515/', R + 'B503938419/', R + 'B50403287/', R + 'B518297798/', R + 'B520110654/', R + 'B522158298/', R + 'B522564467/', R + 'B523534258/', R + 'B525344271/', R + 'B536180722/', R + 'B536703685/', R + 'B537890882/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the table or at the door for takeaway; check the display of samples by the entrance to see what each set holds; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区新京極通四条上ル中之町565',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026; February 2026 blog visit.' },
    pin_source: `Tabelog ${TB} (35.004177, 135.767298); cross-checked: GSI 京都府京都市中京区中之町565番地 (lot) 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [BLOG, R + 'B518297798/', R + 'B50403287/', R + 'B395652515/', R + 'B126494400/', R + 'B537890882/'],
    price_note: 'No menu is published; prices from a February 2026 blog and reviews dated April 2025 to October 2026.', last_checked: TODAY, items: [
      it('むしすし', '', 'Mushi-zushi (steamed sushi, winter)', '¥1,760', 'Sushi', 'ask', 'no', '¥1,600 before tax (February 2026 blog); ¥1,760 (November 2025).', 'mushi_zushi'),
      it('', '', 'Inari-zushi', '¥840', 'Sushi', 'ask', 'no', 'April 2025; single pieces can be ordered.', 'inari'),
      it('', '', 'Kyoto sushi set (box sushi, roll, mackerel)', '¥1,650', 'Sushi', 'ask', 'no', 'December 2025.', 'kyozushi_set'),
      it('', '', '"Kyo no Shiki" chirashi', '¥2,100', 'Sushi', 'ask', 'no', 'December 2025.', 'kyo_no_shiki'),
      it('', '', 'Anago-cucumber roll', '¥1,600', 'Sushi', 'ask', 'no', 'April 2025.', 'anago_kyuri_maki'),
      it('', '', 'Mini maki', '¥550', 'Sushi', 'ask', 'no', 'October 2026.', 'mini_maki'),
    ] }, {
    cuisine: '明治創業の京寿司の老舗 (2025〜2026年の口コミ)・冬のむしすし: 蓋付きの Imari の器で蒸した酢飯に、ふわふわの錦糸玉子、焼き穴子、甘辛い椎茸、筍、かんぴょう。1,600円 (税別、2026年2月のブログ)、1,760円 (2025年11月)・ぶ厚くだしを含んだおあげのいなり寿司840円 (2025年4月)。いなり寿司、鯖寿司、むしすしは1個から注文できる (2026年2〜3月)・鯖寿司 (5切れ) (2026年1月)・箱寿司、巻き寿司、鯖寿司の京寿司1,650円 (2025年12月)・海老、穴子、スナップえんどう、椎茸のちらし「Kyo no Shiki」2,100円 (2025年12月)・くらま: 蒸し海老、スナップえんどう、甘酢生姜、錦糸玉子の下に穴子と椎茸 (2026年10月)・ミニ巻き寿司550円 (2026年10月)、かっぱ巻き、しんこ巻き (2026年8月)、穴子きゅうり巻き1,600円 (2025年4月)・夏は鱧の箱寿司 (2026年2月)・日本酒、焼酎 (食べログ)',
    neighborhood: '四条のすぐ北の新京極商店街。京都河原町駅から徒歩2分',
    gf_detail: '要確認。京寿司で、いなりのおあげはだしを含み、穴子は焼き、椎茸は甘辛く煮てある。グルテンの情報は公開されていない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鯖、穴子、卵、海老が中心で、いなりのおあげもだしを含む (2025〜2026年の口コミ)。',
    notes: '[寿司・新京極、京都の冬の蒸し寿司] 新京極商店街の四条側にある京寿司の老舗。明治創業で120年以上と言われる。冬は店頭のせいろから湯気が上がり、むしすしの季節。蓋付きの Imari の器に温かい酢飯、錦糸玉子、焼き穴子、甘辛い椎茸 (1,760円、2025年11月)。一年を通して、だしを含んだぶ厚いおあげのいなり寿司、鯖寿司、細巻きも口コミの評判がよく、夏は鱧の箱寿司。1個から注文でき、持ち帰りもできる。11時〜20時、月曜休み、予約不可。',
  });
}

// ================================================================ La Biographie...
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26036019/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://la-biographie.info/'; const CHEF = SITE + 'chef.html'; const MENU = SITE + 'menu.html'; const ABOUT = SITE + 'about.html'; const CONCEPT = SITE + 'concept.html';
  const DIN = day(['18:00', '22:00']); const LD = day(['12:00', '15:00'], ['18:00', '22:00']);
  put({
    id: 'kyoto_la_biographie', name: 'La Biographie... (ラ ビオグラフィ)', category: 'MOM_AND_POP',
    lat: 35.020225, lng: 135.742994, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. Allergies are handled if told in advance, but not on the day (Tabelog); the omakase has included bread, a kumquat tart, a baba, and nama-fu (wheat gluten) in an amuse and a taiyaki (2024–25 reviews).',
    vegan_status: 'options', vegan_label: 'Some vegan options', vegan_detail: 'A vegetarian or vegan menu can be arranged — ask when booking; changes on the day are not possible (official site; Tabelog). The standard omakase uses beef, crab, fish, egg and cream.',
    hours_raw: 'Lunch 12:00 (last entry) to 15:00, Friday to Sunday only; dinner 18:00 (last entry) to 22:00, Wednesday to Sunday; closed Monday and Tuesday and irregularly, with summer and New Year breaks posted on the official site (official site). Tabelog still lists lunch Wednesday to Sunday; the official site gives Friday to Sunday. Reservation only: by phone or online (TableCheck, OMAKASE, Ikkyu, linked from the official site); a booking with no word 10 minutes after the time is treated as cancelled (Tabelog). Omakase only: lunch ¥16,500 (8 dishes, about 2 hours), dinner ¥28,000 or ¥38,500 (11 dishes, about 2.5–3 hours), plus 10% service (official site). 8 counter seats facing the open kitchen; private hire up to 20; barrier-free, with gentle slopes throughout; non-smoking; cards, no e-money or QR (Tabelog; official site). 13 min walk from JR Nijo Stn (Tabelog).',
    hours: { 2: DIN, 3: DIN, 4: LD, 5: LD, 6: LD }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shimodachiuri-dori east of Senbon — 13 min walk from JR Nijo Stn',
    cuisine: 'Counter French by chef Masahiro Takimoto, who keeps a Michelin star in the 2026 Kyoto/Osaka guide (official site); omakase only — lunch ¥16,500, dinner ¥28,000 or ¥38,500, plus 10% service (official site) · opens with an aperitif of five tastes (bitter, sweet, umami, sour, salty) in finger-sized bites · signature egg, the "microcosm": warm yolk, cold cream, maple sap and chives in the shell · Kasumi crab with homemade senmaizuke and caviar · Kyoto mushroom soup served like a cappuccino · Kyoto Hime beef cooked about 100 minutes at low temperature with a hinoki scent · Uji matcha dessert, tarte Tatin, baba, mignardises (2024–26 reviews) · in October 2026: tuna tartare with caviar and shibazuke, Lake Biwa sweetfish, Awaji hamo with matsutake in consommé, herbal tea made at the counter (October 2026)',
    website: SITE, gmaps: gm('La Biographie 京都 下立売 千本'), menu_url: MENU,
    notes: "[French · Senbon, a Michelin-starred counter] Masahiro Takimoto was head chef at a Kyoto hotel from 1999, won a Michelin star in the guide's 2010 edition — the only French restaurant among Kyoto's starred Japanese kitchens, by the official profile — and opened La Biographie in 2011. Since 2021 it has been an eight-seat counter with an open kitchen on Shimodachiuri-dori, where the chef cooks and talks across the counter. The omakase begins with a five-taste aperitif and the signature egg, then Kasumi crab with senmaizuke and caviar, Kyoto mushrooms, and Kyoto Hime beef cooked slowly for about 100 minutes. Vegetarian or vegan menus can be arranged in advance. Lunch Friday–Sunday ¥16,500; dinner Wednesday–Sunday from ¥28,000, plus 10% service; booking only.",
    chef_bio: { chef_name: 'Masahiro Takimoto (滝本 将博)', roles: ['Owner-chef (official site: chef profile and company founder; signs the shop notices); reviews from January 2025 and October 2026 describe the chef cooking behind the counter'], origin: null,
      background: 'Per the official profile: entered cooking as a pâtissier in 1982; trained at a hotel in Kyoto from 1983, then went to Europe; from 1987 trained at hotels and Michelin-starred restaurants in Switzerland and France; returned in 1992 and joined a Kyoto hotel, becoming head chef in 1999; won a star in the Michelin Guide 2010 edition (2009), the only French restaurant to do so in a Kyoto otherwise starred for Japanese cuisine; in 2011 founded 株式会社 T&T カンパニー and opened La Biographie...; selected for La Liste 1000 two years running from 2017; closed the 御池衣棚 shop in 2020 to move, and reopened at Shimodachiuri-dori Senbon in 2021 (Tabelog: 18 March 2021). A February 2024 review gives different years and names: part-time restaurant work from 17 as a pastry cook, the main dining room of the Kyoto Royal Hotel in 1984, Switzerland from 1987 ("International" and "Montre" in Zurich), an auberge in Albertville and "Alcazar" in Paris, back in Japan in 1990 at the Kyoto Brighton Hotel, head chef of its "Vi Za Vi" from 1996, own restaurant in 2011. A January 2025 review says the chef led the Brighton Hotel restaurant for 20 years. The official site reports that the restaurant kept its Michelin star in the 2026 Kyoto/Osaka guide. Tabelog French WEST "Tabelog 100" 2023 and 2025.',
      philosophy: 'Per the official site: face each ingredient, judge it, and heat it without stress at the temperature that suits it, to draw out its nature; and a promise to the chef’s teacher, a great French chef, to pass the techniques, spirit and philosophy on to the next generation of Japanese cooks.',
      specialty: 'Aperitif of five tastes; the egg "microcosm"; low-temperature Kyoto Hime beef.',
      anecdotes: [
        { text: 'A February 2024 reviewer describes the signature egg as an homage to the "Oeuf à la Coque" of a three-star restaurant in Paris, and a July 2025 reviewer links the chef’s techniques to Alain Passard.', source: R + 'B480361052/' },
        { text: '"Handcrafted right in front of us by the chef, who hand-cut the herbs into a bowl." — on the fresh herbal tea, October 2026.', source: R + 'B536741766/' },
        { text: 'A March 2026 lunch guest found the dishes delicate but the portions small, and the bill with wine, water and service steep for the value.', source: R + 'B524126865/' },
      ],
      japanese_sources_summary: '公式サイト (la-biographie.info): 歴史ある平安宮中和院跡、下立売通千本に佇む本格フレンチレストラン、上京区田中町422-1 セントガーデン1F、シェフ 滝本 将博 (TAKIMOTO Masahiro)、1982年パティシエとして料理の世界に入る、1983年京都市内のホテルで修業後渡欧、1987年スイス・フランスのホテル、ミシュラン星付きレストランで修業、1992年帰国し京都市内ホテル入社、1999年料理長、2009年ミシュランガイド2010年版で星獲得 (日本料理ばかりの京都で唯一のフランス料理での星)、2011年株式会社 T&T カンパニー設立・La Biographie... 開業、2017年 La Liste 1000 に2年連続選出、2020年御池衣棚での営業を移転準備のため終了、2021年下立売通千本東入るに移転オープン、Michelin Guide 京都/大阪2026で星を維持。Lunch 16,500円 (金・土・日のみ、デザートを含む8皿、約2時間)、Dinner 28,000円・38,500円 (11皿、約2時間半〜3時間)、サービス料10%別、おまかせコースのみ、ベジタリアン・ヴィーガンのメニューも対応、バリアフリー、月曜・火曜定休・不定休、昼12:00 (最終入店) 15時クローズ、夜18:00 (最終入店) 22時クローズ。加熱の哲学: 素材にストレスを与えず心地よい温度帯で加熱。食べログ: フレンチ、完全予約制、8席、アレルギー・ベジタリアン・ヴィーガンは事前に相談 (当日の変更は不可)、2021年3月18日オープン、フレンチ WEST 百名店 2023・2025。口コミ (2024〜2026年、英語): 五味のアペリティフ、卵の小宇宙、Kasumi の蟹、京都の茸のスープ、Kyoto Hime beef の低温焼き、ハーブティー。',
      confidence: 'medium', sources: [TB, SITE, CHEF, MENU, ABOUT, CONCEPT, R + 'B480361052/', R + 'B490396204/', R + 'B499104539/', R + 'B501495275/', R + 'B513061459/', R + 'B518419343/', R + 'B519415359/', R + 'B520718477/', R + 'B524126865/', R + 'B536741766/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book online (TableCheck, OMAKASE or Ikkyu) or by phone; state allergies or a vegan menu when booking.' },
    safety: { ...SAFETY0, positives: [{ text: 'Vegetarian and vegan menus can be arranged on request (official site); vegetarian, vegan and allergy requests must be made in advance — no changes on the day (Tabelog).', source: SITE, verified: TODAY }] },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区田中町422-1 セントガーデン1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (Michelin 2026 notice, current prices) and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.020225, 135.742994); cross-checked: GSI 京都府京都市上京区田中町422番地 (lot) 15m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU, SITE],
    price_note: 'Official site menu page (current as read 2026-11-05); 10% service charge on top.', last_checked: TODAY, items: [
      it('', '', 'Lunch omakase (8 dishes including dessert; Friday–Sunday)', '¥16,500', 'Course', 'ask', 'ask', 'A vegan menu can be arranged on advance request.', 'lunch_course'),
      it('', '', 'Dinner omakase (11 dishes including dessert)', '¥28,000', 'Course', 'ask', 'ask', 'A vegan menu can be arranged on advance request.', 'dinner_course'),
      it('', '', 'Dinner omakase, upper course', '¥38,500', 'Course', 'ask', 'ask', '', 'dinner_course_upper'),
    ] }, {
    cuisine: '滝本 将博シェフのカウンターフレンチ。ミシュランガイド京都・大阪2026で星を維持 (公式サイト)。おまかせコースのみ、昼16,500円、夜28,000円か38,500円、サービス料10%別 (公式サイト)・苦味、甘味、旨味、酸味、塩味の五味のアペリティフ、指でつまむ一口サイズ・名物の卵「小宇宙」: 殻の中に温かい黄身、冷たいクリーム、メープルの樹液、チャイブ・Kasumi の蟹と自家製の千枚漬け、キャビア・カプチーノ仕立ての京都の茸のスープ・約100分低温で焼き、檜が香る Kyoto Hime beef・Uji matcha のデザート、タルトタタン、ババ、ミニャルディーズ (2024〜2026年の口コミ)・2026年10月は、キャビアと柴漬けのマグロのタルタル、Lake Biwa の鮎、Awaji の鱧と松茸のコンソメ、カウンターで作るハーブティー (2026年10月)',
    neighborhood: '千本の東、下立売通。JR二条駅から徒歩13分',
    gf_detail: '予約時に要確認。アレルギーは事前に伝えれば対応するが、当日は不可 (食べログ)。おまかせにはパン、金柑のタルト、ババ、アミューズや鯛焼きの生麩が入ったことがある (2024〜2025年の口コミ)。',
    vegan_detail: 'ベジタリアンやヴィーガンのメニューも対応。予約時に相談、当日の変更は不可 (公式サイト、食べログ)。通常のおまかせは牛肉、蟹、魚、卵、クリームを使う。',
    notes: '[フレンチ・千本、ミシュランの星のカウンター] 滝本 将博シェフは京都市内のホテルの料理長を長く務め、ミシュランガイド2010年版で星を獲得。公式の経歴によれば、日本料理ばかりの京都で唯一のフランス料理の星だった。2011年に La Biographie を開業し、2021年からは下立売通の8席のカウンターとオープンキッチンで、シェフがカウンター越しに話しながら料理する。おまかせは五味のアペリティフと名物の卵から始まり、Kasumi の蟹と千枚漬けとキャビア、京都の茸、約100分かけて焼く Kyoto Hime beef へ。ベジタリアンやヴィーガンのメニューは事前に相談できる。昼は金〜日16,500円、夜は水〜日28,000円から、サービス料10%別、完全予約制。',
  });
}

// ================================================================ 京うどん 生蕎麦 岡北
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26000919/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.kyoto-okakita.com/'; const ABOUT = SITE + 'aboutus.html'; const NOODLE = SITE + 'udonsoba.html'; const DON = SITE + 'donmono.html'; const INFO = SITE + 'information.html';
  const H = day(['11:00', '19:00']);
  put({
    id: 'kyoto_okakita', name: '京うどん 生蕎麦 岡北 (Kyo Udon Nama Soba Okakita)', category: 'OMNI',
    lat: 35.014331, lng: 135.784814, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat udon, soba of unstated buckwheat ratio, tempura, curry sauce and nama-fu (wheat gluten), all in a dashi-based broth (official menu; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: every bowl sits in dashi — the official site names natural Rishiri kombu, and a May 2026 reviewer tasted kombu and bonito; toppings include chicken, beef, egg, shrimp and herring (official site; 2026 reviews).',
    hours_raw: '11:00–19:00 (last order 19:00), Monday and Thursday to Sunday; closed Tuesday and Wednesday (official site; Tabelog). No reservations (Tabelog). Expect a queue: 15 people and a 20-minute wait at 13:00 on a holiday Saturday, about 40 minutes on a weekday, five groups ahead 30 minutes before opening (October 2026); a line before 15:00 on a Sunday was gone by 16:30 (November 2026). Staff take orders while you wait, food comes quickly, and diners are expected to finish promptly for the next in line (October 2026). 36 seats; non-smoking; cash only (Tabelog). Children welcome, with child-sized bowls and forks (Tabelog). City bus 5 to the Zoo stop, 2 min north; or 10 min walk from Higashiyama Stn; park in the municipal lot in front for a discount coupon (official site; Tabelog).',
    hours: { 0: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Okazaki, by the zoo and Heian Shrine — 10 min walk from Higashiyama Stn',
    cuisine: 'Kyoto udon and fresh soba in Okazaki since 1940 (official site); every noodle dish comes as udon or soba (official menu) · kitsune ¥970 · shippoku ¥1,400 · tori-nanba ¥1,280 · nishin soba ¥1,500 · tempura ¥1,680 · nabeyaki udon ¥1,850 · oyako-nanba ¥1,430 · ten-toji ¥1,780 · tanuki ¥1,100 · noppei ¥1,450 · fresh yuba keiran ¥1,680 · sweet-kitsune curry ¥1,180, tori-nanba curry ¥1,400, beef curry ¥1,950 · seiro (cold) ¥980, ten-seiro ¥2,200 · donburi from tamago-don ¥1,000 and kinugasa-don ¥1,280 to ten-don ¥2,000, each with red-miso soup with fresh yuba (official menu, undated) · tempura udon ¥1,680 and chopped curry udon ¥1,100 (October 2026); beef udon ¥1,850 (May 2026); a one-shrimp tempura udon ¥1,430 and a mini oyako-don (October 2026); curry comes spicy or mild (October 2026)',
    website: SITE, gmaps: gm('岡北 岡崎 うどん'), menu_url: NOODLE,
    notes: "[Udon & soba · Okazaki, Kyoto udon by the zoo] A Kyoto udon house in Okazaki, open since 1940, a few minutes from Heian Shrine and the zoo. The kitchen builds its dashi on natural Rishiri kombu, and the thin, soft Kyoto udon is boiled 10–15 minutes; toppings include fried tofu fried by hand every morning at a local tofu shop and nama-fu from 京麩 半兵衛. The tempura udon — big shrimp, a fluffy egg-thickened broth — and the dashi curry udon are what most reviewers order; any bowl can be had with soba instead. Lines are the rule (20–40 minutes in October 2026); staff take orders in the queue and seat you fast. Cash only. 11:00–19:00, closed Tuesday and Wednesday.",
    chef_bio: { chef_name: null, roles: ['The second generation (official site: 二代目) carries on the founder’s dashi; no one is named in the sources'], origin: null,
      background: 'Per the official site: founded in Showa 15 (1940); the founder learned the dashi technique in seventeen years of training, and the second generation has refined it over more than fifty years. Ingredients named on the site: buckwheat flour from the foot of 白山 in Ishikawa, organic rice, nama-fu from 京麩 半兵衛, fresh yuba, domestic wagyu and young chicken, wild shrimp, fried tofu fried by hand each morning at a local tofu shop, and Kyoto vegetables. The interior has wooden chairs made by craftsmen and karakami paper with an autumn-grass pattern printed from woodblocks in use since the Edo period. Renewal opened on 20 August 2008 (Tabelog). Tabelog Udon "Tabelog 100" 2017–2019 and Udon WEST 2020, 2024.',
      philosophy: 'Per the official site: "dashi is the life of Kyoto udon"; to serve a gentle, warm bowl, boiling thin noodles 10–15 minutes while "checking their mood" so they come out glossy with some bite.',
      specialty: 'Tempura udon; curry udon; kitsune.',
      anecdotes: [
        { text: 'A May 2026 regular noted many foreign visitors, who tended to linger after eating, lengthening the wait outside.', source: R + 'B464739072/' },
        { text: 'An October 2026 diner gave an order while still in the queue and had the food almost as soon as being seated.', source: R + 'B538129853/' },
        { text: '"The staff was attentive, frequently checking on us and taking orders while we waited" — October 2026.', source: R + 'B537233020/' },
      ],
      japanese_sources_summary: '公式サイト (kyoto-okakita.com): 京うどん 生蕎麦 岡北、創業昭和15年、石川県白山山麓産のそば粉、有機米、京麩 半兵衛さんの生麩、生湯葉、国産和牛、若鶏、天然海老、毎朝手揚げの地元豆腐店のおあげさん、京野菜、出汁は天然利尻昆布のみを使用、初代が十七年の修行で修得した技法を二代目が五十年余りで培った技で仕上げる、細めの麺を10分から15分ゆがく、職人手製の木製椅子、江戸時代からの版木で刷った秋草模様の唐紙、左京区岡崎南御所町34、市バス「動物園前」から北へ徒歩2分、11:00〜19:00 (L.O.)、毎週火曜日・水曜日定休。おしながき: きつね970円、しっぽく1,400円、鳥なんば1,280円、にしんそば1,500円、天ぷらそば1,680円、鍋焼きうどん1,850円、親子なんば1,430円、天とじ1,780円、たぬき1,100円、のっぺい1,450円、生湯葉けいらん1,680円、甘ぎつねカレー1,180円、鳥なんばカレー1,400円、肉カレー1,950円、せいろ980円、天せいろ2,200円 (うどんか蕎麦を選べる)、丼もの: 玉子丼1,000円〜天丼2,000円 (生湯葉入赤だし付き)。食べログ: うどん・そば・丼、予約不可、36席、カード・電子マネー・QR 不可、禁煙、子供用の器とフォーク、2008年8月20日リニューアルオープン、うどん百名店 2017〜2019、うどん WEST 百名店 2020・2024。口コミ (2026年5〜11月、英語): 行列 (20〜40分)、並んでいる間に注文、天ぷらうどん1,680円、カレーうどん、肉うどん1,850円、カレーは辛口と甘口。',
      confidence: 'medium', sources: [TB, SITE, ABOUT, NOODLE, DON, INFO, R + 'B140644821/', R + 'B401606458/', R + 'B464739072/', R + 'B537030622/', R + 'B537233020/', R + 'B537672632/', R + 'B538129853/', R + 'B538490670/', R + 'B538508392/', R + 'B538526387/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Join the queue; staff take your order in line. Udon or soba for any bowl; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区岡崎南御所町34',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.014331, 135.784814); cross-checked: GSI 京都府京都市左京区岡崎南御所町34番地 (lot) 50m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [NOODLE, DON, R + 'B464739072/'],
    price_note: 'Official site menu (undated); the tempura price matches an October 2026 review. Each noodle dish can be udon or soba.', last_checked: TODAY, items: [
      it('きつね', '', 'Kitsune (fried tofu) udon or soba', '¥970', 'Udon & soba', 'no', 'no', '', 'kitsune'),
      it('天ぷらそば', '', 'Tempura udon or soba', '¥1,680', 'Udon & soba', 'no', 'no', 'October 2026 review: ¥1,680.', 'tempura'),
      it('にしんそば', '', 'Nishin soba (herring)', '¥1,500', 'Udon & soba', 'no', 'no', '', 'nishin_soba'),
      it('生湯葉けいらん', '', 'Fresh yuba keiran', '¥1,680', 'Udon & soba', 'no', 'no', '', 'yuba_keiran'),
      it('甘ぎつねカレー', '', 'Sweet-kitsune curry udon or soba', '¥1,180', 'Udon & soba', 'no', 'no', '', 'kitsune_curry'),
      it('肉カレー', '', 'Beef curry udon or soba', '¥1,950', 'Udon & soba', 'no', 'no', '', 'niku_curry'),
      it('せいろ', '', 'Seiro', '¥980', 'Udon & soba', 'no', 'no', '', 'seiro'),
      it('親子丼', '', 'Oyako-don', '¥1,500', 'Donburi', 'no', 'no', 'With red-miso soup with fresh yuba.', 'oyakodon'),
      it('衣笠丼', '', 'Kinugasa-don', '¥1,280', 'Donburi', 'no', 'no', '', 'kinugasa_don'),
    ] }, {
    cuisine: '1940年からの岡崎の京うどんと生蕎麦 (公式サイト)。麺類はうどんか蕎麦を選べる (公式メニュー)・きつね970円・しっぽく1,400円・鳥なんば1,280円・にしんそば1,500円・天ぷら1,680円・鍋焼きうどん1,850円・親子なんば1,430円・天とじ1,780円・たぬき1,100円・のっぺい1,450円・生湯葉けいらん1,680円・甘ぎつねカレー1,180円、鳥なんばカレー1,400円、肉カレー1,950円・せいろ980円、天せいろ2,200円・丼ものは玉子丼1,000円、衣笠丼1,280円から天丼2,000円まで、生湯葉入りの赤だし付き (公式メニュー、日付なし)・天ぷらうどん1,680円、Chopped Curry Udon 1,100円 (2026年10月)、肉うどん1,850円 (2026年5月)、海老1本の天ぷらうどん1,430円、ミニ親子丼 (2026年10月)、カレーは辛口と甘口 (2026年10月)',
    neighborhood: '動物園と平安神宮のそばの岡崎。東山駅から徒歩10分',
    gf_detail: 'グルテンフリーではない。小麦のうどん、配合の書かれていない蕎麦、天ぷら、カレーのあん、生麩、どれもだしのつゆ (公式メニュー、2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。どの品もだしを使う。公式サイトは天然利尻昆布と書き、2026年5月の口コミは昆布と鰹を感じている。具も鶏、牛、卵、海老、にしん (公式サイト、2026年の口コミ)。',
    notes: '[うどん・蕎麦・岡崎、動物園そばの京うどん] 1940年創業、平安神宮と動物園から数分の京うどんの店。出汁は天然利尻昆布で、細く柔らかい京うどんを10〜15分ゆがく。地元の豆腐店で毎朝手揚げするおあげ、京麩 半兵衛の生麩も使う。口コミで多いのは、大きな海老とふわふわの卵とじのつゆの天ぷらうどんと、だしのカレーうどん。どの麺も蕎麦に替えられる。行列はいつものこと (2026年10月は20〜40分) だが、並んでいる間に注文を取り、すぐに案内される。現金のみ。11時〜19時、火・水曜休み。',
  });
}

save();
