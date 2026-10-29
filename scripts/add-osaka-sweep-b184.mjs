// Osaka sweep (2-mile circle around Dotonbori), batch 184 — mom phase (≤20 seats, 30+ reviews, nearest-first).
//   + Café Hapje (Brussels-style waffles with Belgian ingredients; Kita-Horie, by Yotsubashi)
//   + 堀江カフェ オー ウィ ウィ (Oh!oui oui: specialty coffee by the cup, pick your cup, dog-friendly; Minami-Horie)
//   + M&H COFFEE (early-opening café for bagels, lattes and hand drip; Kita-Horie)
//   Skip: 27005252 ヴィクトワール 大阪心斎橋店 (chain bakery in the Crysta Nagahori underground mall).
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-29';
const { put, skip, save } = openCitySweep('osaka', TODAY, 184);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27005252', 'Chain bakery (Cosmo Bakery) in the Crysta Nagahori underground mall; mall counter, not a sweep target.');

// ================================================================ Café Hapje
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27091983/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://www.hapje.jp';
  put({
    id: 'osaka_cafe_hapje_kitahorie', name: 'Café Hapje', category: 'OMNI',
    lat: 34.674188, lng: 135.49706, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: a waffle shop; the batter is not described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: waffles made with butter (Tabelog listing), served with cream, ice cream and pudding.',
    hours_raw: 'Daily 10:00–18:00 (food last order 17:30) (Tabelog). No reservations (Tabelog). Cards, e-money and QR accepted (Tabelog). Non-smoking. Children and strollers welcome; takeout; outlets and Wi-Fi (Tabelog). Opened 15 May 2016 (Tabelog).',
    hours: ALL(day(['10:00', '18:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kita-Horie 1-1-25, 1F — 1 min from Yotsubashi Stn exit 3',
    cuisine: 'Brussels-style waffle café (13 seats) · waffles baked to order from unsweetened batter with Belgian butter, toppings and chocolate sauces from Belgium (Tabelog listing) · plain Brussels waffle ¥600 with powdered sugar · seasonal waffles, e.g. chilled sweet-potato brûlée ¥1,400 · waffle with pudding and vanilla ice cream · choice of chocolate; fruit; red bean and butter · Americano ¥540 (¥100 off as a set); espresso shake ¥600; café latte',
    website: OWN, gmaps: gm('Café Hapje 北堀江'), menu_url: null,
    notes: "[Sweets · crisp Brussels waffles baked to order, by Yotsubashi] A small café a minute from Yotsubashi Station that bakes Brussels-style waffles to order, with unsweetened batter, Belgian butter and Belgian chocolate and toppings. They come out crisp and light rather than chewy; the plain one with powdered sugar (¥600) is the purist's choice, and the seasonal plates go big, like a chilled sweet-potato brûlée (¥1,400). Pick your chocolate, or add pudding and vanilla ice cream. An espresso shake (¥600) surprised one diner as the highlight. One found the cream ordinary. Comfortable for families, with sofa seats; open 10:00–18:00 daily.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 15 May 2016 (Tabelog).', background: 'Belgian-waffle café (Tabelog; 2026 reviews).', philosophy: 'Ingredients from Belgium; unsweetened batter with Belgian butter (Tabelog listing).', specialty: 'Brussels waffles.',
      anecdotes: [
        { text: '"Instead of the trendy chewy texture, it has a delightful crispness. It has a light mouthfeel…" — October 2026, Brussels Waffle ¥600.', source: R + 'B256238022/' },
        { text: '"I had the Chilled Sweet Potato Brulee Waffle for JPY 1400 and the Espresso Shake for JPY 600… I was pleasantly surprised by how delicious the Espresso Shake was…" — October 2026.', source: R + 'B537535173/' },
      ],
      japanese_sources_summary: '食べログ: Café Hapje、大阪市西区北堀江1-1-25 1F、四ツ橋駅3番出口から徒歩1分、毎日10:00〜18:00 (料理L.O. 17:30)、予約不可、カード・電子マネー・QR可、禁煙、13席、子ども・ベビーカー歓迎、テイクアウト、電源・Wi-Fi、2016年5月15日開店、ベルギーの材料で焼くブリュッセルワッフル、砂糖を入れない生地とベルギーのバター、公式サイトあり。口コミ(2026年7〜10月): 写真に「ブリュッセルワッフル(600円)」「アメリカーノ(540円)」「(セットで100円OFF)」、注文してから焼く、もちもちというよりサクッと軽い、粉糖、冷やし芋ブリュレのワッフル1,400円、エスプレッソシェイク600円、プリンとバニラアイスのワッフル、チョコを選べる、季節のフルーツ、あんバター、カフェラテ、クリームは期待ほどではないという声。',
      confidence: 'medium', sources: [TB, OWN, R + 'B256238022/', R + 'B532841366/', R + 'B533188968/', R + 'B533297965/', R + 'B537535173/', R + 'B538199127/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Family-friendly café; takeout (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区北堀江1-1-25 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: OSM Hapje node/6152881796 7m; GSI 大阪府大阪市西区北堀江一丁目1番25号 (go) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B256238022/', R + 'B537535173/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('ブリュッセルワッフル', '', 'Brussels waffle (plain)', '¥600', 'Waffles', 'no', 'no', 'October 2026.', 'plain'),
      it('', '', 'Chilled sweet-potato brûlée waffle', '¥1,400', 'Waffles', 'no', 'no', 'October 2026.', 'imo'),
      it('', '', 'Espresso shake', '¥600', 'Drinks', '', 'no', 'October 2026.', 'shake'),
      it('アメリカーノ', '', 'Americano', '¥540', 'Drinks', '', '', 'October 2026.', 'americano'),
    ] }, {
    cuisine: 'ブリュッセル風ワッフルのカフェ (13席)・注文してから焼く、砂糖なしの生地とベルギーのバター、ベルギーのトッピングとチョコソース (食べログ)・粉糖のプレーンのブリュッセルワッフル600円・季節のワッフル (冷やし芋ブリュレ1,400円など)・プリンとバニラアイスのワッフル・選べるチョコ、フルーツ、あんバター・アメリカーノ540円 (セットで100円引き)、エスプレッソシェイク600円、カフェラテ',
    neighborhood: '北堀江1-1-25 1F。四ツ橋駅3番出口から徒歩1分',
    gf_detail: '実質グルテンフリーではありません。ワッフルの店で、生地がグルテンフリーという記載なし。',
    vegan_detail: '実質ヴィーガンではありません。バターを使うワッフル (食べログ) に、クリーム、アイス、プリン。',
    notes: '[スイーツ・四ツ橋、注文してから焼くサクッとしたブリュッセルワッフル] 四ツ橋駅から1分の小さなカフェで、ブリュッセル風のワッフルを注文ごとに焼く。生地は砂糖なしでベルギーのバター、チョコやトッピングもベルギーのもの。もちもちというよりサクッと軽く、粉糖だけのプレーン (600円) は素材を味わうなら。季節の一皿は冷やし芋ブリュレ (1,400円) など豪華に。チョコを選んだり、プリンとバニラアイスを足したりも。何気なく頼んだエスプレッソシェイク (600円) がいちばんだったという声、クリームはふつうだったという声も。ソファ席もあり家族連れにも。毎日10時〜18時。',
  });
}

// ================================================================ 堀江カフェ オー ウィ ウィ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27090483/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['10:00', '23:00']);
  put({
    id: 'osaka_oh_oui_oui_minamihorie', name: '堀江カフェ オー ウィ ウィ (Oh!oui oui)', category: 'OMNI',
    lat: 34.671299, lng: 135.494345, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A coffee-focused café; desserts are not described in the reviews.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Black specialty coffee is the core; desserts are not described.',
    hours_raw: 'Weekdays 10:00–23:00; Sunday and holidays 10:00–19:00; irregular closures; may change (Tabelog). Saturday hours are not stated. Cash only: no cards, e-money or QR (Tabelog). Non-smoking. Dogs welcome; bring a mat for small dogs on the wooden floor (October 2026). A wait at opening on some mornings (April 2025). Takeout (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 6: day(['10:00', '19:00']) }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Minami-Horie 1-15-17, 101 — about 5 min from Yotsubashi or Sakuragawa Stn',
    cuisine: 'Specialty coffee café (20 seats, counter and sofas) · single origins sorted into dark and fruity, e.g. Ethiopia, Burundi, Indonesia; about ¥999 a cup (2025–2026) · staff help match a coffee to your taste · pick your own cup and saucer; extra coffee served separately if the cup is small · cakes',
    website: null, gmaps: gm('Oh!oui oui 堀江カフェ'), menu_url: null,
    notes: "[Coffee · a specialty coffee café where you pick your cup, Minami-Horie] A small, decorated café in Minami-Horie that takes coffee seriously: single origins sorted into dark and fruity, each about ¥999, with staff happy to explain light roasts and match a bean to your taste. You choose your own cup and saucer from the shelf (fine porcelain, one diner noted), and any coffee that doesn't fit is served on the side. Diners single out an Ethiopian for its balance of aroma and acidity and an Indonesian 'dark' that drinks clean with chocolate notes. Ordering can be slow when it's busy. Dog-friendly. Cash only; open until 23:00 on weekdays.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Specialty coffee café (Tabelog; 2025–2026 reviews).', philosophy: null, specialty: 'Single-origin specialty coffee.',
      anecdotes: [
        { text: '"If you choose to enjoy your coffee inside, [you can] pick your favorite cup. If the smaller cup can\'t hold all the coffee, [the extra is served] separately…" — April 2026, Indonesian ¥999.', source: R + 'B526051926/' },
        { text: '"The specialty coffee from Ethiopia left a strong impression on me… the balance of aroma and acidity in the coffee was truly remarkable." — November 2025.', source: R + 'B518933909/' },
      ],
      japanese_sources_summary: '食べログ: 堀江カフェ オー ウィ ウィ、大阪市西区南堀江1-15-17 101、四ツ橋駅・桜川駅から徒歩5分、平日10:00〜23:00、日・祝10:00〜19:00、不定休、カード・電子マネー・QR不可、禁煙、20席、ペット可、テイクアウト。口コミ(2025年4月〜2026年10月): スペシャルティコーヒーをダークとフルーティーに分けて、エチオピア、ブルンジ、インドネシア、1杯999円ほど、好みを伝えると選んでくれる、浅煎りの説明が丁寧、カップとソーサーを選べる、入りきらない分は別に、店先の飾り、朝は開店待ちも、混むと注文に時間がかかる、犬連れ可で木の床なので小型犬はマットを。',
      confidence: 'medium', sources: [TB, R + 'B506115106/', R + 'B518933909/', R + 'B519814839/', R + 'B520774933/', R + 'B526051926/', R + 'B536583080/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff explain the coffees; cash only; dog-friendly (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区南堀江1-15-17 101',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区南堀江一丁目15番17号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B526051926/', R + 'B519814839/'],
    price_note: 'Prices from December 2025–April 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Single-origin coffee (dark or fruity)', 'about ¥999', 'Coffee', '', '', 'December 2025–April 2026.', 'single'),
    ] }, {
    cuisine: 'スペシャルティコーヒーのカフェ (20席、カウンターとソファ)・ダークとフルーティーに分けたシングルオリジン (エチオピア、ブルンジ、インドネシアなど)、1杯約999円 (2025〜2026年)・好みに合わせて選んでくれる・カップとソーサーを選べ、入りきらない分は別に・ケーキ',
    neighborhood: '南堀江1-15-17 101。四ツ橋駅・桜川駅から徒歩約5分',
    gf_detail: '要確認。コーヒーが中心のカフェで、デザートの説明は口コミにない。',
    vegan_detail: '要確認。中心はブラックのスペシャルティコーヒーで、デザートの説明なし。',
    notes: '[コーヒー・南堀江、カップを選べるスペシャルティコーヒーのカフェ] 南堀江の飾りつけのかわいい小さなカフェで、コーヒーに本気。シングルオリジンをダークとフルーティーに分け、1杯999円ほど。浅煎りのことも丁寧に教えてくれ、好みに合う豆を選んでくれる。棚からカップとソーサーを自分で選べ (薄手の上質な器だったという声)、入りきらない分は別に出してくれる。香りと酸味のバランスがいいエチオピア、すっきりしてチョコの香りのインドネシアの「ダーク」を挙げる声。混むと注文に時間がかかることも。犬連れ可。現金のみ、平日は23時まで。',
  });
}

// ================================================================ M&H COFFEE
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27138151/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['08:30', '16:30']); const WE = day(['08:30', '17:00']);
  put({
    id: 'osaka_m_and_h_coffee_kitahorie', name: 'M&H COFFEE', category: 'OMNI',
    lat: 34.673497, lng: 135.49601, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: the food is bagel sandwiches and cakes (including a waffle-based tiramisu); no gluten-free options described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: bagels with ham, bacon, egg, salmon and cream cheese; milk lattes; nothing described as vegan.',
    hours_raw: 'Mon–Fri 8:30–16:30; Saturday–Sunday 8:30–17:00 (Tabelog). Cards, e-money and QR accepted (Tabelog). Eat in: order at the table and pay on leaving; takeout: order and pay at the register (February 2026). Nearly full one Saturday afternoon (June 2026).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kita-Horie 1-4-11, 1F — a short walk from Yotsubashi Stn exit 6',
    cuisine: 'Early-opening surf-themed café (14 seats) · bagel sandwiches, generously filled: bacon, egg and cheese ¥980; ham and avocado; salmon, avocado and prosciutto with cream cheese · hand-drip coffee from three beans, ground to order; Americano · lattes: caramel, vanilla matcha, osmanthus · tiramisu on a waffle base; warm sweet-potato cake; chocolate cheesecake · orange juice ¥550; pineapple juice; beer · merchandise',
    website: null, gmaps: gm('M&H COFFEE 北堀江'), menu_url: null,
    notes: "[Café · an early-opening surf café for bagels and lattes, Kita-Horie] A small, surf-themed café near Yotsubashi that opens at 8:30, rare for the area, with a feel one diner compared to being abroad. Breakfast and lunch are bagel sandwiches packed with fillings (bacon, egg and cheese ¥980; ham and avocado; salmon, prosciutto and cream cheese), messy but filling; one diner found the bagel itself a bit hard. Coffee is hand-dripped from three beans, ground per cup, and takeaway cups get a hand-drawn illustration. The lattes stand out, especially a thick caramel latte; sweets include a tiramisu on a waffle base. Cramped inside, and it can be nearly full on weekend afternoons.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Café (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Bagel sandwiches; lattes; hand-drip coffee.',
      anecdotes: [
        { text: '"I was delighted to see [the beans ground] on the spot and [each cup] carefully drip[ped]… The take-away cup came with a hand-drawn illustration…" — February 2026, Indonesian hand drip.', source: R + 'B522907600/' },
        { text: '"It was much richer and creamier than I had imagined, and the milk was delicious... it paired perfectly with the caramel." — February 2026, caramel latte.', source: R + 'B523098242/' },
      ],
      japanese_sources_summary: '食べログ: M&H COFFEE、大阪市西区北堀江1-4-11 1F、四ツ橋駅から136m、月〜金8:30〜16:30、土日8:30〜17:00、カード・電子マネー・QR可、14席。口コミ(2026年2〜10月): 朝早くから開くカフェ、サーフ風の店内、ベーコン・卵・チーズのベーグル980円、ハムとアボカド、サーモン・アボカド・生ハムとクリームチーズ、具だくさんで食べにくいという声、ベーグル自体は固めという声、3種の豆から選ぶハンドドリップ (その場で挽く)、テイクアウトのカップに手描きのイラスト、キャラメルラテ、バニラ抹茶ラテ、金木犀のラテ、ワッフル生地のティラミス、温かいさつまいものケーキ、チョコのチーズケーキ、オレンジジュース550円、パイナップルジュース、ビール、グッズ、店内は席で注文して帰りに支払い、持ち帰りは先にレジで、土曜の午後にほぼ満席だったという声。',
      confidence: 'medium', sources: [TB, R + 'B488502878/', R + 'B522907600/', R + 'B523075716/', R + 'B523098242/', R + 'B530858727/', R + 'B537688248/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at your table, pay when leaving (February 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区北堀江1-4-11 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区北堀江一丁目4番11号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B523075716/'],
    price_note: 'Prices from a February 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Bacon, egg and cheese bagel', '¥980', 'Bagels', 'no', 'no', 'February 2026.', 'bec'),
      it('', '', 'Ham and avocado bagel', '', 'Bagels', 'no', 'no', '2026.', 'ham'),
      it('', '', 'Caramel latte', '', 'Drinks', '', 'no', 'February 2026.', 'caramel'),
      it('', '', 'Orange juice', '¥550', 'Drinks', '', '', 'February 2026.', 'oj'),
    ] }, {
    cuisine: '朝早くから開くサーフ風のカフェ (14席)・具だくさんのベーグルサンド: ベーコン・卵・チーズ980円、ハムとアボカド、サーモン・アボカド・生ハムとクリームチーズ・3種の豆をその場で挽くハンドドリップ、アメリカーノ・キャラメル、バニラ抹茶、金木犀のラテ・ワッフル生地のティラミス、温かいさつまいものケーキ、チョコのチーズケーキ・オレンジジュース550円、パイナップルジュース、ビール・グッズ',
    neighborhood: '北堀江1-4-11 1F。四ツ橋駅6番出口からすぐ',
    gf_detail: '実質グルテンフリーではありません。食べ物はベーグルサンドとケーキ (ワッフル生地のティラミスも)。グルテンフリーの品の記載なし。',
    vegan_detail: '実質ヴィーガンではありません。ハム、ベーコン、卵、サーモン、クリームチーズのベーグル、ミルクのラテ。ヴィーガンの記載なし。',
    notes: '[カフェ・北堀江、朝早くから開くサーフ風のベーグルとラテのカフェ] 四ツ橋近くの小さなサーフ風のカフェで、このあたりでは珍しく朝8時半から。海外にいるみたいという声も。朝と昼は具がぎっしりのベーグルサンド (ベーコン・卵・チーズ980円、ハムとアボカド、サーモン・生ハム・クリームチーズ) で、食べにくいが満腹に。ベーグル自体は少し固いという声も。コーヒーは3種の豆から一杯ずつ挽いてハンドドリップ、持ち帰りのカップには手描きのイラスト。ラテが好評で、特に濃厚なキャラメルラテ。甘いものはワッフル生地のティラミスなど。店内は狭く、週末の午後はほぼ満席のことも。',
  });
}

save();
