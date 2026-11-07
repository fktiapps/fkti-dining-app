// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 51.
//   + THE GREEN (homemade-sausage café with English breakfast, Teramachi Imadegawa) — core
//   + カフェコゾラ cafe kozora (couple-run Italian café, Karasuma Imadegawa) — core
//   + 柳園 Ryuen (long-running Chinese set-meal diner by Doshisha University) — core
//   + 美龍 Mei Ron (one-chef Cantonese dim sum restaurant, Enmachi) — core
//   - skip 26033056 京都たこ壱 堀川今出川店 (chain)
//   - skip 26033998 ラーメン魁力屋 西大路西ノ京店 (chain)
//   Core taken nearest-first; the lane's notable list is empty.
//   Same-name counts first, per brand or operator (2026-11-07): THE GREEN — one. cafe kozora — one. 柳園 — one in Kyoto (other
//   "Ryuen" hits are unrelated). 美龍 — one (Mei Ron). None is in data/kyoto.json: grep by name and address (扇町281-1 パレスハイツ,
//   堀出シ町279, 柳図子町334, 西ノ京北壺井町88-1 二条プラザ) found none.
//   Service charges per Tabelog: none listed for any of the four. No halal claims; no owner deaths; no single-review remarks
//   about other diners kept.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-51');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26033056', 'chain: Kyoto Tako Ichi — Tabelog lists Tako Ichi shops at Shijo Aburanokoji, Horikawa Imadegawa, Tachibana, JR Takatsuki, Enmachi, Nagaoka-Tenjin, Shiinamachi and more (https://tabelog.com/en/rstLst/?sw=%E3%81%9F%E3%81%93%E5%A3%B1).');
skip('26033998', 'chain: Kairikiya — Tabelog lists Kairikiya ramen shops in Shibuya, Gotanda, Osaka Dome City, Nagoya Dome and many more (https://tabelog.com/en/rstLst/?sw=%E9%AD%81%E5%8A%9B%E5%B1%8B).');

// ================================================================ THE GREEN
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26004346/'; const R = TB + 'dtlrvwlst/';
  const H = day(['08:30', '11:00'], ['12:00', '17:00']);
  put({
    id: 'kyoto_the_green_teramachi', name: 'THE GREEN', category: 'OMNI',
    lat: 35.027559, lng: 135.767926, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: hot dogs, baguette sandwiches and plates served with bread (2023–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a homemade-sausage café — sausage plates, hot dogs, English breakfast (2023–26 reviews).',
    hours_raw: 'Mon, Tue and Thu–Sun: breakfast 8:30–11:00, lunch and café 12:00–17:00; closed Wednesday; hours may change, and opening days are posted on Instagram (Tabelog; March 2026). Reservations accepted (Tabelog). Cash only — no cards, e-money or QR (Tabelog). 18 seats: a counter of 2 and tables (Tabelog). Smoking is allowed at the counter only (Tabelog). On Teramachi-dori south of Imadegawa, on the east side of the street to the Imperial Palace (Tabelog; November 2023).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Teramachi Imadegawa, by the Imperial Palace — Demachiyanagi',
    cuisine: 'Homemade sausages, British-style breakfast and café lunches (2023–26 reviews) · homemade sausage with mashed potatoes, salad and bread ¥1,400 (April 2023); basil sausage with a baguette sandwich of spicy chicken, eggplant and lemon (December 2024) · homemade sausage hot dog with chili con carne or salsa, with chips (March and October 2026) · full English breakfast, large portions (February 2024) · hot dog and ginger ale (August 2020)',
    website: null, gmaps: gm('THE GREEN 寺町今出川'), menu_url: TB,
    notes: '[Café · Teramachi Imadegawa, homemade sausages and English breakfast] A small café by the Imperial Palace with a punk-and-art London feel, known for juicy homemade sausages with a mound of mashed potato, chili or salsa hot dogs with chips, and a big English breakfast from 8:30. Cash only; closed Wednesday — check Instagram for opening days.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: a café and European restaurant near the Imperial Palace. An August 2024 review describes a 1970s–80s London punk and art atmosphere and a pub brunch.',
      philosophy: null, specialty: 'Homemade sausages; English breakfast.',
      anecdotes: [
        { text: 'A February 2024 visitor came for the English breakfast and warned that the portion is big.', source: R + 'B497462023/' },
        { text: 'A March 2026 walker by the Imperial Palace had the chili con carne hot dog and recommends checking Instagram before going.', source: R + 'B524154916/' },
        { text: 'A May 2025 diner expected a fatty sausage and found it was not, and called the mashed potatoes irresistible.', source: R + 'B534054078/' },
      ],
      japanese_sources_summary: '食べログ: カフェ・ヨーロッパ料理、上京区寺町今出川下ル扇町281-1 パレスハイツ 1F、月火木金土日8:30〜11:00と12:00〜17:00、水曜休み、予約可、現金のみ、18席 (カウンター2、テーブル)、カウンターのみ喫煙可。口コミ (2020年8月〜2026年10月、英語): 自家製ソーセージとマッシュポテト、サラダ、パン1,400円、バジルのソーセージ、バゲットサンド、チリコンカンやサルサのホットドッグとポテト、イングリッシュブレックファスト、ロンドンのパンクとアートの雰囲気、営業日はインスタグラムで。',
      confidence: 'medium', sources: [TB, R + 'B463717812/', R + 'B473993414/', R + 'B488087445/', R + 'B489837921/', R + 'B491847604/', R + 'B493314587/', R + 'B494805491/', R + 'B497462023/', R + 'B497959541/', R + 'B524154916/', R + 'B534054078/', R + 'B536588954/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Bring cash; check Instagram for opening days; smoking only at the counter. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区寺町今出川下ル扇町281-1 パレスハイツ 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.027559, 135.767926); cross-checked: GSI 京都府京都市上京区扇町281番地 (lot) 116m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B463717812/'],
    price_note: 'One price from an April 2023 review; cash only.', last_checked: TODAY, items: [
      it('', '', 'Homemade sausage with mashed potatoes, salad and bread', '¥1,400', 'Plates', 'no', 'no', 'April 2023.', 'sausage_plate'),
      it('', '', 'Homemade sausage hot dog (chili con carne or salsa) with chips', '', 'Hot dogs', 'no', 'no', 'March and October 2026.', 'hot_dog'),
      it('', '', 'English breakfast', '', 'Breakfast', 'no', 'no', 'February 2024.', 'english_breakfast'),
    ] }, {
    cuisine: '自家製ソーセージ、英国風の朝食、カフェのランチ (2023〜2026年の口コミ)・自家製ソーセージにマッシュポテト、サラダ、パン1,400円 (2023年4月)、バジルのソーセージとスパイシーチキン、なす、レモンのバゲットサンド (2024年12月)・チリコンカンかサルサの自家製ソーセージのホットドッグとポテト (2026年3月・10月)・量の多いイングリッシュブレックファスト (2024年2月)・ホットドッグとジンジャーエール (2020年8月)',
    neighborhood: '寺町今出川、御所のそば。出町柳',
    gf_detail: 'グルテンフリーではない。ホットドッグ、バゲットサンド、パン付きのプレート (2023〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。自家製ソーセージのカフェ。ソーセージのプレート、ホットドッグ、イングリッシュブレックファスト (2023〜2026年の口コミ)。',
    notes: '[カフェ・寺町今出川、自家製ソーセージと英国の朝食] 御所のそば、ロンドンのパンクとアートの雰囲気の小さなカフェ。ジューシーな自家製ソーセージとたっぷりのマッシュポテト、チリやサルサのホットドッグとポテト、8時半からのボリュームあるイングリッシュブレックファスト。現金のみ、水曜休み、営業日はインスタグラムで確認を。',
  });
}

// ================================================================ カフェコゾラ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26018446/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:00'], ['18:00', '23:30']);
  put({
    id: 'kyoto_cafe_kozora_imadegawa', name: 'カフェコゾラ (cafe kozora)', category: 'OMNI',
    lat: 35.029237, lng: 135.756365, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Pasta and pizza lead the menu, with carpaccio, salads and risotto too (2024–25 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood and meat pasta, carpaccio, seafood salad (2024–25 reviews).',
    hours_raw: 'Lunch 11:30–15:00 (last order 14:30), dinner 18:00–23:30 (last order 22:30); closed irregularly — a calendar by the entrance shows the open days (Tabelog; December 2024). Reservations accepted (Tabelog). Cash only — no cards or e-money (Tabelog). 16 seats: two tables for four, a sofa seat and a counter (Tabelog; May 2023). Non-smoking (Tabelog). On Imadegawa-dori, 4 min west of Imadegawa Stn, opposite the Kamigyo ward office (Tabelog; May 2023).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Imadegawa-dori, west of Karasuma — 4 min from Imadegawa Stn',
    cuisine: 'A long menu of pasta, pizza and small plates, plus coffee and sweets (2023–26 reviews) · tomato cream pasta with blue crab; monthly pastas such as arrabbiata, meat sauce, and Kujo green onion and oyster peperoncino (December 2024) · chilled Genovese pasta in summer; seafood salad (September 2025) · octopus carpaccio, risotto, pizza (November 2024) · coffee and sweets (May 2026)',
    website: null, gmaps: gm('cafe kozora 今出川'), menu_url: TB,
    notes: '[Italian café · Imadegawa-dori, a couple-run neighbourhood favourite] A cosy 16-seat café-trattoria on Imadegawa-dori run by a couple, with sofa seats behind a glass front: a long list of pasta — monthly specials with Kyoto ingredients, a summer chilled Genovese — pizza, carpaccio and risotto, and coffee and sweets in between. Cash only; check the door calendar for open days.',
    chef_bio: { chef_name: null, roles: ['Couple (unnamed) running the café (2023–26 reviews)'], origin: null,
      background: 'A May 2023 review describes an Italian café run by a couple, then nearly twelve years in business. Reviews from 2024 and 2026 also describe it as couple-run.',
      philosophy: null, specialty: 'Pasta; monthly specials.',
      anecdotes: [
        { text: 'A May 2023 diner came for dinner with family of four and came back alone four days later.', source: R + 'B466031189/' },
        { text: 'A September 2025 regular on about a fifth visit ordered the chilled Genovese pasta three times that summer.', source: R + 'B513657696/' },
        { text: 'A May 2026 first-timer wanted to try everything on the menu and warmed to both owners.', source: R + 'B528392085/' },
      ],
      japanese_sources_summary: '食べログ: カフェ・パスタ・ピザ、上京区今出川通室町西入堀出シ町279、地下鉄今出川駅から西へ徒歩4分、11:30〜15:00 (L.O. 14:30)、18:00〜23:30 (L.O. 22:30)、不定休、予約可、現金のみ、16席、禁煙。口コミ (2021年12月〜2026年5月、英語): 夫婦で営む、2023年7月で12年、入口の横に営業日のカレンダー、ワタリガニのトマトクリームパスタ、月替わりのパスタ (アラビアータ、ミートソース、Kujo のねぎと牡蠣のペペロンチーノ)、夏の冷製ジェノベーゼ、海鮮サラダ、タコのカルパッチョ、リゾット、ピザ、コーヒーと甘いもの。',
      confidence: 'medium', sources: [TB, R + 'B280465836/', R + 'B443868325/', R + 'B466031189/', R + 'B488553411/', R + 'B493340356/', R + 'B494900233/', R + 'B497108557/', R + 'B505706669/', R + 'B513657696/', R + 'B520989714/', R + 'B527300198/', R + 'B528392085/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Check the calendar by the door for open days; bring cash. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市上京区今出川通室町西入堀出シ町279',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through May 2026.' },
    pin_source: `Tabelog ${TB} (35.029237, 135.756365); cross-checked: GSI 京都府京都市上京区堀出シ町279番地 (lot) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B497108557/', R + 'B513657696/'],
    price_note: 'No item prices found in the sources; cash only.', last_checked: TODAY, items: [
      it('', '', 'Tomato cream pasta with blue crab', '', 'Pasta', 'no', 'no', 'December 2024.', 'crab_pasta'),
      it('', '', 'Chilled Genovese pasta', '', 'Pasta', 'no', 'ask', 'Summer; September 2025.', 'genovese_fredda'),
      it('', '', 'Seafood salad', '', 'Salads', 'ask', 'no', 'September 2025.', 'seafood_salad'),
      it('', '', 'Octopus carpaccio', '', 'Antipasti', 'ask', 'no', 'November 2024.', 'tako_carpaccio'),
    ] }, {
    cuisine: '品数の多いパスタ、ピザ、小皿、コーヒーと甘いもの (2023〜2026年の口コミ)・ワタリガニのトマトクリームパスタ、アラビアータ、ミートソース、Kujo のねぎと牡蠣のペペロンチーノなど月替わりのパスタ (2024年12月)・夏の冷製ジェノベーゼ、海鮮サラダ (2025年9月)・タコのカルパッチョ、リゾット、ピザ (2024年11月)・コーヒーと甘いもの (2026年5月)',
    neighborhood: '今出川通、烏丸の西。今出川駅から徒歩4分',
    gf_detail: '要確認。パスタとピザが中心で、カルパッチョ、サラダ、リゾットもある (2024〜2025年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。魚介や肉のパスタ、カルパッチョ、海鮮サラダ (2024〜2025年の口コミ)。',
    notes: '[イタリアンのカフェ・今出川通、夫婦で営む町の人気店] 今出川通の夫婦で営む16席のカフェ。ガラス張りの店内にソファ席も。京都の食材の月替わりや夏の冷製ジェノベーゼなど品数の多いパスタ、ピザ、カルパッチョ、リゾット、合間にはコーヒーと甘いもの。現金のみ、営業日は入口のカレンダーで。',
  });
}

// ================================================================ 柳園
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26000212/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:00'], ['17:00', '20:30']);
  put({
    id: 'kyoto_ryuen_karasuma', name: '柳園 (Ryuen)', category: 'OMNI',
    lat: 35.032295, lng: 135.759544, cuisine_type: 'shokudo',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: ramen, cold noodles and fried chicken sets (2022–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork miso soup, chashu ramen, crab omelette, fried chicken (2022–26 reviews).',
    hours_raw: 'Mon–Sat 11:30–14:00 and 17:00–20:30; closed Sunday and holidays; hours may change (Tabelog). Noodles can sell out by 13:00 (November 2023). Cash only — no cards, e-money or QR (Tabelog). Shared tables (January 2022). Non-smoking (Tabelog). On Karasuma-dori north of Kamidachiuri, next to Doshisha University and near Shokokuji, about 4 min from Imadegawa Stn (Tabelog; 2017–23 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Karasuma Imadegawa, next to Doshisha University',
    cuisine: 'Chinese-style set meals at student prices (2022–26 reviews) · fried-rice set of shoyu ramen and a small fried rice ¥900–950 (January 2022 – February 2023) · pork miso soup set, large with egg ¥880 (January 2026) · fried chicken set ¥820 (November 2023) · mapo tofu set, curry fried rice (September 2024) · crab omelette set (June 2025) · cold noodles with chashu, egg and cucumber in summer (July 2026)',
    website: null, gmaps: gm('柳園 烏丸今出川 同志社'), menu_url: TB,
    notes: '[Chinese set meals · Karasuma Imadegawa, the Doshisha canteen] A long-running, remodelled Chinese-style diner beside Doshisha University, full at lunch with students, staff and office workers: ramen with fried rice, a big bowl of pork miso soup with rice, fried chicken, mapo tofu and summer cold noodles, mostly under ¥1,000. Staff say no chemical seasonings are used. Cash only; closed Sunday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'A January 2022 review recalls eating here some 30 years earlier and notes the shop has since been remodelled. A June 2025 visitor heard the staff tell a customer that the kitchen uses natural flavours and no chemical seasonings.',
      philosophy: 'Natural flavours, no chemical seasonings (staff, as heard in June 2025).', specialty: 'Fried-rice and ramen sets; pork miso soup set.',
      anecdotes: [
        { text: 'A January 2022 visitor returning after 30 years ordered the old fried-rice set — about ¥650 then, ¥900 now.', source: R + 'B447900760/' },
        { text: 'A January 2026 office worker was surprised the large pork miso soup came in a rice bowl.', source: R + 'B502572121/' },
        { text: 'A July 2026 regular came back for the cold noodles in the heat and was served within ten minutes despite a full room.', source: R + 'B507883602/' },
      ],
      japanese_sources_summary: '食べログ: 食堂・ラーメン、上京区烏丸通上立売上ル柳図子町334、今出川駅から約260m、月〜土11:30〜14:00と17:00〜20:30、日祝休み、現金のみ、禁煙。口コミ (2017年12月〜2026年7月、英語): 同志社大学の隣、中華の定食、炒飯セット (醤油ラーメンと小さな炒飯) 900〜950円、豚汁定食の大盛りと卵880円、唐揚げ定食820円、麻婆豆腐の定食、カレー炒飯、かに玉の定食、夏の冷麺、昼は学生や教職員で満席、改装済み、化学調味料を使わないと店の人が話していた。',
      confidence: 'medium', sources: [TB, R + 'B314734502/', R + 'B447900760/', R + 'B454280131/', R + 'B460475813/', R + 'B473993794/', R + 'B491897796/', R + 'B492552575/', R + 'B495502040/', R + 'B501727262/', R + 'B502572121/', R + 'B504180916/', R + 'B507883602/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Share a table at lunch; noodles can sell out by 13:00; cash only. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区烏丸通上立売上ル柳図子町334',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.032295, 135.759544); cross-checked: GSI 京都府京都市上京区柳図子町334番地 (lot) 69m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B460475813/', R + 'B473993794/', R + 'B502572121/'],
    price_note: 'Prices from 2023 and January 2026 reviews; cash only.', last_checked: TODAY, items: [
      it('', '', 'Fried-rice set (shoyu ramen and small fried rice)', '¥950', 'Sets', 'no', 'no', 'February 2023.', 'chahan_set'),
      it('', '', 'Pork miso soup set (large, with egg)', '¥880', 'Sets', 'no', 'no', 'January 2026.', 'tonjiru_set'),
      it('', '', 'Fried chicken set', '¥820', 'Sets', 'no', 'no', 'November 2023.', 'karaage_set'),
      it('', '', 'Cold noodles', '', 'Noodles', 'no', 'no', 'Summer; July 2026.', 'hiyashi_chuka'),
    ] }, {
    cuisine: '学生価格の中華の定食 (2022〜2026年の口コミ)・醤油ラーメンと小さな炒飯の炒飯セット900〜950円 (2022年1月〜2023年2月)・豚汁定食の大盛りと卵880円 (2026年1月)・唐揚げ定食820円 (2023年11月)・麻婆豆腐の定食、カレー炒飯 (2024年9月)・かに玉の定食 (2025年6月)・夏はチャーシュー、錦糸卵、きゅうりの冷麺 (2026年7月)',
    neighborhood: '烏丸今出川、同志社大学の隣',
    gf_detail: 'グルテンフリーではない。ラーメン、冷麺、唐揚げの定食 (2022〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。豚汁、チャーシューのラーメン、かに玉、唐揚げ (2022〜2026年の口コミ)。',
    notes: '[中華の定食・烏丸今出川、同志社の食堂] 同志社大学の隣にある、改装した長く続く中華の食堂。昼は学生、教職員、会社員で満席。ラーメンと炒飯、丼に入った豚汁定食、唐揚げ、麻婆豆腐、夏の冷麺など、ほとんどが1,000円以下。店の人は化学調味料を使わないと話す。現金のみ、日曜休み。',
  });
}

// ================================================================ 美龍
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26022592/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:30'], ['17:30', '22:00']);
  put({
    id: 'kyoto_mei_ron_enmachi', name: '美龍 (Mei Ron)', category: 'OMNI',
    lat: 35.015492, lng: 135.731131, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: dim sum wrappers, buns, dandan noodles and battered sweet-and-sour pork (2024–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: shrimp and pork dim sum, char siu buns, chicken congee (2024–26 reviews).',
    hours_raw: 'Lunch 11:30–14:30 (last order 14:00), dinner 17:30–22:00 (last order 21:30); closed Tuesday (Tabelog). Reservations accepted; courses by reservation (Tabelog; April 2024). Cards (VISA, Master, JCB, AMEX, Diners), e-money and QR incl. PayPay and Alipay (Tabelog). 13 seats: a counter of 5 and tables for 8 (Tabelog). Non-smoking (Tabelog). Restroom in the building, not in the shop (October 2024). Nijo Plaza 1F, 5 min from JR Enmachi, 7 min from Nishioji-Oike (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Enmachi, between Enmachi and Nishioji-Oike',
    cuisine: 'Cantonese dim sum and Chinese set meals from one chef (2024–26 reviews) · lunch sets with three dim sum, soup and rice: beef with oyster sauce ¥950, sweet-and-sour pork ¥1,000 (November 2025) · dim sum set ¥1,200: four steamed dim sum, a daily dish, century-egg and chicken congee and two desserts (May 2026) · dandan noodle set, fried rice instead of rice +¥250 (March and June 2026) · shrimp and chive dumplings, ham sui gok, radish cake, spring rolls (May 2024); shrimp shumai (August 2026) · Cantonese buns made with a fermented "Lao Mian" dough: char siu bao, meat bun (dinner menu, May 2026) · courses and a Shaoxing wine tasting set (April 2024)',
    website: null, gmaps: gm('美龍 円町 点心'), menu_url: TB,
    notes: '[Cantonese dim sum · Enmachi, a one-chef local] A 13-seat Chinese restaurant in a small building near Enmachi where the owner-chef cooks alone at the wok: lunch sets of a main dish with three dim sum from about ¥1,000, a ¥1,200 dim sum set with congee, and at night Cantonese buns, shumai and courses with Shaoxing wine. Closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed), cooking alone (2024–26 reviews)'], origin: null,
      background: 'Reviews from May 2024 to April 2026 describe the owner-chef running the restaurant alone, sometimes joined by one more staff member, cooking dim sum and wok dishes in view of the counter.',
      philosophy: null, specialty: 'Cantonese dim sum and buns.',
      anecdotes: [
        { text: 'A May 2024 diner listened to the clang of wok and ladle as the head chef worked alone, and found the appetisers worthy of a high-end Chinese restaurant.', source: R + 'B485133842/' },
        { text: 'An August 2026 regular makes it the usual second stop after drinks in Enmachi; the yakisoba was a little oily but the shrimp shumai outstanding.', source: R + 'B512243210/' },
        { text: 'A May 2026 lunch visitor found the dinner menu promising Cantonese buns on a fermented dough and vowed to come back at night.', source: R + 'B528760832/' },
      ],
      japanese_sources_summary: '食べログ: 飲茶・点心、中京区西ノ京北壺井町88-1 二条プラザ 1F、JR円町駅から徒歩5分、西大路御池駅から徒歩7分、11:30〜14:30 (L.O. 14:00)、17:30〜22:00 (L.O. 21:30)、火曜休み、予約可、カード・電子マネー・QR 可、13席 (カウンター5、テーブル8)、禁煙。口コミ (2024年4月〜2026年10月、英語): 店主が一人で調理、点心3種とスープとご飯の定食 (牛肉のオイスターソース950円、酢豚1,000円)、点心セット1,200円 (蒸し点心4種、日替わり、ピータンと鶏の粥、デザート2種)、担々麺のセット、炒飯に変更+250円、海老とニラの餃子、Ham Sui Gok、大根餅、春巻、海老焼売、夜は "Lao Mian" の生地の広東式の包子、コースと紹興酒の飲み比べ。',
      confidence: 'medium', sources: [TB, R + 'B484407534/', R + 'B485133842/', R + 'B494245177/', R + 'B504361035/', R + 'B512243210/', R + 'B515239115/', R + 'B517444147/', R + 'B523996076/', R + 'B526213137/', R + 'B528760832/', R + 'B530083557/', R + 'B538065555/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Sit at the counter to watch the wok; lunch sets are the easy order; book courses ahead. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区西ノ京北壺井町88-1 二条プラザ 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.015492, 135.731131); cross-checked: GSI 京都府京都市中京区西ノ京北壺井町88番地 (lot) 53m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B515239115/', R + 'B517444147/', R + 'B528760832/', R + 'B530083557/'],
    price_note: 'Lunch prices from November 2025 – June 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Beef with oyster sauce set (with three dim sum and soup)', '¥950', 'Lunch', 'no', 'no', 'November 2025.', 'beef_oyster_set'),
      it('', '', 'Sweet-and-sour pork set (with three dim sum, rice and soup)', '¥1,000', 'Lunch', 'no', 'no', 'November 2025.', 'subuta_set'),
      it('', '', 'Dim sum set (four dim sum, daily dish, congee, two desserts)', '¥1,200', 'Lunch', 'no', 'no', 'May 2026.', 'dimsum_set'),
      it('', '', 'Dandan noodle set (fried rice +¥250)', '', 'Lunch', 'no', 'no', 'March and June 2026.', 'tantan_set'),
      it('', '', 'Shrimp shumai', '', 'Dim sum', 'no', 'no', 'August 2026.', 'ebi_shumai'),
    ] }, {
    cuisine: '一人の料理人による広東の点心と中華の定食 (2024〜2026年の口コミ)・点心3種、スープ、ご飯付きの昼の定食: 牛肉のオイスターソース950円、酢豚1,000円 (2025年11月)・点心セット1,200円: 蒸し点心4種、日替わり、ピータンと鶏の粥、デザート2種 (2026年5月)・担々麺のセット、ご飯を炒飯にして+250円 (2026年3月・6月)・海老とニラの餃子、Ham Sui Gok、大根餅、春巻 (2024年5月)、海老焼売 (2026年8月)・発酵生地 "Lao Mian" の広東式の包子: チャーシューまん、肉まん (夜のメニュー、2026年5月)・コースと紹興酒の飲み比べ (2024年4月)',
    neighborhood: '円町、円町と西大路御池の間',
    gf_detail: 'グルテンフリーではない。点心の皮、包子、担々麺、衣の酢豚 (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。海老や豚の点心、チャーシューまん、鶏の粥 (2024〜2026年の口コミ)。',
    notes: '[広東の点心・円町、料理人一人の町の店] 円町近くの小さなビルにある13席の中華。店主が一人で中華鍋を振る。昼は主菜と点心3種の定食が約1,000円から、粥付きの点心セット1,200円、夜は広東式の包子、焼売、紹興酒とコース。火曜休み。',
  });
}

save();
