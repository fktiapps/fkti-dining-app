// Osaka sweep (2-mile circle around Dotonbori), batch 199 — mom-and-pop queue (≤20 seats, 30+ reviews), nearest-first past ~1 km.
//   + 旬菜ダイニング らかんか Shunsai Dining Rakan Ka (brown-rice health set meals, lunch and dinner on weekdays; Minami-Senba)
//   + Mimi Eden (bread-buffet café, opened January 2026; Kitahorie)
//   + 寿し吉 Sushi Yoshi (6-seat creative sushi counter, foie gras and mozzarella nigiri; Minami-Senba)
//   + 地中海ビストロ UMaMi Mediterranean Bistro Umami (one-person Mediterranean and Middle Eastern bistro; Shinmachi)
//   Tabelog URLs copied from each listing.txt line 1. Pins: Tabelog point, GSI go ≤33 m (integrator's pin-check, 2026-10-30).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-30';
const { put, skip, save } = openCitySweep('osaka', TODAY, 199);
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 旬菜ダイニング らかんか
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27012782/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:00'], ['18:30', '23:00']);
  put({
    id: 'osaka_rakanka_minamisenba', name: '旬菜ダイニング らかんか (Shunsai Dining Rakan Ka)', category: 'OMNI',
    lat: 34.677476, lng: 135.505368, cuisine_type: 'shokudo',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; the daily mains include herb-and-breadcrumb-crusted fish, saikyo-miso fish and stews, and every set comes with miso soup, so ask which main is wheat-free that day.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: each set is built around a fish or meat main, with miso soup.',
    hours_raw: 'Mon–Fri 11:30–14:00 and 18:30–23:00; closed Saturday, Sunday, public holidays and over the New Year (Tabelog). Lunch is a daily set: choose the fish or the meat main (2024–2026 reviews); one April 2026 regular simply orders the omakase set and it arrives. Set meals in the evening too (September 2026 review). Takeaway available (2026 review). Busy just before noon with office workers (April 2026 review). Cards (JCB, AMEX, Diners) and QR payments; no e-money (Tabelog). 12 seats with counter seating; no private rooms; whole-shop booking possible (Tabelog). In a narrow alley; small from outside but roomier inside (April 2024 review). The website listed on Tabelog (racanca.com) no longer resolves (checked 2026-10-30).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Minami-Senba 2-7-1, in a narrow alley — 337 m from Nagahoribashi Stn, between Sakaisuji-Honmachi and Nagahoribashi',
    cuisine: 'Healthy set meals with brown rice, lunch and dinner on weekdays (12 seats) · lunch: a daily fish or meat main with two small side dishes, miso soup, brown rice and a piece of fruit, about ¥1,000 (2026; ¥900 in 2024, and ¥900 for the omakase set per one April 2026 review) · mains seen in 2026: herb-crusted salmon or white fish, butter-grilled salmon, saikyo-miso grilled Spanish mackerel, mackerel grilled with basil, chicken and vegetable tomato stew, beef stew, mapo tofu · earlier: fish steamed in foil over vegetables, mackerel stuffed with cheese and shiso · dinner: sets with 4 side dishes ¥1,650 or 8 side dishes ¥2,200 (July 2024) · a daily health tea (mugwort, persimmon leaf, roasted barley)',
    website: null, gmaps: gm('旬菜ダイニング らかんか 南船場'), menu_url: null,
    notes: "[Set meals · Minami-Senba, brown-rice health lunches in an office alley] A small counter dining room in a narrow alley of the Minami-Senba office district that has served the same kind of meal for years: a daily choice of fish or meat, two little side dishes, miso soup, fruit and brown rice that the shop advertises as the best in Osaka (per an April 2026 diner) — chewy, fluffy, and to another diner not like brown rice at all. Seasoning is gentle throughout (saikyo-miso Spanish mackerel, basil-grilled mackerel, herb-crusted salmon, a mild mapo tofu), and the health tea changes daily. Lunch is about ¥1,000 and fills up before noon; turnover is quick and takeaway is offered. In the evening the same kitchen serves vegetable-heavy set meals with four or eight side dishes. A January 2026 diner returning after five or six years found the master and partner still there, and a July 2024 diner notes the owner specializes in astrology.",
    chef_bio: { chef_name: null, roles: ['Owner ("master")'], origin: null, background: 'Run by the master and a partner; a diner returning in January 2026 after five or six years found both still at the shop (January 2026 review). The owner specializes in astrology (July 2024 review). Offered takeout through Uber during the pandemic (June 2025 review).', philosophy: 'Healthy, gently seasoned set meals that let the ingredients come through, always with brown rice (2025–2026 reviews).', specialty: 'Daily fish or meat set with brown rice.',
      anecdotes: [
        { text: '"Now, onto the main topic: this brown rice. It\'s advertised as the best in Osaka, and I can see why—it\'s incredibly delicious!" — April 2026, Daily Set A (herb-crusted salmon) ¥1,000.', source: R + 'B472862955/' },
        { text: '"I don\'t ask about the details; it comes out in order automatically… All of this for JPY 900." — April 2026, omakase set meal.', source: R + 'B525406161/' },
      ],
      japanese_sources_summary: '食べログ: 旬菜ダイニング らかんか、大阪市中央区南船場2-7-1、長堀橋駅から337m、月〜金11:30〜14:00・18:30〜23:00、土日祝と年末年始休み、カード (JCB・AMEX・Diners)・QR可、電子マネー不可、12席、カウンター席、個室なし、貸切可、ジャンルは創作料理・日本料理・オーガニック。口コミ(2023年5月〜2026年9月): 細い路地の店、外から見るより中は広い、昼は日替わりで魚か肉を選ぶ定食、小鉢2品、味噌汁、玄米、果物 (みかん、すいか、バナナ)、2026年は1000円 (2024年は900円、おまかせ定食900円という2026年4月の口コミも)、サーモンのハーブパン粉焼き、鮭のバター焼き、鰆の西京焼き、鯖のバジル焼き、鶏と野菜のトマト煮込み、ビーフシチュー、麻婆豆腐、白身魚のホイル蒸し、日替わりの健康茶 (よもぎ茶、柿の葉茶、麦茶)、大阪一とうたう玄米、やさしい味つけ、正午前は会社員で混む、持ち帰り可、コロナの間はUberで持ち帰り、夜も定食 (おかず4品1650円、8品2200円、2024年7月)、2026年1月に5〜6年ぶりに来た人によるとマスターとパートナーは変わらず、店主は占星術が専門という声 (2024年7月)。公式サイトの racanca.com はつながらない (2026年10月30日)。',
      confidence: 'medium', sources: [TB, R + 'B472862955/', R + 'B507837874/', R + 'B521106089/', R + 'B525406161/', R + 'B526317478/', R + 'B532275570/', R + 'B534857772/', R + 'B488920803/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Point at fish or meat; the set arrives on its own (2026).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市中央区南船場2-7-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated January–September 2026. Own website (racanca.com) no longer resolves.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場二丁目7番1号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B472862955/', R + 'B521106089/', R + 'B532275570/', R + 'B488920803/'],
    price_note: 'Lunch prices from 2026 reviews; dinner set prices from a July 2024 review.', last_checked: TODAY, items: [
      it('', '', 'Daily lunch set, fish or meat main, with brown rice, miso soup, two side dishes and fruit', '¥1,000', 'Lunch', 'ask', 'no', 'April–August 2026; ¥900 in 2024.', 'lunchset'),
      it('', '', 'Mapo tofu lunch', '¥1,000', 'Lunch', 'ask', 'no', 'July 2026.', 'mapo'),
      it('', '', 'Dinner set with 4 side dishes', '¥1,650', 'Dinner', 'ask', 'no', 'July 2024.', 'dinner4'),
      it('', '', 'Dinner set with 8 side dishes', '¥2,200', 'Dinner', 'ask', 'no', 'July 2024.', 'dinner8'),
    ] }, {
    cuisine: '平日の昼と夜、玄米の体にやさしい定食 (12席)・昼: 日替わりで魚か肉のおかずに小鉢2品、味噌汁、玄米、果物で1000円ほど (2026年。2024年は900円、2026年4月の口コミではおまかせ定食900円)・2026年のおかずの例: サーモンや白身魚のハーブパン粉焼き、鮭のバター焼き、鰆の西京焼き、鯖のバジル焼き、鶏と野菜のトマト煮込み、ビーフシチュー、麻婆豆腐・以前は白身魚の野菜のせホイル蒸し、チーズと大葉をはさんだ鯖も・夜: おかず4品の定食1650円、8品2200円 (2024年7月)・日替わりの健康茶 (よもぎ茶、柿の葉茶、麦茶)',
    neighborhood: '南船場2-7-1、細い路地。長堀橋駅から337m、堺筋本町と長堀橋のあいだ',
    gf_detail: '要確認。グルテンの情報なし。日替わりのおかずにはハーブパン粉焼きの魚、西京焼き、煮込みがあり、どの定食にも味噌汁がつくので、その日の小麦なしのおかずを確認を。',
    vegan_detail: 'ヴィーガンではありません。どの定食も魚か肉のおかずが中心で、味噌汁つき。',
    notes: '[定食・南船場、オフィス街の路地の玄米の健康ランチ] 南船場のオフィス街の細い路地にある小さなカウンターの店で、何年も同じかたちの食事を出している。日替わりで魚か肉を選び、小鉢2品、味噌汁、果物、そして大阪一とうたう玄米。もちもち、ふっくらで、玄米とは思えないという声も。味つけはどれもやさしく (鰆の西京焼き、鯖のバジル焼き、サーモンのハーブパン粉焼き、辛すぎない麻婆豆腐)、健康茶は日替わり。昼は1000円ほどで正午前には満席に。回転は早く、持ち帰りもできる。夜は同じ台所で、おかず4品か8品の野菜たっぷりの定食。2026年1月に5〜6年ぶりに来た人によると、マスターとパートナーは変わらず店に。2024年7月の口コミでは、店主は占星術が専門。',
  });
}

// ================================================================ Mimi Eden
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27154160/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '17:00']);
  put({
    id: 'osaka_cafe_mimi_eden_kitahorie', name: 'Mimi Eden', category: 'OMNI',
    lat: 34.674341, lng: 135.492679, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the café is built around an all-you-can-eat wheat bread buffet (croissants, salt bread, danishes), and no gluten information is given.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: butter croissants and danishes, clam chowder, cream pasta, omurice and dairy desserts.',
    hours_raw: 'Wed–Mon and public holidays 11:00–17:00 (food last order 16:30); closed Tuesday (Tabelog). Bread-buffet lunch 11:00–15:30 (last order 14:30); café 11:00–17:00 (last order 16:00); seating may be limited to 80 minutes (Tabelog; an October 2026 diner was given one hour). Reservations taken; arrive 5–10 minutes early, and a booking more than 15 minutes late is cancelled (Tabelog). Reservations recommended: full at the 11:00 opening on an October 2026 holiday, with some groups sent to the terrace; a weekday diner got in without one (October 2026 reviews). Bread half price after 16:00 to cut food waste (Tabelog, shop-provided). Cards, transport IC, WAON, iD, QUICPay, PayPay, d Barai (Tabelog). 12 table seats (Tabelog); non-smoking; free Wi-Fi; birthday plates. Opened 7 January 2026 (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kitahorie 2-2-11, Ajiru Kitahorie (apartment building) 1F — 3 min from Nishi-Ohashi Stn, 5 min from Yotsubashi Stn Exit 5, 8 min from Shinsaibashi Stn',
    cuisine: 'Bread-buffet café (12 seats) · order a main, then add the bread buffet (about ¥700–770, October 2026) or the premium course with desserts · mains: salad, clam chowder, cream pasta, omurice · about 10–15 breads: croissants and salt bread fresh from the oven every 30 minutes, focaccia, apple, mango, fig and curry danishes, matcha croissant, mentaiko cheese, corn mayo, bacon sandwich, sweet potato bread, muscat and strawberry fruit sandwiches · premium: French toast, mini fruit sandwiches, ice cream, cheesecake and tiramisu from the showcase · cookies, brownies, pound cake, banana cake · coffee, tea, lemon water · a toaster at the buffet',
    website: null, gmaps: gm('Mimi Eden 北堀江'), menu_url: null,
    notes: "[Bread-buffet café · Kitahorie, opened January 2026] A small café with a very cute interior on the ground floor of a Kitahorie apartment building (Halloween-themed in October 2026) where lunch means picking a main — salad, clam chowder, cream pasta or omurice — and adding all-you-can-eat bread. About a dozen breads sit at the buffet, mostly sweet, and croissants and salt bread come out hot every 30 minutes, often brought to the table; diners single those two out. The premium plan adds mini desserts, French toast and fruit sandwiches. Seating is timed (80 minutes per Tabelog) and tight, a few tables went to the terrace on a busy holiday, and after noon some breads run out or dry. Reviews are mostly happy; one diner found ¥2,000 for a salad plus the bread add-on poor value. Bread is half price after 4 pm.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Bread-buffet café that opened on 7 January 2026 in the Ajiru Kitahorie apartment building (Tabelog).', philosophy: 'Bread sold at half price after 16:00 to reduce food waste (Tabelog, shop-provided).', specialty: 'Freshly baked croissants and salt bread; bread buffet.',
      anecdotes: [
        { text: '"The bread selection included about 15 varieties such as croissants, salt bread, focaccia, apple danish, mango danish, fig danish, matcha croissant… The croissants and salt bread were served fresh twice during my visit." — October 2026, holiday lunch, clam chowder.', source: R + 'B537203585/' },
        { text: '"Personally, the freshly baked salt bread and the muscat fruit sandwich were the most delicious!" — October 2026.', source: R + 'B537575624/' },
      ],
      japanese_sources_summary: '食べログ: Mimi Eden、大阪市西区北堀江2-2-11、Ajiru Kitahorie (マンション) 1F、西大橋駅から徒歩3分、四ツ橋駅5番出口から徒歩5分、心斎橋駅から徒歩8分、水〜月・祝11:00〜17:00 (フードL.O. 16:30)、火曜休み、パン食べ放題ランチ11:00〜15:30 (L.O. 14:30)、カフェ11:00〜17:00 (L.O. 16:00)、80分制のことあり、予約可 (5〜10分前に来店、15分以上の遅れはキャンセル)、カード・交通系IC・WAON・iD・QUICPay・PayPay・d払い可、12席 (テーブル)、禁煙、Wi-Fi、誕生日プレート、16時以降パン半額 (フードロス削減)、オープン日2026年1月7日。口コミ(2026年10月): メインを選んでパン食べ放題を追加 (700円か770円)、サラダとパン食べ放題で2770円、プレミアムコースはデザートも、クロワッサンと塩パンは30分ごとに焼きたてを席まで、パンは10〜15種類で甘いものが多い (フォカッチャ、りんご・マンゴー・いちじく・カレーのデニッシュ、抹茶クロワッサン、明太チーズ、コーンマヨ、ベーコンサンド、さつまいもパン、マスカットやいちごのフルーツサンド)、フレンチトースト、アイス、ショーケースのチーズケーキとティラミス、クッキー、ブラウニー、パウンドケーキ、バナナケーキ、クラムチャウダー、クリームパスタ、オムライス、トースターあり、ハロウィンの飾り、開店直後から満席でテラス席に回ったグループも、遅い時間はパンが少なく乾いていたという声、サラダ2000円にパン700円は割高という声も。',
      confidence: 'medium', sources: [TB, R + 'B537203585/', R + 'B537575624/', R + 'B537655539/', R + 'B537887990/', R + 'B537002085/', R + 'B537692492/', R + 'B537295973/', R + 'B537341375/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Self-service buffet; book ahead for weekends and holidays (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区北堀江2-2-11',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (opened 7 January 2026); reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区北堀江二丁目2番11号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537887990/', R + 'B537655539/', R + 'B537002085/'],
    price_note: 'Prices from October 2026 reviews; the bread add-on is given as ¥700 in one and ¥770 in another.', last_checked: TODAY, items: [
      it('', '', 'Salad with bread buffet', '¥2,770', 'Lunch', 'no', 'no', 'October 2026.', 'saladbuffet'),
      it('', '', 'Bread buffet add-on (with a main)', '¥770', 'Lunch', 'no', 'no', 'October 2026; ¥700 in another October 2026 review.', 'buffet'),
      it('', '', 'Clam chowder (main)', '', 'Lunch', 'ask', 'no', 'October 2026.', 'chowder'),
      it('', '', 'Omurice (main)', '', 'Lunch', 'ask', 'no', 'October 2026.', 'omurice'),
    ] }, {
    cuisine: 'パン食べ放題のカフェ (12席)・メインを頼んでパン食べ放題 (700〜770円ほど、2026年10月) か、デザートつきのプレミアムコースを追加・メイン: サラダ、クラムチャウダー、クリームパスタ、オムライス・パンは10〜15種類: 30分ごとに焼きたてのクロワッサンと塩パン、フォカッチャ、りんご・マンゴー・いちじく・カレーのデニッシュ、抹茶クロワッサン、明太チーズ、コーンマヨ、ベーコンサンド、さつまいもパン、マスカットといちごのフルーツサンド・プレミアム: フレンチトースト、ミニフルーツサンド、アイス、ショーケースのチーズケーキとティラミス・クッキー、ブラウニー、パウンドケーキ、バナナケーキ・コーヒー、紅茶、レモン水・トースターあり',
    neighborhood: '北堀江2-2-11、Ajiru Kitahorie (マンション) 1F。西大橋駅から徒歩3分、四ツ橋駅5番出口から徒歩5分、心斎橋駅から徒歩8分',
    gf_detail: 'グルテンフリーではありません。小麦のパンの食べ放題 (クロワッサン、塩パン、デニッシュ) が中心の店で、グルテンの情報もなし。',
    vegan_detail: 'ヴィーガンではありません。バターのクロワッサンやデニッシュ、クラムチャウダー、クリームパスタ、オムライス、乳製品のデザート。',
    notes: '[パン食べ放題のカフェ・北堀江、2026年1月オープン] 北堀江のマンションの1階にある、店内のかわいい小さなカフェ (2026年10月はハロウィン)。昼はメインをサラダ、クラムチャウダー、クリームパスタ、オムライスから選び、パン食べ放題を追加する。ビュッフェのパンは十数種類で甘いものが多く、クロワッサンと塩パンは30分ごとに焼きたてが出て、席まで運んでくれることも。この2つを推す声が多い。プレミアムにするとミニデザート、フレンチトースト、フルーツサンドも。食べログでは80分制で席はせまく、混んだ祝日にはテラス席に回ったグループも。昼すぎには品切れやパンの乾きも。おおむね好評だが、サラダ2000円にパン追加は割高という声もある。16時以降はパンが半額。',
  });
}

// ================================================================ 寿し吉
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27078353/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '13:30'], ['18:00', '22:00']);
  put({
    id: 'osaka_sushi_yoshi_minamisenba', name: '寿し吉 (Sushi Yoshi)', category: 'OMNI',
    lat: 34.677789, lng: 135.504307, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; a sweet soy sauce goes on the nigiri (April 2026), and there is grilled anago and red miso soup, so ask about soy sauce and glazes when booking.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish-and-shellfish sushi course with foie gras, sea urchin and a dashi-based small dish.',
    hours_raw: 'Mon–Sat 12:00–13:30 (last order 13:00) and 18:00–22:00 (last order 20:30); closed Sunday, public holidays and the days before and after a public holiday, also Mondays that fall on a holiday (Tabelog). Reservations taken, same day too, even 5 minutes ahead by phone; let the landline ring a while; bookings from phone numbers other than Japanese mobiles may not be confirmed and can be cancelled (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 6 counter seats; non-smoking; coin parking next door (Tabelog). Menus in English, Traditional and Simplified Chinese and Korean; staff speaking English, Chinese and Korean (Tabelog). One person runs lunch (June 2025 review). Opened here 2 April 2014 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Minami-Senba 2-9-3, a quiet alley — about 3 min north of Crystal Nagahori exits North 4 and 5 (Nagahoribashi and Shinsaibashi Stns), 6 min from Honmachi and Sakaisuji-Honmachi Stns',
    cuisine: 'Creative nigiri at a 6-seat counter · lunch: Gourmet Nigiri, 10 pieces ¥5,000, or the omakase course ¥12,500 (April 2026) · dinner courses ¥12,000 and ¥16,000 (February 2024) · signature nigiri: foie gras (lightly seared), mozzarella, water eggplant or grilled eggplant with sea urchin, sweet shrimp with liver sauce · classics: Senshu squid with red-vinegar rice, kombu-cured anago, lean and fatty tuna, horse mackerel, grilled anago, kanpyo roll · tamago with foie gras, squid and shrimp · seko-gani crab and sea-urchin chawanmushi in season · red miso soup · sake, shochu and wine',
    website: 'https://www.instagram.com/minamisenba_sushiyoshi/', gmaps: gm('寿し吉 南船場'), menu_url: null,
    notes: "[Sushi · Minami-Senba, a six-seat counter known for foie gras and mozzarella nigiri] A calm, wood-toned counter of six seats in a quiet Minami-Senba alley that calls its sushi 'gourmet nigiri': Edomae classics such as lean tuna, kombu-cured anago and a kanpyo roll sit beside foie gras seared on the surface, mozzarella, and water eggplant with sea urchin. The tamago is filled with foie gras, squid and shrimp. Lunch is 10 pieces for ¥5,000 or a ¥12,500 omakase, served quickly by one person; dinner is a course. The pieces are small, and one April 2026 diner found the sweet soy glaze too strong; a long-time fan returns for the foie gras and mozzarella nigiri. A July 2022 diner who had eaten at Sushi Yoshi in Tsuruhashi some 20 years earlier found much the same menu here. Book by phone, from a Japanese mobile number if possible.",
    chef_bio: { chef_name: null, roles: ['Chef'], origin: null, background: 'Opened at this address on 2 April 2014 (Tabelog). A July 2022 diner had eaten at Sushi Yoshi in Tsuruhashi about 20 years earlier and found the menu here mostly the same, foie gras sushi included. One person runs the counter at lunch (June 2025 review); diners describe a friendly chef with entertaining stories (2020 and 2022 reviews).', philosophy: 'Creative toppings alongside Edomae-style classics (September 2026 review).', specialty: 'Foie gras nigiri; mozzarella nigiri; eggplant with sea urchin.',
      anecdotes: [
        { text: '"The egg was quite elaborate, filled with foie gras, squid, and shrimp, which is a bit different from the traditional Edo-style shrimp and white fish paste." — April 2026, Gourmet Nigiri (10 pieces) ¥5,000.', source: R + 'B525851745/' },
        { text: '"I used to go to Sushi Yoshi in Tsuruhashi 20 years ago… The menu was mostly the same as the one in Tsuruhashi, and I was so happy to enjoy my favorite foie gras sushi after a long time." — July 2022.', source: R + 'B489855778/' },
      ],
      japanese_sources_summary: '食べログ: 寿し吉、大阪市中央区南船場2-9-3、クリスタ長堀の北4・北5出口から北へ徒歩3分ほど (長堀橋駅・心斎橋駅)、本町駅・堺筋本町駅から徒歩6分、月〜土12:00〜13:30 (L.O. 13:00)・18:00〜22:00 (L.O. 20:30)、日祝・祝前日・祝後日休み、月曜祝日も休み、予約可 (当日5分前でも電話で)、日本の携帯電話以外の番号からの予約は確認できないことがある、カード可、電子マネー・QR不可、6席 (カウンター)、禁煙、隣にコインパーキング、英語・中国語 (繁体・簡体)・韓国語のメニュー、英語・中国語・韓国語のスタッフ、オープン日2014年4月2日、Instagram (minamisenba_sushiyoshi)。口コミ(2018年〜2026年9月): 創作寿司、昼は握り10貫5000円 (英語の口コミでは Gourmet Nigiri)かおまかせ12500円 (2026年4月)、夜のコースは12000円と16000円 (2024年2月)、フォアグラの握り、モッツァレラの握り、水茄子や焼き茄子にウニ、甘エビの肝ソース、Senshu のイカと赤酢のシャリ、昆布締めの穴子、赤身、トロ、アジ、焼き穴子、かんぴょう巻き、フォアグラ・イカ・エビ入りの玉子、セコガニ、ウニの茶碗蒸し、赤だし、昼は一人で営業 (2025年6月)、話の楽しい気さくな大将、甘い醤油だれが強すぎるという声、握りは小ぶり、20年前に Tsuruhashi の寿し吉に通った人によると品書きはほぼ同じ (2022年7月)。',
      confidence: 'medium', sources: [TB, R + 'B525851745/', R + 'B538102540/', R + 'B515736655/', R + 'B513639927/', R + 'B512672890/', R + 'B480636521/', R + 'B489855778/', R + 'B458356019/'] },
    cultural_comfort: { level: 'english', note: 'Menus in English, Chinese and Korean; English-speaking staff (Tabelog). Bookings from non-Japanese phone numbers may not be confirmed (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市中央区南船場2-9-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated April and September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場二丁目9番3号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B525851745/', R + 'B480636521/'],
    price_note: 'Lunch prices from an April 2026 review (tax included); dinner course prices from a February 2024 review.', last_checked: TODAY, items: [
      it('', '', 'Gourmet Nigiri, 10 pieces (lunch)', '¥5,000', 'Lunch', 'ask', 'no', 'April 2026, tax included.', 'nigiri10'),
      it('', '', 'Omakase course (lunch)', '¥12,500', 'Lunch', 'ask', 'no', 'April 2026.', 'omakaselunch'),
      it('', '', 'Dinner course', '¥12,000', 'Dinner', 'ask', 'no', 'February 2024; a ¥16,000 course too.', 'dinner'),
      it('', '', 'Foie gras nigiri', '', 'Nigiri', 'ask', 'no', '2024–2026.', 'foiegras'),
    ] }, {
    cuisine: '6席のカウンターの創作握り・昼: 握り10貫5000円 (英語の口コミでは Gourmet Nigiri)、おまかせコース12500円 (2026年4月)・夜のコース12000円と16000円 (2024年2月)・名物の握り: 表面をあぶったフォアグラ、モッツァレラ、水茄子や焼き茄子にウニ、甘エビの肝ソース・定番: Senshu のイカと赤酢のシャリ、昆布締めの穴子、赤身、トロ、アジ、焼き穴子、かんぴょう巻き・フォアグラ、イカ、エビ入りの玉子・季節にはセコガニやウニの茶碗蒸し・赤だし・日本酒、焼酎、ワイン',
    neighborhood: '南船場2-9-3、静かな路地。クリスタ長堀の北4・北5出口 (長堀橋駅・心斎橋駅) から北へ徒歩3分ほど、本町駅・堺筋本町駅から徒歩6分',
    gf_detail: '要確認。グルテンの情報なし。握りには甘い醤油だれがかかり (2026年4月)、焼き穴子や赤だしもあるので、予約のときに醤油やツメについて確認を。',
    vegan_detail: 'ヴィーガンではありません。魚介の寿司のコースで、フォアグラ、ウニ、だしの小鉢も。',
    notes: '[寿司・南船場、フォアグラとモッツァレラの握りで知られる6席のカウンター] 南船場の静かな路地にある、木のぬくもりの落ち着いた6席のカウンター。英語の口コミで Gourmet Nigiri と呼ばれる寿司で、赤身、昆布締めの穴子、かんぴょう巻きといった江戸前の定番に、表面をあぶったフォアグラ、モッツァレラ、水茄子にウニが並ぶ。玉子にはフォアグラ、イカ、エビが入る。昼は10貫5000円か、おまかせ12500円で、一人で手早く出してくれる。夜はコース。握りは小ぶりで、甘い醤油だれが強すぎたという2026年4月の声も。長年のファンはフォアグラとモッツァレラの握りを目当てに通う。20年ほど前に Tsuruhashi の寿し吉に通った人は、2022年7月にここでほぼ同じ品書きに出会った。予約は電話で、できれば日本の携帯電話から。',
  });
}

// ================================================================ 地中海ビストロ UMaMi
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27143891/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://bistro-umami.com/';
  const LD = day(['11:30', '14:30'], ['17:30', '22:00']), D = day(['17:30', '22:00']);
  const FRI = day(['11:30', '14:30'], ['17:30', '24:00']), SAT = day(['12:00', '14:30'], ['17:30', '24:00']), SUN = day(['12:00', '14:30'], ['17:30', '22:00']);
  put({
    id: 'osaka_bistro_umami_shinmachi', name: '地中海ビストロ UMaMi (Mediterranean Bistro Umami)', category: 'OMNI',
    lat: 34.676391, lng: 135.495042, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; the menu runs from bread, pita, couscous, fresh pasta and fritters to grilled meats, bouillabaisse and dips, and the shop asks about dislikes before a course (December 2025), so raise gluten then.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Mostly seafood and meat, but the meze include hummus, a roasted-eggplant dip, a red pepper and walnut paste (which contains breadcrumbs) and ratatouille; no vegan statement, so ask.',
    hours_raw: 'Official site (October 2026): lunch 11:30–14:30 (Sat, Sun and holidays from 12:00); dinner 17:30–22:00 (Fri, Sat and days before holidays to 24:00); irregular closing days, posted monthly — November 2026: 3, 10, 15, 18, 23 and 30 November. Tabelog lists no lunch on Tuesday and Thursday, dinner to 23:00 on most nights, and closures on the 2nd and 3rd Sundays and public holidays; the hours here follow the site\'s times and Tabelog\'s lunch days. Lunch changed in October 2026 from reservation-only to walk-ins welcome (official site); the lunch course still needs a booking. One-drink minimum at dinner (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), iD, QUICPay; no QR (Tabelog). 14 seats: 8 at the counter, 6 at tables; a table booking may still be seated at the counter; non-smoking; school-age children welcome, no strollers (Tabelog). English-speaking staff (Tabelog). Opened 29 July 2024 (Tabelog).',
    hours: { 0: LD, 1: D, 2: LD, 3: D, 4: FRI, 5: SAT, 6: SUN }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shinmachi 1-22-22, Shinmachi Daiya Palace 104 (south side of the building) — 4 min from Nishi-Ohashi and Yotsubashi Stns',
    cuisine: 'Mediterranean and Middle Eastern bistro with a Santorini-themed room (14 seats) · Mediterranean appetizer platter, ¥2,860 for two (official site): Niçoise salad, hummus, brandade croquette, vichyssoise, prawn and sea bream carpaccio, smoked edamame with pecorino, orange-marinated beets, tapenade, ratatouille · lamb brochette with spicy couscous ¥580 (official site) · seafood bouillabaisse ¥1,980, upgradeable to lobster, with risotto from the broth ¥780 to finish · Moroccan briouat spring rolls · red-wine-braised Kumamoto akagyu beef cheek · fresh pasta from an Awaji noodle maker: sea urchin cream, egg yolk and fresh truffle, squid ink · Basque cheesecake with gelato ¥880 (July 2026) · lunch: pita sandwiches (chicken, lamb or a seasonal filling) with lentil soup, fries, harissa and tzatziki from ¥1,000 (2026), lunch course ¥3,080 (reserve) · courses ¥5,000–7,700 · unusual wines by the glass from ¥680',
    website: SITE, gmaps: gm('地中海ビストロ UMaMi 新町'), menu_url: SITE + 'menu/',
    notes: "[Mediterranean bistro · Shinmachi near Yotsubashi, Middle Eastern meze from a one-person kitchen] A small Santorini-themed bistro on the south side of a Shinmachi apartment block, run by one owner-chef whom reviewers credit with cooking in Dubai and London. Start with the appetizer platter — hummus, orange-marinated beets, tapenade, a carpaccio, sometimes a smoky roasted-eggplant dip or an Aleppo-style red pepper and walnut paste — then the seafood bouillabaisse, saving the broth for the risotto that reviewers insist on. Lamb brochettes over spicy couscous are the official No. 1; the red-wine-braised beef cheek is said to take three days. Since spring 2026 lunch is a pita sandwich set with lentil soup, harissa and tzatziki from about ¥1,000. The wine list leans unusual. Diners call the owner cheerful and willing to talk food at the counter; the room was featured in an・an and Meets, per an October 2025 review. One cook means relaxed pacing, and the counter passage is narrow.",
    chef_bio: { chef_name: null, roles: ['Owner-chef (runs the bistro alone, per a November 2025 review)'], origin: null, background: 'Opened on 29 July 2024 (Tabelog). The owner, described on the official site as having wide experience, cooks the food and picks the wines (official site; Tabelog). Reviewers say the chef cooked for the wealthy in places like Dubai and London (October 2025 review) and worked in Dubai and London (July 2026 review), and a July 2024 diner had followed the chef from a previous restaurant. Featured in an・an and in Meets\' "Delicious Book 2026" (October 2025 review).', philosophy: '"Making Mediterranean cuisine more familiar": Mediterranean cooking that spreads out from the south of France, with fresh seafood, game and vegetables, and unusual wines (official site).', specialty: 'Mediterranean appetizer platter; seafood bouillabaisse and risotto; lamb brochette.',
      anecdotes: [
        { text: '"It\'s incredible that I can enjoy dishes from a chef who has cooked for the wealthy in places like Dubai and London at such reasonable prices in Nishihonmachi!" — October 2025, second visit.', source: R + 'B491353616/' },
        { text: '"Despite being run by a single person, the timing of the food delivery was just right, and everything was served hot and fresh." — November 2025, course.', source: R + 'B517207634/' },
      ],
      japanese_sources_summary: '公式サイト (bistro-umami.com): 「地中海料理をもっと身近に」、南フランスから広がる地中海料理と厳選ワイン、サントリーニ島をイメージした店、新鮮な魚介やジビエ、野菜、多彩な経験を持つ店主が料理を用意、気さくな店主、四ツ橋駅から徒歩4分、営業11:30〜14:30 (土日祝12:00〜)・17:30〜22:00 (金土祝前日〜24:00)、不定休 (11月は3・10・15・18・23・30日)、ランチは2026年10月から予約なしでも可、ランチコースは要予約、地中海オードブル2名盛2860円、仔羊のブロシェットとスパイシークスクス580円 (人気No.1)、魚介山盛りブイヤベース1980円、UMaランチコース3080円、コース5000円〜7700円、パスタは淡路の製麺所の生パスタ、ワインはグラス680円から。食べログ: 大阪市西区新町1-22-22 新町ダイヤパレス 104 (建物の南側)、西大橋駅・四ツ橋駅から徒歩4分、14席 (カウンター8、テーブル6)、禁煙、ワンドリンク制、カード・iD・QUICPay可、英語のスタッフ、オープン日2024年7月29日。口コミ(2024年7月〜2026年10月): 店主ひとりで営業、Dubai や London で経験を積んだシェフ、前の店からのファン、an・an と Meets に掲載、地中海前菜の盛り合わせ (フムス、ビーツのオレンジマリネ、焼き茄子のペースト、アレッポ発祥の赤パプリカとくるみのペースト)、ブイヤベースと〆のリゾット、牛ほほ肉の赤ワイン煮込みは3日かける、ブリワット、2026年春からピタサンドのランチ (チキン、ラム、季節の具、レンズ豆のスープ、ポテト、ハリッサ、ザジキ)、珍しいワイン、明るい店主、カウンターの後ろの通路はせまい。',
      confidence: 'medium', sources: [TB, SITE, SITE + 'menu/', SITE + 'access/', R + 'B489919662/', R + 'B491353616/', R + 'B517207634/', R + 'B531677565/', R + 'B537268795/', R + 'B523721405/'] },
    cultural_comfort: { level: 'english', note: 'English-speaking staff (Tabelog); dislikes are asked before a course (December 2025).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市西区新町1-22-22 新町ダイヤパレス 104',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated through October 2026; official site posts dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区新町一丁目22番22号 (go) 33m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE + 'menu/', R + 'B531677565/', R + 'B489919662/'],
    price_note: 'Prices from the official site (October 2026) unless marked; risotto and cheesecake from a July 2026 review, pita lunch from an April 2026 review.', last_checked: TODAY, items: [
      it('地中海オードブル', '', 'Mediterranean appetizer platter (for two)', '¥2,860', 'Appetizers', 'ask', 'ask', 'Official site.', 'platter'),
      it('仔羊のブロシェット（串焼き）', '', 'Lamb brochette with spicy couscous', '¥580', 'Grill', 'ask', 'no', 'Official site; most popular dish.', 'lamb'),
      it('魚介山盛りブイヤベース', '', 'Seafood bouillabaisse', '¥1,980', 'Main', 'ask', 'no', 'Official site.', 'bouillabaisse'),
      it('', '', 'Risotto from the bouillabaisse broth', '¥780', 'Main', 'ask', 'no', 'July 2026.', 'risotto'),
      it('', '', 'Pita sandwich lunch set', '¥1,000', 'Lunch', 'no', 'no', 'From ¥1,000; April 2026.', 'pita'),
      it('UMaランチコース', '', 'UMa lunch course (reservation)', '¥3,080', 'Lunch', 'ask', 'no', 'Official site.', 'lunchcourse'),
    ] }, {
    cuisine: 'サントリーニ島をイメージした地中海と中東のビストロ (14席)・地中海オードブル2名盛2860円 (公式サイト): ニース風サラダ、ひよこ豆のフムス、ブランダードコロッケ、ビシソワーズ、エビと真鯛のカルパッチョ、スモーク枝豆とペコリーノ、ビーツのオレンジマリネ、タプナード、ラタトゥイユ・仔羊のブロシェットとスパイシークスクス580円 (公式サイト)・魚介山盛りブイヤベース1980円、オマール海老にもでき、〆はそのスープのリゾット780円・モロッコ風春巻きブリワット・熊本県産あか牛のホホ肉赤ワイン煮込み・淡路の製麺所の生パスタ: 生ウニのクリーム、卵黄とフレッシュトリュフ、イカ墨・バスクチーズケーキとジェラート880円 (2026年7月)・ランチ: ピタサンド (チキン、ラム、季節の具) にレンズ豆のスープ、ポテト、ハリッサ、ザジキで1000円から (2026年)、UMaランチコース3080円 (要予約)・コース5000円〜7700円・珍しいワインはグラス680円から',
    neighborhood: '新町1-22-22 新町ダイヤパレス 104 (建物の南側)。西大橋駅・四ツ橋駅から徒歩4分',
    gf_detail: '要確認。グルテンの情報なし。パン、ピタ、クスクス、生パスタ、フリットからグリル、ブイヤベース、ディップまであり、コースの前に苦手なものを聞いてくれる (2025年12月) ので、そのときにグルテンのことを伝えて。',
    vegan_detail: '要確認。魚介と肉が中心だが、メゼにはフムス、焼き茄子のペースト、赤パプリカとくるみのペースト (パン粉入り)、ラタトゥイユも。ヴィーガンの表示はないので確認を。',
    notes: '[地中海ビストロ・四ツ橋近くの新町、ひとりの厨房の中東のメゼ] 新町のマンションの南側にある、サントリーニ島をイメージした小さなビストロ。店主ひとりで料理し、口コミでは Dubai や London で腕をふるったシェフ。まずは前菜の盛り合わせ (フムス、ビーツのオレンジマリネ、タプナード、カルパッチョ、ときに焼き茄子のペーストやアレッポ風の赤パプリカとくるみのペースト)、次に魚介のブイヤベースで、スープは口コミがこぞってすすめる〆のリゾットのために残しておく。公式の人気No.1は仔羊のブロシェットとスパイシークスクスで、牛ほほ肉の赤ワイン煮込みは3日かけるという。2026年春からランチはピタサンドのセットで、レンズ豆のスープ、ハリッサ、ザジキつきで1000円ほどから。ワインは珍しいものが多い。明るい店主はカウンターで料理の話もしてくれるという声。2025年10月の口コミによると an・an や Meets に掲載。料理人ひとりなのでペースはゆったりめで、カウンターの後ろの通路はせまい。',
  });
}

save();
