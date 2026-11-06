// Kyoto priority (kyoto-missed), worker osw13, batch 62 — lane: Tabelog id mod 6 = 0.
// Core: にこみや 岳, 58DINER. Notable: 富小路 信, 一凛.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-06';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-62');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ にこみや 岳
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26040156/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '13:30'], ['18:00', '22:00']);
  put({
    id: 'kyoto_nikomiya_gaku', name: 'にこみや 岳 (Nikomiya Gaku)', category: 'OMNI',
    lat: 35.005349, lng: 135.753524, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: miso-based stews and soups, pork-soup udon, gyoza and spring rolls (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork miso soup, offal stew, fish dishes (2026 reviews).',
    hours_raw: 'Tabelog: lunch 11:30–13:30, a pork-miso-soup set until sold out; dinner 18:00–22:00 (last orders food 21:00, drinks 21:30); closed irregularly, posted on Instagram (@nikomiya_gaku) and Google. 18 seats — 10 at the counter and two tables for 4 on a raised floor; non-smoking. Cash only — no cards, e-money or QR. Cover with otoshi ¥300 (Tabelog, Japanese original 「チャージお突き出し300円頂いております」). Opened 12 October 2023 at this address; a June 2026 diner says it had moved and been renovated.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Shijo-Horikawa — 2 min walk from the Shijo Horikawa bus stop; 10 min from Shijo Stn',
    cuisine: 'A stew-and-obanzai izakaya at night and a pork-miso-soup shop at lunch (Tabelog; 2026 reviews) · lunch: pork miso soup set with rice, a small side and pickles ¥700; tamago-kake-gohan +¥100; pork-miso-soup udon set ¥950 (2026 reviews) · dinner: the signature nikomi (simmered offal with daikon), three obanzai, yuba sashimi, Kamo eggplant dengaku done mapo-style with sansho, goya champuru, chilli and jako, spring rolls, Saikyo-miso salmon, gyoza, a spicy curry to finish; sake and gin sodas (2026 reviews)',
    website: 'https://www.instagram.com/nikomiya_gaku/', gmaps: gm('にこみや 岳 山田町'), menu_url: null,
    notes: '[Izakaya · Shijo-Horikawa, nikomi stew and a ¥700 pork-soup lunch] A homely ten-seat counter near Shijo-Horikawa run by a couple: at lunch a hearty pork-miso-soup set for ¥700, at night the house offal nikomi, obanzai and a spicy curry to finish, with sake and a baseball game on TV. One October 2026 diner found the couple more focused on chatting than on guests. Cash only; ¥300 cover.',
    chef_bio: { chef_name: null, roles: ['Run by a couple, not named (October 2026); "the master" (July 2026)'], origin: null,
      background: 'Opened at this address on 12 October 2023 (Tabelog); a June 2026 diner says it had moved and been renovated, now with ten counter seats and two tables on a wooden floor. Reviewers in 2026 describe a homely, nostalgic room with a TV showing baseball, a lunch crowd of locals, and a master who took part in the Gion Matsuri in July.',
      philosophy: null,
      specialty: 'Motsu nikomi; pork miso soup set.',
      anecdotes: [
        { text: 'October 2026: the raw egg for the tamago-kake-gohan arrived broken, and "the couple running the place seems friendly, but they don’t pay much attention to the customers and are more focused on chatting among themselves."', source: R + 'B538201339/' },
        { text: 'A July 2026 walk-in during the Gion Matsuri found "the master was out participating in the Gion Matsuri," so the menu was a little different — still delicious.', source: R + 'B533808296/' },
        { text: 'July 2026: the gyoza were "a bit tough; I wish the skin was thinner," but the closing curry "might even surpass the curry from a dedicated curry shop."', source: R + 'B531767628/' },
      ],
      japanese_sources_summary: '食べログ: にこみや 岳、居酒屋・郷土料理、中京区山田町529-1、四条堀川バス停から徒歩2分、四条駅から徒歩10分、昼 11:30〜13:30 は豚汁定食 (売り切れまで)、夜 18:00〜22:00 (料理 L.O. 21:00、ドリンク L.O. 21:30)、不定休 (Instagram と Google で告知)、18席 (カウンター10、4人テーブル2)、禁煙、カード・電子マネー・QR不可、チャージお突き出し300円、2023年10月12日オープン。口コミ (2026年2月〜10月、英語): 豚汁定食700円 (ご飯、小鉢、漬物)、卵かけご飯+100円、豚汁うどん定食950円、夜は名物のもつ煮込み、おばんざい3種、湯葉刺し、加茂茄子の麻婆風田楽、ゴーヤチャンプルー、じゃこと唐辛子、春巻、鮭の西京焼き、餃子、締めの辛いカレー、ジンソーダ、移転・改装、マスターは祇園祭に参加、夫婦が客より自分たちの話に夢中で卵が割れていたという声、餃子の皮が厚いという声。',
      confidence: 'medium', sources: [TB, R + 'B474364390/', R + 'B513481693/', R + 'B527966237/', R + 'B529972120/', R + 'B531767628/', R + 'B533313319/', R + 'B533808296/', R + 'B534077237/', R + 'B537060688/', R + 'B538201339/'] },
    cultural_comfort: { level: 'japanese', note: 'A local counter; cash only.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区山田町529-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.005349, 135.753524); cross-checked: GSI 京都府京都市中京区山田町529番地 (lot) 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B513481693/', R + 'B538201339/'],
    price_note: 'Prices from 2026 reviews; ¥300 cover at night.', last_checked: TODAY, items: [
      it('', '', 'Pork miso soup set (rice, side, pickles)', '¥700', 'Lunch', 'ask', 'no', 'July and October 2026; TKG +¥100.', 'tonjiru_teishoku'),
      it('', '', 'Pork miso soup udon set', '¥950', 'Lunch', 'no', 'no', 'February and May 2026.', 'udon'),
      it('', '', 'Motsu nikomi (simmered offal)', null, 'Dinner', 'ask', 'no', 'June–August 2026.', 'motsu_nikomi'),
    ] }, {
    cuisine: '夜は煮込みとおばんざいの居酒屋、昼は豚汁の店 (食べログ、2026年の口コミ)・昼は豚汁定食700円 (ご飯、小鉢、漬物)、卵かけご飯は+100円、豚汁うどん定食950円 (2026年の口コミ)・夜は名物のもつ煮込み (大根入り)、おばんざい3種、湯葉刺し、山椒の効いた麻婆風の加茂茄子田楽、ゴーヤチャンプルー、唐辛子とじゃこ、春巻、鮭の西京焼き、餃子、締めの辛いカレー。日本酒やジンソーダ (2026年の口コミ)',
    neighborhood: '四条堀川。四条堀川バス停から徒歩2分、四条駅から10分',
    gf_detail: 'グルテンフリーではない: 味噌の煮込みや汁、豚汁うどん、餃子、春巻 (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 豚汁、もつ煮込み、魚料理 (2026年の口コミ)。',
    notes: '[居酒屋・四条堀川、もつ煮込みと700円の豚汁ランチ] 四条堀川近くの家庭的な10席のカウンターで、夫婦が営む。昼はたっぷりの豚汁定食700円、夜は名物のもつ煮込み、おばんざい、締めの辛いカレーを、日本酒と野球中継とともに。2026年10月には、夫婦が客よりおしゃべりに夢中だったという声も。現金のみ。チャージ300円。',
  });
}

// ================================================================ 58DINER
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26004510/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.58diner.com/';
  const H = day(['11:00', '21:00']);
  put({
    id: 'kyoto_58diner', name: '58DINER', category: 'OMNI',
    lat: 35.013770, lng: 135.778976, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: burgers on house-baked buns and fries from a shared fryer are likely (Tabelog; reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask: Tabelog lists vegetarian options, but the menu is beef burgers, steak and bacon (Tabelog; reviews).',
    hours_raw: 'Tabelog: Tue–Sun and holidays 11:00–21:00 (last order 20:00); closed Monday (or the next day after a Monday holiday); a February 2026 diner notes weekends and holidays sometimes run to 23:00. Orders by tablet (October 2025; February 2026). 32 seats over two floors; non-smoking; English and Chinese menus, English-speaking staff; children welcome; cards and PayPay. Busy at lunch and during events at Miyakomesse or ROHM Theatre; a wait when full (2025–2026 reviews).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Okazaki, near Heian Shrine and ROHM Theatre — about 6 min walk from Higashiyama Stn',
    cuisine: 'An American West Coast-style diner of burgers and steak (Tabelog blurb) · burgers of 100% beef on buns baked in-house each day, pickles with home-grown herbs: 58 cheeseburger, monthly burger set ¥1,680, craft bacon burger set ¥1,840, Hungry Burger about ¥1,500, a wagyu "Umami" burger with tororo kombu, avocado burger; drink with a set +¥400 (2025–2026 reviews) · spiced curry; large fries; Kyoto craft beer and draft beer in a mug (2025–2026 reviews) · dinner steak course from ¥2,200; BBQ course for 4–5 (Tabelog blurb)',
    website: SITE, gmaps: gm('58DINER 岡崎最勝寺町'), menu_url: null,
    notes: '[Burgers · Okazaki near Heian Shrine, a West Coast diner] A two-floor American diner behind Heian Shrine, handy after the museums or a show at ROHM Theatre: thick 100%-beef burgers on house-baked buns, a monthly burger, a wagyu burger with tororo kombu, big plates of fries, and a steak course at night. Order by tablet; expect a wait at lunch. English menu. Closed Monday.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'The shop’s Tabelog blurb promises American food made with "LOVE" near Heian Shrine: 100% beef patties, pickles marinated with herbs it grows, buns baked daily in-house, a steak course from ¥2,200 and BBQ courses. Reviewers in 2025–2026 describe a classic American-movie interior over two floors, tablet ordering, regulars mixed with tourists, and crowds when Miyakomesse or ROHM Theatre has an event.',
      philosophy: null,
      specialty: 'House-bun burgers; monthly burger.',
      anecdotes: [
        { text: 'September 2026: a "Large French Fries" order "seemed perfect for sharing among several people" — too much for a pre-show snack alone; mobile signal was weak at the back.', source: R + 'B536436643/' },
        { text: 'February 2026: a diner who came for burgers tried the curry instead — "packed with spices and incredibly delicious!"', source: R + 'B523659578/' },
      ],
      japanese_sources_summary: '食べログ: 58DINER、ダイニングバー・ハンバーガー、左京区岡崎最勝寺町2-38、東山駅から485m、火〜日・祝 11:00〜21:00 (L.O. 20:00)、月曜休み (祝日の場合は翌日)、32席 (1階16、2階16)、禁煙、英語・中国語メニュー、英語対応、ベジタリアン対応、子供可、カード・PayPay可、平安神宮の近くでアメリカ西海岸の世界、LOVE を込めたアメリカンフード、牛肉100%のパティ、自家栽培のハーブのピクルス、毎日店で焼くバンズ、ステーキコース2,200円から、4〜5名のBBQコース。口コミ (2025年10月〜2026年11月、英語): タブレットで注文、58チーズバーガー、月替わりバーガーセット1,680円、クラフトベーコンバーガーセット1,840円、ハングリーバーガー1,500円ほど、とろろ昆布をのせた和牛の旨味バーガー、アボカドバーガー、ドリンクセット400円、スパイスカレー、大盛りのポテト、京都のクラフトビール、ジョッキの生ビール、ランチや催し物の日は混む、奥は電波が弱い。',
      confidence: 'medium', sources: [TB, SITE, R + 'B515199467/', R + 'B517150006/', R + 'B520008213/', R + 'B523659578/', R + 'B529262877/', R + 'B531328139/', R + 'B534857737/', R + 'B536436643/', R + 'B537596728/', R + 'B538565948/'] },
    cultural_comfort: { level: 'english', note: 'English and Chinese menus; English-speaking staff; tablet ordering (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区岡崎最勝寺町2-38',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.013770, 135.778976); cross-checked: GSI 京都府京都市左京区岡崎最勝寺町2番地 (lot) 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B538565948/', R + 'B517150006/'],
    price_note: 'Prices from 2025–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Monthly burger set', '¥1,680', 'Burgers', 'no', 'no', 'November 2026.', 'burger'),
      it('', '', 'Craft bacon burger set', '¥1,840', 'Burgers', 'no', 'no', 'November 2026.', 'burger'),
      it('', '', 'Drink with a set', '+¥400', 'Drink', 'ask', 'ask', 'November 2026.', 'drink'),
    ] }, {
    cuisine: 'アメリカ西海岸風のハンバーガーとステーキのダイナー (食べログの紹介文)・牛肉100%のパティを毎日店で焼くバンズで、自家栽培のハーブのピクルス。58チーズバーガー、月替わりバーガーセット1,680円、クラフトベーコンバーガーセット1,840円、ハングリーバーガー1,500円ほど、とろろ昆布をのせた和牛の旨味バーガー、アボカドバーガー、セットのドリンク+400円 (2025〜2026年の口コミ)・スパイスカレー、大盛りのポテト、京都のクラフトビール、ジョッキの生ビール (2025〜2026年の口コミ)・夜はステーキコース2,200円から、4〜5名のBBQコース (食べログの紹介文)',
    neighborhood: '岡崎、平安神宮とロームシアターの近く。東山駅から徒歩約6分',
    gf_detail: 'グルテンフリーではない: 店で焼くバンズのバーガー。ポテトも共用のフライヤーと思われる (食べログ、口コミ)。',
    vegan_detail: '要確認: 食べログではベジタリアン対応とあるが、メニューは牛肉のバーガー、ステーキ、ベーコンが中心 (食べログ、口コミ)。',
    notes: '[ハンバーガー・平安神宮近くの岡崎、西海岸風のダイナー] 平安神宮の裏手にある2フロアのアメリカンダイナー。美術館やロームシアターの帰りに寄りやすい。毎日焼くバンズに牛肉100%の分厚いパティ、月替わりのバーガー、とろろ昆布の和牛バーガー、大盛りのポテト、夜はステーキコースも。タブレットで注文、昼は待つことも。英語メニューあり。月曜休み。',
  });
}

// ================================================================ 富小路 信
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26033856/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.kyoto-shin.jp';
  const H = day(['11:30', '14:30'], ['18:00', '21:00']);
  put({
    id: 'kyoto_tominokoji_shin', name: '富小路 信 (Tominokoji Shin)', category: 'MOM_AND_POP',
    lat: 35.017235, lng: 135.765080, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: Tabelog lists gluten-free options, but the standard course includes a fish pie in pastry and French bread (2026 reviews); request it when booking.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask: Tabelog lists vegan and vegetarian options; the standard course has fish, duck, pork, salmon roe and dairy (2026 reviews).',
    hours_raw: 'Tabelog: lunch 11:30–14:30 (last order 13:30), dinner 18:00–21:00 (last order 20:30); closed Monday. No service charge or cover — Tabelog, Japanese original 「サービス料、チャージ共に無し」. 26 seats — 16 at tables plus private rooms for 3 and 6; private hire for 10–16 by phone; non-smoking; wheelchair accessible; children welcome with a kids’ menu; cards. Even when online booking shows full, call. Opened 1 December 2019 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Tominokoji just south of Marutamachi, near the Imperial Palace — about 8 min walk from Marutamachi Stn',
    cuisine: 'French courses in a Kyoto machiya built on organic vegetables from contract farmers in Sonobe (January 2026) · lunch course of six dishes ¥5,500 (January 2026); ¥5,000 with one drink via a booking site (August 2026); dinner course ¥11,000 (September 2026) · seen: Sonobe vegetable consommé, a "milk glass cocktail" of rice-koji milk jelly, goat’s-milk jelly with spinach and ikura, saffron and carrot potages, a taiyaki-shaped pastry filled with sea bream or akou with sauce américaine, low-temperature roast duck, charcoal-grilled pork shoulder in Bordeaux sauce, fruit cakes, canelés, French bread imported from France (2026 reviews)',
    website: SITE, gmaps: gm('富小路 信 桝屋町'), menu_url: null,
    notes: '[French · Tominokoji near the Imperial Palace, organic Sonobe vegetables] A quiet machiya French restaurant just south of Marutamachi: chef Okumura’s colourful courses of Sonobe organic vegetables — a "meadow" in a cocktail glass, a taiyaki-shaped fish pie, roast duck — from ¥5,500 at lunch and ¥11,000 at dinner, with private rooms upstairs. Gluten-free and vegan requests listed on Tabelog. One diner found the fish sauce thin and salty (May 2026). No service charge. Closed Monday.',
    chef_bio: { chef_name: 'Okumura', roles: ['Chef (named in a January 2026 review); a female staff member makes the desserts (March 2026)'], origin: null,
      background: 'Opened 1 December 2019 (Tabelog). A January 2026 diner describes a white-and-wood machiya, organic vegetables and seasonal ingredients from contract farmers in Sonobe, Kyoto, and chef Okumura plating each course with care. Other 2026 reviewers mention classical music, a friendly chef, a female staff member in charge of desserts, private rooms on the second floor, and French bread said to be imported from France.',
      philosophy: null,
      specialty: 'Taiyaki-shaped fish pie; Sonobe vegetable consommé.',
      anecdotes: [
        { text: 'January 2026: the rice-koji "milk glass cocktail" — "It felt like a different world inside the glass."', source: R + 'B521781355/' },
        { text: 'May 2026: "The pie shaped like a tai (sea bream) was a bit disappointing as the fish was upside down…(^_^;)" and the sauce was thin and salty — but the roast duck was the highlight.', source: R + 'B531648234/' },
        { text: 'September 2026: "what stood out the most was the French bread. It is said to be directly imported from France."', source: R + 'B534873221/' },
      ],
      japanese_sources_summary: '食べログ: 富小路 信、フレンチ、中京区富小路通丸太町下ル桝屋町337、丸太町駅1番出口から徒歩約8分、昼 11:30〜14:30 (L.O. 13:30)、夜 18:00〜21:00 (L.O. 20:30)、月曜休み、サービス料・チャージ共に無し、26席 (テーブル16、個室3名・6名)、10〜16名で貸切、禁煙、車椅子可、子供可 (お子様メニューあり)、カード可、ヴィーガン・ベジタリアン・グルテンフリー対応、2019年12月1日オープン。口コミ (2026年1月〜9月、英語): 町家、京都園部の契約農家の有機野菜、シェフ Okumura、ランチコース6品5,500円、一休でドリンク付き5,000円、ディナー11,000円、園部の野菜のコンソメ、米麹のミルクグラスカクテル、山羊乳のゼリーとほうれん草といくら、サフランや人参のポタージュ、鯛やアコウのたい焼き風パイ包み (アメリケーヌソース)、低温ローストの鴨、豚肩ロースの炭火焼きボルドーソース、果物のケーキ、カヌレ、フランスから取り寄せるパン、デザートは女性スタッフ、2階の個室、鯛が逆さで塩気の強いソースという声、味は普通という声。',
      confidence: 'medium', sources: [TB, SITE, R + 'B521749541/', R + 'B521781355/', R + 'B524276699/', R + 'B524375938/', R + 'B525271033/', R + 'B525305474/', R + 'B526105371/', R + 'B531648234/', R + 'B534578152/', R + 'B534873221/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set courses; private rooms; dietary requests by booking.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区富小路通丸太町下ル桝屋町337',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.017235, 135.765080); cross-checked: GSI 京都府京都市中京区桝屋町337番地 (lot) 50m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B521749541/', R + 'B534873221/'],
    price_note: 'Prices from 2026 reviews; no service charge.', last_checked: TODAY, items: [
      it('', '', 'Lunch course (six dishes)', '¥5,500', 'Lunch', 'ask', 'ask', 'January 2026.', 'set_course'),
      it('', '', 'Dinner course', '¥11,000', 'Dinner', 'ask', 'ask', 'September 2026.', 'set_course'),
    ] }, {
    cuisine: '京都園部の契約農家の有機野菜を軸にした、町家のフレンチのコース (2026年1月)・ランチは6品のコース5,500円 (2026年1月)、予約サイトでドリンク付き5,000円 (2026年8月)、ディナーは11,000円のコース (2026年9月)・口コミでは園部の野菜のコンソメ、米麹のミルクジェリーの「ミルクグラスカクテル」、山羊乳のゼリーとほうれん草といくら、サフランや人参のポタージュ、鯛やアコウのたい焼き形のパイ包みアメリケーヌソース、低温ローストの鴨、豚肩ロースの炭火焼きボルドーソース、果物のケーキ、カヌレ、フランスから取り寄せるパン (2026年)',
    neighborhood: '丸太町通のすぐ南の富小路、御所の近く。丸太町駅から徒歩約8分',
    gf_detail: '要確認: 食べログではグルテンフリー対応とあるが、通常のコースには魚のパイ包みやフランスパン (2026年の口コミ)。予約時に伝えて。',
    vegan_detail: '要確認: 食べログではヴィーガン・ベジタリアン対応とある。通常のコースは魚、鴨、豚、いくら、乳製品 (2026年の口コミ)。',
    notes: '[フレンチ・御所近くの富小路、園部の有機野菜] 丸太町通のすぐ南の静かな町家のフレンチ。シェフの Okumura さんが、園部の有機野菜で彩り豊かなコースを。グラスの中の「草原」、たい焼き形の魚のパイ、ローストした鴨など。ランチ5,500円から、ディナー11,000円で、2階に個室。食べログではグルテンフリーやヴィーガンにも対応とある。魚のソースが薄く塩辛いという声も (2026年5月)。サービス料なし。月曜休み。',
  });
}

// ================================================================ 一凛
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26043072/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://ichirin0513.com/';
  const H = day(['11:30', '14:00'], ['17:30', '23:00']);
  put({
    id: 'kyoto_ichirin_gojo', name: '一凛 (Ichirin)', category: 'OMNI',
    lat: 34.997749, lng: 135.757634, cuisine_type: 'kaiseki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tempura, soy-seasoned obanzai and a Saikyo-miso potato salad (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi-based dishes, sashimi, egg dishes, beef and pork (2026 reviews).',
    hours_raw: 'Tabelog: lunch 11:30–14:00 (last order 13:30, last entry 13:00), dinner 17:30–23:00 (last orders food 22:00, drinks 22:30); closed Wednesday; updates on Instagram. Lunch is one set only, booking advised (September 2026). Otoshi ¥600 (Tabelog, Japanese original 「おつきだしとして600円」). 25 seats — counter on the ground floor and tables upstairs, reached by steep machiya stairs; non-smoking; menus in English, Chinese and Korean with photos; children welcome; cards, transit IC and most QR. Opened 14 May 2025 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Near Gojo Stn — 5 min walk',
    cuisine: 'Japanese cooking and sake in a renovated machiya (2026 reviews) · lunch "Ichirin Gozen" ¥2,500: five obanzai, dashimaki, grilled fish, sashimi, tempura, chawanmushi, chirimen-sansho rice with refills, miso soup (2026 reviews) · dinner: sashimi platter of five or six fish, hamo tempura, Saikyo-miso potato salad, braised pork, 尾崎牛, clay-pot rice, water eggplant and Manganji peppers in season (2025–2026 reviews) · a wide range of regional sake (July 2026)',
    website: SITE, gmaps: gm('一凛 徳万町'), menu_url: null,
    notes: '[Japanese & sake · near Gojo Station, a machiya with a ¥2,500 lunch] A machiya near Gojo Station opened in 2025: a ¥2,500 lunch tray of obanzai, sashimi, tempura and chawanmushi with refillable jako rice, and at night sashimi, hamo tempura, 尾崎牛 and a Saikyo-miso potato salad people rave about, with plenty of sake. One diner found the otoshi and sake a little dear; mind the steep stairs. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Owner-chef, not named; previously worked at a shop called Tsugu (August 2026)'], origin: null,
      background: 'Opened 14 May 2025 (Tabelog). An August 2026 regular says it was opened by someone who used to work at a place called Tsugu, "a very warm and kind person." Reviewers describe a renovated Kyoto machiya with a counter in front of the kitchen, tables upstairs, an owner directing young staff who work efficiently (July 2026), and a chef one diner called kind and handsome (September 2026).',
      philosophy: null,
      specialty: 'Ichirin Gozen lunch; Saikyo-miso potato salad.',
      anecdotes: [
        { text: 'A five-time regular, September 2026: "Those steep stairs in a traditional Kyoto townhouse... be careful when using the second-floor seating on your way out! (laughs)"', source: R + 'B508433841/' },
        { text: 'July 2026: the owner gave precise instructions to young staff who moved efficiently — but "the prices for the appetizers and Japanese sake were a bit high."', source: R + 'B531372225/' },
        { text: '"The chef seemed like a kind and handsome guy!" — September 2026.', source: R + 'B537065310/' },
      ],
      japanese_sources_summary: '食べログ: 一凛、日本料理、下京区室町新町之間松原下ル徳万町209-2、五条駅から徒歩5分、昼 11:30〜14:00 (L.O. 13:30、最終入店13:00)、夜 17:30〜23:00 (料理 L.O. 22:00、ドリンク L.O. 22:30)、水曜休み、Instagram で告知、おつきだし600円、25席、禁煙、英語・繁体字・簡体字・韓国語のメニュー、写真付き、子供可、カード・交通系IC・QR可、2025年5月14日オープン。口コミ (2025年12月〜2026年10月、英語): 町家、1階カウンターと2階のテーブル、急な階段、昼は一凛御膳2,500円のみ (おばんざい5種、だし巻き、焼き魚、お造り、天ぷら、茶碗蒸し、ちりめん山椒のご飯おかわり可、味噌汁)、夜はお造りの盛り合わせ、鱧の天ぷら、西京味噌のポテトサラダ、豚の角煮、尾崎牛、土鍋ご飯、水茄子、万願寺とうがらし、日本酒が豊富、Tsugu という店で働いていた人が開いた、若いスタッフへの的確な指示、つきだしと日本酒はやや高めという声、優しくてかっこいい料理人という声。',
      confidence: 'medium', sources: [TB, SITE, R + 'B508433841/', R + 'B528467823/', R + 'B530986141/', R + 'B531372225/', R + 'B535660268/', R + 'B536016789/', R + 'B537065310/', R + 'B537168320/', R + 'B537861857/', R + 'B538447911/'] },
    cultural_comfort: { level: 'english', note: 'Menus in English, Chinese and Korean with photos (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区室町新町之間松原下ル徳万町209-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.997749, 135.757634); cross-checked: GSI 京都府京都市下京区徳万町209番地 (lot) 43m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B530986141/', R + 'B536016789/'],
    price_note: 'Price from 2026 reviews; ¥600 otoshi at dinner.', last_checked: TODAY, items: [
      it('一凛御膳', '', 'Ichirin Gozen lunch set', '¥2,500', 'Lunch', 'no', 'no', 'July and September 2026.', 'gozen'),
      it('', '', 'Saikyo-miso potato salad', null, 'Dinner', 'ask', 'no', 'October 2026.', 'potato_salad'),
    ] }, {
    cuisine: '改装した町家の和食と日本酒 (2026年の口コミ)・昼は「一凛御膳」2,500円: おばんざい5種、だし巻き、焼き魚、お造り、天ぷら、茶碗蒸し、おかわりできるちりめん山椒のご飯、味噌汁 (2026年の口コミ)・夜は5〜6種のお造りの盛り合わせ、鱧の天ぷら、西京味噌のポテトサラダ、豚の角煮、尾崎牛、土鍋ご飯、旬の水茄子や万願寺とうがらし (2025〜2026年の口コミ)・全国の日本酒が豊富 (2026年7月)',
    neighborhood: '室町松原。五条駅から徒歩5分',
    gf_detail: 'グルテンフリーではない: 天ぷら、醤油で味付けしたおばんざい、西京味噌のポテトサラダ (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 出汁の料理、お造り、卵料理、牛や豚 (2026年の口コミ)。',
    notes: '[和食と日本酒・室町松原、2,500円の昼御膳の町家] 五条駅近く、2025年にできた町家の店。昼はおばんざい、お造り、天ぷら、茶碗蒸しにじゃこご飯おかわり自由の2,500円の御膳、夜はお造り、鱧の天ぷら、尾崎牛、評判の西京味噌のポテトサラダを豊富な日本酒とともに。つきだしと日本酒がやや高めという声も。2階へは急な階段に注意。水曜休み。',
  });
}

save();
