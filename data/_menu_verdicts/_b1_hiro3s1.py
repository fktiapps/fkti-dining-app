import json, os
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "hiro3_s1.json")
d = json.load(open(OUT, encoding="utf-8")) if os.path.exists(OUT) else {}


def I(ja, romaji, en, price, section, gf="", vegan="", note="", dish_key=""):
    return {"ja": ja, "romaji": romaji, "en": en, "price": price, "section": section,
            "gf": gf, "vegan": vegan, "note": note, "dish_key": dish_key}


SOY = "つけ/かけ醤油は小麦醸造。"

d["hiro_iwamura"] = {
 "verified": "authoritative",
 "confidence": "high",
 "sources": [
   "https://s.tabelog.com/hiroshima/A3402/A340202/34002540/dtlmenu/?photo=1",
   "https://tblg.k-img.com/restaurant/images/Rvw/336621/92d0e40495d767239211c4b5759ecde4.jpg",
   "https://tblg.k-img.com/restaurant/images/Rvw/365512/f3ff194ccf5e615076d1fd529f16ed0a.jpg",
   "https://tabelog.com/hiroshima/A3402/A340202/34002540/"
 ],
 "price_note": "Transcribed from the shop's own laminated menu card photographed 2025-12, except 炭火焼きあなごめし and かき定食, which are 2026 prices from a 2026-02 review and a 2026-06 receipt. The charcoal anago went ¥2,500 (2024-12) -> ¥2,800 (2025-12) -> ¥3,200 (2026), so treat every other line as a floor. Prices approximate — may change.",
 "last_checked": "2026-08-20",
 "items": [
  I("炭火焼きあなごめし", "sumibi-yaki anago-meshi", "Charcoal-grilled conger eel over rice, with clear soup and pickles", "¥3,200", "あなごめし / Anago rice", "no", "no", "甘辛タレ＝小麦醤油。2025/12の品書きは¥2,800、2026/02の来店記録と2026/06のレシートは¥3,200。", "anago_meshi_sumibi"),
  I("あなごの炭火白焼き", "anago no sumibi shirayaki", "Charcoal shirayaki conger eel, plain-grilled — NO rice included", "¥2,500", "あなごめし / Anago rice", "ask", "no", "品書きに『ごはんはついておりません』と明記。素焼きでタレなしだが、添えの醤油＝小麦。檸檬胡椒と塩だけで頼めるか要確認。", "anago_shirayaki"),
  I("煮あなごめし", "ni-anago-meshi", "Simmered conger eel over rice", "¥2,400", "あなごめし / Anago rice", "no", "no", "煮汁＝醤油・味醂で小麦。", "anago_meshi_ni"),
  I("煮あなごとじ丼", "ni-anago tojidon", "Simmered conger eel and egg rice bowl", "¥1,500", "丼 / Rice bowls", "no", "no", "割下＝小麦醤油。卵使用。", "anago_tojidon"),
  I("かき丼", "kaki-don", "Oyster rice bowl", "¥1,450", "丼 / Rice bowls", "no", "no", "割下＝小麦醤油。", "oyster_don"),
  I("かきフライ丼", "kaki-furai don", "Fried oyster rice bowl", "¥1,450", "丼 / Rice bowls", "no", "no", "パン粉＝小麦。共用フライヤー。", "fried_oyster_don"),
  I("えび天とじ丼", "ebi-ten tojidon", "Shrimp tempura and egg rice bowl", "¥1,350", "丼 / Rice bowls", "no", "no", "天ぷら衣＝小麦。", "ebi_ten_tojidon"),
  I("かつ丼", "katsudon", "Fried pork cutlet and egg rice bowl", "¥1,350", "丼 / Rice bowls", "no", "no", "パン粉＝小麦。", "katsudon"),
  I("牛とじ丼", "gyu tojidon", "Beef and egg rice bowl", "¥1,350", "丼 / Rice bowls", "no", "no", "割下＝小麦醤油。", "gyu_tojidon"),
  I("かき定食", "kaki teishoku", "Oyster set meal", "¥2,000", "定食 / Set meals", "no", "no", "2026/06のレシートに¥2,000（税込）。品書き写真には未掲載で内容は未確認。", "oyster_teishoku"),
  I("かきフライ定食", "kaki-furai teishoku", "Fried oyster set meal", "¥1,850", "定食 / Set meals", "no", "no", "パン粉＝小麦。", "fried_oyster_set"),
  I("かきフライ単品", "kaki-furai tanpin", "Fried oysters a la carte", "¥1,550", "定食 / Set meals", "no", "no", "パン粉＝小麦。", "fried_oyster_alacarte"),
  I("エビフライ定食", "ebi-furai teishoku", "Fried shrimp set meal", "¥1,700", "定食 / Set meals", "no", "no", "パン粉＝小麦。", "fried_shrimp_set"),
  I("エビフライ単品", "ebi-furai tanpin", "Fried shrimp a la carte", "¥1,400", "定食 / Set meals", "no", "no", "パン粉＝小麦。", "fried_shrimp_alacarte"),
  I("とんかつ定食", "tonkatsu teishoku", "Fried pork cutlet set meal", "¥1,600", "定食 / Set meals", "no", "no", "パン粉＝小麦。", "tonkatsu_set"),
  I("とんかつ単品", "tonkatsu tanpin", "Fried pork cutlet a la carte", "¥1,300", "定食 / Set meals", "no", "no", "パン粉＝小麦。", "tonkatsu_alacarte"),
  I("かきうどんとミニあなごめしセット", "kaki udon to mini anago-meshi setto", "Oyster udon + mini conger eel rice set", "¥1,950", "うどん / Udon", "no", "no", "うどん＝小麦。つゆ＝小麦醤油。", "oyster_udon_set"),
  I("あなごうどんとミニあなごめしセット", "anago udon to mini anago-meshi setto", "Conger eel udon + mini conger eel rice set", "¥1,950", "うどん / Udon", "no", "no", "うどん＝小麦。", "anago_udon_set"),
  I("えび天ぷらうどんとミニあなごめしセット", "ebi tempura udon to mini anago-meshi setto", "Shrimp tempura udon + mini conger eel rice set", "¥1,650", "うどん / Udon", "no", "no", "うどん・天ぷら衣＝小麦。", "ebiten_udon_set"),
  I("牛うどんとミニあなごめしセット", "gyu udon to mini anago-meshi setto", "Beef udon + mini conger eel rice set", "¥1,650", "うどん / Udon", "no", "no", "うどん＝小麦。", "beef_udon_set"),
  I("かきうどん", "kaki udon", "Oyster udon", "¥1,400", "うどん / Udon", "no", "no", "うどん＝小麦。", "oyster_udon"),
  I("あなごうどん", "anago udon", "Conger eel udon", "¥1,400", "うどん / Udon", "no", "no", "うどん＝小麦。", "anago_udon"),
  I("えび天ぷらうどん", "ebi tempura udon", "Shrimp tempura udon", "¥1,100", "うどん / Udon", "no", "no", "うどん・衣＝小麦。", "ebiten_udon"),
  I("肉うどん", "niku udon", "Beef udon", "¥1,100", "うどん / Udon", "no", "no", "うどん＝小麦。", "beef_udon")
 ]
}

d["hiro_shiomachi_sushi_tsurumi"] = {
 "verified": "authoritative",
 "confidence": "high",
 "sources": [
   "https://y965401.gorp.jp/",
   "https://r.gnavi.co.jp/0001729587/menu2/",
   "https://r.gnavi.co.jp/0001729587/menu4/",
   "https://r.gnavi.co.jp/0001729587/menu3/",
   "https://r.gnavi.co.jp/0001729587/menu1/",
   "https://r.gnavi.co.jp/0001729587/lunch/"
 ],
 "price_note": "From the shop's own Gnavi official pages (宮島 汐まち寿司 つるみ, 広島県廿日市市宮島町73-2 — on the island itself, not Miyajimaguchi). Nigiri prices are per piece and the shop's own page warns 『仕入れによって多少価格が変動する場合があります』. Prices approximate — may change.",
 "last_checked": "2026-08-20",
 "items": [
  I("汐まち寿司ランチ", "Shiomachi sushi lunch", "Shiomachi sushi lunch — premium oyster su-gaki, filefish, Spanish mackerel, prawn, cuttlefish, wild bluefin akami, kohada, simmered anago, negitoro, whitebait, tamago, asari clear soup", "¥3,850", "ランチ / Lunch 11:30–15:00", "no", "no", "煮穴子・玉子＝小麦醤油/味醂。" + SOY, "lunch_shiomachi"),
  I("鶴海ランチ", "Tsurukai lunch", "Tsurukai lunch — Ebifornia roll, oyster su-gaki, 3 fish of the day, seared scallop with uni, bluefin akami, kama-saki otoro, Tsurukai mackerel sushi, anago nigiri, tamago sando, asari soup", "¥6,600", "ランチ / Lunch 11:30–15:00", "no", "no", "煮穴子・玉子サンド＝小麦。", "lunch_tsurukai"),
  I("つるみ流あなごめし", "Tsurumi-ryu anago-meshi", "The sushi chef's conger-eel rice — anago-meshi, asari clear soup, Hiroshima-na pickles, tamago", "¥3,300", "ランチ / Lunch 11:30–15:00", "no", "no", "あなごのタレ＝小麦醤油。", "lunch_anago_meshi"),
  I("お子様寿司ランチ", "okosama sushi lunch", "Children's sushi lunch — 8 pieces of nigiri", "¥1,540", "ランチ / Lunch 11:30–15:00", "ask", "no", SOY + "煮穴子・玉子が入れば小麦。ネタ指定が可能か要確認。", "lunch_kids"),
  I("鶴海コース", "Tsurukai course", "Tsurukai course, 16 items — Ebifornia roll, oyster su-gaki, nodoguro, 3 Hamada fish, seared scallop with uni and burnt soy, ika, seared engawa, wild bluefin, kama-saki otoro, mackerel sushi, premium anago, uni-and-ikura roll, prawn chawanmushi, anago roll, tamago, asari soup", "¥8,800", "コース / Courses 17:00–21:00, reserve by 14:00", "no", "no", "焦がし醤油・煮穴子・茶碗蒸しの出汁＝小麦醤油。", "course_tsurukai"),
  I("匠コース", "Takumi course", "Takumi course, 21 items — the chef's full line-up incl. kama-saki otoro, live-cut whole-piece anago nigiri, seared crab miso, beef-toro with uni, the 'jewel box', chawanmushi, asari soup", "¥13,200", "コース / Courses 17:00–21:00, reserve by 14:00", "no", "no", "要予約（準備に時間がかかる）。煮穴子・茶碗蒸し・玉子＝小麦醤油。", "course_takumi"),
  I("彩りコース", "Irodori course", "Irodori course, 12 items — Ebifornia roll, su-gaki, nodoguro, 2 fish of the day, seared scallop, ika, engawa, bluefin, otoro, kohada, premium simmered anago, uni and ikura", "¥6,600", "コース / Courses 17:00–21:00, reserve by 14:00", "no", "no", "煮穴子＝小麦醤油。", "course_irodori"),
  I("海老フォルニアロール", "ebi-fornia roll", "'Ebifornia' roll — the house prawn creation", "¥880", "◆白身・海老・光物◆ / Nigiri — white fish, prawn, silver fish", "no", "no", "マヨ・ソース類使用の可能性が高い。要確認。", "ebifornia_roll"),
  I("カマ先大トロ", "kama-saki otoro", "Kama-saki otoro — the rare fatty collar cut of wild bluefin", "¥770", "◆白身・海老・光物◆ / Nigiri — white fish, prawn, silver fish", "ask", "no", SOY, "kamasaki_otoro"),
  I("天然本鮪赤身", "tennen hon-maguro akami", "Wild bluefin tuna, lean", "¥264", "◆白身・海老・光物◆ / Nigiri — white fish, prawn, silver fish", "ask", "no", SOY, "maguro_akami"),
  I("海老ボイル", "ebi boil", "Boiled shrimp", "¥132", "◆白身・海老・光物◆ / Nigiri — white fish, prawn, silver fish", "ask", "no", SOY, "boiled_shrimp"),
  I("大赤海老", "o-aka-ebi", "Large red shrimp", "¥264", "◆白身・海老・光物◆ / Nigiri — white fish, prawn, silver fish", "ask", "no", SOY, "aka_ebi"),
  I("特大海老", "tokudai ebi", "Extra-large prawn", "¥440", "◆白身・海老・光物◆ / Nigiri — white fish, prawn, silver fish", "ask", "no", SOY, "large_prawn"),
  I("真アジ／真いわし", "ma-aji / ma-iwashi", "Horse mackerel / sardine (each)", "¥198", "◆白身・海老・光物◆ / Nigiri — white fish, prawn, silver fish", "ask", "no", SOY, "aji_iwashi"),
  I("トロけるいわし", "torokeru iwashi", "'Melting' sardine", "¥330", "◆白身・海老・光物◆ / Nigiri — white fish, prawn, silver fish", "ask", "no", SOY, "melting_sardine"),
  I("コウイカ／アオリイカ／生タコ", "kouika / aori-ika / nama-dako", "Cuttlefish / bigfin reef squid / raw octopus (each)", "¥198", "◆イカ・タコ・貝類・酢締め◆ / Nigiri — squid, octopus, shellfish, cured", "ask", "no", SOY, "ika_tako"),
  I("流イカ", "nagare-ika", "'Flowing' squid", "¥330", "◆イカ・タコ・貝類・酢締め◆ / Nigiri — squid, octopus, shellfish, cured", "ask", "no", SOY, "nagare_ika"),
  I("ホタテ", "hotate", "Scallop", "¥264", "◆イカ・タコ・貝類・酢締め◆ / Nigiri — squid, octopus, shellfish, cured", "ask", "no", SOY, "scallop"),
  I("炙りホタテ雲丹のせ", "aburi hotate uni-nose", "Seared scallop topped with sea urchin", "¥440", "◆イカ・タコ・貝類・酢締め◆ / Nigiri — squid, octopus, shellfish, cured", "no", "no", "コース説明では『焦がし醤油』で仕上げる＝小麦。", "seared_scallop_uni"),
  I("蒸し牡蠣(極鮮王)", "mushi-gaki (Gokusen-o)", "Steamed oyster, 'Gokusen-o' brand", "¥330", "◆イカ・タコ・貝類・酢締め◆ / Nigiri — squid, octopus, shellfish, cured", "ask", "no", SOY, "steamed_oyster"),
  I("石垣貝", "ishigaki-gai", "Ishigaki clam", "¥132", "◆イカ・タコ・貝類・酢締め◆ / Nigiri — squid, octopus, shellfish, cured", "ask", "no", SOY, "ishigaki_clam"),
  I("こはだ", "kohada", "Gizzard shad", "¥132", "◆イカ・タコ・貝類・酢締め◆ / Nigiri — squid, octopus, shellfish, cured", "ask", "no", "酢締め。" + SOY, "kohada"),
  I("〆サバ／炙り〆サバ", "shime-saba / aburi shime-saba", "Vinegar-cured mackerel / seared vinegar-cured mackerel (each)", "¥198", "◆イカ・タコ・貝類・酢締め◆ / Nigiri — squid, octopus, shellfish, cured", "ask", "no", "酢締め。" + SOY, "shime_saba"),
  I("天然本鮪", "tennen hon-maguro", "Wild bluefin tuna", "¥264", "◆赤身・穴子・玉子◆ / Nigiri — red flesh, anago, egg", "ask", "no", SOY, "hon_maguro"),
  I("本鮪中トロ", "hon-maguro chutoro", "Bluefin chutoro, medium fatty", "¥440", "◆赤身・穴子・玉子◆ / Nigiri — red flesh, anago, egg", "ask", "no", SOY, "chutoro"),
  I("漬けトロ鮪の海苔巻き", "zuke-toro maguro no norimaki", "Marinated toro tuna nori roll", "¥550", "◆赤身・穴子・玉子◆ / Nigiri — red flesh, anago, egg", "no", "no", "漬けだれ＝小麦醤油。", "zuke_toro_roll"),
  I("活〆穴子の一本握り", "ikijime anago no ippon nigiri", "Live-cut conger eel, whole-piece nigiri", "¥660", "◆赤身・穴子・玉子◆ / Nigiri — red flesh, anago, egg", "no", "no", "タレ＝小麦醤油。", "anago_nigiri"),
  I("玉子握り", "tamago nigiri", "Sweet omelette nigiri", "¥132", "◆赤身・穴子・玉子◆ / Nigiri — red flesh, anago, egg", "ask", "no", "寿司屋の玉子焼きは味醂・薄口醤油・つなぎ粉を使うことが多い。要確認。", "tamago_nigiri"),
  I("玉子サンド", "tamago sando", "Tamago 'sandwich' — layered omelette sushi", "¥264", "◆赤身・穴子・玉子◆ / Nigiri — red flesh, anago, egg", "ask", "no", "玉子焼きの配合次第。要確認。", "tamago_sando"),
  I("ネギトロ", "negitoro", "Minced fatty tuna with spring onion, gunkan", "¥132", "◆軍艦・細巻き◆ / Gunkan and thin rolls", "ask", "no", SOY, "negitoro"),
  I("海鮮軍艦", "kaisen gunkan", "Mixed seafood gunkan", "¥198", "◆軍艦・細巻き◆ / Gunkan and thin rolls", "ask", "no", SOY, "kaisen_gunkan"),
  I("カニみそ", "kani-miso", "Crab-brain gunkan", "¥264", "◆軍艦・細巻き◆ / Gunkan and thin rolls", "ask", "no", "味付けに醤油・味噌を使う場合あり。要確認。", "kanimiso"),
  I("いくら", "ikura", "Salmon roe gunkan", "¥330", "◆軍艦・細巻き◆ / Gunkan and thin rolls", "no", "no", "いくらの醤油漬け＝小麦。", "ikura"),
  I("雲丹", "uni", "Sea urchin gunkan", "¥440", "◆軍艦・細巻き◆ / Gunkan and thin rolls", "ask", "no", SOY, "uni"),
  I("鉄火", "tekka", "Tuna thin roll", "¥440", "◆軍艦・細巻き◆ / Gunkan and thin rolls", "ask", "no", SOY, "tekkamaki"),
  I("しんこ", "shinko", "Young gizzard shad", "¥264", "◆軍艦・細巻き◆ / Gunkan and thin rolls", "ask", "no", "酢締め。" + SOY, "shinko"),
  I("カッパ／海鮮梅肉／トロたく", "kappa / kaisen bainiku / torotaku", "Cucumber roll / seafood-and-plum roll / toro-and-pickled-radish roll (each)", "¥330", "◆軍艦・細巻き◆ / Gunkan and thin rolls", "ask", "", "カッパは具が野菜のみ。梅肉・たくあんの調味と酢飯の配合、"+SOY+"を要確認。", "kappa_bainiku_torotaku"),
  I("海老カリフォルニアロール", "ebi California roll", "Shrimp California roll", "¥968", "◆創作寿司◆ / Creative sushi", "no", "no", "マヨネーズ・ソース類。小麦の可能性が高い。", "ebi_california_roll"),
  I("真鯛の刺身", "madai no sashimi", "Sea bream sashimi", "¥715", "◆刺身◆ / Sashimi", "ask", "no", SOY, "madai_sashimi"),
  I("サーモン刺し", "sāmon sashi", "Salmon sashimi", "¥550", "◆刺身◆ / Sashimi", "ask", "no", SOY, "salmon_sashimi"),
  I("いわしの刺身", "iwashi no sashimi", "Sardine sashimi", "¥550", "◆刺身◆ / Sashimi", "ask", "no", SOY, "iwashi_sashimi"),
  I("カンパチ刺身", "kanpachi sashimi", "Amberjack sashimi", "¥770", "◆刺身◆ / Sashimi", "ask", "no", SOY, "kanpachi_sashimi"),
  I("タコ刺し", "tako sashi", "Octopus sashimi", "¥770", "◆刺身◆ / Sashimi", "ask", "no", SOY, "tako_sashimi"),
  I("マグロの盛り合わせ", "maguro no moriawase", "Assorted tuna plate", "¥1,650", "◆刺身◆ / Sashimi", "ask", "no", SOY, "maguro_platter"),
  I("刺身盛り合わせ", "sashimi moriawase", "Assorted sashimi plate", "¥1,980", "◆刺身◆ / Sashimi", "ask", "no", SOY, "sashimi_platter"),
  I("石垣貝の炙り", "ishigaki-gai no aburi", "Seared Ishigaki clam", "¥418", "◆一品◆ / A la carte", "ask", "no", SOY, "seared_ishigaki"),
  I("エンガワユッケ", "engawa yukke", "Flounder-fin yukke", "¥418", "◆一品◆ / A la carte", "no", "no", "ユッケだれ＝コチュジャン・醤油で小麦。", "engawa_yukke"),
  I("酢牡蠣", "su-gaki", "Vinegared oyster", "¥638", "◆一品◆ / A la carte", "ask", "no", "ポン酢に小麦醤油が入ることが多い。要確認。", "su_gaki"),
  I("あん肝", "ankimo", "Monkfish liver", "¥638", "◆一品◆ / A la carte", "no", "no", "ポン酢／煮汁＝小麦醤油。", "ankimo"),
  I("おつまみ玉子", "otsumami tamago", "Omelette nibble", "¥418", "◆一品◆ / A la carte", "ask", "no", "玉子焼きの配合次第。要確認。", "otsumami_tamago"),
  I("タコの唐揚げ", "tako no karaage", "Fried octopus", "¥638", "◆一品◆ / A la carte", "no", "no", "唐揚げ粉＝小麦。共用フライヤー。", "tako_karaage"),
  I("キスの天ぷら", "kisu no tempura", "Whiting tempura", "¥968", "◆一品◆ / A la carte", "no", "no", "天ぷら衣＝小麦。", "kisu_tempura"),
  I("茶碗蒸し", "chawanmushi", "Savoury egg custard", "¥418", "◆一品◆ / A la carte", "ask", "no", "出汁に薄口醤油＝小麦の可能性。卵使用。", "chawanmushi"),
  I("鯛アラ潮汁", "tai-ara ushiojiru", "Sea bream bone clear soup", "¥330", "◆一品◆ / A la carte", "ask", "no", "潮汁は塩仕立てが基本だが醤油を落とす店もある。要確認。", "tai_ushiojiru"),
  I("アサヒスーパードライ小瓶", "Asahi Super Dry kobin", "Asahi Super Dry, small bottle", "¥660", "◆ビール◆ / Beer", "no", "vegan", "ビール＝大麦麦芽。", "beer_asahi"),
  I("一番搾り　中瓶", "Ichiban Shibori chubin", "Kirin Ichiban Shibori, medium bottle", "¥880", "◆ビール◆ / Beer", "no", "vegan", "ビール＝大麦麦芽。", "beer_kirin"),
  I("白鴻 黒ラベル 純米酒", "Hakukou kuro label junmai-shu", "Hakukou Black Label junmai sake — Morikawa Shuzo, Yasuura, Hiroshima; SMV +11, ultra-dry", "¥880", "◆日本酒◆ / Sake", "", "vegan", "純米酒は米・米麹のみ。", "sake_hakukou"),
  I("雨後の月 純米吟醸 山田スペシャル", "Ugo no Tsuki junmai ginjo Yamada Special", "Ugo no Tsuki junmai ginjo 'Yamada Special' — Aihara Shuzo, Kure", "¥990", "◆日本酒◆ / Sake", "", "vegan", "純米吟醸は米・米麹のみ。", "sake_ugonotsuki"),
  I("獺祭 三割九分 大吟醸", "Dassai sanwari-kyubu daiginjo", "Dassai 39 daiginjo — Asahi Shuzo, Iwakuni", "¥1,210", "◆日本酒◆ / Sake", "", "vegan", "", "sake_dassai"),
  I("ハイボール", "highball", "Whisky highball", "¥550", "◆その他ドリンク◆ / Other drinks", "no", "vegan", "ウイスキー＝大麦麦芽。", "highball"),
  I("【芋】富の宝山", "[imo] Tomi no Hozan", "Tomi no Hozan sweet-potato shochu", "¥660", "◆その他ドリンク◆ / Other drinks", "ask", "vegan", "芋焼酎。麹が米か麦かは要確認。", "shochu_tominohozan"),
  I("コーラ", "kōra", "Cola", "¥330", "◆ソフトドリンク◆ / Soft drinks", "", "vegan", "", "cola"),
  I("烏龍茶", "ūroncha", "Oolong tea", "¥220", "◆ソフトドリンク◆ / Soft drinks", "", "vegan", "", "oolong_tea"),
  I("オレンジ", "orenji", "Orange juice", "¥330", "◆ソフトドリンク◆ / Soft drinks", "", "vegan", "", "orange_juice")
 ]
}

d["hiro_susumu"] = {
 "verified": "authoritative",
 "confidence": "high",
 "sources": [
   "https://s.tabelog.com/hiroshima/A3401/A340114/34016446/dtlmenu/?photo=1",
   "https://tblg.k-img.com/restaurant/images/Rvw/293697/35c1712a884b40ca667fbda1c785bce3.jpg",
   "https://tblg.k-img.com/restaurant/images/Rvw/214445/c044421ec88411ea8ce55b28a51bc53c.jpg"
 ],
 "price_note": "Transcribed from the shop's own laminated menu book photographed 2025-04. Three lines (スタミナ, 肉玉, 焼きそば) were cropped out of that photo — their prices are left blank and the 2023-08 figure is quoted in the note rather than guessed. Every okonomiyaki is そば or うどん, your choice. Takeaway available, ¥100 container charge. Prices approximate — may change.",
 "last_checked": "2026-08-20",
 "items": [
  I("①スペシャル", "supesharu", "No.1 Special — pork, egg, oyster, prawn, squid, spring onion", "¥2,000", "お好み焼き / Okonomiyaki (soba or udon)", "no", "no", "生地＝小麦。そば/うどん麺も小麦。お好みソース＝小麦。", "okonomiyaki_special"),
  I("②共和国", "kyōwakoku", "'Republic' — pork, egg, prawn, squid, spring onion", "¥1,500", "お好み焼き / Okonomiyaki (soba or udon)", "no", "no", "生地・麺・ソースすべて小麦。", "okonomiyaki_kyowakoku"),
  I("③べっぴん", "beppin", "'Beppin' — pork, egg, shiso leaf, cheese", "¥1,300", "お好み焼き / Okonomiyaki (soba or udon)", "no", "no", "生地・麺・ソースすべて小麦。", "okonomiyaki_beppin"),
  I("④スタミナ", "sutamina", "'Stamina' — pork, egg, kimchi, garlic chips (chilli-marked)", "", "お好み焼き / Okonomiyaki (soba or udon)", "no", "no", "2025/04の品書き写真では価格が切れて読めず。2023/08の同じ品書きでは¥1,100。生地・麺・ソースすべて小麦。", "okonomiyaki_stamina"),
  I("⑤すすむ", "susumu", "'Susumu', the house name — pork, ika-ten squid fritter, spring onion", "¥1,300", "お好み焼き / Okonomiyaki (soba or udon)", "no", "no", "イカ天＝小麦衣。生地・麺・ソースも小麦。", "okonomiyaki_susumu"),
  I("⑥デラックス", "derakkusu", "Deluxe — pork, egg, cheese", "¥1,100", "お好み焼き / Okonomiyaki (soba or udon)", "no", "no", "生地・麺・ソースすべて小麦。", "okonomiyaki_deluxe"),
  I("⑦ねぎ玉", "negitama", "Negitama — pork, egg, spring onion, fried egg on top", "¥1,300", "お好み焼き / Okonomiyaki (soba or udon)", "no", "no", "生地・麺・ソースすべて小麦。", "okonomiyaki_negitama"),
  I("⑧やみつき", "yamitsuki", "'Addictive' — pork, egg, spring onion, cheese, salsa sauce", "¥1,500", "お好み焼き / Okonomiyaki (soba or udon)", "no", "no", "生地・麺・ソースすべて小麦。", "okonomiyaki_yamitsuki"),
  I("⑨肉玉", "nikutama", "Nikutama — the plain pork-and-egg standard", "", "お好み焼き / Okonomiyaki (soba or udon)", "no", "no", "2025/04の写真では価格が切れて読めず。2023/08の品書きでは¥850。生地・麺・ソースすべて小麦。", "okonomiyaki_nikutama"),
  I("⑩焼きそば", "yakisoba", "Yakisoba (or yaki-udon), noodles only, no pancake", "", "焼きそば / Yakisoba", "no", "no", "2025/04の写真では価格が切れて読めず。2023/08の品書きでは¥850。麺・ソース＝小麦。", "yakisoba"),
  I("トッピング：イカ", "toppingu: ika", "Topping — squid", "¥200", "トッピング / Toppings", "ask", "no", "イカ自体は小麦不使用だが鉄板とソースが共用。", "topping_ika"),
  I("トッピング：エビ", "toppingu: ebi", "Topping — shrimp", "¥200", "トッピング / Toppings", "ask", "no", "鉄板共用。", "topping_ebi"),
  I("トッピング：チーズ", "toppingu: chīzu", "Topping — cheese", "¥200", "トッピング / Toppings", "ask", "no", "鉄板共用。乳使用。", "topping_cheese"),
  I("トッピング：もち", "toppingu: mochi", "Topping — rice cake", "¥200", "トッピング / Toppings", "ask", "no", "もち＝米だが鉄板共用。2023年の品書きでは¥100。", "topping_mochi"),
  I("トッピング：大葉", "toppingu: ōba", "Topping — shiso leaf", "¥200", "トッピング / Toppings", "ask", "vegan", "2023年の品書きでは¥100。鉄板共用。", "topping_oba"),
  I("トッピング：ねぎ", "toppingu: negi", "Topping — spring onion", "¥200", "トッピング / Toppings", "ask", "vegan", "鉄板共用。", "topping_negi"),
  I("トッピング：キムチ", "toppingu: kimuchi", "Topping — kimchi", "¥200", "トッピング / Toppings", "no", "no", "市販キムチの魚醤・アミ・調味料に小麦の可能性。", "topping_kimchi"),
  I("トッピング：ガーリック", "toppingu: gārikku", "Topping — garlic chips", "¥200", "トッピング / Toppings", "ask", "vegan", "2023年の品書きでは¥100。", "topping_garlic"),
  I("トッピング：サルサソース", "toppingu: sarusa sōsu", "Topping — salsa sauce", "¥200", "トッピング / Toppings", "no", "ask", "ソース類は小麦の可能性。", "topping_salsa"),
  I("トッピング：たまご", "toppingu: tamago", "Topping — egg", "¥200", "トッピング / Toppings", "ask", "no", "2023年の品書きでは¥100。", "topping_tamago"),
  I("トッピング：チャンジャ", "toppingu: chanja", "Topping — chanja, spiced cod innards", "¥300", "トッピング / Toppings", "no", "no", "チャンジャの調味＝醤油・コチュジャンで小麦。", "topping_chanja")
 ]
}

d["hiro_yogi_hiroshima"] = {
 "verified": "authoritative",
 "confidence": "high",
 "sources": [
   "https://www.yogigreekyogurt.com/api/menu?category=all",
   "https://www.yogigreekyogurt.com/menu",
   "https://s.tabelog.com/hiroshima/A3401/A340113/34034638/dtlmenu/?photo=1",
   "https://tblg.k-img.com/restaurant/images/Rvw/376411/ffac61e97eb871109ae499e239830448.jpg"
 ],
 "price_note": "Item names and compositions from YOGI's own site API; prices read off the shop's own REGULAR MENU A-board photographed at the Hiroshima branch 2026-08. All items takeout-OK. Honey topping +¥100, flavour change +¥100. Drinks are ¥600 each, or ¥400 with a plate. Prices approximate — may change.",
 "last_checked": "2026-08-20",
 "items": [
  I("FRESH FRUIT PLATE", "furesshu furūtsu purēto", "Fresh fruit plate — Greek yogurt with orange, strawberry, kiwi, blueberry, banana, house granola", "¥1,300", "PLATE / グリークヨーグルトプレート", "no", "no", "グラノーラ＝オーツ麦・大麦麦芽が一般的で小麦混入も多い。グラノーラ抜きにできるか要確認。ヨーグルト＝乳。", "fresh_fruit_plate"),
  I("COMB HONEY PLATE", "komu hanī purēto", "Comb honey plate — Greek yogurt with orange, strawberry, kiwi, blueberry, banana, house granola and honeycomb", "¥1,650", "PLATE / グリークヨーグルトプレート", "no", "no", "グラノーラ＝麦類。ヨーグルト・蜂蜜でヴィーガン不可。", "comb_honey_plate"),
  I("CACAO ENERGY PLATE", "kakao enajī purēto", "Cacao energy plate — banana, nuts, coconut chunks, cacao nibs, chocolate granola on Greek yogurt", "¥1,300", "PLATE / グリークヨーグルトプレート", "no", "no", "チョコレートグラノーラ＝麦類。乳使用。", "cacao_energy_plate"),
  I("AVO-HAM PLATE", "abo-hamu purēto", "Avo-ham plate — ham, avocado, house granola, nuts on Greek yogurt", "¥1,550", "PLATE / グリークヨーグルトプレート", "no", "no", "グラノーラ＝麦類。ハム＝動物性。", "avo_ham_plate"),
  I("YOGI ACAI BOWL", "YOGI asaī bōru", "YOGI açaí bowl — organic açaí, banana, blueberry, house granola, cacao nibs, house almond butter", "¥1,650", "ACAI BOWL / アサイーボウル", "no", "ask", "グラノーラ＝麦類。乳製品は入らない構成だが、店の仕込み・共用器具を要確認。", "yogi_acai_bowl"),
  I("GREEK ACAI BOWL", "gurīku asaī bōru", "Greek açaí bowl — organic açaí, banana, strawberry, blueberry, house granola, pumpkin seed, Greek yogurt", "¥1,700", "ACAI BOWL / アサイーボウル", "no", "no", "グラノーラ＝麦類。ヨーグルト＝乳。", "greek_acai_bowl"),
  I("YOGURT ACAI BOWL", "yōguruto asaī bōru", "Yogurt açaí bowl — organic açaí, banana, strawberry, blueberry, house granola, yogurt, cacao nibs, pumpkin seed", "¥1,580", "ACAI BOWL / アサイーボウル", "no", "no", "グラノーラ＝麦類。ヨーグルト＝乳。", "yogurt_acai_bowl"),
  I("SEASONAL CAPRESE", "shīzunaru kapurēze", "Seasonal caprese — Greek yogurt, fruit of the season, prosciutto, mozzarella, baby leaf, olive oil, balsamic", "¥1,650", "SALAD & CAPRESE / サラダ", "ask", "no", "小麦の構成要素は見当たらないが、バルサミコ・生ハムの調味を要確認。乳・肉使用。", "seasonal_caprese"),
  I("BALANCE SALAD PLATE", "baransu sarada purēto", "Balance salad plate — Greek yogurt, smoked salmon, avocado, broccoli, boiled egg, baby leaf, black pepper, Caesar dressing", "¥1,580", "SALAD & CAPRESE / サラダ", "no", "no", "シーザードレッシングは小麦（クルトン粉・醸造調味料）を含むことが多い。要確認。", "balance_salad_plate"),
  I("ENERGY SALAD PLATE", "enajī sarada purēto", "Energy salad plate — Greek yogurt, granola, salad chicken, boiled shrimp, broccoli, nuts, baby leaf, black pepper, Cobb dressing", "¥1,600", "SALAD & CAPRESE / サラダ", "no", "no", "看板ではグラノーラ、公式サイトの説明では雑穀米。どちらも麦類の可能性（押麦・もち麦・オーツ麦）。", "energy_salad_plate"),
  I("コーヒー (ICE/HOT)", "kōhī", "Coffee, iced or hot", "¥600", "DRINK / ドリンク", "", "vegan", "ALL ¥600（税込）、プレートとのセットは¥400。", "coffee"),
  I("オーガニックティー (ICE/HOT)", "ōganikku tī", "Organic tea, iced or hot", "¥600", "DRINK / ドリンク", "ask", "vegan", "茶葉の種類次第（麦茶なら大麦）。要確認。", "organic_tea"),
  I("カフェラテ (ICE/HOT)", "kafe rate", "Cafe latte, iced or hot", "¥600", "DRINK / ドリンク", "", "no", "乳使用。", "cafe_latte"),
  I("キャラメルラテ (ICE/HOT)", "kyarameru rate", "Caramel latte, iced or hot", "¥600", "DRINK / ドリンク", "ask", "no", "キャラメルシロップの原材料を要確認。乳使用。", "caramel_latte"),
  I("バニララテ (ICE/HOT)", "banira rate", "Vanilla latte, iced or hot", "¥600", "DRINK / ドリンク", "ask", "no", "乳使用。", "vanilla_latte"),
  I("ロイヤルミルクティー (ICE/HOT)", "roiyaru miruku tī", "Royal milk tea, iced or hot", "¥600", "DRINK / ドリンク", "", "no", "乳使用。", "royal_milk_tea"),
  I("抹茶ラテ (ICE/HOT)", "matcha rate", "Matcha latte, iced or hot", "¥600", "DRINK / ドリンク", "", "no", "乳使用。", "matcha_latte"),
  I("ほうじ茶ラテ (ICE/HOT)", "hōjicha rate", "Hojicha latte, iced or hot", "¥600", "DRINK / ドリンク", "", "no", "乳使用。", "hojicha_latte"),
  I("ホエイレモネード (ICE/HOT)", "hoei remonēdo", "Whey lemonade, iced or hot", "¥600", "DRINK / ドリンク", "", "no", "ホエイ＝乳。", "whey_lemonade"),
  I("はちみつトッピング", "hachimitsu toppingu", "Honey topping", "+¥100", "TOPPING & CUSTOM", "", "no", "蜂蜜。", "honey_topping"),
  I("フレーバー変更", "furēbā henkō", "Flavour change", "+¥100", "TOPPING & CUSTOM", "", "", "", "flavour_change")
 ]
}

json.dump(d, open(OUT, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print("saved", len(d), "shops,", sum(len(v["items"]) for v in d.values()), "items")
