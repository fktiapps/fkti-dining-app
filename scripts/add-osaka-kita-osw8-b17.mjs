// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), NOTABLE phase, circle shin-osaka; worker osw8 (lane: Tabelog id odd), batch 17.
//   + 焼肉 朋苑 Yakiniku Houen (offal-led yakiniku by Nishinakajima-Minamigata since 1994; Tabelog Yakiniku 100 2021 and 2024)
//   + 元祖大阪梅田ミックスジュース エキマルシェ新大阪ソトエ店 Ganso Osaka Umeda Mix Juice, Shin-Osaka (the 1969 Umeda mix-juice stand's station shop)
//   + 旬彩 つむぎ Shunsai Tsumugi (seasonal Japanese izakaya with a sake list, open to midnight, near Nishinakajima-Minamigata)
//   + デリチュース エキマルシェ新大阪店 Delicious, Shin-Osaka (the Minoh cheesecake maker's take-away shop inside the station)
//   - skipped 大衆肉酒場 こだわり米 匠 27068763: chain by count; 株式会社匠 runs at least six restaurants in Nishinakajima (焼肉匠 本店, 大衆肉酒場
//     こだわり米匠, 個室焼肉匠, ニュー焼肉食堂匠, 黒毛和牛研究所, 豆皿おばんざい匠) plus a farm and mail order (takumi.farm, read 2026-11-02).
//     They are different concepts under one company; flagged in case the group should count as sister brands instead. 個室焼肉匠 27092725
//     (odd, this lane) is the same group.
//   - skipped 但馬屋 東三国 27005011: chain; operated by 株式会社牛心, 9 shops in Osaka and 1 in Tokyo per its press release (web search 2026-11-02).
//   Shop counts for the two station shops drafted:
//   - 元祖大阪梅田ミックスジュース: four shops, 本店 (大阪駅前地下街), this Shin-Osaka shop, なんば店 and 天王寺ミオ店, per a 2025 article (web search
//     2026-11-02); the 本店 is not in data or in the sweep list. 4 or fewer, so drafted; flagged that the 1969 本店 would be the better entry if it
//     is ever swept.
//   - デリチュース: 箕面本店 plus three take-away shops at stations (JR大阪, this one, 大丸心斎橋), per two articles (web search 2026-11-02). Four, drafted.
//   None is in data/osaka.json (grep by id, name and address, 2026-11-02). Tsumugi (西中島4-5-20) is 17–25 m from two records at 4-5-22 (another
//   building); the two station shops sit 65 m and 133 m from the GSI point for the whole station block, so the Tabelog points are kept.
//   open_late per the brief: Tsumugi to 24:00 set true; Houen 23:30 my judgement false; the two station shops 21:30 false.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw8-17');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27068763', 'chain by count: 株式会社匠 runs at least 6 restaurants in Nishinakajima (takumi.farm, read 2026-11-02); flagged as possible sister brands');
skip('27005011', 'chain: 但馬屋 (株式会社牛心), 9 shops in Osaka and 1 in Tokyo per press release, web search 2026-11-02');

// ================================================================ 焼肉 朋苑
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27004369/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.hou-en.jp/';
  const H = day(['17:00', '23:30']);
  put({
    id: 'osaka_yakiniku_houen_nishinakajima', name: '焼肉 朋苑 (Yakiniku Houen)', category: 'OMNI',
    lat: 34.725474, lng: 135.498232, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: secret sauces and marinades on the meat; cold noodles to finish. Salt-grilled tongue and offal exist, but no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a beef and offal yakiniku house.',
    hours_raw: 'Mon–Sat 17:00–23:30 (last order 22:30); closed Sunday and over New Year; open as usual in Golden Week; ask about Obon (Tabelog; shop site). Lunch ended on 31 March 2026 (Tabelog; site). Reservations accepted (Tabelog). Cards, e-money and QR (d Barai and others) (Tabelog). 32 seats: 6 at the counter and 26 at tables, up to 36 reserved; a semi-private room for up to 12; private hire 20–50; non-smoking since April 2020 (Tabelog). Gas grills, not smokeless; bags provided for coats (2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '西中島2-15-12 カジサンビル 1F, a short walk from the south gate (exit 2) of Nishinakajima-Minamigata, 3 min from Hankyu Minamikata, at the corner of Shin-Midosuji and the Hankyu line (Tabelog; December 2025)',
    cuisine: 'Yakiniku with a name for offal (Tabelog; shop site) · offal bought from a different supplier for each cut, with its own cutting (Tabelog); assorted four-cut offal platter, the house starter; top mino (site) · thick-cut tongue and salt tongue; premium and salt-grilled harami; harami with green onion; jaw meat; kalbi; marushin, hiuchi and sirloin cap; white omasum sashimi (2025–2026) · carefully chosen lean cuts and house sauces (Tabelog) · courses: ¥5,000 with a drink; ¥6,000 with all-you-can-drink (Tabelog; 2026) · solo yakiniku with a quick drink, ¥2,300; counter seats (Tabelog) · kimchi, namul, bean sprouts, soup, cold noodles (2025–2026) · a wide wine list as well as sake, shochu and fruit liquors (site; 2024–2026) · lunch sets (lean meat or mixed, about ¥1,500) ended in March 2026',
    website: SITE, gmaps: gm('焼肉 朋苑 西中島'), menu_url: null,
    notes: '[Yakiniku · Nishinakajima-Minamigata, a 1994 offal specialist by the station] A 32-seat yakiniku house a minute from Nishinakajima-Minamigata, open since 1994 and twice in Tabelog’s Yakiniku 100 (2021, 2024). Offal comes from a different supplier for each cut and is trimmed in-house: start with the four-cut horumon platter, then thick tongue, salt-grilled harami and the harami with green onion that regulars reorder (2025–2026). Lean cuts and kalbi with house sauces, a long wine list, and courses from ¥5,000. Counter seats for solo diners; gas grills, so expect smoky clothes. Dinner only since April 2026; closed Sundays.',
    chef_bio: { chef_name: null, roles: ['Owner and staff (unnamed)'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: "Founded in 1994, we source our horumon from different suppliers for each cut, ensuring deliciousness through our unique routes and original cutting techniques"; selected lean meats and secret sauces; 32 years in business in 2026; Tabelog Yakiniku WEST 100 in 2021 and 2024. Per the shop site (hou-en.jp, read 2026-11-02): "Famous Yakiniku restaurant for over 20 years"; the top mino owes its popularity to repeated work on the cutting; lunch ended 31 March 2026. Per reviews: "The service was attentive" (December 2025); "[the shop provides] bags for outerwear and bags" against the smoke (February 2026); one diner found the thick tongue tough and the value poor (December 2025).',
      philosophy: 'Each offal cut from its own supplier, with original cutting (Tabelog).', specialty: 'Offal platter; thick-cut tongue; harami with green onion.',
      anecdotes: [
        { text: '"Typically, outside skirt is not served with salt due to its strong flavor, but here it was free of any unpleasant odors." — June 2026, salt-grilled harami.', source: R + 'B491357278/' },
        { text: '"The omasum sashimi is exceptionally white, which is quite rare." — February 2026.', source: R + 'B500848016/' },
        { text: '"The Green Onion Skirt was irresistible! I couldn’t help but order a second serving." — December 2025.', source: R + 'B502212550/' },
      ],
      japanese_sources_summary: '店のサイト (hou-en.jp): 大阪「新大阪/西中島」の老舗焼肉 朋苑 (ほうえん)、大阪市淀川区西中島2-15-12 カジサンビル 1F、17:00〜23:30 (L.O.22:30)、日曜休み、ランチは2026年3月31日で終了、ホルモン4種盛、カットを工夫した上ミノ、ワイン・日本酒・焼酎・果実酒、半個室。食べログ (店舗会員): 焼肉・ホルモン、西中島南方駅南改札2番出口すぐ、阪急南方駅から3分、年末年始休み、予約可、カード・電子マネー・QR 可、32席 (カウンター6、テーブル26)、貸切20〜50名、禁煙、1994年創業で32年、ホルモンは部位ごとに仕入れ先を変えて独自のカット、赤身と秘伝のたれ、宴会は1ドリンクつき5,000円、ひとり焼肉と軽い一杯のセット2,300円、焼肉 WEST 百名店 2021・2024。口コミ (2023年〜2026年8月): 厚切りタン、上塩タン、上ハラミ、ハラミの塩、ねぎハラミ、tsurami、カルビ、marushin、hiuchi、白いセンマイ刺し、ホルモン盛り、飲み放題つきコース6,000円、ガスの焼き台で煙が残る、上着を入れる袋。',
      confidence: 'medium', sources: [SITE, TB, R + 'B461438829/', R + 'B491357278/', R + 'B500848016/', R + 'B502212550/', R + 'B520199257/', R + 'B520458332/', R + 'B522870552/', R + 'B523804658/', R + 'B534694759/', R + 'B536507447/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Menu with pictures (April 2026); counter seats for solo diners (Tabelog). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島2-15-12 カジサンビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop site and shop-maintained Tabelog listing with a 2026 notice; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島二丁目15番12号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B461438829/'],
    price_note: 'Course and set prices from the Tabelog listing and 2026 reviews.', last_checked: TODAY, items: [
      it('ホルモン4種盛', '', 'Assorted four-cut offal platter', '', 'Offal', 'no', 'no', 'Shop site.', 'horumon_4shu'),
      it('', '', 'Banquet course with one drink', '¥5,000', 'Courses', 'no', 'no', 'Tabelog.', 'course_5000'),
      it('', '', 'Course with all-you-can-drink', '¥6,000', 'Courses', 'no', 'no', 'January 2026.', 'nomihodai_course'),
      it('', '', 'Solo yakiniku and quick-drink set', '¥2,300', 'Sets', 'no', 'no', 'Tabelog.', 'solo_set'),
    ] }, {
    cuisine: 'ホルモンで知られる焼肉 (食べログ、店のサイト)・ホルモンは部位ごとに仕入れ先を変え、独自のカット (食べログ)。店のおすすめはホルモン4種盛、上ミノ (店のサイト)・厚切りタンと塩タン。上ハラミ、ハラミの塩焼き、ねぎハラミ、tsurami、カルビ、marushin、hiuchi。白いセンマイ刺し (2025〜2026年)・選んだ赤身と秘伝のたれ (食べログ)・コース: 1ドリンクつき5,000円。飲み放題つき6,000円 (食べログ、2026年)・ひとり焼肉と軽い一杯のセット2,300円。カウンター席 (食べログ)・キムチ、ナムル、もやし、スープ、冷麺 (2025〜2026年)・ワインが豊富で、日本酒、焼酎、果実酒も (店のサイト、2024〜2026年)・昼の定食 (赤身やミックス、約1,500円) は2026年3月で終了',
    neighborhood: '西中島2-15-12 カジサンビル 1F、西中島南方駅の南改札2番出口からすぐ、阪急南方駅から3分、新御堂筋と阪急の線路が交わる角 (食べログ、2025年12月)',
    gf_detail: 'グルテンフリーではありません。肉には秘伝のたれやもみだれ、締めに冷麺。塩のタンやホルモンもあるが、グルテンの情報はなし。',
    vegan_detail: 'ヴィーガンではありません。牛肉とホルモンの焼肉店。',
    notes: '[焼肉・西中島南方、駅前の1994年からのホルモンの名店] 西中島南方駅からすぐ、32席の焼肉店で、1994年から。食べログの焼肉百名店に2度 (2021年、2024年)。ホルモンは部位ごとに仕入れ先を変え、店でカットする: まずはホルモン4種盛、それから厚切りタン、ハラミの塩、常連がおかわりするねぎハラミ (2025〜2026年)。赤身やカルビを秘伝のたれで、ワインも豊富、コースは5,000円から。ひとりでもカウンター席で。ガスの焼き台なので服ににおいが残る。2026年4月からは夜のみ。日曜休み。',
  });
}

// ================================================================ 元祖大阪梅田ミックスジュース エキマルシェ新大阪ソトエ店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27136505/'; const R = TB + 'dtlrvwlst/';
  const H = day(['09:00', '21:30']);
  put({
    id: 'osaka_ganso_umeda_mix_juice_shin_osaka', name: '元祖大阪梅田ミックスジュース エキマルシェ新大阪ソトエ店 (Ganso Osaka Umeda Mix Juice, Shin-Osaka)', category: 'OMNI',
    lat: 34.733478, lng: 135.501284, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Fruit, milk and crushed-ice juices; no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the mix juice is made with milk (2026).',
    hours_raw: 'Daily 9:00–21:30 (Tabelog; 2026). Cards, e-money and PayPay (Tabelog). A stand with no seats; take-away cups, S without a lid, M and larger with lids (Tabelog; 2026). Outside the ticket gates of JR Shin-Osaka, near the Shinkansen exit (2026). Opened 12 June 2023 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: '西中島5-16-1 JR東海新大阪駅 3F, outside the ticket gates of Shin-Osaka Station (Tabelog; October 2026)',
    cuisine: 'Mix juice stand (Tabelog) · the original mix juice of banana, mandarin and other fruit with milk and finely crushed ice, thick enough for the straw to stand (2026) · S ¥250, M ¥370, larger and "mega" sizes (2026) · seasonal flavours: blueberry, peach, white grape (2026) · other drinks besides mix juice (October 2026)',
    website: null, gmaps: gm('元祖大阪梅田ミックスジュース 新大阪'), menu_url: null,
    notes: '[Juice stand · Shin-Osaka Station, Osaka’s 1969 mix juice by the Shinkansen gates] The Shin-Osaka outpost of the Umeda mix-juice stand founded in 1969, just outside the station ticket gates and a favourite last stop before the Shinkansen (2026). The original blends banana, mandarin and other fruit with milk and crushed ice into a frosty, thick drink that tastes of every fruit at once; S ¥250, M ¥370 (2026), with seasonal blueberry, peach or white grape. Only M and larger come with a lid. Open daily 9:00–21:30; cards and PayPay.',
    chef_bio: { chef_name: null, roles: ['Stand staff (unnamed)'], origin: null,
      background: 'Per Tabelog: a juice stand; opened 12 June 2023. Per reviews: "Founded in 1969, the Umeda main store is a renowned establishment" (October 2026); one of four shops with the Umeda main shop, Namba and Tennoji Mio (a 2025 article, web search 2026-11-02); "The juices are generally pre-made in blenders, but [the staff] spin the blender each time [an order is poured]" (September 2026); "[the staff] fill the cup right to the brim" (October 2026).',
      philosophy: null, specialty: 'Original mix juice.',
      anecdotes: [
        { text: '"The creamy sweetness of banana and the pleasant acidity of mandarin orange burst in my mouth. With its fluffy and icy texture, it feels like a drinkable dessert." — October 2026.', source: R + 'B538403279/' },
        { text: '"Rich and thick, the straw stands upright!" — October 2026.', source: R + 'B537272897/' },
        { text: '"When I get to Shin-Osaka, I first head to Ganso Osaka Umeda Mix Juice." — September 2026, a fifth visit.', source: R + 'B496498197/' },
      ],
      japanese_sources_summary: '食べログ: 元祖大阪梅田ミックスジュース エキマルシェ新大阪ソトエ店、ジューススタンド、大阪市淀川区西中島5-16-1 JR東海新大阪駅 3F、毎日9:00〜21:30、カード・電子マネー・PayPay 可、2023年6月12日オープン。口コミ (2026年): 梅田の本店は1969年創業、新大阪駅の改札の外、新幹線の前に寄る人が多い、S 250円、M 370円、メガサイズも、バナナとみかんの甘さと酸味、細かい氷、ストローが立つほど濃い、ブルーベリー、桃、白ぶどうの季節もの、M 以上はふたつき、注ぐたびにミキサーを回す、カップのふちまでたっぷり。',
      confidence: 'medium', sources: [TB, R + 'B496498197/', R + 'B533175593/', R + 'B535771244/', R + 'B536499289/', R + 'B536828903/', R + 'B537150516/', R + 'B537272897/', R + 'B538403279/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Point-and-order stand with sizes S, M and L (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島5-16-1 JR東海新大阪駅 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; GSI 大阪府大阪市淀川区西中島五丁目16番1号 (go) 65m, the station block; Tabelog point kept for the stand; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B533175593/', R + 'B537150516/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('ミックスジュース S', '', 'Mix juice, small (no lid)', '¥250', 'Mix juice', 'ask', 'no', 'October 2026.', 'mix_juice_s'),
      it('ミックスジュース M', '', 'Mix juice, medium (with lid)', '¥370', 'Mix juice', 'ask', 'no', 'October 2026.', 'mix_juice_m'),
    ] }, {
    cuisine: 'ミックスジュースのスタンド (食べログ)・元祖のミックスジュースは、バナナ、みかんなどの果物に牛乳と細かく砕いた氷で、ストローが立つほど濃い (2026年)・S 250円、M 370円、もっと大きいサイズやメガサイズも (2026年)・季節の味: ブルーベリー、桃、白ぶどう (2026年)・ミックスジュースのほかの飲み物も (2026年10月)',
    neighborhood: '西中島5-16-1 JR東海新大阪駅 3F、新大阪駅の改札の外 (食べログ、2026年10月)',
    gf_detail: '要確認。果物、牛乳、氷のジュース。グルテンの情報はなし。',
    vegan_detail: 'ヴィーガンではありません。ミックスジュースには牛乳 (2026年)。',
    notes: '[ジューススタンド・新大阪駅、新幹線の改札の前の1969年からの大阪のミックスジュース] 1969年創業の梅田のミックスジュースの店の新大阪店で、駅の改札を出てすぐ、新幹線に乗る前の最後の一杯にする人が多い (2026年)。元祖はバナナやみかんなどの果物に牛乳と砕いた氷で、凍ったようにとろりと濃く、どの果物の味もする。S 250円、M 370円 (2026年)。季節のブルーベリー、桃、白ぶどうも。ふたがつくのは M から。毎日9時から21時半。カード、PayPay 可。',
  });
}

// ================================================================ 旬彩 つむぎ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27094945/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '00:00']);
  put({
    id: 'osaka_shunsai_tsumugi_nishinakajima', name: '旬彩 つむぎ (Shunsai Tsumugi)', category: 'OMNI',
    lat: 34.727288, lng: 135.496507, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Simmered fish in soy, tempura, sushi rolls; sashimi and salt-grilled fish need checking for soy sauce.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish, sashimi, beef and dashi-based simmered dishes.',
    hours_raw: 'Mon–Sat 17:00–24:00 (last order 23:30); closed Sunday (Tabelog). A November 2025 diner booked lunch by phone; the listing gives evenings only. Reservations recommended: often full of regulars (2025–2026). Cards (VISA, JCB, AMEX, Diners); no e-money or QR (Tabelog). 24 seats, counter and tables; non-smoking (Tabelog; July 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '西中島4-5-20, a few minutes from Nishinakajima-Minamigata, between it and Shin-Osaka (Tabelog; 2025–2026)',
    cuisine: 'Seasonal Japanese izakaya (Tabelog; reviews) · assorted small dishes, five, six or nine kinds; nine for ¥1,500 (October 2025): burdock, mentaiko, liver, komatsuna, small eggplant, chashu, simmered squid, marinated horse mackerel, potato salad (2025–2026) · sashimi platter, five kinds ¥1,300 (October 2025); firefly squid sashimi in spring (March 2026) · simmered fish: kinki, akou, kinmedai in soy (2025–2026) · overnight-dried kinmedai, grilled ayu, grilled conger eel (2026) · mackerel pressed sushi; thin rolls to finish (2026) · Miyazaki beef steak; duck breast with eggplant; tender chicken liver (2026) · tempura of sweet potato, corn, and peanut and bean sprouts; kintoki greens and yuba in broth; hijiki rice; homemade ice cream such as chestnut or plum jam (2026) · a long sake list chosen by the owner, from Niigata, Yamagata, Akita and elsewhere (2025–2026)',
    website: null, gmaps: gm('旬彩 つむぎ 西中島'), menu_url: null,
    notes: '[Izakaya · Nishinakajima-Minamigata, a quiet seasonal kitchen with sake until midnight] A 24-seat Japanese izakaya a few minutes from Nishinakajima-Minamigata, where the owner cooks careful seasonal food and chooses a long list of sake (2025–2026). Start with the assorted plate of nine small dishes (¥1,500), then a sashimi platter, simmered kinki or akou, and finish with mackerel pressed sushi or a thin roll; homemade ice cream to close. Diners call it calm, a little grown-up and worth booking, as regulars fill it most nights. Open 17:00 to midnight; closed Sundays; cards accepted.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)'], origin: null,
      background: 'Per reviews: "The female owner is efficient and attentive" (October 2022); "a woman was efficiently preparing the dishes" on [the owner’s] own (July 2026); the owner "loves" sake and keeps a good selection (September 2026); featured on Kenkoba’s TV show (June 2026); "It was fully booked with regular customers and reservations" (December 2025); "The staff provided attentive service" (October 2026); one diner found the owner tense and the mood less pleasant (June 2026), another "may not be the most cheerful person, but I sensed a kind heart" (July 2026).',
      philosophy: null, specialty: 'Assorted small dishes; simmered fish; seasonal sake.',
      anecdotes: [
        { text: '"The platter included ingredients like burdock root, salted cod roe, liver, blanched komatsuna, small eggplants, chashu, and simmered squid, all seasoned lightly to complement each other well." — October 2025, nine dishes ¥1,500.', source: R + 'B515775862/' },
        { text: '"Kinki simmered fish. It had a deep, clean flavor without any heaviness." — March 2026.', source: R + 'B525560490/' },
        { text: '"The sweet potato tempura was unlike any I’ve ever had—so fluffy and tender!" — October 2026.', source: R + 'B538196788/' },
      ],
      japanese_sources_summary: '食べログ: 旬彩 つむぎ、居酒屋、大阪市淀川区西中島4-5-20、西中島南方駅から215m、月〜土17:00〜24:00 (L.O.23:30)、日曜休み、予約可、カード可、電子マネー・QR 不可、24席、禁煙。口コミ (2022年〜2026年10月): 女性の店主がひとりで料理、あて盛り5種・6種・9種 (9種1,500円)、ごぼう、明太子、レバー、小松菜、小なす、チャーシュー、イカの煮物、マリネしたアジ、ポテトサラダ、刺身盛り5種1,300円、ホタルイカの刺身、キンキやあこうやキンメの煮付け、キンメの一夜干し、鮎の塩焼き、焼いた conger eel、サバの棒寿司、細巻き、宮崎牛のステーキ、鴨と茄子、鶏レバー、さつまいもやとうもろこしの天ぷら、kintoki greens と湯葉のおひたし、ひじきごはん、自家製アイス、店主が選ぶ日本酒、常連と予約でいっぱい、テレビで紹介。',
      confidence: 'medium', sources: [TB, R + 'B480262212/', R + 'B515775862/', R + 'B516896817/', R + 'B525560490/', R + 'B525928762/', R + 'B529442534/', R + 'B530291093/', R + 'B532464698/', R + 'B535411386/', R + 'B537278883/', R + 'B538196788/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small portions for one on request (July 2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島4-5-20',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島四丁目5番20号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B515775862/'],
    price_note: 'Prices from an October 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Assorted small dishes, nine kinds', '¥1,500', 'Small dishes', 'ask', 'no', 'October 2025.', 'atemori_9'),
      it('', '', 'Sashimi platter, five kinds', '¥1,300', 'Sashimi', 'ask', 'no', 'October 2025.', 'sashimi_5'),
    ] }, {
    cuisine: '季節の和食の居酒屋 (食べログ、口コミ)・あて盛り5種、6種、9種。9種1,500円 (2025年10月): ごぼう、明太子、レバー、小松菜、小なす、チャーシュー、イカの煮物、マリネしたアジ、ポテトサラダなど (2025〜2026年)・刺身盛り5種1,300円 (2025年10月)。春はホタルイカの刺身 (2026年3月)・煮付け: キンキ、あこう、キンメ (2025〜2026年)・キンメの一夜干し、鮎の塩焼き、焼いた conger eel (2026年)・サバの棒寿司、締めに細巻き (2026年)・宮崎牛のステーキ、鴨胸と茄子の煮物、やわらかい鶏レバー (2026年)・さつまいも、とうもろこし、ピーナッツもやしの天ぷら。kintoki greens と湯葉のおひたし。ひじきごはん。栗や梅ジャムの自家製アイス (2026年)・店主が選ぶ日本酒がそろい、新潟、山形、秋田などから (2025〜2026年)',
    neighborhood: '西中島4-5-20、西中島南方駅から数分、新大阪との間 (食べログ、2025〜2026年)',
    gf_detail: '要確認。グルテンの情報なし。醤油の煮付け、天ぷら、巻き寿司。刺身や塩焼きの魚は醤油を確認。',
    vegan_detail: 'ヴィーガンではありません。魚、刺身、牛肉、だしの煮物。',
    notes: '[居酒屋・西中島南方、静かな旬の料理と日本酒、深夜0時まで] 西中島南方から数分、24席の和食の居酒屋で、店主が季節の料理をていねいに作り、日本酒もたくさん選んでいる (2025〜2026年)。まずは9種のあて盛り (1,500円)、刺身の盛り合わせ、キンキやあこうの煮付け、締めはサバの棒寿司か細巻き、最後に自家製アイス。落ち着いた大人の店で、たいてい常連で埋まるので予約を。17時から深夜0時。日曜休み。カード可。',
  });
}

// ================================================================ デリチュース エキマルシェ新大阪店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27102803/'; const R = TB + 'dtlrvwlst/';
  const H = day(['09:00', '21:30']);
  put({
    id: 'osaka_delicius_ekimarche_shin_osaka', name: 'デリチュース エキマルシェ新大阪店 (Delicious, Ekimarche Shin-Osaka)', category: 'OMNI',
    lat: 34.734265, lng: 135.5013, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the cheesecake sits on a cookie crust; roll cakes, cream puffs, financiers and madeleines.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: cream cheese, Brie de Meaux and cream throughout.',
    hours_raw: 'Daily 9:00–21:30 (Tabelog). Take-away only, inside the ticket gates of Shin-Osaka Station (Tabelog; August 2026). During the Ekimarche renovation the shop traded from a temporary spot near platforms 3–4 and reopened in July 2026 (July 2026). Cards (incl. UnionPay), e-money and QR (Tabelog); Wester points usable (September 2026). Spoons ¥10 each; ice packs free for up to two hours; a whole cake keeps three days (2026). Opened 14 December 2017 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: '西中島5-16-1 エキマルシェ新大阪, inside the ticket gates of JR Shin-Osaka (Tabelog; August 2026)',
    cuisine: 'Cheesecake and Western sweets to take away (Tabelog) · "Delicious", the signature cheesecake, between rare and baked, with Brie de Meaux, lemon, a sweet-sour apricot topping and a cookie crust; cut ¥520–550 (August and October 2026); small and whole cakes, large sizes sell out by midday at weekends (2026) · monthly limited cakes, such as apple soufflé cheesecake in September 2026 · cream puffs, roll cakes, financiers and madeleines (2026)',
    website: 'https://www.delicius.jp/', gmaps: gm('デリチュース エキマルシェ新大阪'), menu_url: null,
    notes: '[Sweets · Shin-Osaka Station, the Minoh cheesecake to eat on the Shinkansen] The station take-away shop of Delicious, the Minoh patisserie, inside the JR Shin-Osaka gates and a standard souvenir stop (2026). The cheesecake of the same name sits between rare and baked, rich with Brie de Meaux yet fresh with lemon and a tangy apricot topping on a cookie base; a cut is about ¥520–550 (2026), and many eat it on the train. Whole cakes travel well with free ice packs; monthly specials such as apple soufflé appear too. Open daily 9:00–21:30.',
    chef_bio: { chef_name: null, roles: ['Shop staff (unnamed)'], origin: null,
      background: 'Per Tabelog: Western sweets, take-away; opened 14 December 2017; website delicius.jp. One of four Delicious shops: the 箕面本店 plus take-away shops at JR Osaka, this one and Daimaru Shinsaibashi (two articles, web search 2026-11-02). Per reviews: a temporary counter near platforms 3–4 during the Ekimarche renovation, back in the renewed market by July 2026; "I have visited the Minoh Main Store before, but this was my first time at this location" (September 2026); one diner found the cream puffs and roll cakes a little dry (August 2026).',
      philosophy: null, specialty: 'Delicious cheesecake.',
      anecdotes: [
        { text: '"The unique texture of the cake is reminiscent of both rare and baked styles. The flavor of Brie de Meaux is distinctive and delicious." — August 2026, cut ¥520.', source: R + 'B532824430/' },
        { text: '"The sweetness of the apricot jam on top complements the saltiness beautifully." — August 2026.', source: R + 'B533574825/' },
        { text: '"The most popular item, Delicious, is a lemon-flavored cheesecake topped with a sweet and tangy jelly." — October 2026, ¥550.', source: R + 'B538490497/' },
      ],
      japanese_sources_summary: '食べログ: デリチュース エキマルシェ新大阪店、ケーキ・洋菓子、大阪市淀川区西中島5-16-1 エキマルシェ新大阪、毎日9:00〜21:30、テイクアウト、カード・電子マネー・QR 可、2017年12月14日オープン。口コミ (2019年〜2026年10月): 新大阪駅の改札の中、エキマルシェ改装中は3・4番線の近くの仮店舗、2026年7月に再開、看板のチーズケーキ「デリチュース」はレアとベイクドの間、ブリー・ド・モー、レモン、あんずのジャム、クッキーの台、カット520〜550円、ホールは週末の昼には売り切れも、9月限定のりんごのスフレチーズケーキ、シュークリーム、ロールケーキ、フィナンシェ、マドレーヌ、スプーン10円、保冷剤は2時間まで無料、ホールは3日もつ、箕面の本店。',
      confidence: 'medium', sources: [TB, R + 'B399127342/', R + 'B460220348/', R + 'B522803538/', R + 'B532609067/', R + 'B532824430/', R + 'B533574825/', R + 'B535066466/', R + 'B538322279/', R + 'B538490497/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Station take-away counter; cards and QR accepted (Tabelog). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島5-16-1 エキマルシェ新大阪',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026, after the July 2026 reopening.' },
    pin_source: `Tabelog ${TB}; GSI 大阪府大阪市淀川区西中島五丁目16番1号 (go) 133m, the station block; Tabelog point kept for the shop inside the gates; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B532824430/', R + 'B538490497/'],
    price_note: 'Prices from August and October 2026 reviews.', last_checked: TODAY, items: [
      it('デリチュース (カット)', '', '"Delicious" cheesecake, cut', '¥520–550', 'Cheesecake', 'no', 'no', 'August and October 2026.', 'delicius_cut'),
      it('', '', 'Spoon', '¥10', 'Extras', 'ask', 'ask', '2026.', 'spoon'),
    ] }, {
    cuisine: '持ち帰りのチーズケーキと洋菓子 (食べログ)・看板のチーズケーキ「デリチュース」はレアとベイクドの間で、ブリー・ド・モー、レモン、甘酸っぱいあんずのトッピングにクッキーの台。カット520〜550円 (2026年8月・10月)。小さいサイズとホール、週末は昼には大きいサイズが売り切れることも (2026年)・月替わりの限定ケーキ、2026年9月はりんごのスフレチーズケーキ・シュークリーム、ロールケーキ、フィナンシェ、マドレーヌ (2026年)',
    neighborhood: '西中島5-16-1 エキマルシェ新大阪、JR 新大阪駅の改札の中 (食べログ、2026年8月)',
    gf_detail: 'グルテンフリーではありません。チーズケーキはクッキーの台。ロールケーキ、シュークリーム、フィナンシェ、マドレーヌ。',
    vegan_detail: 'ヴィーガンではありません。クリームチーズ、ブリー・ド・モー、クリームばかり。',
    notes: '[洋菓子・新大阪駅、新幹線で食べる箕面のチーズケーキ] 箕面の洋菓子店デリチュースの駅の持ち帰りの店で、JR 新大阪の改札の中、おみやげの定番 (2026年)。店名と同じチーズケーキはレアとベイクドの間で、ブリー・ド・モーのコクにレモンとあんずのさわやかさ、クッキーの台。カットは約520〜550円 (2026年) で、新幹線で食べる人も多い。ホールは保冷剤無料で持ち帰りやすく、りんごのスフレなど月替わりもある。毎日9時から21時半。',
  });
}

save();
