// Osaka sweep (2-mile circle around Dotonbori), batch 62 — mom phase (≤20 seats).
//   + おこのみやき 三平 (Shinsaibashi-suji negiyaki counter since 2004; not the Hozenji Sanpei record)
//   + 貝と海老そして蟹 (6-seat privately run lobster-and-wine counter → mom_and_pop; filed 'other')
//   + 極味焼肉 牛吾 (2F yakiniku from a meat wholesaler, cuts of the day — filed 'other')
//   + 知留久 法善寺店 (creative kushikatsu since 1946, omakase until you say stop — filed 'other')
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-27';
const { put, save } = openCitySweep('osaka', TODAY, 62);
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ おこのみやき 三平
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27000850/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://www.okonomiyaki-sanpei.com';
  const W = day(['12:00', '15:00'], ['17:00', '22:00']), S = day(['12:00', '15:00'], ['17:00', '21:30']);
  put({
    id: 'osaka_okonomiyaki_sanpei_shinsaibashi', name: 'おこのみやき 三平 (Okonomiyaki Sanpei)', category: 'OMNI',
    lat: 34.670435, lng: 135.502159, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: okonomiyaki batter with flour; Osaka sauce; noodles in the modan-yaki.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef tendon, pork, seafood; egg in the batter is usual.',
    hours_raw: 'Tue–Sat 12:00–15:00 (L.O. 14:20) and 17:00–22:00 (L.O. 21:30); Sun and holidays 12:00–15:00 and 17:00–21:30 (L.O. 21:00); closed Monday (Tabelog). No reservations (Tabelog). Cards accepted. English menu (August 2026).',
    hours: { 1: W, 2: W, 3: W, 4: W, 5: W, 6: S }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinsaibashisuji 2-2-10, 1F — about 6 min from Shinsaibashi Stn exit 6 or Namba Stn exit 14',
    cuisine: 'Okonomiyaki cooked in front of you at the counter · signature negiyaki "Fujiyama" piled with green onion, with beef tendon · seafood negiyaki with shrimp and octopus · mixed okonomiyaki · modan-yaki with noodles · tonpeiyaki · kimchi okonomiyaki · Sanpei set for two and pair set · batter made with soy milk and nagaimo · house blend of Osaka sauces · about 30 shochu · English menu · 15 counter seats',
    website: OWN, gmaps: gm('おこのみやき 三平 心斎橋'), menu_url: null,
    notes: "[Okonomiyaki · a negiyaki counter off Shinsaibashi-suji since 2004] A long counter under a red lantern, tucked into a building of snack bars off Shinsaibashi-suji, cooking okonomiyaki right in front of you since 2004. The draw is the negiyaki \"Fujiyama\", heaped with green onion over tender beef tendon; one visitor came back a year later just for it. The batter is made with soy milk and nagaimo for a smooth texture, and the sauce is a house blend of Osaka sauces. There's also a seafood negiyaki packed with shrimp and octopus, a well-balanced mixed okonomiyaki, a modan-yaki with chewy noodles and the popular tonpeiyaki, with around 30 shochu to drink. Sets for two let you try a mini negiyaki and two okonomiyaki. Prices are low for the area, and there's an English menu. No reservations; closed Mondays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 26 May 2004 (Tabelog)', background: 'Featured on Osaka TV programs in 2017 (Tabelog); official site okonomiyaki-sanpei.com.', philosophy: 'House batter with plenty of soy milk and nagaimo; a blend of Osaka sauces (Tabelog).', specialty: 'Negiyaki "Fujiyama".',
      anecdotes: [
        { text: '"I was introduced to this restaurant by the concierge during my visit to Osaka last year, and I was amazed by the okonomiyaki with green onions and beef tendon." — September 2026, a return visit.', source: R + 'B534942544/' },
        { text: '"The menu is now also available in English… I ordered the Negiyaki, and it was just as delicious as I remembered! My friend from Tokyo was surprised by the low prices." — August 2026.', source: R + 'B534089667/' },
      ],
      japanese_sources_summary: '公式 okonomiyaki-sanpei.com。食べログ: おこのみやき 三平、大阪市中央区心斎橋筋2-2-10 新日本三ツ寺ビル1F、心斎橋駅6番出口・なんば駅14番出口から徒歩6分、火〜土12:00〜15:00(L.O.14:20)・17:00〜22:00(L.O.21:30)、日・祝12:00〜15:00・17:00〜21:30(L.O.21:00)、月曜休み、予約不可、カード可、15席(カウンター)、2004年5月26日開店、2017年に関西のテレビ番組で紹介、看板はねぎ焼き「Fujiyama」、豆乳と山芋たっぷりの生地、大阪のソースをブレンド、とん平焼き、焼酎約30種。口コミ(2026年8〜9月): アメ村近くでランチ、モダン焼きのもちもちの麺、ミックス、スナックの多いビル、英語メニュー、スタッフは海外出身で日本語が上手、ねぎ焼き、安い、赤ちょうちん、奥に長いカウンター、ペアセット(キムチ、肉入りねぎ焼き)、約9席のカウンターで目の前で焼く、コンシェルジュの紹介、ねぎと牛すじ、海鮮ねぎ焼き(海老とタコ)、カウンターにソースやマヨはない、三平セット(ミニねぎ焼きとお好み焼き2種)、牛すじのねぎ焼き。',
      confidence: 'medium', sources: [TB, OWN, R + 'B534942544/', R + 'B534089667/', R + 'B533123592/', R + 'B534535382/', R + 'B535290894/', R + 'B535901857/'] },
    cultural_comfort: { level: 'english', note: 'English menu (August 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋2-2-10 新日本三ツ寺ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated August–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: OSM おこのみやき三平 node/6807910188 2m; GSI 大阪府大阪市中央区心斎橋筋二丁目2番10号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B535901857/', R + 'B535290894/'],
    price_note: 'No prices captured; reviewers spent ¥1,000–2,999.', last_checked: TODAY, items: [
      it('', '', 'Negiyaki "Fujiyama" (green onion, beef tendon)', '', 'Negiyaki', 'no', 'no', 'Tabelog; September 2026.', 'fujiyama'),
      it('', '', 'Seafood negiyaki', '', 'Negiyaki', 'no', 'no', 'September 2026.', 'kaisen_negi'),
      it('', '', 'Mixed okonomiyaki', '', 'Okonomiyaki', 'no', 'no', 'August 2026.', 'mix'),
      it('', '', 'Modan-yaki', '', 'Okonomiyaki', 'no', 'no', 'August 2026.', 'modan'),
      it('', '', 'Tonpeiyaki', '', 'Teppan', 'no', 'no', 'Tabelog.', 'tonpei'),
      it('', '', 'Sanpei set for two', '', 'Sets', 'no', 'no', 'September 2026.', 'set'),
    ] }, {
    cuisine: 'カウンターの目の前で焼くお好み焼き・看板はねぎたっぷりで牛すじ入りのねぎ焼き「Fujiyama」・海老とタコの海鮮ねぎ焼き・ミックス・麺入りのモダン焼き・とん平焼き・キムチのお好み焼き・2人用の三平セットとペアセット・豆乳と山芋の生地・大阪のソースのブレンド・焼酎約30種・英語メニュー・カウンター15席',
    neighborhood: '心斎橋筋2-2-10 新日本三ツ寺ビル1F。心斎橋駅6番出口・なんば駅14番出口から徒歩約6分',
    gf_detail: 'グルテンフリーではありません。小麦粉の生地、大阪のソース、モダン焼きの麺。',
    vegan_detail: 'ヴィーガンではありません。牛すじ、豚肉、魚介、生地には卵が入るのが一般的。',
    notes: '[お好み焼き・心斎橋筋そばの2004年からのねぎ焼きカウンター] 心斎橋筋から少し入った、スナックの多いビルの中、赤ちょうちんの奥に長いカウンターがあり、2004年から目の前でお好み焼きを焼く店。目当てはねぎ焼き「Fujiyama」で、やわらかい牛すじの上にねぎが山盛り。1年後にこれのために再訪した人も。生地は豆乳と山芋たっぷりでなめらか、ソースは大阪のソースを合わせたオリジナル。海老とタコの海鮮ねぎ焼き、バランスのいいミックス、もちもちの麺のモダン焼き、人気のとん平焼きもあり、焼酎は約30種。2人用のセットでミニねぎ焼きとお好み焼き2種を食べ比べも。このあたりでは値段も手頃で、英語メニューあり。予約不可、月曜定休。',
  });
}

// ================================================================ 貝と海老そして蟹
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27070654/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://kaiebi.com/';
  const D = day(['12:00', '17:00'], ['17:00', '01:00']);
  put({
    id: 'osaka_kai_to_ebi_soshite_kani', name: '貝と海老そして蟹 (Shellfish, Shrimp & Crab)', category: 'OMNI',
    lat: 34.67045, lng: 135.500889, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: dumplings, curry and sauces not described for wheat. Ask when booking.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: lobster, crab, shrimp and shellfish.',
    hours_raw: 'Daily 12:00–17:00 (lunch by reservation only, one group a day, book 3+ days ahead) and 17:00–1:00 am (last entry 22:30); closed irregularly, with October dates posted; may open late or close early as a privately run shop (Tabelog). Order lobster by the day before (May 2026). Tipping system and one-drink policy (Tabelog). Store large luggage in a locker first. Cards, Suica-type IC and QR accepted.',
    hours: {}, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shinsaibashisuji 2-7-11, Nippo Royal Bldg 1F — about 5 min from Namba or Shinsaibashi Stn',
    cuisine: 'Seafood and wine counter · live lobster steamed in front of you, with three sauces · satisfaction course with lobster ¥12,000 (January 2026) · chef\'s select lunch course, one group a day · crab · shrimp and chive dumplings · ajillo · "Kanpou curry" · shochu highball with a whole lemon · wine pairing · shared dishes portioned for two · 6 counter seats',
    website: OWN, gmaps: gm('貝と海老そして蟹 心斎橋'), menu_url: null,
    notes: "[Seafood · a six-seat lobster-and-wine counter off Shinsaibashi-suji] A privately run six-seat counter behind lanterns near Shinsaibashi-suji, open since 2013 and built for dates and celebrations. The specialty is live lobster, steamed in front of you and served with three sauces; order it by the day before. The ¥12,000 course with lobster (January 2026) runs through inventive dishes such as a rich ajillo and a \"Kanpou curry\". À la carte there's meaty crab, big shrimp-and-chive dumplings and a shochu highball made with a whole lemon. Shared dishes come portioned for two, and there's a good wine list with pairings. Lunch is a chef's select course for one group a day, booked three days ahead. The master seems gruff at first but warms up. Note the tipping system and one-drink policy, and leave big luggage in a locker. Closed irregularly.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 February 2013 (Tabelog)', background: 'A small, privately run counter (Tabelog); official site kaiebi.com.', philosophy: 'Live lobster with wine for special occasions (Tabelog).', specialty: 'Steamed live lobster.',
      anecdotes: [
        { text: '"I had the satisfaction course featuring live lobster as the main dish (JPY 12,000)… This was my first time enjoying such plump and flavorful lobster. Personally, I loved the rich and savory ajillo." — January 2026.', source: R + 'B521086782/' },
        { text: '"There are three different sauces to enhance the flavor… Be sure to make a reservation for the lobster by the day before!" — May 2026.', source: R + 'B527435210/' },
      ],
      japanese_sources_summary: '公式 kaiebi.com。食べログ: 貝と海老そして蟹、大阪市中央区心斎橋筋2-7-11 日宝ロイヤルビル1F、なんば駅・心斎橋駅から徒歩5分、毎日12:00〜17:00・17:00〜翌1:00(最終入店22:30)、ランチは1日1組の予約制で3日前までに、個人経営のため開店が遅れたり早じまいの場合あり、不定休(10月は1日・8日夜・19日夜・23日休み)、チップ制度あり・ワンドリンク制、大きな荷物はコインロッカーに、カード・交通系IC・QR可、6席(カウンター、貸切は8席まで)、2013年2月1日開店、目の前で蒸す活オマール海老とワイン、誕生日や記念日はデザートプレート。口コミ(2025年12月〜2026年10月): 丸ごとレモンの焼酎ハイボール、2人分の量で出してくれる、活オマールの満足コース12,000円、アヒージョ、カンポウカレー、ワインが豊富、デート向き、海老とニラの餃子、3種のソース、蟹、オマールは前日までに予約、提灯、シェフおまかせのランチコース1日1組、カウンターのみ、ペアリングワイン、マスターは最初は無愛想に見えたが気さく。',
      confidence: 'medium', sources: [TB, OWN, R + 'B521086782/', R + 'B527435210/', R + 'B526054523/', R + 'B530949707/', R + 'B538074508/', R + 'B349484896/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Six-seat counter; reserve, especially for lobster.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋2-7-11 日宝ロイヤルビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained, with October closing dates); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋二丁目7番11号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B521086782/', R + 'B527435210/', R + 'B526054523/'],
    price_note: 'Course price from a January 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Satisfaction course with live lobster', '¥12,000', 'Courses', 'no', 'no', 'January 2026.', 'manzoku'),
      it('', '', 'Steamed live lobster (order by the day before)', '', 'Seafood', 'ask', 'no', 'April–May 2026.', 'lobster'),
      it('', '', 'Chef\'s select lunch course (one group a day)', '', 'Courses', 'no', 'no', 'October 2026.', 'lunch'),
      it('', '', 'Shrimp and chive dumplings', '', 'Small plates', 'no', 'no', 'April 2026.', 'gyoza'),
      it('', '', 'Ajillo', '', 'Small plates', 'ask', 'no', 'January 2026.', 'ajillo'),
      it('', '', 'Whole-lemon shochu highball', '', 'Drinks', 'ask', 'vegan', 'December 2025.', 'lemon'),
    ] }, {
    cuisine: '魚介とワインのカウンター・目の前で蒸す活オマール海老、3種のソース・活オマールの満足コース12,000円(2026年1月)・1日1組のシェフおまかせランチコース・蟹・海老とニラの餃子・アヒージョ・カンポウカレー・丸ごとレモンの焼酎ハイボール・ペアリングワイン・2人分で出す取り分け料理・カウンター6席',
    neighborhood: '心斎橋筋2-7-11 日宝ロイヤルビル1F。なんば駅・心斎橋駅から徒歩約5分',
    gf_detail: '実際にはグルテンフリーではありません。餃子、カレー、ソースの小麦は不明。予約時に相談を。',
    vegan_detail: 'ヴィーガンではありません。オマール海老、蟹、海老、貝。',
    notes: '[魚介・心斎橋筋そばの6席のオマール海老とワインのカウンター] 心斎橋筋近く、提灯の奥にある個人経営のカウンター6席の店で、2013年開店、デートやお祝いにぴったり。名物は活オマール海老で、目の前で蒸して3種のソースで。前日までに予約を。オマールの満足コース(12,000円、2026年1月)は濃厚なアヒージョや「カンポウカレー」など独創的な料理が続きます。単品では身の詰まった蟹、大きな海老とニラの餃子、丸ごとレモンの焼酎ハイボールも。取り分け料理は2人分で出してくれ、ワインも豊富でペアリングも。昼は1日1組のシェフおまかせコースで、3日前までに予約。マスターは最初は無愛想に見えても打ち解けると気さく。チップ制度とワンドリンク制があり、大きな荷物はロッカーに。不定休。',
  });
}

// ================================================================ 極味焼肉 牛吾
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27042972/'; const R = TB + 'dtlrvwlst/';
  const W = day(['17:00', '00:30']), H = day(['17:00', '22:00']);
  put({
    id: 'osaka_kiwami_yakiniku_gyugo', name: '極味焼肉 牛吾 (Kiwami Yakiniku Gyugo)', category: 'OMNI',
    lat: 34.670412, lng: 135.501726, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: yakiniku sauces and marinades not described; salt-and-lemon tongue is an option. Ask.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef and offal.',
    hours_raw: 'Mon–Sat 17:00–0:30; holidays 17:00–22:00; closed Sunday; may close early when cuts sell out, so call ahead (Tabelog). Reservations available, including same-day online (June 2024). Cover charge ¥500 (Tabelog). Cards, e-money and QR accepted.',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: W }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shinsaibashisuji 2-2-13, 2F — about 5 min from Shinsaibashi or Namba Stn',
    cuisine: 'Yakiniku from a direct meat supplier · cuts of the day recommended by the master: thick-cut salted tongue with lemon, kuri, hanging tender, nakaochi, thin-sliced top blade, tenderloin, lean cuts, tripe, mostly ¥1,500–2,000 a plate · kimchi platter · strip-loin dashi chazuke and yuzu-tea rice to finish · courses to budget · counter and tables, 20 seats',
    website: null, gmaps: gm('極味焼肉 牛吾 心斎橋'), menu_url: null,
    notes: "[Yakiniku · a second-floor yakiniku counter from a meat supplier] A cozy second-floor yakiniku spot off Shinsaibashi-suji, run by a direct meat supplier, with a counter that works for solo diners and tables for groups. Ask the friendly master what's best today, and plates arrive in a well-paced order. Cuts run about ¥1,500–2,000 each (January 2026): thick salted tongue to finish with lemon, kuri, hanging tender, nakaochi, thin top blade and tripe. Regulars praise the quality for the price, though one August diner found the meat average. Finish with the strip-loin dashi chazuke or yuzu-tea rice. Courses can be built to a budget. It fills up on Fridays, but same-day online booking sometimes works. There's a ¥500 cover charge. Closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Shinsaibashi-suji 2-chōme, 2F (Tabelog)', background: 'Yakiniku run by a direct meat supplier (Tabelog).', philosophy: 'Premium cuts at wholesale value (Tabelog).', specialty: 'Cuts of the day; strip-loin dashi chazuke.',
      anecdotes: [
        { text: '"I order items like tongue, thinly sliced top blade, kuri (chestnut), hanging tender, and mountain chain tripe, all priced between JPY 1500 and JPY 2000, while asking the master for recommendations of the day." — January 2026.', source: R + 'B521744470/' },
        { text: '"The strip loin dashi chazuke served at the end is refreshing and exceptional." — March 2024.', source: R + 'B482496700/' },
      ],
      japanese_sources_summary: '食べログ: 極味焼肉 牛吾、大阪市中央区心斎橋筋2-2-13 宝山心斎橋ビル2F、心斎橋駅・なんば駅から徒歩5分、月〜土17:00〜24:30、祝17:00〜22:00、日曜休み、売り切れ次第早じまいの場合あり(電話で確認を)、予約可、チャージ500円、カード・電子マネー・QR可、20席、ビルの2階の隠れ家、ひとりでも、4〜6人のテーブル、直卸の肉、予算に合わせたコース。口コミ(2024年3月〜2026年8月): タン、ヒレ、赤身、日替わりの部位、締めのサーロインの出汁茶漬け、コスパがいい、厚切りのヒレ、タレは普通、カウンター、金曜は満席でも当日のネット予約が取れた、中落ち、クリ、ハンガー、塩タンにレモン、タン元、キムチ盛り、上ミスジの薄切り、ホルモン、1皿1,500〜2,000円、マスターのおすすめ、出す順番がいい、柚子茶のご飯、肉は普通という声、店長が楽しく部位を説明。',
      confidence: 'medium', sources: [TB, R + 'B521744470/', R + 'B482496700/', R + 'B482522565/', R + 'B486510945/', R + 'B515804763/', R + 'B537768222/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ask the master for the cuts of the day.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋2-2-13 宝山心斎橋ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋二丁目2番13号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B521744470/', R + 'B482496700/', R + 'B537768222/'],
    price_note: 'Cuts ¥1,500–2,000 a plate (January 2026); ¥500 cover charge.', last_checked: TODAY, items: [
      it('', '', 'Salted tongue', '¥1,500–2,000', 'Yakiniku', 'ask', 'no', 'October 2025; January 2026.', 'tan'),
      it('', '', 'Kuri', '¥1,500–2,000', 'Yakiniku', 'ask', 'no', 'January 2026.', 'kuri'),
      it('', '', 'Hanging tender', '¥1,500–2,000', 'Yakiniku', 'ask', 'no', 'January 2026.', 'hanger'),
      it('', '', 'Strip-loin dashi chazuke', '', 'Finish', 'no', 'no', 'March 2024.', 'chazuke'),
      it('', '', 'Yuzu-tea rice', '', 'Finish', 'ask', 'ask', 'August 2026.', 'yuzu'),
    ] }, {
    cuisine: '直卸の肉の焼肉・マスターおすすめの日替わりの部位: 厚めの塩タンにレモン、クリ、ハンガー、中落ち、薄切りの上ミスジ、ヒレ、赤身、ホルモン、1皿1,500〜2,000円ほど・キムチ盛り・締めはサーロインの出汁茶漬けや柚子茶のご飯・予算に合わせたコース・カウンターとテーブルで20席',
    neighborhood: '心斎橋筋2-2-13 宝山心斎橋ビル2F。心斎橋駅・なんば駅から徒歩約5分',
    gf_detail: '実際にはグルテンフリーではありません。焼肉のたれや下味は不明。塩タンにレモンという食べ方もあるので相談を。',
    vegan_detail: 'ヴィーガンではありません。牛肉とホルモン。',
    notes: '[焼肉・心斎橋筋そばの直卸の2階の焼肉] 心斎橋筋から少し入ったビルの2階にある、こぢんまりした焼肉店で、肉の直卸が営み、ひとりでも座りやすいカウンターとグループ向けのテーブル。気さくなマスターに今日のおすすめを聞けば、ちょうどいい順番で出てきます。部位は1皿1,500〜2,000円ほど(2026年1月)で、レモンで食べる厚めの塩タン、クリ、ハンガー、中落ち、薄切りの上ミスジ、ホルモンなど。値段のわりに質がいいという常連が多い一方、8月には肉は普通だったという人も。締めはサーロインの出汁茶漬けか柚子茶のご飯を。予算に合わせたコースも可。金曜は満席になりやすいものの、当日のネット予約が取れることも。チャージ500円。日曜定休。',
  });
}

// ================================================================ 知留久 法善寺店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27010920/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://www.shiruhisa.com/';
  const D = day(['17:00', '21:30']);
  put({
    id: 'osaka_shiru_hisa_hozenji', name: '知留久 法善寺店 (Shiru Hisa Houzenji)', category: 'OMNI',
    lat: 34.667813, lng: 135.502407, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: breaded, deep-fried kushikatsu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat and seafood skewers; batter not described.',
    hours_raw: 'Mon–Wed and Fri–Sun 17:00–21:30 (L.O. 21:00, last entry 21:00); closed Thursday and irregularly — see shiruhisa.com (Tabelog). Reservations available. Cards accepted; no e-money or QR (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba 1-2-10, Hozenji MEOTO Bldg 1F — beside Mizukake Fudo, Hozenji Yokocho',
    cuisine: 'Creative kushikatsu since 1946 · 30–40 kinds with seasonal ingredients in a light, crisp batter · omakase served one by one until you say stop · seasonal special course ¥5,720 (10 skewers, fresh vegetables, a drink, ochazuke or rice and red miso soup; January 2025) · beef tenderloin, shrimp, pork, clams, whiting · sauces matched to each skewer · seasonal dessert and jasmine tea · 15 seats at an L-shaped counter',
    website: OWN, gmaps: gm('知留久 法善寺店'), menu_url: null,
    notes: "[Kushikatsu · creative kushikatsu beside Hozenji since 1946] A calm, jazz-playing kushikatsu counter right next to Mizukake Fudo in Hozenji Yokocho, from a kushikatsu house founded in 1946, with sister branches elsewhere. Thirty to forty creative skewers use seasonal ingredients in a light, crisp batter, each with its own sauce. The fun is the omakase: skewers keep coming one by one until you say stop. There are set courses too, such as a ¥5,720 seasonal course of ten skewers with fresh vegetables, a drink and ochazuke or rice with red miso soup (January 2025). Favorites include beef tenderloin, shrimp, pork, clams and whiting, and dessert might be a fig, with jasmine tea to close. One diner who has been coming for more than 50 years says it never sits heavy. Expect ¥8,000–15,000. Closed Thursdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Founded 1946 (Tabelog); Hozenji branch', background: 'Shiru Hisa kushikatsu, with sister branches (October 2025 review); official site shiruhisa.com.', philosophy: 'Seasonal ingredients in a light, crisp batter; omakase at your pace (Tabelog).', specialty: 'Creative kushikatsu omakase.',
      anecdotes: [
        { text: '"Shiru Hisa is one of my favorite Osaka spots that I\'ve been visiting for over 50 years… No matter how much you eat, the lightness of the dishes ensures that even my over-60 stomach feels great." — July 2026.', source: R + 'B532042227/' },
        { text: '"Seasonal Special Course… JPY 5,720 x 2: 10 Assorted Select Kushi-katsu, Fresh Vegetables, 1 Drink, Choice of Ochazuke or Rice with Red Miso Soup." — January 2025.', source: R + 'B498788474/' },
      ],
      japanese_sources_summary: '公式 shiruhisa.com。食べログ: 知留久 法善寺店、大阪市中央区難波1-2-10 法善寺MEOTOビル1F、なんば駅から徒歩約1分(法善寺水掛不動の隣)、月〜水・金〜日・祝17:00〜21:30(L.O.21:00、最終入店21:00)、木曜休み・不定休、予約可、カード可、電子マネー・QR不可、15席(カウンターのみ)、1946年創業の創作串カツ、季節の素材で常時30〜40種、軽くサクッとした衣、コースのほかストップと言うまで一本ずつ出すおまかせ。口コミ(2024年9月〜2026年7月): コースがお得、たれを串ごとに、牛ヒレ・海老・豚、ジャズの流れる落ち着いた店内、仕切りのあるL字カウンター、季節の特選コース5,720円(厳選串10本、生野菜、1ドリンク、お茶漬けかご飯と赤だし)、おまかせ、蛤やキス、姉妹店、デザートのいちじく、ジャスミン茶、胃にもたれない、50年以上通っている、大阪一の串カツ。',
      confidence: 'medium', sources: [TB, OWN, R + 'B532042227/', R + 'B498788474/', R + 'B492627361/', R + 'B495357358/', R + 'B501881547/', R + 'B515285722/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter omakase; reserve.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波1-2-10 法善寺MEOTOビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波一丁目2番10号 (go) 11m; same building as Meoto Zenzai; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B498788474/'],
    price_note: 'Course price from a January 2025 review; reviewers spent ¥6,000–14,999.', last_checked: TODAY, items: [
      it('', '', 'Seasonal special course (10 skewers, vegetables, drink, ochazuke or rice)', '¥5,720', 'Courses', 'no', 'no', 'January 2025.', 'kisetsu'),
      it('', '', 'Omakase kushikatsu (until you say stop)', '', 'Courses', 'no', 'no', 'Tabelog; February and October 2025.', 'omakase'),
      it('', '', 'Fresh vegetables', '', 'Sides', 'ask', 'ask', 'January 2025.', 'yasai'),
    ] }, {
    cuisine: '1946年創業の創作串カツ・季節の素材で30〜40種、軽くサクッとした衣・ストップと言うまで一本ずつ出すおまかせ・季節の特選コース5,720円(串10本、生野菜、1ドリンク、お茶漬けかご飯と赤だし、2025年1月)・牛ヒレ、海老、豚、蛤、キス・串ごとに合わせるたれ・季節のデザートとジャスミン茶・L字カウンター15席',
    neighborhood: '難波1-2-10 法善寺MEOTOビル1F。法善寺横丁の水掛不動の隣',
    gf_detail: 'グルテンフリーではありません。衣をつけて揚げる串カツ。',
    vegan_detail: 'ヴィーガンではありません。肉や魚介の串、衣の中身は不明。',
    notes: '[串カツ・法善寺の隣の1946年創業の創作串カツ] 法善寺横丁の水掛不動のすぐ隣にある、ジャズの流れる落ち着いた串カツのカウンターで、1946年創業の串カツの店の一軒、姉妹店もあります。季節の素材を使った30〜40種の創作串を、軽くサクッとした衣で揚げ、串ごとに合わせたたれで。楽しみはおまかせで、ストップと言うまで一本ずつ出てきます。コースもあり、季節の特選コースは5,720円で串10本、生野菜、1ドリンク、お茶漬けかご飯と赤だし(2025年1月)。牛ヒレ、海老、豚、蛤、キスなどが人気で、デザートはいちじくのことも、最後にジャスミン茶。50年以上通う人は、胃にもたれないと言います。予算は8,000〜15,000円ほど。木曜定休。',
  });
}

save();
