// Local tick 2026-09-11 — honest empties, part B: fryers, grills and soy-glaze houses.
// Same verification as part A: JA listing + /en/, all four menu sub-tabs, all empty.
import { put, T } from './_tick_lib.mjs';
const M = u => `https://tabelog.com/tokyo/${u}/dtlmenu/`;
const NOMENU =
  'Tabelog prints 「No Menu」 and carries zero menu rows. Checked on the Japanese listing as well as /en/, and across all four menu sub-tabs — food, lunch, drink and course — all empty. The selector was re-verified in the same pass against a shop that does publish, so this is the shop publishing nothing, not a fetch failure. No first-party site is on record for it: the Tabelog page IS the website field, and Tabelog’s own listing page sits behind a Cloudflare challenge, so the official-homepage link it would normally carry could not be read. An honest empty, not an unfinished record.';

put('s23', 'tokyo_akashi', {
  verified: 'provisional', confidence: 'low', sources: [M('A1311/A131102/13016810')],
  price_note: `${NOMENU} 東京都台東区雷門1-16-1; cuisine 天ぷら / 天丼; average spend ¥8,000–9,999. ⚠ THAT PRICE BAND CHANGES WHAT THE MISSING MENU MEANS. Ten thousand yen at a tempura counter buys おまかせ — the chef fries to a sequence and sets each piece in front of you — which is precisely the format where there is no menu to publish, so the empty listing is consistent with the shop rather than a gap in it. For a coeliac the answer is nevertheless flat: tempura 衣 is wheat flour and the 天つゆ is dashi with soy. What is worth knowing is that a counter at this level fries to order in clean oil and the chef is right there, so this is one of the few settings where a 塩 (salt only, no tsuyu) request is normal and understood — it removes the soy but NOT the batter, so it is not a coeliac solution, only a soy one. For a vegan, 野菜の天ぷら exists but is fried in oil shared with prawn and fish and dipped in a katsuo dashi.`,
  last_checked: T, items: [] });

put('s27', 'tokyo_sandaime_tempura_suzuki_', {
  verified: 'provisional', confidence: 'low', sources: [M('A1310/A131003/13296829')],
  price_note: `${NOMENU} 東京都千代田区神田三崎町2-22-5; cuisine 天ぷら; average spend ¥3,000–3,999. 三代目 ("third generation") in the name is a family-succession claim, not a technique or allergen claim. At this price the format is a 定食 or 天丼 trade rather than an omakase counter, which means a fixed set rather than a chef-led sequence. ⚠ For a coeliac that is worse, not better: a set arrives assembled, with the 天つゆ already poured or the タレ already brushed, so the one intervention available at a high-end counter — asking for salt instead of sauce — is not on the table. Wheat 衣, soy tsuyu, shared fryer. No dish names or prices published.`,
  last_checked: T, items: [] });

put('s37', 'tokyo_tento', {
  verified: 'provisional', confidence: 'low', sources: [M('A1311/A131102/13095480')],
  price_note: `${NOMENU} 東京都台東区浅草1丁目41-1; cuisine 天ぷら / 天丼; average spend ¥3,000–3,999. An Asakusa tendon house in the 仲見世 area. ⚠ The specific thing to know about 天丼 as a category, and it is the reason these records are not interchangeable: a tendon is finished by DIPPING the fried piece into a soy-mirin タレ before it is laid on the rice, so the sauce penetrates the batter rather than sitting beside it. There is no scraping it off, and no version served dry unless the shop offers one — which this one has not published. Wheat twice over for a coeliac; fish and shellfish throughout for a vegan.`,
  last_checked: T, items: [] });

put('s37', 'tokyo_tempura_fukuoka', {
  verified: 'provisional', confidence: 'low', sources: [M('A1311/A131102/13126523')],
  price_note: `${NOMENU} 東京都台東区西浅草2-7-8; cuisine 天ぷら, and Tabelog publishes no average-spend band at all — so unlike 明石 and 三代目鈴木 there is not even a price signal to infer the service format from. Nothing is known here beyond the category. ⚠ On the category alone: 衣 is wheat flour and egg, the 天つゆ is katsuo dashi plus soy, and a single fryer serves prawn, fish and vegetable alike. 福岡 is the proprietor’s surname, not a regional style claim — it does not imply the Hakata tempura-teishoku format. Closed for both diets; no allergen statement published.`,
  last_checked: T, items: [] });

put('s27', 'tokyo_hatsuogawa', {
  verified: 'provisional', confidence: 'low', sources: [M('A1311/A131102/13003702')],
  price_note: `${NOMENU} 東京都台東区雷門2-8-4; cuisine 鰻 (unagi); average spend ¥4,000–4,999. ⚠ UNAGI IS THE MOST COMMONLY MIS-SOLD "SAFE" JAPANESE DISH AND THIS RECORD EXISTS MAINLY TO SAY SO. Grilled eel over rice looks like fish and rice, and a coeliac is frequently told it is fine. It is not: the 蒲焼のタレ that the eel is repeatedly basted with as it grills is soy sauce, mirin and sugar reduced down, and Japanese soy sauce is brewed with WHEAT unless a shop specifically uses たまり. The tare is also a communal pot — many unagi houses keep a decades-old master sauce that every eel is dipped into — so there is no un-basted portion to request and no way to isolate one. The sansho pepper and the rice are clean; nothing else on an unagi counter is. Completely closed for a vegan. No menu, prices or allergen statement published.`,
  last_checked: T, items: [] });

put('s30', 'tokyo_chacole', {
  verified: 'provisional', confidence: 'low', sources: [M('A1311/A131102/13164152')],
  price_note: `${NOMENU} 東京都台東区浅草4-14-6; cuisine 焼き鳥 / 鶏料理; average spend ¥4,000–4,999. ⚠ THE ONE QUESTION THAT DECIDES A YAKITORI COUNTER FOR A COELIAC IS 塩 OR タレ, AND IT IS ASKED PER SKEWER. Salt-grilled (塩) chicken is chicken, salt and charcoal — genuinely gluten-free in itself. Tare-glazed (タレ) is soy, mirin and sugar, and the tare is a shared dipping pot every skewer is plunged into, so one tare order contaminates nothing else but nothing tare-touched can be undone. A shop like this one therefore has a real answer available — "all salt, please" — which most of the houses in this batch do not. ⚠ Two caveats that survive a salt order: the つくね (minced patty) is bound with flour or panko at most shops, and many counters brush even 塩 skewers with a soy-based finishing liquid. Worth asking; not worth assuming. No menu published, so which skewers exist and at what price is unknown.`,
  last_checked: T, items: [] });

put('s35', 'tokyo_tsukishima_monjya_okoge_', {
  verified: 'provisional', confidence: 'low', sources: [M('A1311/A131102/13268705')],
  price_note: `${NOMENU} 東京都台東区浅草1-35-9 ザグローヴ浅草; cuisine もんじゃ焼き / お好み焼き / 居酒屋; average spend ¥2,000–2,999. ⚠ MONJA IS WHEAT BATTER BY DEFINITION — it is a thin flour-and-dashi slurry cooked on a griddle, and there is no low-flour version; the flour IS the dish, not a coating on it. Okonomiyaki is the same batter thickened. Both are finished with a brown sauce that is Worcestershire-style and contains wheat, and the dashi in the batter is katsuo. ⚠ THE SECOND PROBLEM IS THE GRIDDLE, AND IT IS THE ONE PEOPLE MISS: at a monja shop the 鉄板 is IN THE TABLE and diners cook their own, so every surface is a surface someone else’s wheat batter was just cooked on. There is no back-of-house preparation to ask for a clean version from. This is a category-level "no" for coeliac rather than a shop-level one. No menu, no prices published.`,
  last_checked: T, items: [] });

put('s21', 'tokyo_kamameshi_mutsumi', {
  verified: 'provisional', confidence: 'low', sources: [M('A1311/A131102/13003756')],
  price_note: `${NOMENU} 東京都台東区浅草3-32-4; cuisine 釜飯 / 日本料理; average spend ¥6,000–7,999. ⚠ KAMAMESHI IS ONE OF THE GENUINELY PROMISING CATEGORIES FOR A COELIAC AND IT IS WORTH RECORDING WHY, EVEN WITH NO MENU. It is rice cooked to order in an individual iron pot with its toppings and its seasoning stock — the base is rice, not noodles, not batter, and it comes with its own vessel, so cross-contact from other dishes is structurally lower than almost anything else in this batch. The problem is the stock: the rice is cooked in 出汁 seasoned with soy sauce, so the wheat is dissolved through the grain rather than sitting on top of it, and it cannot be removed after the fact. That makes this an ASK rather than a NO — a kitchen at ¥7,000 a head cooking each pot individually is in a position to use たまり or to season with salt if told at booking, which a ramen counter is not. Also the reason to book ahead: a kamameshi takes 20–30 minutes to cook, so the substitution has to be agreed before the pot goes on. For a vegan the dashi is the same obstacle and the toppings are typically chicken, seafood or both. No dish names or prices published.`,
  last_checked: T, items: [] });

put('s23', 'tokyo_sushi_zen', {
  verified: 'provisional', confidence: 'low', sources: [M('A1303/A130301/13070383')],
  price_note: `${NOMENU} 東京都渋谷区渋谷2-12-11; cuisine 寿司; average spend ¥15,000–19,999 — the most expensive shop in this batch by a wide margin. At that level the format is おまかせ at a counter, which again means there is genuinely no menu to publish. ⚠ FOR A COELIAC A HIGH-END SUSHI COUNTER IS THE BEST SITUATION IN THIS WHOLE BATCH, AND THE REASONING IS WORTH KEEPING. The core of edomae sushi is rice, vinegar, salt, sugar and fish — none of which contain wheat. The gluten arrives in exactly three places and all three are avoidable: the 煮切り soy brushed onto each piece (ask for salt or for it to be served plain), the 玉子 (often bound with a little flour), and the 穴子のツメ (a reduced sweet soy glaze). A chef serving one guest at a time, piece by piece, can route around all three — and at ¥15,000 has every reason to. Tell them at booking, not on arrival. ⚠ The usual soy-sauce dish on the counter is wheat soy; bringing your own tamari is standard practice and not considered rude. For a vegan this is the wrong building entirely.`,
  last_checked: T, items: [] });
