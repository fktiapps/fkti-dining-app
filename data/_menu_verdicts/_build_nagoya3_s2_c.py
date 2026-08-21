# -*- coding: utf-8 -*-
import json, io, os

OUT = r"C:/pf/fkti-dining/data/_menu_verdicts/nagoya3_s2.json"
d = json.load(io.open(OUT, encoding="utf-8")) if os.path.exists(OUT) else {}


def I(ja, romaji, en, price, section, gf="", vegan="", note="", dish_key=""):
    return {"ja": ja, "romaji": romaji, "en": en, "price": price, "section": section,
            "gf": gf, "vegan": vegan, "note": note, "dish_key": dish_key}


# ---------------------------------------------------------------- HIRO NAGOYA
d["nagoya_hiro_nagoya"] = {
 "verified": "partial",
 "confidence": "medium",
 "sources": [
   "https://hiro-nagoya.jp/",
   "https://s.tabelog.com/aichi/A2301/A230109/23059055/",
   "https://s.tabelog.com/aichi/A2301/A230109/23059055/dtlrvwlst/B521471231/",
   "https://s.tabelog.com/aichi/A2301/A230109/23059055/dtlrvwlst/"
 ],
 "price_note": "The shop publishes NO prices: its own site says OMAKASE course only, members / introduction only (会員制・完全紹介制), and is currently not taking bookings from first-time guests without an introduction. The plate list below is one seating's rotating line-up, taken from a dated 2026-01 first-hand review and cross-checked against 2024-2026 reviews - it is not a fixed menu. Tabelog's budget band is ¥100,000~; 2026 reviewers report roughly ¥80,000-¥100,000 per person including drinks (one gives ¥97,000 for the course plus 2 champagnes and 4 wines; another ¥80,000 for food alone). Prices approximate - may change.",
 "last_checked": "2026-08-20",
 "items": [
  I("OMAKASE コース", "omakase course", "Omakase course - the only thing served; roughly 400g of beef across the meal", "", "Course", "ask", "no", "店サイト：「当店は『OMAKASE』コースのみのご案内となります」。会員制・完全紹介制、18歳未満入店不可。17:30-22:30、不定休。店サイトに「アレルギーや苦手な食材は可能な限り対応させて頂いております」とあるが、「ご予約当日の対応は出来かねますので、予約時にご相談ください」。グルテン対応を望むなら必ず予約時に伝えること。", "omakase_course"),
  I("野菜スティック（自家製味噌）", "yasai stick", "Vegetable sticks with the house miso dip", "", "Course plate (rotating)", "no", "no", "自家製味噌だれ。味噌には小麦を含む配合が多い。2024年11月・2026年4月の口コミに登場。", "yasai_stick_miso"),
  I("知多牛のフィレタルタル、オシェトラキャビア", "Chita-gyu fillet tartare, Oscietra caviar", "Chita-beef fillet tartare with Oscietra caviar", "", "Course plate (rotating)", "ask", "no", "2026年1月の口コミより。タルタルの調味に醤油を使う可能性。表面を軽く火を通し中はレア。", "chitagyu_tartare"),
  I("ユッケ", "yukhoe", "Beef yukhoe", "", "Course plate (rotating)", "no", "no", "2026年4月の口コミより。ユッケだれは醤油ベース＝小麦。", "yukhoe"),
  I("真鴨（茨城県産）", "magamo", "Wild mallard duck from Ibaraki", "", "Course plate (rotating)", "ask", "no", "2026年1月の口コミより。タレは要確認。", "magamo"),
  I("タン元", "tan-moto", "Prime ox tongue (base cut)", "", "Course plate (rotating)", "ask", "no", "塩で供されることが多いが要確認。", "tan_moto"),
  I("オーストラリア産ラムのスペアリブ／ラムチョップ", "lamb spare rib / lamb chop", "Australian lamb spare rib / lamb chop", "", "Course plate (rotating)", "ask", "no", "2026年1月の口コミより。下味・タレは要確認。", "lamb_sparerib"),
  I("ハラミ", "harami", "Skirt steak", "", "Course plate (rotating)", "ask", "no", "焼肉のタレ＝醤油＝小麦。塩で頼めるか要確認。", "harami"),
  I("フィレ ポワント", "fillet pointe", "Fillet 'pointe' - the sirloin-side head of the tenderloin", "", "Course plate (rotating)", "ask", "no", "口コミの説明：ヒレ肉（テンダーロイン）の頭側、サーロインに近い部分。", "fillet_pointe"),
  I("知多牛シャトーブリアン", "Chita-gyu chateaubriand", "Chita-beef chateaubriand", "", "Course plate (rotating)", "ask", "no", "", "chateaubriand"),
  I("シャトーブリアン海苔巻き（実山椒）", "chateaubriand nori-maki", "Chateaubriand rolled in nori with sansho peppercorns", "", "Course plate (rotating)", "ask", "no", "海苔・実山椒。醤油だれの可能性。", "chateaubriand_norimaki"),
  I("シャトーブリアン丼", "chateaubriand don", "Chateaubriand over rice", "", "Course plate (rotating)", "ask", "no", "丼のタレ＝醤油＝小麦の可能性。", "chateaubriand_don"),
  I("しゃぶしゃぶ", "shabu-shabu", "Beef shabu-shabu", "", "Course plate (rotating)", "ask", "no", "2026年4月の口コミより。ポン酢・ごまだれ＝小麦の可能性。", "shabu_shabu"),
  I("牛テールカレー（締め）", "gyu-tail curry", "Ox-tail curry - the closing dish", "", "Course plate (rotating)", "no", "no", "締めのカレー。カレールウは小麦を含むことが多い。全ての口コミに登場する定番。", "gyutail_curry"),
 ]
}

# ------------------------------------------------------------------- ROOKIES
d["nagoya_rookies_kodawari_nama_pa"] = {
 "verified": "authoritative",
 "confidence": "medium",
 "sources": [
   "https://www.hotpepper.jp/strJ003382000/food/",
   "https://www.hotpepper.jp/strJ003382000/drink/",
   "https://www.hotpepper.jp/strJ003382000/",
   "https://tabelog.com/aichi/A2301/A230109/23085706/"
 ],
 "price_note": "From the shop's own HotPepper listing (address confirmed 愛知県名古屋市中区二の丸1-1 愛知県体育館1階 / Dolphins Arena), but its 料理 tab is stamped 最終更新日 2023/03/17 - three years old, so treat the figures as indicative and check on the day. HotPepper also shows the shop now open Sat & Sun only, 10:30-16:00. Tax included. Prices approximate - may change.",
 "last_checked": "2026-08-20",
 "items": [
  I("昔ながらの鉄板ナポリタン", "mukashi-nagara no teppan Napolitan", "Old-style Napolitan on a sizzling iron plate", "¥880", "Fresh pasta", "no", "no", "生パスタ＝小麦。1.5倍+250円／2倍+400円。鉄板に卵を敷く場合あり。", "teppan_napolitan"),
  I("明太子とキノコの和風クリーム", "mentaiko to kinoko no wafu cream", "Japanese-style cream pasta with cod roe and mushrooms", "¥980", "Fresh pasta", "no", "no", "生パスタ＝小麦。和風＝醤油・だしの可能性。乳。", "mentaiko_cream_pasta"),
  I("ベーコンと法蓮草のペペロンチーノ", "bacon to horenso no peperoncino", "Peperoncino with bacon and spinach", "¥980", "Fresh pasta", "no", "no", "生パスタ＝小麦。", "bacon_spinach_peperoncino"),
  I("濃厚!カルボナーラ〜温玉のせ〜", "noko carbonara", "Rich carbonara topped with a soft-boiled egg", "¥980", "Fresh pasta", "no", "no", "生パスタ＝小麦。卵・乳。", "carbonara"),
  I("焦がしチーズ鉄板ナポリタン", "kogashi cheese teppan Napolitan", "Iron-plate Napolitan with browned cheese", "¥980", "Fresh pasta", "no", "no", "生パスタ＝小麦。乳。", "cheese_teppan_napolitan"),
  I("海鮮！シーフードトマトクリーム", "seafood tomato cream", "Seafood tomato-cream pasta", "¥1,100", "Fresh pasta", "no", "no", "生パスタ＝小麦。乳。", "seafood_tomato_cream"),
  I("名物!台湾ミンチ×鉄板ナポリタン", "Taiwan mince x teppan Napolitan", "House speciality - 'Taiwanese' spicy mince over iron-plate Napolitan", "¥1,200", "Fresh pasta", "no", "no", "生パスタ＝小麦。台湾ミンチの味付けは醤油・豆板醤＝小麦の可能性。名古屋名物の台湾系。", "taiwan_mince_napolitan"),
  I("しゃちほこ×鉄板ナポリタン", "shachihoko x teppan Napolitan", "'Shachihoko' iron-plate Napolitan (the Nagoya-castle special)", "¥1,200", "Fresh pasta", "no", "no", "生パスタ＝小麦。名古屋城の金鯱にちなんだ看板メニュー。", "shachihoko_napolitan"),
  I("メイプルバタークリーム（パンケーキ）", "maple butter cream pancake", "Pancakes with maple butter cream", "¥680", "Fluffy pancakes", "no", "no", "パンケーキ＝小麦。乳・卵。バニラアイス添え+250円。", "pancake_maple_butter"),
  I("西尾抹茶&小倉あん&クリーム", "Nishio matcha & ogura an & cream", "Pancakes with Nishio matcha, sweet red bean and cream", "¥880", "Fluffy pancakes", "no", "no", "パンケーキ＝小麦。愛知・西尾の抹茶。", "pancake_matcha_ogura"),
  I("チョコレートクッキー&クリーム", "chocolate cookie & cream", "Pancakes with chocolate cookie and cream", "¥880", "Fluffy pancakes", "no", "no", "パンケーキ＋クッキー＝小麦。", "pancake_cookie_cream"),
  I("キャラメル＆クリーム", "caramel & cream", "Pancakes with caramel and cream", "¥680", "Fluffy pancakes", "no", "no", "パンケーキ＝小麦。", "pancake_caramel"),
  I("完熟マンゴー＆クリーム", "kanjuku mango & cream", "Pancakes with ripe mango and cream", "¥980", "Fluffy pancakes", "no", "no", "パンケーキ＝小麦。", "pancake_mango"),
  I("ストロベリー＆ブルーベリー＆クリーム", "strawberry & blueberry & cream", "Pancakes with strawberry, blueberry and cream", "¥1,100", "Fluffy pancakes", "no", "no", "パンケーキ＝小麦。", "pancake_berry"),
  I("トロピカルフルーツミックス＆クリーム", "tropical fruit mix & cream", "Pancakes with mixed tropical fruit and cream", "¥1,280", "Fluffy pancakes", "no", "no", "パンケーキ＝小麦。", "pancake_tropical"),
  I("スパイスチーズカレー", "spice cheese curry", "House spice curry with cheese", "¥880", "Spice curry", "ask", "no", "スパイスカレーは小麦ルウを使わない店もあるが本店の表示なし。要確認。ご飯大盛+250円／ご飯とルー大盛+500円。乳。", "spice_cheese_curry"),
  I("スパイスチキンカレー", "spice chicken curry", "House spice curry with chicken", "¥980", "Spice curry", "ask", "no", "ルウに小麦を使うかは要確認。", "spice_chicken_curry"),
  I("スパイスシーフードカレー", "spice seafood curry", "House spice curry with seafood", "¥980", "Spice curry", "ask", "no", "", "spice_seafood_curry"),
  I("スパイス豚カツカレー", "spice tonkatsu curry", "House spice curry with pork cutlet", "¥1,100", "Spice curry", "no", "no", "カツ＝パン粉＝小麦。", "spice_katsu_curry"),
  I("味噌カツ×スパイスカレー", "miso-katsu x spice curry", "Nagoya miso-katsu over house spice curry", "¥1,200", "Spice curry", "no", "no", "カツ＝パン粉、味噌だれ＝小麦の可能性。名古屋名物。", "misokatsu_spice_curry"),
  I("台湾ミンチ×スパイスカレー", "Taiwan mince x spice curry", "'Taiwanese' spicy mince over house spice curry", "¥1,200", "Spice curry", "no", "no", "台湾ミンチの調味に醤油・豆板醤。", "taiwan_mince_curry"),
  I("しゃちほこ×スパイスカレー", "shachihoko x spice curry", "'Shachihoko' spice curry", "¥1,200", "Spice curry", "ask", "no", "", "shachihoko_curry"),
  I("アボカドチーズトースト", "avocado cheese toast", "Avocado and cheese on thick toast", "¥680", "Sandwiches & thick toast", "no", "no", "厚切りトースト＝小麦。乳。", "avocado_cheese_toast"),
  I("とろける玉子オムレツサンド", "torokeru tamago omelette sand", "Melting-egg omelette sandwich", "¥770", "Sandwiches & thick toast", "no", "no", "パン＝小麦。卵。", "egg_omelette_sandwich"),
  I("とろけるチーズオムレツサンド", "torokeru cheese omelette sand", "Melting-cheese omelette sandwich", "¥880", "Sandwiches & thick toast", "no", "no", "パン＝小麦。卵・乳。", "cheese_omelette_sandwich"),
  I("小倉バタートースト", "ogura butter toast", "Sweet red-bean and butter toast (a Nagoya classic)", "¥580", "Sandwiches & thick toast", "no", "no", "厚切りトースト＝小麦。乳。名古屋の定番。", "ogura_butter_toast"),
  I("ピザトースト", "pizza toast", "Pizza toast", "¥680", "Sandwiches & thick toast", "no", "no", "トースト＝小麦。乳。", "pizza_toast"),
  I("ポテトフライ（S／M／L）", "potato fry", "French fries, small / medium / large", "¥480／¥580／¥680", "Sides", "no", "vegan", "共用フライヤーで小麦の揚げ物と共用。＋280円でドリンクバーセットに。", "potato_fry"),
  I("チキンナゲット5個", "chicken nugget", "Chicken nuggets, 5 pieces", "¥580", "Sides", "no", "no", "衣＝小麦。", "chicken_nugget"),
  I("ポテナゲ", "potenage", "Fries and nuggets combo", "¥680", "Sides", "no", "no", "衣＝小麦。", "potenage"),
  I("アイスクリーム シングル", "ice cream single", "Ice cream, single scoop (waffle cone +¥100)", "¥350", "Ice cream", "ask", "no", "カップならGFの可能性。ワッフルコーン(+100円)は小麦。乳。", "ice_cream_single"),
  I("アイスクリーム ダブル", "ice cream double", "Ice cream, two scoops (waffle cone +¥100)", "¥650", "Ice cream", "ask", "no", "同上。", "ice_cream_double"),
  I("アイスクリーム トリプル", "ice cream triple", "Ice cream, three scoops (waffle cone +¥100)", "¥900", "Ice cream", "ask", "no", "同上。", "ice_cream_triple"),
  I("ドリンクバー", "drink bar", "Free-refill drink bar - cola, melon soda, ginger ale, orange, Calpis, hot/iced coffee, oolong tea", "¥480", "Drink bar", "ask", "ask", "単品480円。お料理+280円でセットにできます。カルピスは乳成分。", "drink_bar"),
  I("ケーキ＆ドリンクバーセット", "cake & drink bar set", "Add a cake and the drink bar to any pasta, curry or sandwich", "+¥680", "Sets", "no", "no", "ケーキ＝小麦。", "cake_drink_set"),
  I("ふんわりパンケーキ＆ドリンクバーセット", "pancake & drink bar set", "Add maple-butter-cream pancakes and the drink bar to any main", "+¥680", "Sets", "no", "no", "パンケーキ＝小麦。", "pancake_drink_set"),
  I("お子様ランチプレート＆ドリンクバー", "okosama lunch plate", "Children's plate - rice ball or bread, fries, nuggets, edamame corn, dessert, drink bar", "¥580（小学生以下）／¥680", "Sets", "no", "no", "パン・ナゲット＝小麦。おにぎり選択なら米。", "kids_plate"),
 ]
}

# ------------------------------------------------------------- TENPURA INABA
d["nagoya_tenpura_inaba"] = {
 "verified": "authoritative",
 "confidence": "high",
 "sources": [
   "https://www.ginza-inaba.tokyo/owari/tempura/",
   "https://s.tabelog.com/aichi/A2301/A230109/23096534/party/",
   "https://s.tabelog.com/aichi/A2301/A230109/23096534/dtlmenu/?menu_type=2"
 ],
 "price_note": "Courses from the restaurant's own site and its 公式 Tabelog course tab (更新日 2026/08/02); the 56-item drink list is from the same 公式 listing (更新日 2026/08/02). Tax included; a 15% service charge is added on top (stated on both the drink card and the shop's site). Counter, 6 seats, 完全予約制, two dinner sittings. Prices approximate - may change.",
 "last_checked": "2026-08-20",
 "items": [
  I("天婦羅おまかせコース", "tempura omakase course", "Tempura omakase - the only dinner option, fried piece by piece in front of you", "¥33,000〜", "Course", "no", "no", "店サイト：「揚げたてや最高の油・衣の状態に拘る為におまかせコース一本、一斉スタートの2回転制」。天婦羅の衣＝小麦。※アレルギーは予めお申し付けください（当日の食材変更は対応困難）。晩餐 17:30〜／20:30〜の二部制。", "tempura_omakase"),
  I("穴子天ひつまぶし天婦羅コース", "anago-ten hitsumabushi tempura course", "Lunch course, 14 items - live conger-eel tempura served hitsumabushi-style, plus the house truffle soba", "¥22,000", "Lunch course", "no", "no", "14品。活き穴子の天婦羅と名物トリュフそば。ランチ限定。天婦羅の衣＝小麦、そばも小麦つなぎ、ひつまぶしのタレ＝醤油。昼餉 11:30〜14:30。", "anago_hitsumabushi_course"),
  I("手打ちそば付き天婦羅コース", "teuchi-soba tsuki tempura course", "Lunch course, 12 items - 8 tempura pieces closing with hand-cut kakiage soba", "¥15,400", "Lunch course", "no", "no", "12品。天婦羅8種、〆はかき揚げ手打ちそば。ランチ限定。", "teuchi_soba_tempura_course"),
  I("生ビール キリン一番搾りプレミアム", "nama beer Kirin Ichiban Shibori Premium", "Kirin Ichiban Shibori Premium draught", "¥1,300", "Beer", "no", "vegan", "ビール＝麦芽。グルテン含有。", "beer_kirin_premium"),
  I("キリン グリーンズフリー", "Kirin Greens Free", "Kirin Greens Free, alcohol-free 0.00%", "¥900", "Beer", "no", "vegan", "ノンアルコールビール。麦芽使用でグルテン含有。", "na_beer_greens_free"),
  I("こだわりレモンサワー", "kodawari lemon sour", "House lemon sour", "¥1,100", "Chuhai", "ask", "vegan", "ベースの甲類焼酎は蒸留のためグルテン不含とされるが、原料は要確認。", "lemon_sour"),
  I("山椒ハイボール", "sansho highball", "Sansho-pepper highball", "¥1,400", "Chuhai", "no", "vegan", "ハイボール＝ウイスキー＝大麦麦芽由来。", "sansho_highball"),
  I("水出し緑茶ハイ", "mizudashi ryokucha hai", "Cold-brew green tea shochu highball", "¥900", "Chuhai", "ask", "vegan", "緑茶自体はGF。ベースの焼酎の原料は要確認。麦茶ではない。", "ryokucha_hai"),
  I("雁金ほうじ茶ハイ", "karigane hojicha hai", "Karigane hojicha shochu highball", "¥900", "Chuhai", "ask", "vegan", "ほうじ茶は茶葉のみ。ベース酒は要確認。", "hojicha_hai"),
  I("黒ウーロンハイ", "kuro-oolong hai", "Black oolong shochu highball", "¥900", "Chuhai", "ask", "vegan", "烏龍茶は茶葉のみ。ベース酒は要確認。", "oolong_hai"),
  I("柚子酒 鶴梅", "yuzushu Tsuruume", "Tsuruume yuzu liqueur - straight, rocks, water, soda or hot", "¥950", "Fruit liqueur", "ask", "vegan", "リキュールのベース酒は要確認。", "yuzushu_tsuruume"),
  I("梅酒 木内梅酒", "umeshu Kiuchi", "Kiuchi plum wine - straight, rocks, water, soda or hot", "¥950", "Fruit liqueur", "no", "vegan", "木内梅酒は日本酒ベースの梅酒として知られるが、木内酒造はビール醸造元でもある。麦芽由来の混入リスクがあるため要確認、GFとして扱わないこと。", "umeshu_kiuchi"),
  I("百光 別誂 朧（山形 楯の川酒造）", "Byakko Betsuatsurae Oboro", "Byakko 'Betsuatsurae Oboro' junmai daiginjo, Yamagata - 1 go (180ml)", "¥3,900", "Sake", "gf", "vegan", "純米大吟醸。原料は米と米麹のみで大麦・小麦を含まない。グラス90mlも選べます。", "sake_byakko"),
  I("千代の光 純米吟醸 雄町 火入（新潟 千代の光酒造）", "Chiyo no Hikari junmai ginjo Omachi", "Chiyo no Hikari junmai ginjo Omachi, pasteurised, Niigata - 1 go", "¥2,800", "Sake", "gf", "vegan", "純米吟醸。米と米麹のみ。", "sake_chiyonohikari"),
  I("菊姫 山廃純米（石川 菊姫合資会社）", "Kikuhime yamahai junmai", "Kikuhime yamahai junmai, Ishikawa - 1 go", "¥2,500", "Sake", "gf", "vegan", "山廃純米。米と米麹のみ。", "sake_kikuhime"),
  I("農口尚彦研究所 本醸造 無濾過生原酒（石川）", "Noguchi Naohiko honjozo muroka nama genshu", "Noguchi Naohiko Institute honjozo, unfiltered nama genshu, Ishikawa - 1 go", "¥2,800", "Sake", "ask", "vegan", "本醸造は醸造アルコール添加。原料由来は通常サトウキビだが要確認。", "sake_noguchi"),
  I("七本鎗 純米 無有 2022（滋賀 冨田酒造）", "Shichihonyari junmai Muu 2022", "Shichihonyari junmai 'Muu' 2022, Shiga - 1 go", "¥2,900", "Sake", "gf", "vegan", "純米。米と米麹のみ。", "sake_shichihonyari"),
  I("本日のおすすめ日本酒", "honjitsu no osusume nihonshu", "Today's recommended sake - ask the staff - 1 go", "¥3,300", "Sake", "ask", "vegan", "スタッフにお尋ねください。純米か本醸造かで判断が変わる。", "sake_daily"),
  I("麦 中々（宮崎 黒木本店）", "mugi Nakanaka", "'Nakanaka' barley shochu, Miyazaki", "¥950", "Shochu", "no", "vegan", "麦焼酎＝大麦。グルテン含有。", "shochu_nakanaka"),
  I("麦 一尚（鹿児島 小牧醸造）", "mugi Isshou", "'Isshou' barley shochu, Kagoshima", "¥950", "Shochu", "no", "vegan", "麦焼酎＝大麦。グルテン含有。", "shochu_isshou"),
  I("芋 白天宝山（鹿児島 西酒造）", "imo Shiro Tenhozan", "'Shiro Tenhozan' sweet-potato shochu, Kagoshima", "¥950", "Shochu", "gf", "vegan", "芋焼酎。薩摩芋と米麹のみで大麦を使わないためグルテン不含。", "shochu_tenhozan"),
  I("芋 紅小牧（鹿児島 小牧醸造）", "imo Beni Komaki", "'Beni Komaki' sweet-potato shochu, Kagoshima", "¥1,100", "Shochu", "gf", "vegan", "芋焼酎。薩摩芋＋米麹。", "shochu_benikomaki"),
  I("米 鳥飼（熊本 鳥飼酒造）", "kome Torikai", "'Torikai' rice shochu, Kumamoto", "¥1,100", "Shochu", "gf", "vegan", "米焼酎。米と米麹のみ。", "shochu_torikai"),
  I("シャンパーニュ ベラマン ブリュット", "Champagne Bellemant Brut", "Champagne Bellemant Brut, 100ml glass", "¥2,500", "Wine by the glass", "ask", "vegan", "1オーダー100ml。清澄剤の使用は要確認。", "champagne_bellemant"),
  I("本日のおすすめ 白ワイン／赤ワイン", "honjitsu no osusume wine", "Today's recommended white or red - ask the staff", "¥3,500〜", "Wine by the glass", "ask", "ask", "スタッフにお尋ねください。", "daily_wine"),
  I("マルサネ ブラン ドメーヌ ミッシェル マニャン", "Marsannay Blanc Domaine Michel Magnien", "Marsannay Blanc, Domaine Michel Magnien", "¥2,500", "White wine", "ask", "ask", "", "wine_marsannay_blanc"),
  I("シャルドネ ミリ ボーテ", "Chardonnay Mili Beaute", "Chardonnay 'Mili Beaute'", "¥2,800", "White wine", "ask", "ask", "", "wine_chardonnay_mili"),
  I("プライベート リザーブ シャルドネ セイズ ファーム", "Private Reserve Chardonnay Seis Farm", "Private Reserve Chardonnay, Seis Farm", "¥3,900", "White wine", "ask", "ask", "", "wine_seis_farm"),
  I("あさつゆ ケンゾーエステート ナパ ヴァレー", "Asatsuyu Kenzo Estate", "'Asatsuyu', Kenzo Estate, Napa Valley", "¥4,800", "White wine", "ask", "ask", "", "wine_asatsuyu"),
  I("サン トーバン フランソワ ミクルスキ", "Saint-Aubin Francois Mikulski", "Saint-Aubin, Francois Mikulski", "¥5,500", "White wine", "ask", "ask", "", "wine_saint_aubin"),
  I("ボーヌ プルミエクリュ クロ デ ムーシュ ジョセフ ドルーアン", "Beaune 1er Cru Clos des Mouches Joseph Drouhin", "Beaune 1er Cru Clos des Mouches, Joseph Drouhin", "¥9,000", "White wine", "ask", "ask", "", "wine_clos_des_mouches"),
  I("メルロー カベルネソーヴィニヨン 高畠クラシック 高畠ワイナリー", "Merlot Cabernet Takahata Classic", "Merlot / Cabernet Sauvignon, Takahata Classic, Takahata Winery", "¥2,500", "Red wine", "ask", "ask", "", "wine_takahata"),
  I("マスカットベーリーA Ycarre キュヴェK ダイヤモンド酒造", "Muscat Bailey A Ycarre Cuvee K", "Muscat Bailey A 'Ycarre' Cuvee K, Diamond Shuzo", "¥2,800", "Red wine", "ask", "ask", "", "wine_ycarre"),
  I("ピノ ノワール 青 山崎ワイナリー", "Pinot Noir Ao Yamazaki Winery", "Pinot Noir 'Ao', Yamazaki Winery", "¥2,900", "Red wine", "ask", "ask", "", "wine_pinot_ao"),
  I("ピノ ノワール ジュブレ シャンベルタン ドメーヌ フィリップ シャルロパン", "Gevrey-Chambertin Philippe Charlopin", "Gevrey-Chambertin, Domaine Philippe Charlopin", "¥5,500", "Red wine", "ask", "ask", "", "wine_gevrey"),
  I("紫鈴 ケンゾーエステート", "Rindo Kenzo Estate", "'Rindo', Kenzo Estate", "¥6,500", "Red wine", "ask", "ask", "", "wine_rindo"),
  I("日置 ブレンデッドウイスキー", "Hioki blended whisky", "Hioki blended whisky", "¥1,700", "Whisky", "no", "vegan", "ウイスキー＝大麦麦芽由来。ストレート・ロック・水割りお選びいただけます。", "whisky_hioki"),
  I("バランタイン 17年", "Ballantine's 17", "Ballantine's 17 Year Old", "¥2,900", "Whisky", "no", "vegan", "ウイスキー＝大麦麦芽由来。", "whisky_ballantines17"),
  I("シーバスリーガル ミズナラ 12年", "Chivas Regal Mizunara 12", "Chivas Regal Mizunara 12 Year Old", "¥1,500", "Whisky", "no", "vegan", "ウイスキー＝大麦麦芽由来。", "whisky_chivas_mizunara"),
  I("ボウモア 12年", "Bowmore 12", "Bowmore 12 Year Old", "¥1,800", "Whisky", "no", "vegan", "ウイスキー＝大麦麦芽由来。", "whisky_bowmore12"),
  I("I.W ハーパー 12年", "I.W. Harper 12", "I.W. Harper 12 Year Old", "¥2,500", "Whisky", "no", "vegan", "バーボンでもマッシュに大麦麦芽を使う。GFとして扱わない。", "whisky_iw_harper12"),
  I("山崎", "Yamazaki", "Yamazaki", "¥2,500", "Whisky", "no", "vegan", "ウイスキー＝大麦麦芽由来。", "whisky_yamazaki"),
  I("山崎 12年", "Yamazaki 12", "Yamazaki 12 Year Old", "¥3,900", "Whisky", "no", "vegan", "", "whisky_yamazaki12"),
  I("白州", "Hakushu", "Hakushu", "¥2,500", "Whisky", "no", "vegan", "", "whisky_hakushu"),
  I("白州 12年", "Hakushu 12", "Hakushu 12 Year Old", "¥3,900", "Whisky", "no", "vegan", "", "whisky_hakushu12"),
  I("御岳 シングルモルト 2025", "Ontake single malt 2025", "Ontake single malt 2025", "¥3,300", "Whisky", "no", "vegan", "", "whisky_ontake2025"),
  I("御岳 ファーストエディション バーボンバレル 2024", "Ontake First Edition bourbon barrel 2024", "Ontake First Edition, bourbon barrel, 2024", "¥3,300", "Whisky", "no", "vegan", "", "whisky_ontake2024"),
  I("ゆず スパークリングジュース（KIMINO Drinks）", "yuzu sparkling juice", "Yuzu sparkling juice, KIMINO Drinks", "¥1,300", "Soft drinks", "gf", "vegan", "果汁と炭酸。", "yuzu_sparkling"),
  I("うめ スパークリングジュース（KIMINO Drinks）", "ume sparkling juice", "Plum sparkling juice, KIMINO Drinks", "¥1,300", "Soft drinks", "gf", "vegan", "", "ume_sparkling"),
  I("ありまサイダー（兵庫 有馬八助商店）", "Arima cider", "Arima cider, Hyogo", "¥1,100", "Soft drinks", "gf", "vegan", "", "arima_cider"),
  I("八街 ジンジャーエール（千葉 八街商工会議所）", "Yachimata ginger ale", "Yachimata ginger ale, Chiba", "¥1,100", "Soft drinks", "ask", "vegan", "麦芽の有無は要確認。", "yachimata_ginger_ale"),
  I("ぶどう ジュース（山梨 勝沼釀造）", "budo juice Katsunuma", "Grape juice, Katsunuma Winery, Yamanashi", "¥1,100", "Soft drinks", "gf", "vegan", "", "katsunuma_grape_juice"),
  I("みかんジュース（和歌山 谷井農園）", "mikan juice Tanii nouen", "Mandarin juice, Tanii Farm, Wakayama", "¥1,100", "Soft drinks", "gf", "vegan", "", "mikan_juice"),
  I("奥会津天然水 720ml（福島 大沼郡金山町）", "Oku-Aizu tennensui", "Oku-Aizu natural water 720ml, still or sparkling", "¥1,900", "Soft drinks", "gf", "vegan", "ガス入り・ガス無しお選びください。", "okuaizu_water"),
  I("水出し伊勢煎茶", "mizudashi Ise sencha", "Cold-brew Ise sencha - hot or iced", "¥1,100", "Tea", "gf", "vegan", "茶葉のみ。", "ise_sencha"),
  I("雁金ほうじ茶", "karigane hojicha", "Karigane hojicha - hot or iced", "¥1,100", "Tea", "gf", "vegan", "茶葉のみ。麦茶ではない。", "karigane_hojicha"),
  I("古代米ブレンド茶", "kodaimai blend cha", "Ancient-rice blend tea - hot or iced", "¥1,100", "Tea", "ask", "vegan", "古代米ブレンドだが、ブレンドに大麦（麦茶）を混ぜる商品が多い。必ず麦の有無を確認すること。", "kodaimai_tea"),
  I("オリジナルブレンドティー", "original blend tea", "House blend tea - hot or iced", "¥1,100", "Tea", "ask", "vegan", "ブレンドの中身は要確認（麦入りの可能性）。", "original_blend_tea"),
 ]
}

# --------------------------------------------------------- MENDOKORO YUKINOYA
YU_PRICE_NOTE = ("Transcribed from the shop's own street A-boards photographed 2026-07 (lunch board and evening board) "
                 "and its in-store menu book photographed 2026-01. The boards print the pre-tax figure large with the "
                 "tax-included figure in parentheses; the prices below are the tax-INCLUDED ones. NOTE: the shop's own "
                 "website (site-builder.jp/1088/yukinoya) and its HotPepper page (最終更新日 2013/09/08) both still carry "
                 "a much older and cheaper price list - do not use those. Prices approximate - may change.")

d["nagoya_mendokoro_yukino_ya"] = {
 "verified": "authoritative",
 "confidence": "high",
 "sources": [
   "https://s.tabelog.com/aichi/A2301/A230109/23032606/dtlmenu/?photo=1",
   "https://tblg.k-img.com/restaurant/images/Rvw/372167/0ba28361f1fad9e99c5f31834a8526d2.jpg",
   "https://tblg.k-img.com/restaurant/images/Rvw/372167/aafc5a394b212912bdfa58ce71fae7d1.jpg",
   "https://tblg.k-img.com/restaurant/images/Rvw/340069/a2c4018c6266eafa271d34142367c480.jpg",
   "https://www.site-builder.jp/1088/yukinoya/",
   "https://www.hotpepper.jp/strJ000393707/food/"
 ],
 "price_note": YU_PRICE_NOTE,
 "last_checked": "2026-08-20",
 "items": [
  I("日替わりAランチ", "higawari A lunch", "Daily set A - three side dishes, chawanmushi, seasonal simmered dish, colourful salad, small udon, rice, pickles", "¥1,000", "Weekday lunch (11:00-14:00)", "no", "no", "平日限定。日替わりで3種のおかずが変わります。小うどん付き＝小麦。", "higawari_a_lunch"),
  I("日替わりBランチ", "higawari B lunch", "Daily set B - today's main, seasonal simmered dish, colourful salad, small udon, rice, pickles", "¥1,000", "Weekday lunch (11:00-14:00)", "no", "no", "平日限定。日替わりでメインおかずが変わります。小うどん付き＝小麦。", "higawari_b_lunch"),
  I("うどん", "udon", "Plain udon - hot or cold", "¥600", "Udon / kishimen", "no", "no", "うどん＝小麦100%。つゆ＝かつお・さば・いわし・昆布・しいたけの自家ブレンドだしに醤油。", "udon"),
  I("きしめん", "kishimen", "Plain kishimen - hot or cold", "¥600", "Udon / kishimen", "no", "no", "きしめん＝小麦100%。名古屋名物の平打ち麺。", "kishimen"),
  I("そば", "soba", "Plain soba", "¥650", "Udon / kishimen", "no", "no", "そばは小麦つなぎ＋打ち粉、つゆも小麦醤油。", "soba"),
  I("ワカメうどん／きしめん", "wakame", "Udon or kishimen with wakame seaweed - hot or cold", "¥770", "Udon / kishimen", "no", "ask", "麺＝小麦。だしはかつお等の魚でヴィーガン不可。", "wakame_udon"),
  I("おろしうどん／きしめん", "oroshi", "Udon or kishimen with grated daikon - hot or cold", "¥820", "Udon / kishimen", "no", "ask", "麺＝小麦。", "oroshi_udon"),
  I("山菜うどん／きしめん", "sansai", "Udon or kishimen with mountain vegetables - hot or cold", "¥820", "Udon / kishimen", "no", "ask", "麺＝小麦。", "sansai_udon"),
  I("あんかけ玉子とじ", "ankake tamago-toji", "Thickened broth udon with beaten egg", "¥880", "Udon / kishimen", "no", "no", "麺＝小麦、卵使用。", "ankake_tamagotoji"),
  I("鶏なんばん", "tori nanban", "Chicken and spring-onion udon", "¥880", "Udon / kishimen", "no", "no", "麺＝小麦。", "tori_nanban"),
  I("天ぷらうどん／きしめん", "tempura", "Udon or kishimen with tempura - hot or cold", "¥930", "Udon / kishimen", "no", "no", "麺＋天ぷら衣＝小麦。", "tempura_udon"),
  I("カレーうどん", "curry udon", "Curry udon", "¥930", "Udon / kishimen", "no", "no", "カレールウ＋麺＝小麦。", "curry_udon"),
  I("けんちん（玉子入）", "kenchin", "Kenchin vegetable udon with egg", "¥1,000", "Udon / kishimen", "no", "no", "麺＝小麦。卵使用。", "kenchin_udon"),
  I("味噌煮込み", "miso nikomi", "Miso-nikomi udon - the Nagoya speciality, in a clay pot", "¥1,000", "Udon / kishimen", "no", "no", "煮込み専用の特製麺＝小麦。赤味噌にも小麦を含む配合が多い。名古屋名物。", "miso_nikomi"),
  I("鍋焼き", "nabeyaki", "Nabeyaki udon", "¥1,000", "Udon / kishimen", "no", "no", "麺＝小麦。天ぷら・卵が入る。", "nabeyaki_udon"),
  I("カレー煮込みうどん", "curry nikomi udon", "Curry nikomi udon in a clay pot", "¥1,000", "Udon / kishimen", "no", "no", "カレールウ＋麺＝小麦。", "curry_nikomi_udon"),
  I("海老フライカレー（うどん又はきしめん）", "ebi-fry curry", "Curry udon or kishimen topped with fried prawns", "¥1,500", "Udon / kishimen", "no", "no", "フライ＝パン粉、カレールウ、麺＝すべて小麦。看板オススメ。", "ebifry_curry_udon"),
  I("鶏の唐揚げ定食", "tori no karaage teishoku", "Fried-chicken set - salad, small dish, rice, red miso soup, pickles", "¥1,500", "Set meals", "no", "no", "唐揚げは特製のかえしベースのタレに一晩漬け＝醤油＝小麦。唐揚げ粉も小麦。赤だし＝豆味噌。", "karaage_teishoku"),
  I("焼肉定食", "yakiniku teishoku", "Grilled-pork set - salad, small dish, rice, red miso soup, pickles", "¥1,250", "Set meals", "no", "no", "焼肉のタレ＝醤油＝小麦。", "yakiniku_teishoku"),
  I("黒豚みそかつ定食", "kurobuta misokatsu teishoku", "Kagoshima black-pork miso-katsu set", "¥1,550", "Set meals", "no", "no", "カツ＝パン粉＝小麦、味噌だれ＝豆味噌。鹿児島県産黒豚使用。", "kurobuta_misokatsu_teishoku"),
  I("得サービス定食 うどん定食", "toku service udon teishoku", "Value set - your choice of noodles plus fish fry, salad, rice and pickles", "¥1,000", "Set meals", "no", "no", "魚フライ＝パン粉＝小麦。お好きな麺を選べます。", "service_udon_teishoku"),
  I("得サービス定食 きしめん定食", "toku service kishimen teishoku", "Value set with kishimen, fish fry, salad, rice and pickles", "¥1,000", "Set meals", "no", "no", "", "service_kishimen_teishoku"),
  I("得サービス定食 そば定食", "toku service soba teishoku", "Value set with soba, fish fry, salad, rice and pickles", "¥1,050", "Set meals", "no", "no", "", "service_soba_teishoku"),
  I("黒豚みそかつ丼", "kurobuta misokatsu don", "Black-pork miso-katsu over rice (with red miso soup and pickles)", "¥1,200", "Rice bowls", "no", "no", "鹿児島県産黒豚。カツ＝パン粉、味噌だれ。丼はすべて赤だし・漬物つき。", "kurobuta_misokatsu_don"),
  I("黒豚かつ丼", "kurobuta katsu don", "Black-pork cutlet bowl", "¥1,150", "Rice bowls", "no", "no", "カツ＝パン粉、割下＝醤油。", "kurobuta_katsu_don"),
  I("牛丼（玉子とじ）", "gyudon", "Beef bowl bound with egg", "¥980", "Rice bowls", "no", "no", "割下＝醤油＝小麦。卵。", "gyudon"),
  I("いか天丼（玉子とじ）", "ika tendon", "Squid tempura bowl bound with egg", "¥980", "Rice bowls", "no", "no", "天ぷら衣＝小麦。", "ika_tendon"),
  I("天丼（玉子とじ）", "tendon", "Tempura bowl bound with egg", "¥980", "Rice bowls", "no", "no", "天ぷら衣＝小麦。", "tendon"),
  I("親子丼（ダブル玉子）", "oyakodon", "Chicken and egg bowl, double egg", "¥930", "Rice bowls", "no", "no", "割下＝醤油＝小麦。", "oyakodon"),
  I("木の葉丼（ダブル玉子）", "konoha don", "'Konoha' bowl - egg, shiitake, kamaboko and spring onion, double egg", "¥800", "Rice bowls", "no", "no", "蒲鉾は小麦でんぷんを含む製品あり。割下＝醤油。", "konoha_don"),
  I("志の田丼（ダブル玉子）", "shinoda don", "'Shinoda' bowl - egg, fried tofu and spring onion, double egg", "¥800", "Rice bowls", "no", "no", "割下＝醤油＝小麦。", "shinoda_don"),
  I("玉子丼（ダブル玉子）", "tamago don", "Egg bowl, double egg", "¥730", "Rice bowls", "no", "no", "割下＝醤油＝小麦。", "tamago_don"),
  I("赤だし→小うどん／小きしめんに変更", "ko-udon henkou", "Swap the set's red miso soup for a small udon or kishimen", "+¥220", "Set upgrades", "no", "no", "小そばは+¥280、大うどん・大きしめんは+¥330、大そばは+¥390。", "swap_small_noodle"),
  I("冷奴", "hiyayakko", "Cold tofu", "¥300", "Evening a la carte (17:00-21:30)", "ask", "ask", "豆腐は大豆のみ。かけ醤油＝小麦、かつお節が乗ればヴィーガン不可。", "hiyayakko"),
  I("枝豆", "edamame", "Edamame", "¥350", "Evening a la carte", "gf", "vegan", "塩茹での枝豆のみ。", "edamame"),
  I("とろろ", "tororo", "Grated yam", "¥450", "Evening a la carte", "ask", "ask", "だし・醤油は要確認。", "tororo"),
  I("山菜おろし", "sansai oroshi", "Mountain vegetables with grated daikon", "¥450", "Evening a la carte", "ask", "ask", "醤油だれは要確認。", "sansai_oroshi"),
  I("昆布じゃこおろし", "kombu jako oroshi", "Kombu and baby sardines with grated daikon", "¥450", "Evening a la carte", "ask", "no", "じゃこ＝魚。醤油だれは要確認。", "kombu_jako_oroshi"),
  I("長芋の短冊", "nagaimo no tanzaku", "Julienned mountain yam", "¥500", "Evening a la carte", "ask", "ask", "醤油だれ・海苔。", "nagaimo_tanzaku"),
  I("焼きなす", "yaki-nasu", "Grilled aubergine", "¥500", "Evening a la carte", "ask", "ask", "かつお節・生姜醤油が定番。要確認。", "yaki_nasu"),
  I("なすのみそかけ", "nasu no misokake", "Aubergine with miso sauce", "¥500", "Evening a la carte", "no", "ask", "赤味噌だれ＝小麦を含む配合が多い。", "nasu_misokake"),
  I("野菜サラダ", "yasai salad", "Green salad", "¥600", "Evening a la carte", "ask", "ask", "ドレッシングは要確認。", "yasai_salad"),
  I("豆腐サラダ", "tofu salad", "Tofu salad", "¥800", "Evening a la carte", "ask", "ask", "ドレッシング・かつお節・海苔は要確認。", "tofu_salad"),
  I("揚げだし豆腐", "agedashi dofu", "Agedashi tofu", "¥550", "Evening a la carte", "no", "no", "衣＝小麦粉・片栗粉、つゆ＝小麦醤油、かつお節。", "agedashi_dofu"),
  I("鶏の唐揚げ（ハーフ）", "tori no karaage half", "Fried chicken, half portion", "¥550", "Evening a la carte", "no", "no", "特製のかえしをベースにしたタレに一晩漬け＝醤油＝小麦。唐揚げ粉も小麦。", "karaage_half"),
  I("鶏の唐揚げ（レギュラー・サラダ付）", "tori no karaage regular", "Fried chicken, regular portion with salad", "¥1,150", "Evening a la carte", "no", "no", "店の看板オススメ。やわらかジューシー。", "karaage_regular"),
  I("どて煮", "dote-ni", "Beef tendon simmered in red miso - a Nagoya classic", "¥550", "Evening a la carte", "no", "no", "赤味噌だれ＝小麦を含む配合が多い。", "dote_ni"),
  I("揚げ豆腐田楽", "age-dofu dengaku", "Fried tofu with dengaku miso", "¥550", "Evening a la carte", "no", "ask", "味噌だれ＝小麦の可能性。揚げ衣も。", "agedofu_dengaku"),
  I("豚ヒレ串カツ", "buta hire kushikatsu", "Pork-fillet skewer cutlets", "¥550", "Evening a la carte", "no", "no", "パン粉＝小麦。", "buta_kushikatsu"),
  I("玉ねぎ天ぷら", "tamanegi tempura", "Onion tempura", "¥200", "Evening a la carte", "no", "ask", "天ぷら衣＝小麦。", "tamanegi_tempura"),
  I("魚フライ", "sakana fry", "Fried fish", "¥550", "Evening a la carte", "no", "no", "パン粉＝小麦。", "sakana_fry"),
  I("なんこつ唐揚げ", "nankotsu karaage", "Fried chicken cartilage", "¥550", "Evening a la carte", "no", "no", "唐揚げ粉＝小麦。", "nankotsu_karaage"),
  I("イカ唐揚げ", "ika karaage", "Fried squid", "¥550", "Evening a la carte", "no", "no", "唐揚げ粉＝小麦。", "ika_karaage"),
  I("ちくわ磯部揚げ", "chikuwa isobe-age", "Chikuwa fritters with aonori", "¥500", "Evening a la carte", "no", "no", "衣＝小麦、ちくわにも小麦でんぷん。", "chikuwa_isobeage"),
  I("牛鍋", "gyu-nabe", "Small beef hot pot", "¥900", "Evening a la carte", "no", "no", "割下＝醤油＝小麦。", "gyu_nabe"),
  I("黒豚かつ鍋", "kurobuta katsu-nabe", "Black-pork cutlet hot pot", "¥1,150", "Evening a la carte", "no", "no", "カツ＝パン粉、割下＝醤油。", "kurobuta_katsu_nabe"),
  I("黒豚みそかつ（サラダ添え）", "kurobuta misokatsu", "Black-pork miso-katsu with salad", "¥1,250", "Evening a la carte", "no", "no", "パン粉＝小麦、味噌だれ。", "kurobuta_misokatsu"),
  I("焼肉（サラダ添え）", "yakiniku", "Grilled pork with salad", "¥1,050", "Evening a la carte", "no", "no", "焼肉のタレ＝醤油＝小麦。", "yakiniku"),
 ]
}

json.dump(d, io.open(OUT, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print("wrote", len(d), "shops;", sum(len(v["items"]) for v in d.values()), "items")
