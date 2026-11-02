// Kyoto "what did we miss" pass (kyoto-missed, notable phase) — lane osw13, batch 10.
//   + 祇園 又吉 Gion Matayoshi (Gion kaiseki counter rooted in tea kaiseki; Michelin two stars since 2016 per Tabelog; since 2015)
//   + 京懐石 吉泉 Kyo Kaiseki Kichisen (Yoshimi Tanigawa's tea-style kaiseki beside the Tadasu no Mori, Shimogamo; since 1983)
//   + カルバドール Calvador (Calvados bar of master Takayama near Kyoto Shiyakusho-mae; Bar 100 2022; since 2004)
//   + Bar Rocking chair (fireplace cocktail bar of owner-bartender Kenji Tsubokura off Shijo-Kawaramachi; since 2009)
//   - skipped 炭火割烹 いふき 26017706: closed at this address on 14 September 2026 to move; the new shop, 祇をん いふき, has no
//     opening date yet (official sites gion-ifuki.com, kyoto-ifuki.com, August 2026 notice).
//   Taken in queue order from `queue.mjs kyoto-missed next notable 80` on 2026-11-02 (Ifuki skipped, Rocking chair next).
//   None is in data/kyoto.json: grep by name (又吉/Matayoshi, 吉泉/Kichisen, カルバドール/Calvador, Rocking) and by address
//   (570-123, 下鴨森本町5, 妙満寺前町446, 橘町434) found nothing; the nearest record, ChIJBU2KGwAJAWAR79d9kep9Gy0 "Sushiro –
//   Gion", is 52 m from Matayoshi. Chain check: single places; Gion Matayoshi has a casual sister, また吉 (official site).
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-10');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26017706', '炭火割烹 いふき: closed at 祇園町南側570-8 on 14 September 2026 to relocate; the new shop 祇をん いふき (570-181) has no opening date yet (official site notice, August 2026)');

// ================================================================ 祇園 又吉
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26006471/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.gion-matayoshi.com/';
  const H = day(['12:00', '14:30'], ['18:00', '21:00']);
  put({
    id: 'kyoto_gion_matayoshi', name: '祇園 又吉 (Gion Matayoshi)', category: 'MOM_AND_POP',
    lat: 35.003375, lng: 135.774576, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information; a kaiseki course of about 13 dishes seasoned with soy sauce and miso, with sushi, fried dishes and a hot pot (Tabelog; 2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a kaiseki built on dashi, with sweet sea bream, mackerel, sea urchin, crab and Ishigaki beef (2025–2026 reviews).',
    hours_raw: 'Lunch 12:00–14:30 and dinner 18:00–21:00, Tue–Sun and the day before a holiday; closed Monday and the day after a holiday, and irregularly (Tabelog). Reservation only; first-time guests book online only (official site), through TableCheck or TABLEALL. Parties of two or more; the counter takes 2–3, groups of 4 or more use private rooms (Tabelog). One drink per person; proxy bookings may be refused (Tabelog). Children from sixth grade in private rooms only (Tabelog). No shorts, slippers or sandals (Tabelog). 24 seats: 8 at the counter and 16 in private rooms (Tabelog). Non-smoking (Tabelog). Cards (VISA, Master, AMEX); a service charge is added (Tabelog). 5 min from Gion-Shijo Stn (official site). Opened 10 February 2015 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion, just off Hanamikoji, through a lattice door and a stone path — about 5 min from Gion-Shijo Stn',
    cuisine: 'Kaiseki in the spirit of the tea meal, about 13 dishes, on tableware made to order by a pottery studio (official site; Tabelog) · lunch ¥20,000 at the counter, ¥22,000 in a tatami room; dinner ¥36,000 at the counter, ¥38,000 in a tatami room (Tabelog, from 1 June) plus service · January 2025: a hassun of kombu-cured flounder, dried persimmon with cheese, fried abalone, sesame tofu and salmon roe with yam; kinmedai with daidai, sesame and miso; anago chumaki sushi with sansho · February 2026: a crab-only sushi roll · March 2026: glutinous rice with clams; spicy chirimen with the rice, also sold as a souvenir · October 2026: new chestnuts; three sashimi including white sweet sea bream; a soup of red sweet sea bream; autumn mackerel with a liver sauce; fried fig dengaku with sesame miso and sea urchin; a hot pot of Ishigaki beef with tofu and greens; Niigata Koshihikari rice with Lake Biwa eel tsukudani · sake centred on Aramasa; good hojicha',
    website: SITE, gmaps: gm('祇園又吉'), menu_url: TB,
    notes: "[Kaiseki · Gion, a tea-kaiseki counter with a big heart] Through a lattice door off Hanamikoji and along a stone path: a calm counter of eight and private rooms. The owner-chef, who ran the kitchen of a long-established inn before opening here in 2015, cooks about thirteen courses in the spirit of tea kaiseki on made-to-order pottery — a crab-only sushi roll, mackerel with its own liver sauce, Ishigaki beef in a hot pot, rice with Lake Biwa eel. Tabelog says it has held two Michelin stars since 2016. Diners find the chef imposing at first and warm once you settle; the staff chat and send you off with walking tips. Bookings are for two or more, and first-timers must book online. Lunch from ¥20,000. A casual sister, また吉, serves lunch, shaved ice and Italian nearby.",
    chef_bio: { chef_name: 'Matayoshi (surname only, from the shop name and an August 2026 review: "Mr. Matayoshi"; Tabelog\'s English also writes "Matakichi"; no given name in a source)', roles: ['Owner-chef (official site: "老舗旅館で料理長を務めた店主")'], origin: 'Not settled: Tabelog speaks of the chef\'s Okinawan roots, and a regular\'s October 2022 visit notes touches from the chef\'s hometown, Okinawa; an August 2026 reviewer says the chef hails from Kyushu.',
      background: 'Per the official site: the owner was head chef of a long-established ryokan and cooks with the spirit of tea kaiseki; the room has a stone approach from the lattice door. Tabelog: two Michelin stars continuously since 2016; calligraphy of the shop name by 石川九楊 (as Tabelog\'s English gives it: Ishikawa Kyōyō); custom tableware from a pottery studio. The official site also announces a casual sister shop, また吉, opened 1 August 2021 at 祇園町南側570-120 (lunch, natural-ice kakigori, Italian at night), and New Year osechi. A February 2026 regular writes of being intimidated at first, then finding it the most relaxing place. Tabelog Award Bronze 2019–2026; Japanese cuisine WEST "Tabelog 100" 2021, 2023, 2025.',
      philosophy: 'Ichigo ichie: dishes born from the day\'s conversation with guests, keeping the heart of tea kaiseki (official site).', specialty: 'Tea-kaiseki courses; crab sushi roll; hot pot of Ishigaki beef.',
      anecdotes: [
        { text: '"During my first visit, I was a bit intimidated by the atmosphere and the chef\'s presence, but once I got used to it, it became the ultimate relaxation spot." — February 2026, a fifth visit.', source: R + 'B455576807/' },
        { text: '"On my way out, they recommended a charming street in Kyoto, so I took a leisurely walk back." — March 2026.', source: R + 'B523811409/' },
        { text: '"The hot pot was simply prepared with Ishigaki beef briefly dipped in broth, yet it was exquisite." — October 2026.', source: R + 'B537649186/' },
      ],
      japanese_sources_summary: '公式サイト (gion-matayoshi.com): 祇園又吉、茶懐石のこころを大切に、季節の粋を集め、その日そのときお客様との会話から生まれる一期一会の味わい、祇園花見小路、格子戸を開けると石畳、老舗旅館で料理長を務めた店主、祇園町南側570-123、祇園四条駅から徒歩5分、初めての方は WEB 予約のみ、御節七寸三段86,400円、姉妹店「また吉」(2021年8月1日開店、祇園町南側570-120 万治ビル1階、昼ごはん、天然氷のかき氷、夜は和の器でイタリアン)。食べログ (店舗会員): 日本料理、2名から、カウンターは2〜3名、4名以上は個室、1ドリンク制、代理予約は断る場合あり、6月1日から昼20,000円 (カウンター)・22,000円 (座敷)、夜36,000円・38,000円、サービス料あり、小学6年生以上は個室で、24席、2015年2月10日オープン、The Tabelog Award Bronze 2019〜2026、日本料理 WEST 百名店 2021・2023・2025。口コミ (2025年1月〜2026年10月、英語): 蟹だけの巻き寿司、Ishigaki の牛の鍋、Aramasa を中心とした日本酒、気さくなスタッフ。',
      confidence: 'medium', sources: [TB, SITE, R + 'B455576807/', R + 'B500009086/', R + 'B521681894/', R + 'B523653627/', R + 'B523811409/', R + 'B530365259/', R + 'B532011599/', R + 'B533680299/', R + 'B534179163/', R + 'B537649186/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'First visits book online (TableCheck, TABLEALL); parties of two or more; many overseas guests (February 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町南側570-123',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and official site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.003375, 135.774576); cross-checked: GSI 京都府京都市東山区祇園町南側570番地 (lot) 57m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course prices from Tabelog (tax included, from 1 June; read November 2026), plus a service charge.', last_checked: TODAY, items: [
      it('', '', 'Lunch course at the counter', '¥20,000', 'Course', 'ask', 'no', 'Tabelog; ¥22,000 in a tatami room.', 'lunch'),
      it('', '', 'Dinner course at the counter', '¥36,000', 'Course', 'ask', 'no', 'Tabelog; ¥38,000 in a tatami room.', 'dinner'),
      it('', '', 'Crab-only sushi roll (in course)', '', 'Course', 'ask', 'no', 'February 2026.', 'crab_roll'),
    ] }, {
    cuisine: '茶懐石の心の約13品の懐石を、窯元に別注した器で (公式サイト、食べログ)・昼はカウンター20,000円、座敷22,000円、夜はカウンター36,000円、座敷38,000円 (食べログ、6月1日から)、別途サービス料・2025年1月: kombu で締めた鮃、干し柿とチーズ、鮑の揚げ物、胡麻豆腐、Ikura と長芋の Hassun、Daidai と胡麻と味噌の Kinmedai、Sansho の Anago Chumaki Sushi・2026年2月: 蟹だけの巻き寿司・2026年3月: 貝のもち米ご飯、ご飯に合う辛い chirimen (お土産にも)・2026年10月: 新栗、白い甘鯛を含む3種のお造り、赤い甘鯛のお椀、肝のソースの秋の鯖、胡麻味噌と雲丹をのせたいちじくの揚げ物 (fig dengaku)、Ishigaki の牛と豆腐と青菜の鍋、Iwafune (Niigata) の Koshihikari と Lake Biwa の鰻の tsukudani・Aramasa を中心とした日本酒、おいしい hojicha',
    neighborhood: '祇園、花見小路からすぐ、格子戸と石畳の先。祇園四条駅から徒歩約5分',
    gf_detail: '予約時に要確認。グルテンの情報なし。約13品の懐石で醤油や味噌を使い、寿司、揚げ物、鍋もある (食べログ、2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではありません。出汁を土台に、甘鯛、鯖、雲丹、蟹、Ishigaki の牛を使う懐石 (2025〜2026年の口コミ)。',
    notes: '[懐石・祇園、茶懐石の心の温かいカウンター] 花見小路からすぐ、格子戸を開けて石畳を進むと、落ち着いたカウンター8席と個室。老舗旅館で料理長を務めた店主が2015年に開き、茶懐石の心で約13品を窯元別注の器に盛る — 蟹だけの巻き寿司、肝のソースの鯖、Ishigaki の牛の鍋、Lake Biwa の鰻の tsukudani とご飯。食べログによれば2016年からミシュラン二つ星。最初は大将の迫力に緊張しても慣れればくつろげるという声や、スタッフが話し好きで帰りに散歩道を教えてくれたという声も。予約は2名から、初めては WEB 予約のみ。昼20,000円から。近くに気軽な姉妹店「また吉」(昼ごはん、かき氷、夜はイタリアン)。',
  });
}

// ================================================================ 京懐石 吉泉
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26001047/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.kichisen-kyoto.com';
  const H = day(['12:00', '14:30'], ['18:00', '21:00']);
  put({
    id: 'kyoto_kyo_kaiseki_kichisen', name: '京懐石 吉泉 (Kyo Kaiseki Kichisen)', category: 'MOM_AND_POP',
    lat: 35.035786, lng: 135.771343, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information; a tea-style kaiseki of about 13 dishes with soy and miso seasoning, sushi and a steamed sushi wrapped in egg (Tabelog; 2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a kaiseki built on kombu-and-bonito dashi (official site), with fish, crab and eel.',
    hours_raw: 'Lunch with entry at 12:00 only (to 14:30) and dinner with entry at 18:00 only (to 21:00); closed irregularly (Tabelog). Reservation only; more than 15 minutes late without word counts as a cancellation (Tabelog). 17 seats: a counter of 6 (March 2025 review) and private rooms for 2–8 (Tabelog). Children: call to book; a kids\' menu is available (Tabelog). Non-smoking (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); service charge 10% (Tabelog). About 10 min on foot from Demachiyanagi Stn, or a short taxi from Imadegawa Stn (Tabelog). Opened 1983 in a hotel; on this site two years later (official site).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shimogamo, beside the Tadasu no Mori woods of Shimogamo Shrine — about 10 min on foot from Demachiyanagi Stn',
    cuisine: 'Traditional Kyoto kaiseki in the tea-ceremony style: about 13 dishes from ingredients the chef buys at the market from 4 a.m., opening with a cup of sake as a welcome and soups whose lid is sprinkled with dew (Tabelog; official site) · course ¥44,000 (March 2026); diners report ¥15,000–19,999 at lunch and ¥40,000–49,999 at dinner; plus 10% service · spring 2025: a white soup with pickled cherry blossoms, a crab-and-shiso dumpling soup, sushi of fatty tuna and the collar, a steamed sushi wrapped in egg and eel; gori simmered in soy · November 2025: Matsutake as dobin-mushi, grilled and simmered; crab; takikomi rice; matcha · March 2026: "Sakura-yu", a white broth with salted cherry blossoms; crab shinjo soup with wasabi flowers · May 2026: sea bream rice; tuna served as sashimi and then as sushi · sake',
    website: SITE, gmaps: gm('京懐石 吉泉 下鴨'), menu_url: null,
    notes: "[Kaiseki · Shimogamo, a master's tea-style kaiseki by the Tadasu no Mori] Beside the ancient woods of Shimogamo Shrine, a 455 m² compound with counter seats, three private rooms and a tea room, \"Suishoan\", moved here from a 1935 building, all hung with scrolls and flowers chosen by the owner. Owner-chef Yoshimi Tanigawa (谷河吉巳), born in Hyogo in 1951, started cooking at 15, learned from some fifty teachers in tea, flowers, incense and poetry as well as food, was head chef at an Arashiyama ryotei at 26, and opened Kichisen in 1983; the site lists two Michelin stars in 2010–2013 and three in 2014–2019, and a win on Iron Chef in 1999. Meals are tea-style kaiseki of about thirteen dishes, still cooked by the owner, who goes to market at 4 a.m. Dinner around ¥44,000 plus service; book ahead.",
    chef_bio: { chef_name: 'Yoshimi Tanigawa (谷河吉巳; romaji from Tabelog, which also writes the shop as "Yoshizumi")', roles: ['Owner-chef (official site: "亭主 谷河吉巳")'], origin: 'Hyogo Prefecture, born 1951 (Tabelog).',
      background: 'Per the official site: found the joy of cooking at 9 and came to Kyoto at 15; did not train at a famous ryotei but met some 50 teachers, learning tea, flower arrangement, incense, calligraphy and poetry, with influences including 福富雪底 of Daitokuji, 寛海 of Jukoin, the chef 竹端寅一 and 菅田宗匠 of Omotesenke; head chef of an Arashiyama ryotei at 26; opened Kichisen in a hotel in 1983 at 31 and built the present Shimogamo house two years later; featured in The New York Times in 1986; won a hamo battle against 森本正治 on Iron Chef in 1999; two Michelin stars 2010–2013 and three 2014–2019; has worked on ceremonial knife cooking, kaiseki for diabetics, and promoting Kyoto cuisine abroad; appeared on television about strict but warm training. Tabelog adds the chef still cooks, goes to market at 4 a.m. with an apprentice, and has trained over 60 apprentices; the tea room "Suishoan" was moved from a 1935 site. Tabelog Award Bronze 2017, 2019–2022, 2026, Silver 2018; Japanese cuisine WEST "Tabelog 100" 2021, 2023.',
      philosophy: 'Gochisō — gathering the season\'s best from across Japan as hospitality; dashi of kombu and bonito as the life of Kyoto cooking (official site).', specialty: 'Tea-style kaiseki; dew-sprinkled soups; tuna sushi.',
      anecdotes: [
        { text: '"I have been coming to this restaurant for nearly 40 years." — March 2025.', source: R + 'B504108321/' },
        { text: '"The hanging scroll by Jakuchu is also authentic, which is quite rare to find." — August 2026, a tenth visit.', source: R + 'B485653704/' },
        { text: '"The head chef had a powerful presence yet was very kind." — November 2025, Matsutake.', source: R + 'B518745396/' },
      ],
      japanese_sources_summary: '公式サイト (kichisen-kyoto.com): 京懐石 吉泉、茶懐石の流れを汲んだ伝統的なもてなし料理、日本中から旬の食材、糺の森、亭主 谷河吉巳: 9歳で調理する歓びを知り15歳で京へ、50人の師との出会い (茶道、華道、香道、書、詩歌)、26歳で嵯峨嵐山の料亭の料理長、1983年31歳でホテルの一角に「吉泉」、2年後に下鴨に「京懐石 吉泉」、1986年 NewYorkTimes、1999年「料理の鉄人」の鱧対決で森本正治氏に勝利、2010〜2013年ミシュラン二ツ星、2014〜2019年三ツ星、献立は酒一献から、お椀の蓋に茶筅で露を打つ、昆布と鰹の出汁。食べログ (店舗会員): 日本料理、下鴨森本町5、昼12:00入店のみ、夜18:00入店のみ、不定休、17席、個室あり、お子様メニューあり、サービス料10%、The Tabelog Award Bronze・Silver 2018、日本料理 WEST 百名店 2021・2023。口コミ (2025年3月〜2026年8月、英語): Sakura-yu、マグロの寿司、Matsutake、Jakuchu の掛け軸。',
      confidence: 'medium', sources: [TB, SITE, R + 'B349639400/', R + 'B485653704/', R + 'B503108213/', R + 'B504108321/', R + 'B504420183/', R + 'B518745396/', R + 'B526292398/', R + 'B527686002/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set kaiseki with fixed entry times; the official site has English, Chinese and Korean pages; book ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区下鴨森本町5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through August 2026. The official site\'s news is from 2022.' },
    pin_source: `Tabelog ${TB} (35.035786, 135.771343); cross-checked: GSI 京都府京都市左京区下鴨森本町5番地 (lot) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B526292398/'],
    price_note: 'Current prices are not published (the official site shows a 2022 New Year notice); the course price is from a March 2026 review; service 10%.', last_checked: TODAY, items: [
      it('', '', 'Kaiseki course', '¥44,000', 'Course', 'ask', 'no', 'March 2026; +10% service.', 'course'),
      it('', '', 'Tuna sushi (in course)', '', 'Course', 'ask', 'no', '2025–2026 reviews.', 'tuna_sushi'),
    ] }, {
    cuisine: '茶懐石の流れの伝統的な京懐石。大将が朝4時から市場で選ぶ食材で約13品、もてなしの酒一献で始まり、お椀の蓋に露を打つ (食べログ、公式サイト)・コース44,000円 (2026年3月)、口コミの予算は昼15,000〜19,999円、夜40,000〜49,999円、別途サービス料10%・2025年春: 桜の塩漬けの白いお椀、蟹と紫蘇の団子のお椀、トロとカマの寿司、玉子と鰻で包んだ温かい蒸し寿司、Gori の tsukudani・2025年11月: Matsutake の dobin-mushi、焼き Matsutake、煮物、蟹、takikomi gohan、Matcha・2026年3月: 塩漬けの桜の白い湯「Sakura-yu」、山葵の花の蟹の shinjo の椀・2026年5月: 鯛ご飯、マグロをお造りで、続いて寿司で・日本酒',
    neighborhood: '下鴨、下鴨神社の糺の森のそば。出町柳駅から徒歩約10分',
    gf_detail: '予約時に要確認。グルテンの情報なし。醤油や味噌で味付けする約13品の茶懐石で、寿司や玉子と鰻で包んだ蒸し寿司もある (食べログ、2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではありません。昆布と鰹の出汁 (公式サイト) を土台に、魚、蟹、鰻を使う懐石。',
    notes: '[懐石・下鴨、糺の森のそばの名料理人の茶懐石] 下鴨神社の糺の森のそば、138坪の敷地にカウンター、3つの個室、1935年の建物から移した茶室「Suishoan」。掛け軸や花は亭主が選ぶ。亭主の谷河吉巳さんは1951年 Hyogo 生まれ、15歳で京へ上り、料理だけでなく茶道、華道、香道、詩歌の50人の師に学び、26歳で嵯峨嵐山の料亭の料理長に、1983年に吉泉を開いた。公式サイトによれば2010〜2013年ミシュラン二ツ星、2014〜2019年三ツ星、1999年には「料理の鉄人」で勝利。料理は約13品の茶懐石で、今も亭主が朝4時に市場へ出向いて作る。夜は44,000円ほどにサービス料、予約は早めに。',
  });
}

// ================================================================ カルバドール
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26001936/'; const R = TB + 'dtlrvwlst/';
  const H = day(['19:00', '23:00']);
  put({
    id: 'kyoto_calvador_bar', name: 'カルバドール (Calvador)', category: 'MOM_AND_POP',
    lat: 35.013434, lng: 135.767058, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A Calvados bar: apple and pear brandies and cocktails are the mainstay; the only food the 2026 reviewers mention is Calvados chocolate.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Spirits and cocktails may suit; the chocolates are not described.',
    hours_raw: '19:00–23:00; closed Wednesday and Thursday (Tabelog); a May 2026 regular was told of a special Thursday opening. Reservations accepted (Tabelog); an April 2026 diner says it has been very hard to get in for about ten years, and diners phone ahead (2026 reviews). 8 seats at the counter (Tabelog). Smoking allowed (Tabelog). Table charge ¥1,000 (Tabelog). Cards (JCB, AMEX, Diners) and Rakuten Pay (Tabelog). Second floor, with no sign outside (2026 reviews). About 313 m from Kyoto Shiyakusho-mae Stn (Tabelog). Opened 28 April 2004 (Tabelog).',
    hours: { 0: H, 1: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Near Kyoto City Hall, second floor of 若林ビル, with no sign outside — about 313 m from Kyoto Shiyakusho-mae Stn',
    cuisine: 'A bar devoted to Calvados, the Normandy apple brandy — over 500 bottlings, according to a May 2026 review, including old vintages and single casks bottled for the bar · examples: Toutain 34-year single cask for Bar CALVADOR, Lauriston 1963, Pays d\'Auge 1973, Adrien Camut, a 52-year-old Calvados, a Calvados of 90% pear (2026 reviews) · cocktails: Jack Rose, a Calvados Manhattan, a long drink of Calvados and apple juice · Ichiro\'s Malt made for the bar, also as a highball · Calvados chocolates made with the Kyoto patisserie Assemblage Kakimoto · diners spend about ¥3,000–19,999; table charge ¥1,000',
    website: TB, gmaps: gm('カルバドール 京都'), menu_url: null,
    notes: "[Bar · Kyoto City Hall, the Calvados specialist] Up to the second floor of an unmarked building near Kyoto City Hall, eight counter seats and a list of over 500 apple brandies. Master Takayama, said by 2026 regulars to know more about Calvados than anyone in Japan, travels to France to source it; there are single casks bottled for the bar and vintages such as a Lauriston 1963. Start with a Jack Rose, then let the master pour a 34-year single cask or a pear-heavy rarity, perhaps with Calvados chocolates from Assemblage Kakimoto. Regulars say it has been hard to get into for a decade, so phone first. Smoking allowed; ¥1,000 charge. Closed Wednesdays and Thursdays.",
    chef_bio: { chef_name: 'Takayama (surname only; 2026 reviews: "Master Takayama", "Mr. Takayama")', roles: ['Owner-bartender (2026 reviews: "The owner, Mr. Takayama")'], origin: null,
      background: 'Opened 28 April 2004 (Tabelog). Per 2026 reviews: the master is said to be the most knowledgeable person about Calvados in Japan and goes to France to source it (February); has single casks bottled for the bar, such as a 34-year Toutain (2026 reviews); greets returning guests by name (February); the bar holds over 500 kinds of Calvados (May). Selected for Tabelog Bar "Tabelog 100" 2022. The official website address returned a hosting placeholder page in November 2026.',
      philosophy: null, specialty: 'Calvados, including old vintages and the bar\'s own single casks; Jack Rose.',
      anecdotes: [
        { text: '"The moment I made eye contact with Master Takayama, he smiled and said, \'Ah, it\'s you, Mr. XX,\' which instantly eased my tension." — February 2026.', source: R + 'B111496443/' },
        { text: '"In the past, I could walk in without a reservation, but for about the last 10 years, it has become extremely difficult to get a table at this bar." — April 2026.', source: R + 'B115608635/' },
        { text: '"When paired with Calvados chocolate, it felt like I was drowning in a giant baked apple pie." — May 2026.', source: R + 'B527266784/' },
      ],
      japanese_sources_summary: '食べログ: カルバドール、バー、中京区妙満寺前町446 若林ビル 2F、京都市役所前駅から313m、月・火・金〜日 19:00〜23:00、水・木休み、予約可、カウンター8席、喫煙可、チャージ1,000円、カード (JCB、AMEX、Diners) と楽天ペイ可、2004年4月28日オープン、バー 百名店 2022。口コミ (2026年2〜5月、英語): カルヴァドス専門、500種類以上、マスターの Takayama さん、ジャックローズ、熟成のシングルカスク、Assemblage Kakimoto とのチョコレート、看板のない2階、予約が取りにくい。',
      confidence: 'medium', sources: [TB, R + 'B111496443/', R + 'B115608635/', R + 'B218810209/', R + 'B522678507/', R + 'B527173479/', R + 'B527266784/', R + 'B527342536/', R + 'B529935657/', R + 'B533417564/', R + 'B89747541/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'An eight-seat counter; the master recommends from a long list; phone ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区妙満寺前町446 若林ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (not shop-maintained); reviews dated through May 2026. The official website shows only a hosting placeholder (November 2026).' },
    pin_source: `Tabelog ${TB} (35.013434, 135.767058); cross-checked: GSI 京都府京都市中京区妙満寺前町446番地 (lot) 61m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B111496443/'],
    price_note: 'No drinks list or prices are published; table charge from Tabelog; one February 2026 visit came to about ¥14,000 for five drinks.', last_checked: TODAY, items: [
      it('チャージ', '', 'Table charge, per person', '¥1,000', 'Charge', '', '', 'Tabelog.', 'charge'),
      it('', '', 'Jack Rose (Calvados cocktail)', '', 'Cocktails', 'ask', 'ask', '2026 reviews.', 'jack_rose'),
      it('', '', 'Aged Calvados by the glass', '', 'Spirits', 'ask', 'ask', '2026 reviews.', 'calvados'),
    ] }, {
    cuisine: 'ノルマンディーのりんごのブランデー、カルヴァドスに特化したバー。2026年5月の口コミによれば500種類以上、古いヴィンテージや店のためのシングルカスクも・例: Toutain 34年 Bar CALVADOR 用シングルカスク、Lauriston 1963、Pays d\'Auge 1973、Adrien Camut、52年熟成、洋梨90%のカルヴァドス (2026年の口コミ)・カクテル: ジャックローズ、カルヴァドスのマンハッタン、カルヴァドスとりんごジュースのロングドリンク・店のために作られた Ichiro’s Malt、ハイボールでも・京都のパティスリー Assemblage Kakimoto とのカルヴァドスのチョコレート・予算は約3,000〜19,999円、チャージ1,000円',
    neighborhood: '京都市役所の近く、看板のない若林ビルの2階。京都市役所前駅から約313m',
    gf_detail: '要確認。カルヴァドスのバーで、りんごや洋梨のブランデーとカクテルが中心。2026年の口コミに出てくる食べ物はカルヴァドスのチョコレートだけ。',
    vegan_detail: '要確認。蒸留酒やカクテルは合うかもしれない。チョコレートについては説明がない。',
    notes: '[バー・京都市役所近く、カルヴァドスの専門店] 看板のないビルの2階、8席のカウンターに500種類以上のりんごのブランデー。2026年の常連によれば日本一カルヴァドスに詳しいというマスターの Takayama さんは、フランスまで買い付けに行く。店のためのシングルカスクや Lauriston 1963 のようなヴィンテージも。まずはジャックローズ、それから34年のシングルカスクや洋梨の多い珍しい一杯を、Assemblage Kakimoto のカルヴァドスのチョコレートと。10年ほど前から入りにくくなったという声もあるので、まず電話を。喫煙可、チャージ1,000円。水・木曜休み。',
  });
}

// ================================================================ Bar Rocking chair
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26007698/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://bar-rockingchair.jp/';
  const H = day(['17:00', '01:00']);
  put({
    id: 'kyoto_bar_rocking_chair', name: 'Bar Rocking chair (ロッキングチェア)', category: 'MOM_AND_POP',
    lat: 35.000981, lng: 135.766412, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A cocktail bar: spirits and fresh-fruit cocktails are the likelier choices; the food includes fresh pasta (June 2026), and the table charge includes a small snack.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Fruit cocktails and spirits may suit; the pasta seen in 2026 came with oil sardines.',
    hours_raw: 'Daily except Tuesday 17:00–1:00 (last order 24:00); also closed on 9 and 16 November 2026 (official site). Bookings only for arrivals between 17:00 and 18:00, from the start of each month; after that, phone 30 minutes ahead and a free seat is held for 30 minutes (official site); groups of up to 4 (official site). 24 seats: 9 at the counter and 5 tables, plus two rocking chairs by the fireplace (Tabelog; June 2026). Smoking allowed, cigars available; no minors (Tabelog). Table charge ¥880 including a snack (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) (Tabelog). The fireplace is lit for the season on 19 November 2026, with inoko-mochi for guests (official site). Opened 2 February 2009 (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Miyukimachi-dori south of Bukkoji, a Kyoto machiya through a small garden — a few minutes south of Shijo-Kawaramachi',
    cuisine: 'A classic cocktail bar in a machiya, with seasonal fresh-fruit cocktails (official site; 2026 reviews) · examples: watermelon salty dog ¥2,200 (July 2026); Black Manhattan ¥1,980 and a Kamikaze (October 2026); a Delaware-grape gin and tonic (August 2026); gin sling, Old Fashioned, martini (September 2026); gin and tonic with Fever-Tree, mojito; cassis parisienne · "The Best Scene", the cocktail with which bartender Kato won a national bartender competition (August 2026) · food such as fresh pasta with oil sardines and Kujo green onion (June 2026) · cigars · table charge ¥880 with a snack; diners spend about ¥2,000–9,999',
    website: SITE, gmaps: gm('Bar Rocking chair 京都'), menu_url: SITE,
    notes: "[Bar · Shijo-Kawaramachi, cocktails by the fire in a Kyoto townhouse] Through a small garden off Miyukimachi-dori, a warm wood-lined machiya bar with a long counter, tables, and two rocking chairs in front of a fireplace that is lit each November with the season's first inoko-mochi. Owner-bartender Kenji Tsubokura runs a team whose bartender Kato won a national competition with the cocktail \"The Best Scene\"; seasonal fruit drinks such as a watermelon salty dog sit beside sharp classics. It is popular: you can book only for 17:00–18:00, otherwise phone half an hour ahead and a seat is held for you. Smoking and cigars allowed, so no minors; ¥880 charge with a snack. Open to 1:00, closed Tuesdays.",
    chef_bio: { chef_name: 'Kenji Tsubokura (坪倉健児; official site: "Kenji Tsubokura, Owner Bartender")', roles: ['Owner-bartender (official site)', 'Bartender Kato, winner of a national bartender competition (August 2026 review)'], origin: null,
      background: 'Opened 2 February 2009 (Tabelog). The official site, signed by the owner, posts monthly hours and holidays, explains the booking rules (bookings only for 17:00–18:00; later a 30-minute seat hold by phone), and announces the yearly lighting of the fireplace with inoko-mochi, a sweet said to ward off fire. A June 2026 diner found it through a book by Kazuhiko Ota. Selected for Tabelog Bar "Tabelog 100" 2022.',
      philosophy: 'A glass to enjoy slowly as the seasons change (official site).', specialty: 'Seasonal fruit cocktails; the fireplace and rocking chairs.',
      anecdotes: [
        { text: '"True to its name, there are two rocking chairs placed in front of the fireplace." — June 2026.', source: R + 'B530808639/' },
        { text: '"I ordered the championship-winning cocktail, \'The Best Scene.\' I was warned that it was on the stronger side." — August 2026.', source: R + 'B534653393/' },
        { text: '"The seats were fully booked, but they said they would contact me when one became available." — September 2026.', source: R + 'B535714885/' },
      ],
      japanese_sources_summary: '公式サイト (bar-rockingchair.jp): Bar Rocking chair、11月は毎週火曜日と、9日と16日の月曜日が休業、営業時間は全日17:00〜01:00 (L.O.24:00)、営業開始から18:00までは事前に電話で予約可、1グループ4名まで、11月19日の木曜日に暖炉開き、火難を避ける謂われのある亥の子餅、予約は基本的に17:00〜18:00のみ、それ以降は来店30分前に電話で空きを確認し30分間仮確保、満席で電話に出られないことも、坪倉健児。食べログ: バー、下京区御幸町通仏光寺下る橘町434-2、24席 (カウンター9、テーブル5)、喫煙可、葉巻も、未成年不可、チャージ880円 (お通し込)、カード可、2009年2月2日オープン、バー 百名店 2022。口コミ (2026年6〜10月、英語): ロッキングチェアと暖炉、スイカのソルティドッグ、受賞カクテル、季節の果物のカクテル。',
      confidence: 'medium', sources: [TB, SITE, R + 'B502714073/', R + 'B529933352/', R + 'B530614090/', R + 'B530808639/', R + 'B531859019/', R + 'B533257666/', R + 'B533357940/', R + 'B534653393/', R + 'B535714885/', R + 'B538409074/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'The official site has an English notice page; book for 17:00–18:00 or phone 30 minutes ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区御幸町通仏光寺下る橘町434-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (November 2026 notice) and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.000981, 135.766412); cross-checked: GSI 京都府京都市下京区橘町434番地 (lot) 37m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B531859019/', R + 'B538409074/'],
    price_note: 'Charge from Tabelog; drink prices from July and October 2026 reviews.', last_checked: TODAY, items: [
      it('チャージ', '', 'Table charge with a snack, per person', '¥880', 'Charge', '', '', 'Tabelog.', 'charge'),
      it('', '', 'Watermelon salty dog (seasonal)', '¥2,200', 'Cocktails', 'ask', 'ask', 'July 2026.', 'watermelon_salty_dog'),
      it('', '', 'Black Manhattan', '¥1,980', 'Cocktails', 'ask', 'ask', 'October 2026.', 'black_manhattan'),
    ] }, {
    cuisine: '町家のクラシックなカクテルバーで、季節の果物のカクテルも (公式サイト、2026年の口コミ)・例: スイカのソルティドッグ2,200円 (2026年7月)、ブラックマンハッタン1,980円と Kamikaze (2026年10月)、Delaware のジントニック (2026年8月)、ジンスリング、オールドファッションド、マティーニ (2026年9月)、Fever-Tree のジントニック、モヒート、カシス・パリジェンヌ・バーテンダーの Kato さんが全国大会で優勝したカクテル「The Best Scene」(2026年8月)・オイルサーディンと Kujo のねぎの生パスタなどの食べ物も (2026年6月)・葉巻・チャージ880円 (お通し込)、予算は約2,000〜9,999円',
    neighborhood: '御幸町通仏光寺下る、小さな庭を抜けた町家。四条河原町から南へ数分',
    gf_detail: '要確認。カクテルバーで、蒸留酒や生の果物のカクテルのほうが選びやすい。食べ物には生パスタもあり (2026年6月)、チャージにはお通しが付く。',
    vegan_detail: '要確認。果物のカクテルや蒸留酒は合うかもしれない。2026年のパスタはオイルサーディン入り。',
    notes: '[バー・四条河原町、町家の暖炉の前のカクテル] 御幸町通の小さな庭を抜けると、木の温もりの町家のバーに長いカウンター、テーブル、暖炉の前に2脚のロッキングチェア。暖炉は毎年11月に火を入れ、亥の子餅がふるまわれる。オーナーバーテンダーの坪倉健児さんのチームには、カクテル「The Best Scene」で全国大会を制した Kato さんも。スイカのソルティドッグのような季節の果物の一杯と、きりっとしたクラシックが並ぶ。人気店で、予約は17時〜18時のみ、それ以外は30分前に電話すれば席を確保してくれる。喫煙と葉巻が可なので未成年不可、チャージ880円 (お通し込)。深夜1時まで、火曜休み。',
  });
}

save();
