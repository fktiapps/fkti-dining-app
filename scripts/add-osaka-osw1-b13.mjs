// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first; worker osw1 (lane: Tabelog id mod 4 = 0), batch 13.
//   + 道頓堀クラフトビア醸造所 なんばCITY (Dotonbori Brewery's own izakaya: kushikatsu and house craft beer, Namba CITY, 2015)
//   + かに・ふぐ専門 蟹吉WEST なんば道頓堀 (crab and fugu courses on the west side of Dotonbori, open to 3 a.m., 2013)
//   + WA鶏BAR 本店 (alley chicken bar: rock-salt grilled chicken, rare kara-age, Higashi-Shinsaibashi)
//   + 芙蓉苑 Fuyo En (Sichuan restaurant at Nagahoribashi exit 3, 2015)
//   - 27097288 肉汁餃子と190円レモンサワー 難波のしんちゃん: chain (skip()).
//   Lane: mod-4 = 0 ids in `queue.mjs osaka next notable 260` after batch 12: 27136664 (ぼんぞ) and 27149612 (TORA鶏YA) still
//   undecided, then 27008500, 27097288, 27075068, 27060128, 27089496.
//   Chain check (Greg's rulings 2026-11-02):
//   - Dotonbori Brewery (道頓堀麦酒醸造株式会社, dotonboribeer.co.jp) lists three official restaurants in three formats:
//     道頓堀たちばな (ビール工場), this izakaya, and 道頓堀麦酒スタンド in the Osaka-Namba station gates. None is in data. Kept.
//   - 蟹吉: the WEST listing says "Kaniyoshi has three locations near Namba" (蟹吉, 蟹吉WEST, 蟹吉PREMIUM); shops.jsonl also has
//     蟹吉 十三店 (27154826): four shops, none in data. Kept on the group-of-four precedent.
//   - WA鶏BAR: two shops (本店 and 天満店, watoribar.com footer; shops.jsonl 27115820); sister 屋台CHU華 ジャスミン is a different
//     concept. Kept.
//   - 芙蓉苑: the listing points hot-pot diners to its sister 芙蓉苑 火鍋城 (Tabelog 27102144), a different format. Kept.
//   - しんちゃん: same-concept branches 難波 (this) and アメ村 (27103067) plus 谷四 (Hot Pepper), more Shinchan gyoza shops in
//     Tenma and Umeda (shops.jsonl 27139313, 27132382, 27152937) and 平岸 in Sapporo (gnavi h076719); a reviewer calls it
//     "this chain". Skipped.
//   None of the four is in data/osaka.json (grep by name, romaji and address, 2026-11-02).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw1-13');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27097288', 'Chain: 肉汁餃子と190円レモンサワー しんちゃん has same-concept branches in Namba, Amemura (27103067) and Tanimachi 4-chome (Hot Pepper), more Shinchan gyoza bars in Tenma and Umeda, and a Sapporo branch (gnavi); an August 2026 review calls it "this chain".');

// ================================================================ 道頓堀クラフトビア醸造所 なんばCITY
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27008500/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.dotonboribeer.co.jp';
  const WD = day(['11:30', '15:00'], ['17:00', '22:00']); const WE = day(['11:30', '22:00']);
  put({
    id: 'osaka_dotonbori_craft_beer_namba_city', name: '道頓堀クラフトビア醸造所 なんばCITY (Dotonbori Craft Beer Jozoujo Nanba CITY)', category: 'OMNI',
    lat: 34.661857, lng: 135.50302, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: the specialities are batter-fried kushikatsu and beer, with fried chicken, gyoza and croquettes.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a kushikatsu izakaya; set meals come with miso soup and the menu is built on meat, seafood and egg.',
    hours_raw: 'Mon–Fri 11:30–15:00 and 17:00–22:00; Sat, Sun and holidays 11:30–22:00; hours and closing days follow Namba CITY; closed 31 December 2025 and 1 January 2026 (Tabelog). Reservations accepted, including on the day (Tabelog; September 2026). Cards (VISA, Master, JCB, AMEX, Diners), transport IC cards and other e-money, and QR payments (Tabelog). 200 seats: a counter facing the beer taps, private rooms for 2–6 and tatami rooms for 8–50; non-smoking, with a smoking booth on the mall floor (Tabelog). Children welcome (Tabelog). Order on a touch panel (April 2026). With all-you-can-drink, at least two dishes per person (August 2026). Opened 30 October 2015 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba CITY South Building 1F, Namba 5-1-60 — 1 min from Nankai Namba Stn, reachable underground from the subway',
    cuisine: 'Official izakaya of Dotonbori Brewery, a craft brewery in the basement of the Osaka Shochikuza theatre, pouring all its Dotonbori Beer with guest beers (Tabelog; official site) · beers such as Osaka Kölsch, Osaka Porter and Osaka Alt, and a black beer in a mug (2026 reviews); all-you-can-drink including craft beer (September 2026) · kushikatsu (sweet potato, shrimp, quail egg, onion, pork, tomato and asparagus, kabocha, eringi), fried chicken, a giant gyoza, beef-tendon dote skewers ¥539 (June 2026), chicken sashimi, a large spinach cream croquette (2026 reviews) · lunch sets ¥890 and ¥990 with rolled omelette, oden, a large chicken katsu or the croquette, miso soup refilled free (April and August 2026); a 9-piece kushikatsu set; a lunch drinking set of edamame, five kushikatsu and a pint (September 2026)',
    website: SITE, gmaps: gm('道頓堀クラフトビア醸造所 なんばCITY'), menu_url: null,
    notes: "[Izakaya · Namba, the brewery's own kushikatsu bar] The house izakaya of Dotonbori Brewery, a craft brewer in the basement of the Shochikuza theatre, in a big, calm room on the ground floor of Namba CITY South a minute from Nankai Namba. Every Dotonbori Beer is on tap, Osaka Kölsch, Porter and Alt among them, beside kushikatsu, fried chicken and giant gyoza. Lunch is good value: sets were ¥890 and ¥990 in August 2026 with free miso soup refills, and a lunch drinking set brings edamame, five kushikatsu and a pint. Private rooms and tatami halls make it a party venue, with all-you-can-drink that includes the craft beer. One August 2026 diner found the beer list limited. Hours follow the mall.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null, background: 'Official site (dotonboribeer.co.jp): 道頓堀麦酒醸造株式会社, a brewery on B2 of the Osaka Shochikuza in Dotonbori, brewing daily; its official restaurants are 道頓堀たちばな (beside the brewery), this izakaya and 道頓堀麦酒スタンド inside the Osaka-Namba station gates. Shop-maintained Tabelog listing: Dotonbori Brewery\'s official izakaya, all Dotonbori Beer varieties with guest beers, famous kushikatsu, fried chicken and gyoza; opened 30 October 2015.', philosophy: null, specialty: 'Kushikatsu with house craft beer; lunch sets.',
      anecdotes: [
        { text: '"This service is just fantastic!" — August 2026, on lunch sets at ¥890 and ¥990 with free miso soup refills.', source: R + 'B525640249/' },
        { text: '"Beef Tendon Dote Skewers. JPY 539. They were so tender that I hardly had to chew." — June 2026.', source: R + 'B523071428/' },
        { text: '"However, the selection of beers is somewhat limited, which might leave beer enthusiasts wanting more." — August 2026.', source: R + 'B537833492/' },
      ],
      japanese_sources_summary: '公式サイト (dotonboribeer.co.jp): 道頓堀麦酒醸造株式会社、道頓堀の大阪松竹座 (地下2階) にあるブルワリーで毎日醸造、オフィシャル飲食店は道頓堀たちばな (ビール工場)、道頓堀クラフトビア醸造所 (なんばCITY南館1F)、道頓堀麦酒スタンド (大阪難波駅 改札内)。食べログ (店舗会員): 道頓堀クラフトビア醸造所 なんばCITY、居酒屋・串揚げ・ビアホール、大阪市中央区難波5-1-60 なんばCITY 南館 1F、南海難波駅から徒歩1分、地下鉄の駅から地下道で行ける、月〜金11:30〜15:00・17:00〜22:00、土日祝11:30〜22:00、営業日はなんばCITYに準ずる、予約可、カード・電子マネー・QR 可、200席 (個室、座敷は最大50名)、禁煙、子ども可、2015年10月30日オープン、名物は串カツと道頓堀ビール。口コミ(2026年2月〜11月): Osaka Kölsch、Osaka Porter、Osaka Alt、串カツ、唐揚げ、大きな餃子、牛すじの串539円、鶏刺し、大きなコロッケ、ランチのセット890円と990円 (みそ汁のおかわり無料)、昼飲みセット、タッチパネルで注文、飲み放題は1人2品以上、ビールの種類が少ないという声も。',
      confidence: 'high', sources: [TB, SITE, R + 'B523071428/', R + 'B525640249/', R + 'B533294546/', R + 'B534055883/', R + 'B534292019/', R + 'B535403449/', R + 'B535506068/', R + 'B536921854/', R + 'B536954868/', R + 'B537833492/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Touch-panel ordering (April 2026); polite overseas staff noted in September 2026. No English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'single', address_ja: '大阪府大阪市中央区難波5-1-60 なんばCITY 南館 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and the brewery\'s site; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB}; GSI 大阪府大阪市中央区難波五丁目1番60号 (go) about 385m — the lot spans Namba CITY and the station, so the pin is approximate (Tabelog point, South Building), as for osaka_mita_seimenjo_namba_city (same 南館 1F, 23 m away); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B525640249/', R + 'B523071428/', R + 'B535403449/'],
    price_note: 'Prices from June and August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch set (rolled omelette, oden, chicken katsu or croquette)', '¥890–990', 'Lunch', 'no', 'no', 'August 2026 review.', 'lunch_set'),
      it('', '', 'Beef-tendon dote skewers', '¥539', 'Dishes', 'ask', 'no', 'June 2026 review.', 'dote_kushi'),
      it('', '', 'Lunch drinking set (edamame, five kushikatsu, a pint)', '', 'Lunch', 'no', 'no', 'September 2026 review.', 'hiru_nomi_set'),
      it('', '', 'Dotonbori Beer (Osaka Kölsch, Porter, Alt)', '', 'Drinks', 'no', 'ask', '2026 reviews.', 'dotonbori_beer'),
    ] }, {
    cuisine: '大阪松竹座の地下のクラフトビールの醸造所、道頓堀麦酒のオフィシャルの居酒屋で、道頓堀ビール全種とゲストビール (食べログ、公式サイト)・Osaka Kölsch、Osaka Porter、Osaka Alt、ジョッキの黒ビールなど (2026年の口コミ)。クラフトビールも入った飲み放題 (2026年9月)・串カツ (さつまいも、えび、うずらの卵、玉ねぎ、豚、トマトとアスパラ、かぼちゃ、エリンギ)、唐揚げ、大きな餃子、牛すじのどての串539円 (2026年6月)、鶏刺し、ほうれん草の大きなクリームコロッケ (2026年の口コミ)・ランチのセット890円と990円、だし巻き、おでん、大きなチキンカツ、コロッケから選び、みそ汁はおかわり無料 (2026年4月と8月)。串カツ9本の定食、枝豆と串カツ5本とパイントの昼飲みセット (2026年9月)',
    neighborhood: '難波5-1-60、なんばCITY 南館1階。南海なんば駅から1分、地下鉄から地下道で',
    gf_detail: 'グルテンフリーではありません。名物は衣の串カツとビールで、唐揚げ、餃子、コロッケも。',
    vegan_detail: 'ヴィーガンではありません。串カツの居酒屋で、定食にはみそ汁がつき、料理は肉、魚介、卵が中心。',
    notes: '[居酒屋・なんば、醸造所の串カツの店] 松竹座の地下のクラフトビールの醸造所、道頓堀麦酒のオフィシャルの居酒屋で、南海なんば駅から1分、なんばCITY 南館1階の広く落ち着いた店。Osaka Kölsch、Porter、Alt など道頓堀ビールが全種そろい、串カツ、唐揚げ、大きな餃子と合わせて。ランチはお得で、2026年8月はセットが890円と990円、みそ汁はおかわり無料。昼飲みセットは枝豆、串カツ5本、パイントのビール。個室や座敷があり宴会向きで、飲み放題にはクラフトビールも入る。2026年8月にはビールの種類が少ないという声も。営業時間はなんばCITYに準ずる。',
  });
}

// ================================================================ かに・ふぐ専門 蟹吉WEST なんば道頓堀
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27075068/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '03:00']);
  put({
    id: 'osaka_kaniyoshi_west_dotonbori', name: 'かに・ふぐ専門 蟹吉WEST なんば道頓堀 (Kaniyoshi WEST)', category: 'OMNI',
    lat: 34.668838, lng: 135.499042, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Crab and fugu sashimi come with dipping sauces, courses include crab tempura and hot pot, and the fin sake and crab sake are other things to ask about.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a crab and fugu specialist; every course is seafood.',
    hours_raw: 'Daily 12:00–3:00 the next morning, food last order 1:00; open year-round (Tabelog). The same listing also says last order 2:00 and last entry 1:00, and its headline says "12 PM to midnight" (Tabelog). On weekday lunchtimes the sister shop 蟹吉PREMIUM, 30 seconds away, is open; groups may be moved between the three Namba shops (Tabelog). Reservations accepted; online bookings for 11 or more need a course (Tabelog). In season, a regular found only slots after 20:30 (October 2026); a 2-hour limit at an early sitting (November 2026). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 70 seats, private rooms (one per floor) and sunken seating, parties up to 20 (Tabelog; November 2026). Smoking allowed throughout; non-smokers can ask for a room by an opening window (Tabelog; May 2026). Opened 21 August 2013 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Dotonbori 2-4-5, the west end of Dotonbori with a fugu tank out front — 2 min from Namba Stn exit 25',
    cuisine: 'Crab and fugu specialist (Tabelog) · courses: Zuwai crab feast with crab sashimi, crab miso and tempura ¥12,100; Zuwai crab and fugu together ¥13,750; three crabs (king, hairy and snow) ¥24,200; an ultimate fugu course ¥15,400; live fugu with milt ¥11,000; all-you-can-drink with fin sake and crab sake +¥2,750 (Tabelog) · premium king crab and snow crab course ¥17,050 at lunch (October 2026) · crab sashimi with a dip of egg yolk and crab miso, crab and fugu grilled on a charcoal shichirin at the table, steamed crab, crab hot pot, grilled fugu milt, rice porridge to finish, vanilla ice cream (2026 reviews) · snow crab from the Sea of Okhotsk (Tabelog); two October 2026 diners judged the crab frozen rather than live',
    website: null, gmaps: gm('蟹吉WEST なんば道頓堀'), menu_url: null,
    notes: "[Crab and fugu · Dotonbori, courses until 3 a.m.] A crab and fugu house at the west end of Dotonbori, with a tank of fugu swimming out front and a private room on each floor, some by windows over the canal boats. It is one of three Kaniyoshi shops in Namba, and the courses do the work: snow crab from ¥12,100, crab and fugu together for ¥13,750 (April 2026), up to a three-crab feast. Crab sashimi with a dip of egg yolk and crab miso is the dish diners remember; staff grill crab and fugu on a charcoal shichirin at the table and finish with rice porridge. Two October 2026 diners judged the crab frozen, and one found the crab tempura the weak dish. Smoking is allowed throughout. Open daily to 3 a.m.",
    chef_bio: { chef_name: null, roles: ['Kitchen and room staff (unnamed); staff grill and cook at the table'], origin: null, background: 'Shop-maintained Tabelog listing: crab and fugu specialist two minutes from Namba Station, open noon to 3 a.m.; snow crab from the Sea of Okhotsk; grilled crab and fugu cooked on a shichirin in front of the diner; private rooms, one per floor; three Kaniyoshi locations near Namba (the listing also writes Kani Kichi and Kanikichi PREMIUM for the sister shops); opened 21 August 2013.', philosophy: null, specialty: 'Crab and fugu courses.',
      anecdotes: [
        { text: '"There was a tank in front of the restaurant with many fugu swimming around." — May 2026.', source: R + 'B528819576/' },
        { text: '"The grilled fugu was cooked by a lovely lady on a shichirin (charcoal grill), and the aroma filled the air while it was being grilled." — July 2026.', source: R + 'B532636287/' },
        { text: '"The crab was not live but frozen, yet it was packed with meat, fresh, and had a delightful sweetness." — October 2026.', source: R + 'B538235666/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): かに・ふぐ専門 蟹吉WEST なんば道頓堀、かに・ふぐ・日本料理、大阪市中央区道頓堀2-4-5、なんば駅25番出口から徒歩2分、毎日12:00〜27:00 (料理L.O.25:00)、年中無休、平日の昼は徒歩30秒の姉妹店 蟹吉PREMIUM が営業、なんばに3店あり予約時に別の店を案内することも、予約可、カード可、電子マネー・QR 不可、70席、個室は各階1室、掘りごたつ、全席喫煙可、2013年8月21日オープン、オホーツク海のずわいがに、目の前の七輪で焼くかにとふぐ。コース: ずわいがに12,100円、ずわいがにとふぐ13,750円、3大がに24,200円、ふぐ15,400円、白子つきの活ふぐ11,000円、ひれ酒とかに酒の飲み放題2,750円。口コミ(2026年3月〜11月): かに刺し、卵黄とかにみそのたれ、かにの甲羅に注ぐ日本酒、雑炊、焼き白子、店の前のふぐの水槽、窓から観光船が見える個室、たらばがにとずわいがにのランチのコース17,050円、冷凍のかにだったという声が2件、かにの天ぷらはいまひとつという声、シーズンは20時半以降しか空かないことも。',
      confidence: 'medium', sources: [TB, R + 'B524695766/', R + 'B525872846/', R + 'B528620606/', R + 'B528819576/', R + 'B529603058/', R + 'B531693726/', R + 'B532636287/', R + 'B538034602/', R + 'B538235666/', R + 'B538465042/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set courses in private rooms; staff cook at the table. Overseas staff noted (November 2026). No English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '大阪府大阪市中央区道頓堀2-4-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区道頓堀二丁目4番5号 (go) 14m. Same address as 串焼き 猿 (osaka_kushiyaki_saru, address_ja "大阪府大阪市中央区道頓堀2-4-5 1階"), pinned 9 m away, so this pin is block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B525872846/', R + 'B538034602/'],
    price_note: 'Course prices from the Tabelog listing and April and October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Zuwai crab feast course (crab sashimi, crab miso, tempura)', '¥12,100', 'Courses', 'no', 'no', 'Tabelog listing.', 'zuwai_course'),
      it('', '', 'Special Zuwai crab and fugu course', '¥13,750', 'Courses', 'ask', 'no', 'Tabelog; April 2026 review.', 'kani_fugu_course'),
      it('', '', 'Premium king crab and snow crab course', '¥17,050', 'Courses', 'ask', 'no', 'October 2026 review.', 'taraba_zuwai_course'),
      it('', '', 'Three-crab tasting course (king, hairy, snow)', '¥24,200', 'Courses', 'ask', 'no', 'Tabelog listing.', 'sandai_kani_course'),
    ] }, {
    cuisine: 'かにとふぐの専門店 (食べログ)・コース: かに刺し、かにみそ、天ぷらのずわいがにのコース12,100円、ずわいがにとふぐの両方13,750円、たらばがに・毛がに・ずわいがにの3大がに24,200円、ふぐのコース15,400円、白子つきの活ふぐ11,000円、ひれ酒とかに酒も入る飲み放題は2,750円追加 (食べログ)・ランチのたらばがにとずわいがにのコース17,050円 (2026年10月)・卵黄とかにみそのたれのかに刺し、テーブルの七輪で焼くかにとふぐ、蒸しがに、かに鍋、焼き白子、締めの雑炊、バニラアイス (2026年の口コミ)・ずわいがにはオホーツク海から (食べログ)。2026年10月には冷凍のかにだったという声が2件',
    neighborhood: '道頓堀2-4-5、道頓堀の西の端で、店の前にふぐの水槽。なんば駅25番出口から徒歩2分',
    gf_detail: '要確認。グルテンの情報なし。かに刺しとふぐ刺しにはたれ、コースにはかにの天ぷらと鍋があり、ひれ酒とかに酒も確認を。',
    vegan_detail: 'ヴィーガンではありません。かにとふぐの専門店で、コースはすべて魚介。',
    notes: '[かに・ふぐ・道頓堀、朝3時までのコース] 道頓堀の西の端のかにとふぐの店で、店の前の水槽にはふぐが泳ぎ、個室は各階に1つ、窓から川の観光船が見える部屋も。なんばにある蟹吉3店のひとつで、主役はコース。ずわいがには12,100円から、かにとふぐの両方で13,750円 (2026年4月)、3大がにのコースまで。印象に残るのは卵黄とかにみそのたれのかに刺しで、店の人がテーブルの七輪でかにとふぐを焼き、最後は雑炊に。2026年10月には冷凍のかにだったという声が2件、かにの天ぷらはいまひとつという人も。全席喫煙可。毎日朝3時まで。',
  });
}

// ================================================================ WA鶏BAR 本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27060128/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.watoribar.com';
  const H = day(['17:00', '03:00']); const SU = day(['17:00', '24:00']);
  put({
    id: 'osaka_wa_tori_bar_honten', name: 'WA鶏BAR 本店 (WA Tori BAR)', category: 'OMNI',
    lat: 34.671385, lng: 135.504147, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The rock-salt grilled chicken is seasoned with salt; the kara-age is fried and the sashimi comes with soy sauce.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken restaurant; even the side dishes include broccoli with cheese fondue.',
    hours_raw: 'Mon–Sat 17:00–3:00 the next morning (last order 2:00); Sun and holidays 17:00–24:00 (last order 23:00); may close early when supplies run out; irregular closing days, ask about Obon, New Year and Golden Week (Tabelog; official site). Reservations accepted; when busy a two-hour limit; if Tabelog shows no seats, try Google or phone (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) and QR payments; no e-money (Tabelog). 30 seats: 9 at the counter on 1F, tables and sofas on 2F for groups up to 20–22; the stairs are steep and the toilet is on 1F (Tabelog; June and October 2026). Smoking allowed (Tabelog; September and October 2026). English menu (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: SU }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 2-5-7, down a back alley — 5–6 min from Shinsaibashi Stn exit 5, 5 min from Nagahoribashi Stn',
    cuisine: 'Creative chicken dishes from fresh Daisen chicken (大山産がいなどり on the shop site) in a hideaway yakitori izakaya (official site; Tabelog) · chicken grilled on a heated rock-salt slab and served off the skewer; chicken sashimi platters with foamed soy sauce; the rare-fried breast kara-age "Mune Pon" with grated daikon and ponzu; bone-in chicken; yodare-dori; harami and seseri (official site; 2026 reviews) · broccoli with cheese fondue, potato salad, chicken-breast jerky, kakiage, oyakodon in half size to finish (2024–2026 reviews) · courses with all-you-can-drink: rock-salt grill course ¥4,400, three-hour course with 150 minutes of drinks ¥5,500 (Tabelog; June 2026) · seasonal sake, shochu such as Maho, wine and fruit liqueurs (official site; October 2026)',
    website: SITE, gmaps: gm('WA鶏BAR 本店 東心斎橋'), menu_url: null,
    notes: "[Yakitori · Higashi-Shinsaibashi, a chicken bar down an alley] A small chicken bar hidden down a Higashi-Shinsaibashi back alley, with nine counter seats downstairs and sofa tables up a steep stair. The chicken is fresh Daisen bird, and the kitchen goes beyond skewers: pieces grilled on a hot rock-salt slab and served off the stick, chicken sashimi with foamed soy sauce, and the house kara-age of breast fried rare, eaten with grated daikon and ponzu. Broccoli with cheese fondue has its own fans, and a half oyakodon makes a good finish. Courses with all-you-can-drink run ¥4,400–5,500. Diners in 2026 praised the friendly staff and the owner's good humour. Smoking is allowed. Open to 3 a.m. except Sundays.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed; September 2026 review) and grill staff'], origin: null, background: 'Official site (watoribar.com): a hideaway yakitori izakaya in a back alley six minutes from Shinsaibashi Station exit 5, using fresh 大山産がいなどり for creative chicken dishes such as sashimi, "Mune Pon" kara-age fried rare to stay tender and juicy, and chicken grilled on heated rock salt; sofa seats on 2F; a second shop in Tenma and a sister restaurant 屋台CHU華 ジャスミン. Shop-maintained Tabelog listing: creative chicken dishes from freshly sourced local chicken, smoking allowed.', philosophy: null, specialty: 'Rock-salt grilled chicken; rare "Mune Pon" kara-age; chicken sashimi.',
      anecdotes: [
        { text: '"Here, the grilled chicken is served on a square rock salt plate, and the seasoning is just right—elegantly balanced." — October 2026.', source: R + 'B537708713/' },
        { text: '"The rare chicken kara-age is truly amazing. There\'s no unpleasant odor, and it has a great texture!" — September 2026.', source: R + 'B502905004/' },
        { text: '"The owner is also a fun person, which made the experience enjoyable." — September 2026.', source: R + 'B535624048/' },
      ],
      japanese_sources_summary: '公式サイト (watoribar.com): 心斎橋駅5番出口から徒歩約6分の路地裏の隠れ家の焼き鳥居酒屋「WA鶏BAR (ワトリバー)」、新鮮な大山産がいなどりの創作鶏料理、お造り、レアに揚げた「ムネポン唐揚げ」、熱した岩塩の上で焼く「岩塩焼き」、季節の日本酒、ワイン、果実酒、2階はソファー席で20人まで、月〜土17時〜翌3時・日祝17時〜24時、不定休、天満店、姉妹店 屋台CHU華 ジャスミン。食べログ (店舗会員): WA鶏BAR 本店、焼き鳥・日本料理・バル、大阪市中央区東心斎橋2-5-7、予約可 (混雑時は2時間制)、カード・QR 可、電子マネー不可、30席 (1階カウンター9席、2階テーブル)、喫煙可、英語のメニューあり、飲み放題つきのコース4,400円と5,500円。口コミ(2024年12月〜2026年10月): 岩塩の板で串なしで出る焼き鳥、レアの唐揚げと大根おろしとポン酢、泡の醤油の鶏刺し、骨つきの鶏、よだれ鶏、ハラミとせせり、ブロッコリーのチーズフォンデュ、ポテトサラダ、むねのジャーキー、かき揚げ、ハーフの親子丼、芋焼酎の Maho、2階への階段は急、スタッフも店主も楽しいという声。',
      confidence: 'high', sources: [TB, SITE, R + 'B473968141/', R + 'B498853083/', R + 'B502905004/', R + 'B529872662/', R + 'B529974308/', R + 'B532757056/', R + 'B534850901/', R + 'B535624048/', R + 'B537708713/', R + 'B538279466/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu listed (Tabelog); counter seating with chatty staff (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋2-5-7',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and official site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋二丁目5番7号 (go) 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B529974308/'],
    price_note: 'Course prices from the Tabelog listing and a June 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Rock-salt grill course with all-you-can-drink (10 dishes)', '¥4,400', 'Courses', 'ask', 'no', 'Tabelog listing.', 'ganen_course'),
      it('', '', 'Three-hour course with 150 minutes of drinks', '¥5,500', 'Courses', 'ask', 'no', 'Tabelog; June 2026 review.', 'course_5500'),
      it('', '', '"Mune Pon" rare breast kara-age with grated daikon and ponzu', '', 'Dishes', 'no', 'no', 'Official site; 2026 reviews.', 'mune_pon_karaage'),
      it('', '', 'Rock-salt grilled chicken', '', 'Grill', 'ask', 'no', 'Official site; October 2026.', 'ganen_yaki'),
    ] }, {
    cuisine: '隠れ家の焼き鳥居酒屋で、新鮮な大山産がいなどりの創作の鶏料理 (公式サイト、食べログ)・熱した岩塩の板で焼いて串なしで出す鶏、泡の醤油の鶏刺しの盛り合わせ、むねをレアに揚げた「ムネポン唐揚げ」と大根おろしとポン酢、骨つきの鶏、よだれ鶏、ハラミとせせり (公式サイト、2026年の口コミ)・ブロッコリーのチーズフォンデュ、ポテトサラダ、むねのジャーキー、かき揚げ、締めにハーフの親子丼 (2024〜2026年の口コミ)・飲み放題つきのコース: 岩塩焼きのコース4,400円、3時間で150分飲み放題のコース5,500円 (食べログ、2026年6月)・季節の日本酒、Maho などの焼酎、ワイン、果実酒 (公式サイト、2026年10月)',
    neighborhood: '東心斎橋2-5-7、路地裏。心斎橋駅5番出口から5〜6分、長堀橋駅から5分',
    gf_detail: '要確認。グルテンの情報なし。岩塩焼きは塩の味つけ、唐揚げは揚げ物で、鶏刺しには醤油。',
    vegan_detail: 'ヴィーガンではありません。鶏料理の店で、副菜もブロッコリーのチーズフォンデュなど。',
    notes: '[焼き鳥・東心斎橋、路地裏の鶏のバー] 東心斎橋の路地裏に隠れた小さな鶏のバーで、1階はカウンター9席、急な階段の上の2階にソファーのテーブル。鶏は新鮮な大山産がいなどりで、串だけではない。熱した岩塩の板で焼いて串から外して出す鶏、泡の醤油の鶏刺し、むねをレアに揚げて大根おろしとポン酢で食べる名物の唐揚げ。ブロッコリーのチーズフォンデュにもファンがいて、締めはハーフの親子丼がちょうどいい。飲み放題つきのコースは4,400〜5,500円。2026年の口コミではスタッフの人柄と店主の楽しさをほめる声。喫煙可。日曜以外は朝3時まで。',
  });
}

// ================================================================ 芙蓉苑
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27089496/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '15:00'], ['17:00', '23:00']);
  put({
    id: 'osaka_fuyoen_nagahoribashi', name: '芙蓉苑 (Fuyo En)', category: 'OMNI',
    lat: 34.674855, lng: 135.50662, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Sichuan sauces and the noodle and dumpling dishes are the things to ask about; lunch sets come with kara-age.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No vegan information. Mapo tofu is made with meat; stir-fried garlic and vegetables, stir-fried green beans and potatoes are the vegetable dishes reviewers name.',
    hours_raw: 'Daily 11:00–15:00 (last order 14:30) and 17:00–23:00 (last order 22:30); 1F seating until 22:00, 2F until 22:30; table bookings limited to 2 hours (Tabelog). Reservations accepted; for hot pot book the sister 芙蓉苑 火鍋城 (Tabelog). One-drink policy (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), transport IC cards and other e-money, and QR payments (Tabelog). 42 seats: 8 at the counter, 24 at tables, a 2F VIP room for 10 (2 hours free with a ¥30,000 minimum, ¥500 table charge per person) (Tabelog). Non-smoking (Tabelog). Order by QR code at the table (April and July 2026). Opened 29 December 2015 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shimanouchi 1-18-8, ground floor beside Nagahoribashi Stn exit 3',
    cuisine: 'Sichuan restaurant that brings in chefs and ingredients from the source (Tabelog) · mapo tofu set ¥1,000 with rice refills, two pieces of kara-age, soup and almond tofu, spice level to choose (February, April and July 2026) · stone-grilled mapo tofu finished at the table ¥1,300, twice-cooked pork ¥1,600, shark-fin soup ¥1,200, beef with green peppers ¥1,100, salted stir-fried green beans ¥1,380 (December 2025) · spicy beef noodle soup with garlic chives, coriander and egg yolk ¥1,300 (May 2026); chicken with peanuts and chilli, saliva chicken, dan dan noodles, cumin lamb, stewed beef, dried-tofu salad, stir-fried potatoes, stir-fried garlic and vegetables, candied sweet potato; a soup of blood and offal (2026 reviews) · Shaoxing wine (December 2025)',
    website: null, gmaps: gm('芙蓉苑 長堀橋'), menu_url: null,
    notes: "[Sichuan · Nagahoribashi, mapo tofu by the station exit] A Sichuan restaurant right beside Nagahoribashi Station exit 3, with chefs and ingredients brought from the source (Tabelog) and Chinese staff, some speaking a little Japanese. Lunch is the bargain: a mapo tofu set with rice refills, kara-age and almond tofu was ¥1,000 in 2026, spice level your choice, ordered by QR code; at noon it was packed in December 2025 and quiet in July 2026. At dinner, try the stone-grilled mapo tofu finished at the table, twice-cooked pork, cumin lamb or saliva chicken, with Shaoxing wine. A regular notes that taste and portions shift when the chef changes, and that rice bowls had shrunk by April 2026. For hot pot, the sister Fuyo En Hot Pot Castle is the place. Open daily.",
    chef_bio: { chef_name: null, roles: ['Sichuan chefs (unnamed; Tabelog)'], origin: null, background: 'Shop-maintained Tabelog listing: authentic Sichuan cuisine with chefs and ingredients gathered from the source, a minute from Nagahoribashi Station beside exit 3; opened 29 December 2015; hot pot at the sister shop 芙蓉苑 火鍋城 (Tabelog 27102144). Reviews in 2025–2026 describe Chinese staff, some speaking broken Japanese.', philosophy: null, specialty: 'Mapo tofu; Sichuan set lunches.',
      anecdotes: [
        { text: '"The staff prepared it in front of us, just like stone-grilled bibimbap" — December 2025, the stone-grilled mapo tofu ¥1,300.', source: R + 'B518974256/' },
        { text: '"I ordered the Mapo Tofu Set Meal (JPY 1000). Credit card payments are accepted!" — April 2026.', source: R + 'B525793722/' },
        { text: '"Sometimes the chef changes, which can lead to variations in taste and portion sizes, but I accept that as part of the experience." — April 2026.', source: R + 'B523154907/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 芙蓉苑、四川料理・中華料理・鍋、大阪市中央区島之内1-18-8 ビルドアップ長堀橋ビル 1F、長堀橋駅3番出口のすぐ横、毎日11:00〜15:00 (L.O.14:30)・17:00〜23:00 (L.O.22:30)、1階は22時まで・2階は22時半まで、テーブルの予約は2時間、予約可、火鍋は姉妹店の芙蓉苑 火鍋城へ、ワンドリンク制、カード・電子マネー・QR 可、42席 (カウンター8、テーブル24、2階の個室10)、禁煙、2015年12月29日オープン、本場から料理人と食材を集めた四川料理。口コミ(2025年12月〜2026年8月): 麻婆豆腐の定食1,000円 (ご飯おかわり、唐揚げ2個、スープ、杏仁豆腐、辛さを選べる)、石焼き麻婆豆腐1,300円、回鍋肉1,600円、ふかひれスープ1,200円、牛肉とピーマンの炒めもの1,100円、いんげんの塩炒め1,380円、牛肉麺1,300円、ピーナッツと唐辛子の鶏の炒めもの、よだれ鶏、担々麺、羊のクミン炒め、干し豆腐のサラダ、じゃがいもの炒めもの、大学いも、血と内臓のスープ、紹興酒、QR コードで注文、スタッフは中国の人、料理人が変わると味や量が変わるという声、ご飯の量が半分ほどになったという声。',
      confidence: 'medium', sources: [TB, R + 'B177644477/', R + 'B278510170/', R + 'B491964296/', R + 'B518557403/', R + 'B518974256/', R + 'B523154907/', R + 'B525793722/', R + 'B528454376/', R + 'B532716095/', R + 'B534924976/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'QR-code ordering at the table; Chinese staff, some speaking a little Japanese (2025–2026). No English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区島之内1-18-8 ビルドアップ長堀橋ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区島之内一丁目18番8号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B525793722/', R + 'B518974256/', R + 'B528454376/'],
    price_note: 'Prices from December 2025 to May 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Mapo tofu set lunch (rice, kara-age, soup, almond tofu)', '¥1,000', 'Lunch', 'ask', 'no', 'April 2026 review.', 'mapo_teishoku'),
      it('', '', 'Stone-grilled mapo tofu', '¥1,300', 'Dishes', 'ask', 'ask', 'December 2025 review.', 'ishiyaki_mapo'),
      it('', '', 'Twice-cooked pork', '¥1,600', 'Dishes', 'ask', 'no', 'December 2025 review.', 'hoikoro'),
      it('', '', 'Spicy beef noodle soup', '¥1,300', 'Noodles', 'no', 'no', 'May 2026 review.', 'gyuniku_men'),
    ] }, {
    cuisine: '本場から料理人と食材を集めた四川料理 (食べログ)・麻婆豆腐の定食1,000円、ご飯のおかわり、唐揚げ2個、スープ、杏仁豆腐つき、辛さを選べる (2026年2月、4月、7月)・テーブルで仕上げる石焼き麻婆豆腐1,300円、回鍋肉1,600円、ふかひれスープ1,200円、牛肉とピーマンの炒めもの1,100円、いんげんの塩炒め1,380円 (2025年12月)・にら、パクチー、卵黄の辛い牛肉麺1,300円 (2026年5月)。ピーナッツと唐辛子の鶏の炒めもの、よだれ鶏、担々麺、羊のクミン炒め、牛肉の煮込み、干し豆腐のサラダ、じゃがいもの炒めもの、にんにくと野菜の炒めもの、大学いも、血と内臓のスープ (2026年の口コミ)・紹興酒 (2025年12月)',
    neighborhood: '島之内1-18-8、長堀橋駅3番出口のすぐ横のビルの1階',
    gf_detail: '要確認。グルテンの情報なし。四川のたれ、麺や点心の料理は確認を。ランチの定食には唐揚げがつく。',
    vegan_detail: '要確認。ヴィーガンの情報なし。麻婆豆腐には肉を使う。口コミに出る野菜の料理はにんにくと野菜の炒めもの、いんげんの塩炒め、じゃがいもの炒めもの。',
    notes: '[四川料理・長堀橋、駅の出口の横の麻婆豆腐] 長堀橋駅3番出口のすぐ横の四川料理の店で、料理人と食材は本場から (食べログ)、スタッフは中国の人で、少し日本語を話す人も。お得なのはランチで、2026年はご飯のおかわり、唐揚げ、杏仁豆腐つきの麻婆豆腐の定食が1,000円、辛さは選べて、注文は QR コードで。昼は2025年12月には満席、2026年7月には空いていたそう。夜はテーブルで仕上げる石焼き麻婆豆腐、回鍋肉、羊のクミン炒め、よだれ鶏を紹興酒と。料理人が変わると味や量が変わり、2026年4月にはご飯の量が減っていたという常連の声も。火鍋なら姉妹店の芙蓉苑 火鍋城へ。毎日営業。',
  });
}

save();
