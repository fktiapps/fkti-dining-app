// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first; worker osw4 (lane: Tabelog id mod 4 = 3), batch 4.
//   + 炭火焼肉 大歓 Sumibi Yakiniku Daikan (charcoal yakiniku in a three-storey house near Nagahoribashi, since 2017)
//   + 焼肉 無双武蔵 Yakiniku Musou Musashi (late-night yakiniku with raw-meat dishes, butcher-sourced, 22 seats, since 2019)
//   + 大阪うどん いなの路 Osaka Udon Inanoji (meat udon and niku-sui recreating the closed 信濃そば, since 2022)
//   + 焼肉侘び寂び 法善寺横丁店 Yakiniku Wabi Sabi (Kobe-beef omakase yakiniku in Hozenji Yokocho, kappo-trained owner)
//   - skip ピエーノ 27012467: one of several PIENO Italian bars of the Yasumaru group; its sibling PIENO vivace is in data
//     (osaka_pieno_vivace_namba, chef_bio.background "One of the PIENO Italian bars run by the Yasumaru group, which lists
//     several PIENO shops in Namba and one in Kochi"), and the listing's website is yasumaru.co.jp/pieno.php.
//   Chain check: Daikan has one other shop (a late-night Mikyu-bashi branch, Tabelog). Musashi: one shop. Inanoji: main shop
//   of three (Sakurai in Minoh 2023, Nishinomiya Ebisu 2025; official site), none in data. Wabi Sabi: the official site
//   lists only this 本店. None of the four is in data/osaka.json (grep by name, Tabelog id and address, 2026-11-01).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw4-4');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27012467', 'ピエーノ: one of several PIENO bars of the Yasumaru group; sibling PIENO vivace already in data (osaka_pieno_vivace_namba) — chain in data');

// ================================================================ 炭火焼肉 大歓
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27100447/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '24:00']);
  put({
    id: 'osaka_sumibi_yakiniku_daikan_higashishinsaibashi', name: '炭火焼肉 大歓 (Sumibi Yakiniku Daikan)', category: 'OMNI',
    lat: 34.674438, lng: 135.504411, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Meat comes salted (tongue with green-onion salt) or marinated, and the menu has cold noodles, namul with gochujang and Korean dishes; nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a charcoal yakiniku menu of beef, horumon and chicken; namul, kimchi and perilla leaves are the plant dishes mentioned.',
    hours_raw: 'Tue–Sun 17:00–24:00; closed every Monday, holidays included (Tabelog). For later hours the shop points to its second branch near Mikyu-bashi, open 17:00–03:00 (Tabelog). Reservations accepted, and needed: full and turning walk-ins away at 20:00 on a weekday (August 2026); no seat choice, though requests for non-smoking, counter or table can be noted; please do not cancel on the day (Tabelog). Courses have a two-hour limit from September 2026 (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), iD, QUICPay and PayPay (Tabelog). 50 seats: a counter of 6 on 1F (non-smoking) and tables on 2F and 3F (smoking) (Tabelog; August 2026 review). Opened 5 October 2017 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 1-9-12, a house on three floors — 2 min from Nagahoribashi Stn, 5 min from Shinsaibashi Stn',
    cuisine: 'Charcoal-grilled yakiniku of Japanese black wagyu with homemade side dishes, in a house (Tabelog) · courses with 120 minutes of free drinks, ¥6,800 and ¥8,800 for higher-grade wagyu, for 4–20 people (Tabelog) · à la carte, many cuts in half portions (August 2026): premium salted tongue and thick-cut tongue, tongue with green-onion salt, outside skirt, premium mino, ribeye, cheek, short ribs, shabu-grilled premium loin, premium liver grilled or as sashimi, omasum sashimi, yukke, chicken thigh (2026) · tataki-style salad, namul and kimchi platter just under ¥1,000 (August 2026), perilla leaves · cold noodles, oxtail soup, egg soup, rice · beer, wine by the half bottle',
    website: null, gmaps: gm('炭火焼肉 大歓 東心斎橋'), menu_url: null,
    notes: '[Yakiniku · Higashi-Shinsaibashi near Nagahoribashi] A charcoal yakiniku restaurant filling a house on three floors near Nagahoribashi, the counter downstairs and smoking tables above, that describes itself as run by a "meat professional". The tongue is the order that diners repeat: salted, thick-cut, or with green-onion salt, then outside skirt, mino and the premium liver, many cuts in half portions so two people can try more. Finish with oxtail soup or cold noodles. It is often full, even on weekdays, so book; diners spent about ¥5,000–10,000 a head in 2026, and the all-you-can-drink courses for groups are ¥6,800 or ¥8,800. Closed Mondays.',
    chef_bio: { chef_name: null, roles: ['Owner described by the shop as a "meat professional"; unnamed (Tabelog)'], origin: null, background: 'Per the Tabelog shop text: an authentic charcoal yakiniku restaurant in a private house, focused on homemade dishes and premium Japanese black wagyu, "owned by a meat professional"; opened 5 October 2017; a second branch near Mikyu-bashi serves until 03:00.', philosophy: null, specialty: 'Salted tongue; premium liver; outside skirt.',
      anecdotes: [
        { text: '"It was so full that walk-ins without a reservation were turned away, so be sure to make a reservation!" — August 2026, 8 PM on a weekday.', source: R + 'B536180395/' },
        { text: '"Looking at the menu, I noticed that many meats can be ordered in half portions, making it easy to sample various cuts in smaller amounts." — August 2026.', source: R + 'B533977864/' },
        { text: '"Since the beef tongue is a specialty here, we ordered thick slices along with two types of green onion salt" — September 2026.', source: R + 'B536583743/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 炭火焼肉 大歓 (Sumibi Yakiniku Daikan)、焼肉・ホルモン・韓国料理、大阪市中央区東心斎橋1-9-12、長堀橋駅から2分、心斎橋駅から5分、火〜日17:00〜24:00、月曜休み (祝日でも)、深夜は近くの2号店 (Mikyu-bashi 店、17:00〜3:00) へ、予約可、席の指定は不可 (1階禁煙、2階と3階は喫煙)、当日のキャンセルは控えて、2026年9月からコースは2時間制、120分飲み放題付きのコース6,800円と8,800円 (4〜20名)、カード・iD・QUICPay・PayPay 可、50席 (カウンター6、テーブル44)、一軒家、手作りにこだわる本格炭火焼肉、「肉のプロ」が営む店、2017年10月5日オープン。口コミ(2026年8月〜10月): 上塩タン、厚切りタン、ねぎ塩タン、ハラミ、上ミノ、リブロース、上レバー、ユッケ、ハーフサイズが多い、ナムルとキムチの盛り合わせ1,000円弱、テールスープ、冷麺、平日20時でも満席で予約なしは断られていた、ワインはハーフボトルのみ、ひとり5,000〜10,000円ほど。',
      confidence: 'medium', sources: [TB, R + 'B470078654/', R + 'B533977864/', R + 'B534092167/', R + 'B534195487/', R + 'B534611881/', R + 'B534619129/', R + 'B535420421/', R + 'B535434750/', R + 'B535624079/', R + 'B536180395/', R + 'B536583743/', R + 'B536871889/', R + 'B538017721/', R + 'B538387368/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'À la carte yakiniku grilled at the table over charcoal; book ahead (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-9-12',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing (course rule dated September 2026); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目9番12号 (go) 9m. こ玄 (osaka_kogen_chinese_higashishinsaibashi, address_ja "東心斎橋1-9-12 大心ビル 1F") shares the lot and is pinned 11 m away; osaka_sumibiyaki_torisei_higashishinsaibashi (東心斎橋1-9-13 3F) is 5 m away at the next house number; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B534092167/'],
    price_note: 'Course prices from the Tabelog listing (tax included); the namul and kimchi platter from an August 2026 review; à la carte meat prices not seen.', last_checked: TODAY, items: [
      it('', '', 'Daikan course with 120 minutes of free drinks (10 items)', '¥6,800', 'Course', 'ask', 'no', 'Tabelog listing; 4–20 people.', 'daikan_course'),
      it('', '', 'Higher-grade wagyu course with 120 minutes of free drinks (10 items)', '¥8,800', 'Course', 'ask', 'no', 'Tabelog listing; 4–20 people.', 'daikan_course_premium'),
      it('上塩タン', '', 'Premium salted tongue', '', 'Meat', 'ask', 'no', 'August–September 2026 reviews.', 'premium_salt_tongue'),
      it('', '', 'Premium liver (grilled)', '', 'Horumon', 'ask', 'no', 'September–October 2026 reviews.', 'premium_liver'),
      it('', '', 'Namul and kimchi platter', 'under ¥1,000', 'Sides', 'ask', 'ask', 'August 2026 review.', 'namul_kimchi'),
    ] }, {
    cuisine: '一軒家で、黒毛和牛の炭火焼肉と手作りの一品 (食べログ)・120分飲み放題付きのコース、6,800円と上の和牛の8,800円、4〜20名 (食べログ)・アラカルトはハーフサイズのある部位が多い (2026年8月): 上塩タン、厚切りタン、ねぎ塩タン、ハラミ、上ミノ、リブロース、ほほ肉、カルビ、上ロースの shabu-yaki、上レバーの焼きと刺し、センマイ刺し、ユッケ、鶏もも (2026年)・たたき風サラダ、ナムルとキムチの盛り合わせ1,000円弱 (2026年8月)、エゴマの葉・冷麺、テールスープ、玉子スープ、ご飯・ビール、ワインはハーフボトル',
    neighborhood: '東心斎橋1-9-12、3階建ての一軒家。長堀橋駅から徒歩2分、心斎橋駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。肉は塩 (ねぎ塩のタンなど) かタレで、冷麺、コチュジャンのナムル、韓国料理もある。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではありません。牛肉、ホルモン、鶏の炭火焼肉。植物性のものはナムル、キムチ、エゴマの葉くらい。',
    notes: '[焼肉・東心斎橋、長堀橋のそば] 長堀橋近くの3階建ての一軒家で、1階はカウンター、上の階は喫煙のテーブル席。「肉のプロ」が営むという炭火焼肉の店。何度も頼まれるのはタンで、塩、厚切り、ねぎ塩、それからハラミ、ミノ、上レバー。ハーフサイズの部位が多いので、2人でもいろいろ試せる。締めはテールスープか冷麺。平日でも満席になることが多いので予約を。2026年はひとり5,000〜10,000円ほどで、グループ向けの飲み放題付きコースは6,800円か8,800円。月曜休み。',
  });
}

// ================================================================ 焼肉 無双武蔵
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27113319/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '03:00']);
  put({
    id: 'osaka_yakiniku_musou_musashi_higashishinsaibashi', name: '焼肉 無双武蔵 (Yakiniku Musou Musashi)', category: 'OMNI',
    lat: 34.670528, lng: 135.503334, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Many cuts are eaten with salt, but the yukke comes in a sweet-and-spicy sauce and the menu has chige ramen and cold noodles; nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a yakiniku menu of wagyu cuts, horumon and raw-meat dishes; kimchi and bean-sprout namul are the plant dishes mentioned.',
    hours_raw: 'Mon–Sat and the day before or after a holiday 17:30–03:00, last food order 02:30; closed Sunday and holidays; some nights it closes at 23:00, shown in the Instagram story highlights, so call before a late visit (Tabelog). Reservations accepted, best made early online; no bookings starting at 19:00; arriving 15 minutes late without notice cancels the booking; cancellations the day before cost ¥3,000 a person (Tabelog). Charge ¥330 a person (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) and PayPay; no e-money (Tabelog). 22 seats: three counter tables for two and four tables for four; smoking allowed, so no one under 20 (Tabelog). Opened 10 September 2019 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 2-6-19, 三ツ寺ギャラクシービル5号館 1F, on Kasayacho Street between Namba and Shinsaibashi — 7 min from Nippombashi Stn',
    cuisine: 'Yakiniku of meat from a long-established butcher, with raw-meat dishes (Tabelog; 2025–2026 reviews) · assorted tongue: special tongue, green-onion salt tongue, salted tongue, tongue geta, ¥2,728 for two (July 2026) · raw harami yukke with egg yolk ¥1,628 (July 2026) · wagyu yukke · yamakake heart sashimi with grated yam and egg yolk · raw tsurami, tongue sashimi · harami, premium harami, loin, kainomi, premium mino, white omasum, liver, red meat, sirloin cap (2026) · yaki-suki (grilled sukiyaki) · omakase of five cuts (July 2026) · napa-cabbage kimchi, bean-sprout namul · chige ramen, half-size cold noodles · bottled beer, sake and wine',
    website: null, gmaps: gm('焼肉 無双武蔵 東心斎橋'), menu_url: null,
    notes: '[Yakiniku · Higashi-Shinsaibashi, until 3 a.m.] A 22-seat yakiniku room on Kasayacho Street among the bars between Namba and Shinsaibashi, buying from a long-established butcher and open until 3 a.m. six nights a week. It is known for raw-meat dishes: harami yukke stirred with egg yolk, raw tsurami, tongue sashimi and a heart sashimi under grated yam. Then the tongue platter of four kinds (¥2,728 for two in July 2026), harami, liver and white omasum on a flat roaster, and chige ramen to finish. Expect ¥6,000–8,000 a head. Smoking is allowed, so no one under 20; book early, and not for 19:00.',
    chef_bio: { chef_name: null, roles: ['Unnamed; a yakiniku restaurant "run by a butcher" (April 2025 review)'], origin: null, background: 'Per the Tabelog shop text: "Enjoy the finest meat directly from a long-established butcher shop to your heart\'s content." An April 2025 diner calls it a yakiniku restaurant run by a butcher. Opened 10 September 2019.', philosophy: null, specialty: 'Raw harami yukke; assorted tongue; yamakake heart sashimi.',
      anecdotes: [
        { text: '"First and foremost, you absolutely must order the Assorted Tongue (JPY 2,728 for two servings). This time, I ordered five servings, and I appreciate that they adjust the quantity based on the number of people." — July 2026.', source: R + 'B490392271/' },
        { text: '"I was pleasantly surprised that they remembered my face even though it had been quite a while since my last visit." — October 2026, a favourite heart sashimi with grated yam and egg yolk.', source: R + 'B504891617/' },
        { text: '"The roaster was of the teppan-yaki type, so rather than grilling a lot at once, it felt like a place where you can slowly enjoy each piece of meat." — June 2026.', source: R + 'B530736122/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 焼肉 無双武蔵、焼肉・ホルモン、大阪市中央区東心斎橋2-6-19 三ツ寺ギャラクシービル5号館 1F、日本橋駅から徒歩7分、なんば駅から徒歩9分、月〜土・祝前・祝後17:30〜翌3:00 (L.O. 2:30)、日曜・祝日休み、23時閉店の日は Instagram のストーリーハイライトで、予約は早めにネットで、19時スタートの予約は不可、連絡なしで15分遅れると取り消し、前日キャンセルは1名3,000円、チャージ1名330円 (税込)、カード・PayPay 可、22席 (カウンター2×3、テーブル4×4)、喫煙可のため20歳未満は入店不可、老舗の精肉店直送の肉、2019年9月10日オープン。口コミ(2025年4月〜2026年10月): 精肉店が営む焼肉店、タン盛り合わせ2人前2,728円、生ハラミユッケ1,628円、とろろのハツ刺し、タン刺し、白センマイ、レバー、チゲラーメン、ハーフの冷麺、平らなロースター、ひとり6,000〜8,000円ほど、周りはガールズバーやホストクラブ。',
      confidence: 'medium', sources: [TB, R + 'B490392271/', R + 'B504891617/', R + 'B529906992/', R + 'B530631289/', R + 'B530736122/', R + 'B531757170/', R + 'B531943903/', R + 'B533379753/', R + 'B534037871/', R + 'B534273368/', R + 'B535571897/', R + 'B536691507/', R + 'B537087984/', R + 'B537171017/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'À la carte yakiniku grilled at the table; book online early (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋2-6-19 三ツ寺ギャラクシービル5号館 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋二丁目6番19号 (go) 2m. Same building as 寿し 壱佳 (osaka_sushi_ikkei_higashishinsaibashi, address_ja "東心斎橋2-6-19 三ッ寺ギャラクシービル5号館 1F") and osaka_touka_koufu_malatang (東心斎橋2-6-19), pinned 16 m and 18 m away, so they stay apart; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B490392271/'],
    price_note: 'Prices from a July 2026 review; no menu published.', last_checked: TODAY, items: [
      it('', '', 'Assorted tongue (special, green-onion salt, salted, tongue geta), for two', '¥2,728', 'Meat', 'ask', 'no', 'July 2026 review; adjusted to the number of people.', 'tongue_platter'),
      it('', '', 'Raw harami yukke with egg yolk', '¥1,628', 'Raw', 'ask', 'no', 'July 2026 review.', 'harami_yukke'),
      it('', '', 'Yamakake heart sashimi (grated yam, egg yolk)', '', 'Raw', 'ask', 'no', 'April 2025 and October 2026 reviews.', 'yamakake_heart'),
      it('', '', 'Yaki-suki (grilled sukiyaki)', '', 'Meat', 'ask', 'no', 'August 2026 review.', 'yakisuki'),
      it('', '', 'Chige ramen', '', 'Noodles', 'no', 'no', 'August 2026 review.', 'chige_ramen'),
    ] }, {
    cuisine: '老舗の精肉店の肉の焼肉と生の肉料理 (食べログ、2025〜2026年の口コミ)・特上タン、ねぎ塩タン、塩タン、tongue geta のタン盛り合わせ2人前2,728円 (2026年7月)・卵黄をのせた生ハラミユッケ1,628円 (2026年7月)・和牛ユッケ・とろろと卵黄のハツ刺し・生の tsurami、タン刺し・ハラミ、上ハラミ、ロース、kainomi、上ミノ、白センマイ、レバー、赤身 (2026年)・yaki-suki・5種のおまかせ (2026年7月)・白菜キムチ、もやしナムル・チゲラーメン、ハーフの冷麺・瓶ビール、日本酒、ワイン',
    neighborhood: '東心斎橋2-6-19 三ツ寺ギャラクシービル5号館 1階、なんばと心斎橋の間の Kasayacho Street 沿い。日本橋駅から徒歩7分',
    gf_detail: '要確認。グルテンの情報なし。塩で食べる部位が多いが、ユッケは甘辛いタレで、チゲラーメンや冷麺もある。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではありません。和牛、ホルモン、生の肉料理の焼肉。植物性のものはキムチ、もやしナムルくらい。',
    notes: '[焼肉・東心斎橋、深夜3時まで] なんばと心斎橋の間、バーが並ぶ Kasayacho Street 沿いの22席の焼肉店で、老舗の精肉店から肉を仕入れ、週6日深夜3時まで営業。名物は生の肉料理で、卵黄と混ぜる生ハラミユッケ、生の tsurami、タン刺し、とろろをかけたハツ刺し。それから4種のタン盛り合わせ (2026年7月は2人前2,728円)、ハラミ、レバー、白センマイを平らなロースターで焼き、締めはチゲラーメン。ひとり6,000〜8,000円ほど。喫煙可なので20歳未満は入れない。予約は早めに、19時スタートは不可。',
  });
}

// ================================================================ 大阪うどん いなの路
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27131579/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://inanozi.com/';
  const D = day(['11:00', '20:00']), L = day(['11:00', '22:00']);
  put({
    id: 'osaka_osaka_udon_inanoji_sennichimae', name: '大阪うどん いなの路 (Osaka Udon Inanoji)', category: 'OMNI',
    lat: 34.667814, lng: 135.504223, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: wheat udon (and soba) in dashi, tempura bits and tempura on the menu; no gluten-free option described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: every bowl is served in the house dashi (official site), and the menu is built on beef, chicken and egg.',
    hours_raw: 'Mon, Tue, Wed and Sun 11:00–20:00; Fri and Sat 11:00–22:00; closed Thursday; closes early when the noodles sell out; check social media for extra closures (official site; Tabelog). No reservations (Tabelog). Queues at opening: 5–13 people waiting and 20–30 minutes in October 2026. Order by QR code on your phone (October 2026). Water is self-service (October 2026). Cards: AMEX only; no e-money or QR payments (Tabelog). About 5 counter seats on 1F and more seats up a steep stair on 2F (official site; 2026 reviews); non-smoking (Tabelog). Opened 3 September 2022 (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 4: L, 5: L, 6: D }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sennichimae 1-8-2, on the street a reviewer calls Aiai Bridge Street — 3 min from Nippombashi Stn exit B26',
    cuisine: 'Osaka udon in a slightly sweet house dashi, the recipe recreated from memory of the closed 信濃そば (official site) · meat udon, the signature, ¥1,100 (Tabelog; October 2026) · special curry udon, curry soba with extra meat · kizami udon, kitsune udon, tori-namba udon, oyako-namba udon · niku-sui with egg, the meat broth without noodles · haikara udon with tempura bits · meat soba · dashimaki, onigiri, takikomi gohan, limited chestnut rice (October 2026) · shrimp tempura topping · sake and shochu (official site; 2026 reviews)',
    website: SITE, gmaps: gm('大阪うどん いなの路 千日前'), menu_url: SITE + 'menu/',
    notes: '[Udon · Sennichimae, the taste of a lost noodle shop] A small udon shop a few minutes from Nippombashi Station, that recreated the dashi of the closed noodle shop 信濃そば without a written recipe, working from the memory of its taste (official site); the shop says well-known customers came back for it, and reviewers mention the comedians Downtown and the TV show Gobugobu. Order the meat udon (¥1,100 in October 2026): soft Osaka noodles, sweetish broth, tender meat and green onion; or the niku-sui with onigiri, the curry udon, or a kitsune udon. Expect a queue at 11:00 and on weekend lunches; order by QR code; about five counter seats downstairs and more up a steep stair. Closed Thursdays, and earlier when the noodles run out.',
    chef_bio: { chef_name: '山根 正也', roles: ['Owner of 大阪うどん いなの路 (official site)'], origin: null, background: 'Per the official site: 大阪うどん いなの路 wanted to keep the taste of the earlier 信濃そば, whose detailed recipe did not survive, and recreated it over a long time from the memory of its flavour; news of the revival brought many famous people and customers back for the taste they knew. The dried-fish supplier and noodle maker have changed since then, but the taste is carried on, refined, with new small dishes to go with drinks. The owner 山根 正也 writes that the aim is for people across Japan to taste it. Branches: 桜井店 in 箕面市 (opened 27 June 2023) and 西宮えびす店 in 西宮市 (opened 5 December 2025). A regular of seven visits writes in October 2026 that the soup "took years to perfect" and is even better than the previous generation\'s.', philosophy: '"Carry on the traditional taste while seeking development and improvement every day" (official site, translated).', specialty: 'Meat udon; niku-sui; curry udon.',
      anecdotes: [
        { text: '"I arrived around 11:40 AM, and it was fully packed with about 12-13 people waiting outside." — October 2026, meat udon after a 30-minute wait.', source: R + 'B538067757/' },
        { text: '"There was no recipe, so it took years to perfect this soup. I believe the result is even better than the previous generation\'s soup." — October 2026, a seventh visit, curry soba with extra meat.', source: R + 'B459502046/' },
        { text: '"To finish, I saved half of the seasoned rice and poured the meat and broth over it" — October 2026, meat soba and takikomi gohan.', source: R + 'B538493014/' },
      ],
      japanese_sources_summary: '公式サイト: 大阪うどん いなの路、山根 正也、伝統的な味の継承と「発展」「改良」、全国の方にこの味を、厳選素材の「こだわりの出汁」、名物の肉うどん、丼物、だし巻や天ぷらなどの一品でお酒、シメにうどんや肉吸い、細かいレシピが残っていなかった先代「信濃そば」の味を、味の記憶を頼りに長い時間をかけて再現、多くの著名人やお客様が思い出の味を求めて来店、節屋も製麺所も当時とは変わったが味を受け継ぐ、1階はカウンター席、2階も、お品書き: 名物 肉うどん、特製カレーうどん、きざみうどん、とりなんばうどん、きつねうどん、親子なんばうどん、肉吸い (玉子入り)、だし巻、おにぎり、本店 大阪市中央区千日前1-8-2、11:00〜20:00 (金・土は22:00まで)、木曜休み、麺売り切れ次第終了、桜井店 (箕面市、2023年6月27日)、西宮えびす店 (西宮市、2025年12月5日)。食べログ: 予約不可、カードは AMEX のみ、禁煙、2022年9月3日オープン、肉うどん1,100円。口コミ(2026年5月〜10月): 少し甘い出汁、やわらかい麺、開店時から行列、QR コードで注文、1階のカウンターは5席ほど、急な階段で2階へ、肉吸い、haikara うどん、カレーそば、栗ご飯 (期間限定)。',
      confidence: 'high', sources: [TB, SITE, SITE + 'about/', SITE + 'menu/', R + 'B459502046/', R + 'B489319403/', R + 'B536343649/', R + 'B536863434/', R + 'B537140700/', R + 'B537474794/', R + 'B537549940/', R + 'B537566248/', R + 'B537800389/', R + 'B537899688/', R + 'B537963784/', R + 'B538022967/', R + 'B538067757/', R + 'B538149787/', R + 'B538493014/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order by QR code on your phone; a short menu led by meat udon (October 2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区千日前1-8-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing (not shop-maintained); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区千日前一丁目8番2号 (go) 2m. Nearest records are osaka_houou_rou_sennichimae (千日前1-8-6) 24 m and osaka_aioi_mochi_sennichimae (千日前1-7-3) 28 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, SITE + 'menu/', R + 'B537140700/'],
    price_note: 'Meat udon price from the Tabelog listing and an October 2026 review (tax included); other prices not published.', last_checked: TODAY, items: [
      it('名物 肉うどん', '', 'Meat udon (signature)', '¥1,100', 'Udon', 'no', 'no', 'Tabelog; October 2026 review.', 'niku_udon'),
      it('特製カレーうどん', '', 'Special curry udon', '', 'Udon', 'no', 'no', 'Official menu.', 'curry_udon'),
      it('肉吸い(玉子入り)', '', 'Niku-sui with egg (meat broth, no noodles)', '', 'Soup', 'ask', 'no', 'Official menu.', 'nikusui'),
      it('きつねうどん', '', 'Kitsune udon', '', 'Udon', 'no', 'no', 'Official menu.', 'kitsune_udon'),
      it('とりなんばうどん', '', 'Tori-namba udon (chicken and green onion)', '', 'Udon', 'no', 'no', 'Official menu.', 'tori_namba_udon'),
      it('おにぎり', '', 'Onigiri', '', 'Rice', 'ask', 'ask', 'Official menu.', 'onigiri'),
    ] }, {
    cuisine: '少し甘い店の出汁の大阪うどん、閉店した信濃そばの味を記憶から再現 (公式サイト)・名物 肉うどん1,100円 (食べログ、2026年10月)・特製カレーうどん、肉多めのカレーそば・きざみうどん、きつねうどん、とりなんばうどん、親子なんばうどん・麺なしの肉吸い (玉子入り)・天かすの haikara うどん・肉そば・だし巻、おにぎり、takikomi gohan、期間限定の栗ご飯 (2026年10月)・えび天のトッピング・日本酒と焼酎 (公式サイト、2026年の口コミ)',
    neighborhood: '千日前1-8-2、Aiai Bridge Street 沿い。日本橋駅 B26 出口から徒歩3分',
    gf_detail: '実質グルテンフリーではありません。小麦のうどん (とそば) を出汁で、天かすや天ぷらもある。グルテンフリーの選択肢の説明はない。',
    vegan_detail: 'ヴィーガンではありません。どの一杯も店の出汁を使い (公式サイト)、メニューは牛肉、鶏、卵が中心。',
    notes: '[うどん・千日前、なくなった店の味] 日本橋駅から数分の小さなうどん店。閉店した信濃そばの出汁を、レシピなしで味の記憶を頼りに再現した (公式サイト)。店によれば著名人も思い出の味を求めて来店し、口コミには Downtown や番組 Gobugobu の名前も。注文は肉うどん (2026年10月は1,100円) を。やわらかい大阪の麺に甘めの出汁、やわらかい肉とネギ。肉吸いとおにぎり、カレーうどん、きつねうどんも。11時の開店時や週末の昼は行列。注文は QR コードで。1階はカウンター5席ほど、急な階段の上に2階席。木曜休み、麺がなくなれば早じまい。',
  });
}

// ================================================================ 焼肉侘び寂び 法善寺横丁店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27130211/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.wabisabi-yakiniku.jp/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'osaka_yakiniku_wabisabi_hozenji', name: '焼肉侘び寂び 法善寺横丁店 (Yakiniku Wabi Sabi Hozenji Yokocho)', category: 'OMNI',
    lat: 34.668045, lng: 135.502805, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information. The omakase course runs from tempura and kimchi through seasoned and marinated cuts, a sukiyaki-style thigh dipped in egg and sauce, seared meat sushi and soup; nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a Kobe-beef yakiniku course with seafood starters; salad, kimchi and vegetable tempura are its only plant dishes.',
    hours_raw: 'Daily 17:00–23:00 (Tabelog). Reservations by phone (official site) or online (Tabelog). Service charge 10% (Tabelog). Cards, iD, PayPay and Alipay (Tabelog). 38 seats, semi-private rooms for 2 and 4 with open ceilings, so neighbouring voices carry (Tabelog; August 2026 reviews); non-smoking; children welcome (Tabelog). Menu in English, Simplified Chinese and Korean, and English-speaking staff (Tabelog). The shop text states it has Muslim-friendly certification (Tabelog). Opened 1 July 2022 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba 1-1-5, 1F, inside Hozenji Yokocho — 7 min from Namba stations',
    cuisine: 'Yakiniku of Kobe beef and rare and aged cuts with kappo-style dishes (official site; Tabelog) · OMAKASE course (Wabi) ¥16,500, 12 items (Tabelog): starters that change daily, e.g. vegetable and octopus tempura, kombu-cured sea bream, pork belly wrapped round okra (2026); salad and three kimchi; seared salted yukke with wasabi and garlic chips; aged tongue with sudachi; Kobe beef steak, chateaubriand and strip loin; three omakase lean cuts; wagyu outside skirt; thigh sukiyaki dipped in egg; seared meat nigiri; soup of the day; vanilla ice cream or fresh chocolate with coffee or green tea (August–October 2026) · à la carte also available · wines and sake',
    website: SITE, gmaps: gm('焼肉侘び寂び 法善寺横丁'), menu_url: SITE,
    notes: '[Yakiniku · Hozenji Yokocho, Kobe-beef omakase] A Kobe-beef yakiniku restaurant inside the stone-paved Hozenji Yokocho, where an owner trained in kappo cooking adds Japanese touches to grilled meat (official site). The 12-dish omakase (¥16,500) is the way in: tempura or kombu-cured sea bream to start, seared salted yukke, aged tongue with sudachi, a Kobe chateaubriand or strip-loin steak, three lean cuts, sukiyaki-style thigh in egg, then seared meat sushi and dessert. The rooms are semi-private, with open ceilings. Many diners in 2026 were visitors from overseas; there is an English menu and English-speaking staff. Add 10% service; expect about ¥15,000–20,000 a head.',
    chef_bio: { chef_name: null, roles: ['Owner trained in kappo cooking, unnamed (official site)'], origin: null, background: 'Per the official site: yakiniku that is "not just grilled meat" but carries a sense of Japan, with the skills of an owner from a kappo background and a wide wine list, set in Hozenji Yokocho. An August 2026 diner credits the kombu-cured sea bream, vegetable tempura and okra-wrapped pork belly starters to the chef\'s kaiseki background. Opened 1 July 2022.', philosophy: '"Enjoy yakiniku that is not just grilled meat, with a sense of Japan" (official site, translated).', specialty: 'OMAKASE course (Wabi); Kobe beef chateaubriand; aged tongue.',
      anecdotes: [
        { text: '"We started with three appetizers: sashimi of kombu-cured sea bream, vegetable tempura, and pork belly wrapped in okra" — August 2026, the OMAKASE course (Wabi) at JPY 16,500.', source: R + 'B534761902/' },
        { text: '"The private room had an open ceiling, so it wasn\'t fully private, but I was able to enjoy my meal at a leisurely pace." — August 2026, about JPY 45,000 for two.', source: R + 'B533112456/' },
        { text: '"Unlike many places that top their yukhoe with an egg yolk, this one focuses solely on the meat" — September 2026, with salt, wasabi and garlic chips.', source: R + 'B537730170/' },
      ],
      japanese_sources_summary: '公式サイト: 焼肉 侘び寂び 法善寺横丁本店、侘び寂びの美しさを大切に、ただの焼き肉ではない「和」を感じられる割烹出身の店主の一技、豊富なワイン、法善寺の石畳と提灯、大阪市中央区難波1-1-5 1F (法善寺横丁通り内)、予約は電話で。食べログ (店舗会員): 毎日17:00〜23:00、サービス料10%、カード・iD・PayPay・Alipay 可、38席、個室 (2名・4名)、禁煙、子ども可、英語・中国語・韓国語のメニュー、英語を話すスタッフ、ムスリムフレンドリーの認証、神戸牛、希少部位と熟成肉、OMAKASE コース (Wabi) 16,500円 12品 (熟成タン、本日のステーキ、赤身3種、和牛ハラミ、炙り塩ユッケ、炙り寿司)、2022年7月1日オープン。口コミ(2026年8月〜10月): 前菜は日替わりの天ぷら、昆布締めの鯛、オクラの豚巻き、キムチ3種、sudachi の熟成タン、神戸牛のシャトーブリアンとサーロイン、もものすき焼き風、肉寿司、アイスと生チョコ、天井の開いた半個室、海外の客が多い。',
      confidence: 'medium', sources: [TB, SITE, R + 'B517470937/', R + 'B533112456/', R + 'B533114755/', R + 'B533736010/', R + 'B534139057/', R + 'B534480192/', R + 'B534761902/', R + 'B535721024/', R + 'B536295852/', R + 'B536599456/', R + 'B537142800/', R + 'B537676496/', R + 'B537730170/'] },
    cultural_comfort: { level: 'english', note: 'English menu and English-speaking staff (Tabelog); many overseas customers (August and October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波1-1-5 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and official site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波一丁目1番5号 (go) 7m. Inside Hozenji Yokocho; nearest record is 法善寺横丁 やき然 (osaka_yakizen_hozenji, 難波1-1-18) 16 m away, others at different house numbers 20–28 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B534761902/', R + 'B537730170/'],
    price_note: 'Course price from the Tabelog listing (tax included; plus 10% service), matched by August–September 2026 reviews; à la carte prices not seen.', last_checked: TODAY, items: [
      it('', '', 'OMAKASE course (Wabi), 12 items', '¥16,500', 'Course', 'ask', 'no', 'Tabelog listing; 2026 reviews.', 'omakase_wabi'),
      it('', '', 'Seared salted yukke', '', 'Course', 'ask', 'no', 'Tabelog listing; 2026 reviews.', 'aburi_shio_yukke'),
      it('', '', 'Aged beef tongue', '', 'Course', 'ask', 'no', 'Tabelog listing; 2026 reviews.', 'aged_tongue'),
      it('', '', 'Seared meat nigiri sushi', '', 'Course', 'ask', 'no', 'Tabelog listing; 2026 reviews.', 'aburi_niku_sushi'),
    ] }, {
    cuisine: '神戸牛と希少部位、熟成肉の焼肉と割烹の料理 (公式サイト、食べログ)・OMAKASE コース (Wabi) 16,500円、12品 (食べログ): 日替わりの前菜、たとえば野菜とタコの天ぷら、昆布締めの鯛、オクラの豚巻き (2026年)、サラダとキムチ3種、わさびとガーリックチップの炙り塩ユッケ、sudachi の熟成タン、神戸牛のステーキ、シャトーブリアンとサーロイン、おまかせの赤身3種、和牛ハラミ、卵につけるもものすき焼き風、炙りの肉寿司、本日のスープ、バニラアイスか生チョコとコーヒーか緑茶 (2026年8〜10月)・アラカルトも・ワインと日本酒',
    neighborhood: '難波1-1-5 1階、法善寺横丁の中。各線なんば駅から徒歩7分',
    gf_detail: '予約時に要確認。グルテンの情報なし。おまかせコースは天ぷらとキムチから、味付けやタレの部位、卵とタレのすき焼き風のもも、炙りの肉寿司、スープまで。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではありません。神戸牛の焼肉コースに魚介の前菜。植物性のものはサラダ、キムチ、野菜の天ぷらくらい。',
    notes: '[焼肉・法善寺横丁、神戸牛のおまかせ] 石畳の法善寺横丁の中にある神戸牛の焼肉店で、割烹出身の店主が焼肉に和の一技を添える (公式サイト)。入口は12品のおまかせ (16,500円) で。天ぷらや昆布締めの鯛に始まり、炙り塩ユッケ、sudachi の熟成タン、神戸牛のシャトーブリアンかサーロインのステーキ、赤身3種、卵につけるすき焼き風のもも、炙りの肉寿司とデザートへ。部屋は天井の開いた半個室。2026年は海外からの客が多く、英語のメニューと英語を話すスタッフがいる。サービス料10%で、ひとり15,000〜20,000円ほど。',
  });
}

save();
