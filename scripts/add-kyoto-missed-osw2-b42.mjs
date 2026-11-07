// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 42.
//   Queue run from the osw2 worktree, 2026-11-06.
//   core (queue.mjs kyoto-missed next core 200, lane ids in order):
//   + 和牛らーめん 笑門 Wagyu Ramen Shomon (Matsusaka-beef ramen by Marutamachi Stn; since 2024) — single shop; no operator named.
//   + 鰻山椒 五行 Unagi Sansho Gogyo (eel and grape-sansho specialist by Nijojo-mae; since 2024) — invoice 株式会社京都丸餅家
//     (Yamashina, Kyoto); no other restaurant of that company found.
//   notable (queue.mjs kyoto-missed next notable 200, lane ids in order):
//   + HOO (coffee-and-donut townhouse café near Nijo Castle; since 2023) — second shop of loose kyoto (Kiyomizuzaka), run by
//     brothers (Leaf KYOTO): a two-shop local business.
//   + 逃現郷 Togenkyo (late-night smoking kissaten at Imadegawa-Omiya; since 2010)
//   None of the four is in data/kyoto.json: grep by id, name (笑門/Shomon, 五行/Gogyo, HOO, 逃現郷/Togenkyo) and address
//   (清水町381, 式阿弥町137, 観世町127) found none; 橋本町467 matches only kyoto_culotte_solo_cafe, a different shop next door.
//   Service charges: 五行 none ("no service charges or additional fees"); none listed for the others.
//   Pins: Tabelog /en/ point, cross-checked with GSI only.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-42');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 和牛らーめん 笑門
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26041683/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://syomon.jp/'; const ABOUT = SITE + 'about/'; const MENU = SITE + 'menu/';
  const BLOG = SITE + 'blog-marutamachi-ramen/';
  const H = day(['11:30', '14:30'], ['17:00', '20:30']);
  put({
    id: 'kyoto_wagyu_ramen_shomon', name: '和牛らーめん 笑門 (Wagyu Ramen Shomon)', category: 'OMNI',
    lat: 35.016344237862455, lng: 135.7602061804767, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thin wheat noodles with whole-wheat flour from the Kyoto noodle maker 棣鄂 (official site).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a broth of Matsusaka beef alone, with wagyu toppings (official site).',
    hours_raw: 'Regular hours: lunch 11:30–14:30 (last order 14:00), dinner 17:00–20:30 (last order 20:00); closed Sunday (official site). Autumn extended hours 1 October–30 November 2026: 11:00–15:00 (last order 14:30) and 17:00–21:00 (last order 20:30); regular hours again from 1 December (official site). No reservations; cards accepted, no e-money or QR (Tabelog). 12 seats: 4 at the counter and two sunken-kotatsu tables for 4; non-smoking; English menu and English-speaking staff (Tabelog; official site; March 2025). 64 m from Marutamachi Stn, Exit 5 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gosho-minami, by Marutamachi Stn (Karasuma) — 64 m from Exit 5',
    cuisine: 'Matsusaka-beef ramen: a creamy broth of Matsusaka beef alone, simmered 10 hours with no added chemical seasonings and combined with Kyoto dashi (official site) · Kyoto shio ¥1,500, Kyoto shoyu ¥1,600, Kyoto miso ¥1,700 from 1 October 2026, with a large slice of rare A5 wagyu chashu; one free extra noodle serving per bowl (official site) · special sukiyaki-don set with A5 BMS 12 sirloin and Kyoto egg (official site) · rice ¥200 (December 2025); fried chicken wings (September 2026) · sake and wine (Tabelog)',
    website: SITE, gmaps: gm('和牛らーめん 笑門 丸太町'), menu_url: MENU,
    notes: "[Ramen · Marutamachi, Matsusaka-beef ramen] A small, polished ramen shop thirty seconds from Marutamachi Station, simmering Matsusaka beef for ten hours into a milky, creamy broth set with Kyoto dashi. Shio, shoyu or Kyoto miso (¥1,500–1,700) come with rare A5 wagyu slices, a soft egg and a free extra serving of noodles. Pricey for ramen, and many diners are tourists, but even sceptical locals came away impressed. Closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Owner (店主) not named (official site)'], origin: null,
      background: 'Per the official site: a wagyu-ramen specialist in Gosho-minami, Kyoto, named for the proverb 笑う門には福来る ("fortune comes to a house of laughter"); the broth is Matsusaka beef only — no beef-bone extract or other meat — simmered for 10 hours, skimmed of fat and scum, and made without chemical seasonings; noodles are ordered from 棣鄂 (founded 1931); A5 wagyu chashu is cooked at low temperature and rested, 24 hours in all. Opened 15 August 2024 (Tabelog). A May 2025 reviewer notes the premises were once a kaiseki restaurant.',
      philosophy: 'Per the official site: through ramen, to bring happiness into people’s lives, as the proverb on laughter and fortune promises.',
      specialty: 'Kyoto shoyu, the first bowl the shop perfected, recommended to first-timers (official site).',
      anecdotes: [
        { text: 'A May 2025 local had avoided the place for its ¥1,500 tourist-level price, then found it a fine regular lunch: thin firm noodles, a frothy white broth and very tender Matsusaka chashu.', source: R + 'B507133992/' },
        { text: 'A March 2025 diner found the rare wagyu chashu ramen good but the salty shio broth monotonous halfway through; all the other customers were foreign visitors.', source: R + 'B502571496/' },
        { text: 'An August 2026 visitor read the "aimed at tourists" comments but found the price fair with the beef, egg and free extra noodles.', source: R + 'B533786718/' },
      ],
      japanese_sources_summary: '公式サイト (syomon.jp): 和牛らーめん 笑門 (しょうもん)、京都・丸太町の和牛らーめん専門店、「笑う門には福来る」から、松阪牛のみを10時間煮込んだ濃厚スープ (牛骨エキスや他の肉は加えない)、脂やアクを取り除き化学調味料に頼らない無添加、昭和6年創業の京都の製麺所「棣鄂」の全粒粉入り中加水細麺 (切刃22番)、A5和牛のチャーシューは低温調理と寝かせで計24時間、特選すき焼き丼セット (A5 BMS12 サーロイン、京都の卵)、京都しお1,500円・京都しょうゆ1,600円・京都みそ1,700円 (2026年10月1日から京みそと京しょうゆが100円値上げ)、ラーメン1杯につき替え玉1つ無料、初めてなら京都しょうゆ、通常は昼11:30〜14:30 (L.O. 14:00)・夜17:00〜20:30 (L.O. 20:00)、2026年10月1日〜11月30日は秋季特別営業で11:00〜15:00・17:00〜21:00、日曜定休、全12席 (お座敷2つ、カウンター4席)、中京区清水町381 Kスタジオ1F、丸太町駅5番出口から徒歩30秒。食べログ: ラーメン、2024年8月15日オープン、予約不可、カード可、電子マネー・QR不可、禁煙、英語メニュー、英語を話すスタッフ。口コミ (2024〜2026年、英語): もとは懐石料理店の建物、白く泡立つクリーミーなスープ、細いストレート麺、レアの和牛チャーシュー、味玉、キャベツ、紫玉ねぎ、ごぼうチップ、すき焼き丼セット、ライス200円、手羽先の唐揚げ、外国人客が多い。',
      confidence: 'medium', sources: [TB, SITE, ABOUT, MENU, BLOG, R + 'B490894919/', R + 'B502118247/', R + 'B502571496/', R + 'B507133992/', R + 'B508286469/', R + 'B519930974/', R + 'B523038580/', R + 'B523290287/', R + 'B533786718/', R + 'B534116091/', R + 'B534514830/', R + 'B536017355/'] },
    ramen: {
      broth_base: ['beef'], broth_texture: 'paitan', tare: ['shio', 'shoyu', 'miso'], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'thin', shape: 'straight', hydration: 'medium', handmade: false, notes: 'Thin straight medium-hydration noodles with whole-wheat flour from the Kyoto maker 棣鄂, cut with a no. 22 blade (official site); firm, with a strong wheat flavour (May 2025).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Matsusaka-beef ramen, Kyoto shoyu — ¥1,600 from 1 October 2026 (official site).',
      chashu: 'Rare A5 wagyu, cooked low and rested 24 hours in all, served like roast beef (official site; February 2026).',
      notable_toppings: ['soft-boiled seasoned egg', 'shredded cabbage or lettuce', 'red onion', 'burdock chips', 'radish sprouts'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Matsusaka-beef broth.' },
      pantheon: 'Ten hours of Matsusaka beef and nothing else in the pot, frothed white and cut with Kyoto dashi, under a slice of rare A5 wagyu — a beef-bone-free bowl thirty seconds from Marutamachi.',
      profile: { richness: 4, oiliness: 2, clarity: 1, tare_strength: 4, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B534116091/', '"The broth was creamy and rich, providing a strong flavor" (August 2026); "rich and creamy" (B502571496); the shop: rich yet not heavy (' + ABOUT + ').'],
        oiliness: [ABOUT, 'The shop removes fat and scum with care so the rich broth stays light enough to finish (濃厚なのに重くない).'],
        clarity: [R + 'B507133992/', '"The overall appearance was a milky white … the broth was creamy, slightly frothy, and white" (May 2025); "espuma soup" (B534116091).'],
        tare_strength: [R + 'B502571496/', '"The thick, creamy broth had a strong salty flavor" (shio, March 2025); "a delightful balance of umami and soy sauce" (shoyu, B536017355).'],
        noodle_firmness: [R + 'B507133992/', '"The noodles were thin, straight, and had a firm texture" (May 2025); "straight, chewy noodles" (B502571496); the shop: しっかりとしたコシ (' + ABOUT + ').'],
        aroma_punch: [TB, 'The shop’s Tabelog introduction praises "the exquisite aroma and deep flavor"; reviewers note a black-pepper accent (B507133992) rather than a strong aroma.'],
      },
    },
    cultural_comfort: { level: 'english', note: 'English menu and English-speaking staff; most diners are visitors (Tabelog; March 2025).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区清水町381 Kスタジオ 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with notices dated September–October 2026; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.016344, 135.760206); cross-checked: GSI 京都府京都市中京区清水町381番地 (lot) 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU, BLOG, R + 'B519930974/'],
    price_note: 'Ramen prices from the official site from 1 October 2026 (tax included).', last_checked: TODAY, items: [
      it('松阪牛らーめん 京都しお', '', 'Matsusaka-beef ramen, Kyoto shio', '¥1,500', 'Ramen', 'no', 'no', 'One free extra noodle serving per bowl.', 'shio'),
      it('松阪牛らーめん 京都しょうゆ', '', 'Matsusaka-beef ramen, Kyoto shoyu', '¥1,600', 'Ramen', 'no', 'no', 'The shop’s recommendation for first-timers.', 'shoyu'),
      it('松阪牛らーめん 京都みそ', '', 'Matsusaka-beef ramen, Kyoto miso', '¥1,700', 'Ramen', 'no', 'no', '', 'miso'),
      it('特選すき焼き丼セット', '', 'Special sukiyaki rice bowl set (A5 sirloin, Kyoto egg)', '', 'Set', 'no', 'no', 'Price not published.', 'sukiyaki_don_set'),
      it('', '', 'Rice', '¥200', 'Side', 'gf', 'vegan', 'December 2025 review; not on the menu.', 'rice'),
    ] }, {
    cuisine: '松阪牛らーめん: 松阪牛だけを10時間煮込み、化学調味料に頼らない濃厚でクリーミーなスープに京都のお出汁を合わせる (公式サイト)・京都しお1,500円、京都しょうゆ1,600円、京都みそ1,700円 (2026年10月1日から)、大判のレアA5和牛チャーシュー、ラーメン1杯につき替え玉1つ無料 (公式サイト)・A5 BMS12 サーロインと京都の卵の特選すき焼き丼セット (公式サイト)・ライス200円 (2025年12月)、手羽先の唐揚げ (2026年9月)・日本酒とワイン (食べログ)',
    neighborhood: '御所南、地下鉄丸太町駅のそば。5番出口から64m',
    gf_detail: 'グルテンフリー不可。京都の製麺所「棣鄂」の全粒粉入り小麦の細麺 (公式サイト)。',
    vegan_detail: 'ヴィーガン不可。松阪牛だけのスープに和牛のトッピング (公式サイト)。',
    notes: '[ラーメン・丸太町、松阪牛らーめん] 丸太町駅から徒歩30秒の小さく洗練されたラーメン店。松阪牛を10時間煮込んだ白く濃厚なスープに京都のお出汁を合わせる。しお、しょうゆ、京みそ (1,500〜1,700円) に、レアのA5和牛、半熟卵、無料の替え玉1つ。ラーメンとしては高めで客は観光客が多いが、疑っていた地元の客も感心している。日曜休み。',
  });
}

// ================================================================ 鰻山椒 五行
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26040915/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://sansyogogyo.com/'; const MENU = SITE + 'menu/'; const PHIL = SITE + 'philosophy/'; const FAQ = SITE + 'faq/';
  const INV = 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=6130001048598';
  const H = day(['10:00', '15:00']);
  put({
    id: 'kyoto_unagi_sansho_gogyo', name: '鰻山椒 五行 (Unagi Sansho Gogyo)', category: 'OMNI',
    lat: 35.01077242786376, lng: 135.75320690042534, cuisine_type: 'unagi',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: eel glazed with a sweet soy-based tare, and the shop says it offers no allergy accommodation (official site; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an eel specialist; the shop says it has no vegetarian or vegan menu (official site).',
    hours_raw: '10:00–15:00 (last order 14:30), daily; no regular closing day, sudden closures posted on Instagram (official site; Tabelog). Bookings online through ebica; tables are generally limited to one hour, and arriving more than 10 minutes late cancels the booking (Tabelog; official site). No service charge or additional fees (Tabelog). 17 seats: a 9-seat wooden counter and two semi-private tables for 4 (private room for 6–8); wheelchair and strollers welcome; non-smoking; English, Chinese and Korean menus (Tabelog; official site). Cards, e-money and QR; no PiTaPa (official site). On Oike-dori at Horikawa, 3 min walk from Nijojo-mae Stn (official site).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Horikawa-Oike, by Nijo Castle — 3 min walk from Nijojo-mae Stn',
    cuisine: 'Eel, sansho, rice and tare (official site) · Japanese-species eel raised at overseas eel farms (official site), steamed then grilled Kanto-style (July and September 2026 reviews) · hitsumabushi: regular ¥4,000, one whole eel ¥5,000, two eels ¥7,000; unaju: regular ¥3,800, one whole eel ¥4,800, two eels ¥6,800 (official menu) · rice from the Kyoto rice dealer 八代目儀兵衛; grape sansho from Wakayama, ground at the table; tare built on soy sauce from a century-old Kochi brewer (official site; Tabelog) · two kinds of unaju bento to take out, by phone (official site) · sake, highballs, Kyoto craft beer (official site; Tabelog)',
    website: SITE, gmaps: gm('鰻山椒 五行 二条城'), menu_url: MENU,
    notes: "[Unagi · Horikawa-Oike, eel and grape sansho] A calm, modern eel house a short walk from Nijo Castle, built around four things: steamed-then-grilled Japanese-species eel, rice from a famous Kyoto rice dealer, a soy-based tare and fragrant Wakayama grape sansho, ground at the table. A whole-eel hitsumabushi (¥5,000) spills over its box; eat it plain, then with condiments, then with dashi. Lunch only, 10:00–15:00 daily; book ahead. No allergy accommodation.",
    chef_bio: { chef_name: null, roles: ['Chef not named; operated by 株式会社京都丸餅家 (invoice register)'], origin: null,
      background: 'Opened 31 March 2024 (Tabelog). The qualified-invoice register lists 株式会社京都丸餅家 of Yamashina, Kyoto, registered 1 October 2023 (NTA). Per the official site: Japanese-species eel (ニホンウナギ) raised at overseas eel farms, rice from 八代目儀兵衛 in Kyoto, a sweet-savoury tare and Wakayama grape sansho; Tabelog’s introduction names Hirano Seijouan as the sansho supplier and a century-old Kochi soy sauce.',
      philosophy: 'Per the official site: "First the eel. Then the sansho" — eel, rice and tare, layered with the scent of sansho.',
      specialty: 'Hitsumabushi with one whole eel.',
      anecdotes: [
        { text: 'A September 2026 regular came back after four months for the hitsumabushi and regretted not ordering the two-eel size again.', source: R + 'B527595607/' },
        { text: 'An August 2026 guest found the tea cup tasted of fish and the young staff hard to hear, and the eel a little bland.', source: R + 'B533377037/' },
        { text: 'An August 2026 diner’s wife called it the best eel of a lifetime.', source: R + 'B535433427/' },
      ],
      japanese_sources_summary: '公式サイト (sansyogogyo.com): 鰻山椒五行、京都・二条城前のひつまぶし・うな重、まずは鰻、次は山椒、海外の養鰻場で育てられたニホンウナギ、和歌山県産ぶどう山椒、京都「八代目儀兵衛」の米、甘辛いタレ、日本酒やハイボール、ひつまぶし並4,000円・一本5,000円・二本7,000円、うな重並3,800円・一本4,800円・二本6,800円、うな重弁当2種類 (受取は電話で相談)、昼10:00〜15:00 (L.O. 14:30)、定休日なし、エビカで予約、英語・中国語・韓国語のメニュー、子ども用の椅子あり、アレルギー対応およびベジタリアン・ヴィーガンメニューはなし、車椅子・ベビーカー可、荷物置きあり、中京区式阿弥町137-3 御池ロイヤルマンション1階、二条城前駅から徒歩約3分。食べログ: うなぎ、2024年3月31日オープン、17席 (カウンター9、半個室テーブル4名×2)、席は原則1時間、10分以上の遅刻はキャンセル扱い、サービス料・チャージ料なし、カード・電子マネー・QR可、禁煙、車椅子可、テイクアウト、インボイス T6130001048598 (株式会社京都丸餅家、京都市山科区)。公式紹介: Hirano Seijouan のぶどう山椒、高知の百年続く醤油蔵の醤油、京都の地ビールとスパークリング日本酒。口コミ (2026年、英語): 関東風に蒸してから焼く、山椒をその場で挽く、テーブルに追いダレ、薬味はねぎ・わさび・海苔、外国人客も多い、予約必須。',
      confidence: 'medium', sources: [TB, SITE, MENU, PHIL, FAQ, INV, R + 'B482454358/', R + 'B527595607/', R + 'B532441296/', R + 'B533377037/', R + 'B535433427/', R + 'B535921479/', R + 'B535937194/', R + 'B535957320/', R + 'B536671874/', R + 'B536740878/', R + 'B537113151/', R + 'B537192550/'] },
    cultural_comfort: { level: 'english', note: 'English, Chinese and Korean menus; online booking (official site).' },
    safety: { ...SAFETY0,
      soy_sauce_wheat: [{ text: 'The eel tare is a secret recipe built on soy sauce from a century-old Kochi brewer (July 2026 review; Tabelog introduction).', source: R + 'B482454358/', verified: TODAY }],
      staff_allergy_handling: [{ text: 'The FAQ says the shop has no allergy accommodation and no vegetarian or vegan menu (アレルギー対応およびベジタリアン・ヴィーガンメニューのご用意はありません).', source: FAQ, verified: TODAY }] },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区式阿弥町137-3 御池ロイヤルマンション 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with live booking; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.010772, 135.753207); cross-checked: GSI 京都府京都市中京区式阿弥町137番地 (lot) 40m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU],
    price_note: 'Official menu prices (tax included), November 2026.', last_checked: TODAY, items: [
      it('ひつまぶし 並', '', 'Hitsumabushi, regular', '¥4,000', 'Hitsumabushi', 'no', 'no', '', 'hitsumabushi_nami'),
      it('ひつまぶし 一本', '', 'Hitsumabushi, one whole eel', '¥5,000', 'Hitsumabushi', 'no', 'no', '', 'hitsumabushi_ippon'),
      it('ひつまぶし 二本', '', 'Hitsumabushi, two eels', '¥7,000', 'Hitsumabushi', 'no', 'no', '', 'hitsumabushi_nihon'),
      it('うな重 並', '', 'Unaju, regular', '¥3,800', 'Unaju', 'no', 'no', '', 'unaju_nami'),
      it('うな重 一本', '', 'Unaju, one whole eel', '¥4,800', 'Unaju', 'no', 'no', '', 'unaju_ippon'),
      it('うな重 二本', '', 'Unaju, two eels', '¥6,800', 'Unaju', 'no', 'no', '', 'unaju_nihon'),
    ] }, {
    cuisine: '鰻、山椒、米、タレ (公式サイト)・海外の養鰻場で育てられたニホンウナギ (公式サイト)、関東風に蒸してから焼く (2026年7月と9月の口コミ)・ひつまぶし 並4,000円、一本5,000円、二本7,000円、うな重 並3,800円、一本4,800円、二本6,800円 (公式のお品書き)・京都「八代目儀兵衛」の米、席で挽く和歌山県産ぶどう山椒、高知の百年続く醤油蔵の醤油を使ったタレ (公式サイト、食べログ)・うな重弁当2種類は電話で (公式サイト)・日本酒、ハイボール、京都の地ビール (公式サイト、食べログ)',
    neighborhood: '堀川御池、二条城のそば。二条城前駅から徒歩3分',
    gf_detail: 'グルテンフリー不可。甘辛い醤油ベースのタレの鰻で、アレルギー対応はないと店が明記 (公式サイト、口コミ)。',
    vegan_detail: 'ヴィーガン不可。鰻の専門店で、ベジタリアン・ヴィーガンメニューはないと店が明記 (公式サイト)。',
    notes: '[うなぎ・堀川御池、鰻とぶどう山椒] 二条城から歩いてすぐの、落ち着いたモダンな鰻屋。蒸してから焼くニホンウナギ、京都の老舗米屋の米、醤油ベースのタレ、席で挽く香り高い和歌山のぶどう山椒の四つが軸。鰻一本のひつまぶし (5,000円) は重箱からはみ出すほど。そのまま、薬味で、出汁でと味を変えて。昼のみ10:00〜15:00、無休、予約がおすすめ。アレルギー対応なし。',
  });
}

// ================================================================ HOO
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26039439/'; const R = TB + 'dtlrvwlst/';
  const LEAF = 'https://leafkyoto.net/?p=51848'; const IG = 'https://www.instagram.com/hoo_kyoto/';
  const H = day(['10:00', '17:00']);
  put({
    id: 'kyoto_hoo_donuts', name: 'HOO', category: 'OMNI',
    lat: 35.01614561786036, lng: 135.7532416104796, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: yeast-raised wheat donuts (Leaf KYOTO; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: custard and cream-filled donuts, a sausage "donut dog" and milk lattes (Leaf KYOTO; reviews).',
    hours_raw: '10:00–17:00 daily per Tabelog; irregular closures (Leaf KYOTO, June 2023) — check Instagram @hoo_kyoto. No reservations (Tabelog; June 2026). Order downstairs; eat-in seats on the first floor and a larger room upstairs; takeout too (2026 reviews). Non-smoking (Leaf KYOTO). Cash, cards and PayPay (June and September 2026 reviews; Tabelog lists cards only). On Takeya-machi-dori west of Aburanokoji, 7–8 min walk from Nijojo-mae Stn (Leaf KYOTO; September 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Takeya-machi, east of Nijo Castle — 7 min walk from Nijojo-mae Stn',
    cuisine: 'Coffee and small yeast donuts, filled with cream to order (Leaf KYOTO; July 2026) · hojicha cream ¥480, matcha cream ¥480, custard, coffee cream, kinako cream, Earl Grey cream; seasonal fig, red bean and mascarpone ¥540 (September 2026) · donut dog with a sausage grilled to order ¥580 (September 2026) · house-roasted blends and single origins: Americano ¥600, matcha latte ¥750, hojicha latte ¥700, iced Japanese black tea ¥700, cold brew (2026 reviews)',
    website: IG, gmaps: gm('HOO 京都 橋本町 ドーナツ'), menu_url: TB,
    notes: "[Café · Takeya-machi near Nijo Castle, donuts and coffee] The second shop of the Kiyomizuzaka coffee stand loose kyoto, run by brothers, in an old townhouse with earthen walls and beams. Small, soft and chewy yeast donuts are filled to order — hojicha, matcha, custard, about ¥480 — with house-roasted coffee or an unsweetened matcha latte in the upstairs room. The name is the sigh of relief the brothers want you to breathe. Open daily 10:00–17:00.",
    chef_bio: { chef_name: null, roles: ['Run by the brothers behind loose kyoto (Leaf KYOTO); not named'], origin: null,
      background: 'Per Leaf KYOTO (June 2023): the second shop of loose kyoto, the popular Kiyomizuzaka coffee stand run by brothers, opened 13 May 2023 with queues before opening from the first days; the townhouse keeps its earthen walls and beams, and the name carries the wish for a shop where you can breathe out (ふぅとひと息). The donuts here, unlike at loose kyoto, are yeast-raised; the coffee is roasted in-house.',
      philosophy: 'Per Leaf KYOTO: a shop where you can stop and breathe out.',
      specialty: 'Cream-filled yeast donuts with house-roasted coffee.',
      anecdotes: [
        { text: 'A May 2026 visitor meant to go to the solo-only café next door, could not get in, and liked the donuts here enough to look up the designer afterwards.', source: R + 'B529785978/' },
        { text: 'An October 2026 diner found the sausage donut too oily, though the townhouse felt like a secret base.', source: R + 'B538481486/' },
        { text: 'A July 2026 visitor found the upstairs nearly full an hour before Saturday closing, and the donuts filled with cream after ordering.', source: R + 'B531125062/' },
      ],
      japanese_sources_summary: 'Leaf KYOTO (2023年6月): 兄弟で営む清水坂の人気コーヒースタンド［loose kyoto］の2号店、2023年5月13日オープン、連日開店前から行列、古民家の土壁や梁を活かした空間、「ふぅとひと息つけるような店に」との思いを店名に、イースト生地のふんわりもっちりした小ぶりのドーナツ、カスタードドーナツ350円、ラテ600円、自家焙煎のブレンドやシングルオリジン、2Fのカフェスペース、中京区竹屋町通油小路西入ル橋本町467-3、二条城前駅から徒歩7分、10:00〜17:00、不定休、全席禁煙。食べログ: カフェ、予約不可、カード可、10:00〜17:00。口コミ (2025〜2026年、英語): ほうじ茶クリーム480円、抹茶クリーム480円、いちじくとあんこのマスカルポーネ540円、ドーナツドッグ580円、抹茶ラテ750円、ほうじ茶ラテ700円、アメリカーノ600円、1階で注文して2階で食べる、現金・カード・PayPay、隣はひとり客専用のカフェ。',
      confidence: 'medium', sources: [TB, LEAF, IG, R + 'B467683230/', R + 'B528192662/', R + 'B529785978/', R + 'B530533785/', R + 'B531020011/', R + 'B531125062/', R + 'B531431501/', R + 'B534089150/', R + 'B536094802/', R + 'B536121183/', R + 'B538481486/', R + 'B538570618/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the counter downstairs, then sit upstairs.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区橋本町467-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.016146, 135.753242); cross-checked: GSI 京都府京都市中京区橋本町467番地 (lot) 70m; 10m from kyoto_culotte_solo_cafe (the café next door); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B467683230/', R + 'B531020011/', R + 'B536094802/'],
    price_note: 'Prices from June–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Hojicha cream donut', '¥480', 'Sweets', 'no', 'no', 'September 2026.', 'hojicha_cream'),
      it('', '', 'Matcha cream donut', '¥480', 'Sweets', 'no', 'no', 'September 2026.', 'matcha_cream'),
      it('', '', 'Fig, red bean and mascarpone donut (September special)', '¥540', 'Sweets', 'no', 'no', 'September 2026.', 'fig_mascarpone'),
      it('', '', 'Donut dog (sausage)', '¥580', 'Sweets', 'no', 'no', 'Sausage grilled to order.', 'donut_dog'),
      it('', '', 'Matcha latte', '¥750', 'Drink', 'ask', 'no', 'Unsweetened.', 'matcha_latte'),
      it('', '', 'Americano', '¥600', 'Drink', 'gf', 'vegan', 'June 2026.', 'americano'),
    ] }, {
    cuisine: 'コーヒーと、注文後にクリームを詰める小ぶりのイーストドーナツ (Leaf KYOTO、2026年7月)・ほうじ茶クリーム480円、抹茶クリーム480円、カスタード、コーヒークリーム、きなこクリーム、アールグレイクリーム、季節のいちじくとあんこのマスカルポーネ540円 (2026年9月)・注文後に焼くソーセージのドーナツドッグ580円 (2026年9月)・自家焙煎のブレンドとシングルオリジン: アメリカーノ600円、抹茶ラテ750円、ほうじ茶ラテ700円、アイスの和紅茶700円、コールドブリュー (2026年の口コミ)',
    neighborhood: '竹屋町、二条城の東。二条城前駅から徒歩7分',
    gf_detail: 'グルテンフリー不可。小麦のイーストドーナツ (Leaf KYOTO、口コミ)。',
    vegan_detail: 'ヴィーガン不可。カスタードやクリーム入りのドーナツ、ソーセージのドーナツドッグ、牛乳のラテ (Leaf KYOTO、口コミ)。',
    notes: '[カフェ・二条城近くの竹屋町、ドーナツとコーヒー] 兄弟で営む清水坂のコーヒースタンド loose kyoto の2号店で、土壁と梁の残る古民家。ふんわりもっちりの小さなイーストドーナツに注文後クリームを詰める。ほうじ茶、抹茶、カスタードで480円ほど。自家焙煎のコーヒーや甘くない抹茶ラテと2階でどうぞ。店名は「ふぅとひと息」から。毎日10:00〜17:00。',
  });
}

// ================================================================ 逃現郷
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26016399/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '24:00']);
  put({
    id: 'kyoto_togenkyo_kissa', name: '逃現郷 (Togenkyo)', category: 'OMNI',
    lat: 35.030392297849936, lng: 135.74890741062652, cuisine_type: 'kissaten',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Curry, omurice, Neapolitan spaghetti, a hamburg sandwich and cakes; no gluten information is published (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat curry, egg dishes and dairy desserts (reviews).',
    hours_raw: '12:00–24:00 (last order 23:00); closed Thursday; hours may change (Tabelog). Cash only — no cards, e-money or QR (Tabelog). No reservations. 21 seats: 7 at the counter and 14 at tables; smoking allowed at every seat, with ashtrays on the tables (Tabelog; 2025–2026 reviews). Power outlets at every seat and free Wi-Fi (Tabelog). 1 min walk from the Imadegawa-Omiya bus stop in Nishijin; 958 m from Imadegawa Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Nishijin, just north of Imadegawa-Omiya — 958 m from Imadegawa Stn',
    cuisine: 'Retro coffee house food until late: the house curry, generous and spicy, with a fried egg or other toppings (2025–2026 reviews) · omu-curry with pilaf ¥1,000 (November 2025); classic omurice with homemade pickles; Neapolitan spaghetti; a thick hamburg sandwich (2025–2026) · siphon coffee such as Brazil ¥600, a dark-roast blend ¥600, Mandheling and Bourbon Amarelo (2025–2026) · Mont Blanc, cheesecake, pudding, coffee jelly, a "petit dessert" of ice cream and cinnamon apples ¥650; Haruka juice, coffee cocktails (2025–2026)',
    website: null, gmaps: gm('逃現郷 今出川大宮'), menu_url: TB,
    notes: "[Kissaten · Nishijin, a late-night escape] A dim, retro coffee house at Imadegawa-Omiya, open from noon to midnight, with jazz, shelves of CDs, wooden furniture and a bowl of medaka fish at the door. Locals and students come for the hearty house curry or omu-curry (about ¥1,000), siphon coffee and small cakes. Smoking is allowed at every seat — a deal-breaker for some. Cash only; closed Thursday.",
    chef_bio: { chef_name: null, roles: ['Owner not named'], origin: null,
      background: 'Opened 8 July 2010 (Tabelog). A November 2025 reviewer describes soft lighting, a bowl of medaka at the entrance and a ryokan-style washroom with a note not to step on the moss; a July 2026 reviewer notes jazz and shelves of CDs.',
      philosophy: null,
      specialty: 'House curry.',
      anecdotes: [
        { text: 'A December 2025 guest came after drinks for a late curry with a fried egg, among young regulars at the smoking tables.', source: R + 'B520023105/' },
        { text: 'A March 2026 diner found the curry sauce so plentiful it outlasted the rice.', source: R + 'B523968677/' },
        { text: 'A June 2026 visitor nearly left on seeing the ashtrays, then stayed for siphon-brewed Bourbon Amarelo and a small chestnut Mont Blanc.', source: R + 'B530040420/' },
      ],
      japanese_sources_summary: '食べログ: 逃現郷 (Togenkyo)、カフェ、上京区今出川通大宮上ル観世町127-1、市バス「今出川大宮」から徒歩1分、今出川駅から958m、12:00〜24:00 (L.O. 23:00)、木曜定休、カード・電子マネー・QR不可、21席 (カウンター7、テーブル14)、喫煙可、全席に電源と無料Wi-Fi、2010年7月8日オープン。口コミ (2025〜2026年、英語): オムカレー (ピラフ) 1,000円、スパイスの効いたカレーに目玉焼き、オムライスと自家製の漬物、ナポリタン、ハンバーグサンド、サイフォンのコーヒー (ブラジル600円、深煎りブレンド600円、マンデリン、Bourbon Amarelo)、モンブラン、チーズケーキ、プリン、コーヒーゼリー、プチデザート650円、ジャズとCDの棚、入口のメダカの鉢、全席喫煙可、学生や常連客、深夜11時まで開いている珍しい喫茶店。',
      confidence: 'medium', sources: [TB, R + 'B517298941/', R + 'B517603408/', R + 'B517653986/', R + 'B520023105/', R + 'B522111964/', R + 'B523968677/', R + 'B524802399/', R + 'B528192134/', R + 'B530040420/', R + 'B531393723/', R + 'B531571363/', R + 'B531858071/'] },
    cultural_comfort: { level: 'japanese', note: 'Cash only; smoking at every seat.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区今出川通大宮上ル観世町127-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.030392, 135.748907); cross-checked: GSI 京都府京都市上京区観世町127番地 (lot) 33m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B517298941/', R + 'B517653986/', R + 'B524802399/'],
    price_note: 'Prices from November 2025 and March 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Omu-curry (pilaf under omelette with curry)', '¥1,000', 'Curry', 'ask', 'no', 'November 2025.', 'omu_curry'),
      it('', '', 'House curry', '', 'Curry', 'ask', 'no', 'Fried egg and other toppings extra.', 'curry'),
      it('', '', 'Brazil coffee (siphon)', '¥600', 'Coffee', 'gf', 'vegan', 'November 2025.', 'brazil'),
      it('', '', 'Dark-roast blend', '¥600', 'Coffee', 'gf', 'vegan', 'March 2026.', 'blend'),
      it('', '', 'Petit dessert (vanilla ice cream, cinnamon apples)', '¥650', 'Dessert', 'no', 'no', 'Cornflakes at the bottom; November 2025.', 'petit_dessert'),
    ] }, {
    cuisine: '深夜まで食べられるレトロな喫茶の料理: たっぷりでスパイシーな自慢のカレー、目玉焼きなどのトッピング (2025〜2026年の口コミ)・オムカレー (ピラフ) 1,000円 (2025年11月)、自家製の漬物が付く昔ながらのオムライス、ナポリタン、厚いハンバーグサンド (2025〜2026年)・サイフォンのコーヒー、ブラジル600円、深煎りブレンド600円、マンデリン、Bourbon Amarelo (2025〜2026年)・モンブラン、チーズケーキ、プリン、コーヒーゼリー、バニラアイスとシナモンのりんごのプチデザート650円、コーヒーカクテル (2025〜2026年)',
    neighborhood: '西陣、今出川大宮のすぐ北。今出川駅から958m',
    gf_detail: '要確認。カレー、オムライス、ナポリタン、ハンバーグサンド、ケーキ。グルテンの情報は公開されていない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。肉入りのカレー、卵料理、乳製品のデザート (口コミ)。',
    notes: '[喫茶・西陣、深夜の逃げ場] 今出川大宮の、昼12時から深夜0時まで開く薄暗いレトロな喫茶店。ジャズ、CDの棚、木の家具、入口にメダカの鉢。地元の人や学生が、たっぷりのカレーやオムカレー (1,000円ほど)、サイフォンのコーヒー、小さなケーキに通う。全席喫煙可で、それが苦手な人も。現金のみ、木曜休み。',
  });
}

save();
