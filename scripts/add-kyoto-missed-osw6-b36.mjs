// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 36.
//   + イル・ジェーコ Il Geco (late-night Italian and wine in a basement, Shijo Nishinotoin)
//   + てんぷら 永春 Tempura Eishun (8-seat tempura counter, Marutamachi)
//   + 洋食屋 キッチンゴン 六角店 Kitchen Gon Rokkaku (yoshoku known for pine rice, Rokkaku Takakura)
//   + INDÉPENDANTS アンデパンダン (Spanish dining bistro in the basement of the 1928 Building, Sanjo)
//   - skip 26039596 麺や虎鉄 京都拉麺小路店 (chain)
//   Same-name counts first, per brand or operator (2026-11-06): イル・ジェーコ — one. 永春 — one. キッチンゴン — Tabelog lists
//   three in Kyoto (西陣店, 二条店, 六角店; a Kitchen Gon in Fujishiro, Ibaraki, is unrelated); none in data — a small local
//   group, drafted. INDÉPENDANTS — one. 麺や虎鉄 — Tabelog lists the Kyoto Ramen Koji shop plus more than ten Menya Kotetsu
//   shops in and around Sapporo: a chain, skipped.
//   Taken on 2026-11-06: `next core 200` (lane) gave イル・ジェーコ 26023414 and 永春 26032708; `next notable 200` (lane) gave
//   キッチンゴン 26028826, 虎鉄 26039596 (skip) and INDÉPENDANTS 26000164. None is in data/kyoto.json: grep by name and address
//   (妙伝寺町720 光悦ビル, 亀屋町167-1, 堀之上町129, 弁慶石町56 1928ビル) found none.
//   Service charges per Tabelog's Japanese original: イル・ジェーコ 「なし ※おひとり様につきドリンク、お料理各一品のオーダー
//   がない場合お席料を頂戴いたします」; 永春 「無し」 (Tabelog’s English wrongly says a fee is added); INDÉPENDANTS
//   「個室ご利用の場合、1人500円頂きます。」; キッチンゴン none listed. No halal claims; no owner deaths in the sources.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-36');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26039596', 'chain: Tabelog lists Menya Kotetsu shops in Chitose, Shiroishi, Hachiken, Teine, Kiyota, Misono, Nishioka, Shinkotoni, Nishimachi, Atsubetsu, Kita 50-jo and more, besides this Kyoto Ramen Koji shop (https://tabelog.com/en/rstLst/?sw=%E9%BA%BA%E3%82%84%E8%99%8E%E9%89%84).');

// ================================================================ イル・ジェーコ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26023414/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '24:00']);
  put({
    id: 'kyoto_il_geco', name: 'イル・ジェーコ (Il Geco)', category: 'OMNI',
    lat: 35.002638, lng: 135.755298, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free as a menu: a long pasta list, focaccia, fried panelle (2024–26 reviews). Ask about the meat mains and antipasti.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: house pâté and ham, offal antipasti, tripe, lamb (2024–25 reviews); a November 2025 diner found no vegetable antipasto that night.',
    hours_raw: '18:00 to about midnight; closed Monday and irregularly (Tabelog). A pasta lunch runs one week a month — dates on Instagram (April 2025). Reservations accepted and advised at weekends (Tabelog; November 2025). No cover charge, but each guest is asked to order one drink and one dish, or a seat charge applies (Tabelog, Japanese text: 「なし ※おひとり様につきドリンク、お料理各一品のオーダーがない場合お席料を頂戴いたします」). Cards, no e-money (Tabelog). 14 seats: 6 at the counter, four tables for two; small groups up to 12 and private hire by phone (Tabelog). Non-smoking; smoking area outside (Tabelog). Children by arrangement (Tabelog). Basement of 光悦ビル on Nishinotoin south of Shijo; 5 min from Shijo and Karasuma Stns exit 26 (Tabelog). Opened 25 February 2014 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nishinotoin south of Shijo — 5 min from Shijo Stn',
    cuisine: 'Late-night Italian with over 50 wines; house pâté made to a different blend each time (Tabelog, shop text) · omakase antipasti of 6–7 dishes, ¥1,500 per person (April 2025) or ¥2,500 (May 2024), including gizzards and other offal · a long pasta list — fresh tomato and mozzarella spaghetti ¥1,800 (April 2025), penne with tripe and white beans (November 2025) · tagliata with fries (May 2024), lamb (November 2025), ayu (August 2026); mains take over 40 minutes, so order early (November 2025) · panelle, crema catalana (November 2025) · monthly lunch week: pasta lunch ¥1,870 with six small antipasti, salad, focaccia and coffee (April 2025)',
    website: null, gmaps: gm('イル・ジェーコ 西洞院'), menu_url: TB + 'dtlmenu/',
    notes: '[Italian · Shijo Nishinotoin, a late basement trattoria] A basement counter and a few tables near Shijo Karasuma, open to about midnight: an omakase antipasti spread (¥1,500–2,500, offal included), house pâté, a long pasta list and over 50 wines. Solo diners are welcome at the counter; mains take 40 minutes, so order mains first. One drink and one dish each, or a seat charge. Closed Monday.',
    chef_bio: { chef_name: null, roles: ['Chef-owner (unnamed)'], origin: null,
      background: 'Per Tabelog: an Italian restaurant, pasta house and wine bar opened 25 February 2014, open late. An April 2025 review spells the name IL GECO.',
      philosophy: null, specialty: 'Omakase antipasti; house pâté; pasta.',
      anecdotes: [
        { text: 'A May 2024 diner who dislikes offal found the gizzards and other horumon in the ¥2,500 antipasti free of any smell and changed opinion.', source: R + 'B454800417/' },
        { text: 'An October 2024 solo diner asked if one person was all right and the chef replied, "We’ll make adjustments as much as possible!"', source: R + 'B493456095/' },
        { text: 'A March 2024 diner noted many regulars and advised going late with someone who knows the place.', source: R + 'B502718201/' },
      ],
      japanese_sources_summary: '食べログ: イタリアン・パスタ・ワインバー、下京区西洞院通四条下ル妙伝寺町720 光悦ビル B1F、四条駅・烏丸駅26番出口から徒歩5分、18:00〜24:00頃、月曜休み (不定休あり)、予約可、チャージなし (一人1ドリンク1品の注文がない場合は席料)、カード可、14席 (カウンター6、2人がけテーブル4)、禁煙 (外に喫煙所)、2014年2月25日オープン、自家製パテ、ワイン50種以上。口コミ (2024年2月〜2026年8月、英語): おまかせ前菜 (砂肝やホルモン) 1,500円・2,500円、パスタが豊富、トマトとモッツァレラのスパゲッティ1,800円、タリアータ、パネッレ、カタラーナ、メインは40分以上かかる、月に一週間だけのランチ1,870円、常連が多い。',
      confidence: 'medium', sources: [TB, R + 'B448517982/', R + 'B454800417/', R + 'B481856285/', R + 'B483509129/', R + 'B493456095/', R + 'B494526370/', R + 'B502718201/', R + 'B507687635/', R + 'B516776810/', R + 'B517656388/', R + 'B534228627/', R + 'B59070003/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter seats suit solo diners; order a drink and a dish each; many regulars (2024–25 reviews). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区西洞院通四条下ル妙伝寺町720 光悦ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.002638, 135.755298); cross-checked: GSI 京都府京都市下京区妙伝寺町720番地 (lot) 59m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B59070003/', R + 'B507687635/', R + 'B454800417/'],
    price_note: 'Prices from May 2024 and April 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Omakase antipasti (per person)', '¥1,500', 'Antipasti', 'ask', 'no', 'April 2025; ¥2,500 in May 2024.', 'antipasti'),
      it('', '', 'Fresh tomato and mozzarella spaghetti', '¥1,800', 'Pasta', 'no', 'no', 'April 2025.', 'pomodoro'),
      it('', '', 'Pasta lunch (lunch week only)', '¥1,870', 'Lunch', 'no', 'ask', 'April 2025.', 'pasta_lunch'),
      it('', '', 'Tagliata with fries', '', 'Mains', 'ask', 'no', 'May 2024.', 'tagliata'),
    ] }, {
    cuisine: 'ワイン50種以上と遅い時間のイタリアン。自家製パテは毎回配合を変える (食べログの店の紹介)・おまかせの前菜6〜7品は一人1,500円 (2025年4月) や2,500円 (2024年5月) で、砂肝などのホルモンも・パスタが豊富: フレッシュトマトとモッツァレラのスパゲッティ1,800円 (2025年4月)、トリッパと白いんげん豆のペンネ (2025年11月)・タリアータとフライドポテト (2024年5月)、ラム (2025年11月)、鮎 (2026年8月)。メインは40分以上かかるので早めに (2025年11月)・パネッレ、カタラーナ (2025年11月)・月に一週間のランチ: パスタランチ1,870円 (前菜6種、サラダ、フォカッチャ、コーヒー付き) (2025年4月)',
    neighborhood: '四条の南の西洞院通。四条駅から徒歩5分',
    gf_detail: 'グルテンフリーではない。パスタが多く、フォカッチャ、揚げたパネッレも (2024〜2026年の口コミ)。肉のメインと前菜は要確認。',
    vegan_detail: 'ヴィーガン不可。自家製パテとハム、ホルモンの前菜、トリッパ、ラム (2024〜2025年の口コミ)。2025年11月には野菜の前菜がなかったとの声。',
    notes: '[イタリアン・四条西洞院、夜遅くまでの地下のトラットリア] 四条烏丸近くの地下、カウンターと数卓で24時頃まで。ホルモン入りのおまかせ前菜 (1,500〜2,500円)、自家製パテ、豊富なパスタ、50種以上のワイン。一人でもカウンターで。メインは40分かかるので先に注文を。一人1ドリンク1品、ない場合は席料。月曜休み。',
  });
}

// ================================================================ てんぷら 永春
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26032708/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '14:00'], ['18:00', '22:00']);
  put({
    id: 'kyoto_tempura_eishun', name: 'てんぷら 永春 (Tempura Eishun)', category: 'OMNI',
    lat: 35.013929, lng: 135.763245, cuisine_type: 'tempura',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat-batter tempura courses (2023–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses of fish and shellfish tempura with tentsuyu (2023–26 reviews).',
    hours_raw: '12:00–14:00 and 18:00–22:00; closing days vary (Tabelog). Reservations accepted, including through Instagram, and advised at weekends (Tabelog; June 2023, July 2024). CASH ONLY — no cards, e-money or QR (Tabelog). No service charge (Tabelog, Japanese text: 「無し」; Tabelog’s English wrongly says a fee is added). 8 counter seats, 2 more chairs possible (Tabelog). Non-smoking; children and strollers welcome (Tabelog). About 10 min from Marutamachi and Karasuma Oike Stns (Tabelog). Opened 20 July 2019 (Tabelog). Two 2025–26 diners found the counter area untidy (July 2025, June 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Karasuma Marutamachi area — 10 min from Marutamachi Stn',
    cuisine: 'Tempura courses fried piece by piece at an 8-seat counter by an owner who researches oils and flours (2024–26 reviews) · seasonal fish and vegetables — kisu, mushrooms, lotus root, amadai, eel, eggplant cut in cubes, shrimp, sweet potato — ending in a kakiage rice bowl and ice cream, all under ¥10,000 (February 2024) · anago, oysters, plump shrimp, crab dumplings (2024–25 reviews) · a little sushi within the course (July 2025) · finishes of tempura rice bowl, tempura soba (January 2025) or tempura ice cream (July 2024) · dips of salt, tentsuyu, wasabi, grated radish and plum sauce (March 2024; June 2026) · 7th-anniversary courses ¥3,300 and ¥5,500 (May 2026) · Japanese sake (July 2025)',
    website: null, gmaps: gm('てんぷら 永春 京都'), menu_url: TB + 'dtlmenu/',
    notes: '[Tempura · Marutamachi, a dedicated young fryer’s counter] Eight seats around a young owner-chef who experiments daily with oils and batter: seasonal fish and vegetables in a thin, crisp coat, a kakiage bowl to finish and tempura ice cream, for well under ¥10,000. A cheerful, chatty counter, though two diners found it untidy. Cash only; book via Instagram.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed), described as young and dedicated (February 2024)'], origin: null,
      background: 'Per Tabelog: a tempura counter opened 20 July 2019. Reviewers describe an owner who researches oils and flours scientifically (July 2025), adjusts batter and oil by ingredient (June 2023), and has posted more than 1,300 Instagram updates on daily trials (May 2026).',
      philosophy: null, specialty: 'Seasonal tempura course; anago; kakiage bowl.',
      anecdotes: [
        { text: 'A February 2024 diner learned the batter uses frozen flour, and found the cubed, skinless eggplant fluffy — a first.', source: R + 'B479656211/' },
        { text: 'A May 2026 diner came for the 7th-anniversary lunch, a ¥3,300 course offered that month only.', source: R + 'B528486724/' },
        { text: 'A June 2026 diner was told about the oils and ingredients and given wasabi and plum sauce to match each piece.', source: R + 'B530587603/' },
      ],
      japanese_sources_summary: '食べログ: 天ぷら、中京区亀屋町167-1 ディピュイ亀屋ビル 1F、丸太町駅・烏丸御池駅から徒歩10分、12:00〜14:00・18:00〜22:00、不定休、予約可、カード・電子マネー・QR 不可、サービス料無し、カウンター8席、禁煙、子供可、2019年7月20日オープン。口コミ (2022年11月〜2026年6月、英語): 油と粉を研究する若い店主、季節の魚と野菜の天ぷら、締めはかき揚げ丼、天丼、天ぷら蕎麦、天ぷらアイス、塩・天つゆ・わさび・大根おろし・梅のソース、7周年の3,300円と5,500円のコース、カウンターが散らかっているとの声。',
      confidence: 'medium', sources: [TB, R + 'B430303105/', R + 'B468383588/', R + 'B471848875/', R + 'B479656211/', R + 'B481838303/', R + 'B492681495/', R + 'B498892496/', R + 'B509161571/', R + 'B510757578/', R + 'B511062474/', R + 'B528486724/', R + 'B530587603/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One course at the counter; the owner explains oils and dips (June 2026); cash only. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区亀屋町167-1 ディピュイ亀屋ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB} (35.013929, 135.763245); cross-checked: GSI 京都府京都市中京区亀屋町167番地 (lot) 53m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B528486724/', R + 'B479656211/'],
    price_note: 'Anniversary course prices from May 2026; regular courses were under ¥10,000 in February 2024.', last_checked: TODAY, items: [
      it('', '', '7th-anniversary lunch course', '¥3,300', 'Courses', 'no', 'no', 'May 2026 only.', 'anniv_3300'),
      it('', '', '7th-anniversary course', '¥5,500', 'Courses', 'no', 'no', 'May 2026 only.', 'anniv_5500'),
      it('', '', 'Kakiage rice bowl (course finish)', '', 'Courses', 'no', 'no', 'February 2024.', 'kakiage_don'),
      it('', '', 'Tempura ice cream', '', 'Dessert', 'no', 'ask', 'July 2024.', 'tempura_ice'),
    ] }, {
    cuisine: '油と粉を研究する店主が、カウンター8席で一つずつ揚げる天ぷらのコース (2024〜2026年の口コミ)・季節の魚と野菜 (きす、きのこ、蓮根、甘鯛、鰻、角切りの茄子、海老、さつまいも)、締めはかき揚げ丼とアイスで、1万円以内 (2024年2月)・穴子、牡蠣、大きな海老、蟹の団子 (2024〜2025年の口コミ)・コースに寿司も少し (2025年7月)・締めは天丼、天ぷら蕎麦 (2025年1月) や天ぷらアイス (2024年7月)・塩、天つゆ、わさび、大根おろし、梅のソース (2024年3月、2026年6月)・7周年の3,300円と5,500円のコース (2026年5月)・日本酒 (2025年7月)',
    neighborhood: '烏丸丸太町の近く。丸太町駅から徒歩10分',
    gf_detail: 'グルテンフリーではない。小麦の衣の天ぷらのコース (2023〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚介の天ぷらと天つゆのコース (2023〜2026年の口コミ)。',
    notes: '[天ぷら・丸太町、研究熱心な若い店主のカウンター] 毎日油と衣を試す若い店主を囲む8席。季節の魚と野菜を薄くさくっと揚げ、かき揚げ丼と天ぷらアイスで締めて1万円を大きく下回る。明るく話の弾むカウンターだが、散らかっていたとの声も二つ。現金のみ、予約は Instagram で。',
  });
}

// ================================================================ 洋食屋 キッチンゴン 六角店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26028826/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['10:00', '14:30'], ['17:00', '20:30']); const WE = day(['11:00', '14:30'], ['17:00', '20:30']);
  put({
    id: 'kyoto_kitchen_gon_rokkaku', name: '洋食屋 キッチンゴン 六角店 (Kitchen Gon Rokkaku)', category: 'OMNI',
    lat: 35.007235, lng: 135.762788, cuisine_type: 'yoshoku',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: pine rice is topped with a breaded pork cutlet and curry or demi-glace; fried shrimp, fish fry and Neapolitan pasta (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork cutlet, hamburg steak, beef cutlet, shrimp fry (2026 reviews).',
    hours_raw: 'Mon, Tue, Thu, Fri 10:00–14:30 and 17:00–20:30; Sat–Sun 11:00–14:30 and 17:00–20:30; closed Wednesday (Tabelog). Reservations accepted (Tabelog). Cards and e-money (Tabelog). 40 seats incl. a counter; private hire for 20–50 (Tabelog). Non-smoking; children, kids menu and strollers welcome (Tabelog). One hour free at a partner car park with a ¥3,000 spend (Tabelog). Near Rokkaku Takakura; 459 m from Karasuma Stn (Tabelog). This branch opened 13 March 2017 (Tabelog).',
    hours: { 0: WD, 1: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Rokkaku Takakura — 459 m from Karasuma Stn',
    cuisine: 'Yoshoku of the Kitchen Gon house, said by reviewers to have created pine rice: fried rice under a thin pork cutlet with curry or demi-glace (October 2026) · pine rice ¥1,350 (October 2026), aka-pine rice ¥1,100 (October 2026), cheese hamburg pine rice ¥1,650 (October 2026); an all-toppings version; small portions come with salad (September 2026) · Gon set A of hamburg steak, shrimp fry and white fish fry (September 2026); C-Gon lunch of three items with a mini pine rice ¥2,100 (October 2026); beef cutlet (October 2026) · omurice with spicy curry (August 2026); Neapolitan pasta (September 2026) · draft beer and wine (2026 reviews)',
    website: null, gmaps: gm('洋食屋 キッチンゴン 六角店'), menu_url: TB + 'dtlmenu/',
    notes: '[Yoshoku · Rokkaku Takakura, the home of pine rice] A branch of Kitchen Gon, the yoshoku house reviewers credit with pine rice — fried rice under a thin pork cutlet and curry sauce (from ¥1,100) — plus big combination plates of hamburg steak and fried shrimp, beef cutlet, omurice and Neapolitan. 70s American pop and many overseas guests; one diner found the cutlet too salty. Open from 10:00 on weekdays; closed Wednesday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: this Rokkaku branch opened 13 March 2017; Tabelog also lists Kitchen Gon 西陣店 and 二条店. A September 2026 review says the house has been around since 1970, and an October 2026 review calls it the originator of pine rice.',
      philosophy: null, specialty: 'Pine rice.',
      anecdotes: [
        { text: 'An October 2026 diner swapped in a mini pine rice on the three-item C-Gon lunch to try the beef cutlet as well, with 70s American pop playing and overseas guests humming along.', source: R + 'B537851668/' },
        { text: 'A September 2026 diner liked the curry and nostalgic Neapolitan but found the tonkatsu so salty it took several glasses of water.', source: R + 'B531284630/' },
        { text: 'A September 2026 regular welcomed back the all-toppings pine rice but still did not know how to order the black version.', source: R + 'B506479677/' },
      ],
      japanese_sources_summary: '食べログ: 洋食、中京区堀之上町129 プラネシア六角高倉 1F、烏丸駅から459m、月火木金10:00〜14:30・17:00〜20:30、土日11:00〜14:30・17:00〜20:30、水曜休み、予約可、カード・電子マネー可、40席、禁煙、子供可・キッズメニュー、提携駐車場1時間無料 (3,000円以上)、2017年3月13日オープン。口コミ (2026年6月〜10月、英語): pine rice (焼き飯に薄いカツとカレーやデミ) 1,350円、aka-pine rice 1,100円、チーズハンバーグの pine rice 1,650円、全部のせ、ゴンセットA、C-ゴンランチ2,100円、ビーフカツ、カレーのオムライス、ナポリタン、1970年からの店 、pine rice の発祥、外国人の客が多い、カツが塩辛いとの声。',
      confidence: 'medium', sources: [TB, R + 'B497095883/', R + 'B506479677/', R + 'B529871188/', R + 'B530023043/', R + 'B531284630/', R + 'B534528747/', R + 'B535899578/', R + 'B536219628/', R + 'B537354835/', R + 'B537618491/', R + 'B537851668/', R + 'B537899290/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order from the menu; plenty of overseas guests (October 2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区堀之上町129 プラネシア六角高倉 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.007235, 135.762788); cross-checked: GSI 京都府京都市中京区堀之上町129番地 (lot) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537899290/', R + 'B537618491/', R + 'B497095883/', R + 'B537851668/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Pine rice', '¥1,350', 'Pine rice', 'no', 'no', 'October 2026.', 'pine_rice'),
      it('', '', 'Aka-pine rice', '¥1,100', 'Pine rice', 'no', 'no', 'October 2026.', 'aka_pine'),
      it('', '', 'Cheese hamburg pine rice', '¥1,650', 'Pine rice', 'no', 'no', 'October 2026.', 'cheese_hamburg_pine'),
      it('', '', 'C-Gon lunch (three items, mini pine rice)', '¥2,100', 'Lunch', 'no', 'no', 'October 2026.', 'c_gon_lunch'),
    ] }, {
    cuisine: 'pine rice を生んだと口コミで言われるキッチンゴンの洋食: 焼き飯に薄い豚カツをのせ、カレーかデミグラスをかける (2026年10月)・pine rice 1,350円、aka-pine rice 1,100円、チーズハンバーグの pine rice 1,650円 (2026年10月)、全部のせもあり、少なめにはサラダ付き (2026年9月)・ハンバーグ、海老フライ、白身魚フライのゴンセットA (2026年9月)、3品にミニ pine rice の C-ゴンランチ2,100円 (2026年10月)、ビーフカツ (2026年10月)・辛いカレーのオムライス (2026年8月)、ナポリタン (2026年9月)・生ビールとワイン (2026年の口コミ)',
    neighborhood: '六角高倉。烏丸駅から459m',
    gf_detail: 'グルテンフリーではない。pine rice は衣の豚カツとカレーかデミグラス。海老フライ、魚のフライ、ナポリタンも (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。豚カツ、ハンバーグ、ビーフカツ、海老フライ (2026年の口コミ)。',
    notes: '[洋食・六角高倉、pine rice の店] 口コミで pine rice (焼き飯に薄いカツとカレー、1,100円から) を生んだとされるキッチンゴンの支店。ハンバーグとフライの盛り合わせ、ビーフカツ、オムライス、ナポリタンも。70年代のアメリカンポップが流れ、外国人の客も多い。カツが塩辛かったとの声も。平日は10時から、水曜休み。',
  });
}

// ================================================================ INDÉPENDANTS
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26000164/'; const R = TB + 'dtlrvwlst/';
  const OF = 'https://cafe-independants.com/';
  const WD = day(['12:00', '14:30'], ['17:00', '23:00']); const WE = day(['12:00', '23:00']);
  put({
    id: 'kyoto_independants', name: 'INDÉPENDANTS (アンデパンダン)', category: 'OMNI',
    lat: 35.008478, lng: 135.766566, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free as a menu: pasta lunches with baguette, coca (Spanish flatbread) (2026 reviews). Ask about the paella.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Paellas of squid ink, seafood or duck, charcuterie and pasta (2026 reviews); no vegan information.',
    hours_raw: 'Weekdays: lunch 12:00–14:30 (last order 14:00), dinner 17:00–23:00; weekends and holidays 12:00–23:00; food last order 22:00, drinks 22:30 (official site, from 21 August 2026; Tabelog). Lunch menu only from 12:00 to 14:00; seafood paella only at dinner (Tabelog; August 2026). Occasional closures are posted on the official site (e.g. 19–21 October 2026). Reservations accepted; walk-ins usually possible (Tabelog; July 2026). Private room ¥500 per person (Tabelog, Japanese text: 「個室ご利用の場合、1人500円頂きます。」). Cards, e-money and QR incl. PayPay and Alipay (Tabelog). 70 seats, banquets to 90; QR-code ordering (Tabelog; July 2026). Non-smoking (Tabelog). Basement of the 1928 Building on Sanjo east of Gokomachi; 9 min from Kyoto Shiyakusho-mae Stn (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sanjo Gokomachi, under the 1928 Building — 9 min from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Spanish dining bistro under an art-filled brick basement (Tabelog; official site) · paella: squid ink (July–October 2026), duck cooked from raw rice to order, seafood at dinner only (August–September 2026) · charcuterie platter, coca (September 2026) · clam vongole (July 2026); lunch pasta sets with salad and soup — Amatriciana, carbonara with baguette (August–October 2026) · beer and wine, glass ¥800 (July 2026) · live music events (official site)',
    website: OF, gmaps: gm('INDÉPENDANTS 1928ビル'), menu_url: OF + 'menu/',
    notes: '[Spanish bistro · Sanjo, the basement of the 1928 Building] A brick basement under 武田五一’s 1928 Building, revived by artists in 1998, now a dining bistro with Taizan tiles, art and live music. Come for squid-ink paella, duck paella cooked to order, charcuterie and coca, or a pasta lunch set. Easy to walk in; the house wine disappointed one diner. Open from noon to 23:00.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per the official site: INDÉPENDANTS occupies the basement of the 1928 Building, a Kyoto City registered tangible cultural property designed by 武田五一, called the father of Kansai architecture; in 1998 a group of artists restored the long-derelict basement and gave it new life as INDÉPENDANTS, a place where food and art meet. The site has pages on its Taizan tiles, art and live events.',
      philosophy: 'A meal that satisfies all five senses in a historic space (official site).', specialty: 'Squid-ink paella.',
      anecdotes: [
        { text: 'A September 2026 tile enthusiast came for the Taizan tiles and recommended the charcuterie platter and the coca.', source: R + 'B535130445/' },
        { text: 'A November 2026 couple asked for paella at lunch, normally dinner only, and the staff kindly made it.', source: R + 'B538731752/' },
        { text: 'A July 2026 diner liked being able to walk in without a booking on a Friday, though the ¥800 glass of wine disappointed.', source: R + 'B532385122/' },
      ],
      japanese_sources_summary: '公式サイト: 京都三条の食とアートが融合するダイニングビストロ、武田五一設計の京都市登録有形文化財「1928ビル」の地下、1998年に多くのアーティストが廃墟同然の地階を復元し「INDÉPENDANTS」に、Taizan のタイル、アート、ライブ、2026年8月21日からの営業時間 (平日 昼12:00〜14:30・夜17:00〜23:00、土日祝12:00〜23:00)、2026年10月19日〜21日休み。食べログ: スペイン料理・パブ、中京区三条通御幸町東入弁慶石町56 1928ビル B1F、京都市役所前駅3番出口から徒歩9分、予約可、個室は1人500円、カード・電子マネー・QR 可、70席、禁煙。口コミ (2026年7月〜11月、英語): イカ墨のパエリア、鴨のパエリア、魚介のパエリアは夜のみ、生ハムなどの盛り合わせ、コカ、ボンゴレ、ランチのパスタセット、QR で注文、予約なしでも入りやすい。',
      confidence: 'medium', sources: [TB, OF, OF + 'history/', OF + '20260808-change-in-businesshours/', R + 'B531197217/', R + 'B531803303/', R + 'B532265571/', R + 'B532385122/', R + 'B534747339/', R + 'B535130445/', R + 'B535154489/', R + 'B535339956/', R + 'B536497106/', R + 'B536706873/', R + 'B537518430/', R + 'B538731752/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order by QR code at the table; walk-ins usually fine; chopsticks offered with pasta (August 2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区三条通御幸町東入弁慶石町56 1928ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (hours notice of August 2026, closure notice of October 2026) and Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.008478, 135.766566); cross-checked: GSI 京都府京都市中京区弁慶石町56番地 (lot) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532385122/', OF + 'menu/'],
    price_note: 'One drink price from a July 2026 review; menu on the official site.', last_checked: TODAY, items: [
      it('', '', 'Squid-ink paella', '', 'Paella', 'ask', 'no', 'July–October 2026.', 'squid_ink_paella'),
      it('', '', 'Duck paella', '', 'Paella', 'ask', 'no', 'Cooked from raw rice (September 2026).', 'duck_paella'),
      it('', '', 'Lunch pasta set', '', 'Lunch', 'no', 'ask', 'With salad and soup (August 2026).', 'pasta_lunch'),
      it('', '', 'Glass of wine', '¥800', 'Drinks', '', 'ask', 'July 2026.', 'glass_wine'),
      it('', '', 'Private room charge (per person)', '¥500', 'Charge', '', '', 'Tabelog.', 'private_room'),
    ] }, {
    cuisine: 'アートのあるレンガの地下のスペイン料理のダイニングビストロ (食べログ、公式サイト)・パエリア: イカ墨 (2026年7月〜10月)、注文後に生米から炊く鴨、魚介は夜のみ (2026年8月〜9月)・シャルキュトリーの盛り合わせ、コカ (2026年9月)・ボンゴレ (2026年7月)、ランチはサラダとスープ付きのパスタ (アマトリチャーナ、バゲット付きのカルボナーラ) (2026年8月〜10月)・ビールとワイン、グラス800円 (2026年7月)・ライブも (公式サイト)',
    neighborhood: '三条御幸町、1928ビルの地下。京都市役所前駅から徒歩9分',
    gf_detail: 'グルテンフリーではない。バゲット付きのパスタランチ、コカ (2026年の口コミ)。パエリアは要確認。',
    vegan_detail: '要確認。イカ墨、魚介、鴨のパエリア、シャルキュトリー、パスタ (2026年の口コミ)。ヴィーガンの情報はない。',
    notes: '[スペイン料理・三条、1928ビルの地下] 武田五一の1928ビルの地下を、1998年にアーティストたちが甦らせたダイニングビストロ。Taizan のタイル、アート、ライブ。イカ墨のパエリア、注文後に炊く鴨のパエリア、シャルキュトリーとコカ、昼はパスタのセット。予約なしでも入りやすい。グラスワインは今ひとつとの声。昼12時から23時まで。',
  });
}

save();
