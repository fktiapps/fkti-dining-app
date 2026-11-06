// Kyoto priority (kyoto-missed), worker osw13, batch 40 — lane: Tabelog id mod 6 = 0.
// Core: 百 (Hyaku), 祇園 壹凛華 (Gion Ichirinka). Notable: 炭焼 芹生 (Sumiyaki Seriu), Lino.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-40');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26026734', 'chain: ピッツェリア・バール・レ・ナポリ 京都錦 is a brand of the ジャンカラ karaoke group — its site (tl-corp.co.jp/lenapoli) lists Le NAPOLI and Le NAPOLI PRESTO beside jankara, utao and other group businesses and recruits through baito.jankara.ne.jp; sub-brand of a large parent');

// ================================================================ 百 (Hyaku)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26005206/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['15:00', '21:30']); const WE = day(['14:00', '21:30']);
  put({
    id: 'kyoto_hyaku_nishiki', name: '百 (Hyaku)', category: 'OMNI',
    lat: 35.005071, lng: 135.761934, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; much of the menu is battered kushikatsu, isobe-age, fried chicken and churros, beside oden and dashimaki (2021–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: oden and dashimaki on dashi, fried chicken, sausages and sushi (2025–2026 reviews).',
    hours_raw: 'Tabelog: Mon–Fri 15:00–21:30; Sat–Sun 14:00–21:30; hours may change. No reservations. Standing only, about 20 places; designated smoking area — a March 2026 reviewer says smoking is allowed (Tabelog). Cash only: no cards, e-money or QR (Tabelog); pay up front with tickets, and ¥1,000 books of tickets give ¥1,100 of value (December 2021 review). No service charge listed on Tabelog. Weekend and holiday happy hour until 19:00 with a medium bottle of beer at ¥440 (March 2026). Tabelog’s website link goes to 遊食邸 (有限会社京フーズ), a Kyoto bento maker with three shops; that site does not mention 百.',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Nishiki-koji behind Daimaru Kyoto — 7 min walk from Shijo Stn and Hankyu Karasuma Stn',
    cuisine: 'Pay-first standing bar with snacks and drinks mostly ¥110–330 (March 2026) · oden ¥110–220, Kyoto-style dashimaki ¥330, salted cabbage ¥220, kushikatsu from ¥110, fried chicken, sasami-shiso-cheese fry, octopus sausages, isobe-age, kimchi fried rice, sushi, churros and corn dogs (2025–2026 reviews) · draft beer ¥440 in a small glass (July 2025), small highball ¥110, shochu sodas ¥330 (2026 reviews)',
    website: null, gmaps: gm('立ち飲み 百 錦小路 西魚屋町'), menu_url: null,
    notes: '[Standing bar · Nishiki behind Daimaru, from ¥110] A cash-only standing bar on Nishiki-koji opposite Daimaru that opens mid-afternoon: buy tickets, then order oden, fluffy dashimaki, kushikatsu and fried chicken at ¥110–330 a plate. Weekend happy hour brings a medium bottle of beer for ¥440. Regulars note the draft beer doubled to ¥440 in a smaller glass and the counter of ready-made side dishes is gone (2025–2026); one found the sushi rice too big. Smoking allowed.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'A pre-pay standing bar on Nishiki-koji in front of Daimaru Kyoto, open from mid-afternoon (Tabelog; 2021–2026 reviews). A February 2026 diner heard that, depending on timing, the kitchen may make omurice. Regulars in July 2025 and July 2026 noticed the ready-made side dishes once lined up at the back were gone, while the ticket books were still sold.',
      philosophy: null,
      specialty: 'Oden; dashimaki; ¥110 snacks.',
      anecdotes: [
        { text: '"When I came back, I found that the draft beer had doubled in price to JPY 440!" — July 2025, after three and a half years away; the glass is also smaller than usual.', source: R + 'B379569027/' },
        { text: 'A June 2026 drinker on a sixth stop of the afternoon paid ¥550 for a medium bottle of beer and pickled plum with mustard greens.', source: R + 'B530019175/' },
        { text: '"The rice was quite large, making it a bit difficult for women to eat comfortably." — April 2026, on the sushi.', source: R + 'B531851072/' },
      ],
      japanese_sources_summary: '食べログ: 百、立ち飲み・居酒屋、中京区西魚屋町610、四条駅・阪急烏丸駅から徒歩7分、月〜金 15:00〜21:30、土日 14:00〜21:30、予約不可、立ち飲み (椅子なし) 20席、分煙、カード・電子マネー・QR不可、ホームページ欄は遊食邸 (有限会社京フーズ、京都の弁当店3店舗) のサイトで、そこには百の記載なし。口コミ (2021年12月〜2026年7月、英語): 先払いのチケット制、1,000円の回数券で1,100円分、生ビールは220円から440円に値上がりしグラスも小さめ、おでん110〜220円、京風だし巻き330円、塩キャベツ220円、串カツ110円から、唐揚げ、ささみしそチーズフライ、タコさんウインナー、磯辺揚げ、キムチチャーハン、寿司、チュロス、アメリカンドッグ、土日祝の19時までハッピーアワーで瓶ビール中瓶440円、ハイボール小110円、作り置きの惣菜はなくなった、寿司のシャリが大きい、喫煙可。',
      confidence: 'low', sources: [TB, R + 'B379569027/', R + 'B515034499/', R + 'B516446529/', R + 'B524223938/', R + 'B524256983/', R + 'B524257145/', R + 'B525367712/', R + 'B530019175/', R + 'B531851072/', R + 'B532943962/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Buy tickets first, then order at the counter; standing only; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区西魚屋町610',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.005071, 135.761934); cross-checked: GSI 京都府京都市中京区西魚屋町610番地 (lot) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B379569027/', R + 'B525367712/', R + 'B524256983/'],
    price_note: 'Prices from 2025–2026 reviews; no menu published.', last_checked: TODAY, items: [
      it('おでん', 'oden', 'Oden, per piece', '¥110–220', 'Food', 'ask', 'no', 'March 2026.', 'oden'),
      it('', '', 'Kyoto-style dashimaki omelette', '¥330', 'Food', 'ask', 'no', 'February 2026.', 'dashimaki'),
      it('', '', 'Kushikatsu (lotus root)', '¥110', 'Food', 'no', 'ask', 'July 2025.', 'kushikatsu'),
      it('', '', 'Salted cabbage with salt kombu', '¥220', 'Food', 'ask', 'ask', 'July 2025.', 'cabbage'),
      it('', '', 'Draft beer (small glass)', '¥440', 'Drink', 'no', 'ask', 'July 2025.', 'beer'),
      it('', '', 'Medium bottle of beer, weekend happy hour', '¥440', 'Drink', 'no', 'ask', 'March 2026.', 'beer'),
    ] }, {
    cuisine: '先払いの立ち飲みで、つまみも酒もほとんど110〜330円 (2026年3月)・おでん110〜220円、京風だし巻き330円、塩キャベツ220円、串カツ110円から、唐揚げ、ささみしそチーズフライ、タコさんウインナー、磯辺揚げ、キムチチャーハン、寿司、チュロス、アメリカンドッグ (2025〜2026年の口コミ)・小さめのグラスの生ビール440円 (2025年7月)、ハイボール小110円、焼酎のソーダ割り330円 (2026年の口コミ)',
    neighborhood: '大丸京都店の裏、錦小路。四条駅・阪急烏丸駅から徒歩7分',
    gf_detail: '要確認。グルテンの情報なし。串カツ、磯辺揚げ、唐揚げ、チュロスなど衣の揚げ物が多く、おでんやだし巻きもある (2021〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: だしのおでんやだし巻き、唐揚げ、ウインナー、寿司 (2025〜2026年の口コミ)。',
    notes: '[立ち飲み・大丸裏の錦、110円から] 大丸の向かい、錦小路で昼過ぎから開く現金のみの立ち飲み。先にチケットを買い、おでん、ふわふわのだし巻き、串カツ、唐揚げを1皿110〜330円で。土日のハッピーアワーは瓶ビール中瓶440円。常連からは、生ビールが440円に値上がりしてグラスも小さく、奥の作り置きの惣菜もなくなったという声 (2025〜2026年)、寿司のシャリが大きいという声も。喫煙可。',
  });
}

// ================================================================ 祇園 壹凛華 (Gion Ichirinka)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26039016/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '02:30']);
  put({
    id: 'kyoto_gion_ichirinka', name: '祇園 壹凛華 (Gion Ichirinka)', category: 'OMNI',
    lat: 35.005332, lng: 135.775922, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; a Chinese menu of soy- and black-vinegar-sauced dishes, dumplings, noodles and a sweet-and-sour dish of wheat-gluten namafu (2024–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options, but the signatures are shrimp chili, mapo tofu, sweet-and-sour pork, beef tendon and shark-fin soup (2025–2026 reviews).',
    hours_raw: 'Tabelog: Mon–Sat 18:00–02:30 (L.O. 02:00); closed Sunday. Lunch by reservation only, booked at least three days ahead, one ¥5,000 course. Bookings taken; private hire up to 20. 22 seats: 6 at the counter, four tables of 4. Smoking allowed. Cards; no e-money or QR. Tabelog’s English page says a 10% service charge is added, but the Japanese original says 「なし」 (none), so no service charge is recorded. Opened 7 January 2016 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion north of Shijo, a little off Hanamikoji — 6 min walk from Yasaka Shrine',
    cuisine: 'Creative Chinese and wine until 2 am · courses with wine pairing; dishes seen: assorted appetizers with yodare chicken, jellyfish and pickles, aosa seaweed and shark-fin soup, braised beef tendon, shrimp chili, mapo tofu, black-vinegar pork, sweet-and-sour namafu, dumplings, Chinese rice dumplings, egg-gravy fried rice, noodles, almond tofu (2024–2026 reviews) · dishes plated per person (March 2026) · lunch course ¥5,000 by reservation (Tabelog) · wine with a sommelier (Tabelog)',
    website: null, gmaps: gm('祇園 壹凛華 吉村ビル'), menu_url: null,
    notes: '[Chinese · Gion, open till 2:30 am] A calm wood-and-Chinese room in a Gion alley that serves creative Chinese food and wine until 2:30 in the morning. Diners praise the shrimp chili, mapo tofu, black-vinegar pork and a sweet-and-sour dish of namafu, plated per person, and a sommelier who pairs wine. Most guests are locals from Gion, so book early; reviewers call the value outstanding for the area. Lunch only by booking three days ahead. Smoking allowed. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Opened 7 January 2016 (Tabelog). A January 2025 regular writes that the food is created by a renowned chef from a famous hotel. A November 2024 diner notes most customers are from the Gion area; a June 2025 diner describes a calm Japanese-modern room of warm wood with Chinese touches on the ground floor of the 吉村ビル.',
      philosophy: null,
      specialty: 'Shrimp chili; mapo tofu; black-vinegar pork; sweet-and-sour namafu.',
      anecdotes: [
        { text: 'A January 2026 first-timer arrived after 1 am, having heard it stays open late, and was welcomed and guided through the menu.', source: R + 'B520437454/' },
        { text: '"Even I, who usually can\'t eat Mapo Tofu, found it delicious." — May 2025.', source: R + 'B506685692/' },
        { text: 'A July 2025 regular orders the sweet-and-sour namafu every time.', source: R + 'B510002534/' },
      ],
      japanese_sources_summary: '食べログ: 祇園 壹凛華 (いちりんか)、中華料理・ワインバー・飲茶、東山区祇園町北側347-125 吉村ビル1F、祇園四条駅から徒歩10分・八坂神社から徒歩6分、月〜土 18:00〜翌2:30 (L.O. 2:00)、日曜休み、昼は3日前までの予約制で5,000円のコースのみ、貸切20名まで、22席 (カウンター6、4名テーブル4卓)、喫煙可、カード可、電子マネー・QR不可、サービス料は日本語原文で「なし」(英語版の10%は誤訳)、ベジタリアン対応、ソムリエ、2016年1月7日オープン。口コミ (2024年11月〜2026年4月、英語): 有名ホテル出身の料理人、エビチリ、麻婆豆腐、黒酢酢豚、生麩の甘酢、よだれ鶏、くらげ、あおさとフカヒレのスープ、牛すじの煮込み、中華ちまき、卵あんかけチャーハン、餃子、杏仁豆腐、ワインのペアリング、客は祇園の人が多く予約は早めに、一人ずつの盛り付け、深夜1時過ぎでも歓迎。',
      confidence: 'medium', sources: [TB, R + 'B499066779/', R + 'B500516198/', R + 'B502956227/', R + 'B506685692/', R + 'B509098678/', R + 'B510002534/', R + 'B511017578/', R + 'B520437454/', R + 'B525011597/', R + 'B526734921/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff explain the menu (January 2026); book ahead, as locals fill it.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側347-125 吉村ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through April 2026.' },
    pin_source: `Tabelog ${TB} (35.005332, 135.775922); cross-checked: GSI 京都府京都市東山区祇園町北側347番地 (lot) 65m; nearest pin kyoto_sangencha_gion 17 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'Only the lunch course price is published (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Lunch course (book three days ahead)', '¥5,000', 'Lunch', 'ask', 'ask', 'Tabelog.', 'lunch_course'),
    ] }, {
    cuisine: '深夜2時まで開く創作中華とワイン・ワインのペアリング付きのコース。これまでの料理: よだれ鶏、くらげ、漬物の前菜盛り合わせ、あおさとフカヒレのスープ、牛すじの煮込み、エビチリ、麻婆豆腐、黒酢酢豚、生麩の甘酢、餃子、中華ちまき、卵あんかけチャーハン、麺、杏仁豆腐 (2024〜2026年の口コミ)・料理は一人ずつ盛り付け (2026年3月)・昼は予約制の5,000円のコース (食べログ)・ソムリエのいるワイン (食べログ)',
    neighborhood: '四条通の北の祇園、花見小路から少し入る。八坂神社から徒歩6分',
    gf_detail: '要確認。グルテンの情報なし。醤油や黒酢のソースの料理、餃子、麺、小麦の生麩の甘酢など (2024〜2026年の口コミ)。',
    vegan_detail: '要確認。食べログにはベジタリアン対応とあるが、看板はエビチリ、麻婆豆腐、酢豚、牛すじ、フカヒレのスープ (2025〜2026年の口コミ)。',
    notes: '[中華・祇園、深夜2時半まで] 祇園の路地の、木の温もりに中華の趣を添えた落ち着いた店で、深夜2時半まで創作中華とワイン。エビチリ、麻婆豆腐、黒酢酢豚、生麩の甘酢が好評で、一人ずつの盛り付け、ソムリエがワインを合わせる。客は祇園の地元の人が多いので予約は早めに。界隈にしては値打ちという声が多い。昼は3日前までの予約のみ。喫煙可。日曜休み。',
  });
}

// ================================================================ 炭焼 芹生 (Sumiyaki Seriu)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26029032/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://3349seriu.wordpress.com/';
  const D = day(['17:00', '22:00']); const LD = day(['11:30', '14:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_sumiyaki_seriu', name: '炭焼 芹生 (Sumiyaki Seriu)', category: 'OMNI',
    lat: 35.005029, lng: 135.758269, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information; a set kappou course of sashimi, charcoal-grilled fish and meat, soup and rice, with soy-based seasonings and a sauced eel (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a charcoal-grill course of fish, eel, sweetfish and beef, with dashi soups (2025–2026 reviews).',
    hours_raw: 'Tabelog: Mon 17:00–22:00; Tue–Sat 11:30–14:00 and 17:00–22:00; closed Sunday. Official site: 11:30–14:00 and 17:00–22:00, other times by arrangement, closed Sunday. Courses only (May 2026): lunch and dinner ¥16,500 tax included (official site); a June 2026 diner paid ¥14,300 for the omakase. Overseas visitors must book through their hotel concierge; direct online bookings by overseas visitors are cancelled (Tabelog). Tabelog’s English page says a service fee is added, but the Japanese original says 「なし」 (none), so no service charge is recorded. 10 seats at an L-shaped counter; non-smoking; cards, no e-money or QR (Tabelog). Opened 16 March 2017 (Tabelog).',
    hours: { 0: D, 1: LD, 2: LD, 3: LD, 4: LD, 5: LD }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Near the Nishiki–Muromachi crossing — 3 min walk from Hankyu Karasuma Stn and Shijo Stn',
    cuisine: 'Charcoal-grill kappou: one seasonal course of 7–10 dishes with charcoal grilling at its centre (official site) · lunch and dinner ¥16,500 tax included (official site); omakase ¥14,300 (June 2026) · dishes seen: sashimi with chosen condiments, yellowtail, soft roe, firefly squid, junsai, grilled sweetfish, crisp grilled eel with a light sauce, Hokkaido beef, sirloin cap, soup, rice (2025–2026 reviews) · sake and wine chosen with the staff (2025–2026 reviews)',
    website: SITE, gmaps: gm('炭焼 芹生 占出山町'), menu_url: SITE,
    notes: '[Charcoal kappou · Shijo-Karasuma, ten counter seats] A ten-seat L-shaped counter round a big charcoal grill, a few minutes from Shijo-Karasuma. One seasonal course — sashimi with carefully chosen condiments, crisp-skinned grilled eel, sweetfish, Hokkaido beef — for ¥16,500. Diners love the friendly owner and the regulars’ chatter; a June 2026 regular missed the sake sommelier, who had left. Overseas visitors must book through a hotel concierge. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (2025–2026 reviews); not named in a source'], origin: null,
      background: 'Per the official site: a charcoal-grill kappou serving seasonal seafood and meat with charcoal grilling as the centre of the course; 10 seats; closed Sunday. Opened 16 March 2017 (Tabelog). A November 2025 diner writes that the chef previously worked at a restaurant the review’s English calls "Yamashita". Reviewers in 2025 mention a friendly sake sommelier on staff; a June 2026 regular found the sommelier was no longer there.',
      philosophy: null,
      specialty: 'Charcoal-grilled seasonal fish, eel and beef.',
      anecdotes: [
        { text: '"Next time, I want to bring someone who appreciates good flavors (please refrain from bringing those who prefer flashy presentations or wear perfume to a restaurant)." — September 2025.', source: R + 'B513325947/' },
        { text: 'A June 2026 couple paid ¥19,500 for the ¥14,300 omakase with five glasses of sake and wine.', source: R + 'B530153154/' },
        { text: 'A May 2026 diner tried junsai and a kind of horse mackerel for the first time.', source: R + 'B531525461/' },
      ],
      japanese_sources_summary: '公式サイト (3349seriu.wordpress.com): 炭焼芹生、炭火焼をコースのメインに旬の海鮮や肉を楽しむ炭火割烹、10席、日曜休み、11:30〜14:00・17:00〜22:00 (他の時間帯は相談)、昼・夜のコース16,500円 (税込)、予算に応じて相談可、コースは7〜10品、ビール・日本酒・ワイン。食べログ: 肉料理・日本料理・海鮮、中京区占出山町299 ヒラタビル1F、月 17:00〜22:00、火〜土 11:30〜14:00・17:00〜22:00、日曜休み、訪日客の予約は宿泊先のコンシェルジュ経由のみで直接のネット予約はキャンセル、サービス料は日本語原文で「なし」(英語版の記載は誤訳)、カウンター10席、禁煙、カード可、電子マネー・QR不可、2017年3月16日オープン。口コミ (2025年8月〜2026年9月、英語): L字のカウンターと大きな炭火、気さくな店主、利き酒師のスタッフ (2026年6月にはいなかった)、お造りの薬味、鰻の炭火焼、鮎、北海道の牛、ホタルイカ、じゅんさい、白子、コースのみでアラカルトなし、おまかせ14,300円 (2026年6月)、2人で2万円弱、常連が多い。',
      confidence: 'medium', sources: [TB, SITE, R + 'B512772609/', R + 'B513325947/', R + 'B516133137/', R + 'B519100461/', R + 'B522826871/', R + 'B527327128/', R + 'B530153154/', R + 'B530188012/', R + 'B531525461/', R + 'B536476246/'] },
    cultural_comfort: { level: 'relay', note: 'Overseas visitors must book through their hotel concierge; direct online bookings from overseas visitors are cancelled (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区占出山町299 ヒラタビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.005029, 135.758269); cross-checked: GSI 京都府京都市中京区占出山町299番地 (lot) 42m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE, R + 'B530153154/'],
    price_note: 'Course price from the official site (tax included); a June 2026 diner paid ¥14,300.', last_checked: TODAY, items: [
      it('昼のコース', '', 'Lunch course', '¥16,500', 'Lunch', 'ask', 'no', 'Official site.', 'lunch_course'),
      it('夜のコース', '', 'Dinner course', '¥16,500', 'Dinner', 'ask', 'no', 'Official site; ¥14,300 omakase in June 2026.', 'course'),
    ] }, {
    cuisine: '炭火焼を中心にした7〜10品の季節のコースの炭火割烹 (公式サイト)・昼夜とも16,500円 (税込、公式サイト)、おまかせ14,300円 (2026年6月)・これまでの料理: 薬味を選んだお造り、鰤、白子、ホタルイカ、じゅんさい、鮎の炭火焼、軽いタレのぱりっとした鰻、北海道の牛、お椀、ご飯 (2025〜2026年の口コミ)・スタッフと選ぶ日本酒やワイン (2025〜2026年の口コミ)',
    neighborhood: '錦小路室町の交差点近く。阪急烏丸駅・四条駅から徒歩3分',
    gf_detail: '予約時に要確認。グルテンの情報なし。お造り、魚や肉の炭火焼、お椀、ご飯のコースで、醤油の味付けやタレの鰻もある (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 魚、鰻、鮎、牛の炭火焼と、だしのお椀のコース (2025〜2026年の口コミ)。',
    notes: '[炭火割烹・四条烏丸、カウンター10席] 四条烏丸から数分、大きな炭火を囲むL字のカウンター10席。季節のコース一本で、薬味にこだわったお造り、皮がぱりっとした鰻、鮎、北海道の牛など、16,500円。気さくな店主と常連の会話が楽しいという声が多く、2026年6月の常連は利き酒師のスタッフがいなくなったのを残念がる。訪日客の予約はホテルのコンシェルジュ経由のみ。日曜休み。',
  });
}

// ================================================================ Lino
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26029038/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://lino-kyoto.com';
  const H = day(['12:00', '15:00'], ['18:00', '22:00']);
  put({
    id: 'kyoto_lino_karasuma_oike', name: 'Lino (リノ)', category: 'OMNI',
    lat: 35.013152, lng: 135.757453, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information; pasta is at the heart of every course, beside risotto, fish and meat (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The courses run through cured ham, sardines, sea urchin, conger eel, duck and horse meat (2026 reviews); no vegetarian options are listed.',
    hours_raw: 'Tabelog: Mon–Sat and holidays 12:00–15:00 (food L.O. 13:30, drinks 14:30) and 18:00–22:00 (food L.O. 20:30, drinks 21:30); closed Sunday and the first and fourth Mondays. Seating charge ¥500 per person for à la carte orders only (Tabelog; Japanese original 「アラカルトオーダーに限り席料としてお一人様500円」). Prices exclude tax. Courses cancelled or changed on the day are charged in full; a booking may be cancelled if you are 30 minutes late without word; parties of 5 or more by phone, courses only. 22 seats: 6 counter, 16 table; non-smoking (ashtray outside); school-age children only; BYO allowed; cards and PayPay (Tabelog). Opened 12 May 2017 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Residential streets west of Karasuma Oike — 5 min walk from Karasuma Oike Stn, exit 2',
    cuisine: 'Italian with seasonal ingredients, by course or à la carte · weekday pasta-and-risotto lunch course ¥4,200 (July and October 2026); seasonal lunch course ¥7,800 (August 2026); drink pairing of three ¥3,300 (October 2026) · signature sea-urchin oil pasta (2026 reviews) · dishes seen: marinated sardines with orange, homemade ham with caponata, shima-aji (striped jack) tartare with grilled eggplant and myoga, horse-meat tagliata with balsamic, duck tagliata with fig, conger eel with bottarga, squid aglio e olio with Kujo leeks, Iwami pork ragù, sawara in kadaif, chestnut risotto, tiramisu (2026 reviews)',
    website: SITE, gmaps: gm('Lino リノ 烏丸御池 上妙覚寺町'), menu_url: null,
    notes: '[Italian · west of Karasuma Oike, sea-urchin pasta] A 22-seat Italian dining room tucked into a residential street near Karasuma Oike, known for its sea-urchin oil pasta. Weekday lunch brings a pasta-and-risotto course for ¥4,200; seasonal courses run to ¥7,800, and à la carte portions are split for two. Diners praise light, surprising combinations — sardines with orange, horse-meat tagliata, sawara in kadaif — and careful explanations. ¥500 seat charge à la carte; no preschoolers. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Opened 12 May 2017 (Tabelog). Reviewers in 2026 describe it appearing suddenly in a residential area, with a counter and tables, a signature sea-urchin pasta always on the menu, and staff who explain each dish. A July 2026 diner who booked the wrong date was still given the omakase course.',
      philosophy: null,
      specialty: 'Sea-urchin oil pasta; pasta-and-risotto lunch.',
      anecdotes: [
        { text: 'A July 2026 diner who had mistakenly booked the wrong date was still served the omakase course.', source: R + 'B531941535/' },
        { text: 'A third-time visitor who prefers oil-based sea-urchin pasta to cream calls this one of the few places that always has it (July 2026).', source: R + 'B532431783/' },
        { text: 'An October 2026 regular ordered both hot starters, duck and horse meat, rather than choose.', source: R + 'B510129829/' },
      ],
      japanese_sources_summary: '食べログ: Lino (リノ)、イタリアン・パスタ・ワインバー、中京区上妙覚寺町230-2 秋山法衣ビル1F、烏丸御池駅2番出口から徒歩5分、月〜土・祝 12:00〜15:00 (料理 L.O. 13:30)・18:00〜22:00 (料理 L.O. 20:30)、日曜と第1・第4月曜休み、アラカルトに限り席料1人500円、税別、コースの当日キャンセル・変更は100%、連絡なく30分遅れるとキャンセル扱い、5名以上は電話でコースのみ、22席 (カウンター6、テーブル16)、禁煙 (店外に灰皿)、未就学児不可、持ち込み可、カード・PayPay 可、2017年5月12日オープン。口コミ (2026年2月〜10月、英語ほか): 住宅街に突然現れる店、名物の雲丹のオイルパスタ、平日限定のパスタとリゾットのコース4,200円、季節のランチコース7,800円、ドリンク3杯のペアリング3,300円、鰯のマリネとオレンジ、自家製ハムとカポナータ、シマアジのタルタル、馬肉のタリアータ、鴨のタリアータといちじく、鱧とからすみ、舞鶴の烏賊と九条ねぎのアーリオオーリオ、石見ポークのラグー、鰆のカダイフ揚げ、栗のリゾット、ティラミス、ワカサギの南蛮漬けのお通し、丁寧な説明。',
      confidence: 'medium', sources: [TB, R + 'B470145940/', R + 'B510129829/', R + 'B525266916/', R + 'B530193223/', R + 'B530829928/', R + 'B531941535/', R + 'B532431783/', R + 'B534736132/', R + 'B537167294/', R + 'B537322349/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Courses or à la carte; staff explain each dish (August 2026); book ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区上妙覚寺町230-2 秋山法衣ビル1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.013152, 135.757453); cross-checked: GSI 京都府京都市中京区上妙覚寺町230番地 (lot) 37m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B530829928/', R + 'B534736132/', R + 'B537167294/'],
    price_note: 'Prices from 2026 reviews; prices exclude tax (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Weekday pasta-and-risotto lunch course', '¥4,200', 'Lunch', 'no', 'ask', 'July and October 2026.', 'lunch_course'),
      it('', '', 'Seasonal lunch course', '¥7,800', 'Lunch', 'ask', 'no', 'August 2026.', 'course'),
      it('', '', 'Drink pairing, three glasses', '¥3,300', 'Drink', 'ask', 'ask', 'October 2026.', 'wine'),
      it('', '', 'Seating charge, à la carte only', '¥500', 'Charge', 'ask', 'ask', 'Per person (Tabelog).', 'cover'),
    ] }, {
    cuisine: '季節の食材のイタリアン、コースかアラカルト・平日限定のパスタとリゾットのランチコース4,200円 (2026年7月・10月)、季節のランチコース7,800円 (2026年8月)、ドリンク3杯のペアリング3,300円 (2026年10月)・名物の雲丹のオイルパスタ (2026年の口コミ)・これまでの料理: 鰯のマリネとオレンジ、自家製ハムとカポナータ、シマアジのタルタル 茄子と茗荷、馬肉のタリアータ、鴨のタリアータといちじく、鱧とからすみ、烏賊と九条ねぎのアーリオオーリオ、石見ポークのラグー、鰆のカダイフ揚げ、栗のリゾット、ティラミス (2026年の口コミ)',
    neighborhood: '烏丸御池の西の住宅街。烏丸御池駅2番出口から徒歩5分',
    gf_detail: '予約時に要確認。グルテンの情報なし。どのコースもパスタが中心で、リゾット、魚、肉も (2026年の口コミ)。',
    vegan_detail: '要確認。コースには生ハム、鰯、雲丹、鱧、鴨、馬肉が入り (2026年の口コミ)、ベジタリアン対応の記載はない。',
    notes: '[イタリアン・烏丸御池の西、雲丹のパスタ] 烏丸御池近くの住宅街にひっそりある22席のイタリアンで、雲丹のオイルパスタが名物。平日昼はパスタとリゾットのコースが4,200円、季節のコースは7,800円まで、アラカルトは2人分に分けて出してくれる。鰯とオレンジ、馬肉のタリアータ、鰆のカダイフ揚げなど軽やかで意外な組み合わせと丁寧な説明が好評。アラカルトは席料500円、未就学児不可。日曜休み。',
  });
}

save();
