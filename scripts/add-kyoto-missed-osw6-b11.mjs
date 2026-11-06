// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 11.
//   + Luca (8-seat French by Nishiki Market, owner-chef Takuya Sawahara)
//   + 佛沙羅館 Bussarakan (Thai in a townhouse on the Kamo River at Matsubara, with a summer riverside platform)
//   + カイカドウ カフェ Kaikado Cafe (the tea-caddy maker Kaikado's café near Shichijo; Cafe WEST Tabelog 100 2025)
//   + あごつゆしゃぶしゃぶ 山福 本店 Agotsuyu Shabushabu Yamafuku (flying-fish-broth pork shabu-shabu on Kiyamachi)
//   - skip 26025412 吉祥菓寮 祇園本店 (sub-brand of a large parent; see below)
//   Taken on 2026-11-05: `next core 200` gave Luca 26037178 and 佛沙羅館 26002006; `next notable 200` gave 吉祥菓寮
//   26025412 (skipped), カイカドウ カフェ 26027350 and 山福 26019742.
//   None of the four is in data/kyoto.json: grep by name (Luca, 佛沙羅/Bussarakan, カイカドウ/開化堂/Kaikado, 山福/Yamafuku)
//   and address (高宮町585/若葉ビル, 美濃屋町173, 住吉町352, 材木町187) found one shared building: kyoto_sushi_obino
//   (address_ja "京都府京都市中京区高宮町585 若葉ビル 1F") sits 1.4 m from Luca's Tabelog point, so Luca is offset ~5 m
//   north. 佛沙羅館 is next to kyoto_sushi_taizo (美濃屋町174-1, 26 m) and kyoto_kawa_cafe (美濃屋町176-1, 27 m).
//   Greg's 2026-11-05 rulings: 吉祥菓寮 skipped as a sub-brand; no shop asks diners not to post it; no remarks on looks.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-11');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26025412', 'sub-brand of a large parent (Greg, 2026-11-05): 吉祥菓寮 is run by 株式会社DAY TO LIFE, the company behind the cream-puff chain ビアードパパ (Beard Papa), per its PR TIMES release of 2026-05-01; other 吉祥菓寮 shops include the Kyoto Tower Sando shop, a Kyoto Shijo shop and a Kinako Roastery & Cafe near Karasuma.');

// ================================================================ Luca
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26037178/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '15:00'], ['18:00', '22:00']);
  put({
    id: 'kyoto_luca_nishiki', name: 'Luca', category: 'MOM_AND_POP',
    lat: 35.005599, lng: 135.765123, cuisine_type: 'french',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the restaurant states it cannot accommodate wheat allergies (nor dairy, seafood or almond allergies, or vegetarians) (Tabelog). The courses include unlimited bread (April 2025).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the restaurant states it cannot accommodate vegetarians or dairy allergies (Tabelog); courses centre on seafood, foie gras and wagyu (2025–26 reviews).',
    hours_raw: 'Lunch 12:00–15:00 (last arrival 12:30), dinner 18:00–22:00 (last arrival 19:00); arrivals after the last order time count as cancellations; closed irregularly (Tabelog). Reservation only; tell the restaurant about allergies in advance — same-day requests cannot be met, and it cannot accommodate seafood, dairy, wheat or almond allergies, vegetarians, or long lists of exclusions; raw meat or fish can be adjusted only for the main (Tabelog). One drink per person; 8% service on course prices (Tabelog). All guests start together, so do not arrive early (February 2026). A quiet room: diners have been asked to lower their voices (March and July 2025). 8 seats at three small tables, up a staircase with no lift; blankets on request (Tabelog; 2025 reviews). Non-smoking; cards, IC cards, iD and QUICPay (Tabelog). On Tominokoji just north of Nishiki Market; 6 min from Shijo / Karasuma and Kyoto Kawaramachi Stns (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Tominokoji by Nishiki Market, 2nd floor — 6 min from Kyoto Kawaramachi Stn',
    cuisine: 'Chef’s omakase French with seasonal produce and black wagyu (Tabelog; 2025–26 reviews) · dinner course ¥14,700 with a 6-glass wine pairing ¥10,800 (November 2025); lunch courses ¥7,200 (January 2025) and ¥12,000 (April 2025) · courses run from an amuse-bouche through three appetizers, two mains and three desserts, with unlimited bread (April 2025) · dishes have included crab with kombu jelly over a soft egg, salmon with oyster cream and kiwi in spinach, sea bass, Satsuma Nishiki beef, a red-wine main, autumn saury, abalone, lobster, eel, foie gras, venison, and desserts such as persimmon with sake lees, hojicha and lentils (2025–26 reviews) · wine pairings of 3–6 glasses',
    website: null, gmaps: gm('Luca 京都 富小路 フレンチ'), menu_url: TB + 'dtlmenu/',
    notes: "[French · Nishiki Market, an 8-seat room for long lunches] A high-ceilinged, grey-toned room up a flight of stairs off Tominokoji, with three tables and eight seats, where owner-chef Takuya Sawahara cooks a set course single-handed. Expect a parade of small appetizers, two mains and three desserts — crab with kombu jelly, salmon with oyster cream, Satsuma Nishiki beef — with wine pairings from three to six glasses; dinner was ¥14,700 in late 2025. House rules are firm: book ahead, arrive on time, one drink each, keep your voice down, and no wheat, dairy or vegetarian adjustments. 8% service.",
    chef_bio: { chef_name: 'Takuya Sawahara', roles: ['Owner-chef (Tabelog, shop text)'], origin: null,
      background: 'Per Tabelog (the shop’s own text): owner-chef Takuya Sawahara; the name Luca stands for something that brings and gives light. A February 2026 reviewer says the chef trained at renowned Kyoto restaurants and a two-star French restaurant; a July 2026 reviewer says the chef cooks everything from amuse-bouche to dessert alone; an August 2025 regular praises "the chef, and the madam".',
      philosophy: 'Per Tabelog (the shop’s own text): meals that bring a smile — "the light that spills out when you take a bite."',
      specialty: 'Chef’s omakase course; wine pairing.',
      anecdotes: [
        { text: 'A July 2025 birthday diner and another table were reminded several times to lower their voices; the diner took it as the shop protecting its atmosphere.', source: R + 'B509476191/' },
        { text: 'A March 2025 diner found it a bit intimidating when staff asked another table to keep their voices down mid-explanation.', source: R + 'B503334940/' },
        { text: 'A November 2025 regular on a fourth yearly visit was recognised a year later with "You got a haircut!"', source: R + 'B457858207/' },
        { text: 'A July 2026 diner was impressed that the chef handles everything from amuse-bouche to dessert alone, and found the course incredibly satisfying.', source: R + 'B531829198/' },
      ],
      japanese_sources_summary: '食べログ: フレンチ、中京区富小路通蛸薬師下ル高宮町585 若葉ビル 2F、四条駅・烏丸駅・京都河原町駅から徒歩6分、エレベーターなし、12:00〜15:00 (L.O. 12:30)・18:00〜22:00 (L.O. 19:00)、遅れた場合はキャンセル扱い、不定休、完全予約制、アレルギーは事前に (当日不可、魚介・乳・小麦・アーモンドのアレルギーやベジタリアンには対応不可)、1人1ドリンク、コースにサービス料8％、8席 (テーブルのみ)、禁煙、カード・電子マネー可、オーナーシェフ Takuya Sawahara、店名は光をもたらすという意味。口コミ (2025年1月〜2026年9月、英語): ディナーコース14,700円、ワインペアリング6種10,800円、ランチ7,200円・12,000円、パン食べ放題、京都の名店と二つ星のフレンチで修業、シェフが一人で調理、マダム、声を落とすよう注意されることも、一斉スタート。',
      confidence: 'medium', sources: [TB, R + 'B452460740/', R + 'B457858207/', R + 'B499231112/', R + 'B500786957/', R + 'B502746698/', R + 'B503334940/', R + 'B506542485/', R + 'B509476191/', R + 'B522736207/', R + 'B527477411/', R + 'B531829198/', R + 'B535613268/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Reservation only; arrive on time; quiet room; one drink each; cards accepted.' },
    safety: { ...SAFETY0, staff_allergy_handling: [{ text: 'The restaurant asks for allergies in advance (no same-day requests) and states it cannot accommodate seafood, dairy, wheat or almond allergies, vegetarians, or many exclusions.', source: TB, verified: TODAY }] },
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区富小路通蛸薬師下ル高宮町585 若葉ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.005554, 135.765123), moved ~5 m north to 35.005599 because kyoto_sushi_obino (35.005543, 135.765131; same 若葉ビル, 1F) sat 1.4 m from that point; cross-checked: GSI 京都府京都市中京区高宮町585番地 (lot) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B457858207/', R + 'B499231112/', R + 'B502746698/'],
    price_note: 'Course prices from January–November 2025 reviews; plus 8% service (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Dinner course', '¥14,700', 'Course', 'no', 'no', 'November 2025.', 'dinner_course'),
      it('', '', 'Wine pairing, 6 glasses', '¥10,800', 'Drinks', '', '', 'November 2025.', 'wine_pairing'),
      it('', '', 'Lunch course', '¥7,200–12,000', 'Course', 'no', 'no', 'January and April 2025.', 'lunch_course'),
    ] }, {
    cuisine: 'シェフのおまかせのフレンチ。季節の食材と黒毛和牛 (食べログ、2025〜2026年の口コミ)・ディナーコース14,700円、ワインペアリング6種10,800円 (2025年11月)、ランチは7,200円 (2025年1月) や12,000円 (2025年4月)・アミューズ、前菜3品、メイン2品、デザート3品、パンはおかわり自由 (2025年4月)・昆布のジュレの蟹と半熟卵、牡蠣のクリームとキウイのサーモンのほうれん草包み、すずき、Satsuma Nishiki の牛、赤ワインのメイン、秋刀魚、鮑、ロブスター、うなぎ、フォアグラ、鹿、酒粕と柿、ほうじ茶、レンズ豆のデザートなど (2025〜2026年の口コミ)・3〜6杯のワインペアリング',
    neighborhood: '錦市場近くの富小路、2階。京都河原町駅から徒歩6分',
    gf_detail: 'グルテンフリーではない。小麦のアレルギーには対応できないと店が明記している (乳、魚介、アーモンドのアレルギーやベジタリアンも不可、食べログ)。コースにはパンのおかわりもある (2025年4月)。',
    vegan_detail: 'ヴィーガン不可。ベジタリアンや乳のアレルギーには対応できないと店が明記 (食べログ)。魚介、フォアグラ、和牛が中心 (2025〜2026年の口コミ)。',
    notes: '[フレンチ・錦市場、8席の部屋でゆっくり] 富小路から階段を上がった天井の高いグレーの部屋に、テーブル3卓8席。オーナーシェフの Takuya Sawahara さんが一人でコースを作る。小さな前菜が次々に続き、メイン2品、デザート3品。昆布のジュレの蟹、牡蠣のクリームのサーモン、Satsuma Nishiki の牛などに3〜6杯のワインペアリング。2025年末のディナーは14,700円。決まりはしっかり: 予約制、時間厳守、1人1ドリンク、静かに、小麦・乳・ベジタリアンの対応は不可。サービス料8％。',
  });
}

// ================================================================ 佛沙羅館
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26002006/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_bussarakan', name: '佛沙羅館 (Bussarakan)', category: 'OMNI',
    lat: 34.999763, lng: 135.769111, cuisine_type: 'thai',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Thai dishes such as green curry and tom yum may be wheat-free, but soy and oyster sauces, fried dishes, pad Thai and yakisoba are common; no gluten information (2025–26 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options, but most dishes use shrimp, chicken, fish sauce or shrimp-based broth (Tabelog; 2025–26 reviews).',
    hours_raw: 'Lunch 11:30–15:00, dinner 17:00–22:00; closed Wednesday (Tabelog). No reservations (Tabelog). Riverside platform (kawadoko) seats in summer with an ¥800 charge, no charge indoors (Tabelog; October 2025). 56 seats: an 8-seat counter and 12 sunken seats around an irori downstairs, 36 seats in three private rooms upstairs, 30 on the summer platform (Tabelog). Spice is mild by default; ask for Thai-style heat (November 2025; March 2026). Smoking allowed; cards (Tabelog). In a townhouse on a side alley of Kiyamachi north of Matsubara, by the Kamo River; 6 min from Kyoto Kawaramachi Stn (Tabelog; 2025–26 reviews).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kiyamachi north of Matsubara, on the Kamo River — 6 min from Kyoto Kawaramachi Stn',
    cuisine: 'Thai cooking in a Kyoto townhouse (2025–26 reviews) · lunch sets such as gapao rice with a rice-noodle salad and dessert; lunch course of appetizers, fried dishes, tom yum kung, a choice of green curry, fried rice or yakisoba, and dessert · dinner courses with a three-tier appetizer stand, tom yum kung with rich shrimp broth, pad Thai or green curry to finish · à la carte: yum woon sen, som tum, tom kha gai in a hot pot, pad prik pao shrimp, fish with pad pong curry, khao soi, Thai-style kara-age · Thai beer (2025–26 reviews)',
    website: null, gmaps: gm('佛沙羅館 京都 木屋町'), menu_url: TB + 'dtlmenu/',
    notes: "[Thai · Kiyamachi-Matsubara, Thai food in a Kyoto townhouse by the river] A Thai restaurant in an old townhouse down a side alley off Kiyamachi, with an irori counter, tatami rooms upstairs looking at the Kamo River, and a riverside platform in summer (¥800 charge). Lunch sets of gapao or green curry are good value; dinner courses bring tom yum kung, pad Thai and green curry, or order à la carte — tom kha gai, khao soi, som tum. Spice is gentle unless you ask for Thai heat. A Japanese owner fronts the house with a Thai chef, per one reviewer. No bookings; closed Wednesday.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed) with a Thai chef, per an August 2026 review'], origin: null,
      background: 'An August 2026 reviewer describes a combination of traditional Japanese service by the owner and a Thai chef; a January 2026 reviewer was welcomed by a friendly master. Reviewers note the seasoning is adjusted for Japanese tastes, with authentic heat on request.',
      philosophy: null, specialty: 'Tom yum kung; green curry; khao soi.',
      anecdotes: [
        { text: '"The menu mentions that if you ask for a spicier Thai-style dish, they can make it hotter." — November 2025.', source: R + 'B516731596/' },
        { text: 'An April 2026 diner found the portions a little small for sharing but the tom yum kung excellent.', source: R + 'B528006693/' },
        { text: 'A March 2026 diner was pleased the kitchen swapped a ginger chicken stir-fry for Thai-style kara-age.', source: R + 'B528000989/' },
      ],
      japanese_sources_summary: '食べログ: タイ料理・創作料理・居酒屋、下京区木屋町通松原上ル美濃屋町173-1、阪急京都河原町駅1番出口から徒歩6分、月火木金土日 11:30〜15:00・17:00〜22:00、水曜休み、予約不可、56席 (1階カウンター8、囲炉裏の掘りごたつ12、2階36席・個室3、夏の床30席)、喫煙可、カード可、ベジタリアンメニューあり。口コミ (2025年8月〜2026年9月、英語): 町家のタイ料理、鴨川沿い、床席は800円のチャージ、ガパオのランチ、トムヤムクン、グリーンカレー、パッタイ、カオソーイ、トムカーガイ、ヤムウンセン、辛さは控えめで本場の辛さも可、日本人の店主とタイ人の料理人。',
      confidence: 'medium', sources: [TB, R + 'B511129440/', R + 'B513426875/', R + 'B515228054/', R + 'B516731596/', R + 'B516956252/', R + 'B521376687/', R + 'B521380525/', R + 'B524724519/', R + 'B528000989/', R + 'B528006693/', R + 'B534109759/', R + 'B536303315/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'No bookings; ask for Thai-style heat if you want it; cards accepted; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区木屋町通松原上ル美濃屋町173-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (34.999763, 135.769111); cross-checked: GSI 京都府京都市下京区美濃屋町173番地 (lot) 52m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B515228054/'],
    price_note: 'No prices read except the ¥800 platform charge (October 2025).', last_checked: TODAY, items: [
      it('', '', 'Gapao lunch set', '', 'Lunch', 'ask', 'no', 'October 2025; March 2026.', 'gapao_lunch'),
      it('', '', 'Tom yum kung', '', 'Soup', 'ask', 'no', '2025–26.', 'tom_yum_kung'),
      it('', '', 'Green curry', '', 'Curry', 'ask', 'no', '2025–26.', 'green_curry'),
      it('', '', 'Khao soi', '', 'Noodles', 'no', 'no', 'November 2025.', 'khao_soi'),
    ] }, {
    cuisine: '京町家のタイ料理 (2025〜2026年の口コミ)・ランチ: 春雨サラダとデザート付きのガパオライスなど、前菜、揚げ物、トムヤムクン、グリーンカレー・炒飯・焼きそばから選ぶ一品とデザートのランチコース・夜のコース: 三段の前菜、海老の濃いスープのトムヤムクン、締めはパッタイかグリーンカレー・アラカルト: ヤムウンセン、ソムタム、鍋のトムカーガイ、Pad Prik Pao の海老、Pad Pong Curry の魚、カオソーイ、タイ風の唐揚げ・タイビール (2025〜2026年の口コミ)',
    neighborhood: '松原の北の木屋町、鴨川沿い。京都河原町駅から徒歩6分',
    gf_detail: '要確認。グリーンカレーやトムヤムクンは小麦なしかもしれないが、醤油やオイスターソース、揚げ物、パッタイ、焼きそばも多い。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。食べログにはベジタリアンメニューありとあるが、多くの料理に海老、鶏、ナンプラー、海老のスープを使う (食べログ、2025〜2026年の口コミ)。',
    notes: '[タイ料理・木屋町松原、鴨川沿いの町家のタイ料理] 木屋町の路地を入った古い町家のタイ料理店。囲炉裏のカウンター、鴨川を望む2階の座敷、夏は川床 (チャージ800円)。ランチのガパオやグリーンカレーは手ごろ。夜はトムヤムクン、パッタイ、グリーンカレーのコースか、トムカーガイ、カオソーイ、ソムタムをアラカルトで。辛さは控えめで、頼めば本場の辛さに。口コミによれば日本人の店主とタイ人の料理人。予約不可、水曜休み。',
  });
}

// ================================================================ カイカドウ カフェ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26027350/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['08:00', '16:00']); const WE = day(['08:00', '17:00']);
  put({
    id: 'kyoto_kaikado_cafe', name: 'カイカドウ カフェ (Kaikado Cafe)', category: 'OMNI',
    lat: 34.989911, lng: 135.764407, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Cheesecakes and toast are wheat-based; karaki mochi and red-bean sweets may not be, but no ingredient lists are published (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Teas and black coffee suit; the cheesecakes use cheese, and other sweets are not described ingredient by ingredient (2026 reviews).',
    hours_raw: 'Monday–Friday 8:00–16:00; Saturday and Sunday 8:00–17:00 (Tabelog); a September 2026 visitor found it closes early. Reservations accepted (Tabelog); a reviewer’s friend booked the upstairs room (September 2026). 31 seats: 14 at tables, 7 at the counter, 10 on the terrace (no smoking there either) (Tabelog). Cards (JCB, AMEX), e-money and QR payments (Tabelog). Tea caddies and crafts on display and for sale (2026 reviews). On Kawaramachi-dori north of Shichijo, a bus stop to Kyoto Station in front; 320 m from Shichijo Stn (Tabelog; August 2026).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kawaramachi-dori north of Shichijo — 5 min from Shichijo Stn',
    cuisine: 'Café of Kaikado, the old Kyoto tea-caddy maker, in a registered tangible cultural property (2026 reviews) · Kaikado cheesecake, shaped after its tea caddies and made with cheese from Nasu Highland, with a drink ¥2,050 (August–October 2026); Basque cheesecake set · seasonal tea set with karaki mochi ¥1,700, with a second infusion on request (August 2026) · monaka set, a set served in a tea caddy, ogura and an toast (2026 reviews) · hand-dripped coffee, cold brew ¥1,150, iced coffee ¥950, café au lait, matcha latte, cold-brewed green tea, seasonal "Iware" tea (2026 reviews)',
    website: null, gmaps: gm('カイカドウ カフェ 京都 七条'), menu_url: null,
    notes: "[Café · Shichijo, tea-caddy maker's café in an old tram building] The café of Kaikado, the venerable Kyoto maker of hand-made tea caddies, in a registered cultural property that reviewers describe as a former streetcar building near Shichijo: high ceilings, big windows, wooden shelves of caddies for sale. Try the Kaikado cheesecake shaped like a caddy (set ¥2,050), the seasonal tea with karaki mochi (¥1,700, second steep included) or an early-morning an toast — it opens at 8:00. Drinks are priced high; the room is calm.",
    chef_bio: { chef_name: null, roles: ['Café of the tea-caddy maker Kaikado; no staff named'], origin: null,
      background: 'Reviewers in 2026 describe a café run by Kaikado, a long-established Kyoto tea-caddy maker, in a nearly 100-year-old Western-style building registered as a tangible cultural property and renovated from an old streetcar depot (August–October 2026). Tabelog Cafe WEST "Tabelog 100" 2025.',
      philosophy: null, specialty: 'Kaikado cheesecake; seasonal tea with karaki mochi.',
      anecdotes: [
        { text: 'An August 2026 visitor found the ¥1,150 cold brew pricey for a standard glass and its taste close to a well-known chain’s.', source: R + 'B533682296/' },
        { text: 'A September 2026 visitor waited a long time between a companion’s order and the reviewer’s, so the coffee went cool.', source: R + 'B536143849/' },
        { text: '"The excitement of opening the tea canister was irresistible!" — October 2026.', source: R + 'B537472138/' },
      ],
      japanese_sources_summary: '食べログ: カフェ、下京区河原町通七条上ル住吉町352、七条駅から320m、月〜金 8:00〜16:00、土日 8:00〜17:00、予約可、31席 (テーブル14、カウンター7、テラス10、テラスも禁煙)、カード (JCB・AMEX)・電子マネー・QR 可、カフェ WEST 百名店 2025。口コミ (2026年7〜10月、英語): 茶筒の Kaikado のカフェ、登録有形文化財の建物、市電の車庫を改装、Kaikado チーズケーキ (Nasu の高原のチーズ) のセット2,050円、Karaki Mochi と季節のお茶のセット1,700円、水出しコーヒー1,150円、アイスコーヒー950円、カフェオレ、抹茶ラテ、あんトースト、茶筒に入ったセット、早く閉まる。',
      confidence: 'medium', sources: [TB, R + 'B230276352/', R + 'B532674260/', R + 'B533314144/', R + 'B533682296/', R + 'B533704627/', R + 'B533804735/', R + 'B535142569/', R + 'B536143849/', R + 'B536992352/', R + 'B537334366/', R + 'B537453835/', R + 'B537472138/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the table; tea caddies for sale; cards (JCB, AMEX) and QR accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区河原町通七条上ル住吉町352',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026; Cafe WEST Tabelog 100 2025.' },
    pin_source: `Tabelog ${TB} (34.989911, 135.764407); cross-checked: GSI 京都府京都市下京区住吉町352番地 (lot) 18m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B533314144/', R + 'B533682296/', R + 'B537334366/'],
    price_note: 'Prices from August–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Kaikado cheesecake with a drink', '¥2,050', 'Sweets', 'no', 'no', 'August 2026.', 'kaikado_cheesecake'),
      it('', '', 'Seasonal tea with karaki mochi', '¥1,700', 'Sweets', 'ask', 'ask', 'August 2026.', 'karaki_mochi_set'),
      it('', '', 'Cold brew coffee', '¥1,150', 'Drinks', '', '', 'August 2026.', 'cold_brew'),
      it('', '', 'Iced coffee', '¥950', 'Drinks', '', '', 'October 2026.', 'iced_coffee'),
    ] }, {
    cuisine: '京都の茶筒の老舗 Kaikado のカフェ。登録有形文化財の建物 (2026年の口コミ)・茶筒をかたどり Nasu の高原のチーズを使う Kaikado チーズケーキ、ドリンク付き2,050円 (2026年8〜10月)、バスクチーズケーキのセット・Karaki Mochi と季節のお茶のセット1,700円、頼めば二煎目も (2026年8月)・最中のセット、茶筒に入ったセット、小倉トースト・あんトースト (2026年の口コミ)・ハンドドリップのコーヒー、水出しコーヒー1,150円、アイスコーヒー950円、カフェオレ、抹茶ラテ、水出しの緑茶、季節の Iware 茶 (2026年の口コミ)',
    neighborhood: '七条の北の河原町通。七条駅から徒歩5分',
    gf_detail: '要確認。チーズケーキやトーストは小麦を使う。Karaki Mochi やあんの甘味は小麦なしかもしれないが、原材料は公開されていない (2026年の口コミ)。',
    vegan_detail: '要確認。お茶やブラックのコーヒーは合う。チーズケーキはチーズを使い、ほかの甘味は原材料が書かれていない (2026年の口コミ)。',
    notes: '[カフェ・七条、茶筒の老舗のカフェ] 手作りの茶筒で知られる京都の老舗 Kaikado のカフェ。登録有形文化財の建物で、口コミによれば古い市電の車庫を改装したもの。高い天井、大きな窓、木の棚には茶筒が並び買うこともできる。茶筒の形の Kaikado チーズケーキ (セット2,050円)、Karaki Mochi と季節のお茶 (1,700円、二煎目付き)、朝8時からのあんトーストを。飲み物は高めだが、店内は落ち着いている。',
  });
}

// ================================================================ あごつゆしゃぶしゃぶ 山福 本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26019742/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '24:00']);
  put({
    id: 'kyoto_agotsuyu_yamafuku', name: 'あごつゆしゃぶしゃぶ 山福 本店 (Agotsuyu Shabushabu Yamafuku Honten)', category: 'OMNI',
    lat: 35.007112, lng: 135.770799, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The broth is grilled flying-fish dashi with soy milk, the dipping sauce is dashi-based, and the courses finish with Chinese-style noodles or soba; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork and beef shabu-shabu in flying-fish broth (2026 reviews).',
    hours_raw: '17:00–24:00 daily; closed irregularly (Tabelog). Reservations accepted, online or by phone; a two-hour limit on all seats; bookings lapse 15 minutes after the time without notice (Tabelog); walk-ins can find it full (August 2026). Shoes off at the entrance; many steps inside, so guests with mobility issues should take note (Tabelog). 36 seats at a counter, sofas, tatami and sunken tables; private rooms; non-smoking; cards (Tabelog). Staff spoke English to overseas guests (October 2026). Down an alley on Kiyamachi south of Sanjo, toward Pontocho; 5 min from Sanjo and Kyoto Kawaramachi Stns (Tabelog; 2026 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi south of Sanjo, toward Pontocho — 5 min from Sanjo Stn',
    cuisine: 'Pork shabu-shabu in a broth of whole grilled flying fish (ago) with soy milk (2026 reviews) · Mochi pork belly, "Baumkuchen" pork loin from pigs fed Club Harie baumkuchen, and A5 Omi beef chuck flap, with mushrooms, Yoshino kuzukiri and as much sliced white leek as you like (August–September 2026) · noodles to finish, custom-made by an old Kyoto soba maker; matcha ice cream from Gion Tsujiri (August 2026) · courses: Pontocho ¥5,250, a ¥6,000 course with free-flow drinks, Yamafuku ¥6,500, Kamogawa (most popular), a ¥9,000 course with free-flow drinks; appetizers such as Aomori grilled mackerel and tuna carpaccio (August–October 2026)',
    website: null, gmaps: gm('あごつゆしゃぶしゃぶ 山福 本店'), menu_url: TB + 'dtlmenu/',
    notes: "[Shabu-shabu · Kiyamachi, pork in flying-fish broth] A shoes-off shabu-shabu house down an alley off Kiyamachi near Sanjo, where a whole grilled flying fish flavours the broth before soy milk goes in. Swish three meats — mochi pork belly, 'Baumkuchen' pork loin and A5 Omi beef — with plenty of free white leek, then finish with custom noodles and Gion Tsujiri matcha ice cream. Courses run ¥5,250–9,000, some with free-flow drinks. Young, chatty staff, English spoken. Two-hour limit; open daily 17:00–24:00.",
    chef_bio: { chef_name: null, roles: ['Restaurant; no staff named in the sources'], origin: null,
      background: 'Reviewers in 2026 describe young, friendly, humorous staff, English spoken with overseas guests (October 2026), and noodles made to order by a long-established Kyoto soba shop (August 2026). Tabelog Hot Pot "Tabelog 100" 2024.',
      philosophy: null, specialty: 'Agotsuyu pork shabu-shabu.',
      anecdotes: [
        { text: '"The staff had a great sense of humor. I won’t say too much to avoid spoilers." — August 2026.', source: R + 'B534183205/' },
        { text: 'An October 2026 diner arriving at 21:30 found every other guest was from overseas and the staff speaking English.', source: R + 'B536959323/' },
        { text: 'An October 2026 diner found the portions a little small but everything delicious.', source: R + 'B538047623/' },
      ],
      japanese_sources_summary: '食べログ: しゃぶしゃぶ・豚しゃぶ・居酒屋、中京区木屋町通三条下る材木町187、阪急河原町駅・京阪三条駅・祇園四条駅から徒歩5分、毎日17:00〜24:00、不定休、予約可 (全席2時間制、連絡なく15分遅れるとキャンセル扱い)、入口で靴を脱ぐ、店内は段差が多い、36席、個室、禁煙、カード可、すき焼き・しゃぶしゃぶ百名店 2024。口コミ (2026年8〜10月、英語): 焼いたあご (飛魚) の出汁と豆乳のしゃぶしゃぶ、Mochi Pork のバラ、Club Harie のバウムクーヘンで育った豚のロース、Omi の A5 の牛、白ねぎは好きなだけ、老舗のそば屋の特製の中華麺、Gion Tsujiri の抹茶アイス、コース5,250円・6,000円・6,500円・9,000円、英語で対応、若くにぎやかなスタッフ。',
      confidence: 'medium', sources: [TB, R + 'B534183205/', R + 'B534598100/', R + 'B534836251/', R + 'B535832415/', R + 'B535841784/', R + 'B536518678/', R + 'B536959323/', R + 'B537571296/', R + 'B537622864/', R + 'B537692887/', R + 'B538047623/', R + 'B538117719/'] },
    cultural_comfort: { level: 'english', note: 'Staff spoke English with overseas guests (October 2026); shoes off; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区木屋町通三条下る材木町187',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.007112, 135.770799); cross-checked: GSI 京都府京都市中京区材木町187番地 (lot) 27m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534836251/', R + 'B536959323/', R + 'B537571296/', R + 'B536518678/'],
    price_note: 'Course prices from August–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Pontocho course (appetizer, agotsuyu shabu-shabu of three meats, noodles, matcha ice cream)', '¥5,250', 'Course', 'ask', 'no', 'August 2026.', 'pontocho_course'),
      it('', '', 'Course with free-flow drinks', '¥6,000', 'Course', 'ask', 'no', 'October 2026.', 'nomihodai_6000'),
      it('', '', 'Yamafuku course', '¥6,500', 'Course', 'ask', 'no', 'October 2026.', 'yamafuku_course'),
      it('', '', 'Course with free-flow drinks', '¥9,000', 'Course', 'ask', 'no', 'September 2026.', 'nomihodai_9000'),
    ] }, {
    cuisine: '焼いたあご (飛魚) を丸ごと使った出汁に豆乳を合わせた豚しゃぶ (2026年の口コミ)・Mochi Pork のバラ、Club Harie のバウムクーヘンで育った豚のロース、Omi の A5 の牛のザブトン、きのこ、Yoshino の葛きり、好きなだけ切ってくれる白ねぎ (2026年8〜9月)・締めは京都の老舗のそば屋の特製の麺、Gion Tsujiri の抹茶アイス (2026年8月)・コース: Pontocho コース5,250円、飲み放題付き6,000円、山福コース6,500円、一番人気の Kamo River コース、飲み放題付き9,000円。前菜に Aomori の焼き鯖やまぐろのカルパッチョ (2026年8〜10月)',
    neighborhood: '三条の南の木屋町、先斗町寄り。三条駅から徒歩5分',
    gf_detail: '要確認。焼いたあごの出汁に豆乳のスープ、つけだれも出汁で、締めは中華麺かそば。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。あごの出汁の豚と牛のしゃぶしゃぶ (2026年の口コミ)。',
    notes: '[しゃぶしゃぶ・木屋町、あごの出汁の豚しゃぶ] 三条近くの木屋町から路地を入る、靴を脱いで上がるしゃぶしゃぶの店。焼いたあごを丸ごと使った出汁に豆乳を加え、Mochi Pork のバラ、バウムクーヘンの豚のロース、Omi の A5 の牛の3種をしゃぶしゃぶ。白ねぎは好きなだけ、締めは特製の麺と Gion Tsujiri の抹茶アイス。コースは5,250〜9,000円、飲み放題付きも。若く気さくなスタッフで英語も通じる。2時間制、毎日17時〜24時。',
  });
}

save();
