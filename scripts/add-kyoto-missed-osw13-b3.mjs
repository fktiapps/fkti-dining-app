// Kyoto "what did we miss" pass (kyoto-missed, notable phase) — lane osw13, batch 3.
//   + 竹屋町 三多 Takeyamachi Mita (6-seat kaiseki counter of chef Hiroyuki Mita near the Imperial Palace; Tabelog Silver 2019–2026; since 2010)
//   + 未在 Mizai (tea-kaiseki of Hitoshi Ishihara, 石原仁司, in Maruyama Park; one 18:00 sitting; since 2004)
//   + 八寸 Hassun (Gion kaiseki founded in 1945, now run by second-generation chef Kanji Kubota)
//   + 大市 Daiichi (soft-shelled turtle "marunabe" house of about 340 years, 18 generations, Kamigyo)
//   The first four entries of `queue.mjs kyoto-missed next notable 80` on 2026-11-01. None is in data/kyoto.json: grep by name
//   (三多/Mita, 未在/Mizai, 八寸/Hassun, 大市/Daiichi — only unrelated Daiichi Asahi ramen shops match) and by address
//   (久遠院前町667, 円山町613, 末吉町95, 六番町364) found nothing. Nearest record: mp_wa_dining_nakagishi, 25 m from Hassun's
//   Tabelog point, a different shop (its pin_source gives 東山区富永町107番地). Chain check: each is a single restaurant;
//   Mizai sells a house spice blend (official site) and Daiichi has a mail-order shop (its site, under maintenance).
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-3');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 竹屋町 三多
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26016620/'; const R = TB + 'dtlrvwlst/';
  const H = day(['16:00', '22:00']);
  put({
    id: 'kyoto_takeyamachi_mita', name: '竹屋町 三多 (Takeyamachi Mita)', category: 'MOM_AND_POP',
    lat: 35.016147, lng: 135.767195, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information. A set Japanese course seasoned with soy sauce and miso; 2026 courses included fried spring rolls, an asparagus tempura, somen noodles and sushi.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish-led kaiseki course built on dashi, with soft-shelled turtle and beef in some dishes (2026 reviews).',
    hours_raw: 'Tabelog lists daily 16:00–22:00 with irregular closing days and asks guests to check; one dinner sitting a night, which 2026 diners report starting at 16:00 (September, a Saturday) or 18:00 (October) (Tabelog; reviews). Reservation only, online (Tabelog); hard to book, though cancellations open up on reservation sites (2026 reviews; a September 2026 diner booked through OMAKASE). Some autumn nights are private Matsutake gatherings (October 2026). 6 counter seats; whole-shop hire for up to 20 (Tabelog). Non-smoking (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). Opened 11 September 2010 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Takeyamachi, on a quiet street just south of the Imperial Palace — 5 min from the Kawaramachi-Marutamachi bus stop, 10 min from Jingu-Marutamachi, Kyoto Shiyakusho-mae or Marutamachi Stn',
    cuisine: 'One seasonal kaiseki course a night, on historic tableware (2026 reviews) · seasonal course ¥67,000 (September 2026); the autumn Matsutake gathering ¥75,000 including tax and drinks (October 2026); diners report ¥50,000–79,999 (Tabelog) · August 2026: egg tofu with Yura sea urchin sauce, stick sushi of Awaji horse mackerel with young ginger, steamed Setouchi abalone with fried asparagus and liver sauce, Akashi sea bream, hamo in white miso, charcoal-grilled Ariake eel, eggplant with soft-shelled-turtle sauce, sudachi somen, then three corn rices (plain, butter, black pepper) · September 2026: salmon roe with yam, Matsutake spring rolls, Akashi horse mackerel sushi, hamo with miso, grilled white sweet sea bream, hairy crab, abalone and eggplant in turtle broth, Matsutake clay-pot rice · October 2026: Matsutake spring rolls with dried sea-cucumber roe, Awaji mackerel sushi, sea bream with kombu and sea urchin, grilled cutlassfish with Matsutake, chateaubriand with chestnut flour and sansho, Matsutake rice · sake such as "Kuro-ryu" (as an October 2026 review writes it)',
    website: TB, gmaps: gm('竹屋町 三多 京都'), menu_url: TB,
    notes: "[Kaiseki · Teramachi-Marutamachi, six seats and one sitting a night] A pure Japanese room of straw-flecked earthen walls and a single slab of keyaki for a counter that seats six, on a quiet street south of the Imperial Palace. Chef Hiroyuki Mita cooks one seasonal course for everyone and explains each dish; diners in 2026 single out the horse-mackerel and mackerel sushi, hamo in white miso, Matsutake spring rolls and the clay-pot rices at the end, all on old and notable tableware. The chef greets guests at the door and sees them off, a woman owner looks after the drinks, and reviewers call the service warm and unstuffy. Tabelog Silver every year from 2019 to 2026 and Japanese cuisine WEST 100. Hard to book; watch reservation sites for cancellations. Expect ¥60,000–79,999.",
    chef_bio: { chef_name: 'Hiroyuki Mita (romaji from a September 2026 review; the kanji of the given name is not in a source)', roles: ['Head chef (September 2026 review: "the Japanese cuisine crafted by Chef Hiroyuki Mita")', 'The owner is a woman who serves the drinks (October 2026 review: "The owner is attentive to the drinks behind the counter, and her friendly and gentle demeanor is reassuring")'], origin: null,
      background: 'Opened 11 September 2010 (Tabelog). Reviewers in 2026 describe the head chef as humble and polite, explaining each dish (October), and "Mr. Mita himself" waiting at the entrance to welcome guests (August); an August 2026 diner was also struck by the proprietress\'s attentive hospitality. The room has walls of diatomaceous earth mixed with straw and a single-piece keyaki counter (October 2026). Tabelog Award Silver 2019–2026; Japanese cuisine WEST "Tabelog 100" 2021, 2023, 2025.',
      philosophy: null, specialty: 'Horse-mackerel and mackerel sushi; hamo in white miso; Matsutake in autumn; clay-pot rice.',
      anecdotes: [
        { text: '"Upon arriving at the restaurant, Mr. Mita himself was standing at the entrance, graciously welcoming me." — August 2026, booked on a lucky opening.', source: R + 'B534438791/' },
        { text: '"The aroma of the matsutake was so strong that it reached even the distant tables." — October 2026, a second visit.', source: R + 'B534468694/' },
        { text: '"The cost was JPY 75,000 per person (tax included, with drinks included at a very reasonable price)." — October 2026, Matsutake event.', source: R + 'B536658956/' },
      ],
      japanese_sources_summary: '食べログ: 竹屋町 三多、日本料理、中京区寺町通竹屋町下ル久遠院前町667-1、16:00〜22:00、不定休、予約はネットで、カウンター6席、貸切20名まで、禁煙、カード可、2010年9月11日オープン、The Tabelog Award Silver 2019〜2026、日本料理 WEST 百名店 2021・2023・2025。口コミ(2026年8月〜10月): 鱧白味噌、松茸ご飯 (日本語の写真説明)、鯵や鯖の寿司、Matsutake の春巻き、最後に土鍋ご飯、歴史ある器、店主と大将の温かいもてなし、予約が取りにくい、季節のコース67,000円、松茸の会75,000円 (税・飲み物込み)。',
      confidence: 'medium', sources: [TB, R + 'B509313895/', R + 'B521257203/', R + 'B534438791/', R + 'B534468694/', R + 'B534677564/', R + 'B535375571/', R + 'B536658956/', R + 'B537310468/', R + 'B537369123/', R + 'B80302552/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One set course at a six-seat counter; booked online; dishes are explained in Japanese by the chef.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区寺町通竹屋町下ル久遠院前町667-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (not a shop-maintained page); reviews dated through October 2026. No official website found.' },
    pin_source: `Tabelog ${TB} (35.016147, 135.767195); cross-checked: GSI 京都府京都市中京区久遠院前町667番地 (lot) 62m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535375571/', R + 'B536658956/'],
    price_note: 'No menu or price list is published; prices are what 2026 diners paid.', last_checked: TODAY, items: [
      it('', '', 'Seasonal course', '¥67,000', 'Course', 'ask', 'no', 'September 2026.', 'seasonal_course'),
      it('', '', 'Autumn Matsutake course (tax and drinks included)', '¥75,000', 'Course', 'ask', 'no', 'October 2026.', 'matsutake_course'),
      it('鱧白味噌', '', 'Hamo in white miso (in course)', '', 'Course', 'ask', 'no', 'October 2026 photo caption.', 'hamo_shiromiso'),
      it('松茸ご飯', '', 'Matsutake rice (in course)', '', 'Course', 'ask', 'no', 'October 2026 photo caption.', 'matsutake_rice'),
    ] }, {
    cuisine: '季節の懐石のコースが一晩ひとつ、歴史ある器で (2026年の口コミ)・季節のコース67,000円 (2026年9月)、秋の松茸の会は税・飲み物込みで75,000円 (2026年10月)、口コミの予算は50,000〜79,999円 (食べログ)・2026年8月: Yura のウニのソースの玉子豆腐、Awaji の鯵と新生姜の棒寿司、Setouchi の蒸し鮑と揚げたアスパラと肝のソース、Akashi の鯛、hamo の白味噌、Ariake の鰻の炭火焼き、すっぽんのソースの茄子、すだちの素麺、最後に3種のとうもろこしご飯 (そのまま、バター、黒胡椒)・2026年9月: イクラと長芋、Matsutake の春巻き、Akashi の鯵の寿司、hamo の味噌、甘鯛の焼き物、毛蟹、すっぽんの出汁の鮑と茄子、Matsutake の土鍋ご飯・2026年10月: Matsutake の春巻きと bachiko、Awaji の鯖寿司、kombu と雲丹を合わせた鯛、Matsutake を添えた tachiuo の焼き物、栗の粉と sansho のシャトーブリアン、松茸ご飯・日本酒は Kuro-ryu (口コミの表記) など (2026年10月)',
    neighborhood: '寺町通竹屋町下ル、京都御所の南の静かな通り。市バス河原町丸太町から徒歩5分、神宮丸太町駅、京都市役所前駅、丸太町駅から徒歩10分',
    gf_detail: '予約時に要確認。グルテンの情報なし。醤油と味噌で味付けする決まったコースで、2026年のコースには揚げた春巻き、アスパラの tempura、素麺、寿司があった。',
    vegan_detail: 'ヴィーガンではありません。出汁を使う魚中心の懐石で、すっぽんや牛肉を使う皿もある (2026年の口コミ)。',
    notes: '[懐石・寺町丸太町、6席で一晩一回] 京都御所の南の静かな通り、藁を混ぜた土壁と keyaki の一枚板のカウンターに6席の純和風の空間。Hiroyuki Mita さんが季節のコースを全員に一斉に作り、一皿ずつ説明する。2026年の口コミでは鯵や鯖の寿司、鱧白味噌、Matsutake の春巻き、締めの土鍋ご飯が挙がり、古く由緒ある器で出てくる。大将が入口で迎えて見送り、女性の店主が飲み物を担当。温かく堅苦しくないもてなしと評判。The Tabelog Award Silver を2019年から2026年まで毎年受賞、日本料理 WEST 百名店。予約が取りにくいので、予約サイトのキャンセルを狙う人も。予算は60,000〜79,999円。',
  });
}

// ================================================================ 未在
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26002279/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://mizai.jp/';
  const H = day(['18:00', '22:00']);
  put({
    id: 'kyoto_mizai_maruyama', name: '未在 (Mizai)', category: 'MOM_AND_POP',
    lat: 35.002989, lng: 135.782361, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking: the official site says the shop confirms portion size and allergies when you reserve. No gluten information; a long tea-kaiseki course with many dishes seasoned with soy sauce and miso.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a tea-kaiseki course of sashimi, fish, meat and hamo, built on dashi (2026 reviews).',
    hours_raw: 'One sitting a night: doors from about 17:30, everyone starts at 18:00 (arrive by 17:45) and the meal takes about three hours (official site; Tabelog); 2026 diners report anything from under 2.5 hours to near midnight. Closed Wednesday and irregularly (Tabelog). Reservation by phone, up to a year ahead; the phone is hard to reach during service and an hour either side (official site; Tabelog). The shop confirms a week before; cancellation 50% from seven days before, 100% from five days, and no date changes in that period (official site). Smart casual or better, kimono welcome; children from middle-school age (official site). 14 counter seats and a tea room as a private room (Tabelog; official site). Payment basically cash, though cards are accepted (official site; Tabelog lists VISA, Master, JCB, AMEX). Photos of the food are not allowed (2026 reviews). Non-smoking (Tabelog). Opened June 2004; the site marked 22 years in June 2026. Relocated within Maruyama-cho from 620-1 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Inside Maruyama Park beyond Yasaka Shrine, at the far end of the park; the entrance is easy to miss — 15 min on foot from Gion-Shijo (Keihan) or Kawaramachi (Hankyu)',
    cuisine: 'Tea kaiseki in the house style (未在流献立): it opens with rice and a soup bowl as in a tea meal, moves through generous sashimi with many condiments, fish, meat and hamo, then a large hassun, a scorched-rice tea porridge, a big spread of fruit and matcha whisked by the owner (official site; 2026 reviews) · cuisine charge ¥65,000 plus tax and 10% service; market price in January and October; the tea room (private room) ¥35,000 extra (official site); Tabelog lists the "Mizairyu tea kaiseki" at ¥78,000 including tax · portions are famously large; diners are told to come hungry, and many leave some (2026 reviews) · an original sake made with the Kyoto rice Iwai (September 2026); wine, priced on asking (June 2026) · a house blend of eight spices, "八味", ¥2,000 a bottle or ¥3,500 for two, ordered by phone (official site)',
    website: SITE, gmaps: gm('未在 円山公園'), menu_url: SITE,
    notes: "[Tea kaiseki · Maruyama Park, a Kyoto master's one-sitting counter] At the far end of Maruyama Park, beyond Yasaka Shrine, fourteen guests sit at one counter and start together at 18:00 for about three hours of tea kaiseki. The owner, Hitoshi Ishihara (石原仁司), born in Shimane in 1952, began training at 15 at a famous Osaka restaurant, rose to head chef in Kyoto at 24, and opened Mizai in 2004; a June 2026 reviewer recalls three Michelin stars many times over. The name is a Zen phrase: the way is never finished. The evening opens with the etiquette of a tea meal, then relaxes; it runs through a lavish sashimi course, a grand hassun, a scorched-rice tea porridge and an astonishing fruit course, and ends with matcha the owner whisks. No food photos. ¥65,000 plus tax and service, cash preferred; book by phone up to a year ahead.",
    chef_bio: { chef_name: 'Hitoshi Ishihara (石原仁司)', roles: ['Owner (official site: "未在 主人　石原仁司")'], origin: 'Shimane Prefecture, born 1952 (June 2026 review).',
      background: 'Per a June 2026 review: born in 1952 in Shimane; joined the Osaka main restaurant of "Kichijo" (the review\'s spelling) at 15 and trained under its founder, Teiichi Yuki; head chef of its Kyoto restaurant at 24 and executive chef at 38; opened Mizai in Maruyama Park in 2004; the name comes from a Zen phrase meaning training never ends; three Michelin stars "multiple times". The official site\'s greeting (August 2026) marks 22 years since opening in June 2004, says the way is "still half-travelled", and offers a house eight-spice blend as an anniversary gift. A September 2026 diner first saw the owner on the NHK programme "Professional" about ten years earlier. Reviewers in 2026 describe the owner as strict and dignified at first, explaining tea-meal etiquette, then increasingly friendly; apprentices greet guests and explain dishes. Tabelog Award Silver 2019–2023, Bronze 2024–2026; Japanese cuisine WEST "Tabelog 100" 2021, 2023, 2025.',
      philosophy: '"一座建立": a fine shared time through the spirit of tea kaiseki, which also asks guests to show consideration for one another (official site).', specialty: 'Tea kaiseki in the Mizai style; the hassun; the closing fruit; matcha.',
      anecdotes: [
        { text: '"Come after skipping breakfast and lunch. This is no joke; it\'s a technical necessity." — June 2026, a third visit.', source: R + 'B486528749/' },
        { text: '"I felt relieved when I was told I could enjoy the dishes in my preferred way starting from the second course." — June 2026; about ¥130,000 per person with wine.', source: R + 'B531054852/' },
        { text: '"Ishihara-san initially comes across as dignified, but he becomes increasingly friendly as the meal progresses." — September 2026.', source: R + 'B535904718/' },
      ],
      japanese_sources_summary: '公式サイト (mizai.jp): 御料理 未在、主人 石原仁司、2026年6月で開店22周年 (令和八年 葉月の御挨拶)、未だ道半ば、周年記念に主人好みの香辛料「八味」(1本2,000円税込、2本3,500円)、皆様一斉に18時開始、茶懐石 (未在流献立) に約3時間、お料理代六万五千円 (税別)、サービス料10%別、一月と十月は時価、茶室代 (個室) 三万五千円 (税別)、支払いは基本的に現金 (カード可)、予約は一年前から、営業時間中 (前後1時間含む) は電話が繋がりにくい、お食事の量やアレルギー等を確認、1週間前に連絡、キャンセル料は7日前50%・5日前100%、スマートカジュアル以上 (和装含む)、「一座建立」、子どもは中学生以上。食べログ (店舗会員): 未在、日本料理、東山区八坂鳥居前東入ル円山町613 円山公園、水曜休み・不定休、カウンター14席と個室、The Tabelog Award Silver 2019〜2023・Bronze 2024〜2026、日本料理 WEST 百名店 2021・2023・2025、円山町620-1から移転。口コミ(2026年5月〜9月): 料理の写真は不可、最初に茶懐石の作法の説明、量が多い、お造り、八寸、おこげの茶粥、果物、主人が点てる抹茶。',
      confidence: 'medium', sources: [TB, SITE, R + 'B400205889/', R + 'B455376276/', R + 'B486528749/', R + 'B527675384/', R + 'B531054852/', R + 'B534044715/', R + 'B534087556/', R + 'B535139201/', R + 'B535698042/', R + 'B535904718/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book by phone; one set course with tea-meal etiquette explained at the start; no food photos; smart casual or better.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区八坂鳥居前東入ル円山町613 円山公園',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and official site (greeting dated August 2026); reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.002989, 135.782361); cross-checked: GSI 京都府京都市東山区円山町613番地 (lot; queried without the street-direction prefix, which the normaliser mis-cut) 131m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE, TB],
    price_note: 'Prices from the official site (tax excluded, plus 10% service; read November 2026); Tabelog lists ¥78,000 including tax. January and October are market price.', last_checked: TODAY, items: [
      it('茶懐石（未在流献立）', '', 'Tea kaiseki in the Mizai style (cuisine charge, tax and service extra)', '¥65,000', 'Course', 'ask', 'no', 'Official site; market price in January and October.', 'cha_kaiseki'),
      it('茶室代(個室)', '', 'Tea room (private room) charge', '¥35,000', 'Room', '', '', 'Official site, tax excluded.', 'tea_room'),
      it('未在八味', '', 'House eight-spice blend, one bottle', '¥2,000', 'Shop', '', '', 'Official site, tax included; two for ¥3,500.', 'hachimi'),
    ] }, {
    cuisine: '店の流儀の茶懐石 (未在流献立): 茶事のようにご飯と汁から始まり、薬味の多い盛りだくさんのお造り、魚、肉、hamo、大きな八寸、おこげの茶粥、たっぷりの果物、最後に主人が点てる抹茶 (公式サイト、2026年の口コミ)・お料理代65,000円 (税別)、別途サービス料10%、一月と十月は時価、茶室代 (個室) 35,000円 (税別) (公式サイト)。食べログには未在流の茶懐石78,000円 (税込) とある・量が多いことで知られ、空腹で来るようにと言われ、残す人も多い (2026年の口コミ)・京都の酒米 Iwai のオリジナルの日本酒 (2026年9月)、ワインは値段を聞いて (2026年6月)・主人好みの香辛料「八味」1本2,000円、2本3,500円、電話で注文 (公式サイト)',
    neighborhood: '円山町613、Yasaka Shrine の先の円山公園のいちばん奥、入口がわかりにくい。京阪祇園四条駅、阪急京都河原町駅から徒歩15分',
    gf_detail: '予約時に要確認。公式サイトによれば予約時にお食事の量やアレルギー等を確認している。グルテンの情報はない。醤油や味噌で味付けする皿の多い長い茶懐石。',
    vegan_detail: 'ヴィーガンではありません。お造り、魚、肉、hamo を使い、出汁を土台にした茶懐石 (2026年の口コミ)。',
    notes: '[茶懐石・円山公園、京都の名料理人の一晩一回のカウンター] Yasaka Shrine の先、円山公園のいちばん奥。14人がひとつのカウンターに座り、18時に一斉に始まって約3時間の茶懐石。主人の石原仁司さんは1952年 Shimane の生まれ、15歳から大阪の名店で修業し、24歳で京都の店の料理長に。2004年に未在を開いた。2026年6月の口コミによればミシュランの三つ星を何度も獲得。店名は禅の言葉で、道は未だ終わらないという意味。始まりは茶事の作法の説明で、そこから少しずつくつろぎ、たっぷりのお造り、見事な八寸、おこげの茶粥、驚くほどの果物と続き、主人の点てる抹茶で終わる。料理の写真は不可。65,000円に税とサービス料、支払いは基本的に現金。予約は電話で一年前から。',
  });
}

// ================================================================ 八寸
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26002259/'; const R = TB + 'dtlrvwlst/';
  const L = day(['12:00', '13:00'], ['18:00', '21:00']); const D = day(['18:00', '21:00']);
  put({
    id: 'kyoto_hassun_gion', name: '八寸 (Hassun)', category: 'MOM_AND_POP',
    lat: 35.004876, lng: 135.773764, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information. An omakase kaiseki seasoned with soy sauce and miso; 2026 courses included sea bream with sea-urchin soy sauce, a Yawata roll, simmered fried tofu and grilled fish with miso.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seasonal kaiseki built on dashi, with hamo, eel, duck and other fish (2026 reviews).',
    hours_raw: 'Lunch Tue–Sat 12:00–13:00 (last order 13:00); dinner Mon–Sat 18:00–21:00; closed Sunday (Tabelog). Reservations online until the day before (Tabelog); Ikkyu and Tabelog bookings reported (2026 reviews). 18 seats: a 12-seat counter and a sunken-kotatsu private room for 6 (Tabelog). Children welcome; call to book with children (Tabelog). Non-smoking (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). Founded in 1945 (September 2026 review).',
    hours: { 0: D, 1: L, 2: L, 3: L, 4: L, 5: L }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion, through a stone-paved passage behind a plain noren — 5 min from Gion-Shijo Stn (Keihan), 8 min from Kawaramachi (Hankyu)',
    cuisine: 'Omakase kaiseki from a second-generation Gion kitchen, with natural hamo in summer and Tanba Matsutake in autumn (Tabelog) · omakase kaiseki lunch ¥13,200; dinner ¥27,500 (Tabelog, tax included) · lunch in September–October 2026: steamed fig with sesame sauce or sesame tofu, a hassun (river goby, hamo roe, Yawata roll, sweet potato, smoked egg yolk), tuna and sea-bream sashimi, a dobin-mushi of hamo and Matsutake, grilled sawara, seasoned or Matsutake rice, pickles and fruit · dinner in October 2026: yuba steamed with maitake and koutake, duck loin, seared hamo, sea bream with sea-urchin soy sauce, the season\'s last Matsutake and hamo dobin-mushi, charcoal-grilled sawara with black Manganji pepper and miso, crab in vinegar, wild eel from Mie grilled over charcoal · sake',
    website: TB, gmaps: gm('八寸 祇園 末吉町'), menu_url: TB,
    notes: "[Kaiseki · Gion, a family kaiseki house since 1945] Through a simple noren and a stone-paved passage in the middle of Gion, a long, polished hinoki counter of twelve and a sunken-kotatsu room at the back. The restaurant was founded in 1945; the chef now is Kanji Kubota, born in Kyoto Prefecture in 1976, who trained in Tokyo and came home to take over from the chef's father, who still appears now and then. The cooking is quiet and seasonal — hamo in summer, Matsutake dobin-mushi in autumn, a hassun on artists' tableware — and lunch is ¥13,200. New guests are called by name, and in September 2026 an apprentice explained dishes in fluent English to overseas diners. Tabelog Bronze or Silver every year since 2019 and Japanese cuisine WEST 100. Closed Sundays.",
    chef_bio: { chef_name: 'Kanji Kubota (Tabelog; a September 2026 review)', roles: ['Chef and owner, second generation (Tabelog: "the second generation of \'Hassun\'"; "only ingredients that both the owner and his father ... agree upon")'], origin: 'Kyoto Prefecture, born 1976 (Tabelog).',
      background: 'Per Tabelog\'s chef section: born in 1976 in Kyoto Prefecture; trained in Tokyo, then returned to Kyoto; with little wish to be a chef at first, was encouraged by regular customers to take over the restaurant run by the father, and now stands in the kitchen as the second generation; the father and son choose the ingredients together, and the tableware is by contemporary artists the chef collects. Tabelog\'s English gives the father\'s name as both "Masaru Kubota" and "Mamoru Kubota"; no kanji is given. A September 2026 diner reports a founding in 1945, the chef aged 51, and the father appearing occasionally. Tabelog Award Bronze 2019 and 2021–2026, Silver 2020; Japanese cuisine WEST "Tabelog 100" 2021, 2023, 2025.',
      philosophy: 'Seasoning that brings out the ingredients\' own flavour (Tabelog).', specialty: 'Seasonal hassun; hamo; Matsutake dobin-mushi.',
      anecdotes: [
        { text: '"The Japanese and overseas guests were separated, and the overseas guests were given fluent explanations in English by an apprentice." — September 2026, lunch.', source: R + 'B536483685/' },
        { text: '"Even new customers are greeted by name, making it an easy place to enter alone." — September 2026.', source: R + 'B536483685/' },
        { text: '"I spent two and a half hours enjoying my meal while chatting with the chef." — October 2026, dinner.', source: R + 'B538451033/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 八寸、日本料理、東山区祇園末吉町95、京阪祇園四条駅から徒歩5分、昼は火〜土 12:00〜13:00、夜は月〜土 18:00〜21:00、日曜休み、おまかせ懐石 昼13,200円・夜27,500円 (税込)、18席 (カウンター12、足を下ろせる個室6名)、子ども可、The Tabelog Award Bronze・Silver、日本料理 WEST 百名店 2021・2023・2025。口コミ(2026年8月〜10月、写真説明は日本語): 舞茸、こうたけの湯葉蒸し、鴨ロース、鱧の焼き霜、マグロと鯛 (鯛はウニ醤油で)、今年ラストの松茸と鱧の土瓶蒸し、サワラの炭焼き 黒万願寺唐辛子 お味噌添え、蟹の酢の物、三重の天然のうなぎの炭焼き、海外の客には弟子が英語で説明、初めての客も名前で呼ばれる。',
      confidence: 'medium', sources: [TB, R + 'B533666409/', R + 'B536033308/', R + 'B536052930/', R + 'B536483685/', R + 'B536607086/', R + 'B536702809/', R + 'B537048392/', R + 'B537926152/', R + 'B538406043/', R + 'B538451033/'] },
    cultural_comfort: { level: 'relay', note: 'An apprentice explained dishes to overseas guests in fluent English (September 2026); book online until the day before.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園末吉町95',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026. No official website found.' },
    pin_source: `Tabelog ${TB} (35.004876, 135.773764); cross-checked: GSI 京都府京都市東山区末吉町95番地 (lot; queried without the 祇園 prefix, which GSI resolved only to 祇園町南側) 33m; mp_wa_dining_nakagishi is 25m away at a different address; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B538451033/'],
    price_note: 'Course prices from Tabelog (tax included; read November 2026). Dishes from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Omakase kaiseki, lunch', '¥13,200', 'Course', 'ask', 'no', 'Tabelog.', 'lunch'),
      it('', '', 'Omakase kaiseki, dinner', '¥27,500', 'Course', 'ask', 'no', 'Tabelog.', 'dinner'),
      it('今年ラストの松茸と鱧の土瓶蒸し', '', 'Matsutake and hamo dobin-mushi (in course)', '', 'Course', 'ask', 'no', 'October 2026 photo caption.', 'dobinmushi'),
      it('鱧の焼き霜', '', 'Seared hamo (in course)', '', 'Course', 'ask', 'no', 'October 2026 photo caption.', 'hamo_yakishimo'),
    ] }, {
    cuisine: '二代目が営む祇園の台所のおまかせ懐石。夏は天然の hamo、秋は Tanba の Matsutake (食べログ)・おまかせ懐石 昼13,200円、夜27,500円 (食べログ、税込み)・2026年9〜10月の昼: 胡麻だれの蒸しいちじくか胡麻豆腐、八寸 (川魚、hamo の子、Yawata 巻き、さつまいも、燻製の卵黄)、マグロと鯛のお造り、hamo と Matsutake の土瓶蒸し、サワラの焼き物、炊き込みご飯か Matsutake ご飯、香の物と果物・2026年10月の夜: 舞茸、こうたけの湯葉蒸し、鴨ロース、鱧の焼き霜、マグロと鯛 (鯛はウニ醤油で)、今年ラストの松茸と鱧の土瓶蒸し、サワラの炭焼き 黒万願寺唐辛子 お味噌添え、蟹の酢の物、三重の天然のうなぎの炭焼き・日本酒',
    neighborhood: '祇園末吉町95、素朴な noren の奥の石畳の通路を抜けた先。京阪祇園四条駅から徒歩5分、阪急京都河原町駅から徒歩8分',
    gf_detail: '予約時に要確認。グルテンの情報なし。醤油と味噌で味付けするおまかせ懐石で、2026年のコースにはウニ醤油の鯛、Yawata 巻き、ganmo の炊いたもの、味噌を添えた焼き魚もあった。',
    vegan_detail: 'ヴィーガンではありません。出汁を土台に、hamo、鰻、鴨などの魚や肉を使う季節の懐石 (2026年の口コミ)。',
    notes: '[懐石・祇園、1945年から続く家族の懐石] 祇園の真ん中、素朴な noren と石畳の通路の先に、磨き込まれた hinoki のカウンター12席と、奥の足を下ろせる造りの個室。創業は1945年で、今の料理人は1976年京都府生まれの Kanji Kubota さん。東京で修業し、京都へ戻って父の店を継いだ二代目で、父も時々顔を出す。料理は静かで季節に忠実: 夏の hamo、秋の松茸と鱧の土瓶蒸し、作家ものの器に盛る八寸。昼は13,200円。初めての客も名前で呼ばれ、2026年9月には海外の客に弟子が流暢な英語で説明していた。2019年から毎年 The Tabelog Award の Bronze か Silver、日本料理 WEST 百名店。日曜休み。',
  });
}

// ================================================================ 大市
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26000493/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.suppon-daiichi.com/';
  const H = day(['12:00', '14:00'], ['17:00', '21:00']);
  put({
    id: 'kyoto_suppon_daiichi', name: '大市 (Daiichi)', category: 'OMNI',
    lat: 35.022681, lng: 135.741512, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free as served: there is one dish, and its broth is turtle, sake, soy sauce and ginger (a July 2026 diner asked); no gluten-free version is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the only dish is soft-shelled turtle hot pot, then rice porridge with egg.',
    hours_raw: 'Lunch from 12:00 (last entry 12:30); dinner in two sittings from 17:00 (last entry 17:30) and 19:00 (last entry 19:30); closed Tuesday (may change), a summer break from late July to early August, and over the New Year (Tabelog). Reservation only (Tabelog). 12 seats at tables, and tatami private rooms for 2 to 20 (Tabelog); some meals are served side by side in a private room off a courtyard (July 2026). No children (Tabelog). The dining rooms are non-smoking; smoking is allowed in the entrance area (Tabelog). Parking for 6 cars (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR; no service charge, as it is included in the course (Tabelog). A taxi from the centre costs about ¥1,300; Kitano-Hakubaicho Stn (Randen) is about 18 minutes on foot (Tabelog; July 2026 review). The official site is down for maintenance (November 2026).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kamigyo, where Shimonaga-cho street (as a June 2026 review spells it) meets Senbon-dori — about 18 min on foot from Kitano-Hakubaicho Stn, or a taxi',
    cuisine: 'One dish, soft-shelled turtle "marunabe", in a set course: a small dish of turtle jelly or simmered turtle with ginger, the hot pot served twice (different cuts each time), then rice porridge with rice, mochi and eggs, pickles and seasonal fruit (2026 reviews) · course ¥26,000 including tax and service, lunch or dinner; extra hot pot from ¥10,600 per person; porridge refills offered (Tabelog) · the pot is cooked fast over coke in thick custom clay pots from Shigaraki that take on flavour over years (July 2026); diners were told of a heat of 1,600 degrees (July, September 2026) · drinks: beer and sake, priced on the bill (two beers and two sake ¥8,000, October 2026)',
    website: SITE, gmaps: gm('すっぽん 大市 京都'), menu_url: TB,
    notes: "[Suppon · Kamigyo, a 340-year-old turtle house] An Edo-period building on a quiet street near Senbon-dori, with a courtyard and tatami rooms, where one family has served a single dish for about 340 years and eighteen generations, by diners' accounts since the Genroku era. Sword marks said to be left by samurai remain at the entrance (July 2026), and reviewers note that writers such as Yasunari Kawabata and Naoya Shiga were patrons. The course never changes: turtle jelly, the bubbling marunabe of turtle, sake, soy sauce and ginger served twice, then a rich rice porridge with mochi and egg. Fans call it odourless and deeply savoury; one 2026 diner found the repeated pot monotonous, another the pace brisk. ¥26,000 all in; no children; parking for six.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'A soft-shelled turtle specialist said by 2026 reviewers to be about 340 years old (founded in the Genroku era) and in its eighteenth generation, with the building kept as it was in the Edo period, including sword marks at the entrance said to be from samurai (July and August 2026 reviews). An August 2026 reviewer names Yasunari Kawabata and Naoya Shiga among past patrons and describes the round Kyoto fans given by maiko and geiko that hang in the house. A server portions the hot pot at the table (August, October 2026). Tabelog Award Bronze 2021–2026. No owner is named in a source read.',
      philosophy: null, specialty: 'Soft-shelled turtle marunabe; turtle rice porridge.',
      anecdotes: [
        { text: '"When I asked what was in it, I found out it was just turtle, Japanese sake, soy sauce, and ginger." — July 2026, private room.', source: R + 'B531582276/' },
        { text: '"It retains the same appearance since its founding, with even sword marks said to be made by samurai remaining at the entrance." — July 2026.', source: R + 'B534032968/' },
        { text: '"The same hot pot dish was served twice in the course, which made me quite tired of eating." — July 2026.', source: R + 'B533004411/' },
      ],
      japanese_sources_summary: '公式サイト (suppon-daiichi.com): すっぽん 大市、ショッピングサイトは一時停止中 (2026年11月)。食べログ: 大市、すっぽん・日本料理・鍋、上京区六番町364、昼12:00 (最終入店12:30)、夜は17:00 (最終入店17:30) と19:00 (最終入店19:30) の2部、火曜休み、夏季休暇 (7月下旬〜8月上旬) と年末年始、予約のみ、テーブル12席と個室、子ども不可、駐車場6台、サービス料なし (コース料金内に込み)、すっぽん鍋と zosui が中心のコースは昼夜とも1人26,000円 (税込)、追加は1人10,600円から、zosui のおかわりも、The Tabelog Award Bronze 2021〜2026。口コミ(2026年6月〜10月): 約340年、18代、marunabe を2回、zosui、Shigaraki の土鍋とコークスの火 (英語の口コミ)、生姜、Yasunari Kawabata や Naoya Shiga も通った。',
      confidence: 'medium', sources: [TB, SITE, R + 'B252722774/', R + 'B530469572/', R + 'B531582276/', R + 'B531630865/', R + 'B533004411/', R + 'B533844938/', R + 'B534032968/', R + 'B534250246/', R + 'B536495356/', R + 'B538182745/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One fixed course, so there is nothing to order but drinks; staff serve the hot pot at the table.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区六番町364',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (not shop-maintained) with reviews dated through October 2026; the official site\'s shop is under maintenance.' },
    pin_source: `Tabelog ${TB} (35.022681, 135.741512); cross-checked: GSI 京都府京都市上京区六番町364番地 (lot) 26m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B534032968/'],
    price_note: 'Course price from Tabelog (tax and service included; read November 2026).', last_checked: TODAY, items: [
      it('', '', 'Soft-shelled turtle course: hot pot twice, rice porridge, pickles, fruit', '¥26,000', 'Course', 'no', 'no', 'Tabelog; lunch or dinner.', 'suppon_course'),
      it('', '', 'Extra soft-shelled turtle hot pot, per person', '¥10,600', 'Hot pot', 'no', 'no', 'Tabelog ("from").', 'extra_nabe'),
    ] }, {
    cuisine: 'すっぽんの marunabe ひとつだけのコース: すっぽんの煮こごりか生姜をきかせた小鉢、鍋は2回 (部位が違う)、ご飯と餅と卵の zosui、香の物と季節の果物 (2026年の口コミ)・コースは昼も夜も1人26,000円 (税・サービス料込み)、鍋の追加は1人10,600円から、zosui のおかわりもできる (食べログ)・Shigaraki で特別に作る厚い土鍋で、コークスの強火で一気に炊く。土鍋は年月とともに味を吸う (2026年7月)。1,600度という説明を受けた人も (2026年7月、9月)・飲み物はビールと日本酒、値段は会計で (ビール2本と日本酒2合で8,000円、2026年10月)',
    neighborhood: '上京区六番町364、Senbon-dori から Shimonaga-cho (口コミの表記) の通りに入ったところ。北野白梅町駅から徒歩約18分、またはタクシー',
    gf_detail: 'このままではグルテンフリーではありません。料理はひとつだけで、出汁はすっぽん、酒、醤油、生姜 (2026年7月に尋ねた人の話)。グルテンフリーの対応の記載はない。',
    vegan_detail: 'ヴィーガンではありません。料理はすっぽん鍋だけで、そのあと卵の zosui。',
    notes: '[すっぽん・上京、340年続くすっぽんの店] Senbon-dori 近くの静かな通りに建つ Edo 時代の建物に中庭と座敷。口コミによれば約340年、18代にわたり、Genroku 年間からひとつの料理だけを出してきた。入口には侍がつけたという刀傷が残り (2026年7月)、Yasunari Kawabata や Naoya Shiga も通ったという。コースは変わらない: すっぽんの煮こごり、すっぽんと酒と醤油と生姜のぐつぐつ煮える marunabe を2回、最後に餅と卵の濃い zosui。臭みがなく旨みが深いという声が多い一方、同じ鍋が2回で単調だった、テンポが速かったという声も。すべて込みで26,000円、子ども不可、駐車場6台。',
  });
}

save();
