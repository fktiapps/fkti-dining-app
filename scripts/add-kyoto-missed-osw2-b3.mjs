// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 3.
//   core (queue.mjs kyoto-missed next core 200, 2026-11-05, lane ids in order):
//   - 京都寺町 鯛めし槇 (26039745) skipped: same-concept branch of kyoto_takasegawa_maki (see skip)
//   + 炭焼工房 まほろば Sumibi Kobo Mahoroba (13-seat yakitori and basashi counter near Nishiki; open late)
//   - Lilou (26026701) skipped: Tabelog listing marked Relocated
//   + 丼と手巻き 玄海 錦市場店 Don to Temaki Genkai (seafood bowls and open hand rolls by Nishiki; since 2024)
//   notable (queue.mjs kyoto-missed next notable 200, lane ids in order):
//   - 麩嘉 府庁前本店 (26001531) skipped: main shop of a brand already in data (kyoto_fuka_nishiki)
//   + 割烹 やました Kappou Yamashita (Kiyamachi Nijo kappo since 1983; à la carte from the fish on show)
//   + りきちゃん 祇園店 Riki Chan Gion (charcoal-grilled Kuroge wagyu fillet and Chateaubriand off Hanamikoji)
//   None of the added shops is in data/kyoto.json: grep by id, name (まほろば/Mahoroba, 玄海/Genkai, やました/Yamashita,
//   りきちゃん/Riki Chan) and address (大日町403, 船屋町389, 上樵木町491, 祇園町南側572) found none.
//   Group check: りきちゃん — reviews name a Toyonaka shop (May 2026) and Tabelog lists 東京西麻布店 and 焼肉パンチ
//   りきちゃん別邸 (Osaka): 4 shops with none in data, a small group, so drafted (working line, 2026-11-02).
//   Pins: Tabelog /en/ point, cross-checked with GSI only.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-3');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26039745', '京都寺町 鯛めし槇: same-concept branch (Uwajima tai-meshi) of a group already in data — kyoto_takasegawa_maki’s background, from the official site, lists four shops: 高瀬川 槇, 鯛めし槇 金閣寺店, 京都寺町 鯛めし槇 and 鯛めし槇 松山店');
skip('26026701', 'Lilou: Tabelog listing marked Relocated ("This is information from before the relocation"); no new listing in the crawl');
skip('26001531', '麩嘉 府庁前本店: main shop of a brand already in data (kyoto_fuka_nishiki); per that record’s official-site summary Fuka has two shops, 麩嘉 本店 (no retail; phone or online orders) and 麩嘉 錦店');

// ================================================================ 炭火工房 まほろば
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26025177/'; const R = TB + 'dtlrvwlst/';
  const MENU = TB + 'dtlmenu/';
  const INV = 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=8810964833625';
  const H = day(['17:00', '24:00']); const LATE = day(['17:00', '03:00']);
  put({
    id: 'kyoto_sumibi_kobo_mahoroba', name: '炭焼工房 まほろば (Sumibi Kobo Mahoroba)', category: 'MOM_AND_POP',
    lat: 35.004871, lng: 135.766431, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Skewers come with salt or a light tare; the menu has many fried dishes (kara-age, chicken nanban, chicken-skin gyoza) and kamameshi; no gluten information is published (Tabelog menu, August 2025; 2025 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A chicken and horse-meat house; grilled vegetables (manganji peppers, shiitake, lotus root, yam, thick fried tofu) and salads are on the menu, but seasonings are not stated (Tabelog menu, August 2025).',
    hours_raw: '17:00–24:00 (last order 23:30) Sunday to Thursday; 17:00–03:00 (last order 2:30) Friday and Saturday; closes when the chicken runs out; closed irregularly (Tabelog). Two-hour limit at weekends, before holidays and on holidays, and from 28 December to 3 January (Tabelog). Chicken sashimi is not served at present (Tabelog; August 2026). Table charge ¥380 (Tabelog). 13 seats — about 8–9 at the counter and one table for four (2025 reviews); book ahead, it fills by 18:00 (August 2026). Smoking allowed at all seats; cards and iD/QUICPay (Tabelog). Up steep stairs on the 2nd floor of the 詩の小路プラスビル (November 2024; Tabelog). 5 min walk from Hankyu Kawaramachi Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: LATE, 5: LATE, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Just south of Nishiki Market — 5 min from Kyoto Kawaramachi Stn',
    cuisine: 'Small charcoal yakitori counter that also serves basashi (Tabelog; 2024–26 reviews) · skewers from ¥250 (negima, seseri, liver, heart, bonjiri, skin, gizzard, homemade tsukune), thigh and wings ¥300, Kyoto red chicken ¥450 (limited), chef’s five-skewer platter ¥1,200 · basashi by the cut — fatty brisket, tenderloin, outside skirt, mane, liver, heart and more — ¥1,480 each · grilled vegetables ¥530–630 · chicken kara-age, yurinchi and tartare chicken nanban ¥750 each, chicken-skin gyoza ¥580, fried camembert ¥580 · potato salad ¥580, grilled-eggplant ohitashi ¥550 (Tabelog menu, August 2025) · kamameshi cooked to order in an iron pot, e.g. 1.5 go (October 2025) · lychee-orange sour (August 2026)',
    website: null, gmaps: gm('炭焼工房 まほろば 京都 御幸町'), menu_url: MENU,
    notes: "[Yakitori · Nishiki, a late-night charcoal counter] A 13-seat yakitori counter up a steep stair just south of Nishiki, open to midnight and to 3:00 on Friday and Saturday. Skewers from ¥250 come off the charcoal in front of you — the chef's five-skewer platter is ¥1,200 — and the basashi is served by the cut, from tenderloin to mane, at ¥1,480. Finish with kamameshi cooked to order. Reviewers praise the bright, attentive staff; one April 2025 diner found the kamameshi undercooked and the fried dishes tired, and a June 2025 diner found the jazz loud. Smoking allowed throughout; book ahead.",
    chef_bio: { chef_name: '山本 明生', roles: ['Owner (the invoice holder)'], origin: null,
      background: 'The invoice register lists an individual, 山本 明生, as the holder of the shop’s invoice number (registered 1 October 2023). Reviewers describe bright, attentive staff who are kind to international guests (December 2024) and grill in view of the counter (January 2025). A December 2024 diner noticed many foreign customers and a full house; an August 2026 diner noticed few foreigners and suggested the shop may be hard to find.',
      philosophy: null, specialty: 'Charcoal skewers; basashi by the cut; kamameshi.',
      anecdotes: [
        { text: '"Be careful on the stairs; they are quite steep, especially if you\'re tipsy on your way out!" — November 2024.', source: R + 'B495418871/' },
        { text: 'An April 2025 diner found the kamameshi undercooked, the fried cartilage and kara-age tired and the yakitori tough, and did not plan to return.', source: R + 'B505773137/' },
        { text: 'A June 2025 diner enjoyed the slow-grilled skewers but found the seating close and the jazz loud.', source: R + 'B507970163/' },
        { text: '"At 5:30 PM, I was the first customer at the counter. By 6 PM, the cozy interior was completely full." — August 2026.', source: R + 'B533843162/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・焼き鳥・鶏料理、中京区御幸町通錦小路下ル大日町403-2 詩の小路プラスビル 2F、阪急河原町駅から徒歩5分、月〜木・日 17:00〜24:00 (L.O. 23:30)、金・土 17:00〜翌3:00 (L.O. 2:30)、鶏がなくなり次第終了、不定休、週末・祝前日・祝日と12月28日〜1月3日は2時間制、鶏刺しは現在提供なし、お通し税込380円、13席、喫煙可、カード・iD・QUICPay 可、インボイス登録: 山本 明生 (個人)、メニュー (英語版、2025年8月更新): 串250円から、おまかせ5本1,200円、馬刺し各部位1,480円、唐揚げ・油淋鶏・チキン南蛮750円。口コミ (2024年11月〜2026年8月、英語): 急な階段、カウンター8〜9席とテーブル1卓、釜飯、明るい接客、全席喫煙可。',
      confidence: 'medium', sources: [TB, MENU, INV, R + 'B483139946/', R + 'B495418871/', R + 'B498471098/', R + 'B498494938/', R + 'B498643732/', R + 'B498681065/', R + 'B505773137/', R + 'B507970163/', R + 'B515429720/', R + 'B515550278/', R + 'B515773501/', R + 'B533843162/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; call out your order over the music; smoking allowed throughout.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区御幸町通錦小路下ル大日町403-2 詩の小路プラスビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with menu updated August 2025; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.004871, 135.766431); cross-checked: GSI 京都府京都市中京区大日町403番地 (lot) 33m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU],
    price_note: 'Tabelog menu, last updated 25 August 2025 (prices including tax).', last_checked: TODAY, items: [
      it('', '', 'Chef’s five-skewer platter', '¥1,200', 'Yakitori', 'ask', 'no', '', 'omakase_5'),
      it('', '', 'Negima skewer', '¥250', 'Yakitori', 'ask', 'no', '', 'negima'),
      it('', '', 'Homemade tsukune skewer', '¥250', 'Yakitori', 'ask', 'no', '', 'tsukune'),
      it('', '', 'Basashi, tenderloin', '¥1,480', 'Basashi', 'ask', 'no', 'Each cut ¥1,480.', 'basashi_fillet'),
      it('', '', 'Chicken kara-age', '¥750', 'Fried', 'no', 'no', '', 'karaage'),
      it('', '', 'Grilled shiitake', '¥630', 'Grilled vegetables', 'ask', 'ask', '', 'shiitake'),
    ] }, {
    cuisine: '馬刺しもある炭火焼き鳥の小さなカウンター (食べログ、2024〜2026年の口コミ)・串は250円から (ねぎま、せせり、レバー、ハツ、ぼんじり、皮、砂ずり、自家製つくね)、もも・手羽300円、Kyoto red chicken 450円 (数量限定)、おまかせ5本1,200円・馬刺しは部位ごとに各1,480円 (ヘレ、たてがみ、レバー、ハツなど)・焼き野菜530〜630円・唐揚げ、油淋鶏、タルタルのチキン南蛮各750円、鶏皮餃子580円、カマンベールフライ580円・ポテトサラダ580円、焼きなすのおひたし550円 (食べログのメニュー、2025年8月)・注文を受けて炊く鉄釜の釜飯、1.5合など (2025年10月)・ライチオレンジサワー (2026年8月)',
    neighborhood: '錦市場のすぐ南。京都河原町駅から徒歩5分',
    gf_detail: '要確認。串は塩か軽いたれ。揚げ物 (唐揚げ、チキン南蛮、鶏皮餃子) や釜飯も多い。グルテンの情報は公開されていない (食べログのメニュー、2025年8月、2025年の口コミ)。',
    vegan_detail: '要確認。鶏と馬肉の店。焼き野菜 (万願寺とうがらし、椎茸、れんこん、長芋、厚揚げ) やサラダもあるが、味付けは書かれていない (食べログのメニュー、2025年8月)。',
    notes: '[焼き鳥・錦、夜遅くまでの炭火カウンター] 錦のすぐ南、急な階段を上がった13席の焼き鳥のカウンター。24時まで、金・土は翌3時まで。串は250円から目の前の炭火で焼かれ、おまかせ5本は1,200円。馬刺しはヘレからたてがみまで部位ごとに1,480円。締めは注文を受けて炊く釜飯。明るく気配りのある接客が好評だが、2025年4月の客は釜飯が固く揚げ物も今ひとつと書き、6月の客はジャズの音が大きいと感じた。全席喫煙可、予約がおすすめ。',
  });
}

// ================================================================ 割烹 やました
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26001867/'; const R = TB + 'dtlrvwlst/';
  const SERAI = 'https://serai.jp/?p=253979';
  const T = day(['11:30', '14:00'], ['17:00', '23:00']);
  put({
    id: 'kyoto_kappou_yamashita', name: '割烹 やました (Kappou Yamashita)', category: 'MOM_AND_POP',
    lat: 35.012164, lng: 135.770682, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask the chef at the counter. Dishes are cooked to order from the fish on show — sashimi with soy or ponzu, simmered dishes in dashi, tempura, miso-marinated grills — and no gluten information is published (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish-led kappo, with dishes built on dashi (2025–26 reviews; the 2016 Sarai feature names kombu and bonito dashi).',
    hours_raw: 'Lunch 11:30–14:00 (last order 13:30) and dinner from 17:00, last order 22:00 (23:00 in summer), Tuesday to Sunday; closed Monday (Tabelog). The Tabelog notes also say "no lunch service", but reviewers had lunch courses in October 2025 and March 2026. À la carte at lunch and dinner (Tabelog); a lunch course, Sakura, was ¥7,700 plus 10% service (March 2026). Bookings taken; a same-day booking worked in August 2026. 30 seats: 14 at the counter, 16 at tables upstairs, private room for 8; designated smoking area; cards (Tabelog). On Kiyamachi south of Nijo by the Takase River; 3 min walk north along Kiyamachi from Kyoto Shiyakusho-mae Stn (Tabelog).',
    hours: { 1: T, 2: T, 3: T, 4: T, 5: T, 6: T }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi south of Nijo, by the Takase River — 3 min from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Kiyamachi kappo of seasonal fish and Kyoto cooking, ordered à la carte from what is on show or as a course (Tabelog; 2025–26 reviews) · spring: sansho hot pot finished with somen (April 2026); summer: hamo as boiled otoshi or charcoal shimo-yaki with myoga and vinegar soy (August 2026), junsai, steamed kuze (July 2026); autumn: sanma with its innards, matsutake fried or as ohitashi, sweetfish, kue sashimi with ponzu (August–October 2026); winter: fugu sashimi and fried fugu, grilled bear, oysters (November 2025); whole suppon hot pot (August 2026) · Sakura lunch course ¥7,700 plus 10% service: hassun, five-kind sashimi, simmered vegetables, grilled sea bream, roast duck, tempura, Matsuba crab in vinegar, rice, miso soup, pickles, cherry-blossom ice cream (March 2026)',
    website: null, gmaps: gm('割烹 やました 木屋町二条'), menu_url: null,
    notes: "[Kappo · Kiyamachi Nijo, à la carte by the Takase River] A long-running kappo on Kiyamachi by the Takase River, founded in 1983 by a reviewer's account and run by owner 山下 茂, a cook of more than fifty years by a 2016 magazine profile. Sit at the 14-seat counter and choose from the fish on show — the chef suggests how to cook it: hamo grilled over charcoal in summer, matsutake and sanma in autumn, fugu and kue in winter. One regular has logged 119 visits. Lunch courses from ¥7,700 plus service; dinner à la carte runs ¥15,000–30,000 a head. Closed Monday.",
    chef_bio: { chef_name: '山下 茂', roles: ['Owner and itamae (Sarai, October 2016 issue: "店主の山下茂さん"); a March 2026 reviewer names "the owner, Mr. Yamashita"'], origin: null,
      background: 'Per Sarai (October 2016 issue, reposted online in 2017): 山下 茂, then 68, a cook of more than 50 years, known in Kyoto for skill and big-hearted hospitality (男気ある接客); remembers regulars’ tastes and suggests dishes to first-time guests by age and way of ordering, e.g. two or three seasonal kinds of sashimi for an older couple, many small kinds for two women; prices then were from ¥4,000 at lunch and ¥8,000 at dinner. A March 2026 review gives the founding year as 1983. The Tabelog Award 2019 Bronze.',
      philosophy: 'Per Sarai (2016), quoting 山下 茂: "遠慮なく食べたいものを言っていただくのが一番" — the best thing is for guests to say freely what to eat that day.',
      specialty: 'Hamo (shimo-yaki and otoshi); seasonal fish à la carte; hassun.',
      anecdotes: [
        { text: 'A regular logging a 117th visit in July 2026 was steered by the chef from akou to kuze for its better fat, steamed.', source: R + 'B11267391/' },
        { text: '"I always choose a seat at the counter, where I can discuss with the chef how to prepare the seasonal ingredients displayed." — November 2025.', source: R + 'B449902014/' },
        { text: 'A March 2026 lunch guest found the kitchen busy with evening preparations and the explanations of the dishes brief, but the course a fair price for a Kyoto kappo.', source: R + 'B524960618/' },
        { text: 'A June 2026 first-timer liked the friendly staff but wished for more Japanese sake.', source: R + 'B529790573/' },
      ],
      japanese_sources_summary: '食べログ: 魚介料理・日本料理、中京区木屋町通二条下ル上樵木町491-3、京都市役所前駅から木屋町を北へ徒歩3分、火〜土 11:30〜14:00 (L.O. 13:30)・17:00〜23:00、日 11:30〜14:00・17:00〜23:00、月曜休み、夜 17:00〜22:00 (L.O.)、夏は23:00 (L.O.) まで、昼夜ともアラカルト可、30席 (カウンター14、2階テーブル16)、個室 (8名)、分煙、カード可、The Tabelog Award 2019 Bronze。サライ (2016年10月号、2017年10月にウェブ掲載): 割烹やました、店主の山下茂さん (68歳)、料理歴50年以上、男気ある接客、常連の好みを把握、初めての客には年齢や注文の仕方を見て薦める、「遠慮なく食べたいものを言っていただくのが一番」、昼4000円〜、夜8000円〜 (当時)。口コミ (2025年10月〜2026年10月、英語): 1983年創業、カウンターで旬の素材から調理法を相談、鱧の焼き霜、松茸、ふぐ、クエ、すっぽん鍋、さくらコース7,700円 (サービス料10%別)。',
      confidence: 'medium', sources: [TB, SERAI, R + 'B11267391/', R + 'B449902014/', R + 'B493885976/', R + 'B514955358/', R + 'B516167301/', R + 'B518760921/', R + 'B520244160/', R + 'B524960618/', R + 'B529790573/', R + 'B533922211/', R + 'B534606031/', R + 'B538493788/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Sit at the counter and ask the chef what is good today; à la carte prices are not posted, so ask.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区木屋町通二条下ル上樵木町491-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.012164, 135.770682); cross-checked: GSI 京都府京都市中京区上樵木町 (town only, no lot match) 71m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B524960618/'],
    price_note: 'No menu is published; à la carte prices are not posted. Course price from a March 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Sakura lunch course (hassun, sashimi, simmered vegetables, grill, duck, tempura, crab, rice)', '¥7,700', 'Course', 'ask', 'no', 'March 2026; plus 10% service.', 'sakura_lunch'),
    ] }, {
    cuisine: '旬の魚と京料理の木屋町の割烹。並んだ素材からアラカルトか、コースで (食べログ、2025〜2026年の口コミ)・春は山椒鍋、締めにそうめん (2026年4月)、夏は鱧の落としや炭火の焼き霜にみょうがと酢醤油 (2026年8月)、じゅんさい、kuze の蒸し物 (2026年7月)、秋は秋刀魚のわた和え、松茸の天ぷらやおひたし、鮎、クエの刺身をポン酢で (2026年8〜10月)、冬はふぐ刺しとふぐの唐揚げ、熊の焼き物、牡蠣 (2025年11月)、すっぽん鍋 (2026年8月)・ランチのさくらコース7,700円 (サービス料10%別): 八寸、刺身5種、炊き合わせ、鯛の焼き物、鴨ロース、天ぷら、Matsuba crab の酢の物、ご飯、味噌汁、香の物、桜のアイス (2026年3月)',
    neighborhood: '二条の南の木屋町、高瀬川沿い。京都市役所前駅から徒歩3分',
    gf_detail: 'カウンターで要確認。並んだ魚から注文に応じて調理し、醤油やポン酢の刺身、だしの炊き物、天ぷら、味噌漬けの焼き物など。グルテンの情報は公開されていない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚が中心の割烹で、料理はだしを使う (2025〜2026年の口コミ、2016年のサライは昆布と鰹のだしに触れている)。',
    notes: '[割烹・木屋町二条、高瀬川沿いのアラカルト] 高瀬川沿いの木屋町の老舗割烹。口コミによれば1983年創業で、2016年の雑誌の紹介では店主の山下 茂さんは料理歴50年以上。14席のカウンターに座り、並んだ魚を選ぶと大将が調理法を提案してくれる。夏は炭火の鱧の焼き霜、秋は松茸と秋刀魚、冬はふぐとクエ。119回通った常連もいる。ランチのコースは7,700円 (サービス料別) から、夜のアラカルトは1人15,000〜30,000円ほど。月曜休み。',
  });
}

// ================================================================ りきちゃん 祇園店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26036373/'; const R = TB + 'dtlrvwlst/';
  const COURSE = TB + 'party/';
  const CORP = 'https://www.houjin-bangou.nta.go.jp/henkorireki-johoto.html?selHouzinNo=9120901044728';
  const H = day(['13:00', '23:00']);
  put({
    id: 'kyoto_rikichan_gion', name: 'りきちゃん 祇園店 (Riki Chan Gion)', category: 'OMNI',
    lat: 35.003486, lng: 135.774536, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking: Tabelog marks allergy information as available. The meat is served with a house dipping sauce (the same as Kimiyah’s, a July 2026 reviewer says), ponzu, lemon or salts; kimchi and soup come with every course (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses only, each built on beef fillet or Chateaubriand and tongue; no meat-free course (Tabelog).',
    hours_raw: '13:00–23:00 (last order 22:00) every day (Tabelog). Reservation only; the 13:00–15:00 slot serves the evening menu and must be booked at least two days ahead; same-day bookings, private rooms, non-smoking requests and parties of 6+ by phone (Tabelog). Charcoal is lit for your booked time, so arriving early may mean no seat; a same-day cancellation may be charged 100% (Tabelog). Courses only, one per person aged 12 and over; children up to elementary age may share an adult’s meal (Tabelog). 30 seats; private rooms for 2, 4 or 6 (10% room charge); designated smoking area, smoke-free except private rooms when children or pregnant guests are present (Tabelog). Cards (Tabelog). Just off Hanamikoji, 8 min walk from Gion-Shijo Stn (Tabelog). Opened 3 August 2021 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Just off Hanamikoji, Gion — 8 min from Gion-Shijo Stn',
    cuisine: 'Yakiniku of Kuroge wagyu fillet from unbred female cattle only, grilled over charcoal and pulled apart with a fork; the Kyoto shop of the first disciple of Kimiyah in Ikoma, Nara (2026 reviews) · courses only, before tax: fillet or Chateaubriand 200 g ¥21,000, 300 g ¥23,000; fillet-and-Chateaubriand tasting 200 g ¥21,000, 300 g ¥23,000 (Tabelog) · every course: three kimchi (napa cabbage, cucumber, nagaimo), seasonal grilled vegetables, thick-cut special tongue, the main meat, soup simmered from fillet and vegetables, rice, seasonal fruit (2026 reviews) · condiments: grated daikon with ponzu, the house sauce, lemon, Himalayan salt, truffle salt (July 2026)',
    website: null, gmaps: gm('りきちゃん 祇園店'), menu_url: COURSE,
    notes: "[Yakiniku · Gion, fork-tender wagyu fillet] A machiya yakiniku off Hanamikoji serving only Kuroge wagyu fillet from unbred female cattle, by the first disciple of Nara's Kimiyah. The owner grills it on a teppan over charcoal and tears it with a fork; reviewers say the owner still checks the grilling at Kimiyah once a week. Courses only, ¥21,000–23,000 before tax: three kimchi, grilled vegetables, thick tongue, 200 or 300 g of fillet or Chateaubriand, a soup simmered from fillet, rice and fruit. The portions are big — some reviewers took meat home. Booking only; 13:00–23:00 daily.",
    chef_bio: { chef_name: null, roles: ['Owner, the first disciple of Kimiyah (Ikoma, Nara) by 2026 reviews; not named. Operator: 株式会社瀧 (Osaka; invoice T9120901044728)'], origin: null,
      background: 'Per 2026 reviews: the shop is run by the first disciple of the yakiniku house Kimiyah in Ikoma, Nara; it uses the same marinade, seasonings, sourcing, teppan and charcoal approach, and the owner checks the grilling at Kimiyah once a week (June and October 2026). A May 2026 reviewer had been to the Kimiya main shop and to Riki Chan in Toyonaka before this Gion shop. The invoice number on Tabelog (T9120901044728) belongs to 株式会社瀧, Chuo-ku, Osaka (NTA corporate-number site). Opened 3 August 2021 (Tabelog). Tabelog Yakiniku WEST "Tabelog 100" 2023–2026 (Tabelog’s Japanese award list; the English page labels 2024 and 2026 as Grill).',
      philosophy: null, specialty: 'Chateaubriand and fillet torn with a fork; special tongue; fillet soup.',
      anecdotes: [
        { text: '"For women, I think 200g will be quite satisfying. If it\'s not enough, we can accommodate additional servings." — the owner’s advice to a May 2026 diner who had booked 300 g.', source: R + 'B527332835/' },
        { text: 'An October 2026 regular on a third visit found the portions so large that the table took leftovers home.', source: R + 'B506989768/' },
        { text: 'A thirty-something couple in August 2026 found the fat a bit much by the end of a 300 g course.', source: R + 'B534682280/' },
      ],
      japanese_sources_summary: '食べログ: 焼肉、東山区祇園町南側572-10、祇園四条駅から徒歩8分、花見小路すぐ、毎日 13:00〜23:00 (L.O. 22:00)、完全予約制、13:00〜15:00 は夜と同じメニューで2日前までの予約、当日予約・個室・禁煙・6名以上は電話で、炭は予約時間に合わせて用意、当日キャンセルは100%の場合あり、ヘレかシャトーブリアンのコースのみ、12歳以上は1人1コース、30席、個室 (2・4・6名、料理代の10%)、分煙、カード可、2021年8月3日オープン、インボイス T9120901044728、コース (税抜): ヘレ・シャトーブリアン各200g 21,000円、300g 23,000円、焼肉 WEST 百名店 2023〜2026。国税庁法人番号公表サイト: 株式会社瀧 (大阪市中央区)。口コミ (2026年5〜10月、英語): Kimiyah (奈良・生駒) の一番弟子の店、未経産の雌牛のみ、フォークで裂いて焼く、キムチ3種、焼き野菜、特選タン、ヘレのスープ、季節の果物。',
      confidence: 'medium', sources: [TB, COURSE, CORP, R + 'B506989768/', R + 'B527332835/', R + 'B528386705/', R + 'B528545703/', R + 'B531284654/', R + 'B531400972/', R + 'B532027488/', R + 'B532328905/', R + 'B532806670/', R + 'B534462788/', R + 'B534682280/', R + 'B537768504/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead (by phone for same-day or special requests); do not arrive early; the owner grills for you.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町南側572-10',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with course prices; reviews dated through October 2026; Yakiniku WEST Tabelog 100 2026.' },
    pin_source: `Tabelog ${TB} (35.003486, 135.774536); cross-checked: GSI 京都府京都市東山区祇園町南側572番地 (lot) 49m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [COURSE],
    price_note: 'Tabelog course page (prices before tax); courses only.', last_checked: TODAY, items: [
      it('', '', 'Chateaubriand course, 200 g', '¥21,000', 'Course', 'ask', 'no', 'Before tax.', 'chateaubriand_200'),
      it('', '', 'Chateaubriand course, 300 g', '¥23,000', 'Course', 'ask', 'no', 'Before tax.', 'chateaubriand_300'),
      it('', '', 'Fillet course, 200 g', '¥21,000', 'Course', 'ask', 'no', 'Before tax.', 'filet_200'),
      it('', '', 'Fillet and Chateaubriand tasting course, 300 g', '¥23,000', 'Course', 'ask', 'no', 'Before tax.', 'tasting_300'),
    ] }, {
    cuisine: '未経産の雌牛だけの黒毛和牛のヘレを炭火で焼き、フォークで裂く焼肉。奈良・生駒の Kimiyah の一番弟子の京都の店 (2026年の口コミ)・コースのみ、税抜: ヘレかシャトーブリアン200g 21,000円、300g 23,000円、ヘレとシャトーブリアンの食べ比べ200g 21,000円、300g 23,000円 (食べログ)・どのコースも: キムチ3種 (白菜、きゅうり、長芋)、季節の焼き野菜、厚切りの特選タン、メインの肉、ヘレと野菜を煮込んだスープ、ご飯、季節の果物 (2026年の口コミ)・薬味: 大根おろしとポン酢、自家製のたれ、レモン、ヒマラヤの塩、トリュフ塩 (2026年7月)',
    neighborhood: '祇園、花見小路のすぐそば。祇園四条駅から徒歩8分',
    gf_detail: '予約時に要確認。食べログではアレルギー情報ありとなっている。肉は自家製のたれ (Kimiyah と同じと2026年7月の口コミ)、ポン酢、レモン、塩で。キムチとスープはどのコースにも付く (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。コースのみで、どれも牛ヘレかシャトーブリアンとタンが中心。肉なしのコースはない (食べログ)。',
    notes: '[焼肉・祇園、フォークで裂く和牛ヘレ] 花見小路そばの町家の焼肉。出すのは未経産の雌牛の黒毛和牛のヘレだけで、奈良の Kimiyah の一番弟子の店。店主が炭火の鉄板で焼き、フォークで裂いてくれる。口コミによれば今も週に一度 Kimiyah で焼きを確認しているという。コースのみで税抜21,000〜23,000円: キムチ3種、焼き野菜、厚切りタン、200gか300gのヘレかシャトーブリアン、ヘレのスープ、ご飯、果物。量が多く、持ち帰った客もいる。完全予約制、毎日13時〜23時。',
  });
}

// ================================================================ 丼と手巻き 玄海 錦市場店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26041125/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://don-and-roll-genkai.jp/';
  const H = day(['11:00', '15:00'], ['17:00', '21:00']);
  put({
    id: 'kyoto_genkai_nishiki', name: '丼と手巻き 玄海 錦市場店 (Don to Temaki Genkai Nishiki)', category: 'OMNI',
    lat: 35.005324, lng: 135.766297, cuisine_type: 'donburi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Bowls are dressed with a choice of three soy sauces or a sesame sauce, and the hand rolls include a kombu-zuke; Tabelog marks allergy information as available (Tabelog; 2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: every bowl and hand roll is seafood, served with fish-head soup or red-miso soup, and a bonito broth is poured over the last of the bowl (2025–26 reviews).',
    hours_raw: '11:00–15:00 (last order 14:30) and 17:00–21:00 (last order 20:30), every day (Tabelog). Bookings taken; walk-ins were seated without a wait (May 2025; March 2026). Order by QR code (May 2025). The menu changed when the shop reopened on 9 December 2025: hand rolls were added and the cheaper bowls dropped (December 2025; February 2026). 20 seats (8 at the counter, 12 at tables); non-smoking; cards, e-money and QR payments; English menu and English-speaking staff; children welcome (Tabelog). On the street just north of Nishiki Market; 4 min walk from Kyoto Kawaramachi Stn (Tabelog). Opened 27 April 2024 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Just north of Nishiki Market — 4 min from Kyoto Kawaramachi Stn',
    cuisine: 'Seafood-bowl and hand-roll shop by Nishiki Market (Tabelog) · kaisen-don in grades such as Take (bamboo: chu-toro, lean tuna, ikura, salmon, white fish, yellowtail) ¥1,800 (August 2025), Matsu and Ume; Shiga rice; a choice of three soy sauces; bonito broth to finish the bowl as chazuke (August 2025; September 2026) · open-style hand rolls with rice and toppings stacked rather than rolled: Hokkai Assortment ¥800, Hon Maguro Trio ¥1,000, Kombu Zuke ¥600, Salmon Cream Cheese ¥600; mini bowl and two hand rolls with fish-head soup ¥2,300 (December 2025); Special set of hand rolls and a mini bowl ¥3,000 (February 2026) · seared-salmon bowl ¥2,000 (May 2025) · mango sorbet (July 2025)',
    website: SITE, gmaps: gm('丼と手巻き 玄海 錦市場店'), menu_url: SITE,
    notes: "[Seafood bowls · Nishiki Market, kaisen-don and open hand rolls] A 20-seat counter-and-table shop on the street just north of Nishiki Market, open since 2024, serving seafood bowls on Shiga rice with a choice of soy sauces — finish the last of the bowl as chazuke with the bonito broth the staff bring — and, since a December 2025 reopening, open-style hand rolls. English menu and staff. Reviews are split: some found the bowls fresh and good value, others small, chopped rather than sliced, and pricey for what came (2025–26). Daily 11:00–15:00 and 17:00–21:00.",
    chef_bio: { chef_name: null, roles: ['No person is named in the sources'], origin: null,
      background: 'Opened 27 April 2024 (Tabelog). A December 2025 reviewer visited on the reopening day, 9 December 2025, and found hand rolls added and the budget seafood bowls gone; a February 2026 reviewer also noted a changed menu and higher prices. Several reviewers noted that most customers were tourists or international guests (February, March and July 2026); one couple was brought by a taxi driver (July 2026).',
      philosophy: null, specialty: 'Kaisen-don; open-style hand rolls.',
      anecdotes: [
        { text: 'A June 2025 diner found the bowl small, the tuna not the chu-toro described, and flies in the room; a February 2026 diner found the Special set too expensive for its small portions.', source: R + 'B508746893/' },
        { text: 'A September 2026 diner ate half the bamboo bowl, then had the rest as chazuke with the bonito broth brought to the table.', source: R + 'B535774361/' },
        { text: 'A March 2026 solo diner found the counter welcoming and quiet, and received a slice of bluefin tuna sashimi for filling in a survey.', source: R + 'B524253680/' },
        { text: 'A July 2026 diner found the staff low on energy and the bonsai in the window a replica.', source: R + 'B534450997/' },
      ],
      japanese_sources_summary: '食べログ: 海鮮丼・寿司、中京区御幸町通錦小路上る船屋町389 1F、阪急河原町駅から徒歩4分、毎日 11:00〜15:00 (L.O. 14:30)・17:00〜21:00 (L.O. 20:30)、予約可、20席 (カウンター8、テーブル12)、禁煙、カード・電子マネー・QR 可、英語メニュー・英語のスタッフ、子供可、2024年4月27日オープン。口コミ (2025年5月〜2026年9月、英語): 2025年12月9日にリニューアル、手巻きを追加、海鮮丼の Take 1,800円、醤油3種、締めに鰹の出汁で茶漬け、ミニ丼と手巻き2種のセット2,300円、Special セット3,000円、量や値段への不満の声もある。',
      confidence: 'low', sources: [TB, SITE, R + 'B484181522/', R + 'B507603666/', R + 'B508746893/', R + 'B509723622/', R + 'B511762003/', R + 'B512192108/', R + 'B523584051/', R + 'B524253680/', R + 'B527393272/', R + 'B532157491/', R + 'B534450997/', R + 'B535774361/'] },
    cultural_comfort: { level: 'english', note: 'English menu and English-speaking staff (Tabelog); order by QR code.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区御幸町通錦小路上る船屋町389 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026; reopened 9 December 2025 after a menu change.' },
    pin_source: `Tabelog ${TB} (35.005324, 135.766297); cross-checked: GSI 京都府京都市中京区船屋町389番地 (lot) 31m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B484181522/', R + 'B511762003/', R + 'B523584051/'],
    price_note: 'No price list read (the official site is a script-only page); prices from reviews, August 2025 to February 2026; the menu changed in December 2025.', last_checked: TODAY, items: [
      it('', '', 'Kaisen-don "Take" (bamboo)', '¥1,800', 'Bowls', 'ask', 'no', 'August 2025.', 'take_don'),
      it('', '', 'Mini bowl and two hand rolls with fish-head soup', '¥2,300', 'Sets', 'ask', 'no', 'December 2025.', 'mini_temaki_set'),
      it('', '', 'Hon Maguro Trio hand roll', '¥1,000', 'Hand rolls', 'ask', 'no', 'December 2025.', 'maguro_trio'),
      it('', '', 'Hokkai Assortment hand roll', '¥800', 'Hand rolls', 'ask', 'no', 'December 2025.', 'hokkai'),
    ] }, {
    cuisine: '錦市場そばの海鮮丼と手巻きの店 (食べログ)・海鮮丼は Take (中トロ、赤身、いくら、サーモン、白身、ぶり) 1,800円 (2025年8月)、Matsu、Ume など。Shiga の米、醤油は3種から、締めは鰹の出汁で茶漬けに (2025年8月、2026年9月)・巻かずにご飯と具を重ねた手巻き: Hokkai Assortment 800円、Hon Maguro Trio 1,000円、Kombu Zuke 600円、Salmon Cream Cheese 600円。ミニ丼と手巻き2種とあら汁のセット2,300円 (2025年12月)、手巻きとミニ丼の Special セット3,000円 (2026年2月)・炙りサーモン丼2,000円 (2025年5月)・マンゴーのシャーベット (2025年7月)',
    neighborhood: '錦市場のすぐ北。京都河原町駅から徒歩4分',
    gf_detail: '要確認。丼は3種の醤油かごまだれで、手巻きには昆布〆もある。食べログではアレルギー情報ありとなっている (食べログ、2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。丼も手巻きもすべて魚介で、あら汁か赤だしが付き、最後に鰹の出汁をかける (2025〜2026年の口コミ)。',
    notes: '[海鮮丼・錦市場、海鮮丼と巻かない手巻き] 錦市場のすぐ北の通りにある、カウンターとテーブルの20席の店。2024年開店。Shiga の米の海鮮丼に醤油を選び、残りは出される鰹の出汁で茶漬けに。2025年12月のリニューアルからは巻かずに重ねた手巻きも。英語のメニューとスタッフあり。口コミは分かれ、新鮮でお得という声もあれば、量が少ない、刺身が切り身でなく刻み、値段が高いという声も (2025〜2026年)。毎日11時〜15時と17時〜21時。',
  });
}

save();
