// Kyoto priority (kyoto-missed), worker osw13, batch 93 — lane: Tabelog id mod 6 = 0; rest tier, nearest-first.
// Drafts: 杢兵衛, 京都 個室 蟹いろは, 久露葉亭 濁屋善, コルドン ノワール.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-93');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };
const rv = (R, ids) => ids.map(b => R + b + '/');

skip('26031324', 'large parent: KIHARU Brasserie is the restaurant of Cross Hotel Kyoto, an ORIX Hotels & Resorts hotel — hotel restaurants of national hotel groups are large-parent skips, as with Grand Cafe Fauchon and CICON by NOHGA (coordinator ruling on osw13-92)');
skip('26021322', 'too thin to verify: 中村マキアート has a bare listing (no payment or menu detail) and its only 2025–26 review is one line (February 2025)');
skip('26032980', 'too thin to verify: カラーズ キヤマチ has no Tabelog reviews');
skip('26003250', 'chain: 京やきにく 弘 先斗町別邸 belongs to the 弘 group (yakiniku-hiro.com: eight 京の焼肉処 弘 shops plus the 京やきにく 弘 and 弘商店 concepts), already ruled a chain in earlier batches');
skip('26026650', 'too thin to verify: 天竺 広東倶楽部 has no review after June 2024');
skip('26027622', 'large parent: 竈炊き立てごはん 土井 祇園店 is a restaurant of the pickle maker 土井志ば漬本舗, same ruling as 竈炊き立てごはん 土井 京都駅八条口店 (26026058) and 土井志ば漬本舗 祇園店');
skip('26045736', 'too thin to verify: サウィ食堂 京都木屋町店 has no Tabelog reviews');
skip('26025288', 'chain: 肉屋の台所 京都木屋町ミート is a branch of 肉屋の台所 (official site nikuyanodaidokoro.com lists nine Tokyo shops — 五反田, 新宿, 渋谷道玄坂, 渋谷宮益坂, 飯田橋, 上野, 上野公園前, Ginza Premium, 新宿東口2号店 — and names this Kyoto shop as a sister)');
skip('26019528', 'too thin to verify: プラウデコ 錦店 (a tableware shop with a tea room) has no review after April 2023');
skip('26037534', 'too thin to verify: ネオトラディショナルダイナー has three reviews, the latest May 2023');

// ================================================================ 杢兵衛
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26000958/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://mokubei.jp/';
  put({
    id: 'kyoto_mokubee_gion', name: '杢兵衛 (Mokubee)', category: 'OMNI',
    lat: 35.002019, lng: 135.774606, cuisine_type: 'kaiseki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: soy-seasoned kaiseki, white-miso zoni, katsu and deep-fried dishes in the courses (2022–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi-based kaiseki with fish, Tajima beef and foie gras (2022–2026 reviews).',
    hours_raw: 'Tabelog: Tue dinner from 18:00 (last entry 19:30); Wed–Sat lunch from 12:00 (last entry 13:00) and dinner from 18:00 (last entry 19:30); closed Sunday and Monday. Reserve by the day before. Closing times are not listed. 40 seats: a 7-seat single-slab counter, tables and four private rooms (two-person and larger). Designated smoking area; the counter is non-smoking. Cards and e-money. On Hanamikoji in Gion-machi Minamigawa, across from the Gion Kaburenjo (February 2024). Renovated around 2020 (January 2022 review).',
    hours: {}, hours_status: 'by_reservation',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Hanamikoji opposite the Gion Kaburenjo — 10 min walk from Gion-Shijo',
    cuisine: 'A Gion kaiseki house with a wood-themed room and a single-slab counter, where the hassun comes with a seasonal waka poem (2022–2026 reviews) · winter: shredded crab over daikon, abalone porridge, white-miso zoni with spiny lobster and lotus-root mochi, Himi yellowtail (February 2024) · spring: fuki-no-tou sesame tofu, white amadai soup with sakura-shrimp dashi, bamboo shoots, Yanagawa-style eel, Tajima beef zabuton katsu, bamboo-shoot rice (2025) · summer: unagi, ayu, hamo, eggplant (August 2023) · autumn: a ginkgo rice parcel wrapped in leaves to start (September 2026) · Tajima beef and foie gras burger; straw-smoked tuna; karasumi grilled with miso (February 2025) · craft beer, sake, wine, with clearly listed prices (February 2024); wooden chopsticks to take home (2025)',
    website: SITE, gmaps: gm('杢兵衛 祇園 花見小路'), menu_url: SITE,
    notes: '[Kaiseki · Hanamikoji opposite the Kaburenjo, a fourth-generation Gion house] A wood-panelled kaiseki restaurant on Hanamikoji with a single-slab counter and private rooms, where a fourth-generation chef sends out seasonal courses — a poem with every hassun, white-miso zoni at New Year, hamo in summer — and wooden chopsticks to take home. Reserve a day ahead. Closed Sunday and Monday.',
    chef_bio: { chef_name: 'Shintaro Terada (as romanised in a February 2024 review)', roles: ['Chef-owner'], origin: null,
      background: 'A February 2024 reviewer names the chef as Shintaro Terada, fourth generation of a family whose original trade was timber — hence the wood-grain exterior — and says the restaurant holds a Michelin star; a January 2022 reviewer notes the interior was renovated by skilled carpenters around 2020. A January 2023 regular of 50 years writes that "the owner has changed over the years, and he happens to be a senior from my high school". Reviewers praise sincere, unflashy cooking and the owner\'s humour (February 2026); one February 2024 diner wished for a more vibrant hassun.',
      philosophy: 'Each hassun carries a handwritten seasonal waka poem (2022; September 2026).',
      specialty: 'Seasonal kaiseki; hassun with poems.',
      anecdotes: [
        { text: 'January 2023: "I have been coming to this restaurant for 50 years since my grandfather\'s time. For over 20 years now, I\'ve also visited every New Year\'s Day to celebrate my father\'s birthday."', source: R + 'B459050260/' },
        { text: 'September 2026: "The hassun featured a variety of small dishes, each accompanied by a seasonal waka poem."', source: R + 'B536169051/' },
      ],
      japanese_sources_summary: '食べログ: 杢兵衛、日本料理、東山区祇園町南側570-120、京阪祇園四条駅から徒歩10分、火 18:00〜19:30 (最終入店)、水〜土 12:00〜13:00・18:00〜19:30、日・月休み、前日までに要予約、40席 (カウンター7)、個室4、喫煙所あり (カウンターは禁煙)、カード・電子マネー可、サイト mokubei.jp。口コミ (2022年1月〜2026年9月、英語): 花見小路、祇園甲部歌舞練場の向かい、材木商がもとの木の意匠、一枚板のカウンター、四代目の料理人 (2024年2月の口コミでは Shintaro Terada)、ミシュランの星、八寸に手書きの和歌、白味噌の雑煮と伊勢海老、氷見のぶり、ふきのとうの胡麻豆腐、甘鯛のお椀、柳川風のうなぎ、但馬牛のカツ、筍ご飯、鱧、鮎、銀杏ご飯、但馬牛とフォアグラのバーガー、藁焼きのまぐろ、からすみの味噌焼き、お土産の箸、50年通う客 (2023年1月)。',
      confidence: 'medium', sources: [TB, SITE].concat(rv(R, ['B445040238', 'B448551277', 'B450106605', 'B459050260', 'B467126818', 'B470496545', 'B480636137', 'B480976134', 'B483999949', 'B501650558', 'B523510742', 'B536169051'])) },
    cultural_comfort: { level: 'japanese', note: 'Reserve a day ahead; private rooms.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区祇園町南側570-120',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site, with reviews through September 2026.' },
    pin_source: `Tabelog ${TB} (35.002019, 135.774606); GSI resolves only the parent lot 京都府京都市東山区祇園町南側570番地, about 176m away — marked approximate; nearest pin kyoto_ryurei_chashitsu_sabi 22m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [SITE],
    price_note: 'No course prices in the reviews; reviewers spent ¥15,000–39,999 a head (2022–2026).', last_checked: TODAY, items: [
      it('', '', 'Seasonal kaiseki (dinner)', null, 'Course', 'no', 'no', '2022–2026 reviews.', 'kaiseki_dinner'),
      it('', '', 'Kaiseki lunch', null, 'Course', 'no', 'no', 'March 2024; 2025.', 'kaiseki_lunch'),
    ] }, {
    cuisine: '木の意匠と一枚板のカウンターの祇園の会席の店で、八寸には季節の和歌が添えられる (2022〜2026年の口コミ)・冬: 大根にかにのほぐし身、あわびの粥、伊勢海老と蓮根餅の白味噌雑煮、氷見のぶり (2024年2月)・春: ふきのとうの胡麻豆腐、桜えびのだしの甘鯛のお椀、筍、柳川風のうなぎ、但馬牛のざぶとんのカツ、筍ご飯 (2025年)・夏: うなぎ、鮎、鱧、なす (2023年8月)・秋: 葉で包んだ銀杏ご飯から (2026年9月)・但馬牛とフォアグラのバーガー、藁焼きのまぐろ、からすみの味噌焼き (2025年2月)・クラフトビール、日本酒、ワイン、価格表示あり (2024年2月)、お土産の木の箸 (2025年)',
    neighborhood: '花見小路、祇園甲部歌舞練場の向かい。祇園四条から徒歩10分',
    gf_detail: 'グルテンフリーではない: 醤油の会席、白味噌の雑煮、カツや揚げ物 (2022〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 魚、但馬牛、フォアグラのだしの会席 (2022〜2026年の口コミ)。',
    notes: '[会席・花見小路の歌舞練場の向かい、四代目の祇園の店] 花見小路の木の内装の会席の店。一枚板のカウンターと個室で、四代目の料理人が八寸に和歌を添え、正月は白味噌の雑煮、夏は鱧と季節のコースを出し、お土産に木の箸。前日までに予約。日曜・月曜休み。',
  });
}

// ================================================================ 京都 個室 蟹いろは
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26044584/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:30', '14:00'], ['17:00', '23:00']); const WE = day(['11:30', '14:00'], ['16:00', '23:00']);
  put({
    id: 'kyoto_kani_iroha_gion', name: '京都 個室 蟹いろは (Kani Iroha)', category: 'OMNI',
    lat: 35.004014, lng: 135.774852, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: crab tempura, soy and miso dishes, red miso soup in every course (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: crab and seafood courses (2026 reviews).',
    hours_raw: 'Tabelog: Mon–Fri 11:30–14:00 and 17:00–23:00; Sat, Sun and holidays 11:30–14:00 and 16:00–23:00; closing days not fixed; menu varies with supply. Reservations taken; no phone cancellations outside opening hours. Service charge 10% — Tabelog, Japanese original 「サービス料10％を頂戴しております。」. 24 seats, all in private rooms for 2–6, plus a counter at the back (July and October 2026). Non-smoking. Cards; no e-money or QR. 3F-B of 井澤ビル on Shijo, Gion-machi Kitagawa. Opened March 2026 (September 2026 review).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shijo-dori, Gion north side — 3 min walk from Gion-Shijo exit 7',
    cuisine: 'A private-room crab restaurant serving snow-crab kaiseki courses (2026 reviews) · lunch omakase ¥8,000; dinner omakase ¥9,000; premium omakase ¥16,000, all including tax (July–October 2026) · courses run: crab with Shine Muscat and apple in white-sesame dressing; peanut tofu, sea bream and miso-cured cream cheese; yellowtail and snow-crab sashimi; a crab-shell platter heaped with uni and ikura with tosazu jelly; crab and eggplant (or persimmon) tempura with three salts; crab rice with ikura and egg, with a refill; red miso soup; dessert such as pumpkin pudding or strawberry panna cotta (September–October 2026) · summer crab hotpot (July 2026) · draft beer ¥1,100; Hibiki, Yoichi (2026)',
    website: null, gmaps: gm('京都 個室 蟹いろは 祇園'), menu_url: TB + 'dtlmenu/',
    notes: '[Crab kaiseki · Shijo-dori, Gion, private rooms only] A new (March 2026) all-private-room crab restaurant above Shijo in Gion: omakase courses from ¥8,000 at lunch, with a crab-shell platter heaped with uni and ikura, crab tempura and refillable crab rice. 10% service. Good for a quiet group meal.',
    chef_bio: { chef_name: null, roles: ['Head chef (unnamed)'], origin: null,
      background: 'Opened March 2026 (September 2026 review), with a head chef and a second chef in the kitchen and two floor staff. Tabelog lists it as a corporate member; no source names the operator. One October 2026 reviewer believed it to be the same restaurant as Gion Iwai under a different name. Reviewers praise value for Gion, timing in the private rooms and the crab rice.',
      philosophy: null,
      specialty: 'Snow-crab omakase; crab rice.',
      anecdotes: [
        { text: 'October 2026: "Despite the rising prices of both sea urchin and salmon roe, they served it in the same generous portion."', source: R + 'B525636688/' },
        { text: 'October 2026: "Even though we were in a private room, the staff paid close attention to the timing of the dishes."', source: R + 'B537437130/' },
      ],
      japanese_sources_summary: '食べログ: 京都 個室 蟹いろは、かに・魚介料理・居酒屋、東山区祇園町北側266 井澤ビル 3F-B、祇園四条駅から徒歩3分、月〜金 11:30〜14:00・17:00〜23:00、土日祝 11:30〜14:00・16:00〜23:00、不定休、仕入れにより内容変更あり、予約可、原文で「サービス料10％を頂戴しております。」、24席 (個室のみ、2〜6名)、禁煙、カード可、電子マネー・QR不可、法人会員。口コミ (2026年7月〜10月、英語): 2026年3月オープン、昼のおまかせ8,000円、夜のおまかせ9,000円、特選おまかせ16,000円 (税込)、シャインマスカットとりんごのかにの白和え、ピーナッツ豆腐と鯛とクリームチーズの味噌漬け、ぶりとずわいがにの刺身、うにといくらのかに甲羅盛り、土佐酢のジュレ、かにとなすの天ぷら、かにご飯 (おかわり可)、赤だし、かぼちゃプリン、夏のかに鍋、生ビール1,100円、厨房に料理長と二番手、Gion Iwai と同じ店ではとの声 (2026年10月)。',
      confidence: 'medium', sources: [TB].concat(rv(R, ['B525635343', 'B525636688', 'B531954580', 'B531980452', 'B532135882', 'B536180423', 'B537437130', 'B537441851', 'B537650257', 'B538352735', 'B538448428', 'B538528181'])) },
    cultural_comfort: { level: 'japanese', note: 'Private rooms only; 10% service charge.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側266 井澤ビル 3F-B',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog corporate-member listing with reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004068, 135.774852), offset 6m south because kyoto_da_ciro (same 井澤ビル, 5F) sits 1.4m from the Tabelog point — now 7.1m from it; cross-checked: GSI 京都府京都市東山区祇園町北側266番地 (lot) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B525635343/', R + 'B531980452/', R + 'B538352735/'],
    price_note: 'Course prices from 2026 reviews (tax included); 10% service charge.', last_checked: TODAY, items: [
      it('', '', 'Lunch omakase course', '¥8,000', 'Course', 'no', 'no', 'September–October 2026.', 'lunch_course'),
      it('', '', 'Dinner omakase course', '¥9,000', 'Course', 'no', 'no', 'October 2026.', 'dinner_course'),
      it('', '', 'Premium omakase course', '¥16,000', 'Course', 'no', 'no', 'July 2026.', 'premium_course'),
      it('', '', 'Draft beer', '¥1,100', 'Drink', 'no', 'ask', 'July 2026.', 'beer'),
    ] }, {
    cuisine: 'ずわいがにの会席コースを出す個室のかに料理店 (2026年の口コミ)・昼のおまかせ8,000円、夜のおまかせ9,000円、特選おまかせ16,000円、いずれも税込 (2026年7〜10月)・流れ: シャインマスカットとりんごのかにの白和え、ピーナッツ豆腐と鯛とクリームチーズの味噌漬け、ぶりとずわいがにの刺身、うにといくらを盛ったかに甲羅と土佐酢のジュレ、かにとなす (または柿) の天ぷらと3種の塩、いくらと錦糸卵のかにご飯 (おかわり可)、赤だし、かぼちゃプリンやいちごのパンナコッタ (2026年9〜10月)・夏のかに鍋 (2026年7月)・生ビール1,100円、響、余市 (2026年)',
    neighborhood: '四条通、祇園町北側。祇園四条駅7番出口から徒歩3分',
    gf_detail: 'グルテンフリーではない: どのコースにもかにの天ぷら、醤油や味噌の料理、赤だし (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: かにと魚介のコース (2026年の口コミ)。',
    notes: '[かに会席・祇園の四条通、全室個室] 2026年3月にできた、四条通沿いのビル3階の全室個室のかに料理店。昼8,000円からのおまかせで、うにといくらを盛ったかに甲羅、かにの天ぷら、おかわりできるかにご飯。サービス料10%。落ち着いて食事をしたい少人数に。',
  });
}

// ================================================================ 久露葉亭 濁屋善
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26016534/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '21:30']);
  put({
    id: 'kyoto_clovertei_nigoriya_zen', name: '久露葉亭 濁屋善 (Clovertei Nigoriya Zen)', category: 'OMNI',
    lat: 35.003365, lng: 135.774932, cuisine_type: 'obanzai',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tempura, nama-fu dengaku, soy-sauced bowls and sukiyaki (2022–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi-based obanzai, chicken and duck sets; the tofu-steak and yuba dishes are not described as vegan (2022–2026 reviews).',
    hours_raw: 'Tabelog: daily 11:30–21:30 (last order 21:00); closing days not fixed; hours may change. Cash only according to reviewers (November 2025; March 2026), though Tabelog lists Amex — bring cash. 46 seats. Non-smoking. Down a short lane at the first turning south of Shijo on Hanamikoji, west side, marked by red lanterns (November 2025; June 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Lane off Hanamikoji just south of Shijo, Gion — 8 min walk from Gion-Shijo',
    cuisine: 'A budget Kyoto-home-cooking set-meal house on Hanamikoji (2022–2026 reviews) · bento sets in kokeshi-style boxes — "Hannari", "Mattari", Kyoto comfort with chicken soboro rice — ¥1,980 (2022; November 2024) · yuba udon set ¥1,980 (November 2022); yuba rice bowl set with fresh yuba (March 2026) · tofu steak set with fried tofu and mushrooms in a clay pot, yuba and mizuna salad, vegetable dengaku skewers (November 2025) · duck set with tempura and dengaku (December 2025); chicken sukiyaki gozen (October 2023) · chirimen-sansho rice, dashimaki, chawanmushi (October 2024) · beer and sake (2024; June 2026)',
    website: null, gmaps: gm('久露葉亭 濁屋善 花見小路'), menu_url: null,
    notes: '[Kyoto set meals · lane off Hanamikoji, Gion, cheap by Gion standards] A red-lantern, wood-and-washi set-meal house a step off Hanamikoji: obanzai bento in kokeshi boxes, yuba, tofu steak and duck sets mostly around ¥2,000. Reviews swing from charming to poor — vacuum-packed side dishes (2022), a cold, dry yuba bowl (March 2026). Cash only, reviewers say.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Reviewers since 2022 describe a nostalgic, wood-and-washi room with Gion Matsuri paintings and maiko decorations, quick service and prices well below the surrounding ryotei. Criticism is sharp: obanzai that "all seemed like vacuum-packed side dishes" (November 2022), chicken sukiyaki served raw to cook at the table with a small rice portion (October 2023), and in March 2026 a set where "the tamagoyaki… was cold, the taro was cold" and the yuba tough.',
      philosophy: null,
      specialty: 'Obanzai bento; yuba.',
      anecdotes: [
        { text: 'November 2025: "The walls of the restaurant are adorned with paintings of the Gion Matsuri festival and decorations of maiko… Please note that payment is \'cash only.\'"', source: R + 'B516931977/' },
        { text: 'March 2026: "The only good thing was that the fresh yuba was warm, flavorful, and delicious."', source: R + 'B523475611/' },
      ],
      japanese_sources_summary: '食べログ: 久露葉亭 濁屋善、日本料理、東山区花見小路通四条下ル一筋目西南角、京阪祇園四条駅から徒歩8分、毎日 11:30〜21:30 (L.O. 21:00)、不定休、46席、禁煙、カード (AMEX) 可とあるが口コミでは現金のみ。口コミ (2022年11月〜2026年7月、英語): 花見小路から入った路地、赤提灯、木と和紙の灯り、祇園祭の絵と舞妓の飾り、こけしの箱のおばんざい弁当 (はんなり、まったり、鶏そぼろ) 1,980円、湯葉うどんのセット1,980円、湯葉丼のセット、豆腐ステーキの土鍋セット、湯葉と水菜のサラダ、京野菜の田楽、鴨のセット、鶏すき御膳、ちりめん山椒ご飯、だし巻き、茶碗蒸し、真空パックのようなおばんざい (2022年11月)、料理が冷たい (2026年3月)、現金のみ (2025年11月、2026年3月)。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B456107647', 'B483633630', 'B486713185', 'B493983123', 'B496386064', 'B516931977', 'B519962720', 'B523475611', 'B529985275', 'B530964071', 'B531309384'])) },
    cultural_comfort: { level: 'japanese', note: 'Cash only (reviews); quick set meals.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区花見小路通四条下ル一筋目西南角',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews through July 2026.' },
    pin_source: `Tabelog ${TB} (35.003365, 135.774932); address has no town or lot (花見小路通四条下ル一筋目西南角) — GSI resolves only to 祇園町南側 at ward level, so marked approximate; nearest pin kyoto_grand_marble_gion 22m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B456107647/', R + 'B496386064/'],
    price_note: 'Set prices from 2022 and 2024 reviews (tax included).', last_checked: TODAY, items: [
      it('', '', 'Obanzai bento set (Hannari / Mattari / Kyoto comfort)', '¥1,980', 'Set', 'no', 'no', 'November 2022; November 2024.', 'obanzai_bento'),
      it('', '', 'Yuba udon set', '¥1,980', 'Set', 'no', 'no', 'November 2022.', 'yuba_udon'),
      it('', '', 'Tofu steak set', null, 'Set', 'no', 'no', 'November 2025.', 'tofu_steak_set'),
    ] }, {
    cuisine: '花見小路の手頃な京の家庭料理の定食の店 (2022〜2026年の口コミ)・こけしの箱のお弁当、「はんなり」「まったり」、鶏そぼろご飯の弁当1,980円 (2022年、2024年11月)・湯葉うどんのセット1,980円 (2022年11月)、生湯葉付きの湯葉丼のセット (2026年3月)・油揚げときのこの土鍋の豆腐ステーキのセット、湯葉と水菜のサラダ、京野菜の田楽串 (2025年11月)・天ぷらと田楽の鴨のセット (2025年12月)、鶏すき御膳 (2023年10月)・ちりめん山椒ご飯、だし巻き、茶碗蒸し (2024年10月)・ビールと日本酒 (2024年、2026年6月)',
    neighborhood: '花見小路四条下ル一筋目、祇園。祇園四条から徒歩8分',
    gf_detail: 'グルテンフリーではない: 天ぷら、生麩田楽、醤油の丼、すき焼き (2022〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: だしのおばんざい、鶏や鴨のセット。豆腐ステーキや湯葉もヴィーガンとは書かれていない (2022〜2026年の口コミ)。',
    notes: '[京の定食・花見小路の路地、祇園にしては手頃] 花見小路から一歩入った赤提灯の木と和紙の定食の店。こけしの箱のおばんざい弁当、湯葉、豆腐ステーキ、鴨のセットがおおむね2,000円前後。真空パックのような惣菜 (2022年)、冷めた硬い湯葉丼 (2026年3月) など評価は分かれる。口コミでは現金のみ。',
  });
}

// ================================================================ コルドン ノワール
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26004606/'; const R = TB + 'dtlrvwlst/';
  const MO = day(['18:00', '25:00']); const H = day(['18:00', '26:00']);
  put({
    id: 'kyoto_cordon_noir_kiyamachi', name: 'コルドン ノワール (Cordon Noir)', category: 'OMNI',
    lat: 35.00826, lng: 135.770901, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: whisky and cocktails; snacks such as raisin butter and nuts (2022 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask: many cocktails may suit, but some use milk or cream (Amaretto milk, December 2022); raisin butter is dairy.',
    hours_raw: 'Tabelog: Mon 18:00–01:00; Wed–Sun 18:00–02:00; closed Tuesday; hours may change. Reservations taken. A service charge applies — a December 2022 reviewer paid about ¥3,500 for three drinks and nuts "including service charge"; amount not stated. 32 seats: a 16-seat single-plank counter and tables. Smoking allowed; cigars sold (cash only for cigars, March 2024). Cards and e-money. 3rd floor of 松嶋屋ビル on Kiyamachi below Sanjo (Zundouya ramen on the ground floor).',
    hours: { 0: MO, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi below Sanjo — 2 min walk from Sanjo',
    cuisine: 'A long-standing whisky and cigar bar with omakase cocktails and no fixed cocktail menu (2022–2026 reviews) · rare bottlings and independent-bottler whiskies — Askaig ¥1,400, Miltonduff, Laphroaig sherry finish, Culloden 2004, Glenfarclas 60%, Booker\'s 63% (2022–2026) · cocktails built from your stated tastes — gin and tonic, dry martini, Manhattan, piña colada, mojito, a cherry-blossom and sake drink, hibiscus fruit cocktail, Amaretto milk (2022–2026) · raisin butter ¥800; nuts (2022) · cigars (2020; 2024)',
    website: null, gmaps: gm('Cordon Noir 木屋町 三条'), menu_url: null,
    notes: '[Whisky & cigar bar · Kiyamachi below Sanjo, omakase cocktails] A chic, long-running third-floor bar on Kiyamachi with a single-plank counter and a wall of rare whiskies: tell the bartender what you like and get a cocktail built to suit, or pick an unusual bottling. Cigars too, so it can be smoky. Open late; closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Owner-bartender (unnamed)'], origin: null,
      background: 'Reviewers describe a well-known, long-established Kyoto bar (September 2022) with a remarkable whisky selection, no cocktail menu and attentive service that welcomes beginners (2023–2024). In February 2026 "the owner and a young part-timer" were working, the owner "friendly, approachable" and very knowledgeable. Criticism: a Manhattan made with Scotch for a bourbon lover (September 2022), and smoke from cigars carried by the air conditioning (March 2024).',
      philosophy: null,
      specialty: 'Omakase cocktails; rare whiskies.',
      anecdotes: [
        { text: 'December 2022: "If you specify your preferences and then leave the final choice to the bartender, you can encounter unique drinks that you might not normally have the chance to try."', source: R + 'B457777426/' },
        { text: 'February 2026: "I entered to find a long counter made from a single piece of wood and a remarkable number of bottles on display."', source: R + 'B523145377/' },
      ],
      japanese_sources_summary: '食べログ: コルドン ノワール、バー、中京区木屋町通三条下ル石屋町121 松嶋屋ビル3F、三条から161m、月 18:00〜翌1:00、水〜日 18:00〜翌2:00、火曜休み、予約可、32席 (カウンター16、テーブル16)、喫煙可、葉巻あり、カード・電子マネー可。口コミ (2020年3月〜2026年2月、英語): 老舗のオーセンティックバー、1階はずんどう屋、一枚板のカウンター、珍しいボトラーズのウイスキー (アスカイグ1,400円、ミルトンダフ、ラフロイグのシェリーフィニッシュ、カロデン2004、グレンファークラス60%、ブッカーズ63%)、メニューなしのおまかせカクテル (ジントニック、ドライマティーニ、マンハッタン、ピニャコラーダ、モヒート、桜と日本酒のカクテル、ハイビスカス、アマレットミルク)、レーズンバター800円、ナッツ、葉巻は現金のみ (2024年3月)、3杯とナッツでサービス料込み約3,500円 (2022年12月)、店主と若いアルバイト (2026年2月)、葉巻の煙 (2024年3月)。',
      confidence: 'medium', sources: [TB].concat(rv(R, ['B448926075', 'B452055983', 'B454137774', 'B457777426', 'B465904375', 'B475844725', 'B481276098', 'B494903497', 'B505246337', 'B509838165', 'B523145377'])) },
    cultural_comfort: { level: 'japanese', note: 'No cocktail menu — describe your taste; smoking and cigars allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区木屋町通三条下ル石屋町121 松嶋屋ビル3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated June 2025, January 2026 and February 2026.' },
    pin_source: `Tabelog ${TB} (35.008260, 135.770901); cross-checked: GSI 京都府京都市中京区石屋町121番地 (lot) 4m; nearest pin kyoto_uotana_fumibun 5.7m (no offset needed); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B448926075/', R + 'B457777426/'],
    price_note: 'Prices from 2022 reviews; service charge applies.', last_checked: TODAY, items: [
      it('', '', 'Askaig whisky (glass)', '¥1,400', 'Whisky', 'ask', 'ask', 'May 2022.', 'whisky'),
      it('', '', 'Raisin butter', '¥800', 'Snack', 'ask', 'no', 'May 2022.', 'raisin_butter'),
      it('', '', 'Omakase cocktail', null, 'Cocktail', 'ask', 'ask', '2022–2026 reviews.', 'omakase_cocktail'),
    ] }, {
    cuisine: 'メニューのないおまかせカクテルと葉巻のある老舗のウイスキーバー (2022〜2026年の口コミ)・珍しいボトルやボトラーズのウイスキー、アスカイグ1,400円、ミルトンダフ、ラフロイグのシェリーフィニッシュ、カロデン2004、グレンファークラス60%、ブッカーズ63% (2022〜2026年)・好みを伝えて作るカクテル、ジントニック、ドライマティーニ、マンハッタン、ピニャコラーダ、モヒート、桜と日本酒のカクテル、ハイビスカスのフルーツカクテル、アマレットミルク (2022〜2026年)・レーズンバター800円、ナッツ (2022年)・葉巻 (2020年、2024年)',
    neighborhood: '木屋町三条下ル。三条から徒歩2分',
    gf_detail: '要確認: ウイスキーとカクテル、レーズンバターやナッツのつまみ (2022年の口コミ)。',
    vegan_detail: '要確認: 多くのカクテルは合うかもしれないが、ミルクやクリームを使うものも (アマレットミルク、2022年12月)。レーズンバターは乳製品。',
    notes: '[ウイスキーと葉巻のバー・木屋町三条下ル、おまかせカクテル] 木屋町のビル3階の、一枚板のカウンターと珍しいウイスキーの並ぶ老舗のバー。好みを伝えればカクテルを作ってくれ、珍しいボトルも。葉巻があるので煙たいことも。深夜まで、火曜休み。',
  });
}

save();
