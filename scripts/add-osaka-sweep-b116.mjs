// Osaka sweep (2-mile circle around Dotonbori), batch 116 — mom / small-shop phase (all OMNI).
//   + 甘党 もぐらや (warm mitarashi dango, dorayaki and soft serve in the NAMBA Nannan underground mall)
//   + たけくらべ (second-floor okonomiyaki by Namba: light, fluffy pork-modern with egg, "Take soba")
//   + 旬鮮和楽 さな井 (seasonal Kansai kaiseki course at a pine counter since 2005; Higashi-Shinsaibashi)
//   + 馬肉専門店 喜心 (horse-meat specialist: five- or seven-kind basashi, horse shabu-shabu; Higashi-Shinsaibashi)
//   + 割烹 魚先 (omakase of about 20 small dishes, grilled at the counter, fugu or duck pot; same building as Kigokoro)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-28';
const { put, save } = openCitySweep('osaka', TODAY, 116);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 甘党 もぐらや
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27015906/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_amato_moguraya_nannan', name: '甘党 もぐらや (Amato Moguraya)', category: 'OMNI',
    lat: 34.665299, lng: 135.501134, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free as a shop: dorayaki and kintsuba use wheat batter or skins, and mitarashi sauce is soy-based. Ask about plain anko, kanten and shiratama.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Dango, anko and kanten have no obvious animal products, but soft serve is dairy and no source lists batter ingredients.',
    hours_raw: 'Daily 10:00–21:00 (L.O. 20:00); closed on NAMBA Nannan\'s days off (Tabelog). Takeout from 10:00 (March 2026). Eat-in drinks from ¥500 (October 2026). Short waits at busy times; orders taken while you wait (October 2026). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog).',
    hours: ALL(day(['10:00', '21:00'])), hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'NAMBA Nannan underground mall, Namba 5-chome — directly connected to Osaka Metro Namba Stn',
    cuisine: 'Japanese sweets café and takeout · mitarashi dango, served warm in the café; takeout ¥90 each or 3 for ¥270 · "Moheji-yaki" dorayaki with a moist, refined batter · kintsuba with less-sweet azuki · fukumochi: chewy skin around chunky red bean · mitarashi soft serve with warm sauce · set B ¥880: mitarashi dango, kinako kanten, anko, shiratama and soft serve · parfait · matcha and hojicha · 20 seats',
    website: null, gmaps: gm('甘党 もぐらや なんなん'), menu_url: null,
    notes: "[Sweets · warm mitarashi dango and dorayaki in the Namba underground mall] A small Japanese-sweets café and takeout counter in the NAMBA Nannan underground mall, connected to Namba Station and open 10:00 to 21:00. The thing to try is mitarashi dango, chewy and served warm in the café, which one diner had never had warm before; to go, it's ¥90 each or three for ¥270. The \"Moheji-yaki\" dorayaki has a moist, refined batter, the kintsuba lets the azuki speak and can sell out late in the day, and the fukumochi is chewy around chunky red bean. Sitting down, the set B (¥880) gathers warm dango, kinako kanten, anko, shiratama and soft serve, and the mitarashi soft serve pairs warm sauce with cold cream. Expect a short line at busy times. Cards accepted.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Japanese sweets café in NAMBA Nannan (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Mitarashi dango; dorayaki.',
      anecdotes: [
        { text: '"Includes Mitarashi Dango, agar jelly with kinako, sweet red bean paste, shiratama (rice dumplings), and soft serve ice cream… The Mitarashi Dango was surprisingly warm." — October 2026, set B ¥880.', source: R + 'B537792654/' },
        { text: '"The Moheji-yaki is truly the ultimate dorayaki, with a refined flavor in the batter… The Kintsuba… this paste is less sweet, allowing the flavor of the azuki beans to shine through." — April 2026.', source: R + 'B524960950/' },
      ],
      japanese_sources_summary: '食べログ: 甘党 もぐらや、大阪市中央区難波5丁目 NAMBAなんなん、大阪メトロなんば駅直結、毎日10:00〜21:00(L.O. 20:00)、なんなんに準じて休み、カード可、電子マネー・QR不可、20席。口コミ(2026年3〜10月): 持ち帰りは1本90円・3本270円、店内はドリンク500円から、Moheji-yaki、きんつば、Fukumochiはもちもちの皮につぶあん、きんつばは甘さ控えめで小豆の味、遅いと売り切れ、持ち帰りは10時から、みたらし団子3本270円、パフェ、温かいみたらし団子、ほうじ茶、どら焼きはしっとり、みたらしソフトクリーム、10分待ち、待つ間に注文、おすすめセットB 880円(みたらし団子、きなこの寒天、あんこ、白玉、ソフトクリーム)、平日14時に4人待ち、5分で着席、丁寧で早い接客。',
      confidence: 'medium', sources: [TB, R + 'B524960950/', R + 'B536313713/', R + 'B537085115/', R + 'B537126513/', R + 'B537792654/', R + 'B537813178/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter takeout and café; cards accepted (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, address_ja: '大阪府大阪市中央区難波5丁目 NAMBAなんなん',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; address given only to the chome (underground mall), GSI 大阪府大阪市中央区難波五丁目 (chome) 118m — pin kept at the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B524960950/', R + 'B537792654/'],
    price_note: 'Prices from March–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Mitarashi dango, takeout (1 / 3)', '¥90 / ¥270', 'Takeout', 'no', 'ask', 'October 2026; soy-based sauce.', 'mitarashi'),
      it('', '', 'Moheji-yaki (dorayaki)', '', 'Takeout', 'no', 'ask', 'April 2026.', 'dorayaki'),
      it('', '', 'Kintsuba', '', 'Takeout', 'no', 'ask', 'April 2026.', 'kintsuba'),
      it('', '', 'Fukumochi', '', 'Takeout', 'ask', 'ask', 'April 2026.', 'fukumochi'),
      it('', '', 'Set B (dango, kinako kanten, anko, shiratama, soft serve)', '¥880', 'Café', 'no', 'no', 'October 2026.', 'set_b'),
      it('', '', 'Mitarashi soft serve', '', 'Café', 'no', 'no', 'October 2026.', 'mitarashi_soft'),
    ] }, {
    cuisine: '和菓子の甘味処と持ち帰り・みたらし団子、店内では温かく、持ち帰りは1本90円・3本270円・しっとり上品な生地のどら焼き「Moheji-yaki」・甘さ控えめで小豆の味のきんつば・もちもちの皮につぶあんの「Fukumochi」・温かいたれのみたらしソフトクリーム・セットB 880円: みたらし団子、きなこの寒天、あんこ、白玉、ソフトクリーム・パフェ・抹茶とほうじ茶・20席',
    neighborhood: '中央区難波5丁目、地下街NAMBAなんなん。大阪メトロなんば駅直結',
    gf_detail: '店全体としてはグルテンフリーではありません。どら焼きやきんつばは小麦の生地や皮、みたらしのたれは醤油ベース。あんこ、寒天、白玉は確認を。',
    vegan_detail: '要確認。団子、あんこ、寒天に明らかな動物性の材料はありませんが、ソフトクリームは乳製品で、生地の材料を示す情報源はありません。',
    notes: '[和菓子・なんばの地下街、温かいみたらし団子とどら焼き] 地下街NAMBAなんなんにある小さな甘味処と持ち帰りの店で、なんば駅直結、10時〜21時。食べたいのはみたらし団子: もちもちで、店内では温かく出てくる、温かいのは初めてだったという声も。持ち帰りは1本90円、3本270円。どら焼き「Moheji-yaki」はしっとり上品な生地、きんつばは小豆の味が生き遅いと売り切れることも、「Fukumochi」はもちもちの皮につぶあん。店内ならセットB(880円)で温かい団子、きなこの寒天、あんこ、白玉、ソフトクリームを。みたらしソフトは温かいたれと冷たいソフトの組み合わせ。混む時間は少し並ぶ。カード可。',
  });
}

// ================================================================ たけくらべ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27002837/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:00', '15:00'], ['17:00', '22:00']); const WE = day(['11:00', '22:00']);
  put({
    id: 'osaka_takekurabe_namba', name: 'たけくらべ (Takekurabe)', category: 'OMNI',
    lat: 34.665252, lng: 135.502013, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat-flour batter; yakisoba noodles; okonomiyaki sauces.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork, beef tendon, egg; bonito flakes.',
    hours_raw: 'Mon–Fri 11:00–15:00 and 17:00–22:00; Sat–Sun 11:00–22:00; hours may change (Tabelog). Second floor; lines can form at weekend lunch, but seats turn over quickly (2024–2025 reviews). Cash only: no cards, e-money or QR (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Namba 3-2-14, 2F — 188 m from Namba Stn',
    cuisine: 'Osaka okonomiyaki on the teppan · fluffy, light batter that leaves no heavy aftertaste · pork modern-yaki with a fried egg · butatama · mixed · suji-negi-tama with slow-cooked beef tendon and green onion · "Take soba": yakisoba wrapped in omelet and lightly pressed · folded yakisoba · regular and spicy sauces, mayonnaise, bonito flakes at the table · many à la carte dishes · highballs · 12 seats',
    website: null, gmaps: gm('たけくらべ 難波 お好み焼き'), menu_url: null,
    notes: "[Okonomiyaki · light, fluffy okonomiyaki upstairs by Namba Station] A twelve-seat second-floor okonomiyaki shop a few minutes from Namba Station, cooked on the teppan in front of you. The batter is the point: crisp outside and fluffy within, thick but light, with a sauce that doesn't linger, so you leave without a heavy feeling. One repeat diner always orders the pork modern-yaki with a fried egg before a Shinkigeki show; the suji-negi-tama of slow-cooked beef tendon and green onion is another favorite. Try the house \"Take soba,\" yakisoba wrapped in omelet and pressed. Add the spicy sauce from the table if you like it sharper. Being upstairs, it is easier to get in if you time your visit, one diner notes. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Okonomiyaki restaurant (Tabelog; 2024–2026 reviews).', philosophy: null, specialty: 'Okonomiyaki; modern-yaki.',
      anecdotes: [
        { text: '"I was amazed by how fluffy the batter was. The outside was perfectly grilled, while the inside was surprisingly soft… Despite its thickness, it didn\'t feel heavy at all." — September 2026, suji-negi-tama and butatama.', source: R + 'B535943517/' },
        { text: '"It was essentially yakisoba wrapped in an omelet and slightly pressed… two types of sauce—spicy and regular—along with mayonnaise and bonito flakes." — May 2026, Take soba.', source: R + 'B528102031/' },
      ],
      japanese_sources_summary: '食べログ: たけくらべ、大阪市中央区難波3-2-14、なんばから188m、月〜金 11:00〜15:00・17:00〜22:00、土日 11:00〜22:00、カード・電子マネー・QR不可、12席。口コミ(2024年12月〜2026年9月): 吉本新喜劇の前に、2階なので時間をずらせば待たない、土曜11時40分、ハイボール、豚モダン焼きに卵、いつも同じ注文、後に残らず軽い、帰りに行列、ソースとマヨネーズは追加も可、待てば席がすぐ空く、Take soba(焼きそばを卵で包んで軽く押さえたもの)、ソースは辛口と普通、マヨネーズ、かつお節、ラーメンのような少し平たい麺、水をよく気にかけてくれる、すじ焼き、たたみ焼きそば、接客が気になったという声、平日18時に待たずに入店、一品料理も多い、ふわふわの生地、すじねぎ玉、豚玉、目玉焼きのせ、ミックス焼き、鉄板で目の前で焼く、なんば駅近く。',
      confidence: 'medium', sources: [TB, R + 'B496958953/', R + 'B528102031/', R + 'B533143268/', R + 'B535601254/', R + 'B535943517/', R + 'B537161686/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Attentive water refills; teppan cooking in front of you (May–July 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波3-2-14',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波三丁目2番14号 (go) 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B496958953/', R + 'B528102031/', R + 'B535943517/'],
    price_note: 'Item prices not reported; spend ¥1,000–2,999 (2025–2026 reviews).', last_checked: TODAY, items: [
      it('', '', 'Pork modern-yaki with fried egg', '', 'Okonomiyaki', 'no', 'no', 'June 2026.', 'buta_modern'),
      it('', '', 'Butatama', '', 'Okonomiyaki', 'no', 'no', 'September 2026.', 'butatama'),
      it('', '', 'Suji-negi-tama (beef tendon and green onion)', '', 'Okonomiyaki', 'no', 'no', 'September 2026.', 'suji_negi'),
      it('', '', 'Mixed okonomiyaki', '', 'Okonomiyaki', 'no', 'no', 'July 2026.', 'mix'),
      it('', '', 'Take soba (yakisoba wrapped in omelet)', '', 'Yakisoba', 'no', 'no', 'May 2026.', 'take_soba'),
      it('', '', 'Folded yakisoba', '', 'Yakisoba', 'no', 'no', 'August 2026.', 'tatami'),
    ] }, {
    cuisine: '鉄板で焼く大阪のお好み焼き・ふわふわで軽く後に重さが残らない生地・目玉焼きのせの豚モダン焼き・豚玉・ミックス・じっくり煮た牛すじとねぎのすじねぎ玉・「Take soba」: 焼きそばを卵で包んで軽く押さえたもの・たたみ焼きそば・卓上に普通と辛口のソース、マヨネーズ、かつお節・一品料理も多い・ハイボール・12席',
    neighborhood: '中央区難波3-2-14 2F。なんば駅から188m',
    gf_detail: 'グルテンフリーではありません。小麦粉の生地、焼きそばの麺、お好み焼きのソース。',
    vegan_detail: 'ヴィーガンではありません。豚肉、牛すじ、卵、かつお節。',
    notes: '[お好み焼き・なんば駅近く、2階の軽くふわふわのお好み焼き] なんば駅から数分、ビル2階の12席のお好み焼き店で、目の前の鉄板で焼く。主役は生地: 外はこんがり、中はふわふわ、厚いのに軽く、ソースが後に残らないので食後も重くない。新喜劇の前にいつも目玉焼きのせの豚モダン焼きを頼むという常連も、じっくり煮た牛すじとねぎのすじねぎ玉も人気。店の「Take soba」は焼きそばを卵で包んで押さえたもの。もっと鋭い味がいいなら卓上の辛口ソースを。2階なので時間をずらせば待たずに入れるという声。現金のみ。',
  });
}

// ================================================================ 旬鮮和楽 さな井
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27041729/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://www.shunsenwaraku-sanai.com/';
  const D = day(['18:00', '22:00']);
  put({
    id: 'osaka_shunsen_waraku_sanai', name: '旬鮮和楽 さな井 (Shunsen Waraku Sanai)', category: 'OMNI',
    lat: 34.670385, lng: 135.505883, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a set kaiseki course built on dashi and soy seasoning; no gluten-free course is listed.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi throughout; seafood such as conger eel and abalone in the course.',
    hours_raw: 'Tue–Sun 18:00–22:00 (L.O. 20:30); closed Mon and some other days; call about later arrivals (official site). Tabelog lists 18:00–22:30 (food L.O. 20:00). Courses only; à la carte suspended (Tabelog). Children only if ordering the same course (official site). Prices revised from 1 October 2026 (official site). Cards (VISA, Master, AMEX, JCB, Diners); no e-money (official site).',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 2-2-11, Nippo Seven Center Bldg 1F — 4 min from Nipponbashi Stn exit 2 or Nagahoribashi exit 7',
    cuisine: 'Seasonal Kansai kaiseki course · dishes built on seasonal Kinki ingredients and a gentle dashi, following the season\'s first, peak and last produce · seasonal tableware and chopstick rests · conger eel and abalone in late summer; matsutake and crab in autumn · rice with refills · wide sake list with pairings · spend about ¥15,000–30,000 · single pine-board counter of 5 seats; horigotatsu tatami room for 8; private hire from 10',
    website: OWN, gmaps: gm('旬鮮和楽 さな井'), menu_url: null,
    notes: "[Japanese · seasonal Kansai kaiseki at a pine counter since 2005, Higashi-Shinsaibashi] A calm, sukiya-style kappo near Nipponbashi, open since 2005, serving kaiseki courses only, built on seasonal ingredients from the Kinki region and a gentle, deep dashi. Sit at the five-seat counter of single-board pine to watch the cooking, or take the horigotatsu tatami room. Dishes arrive in seasonal tableware with matching chopstick rests, and the sake list is wide; ask for pairings. The menu follows what's good that day, so one diner who booked expecting matsutake and turtle got conger eel and abalone instead. Rice comes with refills. Diners spent about ¥15,000–30,000, and the shop raised some prices in October 2026 for matsutake and crab. Children only with the same course.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 2 June 2005 (Tabelog)', background: 'Kappo serving kaiseki courses (official site shunsenwaraku-sanai.com; Tabelog).', philosophy: 'Kaiseki built on the five flavors, colors, senses and methods; Kinki-region seasonal ingredients in their early, peak and late stages; dishes adjusted to guests\' requests (official site).', specialty: 'Seasonal kaiseki course.',
      anecdotes: [
        { text: '"The seasonal chopstick rests and tableware added to the visual delight of the experience. I also appreciated the variety of Japanese sake available." — May 2025.', source: R + 'B506240706/' },
        { text: '"Each dish is crafted with great care, and the dashi (broth) was incredibly delicious and gentle in flavor. The service was excellent." — January 2026.', source: R + 'B527748861/' },
      ],
      japanese_sources_summary: '公式 shunsenwaraku-sanai.com: 大阪・難波・心斎橋の高級和食・割烹 旬鮮和楽 さな井(しゅんせんわらく さない)、会席スタイルの日本料理、五味・五色・五感・五法、近畿圏の旬の食材、走り・盛り・名残、季節の器、コースだが要望にも応える、数寄屋造りをイメージした空間、松の一枚板のカウンター、琉球畳の掘りごたつの座敷、18:00〜22:00(L.O. 20:30)、遅めの来店は電話で、月曜・不定休、子どもは同じメニューの場合のみ、13席(カウンター5、座敷8)、10名から貸切、カード可、電子マネー不可、2026年10月1日から松茸や蟹の仕入れ上昇で一部価格改定。食べログ: 東心斎橋2-2-11 日宝セブンセンタービル 1F、日本橋駅から徒歩5分、火〜日・祝 18:00〜22:30、アラカルトは休止中、14席、2005年6月2日開店。口コミ(2025年5月〜2026年9月): 一皿ずつ丁寧、宝箱のような料理、美しい盛り付け、季節の箸置きと器、日本酒が豊富、献立は仕入れ次第で予告と違うことも、鱧と鮑、やさしく懐かしい味、ご飯のおかわり、カウンターで調理を見られる、海の幸が多い、接待にも、出汁がやさしくおいしい、ミシュラン一つ星という声、料理人と店主の笑顔、おすすめの日本酒とのペアリング。',
      confidence: 'medium', sources: [TB, OWN, R + 'B506240706/', R + 'B513525520/', R + 'B521442901/', R + 'B521564695/', R + 'B527748861/', R + 'B535390873/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Course menu; requests welcomed (official site); English site available.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋2-2-11 日宝セブンセンタービル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site updated for October 2026 prices; reviews dated September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋二丁目2番11号 (go) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [OWN, R + 'B513525520/'],
    price_note: 'Course prices not listed in sources; reviewers spent ¥15,000–29,999; prices revised October 2026.', last_checked: TODAY, items: [
      it('', '', 'Seasonal kaiseki course', '', 'Course', 'no', 'no', 'Official site; courses only.', 'kaiseki'),
    ] }, {
    cuisine: '旬の関西の会席コース・近畿の旬の食材とやさしい出汁、走り・盛り・名残を大切に・季節の器と箸置き・晩夏は鱧や鮑、秋は松茸や蟹・ご飯はおかわり可・日本酒が豊富でペアリングも・一人約15,000〜30,000円・松の一枚板のカウンター5席、掘りごたつの座敷8席、10名から貸切',
    neighborhood: '中央区東心斎橋2-2-11 日宝セブンセンタービル 1F。日本橋駅2番出口・長堀橋駅7番出口から徒歩4分',
    gf_detail: 'グルテンフリーではありません。出汁と醤油を使う会席のコースで、グルテンフリーのコースの記載はありません。',
    vegan_detail: 'ヴィーガンではありません。全体に出汁、鱧や鮑などの魚介。',
    notes: '[和食・東心斎橋、2005年からの松の一枚板のカウンターで味わう旬の会席] 日本橋近くの落ち着いた数寄屋風の割烹で、2005年開店、会席のコースのみ、近畿の旬の食材とやさしく深い出汁が土台。調理の様子が見える松の一枚板のカウンター5席か、掘りごたつの座敷で。料理は季節の器とそれに合わせた箸置きで出され、日本酒も豊富、ペアリングを頼んでも。献立はその日のよいもの次第で、松茸やすっぽんを期待して予約したら鱧と鮑だったという声も。ご飯はおかわり可。一人約15,000〜30,000円という声、2026年10月から松茸や蟹の値上がりで一部価格改定。子どもは同じコースの場合のみ。',
  });
}

// ================================================================ 馬肉専門店 喜心
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27118330/'; const R = TB + 'dtlrvwlst/';
  const D = day(['18:00', '23:59']);
  put({
    id: 'osaka_baniku_kigokoro_higashi_shinsaibashi', name: '馬肉専門店 喜心 (Baniku Senmon Ten Kigokoro)', category: 'OMNI',
    lat: 34.67212, lng: 135.504027, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: soy-based dips for the sashimi; soba and nyumen finishes; gyoza.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: horse meat in nearly every dish; dashi.',
    hours_raw: 'Mon–Sat 18:00–24:00 (L.O. 23:00); closed Sun (Tabelog). Smoking allowed, so no one under 20 (Tabelog). Reservations held 10 minutes; Friday and Saturday often full, so book ahead (2025–2026 reviews). Cards, e-money and QR accepted (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 1-15-11, Nippo Suomachi Elegance Bldg 1F, set back inside the building — 5 min from Shinsaibashi Stn',
    cuisine: 'Horse-meat specialist with Kumamoto touches · assorted basashi of five kinds, or seven with heart and tongue: thigh, tenderloin, loin, mane (fat), futaego and more · sakura yukhoe · horse tataki with onion and ponzu · horse shabu-shabu ("dashi shabu") finished with thick soba or rice porridge · grilled horse skewers, each with its own salt or sauce · horse tsukune · saibo (smoked dried horse) · horse gyoza · horse salami · carpaccio salad · horse sushi · horse nyumen · yukhoe rice bowl · Kumamoto-style hitomoji with vinegar miso · courses with all-you-can-drink · 20 seats: counter at the front, tables inside',
    website: null, gmaps: gm('馬肉専門店 喜心 東心斎橋'), menu_url: null,
    notes: "[Horse meat · basashi and horse shabu-shabu in Higashi-Shinsaibashi] A horse-meat specialist set back in a Higashi-Shinsaibashi building behind a noren, open since 2020, with a narrow counter by the kitchen and tables further in. The meat is sourced direct from producers, and diners remark on how clean it tastes, with none of the usual odor. Start with the assorted basashi, five kinds or seven with heart and tongue, from lean thigh and tenderloin to the rich mane fat, then a sakura yukhoe or tataki. On a cold night, the horse shabu-shabu is the warming choice, finished with unusually thick, soft soba; skewers come each with its own salt or sauce. One diner comes almost monthly and books Friday and Saturday well ahead. Smoking is allowed, so no one under 20.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 July 2020 (Tabelog)', background: 'Horse-meat specialist (Tabelog; 2025–2026 reviews).', philosophy: 'Horse meat sourced directly from producers (April 2026 review).', specialty: 'Basashi; horse shabu-shabu.',
      anecdotes: [
        { text: '"Every dish was free of the typical horse meat odor, allowing me to savor an astonishingly clear umami and sweetness. The freshness of the sashimi was particularly outstanding." — February 2026.', source: R + 'B523331054/' },
        { text: '"I indulged in the hot pot (Dashi Shabu) after a long time, finishing off with soba. The thick and soft texture of the soba is quite unique." — December 2025.', source: R + 'B507648208/' },
      ],
      japanese_sources_summary: '食べログ: 馬肉専門店 喜心、大阪市中央区東心斎橋1-15-11 日宝周防町エレガンスビル 1F、心斎橋駅から徒歩5分、長堀橋から343m、月〜土 18:00〜24:00(L.O. 23:00)、日休み、予約は10分過ぎで取消、2名はカウンターの場合あり、喫煙可のため20歳未満は入店不可、カード・電子マネー・QR可、20席、2020年7月1日開店。口コミ(2025年1月〜2026年6月): 桜ユッケ、馬刺し5種盛り、馬しゃぶの締めに蕎麦、生産者から直接仕入れ、馬しゃぶサラダ、雑炊、さつまいものアイス、飲み放題付き、ほぼ毎月通う、出汁しゃぶ、太く柔らかい蕎麦、いかの塩辛、金土は予約必須、馬刺し7種(ハツとタンが加わる)、馬つくね、つけ蕎麦、馬肉にゅうめん、さいぼし、味噌漬け豆腐、馬肉餃子、臭みがない、建物の奥ののれん、カルパッチョサラダ、ユッケ丼、清潔、親切なスタッフ、馬肉サラミ、寿司盛り、馬肉の焼肉、コウネ、熊本のひともじのぐるぐる、馬肉のたたき、もも・ハツ・タン・ヒレ・フタエゴ・ロース・たてがみ、串盛り5種は部位ごとに塩やたれ。',
      confidence: 'medium', sources: [TB, R + 'B500437069/', R + 'B507648208/', R + 'B523331054/', R + 'B528624588/', R + 'B531803192/', R + 'B534430369/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Smoking allowed; no under-20s (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-15-11 日宝周防町エレガンスビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated June 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目15番11号 (go) 12m; same building as Kappou Uosaki (~10 m apart); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B507648208/', R + 'B534430369/'],
    price_note: 'Item prices not reported; spend about ¥6,000–15,000 (2025–2026 reviews).', last_checked: TODAY, items: [
      it('', '', 'Assorted basashi, 5 kinds', '', 'Sashimi', 'no', 'no', 'April 2026.', 'basashi5'),
      it('', '', 'Assorted basashi, 7 kinds (adds heart and tongue)', '', 'Sashimi', 'no', 'no', 'May 2026.', 'basashi7'),
      it('', '', 'Sakura yukhoe', '', 'Sashimi', 'no', 'no', 'April 2026.', 'yukhoe'),
      it('', '', 'Horse shabu-shabu with soba finish', '', 'Hot pot', 'no', 'no', 'December 2025.', 'shabu'),
      it('', '', 'Assorted horse skewers', '', 'Grilled', 'no', 'no', 'May 2026.', 'kushi'),
      it('', '', 'Horse nyumen', '', 'Noodles', 'no', 'no', 'November 2025.', 'nyumen'),
    ] }, {
    cuisine: '熊本の味も添える馬肉専門店・馬刺し5種盛り、ハツとタンが加わる7種盛り: もも、ヒレ、ロース、たてがみ、フタエゴなど・桜ユッケ・玉ねぎとポン酢の馬肉のたたき・締めは太く柔らかい蕎麦か雑炊の馬しゃぶ(出汁しゃぶ)・部位ごとに塩やたれを変える馬肉の串・馬つくね・さいぼし・馬肉餃子・馬肉サラミ・カルパッチョサラダ・馬肉の寿司・馬肉にゅうめん・ユッケ丼・酢味噌の熊本のひともじ・飲み放題付きのコース・20席: 入口にカウンター、奥にテーブル',
    neighborhood: '中央区東心斎橋1-15-11 日宝周防町エレガンスビル 1F、建物の奥。心斎橋駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。馬刺しの醤油ベースのたれ、締めの蕎麦とにゅうめん、餃子。',
    vegan_detail: 'ヴィーガンではありません。ほぼすべての料理に馬肉、出汁。',
    notes: '[馬肉・東心斎橋、馬刺しと馬しゃぶ] 東心斎橋のビルの奥、のれんの先にある馬肉専門店で、2020年開店、厨房前の細長いカウンターと奥のテーブル席。肉は生産者から直接仕入れ、臭みのないすっきりした味だという声。まずは馬刺しの盛り合わせを、5種か、ハツとタンが加わる7種で、赤身のももやヒレから濃厚なたてがみまで。それから桜ユッケかたたきを。寒い夜には馬しゃぶで温まり、締めは珍しく太く柔らかい蕎麦。串は部位ごとに違う塩やたれで。ほぼ毎月通い、金土は早めに予約するという声。喫煙可のため20歳未満は不可。',
  });
}

// ================================================================ 割烹 魚先
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27018161/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_kappou_uosaki_higashi_shinsaibashi', name: '割烹 魚先 (Kappou Uosaki)', category: 'OMNI',
    lat: 34.672068, lng: 135.504121, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: an omakase of about 20 dashi- and soy-seasoned dishes; dislikes are asked in advance, but no gluten-free option is described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood-led omakase; fugu or duck hot pot.',
    hours_raw: 'Hours not listed on Tabelog. Omakase course only; reserve, as it is full most days (April 2026). Smoking allowed (June 2026). Cards (VISA, Master, JCB, AMEX, Diners); no e-money (Tabelog).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 1-15-11, Nippo Suomachi Elegance Bldg 1F — 4 min from Shinsaibashi Stn exit 6',
    cuisine: 'Kappo omakase of many small dishes · about 20 small dishes in little bowls, after asking about dislikes · grilling done at the counter: firefly squid in spring · finish of fugu or duck hot pot in autumn, with matsutake, clams and pork, broth poured over matsutake rice · wide range of sake and shochu, recommendations on request · spend about ¥10,000–15,000 · 6 counter seats, 10 at tables',
    website: null, gmaps: gm('割烹 魚先 東心斎橋'), menu_url: null,
    notes: "[Japanese · kappo omakase of about twenty small dishes in Higashi-Shinsaibashi] A hidden kappo in a Higashi-Shinsaibashi building, often fully booked, that serves one thing: an omakase of about twenty small dishes in little bowls, each prettily presented, with grilling done in front of you at the counter. Diners rate the grilled dishes highly, and one remembers the firefly squid. The seasoning leans a little strong, which one diner says makes the sake go down easily. In autumn the finish is a fugu or duck hot pot with matsutake, its broth poured over matsutake rice. There's a wide sake and shochu list, with recommendations if you ask. Expect about ¥10,000–15,000. Hours aren't published, so call to book. Smoking is allowed.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Kappo restaurant (Tabelog; 2025–2026 reviews).', philosophy: null, specialty: 'Omakase of small dishes.',
      anecdotes: [
        { text: '"The meal consists of about 20 small dishes, all of which are delicious and enjoyable." — March 2026; omakase only, with dislikes asked first.', source: R + 'B524607382/' },
        { text: '"For the final course, we could choose between fugu or duck hot pot… The way to finish off the meal was to pour the hot pot broth over the matsutake rice." — October 2025.', source: R + 'B515170868/' },
      ],
      japanese_sources_summary: '食べログ: 割烹 魚先、大阪市中央区東心斎橋1-15-11 日宝周防町エレガンスビル 1F、心斎橋駅6番出口から徒歩4分、長堀橋から5分、カード可、電子マネー不可、16席(カウンター6、テーブル10)、予算10,000〜14,999円、営業時間の記載なし。口コミ(2025年10月〜2026年6月): メニューはなくコースのみ、小鉢がいくつも、焼き物が香ばしい、締めはふぐか鴨の鍋、松茸・あさり・豚を加えて、鍋の出汁を松茸ご飯にかける、ミナミの有名な割烹、やさしい味、日本酒と焼酎が豊富、ほたるいかの焼き物、落ち着いた雰囲気、おまかせのみ、最初に苦手なものを確認、約20品の小皿、地酒はやや高め、小鉢に盛られた料理、盛り付けが美しい、ほぼ毎日満席で予約必須、全体にやや濃い味、日本酒のおすすめ、目の前で焼く、喫煙可。',
      confidence: 'medium', sources: [TB, R + 'B515170868/', R + 'B521733828/', R + 'B524607382/', R + 'B527196674/', R + 'B528484755/', R + 'B530599853/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Omakase; dislikes asked in advance (March 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-15-11 日宝周防町エレガンスビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated June 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目15番11号 (go) 12m; same building as Kigokoro (~10 m apart); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B524607382/', R + 'B528484755/'],
    price_note: 'Course price not reported; spend about ¥10,000–15,000 (May 2026 review; Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Omakase course (about 20 small dishes)', '', 'Course', 'no', 'no', 'March 2026.', 'omakase'),
      it('', '', 'Fugu or duck hot pot finish (autumn)', '', 'Course', 'no', 'no', 'October 2025.', 'nabe'),
    ] }, {
    cuisine: '小鉢がいくつも続く割烹のおまかせ・苦手なものを聞いてから約20品の小鉢・焼き物はカウンターで目の前で、春はほたるいか・秋の締めはふぐか鴨の鍋に松茸、あさり、豚、出汁を松茸ご飯にかけて・日本酒と焼酎が豊富、頼めばおすすめを・一人約10,000〜15,000円・カウンター6席、テーブル10席',
    neighborhood: '中央区東心斎橋1-15-11 日宝周防町エレガンスビル 1F。心斎橋駅6番出口から徒歩4分',
    gf_detail: 'グルテンフリーではありません。出汁と醤油で味付けした約20品のおまかせ。苦手なものは事前に聞いてくれるが、グルテンフリーの対応の記載はありません。',
    vegan_detail: 'ヴィーガンではありません。魚介中心のおまかせ、ふぐか鴨の鍋。',
    notes: '[和食・東心斎橋、約20品の小鉢が続く割烹のおまかせ] 東心斎橋のビルにある隠れ家の割烹で、予約で埋まることが多く、出すのはひとつ: 小鉢に美しく盛った約20品のおまかせで、焼き物はカウンターの目の前で。焼き物の評価が高く、ほたるいかを挙げる声も。味つけはやや濃いめで、日本酒がすすむという声。秋の締めはふぐか鴨の鍋に松茸、出汁を松茸ご飯にかけて。日本酒と焼酎は豊富で、頼めばおすすめも。一人約10,000〜15,000円。営業時間は公開されていないので電話で予約を。喫煙可。',
  });
}

save();
