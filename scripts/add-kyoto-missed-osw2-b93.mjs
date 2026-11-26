// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 93.
//   Queue run from the osw2 worktree, 2026-11-26. Core and notable tiers have nothing left in this lane, so rest tier,
//   nearest-first (queue.mjs kyoto-missed next rest 2000, lane ids by distance). No integrator prefetch this round:
//   shops fetched by the worker from Tabelog /en/ with 3 s between requests.
//   Rest rule: at least one 2025–26 review and enough sourced detail. Days the sources do not state are left out of hours.
//   + SOAN (café-gallery at Gojo-Takakura; pho, rice palettes, a vegan bún; opened 30 November 2025; official site)
//   + 口馳八丁 風屋杉原 Kazeya Sugihara (fish izakaya near Muromachi-Rokkaku; ¥1,000–1,600 lunch sets; courses from ¥5,500; official site)
//   + 焼肉 天照杉 Yakiniku Terusan (yakiniku of Kyoto beef on Fuyacho, since 2011; gurunavi menu)
//   + 酒亭 笹蔵 (counter izakaya off Oike, since about 1990; a former sushi chef and a couple; Serai 2016; 2025–26 reviews)
//   - 七星 — takeaway dorayaki shop with no 2025–26 review (latest December 2024); retail food shop (Greg 11-07 ruling)
//   None of the drafted shops is in data/kyoto.json, hidden records included: grep by id, name and address.
//   Brands: SOAN is the only shop of 一般社団法人リリース found (Leaf Kyoto, December 2025); the other three are single shops.
//   Service charges: none found.
//   Pins: Tabelog /en/ point for each shop; not pin-checked by the worker this round (integrator pin-checks).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-26';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-93');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26034873', '七星: takeaway dorayaki shop (weekends only) with no 2025–26 review — latest December 2024; retail food shop (Greg 11-07 ruling)');

// ================================================================ SOAN
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26044377/'; const R = TB + 'dtlrvwlst/';
  const MENU = TB + 'dtlmenu/';
  const SITE = 'https://soan.release.world/';
  const LEAF = 'https://www.leafkyoto.net/en/?p=172934';
  const H = day(['11:00', '14:00'], ['15:00', '18:00']);
  put({
    id: 'kyoto_soan_gojo', name: 'SOAN', category: 'OMNI',
    lat: 34.995860569118996, lng: 135.76266716838708, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The pho is made with domestic rice noodles, and the menu’s allergen notes for the plain and chicken pho list chicken and seafood but not wheat; the bobun, vegan bún and rice palette set list wheat. No gluten-free claim or cross-contact information is published (Tabelog menu, updated September 2026).',
    vegan_status: 'options', vegan_label: 'Some vegan options', vegan_detail: 'Some vegan options: a Vegan Bún (¥1,760), crisp seasonal vegetables in a black-vinegar sauce with herb salad, described on the menu as for vegans and as a summer dish — ask whether it is still on; Tabelog lists vegan and vegetarian options. The pho broth is made from chicken bones (Tabelog menu, updated September 2026).',
    hours_raw: 'Lunch 11:00–14:00 (last order 13:30) and café 15:00–18:00 (last order 17:00); Tabelog lists Thursday, Friday and Saturday open and Monday–Wednesday and Sunday closed; the official site gives irregular closing days and posts opening days on Instagram; closed on public holidays (Tabelog). Dinner after 18:00 on a special schedule (Tabelog); 18:00–22:00 by advance reservation only (Leaf Kyoto, December 2025). Cards, e-money and QR (Tabelog). 20 seats; private hire for 20–50 (Tabelog). Non-smoking (Tabelog). Takeaway available (Tabelog). About 5 minutes from Gojo subway station (official site).',
    hours: { 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gojo-Takakura',
    cuisine: 'Café-gallery lunches built on rice, with a menu developed with 中東篤志 of そ・かわひがし (official site) · SOAN pho of domestic rice noodles with low-temperature chicken and house herb oil, with Asian-style tamago-kake-gohan of Awaji Island eggs, ¥1,650; shrimp pho set ¥1,870; Rice Palette set ¥1,980 — rice bars of Iiyama rice topped with land and sea ingredients (Tabelog menu) · Rice Palette set with a ten-vegetable rice potage, ¥1,650 (January 2026) · SOAN Bobun, a summer special, ¥1,870 (October 2026 review) · mango chè and homemade pudding (Tabelog menu)',
    website: SITE, gmaps: gm('SOAN 京都 五条 堺町'), menu_url: MENU,
    notes: "[Café · Gojo-Takakura, pho and rice palettes] A café, shop and gallery opened in late 2025 to share good food from around Japan: rice-noodle pho with low-temperature chicken, Asian-style egg rice and ‘Rice Palette’ sets, plus a vegan bún in summer. English-speaking staff. Thursday–Saturday; check Instagram.",
    chef_bio: { chef_name: '中東篤志 (reading not sourced)', roles: ['Culinary director and food adviser (official site); runs そ・かわひがし in Kyoto (official site)'], origin: null,
      background: 'SOAN opened on 30 November 2025 as a “destination store” with four parts — FOOD (dining), TOOLS (shop), LEARNING (classes) and JOURNEY (travel ideas) — on the theme of discovering and sharing deliciousness (official site; Leaf Kyoto, December 2025; January 2026 review). Leaf Kyoto credits its photo to Release, a general incorporated association, whose domain the site uses. The culinary director, 中東篤志 of そ・かわひがし, has shaped the menu with the team since the concept stage (official site); a January 2026 reviewer adds that the menu follows the 24 solar terms.',
      philosophy: '“Table to Arts & Earth”: discovering and sharing deliciousness (official site); all meals made with safe, carefully chosen ingredients and seasonings (Tabelog).',
      specialty: 'SOAN pho; Rice Palette set.',
      anecdotes: [
        { text: 'In October 2026 a diner who came back for the bobun found the limited dish gone and had the chicken pho set instead; the cutlery case held spoons but no chopsticks, which staff brought on request, and staff asked about cilantro before serving.', source: R + 'B537432387/' },
        { text: 'A December 2025 reviewer had a SOAN bento before an event and called it authentic ethnic food with tasty vegetables.', source: R + 'B522226217/' },
      ],
      japanese_sources_summary: '公式サイト: SOAN、Table to Arts＆Earth 「美味しい」の発見と共有、京都府京都市下京区五条高倉堺町21番地ジムキノウエダビルディング1階101号、地下鉄五条駅から徒歩5分、京阪清水五条駅から徒歩6分、ランチ11:00〜14:00 (13:30 L.O.)、カフェ15:00〜18:00 (17:00 L.O.)、不定休 (営業日はInstagramで)、2025年11月30日グランドオープン、ライスパレット、カリナリーディレクターは京都「そ・かわひがし」の中東篤志 (コンセプト段階からメニュー開発)。食べログ: SOAN、カフェ・創作料理、木・金・土営業、月・火・水・日と祝日は休み、18時以降のディナーは特別営業、カード・電子マネー・QR可、20席、貸切20〜50名、禁煙、テイクアウト可、英語対応スタッフ、ヴィーガン・ベジタリアン対応、アレルギー表示あり。食べログのメニュー (2026年9月更新、英語): SOANのフォー (国産米粉麺、低温調理の鶏、自家製ハーブオイル) とアジア風卵かけご飯 (Awaji の卵) のセット1,650円、えびフォーのセット1,870円、ライスパレットのセット1,980円 (Iiyama の米)、Vegan Bún 1,760円 (夏の一品)、SOAN Bobun 1,870円、マンゴーチェー770円、自家製プリン550円。口コミ (2025〜2026年、英語): ライスパレットとお米のポタージュ、SOAN Bobun、鶏フォー、お弁当。',
      confidence: 'medium', sources: [SITE, TB, MENU, LEAF, R + 'B521568306/', R + 'B522226217/', R + 'B537432387/'] },
    cultural_comfort: { level: 'english', note: 'English-speaking staff (Tabelog); check Instagram for opening days.' },
    safety: { ...SAFETY0, positives: [{ text: 'A Vegan Bún labelled on the menu as for vegans (a summer dish; allergens wheat, soy, peanuts); Tabelog lists vegan and vegetarian options.', source: MENU, verified: TODAY }] },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区五条高倉堺町21 ジムキノウエダビルディング 1F 101',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog (menu updated September 2026); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.995861, 135.762667); not pin-checked by the worker; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU],
    price_note: 'Tabelog menu, tax included, updated September 2026.', last_checked: TODAY, items: [
      it('', '', 'SOAN pho and Asian-style tamago-kake-gohan set', '¥1,650', 'Lunch', 'ask', 'no', 'Rice noodles; allergens listed: eggs, chicken, seafood, peanuts.', 'pho'),
      it('', '', 'Shrimp pho and Asian-style egg rice set', '¥1,870', 'Lunch', 'ask', 'no', '', 'ebi_pho'),
      it('ライスパレット', '', 'Rice Palette set', '¥1,980', 'Lunch', 'no', 'no', 'Allergens listed include wheat.', 'rice_palette'),
      it('', '', 'Vegan Bún', '¥1,760', 'Lunch', 'no', 'vegan', 'Summer dish; allergens listed: wheat, soy, peanuts.', 'vegan_bun'),
      it('', '', 'SOAN Bobun', '¥1,870', 'Lunch', 'no', 'no', 'Summer special.', 'bobun'),
      it('', '', 'Mango chè', '¥770', 'Sweets', 'ask', 'ask', '', 'che'),
    ] }, {
    cuisine: 'お米を軸にしたカフェ・ギャラリーのランチ。メニューは「そ・かわひがし」の中東篤志と開発 (公式サイト)・国産米粉麺に低温調理の鶏と自家製ハーブオイルのSOANフォーに、Awaji の卵のアジア風卵かけご飯のセット1,650円、えびフォーのセット1,870円、Iiyama の米のライスパレットのセット1,980円 (食べログのメニュー)・10種の野菜だしのお米のポタージュ付きのライスパレット1,650円 (2026年1月)・夏の限定のSOAN Bobun 1,870円 (2026年10月の口コミ)・マンゴーのチェー、自家製プリン (食べログのメニュー)',
    neighborhood: '五条高倉',
    gf_detail: '要確認。フォーは国産の米粉麺で、プレーンと鶏のフォーのアレルギー表示は鶏と魚介のみで小麦の記載はない。Bobun、Vegan Bún、ライスパレットのセットは小麦を含む。グルテンフリーの表示やコンタミの情報はない (食べログのメニュー、2026年9月更新)。',
    vegan_detail: 'ヴィーガンの選択肢あり。黒酢だれの季節の野菜とハーブサラダの Vegan Bún (1,760円) はヴィーガン向けとメニューに明記、ただし夏の一品なので提供中か確認を。食べログにヴィーガン・ベジタリアン対応の表示。フォーのスープは鶏ガラ (食べログのメニュー、2026年9月更新)。',
    notes: '[カフェ・五条高倉、フォーとライスパレット] 全国の美味しいものを紹介する2025年開業のカフェ・ショップ・ギャラリー。米粉麺に低温調理の鶏のフォー、アジア風卵かけご飯、ライスパレットのセット、夏にはヴィーガンのブンも。英語対応のスタッフ。木〜土曜、Instagramで確認を。',
  });
}

// ================================================================ 口馳八丁 風屋杉原
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26002281/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://kazeyasugihara.com/';
  const H = day(['11:30', '13:30'], ['17:30', '22:00']);
  put({
    id: 'kyoto_kazeya_sugihara', name: '口馳八丁 風屋杉原 (Kazeya Sugihara)', category: 'OMNI',
    lat: 35.006925347867714, lng: 135.75793860038317, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sashimi, Saikyo-miso-grilled fish, tempura, fried dishes and set meals; no gluten information is published (official site; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish-focused izakaya; set meals come with miso soup (official site; reviews).',
    hours_raw: 'Lunch 11:30–13:30 (one part of the official site says 14:00; Tabelog 13:30), no lunch bookings; dinner 17:30–22:00 (last order 21:30); closed Sunday and Monday, with occasional other closures (official site; Tabelog). Phone bookings 14:00–22:00; courses must be booked three days ahead (official site). Payment: cash (official site); Tabelog lists QR payments, no cards. Counter, table seats, tatami room and private room (official site). All seats non-smoking (official site); Tabelog still lists smoking allowed. On Muromachi south of Rokkaku, near Hankyu Karasuma and subway Shijo (official site).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Shijo-Karasuma',
    cuisine: 'Fish izakaya with sake and about twenty shochu: sashimi platter, dashimaki, squid-ink yaki-somen with the okami’s homemade shibazuke, Saikyo-grilled sawara, tempura platter; an ōzara (large-platter) course from ¥5,500 and a kaiseki course from ¥6,600, plus drinks; hot pots in season (official site) · lunch sets: daily special ¥1,000 (July 2025), sashimi ¥1,200 (February 2026), seafood bowl ¥1,600 (May 2025), dashimaki and karaage sets (official site) · ankimo and shira-ae starters, fried new potatoes with squid shiokara, sansho-simmered sea bream, saba in Saikyo miso, seafood bowl (August 2025) · sashimi, fried ayu, Omi red shirataki, crab-cream croquette (January 2025)',
    website: SITE, gmaps: gm('口馳八丁 風屋杉原'), menu_url: SITE,
    notes: "[Izakaya · Shijo-Karasuma, fish and sake] A calm, grown-up izakaya past a reception area: counter, booths and tatami rooms. Lunch sets around ¥1,000–1,600 (seafood bowl, sashimi, dashimaki); at night sashimi, simmered and grilled fish, tempura, and courses from ¥5,500. Cash. Closed Sunday and Monday.",
    chef_bio: { chef_name: null, roles: ['Owner (not named)', 'Okami (not named; makes the shibazuke, official site)'], origin: null,
      background: 'A local izakaya on Muromachi focused on fish, sake from around Japan and about twenty shochu (official site). A January 2025 reviewer has come for seven or eight years, drawn by the owner’s personality.',
      philosophy: null,
      specialty: 'Sashimi platter; squid-ink yaki-somen with shibazuke.',
      anecdotes: [
        { text: 'An August 2025 diner booked the same day, found singing crickets on display by the entrance, and saw the counter and booths fill, mostly with older customers.', source: R + 'B187786859/' },
        { text: 'In January 2018 a New Year guest was surprised to be served o-toso to start.', source: R + 'B321903078/' },
        { text: 'A January 2025 New Year party noted that the all-you-can-drink option had ended.', source: R + 'B500938536/' },
      ],
      japanese_sources_summary: '公式サイト: 口馳八丁 風屋杉原 (かぜやすぎはら)、京都府京都市中京区室町通六角下ル鯉山町514 アトラクタービル1F、お昼11:30〜13:30 (別の箇所では14:00)、夜17:30〜22:00 (L.O.21:30)、日曜・月曜定休 (臨時休業あり)、予約受付14:00〜22:00、昼の予約不可、現金、全席禁煙、座敷・個室・カウンター、全国の厳選日本酒、焼酎約20種、お造り盛り合わせ、出し巻玉子、女将手作りの柴漬入りいかすみ焼そうめん、鰆西京焼き、天ぷら盛り合わせ、昼は日替わり定食・海鮮丼・お造り定食・出し巻定食・唐揚定食、大皿コース5,500円〜・会席コース6,600円〜 (税込、飲み物別、3日前までに電話予約)、季節により鍋も。食べログ: 居酒屋・寿司、火〜土 11:30〜13:30・17:30〜21:30、日・月休み、カード不可、QR決済可、喫煙可の表示。口コミ (2018〜2026年、英語): あん肝と白和え、新じゃがといかの塩辛の揚げもの、鯛の山椒煮、鯖の西京焼き、海鮮丼1,600円、日替わり定食1,000円、お造り定食1,200円、店主の人柄、入口に鳴く虫、お屠蘇、飲み放題は終了、奥の座敷。',
      confidence: 'medium', sources: [SITE, TB, R + 'B187786859/', R + 'B321903078/', R + 'B499862186/', R + 'B500938536/', R + 'B506346869/', R + 'B510871980/', R + 'B522400995/'] },
    cultural_comfort: { level: 'japanese', note: 'Book by phone; cash.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区室町通六角下ル鯉山町514 アトラクタービル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog; reviews dated through February 2026.' },
    pin_source: `Tabelog ${TB} (35.006925, 135.757939); not pin-checked by the worker; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [SITE, R + 'B506346869/', R + 'B510871980/', R + 'B522400995/'],
    price_note: 'Course prices from the official site (tax included, drinks extra); lunch prices from 2025–2026 reviews.', last_checked: TODAY, items: [
      it('大皿コース', '', 'Large-platter course (book 3 days ahead)', '¥5,500–', 'Courses', 'ask', 'no', '', 'ozara'),
      it('会席コース', '', 'Kaiseki course (book 3 days ahead)', '¥6,600–', 'Courses', 'ask', 'no', '', 'kaiseki'),
      it('海鮮丼', '', 'Seafood rice bowl', '¥1,600', 'Lunch', 'ask', 'no', 'May 2025.', 'kaisendon'),
      it('お造り定食', '', 'Sashimi set meal', '¥1,200', 'Lunch', 'ask', 'no', 'February 2026.', 'otsukuri_teishoku'),
      it('日替わり定食', '', 'Daily set meal', '¥1,000', 'Lunch', 'ask', 'no', 'July 2025.', 'higawari'),
      it('柴漬入りいかすみ焼そうめん', '', 'Squid-ink yaki-somen with homemade shibazuke', '', 'À la carte', 'no', 'no', '', 'yakisomen'),
    ] }, {
    cuisine: '日本酒と約20種の焼酎の魚の居酒屋。お造り盛り合わせ、出し巻玉子、女将手作りの柴漬入りいかすみ焼そうめん、鰆西京焼き、天ぷら盛り合わせ、大皿コース5,500円〜、会席コース6,600円〜 (飲み物別)、季節により鍋も (公式サイト)・昼の定食は日替わり1,000円 (2025年7月)、お造り1,200円 (2026年2月)、海鮮丼1,600円 (2025年5月)、出し巻や唐揚の定食 (公式サイト)・あん肝と白和えの先付、新じゃがといかの塩辛の揚げもの、鯛の山椒煮、鯖の西京焼き、海鮮丼 (2025年8月)・お造り、鮎の唐揚げ、Omi の赤いしらたき、かにクリームコロッケ (2025年1月)',
    neighborhood: '四条烏丸',
    gf_detail: '要確認。お造り、西京焼き、天ぷら、揚げもの、定食。グルテンの情報は公開されていない (公式サイト、口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚の居酒屋で、定食には味噌汁が付く (公式サイト、口コミ)。',
    notes: '[居酒屋・四条烏丸、魚と酒] 受付の奥にカウンター、ボックス席、座敷が続く落ち着いた大人の居酒屋。昼は海鮮丼やお造り、出し巻の定食が1,000〜1,600円ほど、夜はお造り、煮魚、焼き魚、天ぷら、5,500円からのコース。現金。日曜・月曜休み。',
  });
}

// ================================================================ 焼肉 天照杉
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26018889/'; const R = TB + 'dtlrvwlst/';
  const GN = 'https://r.gnavi.co.jp/kan5000/'; const GNM = GN + 'menu1/';
  const H = day(['17:00', '22:00']);
  put({
    id: 'kyoto_yakiniku_terusan', name: '焼肉 天照杉 (Yakiniku Terusan)', category: 'OMNI',
    lat: 35.01263099786656, lng: 135.76570018043535, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Marinated kalbi, yaki-shabu and yaki-suki, chijimi, cold noodles and stone-grilled bibimbap; no gluten information is published (gurunavi; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a beef yakiniku house (gurunavi).',
    hours_raw: '17:00–22:00 daily (last order 21:30), closed irregularly (Tabelog; gurunavi). Groups of 10 or more book by phone (Tabelog); private hire for up to 20 (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 38 seats: 4 at the counter, 18 at sunken kotatsu tatami seats, 16 at tables (Tabelog). The ground floor is non-smoking; the second floor is a smoking area, closed to under-20s and pregnant guests (Tabelog). Children welcome, with a children’s menu, tableware and chairs (Tabelog). Takeaway samgyetang, oxtail soup and yukgaejang (gurunavi). On Fuyacho south of Nijo, about 5 minutes from Kyoto Shiyakusho-mae exit 9 (Tabelog). Opened 17 October 2011 (Tabelog; gurunavi).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kyoto Shiyakusho-mae',
    cuisine: 'Yakiniku of selected Kyoto and Tamba beef with wine, in a hideaway-style house (gurunavi) · signature yaki-shabu ¥1,980, yaki-suki ¥1,980, pot-marinated aged kalbi with Kyoto vegetables and miso for wrapping ¥1,408, thick-cut rump; party courses from ¥4,000 (gurunavi) · beef tongue cut to the thickness you like, with mountain wasabi (November 2021) · cold noodles and chijimi (June 2024) · namul, squid-and-chive and seasonal jeon, wrap set (August 2023) · a course ending in stone-grilled bibimbap (February 2024) · about ¥5,000–6,000 a head (October 2026)',
    website: GN, gmaps: gm('焼肉 天照杉 麩屋町'), menu_url: GNM,
    notes: "[Yakiniku · Fuyacho-Nijo, Kyoto beef since 2011] A spacious house-style yakiniku restaurant with counter, sunken kotatsu tatami seats and tables: Kyoto and Tamba beef, the house yaki-shabu, pot-marinated kalbi to wrap in Kyoto vegetables, chijimi and cold noodles. Non-smoking downstairs; the upstairs floor allows smoking.",
    chef_bio: { chef_name: null, roles: ['Owner (not named)'], origin: null,
      background: 'Opened on 17 October 2011 (Tabelog; gurunavi). The house offers selected Kyoto-area beef — the gurunavi page variously says Kyotanba beef, Tamba wagyu and Kyoto beef — with wine, in an adult hideaway atmosphere (gurunavi).',
      philosophy: null,
      specialty: 'Yaki-shabu; pot-marinated aged kalbi.',
      anecdotes: [
        { text: 'An October 2026 diner came late after work, found the room quiet, and rated the meat fresh and varied, though the staff seemed a little low on energy.', source: R + 'B538050489/' },
        { text: 'A February 2024 farewell party took the second floor for a course that started with chuck-eye roll and ended with stone-grilled bibimbap.', source: R + 'B480686720/' },
        { text: 'A July 2024 visitor liked the white rice best and found the meat good but pricey for Kyoto, the kimchi portion small, and no raw-meat dishes.', source: R + 'B488961312/' },
      ],
      japanese_sources_summary: 'ぐるなび: 焼肉 天照杉 てるさん (ヤキニクテルサン)、大人の隠れ家的雰囲気、厳選した極上の京丹波牛 (別の箇所では丹波和牛、京都牛)、焼肉に合うワイン、2011年10月17日オープン、ディナー17:00〜22:00 (L.O.21:30)、不定休、38席、掘りごたつ席、天照杉の焼きしゃぶ1,980円、壺漬け熟成カルビ (包み京野菜＆味噌付) 1,408円、天照杉の焼すき1,980円、贅沢！厚切りランプ、宴会コース4,000円〜、テイクアウトはサムゲタン・テールスープ・ユッケジャンスープ。食べログ: 焼肉・韓国料理・居酒屋、京都市中京区麩屋町通り二条下る尾張町236-1、毎日17:00〜22:00、不定休、カード可、電子マネー・QR不可、38席 (カウンター4、掘りごたつ18、テーブル16)、1階禁煙・2階喫煙 (20歳未満と妊婦は不可)、10名以上は電話予約、貸切20名まで、子ども歓迎。口コミ (2021〜2026年、英語): 厚切りの肉、好みの厚さの牛タン、山わさび、冷麺、チヂミ、ナムル、いかとにらのチヂミ、石焼ビビンバの締め、白ご飯、価格は高め、店員の元気が今ひとつ (2026年10月)。',
      confidence: 'medium', sources: [GN, GNM, TB, R + 'B230337073/', R + 'B444341148/', R + 'B460709074/', R + 'B480686720/', R + 'B488961312/', R + 'B490975973/', R + 'B517246966/', R + 'B538050489/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ground floor non-smoking; upstairs allows smoking.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区麩屋町通二条下る尾張町236-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog and gurunavi listings; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.012631, 135.765700); not pin-checked by the worker; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [GNM, GN],
    price_note: 'Prices from the gurunavi menu (checked 2026-11-26).', last_checked: TODAY, items: [
      it('天照杉の焼きしゃぶ', '', 'House yaki-shabu (grilled thin-sliced beef)', '¥1,980', 'Yakiniku', 'ask', 'no', '', 'yakishabu'),
      it('天照杉の焼すき', '', 'House yaki-suki', '¥1,980', 'Yakiniku', 'ask', 'no', '', 'yakisuki'),
      it('壺漬け熟成カルビ', '', 'Pot-marinated aged kalbi with Kyoto vegetables and miso', '¥1,408', 'Yakiniku', 'ask', 'no', '', 'kalbi'),
      it('宴会コース', '', 'Party course', '¥4,000–', 'Courses', 'ask', 'no', '', 'course'),
    ] }, {
    cuisine: '京丹波牛など厳選した京都の牛の焼肉とワイン、大人の隠れ家の雰囲気 (ぐるなび)・名物の焼きしゃぶ1,980円、焼すき1,980円、包み京野菜と味噌付きの壺漬け熟成カルビ1,408円、厚切りランプ、宴会コース4,000円〜 (ぐるなび)・好みの厚さに切る牛タンと山わさび (2021年11月)・冷麺とチヂミ (2024年6月)・ナムル、いかとにらや季節のチヂミ、包みのセット (2023年8月)・石焼ビビンバで締めるコース (2024年2月)・1人5,000〜6,000円ほど (2026年10月)',
    neighborhood: '京都市役所前',
    gf_detail: '要確認。漬け込みのカルビ、焼きしゃぶ、焼すき、チヂミ、冷麺、石焼ビビンバ。グルテンの情報は公開されていない (ぐるなび、口コミ)。',
    vegan_detail: 'ヴィーガン不可。牛肉の焼肉 (ぐるなび)。',
    notes: '[焼肉・麩屋町二条、2011年からの京都の牛] カウンター、掘りごたつの座敷、テーブルの一軒家風の広い焼肉店。京都や丹波の牛、名物の焼きしゃぶ、京野菜で包む壺漬けカルビ、チヂミや冷麺。1階は禁煙、2階は喫煙可。',
  });
}

// ================================================================ 酒亭 笹蔵
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26002593/'; const R = TB + 'dtlrvwlst/';
  const SERAI = 'https://serai.jp/gourmet/253979/9';
  const FOODLE = 'https://foodle.pro/mitomiemon/meals/kyoto/sasakura-izakaya/50553';
  const H = day(['18:00', '23:00']);
  put({
    id: 'kyoto_shutei_sasakura', name: '酒亭 笹蔵', category: 'MOM_AND_POP',
    lat: 35.01134579786617, lng: 135.761911740425, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sashimi, fried turban shell with liver and butter-soy, plain yakisoba, karaage and curry rice bowls; no gluten information is published (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish-and-sake izakaya (reviews).',
    hours_raw: '18:00–23:00 (last order 22:00); may close early after 22:00, so call ahead; closed Tuesday (Tabelog; June 2025 review). In 2016: 17:30–22:00 last order, closed Tuesday (Serai, October 2016 issue). No prices on the menu (November 2024). Cash only (Tabelog; September 2026). Counter seating only (2024–2026 reviews); in 2016, 12 counter seats and 6 at a table (Serai). Booking recommended; full on a Friday in September 2026. Non-smoking (Tabelog). In a lane off Oike, about 5 minutes from Karasuma-Oike subway station (Tabelog), marked by a cedar ball (November 2025).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Karasuma-Oike',
    cuisine: 'Fish and sake at a small counter: the house specials are sazae karaage eaten three ways — the fried shellfish, then the liver with butter and soy, then the sauce over a little rice — and an unadorned yakisoba with a secret seasoning (2022–2026 reviews) · fresh octopus with sudachi, Mukawa shishamo, potato salad, salt-and-pepper kumoko (November 2025) · sashimi of the day: squid, sweet shrimp, sea bream; clam kimchi; salted tofu (September 2026) · Hakata nabe, fresh-wasabi rice, curry rice bowl (2024–2026 reviews) · in 2016: Yura red sea urchin ¥3,500, potato salad ¥600, chicken liver in sauce ¥600, plain yakisoba ¥700 (Serai)',
    website: null, gmaps: gm('酒亭 笹蔵 京都 高田町'), menu_url: SERAI,
    notes: "[Izakaya · Karasuma-Oike, a former sushi chef since about 1990] A Showa-era counter down a dim lane, run by an elderly couple: the owner, once a sushi chef and a sake sommelier, still buys and cuts the fish daily. Order the sazae three ways and the plain yakisoba. No prices on the menu; cash; book ahead. Closed Tuesday.",
    chef_bio: { chef_name: '西村陽三 (reading not sourced)', roles: ['Owner; former sushi chef (Serai, 2016)', 'Sake sommelier (November 2025 review; foodle, 2026)'], origin: null,
      background: 'A former sushi chef who had run the bar near Oike for 27 years at age 68 (Serai, October 2016 issue). Reviewers give the founding as 1990 and the owner’s age as 77 (November 2025; foodle, March 2026). Reviewers in October 2026 describe the shop as run by a couple, “an elderly couple”; a June 2025 reviewer thanks both the chef and the owner for the service.',
      philosophy: 'Daily sourcing; the fish of the day (2025 reviews).',
      specialty: 'Sazae karaage three ways; plain yakisoba.',
      anecdotes: [
        { text: 'Asked in November 2025 about the plain yakisoba, the owner laughed that the seasoning is a company secret.', source: R + 'B518102378/' },
        { text: 'A November 2024 group wandered in off the dim lane, found no prices on the menu, and paid about ¥6,000 each after a long spread.', source: R + 'B495079003/' },
        { text: 'An October 2026 diner who arrived at opening heard that a booking from overseas visitors was coming later.', source: R + 'B537706846/' },
      ],
      japanese_sources_summary: 'サライ (2016年10月号、2017年10月web掲載): 笹蔵、寿司職人だった西村陽三さん (68歳) が御池通近くで酒亭を始めて27年、由良の赤ウニ3,500円、ポテトサラダ600円、とり肝ソース漬け600円、素焼きそば700円、17時30分〜22時 (最終注文)、火曜定休、カウンター12席・テーブル6席、5,000円〜、予約が好ましい、京都市中京区御池通間ノ町上ル高田町509-4。foodle (2026年3月): 大将は今年77歳、元寿司職人で利き酒師、創業1990年、30年以上、生ダコ、本ししゃも、ポテトサラダ、ペッパーくもこ、サザエからあげ、素焼きそば。食べログ: 酒亭 笹蔵、居酒屋・海鮮・創作料理、月・水〜日 18:00〜23:00 (L.O.22:00)、22時以降は早じまいの場合あり、火曜定休、カード・電子マネー・QR不可、禁煙。口コミ (2022〜2026年、英語): 夫婦で営むカウンターだけの店、昭和レトロ、サザエの唐揚げを三通りで、素焼きそば、たこのお造り、お造り盛り合わせ、カレー丼、博多鍋、生わさびのご飯、ポテトサラダ、値段のないメニュー、現金のみ、金曜は満席。',
      confidence: 'medium', sources: [SERAI, FOODLE, TB, R + 'B355911602/', R + 'B458497544/', R + 'B495079003/', R + 'B503791140/', R + 'B509424195/', R + 'B518102378/', R + 'B536573214/', R + 'B537706846/'] },
    cultural_comfort: { level: 'japanese', note: 'No prices on the menu; cash only; book ahead.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区御池通間ノ町上ル高田町509-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.011346, 135.761912); not pin-checked by the worker; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [SERAI, FOODLE],
    price_note: 'No prices on the menu today (November 2024 review); 2016 prices from Serai.', last_checked: TODAY, items: [
      it('サザエからあげ', '', 'Sazae (turban shell) karaage, three ways', '', 'À la carte', 'ask', 'no', 'House special.', 'sazae'),
      it('素焼きそば', '', 'Plain yakisoba', '¥700', 'À la carte', 'no', 'no', '2016 price (Serai).', 'yakisoba'),
      it('ポテトサラダ', '', 'Potato salad', '¥600', 'À la carte', 'ask', 'ask', '2016 price (Serai).', 'potesara'),
      it('由良の赤ウニ', '', 'Yura red sea urchin', '¥3,500', 'À la carte', 'ask', 'no', '2016 price (Serai).', 'uni'),
    ] }, {
    cuisine: '小さなカウンターで魚と酒。名物はサザエの唐揚げを三通りで、まず身を、次に肝をバターと醤油で、最後にたれを小さなご飯に。それに秘伝の味付けの素焼きそば (2022〜2026年の口コミ)・すだちの生ダコ、本ししゃも、ポテトサラダ、ペッパーくもこ (2025年11月の口コミ、foodle)・いか、甘えび、鯛のお造り、貝のキムチ、塩豆腐 (2026年9月)・博多鍋、生わさびのご飯、カレー丼 (2024〜2026年の口コミ)・2016年は由良の赤ウニ3,500円、ポテトサラダ600円、とり肝ソース漬け600円、素焼きそば700円 (サライ)',
    neighborhood: '烏丸御池',
    gf_detail: '要確認。お造り、サザエの唐揚げとバター醤油の肝、素焼きそば、唐揚げ、カレー丼。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚と酒の居酒屋 (口コミ)。',
    notes: '[居酒屋・烏丸御池、1990年ごろからの元寿司職人の店] 薄暗い路地の昭和の雰囲気のカウンター、年配の夫婦の店。元寿司職人で利き酒師の大将が今も毎日魚を仕入れて切る。サザエの三通りと素焼きそばを。メニューに値段はなく現金のみ、予約を。火曜休み。',
  });
}

save();
