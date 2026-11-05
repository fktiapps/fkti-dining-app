// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 4.
//   + 桃園亭 本店 Touen Tei Honten (Peking-style Chinese with a Higashiyama view, 13th floor at Shijo Kawaramachi; from about 1914)
//   + ゆったり 炙ジビエとワイン 炭然 Yuttari Aburi Gibier to Wine Tanzen (charcoal-grilled game and wine in Pontocho, to 1:00)
//   + むろまち 加地 Muromachi Kaji (nine-seat Japanese counter of fish and sake near Shijo Shinmachi; Tabelog Award Bronze 2019, 2020)
//   + KANEGURA (wagyu nikunabe izakaya south of Bukkoji; Izakaya WEST Tabelog 100 2025, 2026)
//   Picked on 2026-11-05: the first two with id mod 6 = 2 from `queue.mjs kyoto-missed next core 200` (26000078, 26019308)
//   and from `next notable 200` (26018600, 26036774). None is in data/kyoto.json: grep by name (桃園/Touen, 炭然/Tanzen,
//   加地/Kaji, KANEGURA/カネグラ/伖) and address (稲荷町335, 鍋屋町220, 中野之町185, 万里小路町187) found none.
//   Nearest existing pins: kyo_loco_chicken 40 m from Touen Tei; kyoto_katsugyo_izakaya_marufuku 45 m from Tanzen;
//   kyr_gyoza_dokoro_takatsuji_s 257 m from Kaji; kyoto_takatsuji_kasui 163 m from KANEGURA. None within 3 m.
//   Group checks: Touen Tei's site names one sister shop, 中国料理 龍門 (a different name). KANEGURA: a 2024 foodle.pro post
//   names its instigators as 伊藤氏 and 抜木氏, 伊藤氏 being the 大将 of にくの匠 三芳 (in data as
//   kyoto_niku_no_takumi_miyoshi_gion) — a different concept (meat kappo vs nikunabe izakaya), so drafted.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-4');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 桃園亭 本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26000078/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://touentei.com/'; const LUNCH = SITE + 'lunch/';
  const H = day(['11:00', '14:30'], ['17:00', '21:00']);
  put({
    id: 'kyoto_touentei_honten', name: '桃園亭 本店 (Touen Tei Honten)', category: 'OMNI',
    lat: 35.001823, lng: 135.768781, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A Chinese menu of noodles, fried rice, sweet and sour pork, spring rolls and soy- and miso-based sauces; no gluten information (official lunch menu; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options, but no vegetarian dishes are named on the lunch menu or in reviews (Tabelog; official site).',
    hours_raw: 'Lunch 11:00–14:30 and dinner 17:00–21:00 (both last order, official site); closed Monday, open when Monday is a holiday (official site). Tabelog adds that lunch courses (12:00–13:30) are by reservation. Reservations taken by phone or online (official site). Cards accepted, but not for lunch set meals; PayPay accepted (Tabelog). 120 seats, a banquet room for up to 100 and a private room for 4; non-smoking; parking for 4 cars, booked by the day before (official site; Tabelog). On the 13th floor of the 宝源ビル: take the lift at the back of the ground-floor lobby (October 2026). 2 min from Hankyu Kawaramachi Stn (official site).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kawaramachi-dori just south of Shijo — 2 min from Hankyu Kawaramachi Stn',
    cuisine: 'Long-established Peking-style Chinese restaurant, 13 floors up with a view of Higashiyama (official site; 2026 reviews) · lunch: noodle-and-mini-bowl set ¥1,200 (ramen, Tianjin noodles, tantanmen or gomoku noodles with Tianjin rice, mapo don or chuka don); crab omelette, mapo tofu or chicken in sweet miso set ¥1,200; happosai, tantanmen or sweet and sour pork set ¥1,300; summer cold noodles ¥1,000, set ¥1,400; three ¥2,000 sets, e.g. shrimp chili with green pepper and beef (official lunch menu) · dinner: courses from about ¥3,000 (May 2026), fried rice, shrimp chili, Shaoxing wine, Tsingtao beer (2026 reviews)',
    website: SITE, gmaps: gm('中国料理 桃園亭 京都 河原町'), menu_url: LUNCH,
    notes: '[Chinese · Shijo Kawaramachi, a century-old restaurant with a Higashiyama view] A Chinese restaurant whose history goes back to about 1914, now on the 13th floor of a building just south of the Shijo Kawaramachi crossing — look for the antiques and stone lion-dogs in the ground-floor lobby and take the lift at the back. The reward is a wide window over Higashiyama, from Chion-in and Yasaka Shrine to Kiyomizu-dera. Lunch sets are good value (¥1,200–1,300, e.g. mapo tofu or sweet and sour pork); dinner courses start around ¥3,000. Big tables suit groups; two diners found them awkward for a pair. Closed Monday.',
    chef_bio: { chef_name: null, roles: ['Restaurant founded by 王澤文 (official site); present owners not named'], origin: null,
      background: 'Per the official site: 王澤文, from Shandong, opened a shop selling noodles, steamed buns and fried rice on Teramachi around 1914 (Taisho 3); with three friends it was named 桃園亭 after the Peach Garden Oath of the Three Kingdoms story. In the mid-Showa period it moved to a three-storey building on Kawaramachi and by then called itself pure Peking cuisine, a line the present restaurant keeps. The site lists one sister shop, 中国料理 龍門.',
      philosophy: 'Per the official site: to carry on the pure Peking cuisine the restaurant has stood for over more than a century.',
      specialty: 'Sweet and sour pork; shrimp chili; lunch set meals.',
      anecdotes: [
        { text: 'An October 2026 diner arrived right at opening to get a window seat, and from it named Chion-in, Yasaka Shrine, the Gion Kaku, Ryozen Kannon and Kiyomizu-dera.', source: R + 'B537622955/' },
        { text: '"The cold noodles were topped with delicious vinegared jellyfish" — the summer cold-noodle lunch set, September 2026.', source: R + 'B536396048/' },
        { text: 'A May 2026 visitor found the food delicious and lightly seasoned, the service a bit distant, and the big tables awkward for two.', source: R + 'B529157460/' },
      ],
      japanese_sources_summary: '公式サイト (touentei.com): 創業100有余年、山東出身の王澤文が大正三年 (1914年) 頃に寺町で麺・饅頭・炒飯の店を開き、三人の友人とともに『桃園の誓い』の故事から「桃園亭」と命名、昭和中期に河原町の三階建ての建物に移転し「純北京料理」を標榜、姉妹店 中国料理 龍門、下京区河原町通四条下る稲荷町335 宝源ビル13階、昼11:00〜14:30 (L.O)・夜17:00〜21:00 (L.O)、月曜定休 (祝日は営業)、全面禁煙、駐車場4台 (前日までに予約)、宴会場最大100名、個室4名。ランチ: ラーメンとミニ丼1,200円、かに玉・麻婆豆腐・鶏の甘みそ定食1,200円、八宝菜・担々麺・酢豚定食1,300円、夏の冷麺1,000円 (セット1,400円)、「福」「禄」「寿」定食2,000円。食べログ: 中華料理・飲茶、120席、ランチのコースは予約制、カード可 (ランチの定食は不可)、PayPay 可、ベジタリアンメニューあり。',
      confidence: 'medium', sources: [TB, SITE, LUNCH, R + 'B522610779/', R + 'B525575434/', R + 'B528738423/', R + 'B529078970/', R + 'B529157460/', R + 'B532137084/', R + 'B536396048/', R + 'B536574023/', R + 'B537151627/', R + 'B537622955/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Take the lift from the back of the lobby to the 13th floor; no cards for lunch set meals (PayPay accepted).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区河原町通四条下る稲荷町335 宝源ビル13階',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.001823, 135.768781); cross-checked: GSI 京都府京都市下京区稲荷町335番地 (lot) 50m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [LUNCH],
    price_note: 'Official lunch menu (tax included, undated).', last_checked: TODAY, items: [
      it('お好みのラーメン＋お好みのミニ丼', '', 'Noodles and mini rice bowl of your choice', '¥1,200', 'Lunch', 'ask', 'ask', '+¥100 for gomoku noodles or chuka don.', 'noodle_minidon_set'),
      it('麻婆豆腐定食', '', 'Mapo tofu set', '¥1,200', 'Lunch', 'ask', 'ask', '', 'mapo_tofu_set'),
      it('鶏の甘みそ定食', '', 'Chicken in sweet miso set', '¥1,200', 'Lunch', 'ask', 'no', '', 'chicken_sweet_miso_set'),
      it('酢豚定食', '', 'Sweet and sour pork set', '¥1,300', 'Lunch', 'ask', 'no', '', 'subuta_set'),
      it('担々麺定食', '', 'Tantanmen set', '¥1,300', 'Lunch', 'ask', 'no', '', 'tantanmen_set'),
      it('「禄」定食　エビチリ・チンジャオロース', '', '"Roku" set: shrimp chili and green pepper with beef', '¥2,000', 'Lunch', 'ask', 'no', '', 'roku_set'),
    ] }, {
    cuisine: '東山を望む13階の老舗の北京料理 (公式サイト、2026年の口コミ)・ランチ: ラーメン・天津麺・担々麺・五目湯麺と天津飯・麻婆丼・中華丼のミニ丼のセット1,200円、かに玉・麻婆豆腐・鶏の甘みその定食1,200円、八宝菜・担々麺・酢豚の定食1,300円、夏の冷麺1,000円 (セット1,400円)、2,000円の定食3種 (たとえばエビチリとチンジャオロース) (公式ランチメニュー)・夜: 約3,000円からのコース (2026年5月)、炒飯、エビチリ、紹興酒、青島ビール (2026年の口コミ)',
    neighborhood: '四条のすぐ南の河原町通。阪急河原町駅から徒歩2分',
    gf_detail: '要確認。麺、炒飯、酢豚、春巻き、醤油や味噌のたれの中華料理。グルテンの情報はない (公式ランチメニュー、2026年の口コミ)。',
    vegan_detail: '要確認。食べログはベジタリアンメニューありとするが、ランチメニューにも口コミにもベジタリアンの料理名は出てこない (食べログ、公式サイト)。',
    notes: '[中華・四条河原町、東山を望む百年の老舗] 1914年頃にさかのぼる中国料理店。今は四条河原町の交差点のすぐ南のビルの13階にあり、1階ロビーの骨董と狛獅子が目印で、奥のエレベーターで上がる。窓の外には Chion-in、Yasaka Shrine から Kiyomizu-dera までの東山。ランチの定食はお得 (1,200〜1,300円、麻婆豆腐や酢豚など)、夜のコースは約3,000円から。大きなテーブルはグループ向きで、2人だと落ち着かなかったという声も。月曜休み。',
  });
}

// ================================================================ ゆったり 炙ジビエとワイン 炭然
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26019308/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://tanzen-pontocho.com/';
  const H = day(['17:00', '01:00']);
  put({
    id: 'kyoto_tanzen_pontocho', name: 'ゆったり 炙ジビエとワイン 炭然 (Yuttari Aburi Gibier to Wine Tanzen)', category: 'OMNI',
    lat: 35.004405, lng: 135.77103, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Charcoal-grilled game and vegetables with wine sauces, plus pasta and appetizers; no gluten information (official site; 2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options, and the charcoal-grilled vegetables (e.g. Awaji onion, manganji pepper) are praised, but the menu centres on game meat (Tabelog; 2025–2026 reviews).',
    hours_raw: 'Daily 17:00–1:00, last food order 24:00, drinks 24:30 (Tabelog); the official site gives 18:00–1:00 (last order 0:30). Irregular closures, posted monthly (November 2026: Tabelog lists the 11th and 25th, the official site the 6th and 23rd). Same-day reservations online or by phone; 16:00 bookings by noon; tables released 30 minutes after the booking time (Tabelog). Cashless only: cards and QR payments including PayPay and Alipay (Tabelog; May 2025). No charge. 18 seats: a 7-seat counter and sofa seats; non-smoking; English menu; BYO wine or sake ¥3,630, spirits ¥6,050 (Tabelog). Second floor of a building at the Shijo end of Pontocho (official site; November 2024).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Pontocho at the Shijo end — 1 min from Gion-Shijo Stn',
    cuisine: 'Charcoal-grilled game (gibier) and wine bar: meat grilled slowly to order for 20–30 minutes, then rested; deer, boar and bear by season, plus wagyu and sausages (official site) · grilled brown bear (Hokkaido higuma) ¥3,630, reserve ahead (May 2025) · also rabbit, duck, raccoon dog, nutria, capybara, kangaroo, seal and lamb on various days (2024–2026 reviews) · Tsudoi course (book the day before): skewers of deer, boar, pheasant, rabbit and quail (official site) · rabbit and rapeseed Spanish omelette ¥847, octopus carpaccio ¥1,210, shrimp tomato pasta ¥1,815, wild boar bolognese ¥1,815 (May 2025) · charcoal-grilled vegetables, appetizer platters · wide wine list, sake, shochu, cocktails',
    website: SITE, gmaps: gm('炭然 先斗町'), menu_url: SITE,
    notes: '[Game & wine · Pontocho, charcoal-grilled bear, boar and deer until 1 a.m.] Up a flight of stairs at the Shijo end of Pontocho, a snug wine bar with a counter and hidden sofa nooks that grills game over charcoal — deer, boar and Hokkaido brown bear, with rarer meats such as nutria, capybara or kangaroo on some nights. The meat takes 20–30 minutes, so order early and start with the appetizer platter, the much-praised grilled vegetables (the sweet onion especially) or a pasta. Brown bear was ¥3,630 a portion in May 2025 (book it ahead). Open nightly to 1:00, last orders around midnight. Cashless only.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed in the sources)'], origin: null,
      background: 'Tabelog gives the opening as 1 December 2011. Per the official site, the shop grills to order over charcoal for 20–30 minutes — grilling, wrapping and resting the meat — so that guests feel "gibier is delicious".',
      philosophy: 'Per the official site: to make guests feel that gibier is delicious, the cooking method is the point.',
      specialty: 'Charcoal-grilled brown bear and other game; grilled vegetables.',
      anecdotes: [
        { text: '"We have bear meat available year-round, but we can\'t guarantee whether it will be Higuma or Tsukinowaguma that we receive." — the staff, May 2025.', source: R + 'B506918794/' },
        { text: 'A November 2024 newcomer to game, unsure what to order, had raccoon dog, duck, wild rabbit and venison on the manager\'s advice and found none of it gamey.', source: R + 'B495663074/' },
        { text: 'A May 2025 diner found the table seating cramped and noisy and the dishes slow to arrive.', source: R + 'B506510264/' },
        { text: '"I\'m really happy that the last order is at midnight, making it perfect for after work!" — February 2026.', source: R + 'B522318132/' },
      ],
      japanese_sources_summary: '公式サイト (tanzen-pontocho.com): ゆったり 炙ジビエとワイン 炭然 (たんぜん)、先斗町の“大人の隠れ家”、2階、炭火焼のジビエは鹿・猪・熊など季節により変更、和牛・ソーセージ・前菜も、深夜1時まで、注文を受けてから炭火で20〜30分、焼いて包んで寝かせる、炭然コース 獣達の集 (前日予約限定6品、鹿・猪・きじ・うさぎ・うずらの串焼き)、18:00〜1:00 (0:30 L.O.)、不定休 (11月は6日・23日)、18席、全席禁煙。食べログ: ジビエ料理・パスタ・ダイニングバー、中京区先斗町通四条上ル鍋屋町220-6 弥栄ビル先斗町2F、毎日17:00〜1:00、完全キャッシュレス、チャージなし、英語メニュー、持ち込み料あり、2011年12月1日オープン。口コミ (2024〜2026年、英語): ヒグマの炭火焼3,630円、うさぎ、鴨、アライグマ、ヌートリア、カピバラ、カンガルー、焼き野菜。',
      confidence: 'medium', sources: [TB, SITE, R + 'B495663074/', R + 'B506510264/', R + 'B506918794/', R + 'B508099928/', R + 'B520654367/', R + 'B522318132/', R + 'B523383727/', R + 'B526290651/', R + 'B528390283/', R + 'B532540086/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu (Tabelog); staff advise newcomers to game; cashless only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区先斗町通四条上ル鍋屋町220-6 弥栄ビル先斗町2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (November 2026 closures) and Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.004405, 135.771030); cross-checked: GSI 京都府京都市中京区鍋屋町220番地 (lot) 19m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B506918794/', SITE],
    price_note: 'Prices from a May 2025 review; the game changes daily.', last_checked: TODAY, items: [
      it('', '', 'Hokkaido brown bear, charcoal-grilled (reserve ahead)', '¥3,630', 'Charcoal grill', 'ask', 'no', 'May 2025.', 'higuma_grill'),
      it('', '', 'Rabbit and rapeseed Spanish omelette', '¥847', 'Appetizers', 'ask', 'no', 'May 2025.', 'rabbit_omelette'),
      it('', '', 'Octopus carpaccio', '¥1,210', 'Appetizers', 'ask', 'no', 'May 2025.', 'octopus_carpaccio'),
      it('', '', 'Shrimp tomato pasta', '¥1,815', 'Pasta', 'no', 'no', 'May 2025.', 'shrimp_pasta'),
      it('', '', 'Wild boar bolognese', '¥1,815', 'Pasta', 'no', 'no', 'May 2025.', 'boar_bolognese'),
    ] }, {
    cuisine: '炭火焼きのジビエとワインの店: 注文を受けてから炭火で20〜30分じっくり焼き、休ませる。鹿、猪、熊など季節による、和牛やソーセージも (公式サイト)・ヒグマの炭火焼3,630円、要予約 (2025年5月)・日によってうさぎ、鴨、アライグマ、ヌートリア、カピバラ、カンガルー、アザラシ、ラムも (2024〜2026年の口コミ)・炭然コース 獣達の集 (前日予約限定): 鹿、猪、きじ、うさぎ、うずらの串焼き (公式サイト)・うさぎと菜の花のスペイン風オムレツ847円、タコのカルパッチョ1,210円、海老のトマトパスタ1,815円、猪のボロネーゼ1,815円 (2025年5月)・炭火焼き野菜、前菜の盛り合わせ・豊富なワイン、日本酒、焼酎、カクテル',
    neighborhood: '先斗町の四条側の入口。祇園四条駅から徒歩1分',
    gf_detail: '要確認。炭火焼きのジビエや野菜にワインのソース、パスタや前菜も。グルテンの情報はない (公式サイト、2025〜2026年の口コミ)。',
    vegan_detail: '要確認。食べログはベジタリアンメニューありとし、炭火焼き野菜 (Awaji Island の玉ねぎ、万願寺とうがらしなど) は好評だが、メニューの中心はジビエ (食べログ、2025〜2026年の口コミ)。',
    notes: '[ジビエとワイン・先斗町、深夜1時までの熊、猪、鹿の炭火焼き] 先斗町の四条側の入口、階段を上がった2階の、カウンターと隠れたソファ席のある小さなワインバー。炭火で焼くのは鹿、猪、北海道のヒグマ、日によってはヌートリア、カピバラ、カンガルーなど珍しい肉も。肉は焼き上がりに20〜30分かかるので早めに頼み、まずは前菜の盛り合わせや評判の焼き野菜 (特に甘い玉ねぎ)、パスタを。ヒグマは2025年5月に1人前3,630円 (要予約)。毎晩1時まで、ラストオーダーは0時ごろ。キャッシュレスのみ。',
  });
}

// ================================================================ むろまち 加地
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26018600/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '23:00']);
  put({
    id: 'kyoto_muromachi_kaji', name: 'むろまち 加地 (Muromachi Kaji)', category: 'OMNI',
    lat: 34.998836, lng: 135.757779, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Japanese counter cooking with sashimi in soy sauce, simmered dishes, tempura, dashimaki and clay-pot rice; no gluten information (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish-and-sake counter; vegetables come as simmered dishes or tempura alongside fish (2024–2026 reviews).',
    hours_raw: '18:00–23:00, last food order 22:00, drinks 22:30; closed Thursday (Tabelog). Two seatings, at 18:00 and 20:15 (October 2024; October 2026). Booking essential (October 2024); online bookings through the shop\'s Instagram (Tabelog). 9 counter seats (Tabelog), though a September 2026 diner had eaten in a private room on an earlier visit. Non-smoking, smoking area outside; cards accepted (Tabelog). 5–10 min walk from Gojo Stn (Tabelog). Opened 18 August 2011 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Matsubara-dori near Shinmachi — 5–10 min walk from Gojo Stn',
    cuisine: 'Counter of seasonal Japanese dishes and sake: an 8-dish course or à la carte (October 2026) · the hassun appetizer under leaves (reserve it) · sashimi platters with soy sauce, nikiri-zake and fish-liver miso, often with saba sushi · simmered octopus, roast beef, "adult" potato salad with karasumi or crab miso · seasonal grills, e.g. ayu, Spanish mackerel, yellowtail collar · hamo tempura, vegetable tempura · dashimaki · clay-pot rice, e.g. sea bream, anago or karasumi; leftovers made into onigiri to take away · rare sake such as Katsukoma, Hanamura, Akabu, Sharaku (2024–2026 reviews) · about ¥10,000–15,000 a head (2024–2026 reviews)',
    website: null, gmaps: gm('むろまち 加地 京都'), menu_url: null,
    notes: '[Japanese · Gojo, a nine-seat counter for fish and sake] A small counter on Matsubara-dori, a short walk from Gojo Stn, where the day\'s fish is laid out and explained before you order. The hassun under leaves and the sashimi platter (with saba sushi, and soy, nikiri-zake and fish-liver miso to dip) are the musts; then simmered octopus, the karasumi "adult" potato salad, seasonal tempura and a clay-pot rice — what you can\'t finish comes back as onigiri. Rare sake (Katsukoma, Akabu, Sharaku). Two seatings, 18:00 and 20:15; book ahead. About ¥10,000–15,000 a head. Closed Thursday.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed in the sources; a September 2026 review mentions "the owner-chef")'], origin: null,
      background: 'Tabelog gives the opening as 18 August 2011. The Tabelog Award Bronze 2019 and 2020 (Tabelog). A regular of more than ten years returns every autumn (October 2024 – September 2026).',
      philosophy: null, specialty: 'Sashimi platter with saba sushi; "adult" potato salad; clay-pot rice.',
      anecdotes: [
        { text: '"I was captivated by the sound of the conger eel being filleted right in front of me" — October 2026.', source: R + 'B538018343/' },
        { text: 'An August 2026 diner, full from lunch, had a little of the clay-pot rice and took the rest back to the hotel as onigiri.', source: R + 'B534293410/' },
        { text: 'A September 2026 diner on a second visit found a new counter staff member slow to notice orders, while the food was as good as ever.', source: R + 'B535740775/' },
        { text: 'An October 2024 regular notes it is close to Kyoto Station and popular with international guests.', source: R + 'B41584369/' },
      ],
      japanese_sources_summary: '食べログ: むろまち 加地、日本料理・居酒屋、下京区松原通新町東入中野之町185 1F、五条駅から徒歩5〜10分、18:00〜23:00 (L.O. 料理22:00・ドリンク22:30)、木曜休み、予約可 (インスタグラムからネット予約)、カウンター9席、禁煙 (外に喫煙所)、カード可、2011年8月18日オープン、The Tabelog Award 2019・2020 Bronze。口コミ (2024〜2026年、英語): 18時と20時15分の二部制、八寸、刺身の盛り合わせと鯖寿司、たこの煮物、ローストビーフ、からすみの大人のポテトサラダ、鱧の天ぷら、だし巻き、土鍋ご飯 (残りはおにぎりに)、8品のコースかアラカルト、日本酒 (Katsukoma、Hanamura、Akabu、Sharaku など)、一人1万〜1万5千円ほど。',
      confidence: 'medium', sources: [TB, R + 'B41584369/', R + 'B534293410/', R + 'B534403413/', R + 'B535740775/', R + 'B536014316/', R + 'B536162663/', R + 'B536919015/', R + 'B538018343/', R + 'B538160444/', R + 'B538418420/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead (Instagram or phone) for the 18:00 or 20:15 seating; staff explain the day\'s fish at the counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区松原通新町東入中野之町185 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.998836, 135.757779); cross-checked: GSI 京都府京都市下京区中野之町185番地 (lot) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B538018343/', R + 'B538160444/'],
    price_note: 'No menu read; totals from October 2026 reviews (about ¥11,000 a head; ¥29,900 for two with sake).', last_checked: TODAY, items: [
      it('', '', 'Sashimi platter (with saba sushi)', '', 'À la carte', 'ask', 'no', '2024–2026 reviews.', 'sashimi_platter'),
      it('', '', 'Clay-pot rice (e.g. sea bream, anago, karasumi)', '', 'Rice', 'ask', 'no', 'Leftovers made into onigiri.', 'donabe_gohan'),
      it('', '', '"Adult" potato salad (karasumi or crab miso)', '', 'À la carte', 'ask', 'no', '', 'adult_potato_salad'),
    ] }, {
    cuisine: '季節の和食と日本酒のカウンター: 8品のコースかアラカルト (2026年10月)・葉で覆った八寸 (要予約)・醤油、煮切り酒、肝味噌で食べる刺身の盛り合わせ、鯖寿司付きのことも・たこの煮物、ローストビーフ、からすみやかに味噌の「大人のポテトサラダ」・季節の焼き物 (鮎、鰆、ぶりかまなど)・鱧の天ぷら、野菜の天ぷら・だし巻き・鯛、穴子、からすみなどの土鍋ご飯、残りはおにぎりにして持ち帰れる・Katsukoma、Hanamura、Akabu、Sharaku などの珍しい日本酒 (2024〜2026年の口コミ)・一人1万〜1万5千円ほど (2024〜2026年の口コミ)',
    neighborhood: '新町近くの松原通。五条駅から徒歩5〜10分',
    gf_detail: '要確認。醤油で食べる刺身、煮物、天ぷら、だし巻き、土鍋ご飯などの和食のカウンター。グルテンの情報はない (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。魚と日本酒のカウンターで、野菜は魚と並ぶ煮物や天ぷらとして出る (2024〜2026年の口コミ)。',
    notes: '[和食・五条、魚と日本酒の9席のカウンター] 五条駅から少し歩いた松原通の小さなカウンター。その日の魚を並べて説明してから注文する。必ず頼みたいのは葉で覆った八寸と刺身の盛り合わせ (鯖寿司付き、醤油、煮切り酒、肝味噌で)。続いてたこの煮物、からすみの「大人のポテトサラダ」、季節の天ぷら、土鍋ご飯。食べきれない分はおにぎりにしてくれる。日本酒は Katsukoma、Akabu、Sharaku など珍しい銘柄。18時と20時15分の二部制で要予約。一人1万〜1万5千円ほど。木曜休み。',
  });
}

// ================================================================ KANEGURA
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26036774/'; const R = TB + 'dtlrvwlst/';
  const FOODLE = 'https://foodle.pro/restaurants/kyoto/kanegura';
  const H = day(['16:00', '23:00']);
  put({
    id: 'kyoto_kanegura', name: 'KANEGURA', category: 'OMNI',
    lat: 35.000169, lng: 135.764139, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sukiyaki-style wagyu nikunabe with a sweet soy broth, sauced beef tongue, hamburg steak and yukhoe; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wagyu izakaya built around a meat hot pot, beef tongue, yukhoe and hamburg steak (2024–2026 reviews).',
    hours_raw: '16:00–23:00, last food order 22:00, drinks 22:30; last entry 21:30; courses from 18:00; closed Tuesday (Tabelog). Two-hour limit; reservations taken, special requests by phone (Tabelog). One-drink minimum, otherwise a ¥500 seat charge (Tabelog). All-you-can-drink courses ¥6,500 and ¥7,500 (October 2026). Many dishes can be served as single portions for solo diners (October 2026). 22 seats (6 counter, 4 tables of 4); no high chairs; non-smoking; cards and PayPay accepted (Tabelog). 6 min walk from Shijo Stn exit 5 (Tabelog). Opened 19 November 2021 (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Yanagibaba-dori south of Bukkoji — 6 min walk from Shijo Stn',
    cuisine: 'Wagyu izakaya whose signature is the nikunabe, a sukiyaki-like hot pot piled with beef, eaten with egg (2024–2026 reviews) · grades of meat for the nabe, from lean to marbled; eggs and rice extra (October–November 2026) · 100% black wagyu hamburg steak, black wagyu yukhoe, raw marinated beef tongue, grilled beef tongue in sauce, wagyu tataki, thin-sliced sirloin, hash-brown beef · house salad, potato salad, pickles · courses with all-you-can-drink ¥6,500 or ¥7,500 (October 2026) · sake and wine',
    website: null, gmaps: gm('KANEGURA 京都 柳馬場 仏光寺'), menu_url: null,
    notes: '[Izakaya · Shijo, a wagyu nikunabe hideaway] A lively meat izakaya on Yanagibaba-dori south of Bukkoji whose star is the nikunabe: a mountain of wagyu simmered sukiyaki-style at the table and dipped in Kyoto egg, which staff help cook through to the end. Around it come a 100% wagyu hamburg steak, yukhoe, beef tongue and tataki. Courses with all-you-can-drink were ¥6,500–7,500 in October 2026; à la carte works too, and solo diners can order many dishes as single portions. Two-hour limit, last entry 21:30; closed Tuesday. Many guests are visitors from abroad.',
    chef_bio: { chef_name: null, roles: ['Operator not named; a 2024 post names its instigators as 伊藤氏 and 抜木氏'], origin: null,
      background: 'Per a post on foodle.pro (22 August 2024): the name is read カネグラ and is said to mean a storehouse for gold, silver and treasure; it was formed from radicals of the surnames of the two instigators, 伊藤氏 and 抜木氏, the former being the 大将 of the Kyoto meat kappo にくの匠 三芳. Tabelog gives the opening as 19 November 2021. Izakaya WEST "Tabelog 100" 2025 and 2026.',
      philosophy: null, specialty: 'Wagyu nikunabe; 100% wagyu hamburg steak; yukhoe.',
      anecdotes: [
        { text: 'An October 2026 solo diner, whose friend had caught the flu, was told at the counter that many dishes can be served as a single portion.', source: R + 'B537982834/' },
        { text: 'An October 2026 group had warned ahead that one member does not eat raw dishes, and an alternative meat was prepared.', source: R + 'B537505702/' },
        { text: 'A November 2026 diner praised the meat and the cheerful part-time staff but found the meat cook unsmiling and sharp with junior staff in front of guests.', source: R + 'B538529675/' },
        { text: 'An October 2026 visitor found the course tasty but light on volume, and would have liked rice from the start rather than at the end.', source: R + 'B537620974/' },
      ],
      japanese_sources_summary: '食べログ: KANEGURA、居酒屋・鍋、下京区柳馬場通仏光寺下ル万里小路町187、四条駅5番出口から徒歩約6分、16:00〜23:00 (L.O. 料理22:00・ドリンク22:30)、最終入店21:30、コースは18時から、火曜休み、2時間制、ワンドリンク制 (注文がない場合席料500円)、22席 (カウンター6、4人テーブル4)、禁煙、カード・PayPay 可、2021年11月19日オープン、居酒屋 WEST 百名店 2025・2026。foodle.pro の投稿 (2024年8月22日): 伖 (カネグラ)、金銀や財宝を入れておく蔵の意味、仕掛け人の伊藤氏と抜木氏の偏と旁から命名、伊藤氏はにくの匠 三芳の大将、名物は肉を重ねた肉鍋、サーロインの薄切り、牛肉100パーセントのハンバーグ。口コミ (2026年10〜11月、英語): 肉鍋、ユッケ、牛タン、飲み放題付きコース6,500円・7,500円、一人前から注文可、海外からの客が多い。',
      confidence: 'medium', sources: [TB, FOODLE, R + 'B536754257/', R + 'B537297789/', R + 'B537365779/', R + 'B537505702/', R + 'B537535157/', R + 'B537620974/', R + 'B537898749/', R + 'B537982834/', R + 'B538051515/', R + 'B538529675/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff help cook the hot pot; one drink per person; many guests from abroad (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区柳馬場通仏光寺下ル万里小路町187',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026; Izakaya WEST Tabelog 100 2026.' },
    pin_source: `Tabelog ${TB} (35.000169, 135.764139); cross-checked: GSI 京都府京都市下京区万里小路町187番地 (lot) 51m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537505702/', R + 'B537620974/'],
    price_note: 'No menu read; course prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Course with all-you-can-drink', '¥6,500', 'Courses', 'ask', 'no', 'October 2026.', 'course_nomihodai_6500'),
      it('', '', 'Higher course with all-you-can-drink (yukhoe, hamburg steak, nikunabe)', '¥7,500', 'Courses', 'ask', 'no', 'October 2026.', 'course_nomihodai_7500'),
    ] }, {
    cuisine: '名物は牛肉を山盛りにしたすき焼き風の肉鍋で、卵で食べる和牛の居酒屋 (2024〜2026年の口コミ)・肉鍋の肉は赤身から霜降りまで等級を選べ、卵とご飯は別料金 (2026年10〜11月)・黒毛和牛100%のハンバーグ、黒毛和牛のユッケ、牛タンの生の漬け、牛タンのたれ焼き、和牛のたたき、サーロインの薄切り、ハッシュブラウンの牛・サラダ、ポテトサラダ、漬物・飲み放題付きコース6,500円か7,500円 (2026年10月)・日本酒とワイン',
    neighborhood: '仏光寺の南の柳馬場通。四条駅から徒歩6分',
    gf_detail: '要確認。甘い醤油の割下のすき焼き風の和牛の肉鍋、たれの牛タン、ハンバーグ、ユッケ。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。肉鍋、牛タン、ユッケ、ハンバーグが中心の和牛の居酒屋 (2024〜2026年の口コミ)。',
    notes: '[居酒屋・四条、和牛の肉鍋の隠れ家] 仏光寺の南、柳馬場通のにぎやかな肉の居酒屋。主役は肉鍋で、山盛りの和牛を卓上ですき焼き風に煮て京都の卵につけ、スタッフが最後まで鍋を見てくれる。ほかに和牛100%のハンバーグ、ユッケ、牛タン、たたき。飲み放題付きのコースは2026年10月に6,500〜7,500円、アラカルトでもよく、一人なら多くの料理を一人前で頼める。2時間制、最終入店21時半、火曜休み。海外からの客が多い。',
  });
}

save();
