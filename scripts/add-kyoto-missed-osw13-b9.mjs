// Kyoto "what did we miss" pass (kyoto-missed, notable phase) — lane osw13, batch 9.
//   + 祇園 にしかわ Gion Nishikawa (kaiseki of Masayoshi Nishikawa below Yasaka Shrine; Michelin two stars per 2026 reviews; since 2009)
//   + 山玄茶 Sangencha (tea-kaiseki-rooted counter of Nobuhiko Masuda, ex-Shofukuro, off Hanamikoji; in Gion since 2007–2008)
//   + TAKAYAMA (owner-chef Tadashi Takayama's 25-dish creative course, GOOD NATURE STATION 2F; since 2019)
//   + LURRA° (wood-fired Nordic-Japanese course of chef Jacob Kear in a 250-year-old townhouse by Higashiyama Stn; since 2019)
//   - skipped NAKATSUKA 26029955: Tabelog marks the listing "Relocated" ("information from before the relocation").
//   Taken in queue order from `queue.mjs kyoto-missed next notable 80` on 2026-11-02 (NAKATSUKA skipped, LURRA° next).
//   None is in data/kyoto.json: grep by name (にしかわ/Nishikawa, 山玄茶/Sangencha, タカヤマ/TAKAYAMA, LURRA) and by address
//   (下河原町473, 祇園町北側347-96, 稲荷町318, 石泉院町396) found nothing. Neighbours: kyr_chuka_soba_roku is in the same building
//   (neighborhood "河原町四条（GOOD NATURE STATION 2F）", pinned 3 m from TAKAYAMA's Tabelog point), so TAKAYAMA's pin is offset;
//   mp_tempura_kyoboshi (28 m) and kyoto_yassan_gion (47 m; address_ja 祇園町北側347, not 347-96) are near Sangencha.
//   Chain check: single restaurants. Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-9');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26029955', 'NAKATSUKA: Tabelog listing marked Relocated ("This is information from before the relocation"); no new listing in the crawl yet');

// ================================================================ 祇園 にしかわ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26007611/'; const R = TB + 'dtlrvwlst/';
  const D = day(['18:30', '21:30']); const L = day(['12:00', '14:30'], ['18:30', '21:30']);
  put({
    id: 'kyoto_gion_nishikawa', name: '祇園 にしかわ (Gion Nishikawa)', category: 'MOM_AND_POP',
    lat: 34.999783, lng: 135.778888, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information; a kaiseki course seasoned with soy sauce and miso, with fried dishes and mackerel sushi (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a kaiseki built on kombu dashi, with sea bream, hamo, ayu, mackerel and wagyu (Tabelog; 2026 reviews).',
    hours_raw: 'Dinner Tue–Sat 18:30–21:30; lunch Thu–Sat 12:00–14:30; closed Sunday and Monday (Tabelog). Reservations accepted (Tabelog); a weekday lunch in May 2026 was fully booked. 27 seats: an 11-seat counter of a single 7.5 m hinoki slab, a tatami room for 6 and a table room for 10 (Tabelog). Children in private rooms only (Tabelog). Non-smoking seats; a smoking room overlooking the garden (Tabelog). Phone photos allowed, cameras not (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) and e-money; no QR; service charge 10% (Tabelog). Near Kodaiji, Yasaka Shrine and the Higashiyama-Yasui bus stop (Tabelog). Opened 22 January 2009 (Tabelog; the chef section says 2008).',
    hours: { 1: D, 2: D, 3: L, 4: L, 5: L }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shimogawara-cho, off the stone-paved lane between Yasaka Shrine and Kodaiji — near the Higashiyama-Yasui bus stop',
    cuisine: 'Kyoto kaiseki that changes daily, with vegetables from the Ohara morning market and contracted farmers, dashi made with Yasaka Shrine\'s soft "Bijin no Mizu", Akashi sea bream and Numajima hamo, and sashimi that compares fish from different waters (Tabelog) · diners report ¥15,000–19,999 at lunch and ¥30,000–39,999 at dinner · May 2026 lunch: hiragai with urui and dashi jelly; fried Kamo eggplant in kuzu; hiragai and tuna; mackerel sushi; grilled white tilefish with its scales; wagyu shabu-shabu with flower pepper; ginger rice · July 2026: hamo and eggplant; the pressed mackerel sushi a diner called unforgettable · September 2026: autumn eggplant with black maitake and junsai in dashi jelly; hamo with kuzu and Matsutake; grilled eggplant with caviar; ayu with finger lime; fried Matsutake and Matsutake rice · October 2026: sweet sea bream with turnip purée; a hamo and Matsutake soup with chrysanthemum and ginkgo · sake',
    website: TB, gmaps: gm('祇園にしかわ'), menu_url: null,
    notes: "[Kaiseki · Higashiyama, a warm chef's sukiya house below Yasaka Shrine] Down a stone-paved lane between Yasaka Shrine and Kodaiji, a sukiya-style house of bamboo and hinoki with a single-slab counter 7.5 metres long and a small garden visible from every room. Owner-chef Masayoshi Nishikawa, born in Kyoto in 1975 to a family of Yuzen dyers, trained at Gion Sasaki, ran the kitchen at Warabi no Sato, and opened here in 2009; a Michelin listing followed within a year, and 2026 reviewers count two stars for fifteen years running. The menu changes daily: dashi from Yasaka Shrine's soft spring water, Ohara vegetables, a pressed mackerel sushi diners rave about, and touches like caviar on grilled eggplant. Reviewers love the chef's jokes and send-offs; in September 2026 the chef was running the kitchen almost alone, with an apprentice joining in October.",
    chef_bio: { chef_name: 'Masayoshi Nishikawa (Tabelog; no kanji in a source)', roles: ['Owner-chef (Tabelog: "The owner, Masayoshi Nishikawa")'], origin: 'Kyoto Prefecture, born 1975 (Tabelog).',
      background: 'Per Tabelog\'s chef section: born in 1975 in Kyoto Prefecture; a grandfather who was a Yuzen dyer, and a childhood among Kyoto\'s beautiful and delicious things, led to cooking after high school; trained at Gion Sasaki (kyoto_gion_sasaki in this data), was head chef at Warabi no Sato, and opened Gion Nishikawa (the section says 2008; the listing\'s opening date is 22 January 2009); motto "a wide entrance and a high exit". Tabelog adds a Michelin Guide 2010 listing just over a year after opening. A September 2026 reviewer counts two Michelin stars for 15 consecutive years, says the chef had no apprentices then and ran the kitchen almost alone, with a new apprentice joining in October; another cites the motto "Shinmi wa tada kore tan" (true flavour is simply this). Tabelog Award Bronze 2019–2026; Japanese cuisine WEST "Tabelog 100" 2021, 2023, 2025.',
      philosophy: '"A wide entrance and a high exit": welcoming and friendly, with cooking of the highest standard (Tabelog).', specialty: 'Pressed mackerel sushi; Kyoto kaiseki with Yasaka Shrine water.',
      anecdotes: [
        { text: '"I learned that he currently has no apprentices and runs the kitchen almost entirely by himself." — September 2026.', source: R + 'B535274409/' },
        { text: '"The chef\'s jokes were on point, making for a delightful experience. He took the lead in the kitchen and even saw us off at the end." — May 2026.', source: R + 'B529279842/' },
        { text: '"The most shocking dish was the \'Saba no Oshi-zushi\' (pressed mackerel sushi)." — July 2026.', source: R + 'B532140244/' },
      ],
      japanese_sources_summary: '食べログ: 祇園 にしかわ、日本料理、東山区下河原通八坂鳥居前下る下河原町473、火・水は夜18:30〜21:30、木〜土は昼12:00〜14:30と夜、日・月休み、27席 (カウンター11、座敷6名、テーブル個室10名)、子どもは個室のみ、席は禁煙で庭の見える喫煙室あり、携帯での撮影可・カメラ不可、カードと電子マネー可、サービス料10%、2009年1月22日オープン、The Tabelog Award Bronze 2019〜2026、日本料理 WEST 百名店 2021・2023・2025。口コミ (2026年4〜10月、英語): 一枚板の hinoki のカウンター、大将の冗談と見送り、鯖の押し寿司、hamo と Matsutake、ミシュラン二つ星が続く、ほぼ一人で厨房を回す。',
      confidence: 'medium', sources: [TB, R + 'B527189235/', R + 'B528418005/', R + 'B529279842/', R + 'B529595932/', R + 'B531567485/', R + 'B532140244/', R + 'B533204733/', R + 'B534455602/', R + 'B535274409/', R + 'B536039945/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One omakase course; the chef chats and explains at the counter; many overseas diners at lunch (May 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区下河原通八坂鳥居前下る下河原町473',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (not shop-maintained); reviews dated through October 2026. No official website found.' },
    pin_source: `Tabelog ${TB} (34.999783, 135.778888); cross-checked: GSI 京都府京都市東山区下河原町473番地 (lot) 36m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B528418005/', R + 'B532140244/'],
    price_note: 'No menu or prices are published; diners report ¥15,000–19,999 at lunch and ¥30,000–39,999 at dinner. Dishes from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch course', '', 'Course', 'ask', 'no', 'Diners report ¥15,000–19,999.', 'lunch'),
      it('', '', 'Dinner course', '', 'Course', 'ask', 'no', 'Diners report ¥30,000–39,999.', 'dinner'),
      it('', '', 'Pressed mackerel sushi (in course)', '', 'Course', 'ask', 'no', 'May–August 2026.', 'saba_oshizushi'),
    ] }, {
    cuisine: '毎日変わる京懐石。Ohara の朝市や契約農家の野菜、Yasaka Shrine の軟水「Bijin no Mizu」でとる出汁、Akashi の鯛や Numajima の hamo、産地を食べ比べるお造り (食べログ)・口コミの予算は昼15,000〜19,999円、夜30,000〜39,999円・2026年5月の昼: hiragai と urui と出汁のジュレ、揚げた Kamo の茄子の kuzu、hiragai とマグロ、鯖寿司、白甘鯛の鱗焼き、花山椒の和牛しゃぶしゃぶ、生姜ご飯・2026年7月: hamo と茄子、忘れられないという鯖の押し寿司・2026年9月: 秋茄子と黒 maitake と junsai の出汁のジュレ、hamo の kuzu と Matsutake、キャビアをのせた焼き茄子、フィンガーライムの ayu、Matsutake の揚げ物と Matsutake ご飯・2026年10月: 甘鯛と蕪のピュレ、菊と銀杏の hamo と Matsutake の椀・日本酒',
    neighborhood: '下河原町、Yasaka Shrine と Kodaiji の間の石畳の路地。Higashiyama-Yasui のバス停の近く',
    gf_detail: '予約時に要確認。グルテンの情報なし。醤油や味噌で味付けする懐石で、揚げ物や鯖の寿司もある (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではありません。kombu の出汁を土台に、鯛、hamo、ayu、鯖、和牛を使う懐石 (食べログ、2026年の口コミ)。',
    notes: '[懐石・東山、Yasaka Shrine の下の気さくな大将の Sukiya の家] Yasaka Shrine と Kodaiji の間の石畳の路地、竹と hinoki の Sukiya 造りの家に長さ7.5mの一枚板のカウンター、どの部屋からも tsubo-niwa が見える。店主の Masayoshi Nishikawa さんは1975年京都府生まれ、祖父は Yuzen の職人。Gion Sasaki で修業し Warabi no Sato の料理長を経て2009年に開業、1年あまりでミシュランに掲載され、2026年の口コミでは二つ星が15年続くという。献立は毎日変わる: Yasaka Shrine の軟水でとる出汁、Ohara の野菜、絶賛される鯖の押し寿司、焼き茄子にキャビアといった遊びも。大将の冗談と見送りが好評。2026年9月はほぼ一人で厨房を回し、10月から弟子が入る。',
  });
}

// ================================================================ 山玄茶
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26005351/'; const R = TB + 'dtlrvwlst/';
  const LD = day(['12:00', '14:30'], ['18:00', '21:30']); const D = day(['18:00', '21:30']);
  put({
    id: 'kyoto_sangencha_gion', name: '山玄茶 (Sangencha)', category: 'MOM_AND_POP',
    lat: 35.005179, lng: 135.775962, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information; a kaiseki course seasoned with soy sauce and miso, with fried dishes, somen and sushi; the sashimi comes with sauces such as mascarpone soy sauce and chili vinegar (Tabelog; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a kaiseki built on dashi, with abalone, sea urchin, ayu, conger eel and beef (2026 reviews).',
    hours_raw: 'Lunch 12:00–14:30 (last order 13:00) and dinner 18:00–21:30 (last order 19:30) on Mon and Thu–Sun; dinner only on Wednesday; closed Tuesday and the second Wednesday of the month (Tabelog). Reservations required (Tabelog). 26 seats: a hinoki counter of 10, sunken seating and tatami rooms upstairs (Tabelog; reviews). Children welcome, with a kids\' menu and strollers (Tabelog). Non-smoking (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR; a ¥500 charge (Tabelog). Takeaway available (Tabelog). About 12 min from Gion-Shijo Stn, down a stone-paved alley off Hanamikoji (Tabelog). Opened in Gion on 8 February 2008 (Tabelog; the chef section says it moved to Gion in 2007).',
    hours: { 0: LD, 2: D, 3: LD, 4: LD, 5: LD, 6: LD }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion, down a water-sprinkled stone alley just off Hanamikoji — about 12 min from Gion-Shijo Stn',
    cuisine: 'Kaiseki in the spirit of Zen cooking and the tea ceremony, from a chef trained 20 years at Shofukuro (Tabelog) · diners report ¥10,000–14,999 at lunch and ¥30,000–39,999 at dinner; a ¥500 charge · sashimi with "mascarpone soy sauce" and chili vinegar (Tabelog) · February 2026: sweet shrimp and abalone with egg-yolk sauce, a crab soup, fugu dumplings, tuna sushi from Ine, Omi beef in white miso, then rice from the chef\'s home in Shiga with refills and toppings, and a very soft mizu-yokan · May 2026: abalone, sea urchin and sesame tofu; eggplant and rockfish soup; simmered kinmedai; young ayu; ayu sushi; marinated chutoro; fried conger eel · July 2026: Awaji sea bream, ayu grilled then lightly fried, somen in a hand-carved ice bowl, Shiga Koshihikari rice with ebi-mame, mango, a yokan from the Shofukuro tradition, matcha · Ebisu draft beer and sake',
    website: TB, gmaps: gm('山玄茶 祇園'), menu_url: null,
    notes: "[Kaiseki · Gion, tea-ceremony cooking at a friendly counter] Through a noren and down a water-sprinkled stone alley off Hanamikoji, a hinoki counter of ten looks onto a small garden, with tatami rooms upstairs set with fine tableware. Chef Nobuhiko Masuda, born in Shiga in 1957, spent twenty years at the ryotei Shofukuro, opened Sangencha in Mizuguchi, Shiga, and moved to Gion; the cooking keeps the spirit of Zen cuisine and the tea meal while playing with ideas like mascarpone soy sauce for the sashimi. Courses end with rice from the chef's home town, as much as you like, and a melting mizu-yokan. Regulars come back for years for the chef's gentle humour; families are welcome, with a kids' menu. Lunch from about ¥10,000. Closed Tuesdays.",
    chef_bio: { chef_name: 'Nobuhiko Masuda (Tabelog; no kanji in a source)', roles: ['Owner-chef (Tabelog chef section; 2026 reviews: "Chef Masuda", "the head chef and his apprentice")'], origin: 'Shiga Prefecture, born 1957 (Tabelog).',
      background: 'Per Tabelog\'s chef section: born in 1957 in Shiga, among lakes and mountains, influenced by a mother who cooked well; trained at a Kyoto kaiseki restaurant, then 20 years at the ryotei Shofukuro, absorbing Zen cuisine and the tea ceremony; opened Sangencha in Mizuguchi, Shiga, and moved it to Gion in 2007, from ryotei to counter. The upstairs rooms use tableware used by the British royal family and ceramics the owner chose (Tabelog). A February 2026 reviewer has visited for about 15 years. Tabelog Award Bronze 2019–2026; Japanese cuisine WEST "Tabelog 100" 2021, 2023, 2025.',
      philosophy: 'Ichigo ichie: tradition and novelty served with a balanced pace (Tabelog).', specialty: 'Tea-kaiseki courses; Shiga rice to finish; mizu-yokan.',
      anecdotes: [
        { text: '"I have been visiting this place occasionally for about 15 years now. The deliciousness remains unchanged." — February 2026.', source: R + 'B522428692/' },
        { text: '"The standout dish was the somen served in a hand-carved ice bowl." — July 2026.', source: R + 'B535151037/' },
        { text: '"As soon as you enter, the scent of incense reminds you that you are in Kyoto." — June 2026.', source: R + 'B529307394/' },
      ],
      japanese_sources_summary: '食べログ: 山玄茶、日本料理、東山区祇園町北側347-96、祇園四条駅から徒歩12分、月・木〜日は昼12:00〜14:30 (L.O.13:00) と夜18:00〜21:30 (L.O.19:30)、水は夜のみ、火曜と第2水曜休み、要予約、26席 (カウンター10)、個室あり、子ども可でお子様メニューあり、禁煙、カード可、チャージ500円、テイクアウト可、2008年2月8日オープン、The Tabelog Award Bronze 2019〜2026、日本料理 WEST 百名店 2021・2023・2025。口コミ (2026年2〜9月、英語): 禅と茶の湯の心、Shiga のご飯のおかわり、mizu-yokan、氷の器の素麺、大将と弟子の温かいもてなし、常連が多い。',
      confidence: 'medium', sources: [TB, R + 'B314334648/', R + 'B433480789/', R + 'B433518235/', R + 'B456326703/', R + 'B466017534/', R + 'B522428692/', R + 'B524650084/', R + 'B529307394/', R + 'B529648371/', R + 'B535151037/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One omakase course at a counter or in tatami rooms; children welcome with a kids\' menu.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側347-96',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (not shop-maintained); reviews dated through September 2026. No official website found.' },
    pin_source: `Tabelog ${TB} (35.005179, 135.775962); cross-checked: GSI 京都府京都市東山区祇園町北側347番地 (lot) 51m; kyoto_yassan_gion (祇園町北側347) is 47m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B522428692/'],
    price_note: 'No menu or prices are published; diners report ¥10,000–14,999 at lunch and ¥30,000–39,999 at dinner; ¥500 charge (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Lunch course', '', 'Course', 'ask', 'no', 'Diners report ¥10,000–14,999.', 'lunch'),
      it('', '', 'Dinner course', '', 'Course', 'ask', 'no', 'Diners report ¥30,000–39,999.', 'dinner'),
      it('', '', 'Mizu-yokan (in course)', '', 'Desserts', 'ask', 'ask', 'February 2026.', 'mizuyokan'),
    ] }, {
    cuisine: '禅の料理と茶の湯の心を受け継ぐ懐石。Shofukuro で20年修業した大将の料理 (食べログ)・口コミの予算は昼10,000〜14,999円、夜30,000〜39,999円、チャージ500円・お造りには「マスカルポーネ醤油」と唐辛子酢 (食べログ)・2026年2月: 甘海老と鮑の卵黄のソース、蟹のお椀、ふぐの団子、Ine のマグロの寿司、Omi の牛の白味噌、締めは大将の地元 Shiga のご飯でおかわり自由、とても柔らかい mizu-yokan・2026年5月: 鮑と雲丹と胡麻豆腐、茄子と白身魚のお椀、kinmedai の煮付け、若い ayu、ayu の寿司、トロの漬け、穴子の揚げ物・2026年7月: Awaji の鯛、焼いてから軽く揚げた ayu、手彫りの氷の器の素麺、Shiga の Koshihikari と ebi-mame、マンゴー、Shofukuro の教えの yokan、抹茶・Ebisu の生ビールと日本酒',
    neighborhood: '祇園、Hanamikoji からすぐの打ち水された石畳の路地の奥。祇園四条駅から徒歩約12分',
    gf_detail: '予約時に要確認。グルテンの情報なし。醤油や味噌で味付けする懐石で、揚げ物、素麺、寿司もある。お造りにはマスカルポーネ醤油や唐辛子酢 (食べログ、2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではありません。出汁を土台に、鮑、雲丹、ayu、穴子、牛肉を使う懐石 (2026年の口コミ)。',
    notes: '[懐石・祇園、茶の湯の心の気さくなカウンター] 暖簾をくぐり、Hanamikoji からすぐの打ち水された石畳の路地を進むと、tsubo-niwa を望む hinoki のカウンター10席、2階には器を凝らした座敷。大将の Nobuhiko Masuda さんは1957年 Shiga 生まれ、料亭 Shofukuro で20年修業し、Shiga の Mizuguchi で山玄茶を開いてから祇園へ移った。禅の料理と茶事の心を守りつつ、お造りにマスカルポーネ醤油を添えるような遊びも。締めは大将の地元のご飯をおかわり自由で、とろける mizu-yokan。大将のやさしいユーモアに何年も通う常連が多く、お子様メニューもあって家族でも行ける。昼は約10,000円から、火曜休み。',
  });
}

// ================================================================ TAKAYAMA
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26033554/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://takayama-kyoto.com/';
  const H = day(['12:00', '15:00'], ['18:00', '21:00']);
  put({
    id: 'kyoto_takayama_kawaramachi', name: 'TAKAYAMA (タカヤマ)', category: 'MOM_AND_POP',
    lat: 35.002614, lng: 135.768902, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information; the course of some 25 small dishes includes gnocchi fritto, a sandwich, a choux, bruschetta, risotto and sweets (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask: Tabelog marks vegetarian options; the standard course uses caviar, foie gras, mortadella, crab and meat (2025–2026 reviews).',
    hours_raw: 'Lunch from 12:00 and dinner from 18:00, each starting together and lasting about three hours; closed Monday and irregularly (official site; Tabelog). Reservation only; changes count as cancellations with a fee (Tabelog). A ¥1,000 water charge per person; service included (Tabelog). 12 seats at a curved counter around an open kitchen; whole-room hire for up to 20 (Tabelog). Children only if able to stay seated through the course; no shorts or sandals; photos of the food only, and post videos muted (official site). Non-smoking; the toilets are in the building on the same floor (official site). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay) (Tabelog). Parking in the GOOD NATURE STATION car park (Tabelog). 3 min from Kyoto-Kawaramachi Stn (Tabelog). Opened 9 December 2019 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kawaramachi-Shijo, GOOD NATURE STATION 2F — 3 min from Kyoto-Kawaramachi Stn (Hankyu)',
    cuisine: '"TAKAYAMA Creative Experience": a course of about 25 small creative dishes on a modern-Italian base (official site; Tabelog) · ¥30,000 including tax and service at lunch or dinner (official site); from November to 11 January only a Winter Special Course, ¥35,000 (Tabelog); plus a ¥1,000 water charge · fixtures: a welcome juice coated in white chocolate printed with a QR code that opens the menu; "Japan Caviar" from Miyazaki on squid-ink potato chips in a white box (Tabelog; 2025–2026 reviews) · December 2025: foie gras choux with apple jam, a Takayama sandwich with truffle ice cream, gnocchi fritto with mortadella, Seiko crab and bottarga risotto, a mountain of Ohara vegetables · wine pairings, including an Australian rosé the chef recommended (July 2026); non-alcoholic drinks · sweets you can take home (February 2026)',
    website: SITE, gmaps: gm('TAKAYAMA 京都 河原町'), menu_url: SITE,
    notes: "[Italian · Kawaramachi-Shijo, a three-hour creative show of 25 small plates] A white room on the second floor of GOOD NATURE STATION with a curved counter of twelve around a stage-like open kitchen and no handle on the door. Owner-chef Tadashi Takayama went to Italy at 22, came home defeated by the language, went back at 27 to cook in Piedmont and Tuscany, and was sous-chef at Crescios in Campania before opening here in 2019. The course is about 25 bites built for fun as well as flavour: a juice wrapped in white chocolate with the menu as a printed QR code, Miyazaki caviar on squid-ink crisps, foie gras choux, a risotto of Seiko crab. Plan on three hours and come hungry. Many guests are from overseas, and staff are young and warm. ¥30,000 all in, plus ¥1,000 for water; closed Mondays.",
    chef_bio: { chef_name: 'Tadashi Takayama (Tabelog; official site: "オーナーシェフ高山")', roles: ['Owner-chef (official site)'], origin: 'Hiroshima Prefecture, born 1984 (Tabelog; a March 2026 review says the chef hails from Kyoto).',
      background: 'Per Tabelog\'s chef section (first person): born in 1984 in Hiroshima; began training at a local Italian restaurant after junior high; from 20 worked part-time at a fish market to save for Italy; went at 22 but came back over the language barrier; returned at 27 and cooked in Piedmont and Tuscany, then was sous-chef at Crescios in Campania; opened TAKAYAMA in 2019. The official site\'s theme is "comfort + excitement = happiness", with conversation between guests, chefs and cooks around a full open kitchen. Tabelog Award Bronze 2025, 2026; Innovative/Creative "Tabelog 100" 2025.',
      philosophy: '"Comfort + excitement = happiness" (official site).', specialty: 'Japan Caviar on squid-ink crisps; the QR-code chocolate welcome drink.',
      anecdotes: [
        { text: '"The surface of the white chocolate has a QR code that, when scanned, displays the day\'s menu." — September 2026.', source: R + 'B535705284/' },
        { text: '"I arrived after a 100-minute walk along the Kamo River, just in time for lunch, which ended at 3:40 PM." — February 2026.', source: R + 'B522546544/' },
        { text: '"I\'ve heard foreign guests are flocking in, but more Japanese people should experience it too." — July 2026.', source: R + 'B531874154/' },
      ],
      japanese_sources_summary: '公式サイト (takayama-kyoto.com): TAKAYAMA、テーマは「心地よさ+トキメキ＝幸せ」、フルオープンキッチンとカウンター席、季節の食材のインスピレーション溢れる創作料理、TAKAYAMA Creative Experience 昼・夜30,000円 (税サ込)、約3時間、少量多皿、オーナーシェフ高山、下京区河原町通四条下ル2丁目稲荷町318番6 GOOD NATURE STATION 2階、ランチ12時・ディナー18時の一括スタート、全席禁煙、ショートパンツやサンダル不可、子どもは最後まで着席できる場合のみ、化粧室は同フロアの館内、料理のみ撮影可。食べログ (店舗会員): イノベーティブ・創作料理・イタリアン、12席、月曜と不定休、11月〜1月11日は冬の特別コース35,000円のみ、お水代1人1,000円、サービス料込み、カード可、2019年12月9日オープン、The Tabelog Award Bronze 2025・2026、イノベーティブ・創作料理 百名店 2025。口コミ (2025年12月〜2026年9月、英語): QR コードのホワイトチョコのジュース、Japan Caviar、約25皿、海外の客が多い。',
      confidence: 'medium', sources: [TB, SITE, R + 'B471472984/', R + 'B522546544/', R + 'B522863324/', R + 'B524510292/', R + 'B524514202/', R + 'B524630953/', R + 'B530278926/', R + 'B531653742/', R + 'B531874154/', R + 'B535705284/'] },
    cultural_comfort: { level: 'english', note: 'Many overseas guests; the official site has English and Chinese pages; the menu opens from a QR code.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区河原町通四条下ル2稲荷町318-6 GOOD NATURE STATION 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and official site; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.002544, 135.768902); kyr_chuka_soba_roku is in the same building (neighborhood "河原町四条（GOOD NATURE STATION 2F）") and pinned 3m from this Tabelog point, so this pin is offset ~8m north to keep the two apart; GSI 京都府京都市下京区稲荷町318番地 (lot) 38m from the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE, TB],
    price_note: 'Prices from the official site (¥30,000 including tax and service) and Tabelog (Winter Special Course ¥35,000, November–11 January; ¥1,000 water charge); read November 2026.', last_checked: TODAY, items: [
      it('TAKAYAMA Creative Experience', '', 'TAKAYAMA Creative Experience course, lunch or dinner', '¥30,000', 'Course', 'ask', 'ask', 'Official site, tax and service included.', 'creative_experience'),
      it('', '', 'Winter Special Course (November–11 January)', '¥35,000', 'Course', 'ask', 'ask', 'Tabelog.', 'winter_course'),
      it('', '', 'Water charge, per person', '¥1,000', 'Charge', '', '', 'Tabelog.', 'water'),
    ] }, {
    cuisine: '「TAKAYAMA Creative Experience」: モダンイタリアンを土台にした約25皿の少量多皿の創作料理 (公式サイト、食べログ)・昼夜とも30,000円 (税サ込、公式サイト)。11月〜1月11日は冬の特別コース35,000円のみ (食べログ)。別途お水代1,000円・定番: QR コードを印刷したホワイトチョコで包んだウェルカムジュース、白い箱で出てくる Miyazaki の Japan Caviar とイカスミのポテトチップス (食べログ、2025〜2026年の口コミ)・2025年12月: フォアグラのシューとりんごのジャム、トリュフアイスの Takayama サンド、モルタデッラのニョッコフリット、Seiko 蟹とボッタルガのリゾット、Ohara の野菜の山盛り・ワインのペアリング (2026年7月にはシェフおすすめのオーストラリアのロゼ)、ノンアルコールも・持ち帰れる焼き菓子 (2026年2月)',
    neighborhood: '河原町四条、GOOD NATURE STATION 2F。阪急京都河原町駅から徒歩3分',
    gf_detail: '予約時に要確認。グルテンの情報なし。約25皿のコースにはニョッコフリット、サンド、シュー、ブルスケッタ、リゾット、焼き菓子がある (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。食べログにはベジタリアンメニューありとあるが、通常のコースはキャビア、フォアグラ、モルタデッラ、蟹、肉を使う (2025〜2026年の口コミ)。',
    notes: '[イタリアン・河原町四条、約25皿の3時間の創作ショー] GOOD NATURE STATION の2階、取っ手のない扉の先の白い空間に、舞台のようなオープンキッチンを囲む12席の曲線のカウンター。オーナーシェフの高山さんは22歳でイタリアへ渡るも言葉の壁で帰国、27歳で再挑戦して Piedmont と Tuscany で働き、Campania の Crescios でスーシェフを務め、2019年にここを開いた。約25皿のコースは味だけでなく楽しさも: メニューの QR コードを印刷したホワイトチョコのジュース、Miyazaki のキャビアとイカスミのチップス、フォアグラのシュー、Seiko 蟹のリゾット。約3時間、お腹を空かせて。海外の客が多く、若いスタッフも温かい。30,000円 (税サ込) とお水代1,000円、月曜休み。',
  });
}

// ================================================================ LURRA°
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26032601/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://lurrakyoto.com/';
  const H = day(['17:30', '21:00']);
  put({
    id: 'kyoto_lurra_higashiyama', name: 'LURRA°', category: 'MOM_AND_POP',
    lat: 35.01008, lng: 135.780646, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking, but Tabelog warns that with seasonal ingredients it may be hard to change dishes for allergies or dislikes. The courses include pasta, ravioli, tuile and doughnuts (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask: Tabelog marks vegetarian options, but also says allergy and preference changes may be hard; the course uses fish, horse meat and chicken (August 2026).',
    hours_raw: 'Tue–Sat dinner in two seatings: 17:30 at the counter (up to 10, starting together) and 18:30 at the communal table (up to 8); closed Sunday and Monday (official site; Tabelog — whose introduction says 17:30 and 20:30). Doors open 10 minutes before (Tabelog). Reservations through the official website (Tabelog). In August, a short walk-in à la carte lunch season (11–29 August in 2026; queues from about 10:30) (2026 reviews). 18 seats: 10 at the counter, 8 at one table; whole-room hire for up to 20 (Tabelog). Guests 13 and over, except for private hire (Tabelog). English-speaking staff (Tabelog). Non-smoking (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); service charge 10% (Tabelog). 1 min from Higashiyama Stn exit 1 (Tabelog). Opened 9 July 2019 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashiyama, a renovated townhouse over 250 years old, a minute from Higashiyama Stn exit 1 (Tozai Line)',
    cuisine: 'Wood-fired "hybrid" courses that mix Nordic and Japanese fermentation with the seasons, using vegetables the chef gathers in the Ohara countryside and fish and meat direct from producers, cooked over embers in a kiln and oven (Tabelog; official site) · diners report ¥30,000–59,999 at dinner · August 2026 dinner: purple sea urchin manju, horse meat tartare, hiramasa with dried strawberries and ponzu, edamame tofu panna cotta with gazpacho jelly, ravioli, Biwa trout roasted in the fireplace with clam chowder sauce, chicken, a plate of Kyoto vegetables, seaweed risotto, melon ice cream with hojicha cookies · August lunch à la carte: kanpachi aguachile, peach pasta, zucchini pizza, a French omelette with Boursin, the LURRA° burger, mango parfait and fried ice-cream doughnuts · wine, cocktails, and a non-alcoholic pairing; drinks by Yusuke Sakaibe, a cocktail-competition champion (Tabelog)',
    website: SITE, gmaps: gm('LURRA 京都 東山'), menu_url: SITE,
    notes: "[Innovative · Higashiyama, Nordic-Japanese cooking over open fire] A townhouse more than 250 years old, a minute from Higashiyama station, where ten guests at the counter watch the cooks work a wood fire and oven. Chef Jacob Kear, born in California and raised in Japan, cooked at Noma in Copenhagen and Noma Tokyo and was head chef of Clooney in New Zealand; drinks come from Yusuke Sakaibe, a cocktail champion the chef met in New Zealand. The name is Basque for earth, the ring a moon. Courses mix Nordic fermentation with Japanese seasons and Ohara vegetables — sea urchin manju, Biwa trout roasted in the fireplace with clam chowder sauce, fried ice-cream doughnuts to finish. A 2026 review reports a Michelin star in the Kyoto Osaka 2026 guide. In August a casual walk-in lunch runs for a few weeks. Book online; closed Sundays and Mondays.",
    chef_bio: { chef_name: 'Jacob Kear (official site; Tabelog also writes "Jacob Keer", "Jaykaub Keer" and "Jacob Kier")', roles: ['Owner-chef (Tabelog: "owner-chef Jacob Keer")', 'Drinks: Yusuke Sakaibe (Tabelog)'], origin: 'Born in California, USA, and raised in Japan (official site).',
      background: 'Per the official site: born in California and raised in Japan; after LA and Tokyo, trained at Noma in Copenhagen and followed it to Noma Tokyo; head chef at Clooney in New Zealand, which won three hats in the NZ Cuisine Good Food Awards. LURRA˚ means "earth" in Basque, and the ring stands for the moon; the aim is to show Japan\'s seasons and culture to the world. Tabelog adds that the chef and the drink specialist Yusuke Sakaibe, a cocktail-competition champion, met at a New Zealand restaurant, and that the house is a renovated townhouse over 250 years old. An August 2026 reviewer reports one star in the Michelin Guide Kyoto Osaka 2026. Tabelog Award Bronze 2025; Innovative/Creative "Tabelog 100" 2025.',
      philosophy: '"A showcase of Japan\'s seasons and culture", combining innovation, tradition and nature (official site).', specialty: 'Wood-fired dishes; Nordic-Japanese fermentation; fried ice-cream doughnuts.',
      anecdotes: [
        { text: '"In front of me, they were burning firewood. Yes, real firewood." — August 2026, dinner with a non-alcoholic pairing.', source: R + 'B533565408/' },
        { text: '"When I arrived on Friday at 10:40, there was a line, but since I was alone, I was allowed to enter first." — August 2026, à la carte lunch.', source: R + 'B534520334/' },
        { text: '"Being able to enjoy the fried ice cream donuts during lunch was a delightful surprise." — August 2026.', source: R + 'B535112506/' },
      ],
      japanese_sources_summary: '公式サイト (lurrakyoto.com): LURRA˚ はバスク語で「地球」、「°」は月の意、京都から日本の季節と文化のショーケースを世界に発信、シェフ Jacob Kear は米・カリフォルニア生まれ、LA や東京を経てデンマークの NOMA で研鑽、NOMA 東京に随行、ニュージーランドの Clooney でヘッドシェフ時代に3ハット、東山区石泉院町396、営業時間 17:30〜 (カウンター席、一斉スタート)・18:30〜 (テーブル席のみ)、定休日は日・月。食べログ (店舗会員): イノベーティブ、築250年を超える町家、Ohara の里山の野菜、窯とオーブンの熾火、季節の食材のためアレルギーや苦手な食材の変更は難しい場合あり、18席 (カウンター10、テーブル8)、13歳以上、英語を話せるスタッフ、ベジタリアンメニューあり、サービス料10%、2019年7月9日オープン、The Tabelog Award Bronze 2025、イノベーティブ・創作料理 百名店 2025。口コミ (2026年5〜8月、英語): 薪の火、8月の限定アラカルトのランチ、揚げたアイスのドーナツ、ミシュラン一つ星。',
      confidence: 'medium', sources: [TB, SITE, R + 'B417911362/', R + 'B419452212/', R + 'B530028749/', R + 'B533565408/', R + 'B533592053/', R + 'B534520334/', R + 'B534543866/', R + 'B535112506/', R + 'B536564416/', R + 'B537256434/'] },
    cultural_comfort: { level: 'english', note: 'English-speaking staff and an English official site; book online; set course at a shared start.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区石泉院町396',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and official site; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.010080, 135.780646); cross-checked: GSI 京都府京都市東山区石泉院町396番地 (lot) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B536564416/'],
    price_note: 'No prices are published; diners report ¥30,000–59,999 at dinner (2026). Dishes from August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Dinner course', '', 'Course', 'ask', 'ask', 'Diners report ¥30,000–59,999.', 'dinner'),
      it('', '', 'Biwa trout roasted in the fireplace with clam chowder sauce (in course)', '', 'Course', 'ask', 'no', 'August 2026.', 'biwa_trout'),
      it('', '', 'Fried ice-cream doughnuts (end of course)', '', 'Desserts', 'no', 'no', 'August 2026.', 'doughnuts'),
    ] }, {
    cuisine: '北欧と日本の発酵の技を季節と合わせた薪火の「ハイブリッド」なコース。シェフが Ohara の里山で採る野菜と、産地直送の魚と肉を窯とオーブンの熾火で (食べログ、公式サイト)・口コミの夜の予算は30,000〜59,999円・2026年8月の夜: 紫雲丹の饅頭、馬肉のタルタル、hiramasa と干し苺とポン酢、枝豆豆腐のパンナコッタとガスパチョのジュレ、ラビオリ、暖炉で焼いた Biwa masu とクラムチャウダーのソース、鶏、京都の野菜の皿、海藻のリゾット、メロンアイスと hojicha のクッキー・8月のアラカルトのランチ: kanpachi のアグアチレ、桃のパスタ、ズッキーニのピザ、ブルサンのフレンチオムレツ、LURRA° バーガー、マンゴーパフェ、揚げたアイスのドーナツ・ワイン、カクテル、ノンアルコールのペアリング。ドリンクはカクテル大会の優勝者 Yusuke Sakaibe さん (食べログ)',
    neighborhood: '東山、築250年を超える町家を改装。東西線東山駅1番出口から徒歩1分',
    gf_detail: '予約時に要確認。ただし食べログによれば、季節の食材を使うためアレルギーや苦手な食材による変更は難しい場合がある。コースにはパスタ、ラビオリ、チュイル、ドーナツがある (2026年の口コミ)。',
    vegan_detail: '要確認。食べログにはベジタリアンメニューありとあるが、アレルギーや好みによる変更は難しい場合があるとも。コースは魚、馬肉、鶏を使う (2026年8月)。',
    notes: '[イノベーティブ・東山、薪火で作る北欧と日本の料理] 東山駅から1分、築250年を超える町家で、カウンターの10人が薪の火と窯を操る料理人を見る。シェフの Jacob Kear さんはカリフォルニア生まれ、日本育ち。コペンハーゲンの NOMA と NOMA 東京で働き、ニュージーランドの Clooney でヘッドシェフを務めた。ドリンクはニュージーランドで出会ったカクテルの王者 Yusuke Sakaibe さん。店名はバスク語で地球、「°」は月。コースは北欧の発酵と日本の季節と Ohara の野菜: 紫雲丹の饅頭、暖炉で焼いた Biwa masu にクラムチャウダーのソース、締めは揚げたアイスのドーナツ。2026年の口コミによればミシュランガイド京都・大阪2026で一つ星。8月には数週間だけ予約なしの気軽なランチも。予約はネットで、日・月曜休み。',
  });
}

save();
