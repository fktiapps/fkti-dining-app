// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 92.
//   Queue run from the osw2 worktree, 2026-11-08. Rest tier, nearest-first (queue.mjs kyoto-missed next rest 2000, lane ids by distance).
//   Rest rule: at least one 2025–26 review and enough sourced detail. Days the sources do not state are left out of hours.
//   Brands checked against queue-status.jsonl (full names and brand stems), than.co.jp/brands and 株式会社WILL (will-food.com).
//   + 御所南 金八 Gosho-minami Kinpachi (seasonal-fish kappo izakaya, moved from Nishikyo in October 2024; official site; 2025–26 reviews)
//   + 相撲茶屋いころ Ikoro (chanko-nabe in Maruyama Park, 56 years, recipe from a former Tokitsukaze-stable wrestler; official site)
//   + きょうの晩ごはん 樹 Itsuki (obanzai izakaya with ¥1,100–1,200 lunches near Karasuma-Oike, since 2010)
//   + 焼肉 はやし 四条店 Yakiniku Hayashi (mixed-grill horumon yakiniku; a four-shop local brand since 1950; official site)
//   + 花水庵 Kasui-an (Japanese and shojin meals in Chion-in's Wajun Kaikan, open to the public; 2025–26 reviews)
//   - 串だいにんぐ 炭焼浪漫家 四条烏丸店 — chain (five or more 浪漫家 shops in Kyoto)
//   - ルアン アカガネリゾート京都東山1925 — large parent (バリューマネジメント株式会社, as ruled for 26006391)
//   None of the drafted shops is in data/kyoto.json, hidden records included: grep by id, name and address.
//   Service charges: none found (いころ's Tabelog field reads なし).
//   Pins: Tabelog /en/ point, cross-checked with GSI; いころ and 花水庵 sit in big park and temple lots, so both are marked approximate;
//   樹 moved ~4 m off kyoto_075_shokudo (5.3 m); each 9 m+ from every pin on main, hidden records included.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-92');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26003355', '串だいにんぐ 炭焼浪漫家 四条烏丸店: chain — five or more 浪漫家 yakitori shops in Kyoto (Shijo-Karasuma, Gosho-minami and Higashikujo in our crawl; Fujinomori and Hakubaicho on gurunavi and rurubu)');
skip('26022051', 'ルアン アカガネリゾート京都東山1925: large parent — a ルアン venue of バリューマネジメント株式会社 (as ruled for 26006391, ルアン 鮒鶴京都鴨川リゾート)');

// ================================================================ 御所南 金八
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26041941/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://kinpachi.jp/';
  const D = day(['17:00', '22:00']), W = day(['11:30', '14:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_goshominami_kinpachi', name: '御所南 金八 (Gosho-minami Kinpachi)', category: 'OMNI',
    lat: 35.012382367867026, lng: 135.76667556043213, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sashimi, grilled and simmered fish, tempura and a house ponzu; no gluten information is published (official site; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seasonal-fish kappo (official site).',
    hours_raw: 'Dinner 17:00–22:00; lunch Saturday and Sunday only, 11:30–14:00 (last order 13:30 à la carte, 12:30 for courses); closed Wednesday and some other days (Tabelog; official site, July 2026 notice). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). Eight counter seats; private hire for up to 9 (Tabelog). Non-smoking (Tabelog). On Gokomachi north of Oshikoji, about 4 minutes from Kyoto Shiyakusho-mae (Tabelog). Reopened here on 11 October 2024 after years in Nishikyo (Tabelog; official site).',
    hours: { 0: D, 1: D, 3: D, 4: D, 5: W, 6: W }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gosho-minami',
    cuisine: 'Kappo izakaya of seasonal fish bought at the market each morning: sashimi, grilled and simmered fish, à la carte or an omakase course (official site) · bonito tataki with the house ponzu and fresh-sliced garlic; tempura of spring vegetables or swordfish; clay-pot rice, with leftovers made into onigiri to take home (May 2025) · fatty kanpachi; wakaba-ni; lotus-root dumpling (March 2025) · a broad sake list; fresh-tomato sour with ponzu (2026 reviews)',
    website: SITE, gmaps: gm('御所南 金八'), menu_url: SITE,
    notes: "[Kappo izakaya · Gosho-minami, the morning’s fish] An eight-seat wooden counter where the owner serves fish chosen at market that morning — sashimi, bonito tataki with house ponzu, tempura, clay-pot rice — à la carte or as an omakase course. Moved here from Nishikyo in 2024. Closed Wednesday.",
    chef_bio: { chef_name: null, roles: ['Owner-chef (not named)'], origin: null,
      background: 'The owner ran お酒とごはんの家 金八 in Nishikyo for many years before moving and reopening as 御所南 金八 in October 2024; the owner chooses the fish at market each morning and fillets it in-house (official site; Tabelog). Reviewers (2025–2026) praise the chef’s warm, gentle manner.',
      philosophy: 'Uncompromising freshness and quality: only the morning’s market fish (official site).',
      specialty: 'Sashimi; bonito tataki with house ponzu.',
      anecdotes: [
        { text: 'A May 2025 return visitor’s leftover clay-pot rice was made into onigiri to take home.', source: R + 'B506169030/' },
        { text: 'A July 2026 group celebrated a Kyoto business trip and loved the fresh-tomato sour with a hint of ponzu.', source: R + 'B531096081/' },
      ],
      japanese_sources_summary: '公式サイト: 京都・御所南の和食・割烹居酒屋、旬の魚料理 御所南 金八、毎朝厳選して仕入れる旬の魚介、お造り・焼き物・煮物、気軽に楽しめる割烹居酒屋、おまかせコース、長年西京区で営んだ「お酒とごはんの家 金八」から移転リニューアルオープン、店主が市場で仕入れて丁寧に捌く、2026年7月から土日のみランチ11:30〜14:00 (L.O.アラカルト13:30、コース12:30)。食べログ: 御所南 金八、日本料理・海鮮、京都市中京区御幸町通押小路上る山本町413 メゾン・ド・フルール御幸町1F、市役所前から徒歩4分、月・火・木・金・祝日 17:00〜22:00、土日 11:30〜14:00・17:00〜22:00、水曜と不定休、カード可、電子マネー・QR決済不可、カウンター8席、貸切9名まで、禁煙、2024年10月11日オープン。口コミ (2025〜2026年、英語): 店主の温かい人柄、豊富なアラカルト、自家製ポン酢のかつおのたたき、春野菜とめかじきの天ぷら、土鍋ご飯の残りをおにぎりに、脂ののったかんぱち、若葉煮、日本酒が豊富、トマトサワー。',
      confidence: 'medium', sources: [SITE, TB, R + 'B500537340/', R + 'B506169030/', R + 'B525046952/', R + 'B531096081/'] },
    cultural_comfort: { level: 'japanese', note: 'Eight seats; book ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区御幸町通押小路上る山本町413 メゾン・ド・フルール御幸町 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (notices through September 2026) and Tabelog; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.012382, 135.766676); cross-checked: GSI 京都府京都市中京区山本町413番地 (lot) 57m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [SITE],
    price_note: 'No published prices; reviews report about ¥8,000–15,000 a head at dinner.', last_checked: TODAY, items: [
      it('お造り', '', 'Sashimi of the day', '', 'À la carte', 'ask', 'no', '', 'otsukuri'),
      it('', '', 'Bonito tataki with house ponzu', '', 'À la carte', 'ask', 'no', '', 'tataki'),
      it('おまかせコース', '', 'Omakase course', '', 'Courses', 'ask', 'no', '', 'omakase'),
    ] }, {
    cuisine: '毎朝市場で仕入れる旬の魚の割烹居酒屋。お造り、焼き物、煮物をアラカルトかおまかせコースで (公式サイト)・自家製ポン酢と目の前で切るにんにくのかつおのたたき、春野菜やめかじきの天ぷら、土鍋ご飯の残りはおにぎりにして持ち帰り (2025年5月)・脂ののったかんぱち、若葉煮、れんこんの団子 (2025年3月)・日本酒が豊富、ポン酢がほのかに香るトマトサワー (2026年の口コミ)',
    neighborhood: '御所南',
    gf_detail: '要確認。お造り、焼き魚や煮魚、天ぷら、自家製ポン酢。グルテンの情報は公開されていない (公式サイト、口コミ)。',
    vegan_detail: 'ヴィーガン不可。旬の魚の割烹 (公式サイト)。',
    notes: '[割烹居酒屋・御所南、朝の市場の魚] 木のカウンター8席で、店主がその朝仕入れた魚を。お造り、自家製ポン酢のかつおのたたき、天ぷら、土鍋ご飯をアラカルトかおまかせコースで。2024年に西京区から移転。水曜休み。',
  });
}

// ================================================================ 相撲茶屋いころ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26001363/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.ikoro.jp/';
  const H = day(['11:00', '14:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_sumo_chaya_ikoro', name: '相撲茶屋いころ (Sumo Chaya Ikoro)', category: 'OMNI',
    lat: 35.00447539787628, lng: 135.779925310343, cuisine_type: 'chanko',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Chanko-nabe in a soy-based soppu broth with chicken meatballs and mochi-fu, finished with udon, ramen or rice porridge; ask for a wheat-free finish and broth (official site; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken-based chanko with chicken meatballs (official site).',
    hours_raw: '11:00–14:00 and 17:00–22:00 (last order 21:30) (official site); Tabelog lists 11:00–22:00 daily, open all year. Book ahead in winter (reviews). Cards (VISA) and e-money (Tabelog). 150 seats with private rooms, for parties of 30 seated (Tabelog). Smoking room (Tabelog). Inside Maruyama Park, about 9 minutes from Keihan Gion-Shijo station (official site). Chanko sets are also sent nationwide (official site).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Maruyama Park',
    cuisine: 'Sumo-style chanko-nabe in a soy-based soppu broth, with farm-direct Kyoto vegetables, a secret-recipe chicken mince, Kyoto tofu and mochi-fu, served in wrestler-sized portions (official site) · chanko set with chicken and seafood, sweet-shrimp sashimi, karaage and udon to finish (January 2026) · a lunch mini-chanko course; a garlicky soy-milk hot pot (2021–2022 reviews) · about ¥7,500 a head with drinks (January 2026)',
    website: SITE, gmaps: gm('相撲茶屋いころ 円山公園'), menu_url: SITE,
    notes: "[Chanko-nabe · Maruyama Park, a sumo house for 56 years] A big, friendly chanko house in Maruyama Park, cooking from a former Tokitsukaze-stable wrestler’s recipe: soy-based broth, famous chicken meatballs, Kyoto vegetables and tofu, in wrestler-sized portions. Signed photos and a wrestler’s giant jeans on the walls.",
    chef_bio: { chef_name: null, roles: ['Owner (not named)'], origin: null,
      background: 'Founded in Gion 56 years ago, cooking chanko from the recipe of a former wrestler of the Tokitsukaze stable (official site). Reviewers note signed photos of wrestlers and, in January 2026, a wrestler’s jeans big enough for two adults.',
      philosophy: 'Portions to satisfy a sumo wrestler (official site).',
      specialty: 'Chanko-nabe with chicken meatballs.',
      anecdotes: [
        { text: 'A January 2026 group got seasonal green onions on the house and admired a wrestler’s jeans that would fit two adults.', source: R + 'B509814089/' },
        { text: 'A March 2021 lunch guest left with a ranking sheet from the spring sumo tournament.', source: R + 'B436030707/' },
      ],
      japanese_sources_summary: '公式サイト: ちゃんこ鍋 祇園・相撲部屋いころ、京都市東山区祇園町北 (円山公園内)、京阪四条駅より徒歩9分、11:00〜14:00・17:00〜22:00 (L.O.21:30)、祇園で創業56年、時津風部屋の元力士・沢光関から秘伝の味を受け継いだ本格派、農家直送の京野菜や旬の素材、特製の出汁、秘伝のミンチ、京豆腐・京餅麩、力士が満足できる分量、醤油ベースの特製ソップ出汁、鶏つみれ、ちゃんこ鍋セットを全国に配送。食べログ: 相撲茶屋いころ、ちゃんこ鍋・居酒屋・豆腐料理、京都市東山区祇園町北側350、毎日11:00〜22:00 (L.O.21:45)、年中無休、サービス料なし、カード (VISA)・電子マネー可、150席、個室、喫煙室あり。口コミ (2011〜2026年、英語): つみれが絶品、ねぎしゃぶ、締めはうどん・ラーメン・雑炊、ランチのミニちゃんこコース、豆乳鍋、力士のサイン写真、力士のジーンズ、季節のねぎのサービス、飲み物込みで7,500円ほど、予約は必須。',
      confidence: 'medium', sources: [SITE, TB, R + 'B436030707/', R + 'B450844092/', R + 'B509814089/', R + 'B520290370/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead in winter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区祇園町北側350',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (online orders) and Tabelog; reviews dated through January 2026.' },
    pin_source: `Tabelog ${TB} (35.004475, 135.779925); GSI resolves 祇園町北側350 only to the town (202m; inside Maruyama Park) — marked approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [SITE, R + 'B509814089/'],
    price_note: 'No published dine-in prices; about ¥7,500 a head with drinks (January 2026).', last_checked: TODAY, items: [
      it('ちゃんこ鍋', '', 'Chanko-nabe (soy-based soppu broth, chicken meatballs)', '', 'Hot pot', 'ask', 'no', '', 'chanko'),
      it('', '', 'Lunch mini-chanko course', '', 'Lunch', 'ask', 'no', '', 'lunch'),
    ] }, {
    cuisine: '醤油ベースのソップ出汁の力士のちゃんこ鍋。農家直送の京野菜、秘伝の鶏ミンチ、京豆腐や餅麩を力士が満足する量で (公式サイト)・鶏と魚介のちゃんこに甘えびのお造り、唐揚げ、締めのうどんのセット (2026年1月)・ランチのミニちゃんこコース、にんにくの効いた豆乳鍋 (2021〜2022年の口コミ)・飲み物込みで1人7,500円ほど (2026年1月)',
    neighborhood: '円山公園',
    gf_detail: '要確認。醤油ベースのソップ出汁に鶏つみれと餅麩、締めはうどん・ラーメン・雑炊。小麦を使わない締めや出汁を確認して (公式サイト、口コミ)。',
    vegan_detail: 'ヴィーガン不可。鶏ベースのちゃんこと鶏つみれ (公式サイト)。',
    notes: '[ちゃんこ鍋・円山公園、創業56年の相撲茶屋] 時津風部屋の元力士の味を受け継ぐ円山公園の大きなちゃんこ屋。醤油ベースの出汁、名物の鶏つみれ、京野菜と豆腐を力士並みの量で。力士のサイン写真や大きなジーンズも。',
  });
}

// ================================================================ きょうの晩ごはん 樹
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26017029/'; const R = TB + 'dtlrvwlst/';
  const A = day(['11:30', '14:00'], ['17:00', '24:00']), S = day(['17:00', '24:00']);
  put({
    id: 'kyoto_kyonobangohan_itsuki', name: 'きょうの晩ごはん 樹 (Kyo no Bangohan Itsuki)', category: 'OMNI',
    lat: 35.010051, lng: 135.761223, cuisine_type: 'obanzai',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Grilled fish, karaage, tonkatsu and chicken katsu, obanzai and miso soup; no gluten information is published (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat or fish set meals; obanzai likely use dashi (reviews).',
    hours_raw: 'Lunch Monday–Friday 11:30–14:00 (last order 13:30); dinner Monday–Saturday 17:00–24:00 (last food order 23:00, drinks 23:30); closed Sunday (Tabelog). No table charge (Tabelog). Cards and e-money; no QR (Tabelog). 30 seats at tables and a counter; private hire for 20 (Tabelog). Non-smoking (Tabelog). Lunch fills up by noon (January 2026). Opened 4 November 2010 (Tabelog).',
    hours: { 0: A, 1: A, 2: A, 3: A, 4: A, 5: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Karasuma-Oike',
    cuisine: 'Obanzai izakaya by night; at lunch a meat or a fish set, ¥1,100–1,200, with three obanzai and a hearty vegetable miso soup — e.g. grilled saba or sawara, karaage, ginger pork, pork shabu (2025–2026 reviews) · homemade seasonal side dishes, some with wild vegetables (July 2025) · relaxed evening drinks over obanzai (January 2026)',
    website: null, gmaps: gm('きょうの晩ごはん 樹'), menu_url: TB,
    notes: "[Obanzai izakaya · Karasuma-Oike, ¥1,100 lunches] A friendly neighbourhood spot: at lunch just two sets, meat or fish, with three homemade obanzai and a big bowl of vegetable miso soup; at night a relaxed obanzai izakaya until midnight. Lunch fills fast. Closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Owner (not named)'], origin: null,
      background: 'Opened in November 2010 (Tabelog). Reviewers (2022–2026) describe a friendly owner, a lunch board with one meat and one fish set, and homemade seasonal obanzai.',
      philosophy: null,
      specialty: 'Lunch sets with obanzai and miso soup.',
      anecdotes: [
        { text: 'A January 2026 group arrived before noon; by noon every seat was taken.', source: R + 'B520521425/' },
        { text: 'A January 2026 evening visitor felt the place was exactly the casual obanzai bar long searched for in Kyoto.', source: R + 'B521504300/' },
      ],
      japanese_sources_summary: '食べログ: きょうの晩ごはん 樹、居酒屋、京都市中京区笹屋町446-5 ツインナガセ1F、月〜金 11:30〜14:00 (L.O.13:30)・17:00〜24:00、土 17:00〜24:00 (料理L.O.23:00、ドリンクL.O.23:30)、日曜定休、チャージなし、カード・電子マネー可、QR決済不可、30席、貸切20名まで、禁煙、2010年11月4日オープン。口コミ (2022〜2026年、英語): ランチは肉か魚の2種で1,100〜1,200円、おばんざい3種、具だくさんの味噌汁、塩鯖、さわら、唐揚げ、しょうが焼き、豚しゃぶ、手作りの季節のおかず、気さくな店主、昼はすぐ満席、夜はおばんざいでゆっくり。',
      confidence: 'low', sources: [TB, R + 'B505933283/', R + 'B508100329/', R + 'B509664856/', R + 'B520521425/', R + 'B521504300/', R + 'B530971399/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order from the lunch board.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区笹屋町446-5 ツインナガセ 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB} (35.010051, 135.761179), offset ~4m to clear kyoto_075_shokudo (5.3m); cross-checked: GSI 京都府京都市中京区笹屋町446番地 (lot) 31m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B520521425/', R + 'B530971399/'],
    price_note: 'Lunch prices from January and June 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Meat lunch set with obanzai and miso soup', '¥1,100', 'Lunch', 'ask', 'no', '', 'niku'),
      it('', '', 'Fish lunch set (e.g. grilled sawara)', '¥1,200', 'Lunch', 'ask', 'no', 'June 2026.', 'sakana'),
    ] }, {
    cuisine: '夜はおばんざいの居酒屋。昼は肉か魚の定食1,100〜1,200円、おばんざい3種と具だくさんの味噌汁付き、塩鯖やさわら、唐揚げ、しょうが焼き、豚しゃぶなど (2025〜2026年の口コミ)・山菜も使った手作りの季節のおかず (2025年7月)・夜はおばんざいでゆっくり一杯 (2026年1月)',
    neighborhood: '烏丸御池',
    gf_detail: '要確認。焼き魚、唐揚げ、とんかつやチキンカツ、おばんざい、味噌汁。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: 'ヴィーガン不可。肉か魚の定食、おばんざいも出汁を使うとみられる (口コミ)。',
    notes: '[おばんざい居酒屋・烏丸御池、1,100円のランチ] 気さくな町の店。昼は肉か魚の2種だけ、手作りのおばんざい3種と具だくさんの味噌汁付き。夜は深夜までおばんざいの居酒屋。昼はすぐ満席。日曜休み。',
  });
}

// ================================================================ 焼肉 はやし 四条店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26003595/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://yakiniku-hayashi.net/'; const MENU = SITE + 'mazeyaki/';
  const A = day(['17:00', '22:00']), B = day(['17:00', '22:30']);
  put({
    id: 'kyoto_yakiniku_hayashi_shijo', name: '焼肉 はやし 四条店 (Yakiniku Hayashi Shijo)', category: 'OMNI',
    lat: 35.00243455787054, lng: 135.75784659033783, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: every order is mixed in a miso-based secret tare before grilling (official menu; July 2026).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: horumon and beef yakiniku (official menu).',
    hours_raw: '17:00–22:00 (last order 21:30) Sunday–Thursday; to 22:30 (last order 22:00) Friday, Saturday and holiday eves; closed irregularly (Tabelog). The official site gives 17:00–22:30. Bookings by phone only, not online (official site). Cards (VISA, Master) and PayPay (Tabelog). 40 seats; private hire for 20–50 (Tabelog). Smoking allowed at the tables (Tabelog; July 2026). On Ayanokoji west of Muromachi, 3 minutes from Karasuma station Exit 26 or Shijo station Exit 4 (official site).',
    hours: { 0: A, 1: A, 2: A, 3: A, 4: B, 5: B, 6: A }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shijo-Karasuma',
    cuisine: 'Yakiniku in the house “maze-yaki” style since 1950: lean meat and horumon all mixed in a miso-based secret tare and grilled together (official site; 2026 reviews) · red-and-white set ¥3,400; cuts ¥850–1,300, e.g. premium tongue with leek ¥1,300, wagyu tail ¥1,300, harami ¥1,000, tetchan ¥900 (official menu, before tax) · wagyu yukhoe ¥1,300; kimchi (official menu) · tail soup and pig’s trotters (July 2026) · meat, vegetables and Kujo leek mostly from Kyoto (official site)',
    website: SITE, gmaps: gm('焼肉はやし 四条店'), menu_url: MENU,
    notes: "[Yakiniku · Shijo-Karasuma, the mixed-grill horumon house] A packed local favourite where every cut — lean beef and horumon alike — comes tossed in a rich miso tare to grill together, the way Hayashi has done since 1950. Red-and-white set ¥3,400. Book by phone.",
    chef_bio: { chef_name: null, roles: ['Staff (not named)'], origin: null,
      background: 'Yakiniku since 1950 (official site); the brand has four shops — Shijo, Toji, Kujo-Karasuma and Jujo (official site), and July 2026 reviewers call Jujo the main shop. All orders are mixed together before serving, so tare, juices and fat combine on the grill (official menu).',
      philosophy: 'Mix lean meat and horumon in balance, so tare, juices and fat build flavour together (official menu).',
      specialty: 'Red-and-white maze-yaki set.',
      anecdotes: [
        { text: 'A March 2026 family booking for eight got a friendly call about seating, and the kitchen offered milder dishes for the children.', source: R + 'B523497924/' },
        { text: 'A June 2026 returnee after six years found the mixed set now topping the menu.', source: R + 'B529130850/' },
      ],
      japanese_sources_summary: '公式サイト: 焼肉はやし四条店、赤身と白身を豪快に炙る「混ぜ焼き」専門店、1950年創業以来焼肉一筋、京都市下京区綾小路通室町西入善長寺町152、阪急烏丸駅26番出口・地下鉄四条駅4番出口から徒歩3分、17:00〜22:30 (L.O.22:00)、不定休、ネット予約不可、姉妹店は東寺店・九条烏丸店・十条店。メニュー (税別): はやしの赤白セット3,400円、上タン塩1,300円、和牛テール塩焼1,300円、上カルビ1,300円、カルビ・ハラミ1,000円、テッチャン900円、ホルモンミックス850円、特撰和牛ユッケ1,300円、キムチ、注文した肉はすべて混ぜて提供、肉・野菜・九条ネギは主に京都府産。食べログ: 焼肉・ホルモン、日〜木 17:00〜22:00、金土・祝前日 17:00〜22:30、不定休、カード (VISA、Master)・PayPay、40席、喫煙可。口コミ (2026年、英語): 赤白セット、味噌ベースのたれ、タン塩、テールスープ、豚足、本店は十条、テーブルで喫煙可。',
      confidence: 'medium', sources: [SITE, MENU, SITE + '%e6%8e%a1%e7%94%a8%e6%83%85%e5%a0%b1/', TB, R + 'B496267063/', R + 'B523497924/', R + 'B527701294/', R + 'B529130850/', R + 'B532211736/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Phone bookings only; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区綾小路通室町西入善長寺町152',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog; reviews dated through July 2026. Four-shop local brand (official site), drafted as a local group.' },
    pin_source: `Tabelog ${TB} (35.002435, 135.757847); cross-checked: GSI 京都府京都市下京区善長寺町152番地 (lot) 43m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU],
    price_note: 'Official menu, before tax.', last_checked: TODAY, items: [
      it('はやしの赤白セット', '', 'Red-and-white mixed set (lean meat and horumon)', '¥3,400', 'Yakiniku', 'no', 'no', 'Before tax.', 'akashiro'),
      it('上タン塩', '', 'Premium salted tongue with leek', '¥1,300', 'Yakiniku', 'ask', 'no', 'Before tax.', 'jotan'),
      it('和牛テール塩焼', '', 'Wagyu tail, salt-grilled', '¥1,300', 'Yakiniku', 'ask', 'no', 'Before tax.', 'tail'),
      it('ハラミ', '', 'Harami (skirt)', '¥1,000', 'Yakiniku', 'no', 'no', 'Before tax.', 'harami'),
      it('特撰和牛ユッケ', '', 'Wagyu yukhoe', '¥1,300', 'Sides', 'ask', 'no', 'Before tax.', 'yukke'),
    ] }, {
    cuisine: '1950年からの「混ぜ焼き」の焼肉。赤身もホルモンも味噌ベースの秘伝のたれで混ぜて一緒に焼く (公式サイト、2026年の口コミ)・赤白セット3,400円、上タン塩1,300円、和牛テール1,300円、ハラミ1,000円、テッチャン900円など (公式メニュー、税別)・特撰和牛ユッケ1,300円、キムチ (公式メニュー)・テールスープ、豚足 (2026年7月)・肉、野菜、九条ネギは主に京都府産 (公式サイト)',
    neighborhood: '四条烏丸',
    gf_detail: 'グルテンフリー不可。注文した肉はすべて味噌ベースの秘伝のたれで混ぜて提供 (公式メニュー、2026年7月)。',
    vegan_detail: 'ヴィーガン不可。ホルモンと牛肉の焼肉 (公式メニュー)。',
    notes: '[焼肉・四条烏丸、混ぜ焼きのホルモン] いつも地元客でいっぱいの店。赤身もホルモンも濃い味噌だれで混ぜて一緒に焼く、1950年からのはやしの流儀。赤白セット3,400円。予約は電話で。',
  });
}

// ================================================================ 花水庵
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26017617/'; const R = TB + 'dtlrvwlst/';
  const H = day(['07:00', '10:00'], ['11:30', '14:00'], ['17:30', '21:00']);
  put({
    id: 'kyoto_kasuian_chionin', name: '花水庵 (Kasui-an)', category: 'OMNI',
    lat: 35.00457010787636, lng: 135.78037534034365, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Yudofu, yuba, shojin tempura, cha-soba and udon; no gluten information is published (reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Shojin tempura is made entirely of vegetables and yudofu and yuba sets are offered, but ask about dashi and the rest of each set (2026 reviews).',
    hours_raw: 'Breakfast 7:00–10:00, lunch 11:30–14:00, dinner 17:30–21:00, daily (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money (Tabelog). 80 seats with semi-private rooms (Tabelog). Non-smoking, with a smoking space (Tabelog). In the basement of Chion-in’s Wajun Kaikan, in front of Chion-in; open to non-guests (Tabelog; 2025–2026 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Chion-in',
    cuisine: 'Kyoto meals in Chion-in’s Wajun Kaikan: breakfast with white rice or rice porridge and plenty of pickles (September 2025) · yuba rice bowl with all-vegetable shojin tempura ¥2,100 (January 2026) · yudofu set; cold udon and tempura lunch (2026 reviews) · shojin cuisine (June 2026) · kaiseki in private rooms (November 2025)',
    website: null, gmaps: gm('花水庵 知恩院 和順会館'), menu_url: TB,
    notes: "[Shojin and Kyoto cooking · Chion-in, a temple hall’s restaurant] A calm, roomy restaurant under Chion-in’s Wajun Kaikan serving breakfast, a ¥2,100 yuba bowl with all-vegetable shojin tempura, yudofu and kaiseki to anyone. A quiet lunch refuge near Gion and Maruyama Park.",
    chef_bio: { chef_name: null, roles: ['Staff (not named)'], origin: null,
      background: 'The restaurant of Wajun Kaikan at Chion-in, the head temple of Jodo-shu, serving breakfast, lunch and dinner to temple guests and visitors alike (2021–2026 reviews). Tabelog links it to the Kyoto company Kurochiku, but that page no longer exists (checked 2026-11-08).',
      philosophy: null,
      specialty: 'Yuba rice bowl; shojin tempura.',
      anecdotes: [
        { text: 'A September 2025 diner came to breakfast after an early-morning stint at the temple and tried both the rice and the porridge.', source: R + 'B513067651/' },
        { text: 'A September 2026 group of six found a holiday lunch table here when Gion was full.', source: R + 'B535943217/' },
      ],
      japanese_sources_summary: '食べログ: 花水庵、日本料理、京都市東山区林下町400 知恩院 和順会館B1F、毎日 7:00〜10:00・11:30〜14:00・17:30〜21:00、カード可、電子マネー不可、80席、半個室、禁煙 (喫煙スペースあり)、公式サイトとしてくろちくのページ (現在は存在しない)。口コミ (2021〜2026年、英語): 知恩院の和順会館の食事処、朝食は白ご飯かお粥と漬物、湯葉丼と精進天ぷらのセット2,100円、野菜だけの精進天ぷら、湯豆腐の膳、冷たいうどんと天ぷらのランチ、個室の会席、落ち着いた空間、祇園近くで6人でも入れた。',
      confidence: 'low', sources: [TB, R + 'B513067651/', R + 'B517092139/', R + 'B521734300/', R + 'B531197320/', R + 'B532607172/', R + 'B535943217/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Open to non-guests.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区林下町400 知恩院 和順会館 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.004570, 135.780375); GSI 京都府京都市東山区林下町400番地 is the large Chion-in lot (203m) — marked approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B521734300/'],
    price_note: 'Price from a January 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Yuba rice bowl and shojin tempura set', '¥2,100', 'Lunch', 'ask', 'ask', 'Tempura is all vegetables.', 'yubadon'),
      it('', '', 'Yudofu set', '', 'Lunch', 'ask', 'ask', '', 'yudofu'),
      it('', '', 'Breakfast (rice or porridge, pickles)', '', 'Breakfast', 'ask', 'ask', '', 'breakfast'),
    ] }, {
    cuisine: '知恩院の和順会館の京の食事。朝は白ご飯かお粥とたっぷりの漬物 (2025年9月)・湯葉丼と野菜だけの精進天ぷらのセット2,100円 (2026年1月)・湯豆腐の膳、冷たいうどんと天ぷらのランチ (2026年の口コミ)・精進料理 (2026年6月)・個室の会席 (2025年11月)',
    neighborhood: '知恩院',
    gf_detail: '要確認。湯豆腐、湯葉、精進天ぷら、茶そば、うどん。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: '要確認。精進天ぷらは野菜だけ、湯豆腐や湯葉の膳もあるが、出汁や膳のほかの料理は確認を (2026年の口コミ)。',
    notes: '[精進・京料理・知恩院、お寺の会館の食事処] 知恩院の和順会館の地下、広く落ち着いた食事処。朝食、湯葉丼と野菜の精進天ぷら (2,100円)、湯豆腐、会席を誰でも。祇園や円山公園の近くで静かな昼に。',
  });
}

save();
