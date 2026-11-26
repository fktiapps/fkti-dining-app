// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 104.
//   + 京くずし料理 しし翁 (Kyo Kuzushi Ryori Shishiou: Kyoto kaiseki courses by Nijo Castle, thirty years) — rest
//   + 京 縁結び味こんぶ (obanzai and kombu onigiri lunch in a machiya off Inokuma-dori, Shijo Omiya; drinks at night) — rest
//   + SAKE CUBE KYOTO (century-old sake shop by Nijo-dori with a kaku-uchi standing bar) — rest
//   + 蔵倉 (Kurakura: izakaya in a Taisho-era sake brewery building near Kyoto Station, 30-plus years) — rest
//   - hotel MONday 京都丸太町 (26038222): skipped — left open last round, decided here.
//   Core and notable tiers have nothing left in this lane (2026-11-26); rest tier, nearest-first from `next rest 2000`.
//   No integrator prefetch: fetched by this worker with fetchshop.mjs (Tabelog /en/, 3 s between requests).
//   Chain checks (2026-11-26): the shops' own sites (shishiou.jp, sakecube.com, kurakura-kyoto.jp) list one shop each;
//   a web search finds no other 縁結び味こんぶ. None of the four is in data/kyoto.json (name, Tabelog id, address
//   checked) or in another worker's pending script.
//   Romaji: Shishiou from the shop's own English site (shishiou.jp/en: "Kyo Kuzushi Ryori Shishiou"); Kurakura from the
//   shop's Instagram handle kurakura.kyoto and domain kurakura-kyoto.jp (Tabelog kana クラクラ). 京 縁結び味こんぶ has no
//   sourced romaji (its site kyoto-mio.com would not load), so the name stays kanji/kana only.
//   Remarks about other diners left out (single reviewers, Greg 2026-11-06): しし翁 December 2024 / January 2025 /
//   September 2026 and SAKE CUBE November 2026. 蔵倉's foreign-customer remarks are kept as a multi-review pattern plus the
//   shop's own posts. No halal claims; no owner deaths; no posting bans.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-26';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-104');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 京くずし料理 しし翁
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26006596/'; const R = TB + 'dtlrvwlst/';
  const HP = 'https://shishiou.jp/', EN = HP + 'en/index.html', DIN = HP + 'dinner.html', LUN = HP + 'lunch.html', INF = HP + 'info.html';
  const H = day(['18:00', '22:00']);
  put({
    id: 'kyoto_shishiou', name: '京くずし料理 しし翁 (Kyo Kuzushi Ryori Shishiou)', category: 'OMNI',
    lat: 35.012413, lng: 135.754321, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'GF — ask: no gluten-free claim on the shop’s site or Tabelog. The courses include kakiage and tempura, ankake and dashi dishes (official sample menu, autumn 2026; April 2022 review); the menu changes with the day’s market, so ask when booking.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish-based kaiseki courses with sashimi, pike conger, dobin-mushi and sea bream broth (official sample menu, autumn 2026).',
    hours_raw: 'Dinner 18:00–22:00 (last order 22:00); closed irregularly (official site). Tabelog lists every day 18:00–22:00 and says the shop closes on days without reservations; reservations only (Tabelog; online booking until 23:00 the day before), though a July 2026 diner staying nearby was seated without one. Lunch by reservation only, for 4 or more, by phone at least 2 days ahead (official site; Tabelog). 50 seats: a first-floor counter for solo diners, sunken kotatsu tables, and second-floor tatami rooms that join into a banquet room for up to 30 (official site; Tabelog). Cards (Visa, Mastercard, AMEX, JCB, Diners, Discover, UnionPay) and QR (PayPay, WeChat Pay, Alipay+) (official site). Non-smoking with a smoking space; no parking; children welcome but no kids’ menu, so call ahead (Tabelog). 5 minutes’ walk from Nijojo-mae Station (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Near Nijo Castle — Nijojo-mae',
    cuisine: 'Kyo-kuzushi kaiseki (Kyoto kaiseki in a relaxed style) · dinner course of 8 dishes at ¥7,000, ¥6,000 or ¥5,000, and a banquet course of 6 dishes with 2 hours of drinks at ¥6,000 for 6 or more (official site, read 2026-11-26) · autumn 2026 sample of the ¥7,000 course: seasonal hassun, pike conger and Kyoto vegetables in thickened dashi, four kinds of sashimi, squid grilled with basil, kakiage of pike conger and black soybean edamame, dobin-mushi, and a grilled sea bream rice ball in sea bream dashi chazuke, sorbet to finish (official site) · lunch courses of 7 dishes at ¥4,500, ¥4,000 or ¥3,500 (official site) · whitebait tempura, grilled bamboo shoots, hassun on gold paper with sakura rice and firefly squid, chazuke with rice crackers and wasabi (April 2022) · Shogoin turnip potage, yellowtail, yuba sashimi, sea bream chazuke, strawberry sorbet in a ¥4,400 New Year course (January 2022) · soft-shelled turtle soup simmered six hours (December 2024) · Hagi-flower sushi, a moon-shaped omelette and burdock fried like pampas grass (September 2026) · sake chosen after tasting three or four that match the guest’s taste (July 2025, June 2026)',
    website: HP, gmaps: gm('京くずし料理 しし翁 京都 古城町367-14'), menu_url: DIN,
    notes: '[Kaiseki · Nijo Castle] A thirty-year-old Kyoto cuisine restaurant near Nijo Castle whose owner was head chef at a Gion restaurant: eight-dish kyo-kuzushi kaiseki courses from ¥5,000 to ¥7,000, generous and playfully plated, with sake tastings to choose a bottle. Counter, sunken tables and tatami rooms for up to 30. Dinner by reservation; lunch for groups of 4 or more.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per the official site: the restaurant has been open for thirty years; the owner trained for years at a Gion restaurant and became its head chef, and built the kyo-kuzushi style on that. The courses change daily with the owner’s morning market buying while the number of dishes and the price stay fixed (official English site). Reviewers describe a talkative, friendly owner (January 2023, July 2025, December 2025, July 2026) whose conversation lifted the mood without ever talking down (May 2026).',
      philosophy: 'The official site says the restaurant wants every guest to enjoy Japanese cuisine without formality.',
      specialty: 'Eight-dish kyo-kuzushi kaiseki; sea bream chazuke to finish.',
      anecdotes: [
        { text: 'A December 2024 diner on a business trip booked for Christmas Eve, and the owner thanked the diner for choosing Japanese food on Christmas.', source: R + 'B498136491/' },
        { text: 'A June 2026 diner arrived thirty minutes early for a colleague’s farewell dinner, was welcomed anyway, tasted four sakes before choosing, and was seen off at the door after paying.', source: R + 'B530570436/' },
        { text: 'A July 2025 reviewer warned light eaters that the portions are large, and explained that the course prices differ in the kinds of sashimi included.', source: R + 'B510311375/' },
      ],
      japanese_sources_summary: '公式サイト: 京くずし料理 しし翁、京都・二条城のほど近く、三十年、店主は祇園の料理屋で修業し料理長を務めた。夜 18:00〜22:00 (L.O.22:00)、不定休、昼は完全予約制 (4名様以上・2日前までに電話で)。京くずし会席 8品 7,000円・6,000円・5,000円、飲み放題ご宴会 6品 6,000円 (6名様から)、昼 7品 4,500円・4,000円・3,500円。2026年秋の一例: 季節の八寸、京野菜と鱧のあんかけ、お造り4種盛り、イカのバジル焼き、黒豆枝豆と鱧のかき揚げ、土瓶蒸し、鯛の焼きおにぎりの鯛出汁茶漬け、シャーベット。1月1日〜5日は7,000円のみ、10,000円程度の特別会席も相談可。食べログ: 京･くずし料理 しし翁 (シシオウ)、中京区小川通二条下ル古城町367-14、二条城前駅から徒歩5分、予約のみ、50席 (カウンター・掘りごたつ・座敷)、2階座敷は最大30名、カード・QR可。口コミ (2022年1月〜2026年9月、英語): 話し好きで気さくな店主、量が多い、日本酒を3〜4種試飲して選べる、コストパフォーマンスがよい。',
      confidence: 'medium', sources: [TB, HP, EN, DIN, LUN, INF, R + 'B445946880/', R + 'B462176560/', R + 'B498136491/', R + 'B500040620/', R + 'B510311375/', R + 'B518409901/', R + 'B526820440/', R + 'B527994747/', R + 'B530570436/', R + 'B531023332/', R + 'B536501003/', R + 'B537890876/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'The shop has an English website and online booking. Tabelog warns that phone service may be in Japanese only; no evidence of spoken English. A December 2024 Japanese diner helped translate for overseas guests.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区小川通二条下ル古城町367-14',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with autumn 2026 menu; Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.012413, 135.754321); not cross-checked (worker, no OSM this round); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [DIN, LUN],
    price_note: 'Official site prices (read 2026-11-26); tax and service charge not stated. From 1 to 5 January only the ¥7,000 course is served; a special course of about ¥10,000 can be arranged.', last_checked: TODAY, items: [
      it('京くずし会席 7,000円 8品', '', 'Kyo-kuzushi kaiseki, 8 dishes (standard course)', '¥7,000', 'Dinner', 'ask', 'no', '', 'kaiseki_7000'),
      it('京くずし会席 6,000円 8品', '', 'Kyo-kuzushi kaiseki, 8 dishes', '¥6,000', 'Dinner', 'ask', 'no', 'Sashimi varies by course price (July 2025 review).', 'kaiseki_6000'),
      it('京くずし会席 5,000円 8品', '', 'Kyo-kuzushi kaiseki, 8 dishes', '¥5,000', 'Dinner', 'ask', 'no', '', 'kaiseki_5000'),
      it('【飲み放題ご宴会】京くずし会席 6,000円 6品', '', 'Banquet: kaiseki, 6 dishes, with 2 hours of drinks', '¥6,000', 'Dinner', 'ask', 'no', '6 people or more; second-floor tatami room.', 'banquet'),
      it('7品 4,500円コース', '', 'Lunch course, 7 dishes', '¥4,500', 'Lunch', 'ask', 'no', 'Reservation only, 4 or more, 2 days ahead by phone; ¥4,000 and ¥3,500 courses also listed.', 'lunch_4500'),
    ] }, {
    cuisine: '京くずし会席・夜は8品で7,000円、6,000円、5,000円、飲み放題2時間付きのご宴会6品6,000円 (6名様から) (公式サイト、2026年11月26日閲覧)・2026年秋の7,000円コースの一例: 季節の八寸、京野菜と鱧のあんかけ、お造り4種盛り、イカのバジル焼き、黒豆枝豆と鱧のかき揚げ、土瓶蒸し、鯛の焼きおにぎりの鯛出汁茶漬け、シャーベット (公式サイト)・昼は7品で4,500円、4,000円、3,500円 (公式サイト)・白魚の天ぷら、焼き筍、金紙に盛った八寸と桜色のご飯とホタルイカ、あられとわさびの茶漬け (2022年4月)・聖護院かぶらのポタージュ、ぶり、湯葉の刺身、鯛茶漬け、苺のシャーベットの4,400円の新年会コース (2022年1月)・6時間煮込んだすっぽんのスープ (2024年12月)・萩の花の寿司、月に見立てた玉子焼き、すすきに見立てたごぼうの揚げ物 (2026年9月)・好みを伝えると日本酒を3〜4種試飲して選べる (2025年7月、2026年6月)',
    neighborhood: '二条城のそば。二条城前',
    gf_detail: 'GF — 要確認。公式サイトにも食べログにもグルテンフリーの記載なし。コースにはかき揚げや天ぷら、あんかけ、出汁の料理がある (公式サイトの2026年秋の献立例、2022年4月の口コミ)。献立はその日の仕入れで変わるので、予約時に相談を。',
    vegan_detail: 'ヴィーガン不可。お造り、鱧、土瓶蒸し、鯛出汁など魚介中心の会席 (公式サイトの2026年秋の献立例)。',
    notes: '[会席・二条城] 二条城のほど近く、三十年続く京料理の店。店主は祇園の料理屋で料理長を務めた。8品の京くずし会席は5,000〜7,000円、ボリュームがあり盛り付けも遊び心たっぷり、日本酒は試飲して選べる。カウンター、掘りごたつ、最大30名の座敷。夜は予約制、昼は4名様以上で予約。',
  });
}

// ================================================================ 京 縁結び味こんぶ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26039164/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '14:00']);
  put({
    id: 'kyoto_enmusubi_ajikonbu', name: '京 縁結び味こんぶ', category: 'OMNI',
    lat: 35.001725, lng: 135.750569, cuisine_type: 'obanzai',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'GF — ask: no gluten-free claim. The onigiri are filled with the shop’s own seasoned kombu (with shiitake and sansho, February 2026), whose seasonings are not stated; the obanzai tray has included spring rolls (October 2025, December 2025, August 2026), and nama-fu has been served (April 2026).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the obanzai include fish, chicken and dried sardines, with miso soup (2025–26 reviews).',
    hours_raw: 'Tabelog: lunch 11:00–14:00 on Mon, Tue, Fri, Sat, Sun and holidays; closed Wednesday and Thursday; closing days vary, so check the operating calendar on Instagram. Reservations by phone or Instagram DM, booking early recommended (Tabelog); the lunch is limited to 20 meals (August 2024 and February 2026 reviews) and an August 2026 photo shows booking by time slot, though a November 2025 couple was seated without a booking. Evening service is not on Tabelog, but reviewers ate and drank there at night in October 2025, January, April and August 2026; an August 2026 regular wrote that the evening hours would change from the next week. 8 counter seats (August and October 2025); an August 2026 party sat in a private room for 6. Cards (JCB) and e-money; no QR payments; no parking (Tabelog) — an August 2025 diner used a paid lot nearby. Opened 22 October 2022 (Tabelog). 4 minutes’ walk from Hankyu Omiya Station.',
    hours: { 0: H, 1: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shijo Omiya — off Inokuma-dori',
    cuisine: 'Obanzai and onigiri filled with the house aji-kombu · lunch is one set, the obanzai onigiri lunch at ¥1,500 (2025–26 reviews; tax included, August 2026): five to eight small obanzai, salad, miso soup and onigiri — two as standard with ¥150 less for one or more for three (September and October 2025), or one as standard with a second for ¥200 (November and December 2025) · tray examples: tofu with ankake, green peppers with dried sardines, komatsuna with crab sticks, miso potato salad, spring rolls, persimmon (October 2025); furofuki daikon, marinated mushrooms, lotus root and chicken in mustard miso mayonnaise (December 2025); somen, salad and watermelon (August 2025) · evenings: five obanzai ¥1,200, mirin-marinated horse mackerel ¥500, spring rolls with mentaiko, shrimp and avocado ¥750, saikyo-yaki fish ¥1,350, ginger aji-kombu onigiri ¥380, bottled beer ¥680, shochu ¥660 (October 2025); cheese croquette, sea bream carpaccio, nama-fu, bamboo shoots (April 2026); fried fugu and torafugu sashimi (January 2026); simmered beef and atsuage with minced meat (August 2026) · a wide choice of sake (October 2026) · kombu to take home (November 2025)',
    website: null, gmaps: gm('京 縁結び味こんぶ 京都 下京区瀬戸屋町305'), menu_url: TB,
    notes: '[Obanzai · Shijo Omiya] A small counter in a renovated machiya down an alley off Inokuma-dori, reached through a gate and a path: a ¥1,500 obanzai lunch of five to eight small dishes with onigiri filled with the house kombu, limited to 20 a day, and obanzai with sake at night. Reserve ahead; closed Wednesday and Thursday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened on 22 October 2022 (Tabelog). An October 2025 reviewer found the owner running the whole shop alone and chatting over the counter; an April 2026 regular mentions the cheerful owner. A November 2025 reviewer says the kombu has been handed down through three generations and took some home; a February 2026 reviewer describes it as homemade kombu with large pieces of shiitake and a hint of sansho. The room is finished in black with an L-shaped counter (September 2025, February 2026).',
      philosophy: null, specialty: 'Onigiri filled with the house aji-kombu; obanzai.',
      anecdotes: [
        { text: 'An August 2025 parent struggling to find a Kyoto lunch spot that took children booked by phone; children who do not order the lunch sit on a booster seat, which went on a round backless stool, and the reviewer still called the ¥1,500 lunch a great value.', source: R + 'B511300926/' },
        { text: 'An October 2026 reviewer called it a deli-style place for sake lovers who prefer light food, not for anyone, especially families, after a hearty meal.', source: R + 'B537078145/' },
      ],
      japanese_sources_summary: '食べログ: 京 縁結び味こんぶ、その他、下京区瀬戸屋町305、阪急大宮駅から徒歩4分、月・火・金・土・日・祝 11:00〜14:00、水・木休み、休みは不定でInstagramの営業カレンダーで確認、電話かInstagramのDMで予約、カード (JCB)・電子マネー可、QR不可、カウンター席、駐車場なし、2022年10月22日オープン。口コミ (2024年8月〜2026年10月、英語): 猪熊通から路地を入った町家、門から小道を通って入る、カウンター8席、おばんざいとおむすびのランチ1,500円 (20食限定)、自家製の味こんぶのおむすび、夜はおばんざいと日本酒、店主がひとりで切り盛り、こんぶは三代受け継いだもの。',
      confidence: 'medium', sources: [TB, R + 'B506077168/', R + 'B509481553/', R + 'B511300926/', R + 'B514435067/', R + 'B515487434/', R + 'B516488118/', R + 'B516530164/', R + 'B518332668/', R + 'B518608893/', R + 'B523380309/', R + 'B534554857/', R + 'B537078145/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One set lunch, served at the counter; booking by phone or Instagram DM. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市下京区瀬戸屋町305',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.001725, 135.750569); not cross-checked (worker, no OSM this round); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B515487434/', R + 'B516488118/', R + 'B518608893/', R + 'B534554857/'],
    price_note: 'Review prices: lunch from 2025–26 reviews, evening dishes from an October 2025 menu photo.', last_checked: TODAY, items: [
      it('', '', 'Obanzai onigiri lunch', '¥1,500', 'Lunch', 'ask', 'no', 'Tax included (August 2026); onigiri count adjustable for ¥150–200.', 'lunch'),
      it('', '', 'Assorted obanzai (5 kinds)', '¥1,200', 'Evening', 'ask', 'no', 'October 2025.', 'obanzai5'),
      it('', '', 'Spring rolls with mentaiko, shrimp and avocado', '¥750', 'Evening', 'no', 'no', 'October 2025.', 'harumaki'),
      it('', '', 'Ginger aji-kombu onigiri', '¥380', 'Evening', 'ask', 'ask', 'October 2025.', 'onigiri'),
    ] }, {
    cuisine: 'おばんざいと自家製の味こんぶのおむすび・ランチはおばんざいおむすびランチ1,500円の一種類 (2025〜2026年の口コミ。2026年8月は税込): 小鉢のおばんざい5〜8品、サラダ、味噌汁、おむすび。おむすびは基本2個で1個にすると150円引き、3個で150円増し (2025年9月・10月)、または基本1個で2個目は200円 (2025年11月・12月)・お盆の例: 豆腐のあんかけ、ピーマンとじゃこの炒め物、小松菜とカニカマ、味噌のポテトサラダ、春巻き、柿 (2025年10月)。ふろふき大根、きのこのマリネ、れんこんと鶏の辛子味噌マヨ (2025年12月)。そうめん、サラダ、すいか (2025年8月)・夜: おばんざい5種盛り1,200円、鯵のみりん漬け500円、明太子と海老とアボカドの春巻き750円、西京焼き1,350円、生姜味こんぶのおむすび380円、瓶ビール680円、焼酎660円 (2025年10月)。チーズコロッケ、鯛のカルパッチョ、生麩、筍 (2026年4月)。ふぐの唐揚げととらふぐの刺身 (2026年1月)。牛肉の煮物、ひき肉入りの厚揚げ (2026年8月)・日本酒の品揃えが豊富 (2026年10月)・こんぶはお土産にも (2025年11月)',
    neighborhood: '四条大宮。猪熊通を入ったところ',
    gf_detail: 'GF — 要確認。グルテンフリーの記載なし。おむすびの具は店の味こんぶ (椎茸と山椒入り、2026年2月) で調味料は記載なし。おばんざいには春巻き (2025年10月・12月、2026年8月) があり、生麩も出た (2026年4月)。',
    vegan_detail: 'ヴィーガン不可。おばんざいに魚、鶏肉、じゃこを使い、味噌汁がつく (2025〜2026年の口コミ)。',
    notes: '[おばんざい・四条大宮] 猪熊通から路地を入り、門と小道の先にある町家を改装した小さなカウンター。昼はおばんざい5〜8品と自家製の味こんぶのおむすびのランチ1,500円 (1日20食)、夜はおばんざいと日本酒。予約がおすすめ。水曜・木曜休み。',
  });
}

// ================================================================ SAKE CUBE KYOTO
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26029552/'; const R = TB + 'dtlrvwlst/';
  const HP = 'https://sakecube.com/';
  const H = day(['11:30', '21:00']);
  put({
    id: 'kyoto_sake_cube', name: 'SAKE CUBE KYOTO', category: 'OMNI',
    lat: 35.013548, lng: 135.755017, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'GF — ask: a sake shop with a standing bar; no food beyond snacks such as dried foods and canned fish (June 2022). Sake is made from rice, but beer is also sold; no gluten-free claim.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Vegan — ask: drinks by the glass; the only food reviewers mention is dried snacks and canned goods such as oil sardines (June 2022). No vegan claim.',
    hours_raw: 'Shop open Mon–Sat 11:30–21:00; closed Sunday and holidays (official site). Tabelog gives Mon–Sat 11:00–21:00. A March 2026 reviewer was told the in-store drinking (kaku-uchi) starts at 16:00. Reservations taken; private hire available; counter and standing bar; non-smoking; cards and QR payments; no parking (Tabelog); a large table in the middle of the shop (August 2026). On Nijo-dori west of Nishinotoin, about 480 m from Nijojo-mae Station.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nijo-dori — between Nijo Castle and the Imperial Palace',
    cuisine: 'A sake shop focused on Kyoto sake, plus beer and wine, where the bottles can be tasted by the glass in the shop (official site) · glasses from about ¥500, including Kamikura from Matsui Shuzo (August 2025, August 2026, March 2026); prices vary by sake and almost everything except premium bottles can be poured (November 2026) · bottles bought in the shop, 720 ml or 1.8 l, can be opened there and the rest taken home (August 2024) · snacks of dried foods and canned goods, and a coffee stout made with Kyoto Ogawa Coffee (June 2022)',
    website: HP, gmaps: gm('SAKE CUBE KYOTO 京都 二条通西洞院西入 大黒町343'), menu_url: null,
    notes: '[Sake bar · Nijo-dori] A sake shop the site says has sold drinks on this street between Nijo Castle and the Imperial Palace for over a hundred years, now a bright, wood-lined shop with a kaku-uchi standing bar: try Kyoto sake by the glass from about ¥500 and buy the bottle you like. Drinking from 16:00 (March 2026 review). Closed Sunday and holidays.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per the official site: the shop has sold drinks on this spot between Nijo Castle and the Imperial Palace for more than a hundred years, and means to keep changing with the times as a sake shop. The site lists exhibitions of a Japanese photographer’s pictures of overseas cities, a Hong Kong craft-art show and talk, and a SAKE CUBE KYOTO stall at a fair in Hong Kong. A June 2022 reviewer described an elegant standing bar run by a young couple; a May 2026 reviewer noted the artwork on display is by an artist who is a customer.',
      philosophy: null, specialty: 'Kyoto sake by the glass, bottles to take home.',
      anecdotes: [
        { text: 'A March 2026 visitor came on a weekday before 16:00, learned the drinking started at 16:00, came back at 16:30, and bought the bottle of Ura Kamikura after tasting it; the pours were generous.', source: R + 'B524394775/' },
        { text: 'An August 2024 reviewer, a Kamikura fan, noted that a bottle bought in the shop can be opened at the bar and the rest taken home.', source: R + 'B490155381/' },
      ],
      japanese_sources_summary: '公式サイト: SAKE CUBE、二条城と御所を結ぶこの地でお酒の販売と共に100余年、時代と共に変化する酒屋、京都の日本酒を中心にビール・ワインを販売、木の温もりを感じる店内で角打ちを楽しめる、月〜土 11:30〜21:00、日・祝定休、中京区二条通西洞院西入西大黒町343、写真展や香港のクラフトアートの展示などのイベント。食べログ: SAKE CUBE KYOTO (サケキューブ キョウト)、日本酒バー、大黒町343、月〜土 11:00〜21:00、日・祝休み、予約可、貸切可、禁煙、カード・QR可、カウンター・立ち飲み。口コミ (2019年5月〜2026年11月、英語): 酒屋の角打ち、1杯500円ほどから、Matsui Shuzo の Kamikura、角打ちは16時から (2026年3月)、気に入った酒はその場で買える。',
      confidence: 'medium', sources: [TB, HP, R + 'B452436376/', R + 'B474036994/', R + 'B490155381/', R + 'B496788060/', R + 'B512172300/', R + 'B524394775/', R + 'B527469853/', R + 'B539692830/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Standing bar inside a sake shop; bottles on display to point at. No English evidence found (the official site is in Japanese).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区二条通西洞院西入西大黒町343',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site; Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.013548, 135.755017); not cross-checked (worker, no OSM this round); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B512172300/', R + 'B524394775/', R + 'B539692830/'],
    price_note: 'Review prices only (2025–26); the price per glass depends on the sake.', last_checked: TODAY, items: [
      it('', '', 'Sake by the glass', 'from ¥500', 'Drinks', 'ask', 'ask', 'August 2025, August 2026; premium bottles excluded (November 2026).', 'sake_glass'),
    ] }, {
    cuisine: '京都の日本酒を中心に、ビールやワインも扱う酒屋で、店内で1杯ずつ飲める角打ち (公式サイト)・1杯500円ほどから、Matsui Shuzo の Kamikura も (2025年8月、2026年8月、2026年3月)。値段は酒によって異なり、プレミアムなもの以外はほぼ飲める (2026年11月)・店で買った720mlや1.8lの瓶をその場で開け、残りは持ち帰れる (2024年8月)・つまみは乾き物や缶詰、Kyoto Ogawa Coffee のコーヒースタウトも (2022年6月)',
    neighborhood: '二条通。二条城と御所のあいだ',
    gf_detail: 'GF — 要確認。立ち飲みのある酒屋で、食べ物は乾き物や缶詰などのつまみ程度 (2022年6月)。日本酒は米が原料だがビールも扱う。グルテンフリーの記載なし。',
    vegan_detail: 'ヴィーガン — 要確認。1杯ずつ飲むお酒が中心で、口コミにある食べ物は乾き物とオイルサーディンなどの缶詰 (2022年6月)。ヴィーガンの記載なし。',
    notes: '[日本酒バー・二条通] 二条城と御所を結ぶこの地で100余年お酒を売ってきたと公式サイトが紹介する酒屋。木の温もりを感じる明るい店内に角打ちの立ち飲みがあり、京都の日本酒を1杯500円ほどから試して、気に入った瓶を買える。飲めるのは16時から (2026年3月の口コミ)。日曜・祝日休み。',
  });
}

// ================================================================ 蔵倉
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26002414/'; const R = TB + 'dtlrvwlst/';
  const HP = 'https://kurakura-kyoto.jp/', ABOUT = HP + 'about/', MENU = HP + 'menu/', NEWS = HP + 'info/news/2837.html';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_kurakura', name: '蔵倉 (Kurakura)', category: 'OMNI',
    lat: 34.989749, lng: 135.76091, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'GF — ask: no gluten-free claim. Sashimi, grilled fish and robatayaki sit beside tempura, karaage and fried nama-fu (official menu); yakitori comes with sauce or salt, and seasonings are not stated.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood and yakitori izakaya; the September 2026 otoshi included chicken gizzards and walnuts with bonito flakes, and eggplant came simmered in dashi with shishamo.',
    hours_raw: '17:00–23:00, last orders 22:00 for food and 22:30 for drinks (official site); Tabelog gives Mon–Sat 17:00–23:00, last order 22:30, closed Sunday. Regular closing days are Sunday and the second Monday, with extra closures posted each month (official news, November 2026: also closed 4 and 23 November). Reservations taken; a November 2026 diner phoned ahead on a holiday weekend and got a table (Tabelog; review). Counter and tatami table seating; parties of 4 to 20 (official site); the second floor, used for company parties decades ago (September 2026), was cleared and reopened after years as storage (shop’s Instagram, undated). Cards (JCB, AMEX, Diners); no e-money or QR; non-smoking; no parking (Tabelog). About 4–7 minutes’ walk from Kyoto Station.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'North of Shichijo — near Kyoto Station',
    cuisine: 'Seasonal izakaya with natural seafood and a long sake list (official site) · summer menu examples, tax included: sashimi of wild sea bream, striped jack or swordtip squid ¥1,450 each, pike conger otoshi or tataki from ¥1,800, three-kind platter from ¥1,600, five-kind from ¥2,400; raw oysters ¥1,200; clams steamed in sake or grilled ¥1,320; pike conger tempura from ¥1,600; manganji peppers ¥770; mentaiko ¥680; chicken wing karaage ¥750; lotus root tempura from ¥880; hokke ¥1,500; deep-fried nama-fu in dashi ¥1,000; yakitori 3 sticks ¥660; tsukune 2 sticks ¥660; overnight-dried squid ¥1,000; ray fin ¥770; agedashi tofu ¥770; draft beer ¥800; local sake from ¥750 to ¥2,000; hot sake ¥600 a go (official menu, read 2026-11-26) · taro tempura (December 2025, January 2026, November 2026), dashimaki with pickled ginger (November 2026), tsukune, firefly squid with sweet miso, oden and the house sushi (March 2026) · otoshi of edamame, sesame tofu, gizzards and walnuts with bonito flakes; warm pike conger tataki; shishamo and eggplant in dashi (September 2026) · Mori Izo shochu ¥900 (November 2026)',
    website: HP, gmaps: gm('蔵倉 居酒屋 京都 飴屋町244'), menu_url: MENU,
    notes: '[Izakaya · Kyoto Station] A hideaway izakaya in a renovated Taisho-era sake brewery building down a quiet street north of Shichijo, open near Kyoto Station for over thirty years: seasonal sashimi, robatayaki, taro tempura and dashimaki, with a long list of sake. Counter and tatami seating; parties up to 20. Closed Sunday and the second Monday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per the official site: an izakaya that has been near Kyoto Station for more than thirty years, in a renovated Taisho-era sake brewery building (the entrance sign said so, January 2026). A September 2026 diner remembered company year-end parties there almost thirty years earlier; a March 2026 regular first came over eighteen years ago. The shop’s own Instagram posts (undated, shown on its site) say foreign customers have increased, and that the staff felt down about staff shortages and too little English for foreign guests.',
      philosophy: null, specialty: 'Seasonal sashimi and sake.',
      anecdotes: [
        { text: 'A December 2025 reviewer praised the knife work on a three-kind sashimi platter, plump raw oysters, taro tempura good with just salt, and grilled shirako with sake.', source: R + 'B519553638/' },
        { text: 'A June 2026 reviewer expected fewer foreign customers because the shop is tucked away, while June and September 2026 diners found it lively with people of all ages from Japan and abroad.', source: R + 'B535489045/' },
        { text: 'A June 2026 reviewer warned that the wooden floor and tatami seating can be hard on the back over a long sitting.', source: R + 'B529568315/' },
      ],
      japanese_sources_summary: '公式サイト: 大正時代の酒蔵を改装した隠れ家居酒屋 蔵倉、京都駅前で30数年、カウンターと座敷のテーブル席、4名様〜20名様の宴会可、17:00〜23:00 (料理L.O.22:00、ドリンクL.O.22:30)、下京区飴屋町244 木村ビル。お品書き (税込、夏の一例): 天然 鯛・しまあじ・剣先いか 各1,450円、はもおとし・たたき1,800円〜、盛り合わせ3種1,600円〜・5種2,400円〜、天草 生がき1,200円、はまぐり酒蒸し・焼1,320円、はも天ぷら1,600円〜、明太子680円、手羽先唐揚750円、ほっけ1,500円、生麩あげだし1,000円、やきとり3本660円、つくね2本660円、生ビール中800円、地酒冷酒750円〜2,000円、熱燗一合600円。お知らせ (2026年10月30日): 日曜日と第二月曜日が定休日、11月は4日と23日も臨時休業。Instagram (日付なし): 外国人のお客様も増えてきた、英語力不足に落ち込んだ、物置のようになっていた2階を数年ぶりに使う。食べログ: 蔵倉 (クラクラ)、居酒屋、東洞院通七条上る飴屋町244、京都駅から徒歩約4分、月〜土 17:00〜23:00、日曜休み、カード可。',
      confidence: 'medium', sources: [TB, HP, ABOUT, MENU, NEWS, 'https://www.instagram.com/p/CrKhelyr67R/', 'https://www.instagram.com/p/CpwOVKrLCGO/', 'https://www.instagram.com/p/CrTdSFFvZLe/', R + 'B113377966/', R + 'B519553638/', R + 'B521728354/', R + 'B529568315/', R + 'B530206428/', R + 'B530748710/', R + 'B532320157/', R + 'B535489045/', R + 'B536991810/', R + 'B539231823/', R + 'B539606337/', R + 'B539768928/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Many foreign customers (shop’s Instagram; 2026 reviews), but the shop’s own post says the staff’s English is limited. Tabelog warns that phone service may be in Japanese only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区東洞院通七条上る飴屋町244 木村ビル',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with a November 2026 closing-day notice; Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (34.989749, 135.760910); not cross-checked (worker, no OSM this round); the shop’s Instagram gives 飴屋町246, the site and Tabelog 飴屋町244; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU],
    price_note: 'Official menu, tax included (read 2026-11-26; labelled a summer example — dishes change daily).', last_checked: TODAY, items: [
      it('盛り合わせ：3種', '', 'Sashimi platter, 3 kinds', 'from ¥1,600', 'Sashimi', 'ask', 'no', '5 kinds from ¥2,400.', 'sashimi3'),
      it('天草 生がき', '', 'Raw oysters from Amakusa', '¥1,200', 'Recommended', 'ask', 'no', '', 'oysters'),
      it('生麩あげだし', '', 'Deep-fried nama-fu in dashi', '¥1,000', 'Regulars', 'no', 'no', 'Nama-fu is wheat gluten.', 'namafu'),
      it('やきとり：3本', '', 'Yakitori (3 sticks)', '¥660', 'Robatayaki', 'ask', 'no', '', 'yakitori'),
      it('つくね：2本', '', 'Tsukune (2 sticks)', '¥660', 'Robatayaki', 'ask', 'no', '', 'tsukune'),
      it('手羽先唐揚', '', 'Fried chicken wings', '¥750', 'Regulars', 'no', 'no', '', 'tebasaki'),
      it('地酒：冷酒', '', 'Local sake, cold', '¥750–2,000', 'Drinks', 'ask', 'ask', '', 'sake'),
    ] }, {
    cuisine: '天然の魚介と旬の食材、日本酒の豊富な居酒屋 (公式サイト)・夏のお品書きの一例 (税込): 天然 鯛、しまあじ、剣先いかの刺身 各1,450円、はもおとし・たたき1,800円〜、盛り合わせ3種1,600円〜・5種2,400円〜、天草 生がき1,200円、はまぐり酒蒸し・焼1,320円、はも天ぷら1,600円〜、万願寺とうがらし770円、明太子680円、手羽先唐揚750円、れんこん天ぷら880円〜、ほっけ1,500円、生麩あげだし1,000円、やきとり3本660円、つくね2本660円、いか一夜干し1,000円、えいのひれ770円、揚げ出し豆腐770円、生ビール中800円、地酒冷酒750円〜2,000円、熱燗一合600円 (公式サイト、2026年11月26日閲覧)・里芋の天ぷら (2025年12月、2026年1月、2026年11月)、がりを添えただし巻き (2026年11月)、つくね、ホタルイカの甘味噌、おでん、店の名前のついた寿司 (2026年3月)・お通しは枝豆、胡麻豆腐、砂肝、くるみのおかか和え、温かいはものたたき、ししゃもと茄子のだし煮 (2026年9月)・Mori Izo 900円 (2026年11月)',
    neighborhood: '七条の北。京都駅のそば',
    gf_detail: 'GF — 要確認。グルテンフリーの記載なし。刺身、焼き魚、炉端焼きのほかに天ぷら、唐揚げ、生麩の揚げ物もある (公式サイトのお品書き)。やきとりはタレか塩で、調味料は記載なし。',
    vegan_detail: 'ヴィーガン不可。魚介と焼き鳥の居酒屋。2026年9月のお通しには砂肝やくるみのおかか和えが入り、茄子はししゃもと一緒にだしで煮てあった。',
    notes: '[居酒屋・京都駅] 七条の北の静かな通りにある、大正時代の酒蔵を改装した隠れ家居酒屋。京都駅前で30数年。旬の刺身、炉端焼き、里芋の天ぷら、だし巻き、日本酒の品揃えも豊富。カウンターと座敷、20名様までの宴会可。日曜と第二月曜休み。',
  });
}

// ================================================================ skips
skip('26038222', 'meals only with an overnight stay (Greg 2026-11-05), and a big-chain hotel (Greg 2026-11-08): hotel MONday 京都丸太町 is one of ten hotel MONday hotels (8 in Tokyo, 2 in Kyoto) listed on hotel-monday.com (©JHAT CO.,LTD.); all three Tabelog reviews (September 2022, March 2023, June 2025) are of the breakfast that came with the reviewers’ stay, and no source shows non-guests being served (https://tabelog.com/en/kyoto/A2601/A260302/26038222/).');

save();
