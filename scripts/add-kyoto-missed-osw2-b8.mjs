// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 8.
//   core (queue.mjs kyoto-missed next core 200, 2026-11-05, first two lane ids):
//   + 鮨 おび乃 Sushi Obino (8-seat Edomae counter off Tomikoji-Nishiki; young-artisan course and teyui-zushi lunch)
//   + CLAY POT CURRY OHMIYA (European-style curry in clay pots, moved from Marutamachi to Shinkyogoku in 2023)
//   notable (queue.mjs kyoto-missed next notable 200, first two lane ids):
//   + 京都カレー製作所 カリル Kariru (spice curry by Shinmachi-Marutamachi; monthly curry; since 2015)
//   + カレー専門店 ビィヤント Biyanto (8-seat katsu-curry counter opposite Kyoto University Hospital; since 1975)
//   None is in data/kyoto.json: grep by id, name (おび乃/Obino, OHMIYA, カリル/Kariru, ビィヤント/Biyanto) and address
//   (高宮町585, 桜之町438, 春帯町349, 聖護院西町12) found none. OHMIYA hits only kyoto_soup_curry_ohmiya, whose
//   background calls it "a sister shop of the European-style curry shop CLAY POT CURRY OHMIYA": a different format
//   from a two-shop group (official site 姉妹店: SOUP CURRY OHMIYA only), so drafted (sister-concept rule).
//   Pins: Tabelog /en/ point, cross-checked with GSI only.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-8');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 鮨 おび乃
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26034813/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://sushi-ovino.com/'; const FOOD = SITE + 'sushi-2/'; const ABOUT = SITE + 'course/'; const ACCESS = SITE + 'access/';
  const NEWS = SITE + 'news/r5-9'; const DRINK = SITE + 'drink/';
  const H = day(['17:00', '21:00']);
  put({
    id: 'kyoto_sushi_obino', name: '鮨 おび乃 (Sushi Obino)', category: 'OMNI',
    lat: 35.005543, lng: 135.765131, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Edomae sushi with soy-brushed nigiri, small dishes with miso and egg-yolk vinegar, and a soup; no gluten information is published (official site; 2022–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish courses only (official site).',
    hours_raw: '17:00–21:00, last entry 19:30; closed irregularly (official site; Tabelog lists every day 17:00–21:00). Bookings via the web or by email; the courses no longer start all at once — come at any time (official site). Lunch teyui-zushi is described on the official site; no lunch hours are given. 8 counter seats; non-smoking; cards; children welcome, with a children’s menu; tell the shop ahead about a stroller (Tabelog; official site). At the back of the 若葉ビル on the east side of Tomikoji north of Nishiki (south of Takoyakushi); 7 min from Shijo Stn, 5 min from Hankyu Kawaramachi Stn (official site). Opened 1 October 2020 (official site; Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Tomikoji-dori north of Nishiki — 5 min from Kyoto Kawaramachi Stn',
    cuisine: 'Edomae sushi counter with sake and wine chosen by the owner, a sommelier (official site; reviews) · young-artisan course ¥6,000 (3 small dishes, 12 nigiri, soup), made for first-timers, younger guests and visitors from abroad; head chef’s course ¥12,000 (15 items) or ¥17,000 (20 items) (official site) · lunch 手結寿司 (teyui-zushi) ¥4,800: 10 toppings and 10–15 balls of rice to wrap in Ariake nori toasted yourself over a charcoal shichirin, 3 small dishes and miso soup (official site) · fish chosen with a partner wholesaler at the central market, by season rather than brand (official site) · over 10 sakes served at chosen temperatures and in chosen vessels; red wine recommended with sushi; sake pairings (official site; 2022–26 reviews)',
    website: SITE, gmaps: gm('鮨 おび乃 京都 富小路'), menu_url: FOOD,
    notes: "[Sushi · Tomikoji-Nishiki, counter sushi made approachable] An eight-seat Edomae counter at the back of a building on Tomikoji just north of Nishiki, opened in 2020 and reworked in 2023 to make counter sushi easier for younger and overseas guests: a ¥6,000 course by its young artisans, the head chef's course from ¥12,000, and no fixed start time. The owner is a sommelier and pairs sake — served at chosen temperatures — or, unusually, red wine with the sushi. The official site also describes a teyui-zushi lunch of hand-rolls you assemble, toasting the nori over charcoal (¥4,800). Booking advised.",
    chef_bio: { chef_name: null, roles: ['Owner-sommelier (2022 reviews; official site: ソムリエ) and a head chef (大将), with young artisans for the ¥6,000 course (official site); no names on the site'], origin: null,
      background: 'Per the official site: opened in October 2020 during the pandemic; from September 2023 the single omakase with a simultaneous start was replaced by more affordable courses at any time, including a ¥6,000 course made by a different artisan from the head chef, to pass on counter-sushi culture to younger and overseas guests; young or less experienced staff are hired as sushi artisans; fish is bought through a partner wholesaler. An October 2022 review names the chef then as Mr. Kosakai, of the Sushi Masuda line; a March 2023 review links the shop to the Sukiyabashi Jiro and Sushi Masuda lineage.',
      philosophy: 'Per the official site: "もっとカウンター鮨を多くの方に知っていただきたい" — to make counter sushi known to more people, with some tension but no stiffness.',
      specialty: 'Edomae nigiri with sake or red-wine pairing; teyui-zushi lunch.',
      anecdotes: [
        { text: 'A January 2026 visitor who added the wine pairing found the chef explaining the origins of each sake and sushi in detail.', source: R + 'B521101282/' },
        { text: 'A November 2023 visitor booked the young-artisan course on TableCheck and noticed many foreign customers.', source: R + 'B474372015/' },
        { text: 'A March 2023 visitor was surprised to be served red wine with the stronger-flavoured pieces.', source: R + 'B463038630/' },
      ],
      japanese_sources_summary: '公式サイト (sushi-ovino.com): 鮨 おび乃、2020年10月オープン、2023年9月から「お任せコース1本」「一斉スタート」をやめ、好きな時間に来店可能に、若い世代や海外の方にカウンター鮨を、若手コース6,000円 (小鉢3品、鮨12貫、椀物)、大将コース 15品12,000円・20品17,000円、昼 手結寿司 TEYUI-SUSHI 4,800円 (小鉢3品、鮨ネタ10品、シャリ10〜15貫、有明海苔15枚を七輪で自分で炙る、お味噌汁)、中央市場の魚卸問屋と提携、日本酒は常時10種類以上、鮨には赤ワインを推奨、京都市中京区高宮町585 若葉ビル1階奥、富小路通り錦上ル (蛸薬師下ル) 東側、営業時間17〜21時 (最終入店19時30分)、不定休、カウンター8席、カード可。食べログ: 寿司・日本料理、8席、禁煙、子供可・お子様メニューあり、2020年10月1日オープン。口コミ (2022〜2026年、英語): ソムリエのオーナー、日本酒と赤ワインのペアリング、2022年は Kosakai 大将 (Sushi Masuda 系)。',
      confidence: 'medium', sources: [TB, SITE, FOOD, ABOUT, ACCESS, NEWS, DRINK, R + 'B434123750/', R + 'B442447441/', R + 'B455526219/', R + 'B458253958/', R + 'B463038630/', R + 'B474372015/', R + 'B475692106/', R + 'B521101282/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; the ¥6,000 course is pitched at first-timers and overseas guests; English site available.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区高宮町585 若葉ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; latest review January 2026.' },
    pin_source: `Tabelog ${TB} (35.005543, 135.765131); cross-checked: GSI 京都府京都市中京区高宮町585番地 (lot) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [FOOD],
    price_note: 'Official site menu (undated; tax treatment not stated).', last_checked: TODAY, items: [
      it('若手コース', '', 'Young-artisan course (3 small dishes, 12 nigiri, soup)', '¥6,000', 'Course', 'ask', 'no', '', 'wakate_course'),
      it('大将コース', '', 'Head chef’s course, 15 items', '¥12,000', 'Course', 'ask', 'no', '¥17,000 for 20 items.', 'taisho_course'),
      it('手結寿司', '', 'Teyui-zushi lunch (hand-roll set)', '¥4,800', 'Lunch', 'ask', 'no', '', 'teyui_zushi'),
    ] }, {
    cuisine: 'ソムリエのオーナーが選ぶ日本酒とワインの江戸前鮨のカウンター (公式サイト、口コミ)・若手コース6,000円 (小鉢3品、鮨12貫、椀物)、カウンター鮨が初めての方や若い世代、海外の方に。大将コース 15品12,000円・20品17,000円 (公式サイト)・昼の手結寿司4,800円: 鮨ネタ10品、シャリ10〜15貫、七輪で自分で炙る有明海苔、小鉢3品、お味噌汁 (公式サイト)・魚は中央市場の提携の魚問屋と、産地やブランドではなく旬で選ぶ (公式サイト)・日本酒は常時10種類以上、温度や酒器を選んで。鮨には赤ワインを推奨、日本酒のペアリング (公式サイト、2022〜2026年の口コミ)',
    neighborhood: '錦の北の富小路通。京都河原町駅から徒歩5分',
    gf_detail: '要確認。醤油を引いた江戸前の握り、味噌や黄身酢の小鉢、椀物。グルテンの情報は公開されていない (公式サイト、2022〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚のコースのみ (公式サイト)。',
    notes: '[鮨・富小路錦、気軽なカウンター鮨] 錦の北、富小路のビルの奥にある8席の江戸前鮨のカウンター。2020年開店、2023年に若い世代や海外の方もカウンター鮨を楽しめるよう形を変え、若手の職人の6,000円のコース、大将のコースは12,000円から、一斉スタートもなくした。ソムリエのオーナーが温度を選んだ日本酒や、意外にも赤ワインを鮨に合わせる。公式サイトには、海苔を炭火で炙って自分で巻く昼の手結寿司 (4,800円) も。予約がおすすめ。',
  });
}

// ================================================================ CLAY POT CURRY OHMIYA
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26039775/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://claypotcurryohmiya.com/';
  const WD = day(['11:30', '15:00'], ['17:30', '21:00']); const WE = day(['11:30', '15:30'], ['17:30', '21:00']);
  put({
    id: 'kyoto_clay_pot_curry_ohmiya', name: 'CLAY POT CURRY OHMIYA', category: 'OMNI',
    lat: 35.007116, lng: 135.767157, cuisine_type: 'curry',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: a European-style curry roux with demi-glace, breaded pork cutlet and fried toppings (official site); no gluten information is published.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the curry sauce starts from a bouillon made over a day, and every curry on the menu carries meat or seafood (official site).',
    hours_raw: 'Lunch 11:30–15:00 (to 15:30 at weekends and holidays) and dinner 17:30–21:00 (last order 20:30); closed irregularly; may close early when ingredients run out (official site; Tabelog). Bookings taken; late arrivals may lose the table (Tabelog); booking advised at weekends (April 2026). Order by QR code: curry, spice level, rice size and toppings (September 2026). 16–17 seats: counter and small tables (Tabelog; official site); non-smoking; cards, e-money and QR; takeaway and delivery; menu in English, Chinese and Korean; children welcome, with a children’s curry (Tabelog; official site). On the 2nd floor of the 辨天堂ビル on the Shinkyogoku arcade south of Rokkaku, with a lift; 5 min from exit 9 of Kyoto Kawaramachi Stn (official site; Tabelog). Opened here 11 August 2023 after 14 years at Marutamachi (official site; Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinkyogoku arcade south of Rokkaku — 5 min from Kyoto Kawaramachi Stn',
    cuisine: 'European-style curry served bubbling in a clay pot: a bouillon simmered a day, house-blended and roasted curry powder, and a sauce cooked two days with fruit and red wine (official site) · beef rib simmered in demi-glace curry ¥1,650 (the most popular) · Kyoto-beef (京の肉, Kameoka Kuroge wagyu) curry braised in red wine ¥2,200 · Tanba Kogen pork loin cutlet curry ¥1,550 · six-hour simmered pork and onsen egg curry ¥1,550 · head-on prawn and scallop fry curry ¥1,450 · Kyoto pork keema ¥1,450 · 100% domestic pork hamburg curry ¥1,800 · house curry ¥1,000 (official site) · toppings such as fried onions, crab cream croquette, soft-boiled egg; spice from medium up (2026 reviews)',
    website: SITE, gmaps: gm('CLAY POT CURRY OHMIYA 新京極'), menu_url: SITE,
    notes: "[Curry · Shinkyogoku, European curry bubbling in clay pots] A second-floor curry shop on the Shinkyogoku arcade that moved here in 2023 after 14 years at Marutamachi (once known as 近江屋清右衛門), sister to SOUP CURRY OHMIYA. The curry — a day-long bouillon, house-roasted curry powder and two days of simmering with fruit and red wine — arrives still bubbling in a clay pot. The beef rib in demi-glace (¥1,650) is the one everyone orders; Kyoto-beef, Tanba Kogen pork cutlet and keema are the local-ingredient options. Order by QR code; a September 2026 visitor saw one chef and one staff member at work, so book at weekends.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed; the official site says the owner chose the Kyoto beef personally); one chef and one staff member on a September 2026 visit'], origin: null,
      background: 'Per the official site: a European-style curry specialist that ran for 14 years at Marutamachi before moving to Shinkyogoku; former name 欧風土鍋カレー近江屋清右衛門 (Tabelog); the sister shop is SOUP CURRY OHMIYA (in data as kyoto_soup_curry_ohmiya); for the beef curry the owner ate around Kyoto’s beef and chose certified 京の肉 from Kyoto Tanba-Kameoka. The invoice number on Tabelog is T3130001077204.',
      philosophy: 'Per the official site: a handmade curry that takes a day for the bouillon and two days for the sauce.',
      specialty: 'Beef rib demi-glace curry; Kyoto-beef curry.',
      anecdotes: [
        { text: '"The curry was bubbling in a hot pot, so much so that the ingredients were hidden from view." — April 2026.', source: R + 'B527201504/' },
        { text: 'An April 2026 diner found the place more popular with foreign tourists than locals and advised booking at weekends.', source: R + 'B529709875/' },
        { text: 'A September 2026 visitor found the toppings made the meal quite pricey.', source: R + 'B536747848/' },
      ],
      japanese_sources_summary: '公式サイト (claypotcurryohmiya.com): 14年間丸太町で営業した後、新京極に移転した欧風カレー専門店、1日かけて作るブイヨン、ブレンド・焙煎したカレー粉、2日間フルーツや赤ワインを加えながら炊き上げる、牛バラ肉のデミグラス煮込みカレー1,650円、丹波高原豚のロースカツカレー1,550円、京の肉のビーフカレー2,200円 (京都丹波・亀岡産の黒毛和牛、オーナー自ら食べ歩いて選んだ)、自家製カレー1,000円、6時間煮込んだ煮豚と温玉のカレー1,550円、有頭エビと貝柱フライのカレー1,450円、京都ぽーくのキーマカレー1,450円、国産豚100%のハンバーグカレー1,800円、お子様向けカレー、テイクアウト・デリバリー可、姉妹店 SOUP CURRY OHMIYA、中京区桜之町438-1 辨天堂ビル2F、昼11:30〜15:00 (土日祝は15:30)、夜17:30〜21:00 (LO 20:30)、不定休、17席。食べログ: カレー・洋食、旧店名 欧風土鍋カレー近江屋清右衛門、16席、禁煙、カード・電子マネー・QR 可、英語・中国語・韓国語のメニュー、2023年8月11日オープン、インボイス T3130001077204。口コミ (2026年3〜11月、英語): 土鍋でぐつぐつ、牛バラ肉、QR コードで注文、海外の客が多い。',
      confidence: 'medium', sources: [TB, SITE, R + 'B503600495/', R + 'B524984018/', R + 'B526940248/', R + 'B527201504/', R + 'B529709875/', R + 'B532435117/', R + 'B532660209/', R + 'B536029694/', R + 'B536194270/', R + 'B536747848/', R + 'B538039170/', R + 'B538500373/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order by QR code (English, Chinese and Korean menus); book at weekends.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区新京極通り六角下ル桜之町438-1 辨天堂ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.007116, 135.767157); cross-checked: GSI 京都府京都市中京区桜之町438番地 (lot) 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE],
    price_note: 'Official site menu (prices including tax; undated).', last_checked: TODAY, items: [
      it('牛バラ肉のデミグラス煮込みカレー', '', 'Beef rib simmered in demi-glace curry', '¥1,650', 'Curry', 'no', 'no', '', 'beef_rib_curry'),
      it('京の肉のビーフカレー', '', 'Kyoto-beef curry braised in red wine', '¥2,200', 'Curry', 'no', 'no', '', 'kyo_beef_curry'),
      it('丹波高原豚のロースカツカレー', '', 'Tanba Kogen pork loin cutlet curry', '¥1,550', 'Curry', 'no', 'no', '', 'katsu_curry'),
      it('京都ぽーくのキーマカレー', '', 'Kyoto pork keema curry', '¥1,450', 'Curry', 'no', 'no', '', 'keema'),
      it('自家製カレー', '', 'House curry', '¥1,000', 'Curry', 'no', 'no', '', 'house_curry'),
    ] }, {
    cuisine: '土鍋でぐつぐつのまま出す欧風カレー: 1日かけたブイヨン、ブレンド・焙煎したカレー粉、フルーツと赤ワインで2日炊いたソース (公式サイト)・牛バラ肉のデミグラス煮込みカレー1,650円 (一番人気)・赤ワインで煮込んだ京の肉 (亀岡の黒毛和牛) のビーフカレー2,200円・丹波高原豚のロースカツカレー1,550円・6時間煮込んだ煮豚と温玉のカレー1,550円・有頭エビと貝柱フライのカレー1,450円・京都ぽーくのキーマカレー1,450円・国産豚100%のハンバーグカレー1,800円・自家製カレー1,000円 (公式サイト)・トッピングはフライドオニオン、蟹クリームコロッケ、温玉など。辛さは中辛から (2026年の口コミ)',
    neighborhood: '六角の南の新京極商店街。京都河原町駅から徒歩5分',
    gf_detail: '実際にはグルテンフリーではない。デミグラスの欧風カレーのルウ、パン粉のカツ、揚げ物のトッピング (公式サイト)。グルテンの情報は公開されていない。',
    vegan_detail: 'ヴィーガン不可。カレーソースは1日かけたブイヨンから作り、どのカレーにも肉か魚介が入る (公式サイト)。',
    notes: '[カレー・新京極、土鍋でぐつぐつの欧風カレー] 新京極商店街のビル2階のカレー店。丸太町で14年 (旧名 近江屋清右衛門) 営業したのち2023年に移転、SOUP CURRY OHMIYA の姉妹店。1日かけたブイヨン、自家焙煎のカレー粉、フルーツと赤ワインで2日煮込んだカレーが、土鍋でぐつぐつのまま届く。皆が頼むのは牛バラ肉のデミグラス煮込み (1,650円)。京の肉、丹波高原豚のカツ、キーマは地元の食材。注文は QR コード。2026年9月の客は料理人とスタッフの二人で回していたと書いており、週末は予約を。',
  });
}

// ================================================================ 京都カレー製作所 カリル
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26025279/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://karil.jp/'; const MENU = SITE + 'menu.html';
  const WD = day(['11:00', '15:00'], ['17:00', '20:30']); const SAT = day(['11:00', '15:00']);
  put({
    id: 'kyoto_curry_kariru', name: '京都カレー製作所 カリル (Kyoto Curry Seisakusho Kariru)', category: 'OMNI',
    lat: 35.018230, lng: 135.756663, cuisine_type: 'curry',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The shop’s allergen list says its dishes may contain wheat, milk, soy, cashew, beef, pork and chicken — ask staff which (official site).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A bean-and-vegetable curry (¥1,000) is on the regular menu, but the allergen list includes milk and the curry bases are not described (official site).',
    hours_raw: 'Lunch 11:00–15:00 and dinner 17:00–20:30 (last order 20:00) on weekdays; lunch only on Saturday and holidays; closed Sunday and irregularly (official site; Tabelog). No reservations (Tabelog). A queue forms at lunch, with orders taken in line (October 2026); evenings are quieter (October 2026). Children under junior-high age not admitted, as the curry is fairly spicy (official site). Takeaway curry +¥100 for the container, ordered by phone 11:00–19:30 (official site). 21 seats; non-smoking; cards, QR and transit IC (Tabelog; official site). On Shinmachi-dori north of Marutamachi, south of the prefectural office; 4 min from exit 2 of Marutamachi Stn (official site). Opened 3 March 2015 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: SAT }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinmachi-dori north of Marutamachi — 4 min from Marutamachi Stn',
    cuisine: 'Spice curry built on layered original spice blends — "香る旨味", fragrant umami (official site) · regular curries: chicken ¥1,100, pork ¥1,100, butter chicken ¥1,250, beef ¥1,500, keema ¥1,100, beans and vegetables ¥1,000; toppings: spice egg ¥150, raw egg ¥70, coriander ¥150; salads ¥300; lassi ¥350, mango lassi ¥400 (official menu) · a monthly curry: oyster curry ¥1,800 in October–November 2026, mushroom curry in September 2026 (official site; 2026 reviews) · lunch set with a mini salad and mini mango lassi for +¥50; spice levels from +1 upward, chilli powder on the table (2026 reviews) · beer and highballs (official menu)',
    website: SITE, gmaps: gm('京都カレー製作所 カリル'), menu_url: MENU,
    notes: "[Curry · Marutamachi, layered spice curry with a monthly special] A small spice-curry shop on Shinmachi-dori just north of Marutamachi, opened in 2015 and on Tabelog's Curry WEST 100 list in 2023, 2024 and 2026. The curries are thin and fragrant from layered house spice blends: chicken, butter chicken, keema, beans and vegetables — plus a monthly special (oysters in a coconut-scented sauce, ¥1,800, in October–November 2026). Add a spice egg, and the ¥50 lunch upgrade of salad and mango lassi. Expect a line at lunch, quieter evenings. No children under junior-high age. Closed Sunday; Saturday lunch only.",
    chef_bio: { chef_name: null, roles: ['No person is named on the site (its recruitment page is hosted by atcompany)'], origin: null,
      background: 'Opened 3 March 2015 (Tabelog). A November 2026 regular has come for nearly ten years. Tabelog Curry WEST "Tabelog 100" 2023, 2024, 2026.',
      philosophy: 'Per the official site: "オリジナルスパイスを重ねて作り出す『香る旨味』" — fragrant umami from layered original spices, with care in every ingredient and step.',
      specialty: 'Chicken curry; butter chicken; the monthly curry.',
      anecdotes: [
        { text: 'An October 2026 regular on a 15th visit found ten people in line just after noon; staff took orders in the queue and the wait was about ten minutes.', source: R + 'B450841170/' },
        { text: 'An October 2026 diner in a white top was offered a paper apron.', source: R + 'B537454061/' },
        { text: 'An October 2026 diner thought the dishes could be served warmer, "but that’s a minor detail".', source: R + 'B538307979/' },
      ],
      japanese_sources_summary: '公式サイト (karil.jp): 京都・新町丸太町のカレー製作所「カリル」、オリジナルスパイスを重ねて作り出す「香る旨味」、ランチ11:00〜15:00、ディナー17:00〜20:30 (LO 20:00)、土・祝はランチのみ、日曜＋不定休、やや辛めのため中学生未満は入店不可、テイクアウトは店内価格＋100円、10月の月替わりは牡蠣カレー1,800円、チキンカレー1,100円、ポークカレー1,100円、バターチキンカレー1,250円、ビーフカレー1,500円、キーマカレー1,100円、豆と野菜のカレー1,000円、スパイス玉子150円、アレルゲン表示: 牛肉・豚肉・鶏肉・乳・小麦・大豆・カシューナッツ、上京区新町通丸太町上ル春帯町349-1、丸太町駅2番出口から徒歩約4分。食べログ: カレー・インドカレー、予約不可、21席、禁煙、2015年3月3日オープン、カレー WEST 百名店 2023・2024・2026。口コミ (2026年9〜11月、英語): 牡蠣カレー、きのこのカレー、行列、ミニサラダとマンゴーラッシーのセット+50円。',
      confidence: 'medium', sources: [TB, SITE, MENU, R + 'B112486702/', R + 'B450841170/', R + 'B488167343/', R + 'B496144508/', R + 'B519879358/', R + 'B536276791/', R + 'B537429459/', R + 'B537454061/', R + 'B537510685/', R + 'B538272120/', R + 'B538307979/', R + 'B538322152/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'No bookings; order in the queue at lunch; no children under junior-high age.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区新町通丸太町上ル春帯町349-1 永楽アパルシオン 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (October monthly curry) and Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.018230, 135.756663); cross-checked: GSI 京都府京都市上京区春帯町349番地 (lot) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'high', sources: [MENU],
    price_note: 'Official site menu (undated); takeaway +¥100.', last_checked: TODAY, items: [
      it('チキンカレー', '', 'Chicken curry', '¥1,100', 'Curry', 'ask', 'no', '', 'chicken_curry'),
      it('バターチキンカレー', '', 'Butter chicken curry', '¥1,250', 'Curry', 'ask', 'no', '', 'butter_chicken'),
      it('豆と野菜のカレー', '', 'Bean and vegetable curry', '¥1,000', 'Curry', 'ask', 'ask', '', 'bean_veg_curry'),
      it('牡蠣カレー', '', 'Oyster curry (monthly, October 2026)', '¥1,800', 'Curry', 'ask', 'no', '', 'oyster_curry'),
      it('スパイス玉子', '', 'Spice egg topping', '¥150', 'Toppings', 'ask', 'no', '', 'spice_egg'),
    ] }, {
    cuisine: 'オリジナルスパイスを重ねて作る「香る旨味」のスパイスカレー (公式サイト)・レギュラー: チキン1,100円、ポーク1,100円、バターチキン1,250円、ビーフ1,500円、キーマ1,100円、豆と野菜1,000円。トッピング: スパイス玉子150円、生玉子70円、パクチー150円。サラダ300円。ラッシー350円、マンゴーラッシー400円 (公式メニュー)・月替わりのカレー: 2026年10〜11月は牡蠣カレー1,800円、9月はきのこのカレー (公式サイト、2026年の口コミ)・ランチはミニサラダとミニマンゴーラッシーが+50円。辛さは+1から、卓上にチリパウダー (2026年の口コミ)・ビール、ハイボール (公式メニュー)',
    neighborhood: '丸太町の北の新町通。丸太町駅から徒歩4分',
    gf_detail: '要確認。店のアレルゲン表示では、小麦、乳、大豆、カシューナッツ、牛肉、豚肉、鶏肉を含む場合がある。詳しくはスタッフに (公式サイト)。',
    vegan_detail: '要確認。レギュラーに豆と野菜のカレー (1,000円) があるが、アレルゲン表示に乳があり、カレーのベースは書かれていない (公式サイト)。',
    notes: '[カレー・丸太町、重ねたスパイスと月替わりのカレー] 丸太町のすぐ北、新町通の小さなスパイスカレーの店。2015年開店、食べログのカレー WEST 百名店に2023・2024・2026年。自家配合のスパイスを重ねたさらっと香るカレーで、チキン、バターチキン、キーマ、豆と野菜、そして月替わり (2026年10〜11月はココナッツの香る牡蠣カレー、1,800円)。スパイス玉子と、ランチの+50円のサラダとマンゴーラッシーを。昼は行列、夜は空いている。中学生未満は入店不可。日曜休み、土曜は昼のみ。',
  });
}

// ================================================================ カレー専門店 ビィヤント
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26001075/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:00', '15:00'], ['17:30', '21:00']); const SUN = day(['11:00', '16:00']);
  put({
    id: 'kyoto_curry_biyanto', name: 'カレー専門店 ビィヤント (Curry Senmon Ten Biyanto)', category: 'OMNI',
    lat: 35.019237, lng: 135.778645, cuisine_type: 'curry',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: a smooth European-style curry, most often ordered as katsu curry with a breaded cutlet fried to order (2024–26 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A vegetable curry is one of the sauces (September–October 2026), but its base is not described; the others are beef and chicken.',
    hours_raw: 'Monday to Thursday 11:00–15:00 (last order 14:50) and 17:30–21:00 (last order 20:30); Sunday and holidays 11:00–16:00 (last order 15:45); closed Friday and Saturday; hours may change (Tabelog). No reservations (Tabelog): a line forms before opening and at lunch, about 20 minutes on a Sunday in October 2026; turnover is fast (2026 reviews). Order verbally at the counter (September 2026). No photography inside (October 2026). 8 counter seats; non-smoking; cash only (Tabelog). On the east side of Higashioji-dori north of Marutamachi, opposite Kyoto University Hospital; 100 m north of the Kumano-jinja-mae bus stop (Tabelog; 2026 reviews). Founded in 1975 (October 2026 review).',
    hours: { 0: W, 1: W, 2: W, 3: W, 6: SUN }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Higashioji-dori north of Marutamachi, opposite Kyoto University Hospital — 2 min from the Kumano-jinja-mae bus stop',
    cuisine: 'A Kyoto curry counter since 1975: smooth European-style curry over turmeric rice, choose the sauce — beef (sweet, medium or spicy), chicken or vegetable — and have it plain or with a cutlet (2024–26 reviews) · curry ¥950 and katsu curry ¥1,200 (September 2026); another October 2026 diner paid ¥880 for beef curry plus ¥170 for a large; chicken katsu curry; the pork cutlet thin and fried in front of you (2026 reviews) · "medium" is already fairly hot (October 2026)',
    website: null, gmaps: gm('カレー専門店 ビィヤント 京都'), menu_url: null,
    notes: "[Curry · Kumano-jinja, a 1975 katsu-curry counter] An eight-seat curry counter on Higashioji-dori opposite Kyoto University Hospital, serving since 1975. Pick the sauce — beef from sweet to spicy, chicken or vegetable — over turmeric rice, plain or with a thin cutlet fried to order (katsu curry ¥1,200 in September 2026). Even 'medium' has a kick. A line forms at opening and at lunch, but it moves fast. Cash only; no photos inside. Closed Friday and Saturday.",
    chef_bio: { chef_name: null, roles: ['No person is named in the sources'], origin: null,
      background: 'Per October 2026 reviews: founded in 1975, over 50 years in business; one reviewer heard that a famous actress once worked there. Tabelog Curry WEST "Tabelog 100" 2023, 2024, 2026.',
      philosophy: null, specialty: 'Katsu curry; beef curry three ways; vegetable curry.',
      anecdotes: [
        { text: 'An October 2026 diner, there between hospital appointments, was first in line at 10:52 and called it quick and delicious.', source: R + 'B521426125/' },
        { text: 'An August 2026 first-timer waited about 20 minutes in the heat; seats near the stove get hot.', source: R + 'B533887408/' },
        { text: 'A September 2026 diner praised the staff’s attitude and service.', source: R + 'B536470750/' },
      ],
      japanese_sources_summary: '食べログ: カレー、左京区東大路通丸太町上ル東側聖護院西町12、熊野神社前バス停から北へ100m、月〜木 11:00〜15:00 (L.O. 14:50)・17:30〜21:00 (L.O. 20:30)、日・祝 11:00〜16:00 (L.O. 15:45)、金・土休み、予約不可、8席 (カウンターのみ)、禁煙、カード・電子マネー・QR 不可、テイクアウト可、カレー WEST 百名店 2023・2024・2026。口コミ (2024〜2026年、英語): 1975年創業、京大病院の前、ビーフ (甘口・中辛・辛口)、チキン、野菜のカレー、ターメリックライス、カツカレー1,200円、カレー950円、行列、店内撮影不可。',
      confidence: 'medium', sources: [TB, R + 'B497429708/', R + 'B521426125/', R + 'B533887408/', R + 'B534799109/', R + 'B535136219/', R + 'B535607648/', R + 'B536158116/', R + 'B536470750/', R + 'B536802517/', R + 'B537343399/', R + 'B537708988/', R + 'B538333013/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the counter; cash only; no photos inside.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区東大路通丸太町上ル東側聖護院西町12',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026; Curry WEST Tabelog 100 2026.' },
    pin_source: `Tabelog ${TB} (35.019237, 135.778645); cross-checked: GSI 京都府京都市左京区聖護院西町12番地 (lot) 60m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B497429708/', R + 'B535136219/', R + 'B537708988/'],
    price_note: 'No menu published; prices from September–October 2026 reviews (one October 2026 diner paid ¥880 for beef curry plus ¥170 for a large, against ¥950 in September 2026).', last_checked: TODAY, items: [
      it('', '', 'Katsu curry (beef, chicken or vegetable sauce)', '¥1,200', 'Curry', 'no', 'no', 'September 2026.', 'katsu_curry'),
      it('', '', 'Curry (beef, chicken or vegetable sauce)', '¥950', 'Curry', 'ask', 'ask', 'September 2026; ¥880 in another October 2026 review.', 'curry'),
    ] }, {
    cuisine: '1975年からの京都のカレーのカウンター。なめらかな欧風カレーをターメリックライスに、ソースはビーフ (甘口、中辛、辛口)、チキン、野菜から選び、そのままかカツをのせて (2024〜2026年の口コミ)・カレー950円、カツカレー1,200円 (2026年9月)。2026年10月の別の客はビーフカレー880円と大盛り170円。チキンカツカレー。豚カツは薄く、目の前で揚げる (2026年の口コミ)・中辛でもかなり辛い (2026年10月)',
    neighborhood: '丸太町の北の東大路通、京大病院の向かい。熊野神社前バス停から徒歩2分',
    gf_detail: '実際にはグルテンフリーではない。なめらかな欧風カレーで、注文の多くは揚げたてのパン粉のカツをのせたカツカレー (2024〜2026年の口コミ)。',
    vegan_detail: '要確認。ソースには野菜カレーもある (2026年9〜10月) が、ベースは書かれていない。ほかはビーフとチキン。',
    notes: '[カレー・熊野神社、1975年からのカツカレーのカウンター] 京大病院の向かい、東大路通の8席のカレーのカウンター。1975年から営業。ソースはビーフ (甘口から辛口)、チキン、野菜から選び、ターメリックライスにそのまま、または目の前で揚げる薄いカツをのせて (カツカレー1,200円、2026年9月)。中辛でも辛め。開店時と昼は行列ができるが回転は速い。現金のみ、店内撮影不可。金・土休み。',
  });
}

save();
