// Kyoto priority (kyoto-missed), worker osw13, batch 74 — lane: Tabelog id mod 6 = 0.
// Core (last in lane): 三代目カレー舎、NANDI。 Then `next rest` nearest-first: MANYOKEN style, 村上重本店, お酒とごはんと たか.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-74');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ---------------------------------------------------------------- rest-list skips (nearest-first, lane mod 6 = 0)
skip('26036511', 'too thin to verify: お弁当どころ 京都高島屋 is a bento counter in the Takashimaya food hall; Tabelog lists no hours, seats or menu, and most of its 11 reviews date from 2010–2018');
skip('26033318', 'too thin to verify: 壱銭洋食 京都高島屋店 is a food-hall counter; Tabelog lists no hours, seats or menu, and reviews are sparse (one or two a year)');
skip('26039940', 'chain: LINA STORES 京都高島屋 is the London Italian deli-restaurant (three London shops) run in Japan by Takashimaya\'s RT Corporation, with shops in Omotesando and Nihonbashi and about 20 planned (fashionsnap 2021, 2022); 5+ same-name (Greg ruling 2026-11-05)');
skip('26029860', 'group size unconfirmed: 国産牛焼肉食べ放題 あぶりや 四条河原町駅前店 has at least a sister shop at Fukushima, Osaka (Gurunavi) and two in the Kyoto crawl; the operator and full count could not be found');
skip('26029236', 'group size unconfirmed: うなぎ・ひつまぶし炭櫓 京都四条河原町店 is a branch of 炭櫓; other branches and the operator could not be confirmed from the sources found');
skip('26036100', 'chain: 珉珉 四条店 — the Osaka gyoza chain 珉珉, started at Sennichimae, has 47 shops (recruiting page); 5+ same-name (Greg ruling 2026-11-05)');
skip('26014260', 'group size unconfirmed: サムギョプサル専門店ベジテジや 四条木屋町店 is a Kyoto-born samgyeopsal chain with shops at Sakae (Nagoya), DiverCity Tokyo and Shimokitazawa (Gurunavi; Mitsui; Tokyo Weekender); full count not confirmed, likely 5+');

// ================================================================ 三代目カレー舎、NANDI。
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26024064/'; const R = TB + 'dtlrvwlst/';
  const L = ['11:30', '16:30'], D = ['18:00', '22:00']; const H = day(L, D);
  put({
    id: 'kyoto_curry_nandi_ichijoji', name: '三代目カレー舎、NANDI。 (Sandaime Curry Sha, NANDI.)', category: 'OMNI',
    lat: 35.039482, lng: 135.791157, cuisine_type: 'curry',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: spice curries with rice and papad (papad is usually lentil), but roux and fried toppings are not described for wheat (2018–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask: Tabelog lists vegetarian options; lentil-and-vegetable and chickpea curries, and a mixed-vegetable black curry, are on the menu, but butter and ghee are not ruled out (2020–2023 reviews).',
    hours_raw: 'Tabelog: 11:30–16:30 and 18:00–22:00; closed Thursday. No reservations. 10 seats, mostly counter — curries are cooked one by one, so expect a short wait (August 2022). Non-smoking. Children welcome but no children\'s curry (Tabelog). Take-away. Cash only: no cards, e-money or QR (Tabelog). Prices raised 1 July 2024 (Tabelog). Behind 天下一品 総本店 in Ichijoji; a car park next door (January 2025). Opened 24 July 2014 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Ichijoji / Kitashirakawa — 10 min walk from Eizan Chayama or Ichijoji Stns',
    cuisine: 'A tiny spice-curry counter run by a couple, behind Tenkaippin\'s main shop (2020–2026 reviews) · "double curry" of two from: very hot spicy black curry (chicken, pork, lamb or mixed vegetables), spicy keema, lentil-and-vegetable, mild chickpea, or the day\'s special such as butter chicken or butter shrimp; with papad and a salad (¥1,000 in August 2022, ¥1,100 in February 2023; single and double the same price, April 2026) · coriander on the side; lassi (2025) · spice level can be adjusted on request (January 2025)',
    website: null, gmaps: gm('三代目カレー舎 NANDI 一乗寺'), menu_url: null,
    notes: '[Spice curry · Ichijoji, a couple\'s ten-seat counter] A tiny counter behind Tenkaippin\'s main shop where a couple cook each curry to order: a two-curry plate pairing the fierce black curry with keema, lentils or mild chickpeas, with papad and salad, at the same price as a single. Expect a wait and real heat. Cash only; closed Thursday.',
    chef_bio: { chef_name: null, roles: ['Run by a couple, not named (April 2023 review)'], origin: null,
      background: 'Opened 24 July 2014 (Tabelog). Reviewers from 2017 to 2026 describe a snack-bar-like counter with an Indian-style interior, a couple who recommend the double curry, curries cooked fresh after ordering, and a salad from the owner while you wait.',
      philosophy: null,
      specialty: 'Spicy black curry; keema.',
      anecdotes: [
        { text: 'April 2023: "The couple running the restaurant recommended trying the double curry… the extremely spicy black curry was the hottest I\'ve ever tasted."', source: R + 'B511862774/' },
        { text: 'January 2025: "While you can adjust the spice level upon request, I won\'t say anything because it\'s already quite spicy here."', source: R + 'B464990765/' },
        { text: 'April 2026: "I appreciated that both the single and combination curry were priced the same."', source: R + 'B330263102/' },
      ],
      japanese_sources_summary: '食べログ: 三代目カレー舎、NANDI。、カレー、左京区一乗寺築田町95 第2メゾン白川 1F、叡電茶山駅・一乗寺駅から徒歩10分、11:30〜16:30・18:00〜22:00、木曜休み、予約不可、10席、禁煙、子供可 (子供用のカレーはなし)、持ち帰り可、カード・電子マネー・QR不可、野菜にこだわり・ベジタリアン対応、2024年7月1日から値上げ、2014年7月24日オープン。口コミ (2017年8月〜2026年4月、英語): 天下一品総本店の裏、夫婦で営む、カウンター中心、注文ごとに調理、2種を選ぶダブルカレー (激辛の黒カレー (チキン・ポーク・ラム・ミックス野菜)、キーマ、レンズ豆と野菜、ひよこ豆、日替わりのバターチキンやバターシュリンプ)、パパドとサラダ付き、1,000円 (2022年)・1,100円 (2023年)、シングルとダブルが同じ値段、パクチー、ラッシー、辛さの調整可、隣に駐車場。',
      confidence: 'medium', sources: [TB, R + 'B288193513/', R + 'B330263102/', R + 'B364795142/', R + 'B426909058/', R + 'B452531647/', R + 'B461465935/', R + 'B464990765/', R + 'B511862774/'] },
    cultural_comfort: { level: 'japanese', note: 'Small counter; very spicy by default; cash only.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市左京区一乗寺築田町95 第2メゾン白川 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through April 2026.' },
    pin_source: `Tabelog ${TB} (35.039482, 135.791157); cross-checked: GSI 京都府京都市左京区一乗寺築田町95番地 (lot) 37m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B461465935/', R + 'B452531647/'],
    price_note: 'Prices from 2022–2023 reviews; raised from 1 July 2024 (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Double curry with papad and salad', '¥1,100', 'Curry', 'ask', 'ask', 'February 2023; before the July 2024 price rise.', 'curry'),
    ] }, {
    cuisine: '天下一品総本店の裏の、夫婦で営む小さなスパイスカレーのカウンター (2020〜2026年の口コミ)・2種を選ぶ「ダブルカレー」。激辛の黒カレー (チキン・ポーク・ラム・ミックス野菜)、辛いキーマ、レンズ豆と野菜、マイルドなひよこ豆、日替わりのバターチキンやバターシュリンプから。パパドとサラダ付きで1,000円 (2022年8月)・1,100円 (2023年2月)、シングルとダブルは同じ値段 (2026年4月)・パクチーは別添え、ラッシー (2025年)・辛さは頼めば調整可 (2025年1月)',
    neighborhood: '一乗寺・北白川。叡電茶山駅・一乗寺駅から徒歩10分',
    gf_detail: '要確認: ご飯とパパド (ふつうは豆の粉) のスパイスカレーだが、ルーや揚げ物の小麦については書かれていない (2018〜2026年の口コミ)。',
    vegan_detail: '要確認: 食べログではベジタリアン対応。レンズ豆と野菜、ひよこ豆、ミックス野菜の黒カレーがあるが、バターやギーの有無は不明 (2020〜2023年の口コミ)。',
    notes: '[スパイスカレー・一乗寺、夫婦の10席のカウンター] 天下一品総本店の裏の小さなカウンターで、夫婦が一皿ずつ作る。激辛の黒カレーにキーマ、レンズ豆、マイルドなひよこ豆を組み合わせる2種盛りに、パパドとサラダ付きで、1種と同じ値段。待ち時間と本気の辛さを覚悟して。現金のみ、木曜休み。',
  });
}

// ================================================================ MANYOKEN style 京都高島屋店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26003290/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.manyoken.com/';
  const WD = day(['11:00', '15:00'], ['17:00', '22:00']), WE = day(['11:00', '16:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_manyoken_style_takashimaya', name: 'マンヨウケン スタイル 京都高島屋店 (MANYOKEN style)', category: 'OMNI',
    lat: 35.003492, lng: 135.76893, cuisine_type: 'french',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: bread, potage, crab cream croquettes, breaded pork cutlet and sauces (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef, fish and croquette mains; consommé (2025–2026 reviews).',
    hours_raw: 'Tabelog: weekdays 11:00–15:00 and 17:00–22:00; weekends and holidays 11:00–16:00 and 17:00–22:00 (last order 20:40); closing days follow Takashimaya Kyoto. Reservations taken; often a table without one on weekdays (2026 reviews). 86 seats; a private room for 8. No smoking until 17:00, smoking seats after (Tabelog). Strollers manageable — wide spacing (August 2026). Cards, e-money and QR. Take-away. Takashimaya Kyoto 7F, connected to Kyoto-Kawaramachi Stn.',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shijo-Kawaramachi — Takashimaya Kyoto 7F',
    cuisine: 'The casual department-store branch of the old Kyoto French house 萬養軒 (official site; 2025–2026 reviews) · lunch set of salad, potage, bread or rice and a main — snow-crab cream croquettes, braised beef cheek, breaded pork cutlet — about ¥2,400 (¥2,420 in May 2026) · "Recommended course" ¥4,950 with consommé jelly, appetizers, strip-loin steak or pan-seared sea bream and dessert (January 2026); "Rose" course of turnip mousse with seafood, corn potage, sea bream, beef steak and dessert (2024–2026) · onion spumante; coffee (2026 reviews)',
    website: SITE, gmaps: gm('マンヨウケン スタイル 京都高島屋'), menu_url: null,
    notes: '[French · Takashimaya Kyoto 7F, the old house\'s casual branch] The department-store branch of 萬養軒, which reviewers date to 1904: lunch sets of potage, salad and a crab-croquette or beef-cheek main for about ¥2,400, and good-value courses with steak or sea bream, in a quiet, roomy dining room. One diner found the courses came too fast (November 2025); another thought the pork cutlet just okay (August 2026). Smoking seats after 17:00.',
    chef_bio: { chef_name: null, roles: ['Not named in a source; branch of ぎをん 萬養軒 (official site)'], origin: null,
      background: 'Per the official site, the group is ぎをん 萬養軒 (the French restaurant on Hanamikoji, opposite the Gion Kaburenjo; lunch ¥7,000 and ¥9,000, dinner ¥15,000 and ¥19,000 from April 2025) and this MANYOKEN style shop in Takashimaya Kyoto, and it takes 萬養軒 to department-store Kyoto fairs. Two September 2026 reviewers say 萬養軒 was founded in 1904 as Kyoto\'s first French restaurant, formerly on Shijo-dori, and one recalls Princess Diana dining there and the writer Shotaro Ikenami as a regular.',
      philosophy: null,
      specialty: 'Lunch sets; crab cream croquettes; beef-cheek stew.',
      anecdotes: [
        { text: 'November 2025: "It felt like the dishes were coming out so quickly that I finished my meal in no time… Next time, I will make sure to request a slower pace."', source: R + 'B517886399/' },
        { text: 'September 2026: "When I was younger, I admired Manyoken on Shijo Street and visited it alone, nervously trying the consommé."', source: R + 'B537234864/' },
        { text: 'August 2026: the breaded pork cutlet "was delicious, but I felt it was just okay."', source: R + 'B537662208/' },
      ],
      japanese_sources_summary: '公式サイト: ぎをん 萬養軒、フランス料理、本店は東山区祇園町南側570-120 2F (花見小路四条下ル、祇園歌舞練場前、火・水定休)、MANYOKEN style 京都 高島屋店 (定休日は百貨店と同じ)、2025年4月からランチ7,000円・9,000円、ディナー15,000円・19,000円 (税・サービス料込、本店)、京都展の催事に出店。食べログ: MANYOKEN style 京都高島屋店、フレンチ、下京区四条通河原町西入ル真町52 京都タカシマヤ 7F、平日 11:00〜15:00・17:00〜22:00、土日祝 11:00〜16:00・17:00〜22:00 (L.O. 20:40)、休みは高島屋に準じる、予約可、86席、個室 (8名)、17時まで禁煙・以降は喫煙席あり、カード・電子マネー・QR可、持ち帰り可。口コミ (2025年11月〜2026年9月、英語): サラダ・ポタージュ・パンかご飯とメインのランチ (ズワイガニのクリームコロッケ、牛ほほ肉、豚のカツレツ) 2,420円、おすすめコース4,950円 (コンソメのジュレ、前菜、ロースのステーキか鯛のポワレ、デザート)、ローズコース、玉ねぎのスプマンテ、1904年創業の京都初のフランス料理店という声、ダイアナ妃や池波正太郎の話、料理が出るのが早すぎたという声、カツレツはまあまあという声。',
      confidence: 'medium', sources: [SITE, TB, R + 'B486766510/', R + 'B517886399/', R + 'B520617078/', R + 'B524039882/', R + 'B524339331/', R + 'B524644125/', R + 'B528560199/', R + 'B531206756/', R + 'B535358845/', R + 'B536127999/', R + 'B537234864/', R + 'B537662208/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Department-store restaurant floor; reservations taken.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区四条通河原町西入ル真町52 京都タカシマヤ 7F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site lists the shop; Tabelog reviews through September 2026.' },
    pin_source: `Tabelog ${TB} (35.003492, 135.768930); cross-checked: GSI 京都府京都市下京区真町52番地 (lot) 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B528560199/', R + 'B520617078/'],
    price_note: 'Prices from 2026 reviews, tax included.', last_checked: TODAY, items: [
      it('', '', 'Lunch set: salad, potage, bread or rice, main (e.g. crab cream croquettes)', '¥2,420', 'Lunch', 'no', 'no', 'May 2026.', 'yoshoku_set'),
      it('', '', 'Recommended course (appetizers, steak or fish, dessert)', '¥4,950', 'Course', 'no', 'no', 'January 2026.', 'french_course'),
    ] }, {
    cuisine: '京都の老舗のフランス料理店、萬養軒の百貨店のカジュアルな店 (公式サイト、2025〜2026年の口コミ)・サラダ、ポタージュ、パンかご飯とメイン (ズワイガニのクリームコロッケ、牛ほほ肉の煮込み、豚のカツレツ) の昼のセット約2,400円 (2026年5月は2,420円)・コンソメのジュレ、前菜、ロースのステーキか鯛のポワレ、デザートの「おすすめコース」4,950円 (2026年1月)。かぶのムースと魚介、コーンポタージュ、鯛、牛のステーキ、デザートの「ローズ」コース (2024〜2026年)・玉ねぎのスプマンテ、コーヒー (2026年の口コミ)',
    neighborhood: '四条河原町。京都タカシマヤ7階',
    gf_detail: 'グルテンフリーではない: パン、ポタージュ、カニクリームコロッケ、豚のカツレツ、ソース (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 牛肉、魚、コロッケのメイン、コンソメ (2025〜2026年の口コミ)。',
    notes: '[フレンチ・京都高島屋7階、老舗の気軽な店] 口コミでは1904年創業とされる萬養軒の百貨店の店。ポタージュ、サラダ、カニクリームコロッケや牛ほほ肉のメインの昼のセットが約2,400円、ステーキや鯛の手頃なコースも、静かで広い店内で。料理が出るのが早すぎたという声 (2025年11月) や、カツレツはまあまあという声 (2026年8月) も。17時以降は喫煙席あり。',
  });
}

// ================================================================ 村上重本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26007678/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.murakamijyuhonten.co.jp/';
  const H = day(['09:00', '18:00']);
  put({
    id: 'kyoto_murakamiju_honten', name: '村上重本店 (Murakami Ju Honten)', category: 'OMNI',
    lat: 35.003065, lng: 135.7701, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: senmaizuke is turnip, kombu and salt per Takashimaya\'s description, but other pickles may use soy sauce; check labels (Takashimaya; reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask: vegetable pickles (senmaizuke, shibazuke, Mibuna, takuan) are plant-based in principle, but seasonings such as bonito extract are not described; check labels (reviews).',
    hours_raw: 'Tabelog: daily 9:00–18:00; closed 1–3 January. A pickle shop with no eating or drinking space — take-away and shipping only (Tabelog; January 2026). Cards (JCB, AMEX), transit IC, QUICPay, QR. Senmaizuke is seasonal (winter; sold out by early March 2026). In a lane behind Edion, south-east of the Shijo-Kawaramachi crossing, by the Takase river (Tabelog; reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shijo-Kawaramachi, Nishikiyamachi — 2 min walk from Kyoto-Kawaramachi Stn',
    cuisine: 'A Kyoto pickle maker founded in 1832, its main shop by the Takase river (Takashimaya) · take-away only: winter senmaizuke of Shogoin turnip with thick kombu, not sweet; shibazuke (year-round bestseller); tsubozuke takuan; Mibuna; yuzu daikon; nanohana; Kyo Takase; mustard pickles (Takashimaya; 2024–2026 reviews) · main-shop-only items: mushrooms simmered with sansho, hime-shoga (young ginger) with a short shelf life (2024–2026 reviews)',
    website: SITE, gmaps: gm('村上重本店 西木屋町'), menu_url: null,
    notes: '[Kyoto pickles · Shijo-Kawaramachi, an 1832 pickle house] The main shop of a pickle maker dating from 1832, in a lane by the Takase river just off Shijo-Kawaramachi: winter senmaizuke heavy with kombu, shibazuke all year, and shop-only sansho mushrooms and young ginger that keep only days. A shop, not a restaurant — no eating space. Open daily 9:00–18:00.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Takashimaya\'s food column describes 村上重本店 as a pickle maker founded in Tenpo 3 (1832) in Sendo-cho, Shimogyo-ku, making pickles that bring out the vegetables\' own taste, with senmaizuke of Shogoin turnip and shibazuke its best-known items; Takashimaya stocks it in eight stores. Reviewers from 2024 to 2026 describe a handsome old shopfront, tasting samples, and items sold only at the main shop.',
      philosophy: null,
      specialty: 'Senmaizuke; shibazuke.',
      anecdotes: [
        { text: 'December 2025: senmaizuke "packed with thick slices of kombu kelp… Once you get used to this flavor, you won\'t be able to go back to sweet senmai."', source: R + 'B520094873/' },
        { text: 'March 2026: in early March "I found a notice in the store saying that the season had ended" for senmaizuke.', source: R + 'B527930762/' },
      ],
      japanese_sources_summary: '食べログ: 村上重本店、その他、下京区西木屋町四条下る船頭町190、四条河原町の南東、毎日 9:00〜18:00、1月1日〜3日休み、予約不可、漬物店で飲食スペースなし、持ち帰り、カード (JCB・AMEX)・交通系IC・QUICPay・QR可。高島屋のコラム: 1832 (天保三) 年創業、下京区船頭町、野菜本来の味をいかす漬物、聖護院かぶと昆布と塩の千枚漬、通年のいちばん人気はしば漬、高島屋の8店で取り扱い。口コミ (2024年6月〜2026年6月、英語): 甘くない昆布たっぷりの千枚漬 (冬季、3月初めに終了)、しば漬、つぼ漬たくあん、壬生菜、柚子大根、菜の花、Kyo Takase、からし漬、本店限定のきのこの山椒煮と姫しょうが、試食、エディオンの裏の路地。',
      confidence: 'medium', sources: [TB, 'https://www.takashimaya.co.jp/column/post/2646647/', R + 'B438568717/', R + 'B458584045/', R + 'B504852893/', R + 'B514931572/', R + 'B517365918/', R + 'B518961228/', R + 'B520094873/', R + 'B521356501/', R + 'B523813045/', R + 'B527186539/', R + 'B527930762/', R + 'B531010029/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Shop only — no eating space; tasting samples.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区西木屋町四条下る船頭町190',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB} (35.003065, 135.770100); cross-checked: GSI 京都府京都市下京区船頭町190番地 (lot) 19m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B518961228/', 'https://www.takashimaya.co.jp/column/post/2646647/'],
    price_note: 'No prices in the main-shop sources.', last_checked: TODAY, items: [
      it('千枚漬', '', 'Senmaizuke (winter)', null, 'Pickles', 'ask', 'ask', 'December 2025.', 'tsukemono'),
      it('しば漬', '', 'Shibazuke', null, 'Pickles', 'ask', 'ask', 'Takashimaya; December 2025.', 'tsukemono'),
    ] }, {
    cuisine: '1832年創業の京都の漬物店で、本店は高瀬川沿い (高島屋)・持ち帰りのみ。冬の千枚漬は聖護院かぶと厚い昆布で甘くない。しば漬 (通年の人気)、つぼ漬たくあん、壬生菜、柚子大根、菜の花、Kyo Takase、からし漬 (高島屋、2024〜2026年の口コミ)・本店限定のきのこの山椒煮、日持ちの短い姫しょうが (2024〜2026年の口コミ)',
    neighborhood: '四条河原町、西木屋町。京都河原町駅から徒歩2分',
    gf_detail: '要確認: 千枚漬は高島屋の説明ではかぶ、昆布、塩だが、ほかの漬物は醤油を使うことも。表示を確認 (高島屋、口コミ)。',
    vegan_detail: '要確認: 野菜の漬物は基本的に植物性だが、鰹エキスなどの調味料は不明。表示を確認 (口コミ)。',
    notes: '[京漬物・四条河原町、1832年創業の漬物店] 四条河原町すぐの高瀬川沿いの路地にある、1832年創業の漬物店の本店。昆布たっぷりの冬の千枚漬、通年のしば漬、数日しか持たない本店限定のきのこの山椒煮や姫しょうが。店舗のみで飲食スペースはなし。毎日9時〜18時。',
  });
}

// ================================================================ お酒とごはんと たか
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26041590/'; const R = TB + 'dtlrvwlst/';
  const H = day(['16:00', '23:00']);
  put({
    id: 'kyoto_osake_to_gohan_to_taka', name: 'お酒とごはんと たか (Osake to Gohan to Taka)', category: 'OMNI',
    lat: 35.00466, lng: 135.768326, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tempura, fried pork, spring rolls, keema curry, soy-based dishes (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish-led izakaya — sashimi, cured mackerel, dashi tofu (2024–2026 reviews).',
    hours_raw: 'Tabelog: 16:00–23:00; closed Tuesday. Book on weekends (April 2025). Appetiser charge ¥1,000 — Tabelog, Japanese original 「お通し代1,000円」 (reviewers paid ¥700–800 in 2024–2025). 12 seats: an 8-seat counter at the open kitchen and one table for 4. Non-smoking. Cards (Visa, Master, JCB, AMEX, Diners) and PayPay; no e-money. In the Marunaka Building on Ura-dera-machi, behind OPA, 3 min from Hankyu Kawaramachi Stn. Opened June 2024 (July 2024 review).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shijo-Kawaramachi — Ura-dera-machi, behind OPA',
    cuisine: 'A small creative izakaya of seasonal fish and Kyoto vegetables with sake, opened in 2024 (2024–2026 reviews) · seasonal appetiser plate of about four small dishes (¥700–800) · cured mackerel with gari ¥750; swordfish sashimi ¥1,050; dashi tofu ¥700 (March 2025); sea bream in kombu; bonito with shungiku and pomelo (2025) · toro-taku fresh spring rolls; hamo and corn tempura; sliced water eggplant; fried pork; Lake Biwa ayu; potato salad; omelette (2024–2026) · keema curry to finish (September 2024) · sake such as Kaishun; imo shochu Daiyame',
    website: null, gmaps: gm('お酒とごはんと たか 裏寺'), menu_url: null,
    notes: '[Izakaya · Shijo-Kawaramachi, a 2024 counter of fish and Kyoto vegetables] A clean, wood-scented 12-seat counter on Ura-dera-machi opened in 2024 by a cook with two decades in Kyoto kitchens: cured mackerel with gari, toro-taku spring rolls, hamo tempura, seasonal vegetables and a keema curry to finish, with a good sake list. One diner balked at the ¥700 otoshi (March 2025); Tabelog now lists ¥1,000. Open from 16:00; closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Owner-cook, not named in a source'], origin: null,
      background: 'Per a July 2024 reviewer, the owner went independent in June 2024 after about 20 years in restaurants; a September 2024 reviewer says the owner seems to have come from "Manzara-tei". Reviewers in 2025–2026 describe a calm, clean room with an open kitchen, an owner who comes out to chat, and what looked to one diner like a couple running it (August 2026).',
      philosophy: null,
      specialty: 'Cured mackerel with gari; toro-taku spring rolls.',
      anecdotes: [
        { text: 'March 2025: "Otoshi... JPY 700, huh? Hmm."', source: R + 'B502315723/' },
        { text: 'April 2025: on a Saturday night "every place I called was fully booked and turned me away… I found out that Taka had an opening."', source: R + 'B504398248/' },
      ],
      japanese_sources_summary: '食べログ: お酒とごはんと たか、居酒屋・海鮮、中京区四条裏寺通上ル中之町576 丸仲ビル 1F、阪急河原町駅から徒歩3分、16:00〜23:00、火曜休み、原文で「お通し代1,000円」、12席 (オープンキッチンのカウンター8席、4名のテーブル1卓)、禁煙、カード・PayPay可、電子マネー不可。口コミ (2024年7月〜2026年8月、英語): 2024年6月オープン、約20年飲食店で働いた店主が独立、Manzara-tei 出身らしいという声、木の香り、季節の前菜の盛り合わせ (700〜800円)、ガリしめ鯖750円、メカジキの刺身1,050円、だし豆腐700円、昆布締めの鯛、鰹と春菊と文旦、トロたく生春巻、鱧ととうもろこしの天ぷら、水なす、豚の唐揚げ、琵琶湖の鮎、ポテトサラダ、だし巻、締めのキーマカレー、日本酒 (Kaishun など)、芋焼酎だいやめ、夫婦で営んでいるようだという声、お通し700円は高いという声。',
      confidence: 'medium', sources: [TB, R + 'B489114004/', R + 'B489759597/', R + 'B492705344/', R + 'B493919417/', R + 'B502315723/', R + 'B504398248/', R + 'B506931460/', R + 'B507275755/', R + 'B512466783/', R + 'B522483618/', R + 'B533048252/', R + 'B534714338/'] },
    cultural_comfort: { level: 'japanese', note: 'Small counter izakaya; ¥1,000 otoshi.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区四条裏寺通上ル中之町576 丸仲ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.004672, 135.768379); cross-checked: GSI 京都府京都市中京区中之町576番地 (lot) 23m; offset about 5 m west-southwest because VOG Kyoto (4.3 m) and kyoto_au_point_de_rendez_vous (5.5 m, same 丸仲ビル) sit on the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B502315723/'],
    price_note: 'Prices from a March 2025 review.', last_checked: TODAY, items: [
      it('ガリしめ鯖', '', 'Cured mackerel with gari', '¥750', 'Fish', 'ask', 'no', 'March 2025.', 'shime_saba'),
      it('', '', 'Swordfish sashimi', '¥1,050', 'Fish', 'ask', 'no', 'March 2025.', 'sashimi'),
      it('', '', 'Dashi tofu', '¥700', 'Small plates', 'ask', 'no', 'March 2025.', 'tofu'),
    ] }, {
    cuisine: '2024年開店の、季節の魚と京野菜を日本酒とともに楽しむ小さな創作居酒屋 (2024〜2026年の口コミ)・4品ほどの季節の前菜の盛り合わせ (700〜800円)・ガリしめ鯖750円、メカジキの刺身1,050円、だし豆腐700円 (2025年3月)、昆布締めの鯛、鰹と春菊と文旦 (2025年)・トロたく生春巻、鱧ととうもろこしの天ぷら、水なすの造り、豚の唐揚げ、琵琶湖の鮎、ポテトサラダ、だし巻 (2024〜2026年)・締めのキーマカレー (2024年9月)・Kaishun などの日本酒、芋焼酎だいやめ',
    neighborhood: '四条河原町。裏寺町、OPAの裏',
    gf_detail: 'グルテンフリーではない: 天ぷら、豚の唐揚げ、生春巻、キーマカレー、醤油の料理 (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 魚が中心の居酒屋で、刺身、しめ鯖、だし豆腐 (2024〜2026年の口コミ)。',
    notes: '[居酒屋・四条河原町、2024年開店の魚と京野菜のカウンター] 裏寺町にある木の香りの清潔な12席のカウンター。京都の飲食店で20年働いた店主が2024年に開店。ガリしめ鯖、トロたく生春巻、鱧の天ぷら、季節の野菜、締めのキーマカレーに、日本酒もそろう。お通し700円に驚いたという声 (2025年3月)、食べログでは現在1,000円。16時から、火曜休み。',
  });
}

save();
