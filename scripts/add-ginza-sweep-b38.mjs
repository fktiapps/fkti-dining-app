// Ginza Station half-mile sweep (805 m), batch 38 — more small independents from the Tabelog crawl candidates (all OMNI).
//   + 次男坊 (soba-izakaya in Ginza 1-chōme; "hiyaniku" chilled meat soba at lunch; owner not named)
//   + 銀座 木挽そば (100% buckwheat soba behind the Kabukiza, opened November 2025; the owner trained at Ginza Yabe per a
//     2026 review, but is not named)
//   + 山ぎん (obanzai-izakaya and lunch curry/stew in Ginza 8-chōme; owner not named)
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-24';
const { put, save } = openSweep(TODAY);

// ================================================================ 次男坊
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13021091/'; const R = TB + 'dtlrvwlst/';
  const ld = day(['11:30', '14:00'], ['16:00', '23:00']);
  put({
    id: 'tokyo_jinanbo_ginza1', name: '次男坊 (Jinanbō)', category: 'OMNI',
    lat: 35.675061, lng: 139.767239,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: 'Not gluten-free: soba of unpublished buckwheat ratio with soy-based dipping sauce, tempura scraps on the chilled meat soba, and fried burdock and fried-soba snacks at night.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan: chilled meat soba, ginger pork, fish-cake itawasa, sashimi, conger eel and squid.',
    hours_raw: 'Mon–Fri 11:30–14:00 and 16:00–23:00; closed Saturdays, Sundays and holidays (Tabelog). ¥300 appetiser at night. Cash only. Book for evenings — it fills up.',
    hours: { 0: ld, 1: ld, 2: ld, 3: ld, 4: ld }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Ginza 1-chōme, 2F — 1–2 min from Ginza-itchōme Stn',
    cuisine: 'Soba-izakaya · "hiyaniku" chilled meat soba at lunch · daily fish at night', cuisine_type: 'udon_soba',
    website: null, gmaps: gm('次男坊 銀座1-5-16'), menu_url: null,
    notes: "[Soba · the hiyaniku soba-izakaya] A 20-seat second-floor soba-izakaya in Ginza 1-chōme, with jazz playing and a mostly male lunch crowd. Lunch queues form for the 'hiyaniku', chilled meat soba with plenty of pork, tempura scraps, nori and green onion (¥1,070 in October 2026; large +¥100). The 'Chōnanbō' set brings ginger pork, rice and a small tanuki soba (¥1,180), and there is dashi rice with zaru soba. At night it is a regulars' izakaya, usually full, so book ahead. Fried soba comes as the appetiser, with itawasa and spicy fried burdock (¥580 each), bonito and sashimi platters (¥1,200–1,800), boiled conger eel, butter squid, sea bream and whelk. Cash only.",
    chef_bio: {
      chef_name: null, roles: [], origin: 'Ginza 1-chōme; founding date not found in a source read',
      background: 'No source names the owner.', philosophy: null, specialty: 'Hiyaniku chilled meat soba; daily fish.',
      anecdotes: [
        { text: '"I always go for the \'Hiyanikku\'. There are other menu items, but I just can\'t resist it." — August 2026.', source: R + 'B491428720/' },
        { text: '"Appetizer: Fried Soba. Crunchy and pairs perfectly with beer." — a five-visit regular, April 2026.', source: R + 'B15780420/' },
        { text: '"The restaurant was fully booked on both occasions." — a twenty-visit regular, August 2026.', source: R + 'B460818433/' },
      ],
      japanese_sources_summary: '食べログ: 次男坊、銀座1-5-16 第3太陽ビル別館2F、銀座一丁目駅から91m、20席、平日11:30〜14:00・16:00〜23:00、土日祝休、お通し300円、カード・電子マネー・QR不可。2026年の口コミ: 冷や肉そば1,070円(大盛+100円、肉・天かす・海苔・ねぎ)、「Chonanbo」定食1,180円(生姜焼き・ご飯・小たぬきそば)、だしご飯とざるそば、夜はお通しの揚げそば、板わさ580円、ごぼうの辛味揚げ580円、鰹の刺身1,200円、刺し盛り1,800円、煮穴子、イカバター、鯛、つぶ貝、ジャズ、夜は予約で満席。',
      confidence: 'low', sources: [TB, R + 'B536620758/', R + 'B491428720/', R + 'B529335912/', R + 'B15780420/', R + 'B460818433/', R + 'B528058181/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Cramped tables, lunch queues, busy evenings — book a day or two ahead for dinner. Cash only.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [{ text: 'Chilled meat soba topped with tempura scraps.', source: R + 'B491428720/' }], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座1-5-16 第3太陽ビル別館 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated April–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座一丁目5番16号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536620758/', R + 'B529335912/', R + 'B15780420/'],
    price_note: 'Prices from 2026 Tabelog reviews (evening prices excluding tax).', last_checked: TODAY, items: [
      it('冷や肉そば', 'hiyaniku soba', 'Chilled meat soba with tempura scraps, nori and green onion', '¥1,070', 'Lunch', 'no', 'no', '2026; large +¥100.', 'hiyaniku'),
      it('', 'chounanbou teishoku', 'Ginger pork, rice and small tanuki soba', '¥1,180', 'Lunch', 'no', 'no', '2026.', 'chonanbo_set'),
      it('板わさ', 'itawasa', 'Fish cake with wasabi', '¥580', 'Small plates', 'ask', 'no', '2026, excl. tax.', 'itawasa'),
      it('ごぼうの辛味揚げ', 'gobou no karami age', 'Spicy fried burdock', '¥580', 'Small plates', 'no', 'ask', '2026, excl. tax.', 'fried_burdock'),
      it('刺し盛り', 'sashimori', 'Sashimi platter', '¥1,800', 'Small plates', 'ask', 'no', '2026, excl. tax.', 'sashimi'),
    ] }, {
    cuisine: '蕎麦居酒屋・昼は冷や肉そば・夜は日替わりの魚',
    neighborhood: '銀座一丁目のビル2F。銀座一丁目駅から徒歩1〜2分',
    gf_detail: 'グルテンフリーではありません。そば粉の割合が公表されていない蕎麦と醤油ベースのつゆ、冷や肉そばの天かす、夜はごぼうの揚げ物や揚げそば。',
    vegan_detail: 'ヴィーガンではありません。冷や肉そば、生姜焼き、板わさ、刺身、穴子、イカなど。',
    notes: '[そば・冷や肉そばの蕎麦居酒屋] 銀座一丁目のビル2階、ジャズが流れる20席の蕎麦居酒屋で、昼は男性客が中心。行列のお目当ては「冷や肉そば」で、たっぷりの豚肉に天かす・海苔・ねぎ(2026年10月1,070円、大盛+100円)。生姜焼きとご飯に小さなたぬきそばの「Chonanbo」定食(1,180円)や、だしご飯とざるそばも。夜は常連でいつも満席の居酒屋になるので予約を。お通しは揚げそば、板わさとごぼうの辛味揚げ(各580円)、鰹や刺し盛り(1,200〜1,800円)、煮穴子、イカバター、鯛、つぶ貝など。現金のみ。',
  });
}

// ================================================================ 銀座 木挽そば
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13316445/'; const R = TB + 'dtlrvwlst/';
  const ld = day(['11:30', '13:30'], ['17:30', '20:00']);
  put({
    id: 'tokyo_ginza_kobiki_soba', name: '銀座 木挽そば (Ginza Kobiki Soba)', category: 'OMNI',
    lat: 35.669965, lng: 139.768642,
    gf_confidence: 'ask', gf_label: 'GF — ask',
    gf_detail: 'Ask. The soba is stone-ground 100% buckwheat (jūwari) per 2026 reviews, but it is served with a soy-based dipping sauce, and tempura and nama-fu (wheat gluten) dengaku are also on the menu. Ask whether the tsuyu can be wheat-free and how the soba is handled.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan as described: smoked duck, duck soba and conger-eel tempura; vegetable tempura and nama-fu dengaku are listed, but the dipping sauce and broths are not described.',
    hours_raw: 'Wed–Sun 11:30–13:30 and 17:30–20:00; closed Mondays, Tuesdays and some irregular days (Tabelog). Cards accepted. Reservations taken online despite the listing, per a 2026 diner.',
    hours: { 2: ld, 3: ld, 4: ld, 5: ld, 6: ld }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 4-chōme, a Kobikichō back alley behind the Kabukiza — 3 min from Higashi-Ginza Stn',
    cuisine: 'Stone-ground 100% buckwheat soba (opened 2025) · seasonal vegetable tempura · sake snacks', cuisine_type: 'udon_soba',
    website: null, gmaps: gm('銀座 木挽そば 銀座4-11-5'), menu_url: null,
    notes: "[Soba · jūwari soba behind the Kabukiza] A clean, wood-scented 15-seat soba shop in a Kobikichō alley behind the Kabukiza, opened in November 2025. A July 2026 diner says the owner trained at Ginza Yabe, the same school as Onozawa and Taiichi. The soba is short, thin, stone-ground and 100% buckwheat, served as seiro (¥1,200) with grated daikon and green onion. There is also a duck soba in a yuzu-scented broth (¥2,500). With sake (about ¥1,000 a gō) come smoked duck with white miso, two kinds of nama-fu dengaku, and light-battered tempura of wild greens, myoga, lotus root, sweet potato, pumpkin and conger eel (assortment ¥1,800). Some 2026 diners found it pricey, with doors opening a minute or two late and slow service from a small team.",
    chef_bio: {
      chef_name: null, roles: [], origin: 'Opened November 2025 behind the Kabukiza',
      background: 'A July 2026 reviewer says the owner trained at Ginza Yabe (same school as Onozawa and Taiichi); no source names the owner.',
      philosophy: null, specialty: 'Jūwari seiro soba; seasonal tempura.',
      anecdotes: [
        { text: '"The owner of this restaurant is originally from \'Ginza Yabe\' … Located right behind the Kabukiza Theatre in Kobikicho, it opened in November last year." — July 2026.', source: R + 'B532164738/' },
        { text: '"The duck soba came with a warm broth that had a wonderful yuzu aroma." — May 2026.', source: R + 'B527632011/' },
        { text: '"Ordered the \'Seiro\' (JPY 1,200) and the \'Tempura Assortment (one serving)\' (JPY 1,800)." — September 2026.', source: R + 'B535423351/' },
      ],
      japanese_sources_summary: '食べログ: 銀座 木挽そば、銀座4-11-5 銀座アポロ木挽館1F、東銀座駅から149m、15席、水〜日11:30〜13:30・17:30〜20:00、月火・不定休、カード可、禁煙。2026年の口コミ: 2025年11月開店、店主は Ginza Yabe 出身(Onozawa・Taiichi と同門、英文口コミ)、石臼挽き十割の細く短い蕎麦、せいろ1,200円、天ぷら盛り合わせ1,800円、鴨そば2,500円(柚子の香り)、鴨の燻製と白味噌、生麩田楽2種、山菜・茗荷・蓮根・さつまいも・南瓜・穴子の天ぷら、日本酒1合約1,000円、開店が数分遅れる、少人数で提供が遅い。',
      confidence: 'low', sources: [TB, R + 'B532164738/', R + 'B527632011/', R + 'B535423351/', R + 'B536155034/', R + 'B520813207/', R + 'B535421801/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Small and quiet; book online. Expect a wait for food at busy times.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [{ text: 'Tempura and nama-fu dengaku on the menu alongside 100% buckwheat soba.', source: R + 'B520813207/' }], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [{ text: 'Soba is stone-ground 100% buckwheat (jūwari).', source: R + 'B536155034/' }], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座4-11-5 銀座アポロ木挽館 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated May–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座四丁目11番5号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535423351/', R + 'B527632011/', R + 'B520813207/'],
    price_note: 'Prices from 2026 Tabelog reviews.', last_checked: TODAY, items: [
      it('せいろ', 'seiro', 'Seiro soba (100% buckwheat)', '¥1,200', 'Soba', 'ask', 'ask', '2026.', 'seiro'),
      it('鴨そば', 'kamo soba', 'Duck soba in yuzu-scented broth', '¥2,500', 'Soba', 'ask', 'no', '2026.', 'kamo_soba'),
      it('天ぷら盛り合わせ', 'tenpura moriawase', 'Tempura assortment', '¥1,800', 'Small plates', 'no', 'ask', '2026.', 'tempura'),
      it('生麩田楽', 'namafu dengaku', 'Nama-fu (wheat gluten) dengaku', '', 'Small plates', 'no', 'ask', '', 'namafu'),
      it('鴨の燻製', 'kamo no kunsei', 'Smoked duck with white miso', '', 'Small plates', 'ask', 'no', '', 'smoked_duck'),
    ] }, {
    cuisine: '石臼挽き十割蕎麦(2025年開店)・季節の野菜天ぷら・酒の肴',
    neighborhood: '銀座四丁目、歌舞伎座裏の木挽町の路地。東銀座駅から徒歩3分',
    gf_detail: '要確認。2026年の口コミでは石臼挽きの十割蕎麦ですが、醤油ベースのつゆで食べ、天ぷらや生麩(小麦グルテン)の田楽もあります。つゆを小麦なしにできるか、蕎麦の扱いを確認してください。',
    vegan_detail: '記述上はヴィーガンではありません。鴨の燻製、鴨そば、穴子の天ぷら。野菜の天ぷらや生麩田楽もありますが、つゆや出汁は書かれていません。',
    notes: '[そば・歌舞伎座裏の十割蕎麦] 歌舞伎座裏、木挽町の路地にある木の香りの清潔な15席の蕎麦店で、2025年11月の開店。2026年7月の口コミによれば店主は「Ginza Yabe」の出身で、Onozawa や Taiichi と同門(英文の口コミ)。蕎麦は石臼挽きの十割で細く短く、せいろ(1,200円)は大根おろしとねぎで。柚子香る温かい鴨そば(2,500円)も。日本酒(1合1,000円ほど)には鴨の燻製と白味噌、2種の生麩田楽、山菜・茗荷・蓮根・さつまいも・南瓜・穴子の軽い衣の天ぷら(盛り合わせ1,800円)。2026年には、値段が高め、開店が1〜2分遅れる、少人数で提供が遅いとの声も。',
  });
}

// ================================================================ 山ぎん
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13013367/'; const R = TB + 'dtlrvwlst/';
  const ld = day(['11:30', '13:30'], ['18:00', '23:00']);
  put({
    id: 'tokyo_yamagin_ginza8', name: '山ぎん (Yamagin)', category: 'OMNI',
    lat: 35.668241, lng: 139.760714,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: 'Not gluten-free in practice: lunch curry and beef-stew sets, and simmered obanzai seasoned in broth at night; no ingredient details or gluten-free options are given.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan as described: beef stew, horse sashimi, grilled black cod, chicken, hamburg steak. A vegetable curry is on the lunch menu, but its base is not described.',
    hours_raw: 'Mon–Fri 11:30–13:30 and 18:00–23:00; closed weekends and holidays (Tabelog; one 2026 diner found it opening at 11:45). Cards listed on Tabelog, but a 2026 diner was told lunch was cash only. Smoking allowed.',
    hours: { 0: ld, 1: ld, 2: ld, 3: ld, 4: ld }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 8-chōme near Ginza Nine, behind a ryōtei-style door — 4 min from Shimbashi Stn',
    cuisine: 'Obanzai izakaya · ¥1,000 curry and beef-stew lunch sets · horse sashimi and grilled black cod at night', cuisine_type: 'obanzai',
    website: null, gmaps: gm('山ぎん 銀座8-7-16'), menu_url: null,
    notes: "[Obanzai · behind the ryōtei-style door] A 20-seat Ginza 8-chōme izakaya near Ginza Nine whose ryōtei-style entrance looks intimidating, but inside it is nostalgic and homely, with a ten-seat counter. Lunch is a short Japanese-Western list: vegetable curry (¥1,000, gently spiced), a generous beef-stew set, hamburg steak and steak, with barley tea on the house. At night it is a traditional obanzai house for business dinners, with simmered dishes, eggplant in broth, horse sashimi, chicken and grilled black cod with sake. Smoking is allowed.",
    chef_bio: {
      chef_name: null, roles: [], origin: 'Ginza 8-chōme; founding date not found in a source read',
      background: 'No source names the owner.', philosophy: null, specialty: 'Obanzai; beef stew; vegetable curry.',
      anecdotes: [
        { text: '"The entrance reminiscent of a traditional ryotei … may seem intimidating at first. However, once you open the sliding door, a nostalgic atmosphere welcomes you." — May 2026.', source: R + 'B528860460/' },
        { text: '"The simmered dishes and eggplant in broth were infused with flavors that brought back nostalgic memories." — June 2026.', source: R + 'B530744888/' },
        { text: '"The sign said it opened at 11:30, but it seemed to actually open at 11:45." — June 2026.', source: R + 'B529292209/' },
      ],
      japanese_sources_summary: '食べログ: 山ぎん、銀座8-7-16、新橋駅から302m、20席(カウンター10・テーブル)、平日11:30〜13:30・18:00〜23:00、土日祝休、カード可。2026年の口コミ: 料亭風の入口、昭和の雰囲気、野菜カレー1,000円(現金のみと)、ビーフシチュー定食、ハンバーグ・ステーキ、麦茶のサービス、夜は伝統的なおばんざい(煮物、茄子の煮浸し)、馬刺し、鶏、銀だら焼き、喫煙可。',
      confidence: 'low', sources: [TB, R + 'B528860460/', R + 'B530744888/', R + 'B529292209/', R + 'B529055313/', R + 'B526730091/', R + 'B532343006/'],
    },
    cultural_comfort: { level: 'japanese', note: 'Homely room behind a formal-looking door; smoking allowed. Bring cash for lunch.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [{ text: 'Beef stew, horse sashimi and grilled black cod.', source: R + 'B526730091/' }], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座8-7-16',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated April–June 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座八丁目7番16号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B528860460/', R + 'B529055313/', R + 'B530744888/'],
    price_note: 'Curry price from a May 2026 review; others without prices.', last_checked: TODAY, items: [
      it('野菜カレー', 'yasai karee', 'Vegetable curry (lunch)', '¥1,000', 'Lunch', 'ask', 'ask', '2026.', 'veg_curry'),
      it('ビーフシチュー定食', 'biifu shichuu teishoku', 'Beef stew set (lunch)', '', 'Lunch', 'ask', 'no', '', 'beef_stew'),
      it('おばんざい', 'obanzai', 'Obanzai: simmered dishes, eggplant in broth', '', 'Evening', 'ask', 'ask', '', 'obanzai'),
      it('馬刺し', 'basashi', 'Horse sashimi', '', 'Evening', 'ask', 'no', '', 'basashi'),
      it('銀だら焼き', 'gindara yaki', 'Grilled black cod', '', 'Evening', 'ask', 'no', '', 'gindara'),
    ] }, {
    cuisine: 'おばんざいの居酒屋・1,000円のカレーとビーフシチューのランチ・夜は馬刺しや銀だら焼き',
    neighborhood: '銀座八丁目、銀座ナイン近くの料亭風の入口。新橋駅から徒歩4分',
    gf_detail: '実際上グルテンフリーではありません。昼はカレーとビーフシチューの定食、夜は出汁で煮たおばんざい。原材料やグルテンフリーの対応は書かれていません。',
    vegan_detail: '記述上はヴィーガンではありません。ビーフシチュー、馬刺し、銀だら焼き、鶏、ハンバーグ。昼の野菜カレーもベースは書かれていません。',
    notes: '[おばんざい・料亭風の扉の奥] 銀座ナイン近く、料亭のような入口に一瞬ひるみますが、引き戸を開ければ懐かしく家庭的な20席の居酒屋で、カウンターは10席。昼は和洋の短い品書きで、やさしい辛さの野菜カレー(1,000円)、ボリュームのあるビーフシチュー定食、ハンバーグやステーキ、麦茶のサービスも。夜は接待にも使われる伝統的なおばんざいの店で、煮物、茄子の煮浸し、馬刺し、鶏、銀だら焼きを日本酒と。喫煙可。',
  });
}

save();
