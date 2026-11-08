// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 65.
//   + プルミエ・エタージュ 1er ETAGE (café under a ceiling of dried flowers, Gokomachi Rokkaku) — rest
//   + 錦 鮨しん 本店 Nishiki Sushi Shin (Edomae sushi counter inside Nishiki Market) — rest
//   + 先斗町 石原 Pontocho Ishihara (one-party-a-day Kyoto cuisine with a Kamo-river terrace) — rest
//   + 祇園 鮨ひら Gion Sushi Hira (four-seat red-vinegar sushi counter run by one chef) — rest
//   - skip 26031922 秋吉 河原町店 (chain)
//   Rest tier, nearest-first from `next rest 2000`. queue-status.jsonl grepped for each brand (秋吉, プルミエ, 鮨しん, 石原, 鮨ひら):
//   no earlier rulings.
//   Same-name counts first (2026-11-07): 1er ETAGE — one. 鮨しん — this main shop and 鮨しん 富小路 in Kyoto (a December 2024
//   review mentions "multiple locations"); under five, no large operator found. 先斗町 石原 — one. 祇園 鮨ひら — one. None is in
//   data/kyoto.json. Service charges per Tabelog's Japanese original: 鮨しん 「チャージなし」; the others list none.
//   No halal claims; no owner deaths. Other diners: several reviews of 鮨しん (December 2024 and 2025, September 2026) describe a
//   mostly overseas clientele — summarised in cultural_comfort; single remarks left out.
//   Pins re-checked against current main: 鮨ひら sat 4.6 m from kyoto_rakuzan_gion; offset 4.4 m north (now 7.7 m).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-65');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26031922', 'chain: Akiyoshi — Tabelog lists Akiyoshi yakitori shops in Fukui, Shinsaibashi, Umeda, Ginza, Ikebukuro, Shibuya and more (https://tabelog.com/en/rstLst/?sw=%E7%A7%8B%E5%90%89).');

// ================================================================ プルミエ・エタージュ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26033698/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '19:00']);
  put({
    id: 'kyoto_1er_etage_gokomachi', name: 'プルミエ・エタージュ (1er ETAGE)', category: 'OMNI',
    lat: 35.006931, lng: 135.766115, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Coffee, tea and lattes with cakes such as Basque cheesecake and apple cake (2025–26 reviews); no gluten information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Black coffee and fruit teas, but the cakes and lattes use dairy (2025–26 reviews).',
    hours_raw: 'Daily 12:00–19:00; hours may change (Tabelog). No reservations per Tabelog, though a June 2026 visitor booked ahead. One drink per person minimum (September 2026). Cash only — no cards, e-money or QR (Tabelog). Sofa seating (Tabelog). Non-smoking (Tabelog). A narrow street-level entrance easy to miss, leading down a corridor (June 2026). On Gokomachi south of Rokkaku, 7 min from Kyoto-Kawaramachi (Tabelog). Moved about 100 m north and reopened on 29 November 2019 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Gokomachi, south of Rokkaku — Kyoto-Kawaramachi',
    cuisine: 'A café inside a dried-flower shop, with flowers hanging from the ceiling (2025–26 reviews) · matcha latte ¥700, Basque cheesecake ¥750–825, Ceylon milk tea ¥660 (May and September 2026) · fruit teas and cakes (August 2025); apple cake (September 2026) · hot coffee, blend, hojicha latte (January and June 2026)',
    website: 'https://fb.me/1er.etage', gmaps: gm('1er ETAGE 京都 御幸町'), menu_url: TB,
    notes: '[Café · Gokomachi Rokkaku, under a ceiling of dried flowers] A quiet café at the back of a dried-flower shop, reached down a narrow corridor, with seasonal bouquets hanging from the ceiling, every one for sale: matcha or hojicha lattes, fruit teas, Basque cheesecake and apple cake. One drink minimum; cash only.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: a coffee shop and café that moved about 100 m north to a street-level shop in November 2019. Reviews in 2025–26 describe a café corner inside a shop selling dried flowers.',
      philosophy: null, specialty: 'Dried-flower setting; cakes.',
      anecdotes: [
        { text: 'A January 2026 visitor admitted not being able to read the name at first; it is pronounced "Purumie Etaju".', source: R + 'B521400637/' },
        { text: 'A September 2025 visitor named it a favourite café for the scent of the dried flowers.', source: R + 'B514102722/' },
        { text: 'A September 2026 returning visitor found the flowers changed with the season.', source: R + 'B535444974/' },
      ],
      japanese_sources_summary: '食べログ: 喫茶店・カフェ、中京区御幸町通六角下ル伊勢屋町342、阪急河原町駅から徒歩約7分、毎日12:00〜19:00、予約不可、現金のみ、ソファ席、禁煙、2019年11月29日に約100m北へ移転オープン。口コミ (2025年8月〜2026年9月、英語): ドライフラワーの店の一角のカフェ、天井いっぱいのドライフラワー (販売も)、抹茶ラテ700円、バスクチーズケーキ750〜825円、セイロンのミルクティー660円、フルーツティー、りんごのケーキ、ほうじ茶ラテ、1人1ドリンク、入口が見つけにくい。',
      confidence: 'medium', sources: [TB, R + 'B511113963/', R + 'B514102722/', R + 'B516656359/', R + 'B516775876/', R + 'B521400637/', R + 'B523750012/', R + 'B526812375/', R + 'B528925824/', R + 'B530035053/', R + 'B530099335/', R + 'B535444974/', R + 'B535490505/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Look for the narrow entrance; order one drink each; cash only. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区御幸町通六角下ル伊勢屋町342',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.006931, 135.766115); cross-checked: GSI 京都府京都市中京区伊勢屋町342番地 (lot) 20m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B528925824/', R + 'B535490505/'],
    price_note: 'Prices from May and September 2026; one drink minimum; cash only.', last_checked: TODAY, items: [
      it('', '', 'Matcha latte', '¥700', 'Drinks', 'ask', 'no', 'May 2026.', 'matcha_latte'),
      it('', '', 'Basque cheesecake', '¥750–825', 'Cakes', 'no', 'no', 'May and September 2026.', 'basque'),
      it('', '', 'Ceylon tea with milk', '¥660', 'Drinks', 'ask', 'no', 'September 2026.', 'milk_tea'),
    ] }, {
    cuisine: '天井からドライフラワーが下がる、ドライフラワーの店の中のカフェ (2025〜2026年の口コミ)・抹茶ラテ700円、バスクチーズケーキ750〜825円、セイロンのミルクティー660円 (2026年5月・9月)・フルーツティーとケーキ (2025年8月)、りんごのケーキ (2026年9月)・ホットコーヒー、ブレンド、ほうじ茶ラテ (2026年1月・6月)',
    neighborhood: '御幸町、六角の南。京都河原町駅',
    gf_detail: '要確認。コーヒー、紅茶、ラテと、バスクチーズケーキやりんごのケーキ (2025〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: '要確認。ブラックコーヒーやフルーツティーはあるが、ケーキとラテは乳製品を使う (2025〜2026年の口コミ)。',
    notes: '[カフェ・御幸町六角、ドライフラワーの天井の下で] 細い通路の奥、ドライフラワーの店の中にある静かなカフェ。季節の花束が天井から下がり、すべて購入できる。抹茶やほうじ茶のラテ、フルーツティー、バスクチーズケーキ、りんごのケーキ。1人1ドリンク、現金のみ。',
  });
}

// ================================================================ 錦 鮨しん 本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26038792/'; const R = TB + 'dtlrvwlst/';
  const OF = 'https://www.nishiki-sushishin.com/';
  const H = day(['12:00', '16:00'], ['17:30', '21:00']);
  put({
    id: 'kyoto_nishiki_sushi_shin', name: '錦 鮨しん 本店 (Nishiki Sushi Shin)', category: 'OMNI',
    lat: 35.004978, lng: 135.764151, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Edomae nigiri, small dishes and red miso soup (2023–25 reviews); some pieces are seasoned with salt rather than soy (August 2025). No gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi counter (2023–26 reviews).',
    hours_raw: 'Lunch 12:00–16:00 (last food order 15:00), dinner 17:30–21:00 (last food order 20:00); closed irregularly (Tabelog). Reservations accepted (Tabelog). No charge (Tabelog, Japanese text: 「チャージなし」). Cards (VISA, Master, JCB, AMEX, Diners) and PayPay; no e-money (Tabelog). 14 seats at a hinoki counter; no child seats (Tabelog). Non-smoking (Tabelog). Inside Nishiki Market, 5 min from Shijo, Karasuma and Kyoto-Kawaramachi (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishiki Market, west end — Shijo / Karasuma',
    cuisine: 'Edomae sushi from seasonal fish from across Japan, on rice from the Kyoto rice merchant Hachidaime Gihei, at a hinoki counter, with premium sake (Tabelog) · omakase nigiri course ¥5,000 at lunch (December 2025); a top set ¥5,000 after a price rise of about ¥2,000 (August 2025) · six-piece lunch omakase with red miso soup ¥2,500 (October 2023) · octopus, squid, salmon roe, mackerel; jellyfish and vinegared dishes; pieces finished with salt (August 2025) · dinner omakase with small dishes; live shrimp and shabu-shabu (March 2023)',
    website: OF, gmaps: gm('錦 鮨しん 本店'), menu_url: OF,
    notes: '[Sushi · Nishiki Market, a counter in the market] A 14-seat hinoki sushi counter inside Nishiki Market serving Edomae nigiri from seasonal fish on Hachidaime Gihei rice, with a ¥5,000 omakase at lunch and longer courses at night, some pieces finished with salt. No cover charge. Book ahead; closing days vary.',
    chef_bio: { chef_name: null, roles: ['Head chef (unnamed) at the counter (December 2025)'], origin: null,
      background: 'Per Tabelog: an Edomae sushi restaurant inside Nishiki Market with a hinoki counter, using seasonal fish from around Japan and rice from Hachidaime Gihei. A December 2024 review mentions several locations in Kyoto; 鮨しん 富小路 is a second listing.',
      philosophy: null, specialty: 'Edomae nigiri omakase.',
      anecdotes: [
        { text: 'A December 2025 diner booked the ¥5,000 omakase nigiri and sat in front of the head chef, chatting throughout.', source: R + 'B519991829/' },
        { text: 'An August 2025 regular noted the top set had risen about ¥2,000 in six months, to ¥5,000.', source: R + 'B498582259/' },
        { text: 'An August 2025 diner was surprised by jellyfish with a texture like firm herring roe.', source: R + 'B511703504/' },
      ],
      japanese_sources_summary: '食べログ: 寿司・海鮮・海鮮丼、中京区東魚屋町169-2、地下鉄四条駅・阪急烏丸駅・京都河原町駅から徒歩5分、12:00〜16:00 (L.O. 15:00)、17:30〜21:00 (L.O. 20:00)、不定休、予約可、チャージなし、カード・PayPay 可、ヒノキのカウンター14席、子供用の椅子なし、禁煙、錦市場の中、全国の旬の魚と Hachidaime Gihei の米の江戸前寿司、昼夜おまかせ、日本酒の飲み比べ。口コミ (2023年2月〜2026年9月、英語): おまかせ握り5,000円 (2025年12月)、半年で約2,000円値上げ (2025年8月)、昼のおまかせ6貫と赤だし2,500円 (2023年10月)、タコ、イカ、イクラ、サバ、クラゲ、塩で食べる握り、活きエビ、しゃぶしゃぶ。複数の口コミ (2024年12月、2025年12月、2026年9月) で海外からの客が多いとある。',
      confidence: 'medium', sources: [TB, OF, R + 'B460337603/', R + 'B460807641/', R + 'B462837476/', R + 'B472904225/', R + 'B483747464/', R + 'B487384117/', R + 'B498582259/', R + 'B510986544/', R + 'B511703504/', R + 'B519991829/', R + 'B536621580/', R + 'B538065643/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book the omakase at lunch; no child seats. Several reviews (December 2024, December 2025, September 2026) say most guests come from overseas.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区東魚屋町169-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.004978, 135.764151); cross-checked: GSI 京都府京都市中京区東魚屋町169番地 (lot) 29m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B519991829/', R + 'B498582259/'],
    price_note: 'Lunch omakase price from December 2025; no cover charge.', last_checked: TODAY, items: [
      it('', '', 'Omakase nigiri course (lunch)', '¥5,000', 'Courses', 'ask', 'no', 'December 2025.', 'omakase_lunch'),
      it('', '', 'Dinner omakase with small dishes', '', 'Courses', 'ask', 'no', 'March 2023.', 'omakase_dinner'),
    ] }, {
    cuisine: '全国の旬の魚と Hachidaime Gihei の米の江戸前寿司を、ヒノキのカウンターで、日本酒とともに (食べログ)・昼のおまかせ握り5,000円 (2025年12月)、約2,000円値上がりして上のセット5,000円 (2025年8月)・赤だし付きの昼のおまかせ6貫2,500円 (2023年10月)・タコ、イカ、イクラ、サバ、クラゲや酢の物、塩で仕上げる握り (2025年8月)・小鉢の付く夜のおまかせ、活きエビ、しゃぶしゃぶ (2023年3月)',
    neighborhood: '錦市場の西側。四条・烏丸',
    gf_detail: '要確認。江戸前の握り、小鉢、赤だし (2023〜2025年の口コミ)。醤油ではなく塩で仕上げる握りもある (2025年8月)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。寿司のカウンター (2023〜2026年の口コミ)。',
    notes: '[寿司・錦市場、市場の中のカウンター] 錦市場の中のヒノキの14席の寿司カウンター。旬の魚を Hachidaime Gihei の米で握る江戸前寿司。昼は5,000円のおまかせ、夜は長めのコース、塩で仕上げる握りも。チャージなし。予約を、休みは不定。',
  });
}

// ================================================================ 先斗町 石原
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26010010/'; const R = TB + 'dtlrvwlst/';
  const OF = 'https://pontocho-ishihara.com/';
  put({
    id: 'kyoto_pontocho_ishihara', name: '先斗町 石原 (Pontocho Ishihara)', category: 'OMNI',
    lat: 35.007227, lng: 135.771195, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. An omakase of Kyoto dishes — hamo, sweetfish, sushi, fugu, soba (2019–25 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: hamo, sweetfish, fugu and saba sushi (2019–25 reviews).',
    hours_raw: 'Hours not listed on Tabelog. Reservation only (Tabelog); one party per day, so the whole floor is yours (May 2019; June 2024). Cards (JCB, AMEX, Diners) (Tabelog). 16 seats; a summer terrace over the Kamo river (Tabelog; 2015–24 reviews). On Pontocho south of Sanjo (Tabelog).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Pontocho, south of Sanjo — on the Kamo river',
    cuisine: 'An omakase of Kyoto cuisine for a single party a day, by the Kamo river (2015–25 reviews) · summer course: edamame, junsai with hamo, eggplant potage, wild sweetfish eaten head to tail, sushi, hamo sashimi, hamo shabu, zenzai (July 2025) · hamo shabu in a white broth (May 2019) · fugu sashimi, saba sushi and soba (February 2025)',
    website: OF, gmaps: gm('先斗町 石原'), menu_url: OF,
    notes: '[Kyoto cuisine · Pontocho, one party a day on the river] A Pontocho restaurant that takes a single reservation a day, so your group has the floor — and in summer the terrace over the Kamo river — to itself: an omakase of hamo shabu in white broth, grilled wild sweetfish, hamo sashimi, sushi and zenzai, or fugu and saba sushi in winter. Reservation only.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: a reservation-only Japanese restaurant on Pontocho. Reviews from 2015 to 2025 describe one booking per day and a riverside terrace in the warm months.',
      philosophy: null, specialty: 'Hamo shabu; a one-party omakase.',
      anecdotes: [
        { text: 'A June 2024 mother-and-child pair were given the whole place for two; when the rain stopped the staff cleared the terrace.', source: R + 'B487107949/' },
        { text: 'A May 2019 diner watched hamo bloom like flowers in the warm white broth of the shabu.', source: R + 'B415072823/' },
        { text: 'A February 2025 walk-in was won over by the fugu sashimi, saba sushi and soba.', source: R + 'B501725145/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理、中京区先斗町通三条下る若松町139、完全予約制、カード (JCB、AMEX、Diners) 可、16席、営業時間の記載なし。口コミ (2015年6月〜2025年7月、英語): 1日1組のみ、鴨川の床、おまかせ、枝豆、junsei と鱧、なすのポタージュ、天然鮎の焼き物、寿司、鱧の刺身、鱧しゃぶ、zenzai、白い出汁の鱧しゃぶ、ふぐの刺身、鯖寿司、そば。',
      confidence: 'medium', sources: [TB, OF, R + 'B115931699/', R + 'B185064868/', R + 'B228817129/', R + 'B293030751/', R + 'B414036595/', R + 'B415072823/', R + 'B418721213/', R + 'B429337618/', R + 'B487107949/', R + 'B501725145/', R + 'B510119551/', R + 'B98486598/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book the single daily slot well ahead; ask for the river terrace in summer. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区先斗町通三条下る若松町139',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews dated through July 2025.' },
    pin_source: `Tabelog ${TB} (35.007227, 135.771195); cross-checked: GSI 京都府京都市中京区若松町139番地 (lot) 15m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B510119551/'],
    price_note: 'No course prices in the sources; Tabelog budget ¥15,000–19,999.', last_checked: TODAY, items: [
      it('', '', 'Omakase course (one party a day)', '', 'Courses', 'ask', 'no', 'July 2025.', 'omakase'),
      it('', '', 'Hamo shabu (summer)', '', 'Courses', 'ask', 'no', 'May 2019; July 2025.', 'hamo_shabu'),
    ] }, {
    cuisine: '鴨川のそば、1日1組の京料理のおまかせ (2015〜2025年の口コミ)・夏のコース: 枝豆、junsei と鱧、なすのポタージュ、頭から食べられる天然の鮎、寿司、鱧の刺身、鱧しゃぶ、zenzai (2025年7月)・白い出汁の鱧しゃぶ (2019年5月)・ふぐの刺身、鯖寿司、そば (2025年2月)',
    neighborhood: '先斗町、三条の南。鴨川沿い',
    gf_detail: '要確認。鱧、鮎、寿司、ふぐ、そばの京料理のおまかせ (2019〜2025年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。鱧、鮎、ふぐ、鯖寿司 (2019〜2025年の口コミ)。',
    notes: '[京料理・先斗町、鴨川沿いの1日1組] 1日1組しか予約を取らない先斗町の店。フロアも夏は鴨川の床も貸切に。白い出汁の鱧しゃぶ、天然の鮎、鱧の刺身、寿司、zenzaiのおまかせ、冬はふぐや鯖寿司も。完全予約制。',
  });
}

// ================================================================ 祇園 鮨ひら
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26043610/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '22:00']);
  put({
    id: 'kyoto_gion_sushi_hira', name: '祇園 鮨ひら (Gion Sushi Hira)', category: 'OMNI',
    lat: 35.004654, lng: 135.773853, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A sushi course of nigiri on red-vinegar rice with small dishes such as abalone risotto (2026 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi counter (2025–26 reviews).',
    hours_raw: 'Mon, Tue, Thu–Sun and holidays 17:00–22:00 (last order 21:45); closed Wednesday; closing days may vary (Tabelog). Reservations accepted — two sittings, online at 17:00 or 19:00, other times by phone (Tabelog). Cards incl. UnionPay; e-money; QR incl. PayPay; cash also accepted (Tabelog). 4 counter seats (Tabelog). Non-smoking (Tabelog). Honda Gion Building 2F, up an alley, 3 min from Gion-Shijo (Tabelog; April 2026).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Tominaga-cho, Gion — Gion-Shijo',
    cuisine: 'Sushi on a gently acidic red-vinegar rice, with fish chosen each morning at Kizu market, and a range of sake (Tabelog) · two courses: ¥8,800 (April 2026); omakase ¥13,200 plus extras (August 2026) · firefly squid with mozuku, abalone risotto, nigiri ending with fatty tuna and a seaweed ("aoyasa") miso soup (April 2026) · rare sakes (March 2026)',
    website: null, gmaps: gm('祇園 鮨ひら'), menu_url: TB,
    notes: '[Sushi · Gion, a four-seat counter] A tiny four-seat sushi counter up an alley in Gion, where one friendly chef from Osaka makes red-vinegar nigiri from fish picked each morning at Kizu market, with small dishes such as abalone risotto and a choice of rare sakes — two sittings a night, courses from ¥8,800. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed), from Osaka, running the counter alone (April and July 2026)'], origin: 'Osaka (April 2026 review)',
      background: 'Per Tabelog: a four-seat sushi counter in Gion using red-vinegar rice and fish chosen each morning at Kizu market. Reviews in 2026 describe a friendly owner from Osaka who runs it alone and explains each dish.',
      philosophy: 'Red-vinegar rice with a gentle acidity that brings out the fish (Tabelog).', specialty: 'Red-vinegar nigiri.',
      anecdotes: [
        { text: 'A February 2026 diner likened the four-seat counter to having a sushi chef cater at home.', source: R + 'B522321172/' },
        { text: 'A June 2026 returning guest was glad to be remembered by the chef.', source: R + 'B530695223/' },
        { text: 'An April 2026 diner found the fish less fresh than hoped and the pieces large, and did not plan to return.', source: R + 'B527055555/' },
      ],
      japanese_sources_summary: '食べログ: 寿司、東山区富永町108 本田ぎをんビル 2F、祇園四条駅から徒歩3分、月火木金土日・祝17:00〜22:00 (L.O. 21:45)、水曜休み、予約可 (17時か19時の二部制、他の時間は電話で)、カード・電子マネー・QR・現金可、カウンター4席、禁煙、毎朝Kizu の市場で仕入れる旬の魚と赤酢のシャリ、日本酒。口コミ (2025年8月〜2026年7月、英語): コース8,800円、おまかせ13,200円と追加、ホタルイカともずく、あわびのリゾット、トロ、海藻の味噌汁、大阪出身の気さくな店主が一人で営む、珍しい日本酒。',
      confidence: 'medium', sources: [TB, R + 'B513229617/', R + 'B516826635/', R + 'B520345796/', R + 'B522321172/', R + 'B526026558/', R + 'B526850378/', R + 'B526913987/', R + 'B527055555/', R + 'B527134717/', R + 'B527761601/', R + 'B530695223/', R + 'B531408698/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book the 17:00 or 19:00 sitting online; four seats only. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市東山区富永町108 本田ぎをんビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.004614, 135.773853), offset 4.4 m north to clear kyoto_rakuzan_gion (4.6 m); cross-checked: GSI 京都府京都市東山区富永町108番地 (lot) 15m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B527134717/', R + 'B516826635/'],
    price_note: 'Course prices from April and August 2026.', last_checked: TODAY, items: [
      it('', '', 'Sushi course', '¥8,800', 'Courses', 'ask', 'no', 'April 2026.', 'course_8800'),
      it('', '', 'Omakase course', '¥13,200', 'Courses', 'ask', 'no', 'Plus extras; August 2026.', 'omakase'),
    ] }, {
    cuisine: '毎朝Kizu の市場で選ぶ魚を、ほどよい酸味の赤酢のシャリで、日本酒とともに (食べログ)・コースは二つ: 8,800円 (2026年4月)、おまかせ13,200円と追加 (2026年8月)・ホタルイカともずく、あわびのリゾット、握りはトロと海藻の味噌汁で締め (2026年4月)・珍しい日本酒 (2026年3月)',
    neighborhood: '富永町、祇園。祇園四条駅',
    gf_detail: '要確認。赤酢のシャリの握りとあわびのリゾットなどの小皿のコース (2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。寿司のカウンター (2025〜2026年の口コミ)。',
    notes: '[寿司・祇園、4席のカウンター] 祇園の路地のビル2階にある4席だけの寿司カウンター。大阪出身の気さくな店主が一人で、毎朝Kizu の市場で選んだ魚を赤酢のシャリで握り、あわびのリゾットなどの小皿と珍しい日本酒を。一晩2回転、コースは8,800円から。水曜休み。',
  });
}

save();
