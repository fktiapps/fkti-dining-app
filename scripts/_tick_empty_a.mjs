// Local tick 2026-09-11 — honest empties, part A: the noodle houses.
// Every shop here was checked on the JAPANESE listing as well as /en/, and across all
// four menu sub-tabs (food / lunch / drink / course). All four are empty and Tabelog
// prints 「No Menu」. These are shops that publish nothing on Tabelog, not fetch
// failures and not a broken selector — the selector was re-verified in the same pass
// against a shop that does publish (13008576, 95 rows).
import { put, T } from './_tick_lib.mjs';
const M = u => `https://tabelog.com/tokyo/${u}/dtlmenu/`;
const NOMENU =
  'Tabelog prints 「No Menu」 and carries zero menu rows. Checked on the Japanese listing as well as /en/, and across all four menu sub-tabs — food, lunch, drink and course — all empty. The selector was re-verified in the same pass against a shop that does publish, so this is the shop publishing nothing, not a fetch failure. No first-party site is on record for it: the Tabelog page IS the website field, and Tabelog’s own listing page sits behind a Cloudflare challenge, so the official-homepage link it would normally carry could not be read. An honest empty, not an unfinished record.';

put('s18', 'tokyo_nitenmon_yabu', {
  verified: 'provisional', confidence: 'low', sources: [M('A1311/A131102/13010504')],
  price_note: `${NOMENU} What the listing does establish: 東京都台東区花川戸1-15-7, MZ二天門1F, 21 seats (tables only), 11:00–17:00 daily with no fixed closing day, average spend ¥1,000–1,999, and a cuisine triple of 蕎麦 / 天丼 / カツ丼. ⚠ THAT TRIPLE IS THE WHOLE DIETARY STORY AND IT IS BAD IN THREE SEPARATE WAYS. 藪 (yabu) names one of the three classical Edo soba lineages, and hand-cut soba in that tradition is conventionally 二八 — 20% WHEAT flour as the binder. The shop declares no flour ratio, so the noodles are "no", not "ask". 天丼 is tempura over rice: wheat batter. カツ丼 is a crumbed pork cutlet: panko, which is bread. There is no line of this menu that a coeliac can reach without a declaration the shop has never published. For a vegan the picture is equally closed — the つゆ at any soba counter is かえし (soy sauce) plus katsuo dashi, and both remaining dishes are pork or seafood. Worth a phone call only if someone is prepared to ask about 十割 in Japanese.`,
  last_checked: T, items: [] });

put('s20', 'tokyo_kuwasaru_asakusa_saryo_k', {
  verified: 'provisional', confidence: 'low', sources: [M('A1311/A131102/13175752')],
  price_note: `${NOMENU} The listing gives 東京都台東区浅草5-20-3, cuisine 日本料理 / 蕎麦, and an average spend of ¥5,000–5,999 — which is the one genuinely informative number here. A soba house charging six thousand yen a head is not selling bowls of かけ; at that price this is a コース house, soba arriving as one seat in a multi-course meal. ⚠ THAT MATTERS MORE TO A COELIAC THAN THE MISSING MENU DOES. A set course removes the ability to order around a problem: you are served what the kitchen has planned, the soba is conventionally 二八 (20% wheat) unless the shop declares 十割, and the accompanying 出汁 and かえし carry both fish and wheat soy. A course house is also the setting where a dietary request must be made at BOOKING rather than on arrival, because the ingredients are bought to a set menu. No prices, no dish names and no allergen statement are published anywhere Tabelog exposes.`,
  last_checked: T, items: [] });

put('s28', 'tokyo_futaba', {
  verified: 'provisional', confidence: 'low', sources: [M('A1310/A131003/13068810')],
  price_note: `${NOMENU} 東京都千代田区神田猿楽町2-2-9; cuisine 蕎麦 / うどん. Tabelog prints no average-spend band for this shop either, so there is not even a price signal to record — this is one of the emptiest listings in the Tokyo set. ⚠ THE 蕎麦／うどん PAIRING IS ITSELF A FINDING FOR A COELIAC, AND IT IS THE REASON THIS RECORD IS NOT MERELY BLANK. A shop that sells both soba and udon boils them in ONE POT of shared water. Udon is 100% wheat. Even if this kitchen ran 十割 (pure buckwheat) soba — and it publishes nothing to suggest it does — the boiling water is a wheat bath, so the soba cannot be treated as gluten-free regardless of its flour ratio. This is the single most common trap in Japanese noodle dining and it applies here on the cuisine tag alone, with no menu needed.`,
  last_checked: T, items: [] });

put('s34', 'tokyo_maruhashi', {
  verified: 'provisional', confidence: 'low', sources: [M('A1303/A130301/13067638')],
  price_note: `${NOMENU} 東京都渋谷区東1-24-4; cuisine 蕎麦 / うどん / 天丼, no average-spend band published. ⚠ SAME SHARED-POT PROBLEM AS 双葉, WITH A THIRD STRIKE ON TOP: soba and udon boiled in one pot means the udon’s wheat is in the water the soba cooks in, and 天丼 adds a wheat batter and a fryer. A shop frying tempura is also frying it in oil shared with everything else that is battered, so even a nominally clean dish picks up wheat from the fryer. Nothing here is reachable for a coeliac and the shop publishes no allergen statement to argue otherwise. For a vegan, the つゆ is dashi-and-soy at every one of the three counters.`,
  last_checked: T, items: [] });

put('s35', 'tokyo_benten', {
  verified: 'provisional', confidence: 'low', sources: [M('A1311/A131102/13012246')],
  price_note: `${NOMENU} 東京都台東区浅草3-21-8; cuisine 蕎麦 / 天丼, no average-spend band. An Asakusa soba counter that also runs a tendon trade: conventionally 二八 noodles (20% wheat, undeclared here), a wheat-battered fry, and a shared fryer. ⚠ The one thing worth flagging specifically is the 天丼 タレ — a tendon sauce is soy, mirin and sugar reduced together, so it is wheat a second time over, independently of the batter. A coeliac sometimes assumes that scraping the batter off makes a tendon safe; the sauce it is dressed with rules that out here. Both diets are closed on the cuisine tags alone and the shop publishes nothing that would reopen them.`,
  last_checked: T, items: [] });

put('s35', 'tokyo_meidai_shiraki_soba', {
  verified: 'provisional', confidence: 'low', sources: [M('A1310/A131003/13205799')],
  price_note: `${NOMENU} 東京都文京区本郷1-33-7; cuisine 蕎麦 / うどん / 丼物, no average-spend band published. 名代 in the name is a trade word meaning "signature" or "renowned for" — it is marketing, not a lineage marker like 藪 or 更科, so it tells us nothing about flour. ⚠ Soba AND udon again: one pot, shared wheat water, so the soba cannot be clean whatever its ratio. The 丼物 line adds rice bowls, which at a soba shop are almost always カツ丼 (panko) or 天丼 (batter) and are dressed with a soy-based タレ in either case. No allergen statement, no dish names, no prices. Closed for both diets on the strength of the cuisine tags.`,
  last_checked: T, items: [] });

for (const [shard, id, url, addr, band, note] of [
  ['s23', 'tokyo_fuji_ramen', 'A1311/A131102/13168762', '東京都台東区浅草1-24-5', '¥1,000–1,999',
   'ラーメン / つけ麺. ⚠ Tsukemen is the harder of the two for a coeliac and the reason is not the noodle: a つけ汁 is a REDUCED, concentrated broth, so whatever soy sauce and wheat went into it is present at higher strength per mouthful than in a normal ramen bowl. The noodles themselves are 中華麺 — wheat with かん水 — at essentially every ramen counter in Japan, and a shop that publishes no menu has certainly not published a rice-noodle option.'],
  ['s25', 'tokyo_butanova_zero_kanda_suid', 'A1310/A131003/13306517', '東京都千代田区西神田2-8-9 ウインド水道橋ビル1F', '¥1,000–1,999',
   'ラーメン. The 豚 in ブタノヴァ marks this as a pork house. ⚠ Worth calling out for a VEGAN specifically: where a shoyu or shio shop can at least conceivably run a vegetable variant, a pork-bone counter has one stockpot and it is animal, so there is no version of the bowl to negotiate towards. For a coeliac the 中華麺 is wheat and the タレ that seasons the bowl is soy. Nothing published.'],
  ['s26', 'tokyo_asakusa_ikutaan', 'A1311/A131102/13255913', '東京都台東区花川戸1-6-4', 'under ¥999',
   'ラーメン, and the sub-¥999 band is the informative part: this is a cheap counter bowl shop. ⚠ At that price point a kitchen is usually buying its noodles and often its タレ in rather than making them, which means the shop itself frequently cannot answer an allergen question — you get "I don’t know" rather than "no". 中華麺 is wheat; the broth at this price is near-certainly a bought concentrate carrying soy and usually pork or chicken extract.'],
  ['s29', 'tokyo_niku_no_iro', 'A1311/A131102/13322174', '東京都台東区浅草1-1-12 浅草地下街 38号室', '¥1,000–1,999',
   'ラーメン, in 浅草地下街 — the Asakusa underground arcade, a genuinely tiny post-war shopping tunnel where the units are a few square metres each. ⚠ THAT ADDRESS IS A DIETARY FACT: a kitchen that size has one fryer, one pot and one counter, so cross-contact is not a policy question but a physical one and there is no room for a separate preparation. 肉 in the name points at a chashu-forward bowl. Wheat 中華麺, soy タレ, meat broth; nothing published.'],
  ['s29', 'tokyo_menmen_kamezou', 'A1310/A131003/13049895', '東京都千代田区西神田2-1-1', 'under ¥999',
   'ラーメン at under ¥999 — a student-priced Jimbocho counter. Same structural reading as 幾多庵: at this price the noodles and the seasoning base are bought in, so the shop is often not the party that knows the ingredients. 中華麺 is wheat and かん水; the タレ is soy. No menu, no prices and no allergen statement anywhere Tabelog exposes.'],
  ['s36', 'tokyo_noukou_ebi_tsukemen_tomo', 'A1310/A131003/13295451', '東京都千代田区神田三崎町2-19-7', '¥1,000–1,999',
   'つけ麺, and the shop name declares the broth outright: 濃厚 EBI = concentrated SHRIMP. ⚠ THIS IS THE ONE SHOP IN THIS GROUP WITH A NAMED ALLERGEN, AND IT IS A MAJOR ONE. Shrimp is here by design rather than as a garnish — an 海老 tsukemen is built on shrimp-head stock, so there is no dish in the building that avoids it. Layer the usual tsukemen problem on top: the dip is a reduction, so the wheat-bearing soy in it is concentrated, and the noodles are 中華麺. Relevant to shellfish allergy as much as to coeliac.'],
  ['s38', 'tokyo_menya_tori_roji', 'A1303/A130301/13232725', '東京都渋谷区宇田川24-6 渋ビルヂング B1F', 'under ¥999',
   'ラーメン, basement unit off Udagawacho. 鶏 in the name marks a chicken-stock house — 鶏白湯 or 鶏清湯 — which is the ramen style a vegan most often gets wrongly recommended, because a pale chicken broth photographs like a vegetable one. ⚠ It is not: 鶏白湯 is emulsified chicken bone and is as animal as tonkotsu. Wheat 中華麺 and soy タレ for the coeliac. Nothing published.'],
]) put(shard, id, {
  verified: 'provisional', confidence: 'low', sources: [M(url)],
  price_note: `${NOMENU} ${addr}; average spend ${band}; cuisine ${note}`,
  last_checked: T, items: [] });
