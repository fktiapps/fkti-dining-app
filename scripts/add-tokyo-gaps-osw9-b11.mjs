// Tokyo gaps sweep (1-mile circles between the existing Tokyo clusters), circle roppongi — lane osw9, batch 11.
//   + みそめぼれ Misomebore (miso soup from all 47 prefectures with onigiri and obanzai; open to 5 am)
//   + 鮨結う紬 Sushi Yuu Tsumugi (omakase by chef Kazuki Tahara, produced by Sushi Yuu; ¥16,500)
//   + 鮨割烹3 Sushi Kappou 3 (sushi kaiseki sister of Miyake Akira; pick three specialities)
//   + WAGYU SUKIYAKI 極 六本木 Goku (A5 wagyu sukiyaki in one-person pots, truffle TKG to finish)
//   + 銀座蕎麦うどんしら石 六本木店 Ginza Soba Udon Shiraishi (24-hour soba and udon; JHCPO halal-certified) — skipped in
//     osw9-2 as part of J.Group's しら石 brand; included by Greg's ruling of 2026-11-02, taken by Tabelog id 13306025.
//   Skipped: 日高屋 六本木店 13024040 — Hidakaya chain, tokyo3__316 in data; 麺屋武蔵 虎嘯 13131171 — Menya Musashi chain,
//   tokyo_menya_musashi_bukotsu_ga and tokyo3__141 in data.
//   Chain check. Misomebore, Goku: one listing each. Yuu Tsumugi: an August 2026 reviewer says it is produced by Sushi Yuu;
//   not in data. Sushi Kappou 3: sister of Miyake Akira (tokyo_miyake_akira_roppongi; its Tabelog text names Teru Miyake's
//   specialities and both listings carry invoice number T7010401152275). Shiraishi: the official site (soba-shiraishi.
//   j-silver.co.jp) names a second shop, 銀座店 in Ginza 8-chome (2025). None is in data/tokyo.json by name, Tabelog id or
//   address. Misomebore (3-14-13) is 5 m from Mensho Taketora's Tabelog point (tokyo_mensho_taketora_roppongi, 3-14-14),
//   so its pin is offset ~8 m south-east. Tabelog URLs copied from each listing.txt line 1. No placeholder hours.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('tokyo-gaps', TODAY, 'osw9-11');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('13024040', '日高屋 六本木店: Hidakaya chain; tokyo3__316 already in data');
skip('13131171', '麺屋武蔵 虎嘯: Menya Musashi chain; tokyo_menya_musashi_bukotsu_ga and tokyo3__141 already in data');

// ================================================================ みそめぼれ
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13285347/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:30', '05:00']); const S = day(['11:30', '18:00']);
  put({
    id: 'tokyo_misomebore_roppongi', name: 'みそめぼれ (Misomebore)', category: 'OMNI',
    lat: 35.662444, lng: 139.734272, cuisine_type: 'shokudo',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Nothing is called gluten-free, and the miso types are not described; side dishes include kara-age (September 2026).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The miso soup is miso dissolved into a house dashi (August 2026) whose ingredients are not given; fillings and sides include salmon, mentaiko, meat soboro and mackerel.',
    hours_raw: 'Mon–Sat and the day before a holiday 11:30–05:00; Sundays and holidays 11:30–18:00; closed 31 December–4 January (Tabelog). From 17:00 a one-drink minimum; ¥300 late-night charge after 23:00 (Tabelog). Miso soup and onigiri to take away without booking; a small eat-in table near the door with no cover. QR ordering (October 2026). Waits of 20–30 minutes when busy were reported (October 2026). 18 seats: 10 at the counter and 8 in booths. Heated tobacco only, in a smoking area. Cards, IC/e-money and QR. English menu and English-speaking staff. Children welcome.',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: W, 6: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Roppongi 3-14-13, UFビル 1F — 5 min from Roppongi Stn',
    cuisine: 'Miso soup from all 47 prefectures, onigiri and obanzai, with sake chosen by a sake sommelier (Tabelog shop text) · miso soup ¥660 any region, with tofu, wakame and green onion, toppings extra; a popularity ranking helps you choose (2026 reviews) · onigiri made to order, e.g. salmon, grilled mentaiko, Kishu nanko plum ¥550, egg-yolk meat soboro ¥660, tororo kombu ¥550 (September–October 2026) · lunch sets: one onigiri, miso soup and two sides about ¥1,480; two onigiri with sides about ¥2,000 (October 2026) · small dishes: mackerel with nameko ¥880, cucumber with miso, kara-age, tamagoyaki; pork miso soup · course with two hours of all-you-can-drink ¥6,000 (Tabelog) · jasmine tea ¥500',
    website: null, gmaps: gm('みそめぼれ 六本木3-14-13'), menu_url: TB + 'dtlmenu/',
    notes: "[Miso soup · Roppongi, a miso-soup bar for every prefecture, open till 5 am] A wood-and-plants room five minutes from Roppongi Station lined with jars of miso from all 47 prefectures: pick one (a staff ranking helps), and it is stirred into the house dashi with tofu and wakame, ¥660 a bowl, next to an onigiri shaped to order. By day it is a quick lunch of soup, onigiri and obanzai; by night a sake bar with small dishes, open until 5 am. Diners in 2026 love the choice — one is collecting them all — but two wished the dashi richer, several found it pricey, and some waited long at busy times. One drink per person after 5 pm; ¥300 late-night charge after 11 pm.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'The Tabelog shop text describes additive-free miso soup, seasonal obanzai and onigiri, and sake chosen by a sake sommelier. An October 2026 diner mentions a collaboration menu with the comedy trio "Hera Hera Sanjushi". No one is named in the sources read.',
      philosophy: '"Miso soup can be so different!" — choose your miso soup by the day\'s mood (Tabelog shop text).', specialty: 'Miso soup from 47 prefectures; onigiri made to order.',
      anecdotes: [
        { text: '"From there, I confidently chose the staff\'s top 3 favorite, which was "Fukuoka Miso."" — September 2026, Fukuoka miso soup ¥660.', source: R + 'B536615032/' },
        { text: '"The miso soup is prepared by mixing the chosen miso with a pre-prepared dashi, and I felt that a richer dashi would have complemented the Edo sweet miso better." — August 2026.', source: R + 'B533580467/' },
        { text: '"Today marks 2 out of 48. There’s still a long way to go." — October 2026, collecting the regional misos.', source: R + 'B536971279/' },
      ],
      japanese_sources_summary: '食べログ: みそめぼれ、港区六本木3-14-13 UFビル1F、六本木駅から徒歩5分、月〜土・祝前日11:30〜翌5:00、日祝11:30〜18:00、12月31日〜1月4日休み、17時以降ワンドリンク制、23時以降深夜料金300円、味噌汁とおにぎりのテイクアウト、18席 (カウンター10、ボックス8)、加熱式たばこのみの喫煙所、カード・電子マネー・QR可、英語メニューとスタッフ、子ども可。店の紹介: 47都道府県の味噌から選べる味噌汁、無添加、出汁の効いた季節のおばんざいとおにぎり、唎酒師が選ぶ日本酒、飲み放題付きコース6,000円。口コミ(2026年8月〜10月): 味噌汁660円、おにぎり550〜660円、鯖となめこ880円、ランチセット約1,480円、人気ランキング、出汁がもっと濃ければという声、混む時間は待ち時間が長いという声、QR注文。',
      confidence: 'medium', sources: [TB, R + 'B532872726/', R + 'B533580467/', R + 'B536464053/', R + 'B536615032/', R + 'B536971279/', R + 'B537060225/', R + 'B537300458/', R + 'B537301317/', R + 'B537460083/', R + 'B537771750/'] },
    cultural_comfort: { level: 'english', note: 'English menu and English-speaking staff (Tabelog); QR ordering.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木3-14-13 UFビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.662489, 139.734217), 5 m from Mensho Taketora (tokyo_mensho_taketora_roppongi, 3-14-14), so offset ~8 m south-east; GSI 東京都港区六本木三丁目14番 (lot) 29m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536615032/', R + 'B537060225/', R + 'B537300458/'],
    price_note: 'Prices from September–October 2026 reviews; one-drink minimum after 17:00.', last_checked: TODAY, items: [
      it('', '', 'Miso soup, any prefecture\'s miso (tofu, wakame, green onion)', '¥660', 'Miso soup', 'ask', 'ask', 'September–October 2026 reviews.', 'miso_soup'),
      it('', '', 'Onigiri, e.g. Kishu nanko plum or tororo kombu', '¥550', 'Onigiri', 'ask', 'ask', 'September–October 2026 reviews; egg-yolk meat soboro ¥660.', 'onigiri'),
      it('', '', 'Lunch set: onigiri, miso soup, two sides', '¥1,480', 'Lunch', 'ask', 'ask', 'October 2026 review (about).', 'lunch_set'),
      it('', '', 'Course with two hours of all-you-can-drink', '¥6,000', 'Course', 'ask', 'no', 'Tabelog.', 'course'),
    ] }, {
    cuisine: '47都道府県の味噌から選ぶ味噌汁、おにぎり、おばんざい、唎酒師が選ぶ日本酒 (食べログの店の紹介)・味噌汁はどの県の味噌でも660円、豆腐、わかめ、ねぎ入り、トッピングは別。人気ランキングを参考に選べる (2026年の口コミ)・注文を受けて握るおにぎり: 鮭、焼き明太子、Kishu Nanko の梅550円、卵黄肉そぼろ660円、とろろ昆布550円 (2026年9〜10月)・ランチセット: おにぎり1個、味噌汁、小鉢2品で約1,480円、おにぎり2個と小鉢で約2,000円 (2026年10月)・一品: 鯖となめこ880円、味噌を添えた胡瓜、唐揚げ、玉子焼き、豚汁・2時間飲み放題付きコース6,000円 (食べログ)・ジャスミン茶500円',
    neighborhood: '六本木3-14-13 UFビル1F。六本木駅から徒歩5分',
    gf_detail: '要確認。グルテンフリーの説明はなく、味噌の種類の説明もない。一品には唐揚げも (2026年9月)。',
    vegan_detail: '要確認。味噌汁は作り置きの出汁に味噌を溶いて作り (2026年8月)、出汁の材料は書かれていない。おにぎりの具や一品には鮭、明太子、肉そぼろ、鯖も。',
    notes: '[味噌汁・六本木、47都道府県の味噌汁を朝5時まで] 六本木駅から5分、木と植物の店内に47都道府県の味噌の瓶が並ぶ。味噌を一つ選ぶと (スタッフの人気ランキングも参考に)、店の出汁に溶いて豆腐とわかめを入れ、一杯660円。注文を受けて握るおにぎりと一緒に。昼は味噌汁、おにぎり、おばんざいの手早いランチ、夜は一品と日本酒のバーになり、朝5時まで営業。2026年の客は選ぶ楽しさを喜び、全種類制覇をめざす人も。一方で出汁がもっと濃ければという声が二つ、高めだという声、混む時間は待たされたという声も。17時以降はワンドリンク制、23時以降は深夜料金300円。',
  });
}

// ================================================================ 鮨結う紬
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13290697/'; const R = TB + 'dtlrvwlst/';
  const E = day(['17:30', '22:00']); const L = day(['12:00', '14:00'], ['17:30', '22:00']);
  put({
    id: 'tokyo_sushi_yuu_tsumugi_roppongi', name: '鮨結う紬 (Sushi Yuu Tsumugi)', category: 'OMNI',
    lat: 35.664766, lng: 139.732451, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Nothing is called gluten-free; the course includes homemade ponzu, abalone with a liver sauce, an anago or eel rice bowl and a thick roll (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an Edomae sushi omakase.',
    hours_raw: 'Mon, Thu, Fri dinner in two seatings, 17:30–19:30 and 20:00–22:00; Sat, Sun and holidays also lunch 12:00–14:00; closed Tuesdays and Wednesdays, with about eight days off a month in all and occasional extra closures (Tabelog). Fully reserved time slots. No service or cover charge. Free corkage (September 2026). 14 seats: a counter of 10 and a private room for 2–4; choose counter or room when booking. Non-smoking. Cards; no e-money or QR. Families with children can use the private room.',
    hours: { 0: E, 3: E, 4: E, 5: L, 6: L }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Roppongi 4-5-11, ランド六本木ビル B1F — 3 min from Roppongi Stn exit 6 (Oedo line), 4 min from exit 4a (Hibiya line)',
    cuisine: 'Edomae sushi omakase (Tabelog) · from 3 September 2026: counter omakase of 6 small dishes, 12 nigiri and a roll, ¥16,500 at lunch or dinner; ¥19,800 with all-you-can-drink (Tabelog); drink plans ¥3,300 or ¥5,500, a non-alcoholic plan and pairings (September 2026) · signatures: abalone with liver sauce finished with sushi rice, a crab, sea urchin and caviar hand roll, the "pudding roll" of monkfish-liver paste, cucumber and nara-zuke, a sea-urchin roll; smooth tofu to start (2026 reviews) · nigiri on small, red-vinegared rice: kasugo, hata aged a week, botan shrimp, ikura, Boston tuna (marinated akami, chutoro, toro-taku), kohada; tamagoyaki with aosa; Kansai-style eel over rice; crab miso soup (September–October 2026) · sake such as Zaku, Houou Bidan, Kokuryu, Nabeshima, Aramasa (extra)',
    website: null, gmaps: gm('鮨結う紬 六本木4-5-11'), menu_url: TB + 'dtlmenu/',
    notes: "[Sushi · Roppongi, a relaxed Sushi Yuu-produced omakase] A ten-seat basement counter, plus a private room, where chef Kazuki Tahara — trained at Sushi Zai and the Michelin-starred Sushi Yuu, per the shop — serves a relaxed omakase of six small dishes, twelve nigiri and a roll for ¥16,500, or ¥19,800 with all-you-can-drink. Reviewers in 2026 single out the abalone in liver sauce stirred into sushi rice, a crab, sea urchin and caviar hand roll, and the house \"pudding roll\" of monkfish liver; the rice is small and lightly red-vinegared, and fish such as hata are aged a week. There is no service charge and corkage is free. Diners found the chefs friendly and the room unpretentious. Dinner runs in two seatings; weekend lunch too; closed Tuesdays and Wednesdays.",
    chef_bio: { chef_name: 'Kazuki Tahara (as written in the Tabelog shop text)', roles: ['Chef (Tabelog shop text)'], origin: null,
      background: 'Per the Tabelog shop text, chef Kazuki Tahara trained at "Sushi Zai" and the Michelin-starred "Sushi Yu". An August 2026 reviewer heard the shop is produced by Sushi Yuu, and a September 2026 regular likens the glass serving platform to the one at Ginza Sushi Yuu. The sources read do not say who owns it.',
      philosophy: 'Authentic Edomae sushi in a relaxed, enjoyable setting at reasonable prices (Tabelog shop text).', specialty: 'Abalone with liver sauce; the "pudding roll".',
      anecdotes: [
        { text: '"The corkage fee is surprisingly free! How generous." — September 2026, third visit.', source: R + 'B508432335/' },
        { text: '"The steamed abalone with liver sauce has a perfect balance of umami, richness, and acidity!" — October 2026.', source: R + 'B537514977/' },
        { text: '"High-end sushi can often feel tense, but here, even at the counter seats, there was no awkward atmosphere." — August 2026, lunch.', source: R + 'B534621197/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 鮨結う紬、港区六本木4-5-11 ランド六本木ビルB1F、大江戸線六本木駅6番出口から徒歩3分、日比谷線4a出口から4分、月・木・金17:30〜19:30・20:00〜22:00、土日祝は12:00〜14:00も、火水休み (月8日休み、ほかにも休みあり)、完全予約制の時間帯、サービス料・チャージなし、14席 (カウンター10、個室1)、禁煙、カード可。店の紹介: 「Sushi Zai」と星付きの「Sushi Yu」で修業した Kazuki Tahara の江戸前鮨。2026年9月3日からのカウンターのおまかせ (小鉢6、握り12、巻物1) 16,500円、飲み放題付き19,800円。口コミ(2026年8月〜10月): 鮑の肝ソース、蟹と雲丹とキャビアの手巻き、あん肝と胡瓜と奈良漬の「プリン巻き」、赤酢の小ぶりのシャリ、1週間熟成のはた、Boston の鮪、鰻丼、持ち込み料無料、Sushi Yuu のプロデュースという声。',
      confidence: 'medium', sources: [TB, R + 'B478764032/', R + 'B480851039/', R + 'B508432335/', R + 'B534621197/', R + 'B535439716/', R + 'B536034396/', R + 'B536530622/', R + 'B536545816/', R + 'B537079383/', R + 'B537514977/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Omakase only, at set seating times.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木4-5-11 ランド六本木ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with courses from September 2026; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.664766, 139.732451); GSI 東京都港区六本木四丁目5番 (lot) 27m; Kicko (tokyo_kicko_roppongi, 4-5-7) is 47 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course prices from Tabelog (tax included; from 3 September 2026). No service charge.', last_checked: TODAY, items: [
      it('', '', 'Counter omakase: 6 small dishes, 12 nigiri, 1 roll (lunch or dinner)', '¥16,500', 'Course', 'ask', 'no', 'Tabelog.', 'omakase'),
      it('', '', 'Counter omakase with all-you-can-drink', '¥19,800', 'Course', 'ask', 'no', 'Tabelog.', 'omakase_nomihodai'),
    ] }, {
    cuisine: '江戸前鮨のおまかせ (食べログ)・2026年9月3日から: カウンターのおまかせ (小鉢6品、握り12貫、巻物1本) 昼夜とも16,500円、飲み放題付き19,800円 (食べログ)。飲み放題は3,300円か5,500円、ノンアルコールやペアリングも (2026年9月)・名物: 鮑の肝ソースを最後にシャリと、蟹と雲丹とキャビアの手巻き、あん肝と胡瓜と奈良漬の「プリン巻き」、雲丹の巻物、最初の滑らかな豆腐 (2026年の口コミ)・赤酢の小ぶりのシャリの握り: 春子、1週間熟成のはた、牡丹海老、いくら、Boston の鮪 (赤身の漬け、中トロ、トロたく)、小肌。あおさの玉子焼き、Kansai スタイルの鰻のご飯、蟹の味噌汁 (2026年9〜10月)・日本酒は Zaku、Houou Bidan、Kokuryu、Nabeshima、Aramasa (追加料金) など',
    neighborhood: '六本木4-5-11 ランド六本木ビルB1F。六本木駅6番出口 (大江戸線) から徒歩3分、4a出口 (日比谷線) から4分',
    gf_detail: '要確認。グルテンフリーの説明はない。コースには自家製ポン酢、肝ソースの鮑、穴子や鰻のご飯、太巻きも (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。江戸前鮨のおまかせ。',
    notes: '[鮨・六本木、Sushi Yuu がプロデュースする気軽なおまかせ] 地下のカウンター10席と個室。店によれば「Sushi Zai」と星付きの「Sushi Yu」で修業した Kazuki Tahara が、小鉢6品、握り12貫、巻物1本の気軽なおまかせを16,500円、飲み放題付きで19,800円で出す。2026年の客は、シャリと混ぜて食べる鮑の肝ソース、蟹と雲丹とキャビアの手巻き、あん肝の名物「プリン巻き」を挙げる。シャリは小ぶりで赤酢が控えめ、はたなどは1週間熟成させる。サービス料はなく、持ち込み料も無料。大将たちは気さくで、気取らない雰囲気。夜は2部制、週末は昼も。火水休み。',
  });
}

// ================================================================ 鮨割烹3
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13306315/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'tokyo_sushi_kappou_3_roppongi', name: '鮨割烹3 (Sushi Kappou 3)', category: 'OMNI',
    lat: 35.663437, lng: 139.734606, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Nothing is called gluten-free; the chosen dishes include fried oysters, and nigiri are served with soy sauce (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi kaiseki of fish, oysters, abalone, duck and Yamagata beef.',
    hours_raw: 'Daily 17:00–23:00 (food last order 22:00, drinks 22:30); closed over New Year, Obon and Golden Week, with occasional other closures (Tabelog). Same-day bookings may be possible; contact the shop directly (Tabelog). 10% service charge. 14 seats: 8 at the counter and private rooms for 4 or 6 (room charge ¥6,000 for 3 or more). Non-smoking. Cards (VISA, Master, JCB, Diners, UnionPay); no e-money or QR. Children welcome (at the counter only if eating the same dishes as adults; infants in the private rooms). Smart casual.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Roppongi 3-8-7, チトセビル 1F, on Enma-zaka — 5 min from Roppongi Stn (Hibiya line), 7 min (Oedo line)',
    cuisine: 'Sushi kaiseki comparing aged and freshly prepared fish (Tabelog shop text) · courses (Tabelog, tax included): omakase of 4 seasonal dishes and 13 nigiri ¥8,800; "Three course", 20 dishes, the omakase plus three specialities you choose by QR code, ¥15,400; the same with two hours of all-you-can-drink incl. champagne ¥18,800 · specialities chosen in 2026: Akkeshi oysters raw, grilled or fried, abalone sashimi or grilled with butter, Yamagata beef sukiyaki or shabu-shabu, fugu · course dishes: mozuku, crab chawanmushi with ikura, roast duck with orange, crab-miso soup; nigiri on red-vinegar rice: chutoro, aori-ika, aji, tai, scallop, kanpachi, sawara, kohada, sea urchin, toro-taku and kanpyo rolls (September–October 2026) · sake and wine',
    website: null, gmaps: gm('鮨割烹3 六本木3-8-7'), menu_url: TB + 'dtlmenu/',
    notes: "[Sushi · Roppongi, a pick-your-specialities sushi kaiseki from the Miyake Akira team] A modern counter of eight with private rooms behind, a few doors from its sister restaurant Miyake Akira on Enma-zaka. The \"Three course\" (¥15,400) pairs an omakase of 13 nigiri on red-vinegared rice with three specialities you choose by QR code — Akkeshi oysters, abalone grilled with butter, Yamagata beef sukiyaki or shabu-shabu, fugu — and the menu sets aged fish against fresh. A simpler omakase is ¥8,800, and ¥18,800 adds two hours of drinks including champagne. Diners in 2026 call it outstanding value for Roppongi and the staff friendly; one noticed the chef reduced the rice on request. 10% service; smart casual.",
    chef_bio: { chef_name: null, roles: [], origin: 'Sister of Miyake Akira (tokyo_miyake_akira_roppongi)',
      background: 'The Tabelog text offers "three specialties by Teru Miyake", the chef of Miyake Akira (tokyo_miyake_akira_roppongi, at Roppongi 3-8-12), and both listings carry the same invoice registration number (T7010401152275). October 2026 reviewers call it Miyake Teru\'s sister restaurant; one adds that Teru Miyake was made a head chef at 21 and later led "Tsutaya Kinosato Kazato" and "Tenten Temari". The chefs at this counter are not named in the sources read.',
      philosophy: 'High-end sushi with appetizers, comparing aged and freshly prepared fish, by Japanese chefs (Tabelog shop text).', specialty: 'Three-speciality sushi kaiseki; aged vs fresh nigiri.',
      anecdotes: [
        { text: '"…noticed I wanted less rice and adjusted it accordingly." — October 2026, 17-dish omakase.', source: R + 'B536719801/' },
        { text: '"Instead of ordering the same dishes, we each picked our favorites, totaling six dishes by scanning a QR code." — October 2026, Three course ¥15,400.', source: R + 'B536857674/' },
        { text: '"I selected the fresh oysters from Akkeshi, grilled abalone with butter, and Yamagata beef sukiyaki." — September 2026.', source: R + 'B535740514/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 鮨割烹3、港区六本木3-8-7 チトセビル1F、日比谷線六本木駅から徒歩5分、大江戸線7分、毎日17:00〜23:00 (フードL.O.22:00、ドリンクL.O.22:30)、年末年始・お盆・GW休み、不定休あり、サービス料10%、14席 (カウンター8、個室2: 4名と6名)、個室料6,000円 (3名以上)、禁煙、カード可、スマートカジュアル、登録番号 T7010401152275 (三宅輝と同じ)。店の紹介: 熟成と活けの食べ比べの鮨懐石、三宅輝のスペシャリテ3品を選べる。コース: おまかせ (季節の4品と握り13貫) 8,800円、スリーコース20品15,400円、飲み放題付き18,800円。口コミ(2026年9月〜10月): Akkeshi の牡蠣、鮑のバター焼き、Yamagata の牛のすき焼きやしゃぶしゃぶ、蟹の茶碗蒸し、鴨とオレンジ、赤酢のシャリ、QR コードで選ぶ、三宅輝の姉妹店、シャリを少なめにしてくれた。',
      confidence: 'medium', sources: [TB, R + 'B535178263/', R + 'B535481548/', R + 'B535583660/', R + 'B535740514/', R + 'B536719801/', R + 'B536857674/', R + 'B537118999/', R + 'B537576777/', R + 'B537916904/', R + 'B538105734/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Specialities chosen by QR code; omakase at the counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木3-8-7 チトセビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.663437, 139.734606); GSI 東京都港区六本木三丁目8番 (lot) 28m; Miyake Akira (tokyo_miyake_akira_roppongi, 3-8-12) is 22 m away in another building; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course prices from Tabelog (tax included), plus 10% service.', last_checked: TODAY, items: [
      it('', '', 'Omakase: 4 seasonal dishes and 13 nigiri', '¥8,800', 'Course', 'ask', 'no', 'Tabelog "most popular".', 'omakase'),
      it('', '', 'Three course: omakase plus three chosen specialities, 20 dishes', '¥15,400', 'Course', 'ask', 'no', 'Tabelog.', 'three_course'),
      it('', '', 'Three course with two hours of all-you-can-drink', '¥18,800', 'Course', 'ask', 'no', 'Tabelog.', 'three_course_nomihodai'),
    ] }, {
    cuisine: '熟成と活けの魚を食べ比べる鮨懐石 (食べログの店の紹介)・コース (食べログ、税込み): 季節の4品と握り13貫のおまかせ8,800円、おまかせに好きなスペシャリテ3品を QR コードで選ぶスリーコース20品15,400円、シャンパンを含む2時間飲み放題付き18,800円・2026年に選ばれた一品: Akkeshi の牡蠣 (生、焼き、フライ)、鮑の刺身やバター焼き、Yamagata の牛のすき焼きやしゃぶしゃぶ、ふぐ・コースの料理: もずく、いくらをのせた蟹の茶碗蒸し、オレンジを添えた鴨のロースト、蟹味噌の味噌汁。赤酢のシャリの握り: 中トロ、アオリイカ、鯵、鯛、帆立、勘八、鰆、小肌、雲丹、トロたくとかんぴょう巻き (2026年9〜10月)・日本酒とワイン',
    neighborhood: '六本木3-8-7 チトセビル1F、Enma-zaka。六本木駅から徒歩5分 (日比谷線)、7分 (大江戸線)',
    gf_detail: '要確認。グルテンフリーの説明はない。選べる一品にはカキフライもあり、握りは醤油で (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚、牡蠣、鮑、鴨、Yamagata の牛の鮨懐石。',
    notes: '[鮨・六本木、三宅輝のチームの、好きな一品を選ぶ鮨懐石] Enma-zaka の、姉妹店の三宅輝から数軒先にあるモダンなカウンター8席と奥の個室。スリーコース (15,400円) は赤酢のシャリの握り13貫のおまかせに、QR コードで選ぶ3品のスペシャリテ (Akkeshi の牡蠣、鮑のバター焼き、Yamagata の牛のすき焼きやしゃぶしゃぶ、ふぐなど) が付き、熟成魚と活けの魚を食べ比べられる。シンプルなおまかせは8,800円、シャンパンを含む2時間飲み放題付きは18,800円。2026年の客は六本木にしては破格と書き、スタッフは気さく。シャリを少なめにしてくれたという客も。サービス料10%、スマートカジュアル。',
  });
}

// ================================================================ WAGYU SUKIYAKI 極 六本木
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13313003/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://goku-roppongi.com';
  const H = day(['11:00', '23:00']);
  put({
    id: 'tokyo_wagyu_sukiyaki_goku_roppongi', name: 'WAGYU SUKIYAKI 極 六本木 (WAGYU SUKIYAKI Goku Roppongi)', category: 'OMNI',
    lat: 35.664565, lng: 139.731773, cuisine_type: 'sukiyaki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The sukiyaki is simmered in a sweet-and-savoury sauce whose ingredients are not given; nothing is called gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: wagyu sukiyaki with raw egg; miso soup comes with the set.',
    hours_raw: 'Daily 11:00–23:00 (food last order 22:15); no regular holiday (Tabelog). Bookings taken; a Sunday 19:30 walk-in got in without waiting (October 2026). 11 counter seats, each with its own IH pot; staff cook the first slice for you. Non-smoking. Cards and IC/e-money; no QR. English menu with instructions; English-speaking staff (September–October 2026). Opened 19 September 2025 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Roppongi 4-12-4, Artscape Roppongi 1F, near Tokyo Midtown — 1–2 min from Roppongi Stn exit 7',
    cuisine: 'A5 wagyu sukiyaki in individual pots, finished with a truffle tamago-kake-gohan (Tabelog shop text) · sets (2026 reviews): a ¥7,800 course with 250 g of wagyu (October 2026); domestic A5 wagyu 250 g set of strip loin (October 2026); 150 g set of ribeye and sirloin; Wagyu Premium Set of four cuts — strip loin, ribeye (spencer roll), round and chuck; all with vegetables, tofu stamped with 極, egg, and free refills of rice, miso soup and egg · A5 Kumamoto / Amakusa black beef (reviews) · truffle TKG with truffle salt, truffle oil and fresh-shaved truffle · Japanese whisky',
    website: SITE, gmaps: gm('WAGYU SUKIYAKI 極 六本木'), menu_url: TB + 'dtlmenu/',
    notes: "[Sukiyaki · Roppongi, A5 wagyu sukiyaki for one] An eleven-seat counter by Roppongi Station and Midtown where every seat has its own induction pot: a server cooks the first slice of A5 wagyu, then you simmer the rest in a sweet-and-savoury sauce, dip it in raw egg and eat it with rice, miso soup and egg that are refilled free. Sets run from a 150 g ribeye-and-sirloin set to a four-cut premium set (strip loin, ribeye, round, chuck) or 250 g of strip loin; one diner's course with 250 g of wagyu was ¥7,800, and every meal ends with a tamago-kake-gohan perfumed with freshly shaved truffle. Open all day, 11 am to 11 pm, with an English menu that explains how to eat it; reviewers in 2026 found the staff attentive and the place popular with international guests.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened 19 September 2025 (Tabelog). The shop says its Japanese whiskies are popular with international guests (Tabelog shop text). Reviewers name the beef as A5 Kumamoto wagyu (August 2026) and A5 Amakusa black beef (September 2026). No one is named in the sources read.',
      philosophy: 'Self-cooked A5 wagyu sirloin sukiyaki in individual pots, in a casual setting (Tabelog shop text).', specialty: 'A5 wagyu sukiyaki; truffle TKG.',
      anecdotes: [
        { text: '"The staff shaved fresh truffles right in front of me, releasing a delightful aroma…" — October 2026, Wagyu Premium Set.', source: R + 'B523546726/' },
        { text: '"The English menu includes instructions on how to enjoy Sukiyaki and the truffle egg over rice, making it accessible even for those unfamiliar with Japanese cuisine." — September 2026.', source: R + 'B534808597/' },
        { text: '"The tofu is impressively stamped with the character for "Goku," the restaurant\'s name." — October 2026, 250 g set.', source: R + 'B537465845/' },
      ],
      japanese_sources_summary: '食べログ: WAGYU SUKIYAKI 極 六本木、港区六本木4-12-4 Artscape Roppongi 1F、駅近、毎日11:00〜23:00 (フードL.O.22:15)、定休日なし、11席 (カウンター)、禁煙、カード・電子マネー可、2025年9月19日オープン。店の紹介: 一人鍋で自分で焼くA5和牛サーロインのすき焼き、厳選した野菜と卵、締めはトリュフの卵かけご飯、海外の客に人気のジャパニーズウイスキー。口コミ(2026年8月〜10月): Kumamoto のA5和牛、Amakusa の黒毛和牛、WAGYU プレミアムセット (サーロイン、リブロース、もも、肩ロース)、150gセット、250gセット、和牛250gのコース7,800円、ご飯・味噌汁・卵はおかわり自由、最初の一枚はスタッフが焼く、「極」の焼印の豆腐、英語の食べ方の説明。',
      confidence: 'medium', sources: [TB, SITE, R + 'B523546726/', R + 'B531266827/', R + 'B532824339/', R + 'B534808597/', R + 'B536069867/', R + 'B536125172/', R + 'B536610718/', R + 'B537465845/', R + 'B537865325/', R + 'B538239020/'] },
    cultural_comfort: { level: 'english', note: 'English menu with how-to instructions and English-speaking staff (September–October 2026 reviews).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木4-12-4 Artscape Roppongi 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.664565, 139.731773); GSI 東京都港区六本木四丁目12番 (lot) 24m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537865325/'],
    price_note: 'Only one set price appears in the sources read (October 2026).', last_checked: TODAY, items: [
      it('', '', 'Course with 250 g of wagyu sukiyaki', '¥7,800', 'Sukiyaki', 'ask', 'no', 'October 2026 review.', 'set_250g'),
      it('', '', 'Wagyu Premium Set (strip loin, ribeye, round, chuck)', '', 'Sukiyaki', 'ask', 'no', 'August–October 2026 reviews.', 'premium_set'),
    ] }, {
    cuisine: '一人鍋のA5和牛のすき焼き、締めはトリュフの卵かけご飯 (食べログの店の紹介)・セット (2026年の口コミ): 和牛250gのコース7,800円、国産A5和牛サーロイン250gセット (2026年10月)、リブロースとサーロインの150gセット、サーロイン、リブロース、もも、肩ロースの4種の WAGYU プレミアムセット。どれも野菜、「極」の焼印の豆腐、卵付きで、ご飯、味噌汁、卵はおかわり自由・Kumamoto や Amakusa のA5黒毛和牛 (口コミ)・トリュフ塩、トリュフオイル、削りたてのトリュフの卵かけご飯・ジャパニーズウイスキー',
    neighborhood: '六本木4-12-4 Artscape Roppongi 1F、Tokyo Midtown のそば。六本木駅7番出口から1〜2分',
    gf_detail: '要確認。すき焼きは甘辛いたれで煮るが、たれの材料は書かれていない。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガン不可。和牛のすき焼きと生卵で、セットに味噌汁が付く。',
    notes: '[すき焼き・六本木、一人鍋のA5和牛すき焼き] 六本木駅と Midtown のそば、11席のカウンターで一人ずつ IH の鍋が付く。最初の一枚はスタッフが焼き、あとは甘辛いたれで自分で煮て、生卵にくぐらせ、おかわり自由のご飯、味噌汁、卵と一緒に。セットはリブロースとサーロインの150gから、4部位 (サーロイン、リブロース、もも、肩ロース) のプレミアムセット、サーロイン250gまで。和牛250gのコースが7,800円だったという客も。締めはいつも削りたてのトリュフが香る卵かけご飯。朝11時から夜11時まで通しで営業し、英語のメニューには食べ方の説明もある。2026年の客はスタッフが丁寧と書き、海外の客にも人気。',
  });
}

// ================================================================ 銀座蕎麦うどんしら石 六本木店
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13306025/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://soba-shiraishi.j-silver.co.jp/';
  const ALL = day(['00:00', '23:59']);
  put({
    id: 'tokyo_ginza_soba_udon_shiraishi_roppongi', name: '銀座蕎麦うどんしら石 六本木店 (Ginza Soba Udon Shiraishi Roppongi)', category: 'OMNI',
    lat: 35.662313, lng: 139.732367, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the soba is hachiwari — 80% buckwheat and 20% wheat flour (official site) — and the udon is wheat; the dipping sauces are soy-based.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi-based tsuyu and broths, with toppings such as beef tendon, duck, salmon roe and bonito flakes at the table.',
    hours_raw: 'Tabelog: Tue–Sat open 24 hours; Mon 06:00–24:00; Sundays and holidays 00:00–23:00, reopening 06:00 the next business day. The official site gives Tue–Sat 24 hours, Sun 0:00–15:00 and Mon 6:00–24:00, so Sunday closing differs; the hours here follow Tabelog and are marked irregular. No reservations. Order from photos on the wall and a touch-screen machine (October 2026). Tabelog lists no cards, e-money or QR, though a September 2026 diner paid cashless. 20 seats: 12 at a counter, 2 tables and 5 terrace seats. Non-smoking. Menu in English, Simplified Chinese and Korean; allergy information available (Tabelog). Halal-certified by the Japan Halal Certification Promotion Organization (JHCPO) (official site). Opened 15 February 2025 (Tabelog).',
    hours: { 0: day(['06:00', '23:59']), 1: ALL, 2: ALL, 3: ALL, 4: ALL, 5: ALL, 6: day(['00:00', '23:00']) }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: true, open_late: true },
    neighborhood: 'Roppongi 6-7-8, アパホテル六本木駅前 1F, past FamilyMart from Roppongi Stn exit 3 — about 1 min (Hibiya / Oedo lines)',
    cuisine: 'Soba and udon around the clock: hachiwari soba (80% buckwheat) from Shinshu-grown buckwheat, under the full supervision of 山根店長 of the Matsudo soba shop 「たぬきときつね」 (official site; June 2026); long, chewy udon served with scissors (2026 reviews) · menu (official site): しら石蕎麦, chilled tanuki soba, neba-neba soba, ume-oroshi soba, mori soba, Kyoto duck soba (nanban or zaru), salmon, sweet-shrimp, tendon and negitoro rice bowls, niku-sui, two breakfast sets · in 2026 reviews: thick bukkake inaka soba with sweet-savoury fried tofu, green onion, tempura bits, egg yolk and shiso; tororo-kombu soba; mentaiko udon, carbonara mentaiko udon, beef-tendon kamatama udon, curry udon; walnut-sauce soba with coriander; negitoro bowl set ¥600 or ¥800 alone (October 2026); free wasabi, spicy miso, bonito flakes and nori at the table',
    website: SITE, gmaps: gm('銀座蕎麦うどんしら石 六本木店'), menu_url: SITE,
    notes: "[Soba · Roppongi, 24-hour halal-certified soba and udon] On the ground floor of the APA Hotel a minute from Roppongi Station, a 20-seat soba and udon shop with a terrace that stays open around the clock from Tuesday to Saturday. The official site says its menu is halal-certified by the Japan Halal Certification Promotion Organization (JHCPO), and its soba is hachiwari — 80% Shinshu buckwheat, 20% wheat — made under the supervision of 山根店長 of the Matsudo soba shop たぬきときつね. Order from photos and a touch screen: thick bukkake inaka soba with sweet fried tofu and egg yolk, sticky neba-neba soba, duck soba, chewy udon (long enough that scissors are provided), and rice bowls from ¥600 in a set. Reviewers in 2026 come at lunch and after a night out and find the soba firm and the sauce strong; many guests are from overseas. A second shop opened in Ginza 8-chome in 2025.",
    chef_bio: { chef_name: null, roles: [], origin: 'Roppongi shop of 銀座蕎麦うどんしら石 (a second shop in Ginza 8-chome since 2025, per the official site)',
      background: 'Per the official site: the soba is made under the full supervision of 山根店長 of 「たぬきときつね」, a well-known soba shop in Matsudo, Chiba; the menu received halal certification from the Japan Halal Certification Promotion Organization (JHCPO), which the site says examines ingredients, preparation and management against Islamic law; the operator page lists 株式会社KIRIKO, part of J.Group, whose companies include Assets name Innovation株式会社 (its domain hosts the site of 大阪つけ麺しら石, osaka_tsukemen_shiraishi_namba) and フードテクノロジー株式会社, described as the franchise-support company for a nationwide rollout of the しら石 brand. Opened 15 February 2025 (Tabelog). Included in the sweep by Greg\'s decision of 2026-11-02 after an earlier chain skip.',
      philosophy: 'Beautiful noodle strands and generous toppings, joining tradition and modern taste (official site).', specialty: 'Hachiwari soba; halal-certified soba and udon, 24 hours.',
      anecdotes: [
        { text: '"The Shinshu-produced 80% buckwheat soba has a firm texture and an excellent mouthfeel." — June 2026, regular.', source: R + 'B526484399/' },
        { text: '"The noodles are long, so … scissors, although I didn’t use them. There were many international guests, and everyone was skillfully using chopsticks." — September 2026, mentaiko udon.', source: R + 'B528837877/' },
        { text: '"The dipping sauce for the udon is kept hot with solid fuel… The set with negitoro rice bowl is JPY 600, and even a la carte is a bargain at JPY 800." — October 2026.', source: R + 'B537773691/' },
      ],
      japanese_sources_summary: '公式サイト (soba-shiraishi.j-silver.co.jp): 銀座蕎麦うどんしら石 六本木店、本格的な蕎麦とうどんの専門店、厳選された八割蕎麦 (蕎麦粉8割、小麦粉2割)、千葉県松戸市の蕎麦の名店「たぬきときつね」山根店長の全面監修、信州産蕎麦、テラス席、2025年8月5日に銀座8丁目に2号店 (銀座店)。お品書き: しら石蕎麦、冷やしたぬき蕎麦、ねばねば蕎麦、梅おろし蕎麦、盛り蕎麦、京鴨蕎麦 (南蛮・ざる)、サーモン丼、甘エビ丼、天丼、ネギトロ丼、肉吸い、朝食セット。Japan Halal Certification Promotion Organization (JHCPO) よりメニューがハラル認証を正式に取得、ムスリムのお客様にも安心。営業: 火曜〜土曜24時間、日曜0時〜15時、月曜6時〜0時。運営会社: 株式会社KIRIKO (J.Group)。食べログ: 港区六本木6-7-8 アパホテル六本木駅前1F、六本木駅3番出口、ファミリーマートを過ぎて20秒、火〜土24時間、月6:00〜24:00、日祝0:00〜23:00、予約不可、20席 (カウンター12、テーブル2、テラス5)、禁煙、英語・中国語・韓国語のメニュー、アレルギー表示あり、2025年2月15日オープン。口コミ(2026年4月〜10月): 信州産の八割蕎麦、明太子うどん、とろろ昆布蕎麦、ねばねば、牛すじ釜玉うどん、カレーうどん、ぶっかけ田舎蕎麦、ネギトロ丼セット600円、うどんは長くはさみ付き、海外の客が多い。',
      confidence: 'medium', sources: [TB, SITE, SITE + '?page_id=247', R + 'B526484399/', R + 'B528837877/', R + 'B535509286/', R + 'B536396207/', R + 'B537111512/', R + 'B537236699/', R + 'B537338096/', R + 'B537504393/', R + 'B537773691/', R + 'B538405008/'] },
    cultural_comfort: { level: 'english', note: 'Menu in English, Simplified Chinese and Korean with photos; touch-screen ordering; many overseas guests (2026 reviews).' },
    safety: { ...SAFETY0, positives: [{ text: 'Official site: the menu is halal-certified by the Japan Halal Certification Promotion Organization (JHCPO), which examines ingredients, preparation and management.', source: SITE }] },
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木6-7-8 アパホテル六本木駅前 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and official site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.662313, 139.732367); GSI 東京都港区六本木六丁目7番 (lot) 35m; Hyoki (tokyo_hyoki_roppongi, 6-7-7) is 27 m away in another building; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [SITE, R + 'B537773691/'],
    price_note: 'The official menu shows dishes without prices; the negitoro bowl prices are from an October 2026 review.', last_checked: TODAY, items: [
      it('しら石蕎麦', '', 'Shiraishi soba (house soba)', '', 'Soba', 'no', 'no', 'Official site; hachiwari soba (20% wheat).', 'shiraishi_soba'),
      it('京鴨蕎麦（南蛮）', '', 'Kyoto duck soba (nanban)', '', 'Soba', 'no', 'no', 'Official site.', 'kamo_nanban'),
      it('ねばねば蕎麦', '', 'Neba-neba (sticky) soba', '', 'Soba', 'no', 'no', 'Official site.', 'nebaneba'),
      it('ネギトロ丼', '', 'Negitoro rice bowl (set with noodles)', '¥600', 'Rice bowls', 'ask', 'no', 'October 2026 review; ¥800 on its own.', 'negitoro_don'),
    ] }, {
    cuisine: '24時間の蕎麦とうどん。信州産の蕎麦の八割蕎麦 (蕎麦粉8割) で、松戸の蕎麦の名店「たぬきときつね」山根店長の全面監修 (公式サイト、2026年6月)。うどんは長くもちもちで、はさみが付く (2026年の口コミ)・メニュー (公式サイト): しら石蕎麦、冷やしたぬき蕎麦、ねばねば蕎麦、梅おろし蕎麦、盛り蕎麦、京鴨蕎麦 (南蛮、ざる)、サーモン丼、甘エビ丼、天丼、ネギトロ丼、肉吸い、朝食セット2種・2026年の口コミ: 甘辛い油揚げ、ねぎ、天かす、卵黄、大葉の太いぶっかけ田舎蕎麦、とろろ昆布蕎麦、明太子うどん、明太子カルボナーラうどん、牛すじ釜玉うどん、カレーうどん、パクチーの胡桃だれ蕎麦。ネギトロ丼はセットで600円、単品800円 (2026年10月)。卓上のわさび、辛味噌、かつお節、刻み海苔は使い放題',
    neighborhood: '六本木6-7-8 アパホテル六本木駅前1F、六本木駅3番出口からファミリーマートを過ぎてすぐ (日比谷線・大江戸線)',
    gf_detail: 'グルテンフリー不可。蕎麦は八割蕎麦で小麦粉が2割 (公式サイト)、うどんは小麦。つゆは醤油ベース。',
    vegan_detail: 'ヴィーガン不可。出汁のつゆやスープで、牛すじ、鴨、いくら、卓上のかつお節なども。',
    notes: '[蕎麦・六本木、24時間営業のハラル認証の蕎麦とうどん] 六本木駅から1分、アパホテルの1階にあるテラス付き20席の蕎麦とうどんの店で、火曜から土曜は24時間営業。公式サイトによればメニューは Japan Halal Certification Promotion Organization (JHCPO) のハラル認証を取得し、蕎麦は信州産の蕎麦粉8割、小麦粉2割の八割蕎麦で、松戸の蕎麦店「たぬきときつね」の山根店長が監修。注文は壁の写真とタッチパネルで、甘辛い油揚げと卵黄のぶっかけ田舎蕎麦、ねばねば蕎麦、鴨の蕎麦、はさみが付くほど長いもちもちのうどん、セットなら600円からの丼も。2026年の口コミでは昼や飲んだ帰りに来る客が多く、蕎麦はしっかり、つゆは濃いめとの声。海外の客も多い。2025年に銀座8丁目に2号店ができた。',
  });
}

save();
