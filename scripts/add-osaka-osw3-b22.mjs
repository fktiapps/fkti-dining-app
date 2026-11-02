// Osaka sweep (2-mile circle around Dotonbori), rest phase — lane osw3 (Tabelog id mod 4 = 2), batch 22.
//   + サロン・ド・モンシェール 本店～心斎橋～ (Salon de Mon cher: the Dojima Roll maker's only eat-in salon in Kansai)
//   + 大衆焼肉びりちゃん 難波・心斎橋店 (Taishu Yakiniku Birichan: all-you-can-eat kuroge wagyu yakiniku from noon)
//   + お好み焼き 門 (Okonomiyaki Mon: dog-friendly okonomiyaki and teppan behind Bic Camera) — from the core list
//   - skipped: 27068082 鉄板神社 難波南海通り店 and 27100414 一蘭 あべの店 (brands in data); 27100406 goodspoon,
//     27007494 和カフェ chano-ma, 27076582 やさい家めい, 27067154 ローマ軒, 27002622 千房, 27143534 うなぎの中庄 (chains of 5+)
//   Lane: ids with id mod 4 = 2 in `queue.mjs osaka next notable 200` (2026-11-02, after batch 21), in order: 27068082
//   (skip), 27100406 (skip), 27007494 (skip), 27076582 (skip), 27067154 (skip), 27002622 (skip), 27075366, 27141126, 27143534
//   (skip), 27100414 (skip) — the notable lane is now exhausted; then the first core leftover, 27089330.
//   None of the three is in data/osaka.json (grep by Tabelog id, name, romaji and address).
//   Group checks: Roma-ken — five shops (coordinator, 2026-11-02), skipped. Mon cher — the brand's only eat-in salon in Kansai (Tabelog).
//   Birichan — the sister of Taishu Sakaba Birichan (Tabelog), neither in data. Mon — single shop.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw3-22');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27068082', 'Same-concept branch of a brand already in data: 鉄板神社 is osaka_teppan_jinja_dotonbori');
skip('27100406', 'Chain (5+): goodspoon has Ecute Ueno, Musashi-Kosugi, Minatomirai and Yokohama More\'s besides this Namba City shop (https://www.welcome.city.yokohama.jp/blog/detail.php?blog_id=12; https://aumo.jp/articles/51729)');
skip('27007494', 'Chain (5+): chano-ma has Yokohama Red Brick, Lumine Ikebukuro, Futako-Tamagawa and Fukuoka PARCO besides this Namba shop (https://hamoni.jp/shop/9dS3kLouuyagovsRjFlk; https://www.timeout.com/tokyo/restaurants/chano-ma-ikebukuro)');
skip('27076582', 'Chain (5+): やさい家めい (Eatwalk) has Abeno Harukas, JR Gate Tower Nagoya, Lazona Kawasaki, Gotanda and Omotesando Hills besides Namba Parks (https://www.atpress.ne.jp/news/125905; https://www.atpress.ne.jp/news/156400)');
skip('27067154', 'Chain (5+): ローマ軒 has five shops — 神戸三宮 (https://retty.me/restaurant/100001345493/), 新大阪アルデ (https://retty.me/restaurant/100001540195/), NAMBAなんなん (this shop), 阪急三番街 南館B2F (official site, https://roma-ken.com/) and 本町 (https://s.tabelog.com/en/osaka/A2701/A270106/27099812/)');
skip('27002622', 'Chain (5+): 千房 has about 60–69 shops nationwide (https://jyudokitsuen.mhlw.go.jp/example/area4_4.php)');
skip('27143534', 'Chain (5+): うなぎの中庄 has Shinsaibashi, Namba and Amerikamura (https://unagi-nakasho.ash-company.net/ja/), Toranomon Hills (https://www.timeout.jp/tokyo/ja/レストラン/unagi-nakasho-toranomon-hills) and LINKS UMEDA (https://aumo.jp/articles/5161564)');
skip('27100414', 'Same-concept branch of a brand already in data: 一蘭 is osaka_ichiran_namba_midosuji and others');

// ================================================================ サロン・ド・モンシェール 本店～心斎橋～
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27075366/'; const R = TB + 'dtlrvwlst/';
  const H = day(['10:00', '19:00']);
  put({
    id: 'osaka_salon_de_mon_cher_shinsaibashi', name: 'サロン・ド・モンシェール 本店～心斎橋～ (Salon de Mon cher Honten)', category: 'OMNI',
    lat: 34.674872, lng: 135.498566, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The Dojima Roll, cakes, sandwiches and pasta are wheat-based; the shaved ice and parfaits are where to ask, as sauces and toppings are not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fresh-cream rolls, cakes, egg sandwiches and ice cream; the fruit shaved ice may be the closest, but cream is inside some (August 2026).',
    hours_raw: 'Daily 10:00–19:00 (last order 18:30); irregular closures (Tabelog). Reservations (Tabelog); otherwise write your name and wait, sometimes 30 minutes to an hour at weekends and in summer (July–August 2026). Cards (JCB, AMEX, Diners); no e-money (Tabelog). 31 seats, eight of them in special rooms, with sofas and a counter; non-smoking; children welcome; takeaway (Tabelog). Opened 3 October 2013 and reopened in August 2020 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishi-Shinsaibashi 1-13-21 — in front of exit 16 of Shinsaibashi Stn (Nagahori Tsurumi-ryokuchi Line)',
    cuisine: 'The Mon cher tearoom: Dojima Roll and cakes, afternoon tea, fruit sandwiches and shaved ice (Tabelog) · Dojima Roll, alone or in sets with an egg sandwich and a drink (July 2026) · a seasonal plate of Dojima Roll, cheesecake, macarons and Mont Blanc with coffee or tea (October 2026) · afternoon tea on a silver stand with pink cakes, strawberry roll, fruit and prosciutto sandwiches (October 2026) · shaved ice: strawberry and pistachio ¥1,528, strawberry shortcake-style with cream inside, peach and Shine Muscat (August 2026) · parfaits such as the strawberry Parfait Antoinette; classic chocolate cake; pasta (July–August 2026)',
    website: 'http://www.mon-cher.com/', gmaps: gm('サロン・ド・モンシェール 本店 心斎橋'), menu_url: null,
    notes: "[Sweets · Nishi-Shinsaibashi, the Dojima Roll maker's tearoom] The only eat-in salon of Mon cher, the maker of the Dojima Roll, in the Kansai region: an ornate, Versailles-like room of sofas just by Shinsaibashi Station, where you can eat the roll cake with an egg sandwich, take a silver-stand afternoon tea, or, in summer, queue for its delicate strawberry and pistachio shaved ice. Write your name and wait; weekends and hot days bring 30–60 minute lines. Diners in 2026 loved the setting and the kakigori; one regular found the egg sandwich changed for the worse. Open daily 10:00–19:00.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: the only eat-in salon of Mon cher in the Kansai region, serving afternoon tea, fruit sandwiches and kakigori in a luxurious space; opened 3 October 2013 and reopened in August 2020.',
      philosophy: 'Special sweets in a luxurious space away from the everyday (Tabelog).', specialty: 'Dojima Roll; afternoon tea; kakigori.',
      anecdotes: [
        { text: '"I wrote my name down, and since some people were absent, I was seated fairly quickly." — August 2026, strawberry and pistachio kakigori ¥1,528.', source: R + 'B244449786/' },
        { text: '"The afternoon tea was served on a beautiful silver stand, adorned with an array of sweets and sandwiches" — October 2026.', source: R + 'B537309791/' },
        { text: '"I had previously tried the egg sandwich, but I was disappointed to see that its appearance had completely changed." — July 2026, a returning visitor.', source: R + 'B532556857/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): サロン・ド・モンシェール 本店～心斎橋～、カフェ・ケーキ、西心斎橋1-13-21、Shinsaibashi 駅16番出口、毎日10:00〜19:00 (L.O.18:30)、不定休、予約可、カード (JCB・AMEX・Diners) 可、電子マネー不可、31席 (うち8席は特別室)、禁煙、子ども可、テイクアウト、2013年10月3日オープン、2020年8月リニューアルオープン、関西で唯一のモンシェールのイートインサロン、アフタヌーンティー、フルーツサンド、かき氷。口コミ(2026年7月〜10月): Dojima Roll と玉子サンドのセット、季節のプレート (Dojima Roll、チーズケーキ、マカロン、モンブラン)、銀のスタンドのアフタヌーンティー、いちごとピスタチオのかき氷1,528円、桃とシャインマスカットのかき氷、いちごのパフェ、クラシックショコラ、パスタ、名前を書いて待つ、30分〜1時間待ち、玉子サンドが変わったという声も。',
      confidence: 'medium', sources: [TB, R + 'B244449786/', R + 'B532198477/', R + 'B532556857/', R + 'B532837043/', R + 'B533166990/', R + 'B533679611/', R + 'B534222640/', R + 'B536355732/', R + 'B536430554/', R + 'B537218241/', R + 'B537309791/', R + 'B538149171/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Write your name on the waiting list at the door (August 2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区西心斎橋1-13-21',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区西心斎橋一丁目13番21号 (go) 20m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B244449786/'],
    price_note: 'One price from an August 2026 review; no menu online.', last_checked: TODAY, items: [
      it('', '', 'Strawberry and pistachio shaved ice', '¥1,528', 'Kakigori', 'ask', 'no', 'August 2026.', 'kakigori_pistachio'),
      it('', 'Dojima Roll', 'Dojima Roll set with egg sandwich and drink', '', 'Sets', 'no', 'no', 'July 2026.', 'roll_set'),
      it('', '', 'Afternoon tea', '', 'Afternoon tea', 'no', 'no', 'October 2026.', 'afternoon_tea'),
    ] }, {
    cuisine: 'モンシェールのティールーム: Dojima Roll とケーキ、アフタヌーンティー、フルーツサンド、かき氷 (食べログ)・Dojima Roll を単品か、玉子サンドとドリンクのセットで (2026年7月)・Dojima Roll、チーズケーキ、マカロン、モンブランにコーヒーか紅茶の季節のプレート (2026年10月)・ピンクのケーキ、いちごのロール、フルーツ、生ハムのサンドを銀のスタンドで出すアフタヌーンティー (2026年10月)・かき氷: いちごとピスタチオ1,528円、中にクリームの入ったショートケーキ風のいちご、桃とシャインマスカット (2026年8月)・いちごのパフェ、クラシックショコラ、パスタ (2026年7〜8月)',
    neighborhood: '西心斎橋1-13-21。Shinsaibashi 駅 (Nagahori Tsurumi-ryokuchi Line) 16番出口の前',
    gf_detail: '要確認。グルテンの情報なし。Dojima Roll、ケーキ、サンド、パスタは小麦。かき氷とパフェから確認を。ソースやトッピングの中身は書かれていない。',
    vegan_detail: 'ヴィーガンではありません。生クリームのロール、ケーキ、玉子サンド、アイス。果物のかき氷がいちばん近いが、中にクリームが入るものも (2026年8月)。',
    notes: '[スイーツ・西心斎橋、Dojima Roll のモンシェールのティールーム] Dojima Roll のモンシェールの、関西で唯一のイートインのサロン。Shinsaibashi 駅のそばのベルサイユ風の華やかな部屋にソファが並び、ロールケーキと玉子サンド、銀のスタンドのアフタヌーンティー、夏はいちごとピスタチオの繊細なかき氷を目当てに行列。名前を書いて待つ方式で、週末や暑い日は30分〜1時間待ち。2026年の口コミでは空間とかき氷が大好評で、玉子サンドが前より悪くなったという常連の声も。毎日10時から19時。',
  });
}

// ================================================================ 大衆焼肉びりちゃん 難波・心斎橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27141126/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '23:00']);
  put({
    id: 'osaka_taishu_yakiniku_birichan_shinsaibashi', name: '大衆焼肉びりちゃん 難波・心斎橋店 (Taishu Yakiniku Biri Chan Nanba shinsaibashi ten)', category: 'OMNI',
    lat: 34.67423, lng: 135.503456, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Salted cuts with lemon are the plainest; marinated cuts, the self-serve curry, cold noodles, bibimbap and yukgaejang are not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an all-you-can-eat wagyu yakiniku restaurant.',
    hours_raw: 'Daily 12:00–23:00 (last order 22:30); open all year (Tabelog). All-you-can-eat courses: ¥5,500 wagyu tasting course and ¥6,000 kuroge wagyu course, with soft drinks included and alcohol +¥1,100 (September–October 2026); lunch all-you-can-eat ¥2,500 (February 2026); children in third grade and under ¥1,500 (Tabelog). Reservations (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), IC cards, Rakuten Edy, nanaco, WAON, iD, QUICPay and QR (Tabelog). 62 seats, semi-private and fully private rooms; non-smoking; free Wi-Fi; dessert buffet (Tabelog; September 2026). Opened 25 April 2024 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 1-13-23, 日宝イルストリートビル 4F — 4 min from Nagahoribashi Stn, 5 min from Shinsaibashi Stn',
    cuisine: 'All-you-can-eat kuroge wagyu yakiniku from noon (Tabelog) · courses open with a wooden box of wagyu: thick-cut tongue, salted tongue, "melting" kalbi and loin; then order freely: nakaochi kalbi, outside skirt, pork belly, horumon, wagyu yaki-shabu kalbi (September–October 2026) · seared yukke sushi and seared tongue sushi; yukhoe with egg yolk; liver dipped in fried garlic (September–October 2026) · sides: namul, chilled tomato, kimchi, stone-pot bibimbap, cold noodles, yukgaejang; a self-serve curry with meat from a local butcher; ice cream to finish (September–October 2026)',
    website: null, gmaps: gm('大衆焼肉びりちゃん 難波・心斎橋店'), menu_url: null,
    notes: "[Yakiniku · Higashi-Shinsaibashi, all-you-can-eat wagyu from noon] A fourth-floor all-you-can-eat yakiniku, sister to Taishu Sakaba Birichan, open from 12:00 to 23:00 every day with semi-private rooms. Courses of about ¥5,500–¥6,000 start with a wooden box of thick tongue and marbled kalbi and loin, then let you order freely from wagyu cuts, horumon, seared yukke sushi and stone-pot bibimbap, with a self-serve butcher's curry and ice cream to end; lunch is cheaper. Diners in 2026 call it great value for the quality; one found the loin tough and the yaki-shabu kalbi mostly fat.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: the sister shop of the popular Taishu Sakaba Birichan, serving kuroge wagyu with all-you-can-eat-and-drink courses from 12:00; opened 25 April 2024.',
      philosophy: null, specialty: 'All-you-can-eat kuroge wagyu.',
      anecdotes: [
        { text: '"The \'Thick Cut Beef Tongue\' with hidden knife cuts was juicy and incredibly satisfying" — October 2026, the wagyu full course.', source: R + 'B523909200/' },
        { text: '"The staff taught me how to dip liver in fried garlic, and when I tried it, it was incredibly delicious!" — September 2026.', source: R + 'B535675989/' },
        { text: '"However, the loin was a bit tough with less fat, and the black wagyu grilled shabu short ribs ended up being mostly fat and burned" — September 2026, the ¥5,500 course.', source: R + 'B535077189/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 大衆焼肉びりちゃん 難波・心斎橋店、焼肉・ホルモン・韓国料理、東心斎橋1-13-23 日宝イルストリートビル 4F、Nagahoribashi 駅から徒歩4分、Shinsaibashi 駅から5分、毎日12:00〜23:00 (L.O.22:30)、年中無休、予約可、カード・電子マネー・QR可、62席、完全個室と半個室、禁煙、無料Wi-Fi、デザートビュッフェ、小学3年生以下は食べ飲み放題1,500円、2024年4月25日オープン、人気の大衆酒場びりちゃんの姉妹店、黒毛和牛の食べ飲み放題のコース。口コミ(2026年2月〜11月): 和牛の木箱の盛り合わせ (厚切りタン、塩タン、とろけるカルビ・ロース)、中落ちカルビ、外ハラミ、豚バラ、ホルモン、焼きしゃぶカルビ、炙りユッケ寿司、炙り牛タン寿司、卵黄のユッケ、揚げにんにくのレバー、石焼ビビンバ、冷麺、ユッケジャン、精肉店のカレー、アイス、5,500円と6,000円のコース、ソフトドリンク込み、アルコールは+1,100円、昼の食べ放題2,500円、ロースが固い、焼きしゃぶが脂ばかりという声も。',
      confidence: 'medium', sources: [TB, R + 'B501052818/', R + 'B523909200/', R + 'B527416031/', R + 'B535077189/', R + 'B535090849/', R + 'B535189475/', R + 'B535675989/', R + 'B535778993/', R + 'B535881387/', R + 'B537233538/', R + 'B537463765/', R + 'B538482292/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff explain how to eat dishes (September 2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-13-23 日宝イルストリートビル 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目13番23号 (go) 12m; the Tabelog point is identical to osaka_soba_izakaya_ruchin_higashishinsaibashi (same building), so set 5 m north of it (7 m from osaka_niku_bar_muu_higashishinsaibashi, 1F of the same building); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535189475/', R + 'B535881387/', R + 'B501052818/'],
    price_note: 'Prices from February–October 2026 reviews (as reported); no menu online.', last_checked: TODAY, items: [
      it('', '', 'Wagyu tasting course, all you can eat (soft drinks included)', '¥5,500', 'Courses', 'ask', 'no', 'September 2026.', 'course5500'),
      it('', '', 'Kuroge wagyu course, all you can eat (soft drinks included)', '¥6,000', 'Courses', 'ask', 'no', 'September–October 2026.', 'course6000'),
      it('', '', 'Alcohol all-you-can-drink add-on', '¥1,100', 'Drinks', 'ask', 'ask', 'February and September 2026.', 'alcohol'),
      it('', '', 'Lunch all-you-can-eat yakiniku', '¥2,500', 'Lunch', 'ask', 'no', 'February 2026.', 'lunch'),
    ] }, {
    cuisine: '昼12時からの黒毛和牛の食べ放題の焼肉 (食べログ)・コースは和牛の木箱から: 厚切りタン、塩タン、とろけるカルビとロース。あとは中落ちカルビ、外ハラミ、豚バラ、ホルモン、和牛の焼きしゃぶカルビを自由に (2026年9〜10月)・炙りユッケ寿司と炙り牛タン寿司、卵黄のユッケ、揚げにんにくにつけるレバー (2026年9〜10月)・ナムル、冷やしトマト、キムチ、石焼ビビンバ、冷麺、ユッケジャン、地元の精肉店の肉入りセルフカレー、締めのアイス (2026年9〜10月)',
    neighborhood: '東心斎橋1-13-23 日宝イルストリートビル 4F。Nagahoribashi 駅から徒歩4分、Shinsaibashi 駅から5分',
    gf_detail: '要確認。グルテンの情報なし。レモンで食べる塩の肉がいちばんシンプル。タレの肉、セルフカレー、冷麺、ビビンバ、ユッケジャンの中身は書かれていない。',
    vegan_detail: 'ヴィーガンではありません。和牛の食べ放題の焼肉店。',
    notes: '[焼肉・東心斎橋、昼からの和牛食べ放題] 大衆酒場びりちゃんの姉妹店で、ビルの4階にある食べ放題の焼肉店。毎日12時から23時まで、半個室も。5,500〜6,000円ほどのコースは厚切りタンと霜降りのカルビ、ロースの木箱から始まり、あとは和牛の部位、ホルモン、炙りユッケ寿司、石焼ビビンバを自由に注文。締めは精肉店のセルフカレーとアイス。昼はさらに手頃。2026年の口コミでは質のわりにお得と好評で、ロースが固い、焼きしゃぶカルビが脂ばかりという声も。',
  });
}

// ================================================================ お好み焼き 門
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27089330/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '23:00']);
  put({
    id: 'osaka_okonomiyaki_mon_namba', name: 'お好み焼き 門 (mon)', category: 'OMNI',
    lat: 34.666329, lng: 135.502315, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: okonomiyaki, negiyaki and yakisoba are wheat batter or noodles on shared griddles; the batter includes yam but is mostly flour (October 2025).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork, squid and beef-tendon okonomiyaki and teppan dishes, though Tabelog lists vegetarian options.',
    hours_raw: 'Tue–Sun and holidays 18:00–23:00; closed Mondays (generally); lunch may be suspended at busy times (Tabelog). Same-day reservations welcome; call ahead at peak times (Tabelog; March 2026). Cards (VISA, Master, JCB, AMEX, Diners) and PayPay; no e-money; no service or table charge (Tabelog). 35 seats: a counter of 14 (no griddle at the counter) and tables with griddles, semi-private rooms for 2–6; smoking allowed; free Wi-Fi and outlets; pets allowed, dogs welcome (Tabelog; September 2025–2026). Third floor by a slow lift (October 2025). Opened 15 December 2015 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba 3-1-33, 南中山ビル 3F, behind Bic Camera, next to the curry shop Jiyuken — 5 min from Namba Stn',
    cuisine: 'Okonomiyaki and teppanyaki, cooked by the staff and brought to the table griddle (Tabelog; 2025–2026) · butatama; mixed okonomiyaki with a fried egg; Hiroshima-style okonomiyaki; the batter uses yam (2025–2026) · negiyaki, nearly all green onion, with beef tendon, soy sauce and lemon, ¥1,350 (January and September 2026) · pork and squid yakisoba ¥990; dashimaki ¥550 (September 2025) · grilled squid, pork and cabbage omelette (tonpei-yaki), kimchi, kara-age, potato salad (2025–2026) · beer, highballs, a shochu-coffee highball (July 2026); sake (Tabelog); Tabelog lists vegetarian options',
    website: null, gmaps: gm('お好み焼き 門 難波'), menu_url: null,
    notes: "[Okonomiyaki · Namba, a dog-friendly okonomiyaki house behind Bic Camera] A third-floor okonomiyaki and teppan restaurant behind Bic Camera, next to Jiyuken, its walls covered in celebrities' signed photos and, rarely for Namba, open to dogs. The staff cook at the counter griddle and bring it to your table: fluffy butatama, a mixed okonomiyaki with a fried egg, pork and squid yakisoba, and a negiyaki that is almost all green onion with beef tendon and lemon. Diners in 2025–2026 call it affordable, local-feeling and easy to walk into; one found the batter a little heavy, and the counter seats have no griddle. Evenings, closed Mondays; smoking allowed.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: a long-established okonomiyaki and teppanyaki restaurant near Namba Station, frequented by celebrities; opened 15 December 2015. 2025–2026 reviews note signed photos on the walls and young staff at the griddle.',
      philosophy: null, specialty: 'Negiyaki; okonomiyaki.',
      anecdotes: [
        { text: '"This is an incredibly rare okonomiyaki restaurant in Namba that allows dogs." — September 2026, negiyaki with beef tendon.', source: R + 'B535379549/' },
        { text: '"I tried negiyaki for the first time, and I understood why it\'s so popular; it was much lighter than regular okonomiyaki" — June 2026.', source: R + 'B534646957/' },
        { text: '"It seems they use yam in the batter, but I must say that the flour was a bit overpowering, making it feel a little heavy." — October 2025, a mixed okonomiyaki.', source: R + 'B515695305/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): お好み焼き 門、お好み焼き・鉄板焼き・居酒屋、難波3-1-33 南中山ビル 3F、Namba 駅から徒歩5分、Bic Camera の裏、千日前の Jiyuken の隣、火〜日・祝 18:00〜23:00、月曜休み (基本)、混雑時は昼の営業を休むことも、当日予約歓迎、カード・PayPay可、電子マネー不可、サービス料・チャージなし、35席 (カウンター14、テーブル21)、半個室 (2〜6名)、喫煙可、無料Wi-Fi、電源、ペット可、ベジタリアンメニュー、2015年12月15日オープン、芸能人も通う老舗。口コミ(2025年8月〜2026年9月): 豚玉、目玉焼きのせミックス、広島焼き、生地に山芋、牛すじのねぎ焼き1,350円、豚いか焼きそば990円、だし巻き550円、いか焼き、とん平焼き、キムチ、唐揚げ、ポテトサラダ、焼酎のコーヒーハイボール、壁にサイン、犬連れ可、カウンターには鉄板なし、生地が少し重いという声も。',
      confidence: 'medium', sources: [TB, R + 'B512661986/', R + 'B514173187/', R + 'B514751747/', R + 'B515695305/', R + 'B520133034/', R + 'B521699009/', R + 'B524823938/', R + 'B529708123/', R + 'B531655998/', R + 'B534646957/', R + 'B534974465/', R + 'B535379549/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Popular with visitors and locals (January 2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波3-1-33 南中山ビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波三丁目1番33号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B514173187/', R + 'B520133034/'],
    price_note: 'Prices from September 2025–January 2026 reviews (as reported); no menu online.', last_checked: TODAY, items: [
      it('', '', 'Beef-tendon negiyaki (soy sauce)', '¥1,350', 'Okonomiyaki', 'no', 'no', 'January 2026.', 'suji_negiyaki'),
      it('', '', 'Pork and squid yakisoba', '¥990', 'Teppan', 'no', 'no', 'September 2025.', 'yakisoba'),
      it('', '', 'Dashimaki tamago', '¥550', 'Teppan', 'ask', 'no', 'September 2025.', 'dashimaki'),
      it('', '', 'Butatama (pork okonomiyaki)', '', 'Okonomiyaki', 'no', 'no', 'January 2026.', 'butatama'),
    ] }, {
    cuisine: 'お好み焼きと鉄板焼きで、店員が焼いてテーブルの鉄板に運んでくれる (食べログ、2025〜2026年)・豚玉、目玉焼きのせのミックス、広島焼き、生地には山芋 (2025〜2026年)・ほとんどがねぎの牛すじのねぎ焼き、醤油とレモンで1,350円 (2026年1月と9月)・豚いか焼きそば990円、だし巻き550円 (2025年9月)・いか焼き、とん平焼き、キムチ、唐揚げ、ポテトサラダ (2025〜2026年)・ビール、ハイボール、焼酎のコーヒーハイボール (2026年7月)、日本酒 (食べログ)、ベジタリアンメニューあり (食べログ)',
    neighborhood: '難波3-1-33 南中山ビル 3F、Bic Camera の裏、カレーの Jiyuken の隣。Namba 駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。お好み焼き、ねぎ焼き、焼きそばは小麦の生地や麺で、共用の鉄板で焼く。生地には山芋が入るが、ほとんどは粉 (2025年10月)。',
    vegan_detail: 'ヴィーガンではありません。豚、いか、牛すじのお好み焼きや鉄板料理。食べログにはベジタリアンメニューの記載あり。',
    notes: '[お好み焼き・難波、Bic Camera 裏の犬連れ OK のお好み焼き] Bic Camera の裏、Jiyuken の隣のビル3階にあるお好み焼きと鉄板焼きの店で、壁には芸能人のサイン、難波では珍しく犬も一緒に入れる。店員がカウンターの鉄板で焼いてテーブルに運ぶ: ふわふわの豚玉、目玉焼きのせのミックス、豚いか焼きそば、ほとんどねぎの牛すじとレモンのねぎ焼き。2025〜2026年の口コミでは手頃で地元らしく入りやすいという声が多く、生地が少し重いという声も。カウンター席には鉄板がない。夜だけ、月曜休み、喫煙可。',
  });
}

save();
