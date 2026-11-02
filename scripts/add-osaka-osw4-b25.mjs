// Osaka sweep (2-mile circle around Dotonbori), core phase backlog, lane id mod 4 = 3; worker osw4, batch 25.
//   + cafe&dinner encontre (café by day, Italian dinner bar, Minami-Senba)
//   + 鉄板焼 MYDO Teppanyaki MYDO (teppanyaki with Osaka soul food, W Osaka 1F)
//   + モージョー MoeJoe (basement café-bar of kara-age lunches and French toast, Minami-Senba)
//   + 珍八香 Chako (local Chinese set-meal restaurant, Senba Center Building No. 9 B2F)
//   - 27113815 ベアフット カリー: branch of ベアフット カリー, already in data (osaka_barefoot_curry_links_umeda).
//   Chain check: encontre, MoeJoe and Chako — one shop found each (search results). MYDO is W Osaka's own teppanyaki
//   room (ikyu), like Oh.lala... (osaka_ohlala_w_osaka). None of the four is in data/osaka.json (grep by name,
//   Tabelog id and address, 2026-11-02).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw4-25');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27113815', 'branch of a brand in data: ベアフット カリー (osaka_barefoot_curry_links_umeda)');

// ================================================================ encontre
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27129111/'; const R = TB + 'dtlrvwlst/';
  const SH = day(['11:00', '18:00']), LG = day(['11:00', '22:30']);
  put({
    id: 'osaka_cafe_dinner_encontre_minamisenba', name: 'cafe&dinner encontre', category: 'OMNI',
    lat: 34.675779, lng: 135.498726, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Lunch plates come with rice and soup; the café menu is tarts, pudding, Basque cheesecake and French toast, and dinner is homemade pizza and pasta.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options; there is a quinoa salad bowl (October 2026), but most dishes use chicken, meat, dairy or eggs.',
    hours_raw: 'Tue–Sat and the days before and after holidays 11:00–22:30 (last order 22:00); Mon, Sun and holidays 11:00–18:00 (last order 17:30); closed New Year\'s Day (Tabelog). Reservations accepted, phone 10:00–21:00; lunch bookable on holidays (July 2026). Cards (VISA, Master, JCB, AMEX, Diners) and PayPay; no e-money (Tabelog). 50 seats at sofas and tables; a separate smoking space; stroller-friendly layout (Tabelog; September 2026).',
    hours: { 0: SH, 1: LG, 2: LG, 3: LG, 4: LG, 5: LG, 6: SH }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Minami-Senba 4-12-24, 現代心斎橋ビル 1F — 3 min from Shinsaibashi and Yotsubashi Stns',
    cuisine: 'Café by day and Italian dinner bar by night: homemade pizza and pasta, all-you-can-drink courses, specialty coffee and chamomile tea (Tabelog shop text) · weekday dinner "Primo" set with pizza or pasta ¥2,800 (Tabelog) · lunch plates: herb-grilled domestic chicken with wakame soup (June 2026), taco rice (August–September 2026), bulgogi plate (August 2026), quinoa and steamed-chicken salad bowl with Italian, Cobb or Caesar dressing (October 2026), fresh pasta and hamburg (September 2026) · café: whole-peach tart ¥1,200 with organic Earl Grey ¥600 (July 2026), grape tart (October 2026), pudding with Uji matcha latte (April 2026), French toast (July 2026), Basque cheesecake (September 2026)',
    website: null, gmaps: gm('cafe&dinner encontre 南船場'), menu_url: null,
    notes: '[Café · Minami-Senba, lunch plates and fruit tarts] A spacious wood-and-sofa café near Shinsaibashi that serves lunch plates and seasonal fruit tarts by day and becomes an Italian bar at night. Try the taco rice or the herb-grilled chicken plate at lunch, and a whole-peach or grape tart in the afternoon (¥1,200 in July 2026). It fills quickly after 11:00; book lunch. Reviews in September 2026 note one burnt cheesecake and some uneven lunch service.',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per the Tabelog shop listing (corporate member): a café and Italian dinner bar with specialty coffee; private hire with projector and microphone.', philosophy: null, specialty: 'Seasonal fruit tarts; lunch plates.',
      anecdotes: [
        { text: '"While I was waiting in front of the restaurant for my friend, a staff member kindly asked, \'Would you like to wait inside?\'" — June 2026, a rainy Saturday.', source: R + 'B530313555/' },
        { text: '"When I visited just after 11 AM, it was relatively empty, but soon after, it filled up quickly and was almost at full capacity." — September 2026.', source: R + 'B536197578/' },
        { text: '"It looks normal in the photo, but it was really overcooked, and the burnt parts were bitter" — September 2026, the Basque cheesecake.', source: R + 'B535863767/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): cafe&dinner encontre、カフェ・イタリアン・バル、大阪市中央区南船場4-12-24 現代心斎橋ビル 1F、心斎橋駅・四ツ橋駅から徒歩3分、火〜土・祝前日・祝後日11:00〜22:30 (L.O. 22:00)、月・日・祝11:00〜18:00 (L.O. 17:30)、元日休み、予約可 (電話は10:00〜21:00)、カード・PayPay 可、電子マネー不可、50席、分煙、ベジタリアン対応の表示。手作りのピザとパスタ、飲み放題のコース、スペシャルティコーヒー、平日夜の Primo のセット2,800円。口コミ(2026年4月〜10月): 国産鶏のハーブ焼きのプレート、タコライス、プルコギのプレート、キヌアと蒸し鶏のサラダボウル、桃まるごとのタルト1,200円、ぶどうのタルト、プリン、フレンチトースト、バスクチーズケーキ、昼はすぐ満席、焦げたチーズケーキの声、昼の接客が不慣れという声も。',
      confidence: 'medium', sources: [TB, R + 'B512944126/', R + 'B524133699/', R + 'B525839369/', R + 'B527118086/', R + 'B530313555/', R + 'B531779598/', R + 'B531805208/', R + 'B534346634/', R + 'B534825159/', R + 'B535295055/', R + 'B535863767/', R + 'B535892387/', R + 'B536197578/', R + 'B536356254/', R + 'B537678205/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Café with a plate-lunch menu; spacious and stroller-friendly (September 2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場4-12-24 現代心斎橋ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場四丁目12番24号 (go) 16m. No record within 30 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B531805208/', TB],
    price_note: 'Café prices from a July 2026 review; dinner set from the Tabelog listing.', last_checked: TODAY, items: [
      it('', '', 'Whole-peach tart (seasonal)', '¥1,200', 'Café', 'no', 'no', 'July 2026 review.', 'peach_tart'),
      it('', '', 'Organic Earl Grey', '¥600', 'Drinks', 'ask', 'ask', 'July 2026 review.', 'earl_grey'),
      it('', '', 'Taco rice (lunch)', '', 'Lunch', 'ask', 'no', 'August–September 2026 reviews.', 'taco_rice'),
      it('', '', 'Weekday dinner Primo set (pizza or pasta)', '¥2,800', 'Dinner', 'no', 'ask', 'Tabelog listing.', 'primo_set'),
    ] }, {
    cuisine: '昼はカフェ、夜はイタリアンのバル: 手作りのピザとパスタ、飲み放題のコース、スペシャルティコーヒーとカモミールティー (食べログの店の紹介)・平日夜のピザかパスタを選ぶ「Primo」のセット2,800円 (食べログ)・昼のプレート: わかめスープつきの国産鶏のハーブ焼き (2026年6月)、タコライス (2026年8〜9月)、プルコギのプレート (2026年8月)、イタリアン・コブ・シーザーから選ぶドレッシングのキヌアと蒸し鶏のサラダボウル (2026年10月)、生パスタとハンバーグ (2026年9月)・カフェ: 桃まるごとのタルト1,200円とオーガニックのアールグレイ600円 (2026年7月)、ぶどうのタルト (2026年10月)、プリンと宇治抹茶ラテ (2026年4月)、フレンチトースト (2026年7月)、バスクチーズケーキ (2026年9月)',
    neighborhood: '南船場4-12-24 現代心斎橋ビル 1F。心斎橋駅・四ツ橋駅から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。昼のプレートはご飯とスープつき、カフェはタルト、プリン、バスクチーズケーキ、フレンチトースト、夜は手作りのピザとパスタ。',
    vegan_detail: '要確認。食べログにはベジタリアン対応とあり、キヌアのサラダボウルもある (2026年10月) が、ほとんどの料理は鶏、肉、乳製品、卵を使う。',
    notes: '[カフェ・南船場、昼のプレートと果物のタルト] 心斎橋近くの広々とした木とソファのカフェで、昼はプレートランチと季節の果物のタルト、夜はイタリアンのバルに。昼はタコライスか国産鶏のハーブ焼きのプレート、午後は桃まるごとやぶどうのタルトを (2026年7月は1,200円)。11時を過ぎるとすぐ埋まるので、昼は予約を。2026年9月にはチーズケーキが焦げていた、昼の接客にむらがあるという声も。',
  });
}

// ================================================================ 鉄板焼 MYDO
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27121707/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:00'], ['17:30', '22:00']);
  put({
    id: 'osaka_teppanyaki_mydo_w_osaka', name: '鉄板焼 MYDO (Teppanyaki MYDO)', category: 'OMNI',
    lat: 34.677647, lng: 135.499903, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Courses mix teppan steak and seafood with Osaka dishes such as kushikatsu, akashiyaki, okonomiyaki, yakisoba and Napolitan; the shop asks guests to note allergies when booking (Tabelog).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options; the standard courses are wagyu, lobster and abalone, and nothing is described as vegan.',
    hours_raw: 'Daily 11:30–15:00 (last food order 14:00) and 17:30–22:00 (last food order 20:00, drinks 21:00); open year-round (Tabelog). Reservations accepted; note allergies and dislikes when booking; seat-only bookings wait while ingredients are prepared (Tabelog). Service charge 15%, no cover (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR payment (Tabelog). 38 seats at counters in three areas (14, 8, 8) and a private teppan room for 8 (room fee ¥66,000 below ¥235,000 total); non-smoking; children under 12 at lunch only; smart casual (Tabelog). Valet parking ¥1,500 an hour, free with spend (Tabelog). Bills can go on a W Osaka room (September 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Minami-Senba 4-1-3, W Osaka 1F, on Midosuji — 3 min from Shinsaibashi Stn exit 3',
    cuisine: 'Teppanyaki in W Osaka in three themed counter areas: LUXE for premium teppanyaki, FUN for Osaka soul food, and KAPPO; courses of kuroge wagyu, seasonal vegetables and seafood at lunch and dinner (Tabelog shop text) · weekday lunch course ¥5,500 with domestic lean beef, okonomiyaki and spaghetti Napolitan (September 2026) · OKINI course at lunch with steak, abalone, meat soup and okonomiyaki (October 2026) · SENBA course with lobster and wine pairing (October 2026) · LIMITLESS LUXE course with Ise lobster, abalone and kuroge wagyu, over ¥50,000 a head (August 2026) · Dassai pairing course (October 2026) · skewers, gyoza, sirloin, abalone, okonomiyaki and yakisoba (May 2026); salad in a crepe, okonomiyaki or Napolitan as main (May 2026) · sanma pincho, chilled corn potage, cold noodles (September 2026) · strip loin and fillet with fresh pepper, dorayaki for dessert (September 2026) · creative kushikatsu and akashiyaki (August 2026)',
    website: null, gmaps: gm('鉄板焼 MYDO W大阪'), menu_url: null,
    notes: '[Teppanyaki · Shinsaibashi, W Osaka\'s playful Osaka teppan] W Osaka\'s ground-floor teppanyaki, named after the Osaka greeting "maido", where wagyu, lobster and abalone come alongside teppan versions of Osaka street food like okonomiyaki, kushikatsu and akashiyaki. The weekday lunch course at ¥5,500 is the easy way in; dinner courses run to ¥30,000–50,000+ plus 15% service. Smart casual; children under 12 at lunch only. One August 2026 diner found the top course lacked impact for the price.',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per the Tabelog listing and ikyu: the teppanyaki restaurant on the 1st floor of W Osaka, with LUXE, FUN and KAPPO areas; the name reportedly comes from the Osaka greeting "maido" (May 2026 review); interior by designer Yasumichi Morita and art by Seitaro Kuroda (search result).', philosophy: null, specialty: 'Teppan wagyu with Osaka soul food.',
      anecdotes: [
        { text: '"Is this really it!? You can enjoy so much for just JPY 5500! This weekday-only lunch course includes domestic lean meat, okonomiyaki, and spaghetti napolitan." — September 2026.', source: R + 'B536994722/' },
        { text: '"Considering the price of over JPY 50,000 per person, I didn\'t feel a strong sense of excitement or uniqueness in the dishes themselves." — August 2026, the LIMITLESS LUXE course.', source: R + 'B536378254/' },
        { text: '"I was pleasantly surprised to find okonomiyaki on the menu at a teppanyaki restaurant." — September 2026, a hotel guest.', source: R + 'B536621544/' },
      ],
      japanese_sources_summary: '食べログ: 鉄板焼 MYDO、鉄板焼き・ステーキ、大阪市中央区南船場4-1-3 W大阪 1F、心斎橋駅3番出口から徒歩3分、毎日11:30〜15:00 (料理 L.O. 14:00)、17:30〜22:00 (料理 L.O. 20:00、ドリンク L.O. 21:00)、年中無休、予約可 (アレルギーや苦手なものは備考に)、サービス料15%、チャージなし、カード可、電子マネー・QR 決済不可、38席 (3つのエリアのカウンター)、8名の個室、禁煙、12歳未満は昼のみ、スマートカジュアル、バレーパーキング。LUXE、FUN、KAPPO の3つのエリア、黒毛和牛、季節の野菜、魚介のコース。口コミ(2026年5月〜10月): 店名は大阪弁の「まいど」からという声、平日のランチコース5,500円 (国産の赤身、お好み焼き、ナポリタン)、OKINI のコース、SENBA のコース、LIMITLESS LUXE のコースは5万円以上、Dassai のペアリング、串カツ、明石焼き、お好み焼き、焼きそば、伊勢えび、あわび、どら焼き、値段ほどの驚きはないという声も。',
      confidence: 'medium', sources: [TB, 'https://restaurant.ikyu.com/116596/', R + 'B528856694/', R + 'B528888914/', R + 'B529688180/', R + 'B529735365/', R + 'B533253690/', R + 'B533373123/', R + 'B534247460/', R + 'B535857006/', R + 'B536378254/', R + 'B536621544/', R + 'B536994722/', R + 'B537331649/', R + 'B537500079/', R + 'B537679383/', R + 'B538432388/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Hotel restaurant used by W Osaka guests; chefs explain each dish (August 2026). No English evidence on Tabelog.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['The shop asks guests to note allergies and dislikes when booking (Tabelog).'] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場4-1-3 W大阪 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and ikyu page; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場四丁目1番3号 (go) 30m (building point, shared with Oh.lala... osaka_ohlala_w_osaka, 3F). No record within 30 m of the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536994722/', R + 'B536378254/', TB],
    price_note: 'Course prices from August–September 2026 reviews; 15% service extra.', last_checked: TODAY, items: [
      it('', '', 'Weekday lunch course (domestic lean beef, okonomiyaki, Napolitan)', '¥5,500', 'Lunch', 'no', 'no', 'September 2026 review.', 'weekday_lunch'),
      it('', '', 'OKINI course (lunch)', '', 'Course', 'no', 'no', 'October 2026 review.', 'okini_course'),
      it('', '', 'SENBA course', '', 'Course', 'ask', 'no', 'October 2026 review.', 'senba_course'),
      it('', '', 'LIMITLESS LUXE course (Ise lobster, abalone, kuroge wagyu)', 'over ¥50,000', 'Course', 'ask', 'no', 'August 2026 review.', 'limitless_luxe'),
    ] }, {
    cuisine: 'W大阪の鉄板焼きで、カウンターは3つのエリア: 上質な鉄板焼きの LUXE、大阪のソウルフードの FUN、KAPPO。昼も夜も黒毛和牛、季節の野菜、魚介のコース (食べログの店の紹介)・平日のランチコース5,500円、国産の赤身、お好み焼き、ナポリタン (2026年9月)・昼の OKINI のコースにステーキ、あわび、肉のスープ、お好み焼き (2026年10月)・ロブスターとワインのペアリングの SENBA のコース (2026年10月)・伊勢えび、あわび、黒毛和牛の LIMITLESS LUXE のコースはひとり5万円以上 (2026年8月)・Dassai のペアリングのコース (2026年10月)・串、餃子、サーロイン、あわび、お好み焼き、焼きそば (2026年5月)、クレープで巻いたサラダ、メインはお好み焼きかナポリタン (2026年5月)・さんまのピンチョス、冷たいコーンポタージュ、冷麺 (2026年9月)・挽きたてのこしょうのロースとフィレ、デザートのどら焼き (2026年9月)・創作の串カツと明石焼き (2026年8月)',
    neighborhood: '南船場4-1-3 W大阪 1F、御堂筋沿い。心斎橋駅3番出口から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。コースは鉄板のステーキと魚介に、串カツ、明石焼き、お好み焼き、焼きそば、ナポリタンなど大阪の料理。アレルギーは予約時に備考へ (食べログ)。',
    vegan_detail: '要確認。食べログにはベジタリアン対応とあるが、ふつうのコースは和牛、ロブスター、あわびで、ヴィーガンの説明はない。',
    notes: '[鉄板焼き・心斎橋、W大阪の遊び心のある大阪の鉄板] W大阪の1階の鉄板焼きで、店名は大阪の「まいど」から。和牛、ロブスター、あわびに、お好み焼き、串カツ、明石焼きなど大阪の味を鉄板で。入りやすいのは平日の5,500円のランチコース、夜のコースは3万〜5万円以上にサービス料15%。スマートカジュアル、12歳未満は昼のみ。2026年8月には上のコースが値段ほどの驚きはないという声も。',
  });
}

// ================================================================ MoeJoe
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27084963/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:30', '23:00']), WE = day(['11:30', '18:00']);
  put({
    id: 'osaka_moejoe_minamisenba', name: 'モージョー (MoeJoe)', category: 'OMNI',
    lat: 34.67746, lng: 135.498819, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Lunch sets centre on kara-age with sauces, and the café menu is French toast and croffles.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: kara-age, hamburg and A5 wagyu are the mainstays, and lunch sets come with miso soup.',
    hours_raw: 'Mon–Fri 11:30–23:00 (lunch 11:30–17:00, café 14:00–23:00, dinner 18:00–23:00, last order 22:30); Sat, Sun and holidays 11:30–18:00 (lunch 11:30–18:00, café 14:00–18:00); closed irregularly (Tabelog). Call ahead to book dinner (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), e-money, PayPay, d Barai and au PAY (Tabelog). 26 seats in a basement with a semi-private room for 6; smoking allowed (Tabelog; May 2024). A steep staircase without handrails (November 2024). Pancakes discontinued (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Minami-Senba 4-10-29, さつきビル B1F — 4 min from Shinsaibashi Stn',
    cuisine: 'Basement café and meat bar: A5 kuroge wagyu and rare cuts at dinner, about 50 cocktails, a monthly seasonal dinner menu, all-you-can-drink courses; signature "secret" French toast (Tabelog shop text) · lunch sets about ¥1,000 with soup, salad and a drink: "serious" kara-age with yuzu pepper or grated daikon and ponzu (October 2025), kara-age with nikujaga (October 2025), shrimp kara-age set with shrimp mayo and two obanzai (February 2026), hamburg steak set ¥1,100 with miso soup (September 2025), kara-age with pink tartar (January 2025) · café: Oreo croffle, tiramisu croffle (March 2026); "secret French toast" (July 2026) · Satisfaction Course with all-you-can-drink (August 2026) · iced coffee ¥500 (March 2024)',
    website: null, gmaps: gm('モージョー 南船場'), menu_url: null,
    notes: '[Café and meat bar · Minami-Senba, kara-age lunches and French toast] A basement café-bar near Shinsaibashi serving kara-age lunch sets with soup and a drink for about ¥1,000, French toast and croffles in the afternoon, and wagyu and cocktails at night (weekdays only). Smoking is allowed inside, and the stairs down are steep. Dinner by phone booking.',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per the Tabelog listing: a basement café, bar and meat bar with a woody interior; dinner menu changes monthly.', philosophy: null, specialty: 'Kara-age lunch sets; secret French toast.',
      anecdotes: [
        { text: '"A rare smoking-friendly spot in Osaka\'s Shinsaibashi, offering both smoking and non-smoking areas!" — March 2024.', source: R + 'B482194280/' },
        { text: '"The underground \'MoeJoe\' is a bit intimidating with its steep staircase lacking handrails, especially when carrying large bags." — November 2024.', source: R + 'B495221092/' },
        { text: '"The illustrations on the hand towels were handmade and adorable!" — August 2026, the Satisfaction Course.', source: R + 'B534540368/' },
      ],
      japanese_sources_summary: '食べログ: モージョー、バル・イタリアン・カフェ、大阪市中央区南船場4-10-29 さつきビル B1F、心斎橋駅から徒歩4分、月〜金11:30〜23:00 (ランチ11:30〜17:00、カフェ14:00〜23:00、ディナー18:00〜23:00、L.O. 22:30)、土日祝11:30〜18:00、不定休、夜は電話で予約を、カード・電子マネー・QR 決済可、26席、半個室6名、喫煙可、パンケーキは終了。A5の黒毛和牛と希少部位、カクテル約50種、毎月の季節のメニュー、飲み放題のコース、名物の「secret」フレンチトースト。口コミ(2024年3月〜2026年8月): 1,000円ほどのランチセット (スープ、サラダ、飲み物つき)、「Serious」の唐揚げ、肉じゃがと唐揚げ、えび唐揚げとエビマヨ、ハンバーグ定食1,100円、ピンクのタルタル、オレオのクロッフル、ティラミスのクロッフル、Satisfaction コース、手すりのない急な階段、店内で喫煙可。',
      confidence: 'medium', sources: [TB, R + 'B201283575/', R + 'B482194280/', R + 'B485998821/', R + 'B487942477/', R + 'B495221092/', R + 'B496489867/', R + 'B498417455/', R + 'B499688405/', R + 'B513702495/', R + 'B521916715/', R + 'B523733735/', R + 'B525921547/', R + 'B532910655/', R + 'B534540368/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set lunches with a drink; basement with a steep staircase; smoking inside. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場4-10-29 さつきビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場四丁目10番29号 (go) 11m. Nearest record: wad omotenashi cafe (4-9-3) 28 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B513702495/', R + 'B521916715/', TB],
    price_note: 'Lunch prices from September 2025–February 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch: "serious" kara-age set (soup, salad, drink)', 'about ¥1,000', 'Lunch', 'no', 'no', 'October 2025 review.', 'karaage_set'),
      it('', '', 'Lunch: hamburg steak set with miso soup', '¥1,100', 'Lunch', 'ask', 'no', 'September 2025 review.', 'hamburg_set'),
      it('', '', '"Secret" French toast', '', 'Café', 'no', 'no', 'Tabelog shop text; July 2026 review.', 'secret_french_toast'),
      it('', '', 'Oreo croffle', '', 'Café', 'no', 'no', 'March 2026 review.', 'oreo_croffle'),
    ] }, {
    cuisine: '地下のカフェと肉バル: 夜はA5の黒毛和牛と希少部位、カクテル約50種、毎月の季節のメニュー、飲み放題のコース。名物は「secret」フレンチトースト(食べログの店の紹介)・ランチはスープ、サラダ、飲み物つきで1,000円ほど: 柚子こしょうかおろしポン酢の「Serious」の唐揚げ(2025年10月)、唐揚げと肉じゃが (2025年10月)、エビマヨとおばんざい2品のえび唐揚げのセット (2026年2月)、みそ汁つきのハンバーグ定食1,100円 (2025年9月)、ピンクのタルタルの唐揚げ (2025年1月)・カフェ: オレオのクロッフル、ティラミスのクロッフル (2026年3月)、「secret」フレンチトースト(2026年7月)・飲み放題つきの Satisfaction コース (2026年8月)・アイスコーヒー500円 (2024年3月)',
    neighborhood: '南船場4-10-29 さつきビル B1F。心斎橋駅から徒歩4分',
    gf_detail: '要確認。グルテンの情報なし。ランチは唐揚げとたれのセットが中心で、カフェはフレンチトーストとクロッフル。',
    vegan_detail: 'ヴィーガンではありません。唐揚げ、ハンバーグ、A5の和牛が中心で、ランチにはみそ汁がつく。',
    notes: '[カフェと肉バル・南船場、唐揚げのランチとフレンチトースト] 心斎橋近くの地下のカフェバーで、昼はスープと飲み物つきの唐揚げのランチが1,000円ほど、午後はフレンチトーストとクロッフル、夜は和牛とカクテル (平日のみ)。店内は喫煙可、下りる階段は急。夜は電話で予約を。',
  });
}

// ================================================================ 珍八香
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270106/27008695/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:00', '14:30'], ['16:30', '21:00']), SA = day(['11:00', '14:45']);
  put({
    id: 'osaka_chako_senba_center', name: '珍八香 (Chako)', category: 'OMNI',
    lat: 34.682013, lng: 135.501087, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The menu is ramen, champon, sara udon, fried rice, tenshinhan, cold noodles and gyoza.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a local Chinese restaurant of ramen, fried rice and meat dishes.',
    hours_raw: 'Mon–Fri 11:00–14:30 and 16:30–21:00 (last order food 20:30, drinks 20:45); Sat 11:00–14:45; closed Sundays and holidays; 23 November open until 16:00; Saturday evenings in December (Tabelog). Reservations accepted (Tabelog). Appetiser ¥110 (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), PayPay, d Barai, au PAY, Alipay and WeChat Pay; no e-money (Tabelog). 44 seats with counter and tables; smoking allowed (Tabelog). Busy with office workers at lunch (2026).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: SA }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Senba-chuo 3-3-9, Senba Center Building No. 9 B2F — directly linked to Hommachi Stn exit 10',
    cuisine: 'Local Chinese restaurant and izakaya in the Senba Center Building, featured on TV ("Himitsu no Kenmin SHOW") for its Kansai-style tenshinhan (September 2026; July 2026) · lunch sets: ramen and fried rice (July 2026), tenshinhan with mini ramen ¥950 (June 2026), sara udon set ¥950 (October 2026), sara udon half-chan set ¥1,000 (July 2026), champon set ¥1,050 with large fried rice (October 2026), cold noodle set ¥1,000 with half fried rice (July 2026), daily sweet and sour pork with mini ramen and rice (September 2026) · grilled gyoza ¥350, large bottle of beer ¥700 (July 2026) · "Chinese katsu don" (June 2026) · large fried rice (May 2026) · a long izakaya menu at night (June 2026)',
    website: null, gmaps: gm('珍八香 船場センタービル'), menu_url: null,
    notes: '[Chinese · Hommachi, set lunches in the Senba Center Building] A busy, old-style Chinese diner two floors below ground in the Senba Center Building, linked to Hommachi Station. Lunch sets of ramen with fried rice or tenshinhan run about ¥950–1,050; the Kansai-style tenshinhan was featured on TV. At night it turns into a cheap Chinese izakaya. Closed Sundays and holidays; smoking allowed.',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per reviews: a long-running local Chinese restaurant in the basement of Senba Center Building No. 9, shown on Yomiuri TV\'s "Himitsu no Kenmin SHOW" (September 2026).', philosophy: null, specialty: 'Tenshinhan; ramen and fried rice sets.',
      anecdotes: [
        { text: '"This popular local Chinese restaurant is a favorite among salarymen." — June 2026, a group celebration.', source: R + 'B536144182/' },
        { text: '"I used to find the fried rice too soggy, but it has surprisingly become fluffy over time." — May 2026.', source: R + 'B529110041/' },
        { text: '"It\'s definitely cheaper than the chain restaurants that have raised their prices!" — October 2026, the ¥950 sara udon set.', source: R + 'B536935877/' },
      ],
      japanese_sources_summary: '食べログ: 珍八香、中華料理・居酒屋・ラーメン、大阪市中央区船場中央3-3-9 船場センタービル9号館 B2F、本町駅10番出口直結、月〜金11:00〜14:30、16:30〜21:00 (料理 L.O. 20:30、ドリンク L.O. 20:45)、土11:00〜14:45、日・祝休み、予約可、お通し110円、カード・QR 決済可、電子マネー不可、44席、喫煙可。口コミ(2026年5月〜10月): テレビの「Himitsu no Kenmin SHOW」で紹介された関西風の天津飯、ラーメンとチャーハンのセット、天津飯とミニラーメン950円、皿うどんのセット950円、ちゃんぽんのセット1,050円、冷麺のセット1,000円、日替わりの酢豚、焼き餃子350円、大瓶ビール700円、「Chinese Katsu Don」、夜は居酒屋のメニューが多い、昼は会社員でにぎわう。',
      confidence: 'medium', sources: [TB, R + 'B483729825/', R + 'B529110041/', R + 'B530585509/', R + 'B531027976/', R + 'B531430972/', R + 'B531994699/', R + 'B532170679/', R + 'B532211714/', R + 'B534360905/', R + 'B535633623/', R + 'B535845745/', R + 'B536144182/', R + 'B536583352/', R + 'B536840588/', R + 'B536935877/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Office-lunch Chinese diner with plastic samples at the door (July 2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区船場中央3-3-9 船場センタービル9号館 B2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区船場中央三丁目3番9号 (go) 34m (building point of a long building). Same floor as 四川式担々麺 だるま 船場店 (osaka_shisen_tantanmen_daruma_senba) 25 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B530585509/', R + 'B536935877/', R + 'B532170679/', TB],
    price_note: 'Prices from June–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Tenshinhan with mini ramen (lunch)', '¥950', 'Sets', 'ask', 'no', 'June 2026 review.', 'tenshinhan_set'),
      it('', '', 'Sara udon set', '¥950', 'Sets', 'no', 'no', 'October 2026 review.', 'sara_udon_set'),
      it('', '', 'Champon set', '¥1,050', 'Sets', 'no', 'no', 'October 2026 review.', 'champon_set'),
      it('', '', 'Cold noodle set with half fried rice', '¥1,000', 'Sets', 'no', 'no', 'July 2026 review.', 'hiyashi_set'),
      it('', '', 'Grilled gyoza', '¥350', 'Small plates', 'no', 'no', 'July 2026 review.', 'yaki_gyoza'),
    ] }, {
    cuisine: '船場センタービルの町中華と居酒屋で、テレビの「Himitsu no Kenmin SHOW」で関西風の天津飯が紹介された (2026年9月、7月)・ランチのセット: ラーメンとチャーハン (2026年7月)、天津飯とミニラーメン950円 (2026年6月)、皿うどんのセット950円 (2026年10月)、皿うどんと半チャンのセット1,000円 (2026年7月)、ちゃんぽんのセット1,050円とチャーハン大盛り (2026年10月)、冷麺と半チャーハンのセット1,000円 (2026年7月)、日替わりの酢豚とミニラーメンとご飯 (2026年9月)・焼き餃子350円、大瓶ビール700円 (2026年7月)・「Chinese Katsu Don」(2026年6月)・チャーハン大盛り (2026年5月)・夜は居酒屋のメニューが多い (2026年6月)',
    neighborhood: '船場中央3-3-9 船場センタービル9号館 B2F。本町駅10番出口直結',
    gf_detail: '要確認。グルテンの情報なし。ラーメン、ちゃんぽん、皿うどん、チャーハン、天津飯、冷麺、餃子の店。',
    vegan_detail: 'ヴィーガンではありません。ラーメン、チャーハン、肉料理の町中華。',
    notes: '[中華・本町、船場センタービルの定食ランチ] 本町駅直結、船場センタービルの地下2階のにぎやかな昔ながらの中華の店。ラーメンとチャーハンや天津飯のセットが950〜1,050円ほどで、関西風の天津飯はテレビでも紹介された。夜は手ごろな中華の居酒屋に。日・祝休み、喫煙可。',
  });
}

save();
