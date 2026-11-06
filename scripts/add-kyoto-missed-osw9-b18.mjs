// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 18.
//   + 先斗町寿司よし乃 Pontocho Sushi Yoshino (sushi and side dishes on Pontocho; omakase sushi kaiseki)        [core]
//   + グランマーブル 祇園本店 GRAND MARBLE Gion honten (Kyoto marble-Danish bakery shop in a Gion machiya)      [core]
//   + 上古屋 Joko Ya (machiya izakaya for Kyotango fish and sake, Nishinotoin-Takoyakushi)                       [notable]
//   + Sudo (9-seat Italian omakase with a pizza oven, Nijo-Fuyacho; opened 2025)                                [notable]
//   Same-name counts first: よし乃 1; グランマーブル 2 in our crawls — this shop and カフェ・グランマーブル祇園ちから
//   (26030324, the café upstairs) — and the official site lists the Gion main shop and a factory shop plus pop-ups;
//   none in data, a small group, so the main shop is drafted; 上古屋 1; Sudo 1 (a July 2026 reviewer says it is
//   produced by "etto", crawl 26041705, not in data).
//   Taken in queue order on 2026-11-05: core 26036657, 26024747; notable 26028029, 26043845. None is in
//   data/kyoto.json by name or address.
//   Service charges checked against Tabelog's Japanese original: 上古屋 "付き出し330円"; Sudo "サーヴィス料 5%".
//   Pins: Tabelog points; GSI lot matches 5–106 m; nearest records 16 m or more.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-18');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 先斗町寿司よし乃
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26036657/'; const R = TB + 'dtlrvwlst/';
  const D = ['17:00', '22:30'], L = ['11:30', '14:30'];
  put({
    id: 'kyoto_pontocho_sushi_yoshino', name: '先斗町寿司よし乃 (Pontocho Sushi Yoshino)', category: 'OMNI',
    lat: 35.008274, lng: 135.77099, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sushi with soy and sauces, saikyo-miso grilled fish, fried dishes and vinegared dishes; no gluten information (Tabelog; 2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sushi, sashimi, grilled fish and clam soup (2025–26 reviews).',
    hours_raw: 'Mon, Tue, Thu, Fri 17:00–22:30; Sat–Sun 11:30–14:30 and 17:00–22:30 (last orders 14:00 and 22:00); closed Wednesday (Tabelog). Bookings taken; the omakase "sushi kaiseki" by the day before; on 30–31 December, course bookings only; families with children under school age contact ahead (Tabelog). 17 seats: 9 at the counter and 8 at tables; private hire up to 20; non-smoking; cards (VISA, Master, JCB, AMEX, Diners) (Tabelog). On Pontocho near the Kaburenjo theatre, now on the ground floor after moving down from the 2nd floor of the same building; 5 min from Sanjo Stn (Tabelog).',
    hours: { 0: day(D), 1: day(D), 3: day(D), 4: day(D), 5: day(L, D), 6: day(L, D) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Pontocho near the Kaburenjo — 5 min from Sanjo Stn',
    cuisine: 'Sushi and à la carte Kyoto dishes: omakase "sushi kaiseki" ¥11,000 (Tabelog) · in 2025–26 reviews: grilled sawara and saikyo-miso black cod, three kinds of vinegared dishes, shima-aji sushi with a sauce, surf clam, sea urchin, ikura and scallop, clam soup made to order, fried dishes including conger eel, yuzu sorbet',
    website: null, gmaps: gm('先斗町寿司よし乃'), menu_url: TB + 'dtlmenu/',
    notes: "[Sushi · Pontocho] A small sushi counter on Pontocho by the Kaburenjo, now at street level, known as much for its side dishes — vinegared plates, saikyo-miso black cod, a clam soup made to order — as for the sushi. Omakase sushi kaiseki ¥11,000 (book a day ahead) or à la carte; bills around ¥8,000–15,000. Busy with overseas visitors; book. Closed Wednesday.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed in the sources)'], origin: null,
      background: 'Listed as opening 9 December 2021 (Tabelog); per the operator, the shop moved from the 2nd floor of its building to the ground floor facing Pontocho. A September 2025 reviewer first visited "7 to 8 years ago".',
      philosophy: null, specialty: 'Sushi kaiseki; side dishes.',
      anecdotes: [
        { text: 'A September 2025 returnee, back after seven or eight years, was remembered by the owner.', source: R + 'B515027270/' },
        { text: 'A twelve-time regular in October 2026 noted two hours of "consistently meticulous service".', source: R + 'B510410412/' },
        { text: 'A May 2026 diner found the staff stretched: one server friendly and full of explanations, another "quite unfriendly"; the ikura was "just okay".', source: R + 'B528366004/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 先斗町寿司よし乃、寿司・日本料理・海鮮、中京区石屋町122-5、三条駅から徒歩5分、月火木金 17:00〜22:30、土日 11:30〜14:30・17:00〜22:30、水曜休み、17席 (カウンター9、テーブル8)、貸切20名まで、禁煙、カード可、2021年12月9日オープン、ビルの2階から先斗町に面した1階へ移転、おまかせの寿司懐石11,000円 (前日までに予約)。口コミ (2025年9月〜2026年10月、英語): 鰆の焼き物、銀鱈の西京焼き、三種の酢の物、北寄貝、雲丹、注文ごとの貝の吸い物、穴子の揚げ物、柚子のシャーベット、海外の客が多い。',
      confidence: 'medium', sources: [TB, R + 'B510410412/', R + 'B515027270/', R + 'B524456664/', R + 'B526516704/', R + 'B526753742/', R + 'B528366004/', R + 'B529725713/', R + 'B530403186/', R + 'B535575851/', R + 'B536672306/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; many overseas guests (2025–26 reviews).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区石屋町122-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.008274, 135.770990); cross-checked: GSI 京都府京都市中京区石屋町122番地 (lot) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course price from Tabelog, tax included (read 2026-11-05).', last_checked: TODAY, items: [
      it('寿司懐石', '', 'Omakase sushi kaiseki', '¥11,000', 'Courses', 'ask', 'no', 'Book by the day before.', 'sushi_kaiseki'),
    ] }, {
    cuisine: '寿司と京料理の一品: おまかせの寿司懐石11,000円 (食べログ)・2025〜26年の口コミ: 鰆の焼き物と銀鱈の西京焼き、三種の酢の物、たれで出すしま鯵の寿司、北寄貝、雲丹、いくら、帆立、注文ごとに作る貝の吸い物、穴子などの揚げ物、柚子のシャーベット',
    neighborhood: '歌舞練場に近い先斗町。三条駅から徒歩5分',
    gf_detail: '要確認。醤油やたれの寿司、西京焼き、揚げ物、酢の物。グルテンの情報はない (食べログ、2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。寿司、刺身、焼き魚、貝の吸い物 (2025〜26年の口コミ)。',
    notes: '[寿司・先斗町] 歌舞練場近くの先斗町の小さな寿司カウンターで、いまは1階に。寿司と同じくらい一品が評判で、酢の物、銀鱈の西京焼き、注文ごとの貝の吸い物など。おまかせの寿司懐石11,000円 (前日までに予約) かアラカルトで、8千〜1万5千円ほど。海外の客も多いので予約を。水曜休み。',
  });
}

// ================================================================ グランマーブル 祇園本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26024747/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://grandmarble.com/';
  const H = day(['10:30', '18:30']);
  put({
    id: 'kyoto_grand_marble_gion', name: 'グランマーブル 祇園本店 (GRAND MARBLE Gion honten)', category: 'OMNI',
    lat: 35.003215, lng: 135.775083, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: Danish bread and pies (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: butter-laminated Danish bread and butter pies (2026 reviews).',
    hours_raw: '10:30–18:30 daily; a summer break 6–10 July (Tabelog). Mainly a takeaway shop; 4 seats (Tabelog); the café upstairs, カフェ・グランマーブル祇園ちから, serves French toast and croque-monsieur (2026 reviews). Some items sell out by late afternoon (June 2026). Cards, IC cards and QR incl. Alipay and WeChat Pay (Tabelog). In a Gion machiya; 5 min from Gion-Shijo Stn (Tabelog; August 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion south of Shijo, near Yasaka Shrine — 5 min from Gion-Shijo Stn',
    cuisine: 'Marble Danish bread by the loaf or slice in boxed gift sets, about 11 days\' shelf life: plain "Prestige" ¥1,188 (August 2026), matcha with azuki or kuromitsu, matcha chocolate, Kyoto three-colour, brown-sugar milk kinako, azuki butter, chocolate banana; burnt-sugar butter pie ¥783 (September 2026); leaf pie, sandwich cookies, chocolate (2026 reviews; Tabelog)',
    website: SITE, gmaps: gm('グランマーブル 祇園本店'), menu_url: SITE + 'onlineshop/',
    notes: "[Danish bread · Gion] The Gion flagship of a Kyoto marble-Danish bakery (founded 1996, per a reviewer), in a machiya near Yasaka Shrine: boxed loaves in flavours like matcha-azuki or Kyoto three-colour, which keep about 11 days — a favourite Kyoto gift. Loaves from about ¥1,188; a café upstairs. Open daily.",
    chef_bio: { chef_name: null, roles: ['Company: GRAND MARBLE (no person named)'], origin: null,
      background: 'Per 2026 reviews: a Kyoto marble-Danish specialist founded in 1996, the Danish ranked first in Kyoto City\'s furusato-tax bread category five years running (August 2026). The official site lists this Gion main shop and a factory shop, with pop-up shops at department stores elsewhere in Japan (November 2026).',
      philosophy: null, specialty: 'Marble Danish bread.',
      anecdotes: [
        { text: 'By 4 pm on a June 2026 afternoon, some items were already sold out.', source: R + 'B530148950/' },
        { text: 'A June 2026 regular found the Danish less buttery than remembered, and a little sweet and greasy toasted.', source: R + 'B74290738/' },
        { text: 'A gift recipient in August 2026 sliced and toasted the plain loaf the next morning as instructed — "crispy and delicious".', source: R + 'B533720356/' },
      ],
      japanese_sources_summary: '公式サイト (grandmarble.com): GRAND MARBLE、グランマーブル祇園本店、グランマーブル ファクトリー店、大丸福岡天神店と水戸京成百貨店の期間限定ショップ (2026年11月)。食べログ (店舗会員): パン・チョコレート、東山区祇園街南側570-238、祇園四条駅から徒歩約5分、10:30〜18:30 (無休、7月6〜10日は夏季休業)、4席、テイクアウト、カード・電子マネー・QR 可。口コミ (2026年6〜9月、英語): マーブルデニッシュ、Prestige 1,188円、抹茶あん、抹茶黒蜜、Kyoto Sanshoku、黒糖ミルクきなこ、焦がし砂糖のバターパイ783円、賞味期限11日、2階はカフェ・グランマーブル祇園ちから、1996年創業、ふるさと納税のパン部門で5年連続1位。',
      confidence: 'medium', sources: [TB, SITE, R + 'B530148950/', R + 'B533136364/', R + 'B533659222/', R + 'B533720356/', R + 'B533919262/', R + 'B534005664/', R + 'B534745647/', R + 'B535479256/', R + 'B536852937/', R + 'B74290738/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Pick boxed loaves at the counter; go early for the full range.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町南側570-238',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (November 2026 news) and Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.003215, 135.775083); cross-checked: GSI 京都府京都市東山区祇園町南側570番地 (lot) 106m (a large lot); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533136364/', R + 'B535479256/'],
    price_note: 'No price list read; prices from August–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Marble Danish "Prestige" (plain)', '¥1,188', 'Bread', 'no', 'no', 'August 2026 review.', 'prestige'),
      it('', '', 'Burnt-sugar butter pie', '¥783', 'Pastry', 'no', 'no', 'September 2026 review.', 'butter_pie'),
    ] }, {
    cuisine: '箱入りの贈答用のマーブルデニッシュを1本やスライスで。日持ちは約11日: プレーンの Prestige 1,188円 (2026年8月)、抹茶あん、抹茶黒蜜、抹茶チョコ、Kyoto Sanshoku、黒糖ミルクきなこ、あんバター、チョコバナナ。焦がしシュガーのバターパイ783円 (2026年9月)。リーフパイ、サンドクッキー、チョコレート (2026年の口コミ、食べログ)',
    neighborhood: '四条の南の祇園、八坂神社の近く。祇園四条駅から徒歩5分',
    gf_detail: 'グルテンフリー不可。デニッシュとパイ (2026年の口コミ)。',
    vegan_detail: '実際にはヴィーガン不可。バターを折り込んだデニッシュとバターのパイ (2026年の口コミ)。',
    notes: '[デニッシュ・祇園] 京都のマーブルデニッシュの店 (口コミによれば1996年創業) の祇園の本店で、八坂神社近くの町家にある。抹茶あんや Kyoto Sanshoku などの箱入りの1本は約11日もち、京都土産の定番。1本1,188円ほどから、2階にカフェ。無休。',
  });
}

// ================================================================ 上古屋
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26028029/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://johkoya.com/';
  const H = day(['17:30', '23:30']);
  put({
    id: 'kyoto_joko_ya', name: '上古屋 (Joko Ya)', category: 'OMNI',
    lat: 35.006026, lng: 135.755237, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sashimi, fried shrimp and squid tempura, oden broth and sushi; no gluten information (official site; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish-led izakaya; even the cold tomato oden sits in broth (2026 reviews).',
    hours_raw: '17:30–23:30 (last order 23:00); 2nd-floor seats to 22:30 (last order 22:00); closed over New Year and in summer, and on some days (e.g. 8 October) (official site; Tabelog). Starter charge ¥330 per person — Tabelog\'s Japanese original: "付き出し330円". Bookings taken; walk-ins sometimes possible (September 2026). Counter on the ground floor, tables with sunken footwells upstairs: 21 seats per Tabelog, 22 per the official site; children basically not admitted; non-smoking; cards (VISA, Master, JCB, AMEX, Diners) (Tabelog; official site). In a machiya on Nishinotoin south of Takoyakushi; 6 min from Karasuma or Shijo Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nishinotoin south of Takoyakushi, near Shijo-Karasuma — 6 min from Karasuma Stn',
    cuisine: 'Japanese izakaya built on ingredients and sake from the owner\'s home, Kyotango: fish from Kyotango and Maizuru, Kyoto vegetables and over ten sake (official site; 2026 reviews) · salt-seared Kyoto sawara, sashimi platters, deep-fried gasa shrimp, squid-leg tempura, raw octopus with wasabi, seafood yukhoe, cold shinjo, basil potato salad, cold oden with Kyoto tomatoes, grilled chicken neck, mozuku in vinegar, grilled saba sushi to finish (2026 reviews)',
    website: SITE, gmaps: gm('上古屋 京都 西洞院'), menu_url: SITE,
    notes: "[Izakaya · Nishinotoin near Shijo-Karasuma] A machiya izakaya where the owner, from Kyotango on the Japan Sea, serves fish and sake from home: salt-seared sawara, crisp gasa shrimp, saba sushi to finish. Counter downstairs, sunken tables upstairs; ¥330 starter; about ¥5,000–8,000. Popular — book. Open to 23:30.",
    chef_bio: { chef_name: null, roles: ['Owner-chef (from Kyotango; name not given)'], origin: 'Kyotango, northern Kyoto Prefecture (official site).',
      background: 'Opened 31 August 2016 (Tabelog). Per the official site: a Japanese izakaya near Shijo-Karasuma serving ingredients and local sake from the owner\'s hometown, Kyotango. An August 2026 reviewer says the shop is named after the chef\'s surname and calls it "Kamigoya"; Tabelog romanises it "Joko Ya" and the site is johkoya.com.',
      philosophy: null, specialty: 'Kyotango fish; grilled saba sushi.',
      anecdotes: [
        { text: 'A party of three in June 2026 had the sashimi platter sized for three.', source: R + 'B529674999/' },
        { text: 'An October 2026 diner found the fish not very fatty that season, and the fried gasa shrimp heavily seasoned — "more like a snack" — which "might actually be a good thing"; locals and tourists were about half and half.', source: R + 'B537547467/' },
        { text: 'A September 2026 regular overate again: the saba sushi at the end was "a bit too much".', source: R + 'B538314463/' },
      ],
      japanese_sources_summary: '公式サイト (johkoya.com): 上古屋、京都 四条/烏丸駅にほど近い西洞院蛸薬師の和食居酒屋、店主の地元である京丹後の食材や地酒、17:30〜23:30 (L.O. 23:00)、2階席は22:30まで (L.O. 22:00)、年末年始と夏季休業、10月8日休み、22席 (カウンター8、テーブル14)。食べログ (店舗会員): 居酒屋・海鮮・鍋、中京区西洞院蛸薬師下ル古西町427、付き出し330円、21席、子供は基本的に不可、2016年8月31日オープン。口コミ (2026年6〜10月、英語): 京丹後と舞鶴の魚、京都の鰆の塩たたき、刺身の盛り合わせ、ガサエビの唐揚げ、げそ天、焼き鯖寿司、冷やし真薯、京都のトマトの冷やしおでん、店名は料理人の名字、店主は丹後出身。',
      confidence: 'medium', sources: [TB, SITE, R + 'B529674999/', R + 'B533422883/', R + 'B535723348/', R + 'B535779840/', R + 'B536246375/', R + 'B536573854/', R + 'B537547467/', R + 'B537705985/', R + 'B538130754/', R + 'B538314463/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; ¥330 starter; adults only, basically.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区西洞院蛸薬師下ル古西町427',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (October 2026 closure notice) and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.006026, 135.755237); cross-checked: GSI 京都府京都市中京区古西町427番地 (lot) 55m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No priced menu read; starter charge from Tabelog\'s Japanese original.', last_checked: TODAY, items: [
      it('付き出し', '', 'Starter charge', '¥330', 'Charges', '', '', 'Per person.', 'otsukidashi'),
      it('', '', 'Grilled saba sushi', '', 'Rice', 'ask', 'no', '2026 reviews.', 'yaki_saba_zushi'),
    ] }, {
    cuisine: '店主の地元、京丹後の食材と地酒の和食居酒屋: 京丹後と舞鶴の魚、京野菜、10種以上の日本酒 (公式サイト、2026年の口コミ)・京都の鰆の塩たたき、刺身の盛り合わせ、ガサエビの唐揚げ、げその天ぷら、生蛸のわさび和え、海鮮ユッケ、冷やし真薯、バジルのポテトサラダ、京都のトマトの冷やしおでん、せせりの焼き、もずく酢、締めの焼き鯖寿司 (2026年の口コミ)',
    neighborhood: '四条烏丸に近い西洞院蛸薬師下ル。烏丸駅から徒歩6分',
    gf_detail: '要確認。刺身、海老の唐揚げ、げそ天、おでんの出汁、寿司。グルテンの情報はない (公式サイト、2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚が中心の居酒屋で、冷やしトマトのおでんも出汁に浸かる (2026年の口コミ)。',
    notes: '[居酒屋・四条烏丸に近い西洞院] 日本海側の京丹後出身の店主が、地元の魚と酒を出す町家の居酒屋。鰆の塩たたき、カリッとしたガサエビ、締めの焼き鯖寿司。1階はカウンター、2階は掘りごたつ。お通し330円、5千〜8千円ほど。人気なので予約を。23時30分まで。',
  });
}

// ================================================================ Sudo
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26043845/'; const R = TB + 'dtlrvwlst/';
  const D = ['18:00', '22:30'];
  put({
    id: 'kyoto_sudo', name: 'Sudo', category: 'OMNI',
    lat: 35.013587, lng: 135.76592, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: "We do not offer vegan, vegetarian, or gluten-free menus", and the course centres on pizza and fresh pasta (Tabelog; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: no vegan or vegetarian menu (Tabelog).',
    hours_raw: 'Tue–Sat and holidays 18:00–22:30; Sun 12:00–14:30 and 18:30–22:30; closed Monday and on some other days (Tabelog). Reservation only; the course can take 2–3 hours (Tabelog; August 2026). Service charge 5% — Tabelog\'s Japanese original: "サーヴィス料 5%". BYO with a corkage fee (Tabelog). 9 counter seats; private hire up to 20; children of school age eating an adult course; no strong perfume or very casual clothes; sommelier; non-smoking; cards incl. UnionPay (Tabelog). Takeaway of leftover pizza (October 2026). On Nijo-dori east of Fuyacho; 5 min from Kyoto Shiyakusho-mae Stn (Tabelog).',
    hours: { 1: day(D), 2: day(D), 3: day(D), 4: day(D), 5: day(D), 6: day(['12:00', '14:30'], ['18:30', '22:30']) }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nijo-dori east of Fuyacho — 5 min from Kyoto Shiyakusho-mae Stn',
    cuisine: 'A monthly-changing omakase that blends Italian cooking with the chef\'s Japanese-cuisine background, with Neapolitan pizza from an Italian oven at the counter; seasonal ingredients from the market, Kyoto pickles among the surprises; about 100 wines and sommelier pairings (Tabelog) · seasonal omakase ¥6,600, lunch course ¥6,600, Christmas course ¥11,000 (Tabelog) · in 2026 reviews: bonito pizza, edamame genovese pizza, house chitarra with Miyagi mackerel confit and daikon, mussels arrabbiata, karasumi peperoncino, pork or duck mains, eel, financier',
    website: null, gmaps: gm('Sudo 京都 二条 麩屋町'), menu_url: TB + 'dtlmenu/',
    notes: "[Italian omakase & pizza · Nijo-Fuyacho] A nine-seat counter opened in 2025 where a chef with a Japanese-cuisine background cooks a long seasonal omakase, with Neapolitan pizza from the oven in front of you. Courses ¥6,600 (+5% service), lunch on Sundays; wine pairings. Allow 2–3 hours. No vegan, vegetarian or gluten-free menus. Closed Monday.",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed; background in Japanese cuisine per the operator and 2026 reviews)'], origin: null,
      background: 'Opened 10 November 2025 (Tabelog). Per the operator: Italian cooking shaped by the chef\'s experience in Japanese cuisine. A July 2026 reviewer calls it a restaurant produced by "etto"; an October 2026 reviewer says the chef prepares everything alone, so dishes come at a leisurely pace.',
      philosophy: null, specialty: 'Pizza within an omakase.',
      anecdotes: [
        { text: 'An August 2026 diner booked for 7:30 pm and left at 10:30.', source: TB },
        { text: 'An October 2026 visitor took home the leftover pizza, after a bonito pizza that "was incredibly delicious".', source: R + 'B536633991/' },
        { text: 'An October 2026 diner found the course a bit oily and salty overall, with two similar slices of pizza, though the dessert was delicious.', source: R + 'B538239195/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): Sudo、ピザ・イタリアン、中京区二条通麩屋町東入尾張町202-1 オーク二条、京都市役所前駅から徒歩5分、火〜土・祝 18:00〜22:30、日 12:00〜14:30・18:30〜22:30、月曜休み (ほかに休みあり)、完全予約制、ヴィーガン・ベジタリアン・グルテンフリーのメニューなし、サーヴィス料5%、9席 (カウンター)、持ち込み可 (持ち込み料あり)、小学生以上、2025年11月10日オープン、和食の経験を生かしたイタリアン、イタリア製のピザ窯、ワイン約100種、季節のおまかせ6,600円、ランチ6,600円、クリスマス11,000円。口コミ (2026年7〜10月、英語): 鰹のピザ、枝豆のジェノベーゼ、キタッラ、からすみのペペロンチーノ、etto のプロデュース、料理人一人で調理、2〜3時間のコース。',
      confidence: 'medium', sources: [TB, R + 'B531963825/', R + 'B535988200/', R + 'B536197440/', R + 'B536211015/', R + 'B536633991/', R + 'B537439456/', R + 'B537524956/', R + 'B537618956/', R + 'B538181669/', R + 'B538239195/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Reservation only; allow 2–3 hours; 5% service.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区二条通麩屋町東入尾張町202-1 オーク二条',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.013587, 135.765920); cross-checked: GSI 京都府京都市中京区尾張町202番地 (lot) 64m; 35 m from kyoto_mane; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course prices from Tabelog, tax included (read 2026-11-05); 5% service extra.', last_checked: TODAY, items: [
      it('', '', 'Seasonal omakase course', '¥6,600', 'Courses', 'no', 'no', 'Plus 5% service.', 'omakase'),
      it('', '', 'Lunch course (Sundays)', '¥6,600', 'Courses', 'no', 'no', 'Plus 5% service.', 'lunch'),
    ] }, {
    cuisine: '和食の経験を生かしたイタリアンの月替わりのおまかせで、カウンターのイタリア製の窯でナポリピッツァも焼く。市場の旬の食材、京漬物などの意外な組み合わせ。ワイン約100種とソムリエのペアリング (食べログ)・季節のおまかせ6,600円、ランチ6,600円、クリスマスコース11,000円 (食べログ)・2026年の口コミ: 鰹のピッツァ、枝豆のジェノベーゼのピッツァ、自家製キタッラと宮城の鯖のコンフィと大根、ムール貝のアラビアータ、からすみのペペロンチーノ、豚や鴨のメイン、鰻、フィナンシェ',
    neighborhood: '麩屋町の東の二条通。京都市役所前駅から徒歩5分',
    gf_detail: 'グルテンフリー不可。「ヴィーガン、ベジタリアン、グルテンフリーのメニューはない」とあり、コースはピッツァと手打ちパスタが中心 (食べログ、2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。ヴィーガンやベジタリアンのメニューはない (食べログ)。',
    notes: '[イタリアンのおまかせとピッツァ・二条麩屋町] 2025年開店の9席のカウンター。和食出身の料理人が季節の長いおまかせを作り、目の前の窯でナポリピッツァを焼く。コース6,600円 (+サービス料5%)、日曜は昼も、ワインのペアリングあり。2〜3時間みておくこと。ヴィーガン、ベジタリアン、グルテンフリーのメニューはない。月曜休み。',
  });
}

save();
