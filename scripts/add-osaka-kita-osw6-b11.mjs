// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), circle umeda, Tabelog id odd; worker osw6, batch 11.
//   + 鮨 龍来 Sushi Tatsuki (¥4,400 entertainment omakase with a ramen finish, Kitashinchi)
//   + 北新地 鮨 まつ井 Kitashinchi Sushi Matsui (Edomae sushi by a Ginza Kyubey-trained chef, since April 2026)
//   + 中国料理 燦宮 Chinese Restaurant SANGU (Chinese courses on the 39th floor of Umeda Sky Building)
//   + 北新地 鮨 一献 Kitashinchi Sushi Ikken (sushi omakase, two kinds of rice, since 2023)
//   - 泉州かしみん焼き はこ 北新地店 27116529 skipped: sister of 弐箱, already in data (osaka_futahako_kashimin_uranamba).
//   Picked with `queue.mjs osaka-kita next core 80 umeda` (2026-11-02, after b10): odd ids in order 27153571, 27116529,
//   27154737, 27000691, 27136687.
//   Chain check: Tatsuki is the sister of a Shinsaibashi sushi shop (October 2026 review; that shop not identified). Matsui belongs
//   to a restaurant group that also runs Gyoza no Kacchan (September 2026 review); no other shop of the group is in data. SANGU is
//   the Chinese restaurant of Umeda Sky Building (skybldg.co.jp). Ikken: no other shop found. None of the four is in
//   data/osaka.json (grep by id, name and address, 2026-11-02). Tabelog URLs copied from each listing.txt line 1.
//   Note: Tatsuki is at 杉の家ビル 3F, the same address as osaka_oniku_takumi_kitashinchi (address_ja "大阪府大阪市北区
//   曽根崎新地1-6-23 杉の家ビル B1F").
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw6-11');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27116529', '泉州かしみん焼き はこ 北新地店: sister shop of 弐箱 (a September 2025 review: "This place is a sister restaurant of Nibako"; the same reviewer, on an October 2021 visit: "The main branch is Nibako located in Namba"), already in data as osaka_futahako_kashimin_uranamba.');

// ================================================================ 鮨 龍来
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27153571/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '22:00']);
  put({
    id: 'osaka_sushi_tatsuki_kitashinchi', name: '鮨 龍来 (Sushi Tatsuki)', category: 'OMNI',
    lat: 34.697593, lng: 135.498732, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The course includes tempura (hamo and lotus root) and ends with a ramen of wheat noodles; nigiri are usually seasoned with soy sauce, which normally contains wheat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi omakase ending with a ramen in a fish-bone broth.',
    hours_raw: 'Mon–Sat 17:30–22:00 in two sittings, 17:30–19:30 and 20:00–22:00; closed Sundays and holidays (Tabelog). Online booking only, no phone bookings; a party of eight takes the whole counter (Tabelog). Cards (VISA, Master, JCB, AMEX); no e-money or QR (Tabelog). 8 counter seats; non-smoking; children welcome (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kitashinchi, 杉の家ビル 3F (the lift opens at the door) — 4 min from JR Kitashinchi Stn',
    cuisine: 'Counter sushi made approachable and theatrical: an omakase of about 15 dishes for ¥4,400 with the day\'s fish, aged tuna, the chef\'s grandmother\'s "gyaku-sainari" (upside-down inari) and a ramen finish (Tabelog; 2026 reviews) · dishes in September–October 2026: scallops and shimeji in Tosa-vinegar jelly; Kochi bonito; hamo and lotus-root tempura; squid nigiri with a dusting of bamboo charcoal; grilled sawara; Oma tuna; dessert · ramen in a broth from the day\'s fish trimmings, in small, medium or large (October 2026) · sake and shochu (e.g. Kurokirishima\'s 110th-anniversary Hyakujyusyu); Sapporo Akaboshi medium bottle ¥880 (October 2026)',
    website: null, gmaps: gm('鮨 龍来 北新地'), menu_url: null,
    notes: "[Sushi · Kitashinchi, ¥4,400 entertainment omakase] An eight-seat sushi counter on the third floor of a Kitashinchi building that sets out to make counter sushi unintimidating. The evening starts with the lights down and a video of the chef's life on a big screen (a kendo background is part of the story), then runs through about fifteen dishes for ¥4,400: Tosa-vinegar scallops, bonito, hamo tempura, charcoal-dusted squid, aged tuna, an upside-down inari from the chef's grandmother's recipe, and a fish-bone ramen that several diners rate above most ramen shops. Two sittings a night, 17:30 and 20:00, booked online only. Diners describe a cheerful owner who chats with everyone; two people spent about ¥11,000 with drinks (October 2026). A sister of a Shinsaibashi sushi shop, per one review.",
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed; "cheerful and friendly", August 2026 review)'], origin: 'Sister restaurant of a sushi shop in Shinsaibashi (October 2026 review).', background: 'Shop text (Tabelog): friendly, authentic counter sushi in Kitashinchi, each piece made in the spirit of "ippon shobu" from kendo; an omakase of the day\'s freshest ingredients, aged tuna and the "gyaku-sainari" the chef\'s grandmother used to make; "Entertainment Sushi". A September 2026 diner describes the opening video of the chef\'s life; an October 2026 diner notes the head chef\'s kendo background. The Tabelog name field reads "Sushi Tatsuki", while its shop text calls it "Sushi Ryurai".', philosophy: 'Counter sushi that is approachable, memorable and entertaining (Tabelog).', specialty: 'Gyaku-sainari; fish-bone ramen; ¥4,400 omakase.',
      anecdotes: [
        { text: '"The lights in the restaurant went out... In the darkness... What appeared on the large TV was... A memoir... from childhood to adulthood..." — September 2026.', source: R + 'B536544791/' },
        { text: '"It seems like it was seasoned only with salt and sugar, but honestly, it could compete with any ramen shop!" — October 2026, the ramen finish; ¥11,000 for two.', source: R + 'B534859231/' },
        { text: '"On top of the sweet and tender squid, there was even bamboo charcoal!" — September 2026, the ¥4,400 course.', source: R + 'B536516493/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B525780901/', R + 'B534498014/', R + 'B534859231/', R + 'B535988730/', R + 'B536516493/', R + 'B536544791/', R + 'B536601354/', R + 'B536619081/', R + 'B537020768/', R + 'B537607650/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One set course at an eight-seat counter, booked online; the chef talks with every guest (2026). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区曾根崎新地1-6-23 杉の家ビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎新地一丁目6番23号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B535988730/'],
    price_note: 'The course from the Tabelog listing (tax included); beer from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Omakase course of about 15 dishes (nigiri, upside-down inari, grilled dishes, ramen)', '¥4,400', 'Course', 'no', 'no', 'Tabelog listing; 2026 reviews.', 'omakase_course'),
      it('', '', 'Sapporo Akaboshi (medium bottle)', '¥880', 'Drinks', '', '', 'October 2026 review.', 'akaboshi'),
    ] }, {
    cuisine: '気軽で楽しいカウンターの鮨: その日の魚、熟成マグロ、大将の祖母がよく作っていた「gyaku-sainari」(逆さのいなり)、締めのラーメンまで約15品のおまかせ4,400円 (食べログ、2026年の口コミ)・2026年9〜10月の料理: ホタテとしめじの Tosa 酢のジュレ、Kochi のカツオ、はもとれんこんの天ぷら、竹炭をまぶしたイカの握り、サワラの焼き物、Oma のマグロ、デザート・その日の魚のアラのスープのラーメン、小・中・大から (2026年10月)・日本酒と焼酎 (Kurokirishima の110周年の Hyakujyusyu など)、Sapporo Lager Akaboshi の中瓶880円 (2026年10月)',
    neighborhood: '北新地、杉の家ビル 3階 (エレベーターを降りるとすぐ入口)。JR北新地駅から徒歩4分',
    gf_detail: '要確認。グルテンの情報なし。コースには天ぷら (はもとれんこん) があり、締めは小麦の麺のラーメン。握りはふつう小麦を含む醤油で味つけする。',
    vegan_detail: 'ヴィーガンではありません。魚のアラのスープのラーメンで締める鮨のおまかせ。',
    notes: '[鮨・北新地、4,400円の楽しいおまかせ] 北新地のビルの3階にある8席の鮨のカウンターで、カウンターの鮨を気軽に楽しめるようにという店。照明が消えて大画面に大将の半生のビデオが流れるところから始まり (剣道の話も)、約15品で4,400円: Tosa 酢のホタテ、カツオ、はもの天ぷら、竹炭をまぶしたイカ、熟成マグロ、大将の祖母のレシピの逆さのいなり、そしてラーメン屋にも負けないという声の多い魚のアラのラーメン。1日2回、17時半と20時からで、予約はネットのみ。誰とでも話す明るい大将という声があり、2026年10月には2人で飲み物を入れて11,000円ほど。口コミによると心斎橋の鮨屋の姉妹店。',
  });
}

// ================================================================ 北新地 鮨 まつ井
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27154737/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '23:00']);
  put({
    id: 'osaka_kitashinchi_sushi_matsui', name: '北新地 鮨 まつ井 (Kitashinchi Sushi Matsui)', category: 'OMNI',
    lat: 34.697672, lng: 135.49901, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Courses include tempura (fig, September–October 2026) and dishes with soy and liver sauces; soy sauce for sashimi is self-serve at the counter (September 2026) and normally contains wheat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an Edomae sushi omakase with abalone, soft-shelled turtle and shark fin.',
    hours_raw: 'Mon–Sat and the day before a holiday 18:00–23:00, in two sittings starting at 18:00 or 20:30; closed Sundays and holidays (Tabelog). The ¥11,000 nigiri course is for the 20:30 sitting only (Tabelog). Dress code: no shorts, flip-flops or tank tops (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay); no e-money or QR (Tabelog). 8 counter seats (Tabelog); a review also mentions table seats and private rooms (October 2026); non-smoking (Tabelog). Opened 24 April 2026 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kitashinchi, FourSeasonGOAビル B1F, down the stairs — 3 min from JR Kitashinchi Stn exit 11-43',
    cuisine: 'Edomae sushi on red-vinegar rice by a chef trained at Ginza Kyubey, with fish aged, salted, vinegar-cured or kombu-cured (Tabelog) · courses (Tabelog, tax included): 20 dishes with 11 nigiri, abalone with liver sauce and a dobin-mushi of soft-shelled turtle and shark fin ¥16,500 (¥15,000 before tax); a nigiri course of 10 pieces ¥11,000 (20:30 only); a November special "Nigiri by Yoshikawa" on the 11th and 18th · dishes in 2026 reviews: grilled bluefin tuna brain and cheek; Akashi sea bream; Nagasaki isaki; hamo jelly; Awaji horse mackerel; kohada; winter melon with burdock chips; fig tempura with plum sauce; oysters; chawanmushi · sake',
    website: null, gmaps: gm('北新地 鮨 まつ井'), menu_url: null,
    notes: "[Sushi · Kitashinchi, Edomae from a Kyubey-trained chef] A basement sushi counter in Kitashinchi, opened in April 2026, where a chef trained at Ginza Kyubey serves Edomae sushi on red-vinegar rice. The ¥16,500 course runs to twenty dishes: grilled tuna cheek and brain to start, hamo jelly or seasonal simmered dishes, abalone with liver sauce, a turtle-and-shark-fin dobin-mushi, and eleven nigiri; a nigiri-only course is ¥11,000 at the late sitting. Most diners found it good value for Kitashinchi. One September 2026 diner was less happy: the same piece was made for every guest at once, sashimi soy sauce was self-serve, and staff let neighbours play videos aloud. Part of a group that also runs Gyoza no Kacchan, per that review. Dress smartly; two sittings, 18:00 and 20:30.",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed), trained at Ginza Kyubey (Tabelog)'], origin: 'Part of a restaurant group that also operates Gyoza no Kacchan (September 2026 review); "part of a group that operates several dining establishments" (July 2026 review).', background: 'Shop text (Tabelog): "A chef trained at Ginza Kyubey" brings Edomae technique to Kitashinchi; red-vinegar rice; ageing, salting, vinegar curing and kombu curing; simmered, grilled and steamed dishes tailored to each ingredient. Opened 24 April 2026.', philosophy: 'Authentic Edomae technique with a playful spirit (Tabelog).', specialty: 'Edomae omakase on red-vinegar rice.',
      anecdotes: [
        { text: '"However, it seems they prepare the same type of sushi for each guest and serve it all at once, possibly to keep the flow going." — September 2026.', source: R + 'B536320998/' },
        { text: '"We started with the cheek and brain meat of bluefin tuna! The rich umami and sweetness of the fat were exhilarating right from the start." — October 2026, the 20-dish course.', source: R + 'B538244030/' },
        { text: '"The rice was so tasty that I wanted to have more sushi!" — October 2026.', source: R + 'B537365682/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B530869061/', R + 'B531899439/', R + 'B532456346/', R + 'B534427011/', R + 'B535959816/', R + 'B536320998/', R + 'B536612831/', R + 'B536623361/', R + 'B537365682/', R + 'B538244030/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set courses in two sittings; smart dress (Tabelog). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区曽根崎新地1-9-8 FourSeasonGOAビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; opened April 2026; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎新地一丁目9番8号 (go) 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B538244030/'],
    price_note: 'Courses from the Tabelog listing (tax included); confirmed by 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Omakase of 20 dishes with 11 nigiri, abalone and dobin-mushi', '¥16,500', 'Course', 'ask', 'no', 'Tabelog listing; 2026 reviews.', 'omakase_20'),
      it('', '', 'Nigiri course of 10 pieces (20:30 sitting only)', '¥11,000', 'Course', 'ask', 'no', 'Tabelog listing.', 'nigiri_10'),
    ] }, {
    cuisine: 'Ginza Kyubey で修業した料理人の赤酢のシャリの江戸前鮨、熟成、塩、酢じめ、昆布じめの仕事 (食べログ)・コース (食べログ、税込): 握り11貫、アワビの肝ソース、すっぽんとフカヒレの dobin-mushiの20品16,500円 (税抜15,000円)、握り10貫のコース11,000円 (20時半のみ)、11月の11日と18日は「Nigiri by Yoshikawa」・2026年の口コミの料理: 本マグロの脳天とほほ肉の焼き物、Akashi の鯛、Nagasaki のイサキ、はものジュレ、Awaji のアジ、コハダ、冬瓜とごぼうチップ、いちじくの天ぷらの梅ソース、牡蠣、茶碗蒸し・日本酒',
    neighborhood: '北新地、FourSeasonGOAビルの地下1階、階段を下りる。JR北新地駅11-43出口から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。コースには天ぷら (いちじく、2026年9〜10月) や醤油や肝のソースの料理がある。刺身の醤油はカウンターに置いてあり (2026年9月)、ふつう小麦を含む。',
    vegan_detail: 'ヴィーガンではありません。アワビ、すっぽん、フカヒレを使う江戸前鮨のおまかせ。',
    notes: '[鮨・北新地、Kyubey 出身の江戸前] 2026年4月にオープンした北新地の地下の鮨のカウンターで、Ginza Kyubey で修業した料理人が赤酢のシャリの江戸前鮨を握る。16,500円のコースは20品で、最初にマグロのほほ肉と脳天の焼き物、はものジュレや季節の炊き合わせ、アワビの肝ソース、すっぽんとフカヒレの dobin-mushi、握り11貫。握りだけのコースは遅い回で11,000円。北新地にしてはお得という声が多い。2026年9月には、同じネタを全員に一度に握る、刺身の醤油がセルフ、となりのお客さんが動画を音を出して見ていてもスタッフが注意しなかったと不満の声も。その口コミによると、Gyoza no Kacchan も営むグループの店。きちんとした服装で、18時と20時半の2回制。',
  });
}

// ================================================================ 中国料理 燦宮
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27000691/'; const R = TB + 'dtlrvwlst/';
  const OFF = 'https://www.skybldg.co.jp/cafeshop/sangu/';
  const WD = day(['11:30', '15:00'], ['17:00', '22:00']), WE = day(['11:00', '15:30'], ['17:00', '22:00']);
  put({
    id: 'osaka_chinese_sangu_sky_building', name: '中国料理 燦宮 (Chinese Restaurant SANGU)', category: 'OMNI',
    lat: 34.705287, lng: 135.490559, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Courses include dim sum, soup dumplings, noodles in thick sauce, Peking duck with sweet miso, black-vinegar sweet-and-sour pork and dishes in seafood soy sauce and XO sauce, which usually contain wheat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Chinese courses of shark fin, seafood, duck, pork and wagyu, with chicken stocks.',
    hours_raw: 'Mon–Fri 11:30–15:00 (last order food 14:00) and 17:00–22:00 (last order food 21:00); Sat, Sun and holidays 11:00–15:30 (last order food 14:30) and 17:00–22:00; closing days not fixed; hours may change, so phone ahead (Tabelog). Cancellation: 20% from two days before, 50% from the day before, 100% on the day (Tabelog). Service charge 10% (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), IC cards and other e-money, PayPay, d Barai, au PAY (Tabelog). 120 seats: 60 on the dining floor and four private rooms for 2–60; children\'s meals available (Tabelog; October 2026). Parking in Umeda Sky Building B2F, ¥500 the first hour, with free time for diners (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Umeda Sky Building Tower East, 39F — 7 min from JR Osaka Stn central north exit',
    cuisine: 'Chinese courses with Cantonese technique, from shark fin and wagyu to seasonal vegetables and fish; aged Shaoxing wine, wine and Chinese tea; lunch from ¥3,000, dinner from ¥8,000 (Tabelog) · lunch courses (Tabelog, tax included): weekday "Botan" ¥4,000 (large prawns in mango mayonnaise, dim sum, noodles in thick sauce); weekend "Fubi" ¥5,000 (three appetizers, mango-mayonnaise prawns, steamed amadai in seafood soy sauce, chicken with aromatic sauce); classic course ¥6,000 with Kesennuma shark fin over chicken-soup rice or in oyster noodles, Peking duck, black-vinegar pork, soup dumplings · an autumn lunch of abalone, wagyu cheek and Shine Muscat ¥7,000 (September 2026); a Magnolia course with shark-fin soup, abalone and steamed sea bream (September 2026); Tajima chicken and wagyu yakisoba on the Fubi course (October 2026) · dinner in October 2026: crab-miso soup, autumn salmon, Peking duck, abalone with XO sauce, braised wagyu cheek, seafood fried rice, Shine Muscat dessert',
    website: OFF, gmaps: gm('中国料理 燦宮 梅田スカイビル'), menu_url: null,
    notes: "[Chinese · Umeda Sky Building, 39th floor] The Chinese restaurant on the 39th floor of the Umeda Sky Building, with views over Osaka by day and a night view diners call outstanding. Courses use Cantonese technique: mango-mayonnaise prawns are the signature, alongside Peking duck, shark fin from Kesennuma, steamed amadai and braised wagyu cheek. Lunch courses (¥4,000–7,000) are the usual way in; dinners from ¥8,000, plus 10% service. Families and business lunches fill the four private rooms; book a window table or window room for the view, and mention celebrations for a message plate. Service gets mixed notes: kind staff who took family photos (October 2026), but missed orders and slow responses in a private room (September 2026) and slow drinks on a fireworks night (October 2026).",
    chef_bio: { chef_name: null, roles: ['Kitchen and service staff (unnamed in the sources read)'], origin: 'The Chinese restaurant of Umeda Sky Building (skybldg.co.jp).', background: 'Shop text (Tabelog): on the 39th floor of Umeda Sky Building, marked by the Floating Garden Observatory; authentic Chinese courses of premium ingredients such as shark fin and wagyu with seasonal vegetables and fish; aged Shaoxing wine; an original lunch updated with Cantonese technique; 120 seats and four private rooms. A September 2026 diner returned after about 30 years.', philosophy: null, specialty: 'Large prawns with mango mayonnaise; Peking duck; shark fin.',
      anecdotes: [
        { text: '"I often choose this place for lunches with clients visiting from outside the prefecture." — September 2026.', source: R + 'B535175669/' },
        { text: '"The view was absolutely stunning, and the kind staff even took photos for us." — October 2026, a family Sunday lunch on the Fubi course.', source: R + 'B537372062/' },
        { text: '"Despite ordering a la carte, two of our orders were not processed." — September 2026, a private room.', source: R + 'B535959348/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, OFF, R + 'B495685887/', R + 'B535175669/', R + 'B535959348/', R + 'B537181642/', R + 'B537372062/', R + 'B537562422/', R + 'B537581660/', R + 'B537802539/', R + 'B537817484/', R + 'B538064161/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set courses, private rooms; staff help with celebrations (2026). No English menu listed.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区大淀中1-1-88 梅田スカイビル タワーイースト 39F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; listed on the Umeda Sky Building site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区大淀中一丁目1番88号 (go) 59m (the Umeda Sky Building); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B537181642/'],
    price_note: 'Lunch courses from the Tabelog listing (tax included; 10% service); the autumn lunch from a September 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Weekday lunch course "Botan" (mango-mayonnaise prawns, dim sum, noodles)', '¥4,000', 'Lunch', 'no', 'no', 'Tabelog listing.', 'botan_lunch'),
      it('', '', 'Weekend lunch course "Fubi" (6 dishes)', '¥5,000', 'Lunch', 'ask', 'no', 'Tabelog listing; October 2026 review.', 'fubi_lunch'),
      it('', '', 'Classic lunch course with Kesennuma shark fin and Peking duck', '¥6,000', 'Lunch', 'no', 'no', 'Tabelog listing; October 2026 review.', 'classic_lunch'),
      it('', '', 'Autumn lunch with abalone, wagyu cheek and Shine Muscat', '¥7,000', 'Lunch', 'ask', 'no', 'September 2026 review.', 'autumn_lunch'),
    ] }, {
    cuisine: '広東の技を取り入れた中国料理のコース、フカヒレや和牛から季節の野菜と魚まで、熟成紹興酒、ワイン、中国茶、ランチは3,000円から、ディナーは8,000円から (食べログ)・ランチのコース (食べログ、税込): 平日の「Botan」4,000円 (大海老のマンゴーマヨネーズ、点心、あんかけ麺)、週末の「Fubi」5,000円 (前菜3種、大海老のマンゴーマヨ、甘鯛の海鮮醤油蒸し、鶏の香味ソース)、Kesennuma のフカヒレを鶏白湯のあんかけご飯か牡蠣のスープ麺で、北京ダック、黒酢の酢豚、小籠包のクラシックコース6,000円・アワビ、和牛ほほ肉、シャインマスカットの秋のランチ7,000円 (2026年9月)、フカヒレのスープ、アワビ、鯛の蒸し物の Magnolia コース (2026年9月)、Fubi コースの Tajima の鶏と和牛のあんかけ焼きそば (2026年10月)・2026年10月の夜: かに味噌のスープ、秋鮭、北京ダック、アワビの XO 醤蒸し、和牛ほほ肉の煮込み、海鮮チャーハン、シャインマスカットのデザート',
    neighborhood: '梅田スカイビル タワーイーストの39階。JR大阪駅中央北口から徒歩7分',
    gf_detail: '要確認。グルテンの情報なし。コースには点心、小籠包、あんかけ麺、甘味噌の北京ダック、黒酢の酢豚、海鮮醤油や XO 醤の料理があり、ふつう小麦を含む。',
    vegan_detail: 'ヴィーガンではありません。フカヒレ、魚介、鴨、豚肉、和牛と鶏のスープの中国料理のコース。',
    notes: '[中国料理・梅田スカイビル39階] 梅田スカイビルの39階にある中国料理の店で、昼は大阪の街を見下ろし、夜景はすばらしいという声。コースは広東の技で、名物は大海老のマンゴーマヨネーズ、ほかに北京ダック、Kesennuma のフカヒレ、甘鯛の蒸し物、和牛ほほ肉の煮込み。ランチのコース (4,000〜7,000円) が入りやすく、夜は8,000円から、サービス料10%。家族の集まりや接待のランチで4つの個室が使われ、景色が目当てなら窓際の席か窓のある個室を予約して、お祝いはメッセージプレートも。サービスの評価は分かれていて、家族写真を撮ってくれた親切なスタッフ (2026年10月) の一方、個室で注文が通っていなかった、対応が遅い (2026年9月)、花火の夜は飲み物が遅かった (2026年10月) という声も。',
  });
}

// ================================================================ 北新地 鮨 一献
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27136687/'; const R = TB + 'dtlrvwlst/';
  const D = day(['17:30', '23:00']), LD = day(['11:30', '14:00'], ['17:30', '23:00']);
  put({
    id: 'osaka_kitashinchi_sushi_ikken', name: '北新地 鮨 一献 (Kitashinchi Sushi Ikken)', category: 'OMNI',
    lat: 34.697696, lng: 135.49924, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Courses include fried dishes (in the hassun, August 2026) and nigiri usually finished with soy sauce, which normally contains wheat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi omakase of fish, shellfish and roe.',
    hours_raw: 'Mon–Wed 17:30–23:00; Thu–Sat 11:30–14:00 and 17:30–23:00; last order 22:30; closed Sundays and holidays; may close early when supplies run out (Tabelog). The phone may go unanswered during service (Tabelog). Guests with strong fragrances may be refused (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 10 counter seats; private hire by arrangement; non-smoking; children welcome (Tabelog). Opened 21 June 2023 (Tabelog). The entrance is round the side of the building, not on the front (October 2026).',
    hours: { 0: D, 1: D, 2: D, 3: LD, 4: LD, 5: LD }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kitashinchi, 菱冨ビル 1F, entrance on the side street — 1 min from JR Kitashinchi Stn exit 11-43',
    cuisine: 'Sushi omakase with fish, rice, nori, wasabi and tea chosen from across Japan; nigiri on a blend of red and white vinegar rice, with two kinds of shari to compare (Tabelog; June 2026); over ten sakes chosen by staff (Tabelog) · courses (Tabelog, tax included): Ikken omakase of 21–25 dishes ¥22,000; lunch omakase special ¥13,200; lunch "Ayakasu" course ¥5,500 of a hassun platter and nigiri; the dinner course was ¥13,200–13,600 through an online booking site (June and October 2026) · dishes in 2026 reviews: komatsuna ohitashi, Nagasaki kensaki squid, Akashi flounder and octopus, a hassun with dashimaki and grilled corn (August); three cuts of tuna sashimi, ikura, tekka maki (March); sawara, grouper, eel, panna cotta (June); bluefin, sweet shrimp, sea urchin (June) · flowers for birthdays and anniversaries (April, June, September 2026)',
    website: null, gmaps: gm('北新地 鮨 一献'), menu_url: null,
    notes: "[Sushi · Kitashinchi, a ten-seat counter with two kinds of rice] A ten-seat sushi counter entered from a side street in Kitashinchi, with fish, rice, nori and wasabi chosen from across Japan and nigiri served on two kinds of shari, red-vinegar and white-vinegar, to compare. The dinner omakase runs to over twenty dishes at ¥22,000 (diners booking through an online site paid ¥13,200–13,600 in 2026); lunch, Thursday to Saturday, starts at ¥5,500 for a hassun platter and nigiri. Diners praise a head chef who explains every dish (one review says the chef came from the Ritz-Carlton) and staff who adjust rice portions and mind your departure time; celebrations get a bouquet. One June 2026 diner found the tuna sashimi and sea urchin a little fishy. No strong perfume.",
    chef_bio: { chef_name: null, roles: ['Head chef (unnamed; "from the Ritz-Carlton", per an October 2026 review)'], origin: null, background: 'Shop text (Tabelog): meticulous sourcing, preparation and cooking; fresh fish, rice, seaweed, wasabi and tea from various regions; nigiri combining red and white vinegar; over ten sakes chosen by knowledgeable staff. Opened 21 June 2023. Reviews: the chef shares a lot of information about the dishes (May 2026); "the head chef is from the Ritz-Carlton" (October 2026).', philosophy: 'Commitment to sourcing, preparation and cooking (Tabelog).', specialty: 'Omakase with red- and white-vinegar shari.',
      anecdotes: [
        { text: '"You can also compare two types of rice paired with the toppings, and it\'s absolutely delicious..." — June 2026.', source: R + 'B530413893/' },
        { text: '"I was pleasantly surprised when they gave me a bouquet on my way out, which is fitting for the location!" — April 2026, a birthday.', source: R + 'B530142197/' },
        { text: '"I appreciated their flexibility in adjusting the rice portion and the amount I wanted to eat." — September 2026.', source: R + 'B536831855/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B523842150/', R + 'B526013648/', R + 'B527779582/', R + 'B530054371/', R + 'B530142197/', R + 'B530413893/', R + 'B533255474/', R + 'B536816559/', R + 'B536831855/', R + 'B537470658/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One omakase at a ten-seat counter, each dish explained (2026). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区曽根崎新地1-9-6 菱冨ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎新地一丁目9番6号 (go) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B533255474/'],
    price_note: 'Courses from the Tabelog listing (tax included); online-booking discounts from June and October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Ikken omakase course (21–25 dishes)', '¥22,000', 'Course', 'ask', 'no', 'Tabelog listing.', 'omakase_course'),
      it('', '', 'Lunch omakase special (the dinner menu at lunch)', '¥13,200', 'Lunch', 'ask', 'no', 'Tabelog listing.', 'lunch_omakase'),
      it('', '', 'Lunch "Ayakasu" course: hassun platter and nigiri', '¥5,500', 'Lunch', 'ask', 'no', 'Tabelog listing; August 2026 review.', 'lunch_ayakasu'),
    ] }, {
    cuisine: '全国から選んだ魚、米、海苔、山葵、お茶の鮨のおまかせ。握りは赤酢と白酢を合わせたシャリで、2種類のシャリを食べ比べられる (食べログ、2026年6月)。スタッフが選ぶ10種類以上の日本酒 (食べログ)・コース (食べログ、税込): 21〜25品の一献おまかせ22,000円、夜の料理をランチで出すおまかせ13,200円、八寸と握りのランチ「Ayakasu」コース5,500円、ネット予約サイトでは夜のコースが13,200〜13,600円だった (2026年6月・10月)・2026年の口コミの料理: 小松菜のおひたし、Nagasaki のケンサキイカ、Akashi のヒラメとタコ、だし巻きと焼きとうもろこしの八寸 (8月)、マグロの刺身3種、いくら、鉄火巻き (3月)、サワラ、クエ、うなぎ、パンナコッタ (6月)、本マグロ、甘エビ、ウニ (6月)・誕生日や記念日には花束 (2026年4月、6月、9月)',
    neighborhood: '北新地、菱冨ビル 1階、入口はわき道側。JR北新地駅11-43出口から徒歩1分',
    gf_detail: '要確認。グルテンの情報なし。コースには揚げ物 (八寸、2026年8月) があり、握りはふつう小麦を含む醤油で仕上げる。',
    vegan_detail: 'ヴィーガンではありません。魚、貝、魚卵の鮨のおまかせ。',
    notes: '[鮨・北新地、2種類のシャリの10席のカウンター] 北新地のわき道から入る10席の鮨のカウンターで、魚、米、海苔、山葵は全国から選び、握りは赤酢と白酢の2種類のシャリで食べ比べられる。夜のおまかせは20品以上で22,000円 (2026年はネット予約サイト経由で13,200〜13,600円だった人も)、ランチは木〜土で、八寸と握りの5,500円から。料理をひとつずつ説明してくれる大将 (口コミでは Ritz-Carlton 出身とのこと) と、シャリの量や帰りの時間に気を配るスタッフをほめる声が多く、お祝いには花束も。2026年6月にはマグロの刺身とウニに少し生臭さを感じたという人も。強い香水は控えて。',
  });
}

save();
