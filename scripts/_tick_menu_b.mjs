// Local tick 2026-09-11 — real menus, part B: 串焼き 石川.
// Tabelog prints rows 1 and 2 as PRICE GROUPS — six skewers sharing one price — rather
// than as single dishes. They are split out here because the six do not share an answer:
// ねぎま can be ordered 塩 and is then clean, つくね is bound with flour at most counters.
// Collapsing them into one row would force a single gf value onto six different dishes.
import { put, T } from './_tick_lib.mjs';
const TB = u => `https://tabelog.com/en/tokyo/${u}/dtlmenu/`;

const SKEWER =
  ' ⚠ 塩 or タレ decides this skewer. Salt-grilled is chicken, salt and charcoal — clean. Tare-glazed is soy, mirin and sugar, and the tare is a shared dipping pot, so a tare order cannot be undone. Ask for 塩.';

put('s34', 'tokyo_kushiyaki_ishikawa', {
  verified: 'partial',
  confidence: 'medium',
  sources: [TB('A1304/A130401/13123954')],
  price_note:
    'Full 16-row menu read off Tabelog in four locales (en/tw/kr/th), expanded to 26 records — see below. 東京都新宿区西新宿7-12-23 松沢ビル2F; 16 seats (7 at the counter, two tables of 4 and 5); 17:30–23:30 with food L.O. at 22:30, closed Sunday; average spend ¥4,000–4,999. Sections: 焼き物 → 一品 → ご飯物 → デザート. ⚠ THE SOURCE PRINTS ROWS 1 AND 2 AS PRICE GROUPS, NOT AS DISHES: row 1 is six different skewers all at ¥200 and row 2 is six more all at ¥180. They are split into one record each here, because the six in a group do not share a dietary answer — ねぎま ordered 塩 is chicken, salt and fire, while つくね in the same ¥200 group is a minced patty bound with flour or panko at most counters. Collapsing them would force one gf value onto six different dishes and would hide the only skewer on the list that a coeliac should refuse. ⚠ THE GOVERNING QUESTION AT ANY 串焼き COUNTER IS 塩 OR タレ AND IT IS ASKED PER SKEWER. Salt-grilled meat is genuinely gluten-free; tare-glazed is soy, mirin and sugar reduced together, and the tare lives in a communal pot that every glazed skewer is dipped into. A whole order can be sent 全部塩で ("all with salt, please") and this is an entirely normal request. ⚠ TWO CAVEATS SURVIVE A SALT ORDER AND BOTH ARE WORTH KNOWING: つくね is bound, and many counters brush even salt skewers with a thin soy-based finishing liquid at the end. Neither is declared here. ⚠ FOR A VEGAN THE ROOM IS ALMOST CLOSED — this is a chicken house — but rows 4, 7, 8 and 9 are vegetables, and they are the only plausible plates in the building. ⚠ ROW 5 IS A GENUINE ODDITY: 「Honey Bread」 filed under 焼き物, between the chicken and the vegetables. All four locales agree it is bread with honey (tw 麵包蜜, kr 빵꿀, th ขนมปังมิตสึ). It is the only wheat item that is wheat by its own admission rather than by inference, and the honey rules it out for a vegan as well.',
  last_checked: T,
  items: [
    { ja: 'ささみ（わさび・梅しそ・チーズ・柚子胡椒）', romaji: 'sasami (wasabi / ume-shiso / cheese / yuzu-kosho)', en: 'Chicken breast skewer, four toppings', price: 'JPY 200', section: 'Grilled Dishes', gf: 'ask', vegan: 'no',
      note: `One skewer, four toppings to choose from, and they do not answer alike. わさび and 梅しそ are clean in themselves (though prepared wasabi paste sometimes carries a starch filler). 柚子胡椒 is chilli, yuzu peel and salt — clean. ⚠ チーズ is dairy and rules the skewer out for a vegan even though the rest of the row is only chicken.${SKEWER}`, dish_key: 'sasami' },
    { ja: 'もも', romaji: 'momo', en: 'Chicken thigh skewer', price: 'JPY 200', section: 'Grilled Dishes', gf: 'ask', vegan: 'no',
      note: `Plain thigh meat.${SKEWER}`, dish_key: 'momo' },
    { ja: 'ねぎま', romaji: 'negima', en: 'Chicken and spring onion skewer', price: 'JPY 200', section: 'Grilled Dishes', gf: 'ask', vegan: 'no',
      note: `Chicken alternating with negi — the plainest thing on the menu and the best single order here for a coeliac.${SKEWER}`, dish_key: 'negima' },
    { ja: 'つくね', romaji: 'tsukune', en: 'Minced chicken patty skewer', price: 'JPY 200', section: 'Grilled Dishes', gf: 'no', vegan: 'no',
      note: '⚠ THE ONE SKEWER THAT A SALT ORDER DOES NOT RESCUE. つくね is minced chicken that has to be BOUND to stay on the stick, and the binder at most counters is flour, panko or both — inside the patty, not on it. It is also the skewer most often served pre-glazed with tare and with a raw egg yolk to dip. No shop-level declaration here, and the structural default is wheat, so this is recorded no rather than ask.', dish_key: 'tsukune' },
    { ja: '皮', romaji: 'kawa', en: 'Chicken skin skewer', price: 'JPY 200', section: 'Grilled Dishes', gf: 'ask', vegan: 'no',
      note: `Skin, grilled until it crisps. No coating and no binder.${SKEWER}`, dish_key: 'kawa' },
    { ja: '手羽先', romaji: 'tebasaki', en: 'Chicken wing skewer', price: 'JPY 200', section: 'Grilled Dishes', gf: 'ask', vegan: 'no',
      note: `Whole wing, grilled. Note this is the GRILLED wing, not the Nagoya-style fried one — no flour dusting is involved.${SKEWER}`, dish_key: 'tebasaki' },
    { ja: 'レバー', romaji: 'reba', en: 'Chicken liver skewer', price: 'JPY 180', section: 'Grilled Dishes', gf: 'ask', vegan: 'no',
      note: `Liver. ⚠ This is the cut most often served タレ by default rather than by choice, because the sweetness is held to suit it — so the salt request matters more here than elsewhere.${SKEWER}`, dish_key: 'reba' },
    { ja: 'せせり', romaji: 'seseri', en: 'Chicken neck meat skewer', price: 'JPY 180', section: 'Grilled Dishes', gf: 'ask', vegan: 'no',
      note: `Neck meat. Plain cut, no coating.${SKEWER}`, dish_key: 'seseri' },
    { ja: '砂肝', romaji: 'sunagimo', en: 'Chicken gizzard skewer', price: 'JPY 180', section: 'Grilled Dishes', gf: 'ask', vegan: 'no',
      note: `Gizzard, usually served 塩 as a matter of course because the texture suits salt.${SKEWER}`, dish_key: 'sunagimo' },
    { ja: 'ぼんじり', romaji: 'bonjiri', en: 'Chicken tail skewer', price: 'JPY 180', section: 'Grilled Dishes', gf: 'ask', vegan: 'no',
      note: `The fatty parson’s nose. Plain cut.${SKEWER}`, dish_key: 'bonjiri' },
    { ja: 'ハツ', romaji: 'hatsu', en: 'Chicken heart skewer', price: 'JPY 180', section: 'Grilled Dishes', gf: 'ask', vegan: 'no',
      note: `Heart. Plain cut.${SKEWER}`, dish_key: 'hatsu' },
    { ja: '軟骨', romaji: 'nankotsu', en: 'Chicken cartilage skewer', price: 'JPY 180', section: 'Grilled Dishes', gf: 'ask', vegan: 'no',
      note: `Cartilage, grilled. ⚠ Note this is the GRILLED cartilage skewer — the other common preparation, 軟骨の唐揚げ, is flour-dusted and fried, and is not what is listed here.${SKEWER}`, dish_key: 'nankotsu' },
    { ja: '肉巻き野菜', romaji: 'nikumaki yasai', en: 'Vegetables wrapped in pork belly, skewered', price: 'JPY 200', section: 'Grilled Dishes', gf: 'ask', vegan: 'no',
      note: `Vegetable wrapped in pork belly — the one pork item among the chicken. Not vegan despite the name leading with the vegetable.${SKEWER}`, dish_key: 'nikumaki_yasai' },
    { ja: '野菜焼き', romaji: 'yasai-yaki', en: 'Grilled vegetables', price: '(no price printed)', section: 'Grilled Dishes', gf: 'ask', vegan: 'ask',
      note: '⚠ THE BEST PROSPECT IN THE BUILDING FOR A VEGAN, with two caveats that are both about the grill rather than the vegetable. First, these go over the same charcoal as the chicken and the pork, and fat drips. Second, vegetables are as likely to be tare-glazed as meat is — ask for 塩. No price printed for this row.', dish_key: 'yasai_yaki' },
    { ja: 'パン蜜', romaji: 'pan-mitsu', en: 'Bread with honey', price: 'JPY 200', section: 'Grilled Dishes', gf: 'no', vegan: 'no',
      note: '⚠ A genuinely odd row: bread, filed under 焼き物 between the chicken and the vegetables. All four locales agree (tw 麵包蜜, kr 빵꿀, th ขนมปังมิตสึ) so this is not a mistranslation. It is the only item on the menu that is wheat by its own admission rather than by inference. Honey rules it out for a vegan.', dish_key: 'pan_mitsu' },
    { ja: '焼き物盛り合わせ', romaji: 'yakimono moriawase', en: 'Assorted grilled skewers', price: '(no price printed)', section: 'Grilled Dishes', gf: 'no', vegan: 'no',
      note: '⚠ An assortment is chosen by the kitchen, which means it will almost certainly include つくね and will almost certainly arrive pre-glazed with tare — the two things a coeliac at this counter needs to avoid. Ordering individual skewers 塩 is the way to eat here; the 盛り合わせ is the way not to. No price printed.', dish_key: 'yakimono_moriawase' },
    { ja: '茹でたてアスパラ', romaji: 'yudetate asupara', en: 'Freshly boiled asparagus', price: 'JPY 500', section: 'Dish', gf: 'ask', vegan: 'ask',
      note: 'Asparagus, boiled to order — clean in itself on both counts. The whole question is the dressing: boiled asparagus at an izakaya is served with mayonnaise (egg) about as often as with salt. Ask for it plain and it is one of the few genuinely vegan plates here.', dish_key: 'yudetate_asupara' },
    { ja: '生キャベツ', romaji: 'nama kyabetsu', en: 'Raw cabbage', price: 'JPY 350', section: 'Dish', gf: 'ask', vegan: 'ask',
      note: 'Raw cabbage wedges, the standard yakitori-counter palate cleanser. The cabbage is cabbage; what comes with it decides the answer — sometimes just salt or sesame oil (clean on both counts), sometimes a miso dip, sometimes a mayonnaise-based one. Ask.', dish_key: 'nama_kyabetsu' },
    { ja: '漬物', romaji: 'tsukemono', en: 'Pickles', price: 'JPY 350', section: 'Dish', gf: 'ask', vegan: 'ask',
      note: 'Japanese pickles run the whole range: 浅漬け in salt alone is vegan and gluten-free, while 醤油漬け is steeped in wheat soy and many commercial pickles are brined with bonito dashi. The word 漬物 on its own does not say which. Ask.', dish_key: 'tsukemono' },
    { ja: 'たたみいわし', romaji: 'tatami iwashi', en: 'Tatami iwashi (pressed dried whitebait sheet)', price: 'JPY 500', section: 'Dish', gf: 'gf', vegan: 'no',
      note: '⚠ The English "Dried Sardines" undersells a specific thing: kr 다다미이와시 gives it exactly — たたみいわし, baby sardines pressed into a paper-thin sheet and dried, then lightly toasted. It is whitebait and nothing else, with no coating, no binder and no sauce, which makes it one of very few genuinely gluten-free items on this menu without needing to ask. Fish, so never vegan. Watch only for a soy dish served alongside.', dish_key: 'tatami_iwashi' },
    { ja: '蒸し鶏の冷菜', romaji: 'mushidori no reisai', en: 'Chilled steamed chicken', price: 'JPY 500', section: 'Dish', gf: 'ask', vegan: 'no',
      note: 'Steamed chicken, served cold. The chicken and the steaming are clean; a 冷菜 is defined by its dressing, and the two standard ones here are a sesame-soy sauce and a ponzu — both soy, both wheat unless tamari. Ask for it undressed.', dish_key: 'mushidori_reisai' },
    { ja: 'チャーハン', romaji: 'chahan', en: 'Fried rice', price: 'JPY 500', section: 'Rice Dishes', gf: 'no', vegan: 'no',
      note: 'Fried rice is finished with soy sauce poured round the edge of the wok — it is what gives the dish its colour and smell, so there is no unseasoned version. Egg and usually pork or chicken as well.', dish_key: 'chahan' },
    { ja: '玉うどん', romaji: 'tama udon', en: 'Tama udon', price: 'JPY 550', section: 'Rice Dishes', gf: 'no', vegan: 'no',
      note: 'Udon is 100% wheat flour — no ratio question, unlike soba. The broth is dashi and soy on top of that. Flat no.', dish_key: 'tama_udon' },
    { ja: '雑炊', romaji: 'zousui', en: 'Zousui (savoury rice porridge)', price: 'JPY 600', section: 'Rice Dishes', gf: 'ask', vegan: 'no',
      note: '⚠ The Korean locale renders this 죽순 — BAMBOO SHOOT — which is simply wrong; tw 雜燴飯 and th โซซุย both have it right as 雑炊. It is rice simmered in stock with egg. Rice and egg are clean for gluten; the stock is the question, and at a chicken house it is a chicken-and-soy broth. Never vegan (egg and chicken stock).', dish_key: 'zousui' },
    { ja: '温麺', romaji: 'uumen / onmen', en: 'Warm noodles', price: 'JPY 600', section: 'Rice Dishes', gf: 'no', vegan: 'no',
      note: 'All four locales agree on "warm noodles" (tw 溫麵, kr 온면) and give no further detail. Whichever noodle it is — 温麺 as the Miyagi somen variant, or simply a hot noodle bowl — a Japanese wheat noodle is the only plausible reading at a yakitori counter, and the broth will be dashi and soy. No.', dish_key: 'onmen' },
    { ja: 'カタラーナ', romaji: 'kataraana', en: 'Catalana (frozen crema catalana)', price: 'JPY 400', section: 'Dessert', gf: 'ask', vegan: 'no',
      note: 'The Japanese izakaya カタラーナ is a frozen custard — cream, egg yolk and sugar with a caramelised top. Dairy and egg, so never vegan. Usually gluten-free in itself, but it is often served with a wafer or biscuit, and the caramel is sometimes a bought sauce; ask.', dish_key: 'katarana' },
  ],
});
