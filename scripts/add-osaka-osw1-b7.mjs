// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first; worker osw1 (lane: Tabelog id mod 4 = 0), batch 7.
//   + 釜山式ナッコプセ専門店 ジョンナッチ Jon-nacchi (Busan-style nakkopse hot pot, Kitahorie, 2023)
//   + 旬菜 甘の井 Shunsai Amanoi (reservation-only kaiseki and Kyoto duck hot pot in a 9th-floor apartment, Nishi-Shinsaibashi)
//   + 紅爐餐廳 Honru Santen (Taiwanese stone-pot hot pot, Higashi-Shinsaibashi; long-standing)
//   + サカナザ・マエダ SAKANAZA MAEDA (reservation-only omakase French, Higashi-Shinsaibashi; about 30 years)
//   Lane: the first four mod-4 = 0 ids in `queue.mjs osaka next notable 120` after batch 6 (27138028, 27006672, 27001264, 27000904).
//   Chain check: Amanoi has one sister shop (Rilegalo, Tabelog remarks); the others are single shops (Tabelog; official sites). None
//   is in data/osaka.json (grep by name, romaji and address, 2026-11-01). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw1-7');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ ジョンナッチ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27138028/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '22:30']);
  put({
    id: 'osaka_jon_nacchi_kitahorie', name: '釜山式ナッコプセ専門店 ジョンナッチ (Busan-shiki Nakkopuse Senmon Ten Jon-nacchi)', category: 'OMNI',
    lat: 34.672894, lng: 135.494398, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The hot pots are simmered in a red chili sauce whose ingredients are not given (Korean chili pastes are often made with wheat), the chijimi pancakes are batter, and ramen noodles are an add-on.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: hot pots of octopus, offal, shrimp and pork belly.',
    hours_raw: 'Tue–Sun 17:30–22:30, last entry 21:30; closed Monday (Tabelog). Reservations accepted; phone 16:00–22:00 (Tabelog); a 90-minute limit (September 2026); small, so book (August 2026). Cards, IC cards and other e-money, and QR payments including PayPay, Alipay and WeChat Pay (Tabelog). 28 seats at tables for 4 and 2; non-smoking; wheelchair accessible; children and strollers welcome, high chairs (Tabelog). Ordering on your phone (August 2026). Korean menu and Korean-speaking staff; photo menu (Tabelog). Opened 26 September 2023 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kitahorie 1-13-21, 1F — 3 min from Yotsubashi Stn exit 6',
    cuisine: 'Busan-style nakkopse: a red hot pot of octopus, offal and shrimp, in four levels of spice, eaten with free refills of bean-sprout namul, seaweed and kimchi (Tabelog; 2026 reviews) · naksamse with pork belly (August–September 2026) · add more offal, shrimp, octopus or ramen noodles; finish with bokkeumbap, rice fried in the leftover broth, with cheese and flying-fish roe (Tabelog; September 2026) · minari or celery chijimi (July–September 2026) · kongguksu in summer (July 2026) · many makgeolli, alcoholic and non-alcoholic, and Korean drinks (Tabelog)',
    website: null, gmaps: gm('ジョンナッチ 北堀江'), menu_url: null,
    notes: "[Korean · Kitahorie, Busan-style nakkopse] A small Kitahorie shop, three minutes from Yotsubashi, devoted to nakkopse, the Busan hot pot of octopus, offal and shrimp in a bright red broth. Pick one of four spice levels (one diner found mild barely spicy, another regretted the hot one), eat it over rice with free refills of bean-sprout namul, seaweed and kimchi, and finish by frying rice in what is left, with cheese and flying-fish roe on top. Diners in 2026 singled out the sweet, tender offal and the crisp minari chijimi; there are plenty of makgeolli to drink. Orders go through your phone; the menu and some staff are in Korean. The room is small and seating is 90 minutes, so book. Closed Mondays.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed); Korean-speaking staff available (Tabelog)'], origin: null, background: 'Shop-maintained Tabelog listing: authentic nakkopse from Korea with plump octopus, juicy offal and shrimp; bokkeumbap fried until crisp to finish; a wide range of makgeolli and Korean drinks; Hangul name 정낙지 on the listing. Opened 26 September 2023.', philosophy: null, specialty: 'Nakkopse; bokkeumbap with cheese; minari chijimi.',
      anecdotes: [
        { text: '"Nakkopuse has four levels of spiciness, and I chose medium, which wasn\'t too spicy for me—it was just right." — July 2026.', source: R + 'B532401179/' },
        { text: '"I\'ve tried Nakkopuse at various places, but I think the horumon here is the sweetest and the most delicious." — October 2026, a repeat visit.', source: R + 'B538466643/' },
        { text: '"For the finale, I had Bokkeumbap with cheese topping, which was filled with tobiko and tasted amazing!" — September 2026, a first nakkopse.', source: R + 'B535520489/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 釜山式ナッコプセ専門店 ジョンナッチ (정낙지)、韓国料理、大阪市西区北堀江1-13-21 1F、四ツ橋駅6番出口から徒歩3分、火〜日17:30〜22:30 (最終入店21:30)、月曜定休、予約可 (電話は16時〜22時)、カード・電子マネー・QR可、28席、禁煙、車いす可、子ども・ベビーカー可、韓国語メニュー、韓国語のスタッフ、写真つきメニュー、2023年9月26日オープン。店の紹介 (英訳): 本場のナッコプセ、ぷりぷりのタコ、ホルモン、エビ、締めは bokkeumbap、マッコリなど韓国のお酒。口コミ(2026年7月〜10月): 4段階の辛さ、もやしのナムル・のり・キムチはおかわり自由、naksamse、締めの bokkeumbap にチーズ、ラーメン、minari のチヂミ、セロリのチヂミ、夏の kongguksu、スマホで注文、90分制、店は小さいので予約を、ホルモンが甘くておいしいという声。',
      confidence: 'medium', sources: [TB, R + 'B532401179/', R + 'B533348700/', R + 'B534615119/', R + 'B535176026/', R + 'B535456737/', R + 'B535520489/', R + 'B535660189/', R + 'B536298966/', R + 'B537053260/', R + 'B538466643/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Photo menu and phone ordering; Korean menu and Korean-speaking staff (Tabelog). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区北堀江1-13-21 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区北堀江一丁目13番21号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B532401179/', R + 'B535520489/'],
    price_note: 'No menu prices on Tabelog or in the reviews read.', last_checked: TODAY, items: [
      it('', '', 'Nakkopse (octopus, offal and shrimp hot pot; four spice levels)', '', 'Hot pot', 'ask', 'no', '2026 reviews.', 'nakkopse'),
      it('', '', 'Bokkeumbap to finish (cheese optional)', '', 'Hot pot', 'ask', 'no', 'Tabelog; September 2026.', 'bokkeumbap'),
      it('', '', 'Minari chijimi', '', 'Sides', 'no', 'ask', 'July 2026 reviews.', 'minari_chijimi'),
    ] }, {
    cuisine: '釜山式のナッコプセ: タコ、ホルモン、エビの赤い鍋、辛さは4段階、もやしのナムル、のり、キムチはおかわり自由 (食べログ、2026年の口コミ)・豚バラの入った naksamse (2026年8月〜9月)・ホルモン、エビ、タコ、ラーメンの追加も。締めは残ったスープで作る bokkeumbap、チーズととびこをのせて (食べログ、2026年9月)・minari かセロリのチヂミ (2026年7月〜9月)・夏は kongguksu (2026年7月)・マッコリ (アルコールとノンアルコール) や韓国のお酒がいろいろ (食べログ)',
    neighborhood: '北堀江1-13-21 1F。四ツ橋駅6番出口から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。鍋は材料のわからない赤い唐辛子のたれで煮込み (韓国の唐辛子みそは小麦を使うことが多い)、チヂミは粉の生地、ラーメンの追加もある。',
    vegan_detail: 'ヴィーガンではありません。タコ、ホルモン、エビ、豚バラの鍋。',
    notes: '[韓国料理・北堀江、釜山式ナッコプセ] 四ツ橋から3分、北堀江の小さなナッコプセの専門店。タコ、ホルモン、エビを真っ赤なスープで煮る釜山の鍋で、辛さは4段階 (マイルドはほとんど辛くないという人、辛いのを選んで少し後悔したという人も)。おかわり自由のもやしのナムル、のり、キムチと一緒にご飯にのせて食べ、最後は残りのスープでご飯を炒めて、チーズととびこをのせる。2026年の口コミでは甘くてやわらかいホルモンとさくさくの minari のチヂミが好評で、マッコリも多い。注文はスマホで、メニューやスタッフは韓国語にも対応。店は小さく90分制なので予約を。月曜休み。',
  });
}

// ================================================================ 旬菜 甘の井
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27006672/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '22:30']);
  put({
    id: 'osaka_shunsai_amanoi_nishishinsaibashi', name: '旬菜 甘の井 (Shunsai Amanoi)', category: 'OMNI',
    lat: 34.674097, lng: 135.498002, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information. Kaiseki courses with tempura, a duck hot pot in dashi, miso-glazed dishes and soba to finish.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: kaiseki of fish, wagyu and duck, in dashi.',
    hours_raw: 'Mon–Sat 17:00–22:30; closed Sunday and holidays; reservation only, by phone from 13:00 (Tabelog; the listing remarks say from 16:00); cancellation on the day or the day before is charged 100% of the course (Tabelog). No cover charge (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 50 seats: 28 at tables and 22 on tatami, in private rooms for 2 up to 28; the whole floor can be hired; non-smoking seats, with a heated-tobacco area (Tabelog). In a flat on 9F of an apartment building, hard to find from outside (2026 reviews). Children welcome (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishi-Shinsaibashi 1-10-28, 9F of the 心斎橋Ｍビル behind the Hotel Nikko — 1 min from Shinsaibashi Stn, 3 min from Yotsubashi',
    cuisine: 'Seasonal kaiseki and the house Kyoto duck hot pot, made with duck raised in Kyotanba and sent direct from a Kyoto farm (Tabelog) · duck hot pot course with all-you-can-drink ¥7,700 tax included (November 2025); an extra hour of drinks ¥1,200 (Tabelog) · the chef\'s special kaiseki of ten dishes (October 2026), e.g. a seasonal appetizer assortment, soup, thick-cut sashimi, steamed kinmedai with mushrooms · other dishes in 2025–26 reviews: duck tempura wrapped in green onion, handmade soba to finish the hot pot, wagyu yukhoe, steak, matsutake tempura, autumn rice, anago with sudachi, chicken fukusa-yaki, eggplant dengaku · sake such as Tamano Hikari junmai daiginjo from Fushimi (April 2026)',
    website: null, gmaps: gm('旬菜 甘の井 心斎橋'), menu_url: null,
    notes: "[Kaiseki · Nishi-Shinsaibashi, a hidden flat on the 9th floor] A reservation-only Japanese restaurant hidden in a flat on the ninth floor of an apartment building behind the Hotel Nikko, made over into tatami and table rooms for two up to 28, quiet enough that, the listing says, celebrities come incognito. The house dish is a Kyoto duck hot pot of duck raised in Kyotanba, finished with handmade soba (¥7,700 with all-you-can-drink in November 2025); otherwise take the ten-dish seasonal kaiseki, with thick-cut sashimi and steamed kinmedai. Diners praise the value and the staff, who dimmed the lights for elderly guests at one party (August 2026); one found the walls between rooms thin. Bookings are getting harder (April 2026); cancellations the day before are charged in full. Closed Sundays and holidays.",
    chef_bio: { chef_name: null, roles: ['Kitchen and service staff (unnamed)'], origin: null, background: 'Shop-maintained Tabelog listing: a reservation-only restaurant in a converted flat behind the Nikko Hotel, with tatami rooms and tables, kaiseki and Kyoto duck hot pot; ducks raised from chicks in Kyotanba\'s clean water and air and shipped direct from a Kyoto duck farm; "even celebrities visit incognito"; sister shop Rilegalo. Neighbours in the same building: LiLo Coffee Roasters on 1F (osaka_lilo_coffee_roasters_shinsaibashi) and Pesca on 10F (osaka_pesca_shinsaibashi), per their address_ja in data.', philosophy: null, specialty: 'Kyoto duck hot pot; seasonal kaiseki.',
      anecdotes: [
        { text: '"The staff was incredibly attentive, adjusting the lighting for the elderly guests and showing great care throughout our visit." — August 2026, a private dinner for twelve.', source: R + 'B535746001/' },
        { text: '"The soba noodles served at the end were handmade, and the broth was so delicious that I drank every last drop." — January 2026, the duck hot pot.', source: R + 'B448773197/' },
        { text: '"I\'ve noticed that for about a month now, it\'s become difficult to make a reservation without booking in advance." — April 2026, a regular.', source: R + 'B514576599/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 旬菜 甘の井 (しゅんさいあまのい)、日本料理・鍋、大阪市中央区西心斎橋1-10-28 心斎橋Ｍビル 9F、心斎橋駅から徒歩1分、四ツ橋駅から徒歩3分、月〜土17:00〜22:30、日・祝休み、完全予約制 (電話は13時から)、当日と前日のキャンセルはコース料金の100%、チャージなし、カード可、電子マネー・QR不可、50席 (テーブル28、座敷22)、個室2〜28名、フロアの貸切も可、加熱式たばこの喫煙スペース、子ども可、系列店 Rilegalo。店の紹介 (英訳): Hotel Nikko の裏のマンションの隠れ家、座敷とテーブル席で懐石と Kyoto の鴨の鍋、Kyotanba で育った鴨をKyoto の鴨の農場から直送、有名人もお忍びで来る、2時間の飲み放題に1時間1,200円で延長。口コミ(2025年9月〜2026年10月): 鴨鍋の飲み放題つきコース7,700円、締めの手打ちそば、鴨のねぎ巻き天ぷら、10品の特別懐石、厚切りのお造り、kinmedai の蒸し物、和牛ユッケ、松茸の天ぷら、Tamano Hikari の純米大吟醸、高齢の客のために照明を調整、個室の壁が薄いという声、予約が取りにくくなった。',
      confidence: 'medium', sources: [TB, R + 'B448773197/', R + 'B514576599/', R + 'B515151448/', R + 'B517357092/', R + 'B517486733/', R + 'B523552924/', R + 'B525823357/', R + 'B531849639/', R + 'B535746001/', R + 'B535997207/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Reservation-only set courses in private rooms (2025–26). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '大阪府大阪市中央区西心斎橋1-10-28 心斎橋Ｍビル 9F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区西心斎橋一丁目10番28号 (go) 5m. LiLo Coffee Roasters (osaka_lilo_coffee_roasters_shinsaibashi, 1F) and Pesca (osaka_pesca_shinsaibashi, 10F) are in the same building with pins within about 25 m, so this pin is block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B514576599/'],
    price_note: 'One dated course price (November 2025); the extra drinks hour from the Tabelog listing.', last_checked: TODAY, items: [
      it('', '', 'Kyoto duck hot pot course with all-you-can-drink', '¥7,700', 'Courses', 'ask', 'no', 'November 2025 review.', 'kamonabe_course'),
      it('', '', 'Chef\'s special kaiseki (10 dishes)', '', 'Courses', 'ask', 'no', 'October 2026 review.', 'kaiseki_course'),
      it('', '', 'Extra hour of all-you-can-drink', '¥1,200', 'Drinks', '', '', 'Tabelog listing.', 'nomihodai_extension'),
    ] }, {
    cuisine: '季節の懐石と名物の Kyoto の鴨の鍋。鴨は Kyotanba で育ち、Kyoto の鴨の農場から直送 (食べログ)・飲み放題つきの鴨鍋コース7,700円 (税込、2025年11月)。飲み放題の1時間延長は1,200円 (食べログ)・10品の特別懐石 (2026年10月): 季節の前菜の盛り合わせ、お椀、厚切りのお造り、kinmedai ときのこの蒸し物など・2025〜26年の口コミのほかの料理: 鴨のねぎ巻き天ぷら、鍋の締めの手打ちそば、和牛のユッケ、ステーキ、松茸の天ぷら、秋の炊き込みご飯、Anago Suppari Sudachi、Tori Fukusa Yaki、Nasu Dengaku・Fushimi の Tamano Hikari の純米大吟醸など (2026年4月)',
    neighborhood: '西心斎橋1-10-28、Hotel Nikko の裏の心斎橋Ｍビルの9階。心斎橋駅から徒歩1分、四ツ橋駅から徒歩3分',
    gf_detail: '予約時に要確認。グルテンの情報なし。懐石のコースには天ぷら、だしの鴨鍋、味噌の料理、締めのそばが入る。',
    vegan_detail: 'ヴィーガンではありません。魚、和牛、鴨の懐石で、だしを使う。',
    notes: '[懐石・西心斎橋、9階の隠れ家] Hotel Nikko の裏のマンションの9階、一室を座敷とテーブルの個室 (2名から28名まで) に改装した完全予約制の和食の店で、食べログには有名人もお忍びで来るとある。名物は Kyotanba で育った鴨の鍋で、締めは手打ちそば (2025年11月は飲み放題つきで7,700円)。ほかには厚切りのお造りや kinmedai の蒸し物の入った10品の季節の懐石も。お得さとスタッフが好評で、高齢の客のために照明を落としてくれたという声 (2026年8月)。個室の壁が薄いという人も。予約は取りにくくなっていて (2026年4月)、前日のキャンセルは全額。日曜・祝日休み。',
  });
}

// ================================================================ 紅爐餐廳
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27001264/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://honru.jp/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'osaka_honru_santen_higashishinsaibashi', name: '紅爐餐廳 (Honru Santen)', category: 'OMNI',
    lat: 34.670461, lng: 135.502895, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Taiwanese soy sauce runs through the menu (soy-marinated clams, garlic soy pork and shrimp), and the courses include spring rolls, buns, tempura-wrapped noodles and noodles to finish the hot pot.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the stone-pot hot pot is a chicken-bone broth with pork, seafood and fish balls.',
    hours_raw: 'Mon–Sat 17:00–23:00 (sometimes closing earlier); Sun and holidays 17:00–21:30; closed Sundays except in December, when it opens on Sundays and holidays (official site). Tabelog gives Sunday 17:00–22:00 and holidays 17:00–21:00. Reservations accepted; in December and January call to book (Tabelog). Cards (VISA, Master per the official site; Tabelog adds JCB, AMEX, Diners); drinks courses for 7 or more are cash only (official site). 45 seats, up to 50 if hired (official site); non-smoking, smoking at the entrance (Tabelog). Chinese spoken (official site). Wheelchair accessible; children and strollers welcome (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 2-7-12, 1F of the ホワイトビル — 10 min from Shinsaibashi Stn exit 5 or Namba',
    cuisine: 'Taiwanese cooking by a Taiwanese chef, built around the stone-pot hot pot (石頭火鍋): ingredients stir-fried in sesame oil at the table, then simmered in a chicken-bone broth, not spicy, with a raw-egg dipping sauce and noodles to finish (Tabelog; official site) · prices from the official site, tax included, read November 2026: stone-pot hot pot with three starters and noodles ¥4,730 a person (two or more); courses ¥5,610 and ¥6,050 (three or more) adding spring rolls, ham-and-yuba buns and a shrimp dish; drinks courses ¥6,500–7,500 (seven or more, cash) · à la carte: 蜜汁火腿 honey ham with fried yuba in buns ¥1,200, homemade oyster spring rolls ¥1,200 for three, 菜脯蛋 dried-radish omelette ¥1,000, homemade squid balls ¥1,400, shijimi clams marinated a week in house soy sauce ¥1,400, Taiwanese sausage ¥1,400, pineapple shrimp with mayonnaise ¥1,600, shrimp chili ¥1,600, Hakka stir-fry ¥1,300, oysters in black bean ¥1,400, drunken chicken in Shaoxing ¥1,500, garlic pork ¥1,500 · drinks: Shaoxing wine, osmanthus wine, a "Dragon Highball" of Shaoxing, soda and sour plum, winter-melon tea, mango juice (Tabelog; official site)',
    website: SITE, gmaps: gm('紅爐餐廳 東心斎橋'), menu_url: SITE + 'alacarte.html',
    notes: "[Taiwanese · Higashi-Shinsaibashi, the stone-pot hot pot] A long-running Taiwanese restaurant on a Higashi-Shinsaibashi corner, its walls lined with celebrity autographs, where regulars of ten and even thirty years come back for the stone-pot hot pot: pork, seafood, squid balls and vegetables stir-fried in sesame oil in front of you, then simmered in a gentle chicken-bone broth that diners drink by the bowl, with noodles to finish (¥4,730 a person with three starters). Do not skip the homemade oyster spring rolls, crisp outside and soft inside, the dried-radish omelette, or the shijimi clams steeped a week in house soy sauce. The chef trained at Tsuji Culinary Institute and in Taipei and Kaohsiung, and diners call the owner-chef friendly. Chinese spoken. Closed Sundays except in December.",
    chef_bio: { chef_name: null, roles: ['Chef (named Huang Chengjie in Tabelog\'s machine-translated English listing); Taiwanese owners (September 2026 review)'], origin: 'Taiwanese (Tabelog: "a Taiwanese chef")', background: 'Per the official site: graduated from 辻調理師専門学校 in 2015; won the Minister of Health, Labour and Welfare award (first in the Chinese-cuisine division) at the 2015 student competition; trained at the Sheraton in Taipei and at a Taiwanese seafood restaurant in Kaohsiung. The site describes a long-established shop (老舗) with many regulars and celebrity autographs on the walls, featured in the media, including the TV programme どやメシ紀行. Tabelog adds that the chef travels to Taiwan regularly. Reviews: regulars of more than 10 years (April 2025) and 30 years (October 2025); "the owner-chef is very friendly" (August 2026).', philosophy: null, specialty: 'Stone-pot hot pot; oyster spring rolls; soy-marinated shijimi.',
      anecdotes: [
        { text: '"I\'ve been coming here for 30 years, but this was my first visit in about 10 years." — October 2025, the stone-pot hot pot.', source: R + 'B517234235/' },
        { text: '"One dish you absolutely must try here is the homemade shijimi clam marinated in soy sauce." — September 2026.', source: R + 'B534912261/' },
        { text: '"The owner-chef is very friendly" — August 2026, a long-time winter regular.', source: R + 'B534754786/' },
      ],
      japanese_sources_summary: '公式サイト: 紅爐餐廳 ホンルーサンテン、心斎橋の一角の本格台湾料理、店内は有名人のサインがずらり、常連が多い長年続く老舗、メディアにも、どやメシ紀行で紹介、名物の石頭火鍋、大阪市中央区東心斎橋2-7-12 ホワイトビル1F、心斎橋駅5番出口から徒歩10分、45席 (貸切50名)、月〜土17:00〜23:00、日・祝17:00〜21:30、日曜定休 (12月は日・祝も営業)、平均5,000〜6,500円、カード可 (VISA、MASTER)、全席禁煙、中国語対応。料理人の経歴: 2015年 辻調理師専門学校卒業、2015年 学生コンクール 厚生労働大臣賞 (中国料理部門優勝)、台北シェラトンホテル 研修、高雄台湾料理 海鮮レストラン 研修。コース (税込): 石頭火鍋 (2名から) 1人前4,730円 (前菜3品、〆の麺)、5,610円コースと6,050円コース (3名以上)、飲み放題コース6,500円〜7,500円 (7名以上、現金のみ)。アラカルト: 蜜汁火腿 1,200円、春捲 (自家製カキ春巻) 1,200円、菜脯蛋 1,000円、花枝丸 1,400円、しじみ (自家製しじみ醤油漬け) 1,400円、香腸 1,400円、鳳梨蝦球 1,600円、乾燥蝦球 1,600円、客家小炒 1,300円、豆鼓鮮 1,400円、紹興酔鶏 1,500円、蒜泥白肉 1,500円。口コミ(2025年9月〜2026年9月): 石鍋のスープ、カキ春巻、干し大根の卵焼き、しじみの醤油漬け、豚の耳、30年来の常連、テレビでも紹介、オーナーシェフが親切、台湾の人の店。',
      confidence: 'high', sources: [TB, SITE, SITE + 'course.html', SITE + 'alacarte.html', R + 'B26433423/', R + 'B317011516/', R + 'B439417009/', R + 'B500102168/', R + 'B515281481/', R + 'B517234235/', R + 'B520662915/', R + 'B534754786/', R + 'B534900104/', R + 'B534912261/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Chinese spoken (official site); hot pot cooked at the table. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '大阪府大阪市中央区東心斎橋2-7-12 ホワイトビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and official site; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋二丁目7番12号 (go) 10m. 焼鳥 無名 (osaka_yakitori_mumei_no_name, ホワイトビル 4F) and 日本酒屋 一郎 (osaka_nihonshuya_ichiro, ホワイトビル302) share this building and the same Tabelog point, so this pin is block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE + 'course.html', SITE + 'alacarte.html'],
    price_note: 'Prices from the official site (tax included; undated, read 2026-11-01).', last_checked: TODAY, items: [
      it('石頭火鍋', '', 'Stone-pot hot pot with three starters and noodles (per person, two or more)', '¥4,730', 'Hot pot', 'no', 'no', 'Official site.', 'sekito_hotpot'),
      it('春捲', '', 'Homemade oyster spring rolls (3)', '¥1,200', 'À la carte', 'no', 'no', 'Official site.', 'oyster_spring_roll'),
      it('菜脯蛋', '', 'Dried-radish omelette', '¥1,000', 'À la carte', 'ask', 'no', 'Official site.', 'caipudan'),
      it('しじみ', '', 'Shijimi clams marinated in house soy sauce', '¥1,400', 'À la carte', 'no', 'no', 'Official site.', 'shijimi'),
      it('蜜汁火腿', '', 'Honey ham with fried yuba in buns (2)', '¥1,200', 'À la carte', 'no', 'no', 'Official site.', 'honey_ham'),
      it('乾燥蝦球', '', 'Shrimp in chili sauce', '¥1,600', 'À la carte', 'ask', 'no', 'Official site.', 'shrimp_chili'),
    ] }, {
    cuisine: '台湾の料理人の台湾料理、主役は石頭火鍋: 席の前で具をごま油で炒め、鶏ガラのスープで煮る辛くない鍋、たれは生卵、締めは麺 (食べログ、公式サイト)・値段は公式サイト、税込、2026年11月に確認: 前菜3品と〆の麺つきの石頭火鍋1人前4,730円 (2名から)。春捲、ハムと揚げ湯葉の中華パン包み、エビ料理を加えたコース5,610円と6,050円 (3名以上)。飲み放題コース6,500〜7,500円 (7名以上、現金のみ)・アラカルト: 蜜汁火腿 (台湾生ハムの湯葉薄パン包み) 1,200円、自家製カキ春巻3本1,200円、菜脯蛋 (干し大根入り玉子焼き) 1,000円、自家製イカ団子の唐揚げ1,400円、自家製しじみ醤油漬け1,400円、台湾ソーセージ1,400円、揚げエビマヨネーズパイナップルあえ1,600円、エビチリソース1,600円、客家小炒1,300円、カキの台湾黒味噌炒め1,400円、鶏肉紹興酒蒸し1,500円、蒜泥白肉1,500円・飲み物: 紹興酒、桂花陳酒、紹興酒をソーダと甘酸っぱい梅で割った「Dragon Highball」、冬瓜のお茶、マンゴージュース (食べログ、公式サイト)',
    neighborhood: '東心斎橋2-7-12、ホワイトビルの1階。心斎橋駅5番出口やなんばから徒歩10分',
    gf_detail: '要確認。グルテンの情報なし。台湾の醤油をよく使い (しじみの醤油漬け、にんにく醤油の豚やエビ)、コースには春巻、中華パン、エビ天ぷらの細麺巻、鍋の締めの麺も。',
    vegan_detail: 'ヴィーガンではありません。石頭火鍋は鶏ガラのスープに豚、魚介、魚のつみれ。',
    notes: '[台湾料理・東心斎橋、石頭火鍋] 東心斎橋の一角で長く続く台湾料理の店で、壁には有名人のサインがずらり。10年、30年来の常連が石頭火鍋を食べに戻ってくる。豚、魚介、イカ団子、野菜を目の前でごま油で炒め、やさしい鶏ガラのスープで煮て、スープは飲み干したくなるほど。締めは麺 (前菜3品つきで1人前4,730円)。外はさくさく中はとろりの自家製カキ春巻、干し大根の玉子焼き、1週間漬けたしじみの醤油漬けもぜひ。料理人は辻調理師専門学校を出て台北と高雄で研修し、オーナーシェフは気さくという声。中国語対応。日曜休み (12月は営業)。',
  });
}

// ================================================================ サカナザ・マエダ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27000904/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.sakanaza.com/';
  const H = day(['11:30', '14:00'], ['17:00', '21:00']);
  put({
    id: 'osaka_sakanaza_maeda_higashishinsaibashi', name: 'サカナザ・マエダ (SAKANAZA MAEDA)', category: 'OMNI',
    lat: 34.67464, lng: 135.502758, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information. An omakase French course with bread, gratins and sauces.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an omakase French course of fish, meat and dairy.',
    hours_raw: 'Tue–Sun 11:30–14:00 and 17:00–21:00; closed Monday; hours may change (Tabelog). Reservation only, an omakase course; book by two days before; occasional closures, posted on Instagram (official site). Cards (VISA, Master, JCB, AMEX, Diners) and QR payments; no e-money (Tabelog). 24 seats with a counter and about four tables at lunch; non-smoking (Tabelog; February 2024). Up a staircase to 2F (2024 reviews). About 30 years in business, per the staff (August 2026).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 1-19-19, 2F of the ケイティーズ心斎橋 — 3 min east of the クリスタ長堀 south exit 10, Shinsaibashi Stn',
    cuisine: 'Omakase French of seasonal ingredients, by reservation (official site) · summer 2026: appetizers of seasonal vegetables, a cold soup in a large bowl, fish with crisp skin, tender steak, dessert (August 2026); a summer-themed menu (July 2026) · earlier prices: dinner omakase ¥6,000 (March and July 2024), lunch ¥3,300 (February 2024), a lunch course ¥6,600 (May 2024: saury and bonito salad, wild-boar gratin, stone bass with firefly squid, sirloin-cap tartare steak, kiwi sorbet with white-wine jelly) · lunch for about ¥3,000–3,999 and dinner for about ¥10,000–14,999 a head with wine in August 2026 reviews · onion gratin soup and peach vichyssoise remembered by regulars (2023–24)',
    website: SITE, gmaps: gm('SAKANAZA MAEDA 心斎橋'), menu_url: null,
    notes: "[French · Higashi-Shinsaibashi, a 30-year bistro] A small French restaurant up a flight of stairs east of the クリスタ長堀 underground mall, open for about 30 years by the staff's count and still cooking one omakase course of the season, booked two days ahead. In August 2026 that meant bright seasonal-vegetable appetizers, a cold soup in a big bowl, crisp-skinned fish and a tender steak; the 2024 menus ran to wild-boar gratin, stone bass with firefly squid and a sirloin-cap tartare. It is a place people return to for decades: one couple came back on the anniversary of a first date there 23 years before (2023), and business diners call it consistent. Lunch ran about ¥3,000–4,000 and dinner ¥10,000–15,000 with wine in 2026. Counter seats are comfortable for one. Closed Mondays.",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed in the sources read)'], origin: null, background: 'The official site (© 2012) states that the restaurant works by reservation with an omakase course, booked two days ahead. An August 2026 diner was told by the staff that it opened about 30 years ago; a 2023 diner had a first date there 23 years earlier.', philosophy: null, specialty: 'Seasonal omakase French course.',
      anecdotes: [
        { text: '"When I asked the staff, they mentioned that it opened about 30 years ago. It\'s impressive that they have survived in such a competitive area." — August 2026, lunch.', source: R + 'B536207947/' },
        { text: '"The cold soup was unlike anything I had tasted before, with a rich flavor that made me want to drink more from the large bowl." — August 2026, a Saturday dinner.', source: R + 'B534054264/' },
        { text: '"This time I sat at the counter, which was spacious and provided a calming ambiance." — July 2026, a first visit.', source: R + 'B532151563/' },
      ],
      japanese_sources_summary: '公式サイト: SAKANAZA MAEDA、御予約制・おまかせコースで営業、御予約は2日前までに、臨時休業あり、最新の情報はインスタグラムか電話で、心斎橋駅のクリスタ長堀南10番出入口から東へ徒歩3分。食べログ: サカナザ・マエダ、フレンチ、大阪市中央区東心斎橋1-19-19 ケイティーズ心斎橋 2F、火〜日11:30〜14:00・17:00〜21:00、月曜定休、カード・QR可、24席、カウンター、禁煙。口コミ(2023年6月〜2026年8月): 約30年前にオープン (店の人の話)、季節の野菜の前菜、大きな器の冷たいスープ、皮がぱりっとした魚、やわらかいステーキ、2024年はおまかせ6,000円、ランチ3,300円、ランチコース6,600円、オニオングラタンスープ、桃のヴィシソワーズ、23年前の初デートの店に再訪、接待にも、カウンターは落ち着く。',
      confidence: 'medium', sources: [TB, SITE, SITE + 'access.html', R + 'B467417181/', R + 'B479435076/', R + 'B480682288/', R + 'B485979085/', R + 'B492906465/', R + 'B495683423/', R + 'B515698364/', R + 'B532151563/', R + 'B534054264/', R + 'B536207947/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One omakase course, booked two days ahead by phone (official site). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-19-19 ケイティーズ心斎橋 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目19番19号 (go) 8m. Neighbours in the Unagidani block at other house numbers (1-19-15, 1-19-11), so the pin stays precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B479435076/', R + 'B480682288/', R + 'B495683423/'],
    price_note: 'Only 2024 prices are given in reviews; 2026 reviews give spending bands, not prices.', last_checked: TODAY, items: [
      it('', '', 'Dinner omakase course (2024 price)', '¥6,000', 'Dinner', 'ask', 'no', 'March and July 2024 reviews.', 'dinner_omakase'),
      it('', '', 'Lunch (2024 price)', '¥3,300', 'Lunch', 'ask', 'no', 'February 2024 review.', 'lunch'),
      it('', '', 'Lunch course (2024 price)', '¥6,600', 'Lunch', 'ask', 'no', 'May 2024 review.', 'lunch_course'),
    ] }, {
    cuisine: '季節の素材のおまかせのフレンチ、予約制 (公式サイト)・2026年夏: 季節の野菜の前菜、大きな器の冷たいスープ、皮がぱりっとした魚、やわらかいステーキ、デザート (2026年8月)。夏らしいメニュー (2026年7月)・以前の値段: 夜のおまかせ6,000円 (2024年3月・7月)、ランチ3,300円 (2024年2月)、ランチコース6,600円 (2024年5月: サンマとかつおのサラダ、猪のグラタン、stone bass とホタルイカ、sirloin cap のタルタルステーキ、キウイのソルベと白ワインのゼリー)・2026年8月の口コミでは、昼は1人3,000〜3,999円、夜はワインと1人10,000〜14,999円ほど・常連が覚えているオニオングラタンスープと桃のヴィシソワーズ (2023〜24年)',
    neighborhood: '東心斎橋1-19-19、ケイティーズ心斎橋の2階。心斎橋駅のクリスタ長堀南10番出入口から東へ3分',
    gf_detail: '予約時に要確認。グルテンの情報なし。パン、グラタン、ソースのあるおまかせのフレンチのコース。',
    vegan_detail: 'ヴィーガンではありません。魚、肉、乳製品のおまかせのフレンチのコース。',
    notes: '[フレンチ・東心斎橋、30年のビストロ] クリスタ長堀の東、階段を上がる小さなフレンチで、店の人によると開いて30年ほど。今も季節のおまかせのコースひとつで、予約は2日前までに。2026年8月は、彩りのよい季節の野菜の前菜、大きな器の冷たいスープ、皮がぱりっとした魚、やわらかいステーキ。2024年のメニューには猪のグラタン、stone bass とホタルイカ、sirloin cap のタルタルステーキも。何十年も通う人がいる店で、23年前の初デートの記念日に夫婦で訪れた人も (2023年)。仕事の会食でもいつも安定しているという声。2026年は昼が3,000〜4,000円ほど、夜はワインと10,000〜15,000円ほど。カウンター席は一人でも落ち着ける。月曜休み。',
  });
}

save();
