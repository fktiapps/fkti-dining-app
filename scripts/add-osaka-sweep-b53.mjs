// Osaka sweep (2-mile circle around Dotonbori), batch 53 — mom phase (≤20 seats), nearest first.
//   + ハードロマンチッカー (Tabelog 100 standing bar 2025, unsigned door, cash only — filed 'other')
//   + Kokopelli (American burgers and world bottled beer by Hozenji since 2011 — filed 'other')
//   + 現代割烹 法善寺momo (creative kappo, clay-pot rice lunch courses — filed 'other')
//   + 大阪鉄板焼き 神戸牛ステーキ Zin 難波店 (8F Kobe-beef teppanyaki over Dotonbori — filed 'other')
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-27';
const { put, save } = openCitySweep('osaka', TODAY, 53);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ ハードロマンチッカー
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27145832/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://oisiosaka.hp.peraichi.com/hardromanticker';
  const D = day(['18:00', '02:00']);
  put({
    id: 'osaka_hard_romanticker_namba', name: 'ハードロマンチッカー (Hard Romanticker)', category: 'OMNI',
    lat: 34.668062, lng: 135.5008, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: fried foods, crackers, satsuma-age; sauces not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: cheese, prosciutto, venison, fish cake.',
    hours_raw: 'Mon, Tue, Thu–Sun and holidays 18:00–2:00 am (L.O. 1:30); closed Wednesday; closing days may vary (Tabelog). No reservations. Cash only: no cards, e-money or QR (Tabelog). Heated tobacco only, in a designated area. No sign outside (October 2026, citing the shop\'s Instagram).',
    hours: { 0: D, 1: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Namba 1-7-15, 1F — just off Midosuji near Namba Hips, about 3 min from Namba Stn',
    cuisine: 'Standing bar, Tabelog tachinomi 100 (2025) · small plates · slightly sweet cream cheese with crackers · blue cheese · Shine Muscat and prosciutto shira-ae · Ezo venison rare steak · house satsuma-age with cheese, corn and edamame, fried to order · komatsuna ohitashi · a hamburger limited to three a night · ume sour, lemon sour, orange wine · about 8 at the counter and 3 tables, 20 in all',
    website: OWN, gmaps: gm('ハードロマンチッカー 難波'), menu_url: null,
    notes: "[Standing bar · a Tabelog 100 tachinomi with no sign, behind Namba] A small standing bar just off Midosuji near Namba Hips, named to Tabelog's 2025 standing-bar 100 and a sister of Oishi Stand. There's no sign, so it's easy to walk past; the shop's Instagram says to look for it. It gets packed; one evening a regular shuffled over to make room. Reviewers note many women among the crowd, unusual for a tachinomi. Small plates make it easy to try a lot. The cream cheese with crackers, slightly sweet, won over one reviewer who doesn't usually like cream cheese, and the blue cheese has fans too. There's Shine Muscat with prosciutto as shira-ae, an Ezo venison steak served rare, and house satsuma-age with cheese, corn and edamame, fried after you order. A hamburger is limited to three servings. Expect ¥2,000–4,000. Cash only. Closed Wednesdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 9 December 2024 (Tabelog)', background: 'Sister shop of Oishi Stand (August 2026 review); Tabelog tachinomi 100, 2025 (Tabelog).', philosophy: 'House-made dishes, down to the satsuma-age (October 2026 review).', specialty: 'Cream cheese; house satsuma-age.',
      anecdotes: [
        { text: '"On Instagram, it said, \'There\'s no sign, so please find us,\' and I actually walked past it without realizing it! The small interior was packed. A regular customer kindly moved to make space for me." — October 2026.', source: R + 'B537233354/' },
        { text: '"Even for someone like me who doesn\'t usually like solid cheese or plain cream cheese, it was absolutely amazing… It\'s slightly sweet, and when paired with the crackers that come with it, it\'s just perfect!" — October 2026, second visit.', source: R + 'B534622558/' },
      ],
      japanese_sources_summary: '食べログ: ハードロマンチッカー、大阪市中央区難波1-7-15 江戸安ビル1F、各線なんば駅から徒歩3分、月・火・木〜日・祝18:00〜翌2:00(L.O.1:30)、水曜休み(変動あり)、予約不可、カード・電子マネー・QR不可、20席、加熱式たばこのみ喫煙エリア、立ち飲み百名店2025、2024年12月9日開店、公式ページ(peraichi)。口コミ(2026年8〜10月): Oishi Standの姉妹店、カウンター約8とテーブル3、少量の一品や揚げ物、Ezo鹿のレアステーキ、3食限定のハンバーガー、コスパがいい、クリームチーズ(ほんのり甘くクラッカー付き)、御堂筋から少し入ったなんばHIPSの近く、看板がないのでInstagramで「探してください」、店内は満席で常連が場所を空けてくれた、梅サワー、シャインマスカットと生ハムの白和え、小松菜のおひたし、自家製さつま揚げ(チーズ、コーン、枝豆、注文後に揚げる)、女性客が多い、オレンジワイン、ブルーチーズ。',
      confidence: 'medium', sources: [TB, OWN, R + 'B534622558/', R + 'B537233354/', R + 'B536515215/', R + 'B537366984/', R + 'B537393260/', R + 'B537424416/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Crowded standing bar with no sign; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波1-7-15 江戸安ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波一丁目7番15号 (go) 8m; same building as Okonomiyaki Sakaba O (B1F); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534622558/', R + 'B537233354/', R + 'B537424416/'],
    price_note: 'No prices captured; reviewers spent ¥2,000–3,999.', last_checked: TODAY, items: [
      it('', '', 'Cream cheese with crackers', '', 'Small plates', 'no', 'no', 'September–October 2026.', 'cream_cheese'),
      it('', '', 'Blue cheese', '', 'Small plates', 'ask', 'no', 'October 2026.', 'blue_cheese'),
      it('', '', 'Shine Muscat and prosciutto shira-ae', '', 'Small plates', 'ask', 'no', 'October 2026.', 'shiraae'),
      it('', '', 'Ezo venison rare steak', '', 'Small plates', 'ask', 'no', 'August 2026.', 'venison'),
      it('', '', 'House satsuma-age (cheese, corn, edamame)', '', 'Fried', 'no', 'no', 'October 2026.', 'satsumaage'),
      it('', '', 'Komatsuna ohitashi', '', 'Small plates', 'ask', 'ask', 'October 2026.', 'ohitashi'),
      it('', '', 'Hamburger (three a night)', '', 'Small plates', 'no', 'no', 'August 2026.', 'burger'),
    ] }, {
    cuisine: '立ち飲み、食べログ立ち飲み百名店(2025)・少量の一品・ほんのり甘いクリームチーズとクラッカー・ブルーチーズ・シャインマスカットと生ハムの白和え・Ezo鹿のレアステーキ・注文後に揚げる自家製さつま揚げ(チーズ、コーン、枝豆)・小松菜のおひたし・3食限定のハンバーガー・梅サワー、レモンサワー、オレンジワイン・カウンター約8とテーブル3で20席',
    neighborhood: '難波1-7-15 1F。御堂筋から少し入ったなんばHIPSの近く、なんば駅から徒歩約3分',
    gf_detail: '実際にはグルテンフリーではありません。揚げ物、クラッカー、さつま揚げ。たれの中身は不明。',
    vegan_detail: 'ヴィーガンではありません。チーズ、生ハム、鹿肉、さつま揚げ。',
    notes: '[立ち飲み・なんばの看板のない百名店の立ち飲み] 御堂筋から少し入ったなんばHIPSの近くにある小さな立ち飲みで、食べログ立ち飲み百名店2025に選ばれ、Oishi Standの姉妹店。看板がないので通り過ぎやすく、店のInstagramにも「探してください」とあります。混み合い、常連が詰めて場所を空けてくれたという人も。立ち飲みには珍しく女性客が多いという声。少量の一品が多く、いろいろ試せます。ほんのり甘いクリームチーズとクラッカーは、普段クリームチーズが苦手な人も絶賛、ブルーチーズのファンも。シャインマスカットと生ハムの白和え、レアに焼いたEzo鹿のステーキ、注文後に揚げるチーズ、コーン、枝豆入りの自家製さつま揚げも。ハンバーガーは3食限定。予算は2,000〜4,000円ほど。現金のみ。水曜定休。',
  });
}

// ================================================================ Kokopelli
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27061382/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://kokopelli-nanba.jp/';
  const D = day(['12:00', '15:00'], ['18:00', '23:00']);
  put({
    id: 'osaka_kokopelli_namba', name: 'Kokopelli', category: 'OMNI',
    lat: 34.667927, lng: 135.50207, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat buns and bread; fryer use not described; beer.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef patties, bacon, pulled pork, cheese.',
    hours_raw: 'Tue–Sun 12:00–15:00 (L.O. 14:30) and 18:00–23:00 (L.O. 22:00); closed Monday, but open when Monday is a holiday and closed the next weekday instead (Tabelog). Burgers only at lunch; phone ahead for other dishes (Tabelog). Reservations accepted. Cards, e-money and QR accepted; no service charge.',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba 1-6-5, TM Bldg 1F — about 20 m in from the Hozenji entrance; Namba Walk exit B16 or B18',
    cuisine: 'American burgers and world bottled beer since 2011 · cheeseburger ¥1,480, drink set +¥350 (July 2026) · bacon cheeseburger · avocado burger · pulled-pork burger with barbecue sauce · macaroni-topped burger featured on TV · grilled-cheese sandwich with bacon and avocado on whole-wheat bread · crisp fries · craft and bottled beers · 6 counter and 14 table seats',
    website: OWN, gmaps: gm('Kokopelli 難波 法善寺'), menu_url: null,
    notes: "[Burgers · American burgers and world beer by Hozenji] A stylish American-style burger bar a few steps from the Hozenji entrance, open since 2011 and drawing overseas guests too. The toasted buns get singled out; one burger hunter ranked it in a personal top three, buns especially. The cheeseburger is ¥1,480, plus ¥350 for a drink (July 2026). The bacon cheeseburger layers thick bacon over a juicy patty, and the avocado burger is creamy and rich. The tender pulled pork with an addictive barbecue sauce looks as good as it does on Instagram. A macaroni-topped burger has been on TV. The grilled-cheese sandwich comes on toasted whole-wheat bread with thick bacon and avocado, and the chef adjusted the cheese on request. The fries are crisp without being greasy. There's a long list of bottled beers from around the world. Lunch is burgers only. Closed Mondays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 20 October 2011 (Tabelog)', background: 'American-style burger and beer bar by Hozenji Yokocho (Tabelog); official site kokopelli-nanba.jp.', philosophy: null, specialty: 'Burgers; pulled pork; bottled beer.',
      anecdotes: [
        { text: '"I\'ve been to various famous burger joints, but this one ranks in my top three for taste, especially the buns, which might be the best I\'ve ever had." — July 2026, cheeseburger ¥1,480.', source: R + 'B530993327/' },
        { text: '"The pulled pork was incredibly tender and juicy, making it delicious, and the barbecue sauce was quite addictive." — February 2026.', source: R + 'B522415219/' },
      ],
      japanese_sources_summary: '公式 kokopelli-nanba.jp。食べログ: Kokopelli、大阪市中央区難波1-6-5 TMビル1F、なんばウォークB16・B18出口から、法善寺の入口を左に約20m、火〜日12:00〜15:00(L.O.14:30)・18:00〜23:00(L.O.22:00)、月曜休み(祝日の場合は営業し翌平日休み)、予約可(ランチはハンバーガーのみ、他の料理は事前に電話で)、カード・電子マネー・QR可、サービス料なし、20席(カウンター6、テーブル14)、禁煙、子ども可、テイクアウト可、2011年10月20日開店。口コミ(2025年12月〜2026年9月): テレビで紹介されたマカロニのせバーガー、アメリカンな料理とクラフトビール、グリルドチーズサンド(チーズ、厚切りベーコン、アボカド、全粒粉のパン)、チーズ少なめに対応、カリッとして油っぽくないポテト、アメリカンな雰囲気で外国人客も、プルドポークサンドとバーベキューソース、アボカドバーガー、ベーコンチーズバーガー、チーズバーガー1,480円とドリンクセット350円、トップ3に入るバンズ、おしぼりを頼むと怪訝な顔をされたという声、プルドポークバーガー、世界の瓶ビール。',
      confidence: 'medium', sources: [TB, OWN, R + 'B530993327/', R + 'B522415219/', R + 'B522022307/', R + 'B525615486/', R + 'B528153470/', R + 'B536178694/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Many overseas guests; American-style menu.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波1-6-5 TMビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波一丁目6番5号 (go) 1m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B530993327/', R + 'B528153470/', R + 'B522415219/'],
    price_note: 'One price from a July 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Cheeseburger', '¥1,480', 'Burgers', 'no', 'no', 'July 2026.', 'cheeseburger'),
      it('', '', 'Drink set', '+¥350', 'Sets', 'ask', 'ask', 'July 2026.', 'drink_set'),
      it('', '', 'Bacon cheeseburger', '', 'Burgers', 'no', 'no', 'May 2026.', 'bacon_cheese'),
      it('', '', 'Avocado burger', '', 'Burgers', 'no', 'no', 'April 2026.', 'avocado'),
      it('', '', 'Pulled-pork burger', '', 'Burgers', 'no', 'no', 'February and September 2026.', 'pulled_pork'),
      it('', '', 'Grilled-cheese sandwich (bacon, avocado, whole-wheat bread)', '', 'Sandwiches', 'no', 'no', 'February 2026.', 'grilled_cheese'),
      it('', '', 'French fries', '', 'Sides', 'ask', 'ask', 'February 2026.', 'fries'),
    ] }, {
    cuisine: '2011年からのアメリカンなハンバーガーと世界の瓶ビール・チーズバーガー1,480円、ドリンクセット+350円(2026年7月)・ベーコンチーズバーガー・アボカドバーガー・バーベキューソースのプルドポークバーガー・テレビで紹介されたマカロニのせバーガー・全粒粉のパンにベーコンとアボカドのグリルドチーズサンド・カリッとしたポテト・クラフトビールと瓶ビール・カウンター6席とテーブル14席',
    neighborhood: '難波1-6-5 TMビル1F。法善寺の入口から約20m、なんばウォークB16・B18出口',
    gf_detail: 'グルテンフリーではありません。小麦のバンズやパン。ポテトのフライヤーは不明。ビール。',
    vegan_detail: 'ヴィーガンではありません。牛肉のパティ、ベーコン、プルドポーク、チーズ。',
    notes: '[ハンバーガー・法善寺そばのアメリカンなバーガーと世界のビール] 法善寺の入口から数歩の、おしゃれなアメリカンスタイルのバーガーバーで、2011年開店、海外の客も多い店。特に評価が高いのはトーストしたバンズで、食べ歩いた中でトップ3、特にバンズは一番かもという人も。チーズバーガーは1,480円、ドリンクは350円増し(2026年7月)。ベーコンチーズバーガーはジューシーなパティに厚切りベーコン、アボカドバーガーはクリーミーで濃厚。インスタで目を引くプルドポークは、やわらかくてバーベキューソースがやみつきに。マカロニをのせたバーガーはテレビでも紹介。グリルドチーズサンドはトーストした全粒粉のパンに厚切りベーコンとアボカドで、チーズの量も相談できます。ポテトはカリッとして油っぽくありません。世界の瓶ビールも豊富。ランチはハンバーガーのみ。月曜定休。',
  });
}

// ================================================================ 現代割烹 法善寺momo
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27124787/'; const R = TB + 'dtlrvwlst/';
  const D = day(['12:00', '14:30'], ['16:00', '22:00']);
  put({
    id: 'osaka_gendai_kappou_hozenji_momo', name: '現代割烹 法善寺momo (Gendai Kappou Hozenji momo)', category: 'OMNI',
    lat: 34.668213, lng: 135.502615, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: soy- and dashi-based Japanese seasoning; fried courses. Ask when booking.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi, sashimi, fish and chicken mains.',
    hours_raw: 'Mon and Wed–Sun 12:00–14:30 and 16:00–22:00; closed most Tuesdays — on some Tuesdays it opens at 17:00 for à la carte by reservation only; may close around New Year, Golden Week and Obon (Tabelog). Reservations accepted; preschool children only in private rooms (Tabelog). Cards accepted; no e-money or QR.',
    hours: { 0: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Dotonbori 1-7-10, 1F (set back inside the building) — by Hozenji Yokocho, about 5 min from Namba Stn',
    cuisine: 'Creative Japanese courses rooted in kappo tradition, with jazz playing · weekday lunch mini course with seasonal clay-pot rice ¥3,000 · lunch course ¥5,000 · seasonal clay-pot rice (corn, scallop and shiso; chestnut), leftovers made into rice balls to take home · lotus-root dumpling soup with broccoli sauce · fried sanma salad or chicken thigh · crispy okra · sea bream, amberjack and octopus sashimi · sake and wine · counter and private rooms, 18 seats',
    website: null, gmaps: gm('現代割烹 法善寺momo'), menu_url: null,
    notes: "[Japanese · a hidden creative kappo by Hozenji Yokocho] A creative kappo counter with private rooms, tucked deep inside a nondescript building by Hozenji Yokocho, open since 2021. Finding the door takes some effort. The kitchen builds colorful courses on Japanese seasonal tradition. Lunch is the easy way in: a weekday mini course with seasonal clay-pot rice for ¥3,000, or ¥5,000 for more. Recent courses ran from a lotus-root dumpling in vivid broccoli sauce to fried sanma served as a salad, with crispy okra among the starters. The clay-pot rice, chestnut in autumn or corn, scallop and shiso in summer, leaves enough for seconds, and what's left is made into rice balls to take home. Several diners praise the tableware and care. One critic found the dishes pre-plated and the egg rice hard and clumped. Dinner runs about ¥8,000–15,000. Closed most Tuesdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 October 2021 (Tabelog)', background: 'Contemporary kappo with jazz music and private rooms (Tabelog).', philosophy: 'Creative dishes rooted in Japanese seasonal tradition but not limited to it (Tabelog).', specialty: 'Seasonal clay-pot rice courses.',
      anecdotes: [
        { text: '"The chestnut rice, cooked in a clay pot, was so delicious that even after a second helping, there was still some left." — October 2026, ¥5,000 lunch course; the rest was made into rice balls to take home.', source: R + 'B537062971/' },
        { text: '"Most of the dishes are pre-cooked (essentially prepared in advance) and served already plated." — October 2026, a critical review.', source: R + 'B537539831/' },
      ],
      japanese_sources_summary: '食べログ: 現代割烹 法善寺momo、大阪市中央区道頓堀1-7-10 日宝バイストリート横丁ビル1F、なんば駅から徒歩5分、月・水〜日12:00〜14:30・16:00〜22:00、火曜休み(一部の火曜は17時から予約のみのアラカルト)、年末年始・GW・お盆に不定休あり、予約可(未就学児は個室のみ)、カード可、電子マネー・QR不可、18席(カウンター、個室、座敷、掘りごたつ)、禁煙、ジャズの流れる空間、2021年10月1日開店、平日限定の季節の土鍋ご飯のランチミニコース3,000円。口コミ(2026年4〜10月): 美しい器と丁寧な料理、5,000円はお得、個室はやや狭い、メインは2種から選べる、揚げた鶏と魚、オクラの揚げ物、季節の土鍋ご飯(とうもろこし、帆立、大葉)、残りはおにぎりに、路地の奥のビルの奥、個室で日本料理と日本酒、5,000円のコース、蓮根まんじゅうとブロッコリーのソース、秋刀魚の揚げ物のサラダ、栗ご飯のおかわりと持ち帰りのおにぎり、作り置きで盛り付け済み、卵かけご飯が固まっていたという厳しい声、刺身(鯛、カンパチ、生だこ)、揚げ物は秋刀魚か鶏もも、栗ご飯、カウンター中心で個室が一つ、提供が早い、和の創作、1万円以下で手頃。',
      confidence: 'medium', sources: [TB, R + 'B537062971/', R + 'B537539831/', R + 'B525818675/', R + 'B534697238/', R + 'B535865938/', R + 'B538095544/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Hard to find; reserve ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区道頓堀1-7-10 日宝バイストリート横丁ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated April–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区道頓堀一丁目7番10号 (go) 2m; same building as Manmaru Shokudo; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B537062971/', R + 'B525818675/'],
    price_note: 'Course prices from Tabelog and April–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Weekday lunch mini course with seasonal clay-pot rice (counter)', '¥3,000', 'Courses', 'no', 'no', 'Tabelog; August 2026.', 'mini'),
      it('', '', 'Lunch course', '¥5,000', 'Courses', 'no', 'no', 'April and October 2026.', 'lunch'),
      it('', '', 'Seasonal clay-pot rice (in the course)', '', 'Courses', 'ask', 'ask', 'August and October 2026.', 'donabe'),
    ] }, {
    cuisine: '割烹の伝統に根ざした創作和食のコース、ジャズが流れる・平日昼の季節の土鍋ご飯のミニコース3,000円・昼のコース5,000円・季節の土鍋ご飯(とうもろこし、帆立、大葉/栗)、残りはおにぎりにして持ち帰り・蓮根まんじゅうのブロッコリーソース・秋刀魚の揚げ物のサラダか鶏もも・オクラの揚げ物・鯛、カンパチ、たこの刺身・日本酒とワイン・カウンターと個室で18席',
    neighborhood: '道頓堀1-7-10 日宝バイストリート横丁ビル1F(ビルの奥)。法善寺横丁のそば、なんば駅から徒歩約5分',
    gf_detail: '実際にはグルテンフリーではありません。醤油とだしの和の味付け、揚げ物のコース。予約時に相談を。',
    vegan_detail: 'ヴィーガンではありません。だし、刺身、魚や鶏のメイン。',
    notes: '[和食・法善寺横丁のそばの隠れた創作割烹] 法善寺横丁のそば、目立たないビルの奥にあるカウンターと個室の創作割烹で、2021年開店。入口は少し探しにくい。季節を大切にする和食の伝統をもとに、色鮮やかなコースを組み立てます。気軽に行くならランチで、平日の季節の土鍋ご飯のミニコースが3,000円、しっかりなら5,000円。最近のコースでは、鮮やかなブロッコリーソースの蓮根まんじゅうから、サラダ仕立ての秋刀魚の揚げ物まで、前菜にはオクラの揚げ物も。土鍋ご飯は秋は栗、夏はとうもろこしと帆立と大葉で、おかわりしても余るほどで、残りはおにぎりにして持ち帰れます。器と丁寧さを褒める声がある一方、作り置きで盛り付け済み、卵かけご飯が固まっていたという厳しい声も。夜は8,000〜15,000円ほど。火曜はほぼ定休。',
  });
}

// ================================================================ 大阪鉄板焼き 神戸牛ステーキ Zin 難波店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27145189/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_teppanyaki_zin_namba', name: '大阪鉄板焼き 神戸牛ステーキ Zin 難波店 (Osaka Teppanyaki Kobe Gyu Steak Zin Namba)', category: 'OMNI',
    lat: 34.668837, lng: 135.500068, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: a multi-course teppanyaki with sauces, dumplings and fried fish. Ask when booking.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Kobe, Matsusaka and black wagyu; seafood.',
    hours_raw: 'Daily 12:00–15:00 (L.O. food 14:00, drinks 14:30) and 17:00–23:00 (L.O. food 22:00, drinks 22:30) (Tabelog). Reservations accepted; at dinner, groups with children are seated in a private room. A 5% year-end fee applies 15 December–4 January (Tabelog). Cards, QUICPay, PayPay and Alipay accepted.',
    hours: ALL(day(['12:00', '15:00'], ['17:00', '23:00'])), hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Dotonbori 2-1-1, Fruit Tower Bldg 8F (above Yoshinoya) — about 3 min from Namba Stn exit 25',
    cuisine: 'Kobe-beef teppanyaki at a counter overlooking Dotonbori · omakase courses with a choice of black wagyu, Matsusaka or Kobe beef · 14-course black-wagyu strip loin omakase ¥12,000, five-glass wine pairing ¥4,400 (April 2026) · anniversary omakase with tenderloin ¥16,000 (July 2026) · seared wagyu sushi · teppan-fried Nagasaki horse mackerel with pickle tartar · wagyu dumplings in consommé · pan-seared sea bass with shiso genovese · kamadaki rice from Gihei with red miso soup · garlic rice · English menu · 14 seats',
    website: null, gmaps: gm('鉄板焼き 神戸牛ステーキ Zin 難波店'), menu_url: null,
    notes: "[Teppanyaki · Kobe-beef teppanyaki with a Dotonbori night view] A 14-seat teppanyaki counter on the eighth floor above Yoshinoya, looking out over the lights of Dotonbori. The head chef came up through luxury hotels (reviewers name the St. Regis Osaka and the Ritz), and the cooking shows it. You choose black wagyu, Matsusaka or Kobe beef for the omakase. A 14-course black-wagyu strip loin course was ¥12,000 (April 2026), and an anniversary course with tenderloin ¥16,000. Beyond the steak, diners rave about the seafood: crisp-skinned sea bass with shiso genovese, and teppan-fried Nagasaki horse mackerel with a pickle tartar, one diner's best ever. Wagyu dumplings in consommé and seared wagyu sushi round it out, and rice cooked in a kamado from Kyoto's Gihei closes the meal. One diner found the seasoning a little salty. Many guests are from abroad; the menu is in English and staff speak English.",
    chef_bio: { chef_name: null, roles: [], origin: 'Dotonbori 2-chōme, 8F (Tabelog)', background: 'Head chef trained in hotel kitchens, previously at the St. Regis Osaka and the Ritz (July 2026 reviews).', philosophy: 'Some dishes run a food-cost ratio above 40% (July 2026 review).', specialty: 'Kobe-beef teppanyaki; teppan seafood.',
      anecdotes: [
        { text: '"The pan-seared sea bass and fried horse mackerel, finished on the teppan, had a delicate flavor reminiscent of French cuisine. I learned that the head chef trained at a hotel." — July 2026.', source: R + 'B531566074/' },
        { text: '"I opted for the 14-course OMAKASE featuring Black Wagyu Strip Loin for JPY 12,000, along with a wine pairing of 5 selections for JPY 4,400… it was fully booked with foreign guests aside from us." — April 2026.', source: R + 'B534171762/' },
      ],
      japanese_sources_summary: '食べログ: 大阪鉄板焼き 神戸牛ステーキ Zin 難波店、大阪市中央区道頓堀2-1-1 フルーツタワービル8F、地下鉄なんば駅25番出口から徒歩3分、毎日12:00〜15:00(L.O.料理14:00・ドリンク14:30)・17:00〜23:00(L.O.料理22:00・ドリンク22:30)、予約可(夜の子ども連れは個室へ)、12/15〜1/4は年末年始料金5%、カード・QUICPay・PayPay・Alipay可、14席(半個室あり)、禁煙、英語メニュー・英語対応スタッフ、神戸牛・松阪牛・和牛の鉄板焼き、夜景の見えるカウンター。口コミ(2026年4〜9月): ホテルで修業した料理長、原価率40%超の料理も、鱸のポワレと鯵フライ、St. Regis OsakaとRitz出身のシェフ、アニバーサリーOMAKASEコース16,000円(黒毛和牛フィレ、乾杯のスパークリング)、和牛の炙り寿司、58℃の黒毛和牛と夏野菜、長崎のまるあじの鉄板フライとピクルスのタルタル、和牛の水餃子、黒毛和牛のハラミ、鱸の大葉ジェノベーゼ、生姜のグラニテ、Gihei(8代目)のブレンド米、赤だし、13品のコースは黒毛和牛・松阪牛・神戸牛から、道頓堀の夜景、吉野家の上の8階、14品の黒毛和牛サーロインのOMAKASE 12,000円とワインペアリング5種4,400円、外国人客で満席、やや塩辛いという声、ガーリックライス、親切なスタッフ。',
      confidence: 'medium', sources: [TB, R + 'B531566074/', R + 'B534171762/', R + 'B532720394/', R + 'B533032808/', R + 'B533671788/', R + 'B535673365/'] },
    cultural_comfort: { level: 'english', note: 'English menu and English-speaking staff (Tabelog); many overseas guests (April 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区道頓堀2-1-1 フルーツタワービル 8F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated April–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区道頓堀二丁目1番1号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534171762/', R + 'B532720394/', R + 'B535673365/'],
    price_note: 'Course prices from April and July 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Black-wagyu strip loin OMAKASE (14 courses)', '¥12,000', 'Courses', 'no', 'no', 'April 2026.', 'striploin'),
      it('', '', 'Wine pairing (5 glasses)', '¥4,400', 'Drinks', 'ask', 'ask', 'April 2026.', 'pairing'),
      it('', '', 'Anniversary OMAKASE (black-wagyu tenderloin)', '¥16,000', 'Courses', 'no', 'no', 'July 2026.', 'anniversary'),
      it('', '', 'Matsusaka beef lunch', '', 'Courses', 'no', 'no', 'September 2026; garlic rice on request.', 'matsusaka_lunch'),
    ] }, {
    cuisine: '道頓堀を見下ろすカウンターの神戸牛の鉄板焼き・黒毛和牛、松阪牛、神戸牛から選ぶおまかせコース・黒毛和牛サーロインの14品のOMAKASE 12,000円、ワインペアリング5種4,400円(2026年4月)・黒毛和牛フィレのアニバーサリーOMAKASE 16,000円(2026年7月)・和牛の炙り寿司・長崎の鯵の鉄板フライとピクルスのタルタル・和牛の水餃子とコンソメ・鱸のポワレと大葉ジェノベーゼ・Giheiのかまど炊きご飯と赤だし・ガーリックライス・英語メニュー・14席',
    neighborhood: '道頓堀2-1-1 フルーツタワービル8F(吉野家の上)。なんば駅25番出口から徒歩約3分',
    gf_detail: '実際にはグルテンフリーではありません。ソース、餃子、揚げた魚のある鉄板焼きのコース。予約時に相談を。',
    vegan_detail: 'ヴィーガンではありません。神戸牛、松阪牛、黒毛和牛、魚介。',
    notes: '[鉄板焼き・道頓堀の夜景と神戸牛の鉄板焼き] 吉野家の上、8階にある14席の鉄板焼きのカウンターで、道頓堀の夜景を見渡せます。料理長は高級ホテル出身(口コミではSt. Regis OsakaとRitzの名前)で、その腕前がうかがえます。おまかせは黒毛和牛、松阪牛、神戸牛から選択。黒毛和牛サーロインの14品のコースが12,000円(2026年4月)、フィレのアニバーサリーコースは16,000円。ステーキ以外では魚介の評判が高く、皮はパリッと身はふわっとした鱸の大葉ジェノベーゼ、長崎の鯵の鉄板フライはピクルスのタルタルで、今まででいちばんという人も。和牛の水餃子のコンソメや和牛の炙り寿司も並び、締めは京都のGiheiのかまど炊きご飯。味付けがやや塩辛いという声も。海外の客が多く、英語メニューと英語対応スタッフあり。',
  });
}

save();
