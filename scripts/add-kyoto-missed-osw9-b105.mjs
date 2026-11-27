// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 105.
// Core and notable have nothing left in the lane; rest list, nearest-first (queue.mjs ... next rest 2000):
//   + 忠僕茶屋 (tea house in the grounds of Kiyomizu-dera: kakigori, warabi mochi, dango, soba; cash only)
//   + 間 (Kan) (à la carte kappo by a solo chef near Jingu-Marutamachi, opened 3 February 2024; in the Michelin Guide)
//   - Bar Mattari — no reviews on Tabelog
//   + 酒破離 (Shuhari) (one-person izakaya with steak and seafood rice bowls at lunch, Inokuma-Bukkoji; moved here May 2022)
//   + CAFE KUTSUROGI (third-floor café near Heian Shrine, house scones and chiffon cakes, opened 6 April 2025)
//   Brand checks: data/kyoto.json grepped for the five Tabelog ids, 忠僕, Chuboku, 俵屋町430, 酒破離, KUTSUROGI, 徳成町26 — no records.
//   Pending osw* scripts name none of these ids. Pins: Tabelog /en/ geo; not OSM-checked by the worker.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-26';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-105');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26040707', 'Bar Mattari: no reviews on Tabelog (listing read 2026-11-26, 0 reviews; opened 2023-12-30 per Tabelog); too thin to verify');

// ================================================================ 忠僕茶屋 (Kiyomizu-dera tea house)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26001281/'; const R = TB + 'dtlrvwlst/';
  const MAPPLE = 'https://www.mapple.net/region/a0502010201_g03040000/spot/';
  const H = day(['09:30', '15:45']);
  put({
    id: 'kyoto_chuboku_chaya_tb26001281_kiyomizudera', name: '忠僕茶屋', category: 'OMNI',
    lat: 34.99470953788364, lng: 135.78356485024182, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Soba and udon in a sweet soy broth, chadango, warabi mochi and kakigori with syrups, matcha, azuki and condensed milk (2024–2026 reviews); no gluten or allergy information on Tabelog.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The soba comes in a soy-sauce broth and as tsukimi soba with egg (December 2025); milk kakigori uses condensed milk (November 2024). Plain strawberry or matcha kakigori, warabi mochi with kinako and hiyashiame (a chilled ginger syrup drink) may have no animal products, but no ingredients are listed (2024–2026 reviews).',
    hours_raw: 'Daily 9:30–15:45 (Tabelog); 9:30–16:00 (Mapple travel guide). Hours may change. No reservations (Tabelog). Cash only: no cards, e-money or QR payments (Tabelog). Non-smoking; no parking (Tabelog). Inside the grounds of Kiyomizu-dera, about 1,370 m from Kiyomizu-Gojo Stn (Tabelog); a December 2025 reviewer placed it just below the temple\'s stage. Seating: one November 2024 reviewer found tables only; an August 2026 reviewer sat on a raised area with red felt, patterned cushions and small low tables.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Inside the grounds of Kiyomizu-dera, Higashiyama — 1,370 m from Kiyomizu-Gojo Stn',
    cuisine: 'A temple tea house of kakigori, Japanese sweets and noodles. Seen in reviews: kakigori (August 2023), with a fluffy, smooth shave and a green tea milk version (September 2024); Uji kintoki milk kakigori with azuki and condensed milk ¥1,000, warabi mochi with kinako ¥600, chadango ¥600 and hiyashiame (chilled ginger syrup) ¥600 (November 2024; warabi mochi ¥600 also in the Mapple guide); zaru soba (July 2024, June 2026) with a cider (June 2026); tsukimi soba and kitsune soba in a sweet soy broth, with udon and sweets also on the menu (December 2025); dango, warabi mochi, edamame and beer (August 2025); strawberry and Uji matcha kakigori (August 2026); strawberry and strawberry milk kakigori, four for over ¥3,000 (September 2026); matcha kakigori with red beans (October 2026). Reviewers paid under ¥1,000 to ¥2,000 a head (2023–2026).',
    website: null, gmaps: gm('忠僕茶屋 清水寺'), menu_url: TB + 'dtlmenu/',
    notes: '[Tea house · Kiyomizu-dera] A wooden tea house inside the grounds of Kiyomizu-dera, in business since 1862 by one reviewer\'s account: fluffy kakigori in strawberry, matcha and Uji kintoki milk, warabi mochi, chadango and chilled ginger hiyashiame for about ¥600–1,000, plus zaru, kitsune and tsukimi soba. A rest stop after the temple climb. 9:30–15:45 daily; cash only.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'A tea house that has run within the grounds of Kiyomizu-dera for over 150 years (Mapple guide: 「清水寺境内で営む創業150年以上の茶屋。」); a November 2024 reviewer gives 1862, and photographed a sign on the shop\'s origin. A June 2026 reviewer read the shop\'s history printed under the table and learned that the first owner was connected with a figure of the Meiji Restoration. The building is wooden and feels historic, with a noren bearing the shop name, old Kiyomizu-dera calendars and colourful kakigori menus on the walls (August 2026 review). Staff spoke English (September 2024 review) and were kind, even helping a visitor find a taxi (October 2026 review).',
      philosophy: null,
      specialty: 'Kakigori; warabi mochi; chadango; zaru soba.',
      anecdotes: [
        { text: 'An August 2023 visitor, melting in the heat, found the tea house in front had just closed and only just got into this one for a kakigori.', source: R + 'B469404533/' },
        { text: 'In early October 2024 a walker passed several full tea houses on the temple grounds before finding a free table here.', source: R + 'B493602038/' },
        { text: 'A September 2024 visitor who came up the back way to Kiyomizu-dera on a hot day ordered the shaved ice and was won over by the green tea milk version.', source: R + 'B491689890/' },
        { text: 'A diner in a suit on errands in October 2026 finished a matcha kakigori with red beans in no time, and the staff helped find a taxi afterwards.', source: R + 'B538275447/' },
      ],
      japanese_sources_summary: 'まっぷる (Mapple): 忠僕茶屋、清水寺境内で営む創業150年以上の茶屋、京都府京都市東山区清水1丁目 清水寺境内、9:30〜16:00、わらび餅600円。食べログ: 甘味処・そば・かき氷、清水1丁目 清水寺境内、毎日9:30〜15:45、予約不可、カード・電子マネー・QR不可、禁煙、駐車場なし、清水五条駅から1,370m。口コミ (2023〜2026年、英語): 1862年から営業 (2024年11月)、宇治金時ミルク1,000円、わらび餅600円、茶だんご600円、冷やしあめ600円 (2024年11月)、ざるそば (2024年7月、2026年6月)、月見そばときつねそば (2025年12月)、いちごと宇治抹茶のかき氷 (2026年8月)、英語を話すスタッフ (2024年9月)。',
      confidence: 'medium', sources: [TB, MAPPLE, R + 'B469404533/', R + 'B489626547/', R + 'B491689890/', R + 'B493602038/', R + 'B495920892/', R + 'B511625664/', R + 'B518204931/', R + 'B530082694/', R + 'B533878674/', R + 'B534086674/', R + 'B535034764/', R + 'B538275447/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A casual temple tea house used by many visitors; a September 2024 reviewer noted staff who spoke English. Phone service may be Japanese only (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区清水1丁目 清水寺境内',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated June, August, September and October 2026; Mapple travel guide entry.' },
    pin_source: `Tabelog ${TB} (34.994710, 135.783565); nearest record kyoto_teahouse_tb26014037_kiyomizudera (六花亭, also in the temple grounds) about 58 m away; kyoto_takinoie_kiyomizudera about 155 m; not OSM-checked by the worker; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B495920892/', MAPPLE],
    price_note: 'Prices from a November 2024 review (Visited on November 2024) and the Mapple guide (seen November 2026); no menu prices on Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Uji kintoki milk kakigori (matcha, azuki, condensed milk)', '¥1,000', 'Sweets', 'ask', 'no', 'November 2024 review; condensed milk.', 'uji_kintoki_milk'),
      it('わらび餅', '', 'Warabi mochi with kinako', '¥600', 'Sweets', 'ask', 'ask', 'November 2024 review; Mapple guide.', 'warabi_mochi'),
      it('', '', 'Chadango (green tea dumplings)', '¥600', 'Sweets', 'ask', 'ask', 'November 2024 review.', 'chadango'),
      it('', '', 'Hiyashiame (chilled ginger syrup drink)', '¥600', 'Drinks', 'ask', 'ask', 'November 2024 review.', 'hiyashiame'),
      it('', '', 'Zaru soba', '', 'Noodles', 'ask', 'ask', 'July 2024 and June 2026 reviews.', 'zaru_soba'),
      it('', '', 'Tsukimi soba (with egg)', '', 'Noodles', 'ask', 'no', 'December 2025 review; egg.', 'tsukimi_soba'),
    ] }, {
    cuisine: 'かき氷、甘味、そばの寺の茶屋。口コミの料理: かき氷 (2023年8月)、ふわふわでなめらかなかき氷と抹茶ミルク (2024年9月)。あずきと練乳の宇治金時ミルク1,000円、きなこのわらび餅600円、茶だんご600円、冷やしあめ600円 (2024年11月。わらび餅600円はまっぷるにも)。ざるそば (2024年7月、2026年6月)、サイダー (2026年6月)。甘いしょうゆのつゆの月見そばときつねそば、うどんと甘味もある (2025年12月)。だんご、わらび餅、枝豆とビール (2025年8月)。いちごと宇治抹茶のかき氷 (2026年8月)。いちごといちごミルクのかき氷、4つで3,000円あまり (2026年9月)。あずきの抹茶かき氷 (2026年10月)。口コミの予算は1人1,000円未満から2,000円 (2023〜2026年)。',
    neighborhood: '東山、清水寺の境内。清水五条駅から1,370m',
    gf_detail: '要確認。甘いしょうゆのつゆのそばとうどん、茶だんご、わらび餅、シロップや抹茶、あずき、練乳のかき氷 (2024〜2026年の口コミ)。食べログにグルテンやアレルギーの情報はない。',
    vegan_detail: '要確認。そばはしょうゆのつゆで、月見そばには卵 (2025年12月)。ミルクのかき氷には練乳 (2024年11月)。いちごや抹茶のかき氷、きなこのわらび餅、冷やしあめには動物性のものがないかもしれないが、材料は書かれていない (2024〜2026年の口コミ)。',
    notes: '[茶屋・清水寺] 清水寺の境内にある木造の茶屋。口コミによれば1862年から営業。いちご、抹茶、宇治金時ミルクのふわふわのかき氷、わらび餅、茶だんご、しょうがの冷やしあめがおよそ600〜1,000円。ざるそば、きつねそば、月見そばも。参拝の坂のあとのひと休みに。毎日9時30分から15時45分。現金のみ。',
  });
}

// ================================================================ 間 (Kan)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26040719/'; const R = TB + 'dtlrvwlst/';
  const MICH = 'https://guide.michelin.com/jp/ja/kyoto-region/kyoto/restaurant/kan';
  const D = day(['17:00', '22:30']);
  put({
    id: 'kyoto_kan_tb26040719_jingu_marutamachi', name: '間 (Kan)', category: 'OMNI',
    lat: 35.01842782786422, lng: 135.76992668049095, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. An à la carte Japanese menu that includes a wagyu fillet cutlet, pork cutlet, fried oysters, tempura, fugu kara-age and finishing soba, mazemen and Inaniwa udon (2025–2026 reviews); no gluten or allergy information on Tabelog or the Michelin page.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish and wagyu menu of sashimi, crab, fugu, abalone and beef (2025–2026 reviews); no vegan dish mentioned.',
    hours_raw: 'Daily 17:00–22:30; closed irregularly (Tabelog; the Michelin Guide page gives 17:00–22:30 every day). Reservations taken (Tabelog), including online through Tabelog and on the same day (June 2025, January and August 2026 reviews); private hire by arrangement (Tabelog). 7 counter seats (Tabelog; an October 2026 reviewer found all seven full); January and August 2026 reviewers wrote eight. Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR payments (Tabelog). Non-smoking; no parking, coin parking nearby (Tabelog). 5 min walk from Jingu-Marutamachi Stn (Tabelog). Opened 3 February 2024 (Tabelog). A June 2025 reviewer wrote that the chef would be away on a business trip to Taiwan for a while and planned to reopen around the middle of the following month.',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Quiet streets east of the Imperial Palace, near Kawaramachi-Marutamachi — 214 m from Jingu-Marutamachi Stn',
    cuisine: 'À la carte Japanese cooking from a handwritten menu dated each day, with sashimi, grilled, simmered and fried dishes and finishes of soba, mazemen, Inaniwa udon and zosui (November 2025 review). The Michelin Guide: the menu always opens with a fruit shira-ae, its fruit acidity meant to wake the appetite; lean wagyu goes into charcoal grilling or a fillet cutlet, and the fat is fried crisp and folded into a potato salad called カンフー（間風）ポテトサラダ. Seen in reviews: crab grilled, with its miso and in rice porridge (January 2025); green plum, dried flatfish, biwa with white miso, tender octopus, potato salad, abalone with liver sauce, assorted sashimi, grilled wild Lake Biwa eel, wagyu and asparagus sukiyaki style, hairy crab croquette, wagyu fillet cutlet, corn tempura and a kamameshi of corn and eel (June 2025); 蕪蒸し (steamed turnip), crab, karasumi mochi and wild boar (January 2026); scallops with sea urchin, fugu and celery hot pot, wagyu cutlet and an earthenware pot of rice with tilefish tempura (February 2026); hamo with cucumber and plum vinegar, four kinds of sashimi, grilled white tilefish, eggplant with hairy crab sauce and a Kagoshima wagyu fillet cutlet (August 2026); grilled nodoguro and a rice pot of salmon and ikura (August 2026); fried oysters and a pork cutlet (October 2026); sawara with matsutake sauce, katsuo with salt, saikyo-miso mackerel, beef sukiyaki style with matsutake, yamaimo with crab sauce and takikomi gohan of karasumi and ayu (October 2026); a grape salad with roasted soybeans, mascarpone and white sesame salad, bluefin tuna and wild yellowtail, karasumi mochi, fugu kara-age and wagyu fillet cutlet (November 2026); Matsuba crab, fugu milt with ponzu, kinmedai, house thick fried tofu and Matsuba crab rice (November 2026). Sake, shochu and wine (Tabelog); a Taiwanese tea highball (August 2026). Reviewers paid ¥15,000–39,999 a head (2025–2026); two diners paid ¥40,000 in August 2026.',
    website: null, gmaps: gm('間 日本料理 京都 俵屋町430'), menu_url: TB,
    notes: '[À la carte kappo · Jingu-Marutamachi] A seven-seat counter in a renovated townhouse east of the Imperial Palace, opened in 2024 by a young chef cooking alone, and listed in the Michelin Guide: choose from a daily handwritten menu of sashimi, crab, fugu, grilled fish and a much-praised wagyu fillet cutlet, finishing with clay-pot rice. About ¥15,000–30,000. Evenings, closed irregularly; book ahead.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per the Michelin Guide, 「間」 is one character of the owner\'s surname, and the chef hopes to be a cook who goes between the food and the guest. The chef works the counter alone (June 2025, January 2026 reviews) and was described as a young chef in the early thirties (August 2026 review), quiet with an artisan air but chatty once guests warmed up (June 2025), and friendly (August 2026). A November 2026 reviewer wrote that the chef trained for five years at a well-known traditional Kyoto restaurant after cooking school, then seven years at a sought-after kaiseki restaurant, before going independent; the restaurant opened in February 2024 in a carefully renovated townhouse. A university student serves drinks (November 2026 review). The chef told a November 2025 diner of wanting a place where the chef would enjoy eating, which is why the menu grew so long. A June 2025 reviewer noted it had been selected by Michelin within a year of opening.',
      philosophy: 'From the Michelin Guide: to be a cook who mediates between the food and the guest; the menu opens with fruit shira-ae to stir the appetite, and wagyu is used whole, lean meat grilled or as a cutlet and the fat in the potato salad.',
      specialty: 'Wagyu fillet cutlet; seasonal crab and fugu; clay-pot rice.',
      anecdotes: [
        { text: 'A diner who meant only to have a quiet drink alone in January 2025 ended up ordering crab three ways: grilled, with its miso, and in a rice porridge.', source: R + 'B499602562/' },
        { text: 'In January 2026 a diner found the restaurant through Tabelog\'s same-day booking, and the leftover takikomi gohan was made into onigiri to take home.', source: R + 'B520433164/' },
        { text: 'Two diners in August 2026 never reached the rice course for all the tempting dishes, and paid exactly ¥40,000 for the pair.', source: R + 'B533943622/' },
        { text: 'A November 2026 diner from Kanto called the wagyu fillet cutlet, pink with an ultra-thin crisp coating, the best beef cutlet ever eaten, though found the prices on the high side.', source: R + 'B539286297/' },
      ],
      japanese_sources_summary: 'ミシュランガイド: 間／Kan、日本料理、上京区俵屋町 430-4、17:00-22:30。店名は店主の名字の一文字。料理と客をつなぐ料理人でありたいと願う。品書きの初めは果物の白和え。和牛の赤身は炭火焼やヒレカツに、脂は揚げ焼きにしてポテトサラダに和え、カンフー（間風）ポテトサラダと呼ぶ。食べログ: 日本料理、上京区俵屋町430-4、毎日17:00〜22:30、不定休、予約可、貸切可、カウンター7席、カード可 (VISA、Master、JCB、AMEX、Diners)、電子マネー・QR不可、禁煙、駐車場なし、神宮丸太町駅から徒歩5分、オープン2024年2月3日。口コミ (2025〜2026年、英語): ひとりで料理するアラカルトの割烹、日付入りの手書きの品書き、和牛のヒレカツ、かに、ふぐ、土鍋ごはん。',
      confidence: 'medium', sources: [TB, MICH, R + 'B499602562/', R + 'B506325729/', R + 'B508853446/', R + 'B517939186/', R + 'B520433164/', R + 'B523309688/', R + 'B533943622/', R + 'B535472761/', R + 'B537166815/', R + 'B538423416/', R + 'B539286297/', R + 'B539782192/'] },
    cultural_comfort: { level: 'japanese', note: 'A small counter with a handwritten Japanese menu that changes daily (November 2025 review); no English menu noted. Phone service may be Japanese only (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区俵屋町430-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; Michelin Guide page; reviews dated August, October and November 2026.' },
    pin_source: `Tabelog ${TB} (35.018428, 135.769927); nearest record kyoto_sanbongi_shoten (真町478) about 15 m away; kyoto_marukyu_tb26036399_kawaramachi_marutamachi (俵屋町436-3) about 23 m; not OSM-checked by the worker; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [MICH, R + 'B508853446/', R + 'B539286297/', R + 'B539782192/'],
    price_note: 'No item prices in any source; dishes from the Michelin Guide page and 2025–2026 reviews. The menu changes daily.', last_checked: TODAY, items: [
      it('', '', 'Fruit shira-ae (opens every menu)', '', 'Appetizer', 'ask', 'ask', 'Michelin Guide page.', 'fruit_shiraae'),
      it('カンフー（間風）ポテトサラダ', '', 'Kan-style potato salad with fried wagyu fat', '', 'Appetizer', 'ask', 'no', 'Michelin Guide page; wagyu fat.', 'kanfu_potato_salad'),
      it('和牛ヘレカツ', '', 'Wagyu fillet cutlet', '', 'Main', 'no', 'no', 'Michelin Guide page; June 2025, February, August and November 2026 reviews; breaded.', 'wagyu_hire_katsu'),
      it('', '', 'Karasumi mochi', '', 'Main', 'ask', 'no', 'January and November 2026 reviews.', 'karasumi_mochi'),
      it('', '', 'Assorted sashimi', '', 'Main', 'ask', 'no', 'June 2025, February, August, October and November 2026 reviews.', 'otsukuri'),
    ] }, {
    cuisine: 'アラカルトの日本料理。日付入りの手書きの品書きで、刺身、焼き物、煮物、揚げ物、しめにそば、まぜそば、稲庭うどん、雑炊 (2025年11月の口コミ)。ミシュランガイド: 品書きの初めは果物の白和えと決めていて、果実の酸味で食欲をそそる。和牛の赤身は炭火焼やヒレカツに、脂は揚げ焼きにしてポテトサラダに和え、カンフー（間風）ポテトサラダと呼ぶ。口コミの料理: かにの焼き、かに味噌、かにの雑炊 (2025年1月)。青梅、干しガレイ、びわの白味噌、たこのやわらか煮、ポテトサラダ、あわびのきもソース、お造り、天然の Lake Biwa のうなぎの焼き、和牛とアスパラのすき焼き仕立て、毛がにのコロッケ、和牛のヒレカツ、とうもろこしの天ぷら、とうもろこしとうなぎの釜飯 (2025年6月)。蕪蒸し、かに、からすみ餅、いのしし (2026年1月)。ほたてとうに、ふぐとセロリの鍋、和牛カツ、甘鯛の天ぷらの土鍋ごはん (2026年2月)。はもと白瓜、お造り4種、白甘鯛の焼き、毛がにのあんの茄子、Kagoshima の和牛のヒレカツ (2026年8月)。のどぐろの焼き、鮭といくらの土鍋ごはん (2026年8月)。カキフライ、とんかつ (2026年10月)。さわらの松茸あん、かつおの塩、さばの西京焼き、松茸の牛すき焼き仕立て、山芋のかにあん、からすみと鮎の炊き込みごはん (2026年10月)。ぶどうのサラダ、マスカルポーネと白ごまのサラダ、本まぐろと天然ぶり、からすみ餅、ふぐの唐揚げ、和牛のヒレカツ (2026年11月)。松葉がに、ふぐの白子ポン酢、金目鯛、自家製の厚揚げ、松葉がにのごはん (2026年11月)。日本酒、焼酎、ワイン (食べログ)。台湾茶のハイボール (2026年8月)。口コミの予算は1人15,000〜39,999円 (2025〜2026年)。',
    neighborhood: '御所の東の静かな通り、河原町丸太町の近く。神宮丸太町駅から214m',
    gf_detail: '要確認。和牛のヒレカツ、とんかつ、カキフライ、天ぷら、ふぐの唐揚げ、しめのそば、まぜそば、稲庭うどんのあるアラカルトの日本料理 (2025〜2026年の口コミ)。食べログとミシュランガイドにグルテンやアレルギーの情報はない。',
    vegan_detail: 'ヴィーガン不可。刺身、かに、ふぐ、あわび、牛肉の魚と和牛の料理 (2025〜2026年の口コミ)。ヴィーガンの料理は書かれていない。',
    notes: '[アラカルトの割烹・神宮丸太町] 御所の東、改装した町家のカウンター7席。2024年に開店し、若い料理人がひとりで料理する。ミシュランガイドに掲載。日替わりの手書きの品書きから刺身、かに、ふぐ、焼き魚、評判の和牛のヒレカツを選び、しめは土鍋ごはん。1人およそ15,000〜30,000円。夜のみ、不定休。予約を。',
  });
}

// ================================================================ 酒破離 (Shuhari)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26037749/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.shuhari-oike.com/'; const MENU = SITE + 'menu'; const DRINK = SITE + 'party'; const BENTO = SITE + 'drink';
  const MOVE = SITE + 'news/461'; const LUNCH = SITE + 'news/469'; const CHOICE = SITE + 'news/473';
  const D = day(['12:00', '14:00'], ['17:30', '23:00']);
  put({
    id: 'kyoto_shuhari_tb26037749_inokuma_bukkoji', name: '酒破離 (Shuhari)', category: 'OMNI',
    lat: 35.00169816786867, lng: 135.7505050503356, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Fried chicken with yurinchi sauce (official menu), a thick ham cutlet (May 2025), omurice, steak rice bowl with a sweet soy sauce (June 2026) and dashimaki; no gluten or allergy information on Tabelog or the official site.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish and meat izakaya of sashimi, seafood and steak rice bowls, duck, lamb ham and fried chicken (official menu; 2023–2026 reviews), with miso soup at lunch; no vegan dish mentioned.',
    hours_raw: 'Mon–Sat and holidays 12:00–14:00 (L.O. 13:45) and 17:30–23:00 (L.O. 22:00); closed Sundays (Tabelog; the official site gives the same hours, closed Sundays). Reservations taken (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), e-money and QR (PayPay, d Barai, Rakuten Pay, au PAY) (Tabelog). 12 seats: 2 at the counter and tables (Tabelog); private hire for up to 20 (Tabelog). Smoking only at private-hire parties; no parking (Tabelog). Children welcome (Tabelog). A course with all-you-can-drink ¥5,000 (official site). Bento delivery within Kyoto City, orders from ¥10,000 in total (official site). 4 min walk from the south exit of Hankyu Omiya Stn, 6 min from Randen Shijo-Omiya (Tabelog). Moved to this address on 23 May 2022 (official site news).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Inokuma-dori above Bukkoji, south of Shijo-Omiya — 259 m from Shijo-Omiya Stn',
    cuisine: 'An izakaya particular about fish and sake (Tabelog), with lunch rice bowls. Lunch, per the official site (June 2022): a seafood rice bowl piled with hon-maguro including otoro and other chosen sashimi, a hearty steak rice bowl, and a choice lunch of two side dishes with salad, rice and miso soup (shown with a thick ham cutlet and shrimp in chilli mayo); the bowls can be ordered at night too. Official menu: hon-maguro lean, chutoro and otoro, one serving ¥450; seared kanpachi with Kujo negi and ponzu ¥680; lamb prosciutto ¥980; duck loin ¥680; fried chicken with yurinchi sauce ¥680. Drinks: draft beer ¥500, highball, glass of wine and shochu from ¥450, sake from ¥500 a go (official site). Seen in reviews: seafood rice bowl of tuna, toro, octopus, sea bream and kanpachi with salad and miso soup, fish changing with the day\'s buying (May 2023; November 2024; October 2024); steak rice bowl, thin-sliced and piled high with Kujo negi, salad and red miso soup (June 2026; December 2025); thick ham cutlet ¥420, salt-grilled sea bream head ¥680 and classic omurice ¥780 (May 2025); fluffy dashimaki, wagyu roast and a wide range of sake (July 2026). Reviewers paid ¥1,000–1,999 at lunch and ¥3,000–4,999 at dinner (2023–2026).',
    website: SITE, gmaps: gm('酒破離 京都 猪熊通仏光寺'), menu_url: MENU,
    notes: '[Izakaya · Shijo-Omiya] A small, wood-lined izakaya run single-handed on Inokuma-dori south of Shijo-Omiya: at lunch a seafood bowl of tuna and toro, a steak bowl or a choose-two-sides set for about ¥1,000; at night sashimi, dashimaki, wagyu roast and a wide sake list. Closed Sundays.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'A one-person operation (May 2025 review); an October 2024 reviewer saw the owner handle a steady lunchtime stream alone, and a December 2025 couple praised the owner\'s service. The restaurant moved to this address, 4 minutes from Hankyu Omiya Station, on 23 May 2022 (official site). Tabelog notes it as particular about fish and sake.',
      philosophy: null,
      specialty: 'Seafood rice bowl; steak rice bowl; dashimaki.',
      anecdotes: [
        { text: 'A diner who had the seafood bowl in May 2023 came back in June 2026 for the steak bowl and found it as good as remembered.', source: R + 'B468130788/' },
        { text: 'In May 2025 a pair came in curious about the shop\'s name; with one person running it, drink orders waited once local regulars arrived, which the reviewer thought understandable.', source: R + 'B523218566/' },
        { text: 'A May 2025 diner found the prices reasonable, the taste average and the room quiet and fairly empty, perhaps because the shop is hard to find.', source: R + 'B507563860/' },
        { text: 'An April 2026 reviewer at a mostly female gathering found every dish good but thought the portions might not satisfy men.', source: R + 'B526470473/' },
      ],
      japanese_sources_summary: '公式サイト: 酒ダイニング 酒破離、京都市下京区猪熊通仏光寺上ル瀬戸屋町305、営業時間12:00〜14:00/17:30〜23:00、定休日 日曜。人気定番飲み放題付きコース5,000円。宅配弁当 (京都市内、合計10,000円から)。2022年5月23日「阪急大宮駅から徒歩4分…に移転しました」。2022年6月2日のランチメニュー: 大トロもはいる本マグロたっぷりの海鮮丼、ステーキ丼、2種類のおかずが選べサラダ、ご飯、味噌汁のチョイスランチ。お料理: 本マグロ赤身、中トロ、大トロ一人前450円、カンパチ炙り九条ネギポン酢680円、ラムの生ハム980円、鴨ロース680円、鶏の唐揚げ油淋鶏ソース680円。食べログ: 居酒屋、ダイニングバー、月〜土・祝日 12:00〜14:00、17:30〜23:00、日曜休み、12席、カード・電子マネー・QR可、子ども可。口コミ (2023〜2026年、英語): ひとりで営む店、海鮮丼とステーキ丼、だし巻き、和牛のロースト、日本酒が多い。',
      confidence: 'medium', sources: [TB, SITE, MENU, DRINK, BENTO, MOVE, LUNCH, CHOICE, R + 'B468130788/', R + 'B496185202/', R + 'B507563860/', R + 'B520460929/', R + 'B523218566/', R + 'B526470473/', R + 'B532340310/', R + 'B533092412/'] },
    cultural_comfort: { level: 'japanese', note: 'A small neighbourhood izakaya with local regulars (May 2025 review); no English menu noted. Phone service may be Japanese only (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市下京区猪熊通仏光寺上ル瀬戸屋町305',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; official site; reviews dated April, May, June and July 2026.' },
    pin_source: `Tabelog ${TB} (35.001698, 135.750505); nearest record kyoto_enmusubi_ajikonbu (京 縁結び味こんぶ, same lot number 瀬戸屋町305 but a separate machiya shop down an alley) about 6.5 m away, Tabelog pins kept as given; not OSM-checked by the worker; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU, DRINK, BENTO, SITE, R + 'B507563860/'],
    price_note: 'Prices from the official site (seen November 2026, tax treatment not stated on the menu page; bento prices tax included) and a May 2025 review.', last_checked: TODAY, items: [
      it('本マグロ赤身、中トロ、大トロ一人前', '', 'Hon-maguro lean, chutoro and otoro, one serving', '¥450', 'Sashimi', 'ask', 'no', 'Official menu.', 'maguro_three'),
      it('カンパチ炙り九条ネギポン酢', '', 'Seared kanpachi with Kujo negi and ponzu', '¥680', 'Sashimi', 'ask', 'no', 'Official menu.', 'kanpachi_aburi'),
      it('ラムの生ハム', '', 'Lamb prosciutto', '¥980', 'A la carte', 'ask', 'no', 'Official menu.', 'lamb_ham'),
      it('鴨ロース', '', 'Duck loin', '¥680', 'A la carte', 'ask', 'no', 'Official menu.', 'kamo_rosu'),
      it('鶏の唐揚げ油淋鶏ソース', '', 'Fried chicken with yurinchi sauce', '¥680', 'A la carte', 'ask', 'no', 'Official menu.', 'karaage_yurinchi'),
      it('', '', 'Thick ham cutlet', '¥420', 'A la carte', 'no', 'no', 'May 2025 review; breaded.', 'ham_katsu'),
      it('', '', 'Classic omurice', '¥780', 'A la carte', 'ask', 'no', 'May 2025 review.', 'omurice'),
      it('人気定番飲み放題付きコース', '', 'Course with all-you-can-drink', '¥5,000', 'Course', 'ask', 'no', 'Official site.', 'nomihodai_course'),
      it('ステーキ弁当', '', 'Steak bento (delivery)', '¥2,680', 'Bento', 'ask', 'no', 'Official site, tax included; delivery orders from ¥10,000 in total.', 'steak_bento'),
    ] }, {
    cuisine: '魚と日本酒にこだわる居酒屋 (食べログ)。昼は丼も。公式サイトのランチ (2022年6月): 大トロもはいる本マグロたっぷりのお造りを盛った海鮮丼、ボリュームのあるステーキ丼、2種類のおかずを選びサラダ、ご飯、味噌汁がつくチョイスランチ (写真は分厚いハムカツとエビのチリマヨソース)。丼は夜も頼める。公式サイトのお料理: 本マグロ赤身、中トロ、大トロ一人前450円、カンパチ炙り九条ネギポン酢680円、ラムの生ハム980円、鴨ロース680円、鶏の唐揚げ油淋鶏ソース680円。飲み物: 生ビール500円、ハイボール、グラスワイン、焼酎は450円から、日本酒一合500円から。口コミの料理: まぐろ、トロ、たこ、鯛、カンパチの海鮮丼にサラダと味噌汁、魚はその日の仕入れで変わる (2023年5月、2024年10月、2024年11月)。薄切りの肉を高く盛り九条ねぎをのせたステーキ丼にサラダと赤だし (2026年6月、2025年12月)。分厚いハムカツ420円、鯛のかぶと塩焼き680円、定番のオムライス780円 (2025年5月)。ふわふわのだし巻き、和牛のロースト、豊富な日本酒 (2026年7月)。口コミの予算は昼1,000〜1,999円、夜3,000〜4,999円 (2023〜2026年)。',
    neighborhood: '四条大宮の南、猪熊通仏光寺上ル。四条大宮駅から259m',
    gf_detail: '要確認。鶏の唐揚げ油淋鶏ソース (公式サイト)、分厚いハムカツ (2025年5月)、オムライス、甘辛いたれのステーキ丼 (2026年6月)、だし巻き。食べログと公式サイトにグルテンやアレルギーの情報はない。',
    vegan_detail: 'ヴィーガン不可。刺身、海鮮丼とステーキ丼、鴨、ラムの生ハム、唐揚げの魚と肉の居酒屋で (公式サイト、2023〜2026年の口コミ)、昼は味噌汁つき。ヴィーガンの料理は書かれていない。',
    notes: '[居酒屋・四条大宮] 四条大宮の南、猪熊通の木のぬくもりのある小さな居酒屋。ひとりで切り盛りする。昼はまぐろとトロの海鮮丼、ステーキ丼、おかずを2品選ぶランチがおよそ1,000円。夜は刺身、だし巻き、和牛のロースト、豊富な日本酒。日曜休み。',
  });
}

// ================================================================ CAFE KUTSUROGI
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26042987/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://cafe-kutsurogi-kyoto.com/';
  const WE = day(['13:00', '17:00']); const SS = day(['11:00', '17:00']);
  put({
    id: 'kyoto_cafe_kutsurogi_okazaki', name: 'CAFE KUTSUROGI', category: 'OMNI',
    lat: 35.01612289359295, lng: 135.77856572033932, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Handmade scones, chiffon cakes, cookies and egg or tuna-mayo toast (official site); no ingredient, gluten or allergy information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Scones, chiffon cakes and cookies with no ingredient list, scones served with fresh cream or anko, egg toast (official site); fruit juices, black coffee, Americano and tea are on the drinks list (official site), but no dish is marked vegan.',
    hours_raw: 'Official site: Thu–Fri 13:00–17:00, Sat–Sun 11:00–17:00; closed Mon–Wed; hours change with the season, check Instagram. Tabelog gives Thu–Sun 10:30–16:00, closed Mon–Wed, irregular closures announced on Instagram. Pay first at the ticket machine; eat in or take away, with lower takeaway prices; toast for eat-in only (May 2025 review). 16 seats; cards accepted (VISA, MasterCard, JCB, AmericanExpress, Diners); no parking, but a LOOP scooter port (10 bays, port name CAFE KUTSUROGI) and bicycle parking (official site). 3rd floor of 松本工務店ビル (official site), sharing the floor with a nail salon and a palm-reading salon (May 2025 review). 10 min walk from Keihan Jingu-Marutamachi Stn, 13 min from Higashiyama subway Stn, about 7 min from Heian Shrine; buses to Higashiyama-Nijo / Okazaki-koen-guchi or Kumano-jinja-mae, 5 min (official site). Opened 6 April 2025 (Tabelog; May 2025 review).',
    hours: { 3: WE, 4: WE, 5: SS, 6: SS }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Okazaki, between Higashiyama-Nijo and Kumano-jinja, about 7 min walk from Heian Shrine — 619 m from Jingu-Marutamachi Stn',
    cuisine: 'A café of handmade scones and chiffon cakes (official site: 「手づくりのスコーンとシフォンケーキがイチオシ。」). Official menu, tax included: plain or black tea scone ¥500; matcha scone and anko-butter scone ¥550; matcha or hojicha chiffon cake ¥660 eat-in, ¥497 takeaway; matcha, black tea or chocolate cookie ¥380 eat-in, ¥373 takeaway; egg toast ¥550; half tuna-mayo toast ¥280. Hot drinks (eat-in/takeaway): coffee and tea ¥550/¥540, Americano ¥495/¥486, café latte, cappuccino and royal milk tea ¥600/¥589, caramel latte, matcha latte and hot chocolate ¥680/¥667. Iced coffee and iced tea R ¥550/¥540, L ¥605/¥594; juices ¥495/¥486; peach squash ¥550/¥540; melon soda and lemon squash ¥500; for a limited time cream soda ¥680 and matcha latte or chocolate floats ¥780. The site says the scones are made moist and only lightly sweet, to pair with fresh cream or anko, and the chiffon cakes are baked with care for moisture and heat so the matcha and hojicha flavours stay. A May 2025 reviewer had a matcha scone ¥550, hojicha chiffon cake ¥660 and an iced coffee ¥550, finding the scone crisp outside and moist within and the chiffon very light, with the R-size coffee about double a usual cup.',
    website: SITE, gmaps: gm('CAFE KUTSUROGI 京都 岡崎徳成町'), menu_url: SITE,
    notes: '[Café · Okazaki] A sixteen-seat third-floor café near Heian Shrine, opened in 2025, in a wood-toned room with arched shapes and half-round chair backs: house scones (plain, black tea, matcha, anko butter) and matcha or hojicha chiffon cakes for about ¥500–660, with coffee, lattes and egg toast. Pay at the ticket machine. Open Thu–Sun afternoons; check Instagram.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened on 6 April 2025 (Tabelog). The official site describes a wood-based room with soft light, and arches and rounded forms chosen so guests\' eyes rarely meet and they can relax, the half-round chair backs among them. A May 2025 reviewer found the white, natural interior relaxing; a January 2026 reviewer called it a hidden gem where one can truly relax.',
      philosophy: 'The official site: good sweets and a space to relax (「美味しいスイーツとくつろぎの空間」), for time with friends or a break on a trip.',
      specialty: 'Handmade scones; matcha and hojicha chiffon cakes.',
      anecdotes: [
        { text: 'A May 2025 visitor, a month after the opening, paid at the ticket machine and tried a matcha scone, a hojicha chiffon cake and an iced coffee.', source: R + 'B506137031/' },
      ],
      japanese_sources_summary: '公式サイト: CAFE KUTSUROGI、京都府京都市左京区岡崎徳成町26-5 松本工務店ビル3F。木・金曜日13:00〜17:00、土・日曜日11:00〜17:00、季節によって変動あり、Instagram を要確認。定休日 月〜水曜日。16席、クレジットカード可、駐車場なし、LOOP置き場と駐輪場あり。手づくりのスコーンとシフォンケーキがイチオシ。プレーンスコーンと紅茶スコーン500円、抹茶スコーンとあんバタースコーン550円、抹茶とほうじ茶のシフォンケーキ イートイン660円・テイクアウト497円、クッキー380円・373円、たまごトースト550円、ツナマヨトーストハーフ280円、コーヒー550円・540円ほか。食べログ: カフェ、木〜日10:30〜16:00、月・火・水曜休み、オープン2025年4月6日。口コミ (2025年5月、2026年1月、英語): 券売機で先に支払い、イートインとテイクアウト。',
      confidence: 'medium', sources: [SITE, TB, R + 'B506137031/', R + 'B522200833/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order and pay at a ticket machine (May 2025 review); menu and site in Japanese. Phone service may be Japanese only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区岡崎徳成町26-5 松本工務店ビル3F',
    existence: { status: 'probable', checked: TODAY, note: 'Official site with a current menu and hours; Tabelog listing; reviews dated May 2025 and January 2026, none later.' },
    pin_source: `Tabelog ${TB} (35.016123, 135.778566); nearest record vm_browny_bread_bagels about 36 m away; kyoto_shogoin_ranmaru about 45 m; not OSM-checked by the worker; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE],
    price_note: 'Prices from the official site, tax included (seen November 2026); eat-in / takeaway where two prices are given.', last_checked: TODAY, items: [
      it('プレーンスコーン', '', 'Plain scone', '¥500', 'Sweets', 'ask', 'ask', 'Official site.', 'plain_scone'),
      it('抹茶スコーン', '', 'Matcha scone', '¥550', 'Sweets', 'ask', 'ask', 'Official site.', 'matcha_scone'),
      it('あんバタースコーン', '', 'Anko-butter scone', '¥550', 'Sweets', 'ask', 'no', 'Official site; butter.', 'anbutter_scone'),
      it('抹茶シフォンケーキ', '', 'Matcha chiffon cake (takeaway ¥497)', '¥660', 'Sweets', 'ask', 'ask', 'Official site.', 'matcha_chiffon'),
      it('ほうじ茶シフォンケーキ', '', 'Hojicha chiffon cake (takeaway ¥497)', '¥660', 'Sweets', 'ask', 'ask', 'Official site.', 'hojicha_chiffon'),
      it('たまごトースト', '', 'Egg toast', '¥550', 'Food', 'ask', 'no', 'Official site; egg.', 'tamago_toast'),
      it('コーヒー', '', 'Coffee (takeaway ¥540)', '¥550', 'Drinks', 'ask', 'ask', 'Official site.', 'coffee'),
      it('抹茶ラテ', '', 'Matcha latte (takeaway ¥667)', '¥680', 'Drinks', 'ask', 'ask', 'Official site.', 'matcha_latte'),
    ] }, {
    cuisine: '手づくりのスコーンとシフォンケーキのカフェ (公式サイト「手づくりのスコーンとシフォンケーキがイチオシ。」)。公式サイトのメニュー (税込): プレーンスコーンと紅茶スコーン500円、抹茶スコーンとあんバタースコーン550円、抹茶とほうじ茶のシフォンケーキ イートイン660円・テイクアウト497円、抹茶、紅茶、チョコのクッキー380円・373円、たまごトースト550円、ツナマヨトーストハーフ280円。ホットドリンク (イートイン/テイクアウト): コーヒーと紅茶550円/540円、アメリカーノ495円/486円、カフェラテ、カプチーノ、ロイヤルミルクティー600円/589円、キャラメルラテ、抹茶ラテ、ホットチョコレート680円/667円。アイスコーヒーとアイスティー R 550円/540円、L 605円/594円、ジュース495円/486円、桃スカッシュ550円/540円、メロンソーダとレモンスカッシュ500円、期間限定のクリームソーダ680円、抹茶ラテフロートとチョコレートフロート780円。スコーンはしっとりとして甘さ控えめで、生クリームやあんことよく合う。シフォンケーキは抹茶やほうじ茶の風味を損なわないよう水分量や焼き加減に気を配る (公式サイト)。2025年5月の口コミ: 抹茶スコーン550円、ほうじ茶シフォンケーキ660円、アイスコーヒー550円。スコーンは外が少しさくっとして中はしっとり、シフォンはとても軽く、R サイズのコーヒーはふつうの倍ほど。',
    neighborhood: '岡崎、東山二条と熊野神社のあいだ、平安神宮から徒歩約7分。神宮丸太町駅から619m',
    gf_detail: '要確認。手づくりのスコーン、シフォンケーキ、クッキー、たまごトーストとツナマヨトースト (公式サイト)。材料、グルテン、アレルギーの情報はない。',
    vegan_detail: '要確認。スコーン、シフォンケーキ、クッキーに材料の記載はなく、スコーンには生クリームかあんこ、たまごトーストもある (公式サイト)。ジュース、コーヒー、アメリカーノ、紅茶もあるが (公式サイト)、ヴィーガンの印のある料理はない。',
    notes: '[カフェ・岡崎] 平安神宮の近く、2025年に開店したビルの3階の16席のカフェ。木を基調にアーチと半円の背もたれの椅子の店内で、手づくりのスコーン (プレーン、紅茶、抹茶、あんバター) と抹茶やほうじ茶のシフォンケーキがおよそ500〜660円。コーヒー、ラテ、たまごトーストも。券売機で先に支払う。木曜から日曜の午後に営業、Instagram で確認を。',
  });
}

save();
