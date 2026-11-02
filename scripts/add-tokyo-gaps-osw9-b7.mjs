// Tokyo gaps sweep (1-mile circles between the existing Tokyo clusters), circle roppongi — lane osw9, batch 7.
//   + 総作料理 日いづる Sosaku Ryori Hiizuru (no-menu omakase izakaya under the crossing; ever-bigger beer glasses)
//   + 福島 Fukushima (Showa-era basement tempura counter run by an elderly couple)
//   + 碧海 Umi (Edomae sushi with a counter and a kotatsu room, open to 3:30 am on weekdays)
//   + Shangri-La's secret ROPPONGI (mushroom hot pot in a "black soup" of wild mushrooms; vegan options per Tabelog)
//   Skipped: 珉珉 六本木店 13006999 — Minmin, the Osaka gyoza chain (its Tabelog text: first shop in Sennichimae, Osaka, 1953);
//   osaka_minmin_minami_sennichimae_honten and osaka_minmin_namba_walk are already in data.
//   Chain check. Hiizuru, Fukushima, Umi: one listing each. Shangri-La's secret: search results show shops in Omotesando,
//   Ginza and Kitashinchi (Osaka) as well; none in data. None is in data/tokyo.json by name, Tabelog id or address.
//   Hiizuru is in the basement of the building that holds Wagyu Yakiniku Tanjiro (tokyo_wagyu_yakiniku_tanjiro_roppongi,
//   address_ja "東京都港区六本木7-14-11 No.12ニイクラビル 4F"); their Tabelog points are already 10 m apart. Umi's Tabelog
//   point (3-9-3 ロイヤルビル 2F) is the crowded 3-9 block point shared by Roppongi Kinme Sushi and Denroku, so its pin is
//   offset to the south-east, ≥8 m from every neighbour. Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('tokyo-gaps', TODAY, 'osw9-7');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('13006999', '珉珉 六本木店: Minmin gyoza chain (Tabelog text: first shop Sennichimae, Osaka, 1953); osaka_minmin_minami_sennichimae_honten and osaka_minmin_namba_walk already in data');

// ================================================================ 総作料理 日いづる
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13111146/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.hi-iduru.co.jp/index.html';
  const H = day(['18:00', '02:00']);
  put({
    id: 'tokyo_hiizuru_roppongi', name: '総作料理 日いづる (Sosaku Ryori Hiizuru)', category: 'OMNI',
    lat: 35.663261, lng: 139.731743, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. There is no menu; the omakase has included fried crab, burdock tempura, teriyaki chicken, a ramen or pasta finish and homemade bread with honey butter (2024–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog ticks "vegetarian options", and the omakase lets you state preferences, but the standard run is fish, meat and a cheese-bowl Caesar salad.',
    hours_raw: 'From 18:00 until the last guest leaves; closed Sundays, public holidays and over New Year (Tabelog). The closing time here is a placeholder for "until the last guest". No menu: food is omakase, and drinks are chosen from the bottles on the wall (October 2025). Smoking allowed (Tabelog), including cigarettes (November 2024). 34 seats, counter and sofas; private hire for 20–50. Cards; no e-money.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Roppongi 7-14-11, ニイクラビル B1F, under the Roppongi crossing (Wagyu Yakiniku Tanjiro is upstairs) — 1 min from Roppongi Stn exit 4a',
    cuisine: 'No-menu izakaya: an omakase of seasonal dishes by a chef trained at well-known restaurants (Tabelog shop text) · standard omakase course ¥3,800 before tax: a starter, fresh fish, steamed vegetables, a fish dish, a meat dish, rice or snacks (Tabelog) · courses with premium all-you-can-drink around ¥8,000–¥8,800 (2025–2026 reviews), including shochu such as Maou, Moriizo and Murao and sakes such as Juyondai and Isojiman (February and July 2026); food-only course ¥5,000 (November 2025) · regulars: a Caesar salad tossed in a hollowed wheel of cheese, risotto or pasta finished in the cheese, sashimi and carpaccio, grilled ayu in summer, grilled buri collar, charcoal-grilled pork belly and outside skirt, motsunabe (February 2026), homemade bread with honey butter · beer in ever-larger glasses with each order; an original sweet-potato shochu, "39-THANKYOU-"',
    website: SITE, gmaps: gm('日いづる 六本木7-14-11'), menu_url: TB + 'dtlmenu/',
    notes: "[Izakaya · Roppongi, a no-menu omakase izakaya with giant glasses] Down in the basement right at Roppongi crossing, a 34-seat izakaya with no menu at all: you get the chef's omakase of the day — sashimi or carpaccio, the famous Caesar salad tossed in a hollowed wheel of cheese, a grilled fish, a steak or pork belly off the charcoal, and warm homemade bread with honey — and you pick drinks from the shochu and sake lined up on the wall. Each beer comes in a bigger glass than the last, up to something one diner likened to a barrel. The standard omakase is ¥3,800 plus tax, and parties take a premium all-you-can-drink course at about ¥8,000 that has included Juyondai sake. One regular has been coming for about 15 years. A white soft-shelled turtle, the shop's mascot, lives at the counter. Open from 6 pm until the last guest; smoking allowed.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'The Tabelog shop text describes a chef trained at renowned restaurants, a white soft-shelled turtle mascot ("Izuru-chan") at the counter, and an original sweet-potato shochu, "39-THANKYOU-", developed with a maker. An October 2024 reviewer had been coming for about 15 years.',
      philosophy: '"90% chance of becoming a regular!" — omakase, so just tell them your preferences (Tabelog shop text).', specialty: 'No-menu omakase; cheese-bowl Caesar salad; homemade bread.',
      anecdotes: [
        { text: '"I ended up drinking from something that resembled a barrel." (each new drink came in a bigger glass) — November 2024.', source: R + 'B495890908/' },
        { text: '"…Junmai Daiginjo (Juyondai) and Isojiman, both of which are included in the all-you-can-drink option." (sakes served with grilled ayu) — July 2026.', source: R + 'B493489133/' },
        { text: '"There’s no drink menu either, haha. You can just look at the shochu lined up on the wall and order from there." — October 2025.', source: R + 'B516991649/' },
      ],
      japanese_sources_summary: '食べログ: 総作料理 日いづる、港区六本木7-14-11 ニイクラビルB1F、六本木駅4a出口から徒歩1分、18:00〜最終のお客様まで、日祝・年末年始休み、34席、喫煙可、カード可。店の紹介: 名店で修業した料理人のメニューのない総作料理、おまかせが基本、白いすっぽんの看板ペット、オリジナルの芋焼酎「39-THANKYOU-」、驚きの特大グラス、おまかせコース3,800円 (税別)。口コミ(2024年10月〜2026年7月): チーズの器で和えるシーザーサラダ、自家製パンと蜂蜜、鮎の塩焼き、もつ鍋、プレミアム飲み放題のコース約8,000〜8,800円 (Maou、Moriizo、Murao、Juyondai、Isojiman)、杯ごとに大きくなるビールのグラス、15年通う客。',
      confidence: 'medium', sources: [TB, SITE, R + 'B455589805/', R + 'B493489133/', R + 'B495890908/', R + 'B499378045/', R + 'B503750622/', R + 'B505839975/', R + 'B516991649/', R + 'B517258865/', R + 'B520351319/', R + 'B524240406/'] },
    cultural_comfort: { level: 'japanese', note: 'No menu: omakase food and drinks chosen from the wall; no English service is listed on Tabelog.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木7-14-11 ニイクラビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026 (one updated March 2026).' },
    pin_source: `Tabelog ${TB} (35.663261, 139.731743); same building as Wagyu Yakiniku Tanjiro (tokyo_wagyu_yakiniku_tanjiro_roppongi, 4F), 10 m apart; GSI 東京都港区六本木七丁目14番 (lot) 48m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B517258865/', R + 'B503750622/'],
    price_note: 'Omakase price from Tabelog (before tax); course prices from 2025–2026 reviews. There is no printed menu.', last_checked: TODAY, items: [
      it('', '', 'Omakase course (starter, fish, vegetables, fish dish, meat, rice or snacks)', '¥3,800', 'Course', 'ask', 'no', 'Tabelog; before tax.', 'omakase'),
      it('', '', 'Omakase with premium all-you-can-drink', '¥8,000', 'Course', 'ask', 'no', 'February 2026 review; ¥8,800 in March 2025.', 'premium_nomihodai'),
      it('', '', 'Food-only course', '¥5,000', 'Course', 'ask', 'no', 'November 2025 review.', 'food_course'),
    ] }, {
    cuisine: 'メニューのない居酒屋: 名店で修業した料理人の季節のおまかせ (食べログの店の紹介)・おまかせコース3,800円 (税別): 一品、鮮魚、蒸し野菜、魚料理、肉料理、ご飯かおつまみ (食べログ)・プレミアム飲み放題付きのコースは約8,000〜8,800円 (2025〜2026年の口コミ)。焼酎は Maou、Moriizo、Murao、日本酒は Juyondai や Isojiman も (2026年2月、7月)。料理のみのコース5,000円 (2025年11月)・定番: くり抜いたチーズの器で和えるシーザーサラダ、チーズで仕上げるリゾットやパスタ、刺身やカルパッチョ、夏の鮎の塩焼き、ぶりかまの塩焼き、豚バラとハラミの炭火焼き、もつ鍋 (2026年2月)、蜂蜜バターの自家製パン・ビールは頼むたびにグラスが大きくなる。オリジナルの芋焼酎「39-THANKYOU-」',
    neighborhood: '六本木7-14-11 ニイクラビルB1F、六本木の交差点の地下 (上の階に和牛焼肉 炭治郎)。六本木駅4a出口から徒歩1分',
    gf_detail: '要確認。メニューはなく、おまかせには蟹の揚げ物、ごぼうの天ぷら、鶏の照り焼き、締めのラーメンやパスタ、蜂蜜バターの自家製パンが出たことも (2024〜2026年の口コミ)。',
    vegan_detail: '要確認。食べログには「ベジタリアンメニューあり」とあり、おまかせなので希望も伝えられるが、通常は魚、肉、チーズの器のシーザーサラダが中心。',
    notes: '[居酒屋・六本木、メニューのないおまかせと巨大グラスの居酒屋] 六本木の交差点の真下の地下にある34席の居酒屋で、メニューはない。その日の料理人のおまかせで、刺身やカルパッチョ、くり抜いたチーズの器で和える名物のシーザーサラダ、焼き魚、炭火のステーキや豚バラ、温かい自家製パンに蜂蜜と続き、飲み物は壁に並ぶ焼酎や日本酒から選ぶ。ビールは頼むたびにグラスが大きくなり、樽のようだったと書いた客も。通常のおまかせは3,800円 (税別)、宴会はJuyondai も出たことがある約8,000円のプレミアム飲み放題のコース。15年ほど通う常連もいる。カウンターには店のマスコットの白いすっぽんがいる。夜6時から最後の客まで、喫煙可。',
  });
}

// ================================================================ 福島
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13001230/'; const R = TB + 'dtlrvwlst/';
  const L = day(['11:30', '14:00'], ['17:00', '23:00']); const S = day(['17:00', '22:00']);
  put({
    id: 'tokyo_tempura_fukushima_roppongi', name: '福島 (Fukushima)', category: 'OMNI',
    lat: 35.664147, lng: 139.732289, cuisine_type: 'tempura',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: battered tempura served with a tentsuyu dipping sauce or a rich bowl sauce.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: vegetable tempura shares the oil with shrimp and fish, and sets come with red miso clam soup (July 2025).',
    hours_raw: 'Mon–Fri 11:30–14:00 (last order 13:30) and 17:00–23:00 (last order 22:00); Sat and holidays 17:00–22:00 (last order 21:00); closed Sundays and over New Year (Tabelog). 10% service charge (Tabelog; may apply to dinner). 30 seats: a counter round the open kitchen and private rooms for 2 or 4. Smoking allowed (Tabelog). Cards (VISA, Master, JCB, AMEX) or cash (April 2025). English menu (Tabelog). The listing is not shop-maintained; the newest reviews read are from July 2025.',
    hours: { 0: L, 1: L, 2: L, 3: L, 4: L, 5: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Roppongi 4-10-12, 狸ビル B1F, down a flight of stairs — 3 min from Roppongi Stn exit 4',
    cuisine: 'Freshly fried tempura at a counter (reviews 2022–2025) · lunch set meals with rice, red miso soup and pickles: tempura set ¥1,200 (November 2022, with a small sashimi), shrimp set of three shrimp, three vegetables and a shiso-wrapped shrimp ¥1,500 (July 2025), vegetable tempura ¥1,500 with unlimited rice (April 2025), mixed set ¥1,400 (2023) · tempura rice bowl ¥1,200, anago tempura bowl ¥1,100 (2022) · special set with shrimp, anago, two fish, four vegetables and kakiage (July 2024) · tempura scraps to take home (July 2025)',
    website: null, gmaps: gm('天ぷら 福島 六本木4-10-12'), menu_url: TB + 'dtlmenu/',
    notes: "[Tempura · Roppongi, a Showa-era tempura counter run by an elderly couple] Down the stairs of a small building three minutes from Roppongi crossing, a counter wrapped round the kitchen where, reviewers say, an elderly couple have long run a tempura shop that feels out of time for Roppongi: one fries at the counter while the other sets out pickles and red miso soup and smiles at the till. Lunch sets of shrimp, anago, fish and seasonal vegetables run about ¥1,200–¥1,500, a tempura bowl comes in a rich sauce, and rice refills are free. A twelve-time regular in April 2025 called it a rare spot for freshly fried tempura at a fair price in Roppongi; another diner found the portions small. Smoking is allowed. The listing is not shop-maintained and the newest reviews are from mid-2025, so check before a special trip.",
    chef_bio: { chef_name: null, roles: ['Couple-run (unnamed)'], origin: null,
      background: 'Reviewers from 2022 to 2025 describe the shop as run by an elderly couple: "Run by an elderly couple" (April 2025, twelfth visit); "An elderly couple runs the restaurant together" (November 2023); "As the chef fried the tempura, the owner set up small side dishes, pickles, and red miso soup" (July 2022). Neither is named in the sources read.',
      philosophy: null, specialty: 'Freshly fried tempura lunch sets; anago tempura bowl.',
      anecdotes: [
        { text: '"Run by an elderly couple, the restaurant exudes a nostalgic Showa-era atmosphere." — April 2025, mixed set meal.', source: R + 'B433777564/' },
        { text: '"The shrimp set comes with three shrimp, three pieces of vegetables, and one shrimp wrapped in perilla leaves." — July 2025, ¥1,500.', source: R + 'B509746328/' },
        { text: '"I felt the portion of tempura was small and left me wanting more." — April 2025, vegetable tempura ¥1,500.', source: R + 'B505360102/' },
      ],
      japanese_sources_summary: '食べログ: 福島、港区六本木4-10-12 狸ビルB1F、六本木駅4番出口から徒歩3分、月〜金11:30〜14:00 (L.O.13:30)・17:00〜23:00 (L.O.22:00)、土祝17:00〜22:00、日曜・年末年始休み、サービス料10%、30席、個室 (2・4名)、喫煙可、カード可、英語メニュー。口コミ(2022年4月〜2025年7月): 年配のご夫婦が営む昭和の雰囲気の天ぷら屋、厨房を囲むカウンター、天ぷら定食1,200円、海老定食1,500円、野菜天ぷら1,500円 (ご飯おかわり自由)、天丼1,200円、穴子天丼1,100円、赤だし、漬物、天かすの持ち帰り。',
      confidence: 'low', sources: [TB, R + 'B433777564/', R + 'B448542286/', R + 'B452136564/', R + 'B456684175/', R + 'B457670625/', R + 'B471515572/', R + 'B473204620/', R + 'B474803165/', R + 'B505360102/', R + 'B509746328/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu (Tabelog); set meals at the counter.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '東京都港区六本木4-10-12 狸ビル B1F',
    existence: { status: 'probable', checked: TODAY, note: 'Tabelog listing (not shop-maintained); newest reviews read are from July 2025.' },
    pin_source: `Tabelog ${TB} (35.664147, 139.732289); GSI 東京都港区六本木四丁目10番 (lot) 25m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B509746328/', R + 'B505360102/', R + 'B456684175/'],
    price_note: 'Prices from 2022–2025 reviews; check current prices.', last_checked: TODAY, items: [
      it('', '', 'Shrimp tempura set (3 shrimp, 3 vegetables, shiso-wrapped shrimp), rice, miso soup, pickles', '¥1,500', 'Lunch', 'no', 'no', 'July 2025 review.', 'ebi_set'),
      it('', '', 'Vegetable tempura set, unlimited rice', '¥1,500', 'Lunch', 'no', 'no', 'April 2025 review.', 'yasai_set'),
      it('', '', 'Tempura set meal', '¥1,200', 'Lunch', 'no', 'no', 'November 2022 review.', 'tempura_set'),
      it('', '', 'Tempura rice bowl', '¥1,200', 'Lunch', 'no', 'no', 'April 2022 review.', 'tendon'),
    ] }, {
    cuisine: 'カウンターで揚げたての天ぷら (2022〜2025年の口コミ)・ご飯、赤だし、漬物付きの昼の定食: 天ぷら定食1,200円 (2022年11月、小鉢の刺身付き)、海老3尾・野菜3品・大葉巻きの海老の海老定食1,500円 (2025年7月)、ご飯おかわり自由の野菜天ぷら1,500円 (2025年4月)、ミックス定食1,400円 (2023年)・天丼1,200円、穴子天丼1,100円 (2022年)・海老、穴子、魚2種、野菜4品、かき揚げの特製定食 (2024年7月)・天かすの持ち帰りも (2025年7月)',
    neighborhood: '六本木4-10-12 狸ビルB1F、階段を下りた地下。六本木駅4番出口から徒歩3分',
    gf_detail: 'グルテンフリー不可。衣をつけて揚げる天ぷらで、天つゆか濃いめの丼のたれで食べる。',
    vegan_detail: 'ヴィーガン不可。野菜の天ぷらも海老や魚と同じ油で揚げ、定食には貝の赤だしが付く (2025年7月)。',
    notes: '[天ぷら・六本木、年配のご夫婦が営む昭和の天ぷらカウンター] 六本木の交差点から3分、小さなビルの階段を下りると、厨房を囲むカウンター。口コミによれば年配のご夫婦が長く営む天ぷら屋で、六本木とは思えない昭和の空気が流れる。一人がカウンターで揚げ、もう一人が漬物や赤だしを用意し、レジで笑顔を見せる。海老、穴子、魚、季節の野菜の昼の定食は1,200〜1,500円ほど、天丼は濃いめのたれで、ご飯はおかわり自由。2025年4月に12回目という常連は、六本木で揚げたての天ぷらを手頃に食べられる貴重な店と書き、量が少ないと感じた客も。喫煙可。食べログの掲載は店の管理外で、最新の口コミは2025年半ばなので、わざわざ行く前に確認を。',
  });
}

// ================================================================ 碧海
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13019207/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.roppongi-umi.com/';
  const W = day(['17:00', '03:30']); const S = day(['17:00', '23:00']);
  put({
    id: 'tokyo_umi_sushi_roppongi', name: '碧海 (Umi)', category: 'OMNI',
    lat: 35.66378, lng: 139.73432, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Nothing is called gluten-free; courses mix nigiri with appetizers and warm dishes, and vegetables come with a homemade miso (August 2025).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an Edomae sushi omakase.',
    hours_raw: 'Mon–Fri 17:00–03:30 (last order 03:00); Sat 17:00–23:00 (last order 22:30); closed Sundays and public holidays (Tabelog). A 10% service charge and a 10% table charge (Tabelog). Seat-only bookings taken; courses or à la carte. 20 seats: 9 at the counter, a hexagonal sunken-kotatsu room for 6, tables for 8; private hire up to 20. Heated tobacco only, in a smoking area. Cards and PayPay; no e-money. Children welcome.',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Roppongi 3-9-3, ロイヤルビル 2F — 2 min from Roppongi Stn exit 5 (Hibiya line)',
    cuisine: 'Edomae sushi until late, as courses or à la carte (Tabelog shop text) · the chef\'s "deluxe course" built on the day\'s fish; the "Umi course" (June 2026); a ¥20,000 course (November 2025) · signature sea-urchin and salmon-roe rice bowl (Tabelog; June 2026) · kombu with herring roe to start, vegetables with homemade miso (August 2025); fluffy anago and sweet uni (May 2025) · rare sakes chosen by the owner',
    website: SITE, gmaps: gm('碧海 六本木3-9-3'), menu_url: TB + 'dtlmenu/',
    notes: "[Sushi · Roppongi, Edomae sushi until 3:30 in the morning] A second-floor sushi bar a couple of minutes from Roppongi Station that keeps serving until 3:30 am on weekdays, so the counter fills with late diners — one April 2026 visitor came at 2 am and noted many guests arriving from cabarets and lounges. Nine counter seats face the chef, and a hexagonal sunken-kotatsu room seats six for business dinners. There is no fixed sushi menu: let the chef choose (a ¥20,000 course in November 2025) or order à la carte; the signature is a rice bowl heaped with sea urchin and salmon roe. Reviewers return for the chef's warmth and memory for faces; one has been coming for almost 20 years. Rare sakes picked by the owner. Note the 10% service plus 10% table charge.",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)'], origin: null,
      background: 'Reviewers describe a warm, attentive chef who remembers returning guests (May 2025) and asks about time constraints (February 2025); one July 2024 regular had been coming for almost 20 years. The Tabelog shop text mentions sake chosen by the owner. No one is named in the sources read.',
      philosophy: 'Authentic Edomae sushi until late at night, at a lively counter (Tabelog shop text).', specialty: 'Late-night omakase; sea-urchin and salmon-roe bowl.',
      anecdotes: [
        { text: '"I visited around 2 AM. It\'s rare to find a sushi restaurant open late at night… It seems like many customers come here after visiting cabarets or lounges." — April 2026.', source: R + 'B525948245/' },
        { text: '"The highlight of the course was undoubtedly the stunning \'Uni and Ikura Rice Bowl.\'" — June 2026, Umi course.', source: R + 'B530526652/' },
        { text: '"The chef here is truly kind and friendly… I\'ve been coming here regularly for almost 20 years!" — July 2024.', source: R + 'B489685226/' },
      ],
      japanese_sources_summary: '食べログ: 碧海、港区六本木3-9-3 ロイヤルビル2F、日比谷線六本木駅5番出口から徒歩2分、月〜金17:00〜翌3:30 (L.O.3:00)、土17:00〜23:00、日祝休み、サービス料10%・チャージ料10%、20席 (カウンター9、座敷6、テーブル8)、六角形の掘りごたつの個室、加熱式たばこのみの喫煙所、カード・PayPay可。店の紹介: 深夜まで本格江戸前鮨、名物の雲丹といくらの丼、店主が選ぶ希少な日本酒、その日の鮮魚で決める大将おまかせの特選コース。口コミ(2024年6月〜2026年6月): 温かく気さくな大将、20年近く通う客、深夜2時の来店、子持ち昆布、自家製味噌の野菜、2万円のコース。',
      confidence: 'medium', sources: [TB, SITE, R + 'B487312134/', R + 'B487331235/', R + 'B489685226/', R + 'B502830643/', R + 'B511393590/', R + 'B517058204/', R + 'B521517348/', R + 'B525948245/', R + 'B527408367/', R + 'B530526652/'] },
    cultural_comfort: { level: 'japanese', note: 'Omakase or à la carte at the counter; no English service is listed on Tabelog.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木3-9-3 ロイヤルビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB} (35.663842, 139.734231), the shared 3-9 block point (Roppongi Kinme Sushi tokyo_roppongi_kinme_sushi; Denroku tokyo_denroku_roppongi), so offset to the south-east: 8 m from Sushi Toki, 10 m from Kinme, 11 m from Takei; GSI 東京都港区六本木三丁目9番 (lot) 35m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B517058204/', TB],
    price_note: 'Course price from a November 2025 review; 10% service and 10% table charge on top.', last_checked: TODAY, items: [
      it('', '', 'Omakase course', '¥20,000', 'Course', 'ask', 'no', 'November 2025 review.', 'omakase'),
      it('', '', 'Sea-urchin and salmon-roe rice bowl', '', 'Sushi', 'ask', 'no', 'Tabelog shop text; June 2026 review.', 'uni_ikura_don'),
    ] }, {
    cuisine: '深夜まで食べられる江戸前鮨、コースかアラカルト (食べログの店の紹介)・その日の鮮魚で決める大将おまかせの特選コース、「Umi コース」(2026年6月)、2万円のコース (2025年11月)・名物は雲丹といくらの丼 (食べログ、2026年6月)・前菜の子持ち昆布、自家製味噌で食べる野菜 (2025年8月)、ふわふわの穴子と甘い雲丹 (2025年5月)・店主が選ぶ希少な日本酒',
    neighborhood: '六本木3-9-3 ロイヤルビル2F。六本木駅5番出口 (日比谷線) から徒歩2分',
    gf_detail: '要確認。グルテンフリーの説明はない。コースは握りと前菜や温かい料理が交互に出て、野菜は自家製味噌で (2025年8月)。',
    vegan_detail: 'ヴィーガン不可。江戸前鮨のおまかせ。',
    notes: '[鮨・六本木、朝3時半まで開く江戸前鮨] 六本木駅から2分のビルの2階、平日は朝3時半まで開いている鮨屋で、遅い時間の客でカウンターが埋まる。2026年4月に夜中の2時に来た客は、キャバレーやラウンジ帰りの客が多いと書いた。カウンター9席は大将の正面で、六角形の掘りごたつの個室は6人まで、接待にも使える。決まった鮨のメニューはなく、大将のおまかせ (2025年11月は2万円のコース) かアラカルトで。名物は雲丹といくらをたっぷりのせた丼。口コミでは大将の温かさや客の顔を覚えていることが好評で、20年近く通う常連も。店主が選ぶ希少な日本酒も。サービス料10%とチャージ料10%がかかる。',
  });
}

// ================================================================ Shangri-La's secret ROPPONGI
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13175214/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '15:00'], ['18:00', '23:00']);
  put({
    id: 'tokyo_shangri_las_secret_roppongi', name: "Shangri-La's secret ROPPONGI", category: 'OMNI',
    lat: 35.664243, lng: 139.731554, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Nothing is called gluten-free. The hot pot is dipped in soy sauce, sesame (with shrimp) and chili-oil sauces, courses include shrimp dumplings, a deep-fried yamabushitake skewer and mushroom noodles to finish (October 2026); the black soup\'s ingredients beyond mushrooms are not given.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog ticks "vegan options" and "vegetarian options", and the black soup is described as simmered from natural mushrooms, but the standard courses add seafood, shrimp dumplings and meat, the soy dip has a hint of fish sauce and the sesame dip a shrimp flavour (October 2026). Ask for a vegan course and what goes into the soup.',
    hours_raw: 'Daily lunch 12:00–15:00 (last entry 13:30 on weekdays) and dinner 18:00–23:00 (last entry 21:30; food last order 22:00, drinks 22:30); closed 29 December–4 January (Tabelog). One course per person; two-hour seating; no-shows released after 20 minutes; dinner cancellation fees after 15:00 on the day (Tabelog). No service charge; private-room fees ¥10,000 (6), ¥15,000 (8), ¥25,000 (14), by phone only. 42 seats; one pot per person. Non-smoking; wheelchair accessible. Cards (incl. UnionPay), IC/e-money and QR (PayPay, Alipay, WeChat Pay).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Roppongi 4-11-11, 六本木GMビル 4F, on the main street towards Midtown — 1 min from Roppongi Stn exit 7 (Oedo line)',
    cuisine: 'Mushroom hot pot, one pot each, in a "secret black soup" slow-simmered from natural mushrooms (Tabelog shop text; October 2026 reviews mention over 30 kinds of dried mushrooms, and natural mushrooms from Yunnan) · rare fresh mushrooms from around Japan; a Roppongi-only course of 16 mushrooms; a spicy mala black soup (Tabelog) · lunch course "Rinka", 12 dishes, ¥7,480 (listed at ¥9,350): black-fungus starter, yamabushitake skewer, black soup, 8 mushrooms, vegetables and three Chinese tofus, seafood (shrimp dumplings, abalone, scallops), two meats for shabu-shabu from Shimane beef, Okinawa kurobuta, Shizuoka chicken or Australian lamb, mushroom noodles, sorbet, mushroom tea (October 2026); truffle egg rice +¥1,000–1,200 · "Mushroom HOUJOH" course of 11 dishes (October 2026); Roppongi-only course ¥11,550 (February 2025)',
    website: null, gmaps: gm("Shangri-La's secret 六本木"), menu_url: TB + 'dtlmenu/',
    notes: "[Hot pot · Roppongi, mushroom shabu-shabu in a black soup] On the fourth floor along the main road a minute from Roppongi Station, a calm, dimly lit room with marble tables where each diner gets a pot of \"secret black soup\", simmered from wild mushrooms — Yunnan mushrooms, according to an October 2026 review — and refilled as it reduces. Courses bring plates of unusual mushrooms (tamogitake, hanabira and more), Chinese tofu, a crisp skewer of fried yamabushitake, seafood such as abalone and scallops, and a choice of meats to swish through the broth, then mushroom noodles or a truffle egg rice. Lunch courses start at ¥7,480. Tabelog lists vegan and vegetarian options, though the standard courses include seafood and meat and the dips use shrimp and fish sauce — ask when booking. One of several Shangri-La's secret shops (others in Omotesando, Ginza and Osaka's Kitashinchi, per search results).",
    chef_bio: { chef_name: null, roles: [], origin: 'Part of the Shangri-La\'s secret group (Omotesando, Ginza, Kitashinchi per web search results)',
      background: 'The Tabelog shop text describes natural mushrooms slow-simmered into a black soup, rare fresh mushrooms sourced around Japan, and a Roppongi-only course with 16 mushrooms. Branch locations come from search results, not from pages opened.',
      philosophy: 'A guilt-free dining space that fits your lifestyle, open year-round (Tabelog shop text).', specialty: 'Black mushroom soup hot pot; fried yamabushitake.',
      anecdotes: [
        { text: '"The secret black soup, made from the umami extracted from over 30 types of dried mushrooms, offers a deep flavor that is completely different from typical shabu-shabu." — October 2026.', source: R + 'B537183766/' },
        { text: '"The deep-fried Yamabushitake mushrooms were incredibly delicious… The outside was crispy while the inside was fluffy." — October 2026, Mushroom HOUJOH course.', source: R + 'B536960195/' },
        { text: '"The dipping sauces are also noteworthy; the sesame sauce has a lovely shrimp flavor, while the soy sauce has hints of fish sauce." — October 2026.', source: R + 'B538465208/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): Shangri-La\'s secret ROPPONGI、港区六本木4-11-11 六本木GMビル4F、大江戸線六本木駅7番出口から徒歩1分、毎日12:00〜15:00・18:00〜23:00 (最終入店は平日昼13:30、夜21:30)、年末年始休み (12月29日〜1月4日)、1人1コース、2時間制、サービス料なし、個室料 (6名10,000円、8名15,000円、14名25,000円)、42席、禁煙、車椅子可、カード・電子マネー・QR可、ヴィーガンとベジタリアンのメニューあり。天然きのこを煮込んだ「秘伝の黒いスープ」、全国の希少な生きのこ、六本木限定の16種のきのこのコース、麻辣の黒スープも。口コミ(2025年2月〜2026年11月): Yunnan のきのこ、Yamabushitake の串揚げ、8〜10種のきのこ、中華の豆腐、海老餃子、鮑、帆立、選べる2種の肉、きのこの麺、トリュフの卵ご飯、昼のコース7,480円、たれは醤油・ラー油・胡麻 (海老風味)、醤油に魚醤。',
      confidence: 'medium', sources: [TB, R + 'B501318785/', R + 'B536665552/', R + 'B536960195/', R + 'B537183766/', R + 'B537374211/', R + 'B537645193/', R + 'B537935389/', R + 'B538100225/', R + 'B538420349/', R + 'B538465208/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set courses; staff explain the cooking times for each plate (October 2026).' },
    safety: { ...SAFETY0, vegan_cross_contact: [{ text: 'October 2026 review: "the sesame sauce has a lovely shrimp flavor, while the soy sauce has hints of fish sauce" — the standard dips are not vegan.', source: R + 'B538465208/' }] },
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木4-11-11 六本木GMビル 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.664243, 139.731554); GSI 東京都港区六本木四丁目11番 (lot) 23m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537645193/', R + 'B501318785/'],
    price_note: 'Course prices from October 2026 and February 2025 reviews (tax included).', last_checked: TODAY, items: [
      it('', 'Rinka', 'Lunch course "Rinka", 12 dishes', '¥7,480', 'Course', 'ask', 'no', 'October 2026 review; listed at ¥9,350.', 'rinka_lunch'),
      it('', '', 'Roppongi-only mushroom course', '¥11,550', 'Course', 'ask', 'no', 'February 2025 review.', 'roppongi_course'),
      it('', '', 'Truffle egg rice (upgrade)', '+¥1,200', 'Course', 'ask', 'no', 'October 2026 review (+¥1,000 in another).', 'truffle_rice'),
    ] }, {
    cuisine: '一人一鍋のきのこの鍋。天然きのこをじっくり煮込んだ「秘伝の黒いスープ」(食べログの店の紹介。2026年10月の口コミでは Yunnan の30種以上の乾燥きのこ)・全国の希少な生きのこ、六本木限定の16種のきのこのコース、辛い麻辣の黒スープも (食べログ)・昼のコース「Rinka」12品7,480円 (通常9,350円): 黒木耳の前菜、Yamabushitake の串、黒いスープ、8種のきのこ、野菜と3種の中華の豆腐、海鮮 (海老餃子、鮑、帆立)、Shimane の牛、Okinawa の黒豚、Shizuoka の鶏、Australia の仔羊から選ぶしゃぶしゃぶの肉2種、きのこの麺、ソルベ、きのこ茶 (2026年10月)。トリュフの卵ご飯 +1,000〜1,200円・11品の「Mushroom HOUJOH」コース (2026年10月)、六本木限定のコース11,550円 (2025年2月)',
    neighborhood: '六本木4-11-11 六本木GMビル4F、ミッドタウン方面の大通り沿い。六本木駅7番出口 (大江戸線) から徒歩1分',
    gf_detail: '要確認。グルテンフリーの説明はない。鍋は醤油、海老の風味の胡麻、ラー油のたれで食べ、コースには海老餃子、Yamabushitake の串揚げ、締めのきのこの麺も (2026年10月)。黒いスープのきのこ以外の材料は書かれていない。',
    vegan_detail: '要確認。食べログには「ヴィーガンメニューあり」「ベジタリアンメニューあり」とあり、黒いスープは天然きのこを煮込んだものとされるが、通常のコースには海鮮、海老餃子、肉が入り、醤油のたれには魚醤、胡麻だれには海老の風味 (2026年10月)。ヴィーガンのコースとスープの材料を予約時に確認を。',
    notes: '[鍋・六本木、黒いスープのきのこしゃぶしゃぶ] 六本木駅から1分、大通り沿いの4階。大理石のテーブルの落ち着いた薄暗い店で、一人一鍋の「秘伝の黒いスープ」は天然のきのこを煮込んだもので (2026年10月の口コミでは Yunnan のきのこ)、減るとつぎ足してくれる。コースではTamogitake や Hanabira など珍しいきのこの皿、中華の豆腐、カリッと揚げた Yamabushitake の串、鮑や帆立などの海鮮、選べる肉をくぐらせ、締めはきのこの麺かトリュフの卵ご飯。昼のコースは7,480円から。食べログにはヴィーガンやベジタリアンのメニューありとあるが、通常のコースは海鮮と肉入りで、たれには海老や魚醤も使うので予約時に確認を。Shangri-La\'s secret の店のひとつで、検索結果によれば表参道、銀座、大阪の北新地にもある。',
  });
}

save();
