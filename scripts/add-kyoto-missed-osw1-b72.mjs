// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 72.
//   + RESTAURANT＆Bar MOTHER INDIA (Indian curry and biryani on a 4th floor by Kawaramachi-Sanjo; opened August 2025)
//   + ぎをん 蘆田 Gion Ashida (suppon and eel prepared live at the counter, Gion 切り通し, since 1992)
//   + マブルー ハラル ダイニング MABRUR HALAL DINING (halal Bangladeshi, Indian and Middle-Eastern food by Sanjo bridge)
//   - 治一郎 大丸京都店, 鶴屋吉信 大丸京都店: skipped (reasons below).
//   Rest list (`queue.mjs kyoto-missed next rest 2000`), nearest-first, lane ids 26044478 (left in the queue), 26043494,
//   26029910 (skipped), 26012678, 26041208, 26017874 (skipped).
//   京都 お酒の神社 (26044478) is left in the queue: two 2026 reviews and an own site — not skipped; drafting it would make
//   this batch heavier than the rest.
//   queue-status.jsonl grepped for each brand (お酒の神社, MOTHER INDIA, 治一郎, 蘆田, マブルー/MABRUR, 鶴屋吉信): only 鶴屋吉信
//   has an earlier ruling (26001506).
//   None of the three drafted is in data/kyoto.json by name or address (恵比須町435-2 ヒジカタビル 4F, 祇園町北側347-92,
//   中島町98 御所飴ビル 2F).
//   Same-name count (same brand or operator only): MOTHER INDIA — Tabelog’s name search shows six MOTHER INDIA shops in
//   Tokyo (Mitsukoshimae, Hanzomon, Azabu-Juban, Omotesando Hills, Chiyoda Otemachi and one more); this Kyoto shop lists no
//   invoice number and no operator was found, so a link is not established — drafted and flagged for a chain check.
//   蘆田 — one shop. MABRUR — moved here from behind Kawaramachi OPA (Tabelog); one shop now. Large-parent list checked.
//   Service charges: none listed on Tabelog for any of the three.
//   Other-diner remarks (Greg 2026-11-06): several MABRUR reviews (April and May 2025, May and October 2026) note many
//   overseas or Muslim guests — kept, summarised and attributed. Single remarks elsewhere left out.
//   Halal: MABRUR HALAL DINING names itself halal; its site explains halal, and reviewers note no alcohol and a prayer space
//   — flags.halal true. No other operator in this batch claims halal.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-72');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26029910', '治一郎 大丸京都店: not a place to eat — a take-away baumkuchen counter in Daimaru (Tabelog lists it as take-away)');
skip('26017874', '鶴屋吉信 大丸京都店: chain — same ruling as 26001506: 鶴屋吉信 lists five directly run shops, and this is a department-store sweets counter');

// ================================================================ RESTAURANT＆Bar MOTHER INDIA
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26043494/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '23:00']);
  put({
    id: 'kyoto_mother_india_kawaramachi', name: 'RESTAURANT＆Bar MOTHER INDIA', category: 'OMNI',
    lat: 35.009251, lng: 135.769186, cuisine_type: 'curry',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Curries with naan or rice and biryani; naan is wheat, and nothing is said about thickeners or a gluten-free option (Tabelog; 2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. 28 curries include dal makhani, but no vegan dishes are named and butter and cream are common in the curries (Tabelog; 2025 reviews).',
    hours_raw: '11:00–23:00 daily (lunch to 15:00); closing days may vary (Tabelog). Cards and QR incl. Alipay and WeChat Pay (Tabelog); an August 2025 reviewer found it cash-only at the time. 40 seats at tables and sofas (Tabelog). Non-smoking (Tabelog). On the 4th floor of ヒジカタビル on Kawaramachi, above Tribute Coffee, 5 min from Sanjo (Tabelog; August 2025). Opened 25 August 2025 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kawaramachi north of Sanjo, 4F — 4 min from subway Kyoto Shiyakusho-mae',
    cuisine: 'Indian curry with 28 kinds to choose from, five spice levels, naan or rice; lassi, draft beer and all-you-can-drink (Tabelog) · daily-curry lunch set ¥890; cheese naan lunch ¥1,250 with a thick, salty cheese naan; naan refill ¥150 (2025–2026) · butter chicken with chicken tikka, eggplant and chicken curry (August 2025, September 2026) · mutton biryani; mango juice (March 2026) · Indian and Thai beers (December 2025)',
    website: null, gmaps: gm('MOTHER INDIA 京都 河原町'), menu_url: TB + 'dtlmenu/',
    notes: '[Indian curry · Kawaramachi-Sanjo, 4th floor] A roomy fourth-floor Indian restaurant over Kawaramachi with 28 curries at five spice levels, a much-ordered cheese-naan lunch, mutton biryani, lassi and Indian beer, open all day till 11 pm. Flagged: Tokyo has a MOTHER INDIA chain; a link to this shop is not established.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Reviewers describe friendly staff (December 2025, March 2026) from India, with some language barrier (June 2026). Tabelog’s name search shows MOTHER INDIA shops in Tokyo; this shop lists no invoice number and its operator was not found.',
      philosophy: null, specialty: 'Cheese naan lunch; butter chicken curry.',
      anecdotes: [
        { text: 'A September 2026 diner expected a thin layer of cheese and got a naan so thick that half would have been enough.', source: R + 'B513698047/' },
        { text: 'An August 2025 visitor recommends a table looking out at the church, as the window side warms up in the afternoon sun.', source: R + 'B512550028/' },
      ],
      japanese_sources_summary: '食べログ: RESTAURANT＆Bar MOTHER INDIA、インドカレー・タイ料理・ネパール料理、中京区恵比須町435-2 ヒジカタビル 4F、京都市役所前駅から徒歩4分、毎日 11:00〜15:00、15:00〜23:00、不定休、カード・QR可、40席、禁煙、2025年8月25日オープン、28種のカレー、辛さを選べる、ナンかライス、ラッシー、生ビール、飲み放題。口コミ (2025〜2026年、英語): 日替わりカレーのランチ890円、チーズナンランチ1,250円、ナンのおかわり150円、バターチキン、茄子とチキンのカレー、マトンビリヤニ、マンゴージュース、インドとタイのビール、インド出身のスタッフ。',
      confidence: 'medium', sources: [TB, R + 'B512550028/', R + 'B513698047/', R + 'B518919489/', R + 'B521226449/', R + 'B525180168/', R + 'B530130628/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Indian staff; some language gaps reported (June 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区恵比須町435-2 ヒジカタビル 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.009251, 135.769186); cross-checked: GSI 京都府京都市中京区恵比須町435番地 (lot) 33m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B512550028/', R + 'B521226449/'],
    price_note: 'Prices from 2025–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Daily-curry lunch set', '¥890', 'Lunch', 'ask', 'ask', 'August 2025.', 'lunch'),
      it('', '', 'Cheese naan lunch', '¥1,250', 'Lunch', 'no', 'no', 'August 2025; January and September 2026.', 'cheesenaan'),
      it('', '', 'Butter chicken curry', '', 'Curry', 'ask', 'no', '2025–2026.', 'butterchicken'),
      it('', '', 'Mutton biryani', '', 'Biryani', 'ask', 'no', 'March 2026.', 'biryani'),
    ] }, {
    cuisine: '28種から選べるインドカレー、辛さ5段階、ナンかライス。ラッシー、生ビール、飲み放題 (食べログ)・日替わりカレーのランチ890円、厚くて塩気のあるチーズナンのランチ1,250円、ナンのおかわり150円 (2025〜2026年)・チキンティッカのバターチキン、茄子とチキンのカレー (2025年8月、2026年9月)・マトンビリヤニ、マンゴージュース (2026年3月)・インドとタイのビール (2025年12月)',
    neighborhood: '三条の北の河原町、4階。地下鉄京都市役所前から徒歩4分',
    gf_detail: '要確認。ナンかライスのカレーとビリヤニ。ナンは小麦で、とろみやグルテンフリーの選択肢については書かれていない (食べログ、2025〜2026年の口コミ)。',
    vegan_detail: '要確認。28種のカレーにダールマカニがあるが、ヴィーガンの品は書かれておらず、バターやクリームを使うカレーが多い (食べログ、2025年の口コミ)。',
    notes: '[インドカレー・河原町三条、4階] 河原町のビル4階の広いインド料理店。28種のカレーを5段階の辛さで、人気のチーズナンのランチ、マトンビリヤニ、ラッシー、インドのビール。通しで23時まで。東京にMOTHER INDIAのチェーンがあるが、この店との関係は未確認 (要確認)。',
  });
}

// ================================================================ ぎをん 蘆田
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26012678/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://gion-ashida.jimdosite.com/';
  const H = day(['18:00', '23:00']);
  put({
    id: 'kyoto_gion_ashida', name: 'ぎをん 蘆田 (Gion Ashida)', category: 'OMNI',
    lat: 35.005192, lng: 135.775681, cuisine_type: 'unagi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Suppon and eel courses: eel sashimi with plum and wasabi, eel hot pot, kabayaki and an eel bowl, suppon hot pot; no gluten information (own site; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: suppon, eel, fugu and hamo courses (own site).',
    hours_raw: '18:00–23:00 (L.O. 22:30); Sunday by reservation only; closed on public holidays (own site). Tabelog lists Monday–Saturday 18:00–22:00 and Sunday 18:30–21:00 — the shop’s own hours are used. Book early by phone; seats fill for banquets (Tabelog). Cards and QR (Tabelog). 16 seats: 5 at the counter and two tatami rooms (Tabelog; July 2026). Non-smoking (Tabelog). A tank of live suppon at the door and eels inside (2026 reviews). Down a back alley in Gion (切り通し), just east of Shijo-Hanamikoji, 8 min from Keihan Gion-Shijo (own site; April 2026). Opened 1992 (own site).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion 切り通し, north of Shijo — 8 min from Keihan Gion-Shijo',
    cuisine: 'Suppon and eel from Aichi and Saga, kept live and prepared at the counter (Tabelog; own site) · signature suppon course for two ¥19,000; two-eel course ¥12,000; one-eel course ¥6,500; one-eel bowl ¥6,000; fugu course for two ¥21,000; seasonal matsutake hamo-shabu course for two ¥21,000 (own site) · two-eel course with Mikawa Isshiki eel: eel opened Kyoto-style and blanched, with plum and wasabi; eel hot pot with tofu and grilled leek; shirayaki, kabayaki, grilled liver, umaki, eel salad and a mini eel bowl (April 2026) · suppon course of about 11 dishes, about ¥15,000, with fresh blood mixed with apple juice (August 2026) · hamo and matsutake course in autumn (October 2026)',
    website: SITE, gmaps: gm('ぎをん 蘆田'), menu_url: SITE,
    notes: '[Suppon and eel · Gion 切り通し, since 1992] A 16-seat back-alley shop with a tank of live suppon at the door, where the Kyoto-born owner prepares suppon and eel at the counter: a two-eel course of eel sashimi, hot pot, kabayaki and a mini bowl (¥12,000), the suppon course for two (¥19,000), and hamo with matsutake in autumn. Sunday by reservation; closed on holidays.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)'], origin: 'Kyoto',
      background: 'Born and raised in Kyoto, the owner went to work at a restaurant after high school and opened ぎをん蘆田 at 切り通し in 1992 (own site). Reviewers describe a friendly master who chats while preparing the fish (July and August 2026).',
      philosophy: null, specialty: 'Suppon course; two-eel course.',
      anecdotes: [
        { text: 'A July 2026 first-timer watched a companion scoop a suppon from the tank and hand it to the master, who prepared it on the spot.', source: R + 'B532035597/' },
        { text: 'An October 2026 regular found matsutake already in the hamo-shabu hot pot, earlier than expected.', source: R + 'B472702334/' },
        { text: 'The shop’s site announced a 5–25 November suppon course for about two at ¥13,000 instead of ¥19,000, the same price for three, adding 男子、カップルごめんなさい — not for men or couples.', source: SITE },
      ],
      japanese_sources_summary: '公式サイト: ぎをん蘆田 すっぽん うなぎ料理、京都に生まれ育ち、高校卒業後に料理店で働き、1992年に切り通しで開店、東山区祇園町北側347-92 双葉ビル一階、18:00〜23:00 (LO22:30)、祝祭日定休、日曜日は予約のみ、名物すっぽんコース (2名分) 19,000円、鰻2匹コース12,000円、うなぎ1匹丼6,000円、うなぎ1匹コース6,500円、フグ1匹コース (二人前) 21,000円、季節特別松茸ハモしゃぶコース (2人分) 21,000円、11月5日〜25日限定ですっぽん1匹コース13,000円 (男子、カップルごめんなさい)。食べログ: 愛知と佐賀から直送のすっぽんと鰻、目の前でさばく、16席、禁煙、1992年3月3日オープン。口コミ (2026年、英語): 入口の水槽のすっぽん、三河一色の鰻、湯引きを梅とわさびで、鰻鍋、白焼き、蒲焼き、肝焼き、う巻き、ミニ鰻丼、すっぽんの生き血をりんごジュースで、鱧と松茸のコース、気さくな大将。',
      confidence: 'medium', sources: [TB, SITE, R + 'B472702334/', R + 'B526023482/', R + 'B532035597/', R + 'B534672036/'] },
    cultural_comfort: { level: 'japanese', note: 'Small counter and tatami rooms; book by phone.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側347-92 双葉ビル1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Own site with a November 2026 offer; Tabelog reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.005192, 135.775681); cross-checked: GSI 京都府京都市東山区祇園町北側347番地 (lot) 46m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE],
    price_note: 'Prices from the shop’s site.', last_checked: TODAY, items: [
      it('名物 すっぽんコース (2名分)', 'meibutsu suppon kosu', 'Signature suppon course (for two)', '¥19,000', 'Courses', 'ask', 'no', 'Own site.', 'suppon'),
      it('満足 鰻２匹コース', 'manzoku unagi nihiki kosu', 'Two-eel course', '¥12,000', 'Courses', 'ask', 'no', 'Own site; April 2026.', 'unagi2'),
      it('うなぎ１匹コース', 'unagi ippiki kosu', 'One-eel course', '¥6,500', 'Courses', 'ask', 'no', 'Own site.', 'unagi1'),
      it('ガッツリ うなぎ１匹丼', 'gattsuri unagi ippiki don', 'One-eel bowl', '¥6,000', 'Bowls', 'ask', 'no', 'Own site.', 'unadon'),
      it('フグ１匹コース 二人前', 'fugu ippiki kosu ninin-mae', 'Fugu course (for two)', '¥21,000', 'Courses', 'ask', 'no', 'Own site.', 'fugu'),
    ] }, {
    cuisine: '愛知と佐賀から届くすっぽんと鰻を生かしておき、カウンターでさばく (食べログ、公式サイト)・名物すっぽんコース (2名分) 19,000円、鰻2匹コース12,000円、うなぎ1匹コース6,500円、うなぎ1匹丼6,000円、フグ1匹コース (二人前) 21,000円、季節の松茸ハモしゃぶコース (2人分) 21,000円 (公式サイト)・三河一色の鰻の2匹コース: 京風にさばいて湯引きし梅とわさびで、豆腐と焼き葱の鰻鍋、白焼き、蒲焼き、肝焼き、う巻き、鰻のサラダ、ミニ鰻丼 (2026年4月)・約11品、約15,000円のすっぽんのコース、生き血はりんごジュースで割って (2026年8月)・秋は鱧と松茸のコース (2026年10月)',
    neighborhood: '四条の北の祇園切り通し。京阪祇園四条から徒歩8分',
    gf_detail: '要確認。すっぽんと鰻のコース: 梅とわさびで食べる鰻の湯引き、鰻鍋、蒲焼き、鰻丼、すっぽん鍋。グルテンの情報はない (公式サイト、2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。すっぽん、鰻、ふぐ、鱧のコース (公式サイト)。',
    notes: '[すっぽんと鰻・祇園切り通し、1992年開店] 入口に生きたすっぽんの水槽がある路地裏の16席の店。京都生まれの店主がカウンターですっぽんと鰻をさばく。鰻の湯引き、鍋、蒲焼き、ミニ丼の鰻2匹コース (12,000円)、2名分のすっぽんコース (19,000円)、秋は鱧と松茸。日曜は予約のみ、祝日定休。',
  });
}

// ================================================================ マブルー ハラル ダイニング
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26041208/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://mabrurhalal.com/';
  const MT = day(['12:00', '22:30']); const FR = day(['16:00', '22:30']); const WE = day(['11:30', '22:30']);
  put({
    id: 'kyoto_mabrur_halal_dining', name: 'マブルー ハラル ダイニング (MABRUR HALAL DINING)', category: 'OMNI',
    lat: 35.00916, lng: 135.770697, cuisine_type: 'curry',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Curries with tandoor naan or rice, biryani, kebab plates and samosa; no gluten information (own site; 2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Five curries a day at lunch, but no vegan dish is named; the menu centres on chicken, mutton and shrimp (own site; 2025–2026 reviews).',
    hours_raw: 'Monday–Thursday 12:00–22:30, Friday 16:00–22:30, Saturday, Sunday and holidays 11:30–22:30 (L.O. 22:00) (Tabelog). Lunch menu until 15:30 (March 2025). Reservations by phone or WhatsApp (Tabelog). Cards, IC cards and QR (Tabelog). 45 seats in large booths (Tabelog; March 2025). Non-smoking (Tabelog). Halal, with no alcohol and a prayer space (own site; February and June 2026). On the 2nd floor of 御所飴ビル on Sanjo, up a narrow stair, 3 min from Keihan Sanjo (Tabelog; March 2025). Moved here from behind Kawaramachi OPA (Tabelog).',
    hours: { 0: MT, 1: MT, 2: MT, 3: MT, 4: FR, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: true, open_late: true },
    neighborhood: 'Sanjo, west of Sanjo bridge, 2F — 3 min from Keihan Sanjo',
    cuisine: 'Halal Bangladeshi and Indian curry and biryani, with Middle-Eastern kebabs of mutton and chicken (own site) · curry lunch set from ¥980 with five curries to choose from, spice to taste, salad and soup; the house tandoori-chicken lunch set (own site; September 2026) · kebab plates of chicken, mutton and shrimp with rice or naan (own site) · chicken biryani, chicken tikka biryani, Afghan mutton biryani and kabuli pulao (2025–2026) · samosa, chicken roll, butter chicken, tandoor naan; katari bog and cream toast for dessert (March 2025) · a complimentary soup to start (March 2025, June 2026) · no alcohol (February 2026)',
    website: SITE, gmaps: gm('MABRUR HALAL DINING KYOTO'), menu_url: SITE,
    notes: '[Halal curry and biryani · Sanjo, by the bridge] A roomy second-floor halal restaurant just west of Sanjo bridge, with a prayer space and no alcohol: Bangladeshi and Indian curries with tandoor naan, generous biryani, and Middle-Eastern mutton and chicken kebabs, from a ¥980 curry lunch. The kitchen uses no nuts anywhere on the menu. Spice adjusted to taste.',
    chef_bio: { chef_name: null, roles: ['Chefs (unnamed)'], origin: null,
      background: 'The shop’s site describes chefs bringing together Bangladeshi and Indian curry and biryani with Middle-Eastern kebabs, and explains halal as Islamic food rules that anyone can eat safely. Staff explain dishes in Japanese and English (May 2026). Several reviewers note many overseas or Muslim guests (April and May 2025, May and October 2026).',
      philosophy: 'Halal food that non-Muslim guests can enjoy just as safely; spice adjusted for everyone (own site).', specialty: 'Biryani; kebabs.',
      anecdotes: [
        { text: 'A July 2026 regular has come for the biryani on every Kyoto stay for four years, though a Bengali partner found it mild.', source: R + 'B533440638/' },
        { text: 'A May 2025 diner was struck by a sign at the till saying those without money need not pay.', source: R + 'B507504684/' },
      ],
      japanese_sources_summary: '公式サイト: MABRUR HALAL DINING KYOTO (マブルーハラルダイニング京都)、京都三条駅すぐのバングラデシュ・インド料理、バングラデシュ・インドのカレーとビリヤニ、中東のケバブ、ハラルはイスラム教の食の基準だがイスラム教以外の人も安全に食べられる、メニュー全体でナッツ類を使用しない、カレーランチセット980円 (税込) から、5種から選べるカレー、辛さ調整可、サラダ・スープ付き、名物のタンドリーチキンランチセット、チキン・マトン・エビのケバブプレート。食べログ: インド料理、中京区中島町98 御所飴ビル 2F、京阪三条駅から徒歩3分、月〜木 12:00〜22:30、金 16:00〜22:30、土日祝 11:30〜22:30 (L.O.22:00)、45席、禁煙、河原町OPA裏から移転。口コミ (2025〜2026年、英語): アルコールなし、礼拝スペース、チキンビリヤニ、アフガンマトンビリヤニ、カブリプラオ、サモサ、バターチキン、海外やムスリムのお客が多い、日本語と英語で説明。',
      confidence: 'medium', sources: [TB, SITE, R + 'B502838213/', R + 'B505700859/', R + 'B507504684/', R + 'B523118217/', R + 'B528358412/', R + 'B529863906/', R + 'B533440638/', R + 'B533691738/', R + 'B534780797/', R + 'B538054387/'] },
    cultural_comfort: { level: 'english', note: 'Dishes explained in Japanese and English (May 2026); halal, no alcohol; reservations by phone or WhatsApp.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['The shop says it has removed nuts from the whole menu — biryani, curry and naan included — for guests with nut allergies (own site).'], positives: ['Nut-free menu (own site).'] },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区中島町98 御所飴ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Own site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.00916, 135.770697); cross-checked: GSI 京都府京都市中京区中島町98番地 (lot) 34m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE, R + 'B534780797/'],
    price_note: 'Lunch price from the shop’s site; other items from 2025–2026 reviews.', last_checked: TODAY, items: [
      it('カレーランチセット', 'kare ranchi setto', 'Curry lunch set (choice of five curries, salad, soup)', 'from ¥980', 'Lunch', 'ask', 'ask', 'Own site; September 2026.', 'lunch'),
      it('', '', 'Chicken biryani', '', 'Biryani', 'ask', 'no', '2026.', 'chickenbiryani'),
      it('', '', 'Afghan mutton biryani', '', 'Biryani', 'ask', 'no', 'May 2026.', 'muttonbiryani'),
      it('', '', 'Kebab plate (chicken, mutton or shrimp) with rice or naan', '', 'Kebabs', 'ask', 'no', 'Own site.', 'kebab'),
    ] }, {
    cuisine: 'ハラルのバングラデシュ・インドのカレーとビリヤニ、中東のマトンとチキンのケバブ (公式サイト)・5種から選べるカレーランチセット980円から、辛さ調整可、サラダとスープ付き、名物のタンドリーチキンランチセット (公式サイト、2026年9月)・チキン、マトン、エビのケバブプレートにライスかナン (公式サイト)・チキンビリヤニ、チキンティッカビリヤニ、アフガンマトンビリヤニ、カブリプラオ (2025〜2026年)・サモサ、チキンロール、バターチキン、タンドールのナン、デザート (2025年3月)・最初にサービスのスープ (2025年3月、2026年6月)・アルコールなし (2026年2月)',
    neighborhood: '三条大橋の西、三条通の2階。京阪三条から徒歩3分',
    gf_detail: '要確認。タンドールのナンかライスのカレー、ビリヤニ、ケバブプレート、サモサ。グルテンの情報はない (公式サイト、2025〜2026年の口コミ)。',
    vegan_detail: '要確認。昼は5種のカレーから選べるが、ヴィーガンの品は書かれておらず、チキン、マトン、エビが中心 (公式サイト、2025〜2026年の口コミ)。',
    notes: '[ハラルのカレーとビリヤニ・三条大橋のそば] 三条大橋の西、礼拝スペースがありアルコールを出さない広い2階のハラル料理店。バングラデシュとインドのカレーにタンドールのナン、たっぷりのビリヤニ、中東のマトンとチキンのケバブ。カレーランチは980円から。メニュー全体でナッツ類を使わない。辛さは好みで。',
  });
}

save();
