// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 61.
//   + 鮨嵩 Sushi Taka (small, friendly sushi counter off Yamato-oji in Gion)
//   + 焼肉 マウム 京都木屋町店 Yakiniku Maumu, Kyoto Kiyamachi (A5 Wagyu yakiniku to 3:00; 株式会社ＧＭＩ, sister of BISTRO MAUMU)
//   + 酒肴いさ味 Shusai Isami (tatami izakaya for fish and suppon on Kiyamachi, open to 5:00)
//   + 麺酒場 ハコ屋 Men Sakaba Hakoya (late-night niku-soba-style ramen bar)
//   - 餃子のかっちゃん 四条店, しゃぶしゃぶ すき焼き 食べ放題 和牛と豚 三条河原町店: skipped (reasons below).
//   Rest list (`queue.mjs kyoto-missed next rest 2000`), nearest-first, lane ids 26001122, 26041520, 26031884,
//   26039492, 26045132 (skipped), 26042624 (skipped). 祇園おばんざい ぎんや (26040620) is next and left for the
//   following batch.
//   None of the four drafted is in data/kyoto.json by name (鮨嵩/Sushi Taka, 焼肉マウム/Yakiniku Maumu, いさ味/Isami, ハコ屋/
//   Hakoya) or address (大和町21-1, 北車屋町265-1 UGKビル1F, 北車屋町265-1 (2F), 材木町187-1).
//   Same-name count (same brand or operator only): 焼肉 マウム — invoice holder 株式会社ＧＭＩ (T6130001067887), which per
//   the BISTRO MAUMU record in data also runs 焼肉マウム (Gion) and 居酒屋 マウム; our crawl has those two — a local group of
//   four, drafted as a sister concept and flagged. 鮨嵩, いさ味, ハコ屋 — one shop each; いさ味's invoice holder is
//   株式会社いさむ at the shop's address. Large-parent list checked.
//   Service charges, checked against Tabelog's Japanese original: いさ味 お通し代 お一人様550円; none listed for the other
//   three.
//   Other-diner remarks (Greg 2026-11-06): single-review remarks about other customers left out (鮨嵩 June 2025,
//   マウム October 2026).
//   Halal: no operator in this batch claims halal.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-61');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26045132', '餃子のかっちゃん 四条店: chain — Tabelog’s name search lists Gyoza no Kacchan shops at Sapporo, Osaka Ekimae Dai-2 Building, Ikebukuro, Shimbashi, Tenjin, Kawasaki, Dotonbori and more');
skip('26042624', 'しゃぶしゃぶ すき焼き 食べ放題 和牛と豚 三条河原町店: chain — Tabelog’s name search lists Wagyu to Buta shops at Honmachi, Kintetsu Nara, Kyoto Ekimae, Shinsaibashi (two), Tenma and Sanjo-Kawaramachi');

// ================================================================ 鮨嵩
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26001122/'; const R = TB + 'dtlrvwlst/';
  const H = day(['16:00', '21:30']);
  put({
    id: 'kyoto_sushi_taka_gion', name: '鮨嵩 (Sushi Taka)', category: 'OMNI',
    lat: 35.002894, lng: 135.773322, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sushi and side dishes — uzaku, ankimo, squid tempura, chawanmushi, red miso soup; soy sauce and tsume not described (2024–2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi counter (reviews).',
    hours_raw: 'Monday–Saturday 16:00–21:30; closed Sunday; hours may change (Tabelog). Cash only — no cards or e-money (Tabelog). 16 seats: 8 at the counter, 8 on a raised tatami platform (Tabelog). Off Yamato-oji south of Shijo in Gion, near Keihan Gion-Shijo; moved here in August 2010 after earlier sites in Gion and on Teramachi (Tabelog). Real wasabi (June 2025).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Gion, off Yamato-oji south of Shijo — near Keihan Gion-Shijo',
    cuisine: 'A small, warm sushi counter for drinking with seafood dishes and finishing with sushi (June 2025) · appetizers such as crab and salted sea urchin; real wasabi; red miso soup; anago that melts away (June 2025) · uzaku, ankimo, squid tempura, chawanmushi; nigiri of tuna, sea bream, yellowtail, eel, salmon, uni and tamago (December 2024–2025) · around ¥10,000 a head with drinks (June and December 2025)',
    website: null, gmaps: gm('鮨嵩 祇園 大和町'), menu_url: null,
    notes: '[Sushi · Gion off Yamato-oji, a warm neighbourhood counter] A small, homely sushi counter off Yamato-oji where regulars drink over crab, uni, ankimo and chawanmushi and finish with nigiri and red miso soup — heartfelt rather than refined, at about ¥10,000 with drinks. Cash only; closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)', 'Owner (unnamed)'], origin: null,
      background: 'Reviewers describe a warm, friendly atmosphere made by the chef and the owner (December 2024) and count it among the few small, reasonably priced sushi counters in Gion run by couples (June 2025). Tabelog notes moves from 祇園町北側 (2010) and Teramachi-Takoyakushi (2007).',
      philosophy: null, specialty: 'Sushi with seafood snacks.',
      anecdotes: [
        { text: 'A couple come every year at the end of December; in 2025 it was packed and lively.', source: R + 'B498336499/' },
        { text: 'A June 2025 guest, a fan of individually run places, found the anago melted in the mouth.', source: R + 'B507922793/' },
      ],
      japanese_sources_summary: '食べログ: 鮨嵩、寿司、東山区大和大路四条下る大和町21-1、祇園四条駅から145m、月〜土 16:00〜21:30、日曜定休、現金のみ、16席 (カウンター8、小上がり8)、2010年8月に祇園町北側282-5から、2007年7月に寺町蛸薬師から移転。口コミ (2024〜2025年、英語): 蟹と塩うにの先付、本わさび、赤だし、とろける穴子、うざく、あん肝、いかの天ぷら、茶碗蒸し、まぐろ、鯛、ぶり、うなぎ、サーモン、うに、玉子の握り、飲んで1万円ほど、料理人と店主の温かい雰囲気、夫婦で営む小さな店のひとつ。',
      confidence: 'low', sources: [TB, R + 'B498336499/', R + 'B507922793/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区大和大路四条下る大和町21-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through December 2025.' },
    pin_source: `Tabelog ${TB} (35.002894, 135.773322); cross-checked: GSI 京都府京都市東山区大和町21番地 (lot) 23m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B507922793/'],
    price_note: 'No dish prices read; about ¥10,000 a head with drinks.', last_checked: TODAY, items: [
      it('', '', 'Nigiri (tuna, sea bream, yellowtail, eel, uni, tamago)', '', 'Sushi', 'ask', 'no', 'December 2025.', 'nigiri'),
      it('', '', 'Anago', '', 'Sushi', 'ask', 'no', 'June 2025.', 'anago'),
    ] }, {
    cuisine: '海の幸で飲んで鮨で締める、小さくあたたかい鮨のカウンター (2025年6月)・蟹と塩うにの先付、本わさび、赤だし、とろける穴子 (2025年6月)・うざく、あん肝、いかの天ぷら、茶碗蒸し、まぐろ、鯛、ぶり、うなぎ、サーモン、うに、玉子の握り (2024年12月〜2025年)・飲んで1人1万円ほど (2025年6月・12月)',
    neighborhood: '四条の南、大和大路から入った祇園。京阪祇園四条の近く',
    gf_detail: '要確認。うざく、あん肝、いかの天ぷら、茶碗蒸し、赤だしなどの一品と鮨。醤油やツメについては書かれていない (2024〜2025年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。鮨のカウンター (口コミ)。',
    notes: '[鮨・大和大路の祇園、あたたかい町の鮨屋] 大和大路から入った小さく家庭的な鮨のカウンター。蟹やうに、あん肝、茶碗蒸しで飲んで、握りと赤だしで締める。洗練よりも心のこもった鮨で、飲んで1万円ほど。現金のみ、日曜定休。',
  });
}

// ================================================================ 焼肉 マウム 京都木屋町店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26041520/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.yakiniku-maumu.com/';
  const H = day(['11:30', '14:30'], ['17:00', '03:00']);
  put({
    id: 'kyoto_yakiniku_maumu_kiyamachi', name: '焼肉 マウム 京都木屋町店 (Yakiniku Maumu, Kyoto Kiyamachi)', category: 'OMNI',
    lat: 35.007172, lng: 135.769922, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A5 Wagyu yakiniku with a house sauce described as additive-free, plus yukhoe, namul, kimchi and salads; no gluten information (Tabelog; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a Wagyu yakiniku restaurant; namul and kimchi are sides (Tabelog; reviews).',
    hours_raw: 'Lunch 11:30–14:30; dinner 17:00–3:00 (L.O. 2:30); closed Wednesday (Tabelog). Reservations accepted (Tabelog; 2026). Cards including UnionPay, IC cards, e-money and QR payments (Tabelog). 36 seats: 10 at the counter, 16 at tables; room for strollers between tables (Tabelog; October 2026). On the ground floor of the UGK Building in an alley between Kawaramachi and Kiyamachi, 5 min from Hankyu Kawaramachi or Keihan Sanjo (Tabelog; 2026).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Alley between Kawaramachi and Kiyamachi, south of Sanjo',
    cuisine: 'A5 Kuroge Wagyu from female cattle, hand-cut, with a house sauce made without additives, in a modern Japanese room (Tabelog) · namul platter ¥800, three kimchi ¥800, chorogi salad ¥800 (September 2026) · Wagyu yukhoe ¥1,600; premium tongue ¥2,300; brisket yaki-shabu ¥1,500; tender cut with salt ¥1,400; short rib with sauce ¥1,680 (September–October 2026) · harami, premium kalbi, mino, hoso (2026) · Chamisul soju ¥1,320 (October 2026)',
    website: SITE, gmaps: gm('焼肉 マウム 京都木屋町店'), menu_url: SITE,
    notes: '[Yakiniku · Kiyamachi alley, A5 Wagyu until 3:00] A calm, modern yakiniku room in a quiet alley off Kiyamachi serving hand-cut A5 Wagyu — yukhoe, thick tongue, yaki-shabu, harami — with namul and kimchi, at lunch and until 3:00. Sister of BISTRO MAUMU and the Gion Yakiniku Maumu. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Tabelog’s invoice number T6130001067887 is registered to 株式会社ＧＭＩ (NTA register), the operator also recorded for BISTRO MAUMU in our data, which runs 焼肉マウム in Gion and 居酒屋 マウム. Tabelog’s shop text describes female-cattle A5 Wagyu hand-cut by skilled staff.',
      philosophy: 'Additive-free house sauce to bring out the meat (Tabelog).', specialty: 'Wagyu yukhoe; premium tongue.',
      anecdotes: [
        { text: 'An October 2026 regular of the Gion branch tried this one with friends as the first stop of a night out.', source: R + 'B538507900/' },
        { text: 'An October 2026 family found space between tables for a stroller and let the staff season the meat.', source: R + 'B536988297/' },
      ],
      japanese_sources_summary: '食べログ: 焼肉 マウム 京都木屋町店、焼肉・ホルモン、中京区北車屋町265-1 UGKビル1F、阪急河原町駅・京阪三条駅から徒歩5分、昼11:30〜14:30、夜17:00〜翌3:00 (L.O.2:30)、水曜定休、カード・電子マネー・QR決済可、36席 (カウンター10、テーブル16)、雌牛のA5黒毛和牛を職人が手切り、無添加の自家製だれ、適格請求書 T6130001067887 (株式会社ＧＭＩ)。口コミ (2026年、英語): ナムル盛り800円、キムチ3種800円、チョレギサラダ800円、和牛ユッケ1,600円、上タン2,300円、ブリスケの焼きしゃぶ1,500円、ヒレ塩1,400円、カルビたれ1,680円、ハラミ、上カルビ、ミノ、ホソ、チャミスル1,320円、祇園店もある。',
      confidence: 'medium', sources: [SITE, TB, 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=6130001067887', R + 'B535633390/', R + 'B535716422/', R + 'B535836415/', R + 'B536617008/', R + 'B536881098/', R + 'B536988297/', R + 'B537384924/', R + 'B538250810/', R + 'B538507900/', R + 'B538542768/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Open late; friendly staff will grill or season for you.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区北車屋町265-1 UGKビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.007172, 135.769922); cross-checked: GSI 京都府京都市中京区北車屋町265番地 (lot) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536617008/', R + 'B538250810/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Wagyu yukhoe', '¥1,600', 'Raw', 'ask', 'no', 'September–October 2026.', 'yukhoe'),
      it('', '', 'Premium tongue', '¥2,300', 'Yakiniku', 'ask', 'no', 'September 2026.', 'jo_tan'),
      it('', '', 'Wagyu brisket yaki-shabu', '¥1,500', 'Yakiniku', 'ask', 'no', 'September 2026.', 'yakishabu'),
      it('', '', 'Special namul platter', '¥800', 'Sides', 'ask', 'ask', 'September 2026.', 'namul'),
    ] }, {
    cuisine: '雌牛のA5黒毛和牛を手切りし、無添加の自家製だれで食べる和モダンな焼肉 (食べログ)・ナムル盛り800円、キムチ3種800円、チョレギサラダ800円 (2026年9月)・和牛ユッケ1,600円、上タン2,300円、ブリスケの焼きしゃぶ1,500円、ヒレ塩1,400円、カルビたれ1,680円 (2026年9〜10月)・ハラミ、上カルビ、ミノ、ホソ (2026年)・チャミスル1,320円 (2026年10月)',
    neighborhood: '三条の南、河原町と木屋町のあいだの路地',
    gf_detail: '要確認。無添加とされる自家製だれのA5和牛の焼肉、ユッケ、ナムル、キムチ、サラダ。グルテンの情報はない (食べログ、2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。和牛の焼肉の店で、ナムルやキムチはサイド (食べログ、口コミ)。',
    notes: '[焼肉・木屋町の路地、深夜3時までA5和牛] 木屋町から入った静かな路地の落ち着いた和モダンな焼肉店。手切りのA5和牛のユッケ、厚切りタン、焼きしゃぶ、ハラミにナムルやキムチを、昼と深夜3時まで。BISTRO MAUMUや祇園の焼肉マウムの姉妹店。水曜定休。',
  });
}

// ================================================================ 酒肴いさ味
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26031884/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '05:00']);
  put({
    id: 'kyoto_shusai_isami_kiyamachi', name: '酒肴いさ味 (Shusai Isami)', category: 'OMNI',
    lat: 35.007255, lng: 135.769869, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Japanese dishes — sashimi, simmered and grilled fish, tempura, suppon courses with fried suppon and hot pot; no gluten information (Tabelog; 2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish, duck and soft-shell turtle dishes (Tabelog; reviews).',
    hours_raw: '18:00–5:00 (L.O. 4:00); days off not fixed (Tabelog). Reservations accepted (Tabelog; August 2026). Otoshi ¥550 per person (Tabelog, original お通し代 お一人様550円). Cards, IC cards, e-money and QR payments (Tabelog). 39 seats, all on tatami with sunken kotatsu (Tabelog; June 2025). On the 2nd floor up a steep stair, on Kiyamachi south of Sanjo; the toilet is outside (August and November 2025). About 3 min from Keihan Sanjo (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi south of Sanjo — 2F, 3 min from Keihan Sanjo',
    cuisine: 'A casual izakaya for kappo-style and creative Japanese food, with seasonal fish, tempura and soft-shell turtle all year; the owner-chef has French experience (Tabelog) · suppon course: appetizers, sashimi, simmered and fried suppon, suppon hot pot and porridge (May 2025) · course of yuba appetizer, sashimi of salmon, white and blue fish, simmered dish, grilled fish, tempura, miso soup and onigiri, with free-flow drinks about ¥6,000 (December 2025) · 90-minute free-flow plan ¥5,500 (August 2026) · teppanyaki, duck, katsu; winter yellowtail (November 2025, February 2026) · a wide sake list (June 2025)',
    website: null, gmaps: gm('酒肴いさ味 木屋町'), menu_url: TB + 'dtlmenu/',
    notes: '[Japanese izakaya · Kiyamachi 2F, fish and suppon until 5:00] A tatami-floored izakaya up a steep stair on Kiyamachi, where a chef with French training cooks seasonal fish, tempura, kappo dishes and year-round soft-shell turtle courses, with plenty of sake and free-flow plans. ¥550 otoshi; open until 5:00.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)'], origin: null,
      background: 'Tabelog’s shop text says the owner-chef has experience in French cooking and adds original dishes to Kyoto and other Japanese food. Tabelog’s invoice number T4130001063137 is registered to 株式会社いさむ at the shop’s address (NTA register). A February 2026 reviewer mentions a one-person operation that night.',
      philosophy: null, specialty: 'Suppon course; seasonal sashimi.',
      anecdotes: [
        { text: 'A May 2025 first-timer at soft-shell turtle got through the fried suppon but left half the porridge, too full to finish.', source: R + 'B507122799/' },
        { text: 'An August 2026 pair chose it for fish on a second stop and booked a 90-minute free-flow plan with a coupon.', source: R + 'B534821925/' },
      ],
      japanese_sources_summary: '食べログ: 酒肴いさ味、居酒屋・海鮮・すっぽん、中京区河原町通三条下る二丁目北車屋町265-1、京阪三条駅から徒歩3分、18:00〜翌5:00 (L.O.4:00)、不定休、お通し代1人550円、カード・電子マネー・QR決済可、39席、全席座敷 (掘りごたつ)、割烹料理と創作和食、旬の魚、天ぷら、通年のすっぽん料理、フレンチ出身の店主、適格請求書 T4130001063137 (株式会社いさむ)。口コミ (2025〜2026年、英語): すっぽんのコース (前菜、刺身、煮物、唐揚げ、鍋、雑炊)、湯葉の先付・刺身・煮物・焼き魚・天ぷら・味噌汁・おにぎりのコースと飲み放題で約6,000円、90分飲み放題5,500円、鉄板焼き、鴨、カツ、寒ぶり、日本酒が豊富、急な階段、トイレは外。',
      confidence: 'medium', sources: [TB, 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=4130001063137', R + 'B507122799/', R + 'B507972523/', R + 'B517058963/', R + 'B518227427/', R + 'B522308180/', R + 'B534821925/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Shoes off, tatami seating; steep stairs; ¥550 otoshi.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区河原町通三条下る二丁目北車屋町265‐1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.007255, 135.769929), offset about 5.5 m west to (35.007255, 135.769869) because 我家我家 (kyoto_gaya_gaya) sits within 5 m; cross-checked: GSI 京都府京都市中京区北車屋町265番地 (lot) 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B518227427/', R + 'B534821925/'],
    price_note: 'Prices from December 2025 and August 2026 reviews; ¥550 otoshi.', last_checked: TODAY, items: [
      it('', '', 'Course with free-flow drinks', 'about ¥6,000', 'Courses', 'ask', 'no', 'December 2025.', 'course'),
      it('', '', 'Suppon (soft-shell turtle) course', '', 'Courses', 'ask', 'no', 'May 2025.', 'suppon'),
      it('', '', 'Otoshi', '¥550', 'Charges', '', '', 'Tabelog.', 'otoshi'),
    ] }, {
    cuisine: '割烹料理と創作和食を手頃に楽しめる居酒屋。旬の魚、天ぷら、通年のすっぽん料理、店主はフレンチ出身 (食べログ)・すっぽんのコース: 前菜、刺身、すっぽんの煮物と唐揚げ、鍋と雑炊 (2025年5月)・湯葉の先付、サーモン・白身・青魚の刺身、煮物、焼き魚、天ぷら、味噌汁、おにぎりのコースに飲み放題で約6,000円 (2025年12月)・90分飲み放題5,500円 (2026年8月)・鉄板焼き、鴨、カツ。寒ぶり (2025年11月、2026年2月)・日本酒が豊富 (2025年6月)',
    neighborhood: '三条の南の木屋町。2階、京阪三条から徒歩3分',
    gf_detail: '要確認。刺身、煮魚、焼き魚、天ぷら、すっぽんの唐揚げや鍋などの和食。グルテンの情報はない (食べログ、2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。魚、鴨、すっぽんの料理 (食べログ、口コミ)。',
    notes: '[和食の居酒屋・木屋町の2階、朝5時まで魚とすっぽん] 木屋町の急な階段を上がった全席座敷の居酒屋。フレンチ出身の料理人が旬の魚、天ぷら、割烹料理、通年のすっぽんのコースを作り、日本酒や飲み放題も。お通し550円、朝5時まで。',
  });
}

// ================================================================ 麺酒場 ハコ屋
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26039492/'; const R = TB + 'dtlrvwlst/';
  const D = day(['18:00', '03:00']);
  put({
    id: 'kyoto_men_sakaba_hakoya', name: '麺酒場 ハコ屋 (Men Sakaba Hakoya)', category: 'OMNI',
    lat: 35.007092, lng: 135.770576, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: yellow Chinese wheat noodles in a niku-soba-style broth, with tenkasu (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat-topped noodles in a meat-and-dashi broth (2025–2026 reviews).',
    hours_raw: '18:00–3:00 (L.O. 2:30) daily; until 5:00 on the eve of holidays (Tabelog). Cash only — no cards, e-money or QR (Tabelog). Counter seats only (June 2026). Self-service tenkasu, plain and spicy (June and December 2025). In Kiyamachi near Sanjo, about 280 m from Keihan Sanjo (Tabelog). Opened 18 May 2023 (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Kiyamachi near Sanjo — about 280 m from Keihan Sanjo',
    cuisine: 'A late-night noodle bar serving niku-soba-style bowls with yellow Chinese noodles (2025–2026) · niku soba ¥1,200, the bowl covered in thin slices of meat over a clear golden broth (June and October 2026) · meat ramen; meat curry soba (June 2025, August 2026) · mazesoba with seafood broth and firmer noodles, added April 2026 (March 2026) · beer and Kaku highball (2025–2026)',
    website: null, gmaps: gm('麺酒場 ハコ屋 木屋町'), menu_url: null,
    notes: '[Noodle bar · Kiyamachi, after-drinks niku soba] A small counter in Kiyamachi for the end of a night out, serving bowls of thin-sliced meat over yellow noodles in a light, golden broth (¥1,200), with spicy tenkasu to add yourself, curry soba and mazesoba. Cash only; open until 3:00.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Reviewers describe a niku-soba-like dish made with Chinese noodles, with tenkasu at the counter to add yourself — more like a soba or udon shop than a ramen shop (December 2025) — and a regular’s favourite after drinks (March and May 2026).',
      philosophy: null, specialty: 'Niku soba with yellow noodles.',
      anecdotes: [
        { text: 'A March 2026 regular, on a fifth visit after drinks, got to try the new mazesoba before its April launch.', source: R + 'B499291239/' },
        { text: 'A June 2026 visitor was sent here for a late bowl by a local obanzai restaurant.', source: R + 'B529943705/' },
      ],
      japanese_sources_summary: '食べログ: 麺酒場 ハコ屋、ラーメン・居酒屋、中京区材木町187-1、京阪三条駅から276m、毎日18:00〜翌3:00 (L.O.2:30)、祝前日は翌5:00まで、現金のみ、2023年5月18日オープン。口コミ (2025〜2026年、英語): 黄色い中華麺の肉そば風、肉そば1,200円、肉で覆われた澄んだ金色のスープ、肉ラーメン、肉カレーそば、2026年4月からのまぜそば、天かす (普通と辛口) はセルフ、カウンターのみ、角ハイボール、飲んだ後の一杯。',
      confidence: 'medium', sources: [TB, R + 'B499291239/', R + 'B509226269/', R + 'B520392779/', R + 'B528299506/', R + 'B529943705/', R + 'B537919272/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Late-night counter; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区材木町187-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.007092, 135.770576); cross-checked: GSI 京都府京都市中京区材木町187番地 (lot) 31m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B529943705/', R + 'B537919272/'],
    price_note: 'Price from June and October 2026 reviews.', last_checked: TODAY, items: [
      it('肉そば', 'niku soba', 'Niku soba (meat noodles, yellow noodles)', '¥1,200', 'Noodles', 'no', 'no', 'June and October 2026.', 'niku_soba'),
      it('', '', 'Meat curry soba', '', 'Noodles', 'no', 'no', 'August 2026.', 'curry_soba'),
      it('', '', 'Mazesoba', '', 'Noodles', 'no', 'no', 'From April 2026.', 'mazesoba'),
    ] }, {
    cuisine: '黄色い中華麺の肉そば風の丼を出す深夜の麺酒場 (2025〜2026年)・薄切りの肉で覆われた、澄んだ金色のスープの肉そば1,200円 (2026年6月・10月)・肉ラーメン、肉カレーそば (2025年6月、2026年8月)・魚介の出汁と固めの麺のまぜそば、2026年4月から (2026年3月)・ビールと角ハイボール (2025〜2026年)',
    neighborhood: '三条近くの木屋町。京阪三条から280mほど',
    gf_detail: 'グルテンフリーではない。肉そば風のスープに小麦の黄色い中華麺、天かすも (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。肉と出汁のスープに肉をのせた麺 (2025〜2026年の口コミ)。',
    notes: '[麺酒場・木屋町、飲んだ後の肉そば] 木屋町の小さなカウンターで、飲みの締めに。黄色い麺に薄切りの肉をたっぷりのせた澄んだ金色のスープの丼 (1,200円) に、辛い天かすを自分で。カレーそばやまぜそばも。現金のみ、深夜3時まで。',
  });
}

save();
