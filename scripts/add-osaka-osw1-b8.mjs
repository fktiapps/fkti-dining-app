// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first; worker osw1 (lane: Tabelog id mod 4 = 0), batch 8.
//   + アマーク ド パラディ Hamac de Paradis (Minami-Senba bistro and café since 1995, famous for its croquette)
//   + カフェ シャルボン CAFE CHARBON (café in a converted lumber warehouse, Kitahorie, 1999)
//   + 中国料理 大成閣 Chinese Taiseikaku (six-floor Chinese restaurant in Higashi-Shinsaibashi since the 1950s)
//   + みなみの十忠八九 Minami no Jucchu Hakku (seafood izakaya by Namba Stn, 2023)
//   - skip 27002320 たこ焼道楽 わなか 千日前本店: head shop of the Wanaka takoyaki chain, whose site lists 難波店, 黒門市場店,
//     道頓堀店, アメリカ村店, 天四店, 大阪城公園店 and more (takoyaki-wanaka.com, read 2026-11-01).
//   Lane: mod-4 = 0 ids in `queue.mjs osaka next notable 140` after batch 7: 27002320 (skip), 27000936, 27001024, 27008344, 27134848.
//   Chain check: Hamac de Paradis is one shop on its official site (a reviewer mentions sister restaurants); Charbon and Taiseikaku are
//   single sites; Jucchu Hakku is one of a small group of four (Fukushima main shop, Ohatsu and a Fukushima bar, per Tabelog
//   remarks), kept on the YP流 / まえだ家 precedent. None is in data/osaka.json (grep by name, romaji and address, 2026-11-01).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw1-8');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27002320', 'たこ焼道楽 わなか 千日前本店: head shop of the Wanaka takoyaki chain, whose site lists 難波店, 黒門市場店, 道頓堀店, アメリカ村店, 天四店, 大阪城公園店 and more (takoyaki-wanaka.com, read 2026-11-01).');

// ================================================================ アマーク ド パラディ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27000936/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.hamac-de-paradis.jp/';
  const H = day(['11:30', '22:00']);
  put({
    id: 'osaka_hamac_de_paradis_minamisenba', name: 'アマーク ド パラディ (Hamac de Paradis)', category: 'OMNI',
    lat: 34.675862, lng: 135.49839, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The signature is a breaded cream croquette with demi-glace, and lunches come with bread or rice; pasta and cakes fill much of the menu.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog marks vegetarian options, but there is no vegan information; the croquette is a cream filling and most plates use meat or fish.',
    hours_raw: 'Daily: lunch 11:30–15:00, dinner 17:00–21:00, café and drinks 11:30–21:30 (last orders), closing 22:00 (official site); Tabelog gives dinner from 17:30. Open year-round (Tabelog). Lunch can be booked only at weekends and holidays for 11:30–12:00; seat-only bookings are limited to 90 minutes when busy; café-only visits cannot be booked (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), IC cards and other e-money, PayPay (Tabelog). 112 seats: 42 at tables on 1F and 2F around an atrium, a 10-seat counter, and a 3F sofa room for up to 60–70 with karaoke and a projector for private hire; non-smoking (Tabelog). Since 1995 (official site).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Minami-Senba 4-12-21 — 3 min from Shinsaibashi Stn exit 3 or Yotsubashi Stn exit 1A',
    cuisine: 'Modern bistro of simple European cooking with seasonal touches, and a café (official site; Tabelog) · the signature croquette, loved since the shop opened (official site): a creamy filling full of mushrooms and porcini under a crisp crust, with demi-glace (October 2026) · croquette lunch ¥1,200 with bread or rice and salad (October 2026); daily main plate with rice ¥1,200, croquette added ¥300 (September 2026); drink with lunch +¥200; half an angel-food cake ¥300; daily pasta (October 2026) · anniversary course ¥5,000, all-you-can-drink +¥1,800, with a message plate (Tabelog) · party courses with appetizers, pasta and bone-in spare ribs (September 2026) · over 50 wines, mainly Italian, chosen by a sommelier (Tabelog) · desserts such as tiramisu and chocolate cake',
    website: SITE, gmaps: gm('アマーク ド パラディ 南船場'), menu_url: SITE,
    notes: "[Bistro and café · Minami-Senba, the croquette lunch] A big, long-running Minami-Senba bistro and café open since 1995, black and white with modern art, mosaic tiles and a striking 'Dear Ingo' lamp, with a counter and tables around a two-storey atrium. Lunch is what fills it with nearby office workers: the house croquette, crisp outside and creamy with mushrooms and porcini, under demi-glace, with fresh-baked bread or rice and a salad with a homemade dressing for ¥1,200 (October 2026). Evenings bring a seasonal bistro menu with more than 50 wines, mainly Italian, and party courses; a third-floor sofa room with karaoke takes groups. Daily events (a free drink one day, Halloween candy for a password another) are posted on Instagram. One diner found the portions small but the cooking careful (September 2026).",
    chef_bio: { chef_name: null, roles: ['Kitchen and sommelier (unnamed)'], origin: null, background: 'Per the official site: a café and restaurant in Minami-Senba since 1995, "an established presence" with counter seats and an atrium; a dynamic lamp by Dear Ingo, monochrome decor with modern art and mosaic tiles; the croquette has been loved since the founding. Tabelog: featured on the TV show "Gochi ni Narimasu!" on 20 April 2023; over 50 wines, mainly Italian. A diner in October 2026 mentions sister restaurants.', philosophy: '"Simple, modern European cooking with seasonal colour" (official site).', specialty: 'Cream croquette with mushrooms and demi-glace.',
      anecdotes: [
        { text: '"The croquette was a rich cream croquette with a strong porcini flavor, and the daily dessert was a decadent chocolate cake." — October 2026, lunch.', source: R + 'B537610364/' },
        { text: '"By noon, the place was packed with people from nearby offices coming in for lunch." — October 2026, a weekday.', source: R + 'B537878535/' },
        { text: '"They have some kind of event every day, and since Halloween is approaching, if you say the secret phrase, you get a free piece of candy!" — October 2026, croquette lunch.', source: R + 'B538301990/' },
      ],
      japanese_sources_summary: '公式サイト: Hamac de Paradis アマーク・ド・パラディ、心斎橋・南船場のモダンビストロ、since 1995、南船場の中でも老舗の存在感、LIVE感を楽しむカウンター席・吹き抜け空間、Dear Ingo のライト、モノクロを基調にモダンアートやモザイクタイル、シンプルモダンな欧風料理に季節の彩り、日替わりプレート、創業時から愛される名物コロッケ (外はサクサク、中はホクホク、手作り)、パーティーや結婚式の二次会、最大50名までの貸切、LUNCH 11:30〜15:00 (l.o.)、DINNER 17:00〜21:00 (l.o.)、CAFE DRINK 11:30〜21:30 (l.o.)、CLOSE 22:00、大阪市中央区南船場4-12-21。食べログ (店舗会員): 年中無休、ランチの予約は土日祝の11:30〜12:00のみ、混雑時は90分、カード・電子マネー・PayPay 可、112席 (1・2階テーブル42、カウンター10、3階ソファ席60)、3階はカラオケとプロジェクター、禁煙、ベジタリアンメニューあり、イタリアを中心に50種以上のワイン、記念日コース5,000円 (飲み放題1,800円)、2023年4月20日の「Gochi ni Narimasu!」に出演。口コミ(2026年9月〜10月): 名物のコロッケランチ1,200円 (パンかご飯)、きのことポルチーニのクリームコロッケとデミグラス、日替わりプレート1,200円にコロッケ300円、ランチのドリンク200円、エンゼルケーキのハーフ300円、近くの会社員で満席、毎日のイベント (ハロウィンのキャンディなど)、量は少なめという声。',
      confidence: 'medium', sources: [TB, SITE, R + 'B536343377/', R + 'B536481006/', R + 'B536563500/', R + 'B536895005/', R + 'B537390654/', R + 'B537431666/', R + 'B537610364/', R + 'B537878535/', R + 'B537894466/', R + 'B538301990/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set lunches from a short menu; a lively, casual room (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場4-12-21',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and official site with 2026 news; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場四丁目12番21号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B537894466/', R + 'B536481006/'],
    price_note: 'Lunch prices from September and October 2026 reviews; anniversary course from the Tabelog listing.', last_checked: TODAY, items: [
      it('', '', 'Signature croquette lunch (bread or rice, salad)', '¥1,200', 'Lunch', 'no', 'no', 'October 2026 reviews.', 'croquette_lunch'),
      it('', '', 'Daily main plate with rice', '¥1,200', 'Lunch', 'ask', 'ask', 'September 2026 review.', 'daily_plate'),
      it('', '', 'Croquette added to a lunch', '¥300', 'Lunch', 'no', 'no', 'September 2026 review.', 'croquette_addon'),
      it('', '', 'Anniversary course (message plate)', '¥5,000', 'Courses', 'ask', 'ask', 'Tabelog listing; all-you-can-drink +¥1,800.', 'anniversary_course'),
    ] }, {
    cuisine: '季節の彩りを添えたシンプルモダンな欧風料理のビストロとカフェ (公式サイト、食べログ)・創業時から愛される名物のコロッケ (公式サイト): さくさくの衣に、きのことポルチーニのクリーミーな中身、デミグラスソースで (2026年10月)・コロッケランチ1,200円、パンかご飯とサラダつき (2026年10月)。日替わりのメインプレートとご飯1,200円、コロッケの追加300円 (2026年9月)。ランチのドリンク+200円、エンゼルケーキのハーフ300円、日替わりパスタ (2026年10月)・記念日コース5,000円、飲み放題+1,800円、メッセージプレートつき (食べログ)・前菜、パスタ、骨つきスペアリブのパーティーコース (2026年9月)・ソムリエが選ぶイタリア中心のワイン50種以上 (食べログ)・ティラミスやチョコレートケーキなどのデザート',
    neighborhood: '南船場4-12-21。心斎橋駅3番出口、四ツ橋駅1A出口から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。名物はデミグラスのクリームコロッケ (衣つき) で、ランチにはパンかご飯。パスタやケーキも多い。',
    vegan_detail: '要確認。食べログにはベジタリアンメニューありとあるが、ヴィーガンの情報はない。コロッケはクリームの中身で、ほとんどの皿に肉か魚を使う。',
    notes: '[ビストロ・カフェ・南船場、コロッケランチ] 1995年からの南船場の大きなビストロとカフェ。モノクロにモダンアート、モザイクタイル、Dear Ingo のライト、2層の吹き抜けを囲むカウンターとテーブル。昼は近くの会社員でいっぱいになる。名物のコロッケは外はさくさく、中はきのことポルチーニのクリーミーな具でデミグラスソース、焼きたてのパンかご飯と自家製ドレッシングのサラダで1,200円 (2026年10月)。夜は季節のビストロ料理とイタリア中心のワイン50種以上、パーティーコースも。3階にはカラオケつきのソファの部屋がある。毎日のイベント (ある日はドリンクのサービス、別の日は合言葉でハロウィンのキャンディ) は Instagram で。量は少なめだが料理はていねいという声も (2026年9月)。',
  });
}

// ================================================================ カフェ シャルボン
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27001024/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:30', '22:00']); const WE = day(['11:30', '23:00']);
  put({
    id: 'osaka_cafe_charbon_kitahorie', name: 'カフェ シャルボン (CAFE CHARBON)', category: 'OMNI',
    lat: 34.674807, lng: 135.496137, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Lunches come with bread (refills) or rice, and the mains are pasta, pizza, risotto and sauced meats; the salad bar is the plainest part.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No vegan information. The lunch salad bar has fresh vegetables and vegetable obanzai with soup; the mains are meat, fish, cheese and cream.',
    hours_raw: 'Sun–Thu and holidays 11:30–22:00 (food last order 21:00, drinks 21:30); Fri, Sat and nights before holidays 11:30–23:00 (food last order 22:00, drinks 22:30); lunch menu until 14:30, then the café menu; irregular closures (Tabelog). Reservations accepted, but not for café-only visits at lunch or dinner time; groups by phone (Tabelog); some weekend days are booked out for parties (September 2026). No cover charge (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), IC cards and PayPay (Tabelog). 65 seats with sofa seats and a private room; private hire up to 100 seated (weddings, reunions); non-smoking; free Wi-Fi (Tabelog). Ordering by QR code (October 2026). Opened 8 December 1999 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WE, 5: WE, 6: WD }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kitahorie 1-6-23 — 1 min from Yotsubashi Stn exit 4, 3 min from Shinsaibashi',
    cuisine: 'Café and Italian-leaning dining (Tabelog) · lunch: choose a main and help yourself to a salad bar of fresh vegetables, vegetable obanzai and soup (September 2026); hashed pork with bread and three homemade jams ¥1,000 (September 2026); a daily special, e.g. pork kimchi on Thursdays, with rice in your choice of size (September 2026); pasta, pizza, risotto, steak (2026 reviews) · "Smart Lunch Course" ¥2,500: welcome drink, an appetizer plate with ham salad, pasta or risotto, dessert, coffee, with bread refills (October 2026) · café: lattes with latte art, tiramisu and other cakes (October 2026) · birthday dessert plate ¥1,500 (Tabelog) · courses for parties and weddings (Tabelog)',
    website: null, gmaps: gm('CAFE CHARBON 北堀江'), menu_url: null,
    notes: "[Café · Kitahorie, a converted lumber warehouse] One of the long-running cafés of the Horie side of Shinsaibashi, open since 1999 in a renovated timber warehouse with an eight-metre ceiling, exposed wooden beams, big windows and candlelight at night, a minute from Yotsubashi Station. Lunch is the value: pick a main (hashed pork, a daily special, pasta, risotto or pizza) and help yourself to a salad bar of fresh vegetables, obanzai and soup, with bread, rice and homemade jams; the hashed pork was ¥1,000 in September 2026, and a ¥2,500 lunch course adds a drink, an appetizer plate and dessert. In the afternoon it is a café for a latte and cake; at night it books out for parties and even weddings. Ordering is by QR code; one diner disliked that and the rushed payment, another found the steak average (October 2026).",
    chef_bio: { chef_name: null, roles: ['Kitchen and café staff (unnamed)'], origin: null, background: 'Shop-maintained Tabelog listing: a stylish, long-established café of the Shinsaibashi and Horie area, a renovated lumber warehouse with an 8 m ceiling and wooden interior lit by candles at night; menus centred on Italian cooking; private hire for weddings, reunions and company events. Opened 8 December 1999.', philosophy: null, specialty: 'Lunch with a salad bar; pasta and risotto.',
      anecdotes: [
        { text: '"The meal came with a salad bar, which had a decent variety of options, along with soup ... There were also three types of jam available for unlimited servings." — September 2026, hashed pork lunch ¥1,000.', source: R + 'B535381007/' },
        { text: '"The exposed wooden beams on the ceiling create a retro and warm space." — October 2026, an evening drink.', source: R + 'B537356262/' },
        { text: '"Just be careful not to get too caught up in the appetizers, or the carbonara might get cold!" — September 2026, a regular.', source: R + 'B513656393/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): カフェ シャルボン (CAFE CHARBON)、カフェ・イタリアン・バー、大阪市西区北堀江1-6-23、四ツ橋駅4番出口から徒歩1分、日〜木・祝11:30〜22:00 (料理L.O.21:00)、金・土・祝前日11:30〜23:00 (料理L.O.22:00)、ランチは14:30 L.O.、その後はカフェメニュー、不定休、予約可 (ランチとディナーの時間はカフェのみの予約不可、団体は電話で)、チャージなし、カード・Suica・PayPay 可、65席、貸切は着席100名まで、禁煙、Wi-Fi、誕生日のデザートプレート1,500円、1999年12月8日オープン。店の紹介 (英訳): 心斎橋・堀江の老舗のおしゃれなカフェ、材木倉庫を改装した天井8メートルの空間、夜はキャンドル、イタリアンを中心にしたコース、結婚式の二次会や同窓会も。口コミ(2026年9月〜10月): メインを選んで前菜とサラダバー、スープは食べ放題、ハッシュドポーク1,000円とパン、3種のジャム、木曜の日替わりは豚キムチ、パスタ、ピザ、リゾット、ステーキ、スマートランチコース2,500円、ラテアート、ティラミス、QR コードで注文、週末は貸切の日も、会計を急かされたという声。',
      confidence: 'medium', sources: [TB, R + 'B513656393/', R + 'B535381007/', R + 'B535695530/', R + 'B536481135/', R + 'B536746397/', R + 'B536922597/', R + 'B537356262/', R + 'B537390231/', R + 'B537654260/', R + 'B538225558/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'QR-code ordering; a casual café menu (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区北堀江1-6-23',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区北堀江一丁目6番23号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535381007/', R + 'B537390231/'],
    price_note: 'No menu on Tabelog; prices from September and October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Hashed pork lunch with bread, salad bar and soup', '¥1,000', 'Lunch', 'no', 'no', 'September 2026 review.', 'hashed_pork_lunch'),
      it('', '', 'Smart Lunch Course (drink, appetizers, pasta or risotto, dessert, coffee)', '¥2,500', 'Lunch', 'ask', 'ask', 'October 2026 review.', 'smart_lunch'),
      it('', '', 'Birthday dessert plate', '¥1,500', 'Café', 'no', 'no', 'Tabelog listing.', 'birthday_plate'),
    ] }, {
    cuisine: 'カフェとイタリアン寄りのダイニング (食べログ)・ランチ: メインを選び、新鮮な野菜、野菜のおばんざい、スープのサラダバーは食べ放題 (2026年9月)。ハッシュドポークとパン、3種の自家製ジャムで1,000円 (2026年9月)。日替わり、たとえば木曜は豚キムチ、ご飯の量は選べる (2026年9月)。パスタ、ピザ、リゾット、ステーキ (2026年の口コミ)・「Smart Lunch Course」2,500円: ウェルカムドリンク、ハムのサラダと前菜の盛り合わせ、パスタかリゾット、デザート、コーヒー、パンはおかわりできる (2026年10月)・カフェ: ラテアートのラテ、ティラミスなどのケーキ (2026年10月)・誕生日のデザートプレート1,500円 (食べログ)・パーティーや結婚式のコース (食べログ)',
    neighborhood: '北堀江1-6-23。四ツ橋駅4番出口から徒歩1分、心斎橋から3分',
    gf_detail: '要確認。グルテンの情報なし。ランチにはパン (おかわり可) かご飯、メインはパスタ、ピザ、リゾット、ソースの肉料理。サラダバーがいちばんシンプル。',
    vegan_detail: '要確認。ヴィーガンの情報なし。ランチのサラダバーには新鮮な野菜と野菜のおばんざい、スープ。メインは肉、魚、チーズ、クリーム。',
    notes: '[カフェ・北堀江、材木倉庫を改装] 堀江側の心斎橋で長く続くカフェのひとつ。1999年から、天井8メートルの材木倉庫を改装した店で、むき出しの木の梁、大きな窓、夜はキャンドルの灯り。四ツ橋駅から1分。お得なのは昼で、メイン (ハッシュドポーク、日替わり、パスタ、リゾット、ピザ) を選び、新鮮な野菜、おばんざい、スープのサラダバーは食べ放題、パン、ご飯、自家製ジャムも。2026年9月はハッシュドポークが1,000円、2,500円のランチコースはドリンク、前菜の盛り合わせ、デザートつき。午後はラテとケーキのカフェ、夜はパーティーや結婚式の貸切も。注文は QR コードで、それと会計を急かされたのが嫌だったという人、ステーキは普通だったという人も (2026年10月)。',
  });
}

// ================================================================ 中国料理 大成閣
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27008344/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://taiseikaku.jp/';
  const H = day(['11:00', '15:00'], ['17:00', '22:00']);
  put({
    id: 'osaka_taiseikaku_higashishinsaibashi', name: '中国料理 大成閣 (Chinese Taiseikaku)', category: 'OMNI',
    lat: 34.673654, lng: 135.502871, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Cantonese and Sichuan dishes with soy and oyster sauces, dumplings, noodles and battered fried dishes.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Chinese set meals and banquets of pork, seafood and chicken.',
    hours_raw: 'Daily 11:00–15:00 (last order 14:30) and 17:00–22:00 (food last order 20:45, drinks 21:00); New Year (3 January), Obon (13–15 August) and Golden Week 11:00–22:00 straight; closed 30 December–2 January (Tabelog). Takeaway daily 11:00–15:00 and 17:00–20:30, ordered ahead by phone or fax; Uber Eats and Demae-can (Tabelog). Reservations by the day before; private rooms need a course (Tabelog). Cards (VISA, Master, JCB, AMEX), e-money and PayPay (Tabelog). Six floors, about 1,500 seats, up to 400 on one floor; private rooms for 2 to over 30, tatami and sofa rooms, karaoke; non-smoking with a smoking room on 2F; wheelchair accessible; free Wi-Fi; discount at the partner car park (Tabelog). Founded 1953, per the listing (the Tabelog opening-day field reads 12 October 1958).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 1-18-12 — 2 min from Shinsaibashi Stn exit 5 or 6',
    cuisine: 'Long-established Chinese restaurant for lunch and banquets (Tabelog) · lunch sets ¥1,000 (¥1,100 with tax): a main dish with rice, soup, salad and pickles, refills included, plus free congee, self-service coffee and, while they last, sweet-potato snacks (September–October 2026); e.g. sweet-and-sour pork set ¥1,100, green-pepper pork, mapo tofu with fried rice (2026 reviews) · limited matsutake ramen and fried-rice set ¥2,310 (October 2026) · tantanmen with bean sprouts and boiled dumplings (October 2026) · à la carte in August 2026: crab fried rice ¥1,320, black-bean mapo tofu ¥1,100, Hong Kong-style chili prawns ¥1,980, seafood stir-fry ¥1,870 · banquet and private-room courses; takeaway and delivery',
    website: SITE, gmaps: gm('中国料理 大成閣 心斎橋'), menu_url: null,
    notes: "[Chinese · Higashi-Shinsaibashi, six floors since the 1950s] A Higashi-Shinsaibashi landmark of Chinese cooking for over 70 years, six floors and some 1,500 seats of Showa-modern Chinese decor, two minutes from Shinsaibashi Station. It is busiest at lunch, when ¥1,100 buys a set of sweet-and-sour pork, mapo tofu or another main with refills of rice and soup, salad, pickles, free congee and self-service coffee, and sweet-potato snacks while they last. In the evening the floors fill with banquets, weddings and reunions; à la carte runs to crab fried rice (¥1,320) and Hong Kong-style chili prawns (¥1,980). Diners in 2026 call it good value and nostalgic; one returning after ten years found it neither good nor bad. Takeaway and delivery too.",
    chef_bio: { chef_name: null, roles: ['Kitchen and banquet staff (unnamed)'], origin: null, background: 'Shop-maintained Tabelog listing: founded in 1953 and marking its 70th anniversary; six versatile floors for one person up to about 400, used for lunch, banquets, year-end and New Year parties, reunions, concerts and weddings; featured on TV and in magazines; an online shop (taiseikaku.easy-myshop.jp). The Tabelog opening-day field gives 12 October 1958. Diners in 2026 describe coming since childhood and a Showa-modern interior.', philosophy: null, specialty: 'Lunch sets with free congee; banquet courses.',
      anecdotes: [
        { text: '"For just JPY 1000 (tax included JPY 1100), you can choose a main Chinese dish, with all-you-can-eat rice, soup, salad, and pickles included." — September 2026.', source: R + 'B535691207/' },
        { text: '"A long-established Chinese restaurant located just a short walk from Shinsaibashi Station, which I\'ve been visiting since childhood!" — August 2026.', source: R + 'B534905099/' },
        { text: '"As soon as the tea was placed on the table, they served the \'porridge.\'" — October 2026, the matsutake ramen set ¥2,310.', source: R + 'B537171477/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 中国料理 大成閣 (タイセイカク)、中華料理・飲茶、大阪市中央区東心斎橋1-18-12、心斎橋駅5・6番出口から徒歩2分、毎日11:00〜15:00 (L.O.14:30)・17:00〜22:00 (料理L.O.20:45)、12月30日〜1月2日休み、テイクアウト (電話・FAX で予約)、Uber Eats と Demae-can、予約は前日まで、個室はコースのみ、カード・電子マネー・PayPay 可、約1,500席 (1フロア400名まで)、6フロア、個室、座敷、ソファ席、カラオケ、禁煙 (2階に喫煙室)、車いす可、Wi-Fi、提携駐車場の割引。店の紹介 (英訳): 1953年創業、70周年、テレビや雑誌でも紹介、ランチ、宴会、忘年会、新年会、同窓会、コンサート、結婚式、オンラインショップ。口コミ(2026年8月〜10月): ランチ1,000円 (税込1,100円) でご飯・スープ・サラダ・漬物はおかわり自由、お粥とコーヒーはセルフでサービス、さつまいものお菓子、酢豚の定食1,100円、松茸ラーメンとチャーハンのセット2,310円、担々麺と水餃子、カニチャーハン1,320円、麻婆豆腐1,100円、エビチリ1,980円、海鮮炒め1,870円、昭和モダンの雰囲気、子どものころから通う、良くも悪くもないという声。',
      confidence: 'medium', sources: [TB, SITE, R + 'B332380449/', R + 'B518471344/', R + 'B534905099/', R + 'B535691207/', R + 'B536736635/', R + 'B536833965/', R + 'B536997548/', R + 'B537171477/', R + 'B537267418/', R + 'B537995027/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set lunches from a short list; large banquet floors (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-18-12',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目18番12号 (go) 8m. J BOWL (osaka_j_bowl_shinsaibashi) is next door at 東心斎橋1-18-14, a different house number; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535691207/', R + 'B534905099/', R + 'B536833965/'],
    price_note: 'Prices from August–October 2026 reviews (tax included unless noted).', last_checked: TODAY, items: [
      it('', '', 'Lunch set (main, rice, soup, salad, pickles; free congee and coffee)', '¥1,100', 'Lunch', 'ask', 'no', 'September and October 2026 reviews.', 'lunch_set'),
      it('', '', 'Crab fried rice', '¥1,320', 'À la carte', 'ask', 'no', 'August 2026 review.', 'crab_fried_rice'),
      it('', '', 'Black-bean mapo tofu (Sichuan style)', '¥1,100', 'À la carte', 'ask', 'no', 'August 2026 review.', 'mapo_tofu'),
      it('', '', 'Hong Kong-style chili prawns', '¥1,980', 'À la carte', 'ask', 'no', 'August 2026 review.', 'chili_prawns'),
      it('', '', 'Matsutake ramen and fried-rice set (limited)', '¥2,310', 'Lunch', 'no', 'no', 'October 2026 review.', 'matsutake_ramen'),
    ] }, {
    cuisine: 'ランチと宴会の老舗の中国料理 (食べログ)・ランチのセット1,000円 (税込1,100円): メインにご飯、スープ、サラダ、漬物、おかわり自由。お粥とセルフのコーヒー、なくなるまでのさつまいものお菓子もサービス (2026年9月〜10月)。たとえば酢豚の定食1,100円、ピーマンと豚肉の炒め、麻婆豆腐とチャーハン (2026年の口コミ)・限定の松茸ラーメンとチャーハンのセット2,310円 (2026年10月)・もやしの入った担々麺と水餃子 (2026年10月)・2026年8月のアラカルト: カニチャーハン1,320円、黒豆豉の麻婆豆腐1,100円、香港風のエビチリ1,980円、海鮮炒め1,870円・宴会と個室のコース、テイクアウトとデリバリー',
    neighborhood: '東心斎橋1-18-12。心斎橋駅5・6番出口から徒歩2分',
    gf_detail: '要確認。グルテンの情報なし。醤油やオイスターソースの広東・四川の料理、餃子、麺、衣の揚げ物。',
    vegan_detail: 'ヴィーガンではありません。豚、魚介、鶏の中華の定食と宴会料理。',
    notes: '[中華・東心斎橋、70年あまりの6フロア] 心斎橋駅から2分、70年以上続く東心斎橋の中華の名店で、6フロアに約1,500席の昭和モダンな中華の内装。いちばんにぎわうのは昼で、1,100円で酢豚や麻婆豆腐などのメインにご飯とスープのおかわり、サラダ、漬物、それにお粥とセルフのコーヒー、なくなるまでのさつまいものお菓子もつく。夜は各フロアが宴会、結婚式、同窓会で埋まり、アラカルトはカニチャーハン (1,320円) や香港風のエビチリ (1,980円) など。2026年の口コミではお得でなつかしいという声が多く、10年ぶりの人は良くも悪くもないと感じたそう。テイクアウトとデリバリーも。',
  });
}

// ================================================================ みなみの十忠八九
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27134848/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://lit.link/10chu89';
  const WD = day(['17:00', '01:00']); const WE = day(['17:00', '02:00']);
  put({
    id: 'osaka_minami_no_jucchu_hakku_namba', name: 'みなみの十忠八九 (Minami no Jucchu Hakku)', category: 'OMNI',
    lat: 34.666267, lng: 135.499894, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Signatures include a breaded rare salmon fry and crab gratin, with tempura, oden and sashimi with soy sauce.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood izakaya; oden and appetizers are in dashi.',
    hours_raw: 'Sun–Thu, holidays and the day after 17:00–01:00; Fri, Sat and nights before holidays 17:00–02:00 (Tabelog). Reservations recommended, often full (2026 reviews); a 2-hour limit when busy; a booking may be cancelled if you are 15 minutes late without contact; groups and private hire by phone (Tabelog). A walk-in on a holiday had 50 minutes to last order (September 2026). Cards (VISA, Master, JCB, Diners) and PayPay; no e-money (Tabelog). 40 seats over 1F and 2F with a counter and sofa seats; private hire for 20–50; non-smoking; free Wi-Fi (Tabelog). Menus in English, simplified Chinese and Korean, with photos (Tabelog). Opened 16 March 2023 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WE, 5: WE, 6: WD }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba 4-2-6, 1F–2F of the トシヒサビル, in the back streets — 1 min from Namba Stn (Midosuji Line)',
    cuisine: 'Seafood izakaya with a wide range of sake (Tabelog) · signatures: a seafood yukhoe plate and fresh salmon fried rare (Tabelog; 2026 reviews) · crab gratin with crab legs, grilled tuna cheek, assorted oden, horse sashimi soaked in broth, a mash-it-yourself potato salad with soft egg, hamo tempura, seafood kamameshi, crab-miso tofu as the starter (October 2026) · salmon sashimi (September 2026) · banquet courses with all-you-can-drink sake ¥4,000–8,000 (Tabelog)',
    website: SITE, gmaps: gm('みなみの十忠八九 難波'), menu_url: null,
    notes: "[Seafood izakaya · Namba, a minute from the station] A busy two-floor seafood izakaya in the back streets a minute from Namba Station, part of a small group whose main shop is a fish shop in Fukushima, open until 1 a.m. (2 a.m. at weekends) and hard to get into without a booking. The two dishes everyone orders are the seafood yukhoe plate and the salmon fried rare under sauce and condiments; then crab gratin crowned with crab legs, grilled tuna cheek, oden, horse sashimi in broth or a potato salad you mash yourself, with plenty of sake. Diners in 2026 praised the prices, the freshness and the fast, friendly staff; one found the sashimi platter and beer small for the money (October 2026). Menus in English, Chinese and Korean.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null, background: 'Shop-maintained Tabelog listing: a casual eatery and tavern of fresh seafood and Japanese sake in the back streets of Namba; part of the Jucchu Hakku group with Fish Shop Jucchu Hakku Fukushima Main Store, Ohatsu no Jucchu Hakku and a bar in Fukushima (names as on the English listing). Opened 16 March 2023.', philosophy: null, specialty: 'Seafood yukhoe plate; salmon rare fry.',
      anecdotes: [
        { text: '"The highlight was the grilled tuna cheek—so tender and melt-in-your-mouth delicious." — October 2026.', source: R + 'B537654590/' },
        { text: '"The Salmon Rare Fry was generously topped with sauce and condiments. The Gratin was impressively presented with crab legs" — October 2026, on a trip to Osaka.', source: R + 'B538198003/' },
        { text: '"Even around 9 PM, it was fully booked. I think it\'s quite difficult to walk in without a reservation." — September 2025, a repeat visit.', source: R + 'B495399307/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): みなみの十忠八九 (ミナミノジュッチュウハック)、居酒屋・海鮮・日本酒バー、大阪市中央区難波4-2-6 トシヒサビル 1F・2F、地下鉄なんば駅から徒歩1分、日〜木・祝17:00〜翌1:00、金・土・祝前日17:00〜翌2:00、予約可 (混雑時は2時間制、15分連絡がないと取り消すことも、団体と貸切は電話で)、カード・PayPay 可、40席、カウンター、ソファ席、貸切20〜50名、禁煙、Wi-Fi、英語・中国語 (簡体字)・韓国語のメニュー、写真つき、2023年3月16日オープン、グループ店は Fish Shop Jucchu Hakku Fukushima Main Store、Ohatsu no Jucchu Hakku など。店の紹介 (英訳): なんばの裏通りの鮮魚と日本酒の大衆食堂・酒場、名物は海鮮ユッケ盛りとサーモンのレアフライ、日本酒飲み放題つきの宴会コース4,000〜8,000円。口コミ(2025年9月〜2026年10月): サーモンのレアカツ、海鮮ユッケ、カニのグラタン、マグロのほほ肉の焼き物、おでん、だしに漬けた馬刺し、自分でつぶすポテトサラダ、鱧の天ぷら、海鮮の釜飯、お通しのカニみそ豆腐、いつも満席なので予約を、スタッフが親切で早い、刺身の盛り合わせとビールが値段のわりに小さいという声。',
      confidence: 'medium', sources: [TB, SITE, R + 'B495399307/', R + 'B536042157/', R + 'B537013953/', R + 'B537143388/', R + 'B537499128/', R + 'B537654590/', R + 'B537881046/', R + 'B538054392/', R + 'B538198003/', R + 'B538489756/'] },
    cultural_comfort: { level: 'english', note: 'Menus in English, simplified Chinese and Korean, with photos (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波4-2-6 トシヒサビル 1F・2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波四丁目2番6号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No menu prices on Tabelog or in the reviews read, beyond the banquet-course range.', last_checked: TODAY, items: [
      it('', '', 'Seafood yukhoe plate', '', 'Signatures', 'ask', 'no', 'Tabelog; October 2026.', 'seafood_yukhoe'),
      it('', '', 'Fresh salmon rare fry', '', 'Signatures', 'no', 'no', 'Tabelog; 2026 reviews.', 'salmon_rare_fry'),
      it('', '', 'Crab gratin', '', 'Dishes', 'no', 'no', 'October 2026 reviews.', 'crab_gratin'),
      it('', '', 'Banquet course with all-you-can-drink sake (from)', '¥4,000', 'Courses', 'ask', 'no', 'Tabelog listing; up to ¥8,000.', 'banquet_course'),
    ] }, {
    cuisine: '日本酒の豊富な海鮮の居酒屋 (食べログ)・名物: 海鮮ユッケの盛り合わせと生のサーモンのレアフライ (食べログ、2026年の口コミ)・カニの脚がのったカニのグラタン、マグロのほほ肉の焼き物、おでんの盛り合わせ、だしに漬けた馬刺し、半熟卵を自分でつぶすポテトサラダ、鱧の天ぷら、海鮮の釜飯、お通しのカニみそ豆腐 (2026年10月)・サーモンの刺身 (2026年9月)・日本酒飲み放題つきの宴会コース4,000〜8,000円 (食べログ)',
    neighborhood: '難波4-2-6、トシヒサビルの1・2階、裏通り。地下鉄なんば駅から徒歩1分',
    gf_detail: '要確認。グルテンの情報なし。名物には衣をつけたサーモンのレアフライとカニのグラタンがあり、天ぷら、おでん、醤油で食べる刺身も。',
    vegan_detail: 'ヴィーガンではありません。海鮮の居酒屋で、おでんやお通しはだしを使う。',
    notes: '[海鮮居酒屋・なんば、駅から1分] なんば駅から1分の裏通りにある、2フロアのにぎやかな海鮮の居酒屋。Fukushima の魚屋が本店の小さなグループの店で、夜1時 (週末は2時) まで開いているが、予約なしでは入りにくい。みんなが頼むのは海鮮ユッケの盛り合わせと、ソースと薬味をのせたサーモンのレアフライ。それからカニの脚がのったカニのグラタン、マグロのほほ肉の焼き物、おでん、だしに漬けた馬刺し、自分でつぶすポテトサラダを日本酒と一緒に。2026年の口コミでは値段、新鮮さ、早くて親切なスタッフが好評で、刺身の盛り合わせとビールが値段のわりに小さいという人も (2026年10月)。メニューは英語、中国語、韓国語も。',
  });
}

save();
