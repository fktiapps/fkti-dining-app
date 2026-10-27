// Osaka sweep (2-mile circle around Dotonbori), batch 84 — ramen phase (all OMNI).
//   + 松屋食堂 (old-school shokudo famous for omurice, chuka soba with house noodles → other)
//   + 青藍 (Chinese, Tabelog Chinese WEST 100 2021/2023/2024/2026; lunch sets and courses → other)
//   + 麺スタイル谷本家 (bubble-style chicken paitan, chicken-and-shellfish shio, Sapporo miso; Honmachi)
//   + ラーメン大戦争 せんば心斎橋店 (light chicken-and-shellfish shoyu with 1–5 free chashu slices)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-27';
const { put, save } = openCitySweep('osaka', TODAY, 84);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 松屋食堂
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27012547/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:30', '16:30']);
  put({
    id: 'osaka_matsuya_shokudo_nipponbashi', name: '松屋食堂 (Matsuya Shokudo)', category: 'OMNI',
    lat: 34.659207, lng: 135.502957, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: wheat noodles, soy and miso seasoning, gyoza.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken in the omurice, chashu and pork in the ramen.',
    hours_raw: 'Mon–Sat 11:30–16:30, until sold out; closed Sundays and holidays; hours may change (Tabelog). Cash only, pay after (October 2026; Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Nipponbashi-nishi 1-8-25, a narrow alley — 10 min from Namba Stn',
    cuisine: 'Old-school neighborhood shokudo · classic omurice ¥900 with chicken rice, a thin egg wrap and red ketchup, served with Chinese soup; large size available · chuka soba ramen with house-made straight noodles and thick chashu · spicy miso ramen with stir-fried pork, bean sprouts and green onion · generous fried rice, half size available · gyoza · 9 counter seats plus a second floor',
    website: null, gmaps: gm('松屋食堂 日本橋西'), menu_url: null,
    notes: "[Japanese · an old-school shokudo famous for omurice] A nostalgic neighborhood shokudo down a narrow Nipponbashi alley, with metal chairs, a small counter and a second floor, busy even near closing. The most popular dish is the omurice (¥900): chicken rice wrapped in a flawless thin yellow egg with a bold dollop of red ketchup, served with Chinese soup, and there's a large size. The ramen is a classic chuka soba with house-made straight noodles and thick chashu, and the spicy miso ramen comes dark and robust under stir-fried pork and bean sprouts. Fried rice is generous, so consider the half. Prices are low. A short wait at noon; dishes can take 10 to 15 minutes. Lunch to mid-afternoon only, until sold out. Cash only; closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Neighborhood shokudo (2026 reviews).', philosophy: null, specialty: 'Omurice; chuka soba.',
      anecdotes: [
        { text: '"The vibrant yellow egg enveloped the chicken rice thinly, without any flaws. At its center lay a generous dollop of bright red ketchup, unapologetically bold." — October 2026, omurice.', source: R + 'B537895011/' },
        { text: '"The Ramen was a classic, nostalgic Chinese noodle soup. The chashu (braised pork) was thick and delicious, and the noodles were straight and had a nice chew, made in-house." — October 2026.', source: R + 'B536893024/' },
      ],
      japanese_sources_summary: '食べログ: 松屋食堂、大阪市浪速区日本橋西1-8-25、恵美須町から453m、月〜土11:30〜16:30、日祝休み、売り切れ次第終了、カード・電子マネー・QR不可、9席(2階席あり)、禁煙。口コミ(2026年10月): 一番人気のオムライス、12時過ぎに5人待ち7分、現金後払い、提供16分、ラーメンとチャーハン、昔ながらの中華そば、厚いチャーシュー、自家製のストレート麺、チャーハンは大盛りで半分サイズも、安い、2階建て、閉店1時間前も混雑、オムライス900円と中華スープ、大盛りも、細い路地の店、金属の椅子、薄い卵とケチャップ、辛味噌ラーメン、炒めた豚肉ともやしとねぎ、濃い色のスープ。',
      confidence: 'medium', sources: [TB, R + 'B537895011/', R + 'B536893024/', R + 'B536834175/', R + 'B537040294/', R + 'B537711473/', R + 'B538071346/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Old-school shokudo; cash, pay after.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区日本橋西1-8-25',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区日本橋西一丁目8番25号 (go) 2m; OSM 松屋食堂 node/5621763409 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537711473/', R + 'B536893024/'],
    price_note: 'One price from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Omurice with Chinese soup', '¥900', 'Rice', 'no', 'no', 'Large size available; October 2026.', 'omurice'),
      it('', '', 'Ramen (chuka soba)', '', 'Noodles', 'no', 'no', 'October 2026.', 'ramen'),
      it('', '', 'Spicy miso ramen', '', 'Noodles', 'no', 'no', 'October 2026.', 'kara_miso'),
      it('', '', 'Fried rice (regular or half)', '', 'Rice', 'no', 'no', 'October 2026.', 'chahan'),
    ] }, {
    cuisine: '昔ながらの町の食堂・中華スープ付きの定番オムライス900円、チキンライスを薄焼き卵で包み赤いケチャップ、大盛りも・自家製ストレート麺と厚いチャーシューの中華そば・炒めた豚肉、もやし、ねぎの辛味噌ラーメン・たっぷりのチャーハン、半分サイズも・餃子・カウンター9席と2階席',
    neighborhood: '浪速区日本橋西1-8-25、細い路地。なんば駅から徒歩10分',
    gf_detail: '実際にはグルテンフリーではありません。小麦の麺、醤油や味噌の味付け、餃子。',
    vegan_detail: 'ヴィーガンではありません。オムライスの鶏肉、ラーメンのチャーシューと豚肉。',
    notes: '[和食・オムライスで知られる昔ながらの食堂] 日本橋の細い路地にある懐かしい町の食堂で、金属の椅子、小さなカウンターと2階席、閉店前でも混み合う。一番人気はオムライス(900円)で、チキンライスを薄く完璧な黄色の卵で包み、真ん中に赤いケチャップをたっぷり、中華スープ付きで大盛りも。ラーメンは自家製ストレート麺と厚いチャーシューの昔ながらの中華そば、辛味噌ラーメンは炒めた豚肉ともやしの下に濃く力強いスープ。チャーハンは量が多いので半分サイズも検討を。値段は安い。昼は少し待つことも、料理が出るまで10〜15分ほど。昼から夕方まで、売り切れ次第終了。現金のみ、日曜定休。',
  });
}

// ================================================================ 青藍
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270204/27065032/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:30', '14:30'], ['18:00', '22:00']), SA = day(['11:30', '14:30'], ['17:30', '22:00']), SU = day(['11:30', '14:30'], ['17:30', '21:30']);
  put({
    id: 'osaka_seiran_nakadera', name: '青藍 (Seiran)', category: 'OMNI',
    lat: 34.67169, lng: 135.514582, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: dim sum, sweet-and-sour sauces, soy and doubanjiang.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork, seafood and chicken throughout.',
    hours_raw: 'Mon–Fri 11:30–14:30 (L.O. 13:30) and 18:00–22:00 (L.O. 20:45); Sat and holidays 11:30–14:30 and 17:30–22:00; Sun 11:30–14:30 and 17:30–21:30; about seven days off a month, mostly Mondays, posted on Instagram (Tabelog). Lunch by sign-up board at the door; dinner reservations on Tabelog (September 2026). Cards accepted; no e-money or QR (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: SA, 6: SU }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nakadera 1-2-23, 1F — 7 min from Tanimachi 6-chome Stn exit 4',
    cuisine: 'Chinese, Tabelog Chinese WEST 100 · lunch sets: seafood ¥1,800, Seiran lunch ¥2,300 with three appetizers, soup, two dim sum, sweet-and-sour pork or seafood chili, refillable rice and dessert · steamed chicken with green-onion or sesame sauce · original dim sum · dinner courses about ¥10,000 or à la carte: black-vinegar sweet-and-sour pork, mapo tofu, soft-shell crab in chili sauce, kara-age with Mao Zedong sauce, dan dan noodles, shumai, matcha sesame balls, almond tofu · Shaoxing wine tasting · 6 counter seats, 3 tables, private room for 7',
    website: null, gmaps: gm('青藍 中寺 中華'), menu_url: null,
    notes: "[Chinese · a Tabelog 100 Chinese restaurant near Tanimachi 6-chome] A compact Chinese restaurant on a quiet slope near Tanimachi 6-chome, open since 2012 and picked for Tabelog's Chinese WEST 100 in 2021, 2023, 2024 and 2026, more refined than a neighborhood Chinese place. Lunch is the bargain: sets from ¥1,800, or the Seiran lunch (¥2,300) with three appetizers, soup, two original dim sum, a main of sweet-and-sour pork or seafood chili, refillable rice and dessert. The sweet-and-sour pork is the dish people praise most. Dinner is a course around ¥10,000 or à la carte: mapo tofu balancing heat and numbness, soft-shell crab in chili sauce, black-vinegar sweet-and-sour pork. One diner found the dan dan noodles bitter. Lunch fills by sign-up board before opening; book dinner. About seven days off a month.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 29 April 2012 (Tabelog)', background: 'Chinese restaurant (Tabelog, staff-maintained); Tabelog Chinese WEST 100 2021, 2023, 2024 and 2026.', philosophy: null, specialty: 'Sweet-and-sour pork; original dim sum; lunch sets.',
      anecdotes: [
        { text: '"I ordered the Seiran Lunch for JPY 2300. It included three appetizers, soup, two types of dim sum, a main dish (sweet and sour pork or seafood in chili sauce), rice (refillable), and dessert… The sweet and sour pork was especially exquisite!" — September 2026.', source: R + 'B535275469/' },
        { text: '"The mapo tofu had a perfect balance of spiciness and numbing sensation." — September 2026, ¥10,000 course.', source: R + 'B536068142/' },
      ],
      japanese_sources_summary: '食べログ(店舗会員): 青藍、大阪市中央区中寺1-2-23 1F、谷町六丁目駅4番出口から徒歩7分ほど、月〜金11:30〜14:30(L.O.13:30)・18:00〜22:00(L.O.20:45)、土祝11:30〜14:30・17:30〜22:00、日11:30〜14:30・17:30〜21:30、月曜中心に月7日ほど不定休(Instagramで告知)、カード可、電子マネー・QR不可、25席(カウンター6、テーブル3卓12席、個室7席)、2012年4月29日開店、食べログ 中国料理 WEST 百名店2021・2023・2024・2026。口コミ(2026年9〜10月): 青藍ランチ2,300円(前菜3種、スープ、点心2種、酢豚か海鮮のチリソース、おかわり自由のご飯、デザート)、酢豚が絶品、海鮮ランチ1,800円、蒸し鶏にねぎか胡麻のソース、ご飯は少し残念、開店前に入口の名簿に記入、10組ほどの行列、ランチはコースのみ、ディナーは食べログで予約、10,000円のコース、海老と白魚、焼売、イカの炒め物、麻婆豆腐は辛さとしびれのバランス、杏仁豆腐、抹茶の胡麻団子、紹興酒の飲み比べ、ジャスミン茶、オリジナル点心、ソフトシェルクラブのチリソース、毛沢東ソースの唐揚げ、黒酢の酢豚、担々麺は苦めという声。',
      confidence: 'medium', sources: [TB, R + 'B535275469/', R + 'B536068142/', R + 'B535425013/', R + 'B535624320/', R + 'B536475896/', R + 'B537302295/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Sign-up board for lunch; dinner reservations on Tabelog.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区中寺1-2-23 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained) with October 2026 closure days; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区中寺一丁目2番23号 (go) 8m; OSM 青藍 node/7119715685 1m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535275469/', R + 'B535425013/', R + 'B536068142/'],
    price_note: 'Prices from September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Seafood lunch set', '¥1,800', 'Lunch', 'no', 'no', 'September 2026.', 'seafood_lunch'),
      it('', '', 'Seiran lunch', '¥2,300', 'Lunch', 'no', 'no', 'September 2026.', 'seiran_lunch'),
      it('', '', 'Dinner course', '¥10,000', 'Courses', 'no', 'no', 'September 2026.', 'course'),
      it('', '', 'Black-vinegar sweet-and-sour pork', '', 'Mains', 'no', 'no', 'October 2026.', 'kurozu_subuta'),
      it('', '', 'Mapo tofu', '', 'Mains', 'no', 'no', 'September 2026.', 'mapo'),
    ] }, {
    cuisine: '中国料理、食べログ 中国料理 WEST 百名店・ランチ: 海鮮1,800円、前菜3種、スープ、点心2種、酢豚か海鮮のチリソース、おかわり自由のご飯、デザートの青藍ランチ2,300円・ねぎか胡麻のソースの蒸し鶏・オリジナルの点心・夜は10,000円ほどのコースか一品: 黒酢の酢豚、麻婆豆腐、ソフトシェルクラブのチリソース、毛沢東ソースの唐揚げ、担々麺、焼売、抹茶の胡麻団子、杏仁豆腐・紹興酒の飲み比べ・カウンター6席、テーブル3卓、7人の個室',
    neighborhood: '中央区中寺1-2-23 1F。谷町六丁目駅4番出口から徒歩7分',
    gf_detail: '実際にはグルテンフリーではありません。点心、甘酢、醤油や豆板醤。',
    vegan_detail: 'ヴィーガンではありません。豚肉、魚介、鶏肉が中心。',
    notes: '[中華・谷町六丁目近くの百名店の中国料理] 谷町六丁目近くの静かな坂にあるこぢんまりした中国料理店で、2012年開店、食べログの中国料理 WEST 百名店に2021、2023、2024、2026年と選出、町中華より洗練されている。お得なのはランチで、1,800円からのセット、または前菜3種、スープ、オリジナル点心2種、酢豚か海鮮のチリソース、おかわり自由のご飯、デザートの青藍ランチ(2,300円)。いちばん評判なのは酢豚。夜は10,000円ほどのコースか一品で、辛さとしびれのバランスのよい麻婆豆腐、ソフトシェルクラブのチリソース、黒酢の酢豚など。担々麺は苦めだったという声も。ランチは開店前から入口の名簿に記入して待つ、夜は予約を。月に7日ほど休み。',
  });
}

// ================================================================ 麺スタイル谷本家
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270106/27139854/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://tanimotoke.menstyle.jp/';
  const WD = day(['11:00', '15:00'], ['17:00', '22:00']), WE = day(['11:00', '22:00']);
  put({
    id: 'osaka_men_style_tanimotoke_honmachi', name: '麺スタイル谷本家 (Men Style Tanimoto Ke)', category: 'OMNI',
    lat: 34.68124, lng: 135.501441, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: whole-wheat noodles; soy and miso seasoning.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken and shellfish broth, chashu.',
    hours_raw: 'Mon–Fri 11:00–15:00 (L.O. 14:30) and 17:00–22:00 (L.O. 21:30); Sat–Sun 11:00–22:00 (L.O. 21:30); reservations weekdays 13:00–14:30 and 17:00–19:00, weekends 15:00–18:00 (Tabelog). Ticket machine in front; wait outside to be seated (October 2026). Cards, e-money and QR accepted (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kyutaromachi 3-5-4 — 1 min from Honmachi Stn exit 12',
    cuisine: 'Several styles under one roof · original bubble-style chicken paitan ¥1,380 with soy and a hint of shellfish · chicken-and-shellfish shio, also served chilled with grilled scallop and a red egg · clam-broth shio with yuzu · Sapporo-style miso with charbroiled pork ¥1,380, ginger and green onion · medium-thick round whole-wheat noodles · charcoal-grilled chashu · egg-yolk yukke rice set ¥490 · no table condiments · 25 seats on two floors',
    website: OWN, gmaps: gm('麺スタイル谷本家 本町'), menu_url: null,
    notes: "[Ramen · bubbly chicken paitan and shellfish shio by Honmachi] A stylish two-floor ramen shop a minute from Honmachi, open since December 2023, with several styles. The original bubble-style chicken paitan (¥1,380) is a frothy, creamy broth seasoned with soy and a hint of shellfish, lighter than it looks: delicious, but one regular preferred the chicken-and-shellfish shio, slightly sweet with a strong shellfish flavor, which is also served chilled with grilled scallop and a red egg. There's a clam shio with yuzu and a Sapporo-style miso with charbroiled pork, ginger and green onion. Noodles are medium-thick, round and whole-wheat, chewy. There are no condiments on the table. One diner found the yukke rice bowl tiny and the service formal. Buy a ticket out front and wait to be called.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 25 December 2023 (Tabelog)', background: 'Ramen shop (Tabelog, staff-maintained); official site tanimotoke.menstyle.jp.', philosophy: null, specialty: 'Bubble-style chicken paitan; chicken-and-shellfish shio.',
      anecdotes: [
        { text: '"The broth was bubbly, reminiscent of Hakata-style tonkotsu ramen, and the chicken paitan soup paired beautifully with the bubbles, making it delicious. The noodles were medium-thick… and had a delightful chewy texture." — October 2026, original bubble-style chicken paitan ¥1,380.', source: R + 'B487128689/' },
        { text: '"The soup was a chilled clear broth made from chicken and shellfish, slightly sweet and delicious, with a strong shellfish flavor." — October 2026, chilled chicken-and-shellfish shio with grilled scallop.', source: R + 'B484851148/' },
      ],
      japanese_sources_summary: '公式 tanimotoke.menstyle.jp。食べログ(店舗会員): 麺スタイル谷本家、大阪市中央区久太郎町3-5-4、本町駅12番出口から徒歩1分、月〜金11:00〜15:00(L.O.14:30)・17:00〜22:00(L.O.21:30)、土日11:00〜22:00(L.O.21:30)、予約は平日13:00〜14:30・17:00〜19:00、土日15:00〜18:00、カード・電子マネー・QR可、25席、2023年12月25日開店。口コミ(2024年7月〜2026年10月): 鶏と貝の塩、冷やしで炙り帆立と赤玉、鶏と貝の澄んだ冷たいスープ、中太麺、白ねぎ、三つ葉、メンマ、元祖泡系鶏白湯1,380円、博多豚骨のような泡、中太麺、味玉、薄切りのチャーシュー、札幌炙り焼豚味噌ラーメン(2024年1,100円、2026年1,380円)、濃厚な味噌、クリーミーな鶏白湯に貝と醤油、軽めで少し物足りない、丸い中太の全粒粉麺、ねぎと生姜、券売機で買って外で待つ、卓上調味料なし、貝だしの塩と柚子、炭火の炙りチャーシュー、2階席、卵黄ユッケご飯のセット490円、器が小さい、接客は形式的という声。',
      confidence: 'medium', sources: [TB, OWN, R + 'B487128689/', R + 'B484851148/', R + 'B509172851/', R + 'B537373370/', R + 'B537631008/', R + 'B537727336/'] },
    ramen: {
      broth_base: ['chicken', 'shellfish'], broth_texture: 'paitan', tare: ['shoyu', 'shio', 'miso'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'medium', shape: null, hydration: null, handmade: false, notes: 'Medium-thick round whole-wheat noodles, chewy (October 2026).' },
      regional_style: [], sub_genre: ['ramen', 'tori_paitan'],
      signature_bowl: 'Original bubble-style chicken paitan, ¥1,380 (October 2026).',
      chashu: 'Thin, well-seasoned chashu; charcoal-grilled chashu with the clam shio (October 2026).',
      notable_toppings: ['red egg', 'grilled scallop', 'mitsuba', 'yuzu (clam shio)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken and shellfish broth.' },
      pantheon: 'Honmachi\'s multi-style shop: frothy chicken paitan and a sweet chicken-and-shellfish shio.',
      profile: { richness: 3, oiliness: 2, clarity: 2, tare_strength: 3, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B509172851/', '"It wasn\'t too rich, offering a relatively light taste" (paitan) — mid-scale.'],
        oiliness: [R + 'B537373370/', 'Miso "not too rich at all" — placed low.'],
        clarity: [R + 'B487128689/', '"The broth was bubbly" — placed low.'],
        tare_strength: [R + 'B509172851/', 'Soy-seasoned, "relatively light" — mid-scale.'],
        noodle_firmness: [R + 'B509172851/', '"Round, medium-thick whole wheat, chewy."'],
        aroma_punch: [R + 'B484851148/', '"A strong shellfish flavor" (shio) — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B487128689/', R + 'B509172851/', R + 'B484851148/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine in front; staff call you in (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区久太郎町3-5-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区久太郎町三丁目5番4号 (go) 1m; OSM 麺スタイル谷本家 node/11475924660 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B487128689/', R + 'B537373370/', R + 'B537727336/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Original bubble-style chicken paitan', '¥1,380', 'Ramen', 'no', 'no', 'October 2026.', 'awa_paitan'),
      it('', '', 'Chicken-and-shellfish shio (hot or chilled)', '', 'Ramen', 'no', 'no', 'October 2026.', 'torikai_shio'),
      it('', '', 'Clam-broth shio with yuzu', '', 'Ramen', 'no', 'no', 'October 2026.', 'kai_shio'),
      it('', '', 'Sapporo-style miso with charbroiled pork', '¥1,380', 'Ramen', 'no', 'no', 'October 2026.', 'sapporo_miso'),
      it('', '', 'Egg-yolk yukke rice set', '¥490', 'Rice', 'no', 'no', 'October 2026.', 'yukke_don'),
    ] }, {
    cuisine: '一軒でいくつものスタイル・醤油にほんのり貝が香る元祖泡系鶏白湯1,380円・鶏と貝の塩、炙り帆立と赤玉の冷やしも・柚子の香る貝だしの塩・炙り焼豚、生姜、ねぎの札幌風味噌1,380円・丸い中太の全粒粉麺・炭火の炙りチャーシュー・卵黄ユッケご飯のセット490円・卓上調味料なし・2フロアで25席',
    neighborhood: '中央区久太郎町3-5-4。本町駅12番出口から徒歩1分',
    gf_detail: 'グルテンフリーではありません。全粒粉の麺、醤油や味噌の味付け。',
    vegan_detail: 'ヴィーガンではありません。鶏と貝のスープ、チャーシュー。',
    notes: '[ラーメン・本町の泡系鶏白湯と鶏貝塩] 本町駅から1分の2フロアのおしゃれなラーメン店で、2023年12月開店、いくつものスタイルがそろう。元祖泡系鶏白湯(1,380円)は泡立つクリーミーなスープに醤油とほんのり貝の香り、見た目より軽い。おいしいが、貝の甘みのある鶏と貝の塩のほうが好みという常連も。塩は炙り帆立と赤玉の冷やしもある。柚子の香る貝だしの塩、炙り焼豚と生姜とねぎの札幌風味噌も。麺は丸い中太の全粒粉麺でもちもち。卓上に調味料はない。ユッケご飯が小さく、接客が形式的と感じた人も。食券は店の前で買って、呼ばれるまで待つ。',
  });
}

// ================================================================ ラーメン大戦争 せんば心斎橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270106/27121923/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://ramen-daisenso.com/';
  put({
    id: 'osaka_ramen_daisenso_senba_shinsaibashi', name: 'ラーメン大戦争 せんば心斎橋店 (THE RAMEN WAR Senba Shinsaibashi)', category: 'OMNI',
    lat: 34.679141, lng: 135.501525, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; shoyu tare.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken and shellfish broth, chashu.',
    hours_raw: 'Daily 11:00–23:00 (L.O. 22:30) (Tabelog). Cash only: no cards, e-money or QR (Tabelog; September 2026).',
    hours: ALL(day(['11:00', '23:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Minamikyuhojimachi 3-3-6, Senba Shinsaibashi — 5 min from Honmachi Stn',
    cuisine: 'Light chicken-and-shellfish shoyu, scallop-forward · Pistol, the basic bowl · choose 1 to 5 slices of rare low-temperature chashu for free · free half-serving of extra noodles · large soft menma · limited bowls such as Impulse with chopped onion and garlic, and Scallop Launcher (spicy +¥10) · chashu rice bowl · 13 counter seats, 17 table seats',
    website: OWN, gmaps: gm('ラーメン大戦争 せんば心斎橋店'), menu_url: null,
    notes: "[Ramen · light scallop shoyu with free chashu by the slice in Senba] A spacious, stylish branch of THE RAMEN WAR in Senba Shinsaibashi, open since 2021 and usually busy. The basic Pistol is a light soy broth of chicken and shellfish with a pronounced scallop flavor, clinging to the noodles. The draws are the free extras: choose one to five slices of tender rare chashu (on one visit everyone took five), and a half-serving of extra noodles is free; order it early, as it takes time to cook. Limited bowls rotate, such as the Impulse with chopped onion and plenty of garlic, or the Scallop Launcher, spicy for ¥10 more. Add a chashu rice bowl. About half the customers were from overseas on one visit. Cash only; open until 23:00.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 5 March 2021 (Tabelog)', background: 'Branch of THE RAMEN WAR; official site ramen-daisenso.com (Tabelog, staff-maintained).', philosophy: null, specialty: 'Pistol shoyu ramen.',
      anecdotes: [
        { text: '"I couldn\'t tell if it was niboshi (dried sardines) or scallops, but the seafood flavor was concentrated in the light soy sauce… I loved that I could choose the number of chashu slices and even add a half serving of noodles." — September 2026, Pistol.', source: R + 'B463752701/' },
        { text: '"The chashu is tender and cooked rare with low-temperature preparation… The broth has a flavor reminiscent of scallops, which is quite pronounced and clings well to the medium-thick noodles." — October 2026.', source: R + 'B537700096/' },
      ],
      japanese_sources_summary: '公式 ramen-daisenso.com。食べログ(店舗会員): ラーメン大戦争 せんば心斎橋店、大阪市中央区南久宝寺町3-3-6、本町駅から徒歩5分、毎日11:00〜23:00(L.O.22:30)、カード・電子マネー・QR不可、30席(カウンター13、テーブル17)、禁煙、車椅子可、2021年3月5日開店。口コミ(2023年4月〜2026年10月): 日曜昼前はほぼ満席、定番のピストル、限定のインパルス(刻み玉ねぎとにんにく)、チャーシューは1〜5枚を選べる(薄いレアチャーシュー)、半玉の替え玉無料、客の半分ほどが海外の人、あっさり醤油と太麺、煮干しか帆立の魚介、あっさり系、替え玉は早めに、スカラップランチャー、辛口は+10円、チャーシュー5枚、日曜13時過ぎは待ちなし、チャーシュー丼、現金のみ、鶏だしと貝だしの醤油ラーメン、中細麺、電動ペッパーミル、低温調理のレアチャーシュー、大きく柔らかいメンマ、帆立の風味、中太麺。',
      confidence: 'medium', sources: [TB, OWN, R + 'B463752701/', R + 'B537700096/', R + 'B444939125/', R + 'B510965980/', R + 'B536368636/', R + 'B537242503/'] },
    ramen: {
      broth_base: ['chicken', 'shellfish'], broth_texture: 'chintan', tare: ['shoyu'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'medium', shape: null, hydration: null, handmade: false, notes: 'Medium-thick noodles (October 2026); "thick" and "medium-thin" to other diners; free half extra noodles.' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Pistol, with 1–5 free chashu slices (September–October 2026).',
      chashu: 'Thin, rare, low-temperature chashu, 1 to 5 slices free (October 2026).',
      notable_toppings: ['rare chashu (1–5 slices)', 'large menma'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken and shellfish broth.' },
      pantheon: 'Senba\'s RAMEN WAR: a light scallop shoyu with up to five free slices of rare chashu.',
      profile: { richness: 2, oiliness: 2, clarity: 4, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B463752701/', '"A lighter-style ramen" — placed low.'],
        oiliness: [R + 'B444939125/', '"Thanks to the light soy sauce, it\'s just right" — placed low.'],
        clarity: [R + 'B463752701/', '"The light soy sauce broth" — placed high.'],
        tare_strength: [R + 'B463752701/', '"The seafood flavor was concentrated in the light soy sauce" — mid-scale.'],
        noodle_firmness: [R + 'B463752701/', '"The thick noodles provide a satisfying bite" — mid-scale.'],
        aroma_punch: [R + 'B537700096/', '"A flavor reminiscent of scallops, which is quite pronounced" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B463752701/', R + 'B537700096/', R + 'B537242503/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Many overseas customers (October 2026); no English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南久宝寺町3-3-6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南久宝寺町三丁目3番6号 (go) 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B463752701/', R + 'B510965980/'],
    price_note: 'One price from a September 2026 review; reviewers spent under ¥2,000.', last_checked: TODAY, items: [
      it('', '', 'Pistol (shoyu ramen)', '', 'Ramen', 'no', 'no', '1–5 chashu slices free; October 2026.', 'pistol'),
      it('', '', 'Scallop Launcher', '', 'Limited', 'no', 'no', 'Spicy +¥10; September–October 2026.', 'scallop_launcher'),
      it('', '', 'Impulse', '', 'Limited', 'no', 'no', 'Onion and garlic; October 2026.', 'impulse'),
      it('', '', 'Chashu rice bowl', '', 'Rice', 'no', 'no', 'September 2026.', 'chashu_don'),
    ] }, {
    cuisine: '帆立の効いたあっさり鶏と貝の醤油・基本の一杯ピストル・低温調理のレアチャーシューは1〜5枚を無料で選べる・半玉の替え玉無料・大きく柔らかいメンマ・刻み玉ねぎとにんにくのインパルス、辛口は+10円のスカラップランチャーなどの限定・チャーシュー丼・カウンター13席、テーブル17席',
    neighborhood: '中央区南久宝寺町3-3-6、せんば心斎橋。本町駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油のたれ。',
    vegan_detail: 'ヴィーガンではありません。鶏と貝のスープ、チャーシュー。',
    notes: '[ラーメン・せんばの帆立醤油、チャーシューは枚数を選べて無料] せんば心斎橋にあるラーメン大戦争の広くおしゃれな店で、2021年開店、いつも混んでいる。基本のピストルは鶏と貝のあっさり醤油で、帆立の風味がはっきりして麺によく絡む。魅力は無料のサービスで、柔らかいレアチャーシューは1〜5枚から選べ(ある日は皆が5枚)、半玉の替え玉も無料、ゆでるのに時間がかかるので早めに頼んで。刻み玉ねぎとにんにくたっぷりのインパルス、辛口は10円増しのスカラップランチャーなど限定も。チャーシュー丼も。ある日は客の半分ほどが海外の人。現金のみ、23時まで。',
  });
}

save();
