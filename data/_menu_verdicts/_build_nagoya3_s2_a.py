# -*- coding: utf-8 -*-
import json, io, os

OUT = r"C:/pf/fkti-dining/data/_menu_verdicts/nagoya3_s2.json"
d = {}
if os.path.exists(OUT):
    d = json.load(io.open(OUT, encoding="utf-8"))


def I(ja, romaji, en, price, section, gf="", vegan="", note="", dish_key=""):
    return {"ja": ja, "romaji": romaji, "en": en, "price": price, "section": section,
            "gf": gf, "vegan": vegan, "note": note, "dish_key": dish_key}


d["nagoya_cafe_de_chaos_kizki"] = {
 "verified": "authoritative",
 "confidence": "high",
 "sources": [
   "https://s.tabelog.com/aichi/A2301/A230109/23094934/dtlmenu/?photo=1",
   "https://tblg.k-img.com/restaurant/images/Rvw/366109/92d0eab5e361135be7f3a35354ec8b53.jpg",
   "https://tblg.k-img.com/restaurant/images/Rvw/360787/887eced8016f27639baf0c01a4c8abba.jpg",
   "https://tblg.k-img.com/restaurant/images/Rvw/360787/ebf107e4abc40eaec641afed1d1e39d1.jpg",
   "https://www.instagram.com/kizki.bistro_cafe/"
 ],
 "price_note": "Transcribed from the shop's own printed menu boards photographed 2026-05 and 2026-06 (tax included). Prices approximate - may change.",
 "last_checked": "2026-08-20",
 "items": [
  I("さくっとコーヒー", "sakutto kohi", "Quick-brew drip coffee (hot/iced)", "¥550", "Coffee", "ask", "vegan", "コーヒーのみ。ブリューワー抽出。 · Black brewed coffee is naturally GF; confirm no barley-blend addition.", "drip_coffee"),
  I("ミルク入りコーヒー", "miruku-iri kohi", "Drip coffee with milk", "¥600", "Coffee", "ask", "no", "牛乳使用。 · Coffee plus dairy milk.", "coffee_with_milk"),
  I("ハンドドリップコーヒー", "hand drip kohi", "Hand-drip coffee - choose your bean", "¥600", "Coffee", "ask", "vegan", "豆：カオスブレンド(中煎り)／エチオピア サマ ナチュラル／ケニア キウニュ／コロンビア ブエサコ(中深煎り)／コスモスブレンド(深煎り)／ディカフェ。ご注文後に1杯ずつ抽出。", "hand_drip_coffee"),
  I("カフェラテ", "cafe latte", "Cafe latte", "¥650", "Latte / Espresso", "ask", "no", "牛乳。本日のコーヒー豆で抽出。", "cafe_latte"),
  I("はちみつラテ", "hachimitsu latte", "Honey latte (Yamagata linden honey, 100% natural)", "¥750", "Latte / Espresso", "ask", "no", "牛乳＋山形県産シナノキ蜂蜜（天然100%）。蜂蜜のためヴィーガン不可。", "honey_latte"),
  I("オーツミルクラテ", "oat milk latte", "Oat-milk latte (made with the dark-roast bean)", "¥800", "Latte / Espresso", "no", "vegan", "オーツ麦ベース。日本のオーツミルクはグルテンフリー認証がないものが大半で、麦アレルギー・セリアックには不可。乳不使用。", "oat_milk_latte"),
  I("ジンジャエールコーヒー", "ginger ale coffee", "Sparkling ginger espresso ('shuwatto! horonigai')", "¥750", "Latte / Espresso", "ask", "vegan", "ジンジャーシロップ＋炭酸水＋エスプレッソ。乳不使用。 · Ask whether the house ginger syrup contains barley malt.", "ginger_ale_coffee"),
  I("アメリカーノ", "americano", "Americano", "¥550", "Latte / Espresso", "ask", "vegan", "エスプレッソ＋湯。", "americano"),
  I("エスプレッソ", "espresso", "Espresso", "¥500", "Latte / Espresso", "ask", "vegan", "", "espresso"),
  I("自家製ジンジャエール", "jikasei ginger ale", "Homemade ginger ale (hot/iced)", "¥650", "Other drinks", "ask", "vegan", "自家製シロップ。麦芽の有無は要確認。", "homemade_ginger_ale"),
  I("バナナジュース", "banana juice", "Banana juice", "¥650", "Other drinks", "ask", "no", "牛乳ベースの可能性が高い。要確認。", "banana_juice"),
  I("いちごミルク", "ichigo miruku", "Strawberry milk", "¥650", "Other drinks", "ask", "no", "牛乳。", "strawberry_milk"),
  I("りんごジュース", "ringo juice", "Apple juice", "¥500", "Other drinks", "ask", "vegan", "", "apple_juice"),
  I("BIG SIZE さくっとコーヒー", "big size sakutto kohi", "Drip coffee 500ml (take-out only)", "¥650", "Big size (take-out)", "ask", "vegan", "テイクアウト限定500ml。", "drip_coffee_large"),
  I("BIG SIZE ミルク入りコーヒー", "big size miruku-iri kohi", "Drip coffee with milk 500ml (take-out only)", "¥700", "Big size (take-out)", "ask", "no", "テイクアウト限定500ml。牛乳。", "coffee_with_milk_large"),
  I("ショコラモワール", "chocolat moelleux", "Chocolate moelleux - the board says it is made without wheat flour", "¥680", "Sweets", "gf", "no", "店のボードの表記そのまま「小麦粉不使用のチョコレートケーキ」。ただし同じ厨房でホットサンド・キッシュ・パンを扱うため微量混入は要確認。卵・乳使用と思われる。 · The shop's own board states 小麦粉不使用 (no wheat flour); the same kitchen handles wheat, so ask about cross-contact.", "chocolat_moelleux"),
  I("クリームチーズのブリュレ", "cream cheese brulee", "Cream-cheese creme brulee (caramelised to order)", "¥680", "Sweets", "ask", "no", "ご注文後にキャラメリゼして提供。乳・卵。土台の有無は要確認。", "cream_cheese_brulee"),
  I("バナナとラムレーズンのパルフェ", "banana to rum-raisin parfait", "Banana & rum-raisin parfait (ice-cream-style frozen dessert)", "¥600", "Sweets", "ask", "no", "店表記：アイスクリーム状の冷菓です。アルコールとクルミを使用しています。乳・ナッツ。", "banana_rum_raisin_parfait"),
  I("コーヒーのブランマンジェ 〜バニラアイスのせ〜", "kohi no blancmange", "Coffee blancmange topped with vanilla ice cream", "¥600", "Sweets", "ask", "no", "店表記：コーヒーの香り付けをした、柔らかいミルクプリンのようなデザート。乳。", "coffee_blancmange"),
  I("アーモンドフロランタン", "almond florentin", "Almond florentin (baked sweet, take-away available)", "¥350", "Baked sweets", "no", "no", "フロランタンの土台は小麦のサブレ生地。乳・ナッツ。テイクアウト表では¥330。", "almond_florentin"),
  I("マカロン（塩キャラメル・紅茶）", "macaron", "Macaron - salted caramel or black tea", "¥550", "Baked sweets", "ask", "no", "マカロンは通常アーモンドプードル＋卵白で小麦粉不使用だが、店の表示がないため要確認。乳・卵・ナッツ。", "macaron"),
  I("サラダプレート", "salada plate", "Salad plate - one main + one deli side + green salad", "¥880〜", "Food", "ask", "no", "①メイン＋②お惣菜1種＋グリーンサラダ。お惣菜2種＋100円、3種＋200円。ドリンクと一緒のご注文で200円引き。", "salad_plate"),
  I("サラダプレート（キッシュ）", "salada plate (quiche)", "Salad plate with quiche", "¥1,100", "Food", "no", "no", "キッシュのタルト生地＝小麦。", "salad_plate_quiche"),
  I("自家製ロースハム（メイン）", "jikasei rosu ham", "House-cured loin ham (as salad-plate main)", "¥880", "Food", "ask", "no", "自家製ハム。調味に醤油系を使うかは要確認。", "house_loin_ham"),
  I("キッシュ（チーズとベーコン）（メイン）", "quiche cheese & bacon", "Quiche with cheese and bacon (as salad-plate main)", "¥1,100", "Food", "no", "no", "タルト生地＝小麦。乳・卵。", "quiche_cheese_bacon"),
  I("パテドカンパーニュ（メイン）", "pate de campagne", "Pate de campagne (as salad-plate main)", "¥1,250", "Food", "ask", "no", "パテのつなぎにパン粉・小麦粉を使う店が多い。要確認。", "pate_de_campagne"),
  I("自家製ロースハムとチーズのホットサンド", "jikasei rosu ham to cheese no hot sand", "Hot sandwich - house loin ham & cheese", "¥700", "Food", "no", "no", "パン＝小麦。乳。", "ham_cheese_hot_sandwich"),
  I("自家製ロースハムのサンドイッチ", "jikasei rosu ham no sandwich", "House loin-ham sandwich", "¥550", "Food", "no", "no", "パン＝小麦。", "ham_sandwich"),
  I("ほうれん草チキンカレー", "horenso chicken curry", "Spinach chicken curry", "¥1,300", "Food", "ask", "no", "2026年6月の店頭ボードに掲載。カレールウは小麦を含むことが多い。ドリンクと一緒のご注文で200円引き。", "spinach_chicken_curry"),
  I("キャロットラペ", "carotte rapee", "Carrot rapee (deli, take-out)", "¥450", "French deli take-out", "ask", "ask", "ビストロシェフがつくる本格フレンチの惣菜。ドレッシングの成分は要確認。", "carrot_rapee"),
  I("赤キャベツのマリネ", "aka-kyabetsu no marine", "Marinated red cabbage (deli, take-out)", "¥450", "French deli take-out", "ask", "ask", "", "marinated_red_cabbage"),
  I("自家製ピクルス", "jikasei pickles", "House pickles (deli, take-out)", "¥450", "French deli take-out", "ask", "ask", "", "house_pickles"),
  I("豚肉のリエット", "buta-niku no rillettes", "Pork rillettes (deli, take-out)", "¥600", "French deli take-out", "ask", "no", "豚肉・豚脂。付け合わせのパンは別。", "pork_rillettes"),
  I("パテドカンパーニュ（デリ）", "pate de campagne (deli)", "Pate de campagne (deli, take-out)", "¥850", "French deli take-out", "ask", "no", "つなぎの小麦・パン粉は要確認。", "pate_de_campagne_deli"),
  I("キッシュ（チーズとベーコン）（デリ）", "quiche (deli)", "Quiche, cheese & bacon (deli, take-out)", "¥700", "French deli take-out", "no", "no", "タルト生地＝小麦。", "quiche_deli"),
  I("バニラミルクソルト ソフトクリーム", "vanilla milk salt soft cream", "Vanilla-milk-salt soft-serve ice cream", "¥650", "Soft serve", "no", "no", "ワッフルコーン＝小麦。乳。カップ提供の可否は要確認。", "soft_serve_vanilla"),
 ]
}

d["nagoya_shikemichi_matsu"] = {
 "verified": "authoritative",
 "confidence": "high",
 "sources": [
   "https://s.tabelog.com/aichi/A2301/A230101/23085211/party/",
   "https://s.tabelog.com/aichi/A2301/A230101/23085211/dtlmenu/?menu_type=4",
   "https://s.tabelog.com/aichi/A2301/A230101/23085211/dtlmenu/?menu_type=2",
   "https://www.instagram.com/shikemichi.matsu/"
 ],
 "price_note": "From the shop's own (公式) Tabelog listing - course tab 更新日 2026/07/27, lunch and drink tabs 更新日 2024/11/06. Tax included; private rooms add 10% service. Prices approximate - may change.",
 "last_checked": "2026-08-20",
 "items": [
  I("【Dinner】おまかせコース", "omakase course", "Dinner omakase, 10 plates - charcoal-grill led, many techniques", "¥16,500", "Dinner course", "ask", "no", "炭火焼きを中心に様々な調理法。メインは知多小栗牧場32ヶ月飼育「小栗和牛」。1〜8名様。ワインと日本酒のペアリング追加可（8,500円〜）。 · Kaiseki-style: dashi, soy sauce and miso run through the courses, so assume wheat unless the counter says otherwise. Raise allergies at booking - the shop is 完全予約制.", "omakase_course_dinner"),
  I("おまかせ＋ペアリングコース", "omakase + pairing course", "Dinner omakase, 10 plates, with sake & wine pairing", "¥25,000", "Dinner course", "ask", "no", "お食事に合わせた日本酒・ワインのペアリング付き。1〜8名様。", "omakase_pairing_course"),
  I("ランチ フルコース（8皿）", "lunch full course", "Lunch full course, 8 plates", "¥11,000", "Lunch course", "ask", "no", "構成：先付け／八寸／お椀／揚げ物／炭火焼き魚／炭火焼き和牛／土鍋ご飯・味噌汁・香の物／甘味。揚げ物は小麦衣、お椀・味噌汁は醤油・味噌のため小麦の可能性。記念日や特別な席向け。", "lunch_full_course"),
  I("メインが和牛のランチコース（7皿）", "wagyu lunch course", "Lunch course with wagyu main, 7 plates", "¥8,800", "Lunch course", "ask", "no", "構成：八寸／お椀／揚げ物／炭火焼き魚／炭火焼き和牛／土鍋ご飯・味噌汁・香の物／甘味。", "wagyu_lunch_course"),
  I("ランチコース（6皿）", "lunch course", "Lunch course, 6 plates", "¥6,600", "Lunch course", "ask", "no", "構成：八寸／お椀／揚げ物／炭火焼き魚／土鍋ご飯・味噌汁・香の物／甘味。", "lunch_course_6"),
  I("サッポロ赤星 瓶", "Sapporo Akaboshi bin", "Sapporo Lager 'Akaboshi', bottle", "", "Toast drinks", "no", "vegan", "ビール＝麦芽。グルテン含有。食べログのドリンクタブに価格の記載なし。", "beer_sapporo_akaboshi"),
  I("ハートランド 瓶", "Heartland bin", "Heartland beer, bottle", "", "Toast drinks", "no", "vegan", "ビール＝麦芽。グルテン含有。価格の記載なし。", "beer_heartland"),
  I("シャンパン グラス", "champagne glass", "Champagne by the glass", "", "Toast drinks", "ask", "vegan", "価格の記載なし。", "champagne_glass"),
  I("東海を中心に揃えた日本酒", "tokai no nihonshu", "Sake - a Tokai-focused list, served chilled, room temperature or warmed", "", "Sake", "ask", "vegan", "店の説明：JSA SAKE DIPLOMAでもある燗番が厳選。酒蔵を訪ねて仕入れ。純米酒は米と米麹のみでグルテン不含だが、料理との合わせは別途要確認。", "sake_tokai"),
  I("ワイン グラス", "wine glass", "Wine by the glass", "", "Wine", "ask", "ask", "日本・フランス・イタリア・スペイン・アメリカなど多数。ソムリエ在籍。", "wine_glass"),
  I("ワイン ボトル", "wine bottle", "Wine by the bottle", "", "Wine", "ask", "ask", "", "wine_bottle"),
  I("山崎", "Yamazaki", "Yamazaki whisky", "", "Whisky", "no", "vegan", "ウイスキー＝大麦麦芽由来。", "whisky_yamazaki"),
  I("響", "Hibiki", "Hibiki whisky", "", "Whisky", "no", "vegan", "ウイスキー＝麦芽由来。", "whisky_hibiki"),
  I("余市", "Yoichi", "Yoichi single malt whisky", "", "Whisky", "no", "vegan", "ウイスキー＝大麦麦芽由来。", "whisky_yoichi"),
  I("ビットブルガー ノンアルコールビール", "Bitburger non-alcoholic beer", "Bitburger alcohol-free beer", "", "Soft drinks", "no", "vegan", "麦芽使用。ノンアルコールでもグルテン含有。", "na_beer_bitburger"),
  I("ブドウジュース", "budo juice", "Grape juice", "", "Soft drinks", "ask", "vegan", "", "grape_juice"),
  I("ジンジャーエール", "ginger ale", "Ginger ale", "", "Soft drinks", "ask", "vegan", "", "ginger_ale"),
  I("烏龍茶", "uroncha", "Oolong tea", "", "Soft drinks", "gf", "vegan", "烏龍茶は茶葉のみ。麦茶と違い大麦を含まないためグルテン不含。", "oolong_tea"),
 ]
}

d["nagoya_shikemichi_restaurant_ma"] = {
 "verified": "authoritative",
 "confidence": "high",
 "sources": [
   "https://www.shikemichi.jp/",
   "https://s.tabelog.com/aichi/A2301/A230109/23037560/party/",
   "https://s.tabelog.com/aichi/A2301/A230109/23037560/dtlmenu/?menu_type=2",
   "https://s.tabelog.com/aichi/A2301/A230109/23037560/dtlmenu/"
 ],
 "price_note": "Course line-up and plate-by-plate composition from the restaurant's own site; prices cross-checked against its 公式 Tabelog course tab (更新日 2026/07/09); drink prices from the same listing. Tax included; a 10% service charge is added at both lunch and dinner. Prices approximate - may change.",
 "last_checked": "2026-08-20",
 "items": [
  I("LUNCH MENU A", "lunch menu A", "Lunch A - amuse / soup / terrine / main / bread / dessert / coffee / petits fours", "¥5,500", "Lunch course", "no", "no", "店サイト表記：ｱﾐｭｰｽﾞ／ｽｰﾌﾟ／ﾃﾘｰﾇ／メイン料理／パン／ﾃﾞｻﾞｰﾄ／珈琲／お茶菓子。食べログでは「テリーヌ・魚料理またはお肉料理が選べるショートコース」。パンが標準で付き、フレンチのソースは小麦のルーを使うことが多い。11:30〜14:30、2〜4名様。", "lunch_menu_a"),
  I("LUNCH MENU B", "lunch menu B", "Lunch B - amuse / terrine / two hors d'oeuvres / fish / meat / bread / rice / dessert / coffee / petits fours", "¥7,700", "Lunch course", "no", "no", "店サイト表記：ｱﾐｭｰｽﾞ／ﾃﾘｰﾇ／ｵｰﾄﾞﾌﾞﾙ2品目／お魚料理／お肉料理／パン／ご飯／ﾃﾞｻﾞｰﾄ／珈琲／お茶菓子。11:30〜14:30、2〜4名様。", "lunch_menu_b"),
  I("LUNCH MENU SP", "lunch menu SP", "Lunch SP - special seasonal course (reservation required)", "¥11,000〜", "Lunch course", "no", "no", "季節の食材をふんだんに使用した特別コース。※要予約。11:30〜14:30。", "lunch_menu_sp"),
  I("DINER コース", "diner course", "Dinner - the full seasonal course at three price tiers", "¥13,200／¥16,500／¥19,800〜", "Dinner course", "no", "no", "季節の食材をふんだんに使用した贅沢なコース。18:00〜21:30、2〜4名様。¥13,200のコースは誕生日・記念日にメッセージ付きケーキのサービスあり。", "dinner_course"),
  I("農園野菜のテリーヌ", "noen yasai no terrine", "Farm-vegetable terrine - the chef's specialite, in every course", "", "Specialite - terrine", "ask", "no", "店の説明：和風だしで炊いた旬のお野菜。和風だし＝かつお・白だしの可能性が高くヴィーガン不可、白だし・醤油なら小麦も。ゼラチンの有無も要確認。", "vegetable_terrine"),
  I("茸のテリーヌ", "kinoko no terrine", "Mushroom terrine - eight kinds of mushroom", "", "Specialite - terrine", "ask", "no", "8種類の茸の濃厚な風味。テリーヌは季節ごとに入れ替わる。", "mushroom_terrine"),
  I("秋サンマと焼きナスのテリーヌ", "aki-sanma to yaki-nasu no terrine", "Autumn saury & grilled-aubergine terrine (seasonal)", "", "Specialite - terrine", "ask", "no", "季節限定。", "saury_aubergine_terrine"),
  I("オーガニック・スパークリング白ぶどうジュース", "organic sparkling shiro-budo juice", "Organic sparkling white-grape juice", "¥850", "Non-alcoholic", "ask", "vegan", "", "sparkling_grape_juice"),
  I("勝沼醸造 アルガーノ ぶどう果汁（赤・白）", "Katsunuma Arugano budo kaju", "Katsunuma Winery 'Arugano' grape juice, red or white", "¥800", "Non-alcoholic", "ask", "vegan", "", "katsunuma_grape_juice"),
  I("長野県 片桐農園のふじりんごジュース", "Katagiri noen fuji ringo juice", "Nagano Katagiri Farm Fuji apple juice", "¥800", "Non-alcoholic", "ask", "vegan", "", "fuji_apple_juice"),
  I("自家製ジンジャーエール", "jikasei ginger ale", "Homemade ginger ale", "¥600", "Non-alcoholic", "ask", "vegan", "自家製シロップ。麦芽の有無は要確認。", "homemade_ginger_ale"),
  I("ビットブルガー（ノンアルコールビール／ドイツ）", "Bitburger non-alcoholic beer", "Bitburger alcohol-free beer (Germany)", "¥700", "Non-alcoholic", "no", "vegan", "麦芽使用。ノンアルコールでもグルテン含有。", "na_beer_bitburger"),
  I("ウーロン茶", "uroncha", "Oolong tea", "¥600", "Non-alcoholic", "gf", "vegan", "茶葉のみ。麦茶と違い大麦を含まないためグルテン不含。", "oolong_tea"),
  I("エビアン デザイナーズボトル by アレキサンダー・ワン 750ml", "Evian designer bottle", "Evian designer bottle 750ml (still, hardness 304)", "¥1,000", "Mineral water", "gf", "vegan", "水のみ。ガス無／硬度304。", "evian_750"),
  I("オレッツア 1,000ml", "Orezza", "Orezza sparkling mineral water 1,000ml (France, hardness 530)", "¥1,000", "Mineral water", "gf", "vegan", "水のみ。ガス入／硬度530。", "orezza_1000"),
  I("グラス シャンパーニュ", "glass champagne", "Champagne by the glass", "¥2,000", "Alcohol", "ask", "vegan", "", "champagne_glass"),
  I("グラス 白ワイン", "glass shiro wine", "White wine by the glass", "¥1,200", "Alcohol", "ask", "ask", "", "white_wine_glass"),
  I("グラス 赤ワイン", "glass aka wine", "Red wine by the glass", "¥1,200", "Alcohol", "ask", "ask", "", "red_wine_glass"),
  I("アサヒ プレミアム生ビール熟撰 小瓶（334ml）", "Asahi Premium Jukusen kobin", "Asahi Premium 'Jukusen' draught beer, small bottle 334ml", "¥700", "Alcohol", "no", "vegan", "ビール＝麦芽。グルテン含有。", "beer_asahi_jukusen"),
  I("マリアージュコース A", "mariage course A", "Wine pairing A - champagne, white, red", "¥4,000", "Wine pairing", "ask", "ask", "料理に合わせてワインを提供。", "pairing_a"),
  I("マリアージュコース B", "mariage course B", "Wine pairing B - champagne, two whites, red", "¥5,000", "Wine pairing", "ask", "ask", "", "pairing_b"),
  I("マリアージュコース C", "mariage course C", "Wine pairing C - five glasses", "¥6,000", "Wine pairing", "ask", "ask", "店の表記どおり3杯目は「？」（当日のおまかせ）。", "pairing_c"),
 ]
}

json.dump(d, io.open(OUT, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print("wrote", len(d), "shops")
