// Osaka sweep (2-mile circle around Dotonbori), batch 213 — mom-phase clean-up: listings near the centre with 30+ reviews passed over without a skip() mark.
//   + ピッコロ なんばウォーク店 Piccolo Namba Walk (Umeda-born curry shop, 8-seat counter in Namba Walk; one of five Piccolo shops of ミツヤ食品工業 — small local group, kept)
//   - クックハウス なんばウォーク店 27032242 — skipped: cookhouse bakery chain (株式会社ダイヤ, 20 shops per its press release; EAST branch 27003384 in shops.jsonl)
//   + 寿司 天ぷら 明 難波 心斎橋店 Sushi × Tempura Akira (red-vinegar sushi from ¥150 and tempura, casual izakaya, Sennichimae; no other branch found)
//   + Sakurai (Italian and wine, Bravi Soemoncho 5F; chef Sakurai, sommelier, 20+ wines by the glass)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-30';
const { put, skip, save } = openCitySweep('osaka', TODAY, 213);
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ ピッコロ なんばウォーク店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27011550/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.piccolo.ne.jp/';
  const SHOPS = SITE + '?mode=f4'; const ABOUT = SITE + '?mode=f2'; const CO = SITE + '?mode=f6';
  const H = day(['11:00', '22:00']);
  put({
    id: 'osaka_piccolo_curry_namba_walk', name: 'ピッコロ なんばウォーク店 (Piccolo Namba Walk)', category: 'OMNI',
    lat: 34.666983, lng: 135.499877, cuisine_type: 'curry',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information for the curry sauce (the maker\'s retort version, sold as the shop\'s taste, lists spices, fruit, vegetables, beef, chutney and cream but no full ingredient list); the katsu curry and karaage are breaded or fried, so skip those.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the signature Piccolo curry is a beef curry finished with cream (the maker\'s own description), the hayashi sauce is a brown sauce with loin meat finished with cream and yoghurt (also the maker\'s description), and the omurice is egg over chicken rice.',
    hours_raw: 'Daily 11:00–22:00, last order 21:30 (Piccolo shop list, read 2026-10-30); Tabelog gives 10:30–22:00, closed on irregular days and New Year\'s Day. Omurice is served 11:00–15:00 (July 2026 review). 8 counter seats, with the Namba Walk passage right behind them (Tabelog; August and October 2026 reviews). Cash only: no cards, e-money or QR (Tabelog). No reservations; non-smoking; takeout; the shop also sells the retort curries to take home (shop list: お持ち帰り・レトルトカレー販売店). Fukujinzuke pickles are free; rakkyo ¥110 (August 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Namba Walk underground mall, west side (Namba 2, Namba Walk 1-9) — a short walk from the north-west exits of Midosuji Line Namba and Osaka Namba stations',
    cuisine: 'Osaka curry shop, counter only · three bases: Piccolo sauce curry (beef), spicy curry and Piccolo hayashi; two on one plate as the "W sauce" (July 2026) or half-and-half (April 2026) · katsu curry ¥1,100 (August 2026) · beef curry with raw egg topping (June 2026) · small katsu curry (June 2026) · karaage (August 2026) · omurice 11:00–15:00 with tomato sauce ¥800, curry sauce ¥950 or hayashi sauce ¥1,050 (July 2026) · free fukujinzuke, rakkyo ¥110 (August 2026) · retort curries to take home',
    website: SITE, gmaps: gm('ピッコロ なんばウォーク店'), menu_url: null,
    notes: '[Curry · Namba Walk, the underground branch of an Umeda institution] A counter-only curry stand on the west side of the Namba Walk underground mall, so small that the walkway runs right behind your stool. Piccolo began in the Umeda underground mall over 40 years ago, by the maker\'s account (a 2026 review says over 50), and magazines once called it the "King of Curry". The house curry is a beef curry slow-cooked from thirty-odd spices with fruit and vegetables, rounded off with chutney and cream: sweet and rich rather than hot. For more heat there is a spicy curry with a lighter colour, and the "W sauce" puts both on one plate. Food comes fast, often within minutes, which suits a lunch break; free fukujinzuke sits on the counter. Katsu curry was ¥1,100 in August 2026, and omurice with tomato, curry or hayashi sauce runs ¥800–1,050 at lunch. Opinions run from "incredibly delicious" to "classic, just average". Cash only.',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Run by ミツヤ食品工業株式会社 (head office Shinsaibashisuji 2-3-16; factory in Higashi-Osaka), which also makes Piccolo retort curries. The company\'s shop list names five Piccolo shops: Namba Walk, Whity Umeda, Hankyu Kappa Yokocho, JR Osaka Station and Nishinomiya Hankyu. Per the company site, Piccolo opened in the Umeda underground mall "over 40 years ago" as a pioneering curry specialist and was introduced as the "King of Curry" in magazines such as L Magazine; 2026 reviews give "nearly half a century" and "over 50 years". A long-time diner called the Namba Walk branch "Piccolo Junior", with a menu slightly different from Umeda\'s.', philosophy: 'Fresh, carefully chosen ingredients, a blend of thirty-odd spices, and beef cooked separately so the meat itself can be tasted (company site).', specialty: 'Piccolo beef curry; spicy curry; the two together as the W sauce.',
      anecdotes: [
        { text: '"Including the time it takes to fry the katsu, my stay was just 15 minutes from arrival to checkout." — August 2026, katsu curry ¥1,100.', source: R + 'B532884982/' },
        { text: '"In the past, I used to enjoy beef curry at the same restaurant in Umeda… the prices have increased by about 30% for similar dishes. So, I opted for the half-and-half curry." — April 2026.', source: R + 'B525566747/' },
      ],
      japanese_sources_summary: '食べログ: ピッコロ なんばウォーク店、カレー・オムライス、大阪市中央区難波2 虹の街1-9、近鉄難波駅・地下鉄御堂筋線なんば駅すぐ、10:30〜22:00、不定休と元日、予約不可、カード・電子マネー・QR不可、カウンター8席、禁煙、テイクアウト可。ピッコロカリーのサイト (ミツヤ食品工業株式会社、本社 大阪市中央区心斎橋筋2-3-16、東大阪工場): 店舗はなんばウォーク店 (なんばウォーク1-9、11:00〜22:00、オーダーストップ21:30)、ホワイティ梅田店、阪急かっぱ横丁店、JR大阪駅店、西宮阪急店、お持ち帰り・レトルトカレー販売店 (店内でお召し上がりいただけます)。40余年前に梅田の地下街に開いたカレー専門店で、Lマガジンなどで「キングオブカリー」と紹介された。ピッコロビーフカリーは30数種のスパイスに果実と野菜、牛肉を加えて長時間煮込み、チャツネと生クリームで仕上げる。口コミ (2026年): ピッコロソースカリー、スパイシーカリー、ピッコロハヤシの3種、2種がけのWソース、カツカレー1100円、オムライス (11:00〜15:00) はトマトソース800円・カレーソース950円・ハヤシソース1050円、福神漬は無料、らっきょうは110円、提供が速い、席のすぐ後ろが通路、梅田の店から通う人も、値段は以前より3割ほど上がったという声も。',
      confidence: 'medium', sources: [TB, SHOPS, ABOUT, CO, R + 'B112591031/', R + 'B525566747/', R + 'B530762488/', R + 'B532884982/', R + 'B534125305/', R + 'B534484711/', R + 'B537512904/', R + 'B538325782/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only; tiny counter, quick service (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '大阪府大阪市中央区難波2 虹の街1-9 (なんばウォーク内)',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated through October 2026; listed on the operator\'s shop page (piccolo.ne.jp, read 2026-10-30).' },
    pin_source: `Tabelog ${TB}; GSI resolves only 難波二丁目 (chome) 75m away, and the shop is inside the Namba Walk underground mall (Tabelog address 虹の街1-9; operator shop list なんばウォーク1-9), so the pin rests on the Tabelog point alone; nearest other record osaka_coffee_shop_erika_namba_walk (address_ja "大阪府大阪市中央区難波2-1-14 なんばウォーク内 (一番街)") is 15 m away at a different unit, so nothing stacks; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B112591031/', R + 'B525566747/', R + 'B530762488/', R + 'B532884982/', R + 'B534125305/'],
    price_note: 'Prices from reviews dated July–August 2026; an April 2026 diner found prices about 30% higher than years before.', last_checked: TODAY, items: [
      it('', '', 'Piccolo beef curry', '', 'Curry', 'ask', 'no', 'Regular size ordered in October 2026; raw egg topping available (June 2026).', 'beefcurry'),
      it('', '', 'W sauce (spicy curry and Piccolo beef curry on one plate)', '', 'Curry', 'ask', 'no', 'July 2026; half-and-half in April 2026.', 'wsauce'),
      it('', '', 'Katsu curry', '¥1,100', 'Curry', 'no', 'no', 'August 2026.', 'katsucurry'),
      it('', '', 'Omurice with tomato sauce (11:00–15:00)', '¥800', 'Omurice', 'ask', 'no', 'July 2026.', 'omu_tomato'),
      it('', '', 'Omurice with curry sauce (11:00–15:00)', '¥950', 'Omurice', 'ask', 'no', 'July 2026.', 'omu_curry'),
      it('', '', 'Omurice with hayashi sauce (11:00–15:00)', '¥1,050', 'Omurice', 'ask', 'no', 'July 2026; ordered again in October 2026.', 'omu_hayashi'),
      it('らっきょう', '', 'Rakkyo pickles (fukujinzuke free)', '¥110', 'Sides', '', '', 'August 2026.', 'rakkyo'),
    ] }, {
    cuisine: '大阪のカレー屋、カウンターのみ・ピッコロソースカリー (ビーフ)、スパイシーカリー、ピッコロハヤシの3種、2種を1皿にしたWソース (2026年7月) やハーフ&ハーフ (2026年4月)・カツカレー 1100円 (2026年8月)・生卵のせビーフカレー (2026年6月)・カツカレー小 (2026年6月)・から揚げ (2026年8月)・オムライス (11:00〜15:00): トマトソース 800円、カレーソース 950円、ハヤシソース 1050円 (2026年7月)・福神漬は無料、らっきょう 110円 (2026年8月)・持ち帰り用のレトルトカレー',
    neighborhood: 'なんばウォークの西側 (難波2、なんばウォーク1-9)。御堂筋線なんば駅・近鉄大阪難波駅の北西の出口から少し',
    gf_detail: '要確認。カレーソースのグルテン情報はありません (店の味として売るメーカーのレトルトはスパイス、果実、野菜、牛肉、チャツネ、生クリームと説明していますが、原材料の一覧はなし)。カツカレーとから揚げは衣つきの揚げ物なので避けてください。',
    vegan_detail: 'ヴィーガンではありません。看板のピッコロカリーは生クリームで仕上げるビーフカレー (メーカーの説明)、ハヤシはロース肉入りのブラウンソースを生クリームとヨーグルトで仕上げる (同じくメーカーの説明)、オムライスは卵とチキンライス。',
    notes: '[カレー・なんばウォーク、梅田の老舗の地下の支店] なんばウォークの西側にあるカウンターだけのカレー店。すぐ後ろを通路が通るほど小さい。ピッコロはメーカーによれば40余年前に梅田の地下街で始まり (2026年の口コミには50年以上とも)、雑誌で「キングオブカリー」と紹介された。看板は30数種のスパイスに果実と野菜を加えて煮込み、チャツネと生クリームで仕上げるビーフカレーで、辛さより甘みとコク。辛いのが好みならスパイシーカリー、両方を1皿にするWソースも。料理は数分で出てくることが多く、昼休みに向く。福神漬はカウンターに置いてあり無料。2026年8月はカツカレー1100円、昼のオムライスはトマト・カレー・ハヤシのソースで800〜1050円。「とてもおいしい」から「昔ながらで普通」まで声はさまざま。現金のみ。',
  });
}

// ================================================================ クックハウス なんばウォーク店 — chain
skip('27032242', 'クックハウス なんばウォーク店: cookhouse bakery chain of 株式会社ダイヤ. Press release (prtimes.jp/main/html/rd/p/000000186.000063870.html, read 2026-10-30): "大阪や奈良の駅ナカおよび主要商業施設を中心に20店舗" (later in the same release "約25店舗"). Sister branch COOK HOUSE Nanba u~o-ku EAST ten 27003384 is in shops.jsonl. Review: "Since there are COOK HOUSE locations near Uehommachi and along the Kintetsu line, I try to visit whenever I\'m in the area." (July 2026, B524237087).');

// ================================================================ 寿司 天ぷら 明 難波 心斎橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27131825/'; const R = TB + 'dtlrvwlst/';
  const MENU = TB + 'dtlmenu/';
  const H = day(['12:00', '16:00'], ['17:00', '23:30']);
  put({
    id: 'osaka_sushi_tempura_akira_sennichimae', name: '寿司 天ぷら 明 難波 心斎橋店 (Sushi × Tempura Akira)', category: 'OMNI',
    lat: 34.66795, lng: 135.504507, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: half the menu is tempura and fried dishes (wheat batter), the sushi is eaten with soy sauce, and there is a ramen to finish. Sashimi exists, but there is no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood izakaya; the dashimaki is egg soaked in chicken broth (March 2025), the ramen is a sea-bream broth, and the tempura comes with a homemade dipping sauce whose makeup no source gives.',
    hours_raw: 'Daily 12:00–16:00 (last order food 15:00, drinks 15:30) and 17:00–23:30 (last order food 22:30, drinks 23:00); closed on irregular days (Tabelog; reviews dated March 2025 and July 2026 give 12:00–23:30 and "Closed: Irregular holidays"). Appetizer charge ¥350 per person (Tabelog; a June 2026 diner\'s appetizer was katsuo tataki at ¥350); one drink per person is the rule (September 2026 review). Reservations taken; book ahead, it was nearly full on a weekday (September 2026 review); the all-you-can-eat sushi course is limited to three groups a day, by phone only (Tabelog). Cards, QUICPay, PayPay and Alipay accepted. 20 seats, counter and tables; non-smoking, with a smoking spot outside. English menu and English-speaking staff (Tabelog). Opened 5 September 2022 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sennichimae 1-5-16, Nanchi Building 1F — about 5 min from Namba and Nippombashi stations; from Namba Walk exit 26, turn right after the shopping arcade (May 2024 review)',
    cuisine: 'Casual sushi-and-tempura izakaya, fish bought at the market every morning, red-vinegar sushi rice · nigiri by the piece ¥150–480 (Tabelog menu, October 2026) · signature seafood overflow sushi heaped with ikura ¥2,180 · assorted sashimi ¥1,180 per serving, from two · nigiri sets of 5, 7 or 10 pieces ¥990–2,480 · rolls (toro-taku, eel and cucumber) · tempura omakase of 5 or 7 ¥930–1,350, single pieces from ¥130 · rare salmon tempura with ikura tartare ¥1,480 · Akira\'s seafood yukhoe ¥1,280 · raw shrimp mayo yukhoe · dashimaki with shirasu · potato salad with soft egg and ikura · rice bowls · sea-bream broth white ramen ¥980 · courses ¥4,000 (11 dishes) and ¥5,000 (13 dishes), all-you-can-drink +¥1,000 · 60-minute all-you-can-eat sushi course ¥4,000 (March 2025), with drinks ¥5,000 (June 2026) · local sake and fruit sours',
    website: null, gmaps: gm('寿司 天ぷら 明 難波 心斎橋店'), menu_url: MENU,
    notes: '[Izakaya · Sennichimae, red-vinegar sushi and tempura from noon] A bright, casual sushi-and-tempura tavern a few minutes from Namba, open from noon, with fish bought at the market each morning. The sushi rice is seasoned with red vinegar and you can order a single piece (from ¥150 on the October 2026 menu). Two dishes are on almost every table: the "seafood overflow sushi", chunks of fish piled on a roll and buried in ikura (in May 2024 served to the beat of a drum), and rare salmon tempura with ikura tartare. The tempura is light and thin-battered, there are creative plates like a seafood yukhoe you tip out of its bowl, and a sea-bream broth ramen to finish. A 60-minute all-you-can-eat sushi course is limited to three groups a day. It is lively, young and full of overseas visitors, and the owner was described as young and friendly in 2025–2026. One October 2026 diner\'s reservation was not on file, and found the hamachi less than fresh.',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Opened 5 September 2022 (Tabelog). A January 2023 diner wrote that "the experienced chef, who has worked at renowned restaurants, skillfully manages this establishment"; a March 2025 diner, that "a friendly young man who fits perfectly with the welcoming atmosphere runs the place"; a July 2026 diner, that "the charming and friendly owner runs the place with a refreshing demeanor". Tabelog mentions sake chosen by the manager. Reviews call it the Namba Shinsaibashi branch, but no other branch was found.', philosophy: 'Fresh fish from the market, sushi on a house blend of red vinegar from ¥110 a piece, and freshly fried tempura at casual prices (Tabelog shop description).', specialty: 'Seafood overflow sushi with ikura; rare salmon tempura with ikura tartare; red-vinegar nigiri by the piece.',
      anecdotes: [
        { text: '"An entertaining dish where heaps of ikura (salmon roe) are generously piled on while the din-din drum plays!" — May 2024, seafood overflow sushi ¥1,958.', source: R + 'B485275267/' },
        { text: '"The shrimp mayo served raw is a dish you don\'t hear about often, but the heads were crispy fried while the shrimp meat was fresh and raw." — September 2026.', source: R + 'B535496620/' },
      ],
      japanese_sources_summary: '食べログ: 寿司 天ぷら 明 難波 心斎橋店 (寿司×天ぷら 明)、居酒屋・寿司・天ぷら、大阪市中央区千日前1-5-16 南地ビル 1F、各線難波駅・日本橋駅から徒歩5分、12:00〜16:00 (L.O. 料理15:00、ドリンク15:30)、17:00〜23:30 (L.O. 料理22:30、ドリンク23:00)、不定休、予約可、お通し代おひとり様350円、カード・QUICPay・PayPay・Alipay可、20席、禁煙 (店の前に喫煙所)、英語メニュー・英語を話すスタッフ、オープン日2022年9月5日。市場直送の鮮魚、自家製ブレンドの赤酢のシャリで1貫から、名物は海鮮こぼれ寿司のいくらぶっかけとサーモンのレア天のいくらタルタル、寿司食べ放題のコースは1日3組限定で電話予約のみ。食べログのメニュー (2026年10月4日更新): 海鮮こぼれ寿司2180円、お造り盛り合わせ1人前1180円 (2人前から)、にぎり1貫150〜480円、天ぷらおまかせ5種930円・7種1350円、サーモンのレア天1480円、名物。明の海鮮ユッケ1280円、自家製の鯛だしの白湯ラーメン980円、コース4000円 (11品) と5000円 (13品)、飲み放題は+1000円。口コミ (2023年1月〜2026年10月): 毎朝市場で仕入れる魚、赤酢のシャリ、海鮮こぼれ寿司 (2024年5月は1958円)、60分の寿司食べ放題4000円 (2025年3月)、飲み放題つき5000円 (2026年6月)、若い客と外国からの客が多い、平日でも満席に近い、名店で経験を積んだ料理人 (2023年1月)、気さくな若い店主 (2025年3月、2026年7月)、予約が通っていなかった、はまちの鮮度が気になったという声も (2026年10月)。',
      confidence: 'medium', sources: [TB, MENU, R + 'B485275267/', R + 'B485569132/', R + 'B527744345/', R + 'B529624233/', R + 'B534756224/', R + 'B535204918/', R + 'B535294586/', R + 'B535496620/', R + 'B535549925/', R + 'B537500823/', R + 'B538012699/'] },
    cultural_comfort: { level: 'english', note: 'English menu and English-speaking staff (Tabelog); many overseas visitors (2026 reviews). ¥350 appetizer charge and one drink each.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区千日前1-5-16 南地ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (corporate member); menu updated 2026-10-04; reviews dated through October 2026. The website on the listing (sushi-tempura-akira.com) did not resolve on 2026-10-30.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区千日前一丁目5番16号 (go) 5m; nearest other record osaka_sushi_ichiei_sennichimae (address_ja "大阪府大阪市中央区千日前1-6-10 千寿ビル B1F") is 17 m away at a different address; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU, R + 'B485275267/', R + 'B485569132/', R + 'B535549925/'],
    price_note: 'Prices from the Tabelog menu, last updated 4 October 2026; reviews from May–September 2026 paid less (overflow sushi ¥1,980, rare salmon tempura ¥1,280).', last_checked: TODAY, items: [
      it('海鮮こぼれ寿司', '', 'Seafood overflow sushi with ikura', '¥2,180', 'Signature', 'no', 'no', 'Tabelog menu, October 2026; ¥1,980 in September 2026.', 'kobore'),
      it('', '', 'Rare salmon tempura with ikura tartare', '¥1,480', 'Tempura', 'no', 'no', 'Tabelog menu, October 2026; ¥1,280 in July and September 2026.', 'salmon_tempura'),
      it('', '', 'Assorted sashimi (per serving, from two)', '¥1,180', 'Signature', 'ask', 'no', 'Tabelog menu, October 2026.', 'sashimi'),
      it('', '', 'Premium assorted nigiri (7 pieces)', '¥1,690', 'Sushi', 'no', 'no', 'Tabelog menu, October 2026.', 'nigiri7'),
      it('', '', 'Tempura omakase (5 pieces)', '¥930', 'Tempura', 'no', 'no', 'Tabelog menu, October 2026; same price in July 2025 and June 2026.', 'tempura5'),
      it('名物。明の海鮮ユッケ', '', 'Akira\'s seafood yukhoe', '¥1,280', 'Creative dishes', 'no', 'no', 'Tabelog menu, October 2026.', 'yukhoe'),
      it('', '', 'Sea-bream broth white ramen', '¥980', 'To finish', 'no', 'no', 'Tabelog menu, October 2026.', 'tairamen'),
      it('', '', '60-minute all-you-can-eat sushi course (three groups a day, phone booking)', '¥4,000', 'Courses', 'no', 'no', 'March 2025; ¥5,000 with all-you-can-drink in June 2026.', 'tabehodai'),
    ] }, {
    cuisine: '寿司と天ぷらの気軽な居酒屋、魚は毎朝市場で仕入れ、赤酢のシャリ・にぎりは1貫150〜480円 (食べログのメニュー、2026年10月)・名物の海鮮こぼれ寿司、いくらたっぷり 2180円・お造り盛り合わせ 1人前1180円 (2人前から)・にぎりの盛り合わせ5貫・7貫・10貫 990〜2480円・巻物 (とろたく、うなきゅう)・天ぷらおまかせ5種・7種 930〜1350円、1品130円から・サーモンのレア天、いくらタルタル 1480円・明の海鮮ユッケ 1280円・生えびマヨユッケ・しらすのだし巻き・半熟卵といくらのポテトサラダ・丼・鯛だしの白湯ラーメン 980円・コース 4000円 (11品) と5000円 (13品)、飲み放題は+1000円・60分の寿司食べ放題のコース 4000円 (2025年3月)、飲み放題つき 5000円 (2026年6月)・地酒とフルーツサワー',
    neighborhood: '千日前1-5-16 南地ビル 1F。難波駅・日本橋駅から徒歩5分ほど。なんばウォークの26番出口から商店街を抜けて右 (2024年5月の口コミ)',
    gf_detail: 'グルテンフリーではありません。メニューの半分は天ぷらと揚げ物 (小麦の衣)、寿司はしょうゆで食べ、締めにラーメンも。お造りはありますが、グルテン情報はありません。',
    vegan_detail: 'ヴィーガンではありません。魚介の居酒屋。だし巻きは卵を鶏のだしに浸したもの (2025年3月)、ラーメンは鯛のだし、天ぷらは自家製のつゆで食べますが中身はわかりません。',
    notes: '[居酒屋・千日前、昼から赤酢の寿司と天ぷら] 難波から数分、昼から開いている明るく気軽な寿司と天ぷらの居酒屋。魚は毎朝市場で仕入れる。シャリは赤酢で、寿司は1貫から頼める (2026年10月のメニューで150円から)。ほとんどのテーブルにのるのが2品: 巻物に魚を盛ってたっぷりのいくらをかける「海鮮こぼれ寿司」(2024年には太鼓の音つき) と、サーモンのレア天のいくらタルタル。天ぷらは衣が薄く軽い。器からひっくり返して食べる海鮮ユッケなど創作の皿もあり、締めは鯛だしのラーメン。60分の寿司食べ放題のコースは1日3組まで。にぎやかで若い客が多く、外国からの客もたくさん。2025〜2026年の口コミでは若く気さくな店主。2026年10月には予約が通っていなかった、はまちの鮮度が気になったという人も。',
  });
}

// ================================================================ Sakurai (Italian, Soemoncho)
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27089861/'; const R = TB + 'dtlrvwlst/';
  const MENU = TB + 'dtlmenu/';
  const H = day(['18:00', '24:00']);
  put({
    id: 'osaka_italian_sakurai_soemoncho', name: 'Sakurai (サクライ)', category: 'MOM_AND_POP',
    lat: 34.66928, lng: 135.504798, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; fresh pasta is the heart of the menu, with garlic toast, gratins and a herb-crumb fish, though several pastas can be had as risotto (squid ink, gorgonzola, porcini) and there are grilled meats and carpaccio. Ask when booking.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: prosciutto, foie gras, crab, fish, lamb, beef and cheese run through the menu.',
    hours_raw: 'Mon–Sat 18:00–24:00; closed Sunday, and occasionally on other days, so book first (Tabelog). Reservation only; parties of five or more take a course (Tabelog). Seat charge ¥550 per person, private rooms another ¥550 per person; one drink each, or ¥770 (Tabelog). Same-day cancellations are charged (Tabelog). Smoking allowed, so under-20s are not admitted; non-smokers are pointed to the private rooms (Tabelog). 18 seats: 6 at the counter and 2 private rooms (Tabelog). Cards accepted; no e-money or QR (Tabelog). BYO and sommelier listed (Tabelog). Opened 17 December 2015 (Tabelog); closed for a time during COVID-19 and reopened (December 2021 review).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Soemoncho 3-7, Bravi Soemoncho 5F-E — about 3 min from Nippombashi Station, 5 min from Namba exit 14; inside a mixed-use building on the busy Soemoncho street',
    cuisine: 'Italian and wine, à la carte or a seasonal course · assorted appetizer plate (crab-miso brûlée, pâté de campagne, herb-stewed tripe and more) ¥2,400 (September 2024) · "Grandma\'s" bagna cauda · onion soup with Awaji onions · fresh pasta: Bolognese ¥2,200 (September 2024), Sorrento-style scallop and lemon cream, shirasu and mint lemon butter, squid ink, truffle cream, duck and leek lemon cream peperoncino · risotto (squid ink, gorgonzola, porcini) · fish of the day four ways · roast lamb, beef fillet, "emperor-style" beef fillet ¥4,300 (September 2024), beef tartare · cheese plate · panna cotta, tiramisu, zabaglione · 20+ wines by the glass, ¥950 a glass (October 2024), 300+ bottles; grappa',
    website: null, gmaps: gm('Sakurai 宗右衛門町 イタリアン'), menu_url: MENU,
    notes: '[Italian · Soemoncho, a chef-sommelier\'s hideaway above the neon] An Italian restaurant on the fifth floor of a mixed-use building on busy Soemoncho street; one diner warned that the walk in makes first-timers wonder whether a restaurant can really be up there. Inside it is calm, with jazz, a six-seat counter and private rooms. It opened in December 2015; Chef Sakurai holds a sommelier certification, per a regular\'s 2020 review, and a 2024 review says the chef trained in Italy. The wine list is the other half of the draw: twenty-odd by the glass and over 300 bottles, with pairings matched to your taste, and a regular called the grappa selection perhaps the best in Osaka. Start with the assorted appetizer plate, where the crab-miso brûlée is the dish people remember, then fresh pasta, ordered to share. Several diners from 2021 to 2025 call it the best Italian in Minami, or in Osaka; one April 2025 diner found most dishes average. Smoking is allowed, so no under-20s.',
    chef_bio: { chef_name: 'Sakurai', roles: ['Chef (Tabelog: "authentic Italian cuisine crafted by Chef Sakurai")', 'Sommelier'], origin: null, background: 'Per the Tabelog shop description, Chef Sakurai has honed the craft over many years and cooks authentic Italian food "perfected by on-site exploration". A February 2024 diner wrote that the restaurant "is run by a chef who trained in authentic Italy". A long-time regular (July 2020 visit) wrote that "the owner-chef has a sommelier certification for wine". Opened 17 December 2015 (Tabelog); a regular who has come since the opening marked its 7th anniversary in December 2022. In October 2024 a diner saw the chef cooking and serving alone at 6 pm on a weekday; 2025–2026 reviews also mention staff.', philosophy: 'To deliver the true flavours of Italy: fresh pasta and appetizer plates, à la carte or as a course, paired with wine (Tabelog shop description).', specialty: 'Assorted appetizer plate with crab-miso brûlée; fresh pasta; wine pairings by the glass.',
      anecdotes: [
        { text: '"It seemed like the chef was working alone; there were a couple of other groups besides us, but I didn\'t see any assistance throughout our time there." — October 2024.', source: R + 'B492965529/' },
        { text: '"Located on the 5th floor of a mixed-use building, Sakurai has stayed there while many other suspicious places have turned over frequently on the same floor." — December 2022.', source: R + 'B457883128/' },
      ],
      japanese_sources_summary: '食べログ: Sakurai (サクライ)、イタリアン・ワインバー・ダイニングバー、大阪市中央区宗右衛門町3-7 Bravi宗右衛門町 5F-E、日本橋駅から徒歩3分、なんば駅14番出口から徒歩5分ほど、月〜土18:00〜24:00、日曜休み (ほかにも休むことがある)、完全予約制、5名以上はコースのみ、全席チャージ550円、個室は別途1人550円、ワンドリンク制 (注文がなければ1人770円)、当日キャンセルは料金あり、カード可、電子マネー・QR不可、18席 (カウンター6席、個室2室)、喫煙可のため20歳未満は入店不可、オープン日2015年12月17日、ソムリエあり、持ち込み可。店の紹介: 長年腕を磨いたシェフ Sakurai の本場のイタリア料理、生パスタと前菜、アラカルトとコース、グラスワイン20種以上、ボトル300種以上、カウンターと個室、ジャズ。食べログのメニュー (2025年8月4日更新): 前菜盛り合わせ、蟹味噌のブリュレ、おばあちゃんのバーニャカウダ、淡路島の玉ねぎのオニオンスープ、ボロネーゼ、イカ墨のパスタかリゾット、しらすとミントのレモンバターパスタ、ソレント風ホタテとレモンのクリームパスタ、トリュフのクリームパスタ、鮮魚、仔羊のロースト、皇帝風牛フィレ、チーズ、パンナコッタ、ティラミス。口コミ (2016年〜2026年10月): 前菜盛り合わせ2400円、ボロネーゼ2200円、皇帝風牛フィレ4300円 (2024年9月)、グラスワイン950円 (2024年10月)、オーナーシェフはソムリエの資格 (2020年)、本場イタリアで修業したシェフ (2024年2月)、平日にシェフが1人で切り盛り (2024年10月)、コロナで休業のあと再開 (2021年12月)、グラッパの品ぞろえ、ミナミでいちばんのイタリアンという声、2025年4月には料理は普通という声も。',
      confidence: 'medium', sources: [TB, MENU, R + 'B224307328/', R + 'B453685059/', R + 'B457883128/', R + 'B492965529/', R + 'B494617375/', R + 'B506377802/', R + 'B510461481/', R + 'B522873137/', R + 'B523704678/', R + 'B528126407/', R + 'B537370349/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Reservation only; seat charge ¥550 and one drink each; smoking allowed, private rooms for non-smokers (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区宗右衛門町3-7 Bravi宗右衛門町 5F-E',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (corporate member); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区宗右衛門町3番7号 (go) 10m; nearest other record osaka_ramen_kawaen_soemoncho (address_ja "大阪府大阪市中央区宗右衛門町3-5") is 12 m away at a different lot; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU, R + 'B494617375/', R + 'B492965529/'],
    price_note: 'Dish list from the Tabelog menu (updated 4 August 2025, which gives no prices); prices from reviews dated September and October 2024.', last_checked: TODAY, items: [
      it('', '', 'Assorted appetizer plate (one person)', '¥2,400', 'Antipasti', 'ask', 'no', 'September 2024; crab-miso brûlée, pâté de campagne, tripe and more (October 2024).', 'antipasti'),
      it('', '', 'Bolognese', '¥2,200', 'Pasta', 'no', 'no', 'September 2024.', 'bolognese'),
      it('', '', 'Sorrento-style scallop and lemon cream pasta', '', 'Pasta', 'no', 'no', 'October 2024.', 'scallop_pasta'),
      it('', '', 'Squid ink pasta or risotto', '', 'Pasta', 'ask', 'no', 'Tabelog menu; August 2025 review.', 'squidink'),
      it('', '', 'Emperor-style beef fillet', '¥4,300', 'Secondi', 'ask', 'no', 'September 2024.', 'beef_emperor'),
      it('', '', 'Wine by the glass', '¥950', 'Drinks', '', '', 'October 2024; about 10 reds and 10 whites.', 'glasswine'),
    ] }, {
    cuisine: 'イタリア料理とワイン、アラカルトか季節のコース・前菜盛り合わせ (蟹味噌のブリュレ、パテ・ド・カンパーニュ、トリッパの煮込みなど) 2400円 (2024年9月)・おばあちゃんのバーニャカウダ・淡路島の玉ねぎのオニオンスープ・生パスタ: ボロネーゼ 2200円 (2024年9月)、ソレント風ホタテとレモンのクリーム、しらすとミントのレモンバター、イカ墨、トリュフのクリーム、鴨とねぎのレモンクリームのペペロンチーノ・リゾット (イカ墨、ゴルゴンゾーラ、ポルチーニ)・鮮魚を4通りで・仔羊のロースト、牛フィレ、皇帝風牛フィレ 4300円 (2024年9月)、牛のタルタル・チーズの盛り合わせ・パンナコッタ、ティラミス、ザバイオーネ・グラスワイン20種以上、1杯950円 (2024年10月)、ボトル300種以上、グラッパ',
    neighborhood: '宗右衛門町3-7 Bravi宗右衛門町 5F-E。日本橋駅から徒歩3分ほど、なんば駅14番出口から5分。にぎやかな宗右衛門町通りの雑居ビルの中',
    gf_detail: '要確認。グルテン情報はありません。中心は生パスタで、ガーリックトースト、グラタン、香草パン粉焼きの魚も。ただしイカ墨、ゴルゴンゾーラ、ポルチーニはリゾットにもでき、肉のグリルやカルパッチョもあります。予約のときに確認を。',
    vegan_detail: 'ヴィーガンではありません。生ハム、フォアグラ、蟹、魚、仔羊、牛、チーズがメニューに並びます。',
    notes: '[イタリアン・宗右衛門町、ネオン街の上のシェフ兼ソムリエの隠れ家] にぎやかな宗右衛門町通りの雑居ビル5階にあるイタリアン。本当にここに店があるのかと初めての人は不安になる、という口コミも。中は落ち着いていてジャズが流れ、カウンター6席と個室。2015年12月に開店。シェフの Sakurai はソムリエの資格を持つ (常連の2020年の口コミ)。2024年の口コミには本場イタリアで修業したシェフとも。もう一つの目当てはワインで、グラスで20種あまり、ボトル300種以上、好みに合わせてペアリングしてくれる。グラッパの品ぞろえは大阪いちばんかもという常連も。まずは前菜盛り合わせ (みんなが覚えているのは蟹味噌のブリュレ)、次に生パスタを取り分けて。2021〜2025年の口コミにはミナミ (あるいは大阪) いちばんのイタリアンという声がいくつもあり、2025年4月には料理はほとんど普通という人も。喫煙可のため20歳未満は入れない。',
  });
}

save();
