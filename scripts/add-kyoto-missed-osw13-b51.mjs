// Kyoto priority (kyoto-missed), worker osw13, batch 51 — lane: Tabelog id mod 6 = 0.
// Core: 075食堂, 和久. Notable: 御所南 かまた, 洋食 ヒグチ亭.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-51');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26000412', 'chain: イノダコーヒ 本店 is one of 6+ same-name イノダコーヒ shops in the crawl (本店, 三条支店, 四条支店, ポルタ支店, 八条口支店, コーヒーサロン支店); 5+ same-name = chain, and a chain flagship counts as the chain (Greg ruling 2026-11-05)');
skip('26028816', 'brand already in data: 京都千丸 しゃかりき むらさき is a sister shop of 京都千丸 しゃかりき 本店, already in kyoto.json; a brand already in data → skip its other same-concept branches (Greg ruling 2026-11-05)');

// ================================================================ 075食堂
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26041068/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:30', '13:00'], ['16:00', '22:00']); const WE = day(['16:00', '22:00']);
  put({
    id: 'kyoto_075_shokudo', name: '075食堂 (075 Shokudo)', category: 'OMNI',
    lat: 35.010034, lng: 135.761124, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tempura, kara-age, bruschetta and dan dan noodles are on the menu (Tabelog; 2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish-first counter — sashimi, yellowtail collar, Omi beef, shuto (Tabelog; 2025–2026 reviews).',
    hours_raw: 'Tabelog: Mon–Fri 11:30–13:00 and 16:00–22:00; Sat, Sun and holidays 16:00–22:00 (the shop’s own Tabelog blurb says it opens from 3 pm for daytime drinking). 12 counter seats plus 4 standing places by the door; private hire up to 20 by arrangement; non-smoking; cards (Visa, Master, JCB, Amex, Diners) and PayPay, no e-money (Tabelog). Service charge: none — Tabelog’s Japanese original says 「無し」 (the English auto-translation wrongly says one is added). Opened 13 April 2024 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Karasuma Oike — 2 min walk from Karasuma Oike Stn',
    cuisine: 'A small counter izakaya of fish and sake (Tabelog) · sashimi from fish sent from Maizuru port and market, grilled Omi beef, tempura, obanzai (Tabelog) · one kind of sashimi a day — sanma in September 2025, buri (yellowtail) in October 2025 and January 2026 (reviews) · a "buri festival" day in August 2026: buri sashimi, a big grilled buri collar, buri tempura in shiso (reviews) · bruschetta, spring-greens namul, kara-age, potato salad, shuto, dan dan noodles to finish, homemade ginger ale (2025–2026 reviews) · seasonal sake, e.g. Gangi by the 180 ml (August 2026)',
    website: null, gmaps: gm('075食堂 笹屋町'), menu_url: null,
    notes: '[Izakaya · Karasuma Oike counter, fish and sake] A bright, twelve-seat counter two minutes from Karasuma Oike, opened in April 2024: one fish of the day as sashimi — sanma, buri — plus grilled Omi beef, tempura, obanzai and a good run of seasonal sake. A picture menu, and in 2025–2026 the counter often filled with visitors from abroad. One August 2026 diner found the high counter stools awkward. Lunch on weekdays only. No service charge.',
    chef_bio: { chef_name: null, roles: ['Not named in a source; an October 2025 diner chatted with "the master"'], origin: null,
      background: 'Opened 13 April 2024 (Tabelog). The shop’s Tabelog blurb describes a stylish counter bar with sashimi from fish delivered from Maizuru port and market, grilled Omi beef, tempura and obanzai, seasonal sake, and daytime drinking welcomed. Reviewers in 2025–2026 describe a calm, clean, bright counter visible from the street, a menu with photos, and many casual visitors from abroad.',
      philosophy: null,
      specialty: 'Fish of the day as sashimi; buri in winter.',
      anecdotes: [
        { text: 'A September 2025 traveller hunting for a second stop was waved in by a friendly regular smoking outside, who recommended the sanma sashimi — "incredibly delicious, with a rich layer of fat."', source: R + 'B513453141/' },
        { text: 'On a Friday in October 2025 every other seat was taken by tourists from abroad, "leaving me as the only Japanese customer" — and a good chat with the master.', source: R + 'B514760102/' },
        { text: '"The counter seats are quite high, which might be uncomfortable for women." — August 2026.', source: R + 'B534555630/' },
        { text: 'A January 2026 regular came back for the buri collar, found it sold out, and promised "a revenge visit during the delicious winter season."', source: R + 'B499053495/' },
      ],
      japanese_sources_summary: '食べログ: 075食堂 (ゼロ・ナナ・ゴウ食堂)、居酒屋、中京区笹屋町446-4 ツインイワキ 1F、烏丸御池駅から徒歩2分、月〜金 11:30〜13:00・16:00〜22:00、土日祝 16:00〜22:00、カウンター12席と入口の立ち飲み4、貸切20名まで相談、禁煙、カード・PayPay可、サービス料は原文で「無し」、2024年4月13日オープン、舞鶴の港と市場から届く魚の刺身、近江牛の焼き物、天ぷら、おばんざい、季節の日本酒、昼飲み歓迎。口コミ (2025年6月〜2026年8月、英語): 刺身は日替わりで1種 (秋刀魚、鰤)、鰤かまは売り切れのことも、ブルスケッタ、春菜のナムル、唐揚げ、ポテトサラダ、酒盗、締めの担々麺、自家製ジンジャーエール、8月の「鰤祭り」で鰤の刺身・鰤かま・鰤の大葉天ぷら、雁木180ml、写真付きのメニュー、海外からの客が多い、カウンターの椅子が高い、マスターとの会話。',
      confidence: 'medium', sources: [TB, R + 'B499053495/', R + 'B513453141/', R + 'B514760102/', R + 'B518200281/', R + 'B521292575/', R + 'B525292920/', R + 'B534311983/', R + 'B534555630/', R + 'B534587145/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Picture menu; a counter that often fills with visitors from abroad (2025–2026 reviews).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区笹屋町446-4 ツインイワキ 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.010034, 135.761124); cross-checked: GSI 京都府京都市中京区笹屋町446番地 (lot) 34m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B521292575/', R + 'B534587145/', R + 'B513453141/'],
    price_note: 'No prices in the sources; average spend ¥2,000–4,999 a head (2025–2026 reviews).', last_checked: TODAY, items: [
      it('', '', 'Sashimi of the day (one kind; buri, sanma)', null, 'Food', 'ask', 'no', 'September 2025, January and August 2026.', 'sashimi'),
      it('', '', 'Grilled buri collar (buri kama)', null, 'Food', 'ask', 'no', 'August 2026; sold out in January 2026.', 'fish_collar'),
      it('', '', 'Buri tempura with shiso', null, 'Food', 'no', 'no', 'August 2026.', 'tempura'),
      it('', '', 'Dan dan noodles', null, 'Food', 'no', 'no', 'January 2026.', 'dandan_noodles'),
    ] }, {
    cuisine: '魚と日本酒の小さなカウンターの居酒屋 (食べログ)・舞鶴の港と市場から届く魚の刺身、近江牛の焼き物、天ぷら、おばんざい (食べログ)・刺身は日替わりで1種、2025年9月は秋刀魚、2025年10月と2026年1月は鰤 (口コミ)・2026年8月の「鰤祭り」の日は鰤の刺身、大きな鰤かま、鰤の大葉天ぷら (口コミ)・ブルスケッタ、春菜のナムル、唐揚げ、ポテトサラダ、酒盗、締めの担々麺、自家製ジンジャーエール (2025〜2026年の口コミ)・季節の日本酒、雁木を180mlで (2026年8月)',
    neighborhood: '烏丸御池。烏丸御池駅から徒歩2分',
    gf_detail: 'グルテンフリーではない: 天ぷら、唐揚げ、ブルスケッタ、担々麺がある (食べログ、2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 魚が主役のカウンター。刺身、鰤かま、近江牛、酒盗 (食べログ、2025〜2026年の口コミ)。',
    notes: '[居酒屋・烏丸御池のカウンター、魚と日本酒] 烏丸御池から徒歩2分、2024年4月にできた明るい12席のカウンター。刺身はその日の1種 (秋刀魚、鰤など) で、近江牛の焼き物、天ぷら、おばんざい、季節の日本酒もそろう。写真付きのメニューで、2025〜2026年は海外からの客でカウンターが埋まることも多い。2026年8月にはカウンターの椅子が高くて座りにくいという声。昼は平日のみ。サービス料なし。',
  });
}

// ================================================================ 和久
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26006382/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.ryourininn.com/';
  const H = day(['12:00', '21:30']);
  put({
    id: 'kyoto_waku_higashiyama', name: '和久 (Waku)', category: 'MOM_AND_POP',
    lat: 34.997822, lng: 135.777723, cuisine_type: 'kaiseki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the set course includes tempura (official site).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a dashi course with sashimi, tempura and red miso soup (official site); sea bream and Iberico pork in reviews.',
    hours_raw: 'Official site: reservations only; open about 12:00–21:30 on days and times that are booked, closed otherwise; the site notes Google Maps shows it as temporarily closed but it is open by reservation. Tabelog: lunch 11:30–13:00 and dinner 18:00–20:30 starts, closed irregularly; lunch and dinner are the same course. Bookings by phone (answering machine, call back the next day) or e-mail; the site asks for date, dislikes, wishes, phone number and how you heard of the shop. Hard to book: Tabelog (2022) advises 4–6 months ahead; a 2022 diner said full a year ahead; a January 2025 diner booked the next autumn on leaving. Course about 3½ hours. 9 counter seats (official site; Tabelog says 10); private hire for 6 or more; non-smoking; no cards, e-money or QR — cash only (official site; Tabelog). Service charge: none — Tabelog’s Japanese original says 「なし」. No parking. Opened 14 September 2007 (official site; Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Higashiyama, about 2 min walk from the Yasaka Pagoda — 2 min from the Kiyomizu-michi bus stop',
    cuisine: 'One omakase kappo course of Kyoto cooking with the owner’s own ideas (official site) · ¥5,940 tax included: a dashi dish, sashimi, a main, tempura, rice with accompaniments, red miso soup and dashimaki, fruit; changes with the season and the guest (official site) · seen: a whole sea bream filleted at the counter for white-miso and sashimi dishes, Iberico pork hot pot with grated lotus root (February 2024); roasted eggplant mixed with shrimp, tempura, grilled fish, sashimi (November 2024) · spend with drinks ¥6,000–9,999 (2022–2026 reviews)',
    website: SITE + 'waku.html', gmaps: gm('和久 東山区月輪町'), menu_url: SITE + 'waku/konndate.html',
    notes: '[Kappo · below the Yasaka Pagoda, the "Waku Theater"] A nine-seat counter on a rickshaw lane two minutes from the Yasaka Pagoda, run since 2007 by 和久 秀郎 (Waku Hiderō). One course, ¥5,940 tax in, about three and a half hours — and regulars call it "Waku Theater" for the owner’s non-stop comic patter. Booking is the hard part: months ahead, by phone or e-mail. Cash only. No service charge.',
    chef_bio: { chef_name: '和久 秀郎 (Waku Hiderō)', roles: ['Owner-chef'], origin: 'Itami, Hyogo (official site)',
      background: 'Per his own profile page: born 12 February 1982 in Itami, Hyogo; 174 cm, blood type O. Studied at 育成調理師専門学校 in Hyogo, a three-year cooking school combined with high school, 1997–2000, working part-time in an izakaya, an udon chain and a family restaurant; cook’s licence 2000. From April 2000 worked at ryotei in Kyoto — one with a Kamo River summer platform, one at Nanzenji, one in Nishikyo — then filled in at dozens of kitchens: a sushi kappo in Shinsaibashi, Kibune riverside restaurants, Gion kappo, Kodaiji and Nanzenji inns, hotels in Kusatsu, Nagoya and Kyoto, an Asian restaurant in Otsu. Japanese-cuisine cooking-skills certificate 2007; opened Waku in Higashiyama on 14 September 2007, and kept taking stints elsewhere afterwards; fugu licence 2013. Also lists a heavy-motorcycle licence.',
      philosophy: 'Official site: 「京料理を主体としながら、私らしい料理も日々考えております」 — Kyoto cooking at the core, with dishes of his own worked out day by day; 「おもてなしの料理を作りたい」.',
      specialty: 'Omakase kappo course with counter-side talk.',
      anecdotes: [
        { text: '"A counter restaurant run by an entertainer owner, simply the best. Three hours of non-stop laughter." — April 2022.', source: R + 'B447779840/' },
        { text: 'An eight-time regular in July 2024: "Once the dishes start coming out, it truly becomes a Waku Theater, with the chef’s entertaining talks continuously easing the atmosphere."', source: R + 'B417990633/' },
        { text: 'A January 2025 diner booked the following autumn before leaving: "I wonder if I’ll still be around by then, haha."', source: R + 'B500061036/' },
        { text: 'A group of former colleagues has met here once a year for ten years; seven came from Tokyo and Kyushu in November 2024.', source: R + 'B497313246/' },
        { text: 'February 2024: "While they don’t use particularly expensive ingredients, I was impressed by the creativity in each dish."', source: R + 'B475304341/' },
      ],
      japanese_sources_summary: '公式サイト (ryourininn.com): 京都市東山区で割烹を営んでいる和久 (わく)、店主 和久 秀郎 (わく ひでろう)、1982年2月12日生まれ、兵庫県伊丹市出身、身長174センチ、O型、育成調理師専門学校 (三年制高校併用) 1997〜2000年、居酒屋・うどんチェーン・ファミレスでアルバイト、2000年に調理師免許、鴨川納涼床の料亭・南禅寺の料亭・西京区の料亭に就職、その後心斎橋のすし割烹、貴船の川床料理、祇園の割烹、高台寺や南禅寺の料理旅館、草津や名古屋のホテルなどで助勤務、2007年に調理技能士 (日本料理)、2007年9月14日に「和久」経営開始、2013年ふぐ処理師免許、大型二輪免許。人力車の通り道、カウンター9席、京料理を主体に私らしい料理、要予約、留守番電話かメールで予約、12時から21時半ごろ、予約のない日時は営業しない、おまかせ税込5940円 (だし系、御造り、主菜、天ぷら、御飯・赤だし・だし巻き、水物)、約3時間半、6名以上貸切、カード不可、駐車場なし、八坂の塔から徒歩2分、清水道バス停から徒歩2分。食べログ: 日本料理、東山区月輪町96-1、予約のみ、10席、サービス料は原文で「なし」、現金のみ、2007年9月14日オープン。口コミ (2017〜2025年、英語): 「和久劇場」、芸人のような店主の話で3時間笑いっぱなし、予約は数か月〜1年先、鯛を目の前でおろして白味噌と刺身に、イベリコ豚とすりおろし蓮根の鍋、焼き茄子と海老、高い食材ではないが工夫がある。',
      confidence: 'high', sources: [SITE + 'waku.html', SITE + 'jikosyoukai.html', SITE + 'waku/eigyouannnai.html', SITE + 'waku/konndate.html', SITE + 'waku/tennpoannnai.html', SITE + 'waku/tizu.html', TB, R + 'B205363192/', R + 'B417990633/', R + 'B447779840/', R + 'B475304341/', R + 'B480198924/', R + 'B489682564/', R + 'B497313246/', R + 'B500061036/'] },
    cultural_comfort: { level: 'japanese', note: 'The evening is built around the owner’s talk at the counter; booking by phone or e-mail.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区月輪町96-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site live with booking calendar; Tabelog reviews dated through April 2026.' },
    pin_source: `Tabelog ${TB} (34.997822, 135.777723); cross-checked: GSI 京都府京都市東山区月輪町96番地 (lot) 11m; the official site’s old Yahoo map link (34.99459, 135.78054) is about 430 m off, consistent with an old Tokyo-datum point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE + 'waku/konndate.html', SITE + 'waku/eigyouannnai.html'],
    price_note: 'Official site, tax included.', last_checked: TODAY, items: [
      it('おまかせコース', '', 'Omakase course (dashi dish, sashimi, main, tempura, rice, red miso soup, dashimaki, fruit)', '¥5,940', 'Course', 'no', 'no', 'Official site; about 3½ hours.', 'kaiseki_course'),
    ] }, {
    cuisine: '京料理に店主らしい工夫を加えた割烹のおまかせ1本 (公式サイト)・税込5,940円、だし系、御造り、主菜、天ぷら、御飯と御飯の友、赤だし、だし巻き、水物。季節、客、日によって変わる (公式サイト)・2024年2月は鯛を目の前でおろして白味噌の料理と刺身に、イベリコ豚とすりおろし蓮根の鍋。2024年11月は焼き茄子と海老、天ぷら、焼き魚、刺身・飲み物込みで6,000〜9,999円 (2022〜2026年の口コミ)',
    neighborhood: '東山。八坂の塔 (法観寺) から徒歩2分くらい。清水道バス停から徒歩2分',
    gf_detail: 'グルテンフリーではない: コースに天ぷらがある (公式サイト)。',
    vegan_detail: 'ヴィーガン不可: だし系、御造り、天ぷら、赤だしのコース (公式サイト)。口コミには鯛やイベリコ豚も。',
    notes: '[割烹・八坂の塔の下、「和久劇場」] 八坂の塔から徒歩2分、人力車の通る道にあるカウンター9席の割烹。2007年から和久 秀郎さんが営む。おまかせ1本で税込5,940円、約3時間半。常連は店主の話で笑いが絶えない「和久劇場」と呼ぶ。難しいのは予約で、数か月先を電話かメールで。現金のみ。サービス料なし。',
  });
}

// ================================================================ 御所南 かまた
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26032464/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://kyoto-kamata.com/';
  const H = day(['12:00', '15:00'], ['18:00', '22:00']);
  put({
    id: 'kyoto_gosho_minami_kamata', name: '御所南 かまた (Gosho Minami Kamata)', category: 'MOM_AND_POP',
    lat: 35.012949, lng: 135.763214, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: a kaiseki course with fried dishes (fried koi, fried rock oysters, fried bracken in reviews) and soy-based seasoning; a February 2026 diner thanked the shop for handling a dietary restriction. Raise it when booking.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the course is built on dashi — a dashi hot pot is one of its three pillars (official site) — with fish and charcoal-grilled meat.',
    hours_raw: 'Official site: lunch 12:00–15:00, dinner 18:00–22:00; closed irregularly; courses only, by reservation only. Prices include tax and there is no service charge (official site). 14 seats: a counter (8 per the Tabelog blurb; a January 2026 diner counted six) and a fully private room for up to 6 (Tabelog); non-smoking; cards and e-money (Tabelog). Online booking offers a course with one drink (August 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gosho-minami, a quiet residential street south of the Imperial Palace — 5 min walk from Karasuma Oike Stn exit 1',
    cuisine: 'Kappo kaiseki built on three pillars: a small dashi hot pot, charcoal grilling and a kamameshi rice pot with ingredients of your choice (official site) · lunch courses ¥10,000 / ¥13,000 / ¥18,000; dinner ¥22,000 / ¥28,000; chef’s omakase from ¥40,000; tax included, no service charge (official site) · earlier: lunch ¥9,000 (May and September 2025) · seen: fried koi, sesame tofu with yomogi, aosa hot pot (May 2025); fried rock oysters, koi soup, sanma rice, sakura-shrimp and young-ginger rice (June 2023); koppe crab on request (November 2023); a New Year course with bear meat, Nagano wild boar over binchotan, white-miso zoni, Hiroshima oyster rice (January 2026)',
    website: SITE, gmaps: gm('御所南 かまた 杉屋町'), menu_url: SITE + 'cuisine/',
    notes: '[Kaiseki · Gosho-minami, dashi pot and kamameshi] A kappo on a quiet street south of the Imperial Palace, run by 鎌田 通: a counter and one private room, courses only. The fixtures are a small hot pot of carefully drawn dashi, a charcoal-grilled course where you pick the grill, and a kamameshi with the ingredient you choose. Lunch from ¥10,000, dinner from ¥22,000, tax in, no service charge. One diner found the rice pot light on ingredients — the leftovers came back as onigiri to take home.',
    chef_bio: { chef_name: '鎌田 通 (Kamata)', roles: ['Owner-chef (店主, official site)'], origin: null,
      background: 'Named as owner (店主) on the official site, signed 鎌田 通; reviewers call him Chef Kamata. The Tabelog blurb, written at opening, says the chef brings 20 years of experience, aims to bring out each ingredient’s own flavour and keep fish free of fishy smells so even people who dislike seafood can enjoy it, and pays attention to seasonal plating; the opening was on 12 May (year not given). An August 2026 diner was back after seven years. A February 2025 diner enjoyed chatting with the chef and his wife.',
      philosophy: 'Official site: 「私どもが何より大切にしているのは、お客様との一期一会です」 — and above all the dashi, drawn to suit each day’s ingredients.',
      specialty: '旨出汁小鍋 (a small dashi hot pot); kamameshi.',
      anecdotes: [
        { text: 'A February 2026 diner thought the rice pot had fewer ingredients than expected, "but they kindly made the leftovers into onigiri (rice balls) for me to take home" — and thanked the shop for handling a dietary restriction.', source: R + 'B522152855/' },
        { text: 'On 2 January 2026 the New Year course opened with "Kaiun" sake in place of toso, then bear meat on steamed turnip — "despite the tumultuous year of bear sightings, I felt grateful."', source: R + 'B507408148/' },
        { text: 'A snowy February 2025: other guests had cancelled for the weather; "as always, I enjoyed chatting with the chef and his wife."', source: R + 'B500893698/' },
        { text: '"The fried rock oysters and koi soup have changed my perception entirely." — June 2023.', source: R + 'B466297568/' },
      ],
      japanese_sources_summary: '公式サイト (kyoto-kamata.com): 御所南 かまた、京都・御所南の日本料理・割烹、店主 鎌田 通、お客様との一期一会、特に大切にしているのは出汁、旨出汁小鍋・炭火焼き・釜飯 (具材を選んで一釜ずつ) が三つの柱、先附・凌ぎ・旨出汁小鍋・八寸・焼き物・釜飯・水物、個室で顔合わせやお食い初めも、完全予約制のコースのみ、昼10,000円・13,000円・18,000円、夜22,000円・28,000円、大将おまかせ40,000円〜、すべて税込でサービス料なし、中京区堺町通二条下る杉屋町634 Do.Dream杉屋町1階、昼12:00〜15:00・夜18:00〜22:00、不定休、Instagram kamata_gosyominami。食べログ: 日本料理、14席 (カウンター8、個室は6名まで)、禁煙、カード・電子マネー可、5月12日オープン、料理人歴20年、魚の臭みを抑える、烏丸御池駅1番出口から徒歩5分。口コミ (2023年6月〜2026年8月、英語): 7年ぶりの再訪、鯉の唐揚げ、蓬の胡麻豆腐、岩牡蠣のフライ、鯉こく、秋刀魚ご飯、こっぺ蟹、正月のコースで熊肉・長野の猪の炭火焼き・白味噌の雑煮・広島の牡蠣ご飯、大将と奥さんとの会話、京都の軟水の出汁、食事制限に対応、釜飯の具が少なめだったが残りをおにぎりにして持ち帰り。',
      confidence: 'high', sources: [SITE, SITE + 'cuisine/', TB, R + 'B420668985/', R + 'B440099363/', R + 'B452832969/', R + 'B466297568/', R + 'B475603491/', R + 'B500893698/', R + 'B507408148/', R + 'B510342519/', R + 'B522152855/', R + 'B524353729/'] },
    cultural_comfort: { level: 'japanese', note: 'Courses with choices to make (grill, rice-pot ingredient); a quiet counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区堺町通二条下る杉屋町634 Do.Dream杉屋町 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site live with current courses; Tabelog reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.012949, 135.763214); cross-checked: GSI 京都府京都市中京区杉屋町634番地 (lot) 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE + 'cuisine/'],
    price_note: 'Official site, tax included, no service charge.', last_checked: TODAY, items: [
      it('昼のコース', '', 'Lunch course', '¥10,000 / ¥13,000 / ¥18,000', 'Course', 'ask', 'no', 'Official site.', 'kaiseki_course'),
      it('夜のコース', '', 'Dinner course', '¥22,000 / ¥28,000', 'Course', 'ask', 'no', 'Official site.', 'kaiseki_course'),
      it('大将おまかせ', '', 'Chef’s omakase', 'from ¥40,000', 'Course', 'ask', 'no', 'Official site.', 'kaiseki_course'),
    ] }, {
    cuisine: '旨出汁小鍋、炭火焼き、具材を選ぶ釜飯を三つの柱にした割烹の会席 (公式サイト)・昼のコース10,000円・13,000円・18,000円、夜のコース22,000円・28,000円、大将おまかせ40,000円〜、税込でサービス料なし (公式サイト)・以前の昼は9,000円 (2025年5月・9月)・口コミでは鯉の唐揚げ、蓬の胡麻豆腐 (2025年5月)、岩牡蠣のフライ、鯉こく、秋刀魚ご飯 (2023年6月)、こっぺ蟹 (2023年11月)、正月のコースの熊肉、長野の猪の炭火焼き、白味噌の雑煮、広島の牡蠣ご飯 (2026年1月)',
    neighborhood: '御所南、御所の南の静かな住宅街。烏丸御池駅1番出口から徒歩5分',
    gf_detail: '要確認: 揚げ物 (口コミに鯉の唐揚げ、岩牡蠣のフライ、蕨の揚げ物) と醤油を使う会席。2026年2月には食事制限に対応してもらったという声。予約時に伝えて。',
    vegan_detail: 'ヴィーガン不可: 出汁が中心で、旨出汁小鍋が三つの柱の一つ (公式サイト)。魚や炭火焼きの肉も。',
    notes: '[会席・御所南、出汁の小鍋と釜飯] 御所の南の静かな通りにある割烹で、店主は鎌田 通さん。カウンターと個室1つ、コースのみ。柱は丁寧に引いた出汁の小鍋、焼き物を選べる炭火焼き、具材を選んで炊く釜飯。昼10,000円から、夜22,000円から、税込でサービス料なし。2026年2月には釜飯の具が少なめという声もあったが、残りはおにぎりにして持たせてくれたそう。',
  });
}

// ================================================================ 洋食 ヒグチ亭
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26025528/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://higuchitomoyuki194.wixsite.com/higuchi-tei';
  const H = day(['11:30', '15:30'], ['17:30', '21:30']);
  put({
    id: 'kyoto_higuchi_tei', name: '洋食 ヒグチ亭 (Higuchi Tei)', category: 'OMNI',
    lat: 35.012985, lng: 135.761065, cuisine_type: 'yoshoku',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: mains include a cod gratin, sole meunière and a hamburg steak; quiche on the starter platter (official site; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: every main is meat or fish (official site); courses end in dessert or cheese.',
    hours_raw: 'Official site: lunch 11:30–15:30 (last order 14:00), dinner 17:30–21:30 (last order 20:30); closed Tuesday (Tabelog lists lunch to 16:00). One order per person; no children under 6; hard to reach by phone in service — call 9:30–11:00, 16:00–17:00 or after 21:00; more than 15 minutes late may be cancelled; same-day cancellation ¥2,000 a person; parties of two or fewer may be moved to a different seat type (official site). Tabelog notice: "As I am currently operating alone, I kindly ask for your patience as service may take a little longer." 8 seats — three tables and a counter (Tabelog; August 2026); non-smoking; cards, transit IC, iD, QUICPay and PayPay (Tabelog). No service charge listed on Tabelog or the official site. Opened 10 April 2015 (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Karasuma Oike — 4–5 min walk from Karasuma Oike Stn',
    cuisine: 'A one-cook yoshoku bistro of set courses (official site) · Course A ¥4,000: starter platter, one main, dessert or cheese, coffee or tea; Course B ¥4,500: two smaller mains; Course C ¥5,000: two mains (official site) · mains: Kyoto kuroge wagyu hamburg steak, cod gratin with curry, scallops à la nage, sole meunière, pork grill with sauce condiment, Kyoto kuroge wagyu braised in red wine (+¥500) (official site) · starters seen: daily assorted platter with quiche and pepper jelly, marinated fresh fish, smoked salmon; desserts: peach melba (2026 reviews) · wine, a three-glass wine set ¥1,500 (August 2026) · ordering by QR code (August 2026)',
    website: SITE, gmaps: gm('洋食 ヒグチ亭 瓦之町'), menu_url: SITE,
    notes: '[Yoshoku · Karasuma Oike, one-cook bistro courses] An eight-seat yoshoku bistro near Karasuma Oike, cooked and served by one person: pick a ¥4,000–5,000 course from a starter platter, mains like sole meunière, cod gratin with curry or Kyoto wagyu in red wine, then dessert or cheese. Reviewers in 2026 call it outstanding value; some warn the solo service is unhurried. No children under 6; ¥2,000 same-day cancellation. Closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Owner-chef, not named; runs the shop alone (Tabelog notice)'], origin: null,
      background: 'Opened 10 April 2015 (Tabelog). The Tabelog notice says the shop is currently run by one person, so service may take longer. Reviewers in 2026 describe a compact room of three tables and a counter, the chef cooking and serving alone even when full, set courses ordered by QR code, Kyoto vegetables and local meat, and a daily-changing starter platter.',
      philosophy: 'Tabelog blurb: carefully chosen ingredients such as Kyoto vegetables and local meat, all at reasonable prices.',
      specialty: 'Course A with sole meunière or wagyu braised in red wine.',
      anecdotes: [
        { text: '"It was impressive to see the chef managing everything on his own, especially since the place was fully booked on the day of my visit." — August 2026.', source: R + 'B533907107/' },
        { text: 'A September 2026 diner had hesitated over reviews of slow solo service, but "found that the timing was just right while enjoying my drinks."', source: R + 'B536274251/' },
        { text: 'A May 2026 diner planned a whole trip around it: "After confirming that I could make a reservation, I arranged my hotel and transportation."', source: R + 'B523500322/' },
        { text: 'A first-timer in August 2026 took Course B and "vowed to stick with the A course with one main dish on my next visit."', source: R + 'B533910017/' },
      ],
      japanese_sources_summary: '公式サイト: 洋食 ヒグチ亭 (Restaurant HIGUCHITEI)、ランチ11:30〜15:30 (LO 14:00)、ディナー17:30〜21:30 (LO 20:30)、火曜休み、中京区瓦之町373 メイゾン東洞院、1人ワンオーダー制、6歳未満は入店不可、電話は9:30〜11:00・16:00〜17:00・21:00以降、15分以上の遅れはキャンセルの場合あり、当日キャンセルは1人2000円、2名以下は席のタイプが変わる場合あり、Aコース4000円 (前菜の盛り合わせ、メイン1品、デザートかチーズの盛り合わせ、コーヒーか紅茶)、Bコース4500円 (メイン2品、小さめ)、Cコース5000円、メイン: 京都産黒毛和牛ハンバーグ、たらのカレー風味グラタン、帆立貝のア・ラ・ナージュ、舌平目のムニエル、ポークグリル コンデュマンソース、京都産黒毛和牛 赤ワイン煮込み (+500円)、ワイン多数。食べログ: 洋食・カフェ・ビストロ、8席、禁煙、カード・交通系IC・iD・QUICPay・PayPay可、2015年4月10日オープン、現在一人で営業しているため提供に時間がかかる場合あり、京都の野菜と地元の肉、日替わりの前菜の盛り合わせ。口コミ (2026年4月〜9月、英語): 一人で切り盛り、満席でも一人、テーブル3つとカウンター、QRコードで注文、ピーチメルバ、鯛の白ワインソース、ペッパーゼリー、キッシュ、スモークサーモン、グラスワイン3杯セット1,500円、5月に少し値上げ、コスパが非常に高い。',
      confidence: 'high', sources: [SITE, TB, R + 'B520964176/', R + 'B523500322/', R + 'B526693435/', R + 'B527205614/', R + 'B528246228/', R + 'B529326484/', R + 'B533907107/', R + 'B533910017/', R + 'B536274251/', R + 'B536910187/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order by QR code from a short course menu; no children under 6.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区瓦ノ町373 メイゾン東洞院',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site live with current courses and hours; Tabelog reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.012985, 135.761065); cross-checked: GSI 京都府京都市中京区瓦之町373番地 (lot) 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE],
    price_note: 'Official site.', last_checked: TODAY, items: [
      it('Aコース', '', 'Course A (starter platter, one main, dessert or cheese, coffee or tea)', '¥4,000', 'Course', 'no', 'no', 'Official site.', 'set_course'),
      it('Bコース', '', 'Course B (two smaller mains)', '¥4,500', 'Course', 'no', 'no', 'Official site.', 'set_course'),
      it('Cコース', '', 'Course C (two mains)', '¥5,000', 'Course', 'no', 'no', 'Official site.', 'set_course'),
      it('舌平目のムニエル', '', 'Sole meunière', null, 'Main', 'no', 'no', 'Official site; a course main.', 'meuniere'),
      it('京都産黒毛和牛 赤ワイン煮込み', '', 'Kyoto kuroge wagyu braised in red wine', '+¥500', 'Main', 'ask', 'no', 'Official site; course supplement.', 'beef_stew'),
    ] }, {
    cuisine: '一人で営むコース中心の洋食ビストロ (公式サイト)・Aコース4,000円は前菜の盛り合わせ、メイン1品、デザートかチーズの盛り合わせ、コーヒーか紅茶。Bコース4,500円は小さめのメイン2品、Cコース5,000円はメイン2品 (公式サイト)・メインは京都産黒毛和牛ハンバーグ、たらのカレー風味グラタン、帆立貝のア・ラ・ナージュ、舌平目のムニエル、ポークグリル コンデュマンソース、京都産黒毛和牛 赤ワイン煮込み (+500円) (公式サイト)・前菜はキッシュやペッパーゼリーの入った日替わりの盛り合わせ、魚のマリネ、スモークサーモン。デザートにピーチメルバ (2026年の口コミ)・ワイン、グラスワイン3杯のセット1,500円 (2026年8月)・注文はQRコード (2026年8月)',
    neighborhood: '東洞院通、烏丸御池。烏丸御池駅から徒歩4〜5分',
    gf_detail: 'グルテンフリーではない: メインにたらのグラタン、舌平目のムニエル、ハンバーグ。前菜の盛り合わせにキッシュ (公式サイト、2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: メインはすべて肉か魚 (公式サイト)。締めはデザートかチーズ。',
    notes: '[洋食・烏丸御池、一人で営むビストロのコース] 東洞院通にある8席の洋食ビストロで、調理も接客も一人。4,000〜5,000円のコースで、前菜の盛り合わせのあと舌平目のムニエル、たらのカレー風味グラタン、京都産黒毛和牛の赤ワイン煮込みなどから選び、デザートかチーズで締める。2026年の口コミではコスパが非常に高いという声が多く、一人営業なので提供はゆっくりという声も。6歳未満は入店不可、当日キャンセルは1人2,000円。火曜休み。',
  });
}

save();
