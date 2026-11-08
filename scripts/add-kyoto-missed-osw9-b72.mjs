// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 72.
// Rest list in the lane, nearest-first from Shijo-Kawaramachi (queue.mjs ... next rest 2000):
//   - 京樽 京都大丸店 — chain (京樽 takeaway sushi, hundreds of shops)
//   + 鱧秀 錦市場 Hamo Hide (seafood-skewer stall at the Takakura end of Nishiki Market)
//   - 京都天ぷら天のめし 三条河原町店 — sub-brand of a large parent (ユニシアホールディングス), as ruled for 26041554 and 26043082
//   - 珈琲館 京都錦高倉通店 — chain (珈琲館; 珈琲館 渋谷店 is in Tokyo data)
//   + 焼肉 三田 Yakiniku Sanda (brand wagyu yakiniku at Shijo-Takakura; SANDA HOLDINGS)
//   + 京都 もじお 烏丸店 Kyoto Mojio (monjayaki and teppan izakaya; sister of a Sanda, Hyogo teppan bar)
//   - 神戸牛 吉祥吉 三条河原町 — chain (神戸牛 吉祥吉), as ruled for 26040329 and 26042704
//   + 淡兵衛 Tambee (Awaji Island sushi counter in the Daimaru Kyoto food hall; since December 2025)
//   Same-name counts first (data and queue-status.jsonl): 天のめし and 吉祥吉 have earlier rulings (followed); 三田 matches
//   only 三田製麺所 and 三田屋本店 rulings (different businesses); 珈琲館 in Tokyo data; none for 鱧秀, もじお, 淡兵衛.
//   None drafted is in data/kyoto.json by name or address (hidden records included).
//   Groups: 焼肉 三田's site links to SANDA HOLDINGS Group; もじお is described as a sister of neo鉄板焼き もじお in Sanda,
//   Hyogo (a review quoted in search results); the two share the lot 高材木町227. Neither brand is in data and no group of
//   5+ shops was found — drafted as separate concepts. 淡兵衛 is run by an Awaji Island seafood company (March 2026 review).
//   Service charges checked against Tabelog's Japanese original: 焼肉 三田 「サービス料：なし ／チャージ料：なし」; 鱧秀,
//   もじお and 淡兵衛 have no section.
//   Pins (checked against main, hidden records included): もじお's Tabelog point is 0.5 m from 焼肉 三田 and 6.4 m from
//   kyoto_sake_no_mitsuboshi (lot 227) → moved 6 m south (6.4 m clearance). 焼肉 三田 6.0 m from
//   kyoto_sake_no_mitsuboshi — kept. 淡兵衛 — GSI matched only the town (立売西町) → approximate. 鱧秀 13 m clear.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-72');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26018075', 'chain: 京樽 (takeaway sushi chain with hundreds of shops)');
skip('26043995', 'sub-brand of a large parent: 京都天ぷら 天のめし is a ユニシアホールディングス (串カツ田中 group) brand — same ruling as 26041554 and 26043082');
skip('26042693', 'chain: 珈琲館 (coffee-shop chain; 珈琲館 渋谷店 is in Tokyo data)');
skip('26040071', 'chain: 神戸牛 吉祥吉 — same ruling as 26040329 (京都本店) and 26042704');

// ================================================================ 鱧秀 錦市場
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26036693/'; const R = TB + 'dtlrvwlst/';
  const D = day(['10:00', '19:00']);
  put({
    id: 'kyoto_hamohide_nishiki', name: '鱧秀 錦市場 (Hamo Hide)', category: 'OMNI',
    lat: 35.005086, lng: 135.762882, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Salt-grilled shrimp and scallop skewers may suit, but the seasoning broth is unknown (2023–2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood stall (2023–2026 reviews).',
    hours_raw: 'Daily 10:00–19:00; hours may change (Tabelog). AMEX and e-money (Tabelog). Seating inside and restrooms (October 2025 review); short queues at lunch (October 2025 review). Non-smoking (Tabelog). At the entrance of Nishiki Market, Takakura end (Tabelog; October 2025 review).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishiki Market, Takakura end — 4 min from Karasuma Stn',
    cuisine: 'Market seafood to eat on the spot: shrimp skewers, three for ¥1,000, with salt and pepper (October 2025) or a house broth and salt lemon (August 2023); scallop skewers (October 2025); sakura sake and umeshu at ¥100 a shot (June and September 2026); Tabelog describes a seafood shop specialising in hamo',
    website: null, gmaps: gm('鱧秀 錦市場'), menu_url: null,
    notes: '[Seafood skewers · Nishiki Market] A busy stall at the Takakura end of Nishiki Market grilling big shrimp and scallop skewers to order, with a few seats inside and ¥100 shots of sakura sake out front. About ¥1,000–2,000.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'A seafood shop specialising in hamo, according to Tabelog. Mostly overseas customers (October 2025 review).',
      philosophy: null,
      specialty: 'Shrimp skewers.',
      anecdotes: [
        { text: 'A Sunday-lunchtime visitor in October 2025 queued three to five minutes for three salt-and-pepper shrimp skewers at ¥1,000.', source: R + 'B514945860/' },
        { text: 'A September 2026 walker from Honnoji tried a ¥100 shot of sakura sake but found it too small to feel like a drink.', source: R + 'B535820610/' },
      ],
      japanese_sources_summary: '食べログ: 鱧秀 錦市場、魚介料理、中京区中魚屋町504、烏丸駅から290m、毎日 10:00〜19:00 (変更の可能性あり)、カード (AMEX)・電子マネー可、禁煙、鱧を専門とする魚介の店 (紹介、英訳)。口コミ (2023〜2026年、英語): 錦市場の入口、海老の串3本1,000円 (塩こしょう、2025年10月)、秘伝の出汁と塩レモン (2023年8月)、帆立の串、桜の酒と梅酒が1杯100円 (2026年6月・9月)、店内の席とトイレ、海外の客が多い。',
      confidence: 'low', sources: [TB, R + 'B514945860/', R + 'B526705571/', R + 'B530019481/', R + 'B533137153/', R + 'B533656274/', R + 'B535820610/'] },
    cultural_comfort: { level: 'none_needed', note: 'Point-and-order market stall.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区中魚屋町504',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.005086, 135.762882); cross-checked: GSI 京都府京都市中京区中魚屋町504番地 (lot) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B514945860/', R + 'B535820610/'],
    price_note: 'Prices from October 2025 and September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Shrimp skewers (3)', '¥1,000', 'Skewers', 'ask', 'no', 'October 2025 review.', 'ebi_kushi'),
      it('', '', 'Scallop skewer', '', 'Skewers', 'ask', 'no', 'October 2025 review.', 'hotate'),
      it('', '', 'Sakura sake (a shot)', '¥100', 'Drinks', 'ask', 'ask', 'June and September 2026 reviews.', 'sakura_sake'),
    ] }, {
    cuisine: 'その場で食べる市場の魚介: 塩こしょうの海老の串3本1,000円 (2025年10月)、秘伝の出汁と塩レモンの海老の串 (2023年8月)、帆立の串 (2025年10月)、1杯100円の桜の酒と梅酒 (2026年6月・9月)。食べログには鱧を専門とする魚介の店とある',
    neighborhood: '錦市場、高倉側。烏丸駅から徒歩4分',
    gf_detail: '要確認。塩焼きの海老や帆立の串は合う可能性があるが、出汁の中身は不明 (2023〜2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚介の店 (2023〜2026年の口コミ)。',
    notes: '[魚介の串・錦市場] 錦市場の高倉側の入口のにぎやかな店。大きな海老や帆立の串を注文ごとに焼き、店内に席も少し。店先で桜の酒が1杯100円。1,000〜2,000円ほど。',
  });
}

// ================================================================ 焼肉 三田
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26041391/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'https://yakiniku-sanda.com/';
  const D = day(['11:00', '14:00'], ['17:00', '23:00']);
  put({
    id: 'kyoto_yakiniku_sanda_karasuma', name: '焼肉 三田 (Yakiniku Sanda)', category: 'OMNI',
    lat: 35.00264, lng: 135.762564, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Salt-grilled wagyu may suit, but marinades, yukhoe and the curry to finish are unknown (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: wagyu yakiniku (own site; 2025–26 reviews).',
    hours_raw: 'Daily 11:00–14:00 (L.O. 13:30) and 17:00–23:00, last entry 22:00 (Tabelog); the own site lists 17:00–23:00 (L.O. 22:00). Bookings taken; private hire for 10 or more (Tabelog). No service charge or cover (Tabelog Japanese original 「サービス料：なし ／チャージ料：なし」). Cards, e-money and QR (Tabelog). 16 seats with a counter; smoking allowed (Tabelog; June 2026 review). English, Chinese and Korean menus (Tabelog). 2nd floor, 3 min from Karasuma / Shijo (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shijo-Takakura — 3 min from Karasuma Stn',
    cuisine: 'Brand wagyu yakiniku: wagyu from across Japan certified at the Kyoto meat market (own site); yukhoe and outside skirt (December 2025); spices and a curry to finish (November 2025); courses with a choice of main meat, lean wagyu (June 2026)',
    website: WEB, gmaps: gm('焼肉 三田 京都 烏丸'), menu_url: null,
    notes: '[Wagyu yakiniku · Shijo-Takakura] A small, stylish yakiniku room near Shijo-Takakura serving brand wagyu at casual prices — yukhoe, harami, lean cuts in courses, and a curry to finish. Many overseas guests; smoking allowed. About ¥8,000–15,000.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Part of SANDA HOLDINGS Group (own site). Many overseas customers (December 2025 review); attentive staff (June 2026 review).',
      philosophy: 'Carefully chosen brand wagyu at casual prices (own site).',
      specialty: 'Brand wagyu yakiniku.',
      anecdotes: [
        { text: 'A December 2025 diner recommended the yukhoe and outside skirt, but thought the prices were set for overseas visitors.', source: R + 'B519586912/' },
        { text: 'A November 2025 diner liked the spices and stylish decor and finished with the curry.', source: R + 'B523707023/' },
        { text: 'A June 2026 course diner chose lean wagyu for the main and found the large staff attentive, if a little many.', source: R + 'B530017640/' },
      ],
      japanese_sources_summary: '食べログ: 焼肉 三田、焼肉、下京区高材木町227-1 2F、阪急烏丸駅・地下鉄四条駅から徒歩3分、毎日 11:00〜14:00 (L.O. 13:30)・17:00〜23:00 (最終入店22:00)、予約可 (10名以上の貸切は前日まで)、サービス料：なし／チャージ料：なし、カード・電子マネー・QR 可、16席、喫煙可、英語・中国語・韓国語のメニュー。公式サイト: ブランド和牛を厳選しカジュアルな価格で、100年以上の歴史の京都食肉市場で認定されたブランド和牛、17:00〜23:00 (L.O. 22:00)、SANDA HOLDINGS Group。口コミ (2025〜2026年、英語): ユッケ、ハラミ、締めのカレー、メインの肉を選べるコース、赤身の和牛、海外の客が多い。',
      confidence: 'medium', sources: [TB, WEB, R + 'B519586912/', R + 'B523707023/', R + 'B530017640/'] },
    cultural_comfort: { level: 'english', note: 'English, Chinese and Korean menus (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区高材木町227-1 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and own site; reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB} (35.002640, 135.762564), 6.0 m from kyoto_sake_no_mitsuboshi; cross-checked: GSI 京都府京都市下京区高材木町227番地 (lot) 20m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [WEB, R + 'B519586912/'],
    price_note: 'No item prices found; reviews give ¥8,000–15,000 a head.', last_checked: TODAY, items: [
      it('', '', 'Yukhoe', '', 'Yakiniku', 'ask', 'no', 'December 2025 review.', 'yukhoe'),
      it('', '', 'Outside skirt (harami)', '', 'Yakiniku', 'ask', 'no', 'December 2025 review.', 'harami'),
      it('', '', 'Curry to finish', '', 'To finish', 'ask', 'no', 'November 2025 review.', 'curry'),
    ] }, {
    cuisine: 'ブランド和牛の焼肉: 京都食肉市場で認定された全国のブランド和牛 (公式サイト)、ユッケとハラミ (2025年12月)、スパイスと締めのカレー (2025年11月)、メインの肉を選べるコースと赤身の和牛 (2026年6月)',
    neighborhood: '四条高倉。烏丸駅から徒歩3分',
    gf_detail: '要確認。塩で焼く和牛は合う可能性があるが、たれ、ユッケ、締めのカレーは不明 (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。和牛の焼肉 (公式サイト、2025〜26年の口コミ)。',
    notes: '[和牛の焼肉・四条高倉] 四条高倉近くの小さなおしゃれな焼肉店。ブランド和牛をカジュアルな価格で、ユッケ、ハラミ、赤身のコース、締めのカレー。海外の客が多い、喫煙可。8,000〜15,000円ほど。',
  });
}

// ================================================================ 京都 もじお 烏丸店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26041037/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'https://kyoto-mojio-karasuma.com';
  const W = day(['17:00', '25:00']); const E = day(['15:00', '25:00']);
  put({
    id: 'kyoto_mojio_karasuma', name: '京都 もじお 烏丸店 (Kyoto Mojio)', category: 'OMNI',
    lat: 35.002582, lng: 135.762563, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: monjayaki batter is wheat flour (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: monjayaki with mentaiko, beef tendon, pork, seafood and cheese (2025–26 reviews).',
    hours_raw: 'Mon–Fri 17:00–01:00 (food L.O. 24:00); Sat, Sun and holidays 15:00–01:00 (Tabelog). Bookings advised (August 2026 review). The first monjayaki is cooked by staff free; after that ¥100 a plate or cook it yourself (December 2025, July and October 2026 reviews). Orders by tablet (November 2025 review). Cards, e-money and PayPay (Tabelog). 37 seats: a counter, tables and semi-private rooms (Tabelog). On Takakura south of Shijo, 5 min from Karasuma (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shijo-Takakura — 5 min from Karasuma Stn',
    cuisine: 'Monjayaki and teppan izakaya: 14 kinds of monjayaki in chawan (1–2 people) or donburi (3–4) sizes — mentaiko mochi cheese (the favourite), wagyu tendon curry, ume-tako pork nori, squid-ink monja with rice ¥1,738 donburi (2025–26 reviews); curry beef tendon monja, smoked quail eggs (September 2026); seafood dishes',
    website: WEB, gmaps: gm('京都 もじお 烏丸店'), menu_url: null,
    notes: '[Monjayaki · Shijo-Takakura] A bright, busy monjayaki izakaya near Shijo-Takakura with fourteen kinds of monja by the bowl — mentaiko mochi cheese, squid ink with rice, curry beef tendon — cooked for you the first time, then by you or the staff for ¥100. Open to 1 am. About ¥3,000–5,000.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened 10 April 2024 (Tabelog). Described as a sister of neo鉄板焼き もじお in Sanda, Hyogo (a review quoted in search results). You can choose which staff member cooks your monja (June 2026 review).',
      philosophy: null,
      specialty: 'Mentaiko mochi cheese monjayaki.',
      anecdotes: [
        { text: 'During the July 2026 Gion Festival a diner got a table by calling ahead; the staff cooked the first monja free and charged ¥100 after.', source: R + 'B532777030/' },
        { text: 'A September 2026 diner chose the ¥1,738 donburi of squid-ink monja, which had rice in it and tasted like a squid-ink risotto.', source: R + 'B535310233/' },
        { text: 'A repeat visitor (October 2026) always cooks from the second plate on, chatting with the friendly staff.', source: R + 'B538282467/' },
      ],
      japanese_sources_summary: '食べログ: 京都 もじお 烏丸店、もんじゃ焼き・居酒屋・鉄板焼き、下京区高倉通四条下る高材木町227、烏丸駅から徒歩約5分、月〜金 17:00〜翌1:00 (料理 L.O. 24:00)、土日祝 15:00〜翌1:00、カード・電子マネー・PayPay 可、37席 (カウンター8、テーブル、半個室)、2024年4月10日オープン。口コミ (2025〜2026年、英語): 14種類のもんじゃを茶碗と丼のサイズで、Mentaiko Mochi Cheese、Wagyu Tendon Curry、Ume Tako Pork Nori、イカスミもんじゃ (ご飯入り、丼1,738円)、燻製のうずらの卵、最初の1枚はスタッフが焼き2枚目から100円、タブレットで注文。検索結果の口コミ: 三田の neo鉄板焼き もじおの姉妹店。',
      confidence: 'medium', sources: [TB, WEB, R + 'B517320817/', R + 'B520460304/', R + 'B531374077/', R + 'B531838429/', R + 'B532777030/', R + 'B534664937/', R + 'B535310233/', R + 'B535568346/', R + 'B536349555/', R + 'B538282467/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Tablet ordering; staff cook the first monja.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区高倉通四条下る高材木町227',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and own site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.002636, 135.762563), 0.5 m from kyoto_yakiniku_sanda_karasuma and 6.4 m from kyoto_sake_no_mitsuboshi (same lot 227) — moved 6 m south to (35.002582, 135.762563), 6.4 m clearance; cross-checked: GSI 京都府京都市下京区高材木町227番地 (lot) 20m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535310233/', R + 'B532777030/'],
    price_note: 'Prices from July and September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Squid-ink monjayaki (donburi size)', '¥1,738', 'Monjayaki', 'no', 'no', 'September 2026 review.', 'ikasumi'),
      it('', '', 'Mentaiko mochi cheese monjayaki', '', 'Monjayaki', 'no', 'no', '2025–26 reviews.', 'mentai_mochi'),
      it('', '', 'Staff cooking from the second monja', '¥100', 'Service', 'ask', 'ask', 'July 2026 review.', 'cook_fee'),
    ] }, {
    cuisine: 'もんじゃ焼きと鉄板の居酒屋: 茶碗 (1〜2人) と丼 (3〜4人) のサイズの14種類のもんじゃ — 一番人気の Mentaiko Mochi Cheese、Wagyu Tendon Curry、Ume Tako Pork Nori、ご飯入りのイカスミもんじゃ丼1,738円 (2025〜26年の口コミ)、カレー牛すじもんじゃ、燻製のうずらの卵 (2026年9月)、魚介の料理',
    neighborhood: '四条高倉。烏丸駅から徒歩5分',
    gf_detail: 'グルテンフリー不可。もんじゃの生地は小麦粉 (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。明太子、牛すじ、豚、魚介、チーズのもんじゃ (2025〜26年の口コミ)。',
    notes: '[もんじゃ焼き・四条高倉] 四条高倉近くの明るくにぎやかなもんじゃの居酒屋。Mentaiko Mochi Cheese、ご飯入りのイカスミ、カレー牛すじなど14種類を器のサイズで。最初の1枚はスタッフが焼き、その後は自分で、またはスタッフに100円で。深夜1時まで。3,000〜5,000円ほど。',
  });
}

// ================================================================ 淡兵衛
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26044097/'; const R = TB + 'dtlrvwlst/';
  const D = day(['10:00', '20:00']);
  put({
    id: 'kyoto_tambee_daimaru', name: '淡兵衛 (Tambee)', category: 'OMNI',
    lat: 35.003869, lng: 135.762452, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Nigiri are served already brushed with soy sauce (March 2026 review); ask for plain.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish sushi and sashimi (2026 reviews).',
    hours_raw: 'Daily 10:00–20:00 (L.O. 19:20); closed when Daimaru Kyoto closes (Tabelog). A la carte from 15:00 (April 2026 review). Bookings taken (Tabelog). Cards and e-money (Tabelog). 9 counter seats; non-smoking (Tabelog). In the corner of the takeaway-sushi section on the B1F food floor of Daimaru Kyoto, 2 min from Shijo Stn (Tabelog; March 2026 review).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Daimaru Kyoto B1F, Shijo-Takakura — 2 min from Shijo Stn',
    cuisine: 'Sushi of fish mainly from the waters around Awaji Island: omakase by plates of five pieces — ¥1,320 a plate (April 2026), ¥1,100 (August 2026, review in Japanese), ¥1,485 (August 2026) — with anago, chu-toro, Akashi sea bream and the day\'s fish; an 8-piece nigiri set ¥2,700 at lunch (March 2026); a ¥5,000 course with sea-bream sashimi, simmered tuna and a hand-served sea-urchin roll (March 2026); sashimi platter ¥1,100 (August 2026)',
    website: null, gmaps: gm('淡兵衛 大丸京都店'), menu_url: null,
    notes: '[Sushi counter · Daimaru Kyoto B1F] A quiet nine-seat sushi counter tucked into the Daimaru food hall, run by an Awaji Island seafood company: plates of five nigiri at a time from local fish, set lunches and a ¥5,000 course. About ¥2,000–6,000.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened 22 December 2025 (Tabelog), replacing an earlier sushi counter (April 2026 review). Run by a seafood company from Awaji Island (March 2026 review).',
      philosophy: null,
      specialty: 'Awaji Island fish nigiri.',
      anecdotes: [
        { text: 'A March 2026 diner who read about the opening online had the ¥5,000 course; the sea-urchin roll was served by hand.', source: R + 'B524261656/' },
        { text: 'An April 2026 diner found the fixed order of the five-piece plates a little disappointing; à la carte starts at 3 pm.', source: R + 'B526794042/' },
        { text: 'An August 2026 lunch diner (review in Japanese) found the plate system confusing but the small nigiri very good.', source: R + 'B533936643/' },
      ],
      japanese_sources_summary: '食べログ: 淡兵衛、寿司・魚介料理、下京区四条通高倉西入立売西町79 大丸京都店 B1F、地下鉄四条駅から徒歩約2分、毎日 10:00〜20:00 (L.O. 19:20)、大丸京都店の休みに準ずる、予約可、カード・電子マネー可、9席、禁煙、2025年12月22日オープン。口コミ (2026年8月、日本語): ランチは一皿5貫の寿司 (1,100円) が四皿、システムが少しわかりにくい、寿司は小ぶりだがネタが良い、刺盛も1,100円。口コミ (2026年、英語): Awaji Island の魚介の会社、Akashi の鯛、5,000円のコース、雲丹の手巻き、8貫のにぎり2,700円、一皿1,320円 (2026年4月)・1,485円 (2026年8月)、15時からアラカルト。',
      confidence: 'medium', sources: [TB, R + 'B523126879/', R + 'B524261656/', R + 'B524314565/', R + 'B526581480/', R + 'B526794042/', R + 'B533936643/', R + 'B535274018/', R + 'B536058705/', R + 'B536849190/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter in a department-store food hall.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市下京区四条通高倉西入立売西町79 大丸京都店 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.003869, 135.762452); GSI matched only the town (立売西町), so approximate; 28 m from kyoto_la_risotteria_daimaru in the same store; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B526581480/', R + 'B536058705/', R + 'B533936643/', R + 'B524314565/'],
    price_note: 'Plate prices differ by review date: ¥1,320 (April 2026), ¥1,100 and ¥1,485 (August 2026).', last_checked: TODAY, items: [
      it('', '', 'Omakase plate of five nigiri', '¥1,100–1,485', 'Sushi', 'ask', 'no', 'April and August 2026 reviews.', 'plate5'),
      it('', '', 'Classic 8-piece nigiri set (lunch)', '¥2,700', 'Sushi', 'ask', 'no', 'March 2026 review.', 'set8'),
      it('', '', 'Course', '¥5,000', 'Courses', 'ask', 'no', 'March 2026 review.', 'course'),
      it('', '', 'Sashimi platter', '¥1,100', 'Sashimi', 'ask', 'no', 'August 2026 review.', 'sashimi'),
    ] }, {
    cuisine: 'Awaji Island 周辺の魚を中心にした寿司: 5貫ずつの皿で出るおまかせ — 一皿1,320円 (2026年4月)、1,100円 (2026年8月、日本語の口コミ)、1,485円 (2026年8月) — 穴子、中トロ、Akashi の鯛、その日の魚、昼の8貫のにぎりセット2,700円 (2026年3月)、鯛の刺身、まぐろの煮付け、手渡しの雲丹の手巻きがつく5,000円のコース (2026年3月)、刺盛1,100円 (2026年8月)',
    neighborhood: '大丸京都店 B1F、四条高倉。四条駅から徒歩2分',
    gf_detail: '要確認。にぎりは醤油を塗って出される (2026年3月の口コミ)。何もつけずに頼めるか要確認。',
    vegan_detail: 'ヴィーガン不可。魚の寿司と刺身 (2026年の口コミ)。',
    notes: '[寿司のカウンター・大丸京都店 B1F] 大丸の食品売り場の一角の静かな9席の寿司カウンター。Awaji Island の魚介の会社の店で、地元の魚のにぎりを5貫ずつの皿で、昼のセットや5,000円のコースも。2,000〜6,000円ほど。',
  });
}

save();
