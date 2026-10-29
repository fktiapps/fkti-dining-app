// Osaka sweep (2-mile circle around Dotonbori), batch 171 — mom phase (≤20 seats, 30+ reviews, nearest-first).
//   + 鮨 銀座おのでら 息子 なんば店 (Edomae sushi by the piece, ordered on a tablet; Sennichimae hotel)
//   + まほろば囲炉裏 心斎橋 (irori charcoal courses: Wagyu, live lobster and abalone; Higashi-Shinsaibashi)
//   + 小皿kitchen cocoro (cheap small plates and lunch sets, smoking allowed; Higashi-Shinsaibashi)
//   + 立ち呑み クック オッソ オッセョ! (Korean-Italian standing bar in Jumbo Yokocho, 3 nights a week)
//   Skips: 27131791 ドトールスタンド なんば千日前店, 27113488 たこ家道頓堀くくる 大丸心斎橋店.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-29';
const { put, skip, save } = openCitySweep('osaka', TODAY, 171);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27131791', 'National coffee-stand chain (Doutor); not a sweep target.');
skip('27113488', 'Chain branch: Takoya Dotonbori Kukuru already in data.');

// ================================================================ 鮨 銀座おのでら 息子 なんば店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27151952/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://onodera-group.com/sushi-musuko-namba/';
  put({
    id: 'osaka_sushi_ginza_onodera_musuko_namba', name: '鮨 銀座おのでら 息子 なんば店 (Sushi Ginza Onodera Musuko Nanba ten)', category: 'OMNI',
    lat: 34.665857, lng: 135.503852, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Pieces come already seasoned, with no soy sauce on the counter (September 2026), so ask what each is brushed with.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: a fish sushi counter; nothing described as vegan.',
    hours_raw: 'Daily 11:30–22:30; last entry 21:30, last order 22:00 (Tabelog); a July 2026 review gives 11:00 opening and closed only at New Year. Reservations cancelled if 15+ minutes late (Tabelog). Cards, e-money and QR (including Alipay and WeChat Pay) accepted (Tabelog). Non-smoking. Children and strollers welcome (Tabelog). Opened 3 October 2025 (Tabelog).',
    hours: ALL(day(['11:30', '22:30'])), hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sennichimae 2-8-17, Namba Oriental Hotel 1F — 5 min from Namba or Nippombashi Stn',
    cuisine: 'Edomae sushi by the piece at a 13-seat counter plus a 6-seat semi-private room · order on a tablet; choose size, rice amount and wasabi · red-vinegar rice · tuna from the wholesaler Yama Ko; house-cured kohada; simmered anago · nara-zuke toro-taku hand roll · Sennichimae Roll and Namba Mountain (shop originals) · isaki, hairy crab, seared scallop, three kinds of shrimp, akagai, nodoguro, seared hokki clam, seared engawa · snow crab and ikura chawanmushi · tamago · sake; yuzu sour',
    website: OWN, gmaps: gm('鮨 銀座おのでら 息子 なんば店'), menu_url: null,
    notes: "[Sushi · Onodera-group Edomae sushi by the piece, ordered on a tablet, Namba] A casual counter from the Ginza Onodera sushi group, on the ground floor of the Namba Oriental Hotel, where you order authentic Edomae sushi one piece at a time on a tablet, choosing size, rice amount and wasabi, and help yourself to tea like at a conveyor-belt shop. The rice is seasoned with red vinegar and the pieces arrive already brushed, so there's no soy sauce on the counter. Diners single out isaki, anago, hairy crab, akagai and the nara-zuke toro-taku hand roll; one found the featured tuna underwhelming. Shop originals include a Sennichimae Roll and 'Namba Mountain'. Expect ¥5,000–10,000; families welcome; menus in English, Chinese and Korean.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 3 October 2025; part of the Onodera group (Tabelog; official site).', background: 'Counter sushi in a hotel, with a staff-maintained Tabelog listing (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Edomae sushi by the piece.',
      anecdotes: [
        { text: '"…orders are placed via a tablet, allowing us to order sushi by the piece, and the tea is self-service… The rice was of the red vinegar type, with the right moisture and temperature…" — September 2026.', source: R + 'B525557028/' },
        { text: '"The rich flavor of the tuna combined with the moderate saltiness and crunchy texture of the Nara-zuke created an unexpectedly perfect match." — July 2026, Nara-zuke Toro-Taku hand roll.', source: R + 'B532582953/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員の公式情報): 鮨 銀座おのでら 息子 なんば店、大阪市中央区千日前2-8-17 なんばオリエンタルホテル 1F、なんば駅・日本橋駅から徒歩5分、毎日11:30〜22:30 (最終入店21:30、L.O. 22:00)、2025年10月3日開店、予約は15分遅れでキャンセル扱い、カード・電子マネー・QR可、禁煙、19席 (カウンター13、半個室6)、子ども・ベビーカー歓迎、英語・中国語・韓国語のメニュー、マグロは仲卸 Yama Ko から、自家製の kohada、煮 anago、千日前ロールとなんばマウンテン。口コミ(2026年7〜10月): タブレットで一貫ずつ注文、大きさ・シャリの量・わさびを選べる、お茶はセルフ、赤酢のシャリ、醤油は置かずに仕上げて出す、isaki、毛蟹、炙りホタテ、海老3種、akagai、写真に「クラゲポン酢」「のどぐろと、ほっき貝炙り」「げそ」「柚子サワー」、nara-zuke の toro-taku の手巻き、マグロは期待ほどではなかったという声、予算5,000〜10,000円。',
      confidence: 'medium', sources: [TB, OWN, R + 'B525557028/', R + 'B532582953/', R + 'B534836355/', R + 'B535503001/', R + 'B535562913/', R + 'B537353542/'] },
    cultural_comfort: { level: 'english', note: 'Tablet ordering; menus in English, Chinese and Korean; English-speaking staff (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区千日前2-8-17 なんばオリエンタルホテル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Staff-maintained Tabelog listing; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; GSI 大阪府大阪市中央区千日前二丁目8番17号 (go) 58m — Tabelog point kept (inside the Namba Oriental Hotel); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537353542/', R + 'B532582953/'],
    price_note: 'No piece prices in the reviews; about ¥5,000–10,000 per person (Tabelog, reviews).', last_checked: TODAY, items: [
      it('', '', 'Nara-zuke toro-taku hand roll', '', 'Rolls', 'ask', 'no', 'July–October 2026.', 'torotaku'),
      it('', '', 'Sennichimae Roll', '', 'Rolls', 'ask', 'no', 'Tabelog listing.', 'sennichimae'),
      it('クラゲポン酢', '', 'Jellyfish with ponzu', '', 'Small plates', 'ask', 'no', 'October 2026.', 'kurage'),
      it('', '', 'Snow crab and ikura chawanmushi', '', 'Small plates', 'ask', 'no', 'October 2026.', 'chawanmushi'),
    ] }, {
    cuisine: 'カウンター13席と半個室6席の一貫ずつのEdomae 鮨・タブレットで注文、大きさ・シャリの量・わさびを選べる・赤酢のシャリ・仲卸 Yama Ko のマグロ、自家製の kohada、煮 anago・nara-zuke の toro-taku の手巻き・オリジナルの千日前ロールとなんばマウンテン・isaki、毛蟹、炙りホタテ、海老3種、akagai、のどぐろ、ほっき貝炙り、炙り engawa・ズワイガニと ikura の chawanmushi・玉子・日本酒、柚子サワー',
    neighborhood: '千日前2-8-17 なんばオリエンタルホテル 1F。なんば駅・日本橋駅から徒歩5分',
    gf_detail: '要確認。鮨は仕上げて出され、カウンターに醤油は置いていない (2026年9月)。それぞれに何を塗っているか確認を。',
    vegan_detail: '実質ヴィーガンではありません。魚の鮨のカウンター。ヴィーガンの記載なし。',
    notes: '[鮨・なんば、タブレットで一貫ずつ頼むおのでらのEdomae 鮨] 銀座おのでらのグループの気軽なカウンターで、なんばオリエンタルホテルの1階。本格的なEdomae 鮨をタブレットで一貫ずつ、大きさやシャリの量、わさびを選んで注文し、お茶は回転寿司のようにセルフ。シャリは赤酢で、仕上げて出すのでカウンターに醤油はない。isaki、anago、毛蟹、akagai、nara-zuke の toro-taku の手巻きを挙げる声、目玉のマグロは期待ほどではなかったという声も。オリジナルの千日前ロールや「なんばマウンテン」も。予算5,000〜10,000円、家族連れ歓迎、英語・中国語・韓国語のメニュー。',
  });
}

// ================================================================ まほろば囲炉裏 心斎橋
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27120260/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '00:00']);
  put({
    id: 'osaka_mahoroba_irori_shinsaibashi', name: 'まほろば囲炉裏 心斎橋 (Mahoroba Irori Shinsaibashi)', category: 'OMNI',
    lat: 34.672609, lng: 135.503243, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; the courses use sauces (including XO sauce on the Wagyu and an abalone sauce), though one diner had a sauce changed on request (August 2026).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses built on seafood, Wagyu, wild boar and duck.',
    hours_raw: 'Mon–Sat and holidays 18:00–24:00 (food last order 23:00); closed Sunday (Tabelog). Appetizer charge ¥1,000 (Tabelog). À la carte items vary with the season (Tabelog). Cards accepted; no e-money or QR (Tabelog). Heated tobacco only (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 1-16-32, BE\'S50 Bldg 1F, in a back alley — 3 min from Shinsaibashi Stn',
    cuisine: 'Irori (sunken-hearth) charcoal grilling over Kishu binchotan, 16 seats with a private room · seasonal omakase courses: small fish, large clams, live lobster and live abalone, Wagyu, wild boar, duck, vegetables · Wagyu seared with XO sauce · Wagyu strip-loin rice bowl · unadon to finish (one visit) · honey served before the meal · sake and wine',
    website: null, gmaps: gm('まほろば囲炉裏 心斎橋'), menu_url: TB + 'dtlmenu/',
    notes: "[Charcoal grill · seasonal irori courses over binchotan, Shinsaibashi] A calm, upscale charcoal-grill restaurant in a Shinsaibashi back alley, built around sunken irori hearths burning Kishu binchotan, which keeps smoke down. The seasonal courses run through small fish, juicy large clams, live lobster and abalone, Wagyu, wild boar, duck and vegetables, mostly grilled in front of you (one diner grilled at the hearth themselves). The Wagyu is seared with XO sauce for a smoky edge, and a thick-cut Wagyu strip-loin rice bowl is the closer two diners rave about. One diner asked to skip a sauce ingredient and the chef made an abalone-liver sauce on the spot. Expect ¥20,000–30,000 for a full course; ¥1,000 appetizer charge. Closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Charcoal irori restaurant (Tabelog; 2026 reviews).', philosophy: 'Seasonal ingredients grilled over Kishu binchotan (August 2026 reviews).', specialty: 'Charcoal-grilled Wagyu and seafood courses.',
      anecdotes: [
        { text: '"The seasonal ingredient courses are well-balanced, featuring seafood, Wagyu beef, wild boar, duck, and vegetables… carefully grilled over charcoal right in front of us…" — August 2026.', source: R + 'B533100010/' },
        { text: '"Interestingly, the chef used XO sauce to add a smoky flavor while cooking the Wagyu." — August 2026.', source: R + 'B534801202/' },
      ],
      japanese_sources_summary: '食べログ: まほろば囲炉裏 心斎橋、大阪市中央区東心斎橋1-16-32 BE\'S50ビル 1F、心斎橋駅から徒歩3分、月〜土・祝18:00〜24:00 (料理L.O. 23:00)、日曜休み、お通し1,000円、カード可、電子マネー・QR不可、加熱式たばこのみ、16席、個室あり、アラカルトは季節や仕入れで変わる。口コミ(2026年7〜8月): 心斎橋の裏路地の囲炉裏の店、Kishu binchotan で煙やにおいが少ない、季節のコース (小魚、大きな貝、活けのロブスターとあわび、和牛、猪、鴨、野菜)、目の前で炭火焼き、自分で焼くという声も、和牛に XO 醤で香りづけ、厚切りの和牛サーロインの丼、食事の前にはちみつ、苦手な材料を伝えるとあわびの肝のソースをその場で、予算20,000〜30,000円。',
      confidence: 'medium', sources: [TB, R + 'B533100010/', R + 'B533212402/', R + 'B533551083/', R + 'B534667511/', R + 'B534801202/', R + 'B536147991/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Course dining; the chef adjusted a sauce on request (August 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-16-32 BE\'S50ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目16番32号 (go) 10m; 14 m from Oko (separate building), no offset; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534801202/', R + 'B533212402/'],
    price_note: 'No dish prices in the reviews; about ¥20,000–30,000 per person for a course (August 2026 review) plus ¥1,000 appetizer.', last_checked: TODAY, items: [
      it('', '', 'Seasonal omakase course (seafood, Wagyu, wild boar, duck)', '', 'Courses', 'ask', 'no', 'August 2026.', 'course'),
      it('', '', 'Wagyu strip-loin rice bowl', '', 'Courses', 'ask', 'no', 'August 2026.', 'wagyu_don'),
    ] }, {
    cuisine: 'Kishu binchotan の囲炉裏で焼く炭火料理 (16席、個室あり)・季節のおまかせコース: 小魚、大きな貝、活けのロブスターとあわび、和牛、猪、鴨、野菜・XO 醤で香りづけした和牛・和牛サーロインの丼・しめにうなぎの丼の日も・食事の前にはちみつ・日本酒、ワイン',
    neighborhood: '東心斎橋1-16-32 BE\'S50ビル 1F、裏路地。心斎橋駅から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。コースにはソース (和牛の XO 醤、あわびのソース) も使うが、頼んでソースを変えてもらった人も (2026年8月)。',
    vegan_detail: 'ヴィーガンではありません。海鮮、和牛、猪、鴨のコース。',
    notes: '[炭火焼き・心斎橋、binchotan の囲炉裏で季節のコース] 心斎橋の裏路地にある落ち着いた高級な炭火の店で、Kishu binchotan を使う囲炉裏が中心、煙が少ない。季節のコースは小魚、ジューシーな大きな貝、活けのロブスターとあわび、和牛、猪、鴨、野菜と続き、ほとんどは目の前で焼いてくれる (囲炉裏で自分で焼いたという声も)。和牛は XO 醤でスモーキーに、しめの厚切りの和牛サーロインの丼をふたりが絶賛。苦手な材料を伝えたら、その場であわびの肝のソースを作ってくれたという声も。コースは20,000〜30,000円ほど、お通し1,000円。日曜休み。',
  });
}

// ================================================================ 小皿kitchen cocoro
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27058784/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:00'], ['17:00', '23:00']);
  put({
    id: 'osaka_kozara_kitchen_cocoro_higashishinsaibashi', name: '小皿kitchen cocoro (Kozara Kitchen Cocoro)', category: 'OMNI',
    lat: 34.67289, lng: 135.502447, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; lunch includes battered kara-age, a breaded beef cutlet and a stir-fry, and the night menu a shoyu ramen.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options, but no dishes are named.',
    hours_raw: 'Tue–Sun 11:30–15:00 (lunch) and 17:00–23:00 (dinner); closed Monday (Tabelog). Smoking allowed at every seat (Tabelog). Cards, e-money and QR accepted; card payments get an email receipt (Tabelog). Night appetizer ¥400 (September 2025). Takeout and delivery (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 1-17-17, Sanyo Bldg 1F, under a red lantern — a few minutes from Shinsaibashi Stn',
    cuisine: 'Small-plates izakaya (20 seats, counter and booths) · plates from ¥350: freshly made chicken liver pâté, house oil sardines · fresh oysters from the producer in winter · chicken-shoyu "Chinese soba" with chicken chashu and thin menma · lunch sets (about six): kara-age set ¥800, millefeuille beef cutlet with grated daikon and ponzu ¥1,200, moo shu pork ¥900; large rice free; iced coffee +¥100 · shochu, whisky, chuhai',
    website: null, gmaps: gm('小皿kitchen cocoro 東心斎橋'), menu_url: TB + 'dtlmenu/',
    notes: "[Izakaya · a cheap small-plates bar with lunch sets and smoking seats, Higashi-Shinsaibashi] A cozy, stylish little izakaya near Shinsaibashi Station, marked by a red lantern, that serves cheap small plates at night (chicken liver pâté and house oil sardines from ¥350, fresh oysters in winter) and about six lunch sets by day. At lunch, try the millefeuille beef cutlet with grated daikon and ponzu (¥1,200), moo shu pork (¥900) or a light chicken-breast kara-age set (¥800); large rice is free and an iced coffee is ¥100 more. There's even a chicken-shoyu ramen on the night menu. Every seat allows smoking, which one diner came looking for. Closed Mondays.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Small-plates izakaya with lunch sets (Tabelog; 2025–2026 reviews).', philosophy: 'Cheap small plates for drinkers (Tabelog listing).', specialty: 'Small plates; lunch sets.',
      anecdotes: [
        { text: '"The kara-age consists of five small pieces coated in a light batter… The chicken is made from breast meat, which is not greasy…" — December 2025, Wakadori Kara-age Set Meal ¥800.', source: R + 'B519131465/' },
        { text: '"The Millefeuille Beef Cutlet had a thin, crispy coating, and the juicy meat was delicious. The ponzu sauce made it light and refreshing…" — March 2026, daily lunch A ¥1,200.', source: R + 'B524929023/' },
      ],
      japanese_sources_summary: '食べログ: 小皿kitchen cocoro、大阪市中央区東心斎橋1-17-17 三陽ビル 1F、心斎橋駅から徒歩1分、火〜日11:30〜15:00 (ランチ)、17:00〜23:00 (ディナー)、月曜休み、全席喫煙可、20席、カード・電子マネー・QR可 (カードは領収書をメールで)、ベジタリアン対応ありと掲載、テイクアウト・デリバリー、作りたての鶏レバーのパテ350円、自家製オイルサーディン350円、冬は生産者直送の生牡蠣、焼酎とウイスキーのボトル。口コミ(2025年9月〜2026年4月): 赤ちょうちん、夜のお通し400円、鶏醤油の中華そば (鶏チャーシュー、細いメンマ)、昼は約6種、若鶏の kara-age 定食800円、ミルフィーユ牛カツの大根おろしと ponzu1,200円、moo shu pork 900円、ご飯大盛り無料、アイスコーヒー100円、生牡蠣、安くて品数が多い。',
      confidence: 'medium', sources: [TB, R + 'B513787538/', R + 'B515088650/', R + 'B519131465/', R + 'B523904795/', R + 'B524929023/', R + 'B525751014/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Smoking at every seat (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-17-17 三陽ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated April 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: OSM 小皿kitchen cocoro node/11379661999 4m; GSI 大阪府大阪市中央区東心斎橋一丁目17番17号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B519131465/', R + 'B524929023/'],
    price_note: 'Prices from the Tabelog listing and December 2025–March 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Chicken liver pâté', '¥350', 'Small plates', 'ask', 'no', 'Tabelog listing.', 'pate'),
      it('', '', 'House oil sardines', '¥350', 'Small plates', 'ask', 'no', 'Tabelog listing.', 'sardines'),
      it('', '', 'Kara-age set meal (lunch)', '¥800', 'Lunch', 'no', 'no', 'December 2025.', 'karaage'),
      it('', '', 'Millefeuille beef cutlet, grated daikon and ponzu (lunch)', '¥1,200', 'Lunch', 'no', 'no', 'March 2026.', 'gyukatsu'),
      it('', '', 'Moo shu pork (lunch)', '¥900', 'Lunch', 'ask', 'no', 'March 2026.', 'mushu'),
    ] }, {
    cuisine: '小皿の居酒屋 (20席、カウンターとボックス)・350円からの小皿: 作りたての鶏レバーのパテ、自家製オイルサーディン・冬は生産者直送の生牡蠣・鶏チャーシューと細いメンマの鶏醤油の中華そば・昼の定食 (約6種): kara-age 定食800円、ミルフィーユ牛カツの大根おろしと ponzu1,200円、moo shu pork 900円、ご飯大盛り無料、アイスコーヒー+100円・焼酎、ウイスキー、チューハイ',
    neighborhood: '東心斎橋1-17-17 三陽ビル 1F、赤ちょうちんが目印。心斎橋駅から数分',
    gf_detail: '要確認。グルテンの情報なし。昼は衣のついた kara-age、牛カツ、炒め物、夜は醤油の中華そばも。',
    vegan_detail: '要確認。食べログにベジタリアン対応ありとあるが、具体的な料理名はなし。',
    notes: '[居酒屋・東心斎橋、安い小皿と昼の定食、全席喫煙可] 心斎橋駅近く、赤ちょうちんが目印の居心地のいいおしゃれな小さな居酒屋。夜は安い小皿 (鶏レバーのパテや自家製オイルサーディンが350円から、冬は生牡蠣)、昼は約6種の定食。昼のおすすめはミルフィーユ牛カツの大根おろしと ponzu (1,200円)、moo shu pork  (900円)、軽い胸肉の kara-age 定食 (800円)。ご飯大盛り無料、アイスコーヒーは+100円。夜のメニューには鶏醤油のラーメンまで。全席喫煙可で、それを目当てに来たという声も。月曜休み。',
  });
}

// ================================================================ 立ち呑み クック オッソ オッセョ!
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27046518/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://ameblo.jp/ossomasu917917/';
  const H = day(['18:00', '00:00']);
  put({
    id: 'osaka_tachinomi_cook_osso_osseyo', name: '立ち呑み クック オッソ オッセョ! (Tachinomi Cook Osso Osseyo!)', category: 'OMNI',
    lat: 34.67117, lng: 135.505579, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; Korean dishes include jeon and spicy stir-fries, and the sauces are not described.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options; kimchi recipes are not described.',
    hours_raw: 'Tabelog table: Tue, Wed, Fri, Sat 18:00–24:00; closed Mon, Thu, Sun and holidays. The listing note says it opens three nights a week, Tuesday or Wednesday plus Friday and Saturday, so check the blog. No basic charge; ¥500 charge if you only drink (Tabelog). No cards; e-money, PayPay and au PAY accepted (Tabelog). Smoking allowed (Tabelog). Korean-speaking staff (Tabelog). Opened 28 January 2010 (Tabelog).',
    hours: { 1: H, 2: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 2-1-13, Osakaya Jumbo Bldg 1F No. 7, in Jumbo Yokocho off Yahata-machi street — about 5 min from Nagahoribashi Stn',
    cuisine: 'Korean and Italian standing bar (about 10 standing) · baechu kimchi ¥350; water kimchi · spicy stir-fried baby octopus (jjukkumi) ¥780 · spicy stir-fried octopus (nakji bokkeum) · shrimp jeon · fresh oysters with three sauces, including gochujang · steamed pork; snack set · mapo tofu · fruit cocktails, e.g. strawberry makgeolli · beer, shochu',
    website: OWN, gmaps: gm('立ち呑み クック オッソ オッセョ'), menu_url: null,
    notes: "[Standing bar · a Korean-Italian standing bar in Jumbo Yokocho, Higashi-Shinsaibashi] A tiny standing bar in the Jumbo Yokocho alley of small bars off Yahata-machi street, open since 2010 and, per the listing, only three nights a week. The cooking leans Korean and properly spicy: generous, well-fermented baechu kimchi (¥350), fiery stir-fried baby octopus (¥780), shrimp jeon, and an extra-hot octopus stir-fry that one diner had made with shirako when octopus was out. Fresh oysters come with three sauces, including a gochujang one, and fruit cocktails are made to order, like a makgeolli cocktail packed with crushed strawberries. Friendly and easy for solo drinkers; one diner found prices a little high for a standing bar. Food notes are mostly from 2023; latest visit July 2025.",
    chef_bio: { chef_name: null, roles: ['owner'], origin: 'Opened 28 January 2010 (Tabelog; 2025 review).', background: 'Standing bar run by its owner, who cooks (Tabelog; 2018–2025 reviews).', philosophy: 'Korean and Italian dishes from ingredients bought daily (Tabelog listing).', specialty: 'Spicy Korean drinking dishes.',
      anecdotes: [
        { text: '"Spicy Chukumi (Stir-fried Baby Octopus) - JPY 780… Many Korean restaurants in Japan don\'t serve dishes that are very spicy, but everything here has a good kick to it…" — April 2023.', source: R + 'B464059537/' },
        { text: '"It was a makgeolli-based cocktail filled with lots of strawberries… The shirako pokeun was extremely spicy!" — undated review.', source: R + 'B349589205/' },
      ],
      japanese_sources_summary: '食べログ: 立ち呑み クック オッソ オッセョ!、大阪市中央区東心斎橋2-1-13 大阪屋ジャンボビル 1F 7号 ジャンボ横丁、長堀橋駅から徒歩約5分、表では火・水・金・土18:00〜24:00、備考では火か水と金・土の週3日営業、月・木・日・祝休み、基本チャージなし (ドリンクのみは500円)、カード不可、電子マネー・PayPay・au PAY可、喫煙可、立ち飲み約10人、韓国語を話すスタッフ、ベジタリアン対応ありと掲載、2010年1月28日開店、ブログあり、店名は韓国語で「いらっしゃい」。口コミ(2018年〜2025年7月): 韓国とイタリアンの立ち飲み、白菜の kimchi 350円、水 kimchi、ピリ辛の jjukkumi 780円、辛い nakji bokkeum (タコがない日は shirako で)、海老の jeon、3種のソースの生牡蠣 (gochujang のソースも)、蒸し豚、いちごの makgeolli カクテル、mapo tofu、ひとり飲みしやすい、立ち飲みにしては少し高いという声。',
      confidence: 'low', sources: [TB, OWN, R + 'B310119604/', R + 'B3134638/', R + 'B349589205/', R + 'B464059537/', R + 'B485503246/', R + 'B494778040/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Standing counter; Korean-speaking staff (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋2-1-13 大阪屋ジャンボビル 1F 7号 ジャンボ横丁',
    existence: { status: 'probable', checked: TODAY, note: 'Tabelog listing current; most recent review July 2025.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋二丁目1番13号 (go) 4m; 12 m from Unagi Shi Gensai (separate building), no offset; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B464059537/'],
    price_note: 'Prices from an April 2023 review; may have changed.', last_checked: TODAY, items: [
      it('', '', 'Baechu kimchi', '¥350', 'Korean', 'ask', 'ask', 'April 2023.', 'kimchi'),
      it('', '', 'Spicy stir-fried baby octopus (jjukkumi)', '¥780', 'Korean', 'ask', 'no', 'April 2023.', 'jjukkumi'),
      it('', '', 'Fresh oysters with three sauces', '', 'Seafood', 'ask', 'no', '2023.', 'oysters'),
      it('', '', 'Shrimp jeon', '', 'Korean', 'ask', 'no', '2023.', 'jeon'),
    ] }, {
    cuisine: '韓国とイタリアンの立ち飲み (立ち約10人)・白菜の kimchi 350円、水 kimchi・ピリ辛の jjukkumi (イイダコの炒め物) 780円・辛い nakji bokkeum (タコの炒め物)・海老の jeon・3種のソースの生牡蠣 (gochujang のソースも)・蒸し豚、おつまみセット・mapo tofu・いちごの makgeolli などのフルーツカクテル・ビール、焼酎',
    neighborhood: '東心斎橋2-1-13 大阪屋ジャンボビル 1F 7号、八幡町通り沿いのジャンボ横丁。長堀橋駅から徒歩約5分',
    gf_detail: '要確認。グルテンの情報なし。韓国料理には jeon や辛い炒め物があり、たれの説明なし。',
    vegan_detail: '要確認。食べログにベジタリアン対応ありとあるが、kimchi の作り方の説明なし。',
    notes: '[立ち飲み・東心斎橋、ジャンボ横丁の韓国とイタリアンの立ち飲み] 八幡町通りから入る小さな店が集まるジャンボ横丁の小さな立ち飲みで、2010年から、掲載によると週3日だけの営業。料理は韓国寄りでしっかり辛く、たっぷりでよく発酵した白菜の kimchi (350円)、激辛のイイダコの炒め物 (780円)、海老の jeon、タコがない日に shirako で作ってもらった激辛の炒め物という声も。生牡蠣はgochujang のソースを含む3種のソースで、フルーツカクテルは注文ごとに作り、つぶしたいちごたっぷりの makgeolli カクテルも。ひとり飲みしやすい雰囲気、立ち飲みにしては少し高いという声も。料理の情報は主に2023年、最新の訪問は2025年7月。',
  });
}

save();
