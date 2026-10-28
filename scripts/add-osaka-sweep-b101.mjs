// Osaka sweep (2-mile circle around Dotonbori), batch 101 — mom-and-pop phase (all OMNI).
//   + 鮓 木村 建介 (one-chef sushi counter with à la carte and courses; Higashi-Shinsaibashi) — mom_and_pop
//   + 串揚げはる彩 (9-seat kushiage counter, 12-skewer course ending in pho; Namba 4-chome)
//   + 千日前 上田商店 (game-meat yakiniku: deer, bear, boar; Sennichimae)
//   + 庵月 (wagashi house since 1868, chestnut steamed yokan; Tabelog Wagashi 100 2023, 2026)
//   + 肉鍋亭 (mentaiko-tororo hot pot, open to 01:00; Higashi-Shinsaibashi)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-28';
const { put, save } = openCitySweep('osaka', TODAY, 101);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 鮓 木村 建介
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27088335/'; const R = TB + 'dtlrvwlst/';
  const D = day(['17:00', '23:00']);
  put({
    id: 'osaka_sushi_kimura_kensuke_higashishinsaibashi', name: '鮓 木村 建介 (Sushi Kimura Kensuke)', category: 'OMNI',
    lat: 34.671215, lng: 135.503743, cuisine_type: 'sushi',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: soy-based seasoning and tsume; no gluten-free handling described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish and shellfish throughout; egg.',
    hours_raw: 'Mon–Sat 17:00–23:00; closed Sundays and holidays (Tabelog, staff-maintained). Service charge added. Cards, e-money and QR accepted (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 2-5-14, 1F — 7 min from Shinsaibashi Stn exit 6',
    cuisine: 'Sushi counter run by one chef · courses (with sashimi, or nigiri only) or à la carte · six-item appetizer platter · sashimi of about five kinds · sweet shrimp live from the tank · chutoro, eel, raw anago, ikura, sea urchin · rice blended with red and white vinegar, small portions so the fish leads · Kansai-style tamago · homemade pudding · 12 seats',
    website: null, gmaps: gm('鮓 木村 建介 東心斎橋'), menu_url: null,
    notes: "[Sushi · a relaxed one-chef sushi counter in Higashi-Shinsaibashi] A sushi counter where the chef works alone and quietly, a rare place in Minami to order serious sushi à la carte as well as by the course. Start with a platter of six appetizers and about five kinds of sashimi, then nigiri on small, red-and-white-vinegar rice that lets the fish lead: sweet shrimp straight from the tank, chutoro (one regular's pick of the tuna), eel, raw anago with a crunchy bite, standout ikura and a beautifully presented sea urchin. Tamago is Kansai-style, and dessert is a homemade pudding. Diners call the balance of quality and price unusually good for this level. With one chef, order slow dishes early. Closed Sundays.",
    chef_bio: { chef_name: null, roles: ['owner-chef'], origin: null, background: 'Sushi counter run by the owner alone (January 2026 review; Tabelog, staff-maintained).', philosophy: null, specialty: 'Sushi courses and à la carte.',
      anecdotes: [
        { text: '"This place offers a great balance of quality ingredients, taste, presentation, and price. Since the owner prepares everything… it\'s best to order time-consuming dishes with some patience in mind." — January 2026, fifth visit.', source: R + 'B367579605/' },
        { text: '"The sweet shrimp was incredibly fresh, taken straight from the tank, and had a delightful, firm texture. The medium fatty tuna, eel, and sea urchin were all of high quality." — January 2026.', source: R + 'B521776993/' },
      ],
      japanese_sources_summary: '食べログ(店舗会員): 鮓 木村 建介、大阪市中央区東心斎橋2-5-14 シノハララピスビル 1F、心斎橋駅6番出口から徒歩7分、月〜土17:00〜23:00、日祝休み、サービス料あり、カード・電子マネー・QR可、12席。口コミ(2026年1〜10月): 5回目、雲丹がおいしい、質・味・盛り付け・値段のバランス、店主ひとりで作るので手間のかかる料理は早めに注文、中トロがいちばん、コースもアラカルトも、前菜6種の盛り合わせ、刺身5種ほど、生け簀の甘海老、中トロ・鰻・雲丹、控えめな店主、刺身付きのコース、握りだけのコース、シャリは小ぶり、旬の食材、1時間だけ軽く、量に合わせておまかせ、赤酢と白酢の独特なシャリ、生の穴子、いくら、関西風の玉子焼き、自家製プリン。',
      confidence: 'medium', sources: [TB, R + 'B367579605/', R + 'B521776993/', R + 'B530892211/', R + 'B533798902/', R + 'B534296858/', R + 'B536647263/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Quiet, unintrusive chef; à la carte possible; no English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋2-5-14 シノハララピスビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated January–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋二丁目5番14号 (go) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B521776993/', R + 'B530892211/', R + 'B536647263/'],
    price_note: 'No prices found; reviewers spent about ¥5,000–20,000.', last_checked: TODAY, items: [
      it('', '', 'Course with sashimi and nigiri', '', 'Course', 'no', 'no', 'June 2026.', 'course'),
      it('', '', 'Nigiri-only course', '', 'Course', 'no', 'no', 'June 2026.', 'nigiri_course'),
      it('', '', 'Six-item appetizer platter', '', 'Appetizers', 'no', 'no', 'January 2026.', 'zensai'),
      it('', '', 'Homemade pudding', '', 'Dessert', 'ask', 'no', 'October 2026.', 'pudding'),
    ] }, {
    cuisine: '店主ひとりの寿司カウンター・コース(刺身付き、握りのみ)かアラカルト・前菜6種の盛り合わせ・刺身5種ほど・生け簀の甘海老・中トロ、鰻、生の穴子、いくら、雲丹・赤酢と白酢を合わせた小ぶりのシャリ・関西風の玉子焼き・自家製プリン・12席',
    neighborhood: '中央区東心斎橋2-5-14 1F。心斎橋駅6番出口から徒歩7分',
    gf_detail: '実際にはグルテンフリーではありません。醤油ベースの味付けとツメ、グルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。魚と貝が中心、卵も。',
    notes: '[寿司・東心斎橋、気負わず楽しめる店主ひとりの寿司カウンター] 店主がひとりで静かに握る寿司カウンターで、ミナミでは珍しく本格的な寿司をコースでもアラカルトでも頼める。前菜6種の盛り合わせと刺身5種ほどから始め、赤酢と白酢を合わせた小ぶりのシャリで魚が主役の握りへ: 生け簀から出す甘海老、常連おすすめの中トロ、鰻、歯ごたえのある生の穴子、際立ついくら、美しく盛った雲丹。玉子は関西風、デザートは自家製プリン。この水準で質と値段のバランスがよいという声。ひとりで回すので手間のかかる料理は早めに。日曜定休。',
  });
}

// ================================================================ 串揚げはる彩
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27140330/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_kushiage_harusai_namba', name: '串揚げはる彩 (Kushiage Harusai)', category: 'OMNI',
    lat: 34.666581, lng: 135.49971, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: battered, breaded deep-fried skewers; pho noodles not confirmed rice-only.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat, seafood and quail-egg skewers; shared fryer.',
    hours_raw: 'Daily 11:30–14:30 and 17:00–23:00; irregular holidays (Tabelog, staff-maintained). Cards, iD and PayPay accepted (Tabelog).',
    hours: ALL(day(['11:30', '14:30'], ['17:00', '23:00'])), hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba 4-2-16, Namba 4-chome Bldg 2, unit 203 — 1 min from Namba Stn exit 13',
    cuisine: 'Creative kushiage counter · Harusai course: 12 signature and seasonal skewers chosen by the chef, about ¥5,000, served one by one as they fry · asparagus cut into easy bites · quail egg · Japanese-style pho and ice cream to finish · carefully poured draft beer · 9 counter seats',
    website: null, gmaps: gm('串揚げはる彩 難波'), menu_url: null,
    notes: "[Japanese · a quiet nine-seat kushiage counter by Namba Station] A small second-floor counter a minute from Namba exit 13, open since 2024 in a quieter corner of Namba, good for an unhurried dinner or a low-key business meal. The Harusai course (about ¥5,000) brings 12 of the chef's skewers, classics and seasonal ones, fried to order and handed over one at a time; details like asparagus cut into easy bites show the care. Add a quail egg if you have room. It ends unusually with a Japanese-style pho and ice cream. The draft beer is poured with real attention to the foam. The owner-chef is friendly and creative, and staff are attentive. Open for lunch too.",
    chef_bio: { chef_name: null, roles: ['owner-chef'], origin: 'Opened 22 February 2024 (Tabelog)', background: 'Kushiage counter (Tabelog, staff-maintained; 2026 reviews).', philosophy: null, specialty: 'Kushiage course ending in pho.',
      anecdotes: [
        { text: '"This course allows you to enjoy 12 of the restaurant\'s signature skewers, ranging from classic favorites to seasonal flavors, all selected by the chef… for dessert, we had Japanese-style pho and ice cream." — August 2026, Harusai course.', source: R + 'B533779117/' },
        { text: '"The freshly fried kushi-katsu is served one by one, and the asparagus kushi-katsu is cut into easy-to-eat pieces, showcasing the care put into each dish." — August 2026.', source: R + 'B532860993/' },
      ],
      japanese_sources_summary: '食べログ(店舗会員): 串揚げはる彩、大阪市中央区難波4-2-16 難波4丁目ビル 2号館 203、なんば駅13番出口から徒歩1分、近鉄難波駅から徒歩2分、毎日11:30〜14:30・17:00〜23:00、不定休、カード・iD・PayPay可、9席、禁煙、2024年2月22日開店。口コミ(2026年7〜8月): 店主の串揚げの腕と創意、締めはフォー、店主との会話、カウンターのみの居心地のよい店、揚げたてを1本ずつ、アスパラは食べやすく切ってある、はる彩コースは店主おまかせの串12本(定番から季節もの)、うずらを追加、和風フォーとアイス、泡のきれいな生ビール、気軽な接待にも、隠れ家のような落ち着いた雰囲気、5,000円のコースで満腹、なんばの静かなエリアのビル2階、駅近、手頃、珍しいメニュー、丁寧な接客。',
      confidence: 'medium', sources: [TB, R + 'B533779117/', R + 'B532860993/', R + 'B532690397/', R + 'B533781072/', R + 'B533926259/', R + 'B535701648/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Friendly owner-chef chats at the counter (July 2026); no English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波4-2-16 難波4丁目ビル 2号館 203',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated July–August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波四丁目2番16号 (go) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533779117/', R + 'B533781072/'],
    price_note: 'Course about ¥5,000 (August 2026).', last_checked: TODAY, items: [
      it('', '', 'Harusai course (12 skewers)', '~¥5,000', 'Course', 'no', 'no', 'August 2026.', 'course'),
      it('', '', 'Quail egg skewer', '', 'Kushiage', 'no', 'no', 'August 2026.', 'uzura'),
      it('', '', 'Japanese-style pho', '', 'Finish', 'no', 'no', 'July–August 2026.', 'pho'),
    ] }, {
    cuisine: '創作串揚げのカウンター・はる彩コース: 店主が選ぶ定番と季節の串12本、5,000円ほど、揚げたてを1本ずつ・食べやすく切ったアスパラ・うずら・締めは和風フォーとアイス・丁寧に注ぐ生ビール・カウンター9席',
    neighborhood: '中央区難波4-2-16 難波4丁目ビル2号館203。なんば駅13番出口から徒歩1分',
    gf_detail: 'グルテンフリーではありません。衣とパン粉の揚げ串、フォーの麺も米粉のみかは不明。',
    vegan_detail: 'ヴィーガンではありません。肉、魚介、うずらの串、フライヤーは共用。',
    notes: '[和食・なんば駅すぐ、静かな9席の串揚げカウンター] なんば駅13番出口から1分、なんばの静かな一角のビル2階にある小さなカウンターで、2024年開店、ゆっくりの夕食や気軽な接待に。はる彩コース(5,000円ほど)は店主の串12本、定番と季節ものを注文ごとに揚げ1本ずつ。アスパラを食べやすく切るなど細やかさが光る。余裕があればうずらも。締めは珍しく和風フォーとアイス。生ビールは泡まで丁寧に注ぐ。店主は気さくで創意にあふれ、スタッフも丁寧。昼も営業。',
  });
}

// ================================================================ 千日前 上田商店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27132753/'; const R = TB + 'dtlrvwlst/';
  const D = day(['17:30', '21:30']);
  put({
    id: 'osaka_sennichimae_ueda_shoten', name: '千日前 上田商店 (Sennichimae Ueda Shoten)', category: 'OMNI',
    lat: 34.668021, lng: 135.504941, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: yakiniku sauces and hot-pot seasoning; no gluten-free handling described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: game meat and beef throughout.',
    hours_raw: 'Mon–Sat and the days around holidays 17:30–21:30 (food L.O. 20:30, drinks 21:00); seatings 18:00–20:00 and 19:30–21:30 by reservation; closed Sundays and holidays (Tabelog, staff-maintained). Courses need a reservation. Cards, e-money and QR accepted (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sennichimae 1-6-6, 1F — 2 min from Nippombashi Stn',
    cuisine: 'Game-meat (jibie) yakiniku · Ezo deer tataki and ribs · Japanese deer tongue and heart · black bear thigh and belly, brown bear · wild boar loin, belly and top sirloin · badger when available · boar hot pot to start the course · premium beef outside skirt · grilled vegetables · wild-game course ¥11,000 by reservation · availability changes with the season · 14 seats',
    website: null, gmaps: gm('千日前 上田商店'), menu_url: null,
    notes: "[Japanese · game-meat yakiniku of deer, bear and boar in Sennichimae] A retro-modern yakiniku room near Nippombashi, sister to the Ueda Shoten in Harinakano, that grills wild game rather than beef. The list depends on the season and the hunt: Ezo deer tataki and meaty ribs, crunchy Japanese deer tongue and heart, black bear thigh and sweet bear belly, wild boar loin, belly and top sirloin, and badger now and then. Diners are struck by how little gaminess there is. The ¥11,000 course (book ahead) opens with a small boar hot pot before the grill. Staff explain each cut while grilling, and service is slow when one person is working the room, so give it time. Many cuts sell out. Closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Game-meat yakiniku, sister shop of Ueda Shoten in Harinakano (July 2025 review; Tabelog, staff-maintained).', philosophy: null, specialty: 'Game meat: deer, bear and wild boar.',
      anecdotes: [
        { text: '"The Ezo deer tataki was tender and could easily be mistaken for beef. The black bear thigh was satisfying and had no gamey taste… The Japanese deer tongue and heart were far more delicious than beef." — March 2025.', source: R + 'B503244284/' },
        { text: '"The bear belly was my first experience, and it was sweet and delicious. The Ezo deer ribs were firm and meaty, while the Japanese deer tongue had a nice crunch." — June 2026.', source: R + 'B530656822/' },
      ],
      japanese_sources_summary: '食べログ(店舗会員): 千日前 上田商店、大阪市中央区千日前1-6-6 明日香ビル 1F、日本橋駅から徒歩2分、月〜土・祝前日・祝後日17:30〜21:30(フードL.O.20:30、ドリンク21:00)、18:00〜20:00と19:30〜21:30は予約制、日祝休み、カード・電子マネー・QR可、ジビエを上品な空間で。口コミ(2025年3月〜2026年6月): 蝦夷鹿のたたき、ツキノワグマのモモ、ヒグマのモモ、猪の上ロース、本州鹿のタンとハツ、ひとりで回すのでゆっくり、部位を説明しながら焼く、熊がない日も、針中野の人気店上田商店の姉妹店、レトロモダンで落ち着いた雰囲気、丁寧な接客、季節で品切れあり、猪3種(ロース、バラ、上ロース)、上ハラミ、ジビエコース11,000円、猪鍋から焼肉へ、鹿が絶品、臭みがない、熊の脂が甘い、品切れが多い、アナグマ、豚バラと首、熊バラ、蝦夷鹿のあばら、焼き野菜、コースは予約制。',
      confidence: 'medium', sources: [TB, R + 'B503244284/', R + 'B530656822/', R + 'B503393801/', R + 'B510174229/', R + 'B511203523/', R + 'B522072929/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff explain each cut while grilling (2025–2026); no English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区千日前1-6-6 明日香ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区千日前一丁目6番6号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B511203523/', R + 'B503244284/', R + 'B530656822/'],
    price_note: 'Course price from a July 2025 review; dinners about ¥8,000–30,000.', last_checked: TODAY, items: [
      it('', '', 'Wild-game course', '¥11,000', 'Course', 'no', 'no', 'Reservation; July 2025.', 'course'),
      it('', '', 'Ezo deer tataki', '', 'Game', 'no', 'no', 'March 2025.', 'ezoshika'),
      it('', '', 'Black bear belly or thigh', '', 'Game', 'no', 'no', 'Seasonal; 2025–2026.', 'kuma'),
      it('', '', 'Wild boar loin, belly, top sirloin', '', 'Game', 'no', 'no', 'July 2025.', 'inoshishi'),
      it('', '', 'Japanese deer tongue', '', 'Game', 'no', 'no', 'June 2026.', 'shika_tan'),
    ] }, {
    cuisine: 'ジビエの焼肉・蝦夷鹿のたたきとあばら・本州鹿のタンとハツ・ツキノワグマのモモとバラ、ヒグマ・猪のロース、バラ、上ロース・あればアナグマ・コースの最初は猪鍋・黒毛和牛の上ハラミ・焼き野菜・予約制のジビエコース11,000円・季節で品ぞろえが変わる・14席',
    neighborhood: '中央区千日前1-6-6 明日香ビル1F。日本橋駅から徒歩2分',
    gf_detail: '実際にはグルテンフリーではありません。焼肉のたれや鍋の味付け、グルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。ジビエと牛肉が中心。',
    notes: '[和食・千日前、鹿・熊・猪のジビエ焼肉] 日本橋近くのレトロモダンな焼肉店で、針中野の上田商店の姉妹店、牛ではなくジビエを焼く。品ぞろえは季節と猟しだいで、蝦夷鹿のたたきと肉厚のあばら、歯ごたえのある本州鹿のタンとハツ、ツキノワグマのモモと甘い熊バラ、猪のロース、バラ、上ロース、ときにアナグマも。臭みのなさに驚く人が多い。11,000円のコース(要予約)は小さな猪鍋から始まって焼肉へ。部位を説明しながら焼いてくれるが、ひとりで回す日は提供がゆっくりなので時間に余裕を。品切れも多い。日曜定休。',
  });
}

// ================================================================ 庵月
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27013829/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://angetsu.co.jp/';
  const D = day(['10:00', '21:00']);
  put({
    id: 'osaka_angetsu_higashishinsaibashi', name: '庵月 (Angetsu)', category: 'OMNI',
    lat: 34.671831, lng: 135.502866, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Neri yokan and mizu yokan are bean-based, but no source lists ingredients, and steamed yokan and monaka are not confirmed wheat-free.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Bean and chestnut sweets contain no obvious animal products, but no source lists the ingredients.',
    hours_raw: 'Mon–Sat 10:00–21:00; holidays until 17:00 (official site; Tabelog says 18:00); closed Sundays and New Year\'s Day (Tabelog, staff-maintained; official site). Items sell out by evening (September 2026). Cards, e-money and PayPay accepted (Tabelog); one October 2026 visit was cash and PayPay only during a card-processor outage.',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 2-8-29 — 4 min from Shinsaibashi Stn',
    cuisine: 'Wagashi house since 1868 (also styled Angetsudo) · Tabelog Wagashi WEST 100 (2023, 2026) and Sweets WEST 100 (2019) · kuri mushi yokan (chestnut steamed yokan), the autumn signature, whole about ¥6,000 or half about ¥3,000 · white-bean chestnut steamed yokan · hanamame yokan · monaka (sells out first), kurumi manju · kuri wakase, Yamato neri yokan · summer mizu yokan and mizu manju (¥1,836) · small sweets café, 7 seats · online shop and gift boxes',
    website: OWN, gmaps: gm('庵月 東心斎橋 和菓子'), menu_url: null,
    notes: "[Japanese sweets · a wagashi house since 1868, known for chestnut steamed yokan] A long-established wagashi shop in Higashi-Shinsaibashi, dating to 1868 and picked for Tabelog's wagashi and sweets 100 lists, with a calm, old-fashioned front and a small sweets café inside. The star is the autumn kuri mushi yokan, red-bean steamed yokan packed with moist chestnuts and only gently sweet, sold whole (about ¥6,000) or half (about ¥3,000); there's a white-bean version too. The monaka is the most popular item and sells out first; in summer the mizu yokan and mizu manju are smooth and refined. Go early, as much is gone by late afternoon. It works as well for gifts as for an afternoon treat. Closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Founded 3 April 1868 (Tabelog)', background: 'Wagashi maker (official site angetsu.co.jp, as 御菓子司 庵月堂); Tabelog Wagashi WEST 100 2023 and 2026, Sweets WEST 100 2019.', philosophy: null, specialty: 'Kuri mushi yokan; monaka.',
      anecdotes: [
        { text: '"You can see from the cross-section of the yokan that it is packed with chestnuts. When you take a bite, the red bean yokan has a chewy texture, while the chestnuts are crunchy and moist, delivering a strong chestnut flavor!" — October 2026, kuri mushi yokan.', source: R + 'B434584231/' },
        { text: '"I purchased the remaining Mizumanju for JPY 1836… smooth with a refined sweetness and absolutely delicious." — September 2026.', source: R + 'B536184696/' },
      ],
      japanese_sources_summary: '公式 angetsu.co.jp: 御菓子司 庵月堂、大阪心斎橋の和菓子店、平日10時〜21時(祝は〜17時)、日曜定休、甘味喫茶、栗蒸し羊羹・白小豆栗蒸し羊羹、花まめ羊羹、最中・久留美饅頭、栗若瀬・やまと練羊羹、春夏限定商品、ギフト、オンラインショップ、2026年8月30日に栗蒸し羊羹の販売開始。食べログ(店舗会員): 庵月、大阪市中央区東心斎橋2-8-29、心斎橋駅から徒歩4分、平日10:00〜21:00、日祝10:00〜18:00、日曜と元日休み、カード・電子マネー・PayPay可、7席、1868年4月3日創業、食べログ 和菓子・甘味処 WEST 百名店2023・2026、スイーツ WEST 百名店2019。口コミ(2026年9〜10月): 秋の栗蒸し羊羹、カード決済会社の障害で現金とPayPayのみの日、栗がぎっしり、もちっとした小豆の羊羹、夕方はほとんど売り切れ、水まんじゅう1,836円、上品な甘さ、一番人気の最中は品切れ、イートインは休み、水羊羹、老舗の落ち着いた外観、甘さ控えめ、手土産に、栗蒸し羊羹1本約6,000円、ハーフで約3,000円、白小豆の栗蒸し羊羹。',
      confidence: 'medium', sources: [TB, OWN, R + 'B434584231/', R + 'B536184696/', R + 'B536614069/', R + 'B536629573/', R + 'B537845642/', R + 'B538090453/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Shop counter with samples in the showcase (September 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋2-8-29',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); official site posted September 2026 notices; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋二丁目8番29号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537845642/', R + 'B536184696/', OWN],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Kuri mushi yokan (whole / half)', '~¥6,000 / ~¥3,000', 'Yokan', 'ask', 'ask', 'Autumn; October 2026.', 'kurimushi'),
      it('', '', 'White-bean chestnut steamed yokan', '', 'Yokan', 'ask', 'ask', 'October 2026.', 'shiroazuki'),
      it('', '', 'Monaka', '', 'Sweets', 'ask', 'ask', 'Sells out; October 2026.', 'monaka'),
      it('', '', 'Mizu manju', '¥1,836', 'Seasonal', 'ask', 'ask', 'September 2026.', 'mizumanju'),
      it('', '', 'Mizu yokan', '', 'Seasonal', 'ask', 'ask', 'October 2026.', 'mizuyokan'),
    ] }, {
    cuisine: '1868年創業の和菓子屋(庵月堂とも)・食べログ 和菓子 WEST 百名店(2023、2026)、スイーツ WEST 百名店(2019)・秋の看板、栗蒸し羊羹は1本約6,000円、ハーフ約3,000円・白小豆の栗蒸し羊羹・花まめ羊羹・一番に売り切れる最中、久留美饅頭・栗若瀬、やまと練羊羹・夏の水羊羹と水まんじゅう(1,836円)・7席の甘味喫茶・オンラインショップとギフト',
    neighborhood: '中央区東心斎橋2-8-29。心斎橋駅から徒歩4分',
    gf_detail: '要確認。練羊羹や水羊羹は豆が主体だが原材料の情報はなく、蒸し羊羹や最中は小麦不使用か確認できていません。',
    vegan_detail: '要確認。豆と栗の和菓子に明らかな動物性食材はないが、原材料の情報はありません。',
    notes: '[和菓子・東心斎橋、1868年創業、栗蒸し羊羹の老舗] 東心斎橋にある老舗の和菓子店で、1868年創業、食べログの和菓子・スイーツの百名店に選ばれ、落ち着いた昔ながらの店構えに小さな甘味喫茶も。主役は秋の栗蒸し羊羹で、しっとりした栗がぎっしりの小豆の蒸し羊羹は甘さ控えめ、1本(約6,000円)かハーフ(約3,000円)で、白小豆もある。一番人気の最中は真っ先に売り切れ、夏の水羊羹や水まんじゅうはなめらかで上品。夕方にはほとんど売り切れるので早めに。手土産にも午後のおやつにも。日曜定休。',
  });
}

// ================================================================ 肉鍋亭
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27122541/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['18:00', '01:00']), WE = day(['17:00', '01:00']);
  put({
    id: 'osaka_nikunabetei_higashishinsaibashi', name: '肉鍋亭 (Niku Nabe Tei)', category: 'OMNI',
    lat: 34.67163, lng: 135.50326, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: hot-pot broth and seasonings, fish balls, cheese risotto; no gluten-free handling described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork, chicken, fish balls and mentaiko.',
    hours_raw: 'Mon–Fri 18:00–01:00; Sat, Sun and holidays 17:00–01:00; no regular holidays; until sold out (Tabelog, staff-maintained). All-you-can-drink ¥1,500 (September 2026). Cards, e-money and QR accepted (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 2-8-3, 1F — 5 min from Shinsaibashi Stn',
    cuisine: 'Hot-pot izakaya · signature Hakata mentaiko tororo nabe: pork belly, chicken, fish balls and tofu, topped at the table with grated yam and spicy mentaiko · cheese risotto to finish · avocado yukke · "long" toro-taku sushi roll with thick nori · potato salad with truffle flakes · fresh oysters · all-you-can-drink ¥1,500 · 8 counter seats, 12 table seats; a second branch, Bettei, upstairs',
    website: null, gmaps: gm('肉鍋亭 東心斎橋'), menu_url: null,
    notes: "[Japanese · mentaiko-and-tororo hot pot to 1 am in Higashi-Shinsaibashi] A calm hot-pot izakaya in Higashi-Shinsaibashi, open since 2021 and featured on TV, open until 01:00 every night. The signature is the Hakata mentaiko tororo nabe: pork belly, chicken, fish balls and tofu in a good broth, crowned at the table with a heap of creamy grated yam and salty, spicy mentaiko, then finished as a cheese risotto. Sides are drinking food with flair: avocado yukke, a theatrically long toro-taku roll wrapped in thick nori, potato salad with truffle flakes, fresh oysters. All-you-can-drink is ¥1,500, so three drinks or more makes it worth it; one table spent just over ¥6,000 each. Staff finish the pot for you. A second branch, Bettei, is upstairs.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 20 February 2021 (Tabelog)', background: 'Hot-pot izakaya with a Bettei branch upstairs (Tabelog, staff-maintained).', philosophy: null, specialty: 'Mentaiko tororo nabe.',
      anecdotes: [
        { text: '"The Hakata Mentaiko Tororo Nabe had a stunning appearance with plenty of tororo and mentaiko on top! The creaminess of the tororo combined perfectly with the saltiness and umami of the mentaiko." — August 2026.', source: R + 'B535197194/' },
        { text: '"The hot pot ingredients included not only the pork belly… but also chicken, fish balls, and tofu… the total bill was just over JPY 6000 per person. Since the all-you-can-drink option was JPY 1500, it\'s definitely worth it." — September 2026.', source: R + 'B536513287/' },
      ],
      japanese_sources_summary: '食べログ(店舗会員): 肉鍋亭、大阪市中央区東心斎橋2-8-3 日宝笠屋町会館 1F、心斎橋駅から徒歩5分、長堀橋駅から徒歩6分、月〜金18:00〜翌1:00、土日祝17:00〜翌1:00、定休日なし、売り切れ次第終了、カード・電子マネー・QR可、20席(テーブル12、カウンター8)、2021年2月20日開店、2階に肉鍋亭 別邸。口コミ(2026年8〜10月): 博多明太とろろ鍋、アボカドユッケ、元祖トロたく長巻き、とろろと明太子たっぷり、テレビで紹介、飲み放題が手頃、トリュフ乗せポテサラ、生牡蠣、チーズリゾットで締め、お通しは長芋、豚バラ・鶏・つみれ・豆腐、店員が鍋を仕上げる、厚い味付け海苔、3杯で1人6,000円ちょっと、飲み放題1,500円、落ち着いた雰囲気、カウンター席、当日でも入れた、とろろ鍋が名物、ポテサラがおいしい。',
      confidence: 'medium', sources: [TB, R + 'B535197194/', R + 'B536513287/', R + 'B536235587/', R + 'B536503567/', R + 'B536740221/', R + 'B537766786/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff finish the hot pot at the table (September 2026); no English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋2-8-3 日宝笠屋町会館 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋二丁目8番3号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535197194/', R + 'B536513287/'],
    price_note: 'All-you-can-drink price from a September 2026 review; about ¥6,000 a person with drinks.', last_checked: TODAY, items: [
      it('', '', 'Hakata mentaiko tororo nabe', '', 'Hot pot', 'no', 'no', 'Cheese risotto to finish; 2026.', 'mentai_tororo'),
      it('', '', 'Avocado yukke', '', 'Small plates', 'no', 'no', 'August 2026.', 'avocado_yukke'),
      it('', '', 'Long toro-taku roll', '', 'Small plates', 'no', 'no', 'August–September 2026.', 'torotaku'),
      it('', '', 'All-you-can-drink', '¥1,500', 'Drinks', 'ask', 'ask', 'September 2026.', 'nomihodai'),
    ] }, {
    cuisine: '鍋の居酒屋・名物の博多明太とろろ鍋: 豚バラ、鶏、つみれ、豆腐に、席でとろろと辛子明太子をたっぷり・締めはチーズリゾット・アボカドユッケ・厚い海苔で巻く長いトロたく巻き・トリュフ乗せポテサラ・生牡蠣・飲み放題1,500円・カウンター8席、テーブル12席、2階に別邸',
    neighborhood: '中央区東心斎橋2-8-3 1F。心斎橋駅から徒歩5分',
    gf_detail: '実際にはグルテンフリーではありません。鍋のスープや味付け、つみれ、チーズリゾット、グルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。豚肉、鶏肉、つみれ、明太子。',
    notes: '[和食・東心斎橋、深夜1時まで営業の明太とろろ鍋] 東心斎橋にある落ち着いた鍋の居酒屋で、2021年開店、テレビでも紹介、毎晩深夜1時まで。名物は博多明太とろろ鍋で、豚バラ、鶏、つみれ、豆腐をおいしいスープで煮て、席でクリーミーなとろろとしょっぱく辛い明太子をどっさり、締めはチーズリゾットに。サイドは遊び心ある酒の肴: アボカドユッケ、厚い海苔で巻いた長いトロたく巻き、トリュフ乗せポテサラ、生牡蠣。飲み放題は1,500円で3杯以上なら得、1人6,000円ちょっとだったという声。鍋は店員が仕上げてくれる。2階に別邸も。',
  });
}

save();
