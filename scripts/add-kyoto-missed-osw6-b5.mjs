// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 5.
//   + お料理 MIYAMA Oryori MIYAMA (game-meat standing bar and hot-pot rooms by the Takase River; Gibier MIYAMA's 2nd shop)
//   + 酒厨～ Shuz ～ Shu Shuz (sushi izakaya in a Kiyamachi alley, run by a couple)
//   + 松屋常盤 Matsuya Tokiwa (miso matsukaze, by reservation, south of the Imperial Palace's Sakaimachi gate)
//   + 亀屋良永 Kameya Yoshinaga (wagashi house at Teramachi Oike, famous for Oike senbei)
//   Taken on 2026-11-05 from `queue.mjs kyoto-missed next core 200` (MIYAMA 26041480, Shuz 26013460: the first two with
//   id mod 6 = 4 after batch 4) and `next notable 200` (Matsuya Tokiwa 26000620, Kameya Yoshinaga 26000644).
//   None is in data/kyoto.json: grep by name (MIYAMA/みやま/Gibier, Shuz/酒厨, 松屋常盤/Matsuya, 亀屋良永/Kameya Yoshinaga)
//   and address (市之町260, 鍋屋町122, 橘町83, 本能寺前町504) found one shared address only: kyoto_aisani_takasegawa
//   (address_ja "京都府京都市下京区西木屋町通綾小路上ル市之町260-2") — a different shop; its pin is 82 m from MIYAMA's.
//   Chain check: MIYAMA is the second shop of Gibier MIYAMA in Gion (not in data), a different format (standing bar and
//   hot-pot rooms) — a 2-shop group, so drafted. The others are single shops.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-5');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ お料理 MIYAMA
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26041480/'; const R = TB + 'dtlrvwlst/';
  const H = day(['15:00', '23:00']);
  put({
    id: 'kyoto_oryori_miyama', name: 'お料理 MIYAMA (Oryori MIYAMA)', category: 'MOM_AND_POP',
    lat: 35.001524, lng: 135.769442, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Game dishes come with soy-based sauces and dashi; pheasant kara-age, a pheasant katsu sandwich, spring rolls and ramen are wheat-based; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a game-meat bar (venison, wild boar, pheasant, bear), with dashi-based small dishes and egg-and-mayonnaise starters (2026 reviews).',
    hours_raw: '15:00–23:00 daily; closed irregularly (Tabelog). Ground floor: a standing bar for up to about 20 (Tabelog); standing spots can be booked only on the day (June 2026). Upstairs: rooms for 2–8 by reservation only, for the bear hot-pot and pheasant sukiyaki courses (Tabelog). Table charge ¥330 (Tabelog); a small starter such as a pickled egg with spiced mayonnaise is served (2026 reviews). Non-smoking; cards (VISA, Master, JCB, AMEX, Diners, UnionPay) and PayPay (Tabelog). On Nishikiyamachi along the Takase River, within 5 min of Kyoto Kawaramachi Stn (Tabelog; October 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nishikiyamachi by the Takase River, south of Shijo — 5 min from Kyoto Kawaramachi Stn',
    cuisine: 'Second shop of the Gion game restaurant Gibier MIYAMA, serving game from the town of Miyama (Tabelog) · standing bar with plates of rare meats such as bear and pheasant for under ¥1,000 (Tabelog): venison roast, summer venison tartare with bread, bear pâté, wild boar and shungiku spring rolls with cheese, pheasant tsukune tofu with chili soy ¥800, pheasant kara-age, pheasant katsu sandwich, grilled rice ball with fuki-no-tō miso, a late-night "yakan" ramen, aubergine agebitashi ¥700, cilantro salad with cod roe, sun-dried cucumber in sweet vinegar (2026 reviews) · homemade umeshu and shiso liqueur, wine, Iyoshi Cola (2026 reviews) · upstairs courses: black-bear tsuki-nabe ¥22,000, pheasant sukiyaki ¥16,500 (Tabelog)',
    website: null, gmaps: gm('お料理 MIYAMA 河原町'), menu_url: TB + 'dtlmenu/',
    notes: "[Game standing bar · Kawaramachi, bear and pheasant by the plate] The casual second shop of Gion's Gibier MIYAMA, on the Takase River: a calm, stylish standing bar downstairs where small plates of game from Miyama — venison tartare and roast, bear pâté, wild-boar spring rolls, pheasant tsukune tofu (¥800) — go with homemade umeshu or shiso liqueur, and booked rooms upstairs for bear hot pot (¥22,000) or pheasant sukiyaki (¥16,500). Reviewers note the meat has little gamey taste. ¥330 table charge. Open daily 15:00–23:00.",
    chef_bio: { chef_name: 'Futa Kanda', roles: ['Chef of Gibier MIYAMA and this shop (Tabelog, shop text)'], origin: null,
      background: 'Per Tabelog (the shop’s own text): the second location of Gibier MIYAMA in Gion, offering its game in a more casual setting; game comes from the nature-rich town of Miyama; the owner-chef won the Bronze Egg award at RED U-35, and the shop text names "Chef Futa Kanda". An August 2026 reviewer notes that Gibier MIYAMA itself does not take reservations. An October 2026 reviewer took the concept to be introducing game meat to people not used to it.',
      philosophy: 'Per Tabelog (the shop’s own text): "The charm of a surprisingly mild flavor."',
      specialty: 'Venison tartare; pheasant tsukune tofu; bear hot pot.',
      anecdotes: [
        { text: '"I ordered the roasted venison and bear pâté, both of which had no unpleasant odors and were easy to eat." — June 2026.', source: R + 'B529585313/' },
        { text: '"The cheerful hospitality from the owner made for a wonderfully comfortable atmosphere." — October 2026.', source: R + 'B537218849/' },
        { text: 'A July 2026 reviewer spent ¥7,810 on venison and three drinks, against a Tabelog budget of about ¥3,000, and found the prices slightly high for the area but the food excellent.', source: R + 'B532518830/' },
      ],
      japanese_sources_summary: '食べログ: 立ち飲み、下京区市之町260-2、阪急京都河原町駅から徒歩5分以内、毎日15:00〜23:00、不定休、予約可 (2階の個室は予約制、2〜8名)、1階は立ち飲みで最大20名ほど、テーブルチャージ330円、禁煙、カード・PayPay 可、祇園の「Gibier MIYAMA」の2号店、Miyama の自然の中のジビエ、RED U-35 Bronze Egg の Futa Kanda シェフ、熊や雉の珍しい肉を1皿1,000円以下、熊の Tsuki Nabe コース22,000円、雉のすき焼きコース16,500円。口コミ (2026年6〜10月、英語): 鹿のロースト、夏鹿のタルタル、熊のパテ、猪と春菊の春巻き、雉のつくね豆腐800円、雉の唐揚げ、雉のカツサンド、自家製の梅酒としそのリキュール、落ち着いた立ち飲み。',
      confidence: 'medium', sources: [TB, R + 'B529585313/', R + 'B531118877/', R + 'B532518830/', R + 'B532553045/', R + 'B533845016/', R + 'B533962435/', R + 'B534199909/', R + 'B535120155/', R + 'B535152723/', R + 'B535179801/', R + 'B537218849/', R + 'B538001185/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the standing counter; book the upstairs rooms ahead; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区市之町260-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.001524, 135.769442); cross-checked: GSI 京都府京都市下京区市之町260番地 (lot) 21m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B533845016/'],
    price_note: 'Course prices and the table charge from Tabelog (November 2026); small-plate prices from an August 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Pheasant tsukune tofu with chili soy sauce', '¥800', 'Small plates', 'ask', 'no', 'August 2026.', 'kiji_tsukune_tofu'),
      it('', '', 'Aubergine agebitashi', '¥700', 'Small plates', 'ask', 'no', 'August 2026.', 'nasu_agebitashi'),
      it('', '', 'Venison tartare', '', 'Small plates', 'ask', 'no', '2026.', 'venison_tartare'),
      it('', '', 'Black-bear tsuki-nabe course (upstairs, booked)', '¥22,000', 'Course', 'ask', 'no', 'Tabelog.', 'bear_nabe_course'),
      it('', '', 'Pheasant sukiyaki course (upstairs, booked)', '¥16,500', 'Course', 'ask', 'no', 'Tabelog.', 'kiji_sukiyaki_course'),
    ] }, {
    cuisine: '祇園のジビエ料理店 Gibier MIYAMA の2号店。Miyama の町のジビエ (食べログ)・熊や雉など珍しい肉を1皿1,000円以下で出す立ち飲み (食べログ): 鹿のロースト、パンを添えた夏鹿のタルタル、熊のパテ、チーズ入りの猪と春菊の春巻き、雉のつくね豆腐 (唐辛子醤油) 800円、雉の唐揚げ、雉のカツサンド、ふきのとう味噌の焼きおにぎり、夜の Yakan ラーメン、茄子の揚げびたし700円、たらこのパクチーサラダ、干したきゅうりの甘酢漬け (2026年の口コミ)・自家製の梅酒としそのリキュール、ワイン、Iyoshi Cola (2026年の口コミ)・2階のコース: 熊の Tsuki Nabe 22,000円、雉のすき焼き16,500円 (食べログ)',
    neighborhood: '四条の南、高瀬川沿いの西木屋町。京都河原町駅から徒歩5分',
    gf_detail: '要確認。ジビエは醤油のたれや出汁で、雉の唐揚げ、雉のカツサンド、春巻き、ラーメンは小麦を使う。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鹿、猪、雉、熊のジビエの店で、小皿は出汁、お通しは卵とマヨネーズ (2026年の口コミ)。',
    notes: '[ジビエの立ち飲み・河原町、1皿で熊と雉] 祇園の Gibier MIYAMA の気軽な2号店、高瀬川沿い。1階は落ち着いたおしゃれな立ち飲みで、Miyama のジビエの小皿 (鹿のタルタルとロースト、熊のパテ、猪の春巻き、雉のつくね豆腐800円) を自家製の梅酒やしそのリキュールと。2階は予約制の部屋で熊鍋 (22,000円) や雉のすき焼き (16,500円)。口コミでは肉にくさみが少ないという声。テーブルチャージ330円。毎日15時〜23時。',
  });
}

// ================================================================ 酒厨～ Shuz ～
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26013460/'; const R = TB + 'dtlrvwlst/';
  const W = day(['17:30', '23:00']);
  put({
    id: 'kyoto_shu_shuz', name: '酒厨～ Shuz ～ (Shu Shuz)', category: 'OMNI',
    lat: 35.004957, lng: 135.770860, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sushi with soy sauce and marinated fish, simmered dishes, meat dishes and burger-like snacks; ingredients change daily and no gluten information is published (Tabelog; 2024–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi and fish izakaya; the starters have included sushi egg (2024–26 reviews).',
    hours_raw: 'Monday, Tuesday, Thursday 17:30–23:00; Friday 17:15–24:00; Saturday 17:15–1:00; Sunday 17:15–23:00; closed Wednesday (Tabelog). Reservations recommended, as early as possible: ingredients and the menu change daily, orders stop when ingredients run out, and specific requests can be prepared if asked in advance (Tabelog); a February 2026 diner booked a week ahead and found it nearly full. Groups of 1–4 only (Tabelog). Charge of ¥500 per person (おひとり様¥500, Tabelog). Smoking allowed at the tables (Tabelog; June 2026). Cash only (Tabelog; November 2025). 20 seats (6 at the counter, 14 at tables) (Tabelog). In a narrow alley between Kiyamachi and Pontocho north of Shijo — hard to find; enter from the main street (March 2025); 3 min from Kyoto Kawaramachi Stn Exits 1 and 2 (Tabelog).',
    hours: { 0: W, 1: W, 3: W, 4: day(['17:15', '24:00']), 5: day(['17:15', '01:00']), 6: day(['17:15', '23:00']) }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Alley between Kiyamachi and Pontocho, north of Shijo — 3 min from Kyoto Kawaramachi Stn',
    cuisine: 'Sushi izakaya with daily-changing fish, meat dishes and regional sake (Tabelog; 2024–26 reviews) · nigiri on rice blended with white and red vinegar, ordered by the piece or as sets: 6 pieces with sea bream, shrimp, salmon roe, shiso and pickled daikon; 6-piece omakase; a 10-piece set at the counter; creative sushi; eel, seaperch, marinated fish (2025–26 reviews) · small dishes: kimchi lotus root, oyster namero, black-cooked firefly squid, tuna wrapped in nori, burger-like snacks, meat dishes (2024–26 reviews) · sake such as Keigetsu and a junmai ginjo from Itaru (2025–26 reviews)',
    website: null, gmaps: gm('酒厨 Shuz 木屋町'), menu_url: null,
    notes: "[Sushi izakaya · Kiyamachi, a hidden alley counter] A 20-seat sushi izakaya tucked into a narrow alley between Kiyamachi and Pontocho, run by a couple, with nostalgic anime stickers on one wall. Sushi on red-and-white-vinegar rice comes by the piece or as six- and ten-piece sets, alongside small dishes such as oyster namero and kimchi lotus root, meat dishes, and sake from around Japan; ingredients change daily, so book early and ask for favourites in advance. Service can be slow when busy. Smoking allowed; ¥500 charge each; cash only. Late on Friday and Saturday; closed Wednesday.",
    chef_bio: { chef_name: null, roles: ['Owner and the owner’s wife, per a February 2026 review (unnamed)'], origin: null,
      background: 'A February 2026 reviewer says the shop is run by the owner and the owner’s wife, who warned in advance that service would take time when busy; another February 2026 reviewer describes some nigiri handed straight from the chef’s hand and a wall of nostalgic anime stickers. An October 2024 reviewer mentions travelers toasting with the owner over sake.',
      philosophy: null, specialty: 'Sushi by the piece; oyster namero.',
      anecdotes: [
        { text: 'A February 2026 diner found the couple running the shop very busy and the service a little slow, as the shop had warned beforehand.', source: R + 'B330534267/' },
        { text: '"The entrance is a bit hard to find! It’s easier to enter from the main street!" — March 2025.', source: R + 'B504113690/' },
        { text: 'An October 2024 diner liked the sushi but would rather the smoke stayed away from it.', source: R + 'B494811190/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・寿司・日本酒バー、中京区東木屋町通四条上る鍋屋町122、阪急京都河原町駅1・2番出口から徒歩3分、月火木 17:30〜23:00、金 17:15〜24:00、土 17:15〜1:00、日 17:15〜23:00、水曜休み、予約可 (仕入れの都合で早めに連絡、食材がなくなり次第終了、食材とメニューは日替わり、希望があれば事前に)、1〜4名まで、おひとり様500円、喫煙可、カード・電子マネー・QR 不可、20席 (カウンター6、テーブル14)。口コミ (2024〜2026年、英語): 夫婦で営む、白と赤の酢を合わせたシャリ、寿司1貫から、6貫・10貫のセット、牡蠣のなめろう、蓮根のキムチ、ホタルイカの黒煮、アニメのステッカーの壁、路地の奥で見つけにくい、現金のみ、喫煙可。',
      confidence: 'medium', sources: [TB, R + 'B330534267/', R + 'B494811190/', R + 'B504113690/', R + 'B518042149/', R + 'B518310013/', R + 'B518533757/', R + 'B530280510/', R + 'B531302342/', R + 'B531558635/', R + 'B532971543/', R + 'B535025066/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book early by phone; ask what is in today; cash only; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区東木屋町通四条上る鍋屋町122',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.004957, 135.770860); GSI matches only the town 京都府京都市中京区鍋屋町 (town) 36 m away (GSI only this round, no OSM); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B330534267/'],
    price_note: 'No prices read except the ¥500 per-person charge (Tabelog); bills of about ¥4,000–8,000 a head in 2025–26 reviews.', last_checked: TODAY, items: [
      it('', '', 'Six-piece sushi set (sea bream, shrimp, salmon roe, shiso, pickled daikon)', '', 'Sushi', 'ask', 'no', 'February 2026.', 'sushi_6'),
      it('', '', 'Omakase sushi, 6 pieces', '', 'Sushi', 'ask', 'no', 'February 2026.', 'omakase_6'),
      it('', '', 'Oyster namero', '', 'Small dishes', 'ask', 'no', 'June 2026.', 'kaki_namero'),
      it('', '', 'Per-person charge', '¥500', 'Charge', '', '', 'Tabelog.', 'charge'),
    ] }, {
    cuisine: '日替わりの魚と肉料理、各地の日本酒の寿司居酒屋 (食べログ、2024〜2026年の口コミ)・白と赤の酢を合わせたシャリの握りを1貫かセットで: 鯛、海老、いくら、しそ、たくあんの6貫、おまかせ6貫、カウンターの10貫、創作寿司、うなぎ、すずき、漬けの魚 (2025〜2026年の口コミ)・小皿: 蓮根のキムチ、牡蠣のなめろう、ホタルイカの黒煮、海苔で巻いたまぐろ、バーガー風のつまみ、肉料理 (2024〜2026年の口コミ)・Keigetsu や Itaru の純米吟醸などの日本酒 (2025〜2026年の口コミ)',
    neighborhood: '四条の北、木屋町と先斗町の間の路地。京都河原町駅から徒歩3分',
    gf_detail: '要確認。醤油の寿司と漬けの魚、煮物、肉料理、バーガー風のつまみ。食材は日替わりで、グルテンの情報は公開されていない (食べログ、2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。寿司と魚の居酒屋で、お通しに寿司玉子が出たことも (2024〜2026年の口コミ)。',
    notes: '[寿司居酒屋・木屋町、路地の隠れたカウンター] 木屋町と先斗町の間の細い路地にある20席の寿司居酒屋。夫婦で営み、壁には懐かしいアニメのステッカー。赤と白の酢のシャリの寿司を1貫か6貫・10貫のセットで、牡蠣のなめろうや蓮根のキムチなどの小皿、肉料理、各地の日本酒と。食材は日替わりなので早めに予約し、食べたいものは事前に伝えるとよい。混むと提供は遅め。喫煙可、1人500円、現金のみ。金・土は遅くまで、水曜休み。',
  });
}

// ================================================================ 松屋常盤
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26000620/'; const R = TB + 'dtlrvwlst/';
  const H = day(['09:30', '15:00']);
  put({
    id: 'kyoto_matsuya_tokiwa', name: '松屋常盤 (Matsuya Tokiwa)', category: 'OMNI',
    lat: 35.016634, lng: 135.763058, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: miso matsukaze is made from wheat flour, sugar, white miso and sesame (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Reviewers list only wheat flour, sugar, white (Saikyo) miso and sesame, and one notes it is egg-free; the shop publishes no ingredient list (2026 reviews).',
    hours_raw: '9:30–15:00 daily; hours may change (Tabelog). Takeaway only (Tabelog). The miso matsukaze is best reserved: the large (¥1,200) needs booking by the day before; the small (¥1,000) is sold on the day in limited numbers (Tabelog). Walk-ins often find one to three left, or none (2026 reviews); cut ends for home use (¥300) are sometimes available and can be prepared if you call ahead (June, September, October 2026). Keeps about three days; the miso top sticks, so do not wrap it in plastic (July 2026). Cash only (Tabelog). Parking for one or two cars at the shop (Tabelog). On Sakaimachi-dori south of Marutamachi, below the Imperial Palace’s Sakaimachi gate; 5 min walk from Marutamachi Stn (Tabelog; September 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Sakaimachi-dori south of Marutamachi, by the Imperial Palace — 5 min walk from Marutamachi Stn',
    cuisine: 'Old wagashi shop with essentially one sweet, 味噌松風 (miso matsukaze): a castella-like sheet of wheat flour, sugar and white Saikyo miso, sprinkled with sesame, moist and chewy, with a sweet-savoury miso top (2026 reviews) · small ¥1,000, large ¥1,200 (Tabelog); cut ends for home use ¥300 (June and September 2026)',
    website: null, gmaps: gm('松屋常盤 京都 堺町'), menu_url: null,
    notes: "[Wagashi · Imperial Palace, one sweet for centuries] A noren-hung shop south of the Imperial Palace's Sakaimachi gate that sells one thing: miso matsukaze, a moist, castella-like cake of flour, sugar, white Saikyo miso and sesame — one of Kyoto's three famous matsukaze, per a reviewer. Reviewers in 2026 were greeted by an elderly lady in the small tatami-floored shop. Book a day ahead (large ¥1,200; small ¥1,000, a few sold on the day), or ask for the ¥300 bag of cut ends. Eat within about three days. Daily 9:30–15:00, cash only.",
    chef_bio: { chef_name: null, roles: ['Family shop; no one is named in the sources'], origin: null,
      background: 'An April 2026 reviewer calls it a historic wagashi shop established in the Shoo era and favoured by the Imperial Palace and Daitoku-ji; a July 2026 reviewer says it has been in business for 360 years. Reviewers describe an elderly woman, apparently the head of the shop, with a young male staff member in the small tatami-floored shop. A July 2026 reviewer calls it one of Kyoto’s three famous matsukaze shops. Tabelog Japanese sweets WEST "Tabelog 100" 2023, 2026.',
      philosophy: null, specialty: 'Miso matsukaze.',
      anecdotes: [
        { text: '"The lovely elderly lady at the shop welcomed me with a smile" — July 2026.', source: R + 'B523193233/' },
        { text: 'An October 2026 holiday walk-in asked for miso matsukaze and was told three were left; the staff added that a sliced version could be prepared for home use if called ahead.', source: R + 'B536803466/' },
        { text: 'A September 2026 visitor without a reservation was asked whether it was for home use and sold a bag of cut ends for ¥300.', source: R + 'B536313028/' },
      ],
      japanese_sources_summary: '食べログ: 和菓子、中京区堺町通丸太町下ル橘町83、丸太町駅から徒歩5分、毎日9:30〜15:00、予約可 (大1,200円は前日までに予約、小1,000円は当日限定販売)、テイクアウトのみ、カード・電子マネー・QR 不可、駐車場1〜2台、和菓子・甘味処 WEST 百名店 2023・2026。口コミ (2026年4〜10月、英語): 味噌松風のみ、小麦粉・砂糖・白味噌 (西京味噌)・ごまで卵なし、日持ち約3日、家庭用の切り落とし300円、Shoo 年間の創業、約360年、京都の三大松風の一つ、店の奥の座敷の年配の女性。',
      confidence: 'medium', sources: [TB, R + 'B523193233/', R + 'B527009973/', R + 'B527890098/', R + 'B529317271/', R + 'B529320756/', R + 'B529616168/', R + 'B532240486/', R + 'B532896005/', R + 'B533545837/', R + 'B536313028/', R + 'B536803466/', R + 'B537079849/'] },
    cultural_comfort: { level: 'japanese', note: 'Reserve by phone in Japanese a day ahead; say if it is for home use; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区堺町通丸太町下ル橘町83',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026; Japanese sweets WEST Tabelog 100 2026.' },
    pin_source: `Tabelog ${TB} (35.016634, 135.763058); cross-checked: GSI 京都府京都市中京区橘町83番地 (lot) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B529616168/'],
    price_note: 'Prices from Tabelog (reservation note) and 2026 reviews; the small was ¥1,000 tax included (April and August 2026).', last_checked: TODAY, items: [
      it('味噌松風', '', 'Miso matsukaze, small (limited same-day sale)', '¥1,000', 'Wagashi', 'no', 'ask', 'Tabelog; April and August 2026.', 'miso_matsukaze_small'),
      it('味噌松風', '', 'Miso matsukaze, large (reserve by the day before)', '¥1,200', 'Wagashi', 'no', 'ask', 'Tabelog.', 'miso_matsukaze_large'),
      it('', '', 'Cut ends for home use', '¥300', 'Wagashi', 'no', 'ask', 'June and September 2026.', 'kiriotoshi'),
    ] }, {
    cuisine: 'ほぼ一品の老舗の和菓子屋、味噌松風: 小麦粉、砂糖、白味噌 (西京味噌) にごまをふったカステラのような生地で、しっとりもちもち、甘じょっぱい味噌の表面 (2026年の口コミ)・小1,000円、大1,200円 (食べログ)、家庭用の切り落とし300円 (2026年6月・9月)',
    neighborhood: '御所のそば、丸太町の南の堺町通。丸太町駅から徒歩5分',
    gf_detail: 'グルテンフリーではない。味噌松風は小麦粉、砂糖、白味噌、ごまで作る (2026年の口コミ)。',
    vegan_detail: '要確認。口コミでは原材料は小麦粉、砂糖、白味噌 (西京味噌)、ごまのみで卵なしとあるが、店は原材料を公開していない (2026年の口コミ)。',
    notes: '[和菓子・御所南、何百年も一つの菓子] 御所の堺町御門の南、暖簾のかかる店で売るのは味噌松風だけ。小麦粉、砂糖、西京の白味噌、ごまのしっとりしたカステラのような菓子で、口コミによれば京都の三大松風の一つ。2026年の口コミでは、座敷の年配の女性が迎えてくれたという。前日までに予約 (大1,200円、小1,000円は当日に少しだけ)、または家庭用の切り落とし (300円) を尋ねてみるとよい。日持ちは約3日。毎日9時30分〜15時、現金のみ。',
  });
}

// ================================================================ 亀屋良永
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26000644/'; const R = TB + 'dtlrvwlst/';
  const MAPPLE = 'https://www.mapple.net/region/a0502010101_g02060500/spot/';
  const H = day(['08:00', '18:00']);
  put({
    id: 'kyoto_kameya_yoshinaga', name: '亀屋良永 (Kameya Yoshinaga)', category: 'OMNI',
    lat: 35.010588, lng: 135.767151, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Oike senbei tastes of egg and wheat (August 2026); bean-paste sweets, yokan and kudzu sweets may be wheat-free, but no ingredient lists are published (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Yokan and bean-paste sweets are plant-based in principle, but the Oike senbei contains egg and Honohono is a baked sweet; no ingredient lists are published (2026 reviews).',
    hours_raw: '8:00–18:00; closed Wednesday and Sunday (Tabelog). A reviewer found it open on Sunday 1 November 2026 at about 8:00, against Tabelog’s Sunday closure — check before going. Takeaway only. Reservations taken (Tabelog). Cards not accepted; e-money accepted (Tabelog). At the south-west corner of Teramachi and Oike, diagonally opposite Honnoji; 151 m from Kyoto Shiyakusho-mae Stn (Tabelog; MAPPLE; September 2026).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Teramachi-Oike, south-west corner, opposite Honnoji — by Kyoto Shiyakusho-mae Stn',
    cuisine: 'Old wagashi house known for 御池煎餅 (Oike senbei): light, sugar-glazed wafers that melt like snow (MAPPLE; 2026 reviews) · Oike senbei ¥1,350 for a tin of 22, 月 (Tsuki, shaped like the door pulls of Katsura Imperial Villa) ¥2,000 for 10, 小倉山 yokan ¥1,520 (MAPPLE, undated) · seasonal sweets: Seseragi summer yokan ¥2,350, Honohono (lemony white-bean baked sweet), a summer Toba tama manju branded with Daimonji, okuribi-themed kudzu sweets in August, Meigetsu ¥500 in September, shirataki kudzu yokan (2026 reviews) · a miso version of the senbei (September 2026)',
    website: null, gmaps: gm('亀屋良永 寺町御池'), menu_url: null,
    notes: "[Wagashi · Teramachi Oike, Oike senbei] A long-established wagashi house on the corner of Teramachi and Oike, opposite Honnoji, best known for Oike senbei — pale, sugar-glazed wafers that dissolve like snow (¥1,350 for a tin of 22, per MAPPLE). The shelves also hold Tsuki, modelled on the door pulls of Katsura Imperial Villa, 小倉山 yokan and seasonal sweets, such as Daimonji-themed ones in August. One reviewer found the senbei has grown pricey. Takeaway only. 8:00–18:00; Tabelog says closed Wednesday and Sunday, but a reviewer found it open on a Sunday in November 2026.",
    chef_bio: { chef_name: null, roles: ['Long-established wagashi house; no one is named in the sources'], origin: null,
      background: 'MAPPLE gives the founding as 1832 (天保3); an August 2026 reviewer says it has been around since 1803. MAPPLE lists Oike senbei, Tsuki (after the door pulls of Katsura Imperial Villa) and 小倉山 yokan. A July 2026 reviewer who has loved the senbei since childhood found it has become quite pricey and that a favourite seasonal sweet, Toki no Nagare, is no longer made. Tabelog Japanese sweets WEST "Tabelog 100" 2023, 2026.',
      philosophy: null, specialty: 'Oike senbei; Tsuki.',
      anecdotes: [
        { text: '"Instead of being hard and crunchy, they dissolve almost instantly in your mouth, reminiscent of cotton candy." — August 2026.', source: R + 'B532952417/' },
        { text: 'A September 2026 visitor was given a taste of a miso version of the senbei.', source: R + 'B536184710/' },
        { text: '"Tabelog says they are closed on Sundays, but I visited on November 1, which was a Sunday." — November 2026.', source: R + 'B538428491/' },
      ],
      japanese_sources_summary: 'まっぷる: 天保3 (1832) 年創業の和菓子の老舗、淡雪のような口溶けの「御池煎餅」、桂離宮の襖の引手の形をした「月」、甘さ控えめのようかん「小倉山」、御池煎餅1,350円 (1缶・22枚入) 〜、月2,000円 (10個)、小倉山1,520円、8:00〜18:00、寺町通御池西南角。食べログ: 和菓子、中京区寺町通御池下ル本能寺前町504、京都市役所前駅から151m、月火木金土 8:00〜18:00、水・日休み、予約可、カード不可、電子マネー可、和菓子・甘味処 WEST 百名店 2023・2026。口コミ (2026年7〜11月、英語): 1803年創業との記述、御池煎餅、夏のようかん Seseragi 2,350円、Honohono、Meigetsu 500円、Toki no Nagare は製造終了、日曜 (11月1日) に営業していた。',
      confidence: 'medium', sources: [TB, MAPPLE, R + 'B531732639/', R + 'B532952417/', R + 'B533175751/', R + 'B534504294/', R + 'B535071004/', R + 'B536184710/', R + 'B536206793/', R + 'B536216559/', R + 'B536648030/', R + 'B538318199/', R + 'B538428491/', R + 'B538521672/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Choose from the counter; staff introduce the sweets; e-money but no cards.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区寺町通御池下ル本能寺前町504',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026; Japanese sweets WEST Tabelog 100 2026.' },
    pin_source: `Tabelog ${TB} (35.010588, 135.767151); GSI found no match for 本能寺前町504 or 本能寺前町 (GSI only this round, no OSM); MAPPLE places it at the south-west corner of Teramachi and Oike; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [MAPPLE, R + 'B531732639/', R + 'B536216559/'],
    price_note: 'Standard items from MAPPLE (undated; a July 2026 reviewer says prices have risen); seasonal items from 2026 reviews.', last_checked: TODAY, items: [
      it('御池煎餅', '', 'Oike senbei, tin of 22', '¥1,350', 'Senbei', 'no', 'no', 'MAPPLE, undated.', 'oike_senbei'),
      it('月', '', 'Tsuki (10 pieces)', '¥2,000', 'Wagashi', 'ask', 'ask', 'MAPPLE, undated.', 'tsuki'),
      it('小倉山', '', '小倉山 yokan', '¥1,520', 'Yokan', 'ask', 'ask', 'MAPPLE, undated.', 'ogurayama'),
      it('', '', 'Seseragi summer yokan', '¥2,350', 'Yokan', 'ask', 'ask', 'July 2026.', 'seseragi'),
      it('', '', 'Meigetsu (bean-paste sweet)', '¥500', 'Wagashi', 'ask', 'ask', 'September 2026.', 'meigetsu'),
    ] }, {
    cuisine: '御池煎餅で知られる老舗の和菓子屋: 淡雪のような口溶けの、砂糖をひいた軽い煎餅 (まっぷる、2026年の口コミ)・御池煎餅1,350円 (1缶22枚)、桂離宮の襖の引手の形の「月」2,000円 (10個)、ようかん「小倉山」1,520円 (まっぷる、時期不明)・季節の菓子: 夏のようかん Seseragi 2,350円、Honohono (レモン香る白餡の焼き菓子)、大文字の焼印の夏の Toba tama manju、8月の送り火の葛菓子、9月の Meigetsu 500円、葛のようかん shirataki (2026年の口コミ)・味噌の煎餅 (2026年9月)',
    neighborhood: '寺町御池の西南角、本能寺の向かい。京都市役所前駅すぐ',
    gf_detail: '要確認。御池煎餅は卵と小麦の風味 (2026年8月)。餡の菓子、ようかん、葛の菓子は小麦なしのこともあるが、原材料は公開されていない (2026年の口コミ)。',
    vegan_detail: '要確認。ようかんや餡の菓子は基本的に植物性だが、御池煎餅には卵を使い、Honohono は焼き菓子。原材料は公開されていない (2026年の口コミ)。',
    notes: '[和菓子・寺町御池、御池煎餅] 本能寺の向かい、寺町御池の角の老舗の和菓子屋。名物は淡雪のように溶ける砂糖をひいた御池煎餅 (まっぷるでは22枚入り1缶1,350円)。桂離宮の襖の引手を模した「月」、ようかん「小倉山」、8月の大文字にちなんだ菓子など季節の菓子も並ぶ。煎餅が高くなったという口コミも。持ち帰りのみ。8時〜18時。食べログでは水・日休みだが、2026年11月の日曜に開いていたという口コミもある。',
  });
}

save();
