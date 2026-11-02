// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first; worker osw4 (lane: Tabelog id mod 4 = 3), batch 15.
//   + 串かつ ひょうたん 本店 Kushikatsu Hyotan Honten (big kushikatsu and teppan izakaya behind NGK, Sennichimae)
//   + 百十 なんばこめじるし店 Momoju Namba Komejirushi (monjayaki and okonomiyaki in Namba CITY)
//   + 肉バルGAM 難波本店 Niku Bar GAM Namba Honten (meat bar, 200 drinks, Namba)
//   + 中国酒家 朝陽閣 長堀店 Choyokaku Nagahori (Chinese set meals and three dandan noodles, Crysta Nagahori)
//   - 27003495 香港蒸蘢 難波: a buffet brand of Create Restaurants (multi-brand operator; a Yodobashi Umeda shop is
//     named by July 2026 reviewers); branch count not confirmed, skipped as a chain-company brand. Flag if wrong.
//   Group-size line (brief, 2026-11-02): 2–4 same-concept shops with none in data = small group, drafted.
//   ひょうたん: one shop found; shares はつせビル with 千日前 はつせ (osaka_sennichimae_hatsuse, okonomiyaki) — a
//   different format, no stated link. 百十: main shop in Nagai (August 2026 review) and a Grand Front Osaka shop
//   (aumo) — small group. GAM: 2nd shop お初天神店 opened 2018 (ikyu) — small group. 朝陽閣: also パナンテ天満橋店
//   (autoreserve) — small group. None of the four is in data/osaka.json (grep by name, Tabelog id and address).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw4-15');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27003495', 'chain: 香港蒸蘢 buffet brand of Create Restaurants (multi-brand chain operator); Yodobashi Umeda shop also named');

// ================================================================ 串かつ ひょうたん 本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27085555/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '24:00']);
  put({
    id: 'osaka_kushikatsu_hyotan_honten', name: '串かつ ひょうたん 本店 (Kushikatsu Hyotan Honten)', category: 'OMNI',
    lat: 34.66548, lng: 135.503785, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: battered, deep-fried kushikatsu, plus crispy fried gyoza and tonpei-yaki.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: kushikatsu of beef, pork, chicken, shrimp and fish alongside the vegetable skewers, with doteyaki and gyoza; nothing is described as vegan.',
    hours_raw: 'Daily 11:30–24:00, last order 23:00; open year-round; set meals at lunch only, 11:30–16:00 (Tabelog). Reservations accepted (Tabelog). Charge ¥300 per person (Tabelog). Payment: Tabelog lists cards (VISA, Master, JCB, AMEX, Diners) and e-money, no QR payment; an August 2026 reviewer at a mid-afternoon lunch was told cash only — ask. 140 seats with a counter and enclosed private rooms for 2 to 30; heated tobacco only in a designated area, smoking area outside; wheelchair accessible (Tabelog). Strollers fit inside (October 2026). Water on request (August 2026). Takeaway takoyaki temporarily suspended (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba Sennichimae 11-25, はつせビル 1F, behind NGK — 3 min from Namba Walk exit B21 or Nannan Town exit E5',
    cuisine: 'Kushikatsu and teppan izakaya: skewers with a batter and frying oil developed in-house; signature gyukatsu of misuji beef, curry-flavoured "tulip" chicken, tonpei-yaki, homemade crispy fried gyoza, over 50 drinks (Tabelog shop text) · courses of 15 dishes: ¥3,500, or ¥5,000 with 100 minutes of drinks; à la carte all-you-can-drink 100 minutes ¥1,680 (Tabelog) · lunch: set of 9 kushikatsu (beef, pork, chicken, shrimp, kisu, octopus, onion, asparagus, quail egg) plus a small dish such as addictive cucumber or beef-tendon stew (October 2026); dashimaki set meal ¥720 before tax with two small dishes (October 2026); lunches under ¥1,000 (August 2026) · à la carte: shiitake, eggplant, lotus root, whiting, negima skewers (August 2026), stuffed shishamo (September 2026), doteyaki (August 2026), spicy cucumber with the seeds removed (September 2026), fried rice (August 2026) · free cabbage (October 2026)',
    website: null, gmaps: gm('串かつ ひょうたん 本店'), menu_url: null,
    notes: '[Kushikatsu · Sennichimae, a big, lively skewer house behind NGK] A 140-seat kushikatsu and teppan izakaya just behind the Yoshimoto theatre, open from 11:30 to midnight every day, with a counter and plenty of enclosed private rooms. Order a mix of skewers with the misuji gyukatsu, the tonpei-yaki and the crispy gyoza; at lunch there are sets of nine skewers or a ¥720 dashimaki set. Reviewers praise the light batter; order in small batches so the skewers stay hot. Card payment is listed, but one 2026 lunch visitor was told cash only.',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per the Tabelog shop listing (corporate member): opened 6 April 2015; kushikatsu with batter and frying oil developed through the shop\'s own research.', philosophy: null, specialty: 'Misuji gyukatsu; tonpei-yaki; crispy fried gyoza.',
      anecdotes: [
        { text: '"I visited during holiday lunchtime after going to the Yoshimoto Theater. The restaurant has plenty of seating, so I was able to get in right away." — September 2026.', source: R + 'B536502281/' },
        { text: '"All the freshly fried Kushi Katsu arrived at once. If you want to enjoy them hot, it might be better to order in smaller batches." — September 2026.', source: R + 'B534929842/' },
        { text: '"Just a heads up, ... only accept cash for payment." — August 2026, lunch after 15:00 (Tabelog lists cards).', source: R + 'B534527712/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 串かつ ひょうたん 本店、串揚げ・鉄板焼き・居酒屋、大阪市中央区難波千日前11-25 はつせビル 1F、NGK の裏、Namba Walk の B21出口・Nannan Town の E5出口から徒歩3分、毎日11:30〜24:00 (L.O. 23:00)、年中無休、定食は昼のみ (11:30〜16:00)、予約可、チャージ300円、カード・電子マネー可、QR 決済不可、140席、個室 (2〜30名)、加熱式たばこのみの喫煙所、2015年4月6日オープン。衣と揚げ油にこだわった串かつ、みすじの牛肉のカツ、カレー風味のチューリップ、とんぺい焼き、手作りのパリパリ焼き餃子、50種以上のドリンク、15品のコース3,500円、飲み放題つき5,000円。口コミ(2026年8月〜10月): 串かつ9本のランチ、だし巻き定食720円 (税抜)、1,000円以下のランチ、どて焼き、ししゃも、種を取ったきゅうり、無料のキャベツ、衣が軽い、まとめて出てくるので少しずつ注文を、現金のみと言われたという声。',
      confidence: 'medium', sources: [TB, R + 'B532964084/', R + 'B533414418/', R + 'B533555201/', R + 'B533663373/', R + 'B534527454/', R + 'B534527712/', R + 'B534929842/', R + 'B536502281/', R + 'B536547769/', R + 'B537406099/', R + 'B537720253/', R + 'B537747191/', R + 'B537761844/', R + 'B538028779/', R + 'B538309162/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Large, lively and easy to walk into; private rooms. A gurunavi-sourced listing mentions English (search result, 2026-11-02), not confirmed on Tabelog.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波千日前11-25 はつせビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} 34.665442,135.50375 and GSI 大阪府大阪市中央区難波千日前11番25号 (go) 34.665447,135.503723 both sit 4 m from 千日前 はつせ (osaka_sennichimae_hatsuse, same building 2F); pin offset to 34.66548,135.503785, about 8 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537720253/', R + 'B537761844/', TB],
    price_note: 'Courses from the Tabelog listing; lunch prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Gyukatsu (misuji beef cutlet)', '', 'Signature', 'no', 'no', 'Tabelog shop text.', 'gyukatsu'),
      it('', '', 'Tonpei-yaki', '', 'Teppan', 'ask', 'no', 'Tabelog shop text.', 'tonpeiyaki'),
      it('', '', 'Homemade crispy fried gyoza', '', 'Teppan', 'no', 'no', 'Tabelog shop text.', 'hanetsuki_gyoza'),
      it('', '', 'Lunch: 9 kushikatsu set with a small dish', '', 'Lunch', 'no', 'no', 'October 2026 review.', 'kushi9_set'),
      it('', '', 'Lunch: dashimaki set meal', '¥720 + tax', 'Lunch', 'ask', 'no', 'October 2026 review.', 'dashimaki_teishoku'),
      it('', '', 'Special course, 15 dishes', '¥3,500', 'Course', 'no', 'no', 'Tabelog listing; ¥5,000 with 100 minutes of drinks.', 'special_course'),
    ] }, {
    cuisine: '串かつと鉄板の居酒屋: 衣と揚げ油を独自に研究した串かつ。名物はみすじの牛肉のカツ、カレー風味の「チューリップ」、とんぺい焼き、手作りのパリパリ焼き餃子、ドリンクは50種以上 (食べログの店の紹介)・15品のコース3,500円、100分飲み放題つき5,000円、アラカルトの100分飲み放題1,680円 (食べログ)・昼: 串かつ9本 (牛、豚、鶏、エビ、キス、タコ、玉ねぎ、アスパラ、うずら) と小鉢 (やみつききゅうり、牛すじ煮込みなど) (2026年10月)、だし巻き定食720円 (税抜)、小鉢2品つき (2026年10月)、1,000円以下のランチ (2026年8月)・単品: しいたけ、なす、れんこん、キス、ねぎまの串 (2026年8月)、子持ちししゃも (2026年9月)、どて焼き (2026年8月)、種を取ったピリ辛きゅうり (2026年9月)、チャーハン (2026年8月)・無料のキャベツ (2026年10月)',
    neighborhood: '難波千日前11-25 はつせビル 1F、NGK の裏。Namba Walk の B21出口・Nannan Town の E5出口から徒歩3分',
    gf_detail: 'グルテンフリーではありません。衣をつけて揚げた串かつに、パリパリの焼き餃子、とんぺい焼き。',
    vegan_detail: 'ヴィーガンではありません。野菜の串のほかに牛、豚、鶏、エビ、魚の串かつ、どて焼き、餃子。ヴィーガンの説明はない。',
    notes: '[串かつ・千日前、NGK 裏の大きくにぎやかな串かつ屋] Yoshimoto の劇場のすぐ裏、140席の串かつと鉄板の居酒屋で、毎日11:30から深夜0時まで。カウンターと仕切られた個室が多い。串の盛り合わせに、みすじの牛肉のカツ、とんぺい焼き、パリパリ餃子を。昼は串9本のセットや720円のだし巻き定食も。衣が軽いと好評。熱いうちに食べるなら少しずつ注文を。カードが使えると書かれているが、2026年の昼に現金のみと言われたという声も。',
  });
}

// ================================================================ 百十 なんばこめじるし店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27011683/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:00'], ['17:00', '22:30']);
  put({
    id: 'osaka_momoju_namba_komejirushi', name: '百十 なんばこめじるし店 (Momoju Namba Komejirushi)', category: 'OMNI',
    lat: 34.660725, lng: 135.503053, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: monjayaki and okonomiyaki are wheat-flour batters, and yakisoba is wheat noodles.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the monjayaki base is a Western-style stock of chicken bones, onion, celery and red wine (Tabelog shop text), and okonomiyaki comes with bonito flakes (May 2026).',
    hours_raw: 'Daily 11:30–15:00 (last food order 14:00) and 17:00–22:30 (last food order 21:30); closed irregularly once or twice a month, see Instagram (Tabelog). Reservations: Tabelog says not accepted, while reviewers booked in May and July 2026 — ask. Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), transport IC, iD, QUICPay and QR payment (Tabelog). 40 seats: 4 at the counter, 36 at tables; non-smoking (Tabelog). Menu in English, Simplified Chinese and Korean; English-speaking staff (Tabelog). Seats by the entrance get hot in summer (July 2026). Okonomiyaki takes about 30 minutes (August 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba-naka 2-10-25, Namba CITY "Namba Komejirushi" food street — 3 min from Nankai Namba Stn, 8 min from subway Namba Stn',
    cuisine: 'Osaka-style monjayaki on a Western-style stock of chicken bones, onion, celery and red wine; also ochazuke (Tabelog shop text) · 29 kinds of monjayaki and okonomiyaki (search result) · monjayaki cooked at the table by staff: Momoju monjayaki, mentaiko potato mayo cheese (April 2026), mentaiko special ¥1,980 with double mentaiko, mochi, cheese, potato, tomato and kimchi (June 2026), curry, negi-suji curry (May–July 2026), potato mayo corn (August 2026), mochi cheese mentaiko (October 2026); about ¥1,780 for one serving (August 2026) · okonomiyaki and yakisoba come cooked from the kitchen: fluffy okonomiyaki, beef-tendon okonomiyaki, pork okonomiyaki (2026); pork yakisoba ¥1,100 (May 2026), seafood yakisoba ¥1,440 (June 2026), kimchi omu-soba, yakisoba with domestic pork and fried egg (July–October 2026) · beef-tendon stew, potato salad, spicy cucumber, horumon stir-fry, cheese tonpei, tonpeiyaki, shrimp mayo, yam with yuzu, celery with lemon, fried rice (2026) · à la carte only at lunch, no set meals (May 2026)',
    website: 'https://nambacity.com/nam-come/shoplist/momojyu/', gmaps: gm('百十 なんばこめじるし'), menu_url: null,
    notes: '[Monjayaki · Namba CITY, Osaka-style monja cooked for you] A monjayaki and okonomiyaki shop in the Namba Komejirushi food street under Nankai Namba, branch of a long-running Osaka monja house whose batter uses a Western-style chicken and vegetable stock. Staff cook the monja at your table — try the mentaiko special (¥1,980) and finish with the crispy edges; okonomiyaki and yakisoba arrive cooked. English menu and English-speaking staff. Expect queues at weekend lunch; okonomiyaki takes about 30 minutes.',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per the Tabelog listing: a long-established Osaka-style monjayaki restaurant loved by Kansai locals. An August 2026 reviewer says the main shop is in Nagai; aumo (search result) mentions a Grand Front Osaka shop.', philosophy: null, specialty: 'Osaka-style monjayaki with a Western-style stock.',
      anecdotes: [
        { text: '"This time, I found myself nearby at an early hour, so I checked for reservations and was able to secure one perfectly!" — May 2026, after eyeing it for 3–4 years past long lines.', source: R + 'B529705771/' },
        { text: '"I had forgotten how to eat it, so the staff kindly showed me." — July 2026, a second try at monjayaki.', source: R + 'B532272204/' },
      ],
      japanese_sources_summary: '食べログ: 百十 なんばこめじるし店、もんじゃ焼き・お好み焼き・鉄板焼き、大阪市浪速区難波中2-10-25 なんばCITY なんばこめじるし、南海なんば駅から徒歩3分、毎日11:30〜15:00 (料理 L.O. 14:00)、17:00〜22:30 (料理 L.O. 21:30)、不定休 (月1〜2回、Instagram で案内)、予約不可、カード・電子マネー・QR 決済可、40席 (カウンター4、テーブル36)、禁煙、英語・中国語・韓国語のメニュー、英語を話すスタッフ。鶏ガラ、玉ねぎ、セロリ、赤ワインの洋風だしの大阪らしいもんじゃ、お茶漬けも。口コミ(2026年4月〜10月): もんじゃは店の人が焼いてくれる、明太スペシャル1,980円、カレー、ねぎすじカレー、ふわふわのお好み焼き、すじのお好み焼き、豚焼きそば1,100円、海鮮焼きそば1,440円、とんぺい、山芋の柚子、昼は単品のみ、本店は Nagai、予約して行ったという声、お好み焼きは30分ほどかかる。',
      confidence: 'medium', sources: [TB, 'https://nambacity.com/nam-come/shoplist/momojyu/', R + 'B526203330/', R + 'B526841033/', R + 'B527772210/', R + 'B527932160/', R + 'B528199550/', R + 'B529591748/', R + 'B529705771/', R + 'B531090788/', R + 'B531242517/', R + 'B531615357/', R + 'B532272204/', R + 'B533372122/', R + 'B534508901/', R + 'B534511068/', R + 'B537985820/', 'https://foodle.pro/restaurants/osaka/momoju'] },
    cultural_comfort: { level: 'english', note: 'English, Chinese and Korean menus and English-speaking staff (Tabelog); staff cook the monjayaki and show you how to eat it (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区難波中2-10-25 なんばCITY なんばこめじるし',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and Namba CITY shop page; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区難波中二丁目10番25号 (go) 7m. Same food street as きんちゃく家 なんば店 (osaka_kinchakuya_namba), 34 m away on its own point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B529591748/', R + 'B527772210/', TB],
    price_note: 'Prices from May–June 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Mentaiko special monjayaki (double mentaiko, mochi, cheese, potato, tomato, kimchi)', '¥1,980', 'Monjayaki', 'no', 'no', 'June 2026 review.', 'mentai_special_monja'),
      it('', '', 'Momoju monjayaki', '', 'Monjayaki', 'no', 'no', 'April 2026 review.', 'momoju_monja'),
      it('', '', 'Pork yakisoba', '¥1,100', 'Yakisoba', 'no', 'no', 'May 2026 review.', 'buta_yakisoba'),
      it('', '', 'Seafood yakisoba', '¥1,440', 'Yakisoba', 'no', 'no', 'June 2026 review.', 'kaisen_yakisoba'),
      it('', '', 'Beef-tendon okonomiyaki', '', 'Okonomiyaki', 'no', 'no', 'August 2026 review.', 'suji_okonomiyaki'),
    ] }, {
    cuisine: '鶏ガラ、玉ねぎ、セロリ、赤ワインの洋風だしで作る大阪らしいもんじゃ。お茶漬けも (食べログの店の紹介)・もんじゃとお好み焼きは29種 (検索結果)・もんじゃは店の人がテーブルで焼く: 百十もんじゃ、明太ポテトマヨチーズ (2026年4月)、明太スペシャル1,980円 (明太子2倍、餅、チーズ、ポテト、トマト、キムチ) (2026年6月)、カレー、ねぎすじカレー (2026年5〜7月)、ポテトマヨコーン (2026年8月)、餅チーズ明太 (2026年10月)、1人前1,780円ほど (2026年8月)・お好み焼きと焼きそばは厨房で焼いて出てくる: ふわふわのお好み焼き、すじのお好み焼き、豚玉 (2026年)、豚焼きそば1,100円 (2026年5月)、海鮮焼きそば1,440円 (2026年6月)、キムチのオムそば、国産豚と目玉焼きの焼きそば (2026年7〜10月)・牛すじ煮込み、ポテトサラダ、ピリ辛きゅうり、ホルモン炒め、チーズとんぺい、とんぺい焼き、エビマヨ、山芋の柚子、セロリのレモン、チャーハン (2026年)・昼は単品のみで定食はない (2026年5月)',
    neighborhood: '難波中2-10-25 なんばCITY「なんばこめじるし」。南海なんば駅から徒歩3分、地下鉄なんば駅から徒歩8分',
    gf_detail: 'グルテンフリーではありません。もんじゃとお好み焼きは小麦粉の生地、焼きそばは小麦の麺。',
    vegan_detail: 'ヴィーガンではありません。もんじゃの生地は鶏ガラ、玉ねぎ、セロリ、赤ワインの洋風だし (食べログの店の紹介)、お好み焼きにはかつお節 (2026年5月)。',
    notes: '[もんじゃ・なんばCITY、焼いてくれる大阪らしいもんじゃ] 南海なんば駅下の「なんばこめじるし」にある、もんじゃとお好み焼きの店。鶏と野菜の洋風だしを使う大阪の老舗もんじゃの支店。もんじゃは店の人がテーブルで焼いてくれるので、明太スペシャル (1,980円) を頼んで、最後はカリカリのおこげを。お好み焼きと焼きそばは焼いて出てくる。英語のメニューと英語を話すスタッフあり。週末の昼は並ぶことも。お好み焼きは30分ほどかかる。',
  });
}

// ================================================================ 肉バルGAM 難波本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27087427/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['17:00', '25:00']), SU = day(['17:00', '23:30']);
  put({
    id: 'osaka_niku_bar_gam_namba_honten', name: '肉バルGAM 難波本店 (Niku Bar GAM Namba Honten)', category: 'OMNI',
    lat: 34.666419, lng: 135.499363, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Steaks and meat sashimi come with sauces, ajillo with baguette, and courses include onion fries and wagyu tendon stew.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a red-meat bar; the free salad that comes with a steak order is the main vegetable dish.',
    hours_raw: 'Mon–Sat 17:00–25:00 (last order 24:00); Sun and the last day of long holidays 17:00–23:30 (last order 23:00); closed irregularly (Tabelog). A May 2026 reviewer had sukiyaki here at lunch. Reservations accepted online until 22:00 on the day, three groups a day; pairs may be seated at the counter (Tabelog). Appetiser ¥440 (Tabelog). All-you-can-drink of 200 drinks: ¥1,000 for two hours (January 2026), ¥1,500 (May 2026); the minimum food order has changed over time — three dishes per person (March 2026), one steak per person (June 2026), two dishes per person (October 2026). Cards (VISA, Master, JCB, AMEX, Diners), e-money and PayPay (Tabelog). 60 seats over the 2nd and 3rd floors; the 3rd floor can be booked privately (up to 30); smoking allowed (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WD, 6: SU }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba 4-6-3, 南進ビル 2F, behind the former Kabukiza — 5 min from Namba Stn exit 12',
    cuisine: 'Meat bar of red meat and rare cuts, oyster-and-meat dishes and meat sushi; order a steak and the salad is free (Tabelog shop text) · courses with two hours of 200 drinks: seasonal value course of 6 dishes (soup, salad, cold meat starter, wagyu tendon stew, onion fries, teppan steak); banquet course of 9 dishes with oysters, meat sushi and steak ¥6,500 (Tabelog) · thigh steak sushi (March–April 2026) · top-blade sashimi (March 2026) · rib-roast steak, "Niku-ra" (meat and ikura), horse sashimi, mushroom and oil-sardine sauté (April 2026) · vichyssoise, roast beef and avocado salsa, chicken ham, prosciutto (May 2026) · steak, top blade, yukhoe, shrimp ajillo, chicken salad (August 2026) · tataki with momiji-oroshi and jelly sauce (September 2026) · curry or gelato to finish a course (February 2026) · lunch sukiyaki, regular 150 g black wagyu with rice refills and egg, ¥5,720 with black oolong tea (May 2026)',
    website: null, gmaps: gm('肉バルGAM 難波本店'), menu_url: null,
    notes: '[Meat bar · Namba, steaks with free salad and cheap drinks] A late-opening meat bar on two floors behind the old Namba Kabukiza, serving red-meat steaks, meat sashimi and meat sushi, with a free salad when you order a steak. The draw is the 200-drink all-you-can-drink, ¥1,000–1,500 for two hours in 2026, but it now comes with a minimum food order. Portions are small, so order several plates. Smoking is allowed; many foreign guests (October 2026). Book: online slots are limited.',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per the Tabelog shop listing (corporate member): opened 1 September 2015, floors renewed October 2021. A second shop, お初天神店 in Umeda, opened in September 2018 (ikyu, search result).', philosophy: null, specialty: 'Red-meat steaks; meat sushi.',
      anecdotes: [
        { text: '"For the all-you-can-drink option, you now have to order one steak per person, and the prices have really gone up" — June 2026, a regular.', source: R + 'B508040604/' },
        { text: '"I was surprised by the small size of the meat dishes. They were truly just bite-sized!" — April 2026.', source: R + 'B525523545/' },
        { text: '"It was almost fully booked, with many foreign guests as well." — October 2026.', source: R + 'B537458648/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 肉バルGAM 難波本店、肉バル・ステーキ、大阪市中央区難波4-6-3 南進ビル 2F、なんば駅12番出口から徒歩5分、月〜土17:00〜翌1:00 (L.O. 24:00)、日・連休最終日17:00〜23:30 (L.O. 23:00)、不定休、予約可 (ネット予約は当日22時まで、1日3組)、お通し440円、カード・電子マネー・PayPay 可、60席、3階は貸切可 (30名まで)、喫煙可、2015年9月1日オープン。赤身と希少部位、牡蠣と肉、肉寿司、ステーキを頼むとサラダが無料、200種の飲み放題つきのコース。口コミ(2026年1月〜10月): 飲み放題は1,000円 (2026年1月)、1,500円 (2026年5月)、条件は1人3品 (3月)、1人ステーキ1枚 (6月)、1人2品 (10月)、肉寿司、Top blade の刺身、Niku-ra、馬刺し、マッシュルームとオイルサーディン、たたき、量は少なめ、昼はすき焼き (2026年5月)、外国人客も多い。',
      confidence: 'medium', sources: [TB, R + 'B500851578/', R + 'B508040604/', R + 'B511272653/', R + 'B520837826/', R + 'B520996364/', R + 'B521203336/', R + 'B522022860/', R + 'B523659342/', R + 'B525523545/', R + 'B527754668/', R + 'B528773893/', R + 'B534766726/', R + 'B535075519/', R + 'B537458648/', R + 'B538401342/', 'https://restaurant.ikyu.com/121867/highlights'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Many foreign guests (October 2026); smoking allowed. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波4-6-3 南進ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波四丁目6番3号 (go) 6m. Nearest record: 浪速炉ばた 東洋小噺 (osaka_naniwa_robata_toyo_kobayashi_namba, 4-2-13) 13 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B527754668/', R + 'B521203336/', TB],
    price_note: 'Courses from the Tabelog listing; drink and lunch prices from January–May 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'All-you-can-drink, 200 drinks, 2 hours (with a minimum food order)', '¥1,000–1,500', 'Drinks', 'ask', 'ask', 'January and May 2026 reviews; conditions changed during 2026.', 'nomihodai'),
      it('', '', 'Banquet course, 9 dishes with oysters, meat sushi, steak and drinks', '¥6,500', 'Course', 'ask', 'no', 'Tabelog listing.', 'banquet_course'),
      it('', '', 'Steak (free salad with order)', '', 'Steak', 'ask', 'no', 'Tabelog shop text; 2026 reviews.', 'steak'),
      it('', '', 'Thigh steak sushi', '', 'Meat sushi', 'ask', 'no', 'March–April 2026 review.', 'niku_sushi'),
      it('', '', 'Lunch sukiyaki, 150 g black wagyu, with black oolong tea', '¥5,720', 'Lunch', 'ask', 'no', 'May 2026 review.', 'lunch_sukiyaki'),
    ] }, {
    cuisine: '赤身と希少部位の肉バル。牡蠣と肉の料理、肉寿司、ステーキを頼むとサラダが無料 (食べログの店の紹介)・200種2時間飲み放題つきのコース: 季節のお得なコース6品 (スープ、サラダ、冷たい肉の前菜、和牛すじ煮込み、オニオンフライ、鉄板ステーキ)、牡蠣、肉寿司、ステーキの宴会コース9品6,500円 (食べログ)・もも肉のステーキ寿司 (2026年3〜4月)・Top blade の刺身 (2026年3月)・リブロースステーキ、「Niku-ra」(肉といくら)、馬刺し、マッシュルームとオイルサーディンのソテー (2026年4月)・ヴィシソワーズ、ローストビーフとアボカドのサルサ、鶏ハム、生ハム (2026年5月)・ステーキ、Top blade、ユッケ、エビのアヒージョ、チキンサラダ (2026年8月)・もみじおろしとジュレのたたき (2026年9月)・コースの締めはカレーかジェラート (2026年2月)・昼のすき焼き、黒毛和牛150gの並、ご飯おかわりと卵つき、黒ウーロン茶とで5,720円 (2026年5月)',
    neighborhood: '難波4-6-3 南進ビル 2F、旧 Kabukiza の裏。なんば駅12番出口から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。ステーキと肉の刺身はソースで、アヒージョにはバゲット、コースにはオニオンフライと和牛すじ煮込み。',
    vegan_detail: 'ヴィーガンではありません。赤身肉のバルで、野菜はステーキを頼むと無料のサラダが中心。',
    notes: '[肉バル・なんば、無料サラダのステーキと安い飲み放題] 旧 Namba Kabukiza の裏、2フロアの遅くまで開いている肉バル。赤身のステーキ、肉の刺身、肉寿司で、ステーキを頼むとサラダが無料。目玉は200種の飲み放題で、2026年は2時間1,000〜1,500円だが、料理の注文に条件がつくようになった。量は少なめなので何皿か頼んで。喫煙可。外国人客も多い (2026年10月)。ネット予約の枠が少ないので早めに。',
  });
}

// ================================================================ 中国酒家 朝陽閣 長堀店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27014651/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '22:00']);
  put({
    id: 'osaka_choyokaku_nagahori', name: '中国酒家 朝陽閣 長堀店 (Choyokaku Nagahori)', category: 'OMNI',
    lat: 34.675025, lng: 135.505378, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The set meals pair stir-fries with an egg-and-sauce dish, kara-age, shrimp tempura and gyoza; dandan noodles and ramen are wheat noodles.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a Chinese set-meal restaurant built on pork, chicken, shrimp and egg dishes; nothing is described as vegan.',
    hours_raw: 'Daily 11:00–22:00, last order 21:30; closed irregularly with the building (Tabelog). Set meals served through the afternoon, still after 16:00 (October 2026); pan-fried gyoza not served at lunch (August 2026). Reservations accepted; drink plans from ¥3,500 bookable on the day (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), transport IC, nanaco, WAON and iD; no QR payment (Tabelog). 44 seats, semi-private table for up to 12; non-smoking; children welcome (Tabelog). Busy at weekday noon, quieter after 12:30 (September 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Minami-Senba 2, Crysta Nagahori underground mall, gourmet zone — 1 min from Nagahoribashi Stn, 5 min from Shinsaibashi Stn',
    cuisine: 'Chinese restaurant known for three dandan noodles — rich "White", aromatic "Black" and spicy "Red" (Tabelog shop text); White is sesame and miso (October 2026); Red is numbing and spicy with thin noodles (October 2026 review) · set meals under ¥1,000 at lunch (August 2026): fried rice set ¥950 (September 2026), kara-age set ¥990 with an egg-and-sauce dish to pour over rice (September 2026), sweet and sour pork set, beef with green peppers set, weekly set, B set of shrimp chili, egg with sauce, soup, three dim sum and rice (August 2026); A set with dandan noodles (September 2026) · Choyokaku ramen, an ankake stir-fried noodle (August 2026); cold Chinese noodles with soy or sesame sauce and jellyfish (August 2026) · à la carte: fried chicken, pork kimchi, mapo tofu, pan-fried gyoza, spring rolls, five-ingredient yakisoba (August 2026) · quick drink set: draft beer, gyoza and kara-age ¥1,290 (August 2026) · drink plans: casual ¥3,500, special ¥4,000, best selection ¥5,000 with black-vinegar sweet and sour pork or chili prawns and scallops (Tabelog)',
    website: 'https://www.crystaweb.jp/shop/choyokaku.html', gmaps: gm('中国酒家 朝陽閣 長堀店'), menu_url: null,
    notes: '[Chinese · Crysta Nagahori, set meals and three dandan noodles] A long-running Chinese restaurant in the Crysta Nagahori underground mall, with set meals mostly under ¥1,000 served all afternoon. Order a dandan noodle — white (sesame and miso), black or red (numbing and spicy) — or the kara-age set with its egg-and-sauce dish to pour over the rice. In the evening a beer, gyoza and kara-age set is ¥1,290. Busy at noon; quieter after 12:30.',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per the Tabelog shop listing (corporate member): in the Crysta Nagahori gourmet zone; 44 seats. An August 2026 reviewer heard it has been a long-standing Chinese restaurant for decades. Another shop, パナンテ天満橋店, appears on autoreserve; one October 2026 review on this listing describes a visit to a shop at Keihan Tenmabashi.', philosophy: null, specialty: 'Three dandan noodles (white, black, red); set meals.',
      anecdotes: [
        { text: '"You can choose from three types of gyoza and five or six types of kara-age. The draft beer is a proper size" — August 2026, the ¥1,290 quick drink set.', source: R + 'B533275685/' },
        { text: '"Even though it was past 4 PM, ... set meals available!" — October 2026.', source: R + 'B538036704/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 中国酒家 朝陽閣 長堀店、中華料理・飲茶・餃子、大阪市中央区南船場2 クリスタ長堀 地下街ショッピンググルメゾーン、長堀橋駅から徒歩1分、心斎橋駅から徒歩5分、毎日11:00〜22:00 (L.O. 21:30)、ビルの休館日など不定休、予約可、カード・電子マネー可、QR 決済不可、44席、半個室 (12名まで)、禁煙、子ども可。名物は白・黒・赤の3種の担々麺、飲み放題のプラン3,500円から。口コミ(2026年8月〜10月): 1,000円以下の定食、チャーハン定食950円、唐揚げ定食990円と玉子のあんかけ、酢豚定食、牛肉とピーマンの定食、B セット、朝陽閣ラーメン、冷やし中華、軽く飲むセット1,290円、16時過ぎも定食あり、白の担々麺はごまと味噌、昼は混むが12時半を過ぎると落ち着く。',
      confidence: 'medium', sources: [TB, 'https://www.crystaweb.jp/shop/choyokaku.html', R + 'B490976629/', R + 'B533015562/', R + 'B533275685/', R + 'B533652541/', R + 'B533999925/', R + 'B534580751/', R + 'B534697765/', R + 'B535135397/', R + 'B535964738/', R + 'B536498888/', R + 'B536770138/', R + 'B536853849/', R + 'B537492392/', R + 'B538036704/', 'https://autoreserve.com/en/restaurants/Vb3yvKSPjET5hiDsCLfk'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set-meal restaurant in an underground mall; quick service (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場2 クリスタ長堀 地下街ショッピンググルメゾーン',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and Crysta Nagahori shop page; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; no street number for GSI (underground mall). Nearest record: カドヤ食堂 クリスタ長堀店 (osaka_kadoya_shokudo_crysta_nagahori, same mall) 11 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535135397/', R + 'B536853849/', R + 'B533275685/', TB],
    price_note: 'Prices from August–September 2026 reviews; drink plans from the Tabelog listing.', last_checked: TODAY, items: [
      it('', '', 'Dandan noodles: White (sesame and miso), Black or Red (numbing and spicy)', '', 'Noodles', 'no', 'no', 'Tabelog shop text; October 2026 reviews.', 'tantanmen'),
      it('', '', 'Kara-age set meal with egg-and-sauce dish', '¥990', 'Set meals', 'no', 'no', 'September 2026 review.', 'karaage_teishoku'),
      it('', '', 'Fried rice set meal', '¥950', 'Set meals', 'ask', 'no', 'September 2026 review.', 'chahan_teishoku'),
      it('', '', 'Quick drink set (draft beer, gyoza, kara-age)', '¥1,290', 'Drinks', 'no', 'no', 'August 2026 review.', 'choinomi_set'),
      it('', '', 'Casual Chinese drink plan, 2 hours with draft beer', '¥3,500', 'Course', 'no', 'no', 'Tabelog listing.', 'casual_plan'),
    ] }, {
    cuisine: '3種の担々麺が名物の中華料理店: 濃厚な「白」、香りの「黒」、辛い「赤」(食べログの店の紹介)。白はごまと味噌 (2026年10月)、赤は細麺でしびれる辛さ (2026年10月の口コミ)・昼は1,000円以下の定食 (2026年8月): チャーハン定食950円 (2026年9月)、唐揚げ定食990円、ご飯にかける玉子のあんかけつき (2026年9月)、酢豚定食、牛肉とピーマンの定食、週替わり定食、エビチリ・玉子のあんかけ・スープ・点心3種・ご飯の B セット (2026年8月)、担々麺の A セット (2026年9月)・朝陽閣ラーメンはあんかけの炒め麺 (2026年8月)、醤油かごまだれの冷やし中華、くらげのせ (2026年8月)・単品: 唐揚げ、豚キムチ、麻婆豆腐、焼き餃子、春巻き、五目焼きそば (2026年8月)・軽く飲むセット: 生ビール、餃子、唐揚げで1,290円 (2026年8月)・飲み放題プラン: 3,500円、4,000円、黒酢の酢豚かエビとホタテのチリソースを選ぶ5,000円 (食べログ)',
    neighborhood: '南船場2、クリスタ長堀の地下街グルメゾーン。長堀橋駅から徒歩1分、心斎橋駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。定食は炒め物に玉子のあんかけ、唐揚げ、エビの天ぷら、餃子。担々麺とラーメンは小麦の麺。',
    vegan_detail: 'ヴィーガンではありません。豚、鶏、エビ、卵の料理が中心の中華の定食屋で、ヴィーガンの説明はない。',
    notes: '[中華・クリスタ長堀、定食と3種の担々麺] クリスタ長堀の地下街にある長く続く中華料理店で、ほとんど1,000円以下の定食を午後もずっと出している。担々麺は白 (ごまと味噌)、黒、赤 (しびれる辛さ) から。唐揚げ定食は玉子のあんかけをご飯にかけて。夜は生ビール、餃子、唐揚げのセットが1,290円。昼は混むが12時半を過ぎると落ち着く。',
  });
}

save();
