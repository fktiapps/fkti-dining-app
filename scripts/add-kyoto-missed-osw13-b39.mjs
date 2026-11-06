// Kyoto priority (kyoto-missed), worker osw13, batch 39 — lane: Tabelog id mod 6 = 0.
// Core: 團'sキッチン (Dan's Kitchen), 祇をん ひつじカフェ. Notable: 料理屋 自在, こりょうり たか屋.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-39');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26039226', 'chain: 宮川豚衛門 is "Supervised by NewBabe" (its TableCheck page) — a sister concept of the ニューベイブ tonkatsu chain, which has 6 same-name shops (Kyoto, Toyosaki, Higobashi, Namba, Namba-Dotonbori, Shinsaibashi in the crawl; one already in osaka.json); 5+ same-name = chain, so its sub-brand is skipped');
skip('26038974', 'group size unconfirmed: 京都ラーメン 麺処むらじ 柳馬場六角 is a branch of 麺処むらじ (a Gion shop opened November 2015 per rurubu), with no official shop list to count the group; Greg ruling 2026-11-05 (also a ramen shop)');
skip('26023842', 'relocated: this Tabelog page is the pre-move listing of Licata (closed end of May 2026, reopening at a new address on 24 June 2026 per the listing); the new shop needs its own listing');

// ================================================================ 團'sキッチン (Dan's Kitchen)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26039526/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://danskitchen-kyoto.com';
  const H = day(['11:30', '14:00'], ['17:30', '22:00']);
  put({
    id: 'kyoto_dans_kitchen', name: "團'sキッチン (Dan's Kitchen)", category: 'OMNI',
    lat: 34.998286, lng: 135.767538, cuisine_type: 'yoshoku',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the plates are built round breaded fries — cream croquettes, mille-feuille pork cutlet, chicken cutlet, fried shrimp — with demi-glace hamburg steak and stew (official site).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: hamburg steak, beef-tongue stew, pork, chicken and fish fries, cheese and gratin (official site; 2026 reviews).',
    hours_raw: 'Tabelog: Mon, Tue, Fri, Sat, Sun 11:30–14:00 (food L.O. 13:30) and 17:30–22:00 (food L.O. 21:00); closed Wednesday and Thursday; other irregular closures. Bookings online; same-day cancellation ¥3,000 per person (official site). 15 seats, counter and tables, in a basement off Kawaramachi-dori; non-smoking; children welcome; private hire up to 20 (official site; Tabelog). Cards, IC cards and QR accepted. No service charge listed on Tabelog. Opened 15 May 2023 (official site).',
    hours: { 0: H, 1: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kawaramachi-Matsubara, basement of a building on Kawaramachi-dori — 5 min walk from Kiyomizu-Gojo Stn',
    cuisine: 'Handmade yoshoku with a light, Japanese touch (official site) · lunch plates pairing a main with fries of your choice; beef-tongue stew set with two fries ¥1,800 (March 2026), with fried shrimp, croquette, three desserts and coffee ¥2,500 (September 2026) · booked courses ¥2,500–5,000: hamburg steak course, mixed fry (3 of 7: seasonal cream croquette, chicken cutlet with tomato sauce, pork and cheese mille-feuille, fried shrimp or fish with shibazuke tartar, karaage, fried seasonal vegetables), beef steak or cutlet, sharing course (official site) · soy-milk soup, onion potage with salt kombu, house pickles (2026 reviews) · beer, wine, cocktails (Tabelog)',
    website: SITE, gmaps: gm("團'sキッチン 河原町松原"), menu_url: SITE,
    notes: "[Yoshoku · Kawaramachi-Matsubara, fifteen seats downstairs] Down the stairs from Kawaramachi-dori, a monochrome fifteen-seat room for handmade yoshoku seasoned lightly so it won't sit heavy: fluffy demi-glace hamburg steak, melting beef-tongue stew, and plates where you pick your fries — cream croquette, mille-feuille cutlet, fried shrimp with shibazuke tartar. Lunch sets ¥1,800–2,500 fill up, so book. One diner found the hamburg plate a little small. Closed Wednesday and Thursday.",
    chef_bio: { chef_name: null, roles: ['The master cooks (September 2026 review); not named in a source'], origin: null,
      background: "Per the official site: opened on 15 May 2023 on Kawaramachi-dori south of Matsubara, near the Takase River and Gojo Bridge; a handmade yoshoku shop using seasonal ingredients and Japanese touches so the food is easy to eat and does not sit heavy; 15 seats down a flight of stairs, counter and tables; private hire for under 20.",
      philosophy: 'Official site: a yoshoku shop close to the everyday life of the street, from lunch for people working nearby to dinner after sightseeing.',
      specialty: 'Demi-glace hamburg steak; beef-tongue stew; choose-your-own fries.',
      anecdotes: [
        { text: 'A September 2026 diner was told to stir the cold onion potage, because salt kombu sat at the bottom.', source: R + 'B535070182/' },
        { text: 'A regular who stops by on every Kyoto visit ordered the drinking set, then a side plate to repeat the fries and hamburg steak (June 2026).', source: R + 'B529900352/' },
        { text: '"I could have eaten a bit more—maybe I was only about 70% full." — March 2026, on the hamburg steak lunch.', source: R + 'B525193983/' },
      ],
      japanese_sources_summary: "公式サイト (danskitchen-kyoto.com、多言語): 京都・河原町五条の手作り洋食の店「團's Kitchen」、旬の食材と和の素材で食べやすく胃もたれしない洋食、ハンバーグ、エビフライ、タン元シチュー、ランチはメインと好みのフライを組み合わせるプレート (クリームコロッケ、ミルフィーユカツ、チキンカツ)、デミグラスソース、豆乳スープ、コース2,500〜5,000円 (ハンバーグステーキコース、ミックスフライ、ビーフステーキ、シェアコースなど)、当日キャンセルは1人3,000円、階段を降りた隠れ家のような15席、20名以下の貸切、全席禁煙、2023年5月15日に河原町通松原下ルで開店、カード・電子マネー・QR可。食べログ: 洋食・ハンバーグ、下京区河原町通松原下ル難波町410-2 河原町エイトビル、月火金土日 11:30〜14:00・17:30〜22:00、水木休み、15席、子供可、テイクアウト。口コミ (2026年3月〜9月、英語): タンシチューと2種のフライのランチ1,800円、2,500円のランチ、ふわふわのハンバーグ、貝のだしのクリームコロッケ、塩昆布入りの冷製ポタージュ、お酒とつまみのセット (英語の口コミでは Horo-Yoi Set)、ランチは満席で予約必須、ハンバーグは少し物足りないという声。",
      confidence: 'medium', sources: [TB, SITE, R + 'B524841658/', R + 'B525193983/', R + 'B525753574/', R + 'B526370699/', R + 'B529252020/', R + 'B529900352/', R + 'B532731864/', R + 'B534398182/', R + 'B535070182/', R + 'B536043871/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Official site in English and other languages with online booking; lunch fills up, so book.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区河原町通松原下ル難波町410-2 河原町エイトビル',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (34.998286, 135.767538); cross-checked: GSI 京都府京都市下京区難波町410番地 (lot) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE, R + 'B524841658/', R + 'B536043871/'],
    price_note: 'Course prices from the official booking list; lunch-set prices from 2026 reviews.', last_checked: TODAY, items: [
      it('ハンバーグステーキコース', '', 'Hamburg steak course (three starters, demi-glace hamburg, salad, soup, rice, dessert)', '¥2,500', 'Course', 'no', 'no', 'Beef-tongue stew instead +¥300.', 'hamburg'),
      it('ミックスフライコース', '', 'Mixed fry course (three fries of your choice)', '¥2,500', 'Course', 'no', 'no', '', 'fry'),
      it('《全6品》ミックスフライ&ハンバーグコース', '', 'Mixed fry and hamburg course', '¥2,500', 'Course', 'no', 'no', '', 'fry'),
      it('ビーフステーキコース', '', 'Beef steak or beef cutlet course', '¥3,500', 'Course', 'no', 'no', '', 'steak'),
      it('シェアコース', '', 'Sharing course (fries, gratin, hamburg, beef-tongue stew)', '¥5,000', 'Course', 'no', 'no', '', 'course'),
      it('', '', 'Lunch: beef-tongue stew with two fries', '¥1,800', 'Lunch', 'no', 'no', 'March 2026.', 'stew'),
    ] }, {
    cuisine: '和の素材を取り入れた軽やかな手作り洋食 (公式サイト)・ランチはメインと好みのフライのプレート。タンシチューと2種のフライ1,800円 (2026年3月)、エビフライ、コロッケ、デザート3種とコーヒー付き2,500円 (2026年9月)・予約のコース2,500〜5,000円: ハンバーグステーキ、ミックスフライ (季節のクリームコロッケ、チキンカツトマトソース、豚肉とチーズのミルフィーユ、エビフライや魚のフライのしば漬けタルタル、鶏の唐揚げ、季節の野菜の変わり揚げから3種)、ビーフステーキかビーフカツレツ、シェアコース (公式サイト)・豆乳スープ、塩昆布入りのオニオンポタージュ、自家製ピクルス (2026年の口コミ)・ビール、ワイン、カクテル (食べログ)',
    neighborhood: '河原町松原、河原町通のビルの地下。清水五条駅から徒歩5分',
    gf_detail: 'グルテンフリーではない: クリームコロッケ、ミルフィーユカツ、チキンカツ、エビフライなどの衣のフライに、デミグラスのハンバーグやシチュー (公式サイト)。',
    vegan_detail: 'ヴィーガン不可: ハンバーグ、タンシチュー、豚・鶏・魚のフライ、チーズやグラタン (公式サイト、2026年の口コミ)。',
    notes: "[洋食・河原町松原、地下の15席] 河原町通から階段を降りたモノトーンの15席で、胃もたれしないよう軽めに味付けした手作り洋食。ふわふわのデミグラスハンバーグ、とろけるタンシチュー、クリームコロッケ、ミルフィーユカツ、しば漬けタルタルのエビフライから選ぶフライのプレート。1,800〜2,500円のランチは満席になるので予約を。ハンバーグのランチは少し物足りないという声も。水木休み。",
  });
}

// ================================================================ 祇をん ひつじカフェ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26019132/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.gionhitsujicafe.com/';
  const MENU = 'https://www.gionhitsujicafe.com/category/cafemenu';
  const CO = 'https://www.gionhitsujicafe.com/company';
  const WK = day(['17:00', '24:00']); const FS = day(['14:00', '01:00']);
  put({
    id: 'kyoto_gion_hitsuji_cafe', name: '祇をん ひつじカフェ (Gion Hitsuji Cafe)', category: 'MOM_AND_POP',
    lat: 35.005018, lng: 135.775760, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; the signature is wheat choux pastry, and meals are pasta, gratin, curry or hamburg steak with rice or bread; ice creams are listed separately (official menu).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: custard-filled choux, ice cream, milkshakes, beef-tendon curry and cream pastas; no item is marked vegan (official menu; 2026 reviews).',
    hours_raw: 'Official site and Tabelog: Mon–Thu 17:00–24:00 (L.O. 23:30); Fri–Sat 14:00–01:00 (L.O. 00:30); closed Sundays and holidays, though it opens on some in busy seasons. Bookings taken; take-out and delivery of cream puffs (official site). 18 seats with sofas; non-smoking, with a smoking spot outside; PayPay only, no cards or e-money (Tabelog). No service charge listed on Tabelog. Opened 21 November 2011 (Tabelog). Upstairs, 祇をんひつじ serves obanzai 18:00–23:00 (official site).',
    hours: { 0: WK, 1: WK, 2: WK, 3: WK, 4: FS, 5: FS }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion north of Shijo, in the Gion Raku-en Koji courtyard off Hanamikoji — 10 min walk from Gion-Shijo Stn',
    cuisine: 'Night-time café in a machiya on a hidden courtyard · wasanbon petit choux filled to order, plate of 4 from ¥600, box of 10 from ¥1,300, custard plus a seasonal cream (chestnut, Anno sweet potato in autumn 2026) (official site) · French-press coffee, matcha, parfaits, milkshakes (official site; 2026 reviews) · light meals: beef-tendon curry ¥1,050, stewed hamburg steak ¥1,300, white-miso soy-milk gratin ¥1,200, yuba and namafu ankake bowl ¥1,300, Napolitan ¥1,100 (official menu, February 2024; prices revised since)',
    website: SITE, gmaps: gm('祇をん ひつじカフェ 祇園'), menu_url: MENU,
    notes: '[Café · Gion, petit choux till midnight] Through a narrow alley off Hanamikoji into a courtyard with a fire-watch tower and goldfish pond: a retro machiya café that opens at 5 pm (2 pm on Fridays and Saturdays) and stays open until midnight or 1 am. The draw is the bite-sized wasanbon cream puff, crisp on top and filled only when ordered, with French-press coffee; beef-tendon curry and hamburg steak for supper. Boxes of ten to take away. PayPay only.',
    chef_bio: { chef_name: '曽我 良子 (representative, per the official site; no reading in a source)', roles: ['Representative (代表者), per the official site; an in-house patissier makes the sweets (official site)'], origin: null,
      background: 'Per the official site: a hideaway café with its own courtyard in the middle of Gion-machi, retro inside with jazz, French-press coffee, and petit choux by a dedicated patissier; the wasanbon choux has a cookie crust of wasanbon sugar and is filled with custard only after ordering. The obanzai restaurant 祇をんひつじ is upstairs on the second floor. Opened 21 November 2011 (Tabelog). Reviewers in 2026 describe the courtyard of the 楽宴小路 with a watchtower and a goldfish pond.',
      philosophy: 'Official site: Gion can feel intimidating, so the café aims to be a relaxed place anyone can drop into, and to share the charms of Gion with travellers.',
      specialty: 'Wasanbon petit choux; French-press coffee.',
      anecdotes: [
        { text: 'After a business meeting, an April 2026 diner had cream puffs delivered from here to a nearby bar — half custard, half strawberry.', source: R + 'B525458280/' },
        { text: '"As I twisted and turned into a very narrow alley (Rakuenshoji), a courtyard that looks like it came straight out of a period drama suddenly opened up before me." — April 2026.', source: R + 'B525809016/' },
        { text: 'A reviewer who first came in 2016 returned in May 2026 for the beef-tendon curry and the petit choux.', source: R + 'B270613245/' },
      ],
      japanese_sources_summary: '公式サイト (gionhitsujicafe.com): 1F 祇をん ひつじカフェ、京都祇園町のど真ん中に中庭を持つ隠れ家カフェ、専属のパティシエの名物プチシュー、レトロな店内でジャズ、フレンチプレス式のコーヒー、祇園は敷居が高いと言われるので気軽に立ち寄れる空間を、月〜木 17:00〜24:00 (L.O. 23:30)、金・土 14:00〜25:00 (L.O. 24:30)、日・祝休み (季節により営業)、2F 祇をんひつじ (おばんざいと焼酎・日本酒、18:00〜23:00)、代表者 曽我 良子、祇園町北側347 祇園楽宴小路内、和三盆シュー (注文を受けてからカスタードを詰める) シュー皿4粒600円〜、シュー箱10粒1,300円〜、季節のクリーム (2026年10月マロン、11月安納芋)、すじカレー1,050円、煮込みハンバーグ1,300円、白味噌豆乳グラタン1,200円、湯葉と生麩の京風あんかけ丼1,300円、ナポリタン1,100円 (2024年2月のお品書き、その後価格改定のお知らせあり)、お祝いケーキと配達。食べログ: カフェ、18席、禁煙 (店外に喫煙所)、PayPay のみ、2011年11月21日オープン。口コミ (2026年3月〜10月、英語): 路地の奥の中庭、火の見櫓と金魚の池、和三盆シュー、抹茶、パフェ、牛すじカレー、夜遅くまで開いている、10個入りのお持ち帰り。',
      confidence: 'medium', sources: [TB, SITE, MENU, CO, R + 'B270613245/', R + 'B525458280/', R + 'B525518593/', R + 'B525809016/', R + 'B526012035/', R + 'B528503757/', R + 'B529006891/', R + 'B534164670/', R + 'B538220521/', R + 'B538506198/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the table; the courtyard is easy to miss — enter from Hanamikoji through the narrow alley.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側347 祇園楽園小路 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with news posted in November 2026; Tabelog reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.005018, 135.775700) moved 6 m east to (35.005018, 135.775760): the Tabelog point was 4.1 m from kyoto_gion_endo (347-118, same courtyard); now 9.4 m from it and 7.1 m from kyoto_gion_manma; cross-checked: GSI 京都府京都市東山区祇園町北側347番地 (lot) 26m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [MENU],
    price_note: 'Prices from the official menu page dated February 2024; the shop has since announced a price revision.', last_checked: TODAY, items: [
      it('シュー皿（４粒入り）', '', 'Wasanbon petit choux, plate of 4', 'from ¥600', 'Sweets', 'no', 'no', '', 'cream_puff'),
      it('シュー箱（10粒入り）', '', 'Wasanbon petit choux, box of 10 to take away', 'from ¥1,300', 'Sweets', 'no', 'no', '', 'cream_puff'),
      it('ひつじ特製すじカレー', '', 'Beef-tendon curry', '¥1,050', 'Meals', 'ask', 'no', '', 'curry'),
      it('煮込みハンバーグ', '', 'Stewed hamburg steak, with rice or bread', '¥1,300', 'Meals', 'no', 'no', '', 'hamburg'),
      it('白味噌豆乳グラタン', '', 'White-miso soy-milk gratin', '¥1,200', 'Meals', 'no', 'ask', '', 'gratin'),
      it('湯葉と生麩の京風あんかけ丼', '', 'Yuba and namafu rice bowl with thick sauce', '¥1,300', 'Meals', 'ask', 'ask', '', 'donburi'),
      it('ナポリタン', '', 'Spaghetti Napolitan', '¥1,100', 'Meals', 'no', 'ask', '', 'pasta'),
      it('抹茶アイス', '', 'Matcha ice cream', '¥600', 'Sweets', 'ask', 'no', '', 'ice_cream'),
    ] }, {
    cuisine: '隠れた中庭に面した町家の夜のカフェ・注文を受けてから詰める和三盆のプチシュー、シュー皿4粒600円〜、シュー箱10粒1,300円〜、カスタードと季節のクリーム (2026年秋はマロン、安納芋) (公式サイト)・フレンチプレスのコーヒー、抹茶、パフェ、ミルクセーキ (公式サイト、2026年の口コミ)・軽食: すじカレー1,050円、煮込みハンバーグ1,300円、白味噌豆乳グラタン1,200円、湯葉と生麩のあんかけ丼1,300円、ナポリタン1,100円 (2024年2月の公式お品書き、その後価格改定)',
    neighborhood: '四条通の北の祇園、花見小路から入る楽宴小路の中庭。祇園四条駅から徒歩10分',
    gf_detail: '要確認。グルテンの情報なし。名物は小麦のシュー生地で、食事はパスタ、グラタン、カレー、ハンバーグにご飯かパン。アイスは別にある (公式お品書き)。',
    vegan_detail: 'ヴィーガン不可: カスタードのシュー、アイス、ミルクセーキ、牛すじカレー、クリームのパスタで、ヴィーガン表示の品はない (公式お品書き、2026年の口コミ)。',
    notes: '[カフェ・祇園、深夜までプチシュー] 花見小路から細い路地を抜けると、火の見櫓と金魚の池のある中庭。その町家のレトロなカフェは17時 (金土は14時) に開き、深夜0時か1時まで。目当ては注文を受けてから詰める一口サイズの和三盆シューと、フレンチプレスのコーヒー。夜食に牛すじカレーやハンバーグも。10個入りの持ち帰りあり。支払いは PayPay のみ。',
  });
}

// ================================================================ 料理屋 自在
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26034204/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.kyoto-zizai.com/';
  const COURSE = 'https://www.kyoto-zizai.com/course.html';
  const H = day(['11:30', '15:00'], ['17:30', '23:30']);
  put({
    id: 'kyoto_ryoriya_jizai', name: '料理屋 自在 (Ryoriya Jizai)', category: 'OMNI',
    lat: 35.008905, lng: 135.764564, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. A diner with a wheat allergy who said so when booking was given a wheat-free version of the course, with the Handa somen swapped for a corn and edamame risotto (September 2026). The regular course includes somen and a rice-flour galette (official site; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a set course of fish, duck, wagyu ribeye and hamo consommé, changed monthly (official site; 2026 reviews).',
    hours_raw: 'Official site: 11:30–14:30 and 17:30–22:00, irregular closing days. Tabelog: daily 11:30–15:00 (L.O. 14:00) and 17:30–23:30 (L.O. 23:00). Set courses only at lunch and dinner, booked for two or more by the day before; same-day cancellation may be charged in full (official site). No service charge (Tabelog; Japanese original 「なし」). 24 seats: a teppan counter downstairs (eight seats per a November 2026 review, six per a September 2026 one) and tables upstairs, private hire of the second floor for 10–16; non-smoking; school-age children, no preschoolers; wheelchair accessible; cards (Tabelog; official site).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sanjo-dori, in a narrow machiya alley — 5 min walk from Karasuma Oike Stn',
    cuisine: 'Creative teppan cooking in a monthly set course (official site) · lunch course ¥5,500 (2026 reviews); dinner course ¥10,000 (official site); wine pairing of three glasses ¥3,300 (official site) · autumn 2026 course: pumpkin "declinaison", chestnut flan with porcini, truffle and house bacon, autumn salmon with Anno sweet potato and Shine Muscat, salad of house duck prosciutto and fig, sous-vide mackerel on squid-ink mash, black wagyu ribeye with grilled vegetables, Handa somen in hamo consommé with matsutake, sorbet and desserts (official site; October–November 2026 reviews) · house non-alcoholic cocktails (official site)',
    website: SITE, gmaps: gm('料理屋 自在 三条 中之町'), menu_url: COURSE,
    notes: '[Creative teppan · Sanjo, a monthly course] Down a narrow alley off Sanjo-dori, a machiya with a teppan counter downstairs and tables upstairs. One monthly course: chestnut flan with porcini, sous-vide mackerel on squid-ink mash, black wagyu ribeye off the teppan, and Handa somen in hamo consommé to finish. Lunch ¥5,500, dinner ¥10,000. Diners praise the value and the surprises; one found the squid-ink mash hard going. A wheat-allergic guest got a wheat-free course by asking ahead. One of six shops of the local Ushinohone group.',
    chef_bio: { chef_name: null, roles: ['The owner chooses the month’s ingredients and designs the course (official site); not named. One of six shops of the うしのほねグループ (株式会社セカンダイズ)'], origin: null,
      background: 'Per the official site: 料理屋 自在 (りょうりや じざい), a teppan creative-cuisine restaurant tucked into a lane of old machiya off Sanjo-dori; dishes freely combine ingredients, seasonings and techniques, including the latest cooking methods; courses only, changed every month; message plates for anniversaries; house non-alcoholic cocktails. The site lists ELOVE, DUE and the three 牛の骨 restaurants as sister shops, all run by 株式会社セカンダイズ.',
      philosophy: 'Official site: dishes that combine everything "freely, at will" (自在) for something new each time.',
      specialty: 'Monthly creative course; black wagyu ribeye on the teppan; Handa somen in consommé.',
      anecdotes: [
        { text: 'A September 2026 diner with a wheat allergy flagged it when booking and was served a wheat-free course, with the somen replaced by a corn and edamame risotto.', source: R + 'B535491163/' },
        { text: '"I was initially worried about the low price of the omakase course, but it turned out to be an incredible value." — October 2026.', source: R + 'B538333351/' },
        { text: 'A November 2026 diner at the counter found the squid-ink mashed potatoes "a bit challenging" but the rest a wonderful combination.', source: R + 'B538489081/' },
      ],
      japanese_sources_summary: '公式サイト (kyoto-zizai.com): 料理屋 自在 (りょうりや じざい)、三条通の京町家の路地の鉄板創作料理、最新の調理法も取り入れた柔軟な発想、ランチ・ディナーともにおまかせコースのみ、毎月内容が変わる、店主が旬の食材を選んで考案、ディナーコース10,000円 (税込み)、予約は2名から前日まで、マリアージュセット (シャンパン・赤・白の3杯) 3,300円、記念日のメッセージプレート無料、自家製ノンアルコールカクテル、1階はカウンターで鉄板を見ながら、2階はテーブル (10〜16名で貸切可)、24席、11:30〜14:30・17:30〜22:00、不定休、当日キャンセルは100%の場合あり、系列店は牛の骨、牛の骨あなざ、草風土 牛の骨、DUE、ELOVE (株式会社セカンダイズ)、今月のコース (11月3日まで): 南瓜のデクリネゾン、和栗のフラン、秋鮭と安納芋とシャインマスカット、無花果と自家製鴨の生ハム、ガストロバックした秋鯖とイカスミのマッシュポテト、黒毛和牛リブロースステーキ、半田素麺と鱧のコンソメ、ソルベとデザート。食べログ: 創作料理・鉄板焼き・ステーキ、中京区三条通富小路西入ル中之町12-3、11:30〜15:00・17:30〜23:30、不定休、サービス料なし、24席、禁煙、未就学児不可、車椅子可。口コミ (2025年7月〜2026年11月、英語ほか): ランチコース5,500円、小麦アレルギーに対応 (素麺をコーンと枝豆のリゾットに変更)、誕生日のデザートにメッセージ、カウンターは8席 (2026年11月) とも6席 (2026年9月) とも、イカスミのマッシュポテトは少し苦手という声。',
      confidence: 'medium', sources: [TB, SITE, COURSE, R + 'B501002981/', R + 'B525659941/', R + 'B535443279/', R + 'B535491163/', R + 'B535965578/', R + 'B536391205/', R + 'B537624961/', R + 'B537714113/', R + 'B538333351/', R + 'B538489081/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One set course, booked a day ahead for two or more; staff explain each dish (September 2026); raise allergies when booking.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区三条通富小路西入ル中之町12-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with a course dated to 3 November 2026; Tabelog reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.008905, 135.764564); cross-checked: GSI 京都府京都市中京区中之町12番地 (lot) 23m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [COURSE, R + 'B525659941/'],
    price_note: 'Dinner course and pairing from the official site (tax included); lunch course from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch course', '¥5,500', 'Lunch', 'ask', 'no', '2026 reviews.', 'lunch_course'),
      it('ディナーコース', '', 'Dinner course', '¥10,000', 'Dinner', 'ask', 'no', 'Two or more, booked by the day before.', 'course'),
      it('マリアージュセット', '', 'Wine pairing, three glasses', '¥3,300', 'Drink', 'ask', 'ask', '', 'wine'),
    ] }, {
    cuisine: '毎月替わるコースの鉄板創作料理 (公式サイト)・ランチコース5,500円 (2026年の口コミ)、ディナーコース10,000円 (公式サイト)、ワイン3杯のマリアージュ3,300円 (公式サイト)・2026年秋のコース: 南瓜のデクリネゾン、和栗のフランとポルチーニ・トリュフ・自家製ベーコン、秋鮭と安納芋とシャインマスカット、自家製鴨の生ハムと無花果のサラダ、低温調理の秋鯖とイカスミのマッシュポテト、黒毛和牛リブロースと季節のグリル野菜、鱧のコンソメと松茸の半田素麺、ソルベとデザート (公式サイト、2026年10〜11月の口コミ)・自家製ノンアルコールカクテル (公式サイト)',
    neighborhood: '三条通、富小路の西の細い町家の路地。烏丸御池駅から徒歩5分',
    gf_detail: '予約時に要確認。小麦アレルギーを予約時に伝えた客には、素麺をコーンと枝豆のリゾットに替えた小麦なしのコースが出た (2026年9月)。通常のコースには素麺や米粉のガレットがある (公式サイト、2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 魚、鴨、和牛リブロース、鱧のコンソメの、毎月替わるコース (公式サイト、2026年の口コミ)。',
    notes: '[鉄板創作料理・三条、毎月替わるコース] 三条通から細い路地を入った町家で、1階は鉄板のカウンター、2階はテーブル。毎月一つのコースで、ポルチーニの和栗のフラン、イカスミのマッシュポテトと秋鯖、鉄板の黒毛和牛リブロース、〆は鱧のコンソメの半田素麺。ランチ5,500円、ディナー10,000円。値段以上の驚きと好評で、イカスミのマッシュポテトは少し苦手という声も。小麦アレルギーの客は事前に伝えて小麦なしのコースに。地元のうしのほねグループの6店舗の一つ。',
  });
}

// ================================================================ こりょうり たか屋
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26027640/'; const R = TB + 'dtlrvwlst/';
  const LD = day(['12:00', '14:00'], ['17:00', '22:00']); const D = day(['17:00', '22:00']);
  put({
    id: 'kyoto_koryouri_takaya', name: 'こりょうり たか屋 (Koryouri Takaya)', category: 'OMNI',
    lat: 34.989142, lng: 135.758138, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information; a dashi-based course with soy-seasoned dishes, spring rolls and the occasional tempura (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish course on dashi — herring, hamo, mackerel sushi, tuna, sweetfish, wagyu (2026 reviews).',
    hours_raw: 'Tabelog: Mon–Thu 12:00–14:00 (food L.O. 13:00) and 17:00–22:00 (food L.O. 21:00); Fri–Sat 17:00–22:00; Saturday in two seatings, 17:00–19:30 and 20:00–22:30; closed Sunday. Lunch: small-dish meal ¥2,970; dinner course ¥11,550 (tax included, Tabelog). No service charge (Tabelog; Japanese original 「なし」). 9 counter seats; non-smoking; take-out; cards, no e-money or QR (Tabelog). Opened 18 March 2016 (Tabelog).',
    hours: { 0: LD, 1: LD, 2: LD, 3: LD, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shichijo-dori west of Karasuma — 5 min walk from Kyoto Stn',
    cuisine: 'Small-plate Kyoto cooking at a nine-seat counter · lunch of about ten small dishes with clay-pot rice ¥2,970; dinner course ¥11,550 (Tabelog) · dishes seen: simmered herring and autumn eggplant, chawanmushi with snow crab or hairy crab, straw-grilled toro, hamo with plum, hamo and matsutake spring rolls or hot pot, mackerel sushi wrapped in nori, firefly-squid namerou, braised wagyu with flower pepper, sweetfish rice, sukiyaki, cheesecake (2026 reviews) · sake chosen to match (July 2026)',
    website: null, gmaps: gm('こりょうり たか屋 七条'), menu_url: null,
    notes: '[Kyoto small plates · near Kyoto Station, nine counter seats] A nine-seat U-shaped counter on Shichijo, a few minutes from Kyoto Station, listed in the 2025 Michelin Guide according to 2026 diners. Dinner is one ¥11,550 course — simmered herring and eggplant, hamo with plum, mackerel sushi in nori, clay-pot rice — and lunch is a ¥2,970 spread of ten small dishes. Regulars praise the value and generous portions; one July 2026 diner found the food and sake only average. English-speaking staff member (May 2026). Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Chef at the counter (2026 reviews); not named in a source'], origin: null,
      background: 'Opened 18 March 2016 (Tabelog). Diners in May and June 2026 say it is listed in the 2025 Michelin Guide. A June 2026 lunch guest saw the chef and one other man working the small kitchen; a May 2026 diner found the chef friendly and an English-speaking staff member on hand.',
      philosophy: null,
      specialty: 'Small-plate Kyoto course; clay-pot rice; mackerel sushi wrapped in nori.',
      anecdotes: [
        { text: '"Although the heat made me a bit weak, I always find the portions to be generous. I felt like I had to push myself to finish the dashi chazuke this time." — August 2026, a third visit.', source: R + 'B519516503/' },
        { text: '"Both the food and the sake were just average. Perhaps the flavors of Kyoto cuisine just don\'t suit my palate." — July 2026.', source: R + 'B532194640/' },
        { text: 'A June 2026 lunch guest left nothing of the fish but the pit of the umeboshi.', source: R + 'B530028701/' },
      ],
      japanese_sources_summary: '食べログ: こりょうり たか屋、日本料理、下京区七条通烏丸西入西境町165 GEM7 1F、京都駅から徒歩約5分、月〜木 12:00〜14:00 (L.O. 13:00)・17:00〜22:00 (L.O. 21:00)、金・土 17:00〜22:00、土曜は17:00〜19:30と20:00〜22:30の2部制、日曜休み、昼は小皿の御膳2,970円、夜はコース11,550円 (税込)、サービス料なし、カウンター9席、禁煙、テイクアウト、カード可、電子マネー・QR不可、2016年3月18日オープン。口コミ (2026年4月〜9月、英語ほか): ミシュランガイド2025に掲載、U字のカウンター9席、BGMなし、週末は一斉スタート、秋茄子とニシンの煮浸し、蟹の茶碗蒸し、藁焼きの中トロ、鱧の梅肉、鱧と松茸の春巻きや小鍋、鯖寿司の海苔巻き、ホタルイカのなめろう、黒毛和牛の花山椒煮、鮎ご飯、すき焼き、チーズケーキ、量が多い、英語を話すスタッフ、料理も酒も普通だったという声。',
      confidence: 'medium', sources: [TB, R + 'B501883062/', R + 'B512787823/', R + 'B519516503/', R + 'B527329467/', R + 'B527341883/', R + 'B528740492/', R + 'B530028701/', R + 'B530915287/', R + 'B531753132/', R + 'B532194640/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter course with dishes explained; an English-speaking staff member (May 2026); book ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区七条通烏丸西入西境町165 GEM7 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (34.989142, 135.758138); cross-checked: GSI 京都府京都市下京区西境町165番地 (lot) 34m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Prices from the Tabelog listing, tax included.', last_checked: TODAY, items: [
      it('', '', 'Lunch: small-plate meal set', '¥2,970', 'Lunch', 'ask', 'no', 'Mon–Thu.', 'lunch_set'),
      it('', '', 'Dinner course', '¥11,550', 'Dinner', 'ask', 'no', '', 'course'),
    ] }, {
    cuisine: '9席のカウンターの小皿の京料理・昼は小皿10品ほどと土鍋ご飯2,970円、夜はコース11,550円 (食べログ)・これまでの料理: 秋茄子とニシンの煮浸し、ズワイガニや毛蟹の茶碗蒸し、藁焼きの中トロ、鱧の梅肉、鱧と松茸の春巻きや小鍋、海苔で巻いた鯖寿司、ホタルイカのなめろう、黒毛和牛の花山椒煮、鮎ご飯、すき焼き、チーズケーキ (2026年の口コミ)・料理に合わせた日本酒 (2026年7月)',
    neighborhood: '七条通の烏丸の西。京都駅から徒歩5分',
    gf_detail: '予約時に要確認。グルテンの情報なし。醤油の味付けや春巻き、天ぷらもあるだしのコース (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: ニシン、鱧、鯖寿司、鮪、鮎、和牛のだしのコース (2026年の口コミ)。',
    notes: '[小皿の京料理・京都駅近く、カウンター9席] 京都駅から数分、七条通のU字のカウンター9席。2026年の口コミではミシュランガイド2025に掲載とのこと。夜は11,550円のコース一本で、秋茄子とニシンの煮浸し、鱧の梅肉、海苔巻きの鯖寿司、土鍋ご飯。昼は小皿10品の2,970円。常連は値打ちと量の多さを褒めるが、2026年7月には料理も酒も普通だったという声も。英語を話すスタッフがいる (2026年5月)。日曜休み。',
  });
}

save();
