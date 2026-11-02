// Kyoto "what did we miss" pass (kyoto-missed, notable phase) — lane osw13, batch 4.
//   + 草喰 なかひがし Soujiki Nakahigashi (foraged-plant kaiseki of Hisao Nakahigashi by Ginkaku-ji; Michelin Green Star per its site; since 1997)
//   + IL GARAGE (two-table Italian of the couple Masato and Midori Shirakawa above a garage on Sakaimachi; since 2018)
//   + El Tesoro (エル・テソロ) (Gion cocktail bar known for seasonal fruit cocktails and home-made cakes; Bar 100 2022; since 2006)
//   + 山元麺蔵 Yamamoto Menzou (Okazaki udon shop famous for burdock tempura and long, chewy noodles; since 2006)
//   The first four entries of `queue.mjs kyoto-missed next notable 80` on 2026-11-01. None is in data/kyoto.json: grep by name
//   (なかひがし/Nakahigashi, GARAGE, テソロ/Tesoro, 麺蔵/Menzou — only unrelated "Yamamoto" shops match) and by address
//   (石橋町32, 道祐町147, 大和ビル, 弁財天町19, 南御所町34) found nothing. Nearest records: ChIJK3SFEQAJAWARTA0hIm0Z5c8 "Kuru Kuru"
//   (neighborhood "Philosopher's Path") 49 m from Nakahigashi; kyo_ikariya_beika and ChIJezBqHpMJAWARi5BFOEhNolk "Telaviv"
//   52–57 m from IL GARAGE — all different shops. Chain check: each is one restaurant; Yamamoto Menzou also runs a takeout
//   counter and mail order (official site). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-4');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 草喰 なかひがし
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26001800/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://soujiki-nakahigashi.jp/'; const LUNCH = SITE + 'service/lunch/'; const DINNER = SITE + 'service/dinner/';
  const STAFF = SITE + 'staff/'; const PRICE = SITE + 'blog/detail/20260310/';
  const H = day(['12:00', '14:00'], ['18:00', '21:00']);
  put({
    id: 'kyoto_soujiki_nakahigashi', name: '草喰 なかひがし (Soujiki Nakahigashi)', category: 'MOM_AND_POP',
    lat: 35.027605, lng: 135.792723, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking (by phone, in Japanese, or through the foreign-language booking site). No gluten information. Vegetables and wild plants lead, but the set course includes tempura in spring (official site), and dishes are seasoned with soy sauce and miso.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the course is plant-led but built on dashi, with charcoal-grilled fish, dried sardines (mezashi) with the rice, and in 2026 also ayu, carp, eel, venison and wagyu (official site; 2026 reviews).',
    hours_raw: 'Lunch entry 12:00–13:00, dinner entry 18:00–19:00 (official site; Tabelog lists 12:00–14:00 and 18:00–21:00). Closed Monday (holidays included), alternate Tuesdays (ask) and the last day of each month (official site; Tabelog says the last Tuesday of the month). Reservations by phone from 8:00 on the 1st of the month before (the next day if the 1st is a closing day); phone bookings are in Japanese only, and the site links an online booking site for other languages (official site). Hard to book: a September 2026 diner called for 30 minutes. 30 seats: 12 at the counter and two tatami rooms upstairs for 2–6 (Tabelog; official site). Children from upper elementary school; smart casual, no flip-flops or beachwear (Tabelog). Non-smoking; wheelchair accessible (Tabelog). Cash or credit cards (official site); Tabelog also lists transit IC cards. A 22-minute walk from Demachiyanagi Stn, or 3 minutes from the Ginkakuji-michi bus stop (official site).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Jodoji, Sakyo, at the start of the approach to Ginkaku-ji — 3 min from the Ginkakuji-michi bus stop; 10 min by car from Demachiyanagi Stn',
    cuisine: 'Wild plants, flowers and vegetables the owner gathers each morning in Ohara, in a set course: a hassun like a scene from the hills, soups, simply grilled dishes, then rice cooked in a wood-fired okudo-san stove with grilled dried sardines and pickles, refills free (official site; Tabelog) · lunch from ¥12,100, dinner from ¥24,200 including tax and service (official site); from 1 April 2026 lunch from ¥10,000 and dinner from ¥20,000 before tax and service (official notice) · extras at a charge, such as Matsutake rice +¥4,000 (September 2026) or tamago-kake-gohan (October 2026) · September 2026 lunch: a hassun on a lotus leaf, ayu with uruka, summer venison with autumn vegetables, Matsutake rice topped with karasumi · October 2026: Matsutake with soft-shelled turtle, carp sashimi, grilled eel, roast wagyu, bamboo-shoot rice; okoge and ochazuke at the end · sake such as Eiketsu and Shinsei (October 2026)',
    website: SITE, gmaps: gm('草喰なかひがし 銀閣寺'), menu_url: SITE,
    notes: "[Kaiseki · Ginkaku-ji, a forager's kitchen of wild plants and stove-cooked rice] At the foot of the approach to Ginkaku-ji, a counter of twelve and two upstairs tatami rooms where the course is whatever Hisao Nakahigashi found that morning in Ohara: shoots, leaves, flowers and seeds, in a hassun laid out like a hillside, soups and plainly grilled dishes. Born in Kyoto Prefecture in 1952 and raised at Miyamasou, the inn in Hanase known for tsumikusa (foraged-plant) cooking, the owner trained there, served as its head chef and opened here in 1997; the rice, cooked in an okudo-san wood stove and served with grilled dried sardines, became the main event after the 1993 rice shortage. The site reports a Michelin Green Star for its sustainable approach. Diners love the chef's jokes at the counter; book by phone from 8:00 on the 1st of the month before. Lunch from ¥12,100, dinner from ¥24,200 all in.",
    chef_bio: { chef_name: 'Hisao Nakahigashi (中東久雄)', roles: ['Owner and representative (official site: 代表 中東久雄; Tabelog: "owner of Kusakui Nakahigashi")'], origin: 'Kyoto Prefecture, born 1952; raised at Miyamasou in Hanase (Tabelog).',
      background: 'Per Tabelog\'s chef section: born in 1952 in Kyoto Prefecture and raised at Miyamasou, a traditional inn in Hanase known for tsumikusa cooking; after high school trained under its previous head, Kichiji Nakahigashi, the originator of tsumikusa cooking (a September 2026 review gives "Yoshitsugu Nakahigashi"); head chef at Miyamasou, then opened this restaurant in 1997 (a September 2026 review says 1996). In the 1993 rice shortage a clay rice pot from Ichishiro-gama in Hikone led to the house style with plain white rice as the main dish. Every morning the owner goes to Ohara to gather wild plants and seasonal produce (Tabelog; official site). The official site\'s message from 中東久雄 cites the motto "eat everything that can be eaten" and a Michelin Green Star for its sustainable approach; the site also carries a message from 中東克之, whose role is not stated. In October 2026 one diner visited on a day the head chef was away. Tabelog Award Gold 2020, Silver 2019, 2021–2023 and 2025, Bronze 2024 and 2026; Japanese cuisine WEST "Tabelog 100" 2021, 2023, 2025. Tabelog\'s English spells the name Kusajiki, Kusakui and Sojiki; the shop\'s own domain is soujiki-nakahigashi.jp.',
      philosophy: '"Eat everything that can be eaten": gratitude for every life the sun and water raise, and no waste, down to radish and carrot peel and roots (official site).', specialty: 'Foraged wild plants from Ohara; the hassun; okudo-san rice with grilled dried sardines.',
      anecdotes: [
        { text: '"As always, I was introduced to new ingredients, including a type of \'grass\' I had never heard of before." — September 2026; about three visits a year.', source: R + 'B535389356/' },
        { text: '"After 30 minutes of continuous calling, I finally got through and secured a lunch slot." — September 2026.', source: R + 'B535844494/' },
        { text: '"The rice was cooked in an okudo (traditional stove)! It was glossy and sweet." — October 2026, lunch.', source: R + 'B537741853/' },
      ],
      japanese_sources_summary: '公式サイト (soujiki-nakahigashi.jp): 草喰なかひがし、運営会社 有限会社草喰なかひがし、代表 中東久雄、左京区浄土寺石橋町32-3、入店時間12:00〜13:00・18:00〜19:00、定休日は月曜日・隔週火曜日 (要問合せ)・月の最終日、現金・各種クレジット、予約は毎月1日の午前8時から翌月分を電話で (日本語のみ、外国語は予約サイト)、お昼のコース12,100円〜・夜のコース24,200円〜 (税・サ込)、2026年4月1日から昼10,000円〜・夜20,000円〜 (税・サ別)、京都・大原の山々から採集した山菜や野菜、八寸、炭火で焼いた肴、お竃さんご飯とめざし、ご飯のおかわり自由、大将の軽快なトーク、2階の個室、「食べられるものはすべて食べ尽くす」、ミシュラングリーンスター、銀閣寺道バス停から徒歩3分。食べログ (店舗会員): The Tabelog Award Gold 2020 ほか、日本料理 WEST 百名店 2021・2023・2025、30席 (カウンター12、2階に座敷2室)、小学校高学年から、スマートカジュアル。口コミ(2026年9月〜10月): 松茸とすっぽん (日本語の写真説明)、ayu、鹿、karasumi をのせた Matsutake ご飯、めざしと漬物、電話予約がつながりにくい。',
      confidence: 'medium', sources: [TB, SITE, LUNCH, DINNER, STAFF, PRICE, R + 'B276022855/', R + 'B36547354/', R + 'B43362530/', R + 'B517462097/', R + 'B521659016/', R + 'B535389356/', R + 'B535625251/', R + 'B535844494/', R + 'B537455716/', R + 'B537741853/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Phone bookings are in Japanese only; the official site links a booking site for other languages. One set course; the chef talks with guests at the counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区浄土寺石橋町32-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and official site (notice dated March 2026); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.027605, 135.792723); cross-checked: GSI 京都府京都市左京区浄土寺石橋町32番地 (lot) 87m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE, PRICE, R + 'B535625251/'],
    price_note: 'Prices from the official site (tax and service included; read November 2026) and its notice of 10 March 2026 (from ¥10,000 / ¥20,000 before tax and service from 1 April 2026). Extras from 2026 reviews.', last_checked: TODAY, items: [
      it('お昼のコース', '', 'Lunch course (from)', '¥12,100', 'Course', 'ask', 'no', 'Official site, tax and service included.', 'lunch'),
      it('夜のコース', '', 'Dinner course (from)', '¥24,200', 'Course', 'ask', 'no', 'Official site, tax and service included.', 'dinner'),
      it('', '', 'Matsutake rice with karasumi, extra', '+¥4,000', 'Rice', 'ask', 'no', 'September 2026.', 'matsutake_rice'),
      it('', '', 'Okudo-san rice with grilled dried sardines and pickles (in course)', '', 'Course', 'ask', 'no', 'Official site.', 'okudo_rice'),
    ] }, {
    cuisine: '店主が毎朝 大原で採る山菜、花、野菜のコース: 野山の景色のような八寸、椀物、素朴な焼き物、最後はお竃さんで炊いたご飯と香ばしく炙っためざしと漬物、ご飯のおかわり自由 (公式サイト、食べログ)・昼12,100円〜、夜24,200円〜 (税・サ込、公式サイト)。2026年4月1日から昼10,000円〜、夜20,000円〜 (税・サ別、公式のお知らせ)・追加料金で Matsutake ご飯 +4,000円 (2026年9月) や tamago kake gohan (2026年10月) も・2026年9月の昼: 蓮の葉にのせた八寸、ayu と uruka、夏の鹿と秋野菜、karasumiをのせた Matsutake ご飯・2026年10月: 松茸とすっぽん、鯉のお造り、焼いた鰻、和牛のロースト、筍ご飯、最後に okoge と ochazuke・日本酒は Eiketsu、Shinsei など (2026年10月)',
    neighborhood: '左京区浄土寺、Ginkaku-ji への参道の入口。銀閣寺道バス停から徒歩3分、出町柳駅から車で10分',
    gf_detail: '予約時に要確認 (電話は日本語のみ、外国語は予約サイト)。グルテンの情報なし。野菜と山菜が主役だが、決まったコースには春の天ぷら (公式サイト) があり、醤油や味噌でも味付けする。',
    vegan_detail: 'ヴィーガンではありません。植物が主役のコースだが出汁を使い、炭火で焼いた肴、ご飯にはめざし、2026年は ayu、鯉、鰻、鹿、和牛も (公式サイト、2026年の口コミ)。',
    notes: '[懐石・銀閣寺、山菜とお竃さんご飯の草喰] Ginkaku-ji の参道の入口、12席のカウンターと2階の座敷2室。コースは中東久雄さんがその朝 大原で見つけたもの次第: 芽、葉、花、実を、野山のような八寸、椀物、素朴な焼き物に。1952年京都府生まれ、tsumikusa 料理で知られる Hanase の宿 Miyamasou で育ち、そこで修業して料理長を務め、1997年にここを開いた。お竃さんで炊くご飯と炙っためざしは、1993年の米不足をきっかけにコースの主役になった。公式サイトによればミシュラングリーンスターを受賞。カウンターでの大将の軽快なトークも人気。予約は前月1日の朝8時から電話で。昼12,100円〜、夜24,200円〜 (税・サ込)。',
  });
}

// ================================================================ IL GARAGE
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26031986/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.ilgaragekyoto.com'; const MENU = SITE + '/menu'; const ABOUT = SITE + '/about';
  const L = day(['12:00', '14:30'], ['18:00', '21:00']); const D = day(['18:00', '21:00']);
  put({
    id: 'kyoto_il_garage_sakaimachi', name: 'IL GARAGE (イル ガラージュ)', category: 'MOM_AND_POP',
    lat: 35.007819, lng: 135.763192, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking: the shop asks for allergies in advance and may not manage changes on the day (official site; Tabelog). No gluten information; handmade pasta such as bigoli is a house specialty, and bread and cannoli are part of the course (Tabelog; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: one seasonal course with fish, duck, beef and, in autumn and winter, game; apart from allergies the shop does not change ingredients for dislikes (official site; Tabelog).',
    hours_raw: 'Lunch from 12:00 on Saturday and Sunday; dinner from 18:00; closed Wednesday and occasionally (Tabelog). The lunch course takes about 2.5 hours and dinner about 3 (Tabelog). Reservation only, by the day before, for just two groups per sitting; five or more take the whole room (Tabelog). 8 seats at two round tables (Tabelog). No children (Tabelog). Up a flight of stairs, no lift (Tabelog). Please keep phones out of the way during the meal (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR; service charge 10% (Tabelog; official site). Opened 17 December 2018 (Tabelog).',
    hours: { 0: D, 1: D, 3: D, 4: D, 5: L, 6: L }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sakaimachi-dori below Sanjo, on the second floor above a garage — 7 min from Karasuma Oike Stn, 9 min from Karasuma/Shijo Stn',
    cuisine: 'A seasonal course of Italian regional cooking with "a pinch of creativity", built on Japanese produce (official site; Tabelog) · lunch course ¥13,200 plus service (February 2026); diners report about ¥16,000 at lunch and ¥20,000–39,999 at dinner (2026 reviews) · bigoli, the thick Veneto pasta, made fresh every morning; Sicilian cannoli filled with sweet shrimp, home-made karasumi and sudachi purée as a starter (Tabelog) · February 2026 lunch: home-made ham with strawberries; Wakayama squid with puntarelle; Mie flounder with celeriac; Ibaraki whitebait pasta with cima di rapa; Nanatani duck with tartiflette; charcoal-grilled Kumamoto red beef; butterbur-bud ice cream; bonet · July 2026: cod with bottarga, beef prosciutto on Pione grapes, horse mackerel · game in autumn and winter (Tabelog) · an extensive wine list, with drinks recommended by Midori (July 2026)',
    website: SITE, gmaps: gm('IL GARAGE 京都 道祐町'), menu_url: MENU,
    notes: "[Italian · Sakaimachi-Sanjo, a couple's two-table dining room above a garage] Up the stairs over a garage on Sakaimachi-dori, two round tables and one sitting at lunch and at dinner, run by Masato and Midori Shirakawa, who met at a Kyoto Italian restaurant, married and spent 2009–2014 cooking and serving in Italy at Locanda San Lorenzo (Belluno), La Torre del Saracino (Naples) and La Madia (Agrigento). Masato cooks; Midori makes the desserts and runs the room and the wine. The course follows the season with Italian regional dishes and a light creative touch: bigoli rolled each morning, sweet-shrimp cannoli, duck, charcoal-grilled beef, game in winter. Tabelog likens it to being invited into the Shirakawas' home. Tabelog Bronze 2025 and 2026, Italian WEST 100. Book by the day before; closed Wednesdays.",
    chef_bio: { chef_name: 'Masato Shirakawa; Midori Shirakawa (official site: "Masato e Midori Shirakawa")', roles: ['Masato: chef (Tabelog: "Masato handles the cooking")', 'Midori: desserts and service (Tabelog: "Midori takes care of desserts and service")'], origin: null,
      background: 'Per Tabelog\'s chef section: Masato met Midori, who handled service at the Kyoto Italian restaurant where Masato was training; the two married and went to Italy together to learn regional cooking in Veneto, Naples and Sicily, then opened in 2018 after five years in Italy. The official site lists 2009–2014 at Locanda San Lorenzo (one star, Belluno), La Torre del Saracino (two stars, Naples) and La Madia (two stars, Agrigento). The chef was drawn in Italy to modern cooking rooted in tradition (Tabelog). Reviewers in 2026 note the husband cooks every dish and the wife recommends drinks (July). The owners want a relaxed room rather than a tense one (Tabelog). Tabelog Award Bronze 2025, 2026; Italian WEST "Tabelog 100" 2023, 2025.',
      philosophy: '"Semplice, ma con un pizzico di fantasia": Italian regional cooking with a pinch of creativity, and the Italy the couple lived in for five years (official site).', specialty: 'Bigoli made each morning; sweet-shrimp cannoli; seasonal Italian courses.',
      anecdotes: [
        { text: '"The chef, who is the husband, prepares all the dishes himself, while his wife provides detailed recommendations for drinks in the dining area." — July 2026, lunch.', source: R + 'B532464098/' },
        { text: '"True to its name, it\'s located above a garage." — August 2026, dinner booked two days ahead.', source: R + 'B534262064/' },
        { text: '"The lunch course is priced at JPY 13,200 (service charge not included)." — February 2026.', source: R + 'B522300110/' },
      ],
      japanese_sources_summary: '公式サイト (ilgaragekyoto.com): IL GARAGE -イル ガラージュ-、ガレージの二階、テーブル2卓だけのレストラン、日本の旬の食材を季節を感じるコース仕立てに、イタリア地方料理とひと摘みの創造性、夫婦で5年を過ごしたイタリアを表現したい、Masato e Midori Shirakawa、2009〜2014 Locanda San Lorenzo* (Belluno)、La Torre del Saracino** (Napoli)、La Madia** (Agrigento)、アレルギーは事前に、当日の変更は対応しかねる場合がある、秋冬はジビエ、苦手な食材には基本的に対応できない、サービス料10%、道祐町147 2F。食べログ (店舗会員): The Tabelog Award Bronze 2025・2026、イタリアン WEST 百名店 2023・2025、昼は土日12:00〜、夜18:00〜、水曜と不定休、昼夜2組限定、前日までに予約、8席 (2卓)、子ども不可、エレベーターなし、2018年12月17日オープン。口コミ(2026年1月〜10月): ピオーネの上に牛の生ハム (日本語の写真説明)、夫が料理、妻がサービスとデザート、ランチ13,200円 (サービス料別)。',
      confidence: 'medium', sources: [TB, SITE, MENU, ABOUT, R + 'B521758735/', R + 'B522300110/', R + 'B525336877/', R + 'B525366358/', R + 'B526584704/', R + 'B532464098/', R + 'B532746137/', R + 'B534262064/', R + 'B534797486/', R + 'B537841569/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One set course; book by the day before; plate messages can be written in Italian (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区道祐町147 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and official site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.007819, 135.763192); cross-checked: GSI 京都府京都市中京区道祐町147番地 (lot) 19m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B522300110/', R + 'B521758735/'],
    price_note: 'No prices on the official site; lunch price from a February 2026 review (service extra). Course contents change with the season.', last_checked: TODAY, items: [
      it('', '', 'Lunch course (Saturday and Sunday)', '¥13,200', 'Course', 'ask', 'no', 'February 2026; +10% service.', 'lunch'),
      it('', '', 'Dinner course', '', 'Course', 'ask', 'no', 'Diners report ¥20,000–39,999 (2026).', 'dinner'),
      it('', '', 'Bigoli, handmade each morning (in course)', '', 'Course', 'no', 'ask', 'Tabelog.', 'bigoli'),
    ] }, {
    cuisine: '日本の旬の食材で組み立てる、イタリア地方料理に「ひと摘みの創造性」を加えた季節のコース (公式サイト、食べログ)・ランチコース13,200円にサービス料 (2026年2月)。口コミでは昼約16,000円、夜20,000〜39,999円 (2026年)・毎朝打つ Veneto の太いパスタ bigoli、甘海老と自家製 karasumi とすだちのピュレを詰めた Sicily のカンノーリの前菜 (食べログ)・2026年2月の昼: 自家製ハムと苺、Wakayama の烏賊とプンタレッラ、Mie の鮃とセロリラブ、Ibaraki の shira-uo とチーマ・ディ・ラーパのパスタ、Nanatani の鴨とタルティフレット、Kumamoto の赤牛の炭火焼き、fuki no to のアイス、ボネ・2026年7月: 鱈とボッタルガ、ピオーネの上に牛の生ハム、鯵・秋冬はジビエ (食べログ)・充実したワイン、飲み物は Midori さんが案内 (2026年7月)',
    neighborhood: '道祐町147 2F、ガレージの2階。地下鉄烏丸御池駅から徒歩7分、烏丸駅・四条駅から徒歩9分',
    gf_detail: '予約時に要確認。アレルギーは事前に伝え、当日の変更は対応しかねる場合がある (公式サイト、食べログ)。グルテンの情報なし。手打ちパスタ bigoli が名物で、パンやカンノーリもコースに入る (食べログ、2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではありません。魚、鴨、牛、秋冬はジビエも使う季節のコース1つで、アレルギー以外の苦手な食材には基本的に対応できない (公式サイト、食べログ)。',
    notes: '[イタリアン・Sakaimachi 三条、夫婦が営むガレージの2階の2卓だけの店] Sakaimachi-dori のガレージの階段を上がると、丸テーブル2卓、昼も夜も2組だけ。営むのは Masato さんと Midori さんの Shirakawa 夫妻で、京都のイタリア料理店で出会って結婚し、2009〜2014年にイタリアの Locanda San Lorenzo (Belluno)、La Torre del Saracino (Napoli)、La Madia (Agrigento) で働いた。Masato さんが料理、Midori さんがデザートとサービスとワインを担当。コースは季節に沿ったイタリアの地方料理に少しの創造性: 毎朝打つ bigoli、甘海老のカンノーリ、鴨、炭火の牛、冬はジビエ。食べログは夫妻の家に招かれたようだと紹介している。The Tabelog Award Bronze 2025・2026、イタリアン WEST 百名店。予約は前日まで、水曜休み。',
  });
}

// ================================================================ エル・テソロ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26004165/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://eltesoro.jp/';
  const H = day(['16:00', '01:00']);
  put({
    id: 'kyoto_el_tesoro_gion', name: 'El Tesoro (エル・テソロ)', category: 'OMNI',
    lat: 35.006092, lng: 135.772531, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A cocktail and whisky bar; spirits and fresh-fruit cocktails are the likelier choices. The home-made cakes (Basque cheesecake, chocolate and cinnamon cakes) are not described either way.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Fresh-fruit cocktails and spirits may suit; cheesecake and other cakes likely contain dairy and egg.',
    hours_raw: '16:00–1:00 (last entry 0:00, last order 0:30); closing days irregular, posted monthly — in November 2026 the 1st, 4th, 11th, 18th and 25th (official site); Tabelog lists Wednesdays closed. Reservations for 16:00–18:00, and after 18:00 up to 30 minutes before arriving; seats are limited, so call ahead (official site). Table charge ¥1,000 per person (Tabelog). A designated smoking bar (喫煙目的店, official site). 12 seats: 8 at the counter, a table for 4 that can be a private room (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) and QR payments; no e-money (Tabelog). Opened 22 November 2006 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Yamato-oji below Sanjo, Yamato Bldg 1F, near Shinbashi in Gion — 4 min from Gion-Shijo Stn, 5 min from Sanjo Stn',
    cuisine: 'A cocktail and whisky bar: original cocktails made to your taste, with seasonal fresh-fruit cocktails the draw (official site; 2026 reviews) · examples: passion fruit, grape, watermelon with a salt rim, espresso martini, martini with large olives, Tanqueray gimlet, sidecar, screwdriver, a "Sky Ball" in a mug (July–October 2026) · whiskies including vintage bottles and Ardbeg An Oa (August, October 2026) · home-made cakes with the drinks: Basque cheesecake, chocolate cake, cinnamon cake, a dessert with a coffee cocktail (July–August 2026) · table charge ¥1,000; diners spend about ¥3,000–9,999 (2026 reviews)',
    website: SITE, gmaps: gm('El Tesoro エル・テソロ 祇園'), menu_url: null,
    notes: "[Bar · Gion-Shinbashi, fruit cocktails and cake in a smoking bar] A polished counter of eight and soft jazz on the ground floor of the Yamato Building, a few minutes from Gion-Shijo station. The name is Spanish for treasure. The master, who a July 2026 reviewer says holds sommelier, sake and cheese qualifications, builds cocktails around whatever fruit is in season and will make one to your taste; diners pair them with home-made cakes or a vintage whisky. Diners in 2026 call the master kind and easy to talk to, which makes it a good first authentic bar. It is a designated smoking bar. One August 2026 diner heard that the bar does not take inbound tourists. ¥1,000 table charge; open to 1:00, irregular closing days posted monthly.",
    chef_bio: { chef_name: null, roles: ['Owner-bartender (unnamed; "the master" in 2026 reviews)'], origin: null,
      background: 'Opened 22 November 2006 (Tabelog). The name means "treasure" in Spanish (official site). A July 2026 reviewer writes that the owner holds sommelier, sake diploma and cheese professional qualifications and is known for fruit cocktails; an August 2026 diner noticed the bar\'s care with fresh fruit (a fruit and vegetable wash, a food-preservation spray behind the counter). Diners in 2026 describe the master as kind, modest and good at suggesting drinks. Selected for Tabelog Bar "Tabelog 100" 2022.',
      philosophy: '"Colour in everyday life; one glass of magic to take you out of it" — a place to drink casually, alone or with someone dear (official site).', specialty: 'Seasonal fresh-fruit cocktails; home-made cakes.',
      anecdotes: [
        { text: '"I heard that they do not accept inbound tourists, which is quite rare in the Gion area where many tourists gather." — August 2026, a coffee cocktail with dessert.', source: R + 'B534776753/' },
        { text: '"The combination of sweets and vintage whiskey is simply unbeatable." — October 2026.', source: R + 'B507708470/' },
        { text: '"My companion had a watermelon cocktail, which was presented in a snow style." — August 2026, with cinnamon cake.', source: R + 'B534718314/' },
      ],
      japanese_sources_summary: '公式サイト (eltesoro.jp): El tesoro (エル・テソロ)、京都祇園の BAR、エル・テソロはスペイン語で「宝物」、日常に彩りを、一杯の魔法で非日常へ、16:00〜翌1:00 (最終入店0:00、ラストオーダー0:30)、予約可能時間16:00〜18:00 (18:00以降は来店の30分前まで)、喫煙目的店、席に限りがあるので来店前に電話を、不定休 (11月の店休日は1、4、11、18、25日)、オリジナルのカクテルも含めて希望を伝えて、東山区大和大路通三条下ル三丁目弁財天町19番地 大和ビル一階 E号室、祇園四条駅から徒歩4分、三条駅から徒歩5分。食べログ: バー 百名店 2022、チャージ1,000円、12席 (カウンター8、テーブル4)、カード・QR可、2006年11月22日オープン。口コミ(2026年7月〜10月): 季節のフルーツのカクテル、手作りのケーキ、ウイスキー、マスターが親切、インバウンドの客は受けていないと聞いたという人も。',
      confidence: 'medium', sources: [TB, SITE, R + 'B507708470/', R + 'B515617113/', R + 'B531166892/', R + 'B531565833/', R + 'B532112764/', R + 'B533583019/', R + 'B534718314/', R + 'B534776753/', R + 'B535848055/', R + 'B537587260/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order by telling the bartender what you like; an August 2026 diner heard the bar does not take inbound tourists, so call ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区大和大路通三条下ル三丁目弁財天町19番地 大和ビル一階 E号室',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (November 2026 closing days posted) and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.006092, 135.772531); cross-checked: GSI 京都府京都市東山区弁財天町19番地 (lot; the official site\'s address, Tabelog gives 大和大路新橋上がる西側 大和ビル 1F) 21m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, SITE],
    price_note: 'No drinks menu or prices published; the table charge is from Tabelog.', last_checked: TODAY, items: [
      it('チャージ', '', 'Table charge, per person', '¥1,000', 'Charge', '', '', 'Tabelog.', 'charge'),
      it('', '', 'Seasonal fresh-fruit cocktail', '', 'Cocktails', 'ask', 'ask', 'July–October 2026.', 'fruit_cocktail'),
      it('', '', 'Home-made cake', '', 'Cakes', 'ask', 'ask', 'July–August 2026.', 'cake'),
    ] }, {
    cuisine: 'カクテルとウイスキーのバー。好みに合わせたオリジナルのカクテル、看板は季節のフルーツのカクテル (公式サイト、2026年の口コミ)・例: パッションフルーツ、ぶどう、塩をつけたスイカ、エスプレッソ・マティーニ、大きなオリーブのマティーニ、Tanqueray のギムレット、サイドカー、スクリュードライバー、マグの「Sky Ball」(2026年7月〜10月)・ヴィンテージのウイスキーや Ardbeg An Oa も (2026年8月、10月)・お酒と一緒に手作りのケーキ: バスクチーズケーキ、チョコレートケーキ、シナモンケーキ、コーヒーのカクテルに添えたデザート (2026年7〜8月)・チャージ1,000円、予算は約3,000〜9,999円 (2026年の口コミ)',
    neighborhood: '大和大路通三条下ル、大和ビル一階、祇園の新橋の近く。祇園四条駅から徒歩4分、三条駅から徒歩5分',
    gf_detail: '要確認。カクテルとウイスキーのバーで、蒸留酒や生のフルーツのカクテルのほうが選びやすい。手作りのケーキ (バスクチーズケーキ、チョコレート、シナモンのケーキ) については説明がない。',
    vegan_detail: '要確認。生のフルーツのカクテルや蒸留酒は合うかもしれない。チーズケーキなどのケーキには乳製品や卵が入っていそう。',
    notes: '[バー・祇園新橋、喫煙できるバーでフルーツのカクテルとケーキ] 祇園四条駅から数分、大和ビルの1階、磨かれた8席のカウンターと静かなジャズ。店名はスペイン語で「宝物」。2026年7月の口コミによればソムリエ、日本酒、チーズの資格を持つマスターが、季節のフルーツでカクテルを作り、好みに合わせて一杯を仕立ててくれる。手作りのケーキやヴィンテージのウイスキーと合わせる人も。2026年の口コミではマスターが親切で話しやすく、初めての本格的なバーにもいいという声。喫煙目的店。2026年8月にはインバウンドの客は受けていないと聞いたという人もいる。チャージ1,000円、翌1時まで、店休日は毎月告知。',
  });
}

// ================================================================ 山元麺蔵
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26002504/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://yamamotomenzou.com/'; const TOP = SITE + 'top.php'; const MENU = SITE + 'menu.html'; const ABOUT = SITE + 'about.html';
  const MSG = SITE + 'message.html'; const CO = SITE + 'company.html';
  const BLOG = 'http://yamamotomenzou.blog.shinobi.jp/%E6%9C%AA%E9%81%B8%E6%8A%9E/%E4%BE%A1%E6%A0%BC%E6%94%B9%E5%AE%9A%E3%81%AE%E3%81%8A%E7%9F%A5%E3%82%89%E3%81%9B..%E3%80%82';
  const W = day(['10:00', '16:00']); const WE = day(['10:00', '15:30']); const S = day(['10:00', '17:00']);
  put({
    id: 'kyoto_yamamoto_menzou_okazaki', name: '山元麺蔵 (Yamamoto Menzou)', category: 'OMNI',
    lat: 35.014274, lng: 135.784816, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat udon is the whole menu, and the signature toppings are tempura (burdock, chicken, vegetables).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the broth is a natural dashi made with bonito (official site), and most bowls carry beef, pork, chicken or egg.',
    hours_raw: 'Mon, Tue, Fri 10:00–16:00 (last order); Wed 10:00–15:30 (last order); Sat, Sun and holidays 10:00–17:00 (last order); closed Thursday and irregularly, posted monthly on Instagram; closes early when the noodles run out (official site; Tabelog lists 11:00 opening and the 4th Wednesday closed). Reservations: by phone on the day from 9:00 (to 11:00) for the 11:00–13:45 slots; online through TableCheck from midnight three days ahead for 9:45–10:45 and 14:00–16:30 (to 17:00 at weekends), with a credit card for the cancellation policy (official site). At your time you queue outside, order, and are seated as seats free (official site); expect 20–30 minutes (Tabelog). Cash only in the shop (official site). 18 seats: 10 at the counter, two tables for 4 (official site). Children welcome, with kids\' bowls and forks (Tabelog). Three parking spaces (Tabelog). Takeout from a separate counter (official site; October 2026). Prices rose on 9 October 2026 (shop blog). Opened 27 August 2006 (Tabelog).',
    hours: { 0: W, 1: W, 2: WE, 4: W, 5: S, 6: S }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Okazaki, near the zoo — 2 min from the Okazaki-koen Dobutsuen-mae bus stop, 11 min from Higashiyama Stn exit 1',
    cuisine: 'Freshly made, freshly boiled udon with a natural bonito dashi (official site) · hot udon: the spicy "Red Menzou Special" with burdock tempura, fried mochi and egg; beef and shaved burdock; pork; Kyoto curry udon; chicken tenderloin tempura; burdock tempura; vegetable tempura; spicy meat-miso; kitsune, ankake, tamago-toji and more · "aromatic oil" versions with garlic, ginger and leek oil · tsukemen with a hot dipping broth (beef and burdock, beef offal, curry, pork); cold zaru udon · small tempura rice bowls with egg yolk; almond tofu; bottled beer (official menu) · toriten miso udon ¥1,700 (October 2026); diners spend ¥1,000–2,999 · the signature is the crisp burdock tempura, and the noodles are so long that scissors come with them; a mini almond tofu often comes free (October 2026)',
    website: SITE, gmaps: gm('山元麺蔵 岡崎'), menu_url: MENU,
    notes: "[Udon · Okazaki, the queue-famous udon near the zoo] A small udon house in Okazaki, on land where the founder's grandmother ran an udon shop some fifty years earlier. The noodles are freshly cut and boiled, long, glossy and seriously chewy, in a dashi taken from bonito; the burdock tempura is the order everyone mentions, with chicken-tenderloin tempura close behind, and there is a spicy curry udon and cold tsukemen. Once known for long lines, it now runs on reservations: phone on the day from 9:00 or book online three days ahead, then queue briefly at your slot. Diners in 2026 single out the warm, attentive service from the owner and staff. Cash only; closed Thursdays.",
    chef_bio: { chef_name: null, roles: ['Run by 株式会社山元麺蔵; the person responsible named on the company page is 山元克之 (official site); reviewers mention "the owner" and "the manager" greeting tables (October–November 2026)'], origin: null,
      background: 'The founder\'s message on the official site (first person, unsigned) says the idea came when the company club team the founder belonged to stopped its activities; the founder\'s grandmother had run an udon shop on this land about fifty years earlier and raised seven children from it; the shop aims at freshly made udon, natural bonito dashi, good rice, fresh ingredients and smiles. The company page names 山元克之 as the person responsible (no romaji given). Opened 27 August 2006 (Tabelog). The shop blog (8 October 2026) announced a price rise from 9 October, citing oil, burdock, radish, chicken, bonito, packaging and wages. Tabelog Udon "Tabelog 100" 2017–2019 and Udon WEST 2020, 2022, 2024.',
      philosophy: 'Freshly made udon, natural bonito dashi, warm rice, fresh ingredients, and smiles, greetings and thanks in the room — the things that make a meal like home (official site).', specialty: 'Burdock tempura udon; chicken-tenderloin tempura; Kyoto curry udon.',
      anecdotes: [
        { text: '"While waiting in line, they kindly offered me an umbrella to shield me from the heat and served me tea." — November 2026, a second visit.', source: R + 'B538453432/' },
        { text: '"The udon noodles were incredibly long, and they provided a cutter for them." — October 2026, cold beef-and-burdock tsukemen.', source: R + 'B537325616/' },
        { text: '"The clientele was mostly foreign tourists, particularly from Korea." — October 2026, curry udon.', source: R + 'B537617864/' },
      ],
      japanese_sources_summary: '公式サイト (yamamotomenzou.com): 山元麺蔵、月・火・金 10:00〜16:00 (L.O.)、水 10:00〜15:30 (L.O.)、土・日・祝 10:00〜17:00 (L.O.)、木曜定休と不定休 (インスタグラムで毎月告知)、麺がなくなり次第終了、電話予約は当日朝9:00〜11:00 (11時〜13時45分の枠)、オンラインは3日前の午前0時から (午前9時45分〜10時45分、午後14時〜16時30分、土日祝17時)、予約時にクレジットカード必須、店でのお会計は現金のみ、予約の時間に店の前に並んで注文、席が空き次第案内、カウンター10席と4人掛けテーブル2卓、岡崎南御所町34、運営は株式会社山元麺蔵 (責任者 山元克之)、お品書き: 赤い麺蔵スペシャル、牛と土ゴボウのおうどん、京カレーうどん、鶏ささみ天うどん、土ゴボウ天うどん、香味油のうどん、つけ麺、ざるうどん、杏仁豆腐など、「想い」: ばあちゃんがうどん屋を営んでいた土地、打ちたて茹でたてのうどん、鰹でしっかりとった天然だし。店のブログ (2026年10月8日): 10月9日から価格改定。食べログ: うどん 百名店 2017〜2019、うどん WEST 百名店 2020・2022・2024、子ども可、駐車場3台、2006年8月27日オープン。口コミ(2026年10月〜11月): ゴボウ天、鶏ささみ天、長い麺にハサミ、杏仁豆腐のサービス、温かい接客、海外の客も多い。',
      confidence: 'medium', sources: [TB, SITE, TOP, MENU, ABOUT, MSG, CO, BLOG, R + 'B535862077/', R + 'B537296054/', R + 'B537306227/', R + 'B537325616/', R + 'B537361280/', R + 'B537443047/', R + 'B537617864/', R + 'B537994938/', R + 'B538442059/', R + 'B538453432/'] },
    cultural_comfort: { level: 'english', note: 'The official menu has English, Korean and Chinese versions; many overseas diners (October 2026); reservations by phone or TableCheck.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区岡崎南御所町34',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing, official site and shop blog (October 2026); reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.014274, 135.784816); cross-checked: GSI 京都府京都市左京区岡崎南御所町34番地 (lot) 51m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [MENU, R + 'B537443047/'],
    price_note: 'Dish names from the official menu (prices not shown as text; read November 2026); one price from an October 2026 review (whether before or after the 9 October rise is not stated).', last_checked: TODAY, items: [
      it('土ゴボウ天うどん', '', 'Burdock tempura udon', '', 'Hot udon', 'no', 'no', 'Official menu; the signature.', 'gobo_ten'),
      it('鶏ささみ天うどん', '', 'Chicken tenderloin tempura udon', '', 'Hot udon', 'no', 'no', 'Official menu.', 'sasami_ten'),
      it('京カレーうどん', '', 'Kyoto curry udon (spicy, adjustable)', '', 'Hot udon', 'no', 'no', 'Official menu.', 'curry_udon'),
      it('赤い麺蔵スペシャル', '', 'Red Menzou Special: spicy udon with burdock tempura, fried mochi and egg', '', 'Hot udon', 'no', 'no', 'Official menu.', 'red_special'),
      it('', '', 'Toriten miso udon', '¥1,700', 'Hot udon', 'no', 'no', 'October 2026.', 'toriten_miso'),
      it('ざるうどん', '', 'Cold zaru udon', '', 'Zaru udon', 'no', 'no', 'Official menu.', 'zaru'),
    ] }, {
    cuisine: '打ちたて茹でたてのうどんと、鰹でしっかりとった天然だし (公式サイト)・温かいおうどん: 旨辛い「赤い麺蔵スペシャル」(ゴボウ天、揚げ餅、玉子)、牛と土ゴボウ、豚、京カレーうどん、鶏ささみ天、土ゴボウ天、野菜天、肉味噌、きつね、あんかけ、玉子とじなど・ニンニク、生姜、葱を炒めた自家製香味油のうどん・温かいつけ汁のつけ麺 (牛と土ゴボウ、牛のホルモン、京カレー、豚肉)、冷たいざるうどん・ちょっと小さな天丼 (卵黄入り)、杏仁豆腐、瓶ビール (公式のお品書き)・Toriten miso udon 1,700円 (2026年10月)、予算は1,000〜2,999円・名物はカリッとした土ゴボウ天。麺がとても長くハサミが添えられる。小さな杏仁豆腐のサービスも (2026年10月)',
    neighborhood: '岡崎、動物園の近く。市バス「動物園前」から徒歩2分、地下鉄東山駅1番出口から徒歩11分',
    gf_detail: 'グルテンフリーではありません。メニューはすべて小麦のうどんで、名物のトッピングは天ぷら (ゴボウ、鶏、野菜)。',
    vegan_detail: 'ヴィーガンではありません。出汁は鰹でとった天然だし (公式サイト) で、ほとんどのうどんに牛、豚、鶏、卵がのる。',
    notes: '[うどん・岡崎、動物園近くの行列のうどん] 岡崎のうどん屋。公式サイトによれば、50年ほど前に創業者のばあちゃんがうどん屋を営んでいた土地。打ちたて茹でたての長く艶のあるコシの強い麺に、鰹でとった出汁。誰もが頼むのはカリッとした土ゴボウ天で、鶏ささみ天も人気、辛めの京カレーうどんや冷たいつけ麺も。かつては長い行列で知られたが、今は予約制: 当日朝9時から電話、またはオンラインで3日前から予約し、時間になったら少し並ぶ。2026年の口コミでは店主とスタッフの温かく細やかな接客が評判。現金のみ、木曜休み。',
  });
}

save();
