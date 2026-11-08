# Retail audit: take-home food shops drafted in kyoto-missed (osw9, 2026-11-08)

Scope: visible Kyoto records whose id is in a 'done' line of scripts/sweep/kyoto-missed/queue-status.jsonl (1888 done records), filtered by type and text for shops that sell food to take home (wagashi, bakeries, pâtisseries, pickles, market stalls), then read one by one. No data was changed.

Ruling (Greg, 11-07): "Include particularly historic family owned shops, as well as GF and vegan options."
- **a**: particularly historic AND family-owned, with a sourced founding date and succession
- **b**: sourced GF or vegan options
- **c**: neither. "historic, no succession source" marks old shops whose family succession is not in our sources.

Eat-in: "none" means pure take-home. Anything else is described; rows with real seats or an eat-in counter are not pure retail.

Source: the Tabelog page given, plus the source named in the evidence (all already in each record's chef_bio.sources).

| Record | Name | Batch | Verdict | Eat-in | Evidence | Source |
|---|---|---|---|---|---|---|
| kyoto_kamesuehiro | 亀末廣 (Kamesuehiro) | osw13-20 | a | none | Founded 1804, "said to be run by the seventh generation" (2026 reviews). Historic + family succession, both resting on reviews. | https://tabelog.com/en/kyoto/A2601/A260202/26000641/ |
| kyoto_kame_hironaga | 亀廣永 (Kame Hironaga) | osw13-30 | a | none | Founder went independent from 亀末廣 in early Showa; second generation 西井新太郎; run by a couple in their eighties with the third-generation 孝明 (Waraku, Sept 2023). Family succession sourced; founding about 90 years ago. | https://tabelog.com/en/kyoto/A2601/A260202/26004744/ |
| kyoto_hakushindo_yatsuhashi | 白心堂 (Hakushindo) | osw2-70 | a | none | Founded January 1926 by 野崎梅治郎; presidents since 野崎一雄, 野崎さだ子, 野崎益宏 (company history, official site). | https://tabelog.com/en/kyoto/A2601/A260201/26029485/ |
| kyoto_kofukudo_matsubara | 幸福堂 (Kofukudo) | osw9-68 | a | a spot at the entrance with free tea (2025–26 reviews); no seating | Founded Meiji 1 (1868) by 花川幸二郎; fifth generation (own site). | https://tabelog.com/en/kyoto/A2601/A260201/26007065/ |
| kyoto_kyoshumi_hishiiwa | 京趣味 菱岩 (Kyoshumi Hishiiwa) | osw13-11 | a | none (bento to collect) | Founded 1829 (Tenpō 1); the third-generation master 松之助 created the 半月弁当 (official site). A caterer: no meals on site. | https://tabelog.com/en/kyoto/A2601/A260301/26000950/ |
| kyoto_katapanya_higashikujo | カタパン屋 (Kata Pan Ya) | osw13-70 | a (weak) | 3 chairs for waiting only | "Said to have been around since the Edo period" (one Jan 2026 review); run by a couple and their daughter (Jan 2026 reviews). The founding is hearsay. | https://tabelog.com/en/kyoto/A2601/A260101/26033844/ |
| kyoto_marutsune_kamaboko_nishiki | 丸常蒲鉾 (Marutsune Kamaboko) | osw2-69 | a (weak) | eat-on-the-spot counter for fried skewers (2017, Nov 2025 reviews) | Founded 1947; keeps the previous generation's fish blend (Nishiki shop guide quoted in a Jan 2025 review). Succession only implied. | https://tabelog.com/en/kyoto/A2601/A260202/26009061/ |
| kyoto_watahan_nishiki | 渡半 (Watahan) | osw9-57 | a | yes: 5 seats for sashimi and oysters (Tabelog) | Founded 1897 by Watanabe Hanshichi; fourth generation (Dec 2025 review). Not pure retail. | https://tabelog.com/en/kyoto/A2601/A260201/26017769/ |
| kyoto_kansendo_gion | 甘泉堂 (Kansen Do) | osw1-2 | b (also historic) | none | Vegan: the mizu yokan label lists adzuki, sugar and agar (Sept 2026 review); vegan_status limited. Founded 1884 per reviews; no succession source. | https://tabelog.com/en/kyoto/A2601/A260301/26001392/ |
| kyoto_yamari_shoten | 山利商店 (Yamari Shoten) | osw8-78 | b | none | Vegan options: white miso is rice miso, soybeans plus koji; egg only in the yuzu miso (2021, 2023 reviews). No founding date. | https://tabelog.com/en/kyoto/A2601/A260301/26023555/ |
| kyoto_conto_oike | CONTO | osw6-39 | b | standing room for 2–3 and a bench outside | Vegan ice creams; homemade gluten-free waffles and rice-flour cones (2026 reviews). Opened April 2025. | https://tabelog.com/en/kyoto/A2601/A260202/26042890/ |
| kyoto_7t_plus_tea | 7T+ (Seven Tea Plus) | osw1-58 | b | none: tea leaves and takeaway drinks (2025–26 reviews) | Vegan: lattes made only with oat milk, agave if wanted; straight teas plant-based (2026 reviews). | https://tabelog.com/en/kyoto/A2601/A260201/26036306/ |
| kyoto_niku_no_ohashitei | 肉の大橋亭 (Niku no Ohashi Tei) | osw9-17 | c (historic, no succession source) | 3 pipe chairs to eat croquettes hot (Tabelog; April 2024) | Butcher founded 1894 by the first-generation Zen'emon Ohashi (Tabelog; official site title 創業明治二十七年); later succession not stated. | https://tabelog.com/en/kyoto/A2601/A260301/26024699/ |
| kyoto_kameya_mutsu | 亀屋陸奥 (Kameya Mutsu) | osw2-10 | c (historic, no succession source) | none | Founded by tradition in 1421 (official site); family succession not stated. | https://tabelog.com/en/kyoto/A2601/A260101/26002071/ |
| kyoto_kameya_kiyonaga | 亀屋清永 (Kameya Kiyonaga) | osw9-9 | c (historic, no succession source) | none | Founded by tradition in 1617 (official history page); family succession not stated. | https://tabelog.com/en/kyoto/A2601/A260301/26005883/ |
| kyoto_ryokujuan_shimizu | 緑寿庵清水 (Ryokujuan Shimizu) | osw13-23 | c (historic, no succession source) | none | Founded 1847; technique "passed down without written recipes" (2026 reviews); family not stated. | https://tabelog.com/en/kyoto/A2601/A260302/26005325/ |
| kyoto_honke_gepaikeya_naomasa | 本家月餅家直正 (Honke Gepaikeya Naomasa) | osw13-22 | c (historic, no succession source) | none | "Said to date from 1804" (Sept 2026 review). | https://tabelog.com/en/kyoto/A2601/A260202/26002393/ |
| kyoto_matsuya_tokiwa | 松屋常盤 (Matsuya Tokiwa) | osw6-5 | c (historic, no succession source) | none | Shōō era / "360 years" (2026 reviews); an elderly woman appears to head the shop. | https://tabelog.com/en/kyoto/A2601/A260202/26000620/ |
| kyoto_kameya_yoshinaga | 亀屋良永 (Kameya Yoshinaga) | osw6-5 | c (historic, no succession source) | none | 1832 (MAPPLE) or 1803 (Aug 2026 review). | https://tabelog.com/en/kyoto/A2601/A260201/26000644/ |
| kyoto_minatoya_kosodate_ame | みなとや幽霊子育飴本舗 (Minatoya Yurei Kosodate Ame Honpo) | osw2-43 | c (historic, no succession source) | none | "Over 450 years" (official site); succession not stated. | https://tabelog.com/en/kyoto/A2601/A260301/26013243/ |
| kyoto_gion_manju_shijo | 祇園饅頭 (Gion Manju) | osw8-55 | c (historic, no succession source) | none | 1819 per a July 2026 review. | https://tabelog.com/en/kyoto/A2601/A260301/26003473/ |
| kyoto_gosho_ame_honpo | 御所飴本舗 (Gosho Ame Honpo) | osw8-78 | c (historic, no succession source) | none | Founded 1912 (official site); later owners not named. | https://tabelog.com/en/kyoto/A2601/A260202/26014567/ |
| kyoto_mangetsu_ajari_mochi_honten | 阿闍梨餅本舗 京菓子司 満月 本店 (Mangetsu Honten) | osw13-15 | c (historic, no succession source) | a few benches | Late Edo; 阿闍梨餅 created in 1923 (2026 reviews). | https://tabelog.com/en/kyoto/A2601/A260302/26003917/ |
| kyoto_kyogashi_shojuken | 京菓子司 松寿軒 (Kyogashi Tsukasa Shojuken) | osw9-4 | c (historic, no succession source) | none | Founded 1932 (operator text on Tabelog). | https://tabelog.com/en/kyoto/A2601/A260301/26009387/ |
| kyoto_murakamiju_honten | 村上重本店 (Murakami Ju Honten) | osw13-74 | c (historic, no succession source) | none: no eating space (Tabelog) | Founded 1832 (Takashimaya column). | https://tabelog.com/en/kyoto/A2601/A260201/26007678/ |
| kyoto_pontocho_surugaya | 先斗町駿河屋 (Pontocho Surugaya) | osw6-64 | c (historic, no succession source) | a piece can be plated to eat at the shop (Aug 2026) | "Over 120 years" (June 2024 review). | https://tabelog.com/en/kyoto/A2601/A260202/26004880/ |
| kyoto_okashi_kagijin | 御菓子司 かぎ甚 (Okashi Tsukasa Kagijin) | osw1-62 | c (historic, no succession source) | none | Founded 1921 (Jan 2025 review). | https://tabelog.com/en/kyoto/A2601/A260201/26013998/ |
| kyoto_sohonke_kawamichiya | 総本家 河道屋 (Sohonke Kawamichiya) | osw13-103 | c (historic, no succession source) | none | "Over 300 years" (May 2026 review). | https://tabelog.com/en/kyoto/A2601/A260202/26014542/ |
| kyoto_fufu_roho_nishiki | 麩房老舗 (Fufu Roho) | osw9-6 | c (historic, no succession source) | yes: 2 seats for the dengaku (Tabelog) | Tenpō era / nearly 200 years (reviews). Not pure retail. | https://tabelog.com/en/kyoto/A2601/A260201/26005553/ |
| kyoto_notoyo_nishiki | のとよ (Notoyo) | osw9-56 | c (historic, no succession source) | eat standing at the stall; Tabelog lists 25 seats | 1912 as read by a Sept 2025 visitor. | https://tabelog.com/en/kyoto/A2601/A260201/26027027/ |
| kyoto_miki_keiran_nishiki | 三木鶏卵 (Miki Keiran) | osw13-66 | c (historic, no succession source) | small standing eat-in space | Founded 1928 (official site); succession not stated. | https://tabelog.com/en/kyoto/A2601/A260201/26004870/ |
| kyoto_kameya_norikatsu | 亀屋則克 (Kameya Norikatsu) | osw6-30 | c | none | Founding unconfirmed (1916 or 1926 per reviews). | https://tabelog.com/en/kyoto/A2601/A260202/26002396/ |
| kyoto_kuriya | 京都くりや (Kyoto Kuriya) | osw9-5 | c | none | "Established in the Taisho era" (Oct 2026 review). | https://tabelog.com/en/kyoto/A2601/A260202/26005379/ |
| kyoto_meigetsudo_miyagawacho | 名月堂 (Meigetsu Do) | osw13-95 | c | none | Founded 1950 (shop website via a Jan 2024 review); succession not stated. | https://tabelog.com/en/kyoto/A2601/A260301/26007402/ |
| kyoto_fukueido_gion | 福栄堂 (Fukueido) | osw1-31 | c | none | "80 years of tradition" (official site of the 壹錢洋食 company). | https://tabelog.com/en/kyoto/A2601/A260301/26000564/ |
| kyoto_kameya_hironaga | 京御菓子司 亀屋博永 (Kameya Hironaga) | osw1-30 | c | none (no dining space) | Family-run (an elderly couple and their son, Dec 2023) but no founding date. | https://tabelog.com/en/kyoto/A2601/A260202/26018858/ |
| kyoto_imanishi_ken | 今西軒 (Imanishi Ken) | osw13-22 | c | none | Closed 1995, reopened 2002 (Tabelog). | https://tabelog.com/en/kyoto/A2601/A260201/26002101/ |
| kyoto_demachi_futaba | 出町ふたば (Demachi Futaba) | osw13-13 | c | none (takeaway only) | No founding or succession in the record. | https://tabelog.com/en/kyoto/A2601/A260302/26001520/ |
| kyoto_nanajou_futaba | 七条ふたば (Nanajou Futaba) | osw6-33 | c | none | Link to 出町ふたば unclear (reviews). | https://tabelog.com/en/kyoto/A2601/A260101/26017156/ |
| kyoto_ohagi_tomoeya | おはぎ巴屋 (Ohagi Tomoeya) | osw2-32 | c | none | Run by a couple (reviews); no founding date. | https://tabelog.com/en/kyoto/A2601/A260101/26014275/ |
| kyoto_gion_shugetsu_honten | 京あられ 京都祇園萩月本店 (Kyoto Gion Shugetsu) | osw9-69 | c | none | A company (Syugetsu Corporation); no founding date. | https://tabelog.com/en/kyoto/A2601/A260301/26016467/ |
| kyoto_hey_chou_rokkaku | Hey Chou (Cream Puff Senmonten Hey Chou) | osw9-65 | c | none | Opened April 2026. | https://tabelog.com/en/kyoto/A2601/A260201/26044979/ |
| kyoto_intero_panya_nishiki | !? (Intero Pan ya) | osw9-73 | c | small standing eat-in space (Aug 2026) | Opened January 2026. | https://tabelog.com/en/kyoto/A2601/A260202/26044331/ |
| kyoto_kagirinakifuku_gion | 肉菓子 かぎりなき福 (KAGIRINAKIFUKU) | osw9-67 | c | standing counter for shigure soba (Tabelog): not pure retail | Opened December 2024. | https://tabelog.com/en/kyoto/A2601/A260301/26042483/ |
| kyoto_hamohide_nishiki | 鱧秀 錦市場 (Hamo Hide) | osw9-72 | c | seating inside and restrooms (Oct 2025): not pure retail | No founding date. | https://tabelog.com/en/kyoto/A2601/A260202/26036693/ |
| kyoto_miyabido_daimaru | みやび堂 大丸京都店 (Miyabi Do Daimaru Kyoto) | osw6-74 | c | none (department-store counter) | An online senbei maker. | https://tabelog.com/en/kyoto/A2601/A260201/26035468/ |
| kyoto_panraku_bakery | 汎洛 (Panraku) | osw2-68 | c | none | Local bakery; no founding date. | https://tabelog.com/en/kyoto/A2601/A260201/26005635/ |
| kyoto_green_farm_demachi | グリーン ファーム (GREEN FARM) | osw2-55 | c | yes: 10 seats (Tabelog) and a terrace; not pure retail | Run by a Taisho-era dairy company (reviews); opened 2014. | https://tabelog.com/en/kyoto/A2601/A260302/26025975/ |
| kyoto_izumiya_chirimen_sansho | いづみ屋 (Izumiya) | osw13-82 | c | tasting counter only | No founding date. | https://tabelog.com/en/kyoto/A2601/A260301/26019360/ |
| kyoto_sanjiya_kawaramachi | さんじや 河原町本店 (Sanjiya) | osw6-56 | c | none | Crepe counter. | https://tabelog.com/en/kyoto/A2601/A260201/26004916/ |
| kyoto_silk_pound_cake | SILK (Kyoto Pound Cake Silk) | osw9-58 | c | none | Opened 2022. | https://tabelog.com/en/kyoto/A2601/A260201/26037515/ |
| kyoto_gion_gozu_shijo | GION GOZU 四条店 | osw8-75 | c | eat-in by day, takeaway late (June 2025) | Opened 2023. | https://tabelog.com/en/kyoto/A2601/A260301/26036359/ |
| kyoto_fujii_no_purin_shijo | 日本料理 藤井のぷりん (Fujii no Purin) | osw9-53 | c | none | Opened 2022. | https://tabelog.com/en/kyoto/A2601/A260201/26037935/ |
| kyoto_imoya_imo_to_yasai_kawaramachi | 京都芋屋 芋と野菜 四条河原町店 (Kyoto Imoya Imo to Yasai) | osw9-56 | c | none | Company founded 2022. | https://tabelog.com/en/kyoto/A2601/A260201/26037899/ |
| kyoto_fruits_nakazawa_daimaru | フルーツ中澤 大丸京都店 (Fruits Nakazawa Daimaru Kyoto) | osw13-96 | c | benches nearby in the food hall | Juice stand. | https://tabelog.com/en/kyoto/A2601/A260201/26024622/ |
| kyoto_tanaka_keiran_nishiki | 田中鶏卵 (Tanaka Keiran) | osw6-62 | c | a spot in front to eat | No founding date. | https://tabelog.com/en/kyoto/A2601/A260202/26006098/ |
| kyoto_yamasho_nishiki_market | 山庄 (Yama Sho) | osw13-91 | c | eat at the stall | Skewer stall. | https://tabelog.com/en/kyoto/A2601/A260202/26027016/ |
| kyoto_taco_high_nishiki | タコハイ 錦市場店 (Taco High, Nishiki Market) | osw1-64 | c | small standing area | Takoyaki stall. | https://tabelog.com/en/kyoto/A2601/A260201/26043854/ |
| kyoto_beans_tei | びーんず亭 (Beans Tei) | osw8-69 | c | small standing corner | Coffee-bean shop. | https://tabelog.com/en/kyoto/A2601/A260201/26005477/ |
| kyoto_drink_drank_rokkaku | DRINK DRANK 京都六角通り店 (DRINK DRANK Kyoto Rokkaku-dori) | osw6-70 | c | standing room for 2–3 | Nara smoothie brand (1999); no family source. | https://tabelog.com/en/kyoto/A2601/A260202/26044978/ |
| kyoto_sweet_fountain_mototanaka | スイートファウンテン ケーキショップ (Sweet Fountain Cakeshop) | osw9-52 | c | 2 counter seats: not pure retail | Neighbourhood cake shop. | https://tabelog.com/en/kyoto/A2601/A260302/26004179/ |
| kyoto_patisserie_atelier_s_second | PATISSERIE ATELIER S SECOND | osw6-53 | c | none | Couple-run second shop, opened 2025. | https://tabelog.com/en/kyoto/A2601/A260201/26043478/ |
| kyoto_noto_sho_matsubara | のと正 (Noto Sho) | osw8-33 | c | none (no seats) | Side dishes and eel to take away; no founding date. | https://tabelog.com/en/kyoto/A2601/A260201/26024515/ |
| kyoto_point_pour_point_fuchomae | ポワンプールポワン 府庁前店 (Point Pour Point, Fuchomae) | osw1-22 | c | seats not listed | Pâtisserie. | https://tabelog.com/en/kyoto/A2601/A260202/26001530/ |
| kyoto_okashi_kobo_favorite | お菓子工房 ファヴリット (favorite) | osw6-23 | c | none | Pâtisserie. | https://tabelog.com/en/kyoto/A2601/A260201/26009038/ |
| kyoto_angledian_shogoin | アングレディアン 京都 (Angledian Kyoto) | osw1-30 | c | none | Pâtisserie. | https://tabelog.com/en/kyoto/A2601/A260202/26034158/ |
| kyoto_cherie_maison_du_biscuit | CHERIE MAISON DU BISCUIT | osw8-24 | c | none (salon closed) | Opened 2019. | https://tabelog.com/en/kyoto/A2601/A260202/26032033/ |
| kyoto_flip_up | Flip up! (フリップアップ) | osw13-17 | c | none | Bagels, about 22 years. | https://tabelog.com/en/kyoto/A2601/A260202/26004579/ |
| kyoto_artisan_halles | boulangerie Artisan'Halles (アルチザナル) | osw13-20 | c | none (takeaway only since May 2025) | Opened 2012. | https://tabelog.com/en/kyoto/A2601/A260302/26020779/ |
| kyoto_warder_bakery | ワルダー (Warder) | osw13-24 | c | none | Opened 2007. | https://tabelog.com/en/kyoto/A2601/A260201/26004637/ |
| kyoto_mash_kyoto | まっしゅ京都 (MASH Kyoto) | osw9-1 | c | none | Opened 2004. | https://tabelog.com/en/kyoto/A2601/A260201/26006051/ |
| kyoto_eze_bleu | eze bleu (エズ ブルー) | osw8-3 | c | none | Bakery. | https://tabelog.com/en/kyoto/A2601/A260302/26002639/ |
| kyoto_nakagawa_komugiten | ナカガワ小麦店 (Nakagawa Komugiten) | osw6-3 | c | none | Bakery with one baker. | https://tabelog.com/en/kyoto/A2601/A260302/26019004/ |
| kyoto_fleur_de_farine | フルール・ド・ファリーヌ (FLEUR DE FARINE) | osw6-4 | c | none | Bakery. | https://tabelog.com/en/kyoto/A2601/A260202/26004724/ |
| kyoto_shirohato_bakery | しろはとベーカリー (Shirohato Bakery) | osw9-6 | c | none | Opened 2013. | https://tabelog.com/en/kyoto/A2601/A260202/26021765/ |
| kyoto_bonne_volonte | ボン・ボランテ (bonne volonte) | osw6-7 | c | none | Bakery with one baker. | https://tabelog.com/en/kyoto/A2601/A260302/26002684/ |
| kyoto_bakery_uki | ベーカリー ウキ (Bakery uki) | osw8-22 | c | none | Opened 2020. | https://tabelog.com/en/kyoto/A2601/A260302/26033779/ |
| kyoto_rauk_honten | Rauk 本店 (Boulangerie Rauk) | osw13-47 | c | none | Opened 2001. | https://tabelog.com/en/kyoto/A2601/A260101/26002626/ |
| kyoto_marie_france_imadegawa | マリーフランス 今出川店 (Marie France, Imadegawa) | osw1-27 | c | none | Opened 1984. | https://tabelog.com/en/kyoto/A2601/A260202/26003834/ |
| kyoto_dough_bakery | Dough | osw1-34 | c | none | Began 2003. | https://tabelog.com/en/kyoto/A2601/A260202/26025140/ |
| kyoto_boulangerie_morimori | ブーランジェリー モリモリ (Boulangerie MoriMori) | osw8-32 | c | none | Opened 2019. | https://tabelog.com/en/kyoto/A2601/A260202/26032453/ |
| kyoto_friandise_karasuma | フリアンディーズ 烏丸店 (BOULANGERIE FRIANDISE) | osw2-36 | c | none | Bakery branch. | https://tabelog.com/en/kyoto/A2601/A260202/26015769/ |
| kyoto_kurs_bakery_nijo | kurs | osw1-19 | c | none | Opened 2019. | https://tabelog.com/en/kyoto/A2601/A260203/26033570/ |
| kyoto_quatre_saison_bakery | キャトルセゾン (quatre saison) | osw8-27 | c | none | Bakery. | https://tabelog.com/en/kyoto/A2601/A260302/26003815/ |
| kyoto_nitta_bakery | ニッタベーカリー (Nitta_Bakery) | osw9-32 | c | bench out front | Opened 2018. | https://tabelog.com/en/kyoto/A2601/A260201/26013647/ |
| kyoto_rebondie_ichijoji | ルボンディー (REBONDIE) | osw8-35 | c | none | Bakery. | https://tabelog.com/en/kyoto/A2601/A260302/26003959/ |

**Totals:** 86 records. a: 8, b: 4, c: 74.

**Pure take-home with no a or b basis** (candidates to hide under the ruling): every c row whose Eat-in is "none".

**Not pure retail** (real seats or an eat-in counter): 渡半, 麩房老舗, のとよ, グリーン ファーム, 肉菓子 かぎりなき福, 鱧秀, スイートファウンテン, GION GOZU. Standing-only spots are borderline: 三木鶏卵, !? (Intero Pan ya), CONTO, タコハイ, びーんず亭, DRINK DRANK, 丸常蒲鉾, 田中鶏卵, 山庄.

**Not included:** shops with a café or tea room on site (e.g. 鍵善良房, 亀屋良長 本店, 大極殿本舗, 宝泉, 千本玉壽軒, 祇園小石, 永楽屋), eat-in kanmidokoro (みつばち), fruit parlours, and restaurants.
