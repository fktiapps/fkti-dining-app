// Osaka sweep (2-mile circle around Dotonbori), batch 32 — vegan/GF phase (all OMNI).
// Evidence-led picks (shop's own text + reviews), not the bare Tabelog veg flag:
//   + 堀江発酵堂 (fermented-food set meals; meat-free fermented vegetable set; own site: pesticide/additive-free)
//   + Cafe Morning Box (hotel-lobby café; shop: organic and vegan deli lunch; vegan baked goods; rice-flour sweets)
//   + PROTEIN LAB 北堀江店 (build-your-own bowls; shop: a "Healthy & high-protein for vegans" base)
//   + タイ料理専門店 TAI THAI なんば本店 (Thai since 2001; shop: vegetarian and halal dishes on request)
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-26';
const { put, save } = openCitySweep('osaka', TODAY, 32);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 堀江発酵堂
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27126072/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://horie-hakkoudou.com/';
  put({
    id: 'osaka_horie_hakkodo', name: '堀江発酵堂 (Horie Hakkodo)', category: 'OMNI',
    lat: 34.67114, lng: 135.494352, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask',
    gf_detail: 'Ask. The fermented-food set meals centre on brown rice and miso soup, but the kara-age, fried mackerel and handmade seasonings are not described for wheat; soy sauce and koji seasonings often contain wheat.',
    vegan_status: 'limited', vegan_label: 'Limited vegan',
    vegan_detail: 'A meat-free "Healthy Fermented Vegetable Set Meal" with miso soup and fermented-enzyme brown rice (July 2026 review). Whether the miso soup uses fish dashi is not stated — ask. Tabelog lists vegetarian options.',
    hours_raw: 'Daily 11:00–19:00, no regular closing day (Tabelog; official site). Reservations taken. Touch-panel ordering. AMEX only for cards; QR (PayPay, d Barai) accepted. Take-away goods.',
    hours: ALL(day(['11:00', '19:00'])), hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Minami-Horie 1-15-17, on Orange Street — 5 min from Yotsubashi Stn',
    cuisine: 'Fermented-food set meals · healthy fermented vegetable set (meat-free) · fermented kara-age set · fried mackerel set · five small side dishes, miso soup and fermented-enzyme brown rice · fermented monkey-banana shake, seasonal fermented-enzyme juice · take-away',
    website: OWN, gmaps: gm('堀江発酵堂'), menu_url: null,
    notes: "[Set meals · fermented-food lunch on Orange Street] A roomy set-meal café among the clothing shops of Horie's Orange Street, built around fermented food. The shop says it uses pesticide-free, additive-free ingredients and handmade or traditionally made seasonings. Most people order the fermented kara-age set, crisp outside and remarkably moist inside, with five small sides. For a meat-free lunch there's the healthy fermented vegetable set, with fragrant miso soup and fermented-enzyme brown rice that turns sweet as you chew (July 2026); ask whether the miso soup uses fish stock. There's also a fried mackerel set, plus fermented shakes and seasonal enzyme juices. Order on the touch panel. It gets busy at lunch, so come early or book.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 12 November 2021 (Tabelog)', background: 'Official site: fermented dishes that are good for the body; pesticide-free, additive-free ingredients with handmade or traditionally made seasonings (2023 price-change notice).', philosophy: 'Food made with "the power of nature" through fermentation (official site).', specialty: 'Fermented-food set meals; fermented kara-age.',
      anecdotes: [
        { text: '"I placed my order through a touch panel, choosing the Healthy Fermented Vegetable Set Meal… I appreciated the healthy option, even though it didn\'t include any meat." — July 2026.', source: R + 'B532704212/' },
        { text: '"Thanks to fermentation, the meat is moist and juicy, with flavors locked in tightly." — July 2026, fermented kara-age set.', source: R + 'B532836313/' },
      ],
      japanese_sources_summary: '公式サイト: 堀江発酵堂、からだが喜ぶ発酵料理、自然のちからが活きた発酵食、無農薬無添加食材と手作り調味料・伝統製法の調味料(2023年2月の価格変更のお知らせ)、営業11:00〜19:00、定休日なし。食べログ: 大阪市西区南堀江1-15-17、06-6541-8111、予約可、毎日11:00〜19:00、カードはAMEXのみ、QR(PayPay、d払い)可、禁煙、2021年11月12日開店。2026年の口コミ(6〜10月): オレンジストリート、ゆったりした席、発酵唐揚げ定食(外はカリッと中はしっとり)、小鉢5品、タッチパネルで注文、健康発酵野菜定食(肉なし、味噌汁の香り、発酵酵素玄米)、発酵モンキーバナナシェイクと季節の発酵酵素ジュース、さばの唐揚げ定食、持ち帰り品も、昼は混む。',
      confidence: 'medium', sources: [TB, OWN, R + 'B532704212/', R + 'B532836313/', R + 'B530117094/', R + 'B530384475/', R + 'B533254174/', R + 'B537753750/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Touch-panel ordering.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区南堀江1-15-17',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated June–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区南堀江一丁目15番17号 (go) 18m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532704212/', R + 'B532836313/', R + 'B533254174/'],
    price_note: 'No prices captured.', last_checked: TODAY, items: [
      it('', '', 'Healthy fermented vegetable set (meat-free)', '', 'Set meals', 'ask', 'ask', 'July 2026.', 'yasai_teishoku'),
      it('', '', 'Fermented kara-age set', '', 'Set meals', 'no', 'no', 'June–July 2026.', 'karaage'),
      it('', '', 'Fried mackerel set', '', 'Set meals', 'no', 'no', 'October 2026.', 'saba'),
      it('', '', 'Fermented monkey-banana shake', '', 'Drinks', 'ask', 'ask', 'August 2026.', 'shake'),
      it('', '', 'Seasonal fermented-enzyme juice', '', 'Drinks', 'ask', 'ask', 'August 2026.', 'juice'),
    ] }, {
    cuisine: '発酵食の定食・健康発酵野菜定食(肉なし)・発酵唐揚げ定食・さばの唐揚げ定食・小鉢5品、味噌汁、発酵酵素玄米・発酵モンキーバナナシェイク、季節の発酵酵素ジュース・持ち帰り',
    neighborhood: '南堀江1-15-17、オレンジストリート。四ツ橋駅から徒歩5分',
    gf_detail: '要確認。発酵食の定食は玄米と味噌汁が中心ですが、唐揚げ、さばの唐揚げ、手作り調味料に小麦が入るかは書かれていません。醤油や麹の調味料は小麦を含むことが多いです。',
    vegan_detail: '肉なしの「健康発酵野菜定食」があり、味噌汁と発酵酵素玄米付き(2026年7月の口コミ)。味噌汁が魚のだしかどうかは不明なので確認を。食べログにはベジタリアンメニューありの表示。',
    notes: '[定食・オレンジストリートの発酵食ランチ] 堀江のオレンジストリートの洋服店の間にある、発酵食が中心のゆったりした定食カフェ。店によると無農薬無添加の食材と、手作りや伝統製法の調味料を使っています。いちばん人気は発酵唐揚げ定食で、外はカリッと中は驚くほどしっとり、小鉢5品付き。肉なしなら健康発酵野菜定食で、香りのいい味噌汁と、かむほど甘い発酵酵素玄米(2026年7月)。味噌汁が魚のだしか確認を。さばの唐揚げ定食や、発酵シェイク、季節の酵素ジュースも。注文はタッチパネル。昼は混むので早めか予約を。',
  });
}

// ================================================================ Cafe Morning Box
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27118304/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_cafe_morning_box', name: 'Cafe Morning Box', category: 'OMNI',
    lat: 34.674859, lng: 135.505151, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask',
    gf_detail: 'Ask. Several sweets are made with rice flour (canelé, the weekend French toast), but no source says they are wheat-free or made apart from wheat; the toast and Benedict use bread.',
    vegan_status: 'options', vegan_label: 'Some vegan options',
    vegan_detail: 'Shop text (Tabelog): lunch plates "with organic and vegan deli options". A July 2026 reviewer noted "a variety of vegan baked goods and meal options". Not everything is vegan — the French toast has mascarpone, and lattes come with milk — so ask which bakes are vegan that day.',
    hours_raw: 'Daily 8:00–22:30 (L.O. 22:00) (Tabelog). Weekend-only menu can be reserved for the afternoon (July 2026). Cards and QR (PayPay, d Barai) accepted; no e-money. Spend over ¥600 to use the hotel lounge with outlets (shop text).',
    hours: ALL(day(['08:00', '22:30'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 1-10-3, HOTEL MORNING BOX 1F — 1 min from Nagahoribashi Stn',
    cuisine: 'Specialty-coffee café in a hotel lobby · lunch plates with organic and vegan deli · additive-free baked goods daily, seasonal carrot cake · rice-flour canelé · weekend rice-flour French toast (peach and Earl Grey, summer 2026) · banana caramel salt muffin · eggs Benedict ¥1,800 · 33 seats on two floors, outlets',
    website: 'https://hotelmorningbox.com/', gmaps: gm('Cafe Morning Box 長堀橋'), menu_url: null,
    notes: "[Café · hotel-lobby coffee with vegan bakes by Nagahoribashi] The ground-floor café of HOTEL MORNING BOX, a minute from Nagahoribashi and calm even at weekends. It has two floors of tables and sofas, plus counters with outlets where people work and take calls. The shop lists organic and vegan deli options at lunch, and reviewers mention a range of vegan baked goods. The bakes are additive-free and change daily. The cinnamon carrot cake is the Instagram favourite, and the canelé is made with rice flour. Weekends bring a rice-flour French toast; the summer 2026 version had a whole peach and Earl Grey, with mascarpone, so it isn't vegan. Breakfast includes an eggs Benedict (¥1,800) that one guest found more ham-and-eggs. Coffee is the specialty, served from 8 am to 10:30 pm.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 7 July 2020 (Tabelog; formerly Coffee Port Osaka Stand)', background: 'Café of HOTEL MORNING BOX (hotelmorningbox.com); "skilled bakers" make the baked goods (shop text).', philosophy: 'Simple, additive-free baked treats (shop text).', specialty: 'Specialty coffee; baked goods.',
      anecdotes: [
        { text: '"They also offer a variety of vegan baked goods and meal options, with the carrot cake changing seasonally." — July 2026.', source: R + 'B532107683/' },
        { text: '"The desserts here are mostly health-conscious, and the canelé I ordered that day was made with rice flour, giving it a chewy texture." — October 2026.', source: R + 'B537602633/' },
      ],
      japanese_sources_summary: '食べログ: Cafe Morning Box(旧店名 コーヒーポート大阪スタンド)、大阪市中央区東心斎橋1-10-3 HOTEL MORNING BOX 1F、06-6243-0777、予約不可、毎日8:00〜22:30(L.O.22:00)、カード・QR(PayPay、d払い)可、電子マネー不可、33席(1F テーブル7、2F カウンター5・テーブル14・ソファ4)、禁煙、2020年7月7日開店。店の説明: ホテルロビーのスペシャルティコーヒー、600円以上でホテルラウンジ利用可(コンセントあり)、オーガニックとヴィーガンのデリのランチプレート、職人が焼く無添加の焼き菓子(日替わり)、キャロットケーキが人気。2026年の口コミ(7〜10月): 週末限定の桃と紅茶の米粉フレンチトースト(マスカルポーネ、キャラメルソース、午後は予約可)、ヴィーガンの焼き菓子と食事、季節替わりのキャロットケーキ(シナモン)、バナナキャラメル塩マフィン、米粉のカヌレ、ほうじ茶ラテ、エッグベネディクト1,800円(ハムエッグのようという声)、2フロア、PC作業の人も、長堀橋駅前で落ち着いた雰囲気。',
      confidence: 'medium', sources: [TB, R + 'B532107683/', R + 'B537602633/', R + 'B537002533/', R + 'B535400570/', R + 'B534147498/', R + 'B535227861/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Hotel-lobby café; order at the counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-10-3 HOTEL MORNING BOX 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated July–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目10番3号 (go) 8m; OSM Cafe Morning Box node/12072939270 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B532107683/', R + 'B537602633/'],
    price_note: 'Only the eggs Benedict price was captured (September 2026).', last_checked: TODAY, items: [
      it('', '', 'Lunch plate with organic and vegan deli', '', 'Lunch', 'ask', 'ask', 'Shop text (Tabelog).', 'deli_plate'),
      it('', '', 'Carrot cake (seasonal)', '', 'Baked goods', 'ask', 'ask', 'October 2026.', 'carrot_cake'),
      it('', '', 'Rice-flour canelé', '', 'Baked goods', 'ask', 'ask', 'October 2026.', 'canele'),
      it('', '', 'Weekend rice-flour French toast (peach and Earl Grey, mascarpone)', '', 'Weekend', 'ask', 'no', 'July 2026.', 'french_toast'),
      it('', '', 'Eggs Benedict', '¥1,800', 'Breakfast', 'no', 'no', 'September 2026.', 'benedict'),
    ] }, {
    cuisine: 'ホテルロビーのスペシャルティコーヒーのカフェ・オーガニックとヴィーガンのデリのランチプレート・日替わりの無添加焼き菓子、季節のキャロットケーキ・米粉のカヌレ・週末限定の米粉フレンチトースト(2026年夏は桃とアールグレイ)・バナナキャラメル塩マフィン・エッグベネディクト1,800円・2フロア33席、コンセントあり',
    neighborhood: '東心斎橋1-10-3 HOTEL MORNING BOX 1F。長堀橋駅から徒歩1分',
    gf_detail: '要確認。カヌレや週末のフレンチトーストなど米粉を使った菓子はありますが、小麦不使用か、小麦と分けて作っているかは書かれていません。トーストやベネディクトはパンを使います。',
    vegan_detail: '店の説明(食べログ)にランチプレートは「オーガニックとヴィーガンのデリ」。2026年7月の口コミにも「ヴィーガンの焼き菓子や食事がいろいろ」。全部がヴィーガンではなく、フレンチトーストにはマスカルポーネ、ラテは牛乳なので、その日のヴィーガンの焼き菓子を確認して。',
    notes: '[カフェ・長堀橋のホテルロビーのコーヒーとヴィーガンの焼き菓子] HOTEL MORNING BOXの1階のカフェで、長堀橋駅から1分、週末でも落ち着いています。2フロアにテーブルとソファ、コンセント付きのカウンターもあり、仕事やオンライン会議をする人も。店はランチにオーガニックとヴィーガンのデリを用意し、口コミでもヴィーガンの焼き菓子がいろいろあるそう。焼き菓子は無添加の日替わりで、シナモンのキャロットケーキがインスタで人気、カヌレは米粉。週末は米粉のフレンチトーストで、2026年夏は桃まるごととアールグレイ、マスカルポーネ入りなのでヴィーガンではありません。朝食のエッグベネディクト(1,800円)はハムエッグのようだったという声も。コーヒーが自慢で、朝8時から夜10時半まで。',
  });
}

// ================================================================ PROTEIN LAB 北堀江店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27098886/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_protein_lab_kitahorie', name: 'PROTEIN LAB 北堀江店 (PROTEIN LAB Kitahorie)', category: 'OMNI',
    lat: 34.673594, lng: 135.494619, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask',
    gf_detail: 'Ask. Bowls are built to order (salad, quinoa, protein toppings) and Tabelog lists allergy information, but no source covers wheat in the dressings or sauces; granola tops the acai bowl.',
    vegan_status: 'options', vegan_label: 'Some vegan options',
    vegan_detail: 'Shop text (Tabelog): one of the six "STYLECHOICE" base bowls is "Healthy & high-protein for vegans". The acai bowl is fruit, acai and granola, with honey only if you ask for it (May 2026). Check the dressing and toppings.',
    hours_raw: 'Daily 10:00–22:00 (L.O. 21:30); closed over New Year (Tabelog). Order and pay at the register; self-service water. Reservations taken. Cards, e-money (IC cards, iD, QUICPay) and QR (PayPay) accepted. Calorie and macronutrient information listed. Delivery via Uber; dog treats on sale.',
    hours: ALL(day(['10:00', '22:00'])), hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kitahorie 1-15-19 1F — 3 min from Nishi-Ohashi Stn (exit 4)',
    cuisine: 'High-protein salad and rice bowls with calorie and macro counts · six "STYLECHOICE" base bowls, one vegan · PROTEIN LAB bowl ¥1,600 with tender chicken breast · Mexican bowl ¥1,480 · acai bowl ¥1,600 · quinoa · build your own toppings and dressing · 18 seats; takeout and delivery',
    website: 'http://protein.co.jp/', gmaps: gm('PROTEIN LAB 北堀江'), menu_url: null,
    notes: "[Café · high-protein bowls in Kitahorie] A small healthy-bowl café in Kitahorie, three minutes from Nishi-Ohashi, popular with gym-goers and dog owners (it even sells jerky for dogs). Every bowl lists calories and macros. You choose from six base concepts, one of them \"Healthy & high-protein for vegans\" (shop text), then customize the toppings and dressing. The house PROTEIN LAB bowl (¥1,600) comes with very tender chicken breast, and there's a Mexican bowl (¥1,480). An acai bowl (¥1,600) comes half-frozen with banana, berries, kiwi, coconut and granola; honey is only added if you say yes. Order and pay at the register, then sit anywhere.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 11 June 2017 (Tabelog)', background: 'PROTEIN LAB (protein.co.jp); Tabelog corporate-member listing.', philosophy: 'Bowls built around protein, fats and carbohydrates, with gut-health options (shop text).', specialty: 'High-protein salad and rice bowls.',
      anecdotes: [
        { text: 'Shop text: base bowls in six concepts — "Beautiful weight loss," "Detoxifying the body," "Building muscle without unnecessary fat," "Fatigue recovery," "Immune enhancement," and "Healthy & high-protein for vegans."', source: TB },
        { text: '"They ask if you want honey on top, so if you\'re watching your sugar intake, you can enjoy it without." — May 2026, acai bowl ¥1,600.', source: R + 'B529267695/' },
      ],
      japanese_sources_summary: '食べログ: PROTEIN LAB 北堀江店、大阪市西区北堀江1-15-19 1F、050-5596-8859、予約可、毎日10:00〜22:00(L.O.21:30)、年末年始休み、カード・電子マネー(交通系IC、iD、QUICPay)・QR(PayPay)可、18席、2017年6月11日開店、公式 protein.co.jp、アレルギー・カロリー表示あり。店の説明: たんぱく質・脂質・炭水化物を考えたサラダとオリジナル丼、トッピングを選べる、腸活メニュー、6つのコンセプトのベース「STYLECHOICE」(うち1つがヴィーガン向けの高たんぱく)。2026年の口コミ(5〜9月): PROTEIN LABボウル1,600円(やわらかい鶏むね肉)、メキシカンボウル1,480円、アサイーボウル1,600円(バナナ、いちご、ブルーベリー、ココナッツ、キウイ、グラノーラ、はちみつは希望制)、犬用のジャーキーや干し野菜、レジで先払い、水はセルフ、キヌア、カロリーとPFC表示、筋トレをする人が多い、インスタのクーポン、Uberでも注文、Sサイズでも満足。',
      confidence: 'medium', sources: [TB, R + 'B529267695/', R + 'B481002927/', R + 'B529735120/', R + 'B536500087/', R + 'B530135259/', R + 'B536855083/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order and pay at the register.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区北堀江1-15-19 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated May–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区北堀江一丁目15番19号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B481002927/', R + 'B529267695/'],
    price_note: 'Prices from May–August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'STYLECHOICE base bowl — "Healthy & high-protein for vegans"', '', 'Bowls', 'ask', 'vegan', 'Shop text (Tabelog); check dressing and toppings.', 'vegan_bowl'),
      it('', '', 'PROTEIN LAB bowl (chicken breast)', '¥1,600', 'Bowls', 'ask', 'no', 'August 2026.', 'plab_bowl'),
      it('', '', 'Mexican bowl', '¥1,480', 'Bowls', 'ask', 'no', 'May 2026.', 'mexican'),
      it('', '', 'Acai bowl (no honey on request)', '¥1,600', 'Bowls', 'ask', 'ask', 'May 2026.', 'acai'),
    ] }, {
    cuisine: 'カロリーとPFCを表示した高たんぱくのサラダとライスボウル・6つのベース「STYLECHOICE」(1つはヴィーガン向け)・やわらかい鶏むね肉のPROTEIN LABボウル1,600円・メキシカンボウル1,480円・アサイーボウル1,600円・キヌア・トッピングとドレッシングを選べる・18席、持ち帰りとデリバリー',
    neighborhood: '北堀江1-15-19 1F。西大橋駅(4番出口)から徒歩3分',
    gf_detail: '要確認。ボウルは注文ごとに組み立て(サラダ、キヌア、たんぱく質のトッピング)、食べログにアレルギー表示ありとされますが、ドレッシングやソースの小麦については情報がありません。アサイーボウルにはグラノーラ。',
    vegan_detail: '店の説明(食べログ)では6つの「STYLECHOICE」ベースのうち1つが「ヴィーガン向けの健康的な高たんぱく」。アサイーボウルはフルーツ、アサイー、グラノーラで、はちみつは希望したときだけ(2026年5月)。ドレッシングとトッピングを確認して。',
    notes: '[カフェ・北堀江の高たんぱくボウル] 西大橋駅から3分、北堀江の小さなヘルシーボウルのカフェで、筋トレをする人や犬連れに人気(犬用のジャーキーまで販売)。どのボウルにもカロリーとPFCを表示。6つのベースから選び、その1つが「ヴィーガン向けの健康的な高たんぱく」(店の説明)、トッピングとドレッシングを自分で決めます。看板のPROTEIN LABボウル(1,600円)はとてもやわらかい鶏むね肉、メキシカンボウル(1,480円)も。アサイーボウル(1,600円)は半分凍ったアサイーにバナナ、ベリー、キウイ、ココナッツ、グラノーラで、はちみつは希望したときだけ。レジで注文して先に払い、空いている席へ。',
  });
}

// ================================================================ タイ料理専門店 TAI THAI なんば本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27005308/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:30', '15:00'], ['17:00', '22:00']), T = day(['17:00', '22:00']), E = day(['11:30', '22:00']);
  put({
    id: 'osaka_tai_thai_namba', name: 'タイ料理専門店 TAI THAI なんば本店 (TAI THAI Namba Honten)', category: 'OMNI',
    lat: 34.662223, lng: 135.503425, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask',
    gf_detail: 'Ask. Jasmine rice, rice noodles and curries may suit, but no source covers soy sauce, oyster sauce or wheat in the sauces; spring rolls are fried in wrappers.',
    vegan_status: 'limited', vegan_label: 'Limited vegan',
    vegan_detail: 'Shop text (Tabelog): "We can accommodate vegetarian and halal dishes as well!" No review describes a vegetarian or vegan dish; Thai cooking often uses fish sauce and shrimp paste, so ask for them to be left out.',
    hours_raw: 'Mon, Wed–Fri 11:30–15:00 (L.O. 14:30) and 17:00–22:00 (L.O. 21:30); Tue 17:00–22:00 only; Sat, Sun and holidays 11:30–22:00 (Tabelog; the listing text also gives weekday dinner from 15:00). May close early — reserve for dinner (Tabelog). Halal dishes on request (shop text).',
    hours: { 0: W, 1: T, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nambanaka 2-6-15, U-I Bldg 1F — 30 s from Nankai Namba Stn south exit, across from Namba CITY south building',
    cuisine: 'Thai restaurant since 2001 with Thai chefs and 100+ dishes · tom yum kung ¥1,680 · khao man gai ¥1,280 with a house northeastern-style sauce · pak bung fai daeng ¥1,380 · poo pad pong curry · glass-noodle salad · pad see ew, gai pad med · pad thai lunch ¥1,100 with spring rolls, salad and soup · laksa · warm Thai desserts · vegetarian and halal on request · 43 seats',
    website: 'http://www.taithai.jp/food/index.html', gmaps: gm('TAI THAI なんば本店'), menu_url: null,
    notes: "[Thai · Namba's long-running Thai house by Nankai station] A 43-seat Thai restaurant thirty seconds from Nankai Namba's south exit, open since 2001. The shop says it is certified by Thailand's Ministry of Commerce, with Thai chefs cooking over 100 dishes. A repeat visitor calls the tom yum kung (¥1,680) the standout, with sourness and heat in balance. The khao man gai (¥1,280) comes with a house sauce in a northeastern style instead of sweet chili. There's also crab-rich poo pad pong curry, a spicy glass-noodle salad, stir-fried water spinach (¥1,380), pad see ew and laksa. The pad thai lunch (¥1,100) includes spring rolls, chicken, salad and soup. The shop says it can cook vegetarian and halal dishes, so ask ahead. Cilantro comes only on request. The menu is in Japanese with photos.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 29 April 2001 (Tabelog)', background: 'Shop text: certified by the Ministry of Commerce of the Thai government; experienced Thai chefs; over 100 dishes.', philosophy: null, specialty: 'Thai cooking; som tum pu pla ra (shop text).',
      anecdotes: [
        { text: '"All the dishes were delicious, but the Tom Yum Kung here is truly exceptional! The balance of sourness and spiciness is perfect." — July 2026, tom yum kung ¥1,680.', source: R + 'B536738939/' },
        { text: '"The Khao Man Gai… was served with a homemade sauce instead of the usual sweet chili. The description mentioned the flavors of the northeastern region of Thailand." — August 2026.', source: R + 'B533959977/' },
      ],
      japanese_sources_summary: '食べログ: タイ料理専門店 TAI THAI なんば本店、大阪市浪速区難波中2-6-15 ユー・アイビル1F、050-5868-6983、予約可(夜は予約推奨、早じまいの場合あり)、月・水〜金11:30〜15:00(L.O.14:30)・17:00〜22:00(L.O.21:30)、火17:00〜22:00、土日祝11:30〜22:00、43席、2001年4月29日開店、公式 taithai.jp。店の説明: タイ商務省認定、タイ人シェフ、100品以上、ソムタムプーパラー、ベジタリアンとハラールにも対応、平日は飲み放題付きコース。2026年の口コミ(7〜10月): プーパッポンカリー(カニの味が濃い)、ジャスミンライス、春雨サラダ(辛い)、ココナッツマンゴーアイス、カオマンガイ1,280円(イサーン風の自家製たれ)、ガイパッメットマムアン、空芯菜炒め1,380円、パッシーユ、トムヤムクン1,680円、ラクサ、パッタイのランチ1,100円(春巻き、鶏、サラダ、スープ付き)、パクチーは頼んだときだけ、日本語の写真付きメニュー、温かいデザート、もち米の甘味。',
      confidence: 'medium', sources: [TB, R + 'B536738939/', R + 'B533959977/', R + 'B533467029/', R + 'B538032362/', R + 'B535839337/', R + 'B534761513/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Japanese menu with photos and spice guidance (September 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区難波中2-6-15 ユー・アイビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated July–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区難波中二丁目6番15号 (go) 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536738939/', R + 'B538032362/'],
    price_note: 'Prices from July and October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Tom yum kung', '¥1,680', 'Soups', 'ask', 'no', 'July 2026.', 'tomyum'),
      it('', '', 'Khao man gai', '¥1,280', 'Rice', 'ask', 'no', 'July 2026.', 'khaomangai'),
      it('', '', 'Pak bung fai daeng (stir-fried water spinach)', '¥1,380', 'Vegetables', 'ask', 'ask', 'July 2026.', 'pakbung'),
      it('', '', 'Pad thai lunch (spring rolls, chicken, salad, soup)', '¥1,100', 'Lunch', 'ask', 'no', 'October 2026.', 'padthai_lunch'),
      it('', '', 'Poo pad pong curry', '', 'Curry', 'ask', 'no', 'July 2026.', 'poopadpong'),
      it('', '', 'Glass-noodle salad', '', 'Salads', 'ask', 'no', 'July 2026.', 'yumwoonsen'),
    ] }, {
    cuisine: '2001年からのタイ料理店、タイ人シェフ、100品以上・トムヤムクン1,680円・イサーン風の自家製たれのカオマンガイ1,280円・空芯菜炒め1,380円・プーパッポンカリー・春雨サラダ・パッシーユ、ガイパッメット・春巻き、サラダ、スープ付きのパッタイのランチ1,100円・ラクサ・温かいタイのデザート・ベジタリアンとハラールは相談可・43席',
    neighborhood: '難波中2-6-15 ユー・アイビル1F。南海なんば駅南口から徒歩30秒、なんばCITY南館の斜め向かい',
    gf_detail: '要確認。ジャスミンライス、米麺、カレーは合いそうですが、醤油、オイスターソース、たれの小麦についての情報はありません。春巻きは皮で包んで揚げています。',
    vegan_detail: '店の説明(食べログ)に「ベジタリアンやハラールの料理にも対応」。口コミにベジタリアンやヴィーガンの料理の記述はなく、タイ料理はナンプラーやエビのペーストを使うことが多いので、抜けるか確認を。',
    notes: '[タイ料理・南海なんば駅すぐの老舗タイ料理] 南海なんば駅南口から30秒、2001年からある43席のタイ料理店。店によるとタイ商務省の認定店で、タイ人シェフが100品以上を作ります。何度も通う人のおすすめはトムヤムクン(1,680円)で、酸味と辛さのバランスが絶妙。カオマンガイ(1,280円)はスイートチリではなくイサーン風の自家製たれで。ほかにカニの濃いプーパッポンカリー、辛い春雨サラダ、空芯菜炒め(1,380円)、パッシーユ、ラクサ。パッタイのランチ(1,100円)は春巻き、鶏、サラダ、スープ付き。ベジタリアンやハラールの料理も作れるそうなので事前に相談を。パクチーは頼んだときだけ。メニューは日本語で写真付き。',
  });
}

save();
