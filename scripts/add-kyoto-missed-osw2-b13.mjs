// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 13.
//   core (queue.mjs kyoto-missed next core 200, 2026-11-05, first two lane ids):
//   + 祇園 天ぷら晩餐 Gion Tempura Bansan (6-seat tempura counter in Gion; since 2021)
//   + ぎおんの豚汁屋さん あだち家 Adachiya (late-night Niigata-sake izakaya on Kiritoshi; since 2013)
//   notable (queue.mjs kyoto-missed next notable 200, first two lane ids):
//   + 京都三条 箔 Kyoto Sanjo Haku (wagyu sukiyaki kaiseki in private rooms over the Kamo River)
//   + 然花抄院 京都室町本店 Zen Kashoin (castella maker’s café in a 1700 townhouse; since 2009)
//   None is in data/kyoto.json: grep by id, name (晩餐/Bansan, 京色, あだち家/Adachi, 箔/Haku, 然花抄院/Zenkashoin) and address
//   (富永町112, 清本町368, 上大阪町528, 蛸薬師町271) found none.
//   Same-name counts (Samboa ruling): 祇園 天ぷら晩餐 — the crawl has it and 祇園 晩餐 京色; the operator 株式会社京色 lists 5 shops
//   (うらやま京色, BANSAN 京色, 祇園 晩餐 京色, 祇園天ぷら晩餐, 角打ちと麺 ばんさん), 4 named 晩餐/BANSAN — under 5, a small Kyoto
//   group, drafted. あだち家 — one listing; the invoice holder is an individual. 京都三条 箔 — one listing; operated by the G LION GROUP
//   (Kobe; about 150 group companies, mostly car dealers) — one restaurant, drafted and flagged. 然花抄院 — one listing in the crawl;
//   2 cafés (京都室町本店, 渋谷ヒカリエ ShinQs店) plus ZENKASHOIN gift counters, run by 株式会社長崎堂 (Osaka) — drafted and flagged.
//   Pins: Tabelog /en/ point, cross-checked with GSI only.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-13');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 祇園 天ぷら晩餐
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26035557/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.kyosyoku.com/tempura_bansan.html'; const CO = 'https://www.kyosyoku.com/';
  const H = day(['17:00', '01:00']);
  put({
    id: 'kyoto_gion_tempura_bansan', name: '祇園 天ぷら晩餐 (Gion Tempura Bansan)', category: 'OMNI',
    lat: 35.004497, lng: 135.774565, cuisine_type: 'tempura',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a tempura counter — every course centres on battered, fried tempura and a tempura rice ball (official site; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses open with wagyu tail soup and run through prawn, fish, sea urchin and wagyu tempura (official site; 2026 reviews).',
    hours_raw: 'Dinner from 17:00 to 25:00 (last order 24:30) and lunch from 12:00, lunch by reservation made by the day before (official site). Tabelog gives lunch last entry 13:30 (reservation only, by the day before) and dinner last entry 21:00, courses only, booked by the day before; per the official site, à la carte is available after 21:00. Closed irregularly, sometimes without notice (Tabelog). Book ahead: 6 counter seats (Tabelog; official site; some reviewers counted about 8); private hire up to 20; non-smoking; cards, no e-money or QR (Tabelog). Staff spoke fluent English with foreign guests (September 2025). On the 1st floor of キャッスルギオンビル on a corner in Tominagacho, off the main street; 5 min from Gion-Shijo Stn (Tabelog; December 2025). Opened 21 March 2021 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Tominagacho in Gion, off Yamato-oji north of Shijo — 5 min from Gion-Shijo Stn',
    cuisine: 'Seasonal tempura courses at a six-seat counter (official site) · "Gion no Bansan" course ¥12,100 (lunch ¥11,000): wagyu tail soup, sashimi of the day, seared Kuroge wagyu, about ten tempura such as kuruma prawn, eggplant, sea urchin, shiitake, yuzu-marinated sawara, eel, clam, wagyu and tilefish, then a tempura rice ball, red miso soup and dessert · lighter course ¥7,700 (lunch ¥6,600) · lunch "tempura kaiseki" ¥3,300 (official site) · lunch tempura and kakiage bowl ¥3,300 (April 2026); kama-tama udon at lunch (October 2026) · fried in 100% cottonseed oil, per the chef (July 2026) · sake such as Tazaka, Yuki no Bijin, Suigei; Hakushu highballs; white wine',
    website: SITE, gmaps: gm('祇園天ぷら晩餐 富永町'), menu_url: SITE,
    notes: "[Tempura · Gion, a six-seat counter] A tiny tempura counter on a Gion corner, where one chef fries course after course in front of six guests. Dinner (¥7,700 or ¥12,100) starts with wagyu tail soup, sashimi and seared wagyu, then about ten seasonal pieces — kuruma prawn, aosa seaweed piled with sea urchin, Kamo eggplant, eel, young ayu in summer, a rare-fried wagyu — and ends with a tempura rice ball. Lunch from ¥3,300 is the value pick. Book by the day before. Run by the small Kyoto group 京色; reviewers like the quiet chef and the price for Gion.",
    chef_bio: { chef_name: null, roles: ['Head chef (not named) who runs the counter alone (June 2026); operator 株式会社京色'], origin: null,
      background: 'Per the operator site: 株式会社京色 was founded by its president 眞鍋 and the cooks 藤原 and 山内, who studied together at a cooking school and gained experience in Japanese, Western and creative cooking before reuniting; the company runs 5 Kyoto shops — うらやま京色, BANSAN 京色, 祇園 晩餐 京色, 祇園天ぷら晩餐 and 角打ちと麺 ばんさん. Per the official page: a counter of six seats, "the distance at which freshly fried tempura can be served without losing its taste." Opened 21 March 2021 (Tabelog). The chef told a July 2026 diner the oil is 100% cottonseed.',
      philosophy: 'Per the official page: tempura needs both fresh ingredients and the cook’s skill — no letting up from buying to the moment it is served.',
      specialty: 'Aosa tempura topped with sea urchin; wagyu tail soup; tempura rice ball.',
      anecdotes: [
        { text: 'A June 2026 diner noted the head chef runs everything alone, keeping a comfortable distance without too much talk.', source: R + 'B532630040/' },
        { text: 'A March 2026 diner liked the yuzu-daikon palate cleanser so much as to ask for a second helping.', source: R + 'B524252057/' },
        { text: 'An April 2026 lunch guest found the tail soup tasty but small, and understandable for a ¥3,300 lunch.', source: R + 'B526106071/' },
        { text: 'A March 2026 diner found the space a bit cramped for groups of more than three.', source: R + 'B530964646/' },
      ],
      japanese_sources_summary: '公式サイト (kyosyoku.com): 祇園天ぷら晩餐、京都祇園のカウンターのみの天ぷら専門店、カウンター6席は「揚げたての美味しさを逃さずお届けできる距離」、21:00以降はアラカルトも、旬の味覚をおひとり様ずつコースで、祇園の晩餐に12,100円コース (ランチ11,000円)、より気軽に7,700円コース (ランチ6,600円)、ランチ限定の天ぷら会席3,300円、ある日の例: 先付 テールスープ、本日の鮮魚の造り、国産黒毛和牛あぶり、天ぷら (車海老、茄子、雲丹、肉厚しいたけ、サワラゆず幽庵、コッペガニ、ウナギ、蛤、国産黒毛和牛、甘鯛)、天むす、赤出汁、デザート、東山区富永町112 キャッスルギオン、ディナー17時〜25時 (L.O. 24時30分)、ランチ12時〜 (前日迄の完全予約のみ)。株式会社京色: 社長 眞鍋、料理人 藤原・山内、食の専門学校で共に学ぶ、うらやま京色・BANSAN 京色・祇園 晩餐 京色・祇園天ぷら晩餐・角打ちと麺 ばんさん。食べログ: 天ぷら・居酒屋・日本料理、大和大路通四条上る富永町112 キャッスルギオンビル 1F、ランチ最終入店13:30、ディナー最終入店21:00 (コースのみ、前日までに予約)、不定休、6席 (カウンター)、貸切20名まで、禁煙、カード可、2021年3月21日オープン。口コミ (2025年9月〜2026年10月、英語): 綿実油100%、英語が話せるスタッフ。',
      confidence: 'medium', sources: [TB, SITE, CO, R + 'B514255143/', R + 'B517703015/', R + 'B519614980/', R + 'B519886708/', R + 'B524252057/', R + 'B526106071/', R + 'B530964646/', R + 'B531923027/', R + 'B532054669/', R + 'B532630040/', R + 'B536517308/', R + 'B538626412/'] },
    cultural_comfort: { level: 'english', note: 'Staff spoke fluent English with foreign guests (September 2025); book by the day before.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区大和大路通四条通上る富永町112 キャッスルギオンビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Operator site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004497, 135.774565); cross-checked: GSI 京都府京都市東山区富永町112番地 (lot) 29m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE],
    price_note: 'Official page courses (undated; lunch prices in brackets).', last_checked: TODAY, items: [
      it('祇園の晩餐に', '', '"Gion no Bansan" tempura course', '¥12,100', 'Course', 'no', 'no', 'Lunch ¥11,000.', 'bansan_course'),
      it('より気軽に', '', 'Lighter tempura course', '¥7,700', 'Course', 'no', 'no', 'Lunch ¥6,600.', 'light_course'),
      it('天ぷら会席', 'tempura kaiseki', 'Lunch tempura kaiseki', '¥3,300', 'Lunch', 'no', 'no', 'Lunch only.', 'lunch_kaiseki'),
    ] }, {
    cuisine: '6席のカウンターで旬の天ぷらのコース (公式サイト)・「祇園の晩餐に」12,100円 (ランチ11,000円): テールスープ、本日の鮮魚の造り、国産黒毛和牛あぶり、車海老、茄子、雲丹、肉厚しいたけ、サワラゆず幽庵、ウナギ、蛤、黒毛和牛、甘鯛など約10品の天ぷら、天むす、赤出汁、デザート・「より気軽に」7,700円 (ランチ6,600円)・ランチ限定の天ぷら会席3,300円 (公式サイト)・ランチの天ぷらとかき揚げ丼3,300円 (2026年4月)、ランチの釜玉うどん (2026年10月)・揚げ油は綿実油100% (2026年7月、シェフの話)・田酒、雪の美人、酔鯨などの日本酒、白州のハイボール、白ワイン',
    neighborhood: '四条の北、大和大路から入った祇園の富永町。祇園四条駅から徒歩5分',
    gf_detail: 'グルテンフリーではない。天ぷらのカウンターで、どのコースも衣をつけて揚げた天ぷらと天むすが中心 (公式サイト、2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。コースは和牛のテールスープに始まり、海老、魚、雲丹、和牛の天ぷらが続く (公式サイト、2026年の口コミ)。',
    notes: '[天ぷら・祇園、6席のカウンター] 祇園の角にある小さな天ぷらのカウンター。シェフ一人が6人の客の前で次々と揚げる。夜のコース (7,700円か12,100円) は和牛のテールスープ、造り、和牛のあぶりに始まり、車海老、雲丹をのせたあおさ、賀茂茄子、鰻、夏は稚鮎、レアに揚げた和牛など旬の約10品、最後は天むす。お得なのは3,300円からの昼。前日までに予約を。京都の小さなグループ「京色」の店で、静かなシェフと祇園にしては手頃な値段が好評。',
  });
}

// ================================================================ ぎおんの豚汁屋さん あだち家
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26025213/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.gion-adachiya.com/'; const CONCEPT = SITE + 'concept'; const MENU = SITE + 'menu';
  const INV = 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=6810162347785';
  const H = day(['18:00', '03:00']);
  put({
    id: 'kyoto_gion_adachiya', name: 'ぎおんの豚汁屋さん あだち家 (Gion no Tonjiru-yasan Adachiya)', category: 'MOM_AND_POP',
    lat: 35.004662, lng: 135.774543, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. An izakaya menu of miso pork soup, fried dishes, oden, Saikyo-miso fish and soy-seasoned plates; no gluten information is published (official menu; 2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the signature is pork miso soup, alongside horse sashimi, fish, fried chicken and oden; a few plates such as grilled shiitake or Tochio fried tofu with negi miso have no published ingredients (official menu; 2025–26 reviews).',
    hours_raw: '18:00–3:00 Monday to Saturday (last order 2:30); 17:00–24:00 on the day before a holiday (last order 23:30); closed Sunday, but open Sunday and closed Monday when Monday is a holiday (Tabelog; official site gives 18:00–3:00, closed Sunday). Cover charge ¥500 per person; bookings taken, with a 2-hour limit when busy (Tabelog). 18 seats: 8 at the counter and 2 tables, pairs usually at the counter; smoking allowed (Tabelog; official site; October 2026). Cards, e-money and QR (Tabelog). Faces Kiritoshi in Gion, near Tatsumi Bridge; 4 min from Gion-Shijo Stn exit 7 (official site; Tabelog; April 2026). Opened 26 November 2013 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiritoshi in Gion, near Tatsumi Bridge — 4 min from Gion-Shijo Stn',
    cuisine: 'Late-night izakaya with the owner’s home-prefecture Niigata sake and dishes (official site) · Adachiya’s tonjiru (pork miso soup), with rice balls · Kumamoto horse sashimi, four kinds · Hokkaido shishamo · wagyu tendon stew · house roast beef · thick grilled Tokushima shiitake · Niigata Tochio jumbo fried tofu with natto, negi miso or mentaiko mayo · Niigata squid sashimi with mentaiko · Kyoto silver cod Saikyo-yaki · prawn fry with house tartare · chicken kara-age (curry, lemon soy or ponzu) (official menu) · tuna macaroni salad, nikujaga, oden in winter, sake-lees soup, half-size ikura bowl, bacon-wrapped quail eggs (2025–26 reviews) · Niigata sake such as Sasashiki, some off the list',
    website: SITE, gmaps: gm('ぎおんの豚汁屋さん あだち家'), menu_url: MENU,
    notes: "[Izakaya · Gion, Niigata sake till 3 a.m.] A small, smoky, late-night izakaya on Gion's Kiritoshi, run by an owner from Niigata. It pours Niigata sake — ask for the off-menu bottles — with a long list of homey plates: tuna macaroni salad, nikujaga, horse sashimi, giant Tochio fried tofu with negi miso, oden in winter, and the namesake pork miso soup to finish. Mostly locals, Showa pop on the speakers, ¥500 cover. Open until 3:00; closed Sunday.",
    chef_bio: { chef_name: '安達 秀行 (Adachi Hideyuki)', roles: ['Owner, 大将 (the invoice holder; from Niigata)'], origin: 'Niigata Prefecture (official site; 2025 reviews).',
      background: 'The invoice register lists an individual, 安達 秀行, for the shop’s invoice number; the official site links the Instagram account adachihideyuki. Per the official site: a slightly hidden shop facing Kiritoshi in Gion, with sake and local dishes from the 大将’s home prefecture of Niigata alongside popular modern dishes. Reviewers describe an owner from Niigata (June and October 2025) and a master who sometimes drinks along with guests (April 2025). Opened 26 November 2013 (Tabelog).',
      philosophy: 'Per the official site: "空間、人、美味しさ" — the space, the people and good food; at-home and hidden at once.',
      specialty: 'Pork miso soup; Tochio fried tofu with negi miso; Niigata sake.',
      anecdotes: [
        { text: 'An April 2025 guest ended up drinking with the tipsy master, with Showa pop on the speakers turning into a DJ session.', source: R + 'B505896911/' },
        { text: 'A June 2025 pair found the atmosphere between the chef and the owner a bit off, which made it hard to relax.', source: R + 'B508227700/' },
        { text: 'A January 2026 guest found the service from staff other than the owner lacking.', source: R + 'B521301245/' },
        { text: 'An April 2026 diner asked the owner for off-menu Niigata sake and liked the Sasashiki.', source: R + 'B526819775/' },
      ],
      japanese_sources_summary: '公式サイト (gion-adachiya.com): ぎをんの豚汁屋さん あだち家、和風居酒屋、京都祇園の切通しに面する隠れ家、大将の故郷新潟県の地酒、郷土料理、東山区清本町368-4 セラヴィビル1F、18:00〜3:00、日曜定休、18席 (カウンター8席・テーブル2卓)、カード可、喫煙可、メニュー: 熊本直送 馬刺し4種盛り、北海道産 本ししゃも、和牛すじ煮込み、自家製ローストビーフ、徳島産 肉厚椎茸焼き、新潟特産 栃尾のジャンボ油揚げ (納豆・ネギ味噌・明太子マヨネーズ)、新潟産 イカ刺し明太子和え、男のポテトサラダ、京都産 銀鱈の西京焼き、海老フライ、国産鶏もも唐揚げ (カレー味・レモン醤油・おろし胡麻ポン酢)。食べログ: 郷土料理・日本酒バー・居酒屋、月〜土18:00〜翌3:00 (L.O. 2:30)、祝前日17:00〜24:00、日曜休み (月曜祝日なら日曜営業・月曜休み)、お通し代1人500円、混雑時2時間制、喫煙可、カード・電子マネー・QR 可、2013年11月26日オープン、インボイス: 安達 秀行 (個人)。口コミ (2025年4月〜2026年11月、英語): 新潟出身のオーナー、豚汁、マカロニサラダ、肉じゃが、おでん。',
      confidence: 'medium', sources: [TB, SITE, CONCEPT, MENU, INV, R + 'B505896911/', R + 'B508227700/', R + 'B509402663/', R + 'B515725636/', R + 'B516823406/', R + 'B521301245/', R + 'B525379787/', R + 'B526819775/', R + 'B529842024/', R + 'B535384933/', R + 'B537710971/', R + 'B538589986/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Smoking allowed; ¥500 cover; mostly local regulars.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区清本町368-4 セラヴィBldg 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (notice August 2026) and Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.004662, 135.774543); cross-checked: GSI 京都府京都市東山区清本町368番地 (lot) 32m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [MENU],
    price_note: 'Official menu, no prices published; ¥500 cover per person (Tabelog).', last_checked: TODAY, items: [
      it('あだち家の豚汁', 'tonjiru', 'Adachiya’s pork miso soup', '', 'Signature', 'ask', 'no', 'Named in 2026 reviews.', 'tonjiru'),
      it('新潟特産 栃尾のジャンボ油揚げ', '', 'Niigata Tochio jumbo fried tofu (natto, negi miso or mentaiko mayo)', '', 'Dishes', 'ask', 'ask', '', 'tochio_aburaage'),
      it('熊本直送 馬刺し4種盛り', 'basashi', 'Kumamoto horse sashimi, four kinds', '', 'Dishes', 'ask', 'no', '', 'basashi'),
      it('京都産 銀鱈の西京焼き', '', 'Kyoto silver cod grilled in Saikyo miso', '', 'Dishes', 'ask', 'no', '', 'saikyoyaki'),
    ] }, {
    cuisine: '大将の故郷、新潟の地酒と料理がそろう深夜の居酒屋 (公式サイト)・あだち家の豚汁、おにぎりと・熊本直送の馬刺し4種盛り・北海道産の本ししゃも・和牛すじ煮込み・自家製ローストビーフ・徳島産の肉厚椎茸焼き・新潟特産、栃尾のジャンボ油揚げ (納豆、ネギ味噌、明太子マヨネーズ)・新潟産のイカ刺し明太子和え・京都産の銀鱈の西京焼き・自家製タルタルソースの海老フライ・国産鶏もも唐揚げ (カレー味、レモン醤油、おろし胡麻ポン酢) (公式メニュー)・ツナのマカロニサラダ、肉じゃが、冬のおでん、粕汁、いくら丼のハーフ、うずらのベーコン巻き (2025〜2026年の口コミ)・Sasashiki など新潟の日本酒、メニューにない酒も',
    neighborhood: '巽橋に近い祇園の切通し。祇園四条駅から徒歩4分',
    gf_detail: '要確認。豚汁、揚げ物、おでん、西京焼き、醤油味の料理などの居酒屋メニュー。グルテンの情報は公開されていない (公式メニュー、2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。看板は豚汁で、馬刺し、魚、唐揚げ、おでんも。椎茸焼きや栃尾の油揚げのネギ味噌など一部の皿は原材料が公開されていない (公式メニュー、2025〜2026年の口コミ)。',
    notes: '[居酒屋・祇園、深夜3時まで新潟の酒] 祇園の切通しにある、たばこも吸える小さな深夜の居酒屋。新潟出身の大将の店。新潟の日本酒 (メニューにない酒も聞いてみて) に、ツナのマカロニサラダ、肉じゃが、馬刺し、栃尾の大きな油揚げのネギ味噌、冬のおでん、そして締めは店名の豚汁。客は地元の人が中心で、昭和のポップスが流れる。お通し500円。3時まで、日曜休み。',
  });
}

// ================================================================ 京都三条 箔
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26030697/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.haku.kyoto/'; const FOOD = SITE + 'food.php'; const HIST = SITE + 'history.php';
  const PR1 = 'https://san-tatsu.jp/pressrelease/506061/'; const PR2 = 'https://san-tatsu.jp/pressrelease/483407/';
  const GL = 'https://recruit.glion.co.jp/';
  const WD = day(['17:00', '22:00']); const WE = day(['12:00', '15:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_sanjo_haku', name: '京都三条 箔 (Kyoto Sanjo Haku)', category: 'OMNI',
    lat: 35.009602, lng: 135.770959, cuisine_type: 'sukiyaki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. Sukiyaki is cooked in the house warishita and kaiseki starters use dashi; the current menu publishes no gluten information. The operator once announced a gluten-free wagyu sukiyaki kaiseki for inbound guests (press release, now offline; per a search summary) — confirm it is still offered (official menu, November 2026).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: wagyu sukiyaki and shabu-shabu kaiseki with dashi-based starters (official menu).',
    hours_raw: 'Dinner 17:00–22:00 (last entry 19:00); lunch 12:00–15:00 (last entry 13:00) Saturday, Sunday and holidays only; closed Tuesday (official site; Tabelog also lists Monday dinner). Reservation required; changes and cancellations at least 3 days ahead, 100% fee for cancelling the day before (Tabelog). Course prices on the site include tax and service; Tabelog lists a 10% service charge. Private-room fee ¥1,650 per person at dinner, ¥1,100 at lunch (official site); 2nd-floor hall ¥11,000 (Tabelog). 34 seats in private rooms (tables and sunken kotatsu), some over the Kamo River, with a terrace; designated smoking area; cards, Alipay and WeChat Pay (Tabelog; 2026 reviews). English menu and staff; children welcome, with a ¥5,500 sukiyaki bento for children (Tabelog). Down a narrow stone path off Kiyamachi-dori north of Sanjo; 3 min from Sanjo Stn exit 7 (official site; Tabelog).',
    hours: { 0: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kiyamachi-dori north of Sanjo, on the Kamo River — 3 min from Sanjo Stn',
    cuisine: 'Wagyu sukiyaki kaiseki cooked at the table by staff in the house warishita (official site) · dinner: wagyu sukiyaki kaiseki ¥24,500, Omi-beef sukiyaki ¥30,500, Omi-beef shabu-shabu with kombu dashi, house ponzu and sesame sauce ¥30,500 (book ahead), Kobe-beef sukiyaki ¥36,500, Omi-beef chateaubriand sukiyaki (limited) ¥42,500 — each with a starter, soup, the main, rice and dessert · weekend lunch: wagyu sukiyaki ¥12,100, wagyu and Omi-beef tasting ¥18,150, Omi-beef sukiyaki ¥24,200 (official menu, prices including tax and service) · Kobe and Omi beef tasting sukiyaki ¥38,500 over New Year 2025–26 (press release) · hamo and kakigori in summer (June 2026)',
    website: SITE, gmaps: gm('京都三条 箔 木屋町'), menu_url: FOOD,
    notes: "[Sukiyaki · Kiyamachi, private rooms over the Kamo River] A sukiyaki house in private rooms down a stone alley off Kiyamachi, in the building where the Bakumatsu samurai Takechi Hanpeita lodged when it was the ryotei 四国屋丹虎; some rooms look over the Kamo River, one onto a tsukubai garden by Kazuyuki Ishihara. Staff cook wagyu, Omi or Kobe beef sukiyaki at the table in the house warishita, after seasonal kaiseki starters; dinner from ¥24,500, weekend lunch from ¥12,100, service included. Reviewers praise the rooms and the river terrace; one found the sukiyaki too light. Run by the Kobe-based G LION GROUP. Closed Tuesday.",
    chef_bio: { chef_name: null, roles: ['料理長 (head chef, not named); operator G LION GROUP (Kobe; representative 菊地 秀武)'], origin: null,
      background: 'Per the official site: wagyu sukiyaki kaiseki in a new style by a cook long experienced in traditional Japanese cuisine, made in front of guests with the house warishita; the building was the ryotei 四国屋丹虎 in the Bakumatsu era, where 武市半平太 lived when in Kyoto, and the tokonoma board and pillar of the 半平の間 are kept unchanged; a box-staircase trace from that era was found during renovation; tsubo-niwa garden supervised by the garden designer 石原和幸. Press releases name the operator as the G LION GROUP of Kobe (representative 菊地 秀武), whose recruitment site describes about 150 group companies, mostly car dealerships. Tabelog Hot Pot "Tabelog 100" 2026 (Tabelog).',
      philosophy: 'Per the official site: an out-of-the-ordinary sukiyaki experience — the seasons of Kyoto with all five senses.',
      specialty: 'Wagyu, Omi and Kobe beef sukiyaki kaiseki.',
      anecdotes: [
        { text: 'A May 2026 guest left something behind without noticing, and staff came outside to find the guest.', source: R + 'B527467797/' },
        { text: 'An April 2026 diner asked for a sake recommendation, was left waiting by a newer staff member and gave up, and found the meat cut thicker than liked.', source: R + 'B526087804/' },
        { text: 'A September 2026 diner, used to Kyushu-style sukiyaki, found the taste too light and refreshing.', source: R + 'B535067531/' },
      ],
      japanese_sources_summary: '公式サイト (haku.kyoto): 京都三条 箔、鴨川を望む個室で味わう和牛すき焼き会席、伝統的な日本料理を経験した料理人による新しいスタイルの和牛すき焼き会席、箔特製の割り下、スタッフが目の前で作る、世界的な庭園デザイナー石原和幸氏監修の坪庭、木屋町通に面する、武市半平太寓居之跡、幕末は四国屋丹虎という料亭、半平の間の床板と床柱、中京区木屋町通三条上る上大阪町528-3、三条駅より徒歩3分、12時〜15時 (最終入店13時) 土日祝のみ、17時〜22時 (最終入店19時)、火曜定休、お品書き: 和牛すき焼き会席24,500円、近江牛すき焼き会席30,500円、近江牛しゃぶしゃぶ会席30,500円 (要予約)、神戸牛すき焼き会席36,500円、近江牛シャトーブリアンすき焼き会席42,500円 (税サ込)、ランチ 和牛すき焼き12,100円・和牛と近江牛食べ比べ18,150円・近江牛すき焼き24,200円、個室料金 昼1,100円・夜1,650円。プレスリリース (さんたつ): GLION GROUP (兵庫県神戸市、代表取締役 菊地秀武) が運営、年末年始の神戸・近江牛食べ比べすき焼き会席38,500円。食べログ: すき焼き・しゃぶしゃぶ・日本料理、サービス料10%、34席 (テーブル24、掘りごたつ10)、個室、分煙、カード・Alipay・WeChat Pay、英語メニュー、持ち込み可、鍋 百名店 2026。口コミ (2026年1〜10月、英語)。',
      confidence: 'medium', sources: [TB, SITE, FOOD, HIST, PR1, PR2, GL, R + 'B520553354/', R + 'B526087804/', R + 'B527467797/', R + 'B528362375/', R + 'B528798269/', R + 'B529502906/', R + 'B530237864/', R + 'B530271691/', R + 'B531498110/', R + 'B532211795/', R + 'B535067531/', R + 'B537286363/'] },
    cultural_comfort: { level: 'english', note: 'English menu and staff (Tabelog); book ahead, cancellation fees apply.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区木屋町通り三条上ル上大阪町528-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (news October 2026) and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.009602, 135.770959); cross-checked: GSI 京都府京都市中京区上大阪町528番地 (lot) 31m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [FOOD],
    price_note: 'Official menu (prices including tax and service).', last_checked: TODAY, items: [
      it('和牛すき焼き会席', '', 'Wagyu sukiyaki kaiseki', '¥24,500', 'Dinner', 'ask', 'no', '', 'wagyu_sukiyaki'),
      it('近江牛すき焼き会席', '', 'Omi-beef sukiyaki kaiseki', '¥30,500', 'Dinner', 'ask', 'no', '', 'omi_sukiyaki'),
      it('神戸牛すき焼き会席', '', 'Kobe-beef sukiyaki kaiseki', '¥36,500', 'Dinner', 'ask', 'no', '', 'kobe_sukiyaki'),
      it('箔特製 ランチ 和牛すき焼き', '', 'Weekend lunch wagyu sukiyaki', '¥12,100', 'Lunch', 'ask', 'no', 'Saturday, Sunday and holidays.', 'lunch_sukiyaki'),
    ] }, {
    cuisine: 'スタッフが箔特製の割下で卓上で作る和牛すき焼き会席 (公式サイト)・夜: 和牛すき焼き会席24,500円、近江牛すき焼き会席30,500円、昆布出汁と自家製ポン酢・胡麻だれの近江牛しゃぶしゃぶ会席30,500円 (要予約)、神戸牛すき焼き会席36,500円、数量限定の近江牛シャトーブリアンすき焼き会席42,500円。いずれも先付、椀物、メイン、食事、甘味・土日祝の昼: 和牛すき焼き12,100円、和牛と近江牛の食べ比べ18,150円、近江牛すき焼き24,200円 (公式メニュー、税サ込)・2025〜2026年の年末年始は神戸牛と近江牛の食べ比べすき焼き会席38,500円 (プレスリリース)・夏は鱧とかき氷 (2026年6月)',
    neighborhood: '三条の北の木屋町通、鴨川沿い。三条駅から徒歩3分',
    gf_detail: '予約時に要確認。すき焼きは箔特製の割下、会席の先付や椀物はだしを使う。今のメニューにはグルテンの情報はない。運営会社はインバウンド客向けにグルテンフリーの和牛すき焼き会席を発表したことがある (プレスリリース、現在は閲覧不可、検索の要約による)。今も提供しているか確認を (公式メニュー、2026年11月)。',
    vegan_detail: 'ヴィーガン不可。和牛のすき焼きとしゃぶしゃぶの会席で、先付はだしベース (公式メニュー)。',
    notes: '[すき焼き・木屋町、鴨川を望む個室] 木屋町から石畳の路地を入った個室のすき焼き店。幕末に料亭「四国屋丹虎」だった建物で、武市半平太が京都で暮らした場所。鴨川を望む部屋や、石原和幸氏監修の蹲の坪庭が見える部屋も。季節の会席の先付のあと、スタッフが特製の割下で和牛、近江牛、神戸牛のすき焼きを卓上で作る。夜は24,500円から、土日祝の昼は12,100円から (サービス料込み)。部屋と川沿いのテラスが好評で、すき焼きの味があっさりしすぎという声も。神戸のジーライオングループが運営。火曜休み。',
  });
}

// ================================================================ 然花抄院 京都室町本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26013765/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://zen-kashoin.com/'; const ABOUT = SITE + 'about'; const STORE = SITE + 'store'; const ACCESS = SITE + 'zencafe/access';
  const MENU = SITE + 'muromachistore/zencafe/menu'; const DRINK = SITE + 'muromachistore/zencafe/drink';
  const CO = 'https://zenkashoin-shop.com/fs/zenkashoin/c/company';
  const H = day(['11:00', '18:00']);
  put({
    id: 'kyoto_zen_kashoin_muromachi', name: '然花抄院 京都室町本店 (Zen Kashoin)', category: 'OMNI',
    lat: 35.013203, lng: 135.758027, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The house sweets are paper-baked castella, dorayaki, cookies and Mont Blanc on castella; warabi mochi, ice cream and teas are also served, but no gluten information is published (official menu; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Castella and the egg sweets use eggs, and parfaits use cream and ice cream; Japanese teas and coffee are plant-based, but no ingredient list is published for the warabi mochi or other sweets (official menu; 2026 reviews).',
    hours_raw: '11:00–18:00 daily, café last order 17:30; closed days posted on the store calendar (official site; Tabelog). No café bookings (official site). A Sunday 15:00 visitor in November 2026 found 5–6 groups waiting. 20 seats looking onto the inner garden; non-smoking; cards, e-money and QR (Tabelog). Shop, café, gallery (Gallery SUGATA) and workshop in a wide-fronted townhouse dated 元禄十三年 (1700) on Muromachi-dori south of Nijo; 5–6 min from Karasuma-Oike Stn exit 2 (official site). Opened August 2009 (official site; Tabelog gives 8 August 2009). Fresh castella keeps about two days (October 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Muromachi-dori south of Nijo — 5 min from Karasuma-Oike Stn',
    cuisine: 'Paper-baked castella of Kyoto eggs and the house café in an old townhouse (official site) · 茶庭ノ膳: three castellas — matcha, egg-yolk "ranmitsu" and plain — with a drink ¥1,760 · 宝卵ノ膳: castella with custard, "Muromachi bolo" and hojicha ice cream, with a drink ¥1,650 · autumn 実ノ膳: Kumamoto chestnut Mont Blanc, chestnut castella, chestnut dorayaki and hojicha ice cream, with a drink ¥1,870 (to 30 November) · purple sweet-potato parfait with a drink ¥1,870 · autumn cream anmitsu with persimmon and Shine Muscat ¥1,870 (November) · grill-your-own mitarashi dango with a drink ¥1,870 (November–May) · "Zen" ice, two of hojicha, matcha or vanilla, with a drink ¥1,320 (official menu) · warabi mochi with a drink about ¥1,650 (October 2026) · drinks ¥880 alone: sencha, genmaicha, ume bancha, hojicha, kombu tea, matcha ¥990, bamboo-charcoal roast coffee, Okinawa Kanakawa black tea (official drinks) · take-away castella, zarame castella ¥702 (November 2026), dorayaki, rusks',
    website: SITE, gmaps: gm('然花抄院 京都室町本店'), menu_url: MENU,
    notes: "[Sweets & café · Muromachi, castella in a 1700 townhouse] The flagship of a castella maker in a broad-fronted Muromachi townhouse built in 1700, with an earthen entry, an old kamado and well, a gallery and a tearoom over an inner garden. Its paper-baked castella of Kyoto eggs comes as a three-piece tasting set with tea (¥1,760), and seasonal plates — chestnut Mont Blanc and dorayaki in autumn, grill-your-own dango in winter — come with a drink for about ¥1,870. No bookings; expect a queue at weekends. Run by 長崎堂 of Osaka, which also has a café in Shibuya Hikarie. Open daily 11:00–18:00.",
    chef_bio: { chef_name: null, roles: ['Operator 株式会社長崎堂 (Osaka; founded 1960; chairman 荒木 貴史); not a chef-led shop'], origin: null,
      background: 'Per the official site: 然花抄院 opened its Kyoto Muromachi main store in August 2009 among old kimono merchants, with shop, café, gallery and workshop; the townhouse has a pillar inscribed with its building year, 元禄十三年, paving stones from the Kitano tram line, a well in the courtyard and kamado, and walls partly papered in karakami by 唐長; the name expresses hospitality with "a heart of flowers" and sweets in the true taste of each. The company page lists 株式会社長崎堂 (founded August 1960, capital ¥30 m) and two cafés, Kyoto Muromachi and Shibuya Hikarie ShinQs (opened April 2012), plus ZENKASHOIN gift shops in mass retailers and station and airport shops (official site). Tabelog Cafe WEST "Tabelog 100" 2025 (Tabelog).',
      philosophy: 'Per the official site: "花も、菓も、然るべき姿へ" — flowers and sweets, each in its proper form; serving things plainly, without affectation.',
      specialty: 'Paper-baked "Zen" castella; seasonal sweet plates with tea.',
      anecdotes: [
        { text: 'An October 2026 visitor was intimidated by the size of the entrance but relieved by the warm welcome, and found the chestnut plate fair value with a drink included.', source: R + 'B537678674/' },
        { text: 'An October 2026 visitor ordered warabi mochi but was most moved by the salty-sour ume bancha.', source: R + 'B537745280/' },
        { text: 'An October 2026 visitor wanted to take home lots of fresh castella but bought one, as it keeps only until the next day.', source: R + 'B537068852/' },
      ],
      japanese_sources_summary: '公式サイト (zen-kashoin.com): 京都室町御菓子司 然花抄院、2009年8月に京都室町通りに京都室町本店、物販・カフェ・ギャラリー・工房、建立元禄十三年の町家、北野行ちんちん電車の敷石、中庭や竃の井戸、唐長の唐紙、花ある心でおもてなし、「花も、菓も、然るべき姿へ」、茶寮「然カフェ」、中京区室町通二条下ル蛸薬師町271-1、11:00〜18:00 (喫茶17:30 L.O.)、喫茶の席の予約不可、烏丸御池駅2番出口より徒歩6分、渋谷ヒカリエ ShinQs店 (2012年4月)、ZENKASHOIN (ギフト商品、量販店・駅空港土産店)、お品書き: やきたてみたらし団子1,870円 (11月1日〜5月31日)、実ノ膳1,870円、お芋パフェ紫月夜1,870円、くりーむあんみつ秋1,870円、茶庭ノ膳1,760円、宝卵ノ膳1,650円、「然」アイス1,320円 (いずれもドリンク付)、煎茶・玄米茶・梅番茶・焙じ茶・昆布茶・京番茶880円、抹茶990円、竹炭焙煎コーヒー880円。会社概要: 株式会社長崎堂、1960年8月創業、資本金3,000万円、代表取締役会長 荒木貴史、和洋菓子の製造及び販売。食べログ: カフェ・和菓子・甘味処、20席、禁煙、カード・電子マネー・QR 可、2009年8月8日オープン、運営: 長崎堂 (心斎橋)、カフェ WEST 百名店 2025。口コミ (2024年12月〜2026年11月、英語): ざらめカステラ702円。',
      confidence: 'medium', sources: [TB, SITE, ABOUT, STORE, ACCESS, MENU, DRINK, CO, R + 'B497644394/', R + 'B536537309/', R + 'B537068852/', R + 'B537678674/', R + 'B537745280/', R + 'B538215842/', R + 'B538453179/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'No café bookings; weekend queues; sweets come as sets with a drink.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区室町通二条下ル蛸薬師町271-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (news November 2026) and Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.013203, 135.758027); cross-checked: GSI 京都府京都市中京区蛸薬師町271番地 (lot) 37m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU, DRINK],
    price_note: 'Official café menu (autumn 2026; sets include a drink).', last_checked: TODAY, items: [
      it('茶庭ノ膳', '', 'Three-castella tasting set with a drink', '¥1,760', 'Sets', 'no', 'no', '', 'chatei_zen'),
      it('宝卵ノ膳', '', 'Castella-custard sweet set with hojicha ice and a drink', '¥1,650', 'Sets', 'no', 'no', '', 'horan_zen'),
      it('実ノ膳', '', 'Autumn chestnut plate with a drink', '¥1,870', 'Sets', 'no', 'no', 'To 30 November.', 'mi_zen'),
      it('「然」アイス', '', 'Two scoops of house ice with a drink', '¥1,320', 'Sets', 'ask', 'no', '', 'zen_ice'),
      it('梅番茶', '', 'Ume bancha', '¥880', 'Drinks', '', 'ask', '', 'ume_bancha'),
    ] }, {
    cuisine: '京都の卵の紙焼きかすてらと、古い町家の茶寮 (公式サイト)・茶庭ノ膳: 抹茶の「碾」、卵の黄身の「卵蜜」、「然」かすてらの3種、ドリンク付1,760円・宝卵ノ膳: カスタードとかすてらの「宝卵」、「室町傍瑠」、焙じ茶アイス、ドリンク付1,650円・秋の実ノ膳: 熊本県産蒸し栗クリームのモンブラン、栗カステラ、栗入りどらやき、焙じ茶のアイスクリーム、ドリンク付1,870円 (11月30日まで)・お芋パフェ紫月夜 ドリンク付1,870円・くりーむあんみつ秋 (柿、シャインマスカット) 1,870円 (11月)・自分で焼くやきたてみたらし団子 ドリンク付1,870円 (11月〜5月)・「然」アイス (ほうじ茶、抹茶、バニラから2つ) ドリンク付1,320円 (公式メニュー)・わらび餅 ドリンク付1,650円ほど (2026年10月)・単品の飲み物880円: 煎茶、玄米茶、梅番茶、焙じ茶、昆布茶、抹茶990円、竹炭焙煎コーヒー、沖縄県産金川紅茶 (公式サイトの飲み物)・持ち帰りのかすてら、ざらめカステラ702円 (2026年11月)、どらやき、ラスク',
    neighborhood: '二条の南の室町通。烏丸御池駅から徒歩5分',
    gf_detail: '要確認。看板は紙焼きかすてら、どらやき、クッキー、かすてらにのせたモンブラン。わらび餅、アイス、お茶もあるが、グルテンの情報は公開されていない (公式メニュー、2026年の口コミ)。',
    vegan_detail: '要確認。かすてらや卵の菓子は卵を使い、パフェはクリームとアイス。日本茶とコーヒーは植物性だが、わらび餅などの原材料は公開されていない (公式メニュー、2026年の口コミ)。',
    notes: '[甘味とカフェ・室町、1700年の町家のかすてら] かすてらの店の本店。元禄十三年 (1700年) 建立の間口の広い室町の町家で、土間、古いへっついと井戸、ギャラリー、中庭に面した茶寮がある。京都の卵の紙焼きかすてらはお茶付きの3種の膳 (1,760円) で、秋の栗のモンブランとどらやき、冬の自分で焼く団子など季節の膳はドリンク付で1,870円ほど。予約不可、週末は待つことも。大阪の長崎堂が運営し、渋谷ヒカリエにもカフェがある。毎日11時〜18時。',
  });
}

save();
