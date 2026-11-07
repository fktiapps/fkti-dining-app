// Kyoto priority (kyoto-missed), worker osw13, batch 82 — lane: Tabelog id mod 6 = 0; rest tier, nearest-first.
// Drafts: 2254 ラウンジ, いづみ屋, 焼肉力, よこ林.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-82');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26025006', 'large parent: 井筒茶店 is the café floor of the yatsuhashi maker 井筒八ッ橋本舗 (Tabelog remarks; same Kitaza building), which has six same-name shops — 祇園本店, 京極一番街店, 新光悦店 (Nantan), 京都伊勢丹店, 京都四條 南座, 清水寺店 (web listings; Kyoto crawl) — plus 京料理 井筒; sub-brand of a large parent, as with ぎをん為治郎 / 西尾八ツ橋 (Greg ruling 2026-11-05)');

// ================================================================ 2254 ラウンジ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26034594/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://2254.jp';
  const H = day(['10:00', '20:00']);
  put({
    id: 'kyoto_2254_lounge_miyagawacho', name: '2254 ラウンジ (2254 Lounge)', category: 'OMNI',
    lat: 35.001355, lng: 135.771527, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: cheesecake, Neapolitan spaghetti and craft beer (2020–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask: black coffee and organic smoothies may suit; cakes and milk drinks do not (2020–2026 reviews).',
    hours_raw: 'Tabelog: Tue–Sun 10:00–20:00; closed Monday and some other days, and hours vary — check Instagram. No reservations. 14 seats with a terrace. Non-smoking except by the entrance. Pets welcome on a lead, any size; bring your own pet food (Tabelog). English menu; children and strollers welcome; wheelchair access; Wi-Fi and power outlets. Cards, transit IC and e-money, PayPay. A brick townhouse in Miyagawa-cho that is also the lounge of a whole-building rental hotel, open to all. Opened 14 July 2020 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Miyagawa-cho, south of Shijo by the Kamo River — 4 min walk from Gion-Shijo',
    cuisine: 'A café-bar that doubles as a small hotel\'s lounge, in Miyagawa-cho (Tabelog; 2020–2026 reviews) · specialty coffee, including a dark-roast "Uma-machi" blend; iced coffee ¥600; iced café latte ¥650 (June 2026) · craft beer — "the recommended choice" (May 2026) — wine and cocktails; organic smoothies (2020; 2026) · cheesecake with salt and pepper; Neapolitan spaghetti (2023)',
    website: SITE, gmaps: gm('2254 ラウンジ 宮川町'), menu_url: null,
    notes: '[Café-bar · Miyagawa-cho, a hotel lounge open to all] A quiet brick-front café-bar on Miyagawa-cho that doubles as the lounge of a whole-building rental hotel: specialty coffee, craft beer, a salted cheesecake and a green view, with dogs of any size welcome. Hours vary — check Instagram. Closed Monday.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Opened 14 July 2020 (Tabelog) as the street-facing café and lounge of the 2254 whole-building rental hotel in Miyagawa-cho. Reviewers from 2020 to 2026 describe a stylish, quiet room, staff who explain how grind changes a coffee, dog-loving staff, and a friendly exchange of recommendations with the restaurant opposite.',
      philosophy: null,
      specialty: 'Specialty coffee; craft beer.',
      anecdotes: [
        { text: 'March 2024: the chef at the restaurant across the street recommended it, and "they mentioned that they often recommend Suiren when asked for delicious dining spots—it\'s a mutual" exchange.', source: R + 'B481369085/' },
        { text: 'June 2026: "Although I was not staying overnight, the café provided a very comfortable atmosphere."', source: R + 'B530743683/' },
      ],
      japanese_sources_summary: '食べログ: 2254 ラウンジ、カフェ・ケーキ、東山区宮川筋2-254、京阪祇園四条駅から徒歩約4分、火〜日 10:00〜20:00、月曜と不定休、時間は変動 (Instagram で確認)、予約不可、14席、テラス、禁煙 (入口付近のみ喫煙可)、ペット可 (リード付き、大きさ制限なし、ペットフードは持参)、英語メニュー、子供・ベビーカー可、車椅子可、カード・交通系IC・電子マネー・PayPay可、2020年7月14日オープン、一棟貸しホテルのラウンジを兼ねる宮川町のカフェバー。口コミ (2020年8月〜2026年6月、英語): クラフトビール、コーヒー、オーガニックスムージー、深煎りの Uma-machi ブレンド、アイスコーヒー600円、アイスカフェラテ650円、塩とこしょうのチーズケーキ、ナポリタン、犬好きのスタッフ、向かいの料理店と互いに紹介しあう。',
      confidence: 'medium', sources: [SITE, TB, R + 'B429322870/', R + 'B438904898/', R + 'B447451054/', R + 'B454342903/', R + 'B462034494/', R + 'B476586454/', R + 'B481369085/', R + 'B492293882/', R + 'B529173329/', R + 'B530743683/'] },
    cultural_comfort: { level: 'english', note: 'English menu; pet-friendly; hours vary.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区宮川筋2-254',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB} (35.001355, 135.771527); cross-checked: GSI 京都府京都市東山区宮川筋二丁目254番地 (lot) 5m; nearest pin kyoto_miyagawacho_suiren 6.8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B530743683/'],
    price_note: 'Prices from a June 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Iced coffee', '¥600', 'Coffee', 'ask', 'ask', 'June 2026.', 'coffee'),
      it('', '', 'Iced café latte', '¥650', 'Coffee', 'ask', 'no', 'June 2026.', 'coffee'),
    ] }, {
    cuisine: '宮川町の小さなホテルのラウンジを兼ねるカフェバー (食べログ、2020〜2026年の口コミ)・スペシャルティコーヒー、深煎りの「Uma-machi」ブレンド、アイスコーヒー600円、アイスカフェラテ650円 (2026年6月)・おすすめはクラフトビール (2026年5月)、ワインとカクテル、オーガニックスムージー (2020年、2026年)・塩とこしょうのチーズケーキ、ナポリタン (2023年)',
    neighborhood: '宮川町、四条の南の鴨川沿い。祇園四条から徒歩4分',
    gf_detail: 'グルテンフリーではない: チーズケーキ、ナポリタン、クラフトビール (2020〜2026年の口コミ)。',
    vegan_detail: '要確認: ブラックコーヒーやオーガニックスムージーは合うかもしれないが、ケーキやミルクの飲み物は不可 (2020〜2026年の口コミ)。',
    notes: '[カフェバー・宮川町、誰でも使えるホテルのラウンジ] 宮川町のレンガの外観の静かなカフェバーで、一棟貸しのホテルのラウンジを兼ねる。スペシャルティコーヒー、クラフトビール、塩の効いたチーズケーキと緑の眺め、犬は大きさを問わず歓迎。営業時間は変わるので Instagram で確認を。月曜休み。',
  });
}

// ================================================================ いづみ屋
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26019360/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.ojako.com/index2.html';
  const H = day(['09:30', '16:00']);
  put({
    id: 'kyoto_izumiya_chirimen_sansho', name: 'いづみ屋 (Izumiya)', category: 'OMNI',
    lat: 35.001595, lng: 135.771825, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: chirimen sansho is baby sardines simmered with sansho, usually in soy sauce — check the label (2013–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dried baby sardines (2012–2026 reviews).',
    hours_raw: 'Tabelog: daily 9:30–16:00. A take-away shop for chirimen sansho, with a counter for tasting (2012–2018 reviews); no eating space described. Cards and QR; no e-money. On Shindo-dori below Donguri, a back street between Gion and Kiyomizu; there was also a Ninenzaka shop (January 2013) and department-store sales (2013; October 2024).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shindo-dori below Donguri, Higashiyama — 4 min walk from Gion-Shijo',
    cuisine: 'A chirimen-sansho maker\'s shop on a Higashiyama back street (2012–2026 reviews) · chirimen sansho — soft, mild baby sardines with gentle sansho, good for children (July and October 2018; June 2024) · sansho chazuke, katsuo-renkon (January 2013); bulk bags (2013) · a staple Kyoto souvenir, eaten over hot rice (August 2026)',
    website: SITE, gmaps: gm('いづみ屋 ちりめん山椒 新道通'), menu_url: SITE,
    notes: '[Chirimen sansho · Higashiyama back street, a soft, mild Kyoto souvenir] A small back-street shop between Gion and Kiyomizu selling its own chirimen sansho — soft baby sardines with gentle sansho, mild enough for children — with tastings at the counter; a repeat buyer calls it the essential Kyoto souvenir (August 2026). Take-away only; open daily 9:30–16:00.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Reviewers from 2012 to 2026 describe a chirimen-sansho maker sold in department stores, with a quiet back-street shop on Shindo-dori offering face-to-face tastings and, in 2013, a second shop at the top of Ninenzaka; its chirimen is softer and its sansho milder than many rivals (2018; 2024).',
      philosophy: null,
      specialty: 'Chirimen sansho.',
      anecdotes: [
        { text: 'October 2018: a review "mentioned that the chirimen had a soft texture, with the sansho being mild and not too spicy. This made me think it might be suitable for our family."', source: R + 'B381013167/' },
        { text: 'August 2026: "Izumiya is my favorite shop, and I\'ve been here more than five times."', source: R + 'B534591994/' },
      ],
      japanese_sources_summary: '食べログ: いづみ屋、惣菜・デリ、東山区新道通団栗下ル上柳町196、祇園四条から215m、毎日 9:30〜16:00、予約可、禁煙、カード・QR可、電子マネー不可、サイト ojako.com。口コミ (2012年1月〜2026年8月、英語): ちりめん山椒の店、全国の百貨店でも販売、二年坂の上の店 (2013年)、新道通の本店で試食、やわらかくマイルドな山椒で子供にも、山椒茶漬け、かつおれんこん、徳用袋、京都のお土産の定番。',
      confidence: 'low', sources: [SITE, TB, R + 'B112810125/', R + 'B380806668/', R + 'B381013167/', R + 'B487580610/', R + 'B493977658/', R + 'B534591994/'] },
    cultural_comfort: { level: 'japanese', note: 'Take-away shop; tasting at the counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区新道通団栗下ル上柳町196',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with a review dated August 2026.' },
    pin_source: `Tabelog ${TB} (35.001595, 135.771825); cross-checked: GSI 京都府京都市東山区上柳町 (town only, no lot) 60m — marked approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B487580610/'],
    price_note: 'No prices in the sources.', last_checked: TODAY, items: [
      it('ちりめん山椒', '', 'Chirimen sansho', null, 'Take-away', 'ask', 'no', '2012–2026 reviews.', 'chirimen_sansho'),
    ] }, {
    cuisine: '東山の裏通りのちりめん山椒の店 (2012〜2026年の口コミ)・やわらかくマイルドなちりめん山椒で、山椒も控えめで子供にも (2018年7月・10月、2024年6月)・山椒茶漬け、かつおれんこん (2013年1月)、徳用袋 (2013年)・熱いご飯にのせて食べる京都の定番のお土産 (2026年8月)',
    neighborhood: '新道通団栗下ル、東山。祇園四条から徒歩4分',
    gf_detail: '要確認: ちりめん山椒はじゃこを山椒と炊いたもので、ふつうは醤油を使う。表示を確認 (2013〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: ちりめんじゃこ (2012〜2026年の口コミ)。',
    notes: '[ちりめん山椒・東山の裏通り、やわらかくマイルドな京土産] 祇園と清水の間の裏通りにある小さな店で、自家製のちりめん山椒を試食して買える。やわらかいじゃこに控えめな山椒で子供にも。何度も通う客は京都の定番のお土産という (2026年8月)。持ち帰りのみ、毎日9時半〜16時。',
  });
}

// ================================================================ 焼肉力
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26037000/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_yakiniku_riki_ayanokoji', name: '焼肉力 (Yakiniku Riki)', category: 'OMNI',
    lat: 35.002492, lng: 135.765299, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tare-marinated yakiniku, bibim noodles, cold noodles and bibimbap (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a beef yakiniku and offal house (Tabelog; reviews).',
    hours_raw: 'Tabelog: Wed–Sun 17:00–23:00 (last order 22:30); closed Monday and Tuesday. Reservations taken; 90-minute limit when busy; seat requests not guaranteed. 10% service charge in the fully private rooms (for 5 or more) — Tabelog, Japanese original 「完全個室サービス料10%(5名様以上からご利用可)」. 70 seats with a counter and private rooms for 2–8. Non-smoking with a smoking room. Cards, transit IC and e-money; no QR. On Ayanokoji west of Fuyacho. Opened 18 March 2022 (Tabelog).',
    hours: { 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ayanokoji at Fuyacho — 7 min walk from Shijo / Hankyu Karasuma',
    cuisine: 'A clean, roomy, reasonably priced neighbourhood yakiniku (2025–2026 reviews) · salted tongue; ribeye; outside skirt; premium kalbi and loin; Kujo leek with salt; liver and omasum; half portions available (July 2026) · yukhoe; garlic foil-baked kimchi platter (2026) · signature oxtail soup; gomtang; seaweed and egg soup ¥500, ¥550 with both (July 2026); stone-grilled bibimbap; cold noodles; spicy bibim noodles (2026)',
    website: null, gmaps: gm('焼肉力 綾小路 塩屋町'), menu_url: null,
    notes: '[Yakiniku · Ayanokoji near Nishiki, good-value local grill] A spacious, clean yakiniku near the Shijo shops that locals rate for fair prices: salted tongue, outside skirt, kalbi and offal in half portions, yukhoe, the house oxtail soup and spicy bibim noodles to finish, with private rooms upstairs. 10% service in the private rooms. Closed Monday and Tuesday.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Opened 18 March 2022 (Tabelog). Reviewers in 2025–2026 describe a clean, spacious room with private rooms on the second floor, friendly staff, quick service on weekdays, regulars and families, and prices they call among the more affordable in Kyoto.',
      philosophy: null,
      specialty: 'Oxtail soup; salted tongue.',
      anecdotes: [
        { text: 'July 2026: half portions of sashimi, tongue, liver and omasum, then "a soup with both seaweed and egg (it\'s JPY 500 for one type, but only an extra JPY 50 for two types…)."', source: R + 'B516647577/' },
        { text: 'October 2026, a regular: "I always order the Bibim Noodles. They have a nice spicy kick that doesn\'t linger."', source: R + 'B484140862/' },
      ],
      japanese_sources_summary: '食べログ: 焼肉力、焼肉・ホルモン・居酒屋、下京区綾小路通麩屋町西入塩屋町79、阪急烏丸駅・四条駅から徒歩7分、水〜日 17:00〜23:00 (L.O. 22:30)、月・火休み、予約可、混雑時90分制、原文で「完全個室サービス料10%(5名様以上からご利用可)」、70席、個室 (2〜8名)、禁煙 (喫煙室あり)、カード・交通系IC・電子マネー可、QR不可、2022年3月18日オープン。口コミ (2025年11月〜2026年10月、英語): 塩タン、リブロース、ハラミ、上カルビ、ロース、九条ねぎ塩、レバー、センマイ、ハーフサイズ、ユッケ、キムチのにんにくホイル焼き、名物のテールスープ、コムタン、わかめと卵のスープ (1種500円・2種550円)、石焼ビビンバ、冷麺、ビビン麺、清潔で広い、手頃な値段、2階の個室。',
      confidence: 'medium', sources: [TB, R + 'B484140862/', R + 'B492293479/', R + 'B516647577/', R + 'B517683019/', R + 'B519041736/', R + 'B519141160/', R + 'B526497498/', R + 'B531164688/', R + 'B535806801/', R + 'B536342832/', R + 'B537792982/', R + 'B538278743/'] },
    cultural_comfort: { level: 'japanese', note: 'Local yakiniku; 10% service in private rooms.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区綾小路通麩屋町西入塩屋町79',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.002492, 135.765299); cross-checked: GSI 京都府京都市下京区塩屋町79番地 (lot) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B516647577/'],
    price_note: 'Few prices in the sources; about ¥4,000–8,000 a head (2025–2026 reviews).', last_checked: TODAY, items: [
      it('', '', 'Seaweed or egg soup (both +¥50)', '¥500', 'Soup', 'no', 'no', 'July 2026.', 'soup'),
      it('', '', 'Oxtail soup', null, 'Soup', 'ask', 'no', 'September 2026.', 'oxtail_soup'),
    ] }, {
    cuisine: '清潔で広く手頃な値段の町の焼肉店 (2025〜2026年の口コミ)・塩タン、リブロース、ハラミ、上カルビ、ロース、九条ねぎ塩、レバー、センマイ。ハーフサイズもある (2026年7月)・ユッケ、キムチのにんにくホイル焼き (2026年)・名物のテールスープ、コムタン、わかめや卵のスープ500円・両方で550円 (2026年7月)、石焼ビビンバ、冷麺、辛いビビン麺 (2026年)',
    neighborhood: '綾小路麩屋町。四条駅・阪急烏丸駅から徒歩7分',
    gf_detail: 'グルテンフリーではない: タレの焼肉、ビビン麺、冷麺、ビビンバ (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 牛の焼肉とホルモンの店 (食べログ、口コミ)。',
    notes: '[焼肉・錦の近くの綾小路、手頃な町の焼肉] 四条の繁華街に近い広く清潔な焼肉店で、地元の人が値段の手頃さをほめる。塩タン、ハラミ、カルビやホルモンをハーフで、ユッケ、名物のテールスープ、締めの辛いビビン麺。2階に個室。個室はサービス料10%。月・火休み。',
  });
}

// ================================================================ よこ林
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26005104/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://yokobayashikyoto.com/';
  const H = day(['17:00', '22:00']);
  put({
    id: 'kyoto_yokobayashi_gion', name: 'よこ林 (Yokobayashi)', category: 'OMNI',
    lat: 35.003108, lng: 135.772697, cuisine_type: 'kaiseki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: soy-grilled dishes, chawanmushi and dashi-based kappo cooking (2017–2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sashimi, hamo, crab, fugu, suppon maru-nabe (Tabelog; 2017–2025 reviews).',
    hours_raw: 'Tabelog: Mon–Sat 17:00–22:00; closed Sunday and 31 December–5 January. Reservations taken; private hire for 12–13. No cover charge — Tabelog, Japanese original 「なし」. 15 seats: a 7-seat counter and two sunken-kotatsu tables for 4. Non-smoking. Cards (Visa, Master, JCB, AMEX, Diners) and e-money; no QR. Just south of Shijo off Yamato-oji, 2 min from Gion-Shijo Stn. Opened 20 September 1988 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yamato-oji below Shijo, Gion — 2 min walk from Gion-Shijo Stn',
    cuisine: 'A small kappo counter in Gion since 1988, built on seasonal fish (Tabelog; 2017–2025 reviews) · omakase or à la carte; sashimi with bamboo shoots in spring, hamo in summer (otoshi and yakishimo, hamo nabe), matsutake in autumn, crab or fugu in winter (Tabelog; 2018–2025) · baby octopus, torigai, yellowtail shabu-shabu, ayu, ginkgo in soy, a large chawanmushi (2017–2025) · the suppon "maru-nabe" to finish, a must per a regular (May 2024)',
    website: SITE, gmaps: gm('よこ林 祇園 大和町'), menu_url: SITE,
    notes: '[Kappo · Gion south of Shijo, seasonal fish since 1988] A 15-seat kappo counter just south of Shijo, run since 1988 by a friendly owner-chef: seasonal sashimi, hamo in summer, matsutake in autumn, crab and fugu in winter, omakase or à la carte, finishing with a suppon maru-nabe. Fair prices for Gion, say reviewers. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Owner-chef, not named in a source'], origin: null,
      background: 'Opened 20 September 1988 (Tabelog); per its Tabelog text, more than 34 years of kappo cooking that suggests the best way to enjoy each ingredient. Reviewers from 2017 to 2025 describe a friendly, experimenting chef who recommends sashimi without dipping sauce, care over tableware, and a cosy counter and tatami room.',
      philosophy: 'From its Tabelog text: high-quality ingredients, served in the way that brings out their flavour.',
      specialty: 'Seasonal sashimi; suppon maru-nabe.',
      anecdotes: [
        { text: 'March 2017: "The chef recommended that I enjoy the mixed sashimi without any dipping sauce."', source: R + 'B254530396/' },
        { text: 'May 2024: "You must try the finishing Maru Nabe; it\'s a must! (laughs)"', source: R + 'B486161766/' },
      ],
      japanese_sources_summary: '食べログ: よこ林、日本料理・魚介料理、東山区大和大路四条下ル一筋目西入大和町15、京阪祇園四条駅から徒歩2分、月〜土 17:00〜22:00、日曜休み、12月31日〜1月5日休み、予約可 (12〜13名で貸切可)、原文でチャージ「なし」、15席 (カウンター7、掘りごたつ4名×2)、禁煙、カード・電子マネー可、QR不可、1988年9月20日オープン、春は筍、夏は鱧、秋は松茸、冬は蟹やふぐ。口コミ (2017年3月〜2025年8月、英語・日本語): 創業29年 (2017年)、おまかせと単品、飯蛸、ふきのとう、鳥貝、刺身はつけ醤油なしで、鱧の落としと焼霜、鱧鍋、若竹煮、醤油焼き、ぶりしゃぶ、鮎、蟹、銀杏の醤油漬け、大きな茶碗蒸し、締めの丸鍋、気さくな大将、器にもこだわる、値段は手頃。',
      confidence: 'medium', sources: [SITE, TB, R + 'B254530396/', R + 'B300260380/', R + 'B384839789/', R + 'B451873287/', R + 'B454916263/', R + 'B472226222/', R + 'B486161766/', R + 'B501836819/', R + 'B506366370/', R + 'B512597192/'] },
    cultural_comfort: { level: 'japanese', note: 'Small kappo counter; book.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区大和大路四条下ル一筋目西入大和町15',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through August 2025; official site.' },
    pin_source: `Tabelog ${TB} (35.003108, 135.772697); cross-checked: GSI 京都府京都市東山区大和町15番地 (lot) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No prices in the sources; Tabelog\'s budget is ¥10,000–14,999.', last_checked: TODAY, items: [
      it('', '', 'Omakase', null, 'Course', 'no', 'no', 'February 2025.', 'kaiseki_course'),
      it('', '', 'Suppon maru-nabe (finish)', null, 'Hot pot', 'no', 'no', 'May 2024.', 'suppon'),
    ] }, {
    cuisine: '1988年から祇園にある、季節の魚が主役の小さな割烹のカウンター (食べログ、2017〜2025年の口コミ)・おまかせか単品。春は筍、夏は鱧 (落としと焼霜、鱧鍋)、秋は松茸、冬は蟹やふぐ (食べログ、2018〜2025年)・飯蛸、鳥貝、ぶりしゃぶ、鮎、銀杏の醤油漬け、大きな茶碗蒸し (2017〜2025年)・締めの丸鍋は常連いわく必食 (2024年5月)',
    neighborhood: '祇園、四条の南の大和大路。祇園四条駅から徒歩2分',
    gf_detail: 'グルテンフリーではない: 醤油焼き、茶碗蒸し、出汁の割烹料理 (2017〜2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 刺身、鱧、蟹、ふぐ、すっぽんの丸鍋 (食べログ、2017〜2025年の口コミ)。',
    notes: '[割烹・祇園の四条の南、1988年からの季節の魚] 四条のすぐ南の15席の割烹のカウンターで、1988年から気さくな大将が。季節の刺身、夏は鱧、秋は松茸、冬は蟹やふぐを、おまかせか単品で。締めはすっぽんの丸鍋。祇園にしては手頃という声。日曜休み。',
  });
}

save();
