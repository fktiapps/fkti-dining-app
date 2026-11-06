// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 28.
//   + お料理 まえしろ Oryori Maeshiro (couple-run kappo counter off Fuyacho-Nijo, with Okinawan touches)
//   + 鮨 味輝 Sushi Miki (casual sushi counter in a Karasuma back lane, ¥315 a piece)
//   + 京料理 貴与次郎 Kyoryori Kiyojirou (Kyoto kaiseki near Nijo Castle by a former Hiiragiya head chef)
//   + たん熊北店 本店 Tankuma Kita Mise Honten (Kyoto kaiseki house on Nishikiyamachi; foreign bookings through hotels)
//   - ホテル長楽館 (26001362): skipped (reason below).
//   Picked on 2026-11-05: from `queue.mjs kyoto-missed next core 200`, lane ids 26001362 (skipped), 26034704, 26022452;
//   from `next notable 200`: 26017844, 26001494. None is in data/kyoto.json by name (まえしろ/Maeshiro, 味輝/Miki, 貴与次郎/
//   Kiyojirou, たん熊北店/Tankuma Kita Mise — 本家たん熊 is a different house) or address (尾張町234, 観音堂町454, 宗林町92,
//   紙屋町355).
//   Same-name count (same brand or operator only): まえしろ, 味輝 and 貴与次郎 single shops. たん熊北店: no second shop confirmed
//   in the sources opened. Service charges checked against Tabelog's Japanese original: まえしろ お付き出し ¥800 (no course);
//   たん熊北店 サービス料15% on lunch and dinner kaiseki; 貴与次郎 none; 味輝 none listed.
//   Greg's 2026-11-05 rulings applied: たん熊北店's foreign-booking policy is listed and quoted; a non-sexual compliment
//   (まえしろ) is kept, attributed and dated.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-28');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26001362', 'ホテル長楽館: the hotel-wide listing (Tabelog category “Other”) — its dining is already covered by kyoto_dessert_cafe_chourakukan and kyoto_le_chene_chourakukan at the same address, which the listing itself names as its restaurants');

// ================================================================ お料理 まえしろ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26034704/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '15:00'], ['18:00', '22:00']);
  put({
    id: 'kyoto_oryori_maeshiro', name: 'お料理 まえしろ (Oryori Maeshiro)', category: 'OMNI',
    lat: 35.012534, lng: 135.765927, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Seasonal kappo — sashimi, dashi soups, grills, simmered dishes, tempura and an anago tempura rice bowl; no gluten information (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi-based kappo of fish, crab and shellfish (2024–2026 reviews).',
    hours_raw: 'Lunch 12:00–15:00 (food L.O. 13:30), dinner 18:00–22:00 (food L.O. 21:00), daily; irregular closures (Tabelog). Reservations accepted; groups of four or more are phoned about sashimi (Tabelog). Otoshi ¥800 when not on a course (Tabelog, original お付き出し800円(コースはなし)). Cards accepted; no e-money or QR (Tabelog). 10 seats at an L-shaped counter; private hire up to 20 (Tabelog; September 2024). Non-smoking; BYO allowed; English menu (Tabelog). Children welcome, high chairs, off-menu kids’ dishes such as rice balls or kara-age; dinner better early for children (Tabelog). On Fuyacho near Nijo, west of Kyoto City Hall, 5 min from Kyoto Shiyakusho-mae Stn (Tabelog; September 2024).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Fuyacho near Nijo, west of Kyoto City Hall — 5 min from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Couple-run kappo counter of seasonal Kyoto cooking, by omakase course or à la carte (2024–2026 reviews) · omakase full course with a large clam soup, sashimi and light tempura (February 2024) · hamo and matsutake pot, fig tempura, simmered red snapper (September 2024) · obanzai of nanohana and Kujo green onion, steamed clams with wakame and urui, oysters and small taro with aonori sauce, anago tempura rice bowl (February 2025) · yuba, suzuki, grilled anago, katsuo tataki (June 2025) · a small crab the reviewer calls Kuppe (Shako) crab, matsutake chawanmushi, shiro-amadai grilled with sansho (November 2025) · Okinawan touches — sea grapes, brown sugar, goya ohitashi, brown-sugar sorbet (June 2025; August 2026) · Kyoto sake by the glass (2025–2026)',
    website: null, gmaps: gm('お料理 まえしろ 京都'), menu_url: null,
    notes: '[Kappo · Fuyacho-Nijo, a couple’s counter with an Okinawan accent] A calm, dimly lit ten-seat L-shaped counter west of Kyoto City Hall, run by a couple, where you can take the omakase or order à la carte from the day’s list — sashimi, clam soup, hamo and matsutake, fig tempura — and the husband cooks in front of you. Reviewers spot Okinawan touches such as sea grapes, goya and brown-sugar sorbet. Easy for solo diners; ¥800 otoshi if you skip the course.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed) and the chef’s wife, who run it as a couple'], origin: null,
      background: 'Reviewers from May 2025 to August 2026 describe a counter run by a couple — “a young couple” (June 2025), “a quiet husband and wife team” (May 2025). Two reviewers think the husband may be from Okinawa (June 2025: “Perhaps due to the owner’s Okinawan background”; August 2026: “The husband appears to be from Okinawa”), and the August 2026 reviewer adds that neither seems to be originally from Kyoto. A November 2025 diner wondered where “the charming lady of the restaurant” came from.',
      philosophy: null, specialty: 'Seasonal à la carte kappo; Okinawan-accented touches.',
      anecdotes: [
        { text: 'A February 2024 guest was delighted that the restaurant remembered an earlier visit and prepared a favourite crab dish.', source: R + 'B481027402/' },
        { text: 'A July 2026 regular prefers ordering à la carte from obanzai to fried dishes and finds booking easy.', source: R + 'B531112424/' },
      ],
      japanese_sources_summary: '食べログ: お料理 まえしろ、日本料理、中京区尾張町234 アマデウス麸屋町二條1F、京都市役所前駅から徒歩5分、毎日 昼12:00〜15:00 (料理L.O.13:30)、夜18:00〜22:00 (料理L.O.21:00)、不定休、予約可、4名以上は刺身の確認の電話あり、お付き出し800円 (コースはなし)、カード可、カウンター10席、貸切20名まで、禁煙、持ち込み可、英語メニュー、子ども可 (ハイチェア、おにぎりや唐揚げなどの対応も)。口コミ (2024〜2026年、英語): 夫婦で営むL字カウンターの割烹、おまかせかアラカルト、蛤の椀、鱧と松茸の鍋、いちじくの天ぷら、穴子天丼、湯葉、鰹のたたき、Kuppe と呼ばれる小さな蟹、松茸の茶碗蒸し、白甘鯛の山椒焼き、海ぶどうや黒糖、ゴーヤのおひたし、黒糖のシャーベットなど沖縄の要素、店主は沖縄出身らしい。',
      confidence: 'medium', sources: [TB, R + 'B481027402/', R + 'B494332464/', R + 'B501827517/', R + 'B507872495/', R + 'B509277827/', R + 'B517256289/', R + 'B523641229/', R + 'B527088513/', R + 'B531112424/', R + 'B533647167/'] },
    cultural_comfort: { level: 'english', note: 'English menu; solo-friendly counter; ¥800 otoshi when not on a course.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区尾張町234 アマデウス麸屋町二條 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.012534, 135.765927); cross-checked: GSI 京都府京都市中京区尾張町234番地 (lot) 54m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No menu or dish prices read; otoshi from Tabelog; reviewers spend about ¥10,000–20,000 a head.', last_checked: TODAY, items: [
      it('', '', 'Omakase course', '', 'Courses', 'ask', 'no', '2024–2026; price not given.', 'omakase'),
      it('', '', 'Otoshi (when ordering à la carte)', '¥800', 'Charges', '', '', 'Tabelog.', 'otoshi'),
    ] }, {
    cuisine: '夫婦で営む、季節の京料理の割烹カウンター。おまかせのコースかアラカルト (2024〜2026年の口コミ)・大きな蛤の椀、造り、軽い天ぷらのおまかせフルコース (2024年2月)・鱧と松茸の鍋、いちじくの天ぷら、甘鯛の炊いたん (2024年9月)・菜の花と Kujo ねぎのおばんざい、わかめとうるいの蒸し蛤、牡蠣と小芋の青のりあん、穴子天丼 (2025年2月)・湯葉、すずき、焼き穴子、鰹のたたき (2025年6月)・Kuppe と呼ばれる小さな蟹、松茸の茶碗蒸し、白甘鯛の山椒焼き (2025年11月)・海ぶどう、黒糖、ゴーヤのおひたし、黒糖のシャーベットなど沖縄の要素 (2025年6月、2026年8月)・グラスで京都の日本酒 (2025〜2026年)',
    neighborhood: '京都市役所の西、二条近くの麩屋町。京都市役所前駅から徒歩5分',
    gf_detail: '要確認。造り、出汁の椀、焼き物、炊き合わせ、天ぷら、穴子天丼の季節の割烹。グルテンの情報はない (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。出汁と魚、蟹、貝の割烹 (2024〜2026年の口コミ)。',
    notes: '[割烹・麩屋町二条、夫婦のカウンターに沖縄のひと味] 京都市役所の西、落ち着いた照明のL字のカウンター10席。夫婦で営み、おまかせか、その日のアラカルト (造り、蛤の椀、鱧と松茸、いちじくの天ぷら) を、目の前で主人が仕上げる。海ぶどう、ゴーヤ、黒糖のシャーベットなど、沖縄の要素に気づく口コミも。ひとりでも入りやすい。コースでなければお付き出し800円。',
  });
}

// ================================================================ 鮨 味輝
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26022452/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '23:00']);
  put({
    id: 'kyoto_sushi_miki_karasuma', name: '鮨 味輝 (Sushi Miki)', category: 'OMNI',
    lat: 35.004423, lng: 135.757443, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sushi, sashimi and small dishes with soy and sweet sauces (eel, anago); no gluten information (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish sushi counter (2025–2026 reviews).',
    hours_raw: '17:30–23:00 (L.O. 22:30), Monday–Saturday; closed Sunday and holidays (Tabelog). Reservations accepted and advised; full by evening with groups waiting (July 2026); the chef sometimes fits in same-day callers (April 2026). Cards: VISA, Master, JCB, AMEX (Tabelog). 16 seats, counter and tables (Tabelog; July 2026). Non-smoking (Tabelog). In a back lane between Muromachi and Shinmachi south of Nishiki, 3 min from Karasuma and Shijo Stns (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Back lane south of Nishiki between Muromachi and Shinmachi — 3 min from Karasuma Stn',
    cuisine: '“Casual sushi”: nigiri and hand rolls at a flat ¥315 a piece, rice from Shichijo Rice, fresh bluefin tuna as sashimi or sushi (Tabelog shop text) · omakase of ten nigiri served in rounds of three, three and four, with medium-fatty tuna and red rice nigiri (January 2026) · sweet shrimp, sea urchin, horse mackerel, simmered oysters, eel, kizushi, negitoro (2025–2026) · appetizers: grilled salmon belly, eggplant, grilled collar, Saikyo-miso grilled fish, simmered sea-bream collar, chawanmushi, whale bacon (2025–2026) · red miso soup heaped with clams (July 2026) · just under ¥5,000 a head without alcohol (November 2025)',
    website: null, gmaps: gm('鮨 味輝 京都 烏丸'), menu_url: null,
    notes: '[Sushi · Karasuma back lane, ¥315 a piece] A compact, lively sushi counter tucked in an alley off Muromachi near Karasuma station, where nigiri and hand rolls are a flat ¥315 each and the bluefin tuna is the pride. Start with a few appetizers — grilled salmon belly, simmered collar, whale bacon — then an omakase of ten or order piece by piece; finish with clam-heavy red miso soup. Book ahead; closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)'], origin: null,
      background: 'Not stated in the sources read. Reviewers describe a friendly, chatty chef, and a December 2025 reviewer felt the chef truly values local customers and visitors from within Japan.',
      philosophy: '“Casual sushi” at a flat price per piece (Tabelog shop text).', specialty: 'Bluefin tuna; ¥315 nigiri.',
      anecdotes: [
        { text: 'An April 2026 regular says the chef always finds a seat even when contacted on the day, and the conversation is half the fun.', source: R + 'B513535306/' },
        { text: 'A December 2025 diner who is wary of sea urchin found it with no hint of fishiness and was delighted.', source: R + 'B518487300/' },
      ],
      japanese_sources_summary: '食べログ: 鮨 味輝、寿司・鍋・ふぐ、中京区室町新町の間錦小路下ル観音堂町454-4、烏丸駅・四条駅から徒歩3分、月〜土 17:30〜23:00 (L.O.22:30)、日・祝休み、予約可、カード可、16席、禁煙。店の紹介: 「カジュアル鮨」、握りと手巻きは一律315円、Shichijo Rice の米、生の本まぐろ。口コミ (2025〜2026年、英語): おまかせ握り10貫、中トロ、赤いシャリの握り、甘えび、雲丹、鯵、牡蠣の煮付け、鰻、きずし、ねぎとろ、鮭ハラス焼き、かま焼き、西京焼き、鯛のあら炊き、茶碗蒸し、くじらベーコン、しじみ山盛りの赤だし、酒なしで1人5,000円弱、気さくな大将、地元や国内の客を大切にしているという声。',
      confidence: 'medium', sources: [TB, R + 'B323572838/', R + 'B457693281/', R + 'B500505468/', R + 'B510799946/', R + 'B513535306/', R + 'B518487300/', R + 'B518809068/', R + 'B521917472/', R + 'B530958328/', R + 'B531667857/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter, book ahead; a December 2025 reviewer felt it caters mainly to locals and domestic visitors.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区室町新町の間錦小路下ル観音堂町454-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.004423, 135.757443); cross-checked: GSI 京都府京都市中京区観音堂町454番地 (lot) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B521917472/'],
    price_note: 'Flat nigiri price from the Tabelog shop text; may have changed.', last_checked: TODAY, items: [
      it('', '', 'Nigiri or hand roll, per piece', '¥315', 'Sushi', 'ask', 'no', 'Tabelog shop text.', 'nigiri_piece'),
      it('', '', 'Omakase, 10 nigiri', '', 'Sushi', 'ask', 'no', 'January 2026; price not given.', 'omakase_10'),
    ] }, {
    cuisine: '「カジュアル鮨」: 握りと手巻きは一律315円、Shichijo Rice の米、生の本まぐろを造りや鮨で (食べログの店紹介)・おまかせ握り10貫を3、3、4貫に分けて、中トロや赤いシャリの握りも (2026年1月)・甘えび、雲丹、鯵、牡蠣の煮付け、鰻、きずし、ねぎとろ (2025〜2026年)・一品: 鮭ハラス焼き、なす、かま焼き、西京焼き、鯛のあら炊き、茶碗蒸し、くじらベーコン (2025〜2026年)・しじみ山盛りの赤だし (2026年7月)・酒なしで1人5,000円弱 (2025年11月)',
    neighborhood: '錦の南、室町と新町のあいだの路地。烏丸駅から徒歩3分',
    gf_detail: '要確認。鮨、造り、醤油や甘いたれ (鰻、穴子) の一品。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。魚の鮨のカウンター (2025〜2026年の口コミ)。',
    notes: '[鮨・烏丸の路地、1貫315円] 烏丸駅近く、室町の路地にひっそりある、にぎやかで小さな鮨店。握りも手巻きも一律315円で、自慢は本まぐろ。まずは鮭ハラス焼き、かまのあら炊き、くじらベーコンなどの一品、それからおまかせ10貫か1貫ずつ。締めはしじみたっぷりの赤だし。予約がおすすめ、日曜休み。',
  });
}

// ================================================================ 京料理 貴与次郎
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26017844/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:30'], ['17:30', '22:00']);
  put({
    id: 'kyoto_kyoryori_kiyojirou', name: '京料理 貴与次郎 (Kyoryori Kiyojirou)', category: 'OMNI',
    lat: 35.008951, lng: 135.753773, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kyoto kaiseki with white-miso soups, sashimi, grills, sesame tofu and mackerel sushi; no gluten information (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: kaiseki of fish and abalone on dashi (2025–2026 reviews).',
    hours_raw: 'Lunch 11:30–14:30 (last entry 13:00), dinner 17:30–22:00 (last entry 20:00), Tuesday–Sunday; closed Monday except holidays; ask about spring, autumn and New Year closures (Tabelog). Reservations accepted (Tabelog). No service charge or table charge (Tabelog, original サービス料・チャージは頂戴しておりません). Cards accepted; no e-money or QR (Tabelog). 46 seats: 12 at the counter, 36 at tables, four private rooms (Tabelog); shoes-off table rooms suit families with babies (April 2026). Non-smoking, smoking space; BYO allowed; children welcome (Tabelog). A machiya near Nijo Castle, 7 min from Karasuma-Oike Stn (Tabelog; July 2026).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Near Nijo Castle — 7 min from Karasuma-Oike Stn',
    cuisine: 'Classic Kyoto kaiseki in a machiya (2025–2026 reviews) · signature abalone in white-miso soup (2025–2026) · mini-kaiseki lunch ¥6,000–6,600 — seasonal hassun (shrimp, datemaki and small dried fish the reviewer calls tamazukuri, at New Year), tuna and white-fish sashimi, grilled ayu, white-miso soup (January–April 2026) · bamboo shoots, simmered hamo, small mackerel sushi, warm sesame tofu, grilled salmon, very good white rice (2026) · Kyoto sake such as Kumiyama (May 2026)',
    website: null, gmaps: gm('京料理 貴与次郎'), menu_url: null,
    notes: '[Kyoto kaiseki · Nijo Castle, a former Hiiragiya head chef’s machiya] A machiya near Nijo Castle opened by a former head chef of the inn Hiiragiya, serving quiet, classic kaiseki at gentle prices: the mini-kaiseki lunch is about ¥6,000, and the signature is abalone in sweet white-miso soup. Counter, tables and private rooms (shoes-off rooms suit families). No service charge. Closed Monday.',
    chef_bio: { chef_name: null, roles: ['Owner (named Horii on Tabelog) — reviewers describe a former head chef of Hiiragiya'], origin: null,
      background: 'Tabelog lists the owner as Horii. March and May 2026 reviewers say it was started by a former head chef of Hiiragiya, the historic Kyoto inn. July 2026 and December 2025 reviewers found the chef and owner friendly and easy to talk to.',
      philosophy: null, specialty: 'Abalone in white-miso soup.',
      anecdotes: [
        { text: 'A March 2026 reviewer wrote that the white-miso abalone seemed raised with so much love it “would not hurt to have it in your eye”.', source: R + 'B529160531/' },
        { text: 'A May 2026 diner found it serene and classic but wished for more creativity, especially in the sashimi and mackerel sushi.', source: R + 'B528114681/' },
      ],
      japanese_sources_summary: '食べログ: 京料理 貴与次郎、日本料理、中京区宗林町92、烏丸御池駅から徒歩7分、二条城から徒歩5分、火〜日 昼11:30〜14:30 (最終入店13:00)、夜17:30〜22:00 (最終入店20:00)、月曜休み (祝日は営業)、予約可、店主 Horii、サービス料・チャージなし、カード可、46席 (カウンター12、テーブル36)、個室4室、禁煙 (喫煙所あり)、持ち込み可、子ども可。口コミ (2025〜2026年、英語): Hiiragiya の元料理長の店、名物の鮑の白味噌椀、昼のミニ会席6,000〜6,600円、八寸、造り、鮎の塩焼き、筍、鱧の落とし、小さな鯖寿司、温かい胡麻豆腐、鮭の焼き物、白ご飯、Kumiyama の日本酒。',
      confidence: 'medium', sources: [TB, R + 'B515272078/', R + 'B518489178/', R + 'B522387506/', R + 'B522809649/', R + 'B525619850/', R + 'B526111660/', R + 'B528114681/', R + 'B529160531/', R + 'B532108236/', R + 'B534510017/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'No service charge; private rooms; families welcome.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区宗林町92',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.008951, 135.753773); GSI matches only the town 京都府京都市中京区宗林町, so not cross-checked at lot level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B522387506/', R + 'B525619850/'],
    price_note: 'No menu read; lunch prices from January and April 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Mini-kaiseki lunch', '¥6,000', 'Lunch', 'ask', 'no', 'January 2026; ¥6,600 in April 2026.', 'mini_kaiseki_lunch'),
      it('', '', 'Abalone in white-miso soup (signature)', '', 'Signature', 'ask', 'no', '2025–2026; part of the courses.', 'awabi_shiromiso'),
    ] }, {
    cuisine: '町家で味わう正統の京会席 (2025〜2026年の口コミ)・名物の鮑の白味噌椀 (2025〜2026年)・昼のミニ会席6,000〜6,600円、季節の八寸 (正月は海老、伊達巻、小魚の tamazukuri)、鮪と白身の造り、鮎の塩焼き、白味噌の椀 (2026年1〜4月)・筍、鱧の落とし、小さな鯖寿司、温かい胡麻豆腐、鮭の焼き物、とびきりの白ご飯 (2026年)・Kumiyama などの京都の日本酒 (2026年5月)',
    neighborhood: '二条城の近く。烏丸御池駅から徒歩7分',
    gf_detail: '要確認。白味噌の椀、造り、焼き物、胡麻豆腐、鯖寿司の京会席。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。出汁と魚と鮑の会席 (2025〜2026年の口コミ)。',
    notes: '[京料理・二条城、Hiiragiya の元料理長の町家] 二条城近くの町家で、老舗旅館 Hiiragiya の元料理長が開いた店。落ち着いた正統の会席を手ごろに。昼のミニ会席は約6,000円、名物は甘い白味噌の鮑の椀。カウンター、テーブル、個室 (靴を脱ぐ部屋は家族連れにも)。サービス料なし、月曜休み。',
  });
}

// ================================================================ たん熊北店 本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26001494/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '15:00'], ['17:30', '22:00']);
  put({
    id: 'kyoto_tankuma_kitamise_honten', name: 'たん熊北店 本店 (Tankuma Kita Mise Honten)', category: 'OMNI',
    lat: 35.0052, lng: 135.770066, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kyoto kaiseki of sashimi, dashi soups, grills, simmered dishes and seasonal rice; no gluten information (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: kaiseki of fish, soft-shelled turtle and dashi (2025–2026 reviews).',
    hours_raw: 'Lunch 12:00–15:00 (L.O. 13:30), dinner 17:30–22:00 (L.O. 19:30), daily; irregular closures (Tabelog). Reservations accepted. Foreign-booking policy, as stated in Tabelog’s English listing: “Please inquire at the hotel where you are staying when making reservations for foreign residents,” and “Please inquire at the hotel where you are staying when making reservations.” Cancellation fees 30% three days before, 50% two days, 70% the day before, 100% on the day; no cancellations by voicemail, email or on closing days (Tabelog). 15% service charge on lunch and dinner kaiseki (Tabelog, original 昼会席・夜会席につきましては、別途サービス料15％を加算). Cards accepted; no e-money or QR (Tabelog). 50 seats: 7 at the counter, six private rooms for 2–25 (Tabelog). Non-smoking; wheelchair accessible; children welcome, kids’ menu (Tabelog). On Nishikiyamachi north of Shijo, 5 min from Kyoto Kawaramachi Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishikiyamachi north of Shijo — 5 min from Kyoto Kawaramachi Stn',
    cuisine: 'Established Kyoto kaiseki house, courses only, in private rooms and at the counter (July 2026) · lunch course of eight dishes: sashimi, soup, grill, simmered vegetables, sea bream and pea rice, red miso soup, dessert, coffee or herbal tea (March 2025) · seasonal dishes: soft-shelled turtle (April 2026), boiled hamo with plum and grilled ayu (July 2026), sashimi of sea bream, shrimp and tuna, sesame tofu, young sweetfish, Kamo eggplant (May 2026) · spring bento of chirashi sushi and simmered dishes; meals delivered to Gion teahouses for Setsubun and after the Miyako Odori (2025–2026 reviews) · generous portions (November 2025)',
    website: null, gmaps: gm('たん熊北店 本店'), menu_url: null,
    notes: '[Kyoto kaiseki · Nishikiyamachi, an established house] A long-established kaiseki house on Nishikiyamachi near Shijo serving courses in private rooms and at a seven-seat counter — sea bream rice in spring, hamo and ayu in summer, soft-shelled turtle — and cooking for Gion teahouse banquets with maiko and geiko. Note the booking rule: per its Tabelog English listing, foreign visitors are asked to book via the hotel where the guest is staying. 15% service on kaiseki; cancellation fees from three days out.',
    chef_bio: { chef_name: null, roles: ['Kitchen (unnamed)'], origin: null,
      background: 'Not stated in the sources read. A May 2025 business guest describes a reception with maiko and geiko, one assigned to each guest, and felt it might be hard for first-time visitors to get in; February 2026 and April 2025 reviewers had its food delivered to Gion teahouses.',
      philosophy: '“Ichigo ichie” — cherishing each encounter (April 2026 review).', specialty: 'Seasonal kaiseki; soft-shelled turtle.',
      anecdotes: [
        { text: 'A March 2026 regular looks forward every year to the spring bento of chirashi sushi and simmered dishes.', source: R + 'B336416318/' },
        { text: 'A November 2025 family, after the autumn leaves, found the course generous enough to satisfy guests from abroad in both quantity and quality.', source: R + 'B538295836/' },
      ],
      japanese_sources_summary: '食べログ: たん熊北店 本店、日本料理、中京区西木屋町通四条上ル紙屋町355、京都河原町駅から徒歩5分、毎日 昼12:00〜15:00 (L.O.13:30)、夜17:30〜22:00 (L.O.19:30)、不定休、予約可、キャンセル料 (3日前30%、2日前50%、前日70%、当日100%)、昼会席・夜会席は別途サービス料15%、カード可、50席 (カウンター7)、個室6室、禁煙、車椅子可、子ども可・キッズメニュー。英語版の予約欄: 外国人のお客様の予約は宿泊先のホテルに問い合わせるよう案内。口コミ (2025〜2026年、英語): コースのみ、昼の8品のコース、鯛とえんどう豆のご飯、すっぽん、鱧の落としと梅、鮎、春の弁当 (ちらし寿司、炊き合わせ)、祇園のお茶屋への仕出し、舞妓・芸妓の宴席。',
      confidence: 'medium', sources: [TB, R + 'B336416318/', R + 'B354421321/', R + 'B484582101/', R + 'B502559664/', R + 'B502817434/', R + 'B507999688/', R + 'B520068872/', R + 'B525467458/', R + 'B531770142/', R + 'B538295836/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Per its Tabelog English listing, foreign visitors are asked to book via the hotel where the guest is staying (“Please inquire at the hotel where you are staying when making reservations for foreign residents”); no reason is given. 15% service charge; strict cancellation fees.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区西木屋町通四条上ル紙屋町355',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.0052, 135.770066); cross-checked: GSI 京都府京都市中京区紙屋町355番地 (lot) 26m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B354421321/', TB],
    price_note: 'No menu read; one total from a May 2026 review (¥28,000 for two, à la carte); 15% service on kaiseki per Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Lunch kaiseki, eight dishes', '', 'Courses', 'ask', 'no', 'March 2025; price not given; plus 15% service.', 'lunch_kaiseki'),
      it('', '', 'Dinner kaiseki', '', 'Courses', 'ask', 'no', '2025–2026; price not given; plus 15% service.', 'dinner_kaiseki'),
    ] }, {
    cuisine: '個室とカウンターでコースのみの老舗の京会席 (2026年7月)・昼の8品のコース: 造り、椀、焼き物、炊き合わせ、鯛とえんどう豆のご飯、赤だし、甘味、コーヒーかハーブティー (2025年3月)・季節の料理: すっぽん (2026年4月)、鱧の落としと梅、鮎の塩焼き (2026年7月)、鯛、海老、鮪の造り、胡麻豆腐、稚鮎、Kamo なす (2026年5月)・春のちらし寿司と炊き合わせの弁当、節分や Miyako Odori のあとの祇園のお茶屋への仕出し (2025〜2026年の口コミ)・量はたっぷり (2025年11月)',
    neighborhood: '四条の北の西木屋町。京都河原町駅から徒歩5分',
    gf_detail: '要確認。造り、出汁の椀、焼き物、炊き合わせ、季節のご飯の京会席。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。魚、すっぽん、出汁の会席 (2025〜2026年の口コミ)。',
    notes: '[京料理・西木屋町、老舗の会席] 四条近くの西木屋町の老舗の会席の店。個室と7席のカウンターでコースのみ、春は鯛ご飯、夏は鱧と鮎、すっぽんも。祇園のお茶屋の舞妓・芸妓の宴席の料理も手がける。予約の注意: 食べログ英語版によれば、外国人のお客様は宿泊先のホテルを通して予約するよう案内している。会席にはサービス料15%、キャンセル料は3日前から。',
  });
}

save();
