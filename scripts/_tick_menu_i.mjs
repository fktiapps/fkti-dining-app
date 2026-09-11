// Local tick 2026-09-11 — real menus, part I: 三代目秀吉 神保町水道橋店.
// The menu is deliberately PARALLEL: the same 12 chicken parts, 2 meat skewers and 7
// vegetable skewers are sold twice — once 焼き鳥 (grilled) and once 串カツ (panko-crumbed
// and deep-fried). Identical names, identical order, different price, opposite answer.
// Both blocks are generated from one table below so the pairing stays visible.
import { put, T } from './_tick_lib.mjs';
const TB = u => `https://tabelog.com/en/tokyo/${u}/dtlmenu/`;

const GRILL = ' ⚠ Ordered 塩 this is meat, salt and charcoal — clean. Ordered たれ it is soy from a shared pot. Ask for 塩. ⚠ AND CHECK YOU ARE ORDERING FROM THE GRILL SECTION: the identically-named 串カツ version of this skewer is crumbed in panko and deep-fried.';
const KATSU = ' ⚠ 串カツ: flour, egg wash and PANKO, deep-fried in shared oil. Panko is bread. This is the same ingredient as the identically-named 焼き鳥 row above it — the only difference is that this one is breaded, and the English names give no hint of it.';

// [ja, romaji, en, grilled price, katsu price, vegan-when-grilled, extra note]
const PARTS = [
  ['もも', 'momo', 'Chicken thigh', 'JPY 97', 'JPY 165', 'no', '⚠ /en/ renders もも as "Peach" in both sections — もも is the thigh; the fruit 桃 is a homophone. All four locales stumble on it.'],
  ['ねぎま', 'negima', 'Chicken and spring onion', 'JPY 97', 'JPY 165', 'no', 'Chicken alternating with negi — the cleanest grilled order here.'],
  ['せせり', 'seseri', 'Chicken neck meat', 'JPY 97', 'JPY 165', 'no', 'Neck meat, plain cut.'],
  ['皮', 'kawa', 'Chicken skin', 'JPY 97', 'JPY 165', 'no', 'Skin, grilled crisp.'],
  ['ささみ', 'sasami', 'Chicken tender', 'JPY 97', 'JPY 165', 'no', 'The lean breast fillet.'],
  ['ぼんじり', 'bonjiri', 'Chicken tail', 'JPY 97', 'JPY 165', 'no', 'The fatty tail cut.'],
  ['やげん軟骨', 'yagen nankotsu', 'Breastbone cartilage', 'JPY 97', 'JPY 165', 'no', 'Keel cartilage from the breastbone.'],
  ['ハツ', 'hatsu', 'Chicken heart', 'JPY 97', 'JPY 165', 'no', 'Heart.'],
  ['ハツ【数量限定】', 'hatsu (gentei)', 'Chicken heart, limited quantity', 'JPY 97', 'JPY 165', 'no', 'A limited-quantity grade of the heart skewer, listed separately at the same price.'],
  ['白レバー', 'shiro reba', 'White liver (fatty chicken liver)', 'JPY 97', 'JPY 165', 'no', '白レバー is the pale, fat-marbled liver — a prized cut, not a different organ. Liver carries no wheat in itself.'],
  ['砂肝', 'sunagimo', 'Gizzard', 'JPY 97', 'JPY 165', 'no', 'Gizzard.'],
  ['つくね', 'tsukune', 'Minced chicken patty', 'JPY 97', 'JPY 165', 'no', '⚠ THE ONE SKEWER A SALT ORDER DOES NOT RESCUE EVEN ON THE GRILL SIDE: つくね must be BOUND to hold the stick, and the binder is flour or panko at most counters — inside the patty. Recorded no in both sections.'],
];
const MEATS = [
  ['豚バラ', 'buta bara', 'Pork belly', 'JPY 198', 'JPY 219', 'no', 'Pork belly.'],
  ['牛カルビ', 'gyu karubi', 'Beef short rib', 'JPY 198', 'JPY 219', 'no', '⚠ カルビ is conventionally served in a soy-based tare rather than with salt, so confirm 塩 is even offered for this one.'],
];
const VEGS = [
  ['玉ねぎ', 'tamanegi', 'Onion', 'JPY 198', 'JPY 209', 'vegan', 'Onion, grilled whole or in wedges.'],
  ['長ねぎ', 'naganegi', 'Long spring onion', 'JPY 198', 'JPY 209', 'vegan', 'Lengths of leek-like negi, charred.'],
  ['山芋', 'yamaimo', 'Mountain yam', 'JPY 198', 'JPY 209', 'vegan', 'Thick rounds of yam, grilled until soft.'],
  ['エリンギ', 'eringi', 'King oyster mushroom', 'JPY 198', 'JPY 209', 'vegan', 'King oyster mushroom.'],
  ['椎茸', 'shiitake', 'Shiitake mushroom', 'JPY 198', 'JPY 209', 'vegan', 'Whole shiitake caps.'],
  ['うずら', 'uzura', 'Quail egg', 'JPY 198', 'JPY 209', 'no', '⚠ Filed under VEGETABLE skewers but it is a quail EGG — not vegan, despite the section it sits in.'],
  ['銀杏', 'ginnan', 'Ginkgo nuts', 'JPY 198', 'JPY 209', 'vegan', 'Ginkgo nuts threaded on a stick. ⚠ Worth noting ginkgo is mildly toxic in quantity — a dozen or so is the conventional adult limit — which is unrelated to diet but worth knowing.'],
];

const items = [];
const push = (arr, section, isKatsu) => {
  for (const [ja, romaji, en, gp, kp, veganGrilled, extra] of arr) {
    const bound = romaji === 'tsukune';
    items.push({
      ja: isKatsu ? `${ja}（串カツ）` : ja, romaji, en,
      price: isKatsu ? kp : gp, section,
      gf: isKatsu || bound ? 'no' : 'ask',
      vegan: isKatsu ? 'no' : veganGrilled,
      note: extra + (isKatsu ? KATSU : GRILL) + (isKatsu && veganGrilled === 'vegan'
        ? ' ⚠ NOTE FOR VEGANS: the grilled version of this vegetable is plant-based, but the 串カツ version is dipped in EGG wash before the panko, so breading it removes the vegan answer as well as the gluten-free one.' : ''),
      dish_key: isKatsu ? `${romaji}_kushikatsu` : `${romaji}_yakitori`,
    });
  }
};
push(PARTS, 'Grilled Chicken Yakitori', false);
push(MEATS, 'Grilled Meat Skewers', false);
push(VEGS, 'Grilled Vegetable Skewers', false);
push(PARTS, 'Chicken Kushi Katsu', true);
push(MEATS, 'Kushi Katsu Meat Skewers', true);
push(VEGS, 'Kushi Katsu Vegetable Skewers', true);

const REST = [
  ['焼き鳥盛り合わせ', 'yakitori moriawase', 'Assorted grilled chicken', '(no price printed)', 'Grilled Chicken', 'no', 'no',
   '⚠ The kitchen chooses, so the 塩 instruction is given away and つくね will almost certainly be in it. Order individually.'],
  ['ねぎ間3種盛り', 'negima 3-shu mori', 'Three assorted negima skewers', 'JPY 539', 'Grilled Chicken', 'ask', 'no',
   'Three negima variants. Ask for 塩 across all three.'],
  ['ねぎ納豆3種盛り', 'negi natto 3-shu mori', 'Three assorted negi-natto skewers', 'JPY 605', 'Grilled Chicken', 'no', 'no',
   '⚠ NATTO IS A GLUTEN QUESTION THAT CATCHES PEOPLE, because the beans themselves are just fermented soy and are fine. The problem is the sachet of たれ that comes with every commercial pack — it is a soy-and-dashi sauce, so wheat and fish. Served on a chicken skewer here in any case.'],
  ['手羽先', 'tebasaki', 'Chicken wings', 'JPY 198', 'Grilled Chicken Yakitori', 'ask', 'no',
   'Whole wing, GRILLED rather than fried — unlike a Nagoya 手羽先唐揚げ there is no flour dusting.' + GRILL],
  ['厚切りハムカツ', 'atsugiri hamu katsu', 'Thick-cut ham katsu', 'JPY 209', 'Others', 'no', 'no',
   'Panko-crumbed ham. Wheat coating, shared fryer, and the ham itself may be starch-bound.'],
  ['赤ウインナー', 'aka wiener', 'Red wiener sausage', 'JPY 209', 'Others', 'no', 'no',
   'The Showa-era red sausage, crumbed and fried here. Sausage binder is frequently rusk; the panko is certain.'],
  ['紅生姜', 'beni shoga', 'Red pickled ginger, crumbed and fried', 'JPY 209', 'Others', 'no', 'ask',
   '⚠ A genuinely Osakan item: 紅生姜の串カツ is pickled ginger battered and deep-fried. The ginger alone would be vegan and gluten-free; breaded it is neither for gluten, and the egg wash makes the vegan answer an ask at best.'],
  ['ヤングコーン', 'young corn', 'Young corn, crumbed and fried', 'JPY 209', 'Others', 'no', 'no',
   'Baby corn in panko. Vegetable inside, wheat outside, egg wash between.'],
  ['海老', 'ebi', 'Shrimp, crumbed and fried', 'JPY 209', 'Others', 'no', 'no',
   'Panko prawn. Shellfish as well.'],
  ['唐揚げ串カツ', 'karaage kushikatsu', 'Karaage on a skewer, crumbed and fried', 'JPY 209', 'Others', 'no', 'no',
   '⚠ Fried twice and floured twice: karaage is already soy-marinated and dusted, and this version is then crumbed in panko and fried again.'],
  ['三代目もつ鍋', 'sandaime motsunabe', 'Third-generation motsunabe', 'JPY 638', 'Stewed', 'no', 'no',
   'Offal hotpot in a miso or soy broth — both wheat risks, and the broth is the dish.'],
  ['モッツァレラスティック', 'mozzarella stick', 'Mozzarella sticks', 'JPY 385', 'Fried Food', 'no', 'no',
   'Breaded and fried cheese. Wheat and dairy.'],
  ['チーズポテト餅', 'cheese potato mochi', 'Cheese potato mochi', 'JPY 638', 'Fried Food', 'ask', 'no',
   '⚠ Worth an ask: いも餅 is potato and potato starch, which contains no wheat at all, so the dough itself is likely gluten-free. The risks are the coating (some are floured before frying) and the shared fryer. Dairy, so not vegan.'],
  ['軟骨唐揚げ', 'nankotsu karaage', 'Fried chicken cartilage', 'JPY 528', 'Fried Food', 'no', 'no',
   'Soy-marinated and dusted before frying.'],
  ['揚げたこ焼き', 'age takoyaki', 'Deep-fried takoyaki', 'JPY 528', 'Fried Food', 'no', 'no',
   '⚠ Takoyaki batter is WHEAT FLOUR and dashi — the batter is the dish — and this version is then deep-fried and sauced with a Worcestershire-style brown sauce that is also wheat. Octopus and egg.'],
  ['栃尾揚げ', 'tochio age', 'Tochio-age (Niigata giant fried tofu)', 'JPY 528', 'Fried Food', 'ask', 'ask',
   '⚠ THE MOST INTERESTING ROW IN THE FRIED SECTION AND THE ONLY ONE WITH A ROUTE TO YES ON BOTH COUNTS. 栃尾揚げ is a Niigata speciality: a very large slab of 油揚げ — fried tofu, nothing but soy beans and oil, with no flour and no batter. Split and grilled with negi it is naturally vegan and gluten-free. The two things that close it are the topping, which is conventionally soy sauce and bonito flakes, and the shared fryer if it is re-fried here. Worth asking precisely.'],
  ['カニクリームコロッケ', 'kani cream korokke', 'Crab cream croquette', 'JPY 715', 'Fried Food', 'no', 'no',
   'Béchamel filling (butter, FLOUR, milk) in a panko shell. Wheat twice, plus crab and dairy.'],
  ['たこの唐揚げ', 'tako no karaage', 'Fried octopus', 'JPY 748', 'Fried Food', 'no', 'no',
   'Octopus marinated and dusted before frying.'],
  ['唐揚げ', 'karaage', 'Karaage', 'JPY 99', 'Fried Food', 'no', 'no',
   'At ¥99 the cheapest row on the menu. Soy-marinated, so the wheat is in the meat regardless of the coating.'],
  ['にらたま', 'niratama', 'Garlic chive omelette', 'JPY 528', 'Teppan-yaki', 'ask', 'no',
   'Garlic chives and egg on the griddle. Egg, so not vegan. Usually seasoned with soy; the griddle also cooks okonomiyaki batter.'],
  ['ねぎ納豆焼き', 'negi natto yaki', 'Griddled negi and natto', 'JPY 528', 'Teppan-yaki', 'no', 'ask',
   '⚠ Natto and negi are both plant-based, so the vegan answer is an ask rather than a no — but the natto たれ sachet is soy-and-dashi, which is both wheat and fish. Griddled beside okonomiyaki batter.'],
  ['秀吉風お好み焼き', 'hideyoshi-fu okonomiyaki', 'Hideyoshi-style okonomiyaki', 'JPY 605', 'Teppan-yaki', 'no', 'no',
   '⚠ Okonomiyaki batter is wheat flour and dashi — the flour is the dish — and it is finished with a wheat-containing brown sauce. Egg through the batter.'],
  ['トマトチーズ焼き', 'tomato cheese yaki', 'Baked tomato and cheese', 'JPY 715', 'Teppan-yaki', 'ask', 'no',
   'Tomato and melted cheese. No wheat in the components; the griddle is the question, since it cooks okonomiyaki batter all evening. Dairy.'],
  ['山芋チーズグラタン', 'yamaimo cheese gratin', 'Yam and cheese gratin', 'JPY 715', 'Teppan-yaki', 'ask', 'no',
   '⚠ Better than a normal gratin: a 山芋 gratin uses grated mountain yam for body instead of a flour béchamel, so it may well be gluten-free. Confirm no flour and no panko topping. Dairy.'],
  ['チキン南蛮', 'chicken nanban', 'Chicken nanban', 'JPY 748', 'Teppan-yaki', 'no', 'no',
   '⚠ Three wheat routes: the chicken is floured and fried, dipped in a sweet VINEGAR-AND-SOY sauce, then topped with tartare. Note this is the Miyazaki dish, unrelated to the 南蛮 (negi) of a soba counter.'],
  ['低温調理 鶏レバ刺し', 'teion chori tori reba-sashi', 'Low-temperature cooked chicken liver', 'JPY 748', 'Speciality', 'ask', 'no',
   '⚠ 低温調理 — low-temperature COOKED, not raw; raw liver has been restricted in Japan since 2012. Liver itself is gluten-free and the conventional dressing is sesame oil and salt, which would be clean. Confirm it is not a soy dip.'],
  ['焼き枝豆', 'yaki edamame', 'Grilled edamame', 'JPY 385', 'Speciality', 'gf', 'vegan',
   '⚠ Clean on both counts and better than plain boiled edamame — charred in the pod over the grill and salted. Soy beans, fire, salt. Nothing to ask about.'],
  ['冷奴', 'hiyayakko', 'Chilled tofu', 'JPY 319', 'Speciality', 'ask', 'ask',
   'The tofu block is clean on both counts; what arrives on it decides. The default is soy sauce (wheat) and 鰹節 (fish). Ask for it plain with negi and ginger.'],
  ['山芋スティック', 'yamaimo stick', 'Raw yam sticks', 'JPY 495', 'Speciality', 'ask', 'ask',
   '⚠ Raw mountain yam batons — vegetable and nothing else, so clean in principle on both counts. The dish is normally served with a soy dip and sometimes topped with nori and bonito. Ask for it undressed and it is one of the best plates here for both diets.'],
  ['冷やしトマト', 'hiyashi tomato', 'Chilled tomato', 'JPY 495', 'Speciality', 'gf', 'vegan',
   'Chilled tomato with no dressing declared. Clean on both counts as listed; confirm no mayonnaise arrives.'],
  ['たたききゅうり', 'tataki kyuri', 'Smashed cucumber', 'JPY 495', 'Speciality', 'ask', 'ask',
   'Cucumber smashed and dressed — conventionally sesame oil, salt and garlic, often with a splash of soy. The base is right for both diets; ask about the dressing.'],
  ['さっぱり白菜漬け', 'sappari hakusai-zuke', 'Lightly pickled Chinese cabbage', 'JPY 495', 'Speciality', 'ask', 'ask',
   '白菜漬け is usually a simple salt-and-kombu pickle, which would be clean on both counts — but many versions are brined with bonito dashi or finished with soy. Ask.'],
  ['野沢菜わさび漬け', 'nozawana wasabi-zuke', 'Nozawana pickled with wasabi', 'JPY 495', 'Speciality', 'ask', 'vegan',
   '⚠ Nozawana is a leaf mustard green from Nagano, pickled — plant-based throughout, so vegan. The gluten question is the わさび漬け element: a true wasabi-zuke is cured in SAKE LEES (酒粕), which comes from rice, but commercial versions frequently add soy sauce or a starch base. Ask.'],
  ['たこわさ', 'tako wasa', 'Raw octopus in wasabi', 'JPY 495', 'Speciality', 'ask', 'no',
   'Diced raw octopus in wasabi paste. Commercial たこわさ is seasoned with soy and mirin; the paste often has a starch base.'],
  ['鱈チャンジャ', 'tara chanja', 'Cod chanja (Korean spicy cured cod)', 'JPY 605', 'Speciality', 'no', 'no',
   '⚠ チャンジャ is Korean-style cured cod innards in a chilli seasoning, and the seasoning is built on GOCHUJANG — which is fermented with wheat flour at most makers, and is a wheat source that Japanese menus almost never flag. Fish, so not vegan either.'],
  ['梅水晶', 'ume suisho', 'Ume suisho (shark cartilage with plum)', 'JPY 605', 'Speciality', 'ask', 'no',
   '⚠ A dish English menus rarely explain: 梅水晶 is finely chopped SHARK CARTILAGE dressed with 梅肉 (pickled plum) — the "crystal" is the translucent cartilage. Cartilage and umeboshi are both gluten-free, but the dressing normally includes soy and mirin. Fish, so not vegan.'],
  ['えいひれ炙り', 'eihire aburi', 'Grilled dried skate fin', 'JPY 649', 'Speciality', 'ask', 'no',
   'Dried ray fin, lightly grilled. Commercial えいひれ is usually cured with soy and mirin before drying, and it is served with mayonnaise.'],
  ['〆鯖の炙り', 'shimesaba no aburi', 'Seared vinegar-cured mackerel', 'JPY 858', 'Speciality', 'ask', 'no',
   '⚠ Promising: 〆鯖 is mackerel cured in SALT then RICE VINEGAR — neither is wheat — and searing adds nothing. The whole risk is the soy served to dip it in, which can be declined. One of the cleaner fish plates here.'],
  ['自家製ポテトサラダ', 'jikasei potato salad', 'House potato salad', 'JPY 495', 'Salad', 'ask', 'no',
   'Potato and mayonnaise, so egg and not vegan. Usually gluten-free; Japanese potato salad often contains ham.'],
  ['ごまドレ豆腐サラダ', 'goma-dore tofu salad', 'Tofu salad with sesame dressing', 'JPY 660', 'Salad', 'ask', 'ask',
   '⚠ Tofu and leaves are vegan and gluten-free; the dressing is the whole question and a Japanese ごまドレ is typically sesame, vinegar, SOY and often mayonnaise. Ask for oil and salt instead — the base dish is right for both diets.'],
  ['温玉シーザーサラダ', 'ontama Caesar salad', 'Caesar salad with slow-cooked egg', 'JPY 748', 'Salad', 'no', 'no',
   '⚠ A Caesar fails three ways at once: CROUTONS are wheat, the dressing carries PARMESAN (dairy) and ANCHOVY (fish), and this one adds an egg on top.'],
  ['秀吉特製キャベツ盛り', 'hideyoshi tokusei kyabetsu mori', 'House cabbage plate', 'JPY 418', 'Salad', 'ask', 'ask',
   'Raw cabbage, the standard yakitori-counter accompaniment. The cabbage is clean on both counts; the dip decides — sometimes salt or sesame oil, sometimes a miso or mayonnaise sauce. Ask.'],
  ['バカ盛りえびせん', 'bakamori ebisen', 'Enormous portion of prawn crackers', 'JPY 638', 'Baka Mori', 'ask', 'no',
   '⚠ バカ盛り ("stupid-big") is the shop’s oversized-portion range. Prawn crackers are usually tapioca or potato starch with prawn — frequently gluten-free — but commercial えびせん often contain wheat flour, and shrimp makes them non-vegan regardless.'],
  ['バカ盛りフライドポテト', 'bakamori fried potato', 'Enormous portion of fries', 'JPY 748', 'Baka Mori', 'ask', 'ask',
   'Potato and oil, clean in principle — but this kitchen deep-fries panko skewers, croquettes and takoyaki in what is certainly shared oil. Treat as contaminated for coeliac purposes.'],
  ['バカ盛り野菜サラダ', 'bakamori yasai salad', 'Enormous vegetable salad', 'JPY 858', 'Baka Mori', 'ask', 'ask',
   'A large plain vegetable salad — the biggest genuinely plant-based plate on the menu. The dressing is the only question; ask for oil and vinegar.'],
  ['バカ盛りもやし炒め', 'bakamori moyashi itame', 'Enormous stir-fried bean sprouts', 'JPY 858', 'Baka Mori', 'ask', 'ask',
   '⚠ Bean sprouts are vegan and gluten-free; a Japanese stir-fry is finished with soy sauce and often a chicken or pork stock powder, either of which would close it. Worth asking, since the base is a large plate of nothing but vegetable.'],
  ['〆ラーメン', 'shime ramen', 'Finishing ramen', 'JPY 605', 'Meal', 'no', 'no',
   '中華麺 is wheat and the タレ is soy. The end-of-evening bowl.'],
  ['お茶漬け', 'ochazuke', 'Ochazuke', 'JPY 495', 'Meal', 'ask', 'ask',
   'Rice with tea or dashi poured over. A tea-only version would be clean on both counts; the standard izakaya build uses a soy-seasoned dashi broth. Ask what goes in.'],
  ['ライス', 'raisu', 'Rice', 'JPY 319', 'Meal', 'gf', 'vegan',
   'Plain boiled white rice. Clean on both counts, unconditionally.'],
  ['バニラアイス 黒蜜きなこ', 'vanilla ice kuromitsu kinako', 'Vanilla ice cream with black syrup and kinako', 'JPY 495', 'Dessert', 'gf', 'no',
   '⚠ Both toppings are clean and neither is obvious: 黒蜜 is unrefined black-sugar syrup (vegan and gluten-free) and きなこ is roasted SOY BEAN flour — a flour that contains no wheat at all, which makes it one of the few flours safe for a coeliac. The ice cream underneath is dairy, so not vegan, but the dessert is gluten-free as built. Confirm no wafer.'],
];

for (const [ja, romaji, en, price, section, gf, vegan, note] of REST)
  items.push({ ja, romaji, en, price, section, gf, vegan, note, dish_key: romaji.replace(/[^a-z0-9]+/g, '_') });

put('s26', 'tokyo_hideyoshi_jimbocho_suido', {
  verified: 'partial',
  confidence: 'medium',
  sources: [TB('A1310/A131003/13246756')],
  price_note:
    'Full 93-row menu with prices, read off Tabelog in four locales (en/tw/kr/th); 92 dishes recorded, the 93rd row being a section placeholder reading only "Remarks". 東京都千代田区神田神保町2-48-3 1F・2F; 60 seats over two floors (20 downstairs, 40 up); 17:00–24:00 weekdays, food L.O. 23:00; average spend ¥2,000–2,999. Cuisine 焼き鳥 / 串カツ / 居酒屋. ⚠ THE STRUCTURE OF THIS MENU IS THE MOST IMPORTANT FINDING IN THIS TICK AND IT IS INVISIBLE IN ENGLISH. The shop sells the SAME TWENTY-ONE SKEWERS TWICE — twelve chicken parts, two meat skewers and seven vegetable skewers — once as 焼き鳥 (grilled over charcoal) and again as 串カツ (dipped in flour, then EGG, then PANKO, and deep-fried). The two blocks run in identical order with identical names and differ only by price: ¥97 grilled against ¥165 crumbed for the chicken, ¥198 against ¥209 for the vegetables. ⚠ SO "NEGIMA" APPEARS TWICE ON THIS MENU AND THE TWO ROWS HAVE OPPOSITE ANSWERS. Grilled and ordered 塩 it is chicken, negi, salt and fire. Crumbed it is bread. A diner pointing at an English menu, or repeating a dish name a friend recommended, has a one-in-two chance of ordering the wrong one, and nothing in the English names — "Negima", "Chicken Skin", "Shiitake" — signals which section they came from. The only tell is the price. THIS IS THE SINGLE MOST IMPORTANT THING TO KNOW BEFORE EATING HERE. ⚠ THE VEGETABLE SKEWERS MAKE THE SAME POINT FOR VEGANS. Grilled onion, negi, yam, eringi, shiitake and ginkgo (rows 19–25) are plant-based and are among the better vegan orders in this tick. The identical seven in the 串カツ section (rows 40–46) are dipped in EGG WASH before the panko, so breading them removes the vegan answer as well as the gluten-free one. Same vegetable, same name, different section, different answer. ⚠ BEYOND THE SKEWERS, TWO ROWS ARE WORTH SEEKING OUT AND ONE IS WORTH AVOIDING FOR A REASON NOBODY FLAGS. 栃尾揚げ (row 58) is a Niigata slab of 油揚げ — fried tofu, soy beans and oil, no flour and no batter — and is the only fried item here with a route to yes on both counts. 焼き枝豆 (row 69) is clean outright. And 鱈チャンジャ (row 77) is seasoned with GOCHUJANG, which is fermented with WHEAT FLOUR at most makers — a wheat source Japanese menus essentially never declare and that a coeliac would not expect in a cured-fish dish. ⚠ TWO SMALLER NOTES. /en/ renders もも as "Peach" in both skewer sections — もも is the chicken thigh; 桃 the fruit is a homophone. And 梅水晶 (row 78) is chopped SHARK CARTILAGE with pickled plum, which no locale explains at all.',
  last_checked: T,
  items,
});
