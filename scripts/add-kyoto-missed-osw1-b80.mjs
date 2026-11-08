// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 80.
//   + 旨い魚と京ばんざい はなと Umai Sakana to Kyo Banzai Hanato (fish and obanzai izakaya near Karasuma-Takoyakushi)
//   + 紫洸 Shiko (creative Japanese cooking south of Yasaka Shrine’s steps, lunch and dinner)
//   + 東山八百伊 本店 Higashiyama Yaoi (Kyoto pickle maker since 1934, three generations of the Murai family — takeaway
//     only; drafted under Greg’s 2026-11-07 retail ruling, historic and family-owned)
//   - 創作おばんざいとおさけ-紡-bou, 鰻の成瀬 京都烏丸東店, 鼓月 四条烏丸店: skipped (reasons below).
//   Rest list (`queue.mjs kyoto-missed next rest 2000`), nearest-first, lane ids 26036360, 26044940 (skipped), 26035112,
//   26041130 (skipped), 26027966 (skipped), 26016422 (drafted out of order — 26021894 鉄板居酒屋 だい is left in the queue
//   for the next batch).
//   queue-status.jsonl grepped for each brand (はなと, 紡, 紫洸, 成瀬, 鼓月, 八百伊): no earlier rulings.
//   Data check: none of the three drafted is in data/kyoto.json by name or address. 祇園 おくおか sits at 毘沙門町44-66 near
//   八百伊. Same-name count (same brand or operator only): はなと — invoice holder an individual; 紫洸 — one shop; 八百伊 —
//   有限会社東山八百伊, this main shop and a Kodai-ji shop (own site). Large-parent and big-chain-hotel lists checked.
//   Service charges: none listed on Tabelog for any of the three.
//   Other-diner remarks (Greg 2026-11-06): single remarks about other guests (はなと February 2026, 紫洸 June 2026) left out.
//   Halal: no operator in this batch claims halal.
//   JA text: 祝日 written in full.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-80');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26044940', '創作おばんざいとおさけ-紡-bou: no reviews on Tabelog');
skip('26041130', '鰻の成瀬 京都烏丸東店: chain — Tabelog’s name search lists 鰻の成瀬 shops nationwide (Chiba, Sapporo, Nihonbashi, Shiodome, Sendai, Nerima, Toyama and more)');
skip('26027966', '鼓月 四条烏丸店: chain — a Kyoto confectionery brand with many shops and department-store counters (Tabelog lists 本店, 嵐山, 東京本店, 京都高島屋, 東武池袋, 阪急うめだ, 伊勢丹京都 and more); retail sweets counter');

// ================================================================ 旨い魚と京ばんざい はなと
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26036360/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '22:30']);
  put({
    id: 'kyoto_hanato_takoyakushi', name: '旨い魚と京ばんざい はなと (Umai Sakana to Kyo Banzai Hanato)', category: 'OMNI',
    lat: 35.006189, lng: 135.760883, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Obanzai in bonito-and-kombu dashi, sashimi with matched soy sauces, tempura, fried taro, nama-fu dengaku; no gluten information (Tabelog; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the obanzai are cooked in dashi of bonito and kombu (Tabelog).',
    hours_raw: '17:00–22:30 (L.O. food 21:30, drinks 22:00); generally closed Sunday but may open in busy seasons and on holidays — check by phone or online (Tabelog). Reservations recommended — often full (April and May 2026). Cards and PayPay (Tabelog). 25 seats: 6 at the counter and 19 at tables (Tabelog). Heated tobacco allowed inside; ashtrays outside for cigarettes (Tabelog). On the 2nd floor of アイカンパニー蛸薬師ビル, east of Karasuma on Takoyakushi, 5 min from exit 21 of Karasuma/Shijo (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Takoyakushi east of Karasuma, 2F — 5 min from Karasuma/Shijo',
    cuisine: 'Obanzai cooked in bonito-and-kombu dashi and fresh seafood from markets and ports; yuba, nama-fu and Kamo eggplant; nine local sakes and eight umeshu (Tabelog) · a seven-course, 20-item course ¥5,000 for one or more (Tabelog) · simmered Manganji peppers with sansho, fried taro, hamo and shirako tempura, beef-tendon stew, giant fried angel shrimp, ochazuke to finish (May 2026) · two-colour nama-fu dengaku; kumiage yuba (February 2026) · thick sashimi and sushi with soy sauces matched to each fish; eggplant tempura (March and May 2026) · grilled nama-fu; chicken meatballs with daikon; red konnyaku (May and July 2026) · about ¥4,000–5,000 a head with drinks (April and May 2026)',
    website: null, gmaps: gm('旨い魚と京ばんざい はなと'), menu_url: TB + 'dtlmenu/',
    notes: '[Obanzai and fish · Karasuma-Takoyakushi, 2nd floor] A cosy, often full second-floor izakaya serving Kyoto obanzai in a bonito-and-kombu dashi — Manganji peppers, nama-fu dengaku, yuba — and thick-cut sashimi with soy sauces matched to each fish, with local sake and umeshu. About ¥4,000–5,000 with drinks; a ¥5,000 course. Usually closed Sunday.',
    chef_bio: { chef_name: '呉山 佳隆 (reading not sourced)', roles: ['Owner (the invoice holder)'], origin: null,
      background: 'Tabelog’s invoice number T8810440536513 is registered to an individual, 呉山 佳隆 (NTA register). Tabelog’s shop text stresses dashi of bonito and kombu and seafood bought from markets and ports.',
      philosophy: null, specialty: 'Obanzai; sashimi.',
      anecdotes: [
        { text: 'A May 2026 regular came back for the giant fried angel shrimp, and paid about ¥4,000 a head with sake.', source: R + 'B511477585/' },
        { text: 'A March 2026 diner noticed that sashimi and sushi came with different soy sauces matched to each fish.', source: R + 'B525413461/' },
      ],
      japanese_sources_summary: '食べログ: 旨い魚と京ばんざい はなと、海鮮・寿司・居酒屋、中京区烏丸通蛸薬師東入ル一蓮社町312 アイカンパニー蛸薬師ビル 2F、阪急烏丸駅・地下鉄四条駅21番出口から徒歩5分、17:00〜22:30 (L.O.料理21:30、飲物22:00)、日曜は基本休み (繁忙期や祝日は営業することも)、カード・PayPay可、25席 (カウンター6、テーブル19)、加熱式たばこ可、鰹と昆布の出汁のおばんざい、市場や漁港から届く鮮魚、湯葉、生麩、賀茂なす、地酒9種と梅酒8種、7品20種のコース5,000円 (1名から)、適格請求書 T8810440536513 (呉山 佳隆)。口コミ (2026年、英語): 万願寺とうがらしの山椒煮、里芋の唐揚げ、鱧と白子の天ぷら、牛すじ煮込み、大きな海老フライ、締めのお茶漬け、生麩の二色田楽、汲み上げ湯葉、厚切りの刺身と魚ごとの醤油、茄子の天ぷら、焼き生麩、鶏団子と大根、赤こんにゃく、飲んで1人4,000〜5,000円。',
      confidence: 'medium', sources: [TB, 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=8810440536513', R + 'B511477585/', R + 'B523204067/', R + 'B525316598/', R + 'B525413461/', R + 'B526709316/', R + 'B528315336/', R + 'B528876772/', R + 'B530565642/', R + 'B531239947/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small and often full; book ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区烏丸通蛸薬師東入ル一蓮社町312 アイカンパニー蛸薬師ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.006189, 135.760883); cross-checked: GSI 京都府京都市中京区一蓮社町312番地 (lot) 51m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B511477585/'],
    price_note: 'Course price from Tabelog; no other menu prices found.', last_checked: TODAY, items: [
      it('', '', 'Seven-course, 20-item course (from one person)', '¥5,000', 'Courses', 'ask', 'no', 'Tabelog.', 'course'),
      it('', '', 'Simmered Manganji peppers with sansho', '', 'Obanzai', 'ask', 'no', 'February and May 2026; dashi.', 'manganji'),
      it('', '', 'Two-colour nama-fu dengaku', '', 'Obanzai', 'no', 'no', 'February 2026.', 'dengaku'),
      it('', '', 'Assorted sashimi', '', 'Sashimi', 'ask', 'no', '2026.', 'sashimi'),
    ] }, {
    cuisine: '鰹と昆布の出汁で炊くおばんざいと、市場や漁港から届く鮮魚。湯葉、生麩、賀茂なす。地酒9種と梅酒8種 (食べログ)・7品20種のコース5,000円 (1名から) (食べログ)・万願寺とうがらしの山椒煮、里芋の唐揚げ、鱧と白子の天ぷら、牛すじ煮込み、大きな海老フライ、締めのお茶漬け (2026年5月)・生麩の二色田楽、汲み上げ湯葉 (2026年2月)・厚切りの刺身と寿司、魚ごとに変える醤油、茄子の天ぷら (2026年3・5月)・焼き生麩、鶏団子と大根、赤こんにゃく (2026年5・7月)・飲んで1人約4,000〜5,000円 (2026年4・5月)',
    neighborhood: '烏丸の東の蛸薬師、2階。烏丸・四条から徒歩5分',
    gf_detail: '要確認。鰹と昆布の出汁のおばんざい、魚ごとの醤油の刺身、天ぷら、里芋の唐揚げ、生麩田楽。グルテンの情報はない (食べログ、2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。おばんざいは鰹と昆布の出汁で炊く (食べログ)。',
    notes: '[おばんざいと魚・烏丸蛸薬師、2階] いつも満席に近い居心地のよい2階の居酒屋。鰹と昆布の出汁の京のおばんざい (万願寺とうがらし、生麩田楽、湯葉) と、魚ごとに醤油を変える厚切りの刺身、地酒と梅酒。飲んで約4,000〜5,000円、5,000円のコースも。日曜は基本休み。',
  });
}

// ================================================================ 紫洸
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26035112/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://shiko-kyoto.com/';
  const H = day(['12:00', '14:30'], ['17:30', '23:00']);
  put({
    id: 'kyoto_shiko_tsukimicho', name: '紫洸 (Shiko)', category: 'OMNI',
    lat: 35.002098, lng: 135.777562, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Creative Japanese cooking — obanzai, sashimi and courses; no gluten information (own site).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Obanzai from ¥700 are listed, with no ingredients described (own site).',
    hours_raw: 'Lunch 12:00–14:30 (L.O. 13:30) and dinner 17:30–23:00 (L.O. 22:00); closed Monday (own site). Tabelog lists dinner only, Tuesday–Sunday. Cash only: no cards, e-money or QR (Tabelog). 32 seats: 8 at the counter and 8 at tables downstairs, up to 16 upstairs with tables that convert to zashiki; private hire possible (Tabelog; own site). Non-smoking (Tabelog). South of the stone steps of Yasaka Shrine on Higashioji, about 3 min from the Higashiyama-Yasui bus stop (Tabelog; own site). Catering also offered (own site).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Higashioji south of Yasaka Shrine — 3 min from Higashiyama-Yasui bus stop',
    cuisine: 'Creative cooking centred on Japanese food, with Kyoto produce the owner buys personally; seasonal and standard dishes (own site) · obanzai from ¥700; sashimi platter from ¥1,500; courses ¥7,700 and ¥11,000 (own site) · shochu (喜六, 中々, 兼八), sake such as 徳次郎 junmai daiginjo from Kyoto, 緑川 and 悦凱陣; 青谷の梅酒 (own site)',
    website: SITE, gmaps: gm('紫洸 京都 月見町'), menu_url: SITE + '?page_id=10',
    notes: '[Creative Japanese · south of Yasaka Shrine, lunch and dinner] A two-floor restaurant on Higashioji just south of Yasaka Shrine, where the owner buys Kyoto produce for creative Japanese dishes — obanzai from ¥700, sashimi, courses at ¥7,700 and ¥11,000 — with good sake and shochu. Upstairs suits families and groups. Cash only; closed Monday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)', 'Head chef (unnamed)'], origin: null,
      background: 'The shop’s site says the owner personally buys the ingredients, led by Kyoto specialities. A June 2026 reviewer describes the owner and head chef cooking with great care.',
      philosophy: 'Seasonal and standard dishes from carefully chosen Kyoto ingredients — drop in casually (own site).', specialty: 'Obanzai; courses.',
      anecdotes: [
        { text: 'A February 2025 visitor recommends it for both business gatherings and private evenings with good drinks.', source: R + 'B500810585/' },
      ],
      japanese_sources_summary: '公式サイト: 紫洸、東山区月見町1、和食を中心とした創作料理、京都の特産物をはじめ店主自ら仕入れた食材、季節と定番の料理、1階カウンターとテーブル、2階は可変式でお座敷にも、貸し切り可、昼 12:00〜14:30 (L.O.13:30)、夜 17:30〜23:00 (L.O.22:00)、毎週月曜定休、東山安井バス停から徒歩3分、出張料理、おばんざい700円〜、刺身盛り合わせ1,500円〜、コース7,700円・11,000円、焼酎 (喜六、中々、兼八)、日本酒 (徳次郎、緑川、悦凱陣)、青谷の梅酒。食べログ: 日本料理・創作料理・居酒屋、祇園石段下下ル、カード・電子マネー・QR不可、32席、禁煙。口コミ (2025〜2026年、英語): 店主と料理長が丁寧に作る、接待にも。',
      confidence: 'low', sources: [TB, SITE, SITE + '?page_id=10', R + 'B500810585/', R + 'B530595018/', R + 'B538909467/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter downstairs, flexible room upstairs; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園石段下下ル月見町1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Own site and Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.002098, 135.777562); OSM has a node 紫洸 on Higashioji at this point; GSI 京都府京都市東山区月見町1番地 (lot) 139m — kept the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE + '?page_id=10'],
    price_note: 'Prices from the shop’s site, tax included.', last_checked: TODAY, items: [
      it('おばんざい', 'obanzai', 'Obanzai', 'from ¥700', 'À la carte', 'ask', 'ask', 'Own site.', 'obanzai'),
      it('お刺身盛り合わせ', 'osashimi moriawase', 'Assorted sashimi', 'from ¥1,500', 'À la carte', 'ask', 'no', 'Own site.', 'sashimi'),
      it('コース料理', 'kosu ryori', 'Course', '¥7,700 / ¥11,000', 'Courses', 'ask', 'no', 'Own site.', 'course'),
    ] }, {
    cuisine: '和食を中心とした創作料理。京都の特産物をはじめ店主自ら仕入れる食材で、季節と定番の料理 (公式サイト)・おばんざい700円〜、刺身盛り合わせ1,500円〜、コース7,700円・11,000円 (公式サイト)・焼酎 (喜六、中々、兼八)、京都の徳次郎 純米大吟醸、緑川、悦凱陣などの日本酒、青谷の梅酒 (公式サイト)',
    neighborhood: '八坂神社の南の東大路。東山安井バス停から徒歩3分',
    gf_detail: '要確認。おばんざい、刺身、コースの和食の創作料理。グルテンの情報はない (公式サイト)。',
    vegan_detail: '要確認。おばんざいは700円からだが、材料は書かれていない (公式サイト)。',
    notes: '[創作和食・八坂神社の南、昼と夜] 八坂神社のすぐ南、東大路の2階建ての店。店主が仕入れる京都の食材で創作和食 (おばんざい700円〜、刺身、7,700円と11,000円のコース) を、日本酒や焼酎とともに。2階は家族や団体向き。現金のみ、月曜定休。',
  });
}

// ================================================================ 東山八百伊 本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26016422/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://higashiyamayaoi.jp/';
  const H = day(['09:00', '18:00']);
  put({
    id: 'kyoto_higashiyama_yaoi_honten', name: '東山八百伊 本店 (Higashiyama Yaoi)', category: 'OMNI',
    lat: 35.000392, lng: 135.777364, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kyoto pickles — senmaizuke, suguki, shibazuke, kaiseki takuan, nara-zuke; seasonings are not listed and some pickles may use soy sauce or mirin (own site; reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Pickled vegetables, but ingredients such as dashi or fish products are not listed (own site).',
    hours_raw: 'Takeaway only — a Kyoto pickle shop with no meals. Monday, Wednesday–Sunday 9:00–18:00; closed Tuesday; hours may change (Tabelog). Cards accepted (Tabelog). Seasonal pickles can be tasted and asked about in the shop; the workshop is in the alley beside it (April 2026). On Higashioji south of Yasaka Shrine, past the Higashiyama-Yasui crossing (Tabelog; 2019 review). A second shop by Kodai-ji (own site).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashioji south of Yasaka Shrine — near Higashiyama-Yasui',
    cuisine: 'Kyoto pickles made in its own workshop since 1934: senmaizuke, suguki, shibazuke, kaiseki takuan (own site) · signature: year-aged takuan chopped with ginger, green shiso and white sesame, a modern take on the tea-kaiseki “kakuya” (own site) · seasonal pickles all year; light, low-salt Kyoto pickles (own site; July 2024) · new cucumber-and-myoga with shiso; “Ochazuke Nanasai” assortment (April 2026)',
    website: SITE, gmaps: gm('東山八百伊 本店'), menu_url: SITE,
    notes: '[Kyoto pickles · Higashioji, since 1934 — takeaway only] A family pickle maker founded in 1934 on this spot and now run by the third generation: senmaizuke, suguki, shibazuke and the signature chopped kaiseki takuan, plus seasonal pickles made in the workshop next door. A takeaway shop — no meals. Closed Tuesday.',
    chef_bio: { chef_name: '村井 季亮 (reading not sourced)', roles: ['Third-generation head (代表者)'], origin: 'Kyoto',
      background: 'The shop’s site gives its history: founded in 1934 (昭和9年) on the present site by the first generation, 村井久吉; incorporated in 1970 by the second generation, 村井明, who was named a Kyoto Prefecture master craftsman in 1996; a Kodai-ji shop opened in 1998 by the third generation, 村井季亮, also named a Kyoto Prefecture master craftsman in 2024 (readings not sourced). Pickles have won the Kyoto-Shiga pickle fair prize (1976).',
      philosophy: null, specialty: 'Kaiseki takuan.',
      anecdotes: [
        { text: 'An April 2026 visitor bought the new cucumber-and-myoga pickle on its first day on sale, and spotted the workshop from the alley beside the shop.', source: R + 'B527002409/' },
      ],
      japanese_sources_summary: '公式サイト: 有限会社 東山八百伊、京漬物製造販売 (千枚漬、すぐき、しば漬、懐石たくあん)、創業 昭和9年2月10日、設立 昭和45年5月4日、代表者 村井季亮、沿革: 昭和9年 初代 村井久吉が現所在地にて創業、昭和45年 二代目 村井明が有限会社を設立、昭和51年 京滋漬物品評会で農林流通局長賞、昭和54年 店舗新築、平成6年 新工場、平成8年 二代目が京都府優秀技能賞、平成10年 三代目 村井季亮が高台寺に新店舗、平成31年 オンラインショップ、令和6年 三代目が京都府優秀技能賞、看板商品の懐石たくあん (一年熟成のひねたくあんを刻み、生姜・青紫蘇・白ごまで)。食べログ: 東山八百伊 本店、東山区東大路松原下ル4丁目毘沙門町44、月・水〜日 9:00〜18:00、火曜定休、カード可。口コミ (2024〜2026年、英語): 減塩のあっさりした京漬物、胡瓜と茗荷の紫蘇風味、お茶漬け七菜、隣の路地の工房。',
      confidence: 'medium', sources: [TB, SITE, SITE + 'about', R + 'B489181911/', R + 'B527002409/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A shop counter; takeaway only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区東大路松原下ル4丁目毘沙門町44',
    existence: { status: 'confirmed', checked: TODAY, note: 'Own site and Tabelog listing; review dated April 2026.' },
    pin_source: `Tabelog ${TB} (35.000392, 135.777364); cross-checked: GSI 京都府京都市東山区毘沙門町44番地 (lot) 101m; OSM reverse places the point on Higashioji by the 毘沙門町 car park; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [SITE],
    price_note: 'No prices read.', last_checked: TODAY, items: [
      it('懐石たくあん', 'kaiseki takuan', 'Kaiseki takuan (chopped aged takuan with ginger, shiso and sesame)', '', 'Pickles', 'ask', 'ask', 'Own site.', 'takuan'),
      it('千枚漬', 'senmaizuke', 'Senmaizuke', '', 'Pickles', 'ask', 'ask', 'Own site.', 'senmai'),
      it('すぐき', 'suguki', 'Suguki', '', 'Pickles', 'ask', 'ask', 'Own site.', 'suguki'),
      it('しば漬', 'shibazuke', 'Shibazuke', '', 'Pickles', 'ask', 'ask', 'Own site.', 'shiba'),
    ] }, {
    cuisine: '1934年から自家工房で作る京漬物: 千枚漬、すぐき、しば漬、懐石たくあん (公式サイト)・看板は一年熟成のひねたくあんを刻み生姜・青紫蘇・白ごまで仕上げた懐石たくあん、茶懐石の「かくや」を現代風に (公式サイト)・通年の季節の漬物。減塩のあっさりした京漬物 (公式サイト、2024年7月)・新しい胡瓜と茗荷の紫蘇風味、お茶漬け七菜 (2026年4月)',
    neighborhood: '八坂神社の南の東大路。東山安井の近く',
    gf_detail: '要確認。千枚漬、すぐき、しば漬、懐石たくあん、奈良漬などの京漬物。調味料は書かれておらず、醤油やみりんを使うものもありうる (公式サイト、口コミ)。',
    vegan_detail: '要確認。野菜の漬物だが、出汁や魚介由来の材料は書かれていない (公式サイト)。',
    notes: '[京漬物・東大路、1934年創業 — 持ち帰りのみ] 1934年に初代 村井久吉がこの地で創業し、今は三代目が営む家族の漬物屋。千枚漬、すぐき、しば漬、看板の懐石たくあん、隣の工房で作る季節の漬物。持ち帰りのみで食事はない。火曜定休。',
  });
}

save();
