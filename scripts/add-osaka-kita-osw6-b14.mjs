// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), circle umeda, Tabelog id odd; worker osw6, batch 14.
//   + 鶏と○○、時々 魚。 Tori to Marumaru, Tokidoki Sakana. (yakitori and fish courses in a two-floor house, Togano-cho)
//   + 天ぷら もり井 Tempura Morii (Kitashinchi tempura counter, since 2011)
//   + カーサ M casa M (charcoal-grill Italian and wine, Kitashinchi side of 堂島)
//   + 創作酒場スタンドKO-NEKO Sosaku Sakaba Stand KO-NEKO (cat-themed creative izakaya open to 3 am, Doyama)
//   Picked with `queue.mjs osaka-kita next core 80 umeda` (2026-11-02, after b13): first odd ids 27123871, 27058445,
//   27079533, 27150361. None is in data/osaka.json (grep by id, name and address, 2026-11-02). Tempura Morii shares
//   ニュー華ビル (1-9-3) with epais (b13, 3F); it is a different shop on 1F. Chain check: web search found no other
//   branch of Tempura Morii; the other three show no branches on Tabelog or their own pages. KO-NEKO is unrelated to
//   osaka_kitashinchi_kuroneko (different operator and format).
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, save } = openCitySweep('osaka-kita', TODAY, 'osw6-14');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 鶏と○○、時々 魚。
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27123871/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '01:00']);
  put({
    id: 'osaka_tori_to_marumaru_togano', name: '鶏と○○、時々 魚。 (Tori to Marumaru, Tokidoki Sakana.)', category: 'OMNI',
    lat: 34.700293, lng: 135.502527, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Skewers are salt-seasoned in one review (May 2024), but tsukune is glazed and courses include saikyo-miso fish, sweet-simmered liver, dashi chazuke, udon and oyakodon.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken and fish courses with dashi.',
    hours_raw: 'Daily 12:00–1:00 (Tabelog). Reservation only; phone lines may be closed, book online (Tabelog). Opened June 9, 2021 (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), Suica-type IC cards, iD, PayPay (Tabelog). 12 seats: 6 at the counter on the first floor, tables, and a fully private second-floor room for 6; private hire up to 20 (Tabelog). Smoking: Tabelog lists a designated smoking area; diners smoked at the table in the private room (December 2025), and an April 2026 diner says smoking is allowed, perhaps e-cigarettes only. The stairs start right inside the private room\'s sliding door (April 2026). Not an invoice-registered business (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Togano-cho, among the hotels east of Umeda — 5 min from Higashi-Umeda Stn',
    cuisine: 'Yakitori and creative Japanese courses built on Awaodori chicken from Tokushima, with seasonal fish such as nodoguro and crab; fish can replace chicken on request (Tabelog) · 14-dish yakitori course ¥4,400; courses with all-you-can-drink ¥5,000 (90 min, 8 dishes) and ¥6,000 (2 hours, 10 dishes): sweet-simmered chicken liver, sesame buri, thigh skewers, breast-and-skin skewers, cucumber with miso, tsukune, dish of the day, finale (Tabelog) · chicken and fish course of 12 dishes ¥3,500 with akaushi roast, firefly squid with vinegar miso, skewers, menuke grilled with saikyo miso, sea-bream dashi chazuke (May 2024) · chicken and Ise lobster course ¥6,600 with sashimi, red snow crab, a hot pot of Akita pork, sea bream and shrimp, udon and zosui (October 2023) · yakitori lunch course ¥3,500 (January 2025) · katsuo tataki and oyakodon to finish (2023–2026) · oolong or green tea ¥350; sake and shochu (Tabelog; May 2024)',
    website: null, gmaps: gm('鶏と○○、時々 魚。 兎我野町'), menu_url: null,
    notes: "[Yakitori · Umeda, Togano-cho, a reservation-only chicken house] A small reservation-only yakitori house in Togano-cho, opened in 2021, whose name says it all: chicken, and sometimes fish. The owner, who ran it solo on a January 2025 visit, grills Awaodori chicken from Tokushima over charcoal with salt and builds courses around it: thigh and breast-and-skin skewers, tsukune, sweet-simmered liver, katsuo tataki, saikyo-grilled fish, and an oyakodon or sea-bream chazuke to finish. Courses run about ¥3,500–6,600, some with all-you-can-drink, and there is a lunch course too. Downstairs is a six-seat counter; upstairs a fully private room that groups book for drinking parties, and where smoking has been allowed. Open noon to 1 am.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), cooks and serves'], origin: null, background: 'Shop text (Tabelog): opened June 9, 2021; chicken dishes centred on yakitori, made with Tokushima\'s Awaodori chicken; seasonal creative Japanese courses; fresh seasonal fish, with requests welcome. A January 2025 diner: "The owner operates the restaurant solo"; the counter has 6 seats and the second floor is for private dining.', philosophy: 'A calm, wood-grain Japanese room where time flows slowly (Tabelog).', specialty: 'Awaodori chicken yakitori; seasonal fish.',
      anecdotes: [
        { text: '"This yakitori restaurant uses Awaodori chicken from Tokushima, and occasionally serves fish, which is how it got its name (laughs)." — January 2025.', source: R + 'B501044730/' },
        { text: '"The course meal started with a flavorful Katsuo no Tataki topped with plenty of condiments, followed by delicious yakitori, and finished off with a delightful Oyakodon. With an all-you-can-drink option, the price was reasonable at JPY 5000 per person." — October 2024.', source: R + 'B493950944/' },
        { text: '"As soon as you open the sliding door to the room, there are stairs right there, so it could be dangerous if you\'ve had too much to drink." — April 2026.', source: R + 'B526531016/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B466416387/', R + 'B474368831/', R + 'B478868616/', R + 'B493950944/', R + 'B499054462/', R + 'B501044730/', R + 'B502050875/', R + 'B503133650/', R + 'B518306354/', R + 'B526531016/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Reservation only, booked online; hard to find (January 2024). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市北区兎我野町15-18',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through April 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区兎我野町15番18号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B466416387/', R + 'B499054462/'],
    price_note: 'Courses from the Tabelog listing (tax included); the ¥3,500 courses from May 2024 and January 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Yakitori course of Awaodori chicken, 14 dishes', '¥4,400', 'Course', 'ask', 'no', 'Tabelog listing.', 'yakitori_course_14'),
      it('', '', 'Course with 90-minute all-you-can-drink, 8 dishes (4–7 people)', '¥5,000', 'Course', 'ask', 'no', 'Tabelog listing.', 'course_ayce_90'),
      it('', '', 'Course with 2-hour all-you-can-drink, 10 dishes (4–7 people)', '¥6,000', 'Course', 'ask', 'no', 'Tabelog listing.', 'course_ayce_120'),
      it('', '', 'Yakitori lunch course', '¥3,500', 'Lunch', 'ask', 'no', 'January 2025 review.', 'lunch_course'),
    ] }, {
    cuisine: '徳島の Awaodori の鶏を中心にした焼き鳥と創作和食のコース、のどぐろやカニなど旬の魚も、頼めば鶏を魚に替えられる (食べログ)・焼き鳥の14品のコース4,400円、飲み放題つきのコース5,000円 (90分、8品) と6,000円 (2時間、10品): 鶏レバーの甘煮、ごまブリ、もも串、むねと皮の串、きゅうりと味噌、つくね、本日の一品、締め (食べログ)・鶏と魚の12品のコース3,500円: 赤牛のロースト、ホタルイカの酢味噌、串、menuke の西京焼き、鯛の出汁茶漬け (2024年5月)・鶏と伊勢海老のコース6,600円: 刺身、紅ズワイガニ、秋田の豚と鯛とエビの鍋、うどんと雑炊 (2023年10月)・焼き鳥のランチコース3,500円 (2025年1月)・カツオのたたき、締めの親子丼 (2023〜2026年)・ウーロン茶や緑茶350円、日本酒と焼酎 (食べログ、2024年5月)',
    neighborhood: '兎我野町、梅田の東のホテル街。東梅田駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。串は塩味という口コミ (2024年5月) があるが、つくねはたれで焼き、コースには西京焼き、レバーの甘煮、出汁茶漬け、うどん、親子丼がある。',
    vegan_detail: 'ヴィーガンではありません。鶏と魚のコースで、出汁も使う。',
    notes: '[焼き鳥・梅田兎我野町、予約制の鶏の家] 兎我野町にある予約制の小さな焼き鳥の店で、2021年オープン。店名のとおり、鶏と、ときどき魚。2025年1月の訪問では店主がひとりで切り盛りしていて、徳島の Awaodori の鶏を炭火で塩で焼き、それを中心にコースを組む: もも串、むねと皮の串、つくね、レバーの甘煮、カツオのたたき、西京焼き、締めは親子丼か鯛の茶漬け。コースは3,500〜6,600円ほどで、飲み放題つきもあり、ランチのコースも。1階は6席のカウンター、2階は完全個室でグループの飲み会に使われ、たばこを吸えたという声も。昼12時から深夜1時まで。',
  });
}

// ================================================================ 天ぷら もり井
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27058445/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['17:30', '22:00']), SA = day(['17:30', '21:00']);
  const HP = 'https://www.hotpepper.jp/strJ003388591/';
  put({
    id: 'osaka_tempura_morii_kitashinchi', name: '天ぷら もり井 (Tempura Morii)', category: 'OMNI',
    lat: 34.697586, lng: 135.499632, cuisine_type: 'tempura',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: battered tempura, and a fried shrimp-paste bread.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood and chicken tempura; the course ends with dashi tencha or egg on rice. Vegetable tempura is served too.',
    hours_raw: 'Tabelog: Mon–Fri 17:30–22:00 (last order 21:00), Sat 17:30–21:00 (last order 20:00), closed Sundays and holidays. Hot Pepper: Mon–Fri and days before holidays 17:00–23:00 (food last order 22:00), closed Saturdays and Sundays. The two listings differ; check before a Saturday visit. Opened April 6, 2011 (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). Seats: 20 on Tabelog (10 counter, 10 table), 16 on Hot Pepper; private hire up to 20 (Tabelog). Smoking allowed (Tabelog; Hot Pepper: all seats). No one under 20, even with an adult (Hot Pepper). Service charge: Tabelog\'s Japanese field says なし (none); its machine translation says a charge is added.',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: SA }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kitashinchi, ニュー華ビル 1F — 5 min from Kitashinchi Stn',
    cuisine: 'Tempura fried in a blend of white sesame oil and refined oil, with the oil changed for every four guests (Tabelog) · today\'s recommended course of 12 seasonal pieces such as prawn, free-range chicken breast with ume and shiso, young sweetfish and pike conger, finished with dashi tencha or rice with raw egg: ¥11,000 on the course menu, ¥8,580 in the shop text (Tabelog) · popular shrimp-paste bread with curry salt, heart-shaped for women (Tabelog) · à la carte ordering (July 2024; February 2026) · a February 2026 course: shrimp in shiso, asparagus, chicken breast with ume and shiso, konjac, lotus root, sea bream with grated daikon and ponzu, garlic shoots, octopus, canola flowers, soft roe, oysters, then egg on rice · shiitake stuffed with potato (February 2026) · sake chosen with breweries around Japan, shochu including Kanpachi (Tabelog)',
    website: null, gmaps: gm('天ぷら もり井 北新地'), menu_url: null,
    notes: "[Tempura · Kitashinchi, a relaxed counter with à la carte] A twenty-seat tempura room on a Kitashinchi ground floor, open since 2011, where you can watch each piece fried in front of you in a sesame-oil blend that is changed for every four guests. The seasonal course runs to twelve pieces, prawn, sweetfish, pike conger, ume-and-shiso chicken, oysters in February, and ends with tencha or egg on rice; the shrimp-paste toast with curry salt is the signature. Unusually for the area you can also order à la carte, and diners call it relaxed rather than formal, with friendly staff; one diner was remembered on a second visit. Expect ¥10,000–15,000 a head with drinks; one diner found it pricey. Smoking is allowed and no one under 20 is admitted.",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed) at the counter'], origin: null, background: 'Shop text (Tabelog): a hideaway for adults with seasonal tempura and fine sake; a blend of white sesame oil and white frying oil, refreshed regularly; prawn tempura and a 12-dish seasonal course recommended; sake and shochu from across Japan. Opened April 6, 2011.', philosophy: 'Light tempura that adults can eat without feeling heavy (Tabelog).', specialty: 'Seasonal tempura course; shrimp-paste bread.',
      anecdotes: [
        { text: '"Most of the refined and delicious tempura restaurants offer only set courses, so I\'m thrilled that I can order a la carte here!" — July 2024.', source: R + 'B489631606/' },
        { text: '"This was my second visit, and I was pleasantly surprised…" — July 2025, on being remembered from the first visit.', source: R + 'B503152103/' },
        { text: '"The signature breaded shrimp pairs perfectly with curry powder, allowing the sweetness of the shrimp to bloom." — February 2026.', source: R + 'B524438575/' },
      ],
      japanese_sources_summary: 'ホットペッパーグルメ: 月〜金・祝前日17:00〜23:00 (料理L.O. 22:00)、土日定休、16席、全席喫煙可、20歳未満は同伴でも入店不可。',
      confidence: 'medium', sources: [TB, HP, R + 'B489631606/', R + 'B495150200/', R + 'B501600551/', R + 'B503152103/', R + 'B507395268/', R + 'B508537118/', R + 'B524438575/', R + 'B526992548/', R + 'B531355931/', R + 'B532774079/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter seats facing the fryer; staff attentive and friendly (2025–2026). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区曽根崎新地1-9-3 ニュー華ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and a Hot Pepper page with bookings into 2027; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎新地一丁目9番3号 (go) 13m; same building as osaka_epais_kitashinchi (3F); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'The course price differs within the Tabelog listing: ¥11,000 on the course menu, ¥8,580 in the shop text.', last_checked: TODAY, items: [
      it('', '', "Today's recommended course, 12 seasonal tempura", '¥11,000', 'Course', 'no', 'no', 'Tabelog course menu; the shop text gives ¥8,580.', 'todays_course'),
      it('', '', 'Shrimp-paste bread with curry salt', '', 'À la carte', 'no', 'no', 'Tabelog shop text; February 2026 review.', 'shrimp_bread'),
    ] }, {
    cuisine: '白ごま油と精製油をブレンドした油で揚げる天ぷら、油は4人ごとに替える (食べログ)・本日のおすすめコースは旬の12品、海老、地鶏のむねの梅しそ、稚鮎、鱧など、締めは出汁の天茶か卵かけご飯: コースのページでは11,000円、店の紹介文では8,580円 (食べログ)・人気の海老パンはカレー塩で、女性にはハートの形 (食べログ)・アラカルトも頼める (2024年7月、2026年2月)・2026年2月のコース: 海老のしそ巻き、アスパラ、鶏むねの梅しそ、こんにゃく、れんこん、鯛のおろしポン酢、にんにくの芽、タコ、菜の花、白子、牡蠣、締めの卵かけご飯・しいたけのポテト詰め (2026年2月)・全国の酒蔵と選ぶ日本酒、Kanpachi などの焼酎 (食べログ)',
    neighborhood: '北新地、ニュー華ビル 1階。北新地駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。衣をつけて揚げる天ぷらと、揚げた海老パン。',
    vegan_detail: 'ヴィーガンではありません。魚介と鶏の天ぷら、締めは出汁の天茶か卵かけご飯。野菜の天ぷらもある。',
    notes: '[天ぷら・北新地、アラカルトも頼める気楽なカウンター] 北新地のビルの1階にある20席の天ぷらの店で、2011年から。目の前で揚げるのを見ながら食べられ、ごま油のブレンドの油は4人ごとに替える。旬のコースは12品で、海老、鮎、鱧、梅しその鶏、2月は牡蠣、締めは天茶か卵かけご飯。名物はカレー塩で食べる海老パン。このあたりではめずらしくアラカルトでも頼めて、かしこまらず気楽という声や、2回目に覚えていてくれたという声も。飲み物を入れて1人1万〜1万5千円ほどで、高めという人も。喫煙可で、20歳未満は入れない。',
  });
}

// ================================================================ カーサ M
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27079533/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'http://www.kitashinchi-casa-m.com/';
  const H = day(['18:00', '23:00']);
  put({
    id: 'osaka_casa_m_kitashinchi', name: 'カーサ M (casa M)', category: 'OMNI',
    lat: 34.696914, lng: 135.497376, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The signature is spaghettini finished in a Parmigiano wheel; grilled dishes come with sauces of Japanese and Western seasonings.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: charcoal-grilled wagyu, chicken and seafood courses, and a cheese-and-cream pasta.',
    hours_raw: 'Tabelog: daily 18:00–23:00 (last order 21:00), closing days not fixed. Official site: 18:00–24:00 (last order 23:00), closing days not fixed; a wine bar with à la carte from 21:00. The two differ on closing time. Lunch is not in either schedule, but Tabelog lists a lunch-only course and diners came for lunch (January 2025; November 2025; March 2026). Opened June 16, 2014 (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, and Discover on the official site); no e-money or QR (Tabelog). Seats: 16 on Tabelog (4 counter, 10 table, a private room for 2–3), 19 on the official site (5 counter, 12 table, 2 private); private hire up to 20 (Tabelog). Non-smoking; please avoid strong perfume (Tabelog). Service charge: Tabelog\'s Japanese field says なし (none); its machine translation says a charge is added.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kitashinchi, 薬師堂ビル 4F down an alley — 2–4 min from JR Kitashinchi Stn',
    cuisine: 'Charcoal-grilled Italian: wagyu, jidori chicken and seasonal produce over charcoal with sauces using Japanese and Western touches (official site) · signature spaghettini flambéed in a Parmigiano wheel with cheese and cream (official site; 2025–2026 reviews) · courses (Tabelog, tax included): wagyu main ¥7,000 (amuse, seafood salad, charcoal-grilled seafood, wagyu, the cheese pasta, dessert); seasonal course with caviar, abalone, foie gras and wagyu ¥11,000; lunch-only wagyu course ¥6,000 · a ¥10,000 course with bluefin tuna, abalone, caviar, foie gras, truffles and wagyu (November 2025) · over 100 wines chosen by the owner-sommelier, centred on Burgundy pinot noir, 13 by the glass; glasses ¥700–1,400, bottles from ¥3,500 (official site)',
    website: WEB, gmaps: gm('カーサ エム 堂島 薬師堂ビル'), menu_url: WEB,
    notes: "[Italian · Kitashinchi, charcoal grill and a flaming cheese wheel] A hidden fourth-floor Italian room down a Kitashinchi alley, open since 2014, where wagyu, jidori and seasonal fish are grilled over charcoal and the courses build to the house show: spaghettini tossed in a flambéed wheel of Parmigiano. Courses are ¥7,000 and ¥11,000 (with caviar, abalone and foie gras), and the owner-sommelier keeps over 100 wines, mostly Burgundy pinot, 13 by the glass. After 9 pm it doubles as a wine bar with à la carte. Diners call it the best value high-end Italian in Kitashinchi and say it feels like home; one describes a couple running it, others one person handling everything. Hard to find: follow the arrows down the alley.",
    chef_bio: { chef_name: null, roles: ['Owner-sommelier and chef (unnamed); a couple runs the room (February 2026)'], origin: null, background: 'Official site: Casa M (カーサ エム), charcoal grill and Italian in Kitashinchi; "casa" means "home", named so guests can relax; wine stock of over 100 chosen by the owner-sommelier. Tabelog: opened June 16, 2014. Diners: one person handles cooking and serving (January 2025, lunch; February 2026); a February 2026 diner credits the warm atmosphere to the master and the master\'s wife. A November 2025 regular of six or seven years says Hanshin Tigers figures Atsushi Kataoka and Kosuke Fukudome and Yuji Oda have visited (the reviewer\'s claim).', philosophy: 'Good ingredients, simply grilled over charcoal (official site).', specialty: 'Flambéed Parmigiano spaghettini; charcoal-grilled wagyu.',
      anecdotes: [
        { text: '"The appetizers had a simple seasoning that highlighted the ingredients, and the meat was cooked to perfection with an exquisite sauce." — February 2026.', source: R + 'B500273293/' },
        { text: '"This is the best value high-end Italian restaurant in Kitashinchi." — November 2025.', source: R + 'B516822951/' },
        { text: '"The pasta made on a cheese wheel was quite impressive and full of entertainment value." — March 2026.', source: R + 'B525363388/' },
      ],
      japanese_sources_summary: '公式サイト: ワインと炭火焼 カーサ エム、18:00〜24:00 (L.O. 23:00)、不定休、21時以降はワインバー、19席、ワインは100種以上でグラスは13種、北新地駅11-21番出口から徒歩2分、路地を矢印のとおり進んだ薬師堂ビル4階。',
      confidence: 'medium', sources: [TB, WEB, R + 'B500273293/', R + 'B516822951/', R + 'B518090750/', R + 'B523245464/', R + 'B523850815/', R + 'B525363388/', R + 'B525588450/', R + 'B528092078/', R + 'B536507774/', R + 'B537100909/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Course-centred; private rooms; the entrance is hard to find (2025–2026). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市北区堂島1-3-19 薬師堂ビル 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and official site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂島一丁目3番 (lot) 55m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, WEB],
    price_note: 'Courses from the Tabelog listing and the official site (tax included); wine from the official drinks list.', last_checked: TODAY, items: [
      it('', '', 'Wagyu main charcoal-grill course, 6 dishes', '¥7,000', 'Course', 'ask', 'no', 'Tabelog; official site.', 'course_7000'),
      it('', '', 'Seasonal course with caviar, abalone, foie gras and wagyu, 9 dishes', '¥11,000', 'Course', 'ask', 'no', 'Tabelog; official site; October 2026 review.', 'course_11000'),
      it('', '', 'Lunch-only wagyu charcoal-grill course, 6 dishes', '¥6,000', 'Lunch', 'ask', 'no', 'Tabelog listing.', 'lunch_course'),
      it('', '', 'Glass of wine (from)', '¥700', 'Drinks', '', '', 'Official drinks list.', 'wine_glass'),
    ] }, {
    cuisine: '炭火焼きのイタリアン: 和牛、地鶏、旬の食材を炭火で焼き、和と洋のソースで (公式サイト)・名物はパルミジャーノチーズの器をフランベしてチーズと生クリームをからめるスパゲッティーニ (公式サイト、2025〜2026年の口コミ)・コース (食べログ、税込): 和牛がメインの7,000円 (アミューズ、魚介のサラダ、魚介の炭火焼き、和牛、チーズのパスタ、デザート)、キャビア、アワビ、フォアグラ、和牛の旬のコース11,000円、ランチだけの和牛のコース6,000円・本マグロ、アワビ、キャビア、フォアグラ、トリュフ、和牛の1万円のコース (2025年11月)・オーナーソムリエが選ぶワインは100種以上、ブルゴーニュのピノ・ノワールが中心、グラスは13種、グラス700〜1,400円、ボトル3,500円から (公式サイト)',
    neighborhood: '北新地、路地の奥の薬師堂ビル 4階。JR北新地駅から徒歩2〜4分',
    gf_detail: '要確認。グルテンの情報なし。名物はパルミジャーノチーズの器で仕上げるスパゲッティーニで、焼き物には和と洋のソースを添える。',
    vegan_detail: 'ヴィーガンではありません。和牛、鶏、魚介の炭火焼きのコースと、チーズと生クリームのパスタ。',
    notes: '[イタリアン・北新地、炭火焼きと燃えるチーズ] 北新地の路地の奥、ビルの4階にある隠れ家のイタリアンで、2014年から。和牛、地鶏、旬の魚を炭火で焼き、コースの山場はお決まりのパフォーマンス、フランベしたパルミジャーノチーズの器でからめるスパゲッティーニ。コースは7,000円と11,000円 (キャビア、アワビ、フォアグラつき)、オーナーソムリエのワインは100種以上で、ブルゴーニュのピノが中心、グラスは13種。21時以降はアラカルトでワインバーとしても使える。北新地でいちばんコスパのいい高級イタリアン、家のように落ち着くという声。夫婦で営んでいるという声と、ひとりで切り盛りしているという声がある。わかりにくいので路地の矢印をたどって。',
  });
}

// ================================================================ 創作酒場スタンドKO-NEKO
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27150361/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '03:00']);
  put({
    id: 'osaka_stand_koneko_doyama', name: '創作酒場スタンドKO-NEKO (Sosaku Sakaba Stand KO-NEKO)', category: 'OMNI',
    lat: 34.703555, lng: 135.503067, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The menu includes kara-age, fried figs in dashi, gratin, Neapolitan spaghetti, garlic toast and fried chikuwa.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a creative izakaya of wagyu, sashimi, sea urchin and chicken, with many dashi-based dishes.',
    hours_raw: 'Mon–Sat and holidays 18:00–3:00 (food last order 2:00, drinks 2:30); closed Sundays, some other days and at New Year (Tabelog). Opened June 6, 2025 (Tabelog). Seat charge ¥450 (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), PayPay, d Barai, Rakuten Pay, au PAY, Alipay; no e-money (Tabelog). 18 seats: a counter of 8, tables for 6 and 4, and standing room for about 7; private hire up to 20 (Tabelog); a September 2026 diner found it all seated. Smoking allowed (Tabelog). Phone bookings are easiest after 17:00 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Doyama, NIPPO堂山レジャービル 108 — 10 min from JR Osaka Stn',
    cuisine: 'Creative Japanese izakaya food by a cat-loving chef, in cat-shaped dishes; a daily wagyu steak of a changing cut (Tabelog) · KO-NEKO appetizer trio ¥500; KO-NEKO set meal of three obanzai, fish, rice and miso soup ¥700 (September 2026) · wagyu steak with shaliapin sauce from ¥2,100 (October 2026), ¥2,200 for the thigh cut (September 2026) · fresh sea urchin appetizer ¥800, conger eel tempura ¥920, fried figs in dashi ¥620, simmered whelk ¥480, fried chicken tulip with fresh sansho ¥650, beef sukiyaki rice with egg yolk ¥860 (September 2026) · tomato stuffed with meat and cheese ¥680, potato and chicken gratin ¥780, sesame hamachi ¥850, garlic toast ¥420 (October 2026) · KO-NEKO Neapolitan after 22:00, ¥800 (October 2026) or ¥880 (September 2026) · mix-it-yourself potato salad, seafood carpaccio, seafood "escargot-style" with baguette, homemade sesame tofu with sea urchin, fried chikuwa (2026) · Sapporo draft ¥600, Aka boshi, cat-themed sours ¥600, about six sakes and seven whiskies (September 2026)',
    website: null, gmaps: gm('創作酒場スタンドKO-NEKO 堂山町'), menu_url: null,
    notes: "[Izakaya · Umeda, Doyama, a cat-themed late-night kitchen] A small creative izakaya in a Doyama leisure building, opened in 2025 and open until 3 am, where the cat-loving owner has filled the room with cat figurines, illustrations and photos of staff and customers' cats (there are no real cats, so allergies are not a worry). The cooking is more serious than the decor: a daily wagyu steak with shaliapin sauce, thick sashimi, sea urchin on homemade sesame tofu, tempura figs in dashi, a stuffed baked tomato, sansho-spiced chicken, and a Neapolitan spaghetti served only after 10 pm. Most dishes are ¥400–900, with a ¥450 seat charge, cat-named sours and a short sake list. Busy with regulars; smoking is allowed; closed Sundays.",
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed), a cat lover (Tabelog; 2026 reviews)'], origin: null, background: 'Shop text (Tabelog): creative Japanese dishes by a cat-loving chef; wagyu steak of a different cut each day; three appetizers in cat-shaped dishes with a drink; set meals; a dim, wood-toned room for office workers. Opened June 6, 2025. A September 2026 diner: "A hidden stand run by a cat-loving owner", with house specialties recommended by the owner.', philosophy: 'Dishes careful in both look and taste (Tabelog).', specialty: 'Wagyu steak; fried figs in dashi; KO-NEKO Neapolitan.',
      anecdotes: [
        { text: '"While there are no real cats, it\'s a paradise for cat lovers!" — September 2026.', source: R + 'B535910545/' },
        { text: '"There are no cats, so it\'s suitable for those with allergies or who prefer animals." — September 2026.', source: R + 'B536169516/' },
        { text: '"The interior is filled with cat-themed decor, including photos of cats belonging to the staff and customers" — October 2026.', source: R + 'B536956439/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B535357515/', R + 'B535910545/', R + 'B535987300/', R + 'B536169516/', R + 'B536667207/', R + 'B536956439/', R + 'B537053305/', R + 'B538085753/', R + 'B538381541/', R + 'B538435121/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Friendly staff; welcoming to solo diners (September 2026). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区堂山町8-18 NIPPO堂山レジャービル 108',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; opened June 2025; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂山町8番18号 (go) 20m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536169516/', R + 'B536667207/', R + 'B536956439/', R + 'B537053305/'],
    price_note: 'Prices from September and October 2026 reviews; ¥450 seat charge.', last_checked: TODAY, items: [
      it('', '', 'KO-NEKO set meal: three obanzai, fish, rice, miso soup', '¥700', 'Set', 'ask', 'no', 'September 2026 review.', 'koneko_set'),
      it('', '', 'Wagyu steak with shaliapin sauce (cut of the day)', '¥2,100–2,200', 'Meat', 'ask', 'no', 'September and October 2026 reviews.', 'wagyu_steak'),
      it('', '', 'Fried figs in dashi', '¥620', 'Dishes', 'no', 'no', 'September and October 2026 reviews.', 'fried_figs'),
      it('', '', 'Fresh sea urchin appetizer', '¥800', 'Dishes', 'ask', 'no', 'September 2026 reviews.', 'uni_appetizer'),
      it('', '', 'KO-NEKO Neapolitan (after 22:00)', '¥800–880', 'Late night', 'no', 'no', 'September and October 2026 reviews.', 'neapolitan'),
    ] }, {
    cuisine: '猫好きの料理人の創作和食の居酒屋料理、猫の形の器で、日替わりの部位の和牛ステーキ (食べログ)・KO-NEKO の前菜3種500円、おばんざい3種、魚、ご飯、味噌汁の KO-NEKO 定食700円 (2026年9月)・和牛ステーキのシャリアピンソースは2,100円から (2026年10月)、もも肉は2,200円 (2026年9月)・生ウニの前菜800円、穴子の天ぷら920円、いちじくの揚げ出し620円、バイ貝の煮つけ480円、生山椒のチューリップの kara-age 650円、牛すき焼きの卵黄ご飯860円 (2026年9月)・トマトの肉とチーズの詰め焼き680円、小芋と焼き鳥のグラタン780円、ごまハマチ850円、ガーリックトースト420円 (2026年10月)・22時以降の KO-NEKO ナポリタンは800円 (2026年10月) または880円 (2026年9月)・自分で混ぜるポテトサラダ、魚介のカルパッチョ、魚介のエスカルゴ風とバゲット、自家製ごま豆腐のウニのせ、ちくわの揚げ物 (2026年)・サッポロの生600円、Aka boshi、猫の名前のサワー600円、日本酒6種ほど、ウイスキー7種ほど (2026年9月)',
    neighborhood: '堂山、NIPPO堂山レジャービル 108。JR大阪駅から徒歩10分',
    gf_detail: '要確認。グルテンの情報なし。kara-age、いちじくの揚げ出し、グラタン、ナポリタン、ガーリックトースト、ちくわの揚げ物がある。',
    vegan_detail: 'ヴィーガンではありません。和牛、刺身、ウニ、鶏の創作居酒屋で、出汁を使う料理が多い。',
    notes: '[居酒屋・梅田堂山、猫だらけの深夜の店] 堂山のレジャービルにある小さな創作居酒屋で、2025年オープン、深夜3時まで。猫好きの店主が、猫の置物やイラスト、スタッフやお客さんの猫の写真で店をいっぱいにしている (本物の猫はいないのでアレルギーの心配はない)。料理は見た目よりずっと本格的: 日替わりの和牛ステーキのシャリアピンソース、厚い刺身、自家製ごま豆腐にウニ、いちじくの揚げ出し、トマトの詰め焼き、山椒の効いた鶏、22時以降だけのナポリタン。ほとんどの料理は400〜900円で、席料450円、猫の名前のサワーと日本酒も少し。常連で混み合う。喫煙可、日曜休み。',
  });
}

save();
