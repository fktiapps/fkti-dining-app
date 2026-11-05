// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), core queue, circle umeda; worker osw5 (lane: Tabelog id even), batch 27.
//   Ids checked for parity: 27132168, 27093282, 27050186, 27012726 (all even).
//   + AiNA ORGANIC KITCHEN 福島店 (Hawaiian organic cafe-bar on the ground floor of the First Cabin Nishi-Umeda capsule hotel)
//   - 天ぷら 大坂屋 草哲 skipped: branch of the group of osaka_tempura_shinsaibashi_ittetsu (in data), same tempura-counter format
//   + il luogo di TAKEUCHI (Fukushima Italian of owner-chef Keiji Takeuchi, since 2010)
//   + ミチノ・ル・トゥールビヨン (French of chef Masashi Michino, 71; Fukushima since 2009)
//   Chain check: AiNA: the "福島店" suffix implies at least one other shop; no other AiNA shop in data; kept as a small group, flagged.
//   草哲: three shops (main shop, nearby sister "Goku", and 天ぷら 心斎橋 一哲 = osaka_tempura_shinsaibashi_ittetsu, in data,
//   whose notes call it "the second shop of Tempura Osakaya Kusatetsu"); same format = same concept, skipped (coordinator ruling).
//   TAKEUCHI: three shops of one owner-chef (il luogo di TAKEUCHI, TORERO TAKEUCHI, ricuperare TAKEUCHI per takeuchi-italia.jp);
//   none in data; kept and flagged. ミチノ: one shop; invoice register T5810856609517 = 道野 正 (sole proprietor).
//   None is in data/osaka.json (grep by id, name and address, 2026-11-02). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw5-27');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ AiNA ORGANIC KITCHEN 福島店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270108/27132168/'; const R = TB + 'dtlrvwlst/';
  const OWN = 'https://aina-organickitchen.com/';
  const S = day(['07:00', '15:00']); const W = day(['07:00', '21:00']); const L = day(['07:00', '23:00']);
  put({
    id: 'osaka_aina_organic_kitchen_fukushima', name: 'AiNA ORGANIC KITCHEN 福島店', category: 'OMNI',
    lat: 34.697115, lng: 135.490047, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Acai bowls topped with granola, poke and taco-rice bowls, garlic shrimp, waffles, toast and a fried tuna cutlet are on the menu.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. An October 2026 hotel guest had a vegan curry at breakfast, and a January 2026 diner says there are options for vegetarians and vegans; Tabelog ticks "vegetarian options". Check which dishes and sauces are vegan.',
    hours_raw: 'Mon, Tue, Sun 7:00–15:00 (last order 14:00); Wed 7:00–21:00 (last order 20:30); Thu, Fri, Sat 7:00–23:00 (last order food 20:30, drinks 22:30) (Tabelog). One order per person; an acai bowl took about 20 minutes (June 2026). Reservations accepted (Tabelog). Cards (VISA, Master, JCB, AMEX), IC cards, iD, QUICPay, PayPay, Rakuten Pay, au PAY (Tabelog). 31 seats: 12 counter, 6 table, 5 sofa, 8 on the terrace; non-smoking inside with a smoking room, smoking allowed on the terrace; pets on the terrace only; wheelchair accessible; free Wi-Fi; children welcome; take-out (Tabelog). Opened 16 September 2022 (Tabelog).',
    hours: { 0: S, 1: S, 2: W, 3: L, 4: L, 5: L, 6: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '福島5-2-30, ground floor of the First Cabin Nishi-Umeda capsule hotel — 3 min from Hanshin Fukushima Stn, 5 min from JR Fukushima Stn',
    cuisine: 'Hawaiian cafe and bar with natural, pesticide-free cooking, no additives and house-made seasonings (Tabelog) · acai bowls from 7:00, ¥1,300 regular, half size available (June and September 2026) · dishes named in 2026: ahi poke rice bowl, taco rice, garlic shrimp, waffles, open sandwiches, scrambled-egg toast, a vegan curry · fresh juice ¥500 (August 2026) · a "Hawaiian party" course with all-you-can-drink and the signature tuna cutlet; organic drinks and Hawaiian cocktails (Tabelog)',
    website: OWN, gmaps: gm('AiNA ORGANIC KITCHEN 福島店'), menu_url: null,
    notes: "[Cafe · Fukushima, acai bowls in a capsule hotel] A leafy Hawaiian cafe on the ground floor of the First Cabin hotel near Fukushima station, open from 7:00 for acai bowls (¥1,300, or a half size), poke and taco-rice bowls, garlic shrimp and waffles; it says it cooks with pesticide-free ingredients and makes its own seasonings. Hotel guests come down for breakfast, and one found a vegan curry. Late in the week it turns into a bar until 23:00 with Hawaiian cocktails. There are terrace seats where pets are allowed. Diners in 2026 noted many foreign customers.",
    chef_bio: { chef_name: null, roles: ['Cafe staff (unnamed)'], origin: null, background: 'Per the shop-maintained Tabelog listing: a Hawaiian bar and cafe on the ground floor of First Cabin Nishi-Umeda, with natural, pesticide-free cooking, no additives and house-made seasonings; opened 16 September 2022. The "福島店" name implies another AiNA shop; none was confirmed in the sources read.', philosophy: 'Natural, additive-free food with house-made seasonings (Tabelog).', specialty: 'Acai bowls; poke; tuna cutlet.',
      anecdotes: [
        { text: '"I\'ve tried several acai bowl places in the Umeda and Fukushima areas, but this one is definitely the best in terms of taste, value for money, and the friendly service and atmosphere." — September 2025.', source: R + 'B513731517/' },
        { text: '"There were many foreign customers, making for a relaxed and international lunch experience" — January 2026, the ahi poke rice bowl.', source: R + 'B521388651/' },
        { text: 'An October 2026 guest of the hotel, who always has breakfast here, found a vegan curry on the menu for the first time and had it with scrambled-egg toast: "The portion was just right for me."', source: R + 'B538451847/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): AiNA ORGANIC KITCHEN 福島店、ハワイ料理・カフェ・バー、大阪市福島区福島5-2-30 ファーストキャビン西梅田 1F、JR福島駅から5分、Hanshin 福島駅から3分、月・火・日7:00〜15:00 (L.O.14:00)、水7:00〜21:00 (L.O.20:30)、木・金・土7:00〜23:00 (L.O.料理20:30、ドリンク22:30)、予約可、カード・電子マネー・QR 可、31席 (カウンター12、テーブル6、ソファ5、テラス8)、店内禁煙・喫煙室あり・テラスは喫煙可、ペットはテラスのみ、車いす可、無料 Wi-Fi、子ども可、テイクアウト、2022年9月16日オープン、無農薬・無添加で調味料も手作り、ハワイアンパーティーのコースは飲み放題と名物のマグロカツ、ベジタリアンメニューあり。口コミ (2025年9月〜2026年10月): アサイーボウル1,300円・ハーフあり、ワンオーダー制、アヒポキ丼、タコライス、ガーリックシュリンプ、ワッフル、オープンサンド、スクランブルエッグのトースト、ヴィーガンのカレー、フレッシュジュース500円、外国の客が多い、奥にワークスペース。',
      confidence: 'medium', sources: [TB, R + 'B513275473/', R + 'B513731517/', R + 'B521388651/', R + 'B526063346/', R + 'B526139919/', R + 'B528519127/', R + 'B533394440/', R + 'B534876680/', R + 'B538451847/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A cafe in an international capsule hotel; a January 2026 diner found many foreign customers. English service not confirmed in the sources read.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市福島区福島5-2-30 ファーストキャビン西梅田 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026. The official site did not answer on 2026-11-02.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市福島区福島五丁目2番30号 (go) 2m; nearest record osaka_il_luogo_di_takeuchi_fukushima (this batch, 福島5-1-26, a different building) about 10 m; no other record within 30 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B513731517/'],
    price_note: 'Prices from 2026 reviews (tax included).', last_checked: TODAY, items: [
      it('', '', 'Acai bowl, regular (half size available)', '¥1,300', 'Cafe', 'ask', 'ask', 'June 2026.', 'acai_bowl'),
      it('', '', 'Ahi poke rice bowl', '', 'Food', 'ask', 'no', 'January 2026.', 'ahi_poke'),
      it('', '', 'Vegan curry (breakfast)', '', 'Breakfast', 'ask', 'ask', 'October 2026.', 'vegan_curry'),
      it('', '', 'Fresh juice', '¥500', 'Drinks', 'ask', 'ask', 'August 2026.', 'fresh_juice'),
    ] }, {
    cuisine: '無農薬の素材で無添加、調味料も手作りのハワイアンのカフェとバー (食べログ)・7:00からアサイーボウル、レギュラー1,300円、ハーフもあり (2026年6月・9月)・2026年の口コミに出てくる料理: アヒポキ丼、タコライス、ガーリックシュリンプ、ワッフル、オープンサンド、スクランブルエッグのトースト、ヴィーガンのカレー・フレッシュジュース500円 (2026年8月)・飲み放題と名物のマグロカツの「ハワイアンパーティー」コース、オーガニックのドリンクとハワイアンカクテル (食べログ)',
    neighborhood: '福島5-2-30、ファーストキャビン西梅田の1階。Hanshin 福島駅から3分、JR福島駅から5分',
    gf_detail: '要確認。グルテンの情報なし。グラノーラをのせたアサイーボウル、ポキ丼やタコライス、ガーリックシュリンプ、ワッフル、トースト、マグロカツなど。',
    vegan_detail: '要確認。2026年10月のホテルの客は朝にヴィーガンのカレーを食べ、2026年1月の口コミにもベジタリアンとヴィーガンの選択肢があるとある。食べログに「ベジタリアンメニューあり」。どの料理とソースがヴィーガンかは確認を。',
    notes: '[カフェ・福島、カプセルホテルのアサイーボウル] 福島駅の近く、ファーストキャビンの1階にある緑の多いハワイアンカフェ。朝7:00からアサイーボウル (1,300円、ハーフもあり)、ポキ丼、タコライス、ガーリックシュリンプ、ワッフル。無農薬の素材を使い、調味料も手作りと店は言う。ホテルの客が朝食に下りてきて、ヴィーガンのカレーを見つけた人も。週の後半は23:00までバーになり、ハワイアンカクテルも。ペットと座れるテラス席あり。2026年の口コミでは外国の客が多い。',
  });
}

// ================================================================ 天ぷら 大坂屋 草哲 (skipped: branch of a group in data)
skip('27093282', 'chain: 天ぷら 大坂屋 草哲 is the main shop of a tempura-counter group already in data — osaka_tempura_shinsaibashi_ittetsu (天ぷら 心斎橋 一哲), whose notes say "the second shop of Tempura Osakaya Kusatetsu in Fukushima"; same tempura-counter format under a different name (coordinator ruling, b27 review)');

// ================================================================ il luogo di TAKEUCHI
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270108/27050186/'; const R = TB + 'dtlrvwlst/';
  const OWN = 'https://www.takeuchi-italia.jp/';
  const W = day(['11:30', '15:00'], ['18:00', '22:30']);
  put({
    id: 'osaka_il_luogo_di_takeuchi_fukushima', name: 'il luogo di TAKEUCHI', category: 'MOM_AND_POP',
    lat: 34.697023, lng: 135.490063, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Lunch is pasta only, with bread; dinner courses end with pasta. The restaurant asks for allergies in advance and may not change a menu on the day (Tabelog).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No vegan information; courses centre on market fish and charcoal-roasted meat, and the restaurant asks for dietary needs in advance (Tabelog).',
    hours_raw: 'Mon–Sat 11:30–15:00 (last order 14:00) and 18:00–22:30 (last order food 21:00, drinks 22:00); closed Sundays; also closed 9, 16 and 30 November (Tabelog). Lunch: reservations only for four or more, by phone; diners queue before 11:30 (Tabelog; September–October 2026). Dinner: online reservations; for four or more a course is recommended; tell the restaurant about allergies in advance (Tabelog). Lunch is cash only (Tabelog). Cover ¥500 a head at dinner (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), PayPay (Tabelog). 16 seats: 6 counter, 10 table; a private room for about 8; non-smoking; wheelchair accessible; sommelier; children welcome (Tabelog). Opened 7 May 2010 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: W }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '福島5-1-26, MF Nishi-Umeda Building 1F — near Fukushima and Shin-Fukushima Stns',
    cuisine: 'Italian of seasonal market fish, vegetables from contracted farms and charcoal-roasted red meat; Tabelog Italian WEST 100 in 2021; in the Michelin Guide Kansai since 2014 (Tabelog) · lunch: a choice of two daily pastas (one tomato, one oil-based) with bread, salad and soup, ¥1,100; with dessert and a drink about ¥1,700 (September–October 2026) · dinner course ¥7,700 (September 2026); omakase and à la carte; pasta comes after the meat, in sizes from small to large (October 2026) · dishes named in 2026: mackerel with figs, prosciutto with mascarpone, carpaccio, sea bream, jidori chicken with burdock purée, charcoal-roasted red meat, lamb, panna cotta espuma, banana pound cake · Italian wines with sommeliers; sparkling wine ¥1,200 a glass (October 2026)',
    website: OWN, gmaps: gm('il luogo di TAKEUCHI 福島'), menu_url: null,
    notes: "[Italian · Fukushima, the owner-chef's first restaurant] A sixteen-seat Italian near Fukushima station, opened in 2010 by owner-chef Keiji Takeuchi and the first of three TAKEUCHI restaurants. Dinner is the draw: market fish, farm vegetables and charcoal-roasted red meat, with pasta served after the main in the size you want, and sommeliers to pick Italian wines (course ¥7,700 in September 2026). Lunch is a bargain pasta set (¥1,100 with bread, salad and soup) with a queue before 11:30; lunch is cash only. Diners in 2026 note the chef seeing guests off at the door.",
    chef_bio: { chef_name: 'Keiji Takeuchi', roles: ['Owner-chef'], origin: 'Okayama Prefecture (takeuchi-italia.jp)', background: 'Per the group site takeuchi-italia.jp: born in 1977 in Okayama Prefecture; after high school and work as an office employee, went to culinary school; trained for eight years in total at well-known Osaka restaurants including Trattoria Pino and PONTE VECCHIO (main shop), and in Italy; opened il luogo di TAKEUCHI in Fukushima in 2010 as owner-chef, and now runs several restaurants in Osaka (il luogo di TAKEUCHI, TORERO TAKEUCHI, ricuperare TAKEUCHI). The Tabelog listing adds that the chef picks seafood at the market every morning and that the restaurant has been in the Michelin Guide Kansai since 2014.', philosophy: '"I want you to eat delicious food and feel revitalized, both body and soul." (Tabelog listing)', specialty: 'Charcoal-roasted red meat; seasonal fish; pasta.',
      anecdotes: [
        { text: '"The signature dish, charcoal-roasted red meat, was impressive in size, beauty, and tenderness—truly majestic." — October 2026, a sixth visit since the previous June, with a wine pairing.', source: R + 'B510458874/' },
        { text: '"The portion of pasta could be chosen from small to large, so there was no guilt about leftovers." — October 2026, a birthday dinner.', source: R + 'B536861281/' },
        { text: '"It was a nice touch that the chef personally saw us off on our way out." — September 2026, an omakase course for two.', source: R + 'B536581285/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): il luogo di TAKEUCHI、イタリアン・肉料理・パスタ、大阪市福島区福島5-1-26 MF西梅田ビル 1F、JR福島駅・Shin-Fukushima 駅・Hanshin 福島駅・西梅田駅・Watanabebashi 駅、月〜土11:30〜15:00 (L.O.14:00)、18:00〜22:30 (L.O.料理21:00、ドリンク22:00)、日曜休み、11月9・16・30日休み、ランチの予約は4名以上・電話のみ、ディナーは4名以上ならコースがおすすめ、アレルギーは事前に、ランチは現金のみ、ディナーはコペルト500円、カード・PayPay 可、16席 (カウンター6、テーブル10)、8名ほどの個室、禁煙、車いす可、ソムリエ、2010年5月7日オープン、イタリアン WEST 百名店 2021、2014年からミシュランガイド Kansai に掲載、姉妹店 ricuperare TAKEUCHI (Higobashi)。takeuchi-italia.jp: オーナーシェフ Keiji Takeuchi、1977年生まれ、岡山県出身、サラリーマンを経て調理師専門学校、大阪の「トラットリア・ピノ」「PONTE VECCHIO 本店」などで8年修業、イタリアでも、2010年に福島で開業、店は il luogo di TAKEUCHI、TORERO TAKEUCHI、ricuperare TAKEUCHI。口コミ (2026年6月〜10月): パスタのランチ1,100円 (パン、サラダ、スープつき)、デザートとドリンクで1,700円、開店前から行列、コース7,700円、サバとイチジク、炭火焼きの赤身肉、仔羊、メインのあとにパスタ、量は小〜大、パンナコッタのエスプーマ、シェフの見送り。',
      confidence: 'medium', sources: [TB, OWN, R + 'B510458874/', R + 'B530427671/', R + 'B535673828/', R + 'B536579262/', R + 'B536581285/', R + 'B536677508/', R + 'B536681878/', R + 'B536861281/', R + 'B536977143/', R + 'B537887827/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter-and-table room; no English menu or English-speaking staff mentioned in the sources read.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [],
      staff_allergy_handling: [{ text: 'Tabelog: tell the restaurant about food allergies or dislikes in advance; menu changes on the day may not be possible.', source: TB }],
      positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市福島区福島5-1-26 MF西梅田ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with November 2026 closures, and the group site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市福島区福島五丁目1番26号 (go) 16m; nearest record osaka_aina_organic_kitchen_fukushima (this batch, 福島5-2-30, a different building) about 10 m; no other record within 30 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B536681878/', R + 'B536579262/'],
    price_note: 'Prices from 2026 reviews (tax included); cover ¥500 at dinner (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Pasta lunch: choice of two daily pastas, with bread, salad and soup', '¥1,100', 'Lunch', 'no', 'ask', 'October 2026.', 'pasta_lunch'),
      it('', '', 'Pasta lunch with dessert and a drink', '¥1,700', 'Lunch', 'no', 'ask', 'September 2026.', 'pasta_lunch_full'),
      it('', '', 'Dinner course', '¥7,700', 'Dinner', 'ask', 'no', 'September 2026.', 'dinner_course'),
    ] }, {
    cuisine: '市場の旬の魚、契約農家の野菜、炭火焼きの赤身肉のイタリアン。食べログ イタリアン WEST 百名店 2021、2014年からミシュランガイド Kansai に掲載 (食べログ)・ランチ: その日の2種のパスタ (トマトとオイル) から選び、パン、サラダ、スープつきで1,100円、デザートとドリンクで約1,700円 (2026年9月〜10月)・ディナーのコース7,700円 (2026年9月)、おまかせやアラカルトも。パスタはメインのあとで、量は小から大まで選べる (2026年10月)・2026年の口コミに出てくる料理: サバとイチジク、生ハムとマスカルポーネ、カルパッチョ、鯛、地鶏とゴボウのピュレ、炭火焼きの赤身肉、仔羊、パンナコッタのエスプーマ、バナナのパウンドケーキ・ソムリエと選ぶイタリアのワイン、スパークリングワインはグラス1,200円 (2026年10月)',
    neighborhood: '福島5-1-26 MF西梅田ビル 1F。福島駅・Shin-Fukushima 駅の近く',
    gf_detail: '要確認。グルテンの情報なし。ランチはパスタのみでパンつき、ディナーのコースもパスタでしめる。アレルギーは事前に伝えるよう店が案内していて、当日の変更はできないこともある (食べログ)。',
    vegan_detail: '要確認。ヴィーガンの情報なし。コースは市場の魚と炭火焼きの肉が中心で、食事の制限は事前に伝えるよう店が案内している (食べログ)。',
    notes: '[イタリアン・福島、オーナーシェフの最初の店] 福島駅の近くの16席のイタリアンで、2010年にオーナーシェフの Keiji Takeuchi が開いた、TAKEUCHI の3軒の最初の店。お目当てはディナーで、市場の魚、農家の野菜、炭火焼きの赤身肉。パスタはメインのあとに好きな量で出て、イタリアのワインはソムリエが選んでくれる (2026年9月のコースは7,700円)。ランチはお得なパスタのセット (パン、サラダ、スープつきで1,100円) で、11:30の前から行列。ランチは現金のみ。2026年の口コミでは、シェフが入口まで見送ってくれる。',
  });
}

// ================================================================ ミチノ・ル・トゥールビヨン
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270108/27012726/'; const R = TB + 'dtlrvwlst/';
  const OWN = 'http://www.michino.com/';
  const W = day(['11:30', '22:00']);
  put({
    id: 'osaka_michino_le_tourbillon_fukushima', name: 'ミチノ・ル・トゥールビヨン (Michino Le Tourbillon)', category: 'MOM_AND_POP',
    lat: 34.699951, lng: 135.487501, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Courses come with house-made breads, and dishes in 2025–2026 included a cheese-and-breadcrumb crust, a beef cutlet and sauces.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No vegan information. The chef once ran the restaurant as a vegetable-based French kitchen, and courses use vegetables direct from farmers, but game, fish and meat are used too.',
    hours_raw: 'Tue–Sun, holidays and the days before and after holidays 11:30–22:00 (last order food 19:30); closed Mondays (the next day when Monday is a holiday) and two Tuesdays a month (Tabelog). Reservations online (Tabelog). No service charge since 1 June 2023 (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), IC cards and other e-money, Rakuten Pay, au PAY (Tabelog). 20 seats; semi-private room for up to 6; non-smoking; children from middle-school age, except for private bookings (Tabelog).',
    hours: { 1: W, 2: W, 3: W, 4: W, 5: W, 6: W }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '福島6-9-11, Kanbayashido Building 1F — 5 min from JR Fukushima Stn',
    cuisine: 'French that mixes tradition and new technique, with game and vegetables direct from farmers; Tabelog French WEST 100 in 2021 and 2025 (Tabelog) · lunch course, 5 items, ¥11,000; 37th-anniversary dinner on the theme "Force", 8 items, ¥22,000 (3–29 November 2026); Christmas dinner, 6 items, ¥25,300 (21–25 December) (Tabelog, tax included) · dishes named in 2025–2026: fermented-cabbage and white-miso potage, sea bass under a cheese and breadcrumb crust, Takikawa duck, scallop mousse, a bear-meat hamburg, foie-gras consommé, Ezo venison or Saga beef with Périgord truffle sauce, beef cutlet, black pork with coffee sauce · breads made in house, including a Hatcho miso bread (2025–2026) · wine pairings by a sommelier',
    website: OWN, gmaps: gm('ミチノ・ル・トゥールビヨン 福島'), menu_url: null,
    notes: "[French · Fukushima, a veteran chef still experimenting] Chef Masashi Michino, 71, has run an own-name French restaurant since 1990 and in Fukushima since 2009; the name means 'whirlwind'. Courses (lunch ¥11,000, dinner about ¥22,000) are generous and change with the season: game such as Ezo venison and bear, vegetables straight from farmers, and house-made breads such as a Hatcho miso loaf. The chef still experiments, from autophagy-inspired dishes to a 37th-anniversary menu titled 'Force' (November 2026). The bread is made by the chef's wife, lunch ends with 'Madame's dessert of the day', and a sommelier pairs wines. No service charge. Children from middle-school age.",
    chef_bio: { chef_name: 'Masashi Michino (道野 正)', roles: ['Owner-chef (also the invoice holder)'], origin: null, background: 'Per a November 2025 review quoting the restaurant\'s history: after university, trained for seven years at Restaurant Bordeaux in Kyoto, then in France at La Côte d\'Or (Bernard Loiseau), Le Lampard and Jean Bardet; back in Japan in 1987, worked at Chez Wada and for a year as chef at Harvest Road House in Asahikawa, Hokkaido; opened Restaurant Michino Le Tourbillon in Toyonaka in 1990; renamed it Les Arts Santé! in 2006 for vegetable-based French; moved to Fukushima in 2009 under the old name. The Tabelog listing headline gives the chef\'s age as 71 and offers a 37th-anniversary menu in November 2026. The invoice register lists the business under 道野 正, a sole proprietor. An August 2026 diner notes the bread is made by the chef\'s wife; the lunch menu lists "Madame\'s special dessert".', philosophy: '"Le Tourbillon" (whirlwind) was chosen to bring a new breeze to the culinary world again; the chef keeps seeking new methods while keeping French tradition (Tabelog).', specialty: 'Seasonal French courses with game; house-made breads.',
      anecdotes: [
        { text: 'A November 2025 regular (14 visits) describes the 36th-anniversary dinner, for which the chef used ChatGPT to suggest dishes inspired by autophagy.', source: R + 'B31527832/' },
        { text: '"Additionally, the homemade bread by the chef\'s wife paired beautifully with the dishes—especially the Hatcho miso bread, which was fantastic." — August 2026, lunch before a concert at Symphony Hall.', source: R + 'B535128166/' },
        { text: '"The atmosphere, service, and cutlery give off a nostalgic Showa-era French vibe, and the clientele is on the older side." — October 2026.', source: R + 'B536951972/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): ミチノ・ル・トゥールビヨン、フレンチ、大阪市福島区福島6-9-11 神林堂ビル 1F、JR福島駅から5分、火〜日・祝・祝前日・祝後日11:30〜22:00 (L.O.料理19:30)、月曜休み (祝日なら翌日)、月に2回火曜休み、予約可、2023年6月1日からサービス料なし、カード・電子マネー・QR 可、20席、6名までの半個室、禁煙、子どもは中学生から (貸切は可)、フレンチ WEST 百名店 2021・2025、見出しに「71歳」、ランチ5品11,000円、37周年ディナー「Force」8品22,000円 (2026年11月3日〜29日)、クリスマス6品25,300円、マダムのデザート、ジビエと農家直送の野菜、ソムリエ。インボイス登録: 道野 正 (個人)。口コミ (2025年9月〜2026年10月): 経歴 (Kyoto の Restaurant Bordeaux で7年、フランスの La Côte d\'Or、Le Lampard、Jean Bardet、1987年帰国、Chez Wada、Asahikawa の Harvest Road House、1990年 Toyonaka で開業、2006年 Les Arts Santé!、2009年福島へ)、オートファジーと ChatGPT の36周年ディナー、熊肉のハンバーグ、Ezo 鹿か Saga 牛、ホタテのムース、Hatcho 味噌のパン、パンは奥さんの手作り、Rafines の Sugimoto シェフとのコラボ、昭和のフレンチの雰囲気、客層は年配。',
      confidence: 'medium', sources: [TB, OWN, R + 'B31527832/', R + 'B421971622/', R + 'B517203350/', R + 'B521150711/', R + 'B521970528/', R + 'B523146741/', R + 'B531975681/', R + 'B535128166/', R + 'B536951972/', R + 'B537523221/', 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=5810856609517'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A long-established neighbourhood French room; no English menu or English-speaking staff mentioned in the sources read.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市福島区福島6-9-11 神林堂ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with November–December 2026 menus; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市福島区福島六丁目9番11号 (go) 14m; nearest record osaka_izakaya_tokitame 39 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course prices from the Tabelog listing (tax included; no service charge).', last_checked: TODAY, items: [
      it('', '', 'Lunch course (déjeuner), 5 items', '¥11,000', 'Lunch', 'ask', 'no', 'Tabelog.', 'lunch_course'),
      it('', '', '37th-anniversary dinner "Force", 8 items (3–29 Nov 2026)', '¥22,000', 'Dinner', 'ask', 'no', 'Tabelog.', 'anniversary_dinner'),
      it('', '', 'Christmas dinner, 6 items (21–25 Dec)', '¥25,300', 'Dinner', 'ask', 'no', 'Tabelog.', 'christmas_dinner'),
    ] }, {
    cuisine: '伝統と新しい技法をあわせたフレンチで、ジビエと農家直送の野菜。食べログ フレンチ WEST 百名店 2021・2025 (食べログ)・ランチ5品11,000円、37周年ディナー「Force」8品22,000円 (2026年11月3日〜29日)、クリスマス6品25,300円 (12月21日〜25日) (食べログ、税込)・2025年〜2026年の口コミに出てくる料理: 発酵キャベツと白味噌のポタージュ、チーズとパン粉の焼いたスズキ、Takikawa の鴨、ホタテのムース、熊肉のハンバーグ、フォアグラのコンソメ、Ezo 鹿か Saga 牛にペリゴールのトリュフソース、ビーフカツ、黒豚のコーヒーソース・Hatcho 味噌のパンなど店で焼くパン (2025年〜2026年)・ソムリエのワインのペアリング',
    neighborhood: '福島6-9-11 神林堂ビル 1F。JR福島駅から5分',
    gf_detail: '要確認。グルテンの情報なし。コースには店で焼くパンがつき、2025年〜2026年にはチーズとパン粉の焼き、ビーフカツ、ソースの料理も。',
    vegan_detail: '要確認。ヴィーガンの情報なし。以前は野菜が中心のフレンチの店だったこともあり、農家直送の野菜を使うが、ジビエ、魚、肉も使う。',
    notes: '[フレンチ・福島、挑戦を続けるベテランのシェフ] 71歳の道野 正シェフ (Masashi Michino) は1990年から自分のフレンチの店を開き、2009年から福島で。店の名前は「つむじ風」の意味。コース (ランチ11,000円、ディナー約22,000円) は量が多く、季節で変わる: Ezo 鹿や熊などのジビエ、農家直送の野菜、Hatcho 味噌のパンなど店で焼くパン。オートファジーから着想した料理や、37周年の「Force」というメニュー (2026年11月) など、今も挑戦を続けている。パンはシェフの奥さんの手作りで、ランチのしめは「マダムのデザート」、ワインはソムリエが合わせる。サービス料なし。子どもは中学生から。',
  });
}

save();
