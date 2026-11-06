// Kyoto priority (kyoto-missed), worker osw13, batch 63 — lane: Tabelog id mod 6 = 0.
// Core: izon, 路地奥Garden168. Notable: 京極かねよ, 権太呂 四条本店.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-06';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-63');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ izon
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26038248/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://izon-kyoto.jp';
  const D = day(['18:30', '21:30']); const LD = day(['12:00', '15:00'], ['18:30', '21:30']);
  put({
    id: 'kyoto_izon', name: 'izon', category: 'OMNI',
    lat: 35.017099, lng: 135.766843, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: courses centre on spices, basmati rice and biryani, but include pastry-style starters, potages and desserts whose make-up is not published (official site; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: eel, seafood fumet, salmon, lamb and dairy (official site; 2026 reviews).',
    hours_raw: 'Official site: reservation-only courses starting together — lunch 12:00 and dinner 18:30 (Tabelog: lunch Fri–Sun, dinner Mon, Tue, Thu–Sun; closed Wednesday and irregularly). Book by the day before via TableCheck or phone; at most 4 guests per sitting, and 3 or more take the whole house; private bookings can start earlier for guests catching a late train. 4 seats at the counter and sofa; non-smoking; no perfume; children only if eating the adult course; English menu; cards, e-money and most QR (Tabelog). In a 100-year-old machiya at the end of a narrow alley (official site; 2026 reviews).',
    hours: { 0: D, 1: D, 3: D, 4: LD, 5: LD, 6: LD }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gosho-minami, down an alley south of the Imperial Palace — 8 min walk from Marutamachi or Jingu-Marutamachi Stn',
    cuisine: '"Innovative spice gastronomy": a course that crosses a border with each plate, pairing Kyoto’s season with spices, aroma over heat, light on oil (official site) · omakase course ¥16,500 (official site); lunch courses themed on a country that changes about every three months — casual ¥2,480, standard ¥3,580 with a ¥2,100 pairing (Denmark and Greenland, early 2026; Tunisia, July 2026) (reviews) · signatures: a ring-moulded hors d’oeuvre built on India’s six tastes; eel dolma, a boned eel stuffed with seasonal vegetables and charcoal-grilled; bamboo biryani of seafood, Ohara vegetables and basmati steamed in bamboo (official site) · seen: iceberg-shaped potato and cheese, spice potage, gravlax, lamb, cardamom and nut ice terrine, homemade chai (2026 reviews)',
    website: SITE, gmaps: gm('izon 毘沙門町'), menu_url: SITE,
    notes: '[Spice gastronomy · an alley south of the Imperial Palace, four seats] A four-seat dining room in a hundred-year-old machiya at the end of a Gosho-minami alley, cooking "innovative spice" courses that travel to a new country every few months — Denmark and Greenland, Tunisia — with Kyoto produce and signatures like eel dolma and bamboo biryani. Run by a chef and a childhood friend, per a regular. Omakase ¥16,500; lunch courses from about ¥2,500 in 2026 reviews. Book by the day before.',
    chef_bio: { chef_name: null, roles: ['Chef not named; "run by a chef and a childhood friend" (July 2026)'], origin: null,
      background: 'Per the official site: a reservation-only restaurant in a 100-year-old machiya at the back of an alley south of the Imperial Palace, weaving stories from world history and culture into courses that combine Kyoto’s seasons and spices, valuing aroma over heat and keeping oil and aromatics light. Reviewers in 2025–2026 describe thorough explanations of each dish, a quarterly country theme, and an earlier Indian-French fusion lunch (September 2025).',
      philosophy: 'Official site: 「スパイスの刺激よりも香りを大切に、オイルや香味野菜は控えめに、体に優しく、美しいコース料理を」.',
      specialty: 'Eel dolma; bamboo biryani.',
      anecdotes: [
        { text: 'March 2026, the Denmark and Greenland theme: mashed potato and cheese shaped like an iceberg, its base dyed blue with butterfly pea, with seaweed on top "to symbolize the land exposed due to global warming."', source: R + 'B523851245/' },
        { text: 'February 2026: the usual choice of two soups was not offered that day — "That was a bit disappointing."', source: R + 'B523514747/' },
        { text: 'March 2026: the homemade chai was ordered, then "I was informed later that it wasn’t available."', source: R + 'B525243461/' },
      ],
      japanese_sources_summary: '公式サイト (izon-kyoto.jp): izon、京都御所南、スパイス・ガストロノミー、一皿ごとに国境を越える食の世界旅行、世界の歴史や文化から物語を紡ぎ京都の旬とスパイスを掛け合わせるイノベーティブ、香りを大切に、オイルや香味野菜は控えめ、京都御所南のろうじの奥の築百年の京町家、完全予約制、セルクル仕立てのオードブル (インドの6つの味)、鰻のドルマ、バンブービリヤニ (大原野菜、バスマティライス)、イノベーティブ・スパイスのおまかせコース16,500円、昼12:00・夜18:30一斉スタート、各回最大4名 (3名以上で一棟貸切)、前日までに予約、不定休。食べログ: イノベーティブ、中京区毘沙門町556-1、4席、香水は控えて、子供は大人と同じ料理を食べる場合のみ、英語メニュー、カード・電子マネー・QR可。口コミ (2025年9月〜2026年8月、英語): シェフと幼なじみで営む、季節ごとに国のテーマ (デンマークとグリーンランド、チュニジア、次はモロッコ)、カジュアルコース2,480円、スタンダード3,580円とペアリング2,100円、大原の野菜のサラダ、スパイスのポタージュ、グラブラックス、ラム、カルダモンとナッツのアイステリーヌ、氷山の形のポテトとチーズ、料理の説明が丁寧、スープの選択がなかった・チャイがなかったという声。',
      confidence: 'medium', sources: [SITE, TB, R + 'B513917150/', R + 'B522305564/', R + 'B523514747/', R + 'B523851245/', R + 'B524131254/', R + 'B524340515/', R + 'B524724047/', R + 'B525185905/', R + 'B525243461/', R + 'B534020323/'] },
    cultural_comfort: { level: 'english', note: 'English menu and site; dishes explained in detail.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区毘沙門町556-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site live; Tabelog reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.017099, 135.766843); cross-checked: GSI 京都府京都市中京区毘沙門町556番地 (lot) 32m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE, R + 'B525185905/'],
    price_note: 'Official site (omakase) and 2026 reviews (lunch).', last_checked: TODAY, items: [
      it('イノベーティブ・スパイスのおまかせコース', '', 'Innovative spice omakase course', '¥16,500', 'Course', 'ask', 'no', 'Official site.', 'tasting_course'),
      it('', '', 'Standard lunch course (country theme)', '¥3,580', 'Lunch', 'ask', 'no', 'March 2026; pairing ¥2,100.', 'set_course'),
    ] }, {
    cuisine: '「イノベーティブ・スパイス・ガストロノミー」。一皿ごとに国境を越えるコースで、京都の旬とスパイスを、刺激より香りを大切に、油は控えめに (公式サイト)・おまかせコース16,500円 (公式サイト)。昼は約3か月ごとに国が替わるテーマのコースで、カジュアル2,480円、スタンダード3,580円とペアリング2,100円 (2026年前半はデンマークとグリーンランド、7月はチュニジア) (口コミ)・名物はインドの6つの味をもとにしたセルクル仕立てのオードブル、骨を抜いた鰻に旬の野菜を詰めて炭火で焼く鰻のドルマ、魚介と大原の野菜とバスマティライスを竹で蒸すバンブービリヤニ (公式サイト)・口コミでは氷山形のポテトとチーズ、スパイスのポタージュ、グラブラックス、ラム、カルダモンとナッツのアイステリーヌ、自家製チャイ (2026年)',
    neighborhood: '御所南、御所の南の路地の奥。丸太町駅・神宮丸太町駅から徒歩8分',
    gf_detail: '要確認: スパイスとバスマティライスやビリヤニが中心だが、パイ仕立ての前菜、ポタージュ、デザートの中身は公表されていない (公式サイト、2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 鰻、魚介のフュメ、鮭、ラム、乳製品 (公式サイト、2026年の口コミ)。',
    notes: '[スパイス・ガストロノミー・御所南の路地の奥、4席] 御所南の路地の奥、築百年の町家にある4席の店。数か月ごとに国を旅するイノベーティブ・スパイスのコースで、デンマークとグリーンランド、チュニジアなどを京都の食材で表現し、鰻のドルマやバンブービリヤニが名物。常連によるとシェフと幼なじみで営む。おまかせ16,500円、2026年の口コミでは昼のコースは2,500円ほどから。前日までに予約を。',
  });
}

// ================================================================ 路地奥Garden168
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26028714/'; const R = TB + 'dtlrvwlst/';
  const L = day(['11:30', '15:00']); const LD = day(['11:30', '15:00'], ['18:00', '23:00']); const LDL = day(['11:30', '15:00'], ['18:00', '24:00']);
  put({
    id: 'kyoto_rojioku_garden168', name: '路地奥Garden168 (Rojioku Garden 168)', category: 'OMNI',
    lat: 35.010446, lng: 135.754462, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: hamburg steak, burgers, shepherd’s pie, fried chicken and bread sides (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the signature is a six-egg dashimaki; other mains are chicken, lamb, pork and beef (2026 reviews).',
    hours_raw: 'Tabelog: lunch 11:30–15:00 (Mon, Wed–Sun); dinner 18:00–23:00 Wed, Thu, Sun and holidays, to midnight Fri and Sat; Monday is lunch only, and Tuesday is the day off. Lunch seats 1.5 hours; parties of three or more book by phone; the whole party must arrive together, bookings lapse after 10 minutes, and same-day cancellations cost ¥1,000 a person. Dinner from 18:00: one drink and one food per person to start, no one under 20. 12 seats; no smoking inside, smoking in the courtyard and on the terrace. No service charge or cover — Tabelog, Japanese original 「サービス料・チャージ料 無し」. Cards and PayPay. Opened 16 March 2017 (Tabelog).',
    hours: { 0: L, 2: LD, 3: LD, 4: LDL, 5: LDL, 6: LD }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ogawa-dori south of Oike, at the back of the Marumasu Nishimura-ya alley — 5 min walk from Nijojo-mae Stn',
    cuisine: 'A café-bar at the end of a stone alley in a 300-year-old townhouse with dyeing and leather workshops (2026 reviews) · lunches all ¥1,600, drinks extra (August and October 2026): dashimaki tamago lunch made with six eggs, with grated daikon; a limited daily "Garden lunch" (e.g. plum-and-shiso fried chicken breast, ginger pork, simmered chicken); hamburg steak; special beef hamburger; shepherd’s pie of lamb; each with salad, three obanzai, three pickles and a hearty miso soup, rice or bread (2026 reviews) · cocktails, sake, shochu and wine at night (Tabelog)',
    website: null, gmaps: gm('路地奥Garden168 壺屋町'), menu_url: null,
    notes: '[Café & bar · Ogawa-Oike, at the end of a stone alley] A twelve-seat café-bar down a stone alley in a 300-year-old townhouse of craft workshops near Nijo Castle: ¥1,600 lunches of a six-egg dashimaki, hamburg steak or the limited daily plate with obanzai and pickles, and cocktails at night. Book ahead — it fills within minutes of opening. Tight aisles; ¥1,000 same-day cancellation fee. Closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Opened 16 March 2017 (Tabelog), at the back of an alley in the Marumasu Nishimura-ya building on Ogawa-dori. Reviewers in 2026 describe a historic townhouse said to be over 300 years old, home to a dyeing workshop and leather workshop, a small room of four two-seat tables and one four-seat table, and lunches that fill up soon after 11:30.',
      philosophy: null,
      specialty: 'Six-egg dashimaki tamago lunch.',
      anecdotes: [
        { text: 'October 2026: "After placing my order, I overheard another table mentioning that the dashimaki is made with six large eggs… Six eggs!?"', source: R + 'B537867424/' },
        { text: 'November 2026: "The atmosphere isn’t particularly relaxing, but the food is delicious!" — and the narrow path to the back table was hard with large bags.', source: R + 'B538717012/' },
      ],
      japanese_sources_summary: '食べログ: 路地奥Garden168、カフェ・バー、中京区小川通御池南下ル壺屋町 丸益西村屋 路地奥、二条城前駅から徒歩5分、昼11:30〜15:00 (月・水〜日)、夜18:00〜23:00 (水木日祝)・〜24:00 (金土)、月曜夜と火曜休み、昼は1時間半制、3名以上は電話予約、全員揃って来店、10分過ぎると自動キャンセル、当日キャンセルは1人1,000円、夜は最初にワンドリンク・ワンフード、20歳未満不可、12席、店内禁煙 (中庭とテラスで喫煙可)、サービス料・チャージ料 無し、カード・PayPay可、2017年3月16日オープン。口コミ (2026年7月〜11月、英語): 築300年以上の町家、染色や革の工房、ランチはすべて1,600円 (飲み物別)、卵6個のだし巻き定食と大根おろし、数量限定のガーデンランチ (梅しその鶏むね唐揚げ、生姜焼き、鶏の煮物)、ハンバーグ、特製牛100%ハンバーガー、ラムのシェパーズパイ、サラダ、おばんざい3種、漬物3種、具だくさんの味噌汁、ご飯かパン、すぐ満席、通路が狭い。',
      confidence: 'medium', sources: [TB, R + 'B531628245/', R + 'B533697699/', R + 'B533709268/', R + 'B534750368/', R + 'B535543488/', R + 'B537534569/', R + 'B537673684/', R + 'B537867424/', R + 'B538067648/', R + 'B538717012/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; the entrance is down a stone alley with a small lantern sign.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区小川通御池南下ル壺屋町 丸益西村屋 路地奥',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.010446, 135.754462); the address has no lot number (壺屋町 丸益西村屋 路地奥) and GSI matches only the town, so loc_precise false; kyoto_marukyu_koyamaen_motoan is 64m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534750368/', R + 'B537534569/'],
    price_note: 'All lunches ¥1,600, drinks extra (2026 reviews).', last_checked: TODAY, items: [
      it('', '', 'Dashimaki tamago lunch (six eggs)', '¥1,600', 'Lunch', 'ask', 'no', 'August–November 2026.', 'dashimaki'),
      it('', '', 'Garden lunch (limited daily plate)', '¥1,600', 'Lunch', 'ask', 'no', 'August–October 2026.', 'set_meal'),
      it('', '', 'Hamburg steak lunch', '¥1,600', 'Lunch', 'no', 'no', 'October 2026.', 'hamburg'),
    ] }, {
    cuisine: '染色や革の工房が入る築300年の町家の、石畳の路地の奥のカフェバー (2026年の口コミ)・ランチはすべて1,600円で飲み物別 (2026年8月・10月): 卵6個のだし巻き定食に大根おろし、数量限定の「ガーデンランチ」(梅しその鶏むね唐揚げ、生姜焼き、鶏の煮物など)、ハンバーグ、特製の牛100%ハンバーガー、ラムのシェパーズパイ。どれもサラダ、おばんざい3種、漬物3種、具だくさんの味噌汁、ご飯かパン付き (2026年の口コミ)・夜はカクテル、日本酒、焼酎、ワイン (食べログ)',
    neighborhood: '小川通御池下ル、丸益西村屋の路地の奥。二条城前駅から徒歩5分',
    gf_detail: 'グルテンフリーではない: ハンバーグ、ハンバーガー、シェパーズパイ、唐揚げ、パン (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 名物は卵6個のだし巻き。ほかのメインも鶏、ラム、豚、牛 (2026年の口コミ)。',
    notes: '[カフェとバー・小川御池、石畳の路地の奥] 二条城近く、工房が入る築300年の町家の石畳の路地の奥にある12席のカフェバー。昼は卵6個のだし巻き、ハンバーグ、数量限定の日替わりプレートにおばんざいと漬物が付いて1,600円、夜はカクテルを。開店してすぐ満席になるので予約を。通路は狭め、当日キャンセルは1人1,000円。火曜休み。',
  });
}

// ================================================================ 京極かねよ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26001330/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://kyogoku-kaneyo.co.jp/';
  const H = day(['11:30', '15:30'], ['17:00', '20:30']);
  put({
    id: 'kyoto_kyogoku_kaneyo', name: '京極かねよ (Kyogoku Kaneyo)', category: 'OMNI',
    lat: 35.007654, lng: 135.767947, cuisine_type: 'unagi',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: eel glazed in a soy-based tare, served over rice (official site; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: eel, egg, liver soup, carp (reviews).',
    hours_raw: 'Tabelog: 11:30–15:30 (last order 15:00) and 17:00–20:30 (last order 20:00); closed Wednesday (monthly closures on the official site); may close in typhoons; phone after 14:00. Foreign-booking policy (Tabelog, English auto-translation): "For inbound customers, please make reservations for seats only through our website, rather than for course meals." Cancellation policy (official site): sets and courses 100% on the day, 50% the day before; seat-only bookings ¥3,000 a person on the day. Unannounced lateness over 30 minutes counts as a cancellation. 40 seats — tables downstairs, tatami upstairs (where families with small children are seated; no children’s chairs); non-smoking; cards and PayPay; take-out and delivery.',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Rokkaku-Shinkyogoku — 7 min walk from Kyoto Shiyakusho-mae Stn; 10 min from Kawaramachi',
    cuisine: 'A Meiji-era eel house grilling Edo-style — split down the back, white-grilled, steamed, then glazed in a tare topped up since the founding — with eel from Shizuoka and Kyushu (official site) · the signature kinshi-don: an unadon under a huge Kyoto-style dashimaki that spills over the bowl, regular ¥3,000 (October 2026) · liver soup, egg soup ¥450, eel chawanmushi with two big pieces, grilled liver, carp sashimi (October 2026) · loach dishes (Tabelog)',
    website: SITE, gmaps: gm('京極かねよ 松ヶ枝町'), menu_url: SITE + 'menu-2023/',
    notes: '[Unagi · Rokkaku-Shinkyogoku, a Meiji-era eel house] A Meiji-founded eel restaurant off Shinkyogoku with a Taisho-era interior, famous for its kinshi-don — eel over rice buried under a dashimaki that overflows the bowl (¥3,000). Listed in the Michelin Guide Kyoto-Osaka 2026; rakugo nights upstairs each month. Overseas guests are asked to book seats only, through its website. Strict cancellation fees. Some find the egg overwhelms the eel. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Per the official site: founded in the Meiji era, an eel specialist whose craftsmen grill Shizuoka and Kyushu eel Edo-style with a secret tare topped up since the founding; the kinshi-don with Kyoto-style dashimaki is the favourite; the retro interior is unchanged since the Taisho era, and the upstairs tatami room hosts a monthly rakugo night (かねよ寄席). It notes selection for the Michelin Guide Kyoto-Osaka 2026, ten straight years in the Michelin Guide, a 2024 Trip.Gourmet award, and a JAPAN FOOD SELECTION gold for its kabayaki.',
      philosophy: 'Official site: 「100年続く変わらぬ味を守り続けてまいる」 — keeping a taste unchanged for a hundred years.',
      specialty: 'Kinshi-don.',
      anecdotes: [
        { text: 'October 2026: "The egg was so large that it overflowed from the bowl, and its firm texture made it quite satisfying. However, this meant that the flavor of the eel was somewhat overshadowed."', source: R + 'B537799284/' },
        { text: 'A family regular, October 2026: "They are also very child-friendly, and we received origami souvenirs as a gift."', source: R + 'B264497827/' },
        { text: 'A diner who had passed it since primary school on the way to a nearby cemetery finally ate there in October 2026, over carp sashimi, grilled liver and beer.', source: R + 'B537677752/' },
      ],
      japanese_sources_summary: '公式サイト (kyogoku-kaneyo.co.jp): 日本一の鰻・京極かねよ、創業明治の老舗のうなぎ料理専門店、静岡と九州産のうなぎ、創業からつぎ足しの秘伝のタレ、きんし丼 (京風だし巻きのせ) が人気、大正時代から変わらないレトロな店内、2階座敷で毎月落語の「かねよ寄席」、ミシュランガイド京都・大阪2026に選出、ミシュランに10年連続掲載、2024年 Trip.Gourmet アワード、鰻蒲焼き (上) が JAPAN FOOD SELECTION 金賞、江戸流 (背開き、白焼き、蒸してタレで本焼き)、キャンセルポリシー (セット・コース 当日100%・前日50%、席のみ予約 当日1名3,000円)、英語・中国語の予約ページ。食べログ: うなぎ・丼・どじょう、中京区六角通新京極東入ル松ヶ枝町456、京都市役所前駅から徒歩7分、11:30〜15:30 (L.O. 15:00)・17:00〜20:30 (L.O. 20:00)、水曜休み、電話は14時以降、40席 (1階テーブル、2階座敷)、子供用の椅子なし (子連れは2階座敷へ)、海外からの客は公式サイトから席のみの予約を、禁煙、カード・PayPay可、テイクアウト・デリバリー。口コミ (2026年10月、英語): きんし丼 並3,000円、玉子が丼からあふれる、肝吸い、玉子のお吸い物450円、鰻入りの茶碗蒸し、肝焼き、鯉の洗い、家族連れに親切で折り紙のお土産、玉子で鰻の味が負けるという声、雨でも行列。',
      confidence: 'high', sources: [SITE, TB, R + 'B264497827/', R + 'B378685413/', R + 'B521653165/', R + 'B537342674/', R + 'B537677752/', R + 'B537799284/', R + 'B537983920/', R + 'B538009548/', R + 'B538015544/', R + 'B538476653/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Policy for overseas guests: "please make reservations for seats only through our website, rather than for course meals" (Tabelog, English auto-translation). English and Chinese booking pages and menus on the official site.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区六角通新京極東入ル松ヶ枝町456',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with a November 2026 notice; Tabelog reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.007601, 135.767958), moved 6m north to (35.007654, 135.767947) because the Tabelog point sat 1.1m from ChIJDZ5uC-sJAWARnAYxIvm8ajk (KAWARAMACHI BEEF-TEI, next door at 松ケ枝町455); now 7.1m from it and 6.4m from kyr_chinyu_kawaramachi_rokka; GSI 京都府京都市中京区松ケ枝町456番地 (lot) 1m from the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B378685413/', R + 'B538476653/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('きんし丼', '', 'Kinshi-don (eel rice bowl under a large dashimaki), regular', '¥3,000', 'Unagi', 'no', 'no', 'October 2026.', 'unadon'),
      it('', '', 'Egg soup', '¥450', 'Sides', 'ask', 'no', 'October 2026.', 'soup'),
    ] }, {
    cuisine: '明治創業の鰻屋で、背開きにして白焼き、蒸してから創業以来つぎ足しのタレで本焼きする江戸流。鰻は静岡と九州産 (公式サイト)・名物はきんし丼。鰻丼の上に丼からあふれる大きな京風だし巻き、並3,000円 (2026年10月)・肝吸い、玉子のお吸い物450円、鰻が2切れ入った茶碗蒸し、肝焼き、鯉の洗い (2026年10月)・どじょう料理も (食べログ)',
    neighborhood: '六角新京極。京都市役所前駅から徒歩7分、河原町から10分',
    gf_detail: 'グルテンフリーではない: 醤油ベースのタレで焼いた鰻をご飯に (公式サイト、口コミ)。',
    vegan_detail: 'ヴィーガン不可: 鰻、卵、肝吸い、鯉 (口コミ)。',
    notes: '[鰻・六角新京極、明治創業の鰻屋] 新京極近く、大正時代のままの店内の明治創業の鰻屋。名物は丼からあふれるだし巻きの下に鰻が隠れたきんし丼 (3,000円)。ミシュランガイド京都・大阪2026に掲載、2階では毎月落語の寄席も。海外からの客は公式サイトから席のみの予約をとの方針。キャンセル料は厳しめ。玉子で鰻の味が負けるという声も。水曜休み。',
  });
}

// ================================================================ 権太呂 四条本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26001546/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://gontaro.co.jp';
  const H = day(['11:00', '21:30']);
  put({
    id: 'kyoto_gontaro_shijo_honten', name: '権太呂 四条本店 (Gontaro Shijo Honten)', category: 'OMNI',
    lat: 35.004375, lng: 135.765474, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat udon and blended soba, tempura, and a soy-and-dashi broth (official site; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the broth is kombu and bonito (official site); udon-suki has chicken, shrimp and clams.',
    hours_raw: 'Tabelog: 11:00–21:30 (last order 21:00); closed Wednesday, with occasional changes posted on the official site. Reservations only for the Gontaro nabe (udon-suki) courses, not seats only. 110 seats over several floors — tables on the ground floor, sunken kotatsu on the 2nd, banquet rooms above, a tea room on the 4th; private rooms for 10–48; non-smoking; English and picture menus; children welcome; cards, e-money and most QR. Service charge: none — Tabelog’s Japanese original says 「なし」 (the English auto-translation wrongly says one is added). Prices revised in September 2026 (official site). Opened 14 December 1960 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shijo-Fuyacho, next to Nishiki Market — 5 min walk from Kawaramachi Stn',
    cuisine: 'Udon, soba and udon-suki built on a golden kombu-and-bonito dashi drawn each morning (official site) · Gontaro nabe (udon-suki course) with clams, chicken, vegetables, shrimp and udon (October 2026) · keiran udon ¥1,300 (September 2026), nabeyaki udon ¥2,000 (October 2026), zaru soba ¥1,000 and inaka soba with grated daikon ¥1,000 (2026), tempura with grated daikon ¥1,850 (September 2026), tempura-soba gozen with soba-mame tofu and kayaku rice (October 2026) · small potatoes simmered in the broth then fried ¥700, soba-miso tofu ¥400 (October 2026)',
    website: SITE, gmaps: gm('権太呂 四条本店 桝屋町'), menu_url: SITE + '/kyoto/',
    notes: '[Udon & soba · Shijo-Fuyacho by Nishiki Market, since 1960] The main shop of Kyoto’s Gontaro, a five-storey sukiya-style house beside Nishiki Market, serving udon and soba in its "golden" morning dashi — keiran udon, nabeyaki, zaru soba from ¥1,000 — and the Gontaro nabe udon-suki for groups (the only thing you can book). One of three Gontaro shops with Okazaki and Kinkakuji. One diner found the dashi under the grated daikon weak (September 2026). Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Run by 株式会社権太呂 (president 藤本和洋, official site)'], origin: null,
      background: 'Opened 14 December 1960 (Tabelog). Per the official site: Gontaro runs three shops in Kyoto — this Shijo main shop, Okazaki and Kinkakuji — plus mail order; the main shop next to Nishiki Market is a modern five-storey building with a full sukiya-style interior; the "golden" dashi starts each morning with water and kombu, then bonito flakes. The site carries a monthly blog by the president, 藤本和洋.',
      philosophy: 'Official site: 「味は心 料理は心の表現」 — flavour is heart; cooking shows the cook’s heart.',
      specialty: 'Gontaro nabe (udon-suki); keiran udon.',
      anecdotes: [
        { text: 'September 2026: a la carte prices "a bit on the higher side," and the dashi under the grated daikon "tasted weak."', source: R + 'B535743542/' },
        { text: 'October 2026: the nabeyaki udon at ¥2,000 "may seem pricey," but "I found it completely justified after tasting it."', source: R + 'B537737119/' },
      ],
      japanese_sources_summary: '公式サイト (gontaro.co.jp): 株式会社権太呂、京都市内に3店舗 (四条本店、岡崎店、金閣寺店) と通信販売、本店は錦市場のすぐ隣で地上5階・地下1階の近代建築ながら内装は本格的な数寄屋づくり、「黄金の一汁」(早朝から水と昆布、削り節)、味は心、社長 藤本和洋のブログ、2026年9月に全店価格改定。食べログ: うどんすき・そば・うどん、中京区麸屋町通四条上ル桝屋町521、11:00〜21:30 (L.O. 21:00)、水曜休み、予約は権太呂なべのみ、110席、個室10〜48名、禁煙、英語・写真付きメニュー、子供可、カード・電子マネー・QR可、サービス料は原文で「なし」、1960年12月14日オープン。口コミ (2026年9月〜11月、英語): けいらんうどん1,300円、鍋焼きうどん2,000円、ざるそば1,000円、田舎そばのおろし1,000円、おろし天ぷら1,850円、天ぷらそば御膳 (そば豆腐、かやくご飯)、小芋の唐揚げ700円、そば味噌豆腐400円、権太呂なべのコース (蛤、鶏、野菜、海老、うどん)、1階テーブル・2階掘りごたつ・3〜4階宴会、4階に茶室、卓上に原了郭の黒七味、アラカルトはやや高め、おろしで出汁が薄く感じたという声。',
      confidence: 'high', sources: [SITE, TB, R + 'B527813706/', R + 'B535743542/', R + 'B535833567/', R + 'B537154777/', R + 'B537314583/', R + 'B537349837/', R + 'B537693582/', R + 'B537737119/', R + 'B538293252/', R + 'B538712107/'] },
    cultural_comfort: { level: 'english', note: 'English and picture menus (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区麸屋町通四条上ル桝屋町521',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with November 2026 posts; Tabelog reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.004375, 135.765474); cross-checked: GSI 京都府京都市中京区桝屋町521番地 (lot) 18m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B527813706/', R + 'B537349837/', R + 'B537737119/'],
    price_note: 'Prices from 2026 reviews; revised September 2026.', last_checked: TODAY, items: [
      it('けいらんうどん', '', 'Keiran udon (egg-drop thickened broth)', '¥1,300', 'Udon', 'no', 'no', 'September 2026.', 'udon'),
      it('鍋焼きうどん', '', 'Nabeyaki udon', '¥2,000', 'Udon', 'no', 'no', 'October 2026.', 'udon'),
      it('', '', 'Inaka soba with grated daikon (cold)', '¥1,000', 'Soba', 'no', 'no', 'October 2026.', 'soba'),
      it('権太呂なべ', '', 'Gontaro nabe (udon-suki course)', null, 'Nabe', 'no', 'no', 'October 2026; reservations only for this.', 'udonsuki'),
    ] }, {
    cuisine: '毎朝引く昆布と鰹の「黄金の一汁」で作るうどん、そば、うどんすき (公式サイト)・権太呂なべ (うどんすきのコース) は蛤、鶏、野菜、海老、うどん (2026年10月)・けいらんうどん1,300円 (2026年9月)、鍋焼きうどん2,000円 (2026年10月)、ざるそば1,000円と田舎そばのおろし1,000円 (2026年)、おろし天ぷら1,850円 (2026年9月)、天ぷらそば御膳 (そば豆腐、かやくご飯) (2026年10月)・出汁で煮てから揚げる小芋の唐揚げ700円、そば味噌豆腐400円 (2026年10月)',
    neighborhood: '四条麩屋町、錦市場の隣。河原町駅から徒歩5分',
    gf_detail: 'グルテンフリーではない: 小麦のうどん、つなぎ入りのそば、天ぷら、醤油と出汁のつゆ (公式サイト、口コミ)。',
    vegan_detail: 'ヴィーガン不可: 出汁は昆布と鰹 (公式サイト)。うどんすきには鶏、海老、蛤。',
    notes: '[うどん・そば・四条麩屋町、錦市場の隣、1960年から] 錦市場の隣、5階建ての数寄屋づくりの権太呂の本店。毎朝引く「黄金」の出汁で、けいらんうどん、鍋焼き、1,000円からのざるそばなど。予約できるのはグループ向けのうどんすき「権太呂なべ」のみ。岡崎、金閣寺とあわせて3店舗。おろしで出汁が薄く感じたという声も (2026年9月)。水曜休み。',
  });
}

save();
