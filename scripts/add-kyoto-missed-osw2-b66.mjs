// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 66.
//   Queue run from the osw2 worktree, 2026-11-07. Rest tier, nearest-first (queue.mjs kyoto-missed next rest 2000, lane ids by distance).
//   Rest rule: at least one 2025–26 review and enough sourced detail.
//   - 白心堂 — a confectionery maker's head-office listing, not a place to eat (one shop of its own, at another address)
//   + やきとりの笑い屋 Yakitori no Waraiya (binchotan yakitori on Tomikoji south of Shijo, about 30 years)
//   - と 四条烏丸店 — large parent (THAN)
//   - 居酒屋BAR SIBA — no 2025–26 review
//   - 大衆食堂 てんぐ大ホール 京都四条通店 — chain
//   - 鮨しん 富小路 — same-concept second shop of 錦 鮨しん 本店 (in data)
//   + スタンドうみねこ コト Stand Umineko Koto (craft-beer stand of Derailleur Brew Works, Nishinari; in a townhouse near Shijo Karasuma)
//   - 京料理花咲 宮川町店 — same-concept second shop of 花咲 錦店 (in data)
//   + 炭火酒場 むらごん Sumibi Sakaba Muragon (charcoal yakitori, oden and teppan sobameshi off Ayanokoji; since 2023)
//   - Qoo — no reviews
//   + ぽんたこ 佐倉 Pontako Sakura (takoyaki and teppan dining bar in a Pontocho townhouse by Pontocho Park)
//   None of the four is in data/kyoto.json, hidden records included: grep by id, name and address. Brand names grepped in queue-status.jsonl: rulings
//   followed for THAN; none on the others.
//   Service charges: 笑い屋 ¥350 appetizer; ぽんたこ ¥300 appetizer (Tabelog).
//   Remarks about other diners kept only where several reviews agree.
//   Pins: Tabelog /en/ point, cross-checked with GSI only; ぽんたこ offset ~8 m off 京いざかや くぼ田 (same lot, 1 m); each now 9 m+ from every pin on main,
//   hidden records included.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-66');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26029485', '白心堂: the head-office and factory listing of a yatsuhashi maker (株式会社白心堂, founded 1926, about 70 staff; hakushindo.co.jp). Tabelog gives no hours; the reviews are of packaged nama-yatsuhashi bought elsewhere, and its one shop of its own (ビアンコ店) is at a different address. Not a place to eat; not drafted');
skip('26041815', 'と 四条烏丸店: a brand of a large restaurant parent — Tabelog links than.co.jp/brands (株式会社THAN, 26 brands, 60 shops); same ruling as accent and 和紋');
skip('26018817', '居酒屋BAR SIBA: no 2025–26 review — the latest of 11 Tabelog reviews are from November and December 2024');
skip('26037837', '大衆食堂 てんぐ大ホール 京都四条通店: a chain — our crawls hold てんぐ大ホール in Shinsaibashi and Ueno besides Kyoto');
skip('26044629', '鮨しん 富小路: a same-concept second shop of a brand in data — reviewers call it a sister of 錦 鮨しん 本店 (kyoto_nishiki_sushi_shin) with the same fish; skipped as with いも松 and 富之上');
skip('26043543', '京料理花咲 宮川町店: a same-concept second shop of a brand in data — Kyoto kaiseki like 花咲 錦店 (kyoto_hanasaki_nishiki); our crawl also holds 祇園 京料理 花咲');
skip('26044701', 'Qoo: no Tabelog reviews; not drafted');

// ================================================================ やきとりの笑い屋
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26004453/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://yakitorinowaraiya2026.com';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_yakitori_no_waraiya', name: 'やきとりの笑い屋 (Yakitori no Waraiya)', category: 'OMNI',
    lat: 35.00281426787256, lng: 135.76495585033672, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Yakitori with house salt or a secret tare, kara-age, horumon tempura, ramen to finish; no gluten information is published (Tabelog; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a yakitori izakaya. Organic and local vegetable dishes are on the menu — ask (Tabelog; March 2026).',
    hours_raw: '17:00–23:00 (food last order 22:30); closed Tuesday and 31 Dec–1 Jan (Tabelog). Reservations taken; good for groups (Tabelog). Cards and e-money accepted (Tabelog). ¥350 appetizer charge (Tabelog). 25 seats: 5 at the counter, 20 at tables; designated smoking area (Tabelog; 2023 reviews). On Tomikoji south of Shijo, in a house-style building off the main street, 5 min from Karasuma Stn (Tabelog; November 2024).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Tomikoji south of Shijo — 5 min from Karasuma Stn',
    cuisine: 'Yakitori grilled over binchotan for about 30 years, with house-blended salt and a secret tare; rare cuts of Kyoto Akadori and young chicken (Tabelog) · chef’s six-skewer assortment ¥1,500; horumon tempura ¥680; oden appetizer (February 2025) · course ¥4,000 with 90-minute all-you-can-drink ¥1,500 extra (November 2024) · organic and local vegetable dishes, "Shiawase" salad, potato salad, fried oysters, dashimaki, kara-age, ramen to finish (2024–2026)',
    website: SITE, gmaps: gm('やきとりの笑い屋 富小路'), menu_url: TB,
    notes: "[Yakitori · Tomikoji by Shijo, binchotan and good cheer] A friendly yakitori house a short walk from the Shijo crossing, grilling Kyoto Akadori over binchotan for about 30 years. Six chef’s-choice skewers ¥1,500, plus unusually good vegetable dishes; courses from ¥4,000 with an all-you-can-drink option. A lively manager at the counter; closed Tuesday.",
    chef_bio: { chef_name: null, roles: ['Owner and manager not named'], origin: null,
      background: 'The shop says it has grilled yakitori over binchotan for about 30 years, using rare cuts of Kyoto Akadori, with organic and local vegetables (Tabelog). Reviewers (2024–2026) describe a friendly owner and an energetic manager who chats in Kansai dialect at the counter.',
      philosophy: null,
      specialty: 'Binchotan yakitori with house salt or tare.',
      anecdotes: [
        { text: 'A June 2025 diner, asked to move from a table to the counter for a group, was given complimentary drinks by the owner.', source: R + 'B509168899/' },
        { text: 'A March 2026 couple at the counter were chatted to in lively Kansai dialect by the manager, who recommended liver and shiso skewers.', source: R + 'B524834776/' },
        { text: 'An October 2026 regular calls it a friend’s restaurant, visited on every trip home to Kyoto.', source: R + 'B537042093/' },
      ],
      japanese_sources_summary: '食べログ: やきとりの笑い屋、居酒屋・焼鳥、京都市下京区富小路通四条下ル徳正寺42、烏丸駅から徒歩5分、17:00〜23:00 (L.O.フード22:30)、火曜定休、12月31日・1月1日休み、予約可、カード・電子マネー可、お通し350円 (税込)、25席 (カウンター5、テーブル20)、分煙、創業約30年、備長炭でじっくり焼く、京赤地鶏や若鶏の希少部位、独自ブレンドの塩と秘伝のタレ、有機野菜や地元の食材、団体も。口コミ (2023〜2026年、英語): おまかせ6本盛り1,500円、ホルモン天ぷら680円、お通しにおでん、4,000円のコースと90分飲み放題1,500円、しあわせサラダ、ポテトサラダ、カキフライ、だし巻、唐揚げ、締めのラーメン、元気な店長と関西弁、気さくな店主。',
      confidence: 'low', sources: [TB, SITE, R + 'B464584522/', R + 'B468708099/', R + 'B494987742/', R + 'B495956081/', R + 'B500699659/', R + 'B509168899/', R + 'B515636505/', R + 'B524834776/', R + 'B526343807/', R + 'B530971739/', R + 'B537042093/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cards accepted; friendly counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区富小路通四条下ル徳正寺42',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.002814, 135.764956); cross-checked: GSI 京都府京都市下京区徳正寺町42番地 (lot) 27m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B500699659/', R + 'B494987742/'],
    price_note: 'Prices from November 2024 and February 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Chef’s six-skewer assortment', '¥1,500', 'Yakitori', 'ask', 'no', 'February 2025.', 'omakase6'),
      it('', '', 'Horumon tempura', '¥680', 'Dishes', 'no', 'no', 'February 2025.', 'horumon_ten'),
      it('', '', 'Yakitori course', '¥4,000', 'Courses', 'ask', 'no', '90-min all-you-can-drink ¥1,500 extra (November 2024).', 'course'),
    ] }, {
    cuisine: '約30年、備長炭で焼く焼鳥。独自ブレンドの塩と秘伝のタレ、京赤地鶏や若鶏の希少部位 (食べログ)・おまかせ6本盛り1,500円、ホルモン天ぷら680円、お通しにおでん (2025年2月)・4,000円のコース、90分飲み放題は1,500円追加 (2024年11月)・有機や地元の野菜の料理、しあわせサラダ、ポテトサラダ、カキフライ、だし巻、唐揚げ、締めのラーメン (2024〜2026年)',
    neighborhood: '富小路の四条下ル。烏丸駅から徒歩5分',
    gf_detail: '要確認。塩や秘伝のタレの焼鳥、唐揚げ、ホルモン天ぷら、締めのラーメン。グルテンの情報は公開されていない (食べログ、口コミ)。',
    vegan_detail: 'ヴィーガン不可。焼鳥の居酒屋。有機や地元の野菜の料理はある、要確認 (食べログ、2026年3月)。',
    notes: '[焼鳥・富小路の四条下ル、備長炭と笑顔] 四条の交差点から少し歩く気さくな焼鳥店。約30年、京赤地鶏を備長炭で。おまかせ6本は1,500円、野菜の料理も評判。コースは4,000円から、飲み放題も。カウンターには元気な店長。火曜休み。',
  });
}

// ================================================================ スタンドうみねこ コト
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26034423/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://standumineko-koto.shopinfo.jp/';
  const WD = day(['16:00', '23:00']), WE = day(['13:00', '23:00']);
  put({
    id: 'kyoto_stand_umineko_koto', name: 'スタンドうみねこ コト (Stand Umineko Koto)', category: 'OMNI',
    lat: 35.00628653706539, lng: 135.7662597792091, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: a craft-beer bar; snacks include spring rolls and kara-age (reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Snacks include three kinds of potato salad, spring rolls and octopus with avocado (2026 reviews).',
    hours_raw: 'Monday–Friday 16:00–23:00; Saturday, Sunday and holidays 13:00–23:00; food last order around 21:30; closing days not fixed (Tabelog; March 2026). Cards, e-money and QR accepted (Tabelog). A standing counter for about 10, plus one table at the back; non-smoking (Tabelog; April 2026). Run by Derailleur Brew Works of Nishinari, Osaka, in a renovated townhouse (2026 reviews). Near Shijo Karasuma (Tabelog address; June 2026).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Near Shijo Karasuma',
    cuisine: 'Craft-beer stand of an Osaka brewery, with its own Nishinari beers and guest taps — reviewers count from about 20 to 35 — plus a fridge of cans (2026 reviews) · S (260 ml) ¥900, M (330 ml) ¥1,200, L (473 ml) ¥1,700 (October 2026) · e.g. Nishinari Riot Ale, West Coast IPA, guest porters (2026) · snacks: three flavours of potato salad, smoked mentaiko, spring rolls, kara-age, octopus and avocado (2026)',
    website: SITE, gmaps: gm('スタンドうみねこ コト 京都'), menu_url: TB,
    notes: "[Craft beer · near Shijo Karasuma, an Osaka brewery's stand] A standing craft-beer bar in a renovated townhouse, run by Nishinari's Derailleur Brew Works: its own Riot Ale and guest taps by the 260 ml glass (¥900), plus cans. Clever snacks — three kinds of potato salad, smoked mentaiko. Opens at 13:00 at weekends.",
    chef_bio: { chef_name: null, roles: ['Brewery-run; staff not named'], origin: null,
      background: 'Reviewers (2026) describe a stand run directly by Derailleur Brew Works, a brewery in Nishinari, Osaka, pouring its own beers and guest beers in a renovated Kyoto townhouse; staff explain the difference between house and guest beers.',
      philosophy: null,
      specialty: 'Nishinari craft beer on tap.',
      anecdotes: [
        { text: 'A March 2026 second-time visitor made the 21:30 food order just in time for the ethnic potato salad.', source: R + 'B524742342/' },
        { text: 'An April 2026 traveller changing trains in Kyoto stopped for two small glasses and octopus with avocado.', source: R + 'B526145134/' },
        { text: 'An October 2026 regular noted the prices had risen since the last visit.', source: R + 'B537926567/' },
      ],
      japanese_sources_summary: '食べログ: スタンドうみねこ コト、ビアバー、京都市中京区蛸屋町160-3、月〜金 16:00〜23:00、土日祝 13:00〜23:00、不定休、カード・電子マネー・QR可、立ち飲みカウンター10人ほど、禁煙。口コミ (2026年、英語): 大阪・西成の Derailleur Brew Works の直営、町家を改装、自社と他社のタップ (20〜35)、缶も多い、S (260ml) 900円・M (330ml) 1,200円・L (473ml) 1,700円、西成ライオットエール、ウエストコーストIPA、ポーター、3種のポテトサラダ、燻製明太子、春巻き、唐揚げ、タコとアボカド、フードのL.O.は21:30ごろ、奥にテーブル1つ、値上がり。',
      confidence: 'low', sources: [TB, SITE, R + 'B524411928/', R + 'B524742342/', R + 'B525771728/', R + 'B525794895/', R + 'B526145134/', R + 'B526928608/', R + 'B527358274/', R + 'B530288011/', R + 'B531997274/', R + 'B537926567/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Standing bar; cards accepted; staff explain the beers.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区蛸屋町160-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated March–October 2026.' },
    pin_source: `Tabelog ${TB} (35.006287, 135.766260); cross-checked: GSI 京都府京都市中京区蛸屋町160番地 (lot) 22m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537926567/'],
    price_note: 'Glass prices from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Draught craft beer, S (260 ml)', '¥900', 'Beer', 'no', 'ask', '', 'beer_s'),
      it('', '', 'Draught craft beer, M (330 ml)', '¥1,200', 'Beer', 'no', 'ask', '', 'beer_m'),
      it('', '', 'Draught craft beer, L (473 ml)', '¥1,700', 'Beer', 'no', 'ask', '', 'beer_l'),
      it('', '', 'Potato salad (three flavours)', '', 'Snacks', 'ask', 'ask', '', 'potesala'),
    ] }, {
    cuisine: '大阪のブルワリーのクラフトビールスタンド。自社の西成ビールとゲストのタップ (口コミでは20〜35)、缶の冷蔵庫も (2026年の口コミ)・S (260ml) 900円、M (330ml) 1,200円、L (473ml) 1,700円 (2026年10月)・たとえば西成ライオットエール、ウエストコーストIPA、ゲストのポーター (2026年)・つまみ: 3種のポテトサラダ、燻製明太子、春巻き、唐揚げ、タコとアボカド (2026年)',
    neighborhood: '四条烏丸の近く (蛸屋町)',
    gf_detail: 'グルテンフリー不可。クラフトビールのバーで、つまみに春巻きや唐揚げ (口コミ)。',
    vegan_detail: '要確認。3種のポテトサラダ、春巻き、タコとアボカドなど (2026年の口コミ)。',
    notes: '[クラフトビール・四条烏丸の近く、大阪のブルワリーのスタンド] 西成の Derailleur Brew Works が営む、町家を改装した立ち飲みのクラフトビールバー。自社のライオットエールやゲストのタップを260mlで900円から、缶も。3種のポテトサラダや燻製明太子など工夫のあるつまみ。週末は13時から。',
  });
}

// ================================================================ 炭火酒場 むらごん
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26039937/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://kyoto-muragon.com/';
  const H = day(['18:00', '24:00']);
  put({
    id: 'kyoto_sumibi_sakaba_muragon', name: '炭火酒場 むらごん (Sumibi Sakaba Muragon)', category: 'OMNI',
    lat: 35.002055107873, lng: 135.76481038032915, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Charcoal yakitori, oden, sobameshi and yakisoba on the teppan, fried chicken; no gluten information is published (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a yakitori and chicken izakaya (Tabelog).',
    hours_raw: '18:00–24:00; closed Tuesday and one irregular day a month (Tabelog). Reservations by phone (October 2024). Cards accepted; no e-money or QR (Tabelog). 20 seats: a 7–8-seat counter downstairs and tables upstairs for groups; non-smoking (Tabelog; October 2025). On Tomikoji south of Ayanokoji (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Tomikoji south of Ayanokoji',
    cuisine: 'Charcoal yakitori izakaya opened August 2023 (Tabelog) · five-skewer set ¥1,200 (heart, liver, gizzard, bonjiri, breast); oden, grilled shiitake, ginkgo and the house fried chicken thigh ¥250 each (October 2023) · chicken sashimi and tataki, charcoal-grilled Toyoukeya abura-age, sobameshi and yakisoba on the teppan, tofu steak (2024–2026) · a wide choice of sake and awamori; tomato-vinegar shochu highball (2024–2026)',
    website: SITE, gmaps: gm('炭火酒場 むらごん'), menu_url: TB,
    notes: "[Yakitori · Tomikoji south of Shijo, charcoal and teppan] A small two-floor charcoal yakitori bar opened in 2023: skewers from about ¥250, chicken sashimi, grilled abura-age, and sobameshi sizzling on a teppan, with plenty of sake and awamori. Counter downstairs, tables upstairs; closed Tuesday; open to midnight.",
    chef_bio: { chef_name: null, roles: ['Owner (master) not named'], origin: null,
      background: 'Opened in August 2023 (Tabelog). Reviewers (2023–2026) describe a friendly owner-chef who loves food and talk, and an October 2025 reviewer says the owner previously managed another yakitori restaurant before going independent.',
      philosophy: null,
      specialty: 'Charcoal yakitori; teppan sobameshi.',
      anecdotes: [
        { text: 'A June 2025 visitor saw the congratulatory gift bags from the opening still on display, near the second anniversary.', source: R + 'B509393170/' },
        { text: 'A July 2024 regular ordered the chicken sashimi three times.', source: R + 'B489403131/' },
        { text: 'A July 2026 party was taken there by a classmate of the owner and toasted with Kanemitsu soda.', source: R + 'B532865972/' },
      ],
      japanese_sources_summary: '食べログ: 炭火酒場 むらごん、鶏料理・焼鳥・おでん、京都市下京区富小路綾小路下る塗師屋町92-2、火曜定休、月1回不定休、18:00〜24:00、カード可、電子マネー・QR不可、20席 (1階カウンター8、2階テーブル)、禁煙、2023年8月10日オープン。口コミ (2023〜2026年、英語): 串5本盛り1,200円 (ハツ、レバー、砂肝、ぼんじり、ささみ)、おでん・椎茸・銀杏・名物の唐揚げ250円、鶏刺し、鶏のたたき、とようけ屋の油揚げの炭火焼き、鉄板のそばめし、焼きそば、豆腐ステーキ、日本酒と泡盛、トマト酢の焼酎ハイボール、気さくな店主、2周年。',
      confidence: 'low', sources: [TB, SITE, R + 'B472958926/', R + 'B489403131/', R + 'B494531564/', R + 'B494793189/', R + 'B498990579/', R + 'B501614387/', R + 'B509393170/', R + 'B532865972/', R + 'B537255694/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cards accepted; counter downstairs.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区富小路綾小路下る塗師屋町92-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.002055, 135.764810); cross-checked: GSI 京都府京都市下京区塗師屋町92番地 (lot) 18m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B472958926/'],
    price_note: 'Prices from an October 2023 review; may have changed.', last_checked: TODAY, items: [
      it('', '', 'Five-skewer set (heart, liver, gizzard, bonjiri, breast)', '¥1,200', 'Yakitori', 'ask', 'no', '', 'kushi5'),
      it('', '', 'House fried chicken thigh', '¥250', 'Dishes', 'no', 'no', '', 'karaage'),
      it('', '', 'Oden, each', '¥250', 'Dishes', 'ask', 'ask', '', 'oden'),
      it('', '', 'Sobameshi on the teppan', '', 'Dishes', 'no', 'no', '', 'sobameshi'),
    ] }, {
    cuisine: '2023年8月開業の炭火焼鳥の酒場 (食べログ)・串5本盛り1,200円 (ハツ、レバー、砂肝、ぼんじり、ささみ)、おでん・椎茸・銀杏・名物の唐揚げは各250円 (2023年10月)・鶏刺しとたたき、とようけ屋の油揚げの炭火焼き、鉄板のそばめしと焼きそば、豆腐ステーキ (2024〜2026年)・日本酒と泡盛が豊富、トマト酢の焼酎ハイボール (2024〜2026年)',
    neighborhood: '富小路の綾小路下ル',
    gf_detail: '要確認。炭火の焼鳥、おでん、鉄板のそばめしと焼きそば、唐揚げ。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: 'ヴィーガン不可。焼鳥と鶏料理の居酒屋 (食べログ)。',
    notes: '[焼鳥・富小路の四条下ル、炭火と鉄板] 2023年開業の2階建ての小さな炭火焼鳥の店。串は250円ほどから、鶏刺し、油揚げの炭火焼き、鉄板で焼くそばめし、日本酒と泡盛も豊富。1階はカウンター、2階にテーブル。火曜休み、深夜0時まで。',
  });
}

// ================================================================ ぽんたこ 佐倉
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26019129/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_pontako_sakura', name: 'ぽんたこ 佐倉 (Pontako Sakura)', category: 'OMNI',
    lat: 35.006702, lng: 135.771194, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: wheat-batter takoyaki (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: octopus takoyaki, beef tendon, duck and meat tofu (reviews).',
    hours_raw: '17:00–23:00 (last order 22:30); closed Tuesday; hours as updated on 19 August 2026 (Tabelog). Reservations taken during opening hours (Tabelog). Cards, Suica-type e-money and PayPay accepted (Tabelog). ¥300 appetizer charge, even without alcohol (Tabelog; July 2023). 21 seats: a 7-seat counter downstairs; a private room for 6 and two tables upstairs; non-smoking (Tabelog). Takoyaki to take away from the front (2018–2026 reviews). In a renovated townhouse on Pontocho next to Pontocho Park, 5 min from Sanjo, Gion-Shijo or Kawaramachi Stn (Tabelog; January 2026).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Pontocho, by Pontocho Park near Sanjo — 5 min from Sanjo Stn',
    cuisine: 'Takoyaki and teppan dining bar in a Pontocho townhouse (Tabelog; reviews) · small, dashi-rich takoyaki in sets of 4 or 6 — sauce, dashi soy, salt or mayonnaise; double cheese, mentaiko, negitoro-topped (2023–2026) · beef-tendon takoyaki, 2 for ¥300 to take away (January 2026) · side dishes such as meat tofu, ponzu jelly and duck breast; wine and other drinks (2022–2024)',
    website: null, gmaps: gm('ぽんたこ 佐倉 先斗町'), menu_url: TB,
    notes: "[Takoyaki bar · Pontocho, by the park] A stylish takoyaki and teppan bar in a renovated townhouse by Pontocho Park: small, dashi-rich takoyaki by the four or six with sauce, dashi soy or Andean salt, and wine to match — or two beef-tendon takoyaki to go for ¥300. Counter downstairs, tables upstairs; closed Tuesday.",
    chef_bio: { chef_name: null, roles: ['Owner (master) not named'], origin: null,
      background: 'Reviewers (2018–2026) describe a takoyaki shop in a renovated Pontocho townhouse with dim lighting and jazz, run by a talkative master, selling takeaway takoyaki at the front and pairing creative takoyaki with wine inside.',
      philosophy: null,
      specialty: 'Dashi-rich takoyaki.',
      anecdotes: [
        { text: 'A September 2022 guest took the master’s advice to add special mayonnaise and Andean pink salt.', source: R + 'B453799406/' },
        { text: 'A January 2026 passer-by on the way to a gathering was drawn in by the smell and bought two beef-tendon takoyaki for ¥300.', source: R + 'B521141958/' },
        { text: 'A December 2023 diner had negitoro-topped takoyaki like gunkan sushi, with wine, as in an Italian course.', source: R + 'B476758892/' },
      ],
      japanese_sources_summary: '食べログ: ぽんたこ 佐倉、鉄板焼き・ダイニングバー、京都市中京区先斗町通若松町141-13、京阪祇園四条駅・阪急京都河原町駅・京阪三条駅から徒歩5分、17:00〜23:00 (L.O.22:30)、火曜定休 (2026年8月19日から)、予約は営業時間内、カード・交通系電子マネー・PayPay可、お通し300円、21席 (1階カウンター7、2階個室6名・4名テーブル2)、禁煙。口コミ (2018〜2026年、英語): 町家を改装したおしゃれなたこ焼き屋、先斗町公園の隣、持ち帰り可、4個か6個、だし醤油・塩・マヨネーズ、ダブルチーズ、明太子、ねぎとろのせ、牛すじたこ焼き2個300円、肉豆腐、ポン酢のジュレ、鴨、ワイン、アンデスの塩、話好きのマスター。',
      confidence: 'low', sources: [TB, R + 'B453434061/', R + 'B453799406/', R + 'B468198027/', R + 'B476758892/', R + 'B488129070/', R + 'B496385445/', R + 'B499864647/', R + 'B521141958/', R + 'B529390297/', R + 'B534956805/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cards accepted; takeaway at the front.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区先斗町通若松町141-13',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (hours updated August 2026); reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.006756, 135.771134), offset ~8m to clear 京いざかや くぼ田 (same lot, 1m); cross-checked: GSI 京都府京都市中京区若松町141番地 (lot) 51m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B521141958/'],
    price_note: 'Only one published price (January 2026 review); takoyaki come in sets of 4 or 6.', last_checked: TODAY, items: [
      it('', '', 'Beef-tendon takoyaki, 2 pieces (takeaway)', '¥300', 'Takoyaki', 'no', 'no', 'January 2026.', 'gyusuji'),
      it('', '', 'Takoyaki, 4 or 6 pieces (sauce, dashi soy, salt or mayonnaise)', '', 'Takoyaki', 'no', 'no', '', 'takoyaki'),
      it('', '', 'Mentaiko takoyaki', '', 'Takoyaki', 'no', 'no', '', 'mentai'),
    ] }, {
    cuisine: '先斗町の町家のたこ焼きと鉄板のダイニングバー (食べログ、口コミ)・出汁のきいた小ぶりのたこ焼きを4個か6個で、ソース・だし醤油・塩・マヨネーズ、ダブルチーズ、明太子、ねぎとろのせ (2023〜2026年)・持ち帰りの牛すじたこ焼き2個300円 (2026年1月)・肉豆腐、ポン酢のジュレ、鴨などの一品、ワインなど (2022〜2024年)',
    neighborhood: '先斗町、三条近くの先斗町公園の隣。三条駅から徒歩5分',
    gf_detail: 'グルテンフリー不可。小麦の生地のたこ焼き (口コミ)。',
    vegan_detail: 'ヴィーガン不可。タコのたこ焼き、牛すじ、鴨、肉豆腐 (口コミ)。',
    notes: '[たこ焼きバー・先斗町、公園の隣] 先斗町公園の隣、町家を改装したおしゃれなたこ焼きと鉄板のバー。出汁のきいた小ぶりのたこ焼きを4個か6個、ソース、だし醤油、アンデスの塩で、ワインと。持ち帰りの牛すじたこ焼きは2個300円。1階はカウンター、2階にテーブル。火曜休み。',
  });
}

save();
