// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 77.
//   + LATTICE LOUNGE (lobby lounge and afternoon tea, Hilton Kyoto; rest)
//   + PATISSERIE SAKI INOUE (roll cakes, canelés and kakigori until late, Gion north side; rest)
//   + まそほ3B Masoho 3B (yakitori, sashimi and wine izakaya, Shijo-Karasuma; rest)
//   + 沖縄料理ナンクル食堂 Nankuru Shokudo (Okinawan izakaya with live folk music, Kiyamachi-Sanjo; rest)
//   Rest list (mod 6 = 1) after batch 76, nearest-first — skipped:
//   - 山利商店 26023555: non-restaurant retail — a white-miso shop (reviews 2016–2025 describe buying miso).
//   - ベンジャミングリル京都 26033869: chain — Benjamin Steakhouse group (same call as 26031586).
//   - Route Z 26045077: thin listing, 1 review.
//   - Pace 26033395: thin listing, 1 review.
//   - Modern Times 26003941: a live-music venue and event hall (its site: 京都 ライブハウス & 大正レトロダイニングウェディング),
//     reviewed almost wholly for performances with ¥500 food alongside — not drafted as a restaurant; flagged for the coordinator.
//   Brand check: queue-status.jsonl grepped for ラティス / LATTICE, SAKI INOUE, まそほ, ナンクル — no entries. LATTICE LOUNGE is a
//   Hilton Kyoto outlet that takes outside guests (hotel restaurants that do are drafted; kyoto_teori_hilton and
//   kyoto_seven_embers_hilton are in data). まそほ has one sister, まそほ離れ, in our crawl — small, drafted. None of the four is
//   in data/kyoto.json (main f7080e26, hidden records included) by name.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-77');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260301/26023555/', 'non-restaurant retail: 山利商店 is a white-miso maker\'s shop (reviews 2016–2025 describe buying miso)');
skip('https://tabelog.com/en/kyoto/A2601/A260201/26033869/', 'chain: Benjamin Steakhouse group — same call as 26031586');
skip('https://tabelog.com/en/kyoto/A2601/A260201/26045077/', 'thin listing: 1 review');
skip('https://tabelog.com/en/kyoto/A2601/A260101/26033395/', 'thin listing: 1 review');
skip('https://tabelog.com/en/kyoto/A2601/A260202/26003941/', 'live-music venue and event hall (site: 京都 ライブハウス & 大正レトロダイニングウェディング モダンタイムス); reviewers come for performances, with ¥500 dishes alongside — not a restaurant; flagged for the coordinator');

// LATTICE LOUNGE: drafted by the worker; converted to a skip by the integrator (national hotel group, as KIHARU and the Hilton rooftop bar).
skip('26041897', 'large parent: LATTICE LOUNGE is the lounge of Hilton Kyoto (kyoto.hiltonjapan.co.jp), a national hotel group; same footing as KIHARU Brasserie (ORIX) and クラウドネスト (Hilton, 26041812)');

// ================================================================ PATISSERIE SAKI INOUE
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26040487/'; const R = TB + 'dtlrvwlst/';
  const L = day(['14:00', '25:00']);
  put({
    id: 'kyoto_patisserie_saki_inoue', name: 'PATISSERIE SAKI INOUE', category: 'OMNI',
    lat: 35.00417455015198, lng: 135.77687093086973, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: roll cakes and canelés (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: cream roll cakes, canelés and cream-topped kakigori (2024–2026 reviews).',
    hours_raw: 'Tuesday–Saturday 14:00–1:00; Sunday 14:00–19:00 (Tabelog). Tabelog lists Monday as both 14:00–1:00 and a closing day, so Monday is left out here — check before going. Reservations accepted (Tabelog). Cards, e-money and QR (Tabelog). Eat-in café at the back of a basement floor; take-away from the showcase (2024–2026 reviews). B1F of the building housing Hoshino Resorts OMO5 Kyoto Gion, near Yasaka Shrine (January and August 2026 reviews). Opened 13 November 2022 (Tabelog).',
    hours: { 1: L, 2: L, 3: L, 4: L, 5: L, 6: day(['14:00', '19:00']) }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion north side, near Yasaka Shrine',
    cuisine: 'Patisserie café specialising in roll cakes, open late (2024–2026 reviews) · more than ten roll cakes, e.g. ancient-rice roll, raspberry mascarpone, black-soybean kinako, seasonal purple sweet potato mini roll ¥660, toasted with a burner to order (December 2024–October 2026) · canelés such as chocolate and rum vanilla; "Gion Ice" kakigori such as tapioca milk tea or strawberry ¥1,430; yuzu cider, coffee, cappuccino (2024–2026 reviews) · about ¥1,000–2,000 (Tabelog)',
    website: null, gmaps: gm('PATISSERIE SAKI INOUE 祇園'), menu_url: null,
    notes: '[Patisserie café · Gion, until 1 a.m.] A quiet basement café near Yasaka Shrine, open late, with a showcase of more than ten roll cakes — ancient rice, raspberry mascarpone, seasonal sweet potato — toasted to order, plus small canelés and summer "Gion Ice" kakigori. Monday hours are unclear; check first.',
    chef_bio: { chef_name: null, roles: ['Patissier (unnamed)'], origin: null,
      background: 'Per Tabelog: a patisserie opened 13 November 2022. Reviewers in 2024–2026 describe a hidden basement café below the OMO5 hotel, specialising in roll cakes and open late.',
      philosophy: null, specialty: 'Roll cakes.',
      anecdotes: [
        { text: 'A July 2026 pair chose from more than ten roll cakes — a chewy ancient-rice roll and a raspberry mascarpone — and liked both.', source: R + 'B532222027/' },
        { text: 'An August 2025 parent and daughter had the patisserie\'s "Gion Ice" kakigori, tapioca milk tea and strawberry, at ¥1,430 each.', source: R + 'B511477392/' },
        { text: 'A September 2024 visitor found it pricey and preferred convenience-store cakes, but enjoyed choosing among the many flavours.', source: R + 'B500166958/' },
      ],
      japanese_sources_summary: '食べログ: スイーツ (洋菓子)、東山区祇園町北側288 B1F、祇園四条から456m、月〜土 14:00〜翌1:00、日 14:00〜19:00、ただし定休日は月曜とも記載、予約可、カード・電子マネー・QR 可、2022年11月13日開店。口コミ (2024年9月〜2026年10月、英語): OMO5 京都祇園の建物の地下の隠れ家カフェ、10種以上のロールケーキ (古代米、ラズベリーとマスカルポーネ、黒豆きなこ、季節の紫芋のミニロール660円)、注文ごとにバーナーで炙る、カヌレ (チョコ、ラムバニラ)、「Gion Ice」のかき氷 (タピオカミルクティー、いちご 各1,430円)、ゆずサイダー、コーヒー、遅くまで静か、高いとの声 (2024年9月)、固かったとの声 (2025年3月)。',
      confidence: 'medium', sources: [TB, R + 'B494728357/', R + 'B498537037/', R + 'B498650180/', R + 'B500166958/', R + 'B503475552/', R + 'B511477392/', R + 'B532222027/', R + 'B533348301/', R + 'B533498242/', R + 'B537991955/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Basement café; open late; cards, IC and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側288 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004175, 135.776871); cross-checked: GSI 京都府京都市東山区祇園町北側288番地 (lot) 6 m; nearest existing record 15.9 m (kyoto_gion_nakahara); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537991955/', R + 'B511477392/'],
    price_note: 'Prices from August 2025 and October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Seasonal mini roll cake', '¥660', 'Cakes', 'no', 'no', 'October 2026.', 'roll'),
      it('', '', 'Gion Ice kakigori (tapioca milk tea or strawberry)', '¥1,430', 'Kakigori', 'ask', 'no', 'August 2025.', 'kakigori'),
    ] }, {
    cuisine: 'ロールケーキが専門の遅くまで開くパティスリーのカフェ (2024〜2026年の口コミ)・10種以上のロールケーキ (古代米、ラズベリーとマスカルポーネ、黒豆きなこ、季節の紫芋のミニロール660円) を注文ごとにバーナーで炙る (2024年12月〜2026年10月)・チョコやラムバニラのカヌレ、タピオカミルクティーやいちごの「Gion Ice」1,430円、ゆずサイダー、コーヒー、カプチーノ (2024〜2026年の口コミ)・1,000〜2,000円ほど (食べログ)',
    neighborhood: '祇園北側、八坂神社のそば',
    gf_detail: 'グルテンフリー不可。ロールケーキとカヌレ (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。クリームのロールケーキ、カヌレ、クリームのかき氷 (2024〜2026年の口コミ)。',
    notes: '[パティスリーのカフェ・祇園、深夜1時まで] 八坂神社近くの遅くまで開く静かな地下のカフェ。ショーケースには古代米、ラズベリーとマスカルポーネ、季節の紫芋など10種以上のロールケーキ、注文ごとに炙ってくれる。小さなカヌレや夏の「Gion Ice」も。月曜の営業は不明なので確認を。',
  });
}

// ================================================================ まそほ3B Masoho 3B
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26039065/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://masoho-3b.com/';
  const H = day(['17:30', '23:30']);
  put({
    id: 'kyoto_masoho_3b', name: 'まそほ3B (Masoho 3B)', category: 'OMNI',
    lat: 35.004280979502425, lng: 135.76074286833435, cuisine_type: 'yakitori',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: tare-glazed yakitori, chicken nanban, mozuku tempura and fried corn (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken, fish, karasumi and eel (2026 reviews).',
    hours_raw: 'Daily 17:30–23:30 (Tabelog). Reservations accepted and advised (Tabelog; August 2026). Cards (VISA, Master, JCB, AMEX, Diners) and PayPay; no e-money (Tabelog). 35 seats at the counter and tables (Tabelog; July 2026). Non-smoking (Tabelog). Children and strollers welcome (Tabelog). Half portions available (August 2026). Higashinotoin building 1F, set back from the street; 2 min walk from Karasuma Stn (Tabelog; July 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shijo-Karasuma, Higashinotoin',
    cuisine: 'Izakaya pairing yakitori and fish with a long list of wines by the glass and sake (2026 reviews) · signature seared sea bream with karasumi and smoked salt; yakitori omakase of three or more, e.g. heart with black pepper, thigh with tare; sashimi; sushi (July–October 2026) · creative plates: daikon with mushroom sauce, potatoes sautéed in miso butter, eel potato salad, fried corn, carpaccio, Okinawan mozuku tempura, chicken nanban, egg over rice (July–October 2026) · about ¥4,000–6,000 (Tabelog; 2026 reviews)',
    website: WEB, gmaps: gm('まそほ3B 四条烏丸'), menu_url: null,
    notes: '[Yakitori and fish izakaya · Shijo-Karasuma] A stylish, slightly hidden izakaya near Karasuma where yakitori meets sashimi and sushi, with plenty of wine by the glass: everyone orders the seared sea bream with karasumi, then skewers, eel potato salad or miso-butter potatoes. Half portions available. Book ahead; open daily.',
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null,
      background: 'Per Tabelog and reviewers: a yakitori, sushi and izakaya restaurant near Shijo-Karasuma pairing chicken and fish with wine; a sister, まそほ離れ, appears in our crawl (2026 reviews).',
      philosophy: null, specialty: 'Seared sea bream with karasumi.',
      anecdotes: [
        { text: 'An August 2026 diner calls the seared sea bream with karasumi the dish everyone orders, and recommends the egg over rice.', source: R + 'B534596147/' },
        { text: 'A September 2026 visitor on a third stop had the three-skewer omakase and mozuku tempura, wishing it had been the first stop.', source: R + 'B535319470/' },
        { text: 'A July 2026 guest started on wine by the glass but switched to sake once the daikon with mushroom-and-dashi sauce arrived.', source: R + 'B531030490/' },
      ],
      japanese_sources_summary: '食べログ: 焼き鳥・寿司・居酒屋、中京区阪東屋町664-24 東洞院ビル 1F、烏丸駅から徒歩2分、毎日 17:30〜23:30、予約可、カード (VISA・Master・JCB・AMEX・Diners)・PayPay 可、電子マネー不可、35席、禁煙、子ども・ベビーカー可、飲み放題のコース、公式サイトあり。口コミ (2026年4月〜10月、英語): 名物の鯛の炙りとからすみと燻製塩、焼き鳥のおまかせ3本、ハツの粗挽き黒胡椒、もものたれ、チキン南蛮、刺身、寿司、きのこあんの大根、じゃがいもの味噌バター、鰻のポテトサラダ、とうもろこしの天ぷら、カルパッチョ、沖縄のもずくの天ぷら、卵かけご飯、グラスワインが豊富、ハーフサイズも可、入り口が奥まっている。',
      confidence: 'medium', sources: [TB, WEB, R + 'B526939960/', R + 'B531023063/', R + 'B531030490/', R + 'B533455081/', R + 'B534449021/', R + 'B534470812/', R + 'B534596147/', R + 'B535319470/', R + 'B535356206/', R + 'B537459592/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; half portions; children welcome; cards and PayPay.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区阪東屋町664-24 東洞院ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004281, 135.760743); cross-checked: GSI 京都府京都市中京区阪東屋町664番地 (lot) 23 m; nearest existing record 20.9 m (kyr_ramen_kura); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534596147/'],
    price_note: 'No item prices in the sources.', last_checked: TODAY, items: [
      it('', '', 'Seared sea bream with karasumi', '', 'Signature', 'ask', 'no', '2026 reviews; half portion available.', 'tai_karasumi'),
      it('', '', 'Yakitori omakase (three skewers)', '', 'Yakitori', 'ask', 'no', 'September 2026.', 'yakitori'),
    ] }, {
    cuisine: '焼き鳥と魚に豊富なグラスワインと日本酒の居酒屋 (2026年の口コミ)・名物の鯛の炙りとからすみと燻製塩、焼き鳥のおまかせ (ハツの粗挽き黒胡椒、もものたれなど)、刺身、寿司 (2026年7〜10月)・創作の皿: きのこあんの大根、じゃがいもの味噌バター、鰻のポテトサラダ、とうもろこしの天ぷら、カルパッチョ、沖縄のもずくの天ぷら、チキン南蛮、卵かけご飯 (2026年7〜10月)・4,000〜6,000円ほど (食べログ、2026年の口コミ)',
    neighborhood: '四条烏丸、東洞院',
    gf_detail: 'グルテンフリー不可。たれの焼き鳥、チキン南蛮、もずくの天ぷら、とうもろこしの揚げ物 (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鶏、魚、からすみ、鰻 (2026年の口コミ)。',
    notes: '[焼き鳥と魚の居酒屋・四条烏丸] 烏丸近くの少し奥まったおしゃれな居酒屋で、焼き鳥と刺身や寿司をグラスワインとともに。みんなが頼むのは鯛の炙りとからすみ、それから串、鰻のポテトサラダ、じゃがいもの味噌バター。ハーフサイズも可。予約がおすすめ、毎日営業。',
  });
}

// ================================================================ 沖縄料理ナンクル食堂 Nankuru Shokudo
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26031175/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['17:00', '24:00']);
  put({
    id: 'kyoto_nankuru_shokudo', name: '沖縄料理ナンクル食堂 (Nankuru Shokudo)', category: 'OMNI',
    lat: 35.01012287786976, lng: 135.77073187040648, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: Okinawa soba, fu champuru and fried dishes (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork ear, rafute, soki and pork-based Okinawan dishes (2026 reviews).',
    hours_raw: 'Tuesday–Friday 17:00–24:00 (last orders food 22:00, drinks 23:20); Saturday 15:30–24:00; Sunday 15:30–23:00; holidays 15:30–24:00; closed Monday; hours may change for private bookings or events; occasional temporary closures (Tabelog). Reservations accepted; two and a half hours à la carte, two hours on a course; one drink per person (Tabelog). Appetizer charge ¥300 (Tabelog original 付き出し300円). Cards (VISA, Master, JCB, AMEX, Diners), e-money (IC, iD) and QR (PayPay, d Barai) (Tabelog). 50 seats: 6 at the counter, 26 at tables, 20 at sunken-kotatsu tables; private hire for 20–50 (Tabelog). Non-smoking; wheelchair accessible (Tabelog). Live Okinawan folk music on some nights (Tabelog; 2026 reviews). Kyoto Empire Building 1F, Kiyamachi above Sanjo; 3 min walk from Kyoto Shiyakusho-mae Stn (Tabelog).',
    hours: { 1: WD, 2: WD, 3: WD, 4: WD, 5: day(['15:30', '24:00']), 6: day(['15:30', '23:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi, just north of Sanjo',
    cuisine: 'Okinawan izakaya with live folk music on some nights (Tabelog; 2026 reviews) · sea grapes with wasabi, island shallots, vinegared mozuku, salted island garlic chives, mimiga (pork ear), fu champuru, rafute, soki soba, Okinawa soba to finish (February–October 2026) · Orion beer and awamori such as Zanpa, with bottle keep; all-you-can-drink courses (2026 reviews) · about ¥3,000–5,000 (Tabelog)',
    website: null, gmaps: gm('沖縄料理ナンクル食堂 木屋町'), menu_url: null,
    notes: '[Okinawan izakaya · Kiyamachi-Sanjo] A lively Okinawan tavern on Kiyamachi with sanshin folk songs on stage some nights: sea grapes, island shallots, mimiga, fu champuru and rafute with Orion beer and awamori you can keep by the bottle, finishing on Okinawa soba. ¥300 appetizer; one drink each. Closed Monday.',
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null,
      background: 'Per Tabelog and reviewers: an Okinawan-cuisine izakaya of 50 seats on Kiyamachi with a stage for live Okinawan folk music on some days, bottle-keep awamori and all-you-can-drink courses (2026 reviews).',
      philosophy: null, specialty: 'Fu champuru; Okinawa soba.',
      anecdotes: [
        { text: 'A September 2026 visitor walked in on a stage of Okinawan folk songs, and advises checking which nights have live music.', source: R + 'B535321261/' },
        { text: 'A September 2026 regular keeps a bottle of awamori here and came back with five friends for the tatami seats and mimiga.', source: R + 'B476042246/' },
        { text: 'A June 2026 diner tried three Okinawan places around Kiyamachi and Gion and rated this one best for taste and atmosphere, especially the fu champuru.', source: R + 'B531187409/' },
      ],
      japanese_sources_summary: '食べログ: 沖縄料理・居酒屋・創作料理、中京区木屋町通三条上る上大阪町521 京都エンパイヤビル 1F、地下鉄市役所前駅から徒歩3分、京阪三条駅から徒歩4分、火〜金 17:00〜24:00 (L.O.料理22:00、飲み物23:20)、土 15:30〜24:00、日 15:30〜23:00、祝日 15:30〜24:00、月曜休み、貸切やイベントで時間の変更あり、予約可、アラカルトは2時間半・コースは2時間、1人1ドリンク、付き出し300円、カード・電子マネー (交通系IC・iD)・QR (PayPay・d払い) 可、50席 (カウンター6、テーブル26、掘りごたつ20)、20〜50名で貸切可、禁煙、車椅子可、ライブ演奏。口コミ (2025年12月〜2026年10月、英語): 日によって沖縄民謡のライブ、海ぶどう、島らっきょう、もずく酢、島にらの塩もみ、ミミガー、麩チャンプルー、ラフテー、ソーキそば、締めの沖縄そば、オリオンビール、泡盛 (Zanpa)、ボトルキープ、飲み放題のコース、本場には及ばないが手ごろとの声 (2026年5月)。',
      confidence: 'medium', sources: [TB, R + 'B443299336/', R + 'B476042246/', R + 'B521723368/', R + 'B523528568/', R + 'B526262111/', R + 'B529928489/', R + 'B531187409/', R + 'B532577197/', R + 'B535321261/', R + 'B538446961/'] },
    cultural_comfort: { level: 'konnichiwa', note: '¥300 appetizer; one drink each; live music some nights; wheelchair accessible; cards, IC and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区木屋町通三条上る上大阪町521 京都エンパイヤビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.010123, 135.770732); cross-checked: GSI 京都府京都市中京区上大阪町521番地 (lot) 37 m; nearest existing record 21.4 m (kyoto_s_vietnam_kiyamachi); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'Only the appetizer charge is priced (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Fu champuru', '', 'Okinawan', 'no', 'no', 'June 2026.', 'fu_champuru'),
      it('', '', 'Okinawa soba', '', 'Noodles', 'no', 'no', 'February 2026.', 'okinawa_soba'),
      it('', '', 'Appetizer charge', '¥300', 'Charge', 'ask', 'no', 'Tabelog.', 'tsukidashi'),
    ] }, {
    cuisine: '日によって民謡のライブのある沖縄料理の居酒屋 (食べログ、2026年の口コミ)・海ぶどうのわさび添え、島らっきょう、もずく酢、島にらの塩もみ、ミミガー、麩チャンプルー、ラフテー、ソーキそば、締めの沖縄そば (2026年2〜10月)・オリオンビール、泡盛 (Zanpa など) のボトルキープ、飲み放題のコース (2026年の口コミ)・3,000〜5,000円ほど (食べログ)',
    neighborhood: '木屋町、三条のすぐ北',
    gf_detail: 'グルテンフリー不可。沖縄そば、麩チャンプルー、揚げ物 (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。ミミガー、ラフテー、ソーキなど豚肉中心の沖縄料理 (2026年の口コミ)。',
    notes: '[沖縄料理の居酒屋・木屋町三条] 夜によっては舞台で三線の民謡が聞ける木屋町のにぎやかな沖縄の店。海ぶどう、島らっきょう、ミミガー、麩チャンプルー、ラフテーにオリオンビールとボトルキープできる泡盛、締めは沖縄そば。付き出し300円、1人1ドリンク。月曜休み。',
  });
}

save();
