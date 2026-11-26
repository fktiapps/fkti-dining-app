// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 108
// (drafted 2026-11-26 against main 798e4a50; core and notable lists empty in the lane, so rest list nearest-first per the brief).
//   + 創作料理 かわ道 (Japanese set lunches and dinners by Marutamachi-Karasuma; rest) — kanji/kana only: Tabelog's "Kawamichi" is machine romaji
//   + チョット台所二居マス (obanzai lunch counter in an alley by Marutamachi; rest) — kanji/kana only, no sourced reading
//   + クッチーナ クラモチ (CUCINA KURAMOCHI) (owner-chef Italian opposite the prefectural office; rest) — Latin name from the shop's site and domain
//   + 洋食の店 かえで (Kaede) (fried-oyster and hamburg-steak yoshoku near Kyoto Stn; rest) — romaji from the hiragana name
//   Rest list (mod 6 = 1), nearest-first — skipped:
//   - シアトルズ ベストコーヒー ＡＰＡヴィラホテル京都駅前店 26015893: chain (Seattle's Best Coffee).
//   - 和牛料亭Bungo 26034013: same-concept branch of 和牛料亭 bungo 祇園 (kyoto_wagyu_ryotei_bungo_gion, same site wagyuryotei-bungo.com).
//   - がんこ 西本願寺別邸 26034841: chain (がんこ; same ruling as 26001132, 26003081, 26000949).
//   - ALEGRIA 京都 26044969: chain ("over 30 locations nationwide", September 2026 review).
//   Left in the queue, not drafted: 完全個室×京居酒屋 京甚兵衛 26031679 (invoice holder 株式会社レイズ, Nagoya; gurunavi shows sister
//   shops, group size not found — integrator to decide); 喫茶泉輪 26012455 fetched but not drafted (beyond the 4).
//   None of the four drafted is in data (main 798e4a50, hidden records included; grep of Tabelog id, name and address) or in
//   another worker's pending add-kyoto-missed-* script.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-26';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-108');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260101/26015893/', 'chain: Seattle’s Best Coffee');
skip('https://tabelog.com/en/kyoto/A2601/A260203/26034013/', 'same-concept branch of 和牛料亭 bungo 祇園 (kyoto_wagyu_ryotei_bungo_gion; same website wagyuryotei-bungo.com)');
skip('https://tabelog.com/en/kyoto/A2601/A260201/26034841/', 'chain: がんこ (same ruling as 26001132, 26003081, 26000949)');
skip('https://tabelog.com/en/kyoto/A2601/A260101/26044969/', 'chain: ALEGRIA churrasco, "over 30 locations nationwide" (September 2026 review)');

// ================================================================ 創作料理 かわ道 (Marutamachi-Karasuma)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26027251/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:30'], ['17:00', '23:00']);
  put({
    id: 'kyoto_kawamichi_marutamachi', name: '創作料理 かわ道', category: 'OMNI',
    lat: 35.017516147860796, lng: 135.75734447049055, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Lunch sets of sashimi, ginger pork or teriyaki chicken come with miso soup, pickles, chirimen sansho and chawanmushi; no gluten information (2017–2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the set lunches centre on fish or meat with dashi-rich miso soup and chawanmushi (2022–2025 reviews); no plant-based dish is described.',
    hours_raw: 'Daily 11:30–14:30 (last order 14:00) and 17:00–23:00; closing days not fixed (Tabelog). Reservations accepted; dinner only, a ¥400 table charge before tax (Tabelog). Cards (JCB, AMEX, Diners) and QR accepted (Tabelog). 24 seats: tables, tatami and a few counter seats at the back (June 2024; June 2025 reviews); one private sunken-kotatsu room for 8–10; private hire for 20–50 (Tabelog). Designated smoking area, no smoking at lunch only (Tabelog). No parking. Children welcome; English, Chinese and Korean menus and English-speaking staff (Tabelog). On the corner of Marutamachi-dori, 4 min walk from Marutamachi Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Marutamachi-Karasuma, by the Imperial Palace',
    cuisine: 'Japanese restaurant with set lunches and seasonal dinners, “particular about fish” (Tabelog) · lunch: sashimi set ¥1,500 (March 2017); three lunch choices — daily special, sashimi and wagyu — the sashimi set with chirimen sansho, homemade-tasting pickles, miso soup, salad and a small dish, ¥1,620 with tax (July 2018); daily special of ginger pork with chawanmushi (October 2022); yuba and chirimen sansho with lunch (November 2022); daily special ¥1,380 of chilled Kyoto pork shabu-shabu with fresh yuba, shiba-zuke pickles, chirimen sansho and chawanmushi (June 2024); daily special ¥1,380 of teriyaki chicken with eggplant (June 2025); a ¥1,000 dish with root vegetables (December 2025) · dinner: seasonal dishes and takikomi rice cooked at the table (November 2024); generous sashimi with wine in a semi-private tatami room, about ¥5,000–6,000 (May 2025) · courses by reservation (2017; 2024 reviews) · sake, shochu and wine (Tabelog)',
    website: null, gmaps: gm('創作料理 かわ道 京都 丸太町'), menu_url: null,
    notes: '[Japanese · Marutamachi-Karasuma, set lunches near the Imperial Palace] A calm, high-end-looking Japanese restaurant on the Marutamachi corner: ¥1,380 daily lunch sets with yuba, chirimen sansho and chawanmushi, and seasonal dinners with sashimi and takikomi rice cooked at the table. Tatami and private rooms; English menu. Open daily.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Per Tabelog and reviewers: a Japanese restaurant in the 1F of サンシティ御所西, in a space where an Italian restaurant had been before it moved (July 2018 review). A July 2018 diner noted that the rice comes from the Gion restaurant Gihei, found everything made with care but the tuna bland, and disliked tax being added to the ¥1,620 bill. Reviewers describe the room as calm and refined, with business lunches and friends meeting at lunch and jazz playing (June 2024), and the dishes as gently seasoned with good broth (June 2025). In June 2025 the staff forgot the eggplant in a diner’s main dish and brought it separately with an apology; in May 2025 the staff adjusted a group’s over-large order midway.',
      philosophy: null, specialty: 'Set lunches; sashimi.',
      anecdotes: [
        { text: 'A March 2017 diner came in at noon as the first customer and had the ¥1,500 sashimi set, praising the chirimen sansho.', source: R + 'B204400966/' },
        { text: 'In November 2024 four friends cooked takikomi rice at the table and enjoyed its crispy bits.', source: R + 'B496745816/' },
        { text: 'A December 2025 visitor noted it is open late, across from the Fresco supermarket.', source: R + 'B519566992/' },
      ],
      japanese_sources_summary: '食べログ: 創作料理・日本料理、上京区丸太町烏丸西入ル二筋目北東角 サンシティ御所西 1F、丸太町駅から徒歩4分、毎日 11:30〜14:30 (L.O.14:00)、17:00〜23:00、不定休、予約可、夜のみ付出し400円 (税抜)、カード (JCB・AMEX・Diners)・QR 可、24席、掘りごたつの個室 (8〜10名)、20〜50名で貸切可、分煙 (ランチタイムのみ禁煙)、駐車場なし、子ども可、英語・中国語・韓国語のメニュー、英語を話すスタッフ。口コミ (2017年3月〜2025年12月、英語): 刺身定食1,500円 (2017年3月)、昼は日替わり、刺身、和牛の3種、刺身定食にちりめん山椒、漬物、味噌汁、サラダ、小鉢、税込1,620円、ご飯は祇園の Gihei のもの (2018年7月)、日替わりの生姜焼きと茶碗蒸し (2022年10月)、湯葉とちりめん山椒 (2022年11月)、日替わり1,380円、京都の豚肉の冷しゃぶ、生湯葉、しば漬け、茶碗蒸し (2024年6月)、日替わり1,380円、鶏の照り焼きとなす (2025年6月)、夜は季節の料理と席で炊く炊き込みご飯 (2024年11月)、半個室の座敷で刺身とワイン、5,000〜6,000円ほど (2025年5月)、根菜の料理1,000円 (2025年12月)。',
      confidence: 'medium', sources: [TB, R + 'B204400966/', R + 'B365361827/', R + 'B456124095/', R + 'B459832956/', R + 'B487837852/', R + 'B496745816/', R + 'B508203412/', R + 'B508594301/', R + 'B519566992/'] },
    cultural_comfort: { level: 'english', note: 'English, Chinese and Korean menus and English-speaking staff (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区丸太町烏丸西入ル二筋目北東角 サンシティ御所西 1F',
    existence: { status: 'probable', checked: TODAY, note: 'Tabelog listing fetched 2026-11-26 (no closure notice); latest reviews May, June and December 2025.' },
    pin_source: `Tabelog ${TB} (35.017516, 135.757344); not pin-checked by the worker (integrator to check); nearest visible record kyoto_cocochi_cafe 42.8 m (hidden mp_sho_miso 29.6 m); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B204400966/', R + 'B365361827/', R + 'B487837852/', R + 'B508594301/'],
    price_note: 'Lunch prices from reviews, 2017–2025; dinner has a ¥400 table charge before tax (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Daily special set (main, yuba, chirimen sansho, chawanmushi, rice, miso soup)', '¥1,380', 'Lunch', 'ask', 'no', 'June 2024; June 2025.', 'daily_set'),
      it('', '', 'Sashimi set', '¥1,620', 'Lunch', 'ask', 'no', 'July 2018, tax included; ¥1,500 in March 2017.', 'sashimi_set'),
      it('', '', 'Dish with root vegetables', '¥1,000', 'Lunch', 'ask', 'ask', 'December 2025.', 'root_veg'),
    ] }, {
    cuisine: '昼の定食と季節の夜の料理の日本料理の店、「魚にこだわる」(食べログ)・昼: 刺身定食1,500円 (2017年3月)、昼は日替わり、刺身、和牛の3種で、刺身定食はちりめん山椒、手作りの味の漬物、味噌汁、サラダ、小鉢付きで税込1,620円 (2018年7月)、日替わりの生姜焼きと茶碗蒸し (2022年10月)、昼に湯葉とちりめん山椒 (2022年11月)、日替わり1,380円は京都の豚肉の冷しゃぶに生湯葉、しば漬け、ちりめん山椒、茶碗蒸し (2024年6月)、日替わり1,380円は鶏の照り焼きとなす (2025年6月)、根菜の料理1,000円 (2025年12月)・夜: 季節の料理と席で炊く炊き込みご飯 (2024年11月)、半個室の座敷でたっぷりの刺身とワイン、5,000〜6,000円ほど (2025年5月)・コースは予約で (2017年、2024年の口コミ)・日本酒、焼酎、ワイン (食べログ)',
    neighborhood: '丸太町烏丸、御所の近く',
    gf_detail: '要確認。刺身、生姜焼き、鶏の照り焼きの定食に味噌汁、漬物、ちりめん山椒、茶碗蒸しが付く。グルテンの情報はない (2017〜2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。定食は魚か肉が中心で、だしのきいた味噌汁と茶碗蒸しが付く (2022〜2025年の口コミ)。植物性の料理の説明はない。',
    notes: '[日本料理・丸太町烏丸、御所の近くの昼の定食] 丸太町通りに面した、落ち着いた高級感のある日本料理の店。湯葉、ちりめん山椒、茶碗蒸し付きの日替わりの定食が1,380円、夜は季節の料理、刺身、席で炊く炊き込みご飯。座敷と個室、英語のメニュー。毎日営業。',
  });
}

// ================================================================ チョット台所二居マス (Marutamachi alley)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26020015/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '18:00']);
  put({
    id: 'kyoto_chotto_daidokoro_marutamachi', name: 'チョット台所二居マス', category: 'OMNI',
    lat: 35.01849984786066, lng: 135.7588643104994, cuisine_type: 'obanzai',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The one lunch is a set of about fifteen small obanzai that change daily, which have included kara-age, cheese fritters, chikuwa and miso soup with fu (2024–2025 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the set includes dashi-filled chawanmushi, fish, chikuwa, pork or chicken (2024–2025 reviews); many of the small dishes are vegetables, but no vegan version is described.',
    hours_raw: 'Monday–Friday 11:00–18:00, lunch until 14:00; closed Saturday, Sunday and public holidays (Tabelog). Lunch only (May 2025 review). Cash only: no cards, e-money or QR (Tabelog; May 2025 review). 7 seats (Tabelog): three counter seats and four at tables (May 2025); shoes off at the entrance (July 2024; May 2025). Non-smoking; no parking; take-out — side dishes are sold from the case at the entrance (Tabelog; 2024–2025 reviews). In an alley, 3 min walk from Marutamachi subway station (Tabelog), next to a popular soba shop (February 2025). Full just before noon on a May 2025 visit. Opened 11 January 2012 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Marutamachi, alley west of Karasuma',
    cuisine: 'Home-style obanzai lunch in an old townhouse; the only meal is the daily obanzai set (2024–2026 reviews) · obanzai assortment ¥800 (March 2017); daily lunch ¥950 (July 2024; February 2025), ¥1,050 (August 2026) · cold tofu with wakame, simmered soybeans with chikuwa, crab-stick nuta, marinated vegetables, chunky potato salad, kara-age, miso soup and chawanmushi (July 2024) · creamy pork and shimeji, cooked burdock, cheese fritters, beans stewed with tomato, chikuwa and carrot, sake-lees soup, daikon with bamboo shoots and yuba, blanched greens, rice with tiny dried fish (February 2025) · pork shabu-shabu, agedashi tofu, tamagoyaki, lotus root and carrot, shiitake, fuki, sweet potato salad with walnuts and goji berries, okara, miso soup with fu, rice with yukari and one free refill (May 2025) · sake-lees soup (March 2017) · coffee ¥350 and a dessert (strawberry daifuku that day) after the meal (February 2025) · English menu (July 2024)',
    website: null, gmaps: gm('チョット台所二居マス 京都 養安町'), menu_url: null,
    notes: '[Obanzai · Marutamachi, a weekday lunch in an alley townhouse] A seven-seat home-cooking shop in an old townhouse down an alley by Marutamachi: one daily set of about fifteen small, gently seasoned obanzai with rice and miso soup, about ¥1,000. Shoes off; cash only. Weekdays 11:00–18:00, lunch until 14:00.',
    chef_bio: { chef_name: null, roles: ['Cooks (unnamed)'], origin: null,
      background: 'Per Tabelog and reviewers: open since January 2012 in a traditional townhouse in an alley, with a sign that, a July 2024 diner noted, does not suggest a place to eat. A February 2025 diner found two ladies busily cooking homemade side dishes, laid out in a glass case, in a room like a warm grandmother’s house, and most customers, regulars, chatting with the two at the counter; an August 2026 diner described a small restaurant run by a couple. Reviewers call the food homemade, gentle and healthy (2017–2026); a February 2024 diner found it a bit far and pricey, a February 2025 diner thought the portions not very filling, and a May 2025 diner asked for a second bowl of rice. The room has no music and an old steep staircase at the back (May 2025).',
      philosophy: null, specialty: 'The daily obanzai set.',
      anecdotes: [
        { text: 'A July 2024 diner, announcing arrival at the kitchen at the back, was told only the obanzai assortment was available — and noticed an English menu, with many foreigners around Karasuma Marutamachi.', source: R + 'B490286438/' },
        { text: 'In February 2025 a diner skipped the long queue at the soba shop next door and counted about fifteen or sixteen small side dishes.', source: R + 'B502153296/' },
        { text: 'A May 2025 visitor arrived just before noon to find it full, and watched later arrivals turned away.', source: R + 'B524237054/' },
      ],
      japanese_sources_summary: '食べログ: 食堂・弁当、上京区椹木町通烏丸西入ル養安町242-14、丸太町駅から徒歩3分、路地の中、月〜金 11:00〜18:00 (ランチは14:00まで)、土日祝休み、カード・電子マネー・QR 不可、7席、禁煙、駐車場なし、テイクアウト可、2012年1月11日開店。口コミ: おばんざい盛り合わせ 800円 (2017年3月、原文)、酒粕の汁 (2017年3月、2025年2月)、日替わりランチ950円 (2024年7月、2025年2月)、1,050円 (2026年8月)、英語のメニュー、靴を脱いで上がる、入口のケースでおかずを販売、わかめをのせた冷奴、大豆とちくわの煮物、かにかまのぬた、ポテトサラダ、唐揚げ、茶碗蒸し (2024年7月)、豚肉としめじのクリーム煮、ごぼう、チーズのフリット、豆のトマト煮、だいこんとたけのこと湯葉の煮物、ちりめんじゃこのご飯、コーヒー350円、いちご大福 (2025年2月)、豚しゃぶ、揚げ出し豆腐、卵焼き、れんこんとにんじん、しいたけ、ふき、おから、麩の味噌汁、ゆかりのご飯、ご飯のおかわり1杯無料、現金のみ (2025年5月)、隣に行列のそば屋 (2025年2月)、女性2人が料理 (2025年2月)、夫婦で営む小さな店 (2026年8月)。',
      confidence: 'medium', sources: [TB, R + 'B233821549/', R + 'B251899165/', R + 'B480498084/', R + 'B490286438/', R + 'B502153296/', R + 'B513366122/', R + 'B524237054/', R + 'B534733661/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu (July 2024); one set only, so ordering is simple; shoes off; cash only.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市上京区椹木町通烏丸西入ル養安町242-14',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing fetched 2026-11-26 (no closure notice); reviews May and August 2026.' },
    pin_source: `Tabelog ${TB} (35.018500, 135.758864); not pin-checked by the worker (integrator to check); next-door soba shop kyoto_chikuyuan_taro_atsumori (養安町242-12) is 8.3 m away, so no offset; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B251899165/', R + 'B490286438/', R + 'B502153296/', R + 'B534733661/'],
    price_note: 'One lunch set; the price rose from ¥950 (2024–2025) to ¥1,050 (August 2026).', last_checked: TODAY, items: [
      it('', '', 'Daily obanzai lunch set', '¥1,050', 'Lunch', 'ask', 'no', 'August 2026; ¥950 in July 2024 and February 2025.', 'obanzai_lunch'),
      it('おばんざい盛り合わせ', '', 'Obanzai assortment', '¥800', 'Lunch', 'ask', 'no', 'March 2017.', 'obanzai_assort'),
      it('', '', 'Coffee', '¥350', 'Drinks', '', '', 'February 2025, after the meal.', 'coffee'),
    ] }, {
    cuisine: '古い町家で家庭のおばんざいの昼ごはん、食事は日替わりのおばんざいのセットだけ (2024〜2026年の口コミ)・おばんざい盛り合わせ 800円 (2017年3月)、日替わりランチ950円 (2024年7月、2025年2月)、1,050円 (2026年8月)・わかめをのせた冷奴、大豆とちくわの煮物、かにかまのぬた、野菜のマリネ、ごろっとしたポテトサラダ、唐揚げ、味噌汁、茶碗蒸し (2024年7月)・豚肉としめじのクリーム煮、ごぼうの煮物、チーズのフリット、豆のトマト煮、ちくわとにんじん、酒粕の汁、だいこんとたけのこと湯葉の煮物、青菜のおひたし、ちりめんじゃこのご飯 (2025年2月)・豚しゃぶ、揚げ出し豆腐、卵焼き、れんこんとにんじん、しいたけ、ふき、さつまいもとくるみとクコの実のサラダ、おから、麩の味噌汁、ゆかりのご飯、おかわり1杯無料 (2025年5月)・酒粕の汁 (2017年3月)・食後にコーヒー350円とデザート (その日はいちご大福) (2025年2月)・英語のメニュー (2024年7月)',
    neighborhood: '丸太町、烏丸の西の路地',
    gf_detail: '要確認。昼は日替わりのおばんざい15品ほどのセットだけで、唐揚げ、チーズのフリット、ちくわ、麩の味噌汁が入る日もある (2024〜2025年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。セットにだしたっぷりの茶碗蒸し、魚、ちくわ、豚肉や鶏肉が入る (2024〜2025年の口コミ)。野菜の小皿は多いが、ヴィーガン向けの説明はない。',
    notes: '[おばんざい・丸太町、路地の町家で平日の昼ごはん] 丸太町の路地の古い町家にある7席の家庭料理の店。やさしい味のおばんざい15品ほどにご飯と味噌汁の日替わりのセットが1,000円ほど。靴を脱いで上がる、現金のみ。平日 11:00〜18:00、ランチは14:00まで。',
  });
}

// ================================================================ クッチーナ クラモチ (CUCINA KURAMOCHI, Marutamachi)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26018761/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://cucinakuramochi.com/';
  const H = day(['12:00', '14:30'], ['18:00', '21:30']);
  put({
    id: 'kyoto_cucina_kuramochi', name: 'クッチーナ クラモチ (CUCINA KURAMOCHI)', category: 'MOM_AND_POP',
    lat: 35.01696502786067, lng: 135.75586361048605, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Every lunch and dinner course includes pasta and bread, and the courses are set (official site; 2024–2026 reviews); no gluten information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Courses open with a large plate of about twenty Kyoto and rare vegetables simply dressed with salt and olive oil (2025–2026 reviews), but the plate has included ham, pastas use fish, sea urchin or eel, and desserts include tarts and pound cake (2025–2026).',
    hours_raw: 'Lunch 12:00–14:30 last order, dinner 18:00–21:30 last order; closed Thursday (official site; Tabelog gives the same hours). Reservations accepted, online through the site’s booking link; a special dinner course needs booking by the day before (official site). Cards (VISA, Master, JCB, AMEX, Diners) and e-money accepted; no QR (Tabelog). 25 seats — 18 at white tables and 7 at the counter — and a private room by the entrance (official site; Tabelog). Non-smoking; no parking, coin parking nearby; sommelier (Tabelog). 5 min walk from Marutamachi subway station, opposite the Kyoto Prefectural Office (official site). Opened 1 September 2011 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Marutamachi, opposite the Kyoto Prefectural Office',
    cuisine: 'Italian of owner-chef 倉持 智一, from regional dishes of northern Italy, where the chef trained, to modern plates (official site) · lunch courses ¥1,800, ¥3,700, ¥6,500 and ¥10,000: assorted antipasti, a choice of three pastas, dessert, espresso or tea with petits fours; fish or meat in the second; fresh pasta, fish and meat in the third; the fourth built on the day’s produce (official site, undated) · pasta lunch ¥2,000 (January 2025; February 2026), cod and yuzu spaghetti, orange sorbet, banana pound cake (February 2026); sea-urchin cream pasta +¥1,000 (February 2026; July 2026) · lunch course ¥3,900 with whitebait pasta of thick noodles, sea bass, orange sorbet and lemon cream tart (April 2025) · eel and manganji pepper flat pasta, caramel tart (June 2025) · four dinner courses, from a small antipasto through pasta, mains and dessert to petits fours, and a full à la carte (official site) · Italian wines chosen to suit the food and the guest, by the glass (sparkling, white, red) and by the bottle from ¥3,000 (official site; the list is undated and shows 2003–2010 vintages) · about ¥5,000–6,000 at dinner (Tabelog); ¥10,000–30,000 for dinner courses with wine (2024–2025 reviews)',
    website: SITE, gmaps: gm('CUCINA KURAMOCHI 京都 桝屋町'), menu_url: SITE + 'lunch/index.php',
    notes: '[Italian · Marutamachi, opposite the prefectural office, a vegetable-rich owner-chef table] Owner-chef 倉持 智一 cooks northern-Italian-trained food in a relaxed house restaurant: courses open with a plate of some twenty Kyoto vegetables, then generous pasta, a main and dessert with petits fours. Pasta lunch from about ¥2,000. Closed Thursday.',
    chef_bio: { chef_name: '倉持 智一', roles: ['Owner-chef'], origin: null,
      background: 'Per the official site: owner-chef 倉持 智一 (Kuramochi) made CUCINA KURAMOCHI so that guests could enjoy authentically trained Italian cooking without fuss, not bound by the ristorante or trattoria label, from a casual plate to an inventive one, for everything from a solo meal to an anniversary; the menu runs from the regional cooking of northern Italy, where the chef trained, to modern dishes, with wines that suit the food. Opened in September 2011 (Tabelog). Reviewers single out the vegetable antipasti — about twenty vegetables, many unfamiliar, each carefully prepared (2024–2026) — and the generous pasta and petits fours. A December 2023 diner found the pork shoulder gamey and the beef steak disappointing, a September 2024 diner found the vegetable portions almost too much, and a December 2025 diner thought dinner pricey, for special occasions. A July 2026 diner believed it had been on the Bib Gourmand list.',
      philosophy: 'Authentically trained Italian cooking, enjoyed without fuss — from one plate of pasta or one glass of wine (official site).', specialty: 'Vegetable antipasti; pasta.',
      anecdotes: [
        { text: 'An April 2025 lunch wanderer found it on a fourth try after an appointment, fell for the first plate of about twenty vegetables, and planned to move future appointments earlier to come back.', source: R + 'B508249505/' },
        { text: 'A June 2025 diner, after the summer purification rite, had the special course: sweet black radish, burdock with balsamic, a star-shaped cucumber for Tanabata, and popcorn with the petits fours.', source: R + 'B509314300/' },
        { text: 'A diner brought a mother here for a birthday in June 2025 on friends’ word that the food was good, affordable and generous.', source: R + 'B509348244/' },
      ],
      japanese_sources_summary: '公式サイト: CUCINA KURAMOCHI (クッチーナ クラモチ)、府庁前のイタリア料理、オーナーシェフの倉持 智一、リストランテ・トラットリアといった枠にこだわらず本場仕込みのイタリア料理を肩ひじはらずに、修業時代を過ごしたイタリア北部の郷土料理から現代的な一皿まで、料理と相性の良いワイン、中京区釜座通丸太町下ル桝屋町149番地、地下鉄丸太町より徒歩5分、ランチ 12:00〜14:30 ラストオーダー、ディナー 18:00〜21:30 ラストオーダー、木曜定休、25席 (テーブル18席、カウンター7席)、入口付近に個室、全席禁煙、カード可、ランチのコース 1,800円・3,700円・6,500円・10,000円 (前菜の盛り合わせ、パスタ3種から選択、デザート、エスプレッソ 又は 紅茶 小菓子とともに)、夜は4種のコースとアラカルト、前日までの予約のみの特別コース、グラスワイン (スプマンテ・白・赤)、ボトルは3,000円から。食べログ: イタリアン、2011年9月1日開店、ソムリエ、電子マネー可、QR 不可。口コミ (2023年12月〜2026年7月、英語): 20種ほどの野菜の前菜、パスタランチ2,000円、たらとゆずのスパゲッティ、うにのクリームのパスタは+1,000円、ランチのコース3,900円、しらすのパスタ、すずき、オレンジのソルベ、レモンクリームのタルト、うなぎと万願寺とうがらしの平打ちのパスタ。',
      confidence: 'high', sources: [SITE, SITE + 'information/index.php', SITE + 'lunch/index.php', SITE + 'dinner/index.php', SITE + 'wine/index.php', TB, R + 'B430750478/', R + 'B477834107/', R + 'B491557902/', R + 'B499558530/', R + 'B505349755/', R + 'B508249505/', R + 'B509314300/', R + 'B509348244/', R + 'B520286778/', R + 'B539398668/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set courses make ordering simple; book online through the site.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区釜座通丸太町下ル桝屋町149',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing fetched 2026-11-26 (no closure notice); reviews February and July 2026; official site live 2026-11-26.' },
    pin_source: `Tabelog ${TB} (35.016965, 135.755864); not pin-checked by the worker (integrator to check); nearest record kyr_kyoto_chuka_hamamura_fuc 37.0 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE + 'lunch/index.php', R + 'B430750478/', R + 'B505349755/'],
    price_note: 'Course prices from the official site (undated); review prices 2025–2026 differ (¥2,000 pasta lunch; ¥3,900 course).', last_checked: TODAY, items: [
      it('', '', 'Lunch course: antipasti, a choice of three pastas, dessert, espresso or tea with petits fours', '¥1,800', 'Lunch courses', 'ask', 'ask', 'Official site, undated; ¥2,000 in January 2025 and February 2026 reviews.', 'lunch_pasta'),
      it('', '', 'Lunch course with fish or meat', '¥3,700', 'Lunch courses', 'ask', 'ask', 'Official site, undated; ¥3,900 in an April 2025 review.', 'lunch_main'),
      it('', '', 'Lunch course with fresh pasta, fish and meat', '¥6,500', 'Lunch courses', 'ask', 'ask', 'Official site, undated.', 'lunch_full'),
      it('', '', 'Special lunch built on the day’s produce', '¥10,000', 'Lunch courses', 'ask', 'ask', 'Official site, undated.', 'lunch_special'),
      it('', '', 'Sea-urchin cream pasta (lunch supplement)', '+¥1,000', 'Lunch courses', 'ask', 'no', 'February 2026.', 'uni_pasta'),
    ] }, {
    cuisine: 'オーナーシェフ 倉持 智一 のイタリア料理。修業時代を過ごしたイタリア北部の郷土料理から現代的な一皿まで (公式サイト)・ランチのコースは1,800円、3,700円、6,500円、10,000円: 前菜の盛り合わせ、パスタ3種から選択、デザート、エスプレッソ 又は 紅茶 小菓子とともに、2つ目は魚料理 か 肉料理付き、3つ目は生麺を使ったパスタ料理、魚料理、肉料理、4つ目はその日の入荷によって構成するスペシャルランチ (公式サイト、日付なし)・パスタランチ2,000円 (2025年1月、2026年2月)、たらとゆずのスパゲッティ、オレンジのソルベ、バナナのパウンドケーキ (2026年2月)、うにのクリームのパスタは+1,000円 (2026年2月、2026年7月)・ランチのコース3,900円、太麺のしらすのパスタ、すずき、オレンジのソルベ、レモンクリームのタルト (2025年4月)・うなぎと万願寺とうがらしの平打ちのパスタ、キャラメルのタルト (2025年6月)・夜は小さな前菜からパスタ、メイン、デザート、小菓子までの4種のコースとアラカルト (公式サイト)・料理とお客さんの気分に合わせて選ぶイタリアワイン、グラス (スプマンテ、白、赤) とボトル3,000円から (公式サイト)・夜は5,000〜6,000円ほど (食べログ)、ワイン付きのコースで10,000〜30,000円 (2024〜2025年の口コミ)',
    neighborhood: '釜座丸太町、京都府庁の前',
    gf_detail: '要確認。ランチもディナーもコースにパスタとパンが入る (公式サイト、2024〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: '要確認。コースの最初は塩とオリーブオイルだけで仕上げた京都の野菜や珍しい野菜20種ほどの前菜 (2025〜2026年の口コミ)。ただしハムがのる日もあり、パスタは魚、うに、うなぎを使い、デザートはタルトやパウンドケーキ (2025〜2026年)。',
    notes: '[イタリア料理・丸太町、府庁の前、野菜たっぷりのオーナーシェフの店] オーナーシェフ 倉持 智一 がイタリア北部の修業を生かした料理を出す、落ち着いた一軒家の店。コースは京都の野菜20種ほどの前菜から始まり、たっぷりのパスタ、メイン、デザートと小菓子。パスタランチは2,000円ほどから。木曜定休。',
  });
}

// ================================================================ 洋食の店 かえで (near Kyoto Stn)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26035393/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '19:00']);
  put({
    id: 'kyoto_yoshoku_kaede_shimonocho', name: '洋食の店 かえで (Kaede)', category: 'OMNI',
    lat: 34.98638977788331, lng: 135.76595036017014, cuisine_type: 'yoshoku',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the menu centres on fried foods — shrimp fry, oyster fry, white-fish fry, kara-age, katsu — and hamburg steak with demi-glace (2021–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat and seafood set meals with miso soup (2021–2026 reviews); no plant-based dish is described.',
    hours_raw: 'Daily 11:00–19:00, but it may close on Saturdays, Sundays and public holidays — check the notice at the shop or phone (Tabelog). Reservations accepted (Tabelog). Cash only: no cards, e-money or QR (Tabelog; March 2026 review). Parties up to 12; smoking allowed; no parking (Tabelog). No service charge (Tabelog’s original Japanese says なし; its English translation wrongly says 10%). Take-out menu (January 2021). 10 min walk from Kyoto Stn, 8 min from Keihan Shichijo Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: '10 min walk from Kyoto Stn, near Shichijo',
    cuisine: 'Neighbourhood yoshoku of fried foods and hamburg steak (2021–2026 reviews) · Kaede three-item lunch ¥1,000: hamburg steak with demi-glace, white-fish fry with tartar sauce, kara-age, salad, macaroni salad, rice and miso soup (November 2024), limited in number (March 2026) · winter oyster fry ¥1,400 (December 2024); fried oyster set ¥1,550 tax included, large rice +¥100 (March 2026) · shrimp fry set with calamari rings (January 2021) · Boruga rice — omurice topped with katsu and demi-glace (March 2026) · take-out such as simmered flatfish and grilled meat (January 2021) · about ¥1,000–2,000 (Tabelog, from reviews)',
    website: null, gmaps: gm('洋食の店 かえで 京都 下之町'), menu_url: null,
    notes: '[Yoshoku · near Kyoto Stn, homely fried-oyster and hamburg-steak lunches] A homely neighbourhood Western-food shop ten minutes from Kyoto Station: the ¥1,000 three-item lunch of hamburg steak, fish fry and kara-age, big winter fried oysters, and Boruga rice. Cash only; smoking allowed. 11:00–19:00, weekends may close.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'Per Tabelog and reviewers: a small local yoshoku shop where regulars from the neighbourhood chat (November and December 2024). A November 2024 diner, who found it while visiting a nearby eatery called Ueda, was served by two women, both friendly and attentive; in December 2024 the chef in the kitchen was very friendly; a March 2026 diner described it as run by an older woman, with a homey feel. A March 2026 diner found the rice mushy and the miso soup salty and small, but the oysters excellent, about nine parts oyster to one of batter.',
      philosophy: null, specialty: 'Fried oysters; three-item lunch.',
      anecdotes: [
        { text: 'A December 2024 diner, back after a first ¥1,000 lunch, saw the banner for winter-only fried oysters and ordered them at once, with plenty of tartar sauce and lemon.', source: R + 'B495006376/' },
        { text: 'A March 2026 visitor walking from Sanjusangendo to teamLab spotted a Boruga rice banner just before the JR overpass and stopped in.', source: R + 'B524326764/' },
        { text: 'Another March 2026 diner came after seeing an Instagram post of the generous fried oysters.', source: R + 'B523637251/' },
      ],
      japanese_sources_summary: '食べログ: 洋食・ハンバーグ、下京区下之町1-1、京都駅から徒歩10分、京阪七条駅から徒歩8分、毎日 11:00〜19:00 (土日祝は休む場合あり、店頭の告知か電話で確認)、予約可、カード・電子マネー・QR 不可、12名まで、喫煙可、駐車場なし、サービス料なし。口コミ (2021年1月〜2026年3月、英語): エビフライ定食とイカリング、持ち帰りのメニューが多い (flatfish の煮付け、焼いた肉) (2021年1月)、かえでの3品ランチ1,000円 (ハンバーグのデミグラスソース、白身魚のフライとタルタル、唐揚げ、サラダ、マカロニサラダ、ご飯、味噌汁) (2024年11月)、冬限定のカキフライ1,400円 (2024年12月)、カキフライ定食税込1,550円、ご飯大盛り+100円、高齢の女性が営む、現金のみ、ボルガライス (オムライスにカツとデミグラスソース)、3品ランチは数量限定 (2026年3月)。',
      confidence: 'medium', sources: [TB, R + 'B434666854/', R + 'B495006376/', R + 'B523637251/', R + 'B524326764/', R + 'B524508424/'] },
    cultural_comfort: { level: 'japanese', note: 'Local shop; many menus displayed inside (March 2026); cash only.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市下京区下之町1-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing fetched 2026-11-26 (no closure notice); reviews March 2026.' },
    pin_source: `Tabelog ${TB} (34.986390, 135.765950); not pin-checked by the worker (integrator to check); nearest record kyoto_okonomiyaki_shimonocho_shichijo (お食事処 上田) 32.5 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B495006376/', R + 'B523637251/'],
    price_note: 'Prices from reviews, 2024–2026.', last_checked: TODAY, items: [
      it('', '', 'Kaede three-item lunch: hamburg steak, white-fish fry, kara-age', '¥1,000', 'Lunch', 'no', 'no', 'November 2024; limited in number (March 2026).', 'kaede_lunch'),
      it('', '', 'Fried oyster set', '¥1,550', 'Set meals', 'no', 'no', 'March 2026, tax included; large rice +¥100. ¥1,400 in December 2024 (winter only).', 'oyster_fry'),
      it('', '', 'Boruga rice (omurice with katsu and demi-glace)', '', 'Mains', 'no', 'no', 'March 2026.', 'boruga_rice'),
    ] }, {
    cuisine: 'フライとハンバーグの町の洋食の店 (2021〜2026年の口コミ)・かえでの3品ランチ1,000円: デミグラスソースのハンバーグ、タルタルソースの白身魚のフライ、唐揚げ、サラダ、マカロニサラダ、ご飯、味噌汁 (2024年11月)、数量限定 (2026年3月)・冬限定のカキフライ1,400円 (2024年12月)、カキフライ定食税込1,550円、ご飯大盛り+100円 (2026年3月)・エビフライ定食とイカリング (2021年1月)・ボルガライス (オムライスにカツとデミグラスソース) (2026年3月)・flatfish の煮付けや焼いた肉の持ち帰り (2021年1月)・1,000〜2,000円ほど (食べログ、口コミから)',
    neighborhood: '京都駅から徒歩10分、七条の近く',
    gf_detail: 'グルテンフリー不可。エビフライ、カキフライ、白身魚のフライ、唐揚げ、カツなどの揚げ物と、デミグラスソースのハンバーグが中心 (2021〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。肉と魚介の定食に味噌汁が付く (2021〜2026年の口コミ)。植物性の料理の説明はない。',
    notes: '[洋食・京都駅の近く、家庭的なカキフライとハンバーグの昼ごはん] 京都駅から10分ほどの家庭的な町の洋食の店。ハンバーグ、魚のフライ、唐揚げの3品ランチが1,000円、冬は大きなカキフライ、ボルガライスも。現金のみ、喫煙可。11:00〜19:00、土日は休む場合あり。',
  });
}

save();
