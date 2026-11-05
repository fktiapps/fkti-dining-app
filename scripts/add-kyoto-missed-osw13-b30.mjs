// Kyoto "what did we miss" pass (kyoto-missed) — lane osw13 (Tabelog id mod 6 = 0), batch 30.
// Kyoto priority (Greg, 2026-11-05): 2 shops from `next core`, 2 from `next notable`, lane only.
//   core:    + しゅん逢 紗々木 Shun Ai Sasaki (Teramachi-Bukkoji Kyoto courses with beef; private tatami rooms)
//            - 祇園らーめん 京都本店 26038758 skipped (existence unverifiable; see skip reason)
//            + 先斗町 たばこや Pontocho Tabakoya (obanzai izakaya on Pontocho; ¥500 charge)
//   notable: + 亀廣永 Kame Hironaga (wagashi shop of the amber "shitatari"; Wagashi WEST 100 2023, 2026)
//            + 竹ざき Takezaki (one-cook 7-seat kappo counter; Sunday breakfast; Tabelog Award Bronze 2017–2020)
//   None is in data/kyoto.json: grep by name (紗々木/Sasaki — hits are 佐々木酒造 lines only — 祇園らーめん/Gion Ramen,
//   たばこや/Tabakoya, 亀廣永/Kame Hironaga, 竹ざき/Takezaki) and address (中之町582, 下樵木町202-3, 和久屋町359,
//   竹屋町150) found none. Tabelog URLs copied from each listing.txt line 1. None of the four pages asks diners not to post
//   or marks itself 転載禁止 (Greg, 2026-11-05).
//   Pins: GSI only (no OSM). No new pin within 3 m of another (check-stacked-pins run before hand-off).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-30');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26038758', '祇園らーめん 京都本店 (Gion Ramen Kyoto honten): existence unverifiable — the Tabelog listing shows no business hours, the newest dated visits among its reviews are January–February 2025 (a May 2025 review describes the Isetan ramen alley, not this shop), and no 2026 source was found; a ramen block could not be sourced either');

// ================================================================ しゅん逢 紗々木
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26021046/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '14:30'], ['18:00', '21:30']);
  put({
    id: 'kyoto_shun_ai_sasaki', name: 'しゅん逢 紗々木 (Shun Ai Sasaki)', category: 'OMNI',
    lat: 35.001619, lng: 135.767021, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information; the courses use dashi, white miso, ponzu, sesame dressing and nama-fu (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: set courses built on dashi with beef (roast beef, oxtail, beef cheek), eel and fish in most dishes (2026 reviews).',
    hours_raw: 'Tabelog: every day lunch 12:00–14:30 and dinner 18:00–21:30; on days before and after public holidays dinner is listed as 18:00–18:30; closed irregularly. Bookings taken. Courses: lunch ¥6,600 (August 2026) and ¥8,800 (March 2026), a special lunch kaiseki (September 2026); dinner ¥13,500, with a ¥1,500 charge for a private room (October 2026). 20 seats: 8 at the counter and two tatami rooms with sunken seating for up to 12; non-smoking (Tabelog). Children only from middle-school age, ordering the same course as adults (Tabelog). Dress: not overly casual (Tabelog). Cards, no e-money or QR (Tabelog). On Teramachi north of Bukkoji; 5 min walk from Hankyu Kawaramachi Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Teramachi north of Bukkoji — 5 min walk from Hankyu Kawaramachi Stn',
    cuisine: 'Kyoto set courses that pair dashi cooking with beef (2026 reviews) · lunch courses ¥6,600 and ¥8,800, a special lunch kaiseki; dinner ¥13,500 (2026 reviews) · September 2026 lunch: kombu-cured yam noodles with lightly cooked beef and aosa; conger eel and winter melon in a ginger-scented bowl; steamed abalone; sea bream, amberjack and Awaji bonito sashimi with ponzu; oxtail with yuba dumpling and nama-fu; hassun with roast beef and sea-bream sushi; beef cheek braised in white miso; sea-bream kamameshi; coconut, fig and white-wine jelly · spring: firefly squid, bamboo shoots, canola flowers; clay-pot rice with sakura shrimp (2026 reviews) · sake, shochu and wine (Tabelog)',
    website: TB, gmaps: gm('しゅん逢 紗々木 京都'), menu_url: TB,
    notes: "[Kyoto cuisine · Teramachi-Bukkoji, dashi and beef] A 20-seat Kyoto restaurant on Teramachi with a counter and two sunken tatami rooms, unusual for setting meat — roast beef, oxtail, beef cheek in white miso — among dashi-led seasonal courses that end with clay-pot rice. Lunch from ¥6,600, dinner about ¥13,500 (2026). Reviewers praise an attentive proprietress and call the room new and spotless. Children from middle-school age only. Lunch and dinner daily; book ahead.",
    chef_bio: { chef_name: null, roles: ['Kitchen (unnamed); a proprietress (女将) looks after the room, per a March 2026 review'], origin: null,
      background: 'No owner or chef is named in the sources read. Reviewers describe Kyoto courses that include meat — rare for Kyoto cuisine, as a May 2026 diner put it — with a seasoning "that appeals to Japanese tastes" (March 2026), and the room as still new and well kept (August 2026). A March 2026 family of six praised the attentive proprietress.',
      philosophy: null,
      specialty: 'Lunch kaiseki with beef dishes; clay-pot rice.',
      anecdotes: [
        { text: '"The reviews were decent, but I went in with low expectations, and to my surprise, it was much better than I anticipated." — the ¥6,600 lunch, August 2026.', source: R + 'B533201738/' },
        { text: '"Despite being Japanese cuisine, the inclusion of meat dishes like oxtail, roast beef, and beef cheek was impressive." — September 2026.', source: R + 'B535989479/' },
        { text: 'A family of five in May 2026 found the course centred on meat with portions modest enough for a smaller appetite.', source: R + 'B528234744/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理、下京区寺町仏光寺上ル中之町582、毎日12:00〜14:30・18:00〜21:30 (祝前日・祝後日のディナーは18:00〜18:30)、不定休、予約可、20席 (カウンター8席、掘りごたつの座敷2室で最大12名)、禁煙、子供は中学生以上で大人と同じコースを注文する場合のみ、服装はあまりにカジュアルでなければ可、カード可、電子マネー・QR 不可。口コミ (2026年3月〜10月、英語): ランチのコース6,600円・8,800円、特別ランチ懐石、ディナー13,500円 (個室料1,500円)、肉料理の多い京料理、ローストビーフ、テールの焼き物、牛ほほ肉の白味噌煮、鯛の釜飯、女将の気配り。',
      confidence: 'medium', sources: [TB, R + 'B524424134/', R + 'B526420281/', R + 'B527392824/', R + 'B528234744/', R + 'B529960952/', R + 'B530854782/', R + 'B533201738/', R + 'B534447494/', R + 'B535989479/', R + 'B537863013/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set courses only, booked ahead; private tatami rooms for groups.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市下京区寺町仏光寺上ル中之町582',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated March–October 2026.' },
    pin_source: `Tabelog ${TB} (35.001619, 135.767021); GSI matched only the town (京都府京都市下京区中之町) 35m away, so the pin rests on the Tabelog point; kyr_menya_inoichi is 33 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533201738/', R + 'B527392824/', R + 'B537863013/'],
    price_note: 'No published menu; course prices from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch course', '¥6,600', 'Lunch', 'ask', 'no', 'August 2026.', 'lunch_6600'),
      it('', '', 'Lunch course', '¥8,800', 'Lunch', 'ask', 'no', 'March 2026.', 'lunch_8800'),
      it('', '', 'Dinner course', '¥13,500', 'Dinner', 'ask', 'no', 'October 2026; private room ¥1,500 extra.', 'dinner_13500'),
    ] }, {
    cuisine: 'だしの料理に牛肉を合わせる京料理のコース (2026年の口コミ)・ランチのコース6,600円・8,800円、特別ランチ懐石、ディナー13,500円 (2026年の口コミ)・2026年9月のランチ: 昆布締めの山芋そうめんと牛肉とあおさ、生姜の香る鱧と冬瓜のお椀、蒸し鮑、鯛・カンパチ・淡路の鰹のお造り (ポン酢)、テールと湯葉饅頭と生麩の焼き物、ローストビーフと鯛寿司の八寸、牛ほほ肉の白味噌煮、鯛の釜飯、ココナッツといちじくと白ワインのゼリー・春: ほたるいか、筍、菜の花、桜海老の土鍋ご飯 (2026年の口コミ)・日本酒、焼酎、ワイン (食べログ)',
    neighborhood: '仏光寺の北の寺町。阪急京都河原町駅から徒歩5分',
    gf_detail: '予約時に要確認。グルテンの情報はない。コースにはだし、白味噌、ポン酢、胡麻のドレッシング、生麩を使う (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: だしを基本にしたコースで、ほとんどの料理に牛肉 (ローストビーフ、テール、ほほ肉)、鱧、魚を使う (2026年の口コミ)。',
    notes: '[京料理・寺町仏光寺、だしと牛肉] 寺町通の、カウンターと掘りごたつの座敷2室の20席の京料理店。だしを基本にした季節のコースに、ローストビーフ、テール、牛ほほ肉の白味噌煮などの肉料理を組み込むのが珍しく、締めは土鍋ご飯。ランチ6,600円から、ディナー13,500円ほど (2026年)。口コミは女将の気配りと、新しくきれいな店内をほめる。子供は中学生以上のみ。昼夜とも毎日、要予約。',
  });
}

// ================================================================ 先斗町 たばこや
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26002182/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '22:30']);
  put({
    id: 'kyoto_pontocho_tabakoya', name: '先斗町 たばこや (Pontocho Tabakoya)', category: 'OMNI',
    lat: 35.005753, lng: 135.770925, cuisine_type: 'obanzai',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; the menu has tempura, fried dishes, a crab gratin, nama-fu dengaku and many dishes in thick sauces (2024–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Vegetable obanzai (eggplant dengaku, simmered eggplant) are on the menu, but the cooking leans on dashi and fish — even the fried taro was cooked in shrimp broth (July 2026).',
    hours_raw: 'Tabelog: every day 17:00–22:30 (food last order 21:15, drinks 22:00); hours may change. Bookings by phone 12:00–22:00 (075-221-1756), and only for arrivals 17:00–18:00 — 17:00–17:30 at any time, 17:30–18:00 if seats allow; no bookings for after 18:00; a 2.5-hour limit at busy times (Tabelog). Table charge ¥500 including the appetiser (Tabelog). 20 seats: 8 at the counter and three tables (Tabelog). Tabelog lists it as non-smoking, but in May 2025 staff asked a diner whether smoking inside was all right. Cards, no e-money or QR (Tabelog). On Pontocho, about 250 m from the Shijo end; parking near Keihan Sanjo Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Pontocho, about midway between Shijo and Sanjo — 5 min walk from Gion-Shijo Stn',
    cuisine: 'Obanzai izakaya on Pontocho with fish and Kyoto sake (Tabelog; reviews) · obanzai served even as single portions (April 2025): agedashi tofu, minced-meat stew, simmered squid and taro, jako with salt kombu and peppers, simmered eggplant, fried shrimp-taro · round-eggplant dengaku, nama-fu dengaku, black cod in Saikyo miso, yuba sashimi, Awaji octopus sashimi with plum, cod-milt tempura, crab gratin, shrimp dumplings, heshiko, mackerel pressed sushi (2024–2026 reviews) · hot sake, shochu chuhai, highballs; sake served in a teacup (February 2025) · ¥500 charge with appetiser',
    website: TB, gmaps: gm('先斗町 たばこや'), menu_url: TB,
    notes: "[Obanzai izakaya · Pontocho, old-fashioned and lively] A 20-seat obanzai izakaya on Pontocho, behind a wooden sign reading obanzai: home-style Kyoto dishes such as simmered squid and taro, round-eggplant dengaku, Saikyo-miso black cod and fried shrimp-taro, with hot sake. Reviewers describe an apron-clad owner serving (2024–2025) and a room bustling with regulars (September 2024); a July 2026 diner found the heshiko too salty and the young staff distracted. Bookings only for 17:00–18:00 arrivals; ¥500 charge. Daily 17:00–22:30.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), who serves in an apron, per 2024–2025 reviews'], origin: null,
      background: 'A December 2024 review describes the mother in the chef’s apron serving Kyoto dishes such as yuba sashimi and saikyo-yaki at reasonable prices; a May 2025 diner was served by the charming, gentle owner in a traditional apron. A January 2025 diner read in blogs that the owner had once run a high-end restaurant in Gion. A June 2026 diner found the staff kind and the place not especially aimed at tourists.',
      philosophy: null,
      specialty: 'Obanzai; Saikyo-miso black cod; round-eggplant dengaku.',
      anecdotes: [
        { text: '"Since I was alone, I was worried that I couldn\'t order many obanzai dishes, but they kindly prepared a single serving for me." — April 2025.', source: R + 'B505175177/' },
        { text: 'A May 2025 walk-in was asked first whether smoking inside was all right, and guessed that this kept seats free.', source: R + 'B506210712/' },
        { text: 'A July 2026 diner loved the fried shrimp-taro and simmered eggplant but found the heshiko "just overly salty" and the part-time staff "in their own little world".', source: R + 'B532338187/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・海鮮・郷土料理、中京区木屋町通四条上ル2-下樵木町202-3、毎日17:00〜22:30 (L.O. 料理21:15・ドリンク22:00)、予約は12時〜22時の電話で、17:00〜17:30の来店はいつでも、17:30〜18:00は空席次第、18時以降は不可、混雑時は2.5時間制、お付だし・サービス料500円、20席 (カウンター8、テーブル4名×2、5名×1)、禁煙、カード可、電子マネー・QR 不可。口コミ (2024年9月〜2026年7月、英語): おばんざい、丸茄子の田楽、銀だらの西京焼き、生麩田楽、湯葉刺し、淡路の蛸、鯖の押し寿司、白子の天ぷら、蟹グラタン、海老芋の唐揚げ、へしこ、湯呑みで日本酒、割烹着の店主。',
      confidence: 'medium', sources: [TB, R + 'B491728785/', R + 'B494547501/', R + 'B494805464/', R + 'B499759573/', R + 'B505175177/', R + 'B506210712/', R + 'B508495861/', R + 'B515006455/', R + 'B530280730/', R + 'B532338187/'] },
    cultural_comfort: { level: 'japanese', note: 'An old-style local izakaya; book by phone for a 17:00–18:00 start, or try your luck later.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区木屋町通四条上ル2-下樵木町202-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.005753, 135.770925); cross-checked: GSI 京都府京都市中京区下樵木町202番地 (lot) 9m; kyoto_pontocho_fujiwara is 20 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B499759573/'],
    price_note: 'No published menu; a January 2025 bill was about ¥8,000 for three.', last_checked: TODAY, items: [
      it('', '', 'Table charge with appetiser', '¥500', 'Charge', '', '', '', 'table_charge'),
      it('', '', 'Black cod in Saikyo miso', '', 'Grilled', 'ask', 'no', '2024–2025 reviews.', 'gindara_saikyo'),
      it('', '', 'Round-eggplant dengaku', '', 'Obanzai', 'ask', 'ask', 'October 2024.', 'nasu_dengaku'),
    ] }, {
    cuisine: '先斗町の魚と京都の日本酒のおばんざい居酒屋 (食べログ、口コミ)・おばんざいはひとり分でも (2025年4月): 揚げだし豆腐、ひき肉の煮物、いかと里芋の炊いたん、じゃこと塩昆布とピーマン、茄子の煮浸し、海老芋の揚げ物・丸茄子の田楽、生麩田楽、銀だらの西京焼き、湯葉刺し、淡路の蛸の刺身 (梅肉)、白子の天ぷら、蟹グラタン、海老の饅頭、へしこ、鯖の押し寿司 (2024〜2026年の口コミ)・燗酒、焼酎の酎ハイ、ハイボール、湯呑みで日本酒 (2025年2月)・お通し付きのチャージ500円',
    neighborhood: '先斗町、四条と三条のほぼ中ほど。祇園四条駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報はない。天ぷら、揚げ物、蟹グラタン、生麩田楽、とろみのあるあんの料理が多い (2024〜2026年の口コミ)。',
    vegan_detail: '要確認。野菜のおばんざい (茄子の田楽、茄子の煮浸し) もあるが、だしと魚が中心で、芋の揚げ物も海老のだしで炊いたもの (2026年7月)。',
    notes: '[おばんざい居酒屋・先斗町、昔ながらでにぎやか] 「おばんざい」の木の看板が目印の、先斗町の20席のおばんざい居酒屋。いかと里芋の炊いたん、丸茄子の田楽、銀だらの西京焼き、海老芋の揚げ物などの京の家庭料理を燗酒と。割烹着の店主が料理を運び、常連でにぎわう (2024〜2025年の口コミ)。2026年7月の客は、へしこが塩辛すぎ、若い店員が自分たちの世界にいると書いている。予約は17時〜18時の来店のみ、チャージ500円。毎日17時〜22時半。',
  });
}

// ================================================================ 亀廣永
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26004744/'; const R = TB + 'dtlrvwlst/';
  const WARAKU = 'https://intojapanwaraku.com/travel/226079/';
  const H = day(['09:00', '18:00']);
  put({
    id: 'kyoto_kame_hironaga', name: '亀廣永 (Kame Hironaga)', category: 'MOM_AND_POP',
    lat: 35.006392, lng: 135.76252, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No ingredient list is published. The signature shitatari is described as agar jelly sweetened with Okinawan brown sugar, zarame and wasanbon (July 2026 review); the shop also sells soy-sauce okaki and rakugan with bean paste, which are not described.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The shitatari is described as agar and three sugars (July 2026 review), but no full ingredient list is published.',
    hours_raw: 'Tabelog and Waraku (2023): 9:00–18:00, closed Sundays and public holidays; hours may change. A takeaway shop with no seating (September 2026). Orders can be reserved by phone (075-221-5965), and the shop is especially busy around the Gion Festival, from late June until after Obon (Tabelog). Cash only (Tabelog; September 2026). On Takakura-dori north of Takoyakushi, south of Takakura Elementary School; 8 min walk from Karasuma Oike Stn exit 5 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Takakura-dori north of Takoyakushi — 8 min walk from Karasuma Oike Stn',
    cuisine: 'Old Kyoto wagashi shop for takeaway (Tabelog; Waraku) · shitatari, an amber brown-sugar agar sweet first made for the Gion Festival tea at the Kikusui float and now sold all year, ¥1,500 a block; keeps about 10 days and can stay at room temperature, best chilled (2024–2026 reviews; Waraku 2023 lists it as a summer sweet) · koto ouchi, rakugan dough around chunky bean paste, box ¥3,450, from October (Waraku 2023) · seasonal wagashi and soy-sauce okaki in three hardnesses (July and September 2026)',
    website: TB, gmaps: gm('亀廣永 京都 高倉'), menu_url: TB,
    notes: "[Wagashi · Takakura-Takoyakushi, the shitatari] A small takeaway wagashi shop on Takakura-dori known for shitatari (¥1,500): a translucent amber block of agar and brown sugar, first made for the Gion Festival tea at the Kikusui float and now sold year round — softer than yokan, best chilled, keeps about ten days. In autumn, koto ouchi rakugan with bean paste. Waraku (2023) describes a family shop run by the second-generation couple and the third generation. Wagashi WEST Tabelog 100 2023 and 2026. Cash only; 9:00–18:00, closed Sundays and holidays.",
    chef_bio: { chef_name: '西井新太郎', roles: ['Second-generation owner, per Waraku (2023)'], origin: null,
      background: 'Per Waraku (September 2023, from its October–November 2021 issue): the shop’s founder went independent from 亀末廣 in the early Showa era; the second generation is 西井新太郎, and the shop is run by a couple in their eighties together with the next, third-generation head, 孝明. Reviewers give older dates — "since its establishment in 1804" (July 2026) and "since around 1800" (September 2026) — which this record does not resolve. The shitatari was first made for the tea ceremony at the Kikusui float of the Gion Festival and, being popular, is now sold all year (July 2026 review; Tabelog). Tabelog Wagashi WEST "Tabelog 100" 2023 and 2026.',
      philosophy: null,
      specialty: 'Shitatari; koto ouchi.',
      anecdotes: [
        { text: '"On the evening of the 16th, it was already sold out at the Kikusui Hoko float, but there was still plenty available at the main store." — July 2026.', source: R + 'B532102019/' },
        { text: '"The elderly staff member kindly explained the details about Shitatari." — September 2026.', source: R + 'B536066347/' },
        { text: 'A September 2026 buyer also took soy-sauce okaki, sold in three levels of hardness, and found the medium one quite firm.', source: R + 'B536467840/' },
      ],
      japanese_sources_summary: '和樂web (2023年9月、2021年10・11月号より): 亀廣永、昭和のはじめに「亀末廣」から独立した初代の作、2代目 西井新太郎、80代夫婦と次期3代目・孝明さんの3人4脚で店を支える、古都大内 (落雁の生地の中につぶあん) 1箱3,450円、日もち1週間、30個入り紙箱1,950円、夏季は琥珀羹「したたり」、営業時間9時〜18時、日曜・祝日休み、古都大内は10月から。食べログ: 和菓子、中京区高倉通蛸薬師上ル和久屋町359、月〜土 9:00〜18:00、日・祝休み、予約可、祇園祭の頃 (6月末〜お盆過ぎ) は特に混む、カード・電子マネー・QR 不可、「したたり」は通年販売 (Available year-round)、和菓子・甘味処 WEST 百名店 2023・2026。口コミ (2024年8月〜2026年10月、英語): したたり1,500円、日もち10日、菊水鉾、黒糖・ざらめ・和三盆、おかき。',
      confidence: 'medium', sources: [TB, WARAKU, R + 'B490683789/', R + 'B529263399/', R + 'B532102019/', R + 'B532327374/', R + 'B533181984/', R + 'B534078320/', R + 'B536066347/', R + 'B536467840/', R + 'B537423870/', R + 'B538363547/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A small takeaway counter; point at the shitatari and pay in cash. Staff explain the sweets (2026).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区高倉通蛸薬師上ル和久屋町359',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026; Wagashi WEST Tabelog 100 2026.' },
    pin_source: `Tabelog ${TB} (35.006392, 135.762520); cross-checked: GSI 京都府京都市中京区和久屋町359番地 (lot) 52m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B538363547/', WARAKU],
    price_note: 'Shitatari price from 2026 reviews; koto ouchi from Waraku (2023).', last_checked: TODAY, items: [
      it('したたり', '', 'Shitatari (amber brown-sugar agar sweet)', '¥1,500', 'Wagashi', 'ask', 'ask', 'October 2026.', 'shitatari'),
      it('古都大内', '', 'Koto ouchi (rakugan with bean paste), box', '¥3,450', 'Wagashi', 'ask', 'ask', 'From October; 2023 price.', 'koto_ouchi'),
    ] }, {
    cuisine: '持ち帰りの京都の老舗の和菓子屋 (食べログ、和樂web)・したたり: 祇園祭の菊水鉾の茶会のために作られ、今は通年販売の琥珀色の黒糖の寒天菓子、1棹1,500円、日もち約10日、常温可、冷やすとよい (2024〜2026年の口コミ。和樂web 2023年は夏季の販売とする)・古都大内: 落雁の生地につぶあん、1箱3,450円、10月から (和樂web 2023年)・季節の和菓子、硬さ3種の醤油のおかき (2026年7月・9月)',
    neighborhood: '蛸薬師の北の高倉通。烏丸御池駅から徒歩8分',
    gf_detail: '要確認。原材料は公開されていない。看板のしたたりは沖縄の黒糖、ざらめ、和三盆の寒天とされる (2026年7月の口コミ)。醤油のおかきや、つぶあんの落雁もあるが中身は書かれていない。',
    vegan_detail: '要確認。したたりは寒天と3種の砂糖とされる (2026年7月の口コミ) が、原材料の一覧は公開されていない。',
    notes: '[和菓子・高倉蛸薬師、したたり] 高倉通の小さな持ち帰りの和菓子屋。看板は「したたり」(1,500円): 寒天と黒糖の透きとおった琥珀色の棹菓子で、祇園祭の菊水鉾の茶会のために作られ、今は一年中買える。羊羹よりやわらかく、冷やしておいしく、日もちは10日ほど。秋は落雁につぶあんの古都大内。和樂web (2023年) は2代目夫婦と3代目の家族の店と紹介している。和菓子・甘味処 WEST 百名店 2023・2026。現金のみ、9時〜18時、日・祝休み。',
  });
}

// ================================================================ 竹ざき
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26025714/'; const R = TB + 'dtlrvwlst/';
  const WK = day(['12:00', '14:30'], ['18:00', '23:00']); const SU = day(['09:00', '10:30'], ['12:00', '14:30'], ['18:00', '23:00']);
  put({
    id: 'kyoto_takezaki', name: '竹ざき (Takezaki)', category: 'OMNI',
    lat: 35.012366, lng: 135.762623, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information; the omakase includes tempura, vinegared-miso dishes and dashi-based dishes (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an omakase built on dashi and seafood — shellfish, sashimi, flounder, yellowtail — with duck and game; even the breakfast miso soup is made with fish (2026 reviews).',
    hours_raw: 'Tabelog: Monday–Saturday lunch 12:00–14:30 (last order 12:00) and dinner 18:00–23:00 (last order 20:00); Sunday also breakfast 9:00–10:30; closed irregularly and on 29–30 December (osechi pickup only on the 31st). Reservation only, by phone or Instagram DM; online up to the end of the month after next; walk-ins may not be possible. Cancellation: 30% from 7 days before, 50% the day before, 100% on the day or with no contact (Tabelog). Courses: omakase ¥9,900 (January 2026); Sunday breakfast ¥4,950 with refills of clay-pot rice and miso soup (July–August 2026); sake pairings (six glasses ¥3,520, January 2026). Only one red and one white wine by the glass — bring your own wine (fee charged). Allow 2.5–3 hours for dinner, 2 for lunch, 1 for breakfast (Tabelog). 7 seats (6 at the L-shaped counter, per reviews) in a townhouse, shoes off; private hire for 5 or more; smoking only in the garden (Tabelog; 2026 reviews). School-age children; younger children only if the room is booked for four or more adults (Tabelog). Cards, IC and QR (Tabelog). 5 min walk from Karasuma Oike Stn exit 1 (Tabelog).',
    hours: { 0: WK, 1: WK, 2: WK, 3: WK, 4: WK, 5: WK, 6: SU }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Oshikoji-dori east of Takakura, south of the Imperial Palace — 5 min walk from Karasuma Oike Stn',
    cuisine: 'One-cook kappo counter of seasonal Kyoto cooking and sake (2026 reviews) · omakase ¥9,900 (January 2026): two shellfish in vinegared miso, steamed rice with a large clam and sansho, sashimi of tuna, yellowtail, horse mackerel and flounder, a fish and maitake soup with yuzu, salt-grilled winter yellowtail, Shogoin daikon with crab, rice with shiitake and duck fat, a hot pot of bear meat, hojicha ice made at the counter · spring 2026: Omi beef shabu-shabu with bamboo shoot and sansho, sakura-shrimp rice · summer 2026: Kamo eggplant dengaku, ayu tempura, hamo · Sunday breakfast ¥4,950: clay-pot rice, fish miso soup, sashimi, simmered dishes, grilled fish · sake pairings of regional brews; coffee hand-dripped per guest',
    website: TB, gmaps: gm('竹ざき 京都 押小路'), menu_url: TB,
    notes: "[Kappo · Oshikoji-Takakura, one cook at the counter] A seven-seat L-shaped counter in a small townhouse south of the Imperial Palace, where the chef cooks, pours and serves almost single-handed: plain-spoken seasonal omakase (about ¥9,900 at lunch in January 2026) with unusual fish, game in winter, and sake pairings. On Sundays a ¥4,950 breakfast course with clay-pot rice and refills. Tabelog Award Bronze 2017–2020. Reservation only; shoes off; bring your own wine. Expect some waits — the cook works alone.",
    chef_bio: { chef_name: null, roles: ['Owner-chef who runs the counter alone (name given only in a machine-translated review)'], origin: 'Kyoto (born and raised, per an April 2026 review)',
      background: 'Reviewers describe a chef who handles everything from food to drinks alone (January, April and May 2026), and on one Sunday in August 2026 a team of five at breakfast. An April 2026 diner wrote that the chef was born and raised in Kyoto, trained at a prestigious establishment and was in the 11th year here; Tabelog gives the opening day as 6 June 2015. An August 2026 review, read in English translation, names the chef as Sho Takezaki and the training place as a renowned Kyoto ryotei; this record does not use the name or reading because the Japanese original was not seen. Tabelog Award Bronze 2017, 2018, 2019 and 2020; a March 2026 diner called it Michelin-selected.',
      philosophy: null,
      specialty: 'Seasonal omakase with sake pairings; Sunday breakfast.',
      anecdotes: [
        { text: '"I was truly impressed when they even showed me a reference book to explain the ingredients (fish)." — June 2026.', source: R + 'B365678880/' },
        { text: 'In January 2026 the owner was alone and the sake sommelier absent, so a diner on a six-sake pairing could not ask about the sake.', source: R + 'B520627676/' },
        { text: 'An April 2026 diner wished for more sake by the glass: the main style is to order by the bottle.', source: R + 'B527653510/' },
        { text: '"The hojicha ice cream … was surprisingly made right in front of me with an ice cream machine." — January 2026.', source: R + 'B520689169/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理、中京区押小路通高倉東入竹屋町150、月〜土 12:00〜14:30 (L.O. 12:00)・18:00〜23:00 (L.O. 20:00)、日曜は朝9:00〜10:30も、所要時間 夜2.5〜3時間・昼2時間〜・朝1時間〜、不定休、12月29・30日休み (31日はおせちの受け渡しのみ)、完全予約制、電話または DM で予約、キャンセル料 (7日前から30%、前日50%、当日・連絡なし100%)、基本サービス料なし (食事を頼まない方がいる場合10%)、7席 (カウンターのみ)、貸切は5名から、喫煙は庭のみ、靴を脱いで上がる、ワインは赤白1種ずつなので持ち込み (有料)、子供は小学生以上 (4名以上の貸切なら未就学児も可)、カード・電子マネー・QR 可、2015年6月6日オープン、食べログアワード ブロンズ 2017〜2020。口コミ (2026年1月〜8月、英語): おまかせ9,900円、日本酒ペアリング6種3,520円、日曜の朝食4,950円 (土鍋ご飯と味噌汁はおかわり可)、L字のカウンター6席、店主ひとりで調理から飲み物まで、京都生まれ京都育ち、11年目、熊肉の鍋、ほうじ茶アイス。',
      confidence: 'medium', sources: [TB, R + 'B365678880/', R + 'B520627676/', R + 'B520689169/', R + 'B522097977/', R + 'B525356129/', R + 'B526933106/', R + 'B527653510/', R + 'B528707060/', R + 'B532449019/', R + 'B533326337/'] },
    cultural_comfort: { level: 'japanese', note: 'Reservation only by phone or Instagram DM; a one-cook counter with a set omakase; shoes off.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区押小路通高倉東入竹屋町150',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.012366, 135.762623); cross-checked: GSI 京都府京都市中京区竹屋町150番地 (lot) 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B520627676/', R + 'B533326337/'],
    price_note: 'No published menu; prices from January and August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Omakase course', '¥9,900', 'Course', 'ask', 'no', 'January 2026.', 'omakase'),
      it('', '', 'Sunday breakfast course', '¥4,950', 'Breakfast', 'ask', 'no', 'Clay-pot rice and miso soup refills; August 2026.', 'sunday_breakfast'),
      it('', '', 'Sake pairing, six glasses', '¥3,520', 'Drinks', '', '', 'January 2026.', 'sake_pairing_6'),
    ] }, {
    cuisine: '料理人ひとりの季節の京料理と日本酒の割烹カウンター (2026年の口コミ)・おまかせ9,900円 (2026年1月): 貝の酢味噌和え、大きな貝の飯蒸し (山椒)、鮪・鰤・鯵・鮃のお造り、魚と舞茸の柚子のお椀、寒鰤の塩焼き、聖護院大根の蟹あんかけ、椎茸と鴨の脂のご飯、熊肉の鍋、カウンターで作るほうじ茶アイス・2026年春: 近江牛と筍と山椒のしゃぶしゃぶ、桜海老ご飯・夏: 賀茂茄子の田楽、鮎の天ぷら、鱧・日曜の朝食4,950円: 土鍋ご飯、魚の味噌汁、お造り、炊き合わせ、焼き魚・各地の日本酒のペアリング、ひとりずつ淹れるハンドドリップのコーヒー',
    neighborhood: '御所の南、高倉の東の押小路通。烏丸御池駅から徒歩5分',
    gf_detail: '予約時に要確認。グルテンの情報はない。おまかせには天ぷら、酢味噌和え、だしの料理がある (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: だしと魚介 (貝、お造り、鮃、鰤) にジビエや鴨のおまかせで、朝食の味噌汁も魚 (2026年の口コミ)。',
    notes: '[割烹・押小路高倉、カウンターに料理人ひとり] 御所の南の小さな町家の、L字のカウンター7席。料理人がほぼひとりで料理から酒、給仕までこなす。気取らない季節のおまかせ (2026年1月の昼は9,900円ほど)、珍しい魚、冬はジビエ、日本酒のペアリング。日曜は土鍋ご飯をおかわりできる4,950円の朝食コース。食べログアワード ブロンズ 2017〜2020。完全予約制、靴を脱いで上がる、ワインは持ち込みを。料理人ひとりなので待つこともある。',
  });
}

save();
