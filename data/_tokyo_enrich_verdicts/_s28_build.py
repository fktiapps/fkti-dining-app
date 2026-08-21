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


def main():
    out = sys.argv[1]
    json.dump(RECS, open(out, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print("wrote", len(RECS), "->", out)

if __name__ == "__main__":
    main()
