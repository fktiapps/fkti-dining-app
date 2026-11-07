// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 56.
//   + 居酒屋すずめ Izakaya Suzume (red-lantern izakaya in Pontocho's alley 15, since 1985; rest)
//   + えなみ家 サクの間 Enamiya Saku no Ma (late-night teppan bar in alley 13 between Kiyamachi and Pontocho; rest)
//   + SIESTA (burrito and taco shop on Fuyacho near Ayanokoji, opened November 2024; rest)
//   + タイキッチン BARAMEE Thai Kitchen Baramee (Thai restaurant on Kiyamachi; rest)
//   Rest list (mod 6 = 1) after batch 55, nearest-first; no skips this time.
//   Same-name check, same brand or operator only: すずめ — one (other すずめ in our crawls are unrelated bars and sushi
//   shops elsewhere); えなみ家 — one; SIESTA — one; BARAMEE — one. None is in data/kyoto.json (main ad25a35a) by name or
//   address (先斗町四条上がる15番ろうじ; 木屋町てるや小路東入ル13番路地; 俵屋町309-1; 下樵木町199-6 RINSEN AVENUEビル).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-56');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 居酒屋すずめ Izakaya Suzume
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26001961/'; const R = TB + 'dtlrvwlst/';
  const H = day(['16:15', '22:00']); const T = day(['17:00', '22:00']);
  put({
    id: 'kyoto_izakaya_suzume_pontocho', name: '居酒屋すずめ (Izakaya Suzume)', category: 'OMNI',
    lat: 35.0057512779582, lng: 135.771, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Home-style izakaya food — oden, dashimaki, sashimi, yakitori with sansho, fried dishes, curry; no gluten information (2012–2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: oden in dashi, yakitori, sashimi and fried dishes (2012–2025 reviews).',
    hours_raw: 'Monday–Wednesday and Friday–Sunday 16:15–22:00; Thursday 17:00–22:00; open on New Year\'s Eve (Tabelog). Reservations accepted (Tabelog). Cash only: no cards, e-money or QR (Tabelog). An appetizer charge of about ¥500, with the bill rounded up (April 2014). 14 seats: 6 at the counter, 2 tables for 4; non-smoking (Tabelog). Down Pontocho\'s alley 15 north of Shijo, marked only by a red lantern; 5 min walk from Gion-Shijo, Kawaramachi and Sanjo Stns (Tabelog; November 2024). Opened 2 March 1985 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: T, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Pontocho, alley 15 north of Shijo — 5 min walk from Gion-Shijo Stn',
    cuisine: 'Small red-lantern izakaya of home cooking, the menu on paper strips on the wall and changing over time (2012–2024 reviews) · oden, dashimaki, sashimi and grilled fish, red-chicken yakitori with sansho, yamauni tofu, fried dishes, Kyoto-style curry (2012–2025 reviews) · sake, shochu, draft beer, sparkling wine (2012–2024 reviews) · about ¥2,000–5,000 (2014–2024 reviews)',
    website: null, gmaps: gm('居酒屋すずめ 先斗町'), menu_url: null,
    notes: '[Izakaya · Pontocho alley 15, since 1985] A tiny red-lantern izakaya down one of Pontocho\'s numbered alleys, run since 1985 and now by the second generation: home-style oden, dashimaki and yakitori with sansho, sake, and above all a chatty host and plenty of Pontocho stories. Opens at 16:15 for early drinks. Cash only; small appetizer charge.',
    chef_bio: { chef_name: null, roles: ['Owners (unnamed): a talkative host and a partner in the kitchen; second generation since July 2022'], origin: null,
      background: 'Per Tabelog: an izakaya opened 2 March 1985; from July 2022 the second-generation proprietress has carried on the business. Reviewers describe a husband-and-wife team, the host chatting and the partner cooking (2012–2018, September 2025), and in November 2024 sister owners full of stories.',
      philosophy: null, specialty: 'Oden; dashimaki.',
      anecdotes: [
        { text: 'An April 2014 visitor found the owner alone that day and heard non-stop talk of yamauni tofu, horse racing and sushi — but thought the ¥500 appetizer and rounded-up bill a bit pricey.', source: R + 'B115919195/' },
        { text: 'A September 2023 guest heard many stories about Pontocho, including advice on why some places turn first-timers away.', source: R + 'B470897587/' },
        { text: 'A November 2024 party, booked ahead, squeezed in at 20:55 on a full night for a draft beer and the menu of seafood and home cooking.', source: R + 'B495826128/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋、中京区先斗町四条上がる15番ろうじ、阪急河原町駅・京阪三条駅・祇園四条駅から徒歩5分、月〜水・金〜日 16:15〜22:00、木 17:00〜22:00、大晦日も営業、予約可、カード・電子マネー・QR 不可、14席 (カウンター6、4人がけテーブル2)、禁煙、1985年3月2日開店、2022年7月から2代目の女将が引き継いで営業再開。口コミ (2012年10月〜2025年9月、英語): 赤ちょうちんだけが目印の路地の店、話好きな主人と料理担当の連れ合い、2024年11月は姉妹の店主とも、壁の短冊のメニュー、おでん、だし巻き、刺身、焼き魚、山椒の赤鶏の焼鳥、yamauni 豆腐、揚げ物、カレー、日本酒、焼酎、生ビール、お通しは500円ほどで会計は切り上げ、やや高いとの声 (2014年4月)。',
      confidence: 'medium', sources: [TB, R + 'B115919195/', R + 'B19821961/', R + 'B30646568/', R + 'B391459111/', R + 'B414437833/', R + 'B434106130/', R + 'B470897587/', R + 'B495826128/', R + 'B496201387/', R + 'B514378171/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Tiny counter bar with chatty hosts; cash only.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区先斗町四条上がる15番ろうじ',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (business resumed July 2022); latest review September 2025.' },
    pin_source: `Tabelog ${TB} (35.005751, 135.770930) is 0.5 m from kyoto_pontocho_tabakoya, so moved ~6.4 m east toward Pontocho to 135.771000 (6.8 m from it; kyoto_itameshi_oliva 5.4 m); the address is an alley with no lot number, so loc_precise false; checked against main ad25a35a; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B115919195/'],
    price_note: 'The only price is an April 2014 appetizer charge.', last_checked: TODAY, items: [
      it('', '', 'Oden', '', 'Food', 'ask', 'no', '2018 and 2025 reviews.', 'oden'),
      it('', '', 'Dashimaki', '', 'Food', 'ask', 'no', 'September 2025.', 'dashimaki'),
    ] }, {
    cuisine: '壁の短冊のメニューが時々変わる、家庭料理の小さな赤ちょうちんの居酒屋 (2012〜2024年の口コミ)・おでん、だし巻き、刺身や焼き魚、山椒の赤鶏の焼鳥、yamauni 豆腐、揚げ物、京風のカレー (2012〜2025年の口コミ)・日本酒、焼酎、生ビール、スパークリングワイン (2012〜2024年の口コミ)・2,000〜5,000円ほど (2014〜2024年の口コミ)',
    neighborhood: '四条の北の先斗町15番路地。祇園四条駅から徒歩5分',
    gf_detail: '要確認。おでん、だし巻き、刺身、山椒の焼鳥、揚げ物、カレーなどの家庭料理の居酒屋。グルテンの情報はない (2012〜2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。だしのおでん、焼鳥、刺身、揚げ物 (2012〜2025年の口コミ)。',
    notes: '[居酒屋・先斗町15番路地、1985年から] 先斗町の番号付きの路地を入った小さな赤ちょうちんの居酒屋。1985年から続き、今は2代目。家庭的なおでん、だし巻き、山椒の焼鳥に日本酒、そして話好きな店主の先斗町の話。16時15分から開いていて早い時間から飲める。現金のみ、少額のお通しあり。',
  });
}

// ================================================================ えなみ家 サクの間 Enamiya Saku no Ma
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26007355/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://sakunoma.com/';
  const H = day(['19:00', '29:00']);
  put({
    id: 'kyoto_enamiya_saku_no_ma', name: 'えなみ家 サクの間 (Enamiya Saku no Ma)', category: 'OMNI',
    lat: 35.00594903113448, lng: 135.77073251745077, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: okonomiyaki, omusoba with yakisoba noodles, tonpei-yaki with sauce (2017–2024 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: egg and pork teppan dishes, corned beef, kabuto miso (2017–2024 reviews).',
    hours_raw: 'Monday and Wednesday–Sunday 19:00–5:00, last order 3:00; closed Tuesday; hours may change (Tabelog). Reservations accepted (Tabelog). 16 seats, counter and tables, upstairs in a small alley building; smoking allowed (Tabelog; June 2022). Down alley 13 between Kiyamachi and Pontocho, east off Teruya-koji (Tabelog; April 2018). Website sakunoma.com (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Alley 13 between Kiyamachi and Pontocho, north of Shijo',
    cuisine: 'Late-night teppan and drinks bar with a rock-poster interior (2017–2024 reviews) · omusoba, tonpei-yaki, okonomiyaki with lots of egg and bonito (2017–2022 reviews) · snacks: honmoku-yaki, corned beef, itawasa, kabuto miso, mixed nuts; tonjiru, sake-lees soup and big onigiri to finish (2018–2024 reviews) · Matsumoto Brewery\'s Shuhari sake, Kenbishi warmed, homemade hajikami ginger sour (2018–2026 reviews) · about ¥1,000–3,000 (Tabelog)',
    website: WEB, gmaps: gm('えなみ家 サクの間'), menu_url: null,
    notes: '[Teppan bar · alley 13 off Kiyamachi, till 5 a.m.] A snug upstairs bar hidden in a numbered alley between Kiyamachi and Pontocho, where regulars and late-shift locals come for omusoba, tonpei-yaki and tonjiru after midnight, with Shuhari and Kenbishi sake and a homemade ginger sour. A friendly master and a rock soundtrack. Smoking allowed; closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Master (unnamed)'], origin: null,
      background: 'Per Tabelog: a late-night dining bar in alley 13, with a website at sakunoma.com. A March 2019 reviewer writes that the owner is the vocalist of a legendary Kyoto band; an April 2018 reviewer that the president of Matsumoto Brewery worked there part-time as a student. Reviewers describe a warm master and many regulars (2024).',
      philosophy: null, specialty: 'Omusoba; tonpei-yaki.',
      anecdotes: [
        { text: 'An April 2018 reviewer calls it the spot where the president of Matsumoto Brewery once worked part-time as a student — and it pours that brewery\'s Shuhari.', source: R + 'B295417590/' },
        { text: 'A March 2019 regular says the owner is the vocalist of a legendary Kyoto band, which shows in the music, and that industry people gather after midnight.', source: R + 'B424103764/' },
        { text: 'A May 2026 regular of four visits looks forward each year to the homemade ginger sour.', source: R + 'B504384531/' },
      ],
      japanese_sources_summary: '食べログ: ダイニングバー、中京区木屋町てるや小路東入ル13番路地、月・水〜日 19:00〜翌5:00 (L.O.3:00)、火曜休み、営業時間は変わることあり、予約可、16席、喫煙可、公式サイト sakunoma.com。口コミ (2017年11月〜2026年5月、英語): 木屋町と先斗町の間の13番路地、小さな飲食ビルの2階、オムそば、とん平焼き、卵とかつお節たっぷりのお好み焼き、honmoku-yaki、コンビーフ、板わさ、かぶと味噌、ミックスナッツ、豚汁、粕汁、大きなおにぎり、Matsumoto Shuzo の Shuhari、Kenbishi の燗、自家製のはじかみのジンジャーサワー、ロックのポスター、店主は京都の伝説的なバンドのボーカルとの声 (2019年3月)、Matsumoto Shuzo の社長が学生時代にアルバイトをしていたとの声 (2018年4月)、常連が多い。',
      confidence: 'medium', sources: [TB, WEB, R + 'B295417590/', R + 'B347319249/', R + 'B398776579/', R + 'B424103764/', R + 'B450404431/', R + 'B458268871/', R + 'B478188006/', R + 'B492887342/', R + 'B497871988/', R + 'B504384531/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small regulars\' bar; open very late; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区木屋町てるや小路東入ル13番路地',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and website; latest review May 2026.' },
    pin_source: `Tabelog ${TB} (35.005949, 135.770733); the address is an alley with no lot number, so loc_precise false; nearest Kyoto record 10.4 m (Thai Kitchen BARAMEE, this batch), then kyoto_g_men_kiyamachi 20.6 m; checked against main ad25a35a; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B295417590/', R + 'B347319249/'],
    price_note: 'Dish names from 2017–2018 reviews; no prices given.', last_checked: TODAY, items: [
      it('', '', 'Omusoba', '', 'Teppan', 'no', 'no', 'April 2018.', 'omusoba'),
      it('', '', 'Tonpei-yaki', '', 'Teppan', 'no', 'no', 'September 2018.', 'tonpei'),
    ] }, {
    cuisine: 'ロックのポスターが貼られた深夜の鉄板と酒のバー (2017〜2024年の口コミ)・オムそば、とん平焼き、卵とかつお節たっぷりのお好み焼き (2017〜2022年の口コミ)・つまみ: honmoku-yaki、コンビーフ、板わさ、かぶと味噌、ミックスナッツ、締めに豚汁、粕汁、大きなおにぎり (2018〜2024年の口コミ)・Matsumoto Shuzo の Shuhari、Kenbishi の燗、自家製のはじかみのジンジャーサワー (2018〜2026年の口コミ)・1,000〜3,000円ほど (食べログ)',
    neighborhood: '四条の北、木屋町と先斗町の間の13番路地',
    gf_detail: 'グルテンフリー不可。お好み焼き、焼きそばのオムそば、ソースのとん平焼き (2017〜2024年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。卵と豚肉の鉄板料理、コンビーフ、かぶと味噌 (2017〜2024年の口コミ)。',
    notes: '[鉄板バー・木屋町の13番路地、朝5時まで] 木屋町と先斗町の間の番号付きの路地に隠れた小さな2階のバー。常連や遅番の地元の人が、深夜過ぎにオムそば、とん平焼き、豚汁を食べに来る。Shuhari や Kenbishi の日本酒、自家製のジンジャーサワーも。気さくなマスターとロックの音楽。喫煙可、火曜休み。',
  });
}

// ================================================================ SIESTA
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26042185/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '21:00']);
  put({
    id: 'kyoto_siesta_burrito_fuyacho', name: 'SIESTA', category: 'OMNI',
    lat: 35.00229326787312, lng: 135.76567970033094, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: wheat-tortilla burritos and wraps, some freshly fried (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Burritos are packed with vegetables, beans and rice, and the menu lists every ingredient, but the classic has chicken; no vegan option confirmed (2026 reviews).',
    hours_raw: 'Daily 11:00–21:00, last order 20:50 (Tabelog). Queues at lunch and weekends — 40–50 minutes on a July 2026 holiday — but walk-ins in the evening (July–September 2026). Order and pay first, then sit; takeaway popular; a burrito can be cut in half (July–September 2026). Payment methods not listed on Tabelog. A small shop in an old house off Kawaramachi, on Fuyacho south of Ayanokoji (Tabelog; August 2026). Opened 22 November 2024 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Fuyacho south of Ayanokoji — 4 min walk from Kawaramachi Stn',
    cuisine: 'Burrito and taco shop, stylish inside an old-style house (2026 reviews) · burritos packed with vegetables, chicken, beans and rice — the Classic ¥1,100 — with salsa to change the flavour; wraps; tacos (July–October 2026) · sets with a drink or Mexican potatoes; a mild taco rice on the kids menu; beer (July–October 2026) · about ¥1,000–2,000 (Tabelog)',
    website: null, gmaps: gm('SIESTA 麩屋町 ブリトー'), menu_url: null,
    notes: '[Burritos · Fuyacho off Kawaramachi] A small, upbeat burrito and taco shop in an old house: huge, chewy-tortilla burritos stuffed with vegetables, chicken, beans and rice — the ¥1,100 Classic is the favourite — plus wraps, tacos and a kids taco rice. Order and pay first; expect a queue at lunch. Staff lent ice packs and umbrellas to the summer line.',
    chef_bio: { chef_name: null, roles: ['Kitchen and counter staff (unnamed)'], origin: null,
      background: 'Per Tabelog: a taco shop opened 22 November 2024 on Fuyacho. Reviewers in 2026 describe a lively, relaxed staff, a menu listing every ingredient, and many takeaway orders.',
      philosophy: null, specialty: 'Classic burrito.',
      anecdotes: [
        { text: 'In July 2026 staff lent a towel-wrapped ice pack to a parent queuing 40–50 minutes in the sun with a two-year-old, and umbrellas to others in line.', source: R + 'B532345412/' },
        { text: 'An August 2026 diner noticed a pedal-operated hand-washing station.', source: R + 'B535502649/' },
        { text: 'A September 2026 visitor found the ¥1,100 Classic so good it went down like a drink.', source: R + 'B536422592/' },
      ],
      japanese_sources_summary: '食べログ: タコス、下京区麩屋町通綾小路下る俵屋町309-1、京都河原町駅から313m、毎日 11:00〜21:00 (L.O.20:50)、2024年11月22日開店。口コミ (2026年7月〜10月、英語): 古い家の外観でおしゃれな店内、昼と週末は行列 (祝日の昼に40〜50分)、夜は待たずに入れる、先に注文と支払い、テイクアウトが多い、野菜・鶏肉・豆・ご飯たっぷりの大きなブリトー、クラシック1,100円、半分に切ってもらえる、サルサで味変、ラップサンド、タコス、ドリンクやメキシカンポテトのセット、子ども用のタコライス、ビール、材料がすべて書かれたメニュー、並ぶ客に保冷剤や日傘を貸してくれた (2026年7月)、足踏み式の手洗い。',
      confidence: 'medium', sources: [TB, R + 'B532345412/', R + 'B532754923/', R + 'B533662647/', R + 'B534008538/', R + 'B535013212/', R + 'B535341559/', R + 'B535502649/', R + 'B536422592/', R + 'B537566956/', R + 'B538494569/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order and pay at the counter; ingredients listed on the menu; takeaway.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区麩屋町通綾小路下る俵屋町309-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.002293, 135.765680); cross-checked: GSI 京都府京都市下京区俵屋町309番地 (lot) 25 m; nearest Kyoto record 15.8 m away; checked against main ad25a35a; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536422592/'],
    price_note: 'Price from a September 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Classic burrito', '¥1,100', 'Burritos', 'no', 'no', 'September 2026.', 'classic'),
      it('', '', 'Kids taco rice', '', 'Kids', 'ask', 'no', 'July 2026.', 'kids_taco_rice'),
    ] }, {
    cuisine: '古い家のおしゃれなブリトーとタコスの店 (2026年の口コミ)・野菜、鶏肉、豆、ご飯がぎっしりのブリトー、人気のクラシック1,100円、サルサで味変、ラップサンド、タコス (2026年7〜10月)・ドリンクやメキシカンポテトのセット、子ども用のやさしい味のタコライス、ビール (2026年7〜10月)・1,000〜2,000円ほど (食べログ)',
    neighborhood: '綾小路の南の麩屋町通。河原町駅から徒歩4分',
    gf_detail: 'グルテンフリー不可。小麦のトルティーヤのブリトーとラップ、揚げたものも (2026年の口コミ)。',
    vegan_detail: '要確認。ブリトーは野菜、豆、ご飯がたっぷりでメニューに材料がすべて書かれているが、クラシックは鶏肉入り。ヴィーガンの品は未確認 (2026年の口コミ)。',
    notes: '[ブリトー・河原町近くの麩屋町] 古い家の小さくにぎやかなブリトーとタコスの店。もちもちのトルティーヤに野菜、鶏肉、豆、ご飯を詰めた大きなブリトー (人気は1,100円のクラシック)、ラップ、タコス、子ども用のタコライスも。先に注文と支払い、昼は行列。夏の行列には店員が保冷剤や日傘を貸してくれた。',
  });
}

// ================================================================ タイキッチン BARAMEE
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26030959/'; const R = TB + 'dtlrvwlst/';
  const L = ['11:30', '14:30'];
  const TU = day(L, ['18:00', '24:00']); const TH = day(L, ['18:00', '23:00']); const SA = day(L, ['17:00', '24:00']); const SU = day(L, ['17:00', '23:00']);
  put({
    id: 'kyoto_thai_kitchen_baramee', name: 'タイキッチン BARAMEE (Thai Kitchen BARAMEE)', category: 'OMNI',
    lat: 35.00603112787234, lng: 135.7706776203652, cuisine_type: 'thai',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Rice dishes and rice-noodle pad thai, but fish sauce, soy-based seasonings, fried spring rolls and curries; no gluten information (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Coriander salad and adjustable dishes, but fish sauce and shrimp are common; staff changed a dressing and the spice level on request (2025–2026 reviews).',
    hours_raw: 'Lunch Tuesday–Sunday 11:30–14:30 (last order 14:00). Dinner: Tuesday, Wednesday, Friday and the day after a holiday 18:00–24:00; Thursday 18:00–23:00; Saturday and the day before a holiday 17:00–24:00; Sunday and holidays 17:00–23:00 (last orders 22:00–23:00). Closed Monday (Tuesday if Monday is a holiday); no lunch 1–3 January (Tabelog). Reservations accepted; groups of five or more are split into tables of four; everyone orders a drink at dinner (Tabelog). 1F of the RINSEN AVENUE building on Kiyamachi; 3 min walk from Hankyu Kawaramachi Stn (Tabelog). Opened 22 June 2018 (Tabelog).',
    hours: { 1: TU, 2: TU, 3: TH, 4: TU, 5: SA, 6: SU }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi north of Shijo — 3 min walk from Kawaramachi Stn',
    cuisine: 'Thai restaurant with a Thai chef and a street-stall feel, covered in stickers (2026 reviews) · lunch sets: pad thai ¥1,180 (large free), gapao rice ¥1,180, green curry, khao man gai (November 2025–July 2026) · dinner: tom yum goong, coriander salad, shrimp spring rolls ¥250, fresh spring rolls, soft-shell crab curry, Thai hotpot; courses with all-you-can-drink (2025–2026 reviews) · spice in several levels; fish sauce and condiments on the table; glass beer ¥320 (2025–2026 reviews) · about ¥1,000–3,000 (Tabelog; 2025–2026 reviews)',
    website: null, gmaps: gm('タイキッチン BARAMEE 木屋町'), menu_url: null,
    notes: '[Thai · Kiyamachi north of Shijo] A lively Thai kitchen on Kiyamachi with a Thai chef, per a reviewer: pad thai and gapao lunch sets for ¥1,180 (free large pad thai), and at night tom yum goong, soft-shell crab curry, shrimp spring rolls and Thai hotpot, with courses and all-you-can-drink. Spice can be dialled down — or up. One July 2026 diner found it average. Closed Monday.',
    chef_bio: { chef_name: null, roles: ['Thai chef (unnamed, per a June 2026 review)', 'Floor staff'], origin: null,
      background: 'Per Tabelog: a Thai restaurant, izakaya and dining bar opened 22 June 2018 on Kiyamachi. A June 2026 reviewer credits a Thai chef; reviewers describe friendly staff who adjust spice and dressings on request (2025–2026).',
      philosophy: null, specialty: 'Pad thai; gapao rice.',
      anecdotes: [
        { text: 'A December 2025 diner worried about heat had the gapao rice made without spice and the salad dressing changed.', source: R + 'B518289398/' },
        { text: 'A January 2026 lunch guest chose the middle of three spice levels for the green curry and found it very hot.', source: R + 'B521002441/' },
        { text: 'A July 2026 diner found the pad thai just okay — a place for first-timers to Thai food.', source: R + 'B532579221/' },
      ],
      japanese_sources_summary: '食べログ: タイ料理・居酒屋・ダイニングバー、中京区下樵木町199-6 RINSEN AVENUEビル1F、阪急河原町駅から徒歩3分、昼 火〜日 11:30〜14:30 (L.O.14:00)、夜 火・水・金・祝翌日 18:00〜24:00、木 18:00〜23:00、土・祝前日 17:00〜24:00、日・祝 17:00〜23:00、月曜休み (祝日の場合は翌火曜)、1月1〜3日は昼なし、予約可、5名以上は4名ずつのテーブル、夜は1人1ドリンク、2018年6月22日開店。口コミ (2025年11月〜2026年10月、英語): タイ人のシェフとの声、屋台のような雰囲気、ステッカーだらけの店内、パッタイのセット1,180円 (大盛り無料)、ガパオライス1,180円、グリーンカレー、カオマンガイ、トムヤムクン、パクチーサラダ、えびの揚げ春巻き250円、生春巻き、ソフトシェルクラブのカレー、タイの鍋、飲み放題付きのコース、辛さを選べる、ナンプラーなどの調味料、グラスビール320円、普通の味との声 (2026年7月)。',
      confidence: 'medium', sources: [TB, R + 'B517122553/', R + 'B518077399/', R + 'B518289398/', R + 'B521002441/', R + 'B527486466/', R + 'B529515769/', R + 'B531067593/', R + 'B532579221/', R + 'B533102486/', R + 'B537667987/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Spice adjustable; one drink each at dinner.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区下樵木町199-6 RINSEN AVENUEビル1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.006031, 135.770678); cross-checked: GSI 京都府京都市中京区下樵木町199番地 (lot) 18 m; nearest Kyoto record 10.4 m (えなみ家 サクの間, this batch), then kyoto_g_men_kiyamachi 28.4 m; checked against main ad25a35a; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B517122553/', R + 'B518289398/'],
    price_note: 'Prices from November and December 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Pad thai set (lunch)', '¥1,180', 'Lunch', 'ask', 'ask', 'November 2025.', 'pad_thai'),
      it('', '', 'Gapao rice set (lunch)', '¥1,180', 'Lunch', 'ask', 'no', 'December 2025.', 'gapao'),
      it('', '', 'Shrimp spring rolls', '¥250', 'Small plates', 'no', 'no', 'December 2025.', 'spring_rolls'),
    ] }, {
    cuisine: 'タイ人のシェフの、ステッカーだらけの屋台風のタイ料理の店 (2026年の口コミ)・昼のセット: パッタイ1,180円 (大盛り無料)、ガパオライス1,180円、グリーンカレー、カオマンガイ (2025年11月〜2026年7月)・夜: トムヤムクン、パクチーサラダ、えびの揚げ春巻き250円、生春巻き、ソフトシェルクラブのカレー、タイの鍋、飲み放題付きのコース (2025〜2026年の口コミ)・辛さは数段階、卓上にナンプラーなどの調味料、グラスビール320円 (2025〜2026年の口コミ)・1,000〜3,000円ほど (食べログ、2025〜2026年の口コミ)',
    neighborhood: '四条の北の木屋町。河原町駅から徒歩3分',
    gf_detail: '要確認。ご飯ものや米粉麺のパッタイもあるが、ナンプラー、醤油系の調味料、揚げ春巻き、カレー。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。パクチーサラダや調整できる料理もあるが、ナンプラーやえびが多い。頼めばドレッシングや辛さを変えてくれた (2025〜2026年の口コミ)。',
    notes: '[タイ料理・四条の北の木屋町] 口コミによればタイ人のシェフがいる木屋町のにぎやかなタイ料理の店。昼は1,180円のパッタイ (大盛り無料) やガパオのセット、夜はトムヤムクン、ソフトシェルクラブのカレー、えびの春巻き、タイの鍋、コースや飲み放題も。辛さは控えめにも激辛にも。2026年7月の客は普通の味と感じた。月曜休み。',
  });
}

save();
