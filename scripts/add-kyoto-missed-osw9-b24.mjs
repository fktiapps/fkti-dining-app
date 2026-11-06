// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 24.
//   + 肉まぶし専門店 稀 MARE (wagyu hitsumabushi counter in Gion north of Shijo; since 2018)                       [core]
//   + 割烹 いいもり Kappou Iimori (Gion kappo of Toyama fish, in an alley off Shijo; since 2002)                   [core]
//   + ヌフ クレープリー neuf creperie (Breton galettes and crêpes south of the Imperial Palace; since 2015)        [notable]
//   + 立呑トリズキ Tachinomi Torizuki (yakitori standing bar in an alley near Shijo-Karasuma)                         [notable]
//   Same-name counts first (same brand or operator): 稀 1 (肉まぶし専科 肉亭新 is another business); いいもり 1;
//   ヌフ クレープリー 1; トリズキ 1 — run by 株式会社クラマ計画 (KURAMA PROJECT), whose site lists about sixteen
//   differently named bars and restaurants, mostly in Osaka ("組織的 個人店 集団"); none of them is in data, so
//   treated as a local group of separate concepts and drafted.
//   Taken in queue order on 2026-11-05: core 26031449, 26000273; notable 26026019, 26039075. None is in
//   data/kyoto.json by name or address.
//   Service charges checked against Tabelog's Japanese original: いいもり "特にございません"; the others have no section.
//   Pins: Tabelog points; GSI lot matches 12–57 m; nearest records 10.6 m or more.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-24');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 肉まぶし専門店 稀
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26031449/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://gion-mare.com/';
  const WD = day(['11:00', '15:00'], ['17:00', '21:00']), WE = day(['11:00', '16:00'], ['17:00', '21:00']);
  put({
    id: 'kyoto_nikumabushi_mare', name: '肉まぶし専門店 稀 (MARE)', category: 'OMNI',
    lat: 35.004441, lng: 135.776004, cuisine_type: 'donburi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Wagyu over rice with a "secret sauce" and dashi to pour over; no gluten information (Tabelog; 2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wagyu restaurant; the broth and egg-yolk sauce come with every bowl (Tabelog; 2025–26 reviews).',
    hours_raw: 'Mon–Fri 11:00–15:00 (last order 14:30) and 17:00–21:00 (last order 20:30); Sat, Sun and holidays 11:00–16:00 (last order 15:00) and 17:00–21:00 (Tabelog). Bookings taken; one order per person except small children, no sharing; Tabelog says both that a seat cannot be held past 10 minutes late and that tables are held for one hour from the booked time (Tabelog). 13 counter seats; children welcome, strollers allowed; non-smoking; cards, IC cards and QR (Tabelog). On the south side of a lane 70 m east of Hanamikoji, north of Shijo; 1 min from the Gion bus stop (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion north of Shijo, east of Hanamikoji — 1 min from the Gion bus stop',
    cuisine: 'Wagyu "hitsumabushi" eaten three ways like the eel original — plain, with condiments, then with broth (Tabelog) · black wagyu uchihira mabushi à la carte ¥2,800 with condiments, broth and egg-yolk sauce (April 2025); a limited rare-cut mabushi ¥3,800 (October 2025); a black wagyu ichibo steak box (Tabelog); the MARE set adds a small shabu-shabu, side dishes and matcha ice cream (2025–26 reviews)',
    website: SITE, gmaps: gm('肉まぶし専門店 稀 祇園'), menu_url: SITE,
    notes: "[Wagyu hitsumabushi · Gion north of Shijo] A 13-seat counter serving black wagyu, grilled rare, over rice to eat in three stages like eel hitsumabushi — finishing with broth. Bowls about ¥2,800–3,800; sets add shabu-shabu and matcha ice cream. Popular with overseas visitors; book. Open daily, lunch and dinner.",
    chef_bio: { chef_name: null, roles: ['Operator unnamed in the sources'], origin: null,
      background: 'Opened 15 November 2018 (Tabelog). Per the operator: a specialist in wagyu hitsumabushi with a secret sauce; a black wagyu ichibo steak box added as a new menu.',
      philosophy: null, specialty: 'Wagyu hitsumabushi.',
      anecdotes: [
        { text: 'A November 2025 returnee found part-time staff arguing over the seating, and the meat looking different from before.', source: R + 'B480041446/' },
        { text: 'In October 2026 one diner noticed being the only Japanese customer — everyone else was from overseas.', source: R + 'B536951818/' },
        { text: 'A February 2026 solo traveller added Kyoto black shichimi to change the flavour and finished every grain.', source: R + 'B523710595/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 肉まぶし専門店 稀、丼・牛肉料理、東山区祇園町北側338-1 祇園川長ビル 1F、祇園四条駅から徒歩7分、四条花見小路を北へ、東へ70mの南側、月〜金 11:00〜15:00 (L.O. 14:30)・17:00〜21:00 (L.O. 20:30)、土日祝 11:00〜16:00 (L.O. 15:00)・17:00〜21:00、1人1オーダー制、10分以上の遅刻は席の用意ができない、予約時刻から1時間で席を解除、13席、子供可、カード・電子マネー・QR 可、2018年11月15日オープン、秘伝のたれの和牛ひつまぶし、黒毛和牛のイチボのステーキ重。口コミ (2025年4月〜2026年10月、英語): 黒毛和牛のうちひらの肉まぶし2,800円、希少部位3,800円、薬味と出汁、卵黄のソース、MARE セット (しゃぶしゃぶ、抹茶アイス)、海外の客が多い。',
      confidence: 'medium', sources: [TB, SITE, R + 'B480041446/', R + 'B505197294/', R + 'B516486493/', R + 'B518777791/', R + 'B519797081/', R + 'B522620490/', R + 'B523710595/', R + 'B523888659/', R + 'B536951818/', R + 'B537164148/'] },
    cultural_comfort: { level: 'english', note: 'Many overseas guests (October 2026); one order per person; book ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側338-1 祇園川長ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing kept by the shop; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004441, 135.776004); cross-checked: GSI 京都府京都市東山区祇園町北側338番地 (lot) 35m; 13.7 m from kyoto_osoba_horai (338-4); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B505197294/', R + 'B516486493/'],
    price_note: 'No menu read; prices from 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Black wagyu uchihira mabushi (à la carte)', '¥2,800', 'Bowls', 'ask', 'no', 'April 2025 review.', 'uchihira_mabushi'),
      it('', '', 'Rare-cut wagyu mabushi (limited)', '¥3,800', 'Bowls', 'ask', 'no', 'October 2025 review.', 'rare_cut'),
    ] }, {
    cuisine: '鰻のひつまぶしのように、そのまま、薬味、出汁で3通りに味わう和牛の肉まぶし (食べログ)・黒毛和牛うちひらの肉まぶし単品2,800円 (薬味、出汁、卵黄のソース付き、2025年4月)、限定の希少部位3,800円 (2025年10月)、黒毛和牛イチボのステーキ重 (食べログ)、小さなしゃぶしゃぶ、小鉢、抹茶アイスの付く MARE セット (2025〜26年の口コミ)',
    neighborhood: '四条の北の祇園、花見小路の東。祇園バス停から徒歩1分',
    gf_detail: '要確認。秘伝のたれと出汁の和牛のご飯。グルテンの情報はない (食べログ、2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。和牛の店で、出汁と卵黄のソースが付く (食べログ、2025〜26年の口コミ)。',
    notes: '[和牛ひつまぶし・四条の北の祇園] 13席のカウンターで、レアに焼いた黒毛和牛をご飯にのせ、鰻のひつまぶしのように3段階で味わい、最後は出汁で。1杯2,800〜3,800円ほど、セットはしゃぶしゃぶと抹茶アイス付き。海外の客も多いので予約を。昼夜とも毎日営業。',
  });
}

// ================================================================ 割烹 いいもり
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26000273/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '14:00'], ['17:00', '21:00']);
  put({
    id: 'kyoto_kappou_iimori', name: '割烹 いいもり (Kappou Iimori)', category: 'OMNI',
    lat: 35.005136, lng: 135.776134, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. Fish courses with dashi, sashimi and claypot rice; no gluten information (Tabelog; 2023–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses of Toyama seafood and dashi (Tabelog; 2023–26 reviews).',
    hours_raw: 'Mon–Sat lunch 12:00–14:00 (last entry 12:30) and dinner 17:00–21:00 (last entry 19:00); closed Sunday (Tabelog). Courses by reservation; lunch only when booked — a ¥4,500 lunch course (Tabelog). Service charge: none noted — Tabelog\'s Japanese original: "特にございません". 10 seats: a 5-seat counter and a tatami room upstairs for up to 6; smoking only on the 2nd floor; children welcome; cards (VISA, JCB, AMEX, Diners) (Tabelog). Down a narrow alley in Gion north of Shijo — reviewers warn it is hard to find (2024–26 reviews); 10 min from Gion-Shijo Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion north of Shijo, in an alley — 10 min from Gion-Shijo Stn',
    cuisine: 'Kappo courses of seasonal seafood sent daily from Toyama, with Kyoto vegetables, and sake to match (Tabelog) · lunch course ¥4,500 (Tabelog); a ¥7,000 lunch (November 2023) and a ¥9,000 course (July 2024) · in reviews: crab and ikura chawanmushi, seko crab, marinated mackerel, Toyama tuna, squid, turban shell, kombu-cured amadai, water octopus, hamo soup, white shrimp and firefly squid in spring, claypot rice to finish (2023–26 reviews)',
    website: null, gmaps: gm('割烹 いいもり 祇園'), menu_url: null,
    notes: "[Kappo · Gion, Toyama seafood] A hidden Gion kappo down a narrow alley, where a couple from Toyama serve fish sent daily from home — kombu-cured amadai, white shrimp, seko crab — with Kyoto vegetables and claypot rice. Five counter seats and a tatami room. Lunch from ¥4,500 by booking; dinner about ¥10,000–15,000. Closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Owner-chef from Toyama (unnamed), with a spouse — per 2024–26 reviews'], origin: 'Toyama Prefecture (March 2024 and July 2026 reviews).',
      background: 'Opened 1 April 2002 (Tabelog). Per the operator: fresh seasonal seafood sent daily from Toyama. Per 2024–26 reviews: the owner couple are from Toyama and welcome first-timers warmly; a July 2024 reviewer says the Toyama tuna has come in for about seven years.',
      philosophy: null, specialty: 'Toyama seafood courses.',
      anecdotes: [
        { text: 'Unlike many traditional ryotei, the chef couple made first-time visitors very welcome — July 2026.', source: R + 'B531785934/' },
        { text: 'On a hot July 2024 day, water had been sprinkled outside the alley entrance, and the guest was shown to an elegant room upstairs.', source: R + 'B488065185/' },
        { text: 'An August 2026 business traveller ended with claypot rice and wondered whether crab comes in winter.', source: R + 'B228275654/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 割烹 いいもり、日本料理・海鮮、東山区祇園町北側347-100、祇園四条から徒歩10分、月〜土 12:00〜14:00 (最終入店12:30)・17:00〜21:00 (最終入店19:00)、日曜休み、サービス料: 特にございません、10席 (カウンター5、2階の座敷6)、2階のみ喫煙可、子供可、2002年4月1日オープン、富山から毎日届く旬の魚介と京野菜、昼の4,500円のコース (要予約)。口コミ (2023年11月〜2026年8月、英語): 富山出身の店主夫婦、蟹といくらの茶碗蒸し、せこ蟹、鯖、富山の鮪、甘鯛の昆布締め、水蛸、鱧の椀、白海老、ホタルイカ、土鍋ご飯、7,000円の昼、9,000円のコース。',
      confidence: 'medium', sources: [TB, R + 'B228275654/', R + 'B475060358/', R + 'B481312230/', R + 'B488065185/', R + 'B491951430/', R + 'B495838986/', R + 'B498863349/', R + 'B507646579/', R + 'B509733425/', R + 'B531785934/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; lunch only by reservation; the alley entrance is hard to find.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側347-100',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.005136, 135.776134); cross-checked: GSI 京都府京都市東山区祇園町北側347番地 (lot) 57m; 16.4 m from kyoto_sangencha_gion (347-96); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'Lunch course price from Tabelog\'s shop text; other prices from 2023–24 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch course (by reservation)', '¥4,500', 'Lunch', 'ask', 'no', '', 'lunch_4500'),
      it('', '', 'Course', '¥9,000', 'Dinner', 'ask', 'no', 'July 2024 review.', 'course_9000'),
    ] }, {
    cuisine: '富山から毎日届く旬の魚介と京野菜の割烹のコースに、合う日本酒 (食べログ)・昼のコース4,500円 (食べログ)。7,000円の昼 (2023年11月)、9,000円のコース (2024年7月)・口コミの料理: 蟹といくらの茶碗蒸し、せこ蟹、しめ鯖、富山の鮪、イカ、サザエ、甘鯛の昆布締め、水蛸、鱧の椀、春の白海老とホタルイカ、締めの土鍋ご飯 (2023〜26年の口コミ)',
    neighborhood: '四条の北の祇園の路地。祇園四条駅から徒歩10分',
    gf_detail: '予約時に要確認。出汁、刺身、土鍋ご飯の魚のコース。グルテンの情報はない (食べログ、2023〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。富山の魚介と出汁のコース (食べログ、2023〜26年の口コミ)。',
    notes: '[割烹・祇園、富山の魚] 細い路地の奥の祇園の隠れた割烹で、富山出身の夫婦が地元から毎日届く魚 (甘鯛の昆布締め、白海老、せこ蟹など) を京野菜と土鍋ご飯とともに出す。カウンター5席と座敷。昼は予約で4,500円から、夜は1万〜1万5千円ほど。日曜休み。',
  });
}

// ================================================================ ヌフ クレープリー
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26026019/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['10:00', '16:30']), WE = day(['10:00', '17:00']);
  put({
    id: 'kyoto_neuf_creperie', name: 'ヌフ クレープリー (neuf creperie)', category: 'OMNI',
    lat: 35.015024, lng: 135.762133, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Galettes are buckwheat-based but the sweet crêpes are wheat (September 2026 review); the buckwheat share and kitchen practice are not stated; no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: galettes of ham, egg and cheese, and crêpes with butter, custard and cream (2026 reviews).',
    hours_raw: 'Mon–Fri 10:00–16:30 (last order 16:00); Sat, Sun and holidays 10:00–17:00 (last order 16:30); closing days not fixed (Tabelog). Bookings taken (Tabelog); a set of galette, crêpe and drink at lunch, 11:00–15:00 (August 2026). Cash only — no cards, e-money or QR (Tabelog). 30 seats (4 at the counter); takeaway; children welcome, strollers allowed; non-smoking (Tabelog). On Ebisugawa-dori west of Takakura; 5 min from Marutamachi Stn (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Ebisugawa-dori south of the Imperial Palace — 5 min from Marutamachi Stn',
    cuisine: 'Breton galettes and crêpes (October 2026): six galettes and six crêpes to choose from in the lunch set with a drink (August 2026) · galettes such as the complète of ham, cheese and vegetables, mozzarella with tomato, meat sauce and basil, peach with prosciutto; crêpes such as Échiré butter and sugar, honey and whipped cream, the custard "neuf crêpe" (2026 reviews) · breakfast available (Tabelog)',
    website: null, gmaps: gm('ヌフ クレープリー 京都'), menu_url: null,
    notes: "[Galettes & crêpes · south of the Imperial Palace] A bright, relaxed Breton crêperie on Ebisugawa-dori: crisp buckwheat galettes (ham, cheese, egg; peach and prosciutto in summer) and chewy sweet crêpes like Échiré butter and sugar. Lunch sets about ¥2,000. Cash only; book at weekends. Open daily from 10:00.",
    chef_bio: { chef_name: null, roles: ['Operator unnamed in the sources'], origin: null,
      background: 'Opened 9 September 2015 (Tabelog). A five-time regular orders the galette, crêpe and drink set at lunch (August 2026).',
      philosophy: null, specialty: 'Buckwheat galettes; neuf crêpe.',
      anecdotes: [
        { text: 'A first-time visitor in September 2026 learned that galettes are buckwheat and crêpes wheat — and that galettes are not always savoury.', source: R + 'B536579731/' },
        { text: 'A galette lover who dislikes avocado swapped the classic complète for the mozzarella, tomato and meat-sauce galette — October 2026.', source: R + 'B538276577/' },
        { text: 'Walking in without a booking on a weekday afternoon, an October 2026 diner was told to sit anywhere; three more groups followed.', source: R + 'B536949790/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): ヌフ クレープリー、クレープ・ガレット・カフェ、中京区夷川通高倉西入ル山中町550-1、丸太町駅から徒歩5分、月〜金 10:00〜16:30 (L.O. 16:00)、土日祝 10:00〜17:00 (L.O. 16:30)、不定休、予約可、カード・電子マネー・QR 不可、30席 (カウンター4、テーブル26)、テイクアウト、子供可、朝食あり、2015年9月9日オープン。口コミ (2026年5〜10月、英語): ガレットとクレープとドリンクのセット、ガレット6種とクレープ6種、コンプレット、桃と生ハムのガレット、エシレバターと砂糖のクレープ、ヌフクレープ、ブルターニュの料理。',
      confidence: 'medium', sources: [TB, R + 'B122386708/', R + 'B505325028/', R + 'B532807990/', R + 'B532911691/', R + 'B532969510/', R + 'B534022213/', R + 'B536579731/', R + 'B536949790/', R + 'B537049709/', R + 'B538276577/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only; book at weekends.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区夷川通高倉西入ル山中町550-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.015024, 135.762133); cross-checked: GSI 京都府京都市中京区山中町550番地 (lot) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B505325028/'],
    price_note: 'No menu or prices read.', last_checked: TODAY, items: [
      it('', '', 'Galette, crêpe and drink set (lunch)', '', 'Sets', 'ask', 'no', 'August 2026 review.', 'set'),
      it('', '', 'Galette complète (ham, cheese, egg)', '', 'Galettes', 'ask', 'no', '', 'complete'),
    ] }, {
    cuisine: 'ブルターニュのガレットとクレープ (2026年10月): 昼はガレット6種とクレープ6種から選べるドリンク付きのセット (2026年8月)・ハム、チーズ、野菜のコンプレット、モッツァレラとトマトとミートソースとバジル、桃と生ハムなどのガレット。エシレバターと砂糖、蜂蜜と生クリーム、カスタードのヌフクレープなどのクレープ (2026年の口コミ)・朝食あり (食べログ)',
    neighborhood: '御所の南の夷川通。丸太町駅から徒歩5分',
    gf_detail: '要確認。ガレットはそば粉だが甘いクレープは小麦 (2026年9月の口コミ)。そば粉の割合や調理の扱いは不明。グルテンの情報はない。',
    vegan_detail: '実際にはヴィーガン不可。ハム、卵、チーズのガレットと、バター、カスタード、クリームのクレープ (2026年の口コミ)。',
    notes: '[ガレットとクレープ・御所の南] 夷川通の明るく気楽なブルターニュのクレープリー。カリッとしたそば粉のガレット (ハム、チーズ、卵。夏は桃と生ハム) と、エシレバターと砂糖などのもちもちのクレープ。昼のセットは2千円ほど。現金のみ、週末は予約を。10時から毎日営業。',
  });
}

// ================================================================ 立呑トリズキ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26039075/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.kuramaproject.com/';
  const H = day(['15:00', '22:30']);
  put({
    id: 'kyoto_tachinomi_torizuki', name: '立呑トリズキ (Tachinomi Torizuki)', category: 'OMNI',
    lat: 35.00179, lng: 135.76043, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Yakitori with tare or salt, steamed tsukune, spaghetti salad, grilled rice balls and ramen; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a yakitori bar (Tabelog; 2026 reviews).',
    hours_raw: '15:00–22:30 daily (food last order 21:30); closed over New Year (Tabelog). The ground floor is standing only and takes no bookings; the 2nd floor has tables by reservation only, for 3 or more on a party course or with a ¥1,500 food order (Tabelog). No cards or e-money; PayPay accepted (Tabelog; September 2026). 26 standing places downstairs, 18 seats upstairs; non-smoking (Tabelog). In a maze-like alley near Bukkoji and Karasuma — directions on its Instagram (2026 reviews); 5 min from Shijo or Karasuma Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'An alley near Karasuma-Bukkoji — 5 min from Shijo or Karasuma Stn',
    cuisine: 'Yakitori standing bar with other small dishes (Tabelog): skewers of thigh, neck, skin, gizzard, heart with sauce, lightly grilled liver, breast with wasabi, duck and negi; fresh tsukune with egg yolk and scorched soy; a steamed-tsukune assortment of five; three-kind obanzai; wasabi-mayo spaghetti salad; chicken-skin with nameko ponzu; grilled rice ball with uni soy; chicken-bone ramen ¥500 to finish; shochu selection (2026 reviews)',
    website: SITE, gmaps: gm('立呑トリズキ 京都 烏丸'), menu_url: null,
    notes: "[Yakitori standing bar · near Karasuma-Bukkoji] A clean, lively standing bar hidden in an alley near Shijo-Karasuma: small, well-grilled skewers, steamed tsukune that eats like shumai, and a ¥500 chicken ramen to finish. About ¥2,000–4,000. Walk in from 3 pm (no bookings downstairs); PayPay or cash. Open daily.",
    chef_bio: { chef_name: null, roles: ['Operator: 株式会社クラマ計画 (KURAMA PROJECT); no person named'], origin: null,
      background: 'Opened 14 March 2023 and, per the operator, reopened in November 2024 (Tabelog). It belongs to KURAMA PROJECT, an Osaka company that calls itself an "organised group of individual shops" and lists about sixteen differently named bars and restaurants (official site).',
      philosophy: 'Per the operator: "組織的 個人店 集団" — an organised group of individual shops.',
      specialty: 'Steamed tsukune; yakitori.',
      anecdotes: [
        { text: 'Arriving at 4 pm on an October 2026 weekday, a diner found about seven groups already there.', source: R + 'B536909411/' },
        { text: 'A September 2026 first-timer, invited by a friend, called the steamed tsukune a dish "you can\'t miss" — fluffy like shumai, yet crunchy like tsukune.', source: R + 'B535115066/' },
        { text: 'A September 2026 weekend crowd seemed mostly in its thirties; there were a few minor order mistakes in the bustle.', source: R + 'B536197433/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 立呑トリズキ、立ち飲み・焼き鳥、下京区上柳町315-15、阪急烏丸駅・地下鉄四条駅から徒歩5分、15:00〜22:30 (料理 L.O. 21:30)、年末年始以外は無休、1階は立ち飲みで予約不可、2階はテーブル席で予約のみ (3名以上、宴会コースか1,500円の料理付き)、カード・電子マネー不可、PayPay 可、2023年3月14日オープン、2024年11月リニューアル。公式サイト (kuramaproject.com): 株式会社クラマ計画、組織的 個人店 集団、TORIZUKI 鶏料理×路地裏 阪急烏丸駅徒歩3分ほか約16店。口コミ (2026年8〜10月、英語): 蒸しつくね、生つくねと卵黄、焦がし醤油、ハツのたれ、レバー、鴨ねぎ、ささみのわさび、おばんざい3種、わさびマヨのスパゲティサラダ、雲丹醤油の焼きおにぎり、鶏ガララーメン500円、焼酎。',
      confidence: 'medium', sources: [TB, SITE, R + 'B534607114/', R + 'B535115066/', R + 'B536197433/', R + 'B536452455/', R + 'B536479371/', R + 'B536909411/', R + 'B537398648/', R + 'B537540416/', R + 'B538051933/', R + 'B538204687/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Walk-in standing bar; no cards (PayPay ok); many overseas visitors (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区上柳町315-15',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop and the operator\'s site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.001790, 135.760430); cross-checked: GSI 京都府京都市下京区上柳町315番地 (lot) 15m; 10.6 m from kyo_oshokuya_kappa; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536197433/'],
    price_note: 'No menu read; ramen price from a September 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Chicken-bone ramen (to finish)', '¥500', 'Rice & noodles', 'no', 'no', 'September 2026 review.', 'tori_ramen'),
      it('', '', 'Steamed tsukune assortment (five)', '', 'Small plates', 'ask', 'no', '', 'mushi_tsukune'),
    ] }, {
    cuisine: '焼き鳥の立ち飲みで、ほかの一品も (食べログ): もも、せせり、皮、砂肝、たれのハツ、さっと焼いたレバー、ささみのわさび、鴨ねぎの串。生つくねの卵黄と焦がし醤油、蒸しつくね5種の盛り合わせ、おばんざい3種、わさびマヨのスパゲティサラダ、鶏皮となめこのポン酢、雲丹醤油の焼きおにぎり、締めの鶏ガララーメン500円、焼酎 (2026年の口コミ)',
    neighborhood: '烏丸仏光寺近くの路地。四条駅か烏丸駅から徒歩5分',
    gf_detail: '要確認。たれや塩の焼き鳥、蒸しつくね、スパゲティサラダ、焼きおにぎり、ラーメン。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。焼き鳥の店 (食べログ、2026年の口コミ)。',
    notes: '[焼き鳥の立ち飲み・烏丸仏光寺近く] 四条烏丸近くの路地に隠れた、清潔でにぎやかな立ち飲み。小ぶりで上手に焼いた串、焼売のような蒸しつくね、締めは500円の鶏ラーメン。2千〜4千円ほど。1階は予約なしで15時から。支払いは PayPay か現金。無休。',
  });
}

save();
