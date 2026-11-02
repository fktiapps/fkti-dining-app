// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), core queue, circle shin-osaka; worker osw8 (lane: Tabelog id odd), batch 12.
//   + 餃子工房 ギョィィィィィィン Gyoza Kobo Gyoiiiiiin!! (bite-sized gyoza and a drink by Minamikata, often run by one person, open to 1:00)
//   + らぁめん じん IHARA店 Ramen Jin IHARA (fire-tossed Sapporo-style grilled miso and shoyu ramen by Nishinakajima-Minamigata; no ramen block)
//   + 隆勝 Ryusho (seafood-tonkotsu tsukemen at JR Higashi-Yodogawa, open to 2:00; full ramen block)
//   - skipped にんにくラーメン 幸ちゃん 本店 27006309: same-concept branch of a brand already in data (東三国店, osaka_kou_chan_higashimikuni);
//     per the coordinator's review of this batch, a main shop is treated as any other branch.
//   - skipped 人類みな麺類 ラーメン研究所 27150281: chain; run by UNCHI Co., whose site (unchi-co.com, read 2026-11-02) lists 人類みな麺類 shops in
//     Osaka, Kobe, Tokyo and Okayama plus other brands, franchise and produce work. Note: data already holds three UNCHI-brand shops
//     (人類乃宝舟, 人類みなウチのラーメン, 人類みな辛さが全て); flagged for the coordinator in case the group is to be kept.
//   Chain check of the three added:
//   - Gyoiiiiiin!!: one shop (Tabelog; reviews); a web search found a 餃子工房 near Bakuro-yokoyama in Tokyo on Gurunavi, not shown to be related.
//   - Ramen Jin: the shop name carries "IHARA店（西中島店）", which suggests other branches; no other shop found (web search 2026-11-02; r-jin.jp did
//     not answer). Kept, flagged.
//   - Ryusho: data holds 中華ダイニング 隆勝 (西宮原2-6-16) and つけ麺 R&S, whose reviews call R&S "a shop of the Ryusho group"; so this is
//     a group of about three shops; kept as a small group, flagged.
//   None is in data/osaka.json (grep by id, name and address, 2026-11-02); no record within 60 m of any of the three.
//   No ramen block for Ramen Jin: no source describes the miso broth's clarity; left off rather than guessed.
//   open_late per the brief: Gyoiiiiiin!! 1:00 and Ryusho 2:00 set true; Ramen Jin closes 23:00, set false.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw8-12');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27006309', 'same-concept branch of a brand already in data: にんにくラーメン 幸ちゃん (東三国店 = osaka_kou_chan_higashimikuni); main shop treated as any branch (coordinator, 2026-11-02)');
skip('27150281', 'chain: 人類みな麺類 (UNCHI Co.), shops in Osaka, Kobe, Tokyo and Okayama per unchi-co.com, read 2026-11-02');

// ================================================================ 餃子工房 ギョィィィィィィン
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27102997/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '01:00']);
  put({
    id: 'osaka_gyoza_kobo_gyoiiin_nishinakajima', name: '餃子工房 ギョィィィィィィン (Gyoza Kobo Gyoiiiiiin!!)', category: 'OMNI',
    lat: 34.725942, lng: 135.500618, cuisine_type: 'gyoza',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat gyoza skins, xiaolongbao and dumplings throughout, with soy-based dipping sauce.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the gyoza filling is domestic black pork (Tabelog); braised pork, chicken and shrimp dumplings.',
    hours_raw: 'Mon–Sat and holidays 17:00–1:00; Sun 17:00–23:00; closures not fixed; open over New Year (Tabelog). A July 2024 diner listed weekday hours from 11:30 with lunch to 15:00; the current listing gives evenings only. Reservations accepted by phone (Tabelog). No cards, e-money or QR payment (Tabelog); "payment is cash only" (October 2024). 18 seats, a counter at the front and tables behind, private rooms, private hire up to 20; smoking allowed (Tabelog; May 2025). A small appetiser is served on sitting down: tofu with chive chili oil (May 2025), potato salad (August 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: day(['17:00', '23:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: '西中島3-15-17, 3 min from Hankyu Minamikata or Nishinakajima-Minamigata on the Midosuji Line (Tabelog)',
    cuisine: 'Gyoza, Chinese dishes and drinks (Tabelog) · small one-bite gyoza with thin skins, filled with domestic black pork and vegetables (Tabelog) · pan-fried and boiled gyoza, six for ¥430 each (March 2026; ¥390 in July 2024) · spicy gyoza, six for ¥480; chilled gyoza, six for ¥500, "reminiscent of cold pasta" (2025–2026) · shrimp gyoza, cheese and mala gyoza (Tabelog; August 2026) · garlic oil and minced garlic on the table: try a gyoza plain first, then with garlic oil in the sauce (Tabelog; 2024–2026) · Chinese braised pork ¥680, xiaolongbao two for ¥500 (March 2026) · mapo tofu, yodare-dori, steamed chicken with green onion and salt, shrimp dumplings (Tabelog; 2024–2025) · pickled mustard greens, a three-item snack plate, salted cabbage (2025–2026) · draft beer ¥550, shochu with corn tea or barley tea ¥500, a lemon sour served with sorbet ¥650, a tomato chu-hi you mix yourself (2024–2026) · two banquet courses with all-you-can-drink (Tabelog)',
    website: 'https://gyoiiiiiin.jimdo.com/', gmaps: gm('餃子工房 ギョィィィィィィン 西中島'), menu_url: null,
    notes: '[Gyoza · Minamikata, bite-sized gyoza and a drink until 1:00] An 18-seat gyoza bar three minutes from Hankyu Minamikata, with a counter at the front and tables behind, where the gyoza are small enough to eat in one bite. Six pan-fried or boiled cost ¥430 (2026); a regular rates the light boiled ones best and the chilled gyoza as something new, and the table garlic oil is the house tip. Mapo tofu, braised pork and xiaolongbao round it out with beer and tea-shochu highballs. On several visits one person ran the whole place (2025–2026), and it suits a quick drink or a second stop after dinner. Open from 17:00 to 1:00 (Sundays to 23:00); cash only; smoking allowed.',
    chef_bio: { chef_name: null, roles: ['Owner-operator (unnamed); a regular calls the person running the shop "Yassan"'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: a gyoza specialist with Chinese dishes and a drinks list; gyoza of domestic black pork and vegetables in thin skins sized for one bite; recommended to try them plain, then with garlic oil in the dipping sauce; two banquet courses with all-you-can-drink. Per reviews: "It was just Yassan running the place alone" (March 2026; also May 2025); "Even though it was a one-person operation, the service was surprisingly good" (August 2026); when a diner spilt chili oil on a white T-shirt, "the owner kindly handed me a towel with bleach on it" (May 2025); several diners found it quiet or empty early in the evening (2025–2026); a long-time regular counts 15 visits (March 2026).',
      philosophy: null, specialty: 'Bite-sized boiled and pan-fried gyoza with garlic oil; chilled gyoza.',
      anecdotes: [
        { text: '"When you come to Gyoiiiiiin, you must start with the water dumplings!" — a regular on the 15th visit, March 2026.', source: R + 'B329149175/' },
        { text: '"This dish breaks the concept that dumplings should be served hot." — May 2025, on the chilled gyoza.', source: R + 'B329149175/' },
        { text: '"We dipped the gyoza in garlic oil and scooped some garlic with the folds for a bite. The flavor and aroma exploded." — June 2024.', source: R + 'B486070842/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 餃子工房 ギョィィィィィィン、餃子・中華料理・居酒屋、大阪市淀川区西中島3-15-17、Hankyu Minamikata 駅か Midosuji Line の西中島南方駅から徒歩3分、月〜土・祝17:00〜翌1:00、日17:00〜23:00、定休日は不定、年末年始も営業、電話で予約可、カード・電子マネー・QR 不可、18席、個室あり、20名まで貸切可、喫煙可、国産の黒豚と野菜の一口餃子、焼き餃子と水餃子6個430円、チーズや麻辣、冷やし餃子、にんにくオイル、宴会コース2種 (飲み放題つき)。口コミ (2024年6月〜2026年8月): 麻辣餃子、エビ餃子、中華角煮680円、小籠包2個500円、冷やし餃子6個500円、mapo tofu、yodare-dori、おつまみ3種盛り (キムチ、ナムルなど)、塩だれキャベツ、生ビール550円、お茶割りの焼酎500円、シャーベットのレモンサワー、ひとりで切り盛りしていた日も、遅くまで開いていて2軒目に、現金のみ。',
      confidence: 'medium', sources: [TB, R + 'B329149175/', R + 'B486070842/', R + 'B488070581/', R + 'B495943742/', R + 'B506797755/', R + 'B515140233/', R + 'B530986462/', R + 'B534702186/', R + 'B534752111/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter seats for solo diners (Tabelog). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島3-15-17',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島三丁目15番17号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B329149175/'],
    price_note: 'Prices from a March 2026 review.', last_checked: TODAY, items: [
      it('焼き餃子', '', 'Pan-fried gyoza, six pieces', '¥430', 'Gyoza', 'no', 'no', 'March 2026.', 'yaki_gyoza'),
      it('水餃子', '', 'Boiled gyoza, six pieces', '¥430', 'Gyoza', 'no', 'no', 'March 2026.', 'sui_gyoza'),
      it('冷やし餃子', '', 'Chilled gyoza, six pieces', '¥500', 'Gyoza', 'no', 'no', 'March 2026.', 'hiyashi_gyoza'),
      it('', '', 'Spicy gyoza, six pieces', '¥480', 'Gyoza', 'no', 'no', 'March 2026.', 'spicy_gyoza'),
      it('中華角煮', '', 'Chinese braised pork', '¥680', 'Chinese dishes', 'ask', 'no', 'March 2026.', 'chuka_kakuni'),
      it('小籠包', '', 'Xiaolongbao, two pieces', '¥500', 'Chinese dishes', 'no', 'no', 'March 2026.', 'xiaolongbao'),
    ] }, {
    cuisine: '餃子と中華料理とお酒 (食べログ)・皮の薄い一口サイズの餃子で、中身は国産の黒豚と野菜 (食べログ)・焼き餃子と水餃子、各6個430円 (2026年3月。2024年7月は390円)・辛い餃子6個480円、冷やし餃子6個500円、冷たいパスタのようという声も (2025〜2026年)・エビ餃子、チーズや麻辣の餃子 (食べログ、2026年8月)・テーブルににんにくオイルと刻みにんにく。まずはそのまま、次にたれににんにくオイルを入れて (食べログ、2024〜2026年)・中華角煮680円、小籠包2個500円 (2026年3月)・mapo tofu、yodare-dori、ねぎ塩の蒸し鶏、エビの蒸し餃子 (食べログ、2024〜2025年)・漬物、おつまみ3種盛り、塩だれキャベツ (2025〜2026年)・生ビール550円、コーン茶や麦茶の焼酎割り500円、シャーベット入りのレモンサワー650円、自分で割るトマトのチューハイ (2024〜2026年)・飲み放題つきの宴会コース2種 (食べログ)',
    neighborhood: '西中島3-15-17、Hankyu Minamikata 駅か Midosuji Line の西中島南方駅から3分 (食べログ)',
    gf_detail: 'グルテンフリーではありません。小麦の餃子の皮、小籠包、点心ばかりで、たれは醤油ベース。',
    vegan_detail: 'ヴィーガンではありません。餃子の具は国産の黒豚 (食べログ)。角煮、鶏、エビの餃子も。',
    notes: '[餃子・南方、一口餃子で一杯、深夜1時まで] Hankyu Minamikata 駅から3分、手前にカウンター、奥にテーブルの18席の餃子の店で、餃子は一口で食べられる小ささ。焼きか水餃子の6個で430円 (2026年)。ある常連のいちばんは軽い水餃子で、冷やし餃子も新しいと評判。テーブルのにんにくオイルが店のおすすめの食べ方。mapo tofu、角煮、小籠包に、ビールやお茶割りの焼酎も。ひとりで店を回していた夜も何度か (2025〜2026年)。軽く一杯や2軒目にちょうどいい。17時から深夜1時まで (日曜は23時まで)。現金のみ。喫煙可。',
  });
}

// ================================================================ らぁめん じん IHARA店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270302/27008011/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '14:00'], ['18:00', '23:00']);
  put({
    id: 'osaka_ramen_jin_ihara_nishinakajima', name: 'らぁめん じん IHARA店 (Ramen Jin IHARA)', category: 'OMNI',
    lat: 34.72539, lng: 135.497572, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: homemade wheat noodles (Hokkaido flour, Tabelog) in miso or shoyu broth; winged gyoza.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: broth of chicken bones and niboshi (June 2026), lard, thick pork chashu.',
    hours_raw: 'Daily 11:00–14:00 and 18:00–23:00, until sold out; closures not fixed (Tabelog). Tsukemen is served in the evening only, per a regular (April 2026). No reservations; no cards (Tabelog); cash only, per a February 2026 diner. 27 seats: 8 at the counter and 14 at tables; non-smoking; parking for 3 cars; children welcome; takeaway (Tabelog). A diner was told the building is temporary and the air conditioning could go no lower (July 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: '西中島2-14-34, 1 min from the south exit of Nishinakajima-Minamigata on the Midosuji Line, also 1 min from Hankyu Minamikata (Tabelog; March 2026)',
    cuisine: 'Miso ramen specialist, with shoyu ramen, tsukemen and izakaya dishes (Tabelog) · Sapporo-style grilled miso: vegetables and lard tossed over high flames in a pot, finished with a blend of miso, served piping hot (2026) · Sapporo-style grilled miso ramen ¥1,100 (August 2026); authentic grilled miso ¥1,000 and "Miso Revenge" ¥1,200 (February 2026) · grilled miso special with chashu, vegetables, corn, butter and egg, as recommended by Orix\'s Ryoma Nishikawa, ¥1,200 (August 2026) · Sapporo-style grilled shoyu ¥1,100; Hokkaido shoyu; shoyu with extra vegetables (2025–2026) · broth of chicken bones and niboshi (June 2026) · homemade noodles of Hokkaido flour including "Haru yo Koi" (Tabelog), medium-thick and chewy (2026) · thick-cut chashu; a half-boiled egg in the grilled shoyu (2026) · seasonal: Hiroshima lemon shoyu ramen (from November, ¥1,000 trial price in 2025); black garlic oil miso with cheese (winter) · sets: ramen with rice ¥1,200; with a skirt-steak rice bowl ¥1,500; rice ¥200 at lunch; salmon chili oil rice (2026) · winged gyoza (May 2026)',
    website: 'http://r-jin.jp/', gmaps: gm('らぁめん じん IHARA店 西中島'), menu_url: null,
    notes: '[Ramen · Nishinakajima-Minamigata, Sapporo-style grilled miso tossed over open flame] A 27-seat miso ramen specialist a minute from Nishinakajima-Minamigata, where flames leap from the pot as the chef tosses vegetables and lard before the miso goes in (2026). The Sapporo-style grilled miso (¥1,100) comes piping hot, richer-looking than it tastes, with homemade Hokkaido-flour noodles and thick chashu; regulars swear by the grilled shoyu with extra vegetables. Winter brings a black-garlic and cheese miso, November a Hiroshima lemon shoyu. The walls are covered in Orix baseball signatures and photos. Cash only; parking for three cars; tsukemen in the evening only.',
    chef_bio: { chef_name: null, roles: ['Founder and chefs (unnamed)'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: "The only Miso Ramen Specialty Shop in the ramen battleground of Nishinakajima"; celebrating its 10th anniversary; "The founder, who has thoroughly researched miso from all over Japan, has perfected the ultimate soup by adding unique twists to Hokkaido miso"; homemade noodles of Hokkaido flour blended with "Haru yo Koi". Per reviews: a diner says it "has been operating in this location for over 20 years" (April 2026) and another returned "after more than 10 years" (May 2026); signed memorabilia and photos of Orix players, especially Ryoma Nishikawa, cover the walls (2026); a regular on the 16th visit chats with the owner and staff (2025–2026); one diner could not hear the staff and had to ask three times which bowl was which (February 2026).',
      philosophy: 'Miso from all over Japan researched to make "the ultimate soup" (Tabelog).', specialty: 'Sapporo-style grilled miso ramen; grilled shoyu with vegetables.',
      anecdotes: [
        { text: '"As I watched the flames rise higher than the chef’s face, I worried my fine hairs might get singed." — August 2026.', source: R + 'B317828206/' },
        { text: '"It has a rich, roasted flavor and depth, yet surprisingly leaves a light aftertaste that is distinct from its appearance." — August 2026, Sapporo-style grilled miso ¥1,100.', source: R + 'B534975166/' },
        { text: '"It seems like the oil is adjusted according to the season, and for summer, it’s a bit lighter." — July 2026.', source: R + 'B532778167/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): らぁめん じん IHARA店 (西中島店)、つけ麺・ラーメン・居酒屋、大阪市淀川区西中島2-14-34、Midosuji Line の西中島南方駅南口から徒歩1分、毎日11:00〜14:00、18:00〜23:00、売り切れまで、定休日は不定、予約不可、カード不可、27席 (カウンター8、テーブル14)、禁煙、駐車場3台、子ども歓迎、テイクアウト、西中島で唯一の味噌ラーメン専門店、10周年、北海道の小麦粉 Haru yo Koi をブレンドした自家製麺。口コミ (2024年〜2026年9月): 炙り味噌ラーメン、Sapporo 式の炙り味噌1,100円、Miso Revenge 1,200円、Orix の Ryoma Nishikawa おすすめのスペシャル1,200円、Aburi Shoyu の野菜増し、Hiroshima lemon shoyu ラーメン、黒にんにくオイルとチーズの味噌 (冬)、鶏ガラと煮干しのスープ、中太の麺、厚切りのチャーシュー、ハラミ丼のセット1,500円、羽根つきの gyoza、つけ麺は夜だけ、現金のみ、仮設の建物でエアコンが弱いという声も。',
      confidence: 'medium', sources: [TB, R + 'B255398343/', R + 'B317828206/', R + 'B522521842/', R + 'B526217019/', R + 'B528850018/', R + 'B529838660/', R + 'B531650693/', R + 'B531971159/', R + 'B532778167/', R + 'B534975166/', R + 'B535505299/', R + 'B536175621/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Family-friendly with table seating (Tabelog). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島2-14-34',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島二丁目14番34号 (go) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534975166/', R + 'B522521842/', R + 'B536175621/', R + 'B529838660/'],
    price_note: 'Prices from 2026 reviews.', last_checked: TODAY, items: [
      it('炙り味噌ラーメン', '', 'Sapporo-style grilled miso ramen', '¥1,100', 'Ramen', 'no', 'no', 'August 2026.', 'aburi_miso_ramen'),
      it('', '', '"Miso Revenge"', '¥1,200', 'Ramen', 'no', 'no', 'February 2026.', 'miso_revenge'),
      it('', '', 'Grilled miso special (chashu, vegetables, corn, butter, egg)', '¥1,200', 'Ramen', 'no', 'no', 'August 2026.', 'aburi_miso_special'),
      it('', '', 'Sapporo-style grilled shoyu ramen', '¥1,100', 'Ramen', 'no', 'no', 'April 2026.', 'aburi_shoyu_ramen'),
      it('', '', 'Ramen with skirt-steak rice bowl set', '¥1,500', 'Sets', 'no', 'no', 'March–July 2026.', 'harami_don_set'),
    ] }, {
    cuisine: '味噌ラーメンの専門店で、醤油ラーメン、つけ麺、居酒屋の料理も (食べログ)・Sapporo 式の炙り味噌: 鍋で野菜とラードを強火であおり、炎が上がったところに合わせ味噌を入れ、熱々で出す (2026年)・Sapporo 式の炙り味噌ラーメン1,100円 (2026年8月)。炙り味噌1,000円、Miso Revenge 1,200円 (2026年2月)・Orix の Ryoma Nishikawa おすすめのスペシャル、チャーシュー、野菜、コーン、バター、卵のせ1,200円 (2026年8月)・Sapporo 式の Aburi Shoyu 1,100円、Hokkaido shoyu、野菜増しの醤油 (2025〜2026年)・鶏ガラと煮干しのスープ (2026年6月)・北海道の小麦粉 Haru yo Koi などで作る自家製麺 (食べログ)、中太でもちもち (2026年)・厚切りのチャーシュー、Aburi Shoyu には半熟卵 (2026年)・季節もの: Hiroshima lemon shoyu ラーメン (11月から、2025年はお試し1,000円)、黒にんにくオイルとチーズの味噌 (冬)・セット: ラーメンとごはん1,200円、ハラミ丼つき1,500円、昼のごはん200円、salmon chili oil rice (2026年)・羽根つきの gyoza (2026年5月)',
    neighborhood: '西中島2-14-34、Midosuji Line の西中島南方駅南口から1分、Hankyu Minamikata 駅からも1分 (食べログ、2026年3月)',
    gf_detail: 'グルテンフリーではありません。北海道の小麦粉の自家製麺 (食べログ) を味噌か醤油のスープで。羽根つきの gyoza も。',
    vegan_detail: 'ヴィーガンではありません。鶏ガラと煮干しのスープ (2026年6月)、ラード、厚い豚のチャーシュー。',
    notes: '[ラーメン・西中島南方、炎であおる Sapporo 式の炙り味噌] 西中島南方から1分、27席の味噌ラーメンの専門店。鍋から炎が上がり、野菜とラードをあおってから味噌を入れる (2026年)。Sapporo 式の炙り味噌 (1,100円) は熱々で、見た目より後味は軽く、北海道の小麦粉の自家製麺と厚切りのチャーシュー。常連は野菜増しの Aburi Shoyu を推す。冬は黒にんにくとチーズの味噌、11月からは Hiroshima lemon shoyu。壁は Orix の選手のサインと写真でいっぱい。現金のみ。駐車場3台。つけ麺は夜だけ。',
  });
}

// ================================================================ 隆勝
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27080557/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '14:30'], ['17:30', '02:00']);
  put({
    id: 'osaka_ryusho_higashiyodogawa', name: '隆勝 (Ryusho)', category: 'OMNI',
    lat: 34.740268, lng: 135.50352, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thick wheat noodles (whole wheat, 2026); kara-age and gyoza on the side.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: broth of pork bones, trotters, chicken bones and feet, niboshi and katsuobushi (Tabelog); chashu in the dip.',
    hours_raw: 'Mon, Tue and Thu–Sun 11:00–14:30 and 17:30–2:00; closed Wednesday (Tabelog). No reservations; no cards (Tabelog); tickets from a cash vending machine inside the entrance (May 2026, October 2026); PayPay accepted (February 2026). 16 seats, counter and tables; smoking in a designated area at night only; coin parking nearby (Tabelog). Opened 1 August 2014 (Tabelog). Busy at weekday lunch, quieter at weekends (October 2026).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: '東三国1-1-32, 1 min from JR 東淀川駅 (Tabelog); a short walk from Higashi-Mikuni (June 2026)',
    cuisine: 'Tsukemen and ramen in a rich seafood and pork-bone broth (Tabelog) · broth of pork bones (marrow and back), trotters, chicken bones, hen feet, niboshi, katsuobushi, shiitake, kombu and vegetables, over 15 hours, without artificial seasoning or back fat (Tabelog) · dip with diced chashu and sautéed onion; a lemon on the side for halfway through; soup to dilute the dip at the end (2024–2026) · thick straight whole-wheat noodles (2026); homemade noodles, per the sign (March 2026) · pork tsukemen ¥1,000, large +¥180 (April and August 2026) · chicken paitan tsukemen ¥980 (July 2025) · special tsukemen with egg, menma and chashu on a separate plate ¥1,400, pork or chicken dip (March 2026) · sweet and spicy tsukemen, the most popular, in four spice levels (July 2026) · shoyu and shio ramen, rich tonkotsu ramen, a new mazesoba (2026) · lunch set with chashu rice bowl ¥280 (March 2025); kara-age, gyoza, fried rice, chashu mayo rice bowl (2026)',
    website: null, gmaps: gm('隆勝 東三国 東淀川駅'), menu_url: null,
    notes: '[Ramen · JR Higashi-Yodogawa, seafood-tonkotsu tsukemen until 2 a.m.] A 16-seat tsukemen shop a minute from JR Higashi-Yodogawa, open since 2014 and one of the few places to eat round the station until 2 a.m. The dip is a thick seafood-and-pork-bone broth made without back fat, full of diced chashu and sautéed onion, for thick, firm whole-wheat noodles; squeeze in the lemon halfway, and finish with soup to dilute the dip. Pork tsukemen is ¥1,000; the sweet and spicy tsukemen in four heat levels is the favourite (2026). Tickets from a cash machine at the door; PayPay too. Closed Wednesdays.',
    chef_bio: { chef_name: null, roles: ['Owner and staff (unnamed)'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: opened 1 August 2014; "Rich Seafood and Pork Bone Broth"; over a dozen ingredients simmered for more than 15 hours; "We do not use any artificial seasonings. To prioritize your health, we avoid using back fat"; soy sauce, salt, dipping soba and tsukemen. Per reviews: "They boil 80 kilograms of tonkotsu every day" (a diner, March 2026); "The staff were friendly and busy, providing thoughtful advice on menu selections" (July 2026); a discount for regular customers posted inside (October 2026); one May 2026 diner found the room greasy and saw flies.',
      philosophy: '"Don’t leave any noodles behind; be sure to drink the broth!" (Tabelog).', specialty: 'Seafood-tonkotsu tsukemen; sweet and spicy tsukemen.',
      anecdotes: [
        { text: '"Although it’s described as a rich seafood and pork bone broth, it wasn’t heavy due to the absence of back fat." — February 2026, pork tsukemen ¥1,000.', source: R + 'B523293793/' },
        { text: '"The rich dipping sauce sticks to your lips when you wipe your mouth with a tissue! That’s how thick the dipping sauce is!" — March 2026, special tsukemen ¥1,400.', source: R + 'B524207847/' },
        { text: '"The area around Higashiyodogawa Station doesn’t have many dining options … so a place that stays open late is quite valuable." — February 2026.', source: R + 'B523293793/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 隆勝、ラーメン・つけ麺、大阪市淀川区東三国1-1-32、JR 東淀川駅から1分、月・火・木〜日11:00〜14:30、17:30〜翌2:00、水曜休み、予約不可、カード不可、16席、夜のみ喫煙所で喫煙可、近くにコインパーキング、2014年8月1日オープン、濃厚魚介豚骨、豚骨 (髄の骨と背骨)、豚足、鶏ガラ、鶏の足、煮干し、かつお節、しいたけ、昆布、野菜など十数種を15時間以上、化学調味料なし、背脂なし。口コミ (2024年〜2026年10月): 店内の券売機 (現金)、PayPay 可、豚のつけ麺1,000円、大盛り180円、chicken paitan のつけ麺980円、別皿つきのつけ麺1,400円、Sweet and Spicy のつけ麺は辛さ4段階、まぜそば、全粒粉の太いストレート麺、つけだれに角切りチャーシューと玉ねぎ、途中でレモン、最後にスープ割り、kara-age、gyoza、チャーハン、夜遅くまで開いている。',
      confidence: 'medium', sources: [TB, R + 'B427025005/', R + 'B490899065/', R + 'B521072075/', R + 'B523293793/', R + 'B524207847/', R + 'B527374346/', R + 'B529141076/', R + 'B531748768/', R + 'B532588364/', R + 'B536054906/', R + 'B536724778/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine at the entrance; menus with photos posted outside and inside (October 2026). No English evidence found.' },
    safety: SAFETY0,
    ramen: {
      broth_base: ['tonkotsu', 'gyokai', 'chicken'], broth_texture: 'paitan', tare: ['shoyu', 'shio'], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'thick', shape: 'straight', hydration: null, handmade: true, notes: 'Thick straight noodles of whole wheat, firm at the core (March and July 2026); the sign says homemade noodles (March 2026).' },
      regional_style: [], sub_genre: ['tsukemen', 'ramen', 'mazesoba_aburasoba'],
      signature_bowl: 'Pork tsukemen, ¥1,000 (August 2026); sweet and spicy tsukemen, the most popular (July 2026).',
      chashu: 'Diced chashu in the dip, tender in blocks (2026); the special adds sliced chashu on a separate plate, served cold (January 2026).',
      notable_toppings: ['sautéed onion', 'lemon', 'fish powder on nori', 'menma', 'egg (special)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork, chicken and fish broth; chashu.' },
      pantheon: 'JR Higashi-Yodogawa’s late-night tsukemen: a thick seafood and pork-bone dip made without back fat.',
      profile: { richness: 4, oiliness: 2, clarity: 1, tare_strength: 4, noodle_firmness: 4, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B427025005/', '"The rich dipping sauce paired perfectly with the thick noodles"; against "not as rich as I expected" for the chicken dip (B527374346) — placed high, not top.'],
        oiliness: [R + 'B523293793/', '"It wasn’t heavy due to the absence of back fat"; the shop says it avoids back fat (Tabelog) — placed low.'],
        clarity: [R + 'B524207847/', '"That’s how thick the dipping sauce is!" — an opaque, thick dip.'],
        tare_strength: [R + 'B536724778/', '"The flavor was robust, but it felt a bit salty."'],
        noodle_firmness: [R + 'B521072075/', '"They have a firm texture and are on the harder side!"; "keeping a firm core" (B524207847).'],
        aroma_punch: [R + 'B524207847/', '"The ratio of seafood to tonkotsu is slightly tilted towards seafood! … the seafood flavor really shines in the tsukemen!"'],
      },
    },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区東三国1-1-32',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区東三国一丁目1番32号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B427025005/', R + 'B524207847/', R + 'B536054906/'],
    price_note: 'Prices from 2025–2026 reviews (tax included).', last_checked: TODAY, items: [
      it('', '', 'Pork tsukemen', '¥1,000', 'Tsukemen', 'no', 'no', 'April and August 2026.', 'pork_tsukemen'),
      it('', '', 'Large noodles', '+¥180', 'Tsukemen', 'no', 'no', 'April 2026.', 'oomori'),
      it('', '', 'Special tsukemen (egg, menma, chashu), pork or chicken dip', '¥1,400', 'Tsukemen', 'no', 'no', 'March 2026.', 'tokusei_tsukemen'),
      it('', '', 'Chicken paitan tsukemen', '¥980', 'Tsukemen', 'no', 'no', 'July 2025.', 'tori_paitan_tsukemen'),
      it('', '', 'Sweet and spicy tsukemen, four spice levels', '', 'Tsukemen', 'no', 'no', 'July 2026.', 'amakara_tsukemen'),
    ] }, {
    cuisine: '濃厚な魚介豚骨のつけ麺とラーメン (食べログ)・スープは豚骨 (髄の骨と背骨)、豚足、鶏ガラ、鶏の足、煮干し、かつお節、しいたけ、昆布、野菜を15時間以上、化学調味料も背脂も使わない (食べログ)・つけだれには角切りのチャーシューと炒めた玉ねぎ、途中で添えのレモンを、最後はスープ割りで (2024〜2026年)・全粒粉の太いストレート麺 (2026年)、看板には自家製麺 (2026年3月)・豚のつけ麺1,000円、大盛りは180円増し (2026年4月、8月)・chicken paitan のつけ麺980円 (2025年7月)・卵、メンマ、チャーシューを別皿でつけたつけ麺1,400円、つけだれは豚か鶏 (2026年3月)・いちばん人気は Sweet and Spicy のつけ麺、辛さは4段階 (2026年7月)・醤油と塩のラーメン、濃厚豚骨ラーメン、新しいまぜそば (2026年)・ランチのチャーシューの丼のセット280円 (2025年3月)。kara-age、gyoza、チャーハン、チャーシューとマヨネーズの丼 (2026年)',
    neighborhood: '東三国1-1-32、JR 東淀川駅から1分 (食べログ)。東三国駅からも少し歩けば (2026年6月)',
    gf_detail: 'グルテンフリーではありません。全粒粉の小麦の太麺 (2026年)。kara-age と gyoza も。',
    vegan_detail: 'ヴィーガンではありません。豚骨、豚足、鶏ガラ、鶏の足、煮干し、かつお節のスープ (食べログ)。つけだれにチャーシュー。',
    notes: '[ラーメン・JR 東淀川、深夜2時までの魚介豚骨つけ麺] JR 東淀川駅から1分、2014年からの16席のつけ麺の店で、駅のまわりで深夜2時まで食べられる数少ない店。つけだれは背脂を使わない濃い魚介豚骨で、角切りのチャーシューと炒めた玉ねぎがたっぷり。全粒粉の太くて固めの麺をつけて、途中でレモンを搾り、最後はスープ割りで。豚のつけ麺は1,000円。いちばん人気は辛さ4段階の Sweet and Spicy のつけ麺 (2026年)。入口の券売機は現金。PayPay も可。水曜休み。',
  });
}

save();
