// Kyoto priority (kyoto-missed), worker osw13, batch 116 — lane: Tabelog id mod 6 = 0; rest tier, nearest-first.
// Drafts: 和楽味いしまる, 和食堂 SUGIZEN, ミニ・ネパール, AIC秋津洲京都 清水別邸. Brands checked against queue-status, data/kyoto.json, than.co.jp/brands and 株式会社WILL (none match).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-116');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };
const rv = (R, ids) => ids.map(b => R + b + '/');

skip('26010114', 'too thin: ＤＡＩＪＯ (one-chef Japanese-French counter, 9 seats) — newest review February 2024, none from 2025–26');
skip('26046000', 'too thin: kiito. (bistro opened 19 October 2026 on Niomon-dori) — a single review; Tabelog lists no hours, seats or prices yet; re-check later');
skip('26043096', 'brand in data, same concept: 鶏焼肉はやし おいちょ is a grill-your-own chicken-yakiniku collaboration of Yakiniku Hayashi and Oicho (2025–2026 reviews); kyoto_oicho (OICHO, same Kyotanba-chicken shichirin format) is already in data and names this sister shop');
skip('26035266', 'chain: タージマハルエベレスト 烏丸御池店 — 5+ same-name タージマハルエベレスト shops in Kyoto prefecture (Kyoto/Kamikatsura, Kitayama, Omiya, Chiyokawa, Karasuma Oike; gurunavi, hitosara, epark listings), plus ナマステ タージマハル sister shops');

// ================================================================ 和楽味いしまる
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26024682/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_warakumi_ishimaru', name: '和楽味いしまる (Warakumi Ishimaru)', category: 'OMNI',
    lat: 34.99517, lng: 135.761706, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: Japanese set meals with miso soup, fried fish, kara-age, oyster tempura and dashimaki, plus saba sushi (2020–2026 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish-centred set meals and izakaya dishes — sashimi, grilled fish, eel, mackerel sushi, chicken kara-age (2020–2026 reviews).',
    hours_raw: 'Tabelog: Mon–Sat 11:30–14:00 and 17:00–22:00; closed Sunday and public holidays; hours may change. Lunch is one omakase set only, served within minutes (¥980 in 2020–21, ¥1,200 tax incl. in 2025–26); popular with local office workers and often full; sashimi can sell out late in lunch (August 2024). Reservations taken. 20 seats (about 6 at the counter). Smoking allowed — ashtrays on the tables (2024–2025 reviews). Cards: JCB, AMEX, Diners only (Tabelog); a June 2025 diner found cards not accepted that day — bring cash. Down a small alley 180 m from Gojo Station.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'An alley off Gojo-Karasuma — 180 m from Gojo',
    cuisine: 'A small alley restaurant run by a couple: a fast, one-choice omakase lunch of fish and small dishes, and an izakaya at night known for its saba sushi (Tabelog; 2020–2026 reviews) · omakase lunch ¥1,200: sashimi, grilled fish (salmon, hokke), dashimaki, chilled or agedashi tofu, small sides such as hijiki, rice with chirimen-sansho, miso soup, pickles (2025–2026) · evening Japanese set: sashimi, grilled eel, dashimaki, oyster tempura, red miso soup and rice (February 2022) · saba sushi, the house speciality, also to take away (June and October 2025) · conger eel with plum paste in season; grilled water eggplant; mentaiko omelette (June 2025) · crab with vinegar; sashimi platter; chicken kara-age; ochazuke (October 2025) · Kyoto sake "Jurakudai" (June 2025)',
    website: null, gmaps: gm('和楽味いしまる 五条'), menu_url: null,
    notes: '[Japanese izakaya · Gojo-Karasuma, a couple\'s alley kitchen] A tidy little alley spot near Gojo Station run by a husband and wife for 20+ years. Lunch is one ¥1,200 omakase tray of fish and small dishes, out in a minute; at night, sashimi, grilled fish and the much-praised saba sushi with sake. Smoking allowed. Closed Sun and holidays.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)', 'Co-owner (unnamed; the chef\'s partner)'], origin: null,
      background: 'Reviewers describe a small restaurant run by a couple (February 2022; June and October 2025). A February 2025 diner returning after 20 years found "both the chef and the owner still looking the same"; a 2022 reviewer felt the cooking showed thorough training in Japanese cuisine. The couple can seem a little stern at first but are friendly once you talk (June 2025).',
      philosophy: null,
      specialty: 'Omakase fish lunch; saba sushi.',
      anecdotes: [
        { text: 'February 2025: "It had been 20 years since my last visit, and it was so nostalgic to see both the chef and the owner still looking the same."', source: R + 'B502155943/' },
        { text: 'October 2025: "This saba sushi was absolutely exquisite! The richness of the fish, the curing process, and the balance with the vinegared rice were all perfect."', source: R + 'B516330993/' },
        { text: 'August 2025: "I had the Omakase Set Meal for JPY 1200, and while I had high expectations, it turned out to be just average."', source: R + 'B512199967/' },
      ],
      japanese_sources_summary: '食べログ: 和楽味いしまる、日本料理、下京区塗師屋町127-1、五条から180m、月〜土11:30〜14:00・17:00〜22:00、日曜・祝日休み、予約可、20席、喫煙可、カード (JCB・AMEX・Diners) 可、電子マネー・QR不可。口コミ (2020年3月〜2026年10月、英語): 夫婦で営む路地の店、昼はおまかせ定食のみ (2020〜21年980円、2025〜26年1,200円) ですぐ出てくる、刺身・焼き魚・だし巻き・豆腐、夜の和定食に鰻と牡蠣の天ぷら (2022年2月)、名物の鯖寿司 (持ち帰り可)、明太子の卵焼き、かに酢、唐揚げ、お茶漬け、地酒「Jurakudai」、灰皿があり喫煙可、20年ぶりの客が変わらぬ夫婦に再会 (2025年2月)、2025年8月には普通との声。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B426189581', 'B446299702', 'B489981088', 'B498764767', 'B502155943', 'B508221513', 'B510002867', 'B512199967', 'B516330993', 'B538243829'])) },
    cultural_comfort: { level: 'japanese', note: 'One fixed lunch set, no ordering needed; smoking allowed.' },
    safety: { ...SAFETY0 },
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市下京区塗師屋町127-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated 2025 to October 2026.' },
    pin_source: `Tabelog ${TB} (34.99517, 135.761706); GSI lot 京都府京都市下京区塗師屋町127番地 about 58m away; nearest pin kyoto_bar_agiyao_gojo 165.5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B508221513/', R + 'B510002867/', R + 'B516330993/'],
    price_note: 'Lunch price from 2025–2026 reviews (tax incl.); dinner prices not given.', last_checked: TODAY, items: [
      it('', '', 'Omakase lunch set', '¥1,200', 'Set meal', 'no', 'no', '2025–2026; ¥980 in 2020–21.', 'omakase_lunch'),
      it('', '', 'Saba sushi (mackerel sushi)', '', 'Sushi', 'ask', 'no', 'June and October 2025; also to take away.', 'saba_sushi'),
      it('', '', 'Mentaiko omelette', '', 'Egg', 'ask', 'no', 'June and October 2025.', 'mentai_tamago'),
      it('', '', 'Sashimi platter', '', 'Sashimi', 'ask', 'no', 'October 2025.', 'sashimi_moriawase'),
    ] }, {
    cuisine: '夫婦で営む路地の小さな店。昼は魚と小鉢のおまかせ定食のみですぐに出てきて、夜は鯖寿司で知られる居酒屋 (食べログ、2020〜2026年の口コミ)・おまかせ昼定食1,200円: 刺身、焼き魚 (鮭、ほっけ)、だし巻き、冷ややっこや揚げだし豆腐、ひじきなどの小鉢、ちりめん山椒のご飯、みそ汁、漬物 (2025〜2026年)・夜の和定食: 刺身、鰻の焼き物、だし巻き、牡蠣の天ぷら、赤だし、ご飯 (2022年2月)・名物の鯖寿司、持ち帰りも (2025年6月・10月)・旬のconger eelの梅肉添え、水なすの焼き物、明太子の卵焼き (2025年6月)・かに酢、刺身の盛り合わせ、鶏の唐揚げ、お茶漬け (2025年10月)・京都の地酒「Jurakudai」(2025年6月)',
    neighborhood: '五条烏丸近くの路地。五条から180m',
    gf_detail: 'グルテンフリーではない: みそ汁、魚のフライ、唐揚げ、牡蠣の天ぷら、だし巻きの定食と鯖寿司 (2020〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可: 魚中心の定食と居酒屋料理。刺身、焼き魚、鰻、鯖寿司、鶏の唐揚げ (2020〜2026年の口コミ)。',
    notes: '[和食の居酒屋・五条烏丸、夫婦の路地の店] 五条駅近くの路地にある、夫婦が20年以上営むこぎれいな小さな店。昼は1,200円のおまかせ定食ひとつで、魚と小鉢がすぐに出る。夜は刺身や焼き魚、評判の鯖寿司と日本酒。喫煙可。日曜・祝日休み。',
  });
}

// ================================================================ 和食堂 SUGIZEN
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26013186/'; const R = TB + 'dtlrvwlst/';
  const L = ['11:30', '14:00'], D = ['17:30', '23:30'];
  put({
    id: 'kyoto_washokudo_sugizen', name: '和食堂 SUGIZEN (Washokudo Sugizen)', category: 'OMNI',
    lat: 35.013577, lng: 135.766833, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: Japanese dishes seasoned with soy sauce and miso, green-tea soba, curry udon, fried ginkgo and a soy-milk pudding with kinako (2018–2025 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish-focused Japanese kitchen — sashimi, conger eel, crab, buri daikon, duck, shirasu (2018–2026 reviews).',
    hours_raw: 'Tabelog: Mon–Fri 11:30–14:00 and 17:30–23:30; Sat 17:30–23:30; closed Sunday (open Sunday when Monday is a holiday, then closed that Monday); last orders food 22:00, drinks 22:30. Reservations taken; private hire for up to 20. 34 seats: 20 at tables, a 6-seat terrace box, 8 at the counter; semi-private seating. Non-smoking. Cards; no e-money. Lunch is a daily set shown at the door (¥900, December 2023); dinner à la carte or chef\'s courses. Stroller-friendly (April 2024). On Nijo-dori west of Teramachi, 5 min from Kyoto Shiyakusho-mae.',
    hours: { 0: [L, D], 1: [L, D], 2: [L, D], 3: [L, D], 4: [L, D], 5: [D] }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nijo-dori west of Teramachi — 5 min from Kyoto Shiyakusho-mae',
    cuisine: 'A roomy, relaxed Japanese dining room near Teramachi-Nijo: a cheap daily lunch set and, at night, fish-led izakaya dishes or chef\'s courses (Tabelog; 2018–2026 reviews) · daily lunch set ¥900, e.g. mapo tofu and miso-simmered mackerel (December 2022–2023); 5–6 small seasonal dishes · ¥1,800 gozen with bara-zushi, green-tea soba and a soy-milk pudding with kinako and kuromitsu (May 2018) · thick-cut sashimi; pike-conger and eel rolls (August 2022) · chef\'s course: fried ginkgo nuts, shrimp nigiri with karasumi mochi, conger eel, Koppe crab, buri daikon (November 2022) · saikyo-miso Spanish mackerel, potato salad, dashimaki, curry udon to finish (January 2025) · duck breast (March 2024) · rare tuna; a fresh shirasu rice bowl to finish (June 2026) · simmered sea bream and eel sushi to take away (April 2020)',
    website: null, gmaps: gm('和食堂 SUGIZEN'), menu_url: TB + 'dtlmenu/',
    notes: '[Japanese dining · Teramachi-Nijo, fish and sake without the formality] A spacious, easygoing Japanese restaurant: a ¥900-ish daily lunch set for city-hall workers, and at night thick sashimi, seasonal fish and well-priced chef\'s courses at counter or tables. About ¥5,000–8,000 at dinner. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'Reviewers describe a friendly, approachable owner (February 2024), staff who explain each dish (June 2026) and a lunch crowd of city-hall workers (December 2022). Regulars use it for family celebrations (June 2018).',
      philosophy: null,
      specialty: 'Fish-led Japanese dishes and chef\'s courses; daily lunch set.',
      anecdotes: [
        { text: 'November 2022: "Starting with \'Fried Ginkgo Nuts,\' the second dish was a surprise with \'Shrimp Nigiri and Karasumi Mochi.\' Then we had \'Conger Eel,\' followed by \'Crab,\' delicious \'Sashimi,\' and even \'Buri Daikon\'."', source: R + 'B457088944/' },
        { text: 'June 2026: "From the very first dish, I was impressed by the intricate preparations… The rare tuna and the final dish of fresh shirasu rice bowl left me completely satisfied."', source: R + 'B480917739/' },
        { text: 'December 2023: "All of this for just JPY 900! The portion was a bit on the smaller side, but it\'s quite affordable for this area."', source: R + 'B476238190/' },
      ],
      japanese_sources_summary: '食べログ: 和食堂 SUGIZEN、日本料理・居酒屋、中京区二条通り寺町西入山本町443 山川ビル1F、京都市役所前から徒歩5分、月〜金11:30〜14:00・17:30〜23:30、土17:30〜23:30 (L.O.料理22:00・飲み物22:30)、日曜休み (月曜祝日なら日曜営業・月曜休み)、予約可、34席 (テーブル20・テラスのボックス6・カウンター8)、半個室、禁煙、カード可。口コミ (2018年5月〜2026年6月、英語): 日替わり定食900円 (2023年12月)、1,800円の御膳にばら寿司・茶そば・豆乳プリン (2018年5月)、厚切りの刺身、pike congerと鰻の巻物 (2022年8月)、銀杏の素揚げ・海老の握りとからすみ餅・conger eel・Koppeのかに・ぶり大根のおまかせ (2022年11月)、西京焼き・ポテトサラダ・だし巻き・締めのカレーうどん (2025年1月)、鴨の胸肉 (2024年3月)、まぐろと生しらす丼 (2026年6月)、気さくな店主。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B238853510', 'B433212572', 'B453524761', 'B457088944', 'B457996346', 'B476238190', 'B480501841', 'B480917739', 'B487664817', 'B499069472'])) },
    cultural_comfort: { level: 'friendly', note: 'Spacious seating; stroller-friendly; courses or à la carte.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区二条通り寺町西入山本町443 山川ビル1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated January 2025 to September 2026.' },
    pin_source: `Tabelog ${TB} (35.013577, 135.766833); GSI lot 京都府京都市中京区山本町443番地 about 77m away; nearest pin kyoto_nijo_aritsune 20.0m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B238853510/', R + 'B476238190/', R + 'B499069472/'],
    price_note: 'Lunch prices from 2018 and 2023 reviews; dinner prices not given.', last_checked: TODAY, items: [
      it('', '', 'Daily lunch set', '¥900', 'Set meal', 'no', 'no', 'December 2023.', 'higawari_teishoku'),
      it('', '', 'Sashimi platter', '', 'Sashimi', 'ask', 'no', '2022–2024 reviews.', 'sashimi'),
      it('', '', 'Saikyo-miso grilled Spanish mackerel', '', 'Grilled', 'ask', 'no', 'January 2025.', 'sawara_saikyo'),
      it('', '', 'Curry udon', '', 'Noodles', 'no', 'no', 'January 2025.', 'curry_udon'),
    ] }, {
    cuisine: '寺町二条近くのゆったりした和食の店。昼は手頃な日替わり定食、夜は魚中心の居酒屋料理かおまかせのコース (食べログ、2018〜2026年の口コミ)・日替わり定食900円、麻婆豆腐と鯖のみそ煮など (2022年12月〜2023年)、旬の小鉢5〜6品・1,800円の御膳にばら寿司、茶そば、きなこと黒蜜の豆乳プリン (2018年5月)・厚切りの刺身、pike congerと鰻の巻物 (2022年8月)・おまかせ: 銀杏の素揚げ、海老の握りとからすみ餅、conger eel、Koppeのかに、ぶり大根 (2022年11月)・鰆の西京焼き、ポテトサラダ、だし巻き、締めのカレーうどん (2025年1月)・鴨の胸肉 (2024年3月)・まぐろ、締めの生しらす丼 (2026年6月)・持ち帰りの鯛の煮付けと鰻の寿司 (2020年4月)',
    neighborhood: '二条通、寺町の西。京都市役所前から徒歩5分',
    gf_detail: 'グルテンフリーではない: しょうゆやみその和食、茶そば、カレーうどん、銀杏の素揚げ、きなこの豆乳プリン (2018〜2025年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可: 魚中心の和食。刺身、conger eel、かに、ぶり大根、鴨、しらす (2018〜2026年の口コミ)。',
    notes: '[和食・寺町二条、気取らずに魚と日本酒] 広くて気取らない和食の店。昼は市役所の人たちが通う900円ほどの日替わり定食、夜はカウンターやテーブルで厚切りの刺身、旬の魚、手頃なおまかせのコース。夜は5,000〜8,000円ほど。日曜休み。',
  });
}

// ================================================================ ミニ・ネパール
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26038320/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '15:00'], ['17:00', '23:00']);
  put({
    id: 'kyoto_mini_nepal_higashiyama', name: 'ミニ・ネパール Dining&Bar (Mini Nepal Dining & Bar)', category: 'OMNI',
    lat: 35.009799, lng: 135.778714, cuisine_type: 'curry',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The dal bhat sets are rice, lentil soup, curries, sides and achar (2025–2026 reviews), but there is no gluten information; naan (including honey-cheese naan) and momo are wheat. Ask about thickeners and shared fryers.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Dal bhat comes in a vegetable version (November 2025), but hot ghee is poured over the rice and dal at the table, and sides include yogurt raita; ask for it without ghee or yogurt.',
    hours_raw: 'Tabelog: daily 11:00–15:00 and 17:00–23:00; hours may change. Lunch served on holidays too (February 2025). Reservations taken; full by 1 pm at a busy weekend lunch (July 2025). No credit cards; e-money and QR codes. Also on Uber delivery (February 2025). Staff are mostly from overseas, and the manager speaks fluent Japanese (December 2025). In the Lamer Sanjo building, 70 m from Higashiyama Station.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashiyama-Sanjo — 70 m from Higashiyama Station',
    cuisine: 'A small Nepalese restaurant by Higashiyama Station, best known for its dal bhat sets finished with hot ghee at the table (Tabelog; 2025–2026 reviews) · dal bhat set — vegetable, chicken or mutton — with lentil soup, curry, potato-and-chickpea stir-fry, raita, achar and basmati rice, drink included: ¥1,400 (chicken, July 2026), ¥1,500–1,550 (mutton, 2025–2026) · Kaja set: puffed rice with soybeans, chicken achar and pickles (May 2025) · steamed and fried momo (February 2026) · curries with naan; honey-cheese naan; mango and strawberry lassi',
    website: null, gmaps: gm('ミニ・ネパール 東山'), menu_url: null,
    notes: '[Nepalese · Higashiyama-Sanjo, dal bhat with sizzling ghee] A cozy Nepali spot steps from Higashiyama Station: hearty dal bhat sets (vegetable, chicken or mutton) with hot ghee poured on at the table, plus momo, Kaja sets and naan curries. About ¥1,500 with a lassi. Cards not accepted (e-money and QR codes are). Service can be slow when busy.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Reviewers (2025–2026) describe a hidden spot near an intersection on the way to the Kyocera Museum, an exotic interior and a mostly overseas staff with one fluent Japanese speaker. Criticisms: an order mix-up (February 2025), a wait of almost an hour (April 2026) and uneven attention between tables (December 2025).',
      philosophy: null,
      specialty: 'Dal bhat sets; Kaja set; momo.',
      anecdotes: [
        { text: 'July 2025: "After the meal was served, a small frying pan filled with bubbling ghee arrived, which was poured over the rice and lentil curry."', source: R + 'B510271583/' },
        { text: 'May 2025: "Instead of steamed rice, it came with puffed rice and beans… The dish included a generous portion of chicken achar, along with onion and cucumber achar."', source: R + 'B508374964/' },
        { text: 'April 2026: "The only downside was that it took almost an hour for the food to be served... Maybe it was just bad timing?"', source: R + 'B525452492/' },
      ],
      japanese_sources_summary: '食べログ: ミニ・ネパール Dining&Bar、ネパール料理、東山区分木町57 ラメール三条1F、東山から70m、毎日11:00〜15:00・17:00〜23:00、予約可、カード不可、電子マネー・QR可。口コミ (2025年2月〜2026年10月、英語): ダルバートのセット (野菜・チキン・マトン、ドリンク付き1,400〜1,550円)、仕上げに熱いギーをかける、カジャのセット (2025年5月)、蒸し・揚げモモ、ナンとカレー、はちみつチーズナン、マンゴーラッシー、Uberの配達もある、スタッフは主に外国人で日本語の上手な人がいる、注文の間違い (2025年2月)、提供まで1時間近く (2026年4月)。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B501798565', 'B502161067', 'B508374964', 'B510271583', 'B517598644', 'B519876803', 'B520882483', 'B523475877', 'B525452492', 'B531723447', 'B537144531'])) },
    cultural_comfort: { level: 'friendly', note: 'Overseas staff, one fluent in Japanese; no credit cards.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区分木町57 ラメール三条1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated 2025 to October 2026.' },
    pin_source: `Tabelog ${TB} (35.009799, 135.778714); GSI lot 京都府京都市東山区分木町57番地 about 17m away; nearest pins kyoto_yashima_udon_higashiyama and kyoto_yamanashi_seian 14.9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B517598644/', R + 'B531723447/', R + 'B537144531/'],
    price_note: 'Prices from 2025–2026 reviews (drink included).', last_checked: TODAY, items: [
      it('', '', 'Dal bhat set (chicken)', '¥1,400', 'Set meal', 'ask', 'no', 'July 2026; with mango lassi.', 'dal_bhat_chicken'),
      it('', '', 'Dal bhat set (mutton)', '¥1,500–1,550', 'Set meal', 'ask', 'no', '2025–2026; drink included.', 'dal_bhat_mutton'),
      it('', '', 'Dal bhat set (vegetable)', '', 'Set meal', 'ask', 'ask', 'November 2025; ghee poured on at the table.', 'dal_bhat_veg'),
      it('', '', 'Kaja set', '', 'Set meal', 'ask', 'no', 'May 2025.', 'kaja_set'),
      it('', '', 'Momo (steamed or fried)', '', 'Dumplings', 'no', 'no', 'February 2026.', 'momo'),
    ] }, {
    cuisine: '東山駅近くの小さなネパール料理店。仕上げに熱いギーをかけるダルバートのセットで知られる (食べログ、2025〜2026年の口コミ)・ダルバートのセット (野菜・チキン・マトン): 豆のスープ、カレー、じゃがいもとひよこ豆の炒め物、ライタ、アチャール、バスマティライス、ドリンク付き。チキン1,400円 (2026年7月)、マトン1,500〜1,550円 (2025〜2026年)・カジャのセット: パフ状の米、大豆、チキンのアチャール、漬物 (2025年5月)・蒸しモモと揚げモモ (2026年2月)・カレーとナン、はちみつチーズナン、マンゴーといちごのラッシー',
    neighborhood: '東山三条。東山駅から70m',
    gf_detail: '要確認: ダルバートはご飯、豆のスープ、カレー、副菜、アチャール (2025〜2026年の口コミ) だが、グルテンの情報はない。ナン (はちみつチーズナンも) とモモは小麦。とろみ付けや揚げ油の共用は確認を。',
    vegan_detail: '要確認: 野菜のダルバートがある (2025年11月) が、ご飯と豆のスープに席で熱いギーをかけ、副菜にヨーグルトのライタがつく。ギーとヨーグルト抜きを頼んで。',
    notes: '[ネパール料理・東山三条、ジュッとギーをかけるダルバート] 東山駅すぐの居心地のよいネパール料理店。席で熱いギーをかける具だくさんのダルバート (野菜・チキン・マトン)、モモ、カジャのセット、ナンとカレー。ラッシー付きで1,500円ほど。クレジットカード不可 (電子マネー・QRは可)。混むと提供が遅いことも。',
  });
}

// ================================================================ AIC秋津洲京都 清水別邸
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26044044/'; const R = TB + 'dtlrvwlst/';
  const A = ['10:00', '19:00'], B = ['10:00', '22:00'];
  put({
    id: 'kyoto_aic_akitsushima_kiyomizu', name: 'AIC秋津洲京都 清水別邸 (AIC Akitsushima Kyoto Kiyomizu Bettei)', category: 'OMNI',
    lat: 34.99692, lng: 135.778698, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The lunch course includes brioche and soup, and afternoon tea has cakes and sweets (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options and says the kitchen is particular about vegetables; courses include mozzarella, citrus butter, beef or scallops and a white-chocolate mousse (November 2025).',
    hours_raw: 'Tabelog: Mon, Tue, Sun 10:00–19:00 (L.O. 18:00); Wed–Sat 10:00–22:00 (L.O. 21:00); irregular closing days posted on Instagram. Reservations taken but not required unless full; solo diners welcome. Service charge 「サービス料10％」 (10%, Tabelog Japanese original). 42 seats; a private room for 8 (¥10,000 room fee); terrace. Non-smoking. Cards; PayPay, d Barai, Rakuten Pay, au PAY, Alipay, WeChat Pay; no e-money. 7–8 min walk from Kiyomizu-dera\'s Niomon gate.',
    hours: { 0: [A], 1: [A], 2: [B], 3: [B], 4: [B], 5: [B], 6: [A] }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Below Kiyomizu-dera — 7–8 min walk from the Niomon gate',
    cuisine: 'A café-restaurant in a Japanese house below Kiyomizu-dera with a dry-landscape garden and a tea counter, serving set lunches, afternoon tea and teas (Tabelog; 2025–2026 reviews) · lunch courses ¥3,500 / ¥4,200 / ¥5,000 by number of dishes: potato soup; fruit salad with mozzarella and wasabi greens; salmon salad; grilled vegetables; brioche with citrus butter; beef or scallops; dessert of the day such as white-chocolate mousse with berries and olive-oil sauce; pots of tea such as Uva or a spiced tea (November 2025) · afternoon tea course with savouries and sweets (September 2026) · tea and cake (August 2026)',
    website: null, gmaps: gm('AIC秋津洲京都 清水別邸'), menu_url: null,
    notes: '[Café and tea · Kiyomizu, a garden house below the temple] A calm, beautifully fitted house a few minutes below Kiyomizu-dera, with a garden by a Kyoto gardener, a wall of tea canisters, Japanese rooms downstairs and Western rooms upstairs. Lunch courses from ¥3,500, afternoon tea, or just tea and cake. 10% service charge. Vegetarian options listed.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'A November 2025 reviewer describes it as a new sister of the clubhouse AIC Akitsushima in Kamigamo, with autumn colours in a garden by a renowned Kyoto gardener, a dry-landscape garden at the back, a tea-sales counter by the entrance, Japanese-style rooms on the 1st floor and Western-style rooms on the 2nd. The Kamigamo clubhouse is a members\' club whose restaurant is open to the public (rurubu). That reviewer found the newly opened service a bit awkward but earnest.',
      philosophy: null,
      specialty: 'Set lunches; afternoon tea; pot tea.',
      anecdotes: [
        { text: 'November 2025: "Once you pass through the noren (fabric curtain), the entrance leading to the restaurant feels like stepping into another world. The stunning autumn leaves are a feast for the eyes, crafted by a renowned Kyoto gardener."', source: R + 'B517792099/' },
        { text: 'November 2025: "It was tender and cooked well, but I noticed a slight meat odor. Perhaps I should have chosen the scallops instead."', source: R + 'B517792099/' },
        { text: 'August 2026: "Both the tea and cake were delicious. I would have appreciated having something like a napkin, though."', source: R + 'B533242105/' },
      ],
      japanese_sources_summary: '食べログ: AIC秋津洲京都 清水別邸、カフェ・創作料理、東山区清水4-157-1、清水寺のNiomonから徒歩7〜8分、月・火・日10:00〜19:00 (L.O.18:00)、水〜土10:00〜22:00 (L.O.21:00)、不定休 (Instagram)、予約可 (満席時以外は不要)、一人客歓迎、サービス料10％、42席、8名の個室 (室料10,000円)、テラス、禁煙、カード・QR可、野菜にこだわる、ベジタリアンメニューあり。口コミ (2025年11月〜2026年9月、英語): KamigamoのクラブハウスAIC秋津洲の新しい別邸、京都の庭師の庭と枯山水、入口に茶葉の販売、1階は和、2階は洋、昼のコース3,500円・4,200円・5,000円、アフタヌーンティー、紅茶はポットで。るるぶ: KamigamoのAIC秋津洲京都は会員制のクラブハウスで、レストランは一般も利用できる。',
      confidence: 'low', sources: [TB, 'https://rurubu.jp/andmore/article/24255'].concat(rv(R, ['B517792099', 'B533242105', 'B535883934'])) },
    cultural_comfort: { level: 'friendly', note: 'Solo diners welcome; reservations only needed when busy; 10% service charge.' },
    safety: { ...SAFETY0, positives: ['Tabelog lists vegetarian options.'] },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区清水4-157-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated November 2025 to September 2026.' },
    pin_source: `Tabelog ${TB} (34.99692, 135.778698); GSI lot 京都府京都市東山区清水四丁目157番地 about 39m away; nearest pin kyoto_kyo_yuba_mitakyu_kiyomizu 70.8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B517792099/', R + 'B535883934/'],
    price_note: 'Lunch course prices from a November 2025 review; 10% service charge.', last_checked: TODAY, items: [
      it('', '', 'Lunch course', '¥3,500 / ¥4,200 / ¥5,000', 'Course', 'ask', 'ask', 'November 2025; price by number of dishes.', 'lunch_course'),
      it('', '', 'Afternoon tea course', '', 'Course', 'ask', 'ask', 'November 2025 and September 2026.', 'afternoon_tea'),
    ] }, {
    cuisine: '清水寺の下の、枯山水の庭と茶葉の売り場がある日本家屋のカフェレストラン。昼のコース、アフタヌーンティー、紅茶 (食べログ、2025〜2026年の口コミ)・昼のコース3,500円・4,200円・5,000円 (品数で変わる): じゃがいものスープ、モッツァレラとわさび菜のフルーツサラダ、サーモンのサラダ、焼き野菜、柑橘バターのブリオッシュ、牛肉か帆立、ベリーとオリーブオイルのソースのホワイトチョコのムースなど日替わりのデザート、ウバやスパイスティーをポットで (2025年11月)・セイボリーとスイーツのアフタヌーンティー (2026年9月)・紅茶とケーキ (2026年8月)',
    neighborhood: '清水寺の下。清水寺のNiomonから徒歩7〜8分',
    gf_detail: '要確認: グルテンの情報はない。昼のコースにブリオッシュとスープ、アフタヌーンティーにケーキやスイーツ (2025〜2026年の口コミ)。',
    vegan_detail: '要確認: 食べログにベジタリアンメニューありとあり、野菜にこだわる。コースにはモッツァレラ、柑橘バター、牛肉か帆立、ホワイトチョコのムース (2025年11月)。',
    notes: '[カフェと紅茶・清水、寺の下の庭のある家] 清水寺から少し下った、京都の庭師の庭と茶缶の並ぶ棚がある落ち着いた家。1階は和室、2階は洋室。昼のコースは3,500円から、アフタヌーンティー、紅茶とケーキだけでも。サービス料10％。ベジタリアンメニューあり。',
  });
}

save();
