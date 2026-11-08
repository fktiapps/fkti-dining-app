# Kyoto hotel-venue audit (osw13, batch 105, 2026-11-08)

Scope: visible records in data/kyoto.json (hidden records excluded) at main 540e6621. Ruling (Greg, 2026-11-08): venues inside hotels run by national or global hotel groups are skipped, and those already listed get hidden. No data was changed.

Method:
- Searched name and address_ja for hotel names and brands.
- Searched the hotel addresses of known chain hotels.
- Searched notes, hours_raw and existence for brand names.
- Read each hit by hand.

"Hotel" is the hotel named in the record's own address_ja (from its Tabelog listing), unless noted otherwise.

I fetched the group membership for two hotels this session:
- The Hotel Seiryu → Seibu Prince Hotels (princehotels.co.jp/seiryu-kiyomizu/).
- Hilton Kyoto (kyoto.hiltonjapan.co.jp).

The other group labels come from brand ownership and were not fetched one by one.

## A. Inside national or global group hotels: candidates to hide (43)

| id | name | hotel | group | source |
|---|---|---|---|---|
| vm_the_ritz_carlton_kyoto | ザ・リッツ・カールトン京都 | The Ritz-Carlton, Kyoto (the hotel itself, VegeMap record) | Marriott International | record name/notes |
| kyoto_seven_embers_hilton | オステリア イタリアーナ セブン・エンバーズ | ヒルトン京都 1F | Hilton | address_ja; kyoto.hiltonjapan.co.jp |
| kyoto_teori_hilton | Téori (Hilton Kyoto) | ヒルトン京都 | Hilton | address_ja; kyoto.hiltonjapan.co.jp |
| kyoto_open_doubletree_higashiyama | All Day Dining & Lounge Bar OPEN | ダブルツリーbyヒルトン京都東山 lobby | Hilton (DoubleTree) | address_ja |
| kyoto_westin_miyako_raku | 洛空 (Raku) | The Westin Miyako Kyoto (粟田口華頂町1) | Marriott (Westin); owned by Kintetsu-Miyako Hotels | record name; address |
| kyoto_dominique_bouchet_restaurant | ドミニク・ブシェ・キョート・ル・レストラン | ウェスティン都ホテル京都 3F | Marriott (Westin) / Kintetsu-Miyako | address_ja |
| kyoto_dominique_bouchet_teppanyaki | ドミニク・ブシェ・キョート・ル・テッパンヤキ | The Westin Miyako Kyoto (粟田口華頂町1) | Marriott (Westin) / Kintetsu-Miyako | neighborhood "in The Westin Miyako Kyoto"; address |
| kyoto_rondo_miyako_hachijo | ダイニングカフェ＆バー ロンド | 都ホテル京都八条 1F | Kintetsu-Miyako Hotels | address_ja |
| kyoto_all_day_dining_yasaka_imperial | オールデイダイニング 弥栄 | 帝国ホテル 京都 本棟 2F | Imperial Hotel | address_ja |
| kyoto_yasaka_park_hyatt | 八坂 (Yasaka) | Park Hyatt Kyoto | Hyatt | record name |
| kyoto_kyoto_bistro_park_hyatt | KYOTO BISTRO | パーク ハイアット 京都 | Hyatt | address_ja |
| kyoto_kohaku_park_hyatt | 琥珀 (Kohaku) | パークハイアット京都 4F | Hyatt | address_ja |
| kyoto_sekki_six_senses | Sekki | シックスセンシズ京都 B2F | IHG (Six Senses) | address_ja |
| kyoto_sushi_ooga_higashiyama | 鮨おおが東山 | シックスセンシズ京都 B2F | IHG (Six Senses) — but see note 1 | address_ja |
| kyoto_teppanyaki_nijo_anacp | 鉄板焼 二条 | ANAクラウンプラザホテル京都 B1F | IHG (ANA Crowne Plaza) | address_ja |
| kyoto_koyo_dusit_thani | 紅葉 Koyo | Dusit Thani Kyoto | Dusit International | record name |
| kyoto_trattoria_m_mercure | TRATTORIA M KYOTO | メルキュール京都ステーション | Accor (Mercure) | address_ja |
| kyoto_kyorinsen_granvia | 天婦羅処 京林泉 | ホテルグランヴィア京都 M3F | JR West Hotels (Granvia) | address_ja |
| kyoto_gozan_nozomi | 五山望 | ホテルグランヴィア京都 15F | JR West Hotels | address_ja |
| kyoto_kotoshieru_granvia | ビュー＆ダイニング コトシエール | ホテルグランヴィア京都 15F | JR West Hotels | address_ja |
| kyoto_le_temps_granvia | ル・タン | ホテルグランヴィア京都 2F | JR West Hotels | address_ja |
| kyoto_grand_jour_granvia | ロビーラウンジ グランジュール | ホテルグランヴィア京都 2F | JR West Hotels | address_ja |
| kyoto_ukihashi_granvia | 和食 浮橋 | ホテルグランヴィア京都 M3F | JR West Hotels | address_ja |
| kyoto_kizahashi_thousand | KIZAHASHI | THE THOUSAND KYOTO 2F | Keihan Hotels & Resorts | address_ja |
| kyoto_scalae_the_thousand | SCALAE | THE THOUSAND KYOTO 2F | Keihan Hotels & Resorts | address_ja |
| kyoto_all_day_dining_rajou | オールデイダイニング ラジョウ | 京都センチュリーホテル 2F | Keihan Hotels & Resorts | address_ja |
| kyoto_teppanyaki_aoi_rihga | 鉄板焼 葵 | リーガロイヤルホテル京都 B1F | Royal Hotel (RIHGA) | address_ja |
| kyoto_top_of_kyoto_rihga | トップ オブ キョウト | リーガロイヤルホテル京都 14F | Royal Hotel (RIHGA) | address_ja |
| kyoto_gourmand_tachibana_rihga | グルマン橘 | リーガロイヤルホテル京都 B1F | Royal Hotel (RIHGA) | address_ja |
| kyoto_koka_ryuho_rihga | 中国料理 皇家龍鳳 | リーガロイヤルホテル京都 B1F | Royal Hotel (RIHGA) | address_ja |
| kyoto_amber_court_nikko_princess | Cafe & Dining Amber Court | ホテル日航プリンセス京都 1F | Okura Nikko Hotels (Nikko brand) | address_ja |
| kyoto_toki_hotel_the_mitsui | 都季 (TOKI) | HOTEL THE MITSUI KYOTO 1F | Mitsui Fudosan Hotel Management | address_ja |
| kyoto_forni_hotel_the_mitsui | FORNI | HOTEL THE MITSUI KYOTO (二条油小路町284) | Mitsui Fudosan Hotel Management | neighborhood; address |
| kyoto_curd_mitsui_garden | curd | 三井ガーデンホテル京都三条プレミア 1F | Mitsui Fudosan Hotel Management | address_ja |
| kyoto_sanga_ono_jokyoji | 僧伽小野 京都浄教寺 | 三井ガーデンホテル京都河原町浄教寺 2F | Mitsui Fudosan Hotel Management | address_ja |
| kyoto_k36 | K36 | The Hotel Seiryu Kyoto Kiyomizu 4F | Seibu Prince Hotels Worldwide (operator) | address_ja; princehotels.co.jp/seiryu-kiyomizu/ |
| kyoto_kosa_ace_hotel | KOSA | エースホテル京都 3F | Ace Hotel Group (global) — see note 2 | address_ja |
| kyoto_piopiko_ace_hotel | PIOPIKO | エースホテル京都 2F | Ace Hotel Group — see note 2 | address_ja |
| kyoto_mr_maurices_italian_ace | ミスター モーリスズ イタリアン | Ace Hotel Kyoto 3F | Ace Hotel Group — see note 2 | address_ja |
| kyoto_gate_hotel_lobby_lounge | THE GATE HOTEL 京都高瀬川 Lobby Lounge & Bar | ゲートホテルKYOTO | Hulic (THE GATE HOTEL brand) | address_ja |
| kyoto_yoshoku_monsieur_ito | 京都洋食 ムッシュいとう | ザ ロイヤルパークホテル 京都三条 B1F | Mitsubishi Estate (Royal Park Hotels) — see note 1 | address_ja |
| kyoto_ryu_no_hige | ryu no hige by MITATE | ダイワロイネットホテル京都四条烏丸 1F | Daiwa House (Daiwa Roynet) — see note 1 | address_ja |
| kyoto_gion_gozu_shijo | GION GOZU 四条店 | アパホテル京都祇園excellent 1F | APA Hotel — see note 1 | address_ja |

### Notes for the integrator
1. **Tenant brands inside a chain hotel:** 鮨おおが東山, ムッシュいとう, ryu no hige by MITATE and GION GOZU are independent restaurant brands that rent space in a chain hotel; they are not the hotel's own outlets. The 上田珈琲 ruling (a non-hotel brand on a hotel floor is OK) points the other way from the new "inside a big-chain hotel" wording, so these four need your call.
2. **Ace Hotel Kyoto:** KOSA, PIOPIKO and MR.MAURICE'S ITALIAN are the hotel's in-house outlets under a global brand. I listed them as hide candidates. Whether a boutique global brand counts as a "hotel group" is your call.

## B. Borderline: in a hotel building, group size not confirmed (2)

| id | name | hotel | why unsure |
|---|---|---|---|
| kyoto_patisserie_saki_inoue | PATISSERIE SAKI INOUE | B1F of the building housing OMO5 Kyoto Gion (Hoshino Resorts) | Its own notes say "the building housing" OMO5. That reads as a separate tenant in the same building, not a hotel outlet. |
| kyoto_beer_cafe_bakujun | Beer Cafe 麦潤 | ホテルメルディア四条河原町アネックス 1F | Long-running independent beer bar. Hotel Merdia is the Merdia group's own brand; I couldn't confirm its size (search found no count). |

## C. Hotel or hotel-building venues that stay (local or independent)

| id | name | hotel | reason it stays |
|---|---|---|---|
| kyoto_node_hotel_restaurant | node (node hotel) | node hotel, 蟷螂山町461 | Single independent hotel. |
| kyoto_wine_bistro_plein_gion | WINE BISTRO by plein 京都祇園 | KYOTO GION HOTEL 1F | Tenant of a small hotel; no operator found for KYOTO GION HOTEL. A different restaurant-group question (PLEIN) is already in the record. |
| kyoto_restaurant_muni_kiyamachi | Restaurant muni | 材木町176-3 | The record does not place it in a chain hotel. |

## D. Hits checked and excluded (not inside a hotel)

- **Hotel only near by or in a chef's past:** records that mention a hotel only as a landmark or as the chef's training ground — kyoto_bar_k6, kyoto_wine_to_washoku_mikuri, kyoto_bar_cerveceria_xativa, kyoto_tsuruya_soba_hokoda (Ritz-Carlton nearby); kyoto_mash_kyoto, kyoto_sake_to_sakana_dna (Nikko Princess nearby); kyoto_meshiya_ebisu (north of the Hilton); kyoto_7_taps_tavern_station (opposite The Thousand); kyoto_sumizo_yakiniku (near Hotel Brighton); and chefs' careers at kyoto_motoi_tomikoji, kyoto_nishibuchi_hanten, kyoto_mashiro_rokkaku, kyoto_yosuke_yamaji, kyoto_la_biographie, kyoto_ristorante_noro, kyoto_gion_fuji_tempura, kyoto_restaurant_koga, kyoto_machiya_shisen_hoshitsukiyo, kyoto_sokkon_fujimoto, kyoto_teramachi_yoshikura, kyoto_la_famille_morinaga, kyoto_assiette_dessert_mikan, kyoto_lamarck_imadegawa.
- **Kyoto Station building and Tower, not hotels:** Kyoto Station Building and Kyoto Tower Sando tenants that matched the Granvia or Kyoto Tower address (kyoto_saikyo_yaki_yamaroku, kyoto_tsukumo_udon_shiokoji, kyoto_kokekokko_isetan, kyoto_seppourai_kyoto_station, kyoto_minari_isetan, kyoto_obuya_kyoto_station, kyoto_gihan_hajimedo_tower_sando, kyoto_tower_sand_bar, kyoto_seppourai_kyoto_tower, kyoto_link_tower_sando, kyoto_bubble_tea_berries).
- **Name or word matches only:** kyoto_hotel_de_ogawa (a restaurant name), kyoto_nikolabo (エリッツ building), kyoto_kyogamo_kamokura, kyoto_tokura_sanjo, kyoto_menya_edition_kiyamachi, kyr_ramen_okura_ichijoji_ten, kyr_yamanoya, kyoto_amanogawa_pontocho, kyoto_tozanbo_tamanohikari, kyoto_junmai_sakekasu_tamanohikari, kyoto_horumon_jaman_kawaramachi, kyoto_kyo_ajidokoro_sowaka, kyoto_kiharu_yanaginobanba (unrelated to KIHARU Brasserie), kyoto_nonki_tei_gion (only a sister shop is at an APA hotel), kyoto_ukiya_takashimaya (department store; a sister shop is at Hotel Okura).
- **Address-block matches:** Hachijo-side shops on 東九条西山王町 (Avanti and side streets), and the 一之船入町, 下丸屋町, 粟田口三条坊町, 祇園町南側572 and 清本町354 Assist building records that share a block with a hotel but are not in one.
