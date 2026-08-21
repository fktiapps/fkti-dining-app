# -*- coding: utf-8 -*-
# temporary builder for shard 28 verdicts
import json, os, sys

RECS = []

RECS.append({
 "id": "tokyo3__422",
 "name": "赤坂璃宮 赤坂本店",
 "status": "confirmed",
 "lat": 35.673097, "lng": 139.735797, "loc_precise": True,
 "address_ja": "〒107-0052 東京都港区赤坂5-3-1 赤坂Bizタワー atrium 2F",
 "enrich_confidence": "high",
 "cuisine": "Refined Cantonese (広東名菜) on the atrium level of Akasaka Biz Tower — roast meats, dim sum, shark fin and seasonal set courses; Tabelog bands dinner at ¥10,000–14,999, with cheaper weekday lunch courses",
 "cuisine_type": "chinese",
 "neighborhood": "Akasaka 5-chōme, Minato-ku — directly connected to Akasaka Station (Tokyo Metro Chiyoda line, exit B3, 1 min); 5 min from Tameike-sannō (Ginza / Namboku lines, exit 10), 6 min from Akasaka-mitsuke (Ginza / Marunouchi lines, exit 10)",
 "website": "https://rikyu.jp/akasaka/menu",
 "menu_url": "https://rikyu.jp/akasaka/menu",
 "hours_raw": "11:30 - 15:00（L.O. 14:00）／17:30 - 22:00（L.O. 21:00）　全曜日同じ　定休日 不定休（年始、臨時休業あり）",
 "hours_status": "irregular",
 "gf_confidence": "ask",
 "gf_detail": "No gluten-free claim of any kind on rikyu.jp or on the Tabelog listing. This is a Cantonese kitchen: the seasoning base is wheat soy sauce and oyster sauce, the house signatures include deep-fried courses in wheat batter (アジのスパイス揚げ, 穴子のスパイス揚げ both appear in published course write-ups) and steamed dim sum in wheat wrappers, and 大根もち is commonly bound with wheat starch. Booking runs through TableCheck and the room serves pre-booked courses, so a request can be raised days ahead — but nothing published shows a wheat-free line, and a celiac should treat the menu as wheat-contaminated until the kitchen says otherwise in person.",
 "vegan_status": "ask",
 "vegan_detail": "The light record's 「植物性料理対応」 is not supported by anything the restaurant publishes. There is a dedicated vegetable section on the menu, but its own heading is 「豆腐・野菜・鶏卵メニュー」 — tofu, vegetables AND hen egg — and Cantonese vegetable cookery here rests on oyster sauce and chicken stock. No vegan or vegetarian course is advertised anywhere on the site. Ask at booking; do not arrive assuming.",
 "chef_bio": {
  "chef_name": "譚彦彬 (Tan Yenbin), founder",
  "roles": ["オーナーシェフ / founder (died 2022)"],
  "origin": "A Cantonese specialist with a career of more than sixty years, who built 赤坂璃宮 in Akasaka and later opened the Ginza branch",
  "background": "赤坂璃宮 was built around 譚彦彬, one of the best-known Cantonese chefs in Japan; the restaurant's own Akasaka page is still headed 『赤坂璃宮 譚 彦彬の味』 and the site describes a cook 「料理人人生60年を超えてもなお、進化し続ける」. He died on 28 September 2022 at the age of 79 — reported by food writer マッキー牧元, who had eaten with him for years and describes him as a teacher of ingredients and fundamentals, at ease with snake, mantis shrimp, pigeon, goose and dried seafood, with an autobiography about to appear when he died. The house philosophy stated on rikyu.jp is 医食同源 and 「スパイスや油をさりげなく控えて、素材の味を活かす」 — hold back the spice and the oil, let the ingredient speak. The restaurant trades on under his name; the current 総料理長 is not named anywhere on the public site and has deliberately NOT been invented here.",
  "philosophy": "医食同源 — food and medicine from one source; restraint with spice and oil so the ingredient carries the dish.",
  "specialty": "Cantonese roast meats (焼味), dim sum, shark fin and abalone, and the house kiln-roast char-siu fried rice.",
  "anecdotes": [],
  "japanese_sources_summary": "rikyu.jp gives the 東京都港区赤坂5-3-1 赤坂Bizタワー atrium 2F address, the 03-5570-9323 phone, the 医食同源 philosophy and the 『譚 彦彬の味』 framing, and lists exactly two branches (赤坂本店, 銀座店). Tabelog 13005028 independently gives coordinates 35.673097/139.735797, the same address and phone, the ¥10,000–14,999 band, the daily 11:30–15:00 / 17:30–22:00 hours and Chiyoda-line exit B3 access. mackeymakimoto.jp reports the founder's death on 2022-09-28 at 79.",
  "confidence": "high",
  "sources": [
   "https://rikyu.jp/",
   "https://rikyu.jp/akasaka/menu",
   "https://tabelog.com/tokyo/A1308/A130801/13005028/",
   "https://mackeymakimoto.jp/oishii-diary/%E8%AD%9A%E3%81%95%E3%82%93%E3%81%8C%E9%80%9D%E3%81%8B%E3%82%8C%E3%81%9F%E3%80%82/"
  ]
 },
 "safety": {
  "gf_cross_contamination": ["Wheat soy sauce and oyster sauce are the base seasonings across the whole menu.", "Deep-frying in wheat batter and steaming wheat-wrapper dim sum happen in the same kitchen."],
  "soy_sauce_wheat": ["Assume ordinary 濃口醤油. No gluten-free tamari is mentioned on the site or the listing."],
  "vegan_cross_contact": ["The vegetable section is headed 豆腐・野菜・鶏卵 — egg sits in the same section.", "Chicken stock and oyster sauce are standard in Cantonese vegetable dishes."],
  "staff_allergy_handling": ["Nothing published. Reservations go through TableCheck, which carries a free-text request field. A Pocket Concierge listing for the restaurant exists but returned HTTP 403 to an automated fetch and could not be read."],
  "positives": ["Course service booked in advance, so a dietary conversation can happen days before arrival.", "Long-established formal room — the kind of kitchen that can answer a specific ingredient question."]
 },
 "cultural_comfort": {
  "level": "High",
  "note": "A formal, quiet Cantonese dining room on the atrium level of Akasaka Biz Tower, directly connected to Akasaka Station — no queue, step-free, easy to find in an office tower. Reservation-led, so a dietary request can be made before you arrive rather than negotiated at the table."
 },
 "sources": [
  "https://rikyu.jp/",
  "https://rikyu.jp/akasaka/menu",
  "https://tabelog.com/tokyo/A1308/A130801/13005028/",
  "https://mackeymakimoto.jp/oishii-diary/%E8%AD%9A%E3%81%95%E3%82%93%E3%81%8C%E9%80%9D%E3%81%8B%E3%82%8C%E3%81%9F%E3%80%82/"
 ],
 "enrich_note": "CONFIRMED. 赤坂璃宮 赤坂本店 exists at 港区赤坂5-3-1 赤坂Bizタワー atrium 2F — verified independently on the restaurant's own site (rikyu.jp) and on Tabelog 13005028, which agree on address and phone. Pin moved from the Akasaka neighbourhood centroid to the Tabelog coordinates; loc_precise:true. The light record's name was correct — the full form is 赤坂璃宮 赤坂本店 (a Ginza branch also exists, Tabelog 13013346). The light record's 「植物性料理対応」 could not be substantiated and has been reduced to 'ask'. Founder-chef 譚彦彬 died 2022-09-28; the restaurant continues."
})

RECS.append({
 "id": "tokyo3__423",
 "name": None,
 "status": "not_found",
 "lat": 35.672, "lng": 139.736, "loc_precise": False,
 "address_ja": None,
 "enrich_confidence": "low",
 "cuisine": "COULD NOT VERIFY — no sushi counter named 鮨 ど真 could be found in Akasaka, in Tokyo, or anywhere in Japan",
 "cuisine_type": "sushi",
 "neighborhood": "Unverified. The light record says Akasaka / Akasaka Station, Minato-ku.",
 "website": None, "menu_url": None,
 "hours_raw": "", "hours_status": "irregular",
 "gf_confidence": "ask",
 "gf_detail": "Not assessed — the business could not be found. For whoever re-sources this: at a Tokyo sushi counter the nikiri brushed onto the neta is wheat soy sauce, and so is the dipping soy, so sushi is never a safe celiac default unless the shop names a gluten-free tamari.",
 "vegan_status": "no",
 "vegan_detail": "Not assessed. An Edomae sushi counter is fish by definition, and the shari vinegar is frequently cut with dashi.",
 "chef_bio": {
  "chef_name": None, "roles": [], "origin": "",
  "background": "Could not be established. Three independent legs all ran to completion and all came back empty. (1) Tabelog nationwide keyword search for 「鮨 ど真」 returned HTTP 200 with exactly one restaurant, 寿司一真 in Okayama; a second Tabelog search for the bare string 「ど真」 returned HTTP 200 with only ど真ん中 / どまん中 / どまんなか izakaya and unrelated names, none in Akasaka. (2) Yahoo Japan returned HTTP 200 for three query forms — 「鮨 ど真 赤坂」, the quoted phrase 「\"鮨ど真\"」 and 「\"ど真\" 寿司 東京」 — and each time the hits were other businesses (魚しん 赤坂見附, 魚真 乃木坂店, すし処魚しん, 銀座すし処真, 鮨アカデミー), never a 鮨 ど真. (3) Gnavi free-word search for 「鮨 ど真」 returned HTTP 200 with two shops, gnavi a047102 (～海鮮・炭火焼～ 上野 二代目 圭, an Ueno izakaya) and gnavi b833000 (鮨善 大善ビル店, Shinagawa) — neither a match. No 429, no 403 and no timeout occurred on any leg. On this evidence the name looks like a garbling generated during the breadth sweep rather than a real shop.",
  "philosophy": "", "specialty": "", "anecdotes": [],
  "japanese_sources_summary": "Tabelog nationwide (two query forms), Yahoo Japan (three query forms) and Gnavi all returned live result pages, none of which contains a business called 鮨 ど真.",
  "confidence": "low", "sources": []
 },
 "safety": {"gf_cross_contamination": [], "soy_sauce_wheat": [], "vegan_cross_contact": [], "staff_allergy_handling": [], "positives": []},
 "cultural_comfort": {"level": "Unknown", "note": "The business could not be found, so nothing can honestly be said. Recommend deletion unless a source for the original name can be produced."},
 "sources": [],
 "enrich_note": "NOT FOUND. Every leg ran and returned HTTP 200. Tabelog nationwide keyword search: 「鮨 ど真」 → only 寿司一真 (Okayama); 「ど真」 → only ど真ん中 / どまん中 names, none in Akasaka. Yahoo Japan in three query forms (「鮨 ど真 赤坂」, \"鮨ど真\", \"ど真\" 寿司 東京) → 魚しん 赤坂見附, 魚真 乃木坂店, 銀座すし処真, 鮨アカデミー, never this name. Gnavi free-word search → two hits, both unrelated (上野 二代目 圭; 鮨善 大善ビル店). Coordinates unchanged, loc_precise:false. Candidate for deletion."
})

RECS.append({
 "id": "tokyo3__424",
 "name": "Homemade Ramen 青麦",
 "status": "mislocated",
 "lat": 35.672, "lng": 139.736, "loc_precise": False,
 "address_ja": "〒143-0016 東京都大田区大森北2-4-8 宏和ハイツ 1F — Ōmori, NOT Akasaka. This is the only ramen shop called 青麦 in Tokyo.",
 "enrich_confidence": "low",
 "cuisine": "Ōta-ku ramen shop with a heavy following (Tabelog 3.72 from 1,117 reviews), ¥1,000–1,999 a bowl — but it stands in Ōmori-kita, about 10 km from the Akasaka pin this record carries",
 "cuisine_type": "ramen",
 "neighborhood": "COULD NOT VERIFY any Akasaka location. The business of this name is at Ōmori-kita 2-4-8, Ōta-ku, a few minutes from Ōmori Station (JR Keihin-Tōhoku line); Tabelog files it under tokyo/A1315/A131502 (大森).",
 "website": None, "menu_url": None,
 "hours_raw": "［月・火・水ほか］11:00 - 14:30 ／ 18:00 - 21:00　木曜定休 — these are the Ōmori shop's hours, not an Akasaka shop's.",
 "hours_status": "irregular",
 "gf_confidence": "no",
 "gf_detail": "Ramen: wheat noodles, and the kaeshi is wheat soy sauce. Not assessed further because the record's location is wrong — read the note before using anything here.",
 "vegan_status": "no",
 "vegan_detail": "Not assessed. Nothing published suggests a plant-based bowl, and a ramen bar's stock is animal by default.",
 "chef_bio": {
  "chef_name": None, "roles": [], "origin": "Ōmori-kita, Ōta-ku",
  "background": "Not researched in depth, because the record is mislocated. What is established: Tabelog's nationwide keyword search for 「青麦」 returns exactly one Tokyo ramen shop of that name, Homemade Ramen 青麦, and its detail page (13252059) puts it at 東京都大田区大森北2-4-8 宏和ハイツ 1F at 35.584762 / 139.732180, ¥1,000–1,999, rated 3.72 from 1,117 reviews, closed Thursdays. The same search returns 青麦 in Kanagawa (14094805), 韓国家庭料理 青麦 in Miyagi, あお麦 in Tochigi and あおむぎ in Fukuoka — nothing at all in Minato-ku. A Gnavi free-word search for 「青麦」 returned six shops, none in Akasaka. There is no 青麦 赤坂.",
  "philosophy": "", "specialty": "", "anecdotes": [],
  "japanese_sources_summary": "Tabelog nationwide keyword search plus the Tabelog detail page for 13252059, and a Gnavi free-word search — all agree the only Tokyo 青麦 is in Ōmori, Ōta-ku.",
  "confidence": "low",
  "sources": ["https://tabelog.com/tokyo/A1315/A131502/13252059/"]
 },
 "safety": {"gf_cross_contamination": [], "soy_sauce_wheat": [], "vegan_cross_contact": [], "staff_allergy_handling": [], "positives": []},
 "cultural_comfort": {
  "level": "N/A — record is mislocated",
  "note": "Do not send anyone to Akasaka for this. The only ramen shop named 青麦 in Tokyo is Homemade Ramen 青麦 in Ōmori-kita, Ōta-ku, roughly 10 km south of this pin. If the dataset wants to keep the business, the pin must move to 35.584762 / 139.732180 (東京都大田区大森北2-4-8 宏和ハイツ 1F) and the name must become Homemade Ramen 青麦; otherwise delete the record. Coordinates have been left at the original Akasaka centroid and loc_precise is false, per the brief."
 },
 "sources": ["https://tabelog.com/tokyo/A1315/A131502/13252059/"],
 "enrich_note": "MISLOCATED RECORD — the light record reads 「青麦 赤坂」 pinned at Akasaka Station, but no ramen shop named 青麦 exists in Akasaka or anywhere in Minato-ku. Tabelog's nationwide keyword search for 青麦 returns exactly one Tokyo shop, Homemade Ramen 青麦, whose detail page (13252059) places it at 東京都大田区大森北2-4-8 宏和ハイツ 1F, 35.584762 / 139.732180 — about 10 km from this pin. Gnavi free-word search agrees there is no Akasaka 青麦. Recommend relocating the record to the Ōmori coordinates under the corrected name, or deleting it. Coordinates left unchanged and loc_precise:false."
})

RECS.append({
 "id": "tokyo3__425",
 "name": "はなの舞 赤坂見附店",
 "status": "closed_permanently",
 "closed_since": "date not published — Tabelog carries the shop under the 【閉店】 banner with the text 「このお店は現在閉店しております。」 but gives no closing date, and Chimney's own store finder returned HTTP 403 to an automated fetch, so no date has been invented here",
 "lat": 35.672, "lng": 139.736, "loc_precise": False,
 "address_ja": "〒107-0052 東京都港区赤坂3-9-4 赤坂扇やビル B1F — the address of the closed branch",
 "enrich_confidence": "medium",
 "cuisine": "Basement branch of はなの舞, the 海鮮居酒屋 chain run by チムニー株式会社 — cheap seafood izakaya plates and all-you-can-drink courses. It is shut.",
 "cuisine_type": "izakaya",
 "neighborhood": "Was at Akasaka 3-chōme, Minato-ku — 1 min from Akasaka-mitsuke (Tokyo Metro Ginza / Marunouchi lines), 2 min from Nagatachō (Hanzōmon line)",
 "website": "https://www.chimney.co.jp/restaurant/hana/",
 "menu_url": None,
 "hours_raw": "［月～金］16:00～翌0:30／［土・日・祝］16:00～24:00　無休 — the hours it kept while trading",
 "hours_status": "regular",
 "gf_confidence": "no",
 "gf_detail": "Chain izakaya. Fried karaage and tempura share the fryer, the dressings and dipping sauces are wheat soy sauce, and there is no gluten-free line anywhere in the はなの舞 format. Moot in any case — this branch is closed.",
 "vegan_status": "no",
 "vegan_detail": "A 海鮮居酒屋 built on fish, bonito dashi and mayonnaise. The light record's 'vegan: limited' was inferred from the words 「野菜料理豊富」 and is not supported. Moot — the branch is closed.",
 "chef_bio": {
  "chef_name": None,
  "roles": [],
  "origin": "Corporate chain branch — チムニー株式会社, Sumida-ku, Tokyo",
  "background": "No individual chef: はなの舞 is チムニー's flagship 海鮮居酒屋 format, run to a central spec across hundreds of branches. The Akasaka-mitsuke branch is one of the many the group shed — Chimney announced the closure of 72 stores and 100 redundancies in August 2020, and trade press has since covered the format's decline as the '2軒目需要' (second-bar trade) evaporated. This record should carry no chef bio.",
  "philosophy": "",
  "specialty": "",
  "anecdotes": [],
  "japanese_sources_summary": "Tabelog 13052950 is titled 【閉店】はなの舞 赤坂見附店 and states 「このお店は現在閉店しております。」, with the address 東京都港区赤坂3-9-4 赤坂扇やビル B1F, coordinates 35.677072/139.736309 and the former 16:00-late hours. Tabelog's nationwide keyword search for 「はなの舞 赤坂」 returns twenty branches (Ikebukuro, Kita-Senju, Shinjuku, Kanda, Shibuya Namikibashi, Kayabachō, Nerima-Takanodai and so on) and no open Akasaka one; a search for 「はなの舞 赤坂見附」 returns nothing at all; Gnavi's free-word search for 「はなの舞 赤坂」 returns zero shops while the control query 「はなの舞 池袋」 returns one, so the Gnavi negative is real and not a broken query.",
  "confidence": "medium",
  "sources": ["https://tabelog.com/tokyo/A1308/A130801/13052950/", "https://www.chimney.co.jp/restaurant/hana/"]
 },
 "safety": {"gf_cross_contamination": [], "soy_sauce_wheat": [], "vegan_cross_contact": [], "staff_allergy_handling": [], "positives": []},
 "cultural_comfort": {"level": "N/A — closed", "note": "The branch is shut. Nothing to visit. If the app keeps chain records at all, note that the nearest surviving はなの舞 branches are Shibuya Namikibashi and Kanda Nishiguchi, not Akasaka."},
 "sources": ["https://tabelog.com/tokyo/A1308/A130801/13052950/", "https://www.chimney.co.jp/restaurant/hana/"],
 "enrich_note": "CLOSED PERMANENTLY. The only はなの舞 that ever stood in Akasaka is the 赤坂見附店 at 港区赤坂3-9-4 赤坂扇やビル B1F, and Tabelog 13052950 now carries it as 【閉店】 with 「このお店は現在閉店しております。」 in the page body and 【閉店】 in the <title>. A Tabelog nationwide keyword search for 「はなの舞 赤坂」 lists twenty live branches, none of them in Akasaka; 「はなの舞 赤坂見附」 returns nothing; Gnavi free-word returns zero for 「はなの舞 赤坂」 while the control query 「はなの舞 池袋」 returns a shop, so that negative is genuine. Chimney's own store finder (chimney.co.jp/shop/) answered HTTP 403 to an automated request, so the closing DATE could not be established and none has been invented. Coordinates left at the neighbourhood centroid and loc_precise:false; the branch address is recorded in address_ja for reference. A permanently closed shop should be hidden from the app."
})

RECS.append({
 "id": "tokyo3__432",
 "name": None,
 "status": "not_found",
 "lat": 35.672, "lng": 139.736, "loc_precise": False,
 "address_ja": None,
 "enrich_confidence": "low",
 "cuisine": "COULD NOT VERIFY — there is no ramen alley called 赤坂ラーメン横丁 in Tokyo",
 "cuisine_type": "ramen",
 "neighborhood": "Unverified. The light record says Akasaka / Akasaka Station, Minato-ku.",
 "website": None, "menu_url": None,
 "hours_raw": "", "hours_status": "irregular",
 "gf_confidence": "no",
 "gf_detail": "Not assessed — the venue could not be found. Any ramen alley would be wheat noodles in wheat-soy kaeshi in shared water anyway; a ramen 横丁 is close to the worst possible room for a celiac.",
 "vegan_status": "no",
 "vegan_detail": "Not assessed. Ramen stock is animal by default.",
 "chef_bio": {
  "chef_name": None, "roles": [], "origin": "",
  "background": "Could not be established, and the balance of evidence is that no such place exists. Tabelog's nationwide keyword search for 「赤坂ラーメン横丁」 returned HTTP 200 with ラーメン横丁 in Chiba, Sapporo (Susukino), Tochigi and Ōgaki (Gifu, at 東赤坂 station — which is very likely where the 赤坂 in this record came from) plus 渋谷らぁめん横丁, and nothing in Minato-ku. Yahoo Japan for 「赤坂 ラーメン横丁」 returned HTTP 200 and flagged 横丁 in its own results metadata as a missing term on the organic hits; its map module, asked for ラーメン横丁 near 東京都港区赤坂, returned eighteen shops of which the nearest relevant ones were ラーメンステーション 新橋横丁 (1.9 km), 鮎ラーメン+ 虎ノ門横丁店 (1.3 km, inside 虎ノ門横丁) and four shops inside 東京ラーメン横丁 at Yaesu / Tokyo Station (3.2 km): ラーメン豚山, 長岡食堂, 風雲児 and 横浜家系 町田商店. None of those is in Akasaka and none is called 赤坂ラーメン横丁. The name looks like a sweep-generated blend of 東京ラーメン横丁 or 虎ノ門横丁 with the Akasaka area label.",
  "philosophy": "", "specialty": "", "anecdotes": [],
  "japanese_sources_summary": "Tabelog nationwide keyword search and Yahoo Japan web + map both returned live results; neither contains a 赤坂ラーメン横丁.",
  "confidence": "low", "sources": []
 },
 "safety": {"gf_cross_contamination": [], "soy_sauce_wheat": [], "vegan_cross_contact": [], "staff_allergy_handling": [], "positives": []},
 "cultural_comfort": {"level": "Unknown", "note": "The venue could not be found. Recommend deletion. If the intent was a real ramen alley, the two that exist within a few kilometres are 虎ノ門横丁 (Toranomon Hills Business Tower 3F) and 東京ラーメン横丁 (Yaesu, under Tokyo Station) — both should be sourced as their own records, not as an Akasaka one."},
 "sources": [],
 "enrich_note": "NOT FOUND. Both legs ran and returned HTTP 200. Tabelog nationwide keyword search for 「赤坂ラーメン横丁」 → ラーメン横丁 in Chiba, Susukino, Tochigi and 東赤坂/Ōgaki (Gifu), plus 渋谷らぁめん横丁; nothing in Minato-ku. Yahoo Japan for 「赤坂 ラーメン横丁」 → its organic results dropped 横丁 as a missing term, and its map module for ラーメン横丁 near 港区赤坂 returned eighteen shops whose nearest matches are 新橋横丁 (1.9 km), 虎ノ門横丁 (1.3 km) and 東京ラーメン横丁 at Yaesu (3.2 km). No venue called 赤坂ラーメン横丁 exists. Coordinates unchanged, loc_precise:false. Candidate for deletion."
})

RECS.append({
 "id": "tokyo3__434",
 "name": None,
 "status": "unresolved",
 "lat": 35.6595, "lng": 139.7005, "loc_precise": False,
 "address_ja": None,
 "enrich_confidence": "low",
 "cuisine": "COULD NOT VERIFY — no ramen shop called マロ屋 exists in Japan; see the note for the one near-namesake found",
 "cuisine_type": "ramen",
 "neighborhood": "Unverified. The light record says Ikejiri, Shibuya-ku / Ikejiri-Ōhashi Station (Tōkyū Den-en-toshi line), but the coordinates it carries (35.6595 / 139.7005) actually sit in Maruyamachō–Dōgenzaka, near Shinsen Station, about 1.6 km from Ikejiri-Ōhashi.",
 "website": None, "menu_url": None,
 "hours_raw": "", "hours_status": "irregular",
 "gf_confidence": "no",
 "gf_detail": "Not assessed — the business could not be found. Tonkotsu ramen is wheat noodles in a shared boiling well with wheat-soy kaeshi; no Tokyo tonkotsu shop should be marked GF-safe without direct evidence.",
 "vegan_status": "no",
 "vegan_detail": "Not assessed. A 豚骨 shop is pork-bone stock by definition.",
 "chef_bio": {
  "chef_name": None, "roles": [], "origin": "",
  "background": "Could not be established. Every leg ran and returned HTTP 200. Tabelog nationwide keyword search for 「マロ屋」 returned only マロヤ (Tokyo, Ōta-ku area A1317), まろや (Hyōgo), 麻呂舎 (Yamagata), まろやか (Yamaguchi) and kitchen maroyaka waltz (Kanagawa) — no ramen shop of the name; a second Tabelog search for 「らーめんマロ」 returned only らーめん まる (Kanagawa) and らーめん2国 branches. A Yahoo Japan search for the quoted string 「\"マロ屋\" ラーメン」 returned HTTP 200 with no restaurant at all in the results (hobby blogs and doujin circle lists). Tabelog's own 池尻大橋駅 ramen listing — the twenty shops nearest the station the light record names — contains 酒と麺 タイノタイ, 万豚記, 和利道, 麺酒論嚆矢, ひっつきもっつき, 宗楽, 八雲, 朝日屋, 中華そば 千乃鶏, カミノ, 横浜家系 侍, タンメン亭, らーめん たつみ屋, 誠屋, 町田商店, 龍の子, 佐野らーめん 永純, 天下一品 and two others, and no マロ屋. The one near-namesake in the right patch of ground is 麺処まろ, at 渋谷区道玄坂2-20-26 エクシール道玄坂 (35.659269 / 139.696815, 365 m from Shinsen Station, Tabelog 13306431) — a semi-basement shop hidden behind 百軒店 that relocated from Komazawa-daigaku, run by a working actor, serving 貝出汁 (shellfish-dashi) shio and shōyu ramen, Thu–Sun lunch only. That is 貝出汁, not 豚骨, and the name is まろ, not マロ屋, so it is offered as a lead and NOT as an identification.",
  "philosophy": "", "specialty": "", "anecdotes": [],
  "japanese_sources_summary": "Tabelog nationwide keyword search (two query forms), Tabelog's Ikejiri-Ōhashi ramen station listing, Tabelog's Shinsen-station ramen listing (forty shops over two pages, no マロ屋 and no まろ屋), and a quoted Yahoo Japan search — all live, all negative for マロ屋. Ramen Database (ramendb.supleks.jp) and HAMONI, which both hold pages for 麺処まろ, returned HTTP 403 to automated fetches and could not be read; that is a refusal, not a negative.",
  "confidence": "low",
  "sources": ["https://tabelog.com/tokyo/A1303/A130301/13306431/"]
 },
 "safety": {"gf_cross_contamination": [], "soy_sauce_wheat": [], "vegan_cross_contact": [], "staff_allergy_handling": [], "positives": []},
 "cultural_comfort": {"level": "Unknown", "note": "The named business could not be found, so nothing can honestly be said about it. A human should decide whether 麺処まろ (道玄坂2-20-26, Tabelog 13306431) is what this record was reaching for — if it is, it needs its own sourcing pass, because the soup base and the station both differ from what the light record claims."},
 "sources": ["https://tabelog.com/tokyo/A1303/A130301/13306431/"],
 "enrich_note": "UNRESOLVED. No ramen shop called マロ屋 could be found anywhere in Japan. Tabelog nationwide (「マロ屋」 → マロヤ/まろや/麻呂舎/まろやか only; 「らーめんマロ」 → らーめん まる and らーめん2国 only), Yahoo Japan on the quoted string 「\"マロ屋\" ラーメン」 (no restaurant in the results), and Tabelog's own 池尻大橋駅 and 神泉駅 ramen station listings (60 shops between them) all ran to completion and all came back negative. Nearest candidate: 麺処まろ, 渋谷区道玄坂2-20-26 エクシール道玄坂, 35.659269/139.696815, 365 m from Shinsen — roughly 340 m from the pin this record carries — but it serves 貝出汁 shio/shōyu, not the 豚骨 the light record claims, and its name is まろ, not マロ屋, so it is NOT being asserted as the same business. Ramen Database and HAMONI both 403'd on their 麺処まろ pages, so that corroboration leg is a refusal rather than a negative. Coordinates unchanged, loc_precise:false. Needs a human call: delete, or re-source as 麺処まろ."
})


def main():
    out = sys.argv[1]
    json.dump(RECS, open(out, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print("wrote", len(RECS), "->", out)

if __name__ == "__main__":
    main()
