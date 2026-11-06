// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 35.
//   + ICHiMARU5 (big mitarashi dango on the slope to Kiyomizu-dera; OKAMOTO kimono-rental company's sweets brand)
//   + みくり 桑 Mikuri Kuwa (Kyoto "fry kappo" off Nishinotoin-Rokkaku; sister of ワインと和食 みくり, flagged)
//   + こけこっこ Kokekokko (charcoal yakitori with a Kyoto Tower view, JR Kyoto Isetan 10F)
//   + Roji-oku (roast-beef bistro bar down an alley near Shijo Karasuma)
//   Picked on 2026-11-06: from `queue.mjs kyoto-missed next core 200`, lane ids 26038748, 26041406; from `next notable
//   200`: 26002070, 26034554. None is in data/kyoto.json by name (ICHiMARU5, 桑/Kuwa, こけこっこ/Kokekokko, Roji-oku/ロジオク)
//   or address (五条橋東6-540-6, 池須町419-6, 東塩小路町901 伊勢丹 10F, 糸屋町215-1). The large-parent list in the brief was
//   checked: none of the four operators is on it.
//   Same-name count (same brand or operator only): ICHiMARU5 — a main shop and a Kiyomizu-zaka branch (April 2026 review),
//   run by OKAMOTO Co., Ltd., a kimono-rental company (April 2026 review). みくり 桑 — the existing みくり record names it as
//   its sister; invoice holder 株式会社Ｇｒｅｅｎ Ｓｍｉｌｅ (NTA register). こけこっこ — one shop found (Isetan shop page, web
//   search). Roji-oku — the only shop of 合同会社Rミート (company site).
//   Service charges, checked against Tabelog's Japanese original: こけこっこ ディナーのみテーブルチャージ料330円 (free to age 6;
//   not with free-drink courses). Others none listed.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-35');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ ICHiMARU5
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26038748/'; const R = TB + 'dtlrvwlst/';
  const H = day(['10:00', '17:00']);
  put({
    id: 'kyoto_ichimaru5_gojozaka', name: 'ICHiMARU5', category: 'OMNI',
    lat: 34.995161, lng: 135.779171, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Rice-flour dango, but the mitarashi glaze and the soy-sauce dango use soy sauce, and the dorayaki is a wheat pancake; no ingredient list published (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Dango with mitarashi glaze or bean paste may be plant-based, but no ingredient list is published; the dorayaki has matcha butter cream (March 2026).',
    hours_raw: '10:00–17:00 daily (Tabelog; hours may change); a March 2026 reviewer visited in the evening on the way to a night opening of Kiyomizu-dera. No reservations (Tabelog). No cards or e-money; PayPay accepted (Tabelog; June 2026). 10 seats: 6 at the counter, 4 at a table; an eat-in space and a photo spot (Tabelog; June 2026). Mostly eaten walking — dango served in cups (April 2026). On Gojozaka, the slope up to Kiyomizu-dera, about 1 km from Kiyomizu-Gojo Stn (Tabelog; 2026 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gojozaka, on the slope up to Kiyomizu-dera',
    cuisine: 'Homemade dango to eat on the walk (April 2026) · large mitarashi dango ¥330, served warm or chilled (March and August 2026) · soy-sauce dango; bean-paste dango about ¥300; colourful dango (June 2026) · dorayaki with matcha butter cream ¥360 (March 2026) · Uji matcha drinks and matcha dango (March and May 2026)',
    website: null, gmaps: gm('ICHiMARU5 五条坂'), menu_url: null,
    notes: '[Dango · Gojozaka, on the way to Kiyomizu-dera] A small, photogenic dango stand on the slope to Kiyomizu-dera: an oversized mitarashi dango (¥330, warm or chilled), soy-sauce and bean-paste dango in takeaway cups, matcha dorayaki and Uji matcha, with a few seats inside. Busy with school trips and tourists. PayPay or cash.',
    chef_bio: { chef_name: null, roles: ['Operated by OKAMOTO Co., Ltd. (per an April 2026 review)'], origin: null,
      background: 'An April 2026 reviewer writes that the business began in 1831 as an Okamoto textile shop and has run the kimono rental “Rental Kimono Okamoto” since 2004 under OKAMOTO Co., Ltd., and that ICHiMARU5 is its homemade-dango shop; another April 2026 reviewer says there is a main shop and a Kiyomizu-zaka branch. A March 2026 visitor found the room not very clean and wondered whether it was aimed at overseas guests.',
      philosophy: null, specialty: 'Large mitarashi dango.',
      anecdotes: [
        { text: 'An August 2026 couple chose the large mitarashi dango chilled on a hot day and shared it.', source: R + 'B534003165/' },
        { text: 'A May 2026 visitor with a sensitive tongue ate the piping-hot dango inside rather than on the street.', source: R + 'B535713675/' },
      ],
      japanese_sources_summary: '食べログ: ICHiMARU5、和菓子、東山区五条橋東6-540-6、清水五条駅から966m、毎日10:00〜17:00、予約不可、カード・電子マネー不可、PayPay可、10席 (カウンター6、テーブル4)。口コミ (2026年): 清水寺への坂の手作り団子、大きなみたらし団子330円 (温かいか冷たいか選べる)、醤油団子、あんの団子約300円、抹茶バタークリームのどら焼き360円、宇治抹茶、カップ入りで食べ歩きしやすい、本店と Kiyomizu-zaka の店があるとの声、1831年に Okamoto Textile Shop として始まり、2004年から Rental Kimono Okamoto を営む株式会社OKAMOTO の店とのこと、夜は店内の清潔感がいまひとつとの声 (日本語の口コミ、2026年3月)。',
      confidence: 'medium', sources: [TB, R + 'B524310477/', R + 'B526459341/', R + 'B526552916/', R + 'B527679582/', R + 'B527987096/', R + 'B528997904/', R + 'B529393833/', R + 'B530484064/', R + 'B534003165/', R + 'B535713675/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Point-and-pay dango stand; eat-in seats; PayPay or cash. Popular with overseas visitors.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区五条橋東6-540-6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (34.995161, 135.779171); cross-checked: GSI 京都府京都市東山区五条橋東六丁目540番地 (lot) 18m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B524310477/'],
    price_note: 'Prices from March and June 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Large mitarashi dango', '¥330', 'Dango', 'ask', 'ask', 'March 2026; warm or chilled.', 'mitarashi_dango'),
      it('', '', 'Matcha butter-cream dorayaki', '¥360', 'Sweets', 'no', 'no', 'March 2026.', 'dorayaki'),
      it('', '', 'Bean-paste dango', '¥300', 'Dango', 'ask', 'ask', 'June 2026, about ¥300.', 'anko_dango'),
    ] }, {
    cuisine: '食べ歩き向けの手作り団子 (2026年4月)・大きなみたらし団子330円、温かいか冷たいか選べる (2026年3月、8月)・醤油団子、あんの団子約300円、色とりどりの団子 (2026年6月)・抹茶バタークリームのどら焼き360円 (2026年3月)・宇治抹茶のドリンクと抹茶団子 (2026年3月、5月)',
    neighborhood: '五条坂、清水寺への坂の途中',
    gf_detail: '要確認。米粉の団子だが、みたらしと醤油団子は醤油を使い、どら焼きは小麦の生地。原材料は公開されていない (2026年の口コミ)。',
    vegan_detail: '要確認。みたらしやあんの団子は植物性の可能性もあるが原材料は公開されていない。どら焼きは抹茶バタークリーム入り (2026年3月)。',
    notes: '[団子・五条坂、清水寺への道] 清水寺への坂にある、写真映えする小さな団子の店。大きなみたらし団子 (330円、温かいか冷たいか)、カップ入りの醤油やあんの団子、抹茶のどら焼き、宇治抹茶。店内に少し席あり。修学旅行生や観光客でにぎわう。PayPay か現金。',
  });
}

// ================================================================ みくり 桑
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26041406/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.micuri-kuwa.com/';
  const L = ['11:30', '14:00']; const D = ['18:00', '22:00'];
  put({
    id: 'kyoto_mikuri_kuwa', name: 'みくり 桑 (Mikuri Kuwa)', category: 'OMNI',
    lat: 35.006529, lng: 135.754755, cuisine_type: 'katsu',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a fried-food kappo — panko-fried fish, menchi katsu, tonkatsu, Wagyu cutlet, crab-cream croquettes, fried bread with shrimp paste; homemade Worcester-style sauce (official site; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish, crab, pork and beef courses with dashi soups (official site; 2026 reviews).',
    hours_raw: 'Tuesday dinner only 18:00–22:00 (food L.O. 20:30); Wednesday–Saturday lunch 11:30–14:00 (food L.O. 12:30) and dinner 18:00–22:00 (food L.O. 21:00, Saturday 20:30); Sunday and holidays lunch only; closed Monday, Sunday dinner and the third Sunday (Tabelog). Lunch by reservation only, courses only for seat bookings (official site; Tabelog). “Ryokan-style” breakfast mini-course Saturdays and Sundays in two sittings (8:30 and 10:00), by reservation, ¥3,980; a hotel-stay plan with Agora Hotel (official site). Cards, Rakuten Pay (Tabelog), but set lunches are cash only (July and September 2026). 16 seats: 8 at the ground-floor counter, 8 at tables upstairs, which also serve as a private room for 4–8 (Tabelog). Heated-tobacco area on the ground floor; upstairs non-smoking (Tabelog). Shoes off at the entrance (Tabelog). Children welcome, small children upstairs (Tabelog). Take-away: seko crab, saba sushi, gyu-katsu and tonkatsu sandwiches at New Year (official site). Down an alley off Nishinotoin south of Rokkaku, 9–11 min from Shijo / Karasuma Oike Stns (Tabelog; July 2026). Opened 11 July 2024 (Tabelog).',
    hours: { 1: [D], 2: [L, D], 3: [L, D], 4: [L, D], 5: [L, D], 6: [L] }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Alley off Nishinotoin south of Rokkaku — 9 min from Shijo Stn',
    cuisine: '“Kyoto fry kappo”: seasonal dishes and signature fried dishes by course, from a chef with Japanese, French and crab-ryokan experience; Kinki produce such as Kyotamba-kogen pork, Yoka pork and fish from Maizuru port (official site) · signature rare-fried horse mackerel, fillet katsu, crab-cream croquette, menchi katsu, Wagyu cutlet (official site; 2026 reviews) · lunch: Yoka-pork menchi katsu set ¥1,650 with rice, miso soup and salad (June 2026); a ¥5,500 lunch with fried horse mackerel and tonkatsu (June 2026) · dinner: “MICURI Ultimate Course” ¥22,000 with sashimi, conger eel and matsutake soup, fried bread with shrimp paste, Omi beef, abalone (July 2026); hassun, nodoguro, white squid (September 2026) · breakfast: clay-pot rice, Kamo eggplant, sashimi, dashimaki, obanzai, miso soup, menchi katsu (July 2026) · house sauce with sansho; tartare with pickled daikon (July 2026) · natural wines, mainly white; sakes including Aramasa and Ōroku; whisky; premium free-drink plans (official site; September 2026) · Matsuba crab course in season (official site)',
    website: SITE, gmaps: gm('みくり 桑 京都 西洞院'), menu_url: SITE,
    notes: '[Fried-food kappo · Nishinotoin-Rokkaku, alley counter] A small alley house — shoes off — where fried food becomes kappo: rare-fried horse mackerel, fillet katsu, crab-cream croquettes and menchi katsu from Kinki pork, fried slowly to order, alongside sashimi and seasonal dishes. Lunch sets from ¥1,650 (cash only), dinner courses up to ¥22,000 with natural wine and rare sake, and a ryokan-style breakfast on weekends. Book ahead. Sister of ワインと和食 みくり.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)', 'Owner (unnamed)'], origin: null,
      background: 'The official site describes a chef who has built experience not only in Japanese cooking but also in French cuisine and at a crab ryokan; a June 2026 reviewer calls it “run by a chef with experience in French and Japanese cooking”. A September 2026 diner mentions both “the head chef and the owner” recommending drinks. The invoice number here, T9130001059304, is registered to 株式会社Ｇｒｅｅｎ Ｓｍｉｌｅ (NTA register). The site also advertises a monthly cooking event, “みくり 桑 お料理会”.',
      philosophy: 'Local produce for local tables (地産地消), mainly Kinki ingredients; attention to oil and breadcrumbs (official site; July 2026).', specialty: 'Rare-fried horse mackerel; crab-cream croquette; menchi katsu.',
      anecdotes: [
        { text: 'A July 2026 lunch guest noted that the fries are cooked slowly at low temperature after ordering, so each takes about 15 minutes.', source: R + 'B531467997/' },
        { text: 'A July 2026 breakfast guest was shown the clay-pot rice before it steamed, then had a run of dishes during the 10-minute wait.', source: R + 'B531511516/' },
      ],
      japanese_sources_summary: '公式サイト: 京都フライ割烹 みくり 桑 (みくり くわ)、四条烏丸の路地奥、和食だけでなくフレンチやカニ旅館など様々な経験を積んだシェフ、旬の料理と名物フライをコースで、地産地消、京丹波高原豚、八鹿豚、舞鶴漁港の鮮魚、白中心のナチュールワイン、新政や王祿などの日本酒、2階に個室、朝ごはんは土日のみ2部制 (8時30分〜、10時〜)、要予約3,980円、アゴーラホテルと提携、ランチは事前予約のみ、名物のレアアジフライやヘレカツ、松葉ガニのコース、毎月の「みくり 桑 お料理会」、年末年始のテイクアウト (せこ蟹3,300円、鯖寿司3,800円など)。食べログ: 揚げ物・とんかつ・かに、中京区西洞院通り六角下がる池須町419-6、火は夜のみ、水〜土は昼夜、日・祝は昼のみ、月曜・日曜夜・第3日曜休み、カード・楽天ペイ可、16席 (1階カウンター8、2階テーブル8)、1階は加熱式たばこのみ可、靴を脱いで上がる、子ども可、2024年7月11日オープン、適格請求書 T9130001059304 (株式会社Ｇｒｅｅｎ Ｓｍｉｌｅ)。口コミ (2026年、英語): フライ割烹、八鹿豚のメンチカツ定食1,650円、レアアジフライ、カニクリームコロッケ、22,000円のコース、昼の定食は現金のみ。',
      confidence: 'medium', sources: [SITE, TB, 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=9130001059304', R + 'B529766819/', R + 'B529833167/', R + 'B530569471/', R + 'B531467997/', R + 'B531511516/', R + 'B532116211/', R + 'B532352127/', R + 'B532713362/', R + 'B535709666/', R + 'B536063914/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Shoes off; lunch by reservation and set lunches cash only. Families welcome upstairs; walk-in foreign families have been seated upstairs (July 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区西洞院通り六角下がる池須町419-6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with New Year notices; Tabelog reviews through September 2026.' },
    pin_source: `Tabelog ${TB} (35.006529, 135.754755); cross-checked: GSI 京都府京都市中京区池須町419番地 (lot) 34m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [SITE, R + 'B529833167/', R + 'B532116211/'],
    price_note: 'Breakfast and take-away prices from the official site; lunch and dinner prices from June–July 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Yoka-pork menchi katsu set (rice, miso soup, salad)', '¥1,650', 'Lunch', 'no', 'no', 'June 2026; cash only at lunch.', 'menchi_set'),
      it('', '', 'MICURI Ultimate Course', '¥22,000', 'Courses', 'no', 'no', 'July 2026.', 'ultimate_course'),
      it('', '', 'Weekend breakfast mini-course', '¥3,980', 'Breakfast', 'no', 'no', 'Official site; reservation.', 'breakfast'),
      it('レアアジフライ', '', 'Rare-fried horse mackerel', '', 'Signature', 'no', 'no', 'Official site.', 'rare_aji_fry'),
      it('せこ蟹', '', 'Seko crab (New Year take-away)', '¥3,300', 'Take-away', 'ask', 'no', 'Official site.', 'seko_kani'),
    ] }, {
    cuisine: '「京都フライ割烹」: 和食、フレンチ、カニ旅館などで経験を積んだシェフの旬の料理と名物フライのコース。京丹波高原豚、八鹿豚、舞鶴漁港の鮮魚など近畿の食材 (公式サイト)・名物のレアアジフライ、ヘレカツ、カニクリームコロッケ、メンチカツ、和牛カツ (公式サイト、2026年の口コミ)・昼: 八鹿豚のメンチカツ定食1,650円 (ご飯、味噌汁、サラダ付き) (2026年6月)、アジフライととんかつの5,500円の昼 (2026年6月)・夜: 「MICURI Ultimate Course」22,000円、造り、鱧と松茸の椀、海老のすり身のパン揚げ、近江牛、鮑 (2026年7月)、八寸、のどぐろ、白いか (2026年9月)・朝ごはん: 土鍋ご飯、賀茂なす、造り、だし巻き、おばんざい、味噌汁、メンチカツ (2026年7月)・山椒入りの自家製ソース、たくあん入りのタルタル (2026年7月)・白中心のナチュールワイン、新政や王祿などの日本酒、ウイスキー、飲み放題プラン (公式サイト、2026年9月)・季節の松葉ガニのコース (公式サイト)',
    neighborhood: '六角の南、西洞院通の路地奥。四条駅から徒歩9分',
    gf_detail: 'グルテンフリーではない。フライの割烹。パン粉の魚のフライ、メンチカツ、とんかつ、和牛カツ、カニクリームコロッケ、海老のすり身のパン揚げ、自家製ソース (公式サイト、2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。魚、蟹、豚、牛のコースに出汁の椀 (公式サイト、2026年の口コミ)。',
    notes: '[フライ割烹・西洞院六角、路地のカウンター] 靴を脱いで上がる路地奥の小さな家。レアアジフライ、ヘレカツ、カニクリームコロッケ、近畿の豚のメンチカツを注文後にじっくり揚げ、造りや季節の料理と一緒に。昼の定食は1,650円から (現金のみ)、夜のコースは22,000円まで、ナチュールワインや希少な日本酒も。土日は旅館の朝食のような朝ごはん。予約がおすすめ。ワインと和食 みくりの姉妹店。',
  });
}

// ================================================================ こけこっこ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26002070/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.koke-kokko.jp/kyoto/'
  const H = day(['11:00', '23:00']);
  put({
    id: 'kyoto_kokekokko_isetan', name: 'こけこっこ (Kokekokko)', category: 'OMNI',
    lat: 34.986197, lng: 135.758291, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Charcoal yakitori with salt or tare, chicken rice bowls, tororo rice, yuba with sweet soy sauce; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a yakitori restaurant; lunch sets with chicken and egg (2026 reviews).',
    hours_raw: '11:00–23:00 (L.O. 22:00), lunch to 16:00; irregular closures (Tabelog). Reservations accepted; advised at lunch (October 2026). Dinner table charge ¥330, free for children up to 6 and not added to free-drink courses (Tabelog, original ディナーのみテーブルチャージ料として330円(税込)頂戴いたします。(6歳まで無料/飲み放題付きコースは除く)). Cards and many QR codes; no e-money (Tabelog). 70 seats at tables and a counter (Tabelog). Non-smoking; sommelier; children welcome (Tabelog). Views of Kyoto Tower and the city at night (October 2026). JR Kyoto Isetan 10F, directly connected to Kyoto Station (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kyoto Station, JR Kyoto Isetan 10F',
    cuisine: 'Binchotan-grilled yakitori (2026 reviews) · lunch: charcoal-grilled chicken and tororo gozen with pickles, aosa miso soup and matcha warabi mochi, rice refills (November 2026); charcoal chicken and egg rice bowl with yuba and matcha warabi mochi (September 2026); a ¥3,700 lunch course with salad, small dishes, six skewers and a drink (October 2026) · dinner: Oyadori course of eight grilled items — breast, thigh, liver, gizzard, pork, wings, cherry tomato, tsukune (September 2026) · à la carte: tsukune ¥400, liver ¥450, negima ¥450, skin ¥450, yuba with sweet soy ¥800, bonjiri, outside skirt, chilled tomato (October 2026) · draft beer ¥700, Kuro Kirishima shochu ¥660, sake of the day (2026)',
    website: SITE, gmaps: gm('こけこっこ 京都伊勢丹 10F'), menu_url: null,
    notes: '[Yakitori · Kyoto Station, Isetan 10F with a tower view] A 70-seat charcoal yakitori room on the restaurant floor of JR Kyoto Isetan, with windows on Kyoto Tower and the night city — handy before a Shinkansen. Lunch sets of charcoal chicken with tororo or an oyakodon-style bowl; at night skewers at about ¥400–450 each or the Oyadori course. ¥330 table charge at dinner. Prices run a little high; busy with tourists.',
    chef_bio: { chef_name: null, roles: ['Kitchen (unnamed)'], origin: null,
      background: 'No operator or chef is named in the sources opened. Reviewers praise attentive staff (September 2026). An October 2026 diner on a business trip found service slow, the course skewers brought two at a time, and the neighbouring tourist group loud.',
      philosophy: null, specialty: 'Binchotan yakitori; charcoal chicken lunch sets.',
      anecdotes: [
        { text: 'A September 2026 diner waited 20 minutes over edamame before the eight Oyadori skewers arrived, anxious about the Shinkansen.', source: R + 'B536310046/' },
        { text: 'An October 2026 lunch guest mistook the white dessert for tofu with yuzu before finding it was a milk pudding.', source: R + 'B537709095/' },
      ],
      japanese_sources_summary: '食べログ: こけこっこ、居酒屋・ステーキ・焼き鳥、下京区烏丸通塩小路下ル東塩小路町901 ジェイアール京都伊勢丹10F、京都駅直結、11:00〜23:00 (L.O.22:00)、不定休、予約可、ディナーのみテーブルチャージ330円 (6歳まで無料、飲み放題付きコースは除く)、カード・QR決済可、70席、禁煙、ソムリエ、子ども可。口コミ (2026年、英語): 備長炭の焼き鳥、炭火焼き鶏ととろろの御膳、親子丼風の丼、昼のコース3,700円、Oyadori コース、串1本400〜450円、湯葉800円、京都タワーと夜景、やや高め、海外の客が多い。',
      confidence: 'medium', sources: [TB, SITE, R + 'B536289999/', R + 'B536310046/', R + 'B536600555/', R + 'B536790633/', R + 'B537203809/', R + 'B537377236/', R + 'B537584606/', R + 'B537709095/', R + 'B537826550/', R + 'B538453580/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Department-store restaurant by the station; many foreign visitors (October 2026). ¥330 table charge at dinner.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区烏丸通塩小路下ル東塩小路町901 ジェイアール京都伊勢丹 10F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (34.986197, 135.758291); cross-checked: GSI 京都府京都市下京区東塩小路町901番地 (lot) 22m; 16m from kyoto_saikyo_yaki_yamaroku, no offset needed; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537377236/', R + 'B537203809/'],
    price_note: 'Prices from October 2026 reviews; table charge from Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Lunch course (six skewers, drink)', '¥3,700', 'Lunch', 'ask', 'no', 'October 2026.', 'lunch_course'),
      it('', '', 'Tsukune skewer', '¥400', 'Yakitori', 'ask', 'no', 'October 2026.', 'tsukune'),
      it('', '', 'Negima skewer', '¥450', 'Yakitori', 'ask', 'no', 'October 2026.', 'negima'),
      it('', '', 'Yuba with sweet soy sauce', '¥800', 'À la carte', 'ask', 'ask', 'October 2026.', 'yuba'),
      it('', '', 'Dinner table charge', '¥330', 'Charges', '', '', 'Tabelog.', 'table_charge'),
    ] }, {
    cuisine: '備長炭の焼き鳥 (2026年の口コミ)・昼: 炭火焼き鶏ととろろの御膳、漬物、あおさの味噌汁、抹茶わらび餅、ご飯おかわり可 (2026年11月)、炭火焼き鶏と卵の丼に湯葉と抹茶わらび餅 (2026年9月)、サラダ、小鉢、串6本、ドリンク付きの3,700円の昼のコース (2026年10月)・夜: Oyadori コースの焼き物8種 (むね、もも、レバー、砂肝、豚、手羽、ミニトマト、つくね) (2026年9月)・一品: つくね400円、レバー450円、ねぎま450円、皮450円、湯葉の甘醤油800円、ぼんじり、ハラミ、冷やしトマト (2026年10月)・生ビール700円、黒霧島660円、本日の日本酒 (2026年)',
    neighborhood: '京都駅、ジェイアール京都伊勢丹10F',
    gf_detail: '要確認。塩かたれの炭火焼き鳥、鶏の丼、とろろご飯、湯葉の甘醤油。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。焼き鳥の店。昼のセットも鶏と卵 (2026年の口コミ)。',
    notes: '[焼き鳥・京都駅、伊勢丹10Fから京都タワー] ジェイアール京都伊勢丹のレストランフロアにある70席の炭火焼き鳥。京都タワーと夜景が見え、新幹線の前にも便利。昼は炭火焼き鶏ととろろや卵の丼のセット、夜は1本400〜450円ほどの串かOyadori コース。夜はテーブルチャージ330円。やや高め、観光客で混む。',
  });
}

// ================================================================ Roji-oku
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26034554/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://rmeet-kyoto.com/';
  const H = day(['11:30', '15:00'], ['17:30', '24:00']);
  put({
    id: 'kyoto_roji_oku_shijo', name: 'Roji-oku (ロジオク)', category: 'OMNI',
    lat: 35.001637, lng: 135.757383, cuisine_type: 'yoshoku',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Roast beef with red-wine or garlic-soy sauce, hamburg steak with demi-glace, beef cutlet, shrimp tempura, curry, pasta; bread with lunch; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a roast-beef bistro; consommé soup with the set lunches (2026 reviews).',
    hours_raw: 'Lunch 11:30–15:00 (L.O. 14:30), dinner 17:30–24:00 (L.O. 23:00); closed Wednesday, with Wednesday banquets for about 20 or more on request (Tabelog). Reservations accepted; dinner often fully booked (October 2026). Corkage for brought-in cakes and drinks (Tabelog). Cards, IC, iD, QUICPay and QR codes (Tabelog). 50 seats; private rooms from 4 to over 30 (up to 64 seated), secured for 16 or more at ¥7,000 a head; projector; wheelchair accessible; non-smoking with a smoking spot outside (Tabelog). Children welcome, kids’ menu (Tabelog). Down an alley behind an apartment building on Bukkoji, 5 min from Shijo / Karasuma Stns exit 26 (Tabelog; October 2026). Opened 10 August 2020 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Alley off Bukkoji west of Karasuma — 5 min from Shijo Stn',
    cuisine: 'Casual creative yoshoku with roast beef as the main dish (company site; 2026 reviews) · roast beef set with salad, soup and bread, slices about 7 mm thick with wasabi (October 2026) · roast beef and hamburg steak set ¥2,700 with hot consommé (October 2026) · roast beef from Hirai beef, with original red-wine sauce or Japanese garlic soy sauce (October 2026) · beef cutlet; curry; shrimp tempura and sweet-potato salad on the lunch set (October 2026) · weekday lunch specials, e.g. pork loin omelette with chicken soboro and yuzu-pepper cream, hamo and summer vegetable escabeche (June 2026) · ¥6,000 free-drink banquet course with appetizers, pasta and roast beef (October 2026)',
    website: SITE, gmaps: gm('Roji-oku 京都 仏光寺'), menu_url: null,
    notes: '[Roast beef bistro · down an alley near Shijo Karasuma] True to its name (“the back of the alley”), a stylish bistro bar hidden behind an apartment block on Bukkoji, built around thick-cut roast beef with red-wine or garlic-soy sauce. Lunch sets around ¥2,000–2,700 (roast beef, hamburg, beef cutlet); evenings run to midnight with courses and big private rooms for parties. Dinner books out. Closed Wednesdays.',
    chef_bio: { chef_name: '井上 剛', roles: ['Representative of 合同会社Rミート, the operating company'], origin: null,
      background: 'The company site of 合同会社Rミート (Rmeet) names 井上 剛 as representative and calls Roji-oku the company’s founding shop, opened during the pandemic, with roast beef as its main dish; the “R” stands for Roji-oku, roast beef and royal. Tabelog gives an Inoue mobile number for Wednesday banquet enquiries. Whether the representative cooks is not stated.',
      philosophy: '“Keep doing the obvious things properly”; creating new menus throughout the pandemic (company site).', specialty: 'Roast beef.',
      anecdotes: [
        { text: 'An October 2026 diner came back within the month with the diner’s wife, this time for the beef cutlet.', source: R + 'B536835247/' },
        { text: 'A 21-person workplace alumni party booked a semi-private room for the ¥6,000 free-drink course (October 2026).', source: R + 'B538429270/' },
      ],
      japanese_sources_summary: '合同会社Rミートのサイト: 代表 井上 剛、創業の地ロジオク、メインディッシュのローストビーフ、R はロジオク、ローストビーフ、ロイヤルの頭文字、コロナ禍に誕生、「気軽に愉しめるカジュアル創作洋食」。食べログ: Roji-oku、ビストロ・バル・洋食、下京区糸屋町215-1 ブローディア仏光寺1F、四条駅・烏丸駅26番出口から徒歩5分、昼11:30〜15:00 (L.O.14:30)、夜17:30〜24:00 (L.O.23:00)、水曜定休 (20名ほどからの宴会は相談可)、ケーキや飲み物の持ち込みは持ち込み料、カード・電子マネー・QR可、50席、個室あり (最大64名)、車椅子可、子ども可、2020年8月10日オープン、適格請求書 T2130003007903。口コミ (2026年、英語): 厚切りのローストビーフ、ハンバーグとのセット2,700円、牛カツ、海老天、6,000円の飲み放題コース、夜は満席が多い。',
      confidence: 'medium', sources: [SITE, TB, R + 'B530500399/', R + 'B536835247/', R + 'B537052794/', R + 'B537321135/', R + 'B537326193/', R + 'B537496815/', R + 'B537634226/', R + 'B537701789/', R + 'B538429270/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Casual bistro; set lunches; large private rooms for groups.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区糸屋町215-1 ブローディア仏光寺 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.001637, 135.757383); cross-checked: GSI 京都府京都市下京区糸屋町215番地 (lot) 15m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536835247/', R + 'B538429270/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Roast beef and hamburg steak lunch set', '¥2,700', 'Lunch', 'ask', 'no', 'October 2026.', 'roastbeef_hamburg'),
      it('', '', 'Roast beef set (salad, soup, bread)', '', 'Lunch', 'no', 'no', 'October 2026.', 'roastbeef_set'),
      it('', '', 'Free-drink banquet course', '¥6,000', 'Courses', 'ask', 'no', 'October 2026.', 'banquet'),
    ] }, {
    cuisine: 'ローストビーフをメインにした気軽な創作洋食 (会社サイト、2026年の口コミ)・サラダ、スープ、パンのローストビーフ定食、厚さ7mmほどにわさびを添えて (2026年10月)・ローストビーフとハンバーグのセット2,700円、熱々のコンソメ (2026年10月)・Hirai 牛のローストビーフ、赤ワインのソースか和風のにんにく醤油 (2026年10月)・牛カツ、カレー、昼のセットの海老天とさつまいものサラダ (2026年10月)・平日の日替わり、鶏そぼろと柚子胡椒クリームの豚ロースのオムレツ、鱧と夏野菜のエスカベッシュなど (2026年6月)・前菜、パスタ、ローストビーフの6,000円の飲み放題コース (2026年10月)',
    neighborhood: '烏丸の西、仏光寺通の路地奥。四条駅から徒歩5分',
    gf_detail: '要確認。赤ワインかにんにく醤油のソースのローストビーフ、デミグラスのハンバーグ、牛カツ、海老天、カレー、パスタ、昼はパン付き。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。ローストビーフのビストロ。昼のセットにはコンソメ (2026年の口コミ)。',
    notes: '[ローストビーフのビストロ・四条烏丸の路地奥] 名前のとおり仏光寺通のマンションの奥の路地にある、おしゃれなビストロバル。看板は赤ワインかにんにく醤油の厚切りローストビーフ。昼は2,000〜2,700円ほどのセット (ローストビーフ、ハンバーグ、牛カツ)、夜は24時までコースと大人数の個室も。夜は満席が多い。水曜休み。',
  });
}

save();
