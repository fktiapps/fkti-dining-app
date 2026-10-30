// Osaka sweep (2-mile circle around Dotonbori), batch 215 — mom-phase clean-up: listings near the centre with 30+ reviews passed over without a skip() mark.
//   - 粋麺あみ乃や 大阪難波駅店 27109867 — skipped: Kintetsu station soba/udon chain (b212 skipped its Abenobashi sister 27060915 on the same grounds)
//   - 七津屋 なんばウォーク店 27069834 — skipped: Osaka stand-up bar chain (Kyobashi branch on Tabelog; a review names an Umeda branch)
//   - PARFAIT BAR &VIGO 心斎橋店 27158817 — skipped: night-parfait chain run by CARTON Inc. (13 stores nationwide, August 2026)
//   + 居酒屋ひさ Izakaya Hisa (kushikatsu bar in Higashi-Shinsaibashi, 16 seats, open to 3:00; desserts by an owner with pastry-chef experience)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-30';
const { put, skip, save } = openCitySweep('osaka', TODAY, 215);
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 粋麺あみ乃や 大阪難波駅店 — chain
skip('27109867', '粋麺あみ乃や 大阪難波駅店: Kintetsu station stand-soba/udon chain branch inside Kintetsu Osaka-Namba Station (Tabelog corporate-member listing). Skipped for consistency with batch 212, which skipped its sister 粋麺あみ乃や あべの橋駅店 27060915 as "station stand-soba/udon chain inside Kintetsu ticket gates" (scripts/add-osaka-sweep-b212.mjs). Review: "The only place in Osaka serving this dish is Ikimen Aminoya, operated by Kintetsu." (October 2026, B537277950).');

// ================================================================ 七津屋 なんばウォーク店 — chain
skip('27069834', '七津屋 なんばウォーク店: branch of the 七津屋 stand-up bar chain in the Namba Walk underground mall. Other branches: 七津屋 京橋店 on Tabelog (27007906, 大阪府大阪市都島区東野田町3-2-11, read 2026-10-30); a review of this branch: "I’ve been to the Umeda Osaka Station Front building location, but this is my first time at the one in Minami!" (September 2017 visit, in B298124927).');

// ================================================================ PARFAIT BAR &VIGO 心斎橋店 — chain
skip('27158817', 'PARFAIT BAR &VIGO 心斎橋店: branch of the Parfait Bar &VIGO night-parfait chain (Tabelog corporate-member listing). Operator 株式会社CARTON (Kashiwa, Chiba), which "首都圏を中心に店舗展開" (PR TIMES release for the Sapporo Susukino store, opened 2026-05-15, https://prtimes.jp/main/html/rd/p/000000005.000154161.html); "It has since expanded rapidly, reaching 13 stores nationwide as of August 2026 and more planned in September and October." (Unseen Japan, https://unseen-japan.com/shime-parfait-japan-sapporo-tokyo/). A Kyoto store is also listed on AutoReserve.');

// ================================================================ 居酒屋ひさ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27084413/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'http://izakaya-hisa.com/';
  const MENU = TB + 'dtlmenu/';
  const D = day(['18:00', '03:00']), SUN = day(['18:00', '24:00']);
  put({
    id: 'osaka_izakaya_hisa_higashishinsaibashi', name: '居酒屋ひさ (Izakaya Hisa)', category: 'OMNI',
    lat: 34.671393, lng: 135.504242, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the centre of the menu is breaded, deep-fried kushikatsu dipped in a shared sauce, along with fried chicken, fried Camembert and a baguette with the ajillo. No gluten-free dishes are marked.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef, pork, chicken and seafood skewers, beef-tendon dote-yaki, dashi-rolled omelette, salmon dishes and prosciutto. Vegetable kushikatsu (eggplant, leek, potato, lotus root and more) are on the menu, but the batter and frying oil are not described, so ask.',
    hours_raw: 'Mon–Sat 18:00–3:00 (last order 2:00); Sun 18:00–24:00 (last order 23:00); closing days not fixed, and it may close on Sundays or the last day of a holiday run (Tabelog). The shop\'s own site says 18:00–27:00 (food last order 26:00, drinks 26:30), closed Sunday unless booked ahead. Reservations accepted (Tabelog, which also takes bookings online). Cards: VISA and Master (Tabelog); the site also lists AMEX and Diners. Table charge (otoshi) ¥324 (Tabelog). 16 seats: 4 at the counter, 12 at tables; private hire for up to 20 (Tabelog). Smoking allowed (Tabelog; an October 2023 diner: "Smoking is allowed at the table."). Courses with all-you-can-drink have a two-hour limit (an August 2026 review; the site: 120 minutes, last order at 90).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: SUN }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 2-5-6, room 102, ground floor of a tenant building just south of Suo-cho street — from Shinsaibashi Station Exit 6 go right along the Shinsaibashi-suji arcade, left onto Suo-cho street, then right at the Kintetsu Taxi stand and about 10 m on (Tabelog); 5 min on foot from Shinsaibashi, Nagahoribashi or Nippombashi',
    cuisine: 'Kushikatsu bar: Osaka kushikatsu plus Western bar dishes and homemade desserts (16 seats) · kushikatsu dipped in a shared stainless-steel tray of sauce, no double-dipping: beef, pork, chicken ¥130, vegetables ¥100–200, shrimp and scallop ¥200, salmon ¥150, chef\'s assortment of 5 ¥600 or 10 ¥1,200 (Tabelog menu, last updated April 2016) · beef-tendon dote-yaki in sweet miso ¥400 · dashi-rolled omelette ¥400, with mentaiko ¥450 · salmon and avocado caprese ¥580 · white leek marinade wrapped in prosciutto ¥380 · shrimp ajillo (2016 menu ¥580) with baguette · grilled avocado with mentaiko mayonnaise · desserts that change daily, such as cookie cheesecake, chocolate mousse, fondant au chocolat (shop site) · courses with all-you-can-drink: ¥3,380 with the table charge (September 2023), ¥3,000 with 10 skewers each (June 2026) · draft beer, highballs, shochu, sake, wine, cocktails',
    website: WEB, gmaps: gm('居酒屋ひさ 東心斎橋'), menu_url: MENU,
    notes: "[Izakaya · Higashi-Shinsaibashi, a late kushikatsu bar to melodic-hardcore records] A small kushikatsu bar on the ground floor of a tenant building just off Suo-cho street, in the thick of the Higashi-Shinsaibashi nightlife, open until 3:00. The shop calls itself a mix of Shinsekai-style kushikatsu and a Western bar: alongside the skewers, which you dip once in a shared stainless-steel tray of sweet, light sauce, there are ajillo, salmon carpaccio and caprese, dashi-rolled omelette and beef-tendon dote-yaki. Diners find the kushikatsu light and crisp, with a slightly coarser crumb than most Osaka shops, and one singled out the salmon (September 2025). Desserts are made by the owner, who has worked as a pastry chef. The music is loud melodic hardcore and punk, and records and bass guitars decorate the room. Several reviewers came for the ¥3,000 course with two hours of drinks and ten skewers each. Several 2023 reviews complained about service and cleanliness; later reviews mostly found the staff friendly. Smoking allowed.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed in sources)'], origin: null, background: 'Opened 1 April 2015 (Tabelog; the shop\'s blog on 30 March 2016: "四月一日に一周年になります"). The shop\'s site says the owner has worked as a pastry chef ("パティシエ経験ありのオーナーが作るデザート"); its Tabelog page (auto-translated) mentions "dishes by a French-trained owner" and calls it a family-run shop. A January 2026 diner found the manager serving every customer alone; a September 2024 diner had a good conversation with the owner.', philosophy: 'Osaka\'s famous kushikatsu fused with a bar: Shinsekai-style kushikatsu with Western dishes such as ajillo, prosciutto marinade and caprese, Japanese dishes too, and a daily dessert (shop site).', specialty: 'Kushikatsu with the shared sauce tray; homemade desserts.',
      anecdotes: [
        { text: '"I was pleased to discover that the BGM was by Hi-STANDARD, a detail shared by my host, and I had a nice chat with the manager." — April 2022, two 10-skewer platters with dote-yaki and tako-wasa.', source: R + 'B447899489/' },
        { text: '"In Osaka, many places serve finely crushed breadcrumbs, but here they use a slightly coarser texture that enhances the flavor of the ingredients." — November 2023.', source: R + 'B447899489/' },
        { text: '"Despite being only JPY 3000, we received 10 skewers per person, and the variety of dishes was impressive." — June 2026, course with all-you-can-drink.', source: R + 'B530978659/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 居酒屋ひさ、居酒屋・串揚げ・イタリアン、大阪市中央区東心斎橋2-5-6 つく志会館 102、心斎橋駅6番出口から心斎橋筋商店街を右へ、周防町通りを左、近鉄タクシーの乗り場を右に曲がって約10m、月〜土18:00〜3:00 (L.O. 2:00)、日曜18:00〜24:00 (L.O. 23:00)、定休日不定 (日曜か祝日の最終日は休みのことも)、予約可、カード可 (VISA、Master)、お通し324円、16席 (カウンター4席、テーブル12席)、貸切20人まで、喫煙可、2015年4月1日オープン、メニューは2016年4月更新: 串カツ牛・豚・とりもも130円、野菜100〜200円、海老・帆立200円、サーモン150円、おまかせ5種600円・10種1200円、牛すじどて焼400円、出汁巻卵400円、出汁巻明太450円、サーモンとアボカドのカプレーゼ580円、白ネギマリネ生ハム包み380円、アヒージョ(エビ)580円。店のサイト: 串カツバル HiSA (居酒屋ひさ)、大阪名物の串カツとバルの融合、新世界仕込みの串カツに洋風な一品、パティシエ経験ありのオーナーが作る日替わりのデザート、BGMはハイスタ、メロコア部屋 (オーナーおすすめのアルバムや曲)、ソースの二度づけ禁止、OPEN 18:00〜CLOSE 27:00、日曜定休 (予約は要相談)、飲み放題付きコース2500円・3000円・4000円 (飲み放題120分)。口コミ (2022年4月〜2026年8月): 周防町通りの少し南、テナントビルの1階、ステンレスの四角いソース入れ、少し粗めの衣で軽い串カツ、サーモンの串カツがおいしい、プチトマトが2個、海老のアヒージョ、アボカドの明太マヨ炙り、どて焼、BGMはハイスタ、ベースギターやレコード、飲み放題と串カツ10本のコース3000円 (2026年6月)、お通し込み3380円 (2023年9月)、2時間制、2023年には接客や清潔さへの不満の声、2024〜2026年は店員が気さくという声、2026年1月は店長がひとりで接客。',
      confidence: 'medium', sources: [TB, MENU, WEB, WEB + 'concept/', WEB + 'shopinfo/', WEB + 'bal/', WEB + 'course/', WEB + 'melodichardcore/', WEB + 'blogs/214/', R + 'B447899489/', R + 'B454269493/', R + 'B463686730/', R + 'B467636342/', R + 'B471214070/', R + 'B471899039/', R + 'B473854417/', R + 'B482520706/', R + 'B482680684/', R + 'B491872662/', R + 'B495302178/', R + 'B514225631/', R + 'B521105869/', R + 'B528450769/', R + 'B530978659/', R + 'B533098794/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead for courses (two-hour limit); smoking allowed; loud music.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋2-5-6 つく志会館 102',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog corporate-member listing current, with online booking; reviews dated through August 2026; the shop\'s site answered on 2026-10-30.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋二丁目5番6号 (go) 1m. 海鍋亭 心斎橋店 (osaka_umi_nabe_tei_shinsaibashi, address_ja "大阪府大阪市中央区東心斎橋2-5-6 つく志会館 1F") is in the same building, 12 m away on its own Tabelog point, so nothing stacks; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU, WEB + 'cutlet-skewers/', WEB + 'bal/', WEB + 'course/', R + 'B471214070/', R + 'B521105869/', R + 'B530978659/'],
    price_note: 'À la carte prices from the Tabelog menu, last updated April 2016 (the shop site shows the same list); they may have risen. Course prices from reviews dated September 2023 and June 2026.', last_checked: TODAY, items: [
      it('牛', '', 'Kushikatsu: beef', '¥130', 'Kushikatsu', 'no', 'no', '2016 menu.', 'kushi_beef'),
      it('豚', '', 'Kushikatsu: pork', '¥130', 'Kushikatsu', 'no', 'no', '2016 menu.', 'kushi_pork'),
      it('サーモン', '', 'Kushikatsu: salmon', '¥150', 'Kushikatsu', 'no', 'no', '2016 menu; praised in a September 2025 review.', 'kushi_salmon'),
      it('海老', '', 'Kushikatsu: shrimp', '¥200', 'Kushikatsu', 'no', 'no', '2016 menu.', 'kushi_shrimp'),
      it('なす', '', 'Kushikatsu: eggplant', '¥100', 'Kushikatsu', 'no', '', '2016 menu; batter and oil not described.', 'kushi_eggplant'),
      it('おまかせ10種盛り', '', 'Chef\'s assortment of 10 kushikatsu', '¥1,200', 'Kushikatsu', 'no', 'no', '2016 menu; 5 kinds ¥600.', 'kushi_10'),
      it('牛すじどて焼', '', 'Beef-tendon dote-yaki (simmered in sweet miso)', '¥400', 'Dishes', '', 'no', '2016 menu.', 'doteyaki'),
      it('出汁巻卵', '', 'Dashi-rolled omelette', '¥400', 'Dishes', '', 'no', '2016 menu; with mentaiko ¥450.', 'dashimaki'),
      it('サーモンとアボカドのカプレーゼ', '', 'Salmon and avocado caprese', '¥580', 'Salads', '', 'no', '2016 menu.', 'caprese'),
      it('アヒージョ(エビ)', '', 'Shrimp ajillo', '¥580', 'Dishes', '', 'no', '2016 menu; eaten January 2026.', 'ajillo_shrimp'),
      it('', '', 'Course with all-you-can-drink (10 kushikatsu each and other dishes)', '¥3,000', 'Courses', 'no', 'no', 'June 2026; ¥3,380 including the table charge in September 2023; two-hour limit.', 'course_3000'),
    ] }, {
    cuisine: '串カツバル: 大阪の串カツに洋風のバルの料理と手づくりのデザート (16席)・串カツはステンレスのソース入れに二度づけ禁止で: 牛・豚・とりもも130円、野菜100〜200円、海老・帆立200円、サーモン150円、おまかせ5種600円・10種1200円 (食べログのメニュー、2016年4月更新)・牛すじどて焼400円・出汁巻卵400円、出汁巻明太450円・サーモンとアボカドのカプレーゼ580円・白ネギマリネ生ハム包み380円・アヒージョ(エビ) (2016年のメニューで580円) とバゲット・アボカドの明太マヨ炙り・日替わりのデザート、クッキーチーズケーキ、チョコムース、フォンダンショコラなど (店のサイト)・飲み放題付きのコース: お通し込み3380円 (2023年9月)、串カツ10本つき3000円 (2026年6月)・生ビール、ハイボール、焼酎、日本酒、ワイン、カクテル',
    neighborhood: '東心斎橋2-5-6、周防町通りのすぐ南のテナントビル1階の102。心斎橋駅6番出口から心斎橋筋商店街を右へ、周防町通りを左、近鉄タクシーの乗り場を右に曲がって約10m (食べログ)。心斎橋・長堀橋・日本橋から徒歩5分',
    gf_detail: 'グルテンフリーではありません。中心はパン粉の衣で揚げた串カツを共用のソースにつけるもので、ほかにからあげ、カマンベールのフライ、アヒージョのバゲットも。グルテンフリーの表示はありません。',
    vegan_detail: 'ヴィーガンではありません。牛・豚・とり・魚介の串、牛すじのどて焼、出汁巻卵、サーモンの料理、生ハム。なす、ねぎ、じゃがいも、れんこんなど野菜の串カツもありますが、衣や揚げ油はわからないので確認を。',
    notes: '[居酒屋・東心斎橋、メロコアが流れる深夜の串カツバル] 周防町通りのすぐそば、東心斎橋の夜の街のまん中にあるテナントビル1階の小さな串カツバルで、朝3時まで開いている。店が掲げるのは新世界仕込みの串カツとバルの融合: 甘くてあっさりしたソースをステンレスのソース入れで一度だけつける串カツのほかに、アヒージョ、サーモンのカルパッチョやカプレーゼ、出汁巻卵、牛すじのどて焼も。串カツは大阪のほかの店より少し粗めの衣で軽くさくっと揚がっているという声が多く、サーモンがおいしいという声も (2025年9月)。デザートはパティシエ経験のあるオーナーの手づくり。BGMは大音量のメロコアやパンクで、店内にはレコードやベースギター。飲み放題2時間で串カツ10本のついた3000円のコースを目当てに来る人も多い。2023年の口コミには接客や清潔さへの不満もいくつかあったが、その後は店員が気さくという声がほとんど。喫煙可。',
  });
}

save();
