// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 51.
//   + 文の助茶屋 本店 Fuminosuke Chaya Honten (warabi mochi and zenzai tea house on the way to Kiyomizu-dera; notable)
//   + 京都 たらこパスタ LABO Kyoto Tarako Pasta LABO (tarako pasta in the Kawaramachi Garden food hall; rest)
//   + サムギョプサル専門店 豚星 Butaboshi (course-style samgyeopsal at Kawaramachi; rest)
//   + GOOD morning record bar (record cafe-bar on the Takase River; rest)
//   Notable list (mod 6 = 1) after batch 50, in order — skipped:
//   - Italian BAR KIMURAYA 京都駅前店 26023753: chain — a KIDS HOLDINGS release (nikkan.co.jp, 2018) lists Yaesu, Shinagawa,
//     Iidabashi, Monzen-nakacho and Kyoto branches.
//   - 祇園辻利 祇園本店 26013361: chain — six 辻利 shops in our crawls.
//   - 小川珈琲 堺町錦店 26037151: chain — about 30 directly run shops (2016 article via search); seven Kyoto shops on its job page.
//   - イノダコーヒ 三条支店 26000413: chain — six イノダコーヒ shops in our crawls.
//   - 名代とんかつ かつくら 四条東洞院店 26001919: chain — four in our crawls plus Mint Kobe, Shinjuku Takashimaya, Seibu
//     Higashi-Totsuka, Seijo Corty and Abeno Harukas shops in search results.
//   - 麺家 京都上がも 26004619: sub-brand of a large parent — 麺家 is the station noodle brand of ジェイアール西日本フードサービスネット
//     (company press releases).
//   - 京の禅 車 四条烏丸店 26024947: chain — same Gurunavi operator series as 宮崎地鶏炭火焼 車 (Hotarugaike honten, Esaka,
//     Shinsaibashi, Umeda, Namba, Hamamatsucho, Mitaka, Marunouchi).
//   - Ralph's Coffee 京都BAL 26032693: global brand (Ralph Lauren); second Japan shop after Omotesando (WWD Japan).
//   - スターバックス・コーヒー 京都烏丸六角店 26007679: chain.
//   - 志津屋 三条店 26003797: chain — ten 志津屋 shops in our crawls.
//   - 炉端とおでん 呼炉凪来 京都駅前店 26042617: chain — five 呼炉凪来 shops in our crawls.
//   - 幸せのパンケーキ 京都店 26027707: chain — about 26 shops nationwide (aumo).
//   Notable is now exhausted for this lane; then `queue.mjs kyoto-missed next rest 2000`, nearest-first — skipped:
//   - バトンドール 高島屋 京都店 26025445: Glico brand (large parent), a Takashimaya counter.
//   - ホリーズカフェ 河原町中央口店 26012977: chain — 16 ホリーズカフェ shops in our crawls.
//   - 牛しゃぶ・牛すき食べ放題 但馬屋 四条河原町店 26029141: chain — 12 但馬屋 shops in our crawls.
//   - 北極星 四条河原町店 26029231: chain — 17 shops in Keihanshin (Time Out).
//   - ペック 京都タカシマヤ店 26005369: the Milan delicatessen PECK sold in a dozen Takashimaya stores (Takashimaya site).
//   - カジュアル天ぷら 圓堂 京都河原町ガーデン店 26039443: chain — six 圓堂 shops in our crawls.
//   - きんのぶた PREMIUM 四条河原町 26043361: chain — PREMIUM Shinsaibashi plus きんのぶた Kusatsu Oiwake, Minoh Onohara and
//     Kawachi-Matsubara in search results.
//   - BLUE LEAF CAFE 京都 26031199: four shops (Sendai, Kyoto, Ueno, Nagoya) "presented by KDDI" on blueleafcafe.jp — treated as
//     a sub-brand of a large parent (doubt noted in the report).
//   - PREMIUM ROBATA SANDA 26041783: thin — five reviews (November 2024–June 2026).
//   - うなぎ鰻吉 26042335: renamed — its site now redirects to 一豊亭 KAZUTOYOTEI (two shops), with a renewal notice dated
//     2026-11-01; the reviews describe the former shop, so left for a later pass.
//   Same-name check for the picks, same brand or operator only: 文の助茶屋 — two (本店 and a JR Isetan counter). たらこパスタ
//   LABO — one; reviewers call it a sister of 京都北山洋食パセリカフェ (same floor) — small group, drafted. 豚星 — one. GOOD
//   morning record bar — one. None of the four is in data/kyoto.json by name or address (八坂上町373, 真町68 河原町ガーデン 7F,
//   真町98-3, 真町90-7).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-51');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260101/26023753/', 'chain: Italian BAR KIMURAYA has Yaesu, Shinagawa, Iidabashi, Monzen-nakacho and Kyoto branches (KIDS HOLDINGS release, 2018)');
skip('https://tabelog.com/en/kyoto/A2601/A260301/26013361/', 'chain: six 辻利 shops in our crawls');
skip('https://tabelog.com/en/kyoto/A2601/A260201/26037151/', 'chain: 小川珈琲 runs about 30 shops');
skip('https://tabelog.com/en/kyoto/A2601/A260202/26000413/', 'chain: six イノダコーヒ shops in our crawls');
skip('https://tabelog.com/en/kyoto/A2601/A260201/26001919/', 'chain: かつくら has shops in Kyoto, Kobe, Tokyo, Kanagawa and Osaka');
skip('https://tabelog.com/en/kyoto/A2601/A260101/26004619/', 'sub-brand of a large parent: 麺家 station noodles of ジェイアール西日本フードサービスネット');
skip('https://tabelog.com/en/kyoto/A2601/A260201/26024947/', 'chain: same operator series as 宮崎地鶏炭火焼 車 (8+ shops)');
skip('https://tabelog.com/en/kyoto/A2601/A260203/26032693/', 'global brand: Ralph Lauren Ralph\'s Coffee');
skip('https://tabelog.com/en/kyoto/A2601/A260202/26007679/', 'chain: Starbucks');
skip('https://tabelog.com/en/kyoto/A2601/A260202/26003797/', 'chain: ten 志津屋 shops in our crawls');
skip('https://tabelog.com/en/kyoto/A2601/A260101/26042617/', 'chain: five 呼炉凪来 shops in our crawls');
skip('https://tabelog.com/en/kyoto/A2601/A260201/26027707/', 'chain: 幸せのパンケーキ, about 26 shops nationwide');
skip('https://tabelog.com/en/kyoto/A2601/A260201/26025445/', 'large parent: Glico Baton d\'or counter at Takashimaya');
skip('https://tabelog.com/en/kyoto/A2601/A260201/26012977/', 'chain: 16 ホリーズカフェ shops in our crawls');
skip('https://tabelog.com/en/kyoto/A2601/A260201/26029141/', 'chain: 12 但馬屋 shops in our crawls');
skip('https://tabelog.com/en/kyoto/A2601/A260201/26029231/', 'chain: 北極星, 17 shops in Keihanshin (Time Out)');
skip('https://tabelog.com/en/kyoto/A2601/A260201/26005369/', 'global brand: PECK (Milan) at a dozen Takashimaya stores');
skip('https://tabelog.com/en/kyoto/A2601/A260201/26039443/', 'chain: six 圓堂 shops in our crawls');
skip('https://tabelog.com/en/kyoto/A2601/A260201/26043361/', 'chain: きんのぶた, five shops in search results');
skip('https://tabelog.com/en/kyoto/A2601/A260201/26031199/', 'sub-brand of a large parent: BLUE LEAF CAFE, four shops presented by KDDI');
skip('https://tabelog.com/en/kyoto/A2601/A260201/26041783/', 'thin: five reviews');
skip('https://tabelog.com/en/kyoto/A2601/A260201/26042335/', 'renamed 一豊亭 KAZUTOYOTEI with a renewal notice dated 2026-11-01; reviews describe the former うなぎ鰻吉');

// ================================================================ 文の助茶屋 本店 Fuminosuke Chaya
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26004769/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://ecstore.bunnosuke.jp/';
  const H = day(['11:00', '17:00']);
  put({
    id: 'kyoto_fuminosuke_chaya_honten', name: '文の助茶屋 本店 (Fuminosuke Chaya Honten)', category: 'OMNI',
    lat: 34.998468917880025, lng: 135.77974054028246, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Warabi mochi of warabi starch and wasanbon sugar with kinako, zenzai, anmitsu and kakigori; mitarashi dango is glazed with a soy-based sauce; no gluten information (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Warabi mochi and zenzai look plant-based, but some sets come with matcha ice cream or soft serve; no ingredient information (2026 reviews).',
    hours_raw: 'Daily 11:00–17:00; irregular closing days (Tabelog). No reservations (Tabelog). Cards (JCB, AMEX, Diners), e-money and QR (Tabelog). 28 seats; shoes off at the entrance; tables on the 1F, a tatami room upstairs and an engawa facing a small garden; non-smoking inside (Tabelog; 2026 reviews). Kakigori is one order per person (May 2026). Takeaway warabi mochi and zenzai (2006 and 2026 reviews). On the lane from Yasaka toward Kiyomizu-dera, near Ninenzaka (Tabelog; February 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashiyama, between Yasaka and Kiyomizu-dera — near Ninenzaka',
    cuisine: 'Old tea house of Japanese sweets, founded 1909 per 2026 reviews (1910 per a 2006 review) · warabi mochi of warabi starch and wasanbon with a hint of cinnamon and kinako, also to take away (2026 reviews) · anmitsu, matcha anmitsu with shiratama and matcha ice cream, mitarashi dango, tokoroten (2026 reviews) · zenzai: manpuku zenzai with chestnut and shiratama in winter, strawberry zenzai around New Year (January–February 2026) · kakigori in summer, e.g. Uji no Sato ¥1,500 (May 2026) · about ¥1,000–2,000 (Tabelog; 2026 reviews)',
    website: WEB, gmaps: gm('文の助茶屋 本店'), menu_url: null,
    notes: '[Japanese sweets · Higashiyama, on the way to Kiyomizu-dera] A long-established tea house in a renovated Kyoto house where you slip off your shoes for wobbly, cinnamon-scented warabi mochi, anmitsu, zenzai and summer kakigori, upstairs on tatami or by a little garden. Founded in the late Meiji era by a retired rakugo performer, per reviewers. Several 2026 reviewers note many tourists, including overseas visitors. Daytime only.',
    chef_bio: { chef_name: null, roles: ['Tea house staff (unnamed)'], origin: null,
      background: 'Per reviews: a tea house founded in 1909 (2026 reviews) — a 2006 reviewer gives 1910 and writes that it was started by a rakugo performer of the Katsura line after retiring from the stage, with amazake as the original specialty. Renovated before January 2026. Tabelog lists an online shop at ecstore.bunnosuke.jp and a JR Kyoto Isetan counter appears in our crawls.',
      philosophy: null, specialty: 'Warabi mochi.',
      anecdotes: [
        { text: 'A 2006 reviewer recorded that the tea house was founded by a retired rakugo performer and that sweet amazake was its original specialty.', source: R + 'B111667549/' },
        { text: 'An October 2026 regular calls the warabi mochi so soft it could almost be drunk, best eaten slowly on the engawa looking at the small garden.', source: R + 'B538417762/' },
        { text: 'Several 2026 reviewers note the shop is busy with tourists, including many overseas visitors (January–May 2026).', source: R + 'B522585866/' },
      ],
      japanese_sources_summary: '食べログ: 甘味処・和菓子、東山区下河原通東入八坂上町373、毎日 11:00〜17:00、不定休、予約不可、カード (JCB・AMEX・Diners)・電子マネー・QR 可、28席、店内禁煙。口コミ (2006年3月、2026年1月〜10月、英語): 1909年創業 (2006年の口コミでは1910年、落語家が引退後に始め、甘酒が名物)、清水寺への道、二年坂の近く、改装済み、靴を脱いで上がる、2階は座敷、縁側と小さな庭、わらび餅 (本わらび粉と和三盆、シナモンの香り、きな粉)、抹茶あんみつ、みたらし団子、ところてん、まんぷくぜんざい (栗と白玉、冬)、いちごぜんざい (正月ごろ)、かき氷 宇治の里1,500円 (1人1つ)、持ち帰りのわらび餅、観光客や外国人客が多いとの声が複数。',
      confidence: 'medium', sources: [TB, WEB, R + 'B111667549/', R + 'B522585866/', R + 'B522646421/', R + 'B523279496/', R + 'B524878030/', R + 'B526753663/', R + 'B531703037/', R + 'B534043124/', R + 'B534843629/', R + 'B538417762/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Shoes off; tatami upstairs; many tourists (several 2026 reviews); cards, IC and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区下河原通東入八坂上町373',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (34.998469, 135.779741); cross-checked: GSI 京都府京都市東山区八坂上町373番地 (lot) 35 m; nearest Kyoto record 67 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534843629/'],
    price_note: 'Price from a May 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Kakigori Uji no Sato (one per person)', '¥1,500', 'Kakigori', 'ask', 'ask', 'May 2026; summer.', 'uji_no_sato'),
      it('', '', 'Warabi mochi', '', 'Sweets', 'ask', 'ask', '2026 reviews.', 'warabi_mochi'),
    ] }, {
    cuisine: '2026年の口コミでは1909年創業 (2006年の口コミでは1910年) の和菓子の老舗の茶屋・本わらび粉と和三盆にシナモンがほのかに香るきな粉のわらび餅、持ち帰りも (2026年の口コミ)・あんみつ、白玉と抹茶アイスの抹茶あんみつ、みたらし団子、ところてん (2026年の口コミ)・ぜんざい: 冬は栗と白玉のまんぷくぜんざい、正月ごろはいちごぜんざい (2026年1〜2月)・夏はかき氷、例: 宇治の里1,500円 (2026年5月)・1,000〜2,000円ほど (食べログ、2026年の口コミ)',
    neighborhood: '東山、八坂から清水寺への道。二年坂の近く',
    gf_detail: '要確認。本わらび粉と和三盆のわらび餅にきな粉、ぜんざい、あんみつ、かき氷。みたらし団子は醤油のたれ。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: '要確認。わらび餅やぜんざいは植物性に見えるが、抹茶アイスやソフトクリーム付きのセットも。材料の情報はない (2026年の口コミ)。',
    notes: '[甘味・東山、清水寺への道] 改装した京の家で靴を脱いで上がる老舗の茶屋。ふるふるでシナモンが香るわらび餅、あんみつ、ぜんざい、夏のかき氷を、2階の座敷や小さな庭に面した縁側で。口コミでは明治の終わりに引退した落語家が始めた店。2026年の口コミの複数が、外国人客を含む観光客が多いと書く。昼間のみ。',
  });
}

// ================================================================ 京都 たらこパスタ LABO
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26044651/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://www.kyoto-kawaramachigarden.com/foodhall/shop_020/';
  const H = day(['11:00', '21:30']);
  put({
    id: 'kyoto_tarako_pasta_labo_kawaramachi', name: '京都 たらこパスタ LABO (Kyoto Tarako Pasta LABO)', category: 'OMNI',
    lat: 35.003580307873534, lng: 135.76954732034125, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: fresh wheat pasta from Awaji in every dish (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: every pasta is made with tarako (cod roe), many with cream, cheese or dashi (2026 reviews).',
    hours_raw: 'Daily 11:00–21:30, last order 21:00; hours vary by season and follow the Kawaramachi Garden building (Tabelog; May 2026). No reservations (Tabelog). No service charge (Tabelog original なし). Cards, e-money and PayPay (Tabelog). 20 seats at ten tables for two; non-smoking; takeaway for some dishes; no children\'s chairs (Tabelog). Tabelog asks for smart casual dress. 7F of Kyoto Kawaramachi Garden, directly linked to Hankyu Kyoto-Kawaramachi Stn (Tabelog). Opened 5 March 2026 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'varies',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shijo Kawaramachi — 7F of Kawaramachi Garden, linked to Kawaramachi Stn',
    cuisine: 'Tarako pasta specialist with Hokkaido tarako and thick, chewy fresh pasta from Awaji, opened March 2026 as a sister of 京都北山洋食パセリカフェ (Tabelog; 2026 reviews) · signature aburi tarako dashi spaghetti ¥1,485, topped with sesame, shibazuke and hijiki and finished with a pour of ago and kombu dashi (March and May 2026) · e.g. squid and tarako, root-vegetable kinpira, white miso and mushroom, citrus tarako mayo, roast beef, ikura, a cheese mountain, tororo; grilled tarako rice (2026 reviews) · lunch set ¥1,380 with soup, salad, small side and dessert; drink set +¥300 (March–April 2026) · about ¥1,000–2,000 (Tabelog)',
    website: WEB, gmaps: gm('京都 たらこパスタ LABO 河原町ガーデン'), menu_url: null,
    notes: '[Pasta · Shijo Kawaramachi, tarako specialist] A small food-hall shop serving nothing but tarako pasta on chewy Awaji fresh noodles — try the aburi tarako dashi spaghetti, finished like ochazuke with a pour of dashi — plus a ¥1,380 lunch set. One April 2026 evening guest waited 40–50 minutes outside with half the seats empty for lack of staff; others found it average or a little pricey. Open all day.',
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null,
      background: 'Per the Kawaramachi Garden food hall page: a tarako pasta shop whose concept is creative tarako pasta and new ways to change its flavour (創作、味変と新しいたらこぱすたの楽しみ方). Opened 5 March 2026 (Tabelog). Reviewers in March–May 2026 call it a sister of 京都北山洋食パセリカフェ, which has a branch on the same floor.',
      philosophy: 'Creative tarako pasta with flavour changes (food hall page).', specialty: 'Aburi tarako dashi spaghetti.',
      anecdotes: [
        { text: 'A March 2026 diner was told the dashi was ago (flying fish) and kombu, and poured it on like ochazuke until the dish became almost a soup pasta.', source: R + 'B524058993/' },
        { text: 'An April 2026 weekday-evening guest waited 40–50 minutes outside while more than half the seats stood empty for lack of staff.', source: R + 'B527233413/' },
        { text: 'A May 2026 lunch guest found it a very standard tarako pasta, like something to make at home.', source: R + 'B529726907/' },
      ],
      japanese_sources_summary: '食べログ: パスタ、下京区四条通り河原町東入真町68 河原町ガーデン 7F、阪急京都河原町駅直結、毎日 11:00〜21:30 (L.O.21:00)、季節で営業時間が変わる、予約不可、サービス料なし、カード・電子マネー・PayPay 可、20席 (2人席10卓)、禁煙、一部テイクアウト可、子ども用椅子なし、スマートカジュアル、2026年3月5日開店。フードホールの紹介: 「日々たらこ」、創作、味変と新しいたらこぱすたの楽しみ方。口コミ (2026年3月〜9月、英語): 京都北山洋食パセリカフェの姉妹店、北海道のたらこ、淡路の生パスタ、炙りたらこのだしスパゲッティ1,485円 (ごま、柴漬け、ひじき、あごと昆布のだし)、いかとたらこ、根菜のきんぴら、白味噌ときのこ、柑橘のたらこマヨ、ローストビーフ、いくら、チーズ、とろろ、焼きたらこご飯、ランチセット1,380円、ドリンクセット300円、人手不足で空席があっても40〜50分待ったとの声 (2026年4月)、普通・やや高いとの声。',
      confidence: 'medium', sources: [TB, WEB, R + 'B523991954/', R + 'B524058993/', R + 'B524458745/', R + 'B524842715/', R + 'B525485980/', R + 'B527233413/', R + 'B529007302/', R + 'B529726907/', R + 'B537021649/', R + 'B538311941/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Food-hall shop; no reservations; cards, IC and PayPay.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区四条通り河原町東入真町68 河原町ガーデン 7F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and food hall page; reviews through September 2026.' },
    pin_source: `Tabelog ${TB} (35.003580, 135.769547); GSI gives the same point for 真町68 and 真町90 (block-level), 28 m away, so kept the Tabelog pin; nearest Kyoto record 57 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B523991954/', R + 'B525485980/'],
    price_note: 'Prices from March and April 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Aburi tarako dashi spaghetti', '¥1,485', 'Pasta', 'no', 'no', 'March 2026.', 'dashi_spaghetti'),
      it('', '', 'Lunch set (pasta, soup, salad, side, dessert)', '¥1,380', 'Lunch', 'no', 'no', 'April 2026.', 'lunch_set'),
      it('', '', 'Drink set', '¥300', 'Drinks', 'ask', 'ask', 'With a pasta; March 2026.', 'drink_set'),
    ] }, {
    cuisine: '北海道のたらこと淡路の太くもちもちの生パスタのたらこパスタ専門店、京都北山洋食パセリカフェの姉妹店として2026年3月開店 (食べログ、2026年の口コミ)・名物の炙りたらこのだしスパゲッティ1,485円、ごま、柴漬け、ひじきをのせて、あごと昆布のだしを注いで仕上げる (2026年3月・5月)・例: いかとたらこ、根菜のきんぴら、白味噌ときのこ、柑橘のたらこマヨ、ローストビーフ、いくら、チーズ山盛り、とろろ、焼きたらこご飯 (2026年の口コミ)・スープ・サラダ・小鉢・デザート付きのランチセット1,380円、ドリンクセット+300円 (2026年3〜4月)・1,000〜2,000円ほど (食べログ)',
    neighborhood: '四条河原町、河原町ガーデン7階。河原町駅直結',
    gf_detail: 'グルテンフリー不可。すべて淡路の小麦の生パスタ (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。すべてたらこを使い、クリーム、チーズ、だしも多い (2026年の口コミ)。',
    notes: '[パスタ・四条河原町、たらこ専門] フードホールの小さな店で、淡路のもちもちの生パスタのたらこパスタだけを。だしを注いでお茶漬けのように仕上げる炙りたらこのだしスパゲッティがおすすめ。1,380円のランチセットも。2026年4月の夜の客は、人手不足で席が半分以上空いたまま外で40〜50分待った。普通、やや高いと感じた客も。通し営業。',
  });
}

// ================================================================ サムギョプサル専門店 豚星 Butaboshi
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26038579/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_butaboshi_kawaramachi', name: 'サムギョプサル専門店 豚星 (Samgyeopsal Senmon Ten Butaboshi)', category: 'OMNI',
    lat: 35.00427561775143, lng: 135.7699374248608, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: Korean sauces and marinades, crepes for wrapping and banchan; no gluten information (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a pork samgyeopsal specialist (2025–2026 reviews).',
    hours_raw: 'Daily 17:00–23:00, last order 22:30 (Tabelog). Reservations accepted (Tabelog). No service charge (Tabelog original 無し). Cards (VISA, Master, JCB, AMEX); no e-money or QR (Tabelog). 32 seats: 6 at the counter, tables, and a private room for 5–8 (Tabelog). Smoking allowed (Tabelog; February 2025 and May 2026). 2F, 1 min walk from Hankyu Kawaramachi Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shijo Kawaramachi, east side — 1 min walk from Kawaramachi Stn',
    cuisine: 'Samgyeopsal specialist built around set courses, with staff grilling and cutting the thick pork at the table (2026 reviews) · courses with banchan, kimchi, unlimited wrapping vegetables and soft drinks, e.g. a 200 g meat course and a course with dessert and 90 minutes of soft drinks (March 2026) · wrap it with tomato kimchi, natto and cheese in brown-rice crepes; moksal; yuzu sorbet (2025–2026 reviews) · alcohol all-you-can-drink, makgeolli included, about ¥500 extra (March–July 2026) · about ¥3,000–5,000 (Tabelog; 2026 reviews)',
    website: null, gmaps: gm('サムギョプサル専門店 豚星'), menu_url: null,
    notes: '[Korean · Shijo Kawaramachi, samgyeopsal] A small second-floor samgyeopsal specialist where cheerful staff grill thick pork belly for you and show how to wrap it — tomato kimchi, natto, cheese and brown-rice crepes — in good-value courses with free-flowing vegetables, plus cheap all-you-can-drink with makgeolli. Smoking allowed. Book ahead; open till 23:00.',
    chef_bio: { chef_name: null, roles: ['Staff who grill at the table (unnamed)'], origin: null,
      background: 'Per Tabelog: a samgyeopsal specialist on a second floor by Kawaramachi Stn. Reviewers in 2025–2026 describe a course-only style, staff who grill and cut the meat and explain how to eat it, and generous portions.',
      philosophy: 'Course-only, fixed price (April 2026 review).', specialty: 'Samgyeopsal course.',
      anecdotes: [
        { text: 'A February 2025 and May 2026 regular liked that the staff grill while chatting, and noted that smoking is allowed.', source: R + 'B502445571/' },
        { text: 'An April 2026 reviewer praised the course-only style for removing the worry of add-ons.', source: R + 'B525894565/' },
        { text: 'A July 2026 diner ran out of kimchi, ordered more à la carte, and switched dessert to a yuzu sorbet.', source: R + 'B532206906/' },
      ],
      japanese_sources_summary: '食べログ: 焼肉・韓国料理・豚料理、下京区真町98-3 2F、阪急河原町駅から徒歩1分、毎日 17:00〜23:00 (L.O.22:30)、予約可、サービス料無し、カード (VISA・Master・JCB・AMEX) 可、電子マネー・QR 不可、32席 (カウンター6、テーブル、個室5〜8名)、喫煙可、飲み放題あり。口コミ (2025年2月〜2026年7月、英語): コース中心、店員が焼いて切ってくれる、厚い豚肉、ナムルなどのおかず、キムチ、包む野菜とソフトドリンクが食べ放題・飲み放題、肉200gのコース、デザート付きのコース、トマトキムチ、納豆、チーズ、玄米のクレープ、モクサル、ゆずのシャーベット、マッコリも含む飲み放題は約500円追加。',
      confidence: 'medium', sources: [TB, R + 'B502445571/', R + 'B524173161/', R + 'B525247802/', R + 'B525392721/', R + 'B525894565/', R + 'B526027579/', R + 'B528658446/', R + 'B529008396/', R + 'B532206906/', R + 'B532693873/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff grill and explain; smoking allowed; cards only (no IC or QR).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区真町98-3 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through July 2026.' },
    pin_source: `Tabelog ${TB} (35.004276, 135.769937); cross-checked: GSI 京都府京都市下京区真町98番地 (lot) 34 m; nearest Kyoto record 7.8 m away (kyoto_shiruko_kawaramachi, a different lot); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B526027579/', R + 'B532206906/'],
    price_note: 'Course prices are not given in the reviews; Tabelog average about ¥3,000–3,999.', last_checked: TODAY, items: [
      it('', '', 'Samgyeopsal course', '', 'Courses', 'no', 'no', '2026 reviews.', 'course'),
      it('', '', 'Alcohol all-you-can-drink add-on', '¥500', 'Drinks', 'ask', 'ask', 'March and July 2026.', 'nomihodai'),
    ] }, {
    cuisine: 'コース中心のサムギョプサル専門店、店員が厚い豚肉を席で焼いて切ってくれる (2026年の口コミ)・おかず、キムチ、食べ放題の包む野菜とソフトドリンク付きのコース、例: 肉200gのコース、デザートとソフトドリンク90分付きのコース (2026年3月)・トマトキムチ、納豆、チーズを玄米のクレープで包む、モクサル、ゆずのシャーベット (2025〜2026年の口コミ)・マッコリも含むアルコールの飲み放題は約500円追加 (2026年3〜7月)・3,000〜5,000円ほど (食べログ、2026年の口コミ)',
    neighborhood: '四条河原町の東側。河原町駅から徒歩1分',
    gf_detail: 'グルテンフリー不可。韓国のたれや漬けだれ、包むクレープ、おかず。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。豚のサムギョプサルの専門店 (2025〜2026年の口コミ)。',
    notes: '[韓国料理・四条河原町、サムギョプサル] 2階の小さなサムギョプサル専門店。明るい店員が厚い豚バラを焼き、トマトキムチ、納豆、チーズ、玄米のクレープでの包み方も教えてくれる。野菜食べ放題のお得なコースと、マッコリも含む安い飲み放題。喫煙可。予約がおすすめ、23時まで。',
  });
}

// ================================================================ GOOD morning record bar
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26037133/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '23:30']);
  put({
    id: 'kyoto_good_morning_record_bar', name: 'GOOD morning record bar', category: 'OMNI',
    lat: 35.00341854787386, lng: 135.7702607703391, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: the food is mainly wheat donuts; a salted plate of sausages, olives and achar is the savoury snack (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: donuts with butter, cream or ice cream; sausages (2025–2026 reviews).',
    hours_raw: 'Daily 11:30–23:30; hours may change (Tabelog). A cafe by day and a bar at night, with occasional DJ events (2026 reviews). No reservations (Tabelog). Cash only: no cards, e-money or QR (Tabelog). A few counter seats and two tables, standing room at night, no space for bags; when full, guests spill onto the riverside or sit on the stairs (April and September 2026). One drink per person for solo guests (May 2026). Non-smoking (Tabelog). On the Takase River, 1 min walk from Hankyu Kyoto-Kawaramachi Stn (Tabelog; August 2025). Opened 12 December 2021 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'varies',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Kiyamachi on the Takase River — 1 min walk from Kawaramachi Stn',
    cuisine: 'Record cafe-bar with LPs and a DJ booth by the Takase River (2025–2026 reviews) · warm, chewy donuts from the nearby bakery kurs with whipped cream, ice cream and maple, or red bean butter: donut with whipped cream ¥900, coffee ¥400 (September 2025); donut and drink ¥1,550 (May 2026) · espresso tonic, yuzu soda, juices; at night beer, gin and tonic and highballs ¥800 (2025–2026 reviews) · salted plate of sausages, olives and achar (August 2025) · about ¥1,000–3,000 (Tabelog; 2026 reviews)',
    website: null, gmaps: gm('GOOD morning record bar 京都'), menu_url: null,
    notes: '[Record bar · Kiyamachi by the Takase River] A tiny record cafe-bar where LPs spin by the door (requests welcome): warm, chewy donuts from the nearby kurs bakery with cream or red bean butter by day, highballs and gin and tonics at night, when the crowd spills onto the riverside. Several reviewers note many overseas guests. Loud music, no room for bags, plastic cups. Cash only; till 23:30.',
    chef_bio: { chef_name: null, roles: ['Bar staff and DJs (unnamed)'], origin: null,
      background: 'Per Tabelog: a bar and cafe opened 12 December 2021 by the Takase River. Reviewers in 2025–2026 describe a record collection with a DJ booth facing the street, record requests taken, and donuts supplied by the nearby bakery kurs.',
      philosophy: null, specialty: 'Warm donuts from kurs; espresso tonic.',
      anecdotes: [
        { text: 'An August 2025 regular recommends the espresso tonic and notes that record requests are taken.', source: R + 'B512411850/' },
        { text: 'On a full Wednesday night in September 2026, a visitor about to leave was offered a seat on the stairs inside, with a highball in a soft plastic cup.', source: R + 'B536674289/' },
        { text: 'Several reviewers note many overseas guests (November 2025–September 2026).', source: R + 'B530322295/' },
      ],
      japanese_sources_summary: '食べログ: バー・カフェ、下京区真町90-7、阪急京都河原町駅から徒歩1分、毎日 11:30〜23:30、営業時間は変わることあり、予約不可、カード・電子マネー・QR 不可、禁煙、2021年12月12日開店。口コミ (2025年8月〜2026年10月、英語): 高瀬川沿い、レコード、DJブース、リクエスト可、昼はカフェで夜はバー、近くのパン屋 kurs のドーナツ (ホイップクリーム900円、アイス、メープル、あんバター)、コーヒー400円、ドーナツとドリンク1,550円、エスプレッソトニック、ゆずソーダ、ハイボール800円、ジントニック、ソーセージとオリーブとアチャールの塩の盛り合わせ、カウンター数席とテーブル2つ、夜は立ち飲み、混むと川沿いや階段に、1人1ドリンク、音楽が大きい、荷物置きがない、プラスチックのカップ、外国人客が多いとの声が複数。',
      confidence: 'medium', sources: [TB, R + 'B512411850/', R + 'B512921361/', R + 'B517667301/', R + 'B525638406/', R + 'B525726166/', R + 'B528397947/', R + 'B530322295/', R + 'B534040094/', R + 'B536674289/', R + 'B537634504/'] },
    cultural_comfort: { level: 'english', note: 'Many overseas guests (several reviews); cash only; small and loud; standing at night.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区真町90-7',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.003419, 135.770261); GSI gives the same point for 真町90 and 真町68 (block-level), 42 m away, so kept the Tabelog pin; nearest Kyoto record 14 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B512921361/', R + 'B536674289/'],
    price_note: 'Prices from September 2025 and September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Donut with whipped cream', '¥900', 'Donuts', 'no', 'no', 'September 2025.', 'donut_cream'),
      it('', '', 'Coffee', '¥400', 'Drinks', 'gf', 'vegan', 'September 2025.', 'coffee'),
      it('', '', 'Highball', '¥800', 'Drinks', 'ask', 'ask', 'September 2026.', 'highball'),
    ] }, {
    cuisine: '高瀬川沿いのレコードとDJブースのカフェバー (2025〜2026年の口コミ)・近くのパン屋 kurs の温かくもちもちのドーナツにホイップクリーム、アイスとメープル、あんバター: ホイップクリームのドーナツ900円、コーヒー400円 (2025年9月)、ドーナツとドリンク1,550円 (2026年5月)・エスプレッソトニック、ゆずソーダ、ジュース、夜はビール、ジントニック、ハイボール800円 (2025〜2026年の口コミ)・ソーセージ、オリーブ、アチャールの塩の盛り合わせ (2025年8月)・1,000〜3,000円ほど (食べログ、2026年の口コミ)',
    neighborhood: '高瀬川沿いの木屋町。河原町駅から徒歩1分',
    gf_detail: 'グルテンフリー不可。食べ物はほぼ小麦のドーナツ。塩気のつまみはソーセージ、オリーブ、アチャールの盛り合わせ (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。バター、クリーム、アイスのドーナツ、ソーセージ (2025〜2026年の口コミ)。',
    notes: '[レコードバー・高瀬川沿いの木屋町] 入口のそばでレコードが回る小さなカフェバー (リクエスト可)。昼は近くのパン屋 kurs の温かくもちもちのドーナツにクリームやあんバター、夜はハイボールやジントニックで、混むと客が川沿いにあふれる。外国人客が多いという口コミが複数。音楽が大きく、荷物置きはなく、カップはプラスチック。現金のみ、23時半まで。',
  });
}

save();
