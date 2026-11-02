// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo clusters), circle `ningyocho` — lane osw11, batch 5.
//   + 由丸 人形町店 Hakata Ramen Yoshimaru (Hakata tonkotsu ramen; free extra noodles before noon) — no ramen block, see below
//   + 冨田 Tomita (6-seat washoku counter run single-handed by chef Yusuke Tomita; opened January 2025)
//   + 人形町 伊勢利 Ningyocho Iseri (French courses with Japanese wines in a renovated pre-war house; since 2015)
//   + えびな亭 Ebina Tei (Italian with Aomori produce; basement by exit A4)
//   Picked from `node scripts/sweep/queue.mjs tokyo-gaps next core 10 ningyocho` (main repo, 2026-11-01): the first four,
//   50, 78, 84 and 102 m from the circle centre. Core by: Yoshimaru genre Ramen; Tomita 6 seats; Iseri and Ebina Tei 20 seats.
//   Dedupe. None is in data/tokyo.json by name or address. Tomita is on 2F of 五十番ビル, the building of
//   tokyo_nanafuku_ningyocho (address_ja "東京都中央区日本橋人形町2-6-11 五十番ビル 1F"); the Tabelog points are 5 m apart
//   and each keeps its own.
//   Chain check. Yoshimaru is a branch of a small Hakata-ramen chain: August 2026 reviews mention a Yaesu branch and call it
//   "a chain restaurant"; a web search snippet also names Shinagawa Konan and Shiba-Daimon. No branch is in data and nothing
//   shows rapid expansion, so it is drafted. Iseri has a sister patisserie (Tabelog). Tomita and Ebina Tei: single shops.
//   Ramen block for Yoshimaru left off: 2026 reviews source richness, oiliness, tare/saltiness and noodle firmness, but
//   nothing describes the broth's clarity or aroma (brief LESSONS, 2026-11-01).
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, save } = openCitySweep('tokyo-gaps', TODAY, 'osw11-5');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 由丸 人形町店
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13059644/'; const R = TB + 'dtlrvwlst/'; const MENU = TB + 'dtlmenu/';
  const WK = day(['11:00', '23:00']); const WE = day(['11:00', '22:00']);
  put({
    id: 'tokyo_hakata_ramen_yoshimaru_ningyocho', name: '由丸 人形町店 (Hakata Ramen Yoshimaru Ningyocho)', category: 'OMNI',
    lat: 35.68597, lng: 139.781783, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles, gyoza and wontons.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: tonkotsu (pork-bone) broth and pork-belly chashu.',
    hours_raw: 'Mon–Fri 11:00–23:00 (last order 22:30); Sat, Sun and holidays 11:00–22:00 (last order 21:30) (Tabelog). Free extra noodles if you come in between 11:00 and 11:59 (June, August and September 2026 reviews; an August 2026 diner was told the all-day free-noodle campaign ran only at the Yaesu branch). Happy hour in the early evening (August 2026). No reservations. Cards, e-money and QR (Tabelog). 20 seats incl. a counter; non-smoking; children welcome; takeaway (Tabelog).',
    hours: { 0: WK, 1: WK, 2: WK, 3: WK, 4: WK, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nihonbashi-Ningyocho 1-4-10, 人形町センタービル 1F — 1 min from Ningyocho Stn (Hibiya Line, Toei Asakusa Line), 4 min from Suitengumae Stn',
    cuisine: 'Hakata tonkotsu ramen with thin noodles, firmness and oil to order (2026 reviews) · Hakata ramen ¥860 (October 2026); a September 2026 diner paid ¥990 for the "Hakata Ramen Yoshimaru" · wonton noodles with ginger-scented wontons ¥950, mentaiko and seasoned-egg rice ¥200 (August 2026) · from the Tabelog menu (tax included, updated March 2026): black ramen with Kumamoto-style mayu (burnt garlic oil) ¥900; karakamen, spicy with yuzu pepper ¥1,010; tonkotsu miso with Kyushu barley miso; kabosu tsukemen ¥970; everything-on-top ramen ¥1,800; gyoza ¥495; potato salad ¥605 · cold ramen in summer (June 2026) · evening snacks such as chicken skirt with yuzu pepper and highballs (August 2026)',
    website: TB, gmaps: gm('由丸 人形町店'), menu_url: MENU,
    notes: "[Ramen · Ningyocho, Hakata tonkotsu by the station] A branch of the Yoshimaru Hakata-ramen chain, a minute from Ningyocho station, long popular with office workers and locals (September 2026). The bowl is a pork-bone broth that diners in 2026 call rich but not greasy and easy to finish, with thin firm noodles; you choose firmness and the amount of oil. Come in before noon and the extra noodles are free, with a pinch of green onion on each refill (September 2026). Besides the plain Hakata ramen (¥860 in October 2026), there are wonton noodles, a black garlic-oil ramen, a spicy yuzu-pepper bowl and kabosu tsukemen, plus gyoza and a happy hour for a highball before the ramen. Not everyone is won over: one September 2026 diner found the broth lacking depth and the egg overcooked. Open every day.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'A branch of 由丸 (Yoshimaru): an August 2026 diner writes "Since this is a chain restaurant, there are other locations", and another was told a free-noodle campaign ran only at the Yaesu branch. Reviews date back to February 2011. Tabelog\'s shop text promises an authentic Hakata flavour "so you can enjoy every last drop of the broth".',
      philosophy: 'Treat ramen as a true culinary art; an authentic Hakata flavour to drink to the last drop (Tabelog shop text).', specialty: 'Hakata tonkotsu ramen; free extra noodles before noon.',
      anecdotes: [
        { text: '"The fact that they add a bit of green onion on each extra serving is a nice touch." — September 2026, two free extra noodles.', source: R + 'B536349392/' },
        { text: '"I ordered the Hakata ramen after a long time, and it was delicious with a great balance of rich pork bone flavor and saltiness." — August 2026.', source: R + 'B533699872/' },
        { text: '"The broth lacked depth, and the flavored egg was overcooked." — September 2026, ¥990.', source: R + 'B536472360/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 由丸 人形町店、ラーメン、郷土料理、餃子、日本橋人形町1-4-10 人形町センタービル 1F、人形町駅から徒歩1分、月〜金11:00〜23:00、土日祝11:00〜22:00、予約不可、20席、カード・電子マネー・QR可、禁煙、子ども可、テイクアウト可。メニュー (2026年3月): 全部のせ1,800円、Karakamen (柚子胡椒) 1,010円、かぼすのつけ麺970円、黒ラーメン900円、餃子495円。口コミ(2026年6月〜10月): 11時台に入ると替え玉無料、細い麺、硬さと油の量を選べる、こってりだがしつこくない豚骨、Hakata ラーメン860円、ワンタン麺950円、チェーン店でYaesu にも店がある、深みが足りないという声も。',
      confidence: 'medium', sources: [TB, MENU, R + 'B530904924/', R + 'B530981847/', R + 'B533699872/', R + 'B533994081/', R + 'B535750532/', R + 'B536322462/', R + 'B536349392/', R + 'B536472360/', R + 'B538240832/', R + 'B7166585/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A short ramen menu; choose noodle firmness and oil; welcoming to solo diners (June 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋人形町1-4-10 人形町センタービル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with a menu updated March 2026; reviews dated June–October 2026.' },
    pin_source: `Tabelog ${TB} (35.685970, 139.781783); cross-checked: GSI 東京都中央区日本橋人形町一丁目4番10号 (go) 23m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU, R + 'B7166585/', R + 'B533994081/', R + 'B536472360/'],
    price_note: 'Prices from the Tabelog menu (tax included; updated March 2026) and June–October 2026 reviews; the plain Hakata ramen was ¥860 in October 2026, and a September 2026 diner paid ¥990.', last_checked: TODAY, items: [
      it('', '', 'Hakata ramen (tonkotsu)', '¥860', 'Ramen', 'no', 'no', 'October 2026; ¥990 in a September 2026 review.', 'hakata_ramen'),
      it('', '', 'Wonton noodles', '¥950', 'Ramen', 'no', 'no', 'August 2026.', 'wonton_men'),
      it('', '', 'Black ramen with burnt garlic oil', '¥900', 'Ramen', 'no', 'no', 'Tabelog menu.', 'black_ramen'),
      it('', '', 'Karakamen, spicy with yuzu pepper', '¥1,010', 'Ramen', 'no', 'no', 'Tabelog menu.', 'karakamen'),
      it('', '', 'Kabosu tsukemen', '¥970', 'Ramen', 'no', 'no', 'Tabelog menu.', 'kabosu_tsukemen'),
      it('', '', 'Grilled gyoza', '¥495', 'Sides', 'no', 'no', 'Tabelog menu.', 'gyoza'),
    ] }, {
    cuisine: '細麺のHakata の豚骨ラーメン、麺の硬さと油の量を選べる (2026年の口コミ)・Hakata ラーメン860円 (2026年10月)。2026年9月には「Hakata ラーメン由丸」に990円払った人も・生姜のきいたワンタンのワンタン麺950円、明太子と味玉のご飯200円 (2026年8月)・食べログのメニュー (税込み、2026年3月更新) から: Kumamoto 風のマー油の黒ラーメン900円、柚子胡椒の辛い Karakamen 1,010円、Kyushu の麦味噌の豚骨味噌、かぼすのつけ麺970円、全部のせ1,800円、焼き餃子495円、ポテトサラダ605円・夏は冷やしラーメン (2026年6月)・夜は鶏ハラミの柚子胡椒などのつまみとハイボール (2026年8月)',
    neighborhood: '日本橋人形町1-4-10 人形町センタービル 1F。人形町駅から徒歩1分 (日比谷線、都営浅草線)、水天宮前駅から徒歩4分',
    gf_detail: 'グルテンフリーではない: 小麦の麺、餃子、ワンタン。',
    vegan_detail: 'ヴィーガンではない: 豚骨スープと豚バラのチャーシュー。',
    notes: '[ラーメン・人形町、駅そばのHakata 豚骨] Hakata ラーメン由丸のチェーンの店で、人形町駅から1分、会社員や地元の人に長く親しまれている (2026年9月)。豚骨スープは2026年の口コミでこってりだがしつこくなく飲み干せるといわれ、細くて硬めの麺。硬さと油の量を選べる。正午前に入れば替え玉が無料で、替え玉ごとにねぎを少しのせてくれる (2026年9月)。Hakata ラーメン (2026年10月に860円) のほか、ワンタン麺、マー油の黒ラーメン、柚子胡椒の辛い一杯、かぼすのつけ麺、餃子も。ハッピーアワーにハイボールを飲んでから締めのラーメンという人も。2026年9月にはスープに深みがなく味玉が固すぎたという声も。毎日営業。',
  });
}

// ================================================================ 冨田
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13305580/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '14:30'], ['18:00', '22:30']);
  put({
    id: 'tokyo_tomita_ningyocho', name: '冨田 (Tomita)', category: 'MOM_AND_POP',
    lat: 35.6861, lng: 139.783022, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking (the shop asks to hear about allergies at reservation, Tabelog). The cooking is built on dashi of kombu with bonito and tuna flakes (July 2026), and courses include tempura rice, fried hamo and sweetfish karaage; sashimi is served with salt and sudachi as well as soy (August 2026).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish-based dashi of katsuobushi and maguro-bushi runs through every course (July 2026).',
    hours_raw: 'Daily 12:00–14:30 and 18:00–22:30, closing days vary (Tabelog). Reservations only; same-day cancellations or changes are charged 100% of the course (Tabelog). Weekday lunch also has a limited ¥3,000 set (2026 reviews). Service charge 10% (Tabelog). Cards incl. UnionPay; no e-money or QR (Tabelog). 6 counter seats; can be hired from two guests, and children are welcome then (Tabelog). Up a flight of stairs (August 2026). Non-smoking. Opened 20 January 2025 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nihonbashi-Ningyocho 2-6-11, 五十番ビル 2F, behind a white noren at the end of a dim corridor — 2 min from Ningyocho Stn exit A3, 5 min from Suitengumae Stn exit 7; Ningyocho Nanafuku is on the ground floor',
    cuisine: 'Seasonal Japanese courses at a six-seat counter (2026 reviews) · weekday lunch set ¥3,000: sashimi, a main such as anago Yanagawa-style, clay-pot rice and red-miso shijimi soup (July and October 2026) · lunch courses: compact course ¥12,100 plus 10% service (August and September 2026); lunch omakase ¥16,500 (July 2026) · dinner courses, about ¥40,000–50,000 with drinks for an October 2026 diner · dishes in 2026: edamame tofu with salted sea urchin; hamo from Amakusa with egg tofu and junsai; Nagara River sweetfish grilled with salt, its bones made into bone sake; Aomori crab with tomato ice; Shizuoka eel grilled plain and kabayaki; Lake Ogawara eel; Shimane beef; abalone with fragrant mushrooms; matsutake soup; clay-pot rice with white-shrimp tempura or fried hamo finished as dashi chazuke; matcha anmitsu · sake chosen with a local liquor shop (Tabelog)',
    website: TB, gmaps: gm('冨田 日本料理 人形町'), menu_url: null,
    notes: "[Kaiseki · Ningyocho, a six-seat counter run single-handed by chef Yusuke Tomita] Behind a white noren at the end of a dim second-floor corridor near Ningyocho station, chef Yusuke Tomita cooks and serves alone at a six-seat counter, opened in January 2025. The chef trained at Taigetsu and 御料理 辻 in Azabu, per 2026 reviews. The cooking is gentle and dashi-led (a dashi of two kombu with bonito and tuna flakes, July 2026). An August 2026 diner noted it never tires you, unlike Tokyo places that push umami and salt. Courses follow the season: wild sweetfish grilled with salt, eel grilled plain and as kabayaki, matsutake soup, and clay-pot rice with tempura mixed in. The weekday lunch set of sashimi, a main and clay-pot rice for ¥3,000 is the gentle way in. One regular has been five times since it opened. The counter can be hired from two guests, children included. Up a flight of stairs.",
    chef_bio: { chef_name: 'Yusuke Tomita (冨田; romaji from Tabelog)', roles: ['Owner-chef, working alone (Japanese review, August 2026: 料理から接客まで基本的にお一人でこなすワンオペ; September 2026: "Due to the one-person operation, [the shop limits] the number of customers")'], origin: null,
      background: 'Tabelog\'s shop text: "Chef Yusuke Tomita, trained in renowned establishments, offers delicate dishes"; sake chosen with a local sake shop; private hire from two guests, good for families with children. A July 2026 review: trained at "Nihonryori Taigetsu" and "Oryori Tsuji", both Michelin-starred; an August 2026 Japanese review names the latter as 麻布の「御料理 辻」. Opened 20 January 2025 (Tabelog) in the space that, per a July 2026 diner, used to hold Isoda before it moved across the main street.',
      philosophy: 'Bring out the natural flavours of seasonal ingredients with delicate cooking (Tabelog shop text).', specialty: 'Gentle dashi-led seasonal courses; clay-pot rice with seasonal tempura.',
      anecdotes: [
        { text: '"Due to the one-person operation, [the shop limits] the number of customers. This allows for a more attentive dining experience with exquisite Japanese cuisine." — September 2026, fifth visit, ¥12,100 course.', source: R + 'B512915498/' },
        { text: '"The owner was managing the counter alone, preparing sashimi right in front of me." — July 2026, weekday lunch.', source: R + 'B531431096/' },
        { text: '東京の日本料理は、店によっては旨味や塩味をかなり強く打ち出すところもありますが、こちらは出汁を軸にしながら味付けは穏やかで — August 2026, ¥12,100 lunch course.', source: R + 'B533737224/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 冨田、日本料理、日本橋人形町2-6-11 五十番ビル 2F、人形町駅A3出口から徒歩2分、水天宮前駅7番出口から徒歩5分、毎日12:00〜14:30、18:00〜22:30、不定休、予約のみ、当日のキャンセルや人数変更はコース料金の100%、サービス料10%、カード可、電子マネー・QR不可、6席、2名から貸切可、子ども可、2025年1月20日オープン、名店で修業した冨田シェフ、地元の酒屋が選ぶ日本酒。口コミ(2026年7月〜10月): ご主人は麻布の「御料理 辻」出身、料理から接客まで基本的にお一人でこなすワンオペ、出汁を軸に穏やかな味付けで食べ疲れしない、ランチのコンパクトなコース12,100円 (サービス10%別)、平日のランチの御膳3,000円、土鍋ご飯、天ぷらや鱧の唐揚げの土鍋ご飯を出汁茶漬けに、お店へは階段を上がる。',
      confidence: 'medium', sources: [TB, R + 'B512915498/', R + 'B527284103/', R + 'B531080961/', R + 'B531431096/', R + 'B531694834/', R + 'B531873969/', R + 'B532137218/', R + 'B532819165/', R + 'B533737224/', R + 'B537521883/'] },
    cultural_comfort: { level: 'japanese', note: 'Omakase at a six-seat counter; the chef talks with guests (September 2026).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '東京都中央区日本橋人形町2-6-11 五十番ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated July–October 2026.' },
    pin_source: `Tabelog ${TB} (35.686100, 139.783022); cross-checked: GSI 東京都中央区日本橋人形町二丁目6番11号 (go) 9m. Same building as Ningyocho Nanafuku (tokyo_nanafuku_ningyocho, address_ja "東京都中央区日本橋人形町2-6-11 五十番ビル 1F"), whose pin is 5 m away; each keeps its own Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B527284103/', R + 'B533737224/', R + 'B531080961/'],
    price_note: 'Prices from July–October 2026 reviews; service charge 10% on courses (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Weekday lunch set: sashimi, main, clay-pot rice, miso soup', '¥3,000', 'Lunch', 'ask', 'no', 'July and October 2026; limited.', 'lunch_gozen'),
      it('', '', 'Compact lunch course', '¥12,100', 'Courses', 'ask', 'no', 'August and September 2026; plus 10% service.', 'lunch_course'),
      it('', '', 'Lunch omakase', '¥16,500', 'Courses', 'ask', 'no', 'July 2026, tax included.', 'lunch_omakase'),
    ] }, {
    cuisine: '6席のカウンターの季節の日本料理のコース (2026年の口コミ)・平日の昼の御膳3,000円: 刺身、穴子の柳川風などの主菜、土鍋ご飯、しじみの赤だし (2026年7月、10月)・昼のコース: コンパクトなコース12,100円とサービス料10% (2026年8月、9月)、昼のおまかせ16,500円 (2026年7月)・夜のコースは2026年10月に飲み物込みで40,000〜50,000円ほど・2026年の料理: 雲丹をのせた枝豆豆腐、Amakusa の鱧と玉子豆腐とじゅんさい、骨は骨酒にする Nagara 川の天然鮎の塩焼き、Aomori の蟹とトマトのアイス、Shizuoka の鰻の白焼きと蒲焼き、Ogawara 湖の鰻、Shimane の牛肉、鮑と香りのきのこ、松茸のお椀、白海老の天ぷらや鱧の唐揚げの土鍋ご飯を出汁茶漬けに、抹茶あんみつ・日本酒は地元の酒屋と選ぶ (食べログ)',
    neighborhood: '日本橋人形町2-6-11 五十番ビル 2F、薄暗い廊下の奥の白い暖簾。人形町駅A3出口から徒歩2分、水天宮前駅7番出口から徒歩5分。1階は人形町 なな福',
    gf_detail: '予約時に要確認 (アレルギーは予約時に伝えるよう店は書く、食べログ)。料理は昆布と鰹節、まぐろ節の出汁が基本 (2026年7月)。コースには天ぷらの土鍋ご飯、鱧や鮎の唐揚げも。刺身は醤油のほか塩と酢橘でも (2026年8月)。',
    vegan_detail: 'ヴィーガンではない: 鰹節とまぐろ節の出汁がどのコースにも (2026年7月)。',
    notes: '[懐石・人形町、冨田さんがひとりで営む6席のカウンター] 人形町駅近く、2階の薄暗い廊下の奥の白い暖簾をくぐると、冨田さんがひとりで料理し、もてなす6席のカウンター。2025年1月の開店。2026年の口コミによれば Taigetsu と麻布の「御料理 辻」で修業した。料理はやさしく出汁が軸で (2026年7月、昆布2種と鰹節、まぐろ節の出汁)、2026年8月の口コミは旨味や塩味を強く打ち出す東京の店と違い、食べ疲れしないと書く。コースは季節に沿い、天然鮎の塩焼き、鰻の白焼きと蒲焼き、松茸のお椀、季節の天ぷらを混ぜた土鍋ご飯。平日の昼の刺身と主菜と土鍋ご飯の御膳3,000円が入り口。開店以来5回通った人も。2人から貸切ができ、子ども連れも可。店へは階段を上がる。',
  });
}

// ================================================================ 人形町 伊勢利
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13187272/'; const R = TB + 'dtlrvwlst/'; const MENU = TB + 'dtlmenu/';
  const SITE = 'https://iseritokyo.rwop.jp/';
  const H = day(['11:30', '14:00'], ['17:30', '22:30']);
  put({
    id: 'tokyo_ningyocho_iseri', name: '人形町 伊勢利 (Ningyocho Iseri)', category: 'OMNI',
    lat: 35.686173, lng: 139.783112, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking — allergies must be notified in advance and may not be handled on the day (Tabelog). The courses include bread with smoked butter or cream, a vegetable pie, crackers and pastry desserts (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: French courses with fish and meat mains, foie gras, butter and cream (2026 reviews).',
    hours_raw: 'Mon–Sat and the days before and after a holiday 11:30–14:00 (last order 12:30) and 17:30–22:30 (last order 20:30); closed Sundays and holidays; hours may change (Tabelog). Courses booked in advance; same-day cancellations charged 100% (Tabelog). Service charge 10% (Tabelog). Cards, e-money and QR incl. Alipay and WeChat Pay (Tabelog). 20 seats: a counter of about 5 on the ground floor, tables upstairs; the 2nd floor can be reserved for up to 14 (Tabelog; July 2026 review). Steep stairs (June and September 2026). Birthday plates if booked by the day before (Tabelog). Non-smoking. Opened 16 September 2015 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nihonbashi-Ningyocho 2-6-10, a renovated old house that does not look French from outside — 3 min from Ningyocho Stn (from exit A3 turn right, then right again), 5 min from Suitengumae Stn',
    cuisine: 'French omakase courses with seasonal Japanese ingredients and Japanese wine · lunch course with fish and meat mains and a welcome drink ¥6,000 (September 2026) · Iseri full course of 7 dishes ¥10,000 (Tabelog menu, 2024) · full course with five glasses of paired wine ¥16,000 (July 2026) · 2026 dishes: amuse of melon and prosciutto, Alsatian pizza and corn-avocado; Kamo eggplant salad with fig sauce; foie gras with winter melon in duck sauce; a "Mont Blanc" moon-viewing salad; vegetable pie; pan-seared sea bream with shellfish sauce; duck magret with okra and figs; saury bisque; beef fillet; foie gras soup; two desserts; hot bread with smoked butter · about 50 wines chosen by a sommelier; since about 2024 Japanese wines only apart from Champagne (July 2026); sake too · baked goods from a sister patisserie (Tabelog)',
    website: SITE, gmaps: gm('人形町 伊勢利'), menu_url: MENU,
    notes: "[French · Ningyocho, Japanese-wine French courses in a pre-war house] A French restaurant in a renovated old house a few minutes from Ningyocho station, which from outside, one diner says, looks more like a former sushi shop. A July 2026 diner was told the name comes from the tabi shop of Ise merchants that once stood here. Inside are a small counter downstairs and a quiet dining room up a steep stair, with no background music. The chef's omakase pairs French technique with Japanese produce: a Kamo-eggplant salad with fig sauce, foie gras with winter melon, a moon-viewing \"Mont Blanc\" salad, sea bream and duck mains. The cellar has been Japanese wine only, apart from Champagne, for about two years; a pairing of five glasses with the full course was ¥16,000 in July 2026, and a lunch course is ¥6,000. Popular for birthdays (plates by arrangement). Closed Sundays.",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed; apologised that the shop is hard to find, September 2026)', 'Owner and a sommelier (unnamed; October 2026 review)'], origin: null,
      background: 'Opened 16 September 2015 (Tabelog). Tabelog\'s shop text: authentic French cuisine with Japanese elements at reasonable prices; courses at lunch and dinner with wines from across Japan; baked goods from a sister shop. The Tabelog menu (2024) describes "an 80-year-old traditional house"; a July 2026 diner estimated the house at about 90 years old and was told the name 伊勢利 comes from a former tabi shop run by merchants from Ise. Website iseritokyo.rwop.jp (Tabelog).',
      philosophy: 'Courses built on seasonal ingredients with care "from the story to the structure" (Tabelog shop text).', specialty: 'French omakase paired with Japanese wines.',
      anecdotes: [
        { text: '"The name \'Iseri\' comes from the former tabi (traditional Japanese socks) shop that occupied this space, which was run by merchants from Ise (Mie Prefecture)." — July 2026, ¥16,000 course with wine pairing.', source: R + 'B531498919/' },
        { text: '"The appetizer salad was a Mont Blanc salad inspired by the moon-viewing festival—what a work of art!" — September 2026, ¥6,000 lunch.', source: R + 'B535959050/' },
        { text: '"The exterior probably used to be a sushi restaurant. It doesn\'t look French at all." — September 2026.', source: R + 'B536516064/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 人形町 伊勢利、創作料理、フレンチ、日本橋人形町2-6-10、人形町駅から徒歩3分、月〜土・祝前日・祝後日11:30〜14:00 (L.O.12:30)、17:30〜22:30 (L.O.20:30)、日祝休み、当日キャンセルは100%、サービス料10%、カード・電子マネー・QR可、20席、2階は14名まで貸切、禁煙、2015年9月16日オープン、ソムリエが選ぶワイン約50種、日本酒も、姉妹店の焼き菓子、ホームページ iseritokyo.rwop.jp。口コミ(2026年6月〜10月): 古い家を改装した店、1階はカウンター、2階はテーブル、急な階段、Champagne 以外は日本ワインだけ、ワインペアリング付きのフルコース16,000円、昼のコース6,000円、フォアグラ、鴨、真鯛、お月見のモンブランのサラダ、誕生日のプレート、店主とソムリエのもてなし。',
      confidence: 'medium', sources: [TB, MENU, SITE, R + 'B529446059/', R + 'B531498919/', R + 'B534505070/', R + 'B534863271/', R + 'B535959050/', R + 'B536516064/', R + 'B536561492/', R + 'B536691319/', R + 'B538198183/', R + 'B538397549/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Chef\'s omakase courses; a sommelier explains the wines (September 2026).' },
    safety: { ...SAFETY0, staff_allergy_handling: ['Allergies must be notified in advance; may not be accommodated on the day (Tabelog)'] },
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋人形町2-6-10',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated June–October 2026.' },
    pin_source: `Tabelog ${TB} (35.686173, 139.783112); cross-checked: GSI 東京都中央区日本橋人形町二丁目6番10号 (go) 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU, R + 'B531498919/', R + 'B535959050/'],
    price_note: 'Prices from 2026 reviews and the Tabelog menu (last updated August 2024); service charge 10% (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Lunch course with fish and meat mains and a welcome drink', '¥6,000', 'Courses', 'ask', 'no', 'September 2026.', 'lunch_course'),
      it('', '', 'Chef\'s omakase Iseri full course, 7 dishes', '¥10,000', 'Courses', 'ask', 'no', 'Tabelog menu (2024).', 'full_course'),
      it('', '', 'Full course with five glasses of paired Japanese wine', '¥16,000', 'Courses', 'ask', 'no', 'July 2026, tax included.', 'pairing_course'),
    ] }, {
    cuisine: '季節の日本の食材と日本ワインのフレンチのおまかせコース・魚と肉のメインと乾杯の一杯付きの昼のコース6,000円 (2026年9月)・7品の伊勢利フルコース10,000円 (食べログのメニュー、2024年)・グラスワイン5杯のペアリング付きのフルコース16,000円 (2026年7月)・2026年の料理: メロンと生ハム、Alsace 風のピザ、とうもろこしとアボカドのアミューズ、無花果のソースの Kamo 茄子のサラダ、冬瓜と鴨のソースのフォアグラ、お月見の「モンブラン」のサラダ、野菜のパイ、貝のソースの真鯛のポワレ、オクラと無花果を添えた鴨のマグレ、秋刀魚のビスク、牛フィレ、フォアグラのスープ、デザート2品、燻製バターの温かいパン・ソムリエが選ぶ約50種のワイン、2024年ごろから Champagne 以外は日本ワインだけ (2026年7月)、日本酒も・姉妹店の焼き菓子 (食べログ)',
    neighborhood: '日本橋人形町2-6-10、外からはフレンチに見えない改装した古い家。人形町駅から徒歩3分 (A3出口を出て右、次の角を右)、水天宮前駅から徒歩5分',
    gf_detail: '予約時に要確認。アレルギーは事前に伝える必要があり、当日は対応できないこともある (食べログ)。コースには燻製バターやクリームのパン、野菜のパイ、クラッカー、焼き菓子のデザート (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない: 魚と肉のメイン、フォアグラ、バター、クリームのフレンチのコース (2026年の口コミ)。',
    notes: '[フレンチ・人形町、戦前の家で日本ワインと味わうフレンチのコース] 人形町駅から数分、古い家を改装したフレンチで、外から見ると寿司屋だったようだという人も。2026年7月の口コミによれば、店名はかつてここにあった Ise の商人のたび屋に由来する。1階に小さなカウンター、急な階段の上に BGM のない静かな客席。シェフのおまかせは日本の食材をフランスの技で: 無花果のソースの Kamo 茄子のサラダ、冬瓜とフォアグラ、お月見の「モンブラン」のサラダ、真鯛と鴨のメイン。ワインはこの2年ほど Champagne 以外は日本ワインだけで、フルコースと5杯のペアリングは2026年7月に16,000円、昼のコースは6,000円。誕生日の利用が多い (プレートは要相談)。日曜休み。',
  });
}

// ================================================================ えびな亭
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13288408/'; const R = TB + 'dtlrvwlst/'; const MENU = TB + 'dtlmenu/';
  const SITE = 'https://tokyo-ebisu-ebinatei.studio.site/';
  const H = day(['11:30', '14:30'], ['17:30', '23:00']); const THU = day(['17:30', '23:00']);
  put({
    id: 'tokyo_ebina_tei_ningyocho', name: 'えびな亭 (Ebina Tei)', category: 'OMNI',
    lat: 35.687154, lng: 139.782537, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Pasta, bread, gratin and pâté are central; the charcoal-grilled meats with grilled vegetables, carpaccio and the "Roma meshi" rice bowl may be simpler, but no dish is described as gluten-free.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Grilled vegetables, caponata and a bean minestrone appear in 2026 reviews, but the menu is built on Aomori meat and seafood and the soups are not described.',
    hours_raw: 'Mon, Tue, Wed, Fri and Sat 11:30–14:30 (last order 14:00) and 17:30–23:00 (last order food 21:00, drinks 22:00); Thu 17:30–23:00 only; closed Sunday (Tabelog). Lunch fills soon after opening (August 2026); book dinner a few days ahead (October 2026). Cover charge ¥550 (Tabelog). Visa and Master, PayPay (Tabelog). 20 seats incl. a counter; non-smoking; children and strollers welcome (Tabelog). Down a stair to the basement (October 2026).',
    hours: { 0: H, 1: H, 2: H, 3: THU, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nihonbashi-Ningyocho 3-12-1, スカイコート日本橋人形町第2 B1F, in a quiet alley — 0 min from Ningyocho Stn exit A4 ("15 steps", September 2026), 5 min from Suitengumae Stn',
    cuisine: 'Italian with seafood, meat and vegetables from Aomori, the owner\'s home prefecture (August 2026) · lunch: pasta set with salad, bread and coffee or tea ¥1,600, daily pasta or karasumi pasta with shirasu (August 2026); "Roma meshi" rice bowl of spiced fifteen-grain rice under salad and grilled meat, e.g. Towada beef belly ¥1,500, with a free large portion or coffee (October 2026) · dinner à la carte and courses with all-you-can-drink (2026 reviews): complimentary soup; pâté de campagne; carpaccio of the day (tuna cheek); oyster and lemon ajillo; cod milt and gorgonzola gratin (half portions available); sea bream and karasumi peperoncino; baby squid, green chili and karasumi pasta; truffle omelette; charcoal-grilled Aomori Hasegawa aged pork or roast duck with a heap of grilled vegetables (half or full); Aomori smoked salmon; house-bacon carbonara (usually on courses) · wine by the glass, Hakushu highballs, spicy ginger ale',
    website: SITE, gmaps: gm('えびな亭 人形町'), menu_url: MENU,
    notes: "[Italian · Ningyocho, an Aomori-produce trattoria in a basement by the station] A busy 20-seat basement Italian a few steps from Ningyocho station exit A4, where the owner, from Aomori, cooks with fish, meat and vegetables from home (August 2026). At night it is a lively bar-trattoria, often fully booked. Diners keep ordering the cod-milt and gorgonzola gratin, the sea bream and karasumi peperoncino, and charcoal-grilled duck or Aomori pork under a pile of grilled vegetables, available as half portions to try more dishes. One diner has been fifteen times. Lunch is a ¥1,600 pasta set, or the house \"Roma meshi\": a bowl of spiced multigrain rice with salad and grilled Towada beef, which an October 2026 diner understood began as a staff meal. Closed Sundays; no lunch on Thursdays.",
    chef_bio: { chef_name: null, roles: ['Owner-chef from Aomori (unnamed; August 2026 review: "The owner is from Aomori")'], origin: 'Aomori (August 2026 review)',
      background: 'Per 2026 reviews: an Italian bar using local ingredients from Aomori, e.g. Hasegawa natural aged pork, Towada beef, Aomori smoked salmon. An October 2026 diner understood the Roma meshi rice bowl grew out of a staff meal. The official site (studio.site) shows only the title 【公式】えびな亭 東京人形町.',
      philosophy: null, specialty: 'Cod milt and gorgonzola gratin; charcoal-grilled Aomori meats with grilled vegetables; karasumi pastas.',
      anecdotes: [
        { text: '"I wondered if I should have gone for the full portion instead, and when I mentioned it to the chef, [the chef] said, \'Well, it\'s a decent amount!\'" — October 2026, fourteenth visit, half roast duck.', source: R + 'B515703518/' },
        { text: '"The owner is from Aomori, so in the evening, [the restaurant offers] a variety of dishes featuring fresh seafood and vegetables from Aomori." — August 2026, ¥1,600 lunch.', source: R + 'B534163986/' },
        { text: '"It\'s always bustling, so it\'s best to make a reservation a few days in advance!" — October 2026.', source: R + 'B538149581/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): えびな亭、イタリアン、パスタ、日本橋人形町3-12-1 スカイコート日本橋人形町第2 B1F、人形町駅A4出口から徒歩0分、月・火・水・金・土11:30〜14:30、17:30〜23:00、木17:30〜23:00、日曜休み、550円、20席、カード (VISA、Master)、PayPay、禁煙、子ども可。口コミ(2026年8月〜10月、写真の見出しに「野菜とお肉たっぷりのどんぶり飯」「サービスのコーヒー」): 店主は Aomori 出身、Aomori の魚介と野菜と肉、ランチのパスタセット1,600円、からすみのパスタ、Towada の牛バラの「Roma meshi」1,500円、白子とゴルゴンゾーラのグラタン、鯛とからすみのペペロンチーノ、炭火焼きの豚や鴨と焼き野菜 (ハーフあり)、いつも賑わうので予約を。',
      confidence: 'medium', sources: [TB, MENU, SITE, R + 'B515703518/', R + 'B534163986/', R + 'B536424604/', R + 'B536573915/', R + 'B537016334/', R + 'B537350504/', R + 'B537617639/', R + 'B537908047/', R + 'B538109837/', R + 'B538149581/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'À la carte with half portions or set courses; lunch is a short set menu.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋人形町3-12-1 スカイコート日本橋人形町第2 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB} (35.687154, 139.782537); cross-checked: GSI 東京都中央区日本橋人形町三丁目12番1号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534163986/', R + 'B537350504/'],
    price_note: 'Prices from August–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch pasta set with salad, bread and a drink', '¥1,600', 'Lunch', 'no', 'ask', 'August 2026.', 'pasta_lunch'),
      it('', '', 'Roma meshi: Towada beef belly over spiced multigrain rice, with salad', '¥1,500', 'Lunch', 'ask', 'no', 'October 2026; free large portion or coffee.', 'roma_meshi'),
    ] }, {
    cuisine: '店主の地元 Aomori の魚介、肉、野菜を使うイタリアン (2026年8月)・昼: サラダ、パン、コーヒーか紅茶付きのパスタセット1,600円、日替わりかしらすのからすみパスタ (2026年8月)。スパイスで味付けした十五穀米にサラダと焼いた肉をのせた「Roma meshi」の丼、たとえば Towada の牛バラ1,500円、大盛りかコーヒーが無料 (2026年10月)・夜はアラカルトと飲み放題付きのコース (2026年の口コミ): サービスのスープ、パテ・ド・カンパーニュ、本日のカルパッチョ (鮪のほほ肉)、牡蠣とレモンのアヒージョ、白子とゴルゴンゾーラのグラタン (ハーフあり)、鯛とからすみのペペロンチーノ、小イカと青唐辛子とからすみのパスタ、トリュフのオムレツ、炭火で焼いた Aomori の Hasegawa の熟成豚や鴨のロースト、山盛りの焼き野菜 (ハーフかフル)、Aomori のスモークサーモン、自家製ベーコンのカルボナーラ (ふだんはコースで)・グラスワイン、Hakushu のハイボール、辛口のジンジャーエール',
    neighborhood: '日本橋人形町3-12-1 スカイコート日本橋人形町第2 B1F、静かな路地。人形町駅A4出口から徒歩0分 (2026年9月、「15歩」)、水天宮前駅から徒歩5分',
    gf_detail: '要確認。パスタ、パン、グラタン、パテが中心。炭火焼きの肉と焼き野菜、カルパッチョ、「Roma meshi」の丼は比較的シンプルかもしれないが、グルテンフリーと書かれた料理はない。',
    vegan_detail: '要確認。2026年の口コミには焼き野菜、カポナータ、豆のミネストローネも出てくるが、メニューは Aomori の肉と魚介が中心で、スープの中身は説明がない。',
    notes: '[イタリアン・人形町、駅すぐの地下の Aomori の食材のトラットリア] 人形町駅A4出口から数歩の地下にある20席のにぎやかなイタリアンで、Aomori 出身の店主が地元の魚、肉、野菜で料理する (2026年8月)。夜はバルのようなにぎわいで、よく満席。よく頼まれるのは白子とゴルゴンゾーラのグラタン、鯛とからすみのペペロンチーノ、山盛りの焼き野菜をのせた炭火焼きの鴨や Aomori の豚で、ハーフで頼めばいろいろ試せる。15回通った人も。昼は1,600円のパスタセットか、まかないから生まれたらしい店の名物「Roma meshi」(スパイスの雑穀ご飯にサラダと焼いた Towada の牛肉、2026年10月の口コミ)。日曜休み、木曜は昼なし。',
  });
}

save();
