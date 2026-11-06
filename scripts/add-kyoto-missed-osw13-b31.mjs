// Kyoto "what did we miss" pass (kyoto-missed) — lane osw13 (Tabelog id mod 6 = 0), batch 31.
// Kyoto priority (Greg, 2026-11-05): 2 shops from `next core`, 2 from `next notable`, lane only.
//   core:    + 鮨 今尽 Sushi Imajin (10-seat Edomae counter in a restored townhouse, opened January 2025)
//            + 貝と白ワインのバル KAKIMARU 綾小路店 (oyster and white-wine bar open to 2 am)
//   notable: + 天婦羅処 京林泉 Kyorinsen (tempura in Hotel Granvia Kyoto; sister of the ryotei 京大和; Tempura 100)
//            + 三嶋亭 本店 Mishima Tei (sukiyaki since 1873 on Teramachi-Sanjo; fifth-generation 三嶋太郎)
//   None is in data/kyoto.json: grep by name (今尽/Imajin, KAKIMARU/カキマル, 林泉/Kyorinsen, 三嶋亭/Mishima) and
//   address (橘町442, 塩屋町66, Hotel Granvia, 桜之町405) found none. Tabelog URLs copied from each listing.txt line 1.
//   None of the four pages asks diners not to post on gourmet sites (Greg, 2026-11-05).
//   Pins: GSI only (no OSM). No new pin within 3 m of another (check-stacked-pins run before hand-off).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-31');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 鮨 今尽
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26042340/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '23:00']);
  put({
    id: 'kyoto_sushi_imajin', name: '鮨 今尽 (Sushi Imajin)', category: 'OMNI',
    lat: 35.000821, lng: 135.766406, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information; the omakase opens with cooked dishes (simmered, grilled, chawanmushi, sashimi with ponzu and a house sauce) before the nigiri (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish omakase of small dishes and about 14 pieces of nigiri (2026 reviews).',
    hours_raw: 'Tabelog: every day 17:30–23:00; closed irregularly. Bookings taken; parties of 7 or more should confirm by phone (Tabelog). Omakase only: ¥22,000 in April 2026, raised to ¥28,000 by then (April 2026 review); a June 2026 diner noted a price rise from May. 10 counter seats; non-smoking; private hire possible (Tabelog). Children: ask in advance (Tabelog). Cards including UnionPay, no e-money or QR (Tabelog). Opened 11 January 2025 (Tabelog). On Gokomachi-dori south of Bukkoji, two doors from the bar Rocking Chair, behind a hard-to-spot entrance; 4 min walk from Hankyu Kawaramachi Stn exit 10 (Tabelog; April 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gokomachi-dori south of Bukkoji — 4 min walk from Hankyu Kawaramachi Stn',
    cuisine: 'Edomae sushi omakase at a counter in a restored townhouse (2026 reviews) · about four small dishes, then around 14 nigiri on red-vinegar rice from lean tuna through chu-toro to o-toro, finishing with soup and tamago (April 2026) · dishes seen in 2026: salted ginkgo, sashimi with new onion, ponzu and a house sauce, sake-steamed sea bream, chawanmushi with scallop and surf clam, grilled swordfish, grilled surf-clam nigiri, sumi-ika, aji · omakase ¥22,000, then ¥28,000 (April 2026) · sake such as Aramasa around ¥1,000 a glass (April 2026), shochu, wine',
    website: TB, gmaps: gm('鮨 今尽 京都'), menu_url: TB,
    notes: "[Sushi · Gokomachi-Bukkoji, a young Edomae counter] A 10-seat sushi counter opened in January 2025 in a carefully restored old townhouse with a garden and a bar counter. A twenty-something chef serves an Edomae omakase on red-vinegar rice — small dishes, then around 14 nigiri climbing from lean tuna to o-toro — and speaks fluent English with overseas guests. The omakase rose from ¥22,000 to about ¥28,000 in 2026. One April 2026 diner found the quality uneven and the part-time service weak; most praise it. Evenings daily; book ahead.",
    chef_bio: { chef_name: null, roles: ['Head chef (unnamed), twenty-something per an April 2026 review'], origin: null,
      background: 'An April 2026 review describes a beautifully restored townhouse over 200 years old (a January 2026 diner wrote 100 years), brought back by sukiya craftsmen, with a garden, a bar counter and a large private room; a twenty-something head chef who had travelled as a backpacker, speaks fluent English with overseas guests, and named the Shimbashi sushi shop "Tomidokoro" as a favourite, so the sushi follows the Edomae style. A January 2025 diner heard the shop works closely with renowned Toyosu suppliers. A January 2026 diner took the name Imajin to mean making the most of the moment. Tabelog gives the opening day as 11 January 2025.',
      philosophy: null,
      specialty: 'Edomae nigiri on red-vinegar rice.',
      anecdotes: [
        { text: '"The young chef\'s service is still a bit awkward, but it\'s genuinely pleasant. Unfortunately, the level of service from the part-time staff is disappointing." — April 2026; the same diner found the quality uneven.', source: R + 'B526275638/' },
        { text: 'A June 2026 regular found the rice softer than before and, as on the first visit, every other guest from overseas.', source: R + 'B527126127/' },
        { text: 'An April 2026 diner found the drinks slow to arrive because the chef handles everything alone, but thought the sushi worth the wait.', source: R + 'B529010834/' },
      ],
      japanese_sources_summary: '食べログ: 寿司、下京区御幸町通仏光寺下ル橘町442、毎日17:30〜23:00、不定休、予約可 (7名以上は電話で確認)、10席、貸切可、禁煙、子供は事前に相談、カード可 (銀聯も)、電子マネー・QR 不可、2025年1月11日オープン。口コミ (2025年1月〜2026年9月、英語): 築100年 (別の口コミでは200年以上) の町家を数寄屋の職人が改装、庭、バーカウンター、大きな個室、20代の大将、英語が堪能、新橋の「Tomidokoro」が好き、江戸前、赤酢のシャリ、つまみ4品ほどと握り14貫、22,000円から28,000円に、Aramasa などの日本酒が1,000円ほど、豊洲の仲卸とのつながり、海外からの客が多い。',
      confidence: 'medium', sources: [TB, R + 'B499348833/', R + 'B523724269/', R + 'B526275638/', R + 'B526658034/', R + 'B527126127/', R + 'B529010834/', R + 'B530341980/', R + 'B532020925/', R + 'B536647277/', R + 'B538071563/'] },
    cultural_comfort: { level: 'english', note: 'The head chef and some staff speak fluent English with overseas guests (2026 reviews); omakase only, booked ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区御幸町通仏光寺下ル橘町442',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.000821, 135.766406); cross-checked: GSI 京都府京都市下京区橘町442番地 (lot) 19m; kyoto_bar_rocking_chair (橘町434-2) is 18 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B526658034/', R + 'B527126127/'],
    price_note: 'No published menu; the April 2026 review gives ¥22,000 at its visit and ¥28,000 afterwards; a June 2026 review notes a rise from May.', last_checked: TODAY, items: [
      it('', '', 'Omakase (small dishes, about 14 nigiri, soup, tamago)', '¥28,000', 'Omakase', 'ask', 'no', 'From about May 2026; ¥22,000 before.', 'omakase'),
    ] }, {
    cuisine: '改装した町家のカウンターの江戸前寿司のおまかせ (2026年の口コミ)・つまみ4品ほど、赤酢のシャリで赤身、中トロ、大トロと進む握り14貫ほど、締めにお椀と玉子 (2026年4月)・2026年の料理: 銀杏の塩、新玉ねぎとポン酢と特製のたれのお造り、鯛の酒蒸し、帆立と北寄貝の茶碗蒸し、焼いた北寄貝の握り、墨烏賊、鯵・おまかせ22,000円、のちに28,000円 (2026年4月)・Aramasa などの日本酒が1杯1,000円ほど (2026年4月)、焼酎、ワイン',
    neighborhood: '仏光寺の南の御幸町通。阪急京都河原町駅から徒歩4分',
    gf_detail: '予約時に要確認。グルテンの情報はない。おまかせは握りの前に煮物、焼き物、茶碗蒸し、ポン酢と特製のたれのお造りが出る (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: つまみと握り14貫ほどの魚のおまかせ (2026年の口コミ)。',
    notes: '[寿司・御幸町仏光寺、若い大将の江戸前] 2025年1月に開いた10席の寿司カウンター。庭とバーカウンターのある、丁寧に改装した古い町家。20代の大将が赤酢のシャリで江戸前のおまかせを握り、つまみの後に赤身から大トロへと進む握りが14貫ほど。海外からの客とは流暢な英語で話す。おまかせは2026年に22,000円から28,000円ほどに。2026年4月の客は質にむらがあり、アルバイトの接客が物足りないと書いたが、多くは絶賛している。夜のみ毎日、要予約。',
  });
}

// ================================================================ 貝と白ワインのバル KAKIMARU 綾小路店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26026956/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '26:00']);
  put({
    id: 'kyoto_kakimaru_ayanokoji', name: '貝と白ワインのバル KAKIMARU 綾小路店 (Kai to Shiro Wine no Bar KAKIMARU Ayanokoji)', category: 'OMNI',
    lat: 35.002512, lng: 135.764797, cuisine_type: 'oyster',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; much of the menu is fried (fried oysters, oyster tempura, salmon katsu) or pasta (oyster carbonara, crab tomato-cream pasta), and ajillo comes with baguette (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options, but the menu is built on oysters, shellfish and seafood (2026 reviews).',
    hours_raw: 'Tabelog: every day 17:00–2:00 (food last order 1:00, drinks 1:30); closed irregularly. Bookings taken; private hire for 20–50 (Tabelog). 35 seats at tables and a counter; non-smoking; children welcome (Tabelog). Cards (VISA, Master, AMEX, UnionPay) and PayPay, no e-money (Tabelog). On Ayanokoji west of Tominokoji; 2 min walk from Hankyu Karasuma or Kawaramachi stations (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ayanokoji west of Tominokoji — 2 min walk from Hankyu Karasuma Stn',
    cuisine: 'Oyster and white-wine bar serving oysters all year, open to 2 am (2026 reviews; Tabelog) · raw oysters from several regions with toppings (salmon roe and sea urchin, meat and sea urchin), grilled, fried with shibazuke tartar, tempura; an oyster assortment of all of them · oyster carbonara, oyster risotto, cold oyster vapore, shrimp ajillo, rare salmon katsu with ikura, baby tuna sashimi, soft-shell crab tomato-cream pasta, bonito tataki; an all-oyster course and all-you-can-drink (2026 reviews) · white wines, sparkling, sake; a tequila bell on the counter · about ¥4,500 for several dishes and a drink (May 2026)',
    website: TB, gmaps: gm('KAKIMARU 綾小路店 京都'), menu_url: TB,
    notes: "[Oyster bar · Ayanokoji, oysters till 2 am] A 35-seat bar off Ayanokoji built around oysters and white wine, open from 17:00 to 2:00 every day: raw oysters from several regions, some crowned with uni and ikura or meat, plus grilled, fried and tempura oysters, oyster carbonara and risotto, and seafood such as rare salmon katsu. About ¥4,500 for a few dishes and a drink (2026). One August 2026 diner left early because of loud music and a noisy group at the counter, though the staff were polite. Reservations taken.",
    chef_bio: { chef_name: null, roles: ['Ayanokoji branch of KAKIMARU (operator not named on the sources read)'], origin: null,
      background: 'Tabelog lists the shop as the Ayanokoji branch of 貝と白ワインのバル KAKIMARU, a bar, izakaya and Italian with vegetarian options and a particular interest in wine and cocktails. Reviewers in 2026 describe oysters served year round in many forms and a lively but calm room; one August 2026 diner heard loud background music and a group of four young regulars at the counter who seemed to know the staff.',
      philosophy: null,
      specialty: 'Oyster assortment; oyster carbonara.',
      anecdotes: [
        { text: '"The bell here isn’t for calling the staff; it’s actually a tequila bell!" — May 2026.', source: R + 'B528937777/' },
        { text: 'An August 2026 diner left soon after ordering because of loud music and a noisy group at the counter, while praising the polite staff and the variety of oysters.', source: R + 'B534714945/' },
        { text: 'Two diners in October 2026 found themselves counting the oysters in the ajillo and risotto: "this one is mine."', source: R + 'B536679120/' },
      ],
      japanese_sources_summary: '食べログ: バル・居酒屋・イタリアン、下京区綾小路通富小路西入ル塩屋町66、毎日17:00〜翌2:00 (L.O. 料理1:00・ドリンク1:30)、不定休、予約可、35席 (テーブル・カウンター)、貸切20〜50名、禁煙、子供可、ベジタリアンメニューあり、カード (VISA、Master、AMEX、銀聯)・PayPay 可。口コミ (2026年5月〜10月、英語): 生牡蠣 (産地いろいろ、いくら雲丹や肉雲丹のせ)、焼き牡蠣、カキフライ (柴漬けタルタル)、牡蠣の天ぷら、牡蠣のカルボナーラ、海老のアヒージョ、レアサーモンカツ、ソフトシェルクラブのトマトクリームパスタ、テキーラベル、4,500円ほど、BGM が大きい夜も。',
      confidence: 'low', sources: [TB, R + 'B528937777/', R + 'B529142263/', R + 'B529292013/', R + 'B530409543/', R + 'B533046275/', R + 'B533690878/', R + 'B534398311/', R + 'B534714945/', R + 'B534750481/', R + 'B536679120/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A casual bar ordering à la carte; open late, bookings taken.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区綾小路通富小路西入ル塩屋町66',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.002512, 135.764797); cross-checked: GSI 京都府京都市下京区塩屋町66番地 (lot) 32m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B529292013/'],
    price_note: 'No published menu; a May 2026 diner spent about ¥4,500 on several dishes and a drink.', last_checked: TODAY, items: [
      it('', '', 'Oyster assortment (raw, grilled, fried, tempura)', '', 'Oysters', 'no', 'no', 'May 2026.', 'oyster_assortment'),
      it('', '', 'Oyster carbonara', '', 'Pasta', 'no', 'no', 'May–June 2026.', 'oyster_carbonara'),
    ] }, {
    cuisine: '一年中牡蠣が食べられる、深夜2時までの牡蠣と白ワインのバル (2026年の口コミ、食べログ)・産地の違う生牡蠣にいくら雲丹や肉雲丹のせ、焼き牡蠣、柴漬けタルタルのカキフライ、牡蠣の天ぷら、それを全部盛った牡蠣の盛り合わせ・牡蠣のカルボナーラ、牡蠣のリゾット、冷たい牡蠣のヴァポーレ、海老のアヒージョ、いくらのせのレアサーモンカツ、メジマグロのお造り、ソフトシェルクラブのトマトクリームパスタ、鰹のたたき、牡蠣づくしのコースと飲み放題 (2026年の口コミ)・白ワイン、スパークリング、日本酒、カウンターにテキーラベル・数品と1杯で4,500円ほど (2026年5月)',
    neighborhood: '富小路の西の綾小路。阪急烏丸駅から徒歩2分',
    gf_detail: '要確認。グルテンの情報はない。カキフライ、牡蠣の天ぷら、サーモンカツなどの揚げ物やパスタ (牡蠣のカルボナーラ、蟹のトマトクリーム) が多く、アヒージョにはバゲットが付く (2026年の口コミ)。',
    vegan_detail: '要確認。食べログにはベジタリアンメニューありとあるが、料理は牡蠣、貝、魚介が中心 (2026年の口コミ)。',
    notes: '[オイスターバー・綾小路、深夜2時まで牡蠣] 綾小路から入った35席の、牡蠣と白ワインのバル。毎日17時〜深夜2時。産地の違う生牡蠣 (雲丹といくらや肉をのせたものも)、焼き、フライ、天ぷら、牡蠣のカルボナーラやリゾット、レアサーモンカツなどの魚介。数品と1杯で4,500円ほど (2026年)。2026年8月の客は、大きな BGM とカウンターのにぎやかなグループで早めに店を出たが、店員は丁寧だったと書いている。予約可。',
  });
}

// ================================================================ 天婦羅処 京林泉
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26000484/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.kyoyamato.com/kyorinsen/'; const MENU = SITE + 'cuisine/';
  const H = day(['11:30', '15:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_kyorinsen_granvia', name: '天婦羅処 京林泉 (Tempura Tokoro Kyorynsen)', category: 'OMNI',
    lat: 34.98581, lng: 135.759356, cuisine_type: 'tempura',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a tempura restaurant whose courses are battered and fried, served with tempura sauce and red miso soup (official site; 2026 reviews). Guests with allergies are asked to say so in advance, and some items may then be left out (Tabelog).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the courses mix shrimp and fish with vegetables, and the tempura sauce, simmered dishes and miso soup are dashi-based (2026 reviews; official site).',
    hours_raw: 'Tabelog: lunch 11:30–15:00 (food last order 14:00), dinner 17:00–22:00 (food last order 21:00; courses 20:30); closed Monday (except public holidays) and the Tuesday after a holiday; weekend and holiday lunch in two sittings, from 11:30 and 13:30; lunch limited to 90 minutes and dinner to 120. A booking more than 20 minutes late without notice is cancelled; allergies to be notified in advance (Tabelog). Prices include a 15% service charge; à la carte only incurs a ¥1,500 table charge (Tabelog). Courses: lunch Yasaka ¥7,000, Higashiyama ¥5,000, weekday Kyo-gozen ¥3,500; dinner Tsuki ¥15,000, Yuki ¥12,000, Hana ¥9,000 (official site); Higashiyama ¥5,500 and a ¥1,000 discount on the Yuki course before 18:00 (October–November 2026 reviews). 27 seats: 6 (plus 1) at the counter and 21 at tables; non-smoking; wheelchair accessible; children welcome with a kids’ menu (Tabelog). Cards, IC, QR including Alipay and WeChat Pay (Tabelog). Parking at the JR Kyoto Station building with validation (Tabelog). Floor M3 of Hotel Granvia Kyoto, 1 min from the JR Kyoto central gate (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kyoto Station, Hotel Granvia Kyoto — 1 min from the JR central gate',
    cuisine: 'Tempura from a sister of the ryotei 京大和 (founded Meiji 10), fried in a house blend of white cottonseed oil and pure sesame oil and served with Mongolian lake salt (official site) · lunch: weekday Kyo-gozen ¥3,500 (yuba tofu, simmered vegetables, shrimp and seasonal vegetable tempura, rice, red miso soup, pickles, dessert), Higashiyama ¥5,000, Yasaka ¥7,000; dinner: Hana ¥9,000, Yuki ¥12,000, Tsuki ¥15,000 (official site) · 2026 courses: sweet shrimp, kuruma prawn, shrimp in shiso, ginkgo, Manganji pepper, Kyoto long eggplant, lotus root with curry salt, shiitake, mukago, maitake, hamo, tachiuo, Biwa trout in shiso, amadai, roasted sweet potato; a choice of kakiage rice bowl or chirimen-jako rice to finish · salt, curry salt, lemon or tempura sauce suggested piece by piece (November 2026)',
    website: SITE, gmaps: gm('京林泉 ホテルグランヴィア京都'), menu_url: MENU,
    notes: "[Tempura · Kyoto Station, the Granvia's tempura counter] A tempura restaurant inside Hotel Granvia Kyoto, a minute from the JR gates and a sister of the old ryotei 京大和: a seven-seat counter and tables, a house blend of cottonseed and sesame oil, and pieces matched to salt, curry salt, lemon or tempura sauce. Weekday lunch Kyo-gozen ¥3,500, lunch courses ¥5,000–7,000, dinner ¥9,000–15,000. Tempura Tabelog 100 2022, 2023, 2025. Closed Monday; book the counter to watch the frying.",
    chef_bio: { chef_name: null, roles: ['Tempura restaurant of 京大和 (Kyo Yamato group)'], origin: null,
      background: 'Per the official site: Kyorinsen is a sister restaurant of 京大和, a ryotei in Higashiyama founded in Meiji 10 (1877); it buys ingredients from trusted suppliers, fries in its own blend of white cottonseed oil and premium pure sesame oil, light and not heavy on the stomach, and serves a mineral-rich natural salt from a Mongolian salt lake. Tabelog gives the opening day as 11 September 1997 and lists it as Tempura "Tabelog 100" 2022, 2023 and 2025.',
      philosophy: 'Per the official site: tempura is the simplest way to concentrate an ingredient’s flavour — frying at the right temperature for the right time, a judgement only a professional can make.',
      specialty: 'Seasonal tempura courses; kakiage rice bowl.',
      anecdotes: [
        { text: '"As a left-handed person, I appreciated that they served the dishes in reverse order halfway through." — November 2026.', source: R + 'B538577754/' },
        { text: 'A September 2026 diner liked the light batter but would have liked a juicier pear in the seasonal dessert.', source: R + 'B536060679/' },
        { text: 'In the busy November 2026 season the room stayed calm, with no line outside, because most guests had booked.', source: R + 'B538603656/' },
      ],
      japanese_sources_summary: '公式サイト (kyoyamato.com/kyorinsen): 京林泉は明治10年創業、京都東山の料亭「京大和」の姉妹店、軽やかで繊細な天ぷら、最適な温度・最適な時間でカラッと揚げる、信頼のおける仕入先、白絞油と最高級の太白胡麻油を独自に配合した揚げ油、モンゴルの塩湖の天然塩。昼のコース「八坂」7,000円・「東山」5,000円、平日限定「京御膳」3,500円、夕食コース「月」15,000円・「雪」12,000円・「花」9,000円 (税込)。食べログ: 天ぷら、ホテルグランヴィア京都 M3F、11:30〜15:00 (L.O. 14:00)・17:00〜22:00 (L.O. 21:00、コース20:30)、月曜 (祝日を除く) と祝日翌日の火曜休み、土日祝の昼は11:30と13:30の2部制、昼90分・夜120分、アレルギーは事前に、20分以上の遅刻はキャンセル扱い、サービス料15%込み、単品のみはテーブルチャージ1,500円、27席 (カウンター6+1、テーブル21)、禁煙、車椅子可、子供可・キッズメニュー、1997年9月11日オープン、天ぷら百名店 2022・2023・2025。口コミ (2026年9月〜11月、英語): 京御膳3,500円、東山5,500円、雪のコースは18時前に1,000円引き、かき揚げ丼かちりめんじゃこご飯、塩・カレー塩・レモン・天つゆ。',
      confidence: 'medium', sources: [TB, SITE, MENU, R + 'B536060679/', R + 'B536619065/', R + 'B536669351/', R + 'B536852278/', R + 'B536893132/', R + 'B537481769/', R + 'B538577754/', R + 'B538592489/', R + 'B538596835/', R + 'B538603656/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Hotel restaurant with set courses and a photo menu (Tabelog); book ahead, especially for the counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市下京区烏丸通塩小路下ル JR京都駅中央口 ホテルグランヴィア京都 M3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through November 2026; Tempura Tabelog 100 2025.' },
    pin_source: `Tabelog ${TB} (34.985810, 135.759356); GSI resolves the lot-less listing address only to 下京区 (ward), so the pin rests on the Tabelog point inside the station hotel; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU],
    price_note: 'Official site prices, tax and the 15% service charge included; an October–November 2026 review paid ¥5,500 for the Higashiyama course.', last_checked: TODAY, items: [
      it('京御膳', '', 'Weekday lunch Kyo-gozen', '¥3,500', 'Lunch', 'no', 'no', 'Weekdays only.', 'kyo_gozen'),
      it('東山', '', 'Lunch course Higashiyama', '¥5,000', 'Lunch', 'no', 'no', '', 'higashiyama'),
      it('八坂', '', 'Lunch course Yasaka', '¥7,000', 'Lunch', 'no', 'no', '', 'yasaka'),
      it('花', '', 'Dinner course Hana', '¥9,000', 'Dinner', 'no', 'no', '', 'hana'),
      it('雪', '', 'Dinner course Yuki', '¥12,000', 'Dinner', 'no', 'no', '¥1,000 off before 18:00 (October 2026).', 'yuki'),
      it('月', '', 'Dinner course Tsuki', '¥15,000', 'Dinner', 'no', 'no', '', 'tsuki'),
    ] }, {
    cuisine: '料亭「京大和」(明治10年創業) の姉妹店の天ぷら。白絞油と太白胡麻油の独自の配合で揚げ、モンゴルの塩湖の塩で (公式サイト)・昼: 平日限定「京御膳」3,500円 (寄せ湯葉豆腐、炊き合わせ、海老と季節の野菜の天ぷら、ご飯、赤だし、香の物、デザート)、「東山」5,000円、「八坂」7,000円・夜: 「花」9,000円、「雪」12,000円、「月」15,000円 (公式サイト)・2026年のコース: 甘海老、車海老、海老の大葉巻き、銀杏、万願寺唐辛子、京の長茄子、カレー塩の蓮根、椎茸、むかご、舞茸、鱧、太刀魚、大葉で巻いた琵琶鱒、甘鯛、焼き芋、締めはかき揚げ丼かちりめんじゃこご飯・塩、カレー塩、レモン、天つゆを1品ずつすすめてくれる (2026年11月)',
    neighborhood: '京都駅、ホテルグランヴィア京都。JR 中央口から徒歩1分',
    gf_detail: 'グルテンフリーではない: 衣をつけて揚げる天ぷらのコースで、天つゆと赤だしが付く (公式サイト、2026年の口コミ)。アレルギーは事前に伝えるよう求められ、内容によっては提供を控える品がある (食べログ)。',
    vegan_detail: 'ヴィーガン不可: コースは海老や魚と野菜の組み合わせで、天つゆ、炊き合わせ、味噌汁はだしを使う (2026年の口コミ、公式サイト)。',
    notes: '[天ぷら・京都駅、グランヴィアの天ぷら] JR の改札から1分、ホテルグランヴィア京都の中の天ぷら店で、老舗料亭「京大和」の姉妹店。カウンター7席とテーブル、白絞油と胡麻油の独自の配合で揚げ、1品ずつ塩、カレー塩、レモン、天つゆを合わせる。平日の昼の京御膳3,500円、昼のコース5,000〜7,000円、夜9,000〜15,000円。天ぷら百名店 2022・2023・2025。月曜休み。揚げる様子を見るならカウンターを予約。',
  });
}

// ================================================================ 三嶋亭 本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26000646/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.mishima-tei.co.jp/'; const ABOUT = SITE + 'aboutus/';
  const H = day(['11:00', '21:00']);
  put({
    id: 'kyoto_mishima_tei_honten', name: '三嶋亭 本店 (Mishima Tei Honten)', category: 'MOM_AND_POP',
    lat: 35.00855, lng: 135.767059, cuisine_type: 'sukiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: the sukiyaki is cooked in a secret warishita sauce, and the pot includes wheat gluten (fu) (official site; July 2026 review); appetisers have included tempura and soba (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a beef restaurant — sukiyaki, water-boiled and oil-grilled wagyu courses, with raw egg (official site; 2026 reviews).',
    hours_raw: 'Tabelog: every day 11:00–21:00. Bookings online up to a month ahead, by phone (075-221-0003) for the same day or within a month (official site); a September 2026 family booking a month ahead could not get the time it wanted. Courses (May 2025, tax and service included): lunch course ¥8,591 (sukiyaki, oil-grilled or water-boiled); Tsuki course ¥17,545; Premium Tsuki ¥21,780; snowy pot November–February (Tabelog). Service charge 10% (Tabelog). A Meiji-era building, not barrier-free: shoes off on the ground floor and up the stairs; socks please on the tatami (Tabelog). 250 seats with private rooms; all rooms now have tables (October 2026); non-smoking (Tabelog). No children’s menu; a ¥1,210 seat fee from age 3 (Tabelog). Cards, IC and QR including Alipay and WeChat Pay (Tabelog). On Teramachi south of Sanjo; 5 min walk from Kyoto Shiyakusho-mae Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Teramachi south of Sanjo — 5 min walk from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Sukiyaki since 1873, in the founding building, with black wagyu chosen and aged by the house and a secret warishita (official site) · staff cook at the table: sugar in the pan, the meat seared, the sauce poured, then dipped in raw egg; vegetables such as grilled tofu, Kujo leek, shungiku, shiitake, fu, shirataki and onion (2026 reviews) · lunch course ¥8,591; Tsuki ¥17,545; Premium Tsuki ¥21,780 (May 2025, tax and service included) — sukiyaki, oil-grilled (oil-yaki) or water-boiled (mizutaki) wagyu; Hana course with appetisers, sweets and usucha devised by the fifth generation (official site) · shigure-ni, rice, red miso soup, pickles; melon to finish all year (2026 reviews)',
    website: SITE, gmaps: gm('三嶋亭 本店 寺町三条'), menu_url: TB,
    notes: "[Sukiyaki · Teramachi-Sanjo, since 1873] Kyoto's founding sukiyaki house, opened in 1873 after the founder learned gyunabe in Nagasaki, still in its Meiji sukiya building with a courtyard garden: up steep stairs to tatami rooms (now with tables), where staff cook black wagyu with sugar and the secret warishita at the table and you dip it in raw egg. Lunch course about ¥8,600; dinner courses ¥17,500–21,800 (2025). Tabelog Award Bronze 2017–2019. One October 2026 diner found the premium course not worth its price. Daily 11:00–21:00; book ahead.",
    chef_bio: { chef_name: '三嶋太郎', roles: ['Fifth-generation head (五代目主人), per the official site'], origin: null,
      background: 'Per the official site: the founder 三嶌兼吉, who served a court-noble’s samurai, learned gyunabe in Nagasaki together with the founder’s wife てい and opened Mishima Tei here on Teramachi-Sanjo in Meiji 6 (1873); the sukiya interior — garden, railings, ceilings, lattices — is mostly as it was at the founding; the house selects black wagyu from across Japan regardless of origin and ages it in its own way, cooking the sukiyaki on electric heaters that act like charcoal. The fifth generation, 三嶋太郎, refined the secret warishita, began training in Japanese cuisine, tea and ikebana eight years before the page was written, and devised the kaiseki-style Hana course with appetisers, sweets and usucha. A sister restaurant, 翁樹庵, is introduced on the site. Tabelog Award Bronze 2017–2019; Hot Pot "Tabelog 100" 2024 and 2026.',
      philosophy: 'Per the official site: keeping the good things of old Kyoto, which is now harder than making new ones; the fifth generation aims to keep evolving while carrying on the tradition.',
      specialty: 'Sukiyaki of black wagyu with the house warishita.',
      anecdotes: [
        { text: 'An October 2026 diner on the ¥21,780 Premium Tsuki course found the appetisers unremarkable and the Hokkaido beef good but not extraordinary, and suspected tourist pricing.', source: R + 'B537944420/' },
        { text: 'A diner returning after decades found all the rooms converted to tables instead of seiza — October 2026.', source: R + 'B538273057/' },
        { text: 'A September 2026 family found staff waiting at the entrance at the booked time, "very well-dressed and attentive"; rice and egg refills were offered.', source: R + 'B536312967/' },
      ],
      japanese_sources_summary: '公式サイト (mishima-tei.co.jp): 創業明治6年 三嶋亭、霜降り牛すき焼き、京懐石・オイル焼き・水炊き、明治の文明開化以来150余年の伝統、数寄屋造りの店内の坪庭・欄干・天井・格子はほとんどが創業当時のまま、初代三嶌兼吉が妻“てい”と長崎で牛鍋を学び、明治六年に寺町三条で創業、現在五代目、産地にこだわらず全国から厳選した黒毛和牛を独自の方法で熟成、炭火に近い効果の電熱器、割下は五代目が進化させた秘伝のレシピ、五代目 三嶋太郎が八年前から日本料理・茶の湯・生け花を学び懐石仕立ての「花コース」を考案、姉妹店 翁樹庵、ネットで1ヶ月先まで予約、当日や1ヶ月以内は電話。食べログ: すき焼き・日本料理・牛肉料理、中京区寺町通三条下ル桜之町405、毎日11:00〜21:00、予約可、明治の建物でバリアフリーではない、1階で靴を脱ぎ階段で上へ、畳なので靴下を、サービス料10%、250席、個室あり、禁煙、お子様メニューなし (3歳以上は席料1,210円)、カード・電子マネー・QR 可、2025年5月の料金: プレミアム月コース21,780円、月コース17,545円、昼のコース8,591円 (税・サービス料込み)、食べログアワード ブロンズ 2017〜2019、すき焼き・しゃぶしゃぶ百名店 2024・2026。口コミ (2026年7月〜10月、英語): 砂糖と割下で焼き溶き卵で、九条ネギ・焼き豆腐・春菊・麩、メロン、全室テーブル席に。',
      confidence: 'medium', sources: [TB, SITE, ABOUT, R + 'B505847009/', R + 'B531307218/', R + 'B532482980/', R + 'B532780647/', R + 'B535693578/', R + 'B536197974/', R + 'B536312967/', R + 'B537944420/', R + 'B538273057/', R + 'B538449225/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'The official site has English, Chinese and Korean pages and online booking; staff cook the sukiyaki at the table and explain it (August 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区寺町通三条下ル桜之町405',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026; Hot Pot Tabelog 100 2026.' },
    pin_source: `Tabelog ${TB} (35.008550, 135.767059); cross-checked: GSI 京都府京都市中京区桜之町405番地 (lot) 15m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Tabelog remarks dated May 2025, tax and service included.', last_checked: TODAY, items: [
      it('昼のコース すき焼', '', 'Lunch course, sukiyaki (also oil-grilled or water-boiled)', '¥8,591', 'Lunch', 'no', 'no', 'May 2025 price.', 'lunch_sukiyaki'),
      it('月コース すき焼', '', 'Tsuki course, sukiyaki', '¥17,545', 'Courses', 'no', 'no', 'May 2025 price.', 'tsuki_sukiyaki'),
      it('プレミアム月コース すき焼', '', 'Premium Tsuki course, sukiyaki', '¥21,780', 'Courses', 'no', 'no', 'May 2025 price.', 'premium_tsuki'),
    ] }, {
    cuisine: '明治6年創業のすき焼き。創業当時の建物で、店独自に選び熟成させた黒毛和牛と秘伝の割下 (公式サイト)・仲居さんが席で焼く: 鍋に砂糖、肉を焼いて割下、溶き卵で。野菜は焼き豆腐、九条ネギ、春菊、椎茸、麩、しらたき、玉ねぎ (2026年の口コミ)・昼のコース8,591円、月コース17,545円、プレミアム月コース21,780円 (2025年5月、税・サービス料込み)、すき焼き、オイル焼き、水炊き。五代目が考案した前菜とお菓子と薄茶付きの「花コース」(公式サイト)・しぐれ煮、ご飯、赤だし、香の物、締めは一年中メロン (2026年の口コミ)',
    neighborhood: '三条の南の寺町通。京都市役所前駅から徒歩5分',
    gf_detail: '実際にはグルテンフリーではない: すき焼きは秘伝の割下で焼き、鍋には麩も入る (公式サイト、2026年7月の口コミ)。前菜に天ぷらやそばが出たこともある (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 牛肉の店で、すき焼き、水炊き、オイル焼きの和牛のコースに生卵 (公式サイト、2026年の口コミ)。',
    notes: '[すき焼き・寺町三条、明治6年から] 初代が長崎で牛鍋を学び、明治6年に開いた京都のすき焼きの老舗。坪庭のある明治の数寄屋造りの建物のままで、急な階段を上った座敷 (今はテーブル席) で、仲居さんが黒毛和牛を砂糖と秘伝の割下で焼き、溶き卵で食べる。昼のコース8,600円ほど、夜のコース17,500〜21,800円 (2025年)。食べログアワード ブロンズ 2017〜2019。2026年10月の客はプレミアムのコースが値段に見合わないと書いている。毎日11時〜21時、要予約。',
  });
}

save();
