// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 23.
//   + 炭料理 ひより Sumi Ryori Hiyori (charcoal-cooking course in a townhouse south of the Imperial Palace) — un-skipped by the
//     coordinator after batch 22: the same-name count covers one brand or operator, not unrelated shops sharing a common word.
//   + 萍萍 Ping Ping (Taiwanese home cooking in a Gion back lane)
//   + お菓子工房 ファヴリット favorite (take-away apple pie and tarts, Shijo Nishinotoin)
//   + はり清 Hari Se (Kyoto kaiseki house of 350-odd years, Gojo)
//   Same-name counts first, per brand or operator (2026-11-05): ひより — one shop of its own brand (the other Kyoto "Hiyori"
//   shops are unrelated); 萍萍 — one; ファヴリット — one; はり清 — one restaurant (a review mentions a sister patisserie,
//   Famille de Chie Hari Se).
//   Taken on 2026-11-05: 炭料理 ひより 26044114 as instructed; `next core 200` gave 萍萍 26003284; `next notable 200` gave
//   ファヴリット 26009038 and はり清 26000560. None is in data/kyoto.json: grep by name and address (毘沙門町542-2,
//   祇園富永町北側397 ピッケルビル, 妙伝寺町705 CASA VERDE, 大黒町通五条下ル袋町) found none. Service charges per Tabelog's
//   Japanese original: ひより 「心地よい空間とサービス維持のため、お席料を頂戴しております。」 (a seat fee, amount not given);
//   萍萍, ファヴリット, はり清 none listed.
//   No shop asks diners not to post it; no remarks on anyone's looks are recorded.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-23');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 炭料理 ひより
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26044114/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '22:00']);
  put({
    id: 'kyoto_sumi_ryori_hiyori', name: '炭料理 ひより (Sumi Ryori Hiyori)', category: 'OMNI',
    lat: 35.016283, lng: 135.766378, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A course of charcoal-cooked fish, meat and vegetables with soy, dashi and a fried dish with tartar sauce (2026 reviews). No gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish-and-meat course with dashi (2026 reviews).',
    hours_raw: '17:00–22:00 daily (Tabelog); hours may change. Reservations accepted (Tabelog). A seat fee is charged (Tabelog, Japanese text: 「心地よい空間とサービス維持のため、お席料を頂戴しております。」; the amount is not given). One omakase course, about ¥15,000–16,000 (February–March 2026); since September 2026 all guests start together for a while (September 2026, Japanese review). 11 counter seats facing an open kitchen, with a small garden; private hire (Tabelog; March 2026). Non-smoking; cards (Tabelog). A renovated townhouse on a quiet street south of the Imperial Palace; 9 min from Marutamachi Stn (Tabelog; August–September 2026). Opened 24 November 2025 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'South of the Imperial Palace — 9 min from Marutamachi Stn',
    cuisine: 'Omakase course of about 11 dishes built on charcoal, from a young chef trained at the charcoal kaiseki restaurant Sumibi Kappo Ifuki (2026 reviews) · sashimi such as kinmedai, goma-saba, hata, hokkigai and bonito; Asahi shrimp salt-aged for two days with almond oil; tuna head simmered about three days; charcoal-grilled sawara, menuke, shiitake, duck with fig, sirloin cap with garlic purée (February–August 2026) · Furano asparagus with house karasumi; mozuku with nagaimo; a fried fish sandwich with wasabi tartar (April 2026) · donabe rice to finish — firefly squid and uni on seri rice, eel and uni (March–June 2026) · Japanese sake in small glasses, beer, wine (August 2026) · course about ¥15,000–16,000; bills about ¥15,000–40,000 a head with drinks (2026 reviews)',
    website: null, gmaps: gm('炭料理 ひより 京都'), menu_url: null,
    notes: "[Charcoal kaiseki · south of the Imperial Palace, a new eleven-seat counter] Opened in November 2025 in a renovated townhouse, this counter's young chef — trained at Sumibi Kappo Ifuki — builds an omakase around the charcoal: salt-aged Asahi shrimp, tuna head simmered for three days, sawara and sirloin cap seared over binchotan, then clay-pot rice crowned with firefly squid and uni. About ¥15,000–16,000 for the course, plus a seat fee. Open daily from 17:00.",
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed); young and newly independent (2026 reviews)'], origin: null,
      background: 'Reviewers say the chef trained at a renowned charcoal-grill restaurant in Gion (March 2026), named as Sumibi Kappo Ifuki (August 2026), before opening independently in November 2025; both the restaurant and the owner are young (May and August 2026). The chef told a March 2026 diner the restaurant is still evolving.',
      philosophy: null, specialty: 'Charcoal-cooked fish and meat; clay-pot rice.',
      anecdotes: [
        { text: 'A February 2026 diner thought the ¥15,000 course well worth it but found the meat’s presentation, including the drippings, a little lacking.', source: R + 'B523131054/' },
        { text: 'A June 2026 diner found the charcoal aroma subtle — a gentle spice rather than smoke — and noted some may find it too faint.', source: R + 'B530689601/' },
        { text: 'An April 2026 diner preferred the house tartar made with wasabi instead of pickles.', source: R + 'B530643470/' },
      ],
      japanese_sources_summary: '食べログ: 食堂・海鮮、中京区毘沙門町542-2、丸太町駅から徒歩9分、神宮丸太町駅から10分、毎日17:00〜22:00、予約可、お席料あり (金額の記載なし)、カウンター11席、貸切可、禁煙、カード可、2025年11月24日オープン。口コミ (2026年2〜9月、英語と日本語): 御所南の改装した町家、炭火割烹の名店で修業した若い店主、炭を軸にした約11品のおまかせ、コース約15,000〜16,000円、塩で熟成した海老、三日炊いたまぐろの頭、土鍋の締め (ホタルイカと雲丹のせりご飯)、肉の盛り付けが物足りないという声、炭の香りが控えめという声、当面は一斉スタート (2026年9月)。',
      confidence: 'medium', sources: [TB, R + 'B523131054/', R + 'B524862492/', R + 'B525339139/', R + 'B525620341/', R + 'B527340671/', R + 'B528634199/', R + 'B530219483/', R + 'B530643470/', R + 'B530689601/', R + 'B533441358/', R + 'B534200443/', R + 'B536320985/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; one omakase course; seat fee; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区毘沙門町542-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; opened November 2025; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.016283, 135.766378); cross-checked: GSI 京都府京都市中京区毘沙門町542番地 (lot) 59m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B523131054/', R + 'B525339139/'],
    price_note: 'Course price from February and March 2026 reviews (¥15,000, then ¥16,000); a seat fee is charged, amount not given (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Omakase charcoal course (about 11 dishes)', '¥16,000', 'Course', 'ask', 'no', 'March 2026; ¥15,000 in February 2026.', 'omakase'),
    ] }, {
    cuisine: '炭火割烹の名店 Sumibi Kappo Ifuki で修業した若い店主の、炭を軸にした約11品のおまかせ (2026年の口コミ)・金目鯛、ごま鯖、はた、ほっき貝、鰹などのお造り。二日塩で熟成した Asahi の海老とアーモンドオイル、約三日炊いたまぐろの頭、炭火の鰆、めぬけ、椎茸、無花果を添えた鴨、イチボとにんにくのピュレ (2026年2〜8月)・Furano のアスパラと自家製からすみ、もずくと長芋、山葵のタルタルの魚フライのサンド (2026年4月)・締めは土鍋ご飯: ホタルイカと雲丹のせりご飯、鰻と雲丹 (2026年3〜6月)・小さなグラスの日本酒、ビール、ワイン (2026年8月)・コース約15,000〜16,000円、飲み物込みで1人約15,000〜40,000円 (2026年の口コミ)',
    neighborhood: '御所の南。丸太町駅から徒歩9分',
    gf_detail: '要確認。炭火で調理する魚、肉、野菜のコースで、醤油や出汁、タルタルを添えた揚げ物もある (2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。魚と肉のコースで出汁を使う (2026年の口コミ)。',
    notes: '[炭火の懐石・御所南、11席の新しいカウンター] 2025年11月に改装した町家で開いた店。Sumibi Kappo Ifuki で修業した若い店主が、炭を軸にしたおまかせを組む。塩で熟成した Asahi の海老、三日炊いたまぐろの頭、備長炭で焼く鰆やイチボ、締めはホタルイカと雲丹をのせた土鍋ご飯。コースは約15,000〜16,000円で、お席料が別にかかる。毎日17時から。',
  });
}

// ================================================================ 萍萍
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26003284/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_pingping_gion', name: '萍萍 (Ping Ping)', category: 'OMNI',
    lat: 35.004556, lng: 135.776679, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Taiwanese dishes with wheat dumpling wrappers, noodles, spring rolls and soy-based sauces (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dumplings of pork and chives, squid balls, clams, oysters and pork-filled zongzi (2025–26 reviews).',
    hours_raw: '17:00–23:00 (last order 22:30); closed Sunday and public holidays, following the restaurant’s calendar (Tabelog). Reservations accepted; walk-ins are often seated on weekdays, but it can be full at year-end (Tabelog; October 2025, January 2026). Cash only — no cards, e-money or QR (Tabelog). 11 seats; non-smoking (Tabelog). A retro shop in a back lane of Gion, 1 min from the Gion bus stop (Tabelog; February 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Gion back lane, by the Gion bus stop',
    cuisine: 'Taiwanese home cooking from a fixed menu, run by a cheerful owner reviewers call "Mama" (2025–26 reviews) · homemade boiled dumplings of pork, chives and ginger, twelve to a plate — the dish everyone orders (2025–26 reviews) · squid balls, Taiwanese salami, shijimi clams in garlic soy, stir-fried oysters, oyster omelette, soy-braised beef tongue, spring rolls, pork and shiitake zongzi, danzai noodles, century egg, a spicy dried-radish omelette and spicy rice vermicelli (2025–26 reviews) · Shaoxing wine, bottled beer, sake (2025–26 reviews) · about ¥2,000–5,000 a head (2025–26 reviews)',
    website: null, gmaps: gm('萍萍 祇園 台湾料理'), menu_url: null,
    notes: "[Taiwanese · Gion, dumplings in a back lane] A tiny, retro Taiwanese kitchen in a Gion back lane, a favourite second stop. Order the homemade boiled dumplings — twelve to a plate, heavy on chives — then squid balls, garlic-soy clams or danzai noodles, with warm Shaoxing wine. Some dishes are very spicy and salty. About ¥2,000–5,000. Cash only. Closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed; called "Mama" by regulars)'], origin: null,
      background: 'Reviewers describe an energetic owner, called "Mama", who jokes with guests and whose regulars come back for the same dishes year after year (2025–26 reviews).',
      philosophy: null, specialty: 'Boiled dumplings; squid balls.',
      anecdotes: [
        { text: 'A September 2026 diner found the dried-radish omelette and the rice vermicelli extremely spicy and salty — not for those who like mild food — but the dumplings good and the prices fair.', source: R + 'B535722612/' },
        { text: 'The owner told a November 2025 first-timer, half joking: "If you didn’t like it, please come again anyway!"', source: R + 'B517919370/' },
        { text: 'A January 2026 regular, turned away at year-end when it was full, came back for the clams and dumplings.', source: R + 'B501105295/' },
      ],
      japanese_sources_summary: '食べログ: 台湾料理、東山区祇園富永町北側397 ピッケルビル1F、祇園バス停から徒歩1分、月〜土 17:00〜23:00 (L.O. 22:30)、日曜・祝日休み (カレンダーに準じる)、予約可、カード・電子マネー・QR 不可、11席、禁煙。口コミ (2025年5月〜2026年9月、英語): 祇園の路地の台湾の家庭料理、自家製の水餃子 (12個)、イカ団子、台湾ソーセージ、しじみのにんにく醤油、牡蠣、牛タンの醤油煮、春巻き、ちまき、担仔麺、紹興酒、ママと呼ばれる明るい店主、辛くて塩辛い料理もあるという声、1人約2,000〜5,000円。',
      confidence: 'medium', sources: [TB, R + 'B239655978/', R + 'B494727601/', R + 'B501105295/', R + 'B513556526/', R + 'B515639301/', R + 'B516440990/', R + 'B517919370/', R + 'B522362902/', R + 'B522437483/', R + 'B526123629/', R + 'B527148371/', R + 'B535722612/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order from a short fixed menu; bring cash; walk-ins often fine on weekdays.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区祇園富永町北側397 ピッケルビル１F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.004556, 135.776679); GSI gives only the area for 祇園町北側397 and the town for 富永町397, so the pin stays on the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B527148371/', R + 'B522362902/'],
    price_note: 'No item prices found; reviews give about ¥2,000–5,000 a head (2025–26).', last_checked: TODAY, items: [
      it('', '', 'Homemade boiled dumplings (12)', '', 'Dumplings', 'no', 'no', '2025–26 reviews.', 'sui_gyoza'),
      it('', '', 'Squid balls', '', 'Small plates', 'ask', 'no', '2024–26 reviews.', 'squid_balls'),
      it('', '', 'Shijimi clams in garlic soy', '', 'Small plates', 'ask', 'no', 'February 2026.', 'shijimi_garlic'),
    ] }, {
    cuisine: '決まった品書きの台湾の家庭料理。常連が「ママ」と呼ぶ明るい店主の店 (2025〜2026年の口コミ)・豚、ニラ、生姜の自家製水餃子は1皿12個、誰もが頼む (2025〜2026年の口コミ)・イカ団子、台湾ソーセージ、しじみのにんにく醤油、牡蠣の炒め物、牡蠣のオムレツ、牛タンの醤油煮、春巻き、豚と椎茸のちまき、担仔麺、ピータン、辛い切り干し大根の卵焼き、辛いビーフン (2025〜2026年の口コミ)・紹興酒、瓶ビール、日本酒 (2025〜2026年の口コミ)・1人約2,000〜5,000円 (2025〜2026年の口コミ)',
    neighborhood: '祇園の路地、祇園バス停のそば',
    gf_detail: '要確認。小麦の皮の餃子、麺、春巻き、醤油ベースのたれの台湾料理 (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。豚とニラの餃子、イカ団子、貝、牡蠣、豚のちまきなど (2025〜2026年の口コミ)。',
    notes: '[台湾料理・祇園、路地の水餃子] 祇園の路地の、昭和の雰囲気の小さな台湾の家庭料理の店で、2軒目に人気。まずはニラたっぷりの自家製水餃子 (1皿12個)、それからイカ団子、しじみのにんにく醤油、担仔麺を温めた紹興酒と。とても辛く塩辛い料理もある。1人2,000〜5,000円ほど。現金のみ。日曜休み。',
  });
}

// ================================================================ ファヴリット
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26009038/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '20:00']);
  put({
    id: 'kyoto_okashi_kobo_favorite', name: 'お菓子工房 ファヴリット (favorite)', category: 'OMNI',
    lat: 35.003143, lng: 135.755043, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: pies and tarts on wheat pastry (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the pie crust is made with fermented butter, and there are cheese tarts and puddings (2024–26 reviews).',
    hours_raw: '11:00–20:00; closed Wednesday (open on public holidays) (Tabelog). Take-away only (Tabelog). Whole pies can be ordered ahead; pre-ordered pies may leave few slices by opening or mid-afternoon (Tabelog; June and August 2026). Tabelog lists PayPay, but a reviewer could not find the code and another says cash only — bring cash (Tabelog; August–September 2026). 2 min from the Shijo Nishinotoin bus stop, 6 min from Shijo Stn (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shijo Nishinotoin — 6 min from Shijo Stn',
    cuisine: 'Take-away pastry shop known for its apple pie (2024–26 reviews) · apple pie packed with large chunks of cooked apple, cinnamon, on a crisp fermented-butter crust — ¥630 a slice (May–August 2026), ¥680 (August 2026); whole 18 cm pies to order (June 2026) · seasonal tarts — kumquat, fig, apricot, pear — and a baked cheese tart, half-baked cheese ¥250, maple pudding (2026 reviews)',
    website: null, gmaps: gm('お菓子工房 ファヴリット 西洞院'), menu_url: null,
    notes: "[Pastry · Shijo Nishinotoin, Kyoto's chunky apple pie] A small take-away pâtisserie west of Karasuma whose apple pie is more apple than pastry — thick, cinnamon-scented slices under a crisp fermented-butter crust, about ¥650 a slice — with seasonal fruit tarts and a baked cheese tart alongside. Slices go by mid-afternoon on busy days; order a whole pie ahead. Bring cash. Closed Wednesday.",
    chef_bio: { chef_name: null, roles: ['Owner-pâtissier (unnamed)'], origin: null,
      background: 'A long-standing neighbourhood pastry shop: reviewers have bought its apple pie for years (December 2020 to August 2026) and describe a master who runs it (May 2026).',
      philosophy: null, specialty: 'Apple pie; seasonal fruit tarts.',
      anecdotes: [
        { text: 'An August 2026 regular arrived at the 11:00 opening to find the pre-ordered pies taken, but managed one still warm from the oven.', source: R + 'B490860961/' },
        { text: 'A June 2026 diner with a sweet tooth found the pie slightly lacking in sweetness and the crust firm.', source: R + 'B530445161/' },
        { text: 'An August 2026 diner noted prices have risen a few times in recent years but still found them reasonable.', source: R + 'B533631717/' },
      ],
      japanese_sources_summary: '食べログ: ケーキ、下京区妙伝寺町705 CASA VERDE 西洞院 1F、四条駅2番出口から徒歩約6分、四条西洞院バス停から2分、11:00〜20:00、水曜休み (祝日は営業)、テイクアウトのみ、カード・電子マネー不可、PayPay 可との表示。口コミ (2020年12月〜2026年9月、英語): 大きなりんごがぎっしりのアップルパイ1切れ630円 (2026年5〜8月)、680円 (2026年8月)、発酵バターの生地、18cm のホール、金柑・無花果・杏・洋梨のタルト、ベイクドチーズタルト、半熟チーズ250円、メープルプリン、予約分で売り切れることも、現金のみだったという声。',
      confidence: 'medium', sources: [TB, R + 'B434013087/', R + 'B490860961/', R + 'B514909827/', R + 'B527212998/', R + 'B527997567/', R + 'B528045351/', R + 'B528151222/', R + 'B530086733/', R + 'B530445161/', R + 'B533631717/', R + 'B534205641/', R + 'B535402638/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Take-away counter; point and pay; bring cash.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区妙伝寺町705 CASA VERDE 西洞院 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.003143, 135.755043); cross-checked: GSI 京都府京都市下京区妙伝寺町705番地 (lot) 18m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B528151222/', R + 'B534205641/'],
    price_note: 'Prices from May–August 2026 reviews; the apple pie rose from ¥630 to ¥680 a slice by August 2026.', last_checked: TODAY, items: [
      it('', '', 'Apple pie (slice)', '¥680', 'Pies', 'no', 'no', 'August 2026; ¥630 in May 2026.', 'apple_pie'),
      it('', '', 'Half-baked cheese', '¥250', 'Cakes', 'no', 'no', 'August 2026.', 'hanjuku_cheese'),
    ] }, {
    cuisine: 'アップルパイで知られるテイクアウトの洋菓子店 (2024〜2026年の口コミ)・大きく切った煮りんごがぎっしり、シナモンの香り、発酵バターのさくっとした生地のアップルパイ。1切れ630円 (2026年5〜8月)、680円 (2026年8月)、18cm のホールは予約で (2026年6月)・金柑、無花果、杏、洋梨など季節のタルト、ベイクドチーズタルト、半熟チーズ250円、メープルプリン (2026年の口コミ)',
    neighborhood: '四条西洞院。四条駅から徒歩6分',
    gf_detail: 'グルテンフリーではない。小麦の生地のパイとタルト (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。パイ生地に発酵バターを使い、チーズのタルトやプリンもある (2024〜2026年の口コミ)。',
    notes: '[洋菓子・四条西洞院、りんごぎっしりのアップルパイ] 烏丸の西の小さなテイクアウトの洋菓子店。アップルパイは生地よりりんごが主役で、シナモンの香る厚切りの煮りんごを発酵バターのさくっとした生地で包み、1切れ650円前後。季節の果物のタルトやベイクドチーズタルトも。忙しい日は午後には売り切れるので、ホールは予約を。現金を持参。水曜休み。',
  });
}

// ================================================================ はり清
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26000560/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:30'], ['17:00', '21:00']);
  put({
    id: 'kyoto_harise', name: 'はり清 (Hari Se)', category: 'OMNI',
    lat: 34.994725, lng: 135.770869, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking — the restaurant discusses allergies and preferences in detail (Tabelog). Kaiseki with dashi and soy, tempura in an almond batter and a beef cutlet (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as served: a kaiseki of fish, beef and dashi (2025–26 reviews). Ask when booking (Tabelog).',
    hours_raw: 'Lunch 11:30–14:30 and dinner 17:00–21:00; closed Tuesday (Tabelog). Reservations accepted; menus, allergies, preferences and the purpose of the meal can be discussed in detail when booking (Tabelog). Full kaiseki in private rooms for 2 to 30; the mini kaiseki is served in the large upstairs hall, with tatami rooms with chairs (Tabelog; July 2026). 100 seats; non-smoking; cards and QR (Tabelog). Parking across the street (November 2025). South of Gojo; 5 min from Kiyomizu-Gojo Stn (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'South of Gojo, Higashiyama — 5 min from Kiyomizu-Gojo Stn',
    cuisine: 'Kyoto kaiseki in a house founded over 350 years ago (official site), with a courtyard and tatami rooms (2025–26 reviews) · full kaiseki: hassun, clear soup, sashimi, simmered, grilled and fried courses, rice, red miso soup, fruit — about ¥8,000–30,000 a head (2025–26 reviews) · mini kaiseki lunch about ¥4,000–5,000: sea-bream chimaki, tokobushi, eggplant with shinjo, bonito tataki, firefly squid with vinegar miso, potato dumplings with beef, grilled sweetfish, bamboo-shoot rice, dessert (May 2026) · tempura in almond batter, sweet-potato rice, clam and tomato soup, Miyazaki beef cutlet (November 2025, April 2026) · homemade anko; roll cakes from the sister patisserie Famille de Chie Hari Se (October–November 2025)',
    website: 'http://www.harise.com/', gmaps: gm('はり清 京料理 五条'), menu_url: TB + 'dtlmenu/',
    notes: "[Kaiseki · Gojo, a ryotei of 350 years] A long-established Kyoto ryotei south of Gojo, more than 350 years old, with a courtyard and rooms for two to thirty — a favourite for family celebrations and memorial meals. Full kaiseki runs about ¥8,000–30,000; the mini kaiseki lunch (about ¥4,000–5,000) is served in the big upstairs hall. Seasonal, gently seasoned cooking with a few modern touches like an almond-batter tempura. Closed Tuesday.",
    chef_bio: { chef_name: null, roles: ['Long-established ryotei; chefs unnamed'], origin: null,
      background: 'Per the official site: a Kyoto-cuisine ryotei founded more than 350 years ago in Higashiyama Gojo. Reviewers speak of a history of about 360 years and a well-kept building (November–December 2025), and of a sister patisserie, Famille de Chie Hari Se, whose roll cakes appear at dessert (November 2025).',
      philosophy: null, specialty: 'Seasonal kaiseki; mini kaiseki lunch.',
      anecdotes: [
        { text: 'An August 2025 solo diner, booking the day before during Obon, was given a private room.', source: R + 'B511587060/' },
        { text: 'An October 2026 memorial lunch saw guests aged 91, 91 and 85 finish all ten dishes.', source: R + 'B537134837/' },
        { text: 'A November 2025 diner warned that the road in front and the parking are narrow.', source: R + 'B517869878/' },
      ],
      japanese_sources_summary: '公式サイト (harise.com): 京都 東山 五条、創業三百五十余年の京料理 はり清。食べログ: 日本料理、東山区大黒町通五条下ル袋町、清水五条駅から徒歩5分、昼 11:30〜14:30・夜 17:00〜21:00、火曜休み、予約可 (料理、アレルギー、好み、会の目的まで相談できる)、100席、個室 2〜30名 (ミニ懐石は2階の大広間)、禁煙、カード・QR 可。口コミ (2025年8月〜2026年10月、英語): 創業約360年、中庭、懐石1人約8,000〜30,000円、ミニ懐石約4,000〜5,000円、アーモンド衣の天ぷら、Miyazaki の牛カツ、自家製のあんこ、姉妹店 Famille de Chie Hari Se のロールケーキ、法事や祝いの席に。',
      confidence: 'medium', sources: [TB, 'http://www.harise.com/', R + 'B511587060/', R + 'B515094935/', R + 'B517869878/', R + 'B519195250/', R + 'B525163899/', R + 'B525512416/', R + 'B527265813/', R + 'B528279841/', R + 'B533534657/', R + 'B536092290/', R + 'B537134837/', R + 'B538114350/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead and discuss allergies and the occasion; private rooms; cards and QR.' },
    safety: { ...SAFETY0, staff_allergy_handling: [{ text: 'At booking the restaurant discusses the meal, individual allergies and preferences, and the purpose of the gathering in detail.', source: TB, verified: TODAY }] },
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区大黒町通五条下ル袋町',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.994725, 135.770869); the address has no lot number and GSI resolves only the town 京都府京都市東山区袋町 (10 m away), so the pin stays on the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B528279841/', R + 'B515094935/'],
    price_note: 'No set prices found; reviews give about ¥4,000–5,000 for the mini kaiseki lunch (May 2026) and ¥10,000–30,000 for full kaiseki (2025–26).', last_checked: TODAY, items: [
      it('', '', 'Mini kaiseki lunch (upstairs hall)', 'about ¥4,000–5,000', 'Lunch', 'ask', 'no', 'May 2026.', 'mini_kaiseki'),
      it('', '', 'Kaiseki course in a private room', 'about ¥10,000–30,000', 'Course', 'ask', 'no', '2025–26 reviews.', 'kaiseki'),
    ] }, {
    cuisine: '創業三百五十余年の京料理 (公式サイト)、中庭と座敷 (2025〜2026年の口コミ)・懐石: 八寸、椀、お造り、炊き合わせ、焼き物、揚げ物、ご飯、赤だし、水物。1人約8,000〜30,000円 (2025〜2026年の口コミ)・昼のミニ懐石約4,000〜5,000円: 鯛ちまき、とこぶし、茄子としんじょ、鰹のたたき、ホタルイカの酢味噌、牛肉入りの芋饅頭、鮎の塩焼き、筍ご飯、デザート (2026年5月)・アーモンド衣の天ぷら、さつまいもご飯、蛤とトマトの椀、Miyazaki の牛カツ (2025年11月、2026年4月)・自家製のあんこ、姉妹店 Famille de Chie Hari Se のロールケーキ (2025年10〜11月)',
    neighborhood: '五条の南、東山。清水五条駅から徒歩5分',
    gf_detail: '要確認。予約時にアレルギーや好みを詳しく相談できる (食べログ)。出汁と醤油の懐石で、アーモンド衣の天ぷらや牛カツもある (2025〜2026年の口コミ)。',
    vegan_detail: 'このままではヴィーガン不可。魚、牛肉、出汁の懐石 (2025〜2026年の口コミ)。予約時に相談を (食べログ)。',
    notes: '[懐石・五条、350年の料亭] 五条の南の、創業350年を超える京料理の料亭。中庭と2〜30名の座敷があり、家族の祝いや法事によく使われる。懐石は1人約8,000〜30,000円、昼のミニ懐石 (約4,000〜5,000円) は2階の大広間で。やさしい味の季節の料理に、アーモンド衣の天ぷらなど少し新しい工夫も。火曜休み。',
  });
}

save();
