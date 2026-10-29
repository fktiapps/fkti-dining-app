// Osaka sweep (2-mile circle around Dotonbori), batch 177 — mom phase (≤20 seats, 30+ reviews, nearest-first).
//   + YAKINIKUEN 忍鬨 東心斎橋2号店 (Ning yakiniku, thick-cut negi-wrapped tongue; APA Hotel 1F)
//   + 天ぷら 悦 (7-seat tempura counter; Higashi-Shinsaibashi 1-7)
//   + mahoroba 鉄板 心斎橋 (teppanyaki courses with Wagyu, lobster and abalone; next door to Etsu)
//   + MONDIAL KAFFEE 328 GUT WOLF (house-roasting specialty coffee bar; Minami-Horie)
//   Skip: 27120239 マカプレッソ 大阪心斎橋パルコ店 (mall chain counter).
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-29';
const { put, skip, save } = openCitySweep('osaka', TODAY, 177);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27120239', 'Chain café counter in Shinsaibashi PARCO; not a sweep target.');

// ================================================================ YAKINIKUEN 忍鬨 東心斎橋2号店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27128762/'; const R = TB + 'dtlrvwlst/';
  const H = day(['15:00', '00:00']);
  put({
    id: 'osaka_yakiniku_en_ning_higashishinsaibashi2', name: 'YAKINIKUEN 忍鬨 東心斎橋2号店 (Yakiniku En Ning Higashi shinsaibashi 2 gou ten)', category: 'OMNI',
    lat: 34.672986, lng: 135.505075, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; the signature tongue comes wrapped in a seasoned green-onion mix, and marinades and dipping sauces are not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a yakiniku restaurant.',
    hours_raw: 'Mon–Wed, Fri–Sun and holidays 15:00–24:00; Thursday 17:00–24:00; food last order 23:00; irregular closures (Tabelog). Seating limited to 90 minutes; bookings cancelled 10 minutes after the time (Tabelog). Table charge ¥300 (Tabelog). Cards, e-money and PayPay accepted (Tabelog). Non-smoking; smokeless roasters (Tabelog; August 2026). Children welcome (Tabelog). Opened 12 April 2022 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: day(['17:00', '00:00']), 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 1-7-10, APA Hotel Namba Shinsaibashi Higashi 1F — 4 min from Nagahoribashi Stn',
    cuisine: 'Yakiniku, the second Higashi-Shinsaibashi shop of Ning (20 seats: 12 at the counter, two tables) · thick-cut tongue wrapped in green onion with garlic and ginger (house signature) · Ning set ¥9,680: 11 cuts, 60 g each (negi tongue, salted tongue, loin, kalbi, sirloin cap, pork toro, chicken thigh, outside skirt, offal) · special misuji (this branch only) · tongue yukhoe ¥1,408 · yukhoe on gimbap ¥1,408 · yukhoe sushi · assorted kimchi · gelato to finish',
    website: null, gmaps: gm('YAKINIKUEN 忍鬨 東心斎橋2号店'), menu_url: TB + 'dtlmenu/',
    notes: "[Yakiniku · Ning's thick-cut green-onion tongue in a calm hotel-floor room, Higashi-Shinsaibashi] The second Higashi-Shinsaibashi branch of the yakiniku shop Ning, on the ground floor of an APA Hotel near Nagahoribashi: black-toned, calm, with a long counter and smokeless roasters. The thing to order is the thick-cut tongue wrapped in green onion, garlic and ginger, which the shop calls its own creation; grill it well. The Ning set (¥9,680) is a tour of 11 cuts, and the branch-only special misuji is worth adding. Also tongue yukhoe, yukhoe on gimbap and a gelato that surprised one diner with its quality. One diner had a grill that wouldn't heat on one side and found the beer too icy. 90-minute seating.",
    chef_bio: { chef_name: null, roles: [], origin: 'Branch of Ning, which presents itself as the originator of thick-cut green-onion-wrapped tongue (August 2026 review; Tabelog); opened 12 April 2022 (Tabelog).', background: 'Yakiniku restaurant in a hotel, with a staff-maintained Tabelog listing (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Thick-cut green-onion-wrapped tongue.',
      anecdotes: [
        { text: '"The thick tongue is generously wrapped with a flavorful green onion mixture infused with garlic and ginger. Grilling it thoroughly enhances its aroma…" — August 2026, Ning Set ¥9,680.', source: R + 'B534452716/' },
        { text: '"What surprised me the most was the gelato served after the meal. The quality was so high that it felt unexpected for a yakiniku restaurant…" — June 2026.', source: R + 'B530271151/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員の公式情報): YAKINIKUEN 忍鬨 東心斎橋2号店、大阪市中央区東心斎橋1-7-10 アパホテルなんば心斎橋東 1F、長堀橋駅から徒歩約4分、月〜水・金〜日・祝15:00〜24:00、木17:00〜24:00 (料理L.O. 23:00)、不定休、2022年4月12日開店、90分制、10分遅れで自動キャンセル、お通し300円、カード・電子マネー・PayPay可、禁煙、20席 (カウンター12、テーブル2)、子ども歓迎、厚切りのネギ巻きタン、2号店限定の特選の misuji。口コミ(2026年6〜10月): 黒を基調とした落ち着いた店内、無煙ロースター、ネギ巻きタンはにんにくと生姜の入ったねぎで包む、忍鬨セット9,680円 (11種各60g)、タンの yukhoe 1,408円、yukhoe をのせた gimbap 1,408円、yukhoe の鮨、キムチの盛り合わせ、食後のジェラート、片側が焼けない網だった・ビールが凍っていたという声。',
      confidence: 'medium', sources: [TB, R + 'B530271151/', R + 'B531261976/', R + 'B531560362/', R + 'B534452716/', R + 'B535135887/', R + 'B536897139/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter yakiniku; 90-minute seating (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-7-10 アパホテルなんば心斎橋東 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Staff-maintained Tabelog listing; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目7番10号 (go) 22m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534452716/'],
    price_note: 'Prices from an August 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Ning set (11 cuts, 60 g each)', '¥9,680', 'Yakiniku', 'ask', 'no', 'August–October 2026.', 'set'),
      it('', '', 'Thick-cut green-onion-wrapped tongue', '', 'Yakiniku', 'ask', 'no', 'June–October 2026.', 'negitan'),
      it('', '', 'Tongue yukhoe', '¥1,408', 'Small plates', 'ask', 'no', 'August 2026.', 'tanyukke'),
      it('', '', 'Yukhoe on gimbap', '¥1,408', 'Small plates', 'ask', 'no', 'August 2026.', 'kimbap'),
    ] }, {
    cuisine: '忍鬨の東心斎橋2号店の焼肉 (20席: カウンター12、テーブル2)・にんにくと生姜の入ったねぎで巻いた厚切りのタン (看板)・忍鬨セット9,680円: 11種各60g (ネギ巻きタン、塩タン、ロース、カルビ、サーロインキャップ、豚の toro、鶏もも、ハラミ、ホルモン)・2号店限定の特選の misuji・タンの yukhoe 1,408円・yukhoe をのせた gimbap 1,408円・yukhoe の鮨・キムチの盛り合わせ・しめのジェラート',
    neighborhood: '東心斎橋1-7-10 アパホテルなんば心斎橋東 1F。長堀橋駅から徒歩4分',
    gf_detail: '要確認。グルテンの情報なし。看板のタンは味つけしたねぎで巻き、たれやつけだれの説明なし。',
    vegan_detail: 'ヴィーガンではありません。焼肉の店。',
    notes: '[焼肉・東心斎橋、ホテル1階の落ち着いた店で忍鬨の厚切りネギ巻きタン] 焼肉の忍鬨の東心斎橋2号店で、長堀橋近くのアパホテルの1階。黒を基調にした落ち着いた店内に長いカウンター、無煙ロースター。頼むべきは、にんにくと生姜の入ったねぎで巻いた厚切りのタンで、店の元祖とうたう一品、よく焼いて。忍鬨セット (9,680円) は11種を少しずつ、この店限定の特選の misujiも足したい。タンの yukhoe、yukhoe をのせた gimbap、質の高さに驚いたという食後のジェラートも。網の片側が焼けなかった、ビールが凍っていたという声も。90分制。',
  });
}

// ================================================================ 天ぷら 悦
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27108983/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '22:00']);
  put({
    id: 'osaka_tempura_etsu_higashishinsaibashi', name: '天ぷら 悦 (Tempura Etsu)', category: 'OMNI',
    lat: 34.673345, lng: 135.504422, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: a tempura counter; batter and dipping sauce are not described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: courses built on seafood, crab and abalone; nothing described as vegan.',
    hours_raw: 'Mon–Sat 17:00–22:00; closed Sunday and holidays, though it may open by advance booking; occasional irregular closures (Tabelog). A summer lunch was served in August 2026 (Tempura Gozen ¥1,650, ¥1,980 with shrimp). Dinner is a course, ¥12,100 including tax (August 2026). Reserve ahead (June 2026). Cards accepted; no e-money or QR (Tabelog). Non-smoking. BYO drinks allowed (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 1-7-22, east of Minami Elementary School — 5 min from Shinsaibashi or Nagahoribashi Stn',
    cuisine: 'Tempura course at a 7-seat counter · dinner course ¥12,100 · sashimi to start: steamed abalone with liver sauce, snow-crab sashimi, shredded crab · female crab packed back into its shell and fried whole (winter) · light shrimp tempura and seasonal vegetables · a fresh vegetable salad between rounds · finish with a tempura rice bowl or tempura in tea broth · summer lunch Tempura Gozen ¥1,650 (¥1,980 with shrimp), with sweetfish sashimi and grated yam · rare sake and wine',
    website: null, gmaps: gm('天ぷら 悦 東心斎橋'), menu_url: null,
    notes: "[Tempura · a 7-seat tempura course counter, Higashi-Shinsaibashi] A quiet seven-seat tempura counter a few minutes from Shinsaibashi, where each piece is fried and handed over in front of you. The ¥12,100 dinner course opens with seasonal sashimi (steamed abalone with liver sauce, snow-crab sashimi), then light, crisp tempura, the shrimp especially juicy, with a fresh salad mid-way and a tempura rice bowl or tempura in tea broth to finish. In winter the showpiece is a female crab packed back into its shell and fried whole. Diners praise the warm, joking hospitality and a list of rare sake and wine. A summer lunch set ran ¥1,650–1,980 in 2026. Book ahead; closed Sundays.",
    chef_bio: { chef_name: null, roles: ['owner'], origin: null, background: 'Tempura counter run by its owner-chef (Tabelog; 2025–2026 reviews).', philosophy: 'The day\'s seasonal ingredients, seafood and regional vegetables (June 2026 review).', specialty: 'Tempura course; whole fried snow crab.',
      anecdotes: [
        { text: '"…the meat of the female crab was carefully extracted, placed back into its shell, and deep-fried whole. It was so exquisite that I hesitated to eat it." — June 2026.', source: R + 'B517872636/' },
        { text: '"…the shrimp tempura stood out with its thin, crispy batter and juicy, plump filling… here it was surprisingly light…" — June 2026, course just over ¥10,000.', source: R + 'B531076215/' },
      ],
      japanese_sources_summary: '食べログ: 天ぷら 悦、大阪市中央区東心斎橋1-7-22、心斎橋駅・長堀橋駅から徒歩5分、月〜土17:00〜22:00、日・祝休み (事前予約で営業することも)、不定休あり、カード可、電子マネー・QR不可、禁煙、7席、持ち込み可。口コミ(2025年11月〜2026年8月): 南小学校の東、カウンターのみ、要予約、夜はコース12,100円 (税込)、最初は sashimi (蒸しあわびの肝ソース、ズワイガニの sashimi、ほぐした蟹)、メスの蟹を甲羅に詰めて丸ごと揚げる、軽い衣の海老の tempura、季節の野菜、途中に生野菜のサラダ、しめは tempura の丼か tempura の chazuke、珍しい日本酒とワイン、店主の人柄、夏の昼の限定 tempura Gozen1,650円 (海老入り1,980円) に鮎の sashimi と tororo。',
      confidence: 'medium', sources: [TB, R + 'B517872636/', R + 'B520157692/', R + 'B524772927/', R + 'B531076215/', R + 'B533257858/', R + 'B534110844/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter course; reserve ahead (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-7-22',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目7番22号 (go) 11m; next door to mahoroba Teppan (offset north); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B533257858/', R + 'B534110844/'],
    price_note: 'Prices from August 2026 reviews, tax included.', last_checked: TODAY, items: [
      it('', '', 'Dinner tempura course', '¥12,100', 'Courses', 'no', 'no', 'August 2026.', 'course'),
      it('', '', 'Tempura Gozen (summer lunch)', '¥1,650', 'Lunch', 'no', 'no', 'August 2026.', 'gozen'),
      it('', '', 'Tempura Gozen with shrimp (summer lunch)', '¥1,980', 'Lunch', 'no', 'no', 'August 2026.', 'gozen_ebi'),
    ] }, {
    cuisine: 'カウンター7席の tempura のコース・夜のコース12,100円・最初に sashimi: 蒸しあわびの肝ソース、ズワイガニの sashimi、ほぐした蟹・冬はメスの蟹を甲羅に詰めて丸ごと揚げる・軽い海老の tempura と季節の野菜・途中に生野菜のサラダ・しめは tempura の丼か tempura の chazuke・夏の昼の tempura Gozen1,650円 (海老入り1,980円)、鮎の sashimi と tororo・珍しい日本酒とワイン',
    neighborhood: '東心斎橋1-7-22、南小学校の東。心斎橋駅・長堀橋駅から徒歩5分',
    gf_detail: '実質グルテンフリーではありません。tempura のカウンターで、衣やつゆがグルテンフリーという記載なし。',
    vegan_detail: '実質ヴィーガンではありません。海鮮、蟹、あわびのコース。ヴィーガンの記載なし。',
    notes: '[天ぷら・東心斎橋、7席の tempura コースのカウンター] 心斎橋から数分の静かな7席の tempura のカウンターで、一品ずつ目の前で揚げて出してくれる。夜のコース (12,100円) は季節の sashimi (蒸しあわびの肝ソース、ズワイガニの sashimi) から始まり、軽くサクッとした tempura、特にジューシーな海老、途中に生野菜のサラダ、しめに tempura の丼か chazuke。冬の見せ場は、メスの蟹を甲羅に詰めて丸ごと揚げる一品。冗談にもつき合ってくれる温かいもてなしと、珍しい日本酒とワインをほめる声。2026年の夏は昼の Gozenが1,650〜1,980円。要予約、日曜休み。',
  });
}

// ================================================================ mahoroba 鉄板 心斎橋
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27134689/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_mahoroba_teppan_shinsaibashi', name: 'mahoroba 鉄板 心斎橋 (Mahoroba Teppan Shinsaibashi)', category: 'OMNI',
    lat: 34.673427, lng: 135.504488, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; the steak is served with wasabi (September 2026), and sauces for the seafood are not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: Wagyu, lobster and abalone courses; nothing described as vegan.',
    hours_raw: 'Daily 12:00–14:00 (last order 13:30) and 17:00–23:00 (last order 22:30) (Tabelog). Service charge applies (Tabelog). À la carte when seats are free (September 2026). Cards and PayPay accepted; no e-money (Tabelog). Heated tobacco only (Tabelog). Children welcome; families with strollers are seated in a private room (Tabelog). Opened 6 April 2023 (Tabelog).',
    hours: ALL(day(['12:00', '14:00'], ['17:00', '23:00'])), hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 1-7-23, next door to Tempura Etsu — 5 min from Shinsaibashi or Nagahoribashi Stn',
    cuisine: 'Teppanyaki courses (16 seats: 6 at the counter, two private rooms) · black Wagyu steak cooked to your choice of doneness and cut, with wasabi · Ise lobster and abalone · seasonal vegetables and seafood · course with lobster, abalone and Wagyu about ¥24,000 · lunch about ¥3,000–4,000 · à la carte when seats are free · anniversary cake on request · wine with a sommelier',
    website: null, gmaps: gm('mahoroba 鉄板 心斎橋'), menu_url: TB + 'dtlmenu/',
    notes: "[Teppanyaki · a relaxed teppan counter for Wagyu, lobster and abalone, Higashi-Shinsaibashi] A calm, grown-up teppanyaki restaurant in Higashi-Shinsaibashi with a six-seat counter and two private rooms, more relaxed than one diner expected. The chefs explain each ingredient and crack jokes while cooking, and the flames make for good photos. Black Wagyu is seared to your chosen doneness and cut, and one diner recommends wasabi; a fuller course adds Ise lobster and abalone, at about ¥24,000. Lunch runs about ¥3,000–4,000, and à la carte is possible when seats are free. Good for anniversaries: one diner got a surprise cake. Open daily, lunch and dinner.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 6 April 2023 (Tabelog).', background: 'Teppanyaki restaurant (Tabelog; 2026 reviews).', philosophy: 'Black Wagyu, seasonal vegetables and seafood; course details adjusted for the season (Tabelog listing; September 2026).', specialty: 'Wagyu teppanyaki with lobster and abalone.',
      anecdotes: [
        { text: '"A course featuring Ise lobster, abalone, and Wagyu for around JPY 24,000. The meat was tender, and the seafood was fresh…" — August 2026.', source: R + 'B535118373/' },
        { text: '"The meat, in particular, is perfectly seared on the outside while remaining tender and juicy on the inside… when paired with wasabi, the sweetness of the meat is enhanced even further." — September 2026.', source: R + 'B535289311/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員の公式情報): mahoroba 鉄板 心斎橋、大阪市中央区東心斎橋1-7-23、心斎橋駅・長堀橋駅から徒歩5分、毎日12:00〜14:00 (L.O. 13:30)、17:00〜23:00 (L.O. 22:30)、2023年4月6日開店、サービス料あり、カード・PayPay可、電子マネー不可、加熱式たばこのみ、16席 (カウンター6、個室2)、子ども歓迎 (ベビーカーは個室へ)、ソムリエ、黒毛和牛、季節の野菜と魚介。口コミ(2026年8〜10月): 思ったより気楽な雰囲気、シェフが材料を説明し冗談も、目の前の炎、焼き加減と部位を選べるステーキ、わさびで、伊勢海老とあわびと和牛のコース約24,000円、昼は3,000〜4,000円ほど、空いていればアラカルトも、記念日のサプライズケーキ。',
      confidence: 'medium', sources: [TB, R + 'B533807138/', R + 'B535118373/', R + 'B535288708/', R + 'B535289311/', R + 'B536432556/', R + 'B536800437/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Chefs explain the ingredients while cooking (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-7-23',
    existence: { status: 'confirmed', checked: TODAY, note: 'Staff-maintained Tabelog listing; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目7番23号 (go) 13m; offset 7 m north of the Tabelog point to clear Tempura Etsu next door (6.4 m); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535118373/'],
    price_note: 'Course price from an August 2026 review; lunch about ¥3,000–4,000 (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Course with Ise lobster, abalone and Wagyu', 'about ¥24,000', 'Courses', 'ask', 'no', 'August 2026.', 'course'),
      it('', '', 'Wagyu steak (choose doneness and cut)', '', 'Teppan', 'ask', 'no', 'September 2026.', 'steak'),
    ] }, {
    cuisine: '鉄板焼きのコース (16席: カウンター6、個室2)・焼き加減と部位を選べる黒毛和牛のステーキ、わさびで・伊勢海老とあわび・季節の野菜と魚介・伊勢海老・あわび・和牛のコース約24,000円・昼は約3,000〜4,000円・空いていればアラカルトも・記念日のケーキ・ソムリエがいてワインも',
    neighborhood: '東心斎橋1-7-23、天ぷら 悦の隣。心斎橋駅・長堀橋駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。ステーキはわさびで (2026年9月)、魚介のソースの説明なし。',
    vegan_detail: '実質ヴィーガンではありません。和牛、伊勢海老、あわびのコース。ヴィーガンの記載なし。',
    notes: '[鉄板焼き・東心斎橋、和牛と伊勢海老とあわびの気楽な鉄板カウンター] 東心斎橋の落ち着いた大人の鉄板焼きで、カウンター6席と個室2室。思ったより気楽だったという声。シェフは材料を説明し冗談も交えながら焼き、炎は写真映えする。黒毛和牛は好みの焼き加減と部位で、わさびがおすすめ。伊勢海老とあわびの入ったコースは約24,000円。昼は3,000〜4,000円ほど、空いていればアラカルトも。記念日にはサプライズのケーキを用意してもらえたという声。毎日、昼と夜に営業。',
  });
}

// ================================================================ MONDIAL KAFFEE 328 GUT WOLF
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27089091/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://mondial-kaffee328.com';
  put({
    id: 'osaka_mondial_kaffee_328_gut_wolf', name: 'MONDIAL KAFFEE 328 GUT WOLF', category: 'OMNI',
    lat: 34.672458, lng: 135.497082, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; food is sandwiches, a salad lunch with bread and house-baked sweets.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Black coffee and Americano are on the menu; milks and baked goods are not described.',
    hours_raw: 'Tabelog table: daily 11:00–18:00 (last order 17:30); irregular closures. An older note on the same listing gives Mon–Thu 10:00–21:00 and Fri, Sat and the day before holidays 10:00–23:00, so check. No reservations (Tabelog). Cards, e-money and QR accepted (Tabelog). Smoking on the terrace only (Tabelog). Free Wi-Fi (May 2026). Takeout; beans for sale (Tabelog; March 2026). Opened 23 November 2015 (Tabelog).',
    hours: ALL(day(['11:00', '18:00'])), hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Minami-Horie 1-1-20, Osakaya Bldg 1F — 1 min from Yotsubashi Stn exit 5',
    cuisine: 'Specialty coffee bar with its own roaster (10 seats: 5 inside, 5 on the terrace) · single-origin hand drip, e.g. Ethiopia; a popular dark roast · café latte ¥600; iced Americano ¥600 · chili con carne sandwich · salad lunch with bread and a drink ¥1,650 · house-baked sweets · beans to take home',
    website: OWN, gmaps: gm('MONDIAL KAFFEE 328 GUT WOLF'), menu_url: null,
    notes: "[Coffee · a roastery coffee bar by Yotsubashi Station, Minami-Horie] The roasting base of the small MONDIAL KAFFEE 328 group, a tiny coffee bar a minute from Yotsubashi Station where the big roaster sits in the room and the smell hits you at the door. Baristas brew single-origin hand drip to order; describe your taste (a strong brew suited one diner), or try the dark roast one diner saw many customers ordering. The café latte (¥600) and an amber, full-flavored iced Americano (¥600) are both praised. There's a chili con carne sandwich, a salad lunch (¥1,650 with a drink) and house-baked sweets. Five seats inside and five on the terrace, so it's often better as takeout. Beans for sale.",
    chef_bio: { chef_name: null, roles: [], origin: 'Roasting base of the MONDIAL KAFFEE 328 group (December 2025 review); opened 23 November 2015 (Tabelog).', background: 'Specialty coffee bar with an in-house roaster (Tabelog; 2025–2026 reviews).', philosophy: 'Specialty beans roasted in-house, brewed one cup at a time (Tabelog listing).', specialty: 'Hand-drip specialty coffee.',
      anecdotes: [
        { text: '"It seems that this location also serves as a roasting facility for the MONDIAL KAFFEE 328 group, and as soon as I stepped inside, I was greeted by the wonderful aroma of coffee!" — December 2025, Cafe Latte (hot) ¥600.', source: R + 'B528822186/' },
        { text: '"I ordered an Iced Americano for JPY 600… At first glance, it may seem quite light, but the flavor and aroma are robust." — August 2026.', source: R + 'B533861874/' },
      ],
      japanese_sources_summary: '食べログ: MONDIAL KAFFEE 328 GUT WOLF、大阪市西区南堀江1-1-20 大阪屋ビル 1F、四ツ橋駅5番出口から徒歩1分、表では毎日11:00〜18:00 (L.O. 17:30)、不定休、古い記載では月〜木10:00〜21:00・金土祝前日10:00〜23:00、2015年11月23日開店、予約不可、カード・電子マネー・QR可、喫煙はテラスのみ、10席 (店内5、テラス5)、テイクアウト、自家焙煎のスペシャルティコーヒー、大きな焙煎機、毎日焼く自家製の焼き菓子。口コミ(2025年12月〜2026年8月): MONDIAL KAFFEE 328 のグループの焙煎拠点、入るとコーヒーの香り、エチオピアのハンドドリップ、深煎りを頼む人が多い、好みを伝えて淹れてもらえる、カフェラテ600円、アイスアメリカーノ600円、チリコンカンのサンド、ドリンクつきのサラダランチ1,650円、Wi-Fi、豆も買える、席が少なく持ち帰り向き。',
      confidence: 'medium', sources: [TB, OWN, R + 'B516856706/', R + 'B521899856/', R + 'B524606849/', R + 'B527829825/', R + 'B528822186/', R + 'B533861874/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Tell the barista your taste; tiny room (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区南堀江1-1-20 大阪屋ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区南堀江一丁目1番20号 (go) 4m; offset 7 m north of the Tabelog point to clear Wakamizu (2.9 m); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B528822186/', R + 'B533861874/', R + 'B527829825/'],
    price_note: 'Prices from December 2025–August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Café latte', '¥600', 'Coffee', '', 'ask', 'December 2025.', 'latte'),
      it('', '', 'Iced Americano', '¥600', 'Coffee', '', 'ask', 'August 2026.', 'americano'),
      it('', '', 'Salad lunch with a drink', '¥1,650', 'Food', 'ask', 'ask', 'May 2026.', 'salad'),
      it('', '', 'Chili con carne sandwich', '', 'Food', 'no', 'no', 'February 2026.', 'chili'),
    ] }, {
    cuisine: '自家焙煎機のあるスペシャルティコーヒーの店 (10席: 店内5、テラス5)・エチオピアなどシングルオリジンのハンドドリップ、人気の深煎り・カフェラテ600円、アイスアメリカーノ600円・チリコンカンのサンド・ドリンクつきのサラダランチ1,650円・自家製の焼き菓子・持ち帰りの豆',
    neighborhood: '西区南堀江1-1-20 大阪屋ビル 1F。四ツ橋駅5番出口から徒歩1分',
    gf_detail: '要確認。食べ物はサンド、パンつきのサラダランチ、自家製の焼き菓子。',
    vegan_detail: '要確認。ブラックコーヒーやアメリカーノはあるが、ミルクや焼き菓子の説明なし。',
    notes: '[コーヒー・南堀江、四ツ橋駅すぐの焙煎所のコーヒーバー] 小さな MONDIAL KAFFEE 328 のグループの焙煎拠点で、四ツ橋駅から1分の小さなコーヒーバー。大きな焙煎機が店内にあり、入るとコーヒーの香り。バリスタが一杯ずつシングルオリジンをハンドドリップ。好みを伝えて (しっかりした味が合ったという声)、あるいは多くの客が頼んでいたという深煎りを。カフェラテ (600円) と、琥珀色で味のしっかりしたアイスアメリカーノ (600円) も好評。チリコンカンのサンド、サラダランチ (ドリンクつき1,650円)、自家製の焼き菓子も。店内5席とテラス5席なので、持ち帰りが向くことも。豆も買える。',
  });
}

save();
