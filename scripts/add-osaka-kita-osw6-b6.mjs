// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), circle umeda, Tabelog id odd; worker osw6, batch 6.
//   + 雲仙 三番街店 Unzen Sanbangai ten (teppan-grilled skewers, Hankyu Sanbangai B2F; Unzen founded 1950)
//   + 立ち呑み 大阪ふぐ太郎 Tachinomi Osaka Fugutaro (standing fugu bar, since 2025; owner 島本 一樹)
//   + 和食と日本酒 楠木フサエ 本店 大阪駅前第2ビル店 (Japanese food and sake, Osaka Station Front Building No. 2 B1F, since 2009)
//   + Brasserie La Loge a COOKPARK (all-day restaurant of ibis Osaka Umeda, since 2018)
//   - 2ビルのいしもん 27146987 skipped: sister of いしもん 本店, already in data (osaka_ishimon_honten_umeda).
//   Picked with `queue.mjs osaka-kita next core 80 umeda` (2026-11-01, after b5): odd ids in order 27009105, 27151943,
//   27092859, 27146987, 27107155. (Further down, 知留久 曽根崎本店 27000479 is a branch of 知留久, already in data as
//   osaka_shiru_hisa_hozenji; not reached in this batch.)
//   Chain check: Unzen has a main shop in Kitashinchi (May 2026 review) and a sister kushiage shop in LUCUA (Tabelog); two or three
//   shops, none in data. Fugutaro: one shop (official site). Kusunoki Fusae: three shops in the station-front buildings (本店 and
//   はなれ in the No. 2 building, おもや in the third; Tabelog), none in data. La Loge: the one restaurant of the ibis Osaka Umeda hotel. None of the
//   four is in data/osaka.json (grep by id, name and address, 2026-11-01). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw6-6');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27146987', '2ビルのいしもん: sister shop of いしもん 本店 (Tabelog "Sister Store Information"; sakanaya-ishimon.com brand page), which is already in data as osaka_ishimon_honten_umeda.');

// ================================================================ 雲仙 三番街店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27009105/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '22:00']);
  put({
    id: 'osaka_unzen_sanbangai', name: '雲仙 三番街店 (Unzen Sanbangai ten)', category: 'OMNI',
    lat: 34.705199, lng: 135.498855, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Skewers are finished with a splash of dashi (Tabelog) and eaten with sauces: plum soy, the house sauce, sesame miso, or salt (October 2026). Soy sauce and miso normally contain wheat; ask which skewers suit salt or lemon.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: skewers are finished with dashi (Tabelog), and most are meat, seafood or bacon-wrapped. Tabelog shows a vegetarian-options flag, and vegetable skewers (asparagus, ginkgo, zucchini, lotus root) appear in 2026 reviews.',
    hours_raw: 'Daily 11:00–22:00, last order 21:00, the same menu all day; may close early when dishes run out; closed when Hankyu Sanbangai closes (Tabelog; September 2026). Reservations accepted; booking brings small extras such as a sorbet, an extra skewer or 10% off (September and October 2026). A ¥600 cover for guests ordering only à la carte (Tabelog). Happy hour beer and highball ¥200 (September 2026). Cards (VISA, Master, JCB, AMEX, Diners), IC cards, Rakuten Edy, iD, QUICPay, PayPay, d Barai, Rakuten Pay, au PAY, Alipay, WeChat Pay (Tabelog). 28 seats: 8 at the counter, 20 at tables; private hire 20–50; non-smoking; English menu; children welcome; takeout (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Hankyu Sanbangai B2F — 1 min from Hankyu Umeda Stn, 5 min from JR Osaka Stn',
    cuisine: 'Skewers grilled on a teppan and finished with a splash of dashi, eaten with the house sauces (Tabelog) · sauces: plum soy, the original sauce, sesame miso, salt (October 2026) · courses: 8-skewer course with salad, small dish and rice ¥2,800 (listed from ¥3,850; ochazuke or egg on rice +¥200); skewer bar set of three skewers and a drink ¥1,500 (listed from ¥2,250); 10 skewers and 15 dishes with 90-minute all-you-can-drink ¥5,000 (listed from ¥7,200; booking only) (Tabelog, tax included) · ¥2,000 course of six skewers with salad, a small dish, white or 15-grain rice and miso soup, refills free (September–October 2026) · skewers named in 2026 reviews: shrimp, shrimp mayo, lotus root, quail egg in bacon, burdock in bacon, chicken wings, yam chicken roll, pork-wrapped maitake, celery-wrapped pork, salmon and beef, squid, shiso chicken, eel, ginkgo, zucchini, asparagus · sorbet to finish · non-alcoholic drinks ¥490 (October 2026)',
    website: null, gmaps: gm('雲仙 三番街店'), menu_url: null,
    notes: "[Teppan skewers · Umeda, Hankyu Sanbangai B2F] A cosy counter-and-tables shop in the Hankyu Sanbangai basement, from Unzen, a Kitashinchi skewer house that diners date to 1950. Skewers of meat, seafood and vegetables are cooked on a teppan rather than over charcoal, splashed with dashi, and set down two at a time beside the sauce that suits each one: plum soy, the house sauce, sesame miso or salt. It runs all day with one menu, so a ¥2,000 course of six skewers with salad, rice and miso soup works as a late lunch, and a ¥1,500 set of three skewers and a drink as a quick stop. Booking ahead earns small extras like a sorbet or an extra skewer. Several 2026 reviews mention attentive staff from overseas who explain each skewer. Quiet on some weekend afternoons.",
    chef_bio: { chef_name: null, roles: ['Staff and manager (unnamed in the sources read)'], origin: 'A branch of Unzen, whose main shop is in Kitashinchi (May 2026 review); the business dates from 1950 (August 2026 review: "Established in 1950"; October 2026 review: "over 50 years of history").', background: 'Shop text (Tabelog): each skewer carefully grilled on an iron plate and finished with a splash of dashi, "fluffy and piping hot"; an original sauce; open continuously with a full menu; a sister restaurant, Kushiage Mono Shun, in LUCUA. A June 2026 diner who knew the Kitashinchi counter writes that the owner there "cooks everything with great care".', philosophy: 'Light skewers, fluffy and hot from the teppan (Tabelog).', specialty: 'Teppan skewers with dashi; sauce pairings.',
      anecdotes: [
        { text: '"The staff placed each skewer on just the right sauce." — January 2025, the premium course of 12 skewers.', source: R + 'B500084703/' },
        { text: '"The yam was served with the plum sauce, the maitake with the sesame sauce, and the chicken wings with salt" — October 2026, the ¥2,000 grilled course.', source: R + 'B538214686/' },
        { text: '"First, they served edamame and fresh raw vegetables including cabbage, daikon radish, carrot, and green onion." — August 2026, the ¥1,500 skewer bar set.', source: R + 'B533618501/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B500084703/', R + 'B527860465/', R + 'B530617087/', R + 'B533618501/', R + 'B534824119/', R + 'B534838451/', R + 'B534991465/', R + 'B535038815/', R + 'B536510335/', R + 'B538214686/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); staff from overseas explain each skewer (2026 reviews).' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区芝田1-1-3 阪急三番街 B2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区芝田一丁目1番3号 (go) 119m (the large Hankyu Sanbangai complex; the shop is on B2F); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B533618501/', R + 'B538214686/'],
    price_note: 'Courses from the Tabelog listing (tax included, discounted from listed prices); the ¥2,000 course from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Course: six skewers with salad, small dish, rice and miso soup', '¥2,000', 'Course', 'ask', 'no', 'September and October 2026 reviews.', 'course_6'),
      it('', '', 'Fun course: 8 skewers with salad, small dish and rice', '¥2,800', 'Course', 'ask', 'no', 'Tabelog listing (regular ¥3,850).', 'course_8'),
      it('', '', 'Skewer bar set: three skewers of the day and a drink', '¥1,500', 'Set', 'ask', 'no', 'Tabelog listing; August 2026 review.', 'skewer_bar_set'),
      it('', '', '10 skewers, 15 dishes, 90-minute all-you-can-drink (booking only)', '¥5,000', 'Course', 'ask', 'no', 'Tabelog listing (regular ¥7,200).', 'course_10_ayce'),
    ] }, {
    cuisine: '鉄板で焼いてだしをかける串焼き、オリジナルのたれで (食べログ)・たれ: 梅醤油、オリジナルソース、ごま味噌、塩 (2026年10月)・コース: 串8本、サラダ、小鉢、ご飯の Fun Course 2,800円 (通常3,850円、プラス200円でお茶漬けか卵かけご飯)、日替わりの串3本とドリンク1杯のセット1,500円 (通常2,250円)、串10本の15品と90分飲み放題5,000円 (通常7,200円、予約のみ) (食べログ、税込)・串6本、サラダ、小鉢、白米か十五穀米、みそ汁の2,000円のコース、おかわり自由 (2026年9〜10月)・2026年の口コミに出てくる串: えび、えびマヨ、れんこん、うずらのベーコン巻き、ごぼうのベーコン巻き、手羽先、山芋の鶏巻き、まいたけの豚巻き、セロリの豚巻き、サーモンと牛肉、イカ、大葉の鶏、うなぎ、銀杏、ズッキーニ、アスパラ・締めはシャーベット・ノンアルコールの飲み物490円 (2026年10月)',
    neighborhood: '阪急三番街の地下2階。阪急梅田駅から徒歩1分、JR大阪駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。串はだしをかけて仕上げ (食べログ)、梅醤油、オリジナルソース、ごま味噌、塩で食べる (2026年10月)。醤油や味噌はふつう小麦を含むので、塩やレモンで食べられる串を確認して。',
    vegan_detail: 'ヴィーガンではありません。串はだしをかけて仕上げ (食べログ)、ほとんどが肉、魚介、ベーコン巻き。食べログにはベジタリアンのオプションの表示があり、2026年の口コミには野菜の串 (アスパラ、銀杏、ズッキーニ、れんこん) も。',
    notes: '[鉄板の串焼き・梅田、阪急三番街地下2階] 阪急三番街の地下にある、カウンターとテーブルのこぢんまりした店で、口コミでは1950年からという北新地の串の店、雲仙の店。肉、魚介、野菜の串を炭火ではなく鉄板で焼いてだしをかけ、2本ずつ、それぞれに合うたれ (梅醤油、オリジナルソース、ごま味噌、塩) の上に置いてくれる。一日中同じメニューなので、串6本にサラダ、ご飯、みそ汁の2,000円のコースは遅めのランチにも、串3本とドリンクの1,500円のセットはちょっと一杯にも。予約するとシャーベットや串1本などのおまけがある。2026年の口コミでは、串をひとつずつ説明してくれる海外出身のていねいなスタッフの話がいくつも。週末の昼過ぎはすいていることも。',
  });
}

// ================================================================ 立ち呑み 大阪ふぐ太郎
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27151943/'; const R = TB + 'dtlrvwlst/';
  const OFF = 'https://osaka-fugutarou.com/';
  const MWF = day(['14:00', '22:00']), TU = day(['16:00', '22:00']), WE = day(['12:00', '21:00']);
  put({
    id: 'osaka_tachinomi_osaka_fugutaro', name: '立ち呑み 大阪ふぐ太郎 (Tachinomi Osaka Fugutaro)', category: 'MOM_AND_POP',
    lat: 34.706023, lng: 135.497436, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Fugu is served as sashimi and hot pot with a homemade ponzu (Tabelog; ponzu is usually soy-based and contains wheat), and as kara-age and tempura (wheat batter).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fugu bar (sashimi, skin, hot pot, kara-age, fin sake); vegetables come in the hot pot.',
    hours_raw: 'Official site: Mon, Wed, Fri 14:00–22:00 (last order 21:30); Tue 16:00–22:00; Sat, Sun and holidays 12:00–21:00 (last order 20:30); last entry 30 minutes before last order; closed Thursday. Tabelog: Mon, Tue, Wed, Fri 16:00–23:00; Sat, Sun and holidays 14:00–21:00; closed Thursday; last seating 20:00 on Sundays and holidays. Reservations through the official site or Tabelog; Tabelog bookings brought a free small tecchiri pot in an October 2026 promotion. Standing only: 18 spots (an 8-person counter and four tables), up to 25; non-smoking; digital menu (Tabelog). Cards (VISA, Master, JCB, AMEX); no e-money or QR (Tabelog). Opened 22 September 2025 (Tabelog; official site).',
    hours: { 0: MWF, 1: TU, 2: MWF, 4: MWF, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'マルシェ芝田 2F — 1 min from Hankyu Osaka-umeda Stn, 8 min from JR Osaka Stn',
    cuisine: 'Standing bar for domestic tiger fugu: only Japanese fish of 1.2 kg or more, prepared in the shop (official site); fish from the central market (Tabelog), mainly from Kumamoto and Nagasaki (October 2026) · official menu: tessa from ¥528, tecchiri ¥968, fugu zosui ¥748; no courses · tessa ¥480 (September and October 2026); small tecchiri pot; fugu skin; kara-age, tempura and fugu nigiri; grilled matsutake; oden (2026 reviews) · homemade ponzu (Tabelog) · about 30 sakes (Tabelog) or over 40 brands (October 2026); all-you-can-drink sake ¥1,408 Monday–Wednesday, ¥550 more at weekends (October 2026); chilled hirezake (fin sake) · a long fugu evening came to ¥8,998, a lighter one about ¥3,000 (September–October 2026)',
    website: OFF, gmaps: gm('立ち呑み 大阪ふぐ太郎'), menu_url: OFF,
    notes: "[Fugu · Umeda, a standing fugu bar] A second-floor standing bar a minute from Hankyu Umeda that sells domestic tiger fugu at drinking-bar prices: tessa sashimi from about ¥500, a hot pot just under ¥1,000 and a rice-porridge finish, plus fugu skin, kara-age, tempura and nigiri. The owner, 島本 一樹, opened it in September 2025 at 39 after appearing on the TV pitch show Reiwa no Tora, wanting fugu to be an everyday dish rather than a special-occasion one (official site). Sake runs to 30–40 kinds with a cheap all-you-can-drink, and the chilled fin sake is a favourite. Diners found the fugu as good as at a regular fugu restaurant (October 2026) and the owner friendly. No seats, no courses; an hour after work is the idea. Closed Thursdays.",
    chef_bio: { chef_name: '島本 一樹', roles: ['Owner (オーナー) (official site)', 'Licensed fugu chef (unnamed) (Tabelog)'], origin: null, background: 'Official site (read 2026-11-01), the owner\'s timeline: 2004, part-time at a seafood restaurant; 2006, full-time there, later running it; from 2009, experience at several mostly Japanese restaurants; 2014, part-time at a fugu and crab specialist, then its manager; 2015, went independent with an izakaya that later failed; 2016, opened a fugu specialist; 2018, a bento shop and a standing bar, then a move to Nishiyodogawa; February 2025, appeared on "令和の虎" and won full backing ("完全ALL"); September 2025, opened 大阪ふぐ太郎, aged 39. The site: "ふぐ料理は高級で格式高い。そんなイメージを変えたくて、この店を始めました。" Reviews: "The owner has a friendly demeanor" (October 2026); "the trendy spot that appeared on \'Reiwa no Tora\'" (October 2026).', philosophy: '"ふぐを特別な日だけの料理にしない" — fugu should not be only for special days (official site).', specialty: 'Tessa; tecchiri; chilled hirezake.',
      anecdotes: [
        { text: '"The cheapest sashimi (tessa) in Osaka is an astonishing JPY 480. All-you-can-drink Japanese sake is JPY 1408 on Mondays, Tuesdays, and Wednesdays." — October 2026.', source: R + 'B538128405/' },
        { text: '"Including the Hirezake, the quality was on par with any regular fugu restaurant." — October 2026, a ¥8,998 evening of sashimi, skin, hot pot, sushi and tempura.', source: R + 'B537572999/' },
        { text: '"The owner has a friendly demeanor, and the chilled Hirezake is easy to drink and incredibly delicious!" — October 2026.', source: R + 'B537264510/' },
      ],
      japanese_sources_summary: '公式サイト: 立ち呑み 大阪ふぐ太郎、阪急大阪梅田駅から徒歩1分、大阪市北区芝田1丁目3-7 マルシェ芝田 2F、国産とらふぐを立ち飲みで、完全国産・1.2kg以上のトラフグのみを店内で捌く、てっさ528円〜、てっちり968円、ふぐ雑炊748円、コースはなし、[月水金] 14:00〜22:00 (LO21:30)、[火] 16:00〜22:00、[土日祝] 12:00〜21:00 (LO20:30)、最終入店はラストオーダーの30分前、木曜定休、オーナー 島本 一樹 (海鮮料理店のアルバイトから店主、ふぐ・かに専門店の店長、独立と倒産、ふぐ専門店の開業、2025年2月に令和の虎で完全ALL、2025年9月に開業、39歳)、「ふぐを特別な日だけの料理にしない」。食べログ (店舗会員): 立ち飲み18人、禁煙、カード可、日本酒約30種、自家製ポン酢、2025年9月22日オープン。口コミ (2026年8〜10月): てっさ480円、てっちりの小鍋、ふぐ皮、唐揚げ、天ぷら、握り、冷やのひれ酒、日本酒の飲み放題、気さくなオーナー。',
      confidence: 'medium', sources: [TB, OFF, R + 'B534271187/', R + 'B534303178/', R + 'B534338959/', R + 'B537264510/', R + 'B537572999/', R + 'B537591191/', R + 'B537601819/', R + 'B537830084/', R + 'B537840778/', R + 'B538128405/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Standing bar with a digital menu (Tabelog); the official site has a translate button. No English menu listed.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区芝田1-3-7 マルシェ芝田2階',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; official site with October 2026 news; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区芝田一丁目3番7号 (go) 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [OFF, R + 'B538128405/'],
    price_note: 'Menu prices from the official site (undated); tessa ¥480 and the sake deal from October 2026 reviews.', last_checked: TODAY, items: [
      it('てっさ', '', 'Tessa (fugu sashimi)', '¥528', 'Fugu', 'ask', 'no', 'Official site ("from ¥528"); ¥480 in September and October 2026 reviews.', 'tessa'),
      it('てっちり', '', 'Tecchiri (fugu hot pot)', '¥968', 'Fugu', 'ask', 'no', 'Official site.', 'tecchiri'),
      it('ふぐ雑炊', '', 'Fugu zosui (rice porridge)', '¥748', 'Fugu', 'ask', 'no', 'Official site.', 'fugu_zosui'),
      it('', '', 'All-you-can-drink sake (Mon–Wed; ¥550 more at weekends)', '¥1,408', 'Drinks', '', '', 'October 2026 review.', 'sake_ayce'),
    ] }, {
    cuisine: '国産とらふぐの立ち飲み: 完全国産・1.2kg以上のトラフグのみを店内で捌く (公式サイト)、中央市場から (食べログ)、おもに Kumamoto と Nagasaki のもの (2026年10月)・公式のお品書き: てっさ528円〜、てっちり968円、ふぐ雑炊748円、コースはなし・てっさ480円 (2026年9月・10月)、てっちりの小鍋、ふぐ皮、唐揚げ、天ぷら、ふぐの握り、松茸の焼き物、おでん (2026年の口コミ)・自家製のポン酢 (食べログ)・日本酒は約30種 (食べログ) か40銘柄以上 (2026年10月)、日本酒の飲み放題は月〜水1,408円、週末は550円増し (2026年10月)、冷やのひれ酒・いろいろ頼んで8,998円、軽くなら3,000円ほど (2026年9〜10月)',
    neighborhood: 'マルシェ芝田の2階。阪急大阪梅田駅から徒歩1分、JR大阪駅から徒歩8分',
    gf_detail: '要確認。グルテンの情報なし。ふぐは刺身と鍋に自家製ポン酢 (食べログ、ポン酢はふつう醤油ベースで小麦を含む)、唐揚げや天ぷら (小麦の衣) でも。',
    vegan_detail: 'ヴィーガンではありません。ふぐの店 (刺身、皮、鍋、唐揚げ、ひれ酒)。野菜は鍋に入る。',
    notes: '[ふぐ・梅田、ふぐの立ち飲み] 阪急梅田から1分のビルの2階にある立ち飲みで、国産のとらふぐを立ち飲みの値段で出す。てっさは500円ほどから、鍋は1,000円弱、締めの雑炊、ほかにふぐ皮、唐揚げ、天ぷら、握り。オーナーの島本 一樹さんが、令和の虎に出たあと、ふぐを特別な日だけの料理にしたくないと、2025年9月に39歳で開いた (公式サイト)。日本酒は30〜40種で飲み放題も安く、冷やのひれ酒が人気。ふぐの味はふつうのふぐ料理店に負けないという声 (2026年10月) や、気さくなオーナーという声。席もコースもなく、仕事帰りに1時間ほどで、という店。木曜休み。',
  });
}

// ================================================================ 和食と日本酒 楠木フサエ 本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27092859/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['16:00', '23:00']), SA = day(['14:00', '23:00']);
  put({
    id: 'osaka_kusunoki_fusae_honten_ekimae2', name: '和食と日本酒 楠木フサエ 本店 大阪駅前第2ビル店 (Washoku to Nihonshu Kusunoki Fusae Honten Osaka Ekimae Dai 2 Biru Ten)', category: 'OMNI',
    lat: 34.699048, lng: 135.497803, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The menu includes fried dishes (kakiage, kisu tempura, fried sardine cake), shumai, dote-yaki in a sweet miso sauce and oden; soy and miso seasonings normally contain wheat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an izakaya of sashimi, fried fish, pork, beef and dashi-based obanzai and oden.',
    hours_raw: 'Mon–Fri 16:00–23:00; Sat 14:00–23:00; holidays 14:00–22:00; last order food 22:00, drinks 22:30 (21:00/21:30 on holidays); Sunday closed per the hours table, though the same listing also gives "Sun & Public Holidays 14:00–22:00" for this shop and はなれ; some Sundays and Mondays listed as closed in October (Tabelog). Same-day bookings by phone only; a 2-hour limit when busy; a table is released if you are more than 10 minutes late and cannot be reached (Tabelog). Cash only: no cards, e-money or QR; Osaka Premium Coupons accepted (Tabelog). No cover charge (Tabelog). 20 seats: a table for 6, three tables for 2, 8 at the counter (Tabelog). Smoking: the listing says the shop has been entirely smoke-free since February 2026, and elsewhere that smoking is allowed in the group\'s shops from February 2026; reviews in August and September 2026 describe it as non-smoking. Opened 18 June 2009 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: SA }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Osaka Station Front Building No. 2, B1F — 2 min from JR Kitashinchi Stn, 3 min from Nishi-Umeda Stn',
    cuisine: 'Japanese food and sake: a chef with 30 years\' experience, sake chosen by a sake-diploma holder (Tabelog) · the Fusae Set, a little of everything seasonal (meat, sashimi, simmered and fried dishes), with sea urchin and salmon roe for ¥500 more (Tabelog; October 2026) · a 6-dish course with 90-minute all-you-can-drink ¥4,000 (Tabelog; August 2026); a sake all-you-can-drink course (August 2026) · dishes in 2026 reviews: four kinds of sashimi, kisu tempura, chilled pork shabu, fried sardine cake, dote-yaki, Osaka-age (August); shumai, chicken skirt, smoked cheese (July); kakiage (June); obanzai; oden, dashimaki, roast beef, toro-taku, chashu, eggplant and okra simmered (October) · sake list changing with the season',
    website: null, gmaps: gm('楠木フサエ 本店 大阪駅前第2ビル'), menu_url: null,
    notes: "[Izakaya · Umeda, Osaka Station Front Building No. 2 B1F] A small sake-and-Japanese-food bar in the basement of Osaka Station Front Building No. 2, the main shop of a three-shop group in the station-front buildings (Tabelog). The cooking comes from a chef with thirty years behind the stove, the sake from a holder of a sake diploma, and the signature Fusae Set puts a little of everything on one tray, sashimi, tempura, meat and simmered dishes, with sea urchin and salmon roe as a ¥500 extra. Obanzai, oden, shumai and fried sardine cakes fill the board, and a ¥4,000 course with 90 minutes of drinks makes it an easy office party. Diners praise friendly, energetic staff; one July 2026 group was asked for last orders 90 minutes after sitting down. Cash only; book same-day by phone.",
    chef_bio: { chef_name: null, roles: ['Chef with 30 years\' experience (unnamed) (Tabelog)', 'Sake chosen by a sake-diploma holder (unnamed) (Tabelog)'], origin: 'Main shop of 楠木フサエ, with はなれ in the same building and おもや on B1F of the third building (Tabelog: "3rd Building B1").', background: 'Shop text (Tabelog): authentic Japanese cuisine by a chef with 30 years of experience, at a reasonable price; a diverse selection of sake chosen by a sake diploma holder; deals early in the week and more for visiting the sister shops. Opened 18 June 2009.', philosophy: 'Reasonably priced Japanese food that pairs with sake (Tabelog).', specialty: 'Fusae Set; sake.',
      anecdotes: [
        { text: '"The shumai, packed to the brim, was exquisite!!" — July 2026, a second stop after a drinking party.', source: R + 'B531794083/' },
        { text: '"The Iwashi Iwasaki Age was made from pounded sardines mixed with diced vegetables and seasonings, then deep-fried until crispy." — August 2026, a daytime drink with the Fusae Set.', source: R + 'B535921778/' },
        { text: '"The all-you-can-drink course for JPY 4000 is just right" — August 2026, an office party organiser.', source: R + 'B534758504/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B525327823/', R + 'B531772625/', R + 'B531794083/', R + 'B532927768/', R + 'B532944069/', R + 'B533076918/', R + 'B534758504/', R + 'B535921778/', R + 'B535948046/', R + 'B537711717/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter and tables; same-day bookings by phone; cash only (Tabelog). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区梅田1-2-2 大阪駅前第2ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with October 2026 closing days; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区梅田一丁目2番2号 (go) 91m (a large station-front building; the shop is on B1F); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B534758504/', R + 'B537711717/'],
    price_note: 'The course from the Tabelog listing; the Fusae Set extra from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', '6-dish course with 90-minute all-you-can-drink', '¥4,000', 'Course', 'ask', 'no', 'Tabelog listing; August 2026 review.', 'course_4000'),
      it('', '', 'Fusae Set (meat, sashimi, simmered and fried dishes); +¥500 for sea urchin and salmon roe', '', 'Set', 'ask', 'no', 'Tabelog listing; August and October 2026 reviews.', 'fusae_set'),
    ] }, {
    cuisine: '和食と日本酒: 30年の経験の料理人、日本酒は日本酒ディプロマの資格を持つ人が選ぶ (食べログ)・季節のものを少しずつ (肉、刺身、煮物、揚げ物) のフサエセット、プラス500円でウニといくら (食べログ、2026年10月)・6品と90分飲み放題のコース4,000円 (食べログ、2026年8月)、日本酒の飲み放題のコース (2026年8月)・2026年の口コミに出てくる料理: 刺身4種、キスの天ぷら、豚の冷しゃぶ、いわしのすり身の揚げ物、どて焼き、Osaka-age (8月)、焼売、鶏のハラミ、スモークチーズ (7月)、かき揚げ (6月)、おばんざい、おでん、だし巻き、ローストビーフ、トロたく、チャーシュー、なすとオクラの煮びたし (10月)・季節で変わる日本酒',
    neighborhood: '大阪駅前第2ビルの地下1階。JR北新地駅から徒歩2分、西梅田駅から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。揚げ物 (かき揚げ、キスの天ぷら、いわしのすり身の揚げ物)、焼売、甘い味噌のどて焼き、おでんがあり、醤油や味噌はふつう小麦を含む。',
    vegan_detail: 'ヴィーガンではありません。刺身、揚げた魚、豚肉、牛肉、だしのおばんざいやおでんの居酒屋。',
    notes: '[居酒屋・梅田、大阪駅前第2ビル地下1階] 大阪駅前第2ビルの地下にある、和食と日本酒の小さな店で、駅前ビルに3軒ある店の本店 (食べログ)。料理は30年の経験の料理人、日本酒は日本酒ディプロマを持つ人が選び、名物のフサエセットは刺身、天ぷら、肉、煮物を少しずつひとつのお盆に、プラス500円でウニといくらも。おばんざい、おでん、焼売、いわしのすり身の揚げ物などが並び、90分飲み放題つきの4,000円のコースは会社の飲み会にちょうどいい。明るく元気なスタッフをほめる声が多い一方、2026年7月には座って90分でラストオーダーを聞かれたというグループも。現金のみ、当日の予約は電話で。',
  });
}

// ================================================================ Brasserie La Loge a COOKPARK
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27107155/'; const R = TB + 'dtlrvwlst/';
  const OFF = 'https://ibisosakaumeda.com/restaurant';
  const FULL = day(['07:00', '10:00'], ['11:30', '14:00'], ['14:30', '20:00']), WED = day(['07:00', '10:00'], ['14:30', '20:00']);
  put({
    id: 'osaka_brasserie_la_loge_ibis_umeda', name: 'Brasserie La Loge a COOKPARK', category: 'OMNI',
    lat: 34.702187, lng: 135.501082, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Buffets lean on bread (croissants, focaccia, milk bread); one main is baked with herb breadcrumbs (August 2026).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog shows a vegetarian-options flag, and the lunch buffet has salads with three dressings, cold dishes, soups and bread, but no vegan dish is described; a baked summer-vegetable main comes with herb breadcrumbs (August 2026).',
    hours_raw: 'Breakfast 7:00–10:00; lunch 11:30–14:00 (last order 13:30); café lounge 14:30–20:00 (last order 19:30); no lunch on Wednesday (Tabelog). Tabelog\'s table shows only lunch on public holidays. Regular service may stop for private bookings, and some breakfast slots are kept for hotel guests (Tabelog). Breakfast buffet ¥2,200, ¥2,000 if booked by the day before, 90 minutes (September 2026). No cover or service charge (Tabelog). Cards (VISA, Master, JCB, AMEX), IC cards, Rakuten Edy, nanaco, WAON, iD, PayPay, Alipay (Tabelog). 80 seats (not reservable by seat); private hire; non-smoking; English menu; children welcome, diaper table, no nursing room (Tabelog). Opened 1 November 2018 (Tabelog).',
    hours: { 0: FULL, 1: FULL, 2: WED, 3: FULL, 4: FULL, 5: FULL, 6: FULL }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'ibis Osaka Umeda 1F, reached from the Whity Umeda underground mall (exit 7-72) — 4 min from JR Osaka Stn, 3 min from Higashi-Umeda Stn',
    cuisine: 'Hotel brasserie and café of the ibis Osaka Umeda (Tabelog) · breakfast buffet ¥2,200 (Tabelog), ¥2,000 booked ahead (September 2026), Japanese and Western, with coffee to take away; curry in the morning (August 2026) · lunch: choose a main plus a half buffet of salads, cold dishes, soups and breads including croissants from France made with AOP butter, from ¥1,700 (Tabelog); mains such as braised black wagyu in red wine ¥2,200 and baked summer vegetables with herb breadcrumbs ¥1,800 (August 2026), sautéed salmon, roast pork (2026); drink bar ¥700 with fruit juices and Nespresso coffee; dessert +¥300 (August 2026) · café lounge in the afternoon',
    website: OFF, gmaps: gm('Brasserie La Loge a COOKPARK イビス大阪梅田'), menu_url: null,
    notes: "[Hotel brasserie · Higashi-Umeda, ibis Osaka Umeda 1F] The ground-floor restaurant of the ibis Osaka Umeda hotel, reachable from the Whity Umeda underground mall, open to non-guests for breakfast, lunch and an afternoon café. Breakfast is a ¥2,000–2,200 Japanese-and-Western buffet with croissants from France and coffee to take away. Lunch pairs a main dish (braised wagyu, salmon, roast pork) with a half buffet of salads, soups and breads from ¥1,700, plus a ¥700 drink bar and a ¥300 dessert. The room is large and calm with sofas and Osaka-themed art. A July 2026 diner noted that most staff come from overseas and speak good Japanese; a September 2026 diner saw many European hotel guests. No lunch on Wednesdays.",
    chef_bio: { chef_name: null, roles: ['Hotel kitchen team (chef unnamed in the sources read)'], origin: 'The restaurant of ibis Osaka Umeda, an Accor hotel (Tabelog).', background: 'Shop text (Tabelog): breakfast, lunch and café lounge; the chef\'s special dishes with unlimited bread and salad at lunch; a hotel-style breakfast; croissants "recommended by the ACCOR Hotels group", made with AOP butter. Opened 1 November 2018. A live-music night on Wednesdays and Fridays is suspended for now (Tabelog).', philosophy: null, specialty: 'Breakfast buffet; main dish with half buffet at lunch.',
      anecdotes: [
        { text: '"The bread selection includes four types, such as focaccia and milk bread, but the croissant was particularly delicious when toasted." — July 2026, lunch.', source: R + 'B531456949/' },
        { text: '"The fun part was not knowing how to use the coffee machine. That \'not knowing\' became a communication tool, leading to guests helping each other out" — September 2026, breakfast.', source: R + 'B536273170/' },
        { text: '"This time, I was lucky to have peach shortcake for dessert." — August 2026, a third visit, dessert for ¥300 more.', source: R + 'B515424768/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, OFF, R + 'B506364304/', R + 'B515424768/', R + 'B529672976/', R + 'B531456949/', R + 'B533672980/', R + 'B534250320/', R + 'B535452330/', R + 'B535850929/', R + 'B536077972/', R + 'B536273170/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); a hotel restaurant with many overseas guests and staff (July and September 2026).' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区小松原町1-5 イビス大阪梅田 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区小松原町1番5号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B534250320/', R + 'B535452330/'],
    price_note: 'Breakfast and lunch from the Tabelog listing (tax included); mains, drink bar and dessert from an August 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Breakfast buffet (¥2,000 if booked by the day before)', '¥2,200', 'Breakfast', 'ask', 'ask', 'Tabelog listing; September 2026 reviews.', 'breakfast_buffet'),
      it('', '', 'Lunch: main dish with half buffet of salads, soups and breads', '¥1,700', 'Lunch', 'ask', 'ask', 'Tabelog listing ("from ¥1,700").', 'lunch_half_buffet'),
      it('', '', 'Black wagyu braised in red wine (lunch main with half buffet)', '¥2,200', 'Lunch', 'ask', 'no', 'August 2026 review.', 'wagyu_red_wine'),
      it('', '', 'Baked summer vegetables with herb breadcrumbs (lunch main with half buffet)', '¥1,800', 'Lunch', 'no', 'ask', 'August 2026 review.', 'baked_vegetables'),
      it('', '', 'Drink bar (fruit juices, coffee, tea)', '¥700', 'Drinks', '', '', 'August 2026 review.', 'drink_bar'),
    ] }, {
    cuisine: 'イビス大阪梅田のホテルのブラッスリーとカフェ (食べログ)・朝食ビュッフェ2,200円 (食べログ)、前日までの予約で2,000円 (2026年9月)、和洋、コーヒーは持ち帰り用のカップでも、朝にカレーも (2026年8月)・ランチ: メインを選んで、サラダ、冷菜、スープ、パン (AOP バターのフランスのクロワッサンも) のハーフビュッフェ、1,700円から (食べログ)。メインは黒毛和牛の赤ワイン煮2,200円、夏野菜の香草パン粉焼き1,800円 (2026年8月)、サーモンのソテー、ローストポーク (2026年)。フルーツジュースとNespresso のドリンクバー700円、デザートはプラス300円 (2026年8月)・午後はカフェラウンジ',
    neighborhood: 'イビス大阪梅田の1階、Whity Umeda の地下街 (7-72出口) からつながる。JR大阪駅から徒歩4分、東梅田駅から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。ビュッフェはパン (クロワッサン、フォカッチャ、ミルクパン) が中心で、香草パン粉焼きのメインも (2026年8月)。',
    vegan_detail: '要確認。食べログにはベジタリアンのオプションの表示があり、ランチのビュッフェには3種のドレッシングのサラダ、冷菜、スープ、パンがあるが、ヴィーガンの料理は書かれていない。夏野菜のメインには香草パン粉がかかる (2026年8月)。',
    notes: '[ホテルのブラッスリー・東梅田、イビス大阪梅田1階] ホテル、イビス大阪梅田の1階のレストランで、Whity Umeda の地下街からも行ける。宿泊しなくても朝食、ランチ、午後のカフェが使える。朝食は2,000〜2,200円の和洋のビュッフェで、フランスのクロワッサンや持ち帰りのコーヒーも。ランチはメイン (和牛の煮込み、サーモン、ローストポーク) にサラダ、スープ、パンのハーフビュッフェで1,700円から、ドリンクバー700円とデザート300円を足せる。広くて落ち着いた店内に、ソファと大阪をテーマにしたアート。2026年7月の口コミではスタッフのほとんどが海外出身で日本語がとても上手、9月の口コミではヨーロッパからの宿泊客が多かったとのこと。水曜はランチなし。',
  });
}

save();
