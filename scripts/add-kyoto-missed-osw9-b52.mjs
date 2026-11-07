// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 52.
// Core lane still has shops, so all four come from core, in queue order:
//   - 来来亭 十条竹田店 — chain (来来亭)                                                                          [core]
//   - なぶら 元田中店 — same-concept branch of a brand in data (kyr_nabura, the mackerel-broth なぶら)             [core]
//   + 寺子屋 Terakoya (Showa-style shokudo near Umekoji Park, family-run)                                         [core]
//   + スイートファウンテン ケーキショップ Sweet Fountain (tiny cake shop at Mototanaka Stn)                        [core]
//   + 天龍 Tenryu (Showa ramen and kara-age shop at Nishioji-Hachijo, run by an elderly couple) — no ramen block  [core]
//   + あふひ aoi (juwari soba near Shimogamo Shrine; since 2018)                                                  [core]
//   Same-name counts first: 寺子屋 0; スイートファウンテン 0; 天龍 0 (a November 2025 reviewer wonders about a link
//   to a 天龍 at Kitaoji — not established); あふひ 0.
//   None drafted is in data/kyoto.json by name or address (スイートファウンテン shares lot 22 with two records; あふひ
//   shares 52-1 with kyoto_nakagawa_komugiten — different shops).
//   Service charges: none of the four has a Tabelog charge section.
//   Pins: スイートファウンテン — the Tabelog point is 1.9 m from kyoto_didi_mototanaka (same lot), so moved ~5.6 m
//   south (7.5 m); 天龍 — the address has no lot ("西大路八条下東側"), so loc_precise false.
//   Ruling applied: single-review remarks about other diners left out.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-52');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26003207', 'chain: 来来亭 — national ramen chain');
skip('26041205', 'same-concept branch of a brand in data: なぶら 元田中店 is the second shop of the additive-free mackerel-broth ramen なぶら (kyr_nabura); a 2026 review calls it the second branch of the Enmachi-area main shop');

// ================================================================ 寺子屋
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26007395/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:00', '15:00'], ['17:00', '19:30']); const E = day(['11:00', '19:30']);
  put({
    id: 'kyoto_terakoya_umekoji', name: '寺子屋 (Terakoya)', category: 'OMNI',
    lat: 34.984282, lng: 135.736052, cuisine_type: 'shokudo',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: fried chicken and cutlet sets, tempura, udon and soba (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken, pork cutlet and oyakodon; dashi-based curry and noodles (2026 reviews).',
    hours_raw: 'Wed–Fri 11:00–15:00 and 17:00–19:30; Sat and Sun 11:00–19:30; closed Monday and Tuesday (Tabelog). A long temporary closure ended by September 2026 (September and October 2026 reviews). Bookings taken (Tabelog). Cash only, paid after eating (Tabelog; October 2026 review). 20 seats — tables and a 4-seat counter; non-smoking; 4 parking spaces (Tabelog). 5 min from JR Nishioji Stn and from Umekoji Park / the Kyoto Railway Museum; use the address, not the phone number, in car navigation (Tabelog).',
    hours: { 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'West of Umekoji Park — 5 min from JR Nishioji Stn',
    cuisine: 'Showa-style shokudo set meals, rice bowls and noodles with a good dashi (2026 reviews): the most popular crispy-fried chicken set ¥1,150 with salad, miso soup and rice (May and October 2026), a "refreshing" fried set ¥1,150 (September 2026), tonkatsu set, bite-size "korokoro" cutlet set, jumbo chicken set; katsu curry rice bowl with a spicy dashi curry thickened with potato starch, tempura rice bowl, oyakodon; soba and udon including kizami kitsune and tempura udon; beer (2026 reviews)',
    website: null, gmaps: gm('寺子屋 梅小路西中町'), menu_url: null,
    notes: "[Showa shokudo · near Umekoji Park] A long-running neighbourhood diner west of Umekoji Park, back after a long break: a big crispy-fried chicken set with salad for ¥1,150, a spicy dashi katsu-curry bowl, oyakodon and soba or udon with good dashi. Cash only; closed Monday and Tuesday.",
    chef_bio: { chef_name: null, roles: ['Family-run (owner couple and son; unnamed)'], origin: null,
      background: 'A family-run shokudo. Reviewers describe an elderly couple — the woman cooking, the man at the register (July and October 2026); after the shop reopened in September 2026, a regular saw the owner at the register and, it seemed, the owner’s son cooking.',
      philosophy: null, specialty: 'Crispy-fried chicken set.',
      anecdotes: [
        { text: 'A regular who feared the closure was permanent, given the owner\'s age, returned in September 2026 to find the shop busy and prices slightly up.', source: R + 'B265312583/' },
        { text: 'In July 2026, with the jumbo chicken and tempura udon sold out, the staff suggested a bite-size cutlet set and kizami kitsune udon instead.', source: R + 'B532363077/' },
        { text: 'An October 2026 diner, still hungry after a tonkatsu set, ordered and finished a crispy-fried chicken set too.', source: R + 'B537969844/' },
      ],
      japanese_sources_summary: '食べログ: 寺子屋、食堂・丼・麺類、下京区梅小路西中町107番地、JR西大路駅から徒歩約5分、梅小路公園・京都鉄道博物館から徒歩約5分、水〜金 11:00〜15:00・17:00〜19:30、土日 11:00〜19:30、月火休み、予約可、カード・電子マネー・QR 不可、20席 (テーブルとカウンター4席)、禁煙、駐車場4台、カーナビは住所で設定。口コミ (2026年5〜10月、英語): 長い休業の後に再開、高齢の夫婦 (女性が調理、男性がレジ)、再開後は息子さんが調理のよう、一番人気の鶏の揚げ物の定食1,150円、さっぱりした揚げ物の定食1,150円、とんかつ定食、Korokoro カツの定食、ジャンボチキン定食、だしのカツカレー丼 (片栗粉のとろみ、辛口)、天丼、親子丼、そば・うどん、きざみきつねうどん、天ぷらうどん、だしがおいしい、現金の後払い。',
      confidence: 'medium', sources: [TB, R + 'B265312583/', R + 'B480970030/', R + 'B529659363/', R + 'B530235178/', R + 'B532363077/', R + 'B535127970/', R + 'B536717364/', R + 'B537302501/', R + 'B537501373/', R + 'B537969844/'] },
    cultural_comfort: { level: 'japanese', note: 'Wall menu in Japanese; cash only.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市下京区梅小路西中町107番地',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reopened after a long closure, reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.984282, 135.736052); cross-checked: GSI 京都府京都市下京区梅小路西中町107番地 (lot) 61m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537302501/', R + 'B535127970/'],
    price_note: 'Prices from May–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Crispy-fried chicken set', '¥1,150', 'Set meals', 'no', 'no', 'May and October 2026 reviews.', 'chicken_karikari'),
      it('', '', 'Katsu curry rice bowl', '', 'Rice bowls', 'no', 'no', 'October 2026 reviews.', 'katsu_curry_don'),
    ] }, {
    cuisine: '昭和の食堂の定食、丼、だしのおいしい麺 (2026年の口コミ): 一番人気の鶏の揚げ物の定食 (サラダ、味噌汁、ご飯付き1,150円、2026年5月・10月)、さっぱりした揚げ物の定食1,150円 (2026年9月)、とんかつ定食、Korokoro カツの定食、ジャンボチキン定食。片栗粉でとろみをつけた辛口のだしのカツカレー丼、天丼、親子丼。きざみきつねうどんや天ぷらうどんなどのそば・うどん。ビール (2026年の口コミ)',
    neighborhood: '梅小路公園の西。JR西大路駅から徒歩5分',
    gf_detail: 'グルテンフリー不可。唐揚げやカツの定食、天ぷら、うどん、そば (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鶏、豚カツ、親子丼。だしのカレーと麺 (2026年の口コミ)。',
    notes: '[昭和の食堂・梅小路公園の近く] 長い休業から戻った、梅小路公園の西の昔ながらの食堂。サラダ付きの大きな鶏の揚げ物の定食1,150円、辛口のだしのカツカレー丼、親子丼、だしのおいしいそば・うどん。現金のみ。月火休み。',
  });
}

// ================================================================ スイートファウンテン ケーキショップ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26004179/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '20:00']);
  put({
    id: 'kyoto_sweet_fountain_mototanaka', name: 'スイートファウンテン ケーキショップ (Sweet Fountain Cakeshop)', category: 'OMNI',
    lat: 35.0353, lng: 135.781234, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tarts, crumbles, brownies and cookies (Tabelog reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: cheesecake, cream cakes and butter pastries (Tabelog reviews).',
    hours_raw: 'Tue–Sun 11:00–20:00; closed Monday; hours may change (Tabelog). Whole birthday cakes need booking at least two days ahead (Tabelog). Cash only — no cards or e-money (Tabelog). Two counter seats for eating in; coffee, tea and jasmine tea ¥200 each; takeaway; non-smoking (Tabelog). Right by Eiden Mototanaka Stn (Tabelog).',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Mototanaka Stn, Eiden — Tanaka',
    cuisine: 'Simple homemade cakes at low prices: slices in the ¥300 range and a lemon tart with smooth cream (January 2026); earlier reviews mention dense baked cheesecake, banana coffee cream cake, strawberry and banana clafoutis on a whole-grain crust, apple crumble ¥180, peanut butter blueberry ¥150 (2023–24), brownies and cookies, and whole cakes by order ¥2,280 (June 2023); made with moderate butter and sugar and few additives (October 2024 review)',
    website: null, gmaps: gm('スイートファウンテン 元田中'), menu_url: null,
    notes: "[Cake shop · Mototanaka Stn] A tiny, cheap neighbourhood cake shop by Eiden Mototanaka Station with two seats: simple homemade slices around ¥300 — lemon tart, baked cheesecake, clafoutis — and whole cakes to order. Cash only; closed Monday.",
    chef_bio: { chef_name: null, roles: ['Shopkeeper (unnamed)'], origin: null,
      background: 'A small neighbourhood cake shop; reviewers since 2018 describe its homemade feel. Recent detail is thin: two 2026 visits (January and March).',
      philosophy: 'Snacks for every day, with moderate butter and sugar and few additives (October 2024 review).',
      specialty: 'Lemon tart; baked cheesecake.',
      anecdotes: [
        { text: 'A January 2026 visitor found the eat-in space would be cramped with more customers, so took a lemon tart outside and called it easy to finish.', source: R + 'B521412650/' },
        { text: 'An October 2024 customer bought a whole lemon tart.', source: R + 'B493511367/' },
      ],
      japanese_sources_summary: '食べログ: スイートファウンテン ケーキショップ、ケーキ、左京区田中大久保町22、叡電元田中駅のすぐ近く、火〜日 11:00〜20:00、月曜休み、予約可、誕生日ケーキは2日前までに予約、カード・電子マネー不可、カウンター2席、コーヒー・紅茶・ジャスミン茶各200円、テイクアウト、禁煙。口コミ (2026年1月、英語): 一切れ300円台、なめらかなクリームのレモンタルト。それ以前の口コミ (2018〜2024年): ベイクドチーズケーキ、バナナのコーヒークリームケーキ、いちごやバナナのクラフティ、アップルクランブル180円、ピーナッツバターブルーベリー150円、ブラウニー、クッキー、予約のホールケーキ2,280円、バターと砂糖は控えめで添加物をなるべく使わない。',
      confidence: 'low', sources: [TB, R + 'B521412650/', R + 'B435560665/', R + 'B493511367/', R + 'B475510407/', R + 'B467495550/', R + 'B462439906/', R + 'B384404283/'] },
    cultural_comfort: { level: 'none_needed', note: 'Point at the showcase; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区田中大久保町22',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through March 2026.' },
    pin_source: `Tabelog ${TB} (35.035351, 135.781234) is 1.9 m from kyoto_didi_mototanaka (same lot 22), so moved ~5.6 m south to 35.035300 (7.5 m from it); cross-checked: GSI 京都府京都市左京区田中大久保町22番地 (lot) 77m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B521412650/', TB],
    price_note: 'Slice price from a January 2026 review; drinks from Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Lemon tart (slice)', '¥300s', 'Cakes', 'no', 'no', 'January 2026 review.', 'lemon_tart'),
      it('', '', 'Coffee, tea or jasmine tea', '¥200', 'Drinks', 'ask', 'ask', 'Tabelog.', 'drinks'),
    ] }, {
    cuisine: '安くて素朴な手作りのケーキ: 一切れ300円台、なめらかなクリームのレモンタルト (2026年1月)。それ以前の口コミにはベイクドチーズケーキ、バナナのコーヒークリームケーキ、全粒粉の台のいちごやバナナのクラフティ、アップルクランブル180円、ピーナッツバターブルーベリー150円 (2023〜24年)、ブラウニー、クッキー、予約のホールケーキ2,280円 (2023年6月)。バターと砂糖は控えめで添加物も少なく (2024年10月の口コミ)',
    neighborhood: '叡電元田中駅のそば、田中',
    gf_detail: 'グルテンフリー不可。タルト、クランブル、ブラウニー、クッキー (食べログの口コミ)。',
    vegan_detail: 'ヴィーガン不可。チーズケーキ、クリームのケーキ、バターの焼き菓子 (食べログの口コミ)。',
    notes: '[ケーキ店・元田中駅] 叡電元田中駅のそばの、2席だけの小さく安い町のケーキ店。レモンタルト、ベイクドチーズケーキ、クラフティなど300円ほどの素朴な手作りケーキに、予約のホールケーキも。現金のみ。月曜休み。',
  });
}

// ================================================================ 天龍
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26008145/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:30', '13:45'], ['17:30', '22:30']);
  put({
    id: 'kyoto_tenryu_nishioji_hachijo', name: '天龍 (Tenryu)', category: 'OMNI',
    lat: 34.983573, lng: 135.732828, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles, gyoza, shumai and fried chicken (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone soy broth, chashu and kara-age (2025–26 reviews).',
    hours_raw: 'Mon, Tue, Wed, Fri and Sat 11:30–13:45 and 17:30–22:30 (last order 22:00); holidays 17:30–24:00; closed Thursday and Sunday; hours may change (Tabelog). Bookings taken (Tabelog). Cash only, paid after eating (Tabelog; October 2026 review). 22 seats — a counter of 10 and three tables for 4; smoking allowed (Tabelog; October 2026 review). Three parking spaces to the south, in a factory-like spot (Tabelog). On the east side of Nishioji just south of Hachijo, 3 min north of JR Nishioji Stn (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 4: W, 5: W }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Nishioji-Hachijo — 3 min from JR Nishioji Stn',
    cuisine: 'Showa-era ramen and kara-age (2025–26 reviews): soy-sauce pork-bone ramen with thin straight noodles, thin chashu, bean sprouts, green onion and menma ¥800 (December 2025), a Hakata-style ramen and a special soy ramen, chashu ramen; ramen set with two kara-age, pickles and rice ¥1,000 (July and November 2025), lunch kara-age set +¥200 (December 2025); kara-age of thigh or drumstick ¥750 (January 2026), chicken wings, gyoza, shumai; beer and sake (Tabelog)',
    website: null, gmaps: gm('天龍 ラーメン 西大路八条'), menu_url: null,
    notes: "[Showa ramen & kara-age · Nishioji-Hachijo] A long-running ramen shop under a yellow \"kara-age\" sign, run by an elderly couple: nostalgic soy pork-bone ramen from ¥800, a ¥1,000 set with kara-age and rice, and juicy thigh kara-age with beer. Cash only; smoking allowed; closed Thursday and Sunday.",
    chef_bio: { chef_name: null, roles: ['Owner couple (unnamed)'], origin: null,
      background: 'A Showa-era ramen shop, "run by an elderly couple" (August 2025) and described as family-run and long popular (July 2025). Signed cards from celebrities, including Hiroshi Tamaki and Yokohama BayStars players, hang inside (November 2025 review).',
      philosophy: null, specialty: 'Kara-age; soy ramen.',
      anecdotes: [
        { text: 'A November 2025 diner who had wondered for 20 years whether this shop is related to a Tenryu at Kitaoji found it full and the owner friendly.', source: R + 'B517291155/' },
        { text: 'A January 2026 diner rated the ¥750 thigh kara-age the perfect partner for beer.', source: R + 'B521730156/' },
        { text: 'Regulars drink beer or sake with the kara-age, an October 2026 diner noticed, and the chef\'s warm hospitality stood out.', source: R + 'B534617064/' },
      ],
      japanese_sources_summary: '食べログ: 天龍、ラーメン、下京区西大路八条下東側、JR西大路駅から北へ徒歩約3分、市バス西大路八条 (東側)、月・火・水・金・土 11:30〜13:45・17:30〜22:30 (L.O. 22:00)、祝日 17:30〜24:00、木・日休み、予約可、カード・電子マネー・QR 不可、22席 (カウンター10、4名テーブル3)、喫煙可、駐車場3台。口コミ (2025年7月〜2026年10月、英語): 昭和からの老舗、高齢の夫婦が営む、家族経営、黄色い「からあげ」の看板、醤油豚骨ラーメン800円 (細いストレート麺、チャーシュー、もやし、ねぎ、メンマ)、博多風ラーメン、特製醤油ラーメン、チャーシュー麺、唐揚げ2個・漬物・ご飯のラーメンセット1,000円、昼の唐揚げセット +200円、もも唐揚げ750円、手羽先、餃子、焼売、有名人のサイン、現金の後払い。',
      confidence: 'medium', sources: [TB, R + 'B509807070/', R + 'B510216097/', R + 'B512099963/', R + 'B517291155/', R + 'B518974362/', R + 'B521730156/', R + 'B524218651/', R + 'B526727933/', R + 'B534617064/', R + 'B537100394/'] },
    cultural_comfort: { level: 'japanese', note: 'Old local shop; smoking allowed; cash only.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市下京区西大路八条下東側',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.983573, 135.732828); the address has no lot number (西大路八条下東側), so not lot-checked; the point is on the east side of Nishioji just south of Hachijo, as the address says; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B518974362/', R + 'B517291155/', R + 'B521730156/'],
    price_note: 'Prices from November 2025–January 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Ramen', '¥800', 'Ramen', 'no', 'no', 'December 2025 review.', 'ramen'),
      it('', '', 'Ramen set (2 kara-age, pickles, rice)', '¥1,000', 'Sets', 'no', 'no', 'July and November 2025 reviews.', 'ramen_set'),
    ] }, {
    cuisine: '昭和からのラーメンと唐揚げ (2025〜26年の口コミ): 細いストレート麺、薄いチャーシュー、もやし、ねぎ、メンマの醤油豚骨ラーメン800円 (2025年12月)、博多風のラーメン、特製醤油ラーメン、チャーシュー麺。唐揚げ2個・漬物・ご飯のラーメンセット1,000円 (2025年7月・11月)、昼の唐揚げセット +200円 (2025年12月)。ももか手羽元の唐揚げ750円 (2026年1月)、手羽先、餃子、焼売。ビールと日本酒 (食べログ)',
    neighborhood: '西大路八条。JR西大路駅から徒歩3分',
    gf_detail: 'グルテンフリー不可。小麦の麺、餃子、焼売、唐揚げ (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。醤油豚骨スープ、チャーシュー、唐揚げ (2025〜26年の口コミ)。',
    notes: '[昭和のラーメンと唐揚げ・西大路八条] 黄色い「からあげ」の看板の、高齢の夫婦が営む老舗のラーメン店。懐かしい醤油豚骨ラーメン800円から、唐揚げとご飯の1,000円のセット、ビールに合うジューシーなもも唐揚げ。現金のみ。喫煙可。木・日休み。',
  });
}

// ================================================================ あふひ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26031413/'; const R = TB + 'dtlrvwlst/';
  const D = day(['12:00', '16:00']);
  put({
    id: 'kyoto_afuhi_shimogamo', name: 'あふひ (aoi)', category: 'OMNI',
    lat: 35.039699, lng: 135.771087, cuisine_type: 'udon_soba',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The soba is juwari — 100% buckwheat (October 2026 review) — but the dipping sauce and tempura usually contain wheat; not confirmed.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options; yuba and wild-vegetable soba are offered, but the broth is not described (Tabelog; 2026 reviews).',
    hours_raw: 'Daily 12:00–16:00 or until sold out; irregular closures (Tabelog). An October 2026 visitor found a handwritten sign moving opening to 12:30. No bookings; people queue before 12:00, and tables are mostly for two (Tabelog; May 2026 review). Order by QR code; self-service water (May and August 2026 reviews). Soba can take a long time — up to about 40 minutes, two 2026 reviewers note. Cash only — no cards, e-money or QR payment (Tabelog). 30 seats; non-smoking; wheelchair accessible; English menu; free Wi-Fi; dogs on the two terrace tables only (Tabelog; October 2026 review). 1 min from the Shimogamo-jinja-mae bus stop (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Shimogamo Shrine — 1 min from Shimogamo-jinja-mae bus stop',
    cuisine: 'Homemade juwari soba of domestic buckwheat, thin but firm (2026 reviews): fluffy whipped tororo soba crowned with an egg yolk, cold yuba bukkake soba, wild-vegetable and grated daikon soba, yuba soba, zaru soba; sets of soba with mini tempura or tuna-bonito rice ¥1,600 (March 2026); tempura of about five items, oyakodon, maguro katsuo rice; soba-yu (2026 reviews); sake and shochu (Tabelog)',
    website: null, gmaps: gm('あふひ 下鴨 そば'), menu_url: null,
    notes: "[Juwari soba · Shimogamo Shrine] A modern, café-like soba house a minute from Shimogamo Shrine, with a dog-friendly terrace: thin juwari soba under fluffy whipped tororo, cold yuba soba, and tempura or tuna-bonito rice sets around ¥1,600. Expect a queue at 12:00 and a slow kitchen. Cash only; English menu.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Opened 27 August 2018 (Tabelog).',
      philosophy: 'Homemade 100% buckwheat soba from domestic ingredients (October 2026 review).',
      specialty: 'Fluffy tororo soba.',
      anecdotes: [
        { text: 'After the Mitarashi pond ritual at Shimogamo Shrine in July 2026, a diner was asked by a Fuji TV crew filming there for permission to photograph the soba.', source: R + 'B532393620/' },
        { text: 'A March 2026 family on a drive to Shimogamo Shrine were the first customers, with wild-vegetable soba and yuba soba with mini tempura.', source: R + 'B524664551/' },
        { text: 'In August 2026 the tempura came so quickly, and the soba so slowly, that it was gone before the noodles arrived.', source: R + 'B533645679/' },
      ],
      japanese_sources_summary: '食べログ: あふひ、そば・天ぷら・丼、左京区下鴨松ノ木町52-1、Shimogamo-jinja-mae バス停から徒歩1分、毎日 12:00〜16:00 (売り切れ次第終了)、不定休、予約不可、カード・電子マネー・QR 不可、30席、禁煙、車椅子可、英語メニュー、Wi-Fi、ペット可、ベジタリアンメニュー、2018年8月27日オープン。口コミ (2026年3〜10月、英語): 国産の自家製十割そば、細くてこしのある麺、ふわふわのとろろそばと卵黄、冷やし湯葉のぶっかけそば、山菜おろしそば、湯葉そば、ざるそば、そばとミニ天ぷらかまぐろ節ご飯のセット1,600円、天ぷら約5品、親子丼、そば湯、QR コードで注文、水はセルフ、12時前から行列、テーブルは主に2名、テラスの2卓は犬可、そばが出るまで時間がかかる (約40分という声も)、手書きの貼り紙で12時半開店の日も。',
      confidence: 'medium', sources: [TB, R + 'B524664551/', R + 'B526510662/', R + 'B527665903/', R + 'B532393620/', R + 'B532404615/', R + 'B532895209/', R + 'B533645679/', R + 'B537548707/', R + 'B537666878/', R + 'B538553310/'] },
    cultural_comfort: { level: 'english', note: 'English menu; QR-code ordering.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区下鴨松ノ木町52-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.039699, 135.771087); cross-checked: GSI 京都府京都市左京区下鴨松ノ木町52番地 (lot) 22m; 7.3 m from kyoto_nakagawa_komugiten at the same address; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B524664551/'],
    price_note: 'Set price from a March 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Soba set with mini tempura or tuna-bonito rice', '¥1,600', 'Sets', 'ask', 'ask', 'March 2026 review.', 'soba_set'),
      it('', '', 'Fluffy tororo soba', '', 'Soba', 'ask', 'no', 'April, July and October 2026 reviews.', 'fuwa_tororo'),
    ] }, {
    cuisine: '国産の自家製十割そば、細くてこしがある (2026年の口コミ): 卵黄をのせたふわふわのとろろそば、冷やし湯葉のぶっかけそば、山菜おろしそば、湯葉そば、ざるそば。そばとミニ天ぷらかまぐろ節ご飯のセット1,600円 (2026年3月)。約5品の天ぷら、親子丼、まぐろ節ご飯、そば湯 (2026年の口コミ)。日本酒と焼酎 (食べログ)',
    neighborhood: 'Shimogamo Shrine。Shimogamo-jinja-mae バス停から徒歩1分',
    gf_detail: '要確認。そばは十割 (2026年10月の口コミ) だが、つゆと天ぷらには小麦が入ることが多い。未確認。',
    vegan_detail: '要確認。食べログにベジタリアンメニューとあり、湯葉や山菜のそばもあるが、だしは不明 (食べログ、2026年の口コミ)。',
    notes: '[十割そば・Shimogamo Shrine] Shimogamo Shrine から1分の、カフェのようなモダンなそば店。犬可のテラスもある。ふわふわのとろろをのせた細い十割そば、冷やし湯葉そば、天ぷらかまぐろ節ご飯のセットで1,600円ほど。12時の行列と、料理が出るまでの時間は覚悟を。現金のみ。英語メニュー。',
  });
}

save();
