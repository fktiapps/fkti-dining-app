// Tokyo gaps sweep (1-mile circles between the existing Tokyo clusters), circle roppongi — lane osw9, batch 4.
//   + 北新地焼肉さつま 六本木店 Kitashinchi Yakiniku Satsuma (Osaka yakiniku open until 8 am, opened February 2023)
//   + TORIBAKA PREMIUM 六本木店 (chicken-broth oden with two broths, Miyazaki chicken; reopened June 2026)
//   + 月夜に米の飯 武井 Tsukiyo ni Kome no Meshi Takei (seasonal Japanese courses ending in donabe rice; hidden basement)
//   + 居酒処田村 Izakadokoro Tamura (Showa-style counter izakaya: charcoal skewers and oden into the small hours)
//   Chain check. Satsuma: the Ginza site (satsumaginza.com) presents 北新地焼肉さつま 銀座店 as the Kitashinchi shop's first
//   Tokyo branch ("大阪北新地より創業40年"); with Roppongi that is three shops, none in data. A November 2025 reviewer says
//   the shop shares an owner with "Shiraiishi Ramen"; unverified, and the Satsuma brand itself is not in data. TORIBAKA:
//   a search also showed a "621雞高湯關東煮 Toribaka" listing elsewhere (not opened); not in data. Takei and Tamura: one
//   listing each. None is in data/tokyo.json by name, Tabelog id or address. Satsuma (1F) and TORIBAKA (B1F) share
//   六本木5-1-10 カドガンビル (Tabelog points ~1 m apart), so TORIBAKA's pin is offset ~8 m south. Takei (3-9-3) is 11 m
//   from Roppongi Kinme Sushi (tokyo_roppongi_kinme_sushi, address_ja "東京都港区六本木3-9-4 六本木ロイヤルビル B1F"), a
//   different building. Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, save } = openCitySweep('tokyo-gaps', TODAY, 'osw9-4');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 北新地焼肉さつま 六本木店
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13281566/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.satsumaginza.com/';
  const H = day(['18:00', '08:00']);
  put({
    id: 'tokyo_kitashinchi_yakiniku_satsuma_roppongi', name: '北新地焼肉さつま 六本木店 (Kitashinchi Yakiniku Satsuma Roppongi)', category: 'OMNI',
    lat: 35.66232, lng: 139.732914, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Nothing is called gluten-free. Yakiniku comes with sauces whose ingredients are not given, and favourites include yukhoe, kimchi and cold noodles; salt-grilled tongue is the plainest choice.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a yakiniku and offal house; grilled vegetables and kimchi are the only plant dishes named.',
    hours_raw: 'Evenings 18:00 until 08:00 the next morning (last order 07:30) (Tabelog; the shop text says "Open until 8 AM" and "Open on Sundays and holidays!", and it opens over New Year). Tabelog\'s day-by-day table lists these hours only for days around holidays and marks every weekday closed, which contradicts the shop\'s own text and 2026 reviews of early-morning visits; check before going. A 10% late-night charge applies after 22:00. Booking online is easy, even same day (May 2026 review). 15 seats: 10 at the counter, tables for up to 7. E-cigarettes only. Cards, IC/e-money and QR (PayPay, au PAY, Alipay, WeChat Pay). English menu and English-speaking staff; Tabelog ticks halal options. Opened 23 February 2023 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Roppongi 5-1-10, カドガンビル 1F (TORIBAKA PREMIUM is in the basement) — 5 min from Roppongi Stn (Hibiya line)',
    cuisine: 'Osaka-style yakiniku from a Kitashinchi shop of over 40 years (Tabelog shop text; official Ginza site) · courses (Tabelog, tax included): ¥7,000 with strip loin, ribeye and outside skirt, rice, vegetables and kimchi; ¥8,000 with fillet, special kalbi and outside skirt (the most popular) · Roppongi-only Kuroge wagyu tongue ("Kurotan") and tsurami (cheek) (shop text) · à la carte favourites in 2025–2026: premium salt tongue, outside skirt (one diner ordered it five times), liver, special tenderloin, special kalbi, tetchan, assorted horumon, omasum sashimi, yukhoe, mountain-jellyfish kimchi, egg soup, cold noodles · unlimited umeboshi sour; makgeolli',
    website: SITE, gmaps: gm('北新地焼肉さつま 六本木店'), menu_url: TB + 'dtlmenu/',
    notes: "[Yakiniku · Roppongi, Osaka yakiniku until 8 am] The Roppongi branch of さつま, a yakiniku shop the Tabelog text says has been loved in Osaka's Kitashinchi for over 40 years, with a Ginza branch too. Fifteen seats, mostly a counter, and the hours are the point: it runs from 6 pm to 8 am, so it fills up after the bars close — a seven-time regular finds it busier in the early morning than in the evening, and an October 2026 diner came at 5:30 am and ordered the outside skirt five times. Regulars swear by the salt tongue, outside skirt, liver and yukhoe, with mountain-jellyfish kimchi on the side; the Roppongi shop also has Kuroge wagyu tongue and cheek you won't find at the other branches. Courses from ¥7,000 suit first-timers. A 10% late-night charge applies after 10 pm; e-cigarettes are allowed. A May 2026 diner reckoned about 70% of the customers were international visitors; English menu and English-speaking staff.",
    chef_bio: { chef_name: null, roles: [], origin: 'Branch of さつま, Kitashinchi, Osaka (over 40 years, per the shop text and the official Ginza site)',
      background: 'Opened 23 February 2023 (Tabelog). The official site for 北新地焼肉さつま 銀座店 describes the Ginza shop as the Kitashinchi shop\'s first Tokyo branch ("大阪北新地より創業40年"). A November 2025 reviewer writes that the shop "is run by the same owner as Shiraiishi Ramen"; no other source read confirms it.',
      philosophy: 'High-quality meat at reasonable prices; "not knowing Satsuma in Kitashinchi means you\'re a novice" (Tabelog shop text).', specialty: 'Salt tongue, outside skirt and yukhoe until 8 am.',
      anecdotes: [
        { text: '"…it tends to be busier in the morning than in the evening!" (because many come at the end of a night of drinking, the reviewer explains) — August 2024, third visit (the same reviewer had been seven times by October 2026).', source: R + 'B472756530/' },
        { text: '"I went around 5:30 in the morning. The outside skirt here is incredibly delicious—truly the best! I ordered the outside skirt about five times." — October 2026.', source: R + 'B538297830/' },
        { text: '"I noticed that about 70% of the customers were international visitors." — May 2026.', source: R + 'B530224205/' },
      ],
      japanese_sources_summary: '公式サイト (銀座店): 北新地の人気焼肉店「さつま」が東京・銀座に初出店、大阪北新地より創業40年。食べログ (店舗会員): 北新地焼肉さつま 六本木店、港区六本木5-1-10 カドガンビル1F、日比谷線六本木駅から徒歩5分、18:00〜翌8:00 (L.O.7:30)、22時以降は深夜料金10%、15席 (カウンター10席)、電子たばこのみ可、カード・電子マネー・QR可、英語メニューと英語を話すスタッフ、2023年2月23日オープン。コース7,000円・8,000円、六本木店限定の黒毛和牛のタンと Tsurami。口コミ(2024年8月〜2026年10月): 朝方のほうが混む、上タン塩、ハラミ、レバー、ユッケ、山くらげのキムチ、センマイ刺し、梅干しサワー飲み放題、客の約7割が海外から。',
      confidence: 'medium', sources: [TB, SITE, R + 'B472756530/', R + 'B513934972/', R + 'B517299282/', R + 'B521721630/', R + 'B526500193/', R + 'B528541966/', R + 'B530224205/', R + 'B531090384/', R + 'B536227116/', R + 'B538297830/'] },
    cultural_comfort: { level: 'english', note: 'English menu and English-speaking staff (Tabelog); many international guests (May 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木5-1-10 カドガンビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.662320, 139.732914); same building as TORIBAKA PREMIUM (tokyo_toribaka_premium_roppongi, B1F), whose pin is offset 8 m south; GSI 東京都港区六本木五丁目1番 (lot) 37m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course prices from Tabelog (tax included; read November 2026). 10% late-night charge after 22:00.', last_checked: TODAY, items: [
      it('', '', 'Course: strip loin, ribeye and outside skirt with rice, vegetables and kimchi', '¥7,000', 'Course', 'ask', 'no', 'Tabelog.', 'course_7000'),
      it('', '', 'Course: fillet, special kalbi and outside skirt with rice, vegetables and kimchi', '¥8,000', 'Course', 'ask', 'no', 'Tabelog "most popular".', 'course_8000'),
    ] }, {
    cuisine: '北新地で40年以上続く店の大阪の焼肉 (食べログの店の紹介、銀座店の公式サイト)・コース (食べログ、税込み): ロース、リブロース、ハラミにご飯、野菜、キムチの7,000円、ヒレ、特上カルビ、ハラミの8,000円 (一番人気)・六本木店限定の黒毛和牛のタン (Kurotan) と Tsurami (店の紹介)・2025〜2026年の人気: 上タン塩、ハラミ (5回頼んだ客も)、レバー、特選ヒレ、特上カルビ、Tetchan、ホルモン盛り合わせ、センマイ刺し、ユッケ、山くらげのキムチ、玉子スープ、冷麺・梅干しサワーの飲み放題、マッコリ',
    neighborhood: '六本木5-1-10 カドガンビル1F (地下は TORIBAKA PREMIUM)。日比谷線六本木駅から徒歩5分',
    gf_detail: '要確認。グルテンフリーの説明はない。焼肉のたれの原材料は書かれておらず、人気はユッケ、キムチ、冷麺。塩タンが一番シンプル。',
    vegan_detail: 'ヴィーガン不可。焼肉とホルモンの店で、植物性の料理として名前が出ているのは焼き野菜とキムチだけ。',
    notes: '[焼肉・六本木、朝8時まで食べられる大阪の焼肉] 食べログの紹介によれば大阪・北新地で40年以上愛される焼肉店「さつま」の六本木店で、銀座にも支店がある。カウンター中心の15席。売りは営業時間で、夕方6時から朝8時まで開いているため、バーが閉まったあとに混む。7回通う常連は夜より早朝のほうが混むと書き、2026年10月の客は朝5時半に来てハラミを5回頼んだ。常連の定番は塩タン、ハラミ、レバー、ユッケで、山くらげのキムチを添えて。六本木店には他の店にない黒毛和牛のタンと Tsuramiもある。初めてなら7,000円からのコースが手軽。22時以降は深夜料金10%、電子たばこは可。2026年5月の客は客の約7割が海外からだったと感じた。英語のメニューとスタッフもある。',
  });
}

// ================================================================ TORIBAKA PREMIUM 六本木店
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13288752/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '23:00']);
  put({
    id: 'tokyo_toribaka_premium_roppongi', name: 'TORIBAKA PREMIUM 六本木店', category: 'OMNI',
    lat: 35.662253, lng: 139.73293, cuisine_type: 'oden',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Nothing is called gluten-free. One oden broth is finished with light (usukuchi) soy sauce, the menu has chicken tempura, and oden items have included French bread (November 2025); the chicken-paitan broth\'s seasoning is not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: both oden broths are chicken-based or dashi-based, and the rest of the menu is chicken.',
    hours_raw: 'Mon–Sat 17:30–23:00 (last order 22:30); closed Sundays, public holidays and over New Year (Tabelog). Cover charge ¥300. Reopened in June 2026 as TORIBAKA PREMIUM (Tabelog shop text; a July 2026 diner calls it revamped from the earlier Toribaka); the listing\'s opening date is 17 August 2023. 16 seats: 8 at the counter and two tables of 4. Heated tobacco only, in a smoking area. Cards, IC/e-money and QR (PayPay, Rakuten Pay, au PAY, Alipay). English menu. Whole-shop hire for up to 14, from about ¥100,000 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Roppongi 5-1-10, カドガンビル B1F, on Imoarai-zaka (Kitashinchi Yakiniku Satsuma is upstairs) — 3 min from Roppongi Stn exit 3',
    cuisine: 'Chicken-broth oden with a choice of two broths — a rich chicken paitan or a light dashi finished with a house usukuchi soy sauce — chosen per item (Tabelog shop text; 2026 reviews) · oden in 2025–2026: daikon, seasoned egg, thick fried tofu, konnyaku, potato, and paitan oden of tomato, avocado and French bread · Miyazaki young chicken: chicken tempura (toriten), grilled liver, wings and other grilled dishes · drinks: original sours such as "Mokatsu Sour" and "Sumi Sour", sake mixed with oden broth, seaweed "enzyme" highballs and additive-free drinks supervised by the beauty company Esthe Pro Labo (2026 reviews)',
    website: null, gmaps: gm('TORIBAKA PREMIUM 六本木'), menu_url: TB + 'dtlmenu/',
    notes: "[Oden · Roppongi, chicken-broth oden in a basement] Down the stairs of the building that houses Kitashinchi Yakiniku Satsuma, on Imoarai-zaka three minutes from the station: a 16-seat oden bar that reopened in June 2026 as TORIBAKA PREMIUM. Each piece of oden comes in your choice of two broths, a rich chicken paitan or a light dashi with a house usukuchi soy sauce, and the chicken dishes — toriten, grilled liver, wings — use young Miyazaki chicken. Reviewers in 2026 found it good value for Roppongi, with a cosy counter and kind touches (staff re-cut the daikon into four when two more friends arrived); two say it is run by the beauty company Esthe Pro Labo, which supervises its additive-free drinks, and one July visitor was entertained by a manager who had been a magician for 20 years. A February 2026 diner, before the reopening, found the broth too salty and the staff indifferent. Heated tobacco only; ¥300 cover.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Reopened in June 2026 as TORIBAKA PREMIUM (Tabelog shop text). Reviews in June and September 2026 say it is a sister restaurant of, or operated by, the inner-beauty company Esthe Pro Labo (Pro Lab Holdings), and a July 2026 review says the additive-free drinks are supervised by Esthe Pro Labo. A July 2026 diner writes that the manager had been a magician for 20 years and performed tricks at the table.',
      philosophy: 'Choose your broth by ingredient, mood or drink (Tabelog shop text).', specialty: 'Two-broth oden; Miyazaki chicken toriten.',
      anecdotes: [
        { text: '"The manager, a magician for 20 years, amazed us with incredible magic tricks that left us in awe!" — July 2026.', source: R + 'B529843743/' },
        { text: '"The daikon we ordered when it was just the two of us was cut into two pieces, but when we ordered it again after the others joined, it was cut into four pieces!" — August 2026.', source: R + 'B534032878/' },
        { text: '"The chicken broth with tomato, avocado, and French bread was particularly outstanding!" — November 2025.', source: R + 'B517815690/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): TORIBAKA PREMIUM 六本木店、港区六本木5-1-10 カドガンビルB1F、六本木駅3番出口から徒歩3分、月〜土17:30〜23:00 (L.O.22:30)、日祝・年末年始休み、チャージ300円、16席 (カウンター8、4人テーブル2)、加熱式たばこのみの喫煙所、カード・電子マネー・QR可、英語メニュー、2026年6月リニューアル、鶏の濃厚なスープ (Toripaitan) と薄口醤油のあっさり出汁の2種のおでん、Miyazaki の若鶏の鶏の天ぷら (Toriten)や焼き物、貸切は14名まで10万円程度から。口コミ(2025年11月〜2026年9月): トマト・アボカド・フランスパンの Toripaitan のおでん、大根、味玉、厚揚げ、こんにゃく、レバー、手羽、オリジナルサワー、Esthe Pro Labo の系列という声、元マジシャンの店長、2月には塩辛く接客がそっけないとの声も。',
      confidence: 'medium', sources: [TB, R + 'B517815690/', R + 'B522381699/', R + 'B522895787/', R + 'B529843743/', R + 'B530803175/', R + 'B531152624/', R + 'B531776892/', R + 'B533317923/', R + 'B534032878/', R + 'B535775498/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu with photos (Tabelog); oden ordered by the piece.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木5-1-10 カドガンビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing announcing the June 2026 reopening; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.662316, 139.732930), ~1 m from Kitashinchi Yakiniku Satsuma (tokyo_kitashinchi_yakiniku_satsuma_roppongi, 1F of the same building), so offset ~8 m south; GSI 東京都港区六本木五丁目1番 (lot) 45m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No item prices in the sources read; ¥300 cover; Tabelog average ¥3,000–4,999 per person.', last_checked: TODAY, items: [
      it('', '', 'Oden by the piece, chicken-paitan or light dashi broth', '', 'Oden', 'ask', 'no', 'Tabelog shop text; 2026 reviews.', 'oden'),
      it('', '', 'Toriten (chicken tempura), Miyazaki young chicken', '', 'Chicken', 'no', 'no', 'Tabelog shop text; July 2026 review.', 'toriten'),
    ] }, {
    cuisine: '鶏出汁のおでん。濃厚な鶏のスープ (Toripaitan) か、自家製の薄口醤油で仕上げたあっさり出汁を、具ごとに選べる (食べログの店の紹介、2026年の口コミ)・2025〜2026年のおでん: 大根、味玉、厚揚げ、こんにゃく、じゃがいも、Toripaitan のトマト、アボカド、フランスパン・Miyazaki の若鶏の鶏の天ぷら (Toriten)、レバー焼き、手羽などの焼き物・飲み物: 「Mokatsu Sour」「Sumi Sour」などのオリジナルサワー、おでんの出汁割りの日本酒、海藻の酵素ハイ、Esthe Pro Labo 監修の無添加の飲み物 (2026年の口コミ)',
    neighborhood: '六本木5-1-10 カドガンビルB1F、Imoarai-zaka 沿い (1階は北新地焼肉さつま)。六本木駅3番出口から徒歩3分',
    gf_detail: '要確認。グルテンフリーの説明はない。おでんの出汁の一つは薄口醤油で仕上げ、メニューには鶏の天ぷら (Toriten) もあり、おでんにフランスパンが入ることも (2025年11月)。Toripaitan の味付けの説明はない。',
    vegan_detail: 'ヴィーガン不可。おでんの出汁は鶏か出汁で、ほかの料理も鶏が中心。',
    notes: '[おでん・六本木、地下で食べる鶏出汁のおでん] 北新地焼肉さつまの入るビルの地下、駅から3分の Imoarai-zaka 沿いにある16席のおでんの店で、2026年6月に TORIBAKA PREMIUM としてリニューアル。おでんは一つずつ、濃厚な鶏のスープ (Toripaitan) か自家製の薄口醤油のあっさり出汁かを選べ、鶏の天ぷら (Toriten)、レバー、手羽などの鶏料理には Miyazaki の若鶏を使う。2026年の口コミでは六本木にしてはお得で、カウンターが居心地よく、2人で頼んだ大根を4人になったら4つに切り直してくれた気配りも。2件の口コミはEsthe Pro Labo の系列で、無添加の飲み物は同社の監修だと書き、7月の客は20年マジシャンだった店長の手品に驚いた。リニューアル前の2026年2月の客は出汁が塩辛く接客がそっけないと感じた。加熱式たばこのみ可、チャージ300円。',
  });
}

// ================================================================ 月夜に米の飯 武井
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13266802/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '23:00']);
  put({
    id: 'tokyo_tsukiyo_ni_kome_no_meshi_takei', name: '月夜に米の飯 武井 (Tsukiyo ni Kome no Meshi Takei)', category: 'OMNI',
    lat: 35.663755, lng: 139.734205, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking; the shop says it will try to meet requests made in advance (Tabelog). Nothing is called gluten-free. Courses have included tempura (including mozuku tempura), dashimaki tamago, simmered fish, buri shabu and chawanmushi (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seasonal courses of fish, seafood and meat (wagyu roast beef, sawara, kinki, buri shabu) with dashi-based dishes.',
    hours_raw: 'Tue–Sun 18:00–23:00 (last order 22:00); closed Mondays; closing days can change, so check before going; the phone may be hard to reach during service (Tabelog). 10% service charge. 18 seats: a counter where you can talk with the owner, and private rooms for 2, 4 or 6, with tatami and sunken seating (Tabelog). Non-smoking; a smoking spot outside. Cards (VISA, Master, JCB, AMEX); no e-money or QR. School-age children welcome. Opened 14 December 2021 (Tabelog). The entrance is an unsigned door in a basement and easy to miss; two 2026 diners first tried the building next door.',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Roppongi 3-9-3, 第2ヴィレッジビル B1F, in a lane off Roppongi-dori — 2 min from Roppongi crossing',
    cuisine: 'Seasonal Japanese courses that end with rice cooked in a donabe, from rice of several regions (Tabelog shop text) · seasonal special course, 8 dishes with donabe white rice, ¥13,200 (Tabelog, tax included); the menu changes monthly (September 2026 review) · in 2026: clam chawanmushi, hassun, sashimi, grilled sawara, buri shabu, wagyu roast beef, simmered kinki, simmered red snapper, ayu confit with meat miso, Okinawa mozuku as a vinegared dish and as tempura, kelp with roe, dashimaki tamago, soy-milk pudding · a choice of four rice varieties (April 2026); leftover rice made into onigiri to take home (February and July 2026) · sake, shochu, sours',
    website: null, gmaps: gm('月夜に米の飯 武井 六本木3-9-3'), menu_url: TB + 'dtlmenu/',
    notes: "[Japanese · Roppongi, seasonal courses and donabe rice behind an unsigned door] Down the stairs of an old building in a lane off Roppongi-dori, through a door with no sign, an 18-seat Japanese restaurant with a counter and private rooms whose courses build up to rice cooked in a clay pot. You pick from several regional rices — four varieties on one April 2026 night — and whatever you can't finish goes home as onigiri. The ¥13,200 course changes monthly: clam chawanmushi, a seasonal hassun, sashimi, fish such as kinki or sawara, buri shabu in winter, ayu confit in summer, and homey touches like dashimaki tamago and soy-milk pudding. A regular on a 28th visit in October 2026 calls it the place for Japanese food in Roppongi, and a birthday booking was met with oysters and caviar. Allow time to find it: two diners went into the building next door first.",
    chef_bio: { chef_name: null, roles: ['Owner at the counter (Tabelog shop text: "counter seats that allow for enjoyable conversations with the owner")'], origin: null,
      background: 'Opened 14 December 2021 (Tabelog). The shop text describes a master with years of experience and a homey restaurant whose concept is to bring smiles through food, with rice from various regions cooked in a donabe. The owner is not named in the sources read.',
      philosophy: '"Our concept is to bring smiles through food" (Tabelog shop text).', specialty: 'Donabe rice from several regions; monthly seasonal courses.',
      anecdotes: [
        { text: '"The confit of sweetfish was even more flavorful than the last time I had it, and the meat miso added a wonderful touch." — June 2026, 24th visit.', source: R + 'B491536022/' },
        { text: '"We also had the option to choose rice, and the carefully prepared clay pot rice arrived. Any leftovers could be taken home as onigiri." — February 2026.', source: R + 'B531095704/' },
        { text: '"When I went down to B1F, I found a door without a sign. Feeling a bit anxious, I opened it, and it turned out to be this restaurant." — July 2026.', source: R + 'B531584093/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 月夜に米の飯 武井、港区六本木3-9-3 第2ヴィレッジビルB1F、六本木の交差点から徒歩2分、火〜日18:00〜23:00 (L.O.22:00)、月曜休み、不定休あり、サービス料10%、18席、個室 (2・4・6名)、座敷、掘りごたつ、禁煙 (店の前に喫煙所)、カード可、2021年12月14日オープン。食で笑顔を、が店のコンセプト。全国各地の米を土鍋で炊く。季節の特別コース8品と土鍋の白ご飯13,200円。口コミ(2026年1月〜10月): 毎月替わる献立、蛤の茶碗蒸し、八寸、鰆、ぶりしゃぶ、和牛のローストビーフ、鮎のコンフィ、Okinawa のもずく、だし巻き玉子、豆乳プリン、米は4種から、残りはおにぎりに、看板のない扉。',
      confidence: 'medium', sources: [TB, R + 'B491536022/', R + 'B520592903/', R + 'B521785682/', R + 'B526737658/', R + 'B526930089/', R + 'B527805990/', R + 'B528943944/', R + 'B531095704/', R + 'B531584093/', R + 'B536419308/'] },
    cultural_comfort: { level: 'japanese', note: 'Set course; no English menu or English-speaking staff is listed on Tabelog.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木3-9-3 第2ヴィレッジビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.663755, 139.734205); GSI 東京都港区六本木三丁目9番 (lot) 25m; Roppongi Kinme Sushi (tokyo_roppongi_kinme_sushi, 3-9-4) is 11 m away in another building; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course price from Tabelog (tax included; read November 2026), plus 10% service.', last_checked: TODAY, items: [
      it('', '', 'Seasonal special course, 8 dishes, ending with donabe white rice', '¥13,200', 'Course', 'ask', 'no', 'Tabelog.', 'seasonal_course'),
    ] }, {
    cuisine: '季節の和食のコースを、各地の米を土鍋で炊いたご飯で締める (食べログの店の紹介)・季節の特別コース8品と土鍋の白ご飯13,200円 (食べログ、税込み)。献立は毎月替わる (2026年9月の口コミ)・2026年の料理: 蛤の茶碗蒸し、八寸、刺身、鰆の焼き物、ぶりしゃぶ、和牛のローストビーフ、Kinkiの煮付け、red snapper の煮付け、肉味噌を添えた鮎のコンフィ、Okinawa のもずくの酢の物と天ぷら、子持ち昆布、だし巻き玉子、豆乳プリン・米は4種から選べ (2026年4月)、残ったご飯はおにぎりにして持ち帰れる (2026年2月、7月)・日本酒、焼酎、サワー',
    neighborhood: '六本木3-9-3 第2ヴィレッジビルB1F、Roppongi-dori から入った路地。六本木の交差点から徒歩2分',
    gf_detail: '予約時に要確認。事前に伝えれば希望に応えるよう努めると店は書いている (食べログ)。グルテンフリーの説明はない。コースには天ぷら (もずくの天ぷらも)、だし巻き玉子、煮魚、ぶりしゃぶ、茶碗蒸しなど (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚介や肉の季節のコース (和牛のローストビーフ、鰆、Kinki、ぶりしゃぶ) で、出汁を使う料理が多い。',
    notes: '[和食・六本木、看板のない扉の奥の季節のコースと土鍋ご飯] Roppongi-dori から入った路地の古いビルの地下、看板のない扉の先にある18席の和食店で、カウンターと個室があり、コースは土鍋で炊いたご飯に向かって進む。米は各地のものから選べ (2026年4月のある夜は4種)、食べきれない分はおにぎりにして持ち帰れる。13,200円のコースは毎月替わり、蛤の茶碗蒸し、季節の八寸、刺身、Kinkiや鰆などの魚、冬のぶりしゃぶ、夏の鮎のコンフィ、だし巻き玉子や豆乳プリンなど家庭的な一品も。2026年10月に28回目の来店という常連は六本木の和食ならここと書き、誕生日の予約には牡蠣とキャビアが出た。場所は分かりにくく、隣のビルに入ってしまった客が2人いた。',
  });
}

// ================================================================ 居酒処田村
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13078473/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.roppongi-tamura.com/';
  const E = day(['18:00', '23:00']); const L = day(['18:00', '05:00']);
  put({
    id: 'tokyo_izakadokoro_tamura_roppongi', name: '居酒処田村 (Izakadokoro Tamura)', category: 'OMNI',
    lat: 35.662882, lng: 139.734272, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Nothing is called gluten-free. Yakitori, oden, chicken nanban, curry, mentaiko omelette and cabbage with a sweet meat miso are on the menu (official site; 2025–2026 reviews); the tare and miso are not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken-skewer and oden izakaya; even the cabbage comes with a meat miso (official site).',
    hours_raw: 'Tabelog: Mon–Tue 18:00–23:00 (food last order 22:00, drinks 22:15); Wed–Sat 18:00–05:00; closed Sundays. The official site gives Mon–Sat and holidays 18:00–08:00, takeaway 19:00–05:00, and Sundays for private bookings only. The two sources differ, so the hours here follow Tabelog and are marked irregular. ¥500 table charge (otoshi). About 10–11 seats at an L-shaped counter (Tabelog; reviewers count 8 to about 15). Smoking allowed. Cards and QR (PayPay, Alipay, WeChat Pay and others); the private-hire plans are cash only. English menu. Bottle keep available (October 2026). In business "about 30 years", staff told a March 2025 diner.',
    hours: { 0: E, 1: E, 2: L, 3: L, 4: L, 5: L }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Roppongi 3-13-3, 第5六本木ビレッジビル 1F, on a back street off Enma-zaka — 3 min from Roppongi Stn (Hibiya / Oedo lines)',
    cuisine: 'Showa-style counter izakaya: charcoal-grilled chicken skewers and oden (official site; Tabelog) · skewers grilled in front of you; liver, hearts and sasami served a little rare because the chicken is fresh (ask for them well done); sasami with yuzu pepper, wasabi or plum (official site) · chicken soup to finish, three a day; crisp cabbage with a sweet house meat miso (official site) · in 2024–2026 reviews: oden, liver, chicken-liver sashimi (December 2024), natto omelette, mentaiko omelette, chicken nanban, ginger-grilled squid, octopus sashimi, grilled shishamo, curry · all-you-can-drink with set dishes (potato salad, oden, dashimaki, five yakitori) ¥3,000 for women (October 2026); ¥4,000 in 2024–2025 · private-hire all-you-can-drink omakase of 7+ dishes for 4–11 (up to 13), no time limit: ¥50,000 in total Tue–Thu, Sat and Sun, ¥60,000 on Fridays, cash only (Tabelog) · takeaway',
    website: SITE, gmaps: gm('居酒処田村 六本木3-13-3'), menu_url: SITE,
    notes: "[Izakaya · Roppongi, a Showa-era counter for skewers and oden till dawn] On a back street off Enma-zaka, a small L-shaped counter with a nostalgic Showa feel that staff told one diner has been going for about 30 years. Chicken skewers are grilled over charcoal in front of you — the liver, hearts and big, juicy sasami come a little rare because the chicken is fresh — alongside oden, a chicken soup limited to three a day, and crisp cabbage with sweet meat miso. Drinks are cheap and generous: an October 2026 visitor had all-you-can-drink with potato salad, oden, dashimaki and five skewers for ¥3,000, and groups can hire the whole counter with no time limit. Open late most nights (Tabelog says to 5 am Wednesday to Saturday; the shop's own site says to 8 am). Smoking is allowed. The sign is easy to miss, and Google Maps may lead you round the back.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Staff told a March 2025 diner the izakaya has been running for "about 30 years". The official site went up in December 2020, with delivery and takeaway added then. No owner or cook is named in the sources read.',
      philosophy: '"A place where anyone can breathe a sigh of relief… Tonight\'s drink at Tamura." (official site).', specialty: 'Charcoal-grilled chicken skewers served a little rare; oden.',
      anecdotes: [
        { text: '"When I asked the staff how long they have been in business, they said, \'About 30 years.\'" — March 2025.', source: R + 'B503849413/' },
        { text: '"For women, there’s an all-you-can-drink option with a meal for JPY 3,000… Be careful when using Google Maps, as it may lead you to the back of the restaurant." — October 2026.', source: R + 'B537827831/' },
        { text: '"I love that they offer bottle storage as well! It\'s a lucky find that stays open late into the night." — October 2026.', source: R + 'B538392693/' },
      ],
      japanese_sources_summary: '公式サイト: 居酒処 田村、港区六本木3-13-3 第5六本木ビレッジビル1F、日比谷線・大江戸線六本木駅徒歩3分、南北線六本木一丁目駅徒歩5分、月〜土・祝日18:00〜翌8:00 (持ち帰りは19:00〜翌5:00)、日曜日は貸し切りなどの予約のみ。本格炭火焼きを目の前で、新鮮な肉なのでレバー、ハツ、ささみは少しレアで (よく焼きも可)、ささみは柚子胡椒・わさび・梅、一日3食限定の鶏スープ、特製肉味噌のパリパリキャベツ、どこか懐かしい雰囲気のこじんまりとしたカウンター。食べログ (店舗会員): 月・火18:00〜23:00、水〜土18:00〜翌5:00、日曜休み、お通し500円、11席、喫煙可、カード・QR可、貸切の飲み放題おまかせ (4〜11名、最大13名) は総額50,000円 (金曜60,000円)、現金のみ。口コミ(2024年6月〜2026年10月): 約30年、おでん、レバー刺し、チキン南蛮、女性の飲み放題3,000円、ボトルキープ、Google Maps だと裏に出る。',
      confidence: 'medium', sources: [TB, SITE, R + 'B487357189/', R + 'B496857338/', R + 'B503849413/', R + 'B516269855/', R + 'B516314110/', R + 'B525063209/', R + 'B536276246/', R + 'B537827831/', R + 'B538357730/', R + 'B538392693/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu (Tabelog), and the official site has English text; orders are placed verbally at the counter (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木3-13-3 第5六本木ビレッジビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and official site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.662882, 139.734272); GSI 東京都港区六本木三丁目13番 (lot) 35m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE, TB, R + 'B537827831/'],
    price_note: 'Plan prices from Tabelog (tax included) and an October 2026 review; ¥500 otoshi charge. No à la carte prices in the sources read.', last_checked: TODAY, items: [
      it('ささみ（柚子胡椒・わさび・梅）', '', 'Chicken sasami skewer with yuzu pepper, wasabi or plum', '', 'Skewers', 'ask', 'no', 'Official site; served a little rare.', 'sasami'),
      it('鶏スープ', '', 'Chicken soup (three a day)', '', 'Food', 'ask', 'no', 'Official site.', 'tori_soup'),
      it('特製味噌で食べる パリパリ キャベツ', '', 'Crisp cabbage with sweet house meat miso', '', 'Food', 'ask', 'no', 'Official site.', 'cabbage'),
      it('', '', 'All-you-can-drink with potato salad, oden, dashimaki and five yakitori (women)', '¥3,000', 'Course', 'ask', 'no', 'October 2026 review.', 'nomihodai_set'),
      it('', '', 'Private-hire omakase with unlimited drinks, 4–11 people (total, Tue–Thu, Sat, Sun)', '¥50,000', 'Course', 'ask', 'no', 'Tabelog; ¥60,000 on Fridays; cash only.', 'private_hire'),
    ] }, {
    cuisine: '昭和の雰囲気のカウンターの居酒屋: 炭火の鶏串とおでん (公式サイト、食べログ)・串は目の前で焼き、新鮮な肉なのでレバー、ハツ、ささみは少しレアで (よく焼きも可)、ささみは柚子胡椒・わさび・梅で (公式サイト)・締めの鶏スープは一日3食限定、特製の甘い肉味噌で食べるパリパリキャベツ (公式サイト)・2024〜2026年の口コミ: おでん、レバー、鶏のレバー刺し (2024年12月)、納豆オムレツ、明太子の玉子焼き、チキン南蛮、イカの生姜焼き、タコの刺身、ししゃも、カレー・ポテトサラダ、おでん、だし巻き、焼き鳥5本付きの女性の飲み放題3,000円 (2026年10月)、2024〜2025年は4,000円・貸切の飲み放題おまかせ7品以上 (4〜11名、最大13名、時間無制限) は総額で火〜木・土・日50,000円、金曜60,000円、現金のみ (食べログ)・持ち帰りも',
    neighborhood: '六本木3-13-3 第5六本木ビレッジビル1F、Enma-zaka から入った裏通り。六本木駅から徒歩3分 (日比谷線・大江戸線)',
    gf_detail: '要確認。グルテンフリーの説明はない。焼き鳥、おでん、チキン南蛮、カレー、明太子の玉子焼き、甘い肉味噌のキャベツなど (公式サイト、2025〜2026年の口コミ)。たれや味噌の説明はない。',
    vegan_detail: 'ヴィーガン不可。鶏串とおでんの居酒屋で、キャベツにも肉味噌が付く (公式サイト)。',
    notes: '[居酒屋・六本木、明け方まで串とおでんの昭和のカウンター] Enma-zaka から入った裏通りにある、昭和の懐かしい雰囲気の小さなL字カウンター。ある客はスタッフから約30年続いていると聞いた。鶏串は目の前の炭火で焼き、新鮮なのでレバー、ハツ、大ぶりでジューシーなささみは少しレアで出てくる。おでん、一日3食限定の鶏スープ、甘い肉味噌のパリパリキャベツも。飲み物は安くたっぷりで、2026年10月の客はポテトサラダ、おでん、だし巻き、串5本付きの飲み放題を3,000円で楽しみ、グループは時間無制限で貸切もできる。ほとんどの夜は遅くまで開いている (食べログでは水〜土は朝5時まで、店の公式サイトでは朝8時まで)。喫煙可。看板は見落としやすく、Google Maps では店の裏に案内されることも。',
  });
}

save();
