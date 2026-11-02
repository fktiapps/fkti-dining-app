// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo clusters), circle `ningyocho` — lane osw11, batch 9.
//   + ひるがお 人形町店 Hirugao (shio ramen of the Setagaya group; a back-fat niboshi limited bowl) — no ramen block
//   + ヒマラヤンビレッジ Himalayan Village (Nepalese curry and dal bhat in a basement; since 2008)
//   + よし梅 芳町亭 Yoshi Ume Yoshimachi-tei (negima-nabe and kaiseki in a registered tangible cultural property)
//   + 人形町 田酔 Ningyocho Densui (sake-led kaiseki izakaya upstairs, one cook in the kitchen; clay-pot rice)
//   Picked from `node scripts/sweep/queue.mjs tokyo-gaps next core 10 ningyocho` (main repo, 2026-11-02): the first four,
//   100, 131, 132 and 132 m from the centre (Hirugao ramen; the others 16–28 seats with 59–391 reviews).
//   Dedupe. None is in data/tokyo.json by name or address. Shared buildings: Hirugao is 1F of the building at 3-6-7 that holds
//   tokyo_kudan_ningyocho (address_ja "東京都中央区日本橋人形町3-6-7 人形町共同ビル 1F"; pins 8 m apart). Himalayan Village
//   (B1F) and Densui (2F) are both in HSビル, 1-7-6, with Tabelog points 1.1 m apart: Himalayan Village keeps its point;
//   Densui is block-level and moved 6 m north. Yoshi Ume Yoshimachi-tei (1-5-2) is 27 m from tokyo_washoku_bar_kamesuke_ningyocho.
//   Chain check. Hirugao belongs to the Setagaya group (Tabelog links setaga-ya.com/store/hirugao; an October 2026 reviewer calls
//   it a "well-known and popular ramen chain"); no Setagaya or Hirugao shop is in data and no source shows rapid expansion.
//   Densui: run by a company with branches in Otemachi and Jimbocho (July 2026 review; Tabelog names the Jimbocho shop) —
//   none in data. Yoshi Ume: a 2025 reviewer mentions a main branch; neither is in data. Himalayan Village: single shop.
//   Ramen block for Hirugao left off: reviews describe the shio broth's clarity, body and saltiness but not oiliness, noodle
//   firmness or aroma (brief LESSONS).
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, save } = openCitySweep('tokyo-gaps', TODAY, 'osw11-9');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ ひるがお 人形町店
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13220477/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.setaga-ya.com/store/hirugao/';
  const H = day(['11:00', '21:30']); const SUN = day(['11:00', '17:00']);
  put({
    id: 'tokyo_hirugao_ningyocho', name: 'ひるがお 人形町店 (Hirugao Ningyocho)', category: 'OMNI',
    lat: 35.686979, lng: 139.781487, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles and wonton wrappers.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the shio broth is chicken-based with dried scallop, niboshi and bonito (in-store explanation, October 2026); back fat on the niboshi bowl.',
    hours_raw: 'Mon–Sat 11:00–21:30; Sun 11:00–17:00; hours may change (Tabelog). Ticket machine; cash only — no cards, e-money or QR (Tabelog). 17 seats: 13 at the counter, 2 tables for two (Tabelog). Non-smoking. Paper aprons on request (October 2026). A free topping for app registration or YouTube subscription (October 2026). Opened 23 April 2018 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: SUN }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Nihonbashi-Ningyocho 3-6-7, 共同ビル 1F, on the main road — 2 min from Ningyocho Stn, 6 min from Suitengumae Stn; KUDAN is in the same building',
    cuisine: 'Shio ramen in a clear golden broth of chicken layered with kombu, dried scallop, niboshi and bonito (in-store explanation, October 2026) · shio ramen with shrimp wontons; shio ramen "assortment" with everything ¥1,430 (October 2026); paitan ramen; tsukemen with shrimp wontons (2026 reviews) · Ningyocho-only limited back-fat niboshi ramen ¥1,050, thick curly noodles, garlic on request (September–October 2026) · Hirugao-style oyakodon ¥430 (October 2026)',
    website: SITE, gmaps: gm('ひるがお 人形町'), menu_url: null,
    notes: "[Ramen · Ningyocho, Setagaya-group shio ramen on the main road] The Ningyocho branch of Hirugao, the shio-ramen shop of the Setagaya group, two minutes from the station. Its signature is a clear, golden salt broth of chicken layered with kombu, dried scallop, niboshi and bonito, with thin noodles, thick tender chashu and plump shrimp wontons. Diners in October 2026 found it light yet full of umami. In autumn 2026 the branch also served its own limited back-fat niboshi ramen (¥1,050), with thick curly noodles and a Jiro-style question about garlic. Add the ¥430 oyakodon if hungry. One October 2026 diner thought the special tsukemen skimpy. Cash only; open daily, closing at 17:00 on Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Part of the Setagaya group: Tabelog links the group site setaga-ya.com/store/hirugao. An October 2026 diner calls Hirugao "the well-known and popular ramen chain", and another notes it was featured on Tokyo Station\'s Ramen Street. Opened 23 April 2018 (Tabelog). The back-fat niboshi ramen is a Ningyocho-only limited dish (September 2026).',
      philosophy: null, specialty: 'Shio ramen with shrimp wontons.',
      anecdotes: [
        { text: '"The clear, golden broth was topped with plenty of finely sliced green onions, thick chashu, menma, nori, and plump wontons." — October 2026, shio ramen with wontons.', source: R + 'B538057608/' },
        { text: '"According to the explanation in the restaurant, the broth is based on chicken and layered with flavors from kombu, dried scallops, niboshi (dried sardines), and bonito flakes." — October 2026, shio ramen assortment ¥1,430.', source: R + 'B538449420/' },
        { text: '"At the start, they asked, \'Would you like garlic?\'—a protocol reminiscent of Jiro-style ramen." — September 2026, back-fat niboshi ramen ¥1,050.', source: R + 'B536047950/' },
      ],
      japanese_sources_summary: '食べログ: ひるがお 人形町店、ラーメン、日本橋人形町3-6-7 共同ビル 1F、人形町駅から徒歩2分、月〜土11:00〜21:30、日11:00〜17:00、予約不可、カード・電子マネー・QR不可、17席 (カウンター13席、2人用テーブル2卓)、禁煙、2018年4月23日オープン、ホームページ setaga-ya.com。口コミ(2026年9月〜10月): 有名なラーメンチェーン、透き通った金色の塩スープ、鶏をベースに昆布、干し貝柱、煮干し、鰹節 (店内の説明)、海老ワンタン、厚いチャーシュー、塩らーめん全部のせ1,430円、人形町店限定の背脂煮干しラーメン1,050円、太いちぢれ麺、にんにくを聞かれる、ひるがお風親子丼430円、アプリ登録で味玉、特製つけ麺が物足りないという声も。',
      confidence: 'medium', sources: [TB, SITE, R + 'B511311182/', R + 'B536047950/', R + 'B536253165/', R + 'B536919087/', R + 'B537100912/', R + 'B537337097/', R + 'B538057608/', R + 'B538213472/', R + 'B538289176/', R + 'B538449420/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋人形町3-6-7 共同ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB} (35.686979, 139.781487); cross-checked: GSI 東京都中央区日本橋人形町三丁目6番7号 (go) 5m. Same building as KUDAN (tokyo_kudan_ningyocho, address_ja "東京都中央区日本橋人形町3-6-7 人形町共同ビル 1F"), 8 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536047950/', R + 'B538449420/', R + 'B511311182/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Shio ramen assortment (all toppings)', '¥1,430', 'Ramen', 'no', 'no', 'October 2026.', 'shio_zenbu'),
      it('', '', 'Back-fat niboshi ramen (Ningyocho limited)', '¥1,050', 'Limited', 'no', 'no', 'September–October 2026.', 'seabura_niboshi'),
      it('', '', 'Hirugao-style oyakodon', '¥430', 'Rice', 'no', 'no', 'October 2026.', 'oyakodon'),
    ] }, {
    cuisine: '鶏に昆布、干し貝柱、煮干し、鰹節を重ねた、透き通った金色のスープの塩らーめん (店内の説明、2026年10月)・海老ワンタンの塩らーめん、全部のせ1,430円 (2026年10月)、白湯らーめん、海老ワンタンのつけ麺 (2026年の口コミ)・人形町店限定の背脂煮干しラーメン1,050円、太いちぢれ麺、にんにくは頼めば (2026年9月〜10月)・ひるがお風親子丼430円 (2026年10月)',
    neighborhood: '日本橋人形町3-6-7 共同ビル 1F、大通り沿い。人形町駅から徒歩2分、水天宮前駅から徒歩6分。同じビルに KUDAN',
    gf_detail: 'グルテンフリーではない: 小麦の麺とワンタンの皮。',
    vegan_detail: 'ヴィーガンではない: 塩のスープは鶏ベースで干し貝柱、煮干し、鰹節も (店内の説明、2026年10月)。煮干しの丼には背脂。',
    notes: '[ラーメン・人形町、大通り沿いの Setagaya グループの塩らーめん] Setagaya グループの塩らーめんの店ひるがおの人形町店で、駅から2分。看板は鶏に昆布、干し貝柱、煮干し、鰹節を重ねた透き通った金色の塩スープに、細麺、厚く柔らかいチャーシュー、ぷりぷりの海老ワンタン。2026年10月の口コミでは軽いのにうまみが深いという。2026年秋には人形町店だけの背脂煮干しラーメン (1,050円) もあり、太いちぢれ麺で、二郎系のようににんにくを聞かれる。お腹が空いていれば430円の親子丼を。2026年10月には特製つけ麺が物足りないという声も。現金のみ。毎日営業、日曜は17時まで。',
  });
}

// ================================================================ ヒマラヤンビレッジ
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13053639/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '15:00'], ['17:00', '23:00']);
  put({
    id: 'tokyo_himalayan_village_ningyocho', name: 'ヒマラヤンビレッジ (Himalayan Village)', category: 'OMNI',
    lat: 35.68514, lng: 139.782539, cuisine_type: 'curry',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The dal bhat set and curries can be eaten with rice instead of naan (2026 reviews), but naan is central to every set and nothing is described as gluten-free.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The dal bhat set has a bean curry, sautéed spinach and a potato dish (September 2026), but how the curries and vegetables are cooked is not described, and most sets centre on chicken, mutton or keema.',
    hours_raw: 'Daily 11:00–15:00 and 17:00–23:00 (last order 22:30), open on holidays (Tabelog). Lunch sets with free refills of naan and rice; spice level to order (2026 reviews). Party courses with all-you-can-eat and -drink; private hire for up to 50 (Tabelog). Cards, e-money and PayPay; no service charge (Tabelog). 28 seats incl. sofas and a counter; non-smoking, smoking outside (Tabelog). Basement. Opened 12 May 2008; 18th anniversary in May 2026 (Tabelog; October 2026 review).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nihonbashi-Ningyocho 1-7-6, HSビル B1F, near an elementary school — 30 seconds from Ningyocho Stn exit A2 (Hibiya Line), 1 min from exit A6, 3 min from Suitengumae Stn exit 8; Ningyocho Densui is upstairs',
    cuisine: 'Nepalese and Indian curries by a Nepalese chef (Tabelog) · lunch: daily set of two curries with naan, rice and salad ¥950, free refills of naan and rice (July 2026); B set with a drink; ladies\' set; dal bhat set with bean curry, sautéed spinach, a potato dish and salad ¥1,180 (September–October 2026) · curries in 2026: mutton, keema, chicken and mushroom, saag chicken; teppan-yaki curry; plain, cheese and garlic naan · dinner and parties: tandoori chicken, biryani, Nepalese dumplings (momo); all-you-can-eat-and-drink courses from ¥3,000 for two hours; a ¥4,000 course with three hours of drinks including draft beer (July 2026) · Nepalese and Indian beers (Tabelog); mango lassi',
    website: TB, gmaps: gm('ヒマラヤンビレッジ 人形町'), menu_url: TB + 'dtlmenu/',
    notes: "[Curry · Ningyocho, a long-running Nepalese curry basement by the station] A basement Nepalese restaurant half a minute from Ningyocho station, open daily since 2008. At lunch it fills with office workers for a ¥950 set of two curries with fluffy naan and rice, both refilled free. One October 2026 diner prized it as the only place around serving dal bhat (¥1,180), a bean curry with spinach, potato and rice on golden dishware. Mutton curry, keema and a cheese naan are favourites. Ask for spice by level, as level 1 can be very mild. In the evening it turns into a lively party venue, with all-you-can-eat-and-drink courses from ¥3,000, and an August 2026 diner found half the room were foreign visitors. Nepalese and Indian beers.",
    chef_bio: { chef_name: null, roles: ['Nepalese chef (unnamed; Tabelog shop text)'], origin: 'Nepal (the chef, per Tabelog)',
      background: 'Opened 12 May 2008 (Tabelog); an October 2026 diner notes the 18th anniversary that May. Tabelog\'s shop text: freshly baked naan and curry by a skilled Nepalese chef; Nepalese and Indian music; party courses; lunch sets.',
      philosophy: null, specialty: 'Lunch curry sets with free naan; dal bhat.',
      anecdotes: [
        { text: '"There are many places in Ningyocho that serve delicious curry, but this is the only one I know where you can enjoy Dal Bhat for lunch." — October 2026, dal bhat set ¥1,180.', source: R + 'B473911424/' },
        { text: '"I can\'t believe that for just JPY 4000, you get a fantastic menu, delicious food, and a 3-hour all-you-can-drink option with draft beer included!" — July 2026.', source: R + 'B532568411/' },
        { text: '"Half of the customers were foreigners, indicating its popularity among international visitors." — August 2026, mutton curry.', source: R + 'B533627686/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): ヒマラヤンビレッジ、ネパール料理、インドカレー、日本橋人形町1-7-6 HSビル B1F、人形町駅A2出口から徒歩30秒、毎日11:00〜15:00、17:00〜23:00 (L.O.22:30)、祝日も営業、カード・電子マネー・PayPay可、サービス料なし、28席、禁煙 (外に喫煙所)、貸切50名まで、2008年5月12日オープン、ネパール人のシェフの焼きたてのナンとカレー、ネパールやインドのビール、食べ飲み放題のコース3,000円から。口コミ(2026年7月〜10月): 日替わりランチ950円でカレー2種とナンとライス、おかわり無料、ダルバートセット1,180円 (豆のカレー、ほうれん草の炒め物、じゃがいも)、マトンカレー、キーマ、チーズナン、辛さは段階で、5月に18周年、夜は3時間飲み放題付き4,000円のコース、客の半分は海外の人という日も。',
      confidence: 'medium', sources: [TB, R + 'B473911424/', R + 'B531505101/', R + 'B532107574/', R + 'B532568411/', R + 'B532811237/', R + 'B533627686/', R + 'B534929087/', R + 'B535135410/', R + 'B535236086/', R + 'B536428723/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Short lunch-set menu; choose curries and spice level (2026 reviews); many international diners (August 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋人形町1-7-6 HSビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated July–October 2026.' },
    pin_source: `Tabelog ${TB} (35.685140, 139.782539); cross-checked: GSI 東京都中央区日本橋人形町一丁目7番6号 (go) 2m. Ningyocho Densui (tokyo_ningyocho_densui, 2F of the same building) has a Tabelog point 1.1 m away and is pinned block-level 6 m north; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B532107574/', R + 'B535135410/', TB],
    price_note: 'Lunch prices from July–October 2026 reviews; party courses from Tabelog and a July 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Daily lunch set: two curries, naan, rice, salad (free refills)', '¥950', 'Lunch', 'ask', 'ask', 'July 2026.', 'daily_set'),
      it('ダルバートセット', '', 'Dal bhat set: bean curry, spinach, potato, rice, salad, drink', '¥1,180', 'Lunch', 'ask', 'ask', 'September–October 2026 (photo caption).', 'dal_bhat'),
      it('', '', 'Party course, 2 h all-you-can-eat-and-drink', '¥3,000', 'Courses', 'no', 'no', 'Tabelog.', 'course_3000'),
      it('', '', 'Party course with 3 h all-you-can-drink incl. draft beer', '¥4,000', 'Courses', 'no', 'no', 'July 2026.', 'course_4000'),
    ] }, {
    cuisine: 'ネパール人のシェフのネパールとインドのカレー (食べログ)・昼: カレー2種、ナン、ライス、サラダの日替わりセット950円、ナンとライスはおかわり無料 (2026年7月)。飲み物付きのBセット、レディースセット。豆のカレー、ほうれん草の炒め物、じゃがいも、サラダのダルバートセット1,180円 (2026年9月〜10月)・2026年のカレー: マトン、キーマ、鶏ときのこ、サグチキン。鉄板焼きカレー。プレーン、チーズ、ガーリックのナン・夜と宴会: タンドリーチキン、ビリヤニ、ネパールの餃子 (モモ)。2時間の食べ飲み放題のコースは3,000円から、生ビール付き3時間飲み放題のコース4,000円 (2026年7月)・ネパールとインドのビール (食べログ)、マンゴーラッシー',
    neighborhood: '日本橋人形町1-7-6 HSビル B1F、小学校のそば。人形町駅A2出口から徒歩30秒 (日比谷線)、A6出口から1分、水天宮前駅8番出口から3分。2階は人形町 田酔',
    gf_detail: '要確認。ダルバートセットやカレーはナンの代わりにライスで食べられる (2026年の口コミ) が、どのセットもナンが中心で、グルテンフリーの説明はない。',
    vegan_detail: '要確認。ダルバートセットには豆のカレー、ほうれん草の炒め物、じゃがいもの料理 (2026年9月) があるが、カレーや野菜の調理法の説明はなく、ほとんどのセットは鶏、マトン、キーマが中心。',
    notes: '[カレー・人形町、駅そばの長く続くネパールのカレーの地下の店] 人形町駅から30秒、2008年から毎日営業する地下のネパール料理店。昼は会社員でいっぱいになり、950円のセットでカレー2種にふわふわのナンとライス、どちらもおかわり無料。2026年10月の口コミでは、このあたりで昼にダルバート (1,180円) が食べられる唯一の店といい、豆のカレーにほうれん草、じゃがいも、ご飯が金色の器に。マトンカレー、キーマ、チーズナンが人気。辛さは段階で頼み、1でもかなり控えめなことも。夜はにぎやかな宴会の店になり、食べ飲み放題のコースは3,000円から。2026年8月には客の半分が海外からだったという。ネパールとインドのビールも。',
  });
}

// ================================================================ よし梅 芳町亭
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13005054/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.yoshiume.jp/';
  const H = day(['11:30', '14:00'], ['17:30', '22:00']);
  put({
    id: 'tokyo_yoshiume_yoshimachitei_ningyocho', name: 'よし梅 芳町亭 (Yoshi Ume Yoshimachi-tei)', category: 'OMNI',
    lat: 35.685122, lng: 139.78185, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. Kaiseki courses with sashimi, a dashi-based negima hot pot finished as rice porridge, miso-marinated fish and tempura on some courses; nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the signature hot pot is tuna and leek in broth, and courses are built on fish.',
    hours_raw: 'Mon–Fri and the days before and after a holiday 11:30–14:00 (last order food 13:00) and 17:30–22:00 (last order food 20:30); closed Sat, Sun and holidays; no reservations taken for weekends and holidays (Tabelog). Courses booked ahead. Service charge 10% (Tabelog). Cards (JCB, AMEX) and PayPay (Tabelog). 16 seats in private rooms for 2–8, some tatami with sunken seating; private hire for up to 20 (Tabelog). Non-smoking. Traditional performing-arts events at times — a Satsuma biwa recital with a kaiseki bento in October 2025.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nihonbashi-Ningyocho 1-5-2, a pre-war house in a narrow alley — 3 min from Ningyocho Stn (lift at exit A5)',
    cuisine: 'Kaiseki and Edo-style hot pots in private rooms (Tabelog) · signature negima nabe — tuna and plenty of white leek in broth, cooked at the table by staff and finished as zosui (2025–26 reviews) · courses (Tabelog, tax included): Kagetsu hot-pot course, negima, duck or (in winter) oyster nabe ¥16,000; Shunhou kaiseki with negima soup ¥19,800; Kochou with seafood, tempura and negima soup ¥24,000 · 2025 courses included an appetiser of white fish and plum tofu, sashimi of sea bream, tuna and amberjack, a hassun of miso-marinated yellowtail, simmered shrimp and kumquat; a December 2025 course opened with chawanmushi topped with grilled milt · seasonal kaiseki bento at events (October 2025)',
    website: SITE, gmaps: gm('よし梅 芳町亭 人形町'), menu_url: null,
    notes: "[Kaiseki · Ningyocho, Edo negima hot pot in a registered cultural-property house] Down a narrow alley near Ningyocho station, a pre-war house registered as a tangible cultural property. Tabelog says it was once the home of the actress Hanayagi Kokiku, with a Yakusugi cedar ceiling, wave-patterned glass, fine latticework and a sunken garden. Diners eat in private rooms, one party per room. The specialty is negima nabe, the Edo hot pot of tuna and sweet white leek in broth, cooked at the table by seasoned staff and finished as rice porridge, within kaiseki courses of seasonal dishes (¥16,000–24,000 plus 10%). Diners in 2025–26 describe it as a quiet, Showa-era ryotei for business dinners and special occasions; an October 2026 diner thanked the owner for the welcome, and in 2025 the owner explained the building's history before a biwa recital. Weekdays only.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed; explained the building\'s history at an October 2025 event; "the staff, including the owner", October 2026)'], origin: null,
      background: 'Tabelog\'s shop text: a beautiful building once home to the actress Hanayagi Kokiku, with a ceiling of Yakusugi cedar, wave-pattern glass, latticework and a tokonoma pillar; a registered tangible cultural property (pre-war); Edo\'s famous negima nabe and seasonal Japanese dishes; traditional performing-arts events. An October 2025 diner who had eaten at "Yoshi Ume\'s main branch" compared the two. Website yoshiume.jp (Tabelog).',
      philosophy: null, specialty: 'Negima nabe (tuna and leek hot pot).',
      anecdotes: [
        { text: '"The negima nabe (hot pot with green onions and tuna, not chicken) was simple yet rich in flavor, and the zosui (rice porridge) was truly delicious." — December 2025.', source: R + 'B518726454/' },
        { text: '"Beforehand, the owner explained the building\'s history, mentioning that the pillars, ceilings, and windows are made from materials and techniques that can never be replicated." — October 2025, Satsuma biwa event.', source: R + 'B515985601/' },
        { text: '"I was also impressed by the attentive and warm hospitality from the staff, including the owner." — October 2026, negima nabe.', source: R + 'B538128970/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): よし梅 芳町亭、鍋、日本料理、日本橋人形町1-5-2、人形町駅から徒歩3分、月〜金・祝前日・祝後日11:30〜14:00、17:30〜22:00、土日祝休み (予約不可)、サービス料10%、カード (JCB、AMEX)・PayPay可、16席 (2〜8名の個室)、掘りごたつ、貸切20名まで、禁煙、登録有形文化財の戦前の建物、女優 Hanayagi Kokiku の住まいだった、Yakusugi の天井、波ガラス、組子、江戸の名物ねぎま鍋、懐石コース (Shunhou 19,800円、Kochou 24,000円、鍋の Kagetsu 16,000円)、伝統芸能のイベント、ホームページ yoshiume.jp。口コミ(2025年7月〜2026年10月): 昭和の料亭のような個室、ねぎま鍋を仲居さんが作り雑炊で締める、刺身と八寸、Satsuma 琵琶の会と懐石弁当、店主が建物の歴史を説明、接待や特別な日に、よし梅の本店もあるという声。',
      confidence: 'medium', sources: [TB, SITE, R + 'B474245803/', R + 'B478653577/', R + 'B496953493/', R + 'B504093623/', R + 'B511523360/', R + 'B515970980/', R + 'B515985601/', R + 'B518726454/', R + 'B532437364/', R + 'B538128970/'] },
    cultural_comfort: { level: 'japanese', note: 'Set kaiseki courses in private rooms; staff cook the hot pot at the table.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋人形町1-5-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with courses for November 2026; reviews dated July 2025–October 2026. The official site yoshiume.jp answered 403 on 2026-11-01.' },
    pin_source: `Tabelog ${TB} (35.685122, 139.781850); cross-checked: GSI 東京都中央区日本橋人形町一丁目5番2号 (go) 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course prices from Tabelog set menus (tax included; read November 2026); service charge 10% on top.', last_checked: TODAY, items: [
      it('', '', 'Kagetsu hot-pot course (negima, duck or oyster nabe)', '¥16,000', 'Courses', 'ask', 'no', 'Tabelog; from November 2026.', 'kagetsu'),
      it('', '', 'Shunhou kaiseki course with negima soup', '¥19,800', 'Courses', 'ask', 'no', 'Tabelog.', 'shunhou'),
      it('', '', 'Kochou course: seafood, tempura, negima soup, 12 items', '¥24,000', 'Courses', 'no', 'no', 'Tabelog; includes tempura.', 'kochou'),
    ] }, {
    cuisine: '個室で味わう懐石と江戸の鍋 (食べログ)・名物はねぎま鍋: 鮪とたっぷりの白ねぎを出汁で、仲居さんがテーブルで作り、雑炊で締める (2025〜26年の口コミ)・コース (食べログ、税込み): Kagetsu の鍋のコース、ねぎま、鴨、冬は牡蠣の鍋16,000円、ねぎまの椀の Shunhou の懐石19,800円、魚介、天ぷら、ねぎまの椀の Kochou 24,000円・2025年のコース: 白身魚と梅の豆腐の先付、鯛、鮪、間八の刺身、鰤の味噌漬け、海老の旨煮、金柑の八寸。2025年12月のコースは焼き白子をのせた茶碗蒸しから・催しのときは季節の懐石弁当 (2025年10月)',
    neighborhood: '日本橋人形町1-5-2、細い路地の戦前の家。人形町駅から徒歩3分 (A5出口にエレベーター)',
    gf_detail: '予約時に要確認。刺身、出汁のねぎま鍋と雑炊、味噌漬けの魚、コースによっては天ぷらの懐石で、グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではない: 名物の鍋は鮪とねぎの出汁、コースは魚が中心。',
    notes: '[懐石・人形町、登録有形文化財の家で江戸のねぎま鍋] 人形町駅近くの細い路地、登録有形文化財の戦前の家。食べログによれば女優 Hanayagi Kokiku の住まいだった建物で、Yakusugi の天井、波ガラス、細かい組子、中庭。食事は一組ずつの個室で。名物は江戸のねぎま鍋で、鮪と甘い白ねぎを出汁で、ベテランの仲居さんがテーブルで作り、雑炊で締める。季節の料理の懐石コース (16,000〜24,000円とサービス料10%) の中で。2025〜26年の口コミでは静かな昭和の料亭のようで、接待や特別な日に向くという。2026年10月の口コミは店主のもてなしに感謝し、2025年には琵琶の会の前に店主が建物の歴史を語った。平日のみ営業。',
  });
}

// ================================================================ 人形町 田酔
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13097361/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.densui.net';
  const WK = day(['11:30', '14:00'], ['17:00', '23:00']); const SAT = day(['11:30', '14:00'], ['16:00', '22:00']);
  put({
    id: 'tokyo_ningyocho_densui', name: '人形町 田酔 (Ningyocho Densui)', category: 'OMNI',
    lat: 35.685184, lng: 139.782542, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sashimi, dashimaki and the clay-pot rice may suit, but the menu includes croquettes, tempura, saikyo-miso fish and tsukudani, and nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi underlies the soups, simmered dishes and dashimaki (August 2026), and the courses centre on fish.',
    hours_raw: 'Mon–Fri 11:30–14:00 and 17:00–23:00; Sat 11:30–14:00 and 16:00–22:00; closed Sundays, holidays, 31 December–3 January and 11–13 August; hours may change (Tabelog). Evening bookings go first to guests who will drink sake; for food only, come at lunch; the Jimbocho branch takes overflow (Tabelog). No service or cover charge (Tabelog). Cards; no e-money or QR (Tabelog). 18 seats: 4 at the counter, 14 at tables; private hire for up to 20 (Tabelog). Second floor. Lunch rice is refillable (September 2026). Opened 18 September 2009 per Tabelog; 2026 reviews give 2001 and October 2010.',
    hours: { 0: WK, 1: WK, 2: WK, 3: WK, 4: WK, 5: SAT }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nihonbashi-Ningyocho 1-7-6, HSビル 2F, on the corner of a narrow alley between Ningyocho and Suitengumae — 1 min from Ningyocho Stn exit A2 (Hibiya Line), 3 min from exit A5 and from Suitengumae Stn exit 8; Himalayan Village is in the basement',
    cuisine: 'Sake-led kaiseki and izakaya dishes, the concept being to drink in "the blessings of the rice fields" (2026 reviews) · dinner: kaiseki course with sake, or à la carte — the signature Densui hassun of about nine seasonal bites (sardines simmered with plum, salmon tartare, pumpkin with adzuki, sweet shrimp with kombu…), sashimi, saury sashimi with liver soy (September 2026), beef-and-porcini cream croquette, abalone fried with liver sauce, corn and zucchini tempura, dashimaki, saikyo-grilled black cod, "triple berry ginjo cheese", and black-truffle clay-pot rice of Uonuma and Tokamachi Koshihikari (July–October 2026) · lunch sets with dashimaki, small sides, miso soup and refillable rice: saikyo-grilled black cod (August 2026), sashimi (August 2026), chilled-soup set ¥1,650 (August 2026) · a long list of sake, e.g. Saku, Ki, Oomine, Jikon, Aramasa (October 2026)',
    website: SITE, gmaps: gm('人形町 田酔'), menu_url: TB + 'dtlmenu/',
    notes: "[Izakaya · Ningyocho, a sake lover's kaiseki izakaya with truffle clay-pot rice] Up a stair on an alley corner between Ningyocho and Suitengumae, an 18-seat second-floor room built around sake, whose name speaks of being drunk on the blessings of the rice fields. Evening tables go first to people who will drink. The owner pairs sake from a deep list of new-wave and junmai brews, and an August 2026 diner watched the owner run the kitchen single-handed. Dishes are made for drinking: the signature hassun of nine seasonal bites, sashimi, a beef-and-porcini croquette, dashimaki. The finish is black-truffle clay-pot rice, the leftovers sometimes shaped into rice balls to take home. Weekday lunch sets of grilled black cod or sashimi come with dashimaki and refillable rice; one August 2026 diner found them small for the price. Closed Sundays.",
    chef_bio: { chef_name: null, roles: ['Owner, cooking alone in the kitchen (unnamed; "Despite being a one-man operation in the kitchen, the owner\'s skill was evident", August 2026 review)'], origin: null,
      background: 'Per 2026 reviews: run by a company reviewers call Tokyo Food Works, with branches in Otemachi and Jimbocho (July 2026; Tabelog names the Jimbocho shop as overflow); an August 2026 reviewer names the company\'s representative as Shingo Sasada. Opening year differs: Tabelog gives 18 September 2009; a July 2026 review says 2001; August and October 2026 reviews say October 2010. Website densui.net (Tabelog).',
      philosophy: 'Sake as one of the main attractions of the meal, not a side ("Kokushu Kaiseki", October 2026 review).', specialty: 'Densui hassun; black-truffle clay-pot rice; sake pairing.',
      anecdotes: [
        { text: '"The leftover black truffle rice in the clay pot was made into onigiri (rice balls) by the owner, which was a delightful service that allowed me to take it home." — August 2026, kaiseki course.', source: R + 'B534445366/' },
        { text: '"I had the pleasure of tasting various brands such as Saku, Ki, Oomine, Jikon, and Aramasa—truly a delight for sake lovers." — October 2026.', source: R + 'B536918790/' },
        { text: '"Delicious, but a bit lacking." — August 2026, chilled-soup lunch set ¥1,650.', source: R + 'B536764007/' },
      ],
      japanese_sources_summary: '食べログ: 人形町 田酔、日本料理、日本酒バー、居酒屋、日本橋人形町1-7-6 HSビル 2F、人形町駅A2出口から徒歩1分、月〜金11:30〜14:00、17:00〜23:00、土11:30〜14:00、16:00〜22:00、日祝休み、年末年始と8月11日〜13日休み、夜は日本酒を飲む方の予約を優先、満席のときは Jimbocho の店へ、サービス料・チャージなし、カード可、電子マネー・QR不可、18席 (カウンター4、テーブル14)、2009年9月18日オープン、ホームページ densui.net。口コミ(2026年7月〜10月): 田んぼの恵みに酔う、全国の日本酒、田酔八寸、刺身、牛とポルチーニのクリームコロッケ、鮑の肝ソース、だし巻き、銀だらの西京焼き、黒トリュフの土鍋ご飯、厨房は店主ひとり、余ったご飯をおにぎりに、昼の定食はご飯おかわり自由、量が少ないという声も、創業年は2001年、2010年という声も、Otemachi と Jimbocho にも店。',
      confidence: 'medium', sources: [TB, SITE, R + 'B532622085/', R + 'B534059430/', R + 'B534133536/', R + 'B534445366/', R + 'B535029755/', R + 'B535675452/', R + 'B536600916/', R + 'B536764007/', R + 'B536918790/', R + 'B537242181/'] },
    cultural_comfort: { level: 'japanese', note: 'A Japanese sake list and courses; the owner suggests pairings (August 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '東京都中央区日本橋人形町1-7-6 HSビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated July–October 2026.' },
    pin_source: `Tabelog ${TB} gives 35.685130, 139.782542 — 1.1 m from Himalayan Village (tokyo_himalayan_village_ningyocho, address_ja "東京都中央区日本橋人形町1-7-6 HSビル B1F") in the same building. Block-level: pin moved 6 m north so the two are not stacked; GSI 東京都中央区日本橋人形町一丁目7番6号 (go) 1m from the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536764007/', R + 'B534445366/'],
    price_note: 'One lunch price from August 2026; dinner course prices not published in the sources read.', last_checked: TODAY, items: [
      it('', '', 'Chilled-soup lunch set with dashimaki and sides', '¥1,650', 'Lunch', 'ask', 'no', 'August 2026.', 'hiyajiru'),
      it('', '', 'Densui hassun (seasonal assortment)', '', 'Dinner', 'ask', 'no', '2026 reviews; price not given.', 'hassun'),
      it('', '', 'Black-truffle clay-pot rice', '', 'Dinner', 'ask', 'ask', 'July–October 2026; price not given.', 'truffle_donabe'),
    ] }, {
    cuisine: '日本酒を軸にした懐石と居酒屋の料理、テーマは「田んぼの恵みに酔う」(2026年の口コミ)・夜: 日本酒と合わせる懐石のコース、またはアラカルト — 名物の田酔八寸は季節の9品ほど (鰯の梅煮、鮭のタルタル、かぼちゃの小豆煮、甘海老の昆布締めなど)、刺身、肝醤油の秋刀魚の刺身 (2026年9月)、牛とポルチーニのクリームコロッケ、鮑の肝ソース、とうもろこしとズッキーニの天ぷら、だし巻き、銀だらの西京焼き、「トリプルベリー吟醸チーズ」、Uonuma と Tokamachi のコシヒカリの黒トリュフの土鍋ご飯 (2026年7月〜10月)・昼はだし巻き、小鉢、味噌汁、おかわり自由のご飯付きの定食: 銀だらの西京焼き (2026年8月)、刺身 (2026年8月)、冷や汁の定食1,650円 (2026年8月)・日本酒が豊富、たとえば Saku、Ki、Oomine、Jikon、Aramasa (2026年10月)',
    neighborhood: '日本橋人形町1-7-6 HSビル 2F、人形町と水天宮前の間の細い路地の角。人形町駅A2出口から徒歩1分 (日比谷線)、A5出口と水天宮前駅8番出口から3分。地下はヒマラヤンビレッジ',
    gf_detail: '要確認。刺身、だし巻き、土鍋ご飯は合うかもしれないが、コロッケ、天ぷら、西京焼き、佃煮もあり、グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではない: 汁物、煮物、だし巻きには出汁 (2026年8月)、コースは魚が中心。',
    notes: '[居酒屋・人形町、黒トリュフの土鍋ご飯の日本酒好きの懐石居酒屋] 人形町と水天宮前の間の路地の角、階段を上がった2階の18席の店で、日本酒が主役。店名は田んぼの恵みに酔うという意味。夜は日本酒を飲む人の予約が優先。店主が新しい酒や純米酒の豊富な一覧から合わせてくれ、2026年8月には店主がひとりで厨房を切り盛りしていたという。料理は酒に合うもの: 名物の9品の八寸、刺身、牛とポルチーニのコロッケ、だし巻き。締めは黒トリュフの土鍋ご飯で、残りはおにぎりにして持ち帰れることも。平日の昼は銀だらや刺身の定食にだし巻きとおかわり自由のご飯が付くが、2026年8月には値段の割に少なめという声も。日曜休み。',
  });
}

save();
