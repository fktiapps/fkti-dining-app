// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo circles), circle `ueno`, lane osw12, batch 13.
//   + KHANA KHAJA Indian.Nepali Asian Dining & Bar 上野御徒町店 (basement Indian-Nepali curry house by Okachimachi; open 11:00–23:00 daily)
//   + 梯酔好 hasi bero (natural-wine bistro bar in the clock-tower building, Higashi-Ueno; opened September 2024)
//   + 中国意境菜 白燕 Chugoku Ikkyosai Bai En (Tabelog Chinese 100 2024/2026; owner-chef 白岩勝也; opened 2019)
//   + さるやまキッチン Saruyama Kitchen (Ueno Zoo East Garden cafeteria, 180 seats; opened 2020)
// Skipped (see skip()): とんかつ山家 御徒町店 13138428 (chain).
// Chain check (with Greg's 2026-11-02 rulings). KHANA KHAJA: the branch suffix 上野御徒町店, but no other KHANA KHAJA shop
//   found (Tabelog, Gnavi, Uber Eats) — drafted; flag. hasi bero, Bai En, Saruyama Kitchen: one shop each found.
// Dedupe: none is in data/tokyo.json by name, Tabelog id or address. KHANA KHAJA is at 上野6-1-6 グリーンハイツビル B1F; the
//   hidden placeholder tokyo3__232 心洗庵 (soba, "上野6-1-6 上野シックスロードB1") sits on the GSI point, so KHANA KHAJA is
//   offset ~5 m; the hidden tokyo3__219 鳥ぶし (上野6-1-6 1F) is 32 m away.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('tokyo-gaps', TODAY, 'osw12-13');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('13138428', 'chain: とんかつ山家 has same-concept branches in Ueno and Okachimachi; this is the 御徒町店.');

// ================================================================ KHANA KHAJA
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13031734/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '23:00']);
  put({
    id: 'tokyo_khana_khaja_okachimachi', name: 'KHANA KHAJA Indian.Nepali Asian Dining & Bar 上野御徒町店', category: 'OMNI',
    lat: 35.708305, lng: 139.775835, cuisine_type: 'curry',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'GF — ask: no gluten-free statement. Curry with rice avoids the wheat naan, but the curries, the Manchurian dishes and the fried pakora are not described as wheat-free.',
    vegan_status: 'options', vegan_label: 'Some vegan options', vegan_detail: 'Some vegan options: the restaurant\'s own Tabelog text says it caters to vegan diners and lists vegetarian options; the menu has many vegetable and bean curries (mixed vegetable, dal tadka, chana masala, aloo gobi, bhindi masala) and vegetable biryani. Which are vegan is not marked — several use butter, cream or paneer — so ask.',
    hours_raw: 'Daily 11:00–23:00: lunch 11:00–16:00, dinner 16:00–23:00 (last order 22:30); open all year (Tabelog). Reservations taken; Tabelog points can be used (September 2026). 26 seats (one table for four, seven for two); private hire up to 20. Non-smoking. Payment: Tabelog lists cards (VISA, Master, JCB, AMEX, Diners, UnionPay) and e-money, no QR; a February 2026 review said cash only at lunch and dinner. Free Wi-Fi. Take-out and delivery within 1 km. Kids\' menu; strollers can be stored.',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ueno 6-chōme, グリーンハイツビル B1F — 1 min from JR Okachimachi, Ueno-Okachimachi and Naka-Okachimachi Stns; 4 min from JR Ueno',
    cuisine: 'Indian and Nepali curry house with a tandoor; the listing says a Nepali chef has cooked the same recipes since opening, nearly 10 years ago, with halal and vegan options (Tabelog) · lunch to 16:00 with naan or rice, salad and a drink, one free refill (Tabelog menu, January 2025): chicken, vegetable or keema curry ¥900, mutton ¥1,000, butter chicken ¥980, dal ¥750; Ladies\' Set with two curries ¥1,100 (¥1,200 in 2026 reviews); cheese naan set ¥1,350; Khana Khaja set with three curries ¥1,500 · dinner: vegetable curries ¥900–1,150 (palak paneer, dal makhani, chana masala), biryani ¥1,100–1,290, tandoori mixed grill set ¥2,290, naan ¥380–750, pakora, samosa ¥600, Manchurian · five spice levels · Nepali beer, all-you-can-drink from ¥1,500',
    website: null, gmaps: gm('KHANA KHAJA 上野6-1-6'), menu_url: TB + 'dtlmenu/',
    notes: "[Indian-Nepali curry · Okachimachi, a basement curry house open 11 to 11] A basement Indian and Nepali restaurant a minute from Okachimachi Station, open every day from 11:00 to 23:00. Lunch runs until 16:00, which makes it a handy late lunch: curry with freshly baked naan or rice, salad and a drink from ¥900, with one free refill of naan or rice; the cheese-naan set (¥1,350) and the Ladies' Set (¥1,200 in 2026) are the reviewers' favourites. The curries are mild unless you ask — even 'super hot' did not feel very spicy to a June 2026 diner. At night there are tandoori grills, biryani and Nepali beer. The restaurant says it caters to halal and vegan diners; vegetable and bean curries are plentiful, but ask which are made without butter or cream. Staff speak English and the menu is in English.",
    chef_bio: { chef_name: null, roles: [], origin: 'Per the listing, open nearly 10 years with a Nepali chef cooking the same recipes since opening (Tabelog official text)', background: 'Tabelog official listing; per the listing, the butter chicken uses a spice blend made from scratch and naan is baked to order in a tandoor. No source names the chef.', philosophy: null, specialty: 'Butter chicken curry; cheese naan.',
      anecdotes: [
        { text: '"The Butter Chicken was excellent, but the Spinach Curry was among the top two or three I\'ve ever tried" — May 2026, cheese naan set.', source: R + 'B527454404/' },
        { text: '"I chose super hot, but it wasn\'t that spicy." — June 2026, chicken curry lunch ¥950.', source: R + 'B529624817/' },
        { text: '"Due to the recent rise in prices, it has increased by 100 yen to 1200 yen." — February 2026, Ladies\' lunch set.', source: R + 'B503375624/' },
      ],
      japanese_sources_summary: '食べログ (公式情報): KHANA KHAJA Indian.Nepali Asian Dining & Bar 上野御徒町店、上野6-1-6 グリーンハイツビル B1F、JR御徒町駅・上野御徒町駅・仲御徒町駅から徒歩1分、JR上野駅から4分、毎日11:00〜23:00 (ランチ11:00〜16:00、ディナー16:00〜23:00、L.O.22:30)、年中無休、予約可、26席、禁煙、カード・電子マネー可、Wi-Fi、テイクアウト、1km以内のデリバリー、英語のメニューとスタッフ、ハラール対応・ヴィーガン対応、ネパール人シェフが開店以来同じレシピ、自家製スパイスのバターチキン、注文ごとにタンドールで焼くナン。ランチ (2025年1月): カレー900円〜、レディースセット1,100円、チーズナンセット1,350円。口コミ (2026年2〜9月): レディースセットは1,200円に値上げ、ナンかライスのおかわり1回、辛さは控えめ、地下の店、2026年2月には現金のみという声も。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', TB + 'dtlmenu/lunch/', R + 'B503375624/', R + 'B527454404/', R + 'B527819374/', R + 'B529564493/', R + 'B529624817/', R + 'B530962902/', R + 'B532464496/', R + 'B534450118/', R + 'B535698069/', R + 'B536552065/'] },
    cultural_comfort: { level: 'english', note: 'Tabelog lists an English menu and English-speaking staff; spice level chosen when ordering.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区上野6-1-6 グリーンハイツビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing; reviews dated February–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区上野六丁目1番6号 (go) 22m; offset ~5 m from the hidden placeholder tokyo3__232 (心洗庵, 上野6-1-6 上野シックスロードB1) on the GSI point; ${TODAY}`,
  }, { verified: 'partial', confidence: 'low', sources: [TB + 'dtlmenu/', TB + 'dtlmenu/lunch/', R + 'B503375624/'],
    price_note: 'Prices from the Tabelog menu (updated January 2025, tax included); prices rose by about ¥100 by 2026 (Ladies\' Set ¥1,100 → ¥1,200, February 2026).', last_checked: TODAY, items: [
      it('', '', 'Lunch: chicken curry with naan or rice, salad and a drink', '¥900', 'Lunch', 'ask', 'no', 'Tabelog lunch menu, January 2025; ¥950 in June 2026.', 'lunch_chicken'),
      it('', '', 'Lunch: vegetable curry with naan or rice, salad and a drink', '¥900', 'Lunch', 'ask', 'ask', 'Tabelog lunch menu, January 2025.', 'lunch_vegetable'),
      it('', '', 'Lunch: dal (lentil) curry', '¥750', 'Lunch', 'ask', 'ask', 'Tabelog lunch menu, January 2025.', 'lunch_dal'),
      it('', '', 'Ladies\' Set (two curries, naan, rice, salad, chicken tikka, drink, dessert)', '¥1,100', 'Lunch', 'no', 'no', 'Tabelog lunch menu January 2025; ¥1,200 in 2026 reviews.', 'ladies_set'),
      it('', '', 'Cheese naan set', '¥1,350', 'Lunch', 'no', 'no', 'Tabelog lunch menu, January 2025.', 'cheese_naan_set'),
      it('', '', 'Dal tadka (four-bean curry)', '¥900', 'Curry', 'ask', 'ask', 'Tabelog menu, January 2025.', 'dal_tadka'),
      it('', '', 'Palak paneer', '¥1,050', 'Curry', 'ask', 'no', 'Tabelog menu, January 2025.', 'palak_paneer'),
      it('', '', 'Vegetable biryani', '¥1,100', 'Rice', 'ask', 'ask', 'Tabelog menu, January 2025.', 'veg_biryani'),
      it('', '', 'Plain naan', '¥380', 'Naan', 'no', 'ask', 'Tabelog menu, January 2025.', 'naan'),
      it('', '', 'Samosa', '¥600', 'Snacks', 'no', 'ask', 'Tabelog menu, January 2025.', 'samosa'),
    ] }, {
    cuisine: 'タンドールのあるインド・ネパールのカレー店。店の説明では、ネパール人シェフが開店以来10年近く同じレシピで作り、ハラールとヴィーガンにも対応 (食べログ)・ランチは16:00まで、ナンかライス、サラダ、ドリンク付き、おかわり1回無料 (食べログのメニュー、2025年1月): チキン、野菜、キーマのカレー900円、マトン1,000円、バターチキン980円、ダル750円、カレー2種のレディースセット1,100円 (2026年の口コミでは1,200円)、チーズナンセット1,350円、カレー3種の Khana Khaja セット1,500円・夜: 野菜のカレー900〜1,150円 (パラクパニール、ダルマカニ、チャナマサラ)、ビリヤニ1,100〜1,290円、タンドリーミックスグリルセット2,290円、ナン380〜750円、パコラ、サモサ600円、マンチュリアン・辛さは5段階・ネパールビール、飲み放題1,500円から',
    neighborhood: '上野六丁目、グリーンハイツビル B1F。JR御徒町駅・上野御徒町駅・仲御徒町駅から徒歩1分、JR上野駅から4分',
    gf_detail: 'グルテンフリーは要確認。グルテンフリーの説明はありません。カレーをライスにすれば小麦のナンは避けられますが、カレー、マンチュリアン、揚げたパコラが小麦不使用という説明はありません。',
    vegan_detail: 'ヴィーガンの選択肢あり。店自身の食べログの説明でヴィーガン対応、ベジタリアン向けメニューありとしています。野菜や豆のカレー (ミックスベジタブル、ダルタルカ、チャナマサラ、アルゴビ、ビンディマサラ) や野菜のビリヤニが多数。どれがヴィーガンかは書かれておらず、バター、クリーム、パニールを使うものもあるので確認を。',
    notes: '[インド・ネパールカレー・御徒町、朝11時から夜11時までの地下のカレー店] 御徒町駅から1分、地下にあるインド・ネパール料理店で、毎日11:00〜23:00営業。ランチは16:00までなので遅めの昼食にも便利。焼きたてのナンかライス、サラダ、ドリンク付きのカレーが900円から、ナンかライスのおかわり1回無料。口コミで人気はチーズナンセット (1,350円) とレディースセット (2026年は1,200円)。カレーは頼まなければ辛さ控えめで、2026年6月には「激辛」でもあまり辛くなかったという声。夜はタンドリーのグリル、ビリヤニ、ネパールビールも。店はハラールとヴィーガンに対応するとしており、野菜や豆のカレーは豊富ですが、バターやクリームを使わないものか確認を。英語のメニューと英語を話すスタッフあり。',
  });
}

// ================================================================ 梯酔好 hasi bero
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13301376/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:30', '14:00'], ['17:00', '23:30']); const E = day(['15:00', '23:30']);
  put({
    id: 'tokyo_hasi_bero_higashiueno', name: '梯酔好 (hasi bero)', category: 'OMNI',
    lat: 35.708313, lng: 139.77684, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'GF — ask: no gluten-free statement. Lunch and dinner include pasta, baguette, tortilla, couscous and curry; the gumbo comes with barley.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Vegan — ask: mostly meat, fish and cheese plates; baba ganoush and the homemade pickles may suit, but nothing is marked vegan.',
    hours_raw: 'Mon, Tue, Wed, Fri 11:30–14:00 and 17:00–23:30; Sat, Sun and holidays 15:00–23:30; last orders food 23:00, drinks 23:15; closed Thursdays (Tabelog). Reservations taken; a reviewer booked for a later day when it was full (October 2026). 9 counter seats, plus standing tables (up to 15 standing). No drink menu — staff recommend natural wines by the glass (February and October 2026). Non-smoking. Cards, transport IC and QR payments. Children welcome. Opened 13 September 2024.',
    hours: { 0: W, 1: W, 2: W, 4: W, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Ueno 1-chōme, the building with the clock tower — 5 min from Naka-Okachimachi Stn; 9 min from Ueno and Okachimachi Stns',
    cuisine: 'Natural-wine bistro and standing bar: French technique with dishes from many countries, by sommeliers and chefs trained in the Blue Note group (Tabelog) · lunch (Tabelog menu, October 2026): New Orleans jazz gumbo with barley and salad ¥1,500, bacon and eggplant tomato pasta ¥1,450, butter chicken curry ¥1,150, Thai massaman curry ¥1,150 · dinner: saury confit with couscous ¥1,380, lamb chops with mojo sauce ¥1,280, assorted appetizers from ¥1,200, mushroom rillettes ¥680, baba ganoush ¥800, fig butter ¥680, fig and burrata salad ¥1,380, cheese platter from ¥1,200, pasta of the day ¥1,500, steak frites ¥2,100, gumbo ¥1,680, curry rice ¥1,280 · natural wines by the glass (about ¥1,000, October 2026)',
    website: null, gmaps: gm('hasi bero 東上野1-14-9'), menu_url: TB + 'dtlmenu/',
    notes: "[Wine bar · Naka-Okachimachi, natural wine under the clock tower] A small natural-wine bistro bar in a striking building with a clock tower in Higashi-Ueno, opened in September 2024 by sommeliers and chefs from the Blue Note group. Inside is a nine-seat counter, standing tables, a DJ booth and a nostalgic Showa-era feel. There is no drink list: tell the staff what you like and a glass is chosen for you. The food is better than a bar needs — fig butter, mushroom carpaccio, assorted appetizers, pasta of the day, a creamy massaman curry, New Orleans gumbo — and lunch plates run ¥1,150–1,500. Most reviewers in 2026 found the owner friendly and the place relaxing; one in February 2026 found the service lacking and left after one drink. Weekends get busy; weekdays are said to be quieter (October 2026).",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 13 September 2024 (Tabelog)', background: 'Per the Tabelog listing (official information), run by sommeliers and chefs who trained in the Blue Note group. Reviewers in June and August 2026 describe a friendly owner who picks the wines. No source names the owner or chefs.', philosophy: 'Per the listing: dishes that mix French cooking with flavours from many countries, paired with natural wine and music, with DJ events.', specialty: 'Natural wine; gumbo; curry.',
      anecdotes: [
        { text: '"The owner recommended a Tempranillo from Sept Winery in Lebanon, which pairs perfectly with the brown mushroom carpaccio and fig butter!" — June 2026.', source: R + 'B530849679/' },
        { text: '"Inside, there\'s a DJ booth and carefully selected speakers, creating a nostalgic and relaxing space." — June 2026.', source: R + 'B529457256/' },
        { text: '"However, the service was lacking, so I ended up leaving shortly after having just one drink." — February 2026, potatoes, fig butter and Koedo beer ¥2,400.', source: R + 'B522675587/' },
      ],
      japanese_sources_summary: '食べログ (公式情報): 梯酔好 (hasi bero)、東上野1-14-9、仲御徒町駅から徒歩5分、上野駅・御徒町駅から9分、月火水金11:30〜14:00・17:00〜23:30、土日祝15:00〜23:30 (料理L.O.23:00、ドリンクL.O.23:15)、木曜休み、予約可、カウンター9席 (立ち15名まで)、禁煙、カード・交通系IC・QR決済可、2024年9月13日オープン、Blue Note グループで経験を積んだソムリエとシェフによる自然派ワインのビストロ、時計台が目印、昭和レトロな店内、DJイベント。ランチ (2026年10月): ガンボ1,500円、ベーコンとなすのトマトパスタ1,450円、バターチキンカレー1,150円、マッサマンカレー1,150円。口コミ (2026年2〜10月): ドリンクメニューはなく好みを伝えて選んでもらう、盛り合わせ、いちじくバター、日替わりパスタ、気さくな店主、2026年2月にはサービスが物足りなかったという声。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', TB + 'dtlmenu/lunch/', R + 'B522579869/', R + 'B522675587/', R + 'B523508255/', R + 'B528180751/', R + 'B528842658/', R + 'B529457256/', R + 'B529499356/', R + 'B530849679/', R + 'B534752623/', R + 'B536921048/'] },
    cultural_comfort: { level: 'english', note: 'Tabelog lists an English menu; no drink list — say what you like and staff choose the wine.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区東上野1-14-9',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing (menu updated October 2026); reviews dated February–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区東上野一丁目14番9号 (go) 14m; ${TODAY}`,
  }, { verified: 'partial', confidence: 'medium', sources: [TB + 'dtlmenu/', TB + 'dtlmenu/lunch/'],
    price_note: 'Prices from the Tabelog menu (updated October 2026, tax included). Coffee ¥600, or ¥200 with lunch.', last_checked: TODAY, items: [
      it('', '', 'Lunch: New Orleans jazz gumbo with barley and salad', '¥1,500', 'Lunch', 'no', 'no', 'Tabelog lunch menu, October 2026.', 'gumbo_lunch'),
      it('', '', 'Lunch: bacon and eggplant pasta in tomato sauce, with salad and soup', '¥1,450', 'Lunch', 'no', 'no', 'Tabelog lunch menu, October 2026.', 'pasta_lunch'),
      it('', '', 'Lunch: Thai massaman curry with salad and soup', '¥1,150', 'Lunch', 'ask', 'ask', 'Tabelog lunch menu, October 2026.', 'massaman_lunch'),
      it('', '', 'Lunch: butter chicken curry with salad and soup', '¥1,150', 'Lunch', 'ask', 'no', 'Tabelog lunch menu, October 2026.', 'butter_chicken_lunch'),
      it('', '', 'Assorted appetizers', 'from ¥1,200', 'Appetizers', 'ask', 'ask', 'Tabelog menu, October 2026.', 'appetizers'),
      it('', '', 'Baba ganoush with tortilla', '¥800', 'Appetizers', 'no', 'ask', 'Tabelog menu, October 2026.', 'baba_ganoush'),
      it('', '', 'Fig butter', '¥680', 'With wine', 'ask', 'no', 'Tabelog menu, October 2026.', 'fig_butter'),
      it('', '', 'Lamb chops with mojo sauce', '¥1,280', 'Chef\'s recommend', 'ask', 'no', 'Tabelog menu, October 2026.', 'lamb_chops'),
      it('', '', 'Pasta of the day', '¥1,500', 'Main', 'no', 'ask', 'Tabelog menu, October 2026.', 'pasta_of_day'),
      it('', '', 'Steak frites', '¥2,100', 'Main', 'ask', 'no', 'Tabelog menu, October 2026.', 'steak_frites'),
    ] }, {
    cuisine: '自然派ワインのビストロ兼立ち飲み。フレンチの技法にいろいろな国の味を合わせた料理で、Blue Note グループで経験を積んだソムリエとシェフの店 (食べログ)・ランチ (食べログのメニュー、2026年10月): 大麦とサラダ付きのニューオーリンズ風ガンボ1,500円、ベーコンとなすのトマトパスタ1,450円、バターチキンカレー1,150円、タイのマッサマンカレー1,150円・夜: さんまのコンフィとクスクス1,380円、ラムチョップのモホソース1,280円、前菜の盛り合わせ1,200円から、きのこのリエット680円、ババガヌーシュ800円、いちじくバター680円、いちじくとブッラータのサラダ1,380円、チーズの盛り合わせ1,200円から、日替わりパスタ1,500円、ステーキフリット2,100円、ガンボ1,680円、カレーライス1,280円・グラスの自然派ワイン (約1,000円、2026年10月)',
    neighborhood: '東上野一丁目、時計台のある建物。仲御徒町駅から徒歩5分、上野駅・御徒町駅から9分',
    gf_detail: 'グルテンフリーは要確認。グルテンフリーの説明はありません。ランチも夜もパスタ、バゲット、トルティーヤ、クスクス、カレーがあり、ガンボには大麦が付きます。',
    vegan_detail: 'ヴィーガンは要確認。ほとんどが肉、魚、チーズの皿。ババガヌーシュや自家製ピクルスは合うかもしれませんが、ヴィーガンの表示はありません。',
    notes: '[ワインバー・仲御徒町、時計台の下の自然派ワイン] 東上野の時計台のある印象的な建物に入る、小さな自然派ワインのビストロバー。2024年9月、Blue Note グループ出身のソムリエとシェフが開店。店内は9席のカウンターと立ち飲みのテーブル、DJブース、昭和レトロな雰囲気。ドリンクメニューはなく、好みを伝えるとグラスワインを選んでくれます。料理はバー以上の出来で、いちじくバター、ブラウンマッシュルームのカルパッチョ、前菜の盛り合わせ、日替わりパスタ、クリーミーなマッサマンカレー、ニューオーリンズのガンボなど。ランチは1,150〜1,500円。2026年の口コミの多くは気さくな店主と落ち着ける雰囲気をほめていますが、2026年2月にはサービスが物足りず1杯で出たという声も。週末は混み、平日は比較的静かとのこと (2026年10月)。',
  });
}

// ================================================================ 中国意境菜 白燕
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13238666/'; const R = TB + 'dtlrvwlst/';
  const ST = 'https://san-tatsu.jp/articles/241577/'; const SJ = 'https://savorjapan.com/0004043873';
  const D = day(['11:30', '15:00'], ['18:00', '20:00']);
  put({
    id: 'tokyo_bai_en_inaricho', name: '中国意境菜 白燕 (Chugoku Ikkyosai Bai En)', category: 'MOM_AND_POP',
    lat: 35.710724, lng: 139.783051, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'GF — ask: no gluten-free statement. The signature yodare-dori sauce uses soy sauce (owner-chef, 2023), and lunches include wonton noodles and dumplings; dinner is a set course, so ask when booking.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the medicinal soups are built on chicken and pork stock (2023) or dried scallop (October 2026), and the courses centre on chicken, foie gras, seafood, shark fin and beef.',
    hours_raw: 'Lunch 11:30–15:00 (last order 14:00) and dinner 18:00–20:00 (last order 19:00), Tue–Sun and holidays; closed Mondays (Savor Japan / Hitosara listing — undated, carries an old shortened-hours notice). Tabelog lists no hours and says closing days are not fixed — confirm when booking. 2026 reviews found lunch open at 11:30 on a weekday, a Sunday and holidays. Dinner is a set course only and needs a booking (owner-chef, 2023); the dinner course can also be booked for lunch. Lunch can queue (about 10 people in the rain, September 2026); bookings get in first. Service charge 10%. 23 seats (12 sofa, 6 in private rooms, 4 at the counter). Non-smoking. Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR. BYO allowed (Tabelog). Opened 8 September 2019.',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Moto-Asakusa 2-chōme, オルタンシアIV 2F (stairs from the street; small sign) — 1 min from Inaricho Stn (Ginza Line); 5 min from Shin-Okachimachi; 8 min from JR Ueno',
    cuisine: 'Chinese "ikkyosai" (cuisine of imagery) by an owner-chef trained in Beijing, Hong Kong and Taiwan; food-as-medicine cooking with no chemical seasonings (san-tatsu, 2023); Tabelog Chinese TOKYO 100 in 2024 and 2026 · lunch (2026 reviews): yodare-dori (steamed chicken in two house chilli oils) lunch ¥1,400 on weekdays; yodare-dori and medicinal soup set ¥2,500; wonton noodle set ¥2,500; sets come with sour-plum drink (suanmeitang), rice and small dishes · dinner courses only, about ¥10,000–15,000 (Tabelog): the "candy apple" of tea-smoked foie gras in hibiscus jelly, appetizer platter, seasonal medicinal soup, shark fin, mapo tofu, seafood wonton soup; Shanghai crab courses in winter; osechi to order · about 13 Shaoxing wines (glass from ¥600 in 2023) and Japanese wines',
    website: null, gmaps: gm('中国意境菜 白燕 元浅草2-7-10'), menu_url: null,
    notes: "[Chinese · Inaricho, medicinal soups and a foie-gras 'candy apple'] A small second-floor Chinese restaurant a minute from Inaricho Station, easy to miss behind a small sign on an outside staircase. Owner-chef 白岩勝也 trained in Beijing, Hong Kong and Taiwan and cooks 'ikkyosai' — dishes meant to evoke a scene — with no chemical seasonings and a medicinal soup that changes with the 24 seasonal terms, never repeated since opening in 2019 (san-tatsu, 2023). Dinner is a booked set course (about ¥10,000–15,000) that opens with a cherry-sized 'candy apple' of tea-smoked foie gras in hibiscus jelly. Lunch is the way in: tender yodare-dori in two house chilli oils for ¥1,400 on weekdays, or a ¥2,500 set with the medicinal soup, with a bottomless sour-plum drink. It made Tabelog's Chinese TOKYO 100 in 2024 and 2026, and cooked lunch on the TRAIN SUITE Shikishima (September 2026 review). Lunch can queue, especially on holidays.",
    chef_bio: { chef_name: '白岩勝也', roles: ['owner-chef'], origin: 'Opened 8 September 2019 (Tabelog)', background: 'Owner-chef; trained in Beijing, Hong Kong, Taiwan and elsewhere in China (san-tatsu, June 2023). Chose a small space "where I can see the guests\' faces"; the hideaway feel was not planned (san-tatsu, 2023).', philosophy: 'Food-as-medicine (医食同源) Chinese cooking from natural ingredients with no chemical seasonings; medicinal soups changed to match the 24 seasonal terms (san-tatsu, 2023).', specialty: 'Yodare-dori; medicinal soup; foie-gras "candy apple".',
      anecdotes: [
        { text: '"Since opening in 2019, we have never served a medicinal soup with the same combination." — owner-chef, san-tatsu, June 2023 (translated).', source: ST },
        { text: '"The glossy red sphere resembles a candied apple from a festival, but inside lies foie gras." — September 2026, dinner course.', source: R + 'B536420610/' },
        { text: '"The all-you-can-drink Suanmeitang was exceptionally good." — October 2026, weekday yodare-dori lunch ¥1,400.', source: R + 'B536994375/' },
        { text: '"Despite the rain, there was a line of about 10 people outside." — September 2026, Silver Week revival lunch.', source: R + 'B432423582/' },
      ],
      japanese_sources_summary: '食べログ (公式情報): 中国意境菜 白燕、元浅草2-7-10 オルタンシアIV 2F、稲荷町駅から徒歩1分、JR上野駅から8分、新御徒町駅から5分、定休日不定、予約可、サービス料10%、23席 (ソファ12、個室6、カウンター4)、禁煙、カード可 (電子マネー・QR不可)、持ち込み可、2019年9月8日オープン、食べログ 中国料理 TOKYO 百名店 2024・2026。さんたつ (2023年6月11日、速志淳): オーナーシェフ白岩勝也さん、北京・香港・台湾など本場で研鑽、医食同源、ディナーはコースのみ (要予約、昼も予約で可)、平日Aランチ1,300円、よだれ鶏は香りと辛みの2種の自家製ラー油に黒酢・白酢・醤油、薬膳スープは24節気に合わせて変え2019年の開店以来同じ組み合わせは出していない、茶葉で燻製したフォアグラをハイビスカスのゼリーで包んだリンゴ飴、紹興酒約13種 (グラス600円から)、化学調味料不使用。Savor Japan: 火〜日・祝 11:30〜15:00、18:00〜20:00、月曜休み。口コミ (2025年12月〜2026年10月): よだれ鶏ランチ1,400円 (平日)、よだれ鶏と薬膳スープのセット2,500円、ワンタン麺セット2,500円、酸梅湯飲み放題、雨でも約10人の行列、上海蟹のコース、おせち、TRAIN SUITE 四季島のランチ。',
      confidence: 'high', sources: [TB, ST, SJ, R + 'B432423582/', R + 'B536098734/', R + 'B536420610/', R + 'B536489963/', R + 'B536994375/', R + 'B537172121/', R + 'B537231768/', R + 'B537259816/', R + 'B537428784/', R + 'B537606681/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Dinner by booking only; lunch can queue; no English menu is listed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区元浅草2-7-10 オルタンシアIV 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing (Chinese TOKYO 100, 2026); reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区元浅草二丁目7番10号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536994375/', R + 'B537231768/', R + 'B537428784/'],
    price_note: 'Lunch prices from October 2026 reviews; dinner is a set course (Tabelog budget ¥10,000–14,999) plus 10% service.', last_checked: TODAY, items: [
      it('', '', 'Yodare-dori lunch (weekdays) with rice, soup and small dishes', '¥1,400', 'Lunch', 'no', 'no', 'October 2026.', 'yodaredori_lunch'),
      it('', '', 'Yodare-dori and medicinal soup set', '¥2,500', 'Lunch', 'no', 'no', 'October 2026 (Sundays from ¥2,500).', 'yodaredori_yakuzen'),
      it('', '', 'Wonton noodle set', '¥2,500', 'Lunch', 'no', 'no', 'October 2026.', 'wonton_set'),
    ] }, {
    cuisine: '北京・香港・台湾で修業したオーナーシェフの中国「意境菜」。化学調味料を使わない医食同源の料理 (さんたつ、2023年)。食べログ 中国料理 TOKYO 百名店 2024・2026・ランチ (2026年の口コミ): 2種の自家製ラー油のよだれ鶏ランチ1,400円 (平日)、よだれ鶏と薬膳スープのセット2,500円、ワンタン麺セット2,500円。セットには酸梅湯、ご飯、小皿付き・夜はコースのみ、約10,000〜15,000円 (食べログ): 茶葉で燻製したフォアグラをハイビスカスのゼリーで包んだ「リンゴ飴」、前菜の盛り合わせ、季節の薬膳スープ、フカヒレ、麻婆豆腐、海鮮スープのワンタン。冬は上海蟹のコース、おせちの予約も・紹興酒約13種 (2023年はグラス600円から) と国産ワイン',
    neighborhood: '元浅草二丁目、オルタンシアIV 2F (外階段、小さな看板)。稲荷町駅 (銀座線) から徒歩1分、新御徒町駅から5分、JR上野駅から8分',
    gf_detail: 'グルテンフリーは要確認。グルテンフリーの説明はありません。名物のよだれ鶏のタレには醤油 (オーナーシェフ、2023年)、ランチにはワンタン麺や餃子も。夜はおまかせのコースなので予約時に相談を。',
    vegan_detail: 'ヴィーガンではありません。薬膳スープは鶏と豚のだし (2023年) や干し貝柱 (2026年10月) がベースで、コースは鶏、フォアグラ、魚介、フカヒレ、牛が中心。',
    notes: '[中国料理・稲荷町、薬膳スープとフォアグラの「リンゴ飴」] 稲荷町駅から1分、ビルの2階にある小さな中国料理店で、外階段の小さな看板を見落としやすい。オーナーシェフの白岩勝也さんは北京、香港、台湾で修業し、情景を思い浮かべる「意境菜」を化学調味料なしで作ります。薬膳スープは24節気に合わせて変え、2019年の開店以来同じ組み合わせは出していないそう (さんたつ、2023年)。夜は予約制のコース (約10,000〜15,000円) で、最初はサクランボほどの大きさの、茶葉で燻製したフォアグラをハイビスカスのゼリーで包んだ「リンゴ飴」。入りやすいのはランチで、2種の自家製ラー油のしっとりしたよだれ鶏が平日1,400円、薬膳スープ付きのセットは2,500円、酸梅湯は飲み放題。食べログ 中国料理 TOKYO 百名店に2024年と2026年に選出、TRAIN SUITE 四季島のランチも担当 (2026年9月の口コミ)。ランチは特に休日に行列も。',
  });
}

// ================================================================ さるやまキッチン
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13248278/'; const R = TB + 'dtlrvwlst/';
  const D = day(['10:00', '16:30']);
  put({
    id: 'tokyo_saruyama_kitchen_ueno_zoo', name: 'さるやまキッチン (Saruyama Kitchen)', category: 'OMNI',
    lat: 35.716160, lng: 139.770356, cuisine_type: 'shokudo',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'GF — ask: udon, meat buns and tantanmen are wheat; the rice bowls come with sweet soy-style sauces or katsu; nothing is described as gluten-free.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Vegan — ask: Tabelog lists vegetarian options, but no dish is named as vegetarian or vegan; most mains are pork, chicken or meat udon.',
    hours_raw: 'Daily 10:00–16:30; closed on days Ueno Zoo is closed (Tabelog: "follows Ueno Zoo\'s schedule"). Inside Ueno Zoo\'s East Garden. No reservations. Busy from about 11:00–12:30; easier after 12:30 or mid-afternoon (2026 reviews). 180 seats (60 on 1F, 120 on 2F); terrace. Non-smoking. Cards (VISA, JCB), transport IC, QUICPay and QR payments. No service charge. Wheelchair accessible; baby-changing, nursing room; strollers welcome (some seats lack stroller space, August 2026); kids\' menu. Take-out. Opened 26 February 2020.',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ueno Park, inside Ueno Zoo (East Garden), by the monkey mountain — 448 m from Nezu Stn as the crow flies',
    cuisine: 'Two-floor food court in Ueno Zoo (Tabelog; reviews) · rice bowls: grilled pork belly with sweet-savoury sauce, thick-cut pork tenderloin katsu, soboro, large +¥100 (October 2026) · udon with meat; kenchin udon; kids\' udon lunch with panda kamaboko and apple juice · chilled tomato tantanmen ¥1,000, melon soda ¥270 (July 2026) · chicken nuggets, fries, thick-cut "fluffy potatoes" · animal-shaped snacks: otter-shaped meat bun, monkey-shaped monaka on summer matcha kakigori (August 2026), August-only elephant soda for the zoo\'s elephant Arun · custard pudding, soft-serve, café latte',
    website: null, gmaps: gm('さるやまキッチン 上野動物園'), menu_url: null,
    notes: "[Cafeteria · Ueno Zoo, the zoo food court by the monkey mountain] A food court in Ueno Zoo's East Garden: a clean, two-floor cafeteria with 180 seats, panda illustrations and a terrace, open 10:00–16:30 on zoo days. Order rice bowls such as glossy grilled pork belly or thick pork-tenderloin katsu (large +¥100), meat udon, a summer chilled tomato tantanmen (¥1,000), and fries; children get an udon set topped with panda-shaped fish cake. Seasonal novelties are the fun part — a matcha shaved ice with a monkey-shaped wafer, otter-shaped meat buns, and an elephant soda each August for Arun, the zoo's Asian elephant. Reviewers in 2026 found it fairly priced and tasty, though some said the portions, even large, are small. Lines peak 11:00–12:30; go earlier or after.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 26 February 2020 (Tabelog)', background: 'Cafeteria inside Ueno Zoo (East Garden); Tabelog lists the zoo\'s restaurant page as its website. No source names the operator.', philosophy: null, specialty: 'Rice bowls; animal-themed snacks.',
      anecdotes: [
        { text: '"The monkey-shaped monaka (wafer) is adorable, and it comes with warabi mochi (bracken starch dumplings)… and even coffee jelly underneath the kakigori." — August 2026, matcha kakigori.', source: R + 'B533106528/' },
        { text: '"I ordered the chilled tomato tantanmen for JPY 1000, and a melon soda for JPY 270. Overall, the prices are quite reasonable." — July 2026.', source: R + 'B532383071/' },
        { text: '"The large portion wasn\'t really that large." — July 2026.', source: R + 'B532173168/' },
      ],
      japanese_sources_summary: '食べログ: さるやまキッチン、上野公園9-83 上野動物園 東園、根津駅から448m、毎日10:00〜16:30、上野動物園の休園日に準ずる、予約不可、180席 (1F 60、2F 120)、テラス、禁煙、カード (VISA、JCB)・交通系IC・QUICPay・QR可、サービス料・お通し代なし、車椅子可、授乳室、おむつ替え、キッズメニュー、テイクアウト、2020年2月26日オープン。口コミ (2026年4〜10月): 豚バラ焼き丼、厚切りヒレカツ丼、そぼろ丼、大盛り+100円、肉うどん、けんちんうどん、パンダのかまぼこのお子様うどん、冷やしトマト担々麺1,000円、メロンソーダ270円、抹茶かき氷、カワウソの肉まん、8月限定の象の Arun のソーダ、11時〜12時半は混雑、量が少なめという声も。',
      confidence: 'medium', sources: [TB, R + 'B525583312/', R + 'B532173168/', R + 'B532383071/', R + 'B533106528/', R + 'B533667716/', R + 'B533985043/', R + 'B537252048/', R + 'B537518582/', R + 'B537637321/', R + 'B538270206/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cafeteria: order at the counter, then find a seat; busy at midday.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, address_ja: '東京都台東区上野公園9-83 上野動物園 東園',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated April–October 2026.' },
    pin_source: `Tabelog ${TB}; GSI 東京都台東区上野公園九番83号 (go) is 232 m off — the park lot covers the whole zoo — so the Tabelog point is used, not precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532383071/', R + 'B537637321/'],
    price_note: 'Prices from 2026 reviews; few prices are given.', last_checked: TODAY, items: [
      it('', '', 'Chilled tomato tantanmen (summer)', '¥1,000', 'Noodles', 'no', 'no', 'July 2026.', 'tomato_tantanmen'),
      it('', '', 'Grilled pork belly rice bowl', '', 'Rice bowls', 'ask', 'no', 'September–October 2026; large +¥100.', 'butabara_don'),
      it('', '', 'Thick-cut pork tenderloin katsu rice bowl', '', 'Rice bowls', 'no', 'no', 'October 2026; large +¥100.', 'hirekatsu_don'),
      it('', '', 'Udon with meat', '', 'Noodles', 'no', 'no', 'April and August 2026.', 'niku_udon'),
      it('', '', 'Melon soda', '¥270', 'Drinks', 'ask', 'ask', 'July 2026.', 'melon_soda'),
    ] }, {
    cuisine: '上野動物園の2フロアのフードコート (食べログ、口コミ)・丼: 甘辛だれの豚バラ焼き丼、厚切りヒレカツ丼、そぼろ丼、大盛り+100円 (2026年10月)・肉うどん、けんちんうどん、パンダのかまぼことりんごジュースのお子様うどんランチ・冷やしトマト担々麺1,000円、メロンソーダ270円 (2026年7月)・チキンナゲット、ポテト、厚切りの「ふわふわポテト」・動物の形のおやつ: カワウソの形の肉まん、夏の抹茶かき氷にサルの形の最中 (2026年8月)、8月限定の象の Arun のソーダ・カスタードプリン、ソフトクリーム、カフェラテ',
    neighborhood: '上野公園、上野動物園の東園、サル山のそば。根津駅から直線で448m',
    gf_detail: 'グルテンフリーは要確認。うどん、肉まん、担々麺は小麦。丼は甘辛のたれやカツ。グルテンフリーの説明はありません。',
    vegan_detail: 'ヴィーガンは要確認。食べログではベジタリアン向けメニューありとありますが、具体的な料理名はなく、メインはほとんどが豚、鶏、肉うどん。',
    notes: '[食堂・上野動物園、サル山のそばの大きなフードコート] 上野動物園の東園のフードコートで、清潔な2フロア180席、パンダのイラストとテラス、開園日の10:00〜16:30営業。つややかな豚バラ焼き丼や厚切りヒレカツ丼 (大盛り+100円)、肉うどん、夏の冷やしトマト担々麺 (1,000円)、ポテトなど。子どもにはパンダのかまぼこのうどんセット。季節の限定が楽しく、サルの形の最中をのせた抹茶かき氷、カワウソの形の肉まん、毎年8月には動物園のアジアゾウ Arun のソーダも。2026年の口コミでは値段は手ごろでおいしいという声の一方、大盛りでも量が少ないという声も。混むのは11:00〜12:30なので、その前後に。',
  });
}

save();
