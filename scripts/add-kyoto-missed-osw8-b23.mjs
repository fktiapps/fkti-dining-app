// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 23.
//   + ふくや京都 Fukuya Kyoto (Yamagata meat soba and sake in an alley off Sanjo Higashinotoin; core list)
//   + curd (fresh-cheese Italian of Mitsui Garden Hotel Kyoto Sanjo Premier; core list)
//   + 宗 Sou (dashi-focused creative Japanese izakaya, Nishihorin; notable list)
//   + 家傳京飴 祇園小石 祇園本店 Gion Koishi (Kyoto candy shop with a kakigori tea room upstairs; notable list)
//   Picked 2026-11-05 after batch 22. `queue.mjs kyoto-missed next core 200`: ふくや京都 26035291, curd 26041471.
//   `next notable 200`: TADKA2 26036917 (skipped, branch of a brand in data), 宗 26006755, 家傳京飴 祇園小石 祇園本店
//   26006689. Same-name check first, same brand or operator only: ふくや京都's operator also runs ふくや大町 (本店) and
//   ふくや六地蔵 in Kamakura (official site) — 3 shops, none in data; the other ふくや names in our crawls (博多 ふくや,
//   京肴 ふくや mp_kyozakana_fukuya, 大衆酒場 ふくや, お好み焼き ふくや) are unrelated businesses. No other curd, 宗 or
//   祇園小石 business in our crawls (鮨 宗 and 田辺宗 are unrelated). curd is the hotel's own restaurant (drafted per the
//   brief). 茶房こいし 26003184 is a second Tabelog listing for Gion Koishi's tea room at the same address (286-2), not in
//   data. None of the four is in data/kyoto.json: grep by name and address (菱屋町39, 菱屋町45, 蟷螂山町460, 祇園町北側286)
//   found none.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-23');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26036917', 'TADKA2: second shop of インド食堂TADKA, already in data (vm_indo_shokudo_tadka_tadka; our crawls also hold インド食堂TADKA 26019333) — a branch of a brand already in data is skipped (integrator group line, 2026-11-05).');

// ================================================================ ふくや京都
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26035291/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://fukuyakyoto.amebaownd.com/';
  const H = day(['11:00', '15:00'], ['18:00', '22:00']);
  put({
    id: 'kyoto_fukuya_kyoto_yamagata', name: 'ふくや京都 (Fukuya Kyoto)', category: 'OMNI',
    lat: 35.008120, lng: 135.761702, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thick Yamagata soba and torichūka ramen in soy-based chicken-and-bonito broths, with saba sushi and dashi rice (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat soba with chicken in chicken-and-bonito broth; other dishes include saba sushi and shirasu (2026 reviews).',
    hours_raw: 'Wednesday to Sunday 11:00–15:00 and 18:00–22:00; closed Monday and Tuesday; hours may change (Tabelog). Reservations accepted (Tabelog); evenings can be fully booked (September 2026). Lunch queues of 2–5 groups are common, and the kitchen boils four servings at a time, so waits can run long (June–July 2026). 16 seats: 10 at the counter, 6 at tables; non-smoking (Tabelog). Cards (JCB, AMEX) and QR (Tabelog). A rebuilt old townhouse at the end of a narrow alley behind a coin parking lot, on Sanjo east of Higashinotoin — maps can lead to the car park instead (Tabelog; official site; 2026 reviews). First anniversary in July 2020 (official site).',
    hours: { 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sanjo east of Higashinotoin, down an alley — near Karasuma Oike Stn',
    cuisine: 'Yamagata soba izakaya: the owner\'s home-region "niku soba", Yamagata sake and Yamagata local dishes (official site) · cold meat soba ("tsuttai niku soba") ¥1,200 or hot meat soba — thick, firm soba with free-range chicken chashu in a chicken-and-bonito broth (June–October 2026) · cold or hot torichūka (chicken ramen) (July 2026) · saba sushi, dashi rice ¥500 set, shirasu potato salad, dashi tofu, Manganji peppers, tama-konnyaku, Yamagata nameko (2026 reviews) · Yamagata sake such as Dewazakura and Toko (October 2026) · lunch about ¥1,000–2,000; dinner about ¥3,000–5,000 (Tabelog)',
    website: WEB, gmaps: gm('ふくや京都 山形蕎麦'), menu_url: null,
    notes: '[Yamagata soba · Sanjo Higashinotoin, hidden behind a car park] A hand-built old townhouse at the end of an alley behind a coin car park, serving the food of the owner\'s home, Yamagata: thick, chewy "niku soba" with chicken, cold or hot (¥1,200), chilled torichūka, saba sushi, and Yamagata sake and snacks at night. Expect a queue at lunch — the kitchen cooks four bowls at a time, and one July 2026 visitor waited 90 minutes all told. Closed Monday and Tuesday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), from Yamagata', 'Staff'], origin: 'Yamagata (official site: "the culture of the owner\'s home, Yamagata").',
      background: 'Per the official site: a hideaway at the back of an alley at Sanjo Higashinotoin, built around Yamagata meat soba, Yamagata sake and Yamagata dishes, in an old house rebuilt almost entirely by the owner and staff from old timber and tools; the owner\'s other shops are ふくや大町 (the main shop) and ふくや六地蔵 in Kamakura; the Kyoto shop marked its first anniversary in July 2020.',
      philosophy: 'A place where the cultures of Yamagata, Kamakura and Kyoto meet (official site).', specialty: 'Cold meat soba; torichūka.',
      anecdotes: [
        { text: 'A July 2026 diner, once hooked on Yamagata meat soba while living in Tohoku, felt shy ordering "tsuttai niku soba" by its menu name — and found the noodles a little too hard.', source: R + 'B532423200/' },
        { text: 'A July 2026 guest queued 30 minutes while seats sat empty inside, waited over an hour and a half in all, and found a loud regular distracting: "It\'s a shame because the food was delicious."', source: R + 'B533221095/' },
        { text: 'An October 2026 visitor, sent to a parking lot by Google, found the shop at the end of the alley on a later try and paired Dewazakura and Toko with Yamagata nameko.', source: R + 'B536806744/' },
      ],
      japanese_sources_summary: '公式サイト: ふくや京都、京都三条東洞院の路地奥の隠れ家、山形特有の肉そば、山形の日本酒、山形の郷土料理、古民家をオーナーとスタッフでほぼ手作りで改築、オーナーの地元山形、本店ふくや大町と2号店ふくや六地蔵は鎌倉、2020年7月に一周年。食べログ: 居酒屋・そば・おでん、中京区菱屋町39、水〜日 11:00〜15:00・18:00〜22:00、月・火休み、予約可、16席 (カウンター10、テーブル6)、禁煙、カード・QR 可。口コミ (2026年6月〜10月、英語): 駐車場の奥の路地、つったい肉そば1,200円、温かい肉そば、太く硬めのそば、放し飼いの鶏、鶏と鰹のつゆ、鶏中華、鯖寿司、だしご飯500円、しらすのポテサラ、だし豆腐、万願寺とうがらし、玉こんにゃく、なめこ、出羽桜、東光、昼は行列、一度に4人前しか茹でられず待つ、長く待ったとの声 (2026年7月)。',
      confidence: 'medium', sources: [WEB, TB, R + 'B528309029/', R + 'B530472494/', R + 'B530910047/', R + 'B531936629/', R + 'B532107861/', R + 'B532423200/', R + 'B532511022/', R + 'B533221095/', R + 'B535035444/', R + 'B536806744/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Hidden behind a car park; queue at lunch; book for evenings; cards (JCB, AMEX) and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区菱屋町39',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.008120, 135.761702); cross-checked: GSI 京都府京都市中京区菱屋町39番地 (lot) 33 m; curd (菱屋町45-1) is 47 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B530472494/', R + 'B535035444/'],
    price_note: 'No menu read; prices from June and September 2026 reviews.', last_checked: TODAY, items: [
      it('つったい肉そば', 'tsuttai niku soba', 'Cold meat soba', '¥1,200', 'Soba', 'no', 'no', 'June 2026.', 'tsuttai_niku_soba'),
      it('', '', 'Hot meat soba', '', 'Soba', 'no', 'no', '', 'niku_soba'),
      it('', '', 'Torichūka (chicken ramen), cold or hot', '', 'Noodles', 'no', 'no', 'July 2026.', 'torichuka'),
      it('', '', 'Dashi rice (set)', '¥500', 'Rice', 'ask', 'no', 'September 2026.', 'dashi_gohan'),
    ] }, {
    cuisine: '山形そばの居酒屋: 店主の地元山形の「肉そば」、山形の日本酒、山形の郷土料理 (公式サイト)・つったい肉そば1,200円か温かい肉そば: 太くしっかりしたそばに放し飼いの鶏のチャーシュー、鶏と鰹のつゆ (2026年6月〜10月)・冷たいか温かい鶏中華 (2026年7月)・鯖寿司、だしご飯500円のセット、しらすのポテサラ、だし豆腐、万願寺とうがらし、玉こんにゃく、山形のなめこ (2026年の口コミ)・出羽桜、東光など山形の日本酒 (2026年10月)・昼は1,000〜2,000円ほど、夜は3,000〜5,000円ほど (食べログ)',
    neighborhood: '東洞院の東の三条通、路地の奥。烏丸御池駅の近く',
    gf_detail: 'グルテンフリーではない。太い山形のそばと鶏中華を醤油系の鶏と鰹のつゆで、鯖寿司やだしご飯も (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鶏と鰹のつゆの鶏の肉そば。ほかに鯖寿司やしらすも (2026年の口コミ)。',
    notes: '[山形そば・三条東洞院、駐車場の奥の隠れ家] コインパーキングの奥の路地の突き当たり、手作りで改築した古民家で、店主の故郷山形の料理を出す: 太くもちもちの鶏の「肉そば」を冷たくも温かくも (1,200円)、冷たい鶏中華、鯖寿司、夜は山形の日本酒と肴。昼は行列を覚悟。一度に4人前ずつ茹でるため、2026年7月の客は全部で1時間半待ったと書いている。月・火休み。',
  });
}

// ================================================================ curd
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26041471/'; const R = TB + 'dtlrvwlst/';
  const H = day(['07:00', '23:00']);
  put({
    id: 'kyoto_curd_mitsui_garden', name: 'curd', category: 'OMNI',
    lat: 35.008483, lng: 135.761978, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Fresh pasta, bread (served freely at lunch), fritters and desserts alongside the house cheeses; Tabelog says allergy information is available and asks guests with allergies to phone ahead (Tabelog; 2026 reviews).',
    vegan_status: 'options', vegan_label: 'Some vegan options', vegan_detail: 'Some vegan options per Tabelog, which lists vegan and vegetarian options and allergy information; the menu is built on house-made cheese, so ask (Tabelog; 2026 reviews).',
    hours_raw: 'Daily 7:00–23:00 (last order 21:30), including breakfast; closed in line with Mitsui Garden Hotel Kyoto Sanjo Premier (Tabelog). Reservations accepted; dishes chosen on the day; 90-minute lunch and 120-minute dinner limits at busy times; phone ahead about allergies and when bringing a pet (Tabelog). 10% service charge at dinner only (Tabelog original ディナーのみ、サービス料10%). 160 seats incl. counter, sofas and an open terrace where dogs are welcome; semi-private room for 10–30; wheelchair accessible; free Wi-Fi; non-smoking (Tabelog; October 2026). Cards, e-money and QR incl. Alipay and WeChat Pay (Tabelog). Ground floor of Mitsui Garden Hotel Kyoto Sanjo Premier, overlooking a courtyard; 4 min walk from Karasuma Oike Stn (Tabelog; July 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sanjo east of Higashinotoin, hotel ground floor — 4 min walk from Karasuma Oike Stn',
    cuisine: 'Italian of cheese made fresh each morning in the shop\'s own workshop from milk from a Tanba farm, with homemade fresh pasta and seasonal ingredients (Tabelog; 2026 reviews) · lunch: deli plate with two fresh cheeses, antipasti, soup and bread ¥2,420 (July–September 2026); pastas such as burrata tagliatelle with Tanba shimeji and tomato bisque ¥3,080, ricotta, anchovy and lemon spaghettini ¥1,980, pomodoro with fresh mozzarella, squid and chestnut with basil (2026 reviews) · fresh ricotta, burrata, a fig and Kameoka-beef prosciutto platter with tea sauce (August–September 2026) · half-buffet breakfast of cheeses with a main such as an omelette, about ¥3,800 (September 2026) · night café: mascarpone tea-lime tiramisu, plum wine (July 2026) · cheese to take away (August 2026)',
    website: null, gmaps: gm('curd 三井ガーデンホテル京都三条プレミア'), menu_url: null,
    notes: '[Italian · Sanjo, hotel courtyard, cheese made every morning] The Mitsui Garden Hotel Kyoto Sanjo Premier\'s all-day restaurant, built around an in-house cheese workshop: ricotta, burrata and mozzarella made each morning from Tanba milk, on a ¥2,420 deli-plate lunch, on fresh pastas (about ¥2,000–3,100), or at a cheese-laden breakfast buffet (about ¥3,800). Bright room over a green courtyard, a dog-friendly terrace, mostly overseas hotel guests at breakfast. 10% service at dinner. Open 7:00–23:00.',
    chef_bio: { chef_name: null, roles: ['Hotel kitchen and service staff (unnamed)'], origin: null,
      background: 'Per Tabelog: the Italian dining of Mitsui Garden Hotel Kyoto Sanjo Premier, with fresh cheese made every morning from milk delivered by a farm in Tanba, homemade fresh pasta and seasonal ingredients; a terrace where dogs are welcome. Reviewers in 2026 describe an in-house cheese workshop with a shop, attentive staff, and many international guests at breakfast.',
      philosophy: 'Fresh cheese made every morning (Tabelog).', specialty: 'Fresh ricotta and burrata; cheese breakfast.',
      anecdotes: [
        { text: 'A September 2026 visitor booked the 7 am breakfast as a non-guest and found only about two other Japanese groups among the overseas hotel guests — and a buffet heavy with cheeses and desserts.', source: R + 'B536233719/' },
        { text: 'A September 2026 diner could not catch all of the soft-spoken explanation of the sparkling wine over the chatter of other tables.', source: R + 'B535652791/' },
        { text: 'An October 2026 mother came with two daughters and the dog for the terrace, and the staff accommodated a last-minute time change.', source: R + 'B538025481/' },
      ],
      japanese_sources_summary: '食べログ: イタリアン、中京区三条通東洞院東入菱屋町45-1 三井ガーデンホテル京都三条プレミア1F、烏丸御池駅から徒歩4分、毎日 7:00〜23:00 (L.O.21:30)、ホテルに準じて不定休、予約可 (料理は当日選ぶ、混雑時は昼90分・夜120分)、アレルギーやペット同伴は事前に、ディナーのみサービス料10%、160席、テラス (犬可)、半個室10〜30名、車椅子可、Wi-Fi、禁煙、カード・電子マネー・QR 可、朝食あり、ヴィーガン・ベジタリアン対応、アレルギー表示あり、丹波の牧場から届く牛乳で毎朝作るフレッシュチーズ、手打ちの生パスタ、旬の食材。口コミ (2026年7月〜10月、英語): チーズ工房、デリプレートランチ2,420円、ブッラータと丹波しめじのタリアテッレ3,080円、リコッタとアンチョビとレモンのスパゲッティーニ1,980円、ポモドーロ、無花果と亀岡牛の生ハム、チーズの朝食ブッフェ3,800円ほど、夜カフェ、テラスに犬と、海外の客が多い。',
      confidence: 'medium', sources: [TB, R + 'B533092279/', R + 'B534195469/', R + 'B534488579/', R + 'B534578455/', R + 'B535652791/', R + 'B536233719/', R + 'B536441929/', R + 'B537405108/', R + 'B538025481/', R + 'B538026175/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Hotel restaurant; phone ahead about allergies; 10% service at dinner; cards, e-money and QR.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['Guests with food allergies are asked to inform the restaurant in advance by phone; Tabelog lists allergy information as available (Tabelog).'] },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区三条通東洞院東入菱屋町45-1 三井ガーデンホテル京都三条プレミア 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.008483, 135.761978); cross-checked: GSI 京都府京都市中京区菱屋町45番地 (lot) 11 m; kyoto_hyakuten_manten is 37 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B538026175/', R + 'B536233719/'],
    price_note: 'Prices from July–September 2026 reviews; 10% service at dinner.', last_checked: TODAY, items: [
      it('', '', 'Deli plate lunch (two fresh cheeses, antipasti, soup, bread)', '¥2,420', 'Lunch', 'no', 'no', 'July 2026.', 'deli_plate'),
      it('', '', 'Fresh burrata tagliatelle with Tanba shimeji and tomato bisque', '¥3,080', 'Pasta', 'no', 'no', 'July 2026.', 'burrata_tagliatelle'),
      it('', '', 'Ricotta, anchovy and lemon spaghettini', '¥1,980', 'Pasta', 'no', 'no', 'July 2026.', 'ricotta_spaghettini'),
      it('', '', 'Cheese breakfast (half buffet with a main)', '¥3,800', 'Breakfast', 'ask', 'no', 'About ¥3,800, September 2026.', 'breakfast'),
    ] }, {
    cuisine: '丹波の牧場の牛乳で毎朝店の工房で作るチーズに、自家製の生パスタと旬の食材のイタリアン (食べログ、2026年の口コミ)・ランチ: フレッシュチーズ2種、前菜、スープ、パンのデリプレート2,420円 (2026年7月〜9月)、丹波しめじとトマトビスクのブッラータのタリアテッレ3,080円、リコッタとアンチョビとレモンのスパゲッティーニ1,980円、フレッシュモッツァレラのポモドーロ、いかと栗のバジルソースなど (2026年の口コミ)・フレッシュリコッタ、ブッラータ、無花果と亀岡牛の生ハムの盛り合わせに紅茶のソース (2026年8月〜9月)・チーズのハーフブッフェとオムレツなどのメインの朝食3,800円ほど (2026年9月)・夜カフェ: マスカルポーネと紅茶とライムのティラミス、梅酒 (2026年7月)・チーズの持ち帰りも (2026年8月)',
    neighborhood: '東洞院の東の三条通、ホテルの1階。烏丸御池駅から徒歩4分',
    gf_detail: '要確認。チーズのほか、生パスタ、パン (ランチはおかわり可)、フリット、デザート。食べログではアレルギー表示ありで、アレルギーのある客は事前に電話を (食べログ、2026年の口コミ)。',
    vegan_detail: 'ヴィーガンの選択肢あり: 食べログにヴィーガン・ベジタリアン対応とアレルギー表示あり。ただし料理は自家製チーズが中心なので確認を (食べログ、2026年の口コミ)。',
    notes: '[イタリアン・三条、ホテルの中庭、毎朝作るチーズ] 三井ガーデンホテル京都三条プレミアの終日営業のレストラン。店の工房で丹波の牛乳から毎朝作るリコッタ、ブッラータ、モッツァレラを、2,420円のデリプレートのランチ、2,000〜3,100円ほどの生パスタ、チーズたっぷりの朝食ブッフェ (3,800円ほど) で。緑の中庭に面した明るい店内、犬可のテラス、朝食は海外のホテル客が多い。夜はサービス料10%。7:00〜23:00。',
  });
}

// ================================================================ 宗
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26006755/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '24:00']);
  put({
    id: 'kyoto_sou_nishihorin', name: '宗 (Sou)', category: 'OMNI',
    lat: 35.004858, lng: 135.755301, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Dashi-based creative Japanese dishes including cream croquettes, tempura, fried taro, kara-age and kamameshi; no gluten information (Tabelog; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi-centred cooking with fish, crab, hamo and chicken (Tabelog; 2026 reviews).',
    hours_raw: '17:30–24:00 (last order 23:30); closed irregularly (Tabelog). Reservations accepted; BYO possible; courses and hot pots; half portions for solo diners (Tabelog; August 2026). An otoshi of ¥600 (Tabelog original お通し代600円) — a three-item starter (October 2026). 32 seats with tables for two and sofas for six; private hire 20–50; non-smoking; children welcome (Tabelog). Cards, e-money and QR (Tabelog). Takeaway (Tabelog). Ground floor of サンハイツ入江 at Nishihorin, west of Shijo Karasuma; 5 min walk from Shijo or Karasuma stations (Tabelog; October 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nishihorin, west of Shijo Karasuma — 5 min walk from Shijo Stn',
    cuisine: 'Creative Japanese izakaya built on dashi, with seasonal ingredients from Kyoto and across Japan, cooked by ryotei-trained chefs using vacuum and steam-convection equipment; regional sake (Tabelog) · signature cream croquettes, e.g. crab and crab-miso (Tabelog; September 2026) · courses and hot pots; kamameshi, a house favourite (Tabelog; October 2026) · e.g. fried taro and Kumamoto ginkgo (August 2026); hamo dishes, Saikyo-grilled fish (August 2026); yuba tofu, cucumber with chicken, toro-taku, yuba tempura (September 2026); a three-item starter, sashimi of octopus, sea urchin and white fish, shirako ponzu, salted firefly squid, kara-age with grated daikon (October 2026) · about ¥4,000–8,000 (Tabelog; 2026 reviews)',
    website: null, gmaps: gm('宗 京都 蟷螂山町 居酒屋'), menu_url: null,
    notes: '[Izakaya · Nishihorin west of Shijo Karasuma, dashi and cream croquettes] A lively izakaya a short walk west of Shijo Karasuma where ryotei-trained cooks build creative dishes on careful dashi: a three-bite starter, sashimi, shirako ponzu, fried taro, the house crab cream croquette and kamameshi, with regional sake. Half portions for solo diners; courses for groups. Busy with visitors from abroad early in the evening, calmer after 8. One August 2026 guest was charged for a wrong item — check the bill. ¥600 otoshi. Open until midnight.',
    chef_bio: { chef_name: null, roles: ['Chefs (unnamed), trained at ryotei', 'Manager and staff'], origin: null,
      background: 'Per Tabelog: skilled chefs who worked in traditional ryotei, combined with modern equipment such as vacuum machines and steam-convection ovens, cook dashi-centred creative Japanese food from seasonal ingredients; loved by locals and tourists. Reviewers in 2026 describe a thoughtful chef, a friendly manager, efficient staff and many international guests around 19:00.',
      philosophy: 'Authentic, dashi-focused cooking in a casual, welcoming room (Tabelog).', specialty: 'Cream croquettes; kamameshi; dashi dishes.',
      anecdotes: [
        { text: 'An August 2026 solo diner chose a course and found the chef had worked hamo — not on the course — into several dishes.', source: R + 'B534200080/' },
        { text: '"However, I was disappointed to find that there was an order mistake, and I was charged for the incorrect menu item." — August 2026, titled "I should have checked the receipt".', source: R + 'B533839878/' },
        { text: 'An October 2026 Monday visitor found more than half the room foreign tourists at 7 pm and a much calmer room by 8.', source: R + 'B538117461/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・日本料理、中京区蟷螂山町460 サンハイツ入江1F、四条駅・烏丸駅から徒歩5分、17:30〜24:00 (L.O.23:30)、不定休、予約可、お通し代600円、32席 (2人用テーブルから6人のソファ席)、貸切20〜50名、禁煙、子ども可、カード・電子マネー・QR 可、持ち込み可、テイクアウト、京都や全国の旬の食材とだし、料亭出身の料理人と真空機やスチコン、自慢のクリームコロッケ、全国の地酒、コースと鍋。口コミ (2026年8月〜10月、英語): 小芋の唐揚げ、熊本の銀杏、鱧、西京焼き、湯葉豆腐、とろたく、湯葉の天ぷら、蟹と蟹味噌のクリームコロッケ、突き出し3品、お造り、白子ポン酢、ほたるいかの塩辛、唐揚げのおろし、釜飯、一人なら半量も、注文を間違えて会計されたとの声 (2026年8月)、19時は海外の客が多く20時以降は落ち着く。',
      confidence: 'medium', sources: [TB, R + 'B533839878/', R + 'B534200080/', R + 'B534204372/', R + 'B534205945/', R + 'B534451812/', R + 'B534782591/', R + 'B534892762/', R + 'B538117461/', R + 'B538175400/', R + 'B538447730/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Half portions for solo diners; ¥600 otoshi; check the bill; cards, e-money and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区蟷螂山町460 サンハイツ入江 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004858, 135.755301); cross-checked: GSI 京都府京都市中京区蟷螂山町460番地 (lot) 45 m; nearest Kyoto record 118 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B538117461/'],
    price_note: 'No menu prices read except the ¥600 otoshi.', last_checked: TODAY, items: [
      it('', '', 'Otoshi (three-item starter)', '¥600', 'Charge', 'ask', 'no', 'Tabelog original お通し代600円.', 'otoshi'),
      it('', '', 'Crab and crab-miso cream croquette', '', 'Fried', 'no', 'no', 'House speciality.', 'kani_croquette'),
      it('', '', 'Fried small taro', '', 'Fried', 'ask', 'ask', '', 'koimo_karaage'),
      it('', '', 'Kamameshi', '', 'Rice', 'ask', 'no', '', 'kamameshi'),
    ] }, {
    cuisine: '京都や全国の旬の食材とだしを軸にした創作和食の居酒屋。料亭出身の料理人が真空機やスチームコンベクションも使い、全国の地酒とともに (食べログ)・自慢のクリームコロッケ (例: 蟹と蟹味噌) (食べログ、2026年9月)・コースと鍋、人気の釜飯 (食べログ、2026年10月)・例: 小芋の唐揚げと熊本の銀杏 (2026年8月)、鱧の料理、西京焼き (2026年8月)、湯葉豆腐、胡瓜と鶏、とろたく、湯葉の天ぷら (2026年9月)、突き出し3品、たこ・うに・白身のお造り、白子ポン酢、ほたるいかの塩辛、唐揚げのおろし (2026年10月)・4,000〜8,000円ほど (食べログ、2026年の口コミ)',
    neighborhood: '四条烏丸の西、蟷螂山町。四条駅から徒歩5分',
    gf_detail: '要確認。クリームコロッケ、天ぷら、小芋の唐揚げ、唐揚げ、釜飯などのだしを使う創作和食。グルテンの情報はない (食べログ、2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚、蟹、鱧、鶏を使うだし中心の料理 (食べログ、2026年の口コミ)。',
    notes: '[居酒屋・四条烏丸の西、だしとクリームコロッケ] 四条烏丸から西へ少し、にぎやかな居酒屋。料亭出身の料理人が丁寧なだしで創作料理を作る: 3品の突き出し、お造り、白子ポン酢、小芋の唐揚げ、名物の蟹のクリームコロッケ、釜飯を全国の地酒とともに。一人なら半量も、グループにはコースも。夜7時ごろは海外の客で混み、8時以降は落ち着く。2026年8月の客は注文と違う品で会計されたと書いているので会計の確認を。お通し600円。深夜0時まで。',
  });
}

// ================================================================ 家傳京飴 祇園小石 祇園本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26006689/'; const R = TB + 'dtlrvwlst/'; const WEB = 'http://www.g-koisi.com';
  const H = day(['10:00', '17:30']);
  put({
    id: 'kyoto_gion_koishi_honten', name: '家傳京飴 祇園小石 祇園本店 (Gion Koishi)', category: 'OMNI',
    lat: 35.003942, lng: 135.776723, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kyoto candies, kakigori with syrups, anmitsu, warabi mochi with kinako and parfaits; some sweets include wheat gluten (fu); no gluten information (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Kuromitsu and kinako kakigori, warabi mochi and many candies may be plant-based, but milk, condensed milk, cream and ice cream run through much of the menu; no ingredient information (2026 reviews).',
    hours_raw: 'Daily 10:00–17:30; hours may change (Tabelog); one November 2026 visitor arrived for a 10:30 opening. No reservations (Tabelog). Candy shop on the ground floor; the tea room (茶房こいし, a separate Tabelog listing at the same address) at the back of the ground floor and upstairs (Tabelog; August 2026). Waits of about 10 minutes at busy times (September 2026). Cards, e-money and QR (Tabelog). Wheelchair access; children welcome; takeaway (Tabelog). On Shijo-dori in Gion, a short walk from Yasaka Shrine; 5 min walk from Gion-Shijo Stn exit 7 (Tabelog; 2026 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shijo-dori, Gion near Yasaka Shrine — 5 min walk from Gion-Shijo Stn',
    cuisine: 'Kyoto candy maker (kyō-ame) with a tea room for kakigori and wagashi (Tabelog; official site) · candies such as the namesake Gion Koishi mix, Uji matcha, hojicha, fruit and monthly seasonal flavours, about ¥432–540 a bag (official site) · kakigori: Uji matcha, Uji kintoki, kuromitsu-kinako, melon, peach with homemade jam, "Wagamama Ice" with anmitsu inside — Amaou strawberry milk ¥1,630, brown-sugar milk ¥1,270 (July–October 2026) · matcha parfait ¥1,350 with free hojicha (June 2026); "Maiko\'s After-Practice" assortment of nine sweets (August 2026); kuromitsu-kinako warabi mochi (November 2026) · mostly ¥1,000–2,000 (Tabelog)',
    website: WEB, gmaps: gm('祇園小石 祇園本店'), menu_url: null,
    notes: '[Sweets · Gion near Yasaka Shrine, Kyoto candy and kakigori] A Kyoto candy maker on Shijo-dori where, a reviewer says, maiko buy candy here: the ground floor sells jars of kyō-ame — the namesake Gion Koishi mix, Uji matcha, seasonal flavours — and the tea room behind and upstairs serves fluffy kakigori (Uji kintoki, melon, Amaou strawberry milk with anmitsu hidden inside, ¥1,270–1,630), a matcha parfait with free hojicha and warabi mochi. Short waits in the afternoon. Open daily.',
    chef_bio: { chef_name: null, roles: ['Shop and tea-room staff (unnamed)'], origin: null,
      background: 'Per the official site: a Kyoto candy (kyō-ame) house, whose namesake Gion Koishi mix has been its signature since the founding; its Gion main shop also has a tea room, and its hojicha candy uses the Kyoto hojicha served there. Per Tabelog: the ground floor is a candy shop and the upper floor a tea room (also listed as 茶房こいし). A reviewer says maiko from Gion come here to buy candy and that the shop avoids additives (August 2026).',
      philosophy: 'Bringing out natural flavour and sweetness without additives (August 2026 review).', specialty: 'Kyō-ame candy; kakigori.',
      anecdotes: [
        { text: 'An August 2026 visitor called it the best kakigori of a lifetime — Uji kintoki — on a scorching day after visiting family graves at Gojozaka.', source: R + 'B533672839/' },
        { text: 'An October 2026 theatre-goer, before Kabuki at Minami-za, was glad to find kakigori still served after its supposed end in September.', source: R + 'B537164895/' },
        { text: '"This is a shop where maiko from Gion come to buy candy." — August 2026.', source: R + 'B534175583/' },
      ],
      japanese_sources_summary: '公式サイト (オンラインストア): 家傳京飴 祇園小石、屋号を冠した看板商品「祇園小石」(色とりどり6種の京飴)、宇治抹茶飴、ほうじ茶飴 (祇園本店の甘味処で出す京ほうじ茶を使う)、果物、月替わりの祇園飴歳時記 (10月は栗あめ、11月は葡萄酒飴)、432〜540円、茶房こいし。食べログ: 和菓子・かき氷・カフェ、東山区祇園町北側286-2、祇園四条駅7番出口から徒歩5分、毎日 10:00〜17:30、予約不可、1階は飴の専門店、2階は甘味処 (茶房こいしとして別掲載)、カード・電子マネー・QR 可、車椅子可、子ども可、テイクアウト。口コミ (2026年6月〜11月、英語): 抹茶パフェ1,350円、無料のほうじ茶、宇治抹茶のかき氷、宇治金時、黒蜜きなこ、メロン、自家製ジャムの桃、わがまま氷 (あんみつ入り) のあまおうミルク1,630円・黒糖ミルク1,270円、舞妓さんのお稽古帰り (9種の甘味)、黒蜜きなこのわらび餅、舞妓さんが飴を買いに来る店、無添加。',
      confidence: 'medium', sources: [WEB, TB, R + 'B529941390/', R + 'B531632094/', R + 'B531978477/', R + 'B533613201/', R + 'B533672839/', R + 'B533930967/', R + 'B534175583/', R + 'B535995654/', R + 'B537164895/', R + 'B538467449/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Say whether you are shopping or eating in; short waits in the afternoon; cards, e-money and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側286-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official online store with news dated November 2026; reviews through November 2026.' },
    pin_source: `Tabelog ${TB} (35.003942, 135.776723); cross-checked: GSI 京都府京都市東山区祇園町北側286番地 (lot) 23 m; mp_coffee_cattleya_coffee_k is 11.5 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [WEB, R + 'B533613201/', R + 'B529941390/'],
    price_note: 'Candy prices from the official store; tea-room prices from June–August 2026 reviews.', last_checked: TODAY, items: [
      it('祇園小石', 'Gion Koishi', 'Gion Koishi assorted Kyoto candies (100 g)', '¥432', 'Candy', 'ask', 'ask', 'Official store.', 'gion_koishi_ame'),
      it('', '', '"Wagamama Ice" Amaou strawberry milk kakigori', '¥1,630', 'Kakigori', 'ask', 'no', 'August 2026.', 'wagamama_amaou'),
      it('', '', '"Wagamama Ice" brown-sugar milk kakigori', '¥1,270', 'Kakigori', 'ask', 'no', 'August 2026.', 'wagamama_kokuto'),
      it('', '', 'Matcha parfait', '¥1,350', 'Sweets', 'ask', 'no', 'June 2026, tax included.', 'matcha_parfait'),
    ] }, {
    cuisine: 'かき氷と和の甘味の茶房を併設した京飴の店 (食べログ、公式サイト)・屋号の「祇園小石」、宇治抹茶飴、ほうじ茶飴、果物、月替わりの季節の飴など1袋432〜540円ほど (公式サイト)・かき氷: 宇治抹茶、宇治金時、黒蜜きなこ、メロン、自家製ジャムの桃、あんみつ入りの「わがまま氷」(あまおうミルク1,630円、黒糖ミルク1,270円) (2026年7月〜10月)・抹茶パフェ1,350円と無料のほうじ茶 (2026年6月)、9種の甘味の「舞妓さんのお稽古帰り」(2026年8月)、黒蜜きなこのわらび餅 (2026年11月)・多くは1,000〜2,000円 (食べログ)',
    neighborhood: '八坂神社近くの祇園、四条通。祇園四条駅から徒歩5分',
    gf_detail: '要確認。京飴、蜜をかけたかき氷、あんみつ、きなこのわらび餅、パフェ。生麩を使う甘味もある。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: '要確認。黒蜜きなこのかき氷、わらび餅、多くの飴は植物性かもしれないが、ミルク、練乳、クリーム、アイスを使う品が多い。原材料の情報はない (2026年の口コミ)。',
    notes: '[甘味・八坂神社近くの祇園、京飴とかき氷] 四条通の京飴の店で、食べログの口コミでは舞妓さんも飴を買いに来るという。1階では屋号の「祇園小石」、宇治抹茶飴、季節の飴を売り、奥と2階の茶房でふわふわのかき氷 (宇治金時、メロン、あんみつ入りのあまおうミルクなど1,270〜1,630円)、無料のほうじ茶付きの抹茶パフェ、わらび餅を出す。午後は少し待つことも。無休。',
  });
}

save();
