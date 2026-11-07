// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 48.
//   Queue run from the osw2 worktree, 2026-11-06.
//   core (queue.mjs kyoto-missed next core 200, lane ids in order):
//   + キョウハスパイス Kyoha Spice (one-person spice-curry counter near Shijo-Omiya; since 2024)
//   + 自然酒菜 一瞬 Shizen Shusai Ichishun (Kyoto-vegetable izakaya on Shichijo west of Karasuma; since 2023) — invoice
//     万州国際株式会社, registered at the shop's own address; no other shop found.
//   notable (queue.mjs kyoto-missed next notable 200, lane ids in order):
//   - 京都 夷川餃子 なかじま 本店 — skipped: main shop of a brand already in data.
//   + TSUMU CAFE (all-day café by Kyoto Station, formerly tsumugi cafe; since 2020) — run by 株式会社レ・コネクション, a Kyoto
//     real-estate and lodging company (press release); one café found.
//   + 鯖街道 花折 下鴨店 Saba Kaido Hanaore Shimogamo (saba-zushi maker's shop and dining room by Shimogamo Shrine) — the official
//     site names only this shop and its workshop.
//   None of the four is in data/kyoto.json: grep by id, name and address found none.
//   じじばば check (coordinator, 2026-11-06): still four じじばば-named shops in our crawls; no fifth found.
//   Service charges: 一瞬 otoshi ¥300 (Tabelog); キョウハスパイス none, one drink per person at dinner (Tabelog); none listed for the
//   others.
//   Remarks about other diners kept only where several reviews agree.
//   Pins: Tabelog /en/ point, cross-checked with GSI only.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-48');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26031843', '京都 夷川餃子 なかじま 本店: main shop of a brand already in data — kyoto_ebisugawa_gyoza_nakajima_donguri (夷川餃子 なかじま 団栗店) is in data/kyoto.json; same name and concept (as with 麩嘉 府庁前本店)');

// ================================================================ キョウハスパイス
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26042127/'; const R = TB + 'dtlrvwlst/';
  const L = day(['11:00', '15:00']); const LD = day(['11:00', '15:00'], ['17:00', '21:00']);
  put({
    id: 'kyoto_kyoha_spice', name: 'キョウハスパイス (Kyoha Spice)', category: 'OMNI',
    lat: 35.00042342676954, lng: 135.7489372312245, cuisine_type: 'curry',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Spice curries over rice that change weekly and monthly — keema, vindaloo, a squid-ink curry, a beef-tendon "European" curry — plus kara-age and steak; no gluten information is published (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the curries reviewed are chicken, pork, beef, bonito and squid (reviews).',
    hours_raw: 'Lunch 11:00–15:00 Wednesday–Monday; dinner 17:00–21:00 Wednesday–Saturday; closed Tuesday; days change — check the calendar on Instagram (Tabelog). Bookings by Instagram DM. No service charge; one drink per person at dinner (Tabelog). Cards, transport IC, iD, QUICPay and most QR codes (Tabelog). 12 seats: 8 at the counter, 4 at a table; heated tobacco only, outside; English menu (Tabelog). Run by one person, so food can be slow at peak (October 2025; April 2026). Down a narrow passage in the BASE KYOTO OMIYA building west of Omiya-Takatsuji, 5 min walk south of Hankyu Omiya Stn (Tabelog; April and July 2026).',
    hours: { 0: L, 2: LD, 3: LD, 4: LD, 5: LD, 6: L }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Omiya-Takatsuji — 332 m from Shijo-Omiya',
    cuisine: 'Spice curry, two curries a month or week plus specials (2025–2026 reviews) · two-curry combination ¥1,300 (October 2026), with a house rice blend or long-grain yellow rice · recent curries: Pakistani-style chicken; beef-tendon "European" curry; Okinawan soki-pork vindaloo; mountain-pepper keema; lemon chicken; tomato chicken; tonkotsu green curry; chicken keema; fresh bonito keema; spicy chicken with a squid-dashi "jet black" curry (2025–2026) · anniversary biryani; spiced egg; offal topping; coriander grown in Chiba (2025–2026) · kara-age and steak; desserts; shochu, wine and cocktails at night (Tabelog; April 2026)',
    website: null, gmaps: gm('キョウハスパイス 五坊大宮町'), menu_url: TB,
    notes: "[Spice curry · Omiya-Takatsuji, a one-person curry counter] Tucked down a passage off Omiya, a clean, stylish counter run single-handed by the owner of the former X.CURRY in Yodo. The curries change by the week and month — soki vindaloo, Pakistani chicken, beef-tendon European, a squid-ink black curry — and most diners take a two-curry plate (about ¥1,300). Be patient at peak; dinner adds drinks. Closed Tuesday.",
    chef_bio: { chef_name: null, roles: ['Owner-chef not named; runs the shop alone (October 2025; April 2026)'], origin: null,
      background: 'Opened 11 November 2024 (Tabelog). Per an April 2026 reviewer, the owner previously ran X.CURRY in Yodo; reviewers describe a friendly owner who works alone and changes the curries monthly, with weekly specials.',
      philosophy: null,
      specialty: 'Two-curry combination plate.',
      anecdotes: [
        { text: 'A December 2025 diner was told to start with the milder squid-dashi black curry, as the chicken used twice the spices.', source: R + 'B518821474/' },
        { text: 'An April 2026 visitor walked into the café next door by mistake before finding the passage.', source: R + 'B526690090/' },
        { text: 'An October 2026 regular finally got the long-awaited Chiba coriander with a Pakistani chicken and beef-tendon pair.', source: R + 'B535291867/' },
      ],
      japanese_sources_summary: '食べログ: キョウハスパイス、カレー、下京区五坊大宮町87-3 岡染 BASE KYOTO OMIYA、阪急大宮駅・嵐電四条大宮駅から大宮通を南へ徒歩5分、四条大宮から332m、月日祝 11:00〜15:00、水〜土 11:00〜15:00・17:00〜21:00、火曜定休、最新の営業日はInstagramのカレンダー、予約はInstagramのDM、サービス料・チャージなし、ディナーは1人1ドリンク制、カード・電子マネー・QR可、12席 (カウンター8、テーブル4)、加熱式たばこのみ店外の喫煙所、英語メニュー、2024年11月11日オープン。口コミ (2025〜2026年、英語): 店主がひとりで営業、淀のX.CURRYの店主、月替わりと週替わりのカレー、2種あいがけ1,300円、パキスタン風チキン、牛すじの欧風カレー、ソーキのビンダルー、実山椒のキーマ、レモンチキン、トマトチキン、豚骨グリーンカレー、チキンキーマ、生鰹のキーマ、イカ出汁の漆黒カレー、周年のビリヤニ、スパイス卵、ホルモン、千葉のパクチー、唐揚げ、ステーキ、デザート、路地の奥。',
      confidence: 'medium', sources: [TB, R + 'B516307830/', R + 'B518821474/', R + 'B523565281/', R + 'B523816687/', R + 'B525835333/', R + 'B526690090/', R + 'B527653601/', R + 'B529427749/', R + 'B529494304/', R + 'B531058334/', R + 'B535291867/', R + 'B537249751/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu; book by Instagram DM (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市下京区五坊大宮町87-3 岡染 BASE KYOTO OMIYA',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.000423, 135.748937); cross-checked: GSI 京都府京都市下京区五坊大宮町87番地 (lot) 29m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537249751/'],
    price_note: 'Price from an October 2026 review; curries change monthly.', last_checked: TODAY, items: [
      it('', '', 'Two-curry combination plate', '¥1,300', 'Curry', 'ask', 'no', 'October 2026.', 'aigake'),
      it('', '', 'Curry of the month (e.g. Pakistani-style chicken)', '', 'Curry', 'ask', 'no', '', 'monthly'),
      it('', '', 'Spiced egg (topping)', '', 'Topping', 'ask', 'no', '', 'egg'),
    ] }, {
    cuisine: 'スパイスカレー、月替わりや週替わりの2種に限定も (2025〜2026年の口コミ)・2種あいがけ1,300円 (2026年10月)、自家ブレンドのご飯や長粒米のターメリックライス・最近のカレー: パキスタン風チキン、牛すじの欧風カレー、ソーキのビンダルー、実山椒のキーマ、レモンチキン、トマトチキン、豚骨グリーンカレー、チキンキーマ、生鰹のキーマ、スパイシーチキンとイカ出汁の漆黒カレー (2025〜2026年)・周年のビリヤニ、スパイス卵、ホルモンのトッピング、千葉のパクチー (2025〜2026年)・唐揚げやステーキ、デザート、夜は焼酎、ワイン、カクテル (食べログ、2026年4月)',
    neighborhood: '大宮高辻。四条大宮から332m',
    gf_detail: '要確認。週替わり・月替わりのスパイスカレーとご飯 (キーマ、ビンダルー、イカ墨のカレー、牛すじの欧風カレー)、唐揚げやステーキ。グルテンの情報は公開されていない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。口コミのカレーは鶏、豚、牛、鰹、イカ (口コミ)。',
    notes: '[スパイスカレー・大宮高辻、ひとりで営むカレーのカウンター] 大宮通から路地を入った、清潔でおしゃれなカウンター。淀の旧X.CURRYの店主がひとりで切り盛りする。カレーは週替わり・月替わりで、ソーキのビンダルー、パキスタン風チキン、牛すじの欧風、イカ墨の黒いカレーなど。多くの人は2種あいがけ (1,300円ほど) を。混む時間は気長に。夜は飲みも。火曜休み。',
  });
}

// ================================================================ 自然酒菜 一瞬
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26038857/'; const R = TB + 'dtlrvwlst/';
  const INV = 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=8130001061153';
  const A = day(['11:30', '14:00'], ['17:00', '23:00']); const B = day(['11:30', '14:00'], ['17:00', '23:30']);
  put({
    id: 'kyoto_shizen_shusai_ichishun', name: '自然酒菜 一瞬 (Shizen Shusai Ichishun)', category: 'OMNI',
    lat: 34.98936206787884, lng: 135.75781, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kyoto vegetables and fish — obanzai, tempura, saikyo-grilled fish, lava-stone grills, rice bowls — with no gluten information published; Tabelog lists vegetarian options (Tabelog; reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options and many vegetable dishes from contract farms, but dashi and fish are used throughout (Tabelog; reviews).',
    hours_raw: 'Lunch 11:30–14:00 daily; dinner 17:00–23:00 (Friday and Saturday to 23:30) (Tabelog). Bookings accepted. Otoshi ¥300 (Tabelog). Cards, transport IC, e-money and QR (Tabelog). 74 seats on three floors (lift): an 8-seat counter, tables and party floors for 20–50; non-smoking, with smoking on each floor’s balcony; wheelchair accessible; free Wi-Fi (Tabelog). English-speaking staff (December 2025). On Shichijo-dori west of Karasuma, 472 m from Kyoto Station, after a move (Tabelog; April 2025).',
    hours: { 0: A, 1: A, 2: A, 3: A, 4: B, 5: B, 6: A }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shichijo, west of Karasuma — 472 m from Kyoto Station',
    cuisine: 'Seasonal Kyoto vegetables from contract farms in Yawata (reduced-pesticide or organic) and fish from Kameoka and Yawata, with a lava-stone grill for meat and vegetables (Tabelog) · lunch: daily set ¥1,000 such as simmered mackerel with daikon, buri daikon with cream croquette, beef-tendon doteyaki; tempura bowl with large prawns; "sanbaba" bowl of kara-age, tempura and seafood ¥1,500; obanzai plate of nine vegetable dishes (2025–2026) · dinner: Kujo-leek salad, grilled meat miso with Kujo leek, rock oysters, saikyo-grilled sablefish (2025–2026) · about eight sakes with a tasting set, shochu, Kyoto craft beer (Tabelog; December 2025)',
    website: null, gmaps: gm('自然酒菜 一瞬 七条'), menu_url: TB,
    notes: "[Izakaya · Shichijo near Kyoto Station, Kyoto vegetables and fish] A roomy three-floor izakaya on Shichijo built around Yawata farm vegetables and fish from Kameoka: obanzai, Kujo-leek dishes, saikyo-grilled sablefish and a lava-stone grill, with a sake tasting set. Lunch is a bargain ¥1,000 daily set or a big tempura bowl. English-speaking staff. Open daily; ¥300 otoshi at night.",
    chef_bio: { chef_name: null, roles: ['Chef not named; operated by 万州国際株式会社 (invoice register)'], origin: null,
      background: 'Opened 1 March 2023 at this address (Tabelog); an April 2025 reviewer’s first visit since a move. The qualified-invoice holder 万州国際株式会社 is registered at the shop’s address (NTA). Tabelog’s introduction: seasonal Kyoto vegetables from contracted farmers in Yawata using reduced-pesticide or organic methods, fish from Kameoka and Yawata, a lava-plate grill, craft beer and Kyoto sake.',
      philosophy: null,
      specialty: 'Kyoto vegetables; lava-stone grill.',
      anecdotes: [
        { text: 'A February 2026 pair ordered the grilled meat miso with Kujo leek twice at a ¥14,000 lunch for two.', source: R + 'B523215525/' },
        { text: 'An October 2026 visitor passed up tantanmen next door for a nine-dish obanzai lunch and loved the taro tempura.', source: R + 'B537332383/' },
        { text: 'A December 2025 guest recommended the sake tasting set and wished for more Japanese gin.', source: R + 'B518914049/' },
      ],
      japanese_sources_summary: '食べログ: 自然酒菜 一瞬、居酒屋・日本料理・魚介料理、下京区西境町154 ドリーミー京都1F、京都駅から472m、七条烏丸のバス停から徒歩2分、月火水木日 11:30〜14:00・17:00〜23:00、金土 11:30〜14:00・17:00〜23:30、予約可、突き出し代300円、カード・電子マネー・QR可、74席 (カウンター8、テーブル、2・3階は貸切、エレベーター)、禁煙 (各階のバルコニーで喫煙可)、車椅子可、Wi-Fi、ベジタリアン対応、2023年3月1日オープン、インボイス T8130001061153 (万州国際株式会社、同住所)。公式紹介: 京都八幡の契約農家の減農薬・有機栽培の京野菜、亀岡と八幡の魚、溶岩焼き、クラフトビールと京都の地酒。口コミ (2025〜2026年、英語): 移転後、日替わり定食1,000円 (鯖の煮付けと大根、ぶり大根とクリームコロッケ、牛すじのどて焼き)、海老の大きな天丼、唐揚げ・天ぷら・海鮮の丼1,500円、おばんざい9種、九条ねぎのサラダ、九条ねぎの肉味噌焼き、岩牡蠣、銀鱈の西京焼き、日本酒8種の飲み比べ、英語を話すスタッフ。',
      confidence: 'medium', sources: [TB, INV, R + 'B504154339/', R + 'B504661193/', R + 'B505933108/', R + 'B518914049/', R + 'B521897478/', R + 'B523215525/', R + 'B529833663/', R + 'B530532071/', R + 'B531088094/', R + 'B533637791/', R + 'B536024956/', R + 'B537332383/'] },
    cultural_comfort: { level: 'english', note: 'English-speaking staff (December 2025).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区西境町154 ドリーミー京都 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.989362, 135.757843) moved about 3m west to 135.75781, as kyoto_wine_gura_shiori (西境町158) sits 5m east; cross-checked: GSI 京都府京都市下京区西境町154番地 (lot) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B521897478/', R + 'B505933108/'],
    price_note: 'Prices from 2025–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Daily lunch set', '¥1,000', 'Lunch', 'ask', 'no', 'February 2026.', 'higawari'),
      it('', '', '"Sanbaba" bowl: kara-age, tempura and seafood', '¥1,500', 'Lunch', 'no', 'no', 'April 2025.', 'sanbaba'),
      it('', '', 'Obanzai plate (nine vegetable dishes)', '', 'Lunch', 'ask', 'ask', 'October 2026.', 'obanzai'),
      it('', '', 'Grilled meat miso with Kujo leek', '', 'Dinner', 'ask', 'no', '', 'negi_nikumiso'),
    ] }, {
    cuisine: '八幡の契約農家の減農薬・有機の京野菜と、亀岡や八幡の魚、肉や野菜の溶岩焼き (食べログ)・昼: 鯖と大根の煮付け、ぶり大根とクリームコロッケ、牛すじのどて焼きなどの日替わり定食1,000円、大きな海老の天丼、唐揚げ・天ぷら・海鮮の丼1,500円、野菜9品のおばんざい (2025〜2026年)・夜: 九条ねぎのサラダ、九条ねぎの肉味噌焼き、岩牡蠣、銀鱈の西京焼き (2025〜2026年)・日本酒8種ほどと飲み比べ、焼酎、京都のクラフトビール (食べログ、2025年12月)',
    neighborhood: '七条、烏丸の西。京都駅から472m',
    gf_detail: '要確認。京野菜と魚のおばんざい、天ぷら、西京焼き、溶岩焼き、丼。グルテンの情報は公開されていない。食べログではベジタリアン対応 (食べログ、口コミ)。',
    vegan_detail: '要確認。食べログではベジタリアン対応で、契約農家の野菜料理が多いが、出汁や魚を広く使う (食べログ、口コミ)。',
    notes: '[居酒屋・京都駅近くの七条、京野菜と魚] 七条通の3階建ての広い居酒屋。八幡の農家の野菜と亀岡の魚を軸に、おばんざい、九条ねぎの料理、銀鱈の西京焼き、溶岩焼き、日本酒の飲み比べ。昼は1,000円の日替わり定食や大きな天丼がお得。英語を話すスタッフ。無休、夜は突き出し300円。',
  });
}

// ================================================================ TSUMU CAFE
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26034621/'; const R = TB + 'dtlrvwlst/';
  const IG = 'https://www.instagram.com/tsumucafe_kyoto/'; const PR = 'https://koubo.jp/press-release/prtimes/c102813_r21';
  const WD = day(['08:00', '18:00']); const WE = day(['08:00', '19:00']);
  put({
    id: 'kyoto_tsumu_cafe', name: 'TSUMU CAFE', category: 'OMNI',
    lat: 34.987370277881496, lng: 135.76222186018265, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Toasts, granola, cakes, cookies, financiers and gelato; no gluten information is published (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: butter and egg toasts, cheesecake, dairy gelato and lattes (reviews).',
    hours_raw: 'Monday–Friday 8:00–18:00 (last order 17:30); Saturday, Sunday and holidays 8:00–19:00 (last order 18:30); closed New Year’s Day (Tabelog). No reservations (Tabelog). Cards, transport IC, iD and QUICPay; no QR codes (Tabelog). 28 seats with sofas, high counters, a terrace (dogs allowed there, non-smoking), power outlets and free Wi-Fi; wheelchair accessible; English menu (Tabelog; September 2026). Several 2026 reviewers note many foreign visitors from opening (July–October 2026). 5 min walk from the Karasuma exit of Kyoto Station (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kyoto Station, Karasuma exit side — 5 min walk',
    cuisine: 'All-day café from 8 a.m. (Tabelog) · signature Green Tea Latte Presso, layered espresso, milk and matcha; a monthly menu (Tabelog) · toasts: honey butter ¥600, avocado and basil, banana, cheese with a hidden soft-boiled egg; caprese salad; granola and yogurt (2026 reviews) · Basque cheesecake ¥700; double gelato ¥950 (pistachio, salted caramel); cookies and financiers to take away (2026) · café latte ¥650, Kochi yuzu tea ¥600, bergamot peach tea, yuzu soda (2026)',
    website: IG, gmaps: gm('TSUMU CAFE 京都駅'), menu_url: IG,
    notes: "[Café · Kyoto Station, Karasuma side, breakfast to gelato] A big, airy café five minutes from Kyoto Station (formerly tsumugi cafe), open from 8:00 with sofas, a dog-friendly terrace and outlets at every seat. Come for toast breakfasts, the three-layer matcha-espresso latte, Basque cheesecake or a double gelato (about ¥600–1,000). Busy from morning; no bookings.",
    chef_bio: { chef_name: null, roles: ['Operated by 株式会社レ・コネクション (representative 奥田久雄; press release)'], origin: null,
      background: 'Opened 29 August 2020 (Tabelog), formerly named tsumugi cafe (September 2026 review). Per a February 2025 press release: run by 株式会社レ・コネクション of Shimogyo, Kyoto, which deals in real estate and runs lodging and food businesses; the café hosted an art student’s exhibition beside the register and has done collaborations such as a Ninna-ji drink. An October 2026 reviewer notes a hotel above.',
      philosophy: null,
      specialty: 'Green Tea Latte Presso.',
      anecdotes: [
        { text: 'A July 2026 breakfast guest found two groups ahead at 9:00 and the avocado-basil toast tasty but small for the price.', source: R + 'B531683911/' },
        { text: 'An August 2026 visitor avoids the dangling-leg high counter chairs and was glad to get a sofa.', source: R + 'B534017419/' },
        { text: 'An October 2026 diner found a soft-boiled egg hidden under the melted cheese on the toast.', source: R + 'B537376912/' },
      ],
      japanese_sources_summary: '食べログ: TSUMU CAFE、カフェ、下京区東塩小路町684、京都駅から徒歩約5分、平日 8:00〜18:00 (L.O. 17:30、2025年7月17日から)、土日祝 8:00〜19:00 (L.O. 18:30)、元日休み、予約不可、カード・電子マネー可、QR不可、28席、電源、テラス (ペットはテラスのみ、禁煙)、Wi-Fi、車椅子可、英語メニュー、2020年8月29日オープン、インボイス T4130001057262 (株式会社レ・コネクション)。公式紹介: 京都駅烏丸口すぐ、2020年夏オープン、看板の「グリーンティーラテプレッソ」(エスプレッソ・ミルク・抹茶の3層)、月替わりのメニュー。プレスリリース (2025年2月): 京都市内で不動産売買や飲食施設の管理運営を行う株式会社レ・コネクション (代表取締役 奥田久雄) の運営する「tsumugi cafe」、宿泊施設の企画・販売・運営・飲食事業、所在地 東塩小路町684番地 1F。口コミ (2026年、英語): 旧名 tsumugi cafe、ハニーバタートースト600円、アボカドとバジルのトースト、バナナトースト、半熟卵入りのチーズトースト、カプレーゼ、グラノーラ、バスクチーズケーキ700円、ジェラートのダブル950円、クッキー、フィナンシェ、カフェラテ650円、高知の柚子茶600円、ベルガモットピーチティー、外国人客が多い (複数の口コミ)、上にホテル。',
      confidence: 'medium', sources: [TB, IG, PR, R + 'B531683911/', R + 'B532326043/', R + 'B532990854/', R + 'B534017419/', R + 'B534339355/', R + 'B535037164/', R + 'B535583325/', R + 'B535901363/', R + 'B536326467/', R + 'B536781648/', R + 'B537376912/', R + 'B537697632/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); many international visitors per several 2026 reviews.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区東塩小路町684 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.98737, 135.762222); cross-checked: GSI 京都府京都市下京区東塩小路町684番地 (lot) 74m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532326043/', R + 'B535901363/', R + 'B532990854/'],
    price_note: 'Prices from July–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Honey butter toast', '¥600', 'Food', 'no', 'no', 'July 2026.', 'honey_toast'),
      it('', '', 'Basque cheesecake', '¥700', 'Sweets', 'ask', 'no', 'September 2026.', 'basque'),
      it('', '', 'Double gelato', '¥950', 'Sweets', 'ask', 'no', 'July 2026.', 'gelato'),
      it('', '', 'Café latte', '¥650', 'Drink', 'gf', 'no', 'September 2026.', 'latte'),
      it('', '', 'Green Tea Latte Presso', '', 'Drink', 'gf', 'no', 'Signature (Tabelog).', 'latte_presso'),
    ] }, {
    cuisine: '朝8時からのカフェ (食べログ)・看板はエスプレッソ、ミルク、抹茶の3層のグリーンティーラテプレッソ、月替わりのメニュー (食べログ)・トースト: ハニーバター600円、アボカドとバジル、バナナ、半熟卵を隠したチーズ、カプレーゼ、グラノーラとヨーグルト (2026年の口コミ)・バスクチーズケーキ700円、ジェラートのダブル950円 (ピスタチオ、塩キャラメル)、持ち帰りのクッキーとフィナンシェ (2026年)・カフェラテ650円、高知の柚子茶600円、ベルガモットピーチティー、柚子ソーダ (2026年)',
    neighborhood: '京都駅、烏丸口側。徒歩5分',
    gf_detail: '要確認。トースト、グラノーラ、ケーキ、クッキー、フィナンシェ、ジェラート。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: 'ヴィーガン不可。バターや卵のトースト、チーズケーキ、乳製品のジェラートとラテ (口コミ)。',
    notes: '[カフェ・京都駅烏丸口側、朝食からジェラートまで] 京都駅から徒歩5分の広く明るいカフェ (旧 tsumugi cafe)。朝8時から、ソファ、ペット可のテラス、全席に電源。トーストの朝食、3層の抹茶エスプレッソラテ、バスクチーズケーキ、ジェラートのダブル (600〜1,000円ほど)。朝からにぎわう。予約不可。',
  });
}

// ================================================================ 鯖街道 花折 下鴨店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26001753/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.hanaore.co.jp/';
  const WD = day(['10:00', '17:00']); const WE = day(['10:00', '18:00']);
  put({
    id: 'kyoto_saba_kaido_hanaore_shimogamo', name: '鯖街道 花折 下鴨店 (Saba Kaido Hanaore Shimogamo)', category: 'OMNI',
    lat: 35.03328788785497, lng: 135.77049020064064, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Pressed mackerel sushi — regular, seared, kombu-wrapped — with vinegared rice, tsukudani and clear soup; no gluten information is published (official site; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: mackerel, sea bream, eel and conger sushi (official site).',
    hours_raw: '10:00–17:00 Monday–Friday, 10:00–18:00 Saturday and Sunday (Tabelog); the official site says the shop and workshop close every Wednesday and on the 1st and 3rd Tuesday. Eat-in until 15:30 (June 2026). Takeaway and online orders (official site). Bookings accepted. Cards, transport IC, iD, QUICPay and QR (Tabelog). 16 seats: three tables for four and a short counter, with a tatami area; non-smoking (Tabelog). A May 2026 reviewer found no working restroom; a June 2026 reviewer describes one off a courtyard. Near the Shimogamo Shrine entrance, 10 min walk from Demachiyanagi Stn (Tabelog; September 2026).',
    hours: { 0: WD, 1: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shimogamo, by the shrine entrance — 10 min walk from Demachiyanagi Stn',
    cuisine: 'Saba-zushi from one-salted mackerel by a traditional method, at the Kyoto end of the old Mackerel Road (official site; reviews) · to eat in: Tomoe-zen with two pieces each of regular, seared and kombu-wrapped saba-zushi ¥2,700 (April 2026); Hanaore-zen of regular and seared; seared saba-zushi set; each with vinegared vegetables, tsukudani, karasumi and clear soup (2025–2026 reviews) · to take away (official site): saba-zushi ¥5,670, premium ¥7,560, select ¥10,530; 龍飛巻 ¥5,940; 巴巻 ¥5,400; seared saba ¥3,780; Kyo saba-zushi ¥3,650; guji (amadai) ¥8,000; eel ¥7,500; seared conger ¥2,980',
    website: SITE, gmaps: gm('鯖街道 花折 下鴨店'), menu_url: SITE,
    notes: "[Saba-zushi · Shimogamo Shrine, the end of the Mackerel Road] The shop and dining room of a saba-zushi maker by the gate of Shimogamo Shrine, where the old Mackerel Road from the Japan Sea ends: thick slabs of lightly salted mackerel on mellow vinegared rice. Eat in until 15:30 — the Tomoe-zen of three styles is about ¥2,700 — or take a whole roll home (from about ¥3,650). Closed Wednesday and the 1st and 3rd Tuesday.",
    chef_bio: { chef_name: null, roles: ['Makers not named'], origin: null,
      background: 'Per the official site: Saba Kaido Hanaore keeps to one-salted mackerel and a handed-down method; the Shimogamo shop and its workshop close on Wednesdays and the 1st and 3rd Tuesday; online sales of saba, guji, eel and conger sushi. Reviewers (2025–2026) note the shop sits near the Shimogamo end of the Saba Kaido.',
      philosophy: 'Per the official site: care over one-salted mackerel and keeping to the traditional method.',
      specialty: 'Saba-zushi.',
      anecdotes: [
        { text: 'An April 2026 repeat visitor called it a favourite place in Kyoto for the thick mackerel and melting rice of the Tomoe-zen.', source: R + 'B497476931/' },
        { text: 'A September 2025 diner from Kyushu learned that Mackerel Road fish once ended its journey in Shimogamo.', source: R + 'B514287677/' },
        { text: 'An April 2026 book-club guest found the older ladies serving efficient and pleasant.', source: R + 'B527864978/' },
      ],
      japanese_sources_summary: '公式サイト (hanaore.co.jp): 一汐のサバにこだわり伝承の製法を守りつづける鯖街道 花折、下鴨店・工房とも毎週水曜日のほか第一・第三火曜日が定休、吟撰鯖寿し10,530円、上鯖寿し7,560円、鯖寿し5,670円、龍飛巻鯖寿し5,940円、巴巻5,400円、鯖あぶり寿し3,780円、京鯖寿し3,650円、ぐじ (甘鯛) 寿し8,000円、うなぎ寿し7,500円、炙り穴子寿し2,980円、お歳暮のセット、ネット注文。食べログ: 日本料理・寿司、左京区下鴨宮崎町121、出町柳駅から徒歩10分、新葵橋のバス停、月〜金 10:00〜17:00、土日 10:00〜18:00、予約可、カード・電子マネー・QR可、16席 (4人掛け3卓、カウンター)、座敷、禁煙、テイクアウト。口コミ (2025〜2026年、英語): 巴膳2,700円 (鯖寿し・炙り・昆布巻き各2切れ)、花折膳、炙り鯖寿しのセット、酢の物、佃煮、からすみ、すまし汁、イートインは15時半まで、下鴨神社のそば、鯖街道の終点。',
      confidence: 'medium', sources: [TB, SITE, R + 'B497476931/', R + 'B510230549/', R + 'B514063463/', R + 'B514287677/', R + 'B524889084/', R + 'B527864978/', R + 'B529467598/', R + 'B530794175/', R + 'B530855860/', R + 'B535820243/', R + 'B536264699/', R + 'B536590480/'] },
    cultural_comfort: { level: 'japanese', note: 'Small dining room; takeaway counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区下鴨宮崎町121',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with a current closing-day notice and seasonal sets; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.033288, 135.77049); cross-checked: GSI 京都府京都市左京区下鴨宮崎町121番地 (lot) 58m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE, R + 'B497476931/'],
    price_note: 'Takeaway prices from the official online shop; eat-in price from an April 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Tomoe-zen: regular, seared and kombu-wrapped saba-zushi (eat-in)', '¥2,700', 'Eat-in', 'ask', 'no', 'April 2026.', 'tomoe_zen'),
      it('鯖寿し', '', 'Saba-zushi (whole roll, takeaway)', '¥5,670', 'Takeaway', 'ask', 'no', '', 'saba_zushi'),
      it('鯖あぶり寿し', '', 'Seared saba-zushi (takeaway)', '¥3,780', 'Takeaway', 'ask', 'no', '', 'aburi'),
      it('京鯖寿し', '', 'Kyo saba-zushi (takeaway)', '¥3,650', 'Takeaway', 'ask', 'no', '', 'kyo_saba'),
      it('ぐじ（甘鯛）寿し', '', 'Guji (tilefish) sushi (takeaway)', '¥8,000', 'Takeaway', 'ask', 'no', '', 'guji'),
    ] }, {
    cuisine: '旧鯖街道の京都側の終点で、一汐の鯖を伝承の製法で仕上げる鯖寿し (公式サイト、口コミ)・店内: 鯖寿し・炙り・昆布巻きが2切れずつの巴膳2,700円 (2026年4月)、鯖と炙りの花折膳、炙り鯖寿しのセット、酢の物、佃煮、からすみ、すまし汁付き (2025〜2026年の口コミ)・持ち帰り (公式サイト): 鯖寿し5,670円、上7,560円、吟撰10,530円、龍飛巻5,940円、巴巻5,400円、鯖あぶり寿し3,780円、京鯖寿し3,650円、ぐじ (甘鯛) 8,000円、うなぎ7,500円、炙り穴子2,980円',
    neighborhood: '下鴨、神社の入口のそば。出町柳駅から徒歩10分',
    gf_detail: '要確認。鯖の押し寿し (鯖、炙り、昆布巻き) と酢飯、佃煮、すまし汁。グルテンの情報は公開されていない (公式サイト、口コミ)。',
    vegan_detail: 'ヴィーガン不可。鯖、甘鯛、うなぎ、穴子の寿し (公式サイト)。',
    notes: '[鯖寿し・下鴨神社、鯖街道の終点] 日本海からの鯖街道が終わる下鴨神社の門前の、鯖寿し店の店舗と食事処。厚い一汐の鯖にまろやかな酢飯。店内は15時半まで、3種の巴膳は2,700円ほど、1本を持ち帰りも (3,650円ほどから)。水曜と第1・第3火曜休み。',
  });
}

save();
