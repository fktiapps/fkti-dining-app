// Osaka sweep (2-mile circle around Dotonbori), batch 68 — mom phase (≤20 seats).
//   + 焼鳥 御廉 (14-seat yakitori by Namba Walk B16, courses from 5 skewers — filed 'yakitori')
//   + 炫 (Chunagon's Ise-lobster and wagyu teppanyaki counter — filed 'other')
//   + 天ぷら 天月 (casual tempura from ¥275 with local sake — filed 'other'; 4th shop in Nippo Royal Bldg)
//   + かうぼーい 千日前本店 (black-wagyu hamburg steak and steak on a sizzling plate — filed 'other')
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-27';
const { put, save } = openCitySweep('osaka', TODAY, 68);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 焼鳥 御廉
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27142200/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_yakitori_oren_namba', name: '焼鳥 御廉 (Yakitori Oren)', category: 'OMNI',
    lat: 34.667427, lng: 135.502505, cuisine_type: 'yakitori',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: tare and soy-marinated dishes; chawanmushi and kamameshi broths not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken throughout.',
    hours_raw: 'Daily 18:00–23:00 (L.O. 22:30); closed irregularly, posted on Instagram (Tabelog). Reservations essential and hard to get (August–October 2026). Service charge ¥500 (Tabelog). 1F yakitori counter; 2F hot-pot courses and private bookings (August–October 2026). Cards, e-money and QR accepted.',
    hours: ALL(day(['18:00', '23:00'])), hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba 1-3-13 — 1 min from Namba Walk exit B16',
    cuisine: 'Yakitori courses of 5, 7 or 9 skewers · 9 skewers with chawanmushi ¥3,500 (August 2026) · seseri, kokoro, zuri, tebasaki, sasami, negima, chochin, cartilage, the rare "sori" cut · jidori sashimi, fresh liver sashimi and tataki · soy-marinated kumquat (unlaid yolk) and cream cheese · liver kamameshi · Toyo Bijin junmai daiginjo and other sake · beer from a swing tap · 6-seat L-shaped counter and tables, 14 seats',
    website: null, gmaps: gm('焼鳥 御廉 難波'), menu_url: null,
    notes: "[Yakitori · a hard-to-book yakitori counter by Namba Walk] A 14-seat yakitori spot a minute from Namba Walk exit B16, open since 2024, with a six-seat L-shaped counter around the grill downstairs and hot-pot courses upstairs. Book ahead; it fills up. Courses run 5, 7 or 9 skewers, and nine skewers with chawanmushi was just ¥3,500 in August 2026, big skewers, perfectly seasoned. Favorites include seseri, chochin, negima, cartilage and the rare \"sori\" cut. Start with the very fresh liver sashimi or tataki, and don't skip the soy-marinated kumquat. The liver kamameshi, cooked to finish, is a highlight. The sake list is strong (a limited Toyo Bijin junmai daiginjo stood out), and draft beer comes from a swing tap. One October diner noticed fewer items than in August for the same price. The owner accommodated one guest's special requests. ¥500 service charge.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 June 2024 (Tabelog)', background: 'Yakitori counter with a second-floor hot-pot room (August–October 2026 reviews).', philosophy: 'Fresh chicken and careful seasoning (August 2026 reviews).', specialty: 'Yakitori courses; liver kamameshi.',
      anecdotes: [
        { text: '"I reserved the course with 9 skewers of yakitori and chawanmushi for JPY 3,500. The grilling and seasoning were perfect, and every skewer was incredibly delicious." — August 2026.', source: R + 'B534759427/' },
        { text: '"The broth was refined, and the rice was perfectly cooked, standing out beautifully. I was truly impressed by how delicious kamameshi can be." — September 2026, kamameshi to finish.', source: R + 'B524915113/' },
      ],
      japanese_sources_summary: '食べログ: 焼鳥 御廉、大阪市中央区難波1-3-13、御堂筋線なんば駅B16出口から徒歩1分、毎日18:00〜23:00(L.O.22:30)、不定休(Instagramで告知)、予約可、サービス料500円、カード・電子マネー・QR可、14席(カウンター6、テーブル8)、2024年6月1日開店、貸切は電話で。口コミ(2026年8〜10月): 店主が事前のお願いに応えてくれた、ささみの焼き鳥、レバーの釜飯、締めの釜飯、スイングカランの生ビール、東洋美人の限定純米大吟醸(Toyo Bijin)、焼き鳥9本コース、地鶏刺しハーフ、希少部位のソリ、7本コースにレバ刺しと串3本、ねぎま・せせり・ちょうちん・軟骨、予約必須、2階は鍋コースのみ、1階カウンターで焼き鳥、9本と茶碗蒸しのコース3,500円、ソフトドリンクのおかわり、新鮮なレバーとたたき、5本のコース、金柑の醤油漬け、同じ値段で品数が減っていたという声、クリームチーズの醤油漬け、2階の貸切と飲み放題、L字のカウンター6席、せせり・こころ・手羽先・砂ずり・ささみ。',
      confidence: 'medium', sources: [TB, R + 'B534759427/', R + 'B524915113/', R + 'B527315403/', R + 'B536930811/', R + 'B537213881/', R + 'B537271718/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Reservation essential; small counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波1-3-13',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波一丁目3番13号 (go) 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534759427/', R + 'B527315403/', R + 'B537271718/'],
    price_note: 'Course price from an August 2026 review; ¥500 service charge.', last_checked: TODAY, items: [
      it('', '', '9-skewer course with chawanmushi', '¥3,500', 'Courses', 'no', 'no', 'August 2026.', 'nine'),
      it('', '', '5-skewer course', '', 'Courses', 'ask', 'no', 'October 2026.', 'five'),
      it('', '', '7-skewer course', '', 'Courses', 'ask', 'no', 'September 2026.', 'seven'),
      it('', '', 'Jidori sashimi (half portion available)', '', 'Small plates', 'ask', 'no', 'October 2026.', 'torisashi'),
      it('', '', 'Liver sashimi', '', 'Small plates', 'ask', 'no', 'September 2026.', 'reba'),
      it('', '', 'Liver kamameshi', '', 'Rice', 'no', 'no', 'September 2026.', 'kamameshi'),
      it('', '', 'Soy-marinated kumquat (unlaid yolk)', '', 'Small plates', 'no', 'no', 'August 2026.', 'kinkan'),
    ] }, {
    cuisine: '5本・7本・9本の焼き鳥のコース・9本と茶碗蒸しで3,500円(2026年8月)・せせり、こころ、砂ずり、手羽先、ささみ、ねぎま、ちょうちん、軟骨、希少部位のソリ・地鶏刺し、新鮮なレバ刺し、たたき・金柑の醤油漬けとクリームチーズの醤油漬け・レバーの釜飯・Toyo Bijinの純米大吟醸などの日本酒・スイングカランの生ビール・L字カウンター6席とテーブルで14席',
    neighborhood: '難波1-3-13。なんばウォークB16出口から徒歩1分',
    gf_detail: '実際にはグルテンフリーではありません。たれや醤油漬けの料理、茶碗蒸しや釜飯のだしの中身は不明。',
    vegan_detail: 'ヴィーガンではありません。鶏料理が中心。',
    notes: '[焼き鳥・なんばウォークそばの予約困難な焼き鳥カウンター] なんばウォークB16出口から1分の14席の焼き鳥の店で、2024年開店。1階は焼き台を囲むL字のカウンター6席、2階は鍋のコース。予約は必須で、すぐ埋まります。コースは5本・7本・9本で、9本と茶碗蒸しが2026年8月にわずか3,500円、串は大きく焼きも味付けも完璧という声。人気はせせり、ちょうちん、ねぎま、軟骨、希少部位のソリ。まずはとても新鮮なレバ刺しやたたき、金柑の醤油漬けもぜひ。締めのレバーの釜飯が見事。日本酒も充実していて、Toyo Bijinの限定純米大吟醸が好評、生ビールはスイングカランで。10月には8月と同じ値段で品数が減っていたという人も。事前のお願いに店主が応えてくれたという声も。サービス料500円。',
  });
}

// ================================================================ 炫
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27015062/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://www.chunagon.com/hikari/index.htm';
  put({
    id: 'osaka_teppanyaki_hikari_chunagon', name: '炫 (Hikari)', category: 'OMNI',
    lat: 34.667383, lng: 135.502024, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: soy-based sauces, ramen and garlic rice finishes. The kitchen swapped the soup for a guest\'s shrimp allergy (May 2026), so ask when booking.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Ise lobster, black wagyu, abalone.',
    hours_raw: 'Daily 11:00–15:30 (L.O. 14:30) and 17:00–22:00 (L.O. 20:30); closing days may vary (Tabelog). Reservations recommended (limited seats). Entrance shared with Chunagon; tell the reception you want teppanyaki (Tabelog). Service charge 10% (Tabelog). Cards and PayPay accepted; no e-money.',
    hours: ALL(day(['11:00', '15:30'], ['17:00', '22:00'])), hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba 1-4-4, Sennichimae Mirakukan B1F — by Namba Walk exit 16, on Sennichimae-dori',
    cuisine: 'Teppanyaki from the Ise-lobster house Chunagon · courses with live Ise lobster as sashimi, soup and teppan-grilled, plus black-wagyu fillet with three sauces and garlic chips · Hikari course · Ran lunch course about ¥10,000 · ¥8,800 course with lobster or meat · Ise-lobster ramen with Kujo green onion or garlic rice to finish · yuzu sorbet and dessert, anniversary plate by reservation · 20 counter seats',
    website: OWN, gmaps: gm('炫 千日前 鉄板焼き'), menu_url: null,
    notes: "[Teppanyaki · Chunagon's Ise-lobster and wagyu teppanyaki counter] A 20-seat teppanyaki counter in the basement of Sennichimae Mirakukan, run by Chunagon, the Ise-lobster specialist; you enter through Chunagon and tell reception you're here for teppanyaki. Courses center on live Ise lobster, served as sashimi with sashimi and sake soy, as a rich soup and grilled on the teppan with a special sauce, then black-wagyu fillet with three sauces and garlic chips. Finish with garlic rice or an Ise-lobster ramen with Kujo green onion. The Ran lunch course came to about ¥10,000 (May 2026), an ¥8,800 course offers lobster or meat as the main, and the Hikari course does both. Staff are chatty and good with celebrations, with an anniversary plate by reservation, and the kitchen swapped the soup for a guest's shrimp allergy. 10% service charge.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 19 July 2005 (Tabelog)', background: 'Teppanyaki produced by Chunagon, the Ise-lobster restaurant (Tabelog); official page chunagon.com/hikari.', philosophy: 'Live Ise lobster, black abalone and wagyu (Tabelog).', specialty: 'Ise-lobster and wagyu teppanyaki courses.',
      anecdotes: [
        { text: '"I enjoyed the \'Hikari Course\' featuring a full course of Ise lobster and beef fillet… To finish, I had garlic rice and ramen topped with Kujo green onions, packed with plenty of Ise lobster." — October 2026.', source: R + 'B518294375/' },
        { text: '"The anniversary plate was beautifully decorated with chocolate, almost too pretty to eat!" — May 2026, a celebration where the soup was switched to pumpkin for a shrimp allergy.', source: R + 'B528057036/' },
      ],
      japanese_sources_summary: '公式 chunagon.com/hikari。食べログ: 炫、大阪市中央区難波1-4-4 千日前味楽館B1F、なんば駅・近鉄難波駅から徒歩2分(なんばウォーク16番出口すぐ)、千日前通り沿い、入口は中納言と共通で受付に鉄板焼きと伝える、毎日11:00〜15:30(L.O.14:30)・17:00〜22:00(L.O.20:30)、休みは変動あり、予約可、サービス料10%、チャージなし、カード・PayPay可、電子マネー不可、20席(カウンターのみ)、2005年7月19日開店、伊勢海老の活き造りを鉄板焼きで、黒鮑と和牛のフルコース、記念日コース・ジャパンコース・デギュスタシオンコース。口コミ(2025年11月〜2026年10月): 伊勢海老と和牛、炫コース(伊勢海老と牛フィレのフルコース、前菜3種、伊勢海老のスープ、刺身、焼き、柚子のシャーベット、サラダ、フィレ、焼き野菜、ガーリックライスと九条ねぎのラーメン)、誕生日のプレート、刺身醤油と酒醤油、3種のソース、気さくなスタッフ、ランチの蘭コース約1万円、サーロインからフィレに変更、ガーリックチップ、海老アレルギーでスープをかぼちゃに変えてくれた、記念日プレートは予約制、8,800円のコースで伊勢海老か肉を選べる、父の60歳の誕生日に。',
      confidence: 'medium', sources: [TB, OWN, R + 'B518294375/', R + 'B528057036/', R + 'B527486351/', R + 'B536426017/', R + 'B537842695/', R + 'B516945788/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Enter via Chunagon; reserve ahead.' },
    safety: { ...SAFETY0, staff_allergy_handling: [{ text: 'A May 2026 reviewer reports the soup was changed to pumpkin for a guest with a shrimp allergy. Nothing on gluten.', source: R + 'B528057036/' }] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波1-4-4 千日前味楽館 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波一丁目4番4号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B527486351/', R + 'B536426017/', R + 'B518294375/'],
    price_note: 'Course prices from May and September 2026 reviews; 10% service charge.', last_checked: TODAY, items: [
      it('', '', 'Hikari course (Ise lobster and beef fillet)', '', 'Courses', 'no', 'no', 'October 2026.', 'hikari'),
      it('', '', 'Ran lunch course (Ise lobster and meat)', '¥10,000 approx.', 'Courses', 'no', 'no', 'May 2026.', 'ran'),
      it('', '', 'Teppanyaki course (lobster or meat main)', '¥8,800', 'Courses', 'no', 'no', 'September 2026.', 'course8800'),
      it('', '', 'Ise-lobster ramen with Kujo green onion (finish)', '', 'Courses', 'no', 'no', 'October 2026.', 'ramen'),
      it('', '', 'Garlic rice (finish)', '', 'Courses', 'ask', 'no', 'May and October 2026.', 'garlic_rice'),
    ] }, {
    cuisine: '伊勢海老の中納言の鉄板焼き・活き伊勢海老を刺身、スープ、鉄板焼きで、黒毛和牛フィレは3種のソースとガーリックチップで・炫コース・ランチの蘭コース約1万円・伊勢海老か肉を選べる8,800円のコース・締めは伊勢海老の九条ねぎラーメンかガーリックライス・柚子シャーベットとデザート、記念日プレートは予約制・カウンター20席',
    neighborhood: '難波1-4-4 千日前味楽館B1F。なんばウォーク16番出口すぐ、千日前通り沿い',
    gf_detail: '実際にはグルテンフリーではありません。醤油系のソース、締めのラーメンとガーリックライス。海老アレルギーの客のためにスープを変えてくれた例があるので(2026年5月)、予約時に相談を。',
    vegan_detail: 'ヴィーガンではありません。伊勢海老、黒毛和牛、鮑。',
    notes: '[鉄板焼き・中納言の伊勢海老と和牛の鉄板焼き] 千日前味楽館の地下にある20席の鉄板焼きのカウンターで、伊勢海老料理の中納言が営み、入口は中納言と共通なので受付で鉄板焼きと伝えます。コースの主役は活き伊勢海老で、刺身醤油と酒醤油で味わう刺身、濃厚なスープ、特製ソースの鉄板焼き。続いて黒毛和牛フィレを3種のソースとガーリックチップで。締めはガーリックライスか、九条ねぎの伊勢海老ラーメン。ランチの蘭コースは約1万円(2026年5月)、8,800円のコースは伊勢海老か肉をメインに選べ、炫コースは両方。スタッフは気さくでお祝いにも強く、記念日プレートは予約制、海老アレルギーの客のためにスープを変えてくれたことも。サービス料10%。',
  });
}

// ================================================================ 天ぷら 天月
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27116248/'; const R = TB + 'dtlrvwlst/';
  const D = day(['18:00', '23:00']);
  put({
    id: 'osaka_tempura_amatsuki_shinsaibashi', name: '天ぷら 天月 (Tempura Amatsuki)', category: 'OMNI',
    lat: 34.67063, lng: 135.500905, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat tempura batter; tentsuyu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood tempura and a sashimi otoshi; batter not described.',
    hours_raw: 'Mon, Tue and Thu–Sun 18:00–23:00 (tempura L.O. 22:00); closed Wednesday (Tabelog). Reservations available. Otoshi ¥550, a sashimi platter (Tabelog). Cards accepted; no e-money.',
    hours: { 0: D, 1: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinsaibashisuji 2-7-11, Nippo Royal Bldg 1F — 3 min from Namba Stn exit 14',
    cuisine: 'Casual tempura izakaya · tempura from ¥275 a piece, fried to order · head-on shrimp, sweetfish, conger eel, pumpkin, maitake, shiitake · tempura-egg rice to finish · sashimi platter as otoshi (¥550) · yam with ume · wide range of local sake, wine · 8 counter seats and a table for six',
    website: null, gmaps: gm('天ぷら 天月 心斎橋'), menu_url: null,
    notes: "[Tempura · casual counter tempura with local sake near Shinsaibashi] A narrow tempura izakaya on the ground floor of a Shinsaibashi-suji building, open since 2020, with eight counter seats and a table at the back. It's tempura without the stiffness: pieces from ¥275, fried to order and sent out at a steady pace, light and not greasy, so diners feel fine the next day. The head-on shrimp is the star, crisp head and juicy body, and sweetfish, conger eel and maitake are favorites; finish with a tempura-egg rice bowl. Meals start with a ¥550 sashimi-platter otoshi, and the local sake list is long. The owner is friendly and the service attentive. Expect ¥5,000–8,000 with drinks. Closed Wednesdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 22 January 2020 (Tabelog)', background: 'Tempura izakaya with local sake (Tabelog).', philosophy: 'Seasonal ingredients served simply and hot (Tabelog).', specialty: 'Head-on shrimp tempura.',
      anecdotes: [
        { text: '"I had always thought that tempura was a bit intimidating, but the owner was very approachable… I also noticed that I had no stomach discomfort the next day." — March 2026.', source: R + 'B524418804/' },
        { text: '"The conger eel was crispy on the outside and fluffy on the inside, generous in portion, and incredibly tasty. All the tempura was not greasy at all." — August 2026.', source: R + 'B534270944/' },
      ],
      japanese_sources_summary: '食べログ: 天ぷら 天月、大阪市中央区心斎橋筋2-7-11 日宝ロイヤルビル1F、なんば駅14番出口・心斎橋駅5番出口から徒歩3分、月・火・木〜日18:00〜23:00(天ぷらL.O.22:00)、水曜休み、予約可、お通し550円(お造り盛り合わせ)、カード可、電子マネー不可、14席(カウンター8、6人テーブル1)、2020年1月22日開店、天ぷらは275円から、地酒が豊富。口コミ(2025年11月〜2026年9月): お造り、肉厚のかぼちゃ、有頭海老、気さくな店主、翌日胃もたれしない、うなぎの寝床のような細長い店、奥に宴会席、梅肉の山芋、鮎・海老・穴子、油っぽくない、提供のタイミングがいい、舞茸、しいたけ、締めの天玉丼、ワイン。',
      confidence: 'medium', sources: [TB, R + 'B524418804/', R + 'B534270944/', R + 'B519862466/', R + 'B533264400/', R + 'B534272269/', R + 'B535048145/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter; otoshi charged.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋2-7-11 日宝ロイヤルビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋二丁目7番11号 (go) 25m; same building as Daikichi, SOU and Shellfish, Shrimp & Crab; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B519862466/', R + 'B534270944/'],
    price_note: 'Tempura from ¥275 a piece and ¥550 otoshi (Tabelog); reviewers spent ¥4,000–9,999.', last_checked: TODAY, items: [
      it('', '', 'Tempura (per piece)', 'from ¥275', 'Tempura', 'no', 'no', 'Tabelog.', 'tempura'),
      it('', '', 'Head-on shrimp tempura', '', 'Tempura', 'no', 'no', 'November 2025; March 2026.', 'ebi'),
      it('', '', 'Sweetfish tempura', '', 'Tempura', 'no', 'no', 'August 2026.', 'ayu'),
      it('', '', 'Conger eel tempura', '', 'Tempura', 'no', 'no', 'August 2026.', 'anago'),
      it('', '', 'Tempura-egg rice bowl', '', 'Rice', 'no', 'no', 'September 2026.', 'tentama'),
      it('', '', 'Sashimi platter (otoshi)', '¥550', 'Otoshi', 'ask', 'no', 'Tabelog.', 'otoshi'),
    ] }, {
    cuisine: '気軽な天ぷらの居酒屋・天ぷらは1つ275円から、注文ごとに揚げる・有頭海老、鮎、穴子、かぼちゃ、舞茸、しいたけ・締めの天玉丼・お通しはお造り盛り合わせ(550円)・梅肉の山芋・地酒が豊富、ワインも・カウンター8席と6人テーブル1つ',
    neighborhood: '心斎橋筋2-7-11 日宝ロイヤルビル1F。なんば駅14番出口から徒歩3分',
    gf_detail: 'グルテンフリーではありません。小麦の天ぷらの衣、天つゆ。',
    vegan_detail: 'ヴィーガンではありません。魚介の天ぷら、お造りのお通し。衣の中身は不明。',
    notes: '[天ぷら・心斎橋筋そばの地酒と気軽なカウンター天ぷら] 心斎橋筋のビルの1階にある細長い天ぷらの居酒屋で、2020年開店、カウンター8席と奥にテーブル。堅苦しさのない天ぷらで、1つ275円から、注文ごとに揚げてテンポよく出され、軽く油っぽくないので翌日も胃もたれしないという声。主役は有頭海老で、頭はカリッと身はぷりぷり。鮎、穴子、舞茸も人気で、締めは天玉丼。最初にお造り盛り合わせのお通し(550円)、地酒も豊富。店主は気さくで、接客も細やか。飲んで5,000〜8,000円ほど。水曜定休。',
  });
}

// ================================================================ かうぼーい 千日前本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27011339/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://www.steakcowboy.jp/';
  put({
    id: 'osaka_cowboy_sennichimae_honten', name: 'かうぼーい 千日前本店 (Cowboy Sennichimae Honten)', category: 'OMNI',
    lat: 34.667949, lng: 135.503348, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: hamburg steak usually uses breadcrumbs; demi-glace, teriyaki and onion sauces; fried shrimp.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: black-wagyu hamburg steak and steaks.',
    hours_raw: 'Daily 11:00–23:00 (L.O. food 22:30, drinks 22:45) (Tabelog). Reservations accepted; walk-ins usually fine (June–July 2026). Cards, e-money and QR accepted (Tabelog).',
    hours: ALL(day(['11:00', '23:00'])), hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sennichimae 1-8-16 — just off an alley, 3 min from Namba Walk exit B20',
    cuisine: 'Black-wagyu hamburg steak and steak on a sizzling plate · Western Mama hamburg 200 g ¥1,100 · hamburg with fried shrimp 200 g ¥1,650 · "Wrestler" 500 g ¥2,700 · five sauces: demi-glace, ponzu, onion, teriyaki, salt · strip-loin steak from 100 g, pre-cut for chopsticks · Mega Combo 450 g (hamburg, chicken, pork, skirt) · small rice ¥150, set A with rice and mini salad · red wine · paper bibs · 14 seats',
    website: OWN, gmaps: gm('かうぼーい 千日前本店'), menu_url: null,
    notes: "[Steak · black-wagyu hamburg steak on a sizzling plate in Sennichimae] The original Cowboy, a 14-seat Western-style steak and hamburg shop just off an alley in Sennichimae, with wooden decor and counter seats easy for solo diners. The hamburg steak is pure black wagyu, no pork mixed in, served sizzling on a teppan so the sauce spits (a paper bib is provided), fluffy and juicy when you cut in. Pick from five sauces: demi-glace, ponzu, onion, teriyaki or salt. The Western Mama 200 g is ¥1,100 and the 500 g \"Wrestler\" ¥2,700 (2025–2026). Steaks start at 100 g and come pre-cut for chopsticks, and the Mega Combo piles 450 g of hamburg, chicken, pork and skirt. Add rice and salad for a set, or red wine. Open daily until 11 pm.",
    chef_bio: { chef_name: null, roles: [], origin: 'Sennichimae main shop (honten) (Tabelog)', background: 'Cowboy steak and hamburg shops; official site steakcowboy.jp (Tabelog).', philosophy: 'Black wagyu only for the hamburg (September 2026 review).', specialty: 'Black-wagyu hamburg steak.',
      anecdotes: [
        { text: '"No mixed meats or pork—just pure Black Wagyu! Served sizzling hot on a teppan… There are 5 types of hamburger sauces to choose from: Demiglace, Ponzu, Onion, Teriyaki, and Salt Sauce." — September 2026, Wrestler 500 g ¥2,700.', source: R + 'B535708509/' },
        { text: '"It comes sizzling hot on a teppan, so the sauce splatters everywhere!!" — November 2025, Western Mama hamburg 200 g ¥1,100; a paper bib is provided.', source: R + 'B518295895/' },
      ],
      japanese_sources_summary: '公式 steakcowboy.jp。食べログ: かうぼーい 千日前本店、大阪市中央区千日前1-8-16、なんばウォークB-20出口から徒歩3分、毎日11:00〜23:00(L.O.料理22:30・ドリンク22:45)、予約可、カード・電子マネー・QR可、14席、禁煙。口コミ(2025年11月〜2026年9月): 路地を少し入った場所、洋風の店内、窓辺の木の飾り、ウエスタンママハンバーグ200g 1,100円と小ライス150円、鉄板で熱々、紙エプロン、肉汁、黒毛和牛のみ、メガコンボ450g(ハンバーグ、鶏、豚、ハラミ)、赤ワイン、100gから注文できる、土曜の昼に予約なしで入れた、ロースステーキSS 100gとAセット(ライスとミニサラダ)、昔ながらの洋風のソース、カット済みで箸で食べられる、ハンバーグ200gとエビフライ1,650円、デミグラス、黒毛和牛ハンバーグ「レスラー」500g 2,700円、ソースはデミ・ポン酢・オニオン・照り焼き・塩の5種、カウンター席でひとりでも。',
      confidence: 'medium', sources: [TB, OWN, R + 'B535708509/', R + 'B518295895/', R + 'B528162162/', R + 'B530027049/', R + 'B533941186/', R + 'B534372661/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter seats; easy solo.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区千日前1-8-16',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区千日前一丁目8番16号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B518295895/', R + 'B534372661/', R + 'B535708509/'],
    price_note: 'Prices from November 2025–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Western Mama hamburg steak (200 g)', '¥1,100', 'Hamburg', 'no', 'no', 'November 2025.', 'mama'),
      it('', '', 'Hamburg steak (200 g) with fried shrimp', '¥1,650', 'Hamburg', 'no', 'no', 'July 2026.', 'ebifry'),
      it('', '', 'Black-wagyu hamburg "Wrestler" (500 g)', '¥2,700', 'Hamburg', 'no', 'no', 'September 2026.', 'wrestler'),
      it('', '', 'Strip-loin steak (from 100 g)', '', 'Steak', 'ask', 'no', 'June and August 2026.', 'loin'),
      it('', '', 'Mega Combo (450 g)', '', 'Steak', 'no', 'no', 'May 2026.', 'mega'),
      it('', '', 'Small rice', '¥150', 'Rice', 'ask', 'vegan', 'November 2025.', 'rice'),
    ] }, {
    cuisine: '鉄板で出す黒毛和牛のハンバーグとステーキ・ウエスタンママハンバーグ200g 1,100円・ハンバーグ200gとエビフライ1,650円・「レスラー」500g 2,700円・ソースはデミグラス、ポン酢、オニオン、照り焼き、塩の5種・ロースステーキは100gから、箸で食べられるようカット済み・メガコンボ450g(ハンバーグ、鶏、豚、ハラミ)・小ライス150円、ライスとミニサラダのAセット・赤ワイン・紙エプロン・14席',
    neighborhood: '千日前1-8-16。路地を少し入った場所、なんばウォークB20出口から徒歩3分',
    gf_detail: '実際にはグルテンフリーではありません。ハンバーグには通常パン粉、デミグラス・照り焼き・オニオンのソース、エビフライ。',
    vegan_detail: 'ヴィーガンではありません。黒毛和牛のハンバーグとステーキ。',
    notes: '[ステーキ・千日前の鉄板で出す黒毛和牛ハンバーグ] 千日前の路地を少し入ったところにある、かうぼーいの本店で、14席の洋風のステーキとハンバーグの店。木の飾りの店内で、カウンター席はひとりでも入りやすい。ハンバーグは豚を混ぜない黒毛和牛だけで、熱々の鉄板でソースが跳ねるので紙エプロン付き、切るとふわっと肉汁があふれます。ソースはデミグラス、ポン酢、オニオン、照り焼き、塩の5種から。ウエスタンママ200gは1,100円、500gの「レスラー」は2,700円(2025〜2026年)。ステーキは100gからで、箸で食べられるようカット済み。メガコンボはハンバーグ、鶏、豚、ハラミで450g。ライスとサラダのセットや赤ワインも。毎日23時まで。',
  });
}

save();
