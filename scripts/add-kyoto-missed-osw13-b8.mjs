// Kyoto "what did we miss" pass (kyoto-missed, notable phase) — lane osw13, batch 8.
//   + 室町 和久傳 Muromachi Wakuden (counter ryotei of the Wakuden house, founded 1870; Sakaimachi near Oike; shojin course on request)
//   + 京 静華 Kyo Seika (Chinese of Shizuo Miyamoto near Heian Shrine; reopened September 2026 after a break)
//   + 菊乃井 本店 Kikunoi Honten (Higashiyama ryotei of Yoshihiro Murata; three Michelin stars 2024–2026 per its site)
//   + ぎおん 阪川 Gion Sakagawa (Gion kappo of Hirokazu Sakagawa with à la carte as well as courses)
//   The first four entries of `queue.mjs kyoto-missed next notable 80` on 2026-11-01. None is in data/kyoto.json: grep by name
//   (和久傳/Wakuden, 静華/Seika — only kyr_seikatei 盛華亭, a different shop, matches — 菊乃井/Kikunoi, 阪川/Sakagawa) and by
//   address (丸木材木町679, 円勝寺町36-3, 下河原町459, 570-199) found nothing. Nearest records: kyo_senza_x "Senza X kyoto"
//   13 m from Kyo Seika (its pin_source gives 円勝寺町36番地; its notes report it closed indefinitely in August 2026), and
//   kyoto_yamaguchi_gion 19 m from Sakagawa (address_ja 祇園町南側570-185, not 570-199). Chain check: Wakuden and Kikunoi are
//   long-established houses with a few sister restaurants and shops each (official sites), not fast-growing chains; none of
//   their other restaurants is in data. Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-8');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 室町 和久傳
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26000621/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.wakuden.jp/ryotei/muromachi/';
  const LD = day(['12:00', '15:00'], ['18:00', '21:00']); const D = day(['18:00', '21:00']);
  put({
    id: 'kyoto_muromachi_wakuden', name: '室町和久傳 (Muromachi Wakuden)', category: 'OMNI',
    lat: 35.01017, lng: 135.763292, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information; a kaiseki course seasoned with soy sauce and miso, with fried dishes and sushi among the closing rices (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask: the official site lists a shojin (Buddhist vegetarian) course at ¥25,000, bookable up to three days ahead, and Tabelog marks vegetarian options; whether it uses any animal-based dashi or egg is not stated. The regular courses use fish, eel, turtle and beef.',
    hours_raw: 'Lunch Mon, Fri, Sat, Sun 12:00–15:00 (last seating 13:00); dinner 18:00–21:00 (Tabelog: last seating 19:00, to 22:00); closed Wednesday; also closed 5 November and 25–30 December 2026 (official site; Tabelog). Reservation requested, online or by phone (official site). Cancellation the day before or on the day: 80% (official site). 50 seats: a counter of 15 and four private rooms for 4–20 (Tabelog). Counter from junior-high age; children of any age in the private rooms, with a kids\' menu and strollers welcome (Tabelog). English menu (Tabelog). Wheelchair accessible; non-smoking (Tabelog). Cards accepted; prices include tax and service (official site). 5 min east of Karasuma Oike Stn exit 3-1 (official site).',
    hours: { 0: LD, 1: D, 3: D, 4: LD, 5: LD, 6: LD }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sakaimachi-dori below Oike, in a renovated machiya with a garden — 5 min from Karasuma Oike Stn',
    cuisine: 'Kyoto ryotei cooking at a counter that surrounds the chefs, from a house that began as an inn in Tango in 1870 (Tabelog) · lunch ¥13,000 / ¥25,000 / ¥35,000; dinner ¥25,000 / ¥35,000; sake pairing courses lunch ¥23,000, dinner ¥37,000 or ¥50,000; crab course about ¥70,000 (November–March); shojin course ¥25,000 (book three days ahead); all including tax and service (official site) · autumn 2026: a chrysanthemum dish of crab, sea urchin and caviar in jelly for the Choyo festival; fried ayu with chestnuts; seared bonito with dill; a Matsutake dobin-mushi with eel; narai-yaki — eel wrapped around Matsutake, a house dish of some fifty years; turtle and mushroom hot pot; Kyoto beef fillet; a choice of three closing rices (turtle zosui, saba sushi, beef sukiyaki on rice), with leftovers made into onigiri to take home; Uji matcha (September–October 2026) · sake pairings',
    website: SITE, gmaps: gm('室町和久傳'), menu_url: SITE,
    notes: "[Kaiseki · Sakaimachi-Oike, a ryotei house's counter] The town branch of Wakuden, a Kyoto ryotei family that began as an inn in Tango in 1870: a renovated machiya with a garden, a counter of fifteen around a crew of young cooks, and private rooms for families. Courses follow the season — in autumn a chrysanthemum dish for the Choyo festival, Matsutake in a teapot soup, and narai-yaki, eel wrapped around Matsutake, a house dish for half a century — and end with a choice of clay-pot rices, the rest wrapped as onigiri for later. A shojin course is available if you book three days ahead. About half the guests one September 2026 night were from overseas, with explanations in English. Some 2026 diners found it salty or routine. Lunch from ¥13,000 all in; closed Wednesdays.",
    chef_bio: { chef_name: null, roles: ['Run by Wakuden Inc. (official site\'s copyright: "wakuden Inc.")'], origin: null,
      background: 'Per Tabelog: the Wakuden house was established in 1870 as a ryokan in Tango; the Muromachi restaurant is a Kyoto townhouse built by Nakamura Sotoku Construction (as Tabelog\'s English gives it), with a counter designed so every seat watches the chefs. The official site lists the group\'s other ryotei (Kodaiji Wakuden, Kyoto Wakuden), soba and other restaurants, and gift shops in Kyoto, Tokyo and Nagoya. An October 2026 reviewer calls the house a training ground for chefs such as those of Tokuwo and Kiyama (kyoto_kiyama_gosho in this data). Tabelog Award Bronze 2017–2022, 2025, 2026; Japanese cuisine WEST "Tabelog 100" 2021, 2023, 2025.',
      philosophy: 'Serve the true flavours of each season, nurtured by nature, with sincerity (Tabelog).', specialty: 'Narai-yaki of eel and Matsutake; clay-pot rice; seasonal kaiseki at the counter.',
      anecdotes: [
        { text: '"Almost half of the guests were from overseas, and the staff provided explanations in English." — September 2026.', source: R + 'B535106960/' },
        { text: '"Their signature rice was wonderfully sticky, and they even made the leftovers into onigiri for me to take home." — September 2026.', source: R + 'B536540136/' },
        { text: '"There were many dishes that were overly salty." — October 2026.', source: R + 'B537711225/' },
      ],
      japanese_sources_summary: '公式サイト (wakuden.jp): 室町和久傳、京都市中京区堺町通り御池下ル東側、昼12時〜15時 (月・金・土・日のみ)、13,000円・25,000円・35,000円、夜18時〜21時 25,000円・35,000円、日本酒ペアリングコース (昼23,000円、夜37,000円・50,000円)、蟹のコース70,000円前後 (11月〜3月)、精進25,000円 (3日前までの予約)、水曜定休、11月5日と12月25日〜30日は休み、料金は税・サービス料込み、前日・当日キャンセルは80%、クレジットカード可、烏丸御池駅3-1出口から東へ徒歩5分。和久傳のほかの店: 高台寺和久傳、京都和久傳、蕎麦と料理の店、おもたせの店。食べログ (店舗会員): 1870年に Tango の旅館として創業、町家、カウンター15席と個室4室、カウンターは中学生以上、子どもは個室で、英語メニュー、ベジタリアンメニューあり、The Tabelog Award Bronze、日本料理 WEST 百名店 2021・2023・2025。口コミ (2026年9〜10月、英語): Matsutake の dobin-mushi、鰻で Matsutake を巻いた narai 焼き、締めのご飯が3種類、残りはおにぎりに、海外の客が多く英語で説明、塩気が強いという声も。',
      confidence: 'medium', sources: [TB, SITE, R + 'B535106960/', R + 'B535847944/', R + 'B536497148/', R + 'B536540136/', R + 'B536769584/', R + 'B537281025/', R + 'B537711225/', R + 'B537896279/', R + 'B538020324/', R + 'B538359759/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog) and English explanations for overseas guests (September 2026); book online.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区堺町姉小路上ル丸木材木町679',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and official site (November and December 2026 closing days posted); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.010170, 135.763292); cross-checked: GSI 京都府京都市中京区丸木材木町679番地 (lot) 21m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE],
    price_note: 'Prices from the official site (tax and service included; read November 2026).', last_checked: TODAY, items: [
      it('', '', 'Lunch course (Mon, Fri–Sun)', '¥13,000', 'Course', 'ask', 'no', 'Official site; also ¥25,000 and ¥35,000.', 'lunch'),
      it('', '', 'Dinner course', '¥25,000', 'Course', 'ask', 'no', 'Official site; also ¥35,000.', 'dinner'),
      it('精進', '', 'Shojin (Buddhist vegetarian) course, book 3 days ahead', '¥25,000', 'Course', 'ask', 'ask', 'Official site.', 'shojin'),
      it('蟹のコース', '', 'Crab course (November–March)', '¥70,000', 'Course', 'ask', 'no', 'Official site, approximate.', 'crab'),
    ] }, {
    cuisine: '料理人を囲むカウンターでいただく京都の料亭の料理。1870年に Tango の旅館として始まった家 (食べログ)・昼13,000円・25,000円・35,000円、夜25,000円・35,000円、日本酒ペアリングコース 昼23,000円・夜37,000円・50,000円、蟹のコース70,000円前後 (11月〜3月)、精進25,000円 (3日前までの予約)、いずれも税・サービス料込み (公式サイト)・2026年秋: Choyo の節句にちなんだ菊と蟹と雲丹とキャビアのジュレ、ayu と栗の揚げ物、ディルを添えた鰹のたたき、Matsutake と鰻の dobin-mushi、鰻で Matsutake を巻いた50年来の名物の narai 焼き、すっぽんときのこの鍋、京都の牛フィレ、3種類から選ぶ締めのご飯 (すっぽんの zosui、saba 寿司、牛のすき焼き丼)、残りはおにぎりにして持ち帰り、Uji の抹茶 (2026年9〜10月)・日本酒のペアリング',
    neighborhood: '堺町通御池下ル、庭のある町家を改装した店。烏丸御池駅から徒歩5分',
    gf_detail: '予約時に要確認。グルテンの情報なし。醤油や味噌で味付けする懐石で、揚げ物や、締めのご飯に寿司もある (2026年の口コミ)。',
    vegan_detail: '要確認。公式サイトには3日前までの予約で精進のコース (25,000円) があり、食べログもベジタリアンメニューありとしている。動物性の出汁や卵を使うかどうかは書かれていない。通常のコースは魚、鰻、すっぽん、牛肉を使う。',
    notes: '[懐石・堺町御池、料亭の家のカウンター] 1870年に Tango の旅館として始まった京都の料亭、和久傳の町なかの店。庭のある町家を改装し、若い料理人たちを囲む15席のカウンターと、家族で使える個室。コースは季節に沿い、秋は Choyo の節句の菊の一皿、Matsutake の dobin-mushi、半世紀続く名物の narai 焼き (鰻で Matsutake を巻く) と続き、最後は土鍋ご飯を選び、残りはおにぎりに。3日前までに予約すれば精進のコースも。2026年9月のある夜は客の半分ほどが海外からで、英語で説明していた。塩気が強い、型通りと感じた人もいる。昼13,000円から (税・サ込み)、水曜休み。',
  });
}

// ================================================================ 京 静華
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26006497/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://kyoseika.com/';
  const H = day(['18:00', '21:00']);
  put({
    id: 'kyoto_kyo_seika_okazaki', name: '京 静華 (Kyo Seika)', category: 'MOM_AND_POP',
    lat: 35.011717, lng: 135.780689, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking by phone. No gluten information; the course includes spring rolls, steamed buns, noodles and Sichuan-style sauces (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a Chinese course of shark fin, abalone, sea cucumber, crab, char siu and wagyu (2025–2026 reviews).',
    hours_raw: 'Dinner only, everyone starting at 18:00; closed Monday and Tuesday and irregularly — check the calendar on the official site (official site; Tabelog). The restaurant closed from 1 May 2026 for maintenance and training and reopened in September 2026 (official site). Bookings by phone only, up to the end of the month two months ahead, 11:00–16:00 on business days; not by Instagram or Facebook messages (official site). Cancellation: 100% on the day, 50% the day before; no children below junior-high age except for whole-room bookings (official site). 16 seats: a round table for 10 and two tables for 3 (Tabelog). Non-smoking (Tabelog). Cards accepted; service charge 10% (Tabelog). The site warns of fake websites using its name. About 5 min from Higashiyama Stn (Tabelog). Opened 20 April 2008 (Tabelog).',
    hours: { 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Okazaki, second floor near Heian Shrine and the Biwako Sosui canal — about 5 min from Higashiyama Stn (Tozai Line)',
    cuisine: 'Delicate Chinese cooking that recreates methods from classical Chinese texts, with Kyoto morning-market vegetables (Tabelog) · seasonal course ¥25,000 (¥27,500 including tax), plus 10% service; special menus for whole-room bookings of up to 6 (official site; Tabelog) · the spring roll with a spicy sorbet opens most meals, with seasonal fillings: young ayu, firefly squid and caciocavallo (April 2026); scallop, truffle and caciocavallo (December 2025); butterbur and firefly squid (March 2026) · October 2025: a soup of shark fin, abalone, Matsutake and sea cucumber; char siu with figs; wagyu; crab sticky rice, meat buns and mushroom noodles from the steamer · December 2025: soft roe with a Sichuan sauce; a lotus-root cake · October 2026: Doman crab, black abalone, Densuke eel; congee · wine pairings with Burgundy and champagne; Shaoxing wine',
    website: SITE, gmaps: gm('京 静華 岡崎'), menu_url: SITE,
    notes: "[Chinese · Okazaki, a master's quiet Chinese table near Heian Shrine] A second-floor room by the Biwako Sosui canal, one round table and two small ones, everyone starting at 18:00. Owner-chef Shizuo Miyamoto ran Seika in Hamamatsu for 25 years from 1983, trained in Hong Kong, Taiwan and Beijing, studied again in Beijing in middle age, and opened here in 2008; dishes recreate techniques from classical Chinese texts with Kyoto vegetables. Every meal starts with a crisp spring roll and a spicy sorbet, and the course runs through shark fin and abalone soups, char siu and steamer baskets of crab rice and buns. After two apprentices left to open their own places, the restaurant closed from May 2026 and reopened in September with the chef cooking alone. ¥27,500 including tax, plus service; book by phone. Tabelog Bronze in most years since 2017.",
    chef_bio: { chef_name: 'Shizuo Miyamoto (an October 2025 review; Tabelog: "The chef, Mr. Miyamoto"; no kanji in a source)', roles: ['Owner-chef (October 2025 review: "The owner, Mr. Shizuo Miyamoto"; October 2026: "Chef Miyamoto is now running the kitchen solo")'], origin: 'Hamamatsu, Shizuoka Prefecture (October 2025 review).',
      background: 'Per an October 2025 review: from Hamamatsu; opened Seika in Hamamatsu in 1983 and ran it 25 years while training in Hong Kong, Taiwan and Beijing; closed it in the mid-fifties, studied in Beijing, and opened Kyo Seika in Okazaki in 2008; renovated in 2019; one Michelin star in the 2021 Kyoto guide. Tabelog: the chef recreates cooking methods from ancient Chinese texts. Reviewers in 2026 heard that two apprentices were going independent (April) and found the chef cooking alone after the reopening (October). A March 2026 diner writes of "Monsieur and Madame" welcoming guests; the relationship is not stated. Tabelog Award Bronze 2017–2019, 2021, 2023, 2025, 2026; Chinese WEST "Tabelog 100" 2021, 2023, 2024, 2026.',
      philosophy: null, specialty: 'Spring rolls with spicy sorbet; classical Chinese techniques; char siu.',
      anecdotes: [
        { text: '"Chef Miyamoto is now running the kitchen solo, and the dishes are more wonderful than ever." — October 2026, first visit after the renovation.', source: R + 'B300772761/' },
        { text: '"The friendly and kind chef shares interesting stories about the dishes, providing plenty of learning opportunities." — April 2026.', source: R + 'B503897218/' },
        { text: '"Course: JPY 22,000 … Total: JPY 31,097" — December 2025, with five soft drinks.', source: R + 'B519904129/' },
      ],
      japanese_sources_summary: '公式サイト (kyoseika.com): 京、静華、左京区岡崎円勝寺町36-3 2階、毎週月曜・火曜と不定休 (カレンダーで確認)、18:00一斉スタート、季節のお料理25,000円 (税込27,500円)、貸し切り (最大6名) で特別料理、予約は電話で2か月先の月末まで (営業日の11:00〜16:00)、当日キャンセル100%・前日50%、中学生未満は不可 (貸切時のみ可)、Instagram や Facebook の DM での予約不可、2026年5月1日からしばらく店舗メンテナンスと研修のため休業、9月から営業再開、公式を騙る Web サイトに注意。食べログ: 中国料理、16席 (円卓10、テーブル3×2)、カード可、サービス料10%、2008年4月20日オープン、The Tabelog Award Bronze、中国料理 WEST 百名店 2021・2023・2024・2026。口コミ (2025年10月〜2026年10月、英語): 春巻きと辛いシャーベット、ふかひれと鮑のスープ、チャーシュー、店主は Hamamatsu 出身、再開後はシェフ一人で。',
      confidence: 'medium', sources: [TB, SITE, R + 'B300772761/', R + 'B497039467/', R + 'B503897218/', R + 'B505275632/', R + 'B515060944/', R + 'B517817550/', R + 'B518664892/', R + 'B519073212/', R + 'B519904129/', R + 'B523922099/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Bookings by phone only (11:00–16:00 on business days); one set course at a shared start.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市左京区岡崎円勝寺町36-3 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (reopened September 2026) and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.011717, 135.780689); cross-checked: GSI 京都府京都市左京区岡崎円勝寺町36番地 (lot) 70m; kyo_senza_x (pin_source: 円勝寺町36番地, reported closed) is 13m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE, R + 'B519904129/'],
    price_note: 'Course price from the official site (read November 2026): ¥25,000 before tax, ¥27,500 with tax, plus 10% service (Tabelog). Dishes from 2025–2026 reviews.', last_checked: TODAY, items: [
      it('季節のお料理', '', 'Seasonal course', '¥27,500', 'Course', 'ask', 'no', 'Official site, tax included; +10% service.', 'course'),
      it('', '', 'Spring roll with spicy sorbet (in course)', '', 'Course', 'no', 'ask', '2025–2026 reviews.', 'spring_roll'),
      it('', '', 'Char siu (in course)', '', 'Course', 'ask', 'no', '2025–2026 reviews.', 'char_siu'),
    ] }, {
    cuisine: '古い漢籍の調理法を再現し、京都の朝採れ野菜を使う繊細な中国料理 (食べログ)・季節のお料理25,000円 (税込27,500円)、別途サービス料10%。貸し切り (最大6名) で特別料理 (公式サイト、食べログ)・ほとんどの食事が辛いシャーベットを添えた春巻きで始まり、具は季節で変わる: 若い ayu とホタルイカとカチョカヴァッロ (2026年4月)、帆立とトリュフとカチョカヴァッロ (2025年12月)、ふきのとうとホタルイカ (2026年3月)・2025年10月: ふかひれ、鮑、Matsutake、なまこのスープ、いちじくを添えたチャーシュー、和牛、蒸籠の蟹のもち米、肉まん、きのこの麺・2025年12月: 白子と四川風のソース、蓮根の餅・2026年10月: Doman の蟹、黒鮑、Densuke の穴子、粥・ブルゴーニュやシャンパーニュのワインペアリング、紹興酒',
    neighborhood: '岡崎、Heian Shrine と Biwako Sosui の近くの2階。地下鉄東西線東山駅から徒歩約5分',
    gf_detail: '電話で予約するときに要確認。グルテンの情報なし。春巻き、肉まん、麺、四川風のソースがあるコース (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではありません。ふかひれ、鮑、なまこ、蟹、チャーシュー、和牛を使う中国料理のコース (2025〜2026年の口コミ)。',
    notes: '[中国料理・岡崎、Heian Shrine 近くの名料理人の静かな食卓] Biwako Sosui 沿いのビル2階、円卓ひとつと小さなテーブル2つ、18時に一斉スタート。店主の Shizuo Miyamoto さんは1983年から25年 Hamamatsu で Seika を営みながら Hong Kong、Taiwan、Beijing で修業し、50代で Beijing でも学び直して2008年にここを開いた。料理は古い漢籍の技法を京都の野菜で再現する。必ず春巻きと辛いシャーベットで始まり、ふかひれや鮑のスープ、チャーシュー、蒸籠の蟹のもち米や肉まんへと続く。弟子二人が独立したのを機に2026年5月から休業し、9月にシェフ一人で再開した。税込27,500円にサービス料、予約は電話で。The Tabelog Award Bronze を2017年から多くの年で受賞。',
  });
}

// ================================================================ 菊乃井 本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26001346/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://kikunoi.jp/'; const REST = SITE + 'restaurant/';
  const H = day(['12:00', '14:00'], ['17:00', '20:00']);
  put({
    id: 'kyoto_kikunoi_honten', name: '菊乃井 本店 (Kikunoi Honten)', category: 'OMNI',
    lat: 35.001483, lng: 135.782065, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information; a kaiseki course seasoned with soy sauce and miso, with sushi and egg-yolk soy sauce among 2026 dishes.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a kaiseki built on dashi, with hamo, ayu, tuna and beef (2026 reviews); no vegetarian course is listed.',
    hours_raw: 'Lunch entry 12:00–12:30, dinner entry 17:00–19:30; closed the first and third Tuesday (may change by month) and over the New Year (official site; Tabelog lists 12:00–14:00 and 17:00–20:00 daily). Bookings by phone 10:00–22:00 (official site); a 2026 diner booked two months ahead, another found it easy. 120 seats in 10 tatami rooms, for 4 to over 30 (Tabelog). Designated smoking area; parking available (Tabelog). Cards (VISA, JCB, AMEX); service charge 15% (official site; Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashiyama, beside Kodai-ji (Tabelog), up the slope past Maruyama Park (October 2026 review) — about 920 m from Higashiyama Stn (Tabelog)',
    cuisine: 'Kyoto kaiseki in a ryotei founded in the first year of Taisho, cooked with the house well water "Kikusui no I" (Tabelog) · lunch ¥16,500 / ¥22,000 (shorter courses) / ¥33,000 / ¥55,000 / ¥77,000 / ¥110,000; dinner ¥33,000 / ¥55,000 / ¥77,000 / ¥110,000, with a shorter ¥22,000 course; prices include tax, plus 15% service (official site) · a new menu each month (September 2026 review) · September 2026: a lunch hassun of barracuda pressed sushi, ayu with uruka, ginkgo and matcha somen; a chrysanthemum bowl; hamo shabu-shabu; tuna sashimi with egg-yolk soy sauce · October 2026: a dobin-mushi of Matsutake and large hamo; ayu with roe shown live before grilling; beef with a miso sauce; persimmon and lotus-root namasu; saba sushi with saffron rice · sake and wine',
    website: REST, gmaps: gm('菊乃井本店'), menu_url: REST,
    notes: "[Kaiseki · Higashiyama, a century-old ryotei by Kodai-ji] Up the slope past Maruyama Park, beside Kodai-ji, a ryotei founded in the first year of the Taisho era by a family that kept the spring \"Kikusui no I\" once used for Nene's tea. Third-generation owner Yoshihiro Murata, born in 1951, trained in France and Nagoya before taking up the family craft, and has led the push to have washoku listed by UNESCO. Meals are served in ten tatami rooms over the garden, some hung with works such as Ito Jakuchu screens, with a new seasonal menu every month: Matsutake and hamo in a teapot soup, ayu shown alive before grilling, tuna with egg-yolk soy sauce. The site reports three Michelin stars in 2024, 2025 and 2026. Lunch from ¥16,500 plus 15% service is the gentle way in.",
    chef_bio: { chef_name: 'Yoshihiro Murata (Tabelog; no kanji in a source read)', roles: ['Third-generation owner (Tabelog)'], origin: 'Kyoto, born 1951 (Tabelog: "born as the eldest son of … Kikunoi in Gion").',
      background: 'Per Tabelog: born in 1951 as the eldest son of Kikunoi; while at Ritsumeikan University went to France to learn French cooking but chose Japanese cuisine; trained at a Nagoya restaurant and opened Kikunoi Kiyamachi in 1976; vice-president of the Japan Food Culture National Council in the campaign for washoku\'s UNESCO listing and chairman of the Japanese Culinary Academy; awarded the Medal with Yellow Ribbon. The family were tea masters who kept the spring Kikusui no I, used by Nene (Kita no Mandokoro) for tea; the ryotei was founded in the first year of Taisho (Tabelog). The official site lists the house\'s other restaurants (露庵, 赤坂菊乃井, 無碍山房) and three Michelin stars in the Kyoto-Osaka guides 2024, 2025 and 2026. A September 2026 diner was greeted by the owner. Tabelog Award Bronze 2018, 2019, 2021–2026; Japanese cuisine WEST "Tabelog 100" 2021, 2023, 2025.',
      philosophy: 'Cooking with water: vegetables simmered in dashi to carry flavour, and the spirit of the tea ceremony (Tabelog).', specialty: 'Seasonal Kyoto kaiseki; dashi; the hassun.',
      anecdotes: [
        { text: '"We were greeted by the stunning two-panel folding screen and hanging scroll by the genius Edo-period painter Ito Jakuchu." — September 2026, a family celebration.', source: R + 'B502848590/' },
        { text: '"It\'s not difficult to make a reservation, making it a reliable choice for important business meals." — September 2026.', source: R + 'B535314264/' },
        { text: '"They showed us the fish before grilling, and it was so fresh it almost jumped out of the basket!" — October 2026, a sixth visit.', source: R + 'B496671648/' },
      ],
      japanese_sources_summary: '公式サイト (kikunoi.jp): 菊乃井本店、昼懐石16,500円・22,000円 (品数の少ないお手軽なコース)・33,000円・55,000円・77,000円・110,000円、夜懐石33,000円・55,000円・77,000円・110,000円 (お手軽な22,000円のコースも)、税込・サービス料15%別、受付時間10:00〜22:00、昼は12:00〜12:30まで、夜は17:00〜19:30までの入店、第一・第三火曜日定休 (年末年始休み、月により変更あり)、ミシュランガイド京都・大阪2024・2025・2026で3つ星、ほかに露庵、赤坂菊乃井、無碍山房。食べログ (店舗会員): 東山区下河原通八坂鳥居前下ル下河原町459、大正元年創業の料亭、三代目、座敷10室で120席、喫煙所あり、駐車場あり、カード可、The Tabelog Award Bronze、日本料理 WEST 百名店 2021・2023・2025。口コミ (2026年8月〜11月、英語): 毎月替わる献立、Matsutake と hamo の dobin-mushi、焼く前に見せてくれる子持ちの ayu、卵黄醤油のマグロ、Ito Jakuchu の屏風の部屋、予約は取りやすいという声も。',
      confidence: 'medium', sources: [TB, SITE, REST, R + 'B496671648/', R + 'B502848590/', R + 'B511651193/', R + 'B534514992/', R + 'B535314264/', R + 'B535774034/', R + 'B535850877/', R + 'B535934735/', R + 'B538157908/', R + 'B538492028/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Private tatami rooms with service by staff; the official site has English and Chinese pages; book by phone.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区下河原通八坂鳥居前下ル下河原町459',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and official site (November 2026 menu page); reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.001483, 135.782065); cross-checked: GSI 京都府京都市東山区下河原町459番地 (lot) 144m (a large site); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [REST],
    price_note: 'Prices from the official site (tax included, plus 15% service; read November 2026).', last_checked: TODAY, items: [
      it('昼懐石', '', 'Lunch kaiseki (shorter course, from)', '¥16,500', 'Course', 'ask', 'no', 'Official site; up to ¥110,000.', 'lunch'),
      it('夜懐石', '', 'Dinner kaiseki (from)', '¥33,000', 'Course', 'ask', 'no', 'Official site; a shorter ¥22,000 course too; up to ¥110,000.', 'dinner'),
    ] }, {
    cuisine: '大正元年創業の料亭で、名水「Kikusui no I」を使う京懐石 (食べログ)・昼懐石16,500円・22,000円 (品数の少ないお手軽なコース)・33,000円・55,000円・77,000円・110,000円、夜懐石33,000円・55,000円・77,000円・110,000円 (お手軽な22,000円のコースも)、税込・サービス料15%別 (公式サイト)・献立は毎月替わる (2026年9月の口コミ)・2026年9月: カマスの押し寿司、ayu と uruka、銀杏、抹茶素麺の昼の八寸、菊のお椀、hamo しゃぶ、卵黄醤油を添えたマグロのお造り・2026年10月: Matsutake と大きな hamo の dobin-mushi、焼く前に見せてくれる子持ちの ayu、味噌のソースの牛肉、柿と蓮根のなます、サフランライスの saba 寿司・日本酒とワイン',
    neighborhood: '東山、下河原通八坂鳥居前下ル、Kodai-ji の隣 (食べログ)。東山駅から約920m (食べログ)',
    gf_detail: '予約時に要確認。グルテンの情報なし。醤油や味噌で味付けする懐石で、2026年には寿司や卵黄醤油も出た。',
    vegan_detail: 'ヴィーガンではありません。出汁を土台に、hamo、ayu、マグロ、牛肉を使う懐石 (2026年の口コミ)。ベジタリアンのコースは載っていない。',
    notes: '[懐石・東山、Kodai-ji の隣の百年を超える料亭] 円山公園の先の坂を上った Kodai-ji の隣、大正元年に創業した料亭。家はかつて Nene が茶に使った名水「Kikusui no I」を守ってきた茶人の家系。三代目の Yoshihiro Murata さんは1951年生まれ、フランスと Nagoya で修業して家業を継ぎ、和食の UNESCO 登録にも力を尽くした。食事は庭に面した10の座敷で、Ito Jakuchu の屏風を掛けた部屋も。献立は毎月替わり、Matsutake と hamo の dobin-mushi、焼く前に見せる生きた ayu、卵黄醤油のマグロ。公式サイトによればミシュラン3つ星を2024・2025・2026年に獲得。昼16,500円 (サービス料15%別) からが入りやすい。',
  });
}

// ================================================================ ぎおん 阪川
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26001726/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_gion_sakagawa', name: 'ぎおん 阪川 (Gion Sakagawa)', category: 'MOM_AND_POP',
    lat: 35.002496, lng: 135.776316, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking by phone; à la carte ordering makes it easier to choose (2026 reviews). No gluten information; tempura, sushi and soy- and miso-seasoned dishes are on the menu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish-led kappo with turtle and beef, built on dashi (Tabelog; 2025–2026 reviews).',
    hours_raw: 'Mon–Sat 17:00–23:00, entry 17:00–20:30; closed Sunday (Tabelog); a September 2026 diner describes two seatings, at 17:00 and 20:00. Reservations accepted, by phone (2026 reviews); call ahead if you want a particular ingredient such as crab or abalone (Tabelog). More than 15 minutes late without word counts as a cancellation; no perfume or strong scents (Tabelog). 21 seats: a counter of 9 and private rooms for 3–4 on the ground floor and 5–8 upstairs, some with sunken seating (Tabelog). Non-smoking (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 6 min from Gion-Shijo Stn exit 7 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion, in an old-style house in a side lane — 6 min from Gion-Shijo Stn exit 7 (Keihan)',
    cuisine: 'Kyoto kappo of the day\'s best ingredients — natural ayu, turtle, gurnard, bamboo shoots, Matsutake — cooked with a light hand, as a course or à la carte at market prices (Tabelog; 2025–2026 reviews) · course ¥22,000 (July 2026); à la carte at market price, e.g. first-of-season torigai ¥8,500 (July 2026); diners report ¥15,000–39,999 with drinks · three starters to begin, e.g. anago sushi, hamo tempura with shiso and ume, yuba (October 2025) · spring 2026: Tsukahara bamboo shoots as sashimi and grilled; Omi beef with flower pepper; simmered sea bream; shrimp taro with crab sauce; rice steamed in bamboo · summer 2026: hamo grilled half-done on a shichirin at the counter; sea urchin; sea-bream crackers · September 2026: marinated hamo with corn and muscat; Wakasa gurnard sashimi and grilled head; turtle stew and turtle hot pot; grilled meat with rice and red miso soup · sake such as Michizakari and Kuro-ryu',
    website: TB, gmaps: gm('ぎおん 阪川'), menu_url: null,
    notes: "[Kappo · Gion, a classic counter where you can order à la carte] An old-style house in a Gion lane: a wood counter of nine full of regulars and a lively voice behind it, sunken seats, and tatami rooms upstairs. Chef Hirokazu Sakagawa trained at Kappo Nakagawa in north Gion before opening here in the Heisei era. The draw is choice: take the course or order à la carte from the day's ingredients — bamboo shoots from Tsukahara in spring, hamo grilled on a shichirin in summer, Wakasa gurnard and turtle in autumn — and the kitchen cooks them as you like. Regulars order at their own pace; first-timers find the chef quietly welcoming. Market prices can climb (one September 2026 evening came to ¥39,000 with drinks). Tabelog Bronze every year since 2019. Closed Sundays.",
    chef_bio: { chef_name: 'Hirokazu Sakagawa (Tabelog\'s chef heading; the text also writes "Sakakawa"; no kanji for the given name in a source)', roles: ['Owner-chef (Tabelog: "the warm-hearted owner")'], origin: null,
      background: 'Per Tabelog: trained at Kappo Nakagawa on the north side of Gion before opening Gion Sakagawa; known for a bright, gentle manner and for passing the idea of true kappo to the apprentices; the ground floor has a wooden counter and sunken seating, the upper floor tatami rooms. A September 2026 reviewer says the restaurant opened in the Heisei era. Tabelog Award Bronze 2019–2026; Japanese cuisine WEST "Tabelog 100" 2021, 2023, 2025.',
      philosophy: 'Minimal handling that brings out each ingredient\'s outline; deep flavour rather than show (Tabelog).', specialty: 'À la carte Kyoto kappo; hamo; turtle.',
      anecdotes: [
        { text: '"Become a regular and request your favorite ingredients to be prepared in your preferred style!" — March 2026, a fourteenth visit.', source: R + 'B116684183/' },
        { text: '"This restaurant is a great help for someone like me, who has many food dislikes, as I can order a la carte." — April 2026.', source: R + 'B525427288/' },
        { text: '"The conger eel grilled right in front of me on a shichirin was half-cooked, allowing me to savor its fragrant aroma and fluffy texture." — June 2026.', source: R + 'B494613136/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): ぎおん 阪川、日本料理、東山区祇園町南側570-199、祇園四条駅7番出口から徒歩6分、月〜土 17:00〜23:00 (入店は17:00〜20:30)、日曜休み、21席 (カウンター9、1階と2階に個室)、足を下ろせる席、15分以上連絡がない場合はキャンセル扱い、香水は控えて、蟹や鮑など希望の食材は電話で相談、カード可、The Tabelog Award Bronze 2019〜2026、日本料理 WEST 百名店 2021・2023・2025。口コミ (2025年10月〜2026年9月、英語): 一品料理も選べる、時価、コース22,000円、hamo、すっぽん、Wakasa のほうぼう、常連が多い、平成の開業。',
      confidence: 'medium', sources: [TB, R + 'B116684183/', R + 'B3230133/', R + 'B483066545/', R + 'B494613136/', R + 'B517612022/', R + 'B524180447/', R + 'B525427288/', R + 'B528956307/', R + 'B531371077/', R + 'B536340074/'] },
    cultural_comfort: { level: 'japanese', note: 'À la carte at market prices, ordered at the counter among regulars; book by phone.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区祇園町南側570-199',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through September 2026. No official website found.' },
    pin_source: `Tabelog ${TB} (35.002496, 135.776316); GSI resolves 京都府京都市東山区祇園町南側570番地 (lot, the large 570 block, not 570-199) 243m away, outside 150m, OSM not queried (sweep rule: GSI only), so the pin rests on the Tabelog point; kyoto_yamaguchi_gion (570-185) is 19m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B531371077/'],
    price_note: 'No menu is published; course price and a market-price item from a July 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Omakase course', '¥22,000', 'Course', 'ask', 'no', 'July 2026.', 'course'),
      it('', '', 'Torigai, first of the season (à la carte, market price)', '¥8,500', 'À la carte', 'ask', 'no', 'July 2026.', 'torigai'),
    ] }, {
    cuisine: 'その日一番の食材の京都の割烹 — 天然の ayu、すっぽん、ほうぼう、筍、Matsutake — を手を加えすぎずに。コースでも、時価の一品料理でも (食べログ、2025〜2026年の口コミ)・コース22,000円 (2026年7月)、一品は時価で、たとえば初物の torigai 8,500円 (2026年7月)。口コミの予算は飲み物込みで15,000〜39,999円・最初に前菜が3品、たとえば穴子の寿司、紫蘇と梅の hamo の天ぷら、湯葉 (2025年10月)・2026年春: Tsukahara の筍のお造りと焼き筍、花山椒と Omi の牛肉、鯛の煮物、海老芋と蟹のあん、竹の筒で蒸したご飯・2026年夏: カウンターで shichirin で半生に焼く hamo、雲丹、鯛のせんべい・2026年9月: hamo のマリネととうもろこしとマスカット、Wakasa のほうぼうのお造りと頭の焼き物、すっぽんの煮物と鍋、焼いた肉とご飯と赤だし・日本酒は Michizakari、Kuro-ryu など',
    neighborhood: '祇園、路地の昔ながらの家。京阪祇園四条駅7番出口から徒歩6分',
    gf_detail: '電話で予約するときに要確認。一品料理で選べるので調整しやすい (2026年の口コミ)。グルテンの情報なし。天ぷら、寿司、醤油や味噌の料理がある。',
    vegan_detail: 'ヴィーガンではありません。出汁を土台に、魚とすっぽん、牛肉を使う割烹 (食べログ、2025〜2026年の口コミ)。',
    notes: '[割烹・祇園、一品でも頼める昔ながらのカウンター] 祇園の路地の古い家。常連の並ぶ木のカウンター9席に威勢のいい声、足を下ろせる席、2階に座敷。Hirokazu Sakagawa さんは祇園の北側の Kappo Nakagawa で修業し、平成に開業した。魅力は選べること: コースでも、その日の食材から一品ずつでも頼め、好みの仕立てにしてくれる。春は Tsukahara の筍、夏は shichirin の hamo、秋は Wakasa のほうぼうとすっぽん。常連は自分のペースで頼み、初めての客にも大将は静かに優しい。時価なので高くなることも (2026年9月のある夜は飲み物込みで39,000円)。The Tabelog Award Bronze を2019年から毎年受賞。日曜休み。',
  });
}

save();
