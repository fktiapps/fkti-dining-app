// Local tick 2026-09-11 — real menus, part G: 蕎麦所はるきや.
import { put, T } from './_tick_lib.mjs';
const TB = u => `https://tabelog.com/en/tokyo/${u}/dtlmenu/`;

// Every noodle row shares one pot of boiling water with the udon, the hiyamugi and the
// champon — all of which are 100% wheat. That is the governing fact for this shop and it
// is appended to each noodle row rather than stated once and forgotten.
const POT =
  ' ⚠ SHARED POT: this kitchen boils soba, udon, 冷麦 and ちゃんぽん — three of them pure wheat — and a neighbourhood soba shop has one pot. The water itself is a wheat bath, so no noodle here can be treated as gluten-free whatever its flour ratio.';
const TSUYU =
  ' The つゆ is かえし (soy sauce) plus katsuo dashi: wheat and fish in one liquid.';

const warm = (ja, romaji, en, price, note, dish_key, vegan = 'no') =>
  ({ ja, romaji, en, price, section: 'Warm Soba', gf: 'no', vegan, note: note + POT, dish_key });

put('s38', 'tokyo_sobadokoro_harukiya_soba', {
  verified: 'partial',
  confidence: 'medium',
  sources: [TB('A1303/A130301/13093050')],
  price_note:
    'Full 60-row menu with prices, read off Tabelog in four locales (en/tw/kr/th). 東京都渋谷区松濤1-28-5; 20 seats (five tables of four); average spend UNDER ¥999 — a neighbourhood 街のそば屋 in Shoto, not a specialist soba house. Tabelog publishes no business hours for it and leaves the priceRange field blank. Ten sections: 温そば → 冷そば → 温うどん → 冷うどん → 冷麦 → ちゃんぽん → 丼物 → カレー → 一品 → 汁. ⚠ THIS IS THE SHOP THE SHARED-POT ARGUMENT WAS WAITING FOR, AND IT IS THE CLEAREST CASE IN THE TOKYO SET. The menu sells 蕎麦, うどん, 冷麦 AND ちゃんぽん — soba plus THREE different pure-wheat noodles — out of a twenty-seat kitchen. A shop that size has one pot of boiling water. Even if the soba were 十割 (100% buckwheat), and nothing here says it is, it would be cooked in water that udon and hiyamugi have just been boiled in. There is no flour-ratio question to ask because the answer would not change the outcome. ⚠ ON TOP OF THAT THE つゆ IS かえし AND KATSUO DASHI — wheat soy and fish — under every warm and cold bowl alike, and the shop runs a FRYER (tempura, katsu, korokke-style items) whose oil serves everything battered. Three independent wheat routes into one bowl. ⚠ THE HONEST SUMMARY IS THAT NOTHING ON THIS 60-ROW MENU IS REACHABLE FOR A COELIAC AND ESSENTIALLY NOTHING FOR A VEGAN. That is not a failure of research; it is what a 街のそば屋 is. Recording it precisely is the point, because the shop looks — from its name and its buckwheat — like it ought to be the safe option. ⚠ THREE /en/ ERRORS RECUR HERE THAT THIS DATASET HAS SEEN BEFORE. 玉子とじ is rendered "Egg Tofu" (row 6), exactly as at 並木藪蕎麦 — it is egg dropped through the broth, no tofu involved. 花巻 is written 花捲 by the Chinese locale (row 4), the steamed Chinese roll, when it is hot soba under toasted nori — the identical error, at a second shop. And たぬき (rows 3, 23, 28, 41) means 天かす, TEMPURA SCRAPS, the same trade word that made 狸豆腐 a wheat dish at 酒処さくら. The three of them together are a good argument for never reading a Japanese noodle menu in English alone. ⚠ ONE ROW IS WORTH A SPECIFIC ASK DESPITE ALL THE ABOVE: けんちん (rows 9, 35). けんちん汁 is Zen temple cooking in origin — root vegetables and tofu in sesame oil, traditionally with NO dashi and no animal product — so it is the one broth in the building with a genuinely vegan lineage. At a soba shop it is nearly always made with katsuo dashi anyway, but it is the only row where the question is worth the breath.',
  last_checked: T,
  items: [
    warm('かけそば', 'kake soba', 'Soba in hot broth', 'JPY 580', `The plainest bowl and the cheapest.${TSUYU}`, 'kake_soba'),
    warm('きつねそば', 'kitsune soba', 'Soba with fried tofu skin', 'JPY 600', `きつね is 油揚げ — fried tofu skin, simmered in soy, mirin and dashi before it goes on the bowl, so it is wheat and fish before the broth is poured.${TSUYU}`, 'kitsune_soba'),
    warm('たぬきそば', 'tanuki soba', 'Soba with tempura scraps', 'JPY 600', `⚠ たぬき is not an animal and not a flavour: it is 天かす, the loose scraps of TEMPURA BATTER skimmed off the fryer. This bowl is wheat noodles under fried wheat in a wheat-soy broth. The same trade word makes 狸豆腐 a wheat dish at 酒処さくら.${TSUYU}`, 'tanuki_soba'),
    warm('花巻そば', 'hanamaki soba', 'Hot soba under toasted nori', 'JPY 630', `⚠ The Chinese locale writes 花捲 — the steamed Chinese bread roll — which is the identical error this dataset recorded at 並木藪蕎麦. 花巻 is hot soba covered in toasted nori; nothing is baked and nothing is a bun. The nori is clean; the noodles and broth are not.${TSUYU}`, 'hanamaki_soba'),
    warm('月見そば', 'tsukimi soba', 'Soba with a raw egg', 'JPY 680', `月見 ("moon viewing") is a raw egg dropped whole into the hot broth.${TSUYU}`, 'tsukimi_soba'),
    warm('玉子とじそば', 'tamago-toji soba', 'Soba with egg dropped through the broth', 'JPY 680', `⚠ /en/ calls this "Egg Tofu Soba" — the same mistranslation this dataset recorded at 並木藪蕎麦. There is no tofu: とじ means the beaten egg is stirred through the simmering broth so it sets in ribbons. The Chinese 蛋花湯 (egg-flower soup) has it right.${TSUYU}`, 'tamago_toji_soba'),
    warm('肉南蛮そば', 'niku nanban soba', 'Soba with simmered pork and negi', 'JPY 690', `南蛮 at a soba counter means negi, not spice. The meat is simmered in a soy-sweetened liquid before it goes in.${TSUYU}`, 'niku_nanban_soba'),
    warm('カレー南蛮そば', 'curry nanban soba', 'Soba in curry broth with negi', 'JPY 720', `⚠ A double wheat load that is easy to miss: Japanese カレー is thickened with a FLOUR ROUX, and here that roux is stirred into a soy-and-dashi soba broth. Flour in the noodles, flour in the sauce, wheat in the soy.`, 'curry_nanban_soba'),
    warm('けんちんそば', 'kenchin soba', 'Soba in kenchin vegetable broth', 'JPY 800', `⚠ THE ONE ROW WORTH ASKING ABOUT. けんちん汁 comes from Zen temple cooking — daikon, carrot, burdock, konnyaku and crumbled tofu fried in sesame oil and simmered — and in its original form it contains NO dashi and no animal product at all, which would make it vegan. At a 街のそば屋 it is almost always built on katsuo dashi and finished with soy, so this is an ask that will usually be answered no. Still the only vegan-lineage broth in the building, which is why the vegan column reads ask rather than no.`, 'kenchin_soba', 'ask'),
    warm('にしんそば', 'nishin soba', 'Soba with simmered herring', 'JPY 810', `A Kyoto dish: 身欠きにしん, dried herring, simmered for hours in soy, sugar and sake until sweet. The fish absorbs the soy completely.${TSUYU}`, 'nishin_soba'),
    warm('おかめとじそば', 'okame-toji soba', 'Okame soba set with egg', 'JPY 840', `おかめ is a bowl arranged with kamaboko, mushroom and vegetables to suggest a face; とじ adds the egg stirred through. ⚠ The kamaboko is the hidden item — a fish paste bound with starch and often wheat.${TSUYU}`, 'okame_toji_soba'),
    warm('めかぶとろろそば', 'mekabu tororo soba', 'Soba with mekabu seaweed and grated yam', 'JPY 840', `⚠ The most plant-based TOPPING on the menu — mekabu is the frilled root of wakame and とろろ is grated 山芋, both vegan and both gluten-free in themselves. Everything under them is not: wheat-bound noodles in a dashi-and-soy broth. If a vegan wanted one row to negotiate from, it is this one.${TSUYU}`, 'mekabu_tororo_soba', 'ask'),
    warm('天南そば', 'ten-nan soba', 'Soba with tempura and negi', 'JPY 850', `天ぷら南蛮 — tempura and negi in the hot bowl. Wheat batter on wheat noodles.${TSUYU}`, 'ten_nan_soba'),
    warm('鶏南蛮そば', 'tori nanban soba', 'Soba with chicken and negi', 'JPY 730', `Chicken and grilled negi in the hot broth.${TSUYU}`, 'tori_nanban_soba'),
    warm('親子南蛮そば', 'oyako nanban soba', 'Soba with chicken and egg', 'JPY 970', `親子 — chicken and egg together, set in the broth over the noodles.${TSUYU}`, 'oyako_nanban_soba'),
    warm('天とじそば', 'ten-toji soba', 'Soba with tempura set in egg', 'JPY 1,130', `Tempura simmered briefly and bound with egg over the noodles. Wheat batter, wheat noodles, wheat soy.${TSUYU}`, 'ten_toji_soba'),
    warm('天ぷらそば（並）', 'tempura soba (nami)', 'Tempura soba, regular', 'JPY 820', `Hot soba with tempura sitting in the broth, so the batter softens into it.${TSUYU}`, 'tempura_soba_nami'),
    warm('天ぷらそば（上）', 'tempura soba (jo)', 'Tempura soba, superior', 'JPY 1,100', `The upgraded tempura portion — more prawn. Same wheat throughout.${TSUYU}`, 'tempura_soba_jo'),

    { ja: 'もりそば', romaji: 'mori soba', en: 'Cold soba on a mat', price: 'JPY 580', section: 'Cold Soba', gf: 'no', vegan: 'no',
      note: `Cold noodles with a dipping つゆ.${TSUYU}${POT}`, dish_key: 'mori_soba' },
    { ja: '大盛そば', romaji: 'omori soba', en: 'Large cold soba', price: 'JPY 650', section: 'Cold Soba', gf: 'no', vegan: 'no',
      note: `A larger portion of もりそば.${TSUYU}${POT}`, dish_key: 'omori_soba' },
    { ja: 'ざるそば', romaji: 'zaru soba', en: 'Zaru soba (cold, with nori)', price: 'JPY 630', section: 'Cold Soba', gf: 'no', vegan: 'no',
      note: `ざる differs from もり by the shredded nori scattered on top — the nori itself is clean seaweed.${TSUYU}${POT}`, dish_key: 'zaru_soba' },
    { ja: '天ざるそば', romaji: 'tenzaru soba', en: 'Cold soba with tempura', price: 'JPY 1,030', section: 'Cold Soba', gf: 'no', vegan: 'no',
      note: `Cold noodles with tempura served separately. Korean 텐자루소바 keeps the distinction from the hot 天ぷらそば that /en/ elsewhere collapses.${TSUYU}${POT}`, dish_key: 'tenzaru_soba' },
    { ja: '冷したぬきそば', romaji: 'hiyashi tanuki soba', en: 'Chilled soba with tempura scraps', price: 'JPY 760', section: 'Cold Soba', gf: 'no', vegan: 'no',
      note: `⚠ Chilled たぬき — again 天かす, fried wheat batter scraps. The locales scatter badly here: Chinese reads it as frozen tempura and Korean as "cold Nagasaki soba"; neither is right.${TSUYU}${POT}`, dish_key: 'hiyashi_tanuki_soba' },
    { ja: '冷しきつねそば', romaji: 'hiyashi kitsune soba', en: 'Chilled soba with fried tofu skin', price: 'JPY 760', section: 'Cold Soba', gf: 'no', vegan: 'no',
      note: `Chilled, with soy-simmered 油揚げ.${TSUYU}${POT}`, dish_key: 'hiyashi_kitsune_soba' },
    { ja: '冷しきのこそば', romaji: 'hiyashi kinoko soba', en: 'Chilled soba with mushrooms', price: 'JPY 800', section: 'Cold Soba', gf: 'no', vegan: 'ask',
      note: `⚠ Mushrooms are the topping, so like the mekabu row this is plant-based ON TOP and neither vegan nor gluten-free underneath — the mushrooms are normally simmered in a dashi-and-soy liquid before they are chilled.${TSUYU}${POT}`, dish_key: 'hiyashi_kinoko_soba' },

    { ja: 'かけうどん', romaji: 'kake udon', en: 'Udon in hot broth', price: 'JPY 580', section: 'Warm Udon', gf: 'no', vegan: 'no',
      note: `⚠ Udon is 100% WHEAT FLOUR — there is no ratio question as there is with soba, and no version of the noodle that is not wheat. This is also the noodle whose boiling water contaminates every soba bowl in the shop.${TSUYU}`, dish_key: 'kake_udon' },
    { ja: 'きつねうどん', romaji: 'kitsune udon', en: 'Udon with fried tofu skin', price: 'JPY 600', section: 'Warm Udon', gf: 'no', vegan: 'no',
      note: `The classic pairing — soy-simmered 油揚げ on wheat noodles.${TSUYU}`, dish_key: 'kitsune_udon' },
    { ja: 'たぬきうどん', romaji: 'tanuki udon', en: 'Udon with tempura scraps', price: 'JPY 600', section: 'Warm Udon', gf: 'no', vegan: 'no',
      note: `Wheat noodles under fried wheat batter scraps in a wheat-soy broth.${TSUYU}`, dish_key: 'tanuki_udon' },
    { ja: 'あんかけうどん', romaji: 'ankake udon', en: 'Udon in thickened broth', price: 'JPY 680', section: 'Warm Udon', gf: 'no', vegan: 'no',
      note: `⚠ Only the Korean (앙카케) names the preparation. あんかけ is a broth thickened with 片栗粉 — potato starch, which is itself fine — but the broth being thickened is dashi and soy, and because an あん CLINGS, it coats the noodles rather than sitting under them.${TSUYU}`, dish_key: 'ankake_udon' },
    { ja: '玉子とじうどん', romaji: 'tamago-toji udon', en: 'Udon with egg through the broth', price: 'JPY 680', section: 'Warm Udon', gf: 'no', vegan: 'no',
      note: `⚠ The Chinese renders this 蛤蜊蛋 — CLAM and egg — and the Thai อุด้งไข่กุ้ง adds SHRIMP; neither shellfish is in the dish. It is beaten egg set through the broth. A relevant error for a shellfish allergy even though it does not change the gluten answer.${TSUYU}`, dish_key: 'tamago_toji_udon' },
    { ja: '肉南蛮うどん', romaji: 'niku nanban udon', en: 'Udon with simmered pork and negi', price: 'JPY 690', section: 'Warm Udon', gf: 'no', vegan: 'no',
      note: `Soy-simmered meat and negi on wheat noodles.${TSUYU}`, dish_key: 'niku_nanban_udon' },
    { ja: 'カレー南蛮うどん', romaji: 'curry nanban udon', en: 'Udon in curry broth with negi', price: 'JPY 720', section: 'Warm Udon', gf: 'no', vegan: 'no',
      note: `Wheat noodles in a flour-roux curry stirred into a soy-and-dashi broth.`, dish_key: 'curry_nanban_udon' },
    { ja: '力うどん', romaji: 'chikara udon', en: 'Udon with grilled mochi', price: 'JPY 730', section: 'Warm Udon', gf: 'no', vegan: 'no',
      note: `⚠ 力 ("strength") means grilled MOCHI dropped into the bowl — and mochi is pounded glutinous RICE, which despite the English name contains no gluten at all and is one of the safest staples in Japanese cooking. It is here sitting in wheat noodles and wheat broth, which is the whole problem: the safe ingredient does not make the bowl safe.${TSUYU}`, dish_key: 'chikara_udon' },
    { ja: '鶏南蛮うどん', romaji: 'tori nanban udon', en: 'Udon with chicken and negi', price: 'JPY 730', section: 'Warm Udon', gf: 'no', vegan: 'no',
      note: `Chicken and negi on wheat noodles.${TSUYU}`, dish_key: 'tori_nanban_udon' },
    { ja: 'けんちんうどん', romaji: 'kenchin udon', en: 'Udon in kenchin vegetable broth', price: 'JPY 800', section: 'Warm Udon', gf: 'no', vegan: 'ask',
      note: `The kenchin broth again — Zen temple origin, vegan in its original form, near-always made with katsuo dashi at a soba shop. Worth the same ask as the soba version, though the noodle is pure wheat either way.${TSUYU}`, dish_key: 'kenchin_udon' },
    { ja: 'おかめとじうどん', romaji: 'okame-toji udon', en: 'Okame udon set with egg', price: 'JPY 840', section: 'Warm Udon', gf: 'no', vegan: 'no',
      note: `Arranged toppings with egg stirred through; the kamaboko is starch- and often wheat-bound.${TSUYU}`, dish_key: 'okame_toji_udon' },
    { ja: '親子南蛮うどん', romaji: 'oyako nanban udon', en: 'Udon with chicken and egg', price: 'JPY 970', section: 'Warm Udon', gf: 'no', vegan: 'no',
      note: `Chicken and egg over wheat noodles.${TSUYU}`, dish_key: 'oyako_nanban_udon' },
    { ja: '鍋焼きうどん', romaji: 'nabeyaki udon', en: 'Udon simmered in an iron pot', price: 'JPY 1,100', section: 'Warm Udon', gf: 'no', vegan: 'no',
      note: `⚠ Served in the pot it was cooked in, with prawn tempura, egg, kamaboko and mushroom simmered together — so the batter dissolves INTO the broth. Of all the bowls here this is the one where the wheat is most thoroughly distributed.${TSUYU}`, dish_key: 'nabeyaki_udon' },
    { ja: '釜揚げうどん', romaji: 'kamaage udon', en: 'Udon served in its cooking water', price: 'JPY 1,100', section: 'Warm Udon', gf: 'no', vegan: 'no',
      note: `⚠ THE ROW THAT PROVES THE SHARED-POT POINT LITERALLY. 釜揚げ means the udon is brought to the table STILL IN THE WATER IT WAS BOILED IN, undrained. In a shop that boils soba in the same pot, the starch-clouded water is served as part of the dish.${TSUYU}`, dish_key: 'kamaage_udon' },

    { ja: 'もりうどん', romaji: 'mori udon', en: 'Cold udon with dipping sauce', price: 'JPY 580', section: 'Cold Udon', gf: 'no', vegan: 'no',
      note: `Cold wheat noodles with つゆ.${TSUYU}`, dish_key: 'mori_udon' },
    { ja: '冷したぬきうどん', romaji: 'hiyashi tanuki udon', en: 'Chilled udon with tempura scraps', price: 'JPY 760', section: 'Cold Udon', gf: 'no', vegan: 'no',
      note: `⚠ The Korean reads たぬき as 가쓰오 (bonito) here and as "Nagasaki" on the soba equivalent — two different wrong answers for the same word on one menu. It is 天かす, fried batter scraps.${TSUYU}`, dish_key: 'hiyashi_tanuki_udon' },
    { ja: '冷しきつねうどん', romaji: 'hiyashi kitsune udon', en: 'Chilled udon with fried tofu skin', price: 'JPY 760', section: 'Cold Udon', gf: 'no', vegan: 'no',
      note: `Chilled, with soy-simmered 油揚げ.${TSUYU}`, dish_key: 'hiyashi_kitsune_udon' },
    { ja: '冷しきのこうどん', romaji: 'hiyashi kinoko udon', en: 'Chilled udon with mushrooms', price: 'JPY 800', section: 'Cold Udon', gf: 'no', vegan: 'ask',
      note: `⚠ The Chinese reads きのこ as 木耳 (wood ear) specifically; the others keep it generic. Mushrooms simmered in dashi and soy, on wheat noodles.${TSUYU}`, dish_key: 'hiyashi_kinoko_udon' },

    { ja: '麦ざる', romaji: 'mugizaru', en: 'Chilled hiyamugi noodles', price: 'JPY 800', section: 'Hiyamugi', gf: 'no', vegan: 'no',
      note: `⚠ 冷麦 (hiyamugi) is a WHEAT noodle — thinner than udon, thicker than somen — and the Chinese locale calling it 蕎麥涼麵 (cold SOBA noodles) is flatly wrong; the Korean 밀면 ("wheat noodle") has it right. This is the third distinct pure-wheat noodle in the shop and the third thing going through the shared pot.${TSUYU}`, dish_key: 'mugizaru' },
    { ja: '辛味ちゃんぽん', romaji: 'karami champon', en: 'Spicy champon', price: 'JPY 910', section: 'Champon', gf: 'no', vegan: 'no',
      note: `⚠ The fourth noodle, and a Chinese-style wheat one: ちゃんぽん noodles are made with wheat flour and lye water, and the broth is pork- or chicken-based with seafood and vegetables stir-fried into it. An unexpected single row in a soba shop — and one more thing sharing the pot.`, dish_key: 'karami_champon' },

    { ja: '玉子丼（並）', romaji: 'tamago don (nami)', en: 'Egg rice bowl, regular', price: 'JPY 700', section: 'Rice Bowl', gf: 'no', vegan: 'no',
      note: '⚠ Rice and egg — the row a coeliac would pick off this menu, and it is still a no. A 丼 is defined by its 割下: onion and egg simmered in dashi, SOY and mirin, then poured over the rice so the seasoning soaks in. The soy is the dish, not a dressing on it.', dish_key: 'tamago_don_nami' },
    { ja: '玉子丼（上）', romaji: 'tamago don (jo)', en: 'Egg rice bowl, superior', price: 'JPY 860', section: 'Rice Bowl', gf: 'no', vegan: 'no',
      note: 'The larger version. Same soy-based 割下.', dish_key: 'tamago_don_jo' },
    { ja: 'カレー丼', romaji: 'curry don', en: 'Curry rice bowl', price: 'JPY 750', section: 'Rice Bowl', gf: 'no', vegan: 'no',
      note: '⚠ Note the distinction from カレーライス in the next section: a カレー丼 at a soba shop is curry let down with the house DASHI and soy rather than plain curry sauce — so it carries fish as well as the flour roux.', dish_key: 'curry_don' },
    { ja: '親子丼（並）', romaji: 'oyakodon (nami)', en: 'Chicken and egg rice bowl, regular', price: 'JPY 820', section: 'Rice Bowl', gf: 'no', vegan: 'no',
      note: 'Chicken and onion simmered in dashi, soy and mirin, set with egg over rice.', dish_key: 'oyakodon_nami' },
    { ja: '親子丼（上）', romaji: 'oyakodon (jo)', en: 'Chicken and egg rice bowl, superior', price: 'JPY 1,130', section: 'Rice Bowl', gf: 'no', vegan: 'no',
      note: 'The larger portion.', dish_key: 'oyakodon_jo' },
    { ja: 'カツ丼（並）', romaji: 'katsudon (nami)', en: 'Pork cutlet rice bowl, regular', price: 'JPY 820', section: 'Rice Bowl', gf: 'no', vegan: 'no',
      note: '⚠ Wheat three ways: the cutlet is crumbed in PANKO (which is bread), fried in the shared fryer, then simmered in a soy 割下 and set with egg.', dish_key: 'katsudon_nami' },
    { ja: 'カツ丼（上）', romaji: 'katsudon (jo)', en: 'Pork cutlet rice bowl, superior', price: 'JPY 1,130', section: 'Rice Bowl', gf: 'no', vegan: 'no',
      note: 'The larger cutlet. Same panko, fryer and soy.', dish_key: 'katsudon_jo' },
    { ja: '開化丼（並）', romaji: 'kaika don (nami)', en: 'Kaika don — beef, onion and egg, regular', price: 'JPY 820', section: 'Rice Bowl', gf: 'no', vegan: 'no',
      note: '⚠ A Meiji-era dish few English menus explain and none of the four locales renders usefully — Thai calls it grilled pork on one row and EEL on the next. 開化丼 ("civilisation bowl") is sliced beef and onion simmered in a soy 割下 and bound with egg, named for the Westernising 文明開化 era when Japan began eating beef. Soy-simmered, so a no.', dish_key: 'kaika_don_nami' },
    { ja: '開化丼（上）', romaji: 'kaika don (jo)', en: 'Kaika don, superior', price: 'JPY 1,130', section: 'Rice Bowl', gf: 'no', vegan: 'no',
      note: 'The larger portion of the beef-and-egg bowl.', dish_key: 'kaika_don_jo' },
    { ja: '天丼（並）', romaji: 'tendon (nami)', en: 'Tempura rice bowl, regular', price: 'JPY 960', section: 'Rice Bowl', gf: 'no', vegan: 'no',
      note: '⚠ The Thai locale calls this ทงคัตสึ (tonkatsu) on both rows, which is the wrong dish — a 天丼 is tempura, not a crumbed cutlet. Either way: wheat batter, shared fryer, and a soy-and-mirin タレ that the pieces are DIPPED in before plating, so the sauce is inside the batter.', dish_key: 'tendon_nami' },
    { ja: '天丼（上）', romaji: 'tendon (jo)', en: 'Tempura rice bowl, superior', price: 'JPY 1,250', section: 'Rice Bowl', gf: 'no', vegan: 'no',
      note: 'The larger tempura portion. The most expensive row on the menu.', dish_key: 'tendon_jo' },

    { ja: 'カレーライス', romaji: 'curry rice', en: 'Curry rice', price: 'JPY 650', section: 'Curry', gf: 'no', vegan: 'no',
      note: '⚠ Japanese curry is a FLOUR ROUX — wheat cooked in fat — so curry rice is a flour sauce over rice, not a naturally gluten-free dish as it would be in most other cuisines. Meat stock as well.', dish_key: 'curry_rice' },
    { ja: '大盛カレーライス', romaji: 'omori curry rice', en: 'Large curry rice', price: 'JPY 750', section: 'Curry', gf: 'no', vegan: 'no',
      note: 'The larger portion of the same roux-based curry.', dish_key: 'omori_curry_rice' },

    { ja: 'もつ煮込み', romaji: 'motsu nikomi', en: 'Simmered offal', price: 'JPY 460', section: 'A La Carte', gf: 'no', vegan: 'no',
      note: 'The only non-noodle, non-rice dish on the menu. Offal simmered in a miso-and-soy broth — the seasoning is the cooking liquid, and both miso and soy are wheat risks.', dish_key: 'motsu_nikomi' },
    { ja: '味噌汁', romaji: 'miso shiru', en: 'Miso soup', price: 'JPY 150', section: 'Soup', gf: 'ask', vegan: 'ask',
      note: '⚠ THE ONLY ROW ON THIS 60-ITEM MENU THAT IS NOT A FLAT NO, at ¥150 the cheapest thing in the shop. Miso soup is miso and dashi: the miso may be rice-fermented (gluten-free) or barley/wheat-fermented, and the dashi is katsuo (fish) unless it is kombu. Both are ask rather than no — but a soba shop’s dashi is bonito with near-certainty, so the vegan answer is very likely no in practice. Recorded ask because the question is at least answerable, which is more than any other row here allows.', dish_key: 'miso_shiru' },
  ],
});
