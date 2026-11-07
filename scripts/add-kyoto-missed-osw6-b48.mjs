// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 48.
//   + 京都タワーサンドバル Kyoto Tower Sand Bar (craft beer and Kyoto drinks bar in the Kyoto Tower food hall) — core
//   + サロマーン&ソエール ハラールキッチン キョウト Salman & Sohel Halal Kitchen Kyoto (halal Indian, Arab and Turkish, Kojinguchi) — core
//   + 肉まぶし専科 肉亭新 Nikumabushi Senka Nikutei Shin (wagyu nikumabushi, Kyoto Porta) — core
//   + 満佐留 Masaru (family-run yoshoku diner by the Kyoto University medical campus) — core
//   - skip 26045824 別邸たけ井 京都ヨドバシ店 (chain)
//   - skip 26045218 元祖博多だるま 京都拉麺小路店 (chain)
//   - skip 26042698 NIWA (venue brand of a non-local company)
//   The lane's notable list is empty; core taken nearest-first.
//   Same-name counts first, per brand or operator (2026-11-06): Kyoto Tower Sand Bar — one. Salman & Sohel — one.
//   肉まぶし専科 肉亭新 — two (this and Kyoto Takashimaya S.C.); operator 株式会社プロシード also runs 祇園肉亭 新 (in data),
//   焼肉牛匠新 and 京焼肉 新 (proceed-kyoto.com) — a local small group, so this sister concept is drafted. 満佐留 — one.
//   None is in data/kyoto.json: grep by name and address (東塩小路町721-1 京都タワービル B1F, 宮垣町88-3, 東塩小路町902 京都ポルタ B1,
//   吉田下阿達町17) found none (kyoto_gihan_hajimedo_tower_sando is a different shop in the same food hall).
//   Service charges per Tabelog: none listed for any of the four. No owner deaths in the sources.
//   Halal: Salman & Sohel's own site says "ALL HALAL FOODS" — flags.halal true, attributed.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-48');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26045824', 'chain: Menya Takei — Tabelog lists 15+ Menya Takei shops (Umeda, Takatsuki, Kusatsu, Hikone, Kashihara and more); data already has 別邸 たけ井 なんばラーメン一座店 (Osaka) (https://tabelog.com/en/rstLst/?sw=%E3%81%9F%E3%81%91%E4%BA%95).');
skip('26045218', 'chain: Hakata Daruma — Tabelog lists Hakata Daruma shops in Fukuoka, Yokohama, Makuhari, Kumamoto, Koshigaya and more (https://tabelog.com/en/rstLst/?sw=%E5%8D%9A%E5%A4%9A%E3%81%A0%E3%82%8B%E3%81%BE).');
skip('26042698', 'venue brand of a non-local parent: NIWA, Kyoto Station Building, is run by NAKED, Inc. (Tokyo) as part of its "Niwa project" (https://resemom.jp/release/prtimes/20250227/137065.html; https://niwa.naked.works/kyoto/jp).');

// ================================================================ 京都タワーサンドバル
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26028856/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '23:00']);
  put({
    id: 'kyoto_tower_sand_bar', name: '京都タワーサンドバル (Kyoto Tower Sand Bar)', category: 'OMNI',
    lat: 34.987588, lng: 135.759328, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A beer-led bar (beer contains gluten) with small snacks such as smoked quail eggs and canapés (2026 reviews); no gluten information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Drinks plus a few snacks — smoked quail eggs, smoked salmon, mascarpone canapés (2026 reviews); no vegan information.',
    hours_raw: 'Daily 11:00–23:00 (last order 22:30); open all year (Tabelog). Order at the register or by phone at the table; mobile orders take only cards, PayPay or Rakuten Pay (May and July 2026). Cards (JCB) and QR incl. PayPay; no e-money (Tabelog). A U-shaped counter of 12 seats plus standing room for 14, with food-hall tables around it; food from other stalls can be brought in (Tabelog; April and August 2026). Non-smoking; smoking area outside (Tabelog). B1F of the Kyoto Tower Building, straight in from the underground passage from Kyoto Stn (Tabelog; October 2026). Opened 14 April 2017 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kyoto Tower basement food hall — Kyoto Stn north',
    cuisine: 'Craft beer, Kyoto sake and wine at a counter in the Kyoto Tower food hall (2026 reviews) · SORACHI 1984 ¥780, Sapporo Black Label in "sharp" or "mild" pours ¥680, sansho ale ¥1,050 (April–October 2026) · Kyoto Brewing on tap (June 2026); Kyoto whisky on the rocks ¥950 (August 2026) · smoked quail eggs ¥500, quick-smoked salmon carpaccio ¥780, sansho and mascarpone canapés ¥880 (June and October 2026)',
    website: 'https://sando-bar.com/', gmaps: gm('京都タワーサンドバル'), menu_url: TB,
    notes: '[Bar · Kyoto Tower basement, craft beer by the station] A U-shaped bar in the food hall under Kyoto Tower, reached straight from the station underpass: Kyoto craft beer, Sorachi and Sapporo on tap with a choice of pour, Kyoto sake and whisky, and smoked snacks — or bring food from the other stalls. Open daily 11:00–23:00; a handy wait for the Shinkansen.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: a bar, café and standing bar in the B1F food hall of Kyoto Tower Sando, opened in April 2017, with sake and wine. Kyoto Tower Sando itself is run by 京阪流通システムズ (2021 press release); no operator is given for the bar.',
      philosophy: null, specialty: 'Craft beer and Kyoto drinks.',
      anecdotes: [
        { text: 'An April 2026 office worker stops in after work for a SORACHI 1984 schooner and liked the seasonal flowers on the counter.', source: R + 'B527021575/' },
        { text: 'An August 2026 visitor enjoyed a Kyoto whisky but found the glass still wet from washing.', source: R + 'B533379481/' },
        { text: 'An October 2026 traveller with 30 minutes before a train had a sharp-pour Black Label and found more seating than expected.', source: R + 'B538266614/' },
      ],
      japanese_sources_summary: '食べログ: バー・カフェ・立ち飲み、下京区烏丸通七条下がる東塩小路町721-1 京都タワービル B1F、京都駅地下道からすぐ、毎日11:00〜23:00 (L.O. 22:30)、年中無休、予約可、カード (JCB)・QR 可、電子マネー不可、カウンター12席と立ち席14、禁煙 (店外に喫煙所)、2017年4月14日オープン。口コミ (2025年11月〜2026年10月、英語): フードホールの U 字カウンター、クラフトビール、SORACHI 1984 780円、Black Label 680円、山椒のエール1,050円、京都のウイスキー950円、燻製の小皿、他の店の料理も持ち込める、スマホで注文。',
      confidence: 'medium', sources: [TB, 'https://www.atpress.ne.jp/news/249067', R + 'B492183758/', R + 'B524147220/', R + 'B527021575/', R + 'B527989027/', R + 'B529374802/', R + 'B530552787/', R + 'B531054001/', R + 'B532854429/', R + 'B533379481/', R + 'B534442352/', R + 'B537490404/', R + 'B538266614/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the register or by phone at the table; seat yourself anywhere in the food hall. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区烏丸通七条下がる東塩小路町721-1 京都タワービル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.987588, 135.759328); cross-checked: GSI 京都府京都市下京区東塩小路町721番地 (lot) 9m; kyoto_gihan_hajimedo_tower_sando in the same food hall is 22 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B527021575/', R + 'B530552787/', R + 'B537490404/', R + 'B538266614/'],
    price_note: 'Prices from April–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'SORACHI 1984 (regular)', '¥780', 'Beer', 'no', 'ask', 'April and October 2026.', 'sorachi'),
      it('', '', 'Sapporo Black Label, sharp or mild pour', '¥680', 'Beer', 'no', 'ask', 'August and October 2026.', 'black_label'),
      it('', '', 'Sansho ale (schooner)', '¥1,050', 'Beer', 'no', 'ask', 'June 2026.', 'sansho_ale'),
      it('', '', 'Kyoto whisky on the rocks', '¥950', 'Whisky', 'ask', 'ask', 'August 2026.', 'kyoto_whisky'),
      it('', '', 'Smoked quail eggs', '¥500', 'Snacks', 'ask', 'no', 'October 2026.', 'smoked_quail'),
      it('', '', 'Quick-smoked salmon carpaccio', '¥780', 'Snacks', 'ask', 'no', 'October 2026.', 'salmon_carpaccio'),
    ] }, {
    cuisine: '京都タワーのフードホールのカウンターで、クラフトビール、京都の日本酒、ワイン (2026年の口コミ)・SORACHI 1984 780円、注ぎ方を選べる Black Label 680円、山椒のエール1,050円 (2026年4月〜10月)・Kyoto Brewing の樽生 (2026年6月)、京都のウイスキーのロック950円 (2026年8月)・うずらの燻製卵500円、サーモンの燻製カルパッチョ780円、山椒とマスカルポーネのカナッペ880円 (2026年6月・10月)',
    neighborhood: '京都タワー地下のフードホール。京都駅の北',
    gf_detail: '要確認。ビールが中心 (ビールはグルテンを含む)、燻製卵やカナッペなどの小皿 (2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: '要確認。飲み物と、燻製卵、燻製サーモン、マスカルポーネのカナッペなどの小皿 (2026年の口コミ)。ヴィーガンの情報はない。',
    notes: '[バー・京都タワー地下、駅すぐのクラフトビール] 京都駅の地下道から直結の京都タワー地下フードホールにある U 字のバー。京都のクラフトビール、注ぎ方を選べる SORACHI や Black Label、京都の日本酒やウイスキー、燻製のつまみ。他の店の料理も一緒に。毎日11時〜23時、新幹線の待ち時間に。',
  });
}

// ================================================================ サロマーン&ソエール ハラールキッチン キョウト
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26029072/'; const R = TB + 'dtlrvwlst/';
  const OF = 'http://salmansohelhalal.jp/'; const EN = OF + '16061255726590'; const GR = OF + 'greeting';
  const H = day(['11:00', '23:00']);
  put({
    id: 'kyoto_salman_sohel_halal', name: 'サロマーン&ソエール ハラールキッチン キョウト (Salman & Sohel Halal Kitchen Kyoto)', category: 'OMNI',
    lat: 35.02158, lng: 135.769581, cuisine_type: 'curry',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Biryani, rice sets, kebabs and curries alongside naan (2025–26 reviews); naan contains wheat; no gluten information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options; lunch sets include a vegetable curry and lassi (November 2025, June 2026); no vegan information.',
    hours_raw: 'Daily 11:00–23:00 (last order 22:30), closed irregularly (Tabelog; official site). Reservations accepted; party plans; take-away and delivery (Tabelog; official site). Cards (VISA, Master, JCB, AMEX, Diners) and e-money (Tabelog). 42 seats incl. a private room for 10–12 per Tabelog (the official site says 62). Non-smoking; wheelchair access; free Wi-Fi; children welcome with a kids\' menu (Tabelog). English menu (Tabelog). Northeast corner of the Kojinguchi crossing, 1 min from the Kojinguchi bus stop, 7 min from Jingu-Marutamachi (Keihan) (official site; Tabelog). The English site says the Islamic Culture Center mosque is a 2-minute walk.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: true, open_late: true },
    neighborhood: 'Kawaramachi Kojinguchi — east of the Imperial Palace',
    cuisine: 'Halal Indian, Arab, Turkish and Persian cooking (official site) · chicken dum biryani ¥1,690 with a boiled egg and two sauces (February and October 2026); mutton biryani (February 2026) · lunch sets with two or three curries, tandoori chicken, naan or rice, salad and lassi (November 2025; June 2026) · kebab mix of lamb and chicken with basmati rice, hummus, chicken Manchurian (May 2026) · mutton bhuna, mutton vindaloo, South Indian chicken curry (November 2025 – October 2026) · Afghan-style rice, grilled fish, Kashmiri naan with pomegranate and coconut, spice lassi (April 2026)',
    website: OF, gmaps: gm('Salman Sohel Halal Kitchen Kyoto'), menu_url: OF,
    notes: '[Halal Indian, Arab and Turkish · Kojinguchi, by the Kamo river] A bright, roomy halal restaurant by the Kojinguchi crossing whose own site states "ALL HALAL FOODS": fragrant dum biryani, curry lunch sets with naan, lamb and chicken kebabs, hummus and Afghan-style rice. Wine is also served (Tabelog). Open daily to 23:00; English menu; take-away and delivery.',
    chef_bio: { chef_name: 'アリ セック シラジ', roles: ['Chef (official site greeting)'], origin: null,
      background: 'Per the official site: the chef opened the restaurant to serve authentic Indian, Persian and Arab food in Kyoto, cooked with carefully chosen ingredients that meet halal standards; the site was published in December 2020. A November 2025 review mentions a chef trained in hotel restaurants.',
      philosophy: 'Halal food is a Muslim food-safety standard that anyone can eat with confidence (official site greeting).', specialty: 'Dum biryani; Indian, Arab and Turkish dishes.',
      anecdotes: [
        { text: 'An April 2026 regular on an eighth visit tried a new Afghan rice dish and ordered the Kashmiri naan by mistake, which came with pomegranate and coconut.', source: R + 'B428764085/' },
        { text: 'A February 2026 diner was surprised how quickly the mutton biryani arrived, with attentive service.', source: R + 'B523125606/' },
        { text: 'A June 2026 visitor found the mutton vindaloo closer to a mutton butter chicken and the meat a little tough.', source: R + 'B520211972/' },
      ],
      japanese_sources_summary: '公式サイト: インド・アラブ・トルコ・ペルシャ料理、上京区荒神口上る宮垣町88-3、荒神口交差点北東、11:00〜23:00 (L.O. 22:30)、不定休、62席、全席禁煙、カード・電子マネー可、テイクアウト・デリバリー、シェフのアリ セック シラジのあいさつ「ハラルの基準をクリアした厳選された素材で丁寧に調理された本物のインド、ペルシャ、アラブ料理」、英語ページ「ALL HALAL FOODS」、モスクまで徒歩2分。食べログ: 42席、個室あり、ワイン・カクテルあり、英語メニュー。口コミ (2025年11月〜2026年10月、英語): ビリヤニ1,690円、カレーのランチセット、ケバブ、hummus、マトンのカレー、アフガンの炊き込みご飯、カシミールのナン。複数の口コミ (2025年11月、2026年10月) がムスリムや海外からの客が多いと書いている。',
      confidence: 'medium', sources: [TB, OF, EN, GR, R + 'B428764085/', R + 'B516849014/', R + 'B520211972/', R + 'B520418647/', R + 'B521880036/', R + 'B523125606/', R + 'B525744140/', R + 'B529543022/', R + 'B530770717/', R + 'B534763972/', R + 'B537483137/', R + 'B538054216/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog) and an English page on the official site; staff speak limited Japanese (October 2026). Several reviews describe many Muslim and international diners (November 2025, October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区宮垣町88-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.021580, 135.769581); cross-checked: GSI 京都府京都市上京区宮垣町88番地 (lot) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B521880036/', R + 'B537483137/'],
    price_note: 'Biryani price from February and October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Chicken dum biryani', '¥1,690', 'Biryani', 'ask', 'no', 'February and October 2026.', 'chicken_biryani'),
      it('', '', 'Mutton biryani', '', 'Biryani', 'ask', 'no', 'February 2026.', 'mutton_biryani'),
      it('', '', 'Lunch set (curries, tandoori chicken, naan, salad, lassi)', '', 'Lunch', 'no', 'no', 'November 2025; June 2026.', 'lunch_set'),
      it('', '', 'Kebab mix (lamb and chicken)', '', 'Arab and Turkish', 'ask', 'no', 'May 2026.', 'kebab_mix'),
      it('', '', 'Hummus', '', 'Arab and Turkish', 'ask', 'ask', 'May 2026.', 'hummus'),
    ] }, {
    cuisine: 'ハラルのインド、アラブ、トルコ、ペルシャ料理 (公式サイト)・ゆで卵と2種のソースのチキンの dum ビリヤニ1,690円 (2026年2月・10月)、マトンのビリヤニ (2026年2月)・2〜3種のカレー、タンドリーチキン、ナンかご飯、サラダ、ラッシーのランチセット (2025年11月、2026年6月)・ラムとチキンのケバブにバスマティライス、hummus、チキンの Manchurian (2026年5月)・マトンの bhuna、マトンの vindaloo、南インドのチキンカレー (2025年11月〜2026年10月)・アフガン風の炊き込みご飯、焼き魚、ざくろとココナッツのカシミールのナン、スパイスラッシー (2026年4月)',
    neighborhood: '河原町荒神口。御所の東',
    gf_detail: '要確認。ビリヤニ、ご飯のセット、ケバブ、カレーとナン (2025〜2026年の口コミ)。ナンは小麦を含む。グルテンの情報はない。',
    vegan_detail: '要確認。食べログはベジタリアン対応ありと表示。ランチに野菜のカレーとラッシー (2025年11月、2026年6月)。ヴィーガンの情報はない。',
    notes: '[ハラルのインド・アラブ・トルコ料理・荒神口、鴨川のそば] 荒神口交差点の明るく広いハラルの店。英語のサイトに「ALL HALAL FOODS」と店が明記。香り高いダムビリヤニ、ナンのカレーランチ、ラムとチキンのケバブ、hummus、アフガン風の炊き込みご飯。ワインもある (食べログ)。毎日23時まで、英語メニュー、テイクアウトとデリバリーも。',
  });
}

skip('26042206', '肉まぶし専科 肉亭新: chain — 株式会社プロシード runs seven 新-named shops incl. three 肉亭新 (proceed-kyoto.com); same ruling as 京焼肉 新 (osw1-43) — integrator 2026-11-06');

// ================================================================ 満佐留
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26007220/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'kyoto_masaru_yoshida', name: '満佐留 (Masaru)', category: 'OMNI',
    lat: 35.021906, lng: 135.774949, cuisine_type: 'yoshoku',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a fried-food yoshoku diner — cutlets, fries, kara-age, demi-glace (2023–25 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat and fish set meals with miso soup (2023–25 reviews).',
    hours_raw: 'Hours not listed on Tabelog; reviews describe lunch visits (2023–25). Reservations accepted (Tabelog). Cash only — no cards, e-money or QR (Tabelog). 15 seats: four tables for 4, one for 2 and a counter of 5 (Tabelog; August 2023). Non-smoking (Tabelog). In the residential streets east of the Kamo river, across from the Kyoto University pharmacy campus, about 5 min from the Konoe-dori bus stop (June 2023, December 2024).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Yoshida, by the Kyoto University medical and pharmacy campuses',
    cuisine: 'Home-style yoshoku set meals (2023–25 reviews) · omakase lunch of two daily mains with rice, salad, a side and miso soup ¥980 (August 2023, March 2024); daily special ¥1,100 (June 2025) · signature pork-belly kakuni "toro katsu" ¥1,200, limited (May 2024) · Set A of beef cutlet, shrimp, fish and squid fries (December 2025); sets A ¥1,450, B ¥1,100, C ¥1,200 (August 2023) · hamburg steak with demi-glace (November 2023), chicken nanban (June 2024) · Shiga Koshihikari rice (June 2024)',
    website: null, gmaps: gm('満佐留 吉田下阿達町'), menu_url: TB,
    notes: '[Yoshoku diner · Yoshida, by the Kyoto University hospital] A family-run neighbourhood diner across from the university pharmacy campus, feeding locals, medical students and doctors: the signature melt-tender pork-belly toro katsu, hamburg steak with demi-glace and big fried-food sets from about ¥1,000. Cash only; hours not published — go at lunch.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed), son of the family', 'Grandmother of the family, front of house'], origin: null,
      background: 'A June 2024 review describes a family business: the chef is the son of the family, and the grandmother — who has eight grandchildren — works in the shop. An August 2023 review saw several generations in the kitchen.',
      philosophy: null, specialty: 'Pork-belly kakuni toro katsu.',
      anecdotes: [
        { text: 'A June 2024 family stopping between appointments at the nearby immigration office found the whole family who run it wonderfully kind to the visiting couple’s four-month-old son.', source: R + 'B487621348/' },
        { text: 'A May 2024 diner caught the limited pork-belly toro katsu at noon on a weekday and praised its thin batter.', source: R + 'B484957093/' },
        { text: 'A December 2025 diner could not finish the Set A of beef cutlet and three kinds of fry.', source: R + 'B519810276/' },
      ],
      japanese_sources_summary: '食べログ: 洋食・食堂、左京区吉田下阿達町17、営業時間の記載なし、予約可、カード・電子マネー・QR 不可、15席、禁煙。口コミ (2023年6月〜2025年12月、英語): 京大薬学部の向かい、近衛通のバス停から徒歩約5分、おまかせランチ980円、日替わり1,100円、豚の角煮の Toro Katsu 1,200円、A・B・C のセット、ハンバーグ、Chicken Nanban、滋賀の Koshihikari、家族で営む、地元の人や医学生、医師に人気。',
      confidence: 'medium', sources: [TB, R + 'B473842641/', R + 'B482204869/', R + 'B484462805/', R + 'B484957093/', R + 'B487621348/', R + 'B489837097/', R + 'B497611399/', R + 'B498835585/', R + 'B509121655/', R + 'B509218032/', R + 'B519810276/', R + 'B99494656/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Bring cash; order the daily omakase lunch if unsure; hours are not published, so call ahead. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区吉田下阿達町17',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; latest review December 2025.' },
    pin_source: `Tabelog ${TB} (35.021906, 135.774949); cross-checked: GSI 京都府京都市左京区吉田下阿達町17番地 (lot) 39m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B99494656/', R + 'B484957093/', R + 'B509121655/'],
    price_note: 'Prices from 2023–25 reviews; cash only.', last_checked: TODAY, items: [
      it('', '', 'Omakase lunch (two daily mains)', '¥980', 'Lunch', 'no', 'no', 'August 2023; March 2024.', 'omakase_lunch'),
      it('', '', 'Daily special lunch', '¥1,100', 'Lunch', 'no', 'no', 'June 2025.', 'daily_lunch'),
      it('', '', 'Pork-belly kakuni toro katsu', '¥1,200', 'Set meals', 'no', 'no', 'Limited; May 2024.', 'toro_katsu'),
      it('', '', 'Set A (beef cutlet, shrimp, fish and squid fries)', '¥1,450', 'Set meals', 'no', 'no', 'August 2023 price; December 2025.', 'set_a'),
    ] }, {
    cuisine: '家庭的な洋食の定食 (2023〜2025年の口コミ)・日替わり2品にご飯、サラダ、小鉢、味噌汁のおまかせランチ980円 (2023年8月、2024年3月)、日替わり1,100円 (2025年6月)・数量限定の豚バラの角煮の「Toro Katsu」1,200円 (2024年5月)・ビーフカツ、エビ、白身魚、イカのフライの A セット (2025年12月)、A 1,450円、B 1,100円、C 1,200円 (2023年8月)・デミグラスのハンバーグ (2023年11月)、Chicken Nanban (2024年6月)・滋賀の Koshihikari (2024年6月)',
    neighborhood: '吉田、京大の医学部と薬学部のそば',
    gf_detail: 'グルテンフリーではない。カツ、フライ、唐揚げ、デミグラスの洋食の店 (2023〜2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。肉と魚の定食と味噌汁 (2023〜2025年の口コミ)。',
    notes: '[洋食の食堂・吉田、京大病院のそば] 京大薬学部の向かいにある家族経営の近所の食堂。地元の人、医学生、医師に人気。看板はとろける豚バラの角煮の Toro Katsu、デミグラスのハンバーグ、ボリュームのあるフライの定食が約1,000円から。現金のみ、営業時間の記載がないので昼に。',
  });
}

save();
