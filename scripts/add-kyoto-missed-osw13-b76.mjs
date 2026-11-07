// Kyoto priority (kyoto-missed), worker osw13, batch 76 — lane: Tabelog id mod 6 = 0; rest tier, nearest-first.
// Drafts: MAHAYANA, ラホンバン マーラータン, とんかつ きんとん, 創作料理 壮樹.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-76');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26026836', 'large parent: 京都 四条木屋町 立ち飲み 四季彩しをり is one of nine shops of 株式会社shioriya (栞屋, ぎゃらりぃ栞屋, Foods bar 栞屋, ちょいと。栞屋, 御肴凸鉾, 御肴ずっころばし, Wine蔵しおり, 御肴かわせみ and this one; shioriya.com shop list, fetched 6 November 2026); same ruling as 炭炉まん / 串焼き 満天');
skip('26004942', 'brand already in data: 棲家 本店 is the main shop of 棲家, already in kyoto.json as kyoto_sumika_tomikoji (棲家 富小路店, same creative-izakaya concept); a brand already in data → skip its other same-concept branches (Greg ruling 2026-11-05)');
skip('26013474', 'chain: カフェ・ド・クリエ 京都四条店 — about 200 Café de Crié shops nationwide (Pokka Create release, November 2022), now run by C-United (8 brands, 569 shops, July 2026); 5+ same-name (Greg ruling 2026-11-05)');
skip('26000898', 'chain: まんざら 団栗橋 — five まんざら shops in the Kyoto crawl alone (まんざら亭 先斗町店, まんざら亭 NISHIKI, まんざら 団栗橋, まんざらえきよこ, ぎをんまんざら), run by manzara.co.jp; 5+ same-name (Greg ruling 2026-11-05)');
skip('26043210', 'chain: 居酒屋 それゆけ！鶏ヤロー！ 京都河原町店 — founded 2011, 80+ shops centred on the Tokyo area (gendai.media); 5+ same-name (Greg ruling 2026-11-05)');

// ================================================================ MAHAYANA
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26027436/'; const R = TB + 'dtlrvwlst/';
  const H = day(['08:30', '18:00']);
  put({
    id: 'kyoto_kissa_mahayana_teramachi', name: 'マハヤーナ (MAHAYANA)', category: 'OMNI',
    lat: 35.003065, lng: 135.766956, cuisine_type: 'kissaten',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: toast-based morning sets and cinnamon toast (2023 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask: siphon coffee and fresh fruit juices are plant-based; milk drinks and toast are not (2023–2026 reviews).',
    hours_raw: 'Tabelog: 8:30–18:00; closed Wednesday. No reservations. About 10 seats around a U-shaped counter (May and August 2025). Smoking allowed at every seat — cigarettes and e-cigarettes, but no cigars, pipes or kretek (August 2025; April 2026). No cards (Tabelog). On Teramachi just south of Shijo, by a Takashimaya entrance (2016 review).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Teramachi, just south of Shijo — 2 min walk from Kyoto-Kawaramachi Stn',
    cuisine: 'A small regulars\' coffee counter of about 40 years, with siphon coffee (2016–2026 reviews) · siphon-brewed blend; iced café latte ¥550 (May 2025) · the master\'s mixed juice; banana juice ¥600 (2023–2025) · morning sets; thick cinnamon toast (2023)',
    website: null, gmaps: gm('MAHAYANA 寺町 喫茶'), menu_url: null,
    notes: '[Kissa · Teramachi-Shijo, siphon coffee among the regulars] A white-tiled, glass-fronted coffee counter just south of Shijo on Teramachi, around for about 40 years: siphon coffee, fresh banana or mixed juice, thick cinnamon toast and morning sets, with regulars greeted by name. Smoking allowed at every seat (no cigars or pipes). Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Owner, not named in a source'], origin: null,
      background: 'Reviewers from 2016 to 2026 describe a small café with a white tiled front and black-framed glass windows, a U-shaped counter of about ten seats, the same regulars every morning, a skilled, friendly owner who chats with guests — in English with visitors (May 2025) — and a nostalgic feel; a May 2026 reviewer puts its age at about 40 years.',
      philosophy: null,
      specialty: 'Siphon coffee; mixed juice.',
      anecdotes: [
        { text: 'May 2016: "Every morning, the same customers greet each other at the same time and place the same order to start their day."', source: R + 'B199396300/' },
        { text: 'April 2026: "Smoking is allowed, but I noticed a sign stating, \'No cigars, pipes, or Garam!\'"', source: R + 'B525527287/' },
        { text: 'May 2025: the owner "was actively engaging with customers in English… the regulars were greeted with \'Take care\' as they left."', source: R + 'B506347462/' },
      ],
      japanese_sources_summary: '食べログ: マハヤーナ (MAHAYANA)、喫茶店、下京区寺町通四条下ル貞安前之町619、京都河原町駅から170m、8:30〜18:00、水曜休み、予約不可、喫煙可、カード不可。口コミ (2006年2月〜2026年5月、英語): 白いタイルの外観と黒い木枠のガラス窓、寺町の高島屋の入口の角、U字のカウンター約10席、全席喫煙可 (葉巻・パイプ・ガラムは不可)、サイフォンのブレンド、アイスカフェラテ550円、バナナジュース600円、マスターのミックスジュース、厚切りのシナモントースト、モーニング、毎朝同じ常連、英語でも話す店主、約40年続く店。',
      confidence: 'low', sources: [TB, R + 'B199396300/', R + 'B441840427/', R + 'B474261552/', R + 'B476711995/', R + 'B491031774/', R + 'B506347462/', R + 'B512266428/', R + 'B525527287/', R + 'B528018803/'] },
    cultural_comfort: { level: 'english', note: 'Owner chats in English; smoking at every seat.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区寺町通四条下ル貞安前之町619',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through May 2026.' },
    pin_source: `Tabelog ${TB} (35.003065, 135.766956); cross-checked: GSI 京都府京都市下京区貞安前之町619番地 (lot) 71m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B506347462/'],
    price_note: 'Prices from a May 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Banana juice', '¥600', 'Drinks', 'ask', 'ask', 'May 2025.', 'juice'),
      it('', '', 'Iced café latte', '¥550', 'Drinks', 'ask', 'no', 'May 2025.', 'coffee'),
    ] }, {
    cuisine: '約40年続く常連の小さなコーヒーのカウンター。サイフォンのコーヒー (2016〜2026年の口コミ)・サイフォンのブレンド、アイスカフェラテ550円 (2025年5月)・マスターのミックスジュース、バナナジュース600円 (2023〜2025年)・モーニング、厚切りのシナモントースト (2023年)',
    neighborhood: '寺町、四条のすぐ南。京都河原町駅から徒歩2分',
    gf_detail: 'グルテンフリーではない: トーストのモーニングとシナモントースト (2023年の口コミ)。',
    vegan_detail: '要確認: サイフォンのコーヒーや生の果物のジュースは植物性。ミルクの飲み物やトーストは違う (2023〜2026年の口コミ)。',
    notes: '[喫茶店・寺町四条、常連とサイフォンのコーヒー] 寺町の四条のすぐ南にある白いタイルとガラス張りの喫茶店で、約40年。サイフォンのコーヒー、バナナやミックスのジュース、厚切りのシナモントーストやモーニング、常連を名前で迎える。全席喫煙可 (葉巻・パイプは不可)。水曜休み。',
  });
}

// ================================================================ ラホンバン マーラータン 京都河原町店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26044188/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '21:30']);
  put({
    id: 'kyoto_rahoban_maratan_kawaramachi', name: 'ラホンバン マーラータン 京都河原町店 (Rahoban Maratan)', category: 'OMNI',
    lat: 35.005198, lng: 135.769452, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a peanut-cream mala broth with wheat dumplings, buns, fried dough and noodles; the free corn noodles are a separate choice (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask: you pick your own vegetables, tofu and noodles, but the broth is not described (2026 reviews).',
    hours_raw: 'Tabelog: daily 11:00–21:30, open through New Year. No reservations — call to ask how busy it is; queues of up to 30 minutes in the evening (May 2026), benches downstairs. Pick ingredients from a self-service display and pay by weight; corn noodles free on orders over ¥1,000; aprons and one free ice cream (2026 reviews). Spice levels from 0.5 to 4, non-spicy soups for children, a dry mala xiang guo option, a sauce bar. Non-smoking; children welcome. Cards (incl. UnionPay), e-money, QR (incl. Alipay). Basement of the Ishizumi Building. Opened 12 December 2025 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kawaramachi-Sanjo side — 177 m from Kyoto-Kawaramachi Stn',
    cuisine: 'Korean-style malatang by weight, from a brand with a shop in Osaka (2026 reviews) · choose vegetables, meats (lamb), tofu, noodles and novelty items — panda- and pig-shaped buns and mochi, custard and red-bean buns — then a mild, creamy peanut broth at spice 0.5–4; about ¥1,080–1,300 a bowl (April, July 2026) · dry "mala xiang guo" · fried rice and kara-age; ice cream (2026 reviews)',
    website: null, gmaps: gm('ラホンバン マーラータン 京都河原町'), menu_url: null,
    notes: '[Malatang · Kawaramachi, Korean-style mala by weight] A bright basement malatang shop near Kawaramachi, opened December 2025: fill a bowl from the self-service display, pay by weight, and pick a heat from 0.5 to 4 in a mild peanut-cream broth, with free corn noodles over ¥1,000 and cute panda buns. Two reviewers say it is popular with women (May, July 2026). Queues at dinner; some found the broth sweet and peanutty (April 2026).',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Opened 12 December 2025 (Tabelog). Reviewers in 2026 describe a Korean-influenced, clean and spacious room with friendly staff, a sauce bar, and a sister shop in Osaka that one diner had tried first (May 2026). The operator and full number of shops were not found.',
      philosophy: null,
      specialty: 'Peanut-cream malatang.',
      anecdotes: [
        { text: 'April 2026: "the soup had a strong peanut flavor, and the sweetness was quite pronounced."', source: R + 'B527088948/' },
        { text: 'May 2026: "I had to go out of my way to get a ladle since they didn\'t provide one, though! Haha."', source: R + 'B529137844/' },
        { text: 'May 2026: "I arrived around 7 PM and had to wait about 30 minutes in line."', source: R + 'B532303198/' },
      ],
      japanese_sources_summary: '食べログ: ラホンバン マーラータン 京都河原町店、中華料理、中京区下大阪町349-6 イシズミビル B1F、京都河原町駅から177m、毎日 11:00〜21:30、年末年始も営業、予約不可 (混雑は電話で)、禁煙、子供可 (辛くないスープあり)、カード・電子マネー・QR可、2025年12月12日オープン。口コミ (2026年4〜7月、英語): 韓国風のマーラータン、具材を自分で選び重さで会計、1,000円以上でとうもろこし麺が無料、エプロン、アイス1つ無料、辛さ0.5〜4、ピーナッツのクリーミーなスープ、汁なしの麻辣香鍋、パンダや豚の形の饅頭や餅、カスタードやあんこの揚げ饅頭、ラム肉、炒飯、唐揚げ、タレのバー、大阪にも店、夜は30分待ち、女性客が多いという声が2件、ピーナッツが強く甘いという声、お玉がなかったという声。',
      confidence: 'medium', sources: [TB, R + 'B522170704/', R + 'B524560121/', R + 'B526377368/', R + 'B527088948/', R + 'B527808767/', R + 'B528628603/', R + 'B529137844/', R + 'B530017429/', R + 'B530114984/', R + 'B531486171/', R + 'B532303198/', R + 'B532483028/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Self-service by weight; choose a spice level.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区下大阪町349-6 イシズミビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (opened December 2025) with reviews through July 2026.' },
    pin_source: `Tabelog ${TB} (35.005198, 135.769452); cross-checked: GSI 京都府京都市中京区下大阪町349番地 (lot) 23m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B524560121/', R + 'B532483028/'],
    price_note: 'Priced by weight; reviewers paid about ¥1,080–1,300 a bowl (2026).', last_checked: TODAY, items: [
      it('', '', 'Malatang by weight (corn noodles free over ¥1,000)', '~¥1,080–1,300', 'Malatang', 'no', 'ask', 'April and July 2026.', 'malatang'),
    ] }, {
    cuisine: '大阪にも店がある、重さで量る韓国風のマーラータン (2026年の口コミ)・野菜、肉 (ラム)、豆腐、麺、パンダや豚の形の饅頭や餅、カスタードやあんこの饅頭などを選び、辛さ0.5〜4のまろやかなピーナッツクリームのスープで、1杯1,080〜1,300円ほど (2026年4月・7月)・汁なしの麻辣香鍋・炒飯、唐揚げ、アイス (2026年の口コミ)',
    neighborhood: '河原町三条寄り。京都河原町駅から177m',
    gf_detail: 'グルテンフリーではない: 小麦の餃子、饅頭、揚げ菓子、麺の入るピーナッツクリームの麻辣スープ。無料のとうもろこし麺は別 (2026年の口コミ)。',
    vegan_detail: '要確認: 野菜、豆腐、麺は自分で選べるが、スープの中身は書かれていない (2026年の口コミ)。',
    notes: '[マーラータン・河原町、重さで量る韓国風] 河原町近くの地下で2025年12月に開店した明るいマーラータンの店。具材を自分で取って重さで払い、辛さは0.5〜4、まろやかなピーナッツクリームのスープ。1,000円以上でとうもろこし麺が無料、パンダの饅頭も。女性客に人気という声が2件 (2026年5月・7月)。夜は行列、スープがピーナッツ味で甘いという声も (2026年4月)。',
  });
}

// ================================================================ とんかつ きんとん 京都店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26043600/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:30'], ['17:30', '21:00']);
  put({
    id: 'kyoto_tonkatsu_kinton_pontocho', name: 'とんかつ きんとん 京都店 (Tonkatsu Kinton Kyoto)', category: 'OMNI',
    lat: 35.00411, lng: 135.770985, cuisine_type: 'katsu',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: breaded tonkatsu, minced cutlets and fried shrimp (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork cutlets and fried shrimp (2025–2026 reviews).',
    hours_raw: 'Tabelog: 11:30–14:30 and 17:30–21:00; closed Tuesday and some Wednesdays (open when a holiday falls on a closing day); open at New Year (January 2026). Reservations taken. 20 seats (three tables for 4, four for 2). Non-smoking. Menus in English, Chinese and Korean, with photos; children, babies and strollers welcome. Cards (incl. UnionPay), transit IC and e-money, QR (PayPay, Alipay, WeChat Pay). Just inside Pontocho, 2 min from Kawaramachi and Gion-Shijo. Opened 29 August 2025 (Tabelog), in the former premises of a tonkatsu shop (January 2026 review).',
    hours: { 0: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Pontocho, south end — 2 min walk from Kyoto-Kawaramachi and Gion-Shijo',
    cuisine: 'The Kyoto branch of a Sannomiya, Kobe tonkatsu shop listed in Tabelog\'s top 100 (2025–2026 reviews; web listing) · "Chateaubriand" (tenderloin) cutlet ¥2,800; large loin set ¥2,000; hand-ground minced cutlet set ¥1,200; set meals around ¥2,100 (October 2025–February 2026) · "Luxurious three" set of tenderloin, large fried shrimp and vegetable minced cutlet; "Golden" sampler set (2026) · refillable rice, miso soup, cabbage and salad; rock salt, wasabi, a sweet Nagasaki soy sauce and house sauce; katsu chazuke to finish (2026)',
    website: null, gmaps: gm('とんかつ きんとん 京都店 先斗町'), menu_url: null,
    notes: '[Tonkatsu · Pontocho, a Kobe top-100 shop\'s Kyoto branch] The Kyoto branch, opened August 2025 at the south end of Pontocho, of a Kobe tonkatsu shop on Tabelog\'s top-100 list: pink-centred loin and Chateaubriand cutlets with rock salt or Nagasaki soy, minced cutlets, big fried shrimp, refillable rice and miso, and katsu chazuke to finish. Some found prices a bit high (January 2026) and the chazuke broth light (February 2026). Closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Opened 29 August 2025 (Tabelog). Reviewers in 2025–2026 say the main shop is in Sannomiya, Kobe, and is listed among Tabelog\'s top 100 tonkatsu restaurants; a Kobe Sannomiya とんかつ きんとん is also listed online. A January 2026 reviewer notes it took over and renovated the premises of a former tonkatsu shop.',
      philosophy: null,
      specialty: 'Chateaubriand cutlet; loin cutlet.',
      anecdotes: [
        { text: 'January 2026: "The prices are a bit high, but the meat was delicious, and the rice and miso soup, which you can refill, were also very tasty."', source: R + 'B521325422/' },
        { text: 'February 2026: "The tea-flavored broth for the ochazuke might be a bit on the lighter side."', source: R + 'B522052507/' },
      ],
      japanese_sources_summary: '食べログ: とんかつ きんとん 京都店、中京区柏屋町169-4、阪急京都河原町駅・京阪祇園四条駅から徒歩2分、11:30〜14:30・17:30〜21:00、火曜休み (水曜は不定)、祝日は営業、予約可、20席、禁煙、英語・中国語・韓国語の写真付きメニュー、子供・赤ちゃん・ベビーカー可、カード・電子マネー・QR可、2025年8月29日オープン。神戸三宮のとんかつ きんとん (ネットの掲載)。口コミ (2025年10月〜2026年10月、英語): 本店は三宮で食べログのとんかつ百名店、シャトーブリアン2,800円、手ごね メンチカツ定食1,200円、上ロースカツ定食2,000円、定食2,100円ほど、ヒレ・大海老フライ・野菜メンチの贅沢三種、ゴールデンセット、ご飯・味噌汁・キャベツ・サラダはおかわり自由、岩塩・わさび・長崎の甘い醤油・ソース、締めのかつ茶漬け、先斗町の入口、以前のとんかつ店の跡を改装、値段が少し高いという声、茶漬けの出汁が薄いという声。',
      confidence: 'medium', sources: [TB, R + 'B515439027/', R + 'B516474944/', R + 'B517935962/', R + 'B520161022/', R + 'B521325422/', R + 'B522052507/', R + 'B522786635/', R + 'B523925911/', R + 'B530201478/', R + 'B531402399/', R + 'B531533080/', R + 'B537674515/'] },
    cultural_comfort: { level: 'english', note: 'Menus in English, Chinese and Korean with photos.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区柏屋町169-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (opened August 2025) with reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004110, 135.770985); cross-checked: GSI 京都府京都市中京区柏屋町 (town only, no lot) 27m — marked approximate; nearest pin kyoto_pontocho_kiraku 12.9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B515439027/', R + 'B522052507/'],
    price_note: 'Prices from October 2025–February 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Chateaubriand (tenderloin) cutlet', '¥2,800', 'Katsu', 'no', 'no', 'October 2025.', 'tonkatsu'),
      it('', '', 'Large loin cutlet set meal (refillable rice and miso)', '¥2,000', 'Set', 'no', 'no', 'February 2026.', 'tonkatsu'),
      it('', '', 'Hand-ground minced cutlet set meal', '¥1,200', 'Set', 'no', 'no', 'October 2025.', 'menchi_katsu'),
    ] }, {
    cuisine: '食べログのとんかつ百名店の神戸三宮の店の京都店 (2025〜2026年の口コミ、ネットの掲載)・シャトーブリアン2,800円、上ロースカツ定食2,000円、手ごねメンチカツ定食1,200円、定食は2,100円ほど (2025年10月〜2026年2月)・ヒレ、大海老フライ、野菜メンチの「贅沢三種」、「ゴールデン」の盛り合わせ (2026年)・ご飯、味噌汁、キャベツ、サラダはおかわり自由。岩塩、わさび、長崎の甘い醤油、自家製ソース。締めのかつ茶漬け (2026年)',
    neighborhood: '先斗町の南の入口。京都河原町駅・祇園四条駅から徒歩2分',
    gf_detail: 'グルテンフリーではない: 衣のついたとんかつ、メンチカツ、海老フライ (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 豚のカツと海老フライ (2025〜2026年の口コミ)。',
    notes: '[とんかつ・先斗町、神戸の百名店の京都店] 食べログのとんかつ百名店に選ばれた神戸の店の京都店で、2025年8月に先斗町の南の入口に開店。ほんのりピンクのロースやシャトーブリアンを岩塩や長崎の醤油で、メンチカツ、大きな海老フライ、おかわり自由のご飯と味噌汁、締めのかつ茶漬け。値段が少し高いという声 (2026年1月) や、茶漬けの出汁が薄いという声 (2026年2月) も。火曜休み。',
  });
}

// ================================================================ 創作料理 壮樹
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26034102/'; const R = TB + 'dtlrvwlst/';
  const W = day(['18:00', '24:00']), F = day(['18:00', '25:00']);
  put({
    id: 'kyoto_sosaku_ryori_soju_kiyamachi', name: '創作料理 壮樹 (Creative cuisine SOJU)', category: 'OMNI',
    lat: 35.004681, lng: 135.770713, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: pizza, oyster tempura, mapo tofu, shrimp mayonnaise and soy-based dishes (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sashimi, chicken liver, wagyu and seafood dishes (2024–2026 reviews).',
    hours_raw: 'Tabelog: Mon–Thu 18:00–24:00; Fri, Sat, Sun and holidays 18:00–1:00 (last food order 24:00); Wednesday open only if booked by 17:00 that day; days off on the online booking calendar. Lunch by reservation only (since April 2025). Dinner is hard to book (April 2025) and fills at opening (May 2025). 22 seats: counter, tatami and tables; private room up to 20. Smoking allowed (Tabelog). Cards, transit IC and e-money, QR. 1F of the Iyasaka Building on Kiyamachi north of Shijo. Opened 1 April 2020 (Tabelog).',
    hours: { 0: W, 1: W, 3: W, 4: F, 5: F, 6: F }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi, north of Shijo — 5 min walk from Kyoto-Kawaramachi Stn',
    cuisine: 'A creative izakaya mixing Japanese, Western and Chinese ideas (2024–2026 reviews) · sashimi platters (bluefin tuna, sea bream); fresh-fish carpaccio; grated octopus with ponzu; chicken liver sashimi; chicken tataki (2024–2025) · yuzu-pepper mapo tofu; large shrimp with mayonnaise; oyster tempura; black-wagyu steak; pizza; Caesar salad (2024–2025) · freshly made kamaboko with caramel ice cream; cheesecake (2024–2025) · reservation-only lunch: special seafood bowl, black-wagyu steak lunch (April 2025)',
    website: null, gmaps: gm('創作料理 壮樹 木屋町'), menu_url: null,
    notes: '[Creative izakaya · Kiyamachi, a hard-to-book local favourite] A dim, relaxed creative izakaya on Kiyamachi that fills at opening: sashimi and carpaccio, yuzu-pepper mapo tofu, oyster tempura, wagyu steak, pizza and an unexpected kamaboko-and-caramel ice cream, with a reservation-only lunch. One diner found it ordinary and the service very slow (February 2026). Smoking allowed. Open till midnight or 1:00.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Opened 1 April 2020 (Tabelog). Reviewers from 2024 to 2026 describe a calm, dimly lit room on lively Kiyamachi with counter, tatami and table seats, attentive staff, a menu that changes with each visit, and dinner that is hard to book; lunch by reservation began in April 2025.',
      philosophy: null,
      specialty: 'Yuzu-pepper mapo tofu; sashimi.',
      anecdotes: [
        { text: 'February 2026: "No plans to return. The food was at an izakaya level… the sashimi was on the smaller side. Above all, the service was way too slow."', source: R + 'B523497025/' },
        { text: 'December 2024: "I tried the freshly made kamaboko (steam-cooked fish cake) caramel ice cream for the first time."', source: R + 'B476409002/' },
      ],
      japanese_sources_summary: '食べログ: 創作料理 壮樹、創作料理・居酒屋・海鮮、中京区四条木屋町上ル鍋屋町217 弥栄ビル 1F、阪急河原町駅から徒歩5分、月〜木 18:00〜24:00・金日祝 18:00〜翌1:00・土 18:00〜翌1:00 (料理 L.O. 24:00)、昼は予約のみ、水曜は17時までに予約がなければ休み、休みはネット予約のカレンダーで、22席、個室 (20名まで)、喫煙可、カード・電子マネー・QR可、2020年4月1日オープン。口コミ (2024年12月〜2026年5月、英語): 刺身の盛り合わせ (本鮪、鯛)、鮮魚のカルパッチョ、たこのおろしポン酢、鶏レバー刺し、鶏のたたき、柚子胡椒の麻婆豆腐、大海老のマヨネーズ、牡蠣の天ぷら、黒毛和牛のステーキ、ピザ、シーザーサラダ、できたてかまぼことキャラメルアイス、チーズケーキ、予約制のランチ (特製海鮮丼、黒毛和牛ステーキ、2025年4月から)、夜は予約が取りにくい、居酒屋レベルで提供が遅いという声。',
      confidence: 'medium', sources: [TB, R + 'B476409002/', R + 'B497474011/', R + 'B504555811/', R + 'B506062576/', R + 'B507439224/', R + 'B508271572/', R + 'B512290350/', R + 'B512577899/', R + 'B513723000/', R + 'B523497025/', R + 'B528291460/'] },
    cultural_comfort: { level: 'japanese', note: 'Book ahead; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区四条木屋町上ル鍋屋町217 弥栄ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through May 2026.' },
    pin_source: `Tabelog ${TB} (35.004681, 135.770713); cross-checked: GSI 京都府京都市中京区鍋屋町217番地 (lot) 37m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B476409002/', R + 'B512290350/'],
    price_note: 'No prices in the sources; Tabelog\'s dinner budget is ¥6,000–7,999.', last_checked: TODAY, items: [
      it('', '', 'Yuzu-pepper mapo tofu', null, 'Signature', 'no', 'no', 'December 2024.', 'mapo_tofu'),
      it('', '', 'Oyster tempura', null, 'Fried', 'no', 'no', 'August 2025.', 'tempura'),
    ] }, {
    cuisine: '和・洋・中を組み合わせる創作居酒屋 (2024〜2026年の口コミ)・本鮪や鯛の刺身の盛り合わせ、鮮魚のカルパッチョ、たこのおろしポン酢、鶏レバー刺し、鶏のたたき (2024〜2025年)・柚子胡椒の麻婆豆腐、大海老のマヨネーズ、牡蠣の天ぷら、黒毛和牛のステーキ、ピザ、シーザーサラダ (2024〜2025年)・できたてかまぼことキャラメルアイス、チーズケーキ (2024〜2025年)・予約制のランチは特製海鮮丼と黒毛和牛ステーキ (2025年4月)',
    neighborhood: '木屋町、四条の北。京都河原町駅から徒歩5分',
    gf_detail: 'グルテンフリーではない: ピザ、牡蠣の天ぷら、麻婆豆腐、海老マヨ、醤油の料理 (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 刺身、鶏レバー、和牛、魚介の料理 (2024〜2026年の口コミ)。',
    notes: '[創作居酒屋・木屋町、予約の取りにくい地元の人気店] 木屋町の薄暗く落ち着いた創作居酒屋で、開店と同時に埋まる。刺身やカルパッチョ、柚子胡椒の麻婆豆腐、牡蠣の天ぷら、和牛ステーキ、ピザ、意外なかまぼことキャラメルのアイス。昼は予約制。居酒屋レベルで提供がとても遅いという声も (2026年2月)。喫煙可。0時または1時まで。',
  });
}

save();
