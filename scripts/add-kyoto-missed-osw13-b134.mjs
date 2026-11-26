// Kyoto priority (kyoto-missed), worker osw13, batch 134 — lane: Tabelog id mod 6 = 0; core and notable exhausted in the lane, so rest tier, nearest-first.
// Drafts: 昭月, 新ばし, MON GALLERY AND WINE BAR, ふぐ・かに・はも 輝月. Skips: ダニエルズファクトリー (chain), 九州 熱中屋 四条大宮 LIVE (chain), Casa de Amigos (large parent: TOAI / Jankara), VIS-A-VIS (too thin). Shops fetched by the worker (Tabelog /en/ only, 3 s apart).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-26';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-134');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };
const rv = (R, ids) => ids.map(b => R + b + '/');

skip('26038164', 'chain, and no reviews: Daniel\'s Factory (ダニエルズファクトリー) has 0 Tabelog reviews and its website is daniels.jp/factory/ — the ダニエルズ group of 株式会社グラマラスフード, hidden in this app as a chain (see 26002212 in osw13-96)');
skip('26025264', 'chain: 九州 熱中屋 四条大宮 LIVE is a branch of the 九州熱中屋 brand run by ダイヤモンドダイニング (DD Holdings); the official shop page (dd-holdings.jp/shops/necchuya/sijyo) lists other branches in 田町芝浦, 日比谷, 十三, 桜木町 and 大森 (2号店), and Tabelog calls Bungo mackerel "Kyushu Netchuya Brand\'s Absolute Signature Dish"');
skip('26042706', 'large parent (Jankara group): Casa de Amigos\'s Tabelog invoice number T5130001021770 is registered to 株式会社TOAI (NTA registry), which a travel article (haveagood-holiday.com, Bankara live-band karaoke) says operates Jankara, "a karaoke chain with 212 locations nationwide"; Jankara group is on the brief\'s large-parent list');
skip('26000874', 'too thin to verify: VIS-A-VIS, a shot bar by Kyoto Station, has three 2025 Tabelog reviews of one or two lines each (highballs, a private party) and no food detail; its website was last updated in 2016 and gives a different building name (ファーストコート 七条烏丸 B1F) from Tabelog (西田ビル B1F)');

// ================================================================ 昭月
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26018796/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '19:00']);
  put({
    id: 'kyoto_udon_soba_marutamachi_26018796', name: '昭月', category: 'OMNI',
    lat: 35.017287046359606, lng: 135.75779902904776, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat udon and soba in a soy-seasoned bonito broth, rice bowls and set meals (2011–2026 reviews); no gluten-free option stated.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the noodle broth is bonito dashi (May 2022); kamaboko, chicken, egg and meat dishes too (2011–2026 reviews).',
    hours_raw: 'Tabelog: Mon–Sat 11:00–19:00; closed Sunday and public holidays; hours and closed days may change. A June 2023 reviewer gives the hours as from before noon to 15:00, then 16:00–17:00, with no evening service, so check before an evening visit. Reservations taken (Tabelog). No cards or e-money; QR-code payments accepted (Tabelog). 18 seats; non-smoking; no parking (Tabelog). 10 min walk from Karasuma-Marutamachi subway station, on Marutamachi-dori west of Muromachi.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Marutamachi-dori west of Muromachi — 10 min from Karasuma-Marutamachi',
    cuisine: 'A long-established neighbourhood udon and soba shop on Marutamachi-dori where all the soba is green-tea soba (2011–2026 reviews) · the soba is tea soba by default, thick and soft with a tea aroma (2016, 2018, 2022, June 2024) · herring soba, "the most famous dish" (August 2018; October 2016) · nabe-yaki, also a speciality (October 2016) · lunch "service sets" of noodles with rice: kitsune soba with kayaku rice ¥680 (August 2018) and ¥750 (June 2024); a daily set of a rice bowl ("Kinukake Rice Bowl" in the translated review) with mini udon ¥700 (September 2020); kitsune udon and rice ¥850 (December 2025); chicken nanban udon and rice ¥850 (March 2026); kitsune-toji udon and rice ¥850 (May 2026) · kitsune udon ¥650 (November 2025) · torinanba soba (May 2022); cold tea soba on a bamboo mat with nori (May 2026) · oyakodon with small udon ¥900 (September 2011); sukiyaki-don with small udon (September 2026) · a large bottle of beer ¥600 (May 2026) · most set meals under ¥1,000 (June 2023)',
    website: null, gmaps: gm('昭月 丸太町 室町 道場町'), menu_url: null,
    notes: '[Udon & soba · Marutamachi-Muromachi, a Showa-era tea-soba shop] An old neighbourhood noodle shop near the Imperial Palace where every soba is green-tea soba: herring soba, kitsune udon and lunch sets of noodles with kayaku rice or a small rice bowl, mostly under ¥1,000. Renovated entrance, Showa-diner feel. Closed Sunday; check the closing time.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'A 2024 reviewer calls it a long-established shop facing Marutamachi-dori, with a newly renovated entrance and new interior; the shop seems to have expanded west into the older premises next door, connected inside (June 2024). An August 2018 reviewer returning after 20 years found a quaint wooden interior and a kitchen run by a man and a young proprietress; the shop was featured on KBS Kyoto\'s "極上の京都", aired 15 April 2014, where the dish shown was meat udon (August 2018 review). In September 2011 a reviewer counted six tables, four counter seats and two raised dining areas, and saw a waitress, an elderly woman in the kitchen and what seemed to be the owner, with tension among the staff. Reviewers describe an older, local clientele (2018, June 2024) and a classic Showa-era diner (September 2026). A May 2026 reviewer found the cold tea soba mushy and the staff "not very friendly".',
      philosophy: null,
      specialty: 'Green-tea soba; herring soba; udon-and-rice lunch sets.',
      anecdotes: [
        { text: 'August 2018: "Here, all the soba noodles are made from tea leaves. You can choose between tea soba or udon. The most famous dish is the herring soba."', source: R + 'B376631244/' },
        { text: 'December 2025: "I ordered the service lunch set of Kitsune Udon and rice for JPY 850. Even though it was just past noon, the restaurant was quiet and calm, without being crowded."', source: R + 'B466643073/' },
        { text: 'May 2026 (in Japanese): サービスセットはキツネとじうどんと御飯、850円です。ビールを注文したら大ビンが出てきて600円でした。', source: R + 'B528180459/' },
      ],
      japanese_sources_summary: '食べログ: 昭月、麺類、中京区丸太町室町西入道場町5、丸太町駅から180m、地下鉄烏丸丸太町から徒歩10分、月〜土11:00〜19:00、日曜・祝日休み、予約可、カード・電子マネー不可、QRコード決済可、18席、禁煙、駐車場なし。口コミ (2011年9月〜2026年9月、多くは英語): 丸太町通の老舗のうどんとそばの店、そばはすべて茶そば、にしんそばが名物、鍋焼きも、ランチのサービスセット (きつねそばとかやくご飯680円 (2018年8月)、750円 (2024年6月)、丼とミニうどんの日替わりセット700円 (2020年9月)、きつねうどんとご飯850円 (2025年12月)、鶏南蛮うどんとご飯850円 (2026年3月))、かつおだしのつゆ (2022年5月)、KBS京都「極上の京都」で紹介 (2014年4月15日放送)、入口を改装し西隣へ広げた (2024年6月)、昭和の食堂の雰囲気 (2026年9月)。日本語の口コミ (2026年5月): 町のうどん屋さん、サービスセットはキツネとじうどんと御飯850円、ビールの大ビン600円、卵のとじ方がトロトロ。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B112242357', 'B228469816', 'B376631244', 'B430768529', 'B449803151', 'B466643073', 'B488218861', 'B528175280', 'B528180459', 'B529217985', 'B535248402'])) },
    cultural_comfort: { level: 'japanese', note: 'A local noodle shop; set meals posted on the wall (June 2024); phone may be Japanese only.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府中京区丸太町室町西入道場町5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated November 2025 to September 2026.' },
    pin_source: `Tabelog ${TB} (35.017287, 135.757799); not pin-checked by the worker (integrator to check); nearest pin kyoto_cocochi_cafe 6.9m (道場町4-8); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B466643073/', R + 'B488218861/', R + 'B528180459/'],
    price_note: 'Prices from 2024–2026 reviews (tax included where stated); no menu on Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Service set: kitsune udon and rice', '¥850', 'Set meal', 'no', 'no', 'December 2025.', 'kitsune_udon_set'),
      it('', '', 'Service set: chicken nanban udon and rice', '¥850', 'Set meal', 'no', 'no', 'March 2026, tax included.', 'torinanban_udon_set'),
      it('', '', 'Service set: kitsune soba (tea soba) with kayaku rice', '¥750', 'Set meal', 'no', 'no', 'June 2024.', 'kitsune_soba_set'),
      it('', '', 'Kitsune udon', '¥650', 'Noodles', 'no', 'no', 'November 2025.', 'kitsune_udon'),
      it('', '', 'Herring soba (tea soba)', null, 'Noodles', 'no', 'no', 'October 2016; August 2018 ("the most famous dish").', 'nishin_soba'),
    ] }, {
    cuisine: '丸太町通の老舗の町のうどんとそばの店。そばはすべて茶そば (2011〜2026年の口コミ)・そばは茶そばが基本、太めでやわらかく茶の香り (2016年、2018年、2022年、2024年6月)・「いちばんの名物」のにしんそば (2018年8月、2016年10月)・鍋焼きも名物 (2016年10月)・ランチのサービスセット: きつねそばとかやくご飯680円 (2018年8月)、750円 (2024年6月)、丼とミニうどんの日替わりセット700円 (2020年9月)、きつねうどんとご飯850円 (2025年12月)、鶏南蛮うどんとご飯850円 (2026年3月)、キツネとじうどんと御飯850円 (2026年5月)・きつねうどん650円 (2025年11月)・鳥なんばそば (2022年5月)、のり付きの冷たい茶そば (2026年5月)・親子丼と小うどん900円 (2011年9月)、すき焼き丼と小うどん (2026年9月)・ビールの大ビン600円 (2026年5月)・定食はほとんど1,000円未満 (2023年6月)',
    neighborhood: '丸太町通、室町の西。地下鉄烏丸丸太町から徒歩10分',
    gf_detail: 'グルテンフリーではない: 醤油味のかつおだしの小麦のうどんとそば、丼、定食 (2011〜2026年の口コミ)。グルテンフリーの対応の記載なし。',
    vegan_detail: 'ヴィーガン不可: つゆはかつおだし (2022年5月)。かまぼこ、鶏、卵、肉の料理も (2011〜2026年の口コミ)。',
    notes: '[うどん・そば・丸太町室町、昭和の茶そばの店] 御所の近くの古い町の麺の店。そばはすべて茶そばで、にしんそば、きつねうどん、うどんやそばにかやくご飯や小さな丼がつくランチのセットなど、ほとんど1,000円未満。入口は改装済み、昭和の食堂の雰囲気。日曜休み。閉店時間は確認を。',
  });
}

// ================================================================ 新ばし
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26015142/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '25:30']);
  put({
    id: 'kyoto_izakaya_rido_26015142', name: '新ばし', category: 'OMNI',
    lat: 34.989025, lng: 135.75872564020239, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: small home-style side dishes that change daily (simmered tofu, lotus root, sardines, potatoes, salad), plus yakisoba made with udon, pork kimchi and tamagoyaki (2019–2026 reviews); no gluten-free option stated.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask: the daily side dishes have included simmered tofu with shiitake, sweet-spicy lotus root and simmered sweet potato (2022, 2026), but also sardines, salami and octopus; no vegan option stated.',
    hours_raw: 'Tabelog: Mon–Sat 18:00–01:30; closed Sunday; hours and closed days may change. Reservations taken (Tabelog). Cash only: no cards, e-money or QR codes (Tabelog). No parking. A long-counter karaoke izakaya inside リド飲食街 (Rido Dining Street), an old alley of small bars just north of the Yodobashi Camera by Kyoto Station (2019 reviews). The restroom is shared with the other shops (October 2022). Quiet just after 18:00 and busy from about 20:00 (November 2026). 430 m from Kyoto Station.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Rido Dining Street, Shichijo-Karasuma — north of Kyoto Station',
    cuisine: 'A Showa-era karaoke izakaya with a long counter in the Rido Dining Street alley by Kyoto Station, known for its ¥1,000 "horoyoi" set (2019–2026 reviews) · horoyoi set: a draft beer or other drink with two small dishes, ¥1,000 (January 2017 ¥1,000; April 2025; October 2026; November 2026, tax included) · the small dishes change: small potatoes with simmered sardines (December 2019); simmered tofu with shiitake and sweet-spicy lotus root, with imo shochu and water (January 2022); salami and a homemade salad (October 2026); simmered sweet potato and cucumber-octopus vinegar dish (November 2026) · yakisoba made with udon, cabbage, meat and bonito flakes (¥600, January 2017; October 2026) · tamagoyaki (October 2026); pork kimchi (April 2025); kimchi (December 2019) · draft beer and highballs (2022) · about ¥1,000–3,000 a head (reviews)',
    website: null, gmaps: gm('新ばし リド飲食街 京都'), menu_url: null,
    notes: '[Izakaya · Rido Dining Street by Kyoto Station, a Showa karaoke counter] A long-counter bar in the old Rido alley north of Kyoto Station, passed from mother to daughter over some 60 years (2019 review): a ¥1,000 set of a beer and two home-style dishes, udon yakisoba, karaoke with prizes for the day\'s lucky score, and regulars who draw newcomers in. Cash only; closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'A November 2019 reviewer writes: "The restaurant is run by a woman, who is following in the footsteps of her mother; it has been around for 60 years". The same reviewer counted 12 shops in Rido Dining Street, 8 of them run by women and all 8 with karaoke. Reviewers describe "a lovely lady who creates a warm environment" (September 2019), "an older lady … sitting gracefully at the helm" (January 2022), and an owner who was "particularly friendly", with a "charming young lady" also behind the counter later in the evening (April 2025). In October 2026 a reviewer wrote that the space "created by the owner and regulars is filled with a genuine local vibe", with no commercial atmosphere aimed at tourists. Karaoke comes with a daily "service" score: hit it and a drink is on the house (October 2022; July 2026). A September 2019 reviewer noted that talk of the alley\'s demolition would not be surprising.',
      philosophy: null,
      specialty: 'The ¥1,000 horoyoi set; karaoke.',
      anecdotes: [
        { text: 'October 2022: "They offer special services based on your karaoke score, and on this occasion, scoring a final digit of \'1\' grants you a treat! … I was able to hit the jackpot and received an extra glass of draft beer."', source: R + 'B456066209/' },
        { text: 'October 2026: "Even the first-time guests, who might initially feel nervous, are naturally engaged in conversation at a comfortable distance, and before I knew it, I was laughing alongside the regulars next to me."', source: R + 'B537983809/' },
        { text: 'November 2026: "Here, they offer a \'Horo-yoi Set\' which includes two appetizers and a draft beer for just JPY 1000, tax included!"', source: R + 'B539566185/' },
      ],
      japanese_sources_summary: '食べログ: 新ばし、居酒屋、下京区七条通烏丸西入東境町180、京都駅から430m、月〜土18:00〜翌1:30、日曜休み、予約可、カード・電子マネー・QR不可、駐車場なし。口コミ (2017年1月〜2026年11月、英語): リド飲食街の昭和の雰囲気の長いカウンターのカラオケ居酒屋、母のあとを継いだ女性が営み60年 (2019年11月)、Horo-yoiセット1,000円 (生ビールなどと小鉢二品)、日替わりの小鉢 (小芋といわしの煮物、豆腐としいたけの煮物とれんこん、サラミとサラダ、さつまいもの煮物ときゅうりとたこの酢の物)、うどんの焼きそば (2017年は600円)、卵焼き、豚キムチ、カラオケの点数でサービス、トイレは共用 (2022年10月)、常連と初めての客が打ち解ける (2026年10月)、20時ごろから混む (2026年11月)。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B241532190', 'B422005956', 'B426767903', 'B445401737', 'B456066209', 'B503772170', 'B504576329', 'B510244699', 'B531777035', 'B537983809', 'B539566185'])) },
    cultural_comfort: { level: 'japanese', note: 'A counter of regulars and karaoke; cash only; phone may be Japanese only.' },
    safety: { ...SAFETY0 },
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市下京区七条通烏丸西入東境町180',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated April 2025 to November 2026.' },
    pin_source: `Tabelog ${TB} (34.989082, 135.758726) is within 1 m of kyoto_sakenoateya_jijibaba (same lot, 東境町180, Rido Dining Street), so offset about 6 m south to 34.989025; not pin-checked by the worker (integrator to check); nearest pin kyoto_sakenoateya_jijibaba 6.0m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B539566185/', R + 'B537983809/', R + 'B241532190/'],
    price_note: 'Prices from 2017–2026 reviews (tax included where stated).', last_checked: TODAY, items: [
      it('', '', 'Horoyoi set (a drink and two small dishes)', '¥1,000', 'Set', 'ask', 'ask', 'November 2026, tax included; also April 2025 and October 2026.', 'horoyoi_set'),
      it('', '', 'Yakisoba made with udon', null, 'Noodles', 'no', 'no', 'October 2026 (with meat and bonito flakes); ¥600 in January 2017.', 'yaki_udon'),
      it('', '', 'Tamagoyaki', null, 'Small plate', 'ask', 'no', 'October 2026.', 'tamagoyaki'),
      it('', '', 'Pork kimchi', null, 'Small plate', 'ask', 'no', 'April 2025.', 'buta_kimchi'),
    ] }, {
    cuisine: '京都駅そばのリド飲食街にある、長いカウンターの昭和のカラオケ居酒屋。1,000円の「Horo-yoiセット」で知られる (2019〜2026年の口コミ)・Horo-yoiセット: 生ビールなどの飲み物一杯と小鉢二品で1,000円 (2017年1月、2025年4月、2026年10月、2026年11月は税込)・小鉢は日替わり: 小芋といわしの煮物 (2019年12月)、豆腐としいたけの煮物とれんこんの甘辛煮、飲み物は芋焼酎の水割り (2022年1月)、サラミと自家製のサラダ (2026年10月)、さつまいもの煮物ときゅうりとたこの酢の物 (2026年11月)・キャベツと肉とかつお節のうどんの焼きそば (2017年1月は600円、2026年10月)・卵焼き (2026年10月)、豚キムチ (2025年4月)、キムチ (2019年12月)・生ビールとハイボール (2022年)・ひとり1,000〜3,000円ほど (口コミ)',
    neighborhood: '七条烏丸のリド飲食街。京都駅の北',
    gf_detail: '要確認: 日替わりの家庭的な小鉢 (豆腐、れんこん、いわし、小芋の煮物、サラダ)、うどんの焼きそば、豚キムチ、卵焼き (2019〜2026年の口コミ)。グルテンフリーの対応の記載なし。',
    vegan_detail: '要確認: 日替わりの小鉢に豆腐としいたけの煮物、れんこんの甘辛煮、さつまいもの煮物 (2022年、2026年) もあるが、いわし、サラミ、たこの料理もある。ヴィーガン対応の記載なし。',
    notes: '[居酒屋・京都駅そばのリド飲食街、昭和のカラオケのカウンター] 京都駅の北の古い路地、リド飲食街の長いカウンターの店。母から娘へ60年ほど続く (2019年の口コミ)。生ビールと家庭的な小鉢二品で1,000円のセット、うどんの焼きそば、その日の当たりの点数でサービスのあるカラオケ、初めての客も常連が迎え入れる。現金のみ、日曜休み。',
  });
}

// ================================================================ MON GALLERY AND WINE BAR
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26040924/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://mon.kyoto/';
  const H = day(['18:00', '26:00']);
  put({
    id: 'kyoto_mon_gallery_wine_bar', name: 'MON GALLERY AND WINE BAR', category: 'OMNI',
    lat: 35.00951183786351, lng: 135.74989038041494, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: homemade bread is the signature, and pizza, pasta, panini and gnocchi are served (2023–2026 reviews); there are also meat, duck, burrata and vegetable dishes; no gluten-free option stated.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask: vegetable dishes such as hummus, tomato and eggplant appear on the changing menu (September–October 2026), alongside meat, fish and cheese; no vegan option stated.',
    hours_raw: 'Tabelog: Mon, Thu–Sun 18:00–02:00; closed Tuesday and Wednesday. Reservations taken (Tabelog); a September 2025 visitor found it full but one seat the night before a holiday. Cards (Visa, Master, JCB, AMEX, Diners, UnionPay) and QR payments; no e-money (Tabelog). 6 seats (Tabelog; "six counter seats", November 2026). Non-smoking. Opened 21 January 2023 (Tabelog). The way in is up stairs to the left of the building to a first-floor door (February 2025 reviews). A February 2025 reviewer reports a one-drink policy with no non-alcoholic drinks besides small 30 ml teas. 5 min from Nijojo-mae, 10 min from Hankyu Omiya, on the Sanjo shopping street.',
    hours: { 0: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sanjo shopping street near Nijo Castle — 5 min from Nijojo-mae',
    cuisine: 'A six-seat natural-wine bar inside a gallery and tableware shop, run by the design studio MON, where a sommelier cooks and pairs (official site; 2023–2026 reviews) · natural and organic wines, explained and paired by the sommelier (2023–2026) · homemade bread, the signature: assorted bread platter (August 2024; February 2025), complimentary bread (September 2025) · duck breast with pear and grain-mustard sauce; burrata with warm strawberry and berry sauce; fried dried sardines with Tosa vinegar (February 2025) · baguette and pâté, Margherita pizza, carbonara (February 2025) · goma-tofu and fig; pasta (September 2025) · mortadella panini, squid-ink pasta, ice cream (April 2026, an event) · appetizer platter with vegetables, ham, hummus and dips; creamy soup with baguette; ice cream with crumble (September 2026) · bruschetta with blue fish and herbs; tomato and eggplant; meat with figs and manganji pepper; fried potatoes; chocolate terrine with ratafia (October 2026) · fried oden daikon; gnocchi with wild boar and venison (November 2026) · about ¥4,000–15,000 a head (reviews)',
    website: SITE, gmaps: gm('MON GALLERY AND WINE BAR 京都 上一文字町'), menu_url: null,
    notes: '[Wine bar · Sanjo shopping street near Nijo Castle, a gallery wine bar] A six-seat natural-wine counter inside a concrete-and-wood gallery and tableware shop run by a Kyoto design studio. A sommelier cooks seasonal small plates and pasta to pair with the wines; the homemade bread is the draw. One person runs it, so it can be slow. Open to 2:00; closed Tue–Wed.',
    chef_bio: { chef_name: null, roles: ['Owner-sommelier (unnamed)'], origin: null,
      background: 'MON株式会社 (MON Inc.), a Kyoto branding and design studio formerly called エコノシスデザイン (renamed February 2026), describes the shop as the gallery and wine bar it operates, with an online shop and an office in Naha (official site). Reviewers write that "the sommelier also handles the food" (February 2023) and that "the owner is a sommelier who has gained experience as a service professional" and "has also studied cooking in depth" (November 2026). One person runs the place: "the kitchen operates with just one person, the service was a bit slow" (September 2025); "the owner was very kind and managed everything" alone for a party of eight (December 2025); "only one staff member working … a bit of a hectic impression" (January 2026). A February 2025 reviewer waited about 30 minutes for the first dish, never received the promised water, and found it "not very accommodating for those who don\'t drink". Half of the large space sells tableware (February 2025); the interior has a fireplace (February 2025) and a concrete theme (November 2026).',
      philosophy: null,
      specialty: 'Natural wine pairings; homemade bread.',
      anecdotes: [
        { text: 'February 2023: "The sommelier also handles the food, and the pairings with natural wines are truly remarkable."', source: R + 'B518694370/' },
        { text: 'February 2025: "The bar has a one-drink policy, and they don\'t offer non-alcoholic options. They have tea, but only in small 30ml servings."', source: R + 'B502045472/' },
        { text: 'September 2025: "Since the kitchen operates with just one person, the service was a bit slow, but waiting patiently wasn\'t a bad experience. I appreciated the thoughtful gesture of being served complimentary bread as an appetizer."', source: R + 'B514150065/' },
      ],
      japanese_sources_summary: '公式サイト: MON株式会社 (2026年2月にエコノシスデザインから社名変更)、ブランディングを軸とした京都のデザイン事務所、MONが運営するギャラリー・ワインバー、オンラインショップ、京都オフィスは中京区上一文字町285 MONビルディング、沖縄オフィスは那覇市。食べログ: MON GALLERY AND WINE BAR、ワインバー、中京区上一文字町285 MON ビルディング、二条城前から徒歩5分、月・木〜日18:00〜翌2:00、火・水休み、予約可、カード・QR可、電子マネー不可、6席、禁煙、2023年1月21日オープン。口コミ (2023年2月〜2026年11月、英語): ギャラリーと器の店を兼ねたワインバー、ソムリエが料理も、自然派ワイン、自家製パン、鴨と洋梨、ブッラータ、ピザ、カルボナーラ、ニョッキ、一人で切り盛りで提供が遅いことも、ワンドリンク制でノンアルコールはほぼなし (2025年2月)。',
      confidence: 'low', sources: [SITE, TB].concat(rv(R, ['B490922192', 'B501458158', 'B502045472', 'B514150065', 'B518580125', 'B518694370', 'B525536939', 'B527662566', 'B536268659', 'B539223002'])) },
    cultural_comfort: { level: 'konnichiwa', note: 'Six seats; the sommelier explains the wines (January 2026); one-drink policy (February 2025).' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区上一文字町285 MON ビルディング',
    existence: { status: 'confirmed', checked: TODAY, note: 'Operator site lists the wine bar; Tabelog reviews dated February 2025 to November 2026.' },
    pin_source: `Tabelog ${TB} (35.009512, 135.749890); not pin-checked by the worker (integrator to check); nearest pin kyoto_sweets_cafe_keizo 98.7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B501458158/', R + 'B502045472/', R + 'B539223002/'],
    price_note: 'No menu prices on Tabelog; reviewers spent about ¥4,000–15,000 a head (2025–2026). A bottle of wine ¥7,000 and baguette with pâté ¥2,000 for four (February 2025).', last_checked: TODAY, items: [
      it('', '', 'Assorted homemade bread', null, 'Bread', 'no', 'ask', 'August 2024; February 2025.', 'bread_assortment'),
      it('', '', 'Duck breast with pear and grain-mustard sauce', null, 'Main', 'ask', 'no', 'February 2025.', 'duck_breast'),
      it('', '', 'Margherita pizza', null, 'Main', 'no', 'no', 'February 2025.', 'margherita'),
      it('', '', 'Gnocchi with wild boar and venison', null, 'Main', 'no', 'no', 'November 2026.', 'gnocchi_gibier'),
      it('', '', 'Chocolate terrine', null, 'Dessert', 'ask', 'ask', 'October 2026; paired with ratafia.', 'chocolate_terrine'),
    ] }, {
    cuisine: 'デザイン事務所MONが営むギャラリーと器の店の中の6席の自然派ワインのバー。ソムリエが料理もしてワインを合わせる (公式サイト、2023〜2026年の口コミ)・ソムリエが説明して合わせる自然派やオーガニックのワイン (2023〜2026年)・看板は自家製のパン: パンの盛り合わせ (2024年8月、2025年2月)、サービスのパン (2025年9月)・鴨胸肉の洋梨と粒マスタードのソース、ブッラータの温かいいちごとベリーのソース、干しいわしのフライの土佐酢 (2025年2月)・バゲットとパテ、マルゲリータ、カルボナーラ (2025年2月)・ごま豆腐といちじく、パスタ (2025年9月)・モルタデッラのパニーニ、イカ墨のパスタ、アイスクリーム (2026年4月、イベント)・野菜、ハム、フムスとディップの前菜の盛り合わせ、クリーミーなスープとバゲット、クランブルのアイスクリーム (2026年9月)・青魚とハーブのブルスケッタ、トマトとなす、いちじくと万願寺とうがらしの肉料理、フライドポテト、チョコレートのテリーヌとラタフィア (2026年10月)・おでんの大根のフライ、いのししと鹿のニョッキ (2026年11月)・ひとり4,000〜15,000円ほど (口コミ)',
    neighborhood: '二条城近くの三条の商店街。二条城前から徒歩5分',
    gf_detail: '要確認: 看板は自家製のパンで、ピザ、パスタ、パニーニ、ニョッキも (2023〜2026年の口コミ)。肉、鴨、ブッラータ、野菜の料理もある。グルテンフリーの対応の記載なし。',
    vegan_detail: '要確認: 替わるメニューにフムス、トマト、なすなど野菜の料理もある (2026年9〜10月) が、肉、魚、チーズも。ヴィーガン対応の記載なし。',
    notes: '[ワインバー・二条城近くの三条の商店街、ギャラリーのワインバー] 京都のデザイン事務所が営む、コンクリートと木のギャラリーと器の店の中の6席の自然派ワインのカウンター。ソムリエが季節の小皿やパスタを作ってワインに合わせ、自家製パンが評判。一人で切り盛りするので時間がかかることも。深夜2時まで、火・水休み。',
  });
}

// ================================================================ ふぐ・かに・はも 輝月
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26036172/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:00'], ['16:00', '22:30']);
  put({
    id: 'kyoto_fugu_kani_hamo_26036172', name: 'ふぐ・かに・はも 輝月', category: 'OMNI',
    lat: 34.98824762788037, lng: 135.76045110019274, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: courses include fugu kara-age, crab and hamo tempura, ponzu and soy-based sauces (Tabelog courses; 2026 reviews); no gluten-free option stated.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fugu, crab and hamo restaurant; every course is built on seafood (Tabelog courses; 2026 reviews).',
    hours_raw: 'Tabelog: daily 11:30–15:00 (L.O. 14:00) and 16:00–22:30 (L.O. 22:00); open year-round. Reservations online or by phone (Tabelog). Dinner service charge ¥400 per person, à la carte or course (Tabelog). Cards (Visa, Master, JCB, AMEX, Diners) and QR payments; no e-money (Tabelog). 99 seats with private rooms for 2 to 30 and a tatami room for up to 28 (Tabelog). Non-smoking; ashtray on the 2F balcony. Children welcome, with a kids\' menu (Tabelog). Opened 22 June 2021 (Tabelog). On the 2nd floor of ブライトン京都駅前, 2 min from the subway Kyoto Station, 5 min from JR Kyoto Station.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kyoto Station north, near Kyoto Tower — 5 min from JR Kyoto Station',
    cuisine: 'A private-room restaurant by Kyoto Station for tiger-puffer fugu, crab and, in summer, hamo, as courses or à la carte (Tabelog official; 2026 reviews) · fugu courses (Tabelog, tax included): Fugu Course A — sashimi (tessa), hot pot (tecchiri), kara-age, rice porridge, 6 dishes ¥7,200; Fugu Course B — grilled fugu, fugu sushi, kara-age, 6 dishes ¥7,200; Fugu Full Course — grilled fugu and tecchiri, sashimi, kara-age, 7 dishes ¥8,900 · live and aged fugu compared; hire-zake (fin sake) (Tabelog) · lunch: grilled-crab course with crab sashimi, crab vinegar, crab sushi and crab tempura ¥5,800 (February 2026); Fugu Full Course Lunch, 7 dishes ¥6,300 (November 2026) · fugu sashimi ¥1,300 à la carte (September 2026); fugu skin, grilled soft roe (+¥2,200, October 2026) · summer natural/live hamo grilled course: hamo in vinegar miso, hamo sashimi with plum sauce, hamo tempura, grilled hamo, hamo sushi (July 2026) · vanilla or matcha ice cream to finish (2026) · Kyoto sake (April 2026); all-you-can-drink +¥2,200 (Tabelog)',
    website: null, gmaps: gm('ふぐ・かに・はも 輝月 京都駅'), menu_url: TB + 'dtlmenu/',
    notes: '[Fugu & crab · Kyoto Station, private rooms] A large fugu, crab and hamo restaurant by Kyoto Tower, almost all private rooms: fugu courses of sashimi, kara-age, grilled fugu and hot pot from ¥7,200, crab lunches, summer hamo, and fugu sashimi à la carte. Open daily, lunch and dinner; families and groups welcome. Fast-paced service.',
    chef_bio: { chef_name: null, roles: ['Operator: 株式会社輝樹 (Tabelog invoice registration; NTA registry)'], origin: null,
      background: 'The Tabelog invoice number T8120101063281 is registered to 株式会社輝樹 of Habikino, Osaka (NTA registry); no other restaurant of the company was found. Live fugu swim in a tank outside the entrance (March and November 2026). Reviewers praise the private rooms (February, March, May, September 2026) and staff who were "incredibly accommodating towards the kids" with a large group (June 2026). Several mention speed: "the pace at which the dishes are served is impressively fast" (March 2026); a solo diner in October 2026 had the kara-age and hot pot "all at once, like a storm", 30 minutes after entering, and was told bluntly to eat the kara-age while hot; a November 2026 group found the service "a bit slow". In February 2026 the hot pot was not offered at a lunch because of flu and COVID-19 outbreaks (one review). Reviewers rate the fugu above the crab (May 2026) and found the crab sushi bland (February 2026).',
      philosophy: null,
      specialty: 'Fugu courses; grilled crab; summer hamo.',
      anecdotes: [
        { text: 'March 2026: "I wanted my university student son, who had never tried fugu before, to experience the taste of adulthood in Kyoto before leaving the city. … Thank you for taking our photos."', source: R + 'B525035826/' },
        { text: 'July 2026: "Once the skin was nicely charred, I flipped it over and quickly grilled it. I enjoyed it with a sweet salt that enhanced its flavor, a ponzu sauce that balanced the acidity and soy sauce, and a refreshing touch of lemon!"', source: R + 'B532139561/' },
        { text: 'November 2026: "The hire-zake (sake with fugu fin) was made by soaking the fin in heated sake, then igniting it for a brief moment to enhance the aroma."', source: R + 'B539628724/' },
      ],
      japanese_sources_summary: '食べログ公式: ふぐ・かに・はも 輝月、ふぐ・かに・居酒屋、下京区東塩小路町711-8 ブライトン京都駅前 2F、地下鉄京都駅から徒歩2分、JR京都駅から徒歩5分、毎日11:30〜15:00 (L.O.14:00)、16:00〜22:30 (L.O.22:00)、年中無休、ディナーはサービス料ひとり400円、カード・QR可、電子マネー不可、99席、個室2〜30名、座敷は最大28名、禁煙 (2Fバルコニーに灰皿)、子ども可・キッズメニュー、2021年6月22日オープン、ふぐコースA・B 7,200円、ふぐフルコース8,900円、活ふぐと熟成ふぐ、ひれ酒、飲み放題は2,200円追加。国税庁: 登録番号T8120101063281は株式会社輝樹 (大阪府羽曳野市)。口コミ (2026年2月〜11月、英語): 焼きがにのランチコース5,800円、ふぐフルコースランチ7品6,300円、てっさ1,300円、夏の活はもの焼きコース、個室、子ども連れに親切、料理の出るのが速い、入口の水槽に活ふぐ。',
      confidence: 'low', sources: [TB, TB + 'dtlmenu/', 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=8120101063281'].concat(rv(R, ['B522536222', 'B522556625', 'B522615903', 'B523448869', 'B525035826', 'B525371325', 'B526207893', 'B527818968', 'B529819328', 'B532139561', 'B533861568', 'B535581488', 'B537751617', 'B539628724', 'B539962266'])) },
    cultural_comfort: { level: 'konnichiwa', note: 'Course menus bookable online on Tabelog; private rooms; phone may be Japanese only.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区東塩小路町711-8 ブライトン京都駅前 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing with reviews dated February to November 2026.' },
    pin_source: `Tabelog ${TB} (34.988248, 135.760451); not pin-checked by the worker (integrator to check); nearest pin kyoto_wanone_kyoto_ekimae 26.2m (hidden), kyoto_gochiya_shiokoji 84.1m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B522556625/', R + 'B539962266/', R + 'B535581488/'],
    price_note: 'Course prices from the Tabelog official listing (tax included); lunch and à la carte prices from 2026 reviews. Dinner adds a ¥400 service charge per person.', last_checked: TODAY, items: [
      it('', '', 'Fugu Course A (sashimi, hot pot, kara-age, rice porridge; 6 dishes)', '¥7,200', 'Course', 'no', 'no', 'Tabelog official, tax included.', 'fugu_course'),
      it('', '', 'Fugu Full Course (grilled fugu, tecchiri, sashimi, kara-age; 7 dishes)', '¥8,900', 'Course', 'no', 'no', 'Tabelog official, tax included.', 'fugu_full_course'),
      it('', '', 'Fugu Full Course Lunch (7 dishes)', '¥6,300', 'Lunch course', 'no', 'no', 'November 2026.', 'fugu_lunch_course'),
      it('', '', 'Grilled-crab lunch course', '¥5,800', 'Lunch course', 'no', 'no', 'February 2026; includes crab tempura.', 'yakigani_course'),
      it('', '', 'Fugu sashimi (tessa)', '¥1,300', 'À la carte', 'ask', 'no', 'September 2026.', 'tessa'),
    ] }, {
    cuisine: '京都駅そばの個室中心の店。とらふぐ、かに、夏ははもを、コースやアラカルトで (食べログ公式、2026年の口コミ)・ふぐのコース (食べログ、税込): ふぐコースA てっさ、てっちり、唐揚げ、雑炊の6品7,200円、ふぐコースB 焼きふぐ、ふぐ寿司、唐揚げの6品7,200円、ふぐフルコース 焼きふぐとてっちり、てっさ、唐揚げの7品8,900円・活ふぐと熟成ふぐの食べ比べ、ひれ酒 (食べログ)・ランチ: かに刺し、かに酢、かに寿司、かにの天ぷらの付く焼きがにのコース5,800円 (2026年2月)、ふぐフルコースランチ7品6,300円 (2026年11月)・アラカルトのてっさ1,300円 (2026年9月)、ふぐの皮、白子焼き (2,200円追加、2026年10月)・夏の天然・活はもの焼きコース: はもの酢味噌、はもの刺身の梅だれ、はもの天ぷら、焼きはも、はも寿司 (2026年7月)・しめはバニラか抹茶のアイス (2026年)・京都の日本酒 (2026年4月)、飲み放題は2,200円追加 (食べログ)',
    neighborhood: '京都駅の北、京都タワーの近く。JR京都駅から徒歩5分',
    gf_detail: 'グルテンフリーではない: コースにふぐの唐揚げ、かにやはもの天ぷら、ポン酢や醤油のたれ (食べログのコース、2026年の口コミ)。グルテンフリーの対応の記載なし。',
    vegan_detail: 'ヴィーガン不可: ふぐ、かに、はもの店で、コースはどれも魚介 (食べログのコース、2026年の口コミ)。',
    notes: '[ふぐ・かに・京都駅、個室] 京都タワー近くの、ほぼ個室の大きなふぐ、かに、はもの店。てっさ、唐揚げ、焼きふぐ、てっちりのふぐのコースは7,200円から、かにのランチ、夏のはも、アラカルトのてっさも。年中無休で昼も夜も、家族や団体も歓迎。料理の出るのは速め。',
  });
}

save();
