// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 29.
//   + MR.MAURICE'S ITALIAN (Ace Hotel Kyoto's rooftop Italian-American osteria, menu by Marc Vetri; core list)
//   + 亀山学 Kameyama Manabu (one-man sake-and-fish counter, no first-time guests; core list)
//   + チドリアシ Chidoriashi (Kyoto oden and sake izakaya south of Nijo Castle; notable list)
//   + オールデイダイニング 弥栄 All Day Dining Yasaka (Imperial Hotel Kyoto, opened March 2026; notable list)
//   Picked 2026-11-06 after batch 28. `queue.mjs kyoto-missed next core 200`: ミスター モーリスズ イタリアン 26034349, 亀山学
//   26029063. `next notable 200`: チドリアシ 26005483, オールデイダイニング 弥栄 26044579. Same-name check first, same brand
//   or operator only: MR.MAURICE'S is one of the Ace Hotel Kyoto's own restaurants (KOSA kyoto_kosa_ace_hotel and PIOPIKO
//   kyoto_piopiko_ace_hotel are in data as separate restaurants); 弥栄 is the Imperial Hotel Kyoto's own all-day restaurant
//   (hotel own brands, drafted per the brief); no other 亀山学 or チドリアシ in our crawls. None of the four is in
//   data/kyoto.json: grep by name and address (車屋町245 3F, 姥柳町192, 大文字町233, 祇園町南側570-289) found none.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-29');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ MR.MAURICE'S ITALIAN
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26034349/'; const R = TB + 'dtlrvwlst/';
  const WK = day(['11:30', '15:00'], ['17:30', '22:00']); const WE = day(['11:30', '22:00']);
  put({
    id: 'kyoto_mr_maurices_italian_ace', name: 'ミスター モーリスズ イタリアン (MR.MAURICE\'S ITALIAN)', category: 'OMNI',
    lat: 35.009526, lng: 135.759840, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Wood-fired pizza, homemade pasta, focaccia with cheese fondue and tiramisu; no gluten information (Tabelog; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A Kyoto-vegetable pizza and salads appear, but most dishes use cheese, sausage, salami, beef or seafood; no vegan information (2026 reviews).',
    hours_raw: 'Weekdays and the day before a holiday 11:30–15:00 and 17:30–22:00; weekends and holidays 11:30–22:00 with tea 15:00–17:30; last order 21:30; open year-round; two dinner sittings on 24–25 December and 30 December–2 January (Tabelog). Reservations accepted, phone 11:30–21:30 (Tabelog). A 10% service charge, included in displayed prices (Tabelog original サービス料10％（表示価格に含む）). 170 seats: 96 indoors incl. a 12-seat bar counter, and a rooftop of 74 with an 18-seat bar; partitions but no private rooms; non-smoking indoors (Tabelog). Dogs welcome on the rooftop terrace (Tabelog; October 2026). Cards (Tabelog). 3F of Ace Hotel Kyoto in Shinpuhkan, directly connected to Karasuma Oike Stn (Tabelog).',
    hours: { 0: WK, 1: WK, 2: WK, 3: WK, 4: WK, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinpuhkan, Ace Hotel Kyoto 3F — direct from Karasuma Oike Stn',
    cuisine: 'American-style Italian osteria of Ace Hotel Kyoto with a rooftop bar, menu supervised by the chef Marc Vetri: wood-fired pizza, homemade pasta, courses and all-you-can-drink plans (Tabelog) · lunch sets: pasta (e.g. rigatoni with Fiorella sausage ragù) or pizza with Kyoto vegetables and Hokkaido mozzarella, salad, tiramisu (August 2026); a ¥4,050 lunch with focaccia and cheese fondue, cacio e pepe, beef tagliata (September 2026) · fried eggplant salad, cream pasta, salami and Kyoto-vegetable half-and-half pizza, grilled salmon and lobster (September 2026); five-course dinners with drinks (September 2026) · beer-terrace menu on the rooftop (September 2026) · about ¥3,000–8,000 (Tabelog; 2026 reviews)',
    website: null, gmaps: gm('MR.MAURICE\'S ITALIAN Ace Hotel Kyoto'), menu_url: null,
    notes: '[Italian · Ace Hotel Kyoto, rooftop terrace by Karasuma Oike] The Ace Hotel Kyoto\'s big, casual Italian-American osteria, with a Marc Vetri menu: wood-fired pizzas with Kyoto vegetables, homemade pastas such as cacio e pepe and rigatoni with sausage ragù, tagliata and tiramisu — plus a breezy rooftop bar and terrace where dogs are welcome. Lunch sets and courses; prices include 10% service. One September 2026 guest found the staff cold; most praise the service. Open daily.',
    chef_bio: { chef_name: null, roles: ['Menu supervised by Marc Vetri (Tabelog)', 'Hotel kitchen and service staff'], origin: null,
      background: 'Per Tabelog: Mr. Maurice\'s Italian at Ace Hotel Kyoto, supervised by the Italian chef Mark Vetri (as Tabelog writes it), offers wood-fired pizza, homemade pasta and courses in a refined room and an open rooftop. An October 2026 reviewer notes the building, over 100 years old, was redesigned by Kengo Kuma for Ace Hotel, and that course prices have risen over 40% since opening.',
      philosophy: 'A modern twist on classic flavours (Tabelog).', specialty: 'Wood-fired pizza; cacio e pepe.',
      anecdotes: [
        { text: 'An October 2026 guest brought the dog Flora to the rooftop terrace and found many other dogs there too.', source: R + 'B538435574/' },
        { text: 'A September 2026 visitor came for a Harlow ice-cream pop-up, found the staff "rather cold", and questioned ¥1,500 for a small double scoop.', source: R + 'B536238070/' },
        { text: '"Although the course prices have increased by over 40% since the opening, the beautiful space designed and rebranded by Kengo Kuma ... offers a wonderful harmony" — October 2026.', source: R + 'B537269386/' },
      ],
      japanese_sources_summary: '食べログ: イタリアン・バー・パスタ、中京区車屋町245-2 Ace Hotel Kyoto 3F、烏丸御池駅直結、平日・祝前日 11:30〜15:00・17:30〜22:00、土日祝 11:30〜22:00 (ティー15:00〜17:30)、L.O.21:30、無休、予約可、サービス料10% (表示価格に含む)、170席 (屋内96、ルーフトップ74)、禁煙、カード可、Mark Vetri 監修のアメリカンスタイルのイタリアン、薪窯のピッツァ、自家製パスタ、コース、飲み放題、ルーフトップで犬連れも可。口コミ (2026年8月〜10月、英語): ランチのパスタセット (ソーセージのラグーのリガトーニ)、京野菜と Hokkaido のモッツァレラのピッツァ、ティラミス、4,050円のランチ (フォカッチャのチーズフォンデュ、カチョエペペ、牛のタリアータ)、茄子のサラダ、クリームパスタ、サラミと京野菜のハーフ&ハーフ、鮭とオマールのグリル、5品のコース、ルーフトップのビアテラス、犬連れのテラス、スタッフの対応が冷たかったとの声、開業時からコースが4割以上値上がり、建物は Kengo Kuma がリデザイン (口コミ)。',
      confidence: 'medium', sources: [TB, R + 'B534348107/', R + 'B535038784/', R + 'B535164471/', R + 'B535266158/', R + 'B536094108/', R + 'B536238070/', R + 'B536248023/', R + 'B536621679/', R + 'B537269386/', R + 'B538435574/'] },
    cultural_comfort: { level: 'english', note: 'International hotel restaurant; prices include 10% service; dogs welcome on the rooftop; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区車屋町245-2 Ace Hotel Kyoto 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.009526, 135.759840); cross-checked: GSI 京都府京都市中京区車屋町245番地 (lot) 37 m; kyoto_kosa_ace_hotel (same hotel) is 34 m away and kyoto_piopiko_ace_hotel 41 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535038784/', R + 'B534348107/'],
    price_note: 'One lunch price from a September 2026 review; prices include 10% service.', last_checked: TODAY, items: [
      it('', '', 'Lunch course (focaccia with cheese fondue, pasta, main, dessert)', '¥4,050', 'Lunch', 'no', 'no', 'September 2026, online booking.', 'lunch_course'),
      it('', '', 'Cacio e pepe', '', 'Pasta', 'no', 'no', 'September 2026.', 'cacio_e_pepe'),
      it('', '', 'Pizza with Kyoto vegetables and Hokkaido mozzarella', '', 'Pizza', 'no', 'no', 'August–September 2026.', 'kyoto_veg_pizza'),
    ] }, {
    cuisine: 'ルーフトップバーのある Ace Hotel Kyoto のアメリカンスタイルのイタリアン、メニューはシェフ Marc Vetri の監修: 薪窯のピッツァ、自家製パスタ、コース、飲み放題 (食べログ)・ランチセット: パスタ (例: ソーセージのラグーのリガトーニ) か京野菜と Hokkaido のモッツァレラのピッツァ、サラダ、ティラミス (2026年8月)、フォカッチャのチーズフォンデュ、カチョエペペ、牛のタリアータの4,050円のランチ (2026年9月)・揚げ茄子のサラダ、クリームパスタ、サラミと京野菜のハーフ&ハーフ、鮭とオマールのグリル (2026年9月)、ドリンク付き5品のディナー (2026年9月)・ルーフトップのビアテラスのメニュー (2026年9月)・3,000〜8,000円ほど (食べログ、2026年の口コミ)',
    neighborhood: '新風館、Ace Hotel Kyoto の3階。烏丸御池駅直結',
    gf_detail: '要確認。薪窯のピッツァ、自家製パスタ、フォカッチャのチーズフォンデュ、ティラミス。グルテンの情報はない (食べログ、2026年の口コミ)。',
    vegan_detail: '要確認。京野菜のピッツァやサラダはあるが、多くの料理にチーズ、ソーセージ、サラミ、牛肉、魚介を使う。ヴィーガンの情報はない (2026年の口コミ)。',
    notes: '[イタリアン・Ace Hotel Kyoto、烏丸御池のルーフトップ] Ace Hotel Kyoto の大きくカジュアルなイタリアン。Marc Vetri 監修のメニューで、京野菜の薪窯ピッツァ、カチョエペペやソーセージのラグーのリガトーニなどの自家製パスタ、タリアータ、ティラミス。風の通るルーフトップのバーとテラスは犬連れも可。ランチセットとコース、価格にサービス料10%込み。2026年9月の客はスタッフが冷たかったと書いているが、接客をほめる声が多い。無休。',
  });
}

// ================================================================ 亀山学
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26029063/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'kyoto_kameyama_manabu', name: '亀山学 (Kameyama Manabu)', category: 'OMNI',
    lat: 35.006208, lng: 135.757164, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sashimi, tempura and rice dishes such as unadon, with soy and dashi; no gluten information (2023–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish-and-sake counter — sashimi, crab, eel and tempura (2023–2026 reviews).',
    hours_raw: 'Tabelog lists daily 6:00–22:00, but reviewers describe evenings of 18:30–22:00 (April 2026) and a weekday lunch for regulars (2023–2024); hours may change (Tabelog). No first-time customers at lunch or dinner (Tabelog remarks) — reviewers came with someone who knows the shop (2024–2026). Evening courses with all-you-can-drink sake, e.g. the 2-hour "Go Go" course ¥5,500 (June 2025) or ¥9,500 cash (April 2026). Cash only (Tabelog). 14 counter seats; non-smoking (Tabelog). No sign, just a nameplate (October 2023). On Takoyakushi west of Muromachi; 5 min walk from Karasuma or Shijo stations (Tabelog). Opened 22 April 2016 (Tabelog).',
    hours: {}, hours_status: 'varies',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Takoyakushi west of Muromachi — 5 min walk from Karasuma Stn',
    cuisine: 'One-man counter of fish and sake: evening courses with self-serve all-you-can-drink from over 40 sakes, many from Yamagata (2023–2026 reviews) · appetisers, thick-cut sashimi, a whole crab, crisp tempura (2024–2026 reviews) · lunch for regulars, once famous for an oversized unadon and a Thursday "Tonio rice" (2023–2024) · eel tempura served at the street stall on a festival evening (July 2026) · about ¥5,500–9,500 a head in the evening (2025–2026 reviews)',
    website: null, gmaps: gm('亀山学 京都 蛸薬師'), menu_url: null,
    notes: '[Sake counter · Takoyakushi Muromachi, regulars and friends of regulars] An unmarked fourteen-seat counter near Shijo Karasuma where owner Mr. Kameyama cooks and serves alone: thick sashimi, a whole crab, crisp tempura, with self-pour all-you-can-drink from over forty sakes, about ¥5,500–9,500 in cash. First-time guests are not accepted — you need to come with someone who knows the shop. A Tigers-fan, regulars\' kind of place.',
    chef_bio: { chef_name: null, roles: ['Owner, called Mr. Kameyama or Mr. Manabu by reviewers, who runs the shop alone'], origin: null,
      background: 'Per Tabelog: opened 22 April 2016; first-time customers are not accepted at lunch or dinner. A January 2024 reviewer explains that lunch turns away first-timers because the owner runs everything alone; reviewers address the owner as "Mr. Manabu" (March 2024) and "Mr. Kameyama" (June 2025), and describe a sake list of over 40 brands, many from Yamagata (April 2026), and a Tigers-supporting crowd (August 2025).',
      philosophy: null, specialty: 'All-you-can-drink sake courses; thick sashimi.',
      anecdotes: [
        { text: '"Finally! Finally! Finally! I was able to visit in the evening!! Thank you, my husband." — March 2024, on a shop that turns away first-timers.', source: R + 'B474336610/' },
        { text: 'A June 2025 guest watched the owner, Mr. Kameyama, line up an impressive row of sake bottles from the fridge at the start of the "Go Go" course.', source: R + 'B509112297/' },
        { text: '"I personally prefer to savor my drinks with care, paying attention to the glassware and sake vessels." — September 2023, on the self-pour sake that warms as it waits.', source: R + 'B520840761/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・日本料理・寿司、中京区蛸薬師室町西入る姥柳町192、阪急烏丸駅・地下鉄四条駅から徒歩5分、営業時間の表記は毎日 6:00〜22:00、現金のみ、14席 (カウンター)、禁煙、2016年4月22日オープン、昼も夜も一見客は不可。口コミ (2023年9月〜2026年7月、英語): 看板はなく表札だけ、店主一人で営む、ランチは常連向け (特大の鰻丼、木曜の「Tonio Rice」)、夜は18:30〜22:00、日本酒40種以上 (山形の酒が多い) の飲み放題のコース、「Go Go」コース5,500円 (2025年6月)、現金9,500円 (2026年4月)、厚切りのお造り、蟹一杯、さくさくの天ぷら、祭りの夜の屋台で鰻の天ぷら、タイガースのファン。',
      confidence: 'medium', sources: [TB, R + 'B426814144/', R + 'B472161251/', R + 'B474336610/', R + 'B481250510/', R + 'B509112297/', R + 'B512258937/', R + 'B520840761/', R + 'B526795710/', R + 'B532378867/', R + 'B534758231/'] },
    cultural_comfort: { level: 'relay', note: 'No first-time guests — come with someone who knows the shop; cash only.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区蛸薬師室町西入る姥柳町192',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.006208, 135.757164); cross-checked: GSI 京都府京都市中京区姥柳町192番地 (lot) 25 m; kyoto_shikata_shokuten (190-2) is 20 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B509112297/', R + 'B526795710/'],
    price_note: 'Course prices from June 2025 and April 2026 reviews; cash only.', last_checked: TODAY, items: [
      it('', '', '"Go Go" course with 2-hour all-you-can-drink sake', '¥5,500', 'Course', 'ask', 'no', 'June 2025.', 'gogo_course'),
      it('', '', 'Evening course with all-you-can-drink sake', '¥9,500', 'Course', 'ask', 'no', 'April 2026, cash.', 'evening_course'),
    ] }, {
    cuisine: '魚と日本酒の店主一人のカウンター: 夜はコースと、40種以上 (山形の酒が多い) の日本酒のセルフの飲み放題 (2023〜2026年の口コミ)・先付、厚切りのお造り、蟹一杯、さくさくの天ぷら (2024〜2026年の口コミ)・常連向けのランチ、かつては特大の鰻丼や木曜の「Tonio Rice」(2023〜2024年)・祭りの夜の屋台で鰻の天ぷら (2026年7月)・夜は1人5,500〜9,500円ほど (2025〜2026年の口コミ)',
    neighborhood: '室町の西、蛸薬師通。烏丸駅から徒歩5分',
    gf_detail: '要確認。醤油やだしを使うお造り、天ぷら、鰻丼などのご飯もの。グルテンの情報はない (2023〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。お造り、蟹、鰻、天ぷらの魚と日本酒のカウンター (2023〜2026年の口コミ)。',
    notes: '[日本酒のカウンター・蛸薬師室町、常連とその連れ] 四条烏丸近くの看板のないカウンター14席。店主の亀山さんが一人で料理し、厚切りのお造り、蟹一杯、さくさくの天ぷらを、40種以上の日本酒のセルフの飲み放題とともに出す。1人5,500〜9,500円ほど、現金のみ。一見客は不可で、店を知る人と一緒に行く必要がある。タイガースファンの常連が集う店。',
  });
}

// ================================================================ チドリアシ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26005483/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '24:00']);
  put({
    id: 'kyoto_chidoriashi_nijo', name: 'チドリアシ (Chidoriashi)', category: 'OMNI',
    lat: 35.010844, lng: 135.750020, cuisine_type: 'oden',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kyoto oden in a sweet-savoury dashi with fish cakes, plus kara-age, eel spring rolls and potato salad; no gluten information (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: oden in dashi with duck and fish cakes, sashimi and meat dishes (2025–2026 reviews).',
    hours_raw: '18:00–24:00; closed Wednesday and some other days each month (Tabelog). Reservations accepted — courses by the day before; seat-only bookings on the day if free (Tabelog). 18 seats: 8 at the counter and 10 on tatami in a back room; private hire up to 20; non-smoking, smoking outside; free Wi-Fi (Tabelog). Cards, e-money and QR (Tabelog). On Oike-dori just south of Nijo Castle, west of Horikawa; 3 min walk from Nijojo-mae Stn exit 3 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Oike-dori south of Nijo Castle — 3 min walk from Nijojo-mae Stn',
    cuisine: 'Oden and sake izakaya under a red lantern (2025–2026 reviews) · Kyoto-style oden in a clear, slightly sweet broth — daikon, konnyaku, hirousu, duck with Kujo negi, tomato oden — with yuzu pepper (2025–2026 reviews) · a much-praised potato salad; seasonal sashimi, grilled dishes, Manganji peppers, eel spring rolls, red snapper, chilled kara-age as a summer starter (2025–2026 reviews) · a broad sake list served hot, warm or cool, with a choice of small cups — e.g. Wakaebisu Plus 006 (2026 reviews) · about ¥4,000–5,000 (Tabelog)',
    website: null, gmaps: gm('チドリアシ 二条城 おでん'), menu_url: null,
    notes: '[Oden · south of Nijo Castle, red lantern and warm sake] A small red-lantern izakaya on Oike-dori in front of Nijo Castle: Kyoto oden in a clear, gently sweet broth (daikon, hirousu, duck with Kujo negi, even tomato), a famous potato salad, seasonal sashimi and eel spring rolls, with a broad sake list warmed to order and poured into a cup of your choice. Friendly owner and staff who chat and pour; open to midnight. About ¥4,000–5,000. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed) and staff'], origin: null,
      background: 'Reviewers in 2025–2026 describe a popular izakaya south of Nijo Castle with warm hospitality from the owner and staff, friendly conversation at the counter, staff who pour for solo guests, and a pot of kanzake warming at the counter.',
      philosophy: null, specialty: 'Kyoto oden; potato salad; warmed sake.',
      anecdotes: [
        { text: 'A September 2025 couple, whose first-choice oden shop was closed, found the staff so friendly; on praising the food, the couple heard it was the second such compliment that day.', source: R + 'B514598117/' },
        { text: '"I was enjoying a bottle of beer by myself, and the staff noticed and kindly poured it for me" — February 2026.', source: R + 'B526319733/' },
        { text: '"When you order Japanese sake, you can choose from a variety of small cups, which is a delightful surprise!" — June 2026.', source: R + 'B530046323/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・肉料理・おでん、中京区堀川御池西入ル大文字町233-6、二条城前駅3番出口から徒歩3分、18:00〜24:00、水曜と月に数日の不定休、予約可 (コースは前日まで、席のみは当日空きがあれば)、18席 (カウンター8、座敷10)、貸切20名まで、禁煙 (外に喫煙所)、Wi-Fi、カード・電子マネー・QR 可。口コミ (2025年9月〜2026年8月、英語): 二条城の南の御池通、赤提灯と「Chi」の字ののれん、京風のおでん (大根、こんにゃく、ひろうす、鴨と九条ねぎ、トマト)、柚子胡椒、評判のポテトサラダ、お造り、焼き物、万願寺とうがらし、鰻の春巻き、真鯛、冷やし唐揚げ、燗酒、選べるお猪口、日本酒が豊富 (Wakaebisu Plus 006 など)、店主とスタッフの温かいもてなし。',
      confidence: 'medium', sources: [TB, R + 'B512559255/', R + 'B514598117/', R + 'B518255044/', R + 'B520680187/', R + 'B521032910/', R + 'B522340426/', R + 'B526319733/', R + 'B529549374/', R + 'B530046323/', R + 'B534586180/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter or tatami; staff recommend dishes; book courses by the day before; cards, e-money and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区堀川御池西入ル大文字町233-6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with October 2026 closing days posted; reviews through August 2026.' },
    pin_source: `Tabelog ${TB} (35.010844, 135.750020); cross-checked: GSI 京都府京都市中京区大文字町233番地 (lot) 46 m; nearest Kyoto record 215 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534586180/', R + 'B529549374/'],
    price_note: 'No menu prices read; about ¥4,000–5,000 (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Kyoto-style oden (daikon, hirousu, duck and Kujo negi)', '', 'Oden', 'ask', 'no', 'August 2026.', 'oden'),
      it('', '', 'Potato salad', '', 'Small dishes', 'ask', 'ask', 'House favourite.', 'potato_salad'),
      it('', '', 'Eel spring rolls', '', 'Small dishes', 'no', 'no', 'May 2026.', 'unagi_harumaki'),
    ] }, {
    cuisine: '赤提灯のおでんと日本酒の居酒屋 (2025〜2026年の口コミ)・澄んだほんのり甘い京風のおでん: 大根、こんにゃく、ひろうす、鴨と九条ねぎ、トマトのおでん、柚子胡椒で (2025〜2026年の口コミ)・評判のポテトサラダ、季節のお造り、焼き物、万願寺とうがらし、鰻の春巻き、真鯛、夏の突き出しの冷やし唐揚げ (2025〜2026年の口コミ)・燗も冷やも選べる豊富な日本酒、お猪口も選べる (例: Wakaebisu Plus 006) (2026年の口コミ)・4,000〜5,000円ほど (食べログ)',
    neighborhood: '二条城の南の御池通。二条城前駅から徒歩3分',
    gf_detail: '要確認。ほんのり甘いだしの京風おでんと練り物、唐揚げ、鰻の春巻き、ポテトサラダ。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。だしのおでんに鴨や練り物、お造り、肉料理 (2025〜2026年の口コミ)。',
    notes: '[おでん・二条城の南、赤提灯と燗酒] 二条城前の御池通の小さな赤提灯の居酒屋。澄んでほんのり甘い京風のおでん (大根、ひろうす、鴨と九条ねぎ、トマトも)、評判のポテトサラダ、季節のお造り、鰻の春巻きを、好みの燗とお猪口で出す豊富な日本酒とともに。店主とスタッフは気さくで、話し相手にも酌にも。深夜0時まで。4,000〜5,000円ほど。水曜休み。',
  });
}

// ================================================================ オールデイダイニング 弥栄
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26044579/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://www.imperialhotel.co.jp/kyoto';
  const H = day(['06:30', '22:00']);
  put({
    id: 'kyoto_all_day_dining_yasaka_imperial', name: 'オールデイダイニング 弥栄 (All Day Dining Yasaka, Imperial Hotel Kyoto)', category: 'OMNI',
    lat: 35.001744, lng: 135.775404, cuisine_type: 'yoshoku',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A hotel menu of Western classics — hamburg steak, Chaliapin steak, curry, onion gratin soup, pies and bread — plus Japanese breakfast and afternoon tea; no gluten information (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Fruit desserts appear, but the menu centres on beef, cheese, eggs, dairy and dashi-based breakfast; no vegan information (2026 reviews).',
    hours_raw: 'Daily: breakfast 6:30–10:30 (last order 10:00; Japanese breakfast from 7:00); lunch 11:30–14:30; tea 14:30–17:30; dinner 17:30–22:00 (last order 21:30); hours may change (Tabelog). Reservations accepted (Tabelog). Open to non-guests, though the hotel lobby itself is for staying guests (July 2026). Cards, e-money and QR (Tabelog). Private rooms (Tabelog). 2F of the main building of the Imperial Hotel Kyoto, next to the Gion Kobu Kaburenjo off Hanamikoji (Tabelog; October 2026). Opened 5 March 2026 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Imperial Hotel Kyoto by the Gion Kobu Kaburenjo, Hanamikoji',
    cuisine: 'All-day dining of the Imperial Hotel Kyoto, which carries on the legacy of the old Yasaka Kaikan, with dishes inspired by Gion and maiko (2026 reviews) · breakfast featuring dishes from the Gion restaurant Kawakami — a three-tier platter, saikyo-miso-grilled karasugarei, dashimaki, rice and miso soup with refills (July 2026) · lunch course of four appetisers, cold soup, hamburg steak and mango shortcake (July 2026) · Chaliapin steak and Yasaka curry, soup of the day (August 2026); classic pie (July 2026); seasonal fruit skillet with ice cream, Yasaka parfait (August–September 2026); assorted cheese and ham, onion gratin soup, steak, bread refills (October 2026) · afternoon tea with 90-minute free-flow tea, incl. beef stew (October 2026); Ronnefeldt teas (September 2026) · about ¥3,000–10,000 (Tabelog; 2026 reviews)',
    website: WEB, gmaps: gm('オールデイダイニング 弥栄 帝国ホテル京都'), menu_url: null,
    notes: '[Hotel all-day dining · Gion by the Kaburenjo, the new Imperial Hotel] The all-day restaurant of the Imperial Hotel Kyoto, opened in March 2026 in the restored Yasaka Kaikan beside the Gion Kobu Kaburenjo: a breakfast built with dishes from the Gion restaurant Kawakami, lunch courses with hamburg steak, the Imperial\'s Chaliapin steak and a Yasaka curry, parfaits and fruit skillets at tea, and afternoon tea. Polished, warm service; one September 2026 tea party waited through a muddle over sold-out desserts before the kitchen head stepped in. Open to non-guests. Open daily.',
    chef_bio: { chef_name: null, roles: ['Hotel kitchen and service staff (unnamed)', 'Head of the kitchen'], origin: null,
      background: 'Per Tabelog: opened 5 March 2026 on the second floor of the main building of the Imperial Hotel Kyoto. Reviewers in 2026 describe a hotel that inherits the former Yasaka Kaikan, a breakfast featuring dishes from the Gion restaurant Kawakami (July 2026), Gion- and maiko-inspired dishes (July 2026), and attentive service, with the head of the kitchen and the manager stepping in when an order went wrong (September 2026).',
      philosophy: null, specialty: 'Chaliapin steak; Yasaka curry; Kawakami breakfast.',
      anecdotes: [
        { text: 'A July 2026 family, hoping for coffee in the lobby, learned it was for hotel guests only and were seated instead at Yasaka on the second floor.', source: R + 'B532096423/' },
        { text: 'A July 2026 hotel guest had three bowls of rice at breakfast and found the second bowl of miso soup came with different ingredients from the first.', source: R + 'B532714805/' },
        { text: 'A September 2026 party, told twice that ordered desserts had run out, grew anxious before a Minami-za show — until the head of the kitchen came out, both were served, and the manager added a Ronnefeldt herbal tea.', source: R + 'B536350995/' },
      ],
      japanese_sources_summary: '食べログ: 洋食、東山区祇園町南側570-289 帝国ホテル 京都 本棟2F、朝食6:30〜10:30 (L.O.10:00、和朝食は7:00から)、ランチ11:30〜14:30、ティータイム14:30〜17:30、ディナー17:30〜22:00 (L.O.21:30)、予約可、カード・電子マネー・QR 可、個室あり、2026年3月5日オープン。口コミ (2026年7月〜10月、英語): 歌舞練場の隣、旧弥栄会館を受け継ぐホテル、ロビーは宿泊客のみ、祇園の料理店「Kawakami」の料理の朝食 (三段の盛り合わせ、からすがれいの西京焼き、だし巻き、ご飯と味噌汁のおかわり)、前菜4種・冷製スープ・ハンバーグ・マンゴーのショートケーキのランチ、シャリアピンステーキ、弥栄カレー、クラシックパイ、季節のフルーツのスキレット、弥栄パフェ、チーズとハムの盛り合わせ、オニオングラタンスープ、ステーキ、アフタヌーンティー (90分の紅茶飲み放題、ビーフシチュー)、ロンネフェルトのハーブティー、デザートの品切れで待たされたが厨房の責任者が対応 (2026年9月)。',
      confidence: 'medium', sources: [TB, WEB, R + 'B532096423/', R + 'B532392687/', R + 'B532714805/', R + 'B533937169/', R + 'B534412257/', R + 'B534833452/', R + 'B536350995/', R + 'B536521239/', R + 'B537021765/', R + 'B537613341/'] },
    cultural_comfort: { level: 'english', note: 'International hotel restaurant, open to non-guests (the lobby is guests-only); book for tea; cards, e-money and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区祇園町南側570-289 帝国ホテル 京都 本棟 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; opened 5 March 2026; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.001744, 135.775404); GSI matches only the large lot 京都府京都市東山区祇園町南側570番地, about 240 m away, so loc_precise false; kyoto_obanzai_tsubomi_gion is 50 m away and kyoto_gion_karyo 76 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532392687/', R + 'B537613341/'],
    price_note: 'No menu prices read; about ¥3,000–10,000 (Tabelog; 2026 reviews).', last_checked: TODAY, items: [
      it('', '', 'Chaliapin steak', '', 'Mains', 'ask', 'no', 'August 2026.', 'chaliapin'),
      it('', '', 'Yasaka curry', '', 'Mains', 'ask', 'no', 'August 2026.', 'yasaka_curry'),
      it('', '', 'Afternoon tea (90 min free-flow tea)', '', 'Tea', 'no', 'no', 'October 2026.', 'afternoon_tea'),
      it('', '', 'Japanese breakfast (dishes from Gion Kawakami)', '', 'Breakfast', 'ask', 'no', 'From 7:00; July 2026.', 'washoku_breakfast'),
    ] }, {
    cuisine: '旧弥栄会館を受け継ぐ帝国ホテル京都のオールデイダイニング、祇園や舞妓にちなむ料理も (2026年の口コミ)・祇園の料理店 Kawakami の料理の朝食: 三段の盛り合わせ、からすがれいの西京焼き、だし巻き、おかわりできるご飯と味噌汁 (2026年7月)・前菜4種、冷製スープ、ハンバーグ、マンゴーのショートケーキのランチコース (2026年7月)・シャリアピンステーキ、弥栄カレー、本日のスープ (2026年8月)、クラシックパイ (2026年7月)、季節のフルーツのスキレットとアイス、弥栄パフェ (2026年8〜9月)、チーズとハムの盛り合わせ、オニオングラタンスープ、ステーキ、パンのおかわり (2026年10月)・90分の紅茶飲み放題のアフタヌーンティー (ビーフシチューも) (2026年10月)、Ronnefeldt の紅茶 (2026年9月)・3,000〜10,000円ほど (食べログ、2026年の口コミ)',
    neighborhood: '花見小路の祇園甲部歌舞練場の隣、帝国ホテル京都',
    gf_detail: '要確認。ハンバーグ、シャリアピンステーキ、カレー、オニオングラタンスープ、パイ、パンの洋食と、和朝食やアフタヌーンティーのあるホテルのメニュー。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: '要確認。フルーツのデザートはあるが、牛肉、チーズ、卵、乳製品、だしの朝食が中心。ヴィーガンの情報はない (2026年の口コミ)。',
    notes: '[ホテルのオールデイダイニング・祇園の歌舞練場の隣、新しい帝国ホテル] 2026年3月、祇園甲部歌舞練場の隣に開業した帝国ホテル京都のオールデイダイニング。祇園の Kawakami の料理を取り入れた朝食、ハンバーグのランチコース、帝国ホテルのシャリアピンステーキと弥栄カレー、ティータイムのパフェやフルーツのスキレット、アフタヌーンティー。洗練された温かい接客。2026年9月の客はデザートの品切れで混乱して待たされたが、厨房の責任者が対応したと書いている。宿泊客以外も利用可。無休。',
  });
}

save();
