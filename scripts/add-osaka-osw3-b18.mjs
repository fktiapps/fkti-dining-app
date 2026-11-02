// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first — lane osw3 (Tabelog id mod 4 = 2), batch 18.
//   + 道頓堀 酒処 喜多蔵 (Dotonbori Sakedokoro Kitazo: river-view sushi and sake izakaya, open to 01:00)
//   + 地焼うなぎ 法善寺山かづ (Jiyaki Unagi Hozenji Yama Kazu: Kansai-style charcoal eel in a Hozenji Yokocho townhouse)
//   + ASIYANA (アシヤナ: North Indian curry by Namba exit 28 for 20+ years)
//   + コジーナ邸 (Cucina Tei: Awaza chicken-paitan ramen at lunch, one private party a night)
//   - skipped 27054850 和牛 すき焼き しゃぶしゃぶ 食べ放題 豚匠 なんば邸: chain (豚匠 has five shops in Osaka)
//   Lane: ids with id mod 4 = 2 in `queue.mjs osaka next notable 80` (2026-11-02, after batch 17):
//   27054850 (skip), 27014162, 27133306, 27004522, 27102970 (last two digits 50, 62, 06, 22, 70: each = 2 mod 4).
//   None of the four is in data/osaka.json (grep by Tabelog id, name, romaji and address).
//   Group checks: Kitazo, Yama Kazu, ASIYANA and Cucina Tei — no other shops found.
//   Ramen: Cucina Tei is a ramen shop at lunch (cuisine ramen), but no source speaks to tare strength, so the six-key
//   profile cannot be sourced — no ramen block (brief, lesson 2026-11-01).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw3-18');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27054850', 'Chain (5+): 豚匠 is described as a pork-shabu and seiro-mushi specialist with five shops in Osaka (Tabelog matome, https://tabelog.com/matome/31973/); other 豚匠 shops include 心斎橋邸 and 碧 堂島邸');

// ================================================================ 道頓堀 酒処 喜多蔵
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27014162/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '01:00']);
  put({
    id: 'osaka_sakedokoro_kitazo_dotonbori', name: '道頓堀 酒処 喜多蔵 (Dotonbori Sakedokoro Kitazo)', category: 'OMNI',
    lat: 34.668824, lng: 135.499603, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Sashimi is the place to start; sushi comes with soy sauce, and the tempura skewers, udon and grilled items with sauce contain wheat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish, sushi and skewer izakaya.',
    hours_raw: 'Tue–Sun and holidays 17:00–01:00; closed Mondays (Tabelog). Reservations; phone even if online booking shows full; two hours when busy at weekends (Tabelog). Groups that include overseas tourists must phone the shop before booking; arriving without that call carries a ¥1,500 per person service fee and may be refused (Tabelog). Courses with all-you-can-drink: ¥5,000; Kura course ¥7,500; premium course with wagyu and abalone and 150 minutes of drinks ¥10,000 (Tabelog). Mobile ordering (April 2026). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), e-money and QR including Alipay (Tabelog). 40 seats: 8 at the counter, 20 at tables, 12 on tatami; private rooms for 4–20, some overlooking the Dotonbori River; non-smoking, ashtrays outside; wheelchair accessible; outlets; menus in English, Simplified Chinese and Korean, with photos (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Dotonbori 2-1-7, サン道頓堀ビル 2F, 30 m from the Dotonbori arcade (turn at Yoshinoya from Midosuji) — 3 min from Namba Stn',
    cuisine: 'Sushi, fish skewers and seafood with sake (Tabelog) · fresh bluefin tuna, including rare cuts and tastings of different parts; thick-cut tuna sashimi; fish-liver sashimi; grilled tuna cheek with wasabi leaves (Tabelog; January–April 2026) · original fish skewers; bamboo shoot and firefly squid tempura skewers; yakitori (Tabelog; April 2026) · sushi platters; rolls such as toro-taku, ume-shiso and unagi-kyu; toro maki ¥550 for two (April–September 2026) · taro potato salad; whole new-onion cheese hot pot; homemade roast beef; eel omelette; clam udon (January–April 2026) · oden in season (Tabelog, November 2026) · owner-selected sake, 10–13 kinds, changing monthly, and a local-sake tasting set (Tabelog; April 2026)',
    website: 'http://www.kitazou.com', gmaps: gm('道頓堀 酒処 喜多蔵'), menu_url: null,
    notes: "[Izakaya · Dotonbori, sushi and sake over the river] A second-floor sushi and seafood izakaya just off the Dotonbori arcade, 20 years in Osaka, with window seats and private rooms looking over the Dotonbori River. Come for thick-cut bluefin tuna and rare cuts, fish-liver sashimi, original fish skewers and sushi, with the owner's changing list of sake. Diners in 2026 call it a reliable, not-touristy find with fair prices; one group found the grilled items slow. Note the booking rule: groups with overseas tourists must phone first or face a ¥1,500 per person fee. Open to 1:00, closed Mondays.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed; selects the sake) and sushi chefs'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: celebrating 20 years in Osaka; a hideaway with a view of the Dotonbori River serving sushi, skewers and seafood; fresh bluefin tuna including rare cuts; sake chosen by the owner and sourced direct from breweries; sushi by artisans at reasonable prices.',
      philosophy: 'Delicious, fun and affordable (Tabelog).', specialty: 'Bluefin tuna; fish skewers; sake.',
      anecdotes: [
        { text: '"In short, it\'s an izakaya that isn\'t aimed at tourists and makes you want to come back." — January 2026, tuna and fish-liver sashimi.', source: R + 'B521338910/' },
        { text: '"The seating by the window offers a lovely view of the Dotonbori River, making for a great atmosphere." — January 2026.', source: R + 'B520319963/' },
        { text: '"However, the wait time for grilled items (like yakitori) was quite long." — April 2026, a group of about ten.', source: R + 'B527206335/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 道頓堀 酒処 喜多蔵 (キタゾウ)、居酒屋・寿司・串焼き、道頓堀2-1-7 サン道頓堀ビル2F、道頓堀のアーケードから30m、Namba 駅から徒歩3分、火〜日・祝 17:00〜1:00、月曜休み、予約可 (ネット予約が満席でも電話を)、週末の混雑時は2時間、外国人観光客を含む団体は予約前に必ず電話、電話なしの来店は1人1,500円のサービス料、入店できないことも、飲み放題つきのコース5,000円・Kura コース7,500円・プレミアムコース10,000円、カード・電子マネー・QR可、40席 (カウンター8、テーブル20、座敷12)、道頓堀川が見える個室、禁煙、英語・中国語 (簡体字)・韓国語のメニュー、大阪で20周年、本マグロの希少部位、オリジナルの魚の串、職人の寿司、店主が選ぶ日本酒10〜13種、Kita Kura Oden。口コミ(2026年1月〜9月): 厚切りのマグロの刺身、魚の肝の刺身、マグロのほほ肉焼き、たけのことホタルイカの天串、自家製ローストビーフ、うな玉、あさりうどん、トロ巻き2本550円、川の見える席、焼き物が遅いという声も。',
      confidence: 'medium', sources: [TB, R + 'B520319963/', R + 'B521338910/', R + 'B523325155/', R + 'B526034608/', R + 'B527206335/', R + 'B527578254/', R + 'B530219738/', R + 'B530462656/', R + 'B531497159/', R + 'B534549718/', R + 'B535368930/', R + 'B536195824/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Menus in English, Simplified Chinese and Korean (Tabelog), but groups with overseas tourists must phone before booking or pay ¥1,500 each (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区道頓堀2-1-7 サン道頓堀ビル2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with a November 2026 menu note; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区道頓堀二丁目1番7号 (go) 6m; same building as osaka_steak_house_juju (B1F, 1.3 m apart), so set 5 m north of it; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B536195824/'],
    price_note: 'Course prices from Tabelog (read November 2026), tax included; one review price (September 2026).', last_checked: TODAY, items: [
      it('', '', 'Course with all-you-can-drink', '¥5,000', 'Courses', 'ask', 'no', 'Tabelog.', 'course5000'),
      it('', 'Kura', 'Kura course: fish and meat with all-you-can-drink', '¥7,500', 'Courses', 'ask', 'no', 'Tabelog (from ¥8,250).', 'kura'),
      it('', '', 'Premium course with wagyu and abalone, 150-minute all-you-can-drink', '¥10,000', 'Courses', 'ask', 'no', 'Tabelog (from ¥11,000).', 'premium'),
      it('', '', 'Toro maki (two)', '¥550', 'Sushi', 'ask', 'no', 'September 2026.', 'toro_maki'),
    ] }, {
    cuisine: '寿司、魚の串、海鮮と日本酒 (食べログ)・新鮮な本マグロの希少部位や部位の食べ比べ、厚切りのマグロの刺身、魚の肝の刺身、わさび菜を添えたマグロのほほ肉焼き (食べログ、2026年1〜4月)・オリジナルの魚の串、たけのことホタルイカの天串、焼き鳥 (食べログ、2026年4月)・寿司の盛り合わせ、トロたく・梅しそ・うなきゅうの巻物、トロ巻き2本550円 (2026年4〜9月)・里芋のポテトサラダ、新玉ねぎ丸ごとのチーズ鍋、自家製ローストビーフ、うな玉、あさりうどん (2026年1〜4月)・季節のおでん (食べログ、2026年11月)・店主が選ぶ日本酒10〜13種は月替わり、地酒の飲み比べセット (食べログ、2026年4月)',
    neighborhood: '道頓堀2-1-7 サン道頓堀ビル 2F、道頓堀のアーケードから30m (御堂筋からは Yoshinoya の角を曲がる)。Namba 駅から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。刺身から確認を。寿司は醤油で、天串、うどん、タレの焼き物は小麦を含む。',
    vegan_detail: 'ヴィーガンではありません。魚、寿司、串の居酒屋。',
    notes: '[居酒屋・道頓堀、川を眺める寿司と日本酒] 道頓堀のアーケードからすぐの2階にある寿司と海鮮の居酒屋で、大阪で20年。窓際の席や個室から道頓堀川が見える。目当ては厚切りの本マグロや希少部位、魚の肝の刺身、オリジナルの魚の串、寿司に、店主が選ぶ替わりの日本酒。2026年の口コミでは観光客向けでない、手頃で安定した店という声が多く、焼き物が遅かったという団体の声も。予約の決まりに注意: 外国人観光客を含む団体は先に電話が必要で、ないと1人1,500円のサービス料。夜1時まで、月曜休み。',
  });
}

// ================================================================ 地焼うなぎ 法善寺山かづ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27133306/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '14:00'], ['17:30', '22:00']);
  put({
    id: 'osaka_jiyaki_unagi_hozenji_yamakazu', name: '地焼うなぎ 法善寺山かづ (Jiyaki Unagi Hozenji Yama Kazu)', category: 'OMNI',
    lat: 34.668151, lng: 135.502426, cuisine_type: 'unagi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The eel is basted with a sauce (lighter than most, 2026 reviews) that is not described; soy-based eel sauces usually contain wheat. Ask about the sauce and sides.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an eel restaurant; sets come with a clear soup and chawanmushi (August 2026).',
    hours_raw: 'Daily 11:00–14:00 (last order 13:30) and 17:30–22:00 (last order 21:30); irregular closures (Tabelog). Reservations; tables may be swapped for tatami when busy (phone ahead for a table); a 90-minute limit at busy times for everyone; no takeaway (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), PayPay and Alipay; no e-money (Tabelog). 50 seats over three floors, a counter and private tatami rooms for 2–8, shoes off upstairs; non-smoking (Tabelog), though the grill makes the ground floor smoky (July–August 2026); wheelchair accessible; children welcome (Tabelog). Guidance in Chinese, English and Korean (September 2026). Opened 1 December 2022 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba 1-1-16, in Hozenji Yokocho — 4 min from Namba Stn',
    cuisine: 'Kansai-style jiyaki eel: large seasonal eels grilled over binchotan without steaming, crisp-skinned and juicy (Tabelog; 2026) · unaju, a whole eel about ¥6,490 or a half (September–October 2026); unagi don just over ¥3,000 with clear soup and chawanmushi (August 2026); hitsumabushi with condiments and broth (July–October 2026); a lighter, not-too-sweet sauce and two kinds of sansho at the table (August–October 2026) · umaki rolled omelette, about ¥1,500 for five pieces; grilled eel liver (August–October 2026) · fresh fish and drinking snacks: octopus sunomono, scallops with a nut sauce, shellfish steamed in sake (Tabelog; September–October 2026) · sake chosen to go with eel (Tabelog)',
    website: null, gmaps: gm('地焼うなぎ 法善寺山かづ'), menu_url: null,
    notes: "[Unagi · Hozenji Yokocho, charcoal-grilled Kansai eel] A three-storey wooden townhouse in Hozenji Yokocho grilling eel the Kansai way, straight over binchotan without steaming, so the skin is crisp and the flesh juicy, under a lighter sauce than most. Order the unaju or the hitsumabushi, with umaki and grilled liver to start; the unagi don comes with soup and chawanmushi. Upstairs are quiet tatami rooms, shoes off, away from the smoke of the ground-floor grill. Diners in 2026 praise the crisp eel and the setting; a few found the portions small, the sansho weak or the service patchy. Lunch and dinner daily.",
    chef_bio: { chef_name: null, roles: ['Grill chefs and staff (unnamed)'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: a Kansai-style grilled-eel house in a traditional three-storey building in Hozenji Yokocho, grilling large seasonal eels over binchotan without steaming; fresh fish and drinking snacks; sake chosen to go with eel; opened 1 December 2022.',
      philosophy: null, specialty: 'Jiyaki eel; hitsumabushi.',
      anecdotes: [
        { text: '"Compared to the typical sweet and tender kabayaki, this dish offers a refreshing eating experience." — September 2026, a whole-eel unaju about ¥6,490.', source: R + 'B536209700/' },
        { text: '"The first floor was super smoky and had a strong aroma. Haha." — August 2026, unagi don and umaki on the third floor.', source: R + 'B533900757/' },
        { text: '"However, the sansho pepper... strangely lacked both flavor and spiciness." — October 2026, hitsumabushi and a half unaju.', source: R + 'B537673149/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 地焼うなぎ 法善寺山かづ、うなぎ・日本料理・海鮮、難波1-1-16、法善寺横丁、Namba 駅から徒歩4分、毎日11:00〜14:00 (L.O.13:30)・17:30〜22:00 (L.O.21:30)、不定休、予約可、混雑時はテーブルが座敷になることも、混雑時は90分制、テイクアウト不可、カード・PayPay・Alipay可、50席、個室 (2〜8名)、禁煙、車椅子可、子ども可、2022年12月1日オープン、3階建ての古民家、季節の大きな鰻を蒸さずに備長炭で焼く関西風の地焼き、鰻重とひつまぶし、酒の肴、鰻に合う日本酒。口コミ(2026年7月〜10月): 皮がぱりっと身はふっくら、鰻重約6,490円、鰻丼3,000円ほど (吸い物と茶碗蒸しつき)、ひつまぶし、う巻き5切れ約1,500円、肝焼き、タコの酢の物、甘すぎないタレ、山椒2種、1階は煙が多い、2階・3階の座敷、中国語・英語・韓国語の案内、量が少ない、山椒が弱いという声も。',
      confidence: 'medium', sources: [TB, R + 'B532611910/', R + 'B532619994/', R + 'B533198345/', R + 'B533871885/', R + 'B533900757/', R + 'B534080434/', R + 'B534584448/', R + 'B536209700/', R + 'B536510345/', R + 'B537647400/', R + 'B537673149/', R + 'B537686928/'] },
    cultural_comfort: { level: 'english', note: 'Guidance on eating hitsumabushi in Chinese, English and Korean (September 2026); Alipay accepted (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波1-1-16',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波一丁目1番16号 (go) 3m; nearest records (Kitan in Hozenji, Hozenji Yamaoka) 8–9 m away, not stacked; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536209700/', R + 'B533900757/'],
    price_note: 'Prices from August–September 2026 reviews (approximate as reported); no menu online.', last_checked: TODAY, items: [
      it('', '', 'Unaju, whole eel', '¥6,490', 'Eel', 'ask', 'no', 'September 2026 (about).', 'unaju'),
      it('', '', 'Unagi don with clear soup and chawanmushi', '¥3,000', 'Eel', 'ask', 'no', 'August 2026 (just over).', 'unadon'),
      it('', '', 'Hitsumabushi', '', 'Eel', 'ask', 'no', 'July–October 2026.', 'hitsumabushi'),
      it('', '', 'Umaki (five pieces)', '¥1,500', 'Sides', 'ask', 'no', 'August 2026 (about).', 'umaki'),
    ] }, {
    cuisine: '関西風の地焼きの鰻: 季節の大きな鰻を蒸さずに備長炭で焼き、皮はぱりっと身はふっくら (食べログ、2026年)・鰻重は1尾で約6,490円、半身も (2026年9〜10月)。吸い物と茶碗蒸しつきの鰻丼は3,000円ほど (2026年8月)。薬味と出汁で食べるひつまぶし (2026年7〜10月)。甘すぎない軽めのタレ、卓上に2種の山椒 (2026年8〜10月)・う巻き5切れ約1,500円、肝焼き (2026年8〜10月)・鮮魚と酒の肴: タコの酢の物、ホタテのナッツソース、貝の酒蒸し (食べログ、2026年9〜10月)・鰻に合う日本酒 (食べログ)',
    neighborhood: '難波1-1-16、法善寺横丁。Namba 駅から徒歩4分',
    gf_detail: '要確認。グルテンの情報なし。鰻は一般より軽いタレ (2026年の口コミ) で焼くが、タレの中身は書かれていない。醤油ベースの鰻のタレはふつう小麦を含む。タレと副菜を確認して。',
    vegan_detail: 'ヴィーガンではありません。鰻の店で、セットには吸い物と茶碗蒸しがつく (2026年8月)。',
    notes: '[うなぎ・法善寺横丁、炭火の関西の鰻] 法善寺横丁の3階建ての木造の町家で、関西流に蒸さずに備長炭で直接焼く鰻。皮はぱりっと身はジューシー、タレは一般より軽め。頼むなら鰻重かひつまぶし、前菜にう巻きと肝焼き。鰻丼には吸い物と茶碗蒸しがつく。上の階は靴を脱ぐ静かな座敷で、1階の焼き場の煙から離れられる。2026年の口コミではぱりっとした鰻と空間が好評で、量が少ない、山椒が弱い、接客にむらがあるという声も。昼と夜、毎日。',
  });
}

// ================================================================ ASIYANA
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27004522/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '16:00'], ['17:00', '23:00']);
  put({
    id: 'osaka_asiyana_motomachi', name: 'アシヤナ (ASIYANA)', category: 'OMNI',
    lat: 34.666005, lng: 135.497435, cuisine_type: 'curry',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Naan, samosas and the sesame naan are wheat; rice (or jasmine rice), tandoori chicken and the curries are where to ask, as thickeners are not described.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Vegetable curries appear, such as potato and eggplant (February 2026) and a weekend dal of mixed beans (Tabelog), but the use of ghee, cream or yogurt is not described.',
    hours_raw: 'Daily lunch 11:00–16:00 (last order 15:30) and dinner 17:00–23:00 (last order 22:30); takeaway to 22:30, delivery orders to 22:00; closed only 31 December and 1 January (Tabelog). Lunch from ¥880 every day, including weekends; dinner curry sets from ¥1,250; sets for two, courses and all-you-can-eat (Tabelog). Spice levels chosen from 1 to 100 (March 2026). Reservations (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), IC cards, iD, QUICPay and QR (Tabelog). 30 table seats; non-smoking, smoking space outside; children welcome, kids menu; takeaway and Uber Eats, DiDi Food and Demae-can delivery (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Motomachi 1-4-22 (Naniwa-ku), on Yotsubashi-suji — right outside exit 28 of Namba Stn, near JR Namba and OCAT',
    cuisine: 'North Indian curries and tandoor dishes, with a signature curry made with little oil (Tabelog; 2026) · lunch: a service lunch of a curry (four choices including a daily special) with naan, rice or both, salad and a mini drink, ¥930 (April 2026); chicken curry naan-rice set ¥980 (July 2026); ladies set with sesame naan ¥1,150 (February 2026); special lunch with two curries, naan, gapao rice, tandoori chicken, salad and samosas; biryani lunch; holiday lunch (2026) · dinner: chicken masala ¥1,180, plain naan ¥380 (June 2026); chicken biryani with an option of jasmine rice (May 2026); curry sets from ¥1,250 (Tabelog) · curries such as shrimp and spinach, tomato chicken, chicken and spinach, pork loin, seafood, potato and eggplant; a mixed-bean dal on weekends and holidays (Tabelog; 2026) · lassi made with the shop\'s own yogurt; chai (February 2026)',
    website: 'http://www.asiyana.com/', gmaps: gm('ASIYANA アシヤナ 元町'), menu_url: null,
    notes: "[Curry · Namba, a 20-year North Indian curry house] A long-running North Indian restaurant right by exit 28 of Namba Station, near JR Namba and OCAT, open from 11:00 to 23:00 every day. Lunch is the draw: a curry, naan or rice (or both), salad and a mini drink for under ¥1,000, or a big special lunch with tandoori chicken and samosas, with spice levels you choose. The house lassi uses the shop's own yogurt. Diners in 2026 call it great value and popular enough to queue at lunch; a few found the low spice levels milder than expected or the biryani small.",
    chef_bio: { chef_name: null, roles: ['Indian staff (unnamed)'], origin: null,
      background: 'Per the Tabelog listing: authentic Indian cuisine near Namba Station; a signature curry made with minimal oil; a weekend and holiday dal of various beans; choose your spice level. A June 2026 diner first visited nearly 20 years ago and says "ASIYANA" means "our home" or "a place of relaxation"; a March 2026 diner notes the staff are from India and speak fluent Japanese.',
      philosophy: 'Healthy, light curry made with minimal oil (Tabelog).', specialty: 'Curry lunch sets; naan.',
      anecdotes: [
        { text: '"I first visited this Indian restaurant nearly 20 years ago, so it has undoubtedly been in business for over 20 years." — June 2026, chicken masala ¥1,180 at 22:20.', source: R + 'B530200850/' },
        { text: '"You can select the spiciness level from 1 to 100, and trusting the menu, I ordered level 4." — March 2026, holiday lunch.', source: R + 'B523930372/' },
        { text: '"I was a little disappointed by the portion size, which felt a bit lacking." — May 2026, chicken biryani.', source: R + 'B527792838/' },
      ],
      japanese_sources_summary: '食べログ: ASIYANA (アシヤナ)、インド料理・インドカレー、浪速区元町1-4-22、Namba 駅28番出口からすぐ、毎日11:00〜16:00 (L.O.15:30)・17:00〜23:00 (L.O.22:30)、テイクアウトは22:30まで、デリバリーは22:00まで、12月31日と1月1日のみ休み、予約可、カード・電子マネー・QR可、30席 (テーブル)、禁煙 (店の外に喫煙所)、子ども可、キッズメニュー、テイクアウト、Uber Eats・DiDi Food・ Demae-can、ランチは880円から9種、ディナーのカレーセット1,250円から、2人用セット、コース、食べ放題、油を控えたヘルシーなカレー、土日祝は豆のダルカレー、辛さを選べる。口コミ(2026年2月〜9月): サービスランチ930円、チキンカレーのナンライスセット980円、レディースセット1,150円 (ごまナン)、スペシャルランチ (タンドリーチキン、サモサ)、ビリヤニ、チキンマサラ1,180円、プレーンナン380円、辛さは1〜100、自家製ヨーグルトのラッシー、インド出身のスタッフ、約20年続く店、量が少ないという声も。',
      confidence: 'medium', sources: [TB, R + 'B521842115/', R + 'B523244836/', R + 'B523418943/', R + 'B523930372/', R + 'B527744055/', R + 'B527792838/', R + 'B530200850/', R + 'B531679347/', R + 'B535976264/', R + 'B536512424/', R + 'B537282859/', R + 'B537349282/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff from India speak fluent Japanese (March 2026). No English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区元町1-4-22',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区元町一丁目4番22号 (go) 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B523244836/', R + 'B531679347/', R + 'B530200850/', TB],
    price_note: 'Prices from February–July 2026 reviews (as reported) and Tabelog (read November 2026).', last_checked: TODAY, items: [
      it('', '', 'Service lunch: curry, naan or rice, salad, mini drink', '¥930', 'Lunch', 'ask', 'ask', 'April 2026; lunch from ¥880 (Tabelog).', 'service_lunch'),
      it('', '', 'Chicken curry naan-rice set', '¥980', 'Lunch', 'no', 'no', 'July 2026.', 'chicken_set'),
      it('', '', 'Chicken masala', '¥1,180', 'Curry', 'ask', 'no', 'June 2026.', 'chicken_masala'),
      it('', '', 'Plain naan', '¥380', 'Bread', 'no', 'ask', 'June 2026.', 'naan'),
    ] }, {
    cuisine: '北インドのカレーとタンドール料理、看板は油を控えたカレー (食べログ、2026年)・ランチ: 日替わりを含む4種から選ぶカレーにナンかライスか両方、サラダ、ミニドリンクのサービスランチ930円 (2026年4月)、チキンカレーのナンライスセット980円 (2026年7月)、ごまナンのレディースセット1,150円 (2026年2月)、カレー2種、ナン、ガパオライス、タンドリーチキン、サラダ、サモサのスペシャルランチ、ビリヤニのランチ、休日ランチ (2026年)・ディナー: チキンマサラ1,180円、プレーンナン380円 (2026年6月)、ジャスミンライスも選べるチキンビリヤニ (2026年5月)、カレーセットは1,250円から (食べログ)・エビとほうれん草、トマトチキン、チキンとほうれん草、豚ロース、シーフード、じゃがいもとなすのカレー、土日祝は豆のダル (食べログ、2026年)・自家製ヨーグルトのラッシー、チャイ (2026年2月)',
    neighborhood: '浪速区元町1-4-22、Yotsubashi-suji 沿い。Namba 駅28番出口のすぐ前、JR Namba と OCAT の近く',
    gf_detail: '要確認。グルテンの情報なし。ナン、サモサ、ごまナンは小麦。ライス (ジャスミンライス)、タンドリーチキン、カレーから確認を。とろみの中身は書かれていない。',
    vegan_detail: '要確認。じゃがいもとなすのカレー (2026年2月) や週末の豆のダル (食べログ) などの野菜のカレーはあるが、ギー、クリーム、ヨーグルトを使うかは書かれていない。',
    notes: '[カレー・難波、20年続く北インド料理] Namba 駅28番出口のすぐ前、JR Namba と OCAT の近くにある老舗の北インド料理店で、毎日11時から23時まで。目当てはランチで、カレーにナンかライス (両方も)、サラダ、ミニドリンクで1,000円以下、タンドリーチキンとサモサつきの大きなスペシャルランチも。辛さは自分で選べる。ラッシーは店のヨーグルトで。2026年の口コミでは安くて昼は並ぶほど人気という声が多く、低い辛さは思ったよりマイルド、ビリヤニが少ないという声も。',
  });
}

// ================================================================ コジーナ邸
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270105/27102970/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:30', '15:00'], ['18:00', '22:00']); const SA = day(['11:30', '15:00']);
  put({
    id: 'osaka_cucina_tei_awaza', name: 'コジーナ邸 鶏白湯ラーメンと豪快な居酒屋料理＆鍋 本町阿波座 (Cucina Tei)', category: 'OMNI',
    lat: 34.680595, lng: 135.493631, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the ramen, mazesoba and tsukemen are wheat noodles (from Menya Teigaku, September 2025), and the kara-age is battered.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken paitan broth, chashu, chicken ham and anchovy sauces.',
    hours_raw: 'Lunch Mon–Sat 11:30–15:00; dinner Mon–Fri 18:00–22:00 (last order 21:30); closed Sundays and holidays (Tabelog). Evenings are private bookings for one group a night (8–22 people), and Saturday evenings are for private courses only (Tabelog). Lunch tickets from a vending machine on the second floor, cash only (June 2026); the machine does not take new ¥1,000 notes, but staff will change them (July 2026). Card payment is listed on Tabelog. Dinner courses with two hours of self-serve all-you-can-drink, including junmai daiginjo: all-you-can-eat kara-age and chashu ¥4,500; chicken and vegetable paitan chanko ¥5,000; "gout" hot pot of oysters, monkfish liver and cod milt ¥6,500 (Tabelog). Cancellation ¥1,000 a person, full course price on the day (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: SA }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Awaza 1-15-19, エイトハウスビル 2F (Nishi-ku), two blocks south of the Awaza 1 crossing — 5 min from exits 22–23 of Hommachi Stn',
    cuisine: 'Chicken-paitan ramen at lunch, Italian-leaning, and private hot-pot banquets at night (Tabelog; 2026) · white ramen ¥900: a frothy chicken paitan built on porcini, aromatic vegetables and olive oil, thin curly noodles, pink chashu and low-temperature chicken ham, mizuna (June–August 2026) · lunch set ¥1,000: white ramen with a mini salad and three Italian vegetable dishes; toppings of basil green sauce ¥150 and seasoned egg ¥150 (June–July 2026) · anchovy mazesoba with back fat and fried onion, special ¥1,300; cheese-fondue tsukemen; limited bowls (2025–2026) · kara-age, fried after low-temperature cooking (June 2026) · dinner courses: all-you-can-eat kara-age and chashu; chicken and vegetable paitan chanko; a "gout" hot pot of oysters, monkfish liver and cod milt (Tabelog)',
    website: null, gmaps: gm('コジーナ邸 阿波座'), menu_url: null,
    notes: "[Ramen · Awaza, porcini chicken-paitan ramen by day, private hot pots by night] A second-floor ramen shop near the Awaza crossing, filled with Maximum the Hormone posters and band signatures, that serves a frothy chicken paitan at lunch built on porcini, vegetables and olive oil, with thin curly noodles, pink chashu and chicken ham; add the basil green sauce for an Italian turn. The ¥1,000 lunch set adds a salad and three vegetable dishes. At night the room goes to one private party, with paitan chanko or a 'gout' hot pot of oysters and monkfish liver. Diners in 2026 like the rich-but-light broth; others found the soup lukewarm, the chicken cold in the middle or the noodles clumped. Featured on Kansai TV's Yo-idon. Closed Sundays.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed) and kitchen'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: a hidden ramen spot serving chicken paitan ramen by day and a private banquet space for one group a night; the broth for its chanko is made by a chef with Italian roots and a ramen artisan. Per 2025–2026 reviews: noodles from Menya Teigaku; the room is decorated with the owner\'s furnishings, signatures and Maximum the Hormone posters, with the band\'s music playing; featured on Kansai TV\'s "Yo-idon".',
      philosophy: null, specialty: 'White chicken-paitan ramen; gout hot pot.',
      anecdotes: [
        { text: '"The chicken paitan soup, based on porcini mushrooms, aromatic vegetables, and olive oil, was rich yet not heavy, leaving a surprisingly refreshing aftertaste." — June 2026, the ¥1,000 lunch set.', source: R + 'B529335477/' },
        { text: '"When I mixed in the green sauce, the refreshing aroma of basil spread throughout, transforming the dish into an Italian-inspired experience." — July 2026.', source: R + 'B532994468/' },
        { text: '"It was quite delicious, but unfortunately, it wasn\'t hot enough." — July 2026, lunch set.', source: R + 'B532782685/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): コジーナ邸 鶏白湯ラーメンと豪快な居酒屋料理＆鍋 本町阿波座、居酒屋・ちゃんこ鍋・ラーメン、西区阿波座1-15-19 エイトハウスビル 2F、Hommachi 駅22・23番出口から徒歩5分、月〜金 11:30〜15:00・18:00〜22:00 (L.O.21:30)、土 11:30〜15:00、日祝休み、夜は1日1組の貸切 (8〜22名)、土曜の夜は貸切コースのみ、2時間のセルフ飲み放題つきコース (唐揚げと自家製チャーシュー食べ放題4,500円、鶏と野菜の白湯ちゃんこ5,000円、牡蠣・あん肝・白子の Gout Nabe 6,500円)、キャンセル料1人1,000円 (当日はコース代)、昼は人気の鶏白湯ラーメン、イタリアン出身の料理人とラーメン職人のスープ。口コミ(2025年9月〜2026年8月): White Ramen 900円、ランチセット1,000円 (ミニサラダとイタリアンの野菜3種)、ポルチーニと香味野菜とオリーブオイルの鶏白湯、細いちぢれ麺、ピンクのチャーシューと鶏ハム、水菜、グリーンソース150円、味玉150円、アンチョビまぜそば、チーズフォンデュつけ麺、Menya Teigaku の麺、低温調理の唐揚げ、券売機は現金のみ、Maximum the Hormone のポスター、Kansai TV の Yo-idon で紹介、スープがぬるい、鶏が冷たい、麺がくっつくという声も。',
      confidence: 'medium', sources: [TB, R + 'B385287847/', R + 'B508598472/', R + 'B515136611/', R + 'B522775400/', R + 'B523511843/', R + 'B529335477/', R + 'B530067047/', R + 'B531063573/', R + 'B531425267/', R + 'B532782685/', R + 'B532994468/', R + 'B533388007/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine at lunch, cash only (June 2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区阿波座1-15-19 エイトハウスビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区阿波座一丁目15番19号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B529335477/', R + 'B532994468/', R + 'B533388007/', R + 'B523511843/', TB],
    price_note: 'Prices from February–August 2026 reviews (as reported) and Tabelog courses (read November 2026).', last_checked: TODAY, items: [
      it('', 'White Ramen', 'White ramen (chicken paitan)', '¥900', 'Ramen', 'no', 'no', 'August 2026.', 'white_ramen'),
      it('', '', 'Lunch set: white ramen, mini salad, three vegetable dishes', '¥1,000', 'Lunch', 'no', 'no', 'June–July 2026.', 'lunch_set'),
      it('', '', 'Special anchovy mazesoba', '¥1,300', 'Ramen', 'no', 'no', 'February 2026.', 'anchovy_mazesoba'),
      it('', '', 'Basil green sauce topping', '¥150', 'Toppings', 'ask', 'ask', 'July 2026.', 'green_sauce'),
      it('', '', 'Course: gout hot pot, two-hour self-serve all-you-can-drink', '¥6,500', 'Courses', 'ask', 'no', 'Tabelog.', 'gout_nabe'),
    ] }, {
    cuisine: '昼はイタリアンの香りの鶏白湯ラーメン、夜は貸切の鍋の宴会 (食べログ、2026年)・ White Ramen 900円: ポルチーニ、香味野菜、オリーブオイルで作る泡立った鶏白湯に細いちぢれ麺、ピンクのチャーシューと低温調理の鶏ハム、水菜 (2026年6〜8月)・ランチセット1,000円: White Ramen にミニサラダとイタリアンの野菜3種。トッピングにバジルのグリーンソース150円、味玉150円 (2026年6〜7月)・背脂とフライドオニオンのアンチョビまぜそば、特製1,300円、チーズフォンデュつけ麺、限定の一杯 (2025〜2026年)・低温調理してから揚げる唐揚げ (2026年6月)・夜のコース: 唐揚げとチャーシューの食べ放題、鶏と野菜の白湯ちゃんこ、牡蠣・あん肝・白子の Gout Nabe (食べログ)',
    neighborhood: '西区阿波座1-15-19 エイトハウスビル 2F、阿波座1交差点から南へ2ブロック。Hommachi 駅22・23番出口から徒歩5分',
    gf_detail: 'グルテンフリーではありません。ラーメン、まぜそば、つけ麺は小麦の麺 (2025年9月の口コミでは Menya Teigaku の麺) で、唐揚げは衣がある。',
    vegan_detail: 'ヴィーガンではありません。鶏白湯のスープ、チャーシュー、鶏ハム、アンチョビのソース。',
    notes: '[ラーメン・阿波座、昼はポルチーニの鶏白湯、夜は貸切の鍋] 阿波座交差点近くのビル2階のラーメン店で、Maximum the Hormone のポスターやサインがいっぱい。昼はポルチーニ、野菜、オリーブオイルの泡立つ鶏白湯に細いちぢれ麺、ピンクのチャーシューと鶏ハム。バジルのグリーンソースを足すとイタリアン風に。1,000円のランチセットにはサラダと野菜3種がつく。夜は1日1組の貸切で、白湯ちゃんこや牡蠣とあん肝の Gout Nabe。2026年の口コミでは濃いのに軽いスープが好評で、スープがぬるい、鶏の中が冷たい、麺がくっついていたという声も。Kansai TV の Yo-idon で紹介。日曜休み。',
  });
}

save();
