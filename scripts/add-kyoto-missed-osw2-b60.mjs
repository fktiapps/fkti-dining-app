// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 60.
//   Queue run from the osw2 worktree, 2026-11-07. Rest tier, nearest-first (queue.mjs kyoto-missed next rest 2000, lane ids by distance).
//   Rest rule: at least one 2025–26 review and enough sourced detail.
//   + 味乃家 Ajinoya (okonomiyaki on Ura-Teramachi since 1950; staff say no link to 味乃家 in Namba)
//   - 全席個室 鮨と酒日和 ととうお 四条河原町店 — chain (第一興商)
//   - ライブハウス都雅都雅 — no review since 2020; a live-music venue
//   + 海老バル キッチン origami Ebi Bar Kitchen origami (shrimp bar, Italian and creative, open to 1–2 am; since 2018)
//   - 台湾カステラ 黄白白 新京極店 — chain
//   - TOYOUKE STAND — franchise brand
//   - accent 京都河原町 — large restaurant parent (THAN, 26 brands / 60 shops)
//   + 由兵衛 Yoshibee (kappo for fugu in winter and hamo in summer, on Nishi-Ishigaki by the Kamo; founded 1935)
//   - 薄利多賣半兵ヱ 京都四条河原町店 — chain
//   + 京焼肉 蔵 寺町店 Kyo Yakiniku Kura (wagyu yakiniku on Teramachi by Shijo; since 2005; one of three restaurants of a Kyoto food company)
//   None of the four is in data/kyoto.json: grep by id, name and address. Brand names grepped in queue-status.jsonl: no earlier rulings.
//   Service charges: 由兵衛 10% in private rooms only; 京焼肉 蔵 an appetizer fee of ¥418 (both Tabelog).
//   Remarks about other diners kept only where several reviews agree.
//   Pins: Tabelog /en/ point, cross-checked with GSI only (由兵衛 resolves as 斎藤町, the GSI spelling); no offsets needed — all 11 m+ from every pin on main.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-60');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26040639', '全席個室 鮨と酒日和 ととうお 四条河原町店: a chain of a large parent — run by 株式会社第一興商; its press releases (2025–2026) list Akihabara, Kyoto, Yokohama, Shin-Marunouchi, Sendai and Meieki shops');
skip('26015973', 'ライブハウス都雅都雅: a live-music venue; its latest Tabelog review is from 2020 — no 2025–26 review, not drafted');
skip('26035509', '台湾カステラ 黄白白 新京極店: a chain — the official site (fan-pai-pai.com, read 2026-11-07) lists 12 shops (Shinsaibashi, Osu, Shinkyogoku, Nara, Hiroshima, Shibuya, Fukuoka and more)');
skip('26040603', 'TOYOUKE STAND: a franchise brand — the official site (toyouke-stand.jp, read 2026-11-07) recruits franchisees and lists a Hong Kong head shop and a Melbourne opening besides the Kyoto Kawaramachi stand');
skip('26039751', 'accent 京都河原町: a brand of a large restaurant parent — 株式会社THAN (than.co.jp/brands, read 2026-11-07) runs 26 brands and 60 shops, 630 staff');
skip('26019051', '薄利多賣半兵ヱ 京都四条河原町店: a chain — Showa-retro izakaya brand with shops in Niigata, Chiba, Yamagata, Saitama, Sendai and Toyama (Tabelog official listings; job ads)');

// ================================================================ 味乃家
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26011389/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '21:30']);
  put({
    id: 'kyoto_ajinoya_urateramachi', name: '味乃家 (Ajinoya)', category: 'OMNI',
    lat: 35.00482860787233, lng: 135.7682293903548, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: wheat-batter okonomiyaki and negiyaki, yakisoba and yaki udon (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: okonomiyaki with pork, squid or shrimp, finished with bonito flakes (reviews).',
    hours_raw: '12:00–21:30 (last order 21:00); closed Thursday (Tabelog). No reservations. Cash only — no cards or e-money (Tabelog; January 2025). 36 seats at nine 4-seat tables with teppan; non-smoking (Tabelog). No children — the hot teppan is close at every seat; no strollers or large suitcases (Tabelog). Staff cook the okonomiyaki on your table’s teppan; yakisoba arrives cooked (2024–2026 reviews). Often full at dinner, with a queue outside (2025 reviews). On Ura-Teramachi-dori near Shinkyogoku, opposite a hotel, 2 min from Kyoto Kawaramachi Stn (Tabelog; January 2025).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Ura-Teramachi, near Shinkyogoku and Shijo — 2 min from Kyoto Kawaramachi Stn',
    cuisine: 'Okonomiyaki shop founded in 1950 (July 2026 review) · pork or squid okonomiyaki ¥1,000 (January 2025; April 2026); add yakisoba noodles ¥300 (April 2026) · "Kyoto-style" negiyaki with Kujo green onion, served with soy sauce ¥1,400 (July 2026) · natto okonomiyaki, shrimp, mixed, "modern-yaki" with noodles; yakisoba, yaki udon, grilled oysters (2024–2026 reviews) · a sweet sauce and a chilli-hot sauce on the table; mayonnaise ¥50 extra (2025–2026) · bottled Asahi, medium ¥700, large ¥780',
    website: null, gmaps: gm('味乃家 裏寺町 京都'), menu_url: TB,
    notes: "[Okonomiyaki · Ura-Teramachi, a 1950s griddle house] An old-school okonomiyaki shop on the back lane behind Shinkyogoku, founded in 1950 and no relation to the Namba Ajinoya. Staff cook pork or squid okonomiyaki (about ¥1,000) on your table's griddle; try the Kyoto-style negiyaki with Kujo onion and soy sauce. Cash only; no children; closed Thursday.",
    chef_bio: { chef_name: null, roles: ['Owner not named'], origin: null,
      background: 'A July 2026 reviewer says the shop was founded in 1950 and, asking the staff, was told it has no connection with 味乃家 in Namba, Osaka. Reviewers (2024–2026) describe a long-established shop with plastic food samples outside and teppan at every table.',
      philosophy: null,
      specialty: 'Kyoto-style negiyaki with Kujo green onion and soy sauce.',
      anecdotes: [
        { text: 'A July 2026 Namba fan came to ask whether the two Ajinoya are related, and was told the two are unrelated.', source: R + 'B531018970/' },
        { text: 'A February 2025 visitor from Tohoku, escaping the cold, mixed the soy sauce and the table sauce half and half on the negiyaki.', source: R + 'B501995604/' },
        { text: 'A March 2025 diner tried natto okonomiyaki for the first time.', source: R + 'B503927570/' },
      ],
      japanese_sources_summary: '食べログ: 味乃家、お好み焼き・焼きそば・居酒屋、京都市中京区裏寺町通四条上る裏寺町607、市バス「四条河原町」・阪急京都河原町駅から徒歩約2分、12:00〜21:30 (L.O.21:00)、木曜定休、予約不可、カード・電子マネー不可、36席 (4人掛けテーブル9卓)、禁煙、鉄板が近く火傷の危険があるため子ども不可、ベビーカー・大きな荷物不可。口コミ (2024〜2026年、英語): 1950年創業の老舗 (2026年に76年)、難波の味乃家とは関係ないと店員の話、店頭に食品サンプル、スタッフがテーブルの鉄板で焼く、豚といかのお好み焼き1,000円、そばのトッピング300円、京風ねぎ焼き (九条ねぎ、醤油) 1,400円、納豆のお好み焼き、モダン焼き、焼きそば、焼うどん、焼き牡蠣、甘口と激辛のソース、マヨネーズ50円、瓶ビール中700円・大780円、現金払い、夜は満席で外に待ちも。',
      confidence: 'low', sources: [TB, R + 'B494659712/', R + 'B497407182/', R + 'B499259335/', R + 'B499307759/', R + 'B499445757/', R + 'B501995604/', R + 'B503927570/', R + 'B515999938/', R + 'B520259305/', R + 'B526030378/', R + 'B531018970/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only; staff cook at your table; no children.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区裏寺町通四条上る裏寺町607',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.004829, 135.768229); cross-checked: GSI 京都府京都市中京区裏寺町607番地 (lot) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B499307759/', R + 'B526030378/', R + 'B531018970/'],
    price_note: 'Prices from January 2025, April 2026 and July 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Pork okonomiyaki', '¥1,000', 'Okonomiyaki', 'no', 'no', 'Cooked by staff at your table.', 'buta'),
      it('', '', 'Squid okonomiyaki', '¥1,000', 'Okonomiyaki', 'no', 'no', '', 'ika'),
      it('', '', 'Yakisoba topping', '¥300', 'Okonomiyaki', 'no', 'no', 'Added to an okonomiyaki.', 'soba_topping'),
      it('', '', 'Kyoto-style negiyaki (Kujo green onion, soy sauce)', '¥1,400', 'Okonomiyaki', 'no', 'no', '', 'negiyaki'),
      it('', '', 'Mayonnaise', '¥50', 'Extras', 'ask', 'no', '', 'mayo'),
      it('', '', 'Beer, medium bottle', '¥700', 'Drink', 'no', 'ask', '', 'beer_m'),
    ] }, {
    cuisine: '1950年創業のお好み焼き屋 (2026年7月の口コミ)・豚といかのお好み焼き1,000円 (2025年1月、2026年4月)、そばのトッピング300円 (2026年4月)・九条ねぎを使い醤油で食べる京風ねぎ焼き1,400円 (2026年7月)・納豆、えび、ミックス、モダン焼き、焼きそば、焼うどん、焼き牡蠣 (2024〜2026年の口コミ)・卓上に甘口と激辛のソース、マヨネーズは50円 (2025〜2026年)・アサヒの瓶ビール中700円、大780円',
    neighborhood: '裏寺町、新京極と四条の近く。京都河原町駅から徒歩2分',
    gf_detail: 'グルテンフリー不可。小麦の生地のお好み焼きとねぎ焼き、焼きそば、焼うどん (口コミ)。',
    vegan_detail: 'ヴィーガン不可。豚、いか、えびのお好み焼き、かつお節をかける (口コミ)。',
    notes: '[お好み焼き・裏寺町、1950年からの鉄板の店] 新京極の裏通り、1950年創業の昔ながらのお好み焼き屋。難波の味乃家とは無関係。豚やいかのお好み焼き (1,000円ほど) をスタッフがテーブルの鉄板で焼いてくれる。九条ねぎと醤油の京風ねぎ焼きも。現金のみ、子ども不可、木曜休み。',
  });
}

// ================================================================ 海老バル キッチン origami
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26031543/'; const R = TB + 'dtlrvwlst/';
  const WK = day(['18:00', '01:00']), SA = day(['18:00', '02:00']);
  put({
    id: 'kyoto_ebi_bar_origami', name: '海老バル キッチン origami (Ebi Bar Kitchen origami)', category: 'OMNI',
    lat: 35.00464708652885, lng: 135.77004303927652, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Shrimp shabu-shabu, sashimi, ajillo with baguette, tempura, gratin and pasta; no gluten information is published (Tabelog menu; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a shrimp restaurant with meat and cheese dishes (Tabelog menu).',
    hours_raw: '18:00–01:00 Sunday–Friday (food last order 24:00, drinks 00:30); Saturday and holiday eves 18:00–02:00 (food last order 01:00) (Tabelog). Reservations taken; a separate menu for shrimp allergy on request (Tabelog). Cards and PayPay accepted (Tabelog). 36 seats: a 10-seat counter on the 1st floor, five tables and a 6-person semi-private room on the 2nd; a smoking room on the 2nd floor (Tabelog). Shrimp shabu-shabu is for two or more (September 2026). Narrow entrance on Nishikiyamachi north of Shijo, 2 min from Kawaramachi Stn (Tabelog; September 2026).',
    hours: { 0: WK, 1: WK, 2: WK, 3: WK, 4: WK, 5: SA, 6: WK }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nishikiyamachi, north of Shijo — 2 min from Kyoto Kawaramachi Stn',
    cuisine: 'Shrimp bar with Italian and creative dishes, opened November 2018 (Tabelog) · red shrimp shabu-shabu ¥2,178 with porridge or cheese risotto to finish; shrimp sashimi tasting, five kinds ¥2,035; sweet shrimp yukhoe ¥1,100; large red shrimp ajillo ¥1,430 (Tabelog menu, December 2025) · shrimp tempura, chilli shrimp, gratin, shrimp peperoncino, yakitori-style skewers and chicken wings (2025–2026 reviews) · courses with all-you-can-drink, e.g. ¥6,500 (April 2026), lobster course ¥8,000 (Tabelog)',
    website: null, gmaps: gm('海老バル キッチン origami 京都'), menu_url: TB + 'dtlmenu/',
    notes: "[Shrimp bar · Nishikiyamachi, red-shrimp shabu-shabu late] A two-floor shrimp bar off the Shijo end of Nishikiyamachi, open till 1 am (2 am Saturdays). Red-shrimp shabu-shabu (about ¥2,200, for two or more) ends in a rich porridge or cheese risotto; also shrimp sashimi from around the world, ajillo and tempura. A separate menu for shrimp allergies.",
    chef_bio: { chef_name: null, roles: ['Owner not named'], origin: null,
      background: 'Opened in November 2018 (Tabelog). Reviewers (2025–2026) describe a shrimp-focused bar with a 1st-floor counter and tables upstairs, also serving meats and skewers; popular for groups and late second rounds.',
      philosophy: null,
      specialty: 'Red shrimp shabu-shabu.',
      anecdotes: [
        { text: 'A June 2025 family of four women came for a shrimp feast and ordered extra shrimp for the hot pot.', source: R + 'B518204732/' },
        { text: 'A September 2026 shrimp lover had passed the door countless times before finally going in.', source: R + 'B536127481/' },
        { text: 'A February 2026 second-round guest was surprised to find meat dishes too, and liked the shrimp peperoncino.', source: R + 'B522314485/' },
      ],
      japanese_sources_summary: '食べログ: 海老バル キッチン origami、イタリアン・創作料理・海鮮、京都市中京区紙屋町372-1、阪急河原町駅から徒歩2分、京阪祇園四条駅から徒歩3分、日〜金 18:00〜翌1:00、土・祝前日 18:00〜翌2:00、予約可、海老アレルギーの方には別メニュー、カード・PayPay可、36席 (1階カウンター10席、2階テーブル5卓と半個室)、2階に喫煙室、2018年11月8日オープン。メニュー (2025年12月): 赤海老しゃぶしゃぶ2,178円 (締めは雑炊かチーズリゾット)、世界の海老の刺身5種2,035円、甘海老の塩ユッケ1,100円、大きな赤海老のアヒージョ1,430円、ロブスターのコース8,000円。口コミ (2025〜2026年、英語): 海老天、海老チリ、グラタン、海老のペペロンチーノ、焼き鳥、手羽先、飲み放題付きコース6,500円、海老しゃぶは2人から、入口は狭い。',
      confidence: 'low', sources: [TB, TB + 'dtlmenu/', R + 'B508681604/', R + 'B514568070/', R + 'B518204732/', R + 'B520561691/', R + 'B521673496/', R + 'B522314485/', R + 'B524717795/', R + 'B527059418/', R + 'B535999892/', R + 'B536127481/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cards accepted; open late.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区紙屋町372-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing (menu updated December 2025); reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.004647, 135.770043); cross-checked: GSI 京都府京都市中京区紙屋町372番地 (lot) 22m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB + 'dtlmenu/'],
    price_note: 'Prices from the Tabelog menu (updated December 2025, tax included).', last_checked: TODAY, items: [
      it('', '', 'Red shrimp shabu-shabu (5 red shrimp, tofu, vegetables)', '¥2,178', 'Signature', 'ask', 'no', 'Finish with egg porridge or cheese risotto; two or more.', 'shabu'),
      it('', '', 'Shrimp sashimi tasting, five kinds', '¥2,035', 'Sashimi', 'ask', 'no', '', 'sashimi5'),
      it('', '', 'Sweet shrimp yukhoe with salt', '¥1,100', 'Sashimi', 'ask', 'no', '', 'yukhoe'),
      it('', '', 'Red shrimp tartare', '¥1,408', 'Sashimi', 'ask', 'no', '', 'tartare'),
      it('', '', 'Large red shrimp ajillo (with baguette)', '¥1,430', 'Ajillo', 'no', 'no', '', 'ajillo'),
      it('', '', 'Chicken wing kara-age', '¥880', 'Antipasto', 'ask', 'no', '', 'wings'),
    ] }, {
    cuisine: '海老が主役のイタリアンと創作料理のバル、2018年11月開業 (食べログ)・赤海老しゃぶしゃぶ2,178円、締めは雑炊かチーズリゾット、世界の海老の刺身5種2,035円、甘海老の塩ユッケ1,100円、大きな赤海老のアヒージョ1,430円 (食べログのメニュー、2025年12月)・海老天、海老チリ、グラタン、海老のペペロンチーノ、焼き鳥、手羽先 (2025〜2026年の口コミ)・飲み放題付きコース、たとえば6,500円 (2026年4月)、ロブスターのコース8,000円 (食べログ)',
    neighborhood: '西木屋町、四条の北。京都河原町駅から徒歩2分',
    gf_detail: '要確認。海老しゃぶ、刺身、バゲット付きのアヒージョ、天ぷら、グラタン、パスタ。グルテンの情報は公開されていない (食べログのメニュー、口コミ)。',
    vegan_detail: 'ヴィーガン不可。海老の店で、肉やチーズの料理もある (食べログのメニュー)。',
    notes: '[海老バル・西木屋町、夜遅くまで赤海老しゃぶ] 西木屋町の四条近く、2階建ての海老のバル。夜1時まで (土曜は2時)。赤海老のしゃぶしゃぶ (2,200円ほど、2人から) は濃い出汁の雑炊かチーズリゾットで締め。世界の海老の刺身、アヒージョ、天ぷらも。海老アレルギーには別メニュー。',
  });
}

// ================================================================ 由兵衛
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26002785/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://yoshibe.com/';
  const H = day(['12:00', '15:00'], ['17:30', '22:30']);
  put({
    id: 'kyoto_yoshibe', name: '由兵衛 (Yoshibee)', category: 'OMNI',
    lat: 35.00343263488177, lng: 135.77080457177027, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Fugu and hamo courses with sashimi, ponzu, hot pot, fried dishes and rice porridge; no gluten information is published (official site; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fugu, hamo and seasonal fish courses (official site).',
    hours_raw: 'Lunch 12:00–15:00 (last order 14:00), dinner 17:30–22:30 (last order 22:00); closing days not fixed (Tabelog). The official site gives 11:30–15:00 and 17:00–22:30 — check. Reservations taken; often fully booked (Tabelog; February 2025). Cards accepted (Tabelog; official site). 10% service charge in private rooms only (Tabelog). 35 seats: counter and tatami rooms on two floors, parties up to 25; shoes off; English menu; designated smoking area (Tabelog; official site; October 2024). Down a lane off Shijo just west of the Kamo River bridge, near Minami-za, 3 min from Kawaramachi or Gion-Shijo Stn (official site; Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishi-Ishigaki, between the Kamo and Takase rivers by Shijo Ohashi — 3 min from Gion-Shijo Stn',
    cuisine: 'Kappo founded in 1935: hamo (pike conger) in summer, fugu in winter (official site) · seasonal Kyoto kaiseki of about eight dishes to your budget (official site) · fugu courses of sashimi (tessa), grilled and fried fugu, hot pot, grilled and raw shirako, ending in zosui — Matsu course ¥18,000 (January 2026); hire-zake lit at the table (2024–2026) · hamo courses with sashimi, tempura, hamo shabu-shabu and somen or zosui (2025–2026)',
    website: SITE, gmaps: gm('由兵衛 京都 西石垣'), menu_url: SITE + '?page_id=44',
    notes: "[Fugu & hamo kappo · Shijo Ohashi, since 1935] A family-run kappo tucked between the Kamo and Takase rivers by Shijo bridge, serving fugu in winter and hamo in summer since 1935. The fugu course runs from tessa sashimi and creamy shirako to hot pot and zosui (about ¥18,000); try the flaming fin sake. Counter or tatami; shoes off.",
    chef_bio: { chef_name: null, roles: ['Owner-chef and proprietress not named'], origin: null,
      background: 'The official site says the first-generation owner founded the restaurant in 1935 (Showa 10) and it has been loved by locals for more than 80 years. Reviewers (2024–2026) describe a head chef working with the proprietress and staff, and an August 2026 diner chatted with the owner, the owner’s wife and mother; a February 2026 diner was served natural fugu from Shimonoseki.',
      philosophy: null,
      specialty: 'Fugu courses in winter; hamo in summer.',
      anecdotes: [
        { text: 'A December 2024 lunch guest noticed fugu fins hung outside to dry.', source: R + 'B496688102/' },
        { text: 'A February 2026 diner celebrating passing a national exam praised the teamwork of the head chef and the friendly proprietress.', source: R + 'B522673795/' },
        { text: 'An August 2026 husband booked a hamo dinner for a wife’s birthday after hamo caught the wife’s eye on TV.', source: R + 'B534603240/' },
      ],
      japanese_sources_summary: '公式サイト: 割烹・ふぐ料理 京都 由兵衛、京都市下京区西石垣通四条下ル斉藤町118、鴨川と高瀬川に挟まれた静かな佇まい、昭和10年に初代が創業して80年余り、夏季は鱧、冬季はふぐ、季節の京会席コース (全8品程度、付き出し2品、お造り3種盛、お吸い物、焼き物、焚き合わせ、油物、季節のご飯、水物、御予算に応じる)、営業時間11:30〜15:00・17:00〜22:30 (L.O.22:00)、不定休、35席 (宴会25名まで)、カード可。食べログ: ふぐ・日本料理、12:00〜15:00・17:30〜22:30、個室のみ飲食代の10%、英語メニュー、持ち込み可。口コミ (2024〜2026年、英語): 南座の近く、四条大橋の手前の細い路地、靴を脱ぐ、カウンターと座敷、2階、ふぐのコース (てっさ、焼きふぐ、唐揚げ、ふぐ鍋、白子焼き、白子の刺身、雑炊)、松コース18,000円、ひれ酒、下関の天然とらふぐ、鱧しゃぶ、鱧の天ぷら、締めはそうめんか雑炊、大将と女将とスタッフの連携、店主と奥さんとお母さん。',
      confidence: 'medium', sources: [SITE, SITE + '?page_id=44', SITE + '?page_id=55', TB, R + 'B496688102/', R + 'B502094176/', R + 'B512830715/', R + 'B515127847/', R + 'B520951624/', R + 'B522673795/', R + 'B522721529/', R + 'B531458220/', R + 'B533545841/', R + 'B534603240/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu; cards accepted; shoes off.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区西石垣通四条下ル斉藤町118',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.003433, 135.770805); cross-checked: GSI 京都府京都市下京区斎藤町118番地 (lot) 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [SITE + '?page_id=44', R + 'B520951624/'],
    price_note: 'Course price from a January 2026 review; the official site prices kaiseki courses to budget.', last_checked: TODAY, items: [
      it('', '', 'Fugu Matsu course (sashimi, a choice of grilled fugu, grilled shirako or kara-age, hot pot, zosui)', '¥18,000', 'Courses', 'ask', 'no', 'Winter.', 'fugu_matsu'),
      it('', '', 'Seasonal Kyoto kaiseki course (about eight dishes)', '', 'Courses', 'ask', 'no', 'Priced to your budget.', 'kaiseki'),
      it('', '', 'Hamo course (sashimi, tempura, hamo shabu-shabu, somen or zosui)', '', 'Courses', 'ask', 'no', 'Summer.', 'hamo'),
      it('', '', 'Hire-zake (fugu fin sake)', '', 'Drink', 'ask', 'no', 'Lit at the table.', 'hirezake'),
    ] }, {
    cuisine: '1935年創業の割烹。夏は鱧、冬はふぐ (公式サイト)・予算に応じる8品ほどの季節の京会席 (公式サイト)・ふぐのコース: てっさ、焼きふぐと唐揚げ、ふぐ鍋、焼き白子と白子の刺身、締めは雑炊。松コース18,000円 (2026年1月)、目の前で火をつけるひれ酒 (2024〜2026年)・鱧のコース: 刺身、天ぷら、鱧しゃぶ、締めはそうめんか雑炊 (2025〜2026年)',
    neighborhood: '西石垣、四条大橋のたもと、鴨川と高瀬川の間。祇園四条駅から徒歩3分',
    gf_detail: '要確認。ふぐと鱧のコース、刺身、ポン酢、鍋、揚げ物、雑炊。グルテンの情報は公開されていない (公式サイト、口コミ)。',
    vegan_detail: 'ヴィーガン不可。ふぐ、鱧、季節の魚のコース (公式サイト)。',
    notes: '[ふぐと鱧の割烹・四条大橋、1935年創業] 四条大橋のたもと、鴨川と高瀬川の間にひっそりある家族の割烹。1935年から冬はふぐ、夏は鱧。ふぐのコースはてっさととろける白子からふぐ鍋、雑炊まで (18,000円ほど)。火をつけるひれ酒も。カウンターか座敷、靴を脱いで。',
  });
}

// ================================================================ 京焼肉 蔵 寺町店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26014299/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.bal-flower.co.jp/fd/teramachi.html';
  const H = day(['11:30', '14:00'], ['17:00', '22:30']);
  put({
    id: 'kyoto_kyo_yakiniku_kura_teramachi', name: '京焼肉 蔵 寺町店 (Kyo Yakiniku Kura)', category: 'OMNI',
    lat: 35.00351755801134, lng: 135.76692377904857, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Yakiniku with soy, miso and sesame seasonings, kimchi, bibimbap and soups; no gluten information is published (Tabelog menu; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a yakiniku restaurant. Kimchi, namul and grilled vegetables are on the menu — ask (Tabelog menu).',
    hours_raw: 'Lunch 11:30–14:00 (last order 13:30), dinner 17:00–22:30 (last order 22:00), daily (Tabelog). Reservations taken. Cards, e-money and QR accepted (Tabelog). Appetizer fee ¥418 (Tabelog). 44 seats (4 at the counter, 40 at tables) over two floors; non-smoking; children and strollers welcome; English and Chinese menus (Tabelog; 2025–2026 reviews). Lunch sets come with a free large rice and free oolong tea; no horumon at lunch (2024–2025 reviews). Meat is cooked on a flat griddle, not a grill (October 2025). In an old storehouse-style building on Teramachi just south of Shijo, near Takashimaya, by exit 10 of Kyoto Kawaramachi Stn (Tabelog; January 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Teramachi, just south of Shijo — 1 min from Kyoto Kawaramachi Stn exit 10',
    cuisine: 'Wagyu yakiniku in a townhouse-style room, opened 2005 (Tabelog) · kuroge wagyu six-cut platter ¥4,928, three-cut ¥3,278; Kyoto beef loin ¥1,188; karubi or skirt ¥858; karubi under Kujo green onion ¥3,278 (half ¥1,958); thin beef tongue with sesame oil and scallions ¥1,738 (Tabelog menu, June 2026) · horumon from ¥858, e.g. Saikyo-miso large intestine; kimchi ¥638 (Tabelog menu) · lunch sets — steak, karubi, yakiniku, karubi rice bowl, yukgaejang — with rice from 八代目儀兵衛 (2024–2026 reviews) · course with all-you-can-drink ¥6,500 (Tabelog)',
    website: SITE, gmaps: gm('京焼肉 蔵 寺町店'), menu_url: TB + 'dtlmenu/',
    notes: "[Yakiniku · Teramachi by Shijo, wagyu at fair prices] A two-floor yakiniku house in a former storehouse on Teramachi, a step from Takashimaya. Kuroge wagyu platters, Kyoto beef and horumon at evening prices from under ¥1,000 a plate; lunch sets of steak or karubi with free large rice. Open daily, with English and Chinese menus.",
    chef_bio: { chef_name: null, roles: ['Owner not named'], origin: null,
      background: 'Opened in October 2005 (Tabelog). Run by Bal Flower (バルフラワー), a Kyoto food company whose site lists two Italian restaurants (クアトロ) besides 蔵 寺町店, along with a frozen-food division (bal-flower.co.jp, read 2026-11-07). The shop describes a calm room in a former storehouse.',
      philosophy: null,
      specialty: 'Kuroge wagyu six-cut assorted platter.',
      anecdotes: [
        { text: 'An April 2025 visitor, finding famous yakiniku places full or too dear, ate tongue, skirt, rib and hoso here for under ¥5,000.', source: R + 'B505285237/' },
        { text: 'A January 2026 diner found reasonable lunch prices even on New Year’s Day, when nearby places charged tourist prices.', source: R + 'B520832716/' },
        { text: 'A November 2026 first-timer was drawn in by yukgaejang on the menu board outside.', source: R + 'B538444491/' },
      ],
      japanese_sources_summary: '食べログ: 京焼肉 蔵 寺町店、焼肉・ホルモン・韓国料理、京都市下京区寺町通貞安前之町609、阪急河原町駅10番出口すぐ、11:30〜14:00 (L.O.13:30)・17:00〜22:30 (L.O.22:00)、予約可、カード・電子マネー・QR可、お通し代418円、44席 (カウンター4、テーブル40)、禁煙、子ども可、英語・中国語メニュー、2005年10月1日オープン、運営はバルフラワー (公式サイトにイタリアン クアトロ2店と蔵 寺町店)。メニュー (2026年6月): 黒毛和牛6種盛り4,928円、3種盛り3,278円、京都牛ロース1,188円、カルビ・ハラミ858円、九条ねぎをのせたカルビ3,278円、ごま油とねぎの薄切り牛タン1,738円、西京味噌味の大腸858円、キムチ638円、飲み放題付きコース6,500円。口コミ (2024〜2026年、英語): ランチの焼肉定食、ステーキ定食、カルビ丼、ユッケジャン、八代目儀兵衛のお米、ご飯大盛り無料、ウーロン茶無料、ランチにホルモンはない、鉄板で焼く、2階もある、髙島屋の近く。',
      confidence: 'low', sources: [TB, TB + 'dtlmenu/', SITE, R + 'B494874248/', R + 'B496934080/', R + 'B503464088/', R + 'B505285237/', R + 'B507093573/', R + 'B508268262/', R + 'B515251398/', R + 'B520832716/', R + 'B525066269/', R + 'B536495331/', R + 'B538444491/'] },
    cultural_comfort: { level: 'english', note: 'English and Chinese menus; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区寺町通貞安前之町609',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing (menu updated June 2026); reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.003518, 135.766924); cross-checked: GSI 京都府京都市下京区貞安前之町609番地 (lot) 91m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB + 'dtlmenu/'],
    price_note: 'Prices from the Tabelog menu (updated June 2026, tax included).', last_checked: TODAY, items: [
      it('', '', 'Kuroge wagyu six-cut assorted platter', '¥4,928', 'Wagyu', 'ask', 'no', '', 'six_cut'),
      it('', '', 'Kuroge wagyu three-cut assorted platter', '¥3,278', 'Wagyu', 'ask', 'no', '', 'three_cut'),
      it('', '', 'Kyoto beef loin', '¥1,188', 'Meat', 'ask', 'no', '', 'kyoto_loin'),
      it('', '', 'Japanese beef karubi', '¥858', 'Meat', 'ask', 'no', '', 'karubi'),
      it('', '', 'Outside skirt', '¥858', 'Meat', 'ask', 'no', '', 'harami'),
      it('', '', 'Thin beef tongue with sesame oil and scallions', '¥1,738', 'Meat', 'ask', 'no', '', 'tongue'),
      it('', '', 'Saikyo-miso large intestine', '¥858', 'Horumon', 'ask', 'no', '', 'shimacho'),
      it('', '', 'Assorted grilled vegetables', '¥638', 'Grill', 'ask', 'ask', '', 'veg'),
      it('', '', 'Napa cabbage kimchi', '¥638', 'Kimchi', 'ask', 'ask', '', 'kimchi'),
    ] }, {
    cuisine: '町家風の店の和牛焼肉、2005年開業 (食べログ)・黒毛和牛6種盛り4,928円、3種盛り3,278円、京都牛ロース1,188円、カルビ・ハラミ858円、九条ねぎをのせたカルビ3,278円 (ハーフ1,958円)、ごま油とねぎの薄切り牛タン1,738円 (食べログのメニュー、2026年6月)・ホルモン858円から、たとえば西京味噌味の大腸、キムチ638円 (食べログのメニュー)・ステーキ、カルビ、焼肉、カルビ丼、ユッケジャンのランチ定食、お米は八代目儀兵衛 (2024〜2026年の口コミ)・飲み放題付きコース6,500円 (食べログ)',
    neighborhood: '寺町、四条のすぐ南。京都河原町駅10番出口から徒歩1分',
    gf_detail: '要確認。醤油、味噌、ごま油の味付けの焼肉、キムチ、ビビンバ、スープ。グルテンの情報は公開されていない (食べログのメニュー、口コミ)。',
    vegan_detail: 'ヴィーガン不可。焼肉店。キムチ、ナムル、焼き野菜はある、要確認 (食べログのメニュー)。',
    notes: '[焼肉・寺町の四条、手頃な和牛] 髙島屋のすぐそば、寺町の蔵を活かした2階建ての焼肉店。黒毛和牛の盛り合わせ、京都牛、ホルモンは夜も1皿1,000円以下から。昼はステーキやカルビの定食、ご飯大盛り無料。毎日営業、英語と中国語のメニュー。',
  });
}

save();
