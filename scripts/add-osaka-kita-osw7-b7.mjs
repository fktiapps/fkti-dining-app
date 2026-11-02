// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), core queue, circle shin-osaka; worker osw7 (lane: Tabelog id even), batch 7.
//   + 勝盛 Masamori (lunch-only soba and udon set-meal house behind Nishinakajima, shared tables, ¥750–980)
//   + 大屋 Daiya (4-seat takoyaki stand by Higashimikuni Station run by a couple, outdoor tables, open since 2010)
//   + らーめん やまふじ 新大阪本店 Ramen Yamafuji Shin'osaka honten (pork-bone and seafood shoyu, white miso ramen, free rice)
//   + かつ兵衛 Katsu Bei (one-man katsu-don counter by Higashimikuni, ¥900 bowls)
//   Lane check: every id above is even. Taken in queue order (nearest first); no skips this batch.
//   Chain check: Masamori, Daiya and Katsu Bei name no other shop. Yamafuji: the osaka-kita crawl also holds らーめんやまふじ
//   スープ工房東三国店, and a November 2025 diner notes the rice policy "differs between this location and the main store"; two
//   or so shops, not a chain. None of the four is in data/osaka.json (grep by id, name and address, 2026-11-02).
//   Ramen block: Yamafuji's reviews describe richness, oil, noodles and tare, but nothing on broth clarity or aroma, so per the
//   2026-11-01 lesson it has no ramen block; the bowls are described in cuisine/notes.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw7-7');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 勝盛
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27004784/'; const R = TB + 'dtlrvwlst/';
  const L = day(['11:00', '14:00']);
  put({
    id: 'osaka_masamori_nishinakajima', name: '勝盛 (Masamori)', category: 'OMNI',
    lat: 34.727637, lng: 135.500435, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: soba and udon in a soy-sauce broth, served in sets with katsu-don, tempura bowls or kara-age; the soba\'s buckwheat ratio is not stated.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: soba and udon in dashi broth, with katsu-don, shrimp tempura or fried chicken in the sets.',
    hours_raw: 'Mon–Sat 11:00–14:00; closed Sunday and holidays; hours may change (Tabelog). Lunch only. No reservations; cash only (Tabelog). 20 seats (Tabelog): shared tables for four downstairs and a tatami room upstairs (August and September 2026); non-smoking (Tabelog). Full of office workers from just before noon, but tables turn over fast (2025–2026).',
    hours: { 0: L, 1: L, 2: L, 3: L, 4: L, 5: L }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: '西中島3丁目9-7 — 3 min from Nishinakajima-Minamigata Stn (Midosuji Line) (Tabelog), a little hard to find behind the APA Hotel (February 2025)',
    cuisine: 'Neighbourhood soba and udon lunch house · set meals with warm or cold soba or udon: "Ume" with a mini tempura bowl ¥960 (June 2025, September 2026); "Take" with a mini katsu-don and kitsune soba ¥960 (February 2025); katsu-don with udon ¥960 (December 2025); katsu-don with mini soba ¥940 (May 2026); katsu-don with zaru soba (October 2026); inari with bukkake udon ¥850 (August 2026); fried-chicken bento with wakame soba ¥980 (October 2026) · zaru soba ¥750 (April 2026) · chilled tanuki soba ¥860, large +¥220 (June 2025) · meat soba with inari (November 2025) · a slightly sweet soy broth, sweet fried tofu (2025–2026)',
    website: null, gmaps: gm('勝盛 西中島3-9-7'), menu_url: null,
    notes: "[Soba · Nishinakajima, the office workers' lunch soba house] A busy lunch-only soba and udon shop on a back street behind the APA Hotel in Nishinakajima, filled from before noon with office workers at shared tables and turning them over fast. The draw is the set meal: warm or cold soba or udon with a mini katsu-don, a mini tempura bowl or inari, around ¥850–980 (2025–2026), in portions that leave even big eaters full. The broth is slightly sweet soy, the fried tofu sweet, and the soba has a fair buckwheat flavour (2025). Plain zaru soba is ¥750 (April 2026). Three cooks and four floor staff work the rush (May 2026), and a tatami room upstairs takes the overflow. Cash only; 11:00–14:00, closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null, background: 'No shop description on Tabelog. Reviewers: "There were three people in the kitchen and four serving staff, all busy at work" (May 2026); "the charm of a local soba shop" (February 2025).', philosophy: null, specialty: 'Soba or udon set with mini katsu-don or tempura bowl.',
      anecdotes: [
        { text: '"Despite it being just before noon, the place was already about 80% full, and it reached full capacity while I was eating." — May 2026, the katsu-don set with mini soba for JPY 940.', source: R + 'B530775281/' },
        { text: '"I forgot that in Osaka, Tanuki and Kitsune are the opposite." — June 2025, the chilled tanuki soba for JPY 860.', source: R + 'B507840086/' },
        { text: '"I was impressed by the delicious broth! It had a slightly sweet soy sauce flavor that suited my taste perfectly." — September 2026, the Ume set with warm soba for JPY 960.', source: R + 'B536477755/' },
      ],
      japanese_sources_summary: '食べログ: 勝盛、そば、大阪市淀川区西中島3丁目9-7、Midosuji 線 西中島南方駅から3分、月〜土11:00〜14:00、日・祝休み、予約不可、現金のみ、20席、禁煙。口コミ(2025年2月〜2026年10月): APA ホテルの裏で少しわかりにくい、昼は会社員で満席、相席、2階に座敷、回転が早い、丼の定食「Ume」(ミニ天丼) 960円、「Take」(ミニかつ丼ときつねそば) 960円、かつ丼とうどん960円、かつ丼とミニそば940円、かつ丼とざるそば、いなりとぶっかけうどん850円、kara-age の弁当とわかめそば980円、ざるそば750円、冷やしたぬきそば860円、肉そばといなり、少し甘い醤油のだし、甘いお揚げ、量が多い、厨房3人と配膳4人。',
      confidence: 'medium', sources: [TB, R + 'B280791038/', R + 'B501474094/', R + 'B507840086/', R + 'B512165759/', R + 'B517564323/', R + 'B519529570/', R + 'B530775281/', R + 'B533181284/', R + 'B534738384/', R + 'B536477755/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A crowded lunch counter with shared tables and a long menu of sets; cash only. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島3丁目9-7',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島三丁目9番7号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B501474094/', R + 'B536477755/', R + 'B530775281/', R + 'B533181284/'],
    price_note: 'Prices from 2025–2026 reviews, each dated in its note.', last_checked: TODAY, items: [
      it('', '', 'Zaru soba', '¥750', 'Soba', 'no', 'no', 'April 2026.', 'zaru_soba'),
      it('', '', '"Ume" set: mini tempura bowl with soba or udon', '¥960', 'Sets', 'no', 'no', 'September 2026.', 'ume_set'),
      it('', '', 'Katsu-don set with mini soba', '¥940', 'Sets', 'no', 'no', 'May 2026.', 'katsudon_set'),
      it('', '', 'Inari set with bukkake udon', '¥850', 'Sets', 'no', 'no', 'August 2026.', 'inari_set'),
      it('', '', 'Chilled tanuki soba', '¥860', 'Soba', 'no', 'no', 'June 2025; large +¥220.', 'hiyashi_tanuki'),
    ] }, {
    cuisine: '町のそばとうどんの昼の店・温かいか冷たいそばかうどんの定食: ミニ天丼の「Ume」960円 (2025年6月、2026年9月)。ミニかつ丼ときつねそばの「Take」960円 (2025年2月)。かつ丼とうどん960円 (2025年12月)。かつ丼とミニそば940円 (2026年5月)。かつ丼とざるそば (2026年10月)。いなりとぶっかけうどん850円 (2026年8月)。kara-age の弁当とわかめそば980円 (2026年10月)・ざるそば750円 (2026年4月)・冷やしたぬきそば860円、大盛り220円増し (2025年6月)・肉そばといなり (2025年11月)・少し甘い醤油のだし、甘いお揚げ (2025〜2026年)',
    neighborhood: '西中島3丁目9-7。Midosuji 線 西中島南方駅から3分 (食べログ)。APA ホテルの裏で少しわかりにくい (2025年2月)',
    gf_detail: 'グルテンフリーではありません。醤油のだしのそばとうどんで、かつ丼、天丼、kara-age の定食。そば粉の割合の説明はない。',
    vegan_detail: 'ヴィーガンではありません。だしのそばとうどんに、かつ丼、エビの天ぷら、鶏の揚げ物の定食。',
    notes: '[そば・西中島、会社員の昼のそば屋] 西中島の APA ホテルの裏通りにある昼だけのそばとうどんの店で、12時前から会社員で相席になり、回転も早い。目当ては定食: 温かいか冷たいそばかうどんに、ミニかつ丼、ミニ天丼、いなりがついて約850〜980円 (2025〜2026年)。たくさん食べる人もおなかいっぱいになる量。だしは少し甘い醤油味で、お揚げも甘く、そばの風味もしっかり (2025年)。ざるそばだけなら750円 (2026年4月)。混む時間は厨房3人と配膳4人で回し (2026年5月)、2階の座敷も使う。現金のみ。11時から14時、日曜休み。',
  });
}

// ================================================================ 大屋
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27058632/'; const R = TB + 'dtlrvwlst/';
  const N = day(['18:00', '23:00']);
  put({
    id: 'osaka_daiya_takoyaki_higashimikuni', name: '大屋 (Daiya)', category: 'OMNI',
    lat: 34.739749, lng: 135.497568, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: takoyaki is a wheat batter, and yakisoba and curry udon are wheat noodles.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: takoyaki with octopus, horumon, oden in broth.',
    hours_raw: 'Daily 18:00–23:00; hours may change (Tabelog). Closed on rainy days (September 2026). Not always open on the dot: one November 2025 diner arrived at opening and waited about 30 minutes while the couple prepared. No reservations; no cards or e-money; PayPay accepted (Tabelog). 4 counter seats inside (Tabelog), plus outdoor counters and about four tables for around ten (2025–2026), with electric blankets and cushions in winter (February 2026); smoking allowed; takeaway (Tabelog). A July 2024 diner waited an hour. Opened 22 November 2010 (Tabelog).',
    hours: { 0: N, 1: N, 2: N, 3: N, 4: N, 5: N, 6: N }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: '宮原5-2-17 — 1 min from Exit 5 of Higashimikuni Stn (Tabelog), on a Showa-feeling street of small izakaya about 10 min from Shin-Osaka (September 2025)',
    cuisine: 'Takoyaki: large, crisp outside and creamy inside, by number of pieces, with a choice of flavours: sauce and mayonnaise, dashi soy, ponzu, curry, garlic pepper mayonnaise (2024–2026) · spicy horumon, horumon yakisoba (2025–2026) · oden, curry udon (April 2026) · 6 takoyaki, spicy horumon and two Asahi Super Dry came to ¥1,650 (May 2026) · beer, sake, shochu (Tabelog)',
    website: null, gmaps: gm('大屋 たこ焼き 宮原5-2-17'), menu_url: null,
    notes: "[Takoyaki · Higashimikuni, a couple's stand with outdoor tables] A tiny takoyaki stand a minute from Higashimikuni Station, run since 2010 by a warm older couple (2024–2026), with four seats inside and a handful of outdoor tables where you eat and drink under the evening sky, blankets supplied in winter (February 2026). The takoyaki are big, golf-ball size, crisp outside and creamy inside, in flavours from classic sauce and mayonnaise to dashi soy, ponzu, curry and garlic pepper mayo; spicy horumon and horumon yakisoba go with a beer. Six takoyaki, horumon and two beers came to ¥1,650 (May 2026). The walls are covered in signed boards from stage actors, including the cast of The Prince of Tennis, and a railway YouTuber has sent fans here (2025). Evenings only; closed when it rains.",
    chef_bio: { chef_name: null, roles: ['Owner couple (unnamed)'], origin: null, background: 'No shop description on Tabelog; opened 22 November 2010 (Tabelog). Reviewers: "This takoyaki shop is run by a couple" (September 2026); "The owners, an older gentleman and lady, are very kind" (November 2024); "The owner and the lady of the house are super kind!" (April 2026); the walls are covered with signed boards and goods from stage actors, among them the cast of "The Prince of Tennis" (October 2025, September 2026).', philosophy: null, specialty: 'Large takoyaki in many flavours; spicy horumon.',
      anecdotes: [
        { text: '"It felt like outdoor dining" — February 2026; electric blankets, cushions and a lap blanket made it comfortable for drinks.', source: R + 'B522141783/' },
        { text: '"I had 6 takoyaki, spicy horumon, and 2 Asahi SUPER DRY for JPY 1,650, which is a great value!" — May 2026.', source: R + 'B493288556/' },
        { text: '"This place seems to be a hotspot for fans of \'The Prince of Tennis,\' as it displays signatures from the cast." — October 2025.', source: R + 'B501058141/' },
      ],
      japanese_sources_summary: '食べログ: 大屋、たこ焼き・焼きそば、大阪市淀川区宮原5-2-17、東三国駅5番出口から徒歩1分、毎日18:00〜23:00、予約不可、カード・電子マネー不可、PayPay 可、4席 (カウンター)、喫煙可、テイクアウト、2010年11月22日オープン。口コミ(2024年7月〜2026年9月): 夫婦で切り盛り、やさしい年配の夫婦、雨の日は休み、外のカウンターとテーブル4つほど、冬は電気毛布とクッション、ゴルフボールより少し大きいたこ焼き、外はカリッと中はとろり、ソースマヨ、だし醤油、ポン酢、カレー、ガーリックペッパーマヨ、辛いホルモン、ホルモン焼きそば、おでん、カレーうどん、6個と辛いホルモンとビール2本で1,650円、舞台の俳優のサイン、「The Prince of Tennis」のキャスト、鉄道の YouTuber のおすすめ、開店時間でもまだ準備中の日も。',
      confidence: 'medium', sources: [TB, R + 'B489765664/', R + 'B493288556/', R + 'B496915424/', R + 'B501058141/', R + 'B504146763/', R + 'B513738298/', R + 'B516120976/', R + 'B516699392/', R + 'B522141783/', R + 'B522556221/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A street stand: order at the counter, eat outside or take away. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市淀川区宮原5-2-17',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区宮原五丁目2番17号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B493288556/', R + 'B513738298/'],
    price_note: 'One combined price from a May 2026 review; items otherwise unpriced.', last_checked: TODAY, items: [
      it('', '', 'Takoyaki (6 or 8 pieces), sauce and mayonnaise, dashi soy, ponzu, curry or garlic pepper mayonnaise', '', 'Takoyaki', 'no', 'no', '2024–2026.', 'takoyaki'),
      it('', '', 'Spicy horumon', '', 'Sides', 'ask', 'no', 'May 2026.', 'kara_horumon'),
      it('', '', 'Horumon yakisoba', '', 'Noodles', 'no', 'no', 'November 2025.', 'horumon_yakisoba'),
      it('', '', 'Oden', '', 'Sides', 'ask', 'no', 'April 2026.', 'oden'),
    ] }, {
    cuisine: 'たこ焼き: 大きくて外はカリッと中はとろり、個数を選べて、味はソースとマヨネーズ、だし醤油、ポン酢、カレー、ガーリックペッパーマヨ (2024〜2026年)・辛いホルモン、ホルモン焼きそば (2025〜2026年)・おでん、カレーうどん (2026年4月)・たこ焼き6個、辛いホルモン、Asahi Super Dry 2本で1,650円 (2026年5月)・ビール、日本酒、焼酎 (食べログ)',
    neighborhood: '宮原5-2-17。東三国駅5番出口から徒歩1分 (食べログ)。新大阪から約10分、昭和の雰囲気の小さな居酒屋がならぶ通り (2025年9月)',
    gf_detail: 'グルテンフリーではありません。たこ焼きは小麦の生地で、焼きそばとカレーうどんも小麦の麺。',
    vegan_detail: 'ヴィーガンではありません。タコの入ったたこ焼き、ホルモン、だしのおでん。',
    notes: '[たこ焼き・東三国、夫婦の店と外のテーブル] 東三国駅から1分の小さなたこ焼きの店で、2010年からやさしい年配の夫婦が切り盛り (2024〜2026年)。中は4席だけで、外のテーブルで夜空の下で食べて飲める。冬は毛布も貸してくれる (2026年2月)。たこ焼きはゴルフボールほどの大きさで、外はカリッと中はとろり。味はソースマヨの定番から、だし醤油、ポン酢、カレー、ガーリックペッパーマヨまで。辛いホルモンやホルモン焼きそばでビールも。たこ焼き6個、ホルモン、ビール2本で1,650円 (2026年5月)。壁には舞台の俳優のサインがびっしりで、「The Prince of Tennis」のキャストのものも。鉄道の YouTuber が紹介してファンも来る (2025年)。夜だけ。雨の日は休み。',
  });
}

// ================================================================ らーめん やまふじ 新大阪本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270302/27115268/'; const R = TB + 'dtlrvwlst/';
  const MW = day(['11:30', '16:00']); const TF = day(['11:30', '21:00']);
  put({
    id: 'osaka_ramen_yamafuji_shin_osaka', name: 'らーめん やまふじ 新大阪本店 (Ramen Yamafuji Shin\'osaka honten)', category: 'OMNI',
    lat: 34.735182, lng: 135.490493, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat ramen, tsukemen and mazesoba noodles.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: broths of pork bone, chicken carcass, niboshi and kombu, with chashu.',
    hours_raw: 'Mon and Wed 11:30–16:00 (last order 15:50); Tue, Thu and Fri 11:30–21:00 (last order 20:45); Sat and holidays 11:30–15:00 (last order 15:00); closed Sunday (Tabelog). No reservations; cash only (Tabelog); a ticket machine that takes new notes (August 2025). 12 seats: 8 at the counter and 2 tables (May 2026); non-smoking (Tabelog). Lunch price ¥950 on weekdays; rice ¥50 or ¥100 extra, self-service and refillable (2025–2026). Opened here 20 December 2019 (Tabelog); a May 2026 diner remembers the shop before it moved.',
    hours: { 0: MW, 1: TF, 2: MW, 3: TF, 4: TF, 5: day(['11:30', '15:00']) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: '西宮原2-6-16, ground floor of 新大阪コーポビアネーズ, tucked at the back of the apartment building\'s entrance (September 2026) — about 13 min from Mikuni Stn (February 2026); parking at Super Life nearby (September 2026)',
    cuisine: 'Yamafuji ramen ¥950 (2025–2026): a pork-bone and seafood shoyu of pork bones, chicken carcasses, niboshi and kombu, light on oil (May 2026), with thin straight or medium-thick curly noodles and bamboo shoots; egg topping ¥150 · white miso ramen, slightly sweet with a hint of yuzu, ¥950 weekday lunch, ¥1,000 at other times (November 2025, April 2026); special with two kinds of chashu, egg, menma, a spicy paste and citrus peel (April 2026) · Ichikara ramen ¥980 (July 2026) · tsukemen in a seafood dip with curly noodles, served in a metal bowl (August and September 2026) · mazesoba with minced meat and egg (June 2026) · rice self-service and refillable for ¥50–100, with a kombu tsukudani from the broth kombu and a niboshi furikake to top it (2025–2026) · staff-meal rice bowl (April 2026)',
    website: null, gmaps: gm('らーめん やまふじ 新大阪本店'), menu_url: null,
    notes: "[Ramen · Nishimiyahara, a ramen made for rice] A 12-seat ramen shop hidden at the back of an apartment building's entrance west of Shin-Osaka, here since 2019, whose idea is ramen that goes with rice. The Yamafuji ramen (¥950) is a pork-bone and seafood shoyu of pork, chicken, niboshi and kombu, with thin or curly noodles, and the rice is self-service and refillable for ¥50–100, with a tsukudani made from the broth's own kombu and a niboshi furikake to pile on (2025–2026). The other house bowl is a slightly sweet white miso ramen with yuzu; there are tsukemen and a mazesoba too. One regular has been back ten times (March 2026); lunch can mean a short wait outside. Cash only; closed Sunday, and only Tuesday, Thursday and Friday run into the evening.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null, background: 'No shop description on Tabelog; opened at this address 20 December 2019 (Tabelog). Reviewers: the shop moved here from an earlier site (May and September 2026); its concept is ramen that goes with rice (February 2026); "the rice policy differs between this location and the main store" (November 2025); friendly staff (April 2026). The osaka-kita crawl also lists らーめんやまふじ スープ工房東三国店.', philosophy: 'Ramen that goes well with rice (a February 2026 review, on "the restaurant\'s concept").', specialty: 'Yamafuji ramen with refillable rice; white miso ramen.',
      anecdotes: [
        { text: '"I topped it with a tsukudani made from the kombu used for the ramen broth and some niboshi (dried sardine) furikake." — March 2026, a diner on visit ten, the Yamafuji ramen for JPY 950.', source: R + 'B427556249/' },
        { text: '"The white miso soup, which has a slightly sweet seafood base with a hint of yuzu, pairs perfectly with the curly noodles." — April 2026, JPY 1,000 on a Saturday.', source: R + 'B526800166/' },
        { text: '"The restaurant is located in a somewhat hidden spot at the back of the first floor entrance of the apartment building, so be cautious." — September 2026.', source: R + 'B534930752/' },
      ],
      japanese_sources_summary: '食べログ: らーめん やまふじ 新大阪本店、ラーメン・つけ麺・油そば・まぜそば、大阪市淀川区西宮原2-6-16 新大阪コーポビアネーズ 1F、三国駅から712m、月・水11:30〜16:00、火・木・金11:30〜21:00、土・祝11:30〜15:00、日曜休み、予約不可、現金のみ、12席、禁煙、2019年12月20日オープン。口コミ(2025年4月〜2026年9月): マンションの入口の奥でわかりにくい、カウンター8席とテーブル2つ、券売機、Yamafuji Ramen 950円、豚骨、鶏ガラ、煮干し、昆布の魚介豚骨醤油、油は軽め、細いストレート麺か中太のちぢれ麺、たけのこ、白味噌のラーメン (少し甘く柚子の香り) 950円〜1,000円、特製はチャーシュー2種、卵、メンマ、辛いペースト、柑橘の皮、Ichikara ラーメン980円、魚介のつけ麺、まぜそば、ごはんはセルフでおかわり自由50〜100円、スープの昆布の佃煮と煮干しのふりかけ、まかない丼、移転前の店を知る人も、ごはんに合うラーメンがコンセプト。',
      confidence: 'medium', sources: [TB, R + 'B427556249/', R + 'B517853555/', R + 'B524456027/', R + 'B525983387/', R + 'B526800166/', R + 'B528441512/', R + 'B530733048/', R + 'B531608041/', R + 'B534507763/', R + 'B534930752/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine (cash only); say thin or curly noodles when handing over the ticket. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西宮原2-6-16 新大阪コーポビアネーズ 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西宮原二丁目6番16号 (go) 43m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B427556249/', R + 'B526800166/', R + 'B531608041/'],
    price_note: 'Prices from 2025–2026 reviews, each dated in its note.', last_checked: TODAY, items: [
      it('', '', 'Yamafuji ramen (pork-bone and seafood shoyu)', '¥950', 'Ramen', 'no', 'no', 'March and September 2026.', 'yamafuji_ramen'),
      it('', '', 'White miso ramen', '¥1,000', 'Ramen', 'no', 'no', 'April 2026; ¥950 at weekday lunch.', 'shiro_miso'),
      it('', '', 'Ichikara ramen', '¥980', 'Ramen', 'no', 'no', 'July 2026.', 'ichikara'),
      it('', '', 'Rice, self-service refills', '¥100', 'Rice', 'ask', 'ask', 'March 2026; ¥50 at weekday lunch.', 'rice'),
    ] }, {
    cuisine: 'Yamafuji Ramen 950円 (2025〜2026年): 豚骨、鶏ガラ、煮干し、昆布の魚介豚骨醤油で油は軽め (2026年5月)、細いストレート麺か中太のちぢれ麺、たけのこ。卵のトッピング150円・少し甘く柚子の香る白味噌のラーメン、平日の昼は950円、ほかは1,000円 (2025年11月、2026年4月)。特製はチャーシュー2種、卵、メンマ、辛いペースト、柑橘の皮 (2026年4月)・Ichikara ラーメン980円 (2026年7月)・魚介のつけ汁にちぢれ麺のつけ麺、金属の器で (2026年8月と9月)・そぼろと卵のまぜそば (2026年6月)・ごはんはセルフでおかわり自由、50〜100円。スープに使った昆布の佃煮と煮干しのふりかけをのせて (2025〜2026年)・まかない丼 (2026年4月)',
    neighborhood: '西宮原2-6-16、新大阪コーポビアネーズの1階、マンションの入口の奥でわかりにくい (2026年9月)。三国駅から約13分 (2026年2月)。駐車場は近くの Super Life (2026年9月)',
    gf_detail: 'グルテンフリーではありません。ラーメン、つけ麺、まぜそばは小麦の麺。',
    vegan_detail: 'ヴィーガンではありません。豚骨、鶏ガラ、煮干し、昆布のスープにチャーシュー。',
    notes: '[ラーメン・西宮原、ごはんに合うラーメン] 新大阪の西、マンションの入口の奥にかくれた12席のラーメン店で、2019年からここに。ごはんに合うラーメンがコンセプト。Yamafuji Ramen (950円) は豚骨、鶏ガラ、煮干し、昆布の魚介豚骨醤油で、細麺かちぢれ麺。ごはんはセルフで50〜100円でおかわり自由、スープの昆布で作った佃煮と煮干しのふりかけをのせて食べる (2025〜2026年)。もうひとつの看板は柚子の香る少し甘い白味噌のラーメン。つけ麺やまぜそばも。10回通っている人も (2026年3月)。昼は少し外で待つことも。現金のみ。日曜休み、夜もあるのは火・木・金だけ。',
  });
}

// ================================================================ かつ兵衛
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27082572/'; const R = TB + 'dtlrvwlst/';
  const LD = day(['11:00', '14:00'], ['17:00', '21:00']); const L = day(['11:00', '14:00']);
  put({
    id: 'osaka_katsu_bei_higashimikuni', name: 'かつ兵衛 (Katsu Bei)', category: 'OMNI',
    lat: 34.739782, lng: 135.496785, cuisine_type: 'katsu',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: breaded, deep-fried pork cutlet in every bowl.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork cutlet with egg simmered in dashi.',
    hours_raw: 'Tabelog: Mon–Wed 11:00–14:00 and 17:00–21:00; Thu–Sat 11:00–14:00; closed Sunday; hours may change. Reviewers find it shorter in the evening: an October 2026 diner says it closes at 19:00 even on weekdays, and at 18:30 one April 2026 evening it was already closing; it sometimes opens before 11:00 (August and September 2026), and once showed "Closed for Preparation" at 13:20 (October 2026). No reservations; cash only (Tabelog); order at the ticket machine (2026). 12 counter seats on Tabelog, 10–11 per reviewers; non-smoking (Tabelog). Lines at lunch; come at opening.',
    hours: { 0: LD, 1: LD, 2: LD, 3: L, 4: L, 5: L }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: '東三国4-17-7 — about 200 m from Higashimikuni Stn (Tabelog), in an old shopping street 2 min from the station and 10 min from Shin-Osaka (October 2026)',
    cuisine: 'Katsu-don specialist (2024–2026) · the menu, October 2026: katsu-don ¥900, oroshi katsu-don with grated daikon ¥900, sauce katsu-don ¥900, curry katsu-don ¥970, each with red miso soup · add-ons: large rice ¥50, double egg ¥50, double katsu ¥450 (October 2026) · a thick pork-loin cutlet fried to order, cut in eight, laid on rice and topped with egg simmered in dashi, crisp despite the egg (2026) · the sauce katsu-don comes on shredded cabbage with an onsen egg (September 2026) · takuan on the counter (2026)',
    website: null, gmaps: gm('かつ兵衛 東三国4-17-7'), menu_url: null,
    notes: "[Katsu-don · Higashimikuni, one cook and a ¥900 bowl] A one-man katsu-don counter in the old shopping street by Higashimikuni Station, with a line at most lunches and Southern All Stars on the stereo. The owner fries each thick pork-loin cutlet to order, slices it into eight and lays it on rice under egg simmered in dashi, so it stays crisp under the egg; ¥900 with red miso soup, or ¥970 with curry (October 2026). Oroshi with grated daikon and a sauce katsu-don on cabbage are the alternatives, and double katsu or double egg is a few hundred yen more for big appetites. A card on the counter explains, with evident love, what is special about the pork (October 2026). Get there at opening; evenings end early, around 19:00 per reviewers, and Thursday to Saturday is lunch only.",
    chef_bio: { chef_name: null, roles: ['Owner-cook, working alone (unnamed)'], origin: null, background: 'No shop description on Tabelog. Reviewers: "The restaurant is run solely by the owner, with just counter seating available" (November 2024); "it\'s a one-person operation" (September 2026); "The owner\'s passion for Katsu Don shines through" (October 2026); a table card titled "What\'s Amazing Here!" explains the pork (October 2026).', philosophy: null, specialty: 'Katsu-don; oroshi, sauce and curry katsu-don.',
      anecdotes: [
        { text: '"The friendly chef was working solo but was very efficient." — October 2026, the katsu-don for JPY 900.', source: R + 'B499580697/' },
        { text: '"Sitting at the counter, the sounds of frying katsu and the crisp slicing of the meat are quite pleasant!" — October 2026, the curry katsu-don.', source: R + 'B537852295/' },
        { text: '"You get the flavor absorption of stewed Katsu without losing the crispiness, capturing the best of both worlds." — October 2026.', source: R + 'B536879935/' },
      ],
      japanese_sources_summary: '食べログ: かつ兵衛、カツ丼、大阪市淀川区東三国4-17-7、東三国駅から201m、月〜水11:00〜14:00、17:00〜21:00、木〜土11:00〜14:00、日曜休み、予約不可、現金のみ、12席 (カウンター)、禁煙。口コミ(2024年11月〜2026年10月): 店主がひとりで切り盛り、カウンター10〜11席、券売機、昼は行列、カツ丼900円、おろしカツ丼900円、ソースカツ丼900円、カレーカツ丼970円、赤だしつき、ごはん大盛り50円、卵ダブル50円、カツダブル450円、厚いロースのカツを注文ごとに揚げて8切れ、だしで煮た卵をかける、ソースカツ丼はキャベツと温泉卵、テーブルに豚の説明「What\'s Amazing Here!」、たくあん、Southern All Stars の音楽、夜は19時までという声も、11時前に開くことも。',
      confidence: 'medium', sources: [TB, R + 'B499580697/', R + 'B523534031/', R + 'B526179352/', R + 'B534568147/', R + 'B534840656/', R + 'B536214261/', R + 'B536672740/', R + 'B536879935/', R + 'B537048155/', R + 'B537852295/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine (cash only) with four bowls and add-ons. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市淀川区東三国4-17-7',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区東三国四丁目17番7号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537852295/', R + 'B536879935/'],
    price_note: 'Prices from October 2026 reviews (tax included).', last_checked: TODAY, items: [
      it('', '', 'Katsu-don with red miso soup', '¥900', 'Katsu-don', 'no', 'no', 'October 2026.', 'katsudon'),
      it('', '', 'Oroshi katsu-don (grated daikon)', '¥900', 'Katsu-don', 'no', 'no', 'October 2026.', 'oroshi_katsudon'),
      it('', '', 'Sauce katsu-don', '¥900', 'Katsu-don', 'no', 'no', 'October 2026.', 'sauce_katsudon'),
      it('', '', 'Curry katsu-don', '¥970', 'Katsu-don', 'no', 'no', 'October 2026.', 'curry_katsudon'),
      it('', '', 'Double katsu (add-on)', '¥450', 'Add-ons', 'no', 'no', 'October 2026.', 'double_katsu'),
    ] }, {
    cuisine: 'カツ丼の専門店 (2024〜2026年)・2026年10月のメニュー: カツ丼900円、大根おろしのおろしカツ丼900円、ソースカツ丼900円、カレーカツ丼970円、どれも赤だしつき・ごはん大盛り50円、卵ダブル50円、カツダブル450円 (2026年10月)・注文ごとに揚げる厚いロースのカツを8つに切ってごはんにのせ、だしで煮た卵をかける。卵をかけてもサクサク (2026年)・ソースカツ丼は千切りキャベツに温泉卵 (2026年9月)・カウンターにたくあん (2026年)',
    neighborhood: '東三国4-17-7。東三国駅から約200m (食べログ)、駅から2分、新大阪から10分の昔ながらの商店街の中 (2026年10月)',
    gf_detail: 'グルテンフリーではありません。どの丼にもパン粉をつけて揚げた豚のカツがのる。',
    vegan_detail: 'ヴィーガンではありません。豚のカツに、だしで煮た卵。',
    notes: '[カツ丼・東三国、店主ひとりと900円の丼] 東三国駅のそばの昔ながらの商店街にある、店主がひとりで切り盛りするカツ丼のカウンターで、昼はたいてい行列、BGM は Southern All Stars。注文ごとに厚いロースのカツを揚げて8つに切り、ごはんにのせてだしで煮た卵をかけるので、卵の下でもサクサク。赤だしつきで900円、カレーなら970円 (2026年10月)。ほかに大根おろしのおろしカツ丼、キャベツにのせたソースカツ丼。たくさん食べたい人はカツダブルや卵ダブルを数百円で。カウンターには豚への愛があふれる説明のカードも (2026年10月)。開店時間に行くのがいい。夜は早く終わり、口コミでは19時ごろまで。木曜から土曜は昼だけ。',
  });
}

save();
