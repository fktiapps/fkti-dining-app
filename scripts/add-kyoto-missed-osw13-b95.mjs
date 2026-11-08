// Kyoto priority (kyoto-missed), worker osw13, batch 95 — lane: Tabelog id mod 6 = 0; rest tier, nearest-first.
// Drafts: Bar mousse, うどん 塩釜, 上田珈琲 京都祇園店, 名月堂.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-95');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };
const rv = (R, ids) => ids.map(b => R + b + '/');

skip('26040114', 'chain: 三田屋本店 やすらぎの郷 大丸京都レストラン店 is one of 15 三田屋本店 restaurants (official sandaya-honten.co.jp store list: 三田店, 大丸神戸, 川西萩原台, 関学, 神戸三田プレミアム・アウトレット, 西宮ガーデンズ, りんくう, 豊中, 箕面小野原, 富田林, 中百舌鳥, 寝屋川別邸, 宝ヶ池, 大丸京都, 新堀川)');
skip('26034486', 'same-concept branch of a brand already in data: 焼肉マウム (祇園町北側270-4) — 焼肉 マウム 京都木屋町店 is in data as kyoto_yakiniku_maumu_kiyamachi');
skip('26038278', 'same-concept branch of a brand already in data: 香港飲茶 星街 河原町三条店 — 香港飲茶 星街 is in data as kyoto_hongkong_yumcha_hoshimachi');

// ================================================================ Bar mousse
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26037990/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'kyoto_bar_mousse_gion', name: 'Bar mousse', category: 'OMNI',
    lat: 35.005366, lng: 135.774943, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: fresh-fruit cocktails, gin and rum; no food described (2019–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask: fruit cocktails and spirits may suit; dessert cocktails may use cream (January 2023).',
    hours_raw: 'Tabelog gives no opening hours — call ahead (reviewers visit late, after dinner). Reservations taken. Smoking allowed (February 2023; November 2025). Cards; no e-money. A moss-themed bar on the 2nd floor down a narrow alley off Sueyoshi-cho, north of Shijo near Hanamikoji — hard to find (2023; July 2025).',
    hours: {}, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Alley off Sueyoshi-cho, north Gion — 5 min walk from Gion-Shijo',
    cuisine: 'A small cocktail bar filled with lit moss terrariums, run with a female bartender making most drinks (2020–2026 reviews) · seasonal fresh-fruit cocktails — pear, Shine Muscat, lightly frozen fresh peach (2022–2025) · a wide choice of gins, including Japanese gins, and original gin and tonics (2020–2026) · rums, mint and citrus drinks; dessert cocktails with plenty of fruit (2023; 2025) · a seasonal amuse to start; about ¥6,000 for three cocktails (September 2025)',
    website: null, gmaps: gm('Bar mousse 祇園 清本町'), menu_url: null,
    notes: '[Cocktail bar · alley off Sueyoshi-cho, Gion, a moss-garden bar] A hidden second-floor bar where moss terrariums glow along the counter, and a bartender makes fresh-fruit cocktails and gin and tonics from a deep gin list. Friendly regulars, smoking allowed. No listed hours — call ahead.',
    chef_bio: { chef_name: null, roles: ['Bartenders (unnamed)'], origin: null,
      background: 'Reviewers from 2020 to 2026 describe a moss-themed bar run with a female bartender (October 2022; December 2020) — in July 2025 "one male and one female bartender, and generally, the female bartender prepares the drinks" — praising attentive, knowledgeable service and fruit cocktails. A September 2025 visitor found the regulars "friendly and approachable".',
      philosophy: null,
      specialty: 'Fresh-fruit cocktails; gin.',
      anecdotes: [
        { text: 'January 2023: "As soon as I stepped inside, it felt like entering a high-humidity forest. The interior is filled with various terrariums featuring moss."', source: R + 'B460455227/' },
        { text: 'July 2025: "For my first drink, I had a cocktail made with fresh peaches, served lightly frozen."', source: R + 'B510510419/' },
      ],
      japanese_sources_summary: '食べログ: Bar mousse、バー、東山区清本町375 2F、祇園四条から342m、営業時間の記載なし、予約可、カード可、電子マネー不可。口コミ (2019年11月〜2026年1月、英語): 苔をテーマにしたバー、光る苔のテラリウム、末吉町から入った細い路地の2階、女性のバーテンダーが中心、季節の生フルーツのカクテル (洋梨、シャインマスカット、桃のフローズン)、国産を含むジンの品ぞろえ、ジントニック、ラム、デザートカクテル、季節のお通し、カクテル3杯で約6,000円 (2025年9月)、喫煙可、常連も気さく。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B455965720', 'B458551371', 'B460455227', 'B461590972', 'B487693108', 'B500252477', 'B510510419', 'B514311351', 'B518049184', 'B520260716'])) },
    cultural_comfort: { level: 'japanese', note: 'Hidden alley bar; smoking allowed; no listed hours.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区清本町375 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated September and November 2025 and January 2026.' },
    pin_source: `Tabelog ${TB} (35.005366, 135.774943); cross-checked: GSI 京都府京都市東山区清本町375番地 (lot) 9m; nearest pin kyoto_gion_haba 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B514311351/'],
    price_note: 'About ¥6,000 for three cocktails (September 2025).', last_checked: TODAY, items: [
      it('', '', 'Seasonal fresh-fruit cocktail', null, 'Cocktail', 'ask', 'ask', '2022–2026 reviews.', 'fruit_cocktail'),
      it('', '', 'Gin and tonic', null, 'Cocktail', 'ask', 'ask', '2020–2025 reviews.', 'gin_tonic'),
    ] }, {
    cuisine: '光る苔のテラリウムが並ぶ小さなカクテルバーで、女性のバーテンダーが中心 (2020〜2026年の口コミ)・季節の生フルーツのカクテル、洋梨、シャインマスカット、桃の軽いフローズン (2022〜2025年)・国産を含むジンの品ぞろえとオリジナルのジントニック (2020〜2026年)・ラム、ミントや柑橘のカクテル、果物たっぷりのデザートカクテル (2023年、2025年)・季節のお通し、カクテル3杯で約6,000円 (2025年9月)',
    neighborhood: '末吉町から入った路地、祇園の北側。祇園四条から徒歩5分',
    gf_detail: '要確認: 生フルーツのカクテル、ジン、ラム。食べ物の記載なし (2019〜2026年の口コミ)。',
    vegan_detail: '要確認: フルーツのカクテルや蒸留酒は合うかもしれないが、デザートカクテルにはクリームを使うものも (2023年1月)。',
    notes: '[カクテルバー・祇園の末吉町の路地、苔の庭のようなバー] カウンターに苔のテラリウムが光る、路地奥の2階の隠れ家バー。生フルーツのカクテルと、品ぞろえ豊富なジンのジントニック。常連も気さく、喫煙可。営業時間の記載がないので事前に電話を。',
  });
}

// ================================================================ うどん 塩釜
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26038530/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '21:30']);
  put({
    id: 'kyoto_udon_shiogama_gion', name: 'うどん 塩釜 (Udon Shiogama)', category: 'OMNI',
    lat: 35.004501, lng: 135.775276, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat udon, tempura and curry (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: bonito dashi, chicken tempura, egg toppings (2025–2026 reviews).',
    hours_raw: 'Tabelog: daily 12:00–21:30 (last order 21:00); open until sold out; may close 16:00–18:00 depending on the day. No reservations. No charge — Tabelog, Japanese original 「なし」. 25 seats with counter and sofa seats. Non-smoking; wheelchair access. Cash only per Tabelog (no cards, e-money or QR). Ground floor of 桜花ビル at the corner of Hanamikoji and Tominaga-cho (January 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Hanamikoji at Tominaga-cho, Gion — 3 min walk from Gion-Shijo',
    cuisine: 'A Gion udon shop with aged domestic-wheat noodles "freshly made, freshly cut, freshly boiled, freshly fried" (Tabelog; 2025–2026 reviews) · sets with seasonal tempura, two small sides, seasonal rice and pickles: kake ¥1,800, zaru or kamaage ¥1,950, hiyakake about ¥1,900; six udon styles (January–March 2026) · signature curry udon with pork, egg and fried onion; spicy curry udon with chicken tempura ¥1,950 (November 2025; February 2026) · saury tempura and naruto wakame with grated daikon, nama-shoyu udon ¥1,750 (November 2025) · tsukimi yama udon ¥950; tsukimi tororo bukkake with chicken tempura (January and July 2026) · chicken zangi (November 2025)',
    website: null, gmaps: gm('うどん 塩釜 祇園 富永町'), menu_url: TB + 'dtlmenu/',
    notes: '[Udon · Hanamikoji at Tominaga-cho, freshly boiled aged noodles] A bright corner udon shop in Gion boiling thick, chewy domestic-wheat noodles to order — curry udon, tororo bukkake, or a full set with tempura and seasonal rice around ¥1,800–1,950. Popular with visitors; one reviewer found the sets pricey. Cash only. Open from noon.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Tabelog lists it as a corporate member and quotes its creed of domestic wheat, aged noodles and boiling to order. Reviewers in 2025–2026 praise the chewy, slippery noodles and rich dashi; criticism: "¥1,900 was a bit pricey" with average tempura (March 2026), a slightly oily, bonito-heavy broth (March 2026), and opening late behind a half-closed shutter (June 2026).',
      philosophy: 'Freshly made, freshly cut, freshly boiled, freshly fried (Tabelog; November 2025 review).',
      specialty: 'Curry udon; udon sets.',
      anecdotes: [
        { text: 'November 2025: "Since I wore a rental kimono made of white lace, I was provided with a dining apron."', source: R + 'B517270309/' },
        { text: 'July 2026: "The glossy noodles, twisted and piled high, were topped with a ring of tororo (grated yam) and a bright orange egg yolk in the center."', source: R + 'B531472074/' },
      ],
      japanese_sources_summary: '食べログ: うどん 塩釜、うどん、東山区富永町119-1 桜花ビル 1F、祇園四条駅から約3分、毎日 12:00〜21:30 (L.O. 21:00)、売り切れ次第終了、16〜18時に閉めることも、予約不可、原文でサービス料「なし」、25席、禁煙、車椅子可、カード・電子マネー・QR不可、法人会員、国産小麦の熟成麺、打ちたて・切りたて・茹でたて・揚げたて。口コミ (2025年11月〜2026年7月、英語): 天ぷら、小鉢2品、季節のご飯、香の物付きの定食 (かけ1,800円、ざる・釜揚げ1,950円、冷かけ約1,900円)、6種のうどん、名物のカレーうどん、鶏天の辛いカレーうどん1,950円、さんまの天ぷらと鳴門わかめのおろし生醤油うどん1,750円、月見山かけ950円、月見とろろぶっかけ、鶏ザンギ、レンタル着物の客に前掛け、やや高い (2026年3月)、開店が遅れた (2026年6月)。',
      confidence: 'medium', sources: [TB].concat(rv(R, ['B517270309', 'B517823345', 'B521071047', 'B521225289', 'B521467530', 'B523016482', 'B523799847', 'B524130419', 'B525667252', 'B529998748', 'B531472074', 'B532938208'])) },
    cultural_comfort: { level: 'english', note: 'Popular with overseas visitors; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区富永町119-1 桜花ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog corporate-member listing with reviews through July 2026.' },
    pin_source: `Tabelog ${TB} (35.004501, 135.775276); cross-checked: GSI 京都府京都市東山区富永町119番地 (lot) 6m; nearest pin kyoto_maimaian_gion 15m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B517823345/', R + 'B521071047/', R + 'B521467530/'],
    price_note: 'Prices from November 2025 – January 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Kake udon set (tempura, sides, rice, pickles)', '¥1,800', 'Set', 'no', 'no', 'January 2026.', 'kake_udon_set'),
      it('', '', 'Zaru or kamaage udon set', '¥1,950', 'Set', 'no', 'no', 'January 2026.', 'zaru_udon_set'),
      it('', '', 'Spicy curry udon with chicken tempura', '¥1,950', 'Udon', 'no', 'no', 'November 2025.', 'curry_udon'),
      it('', '', 'Tsukimi yama udon', '¥950', 'Udon', 'no', 'no', 'January 2026.', 'tsukimi_yama'),
    ] }, {
    cuisine: '国産小麦の熟成麺を「打ちたて、切りたて、茹でたて、揚げたて」で出す祇園のうどん店 (食べログ、2025〜2026年の口コミ)・季節の天ぷら、小鉢2品、季節のご飯、香の物付きの定食: かけ1,800円、ざるや釜揚げ1,950円、冷かけ約1,900円、うどんは6種 (2026年1〜3月)・名物のカレーうどん (豚、卵、フライドオニオン)、鶏天の辛いカレーうどん1,950円 (2025年11月、2026年2月)・さんまの天ぷらと鳴門わかめのおろし生醤油うどん1,750円 (2025年11月)・月見山かけうどん950円、鶏天の月見とろろぶっかけ (2026年1月・7月)・鶏ザンギ (2025年11月)',
    neighborhood: '花見小路と富永町の角、祇園。祇園四条から徒歩3分',
    gf_detail: 'グルテンフリーではない: 小麦のうどん、天ぷら、カレー (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: かつおだし、鶏天、卵 (2025〜2026年の口コミ)。',
    notes: '[うどん・花見小路と富永町の角、茹でたての熟成麺] 祇園の角にある明るいうどん店。注文ごとに茹でる太くもちもちの国産小麦の麺で、カレーうどん、とろろぶっかけ、天ぷらと季節のご飯の定食は1,800〜1,950円ほど。観光客に人気、定食は高めという声も。現金のみ。昼12時から。',
  });
}

// ================================================================ 上田珈琲 京都祇園店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26043174/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://ueda-coffee.cafe/shop/gion/';
  const H = day(['10:00', '18:00']);
  put({
    id: 'kyoto_ueda_coffee_gion', name: '上田珈琲 京都祇園店 (Ueda Coffee Kyoto Gion)', category: 'OMNI',
    lat: 35.005055, lng: 135.775111, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: pasta, bread, mille-feuille and lemon tart; coffee and pudding may suit — ask (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask: oat milk for café au lait, and a Japanese-style pasta described as vegan-friendly at lunch (June 2025).',
    hours_raw: 'Tabelog: Mon, Tue, Thu–Sun 10:00–18:00 (last order 17:30); closed Wednesday. Lunch set (pasta or curry with coffee and bread) until 14:00 (June 2025). QR self-ordering at the table. Counter, window and table seats with outlets and USB ports; free Wi-Fi; a semi-private table at the back. Non-smoking. Cards and QR; no e-money. On Hanamikoji at Sueyoshi-cho, ground floor of the Kyoto Gion Yuberu Hotel (web listings). Opened 14 June 2025 (Tabelog) as the second shop of Ueda Coffee of Kumamoto.',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Hanamikoji at Sueyoshi-cho, north Gion — 5 min walk from Gion-Shijo',
    cuisine: 'The Kyoto branch of a Kumamoto specialty-coffee roaster, hand-brewed on a TONE TOUCH03 machine, with a café menu supervised by a French chef (2025–2026 reviews) · Ueda Coffee Blend (Yellow, lighter roast) ¥650, a city-roast blend of Ethiopia and Costa Rica; monthly specials, decaf, deep-roast iced coffee, café au lait with milk or oat milk (June 2025) · classic pudding ¥490; café-au-lait pudding; lemon tart; mille-feuille ¥780 (2025–2026) · lunch set until 14:00: pasta or curry with coffee and bread, including a Japanese-style pasta said to be vegan-friendly (June 2025) · English Breakfast tea ¥650; seasonal strawberry milk; matcha chocolate; lemonade soda; cream soda (2025–2026)',
    website: SITE, gmaps: gm('上田珈琲 京都祇園店'), menu_url: SITE,
    notes: '[Specialty coffee · Hanamikoji at Sueyoshi-cho, a Kumamoto roaster\'s Kyoto café] A calm, wood-toned café on north Hanamikoji, the second shop of Kumamoto\'s Ueda Coffee: hand-brewed blends, a firm retro pudding, French-chef-designed pasta lunches and outlets for working. QR ordering. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Opened 14 June 2025 (Tabelog) as the second shop, and the Kansai debut, of Ueda Coffee from Kumamoto City (June and September 2025 reviews), with a café menu supervised by a French chef. Web listings place it on the ground floor of the Kyoto Gion Yuberu Hotel. Criticism: staff who "seemed a bit unfriendly" (October 2026) and a pudding set "like it was set with powder" (July 2025).',
      philosophy: null,
      specialty: 'Hand-brewed blends; classic pudding.',
      anecdotes: [
        { text: 'June 2025: "Here, we use the state-of-the-art coffee extraction machine \'TONE TOUCH03\' to maximize the deep flavors of our carefully selected specialty coffee beans through hand brewing."', source: R + 'B508801405/' },
        { text: 'September 2025: "However, please note that it closes early at 6 PM, so it\'s not available for evening visits."', source: R + 'B513803549/' },
      ],
      japanese_sources_summary: '食べログ: 上田珈琲 京都祇園店、カフェ、東山区清本町359-1、祇園四条から336m、月・火・木〜日 10:00〜18:00 (L.O. 17:30)、水曜休み、禁煙、カード・QR可、電子マネー不可、2025年6月14日オープン。口コミ (2025年6月〜2026年10月、英語): 熊本の上田珈琲の2号店で関西初出店、TONE TOUCH03 でハンドドリップ、フレンチのシェフ監修のフード、Ueda Coffee Blend (Yellow) 650円、エチオピアとコスタリカのシティロースト、月替わり、デカフェ、深煎りのアイスコーヒー、オーツミルクのカフェオレ、クラシックプリン490円、カフェオレプリン、レモンタルト、ミルフィーユ780円、14時までのランチ (パスタかカレー、コーヒーとパン、ヴィーガン対応の和風パスタ)、紅茶650円、いちごミルク、抹茶チョコ、レモネードソーダ、クリームソーダ、QRでセルフ注文、コンセントとWi-Fi、店員がやや無愛想 (2026年10月)。',
      confidence: 'medium', sources: [TB, SITE].concat(rv(R, ['B508421531', 'B508801405', 'B508860333', 'B510325215', 'B511836478', 'B513329693', 'B513803549', 'B519330080', 'B527735021', 'B538274794'])) },
    cultural_comfort: { level: 'english', note: 'QR self-ordering; Wi-Fi and outlets.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区清本町359-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official shop page, with reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.005055, 135.775111); cross-checked: GSI 京都府京都市東山区清本町359番地 (lot) 36m; nearest pin kyoto_kappo_takekishi 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B508421531/', R + 'B538274794/'],
    price_note: 'Prices from June 2025 and October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Ueda Coffee Blend (Yellow)', '¥650', 'Coffee', 'ask', 'ask', 'June 2025.', 'blend_coffee'),
      it('', '', 'Classic pudding', '¥490', 'Dessert', 'ask', 'no', 'June 2025.', 'pudding'),
      it('', '', 'Mille-feuille', '¥780', 'Dessert', 'no', 'no', 'October 2026.', 'mille_feuille'),
      it('', '', 'English Breakfast tea (hot)', '¥650', 'Tea', 'ask', 'ask', 'October 2026.', 'tea'),
    ] }, {
    cuisine: '熊本のスペシャルティコーヒーの店の京都店。TONE TOUCH03 でハンドドリップし、フードはフレンチのシェフ監修 (2025〜2026年の口コミ)・Ueda Coffee Blend (Yellow、浅め) 650円、エチオピアとコスタリカのシティロースト、月替わり、デカフェ、深煎りのアイスコーヒー、牛乳かオーツミルクのカフェオレ (2025年6月)・クラシックプリン490円、カフェオレプリン、レモンタルト、ミルフィーユ780円 (2025〜2026年)・14時までのランチ: パスタかカレーにコーヒーとパン、ヴィーガン対応の和風パスタも (2025年6月)・紅茶 (イングリッシュブレックファスト) 650円、季節のいちごミルク、抹茶チョコ、レモネードソーダ、クリームソーダ (2025〜2026年)',
    neighborhood: '花見小路と末吉町の角、祇園の北側。祇園四条から徒歩5分',
    gf_detail: 'グルテンフリーではない: パスタ、パン、ミルフィーユ、レモンタルト。コーヒーやプリンは要確認 (2025〜2026年の口コミ)。',
    vegan_detail: '要確認: カフェオレはオーツミルクにでき、ランチにはヴィーガン対応の和風パスタ (2025年6月)。',
    notes: '[スペシャルティコーヒー・花見小路と末吉町の角、熊本の珈琲店の京都店] 花見小路の北の、木の温かみのある落ち着いたカフェで、熊本の上田珈琲の2号店。ハンドドリップのブレンド、固めのレトロなプリン、フレンチのシェフ監修のパスタのランチ、仕事にも使えるコンセント。QRで注文。水曜休み。',
  });
}

// ================================================================ 名月堂
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26007402/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.eonet.ne.jp/~kyougashiya/';
  const H = day(['10:00', '17:00']);
  put({
    id: 'kyoto_meigetsudo_miyagawacho', name: '名月堂 (Meigetsu Do)', category: 'OMNI',
    lat: 34.998336, lng: 135.77057, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: the soft rice-based mochi (gyuhi-like) may suit, but some sweets use kinako, sake lees or baked flour doughs — check each item (2022–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask: cinnamon, brown-sugar and matcha mochi may suit; the caramel and white-miso sake-lees mochi and baked goods may contain dairy or egg (2022–2025 reviews).',
    hours_raw: 'Tabelog: Wed–Sun 10:00–17:00; closed Monday and Tuesday (open on holidays); hours may change. Take-away wagashi shop; items sold individually; can be frozen; orders of 10 or more can be shipped. Cash only (Tabelog; November 2024). On Shin-Miyagawa-cho-dori below Matsubara, at the southern end of Miyagawa-cho (January 2024). Founded 1950 (a January 2024 reviewer, from the shop\'s website).',
    hours: { 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Southern end of Miyagawa-cho, below Matsubara — 10 min walk from Kiyomizu-Gojo',
    cuisine: 'A small wagashi shop known for soft, marshmallow-like square mochi (2022–2026 reviews) · nikki (cinnamon) mochi, the signature, said to have been a favourite of Konosuke Matsushita (December 2023) · year-round brown-sugar, cinnamon and matcha mochi; seasonal caramel ¥180, blueberry, white-miso sake-lees "Kyo Yukiji" in winter (2022–2025) · warabi mochi with kinako in summer (May 2022); sakura mochi, kashiwa mochi (May 2026) · kinako snowballs and baked goods (April 2025)',
    website: SITE, gmaps: gm('名月堂 宮川町 西御門町'), menu_url: null,
    notes: '[Wagashi · south Miyagawa-cho, cinnamon mochi since 1950] A tiny old sweet shop at the quiet end of Miyagawa-cho selling cloud-soft square mochi by the piece — cinnamon (nikki) is the classic, with brown sugar, matcha and seasonal flavours like caramel or white-miso sake lees. Kindly owners, cash only. Closed Monday and Tuesday.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'A January 2024 reviewer, citing the shop\'s website, gives its founding as 1950; reviewers describe a long-established shop with a friendly owner who shares stories (December 2023; November 2024) and staff who fetched a fresh batch from the back (April 2025). One May 2026 diner found the texture more gyuhi than mochi and would have liked it firmer.',
      philosophy: null,
      specialty: 'Nikki (cinnamon) mochi.',
      anecdotes: [
        { text: 'December 2023: "I heard that even Konosuke Matsushita was a fan of this sweet, which really boosted my excitement."', source: R + 'B493264279/' },
        { text: 'April 2025: "I was particularly intrigued by the fresh caramel mochi, but unfortunately, it was sold out in the showcase. However, when I asked the staff, they kindly brought out a fresh batch from the back."', source: R + 'B504988420/' },
      ],
      japanese_sources_summary: '食べログ: 名月堂、和菓子、東山区新宮川町通松原下ル西御門町447-1、京阪清水五条駅から徒歩10分、水〜日 10:00〜17:00、月・火休み (祝日は営業)、テイクアウト、冷凍可、10個以上で地方発送、カード・電子マネー・QR不可、サイトは eonet.ne.jp/~kyougashiya/。口コミ (2022年5月〜2026年5月、英語): 宮川町の南端、1950年創業 (2024年1月)、名物のにっき餅、黒糖・にっき・抹茶の四角い餅、季節の生キャラメル180円、ブルーベリー、冬の白味噌酒粕の「Kyo Yukiji」、夏のきな粉のわらび餅、桜餅、柏餅、きな粉のスノーボール、焼き菓子、Konosuke Matsushita も好んだという (2023年12月)、気さくな店主、現金のみ、餅がもう少し固い方が好み (2026年5月)。',
      confidence: 'medium', sources: [TB, SITE].concat(rv(R, ['B448936218', 'B449843199', 'B450163414', 'B472952413', 'B478789421', 'B480155499', 'B493264279', 'B496313755', 'B501130316', 'B504988420', 'B527388761', 'B529789132'])) },
    cultural_comfort: { level: 'japanese', note: 'Take-away only; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区新宮川町通松原下ル西御門町447-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated February and May 2026.' },
    pin_source: `Tabelog ${TB} (34.998336, 135.770570); cross-checked: GSI 京都府京都市東山区西御門町447番地 (lot) 26m; nearest pin ChIJzyDlbyoJAWARmN48Tihodvg 39m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B504988420/'],
    price_note: 'One price from an April 2025 review; sold by the piece.', last_checked: TODAY, items: [
      it('', '', 'Nikki (cinnamon) mochi', null, 'Mochi', 'ask', 'ask', '2022–2026 reviews.', 'nikki_mochi'),
      it('', '', 'Fresh caramel mochi (seasonal)', '¥180', 'Mochi', 'ask', 'no', 'April 2025.', 'caramel_mochi'),
      it('', '', 'Brown-sugar mochi', null, 'Mochi', 'ask', 'ask', '2024–2026 reviews.', 'kokuto_mochi'),
    ] }, {
    cuisine: 'マシュマロのようにやわらかい四角い餅で知られる小さな和菓子店 (2022〜2026年の口コミ)・名物のにっき餅、Konosuke Matsushita も好んだという (2023年12月)・通年の黒糖・にっき・抹茶の餅、季節の生キャラメル180円、ブルーベリー、冬の白味噌酒粕の「Kyo Yukiji」(2022〜2025年)・夏はきな粉のわらび餅 (2022年5月)、桜餅、柏餅 (2026年5月)・きな粉のスノーボールと焼き菓子 (2025年4月)',
    neighborhood: '宮川町の南端、松原下ル。清水五条から徒歩10分',
    gf_detail: '要確認: やわらかい餅は合うかもしれないが、きな粉、酒粕、焼き菓子の生地を使うものも。品ごとに確認を (2022〜2026年の口コミ)。',
    vegan_detail: '要確認: にっき、黒糖、抹茶の餅は合うかもしれないが、キャラメルや白味噌酒粕の餅、焼き菓子は乳や卵の可能性 (2022〜2025年の口コミ)。',
    notes: '[和菓子・宮川町の南端、1950年からのにっき餅] 宮川町の静かな端にある小さな老舗の菓子店で、雲のようにやわらかい四角い餅を1個から。定番はにっき餅、ほかに黒糖、抹茶、キャラメルや白味噌酒粕などの季節の味。気さくな店主、現金のみ。月・火休み。',
  });
}

save();
