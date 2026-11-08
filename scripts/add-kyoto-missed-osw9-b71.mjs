// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 71.
// Rest list in the lane, nearest-first from Shijo-Kawaramachi (queue.mjs ... next rest 2000):
//   + 河しげ 三条本店 Kawashige (counter kappo off Sanjo since 1942; bento for Gion tea houses)
//   + 豚しゃぶ英 京都四条烏丸店 Tonshabu Hide (pork and beef shabu-shabu courses; 3 shops)
//   + Cafe Loto kyoto (coffee and baked sweets by a cookery researcher, in a renovated townhouse)
//   - THE CITY BAKERY 京都錦小路店 — chain (THE CITY BAKERY, many shops in Japan; THE CITY BAKERY BAR & GRILL 銀座インズ
//     in Tokyo data)
//   + ザ・ドアー 高倉店 The Door Takakura (machiya bar with food until 2 am; 2 shops)
//   Same-name counts first (data and queue-status.jsonl): CITY BAKERY in Tokyo data; none for 河しげ, 豚しゃぶ英, Loto,
//   ザ・ドアー. No earlier rulings. None drafted is in data/kyoto.json by name or address (hidden records included).
//   Groups: 豚しゃぶ英 has three shops (四条烏丸本店, 京都離れ店, 心斎橋店 — own site), none in data — drafted. The Door has
//   two shops in the crawl (Horikawa and Takakura), none in data — drafted.
//   Service charges checked against Tabelog's Japanese original: 河しげ 「チャージ料無し。」; 豚しゃぶ英 「チャージ料なし」;
//   ザ・ドアー 「チャージ600円」; Cafe Loto has no section.
//   Pins (checked against main 07fed619, hidden records included): all four match a GSI lot within 57 m. 豚しゃぶ英's
//   Tabelog point is 1.2 m from kyoto_warayaki_wadatsumi_karasuma (same 前田ビル, added by osw6-71) → moved 5 m south-west
//   (6.2 m clearance). The others are ≥ 9 m from every record.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-71');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26037887', 'chain: THE CITY BAKERY — many shops in Japan; THE CITY BAKERY BAR & GRILL 銀座インズ is in Tokyo data');

// ================================================================ 河しげ 三条本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26001119/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'http://kawashigeasoview.wix.com/mysite-1';
  const D = day(['11:30', '13:30'], ['17:30', '21:00']);
  put({
    id: 'kyoto_kawashige_sanjo', name: '河しげ 三条本店 (Kawashige)', category: 'OMNI',
    lat: 35.00854, lng: 135.769807, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Dashi-based Kyoto kappo with fried fu and soy-seasoned dishes (2011–2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi throughout, sashimi, hamo, squid (2011–2025 reviews).',
    hours_raw: 'Tue–Sun 11:30–13:30 and 17:30–21:00; closed Mondays (Tabelog). No cover charge (Tabelog Japanese original 「チャージ料無し。」). Bento to order, with delivery (Tabelog); a 2024 regular says bento must be ordered ahead. 15 seats; a private room for 4 (Tabelog). Down a narrow alley off Kawaramachi south of Sanjo, 3 min from Sanjo (Tabelog; 2011 and July 2025 reviews).',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kawaramachi, south of Sanjo — 3 min from Sanjo Stn',
    cuisine: 'Counter kappo and kaiseki: courses from ¥8,000 (Tabelog); an omakase from ¥15,000 with scallop and wasabi greens, simmered small potatoes, fried fu, Akashi sea bream, hamo and chu-toro sashimi, grilled aori squid, chestnuts and ginkgo (2011); bento with momiji tofu and kuzumochi, as delivered to Gion tea houses (November 2022); soup, grilled and simmered dishes in a July 2025 course; sake — Tamano Hikari in 2011, only Kiku Masamune in July 2025 (reviews)',
    website: WEB, gmaps: gm('河しげ 三条'), menu_url: null,
    notes: '[Kyoto kappo · Sanjo] A worn, quiet counter kappo down an alley off Kawaramachi-Sanjo, open since 1942 and among the first of its kind, still cooking bento for Gion tea houses: classic Kyoto courses from about ¥8,000, bento by order. About ¥15,000–20,000 at dinner.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Established in 1942, one of the pioneering counter kappo of Kyoto, which has trained many chefs and caters to Gion tea houses (September 2011 review); a July 2025 diner had heard it used to cater for Pontocho tea houses. Tabelog names Masako Shirasu, Shotaro Ikenami and Junichiro Tanizaki among those who loved it.',
      philosophy: null,
      specialty: 'Counter kappo; bento for tea houses.',
      anecdotes: [
        { text: 'A July 2025 group dinner found the soup, grilled and simmered dishes rooted in sound training, but wished for more than one sake, Kiku Masamune.', source: R + 'B510877453/' },
        { text: 'A diner with memories going back 38 years still receives summer and New Year greetings from the shop, and recommends the bento ordered ahead (April 2024).', source: R + 'B482699405/' },
        { text: 'A November 2022 diner in kimono ate the shop\'s bento at a Gion tea house, down to the momiji tofu and kuzumochi.', source: R + 'B459831535/' },
      ],
      japanese_sources_summary: '食べログ: 河しげ 三条本店、日本料理、中京区河原町通三条下る東入大黒町46、三条駅・京阪三条駅から徒歩3分、火〜日 11:30〜13:30・17:30〜21:00、月曜休み、チャージ料無し、15席、4人用の個室、仕出し弁当と配達、コースは8,000円から、Masako Shirasu・Shotaro Ikenami・Junichiro Tanizaki ゆかりの店 (紹介文、英訳)。口コミ (2008〜2025年、英語): 1942年創業、カウンター割烹の先駆け、祇園のお茶屋に仕出し、おまかせ15,000円から (2011年)、Akashi の鯛、鱧、トロ、aori いか、栗と銀杏、生麩の揚げ物、momiji 豆腐と葛餅の弁当 (2022年11月)、日本酒は2011年は Tamano Hikari、2025年7月は Kiku Masamune のみ。',
      confidence: 'medium', sources: [TB, WEB, R + 'B7723732/', R + 'B459831535/', R + 'B482699405/', R + 'B510877453/'] },
    cultural_comfort: { level: 'japanese', note: 'Traditional counter kappo.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区河原町通三条下る東入大黒町46',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2025.' },
    pin_source: `Tabelog ${TB} (35.008540, 135.769807); cross-checked: GSI 京都府京都市中京区大黒町46番地 (lot) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B7723732/'],
    price_note: 'Course price from Tabelog; omakase price from a 2011 review (old).', last_checked: TODAY, items: [
      it('', '', 'Course', 'from ¥8,000', 'Courses', 'ask', 'no', 'Tabelog.', 'course'),
      it('', '', 'Bento (order ahead)', '', 'Bento', 'ask', 'no', 'November 2022 and April 2024 reviews.', 'bento'),
    ] }, {
    cuisine: 'カウンター割烹と会席: コースは8,000円から (食べログ)、15,000円からのおまかせ (帆立とわさび菜、小芋の煮物、生麩の揚げ物、Akashi の鯛・鱧・中トロのお造り、aori いかの焼き物、栗と銀杏、2011年)、祇園のお茶屋に届けるmomiji 豆腐と葛餅の弁当 (2022年11月)、2025年7月のコースは椀、焼き物、炊き合わせ、日本酒は2011年は Tamano Hikari、2025年7月は Kiku Masamune のみ (口コミ)',
    neighborhood: '河原町、三条の南。三条駅から徒歩3分',
    gf_detail: '要確認。出汁が基本の京の割烹で、生麩の揚げ物や醤油の料理がある (2011〜2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。全体に出汁、お造り、鱧、いか (2011〜2025年の口コミ)。',
    notes: '[京の割烹・三条] 河原町三条の路地奥、1942年から続くカウンター割烹の草分け。今も祇園のお茶屋へ弁当を届ける。昔ながらの京料理のコースは8,000円ほどから、弁当は予約制。夜は1万5千〜2万円ほど。',
  });
}

// ================================================================ 豚しゃぶ英 京都四条烏丸店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26020319/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'http://shabushabu-hide.com/';
  const D = day(['11:00', '14:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_tonshabu_hide_shijo_karasuma', name: '豚しゃぶ英 京都四条烏丸店 (Tonshabu Hide)', category: 'OMNI',
    lat: 35.002695, lng: 135.762676, cuisine_type: 'sukiyaki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Shabu-shabu meat and vegetables, but ponzu, sesame and miso dipping sauces and the ramen to finish are wheat or soy-based (2014–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork, beef and chicken shabu-shabu (2014–2026 reviews).',
    hours_raw: 'Daily 11:00–14:00 (L.O. 13:30) and 17:00–22:00 (Tabelog). Bookings taken (Tabelog). No cover charge (Tabelog Japanese original 「チャージ料なし」). Cards and e-money (Tabelog). 80 seats, tables and sunken kotatsu; non-smoking, smoking near the entrance (Tabelog; February 2021 review). 2nd floor, 1 min from exit 15 of Karasuma / Shijo Stn (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shijo-Karasuma, Takakura — 1 min from Karasuma Stn',
    cuisine: 'Pork shabu-shabu with refills of vegetables and sides: special pork shabu-shabu course ¥2,480 (October 2019), Awa pork (2018), pork, chicken and beef all-you-can-eat course (April 2026), solo hot-pot lunch set with ponzu and miso (July 2022), lettuce in the vegetables, ramen to finish (2014–2019 reviews)',
    website: WEB, gmaps: gm('豚しゃぶ英 京都四条烏丸店'), menu_url: null,
    notes: '[Pork shabu-shabu · Shijo-Karasuma] A big, homely second-floor shabu-shabu room a minute from Karasuma, popular with overseas visitors: pork, chicken or beef with free refills of vegetables, cheap set courses and lunch hot pots. About ¥3,000–8,000.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'The Shijo-Karasuma main shop of three (with 京都離れ店 and 心斎橋店; own site). Homely service by older women on the staff (November 2023 and January 2026 reviews); English greetings and many overseas guests (November 2018 and December 2022 reviews).',
      philosophy: null,
      specialty: 'Pork shabu-shabu courses.',
      anecdotes: [
        { text: 'A New Year 2026 diner found the room nearly full by 6 pm and liked the older women on the staff and the free refills.', source: R + 'B521540829/' },
        { text: 'An April 2026 couple splurged on the pork, beef and chicken all-you-can-eat course and managed only one extra plate of beef.', source: R + 'B527735516/' },
        { text: 'A November 2023 diner who booked at the last minute was surprised by the warm welcome.', source: R + 'B474582406/' },
      ],
      japanese_sources_summary: '食べログ: 豚しゃぶ英 京都四条烏丸店、しゃぶしゃぶ・鍋・豚しゃぶ、下京区高材木町226 前田ビル2F、阪急烏丸駅・地下鉄四条駅15番出口から徒歩1分、毎日 11:00〜14:00 (L.O. 13:30)・17:00〜22:00、予約可、チャージ料なし、カード・電子マネー可、80席、禁煙 (入口付近で喫煙可)。公式サイト: 京都四条烏丸本店、京都離れ店、心斎橋店。口コミ (2014〜2026年、英語): 豚しゃぶの特選コース2,480円 (2019年10月)、Awa の豚、豚・牛・鶏の食べ放題 (2026年4月)、一人鍋のランチ、ポン酢と味噌、締めのラーメン、年配の女性スタッフ、海外の客が多い。',
      confidence: 'medium', sources: [TB, WEB, R + 'B401363915/', R + 'B421323484/', R + 'B451718875/', R + 'B457448305/', R + 'B474582406/', R + 'B494469235/', R + 'B499363708/', R + 'B521540829/', R + 'B527735516/'] },
    cultural_comfort: { level: 'english', note: 'Staff greet in English; many overseas guests (2018 and 2022 reviews).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区高材木町226 前田ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and own site; reviews dated through April 2026.' },
    pin_source: `Tabelog ${TB} (35.002727, 135.762715), 1.2 m from kyoto_warayaki_wadatsumi_karasuma (same 前田ビル, 1F) — moved 5 m south-west to (35.002695, 135.762676), 6.2 m clearance; cross-checked: GSI 京都府京都市下京区高材木町226番地 (lot) 25m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B421323484/', R + 'B527735516/'],
    price_note: 'Course price from an October 2019 review (old).', last_checked: TODAY, items: [
      it('', '', 'Special pork shabu-shabu course', '¥2,480', 'Courses', 'ask', 'no', 'October 2019 review.', 'pork_course'),
      it('', '', 'Pork, beef and chicken all-you-can-eat course', '', 'Courses', 'ask', 'no', 'April 2026 review.', 'aye'),
      it('', '', 'Solo hot-pot lunch set', '', 'Lunch', 'ask', 'no', 'July 2022 review.', 'lunch'),
    ] }, {
    cuisine: '野菜やサイドがおかわりできる豚しゃぶ: 豚しゃぶの特選コース2,480円 (2019年10月)、Awa の豚 (2018年)、豚・鶏・牛の食べ放題コース (2026年4月)、ポン酢と味噌の一人鍋のランチ (2022年7月)、野菜にレタス、締めのラーメン (2014〜2019年の口コミ)',
    neighborhood: '四条烏丸、高倉。烏丸駅から徒歩1分',
    gf_detail: '要確認。しゃぶしゃぶの肉と野菜だが、ポン酢・ごま・味噌のたれと締めのラーメンは小麦や大豆を含む (2014〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。豚・牛・鶏のしゃぶしゃぶ (2014〜2026年の口コミ)。',
    notes: '[豚しゃぶ・四条烏丸] 烏丸駅から1分のビル2階、家庭的で大きなしゃぶしゃぶの店。海外の客にも人気。豚・鶏・牛に野菜のおかわり、手頃なコースと昼の鍋。3,000〜8,000円ほど。',
  });
}

// ================================================================ Cafe Loto kyoto
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26039309/'; const R = TB + 'dtlrvwlst/';
  const D = day(['10:00', '18:00']);
  put({
    id: 'kyoto_cafe_loto_sanjo', name: 'Cafe Loto kyoto', category: 'OMNI',
    lat: 35.00718, lng: 135.773274, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: madeleines, egg tarts, financiers, roll cake and tarts (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: butter and egg baked sweets, café latte (2025–26 reviews).',
    hours_raw: 'Daily 10:00–18:00; hours may change (Tabelog). A February 2025 review gives Wed–Fri 12:00–18:00 and Sat 12:00–20:00. Seats upstairs require ordering food; drinks alone at the counter or the bench outside; shoes off upstairs (2025–26 reviews). Cards, e-money and QR (Tabelog). One table for six upstairs and a bench in front (2025–26 reviews). On Komonmae Street among antique shops and galleries, near Sanjo (Tabelog; January 2026 review).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Komonmae Street, Higashiyama near Sanjo — 4 min from Sanjo Stn',
    cuisine: 'Coffee and baked sweets: café latte ¥700, espresso ¥500, egg tart ¥400, madeleine ¥300 (February 2025); hot coffee ¥600 and pastel de nata ¥400 (January 2026); freshly baked madeleines (January 2026); chocolate financier (February 2026); seasonal caramel roll cake ¥600 and Brazil–Guatemala dark roast ¥600 (June 2026); mango tart and iced coffee (July 2026); lemonade with sliced lemon (2024)',
    website: null, gmaps: gm('Cafe Loto kyoto'), menu_url: null,
    notes: '[Café · Komonmae Street] A tiny coffee stand in a renovated townhouse among the antique shops of Komonmae Street, by a cookery researcher: espresso drinks and fresh madeleines, egg tarts and seasonal cakes, with one shared table upstairs (shoes off) or a bench outside. About ¥1,000–2,000.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened 23 February 2023; a café of the cookery researcher Masayo Takeda (February 2025 review), who also heads a culinary research institute (January 2026 review). Designed by the architect Yasushi Horibe, which draws architecture fans (February 2026 review). Latte-art events (August 2025 review).',
      philosophy: null,
      specialty: 'Madeleines and egg tarts with coffee.',
      anecdotes: [
        { text: 'After a Mika Ninagawa exhibition at the Kyoto City KYOCERA Museum of Art (March 2025), a visitor had a madeleine and café latte on the bench outside.', source: R + 'B488855204/' },
        { text: 'A March 2025 visitor who rarely eats egg tarts was won over by a burst of vanilla.', source: R + 'B502367217/' },
        { text: 'A January 2026 visitor arrived just as the madeleines came out of the oven and took more away.', source: R + 'B522582797/' },
      ],
      japanese_sources_summary: '食べログ: Cafe Loto kyoto、カフェ、東山区元町367、三条駅から235m、毎日 10:00〜18:00 (変更の可能性あり)、カード・電子マネー・QR 可。口コミ (2025〜2026年、英語): 2023年2月23日オープン、料理研究家 Masayo Takeda のカフェ、建築家 Yasushi Horibe の設計、Komonmae Street、町家を改装、2階は靴を脱いで6人掛けのテーブル1つ、2階の利用は食べ物の注文が必要、カフェラテ700円、エスプレッソ500円、エッグタルト400円、マドレーヌ300円、ホットコーヒー600円、キャラメルのロールケーキ600円、マンゴーのタルト、営業は水曜〜金曜 12:00〜18:00・土曜 12:00〜20:00 という口コミも (2025年2月)。',
      confidence: 'medium', sources: [TB, R + 'B488855204/', R + 'B502070908/', R + 'B502367217/', R + 'B520468232/', R + 'B522582797/', R + 'B523268483/', R + 'B523513184/', R + 'B530086611/', R + 'B531884973/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter; shoes off upstairs.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区元町367',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.007180, 135.773274); cross-checked: GSI 京都府京都市東山区元町367番地 (lot) 57m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B502070908/', R + 'B520468232/', R + 'B530086611/'],
    price_note: 'Prices from February 2025 – June 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Café latte', '¥700', 'Coffee', 'ask', 'no', 'February 2025 review.', 'latte'),
      it('', '', 'Hot coffee', '¥600', 'Coffee', 'ask', 'ask', 'January and June 2026 reviews.', 'coffee'),
      it('', '', 'Egg tart (pastel de nata)', '¥400', 'Sweets', 'no', 'no', 'February 2025 and January 2026 reviews.', 'egg_tart'),
      it('', '', 'Madeleine', '¥300', 'Sweets', 'no', 'no', 'February 2025 review.', 'madeleine'),
      it('', '', 'Caramel roll cake (seasonal)', '¥600', 'Sweets', 'no', 'no', 'June 2026 review.', 'roll_cake'),
    ] }, {
    cuisine: 'コーヒーと焼き菓子: カフェラテ700円、エスプレッソ500円、エッグタルト400円、マドレーヌ300円 (2025年2月)、ホットコーヒー600円とパステル・デ・ナタ400円 (2026年1月)、焼きたてのマドレーヌ (2026年1月)、チョコレートのフィナンシェ (2026年2月)、季節のキャラメルのロールケーキ600円とブラジル・グアテマラの深煎り600円 (2026年6月)、マンゴーのタルトとアイスコーヒー (2026年7月)、レモンの輪切りのレモネード (2024年)',
    neighborhood: 'Komonmae Street、東山の三条近く。三条駅から徒歩4分',
    gf_detail: 'グルテンフリー不可。マドレーヌ、エッグタルト、フィナンシェ、ロールケーキ、タルト (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。バターや卵の焼き菓子、カフェラテ (2025〜26年の口コミ)。',
    notes: '[カフェ・Komonmae Street] Komonmae Street の骨董店の並びの町家を改装した小さなコーヒースタンド。料理研究家の店で、エスプレッソのドリンクと焼きたてのマドレーヌ、エッグタルト、季節のケーキ。2階は靴を脱いで相席のテーブル1つ、店先にベンチ。1,000〜2,000円ほど。',
  });
}

// ================================================================ ザ・ドアー 高倉店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26016791/'; const R = TB + 'dtlrvwlst/';
  const D = day(['18:00', '26:00']);
  put({
    id: 'kyoto_the_door_takakura', name: 'ザ・ドアー 高倉店 (The Door Takakura)', category: 'OMNI',
    lat: 35.002798, lng: 135.762641, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A bar with a full food menu — carbonara, katsu sandwich, omurice — mostly wheat; cheese and nuts may suit (2018–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Drinks and mixed nuts; most food is meat, egg or cheese (2018–2026 reviews).',
    hours_raw: 'Daily 18:00–02:00; irregular closures (Tabelog); last order 2 am (May 2026 review). Bookings taken (Tabelog). Cover charge ¥600 (Tabelog Japanese original 「チャージ600円」). Cards (JCB, AMEX, Diners); no e-money (Tabelog). 31 seats: 9 at the counter, 22 at tables, private rooms upstairs; smoking allowed (Tabelog; May 2025 review). In a remodelled townhouse on Takakura just south of Shijo, by Daimaru (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shijo-Takakura, by Daimaru — 5 min from Karasuma Stn',
    cuisine: 'Machiya bar with a real food menu: single-malt highballs such as Royal Lochnagar 12, Highland Park 12 and Talisker 10, smoked cheese and mixed nuts (May 2025); martini, Royal Lochnagar twice up, Johnnie Walker Gold Label (October 2025); carbonara and a kiwi cooler ¥1,600 (May 2026); katsu sandwich, demi-glace omurice, cheese assortment (2018)',
    website: null, gmaps: gm('The door 高倉店 京都'), menu_url: null,
    notes: '[Machiya bar · Shijo-Takakura] A bar in a remodelled townhouse by Daimaru, with a counter and small garden downstairs and private rooms upstairs: single-malt highballs, cocktails and a surprisingly full food menu until 2 am. Smoking allowed. About ¥3,000–6,000.',
    chef_bio: { chef_name: null, roles: ['Bartenders (unnamed)'], origin: null,
      background: 'Opened 23 September 2010 (Tabelog). A remodelled townhouse; the small garden behind the counter was designed by Katsuaki Ogawa, son of the 11th-generation Ogawa Jihei (Tabelog). A sister bar, The door Horikawa, is in the Tabelog crawl.',
      philosophy: null,
      specialty: 'Single-malt highballs; late-night food.',
      anecdotes: [
        { text: 'On a May 2025 bar crawl, turned away from a famous bar next door, a visitor let the bartender choose single-malt highballs and talked Hanshin baseball with the next customer.', source: R + 'B218730264/' },
        { text: 'A May 2026 visitor came after the last train for carbonara and a ¥1,600 kiwi cooler — about ¥6,000 for two.', source: R + 'B380678951/' },
        { text: 'On the first night of an October 2025 weekend in Kyoto, a visitor made it a fourth stop for a martini and a Royal Lochnagar twice up.', source: R + 'B516506519/' },
      ],
      japanese_sources_summary: '食べログ: ザ・ドアー 高倉店、バー・ワインバー、下京区高倉通四条下ル高材木町224、四条烏丸駅から徒歩5分 (Daimaru 前の Louis Vuitton の横の通り)、毎日 18:00〜翌2:00、不定休、予約可、チャージ600円、カード (JCB・AMEX・Diners) 可、電子マネー不可、31席 (カウンター9、テーブル22)、個室、喫煙可、2010年9月23日オープン、町家を改装したバー、1階カウンター奥の坪庭は十一代 Ogawa Jihei の息子 Katsuaki Ogawa の作 (英訳)。口コミ (2018〜2026年、英語): シングルモルトのハイボール、スモークチーズとミックスナッツ、マティーニ、カルボナーラ、キウイのクーラー1,600円、カツサンド、デミグラスのオムライス、2階の個室。',
      confidence: 'medium', sources: [TB, R + 'B218730264/', R + 'B380678951/', R + 'B516506519/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Bar; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区高倉通四条下ル高材木町224',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through May 2026. The bar-door.com site did not resolve on ' + TODAY + '.' },
    pin_source: `Tabelog ${TB} (35.002798, 135.762641); cross-checked: GSI 京都府京都市下京区高材木町224番地 (lot) 21m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B380678951/'],
    price_note: 'Cover charge from Tabelog; drink price from a May 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Cover charge', '¥600', 'Charge', 'ask', 'ask', 'Tabelog.', 'charge'),
      it('', '', 'Kiwi cooler', '¥1,600', 'Cocktails', 'ask', 'ask', 'May 2026 review.', 'kiwi'),
      it('', '', 'Carbonara', '', 'Food', 'no', 'no', 'May 2026 review.', 'carbonara'),
    ] }, {
    cuisine: 'しっかりした料理もある町家のバー: Royal Lochnagar 12年、Highland Park 12年、Talisker 10年などのシングルモルトのハイボール、スモークチーズとミックスナッツ (2025年5月)、マティーニ、Royal Lochnagar のトワイスアップ、Johnnie Walker Gold Label (2025年10月)、カルボナーラとキウイのクーラー1,600円 (2026年5月)、カツサンド、デミグラスのオムライス、チーズの盛り合わせ (2018年)',
    neighborhood: '四条高倉、Daimaru の近く。烏丸駅から徒歩5分',
    gf_detail: '要確認。カルボナーラ、カツサンド、オムライスなど料理は小麦が多い。チーズやナッツは合う可能性 (2018〜2026年の口コミ)。',
    vegan_detail: '要確認。飲み物とミックスナッツ。料理の多くは肉、卵、チーズ (2018〜2026年の口コミ)。',
    notes: '[町家のバー・四条高倉] Daimaru 近くの町家を改装したバー。1階はカウンターと坪庭、2階は個室。シングルモルトのハイボール、カクテル、意外に豊富な料理を深夜2時まで。喫煙可。3,000〜6,000円ほど。',
  });
}

save();
