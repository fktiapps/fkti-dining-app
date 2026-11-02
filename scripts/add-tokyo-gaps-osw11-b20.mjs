// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo clusters), circle `ningyocho` — lane osw11, batch 20.
//   + あづま軒 Azuma Ken (town Chinese about 77 years old, famous chuka-don and sauce yakisoba; queues)
//   + 人形町 鮨 なかむら Ningyocho Sushi Nakamura (8-seat Edomae counter of chef Takahiro Nakamura; since 2023)
//   + BAR暖炉 人形町 BAR Danro (alley bar open to 3 AM, whisky and cocktails; since 2008)
//   + 日本橋 蕎ノ字 Nihonbashi Sonoji (tempura-and-soba omakase of Toshiyuki Suzuki; Tabelog Award Silver 2023–26)
//   Picked from `node scripts/sweep/queue.mjs tokyo-gaps next core 8 ningyocho` (main repo, 2026-11-02): the first four,
//   209, 210, 211 and 213 m from the centre.
//   Dedupe. None is in data/tokyo.json by name or address, except that BAR Danro shares 日本橋人形町2-11-4 with Hito 8888
//   (tokyo_hito_8888_ningyocho, address_ja "東京都中央区日本橋人形町2-11-4"): Tabelog points 5.6 m apart, own pins.
//   Chain check. A web search found no other BAR暖炉 shop; the others are single shops (Sonoji moved from Shizuoka in 2016).
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, save } = openCitySweep('tokyo-gaps', TODAY, 'osw11-20');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ あづま軒
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13043682/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:00'], ['18:00', '22:00']);
  put({
    id: 'tokyo_azuma_ken_ningyocho', name: 'あづま軒 (Azuma Ken)', category: 'OMNI',
    lat: 35.684998, lng: 139.783886, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles, gyoza, wontons, soy-based sauces and fried kara-age.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork, chicken and egg dishes.',
    hours_raw: 'Mon–Fri 11:30–15:00 (last order 14:00) and 18:00–22:00 (last order 21:00); closed Sat, Sun and holidays (Tabelog remarks; the hours table gives lunch to 14:00). No reservations. Cash only (Tabelog; October 2026). 24 seats over two floors; no shared tables (2026 reviews). Lunch non-smoking; at dinner the first floor is non-smoking and the second floor allows smoking (Tabelog). Queues before opening, about 15 people at 11:30 in October 2026; dishes take 10–20 minutes. Established about 77 years ago (September 2026 review).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Nihonbashi-Ningyocho 2-3-8, in a back alley off Ningyocho-dori past McDonald\'s towards Suitengumae — 2 min from Ningyocho Stn',
    cuisine: 'Long-running town Chinese (machi-chuka) (2026 reviews) · chuka-don with soup ¥850, the most ordered (September–October 2026) · stir-fried meat and vegetables ¥800, pork with garlic chives ¥800, kara-age with a sweet-and-sour sauce ¥750 or as a set ¥950 (2026) · sauce yakisoba ¥950, large +¥150 (October 2026) · wonton ramen ¥850; tantanmen; bean-sprout noodles; bamboo-shoot noodles (2026) · gyoza; rice ¥200; raw egg ¥100 (September 2026) · beer and shochu',
    website: TB, gmaps: gm('あづま軒 人形町'), menu_url: null,
    notes: "[Chinese · Ningyocho, a back-alley machi-chuka with a queue] A two-storey town-Chinese restaurant in a back alley, about 77 years old by one regular's count (September 2026), now so popular that a line forms before the 11:30 opening. Half the room orders the chuka-don, vegetables and pork in a glossy sauce over rice (¥850); others come for the old-fashioned sauce yakisoba, the stir-fried meat and vegetables, or kara-age in a sweet-and-sour glaze. Food takes 10–20 minutes, as everything is cooked to order and tables are never shared. At night the second floor fills with office workers drinking, and smoking is allowed upstairs. Cash only; weekdays only.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Established about 77 years ago, per a 20-year regular (September 2026). Long famous locally; queues at all hours in recent years (September 2026).',
      philosophy: null, specialty: 'Chuka-don; sauce yakisoba.',
      anecdotes: [
        { text: '"Today’s lunch was at Azuma Ken, a beloved local Chinese restaurant I’ve been visiting for about 20 years (established 77 years ago)" — September 2026.', source: R + 'B510575915/' },
        { text: '"I arrived 10 minutes before opening and found 4 people already waiting. … by opening time, there were 15 people waiting" — October 2026.', source: R + 'B536627478/' },
        { text: '"It took over 20 minutes from ordering to receiving my meal. Payment is cash only." — October 2026.', source: R + 'B537854879/' },
      ],
      japanese_sources_summary: '食べログ: あづま軒、中華料理、ラーメン、餃子、日本橋人形町2-3-8、人形町駅から徒歩2分、月〜金11:30〜15:00 (L.O.14:00)、18:00〜22:00 (L.O.21:00)、土日祝休み、予約不可、カード・電子マネー・QR不可、24席、昼は全席禁煙、夜は1階禁煙・2階喫煙可。口コミ(2025年3月〜2026年10月): 創業約77年、町中華、開店前から行列、相席なし、中華丼850円、肉野菜炒め800円、ニラ肉炒め800円、唐揚げ750円 (定食950円)、ソース焼きそば950円、ワンタンメン850円、担々麺、もやしそば、料理が出るまで10〜20分、夜の2階は会社員の飲み会、現金のみ。',
      confidence: 'medium', sources: [TB, R + 'B502890114/', R + 'B510575915/', R + 'B513563655/', R + 'B517472943/', R + 'B534916881/', R + 'B535586507/', R + 'B535719931/', R + 'B536627478/', R + 'B536953076/', R + 'B537854879/'] },
    cultural_comfort: { level: 'japanese', note: 'Queue before opening; cash only; smoking upstairs at night.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋人形町2-3-8',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews to October 2026.' },
    pin_source: `Tabelog ${TB} (35.684998, 139.783886); cross-checked: GSI 東京都中央区日本橋人形町二丁目3番8号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B510575915/', R + 'B513563655/', R + 'B537854879/', R + 'B535719931/'],
    price_note: 'Prices from August–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Chuka-don (with soup)', '¥850', 'Rice', 'no', 'no', 'September 2026.', 'chukadon'),
      it('', '', 'Stir-fried meat and vegetables', '¥800', 'Dishes', 'no', 'no', 'September 2026.', 'nikuyasai'),
      it('', '', 'Sauce yakisoba', '¥950', 'Noodles', 'no', 'no', 'October 2026; large +¥150.', 'yakisoba'),
      it('', '', 'Wonton ramen', '¥850', 'Noodles', 'no', 'no', 'August 2026.', 'wantanmen'),
      it('', '', 'Kara-age set', '¥950', 'Sets', 'no', 'no', 'September 2026.', 'karaage'),
    ] }, {
    cuisine: '長く続く町中華 (2026年の口コミ)・いちばん人気の中華丼、スープ付き850円 (2026年9月〜10月)・肉野菜炒め800円、ニラ肉炒め800円、甘酢あんの唐揚げ750円、定食950円 (2026年)・ソース焼きそば950円、大盛り+150円 (2026年10月)・ワンタンメン850円、担々麺、もやしそば、メンマそば (2026年)・餃子、ライス200円、生卵100円 (2026年9月)・ビールと焼酎',
    neighborhood: '日本橋人形町2-3-8、人形町通りをマクドナルドを過ぎて水天宮前方面に入った裏路地。人形町駅から徒歩2分',
    gf_detail: 'グルテンフリーではない: 小麦の麺、餃子、ワンタン、醤油のたれ、唐揚げ。',
    vegan_detail: 'ヴィーガンではない: 豚肉、鶏肉、卵の料理。',
    notes: '[中華・人形町、行列のできる裏路地の町中華] 裏路地にある2階建ての町中華で、常連によれば約77年 (2026年9月)。いまは11時半の開店前から行列ができるほどの人気。半分の客が頼むのは、野菜と豚肉をとろりとしたあんでご飯にのせた中華丼 (850円)。昔ながらのソース焼きそば、肉野菜炒め、甘酢あんの唐揚げ目当ての人も。すべて注文を受けてから作り、相席もしないので料理まで10〜20分かかる。夜の2階は会社員の飲み会でにぎわい、2階は喫煙可。現金のみ、平日のみ。',
  });
}

// ================================================================ 人形町 鮨 なかむら
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13284956/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'tokyo_sushi_nakamura_ningyocho', name: '人形町 鮨 なかむら (Ningyocho Sushi Nakamura)', category: 'MOM_AND_POP',
    lat: 35.684579, lng: 139.783203, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Nigiri with soy-based marinades and seasoned toppings (marinated tuna, anago, a tamagoyaki made with fish paste and yam) (2026 reviews); nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an Edomae fish sushi counter.',
    hours_raw: 'Lunch by reservation only, for one group (June 2026); dinner from 18:00; closed Monday (Tabelog). No closing time is listed. Courses only: lunch from ¥10,000, dinner from ¥20,000 (May 2026). Cards, transport IC, iD and QUICPay; no QR (Tabelog). 8 counter seats; private hire up to 20 (Tabelog). Non-smoking. Opened 16 February 2023 (Tabelog).',
    hours: {}, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nihonbashi-Ningyocho 1-16-2 1F — near Ningyocho Stn',
    cuisine: 'Edomae sushi omakase: seasonal small dishes, then about nine nigiri starting with tuna belly, on rice seasoned with red and white vinegar (October 2026) · lunch course from ¥10,000, dinner from ¥20,000 (May 2026) · dishes in 2025–26: Amela tomato with cream cheese, Wajima aoyagi, fugu, Lake Biwa trout, returning bonito from Kesennuma, takabe, milt, shako; nigiri of marinated lean and fatty tuna, sea urchin, scallop, squid, horse mackerel, anago; a sweet tamagoyaki of fish paste and yam · a wide range of unusual sakes; champagne',
    website: TB, gmaps: gm('人形町 鮨 なかむら'), menu_url: null,
    notes: "[Sushi · Ningyocho, an eight-seat Edomae counter with a talkative chef] An eight-seat sushi counter opened in 2023, where chef Takahiro Nakamura, said by one regular to have forty-three years at the craft (April 2026), keeps things relaxed and funny across the counter. The omakase opens with seasonal dishes such as Amela tomato with cream cheese, fugu or Wajima aoyagi, then about nine nigiri on rice seasoned with two vinegars, from fatty tuna to anago, ending with a castella-like tamagoyaki. Sake lovers find labels they haven't seen elsewhere. Diners call the value outstanding for the quality: lunch from about ¥10,000, dinner from ¥20,000. Lunch takes one group, by reservation; closed Mondays.",
    chef_bio: { chef_name: 'Takahiro Nakamura', roles: ['Chef ("Under the charming and approachable Chef Takahiro Nakamura", October 2026 review)', 'Owner ("a witty owner", May 2026 review)'], origin: null,
      background: 'Opened 16 February 2023 (Tabelog). Per reviews: the chef has honed the craft for 43 years (April 2026); a December 2024 reviewer found the appetisers and nigiri similar in style to Daichi\'s, "likely because the chef is a protégé of Daichi".',
      philosophy: null, specialty: 'Edomae omakase; tamagoyaki with fish paste and yam.',
      anecdotes: [
        { text: '"I\'m usually not great at talking to people, but the chef\'s casual and humorous demeanor made me feel completely at ease." — December 2025.', source: R + 'B519773776/' },
        { text: '"The sushi rice is a unique blend of red and white vinegar, achieving a perfect texture." — October 2026.', source: R + 'B537515317/' },
        { text: '"The dedication and passion of the chef, who has been honing [the] craft for 43 years, is truly impressive." — April 2026.', source: R + 'B536815274/' },
      ],
      japanese_sources_summary: '食べログ: 人形町 鮨 なかむら、寿司、日本橋人形町1-16-2 1F、昼は予約のみ、夜は18:00から、月曜休み、カード・電子マネー可、QR不可、カウンター8席、貸切20名まで、禁煙、2023年2月16日オープン。口コミ(2025年6月〜2026年10月): 大将 Takahiro Nakamura さん、43年の経験、気さくで話が楽しい、昼のコースは10,000円から、夜は20,000円から、季節の小皿のあと大トロから始まる握り約9貫、赤酢と白酢のしゃり、アメーラトマトとクリームチーズ、Wajima の青柳、ふぐ、Kesennuma の戻り鰹、雲丹、穴子、すり身と山芋の玉子焼き、珍しい日本酒、値段の割に質が高い。',
      confidence: 'medium', sources: [TB, R + 'B501978945/', R + 'B519773776/', R + 'B528276452/', R + 'B530412765/', R + 'B530685892/', R + 'B530906111/', R + 'B534891231/', R + 'B536815274/', R + 'B536915253/', R + 'B537515317/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Courses only; relaxed counter, no etiquette scolding (May 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋人形町1-16-2 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing; reviews to October 2026.' },
    pin_source: `Tabelog ${TB} (35.684579, 139.783203); cross-checked: GSI 東京都中央区日本橋人形町一丁目16番2号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B528276452/'],
    price_note: 'Course floors from a May 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Lunch omakase course', 'from ¥10,000', 'Courses', 'ask', 'no', 'May 2026; by reservation, one group.', 'lunch'),
      it('', '', 'Dinner omakase course', 'from ¥20,000', 'Courses', 'ask', 'no', 'May 2026.', 'dinner'),
    ] }, {
    cuisine: '江戸前の鮨のおまかせ: 季節の小皿のあと、大トロから始まる握り約9貫、しゃりは赤酢と白酢 (2026年10月)・昼のコース10,000円から、夜20,000円から (2026年5月)・2025〜26年の料理: アメーラトマトとクリームチーズ、Wajima の青柳、ふぐ、Biwa 湖の鱒、Kesennuma の戻り鰹、タカベ、白子、シャコ。漬けの赤身とトロ、雲丹、帆立、いか、鯵、穴子の握り、すり身と山芋の甘い玉子焼き・珍しい日本酒、シャンパン',
    neighborhood: '日本橋人形町1-16-2 1F。人形町駅の近く',
    gf_detail: '要確認。握りには醤油の漬けや味付けの具 (漬けまぐろ、穴子、すり身と山芋の玉子焼き) もある (2026年の口コミ)。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではない: 魚の江戸前の鮨のカウンター。',
    notes: '[鮨・人形町、話の楽しい大将の8席の江戸前のカウンター] 2023年に開いた8席の鮨のカウンターで、常連によれば43年の経験を持つ大将の Takahiro Nakamura さん (2026年4月) が、カウンター越しに気さくで楽しい雰囲気を作る。おまかせは、アメーラトマトとクリームチーズ、ふぐ、Wajima の青柳などの季節の小皿から始まり、2種の酢のしゃりの握りが大トロから穴子まで約9貫、最後はカステラのような玉子焼き。日本酒好きはほかで見ない銘柄に出会える。質の割に値段が手ごろという声が多く、昼は約10,000円から、夜は20,000円から。昼は1組だけ予約制、月曜休み。',
  });
}

// ================================================================ BAR暖炉 人形町
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13059805/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '03:00']);
  put({
    id: 'tokyo_bar_danro_ningyocho', name: 'BAR暖炉 人形町 (BAR Danro Ningyocho)', category: 'OMNI',
    lat: 35.685421, lng: 139.784273, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Bar food includes fish and chips and pasta; the taco rice can be made on cauliflower rice (Tabelog menu, 2025). Nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: bar snacks of salami, seafood and beef; ask about salads.',
    hours_raw: 'Mon–Sat and the days before and after holidays 18:00–03:00 (last order 02:30); holidays 18:00–24:00 (last order 23:30); closed Sunday (Tabelog). Reservations accepted; private hire up to 20 (Tabelog). Service charge 10%, no table charge (Tabelog). Cards, transport IC, QUICPay, PayPay and d Barai (Tabelog). 17 seats: 7 at the counter, 10 at tables (Tabelog). Smoking allowed (Tabelog). Opened 11 March 2008 (Tabelog). An English menu (November 2025).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nihonbashi-Ningyocho 2-11-4, 三ツ矢ビル 1F, down a narrow alley behind Amazake Yokocho — 2 min from Ningyocho Stn exit A1, 3 min from Suitengumae Stn exit 7',
    cuisine: 'Neighbourhood bar of whisky and cocktails (2023–26 reviews) · whiskies served in Baccarat glasses (May 2024); gin and tonic with Tanqueray; seasonal fruit cocktails such as kumquat; a Bloody Caesar on request (April 2025); cocktails around ¥1,000 (November 2025) · food (Tabelog menu, May 2025): wagyu and vegetable taco rice on cauliflower rice ¥1,320–¥1,430, chicken Caesar salad ¥990, salami ¥990, scallop tartare dip ¥1,045, octopus and olive marinade ¥1,045, fish and chips ¥1,155; peperoncino pasta; nuts and chocolate',
    website: TB, gmaps: gm('BAR暖炉 人形町'), menu_url: TB + 'dtlmenu/',
    notes: "[Bar · Ningyocho, a friendly alley bar open until 3 AM] A neighbourhood bar since 2008, tucked down a narrow alley behind Amazake Yokocho, with a counter up front and tables at the back for small groups. The master is chatty and welcoming, to solo drinkers and travellers alike; there's an English menu and tips on Tokyo for visitors (November 2025). Whisky comes in Baccarat glasses, cocktails run about ¥1,000, and the kitchen turns out more than snacks: a low-carb taco rice on cauliflower rice, fish and chips, peperoncino pasta. It stays open until 3 AM most nights, which makes it a late stop after Ningyocho's early-closing restaurants. 10% service; smoking allowed.",
    chef_bio: { chef_name: null, roles: ['Owner and master behind the bar (unnamed; "the friendly owner", January 2017; "The master of the bar is very friendly", November 2025)'], origin: null,
      background: 'Opened 11 March 2008 (Tabelog). An English menu and English information about Tokyo for visitors (November 2025 review).',
      philosophy: null, specialty: 'Cocktails; whisky.',
      anecdotes: [
        { text: '"… recommended whiskies in beautiful Baccarat glasses, and the prices are quite reasonable." — May 2024.', source: R + 'B484389824/' },
        { text: '"When I ordered a Bloody Caesar, … a variety of flavor-enhancing items like salt, pepper, and sauces!" — April 2025.', source: R + 'B505510900/' },
        { text: '"… an English menu and … English information about various places in Tokyo, making it a welcoming spot for tourists." — November 2025.', source: R + 'B516746595/' },
      ],
      japanese_sources_summary: '食べログ: BAR暖炉 人形町、バー、パブ、日本橋人形町2-11-4 三ツ矢ビル 1F、人形町駅A1出口から徒歩2分、月〜土・祝前日・祝後日18:00〜3:00、祝日18:00〜24:00、日曜休み、予約可、サービス料10%・チャージなし、カード・電子マネー・QR可、17席 (カウンター7、テーブル10)、喫煙可、2008年3月11日オープン、カリフラワーライスのタコライス、フィッシュアンドチップス。口コミ(2017年1月〜2026年5月): 路地の奥の隠れ家、気さくなマスター、ウイスキーはバカラのグラスで、カクテルは約1,000円、英語のメニュー、深夜まで開いている、少人数のテーブル席も。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', R + 'B244445087/', R + 'B464219651/', R + 'B484389824/', R + 'B498093190/', R + 'B505447816/', R + 'B505510900/', R + 'B505898247/', R + 'B514430965/', R + 'B516746595/', R + 'B528287587/'] },
    cultural_comfort: { level: 'english', note: 'English menu and Tokyo tips for visitors (November 2025).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋人形町2-11-4 三ツ矢ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing (menu updated 2025-05-01); reviews to May 2026.' },
    pin_source: `Tabelog ${TB} (35.685421, 139.784273); cross-checked: GSI 東京都中央区日本橋人形町二丁目11番4号 (go) 14m. Shares the address with Hito 8888 (tokyo_hito_8888_ningyocho, address_ja "東京都中央区日本橋人形町2-11-4"), 5.6 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB + 'dtlmenu/'],
    price_note: 'Tabelog menu, tax included, last updated 2025-05-01; plus 10% service.', last_checked: TODAY, items: [
      it('', '', 'Wagyu veggie taco rice (50% cauliflower rice)', '¥1,320', 'Recommended', 'ask', 'no', 'Tabelog menu, 2025; 100% cauliflower ¥1,430.', 'tacorice'),
      it('', '', 'Fish and chips', '¥1,155', 'Chips', 'no', 'no', 'Tabelog menu, 2025.', 'fishchips'),
      it('', '', 'Scallop tartare dip', '¥1,045', 'Hors d\'oeuvre', 'ask', 'no', 'Tabelog menu, 2025.', 'scallop'),
      it('', '', 'Chicken Caesar salad', '¥990', 'Hors d\'oeuvre', 'ask', 'no', 'Tabelog menu, 2025.', 'caesar'),
    ] }, {
    cuisine: 'ウイスキーとカクテルの町のバー (2023〜26年の口コミ)・ウイスキーはバカラのグラスで (2024年5月)、タンカレーのジントニック、金柑などの季節の果物のカクテル、頼めばブラッディ・シーザーも (2025年4月)、カクテルは約1,000円 (2025年11月)・料理 (食べログのメニュー、2025年5月): カリフラワーライスの和牛と野菜のタコライス1,320〜1,430円、チキンのシーザーサラダ990円、サラミ990円、帆立のタルタルディップ1,045円、蛸とオリーブのマリネ1,045円、フィッシュアンドチップス1,155円。ペペロンチーノ、ナッツとチョコレート',
    neighborhood: '日本橋人形町2-11-4 三ツ矢ビル 1F、Amazake Yokocho の裏の細い路地の奥。人形町駅A1出口から徒歩2分、水天宮前駅7番出口から徒歩3分',
    gf_detail: '要確認。フィッシュアンドチップスやパスタもあり、タコライスはカリフラワーライスにできる (食べログのメニュー、2025年)。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではない: サラミ、魚介、牛肉のつまみ。サラダは要確認。',
    notes: '[バー・人形町、朝3時まで開いている気さくな路地のバー] Amazake Yokocho の裏の細い路地の奥にある2008年からの町のバーで、手前にカウンター、奥に少人数向けのテーブル。マスターは話好きで、ひとり客にも旅行者にも気さく。英語のメニューや旅行者向けの東京の案内もある (2025年11月)。ウイスキーはバカラのグラスで、カクテルは約1,000円。料理もつまみ以上で、カリフラワーライスの低糖質のタコライス、フィッシュアンドチップス、ペペロンチーノ。ほぼ毎晩朝3時まで開いているので、早く閉まる人形町の店のあとに寄れる。サービス料10%、喫煙可。',
  });
}

// ================================================================ 日本橋 蕎ノ字
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13201969/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.sonoji.info/';
  const H = day(['12:00', '14:00'], ['18:30', '21:00']);
  put({
    id: 'tokyo_nihonbashi_sonoji_ningyocho', name: '日本橋 蕎ノ字 (Nihonbashi Sonoji)', category: 'MOM_AND_POP',
    lat: 35.686243, lng: 139.784548, cuisine_type: 'tempura',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: every piece is in a wheat batter, the dipping sauce is soy-based, and the meal ends with soba. A buckwheat (soba) allergen is also present throughout (Tabelog).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood-led tempura omakase with a dashi soup and soba in dashi.',
    hours_raw: 'Daily 12:00–14:00 and 18:30–21:00, with irregular closures; omakase only, everyone starting together (Tabelog). Reservations essential and hard to get; cancellations 50% from three days before, 100% from the day before (Tabelog). Guests are asked not to wear strong perfume, for diners with soba allergies (Tabelog). Cards; no e-money or QR; service charge 5% (Tabelog). 9 counter seats; non-smoking (Tabelog). Opened in Nihonbashi on 30 October 2016 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nihonbashi-Ningyocho 2-22-11, 井上ビル 1F — 3 min from Ningyocho Stn (Hibiya Line), 5 min from Suitengumae Stn, 6 min from Hamacho Stn',
    cuisine: 'Tempura omakase that ends in soba: about 15–20 seasonal pieces, light batter, with salt or a soba-shop dipping sauce (2026 reviews) · a 2026 course: soba grains, clear clam or shijimi soup, two shrimp and the heads, kisu, squid, two kinds of eggplant, swordfish, turban shell, chestnuts, maitake, kohada, sea urchin, pumpkin, anago, matsutake in autumn, then warm soba topped with sakura-shrimp kakiage (August–October 2026) · new soba from Nikko in autumn (October 2026) · Japanese sake, including Juyondai (October 2026) · reviewers paid ¥40,000–¥59,999 a head; ¥47,000 for one October 2026 dinner',
    website: SITE, gmaps: gm('日本橋 蕎ノ字'), menu_url: null,
    notes: "[Tempura · Ningyocho, tempura-and-soba omakase from a self-taught master] A nine-seat counter where owner Toshiyuki Suzuki, self-taught in tempura, serves a single seasonal omakase that finishes, unusually, with a bowl of soba — the shop began as a soba-and-tempura house in Shizuoka in 2000 and moved to Nihonbashi in 2016 (October 2026). The batter is light enough that diners feel no heaviness after twenty pieces; the soba sauce lends the dipping sauce depth; the last plate is warm soba under sakura-shrimp kakiage. A Tabelog Award Silver winner every year from 2023 to 2026, it is famously hard to book, and some regulars count forty-plus visits. Expect about ¥40,000–¥50,000. Everyone starts together; arrive on time.",
    chef_bio: { chef_name: 'Toshiyuki Suzuki', roles: ['Owner-chef, self-taught in tempura (October 2026 review)', 'Kato, a younger cook who makes the soba (February 2026 review)'], origin: 'Shizuoka Prefecture (October 2026 review)',
      background: 'Per an October 2026 review: Toshiyuki Suzuki taught himself tempura, opened Sonoji in the chef\'s hometown in Shizuoka Prefecture in 2000 and moved to Nihonbashi in 2016. Opened in Ningyocho on 30 October 2016 (Tabelog). Awards (Tabelog): The Tabelog Award Bronze 2019–2022 and Silver 2023–2026; Tempura 100 in 2022, 2023 and 2025; Soba 100 in 2017. The soba is made by Kato, the next-generation cook, and boiled by the master (February 2026 review).',
      philosophy: null, specialty: 'Seasonal tempura omakase finishing with soba.',
      anecdotes: [
        { text: '"The next generation ace, Kato-kun, prepared the soba, which the master is now boiling." — February 2026.', source: R + 'B242237119/' },
        { text: '"…the owner remembered the exact date of my previous visit, and I was truly humbled by that." — September 2026, after six years away.', source: R + 'B427037788/' },
        { text: '"The warm soba was topped with sakura shrimp tempura, which was simply exquisite." — October 2026.', source: R + 'B537714467/' },
      ],
      japanese_sources_summary: '食べログ: 日本橋 蕎ノ字、天ぷら、The Tabelog Award 2019〜2022 Bronze・2023〜2026 Silver、天ぷら百名店2022・2023・2025、そば百名店2017、日本橋人形町2-22-11 井上ビル 1F、人形町駅から徒歩3分、毎日12:00〜14:00、18:30〜21:00、不定休、おまかせのみ一斉スタート、キャンセルは3日前から50%・前日から100%、そばアレルギーの客のため香水は控えて、カード可、サービス料5%、9席、禁煙、2016年10月30日オープン、ホームページ sonoji.info。口コミ(2026年): 店主 Toshiyuki Suzuki さんは独学で天ぷらを学び、2000年に Shizuoka で蕎ノ字を開き2016年に日本橋へ、締めはそば、桜海老のかき揚げそば、蕎麦の実、海老2本と頭、雲丹、穴子、松茸、Nikko の新そば、Kato さんがそばを打つ、予約が取りにくい、一人4〜5万円。',
      confidence: 'medium', sources: [TB, SITE, R + 'B242237119/', R + 'B406974051/', R + 'B424172586/', R + 'B427037788/', R + 'B480242266/', R + 'B481403710/', R + 'B531785926/', R + 'B537144077/', R + 'B537174251/', R + 'B537714467/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Simultaneous start; no strong perfume; very hard to book.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['Soba (buckwheat) is used throughout; guests are asked not to wear strong perfume for the sake of diners with soba allergies (Tabelog).'] },
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋人形町2-22-11 井上ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews to October 2026.' },
    pin_source: `Tabelog ${TB} (35.686243, 139.784548); cross-checked: GSI 東京都中央区日本橋人形町二丁目22番11号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B424172586/', TB],
    price_note: 'No published course price; one October 2026 dinner cost ¥47,000; Tabelog budget ¥30,000–¥39,999 (dinner); plus 5% service.', last_checked: TODAY, items: [
      it('', '', 'Tempura and soba omakase', 'about ¥40,000–¥50,000', 'Omakase', 'no', 'no', '2026 reviews; ¥47,000 in October 2026.', 'omakase'),
    ] }, {
    cuisine: 'そばで締める天ぷらのおまかせ: 季節の天ぷら15〜20品ほど、軽い衣で塩かそば屋の天つゆで (2026年の口コミ)・2026年のコース: 蕎麦の実、蛤やしじみのお吸い物、海老2本と頭、きす、いか、2種の茄子、カジキ、さざえ、栗、舞茸、小肌、雲丹、かぼちゃ、穴子、秋は松茸、締めは桜海老のかき揚げをのせた温かいそば (2026年8月〜10月)・秋は Nikko の新そば (2026年10月)・日本酒、十四代も (2026年10月)・口コミの支払いは一人4万〜6万円、2026年10月の夜は47,000円',
    neighborhood: '日本橋人形町2-22-11 井上ビル 1F。人形町駅 (日比谷線) から徒歩3分、水天宮前駅から徒歩5分、浜町駅から徒歩6分',
    gf_detail: 'グルテンフリーではない: すべて小麦の衣で、天つゆは醤油ベース、締めはそば。そば (アレルゲン) も全体に使う (食べログ)。',
    vegan_detail: 'ヴィーガンではない: 魚介中心の天ぷらのおまかせで、出汁のお吸い物と出汁のそば。',
    notes: '[天ぷら・人形町、独学の主人のそばで締める天ぷらのおまかせ] 天ぷらを独学で極めた店主の Toshiyuki Suzuki さんが、季節のおまかせをひとつだけ出す9席のカウンターで、珍しくそばで締める。2000年に Shizuoka でそばと天ぷらの店として始まり、2016年に日本橋に移った (2026年10月)。衣は軽く、20品食べても重さを感じないという。そば屋のかえしが天つゆに深みを与え、最後は桜海老のかき揚げをのせた温かいそば。2023年から2026年まで毎年 The Tabelog Award Silver、予約が取りにくいことで知られ、40回以上通う常連も。予算は4万〜5万円ほど。全員一斉に始まるので時間厳守で。',
  });
}

save();
