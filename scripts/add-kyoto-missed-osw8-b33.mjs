// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 33.
//   + コノシマビール Konoshima Beer (seven-seat Sapporo draft-beer bar by Higashiyama Stn; core list)
//   + 割烹 喜多 Kappou Kita (tenmusu by day, counter kappo by night, Matsubara Kyogoku; core list)
//   + カーサビアンカ Casa Bianca (long-running Italian west of Kawaramachi Imadegawa; notable list)
//   + のと正 Noto Sho (family river-fish and eel takeaway on Matsubara-dori; notable list)
//   - 亀屋良長 JR京都伊勢丹B1直売店 26023579 (notable): a branch counter of a brand already in data (亀屋良長 本店,
//     kyoto_kameya_yoshinaga_honten) — skipped.
//   Picked 2026-11-06 after batch 32. `queue.mjs kyoto-missed next core 200`, mod 6 = 1: 26041687, 26023087, 26026909 were
//   skipped in batch 30; コノシマビール 26034397, 割烹 喜多 26029435. `next notable 200`: カーサビアンカ 26001025,
//   26023579 (skipped), のと正 26024515. Same-name check, same brand or operator only: one of each of the four in our
//   crawls. Konoshima Beer shares a building with ひがしやま 司 (kyoto_higashiyama_tsukasa, 2F, in data) and serves its curry,
//   but no common operator is stated, so it is drafted on its own. eze bleu (kyoto_eze_bleu) sits in the Casa Bianca
//   building at 大原口町212; Casa Bianca itself is at 214. None of the four is in data/kyoto.json: grep by name and address
//   (西町127 1F, 天神前町340, 大原口214, 弓矢町31) found none.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-33');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260101/26023579/', 'chain branch: 亀屋良長 — 本店 already in data (kyoto_kameya_yoshinaga_honten)');

// ================================================================ コノシマビール Konoshima Beer
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26034397/'; const R = TB + 'dtlrvwlst/';
  const H = day(['14:00', '22:00']);
  put({
    id: 'kyoto_konoshima_beer', name: 'コノシマビール (Konoshima Beer)', category: 'OMNI',
    lat: 35.009447, lng: 135.781831, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: a draft-beer bar of barley beers; the snack is popcorn (2024–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Beer and popcorn only, with no ingredient information; a curry from the restaurant upstairs is sometimes offered (July 2025).',
    hours_raw: 'Tuesday–Sunday 14:00–22:00; closed Monday; hours may change (Tabelog). No reservations (Tabelog). A charge of ¥200 per person (Tabelog original 200円/1名), which brings the popcorn otoshi (2026 reviews). 7 counter seats plus standing room and a small terrace; non-smoking (Tabelog; January 2026). Children welcome, but no phone videos or game consoles (Tabelog). Cards, transit IC, iD, QUICPay, PayPay, d Barai, au PAY (Tabelog). 1F of the Sanjo Shirakawabashi building on Sanjo-dori, below ひがしやま 司; 3 min walk from Higashiyama Stn (Tabelog; March 2024). Opened 20 June 2020 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sanjo Shirakawabashi — 3 min walk from Higashiyama Stn',
    cuisine: 'Minimal beer bar of carefully poured Sapporo draughts: five taps, e.g. SORACHI 1984, Edel Pils, Black Label, Kohaku Ebisu, Ebisu Premium Black, Ebisu Meister; half-and-half (2024–2026 reviews) · three sizes from 180 ml: SORACHI 1984 180 ml ¥550; half-and-half 300 ml ¥850; Edel Pils or SORACHI 500 ml ¥850–1,100 (2024–2025 reviews) · popcorn with pepper as the snack; curry from ひがしやま 司 upstairs on occasion (2025–2026 reviews) · about ¥1,000–2,000 (Tabelog)',
    website: null, gmaps: gm('コノシマビール 京都 東山'), menu_url: null,
    notes: '[Beer bar · Sanjo Shirakawabashi by Higashiyama Stn] A pared-back seven-seat counter with plaster walls and five gleaming taps, pouring Sapporo draughts — SORACHI 1984, Edel Pils, Ebisu black — with care, from small 180 ml glasses, plus a peppery popcorn that guests rave about. The owner, an architect and Kyoto native, chats about the neighbourhood and where to eat next. A ¥200 seat charge. Afternoons and evenings; closed Monday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), an architect and Kyoto native (as reviewers describe)'], origin: 'Kyoto (July 2026 review).',
      background: 'Per Tabelog: opened 20 June 2020. Reviewers describe a narrow bar designed by its architect owner (May 2026), taps cleaned thoroughly every day (December 2025), events and a collaboration with ひがしやま 司 on the floor above (December 2025), an owner who knows the nearby restaurants (August 2024), and a Kyoto-born master who shared festival stories (July 2026).',
      philosophy: null, specialty: 'Carefully poured Sapporo draught; pepper popcorn.',
      anecdotes: [
        { text: 'A December 2025 regular turned up at 13:30, before opening, and was kindly let in anyway.', source: R + 'B427849339/' },
        { text: 'A July 2026 visitor heard from the Kyoto-born master that the Gion Festival really comes alive at night, and that the Abare Kannon is quite exciting.', source: R + 'B533069027/' },
        { text: 'A January 2026 guest asked how the pepper popcorn is made, and concluded it is best enjoyed at the bar.', source: R + 'B521020242/' },
      ],
      japanese_sources_summary: '食べログ: ビアバー・バー、東山区西町127 三条白川橋ビル 1F、地下鉄東山駅から徒歩3分、火〜日 14:00〜22:00、月曜定休、予約不可、チャージ200円/1名、7席 (カウンター、立ち飲みも)、禁煙、子ども可 (スマホの動画やゲーム機は不可)、カード・交通系IC・iD・QUICPay・PayPay・d払い・au PAY 可、2020年6月20日オープン。口コミ (2024年3月〜2026年7月、英語): サッポロの生ビール5種 (SORACHI 1984、Edel Pils、Black Label、Kohaku Ebisu、Ebisu Premium Black、Ebisu Meister)、ハーフ&ハーフ、180ml から3サイズ、SORACHI 180ml 550円、ハーフ&ハーフ 300ml 850円、500ml 850〜1,100円、お通しのポップコーン (胡椒)、2階のひがしやま 司のカレー、毎日タップを洗浄、建築家の店主、京都出身のマスター、店主と客の会話、漆喰の壁、テラス。',
      confidence: 'medium', sources: [TB, R + 'B427849339/', R + 'B428084973/', R + 'B428085062/', R + 'B449828061/', R + 'B491105850/', R + 'B505506033/', R + 'B517358075/', R + 'B521020242/', R + 'B528426898/', R + 'B533069027/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the counter; ¥200 charge with popcorn; cards, IC and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区西町127 三条白川橋ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through July 2026.' },
    pin_source: `Tabelog ${TB} (35.009447, 135.781831); cross-checked: GSI 京都府京都市東山区西町127番地 (lot) 45 m; kyoto_higashiyama_tsukasa (same building, 2F) is 5.7 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B428085062/', R + 'B428084973/', R + 'B505506033/'],
    price_note: 'Prices from 2024–2025 reviews; plus a ¥200 charge per person.', last_checked: TODAY, items: [
      it('', '', 'SORACHI 1984 draught (180 ml)', '¥550', 'Beer', 'no', 'ask', 'March 2024.', 'sorachi_180'),
      it('', '', 'Half-and-half draught (300 ml)', '¥850', 'Beer', 'no', 'ask', 'March 2024.', 'half_half'),
      it('', '', 'Edel Pils or SORACHI (500 ml)', '¥1,100', 'Beer', 'no', 'ask', 'April 2025; ¥850 on offer in May 2025.', 'beer_500'),
    ] }, {
    cuisine: '丁寧に注ぐサッポロの生ビールのシンプルなビアバー: タップ5本、例: SORACHI 1984、Edel Pils、Black Label、Kohaku Ebisu、Ebisu Premium Black、Ebisu Meister、ハーフ&ハーフ (2024〜2026年の口コミ)・180ml から3サイズ: SORACHI 1984 180ml 550円、ハーフ&ハーフ 300ml 850円、Edel Pilsや SORACHI 500ml 850〜1,100円 (2024〜2025年の口コミ)・つまみは胡椒のポップコーン、ときに2階のひがしやま 司のカレー (2025〜2026年の口コミ)・1,000〜2,000円ほど (食べログ)',
    neighborhood: '三条白川橋。東山駅から徒歩3分',
    gf_detail: 'グルテンフリー不可。大麦のビールのビアバーで、つまみはポップコーン (2024〜2026年の口コミ)。',
    vegan_detail: '要確認。ビールとポップコーンだけで原材料の情報はない。2階の店のカレーが出ることもある (2025年7月)。',
    notes: '[ビアバー・東山駅近くの三条白川橋] 漆喰の壁と5本の輝くタップだけのカウンター7席。SORACHI 1984、Edel Pils、Ebisu の黒などサッポロの生を丁寧に注ぎ、180ml の小さなグラスから選べる。評判の胡椒のポップコーンも。建築家で京都出身の店主が、界隈の話や次に行く店を教えてくれる。チャージ200円。昼過ぎから夜まで、月曜休み。',
  });
}

// ================================================================ 割烹 喜多 Kappou Kita
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26029435/'; const R = TB + 'dtlrvwlst/';
  const H = day(['10:00', '14:00'], ['17:00', '22:30']);
  put({
    id: 'kyoto_kappou_kita_tenmusu', name: '割烹 喜多 (Kappou Kita)', category: 'OMNI',
    lat: 34.998926, lng: 135.754556, cuisine_type: 'kaiseki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: tempura in wheat batter, dipped in a sauce of dashi, soy sauce, mirin and sugar (Tabelog).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood tempura rice balls with a dashi sauce, and a fish-led evening kappo (Tabelog; 2024–2026 reviews).',
    hours_raw: 'Wednesday–Monday 10:00–14:00 (tenmusu, lunch only) and 17:00–22:30 (kappo); closed Tuesday (Tabelog). Lunch tenmusu are fried to order, three pieces minimum, and sell out — come early (May 2025; July 2024). Reservations accepted; private hire possible (Tabelog). Cash only — no cards or e-money (Tabelog). 7 counter seats; non-smoking; takeaway in bamboo-leaf wraps and baskets (Tabelog). On the ground floor of an apartment building in the Matsubara Kyogoku shopping street near Gojo Tenjin Shrine; 9 min walk from Gojo Stn (Tabelog; August 2024). Opened 9 August 2017 (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Matsubara Kyogoku shopping street near Gojo Tenjin — 9 min walk from Gojo Stn',
    cuisine: 'Kyoto-style tenmusu by day and counter kappo by night, from a chef trained at a noted Gion restaurant (Tabelog; August 2024) · tenmusu: rice cooked in a hangiri, lightly battered tempura dipped in a sauce of dashi, soy, mirin and sugar, wrapped in nori — shrimp, sea bream, squid, anago, salmon, kisu, mentaiko, ayu, firefly squid; seasonal matsutake, autumn salmon, crab, bamboo shoot, sometimes beef fillet (Tabelog; 2024–2026 reviews) · tenmusu ¥300 each, three or more; dashimaki that sells out early (2024–2025 reviews) · evening: fig stew, mibuna salad, sashimi, smoked sardine, monkfish with ponzu, buri ham, house karasumi, simmered sea-bream roe, a tempura rice bowl; fish cooked low and slow to eat whole (2024–2025 reviews) · lunch ¥1,000–2,000, dinner ¥8,000–10,000 (Tabelog)',
    website: null, gmaps: gm('割烹 喜多 天むす 松原京極'), menu_url: null,
    notes: '[Tenmusu and kappo · Matsubara Kyogoku near Gojo Tenjin] A seven-seat counter with two lives. From 10:00, Kyoto-style tenmusu fried to order — plump shrimp, sea bream, anago, seasonal matsutake or crab — dipped in a sweet-savoury dashi sauce, ¥300 each, three or more, with a dashimaki that sells out. At night, an unpretentious kappo of sashimi, house karasumi and seasonal plates from a Gion-trained chef. Takeaway in bamboo leaf. Cash only; closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed), trained at a noted Gion restaurant (August 2024 review)'], origin: null,
      background: 'Per Tabelog: opened 9 August 2017; Kyoto-style tempura rice balls from a Japanese-cuisine chef, with rice cooked in a hangiri and a house sauce of dashi, soy sauce, mirin and sugar; registered as an official listing by the shop. An August 2024 reviewer writes that the owner trained at a prestigious Gion restaurant and runs the shop independently, serving tenmusu by day and kaiseki by night, and that the tenmusu was inspired by backstage visits to geisha.',
      philosophy: 'Light batter to bring out the ingredients (Tabelog).', specialty: 'Tenmusu; dashimaki.',
      anecdotes: [
        { text: 'An August 2024 reviewer titled the visit "Tenmusu inspired by backstage visits to geisha".', source: R + 'B483947777/' },
        { text: 'A Sunday in March 2026 saw several takeaway orders, likely for cherry-blossom picnics; a late-breakfast guest had firefly-squid tenmusu.', source: R + 'B525647324/' },
        { text: 'A December 2024 regular, coming often since the opening, ate monkfish with ponzu, buri ham, house karasumi and a tempura rice bowl.', source: R + 'B470694531/' },
      ],
      japanese_sources_summary: '食べログ: おにぎり・天ぷら・日本料理、下京区天神前町340、五条駅から徒歩9分、水〜月 10:00〜14:00・17:00〜22:30、火曜定休、天むすは昼のみ、予約可、貸切可、カード・電子マネー不可、7席 (カウンター)、禁煙、テイクアウト、2017年8月9日オープン。店の紹介: 松原京極商店街の「Tenmusu Kita」、和食の料理人の京風の天むす、hangiri を使うご飯、素材を生かす薄衣、だしに醤油・みりん・砂糖の自家製のたれ、季節の天むす (秋は松茸と秋鮭、冬は蟹、春は筍)、ときに牛ヒレ、笹と籠の持ち帰り。口コミ (2024年7月〜2026年3月、英語): 五条天神の近く、賃貸マンションの1階、祇園の名店で修業した店主、昼は天むす、夜は割烹、天むすは1個300円・3個から、注文後に揚げる、海老、鯛、いか、穴子、鮭、きす、明太子、鮎、ほたるいか、だし巻きはすぐ売り切れ、夜は無花果の煮物、Mibuna のサラダ、お造り、燻製のいわし、アンコウのポン酢、ぶりのハム、自家製のからすみ、鯛の子、天丼。',
      confidence: 'medium', sources: [TB, R + 'B456179382/', R + 'B470694531/', R + 'B483947777/', R + 'B487816730/', R + 'B488330188/', R + 'B493123911/', R + 'B510898306/', R + 'B515657552/', R + 'B524336720/', R + 'B525647324/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order three or more tenmusu at the counter; takeaway wraps; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区天神前町340',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official Tabelog listing; reviews through March 2026.' },
    pin_source: `Tabelog ${TB} (34.998926, 135.754556); cross-checked: GSI 京都府京都市下京区天神前町340番地 (lot) 20 m; nearest Kyoto record 137 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B483947777/', R + 'B510898306/'],
    price_note: 'Tenmusu price from an August 2024 review; cash only.', last_checked: TODAY, items: [
      it('', '', 'Tenmusu (shrimp, sea bream, squid, anago and more), each', '¥300', 'Lunch', 'no', 'no', 'Three pieces minimum.', 'tenmusu'),
      it('', '', 'Dashimaki', '', 'Lunch', 'ask', 'no', 'Sells out early.', 'dashimaki'),
    ] }, {
    cuisine: '昼は京風の天むす、夜はカウンター割烹、祇園の名店で修業した料理人 (食べログ、2024年8月)・天むす: hangiri を使うご飯、薄衣の天ぷらを、だし・醤油・みりん・砂糖のたれにくぐらせ海苔で巻く。海老、鯛、いか、穴子、鮭、きす、明太子、鮎、ほたるいか、季節の松茸、秋鮭、蟹、筍、ときに牛ヒレ (食べログ、2024〜2026年の口コミ)・天むすは1個300円、3個から、早く売り切れるだし巻き (2024〜2025年の口コミ)・夜: 無花果の煮物、Mibuna のサラダ、お造り、燻製のいわし、アンコウのポン酢、ぶりのハム、自家製のからすみ、鯛の子の煮付け、天丼、低温で頭まで食べられる魚 (2024〜2025年の口コミ)・昼1,000〜2,000円、夜8,000〜10,000円 (食べログ)',
    neighborhood: '五条天神近くの松原京極商店街。五条駅から徒歩9分',
    gf_detail: 'グルテンフリー不可。小麦の衣の天ぷらを、だし・醤油・みりん・砂糖のたれにくぐらせる (食べログ)。',
    vegan_detail: 'ヴィーガン不可。魚介の天むすとだしのたれ、魚中心の夜の割烹 (食べログ、2024〜2026年の口コミ)。',
    notes: '[天むすと割烹・五条天神近くの松原京極] 二つの顔を持つカウンター7席。10時からは注文ごとに揚げる京風の天むす (ぷりぷりの海老、鯛、穴子、季節の松茸や蟹) を甘辛いだしのたれにくぐらせて、1個300円、3個から。売り切れ必至のだし巻きも。夜は祇園で修業した料理人の気取らない割烹で、お造り、自家製のからすみ、季節の一品。笹包みの持ち帰りも。現金のみ、火曜休み。',
  });
}

// ================================================================ カーサビアンカ Casa Bianca
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26001025/'; const R = TB + 'dtlrvwlst/'; const WEB = 'http://www.casa-bianca.net';
  const H = day(['11:30', '14:00'], ['17:00', '21:30']);
  put({
    id: 'kyoto_casa_bianca_imadegawa', name: 'カーサビアンカ (Casa Bianca)', category: 'OMNI',
    lat: 35.029041, lng: 135.767288, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: the lunch and dinner courses centre on pasta, lasagna and bread (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses with seafood, horse tartare, veal, cheese and dairy desserts (2025–2026 reviews).',
    hours_raw: 'Tuesday–Sunday 11:30–14:00 and 17:00–21:30; closed Monday; hours may change (Tabelog). Reservations accepted (Tabelog); walk-ins usually fine at weekday lunch (2025 reviews). 60 seats incl. a counter; non-smoking; parking (Tabelog). Cards; no e-money (Tabelog). An old house with high ceilings, blue tablecloths and characterful chairs, on Imadegawa-dori west of Teramachi; about 570 m from Demachiyanagi Stn (Tabelog; August–September 2025).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Imadegawa-dori west of Teramachi — 10 min walk from Demachiyanagi Stn',
    cuisine: 'Italian in an old house near the Imperial Palace (2025–2026 reviews) · pasta lunch ¥2,600 with assorted antipasti, bread, pasta (e.g. carbonara, lasagna, cold tomato pasta), dessert and espresso; a fish lunch course (2025–2026 reviews) · dinner à la carte or courses: horse tartare, baked octopus, seafood arrabbiata (2025 reviews) · omakase: sea bream and karasumi carpaccio, scallops and shrimp, mushroom carbonara, sea bass in tomato or grilled veal, a dessert platter with herb ice creams, beet bread with refills (February 2026) · lunch about ¥3,000–4,000, dinner ¥10,000–15,000 (Tabelog)',
    website: WEB, gmaps: gm('カーサビアンカ 京都 今出川寺町'), menu_url: null,
    notes: '[Italian · Imadegawa Teramachi, near the Imperial Palace] A spacious, high-ceilinged Italian in an old house, with blue tablecloths and quirky chairs, long a local favourite. The ¥2,600 pasta lunch is the draw — antipasti, bread, pasta such as carbonara or a cheesy lasagna, dessert and espresso — with omakase courses of carpaccio, pasta and veal or fish at night. Most praise the value and service; one 2025 guest felt rushed as plates were cleared. Closed Monday.',
    chef_bio: { chef_name: null, roles: ['Kitchen and service staff (unnamed)'], origin: null,
      background: 'Per Tabelog: a 60-seat Italian on Imadegawa-dori west of Teramachi with parking. Reviewers in 2025–2026 call it a popular, long-known Italian among Kyoto locals (July 2026), in an old building used to good effect (September 2026).',
      philosophy: null, specialty: 'Pasta lunch; lasagna.',
      anecdotes: [
        { text: 'A September 2025 guest who returned for the lasagna felt hurried as plates — even the dessert fruit — were cleared before finishing, and vowed not to return.', source: R + 'B514607734/' },
        { text: 'A September 2026 visitor who stopped nearby to buy pickles ended up lunching here, and found the service attentive.', source: R + 'B536890899/' },
        { text: 'At a February 2026 family gathering the staff kept offering refills of four breads, one apparently made with beets.', source: R + 'B523140747/' },
      ],
      japanese_sources_summary: '食べログ: イタリアン、上京区今出川通寺町西入ル大原口214、出町柳駅から572m、火〜日 11:30〜14:00・17:00〜21:30、月曜定休、予約可、60席、カウンター、禁煙、駐車場あり、カード可、電子マネー不可。口コミ (2025年8月〜2026年9月、英語): 御所の近く、古い建物、高い天井、青いテーブルクロス、パスタランチ2,600円 (前菜の盛り合わせ、パン、パスタ、デザート、エスプレッソ)、カルボナーラ、ラザニア、冷製のトマトのパスタ、魚のランチコース、馬肉のタルタル、たこのオーブン焼き、魚介のアラビアータ、おまかせ (鯛とからすみのカルパッチョ、帆立と海老、きのこのカルボナーラ、スズキのトマトソースか仔牛のグリル、デザートの盛り合わせ)、ビーツのパン、お皿を下げるのが早かったとの声 (2025年9月)。',
      confidence: 'medium', sources: [TB, WEB, R + 'B511089291/', R + 'B513688606/', R + 'B514607734/', R + 'B515000633/', R + 'B515336212/', R + 'B520238495/', R + 'B523140747/', R + 'B531725651/', R + 'B534938398/', R + 'B536890899/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set lunches; book for dinner; cards; parking.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区今出川通寺町西入ル大原口214',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through September 2026.' },
    pin_source: `GSI 京都府京都市上京区大原口町214番地 (lot) (35.029041, 135.767288), used instead of the Tabelog pin ${TB} (35.029035, 135.767213), which sits 3 m from kyoto_eze_bleu (Casa Bianca building, 212); the GSI lot is 7 m from the Tabelog pin and 5.4 m from eze bleu; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B515336212/', R + 'B511089291/'],
    price_note: 'Lunch price from 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Pasta lunch (antipasti, bread, pasta, dessert, espresso)', '¥2,600', 'Lunch', 'no', 'no', 'August–October 2025.', 'pasta_lunch'),
    ] }, {
    cuisine: '御所近くの古い家のイタリアン (2025〜2026年の口コミ)・パスタランチ2,600円: 前菜の盛り合わせ、パン、パスタ (例: カルボナーラ、ラザニア、冷製のトマトのパスタ)、デザート、エスプレッソ、魚のランチコースも (2025〜2026年の口コミ)・夜はアラカルトかコース: 馬肉のタルタル、たこのオーブン焼き、魚介のアラビアータ (2025年の口コミ)・おまかせ: 鯛とからすみのカルパッチョ、帆立と海老、きのこのカルボナーラ、スズキのトマトソースか仔牛のグリル、ハーブのアイスのデザート盛り合わせ、おかわりできるビーツのパン (2026年2月)・昼3,000〜4,000円、夜10,000〜15,000円ほど (食べログ)',
    neighborhood: '寺町の西の今出川通。出町柳駅から徒歩10分',
    gf_detail: 'グルテンフリー不可。昼も夜もパスタ、ラザニア、パンが中心のコース (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚介、馬肉のタルタル、仔牛、チーズ、乳製品のデザートのコース (2025〜2026年の口コミ)。',
    notes: '[イタリアン・今出川寺町、御所の近く] 天井の高い古い家を生かした広いイタリアン。青いクロスと個性的な椅子、長く地元に愛される店。目当ては2,600円のパスタランチ (前菜、パン、カルボナーラやチーズたっぷりのラザニアなどのパスタ、デザート、エスプレッソ)。夜はカルパッチョ、パスタ、仔牛か魚のおまかせ。値段と接客をほめる声が多いが、2025年の客の一人は皿を下げるのが早く急かされたと書いている。月曜休み。',
  });
}

// ================================================================ のと正 Noto Sho
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26024515/'; const R = TB + 'dtlrvwlst/';
  const H = day(['09:00', '19:00']);
  put({
    id: 'kyoto_noto_sho_matsubara', name: 'のと正 (Noto Sho)', category: 'OMNI',
    lat: 34.998631, lng: 135.771864, cuisine_type: 'unagi',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: eel grilled with a sweet-savoury tare and river-fish dishes; no gluten information (2014–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a river-fish shop of eel, ayu, shijimi and dashimaki (2014–2026 reviews).',
    hours_raw: 'Monday–Saturday 9:00–19:00; closed Sunday, Monday when a holiday, and occasionally (Tabelog). Takeaway only — no seats (Tabelog). Reservations (orders) accepted (Tabelog). Cards, e-money and QR (Tabelog). On Matsubara-dori just west of Yamato-oji; 5 min walk from Kiyomizu-Gojo Stn or the Kawaramachi Matsubara bus stop (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Matsubara-dori west of Yamato-oji — 5 min walk from Kiyomizu-Gojo Stn',
    cuisine: 'Family river-fish shop, eel first, with tanks of live ayu and fish mainly from Lake Biwa and Shiga (2014–2017 reviews) · Kansai-style eel grilled on site: kabayaki, a whole eel about ¥2,300 (2017), unagi bento — regular about ¥2,000 (May 2026) or built from any eel in the window plus rice — and unadon (2014–2026 reviews) · unagi-maki and egg rolls, Yawata-maki of eel and burdock, eel-liver and heart skewers (2014–2024 reviews) · grilled young ayu, honmoroko, shijimi, duck roast, chirimen sansho, dashimaki (2014–2024 reviews) · takeaway only (Tabelog)',
    website: null, gmaps: gm('のと正 京都 松原通 川魚'), menu_url: null,
    notes: '[Eel takeaway · Matsubara-dori near Kenninji] A small family river-fish shop, three generations in, grilling Kansai-style eel in the window: generous unagi bento and unadon to go, whole kabayaki, unagi-maki, Yawata-maki and dashimaki, plus Lake Biwa ayu and honmoroko when in season. A neighbourhood fish-market feel; locals buy for New Year and dinner at home. Takeaway only. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Family-run, three generations (May 2026 review)'], origin: null,
      background: 'Per Tabelog: a takeaway shop of side dishes, delicatessen and eel on Matsubara-dori; registered as an official listing by the shop. Reviewers describe a specialist in river fish with tanks of live ayu, mostly from Lake Biwa and Shiga (September 2014), a chef grilling eel at the front (May 2017), clear pricing for bento (February 2024), and a business run by three generations of one family (May 2026).',
      philosophy: null, specialty: 'Unagi bento; Yawata-maki.',
      anecdotes: [
        { text: 'A December 2017 shopper, asked to buy a rolled dish for the New Year osechi, switched to the Yawata-maki here and made it a family New Year item.', source: R + 'B323137686/' },
        { text: 'A May 2026 visitor came after watching a drama about moving to Kyoto, and was impressed that three generations of one family run the shop.', source: R + 'B527252008/' },
        { text: 'A 2016 reviewer suggested tourists eat the bento on the stone steps near Kenninji — while admitting never having done so, as family lives nearby.', source: R + 'B226267809/' },
      ],
      japanese_sources_summary: '食べログ: 惣菜・デリ・うなぎ、東山区弓矢町31、京阪清水五条駅から徒歩約5分、市バス河原町松原から東へ徒歩約5分、月〜土 9:00〜19:00、日曜定休 (月曜祝日も休み、ほか不定休)、持ち帰りのみ、予約可、カード・電子マネー・QR 可、松原通大和大路西入。口コミ (2014年9月〜2026年5月、英語): 川魚の専門店、琵琶湖と滋賀の魚、生きた鮎の水槽、関西風に店で焼く鰻、蒲焼き1本2,300円ほど (2017年)、鰻弁当、うな丼、う巻き、Yawata-maki、肝やハツの串、若鮎の塩焼き、本もろこ、しじみ、鴨ロース、ちりめん山椒、だし巻き、鰻弁当 並2,000円ほど (2026年5月)、三代続く家族の店。',
      confidence: 'medium', sources: [TB, R + 'B112810387/', R + 'B226267809/', R + 'B265564072/', R + 'B323137686/', R + 'B344423478/', R + 'B412331298/', R + 'B464686446/', R + 'B482620857/', R + 'B527252008/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Point at the window; takeaway only; cards, e-money and QR.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市東山区弓矢町31',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official Tabelog listing; latest review May 2026.' },
    pin_source: `Tabelog ${TB} (34.998631, 135.771864); cross-checked: GSI 京都府京都市東山区弓矢町31番地 (lot) 26 m; kyoto_junshin_an is 18 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B527252008/', R + 'B226267809/'],
    price_note: 'Prices from 2017 and May 2026 reviews; check current prices.', last_checked: TODAY, items: [
      it('', '', 'Unagi bento (regular)', '¥2,000', 'Eel', 'no', 'no', 'May 2026, about.', 'unagi_bento'),
      it('', '', 'Grilled eel (kabayaki), whole', '¥2,300', 'Eel', 'no', 'no', 'April 2017, about.', 'kabayaki'),
      it('', '', 'Yawata-maki (eel and burdock)', '', 'Eel', 'no', 'no', 'December 2017.', 'yawata_maki'),
    ] }, {
    cuisine: '鰻を中心とした家族の川魚の店、生きた鮎の水槽、琵琶湖と滋賀の魚が中心 (2014〜2017年の口コミ)・店で焼く関西風の鰻: 蒲焼き、1本2,300円ほど (2017年)、鰻弁当 並2,000円ほど (2026年5月) か店頭の鰻とご飯で作る弁当、うな丼 (2014〜2026年の口コミ)・う巻き、鰻とごぼうのYawata-maki、肝やハツの串 (2014〜2024年の口コミ)・若鮎の焼き物、本もろこ、しじみ、鴨ロース、ちりめん山椒、だし巻き (2014〜2024年の口コミ)・持ち帰りのみ (食べログ)',
    neighborhood: '大和大路の西の松原通。清水五条駅から徒歩5分',
    gf_detail: 'グルテンフリー不可。甘辛いたれで焼く鰻と川魚の料理。グルテンの情報はない (2014〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鰻、鮎、しじみ、だし巻きの川魚の店 (2014〜2026年の口コミ)。',
    notes: '[鰻の持ち帰り・建仁寺近くの松原通] 三代続く家族の小さな川魚の店。店先で関西風の鰻を焼き、たっぷりの鰻弁当やうな丼、蒲焼き、う巻き、Yawata-maki、だし巻き、季節には琵琶湖の鮎や本もろこも。町の魚屋のような雰囲気で、正月やうちの夕食に地元の人が買いに来る。持ち帰りのみ。日曜休み。',
  });
}

save();
