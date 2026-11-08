// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 79.
//   Existence check first (no edit): ChIJezBqHpMJAWARi5BFOEhNolk (Telaviv) is TEL AVIV, Tabelog 26040422, 京都府京都市中京区道祐町135
//   三条食彩ろぉじ — open, latest review April 2026 (B526909819), no closure notice; it shares lot 135 with 風響 (kyoto soyo_ka), so
//   the two are neighbours, not a replacement. Tabelog gives closed Tuesday and 17:30–23:00; the record says daily.
//   + 京都 和食郷土料理 茶寮 けんしろう 京都河原町店 Saryo Kenshiro (private-room izakaya by Keihan Sanjo, from noon) — rest
//   - skip 26043508 DIVINAディビーナ京都 (thin: one review)
//   - skip 26003500 厳選和牛 しゃぶしゃぶ･すき焼き 祇園 牛禅 (six 牛禅 shops)
//   - skip 26001388 札幌かに家 京都店 (chain)
//   + 鉄板居酒屋 GION わ Teppan Izakaya GION Wa (Ebisu-yaki, okonomiyaki and Omi beef on the teppan, east Gion) — rest
//   + うふふBis Ufufu Bis (hidden Japanese-Western izakaya off Karasuma-Bukkoji) — rest
//   + めん坊 四条店 Menbo Shijo (udon sets in the Kyoto Mitsui Building basement) — rest
//   Rest tier, nearest-first from `next rest 2000`. queue-status.jsonl grepped for each brand (けんしろう, DIVINA, 牛禅, かに家, GION わ,
//   うふふ, めん坊): no earlier rulings.
//   Same-name counts first (2026-11-08): 茶寮 けんしろう — two (Kobe Sannomiya 本店 and this one); Tabelog's other Kenshiro names are
//   unrelated or unconfirmed; operator not found — drafted, flagged. GION わ — one. うふふBis — one. めん坊 — two (Shijo and Osaka
//   Tenjinbashi). None of the four is in data/kyoto.json.
//   Charges per Tabelog's Japanese original: けんしろう 「お通し代426円」; GION わ 「なし」; うふふBis and めん坊 none listed. No halal
//   claims; no owner deaths; single-review remarks about other diners, staff looks and a political celebration left out.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-79');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26043508', 'thin: DIVINAディビーナ京都 has a single Tabelog review — not enough sourced detail to draft (https://tabelog.com/en/kyoto/A2601/A260201/26043508/).');
skip('26003500', 'five or more same-name shops: Tabelog lists 牛禅 shops in Kanda, Sapporo (two), Kanazawa, Kyoto Shijo-Karasuma and this Gion one (https://tabelog.com/en/rstLst/?sw=%E7%89%9B%E7%A6%85).');
skip('26001388', 'chain: 札幌かに家 — Tabelog lists 27 かに家/かに本家 listings across Hokkaido, Tokyo, Chiba, Aichi and Kyoto (https://tabelog.com/en/rstLst/?sw=%E6%9C%AD%E5%B9%8C%E3%81%8B%E3%81%AB%E5%AE%B6).');

// ================================================================ 茶寮 けんしろう 京都河原町店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26044630/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '00:00']);
  put({
    id: 'kyoto_saryo_kenshiro_kawaramachi', name: '京都 和食郷土料理 茶寮 けんしろう 京都河原町店 (Saryo Kenshiro Kyoto Kawaramachi)', category: 'OMNI',
    lat: 35.009394, lng: 135.772868, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: kara-age, motsunabe, tare skewers and tamagoyaki with dashi (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: yakitori, sashimi, wagyu, motsunabe and oden (2026 reviews).',
    hours_raw: 'Daily 12:00–0:00 (last orders food 23:00, drinks 23:30) (Tabelog). Appetizer charge ¥426 (Tabelog, Japanese text: 「お通し代426円」). Cards, e-money and QR incl. Alipay and WeChat Pay (Tabelog). 102 seats with private rooms for 2 to over 30 (Tabelog); counter, tables and semi-private noren rooms (September 2026). Shobi Building B1F, 1 min from Keihan Sanjo (Tabelog). Opened 26 March 2026 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sanjo-Ohashi, east bank — Keihan Sanjo',
    cuisine: 'Japanese and regional izakaya with private rooms and all-you-can-drink, open from noon · beef toro bowl ¥1,480; chicken tataki salad ¥680; Hakata motsunabe for two ¥2,560; skewers from ¥150; kara-age ¥780 (October 2026) · Nagoya-style wings, five-kind oden, "magical" tamagoyaki ¥580, chicken wasabi, seafood bowl (November 2026) · wagyu sirloin salad; three-kind nigiri (October 2026) · five-kind sashimi ¥1,680; seared-beef sushi ¥230 (October 2026)',
    website: null, gmaps: gm('茶寮 けんしろう 京都河原町店'), menu_url: TB,
    notes: '[Izakaya · Keihan Sanjo, since 2026] A big basement izakaya a minute from Keihan Sanjo, open from noon to midnight, with private rooms for groups and a long menu of regional dishes — Hakata motsunabe, Nagoya wings, oden, sashimi, yakitori and a fluffy dashi omelette — plus all-you-can-drink. ¥426 appetizer charge.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: a private-room izakaya opened in March 2026; a sister 茶寮 けんしろう is listed in Kobe Sannomiya.',
      philosophy: null, specialty: 'Regional izakaya dishes; private rooms.',
      anecdotes: [
        { text: 'A September 2026 visitor was greeted with a line from the manga the name recalls.', source: R + 'B536484565/' },
        { text: 'A November 2026 repeat visitor rated the "magical" tamagoyaki the standout, gone in no time.', source: R + 'B530122884/' },
        { text: 'An October 2026 diner liked being able to drink from lunchtime.', source: R + 'B537279531/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・焼鳥、東山区大橋町115 尚美ビル B1F、三条駅から徒歩1分、毎日12:00〜24:00 (L.O. 料理23:00、ドリンク23:30)、お通し426円、カード・電子マネー・QR 可、102席、個室 (2〜30名以上)、2026年3月26日オープン。口コミ (2026年9月〜11月、英語): 牛トロ丼1,480円、鶏たたきのサラダ680円、博多もつ鍋2人前2,560円、串150円から、からあげ780円、名古屋風の手羽先、おでん5種、魔法の卵焼き580円、とりわさ、海鮮丼、和牛サーロインのサラダ、握り3種、刺身5種1,680円、炙り牛寿司230円、飲み放題、昼から飲める。',
      confidence: 'medium', sources: [TB, R + 'B527302322/', R + 'B530122884/', R + 'B534914369/', R + 'B536484565/', R + 'B536912516/', R + 'B537028834/', R + 'B537077771/', R + 'B537105930/', R + 'B537279531/', R + 'B537459376/', R + 'B537462063/', R + 'B538142924/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Private rooms suit groups; all-you-can-drink available. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区大橋町115 尚美ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.009394, 135.772868); cross-checked: GSI 京都府京都市東山区大橋町115番地 (lot) 27m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B527302322/', R + 'B538142924/'],
    price_note: 'Prices from October 2026 reviews; ¥426 appetizer charge.', last_checked: TODAY, items: [
      it('', '', 'Hakata motsunabe (for two)', '¥2,560', 'Hot pots', 'no', 'no', 'October 2026.', 'motsunabe'),
      it('', '', 'Beef toro bowl', '¥1,480', 'Rice', 'ask', 'no', 'October 2026.', 'gyutoro_don'),
      it('', '', 'Sashimi platter (5 kinds)', '¥1,680', 'Sashimi', 'ask', 'no', 'October 2026.', 'sashimi'),
      it('', '', '"Magical" tamagoyaki', '¥580', 'Small plates', 'ask', 'no', 'October and November 2026.', 'tamagoyaki'),
      it('', '', 'Kara-age', '¥780', 'Fried', 'no', 'no', 'October 2026.', 'karaage'),
    ] }, {
    cuisine: '個室と飲み放題のある和食と郷土料理の居酒屋、昼から営業・牛トロ丼1,480円、鶏たたきのサラダ680円、博多もつ鍋2人前2,560円、串150円から、からあげ780円 (2026年10月)・名古屋風の手羽先、おでん5種、魔法の卵焼き580円、とりわさ、海鮮丼 (2026年11月)・和牛サーロインのサラダ、握り3種 (2026年10月)・刺身5種1,680円、炙り牛寿司230円 (2026年10月)',
    neighborhood: '三条大橋の東。京阪三条',
    gf_detail: 'グルテンフリーではない。からあげ、もつ鍋、タレの串、出汁の卵焼き (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。焼鳥、刺身、和牛、もつ鍋、おでん (2026年の口コミ)。',
    notes: '[居酒屋・京阪三条、2026年から] 京阪三条駅から1分の地下の大きな居酒屋。昼から深夜0時まで、団体向けの個室。博多もつ鍋、名古屋風の手羽先、おでん、刺身、焼鳥、ふわふわの出汁の卵焼きなど郷土の料理が豊富で、飲み放題も。お通し426円。',
  });
}

// ================================================================ 鉄板居酒屋 GION わ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26034538/'; const R = TB + 'dtlrvwlst/'; const SITE = 'http://www.gionwa.com/index.html';
  const H = day(['17:30', '22:00']); const SU = day(['17:00', '22:00']);
  put({
    id: 'kyoto_teppan_izakaya_gion_wa', name: '鉄板居酒屋 GION わ (Teppan Izakaya GION Wa)', category: 'OMNI',
    lat: 35.004317, lng: 135.777592, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: okonomiyaki, modern-yaki, yakisoba and negiyaki (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: horumon, Omi beef steak, seafood grill, cheese dashimaki (2025–26 reviews).',
    hours_raw: 'Mon and Wed–Sat 17:30–22:00 (last order 21:30); Sun 17:00–22:00; closed Tuesday; lunch irregular, call to check; hours vary over New Year (Tabelog). Reservations accepted; all-you-can-drink courses (April and July 2026). No charge (Tabelog, Japanese text: 「なし」); salad and dessert came complimentary (April 2026). Cards and e-money; no QR (Tabelog). 18 seats: a 6-seat counter and three tables (Tabelog). Moon Beauty Gion Building 3F, east Gion, 9 min from Gion-Shijo (Tabelog). Opened 8 August 2019 (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: SU }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion north side, east — Gion-Shijo',
    cuisine: 'Teppan izakaya: the signature "Ebisu-yaki" and other okonomiyaki with a house sauce blend, and Omi beef steak (Tabelog) · cheese dashimaki, grilled horumon, tonpei-yaki, seafood grill, negiyaki, okonomiyaki (August 2025) · mixed modern-yaki with thick yakisoba (October 2025) · meat dishes; baked potato with butter (January 2026) · Osaka-style okonomiyaki with cheese and mochi ¥1,500; cheese dashimaki ¥800 (April 2026) · course of hamo, octopus and low-temperature chicken steak, fluffy okonomiyaki, yakisoba, negiyaki (July 2026)',
    website: SITE, gmaps: gm('鉄板居酒屋 GION わ'), menu_url: TB,
    notes: '[Teppan izakaya · east Gion, since 2019] A small third-floor teppan counter in the eastern part of Gion where a laid-back master cooks okonomiyaki, the house "Ebisu-yaki", modern-yaki, negiyaki and Omi beef steak in front of you, plus cheese dashimaki and grilled horumon. Courses with all-you-can-drink; no cover charge. Closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Master/owner (unnamed), described as laid-back and hospitable (2025–26 reviews)'], origin: null,
      background: 'Per Tabelog: a teppan izakaya opened in August 2019 in Gion, serving okonomiyaki-style dishes with a house-blended sauce and Omi beef steak.',
      philosophy: null, specialty: 'Ebisu-yaki; okonomiyaki; Omi beef teppan steak.',
      anecdotes: [
        { text: 'An April 2026 diner ordered the cheese dashimaki twice, to the staff’s delight.', source: R + 'B526429746/' },
        { text: 'An October 2025 visitor wondered whether Kyoto okonomiyaki might outdo Osaka after the mixed modern-yaki.', source: R + 'B519089963/' },
        { text: 'A July 2026 group on the all-you-can-drink course singled out the low-temperature chicken steak.', source: R + 'B532364835/' },
      ],
      japanese_sources_summary: '食べログ・公式サイト: 居酒屋・お好み焼き・鉄板焼き、東山区祇園町北側300 ムーンビューティー祇園ビル 3F、京阪祇園四条駅から徒歩9分、月・水〜土17:30〜22:00、日17:00〜22:00、火曜休み、昼は不定期、チャージなし、カード・電子マネー可、18席 (カウンター6、テーブル3)、2019年8月8日オープン、名物「えびす焼き」、特製ブレンドソースのお好み焼き、近江牛のステーキ。口コミ (2023年7月〜2026年7月、英語): チーズだし巻き800円、ホルモン焼き、とん平焼き、海鮮焼き、ねぎ焼き、ミックスモダン焼き、じゃがバター、大阪風のチーズ餅のお好み焼き1,500円、鱧・たこ・低温調理の鶏のステーキのコース、飲み放題、気さくなマスター。',
      confidence: 'medium', sources: [TB, SITE, R + 'B476128230/', R + 'B477454597/', R + 'B486107757/', R + 'B496765644/', R + 'B500486022/', R + 'B501453828/', R + 'B519089963/', R + 'B520047032/', R + 'B521607675/', R + 'B523761035/', R + 'B526429746/', R + 'B532364835/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter seats face the teppan; courses with all-you-can-drink available. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側300 ムーンビューティー祇園ビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.004317, 135.777592); cross-checked: GSI 京都府京都市東山区祇園町北側300番地 (lot) 142m — a large lot; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B526429746/'],
    price_note: 'Prices from an April 2026 review; no cover charge.', last_checked: TODAY, items: [
      it('', '', 'Ebisu-yaki (house okonomiyaki)', '', 'Okonomiyaki', 'no', 'no', 'Tabelog.', 'ebisuyaki'),
      it('', '', 'Osaka-style okonomiyaki with cheese and mochi', '¥1,500', 'Okonomiyaki', 'no', 'no', 'April 2026.', 'okonomiyaki'),
      it('', '', 'Cheese dashimaki', '¥800', 'Teppan', 'ask', 'no', 'April 2026.', 'cheese_dashimaki'),
      it('', '', 'Omi beef steak', '', 'Teppan', 'ask', 'no', 'Tabelog.', 'omi_steak'),
    ] }, {
    cuisine: '鉄板居酒屋。名物の「えびす焼き」など特製ブレンドソースのお好み焼き、近江牛のステーキ (食べログ)・チーズだし巻き、ホルモン焼き、とん平焼き、海鮮焼き、ねぎ焼き、お好み焼き (2025年8月)・太麺の焼きそばのミックスモダン焼き (2025年10月)・肉料理、じゃがバター (2026年1月)・チーズと餅の大阪風お好み焼き1,500円、チーズだし巻き800円 (2026年4月)・鱧、たこ、低温調理の鶏のステーキのコース、ふわふわのお好み焼き、焼きそば、ねぎ焼き (2026年7月)',
    neighborhood: '祇園町北側の東。祇園四条',
    gf_detail: 'グルテンフリーではない。お好み焼き、モダン焼き、焼きそば、ねぎ焼き (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。ホルモン、近江牛のステーキ、海鮮焼き、チーズだし巻き (2025〜2026年の口コミ)。',
    notes: '[鉄板居酒屋・祇園の東、2019年から] 祇園の東側のビル3階の小さな鉄板のカウンター。気さくなマスターが目の前で、お好み焼き、名物の「えびす焼き」、モダン焼き、ねぎ焼き、近江牛のステーキを焼く。チーズだし巻きやホルモン焼きも。飲み放題のコースあり、チャージなし。火曜休み。',
  });
}

// ================================================================ うふふBis
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26006212/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '00:00']);
  put({
    id: 'kyoto_ufufu_bis_bukkoji', name: 'うふふBis (Ufufu Bis)', category: 'OMNI',
    lat: 35.00169, lng: 135.760417, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: yuba gyoza, corn tempura, pasta and pizza (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sashimi, grilled chicken, chicken and kimchi sushi rolls (2025–26 reviews).',
    hours_raw: 'Mon–Sat 17:00–0:00; closed Sunday (open on holidays) and the third Monday (Tabelog). Reservations accepted; whole-shop hire for up to 20 (Tabelog). Cards; no e-money or QR (Tabelog). 26 seats incl. a counter and a shoes-off upstairs room (Tabelog; July 2025). Smoking allowed (Tabelog). Entry limited to university students and older (September 2025). Hidden in a back alley off Karasuma-dori east of Bukkoji, 2 min from Shijo exit 5 — call if lost (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Karasuma-Bukkoji, back alley — Shijo',
    cuisine: 'Japanese-Western izakaya: Japanese dishes at the core with ajillo, pasta, pizza and hamburg steak (February 2026) · yuba gyoza; chicken and kimchi sushi rolls; grilled chicken; peperoncino (September 2025; March 2024) · corn tempura; fried daikon (July 2025) · sashimi of striped jack and grilled hamo (June 2026)',
    website: null, gmaps: gm('うふふBis 京都'), menu_url: TB,
    notes: '[Japanese-Western izakaya · Karasuma-Bukkoji] A hidden izakaya down a back alley near Shijo station, around for about 15 years, with a counter and a shoes-off room upstairs, mixing Japanese dishes with Western ones: yuba gyoza, corn tempura, chicken and kimchi rolls, sashimi, ajillo, pasta and pizza. Adults only (university age and up); one November 2025 group found portions small for sharing. Closed Sunday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: an izakaya hidden in a back alley near Shijo for about 15 years.',
      philosophy: null, specialty: 'Yuba gyoza; Japanese-Western izakaya dishes.',
      anecdotes: [
        { text: 'A September 2025 regular keeps coming back for the yuba gyoza and the chicken and kimchi rolls.', source: R + 'B447993769/' },
        { text: 'A July 2025 reunion group went shoes-off upstairs, recommending the corn tempura.', source: R + 'B510097766/' },
        { text: 'A February 2026 returnee felt immediately at home at the counter.', source: R + 'B523531443/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・海鮮・野菜料理、下京区烏丸通仏光寺東入ル一筋目上ル、地下鉄四条駅5番出口から徒歩2分、月〜土17:00〜24:00、日曜 (祝日は営業) と第3月曜休み、カード可、26席、喫煙可、路地裏で15年。口コミ (2023年4月〜2026年6月、英語): 湯葉餃子、ささみとキムチの巻き寿司、焼き鳥、ペペロンチーノ、とうもろこしの天ぷら、大根の揚げ物、2階は靴を脱ぐ、アヒージョ、パスタ、ピザ、ハンバーグ、シマアジと焼き鱧の刺身、大学生以上のみ、量は少なめ。',
      confidence: 'medium', sources: [TB, R + 'B447993769/', R + 'B463119558/', R + 'B468351032/', R + 'B480394229/', R + 'B493605071/', R + 'B502965344/', R + 'B509108277/', R + 'B510097766/', R + 'B518724336/', R + 'B519024099/', R + 'B523531443/', R + 'B529566045/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Hard to find — call if lost (Tabelog); adults only. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市下京区烏丸通仏光寺東入ル一筋目上ル',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB} (35.001753, 135.760417), offset 7 m south: kyoto_tachinomi_torizuki sat 4.3 m away; the address has no lot number, so no GSI lot cross-check — approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No item prices in the sources; reviewers report ¥6,000–9,999 per person.', last_checked: TODAY, items: [
      it('', '', 'Yuba gyoza', '', 'Small plates', 'no', 'no', 'March 2024; September 2025.', 'yuba_gyoza'),
      it('', '', 'Chicken and kimchi sushi rolls', '', 'Small plates', 'ask', 'no', 'September 2025.', 'sasami_kimchi'),
      it('', '', 'Corn tempura', '', 'Fried', 'no', 'ask', 'July 2025.', 'corn_tempura'),
    ] }, {
    cuisine: '和洋の居酒屋。和食を中心に、アヒージョ、パスタ、ピザ、ハンバーグも (2026年2月)・湯葉餃子、ささみとキムチの巻き寿司、焼き鳥、ペペロンチーノ (2025年9月、2024年3月)・とうもろこしの天ぷら、大根の揚げ物 (2025年7月)・シマアジと焼き鱧の刺身 (2026年6月)',
    neighborhood: '烏丸仏光寺、路地裏。四条',
    gf_detail: 'グルテンフリーではない。湯葉餃子、とうもろこしの天ぷら、パスタ、ピザ (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。刺身、焼き鳥、ささみとキムチの巻き寿司 (2025〜2026年の口コミ)。',
    notes: '[和洋の居酒屋・烏丸仏光寺] 四条駅近くの路地裏に15年ほどある隠れ家の居酒屋。カウンターと、靴を脱いで上がる2階の部屋。湯葉餃子、とうもろこしの天ぷら、ささみとキムチの巻き寿司、刺身に、アヒージョ、パスタ、ピザなど洋の料理も。大学生以上のみ。分け合うには量が少ないという声も。日曜休み。',
  });
}

// ================================================================ めん坊 四条店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26009338/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:00', '22:30']); const WE = day(['11:30', '22:30']);
  put({
    id: 'kyoto_menbo_shijo', name: 'めん坊 四条店 (Menbo Shijo)', category: 'OMNI',
    lat: 35.003986, lng: 135.760024, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: an udon shop; every set comes with a small udon (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: udon broth, aji fry, grilled pork, bonito tataki (2026 reviews).',
    hours_raw: 'Mon–Fri 11:00–22:30; Sat–Sun 11:30–22:30; closed 31 December and 1 January (Tabelog). Online reservations, incl. same day (November 2026). Cash and QR (PayPay; Rakuten Pay added by October 2026); no cards or e-money (Tabelog; October 2026). 36 seats: counter, tables and sunken kotatsu (Tabelog). Non-smoking (Tabelog). Wheelchair accessible (Tabelog). Kyoto Mitsui Building B1F at Shijo-Karasuma, 1 min from Hankyu Karasuma and Shijo (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shijo-Karasuma, Kyoto Mitsui Building B1F — Karasuma / Shijo',
    cuisine: 'Udon shop with set meals, each with a small udon · Tosa set with bonito tataki and onsen egg ¥1,300 (March 2026) · grilled pork rice bowl with soft-boiled egg and small udon (June 2026) · aji fry set with macaroni salad and small udon ¥1,150 (October 2026) · oroshi bukkake udon (October 2026) · yuba ankake udon ¥1,000 (November 2026)',
    website: 'http://www.menbo-foods.com/shijyo/index.html', gmaps: gm('めん坊 四条店'), menu_url: TB,
    notes: '[Udon · Shijo-Karasuma] A busy, good-value udon shop in the basement of the Kyoto Mitsui Building at Shijo-Karasuma, with a long menu of set meals — Tosa bonito tataki, aji fry, grilled-pork bowl — each with a small udon, plus yuba ankake and oroshi bukkake udon. Open daily to 22:30; quick service; PayPay or cash.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog and reviews: an udon restaurant in the Kyoto Mitsui Building basement, popular since before the pandemic; a sister めん坊 is listed in Osaka Tenjinbashi.',
      philosophy: null, specialty: 'Udon set meals.',
      anecdotes: [
        { text: 'A March 2026 diner found a generous bonito tataki in the ¥1,300 Tosa set with a small udon.', source: R + 'B524599681/' },
        { text: 'An October 2026 lunch-seeker escaped the Kyoto Station crowds for the quieter Mitsui Building basement.', source: R + 'B538114265/' },
        { text: 'A November 2026 diner booked online the same day and was seated at once despite a queue.', source: R + 'B538816632/' },
      ],
      japanese_sources_summary: '食べログ: うどん・食堂・うどんすき、下京区四条通烏丸東入長刀鉾町8 京都三井ビル B1F、阪急烏丸駅・地下鉄四条駅から徒歩1分、月〜金11:00〜22:30、土日11:30〜22:30、12月31日・1月1日休み、現金・PayPay、36席 (カウンター、テーブル、掘りごたつ)、禁煙、車椅子可。口コミ (2026年3月〜11月、英語): 土佐定食 (かつおのたたきと温泉卵) 1,300円、焼豚丼、あじフライ定食1,150円、どの定食にも小うどん、おろしぶっかけうどん、湯葉あんかけうどん1,000円、当日のネット予約、Rakuten Pay も可に。',
      confidence: 'medium', sources: [TB, R + 'B524599681/', R + 'B537379161/', R + 'B538114265/', R + 'B538816632/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set meals are the easy order; book online at busy times. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区四条通烏丸東入長刀鉾町8',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.003986, 135.760024); cross-checked: GSI 京都府京都市下京区長刀鉾町8番地 (lot) 28m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B524599681/', R + 'B538816632/'],
    price_note: 'Prices from March–November 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Tosa set (bonito tataki, onsen egg, small udon)', '¥1,300', 'Sets', 'no', 'no', 'March 2026.', 'tosa_set'),
      it('', '', 'Aji fry set (small udon)', '¥1,150', 'Sets', 'no', 'no', 'October 2026.', 'aji_fry'),
      it('', '', 'Yuba ankake udon', '¥1,000', 'Udon', 'no', 'ask', 'November 2026.', 'yuba_ankake'),
      it('', '', 'Oroshi bukkake udon', '', 'Udon', 'no', 'no', 'October 2026.', 'oroshi_bukkake'),
    ] }, {
    cuisine: 'どの定食にも小うどんが付くうどんの店・かつおのたたきと温泉卵の土佐定食1,300円 (2026年3月)・半熟卵の焼豚丼と小うどん (2026年6月)・マカロニサラダと小うどんのあじフライ定食1,150円 (2026年10月)・おろしぶっかけうどん (2026年10月)・湯葉あんかけうどん1,000円 (2026年11月)',
    neighborhood: '四条烏丸、京都三井ビル地下1階。烏丸・四条',
    gf_detail: 'グルテンフリーではない。うどんの店で、どの定食にも小うどん (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。うどんの出汁、あじフライ、焼豚、かつおのたたき (2026年の口コミ)。',
    notes: '[うどん・四条烏丸] 四条烏丸の京都三井ビル地下の、にぎやかでお得なうどんの店。かつおのたたきの土佐定食、あじフライ、焼豚丼など、どれにも小うどんが付く定食が豊富で、湯葉あんかけやおろしぶっかけうどんも。毎日22時半まで。提供が早い。現金か PayPay。',
  });
}

save();
