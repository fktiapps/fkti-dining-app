// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 20.
//   + GION COFFEE NANAFUKU (specialty coffee by Yasaka Shrine, open from 7:30; core list)
//   + カフェ コチ CAFE KOCSI (bread café since 2000, sister of a bakery, all-you-can-eat bread lunches; core list)
//   + カーヴ ド ケイ Cave de K (champagne and wine bar with a famous pancake, below Bar K6; notable list)
//   + ビュー＆ダイニング コトシエール View & Dining Kotoshie-ru (Hotel Granvia Kyoto, 15th floor; notable list)
//   Picked 2026-11-05 after batch 19. `queue.mjs kyoto-missed next core 200`: GION COFFEE NANAFUKU 26037139, カフェ コチ
//   26000167. `next notable 200`: 紫野和久傳 ジェイアール京都伊勢丹店 26004937 (skipped, Wakuden), 五条高倉 三徳六味 26037733
//   (skipped, chain), カーヴ ド ケイ 26023531, ビュー＆ダイニング コトシエール 26028505. Same-name check first: no other
//   NANAFUKU, KOCSI, カーヴ ド ケイ or コトシエール in our crawls (other コチ hits are unrelated names). Cave de K is the K6
//   group's wine bar on the ground floor below Bar K6 (kyoto_bar_k6, in data) — a sister concept of a small group, drafted;
//   Kotoshie-ru is Hotel Granvia Kyoto's own restaurant brand (chain-hotel own brand, drafted per the brief). None of the four is
//   in data/kyoto.json: grep by name and address (祇園町南側540, 福長町123, ヴァルズビル 1F, 東塩小路町901 15F) found none.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-20');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26004937', '紫野和久傳 ジェイアール京都伊勢丹店: a shop of the Wakuden group, already in data (kyoto_muromachi_wakuden) — a sub-brand of a large parent counts as a chain (Greg, 2026-11-05; Wakuden named as a large parent by the integrator).');
skip('26037733', '五条高倉 三徳六味: our crawls hold 6 same-name 三徳六味 shops (26035503 四条烏丸, 26037733 五条高倉, 26042285 錦小路新町, 27084630 福島本店, 27116173 ESTフードホール, 27147734 福島2号店) — 5+ same-name shops count as a chain (Greg, 2026-11-05).');

// ================================================================ GION COFFEE NANAFUKU
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26037139/'; const R = TB + 'dtlrvwlst/'; const IG = 'https://www.instagram.com/gion_nanafuku/';
  const H = day(['07:30', '18:30']);
  put({
    id: 'kyoto_gion_coffee_nanafuku', name: 'GION COFFEE NANAFUKU', category: 'OMNI',
    lat: 35.003358, lng: 135.777340, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Coffee and soft serve alongside hot sandwiches, a cat-shaped French toast and sweets; no gluten information (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Black coffee, cold brew and lemonade squash are plant-based, but lattes, soft serve and the food use dairy or egg; no plant-milk information (2026 reviews).',
    hours_raw: 'Daily 7:30–18:30; hours may change (Tabelog). No reservations (Tabelog). Takeaway (Tabelog). 15 seats over two floors — remove shoes for the tatami-style upper floor; blankets and a clean restroom (Tabelog; April–May 2026). Small dogs allowed on the ground floor, held on your lap (Tabelog). Cards and e-money (Suica, iD, QUICPay); no QR (Tabelog). English menu and English-speaking staff (April 2026). Glass-fronted shop just before Yasaka Shrine near the Gion intersection; about 8 min walk from Gion-Shijo Stn (April 2026). Opened 8 February 2022 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion at Yasaka Shrine, by the Gion intersection — 8 min walk from Gion-Shijo Stn',
    cuisine: 'Specialty coffee café: single origins such as a Guatemala and Ethiopia light roast (May 2026), cold brew in a large glass (June–July 2026), café latte and café au lait (April–May 2026) · espresso soft serve (July 2026) · hot sandwiches, a cat-shaped French toast and sweets (June, October 2026) · lemonade squash (August 2026) · wine (Tabelog) · mostly under ¥1,000 (Tabelog)',
    website: IG, gmaps: gm('GION COFFEE NANAFUKU 祇園'), menu_url: null,
    notes: '[Coffee · Gion at Yasaka Shrine, open from 7:30] A small two-floor coffee shop just before Yasaka Shrine, open from 7:30 every day: light-roast single origins, a smooth cold brew, café latte and an espresso soft serve that one reviewer called a must, with hot sandwiches and a cat-shaped French toast. Take your shoes off for the upstairs seats by the window over the Gion crossing. Cheerful, English-speaking staff and lots of visitors from abroad; small dogs welcome on your lap downstairs.',
    chef_bio: { chef_name: null, roles: ['Café staff (unnamed)'], origin: null,
      background: 'Per Tabelog: a café opened 8 February 2022. Reviewers in 2026 describe cheerful staff greeting guests in English and Japanese, many foreign tourists, freshly roasted coffee, and a calm Japanese-modern interior with a tatami-style upper floor.',
      philosophy: null, specialty: 'Cold brew; espresso soft serve; light-roast single origins.',
      anecdotes: [
        { text: '"I ordered the Espresso Soft Serve, and it was incredibly delicious—a hit menu after a long time." — July 2026, on the night of the Gion Festival.', source: R + 'B531844116/' },
        { text: 'An April 2026 visitor noted English menus and English-speaking staff, and was greeted with a smiling "Good morning".', source: R + 'B526424997/' },
        { text: '"Being in the heart of a tourist area, I thought the taste might be secondary, but I was pleasantly surprised by the deep flavor and mild acidity" — October 2026.', source: R + 'B537161580/' },
      ],
      japanese_sources_summary: '食べログ: カフェ、東山区祇園町南側540-2、毎日 7:30〜18:30、予約不可、テイクアウト、15席、座敷あり、小型犬は1階で抱っこなら可、カード・電子マネー可、QR 不可、子ども可、2022年2月8日オープン。口コミ (2026年4月〜10月、英語): 八坂神社の手前、祇園の交差点、グアテマラとエチオピアの浅煎り、水出しコーヒー、カフェラテ、カフェオレ、エスプレッソのソフトクリーム、ホットサンド、猫の形のフレンチトースト、レモンスカッシュは甘め、英語のメニューと英語のスタッフ、海外の客が多い、2階は靴を脱ぐ。',
      confidence: 'medium', sources: [TB, IG, R + 'B524027292/', R + 'B526424997/', R + 'B528280841/', R + 'B528301789/', R + 'B529496308/', R + 'B530216778/', R + 'B531844116/', R + 'B534178280/', R + 'B537161580/', R + 'B537597900/'] },
    cultural_comfort: { level: 'english', note: 'English menu and English-speaking staff (April 2026); shoes off upstairs; small dogs on your lap downstairs.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町南側540-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.003358, 135.777340); cross-checked: GSI 京都府京都市東山区祇園町南側540番地 (lot) 97 m; kyoto_goho_yukke_katamari is 43 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B529496308/', R + 'B531844116/'],
    price_note: 'No menu prices read; most visits under ¥1,000 (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Cold brew coffee', '', 'Coffee', 'ask', 'ask', '', 'cold_brew'),
      it('', '', 'Espresso soft serve', '', 'Sweets', 'ask', 'no', 'July 2026.', 'espresso_soft'),
      it('', '', 'Cat-shaped French toast', '', 'Food', 'no', 'no', 'June 2026.', 'neko_french_toast'),
    ] }, {
    cuisine: 'スペシャルティコーヒーのカフェ: グアテマラやエチオピアの浅煎り (2026年5月)、大きなグラスの水出しコーヒー (2026年6〜7月)、カフェラテ、カフェオレ (2026年4〜5月)・エスプレッソのソフトクリーム (2026年7月)・ホットサンド、猫の形のフレンチトースト、甘いもの (2026年6月、10月)・レモンスカッシュ (2026年8月)・ワイン (食べログ)・多くは1,000円未満 (食べログ)',
    neighborhood: '八坂神社の手前、祇園の交差点の近く。祇園四条駅から徒歩8分',
    gf_detail: '要確認。コーヒーやソフトクリームのほか、ホットサンド、猫の形のフレンチトースト、甘いもの。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: '要確認。ブラックコーヒー、水出し、レモンスカッシュは植物性だが、ラテ、ソフトクリーム、料理には乳や卵が入る。植物性ミルクの情報はない (2026年の口コミ)。',
    notes: '[コーヒー・八坂神社の手前、朝7時半から] 八坂神社の手前の2階建ての小さなコーヒー店。毎日7時半から: 浅煎りのシングルオリジン、すっきりした水出し、カフェラテ、口コミでおすすめのエスプレッソのソフトクリーム、ホットサンドや猫の形のフレンチトースト。2階は靴を脱いで、祇園の交差点を見下ろす窓辺の席へ。明るく英語の話せるスタッフ、海外の客が多い。1階は小型犬を抱っこで同伴可。',
  });
}

// ================================================================ カフェ コチ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26000167/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '18:00']);
  put({
    id: 'kyoto_cafe_kocsi', name: 'カフェ コチ (CAFE KOCSI)', category: 'OMNI',
    lat: 35.009797, lng: 135.765124, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a bread café — lunch sets come with all-you-can-eat bread, plus quiche, croutons and baked goods (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A daily soup (e.g. pumpkin, mushroom) and salad come with the bread, but the quiche, pâté and many breads use egg, dairy or meat; no vegan information (2025–2026 reviews).',
    hours_raw: 'Monday, Tuesday, Friday, Saturday and Sunday 12:00–18:00; closed Wednesday and Thursday; lunch 12:00–15:00 on weekdays only; hours may change (Tabelog). No reservations (Tabelog); a short queue on the stairs at opening at weekends (September 2025; October 2026). Order at the table, pay at the counter (September 2025). 20 seats with counter and sofa seating; non-smoking; children welcome (Tabelog). Cards (Tabelog). Takeaway (Tabelog). Second floor of 黄瀬ビル, near Kyoto City Hall; 5 min walk from Karasuma Oike or Shiyakusho-mae stations (Tabelog; October 2025). Opened 11 November 2000 (Tabelog); reopened by September 2026 after a pause (September 2026).',
    hours: { 0: H, 1: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Near Kyoto City Hall, 2nd floor — 5 min walk from Karasuma Oike Stn',
    cuisine: 'Bread café, sister of the bakery Année, serving its dense breads (2025–2026 reviews) · lunch sets with salad and all-you-can-eat bread: soup of the day ¥900 (September 2025), quiche of the day, pâté (2025–2026 reviews) · soups such as pumpkin with a hint of curry, mushroom with croutons (2025–2026 reviews) · spinach quiche (November 2025) · small breads at the register, desserts (November 2025) · wine, shochu and cocktails (Tabelog) · about ¥1,000–2,000 (Tabelog)',
    website: null, gmaps: gm('CAFE KOCSI 京都 市役所前'), menu_url: null,
    notes: '[Bread café · near City Hall, all the bread you want] A cosy second-floor café near City Hall, open since 2000 and sister to the popular bakery Année, where lunch means soup of the day, quiche or pâté with salad and refills of dense house bread — about ¥900–2,000. Books, sofas and an old-house feel; one guest found the back counter seats warm on a hot day. Short queues at weekend opening. Lunch on weekdays only. Closed Wednesday and Thursday.',
    chef_bio: { chef_name: null, roles: ['Café staff (unnamed)'], origin: null,
      background: 'Per Tabelog: opened 11 November 2000. Reviewers describe it as the sister café of the bakery Année, which opened in 2014 west of Karasuma Oike (October 2025), guests being sent here from Année on a short day (September 2025; September 2026), small breads delivered from a nearby bakery (November 2025), and a reopening reported in September 2026.',
      philosophy: null, specialty: 'Soup of the day with unlimited bread; quiche.',
      anecdotes: [
        { text: 'A September 2025 guest who found the sister store Année short of bread that day was directed here, ten minutes\' walk away, and would gladly have eaten more of the unlimited bread.', source: R + 'B514997398/' },
        { text: 'A September 2026 regular came as soon as the reopening was announced and found "the interior and atmosphere are just as I remembered."', source: R + 'B536306428/' },
        { text: '"I would have appreciated a few more varieties of bread in the all-you-can-eat selection." — October 2026.', source: R + 'B537217263/' },
      ],
      japanese_sources_summary: '食べログ: パン・カフェ、中京区福長町123 黄瀬ビル2F、烏丸御池駅・市役所前駅から徒歩5分、月・火・金・土・日 12:00〜18:00、水・木休み、平日のみランチ12:00〜15:00、予約不可、20席、禁煙、子ども可、カード可、テイクアウト、2000年11月11日オープン。口コミ (2025年9月〜2026年10月、英語): パン屋 Annéeの姉妹店、サラダとパン食べ放題のランチ、日替わりスープのセット900円、キッシュ、パテ、かぼちゃやきのこのスープ、ほうれん草のキッシュ、週末は開店時に階段に行列、2026年9月に再開、奥のカウンター席は暑かったとの声。',
      confidence: 'medium', sources: [TB, R + 'B514176847/', R + 'B514997398/', R + 'B516218457/', R + 'B516476659/', R + 'B518395501/', R + 'B535393367/', R + 'B535425902/', R + 'B536306428/', R + 'B537044194/', R + 'B537217263/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Second floor; order at the table, pay at the counter; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区福長町123 黄瀬ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reopened, with reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.009797, 135.765124); cross-checked: GSI 京都府京都市中京区福長町123番地 (lot) 49 m; kyoto_iida_anekoji is 33 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B514176847/', R + 'B535425902/'],
    price_note: 'No menu read; price from a September 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Soup of the day set (salad, unlimited bread)', '¥900', 'Lunch', 'no', 'ask', 'September 2025.', 'soup_set'),
      it('', '', 'Quiche of the day set', '', 'Lunch', 'no', 'no', '2025–2026 reviews.', 'quiche_set'),
      it('', '', 'Pâté set', '', 'Lunch', 'no', 'no', 'September 2026.', 'pate_set'),
    ] }, {
    cuisine: 'パン屋 Annéeの姉妹店で、ずっしりしたパンを出すカフェ (2025〜2026年の口コミ)・サラダとパン食べ放題付きのランチ: 日替わりスープ900円 (2025年9月)、日替わりキッシュ、パテ (2025〜2026年の口コミ)・ほのかにカレー風味のかぼちゃのスープ、クルトンのきのこのスープなど (2025〜2026年の口コミ)・ほうれん草のキッシュ (2025年11月)・レジの小さなパン、デザート (2025年11月)・ワイン、焼酎、カクテル (食べログ)・1,000〜2,000円ほど (食べログ)',
    neighborhood: '市役所の近く、ビル2階。烏丸御池駅から徒歩5分',
    gf_detail: 'グルテンフリーではない。パンのカフェで、ランチはパン食べ放題付き、キッシュ、クルトン、焼き菓子も (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。日替わりスープ (かぼちゃ、きのこなど) とサラダはパンと出るが、キッシュ、パテ、多くのパンに卵、乳、肉を使う。ヴィーガンの情報はない (2025〜2026年の口コミ)。',
    notes: '[パンのカフェ・市役所の近く、パン食べ放題] 市役所近くのビル2階、2000年からの居心地のよいカフェで、人気のパン屋 Annéeの姉妹店。ランチは日替わりスープ、キッシュかパテにサラダと、ずっしりした自家製のパンのおかわり付きで900〜2,000円ほど。本とソファの古民家のような雰囲気。暑い日は奥のカウンター席が暑かったという声も。週末の開店時は少し並ぶ。ランチは平日のみ。水・木休み。',
  });
}

// ================================================================ カーヴ ド ケイ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26023531/'; const R = TB + 'dtlrvwlst/'; const WEB = 'http://www.ksix.jp/cavedek/';
  const H = day(['15:00', '24:00']);
  put({
    id: 'kyoto_cave_de_k', name: 'カーヴ ド ケイ (Cave de K)', category: 'OMNI',
    lat: 35.013270, lng: 135.770566, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A wine bar with a custard pancake, sandwiches, fritto and roast beef; no gluten information (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Wine and champagne by the glass; the food named in reviews — cheese, fritto with shrimp and shirako, roast beef, custard pancake — is not vegan (2026 reviews).',
    hours_raw: '15:00–24:00; closed Tuesday; hours may change (Tabelog; official site). Reservations accepted — call ahead, as late hours fill (Tabelog; 2026 reviews). A ¥1,100 charge from 17:00 (Tabelog original 17時からはチャージ1100円; official site: 5:00pm〜 チャージ 1,100 yen); the official site also lists 税・サービス料 10%. 12 counter seats and a private room for up to 6, for guests who bring a bottle only; non-smoking; no children (Tabelog). Cards (Tabelog). English menu (Tabelog). Ground floor of ヴァルズビル on Nijo east of Kiyamachi, below Bar K6; 5 min walk from Kyoto Shiyakusho-mae Stn (Tabelog; 2026 reviews). Opened 24 March 2014 (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nijo east of Kiyamachi, ground floor — 5 min walk from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Wine bar themed on wine and desserts, pouring champagne and sparkling wine by the glass from magnums — a Krug ambassador shop, per an October 2026 reviewer (2026 reviews) · the signature pancake: a brûléed, custard-soft cake rich with spirits (2026 reviews) · potato and chestnut potage ¥990, mixed fritto of mushrooms, white shrimp and shirako ¥2,430, roast beef ¥2,200, smaller portions on request (October 2026); club sandwich, cheese (June 2026) · dessert wines such as a Kerner from Omori (September 2026) · drinks shared with Bar K6 upstairs (August 2026) · bills about ¥6,000–20,000 (Tabelog; 2026 reviews)',
    website: WEB, gmaps: gm('Cave de K 京都 木屋町二条'), menu_url: null,
    notes: '[Wine bar · Nijo Kiyamachi, champagne by the glass and a famous pancake] A bright counter wine bar below Bar K6 on Nijo-dori, opening from 3 pm, where champagne and sparkling wine — Krug included — are poured by the glass from magnums, and the signature brûléed custard pancake is the sweet to order. Real dishes too: fritto, roast beef, soup, halved for solo guests. A ¥1,100 charge from 5 pm. Call ahead late at night. No children. Closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed) and staff'], origin: null,
      background: 'Per Tabelog: opened 24 March 2014. Per the official site, part of K6 (ksix.jp), whose Bar K6 is upstairs. Reviewers in 2026 describe a calm, friendly owner who explains the wines, a ground floor for wine and an upstairs bar for whisky and spirits, and a theme of wine and desserts.',
      philosophy: 'Wine and desserts (2026 reviews).', specialty: 'Champagne by the glass from magnums; custard pancake.',
      anecdotes: [
        { text: 'A September 2026 guest was steered to a rare dessert wine to go with the pancake, and learned that sweet desserts can make lighter whites taste bitter.', source: R + 'B536427518/' },
        { text: 'A solo October 2026 diner, hesitating over dishes sized for two, was offered smaller portions of the fritto and roast beef.', source: R + 'B538651332/' },
        { text: 'Reviewers in August 2026 came down to Cave de K after finding Bar K6 upstairs fully booked — for one reviewer, the third time.', source: R + 'B534439031/' },
      ],
      japanese_sources_summary: '公式サイト (K6): Cave de K、15:00〜0:00、火曜定休、税・サービス料10%、17時からチャージ1,100円。食べログ: ワインバー・パンケーキ、中京区木屋町二条東入ル ヴァルズビル1F、市役所前駅から5分、月・水〜日 15:00〜24:00、火曜休み、予約可、17時からはチャージ1100円、12席 (カウンター)、個室6名まで (ボトル持ち込みの客のみ)、禁煙、子ども不可、カード可、英語メニュー、2014年3月24日オープン。口コミ (2026年6月〜11月、英語): マグナムのシャンパーニュやスパークリングをグラスで、Krug のアンバサダーの店、名物のパンケーキ (ブリュレのようなカスタード)、じゃがいもと栗のポタージュ990円、フリット2,430円、ローストビーフ2,200円、少なめにもできる、2階は Bar K6、夜遅くは満席が多い。',
      confidence: 'medium', sources: [WEB, TB, R + 'B439813078/', R + 'B521101019/', R + 'B532443161/', R + 'B534439031/', R + 'B535274026/', R + 'B536427518/', R + 'B537063834/', R + 'B538651332/', R + 'B538727580/', R + 'B82618998/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); ¥1,100 charge from 17:00; call ahead late; no children.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区木屋町二条東入ル ヴァルズビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.013295, 135.770566) lies 3.6 m from kyoto_bar_k6 (2F of the same building, 東生洲町481); pin moved 3 m south to (35.013270, 135.770566), 6.3 m from Bar K6; GSI 京都府京都市中京区東生洲町481番地 (lot) 41 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B538651332/', WEB],
    price_note: 'Prices from an October 2026 review; ¥1,100 charge from 17:00.', last_checked: TODAY, items: [
      it('', '', 'Charge (from 17:00)', '¥1,100', 'Charge', 'ask', 'ask', 'Official site; Tabelog.', 'charge'),
      it('', '', 'Signature pancake', '', 'Dessert', 'no', 'no', '', 'pancake'),
      it('', '', 'Soup of the day (potato and chestnut potage)', '¥990', 'Food', 'ask', 'ask', 'October 2026.', 'soup'),
      it('', '', 'Mixed fritto (mushrooms, white shrimp, shirako)', '¥2,430', 'Food', 'no', 'no', 'October 2026.', 'fritto'),
      it('', '', 'Roast beef', '¥2,200', 'Food', 'ask', 'no', 'October 2026.', 'roast_beef'),
    ] }, {
    cuisine: 'ワインとデザートがテーマのワインバー。マグナムのシャンパーニュやスパークリングをグラスで。2026年10月の口コミでは Krug のアンバサダーの店 (2026年の口コミ)・名物のパンケーキ: 表面をブリュレにした、カスタードのようにとろりとした洋酒の効いたケーキ (2026年の口コミ)・じゃがいもと栗のポタージュ990円、きのこと白海老と白子のフリット2,430円、ローストビーフ2,200円、少なめも可 (2026年10月)、クラブハウスサンド、チーズ (2026年6月)・Omori のケルナーなどのデザートワイン (2026年9月)・2階の Bar K6 と酒を共有 (2026年8月)・会計は6,000〜20,000円ほど (食べログ、2026年の口コミ)',
    neighborhood: '木屋町の東の二条通、ビル1階。市役所前駅から徒歩5分',
    gf_detail: '要確認。カスタードのパンケーキ、サンドイッチ、フリット、ローストビーフのあるワインバー。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: '要確認。ワインやシャンパーニュはグラスで飲めるが、口コミに出る料理 (チーズ、海老と白子のフリット、ローストビーフ、カスタードのパンケーキ) はヴィーガンではない (2026年の口コミ)。',
    notes: '[ワインバー・二条木屋町、グラスのシャンパーニュと名物パンケーキ] 二条通の Bar K6 の下にある明るいカウンターのワインバー。15時から開き、Krug などのシャンパーニュやスパークリングをマグナムからグラスで注ぐ。甘いものは名物のブリュレのカスタードパンケーキ。フリット、ローストビーフ、スープなど料理もあり、一人なら半量にも。17時からチャージ1,100円。夜遅くは電話を。子ども不可。火曜休み。',
  });
}

// ================================================================ ビュー＆ダイニング コトシエール
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26028505/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:30'], ['17:30', '22:00']);
  put({
    id: 'kyoto_kotoshieru_granvia', name: 'ビュー＆ダイニング コトシエール (View & Dining Kotoshie-ru)', category: 'OMNI',
    lat: 34.985866, lng: 135.758991, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. French and Italian courses with pasta, bread (focaccia, baguette), butter sauces and desserts; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: set courses of fish, abalone, duck and beef, with butter sauces and dairy desserts (2026 reviews).',
    hours_raw: 'Tuesday to Sunday and holidays 11:30–15:30 (last order 14:30) and 17:30–22:00 (last order 21:00); closed Monday except holidays (Tabelog). Reservations accepted; private hire by phone (Tabelog); queues at opening for lunch (September 2026). 15% service charge (Tabelog original サービス料15％). Dress code smart casual — men are asked not to wear sleeveless shirts or sandals; discounts and promotions not applicable (Tabelog). Lunch course ¥5,500 (October 2026); a ¥10,000 Tabelog course with champagne and wines (October 2026). A dessert-plate message for ¥500 (October 2026). 42 seats plus a 16-seat salon; private room "Grace Salon" for 6–16 from ¥16,800 courses; wheelchair accessible; non-smoking (Tabelog). Cards, e-money and QR incl. Alipay and WeChat Pay (Tabelog). 15th floor of Hotel Granvia Kyoto in the Kyoto Station building, directly connected to JR Kyoto Station (Tabelog; October 2026).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Hotel Granvia Kyoto 15F, Kyoto Station building — directly connected to JR Kyoto Stn',
    cuisine: 'French and Italian dining with a city view, menus changing monthly (Tabelog; September 2026) · lunch course ¥5,500: appetiser, soup or pasta (+¥1,000), a main from three or beef (+¥3,000), dessert, bread, drink (October 2026) · e.g. sea bream with butter sauce, salmon, Kujo negi and aori-ika Genovese (September 2026); pumpkin soup (October 2026); pesto pasta, duck, yogurt mousse with ice cream and meringue (October 2026); abalone pasta, beef fillet steak (October 2026) · focaccia and baguette with refills (October 2026) · wine, sake, cocktails (Tabelog)',
    website: null, gmaps: gm('コトシエール ホテルグランヴィア京都'), menu_url: null,
    notes: '[French-Italian · Kyoto Station, Hotel Granvia 15F with a view] The Hotel Granvia Kyoto\'s top-floor restaurant above Kyoto Station, with wide windows over the city and monthly French-Italian courses: a ¥5,500 lunch of appetiser, soup or pasta, a main and dessert, or dinners with abalone pasta, duck and beef fillet. Attentive service that will time courses to your Shinkansen; one October 2026 diner found the food somewhat average for the price. 15% service; smart casual. Closed Monday.',
    chef_bio: { chef_name: null, roles: ['Hotel kitchen and service staff (unnamed)'], origin: null,
      background: 'The restaurant of Hotel Granvia Kyoto, on the 15th floor of the Kyoto Station building (2026 reviews; Tabelog address). Reviewers in 2026 describe attentive, well-timed service, monthly-changing menus and the view of Kyoto from the large windows.',
      philosophy: null, specialty: 'Monthly course with a view; Genovese pasta.',
      anecdotes: [
        { text: 'An October 2026 diner on the ¥10,000 Tabelog course found the food "somewhat average" against high expectations, but the service outstanding — timed around a Shinkansen departure.', source: R + 'B536624679/' },
        { text: '"I got a bit lost trying to find this place since the address on Tabelog doesn\'t mention that it\'s above Granvia." — October 2026.', source: R + 'B536624679/' },
        { text: 'A September 2026 couple were moved to a window seat, which delighted the companion.', source: R + 'B534940707/' },
      ],
      japanese_sources_summary: '食べログ: フレンチ・イタリアン、下京区烏丸通塩小路下ル東塩小路町901 京都駅ビル、JR京都駅直結、火〜日・祝 11:30〜15:30 (L.O.14:30)・17:30〜22:00 (L.O.21:00)、月曜休み (祝日は営業)、予約可、サービス料15%、ドレスコードはスマートカジュアル (男性のノースリーブ・サンダル不可)、割引不可、42席とサロン16席、個室「グレースサロン」(6〜16名、16,800円〜)、車椅子可、禁煙、カード・電子マネー・QR 可。口コミ (2026年9月〜10月、英語): ホテルグランヴィア京都の15階、京都の眺め、月替わり、ランチコース5,500円、食べログのコース10,000円、鯛のバターソース、九条ねぎとあおりいかのジェノベーゼ、鴨、鮑のパスタ、牛フィレ、フォカッチャとバゲット、メッセージプレート500円、新幹線の時間に合わせてくれた、料理はやや普通との声。',
      confidence: 'medium', sources: [TB, R + 'B446533323/', R + 'B534940707/', R + 'B535078340/', R + 'B535501004/', R + 'B536583082/', R + 'B536624679/', R + 'B537715841/', R + 'B537908991/', R + 'B538000992/', R + 'B538250155/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Smart casual; 15% service; book ahead; cards, e-money and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区烏丸通塩小路下ル東塩小路町901 京都駅ビル (ホテルグランヴィア京都 15F)',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.985866, 135.758991); cross-checked: GSI 京都府京都市下京区東塩小路町901番地 (lot) 61 m; kyoto_gozan_nozomi (also Granvia 15F) is 17 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B538250155/', R + 'B536624679/'],
    price_note: 'Course prices from October 2026 reviews; 15% service extra.', last_checked: TODAY, items: [
      it('', '', 'Lunch course (appetiser, soup, main, dessert, bread, drink)', '¥5,500', 'Lunch', 'no', 'no', 'October 2026; pasta +¥1,000, beef +¥3,000.', 'lunch_course'),
      it('', '', 'Tabelog course with champagne and wines', '¥10,000', 'Dinner', 'no', 'no', 'October 2026.', 'tabelog_course'),
      it('', '', 'Abalone pasta', '', 'Pasta', 'no', 'no', 'October 2026.', 'abalone_pasta'),
    ] }, {
    cuisine: '街を見渡すフレンチとイタリアン、月替わりの献立 (食べログ、2026年9月)・ランチコース5,500円: 前菜、スープかパスタ (+1,000円)、3種から選ぶメインか牛肉 (+3,000円)、デザート、パン、ドリンク (2026年10月)・例: 鯛のバターソース、サーモン、九条ねぎとあおりいかのジェノベーゼ (2026年9月)、かぼちゃのスープ (2026年10月)、ジェノベーゼのパスタ、鴨、ヨーグルトのムースにアイスとメレンゲ (2026年10月)、鮑のパスタ、牛フィレのステーキ (2026年10月)・フォカッチャとバゲット、おかわり可 (2026年10月)・ワイン、日本酒、カクテル (食べログ)',
    neighborhood: 'ホテルグランヴィア京都15階、京都駅ビル。JR京都駅直結',
    gf_detail: '要確認。パスタ、パン (フォカッチャ、バゲット)、バターソース、デザートのあるフレンチとイタリアンのコース。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚、鮑、鴨、牛肉のコースで、バターのソースや乳製品のデザート (2026年の口コミ)。',
    notes: '[フレンチ・イタリアン・京都駅、ホテルグランヴィア15階の眺め] 京都駅の上、ホテルグランヴィア京都の最上階のレストラン。大きな窓から街を見渡し、月替わりのフレンチとイタリアンのコース: 前菜、スープかパスタ、メイン、デザートの5,500円のランチ、夜は鮑のパスタ、鴨、牛フィレ。新幹線の時間に合わせてくれる行き届いた接客。2026年10月の客は値段の割に料理はやや普通と書いている。サービス料15%、スマートカジュアル。月曜休み。',
  });
}

save();
