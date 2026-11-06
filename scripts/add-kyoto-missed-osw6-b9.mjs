// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 9.
//   + 蕎麦流々 千角 Soba Ryuryu Senkaku (juwari soba and drinks in a Gion alley; adults only, no photos)
//   + 夜市的 点心酒場 好 御幸町店 Yoichi Teki Tenshin Sakaba Hao (night-market-style Chinese izakaya, Gokomachi)
//   + デザートカフェ長楽館 Dessert Cafe Chourakukan (afternoon tea in the 1909 Chourakukan mansion; Cafe WEST 100 2025)
//   + かさぎ屋 Kasagiya (Ninenzaka sweet shop, founded 1914 per a review; ohagi and Kameyama)
//   - skip 26035456 葱屋 にょろ助 先斗町, 26042764 油そば きりん寺 四条河原町店, 26021764 OGAWA COFFEE 京都駅店 (chains; see below)
//   Taken on 2026-11-05: `next core 200` gave にょろ助 (skipped), 千角 26034358, きりん寺 (skipped), 好 26035102;
//   `next notable 200` gave 長楽館 26006416, OGAWA COFFEE (skipped), かさぎ屋 26000596.
//   None of the four is in data/kyoto.json: grep by name (千角/Senkaku, 点心酒場/好/Hao, 長楽館/Chourakukan, かさぎ屋/Kasagi)
//   and address (大和町18-16, 船屋町363, 円山町604, 桝屋町349) found none. osaka_hao_zaimokucho ("好 (Hao)", a ramen shop
//   at 大阪府大阪市中央区材木町2-10) is unrelated. 好 has at least one other shop (a Kiyamachi SAKURA building shop in a
//   2019 Walkerplus article) — a small group at most, so drafted.
//   Greg's 2026-11-05 rulings: 千角 forbids photography inside (2026 reviews) — a house rule, not a posting ban, so
//   drafted. No remarks on anyone's looks are recorded.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-9');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26035456', 'chain already in data: にょろ助 is the eel brand of 際コーポレーション (Kiwa Corporation); tokyo_nyorosuke_tatsumiya_asak (にょろ助 東南屋 浅草) is in data/tokyo.json — a same-concept branch of a brand already in data.');
skip('26042764', 'chain already in data: 油そば きりん寺 — four Kirinji shops are in data/osaka.json (千日前店, アメ村店, 裏なんば店, なんば駅前店).');
skip('26021764', 'chain: 小川珈琲 / OGAWA COFFEE lists 11 directly run shops in Kyoto, Shiga and Tokyo (本店, 堺町錦店, 京都三条店, 白梅町店, 洛西店, 京都駅中央口店, 京都店, 野洲店, OGAWA COFFEE LABORATORY 桜新町・下北沢・麻布台) plus OGAWA COFFEE 京都駅店, per its careermap.jp job listing (https://www.careermap.jp/jobs/351860). Group of 5+ = chain.');

// ================================================================ 蕎麦流々 千角
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26034358/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '21:30']); const W = day(['11:30', '17:00']);
  put({
    id: 'kyoto_soba_ryuryu_senkaku', name: '蕎麦流々 千角 (Soba Ryuryu Senkaku)', category: 'OMNI',
    lat: 35.003040, lng: 135.772486, cuisine_type: 'udon_soba',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The soba is juwari (100% buckwheat) per 2026 reviews, but the dipping sauce is soy-based, the tempura uses batter, and no gluten information is published (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: soba sauce and broth are dashi-based, and the snacks include duck, firefly squid, shrimp and dashimaki (2026 reviews).',
    hours_raw: 'Monday, Tuesday, Friday–Sunday 11:30–21:30 (last order 20:30); Wednesday 11:30–17:00 (last order 16:00); closed Thursday (Tabelog). No one under 20 admitted (Tabelog). From 14:00 each guest must order a drink, or a seat charge applies (Tabelog); a July 2026 reviewer says alcohol must be ordered from 17:00 and there is a one-drink rule at weekends, and dashimaki and other snacks are served only to those ordering drinks (July and October 2026). No reservations, except soba kaiseki for groups of five or more, who must book (Tabelog); the reservation note asks for the ¥5,500 omakase appetizers (Tabelog). Photography inside is not allowed (2026 reviews). 10 seats; cash only; non-smoking (Tabelog). Down a dead-end alley off Yamato-oji just east of Shijo Ohashi; 2 min from Gion-Shijo Stn (Tabelog; March 2026).',
    hours: { 0: H, 1: H, 2: W, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Alley off Yamato-oji, east of Shijo Ohashi — 2 min from Gion-Shijo Stn',
    cuisine: 'Soba and sake for adults (2026 reviews) · very thin juwari soba: seiro, soba with wasabi miso, seasonal cold soba with fresh yuba and grilled eggplant or with sudachi, sesame dipping soba, kitsune soba, new-crop soba in season · snacks with drinks: dashimaki, sobagaki, oboro tofu, grilled duck, "duck kitsune" (minced duck in fried tofu), duck and green onion, simmered eggplant · tempura: firefly squid from Toyama, sakura shrimp, young ayu, natural sweet shrimp, tara-no-me, fuki-no-tō · omakase appetizers ¥5,500 · sake and soba shochu (2026 reviews; Tabelog)',
    website: null, gmaps: gm('蕎麦流々 千角 祇園'), menu_url: null,
    notes: "[Soba · Gion, juwari soba for drinkers] A 10-seat soba bar at the end of a dead-end alley just over Shijo Ohashi, where very thin juwari soba comes after sake and snacks: sobagaki, grilled duck, dashimaki, and seasonal tempura such as firefly squid. Mind the rules: adults only, a drink per person after 14:00, snacks only with drinks, and no photos. Reviewers love the soba and find the mood a little strict. Cash only; closed Thursday, Wednesday until 17:00.",
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed in the sources)'], origin: null,
      background: 'Reviewers in 2026 describe a dignified, slightly tense atmosphere set by the owner (March 2026), service that is polite but a little distant (March and July 2026), and the chef thanking guests from the back (July 2026). The house rules — adults only, drinks with snacks, no photography — are recorded on Tabelog and in reviews.',
      philosophy: null, specialty: 'Juwari soba; duck dishes; seasonal tempura.',
      anecdotes: [
        { text: 'A July 2026 diner who ordered oolong tea was told the dashimaki is a side dish for alcohol, served only to those who order drinks.', source: R + 'B531098648/' },
        { text: 'A May 2026 diner found the photo rule unclear and the service unfriendly, while praising the soba and sakura shrimp tempura.', source: R + 'B527529034/' },
        { text: '"Since photography was prohibited, I was able to relax and enjoy my time." — September 2026.', source: R + 'B535395146/' },
      ],
      japanese_sources_summary: '食べログ: そば、東山区大和町18-16、祇園四条駅から徒歩2分、月火金土日 11:30〜21:30 (L.O. 20:30)、水 11:30〜17:00 (L.O. 16:00)、木曜休み、20歳未満は入店不可、14時以降は各人お飲み物の注文を (ない場合はお席代)、5名以上はそば懐石の予約制、予約不可 (おまかせの前菜5,500円の注文をお願い)、10席、カード・電子マネー・QR 不可、禁煙。口コミ (2026年3〜10月、英語): 細い十割そば、そばがき、おぼろ豆腐、鴨、ホタルイカの天ぷら、桜海老、稚鮎、だし巻きはお酒を頼む人のみ、店内撮影禁止、袋小路の路地の奥、きちんとしたがやや緊張感のある接客。',
      confidence: 'medium', sources: [TB, R + 'B524250550/', R + 'B524315244/', R + 'B524832467/', R + 'B525688693/', R + 'B526604658/', R + 'B526751077/', R + 'B527529034/', R + 'B531098648/', R + 'B532571810/', R + 'B532782281/', R + 'B535395146/', R + 'B537009988/'] },
    cultural_comfort: { level: 'japanese', note: 'House rules matter: adults only, order drinks, no photos; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区大和町18-16',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.003040, 135.772486); cross-checked: GSI 京都府京都市東山区大和町18番地 (lot) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'Only the omakase appetizers have a published price (Tabelog); bills of about ¥3,000–15,000 a head in 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Omakase appetizers', '¥5,500', 'Snacks', 'ask', 'no', 'Tabelog.', 'omakase_appetizers'),
      it('', '', 'Juwari soba (seiro)', '', 'Soba', 'ask', 'no', '2026.', 'juwari_soba'),
      it('', '', 'Seasonal tempura (firefly squid, sakura shrimp)', '', 'Tempura', 'no', 'no', 'Spring 2026.', 'tempura'),
      it('', '', 'Sobagaki', '', 'Snacks', 'ask', 'no', 'March 2026.', 'sobagaki'),
    ] }, {
    cuisine: '大人のためのそばと日本酒 (2026年の口コミ)・細い十割そば: せいろ、わさび味噌のそば、生湯葉と焼き茄子や、すだちの季節の冷たいそば、胡麻だれのそば、きつねそば、季節の新そば・お酒のあて: だし巻き、そばがき、おぼろ豆腐、鴨焼き、Duck Kitsune (鴨のひき肉をはさんだ揚げ)、鴨ねぎ、茄子の煮浸し・天ぷら: Toyama のホタルイカ、桜海老、稚鮎、天然の甘海老、たらの芽、ふきのとう・おまかせの前菜5,500円・日本酒とそば焼酎 (2026年の口コミ、食べログ)',
    neighborhood: '祇園四条駅の近く、大和町の袋小路の路地。祇園四条駅から徒歩2分',
    gf_detail: '要確認。2026年の口コミではそばは十割だが、つゆは醤油で、天ぷらは衣を使い、グルテンの情報は公開されていない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。そばのつゆは出汁で、あてには鴨、ホタルイカ、海老、だし巻きがある (2026年の口コミ)。',
    notes: '[そば・祇園、酒飲みのための十割そば] 祇園四条駅のすぐ近く、袋小路の路地の奥にある10席のそばの店。日本酒とあて (そばがき、鴨焼き、だし巻き、ホタルイカなどの季節の天ぷら) のあとに、細い十割そば。決まりに注意: 20歳未満は入店不可、14時以降は1人1杯の飲み物、あてはお酒を頼む人のみ、店内撮影禁止。そばの評判は高く、雰囲気はやや厳しめという声。現金のみ。木曜休み、水曜は17時まで。',
  });
}

// ================================================================ 夜市的 点心酒場 好 御幸町店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26035102/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['17:00', '23:00']); const WE = day(['12:00', '15:00'], ['17:00', '23:00']);
  put({
    id: 'kyoto_yoichiteki_hao_gokomachi', name: '夜市的 点心酒場 好 御幸町店 (Yoichi Teki Tenshin Sakaba Hao)', category: 'OMNI',
    lat: 35.006101, lng: 135.766455, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: xiaolongbao, dumplings, shumai, dan dan noodles and soy- and bean-paste-based sauces throughout (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork, chicken and shrimp dishes; mapo tofu and soups with meat (2026 reviews).',
    hours_raw: 'Monday–Friday and days before holidays 17:00–23:00; Saturday, Sunday and holidays 12:00–15:00 and 17:00–23:00 (Tabelog); a Gurunavi listing gives Tuesday as closed. Reservations accepted; seat-only bookings may be asked to settle within 90 minutes when busy (Tabelog); often fully booked at night (2026 reviews). Starter charge ¥250 (Tabelog); free refills of shrimp crackers (2026 reviews). Free-flow drinks about ¥1,500 (July 2026); "Yoichi" course with free-flow drinks (August 2026). Weekend lunch sets about ¥1,200 (September 2026). 50 seats including a counter, tables, sofas and a terrace; non-smoking inside with a smoking area; cards, IC cards, iD and QUICPay; wheelchair accessible (Tabelog). Loud and lively (October 2026). On a corner of 御幸町通 south of Takoyakushi, 6 min from Exit 9 of Kyoto Kawaramachi Stn (Tabelog; April 2026).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '御幸町通 south of Takoyakushi — 6 min from Kyoto Kawaramachi Stn',
    cuisine: 'Chinese izakaya styled on a Taiwanese night market, cooked by a chef of 30 years (Tabelog, shop text) · saliva chicken, bang bang chicken, mapo tofu, Sichuan shrimp chili with mushrooms, shrimp mayo fried in the shell, twice-cooked pork, black-vinegar pork, drunken shrimp, beef with green peppers (2026 reviews) · dim sum: xiaolongbao, shumai, pan-fried dumplings · dan dan noodles, lu rou fan, char siu fried rice, tenshin rice · Tsingtao and Taiwanese fruit beers, Taiwanese spirits (Tabelog; 2026 reviews) · weekend lunch sets with dim sum and soup, e.g. sweet-and-sour pork, about ¥1,200 (September 2026)',
    website: null, gmaps: gm('夜市的 点心酒場 好 御幸町'), menu_url: TB + 'dtlmenu/',
    notes: "[Chinese izakaya · Kawaramachi, a Taiwanese night market indoors] A loud, cheerful corner izakaya done up like a Taiwanese night market, popular with students and tourists. The kitchen, led by a chef of 30 years, turns out saliva chicken, mapo tofu, a Sichuan shrimp chili, xiaolongbao that burst with soup and twice-cooked pork, with Taiwanese beers and free-flow drinks. Weekend lunch sets run about ¥1,200. One April 2026 diner reported rude, pushy service; most others found staff friendly. Book for evenings; ¥250 starter.",
    chef_bio: { chef_name: null, roles: ['Head chef with 30 years in Chinese cooking (Tabelog, shop text; unnamed)'], origin: null,
      background: 'Per Tabelog (the shop’s own text): authentic Chinese cooking by a veteran chef of 30 years, with a menu supervised, per the shop, by a grand-student of Chen Jianmin, in the lively mood of a night market; signature yodare chicken, mapo tofu and Sichuan shrimp chili. Run by a company (a corporate invoice registrant, Tabelog). A 2019 Walkerplus article describes a shop of the same name in a SAKURA building on Kiyamachi-dori.',
      philosophy: null, specialty: 'Saliva chicken; mapo tofu; xiaolongbao.',
      anecdotes: [
        { text: "\"Despite the restaurant being nearly empty with plenty of available seats, I was seated at a cold table right by the entrance (with the door wide open). In contrast, other customers who seemed to be part-time staff were shown to the cozy sofa seats in the back, which made me feel quite uneasy about the obvious disparity in treatment.\" — April 2026.", source: R + 'B526526929/' },
        { text: 'An April 2026 diner had a bad experience: pressured by a staff member for not ordering signature dishes, seated at a cold table by the open door while others were free, and plates cleared too quickly.', source: R + 'B526526929/' },
        { text: 'An October 2026 diner with a 19:30 booking was told the Tabelog coupon applied only to guests arriving by 18:30.', source: R + 'B536744581/' },
        { text: '"The complimentary shrimp chips are also available for refills and are absolutely delicious." — April 2026.', source: R + 'B533337046/' },
      ],
      japanese_sources_summary: '食べログ: 飲茶・点心、居酒屋、ラーメン、中京区御幸町通蛸薬師下ル船屋町363-1 1F、阪急京都河原町駅9番出口から徒歩6分、月〜金・祝前日 17:00〜23:00、土日祝 12:00〜15:00・17:00〜23:00、予約可 (席のみの予約は混雑時90分制)、お通し250円、50席 (カウンター、テーブル、ソファ、テラス)、禁煙 (店内に喫煙所)、カード・電子マネー可、車椅子可、中国料理30年のベテランのコックが作る夜市のような中華居酒屋、よだれ鶏、麻婆豆腐、四川風の海老チリ、青島ビール、台湾のフルーツビール。ぐるなび: 火曜休みとの掲載。口コミ (2026年3〜10月、英語): 小籠包、焼売、焼き餃子、担々麺、魯肉飯、回鍋肉、黒酢酢豚、飲み放題約1,500円、週末ランチの定食約1,200円、えびせんのおかわり自由、にぎやか、夜は満席になりやすい、接客への不満の声も。',
      confidence: 'medium', sources: [TB, 'https://gurunavi.com/en/kcmz101/rst', 'https://www.walkerplus.com/trend/matome/article/191292/', R + 'B526526929/', R + 'B527032578/', R + 'B528574165/', R + 'B530844457/', R + 'B531587942/', R + 'B532116274/', R + 'B533337046/', R + 'B533588520/', R + 'B534925546/', R + 'B535468051/', R + 'B535879035/', R + 'B536744581/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book for evenings; cards and IC cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区御幸町通蛸薬師下ル船屋町363-1 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.006101, 135.766455); cross-checked: GSI 京都府京都市中京区船屋町363番地 (lot) 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B535879035/', R + 'B532116274/'],
    price_note: 'Starter charge from Tabelog; lunch set and free-flow prices from July and September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Weekend lunch set (e.g. sweet-and-sour pork, with dim sum and soup)', '¥1,200', 'Lunch', 'no', 'no', 'September 2026.', 'lunch_set'),
      it('', '', 'Free-flow drinks', 'about ¥1,500', 'Drinks', '', '', 'July 2026.', 'nomihodai'),
      it('', '', 'Xiaolongbao', '', 'Dim sum', 'no', 'no', '2026.', 'xiaolongbao'),
      it('', '', 'Saliva chicken', '', 'Dishes', 'ask', 'no', '2026.', 'yodare_dori'),
      it('', '', 'Starter (otoshi)', '¥250', 'Starters', 'ask', 'ask', 'Tabelog.', 'otoshi'),
    ] }, {
    cuisine: '台湾の夜市を思わせる中華居酒屋。中国料理30年のコックが作る (食べログの店の紹介)・よだれ鶏、バンバンジー、麻婆豆腐、きのこ入りの四川風の海老チリ、殻ごと揚げた海老マヨ、回鍋肉、黒酢酢豚、酔っ払い海老、牛肉とピーマンの炒め物 (2026年の口コミ)・点心: 小籠包、焼売、焼き餃子・担々麺、魯肉飯、チャーシュー炒飯、天津飯・青島ビールと台湾のフルーツビール、台湾の酒 (食べログ、2026年の口コミ)・点心とスープ付きの週末ランチの定食 (酢豚など) 約1,200円 (2026年9月)',
    neighborhood: '蛸薬師の南の御幸町通。京都河原町駅から徒歩6分',
    gf_detail: '実際にはグルテンフリーではない。小籠包、餃子、焼売、担々麺のほか、醤油や豆板醤のたれが多い (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。豚、鶏、海老の料理で、麻婆豆腐やスープにも肉 (2026年の口コミ)。',
    notes: '[中華居酒屋・御幸町、店の中の台湾夜市] 台湾の夜市を模したにぎやかな角の中華居酒屋で、学生や旅行客に人気。30年のベテランのコックが、よだれ鶏、麻婆豆腐、四川風の海老チリ、スープのあふれる小籠包、回鍋肉を作り、台湾ビールや飲み放題と。週末のランチ定食は約1,200円。2026年4月の客は強引で失礼な接客を報告しているが、ほかの多くは気さくなスタッフと書く。夜は予約を。お通し250円。',
  });
}

// ================================================================ デザートカフェ長楽館
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26006416/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '18:30']);
  put({
    id: 'kyoto_dessert_cafe_chourakukan', name: 'デザートカフェ長楽館 (Dessert Cafe Chourakukan)', category: 'OMNI',
    lat: 35.003103, lng: 135.780270, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: afternoon tea with scones and pastries, tarts, millefeuille, galette des rois, sandwiches and a beef katsu sandwich (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: cream-and-butter pastries, parfaits and meat sandwiches (2026 reviews).',
    hours_raw: '11:00–18:30 (last order 18:00) daily; closed irregularly (Tabelog). Café seats first come, first served, with some days reserved; weekday walk-ins usually fine (January and November 2026). Afternoon tea 12:00–18:00 by reservation only, for two or more (Tabelog); booked via TableCheck (September 2026). 10% service charge (Tabelog). 100 seats in several period rooms; private rooms for a fee; non-smoking with an outdoor smoking area; cards; parking for 10 cars (Tabelog). Popular parfaits can sell out (October 2026). Up the slope east of Yasaka Shrine, by Maruyama Park; 10 min from Gion-Shijo Stn (Tabelog; 2026 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Maruyama Park, east of Yasaka Shrine — 10 min from Gion-Shijo Stn',
    cuisine: 'Café in the Chourakukan, a Western-style mansion built in 1909 (2026 reviews) · seasonal afternoon tea ¥6,500 (September 2026), e.g. fig and tea in autumn, with savouries, sweets and scones on Herend china and a choice of teas (October 2026) · seasonal fig parfait, shine muscat tart, millefeuille and the modern-tile tart in cake sets; galette des rois in January · mixed sandwich and beef fillet katsu sandwich · Chourakukan blend tea, royal milk tea, coffee (2026 reviews) · souvenirs such as a cigarette-shaped pie (October 2026)',
    website: null, gmaps: gm('長楽館 京都 円山'), menu_url: null,
    notes: "[Café · Maruyama Park, tea in a Meiji mansion] The café of the Chourakukan, a stone Western-style mansion of 1909 beside Maruyama Park, built as a guest house by a tobacco magnate. Each room has its own style — stained glass, heavy furniture, Art Nouveau touches — and the seasonal afternoon tea (¥6,500, booked ahead) comes on Herend china; without a booking, a café seat gets you a fig parfait, a shine muscat tart or a beef katsu sandwich. Add 10% service. Open daily 11:00–18:30.",
    chef_bio: { chef_name: null, roles: ['Café in a historic building; no staff named'], origin: null,
      background: 'Per reviewers in 2026: the Chourakukan was built in 1909 (late Meiji) as a guest house by a businessman who made a fortune in tobacco, and the design includes light and smoke motifs. Reviewers disagree on its status — one (August 2026) calls it a tangible cultural property of Kyoto, another (September 2026) an important cultural property of the country. Tabelog Cafe WEST "Tabelog 100" 2025.',
      philosophy: null, specialty: 'Seasonal afternoon tea; fig parfait.',
      anecdotes: [
        { text: '"If I had to be picky, I would have preferred the scones to be a bit warmer, as they were only slightly warm." — October 2026.', source: R + 'B521895623/' },
        { text: 'An October 2026 visitor found the seasonal fig parfait and the modern-tile tart sold out and settled for the house blend tea.', source: R + 'B537896115/' },
        { text: 'An October 2026 visitor heard from a taxi driver that the house belonged to someone who succeeded in tobacco, and noticed light and smoke in the design.', source: R + 'B536920853/' },
      ],
      japanese_sources_summary: '食べログ: カフェ・ケーキ、東山区八坂鳥居前東入円山町604 長楽館、祇園四条駅から徒歩10分、毎日11:00〜18:30 (L.O. 18:00)、不定休、カフェは先着順 (予約枠のある日も)、アフタヌーンティーは要予約 (2名から、12:00〜18:00)、サービス料10％、100席、個室は別料金、禁煙 (屋外に喫煙所)、カード可、駐車場10台、カフェ WEST 百名店 2025。口コミ (2026年1〜11月、英語): 1909年の洋館、煙草の事業で成功した実業家の迎賓館、京都市の有形文化財とも国の重要文化財とも書かれる、アフタヌーンティー6,500円、Herend の器、いちじくのパフェ、シャインマスカットのタルト、ミルフィーユ、牛フィレカツサンド、ガレット・デ・ロワ、限定品の売り切れ。',
      confidence: 'medium', sources: [TB, R + 'B512950515/', R + 'B520839714/', R + 'B520839763/', R + 'B521895623/', R + 'B534863487/', R + 'B535409231/', R + 'B535785717/', R + 'B536920853/', R + 'B537864563/', R + 'B537896115/', R + 'B538121994/', R + 'B538711565/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book afternoon tea online; café seats first come; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区八坂鳥居前東入円山町604 長楽館',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026; Cafe WEST Tabelog 100 2025.' },
    pin_source: `Tabelog ${TB} (35.003103, 135.780270); GSI matches only the town 京都府京都市東山区円山町 (town) 226 m away, the centre of a large park town (GSI only this round, no OSM); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535409231/'],
    price_note: 'Afternoon tea price from a September 2026 review; plus 10% service (Tabelog); other prices not read.', last_checked: TODAY, items: [
      it('', '', 'Seasonal afternoon tea (reservation, two or more)', '¥6,500', 'Afternoon tea', 'no', 'no', 'September 2026.', 'afternoon_tea'),
      it('', '', 'Fig parfait set (autumn)', '', 'Parfaits', 'ask', 'no', 'October 2026.', 'fig_parfait'),
      it('', '', 'Beef fillet katsu sandwich', '', 'Café', 'no', 'no', 'September–October 2026.', 'katsu_sando'),
    ] }, {
    cuisine: '1909年築の洋館、長楽館のカフェ (2026年の口コミ)・季節のアフタヌーンティー6,500円 (2026年9月)、秋はいちじくと紅茶など、セイボリー、スイーツ、スコーンを Herend の器で、紅茶も選べる (2026年10月)・ケーキセットの季節のいちじくのパフェ、シャインマスカットのタルト、ミルフィーユ、モダンなタイルのタルト、1月はガレット・デ・ロワ・ミックスサンドと牛フィレのカツサンド・長楽館ブレンドの紅茶、ロイヤルミルクティー、コーヒー (2026年の口コミ)・煙草の形のパイなどのお土産 (2026年10月)',
    neighborhood: '八坂神社の東、円山公園。祇園四条駅から徒歩10分',
    gf_detail: '実際にはグルテンフリーではない。スコーンやペストリーのアフタヌーンティー、タルト、ミルフィーユ、ガレット・デ・ロワ、サンドイッチ、牛カツサンド (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。クリームとバターの菓子、パフェ、肉のサンドイッチ (2026年の口コミ)。',
    notes: '[カフェ・円山公園、明治の洋館でお茶] 円山公園のそば、煙草で財をなした実業家が迎賓館として1909年に建てた石造りの洋館、長楽館のカフェ。部屋ごとに趣が異なり、ステンドグラス、重厚な家具、アール・ヌーヴォーの装飾。季節のアフタヌーンティー (6,500円、要予約) は Herend の器で。予約なしでもカフェ席でいちじくのパフェ、シャインマスカットのタルト、牛カツサンドを。サービス料10％。毎日11時〜18時30分。',
  });
}

// ================================================================ かさぎ屋
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26000596/'; const R = TB + 'dtlrvwlst/';
  const H = day(['10:00', '17:00']);
  put({
    id: 'kyoto_kasagiya_ninenzaka', name: 'かさぎ屋 (Kasagiya)', category: 'OMNI',
    lat: 34.998145, lng: 135.780824, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Ohagi, Kameyama, zenzai and kakigori are made from mochi rice, beans and sugar and may be wheat-free, but no ingredient lists are published (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Bean-and-rice sweets are plant-based in principle, but the shiruko shake and milk kakigori use dairy and no ingredient lists are published (2026 reviews).',
    hours_raw: '10:00–17:00 daily; hours and closed days may change (Tabelog). No reservations; cash only (Tabelog; September 2026). One order per person (September 2026). Free sencha in a pot, refilled on request (2026 reviews). A short queue is common; turnover is quick (September 2026). Tabelog gives 20 seats; 2026 reviewers describe a small room of about five seats. Non-smoking (Tabelog). Halfway up Ninenzaka on the way from Kiyomizu-dera to Yasaka Shrine (2026 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Ninenzaka, below Kiyomizu-dera — on the walk to Yasaka Shrine',
    cuisine: 'Old sweet shop, founded in 1914 per an October 2026 review (2026 reviews) · three-colour ohagi (red bean, smooth bean paste, white bean or kinako in summer, or matcha) ¥900 (October 2026) · Kameyama: steamed whole red beans with grilled mochi and no soup, with pickles · Kyoto-style zenzai with two small mochi, iso-maki · kakigori: Uji Kintoki with shiratama, ice Uji shiratama · shiruko shake · usucha with a small ohagi (2026 reviews)',
    website: null, gmaps: gm('かさぎ屋 二年坂'), menu_url: null,
    notes: "[Sweet shop · Ninenzaka, ohagi and Kameyama since 1914] A small, old sweet shop halfway up Ninenzaka, Taisho and Showa in feel, said to have been a favourite of the artist Yumeji Takehisa. Order the three-colour ohagi (¥900) — big, soft mochi rice under whole red beans, smooth bean paste and kinako or white bean — or Kameyama, a soupless bowl of fluffy steamed beans over grilled mochi; summer brings Uji Kintoki kakigori. Free sencha by the pot. One order each; cash only. Daily 10:00–17:00.",
    chef_bio: { chef_name: null, roles: ['Long-established sweet shop; no one is named in the sources'], origin: null,
      background: 'An October 2026 reviewer gives the founding year as 1914; a September 2026 reviewer calls it over 100 years old on Ninenzaka; a November 2026 reviewer says it was a favourite of the artist Yumeji Takehisa. A September 2026 reviewer found the service a little cool but proper. Tabelog Japanese sweets WEST "Tabelog 100" 2023, 2026.',
      philosophy: null, specialty: 'Three-colour ohagi; Kameyama.',
      anecdotes: [
        { text: '"In Kansai, there are three types of "zenzai." … the third is "Kameyama," which is made with chunky red beans but without soup!" — November 2026.', source: R + 'B538458062/' },
        { text: '"The service may seem a bit cold, but it was actually quite proper, so that’s a plus." — September 2026.', source: R + 'B536289350/' },
        { text: 'A September 2026 visitor was third in line and seated within about 10 minutes, with free sencha refills.', source: R + 'B536487586/' },
      ],
      japanese_sources_summary: '食べログ: 甘味処・カフェ・かき氷、東山区桝屋町349、毎日10:00〜17:00、予約不可、20席、カード・電子マネー・QR 不可、禁煙、和菓子・甘味処 WEST 百名店 2023・2026。口コミ (2026年9〜11月、英語): 二年坂、1914年創業との記述、Yumeji Takehisa が愛した店との記述、三色おはぎ900円、Kameyama、ぜんざい、Iso-maki、宇治金時、Shiruko Shake、薄茶と小さなおはぎ、無料の煎茶、1人1品、現金のみ、席は5席ほどという口コミ。',
      confidence: 'medium', sources: [TB, R + 'B522278712/', R + 'B523176668/', R + 'B535118703/', R + 'B535617876/', R + 'B536289350/', R + 'B536487586/', R + 'B536725555/', R + 'B537083351/', R + 'B537721080/', R + 'B538458062/', R + 'B538652290/', R + 'B60776052/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One order per person; cash only; sencha is free.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区桝屋町349',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026; Japanese sweets WEST Tabelog 100 2026.' },
    pin_source: `Tabelog ${TB} (34.998145, 135.780824); cross-checked: GSI 京都府京都市東山区桝屋町349番地 (lot) 58m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537083351/'],
    price_note: 'Only the three-colour ohagi price was read (October 2026).', last_checked: TODAY, items: [
      it('', '', 'Three-colour ohagi', '¥900', 'Sweets', 'ask', 'ask', 'October 2026.', 'sanshoku_ohagi'),
      it('', '', 'Kameyama (steamed red beans with grilled mochi)', '', 'Sweets', 'ask', 'ask', '2026.', 'kameyama'),
      it('', '', 'Uji Kintoki kakigori', '', 'Kakigori', 'ask', 'ask', 'September–October 2026.', 'uji_kintoki'),
    ] }, {
    cuisine: '口コミによれば1914年創業の甘味処 (2026年の口コミ)・三色おはぎ (粒あん、こしあん、白あんか夏はきな粉、または抹茶) 900円 (2026年10月)・Kameyama: 汁のない蒸した粒の小豆と焼き餅、香の物付き・小さな餅2つの京風のぜんざい、Iso-maki・かき氷: 白玉の宇治金時、Ice Uji Shiratama・Shiruko Shake・小さなおはぎ付きの薄茶 (2026年の口コミ)',
    neighborhood: '清水寺の下、二年坂。八坂神社へ向かう道すがら',
    gf_detail: '要確認。おはぎ、Kameyama、ぜんざい、かき氷は餅米、豆、砂糖で作り小麦なしかもしれないが、原材料は公開されていない (2026年の口コミ)。',
    vegan_detail: '要確認。豆と米の甘味は基本的に植物性だが、Shiruko Shake やミルクのかき氷は乳製品を使い、原材料は公開されていない (2026年の口コミ)。',
    notes: '[甘味処・二年坂、1914年からのおはぎと Kameyama] 二年坂の中ほど、大正・昭和の趣の小さな甘味処。画家の Yumeji Takehisa が愛したと口コミにある。大きくやわらかい餅米に粒あん、こしあん、きな粉や白あんの三色おはぎ (900円) か、汁のない蒸した小豆を焼き餅にのせた Kameyama を。夏は宇治金時のかき氷。煎茶はポットで無料。1人1品、現金のみ。毎日10時〜17時。',
  });
}

save();
