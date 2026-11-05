// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 6.
//   + 蛸八 Tako Hachi (11-seat family kappo counter by Takoyakushi-Shinkyogoku; core list)
//   + 祇園 河道 Gion Kawamichi (one-woman Gion izakaya facing Minami-za; core list)
//   + 華祥 Kasho (Mototanaka Kyoto-Chinese, egg-white ankake fried rice; Chinese WEST 100 2021, 2024; notable list)
//   + イスタンブール・サライ Istanbul Saray (Turkish restaurant by Kawaramachi Sanjo since 2002; notable list)
//   Picked 2026-11-05 after batch 5 was integrated. `queue.mjs kyoto-missed next core 200`: 蛸八 26005639 and 祇園 河道
//   26017159 (the first two lane-1 ids). `next notable 200`: 華祥 26003713; 中村藤吉本店 京都駅店 26005903 skipped (chain);
//   then イスタンブール・サライ 26002357. None of the four is in data/kyoto.json: grep by name (蛸八/Tako Hachi, 河道/Kawamichi,
//   華祥/Kasho, イスタンブール/Istanbul/Saray) and address (東側町498, 常磐町149, 田中里ノ内町41, 恵比須町534) found none.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-6');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26005903', '中村藤吉本店 京都駅店: branch of 中村藤吉本店, whose official site (tokichi.jp, read 2026-11-05) lists nine shops: 本店, 平等院店, 京都店, ジェイアール京都伊勢丹店, 大丸京都店, 四条店, 大阪店, 銀座店, 麻布台店 — a group of 5 or more, so a chain (none in data).');

// ================================================================ 蛸八
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26005639/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '23:00']);
  put({
    id: 'kyoto_takohachi', name: '蛸八 (Tako Hachi)', category: 'OMNI',
    lat: 35.006257, lng: 135.767061, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kappo dishes: sashimi, kizushi, grilled and blanched anago or hamo, uzaku, fried small taro, kara-age and fried eggplant, with soy-based seasonings; no gluten information (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish, eel, duck and chicken make up most of the menu; the egg tofu starter is egg (2025–2026 reviews).',
    hours_raw: '18:00–23:00; closed Wednesday and Sunday (Tabelog). Reservations accepted (Tabelog); often full, so book — though same-day calls and walk-ins have found a seat (July 2025; July 2026). 11 counter seats, packed close (Tabelog; March 2025). The menu on the wall has no prices; bills ran about ¥6,000–7,000 a head (2025–2026 reviews). Cash only; non-smoking (Tabelog). On Takoyakushi-dori just west of Shinkyogoku; 4 min walk from Kawaramachi Stn (Hankyu) (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Takoyakushi-dori just west of Shinkyogoku — 4 min walk from Kawaramachi Stn',
    cuisine: 'Small family-run Kyoto kappo counter of seasonal dishes for sake (2025–2026 reviews) · egg tofu with grated yuzu to start (July 2025; July 2026) · kizushi, sashimi (squid, bonito, octopus, sea bream), anago grilled or blanched to order, anago don, grilled hamo, uzaku, fish somen, zuiki with sesame, grilled guji, grilled shirako in winter, seared bonito, roast duck with Worcestershire sauce, fried small taro (a regular’s must-order), fried eggplant, kara-age (2025–2026 reviews) · sake from Kyoto and beyond, highballs, bottled beer (2025–2026 reviews)',
    website: null, gmaps: gm('蛸八 京都 蛸薬師'), menu_url: null,
    notes: "[Kappo · Takoyakushi, a family counter for Kyoto food and sake] An 11-seat counter behind a noren in the Shinkyogoku arcade area, run by a family — a couple behind the counter — where plain-sounding Kyoto dishes come out exceptionally well: egg tofu with yuzu, kizushi, anago grilled or blanched to order, hamo and uzaku in summer, fried small taro, and roast duck with Worcestershire sauce. Praised by food writers and on local TV, so it is often full; book. No prices on the wall menu; most pay ¥6,000–7,000. Cash only; closed Wednesday and Sunday.",
    chef_bio: { chef_name: null, roles: ['Family-run; a couple at the counter (2026 reviews), unnamed'], origin: null,
      background: 'Per reviews: "family-run" (March 2025, July 2026); "the couple running the counter exudes a wonderful vibe" (March 2026); "the head chef and the owner were friendly" (April 2025). Reviewers came after an article by a former editor-in-chief of DANCHU (July 2025), a piece on Waraku web (July 2026) and a KBS television feature with Takuzo Kadoya and Yoshimasa Kondo (March 2026). A March 2025 regular noted the counter had grown from 6 to 11 seats and bills had risen.',
      philosophy: null, specialty: 'Anago; kizushi; fried small taro; egg tofu.',
      anecdotes: [
        { text: '"After taking my order, they skillfully removed the bones and quickly blanched it in hot water before serving." — of the anago, May 2025.', source: R + 'B507124879/' },
        { text: '"The restaurant is family-run, creating a wonderful atmosphere. The fried small potatoes are exceptional, and I always make sure to order them!" — July 2026.', source: R + 'B531238314/' },
        { text: '"I particularly enjoyed the area at the counter where you can grill your own food; the seared bonito was especially delightful." — March 2026.', source: R + 'B527300457/' },
        { text: 'A March 2025 regular found the counter much more crowded than before, with dishes arriving in a rush and a bill 1.5 times higher, but still good value for the quality.', source: R + 'B494796303/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理、中京区蛸薬師通新京極西入ル東側町498、阪急河原町駅から徒歩4分、18:00〜23:00、水・日曜休み、予約可、11席 (カウンター)、カード・電子マネー・QR 不可、禁煙。口コミ (2025年3月〜2026年7月、英語): 家族経営、カウンターの夫婦、値段のない壁のお品書き、玉子豆腐、きずし、穴子 (焼き・湯引き)、穴子丼、鱧、うざく、ぐじの焼き物、白子焼き、鴨ロースとウスターソース、小芋の唐揚げ、1人6,000〜7,000円ほど、DANCHU 元編集長の記事、Waraku web、KBS の番組。',
      confidence: 'medium', sources: [TB, R + 'B347073064/', R + 'B494796303/', R + 'B507124879/', R + 'B509078851/', R + 'B509467348/', R + 'B509980804/', R + 'B521329114/', R + 'B527300457/', R + 'B531238314/', R + 'B532018585/'] },
    cultural_comfort: { level: 'japanese', note: 'Wall menu in Japanese without prices; tight counter; cash only.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区蛸薬師通新京極西入ル東側町498',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.006257, 135.767061); cross-checked: GSI 京都府京都市中京区東側町498番地 (lot) 2 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B531238314/', R + 'B532018585/'],
    price_note: 'The wall menu shows no prices; reviewers paid about ¥6,000–7,000 a head (2025–2026).', last_checked: TODAY, items: [
      it('', '', 'Anago, grilled or blanched', '', 'Fish', 'ask', 'no', '', 'anago'),
      it('', '', 'Anago don', '', 'Rice', 'ask', 'no', 'July 2026.', 'anago_don'),
      it('', '', 'Kizushi (vinegar-cured mackerel)', '', 'Fish', 'ask', 'no', '', 'kizushi'),
      it('', '', 'Fried small taro', '', 'Fried', 'ask', 'ask', '', 'kozuimo_fry'),
      it('', '', 'Egg tofu', '', 'Starters', 'ask', 'no', '', 'tamago_dofu'),
    ] }, {
    cuisine: '家族で営む京都の小さな割烹のカウンター。季節の酒の肴 (2025〜2026年の口コミ)・始まりは柚子をおろした玉子豆腐 (2025年7月、2026年7月)・きずし、刺身 (いか、かつお、たこ、鯛)、注文してから焼くか湯引きにする穴子、穴子丼、焼き鱧、うざく、魚そうめん、ずいきの胡麻和え、ぐじの焼き物、冬は白子焼き、かつおのたたき、ウスターソースの鴨ロース、小芋の唐揚げ (常連の定番)、揚げ茄子、唐揚げ (2025〜2026年の口コミ)・京都と各地の日本酒、ハイボール、瓶ビール (2025〜2026年の口コミ)',
    neighborhood: '新京極のすぐ西の蛸薬師通。河原町駅から徒歩4分',
    gf_detail: '要確認。刺身、きずし、焼きか湯引きの穴子や鱧、うざく、小芋の唐揚げ、唐揚げ、揚げ茄子などの割烹料理で、醤油の味付けが多い。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚、穴子、鴨、鶏が中心で、最初の玉子豆腐も卵 (2025〜2026年の口コミ)。',
    notes: '[割烹・蛸薬師、家族のカウンターで京の肴と酒] 新京極の近く、暖簾の奥の11席のカウンター。家族で営み、カウンターには夫婦。何気ない京の料理が抜群においしい: 柚子の玉子豆腐、きずし、注文で焼くか湯引きにする穴子、夏は鱧とうざく、小芋の唐揚げ、ウスターソースの鴨ロース。料理雑誌の元編集長や地元のテレビにも紹介され、満席が多いので予約を。壁のお品書きに値段はなく、多くは1人6,000〜7,000円ほど。現金のみ、水・日曜休み。',
  });
}

// ================================================================ 祇園 河道
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26017159/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'kyoto_gion_kawamichi', name: '祇園 河道 (Gion Kawamichi)', category: 'OMNI',
    lat: 35.004355, lng: 135.772668, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Small seasonal plates — sashimi, sake-steamed clams, tempura, beef and Kujo-negi udon — with dashi and soy seasonings; no gluten information (2023–2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the appetiser is a clam broth, and the menu is built on fish, hamo, beef and sea urchin (2024–2025 reviews).',
    hours_raw: 'Tabelog publishes no hours; reviewers came in the evening (2023–2026). Reservations accepted (Tabelog); walk-ins have been seated at the counter (October 2023). 14 seats: 8 at the counter and 6 at tables; smoking only at the counter (Tabelog). Cash only (Tabelog; March 2023). Second floor of 幕間ビル on Yamatooji-dori north of Shijo, opposite the Minami-za; 2 min walk from Gion-Shijo Stn (Tabelog; 2023–2025 reviews). Opened 28 October 2010 (Tabelog); a November 2025 regular wrote that it marked its 14th anniversary that October.',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Yamatooji-dori facing the Minami-za, north of Shijo — 2 min walk from Gion-Shijo Stn',
    cuisine: 'Gion izakaya of à la carte seasonal plates at fair prices, from a handwritten menu (2023–2026 reviews) · three standing starters and a daily list; omakase sashimi in one-bite pieces; hamo and matsutake dobin-mushi (October 2023) · hamo sashimi, hamo with scrambled egg, prosciutto and peach, fried small taro and yuba, beef and Kujo-negi udon (July 2024) · clam broth with sesame tofu, kombu-cured fish with Tosa-vinegar jelly, nameko with mekabu, roast beef with sea urchin, tempura (November 2025) · sake such as Toyo Bijin and Tatenokawa, shochu, white wine, highballs (2023–2025 reviews)',
    website: null, gmaps: gm('祇園 河道 京都'), menu_url: null,
    notes: "[Izakaya · Gion, a woman's counter facing the Minami-za] A small second-floor izakaya on Yamatooji opposite the Minami-za, whose lights fill the window at night, run by its woman owner-chef with one helper. A handwritten menu of seasonal plates — omakase sashimi in small bites, hamo in summer, kombu-cured fish, roast beef with sea urchin — at prices reviewers call reasonable; a November 2025 regular paid just over ¥10,000. Regulars chat at the counter; solo diners are welcome. Seen on Kazuhiko Ota's TV show. Cash only; smoking at the counter only. Hours are not published; call ahead.",
    chef_bio: { chef_name: null, roles: ['Owner-chef, a woman (2023–2025 reviews), unnamed; one helper'], origin: null,
      background: 'Per reviews: "a small establishment operated by just the owner and a male server", with local regulars chatting with the owner at the counter (March 2023); "run by a woman with experience as an office lady", offering à la carte dishes at reasonable prices, and featured on a show by Kazuhiko Ota about Gion (October 2023); "a friendly little restaurant run by a warm female chef" that marked its 14th anniversary in October 2025 (November 2025). Tabelog gives the opening date as 28 October 2010.',
      philosophy: null, specialty: 'Seasonal small plates; hamo; omakase sashimi.',
      anecdotes: [
        { text: '"From the window, you can enjoy a stunning view of the illuminated Minami-za Theatre" — November 2025.', source: R + 'B517892129/' },
        { text: 'An October 2023 visitor watched maiko pass below the second-floor window, and was served an off-menu vinegared dish and miso soup with the rice and pickles.', source: R + 'B472549551/' },
        { text: '"A woman was efficiently serving dishes and drinks. I didn’t get a chance to chat, but everything was reasonably priced and delicious." — April 2026.', source: R + 'B525865026/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理、東山区大和大路通四条上ル常磐町149-1 幕間ビル2F、京阪祇園四条駅から徒歩約2分、営業時間の記載なし、予約可、14席 (カウンター8、テーブル6)、カウンターのみ喫煙可、カード・電子マネー・QR 不可、2010年10月28日オープン。口コミ (2023年3月〜2026年4月、英語): 女性の店主と男性のスタッフ、元 OL の店主、Kazuhiko Ota の番組で紹介、南座の向かい、手書きのお品書き、おまかせの刺身、鱧、土瓶蒸し、昆布締め、ウニのせローストビーフ、天ぷら、Toyo Bijin、Tatenokawa、14周年 (2025年10月)、現金のみ。',
      confidence: 'low', sources: [TB, R + 'B264748683/', R + 'B469393506/', R + 'B472549551/', R + 'B486333415/', R + 'B491840922/', R + 'B494583806/', R + 'B517892129/', R + 'B525865026/'] },
    cultural_comfort: { level: 'japanese', note: 'Handwritten Japanese menu; counter conversation; cash only; hours not published — call ahead.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区大和大路通四条上ル常磐町149-1 幕間ビル2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated November 2025 and April 2026. No hours published.' },
    pin_source: `Tabelog ${TB} (35.004355, 135.772668); GSI matches only the town (京都府京都市東山区常盤町, 1.3 km away), so the pin rests on the Tabelog point alone (GSI only this round, no OSM); nearest record kyoto_uzuraya_shijo at 35 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B517892129/', R + 'B469393506/'],
    price_note: 'No menu prices read; a November 2025 regular paid just over ¥10,000; others ¥3,000–9,999 (Tabelog review bands).', last_checked: TODAY, items: [
      it('', '', 'Omakase sashimi in small bites', '', 'Fish', 'ask', 'no', '', 'omakase_sashimi'),
      it('', '', 'Hamo sashimi (summer)', '', 'Fish', 'ask', 'no', 'July 2024.', 'hamo_sashimi'),
      it('', '', 'Roast beef with sea urchin', '', 'Meat', 'ask', 'no', 'November 2025.', 'roast_beef_uni'),
      it('', '', 'Beef and Kujo-negi udon', '', 'Noodles', 'no', 'no', 'July 2024.', 'beef_udon'),
    ] }, {
    cuisine: '手書きのお品書きの、手頃な季節のアラカルトの祇園の居酒屋 (2023〜2026年の口コミ)・定番の突き出し3品と日替わり、ひと口大のおまかせの刺身、鱧と松茸の土瓶蒸し (2023年10月)・鱧の刺身、鱧の卵とじ、生ハムと桃、小芋と湯葉の揚げ物、牛肉と九条ねぎのうどん (2024年7月)・ごま豆腐の貝の吸い物、昆布締めの土佐酢ジュレ、なめことめかぶ、ウニのせローストビーフ、天ぷら (2025年11月)・Toyo Bijin や Tatenokawa などの日本酒、焼酎、白ワイン、ハイボール (2023〜2025年の口コミ)',
    neighborhood: '四条の北、南座の向かいの大和大路通。祇園四条駅から徒歩2分',
    gf_detail: '要確認。刺身、貝の酒蒸し、天ぷら、牛肉と九条ねぎのうどんなどの季節の小皿に、出汁と醤油の味付け。グルテンの情報はない (2023〜2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。突き出しは貝の吸い物で、魚、鱧、牛肉、ウニが中心 (2024〜2025年の口コミ)。',
    notes: '[居酒屋・祇園、南座の向かいの女将のカウンター] 南座の向かい、大和大路のビルの2階の小さな居酒屋。夜は窓いっぱいに南座の明かり。女性の店主が手伝いの1人と営む。手書きのお品書きに季節の料理: ひと口のおまかせの刺身、夏の鱧、昆布締め、ウニのせローストビーフ。値段は手頃との声が多く、2025年11月の常連は1万円ちょっと。カウンターでは常連との会話も弾み、一人でも入りやすい。Kazuhiko Ota の番組でも紹介。現金のみ、カウンターのみ喫煙可。営業時間は公開されていないので電話で確認を。',
  });
}

// ================================================================ 華祥
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26003713/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.kasyou.jp/'; const CO = SITE + 'company.html';
  const H = day(['11:00', '14:00'], ['17:30', '21:00']);
  put({
    id: 'kyoto_kasho_mototanaka', name: '華祥 (Kasho)', category: 'MOM_AND_POP',
    lat: 35.033660, lng: 135.780722, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kyoto-style Chinese: fried noodles, spring rolls, shumai, fried chicken, ankake sauces and fried rice; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dishes use seafood, chicken, beef, egg white and stock-based sauces (2026 reviews).',
    hours_raw: '11:00–14:00 and 17:30–21:00; closed Wednesday and Thursday (Tabelog). The official site gives 17:30–21:30 and Wednesday only as the closing day. Reservations for dinner only (Tabelog). Lunch sets ¥1,300 (July and September 2026). No cards or e-money; PayPay and au PAY accepted; no service or table charge (Tabelog). 32 seats: a 12-seat counter on the ground floor and tables upstairs (Tabelog). Non-smoking; children welcome; paid parking nearby (Tabelog). Two houses north of the Higashioji–Mikage-dori crossing, east side; 2 min walk from Mototanaka Stn (Eizan), 10 min from Demachiyanagi (official site; Tabelog). Moved here from 田中門前町 (Tabelog).',
    hours: { 0: H, 1: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashioji north of Mikage-dori, Tanaka — 2 min walk from Mototanaka Stn',
    cuisine: 'Kyoto-style Chinese, light and not greasy, built on broth rather than oil and spice (September 2026) · egg-white ankake fried rice ¥1,100, the signature (it made the cover of the magazine Leaf, per the official site); ankake yakisoba with crisp noodles ¥1,100, large ¥1,300; cheese spring rolls, two for ¥700 (2026 reviews) · lunch set ¥1,300: ankake yakisoba with kara-age, zha cai and rice (September 2026); crab and lettuce fried rice (July 2026) · cold jellyfish, dried tofu with green onion, scallop and shrimp shumai, beef in Beijing miso with crepes, large shrimp with vermicelli (September 2026) · the shop’s own unpairō (雲白肉) and bang bang chicken sauces sold online (official site)',
    website: SITE, gmaps: gm('華祥 京都 元田中'), menu_url: null,
    notes: "[Kyoto Chinese · Mototanaka, egg-white fried rice] A neighbourhood Kyoto-Chinese restaurant by Mototanaka Station, famous for its egg-white ankake fried rice (¥1,100) — moist fried rice under a fluffy, creamy egg-white sauce — and a crisp ankake yakisoba that one regular has ordered for 25 years. Founder 田口 茂雄 was honoured as a Contemporary Master Craftsman (2017) and received the Medal with Yellow Ribbon (2020); after the founder's death in 2021, 田口 弥生 has run the shop with a son. Lunch sets ¥1,300; cash or PayPay. Closed Wednesday and Thursday.",
    chef_bio: { chef_name: '田口 弥生', roles: ['Carries on the shop with a son since the founder’s death in 2021 (official site)', 'Kitchen led by a younger chef reviewers call "Waka" (August 2026)'], origin: null,
      background: 'Per the official site: founder and manager 田口 茂雄 died on 16 May 2021; the founder was named a Contemporary Master Craftsman (現代の名工) by the Ministry of Health, Labour and Welfare in fiscal 2017 and received the Medal with Yellow Ribbon (黄綬褒章) in spring 2020. In a notice signed 田口 弥生, the writer says "主人が他界いたしました" (my husband has passed away) and "これからは息子と共に華祥をがんばっていきたい" (from now on I will carry on Kasho with my son). The operating company is 株式会社 華祥企画. An August 2026 reviewer calls the current owner "Waka", a master of the wok; a September 2026 regular of about 25 years, who first came to the earlier site near Hyakumanben, wondered whether ownership had changed as the staff seemed young. Tabelog Chinese WEST "Tabelog 100" 2021, 2024.',
      philosophy: null, specialty: 'Egg-white ankake fried rice; ankake yakisoba.',
      anecdotes: [
        { text: '"I’ve loved their an-kake yakisoba (stir-fried noodles with sauce) since then, and it’s been about 25 years now." The same regular felt the portion was slightly smaller than before. — September 2026.', source: R + 'B535510392/' },
        { text: '"The current owner, whom I affectionately call \'Waka,\' has truly mastered the art of cooking with the Chinese wok" — August 2026.', source: R + 'B533941725/' },
        { text: '"I think this is the first time I’ve felt \'comfortable\' while enjoying Chinese food in my life." — September 2026.', source: R + 'B536080992/' },
        { text: '"The cost-effective lunch has now increased to JPY 1,300! I really felt the impact of rising prices." — July 2026.', source: R + 'B531479392/' },
      ],
      japanese_sources_summary: '公式サイト (kasyou.jp): 中国料理 華祥、左京区田中里ノ内町41-1 (東大路・御陰通交差点を北へ2軒目東側)、11:00〜14:00・17:30〜21:30、水曜定休、店主 田口 茂雄は令和3年5月16日に永眠、平成29年度 厚生労働省より「現代の名工」表彰、令和2年 春の褒章「黄綬褒章」受章、田口 弥生「主人が他界いたしました」「これからは息子と共に華祥をがんばっていきたい」、Leaf 4・5月号の表紙に「卵白あんかけチャーハン」、雲白肉ソースと棒々鶏ソースの通販、株式会社 華祥企画。食べログ: 中華料理・ラーメン、元田中駅から徒歩2分、月・火・金・土・日 11:00〜14:00・17:30〜21:00、水・木休み、予約は夜のみ、カード・電子マネー不可、PayPay・au PAY 可、サービス料・お通し代なし、32席 (1階カウンター12、2階テーブル)、禁煙、中華 WEST 百名店 2021・2024、田中門前町から移転。口コミ (2026年7〜10月、英語): 卵白あんかけチャーハン1,100円、あんかけ焼きそば1,100円 (大1,300円)、チーズ春巻き2本700円、ランチセット1,300円、京中華、店主「Waka」。',
      confidence: 'medium', sources: [TB, SITE, CO, R + 'B531479392/', R + 'B533405324/', R + 'B533538051/', R + 'B533941725/', R + 'B535510392/', R + 'B536080992/', R + 'B536797251/', R + 'B536959020/', R + 'B538405133/', R + 'B538675875/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the counter or upstairs; dinner can be booked; PayPay or cash.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市左京区田中里ノ内町41-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.033660, 135.780722); cross-checked: GSI 京都府京都市左京区田中里ノ内町41番地 (lot) 15 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B538405133/', R + 'B536797251/', R + 'B535510392/'],
    price_note: 'Prices from September–October 2026 reviews (tax included).', last_checked: TODAY, items: [
      it('卵白あんかけチャーハン', '', 'Egg-white ankake fried rice', '¥1,100', 'Rice', 'ask', 'no', 'October 2026.', 'egg_white_fried_rice'),
      it('あんかけ焼きそば', '', 'Ankake yakisoba (crisp noodles in sauce)', '¥1,100', 'Noodles', 'no', 'no', 'Large ¥1,300 (October 2026).', 'ankake_yakisoba'),
      it('春巻き', '', 'Cheese spring rolls (2)', '¥700', 'Small dishes', 'no', 'no', 'October 2026.', 'spring_rolls'),
      it('', '', 'Ankake yakisoba lunch set (kara-age, zha cai, rice)', '¥1,300', 'Lunch', 'no', 'no', 'September 2026.', 'lunch_set'),
    ] }, {
    cuisine: '油と香辛料を控え、だしを生かした軽い京中華 (2026年9月)・名物の卵白あんかけチャーハン1,100円 (雑誌 Leaf の表紙に、公式サイト)、ぱりっとした麺のあんかけ焼きそば1,100円、大1,300円、チーズ春巻き2本700円 (2026年の口コミ)・ランチセット1,300円: あんかけ焼きそば、唐揚げ、ザーサイ、ご飯 (2026年9月)、蟹とレタスのチャーハン (2026年7月)・くらげの冷菜、干し豆腐とねぎ、ホタテと海老のしゅうまい、牛肉の Beijing miso 炒めのクレープ包み、大海老と春雨の煮込み (2026年9月)・自家製の雲白肉ソースと棒々鶏ソースの通販 (公式サイト)',
    neighborhood: '御陰通の北の東大路、田中。元田中駅から徒歩2分',
    gf_detail: '要確認。焼きそば、春巻き、しゅうまい、唐揚げ、あんかけ、チャーハンなどの京中華。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚介、鶏、牛肉、卵白、スープのあんを使う (2026年の口コミ)。',
    notes: '[京中華・元田中、卵白あんかけチャーハン] 元田中駅近くの町の京中華。名物は、しっとりしたチャーハンにふわふわでクリーミーな卵白のあんをかけた卵白あんかけチャーハン (1,100円) と、25年通う常連もいるぱりぱりのあんかけ焼きそば。創業者の田口 茂雄は「現代の名工」(2017年度) と黄綬褒章 (2020年) を受けた。2021年に亡くなった後は、田口 弥生が息子と店を続けている。ランチセット1,300円、現金か PayPay。水・木休み。',
  });
}

// ================================================================ イスタンブール・サライ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26002357/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.istanbul-saray.com/'; const MENU = SITE + 'menu1.html';
  const WD = day(['17:30', '22:00']); const WE = day(['12:00', '15:00'], ['17:30', '22:00']);
  put({
    id: 'kyoto_istanbul_saray', name: 'イスタンブール・サライ (Istanbul Saray)', category: 'OMNI',
    lat: 35.009550, lng: 135.769467, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tabelog’s staff-maintained listing ticks "gluten-free options", but no dish is named; meals come with Turkish bread and pide, and pilaf, kebabs and many meze are served alongside (Tabelog; official menu; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options, and the meze include hummus, eggplant salad, imam bayildi (cold eggplant and vegetables), stuffed peppers and vine leaves with pilaf and a spicy vegetable paste; several other meze use yogurt or cheese, and the soups are not described (official menu; Tabelog).',
    hours_raw: 'Weekdays 17:30–22:00; Saturday, Sunday and holidays 12:00–15:00 and 17:30–22:00; open year-round, with irregular closures per the official site (Tabelog; official site). Reservations by phone, recommended for weekend lunch (official site; August and October 2026). No table charge (Tabelog). 28 seats (Tabelog; the official site says 34), groups up to 40 (official site); non-smoking (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), PayPay, d Barai and WeChat Pay (Tabelog). The shop text says all its meat is certified halal; Tabelog also ticks halal and Hindu options; wine and Turkish beer are served (Tabelog; 2026 reviews). Third floor of 松木ビル on Kawaramachi north of Sanjo; 2 min walk from Kyoto Shiyakusho-mae Stn (Tabelog). Opened 9 December 2002 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kawaramachi-dori north of Sanjo, 3rd floor — 2 min walk from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Turkish cooking in the line of Ottoman court cuisine; kebabs and stretchy Turkish ice cream; courses (Tabelog shop text; official site) · meze: five-kind meze platter ¥1,950, vine leaves stuffed with pilaf ¥1,100, hummus ¥800, imam bayildi ¥980, cacik ¥750, Antep ezme ¥750, Circassian chicken with walnuts ¥750, Albanian-style fried liver ¥900, soups of the day ¥650 (official menu, undated) · weekend lunch about ¥1,800–2,650 with lentil soup, meze, Turkish bread, a kebab or stew, rice pudding and tea (August 2026) · lamb shish and chicken kebabs over charcoal, pide with minced meat and egg, grilled cheese, oven-baked lamb with vegetables (2026 reviews) · Turkish beer, wine, ayran, Turkish tea and coffee (2026 reviews)',
    website: SITE, gmaps: gm('イスタンブール・サライ 京都'), menu_url: MENU,
    notes: "[Turkish · Kawaramachi Sanjo, kebabs and meze upstairs] A Turkish restaurant on the third floor of a building on Kawaramachi north of Sanjo, open since 2002, decorated with Turkish tiles: meze platters with fresh bread — hummus, eggplant, ezme — then charcoal-grilled lamb and chicken kebabs or pide, and a cold rice pudding that reviewers rave about. Weekend lunch sets run about ¥1,800–2,650; dinner courses are big. The shop says its meat is all certified halal, though wine and beer are served. Weekday dinner; lunch at weekends. Tabelog Asian/Ethnic WEST 100 2022–24, 2026.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed in the sources)'], origin: null,
      background: 'Per the official site: authentic Turkish cooking that carries on Ottoman court cuisine, "one of the world’s three great cuisines", and the only Turkish specialist in Kyoto; groups up to 40 by reservation. Per the Tabelog shop text: kebabs, Turkish ice cream and courses, with all meat certified halal. Opened 9 December 2002 (Tabelog). Tabelog Asian/Ethnic WEST "Tabelog 100" 2022, 2023, 2024, 2026.',
      philosophy: null, specialty: 'Meze platter; kebabs; rice pudding (sütlaç).',
      anecdotes: [
        { text: '"However, the rice pudding at the end was incredibly delicious and left me amazed! I would want to repeat just that." — August 2026.', source: R + 'B533847709/' },
        { text: '"The flavors remind me of my trip to Turkey. It was easier to eat than what I had there, so it might have been adjusted to suit Japanese tastes." — September 2026.', source: R + 'B535840555/' },
        { text: '"I chose the course with the most dishes, but that turned out to be a mistake... The portions were quite large" — September 2026.', source: R + 'B536289721/' },
      ],
      japanese_sources_summary: '公式サイト (istanbul-saray.com): オスマン宮廷料理の流れを受け継いだ本格トルコ料理、世界の三大料理のひとつ、京都でトルコ料理の専門店はイスタンブール・サライだけ、全34席、40名まで予約可、予約は電話で、平日 夜17:30〜22:00、土日祝 昼12:00〜15:00・夜17:30〜22:00 (不定休)、メニュー: ヤプラク サルマ1,100円、カルシュク メゼ1,950円、スープ650円、フムス800円、イマム バユルドゥ980円、ジャジュック750円、アンテップ エズメ750円など。食べログ: トルコ料理、中京区河原町通三条上ル恵比須町534-28 松木ビル3F、京都市役所前駅から徒歩2分、28席、禁煙、カード・PayPay・d払い・WeChat Pay 可、チャージなし、ベジタリアン・グルテンフリー・ハラール・ヒンドゥーのメニューあり、店舗紹介: 肉はすべてハラール認証、2002年12月9日オープン、アジア・エスニック WEST 百名店 2022〜2024・2026。口コミ (2026年8〜11月、英語): 週末のランチ1,800〜2,650円、レンズ豆のスープ、前菜の盛り合わせ、トルコのパン、ケバブ、ピデ、ライスプディング、トルコのタイル。',
      confidence: 'medium', sources: [TB, SITE, MENU, R + 'B533847709/', R + 'B534226323/', R + 'B534738834/', R + 'B535485051/', R + 'B535598727/', R + 'B535840555/', R + 'B535885371/', R + 'B536289721/', R + 'B537834743/', R + 'B538626533/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book by phone, especially for weekend lunch; courses or à la carte; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区河原町通三条上ル恵比須町534-28 松木ビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (staff-maintained) and official site; reviews dated through November 2026; Asian/Ethnic WEST Tabelog 100 2026.' },
    pin_source: `Tabelog ${TB} (35.009550, 135.769467); cross-checked: GSI 京都府京都市中京区恵比須町534番地 (lot) 24 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU],
    price_note: 'Official site menu (undated, prices may be older); lunch prices from August 2026 reviews.', last_checked: TODAY, items: [
      it('KARISIK MEZE（カルシュク メゼ）', '', 'Five-kind meze platter', '¥1,950', 'Meze', 'ask', 'ask', '', 'karisik_meze'),
      it('HUMUS（フムス）', '', 'Hummus', '¥800', 'Meze', 'ask', 'ask', '', 'humus'),
      it('IMAM BAYILDI（イマム バユルドゥ）', '', 'Imam bayildi (cold eggplant and vegetables)', '¥980', 'Meze', 'ask', 'ask', '', 'imam_bayildi'),
      it('YAPRAK SARMA（ヤプラク サルマ）', '', 'Vine leaves stuffed with pilaf', '¥1,100', 'Meze', 'ask', 'ask', '', 'yaprak_sarma'),
      it('CACIK（ジャジュック）', '', 'Cacik (cucumber yogurt)', '¥750', 'Meze', 'ask', 'no', '', 'cacik'),
      it('', '', 'Weekend lunch set (soup, salad, bread, main, dessert, chai)', '¥1,800', 'Lunch', 'no', 'no', 'August 2026, about.', 'weekend_lunch'),
    ] }, {
    cuisine: 'オスマン宮廷料理の流れを受け継ぐトルコ料理。ケバブとのびるトルコアイス、コース (食べログの店舗紹介、公式サイト)・前菜: 前菜5種の盛り合わせ1,950円、ぶどうの葉のピラフ包み1,100円、フムス800円、イマム バユルドゥ980円、ジャジュック750円、アンテップ エズメ750円、チキンとくるみのペースト750円、アルバニア風レバーの唐揚げ900円、日替わりスープ650円 (公式メニュー、日付なし)・週末のランチ1,800〜2,650円ほど: レンズ豆のスープ、前菜、トルコのパン、ケバブか煮込み、ライスプディング、チャイ (2026年8月)・炭火のラムのシシケバブとチキンケバブ、ひき肉と卵のピデ、焼きチーズ、ラムと野菜のオーブン焼き (2026年の口コミ)・トルコのビール、ワイン、アイラン、トルコの紅茶とコーヒー (2026年の口コミ)',
    neighborhood: '三条の北の河原町通、ビルの3階。京都市役所前駅から徒歩2分',
    gf_detail: '要確認。食べログの店舗会員のページには「グルテンフリーメニューあり」とあるが、どの料理かは書かれていない。トルコのパンやピデが付き、ピラフ、ケバブ、前菜も並ぶ (食べログ、公式メニュー、2026年の口コミ)。',
    vegan_detail: '要確認。食べログにはベジタリアンメニューありとあり、前菜にはフムス、なすびのサラダ、イマム バユルドゥ、ピーマンのピラフ詰め、ぶどうの葉のピラフ包み、野菜のピリ辛ペーストがある。ヨーグルトやチーズを使う前菜もあり、スープの中身は書かれていない (公式メニュー、食べログ)。',
    notes: '[トルコ料理・河原町三条、3階のケバブと前菜] 2002年から河原町三条の北のビルの3階にある、トルコのタイルで飾ったトルコ料理店。焼きたてのパンと前菜の盛り合わせ (フムス、なす、エズメ) から、炭火のラムやチキンのケバブ、ピデ、口コミで絶賛の冷たいライスプディングまで。週末のランチは1,800〜2,650円ほど、夜のコースは量が多い。店は肉はすべてハラール認証としているが、ワインやビールも出す。平日は夜のみ、週末は昼も。食べログアジア・エスニック WEST 百名店 2022〜2024・2026。',
  });
}

save();
