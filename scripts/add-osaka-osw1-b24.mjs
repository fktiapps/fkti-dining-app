// Osaka sweep (2-mile circle around Dotonbori), CORE list; worker osw1 (lane: Tabelog id mod 4 = 0), batch 24.
//   + お好み焼き なお家 なんば店 Okonomiyaki Naoya (okonomiyaki and curry yakisoba, third shop of a small group, 2025)
//   + 天ぷら たろじろう Tempura Taroujirou (tempura by the piece and fresh oysters, Sennichimae, 2015)
//   + hubble (Italian café and shisha lounge with a rooftop BBQ terrace, Nishi-Shinsaibashi, 2022)
//   + Pizza TOKIO STADIUM (wood-fired pizza and shisha with a terrace, Nishi-Shinsaibashi, 2023)
//   - skip(): 黒毛和牛焼肉善 難波千日前店 (branch of a group in data), サブウェイ なんばウォーク 一番街店 (chain),
//     串かつ料理 活 なんばウォーク店 (chain), 616点心佬 (chain).
//   Lane: `queue.mjs osaka next core 600`, mod-4 = 0, in order: 27147748 +, 27087268 +, 27096564 skip, 27125596 skip,
//   27050224 skip, 27126532 +, 27140656 skip, 27140052 +.
//   Chain check for the four kept: なお家 calls this its third shop (Tabelog; an October 2026 diner names an Awaza shop); たろじろう,
//   hubble and Pizza TOKIO STADIUM are each the only shop of the name in shops.jsonl (hubble calls itself a sister of Safari
//   Shinsaibashi, a different name). None is in data.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw1-24');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27096564', 'Same-concept branch of a group already in data: 黒毛和牛焼肉善 (osaka_yakiniku_zen_namba_shinsaibashi, osw1 b16).');
skip('27125596', 'Chain: Subway (sandwich chain).');
skip('27050224', 'Chain: 串かつ料理 活 (津田産業) has seven shops in Osaka City (tsudasangyo.co.jp: 阪急三番街, 阿倍野, ナビオ阪急, ホワイティうめだ, なんばウォーク, 阪急グランドビル, 心斎橋パルコ).');
skip('27140656', 'Chain: 616点心佬 says it has 30 locations in Hong Kong and Shenzhen (Tabelog listing).');

// ================================================================ お好み焼き なお家 なんば店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27147748/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['17:00', '24:00']); const WE = day(['11:30', '14:00'], ['17:00', '24:00']);
  put({
    id: 'osaka_okonomiyaki_naoya_namba', name: 'お好み焼き なお家 なんば店 (Okonomiyaki Naoya)', category: 'OMNI',
    lat: 34.667962, lng: 135.50352, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: okonomiyaki batter, yakisoba noodles and tenkasu are wheat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: okonomiyaki with pork and egg, and the batter usually uses dashi.',
    hours_raw: 'Mon–Fri and the days around holidays 17:00–24:00; Sat, Sun and holidays 11:30–14:00 and 17:00–24:00; closing days vary (Tabelog). Reservations accepted; held 15 minutes; a two-hour limit when busy (Tabelog). One drink and one dish per person (October 2026). Cards including UnionPay, iD, QUICPay and PayPay (Tabelog). 73 seats at tables with teppan grills, a few without; non-smoking (Tabelog). Opened 22 March 2025 as the group\'s third shop (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sennichimae 1-8-18, 安本ビル — 3 min from Namba and Kintetsu Nippombashi Stns',
    cuisine: 'Okonomiyaki house: cabbage chosen and cut with care for a fluffy batter, finished crisp under a layer of tenkasu, with chopped pork mixed into the batter; staff cook it at your table (Tabelog; October 2026) · signature curry yakisoba, with raw egg and extra cabbage if you like; fresh-noodle yakisoba; negiyaki with soy sauce and ginger; tonpei-yaki; cheesy pork okonomiyaki (Tabelog; May–October 2026) · Osaka set of okonomiyaki, yakisoba, negiyaki and tonpei-yaki to share; three people ate okonomiyaki, negiyaki and yakisoba with a drink each for about ¥7,000 (August 2026)',
    website: null, gmaps: gm('お好み焼き なお家 なんば店'), menu_url: null,
    notes: "[Okonomiyaki · Sennichimae, curry yakisoba and table-side grilling] A bright, modern okonomiyaki house three minutes from Namba, opened in 2025 as the third shop of a small group founded by an owner who, the shop says, looked up to a grandfather who was a comedian. Staff grill everything at your table: okonomiyaki with chopped pork in a fluffy batter and a crunchy cap of tenkasu, and the signature curry yakisoba, best stirred with a raw egg. The Osaka set covers okonomiyaki, yakisoba, negiyaki and tonpei-yaki for sharing; three diners ate well for about ¥7,000 in August 2026. Okonomiyaki can take a while once the quicker dishes arrive. One drink and one dish each.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed) and teppan staff'], origin: null, background: 'Shop-maintained Tabelog listing: opened 22 March 2025 as the third shop of お好み焼き なお家, inspired by the owner\'s admiration for a grandfather who was a former comedian; carefully made batter with attention to the cabbage, its cut and preparation, fluffy inside and crisp with tenkasu; the signature curry yakisoba. An October 2026 review mentions the group\'s Awaza shop.', philosophy: null, specialty: 'Okonomiyaki with tenkasu; curry yakisoba.',
      anecdotes: [
        { text: '"I ordered the signature curry yakisoba with extra cabbage, a tonpeiyaki, and a mixed okonomiyaki topped with an egg." — October 2026, at the Namba shop after visits to Awaza.', source: R + 'B536757585/' },
        { text: '"For around JPY 7000, three of us enjoyed okonomiyaki, negiyaki, yakisoba, and one drink each!" — August 2026.', source: R + 'B533461849/' },
        { text: '"However, the okonomiyaki took a while to cook, and by then, I was already quite full..." — October 2026.', source: R + 'B537216246/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): お好み焼き なお家 なんば店、お好み焼き・居酒屋・鉄板焼き、大阪市中央区千日前1-8-18 安本ビル、なんば駅・近鉄日本橋駅から徒歩3分、月〜金・祝前後17:00〜24:00、土日祝11:30〜14:00・17:00〜24:00、休みは変わることも、予約可 (15分で取り消し、混雑時は2時間制)、カード (銀聯も)・iD・QUICPay・PayPay 可、73席、禁煙、2025年3月22日オープン。店の紹介 (英訳): お好み焼き なお家の3号店、元芸人の祖父にあこがれた店主の本格的なお好み焼き、キャベツの産地や切り方にこだわったふわふわで天かすでサクサクの生地、名物のカレー焼きそば。口コミ(2026年5月〜10月): 店の人が焼いてくれる、豚を生地に混ぜる、天かすを全体にのせる、チーズの豚玉、甘めの焼きそば、しょうがと醤油のねぎ焼き、とん平焼き、大阪セット (お好み焼き、焼きそば、ねぎ焼き、とん平焼き)、3人で7,000円ほど、カレー焼きそばに生卵、Awaza の店、1ドリンク1オーダー制、お好み焼きが焼けるまで時間がかかるという声。',
      confidence: 'medium', sources: [TB, R + 'B528345969/', R + 'B528854709/', R + 'B533461849/', R + 'B534126018/', R + 'B535167415/', R + 'B536757585/', R + 'B537216246/', R + 'B537519300/', R + 'B538293001/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff cook at the table; overseas tourists (October 2026). No English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区千日前1-8-18 安本ビル',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区千日前一丁目8番18号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533461849/', TB],
    price_note: 'No itemised dated prices; three diners paid about ¥7,000 in August 2026.', last_checked: TODAY, items: [
      it('', '', 'Curry yakisoba (signature)', '', 'Yakisoba', 'no', 'no', 'Tabelog; October 2026.', 'curry_yakisoba'),
      it('', '', 'Pork okonomiyaki with tenkasu', '', 'Okonomiyaki', 'no', 'no', 'October 2026 review.', 'butatama'),
      it('', '', 'Osaka set (okonomiyaki, yakisoba, negiyaki, tonpei-yaki)', '', 'Sets', 'no', 'no', 'August 2026 review.', 'osaka_set'),
    ] }, {
    cuisine: 'お好み焼きの店: キャベツにこだわったふわふわの生地を、天かすでサクサクに焼き上げ、豚は刻んで生地に混ぜる。店の人がテーブルで焼く (食べログ、2026年10月)・名物のカレー焼きそばは好みで生卵やキャベツ増しで。生麺の焼きそば、しょうがと醤油のねぎ焼き、とん平焼き、チーズの豚玉 (食べログ、2026年5月〜10月)・お好み焼き、焼きそば、ねぎ焼き、とん平焼きの大阪セットを分けて。3人でお好み焼き、ねぎ焼き、焼きそばと1杯ずつで7,000円ほど (2026年8月)',
    neighborhood: '千日前1-8-18、安本ビル。なんば駅・近鉄日本橋駅から3分',
    gf_detail: 'グルテンフリーではありません。お好み焼きの生地、焼きそばの麺、天かすは小麦。',
    vegan_detail: 'ヴィーガンではありません。豚と卵のお好み焼きで、生地には一般にだしを使う。',
    notes: '[お好み焼き・千日前、カレー焼きそばとテーブルで焼くお好み焼き] なんばから3分の明るくモダンなお好み焼きの店で、2025年に小さなグループの3店目としてできた。店によると、元芸人の祖父にあこがれた店主が始めた店。店の人がテーブルで焼いてくれ、刻んだ豚の入ったふわふわの生地に天かすのサクサクのお好み焼きと、名物のカレー焼きそばは生卵を混ぜて。大阪セットでお好み焼き、焼きそば、ねぎ焼き、とん平焼きを分けられ、2026年8月は3人で7,000円ほど。ほかの料理が早く来る分、お好み焼きは時間がかかることも。1人1ドリンク1オーダー。',
  });
}

// ================================================================ 天ぷら たろじろう
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27087268/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://tarojirou.com/';
  const WD = day(['17:00', '24:00']); const WE = day(['11:30', '24:00']);
  put({
    id: 'osaka_tempura_taroujirou_sennichimae', name: '天ぷら たろじろう (Tempura Taroujirou)', category: 'OMNI',
    lat: 34.667907, lng: 135.503692, cuisine_type: 'tempura',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tempura batter is wheat flour; oysters and sashimi come raw, but share the kitchen.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood tempura and oysters; tentsuyu is made with dashi.',
    hours_raw: 'Mon, Tue, Thu, Fri 17:00–24:00; Sat, Sun and holidays 11:30–24:00; last order 23:30; closed Wednesday (Tabelog). Lunch last order 14:30 (Tabelog). Reservations accepted; call if more than 15 minutes late; often full at weekends (Tabelog; June 2026). Cards accepted; no e-money or QR (Tabelog). 23 seats: a 12-seat counter facing the fryer and 11 at tables (Tabelog; July 2026). Opened 22 August 2015 (Tabelog).',
    hours: { 0: WD, 1: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sennichimae 1-8-20, 高橋ビル 1F, on the Aioibashi shopping street — 5 min from Namba and Nippombashi Stns',
    cuisine: 'Tempura izakaya by a chef who trained at the renowned Daikichi in Sakai, fried to order in front of the counter in carefully chosen oil, with seasonal fish and vegetables and a sake expert on hand (Tabelog; June–September 2026) · tempura by the piece from ¥100 with a choice of dipping sauces and salts: large red shrimp, pumpkin, mentaiko-and-shiso fish, squid legs, manganji pepper, goya, onion, soft-boiled egg (June–October 2026) · fresh oysters including from Hokkaido, oyster tempura, sashimi such as sanma, cod milt with ponzu (July–October 2026) · lunch tempura set, zaru soba set (June and September 2026) · Akaboshi beer, a long drinks list (September 2026)',
    website: SITE, gmaps: gm('天ぷら たろじろう 千日前'), menu_url: null,
    notes: "[Tempura · Sennichimae, by the piece from ¥100] A small tempura bar on the Aioibashi shopping street where a chef trained at the renowned Daikichi in Sakai fries each piece to order in front of a 12-seat counter. Pieces start at ¥100, with a choice of salts and dipping sauces; red shrimp, mentaiko-and-shiso fish and a molten soft-boiled egg are favourites. Oysters are the other draw, raw or as tempura, along with sashimi and a sake list chosen by an expert. A five-year regular calls it the best tempura in Namba and books ahead at weekends; one October 2026 diner found the food average. Weekend lunch sets; closed Wednesdays.",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed) trained at Daikichi in Sakai (Tabelog); a sake expert on staff (Tabelog)'], origin: null, background: 'Shop-maintained Tabelog listing: a chef who honed skills at the renowned Daikichi in Sakai; seasonal fish, vegetables and rice; attention to oil; fresh fish and shellfish as sashimi, grilled or tempura; a sake expert on hand; opened 22 August 2015.', philosophy: '"Committed to oil" (Tabelog).', specialty: 'Tempura by the piece; fresh oysters.',
      anecdotes: [
        { text: '"I\'ve been coming here regularly for about five years, and I\'m always completely satisfied." — June 2026.', source: R + 'B531705907/' },
        { text: '"The light and crispy tempura starts at just JPY 100 each, and you can choose from various dipping sauces and salts" — September 2026.', source: R + 'B535655621/' },
        { text: '"The oysters were quite large and had very little odor, making them incredibly delicious." — June 2026.', source: R + 'B530799390/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 天ぷら たろじろう、天ぷら・海鮮・オイスターバー、大阪市中央区千日前1-8-20 高橋ビル 1F、なんば駅・日本橋駅から徒歩5分、月火木金17:00〜24:00、土日祝11:30〜24:00 (L.O.23:30)、水曜休み、ランチの L.O.14:30、予約可 (15分以上遅れる場合は連絡を)、カード可、電子マネー・QR 不可、23席 (カウンター12、テーブル11)、2015年8月22日オープン。店の紹介 (英訳): Sakai の名店 Daikichi で腕を磨いた料理人、油へのこだわり、季節の魚と野菜、刺身や焼き物や天ぷらで食べる鮮魚と貝、日本酒に詳しいスタッフ。口コミ(2026年1月〜10月): 1個100円からの天ぷら、選べるたれと塩、大きな赤えび、かぼちゃ、明太子としその魚、げそ、万願寺とうがらし、ゴーヤ、玉ねぎ、半熟卵、生がき (Hokkaido も)、かきの天ぷら、さんまの刺身、白子ポン酢、ランチの天ぷら定食、ざるそばのセット、赤星、Aioibashi の商店街、5年通う常連、週末は満席が多い、ふつうだったという声も。',
      confidence: 'medium', sources: [TB, SITE, R + 'B521752226/', R + 'B526376054/', R + 'B530799390/', R + 'B531705907/', R + 'B532140588/', R + 'B532298106/', R + 'B535546188/', R + 'B535655621/', R + 'B536548222/', R + 'B538058334/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter ordering piece by piece; many overseas guests (July 2026). No English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '大阪府大阪市中央区千日前1-8-20 高橋ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区千日前一丁目8番20号 (go) 5m. Same building as osaka_izakaya_rokudan (address_ja "大阪府大阪市中央区千日前1-8-20 高橋ビル 3F"), pinned 4 m away, so this pin is block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535655621/', R + 'B532140588/'],
    price_note: 'Prices from July and September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Tempura by the piece (from)', '¥100', 'Tempura', 'no', 'no', 'September 2026 review.', 'tempura_piece'),
      it('', '', 'Fresh oysters', '', 'Oysters', 'ask', 'no', 'June–July 2026 reviews.', 'nama_kaki'),
      it('', '', 'Soft-boiled egg tempura', '', 'Tempura', 'no', 'no', 'June 2026 review.', 'tamago_ten'),
    ] }, {
    cuisine: 'Sakai の名店 Daikichi で修業した料理人の天ぷらの居酒屋で、カウンターの前で選んだ油で揚げる。季節の魚と野菜、日本酒に詳しいスタッフも (食べログ、2026年6月〜9月)・天ぷらは1個100円から、たれと塩を選べる: 大きな赤えび、かぼちゃ、明太子としその魚、げそ、万願寺とうがらし、ゴーヤ、玉ねぎ、半熟卵 (2026年6月〜10月)・Hokkaido などの生がき、かきの天ぷら、さんまなどの刺身、白子ポン酢 (2026年7月〜10月)・ランチの天ぷら定食、ざるそばのセット (2026年6月と9月)・赤星のビール、豊富な飲み物 (2026年9月)',
    neighborhood: '千日前1-8-20、高橋ビル1階、Aioibashi の商店街。なんば駅・日本橋駅から5分',
    gf_detail: 'グルテンフリーではありません。天ぷらの衣は小麦粉。生がきや刺身もあるが、同じ厨房。',
    vegan_detail: 'ヴィーガンではありません。魚介の天ぷらとかきで、天つゆにはだしを使う。',
    notes: '[天ぷら・千日前、1個100円からの揚げたて] Aioibashi の商店街の小さな天ぷらの店で、Sakai の名店 Daikichi で修業した料理人が12席のカウンターの前で1つずつ揚げる。1個100円からで、塩やたれを選べ、赤えび、明太子としその魚、とろりとした半熟卵が人気。もうひとつの名物はかきで、生でも天ぷらでも。刺身や、詳しいスタッフが選ぶ日本酒も。5年通う常連はなんばで一番の天ぷらと言い、週末は予約して来るそう。2026年10月にはふつうだったという声も。週末は昼の定食、水曜休み。',
  });
}

// ================================================================ hubble
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27126532/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '23:30']);
  put({
    id: 'osaka_hubble_nishishinsaibashi', name: 'hubble', category: 'OMNI',
    lat: 34.671673, lng: 135.499314, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The menu is pizza, pasta, taco rice and fries.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No vegan information. Pasta and pizza use cream and cheese; the BBQ is meat.',
    hours_raw: 'Daily 11:30–23:30 (food last order 22:00): lunch 11:30–15:00, café and dinner 15:00–23:30; irregular closing days (Tabelog). Reservations accepted; cancellation fees of 50–100% for courses and ¥4,000 a head for no-show table bookings (Tabelog). Cards, e-money and QR payments (Tabelog). 60 seats: about 50 on sofas and 40 on a rooftop terrace with lawn, semi-private rooms for 10–20 at ¥700 a head (Tabelog; February 2026). Smoking allowed; shisha (Tabelog; 2025–2026 reviews). Wheelchair accessible (Tabelog). Opened 15 January 2022 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nishi-Shinsaibashi 2-10-2, Crice Nikko 4F — 4 min from Shinsaibashi Stn',
    cuisine: 'Italian café-bar with shisha and a rooftop terrace (Tabelog; 2025–2026 reviews) · lunch of pizza, fries, spinach cream pasta, oyster and spinach cream pasta, taco rice (July 2025–February 2026) · all-you-can-drink rooftop BBQ of wagyu and other meats; courses with outside skirt and pasta and 120 minutes of drinks (Tabelog; June–July 2026) · prosciutto, apricot juice and other drinks (January 2026)',
    website: null, gmaps: gm('hubble 西心斎橋'), menu_url: null,
    notes: "[Café-bar · Nishi-Shinsaibashi, a rooftop terrace and shisha] A spacious fourth-floor Italian café-bar four minutes from Shinsaibashi Station, with deep sofas inside and a lawned rooftop terrace that feels far from the city. Lunch brings pizza that reviewers rate highly and an oyster and spinach cream pasta; in the evening it becomes a shisha lounge and party space, and summer groups book all-you-can-drink barbecues on the terrace, with a cooling system on hot nights. Portions are generous but some find the food salty, and drinks can be slow when staff are few. Shisha smoke is everywhere, which one January 2026 non-smoker found too much.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null, background: 'Shop-maintained Tabelog listing: Italian, bar and izakaya on 4F of Crice Nikko; wagyu and handmade Italian dishes; private hire for 40–50; shisha and meat dishes; a rooftop terrace BBQ; opened 15 January 2022. A review describes it as a sister of Safari Shinsaibashi.', philosophy: null, specialty: 'Pizza; rooftop BBQ; shisha.',
      anecdotes: [
        { text: '"The spacious second-floor terrace offers a refreshing atmosphere, making it hard to believe you\'re in the heart of the city." — February 2026, with a dog along.', source: R + 'B523061096/' },
        { text: '"I didn’t realize it was a shisha bar and came hoping to enjoy some prosciutto, but my friend isn’t fond of shisha aromas, so we only ordered soft drinks." — January 2026.', source: R + 'B521332561/' },
        { text: '"Most of the dishes were quite salty, but I think they would be great for younger guests due to their generous portions." — April 2026.', source: R + 'B527189540/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): hubble、イタリアン・バル・居酒屋、大阪市中央区西心斎橋2-10-2 Crice Nikko 4F、心斎橋駅から徒歩4分、毎日11:30〜23:30 (料理L.O.22:00、ランチ11:30〜15:00、カフェとディナー15:00〜23:30)、不定休、予約可 (コースは当日100%、前日50%、席の予約の無断キャンセルは1人4,000円)、カード・電子マネー・QR 可、60席 (ソファー約50、テラス40)、半個室は1人700円、喫煙可、車いす可、2022年1月15日オープン。店の紹介 (英訳): 和牛と手作りのイタリアン、生ビールの飲み放題、40〜50名の貸切、シーシャ、屋上テラスのバーベキュー、Safari 心斎橋の姉妹店。口コミ(2025年7月〜2026年7月): 多国籍なカフェ、タコライス、ピザ、フライドポテト、ほうれん草のクリームパスタ、かきとほうれん草のクリームパスタ、生ハム、あんずのジュース、芝生の屋上テラス、犬も一緒に、夏の夜は冷房の設備、飲み放題のバーベキュー、料理が塩辛い・スタッフが少なく飲み物が遅いという声、シーシャの香りが苦手な人も。',
      confidence: 'medium', sources: [TB, R + 'B510978522/', R + 'B514893666/', R + 'B520310749/', R + 'B521332561/', R + 'B523061096/', R + 'B523513410/', R + 'B524311395/', R + 'B527189540/', R + 'B529521130/', R + 'B532570303/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Café and shisha lounge; no English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区西心斎橋2-10-2 Crice Nikko 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区西心斎橋二丁目10番2号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B520310749/', R + 'B529521130/'],
    price_note: 'No dated prices in the sources read.', last_checked: TODAY, items: [
      it('', '', 'Pizza (lunch)', '', 'Lunch', 'no', 'ask', 'September 2025 review.', 'pizza'),
      it('', '', 'Oyster and spinach cream pasta', '', 'Pasta', 'no', 'no', 'February 2026 reviews.', 'oyster_pasta'),
      it('', '', 'Rooftop BBQ with all-you-can-drink', '', 'Courses', 'ask', 'no', 'June–July 2026 reviews.', 'rooftop_bbq'),
    ] }, {
    cuisine: 'シーシャと屋上テラスのあるイタリアンのカフェバー (食べログ、2025〜2026年の口コミ)・ランチはピザ、フライドポテト、ほうれん草のクリームパスタ、かきとほうれん草のクリームパスタ、タコライス (2025年7月〜2026年2月)・屋上テラスで和牛などの飲み放題のバーベキュー。外ハラミとパスタの120分飲み放題つきのコース (食べログ、2026年6月〜7月)・生ハム、あんずのジュースなどの飲み物 (2026年1月)',
    neighborhood: '西心斎橋2-10-2、Crice Nikko 4階。心斎橋駅から4分',
    gf_detail: '要確認。グルテンの情報なし。メニューはピザ、パスタ、タコライス、フライドポテト。',
    vegan_detail: '要確認。ヴィーガンの情報なし。パスタやピザにはクリームやチーズ、バーベキューは肉。',
    notes: '[カフェバー・西心斎橋、屋上テラスとシーシャ] 心斎橋駅から4分のビルの4階の広いイタリアンのカフェバーで、店内はゆったりしたソファー、屋上には芝生のテラスがあり、街のまん中とは思えない。昼は評価の高いピザやかきとほうれん草のクリームパスタ。夜はシーシャのラウンジや宴会の場になり、夏は屋上の飲み放題のバーベキューが人気で、暑い夜は冷房の設備があって涼しい。量は多いが塩辛いという声や、スタッフが少なく飲み物が遅いという声も。シーシャの煙はどこにでもあり、2026年1月にはたばこを吸わない人にはきつかったという声。',
  });
}

// ================================================================ Pizza TOKIO STADIUM
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27140052/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['12:00', '23:00']); const WE = day(['11:30', '23:00']);
  put({
    id: 'osaka_pizza_tokio_stadium_nishishinsaibashi', name: 'Pizza TOKIO STADIUM', category: 'OMNI',
    lat: 34.672543, lng: 135.49924, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the specialities are wood-fired wheat pizza and pasta.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No vegan information. Pizzas and carbonara use cheese, prosciutto and egg; an eggplant and tomato pasta is on the menu.',
    hours_raw: 'Mon–Fri 12:00–23:00; Sat, Sun and holidays 11:30–23:00; last order 22:30 (food 22:00 on some days); open year-round (Tabelog). Reservations accepted (Tabelog). Cards, e-money and PayPay (Tabelog). 80 seats: tables, counter, sofas and a 14-seat terrace; private hire for up to 100; a DJ booth (Tabelog). E-cigarettes allowed at all seats, cigarettes on the terrace; shisha (Tabelog; May 2026). Children welcome with a kids menu; pets allowed (Tabelog). Birthday plates (August 2026). Opened 19 December 2023 at this address after moving (Tabelog; May 2026).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nishi-Shinsaibashi 1-6-3, サンライズビル 1F — 2 min from Shinsaibashi Stn, 5 min from Yotsubashi',
    cuisine: 'Pizza baked in a wood-fired oven, pasta and appetizers, with original cocktails (Tabelog) · quattro formaggi with honey, margherita with prosciutto, thick-crust pizza with a chewy rim (May–June 2026; one diner found it a bit charred) · rich egg carbonara with fettuccine, eggplant and bacon tomato pasta, fries (May–June 2026) · courses; coffee; shisha (Tabelog; May 2026)',
    website: null, gmaps: gm('Pizza TOKIO STADIUM 心斎橋'), menu_url: null,
    notes: "[Pizza · Nishi-Shinsaibashi, wood-fired pizza and shisha] A big, stylish pizza bar two minutes from Shinsaibashi Station, with sofas, a terrace and a DJ booth, that moved here from an earlier site. The wood-fired pizzas have a soft, chewy crust; the quattro formaggi with honey has its devotees, and the pasta, including a fettuccine carbonara, is rated nearly as highly. It can be packed, but pizzas come out fast, and staff are happy to bring out a birthday plate. It doubles as a shisha lounge: e-cigarettes at every seat, cigarettes on the terrace, and one May 2026 regular waited in vain for the charcoal to be changed. Children's menu; pets welcome.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null, background: 'Shop-maintained Tabelog listing: authentic pizza from a wood-fired oven, pasta, selected appetizers, reasonable courses and original cocktails; a chic, spacious room with sofas, a terrace and a DJ booth; opened 19 December 2023. A May 2026 review mentions the previous location.', philosophy: null, specialty: 'Wood-fired pizza.',
      anecdotes: [
        { text: '"The Quattro Formaggi was absolutely delicious!" — June 2026, with honey that was "just right—not too overpowering".', source: R + 'B530266506/' },
        { text: '"Since it’s wood-fired, it’s understandable, but there was a bit too much char, which added some bitterness." — June 2026.', source: R + 'B530833446/' },
        { text: '"What impressed me the most was how quickly the pizzas were served!" — September 2026.', source: R + 'B536374858/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): Pizza TOKIO STADIUM、イタリアン・居酒屋・カフェ、大阪市中央区西心斎橋1-6-3 サンライズビル 1F、心斎橋駅から徒歩2分、四ツ橋駅から5分、月〜金12:00〜23:00、土日祝11:30〜23:00 (L.O.22:30)、年中無休、予約可、カード・電子マネー・PayPay 可、80席 (テーブル29、カウンター5、ソファー40、テラス14)、100名までの貸切、電子たばこは全席可・紙たばこはテラスのみ、子ども可・キッズメニュー、ペット可、2023年12月19日オープン。店の紹介 (英訳): 窯で焼く本格的なピザ、パスタ、前菜、手ごろなコース、オリジナルのカクテル、ソファー、テラス、DJ ブース。口コミ(2026年5月〜9月): 薪窯のピザ、はちみつのクアトロフォルマッジ、生ハムのマルゲリータ、もちもちの厚い生地、焦げが少し苦いという声、フェットチーネのカルボナーラ、なすとベーコンのトマトパスタ、フライドポテト、シーシャ (炭を替えてもらえなかったという声)、前の場所から移転、海外の客が多い、誕生日のプレート、ピザが早く出る、テラス席。',
      confidence: 'medium', sources: [TB, R + 'B526271762/', R + 'B528297278/', R + 'B528716345/', R + 'B530266506/', R + 'B530833446/', R + 'B532240914/', R + 'B533557610/', R + 'B534266959/', R + 'B536374858/', R + 'B536420079/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Many international guests (May 2026); picture menu (Tabelog). No English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区西心斎橋1-6-3 サンライズビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区西心斎橋一丁目6番3号 (go) 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B530266506/', R + 'B530833446/'],
    price_note: 'No dated prices in the sources read.', last_checked: TODAY, items: [
      it('', '', 'Quattro formaggi pizza with honey', '', 'Pizza', 'no', 'no', 'June 2026 review.', 'quattro_formaggi'),
      it('', '', 'Margherita with prosciutto', '', 'Pizza', 'no', 'no', 'June 2026 review.', 'margherita_prosciutto'),
      it('', '', 'Rich egg carbonara (fettuccine)', '', 'Pasta', 'no', 'no', 'May–June 2026 reviews.', 'carbonara'),
    ] }, {
    cuisine: '薪窯で焼くピザ、パスタ、前菜、オリジナルのカクテル (食べログ)・はちみつのクアトロフォルマッジ、生ハムのマルゲリータ、縁がもちもちの厚めのピザ (2026年5月〜6月、少し焦げが強かったという声も)・フェットチーネの濃厚な卵のカルボナーラ、なすとベーコンのトマトパスタ、フライドポテト (2026年5月〜6月)・コース、コーヒー、シーシャ (食べログ、2026年5月)',
    neighborhood: '西心斎橋1-6-3、サンライズビル1階。心斎橋駅から2分、四ツ橋駅から5分',
    gf_detail: 'グルテンフリーではありません。名物は小麦の薪窯ピザとパスタ。',
    vegan_detail: '要確認。ヴィーガンの情報なし。ピザやカルボナーラにはチーズ、生ハム、卵を使い、なすとトマトのパスタもある。',
    notes: '[ピザ・西心斎橋、薪窯のピザとシーシャ] 心斎橋駅から2分の、ソファー、テラス、DJ ブースのある広くおしゃれなピザのバーで、前の場所から移転してきた。薪窯のピザは生地がやわらかくもちもちで、はちみつのクアトロフォルマッジに熱心なファンがいて、フェットチーネのカルボナーラなどのパスタの評価も高い。混むこともあるがピザは早く出て、誕生日のプレートにも応えてくれる。シーシャのラウンジでもあり、電子たばこは全席、紙たばこはテラスで可。2026年5月には炭を替えてもらえなかったという常連も。キッズメニューあり、ペット可。',
  });
}

save();
