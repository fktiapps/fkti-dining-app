// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 30.
// + 百春 momoharu (nine-seat Teramachi cafe, egg sandwich and hand-dripped coffee; core list)
// + 沁みる SHIMIRU (miso-soup set breakfast and lunch in a Shijo Karasuma alley; core list)
// + アグレアーブル Agreable (French patisserie on Ebisugawa, chef trained at Gérard Mulot; notable list)
// + ザ・ブレッド THE BREAD (bakery of Kyoto Yaoichi Honkan, 1F; notable list)
// - 本家 第一旭 烏丸店 26041687 (core): branch of a brand already in data (本家 第一旭 本店, 第一旭 熊野店, 第一旭 桂店); our
// crawls list 5 第一旭 shops — skipped.
// - 吉野家 烏丸五条店 26023087, スターバックスコーヒー コトチカ烏丸御池店 26026909 (core): national chains — skipped.
// Picked 2026-11-06 after batch 29. `queue.mjs kyoto-missed next core 200`, mod 6 = 1: 26041687, 26023087 (skipped),
// 百春 26026255, 26026909 (skipped), 沁みる 26041213. `next notable 200`: アグレアーブル 26022241, ザ・ブレッド 26022247.
// Same-name check, same brand or operator only: one 百春, one 沁みる (an Osaka sushi shop, Sushi Shimiru, is unrelated), one
// アグレアーブル, one ザ・ブレッド. THE BREAD is a sister concept of SAVORY (kyoto_savory_yaoichi_honkan, 3F of the same
// Yaoichi Honkan building, in data) — a single-store produce house, drafted as a sister concept. None of the four is in
// data/kyoto.json: grep by name and address (常盤木町55, 新釜座町735, 天守町757, 三文字町220 1F) found none.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-30');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260202/26041687/', 'chain branch: 本家 第一旭 — 本店, 熊野店 and 桂店 already in data; 5 第一旭 shops in our crawls');
skip('https://tabelog.com/en/kyoto/A2601/A260201/26023087/', 'national chain: 吉野家');
skip('https://tabelog.com/en/kyoto/A2601/A260202/26026909/', 'national chain: Starbucks');

// ================================================================ 百春
{
 const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26026255/'; const R = TB + 'dtlrvwlst/';
 const H = day(['11:00', '17:00']);
 put({
 id: 'kyoto_momoharu_teramachi', name: '百春 (momoharu)', category: 'OMNI',
 lat: 35.014177, lng: 135.767468, cuisine_type: 'cafe',
 gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: the menu centres on an egg sandwich on soft bread, French toast and cakes (2025–2026 reviews).',
 vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: egg sandwich, French toast and cakes; coffee is the only plant-based item reviewers mention (2025–2026 reviews).',
 hours_raw: '11:00–17:00; closed Tuesday and Thursday (Tabelog). No reservations (Tabelog); expect a short wait at lunch and on weekends (November 2025; September 2026). 9 seats: 4 at tables and 5 at the counter; non-smoking; signs ask guests to speak quietly (Tabelog; September 2026). Cash only — no cards, e-money or QR (Tabelog). 2F of the Taneike building on Teramachi-dori near Marutamachi, overlooking the street; 4 min walk from Kyoto Shiyakusho-mae Stn (Tabelog; May 2026). Opened 1 September 2015 (Tabelog).',
 hours: { 0: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
 flags: { reservation: false, cash_only: true, halal: false, open_late: false },
 neighborhood: 'Teramachi-dori near Marutamachi, upstairs — 4 min walk from Kyoto Shiyakusho-mae Stn',
 cuisine: 'Quiet upstairs coffee shop (2025–2026 reviews) · a thick, hot egg sandwich of a salt-seasoned omelette of 3–4 eggs with a demi-glace and ketchup sauce, ¥880 (July 2026) · French toast with maple syrup ¥880, the cake of the day, brandy cake (May–September 2026) · hand-dripped coffee from beans roasted in-house each morning (July 2026): Momoharu Blend ¥660, plus Ethiopia, Brazil, Guatemala and Mandheling; café latte (2025–2026 reviews) · about ¥1,000–2,000 (Tabelog)',
 website: null, gmaps: gm('百春 momoharu 寺町 京都'), menu_url: null,
 notes: '[Café · Teramachi Marutamachi, upstairs and quiet] A nine-seat café on the second floor above Teramachi-dori, known for its egg sandwich: a thick omelette of three or four eggs, made to order and served steaming, with a sweet-tangy sauce, ¥880. French toast, cakes and hand-dripped coffee roasted in-house, from a house blend to single origins. Calm and bookish, with a quiet-please sign; often a short wait. Cash only; closed Tuesday and Thursday.',
 chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
 background: 'Per Tabelog: opened 1 September 2015, nine seats, registered as an official listing by the shop. Reviewers describe beans roasted in-house each morning and hand-dripped (July 2026), books to read (December 2025) and a feature in the magazine Kuuneru (August 2026).',
 philosophy: null, specialty: 'Egg sandwich.',
 anecdotes: [
 { text: 'An August 2026 visitor, having read about the café in the magazine Kuuneru, ordered the egg sandwich and blend to recreate the cover photo at the counter.', source: R + 'B534631168/' },
 { text: 'A December 2025 pilgrim on the Rakuyo 33 Kannon temple circuit stopped in, hungry, for an egg sandwich and a Mandheling.', source: R + 'B397058826/' },
 { text: 'The omelette is made from three to four eggs seasoned only with salt, with a demi-glace and ketchup sauce between egg and bread — July 2026.', source: R + 'B531710625/' },
 ],
 japanese_sources_summary: '食べログ: カフェ、中京区常盤木町55 種池ビル 2F、京都市役所前駅から徒歩4分、11:00〜17:00、火曜・木曜定休、予約不可、9席 (テーブル4、カウンター5)、禁煙、カード・電子マネー・QR 不可、2015年9月1日オープン。口コミ (2025年11月〜2026年9月、英語): 寺町通の2階、厚くて熱々の玉子サンド880円 (卵3〜4個、塩だけで焼き、デミグラスとケチャップのソース)、フレンチトースト880円、本日のケーキ、ブランデーケーキ、毎朝自家焙煎のハンドドリップのコーヒー、ブレンド660円、エチオピア、ブラジル、グアテマラ、マンデリン、カフェラテ、本が置いてある、「お静かに」の貼り紙、雑誌「Kuuneru」に掲載。',
 confidence: 'medium', sources: [TB, R + 'B397058826/', R + 'B518246541/', R + 'B519240430/', R + 'B525091838/', R + 'B527938338/', R + 'B530702858/', R + 'B531710625/', R + 'B534631168/', R + 'B536964169/', R + 'B538492795/'] },
 cultural_comfort: { level: 'konnichiwa', note: 'Order at your seat; keep voices low; cash only; small, so you may wait.' },
 safety: SAFETY0,
 mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区常盤木町55 種池ビル 2F',
 existence: { status: 'confirmed', checked: TODAY, note: 'Official Tabelog listing; reviews through September 2026.' },
 pin_source: `Tabelog ${TB} (35.014177, 135.767468); cross-checked: GSI 京都府京都市中京区常盤木町55番地 (lot) 15 m; nearest Kyoto record kyoto_suehiro_teramachi 37 m; ${TODAY}`,
 }, { verified: 'provisional', confidence: 'low', sources: [R + 'B518246541/', R + 'B527938338/'],
 price_note: 'Prices from November 2025 and May 2026 reviews.', last_checked: TODAY, items: [
 it('', '', 'Egg sandwich', '¥880', 'Food', 'no', 'no', 'Made to order.', 'egg_sando'),
 it('', '', 'French toast', '¥880', 'Food', 'no', 'no', 'With maple syrup.', 'french_toast'),
 it('', '', 'Momoharu Blend coffee', '¥660', 'Drinks', 'ask', 'ask', 'Hand-dripped.', 'blend_coffee'),
 ] }, {
 cuisine: '静かな2階の喫茶 (2025〜2026年の口コミ)・厚くて熱々の玉子サンド: 卵3〜4個を塩だけで焼き、デミグラスとケチャップのソース、880円 (2026年7月)・メープルシロップのフレンチトースト880円、本日のケーキ、ブランデーケーキ (2026年5〜9月)・毎朝自家焙煎の豆のハンドドリップのコーヒー (2026年7月): ブレンド660円、エチオピア、ブラジル、グアテマラ、マンデリン、カフェラテ (2025〜2026年の口コミ)・1,000〜2,000円ほど (食べログ)',
 neighborhood: '丸太町近くの寺町通、ビルの2階。京都市役所前駅から徒歩4分',
 gf_detail: 'グルテンフリー不可。柔らかいパンの玉子サンド、フレンチトースト、ケーキが中心 (2025〜2026年の口コミ)。',
 vegan_detail: 'ヴィーガン不可。玉子サンド、フレンチトースト、ケーキ。植物性の品として口コミにあるのはコーヒーだけ (2025〜2026年の口コミ)。',
 notes: '[カフェ・寺町丸太町、2階の静かな店] 寺町通に面したビルの2階、9席のカフェ。名物は玉子サンドで、卵3〜4個の厚い玉子焼きを注文ごとに熱々で出し、甘酸っぱいソースを挟む、880円。フレンチトースト、ケーキ、自家焙煎のハンドドリップのコーヒーはブレンドからシングルオリジンまで。本も置かれた落ち着いた店で「お静かに」の貼り紙がある。少し待つことが多い。現金のみ、火曜・木曜休み。',
 });
}

// ================================================================ 沁みる SHIMIRU
{
 const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26041213/'; const R = TB + 'dtlrvwlst/';
 const H = day(['08:30', '14:00']);
 put({
 id: 'kyoto_shimiru_misoshiru', name: '沁みる (SHIMIRU)', category: 'OMNI',
 lat: 35.003064, lng: 135.755745, cuisine_type: 'shokudo',
 gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Miso soups from around Japan — one option is Kagoshima barley miso, which contains barley — with rice bowls dressed in a sesame sauce; no gluten information (Tabelog; 2026 reviews).',
 vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The soups are full of vegetables and tofu, but one reviewer remarks on the dashi and the rice bowls use bonito flakes, tuna flakes, chicken or egg; some soups are pork-based (2026 reviews).',
 hours_raw: 'Daily 8:30–14:00 (Tabelog); mixed rice can sell out by about 12:30 (May 2026). Reservations accepted (Tabelog). Order and pay at the counter on entry (June 2026). 20 seats: 6 at the counter and 2 tables of 4, with tatami seating; non-smoking (Tabelog). Cards, e-money and QR (Tabelog). In a narrow alley of townhouses between Karasuma and Omiya, a block from Shijo-dori; 5 min walk from Hankyu Karasuma Stn (Tabelog; 2026 reviews).',
 hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
 flags: { reservation: true, cash_only: false, halal: false, open_late: false },
 neighborhood: 'Shijo Karasuma, a townhouse alley west of Karasuma — 5 min walk from Karasuma Stn',
 cuisine: 'Miso-soup specialist for breakfast and lunch: a set of one rice dish, a miso soup and small daily sides (Tabelog) · miso from around Japan — Hokkaido, Aichi Hatcho, Kyoto white, Kagoshima barley, Niigata floating koji (Tabelog) · about nine soups, e.g. Hokkaido corn and potato, Kyoto white miso with a whole tomato and Kyoto vegetables, an Okinawa-style pork miso soup (2026 reviews) · rice choices such as bonito-flake rice, tuna-flake rice with egg yolk and sesame sauce, chicken and burdock rice, kamameshi (2026 reviews) · sides of tamagoyaki, takuan and bean sprouts (March and September 2026) · sets ¥1,100 (2026 reviews)',
 website: null, gmaps: gm('沁みる SHIMIRU 京都 味噌汁'), menu_url: null,
 notes: '[Miso soup · Shijo Karasuma back alley, breakfast and lunch] A miso-soup specialist tucked in a townhouse lane west of Shijo Karasuma: pick a rice (bonito flakes, tuna flakes with egg yolk, chicken and burdock) and one of about nine hearty soups made with miso from around Japan — Hokkaido corn and potato, or Kyoto white miso with a whole tomato — with small sides, for about ¥1,100. Counter and tatami. Some find the soups mild, some salty; one summer visit had a broken air conditioner. Open daily from 8:30.',
 chef_bio: { chef_name: null, roles: ['Owner (unnamed; called young by a July 2026 reviewer) and staff'], origin: null,
 background: 'Per Tabelog: a miso-soup specialist offering five kinds of miso — Hokkaido, Aichi Hatcho, Kyoto white, Kagoshima barley and Niigata floating koji — in sets of rice, miso soup and a daily side, in a Japanese-style room with counter and tatami seats; registered as an official listing by the shop. Reviewers in 2026 describe a hidden shop in an alley of townhouses, found via Instagram (September 2026).',
 philosophy: 'Miso soups from all over Japan in a relaxing Japanese room (Tabelog).', specialty: 'Regional miso soups with vegetables.',
 anecdotes: [
 { text: 'A May 2026 traveller, a ramen man whose wife picked the place, ordered bonito-flake rice with an Okinawa-style miso soup and called it a great start to the trip.', source: R + 'B528236449/' },
 { text: 'In July 2026 the air conditioning broke; a single fan cooled a few seats while other guests sweated over the soup.', source: R + 'B532436570/' },
 { text: 'A September 2026 visitor from Kanto chose the Kyoto white miso soup with a whole tomato and found a surprisingly large sweet potato inside.', source: R + 'B535981358/' },
 ],
 japanese_sources_summary: '食べログ: 食堂、下京区新釜座町735-2、阪急烏丸駅から徒歩約5分、地下鉄四条駅から徒歩約6分、毎日 8:30〜14:00、予約可、20席 (カウンター6、4人がけテーブル2)、座敷あり、禁煙、カード・電子マネー・QR 可。店の紹介: 味噌汁専門店、北海道の味噌、愛知の八丁味噌、京都の白味噌、鹿児島の麦味噌、新潟の浮き麹味噌の5種、ご飯と味噌汁と日替わりの小鉢のセット、カウンターと座敷。口コミ (2026年3月〜10月、英語): 町家の並ぶ細い路地、入口で注文と支払い、ご飯 (おかか、ツナ、鶏ごぼう、釜飯など) と約9種の味噌汁から選ぶ、北海道のとうもろこしとじゃがいも、京野菜と丸ごとトマトの白味噌汁、沖縄風の豚汁のような味噌汁、ごまだれ、卵黄、小鉢 (卵焼き、たくあん、もやし)、セット1,100円、味が薄い・塩辛いとの声、エアコンの故障 (2026年7月)、男性アイドルグループの映像が流れていた (2026年7月)。',
 confidence: 'medium', sources: [TB, R + 'B524130595/', R + 'B526869436/', R + 'B528236449/', R + 'B529551316/', R + 'B529879926/', R + 'B532436570/', R + 'B532836453/', R + 'B535934712/', R + 'B535981358/', R + 'B537630953/'] },
 cultural_comfort: { level: 'konnichiwa', note: 'Order and pay at the counter; pick a rice and a soup; cards, e-money and QR.' },
 safety: SAFETY0,
 mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区新釜座町735-2',
 existence: { status: 'confirmed', checked: TODAY, note: 'Official Tabelog listing; reviews through October 2026.' },
 pin_source: `Tabelog ${TB} (35.003064, 135.755745); cross-checked: GSI 京都府京都市下京区新釜座町735番地 (lot) 4 m; nearest Kyoto record 58 m away; ${TODAY}`,
 }, { verified: 'provisional', confidence: 'low', sources: [R + 'B524130595/', R + 'B532836453/'],
 price_note: 'Set price from March and July 2026 reviews.', last_checked: TODAY, items: [
 it('', '', 'Set: bonito-flake rice, miso soup of choice, sides', '¥1,100', 'Sets', 'ask', 'no', 'March 2026.', 'okaka_set'),
 it('', '', 'Set: chicken and burdock rice, miso soup of choice, sides', '¥1,100', 'Sets', 'ask', 'no', 'July 2026.', 'torigobo_set'),
 ] }, {
 cuisine: '朝と昼の味噌汁専門店: ご飯もの、味噌汁、日替わりの小鉢のセット (食べログ)・全国の味噌 (北海道、愛知の八丁味噌、京都の白味噌、鹿児島の麦味噌、新潟の浮き麹味噌) (食べログ)・約9種の味噌汁 (例: 北海道のとうもろこしとじゃがいも、丸ごとトマトと京野菜の白味噌、沖縄風の豚の味噌汁) (2026年の口コミ)・ご飯はおかか、卵黄とごまだれのツナ、鶏ごぼう、釜飯など (2026年の口コミ)・小鉢は卵焼き、たくあん、もやしなど (2026年3月・9月)・セット1,100円 (2026年の口コミ)',
 neighborhood: '四条烏丸、烏丸の西の町家の路地。烏丸駅から徒歩5分',
 gf_detail: '要確認。全国の味噌の味噌汁 (鹿児島の麦味噌は大麦を含む) と、ごまだれのご飯もの。グルテンの情報はない (食べログ、2026年の口コミ)。',
 vegan_detail: '要確認。味噌汁は野菜と豆腐がたっぷりだが、だしに触れた口コミがあり、ご飯もののおかか、ツナ、鶏、卵、豚の味噌汁もある (2026年の口コミ)。',
 notes: '[味噌汁・四条烏丸の路地、朝と昼] 四条烏丸の西、町家の路地にある味噌汁専門店。ご飯 (おかか、卵黄のせのツナ、鶏ごぼう) と、全国の味噌を使う約9種の具だくさんの味噌汁 (北海道のとうもろこしとじゃがいも、丸ごとトマトの京都の白味噌など) を選び、小鉢付きで1,100円ほど。カウンターと座敷。味が薄い、塩辛いと感じる人もいる。夏にエアコンが故障した日もあった。毎日8:30から。',
 });
}

// ================================================================ アグレアーブル Agreable
{
 const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26022241/'; const R = TB + 'dtlrvwlst/';
 put({
 id: 'kyoto_agreable_ebisugawa', name: 'アグレアーブル (Agreable)', category: 'OMNI',
 lat: 35.014795, lng: 135.762573, cuisine_type: 'sweets',
 gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: a French patisserie of tarts, roll cakes, mille-feuille, choux, sablés and financiers (2025–2026 reviews).',
 vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: all dairy comes from Takahashi Dairy, with cream, custard, butter and eggs throughout (June 2026).',
 hours_raw: 'Opens 10:00 and closes when sold out — usually by early afternoon (Tabelog; September 2026); closed on irregular days, posted on Instagram (Tabelog; 2025–2026 reviews). Come early for choice; queues at opening on busy days (January 2025). No reservations (Tabelog). 4 seats at one table; mostly takeaway; packs cakes with ice for long trips (Tabelog; April 2026). Cash only — no cards, e-money or QR (Tabelog). Under a yellow awning on Ebisugawa-dori east of Takakura; 5 min walk from Marutamachi Stn (Tabelog; July 2026). Opened 12 April 2013 (Tabelog).',
 hours: {}, hours_status: 'varies',
 flags: { reservation: false, cash_only: true, halal: false, open_late: false },
 neighborhood: 'Ebisugawa-dori east of Takakura — 5 min walk from Marutamachi Stn',
 cuisine: 'French patisserie by chef Kato, trained at Gérard Mulot; all dairy from Takahashi Dairy (June 2026) · cakes mostly about ¥600–700: raspberry, lemon, apricot and Améche tarts; Fraisier; mille-feuille; Mont Blanc on meringue; Black Forest; opera; tarte Tatin; cream puffs with Tahitian vanilla custard; a Camembert soufflé cheesecake (2025–2026 reviews) · Agre roll cake ¥2,000 whole, ¥1,100 half; limited rolls such as a chocolate roll ¥2,500 (2025–2026 reviews) · baked goods: lemon sablé ¥700, diamants, financiers, orange cake and cheese batons ¥350, canelés, Rocher fraise (2026 reviews) · about ¥1,000–2,000 (Tabelog)',
 website: 'http://agreable-ebisu.blogspot.jp/', gmaps: gm('アグレアーブル 京都 夷川'), menu_url: null,
 notes: '[Patisserie · Ebisugawa near Marutamachi, takeaway] A small French patisserie under a yellow awning, opened in 2013 by chef Kato, trained at Gérard Mulot in Paris. Classic cakes at fair prices — tarts with Nagano apricots or raspberries, Fraisier, a firm-layered mille-feuille, opera, Black Forest — plus roll cakes, cream puffs and a much-loved lemon sablé, all with Takahashi Dairy cream and butter. Opens at 10 and sells out by early afternoon; irregular closing days. Cash only.',
 chef_bio: { chef_name: 'Kato', roles: ['Pâtissier-owner (as reviewers describe)', 'Shop staff'], origin: null,
 background: 'A June 2026 reviewer writes that the shop was opened in April 2013 by Chef Kato, who trained at Gérard Mulot, and that all dairy comes from the Hokkaido series of Takahashi Dairy; Tabelog gives the opening date as 12 April 2013. An April 2026 regular thanks "the chef and madam" for such treats at these prices.',
 philosophy: null, specialty: 'Lemon sablé; Agre roll cake; Fraisier.',
 anecdotes: [
 { text: 'An April 2026 visitor from Tokyo had cakes packed with ice packs in a cooler bag for the trip home, all arriving undamaged.', source: R + 'B494346354/' },
 { text: 'On 2 January 2025 the shop opened for the new year, and a guest five minutes late found a line already inside — fifth in the queue.', source: R + 'B349436352/' },
 { text: 'A December 2025 visitor finally got in after struggling to find a day the shop was open.', source: R + 'B519661684/' },
 ],
 japanese_sources_summary: '食べログ: ケーキ・カフェ、中京区夷川通高倉東入天守町757 ZEST-24 1F、地下鉄丸太町駅から徒歩5分、10:00〜売り切れまで、不定休、予約不可、4席、禁煙、テイクアウト、カード・電子マネー・QR 不可、2013年4月12日オープン。口コミ (2025年1月〜2026年10月、英語): 黄色いテント、Gérard Mulot で修業したシェフ Kato が開いた、乳製品はすべて Takahashi Dairy の北海道シリーズ、ケーキは600〜700円ほど、フランボワーズ・レモン・杏・Améche のタルト、フレジエ、ミルフィーユ、モンブラン、フォレノワール、オペラ、タルトタタン、シュークリーム (タヒチ産バニラ)、カマンベールのスフレ、Agre Roll (ホール2,000円、ハーフ1,100円)、限定のチョコのロール2,500円、レモンサブレ700円、Diamant、フィナンシェ、オレンジケーキ、チーズバトン、カヌレ、ロッシェフレーズ、昼過ぎには売り切れ、保冷剤で持ち帰り、シェフとマダムへの感謝。',
 confidence: 'medium', sources: [TB, R + 'B349436352/', R + 'B494346354/', R + 'B519661684/', R + 'B523234363/', R + 'B530188699/', R + 'B531019975/', R + 'B531166436/', R + 'B532806223/', R + 'B534204123/', R + 'B536949940/'] },
 cultural_comfort: { level: 'konnichiwa', note: 'Point at the showcase; mostly takeaway; cash only; check Instagram for open days.' },
 safety: SAFETY0,
 mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区夷川通高倉東入天守町757 ZEST-24 1F',
 existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through October 2026.' },
 pin_source: `Tabelog ${TB} (35.014795, 135.762573); cross-checked: GSI 京都府京都市中京区天守町757番地 (lot) 48 m; nearest Kyoto record kyoto_neuf_creperie 48 m; ${TODAY}`,
 }, { verified: 'provisional', confidence: 'low', sources: [R + 'B494346354/', R + 'B523234363/', R + 'B349436352/'],
 price_note: 'Prices from 2025–2026 reviews.', last_checked: TODAY, items: [
 it('', '', 'Lemon sablé', '¥700', 'Baked goods', 'no', 'no', 'April 2026.', 'lemon_sable'),
 it('', '', 'Raspberry tart', '¥700', 'Cakes', 'no', 'no', 'April 2026.', 'raspberry_tart'),
 it('', '', 'Fraisier', '¥650', 'Cakes', 'no', 'no', 'April 2026.', 'fraisier'),
 it('', '', 'Agre roll cake (whole / half)', '¥2,000 / ¥1,100', 'Cakes', 'no', 'no', 'January 2025.', 'agre_roll'),
 ] }, {
 cuisine: 'Gérard Mulot で修業したシェフ Kato のフランス菓子店、乳製品はすべて Takahashi Dairy (2026年6月)・ケーキは600〜700円ほど: フランボワーズ、レモン、杏、Améche のタルト、フレジエ、ミルフィーユ、メレンゲのモンブラン、フォレノワール、オペラ、タルトタタン、タヒチ産バニラのカスタードのシュークリーム、カマンベールのスフレチーズケーキ (2025〜2026年の口コミ)・Agre Roll はホール2,000円、ハーフ1,100円、限定のチョコのロール2,500円など (2025〜2026年の口コミ)・焼き菓子: レモンサブレ700円、Diamant、フィナンシェ、オレンジケーキとチーズバトン350円、カヌレ、ロッシェフレーズ (2026年の口コミ)・1,000〜2,000円ほど (食べログ)',
 neighborhood: '高倉の東の夷川通。丸太町駅から徒歩5分',
 gf_detail: 'グルテンフリー不可。タルト、ロールケーキ、ミルフィーユ、シュー、サブレ、フィナンシェのフランス菓子店 (2025〜2026年の口コミ)。',
 vegan_detail: 'ヴィーガン不可。乳製品はすべて Takahashi Dairy の品で、生クリーム、カスタード、バター、卵を使う (2026年6月)。',
 notes: '[洋菓子・丸太町の夷川通、テイクアウト] 黄色いテントの小さなフランス菓子店。パリの Gérard Mulot で修業したシェフ Kato が2013年に開いた。長野の杏やフランボワーズのタルト、フレジエ、層のしっかりしたミルフィーユ、オペラ、フォレノワールなど正統派のケーキを手頃な値段で。ロールケーキ、シュークリーム、評判のレモンサブレも。クリームとバターは Takahashi Dairy。10時開店、昼過ぎには売り切れ。不定休。現金のみ。',
 });
}

// ================================================================ ザ・ブレッド THE BREAD
{
 const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26022247/'; const R = TB + 'dtlrvwlst/'; const WEB = 'http://www.kyotoyaoichihonkan.com/';
 const H = day(['10:00', '21:00']);
 put({
 id: 'kyoto_the_bread_yaoichi_honkan', name: 'ザ・ブレッド (THE BREAD, Kyoto Yaoichi Honkan)', category: 'OMNI',
 lat: 35.007587, lng: 135.761219, cuisine_type: 'sweets',
 gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: a wheat bakery of croissants, hard bread, sweet and savoury breads and sandwiches (2025–2026 reviews).',
 vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Some hard breads and vegetable breads (Kujo negi, spinach, corn, potato) appear, but no ingredient information; many items use butter, sausage, bacon, cheese or fish (2025–2026 reviews).',
 hours_raw: 'Daily 10:00–21:00; hours may change (Tabelog). Self-service; takeaway, with a small eat-in counter and tables; laptops not allowed in the eat-in (Tabelog remarks; 2026 reviews). Cards accepted, but no e-money or QR — PayPay not taken (Tabelog; July and October 2026). 1F of Kyoto Yaoichi Honkan, a produce store on Higashinotoin one block south of Sanjo; 3 min walk from Karasuma Oike Stn exit 5 (Tabelog). Opened 20 April 2013 (Tabelog).',
 hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
 flags: { reservation: false, cash_only: false, halal: false, open_late: false },
 neighborhood: 'Kyoto Yaoichi Honkan 1F, Higashinotoin south of Sanjo — 3 min walk from Karasuma Oike Stn',
 cuisine: 'Bakery of the Kyoto Yaoichi Honkan produce store, sister to its SAVORY restaurant (Tabelog; 2025–2026 reviews) · croissant ¥280, fromage ¥320, mackerel and lotus-root bread ¥380, sausage French ¥320 (November 2025–January 2026) · crescent butter rolls, horns, an-butter, kinako doughnuts, chocolate tart, banana bread (2026 reviews) · vegetable breads: Kujo negi and bacon épi, maitake rolls, burdock and tuna sesame bread, croquette bread (2026 reviews) · sandwiches ¥420, salmon sandwich (July–October 2026) · under ¥1,000 (Tabelog)',
 website: WEB, gmaps: gm('THE BREAD 京都八百一本館'), menu_url: null,
 notes: '[Bakery · Karasuma Oike, inside Yaoichi Honkan] The in-house bakery on the ground floor of Kyoto Yaoichi Honkan, a big produce store near Karasuma Oike: self-service trays of croissants, hard breads and plenty of vegetable breads — Kujo negi and bacon épi, maitake rolls, burdock and tuna — plus sandwiches, mostly ¥300–400. Small eat-in corner, no laptops. Cards but no QR. Open daily to 21:00.',
 chef_bio: { chef_name: null, roles: ['Bakery staff of Kyoto Yaoichi Honkan (unnamed)'], origin: null,
 background: 'Per Tabelog: a bakery inside Kyoto Yaoichi Honkan, opened 20 April 2013, with eat-in seating; the Yaoichi website introduces its seasonal breads (Tabelog remarks). Reviewers in 2025–2026 call it a bakery inside a famous vegetable shop, with frequent new products (February 2026). SAVORY, on the third floor of the same building, is in data as kyoto_savory_yaoichi_honkan.',
 philosophy: null, specialty: 'Vegetable breads; crescent butter roll.',
 anecdotes: [
 { text: 'A March 2026 shopper who had just bought bread at a nearby boulangerie could not resist an an-butter sandwich and a kinako doughnut here too.', source: R + 'B524042618/' },
 { text: '"This area is a fierce battleground for bakeries" — October 2026, on a Kujo negi and bacon épi generous with negi.', source: R + 'B538370563/' },
 ],
 japanese_sources_summary: '食べログ: パン・サンドイッチ、中京区東洞院通三条下る三文字町220 京都八百一本館 1F、烏丸御池駅5番出口から徒歩3分、毎日 10:00〜21:00、予約不可、テイクアウト、イートインあり、パソコンの使用は禁止、カード可、電子マネー・QR 不可、2013年4月20日オープン。口コミ (2025年11月〜2026年10月、英語): 八百一の中のパン屋、セルフサービス、クロワッサン280円、Fromage 320円、鯖と蓮根380円、Sausage French 320円、Crescent Butter、Horn、あんバター、きなこドーナツ、チョコタルト、バナナブレッド、九条ねぎとベーコンのエピ、舞茸のロール、ごぼうとツナのごまパン、コロッケパン、サンドイッチ420円、サーモンサンド、PayPay 不可。',
 confidence: 'medium', sources: [TB, WEB, R + 'B516558544/', R + 'B520889290/', R + 'B523011982/', R + 'B523651297/', R + 'B524042618/', R + 'B526480313/', R + 'B527925328/', R + 'B530993726/', R + 'B537637952/', R + 'B538370563/'] },
 cultural_comfort: { level: 'konnichiwa', note: 'Self-service trays; pay at the till; cards but no QR; no laptops in the eat-in.' },
 safety: SAFETY0,
 mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区東洞院通三条下る三文字町220 京都八百一本館 1F',
 existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through October 2026.' },
 pin_source: `Tabelog ${TB} (35.007587, 135.761219); cross-checked: GSI 京都府京都市中京区三文字町220番地 (lot) 38 m; kyoto_savory_yaoichi_honkan (same building, 3F) is 15 m away; ${TODAY}`,
 }, { verified: 'provisional', confidence: 'low', sources: [R + 'B516558544/', R + 'B520889290/'],
 price_note: 'Prices from November 2025 and January 2026 reviews.', last_checked: TODAY, items: [
 it('', '', 'Croissant', '¥280', 'Bread', 'no', 'no', 'November 2025.', 'croissant'),
 it('', '', 'Mackerel and lotus-root bread', '¥380', 'Bread', 'no', 'no', 'November 2025.', 'saba_renkon'),
 it('', '', 'Sausage French', '¥320', 'Bread', 'no', 'no', 'January 2026.', 'sausage_french'),
 ] }, {
 cuisine: '八百屋の京都八百一本館のパン屋、同じ館の SAVORY の姉妹店 (食べログ、2025〜2026年の口コミ)・クロワッサン280円、Fromage 320円、鯖と蓮根のパン380円、Sausage French 320円 (2025年11月〜2026年1月)・Crescent Butter、Horn、あんバター、きなこドーナツ、チョコタルト、バナナブレッド (2026年の口コミ)・野菜のパン: 九条ねぎとベーコンのエピ、舞茸のロール、ごぼうとツナのごまパン、コロッケパン (2026年の口コミ)・サンドイッチ420円、サーモンサンド (2026年7〜10月)・1,000円未満 (食べログ)',
 neighborhood: '三条の南の東洞院通、京都八百一本館の1階。烏丸御池駅から徒歩3分',
 gf_detail: 'グルテンフリー不可。クロワッサン、ハード系、菓子パン、惣菜パン、サンドイッチの小麦のパン屋 (2025〜2026年の口コミ)。',
 vegan_detail: '要確認。ハード系や野菜のパン (九条ねぎ、ほうれん草、とうもろこし、じゃがいも) もあるが、原材料の情報はない。バター、ソーセージ、ベーコン、チーズ、魚を使う品が多い (2025〜2026年の口コミ)。',
 notes: '[パン・烏丸御池、八百一本館の中] 烏丸御池近くの大きな八百屋、京都八百一本館の1階のパン屋。セルフサービスで、クロワッサン、ハード系、九条ねぎとベーコンのエピ、舞茸のロール、ごぼうとツナなどの野菜のパンが豊富で、サンドイッチもある。多くは300〜400円。小さなイートインあり (パソコン不可)。カード可、QR 不可。毎日21時まで。',
 });
}

save();
