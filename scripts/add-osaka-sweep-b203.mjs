// Osaka sweep (2-mile circle around Dotonbori), batch 203 — mom-and-pop phase (≤20 seats, 30+ reviews), nearest-first past ~1 km.
//   + 旬゛喫茶 フツウニフルウツ Jun Kissa Futsuni Fruits (fruit-sandwich kissa upstairs in the 1931 former-bank Sakaisuji Club building; Minamisenba)
//   - パンとエスプレッソと 堺筋倶楽部 27126406 — skipped: Pan to Espresso to chain (30+ shops nationwide, franchise recruiting in all 47 prefectures)
//   + FUKUSHIMA COFFEE&Cafe de Rope (roaster-dealer's own coffee stand, open since 1988; Inari, near JR Namba)
//   + スタンド ソバ サンカク 南船場店 Stand Soba Sankaku Minami senba ten (juwari soba at lunch, soba izakaya until 3–5 am; Bakuromachi)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-30';
const { put, skip, save } = openCitySweep('osaka', TODAY, 203);
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 旬゛喫茶 フツウニフルウツ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27140814/'; const R = TB + 'dtlrvwlst/';
  const SHOP = 'https://bread-espresso.jp/shop/'; const MENU = 'https://bread-espresso.jp/menu_pdf/junkissa_futsuunifuruutsu_menu.pdf';
  const H = day(['11:00', '16:00']);
  put({
    id: 'osaka_futsuni_fruits_minamisenba', name: '旬゛喫茶 フツウニフルウツ (Jun Kissa Futsuni Fruits)', category: 'OMNI',
    lat: 34.677622, lng: 135.506664, cuisine_type: 'kissaten',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the food is fruit sandwiches on bread and baked goods. Only the drinks (hand-drip coffee, tea, juices, cream soda) are free of bread.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the fruit sandwiches are made with cream cheese or flavoured cream, and the strawberry milk and cream soda carry ice cream. The Japanese apple and mikan juices are the plain options.',
    hours_raw: 'Daily 11:00–16:00; closing days not fixed (Tabelog, shop site). Seats can be reserved through Tabelog; items can then be reserved by Instagram message; no same-day reservations; at busy times seating is limited to one hour (Tabelog). Order and pay at the entrance, then sit (April–July 2026 reviews). Tabelog says cashless payment only (cards, IC cards, PayPay); an August 2026 review says cash or PayPay only — check. 14 seats; non-smoking (Tabelog). Opened 22 February 2024 (Tabelog). Up the stairs at the side of the building; the entrance is shared with Pan to Espresso to and is easy to miss (June–July 2026 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Minamisenba 1-15-12, Sakaisuji Club building 2F (above Pan to Espresso to) — 6 min walk from Sakaisuji-Hommachi or Nagahoribashi Stn',
    cuisine: 'Fruit kissa (14 seats) · fruit sandwiches with seasonal fruit, from ¥1,400 (official menu): fig, orange and kiwi with cream cheese ¥1,400 (May and August 2026), white peach with Earl Grey cream ¥1,600 (July 2026), American cherry with chocolate cream (June 2026) · strawberry milk with strawberry pieces, vanilla ice cream and fresh strawberries ¥700 (April 2026) · キャンドルムー (Candle mou) ¥700, baked goods from ¥350 (official menu) · hand-drip coffee, tea, cream soda, Japanese apple and mikan juice (official menu) · an acai bowl was sold out on a June 2026 visit · shelves of manga to read',
    website: SHOP, gmaps: gm('旬゛喫茶 フツウニフルウツ 南船場'), menu_url: MENU,
    notes: "[Kissa · Minamisenba, fruit sandwiches upstairs in a former bank] A fruit kissa on the second floor of the Sakaisuji Club, a building that went up as a bank in 1931 (April 2026 review); Pan to Espresso to bakes on the ground floor, and the same company runs both. The entrance and staircase are grand, the room is retro and calm, with many clocks, tables stamped with fruit patterns and a wall of manga to read. The draw is the thick-cut fruit sandwich: figs, orange and kiwi with cream cheese, white peach with Earl Grey cream, American cherries with chocolate cream — the fruit changes with the season. A strawberry milk topped with ice cream and fresh strawberries is the other favourite. Diners may also bring up bread bought downstairs and re-toast it here, so seats fill fast: reserve, or come early. One July 2026 diner found the peach disappointing and smelled frying from the kitchen below.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Run directly by 株式会社パンとエスプレッソと (Pan to Espresso to Co.), listed under its "other shops" on the company site; the company\'s Pan to Espresso to bakery café occupies the 1F of the same building (shop site). Opened 22 February 2024 (Tabelog).', philosophy: 'Fruit sandwiches made with seasonal fruit (June 2026 review; official menu "from ¥1,400").', specialty: 'Fruit sandwiches; strawberry milk.',
      anecdotes: [
        { text: '"The building, constructed in 1931 as a bank, exudes a sense of grandeur. The first floor houses \'Pan to Espresso to,\' while this café is on the second floor." — April 2026, strawberry milk ¥700.', source: R + 'B527757191/' },
        { text: '"Some customers order from \'Futsuni Fruits,\' while others bring in bread purchased from the first floor\'s \'Bread and Espresso\' to enjoy in the \'Futsuni Fruits\' dining area, making the seating fill up quite quickly." — June 2026, weekday 11:30 reservation.', source: R + 'B530663979/' },
      ],
      japanese_sources_summary: '食べログ: 旬゛喫茶 フツウニフルウツ、大阪市中央区南船場1-15-12 堺筋倶楽部 2F、大阪メトロ堺筋本町駅・長堀橋駅から徒歩6分、毎日11:00〜16:00、不定休、予約可 (席の予約のあとインスタのメッセージで品物も予約、当日予約不可)、混雑時は1時間制、キャッシュレスのみ、14席、禁煙、オープン日2024年2月22日。店のサイト (株式会社パンとエスプレッソと): その他 (直営) に旬゛喫茶フツウニフルウツ、堺筋倶楽部2F、11:00〜16:00、不定休。メニュー: フルーツサンド1400円〜、キャンドルムー700円、焼き菓子350円〜、ハンドドリップコーヒー700円、紅茶600円、クリームソーダ850円〜、国産みかんジュース600円、国産りんごジュース600円、マンガも自由に。口コミ(2026年4月〜8月): 1931年に銀行として建った建物、1階はパンとエスプレッソと、入口で注文と支払い、マンガの棚、たくさんの時計、季節のフルーツサンド (いちじく・オレンジ・キウイとクリームチーズ1400円、白桃とアールグレイのクリーム1600円、アメリカンチェリーとチョコのクリーム)、Strawberry Milk 700円、下のパンを持ち込んでトースターで温め直せる、予約がおすすめ、現金かPayPayのみという声も、桃が残念で下の厨房の油のにおいがしたという声も。',
      confidence: 'medium', sources: [TB, SHOP, MENU, R + 'B527757191/', R + 'B528351272/', R + 'B528452184/', R + 'B530637219/', R + 'B530663979/', R + 'B531052805/', R + 'B531772324/', R + 'B533856603/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order and pay at the entrance; reserve a seat through Tabelog, no same-day bookings (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場1-15-12 堺筋倶楽部 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog corporate-member listing current; reviews dated April–August 2026; on the operator\'s shop list (bread-espresso.jp, read 2026-10-30).' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場一丁目15番12号 (go) 16m; 2F of the Sakaisuji Club building — Pan to Espresso to Sakaisuji Club (Tabelog 27126406, 1F, Tabelog point ~10 m away) was skipped as a chain branch, so nothing stacks here; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU, R + 'B527757191/', R + 'B528351272/', R + 'B531772324/', R + 'B533856603/'],
    price_note: 'Base prices from the official menu PDF (undated, read October 2026); dated prices from 2026 reviews. A May 2026 review paid ¥600 for drip coffee and ¥750 for cream soda, below the menu\'s ¥700 and ¥850.', last_checked: TODAY, items: [
      it('フルーツサンド', '', 'Fruit sandwich (seasonal fruit)', '¥1,400~', 'Food', 'no', 'no', 'Official menu; fig, orange and kiwi with cream cheese ¥1,400 (May, August 2026); white peach with Earl Grey cream ¥1,600 (July 2026).', 'fruitsando'),
      it('キャンドルムー', 'Candle mou', 'Candle mou', '¥700', 'Food', 'ask', 'ask', 'Official menu; not described.', 'candlemou'),
      it('焼き菓子', '', 'Baked goods', '¥350~', 'Food', 'no', 'ask', 'Official menu.', 'bakedgoods'),
      it('', '', 'Strawberry milk (with vanilla ice cream)', '¥700', 'Drinks', 'ask', 'no', 'April 2026.', 'strawberrymilk'),
      it('ハンドドリップコーヒー', '', 'Hand-drip coffee', '¥700', 'Drinks', '', '', 'Official menu; ¥600 in May 2026.', 'coffee'),
      it('クリームソーダ', '', 'Cream soda', '¥850~', 'Drinks', 'ask', 'no', 'Official menu; melon cream soda ¥750 in May 2026.', 'creamsoda'),
      it('国産りんごジュース', '', 'Japanese apple juice', '¥600', 'Drinks', '', '', 'Official menu.', 'applejuice'),
      it('国産みかんジュース', '', 'Japanese mikan juice', '¥600', 'Drinks', '', '', 'Official menu.', 'mikanjuice'),
    ] }, {
    cuisine: 'フルーツの喫茶 (14席)・季節のフルーツサンド 1400円〜 (メニュー): いちじく・オレンジ・キウイとクリームチーズ 1400円 (2026年5月・8月)、白桃とアールグレイのクリーム 1600円 (2026年7月)、アメリカンチェリーとチョコのクリーム (2026年6月)・いちごとバニラアイスをのせた Strawberry Milk 700円 (2026年4月)・キャンドルムー 700円、焼き菓子 350円〜 (メニュー)・ハンドドリップコーヒー、紅茶、クリームソーダ、国産りんごジュース、国産みかんジュース (メニュー)・2026年6月にはアサイーボウルが売り切れ・マンガの棚',
    neighborhood: '南船場1-15-12 堺筋倶楽部 2F (1階はパンとエスプレッソと)。堺筋本町駅・長堀橋駅から徒歩6分',
    gf_detail: 'グルテンフリーではありません。料理はパンのフルーツサンドと焼き菓子。パンを使わないのは飲み物 (ハンドドリップコーヒー、紅茶、ジュース、クリームソーダ) だけ。',
    vegan_detail: 'ヴィーガンではありません。フルーツサンドはクリームチーズや味つきのクリーム入り、Strawberry Milk とクリームソーダにはアイス。国産りんごジュースとみかんジュースはそのまま飲める。',
    notes: '[喫茶・南船場、元銀行の2階でフルーツサンド] 1931年に銀行として建った堺筋倶楽部の2階にあるフルーツの喫茶 (2026年4月の口コミ)。1階ではパンとエスプレッソとがパンを焼き、同じ会社が両方を営む。入口と階段は堂々として、店内はレトロで落ち着き、たくさんの時計、フルーツ柄のスタンプのテーブル、読めるマンガの壁。目当ては厚切りのフルーツサンドで、いちじく・オレンジ・キウイとクリームチーズ、白桃とアールグレイのクリーム、アメリカンチェリーとチョコのクリームなど、フルーツは季節で変わる。アイスといちごをのせた Strawberry Milk も人気。下で買ったパンを持って上がり、ここで温め直して食べる人もいるので席はすぐ埋まる。予約か早めの来店を。2026年7月には桃が残念で、下の厨房から揚げ物のにおいがしたという声も。',
  });
}

// ================================================================ パンとエスプレッソと 堺筋倶楽部 — chain
skip('27126406', 'パンとエスプレッソと 堺筋倶楽部: Pan to Espresso to chain branch — the operator\'s shop list (bread-espresso.jp/shop/, read 2026-10-30) shows 30+ パンとエスプレッソと shops in Tokyo, Kanagawa, Chiba, Kyoto, Osaka, Hyogo, Aichi, Mie, Shiga, Fukuoka, Oita, Kochi, Okinawa, Miyagi, Aomori, Fukushima and more, plus a 47都道府県ご当地オーナー募集 franchise drive; Tabelog corporate-member listing. Its 2F sister 旬゛喫茶 フツウニフルウツ (27140814) is a single-shop concept and is recorded.');

// ================================================================ FUKUSHIMA COFFEE&Cafe de Rope
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27048371/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.f-coffeesystem.com/'; const CAFE = SITE + 'roasters-cafe-cafe-de-rope/'; const ABOUT = SITE + 'about/';
  const H = day(['08:00', '16:00']);
  put({
    id: 'osaka_fukushima_coffee_cafe_de_rope_inari', name: 'FUKUSHIMA COFFEE&Cafe de Rope', category: 'OMNI',
    lat: 34.663526, lng: 135.492013, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the food is toast, sandwiches and hot dogs. Coffee, juice, boiled eggs and bananas are the bread-free choices.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: egg and cheese toasts, egg sandwiches and hot dogs; café au lait and lattes are made with milk. Black coffee, mixed juice (ask) and bananas are the options.',
    hours_raw: 'Tue–Sat and public holidays 8:00–16:00; closed Sunday and Monday, and over the summer holidays and long weekends such as Golden Week; hours may change, so check (Tabelog). Coffee is paid for at the register and the staff make it (May 2025 review). Cards, IC cards, Rakuten Edy, nanaco, WAON, iD, QUICPay; QR payments accepted (Tabelog). 20 seats including counter seats with power outlets and a terrace; non-smoking, including the terrace and e-cigarettes; wheelchair accessible; free Wi-Fi (Tabelog; February 2026 review). Children welcome, but noisy children are not, as some guests read (Tabelog). Paid parking nearby. Opened 13 October 1988 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Inari 1-4-18, Nishi-Namba Grand Bldg 1F, in a residential street — 445 m (about 5 min) from JR Namba Stn',
    cuisine: 'In-house-roasted coffee stand and café of a coffee-roaster dealer (20 seats) · coffee ¥250 to take away, ¥300 dine-in (May 2025); hot coffee ¥350 (February 2026) · cappuccino, café latte, iced Americano, café au lait · light food only (toasts and sandwiches since about February 2024): mixed cheese toast ¥450, tamagoyaki sandwich ¥400 (February 2026); egg cheese toast ¥400, small hot dog ¥200, mixed juice ¥550 (August 2025); boiled egg ¥50, half a banana ¥50 (May 2025) · coffee beans, coffee bags and café-au-lait base for sale',
    website: CAFE, gmaps: gm('FUKUSHIMA COFFEE Cafe de Rope 稲荷'), menu_url: null,
    notes: "[Coffee stand · Inari near JR Namba, a roaster dealer's own café since 1988] The street smells of roasting coffee before you reach the door. This is the café of Fukushima Coffee, a company that sells, installs and repairs coffee roasters (it is the Japan agent for DIEDRICH), and gleaming machines stand on display behind the big windows; one diner was told a single FUJI ROYAL roaster costs as much as a domestic car. The coffee is roasted in-house and cheap for Namba: ¥250 to take away, ¥300 to sit, and the beans are for sale. Food is light and quick: cheese toast, a hefty tamagoyaki sandwich, a small soft hot dog, ¥50 boiled eggs and half-bananas. There is a roomy seating area at the back, counter seats with outlets for laptops, and a terrace. One diner first came before getting married and still stops by with mom after neighbourhood errands (2024–2025 reviews).",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'The café department, at the head office, of 株式会社福島珈琲 (Fukushima Coffee Co.), whose representative is 福島建三 (company site). The company sells new and used coffee roasters, is the Japan agent for DIEDRICH, and roasts and sells beans; the café shows roasters from several makers and does test roasts (company site). Opened 13 October 1988 (Tabelog). Once delivered lunches and served rice dishes, salads and cold noodles; by February 2024 the food was toasts and sandwiches, and the owner makes them right after the order (February 2024 review); by May 2024 the business focus had shifted to selling and maintaining roasters (May 2024 review).', philosophy: 'Full support for customers\' coffee businesses, from roasters to green-bean quality (company site).', specialty: 'Coffee roasted in-house; cheap takeaway coffee; toasts and sandwiches.',
      anecdotes: [
        { text: '"They use a roasting machine from the brand FUJI ROYAL, and I heard that just this one machine could buy a domestic car!" — September 2025, iced Americano to go.', source: R + 'B514004643/' },
        { text: '"Everything is incredibly cheap! Coffee is just JPY 250 for take away, and JPY 300 for dine-in… And this is in Namba!" — May 2025.', source: R + 'B506689994/' },
      ],
      japanese_sources_summary: '食べログ: FUKUSHIMA COFFEE&Cafe de Rope、大阪市浪速区稲荷1-4-18 西なんばグランドビル、JR難波駅から445m、火〜土・祝8:00〜16:00、日曜・月曜休み、夏休みやゴールデンウィークなどの連休も休み、カード・交通系IC・楽天Edy・nanaco・WAON・iD・QUICPay・QR可、20席、カウンター、テラス、禁煙 (テラスと電子タバコも)、車椅子可、Wi-Fi、子供可だが騒ぐ子供は不可、近くにコインパーキング、オープン日1988年10月13日。会社のサイト: 株式会社福島珈琲が運営するロースター&自家焙煎「カフェ・ド・ロペ」、各メーカーの焙煎機を展示しテストローストも可、テイクアウトのコーヒースタンド、コーヒー豆、コーヒーバッグ、カフェオレベースを販売、本社 (喫茶部門カフェ・ド・ロペ) は稲荷1-4-18 西なんばグランドビル1F、代表 福島建三、DIEDRICH 日本総代理店。口コミ(2024年2月〜2026年2月): 以前は昼の配達やご飯もの、サラダ、冷たい麺もあったが今はトーストとサンドイッチだけ、オーナーが注文を受けてすぐに作る、FUJI ROYAL の焙煎機、テイクアウト250円・店内300円、ゆで卵50円、バナナ半分50円、ホットドッグ200円、たまごチーズトースト400円、ミックスジュース550円、ミックスチーズトースト450円、たまご焼きサンド400円、ホットコーヒー350円、奥に広い席、カウンターにコンセント、結婚前から通う人も。',
      confidence: 'medium', sources: [TB, CAFE, ABOUT, R + 'B479736867/', R + 'B504309642/', R + 'B504354440/', R + 'B506689994/', R + 'B507611515/', R + 'B514004643/', R + 'B523641497/', R + 'B528573994/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Pay at the register first; light food only (2025–2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区稲荷1-4-18 西なんばグランドビル',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated through February 2026; the company site (news dated October 2026) still lists the café at this address.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区稲荷一丁目4番18号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B506689994/', R + 'B523641497/', R + 'B528573994/'],
    price_note: 'Prices from reviews dated May 2025 to February 2026.', last_checked: TODAY, items: [
      it('', '', 'Coffee to take away', '¥250', 'Coffee', '', '', 'May and August 2025.', 'coffee_to'),
      it('', '', 'Hot coffee (dine-in)', '¥350', 'Coffee', '', '', 'February 2026; ¥300 in May 2025.', 'coffee'),
      it('', '', 'Mixed cheese toast', '¥450', 'Food', 'no', 'no', 'February 2026.', 'cheesetoast'),
      it('', '', 'Tamagoyaki sandwich', '¥400', 'Food', 'no', 'no', 'February 2026.', 'tamagosand'),
      it('', '', 'Egg cheese toast', '¥400', 'Food', 'no', 'no', 'August 2025.', 'eggtoast'),
      it('', '', 'Hot dog (small)', '¥200', 'Food', 'no', 'no', 'August 2025.', 'hotdog'),
      it('', '', 'Mixed juice', '¥550', 'Drinks', '', 'ask', 'August 2025.', 'mixjuice'),
      it('', '', 'Boiled egg', '¥50', 'Extras', '', 'no', 'May 2025.', 'boiledegg'),
    ] }, {
    cuisine: 'コーヒー焙煎機を扱う会社の自家焙煎のコーヒースタンドと喫茶 (20席)・コーヒーはテイクアウト250円、店内300円 (2025年5月)、ホットコーヒー350円 (2026年2月)・カプチーノ、カフェラテ、アイスアメリカーノ、カフェオレ・料理は軽食だけ (2024年2月ごろからトーストとサンドイッチ): ミックスチーズトースト450円、たまご焼きのサンド400円 (2026年2月)、たまごチーズトースト400円、小さめのホットドッグ200円、ミックスジュース550円 (2025年8月)、ゆで卵50円、バナナ半分50円 (2025年5月)・コーヒー豆、コーヒーバッグ、カフェオレベースも販売',
    neighborhood: '稲荷1-4-18 西なんばグランドビル1F、住宅街。JR難波駅から445m (徒歩5分ほど)',
    gf_detail: 'グルテンフリーではありません。料理はトースト、サンドイッチ、ホットドッグ。パンを使わないのはコーヒー、ジュース、ゆで卵、バナナ。',
    vegan_detail: 'ヴィーガンではありません。たまごやチーズのトースト、たまごのサンド、ホットドッグ。カフェオレやラテは牛乳入り。ブラックコーヒー、ミックスジュース (要確認)、バナナなら。',
    notes: '[コーヒースタンド・JR難波近くの稲荷、焙煎機の会社が1988年から営む喫茶] 店に着く前から焙煎の香りがする。コーヒー焙煎機の販売、設置、修理をする福島珈琲 (DIEDRICH の日本総代理店) の喫茶で、大きなガラス窓の奥にぴかぴかの焙煎機が並ぶ。FUJI ROYAL の焙煎機一台で国産車が買えると聞いたという声も。コーヒーは自家焙煎で、なんばなのにテイクアウト250円、店内300円と安く、豆も買える。料理は軽くて早い。チーズトースト、ボリュームのあるたまご焼きのサンド、ふんわりした小さめのホットドッグ、50円のゆで卵とバナナ半分。奥に広い席、ノートパソコン向けのコンセントつきカウンター、テラスも。結婚前から通い、今も近所の買い物のついでに母と寄る人も。',
  });
}

// ================================================================ スタンド ソバ サンカク 南船場店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27126433/'; const R = TB + 'dtlrvwlst/';
  const N3 = ['19:00', '03:00'], N5 = ['19:00', '05:00'];
  put({
    id: 'osaka_stand_soba_sankaku_minamisenba', name: 'スタンド ソバ サンカク 南船場店 (Stand Soba Sankaku Minami senba ten)', category: 'OMNI',
    lat: 34.678331, lng: 135.498086, cuisine_type: 'udon_soba',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The soba is juwari (100% buckwheat) per the shop, but the dipping sauce and hot broths are soy- and katsuobushi-based, some hot soba are thickened, and there is tempura and fried loach; ask before ordering.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the warm soba broths are katsuobushi dashi, and the toppings and izakaya dishes include horumon, pork, chicken, shirasu, fish and egg.',
    hours_raw: 'Lunch Tue–Fri 11:30–15:00, Sat 12:00–15:00; night Sun–Thu 19:00–3:00, Fri–Sat 19:00–5:00; no lunch Sunday or Monday (Tabelog). A September 2026 regular says it stays open late as long as there are customers. Lunch soba comes with a mixed-rice bowl and a small dish (2025–2026 reviews); at night a one-drink order is required (August 2026 review) and children are not admitted (Tabelog). Reservations and private hire for up to 20 accepted by phone (Tabelog). Cards, PayPay and au PAY; no e-money; no service charge (Tabelog). 14 seats: 8 at the counter and three tables for 2 that join for 4–5; up to 20 standing; ashtray outside, smoking allowed from midnight (Tabelog). Opened 18 November 2021 (Tabelog).',
    hours: { 0: day(N3), 1: day(['11:30', '15:00'], N3), 2: day(['11:30', '15:00'], N3), 3: day(['11:30', '15:00'], N3), 4: day(['11:30', '15:00'], N5), 5: day(['12:00', '15:00'], N5), 6: day(N3) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Bakuromachi 4-7-5, TS Bldg 1F, on Yokobori-suji in Minamisenba — 4 min (310 m) from Yotsubashi Stn exit 1-a, 5 min from Honmachi Stn exit 21 or Shinsaibashi Stn exit 3',
    cuisine: 'Juwari soba stand by day, soba izakaya until 3–5 am (14 seats) · lunch soba with mixed rice and a small dish: mori soba large ¥1,200 (August 2024, October 2026), horumon soba ¥1,100 (November 2025), pork and green onion soba ¥1,200 (January 2025), thickened ginger chicken-and-egg soba ¥1,100 (March 2025), bukkake soba with ume, grated daikon and shirasu ¥1,380 or with grated wasabi ¥1,280 (August 2026), daily specials such as warm soba with tororo and nori (February 2026) · thick, firm, aromatic noodles; rich katsuobushi dipping sauce; thick soba-yu · seaweed, curry and matcha salts on the table · night: oden, fried loach, dashimaki, tuna sashimi, crab miso, buttered grilled eggplant, grilled fish, mozuku tempura · sake from around Japan, shochu, whisky, wine',
    website: null, gmaps: gm('スタンド ソバ サンカク 南船場店'), menu_url: null,
    notes: "[Soba · Minamisenba, juwari soba by day and a late soba bar by night] A soba shop on Yokobori-suji that looks more like a stylish bar (one diner calls the interior rock and roll), with a whisky bottle on the counter even at lunch. The soba is juwari, 100% buckwheat, on the thick and firm side and strongly aromatic, so firm that one diner wondered whether it was really juwari. At lunch the soba comes with a bowl of mixed rice and a small side: horumon soba with a clear, delicate broth, a ginger-thickened chicken-and-egg soba for cold days, bukkake soba with ume and shirasu, and a large mori soba whose size made one diner laugh. Try a bite with the seaweed, curry or matcha salt before the rich katsuobushi dipping sauce, and finish with the thick soba-yu. From 19:00 it turns soba izakaya, with oden, fried loach, crab miso, mozuku tempura and sake from around Japan, open until 3 am (5 am on Friday and Saturday). An August 2026 diner recalls branches in Awaza, Fukushima and Ura-Namba that have since gone, and says the owner is now different.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Soba stand and izakaya opened on 18 November 2021 (Tabelog). An August 2026 diner remembers branches in Awaza, Fukushima and Ura-Namba that no longer exist, and says the owner is now different. Two people run lunch on a busy weekday (November 2025 review); a manager is on the floor (July 2026 review).', philosophy: '100% buckwheat soba paired with seasonal sake; daily specials so there is something new to discover (Tabelog, shop-provided).', specialty: 'Juwari mori soba; warm soba in katsuobushi broth; late-night soba with sake.',
      anecdotes: [
        { text: '"I ordered the large serving of mori soba (JPY 1200), which came with lotus root kinpira and hijiki with perilla rice… I couldn\'t help but laugh at how large the portion was, even more than I expected." — October 2026, weekday lunch.', source: R + 'B536942039/' },
        { text: '"They stay open late as long as there are customers, making it a great spot for those looking to have a late-night drink in the Minamisenba area." — September 2026.', source: R + 'B535708772/' },
      ],
      japanese_sources_summary: '食べログ: スタンド ソバ サンカク 南船場店、大阪市中央区博労町4-7-5 TSビル 1F、四ツ橋駅1-a出口から徒歩4分 (310m)、本町駅21番出口・心斎橋駅3番出口から徒歩5分、月・日19:00〜3:00、火〜木11:30〜15:00・19:00〜3:00、金11:30〜15:00・19:00〜5:00、土12:00〜15:00・19:00〜5:00、予約可、貸切20名まで、カード・PayPay・au PAY可、電子マネー不可、サービス料なし、14席 (カウンター8、2名テーブル3、つなげて4〜5名)、立ち20名、店の外に灰皿で0時から喫煙可、夜は子供不可、オープン日2021年11月18日。店の紹介: 十割そばと季節の日本酒、鰹節のだしの温かいそば、日替わり、おでん、揚げたどじょう、全国の日本酒。口コミ(2024年8月〜2026年10月): 盛り蕎麦大盛り1200円にれんこんのきんぴらとひじきと大葉のご飯、ホルモンのそば1100円、豚とねぎのそば1200円、生姜のあんかけの鶏と玉子のそば1100円、梅おろしとしらすのぶっかけ1380円、わさびおろしのぶっかけ1280円、とろろと海苔の日替わり、太めで固くて香り高いそば、鰹の濃いつけ汁、濃いそば湯、海苔塩・カレー塩・抹茶塩、夜はワンドリンク制、だし巻き、まぐろの刺身、蟹味噌、焼きなすのバター、焼き鮭、もずくの天ぷら、ロックな内装、阿波座・福島・裏なんばにあった店はもうなくオーナーも変わったという声。',
      confidence: 'medium', sources: [TB, R + 'B489493014/', R + 'B522063288/', R + 'B531060846/', R + 'B533096594/', R + 'B535657834/', R + 'B535708772/', R + 'B536793134/', R + 'B536942039/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One drink per person at night; no children at night (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区博労町4-7-5 TSビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog corporate-member listing current; reviews dated July–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区博労町四丁目7番5号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B489493014/', R + 'B536793134/', R + 'B536942039/'],
    price_note: 'Prices from reviews dated August 2024 to October 2026; lunch soba includes a mixed-rice bowl.', last_checked: TODAY, items: [
      it('盛り蕎麦大盛り', '', 'Mori soba, large (with mixed rice)', '¥1,200', 'Lunch', 'ask', 'no', 'October 2026; also ¥1,200 in August 2024.', 'morisoba'),
      it('', '', 'Horumon soba', '¥1,100', 'Lunch', 'ask', 'no', 'November 2025.', 'horumonsoba'),
      it('', '', 'Pork and green onion soba', '¥1,200', 'Lunch', 'ask', 'no', 'January 2025.', 'butanegi'),
      it('', '', 'Bukkake soba with ume, grated daikon and shirasu (with salmon mixed rice)', '¥1,380', 'Lunch', 'ask', 'no', 'August 2026.', 'bukkake_ume'),
      it('', '', 'Bukkake soba with grated wasabi', '¥1,280', 'Lunch', 'ask', 'no', 'August 2026.', 'bukkake_wasabi'),
      it('', '', 'Mozuku tempura', '', 'Night', 'no', 'ask', 'September 2026.', 'mozukuten'),
    ] }, {
    cuisine: '昼は十割そばのスタンド、夜は3〜5時までそばの居酒屋 (14席)・昼のそばはご飯と小鉢つき: 盛り蕎麦大盛り1200円 (2024年8月、2026年10月)、ホルモンのそば1100円 (2025年11月)、豚とねぎのそば1200円 (2025年1月)、生姜のあんかけの鶏と玉子のそば1100円 (2025年3月)、梅おろしとしらすのぶっかけ1380円、わさびおろしのぶっかけ1280円 (2026年8月)、とろろと海苔の温かいそばなどの日替わり (2026年2月)・太めで固く香り高いそば、鰹の濃いつけ汁、濃いそば湯・卓上に海苔塩、カレー塩、抹茶塩・夜: おでん、揚げたどじょう、だし巻き、まぐろの刺身、蟹味噌、焼きなすのバター、焼き魚、もずくの天ぷら・全国の日本酒、焼酎、ウイスキー、ワイン',
    neighborhood: '博労町4-7-5 TSビル 1F、南船場の横堀筋。四ツ橋駅1-a出口から徒歩4分 (310m)、本町駅21番出口・心斎橋駅3番出口から徒歩5分',
    gf_detail: '要確認。店によるとそばは十割だが、つけ汁や温かいそばのだしは醤油と鰹節、あんかけのそばもあり、天ぷらや揚げたどじょうもあるので、注文の前に確認を。',
    vegan_detail: 'ヴィーガンではありません。温かいそばのだしは鰹節で、具や居酒屋の料理にはホルモン、豚、鶏、しらす、魚、卵。',
    notes: '[そば・南船場、昼は十割そば、夜は遅くまでそばの酒場] 横堀筋のそば屋だが、見た目はおしゃれなバーのよう (内装はロックという声も)。昼でもカウンターにウイスキーの瓶。そばは十割で、太めで固く香りが強い。本当に十割かと思うほど固かったという声も。昼のそばにはご飯と小鉢がつく。澄んだやさしいだしのホルモンのそば、寒い日には生姜のあんかけの鶏と玉子のそば、梅としらすのぶっかけ、思わず笑ったという量の盛り蕎麦大盛り。まずは海苔塩、カレー塩、抹茶塩で一口、それから鰹の濃いつけ汁で。最後は濃いそば湯を。19時からはそばの居酒屋になり、おでん、揚げたどじょう、蟹味噌、もずくの天ぷら、全国の日本酒。夜は3時まで (金土は5時まで)。2026年8月の口コミによると、阿波座、福島、裏なんばにあった店はもうなく、オーナーも変わったそう。',
  });
}

save();
