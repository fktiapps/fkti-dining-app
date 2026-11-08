// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 76.
//   + ねこちぐら Neko Chigura (six-seat sake bar in 三条食彩ろぉじ, run single-handed by its owner; opened Sept 2025)
//   + ぎおん 雑鼓や Gion Zakoya (fish-led izakaya counter in Gion, open till 5 am)
//   + あんず家 祇園石屋はなれ Anzuya Gion Ishiya Hanare (oden and meat dishes in a south-Gion house; 石屋株式会社)
//   - 京居酒屋 さみこ: skipped (reason below).
//   Rest list (`queue.mjs kyoto-missed next rest 2000`), nearest-first, lane ids 26043626, 26037170, 26040476 (skipped),
//   26031440.
//   queue-status.jsonl grepped for each brand (ねこちぐら, 雑鼓や, さみこ, あんず家/石屋): no earlier rulings.
//   Data check: none of the three drafted is in data/kyoto.json by name or address. ねこちぐら sits in 三条食彩ろぉじ with
//   節道, OFURO, つりや and やほよろづ; 雑鼓や shares ピックルビル (347-26) with 京串カツ轟 (2F) and 萍萍.
//   Same-name count (same brand or operator only): あんず家 — invoice holder 石屋株式会社 (祇園町南側539, NTA register); an
//   August 2026 reviewer says the company also runs yakiniku and sushi restaurants; Tabelog shows a 祇園 石屋 yakiniku; no
//   group list found — drafted as a local group, flagged. ねこちぐら, 雑鼓や — one shop each. Large-parent list checked.
//   Service charges, checked against Tabelog’s Japanese original: 雑鼓や (サービス料) 頂いておりません; none listed for the other two.
//   Other-diner remarks (Greg 2026-11-06): a single February 2026 remark about foreigners in the street left out.
//   Halal: no operator in this batch claims halal.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-76');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26040476', '京居酒屋 さみこ: no reviews dated 2025–2026 (one review, January 2024)');

// ================================================================ ねこちぐら
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26043626/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'kyoto_neko_chigura', name: 'ねこちぐら (Neko Chigura)', category: 'OMNI',
    lat: 35.008254, lng: 135.763589, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A sake bar with a few snacks — edamame, broccoli with sesame dressing, grilled sardines; no gluten information (September 2025).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Edamame and broccoli with sesame dressing are on the short snack list, but nothing is said about dashi or sauces (September 2025).',
    hours_raw: 'Opening days and hours vary — check the shop’s Instagram (Tabelog). Cash only: no cards, e-money or QR (Tabelog). 6 counter seats (Tabelog). Non-smoking, ashtray outside (Tabelog). Reservations recommended — it fills up fast (April 2026). At the very back of the 三条食彩ろぉじ alley off Sanjo-Sakaimachi, 5 min from exit 5 of Karasuma-Oike (Tabelog; September 2025). Opened 2 September 2025 (Tabelog).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Sanjo-Sakaimachi, 三条食彩ろぉじ — 5 min from Karasuma-Oike',
    cuisine: 'A sake bar with a wide range of Japanese sake — toasting picks, rare limited bottles, the week’s sake and beginner-friendly choices; umeshu, craft beer and soft drinks too (September 2025) · three-sake tasting set ¥1,500 (September 2025) · sake chosen to your taste with no fixed menu (April 2026) · a few snacks: edamame ¥330, broccoli with sesame dressing ¥440, grilled sardines ¥330 (September 2025)',
    website: null, gmaps: gm('ねこちぐら 京都'), menu_url: null,
    notes: '[Sake bar · Sanjo-Sakaimachi alley, six seats] A tiny cat-themed sake bar at the back of the 三条食彩ろぉじ alley, run single-handed by a young owner in kimono who loves sake: describe your taste, or start with a three-sake tasting set (¥1,500), with a few simple snacks. Good for beginners and solo drinkers. Cash only; hours vary — check Instagram.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'Reviewers describe a young woman owner who runs the bar alone (September 2025), wears kimono behind the counter, and opened it as a place to enjoy sake casually and alone — something the owner had not done before (September 2025). Plans were mentioned to sell sake upstairs (September 2025).',
      philosophy: 'Sake made easy for beginners and solo drinkers (September 2025).', specialty: 'Sake tasting sets.',
      anecdotes: [
        { text: 'A September 2025 sake novice tried a beginner-friendly bottle that tasted sweet-and-sour, like a grown-up Calpis.', source: R + 'B513329250/' },
        { text: 'An April 2026 visitor found it empty at 7 pm on a weekend and full ten minutes later.', source: R + 'B525636667/' },
      ],
      japanese_sources_summary: '食べログ: ねこちぐら、日本酒バー、中京区道祐町135-1 三条食彩ろぉじ、地下鉄烏丸御池駅5番出口から徒歩5分、営業日はInstagramで告知、カード・電子マネー・QR不可、カウンター6席、禁煙 (外に灰皿)、2025年9月2日オープン。口コミ (2025〜2026年、英語): 三条食彩ろぉじの一番奥、猫ののれんと傘立て、着物の若い女性店主が一人で営む、乾杯の酒、限定の希少酒、今週の酒、初心者向け、梅酒、クラフトビール、日本酒3種飲み比べ1,500円、枝豆330円、ブロッコリーの胡麻和え440円、焼きいわし330円、メニューはなく好みを伝えておすすめを、すぐ満席に、要予約。',
      confidence: 'medium', sources: [TB, R + 'B513097515/', R + 'B513329250/', R + 'B513896941/', R + 'B525636667/'] },
    cultural_comfort: { level: 'japanese', note: 'Tiny counter; tell the owner your taste; cash only.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区道祐町135-1 三条食彩ろぉじ',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated September 2025 to April 2026.' },
    pin_source: `Tabelog ${TB} (35.008254, 135.763589); cross-checked: GSI 京都府京都市中京区道祐町135番地 (lot) 30m; 節道 (kyoto_bushido_sanjo) in the same alley is 6.4 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B513097515/'],
    price_note: 'Prices from a September 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Three-sake tasting set', '¥1,500', 'Sake', '', '', 'September 2025.', 'tasting'),
      it('', '', 'Edamame', '¥330', 'Snacks', 'ask', 'ask', 'September 2025.', 'edamame'),
      it('', '', 'Broccoli with sesame dressing', '¥440', 'Snacks', 'ask', 'ask', 'September 2025.', 'broccoli'),
      it('', '', 'Grilled sardines', '¥330', 'Snacks', 'ask', 'no', 'September 2025.', 'iwashi'),
    ] }, {
    cuisine: '豊富な日本酒のバー。乾杯の酒、限定の希少酒、今週の酒、初心者向け。梅酒、クラフトビール、ソフトドリンクも (2025年9月)・日本酒3種飲み比べ1,500円 (2025年9月)・決まったメニューはなく好みを伝えて選んでもらう (2026年4月)・つまみは少し: 枝豆330円、ブロッコリーの胡麻和え440円、焼きいわし330円 (2025年9月)',
    neighborhood: '三条堺町、三条食彩ろぉじ。烏丸御池から徒歩5分',
    gf_detail: '要確認。つまみの少ない日本酒バー。枝豆、ブロッコリーの胡麻和え、焼きいわし。グルテンの情報はない (2025年9月)。',
    vegan_detail: '要確認。枝豆とブロッコリーの胡麻和えがあるが、出汁やたれについては書かれていない (2025年9月)。',
    notes: '[日本酒バー・三条堺町の路地、6席] 三条食彩ろぉじの奥にある猫がテーマの小さな日本酒バー。日本酒好きの着物の若い店主が一人で営む。好みを伝えるか、3種の飲み比べ (1,500円) から。つまみは簡単なものを少し。初心者や一人飲みにも。現金のみ、営業日はInstagramで。',
  });
}

// ================================================================ ぎおん 雑鼓や
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26037170/'; const R = TB + 'dtlrvwlst/';
  const H = day(['19:00', '05:00']);
  put({
    id: 'kyoto_gion_zakoya', name: 'ぎおん 雑鼓や (Gion Zakoya)', category: 'OMNI',
    lat: 35.004585, lng: 135.776736, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Fish dishes, grilled squid with mayonnaise, anago and tuna katsu, croquettes, salad pasta and butter chicken curry; no gluten information (Tabelog; 2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish-led izakaya with meat dishes (Tabelog; 2025–2026 reviews).',
    hours_raw: 'Monday–Saturday 19:00–05:00; closed Sunday (Tabelog). No service charge (Tabelog, original 頂いておりません). Reservations recommended (February 2026). Cards; no e-money or QR (Tabelog). 8–10 counter seats (Tabelog; February 2026). Smoking allowed (Tabelog). Ground floor of ピックルビル on the north-west corner, 70 m west of Gion Kagetsu Minami, 10 min from Gion-Shijo (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion north of Shijo — 10 min from Keihan Gion-Shijo',
    cuisine: 'Fresh fish from around Japan, served till 5 am (Tabelog) · the house “ultimate grilled squid”, thick, with mayonnaise (Tabelog) · fresh bonito, anago katsu, tuna katsu, croquettes; the owner’s salad pasta; butter chicken curry (February 2026) · tender simmered beef; a ham-katsu-like dish (June 2025) · special curry to finish; sake (February 2026)',
    website: null, gmaps: gm('ぎおん 雑鼓や'), menu_url: TB + 'dtlmenu/',
    notes: '[Izakaya · Gion, fish till 5 am] A small Gion counter open from 7 pm to 5 am, where a cheerful cook serves fresh fish from around Japan — bonito, the signature thick grilled squid, fluffy anago katsu — with croquettes, salad pasta and a much-loved curry to finish. No service charge; smoking allowed; closed Sunday.',
    chef_bio: { chef_name: '菅谷 明浩 (reading not sourced)', roles: ['Owner (the invoice holder)'], origin: null,
      background: 'Tabelog’s invoice number T2810707054908 is registered to an individual, 菅谷 明浩 (NTA register). Reviewers describe a warm, smiling owner (April 2025), a cheerful chef to chat with (February 2026), and a salad pasta made by the woman of the house (February 2026).',
      philosophy: null, specialty: 'Grilled squid; anago katsu.',
      anecdotes: [
        { text: 'A February 2026 regular who comes on every Kyoto trip went back for seconds of the salad spaghetti and tried curry at an izakaya for the first time.', source: R + 'B495081591/' },
        { text: 'A February 2026 visitor met a Kyoto company president here and finished with the special curry.', source: R + 'B522966023/' },
      ],
      japanese_sources_summary: '食べログ: ぎおん 雑鼓や、日本料理・海鮮・居酒屋、東山区祇園北側347-26 ピックルビル 1F、祇園四条駅から徒歩10分、祇園花月南の西70m、北西角のビル1階、月〜土 19:00〜翌5:00、日曜定休、サービス料なし、カード可、8席、喫煙可、全国の鮮魚、名物「極みのイカ焼き」とマヨネーズ、適格請求書 T2810707054908 (菅谷 明浩)。口コミ (2025〜2026年、英語): 新鮮な鰹、穴子カツ、まぐろカツ、コロッケ、女将のサラダパスタ、バターチキンカレー、牛の煮物、ハムカツのような一品、締めの特製カレー、カウンター約10席、気さくな大将。',
      confidence: 'medium', sources: [TB, 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=2810707054908', R + 'B495081591/', R + 'B511574358/', R + 'B517030089/', R + 'B522966023/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter, open very late; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園北側347-26 ピックルビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through February 2026.' },
    pin_source: `Tabelog ${TB} (35.004585, 135.776676), offset about 5.5 m east to (35.004585, 135.776736) because 萍萍 (kyoto_pingping_gion) and 京串カツ轟 (kyoto_kyokushikatsu_todoroki), in the same building, sit within 4 m; cross-checked: GSI 京都府京都市東山区祇園町北側347番地 (a large lot) 93m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B495081591/'],
    price_note: 'No menu prices found.', last_checked: TODAY, items: [
      it('', '', 'Ultimate grilled squid with mayonnaise', '', 'Signature', 'ask', 'no', 'Tabelog.', 'ika'),
      it('', '', 'Anago katsu', '', 'Fried', 'no', 'no', 'February 2026.', 'anagokatsu'),
      it('', '', 'Butter chicken curry', '', 'To finish', 'ask', 'no', 'February 2026.', 'curry'),
    ] }, {
    cuisine: '全国から届く鮮魚を朝5時まで (食べログ)・名物「極みのイカ焼き」、肉厚でマヨネーズと (食べログ)・新鮮な鰹、穴子カツ、まぐろカツ、コロッケ、女将のサラダパスタ、バターチキンカレー (2026年2月)・柔らかい牛の煮物、ハムカツのような一品 (2025年6月)・締めの特製カレー、日本酒 (2026年2月)',
    neighborhood: '四条の北の祇園。京阪祇園四条から徒歩10分',
    gf_detail: '要確認。魚料理、マヨネーズのイカ焼き、穴子とまぐろのカツ、コロッケ、サラダパスタ、バターチキンカレー。グルテンの情報はない (食べログ、2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。魚中心の居酒屋で肉料理も (食べログ、2025〜2026年の口コミ)。',
    notes: '[居酒屋・祇園、朝5時まで魚] 夜7時から朝5時まで開く祇園の小さなカウンター。気さくな大将が全国の鮮魚 (鰹、名物の肉厚イカ焼き、ふわふわの穴子カツ) に、コロッケ、サラダパスタ、締めの人気のカレーを出す。サービス料なし、喫煙可、日曜定休。',
  });
}

// ================================================================ あんず家 祇園石屋はなれ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26031440/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '23:00']);
  put({
    id: 'kyoto_anzuya_gion_ishiya_hanare', name: 'あんず家 祇園石屋はなれ (Anzuya Gion Ishiya Hanare)', category: 'OMNI',
    lat: 35.00187, lng: 135.77659, cuisine_type: 'oden',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Oden from long-used pots, meat sashimi and grilled meat with ponzu, potato salad and omakase courses; no gluten information (Tabelog; 2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: oden in dashi, meat sashimi, outside skirt and tuna (Tabelog; 2025–2026 reviews).',
    hours_raw: 'Tuesday–Sunday and holidays 17:30–23:00 (L.O. 22:00); closed Monday (Tabelog). Walk-ins possible (August 2026); courses and private rooms for groups (Tabelog). Cards, IC cards and QR (Tabelog). 16 seats with a counter and private rooms (Tabelog; October 2026). Designated smoking area (Tabelog). Just off the main street in south Gion, 5 min from the Gion bus stop (Tabelog). Opened 11 October 2018 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'South Gion, just off the main street — 5 min from Gion bus stop',
    cuisine: 'Oden simmered in long-used pots and meat dishes made with know-how from a yakiniku restaurant, at fair prices (Tabelog) · tongue sashimi, tuna sashimi, potato salad, several oden (September 2025) · meat sashimi; outside skirt with ponzu; oden including harusame (August 2026) · omakase at the counter from hassun and soup onward (October 2026) · imo shochu with soda (October 2026)',
    website: null, gmaps: gm('あんず家 祇園石屋はなれ'), menu_url: TB + 'dtlmenu/',
    notes: '[Oden and meat · south Gion, a quiet house] A 16-seat Gion house with a counter and private rooms, pairing oden from long-used pots with meat sashimi and grilled cuts from a yakiniku kitchen’s know-how — or let the owner cook an omakase. Closed Monday. Flagged: run by 石屋株式会社, which reviewers say also runs yakiniku and sushi restaurants.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'Tabelog’s invoice number T4130001051620 is registered to 石屋株式会社, 祇園町南側539 (NTA register). An August 2026 reviewer says the same company runs several restaurants, including yakiniku and sushi. A September 2025 diner describes a quick-witted owner who knows a great deal about Noh.',
      philosophy: 'The old elegance of Gion at reasonable prices (Tabelog).', specialty: 'Oden; meat sashimi.',
      anecdotes: [
        { text: 'An October 2026 first-timer came on after a Noh performance at Kanze Kaikan, walking along the Shirakawa, and left the menu to the owner.', source: R + 'B538005966/' },
        { text: 'An August 2026 passer-by was drawn in by the meat sashimi and oden on the board outside and could have eaten five more pieces of oden harusame.', source: R + 'B534122842/' },
      ],
      japanese_sources_summary: '食べログ: あんず家 祇園石屋はなれ、日本料理・居酒屋・おでん、東山区祇園町南側570-130、祇園バス停から徒歩5分、火〜日・祝 17:30〜23:00 (L.O.22:00)、月曜定休、カード・交通系IC・QR可、16席、個室あり、喫煙所あり、2018年10月11日オープン、年季の入った鍋で炊くおでん、焼肉店の技を生かした肉料理、手頃な値段、コースと個室、適格請求書 T4130001051620 (石屋株式会社)。口コミ (2025〜2026年、英語): タンの刺身、まぐろの刺身、ポテトサラダ、おでん、ハラミのポン酢、春雨のおでん、八寸と椀からのおまかせ、能に詳しい店主、同じ会社が焼肉や寿司の店も営む。',
      confidence: 'medium', sources: [TB, 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=4130001051620', R + 'B513133359/', R + 'B534122842/', R + 'B538005966/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter or private rooms; walk-ins possible.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町南側570-130',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.00187, 135.77659); GSI gives only the large lot 京都府京都市東山区祇園町南側570番地; OSM reverse confirms 祇園町南側 — kept the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B513133359/', R + 'B534122842/'],
    price_note: 'No menu prices found.', last_checked: TODAY, items: [
      it('', '', 'Oden (assorted)', '', 'Oden', 'ask', 'no', 'September 2025; August 2026.', 'oden'),
      it('', '', 'Tongue sashimi', '', 'Meat', 'ask', 'no', 'September 2025.', 'tan'),
      it('', '', 'Outside skirt with ponzu', '', 'Meat', 'ask', 'no', 'August 2026.', 'harami'),
      it('', '', 'Potato salad', '', 'Small plates', 'ask', 'no', 'September 2025.', 'potesala'),
    ] }, {
    cuisine: '年季の入った鍋で炊くおでんと、焼肉店の技を生かした肉料理を手頃に (食べログ)・タンの刺身、まぐろの刺身、ポテトサラダ、数種のおでん (2025年9月)・肉の刺身、ハラミのポン酢、春雨などのおでん (2026年8月)・カウンターで八寸と椀から始まるおまかせ (2026年10月)・芋焼酎のソーダ割り (2026年10月)',
    neighborhood: '祇園南、大通りから少し入ったところ。祇園バス停から徒歩5分',
    gf_detail: '要確認。年季の入った鍋のおでん、肉の刺身とポン酢の焼肉、ポテトサラダ、おまかせ。グルテンの情報はない (食べログ、2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。出汁のおでん、肉の刺身、ハラミ、まぐろ (食べログ、2025〜2026年の口コミ)。',
    notes: '[おでんと肉・祇園南、静かな一軒家] カウンターと個室のある祇園の16席の家。年季の入った鍋のおでんに、焼肉の技を生かした肉の刺身や焼き物。店主のおまかせも。月曜定休。石屋株式会社の店で、焼肉や寿司の店も営むとの声 (要確認)。',
  });
}

save();
