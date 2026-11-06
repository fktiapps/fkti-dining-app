// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 16.
//   + 串市 Kushi Ichi (late-night kushikatsu counter between Kiyamachi and Pontocho)
//   + アーマー Armor (Showa-style kissa by Nishiki Market; mornings and daily lunch)
//   + ぎおん 元勢 Gion Motose (Gion kappo of fish and game, course or à la carte)
//   + Da YUGE (Italian course by pasta world champion Keita Yuge, Gosho-minami townhouse)
//   Same-name counts first (2026-11-05): 串市 — one in Kyoto on Tabelog (unrelated Kushi Ichi shops in Chiba, Gifu, Hyogo);
//   アーマー — one; 元勢 — one; Da YUGE — one (run by the chef; "Waon -YUGE-", a Shijo izakaya, shows no link).
//   Taken on 2026-11-05: `next core 200` gave 串市 26005222 and アーマー 26009536; `next notable 200` gave ぎおん 元勢 26006494
//   and Da YUGE 26044612. None is in data/kyoto.json: grep by name and address (材木町140/河きたビル, 菊屋町531,
//   祇園町南側570-6, 竹屋町158-2) found none. Service charges checked against Tabelog's Japanese original text:
//   元勢 「サービス料10%」, Da YUGE 「サービス料 5%」; 串市 and アーマー list none.
//   No shop asks diners not to post it; no remarks on anyone's looks are recorded.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-16');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 串市
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26005222/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '04:00']);
  put({
    id: 'kyoto_kushi_ichi', name: '串市 (Kushi Ichi)', category: 'OMNI',
    lat: 35.008003, lng: 135.770974, cuisine_type: 'katsu',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: kushikatsu in a wheat batter and breadcrumbs, fried in shared oil (2021–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: shared fryer with meat and seafood skewers; the starter includes oden (2022 review).',
    hours_raw: '18:00–4:00 (last order 3:30); closed Thursday (Tabelog). Reservations accepted; a Saturday table was secured by phone (Tabelog; February 2022). Cash only — no cards, e-money or QR (Tabelog). 12 seats: a counter of about 10 and two small tables (Tabelog; December 2021, December 2024). Smoking allowed (Tabelog). In a narrow lane between Kiyamachi and the north end of Pontocho, by the Pontocho Kaburenjo theatre; 3 min from Sanjo Stn (2021–26 reviews).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'North end of Pontocho, off Kiyamachi — 3 min from Sanjo Stn',
    cuisine: 'Kushikatsu with a light, thin batter, until 4 a.m. (2021–26 reviews) · a starter of pickles and oden (February 2022) · whole shrimp eaten head to tail with tartar sauce, asparagus, beef fillet cutlet, ham and potato, white fish paste with pickled ginger, kombu with roe, burdock, mizu-nasu eggplant, manganji pepper stuffed with shrimp, mushrooms, seasonal skewers (2021–24 reviews) · octopus karaage, salt-cured beef cheek sashimi, raw oysters (2021–22 reviews) · beer, highballs, sake, shochu, wine (Tabelog; 2024) · bills about ¥2,000–6,000 a head (2024–26 reviews)',
    website: null, gmaps: gm('串市 木屋町 串カツ'), menu_url: null,
    notes: "[Kushikatsu · Kiyamachi, a former boxer's counter open till 4 a.m.] A twelve-seat counter in a lane at the top of Pontocho where the owner, a former boxer, fries skewers in a batter so thin that diners keep ordering: whole shrimp with tartar sauce, asparagus, beef fillet, kombu with roe, ham and potato. Pickles and oden to start; beer and sake to go with it. Full of regulars and friendly to newcomers. Cash only; smoking allowed. 18:00–4:00, closed Thursday.",
    chef_bio: { chef_name: null, roles: ['Owner-cook (unnamed; a former boxer per 2023–24 reviews)'], origin: null,
      background: 'Reviewers describe the kushikatsu as made by a former boxer (September 2023, December 2024) and the owner as friendly and welcoming to first-timers among the many regulars (September 2023, March 2026).',
      philosophy: null, specialty: 'Kushikatsu; shrimp with tartar sauce.',
      anecdotes: [
        { text: '"The paper doesn’t get oily... it’s amazing!" — July 2022.', source: R + 'B451904682/' },
        { text: 'A September 2023 visitor, nervous among the regulars, ended up drinking with the friendly owner.', source: R + 'B517724826/' },
        { text: 'A December 2021 diner liked the kombu with roe so much it was ordered twice.', source: R + 'B444306326/' },
      ],
      japanese_sources_summary: '食べログ: 串揚げ・居酒屋、中京区木屋町三条下ル材木町140番地 河きたビル1F、三条駅から175m、18:00〜翌4:00 (L.O. 3:30)、木曜休み、予約可、カード・電子マネー・QR 不可、12席、カウンター、喫煙可、魚介と肉の串、日本酒・焼酎・ワイン・カクテル。口コミ (2021年12月〜2026年3月、英語): 先斗町の北の端の細い路地、Kaburenjo の前、元ボクサーの店主、薄く軽い衣、海老とタルタル、アスパラ、ヘレカツ、ハムポテト、昆布、お通しは漬物とおでん、常連が多い、気さくな店主。',
      confidence: 'medium', sources: [TB, R + 'B444306326/', R + 'B446474161/', R + 'B451904682/', R + 'B454243250/', R + 'B468087710/', R + 'B481102390/', R + 'B494995756/', R + 'B498506092/', R + 'B502650643/', R + 'B517724826/', R + 'B524902132/', R + 'B527926505/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order skewers by name at the counter; bring cash; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区木屋町三条下ル材木町140番地 河きたビル1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through March 2026. The old website domain (kushiichi.com) has lapsed.' },
    pin_source: `Tabelog ${TB} (35.008003, 135.770974); GSI resolves only the town 京都府京都市中京区材木町 (52 m away), so the pin stays on the Tabelog point, which matches the reviews' lane at the north end of Pontocho; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B454243250/', R + 'B444306326/'],
    price_note: 'No item prices found; reviews give bills of about ¥2,000–6,000 a head (2024–26).', last_checked: TODAY, items: [
      it('', '', 'Whole shrimp kushikatsu with tartar sauce', '', 'Kushikatsu', 'no', 'no', '2022–24 reviews.', 'shrimp_kushi'),
      it('', '', 'Asparagus kushikatsu', '', 'Kushikatsu', 'no', 'no', '2022–23 reviews.', 'asparagus_kushi'),
      it('', '', 'Beef fillet cutlet skewer', '', 'Kushikatsu', 'no', 'no', 'December 2021.', 'hire_kushi'),
    ] }, {
    cuisine: '薄く軽い衣の串カツを朝4時まで (2021〜2026年の口コミ)・お通しは漬物とおでん (2022年2月)・頭から尻尾まで食べる海老とタルタル、アスパラ、牛ヘレカツ、ハムポテト、紅しょうがと白身の練り物、子持ち昆布、ごぼう、水茄子、海老を詰めた万願寺とうがらし、きのこ、季節の串 (2021〜2024年の口コミ)・蛸の唐揚げ、牛ほほ肉の塩のお造り、生牡蠣 (2021〜2022年の口コミ)・ビール、ハイボール、日本酒、焼酎、ワイン (食べログ、2024年)・1人約2,000〜6,000円 (2024〜2026年の口コミ)',
    neighborhood: '木屋町から入った先斗町の北の端。三条駅から徒歩3分',
    gf_detail: 'グルテンフリーではない。小麦の衣とパン粉の串カツで、油は共用 (2021〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。肉や魚介と同じ油で揚げ、お通しにおでんが出る (2022年の口コミ)。',
    notes: '[串カツ・木屋町、元ボクサーの朝4時までのカウンター] 先斗町の北の端の路地にある12席の店。元ボクサーの店主が揚げる串は、衣が薄く、いくらでも食べられると評判。頭から食べる海老とタルタル、アスパラ、牛ヘレ、子持ち昆布、ハムポテト。お通しは漬物とおでん、ビールや日本酒と。常連が多いが、初めての客にも気さく。現金のみ、喫煙可。18時〜翌4時、木曜休み。',
  });
}

// ================================================================ アーマー
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26009536/'; const R = TB + 'dtlrvwlst/';
  const H = day(['07:30', '20:00']);
  put({
    id: 'kyoto_armor_sakaimachi', name: 'アーマー (Armor)', category: 'OMNI',
    lat: 35.005166, lng: 135.763346, cuisine_type: 'kissaten',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A coffee shop of toast, sandwiches and fried cutlets; the daily lunch is a rice set (2024–26 reviews). No gluten information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Coffee is fine; food is egg sandwiches, meat set lunches with miso soup and cream desserts (2024–26 reviews).',
    hours_raw: '7:30–20:00 daily (Tabelog). Morning sets, a daily lunch and an evening menu (May 2026, Japanese review). No reservations listed (Tabelog). 14 seats, counter and tables; it fills up and is a little cramped (Tabelog; June 2024, May 2026). Cash or QR payment; no cards or e-money (Tabelog). Tabelog lists smoking as heated tobacco only; an August 2024 diner found it non-smoking inside. On Sakaimachi-dori just north of Nishiki, 333 m from Karasuma Stn (Tabelog; 2024 reviews). Takeout orders (June 2024).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sakaimachi-dori by Nishiki Market — a few minutes from Karasuma Stn',
    cuisine: 'Old Showa-style kissa near Nishiki Market (2024 reviews) · morning sets: A set of egg sandwich, salad, fruit and drink ¥650; B set with anko toast (August 2024, July 2025; June 2024) · mixed sandwich (half) ¥580, shrimp-fry sandwich with coffee ¥1,650 (2024) · daily lunch with miso soup and coffee — ginger pork, teriyaki chicken with vegetables, tonkatsu, beef cutlet with side dishes (2024–26 reviews) · pudding with cream and orange (May 2024) · iced coffee ¥420 (June 2024), iced café au lait ¥540 (May 2026)',
    website: null, gmaps: gm('アーマー 堺町 錦小路 喫茶'), menu_url: null,
    notes: "[Kissa · Nishiki Market, the vendors' coffee shop] A small, brown-walled Showa coffee shop a few steps from Nishiki Market, run single-handed, where locals and market traders come for a ¥650 morning set of egg sandwich, salad, fruit and coffee, or a hearty daily lunch — ginger pork, tonkatsu, teriyaki chicken — with miso soup and coffee. The shrimp-fry sandwich is huge. Cash or QR only. Open 7:30–20:00 daily.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), running the shop alone (August 2024)'], origin: null,
      background: 'An August 2024 diner found the owner running the shop alone; reviewers describe a homely, old-fashioned coffee shop with a Showa atmosphere, a resting spot for Nishiki Market traders (April–June 2024).',
      philosophy: null, specialty: 'Morning sets; daily lunch.',
      anecdotes: [
        { text: '"Are you sure you don’t want a half portion?" — the question with the shrimp-fry sandwich, April 2024.', source: R + 'B483942387/' },
        { text: 'A June 2024 diner found the shop early-opening and good value but cramped and quick to fill, not a place to linger.', source: R + 'B487557730/' },
        { text: 'An August 2024 diner noted the old ashtrays and brown wallpaper, a clean interior, and the owner working alone.', source: R + 'B490070176/' },
      ],
      japanese_sources_summary: '食べログ: 喫茶店、中京区堺町通錦小路上る菊屋町531、烏丸駅から333m、毎日7:30〜20:00、14席、カード・電子マネー不可、QR 可、加熱式たばこのみ喫煙可。口コミ (2024年4月〜2026年6月): 錦市場の近く、昭和の喫茶店、モーニング A セット650円、エビフライサンド、ミックスサンド、日替わりランチ (豚のしょうが焼き、照り焼きチキン、とんかつ)、みそ汁、プリン、店主一人で営業 (2024年8月)、モーニングやイブニングもあるという声 (2026年5月)。',
      confidence: 'medium', sources: [TB, R + 'B483942387/', R + 'B485623908/', R + 'B486794584/', R + 'B487557730/', R + 'B488477259/', R + 'B490070176/', R + 'B490091785/', R + 'B491865690/', R + 'B493610024/', R + 'B510321606/', R + 'B528499041/', R + 'B529079163/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order the morning set or daily lunch at the counter; cash or QR.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区堺町通錦小路上る菊屋町531',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB} (35.005211, 135.763346); cross-checked: GSI 京都府京都市中京区菊屋町531番地 (lot) 35m; the Tabelog point sits 0.1 m from mp_okuniya (same coordinates), so moved 5 m south to 35.005166 — 5.0 m from mp_okuniya and 10.3 m from kyoto_trattoria_la_pace (also 菊屋町531); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B510321606/', R + 'B486794584/', R + 'B483942387/', R + 'B529079163/'],
    price_note: 'Prices from 2024–26 reviews (dates per item); may have changed.', last_checked: TODAY, items: [
      it('', '', 'Morning A set: egg sandwich, salad, fruit, drink', '¥650', 'Morning', 'no', 'no', 'August 2024, July 2025.', 'morning_a'),
      it('', '', 'Mixed sandwich (half)', '¥580', 'Food', 'no', 'no', 'June 2024.', 'mix_sand_half'),
      it('', '', 'Shrimp-fry sandwich with coffee', '¥1,650', 'Food', 'no', 'no', 'April 2024.', 'ebi_fry_sand'),
      it('', '', 'Iced café au lait', '¥540', 'Drinks', '', '', 'May 2026.', 'iced_cafe_au_lait'),
    ] }, {
    cuisine: '錦市場の近くの昭和の喫茶店 (2024年の口コミ)・モーニング: A セット (卵サンド、サラダ、果物、飲み物) 650円、あんトーストの B セット (2024年8月、2025年7月、2024年6月)・ミックスサンド (ハーフ) 580円、エビフライサンドとコーヒー1,650円 (2024年)・みそ汁とコーヒー付きの日替わりランチ: 豚のしょうが焼き、照り焼きチキンと野菜炒め、とんかつ、ビーフカツと小鉢 (2024〜2026年の口コミ)・生クリームとオレンジのプリン (2024年5月)・アイスコーヒー420円 (2024年6月)、アイスカフェオレ540円 (2026年5月)',
    neighborhood: '錦市場の近くの堺町通。烏丸駅から徒歩数分',
    gf_detail: '要確認。トースト、サンドイッチ、カツの喫茶店で、日替わりランチはご飯の定食 (2024〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: '要確認。コーヒーは問題ないが、料理は卵サンド、みそ汁付きの肉の定食、クリームのデザート (2024〜2026年の口コミ)。',
    notes: '[喫茶店・錦市場、市場の人の喫茶店] 錦市場から数歩の、茶色い壁の小さな昭和の喫茶店。店主が一人で切り盛りし、地元の人や市場の人が650円のモーニング (卵サンド、サラダ、果物、コーヒー) や、しょうが焼き、とんかつ、照り焼きチキンの日替わりランチ (みそ汁とコーヒー付き) に来る。エビフライサンドは大きい。現金か QR 決済のみ。毎日7時30分〜20時。',
  });
}

// ================================================================ ぎおん 元勢
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26006494/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '22:00']);
  put({
    id: 'kyoto_gion_motose', name: 'ぎおん 元勢 (Gion Motose)', category: 'OMNI',
    lat: 35.002591, lng: 135.775441, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kappo cooking with dashi and soy; à la carte includes a katsu sandwich and tantanmen (2024–26 reviews). No gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish, game and dashi throughout (2024–26 reviews).',
    hours_raw: '18:00–22:00 (last order 21:00); closed some Sundays and public holidays (Tabelog). Reservations accepted; same-day cancellation is charged 100% of the course (Tabelog). Guests are asked not to wear perfume or strong scents (Tabelog). Omakase courses ¥20,000, ¥25,000 and ¥30,000 before tax and a 10% service charge (¥24,200 and ¥30,250 with both), or à la carte from a handwritten menu (Tabelog; 2024–26 reviews). 20 seats: 10 at the counter, a table for 6 and a tatami room for 4 upstairs; a bar salon on the second floor (Tabelog). Smoking allowed in the private room; ashtrays outside (Tabelog). Cards; no e-money or QR (Tabelog). Reopened after renovation in March 2026 (March and May 2026). In a lane off Hanamikoji, south of Shijo; 5 min from Gion-Shijo Stn (Tabelog; November 2024).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion, off Hanamikoji south of Shijo — 5 min from Gion-Shijo Stn',
    cuisine: 'Gion kappo of seasonal fish and game, as an omakase course or à la carte, with sake chosen by a certified sake sommelier and wines by a wine sommelier (Tabelog, shop text) · game: wild boar, badger, bear hot pot, deer, green sea turtle and suppon (May 2024, November 2025, January 2026) · Akashi sea bream sashimi, Matsuba crab in yuzu, sweet shrimp with tosa-vinegar jelly, sea-bream sushi, grilled conger eel, grilled fugu, Kyoto Akajidori chicken (2024–26 reviews) · to finish: takikomi gohan, oyster rice, a mini beef bowl, small tantanmen, game keema curry; ricotta pudding (2024–26 reviews) · katsu sandwich to take home (November 2024, March 2026) · omakase ¥20,000–30,000 plus tax and 10% service (Tabelog)',
    website: 'http://ib9b.hp.peraichi.com/gionmotose', gmaps: gm('ぎおん 元勢'), menu_url: null,
    notes: "[Kappo · Gion, fish and wild game] A Gion kappo, renovated in 2026, where the chef cooks seasonal fish alongside rare game — wild boar, badger, bear hot pot, even sea turtle in a special course — as an omakase or from a handwritten à la carte list. Sake is chosen by a sake sommelier; finish with takikomi gohan or a mini tantanmen and take home a katsu sandwich. The counter gets loud with a lively chef and regulars, and the upstairs bar louder later. Omakase from ¥20,000 plus tax and 10% service. Evenings only.",
    chef_bio: { chef_name: null, roles: ['Head chef (unnamed in the sources)'], origin: null,
      background: 'Per Tabelog (the shop’s own text): seasonal Kyoto cooking and game in a Kansai kaiseki format, with drinks chosen by a sake sommelier and a wine sommelier, and a bar salon upstairs. Reviewers describe the head chef as friendly, chatty and loud (October 2024, March 2025, January 2026); the restaurant reopened after renovation in March 2026.',
      philosophy: null, specialty: 'Game; omakase or à la carte.',
      anecdotes: [
        { text: 'A January 2026 diner found the full counter, matching the chef’s energy, too loud to hear the explanations of the dishes.', source: R + 'B531478780/' },
        { text: 'A November 2025 diner found the staff kind to children, but warned that the second-floor bar gets loud later in the evening.', source: R + 'B521698112/' },
        { text: 'An August 2024 diner joked that the chef’s handwritten à la carte menu is hard to read.', source: R + 'B490552673/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理・海鮮、東山区祇園町南側570番地6、祇園四条駅から徒歩5分、18:00〜22:00 (L.O. 21:00)、日曜・祝日不定休、予約可、当日キャンセルはコース料金の100%、香水など強い香りは控えて、サービス料10%、おまかせコース20,000円・25,000円・30,000円 (税・サービス料別)、20席 (1階カウンター10席、テーブル6名、2階個室4名)、個室は喫煙可、カード可、日本酒のソムリエとワインソムリエ、2階にバーサロン。口コミ (2024年5月〜2026年5月、英語): ジビエ (猪、アナグマ、熊鍋、鹿、アオウミガメ、すっぽん)、Akashi の鯛、松葉蟹、手書きのアラカルト、カツサンドの持ち帰り、2026年3月に改装して再開、店主が賑やかで店内がうるさいという声。',
      confidence: 'medium', sources: [TB, R + 'B213276273/', R + 'B262109899/', R + 'B490552673/', R + 'B492816414/', R + 'B494441973/', R + 'B495038039/', R + 'B498064037/', R + 'B499825503/', R + 'B506502966/', R + 'B508866054/', R + 'B521698112/', R + 'B531478780/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; omakase or à la carte; no strong perfume; same-day cancellation charged in full.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区祇園町南側570番地6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through May 2026 (reopened March 2026).' },
    pin_source: `Tabelog ${TB} (35.002591, 135.775441); GSI resolves 京都府京都市東山区祇園町南側570番地 (lot, the large 570 block, not 570-6) 171 m away, so the pin stays on the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course prices from the Tabelog set-menu page (before tax and 10% service; ¥24,200 and ¥30,250 with both).', last_checked: TODAY, items: [
      it('', '', 'Omakase course', '¥20,000 + tax + 10% service', 'Course', 'ask', 'no', 'Tabelog.', 'omakase_20000'),
      it('', '', 'Omakase course', '¥25,000 + tax + 10% service', 'Course', 'ask', 'no', 'Tabelog.', 'omakase_25000'),
      it('', '', 'Omakase course', '¥30,000 + tax + 10% service', 'Course', 'ask', 'no', 'Tabelog.', 'omakase_30000'),
    ] }, {
    cuisine: '旬の魚とジビエの祇園の割烹。おまかせコースかアラカルトで、日本酒は日本酒のソムリエ、ワインはソムリエが選ぶ (食べログの店の紹介)・ジビエ: 猪、アナグマ、熊鍋、鹿、アオウミガメ、すっぽん (2024年5月、2025年11月、2026年1月)・Akashi の鯛のお造り、松葉蟹の柚子釜、甘海老の土佐酢ジュレ、鯛寿司、焼き穴子、焼きふぐ、Kyoto Akajidori の鶏 (2024〜2026年の口コミ)・締めは炊き込みご飯、牡蠣ご飯、ミニ牛丼、小さな担々麺、ジビエのキーマカレー。リコッタのプリン (2024〜2026年の口コミ)・カツサンドの持ち帰り (2024年11月、2026年3月)・おまかせ20,000〜30,000円、税とサービス料10%別 (食べログ)',
    neighborhood: '四条の南、花見小路から入った祇園。祇園四条駅から徒歩5分',
    gf_detail: '要確認。出汁と醤油の割烹料理。アラカルトにはカツサンドや担々麺もある (2024〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。魚、ジビエ、出汁が中心 (2024〜2026年の口コミ)。',
    notes: '[割烹・祇園、魚とジビエ] 2026年に改装した祇園の割烹。旬の魚に、猪、アナグマ、熊鍋、特別コースではウミガメまで、珍しいジビエを合わせる。おまかせか手書きのアラカルトで。日本酒は日本酒のソムリエが選び、締めは炊き込みご飯か小さな担々麺、カツサンドは持ち帰りも。賑やかな料理長と常連でカウンターはにぎやか、2階のバーは夜が更けるともっと。おまかせは20,000円から、税とサービス料10%別。夜のみ。',
  });
}

// ================================================================ Da YUGE
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26044612/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '22:00']);
  put({
    id: 'kyoto_da_yuge', name: 'Da YUGE', category: 'MOM_AND_POP',
    lat: 35.012498, lng: 135.763016, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A single course built around three or four handmade wheat pastas, with homemade bread (2026 reviews). No gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the course opens with pasta in shark broth with caviar and includes fish, shellfish and beef (2026 reviews).',
    hours_raw: 'Mon–Sat 18:00–22:00, last entry 19:00; closed Sunday and some Mondays (Tabelog). Reservation only; starts are staggered by about 15 minutes (Tabelog; August 2026). One monthly course, Menu Degustazione ¥22,000 with tax, for 1–4 per booking, plus a 5% service charge (Tabelog; September 2026). Extra "Tonnarelli in salsa" ¥1,620 for 40 g (August–September 2026). 13 counter seats round an open kitchen, facing a small garden; private hire up to 20; non-smoking, smoking area outside; cards (Tabelog). A renovated townhouse on Sakaimachi-dori north of Oike, 5 min from Karasuma Oike Stn (Tabelog; September 2026). Opened 3 April 2026 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sakaimachi-dori north of Oike — 5 min from Karasuma Oike Stn',
    cuisine: 'Kyoto-Italian monthly course by Keita Yuge, 2019 Pasta World Championship winner, with about ten dishes and handmade pasta (Tabelog; 2026 reviews) · Menu Degustazione ¥22,000 (September 2026) · July–September 2026: cold capellini in Kesennuma shark broth with kombu-cured caviar; Akashi akou with passion fruit and cucumber; abalone with corn; squid-ink tagliolini with black truffle; corzetti with pesto and ragù; tagliolini with lobster and tomato; red-wine risotto with beef cheek; Nakayama Farm beef from Hiroshima with Kamo eggplant (2026 reviews) · "Tonnarelli in salsa", the championship pasta, as an extra ¥1,620 (August–September 2026) · Italian and Japanese wines, pairing available (Tabelog; 2026 reviews)',
    website: 'https://dayuge.jp/', gmaps: gm('Da YUGE 京都'), menu_url: null,
    notes: "[Italian · Gosho-minami, the pasta world champion's counter] A 13-seat counter in a renovated townhouse off Oike, opened in April 2026 by Keita Yuge, winner of the 2019 Pasta World Championship. One monthly course of about ten dishes for ¥22,000 — a cold capellini in shark broth with caviar, squid-ink tagliolini, a risotto, Hiroshima beef — with the championship tonnarelli as an extra. Most diners are delighted; one August 2026 diner found it rushed and overpriced. Plus 5% service. Book well ahead; closed Sunday.",
    chef_bio: { chef_name: 'Keita Yuge', roles: ['Owner-chef (official site; 2026 reviews)'], origin: null,
      background: 'Per 2026 reviewers: sous-chef at Il Teatrino da Salone in Minami-Aoyama, head chef at Quintocanto in Osaka and then at Salone 2007 in Yokohama; winner of the Pasta World Championship 2019 (July and September 2026). Opened Da YUGE in a renovated townhouse said to be about 100 years old on 3 April 2026 (Tabelog; September 2026). Reviewers mention a YouTube channel (July and August 2026).',
      philosophy: 'Per the official site: a new "Kyoto Italian" spun in Kyoto.',
      specialty: 'Handmade pasta; Tonnarelli in salsa.',
      anecdotes: [
        { text: 'An August 2026 diner found the dishes arriving every five minutes, plate temperatures uneven, and the course overpriced for its quality.', source: R + 'B530316514/' },
        { text: 'A July 2026 diner asked for glasses of red instead of a pairing, which made the chef laugh.', source: R + 'B532410051/' },
        { text: 'An August 2026 diner celebrating a 60th birthday was given a special plate of mango sorbet and orange madeleine.', source: R + 'B534547909/' },
      ],
      japanese_sources_summary: '公式サイト (dayuge.jp): 料理人弓削啓太が提案する京都の地で紡ぐ新たな【京イタリアン】。食べログ: イタリアン、中京区堺町通押小路上ル竹屋町158-2、烏丸御池駅から徒歩約5分、月〜土 18:00〜22:00 (最終入店19:00)、日曜・一部月曜休み、完全予約制、Menu Degustazione 22,000円 (税込)、サービス料5%、カウンター13席、貸切20名まで、禁煙 (屋外に喫煙所)、カード可、2026年4月3日オープン、2019年パスタ世界大会優勝のシェフ、日本とイタリアのワイン。口コミ (2026年7〜9月、英語): Kesennuma のサメの出汁と昆布締めキャビアの冷製パスタ、イカスミの tagliolini、Tonnarelli in salsa (40g 1,620円)、町家を改装、オープンキッチン、坪庭、急ぎすぎで割高だという声 (2026年8月)。',
      confidence: 'medium', sources: [TB, 'https://dayuge.jp/', R + 'B530316514/', R + 'B531871924/', R + 'B532410051/', R + 'B532946409/', R + 'B533112957/', R + 'B533216097/', R + 'B533292011/', R + 'B533715334/', R + 'B534259937/', R + 'B534547909/', R + 'B536599132/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book online; one fixed course; dishes are explained; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区堺町通押小路上ル竹屋町158-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; opened April 2026; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.012498, 135.763016); cross-checked: GSI 京都府京都市中京区竹屋町158番地 (lot) 25m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B533216097/', R + 'B536599132/'],
    price_note: 'Course price from Tabelog and September 2026 reviews (tax included; 5% service charge extra per Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Menu Degustazione (about 10 dishes, monthly)', '¥22,000', 'Course', 'ask', 'no', 'Tabelog; September 2026.', 'menu_degustazione'),
      it('', '', 'Tonnarelli in salsa (extra, 40 g)', '¥1,620', 'Extra', 'no', 'no', 'August–September 2026.', 'tonnarelli_in_salsa'),
    ] }, {
    cuisine: '2019年パスタ世界大会優勝の弓削啓太による、手打ちパスタを中心とした約10品の月替わりの京イタリアンのコース (食べログ、2026年の口コミ)・Menu Degustazione 22,000円 (2026年9月)・2026年7〜9月: Kesennuma のサメの出汁と昆布締めキャビアの冷製 capellini、Akashi の akou とパッションフルーツときゅうり、鮑ととうもろこし、黒トリュフのイカスミの tagliolini、ペストとラグーの corzetti、オマール海老とトマトの tagliolini、牛ほほ肉の赤ワインのリゾット、Hiroshima の Nakayama Farm の牛肉と賀茂なす (2026年の口コミ)・大会のパスタ「Tonnarelli in salsa」は追加1,620円 (2026年8〜9月)・イタリアと日本のワイン、ペアリングあり (食べログ、2026年の口コミ)',
    neighborhood: '御池の北の堺町通。烏丸御池駅から徒歩5分',
    gf_detail: '要確認。手打ちの小麦のパスタ3〜4品を中心にしたコースで、自家製パンも出る (2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。サメの出汁とキャビアのパスタに始まり、魚、貝、牛肉が出る (2026年の口コミ)。',
    notes: '[イタリアン・御所南、パスタ世界王者のカウンター] 御池の北、改装した町家の13席のカウンター。2019年パスタ世界大会の優勝者、弓削啓太が2026年4月に開いた。月替わりのコースは約10品で22,000円。サメの出汁とキャビアの冷製 capellini、イカスミの tagliolini、リゾット、Hiroshima の牛肉。大会の Tonnarelli は追加で。多くの客は大満足だが、2026年8月の客は急ぎすぎで割高と書く。別途サービス料5%。早めの予約を。日曜休み。',
  });
}

save();
