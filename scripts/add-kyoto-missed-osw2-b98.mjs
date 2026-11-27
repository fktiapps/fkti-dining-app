// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 98.
//   Queue run from the osw2 worktree, 2026-11-26. Core and notable tiers have nothing left in this lane, so rest tier,
//   nearest-first (queue.mjs kyoto-missed next rest 2000). Shops fetched by the worker from Tabelog /en/ with 3 s
//   between requests. Rest rule: at least one 2025–26 review and enough sourced detail. Days the sources do not state
//   are left out of hours.
//   + Orange Cafe+ — breakfast and set-lunch café between Shijo and Gojo, opened 13 August 2026 (Tabelog); thin (two
//     substantive reviews, both 2026) but an official Tabelog listing with hours, seats and payment.
//   + ビストロ レスト (Bistro L'est; romaji from the official site bistro-lest-kyoto.com) — French bistro at Higashioji
//     Nio-mon run by one chef and one madame (official site); moved here from Teramachi Nijo (Tabelog).
//   + 寿司割烹 光月 — Matsubara-Shinmachi sushi counter run by one elderly owner-chef; kanji only (Tabelog's "Kougetsu"
//     is its machine romaji). Reviewers say Japanese diners are turned away at dinner — stated plainly and attributed.
//   + 五穀豊穣のお茶屋ごはん 五木茶屋 清水店 (ITSUKICHAYA Kiyomizu; the English official site's form) — kyo-don tasting sets
//     on Ninenzaka. Group: four shops on the official site (Arashiyama main, Pontocho, Fushimi Inari, Kiyomizu), none
//     in data → small local group, drafted and flagged.
//   Skip: 御菓子 艸堂 (THE SODOH / Plan・Do・See large parent); Gallery&Book Cafe 芦屋画廊 (no 2025–26 review).
//   Not drafted, left for the integrator (no skip line): パティオ (26003157), the restaurant in ハートンホテル京都 — the
//   same hotel-group question as the held 京料理 濱登久 ハートンホテル京都店 (26002905).
//   None of the drafted shops is in data/kyoto.json (main, hidden records included) or in another worker's pending
//   script: grep by id, name and address.
//   Pins: Tabelog /en/ point for each shop; not pin-checked by the worker (integrator pin-checks).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-26';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-98');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26038689', 'large parent (Plan・Do・See, integrator 2026-11-06): 御菓子 艸堂 is the sweets shop of THE SODOH HIGASHIYAMA KYOTO — a December 2024 review quotes "At THE SODOH HIGASHIYAMA KYOTO, our specialty shop offers sweets…" (B498676111) and a January 2025 review places the take-out shop in the renovated Higashiyama Sodou building, alongside Sushi Azabu Higashiyama (B500287069)');
skip('26037615', 'no 2025–26 review: Gallery&Book Cafe 芦屋画廊 has a single Tabelog review, from April 2022');

// ================================================================ Orange Cafe+
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26045655/'; const R = TB + 'dtlrvwlst/';
  const H = day(['07:30', '15:00']);
  put({
    id: 'kyoto_orange_cafe_plus', name: 'Orange Cafe+', category: 'OMNI',
    lat: 34.99826383787309, lng: 135.75752128029595, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: breakfast is toast, hot dogs, sandwiches and curry, and the lunch sets are built on tonkatsu, kara-age, shrimp tempura and katsu curry (September 2026 review). No gluten information is published.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the set lunches are pork steak, tonkatsu, kara-age, hamburg steak and omurice, served with miso soup (August and September 2026 reviews). No vegan information is published.',
    hours_raw: 'Tuesday–Saturday 07:30–15:00; closed Sunday and Monday (Tabelog). Breakfast from 07:30, lunch 11:00–15:00 (August 2026 review). Reservations taken (Tabelog). Cashless: cards (VISA, Master, JCB, AMEX, Diners, UnionPay), e-money and QR payments (Tabelog); an August 2026 diner was told cash is accepted for elderly people from the neighbourhood. 12 seats: 8 at the counter and 4 at tables (Tabelog); a September 2026 diner counted a counter, two tables for two and a table for four at the back. Orders can be placed at a touch panel by the entrance (September 2026). Non-smoking; no parking; children welcome; take-out (Tabelog). In KARASUMA STEPs, about 5 minutes from subway Gojo station (Tabelog), across from Shutoku Park (September 2026 review). Opened 13 August 2026 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shijo-Gojo',
    cuisine: 'Breakfast and set-lunch café (Tabelog; reviews) · breakfast from 07:30: toast, hot dogs, sandwiches, curry (September 2026) · lunch: lunch plate, pork steak set, tonkatsu set, kara-age set, katsu curry (September 2026) · pork steak (tonteki) set with salad, rice and miso soup ¥1,200; coffee after the meal ¥350; drinks ¥200 off with lunch (August 2026) · lunch plate of shrimp tempura, omurice, hamburg steak, kara-age, potato salad and salad with miso soup ¥1,200 tax included (September 2026)',
    website: null, gmaps: gm('Orange Cafe+ 京都 徳万町'), menu_url: null,
    notes: '[Café · Shijo-Gojo, early breakfast and set lunches] A small new café opened in August 2026 between Shijo and Gojo, open from 07:30: toast, hot dogs and curry for breakfast, then ¥1,200 set lunches such as pork steak or a "grown-up kids’ lunch" plate of shrimp tempura, omurice, hamburg steak and kara-age. Cashless; closed Sunday and Monday.',
    chef_bio: { chef_name: null, roles: ['Chef (not named)'], origin: null,
      background: 'An August 2026 diner, who asked a lot of questions, heard that the chef has long run a business independently. The shop opened on 13 August 2026 (Tabelog; August and September 2026 reviews). A September 2026 diner describes a warm, natural-wood interior. The Tabelog listing is the operator’s official listing; no website was found.',
      philosophy: null,
      specialty: 'Set lunches; the lunch plate.',
      anecdotes: [
        { text: 'An August 2026 diner came by just before noon, had the ¥1,200 pork steak set, found it substantial, liked the miso soup and stayed for a ¥350 coffee after walking in the heat.', source: R + 'B534362810/' },
        { text: 'A September 2026 diner called the lunch plate a "grown-up’s children’s lunch": a thin omelette over ketchup rice, a juicy hamburg steak, crisp kara-age, a large shrimp tempura and a generous salad with a dressing that seemed homemade, all for ¥1,200.', source: R + 'B534785592/' },
      ],
      japanese_sources_summary: '食べログ (英語版、公式情報): カフェ、予約可、火〜土7:30〜15:00、日・月定休、カード (VISA、Master、JCB、AMEX、Diners、銀聯)・電子マネー・QRコード決済可、12席 (カウンター8席、テーブル4席)、全席禁煙、駐車場なし、テイクアウト可、子ども可、京都府京都市下京区徳万町202-4 KARASUMA STEPs 101、地下鉄五条駅から徒歩約5分、オープン日2026年8月13日。口コミ (2026年、英語): 朝食は7:30から、ランチは11:00〜15:00、トンテキの定食1,200円、食後のコーヒー350円、ランチと一緒なら飲み物200円引き、キャッシュレスだが近所のお年寄りは現金可 (2026年8月)。入口のタッチパネルでも注文可、朝はトースト、ホットドッグ、サンドイッチ、カレー、昼はランチプレート、トンテキ、とんかつ、唐揚げの定食、カツカレー、海老天、オムライス、ハンバーグ、唐揚げ、ポテトサラダのランチプレート税込1,200円 (2026年9月)。',
      confidence: 'low', sources: [TB, R + 'B534362810/', R + 'B534785592/', R + 'B534797587/'] },
    cultural_comfort: { level: 'japanese', note: 'No English menu or English-speaking staff mentioned in any source; a touch panel by the entrance takes orders (September 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区徳万町202-4 KARASUMA STEPs 101',
    existence: { status: 'probable', checked: TODAY, note: 'Official Tabelog listing (no closure badge), opened 13 August 2026; reviews dated August and September 2026; no shop website found.' },
    pin_source: `Tabelog ${TB} (34.998264, 135.757521); nearest pin in data about 58 m (一凛, 徳万町209-2); not pin-checked by the worker; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534362810/', R + 'B534785592/'],
    price_note: 'Prices from August and September 2026 reviews.', last_checked: TODAY, items: [
      it('トンテキ', '', 'Pork steak (tonteki) set with salad, rice and miso soup', '¥1,200', 'Lunch', 'ask', 'no', 'August 2026 review.', 'tonteki_set'),
      it('', '', 'Lunch plate: shrimp tempura, omurice, hamburg steak, kara-age, potato salad, salad, miso soup', '¥1,200', 'Lunch', 'no', 'no', 'September 2026 review (tax included).', 'lunch_plate'),
      it('', '', 'Coffee', '¥350', 'Drinks', 'ask', 'ask', 'August 2026 review; drinks ¥200 off with lunch.', 'coffee'),
    ] }, {
    cuisine: '朝食とランチの定食のカフェ (食べログ、口コミ)・朝は7:30から: トースト、ホットドッグ、サンドイッチ、カレー (2026年9月)・ランチ: ランチプレート、トンテキの定食、とんかつの定食、唐揚げの定食、カツカレー (2026年9月)・サラダ、ご飯、味噌汁付きのトンテキの定食1,200円、食後のコーヒー350円、ランチと一緒なら飲み物200円引き (2026年8月)・海老天、オムライス、ハンバーグ、唐揚げ、ポテトサラダ、サラダに味噌汁のランチプレート税込1,200円 (2026年9月)',
    neighborhood: '徳万町',
    gf_detail: 'グルテンフリー不可。朝はトースト、ホットドッグ、サンドイッチ、カレー、ランチはとんかつ、唐揚げ、海老天、カツカレーが中心 (2026年9月の口コミ)。グルテンの情報は公開されていない。',
    vegan_detail: 'ヴィーガン不可。ランチはトンテキ、とんかつ、唐揚げ、ハンバーグ、オムライスに味噌汁 (2026年8月、9月の口コミ)。ヴィーガンの情報は公開されていない。',
    notes: '[カフェ・徳万町、朝7時半からの朝食と定食] 2026年8月、四条と五条の間にオープンした小さなカフェ。朝7:30から開き、朝はトースト、ホットドッグ、カレー、昼はトンテキの定食や、海老天、オムライス、ハンバーグ、唐揚げをのせた「大人のお子様ランチ」のようなランチプレートが1,200円。キャッシュレス、日曜と月曜は休み。',
  });
}

// ================================================================ ビストロ レスト (Bistro L'est)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26027565/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.bistro-lest-kyoto.com/'; const MENU = SITE + 'menus';
  const H = day(['15:00', '21:45']);
  put({
    id: 'kyoto_bistro_lest', name: "ビストロ レスト (Bistro L'est)", category: 'OMNI',
    lat: 35.01139760787132, lng: 135.77816689041416, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Pâtés, terrines, confits, steaks and salads are on the menu, but so are fish and boar baked in pastry, a foie gras puff pastry and homemade bread (official take-out menu; reviews), and no gluten information is published. The kitchen is one chef.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a French bistro menu of charcuterie, pâtés, game, duck, lamb, beef, fish and cheese (official take-out menu; reviews). A vegetable side platter is listed, but no vegan information is published.',
    hours_raw: 'Tuesday–Sunday 15:00–21:45, last entry and orders 21:00 (official site; Tabelog gives 15:00–22:00, last order 21:00, course last order 20:30). Closed Mondays (Tabelog; the official site’s calendar); from 2026 also closed twice a month, with the dates posted on the official site (e.g. Tuesday 24 November and Tuesday 22 December 2026), regular opening again from New Year’s Day 2027. Reservations from one month ahead; bookings for any day other than today by phone after 20:00; parties of four or more book once numbers are fixed; call if more than about 15 minutes late; same-day cuts in party size without a call cost ¥2,000 a head; bookings through AutoReserve are all refused (official site). A December 2025 diner found phone booking hard. Cash only: no cards or payment apps (official site; June 2024 review). No service charge (Tabelog’s original text: なし). Four tables (October 2024 review). Non-smoking; no parking, coin parking nearby (Tabelog). Strongly scented fabric softener or perfume may mean refused entry; ask before photographing dishes, and no photos of half-eaten plates (official site). Take-out by phone at least 2 hours ahead, pick-up 15:00–20:00 (official site). About 5 minutes from Higashiyama station exit 2, on the west side of Higashioji just south of Nio-mon, four doors south of Hinode Tent, a black machiya with a small French flag (Tabelog; official site). Moved here from Teramachi Nijo (Tabelog); Tabelog gives the opening day as 29 May 2016.',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Higashioji Nio-mon',
    cuisine: 'French cooking and French wine, à la carte, no set course (official site; October 2024 review) · take-out menu: pâté de campagne ¥1,000, five homemade charcuteries ¥1,400, chicken liver pâté ¥400, foie gras terrine ¥2,100, Honshu venison Lyon sausage ¥500, Niçoise salad ¥1,100, Lyonnaise salad ¥1,200, homemade smoked salmon ¥1,200, fresh fish baked in pastry ¥2,100, beef cheek in red wine ¥2,300 chilled / ¥2,700 warm, lamb couscous ¥2,000, duck leg confit ¥1,400, Alsatian choucroute ¥2,100, wild boar baked in pastry ¥2,100, wagyu sirloin steak ¥4,500, beef fillet steak 240 g ¥3,400, cheese platter ¥1,300 (official site, undated, tax included) · foie gras pudding, peach with homemade prosciutto, five appetizers, stuffed squid, bœuf bourguignon, blanc-manger (July 2020) · foie gras pudding, fish pie (December 2021) · foie gras in puff pastry (April 2022) · sea bream carpaccio, six escargots, rabbit galantine, cava ¥3,500, ¥12,700 in all (June 2024) · foie gras pudding, prosciutto with country bread, charcuterie, white fish in pastry, duck confit, roast venison (October 2024) · duck loin, shrimp carpaccio, pan-fried grouper, veal blanquette (January 2025) · braised beef cheek, white fish in pastry (April 2025) · mejiro carpaccio, two confit sweetfish, scorpionfish bouillabaisse, beef fillet steak (July 2025) · homemade bread, soup, many desserts; almond croquant and other baked goods to take home (December 2025)',
    website: SITE, gmaps: gm('ビストロ レスト 京都 東大路仁王門'), menu_url: MENU,
    notes: '[French · Higashioji Nio-mon, a two-person bistro] A small French bistro in a black machiya on Higashioji, run by one chef in the kitchen and one madame on the floor: foie gras pudding, homemade charcuterie, fish and game in pastry, confits and stews, à la carte with French wine, from 15:00. Generous portions; leftovers can be taken home. Book by phone after 20:00; cash only; no strong perfume.',
    chef_bio: { chef_name: null, roles: ['Chef and madame (not named)'], origin: null,
      background: 'The official site says the restaurant has one chef cooking and one madame serving, and no other staff. Reviewers describe a couple running the restaurant (October 2024; April 2025), the madame giving helpful advice on what to order (July 2025), and the love of the chef and the madame in every detail (December 2025). A December 2025 diner praised the food as a level above other bistros and found the farewells exceptionally polite, but felt the female staff member’s tone was harsh and cold with customers who had walked into the wrong restaurant. Tabelog says the bistro moved from Teramachi Nijo to Higashioji Nio-mon; a September 2016 reviewer already found it about 10 minutes from Higashiyama station.',
      philosophy: null,
      specialty: 'Foie gras pudding; fish and game baked in pastry; homemade charcuterie.',
      anecdotes: [
        { text: 'A June 2024 diner, back soon after a first visit, could not resist the rabbit galantine, warns that portions are generous, and notes that leftovers can be taken home.', source: R + 'B485684462/' },
        { text: 'An October 2024 diner, wary of game, found the venison tender and wondered whether one person really cooked everything; with only four tables, the reviewer read the size as the couple’s wish to look after each guest.', source: R + 'B494836132/' },
        { text: 'A January 2025 regular chose a day that looked quiet and still found the bistro fully booked.', source: R + 'B485684462/' },
        { text: 'An April 2025 group of three friends in kimono shared à la carte dishes and found them more than enough; another April 2025 diner thought of stopping by again after a concert at the nearby old Kyoto concert hall.', source: R + 'B504989808/' },
      ],
      japanese_sources_summary: '公式サイト: ビストロ　レスト (Bistro L\'est)、フランス料理とフランスワイン、東大路仁王門下がる西側、黒い格子の町家、小さなフランス国旗が目印、15時開店〜21時45分閉店 (21時00分最終入店・注文受付)、2026年より月2回の休業日、2027年元旦から通常通り営業、調理はシェフ1人、サービスはマダム1人だけ、他にスタッフはいない、ご予約は同日の1ヵ月前から、当日以外のご予約は20時以降、4名以上は人数が確定してから、15分前後する際は電話、当日の人数減の連絡がない場合はお一人様2,000円のキャンセル料、AutoReserveからの予約はすべて断る、お支払いは現金のみ、香りの強すぎる柔軟剤や香水は入店を断ることがある、料理の写真は一声かけ、とりわけ後や食べかけは撮らない。お持帰りメニュー (税込、日付なし): パテ・ド・カンパーニュ1,000円、自家製シャルキュトリー5種盛り合わせ1,400円、フォアグラのテリーヌ2,100円、鮮魚のパイ包み焼き2,100円、牛ホホ肉の赤ワイン煮込み2,300円 (冷蔵真空パック)・2,700円 (温製)、仔羊のクスクス2,000円、鴨モモ肉のコンフィ1,400円、猪のパイ包み焼き2,100円、和牛のサーロインステーキ4,500円、チーズの盛り合わせ1,300円など、受取の2時間前までに電話で注文、お渡しは15時から20時。食べログ (英語版): ビストロ、予約可、火〜日15:00〜22:00 (L.O.21:00、コースL.O.20:30)、月曜定休、カード・電子マネー・QR不可、サービス料なし、全席禁煙、駐車場なし (近くにコインパーキング)、寺町二条から東大路仁王門に移転、オープン日2016年5月29日。口コミ (英語): テーブル4卓、夫婦で営む (2024年10月)、満席 (2025年1月)、マダムのアドバイス (2025年7月)、電話予約が難しい、自家製パン、焼き菓子のお土産 (2025年12月)。',
      confidence: 'medium', sources: [SITE, MENU, TB, R + 'B365393224/', R + 'B444533686/', R + 'B448380935/', R + 'B451901717/', R + 'B485684462/', R + 'B494836132/', R + 'B504989808/', R + 'B518367121/', R + 'B520023989/'] },
    cultural_comfort: { level: 'japanese', note: 'Phone booking only (after 20:00 for later days), which a December 2025 diner found hard; no English menu or English-speaking staff mentioned in any source.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市左京区東門前町503-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site posts the November and December 2026 closing days; Tabelog reviews dated through December 2025.' },
    pin_source: `Tabelog ${TB} (35.011398, 135.778167); nearest pin in data about 15 m (The Nook Kyoto, 東門前町503-3); not pin-checked by the worker; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [MENU],
    price_note: 'Official take-out menu prices (tax included, undated); eat-in prices are not published.', last_checked: TODAY, items: [
      it('パテ･ド･カンパーニュ', '', 'Pâté de campagne', '¥1,000', 'Appetizers', 'ask', 'no', 'Official take-out menu.', 'pate_campagne'),
      it('自家製シャルキュトリー５種盛り合わせ', '', 'Five homemade charcuteries', '¥1,400', 'Appetizers', 'ask', 'no', 'Official take-out menu.', 'charcuterie'),
      it('フォアグラのテリーヌ', '', 'Foie gras terrine', '¥2,100', 'Appetizers', 'ask', 'no', 'Official take-out menu.', 'foie_gras_terrine'),
      it('鮮魚のパイ包み焼き', '', 'Fresh fish baked in pastry', '¥2,100', 'Mains', 'no', 'no', 'Official take-out menu; on the eat-in menu too (December 2021, October 2024, April 2025 reviews).', 'fish_pie'),
      it('牛ホホ肉の赤ワイン煮込み', '', 'Beef cheek braised in red wine (chilled pack; ¥2,700 warm)', '¥2,300', 'Mains', 'ask', 'no', 'Official take-out menu.', 'beef_cheek'),
      it('鴨モモ肉のコンフィ', '', 'Duck leg confit (chilled pack; ¥1,900 cooked)', '¥1,400', 'Mains', 'ask', 'no', 'Official take-out menu.', 'duck_confit'),
    ] }, {
    cuisine: 'フランス料理とフランスワイン、コースはなくアラカルト (公式サイト、2024年10月の口コミ)・お持帰りメニュー: パテ・ド・カンパーニュ1,000円、自家製シャルキュトリー5種盛り合わせ1,400円、鶏レバーパテ400円、フォアグラのテリーヌ2,100円、本州鹿のリヨナーソーセージ500円、ニース風サラダ1,100円、リヨン風サラダ1,200円、自家製スモークサーモン1,200円、鮮魚のパイ包み焼き2,100円、牛ホホ肉の赤ワイン煮込み2,300円 (冷蔵)・2,700円 (温製)、仔羊のクスクス2,000円、鴨モモ肉のコンフィ1,400円、アルザス風シュークルート2,100円、猪のパイ包み焼き2,100円、和牛のサーロインステーキ4,500円、牛ヒレステーキ240g 3,400円、チーズの盛り合わせ1,300円 (公式サイト、日付なし、税込)・フォアグラのプリン、桃と自家製生ハム、前菜5種、イカの詰め物、牛肉の赤ワイン煮、ブランマンジェ (2020年7月)・フォアグラのプリン、魚のパイ (2021年12月)・フォアグラのパイ (2022年4月)・鯛のカルパッチョ、エスカルゴ6個、うさぎのガランティーヌ、カヴァ3,500円、合計12,700円 (2024年6月)・フォアグラのプリン、生ハムと田舎パン、シャルキュトリー、白身魚のパイ包み、鴨のコンフィ、鹿のロースト (2024年10月)・鴨ロース、海老のカルパッチョ、grouper のポワレ、仔牛のブランケット (2025年1月)・牛ほほ肉の煮込み、白身魚のパイ包み (2025年4月)・Mejiro のカルパッチョ、鮎のコンフィ2尾、scorpionfish のブイヤベース風、牛ヒレのステーキ (2025年7月)・自家製パン、スープ、多くのデザート、お土産のアーモンドのクロカンなどの焼き菓子 (2025年12月)',
    neighborhood: '東大路仁王門',
    gf_detail: '要確認。パテ、テリーヌ、コンフィ、ステーキ、サラダもあるが、魚や猪のパイ包み焼き、フォアグラのパイ、自家製パンもあり (お持帰りメニュー、口コミ)、グルテンの情報は公開されていない。調理はシェフ1人。',
    vegan_detail: 'ヴィーガン不可。シャルキュトリー、パテ、ジビエ、鴨、仔羊、牛肉、魚、チーズのビストロのメニュー (お持帰りメニュー、口コミ)。野菜惣菜盛合わせもあるが、ヴィーガンの情報は公開されていない。',
    notes: '[フレンチ・東大路仁王門、二人のビストロ] 東大路の黒い町家の小さなビストロ。調理はシェフ1人、サービスはマダム1人。フォアグラのプリン、自家製シャルキュトリー、魚や猪のパイ包み焼き、コンフィや煮込みをアラカルトでフランスワインと、15時から。量が多く、残りは持ち帰りも可。予約は電話で20時以降、現金のみ、香りの強い香水などは不可。',
  });
}

// ================================================================ 寿司割烹 光月
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26002791/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '22:30']);
  put({
    id: 'kyoto_sushi_kappo_matsubara_shinmachi', name: '寿司割烹 光月', category: 'OMNI',
    lat: 34.99879240284153, lng: 135.75662483121243, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Nigiri sets of tuna, sea bream, yellowtail, salmon and eel with rolls and a fish-bone soup (reviews); soy sauce and the eel are usual wheat sources at sushi counters, and no gluten information is published.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi counter whose sets are fish, roe and eel with a fish-bone soup (reviews). Cucumber rolls come in one set, but no vegan information is published.',
    hours_raw: 'Daily 11:30–22:30 (Tabelog). Reservations taken (Tabelog). Several reviewers say the owner now caters mainly to overseas visitors: Japanese customers are turned away at dinner and may only come at lunch (January 2025, June 2025, August 2026 reviews), and some Japanese diners have been turned away at times (August 2026). In April and July 2024 diners were told on arrival that lunch was no longer served and were offered the regular menu or the ¥3,000 set. Cash only: no cards, e-money or QR (Tabelog). About 10 counter seats on the ground floor, the upper floor once used for banquets (November 2023); the banquet plans have ended (January 2025). Smoking allowed per Tabelog (check with the shop). No parking (Tabelog). About 8 minutes from subway Shijo station (November 2023 review), on Matsubara-dori west of Shinmachi.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Matsubara-Shinmachi',
    cuisine: 'Nigiri sushi sets at the counter (reviews) · lunch set A of 10 nigiri, rolls and soup ¥1,100, set B of 8 nigiri ¥900 (June 2023) · set A ¥1,500: chutoro, sea bream, salmon, herring roe, yellowtail, eel, tuna roll, soup (October and November 2023; March 2024) · set A ¥3,000, 16 pieces from fatty tuna to white fish with rolls and soup (April 2024) · the ¥3,000 course of about 15 pieces, menu in English on the wall (July 2024) · Matsu set ¥3,300 of chutoro, salmon, kanpachi, flounder, chutoro roll, ikura, eel and sea bream with clear soup; set A ¥3,000 with one piece of chutoro fewer (January 2025) · sushi for about ¥2,000 (June 2025) · course-only menu (August 2026)',
    website: null, gmaps: gm('寿司割烹 光月 京都 藪下町'), menu_url: null,
    notes: '[Sushi · Matsubara-Shinmachi, a one-man counter for visitors] An old neighbourhood sushi counter on Matsubara-dori where a veteran owner-chef works alone, serving generous nigiri sets of tuna, eel, yellowtail and sea bream with a fish-bone soup. Once a ¥1,100 lunch bargain; since 2024 the sets run about ¥2,000–3,300 and, by several reviewers’ accounts, dinner is for overseas visitors only, with Japanese diners welcome at lunch. English menu on the wall; cash only.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (not named)'], origin: null,
      background: 'Reviewers describe the owner running the counter alone because no part-time help could be found (November 2023), and a 72-year-old chef working alone with one part-timer in the evenings, after years with two people (January 2025). The January 2025 reviewer reports the chef’s own explanation: Japanese and other Asian customers know the traditional ways of ordering sushi, which means detailed orders and a wide range of preparation that has become physically hard at that age, while most overseas visitors are happy with tuna and salmon; so the shop now focuses on overseas customers, raised its lunch prices, turns Japanese customers away at night and has dropped its banquet plans. An April 2024 diner was told that more foreign visitors were coming and they were easier to cater to. Reviewers also call the owner stern-looking but kind (November 2023), lively and welcoming (August 2023), very friendly and kind (August 2026), and fast at serving (March 2024). Criticism: an April 2024 diner found the rice under-seasoned and was bothered by flies; a July 2024 diner found the counter and cloth not clean, no explanation of the toppings, and loud talk with regulars, but the sushi delicious. A July 2024 diner was brought by a friend who had seen the shop on TV for its cheap, good sushi; a January 2025 visitor found it on Instagram.',
      philosophy: null,
      specialty: 'Nigiri sets with eel and chutoro; fish-bone soup.',
      anecdotes: [
        { text: 'A November 2023 diner, the first customer of the day, paid with a ¥5,000 note; the owner for a moment asked whether it had been ¥10,000, and the honest answer reminded the reviewer of the fable of the golden and silver axes.', source: R + 'B474831779/' },
        { text: 'A June 2023 diner counted the nigiri in a ¥1,100 set and got 12 pieces instead of 10, unsure whether it was a mistake or generosity.', source: R + 'B468172420/' },
        { text: 'An April 2024 diner noticed the menu and portions seemed to change with the chef’s mood each day, and was amused to see the laid-back owner cleaning up as new customers came in.', source: R + 'B483915878/' },
        { text: 'A January 2024 diner came for a late lunch around 14:30 and ordered sake, poured to the brim of the glass.', source: R + 'B478093952/' },
      ],
      japanese_sources_summary: '食べログ (英語版): 寿司割烹 光月、寿司、予約可、毎日11:30〜22:30、カード・電子マネー・QR不可、個室あり、喫煙可、駐車場なし、京都府京都市下京区松原通新町西入藪下町34。口コミ (2023〜2026年、英語): Aセットは握り10貫、巻物、吸い物で1,100円 (2023年6月)、1,500円 (2023年10月、11月、2024年3月)、3,000円 (2024年4月、2025年1月)、Matsu のセット3,300円 (2025年1月)、約2,000円 (2025年6月)。1階はカウンター約10席、2階は宴会用、アルバイトが見つからず店主が一人で営む (2023年11月)。72歳の大将が一人、夜はアルバイトが一人、日本人とアジアの客は注文が細かく仕込みが体力的に大変なので外国人客中心に、ランチを値上げ、夜は日本人客を断る、宴会プランは終了 (2025年1月)。壁の英語のメニュー、夜は日本人不可 (2024年7月、2025年6月)。ランチはもうやっていないと言われた (2024年4月、7月)。シャリの味が薄い、ハエ (2024年4月)。カウンターとふきんが不潔、ネタの説明なし (2024年7月)。店主は親切 (2026年8月)。',
      confidence: 'medium', sources: [TB, R + 'B468172420/', R + 'B473540859/', R + 'B474831779/', R + 'B478093952/', R + 'B481386069/', R + 'B483915878/', R + 'B484051622/', R + 'B488496830/', R + 'B490248274/', R + 'B506287692/', R + 'B508810258/', R + 'B534697455/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Menu in English on the wall and an owner who now caters mainly to overseas visitors (July 2024; January and June 2025). By reviewers’ accounts Japanese diners are refused at dinner and welcome only at lunch (January 2025, June 2025, August 2026); the shop has published no policy of its own. English-speaking staff not mentioned.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市下京区松原通新町西入藪下町34',
    existence: { status: 'probable', checked: TODAY, note: 'Tabelog listing (no closure badge) with reviews dated through August 2026; no shop website.' },
    pin_source: `Tabelog ${TB} (34.998792, 135.756625); nearest pin in data about 19 m (ANNEX, 中野之町160); not pin-checked by the worker; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B506287692/', R + 'B488496830/'],
    price_note: 'Prices from reviews, dated by visit; they rose from ¥1,100 (June 2023) to ¥3,000–3,300 (2024–25).', last_checked: TODAY, items: [
      it('', '', 'Set A: about 15 nigiri with a chutoro roll and clear soup', '¥3,000', 'Sushi sets', 'ask', 'no', 'January 2025 review (¥3,000 also in April 2024).', 'set_a'),
      it('', '', 'Matsu set: chutoro, salmon, kanpachi, flounder, ikura, eel, sea bream, chutoro roll, clear soup', '¥3,300', 'Sushi sets', 'ask', 'no', 'January 2025 review.', 'set_matsu'),
    ] }, {
    cuisine: 'カウンターの握り寿司のセット (口コミ)・ランチのAセット、握り10貫、巻物、吸い物1,100円、Bセット握り8貫900円 (2023年6月)・Aセット1,500円: 中トロ、鯛、サーモン、数の子、ハマチ、うなぎ、鉄火巻、吸い物 (2023年10月、11月、2024年3月)・Aセット3,000円、トロから白身まで巻物と吸い物で16貫 (2024年4月)・3,000円のコース、約15貫、壁に英語のメニュー (2024年7月)・Matsu のセット3,300円、中トロ、サーモン、カンパチ、ヒラメ、中トロの巻物、いくら、うなぎ、鯛、吸い物、Aセット3,000円は中トロが1貫少ない (2025年1月)・約2,000円の寿司 (2025年6月)・コースのみ (2026年8月)',
    neighborhood: '藪下町',
    gf_detail: '要確認。マグロ、鯛、ハマチ、サーモン、うなぎの握りと巻物、あら汁のセット (口コミ)。醤油やうなぎのたれは小麦を含むことが多く、グルテンの情報は公開されていない。',
    vegan_detail: 'ヴィーガン不可。魚、魚卵、うなぎの握りに魚のあら汁のセット (口コミ)。かっぱ巻きが入るセットもあるが、ヴィーガンの情報は公開されていない。',
    notes: '[寿司・藪下町、一人で握る訪日客向けのカウンター] 松原通の古くからの町の寿司屋。年配の大将が一人で、マグロ、うなぎ、ハマチ、鯛の大ぶりな握りのセットにあら汁を出す。かつては1,100円のランチが評判だったが、2024年からセットは約2,000〜3,300円。複数の口コミによると、夜は訪日客のみで、日本人はランチなら入れる。壁に英語のメニュー、現金のみ。',
  });
}

// ================================================================ 五木茶屋 清水店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26039523/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://itsukichaya.com/'; const EN = SITE + 'en/';
  const TC = 'https://www.tablecheck.com/shops/itsukichaya-kiyomizu/reserve';
  const H = day(['11:00', '20:30']);
  put({
    id: 'kyoto_itsukichaya_kiyomizu', name: '五穀豊穣のお茶屋ごはん 五木茶屋 清水店 (ITSUKICHAYA Kiyomizu)', category: 'OMNI',
    lat: 34.998083807880604, lng: 135.78078140027785, cuisine_type: 'donburi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Allergy changes can be made if stated when booking, but a whole bowl cannot be swapped (Tabelog, operator’s notes). The bowls use broths, sauces, sukiyaki and ankake (reviews), and duck udon is on the menu; no gluten information is published.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the operator says it cannot accommodate vegetarian requests (Tabelog), and the bowls are built on seafood, wagyu, duck and dashi (reviews).',
    hours_raw: 'Daily 11:00–20:30, holidays included; food last order 19:30 (Tabelog). Reservations online through TableCheck (official site); reviewers call booking a must and the shop was fully booked on a March 2026 visit. Arrive at least 5 minutes early; more than 10 minutes late cancels the booking; a same-day no-show is charged 100% of the meal; the phone may not be answered (Tabelog; official site). Payment taken first on arrival (September 2026); dining time 50 minutes (April 2025). Cards (VISA, Master, JCB, AMEX, Diners), e-money and PayPay (Tabelog). 22 seats: tables for 12 and a counter for 11, on two floors; the stairs are narrow and steep; steps on the ground floor mean wheelchair users should ask; strollers welcome (Tabelog; December 2025 and September 2026 reviews). Allergies: changes possible if stated when booking, but not a whole bowl; mackerel allergies and vegetarian requests cannot be accommodated (Tabelog). Children: a free mini rice bowl for lower-grade primary pupils and younger, a paid bowl for older children, by advance request (Tabelog). Menus in Japanese, English, Chinese and Korean (Tabelog). Non-smoking; no parking or bicycle parking (Tabelog). At the corner of Ninenzaka (September 2026 review), about 5 minutes from Kiyomizu-dera and Yasaka Shrine (Tabelog). Opened 1 August 2023 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ninenzaka',
    cuisine: 'Kyo-don tasting sets in an old house on Ninenzaka: the Kiyomizu-only 京丼五種食べ比べ膳, five small seasonal rice bowls with a hot pot (official site; reviews) · spring five-bowl set ¥4,500: Kyoto kamameshi, sakura steamed rice, a "treasure box" bowl, wagyu fukuchazuke, seasonal ankake bowl, wagyu and mountain-vegetable sukiyaki hot pot (+¥1,000 for black wagyu) (April 2026) · spring five-bowl set with clear soup and shabu-shabu, spring cabbage and sakura shrimp kamadaki rice, simmered wagyu bowl (April 2025) · winter five-bowl set ¥4,500 with yellowtail or wagyu (+¥1,000) shabu-shabu; a limited celebration set of duck and Kujo green onion kamameshi, tuna and yellowtail seafood bowl, wagyu and yuba sukiyaki bowl, Shogoin daikon with crab sauce, steamed sushi, white-miso zoni (December 2025) · duck hot-pot udon with Kyoto garnishes ¥2,500, sea bream chazuke with Kyoto obanzai ¥2,750, wagyu yaki-suki ¥3,300 (January 2026; the first two also September 2026, with a small Asahi bottle ¥700) · sukiyaki and chirashi sushi (March 2026) · fruit shaved ice ¥1,600 in summer at the Fushimi Inari, Pontocho and Kiyomizu shops (August 2025)',
    website: SITE, gmaps: gm('五木茶屋 清水店'), menu_url: null,
    notes: '[Rice bowls · Ninenzaka, five-bowl tasting sets] A two-floor old house at the corner of Ninenzaka serving the Kiyomizu shop’s own five-bowl kyo-don tasting set (about ¥4,500) of seasonal kamameshi, wagyu and seafood bowls with a hot pot, plus sea bream chazuke and duck udon. One of four Itsuki Chaya shops in Kyoto. Book online; pay first; 50 minutes at table; menus in English, Chinese and Korean; no vegetarian requests.',
    chef_bio: { chef_name: null, roles: ['Operator: 五木茶屋 (four Kyoto shops; company not named)'], origin: null,
      background: 'The official site lists four 五木茶屋 shops: 嵐山本店 (Arashiyama main shop), 先斗町店, 伏見稲荷店 and 清水店, the Kiyomizu shop born on Ninenzaka; it names no operating company. The Tabelog introduction calls the Kiyomizu shop the fourth of Itsuki Chaya of Arashiyama, a tea-house dining brand established in 1988 (Tabelog’s English text). Reviewers note that each shop has its own menu (December 2025). A March 2026 diner returning after a Golden Week visit two years earlier found the season’s menu changed and the sukiyaki generous; an April 2025 diner wished for more explanation of how to eat the bowls and found the 50 minutes short; a September 2026 diner found the prices touristy and the sea bream chazuke neither bad nor especially good.',
      philosophy: null,
      specialty: '京丼五種食べ比べ膳 (Kiyomizu-only five-bowl tasting set); wagyu fukuchazuke; sea bream chazuke.',
      anecdotes: [
        { text: 'A December 2025 visitor, taken to lunch by a Kyoto friend, was surprised by the very narrow stairs of the old house and ate by a second-floor window looking out at the last autumn leaves.', source: R + 'B519575184/' },
        { text: 'A weekday solo diner in April 2026 sat by a window on the second floor, surrounded by tourists yet in a quiet room, and was very happy with the sea bream chazuke.', source: R + 'B527274357/' },
        { text: 'A September 2026 diner was asked to pay on entering, warns that the stairs to the second floor are hard on bad knees, and preferred the duck hot-pot udon to the sea bream chazuke.', source: R + 'B536923031/' },
        { text: 'An April 2026 diner, used to tempura, katsu and gyudon bowls, found these small bowls light and refined, like a miniature garden of Kyoto cooking, and rated the wagyu fukuchazuke the best.', source: R + 'B525824294/' },
      ],
      japanese_sources_summary: '公式サイト: 五木茶屋、店舗は嵐山本店 (京都府京都市右京区嵯峨中ノ島町官有地10)、先斗町店 (京都市中京区柏屋町169-3)、伏見稲荷店 (京都市伏見区深草開土口町20)、清水店 (京都府京都市東山区桝屋町349-18)、清水店は二寧坂に誕生、清水店限定の京丼五種食べ比べ膳、予約はTableCheck、営業中でも電話に出られない場合あり。運営会社の名前は書かれていない。食べログ (英語版、公式情報): 五穀豊穣のお茶屋ごはん 五木茶屋 清水店、和食、予約可、到着は5分前、10分以上の遅刻は自動キャンセル、当日の無断キャンセルは100%、毎日11:00〜20:30 (料理L.O.19:30)、カード・電子マネー・PayPay可、22席 (テーブル12席、カウンター11席)、1階と2階、全席禁煙、駐車場・駐輪場なし、アレルギーは予約時に伝えれば変更可だが丼全体の変更は不可、サバのアレルギーとベジタリアンには対応不可、小学校低学年以下はミニ丼無料、メニューは日本語、英語、中国語、韓国語、オープン日2023年8月1日。口コミ (2025〜2026年、英語): 京丼五種の食べ比べ膳4,500円 (2025年12月、2026年4月)、鴨鍋うどん2,500円、鯛茶漬けと京のおばんざい2,750円、京都発祥の和牛 Yaki-Suki 3,300円 (2026年1月)、食事は50分 (2025年4月)、先に会計、二寧坂の角、急な階段 (2026年9月)。',
      confidence: 'medium', sources: [SITE, EN, TC, TB, R + 'B470891001/', R + 'B484509221/', R + 'B504255629/', R + 'B512912582/', R + 'B519575184/', R + 'B525131406/', R + 'B525824294/', R + 'B527274357/', R + 'B529529835/', R + 'B533514382/', R + 'B536923031/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Menus in Japanese, English, Chinese and Korean (Tabelog); online booking through TableCheck; English-speaking staff not mentioned.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区桝屋町349-18',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site lists the Kiyomizu shop with a TableCheck booking page; Tabelog reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (34.998084, 135.780781); nearest pins in data about 8 m (かさぎ屋, 桝屋町349) and 11 m (奥丹 清水); not pin-checked by the worker; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B512912582/', R + 'B519575184/', R + 'B470891001/'],
    price_note: 'Prices from reviews, dated by visit; the tasting set changes with the season.', last_checked: TODAY, items: [
      it('京丼五種食べ比べ膳', '', 'Five-bowl kyo-don tasting set with a seasonal hot pot', '¥4,500', 'Sets', 'ask', 'no', 'December 2025 and April 2026 reviews; name from the official site.', 'five_bowl_set'),
      it('', '', 'Sea bream chazuke with Kyoto obanzai', '¥2,750', 'Sets', 'ask', 'no', 'January and September 2026 reviews.', 'tai_chazuke'),
      it('', '', 'Duck hot-pot udon with Kyoto garnishes', '¥2,500', 'Noodles', 'no', 'no', 'January and September 2026 reviews.', 'duck_udon'),
      it('', '', 'Wagyu yaki-suki', '¥3,300', 'Sets', 'ask', 'no', 'January 2026 review.', 'wagyu_yakisuki'),
    ] }, {
    cuisine: '二寧坂の古い家で京丼の食べ比べ: 清水店限定の京丼五種食べ比べ膳、季節の小さな丼5種と鍋 (公式サイト、口コミ)・春の5種の膳4,500円: 釜飯、桜の蒸しご飯、Treasure Box、和牛の Fukuchazuke、季節のあんかけ丼、和牛と山菜のすき焼き鍋 (黒毛和牛は+1,000円) (2026年4月)・吸い物としゃぶしゃぶ付きの春の5種の膳、春キャベツと桜えびの釜炊きご飯、和牛の煮込みの丼 (2025年4月)・冬の5種の膳4,500円、ぶりか和牛 (+1,000円) のしゃぶしゃぶ、限定の Celebration Gozen は鴨と九条ねぎの釜飯、マグロとぶりの海鮮丼、和牛と湯葉のすき焼き丼、聖護院大根のかにあんかけ、蒸し寿司、白味噌の雑煮 (2025年12月)・京の薬味の鴨鍋うどん2,500円、鯛茶漬けと京のおばんざい2,750円、和牛の Yaki-Suki 3,300円 (2026年1月。前の二つは2026年9月にも、アサヒスーパードライ小瓶700円)・すき焼きとちらし寿司 (2026年3月)・夏のフルーツのかき氷1,600円、伏見稲荷、先斗町、清水の3店 (2025年8月)',
    neighborhood: '二寧坂',
    gf_detail: '要確認。アレルギーは予約時に伝えれば変更できるが、丼全体の変更は不可 (食べログ、店の案内)。丼にはだし、たれ、すき焼き、あんかけを使い (口コミ)、鴨鍋うどんもある。グルテンの情報は公開されていない。',
    vegan_detail: 'ヴィーガン不可。ベジタリアンには対応できないと店が案内 (食べログ)。丼は魚介、和牛、鴨、だしが中心 (口コミ)。',
    notes: '[丼・二寧坂、京丼5種の食べ比べ] 二寧坂の角の2階建ての古い家。清水店限定の京丼五種食べ比べ膳 (約4,500円) は、季節の釜飯、和牛や海鮮の丼と鍋の膳。鯛茶漬けや鴨鍋うどんも。京都に4店ある五木茶屋の一つ。予約はネットで、会計は先、食事は50分。英語、中国語、韓国語のメニューあり、ベジタリアンは不可。',
  });
}

save();
