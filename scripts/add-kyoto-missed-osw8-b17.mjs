// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 17.
//   + 焼鳥 ひさどり Yakitori Hisadori (one-man premium yakitori near City Hall; core list)
//   + 生そば大黒屋 Namasoba Daikokuya (soba house founded 1916, revived December 2025; core list)
//   + うらやま京色 Urayama Kyoshoku (creative kushiage courses in a Shijo Karasuma alley; notable list)
//   + this is ormary store (bread-and-drinks standing bar by Shosei-en; notable list)
//   Picked 2026-11-05 after batch 16. `queue.mjs kyoto-missed next core 200`: 焼鳥 ひさどり 26038003, 生そば大黒屋 26043085.
//   `next notable 200`: うらやま京色 26035003, this is ormary store 26040463. Same-name check first: no other ひさどり,
//   うらやま or ormary in our crawls; the other 大黒屋 shops (大黒屋鎌餅本舗, 旭川成吉思汗 大黒屋 天満店) are unrelated
//   businesses. None of the four is in data/kyoto.json: grep by name and address (下丸屋町406, 扇酒屋町287, 占出山町310,
//   本塩竈町533) found none.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-17');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 焼鳥 ひさどり
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26038003/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '24:00']);
  put({
    id: 'kyoto_yakitori_hisadori', name: '焼鳥 ひさどり (Yakitori Hisadori)', category: 'OMNI',
    lat: 35.010015, lng: 135.768796, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Yakitori with salt or tare, chicken sashimi and tataki, liver stew and a rice bowl; tare and some dishes are soy-based; no gluten information (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken restaurant — skewers, sashimi, tataki and offal (Tabelog; 2024–2026 reviews).',
    hours_raw: 'Daily 18:00–24:00, irregular closures (Tabelog). Reservation only; 17:00 and 22:00 entries by phone only; call ahead for special requests such as a birthday cake (Tabelog). An omakase course or à la carte (2024–2026 reviews). No table charge (Tabelog original 無し). Prices are not shown and there is no drink list (June 2026). 15 seats with a counter and a private room; private hire up to 20; smoking allowed at table seats only (Tabelog; December 2024). BYO drinks possible (Tabelog). Cards (VISA, Master, JCB, AMEX) (Tabelog). Third floor of グランドランド; step out of the lift into the shop; 1 min walk south of Kyoto Shiyakusho-mae Stn (Tabelog; May 2025). Opened 27 July 2022 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Just south of Kyoto Shiyakusho-mae, 3rd floor — 1 min walk from the station',
    cuisine: 'Upscale yakitori counter of several chicken brands, best known for antibiotic-free Takasaka chicken (2025 reviews) · omakase course of appetisers then skewers grilled one by one, or à la carte (2024–2026 reviews) · white-liver sashimi, chicken breast and thigh tataki, "tori no toro taku", heart, rare cuts, liver stew, a rice bowl to finish (2025–2026 reviews) · sake, shochu, wine and cocktails (Tabelog) · bills about ¥8,000–20,000 (Tabelog; 2024–2026 reviews)',
    website: null, gmaps: gm('焼鳥 ひさどり 京都'), menu_url: null,
    notes: "[Yakitori · by City Hall, one cook, Takasaka chicken] A dim, stylish third-floor counter south of City Hall where the owner, cooking alone, grills premium chicken — Takasaka above all — and serves it as sashimi and tataki too: white-liver sashimi and thigh tataki are the talk. Omakase or à la carte, popular with visitors from abroad. No prices are shown; one June 2026 diner found the skewers uneven and the tare and rice bowl too spicy. Smoking at tables. Reservation only.",
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed), who runs the shop alone'], origin: null,
      background: 'Per Tabelog: opened 27 July 2022. A May 2025 reviewer: "The owner runs the place alone, and it was lively with many foreign customers." Reviewers describe a friendly, quiet owner (December 2024 to March 2026), à la carte added to the course (December 2024), and a phone booking where the guest was asked on arrival about a referral (June 2026).',
      philosophy: null, specialty: 'Chicken sashimi and tataki; Takasaka chicken.',
      anecdotes: [
        { text: '"The white liver sashimi was so delicious that I ended up ordering a second serving." — November 2025.', source: R + 'B518572458/' },
        { text: 'A February 2026 diner said the "tori no toro taku", eaten with eyes closed, tasted like fatty tuna belly.', source: R + 'B525469713/' },
        { text: '"The salt-grilled skewers had inconsistent quality, and the sauce on the grilled skewers was too spicy." — June 2026.', source: R + 'B532251394/' },
        { text: '"However, the dim lighting makes the yakitori look less appealing visually when served... but it tastes great!" — August 2025.', source: R + 'B512016815/' },
      ],
      japanese_sources_summary: '食べログ: 焼鳥・鶏料理・創作料理、中京区下丸屋町406 グランドランド3F、京阪三条駅から西へ徒歩5分、市役所前駅から南へ徒歩1分、毎日 18:00〜24:00、不定休、完全予約制 (17時と22時の入店は電話のみ)、チャージ無し、15席、貸切20名まで、テーブル席のみ喫煙可、持ち込み可、カード可、2022年7月27日オープン。口コミ (2024年11月〜2026年6月、英語): 店主が一人で営む、Takasaka chicken など数種の銘柄鶏、おまかせとアラカルト、白レバーの刺身、ももとむねのたたき、鶏のトロたく、ハツ、レバーの煮込み、締めの丼、値段や酒の品書きがない、串にむらがありタレや丼が辛すぎたとの声 (2026年6月)、海外の客も多い。',
      confidence: 'medium', sources: [TB, R + 'B496444640/', R + 'B499444949/', R + 'B508866319/', R + 'B511811532/', R + 'B512016815/', R + 'B518572458/', R + 'B519690437/', R + 'B524418333/', R + 'B525469713/', R + 'B532251394/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Reservation only (17:00 and 22:00 by phone); no prices shown — ask; smoking at tables; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区下丸屋町406 グランドランド 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB} (35.010015, 135.768796); cross-checked: GSI 京都府京都市中京区下丸屋町406番地 (lot) 27 m; kyr_jinrui_mina_menrui_tsuke is 10.3 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B511811532/', R + 'B518572458/'],
    price_note: 'No prices are shown in the shop (June 2026); bills about ¥8,000–20,000.', last_checked: TODAY, items: [
      it('', '', 'Omakase yakitori course', '', 'Course', 'ask', 'no', '', 'omakase'),
      it('', '', 'White-liver sashimi', '', 'À la carte', 'ask', 'no', '', 'shiro_reba'),
      it('', '', 'Chicken thigh tataki (Takasaka chicken)', '', 'À la carte', 'ask', 'no', '', 'momo_tataki'),
    ] }, {
    cuisine: '数種の銘柄鶏を使う高級な焼鳥のカウンター、とくに抗生物質を使わない Takasaka chicken で知られる (2025年の口コミ)・前菜から一本ずつ焼く串のおまかせ、またはアラカルト (2024〜2026年の口コミ)・白レバーの刺身、むねとももたたき、「鶏のトロたく」、ハツ、珍しい部位、レバーの煮込み、締めの丼 (2025〜2026年の口コミ)・日本酒、焼酎、ワイン、カクテル (食べログ)・会計は8,000〜20,000円ほど (食べログ、2024〜2026年の口コミ)',
    neighborhood: '市役所前駅のすぐ南、ビル3階。駅から徒歩1分',
    gf_detail: '要確認。塩かタレの焼鳥、鶏の刺身やたたき、レバーの煮込み、丼。タレなど醤油を使う料理もある。グルテンの情報はない (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。串、刺身、たたき、内臓の鶏料理の店 (食べログ、2024〜2026年の口コミ)。',
    notes: '[焼鳥・市役所の南、店主一人と Takasaka chicken] 市役所の南、ビル3階の薄暗くおしゃれなカウンター。店主が一人で銘柄鶏、とくに Takasaka chicken を焼き、刺身やたたきでも出す: 白レバーの刺身とももたたきが評判。おまかせかアラカルトで、海外の客も多い。値段の表示はない。2026年6月の客は串にむらがあり、タレと丼が辛すぎたと書いている。テーブル席は喫煙可。完全予約制。',
  });
}

// ================================================================ 生そば大黒屋
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26043085/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://kyoto-daikokuya.jp/';
  const H = day(['11:00', '19:00']);
  put({
    id: 'kyoto_namasoba_daikokuya', name: '生そば大黒屋 (Namasoba Daikokuya)', category: 'OMNI',
    lat: 35.001991, lng: 135.761155, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: soba and udon in soy-based dashi, tempura, curry nanban and nabeyaki (official site; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: every bowl is built on the house dashi, with herring, chicken, egg, kamaboko and shrimp tempura among the toppings (official site; 2026 reviews).',
    hours_raw: '11:00–19:00 (last order 18:30), open straight through; closed Monday — if Monday is a holiday, open and closed Tuesday instead — and occasionally (official site; Tabelog). No reservations (Tabelog). 20 seats: 10 at the counter and 10 at tables; non-smoking; wheelchair accessible; children and strollers welcome (Tabelog). Cards, e-money and QR, including Alipay and WeChat Pay (Tabelog). English menu with photos (Tabelog). Higashinotoin south of Ayanokoji; 3 min walk from Shijo Stn exit 3 (Tabelog). Founded 1916; closed at the end of 2024 and reopened here on 12 December 2025 (official site).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashinotoin south of Ayanokoji — 3 min walk from Shijo Stn',
    cuisine: 'Old Kyoto soba and udon house revived in 2025 (official site) · ten-zaru, zaru, nameko, imokake, tori-nanban, kitsune, nishin, curry-nanban, nabeyaki (official site) · seasonal specials such as sudachi soba, hamo ten-zaru, chilled kitsune soba, sansai soba, chicken soba, wakatake soba (official site, 2026) · tempura zaru soba ¥1,900, ō-zaru ¥1,400, okame (shippoku) soba ¥1,400, half tempura bowl ¥1,450 (August–October 2026 reviews) · konoha-don, egg rice bowl, egg over rice with the zaru dipping sauce (2026 reviews) · sake and shochu (Tabelog)',
    website: WEB, gmaps: gm('生そば大黒屋 東洞院'), menu_url: null,
    notes: '[Soba · Higashinotoin, a 1916 soba house reborn] A soba and udon house founded in 1916, long in Pontocho and later in Daimaru, that closed at the end of 2024 and reopened in December 2025 in a new wooden shop near Shijo — with the old head chef, cookware and signboard, after a crowdfunding drive. Tempura zaru, nishin, kitsune, okame and seasonal bowls run about ¥1,400–1,900; some find it a little dear. English menu; cards and QR. Open 11:00–19:00. Closed Monday.',
    chef_bio: { chef_name: null, roles: ['Head chef of the former Daikokuya (unnamed)', 'Kitchen and floor staff'], origin: null,
      background: 'Per the official site: founded in Taisho 5 (1916), Daikokuya quietly closed at the end of 2024 after 109 years; inheriting the former head chef, the cooking tools and the signboard, it reopened on 12 December 2025 as the new Daikokuya, with the shop\'s Daikokuten statue at the door. Reviewers in 2026 recall the old shop near the Pontocho Kaburenjo and in Daimaru, and a revival through crowdfunding with former members returning (August 2026).',
      philosophy: '"A shop local people can drop into casually while out shopping" (official site).', specialty: 'Tempura zaru soba; seasonal soba.',
      anecdotes: [
        { text: '"In the final days before Daimaru closed, the flavor of the broth was lacking, but it seems to be returning to its former glory." — August 2026.', source: R + 'B535247609/' },
        { text: 'A July 2026 diner found the noodles so long that a single chopstick-lift could not take the whole portion.', source: R + 'B531702334/' },
        { text: '"While it\'s delicious, the prices are a bit high, making it less suitable for regular visits." — October 2026.', source: R + 'B537234255/' },
      ],
      japanese_sources_summary: '公式サイト: 生そば 大黒屋、大正5年創業、109年の歴史を経て2024年末にいったん閉店、旧大黒屋の料理長・調理器具・看板を受け継ぎ2025年12月12日に新生大黒屋として再開、店名は大黒天にちなみ大黒天像も引き継ぐ、下京区東洞院通綾小路下る扇酒屋町287、11:00〜19:00 (L.O.18:30)、月曜定休、天ざる・ざる・なめこ・いもかけ・鶏なんば・きつね・にしん・カレーなんば・なべ焼き、季節のすだちそば・鱧天ざる・冷やしきつね・山菜そば・鶏そば。食べログ: そば・うどん、四条駅3番出口から徒歩3分、予約不可、20席、禁煙、車椅子可、子ども可、カード・電子マネー・QR 可、英語メニュー。口コミ (2026年5月〜10月、英語): 天ざる1,900円、大ざる1,400円、おかめ (しっぽく) 1,400円、天丼ハーフ1,450円、木の葉丼、玉子丼、以前は先斗町や大丸に、クラウドファンディングで復活、やや高いとの声。',
      confidence: 'medium', sources: [WEB, TB, R + 'B519940285/', R + 'B524858349/', R + 'B528190682/', R + 'B531702334/', R + 'B533021186/', R + 'B533431536/', R + 'B535247609/', R + 'B535495467/', R + 'B537234255/', R + 'B537462417/'] },
    cultural_comfort: { level: 'english', note: 'English menu with photos (Tabelog); no reservations; cards, e-money and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区東洞院通綾小路下ル扇酒屋町287',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with news dated October 2026; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.001991, 135.761155); cross-checked: GSI 京都府京都市下京区扇酒屋町287番地 (lot) 12 m; nearest Kyoto record 50 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [WEB, R + 'B537234255/', R + 'B535247609/'],
    price_note: 'Menu items from the official site; prices from August–October 2026 reviews.', last_checked: TODAY, items: [
      it('天ざる', 'ten-zaru', 'Tempura zaru soba', '¥1,900', 'Soba', 'no', 'no', 'October 2026.', 'ten_zaru'),
      it('大ざる', 'ō-zaru', 'Large zaru soba', '¥1,400', 'Soba', 'no', 'no', 'October 2026.', 'o_zaru'),
      it('', '', 'Okame (shippoku) soba', '¥1,400', 'Soba', 'no', 'no', 'August 2026.', 'okame'),
      it('にしん', 'nishin', 'Herring soba', '', 'Soba', 'no', 'no', 'Official site.', 'nishin'),
    ] }, {
    cuisine: '2025年に復活した京都の老舗のそば・うどんの店 (公式サイト)・天ざる、ざる、なめこ、いもかけ、鶏なんば、きつね、にしん、カレーなんば、なべ焼き (公式サイト)・すだちそば、鱧天ざる、冷やしきつね、山菜そば、鶏そば、若筍そばなど季節の品 (公式サイト、2026年)・天ざる1,900円、大ざる1,400円、おかめ (しっぽく) 1,400円、天丼ハーフ1,450円 (2026年8月〜10月の口コミ)・木の葉丼、玉子丼、ざるのつゆをかけた玉子かけご飯 (2026年の口コミ)・日本酒、焼酎 (食べログ)',
    neighborhood: '綾小路の南、東洞院通。四条駅から徒歩3分',
    gf_detail: 'グルテンフリーではない。醤油系のだしのそばとうどん、天ぷら、カレーなんば、なべ焼き (公式サイト、2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。どれも店のだしを使い、にしん、鶏、卵、かまぼこ、海老天などがのる (公式サイト、2026年の口コミ)。',
    notes: '[そば・東洞院、大正5年創業の復活] 大正5年創業、長く先斗町、のちに大丸にあったそば・うどんの店。2024年末に閉店し、旧店の料理長、道具、看板を受け継いで2025年12月、四条近くの新しい木の店で再開した (クラウドファンディングを経て)。天ざる、にしん、きつね、おかめ、季節のそばは1,400〜1,900円ほどで、やや高いという声も。英語メニュー、カード・QR 可。11:00〜19:00。月曜休み。',
  });
}

// ================================================================ うらやま京色
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26035003/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_urayama_kyoshoku', name: 'うらやま京色 (Urayama Kyoshoku)', category: 'OMNI',
    lat: 35.004673, lng: 135.758830, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a kushiage restaurant — the courses centre on battered, deep-fried skewers and finish with curry (Tabelog; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: kushiage courses with fish, meat and seafood, crab-miso dip and seared tuna (2026 reviews).',
    hours_raw: 'Monday to Saturday 17:00–23:00; closed Sunday, with closures and openings posted month by month — for November 2026, closed 1, 8, 15, 23 (Monday holiday) and 29, and open Sunday 22 (Tabelog). Reservations accepted; call for 5 or more, or when online booking is full (Tabelog); counters fill by 19:00 (October 2026). One drink per guest required (Tabelog original 当店全てのお客様にワンドリンク制をお願いしております). Courses, e.g. ¥6,800 (August 2026), or à la carte (Tabelog). 26 seats: 12 at the counter, a private room for up to 6 and a semi-private room for 4–8 upstairs; non-smoking (Tabelog). Cards (Tabelog). A renovated townhouse down a narrow alley off Shijo Karasuma; 2 min walk from Karasuma or Shijo stations (Tabelog; September 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Alley off Shijo Karasuma — 2 min walk from Karasuma / Shijo stations',
    cuisine: 'Creative seasonal kushiage with Japanese and Western dishes, reopened under this name after 14 years at Shijo Teramachi (Tabelog) · courses such as ¥6,800 (August 2026) or a course of 8 skewers with seasonal dishes — e.g. yam and hamo, crab-miso dip, seared tuna, a vegetable platter with crab miso and bagna cauda, skewers, a bite of curry to finish, dessert (September–October 2026) · à la carte too (Tabelog) · sake, wine, sours; all-you-can-drink plans (Tabelog; 2026 reviews) · bills about ¥4,000–8,000 (Tabelog; 2026 reviews)',
    website: null, gmaps: gm('うらやま京色 京都'), menu_url: null,
    notes: '[Kushiage · Shijo Karasuma alley, creative skewers] A renovated townhouse down a back alley near Shijo Karasuma serving creative, seasonal kushiage in courses — light-battered skewers between small Kyoto dishes, a vegetable platter with crab-miso bagna cauda, and a bite of curry to finish — for about ¥6,000–8,000 with drinks. Counter downstairs, private rooms up. Book: the counter fills by seven. One drink per guest. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Chefs and floor staff (unnamed)'], origin: null,
      background: 'Per Tabelog: after 14 years in Shijo Teramachi, the restaurant reopened under the new name Urayama Kyoshoku with a new menu; the Tabelog opening date is 15 December 2020. Reviewers in 2026 describe chefs working in view of the counter, staff explaining each skewer "as if we were at a sushi restaurant", and a nearly full house run efficiently.',
      philosophy: 'Seasonal ingredients highlighted in creative skewers (Tabelog).', specialty: 'Seasonal kushiage; crab-miso bagna cauda.',
      anecdotes: [
        { text: '"The staff explained the different ingredients as if we were at a sushi restaurant." — October 2026.', source: R + 'B538696739/' },
        { text: '"I expected the bill for two people to exceed JPY 10,000, but when I asked for the check, it was around JPY 8,000" — October 2026.', source: R + 'B538531322/' },
        { text: '"The final curry was a bit heavy; perhaps a chazuke would have been better." — August 2026.', source: R + 'B533569581/' },
        { text: '"However, the counter seats on the right side felt a bit hectic and not very relaxing." — September 2026.', source: R + 'B535964142/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・串揚げ・洋食、中京区占出山町310-20、烏丸駅・四条駅から徒歩2分、月〜土 17:00〜23:00、日曜休み (11月は1・8・15・23・29日休み、22日 (日) は営業)、予約可 (5名以上や満席時は電話で)、ワンドリンク制、26席 (カウンター12、個室 (6名まで)、半個室)、禁煙、カード可、四条寺町で14年営業したのち店名を変えて再開、季節の創作串揚げと和洋の料理、コースとアラカルト。口コミ (2026年8月〜10月、英語): コース6,800円、串8本と季節の料理のコース、山芋と鱧、蟹味噌のディップ、まぐろのたたき、野菜の盛り合わせとバーニャカウダ、締めのひと口カレー、町家を改装、路地の奥、19時には満席。',
      confidence: 'medium', sources: [TB, R + 'B505075207/', R + 'B533569581/', R + 'B535242419/', R + 'B535436837/', R + 'B535672107/', R + 'B535964142/', R + 'B536398253/', R + 'B538013378/', R + 'B538531322/', R + 'B538696739/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; courses or à la carte; one drink per guest; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区占出山町310-20',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with November 2026 closures posted; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004673, 135.758830); cross-checked: GSI 京都府京都市中京区占出山町310番地 (lot) 8 m; nearest Kyoto record 66 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533569581/', R + 'B535964142/'],
    price_note: 'No menu read; course price from an August 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Kushiage course', '¥6,800', 'Course', 'no', 'no', 'August 2026.', 'kushiage_course'),
      it('', '', 'Course of the day: 8 skewers and seasonal dishes', '', 'Course', 'no', 'no', 'September 2026.', 'course_8'),
      it('', '', 'Vegetable platter with crab miso and bagna cauda', '', 'Small dishes', 'ask', 'no', 'October 2026.', 'bagna_cauda'),
    ] }, {
    cuisine: '季節の創作串揚げと和洋の料理。四条寺町で14年営業したのち、この名で再開 (食べログ)・6,800円などのコース (2026年8月)、串8本と季節の料理のコース: 山芋と鱧、蟹味噌のディップ、まぐろのたたき、蟹味噌とバーニャカウダの野菜盛り、串揚げ、締めのひと口カレー、デザート (2026年9月〜10月)・アラカルトも (食べログ)・日本酒、ワイン、サワー、飲み放題のプラン (食べログ、2026年の口コミ)・会計は4,000〜8,000円ほど (食べログ、2026年の口コミ)',
    neighborhood: '四条烏丸の路地。烏丸駅・四条駅から徒歩2分',
    gf_detail: 'グルテンフリーではない。串揚げの店で、コースは衣をつけて揚げた串が中心、締めはカレー (食べログ、2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚、肉、魚介の串揚げのコースで、蟹味噌のディップやまぐろのたたきも (2026年の口コミ)。',
    notes: '[串揚げ・四条烏丸の路地、創作串] 四条烏丸近くの路地の奥、町家を改装した店。季節の創作串揚げをコースで出す: 京の小鉢をはさみながら軽い衣の串、蟹味噌のバーニャカウダの野菜盛り、締めにひと口カレー。飲み物込みで6,000〜8,000円ほど。1階はカウンター、2階に個室。19時にはカウンターが埋まるので予約を。ワンドリンク制。日曜休み。',
  });
}

// ================================================================ this is ormary store
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26040463/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '20:00']);
  put({
    id: 'kyoto_this_is_ormary_store', name: 'this is ormary store', category: 'OMNI',
    lat: 34.994399, lng: 135.764074, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a bakery standing bar — every plate comes with the house wheat breads (focaccia, epi, pizza) (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Breads are sold to take away, but the plates are pâté, rillettes, ham, duck, fish and cheese, and some breads contain bacon and cheese (2026 reviews).',
    hours_raw: 'Monday and Wednesday to Sunday 12:00–20:00, open straight through; closed Tuesday and occasionally without notice — check Instagram; breakfast from 08:00 on some days (Tabelog; July 2026). Reservations accepted (Tabelog); queues can form at opening (October 2026). Standing room plus bench and L-shaped table seating (July 2026). Smoking allowed (Tabelog). Cards for purchases of ¥3,000 or more (Tabelog). Bread to take away (2026 reviews). A renovated machiya with glass walls in a lane north of Shosei-en, near Tominokoji Rokujo; 5–8 min walk from Gojo Stn (Tabelog; 2026 reviews). Opened 5 October 2023 (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Tominokoji north of Rokujo, by Shosei-en — 5–8 min walk from Gojo Stn',
    cuisine: 'Standing bar of house-baked bread with dishes and wine (2026 reviews) · platter of 5 small dishes ¥2,000 — e.g. pâté de campagne, duck with Kyoto eggplant and colatura, buri with baba ghanoush, house ham with tonnato, fritto, with focaccia and a tuna and semi-dried tomato pizza (July 2026); platter of 3 — bonito tataki, meat pâté, mushroom stew, carrot râpée (September 2026) · fried octopus, seared bonito, chicken curry stew; a fig and cheese-sauce fritter (2026 reviews) · bacon, onion and cheese bread, epi, focaccia, to eat in or take away (2026 reviews) · a Hyuganatsu non-alcoholic drink (August 2026) · bills about ¥2,000–5,000 (Tabelog; 2026 reviews)',
    website: null, gmaps: gm('this is ormary store 京都'), menu_url: null,
    notes: '[Bread and wine bar · north of Shosei-en, a bakery to drink in] A glass-fronted machiya near Gojo that is half bakery, half standing bar: hot house breads — focaccia, epi, bacon-and-cheese — alongside platters of pâté, duck with colatura, ham tonnato and fritters, with wine from noon to 8 pm. A five-dish platter is ¥2,000; drinks are not standing-bar cheap. Breads to take away. Smoking allowed; cards only from ¥3,000. Closed Tuesday and sometimes without notice.',
    chef_bio: { chef_name: null, roles: ['Owner and staff (unnamed)'], origin: null,
      background: 'Per Tabelog: a standing bar and bakery opened 5 October 2023, with occasional breakfast service from 8:00. Reviewers in 2026 describe freshly baked bread served hot, a renovated machiya with glass walls, quick crowds at opening, and unannounced closures posted on Instagram.',
      philosophy: null, specialty: 'House bread with small plates; 5-dish platter.',
      anecdotes: [
        { text: '"I once tried to visit on a snowy day, but it was unexpectedly closed." — July 2026; the reviewer now checks Instagram first.', source: R + 'B532557638/' },
        { text: 'A July 2026 visitor rated the duck with Kyoto eggplant and colatura the standout, and noticed many guests buying bread to take home.', source: R + 'B532269726/' },
        { text: '"The drinks are not cheap for a standing bar, so even for one person, the total can add up." — July 2026.', source: R + 'B532269726/' },
      ],
      japanese_sources_summary: '食べログ: 立ち飲み・パン、下京区富小路六条上る本塩竈町533-3、月・水〜日 12:00〜20:00、火曜と不定休、朝8時からの営業も不定期、予約可、喫煙可、カードは3,000円以上、2023年10月5日オープン。口コミ (2026年7月〜10月、英語): 五条駅から徒歩5〜8分、Shosei-en の北の路地、ガラス張りの町家、パンを主役にした立ち飲み、5品盛り合わせ2,000円 (パテ・ド・カンパーニュ、鴨と京都の茄子のコラトゥーラ、ぶりとババガヌーシュ、自家製ハムのツナソース、フリット)、3品盛り、フォカッチャ、エピ、ベーコンとチーズのパン、持ち帰りも、酒は安くない、臨時休業はインスタで。',
      confidence: 'medium', sources: [TB, R + 'B532269726/', R + 'B532557638/', R + 'B532969588/', R + 'B534200731/', R + 'B534760784/', R + 'B536390478/', R + 'B537020924/', R + 'B538168427/', R + 'B538227757/', R + 'B538376347/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order the platter and bread at the counter; smoking allowed; cards only from ¥3,000.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区富小路六条上る本塩竈町533-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.994399, 135.764074); cross-checked: GSI 京都府京都市下京区本塩竈町533番地 (lot) 47 m; kyoto_walden_woods is 142 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532269726/', R + 'B536390478/'],
    price_note: 'No menu read; price from a July 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Platter of 5 small dishes with bread', '¥2,000', 'Plates', 'no', 'no', 'July 2026.', 'platter_5'),
      it('', '', 'Platter of 3 small dishes with bread', '', 'Plates', 'no', 'no', 'September 2026.', 'platter_3'),
      it('', '', 'House breads to take away', '', 'Bread', 'no', 'ask', '', 'bread'),
    ] }, {
    cuisine: '焼きたてのパンと料理、ワインの立ち飲み (2026年の口コミ)・5品盛り合わせ2,000円: パテ・ド・カンパーニュ、鴨と京都の茄子のコラトゥーラ、ぶりとババガヌーシュ、自家製ハムのツナソース、フリット、フォカッチャとツナとセミドライトマトのピザ付き (2026年7月)、3品盛り: 鰹のたたき、肉のパテ、きのこの煮込み、キャロットラペ (2026年9月)・たこのフリット、鰹のたたき、鶏のカレー煮込み、無花果とチーズソースのフリット (2026年の口コミ)・ベーコンと玉ねぎとチーズのパン、エピ、フォカッチャ、店内でも持ち帰りでも (2026年の口コミ)・日向夏のノンアルコール (2026年8月)・会計は2,000〜5,000円ほど (食べログ、2026年の口コミ)',
    neighborhood: '六条の北の富小路、Shosei-en の近く。五条駅から徒歩5〜8分',
    gf_detail: 'グルテンフリーではない。パンの立ち飲みで、どの皿にも小麦のパン (フォカッチャ、エピ、ピザ) が付く (2026年の口コミ)。',
    vegan_detail: '要確認。パンは持ち帰りもできるが、皿はパテ、リエット、ハム、鴨、魚、チーズで、ベーコンやチーズ入りのパンもある (2026年の口コミ)。',
    notes: '[パンとワインの立ち飲み・Shosei-en の北、飲めるパン屋] 五条近くのガラス張りの町家。半分パン屋、半分立ち飲みで、焼きたてのフォカッチャ、エピ、ベーコンとチーズのパンに、パテ、鴨のコラトゥーラ、ハムのツナソース、フリットの盛り合わせを、昼12時から夜8時までワインとともに。5品盛りは2,000円、酒は立ち飲みにしては安くない。パンの持ち帰りも。喫煙可、カードは3,000円から。火曜と不定休。',
  });
}

save();
