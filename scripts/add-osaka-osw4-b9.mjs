// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first; worker osw4 (lane: Tabelog id mod 4 = 3), batch 9.
//   + あっちち本舗 道頓堀店 Acchichi Honpo Dotonbori (takoyaki on cast iron by the river, 9:00 until 2:00 or 3:00)
//   + 和牛料理 要 Wagyu Ryori Kaname (A5 wagyu stone grill and motsunabe in renovated Showa row houses, 150 seats)
//   + うな茂 Una Shige (Kansai-style eel grilled without steaming; sister of the fugu house ふぐ茂)
//   + 魚屋ひでぞう 別館 Sakanaya Hidezou Bekkan (fish-shop izakaya annex in Ura-Namba)
//   Chain check: Acchichi Honpo: this Dotonbori shop and a main shop elsewhere (search snippets, not opened; the
//   listing says nothing), not in data. Kaname: one shop found in the crawl. Una Shige: one eel shop, sister to a fugu
//   restaurant (official site). Hidezou: an annex of 魚屋ひでぞう, which an August 2026 reviewer says has many branches;
//   none of the Hidezou shops is in data. None of the four is in data/osaka.json (grep by name, Tabelog id and address,
//   2026-11-02).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw4-9');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ あっちち本舗 道頓堀店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27051667/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.acchichi.com/';
  const N = day(['09:00', '02:00']), L = day(['09:00', '03:00']);
  put({
    id: 'osaka_acchichi_honpo_dotonbori', name: 'あっちち本舗 道頓堀店 (Acchichi Honpo Dotonbori)', category: 'OMNI',
    lat: 34.669249, lng: 135.503208, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: takoyaki is a wheat batter, with sauce and soy-sauce toppings; no gluten-free option described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: octopus takoyaki in a dashi batter, topped with bonito flakes.',
    hours_raw: 'Sun–Fri and holidays 9:00–2:00; Sat and the day before a holiday 9:00–3:00 (Tabelog). Reservations accepted but seats not guaranteed; reservations get priority (Tabelog). Queues at peak times: about 15 minutes in October 2026, a long line at 17:00 in September 2026. Buy a ticket at the register and hand it over; self-service eat-in (August–September 2026). Cash only (Tabelog; October 2026 review). 40 seats: a counter of 12 and tables, plus 12 terrace seats on the riverside walk, and a cool eat-in floor below street level (Tabelog; September 2026); non-smoking; children welcome (Tabelog).',
    hours: { 0: N, 1: N, 2: N, 3: N, 4: N, 5: L, 6: N }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Souemoncho 7-19, on the Dotonbori riverside east of Ebisubashi, by Ichiran — 10 min from Nippombashi Stn',
    cuisine: 'Takoyaki cooked on a cast-iron plate rather than copper, for a thin crisp skin and a soft centre, with fresh, never-frozen octopus from the central market and sauce from the shop\'s own factory in Higashi-Osaka (Tabelog shop text) · 8 pieces ¥800 (October 2026); a September 2026 diner counted 9 pieces a plate · flavours: soy-sauce mayonnaise with free green onion, the most popular (Tabelog), sauce and mayonnaise, salt, ponzu, plain (2026 reviews) · takoyaki and a drink set ¥1,200, beer, Corona or a soft drink (August–October 2026) · free soft drinks for preschool children (October 2026) · sake and shochu',
    website: SITE, gmaps: gm('あっちち本舗 道頓堀店'), menu_url: null,
    notes: '[Takoyaki · Dotonbori riverside, until 2 or 3 a.m.] A takoyaki counter on the Dotonbori river walk, east of the Ebisubashi bridge and its Glico sign, that cooks on cast iron rather than copper so the balls come out with a thin crisp shell and a molten centre around a piece of fresh, never-frozen octopus. Order the soy-sauce mayo with green onion (the house favourite) or the classic sauce and mayo; 8 for ¥800, or ¥1,200 with a beer (October 2026). Buy a ticket at the register; eat on the riverside terrace, at the counter or in the cool room below. Expect a short queue in the evening; cash only; open from 9:00 to 2:00 or 3:00.',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per the Tabelog shop text: three commitments, to the cast-iron plate (harder to use than copper), to fresh octopus from the central market, never frozen, and to the dashi and a sauce made in the company\'s factory in Higashi-Osaka. A September 2026 diner first found it some 20 years earlier as a lesser-known stand and has since seen it gain long queues.', philosophy: 'Commitment to the iron plate, the octopus, and the dashi and sauce (Tabelog shop text).', specialty: 'Soy-sauce mayo takoyaki with green onion; cast-iron takoyaki.',
      anecdotes: [
        { text: '"As a local, I was curious about the fact that these takoyaki are cooked on an old-fashioned teppan rather than copper … the outside was well-cooked, though not exactly crispy, while the inside remained wonderfully gooey." — October 2026.', source: R + 'B537486635/' },
        { text: '"About 20 years ago … I discovered Acchichi Honpo and bought their takoyaki. I still can\'t forget the taste of their salt-flavored takoyaki." — September 2026.', source: R + 'B535995715/' },
        { text: '"What I appreciated the most was that there were air-conditioned eat-in seats available on the basement floor." — September 2026, after a long line at 5 PM.', source: R + 'B536869700/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): あっちち本舗 道頓堀店、たこ焼き・居酒屋・お好み焼き、大阪市中央区宗右衛門町7-19、日本橋駅から徒歩10分、日〜金・祝9:00〜翌2:00、土・祝前日9:00〜翌3:00、予約可 (席の確保は保証できない、予約の人を優先)、カード・電子マネー・QR不可、40席 (カウンター12、テーブル28、テラス12)、禁煙、子ども可、戎橋のGlico の看板から東へ、橋のたもとの一蘭のところ、こだわり: 銅板ではなく技術のいる鉄板で焼き、外は薄くカリッと中はとろり、中央市場の生のタコで冷凍しない、出汁とHigashi-Osakaの自社工場で作るソース、一番人気はねぎ無料の醤油マヨ。口コミ(2026年8月〜10月): 8個800円、9個だったという口コミも、ソースマヨ、塩、ポン酢、たこ焼きと飲み物のセット1,200円、レジで食券、セルフサービス、地下に涼しいイートイン、未就学児はソフトドリンク無料、夕方は行列、現金のみ、海外の客が多い。',
      confidence: 'medium', sources: [TB, SITE, R + 'B533136414/', R + 'B533799632/', R + 'B534391177/', R + 'B535834564/', R + 'B535995715/', R + 'B536039206/', R + 'B536621618/', R + 'B536752218/', R + 'B536831187/', R + 'B536869700/', R + 'B536992270/', R + 'B537486635/', R + 'B538011153/', R + 'B538317927/', R + 'B538445814/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Buy a ticket at the register and serve yourself; many overseas customers (October 2026). No English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区宗右衛門町7-19',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区宗右衛門町7番19号 (go) 16m. たこ家道頓堀くくる 宗右衛門町店 (osaka_takoya_kukuru_souemoncho, 宗右衛門町7-18 B1F) is 9 m away at the next house number; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B538011153/', R + 'B536752218/', R + 'B535834564/'],
    price_note: 'Prices from October 2026 reviews (cash); one September 2026 diner counted 9 pieces a plate, others 8.', last_checked: TODAY, items: [
      it('', '', 'Takoyaki, 8 pieces (sauce-mayo, soy-mayo with green onion, salt, ponzu or plain)', '¥800', 'Takoyaki', 'no', 'no', 'October 2026 reviews.', 'takoyaki_8'),
      it('', '', 'Takoyaki and drink set', '¥1,200', 'Sets', 'no', 'no', 'August–October 2026 reviews.', 'takoyaki_drink_set'),
    ] }, {
    cuisine: '銅板ではなく鉄板で焼くたこ焼き、外は薄くカリッと中はとろり、中央市場の冷凍しない生のタコ、Higashi-Osakaの自社工場のソース (食べログの店の紹介)・8個800円 (2026年10月)、2026年9月の口コミでは1皿9個・味は一番人気のねぎ無料の醤油マヨ (食べログ)、ソースマヨ、塩、ポン酢、プレーン (2026年の口コミ)・たこ焼きと飲み物 (ビール、Corona、ソフトドリンク) のセット1,200円 (2026年8〜10月)・未就学児はソフトドリンク無料 (2026年10月)・日本酒、焼酎',
    neighborhood: '宗右衛門町7-19、戎橋の東の道頓堀川沿い、一蘭のそば。日本橋駅から徒歩10分',
    gf_detail: '実質グルテンフリーではありません。たこ焼きは小麦の生地で、ソースや醤油をかける。グルテンフリーの選択肢の説明はない。',
    vegan_detail: 'ヴィーガンではありません。出汁の生地にタコを入れたたこ焼きで、かつお節をのせる。',
    notes: '[たこ焼き・道頓堀の川沿い、深夜2時か3時まで] 戎橋とGlico の看板の東、道頓堀の川沿いの遊歩道にあるたこ焼き店。銅板ではなく鉄板で焼くので、皮は薄くカリッと、中はとろりとして、冷凍しない生のタコが入る。頼むならねぎの醤油マヨ (店の一番人気) か定番のソースマヨで、8個800円、ビールつきで1,200円 (2026年10月)。レジで食券を買い、川沿いのテラス、カウンター、下の階の涼しい部屋で食べる。夕方は少し並ぶ。現金のみ。朝9時から深夜2時か3時まで。',
  });
}

// ================================================================ 和牛料理 要
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27004659/'; const R = TB + 'dtlrvwlst/';
  const L = ['11:30', '14:00'], D = ['17:30', '22:30'];
  const WD = day(L, D), SA = day(D);
  put({
    id: 'osaka_wagyu_ryori_kaname_minamikyuhoji', name: '和牛料理 要 (Wagyu Ryori Kaname)', category: 'OMNI',
    lat: 34.678904, lng: 135.499143, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The motsunabe comes in soy, miso or salt broth and finishes with ramen; the lunch has hamburg steak, beef katsu and menchi katsu; the stone-grilled wagyu is eaten with sesame and salt, but nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: wagyu stone grill, horumon and motsunabe; kimchi and vegetables are the only plant dishes mentioned.',
    hours_raw: 'Mon–Fri lunch 11:30–14:00 (last order 13:30); Mon–Sat dinner 17:30–22:30 (last order 22:00); closed Sunday and holidays, Golden Week, Obon and New Year (Tabelog). Reservations accepted, recommended at lunch, when a few groups wait for the 11:30 opening (Tabelog; September 2026). Ordering by tablet (October 2026). Cards (VISA, Master, JCB, AMEX, Diners) and PayPay; no e-money (Tabelog). 150 seats in renovated Showa-era row houses, with fully private rooms for 2 to over 30, tatami and sunken seating; non-smoking, smoking area outside (Tabelog; 2026 reviews).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: SA }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Minamikyuhojimachi 4-3-1, renovated Showa row houses between Shinsaibashi and Honmachi — 5 min from Shinsaibashi Stn exit 3',
    cuisine: 'A5 female black wagyu cooked on a hot stone ("ishiyaki") and motsunabe, in private rooms (Tabelog shop text) · "Mahoroba" course: A5 black-wagyu stone-grilled steak 70 g and motsunabe ¥4,730, or with 120 minutes of free drinks (Tabelog; September 2026) · other courses named by diners: Kirameki, Kaname (with yukke), a yakiniku course with stone-grilled bibimbap to finish (2026) · motsunabe in soy, miso or salt broth, seasonal shijimi motsunabe (September 2026), ramen to finish · stone-grilled wagyu wrapped with green onion and eaten with sesame and salt · clay-pot rice and corn rice (order early), Tsurumi-bashi kimchi · lunch: Kaname Gozen ¥2,000 with 70 g of black-wagyu steak, beef stew and hamburg, limited to five a day (October 2026); hamburg steak set ¥1,320; beef katsu, menchi katsu · sake, shochu and wine',
    website: null, gmaps: gm('和牛料理 要 南久宝寺町'), menu_url: null,
    notes: '[Wagyu · Minamikyuhojimachi, a Showa row-house complex] A wagyu restaurant set in renovated Showa-era row houses between Shinsaibashi and Honmachi, where you are led through the lanes to tatami or sunken private rooms. Dinner is the stone grill of A5 black wagyu, which you cook yourself and eat wrapped in green onion with sesame and salt, followed by a motsunabe in soy, miso or salt and ramen to finish; the "Mahoroba" course of both is ¥4,730 (with a drinks option). Lunch is hamburg, beef katsu or the five-a-day Kaname Gozen (¥2,000 in October 2026). Popular for business dinners; book ahead.',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per the Tabelog shop text: a renovated Showa-era townhouse; A5 female black wagyu and the best meat available at the time; wines and local sake; fully private rooms for business meetings and anniversaries. A September 2026 diner was led through a passage to a separate building beside a private house.', philosophy: null, specialty: 'A5 wagyu stone grill; motsunabe.',
      anecdotes: [
        { text: '"Limited to just 5 servings of this elusive bento. … featuring a generous 70g of Kuroge Wagyu steak" — October 2026, the Kaname Gozen for JPY 2,000.', source: R + 'B536991681/' },
        { text: '"I enjoyed wrapping it in green onions and savoring it with sesame and salt, which allowed me to fully appreciate the flavor of the meat." — September 2026.', source: R + 'B535791316/' },
        { text: '"Entering this extraordinary space, which feels like it\'s in the middle of Honmachi and Shinsaibashi, I was guided to a private room in a traditional Japanese house." — October 2026, the yakiniku course.', source: R + 'B537839103/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 和牛料理 要、牛料理・もつ鍋・ステーキ、大阪市中央区南久宝寺町4-3-1、心斎橋駅3番出口から徒歩5分、本町駅15番出口から徒歩5分、月〜金11:30〜14:00 (L.O. 13:30)、月〜土17:30〜22:30 (L.O. 22:00)、日曜・祝日休み、GW・お盆・年末年始休み、予約可、カード・PayPay 可、150席、完全個室 (2名から30名以上)、座敷、掘りごたつ、禁煙 (外に喫煙所)、昭和の町家を改装、A5の黒毛和牛の雌の石焼き、もつ鍋、Mahoroba コース (黒毛和牛の石焼きステーキ70gともつ鍋) 4,730円、120分飲み放題つきも。口コミ(2024年3月〜2026年10月): 醤油・味噌・塩のもつ鍋、季節のしじみもつ鍋、締めのラーメン、石焼きの和牛をねぎで巻いてごま塩で、土鍋ご飯、とうもろこしご飯、Tsurumi-bashi のキムチ、石焼ビビンバ、ランチの Kaname Gozen 2,000円は1日5食、ハンバーグ定食1,320円、牛カツ、メンチカツ、タブレットで注文、商談に人気。',
      confidence: 'medium', sources: [TB, R + 'B482125008/', R + 'B486994428/', R + 'B535277930/', R + 'B535776369/', R + 'B535791316/', R + 'B536372927/', R + 'B536452254/', R + 'B536479283/', R + 'B536557113/', R + 'B536991681/', R + 'B537053681/', R + 'B537169793/', R + 'B537839103/', R + 'B538036915/', R + 'B538207589/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Courses booked online; order by tablet; you grill the stone-grilled wagyu yourself (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南久宝寺町4-3-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南久宝寺町四丁目3番1号 (go) 6m. No other record in data within 25 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B536991681/', R + 'B537169793/'],
    price_note: 'Course price from the Tabelog listing (tax included); lunch prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', '"Mahoroba" course: A5 wagyu stone-grilled steak 70 g and motsunabe', '¥4,730', 'Course', 'ask', 'no', 'Tabelog listing; also with 120 minutes of free drinks.', 'mahoroba_course'),
      it('', '', 'Kaname Gozen (lunch, five a day): wagyu steak 70 g, beef stew, hamburg', '¥2,000', 'Lunch', 'ask', 'no', 'October 2026 review.', 'kaname_gozen'),
      it('', '', 'Hamburg steak set (lunch)', '¥1,320', 'Lunch', 'no', 'no', 'October 2026 review.', 'hamburg_set'),
      it('', '', 'Motsunabe (soy, miso or salt)', '', 'Hot pot', 'ask', 'no', 'September 2026 reviews.', 'motsunabe'),
    ] }, {
    cuisine: '石で焼くA5の黒毛和牛の雌と、もつ鍋を個室で (食べログの店の紹介)・Mahoroba コース: A5黒毛和牛の石焼きステーキ70gともつ鍋で4,730円、120分飲み放題つきも (食べログ、2026年9月)・口コミに出てくるほかのコース: Kirameki、ユッケつきの Kaname、締めが石焼ビビンバの焼肉コース (2026年)・もつ鍋は醤油、味噌、塩、季節のしじみもつ鍋 (2026年9月)、締めのラーメン・石焼きの和牛はねぎで巻いてごま塩で・土鍋ご飯ととうもろこしご飯 (早めに注文を)、Tsurumi-bashi のキムチ・ランチ: 黒毛和牛のステーキ70g、ビーフシチュー、ハンバーグの Kaname Gozen 2,000円は1日5食 (2026年10月)、ハンバーグ定食1,320円、牛カツ、メンチカツ・日本酒、焼酎、ワイン',
    neighborhood: '南久宝寺町4-3-1、心斎橋と本町の間の改装した昭和の長屋。心斎橋駅3番出口から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。もつ鍋は醤油、味噌、塩で締めはラーメン、ランチにはハンバーグ、牛カツ、メンチカツもある。石焼きの和牛はごま塩で食べるが、グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではありません。和牛の石焼き、ホルモン、もつ鍋。植物性のものはキムチと野菜くらい。',
    notes: '[和牛・南久宝寺町、昭和の長屋] 心斎橋と本町の間、改装した昭和の長屋の和牛料理店で、路地を案内されて座敷や掘りごたつの個室へ。夜はA5の黒毛和牛の石焼きを自分で焼き、ねぎで巻いてごま塩で。そのあと醤油、味噌、塩から選ぶもつ鍋と締めのラーメン。両方入った Mahoroba コースは4,730円 (飲み放題つきも)。ランチはハンバーグ、牛カツ、1日5食の Kaname Gozen (2026年10月は2,000円)。商談にも人気なので予約を。',
  });
}

// ================================================================ うな茂
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27001823/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.fugushige.sakura.ne.jp/unashige.htm';
  const WD = day(['11:00', '22:00']), SA = day(['11:00', '21:00']);
  put({
    id: 'osaka_una_shige_bakuromachi', name: 'うな茂 (Una Shige)', category: 'OMNI',
    lat: 34.678287, lng: 135.50529, cuisine_type: 'unagi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Kabayaki and the eel bowls are glazed in a soy-based tare; the premium kabayaki can be ordered white-grilled (shirayaki) without tare (official menu), but nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an eel restaurant; even the rolled omelette and the soup contain eel.',
    hours_raw: 'Mon–Fri 11:00–22:00; Sat 11:00–21:00; closed Sunday and holidays (Tabelog). Tabelog says no reservations, though a July 2026 diner phoned ahead on the Day of the Ox; full at lunch at weekends (August 2026). Bento and take-out of bowls, sets and dishes, sold outside the door at busy times (official site; July 2026). Cards (JCB, AMEX, Diners), PayPay and Rakuten Pay; no e-money (Tabelog). 40 seats: a counter, tables and a tatami room; non-smoking; children welcome (Tabelog). Moved from 博労町2-2-4 in August 2009 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: SA }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Bakuromachi 2-3-11, at the corner of Hakuromachi-dori — about 7 min (427 m) from Nagahoribashi Stn',
    cuisine: 'Kansai-style eel, chosen for size and freshness and grilled without steaming, turned many times for a crisp outside and soft inside (official site) · prices from the official menu, tax included: Una Shige set ¥2,160 (eel bowl, uzaku, eel omelette, liver soup, pickles) · unagi set ¥3,530 (kabayaki with rice or as a bowl, uzaku, simmered liver, eel omelette, liver soup) · kabayaki set ¥5,220 (adds carp sashimi) · eel bowls 松 ¥3,960, 竹 ¥2,810, 梅 ¥1,820 · à la carte: premium kabayaki ¥3,240 (or white-grilled), regular kabayaki ¥2,120, yawata-maki ¥1,690, carp sashimi ¥830, simmered liver ¥770, fried bones ¥410, uzaku ¥1,410, grilled liver ¥830, eel omelette ¥770, eel-omelette bento ¥2,810 · hot pots in winter by reservation · beer ¥550',
    website: SITE, gmaps: gm('うな茂 博労町'), menu_url: SITE,
    notes: '[Unagi · Bakuromachi, Kansai-style eel at a fair price] A plain eel house in Bakuromachi, sister to the fugu restaurant ふぐ茂, that grills its eel the Kansai way, without steaming, turning it until the skin crisps. The Una Shige set (¥2,160) is the one regulars order every month: an eel bowl with an eel omelette the size of an inkstone box, uzaku and a rich liver soup; the ¥3,530 set adds kabayaki. Open all afternoon on weekdays, so it is easy outside the lunch rush, and the bowls and bento are sold to take away. One September 2026 diner waited over 20 minutes while the owner was on the phone; most 2026 visitors found it generous and good value. Closed Sundays.',
    chef_bio: { chef_name: null, roles: ['Owner, unnamed (September 2026 review)'], origin: null, background: 'Per the official site of ふぐ茂: うな茂 is the sister eel shop of the fugu and hamo restaurant ふぐ茂, grilling carefully chosen eel Kansai-style without steaming. It moved to its current address in August 2009 (Tabelog). A September 2026 diner waited over 20 minutes for an order while the owner talked on the phone at the counter.', philosophy: null, specialty: 'Una Shige set; eel omelette (umaki).',
      anecdotes: [
        { text: '"It was huge—almost the size of a suzuribako (inkstone)! The fluffy egg was packed with eel" — September 2026, the Una Shige set for JPY 2,160.', source: R + 'B447489416/' },
        { text: '"I come here every month!" — October 2026, a fifth visit, the Una Shige set with its rich liver soup.', source: R + 'B522779724/' },
        { text: '"They kindly served the grilled eel liver as an appetizer before the set meal arrived." — July 2026.', source: R + 'B31319839/' },
      ],
      japanese_sources_summary: '公式サイト (ふぐ茂の姉妹店): うなぎ料理専門店「うな茂」、大きさと鮮度を厳選したうなぎを蒸さずに焼く関西風、何度も返して焼き上げた香ばしさと中のやわらかさ、蒲焼定食5,220円、うなぎ定食3,530円、うな茂定食2,160円、鰻丼 松3,960円・竹2,810円・梅1,820円、上蒲焼3,240円 (白焼可)、並蒲焼2,120円、八幡巻1,690円、鯉の洗い830円、肝煮770円、骨唐揚410円、うざく1,410円、肝焼き830円、う巻770円、うまき弁当2,810円、税込、持ち帰り可、冬は鍋 (予約のみ)、ビール550円。食べログ: 大阪市中央区博労町2-3-11、月〜金11:00〜22:00、土11:00〜21:00、日曜・祝日休み、予約不可、カード (JCB・AMEX・Diners)・PayPay・楽天ペイ可、40席、カウンターと座敷、禁煙、2009年8月に博労町2-2-4から移転。口コミ(2026年7月〜10月): 硯箱ほどの大きなう巻、肝吸い、土用の丑の日は電話で確認、店の外で弁当、量が多くお得、オーナーの電話で20分以上待ったという口コミも。',
      confidence: 'medium', sources: [TB, SITE, R + 'B31319839/', R + 'B447489416/', R + 'B522779724/', R + 'B532847905/', R + 'B532935544/', R + 'B533023082/', R + 'B533138614/', R + 'B533191323/', R + 'B533681455/', R + 'B534000825/', R + 'B534040654/', R + 'B534704875/', R + 'B534929641/', R + 'B537208666/', R + 'B538475923/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A short menu of eel sets and bowls; easy for solo diners (August 2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区博労町2-3-11',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (not shop-maintained) and the official site of its sister ふぐ茂; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区博労町二丁目3番11号 (go) 10m. No other record in data within 25 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'high', sources: [SITE, R + 'B447489416/', R + 'B534704875/'],
    price_note: 'Prices from the official site (tax included), matched by July–September 2026 reviews (Una Shige set ¥2,160, unagi set ¥3,530, kabayaki set ¥5,220).', last_checked: TODAY, items: [
      it('うな茂定食', '', 'Una Shige set: eel bowl, uzaku, eel omelette, liver soup, pickles', '¥2,160', 'Sets', 'ask', 'no', 'Official menu.', 'unashige_teishoku'),
      it('うなぎ定食', '', 'Unagi set: kabayaki with rice or as a bowl, uzaku, simmered liver, eel omelette, liver soup', '¥3,530', 'Sets', 'ask', 'no', 'Official menu.', 'unagi_teishoku'),
      it('蒲焼定食', '', 'Kabayaki set with carp sashimi', '¥5,220', 'Sets', 'ask', 'no', 'Official menu.', 'kabayaki_teishoku'),
      it('鰻丼 梅', '', 'Eel bowl, ume', '¥1,820', 'Bowls', 'ask', 'no', 'Official menu; 竹 ¥2,810, 松 ¥3,960.', 'unadon_ume'),
      it('上蒲焼（白焼可）', '', 'Premium kabayaki (white-grilled possible)', '¥3,240', 'À la carte', 'ask', 'no', 'Official menu.', 'jo_kabayaki'),
      it('う巻', '', 'Eel omelette', '¥770', 'À la carte', 'ask', 'no', 'Official menu.', 'umaki'),
    ] }, {
    cuisine: '大きさと鮮度を選んだうなぎを蒸さずに焼く関西風、何度も返して外は香ばしく中はやわらか (公式サイト)・値段は公式サイト、税込: うな茂定食2,160円 (鰻丼、うざく、う巻、肝吸い、漬物)・うなぎ定食3,530円 (蒲焼とご飯か鰻丼、うざく、肝煮、う巻、肝吸い)・蒲焼定食5,220円 (鯉の洗いつき)・鰻丼 松3,960円、竹2,810円、梅1,820円・一品: 上蒲焼3,240円 (白焼も可)、並蒲焼2,120円、八幡巻1,690円、鯉の洗い830円、肝煮770円、骨唐揚410円、うざく1,410円、肝焼き830円、う巻770円、うまき弁当2,810円・冬は鍋 (予約のみ)・ビール550円',
    neighborhood: '博労町2-3-11、博労町通りの角。長堀橋駅から427m',
    gf_detail: '要確認。グルテンの情報なし。蒲焼と鰻丼は醤油ベースのタレ。上蒲焼はタレなしの白焼にもできる (公式メニュー) が、グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではありません。うなぎの店で、う巻や吸い物にもうなぎが入る。',
    notes: '[うなぎ・博労町、手頃な関西風] 博労町の飾らないうなぎ屋で、ふぐ料理のふぐ茂の姉妹店。うなぎは関西風に蒸さずに焼き、皮が香ばしくなるまで何度も返す。常連が毎月頼むのはうな茂定食 (2,160円) で、鰻丼に硯箱ほどのう巻、うざく、濃い肝吸い。3,530円の定食なら蒲焼もつく。平日は昼から夜まで通しで開いているので昼のピークを外しやすく、丼や弁当の持ち帰りもある。2026年9月にはオーナーの電話で20分以上待ったという人もいたが、2026年の多くの客は量が多くお得と評価。日曜休み。',
  });
}

// ================================================================ 魚屋ひでぞう 別館
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27102291/'; const R = TB + 'dtlrvwlst/';
  const W = day(['17:00', '23:00']), SU = day(['15:00', '23:00']);
  put({
    id: 'osaka_sakanaya_hidezou_bekkan_sennichimae', name: '魚屋ひでぞう 別館 (Sakanaya Hidezou Bekkan)', category: 'OMNI',
    lat: 34.664179, lng: 135.504189, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Sashimi is the core of the menu, but there are simmered fish, fried fugu, tempura and kara-age, and soy and ponzu throughout; nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood izakaya; Manganji peppers, water eggplant and corn tempura are among the few plant dishes mentioned.',
    hours_raw: 'Mon and Wed–Sat 17:00–23:00; Sun 15:00–23:00; closed Tuesday (Tabelog). Reservations accepted, and often needed at peak times, though same-day calls and early walk-ins have found seats (2026 reviews); 2.5-hour limit (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR; no service charge (Tabelog). 70 seats over several floors, counter and tables, no private rooms; a fourth-floor bar (Tabelog; 2026 reviews); non-smoking (Tabelog).',
    hours: { 0: W, 2: W, 3: W, 4: W, 5: W, 6: SU }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba Sennichimae 4-19, 2F, in Ura-Namba — 4 min from Nankai Namba Stn',
    cuisine: 'Seafood izakaya of a fish dealer with trading rights at the Eastern Market, which supplies more than 100 restaurants and fish shops (Tabelog shop text) · sashimi platters of five or seven kinds, e.g. seared sawara, bluefin tuna (2026) · simmered kinmedai, grilled kanpachi collar, grilled sawara, sanma in autumn · raw oysters, oysters with ponzu, octopus with ponzu · fried fugu, fried conger eel, corn tempura, kara-age · tuna Caesar salad, fluffy cream cheese, Manganji peppers, water eggplant · clam-dashi chazuke to finish · courses with free drinks (Tabelog) · Sapporo Lager Akaboshi, Carlsberg draft, sake and shochu',
    website: null, gmaps: gm('魚屋ひでぞう 別館'), menu_url: null,
    notes: '[Seafood izakaya · Ura-Namba, the fishmonger\'s annex] The sit-down annex of 魚屋ひでぞう, the hard-to-book fishmonger\'s izakaya in Namba, round the corner in Ura-Namba, with seats over several floors. The fish comes from the company\'s own market business, so start with the sashimi platter (five or seven kinds), then simmered kinmedai, a grilled collar, oysters with ponzu or fried fugu, and the clam-dashi chazuke to finish. Prices are moderate: about ¥3,000–6,000 a head in 2026. Book, or try a same-day call or an early arrival at 17:00; stays are 2.5 hours. Closed Tuesdays.',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per the Tabelog shop text: Hidezou is a fish shop with rights to trade at the Eastern Market, supplying fresh seafood to over 100 restaurants and fish shops; the annex opened in Ura-Namba for people who cannot get a booking at Hidezo Namba. An August 2026 diner notes Hidezou has many branches; an October 2026 diner found its standing bar closed twice and came here instead.', philosophy: null, specialty: 'Sashimi platters; clam-dashi chazuke.',
      anecdotes: [
        { text: '"I hadn\'t made a reservation in advance, but on a whim, I called in the evening on the same day and was lucky enough to get a table." — October 2026, a fourth visit.', source: R + 'B497061858/' },
        { text: '"The clam dashi chazuke had an amazing broth that made me want to have it again" — September 2026, a five-kind sashimi platter on the third floor.', source: R + 'B535159765/' },
        { text: '"Some items took so long to serve that I wondered if they had been forgotten." — September 2026.', source: R + 'B535814470/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 魚屋ひでぞう 別館、魚介料理・居酒屋・鍋、大阪市中央区難波千日前4-19 2F、南海なんば駅から徒歩4分、月・水〜土17:00〜23:00、日15:00〜23:00、火曜休み、予約可、2時間半制、カード可、電子マネー・QR不可、サービス料なし、70席、個室なし、禁煙、Eastern Market の売買参加権を持つ魚屋で100以上の飲食店や魚屋に卸す、予約の取りにくい魚屋ひでぞう なんばの別館、4階はバー、飲み放題つきのコース。口コミ(2026年8月〜10月): 刺身の盛り合わせ5種と7種、炙りサワラ、本マグロ、キンメダイの煮付け、カンパチのカマ焼き、サンマ、生牡蠣、牡蠣ポン酢、タコポン酢、ふぐのkara-age、アナゴの揚げ物、とうもろこしの天ぷら、kara-age、マグロのシーザーサラダ、クリームチーズ、万願寺とうがらし、水なす、あさり出汁の茶漬け、Sapporo Lager Akaboshi、2階と3階の席、当日の電話や早い時間なら入れることも、料理が遅い日も、ひとり3,000〜6,000円ほど。',
      confidence: 'medium', sources: [TB, R + 'B497061858/', R + 'B501921926/', R + 'B519358817/', R + 'B533504476/', R + 'B534431838/', R + 'B534700602/', R + 'B534705812/', R + 'B534939933/', R + 'B535159765/', R + 'B535368585/', R + 'B535814470/', R + 'B536392426/', R + 'B537468814/', R + 'B537569568/', R + 'B538187315/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A long à la carte list of fish dishes; book ahead at peak times (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波千日前4-19 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波千日前4番19号 (go) 11m. No other record in data within 25 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B519358817/', R + 'B535159765/'],
    price_note: 'No prices seen in the sources read; items from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Sashimi platter (five or seven kinds)', '', 'Sashimi', 'ask', 'no', 'August–October 2026 reviews.', 'sashimi_moriawase'),
      it('', '', 'Simmered kinmedai', '', 'Fish', 'ask', 'no', 'September 2026 review.', 'kinmedai_nitsuke'),
      it('', '', 'Oysters with ponzu', '', 'Fish', 'ask', 'no', 'August and October 2026 reviews.', 'kaki_ponzu'),
      it('', '', 'Fried fugu', '', 'Fried', 'no', 'no', 'October 2026 review.', 'fugu_karaage'),
      it('', '', 'Clam-dashi chazuke', '', 'Rice', 'ask', 'no', 'September 2026 review.', 'asari_chazuke'),
    ] }, {
    cuisine: 'Eastern Market の売買参加権を持ち、100以上の飲食店や魚屋に卸す魚屋の魚介の居酒屋 (食べログの店の紹介)・5種か7種の刺身の盛り合わせ、たとえば炙りサワラ、本マグロ (2026年)・キンメダイの煮付け、カンパチのカマ焼き、サワラの焼き物、秋はサンマ・生牡蠣、牡蠣ポン酢、タコポン酢・ふぐのkara-age、アナゴの揚げ物、とうもろこしの天ぷら、kara-age・マグロのシーザーサラダ、ふわふわのクリームチーズ、万願寺とうがらし、水なす・締めはあさりの出汁茶漬け・飲み放題つきのコース (食べログ)・Sapporo Lager Akaboshi、Carlsberg の生、日本酒、焼酎',
    neighborhood: '難波千日前4-19 2階、Ura-Namba。南海なんば駅から徒歩4分',
    gf_detail: '要確認。グルテンの情報なし。中心は刺身だが、煮付け、ふぐのkara-age、天ぷら、kara-age もあり、醤油やポン酢を多く使う。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではありません。魚介の居酒屋で、植物性のものは万願寺とうがらし、水なす、とうもろこしの天ぷらくらい。',
    notes: '[魚の居酒屋・Ura-Namba、魚屋の別館] 予約の取りにくい魚屋の居酒屋、魚屋ひでぞう なんばの、Ura-Namba にある座れる別館で、席は何階かにわたる。魚は自社の市場の仕事から来るので、まずは刺身の盛り合わせ (5種か7種)、それからキンメダイの煮付け、カマ焼き、牡蠣ポン酢かふぐのkara-age、締めはあさりの出汁茶漬けを。値段は手頃で、2026年はひとり3,000〜6,000円ほど。予約するか、当日の電話か17時の早い時間に。滞在は2時間半。火曜休み。',
  });
}

save();
