// Kyoto priority (kyoto-missed), worker osw13, batch 66 — lane: Tabelog id mod 6 = 0.
// Core: CHANDER 丸太町店, 鉄板焼 二条 (ANA Crowne Plaza). Notable: 松山閣 松山 JR京都伊勢丹店, 三木鶏卵.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-66');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26005140', 'large parent: スパイシー 熊野神社店 is a Curry House Spicy shop run by 株式会社スパイシークリエイト (spicy-create.com footer), whose site recruits through kozohd-job.net (the 小僧寿し group, Kozo Holdings); sister shops in Abeno (Apollo bldg) and Tsukashin plus an Italian buffet, San Marco; an August 2025 Tabelog reviewer also calls it "a curry concept from Kozosushi" (B506805019). Sub-brand of a large parent → chain (Greg ruling 2026-11-05)');
skip('26030406', 'large parent: 宮崎酒場ゑびす 京都ポルタ店 is run by 株式会社ZIPANGU, which also runs franchise shops of 神座, 味味香 and 築地孫右衛門 (r-agent.com company d2114); sister shops at LUCUA 1100 in Umeda. Large parent → chain (Greg ruling 2026-11-05)');
skip('26025678', 'chain: MACCHA HOUSE 抹茶館 is a Create Restaurants brand with shops in Kyoto (Kawaramachi, Sannenzaka), Osaka (Namba Walk), Chiba (Shisui outlets), Saitama (Iruma), Shiga (MOP Ryuo), Tokyo (Asakusa) and Nagano (Zenkoji) per ryutsuu.biz and listings; 5+ same-name = chain (Greg ruling 2026-11-05)');
skip('26027136', 'brand already in data: 初代 麺家 あくた川 is the same iekei ramen brand 麺家 あくた川 as 総代 麺家 あくた川, already in kyoto.json as kyr_sodai_menya_akutagawa; a brand already in data → skip its other same-concept branches (Greg ruling 2026-11-05)');

// ================================================================ CHANDER 丸太町店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26023290/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '15:00'], ['17:00', '23:00']);
  put({
    id: 'kyoto_chander_marutamachi', name: 'チャンダー 丸太町店 (CHANDER Marutamachi)', category: 'OMNI',
    lat: 35.01723, lng: 135.777935, cuisine_type: 'curry',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: naan-led sets; samosas; rice and biryani exist, but a shared tandoor and fryer are likely — no allergen information in the sources (2022–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask: Tabelog lists vegetarian options and a vegetable set with two vegetable curries (2022–2023), but ghee, cream and cheese are not ruled out.',
    hours_raw: 'Tabelog: daily 11:00–15:00 and 17:00–23:00; hours may change. Basement of the Palestate Nissei building, across the road from Kumano Shrine. 35 seats, about eight tables for four (2022–2023 reviews); private hire possible. Tabelog lists smoking as allowed (check on arrival). No e-money or QR; cards not listed — one diner saw no card signs and paid cash (October 2022). Spice level 1–5 chosen when ordering.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kumano Shrine, Higashiyama-Marutamachi — 529 m from Jingu-Marutamachi Stn',
    cuisine: 'Indian curry sets with large naan, run by Indian staff (2022–2026 reviews) · lunch sets with a choice from five or more curries, naan and rice, salad and a drink (chai or lassi); a Lurki set with tandoori chicken, seafood and spinach curries ¥1,460 (July 2023); "D" lunch with chicken tikka ¥1,280 (October 2022); naan-curry set ¥850 (April 2022); vegetable set with samosas (2022–2023) · twelve naans to upgrade to, cheese naan +¥320 (October 2022); chicken biryani (March 2026) · spice level 1–5; leftover naan can be taken home (June 2023); all-you-can-eat naan for students (March 2026)',
    website: null, gmaps: gm('CHANDER 丸太町店 聖護院山王町'), menu_url: null,
    notes: '[Indian · Kumano Shrine, big naan and student lunches] A basement Indian restaurant across from Kumano Shrine, packed with students at lunch: curry sets with huge naan (the cheese naan is the favourite), biryani, a five-step spice scale and free naan refills for students. Food can be slow at peak (2022); one diner suspected the fancier naans were never made (October 2022). One of at least three Chander shops in Kyoto.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Reviewers from 2019 to 2026 describe a half-basement room with Ganesha decorations, Indian staff who speak fluent Japanese and talk among themselves in another language, a manager who asks whether the food was spicy enough, and a lunch crowd of students. Other Chander shops are listed by Tabelog near Kitayama Station and in front of Kyoto University\'s main gate.',
      philosophy: null,
      specialty: 'Cheese naan; curry lunch sets.',
      anecdotes: [
        { text: 'October 2022: asked for fruit naan, "they informed me that it was sold out, but they had cheese and butter naan available… I suspected that they might not have prepared the less popular items."', source: R + 'B455407235/' },
        { text: 'March 2026: "The cheerful Indian staff welcomed me and helped me navigate through the extensive menu with their fluent Japanese," and a lassi came free.', source: R + 'B524374319/' },
        { text: 'June 2022: a diner had stayed away "because I heard it took a long time for the food to arrive."', source: R + 'B451003281/' },
      ],
      japanese_sources_summary: '食べログ: CHANDER 丸太町店、インド料理、左京区聖護院山王町43-2 パレステート日生ビル B1F、市バス熊野神社前、神宮丸太町駅から529m、毎日 11:00〜15:00・17:00〜23:00、35席、貸切可、喫煙可、電子マネー・QR不可、ベジタリアン対応。口コミ (2019年11月〜2026年3月、英語): 熊野神社の向かいの半地下、ガネーシャの飾り、インド人のスタッフ、テーブル4人席が8つほど、辛さは5段階、ナンカレーセット850円 (2022年)、ポークサグ1,020円、Dランチ1,280円、Lurki セット1,460円 (2023年)、野菜セットとサモサ、チーズナンは+320円、ナンは12種類、チキンビリヤニ、学生はナン食べ放題、昼は学生で混む、ナンが大きく持ち帰りも可、料理が出るのが遅いという噂、フルーツナンは品切れと言われたという声、カードの表示がなく現金で払ったという声。',
      confidence: 'medium', sources: [TB, R + 'B421452223/', R + 'B447799134/', R + 'B451003281/', R + 'B454637856/', R + 'B455407235/', R + 'B467084052/', R + 'B484183149/', R + 'B487246560/', R + 'B524374319/', R + 'B537753331/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Indian staff with fluent Japanese; choose a spice level 1–5.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区聖護院山王町43-2 パレステート日生ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through March 2026.' },
    pin_source: `Tabelog ${TB} (35.017230, 135.777935); cross-checked: GSI 京都府京都市左京区聖護院山王町43番地 (lot) 37m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B455407235/', R + 'B447799134/'],
    price_note: 'Prices from 2022–2023 reviews; may have changed.', last_checked: TODAY, items: [
      it('', '', 'Lurki set (tandoori chicken, two curries, naan or rice, drink)', '¥1,460', 'Lunch', 'no', 'no', 'July 2023.', 'curry'),
      it('', '', 'D lunch (curry, naan, rice, chicken tikka, drink)', '¥1,280', 'Lunch', 'no', 'no', 'October 2022.', 'curry'),
      it('', '', 'Cheese naan (upgrade)', '+¥320', 'Naan', 'no', 'no', 'October 2022.', 'naan'),
    ] }, {
    cuisine: 'インド人のスタッフが出す大きなナンのインドカレーのセット (2022〜2026年の口コミ)・5種以上から選ぶカレーにナンとライス、サラダ、チャイかラッシーのランチセット。タンドリーチキンとシーフード・ほうれん草のカレーのLurki セット1,460円 (2023年7月)、チキンティッカ付きのDランチ1,280円 (2022年10月)、ナンカレーセット850円 (2022年4月)、サモサ付きの野菜セット (2022〜2023年)・12種類のナンに変更でき、チーズナンは+320円 (2022年10月)。チキンビリヤニ (2026年3月)・辛さは1〜5、残ったナンは持ち帰り可 (2023年6月)、学生はナン食べ放題 (2026年3月)',
    neighborhood: '熊野神社、東山丸太町。神宮丸太町駅から529m',
    gf_detail: 'グルテンフリーではない: ナンが中心のセット、サモサ。ライスやビリヤニもあるが、タンドールや揚げ油は共用とみられ、アレルゲンの情報はない (2022〜2026年の口コミ)。',
    vegan_detail: '要確認: 食べログではベジタリアン対応、野菜カレー2種の野菜セットも (2022〜2023年)。ギー、クリーム、チーズの有無は不明。',
    notes: '[インド料理・熊野神社、大きなナンと学生のランチ] 熊野神社の向かいの地下にあるインド料理店で、昼は学生でいっぱい。大きなナン (人気はチーズナン) のカレーセット、ビリヤニ、5段階の辛さ、学生はナンのおかわり自由。混む時間は料理が遅いことも (2022年)。変わり種のナンは用意していないのではという声も (2022年10月)。京都に少なくとも3店あるチャンダーの一つ。',
  });
}

// ================================================================ 鉄板焼 二条 (ANA Crowne Plaza Kyoto)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26001162/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.anacpkyoto.com/restaurant/nijo/';
  const L = ['11:30', '15:00'], D = ['17:00', '21:30']; const H = day(L, D);
  put({
    id: 'kyoto_teppanyaki_nijo_anacp', name: '鉄板焼 二条 (Teppanyaki Nijo, ANA Crowne Plaza Kyoto)', category: 'OMNI',
    lat: 35.012595, lng: 135.752955, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: teppan beef, seafood and vegetables, but soy sauce, ponzu and miso are among the steak condiments (July 2018) and garlic rice is cooked on the same plate; no allergen information in the sources.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef, foie gras and seafood courses (2018–2026 reviews).',
    hours_raw: 'Tabelog and hotel site: lunch 11:30–15:00 (last order 14:30), dinner 17:00–21:30 (last order 21:00); closed Wednesday, open when Wednesday is a public holiday. Booking advised. Service charge 10%, no cover charge — Tabelog, Japanese original 「サービス料10%、チャージ料なし」. 19 seats: a 13-seat counter and one private room for 6. Non-smoking; English menu; birthday plates; cards (Visa, Master, JCB, AMEX, Diners), QUICPay, PayPay. Hotel parking (4 hours free when dining); shuttle bus from Kyoto Station. Opened 25 June 1986 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nijo Castle — basement of the ANA Crowne Plaza Kyoto, 1 min walk from Nijojo-mae Stn exit 2',
    cuisine: 'Old-school hotel teppanyaki at a counter, without the showmanship (2018–2026 reviews) · lunch courses named for nearby streets — "Oike" with foie gras steak, seafood of the day and 100 g domestic beef fillet (¥5,300 via Ikkyu, October 2021), "Horikawa" A with the fillet (¥5,464 incl. tax, July 2018), "Mibu" seafood and 100 g fillet ¥6,655 (July 2022) · abalone and black-haired wagyu upgrades; garlic rice instead of plain rice with red miso soup; white fish with tomato-basil sauce (2018–2025 reviews) · Chen Kentaro\'s mapo tofu from the hotel\'s Sichuan restaurant as a +¥900 add-on (July 2022) · dinner from about ¥15,000–20,000 a head (2022–2026 reviews)',
    website: SITE, gmaps: gm('鉄板焼 二条 ANAクラウンプラザホテル京都'), menu_url: SITE,
    notes: '[Teppanyaki · Nijo Castle, a 1986 hotel counter] The ANA Crowne Plaza\'s basement teppanyaki counter since 1986: foie gras, the day\'s seafood and domestic beef fillet grilled in front of you, garlic rice to finish — a quiet, unflashy family-celebration place with lunch courses far cheaper than dinner. One diner found the dishes other than the meat forgettable (September 2022); another wished the chef said where the abalone and beef came from (June 2026). 10% service charge. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Not named in a source; restaurant of the ANA Crowne Plaza Kyoto'], origin: null,
      background: 'Opened 25 June 1986 in the basement of the hotel by Nijo Castle (Tabelog). Reviewers from 2017 to 2026 describe a spacious counter where the chef cooks and chats, a family that has marked birthdays here for years with special plates, and a "traditional" teppan style without flambé or show.',
      philosophy: null,
      specialty: 'Domestic beef fillet; garlic rice.',
      anecdotes: [
        { text: 'July 2022: "If you\'re looking for a flashy Teppan-yaki, look elsewhere" — the reviewer came for "the traditional Teppan-yaki style that is slowly fading away."', source: R + 'B451279780/' },
        { text: '"For years, it has been our family\'s go-to place for celebrations, including birthdays where they always prepare a special plate for us." — December 2018.', source: R + 'B518334532/' },
        { text: 'September 2022: "delicious meat, but unfortunately, the other dishes didn\'t leave a lasting impression."', source: R + 'B506951090/' },
        { text: 'June 2026: "I would have loved more information about the ingredients… For example, where the abalone and meat are sourced from."', source: R + 'B530154645/' },
      ],
      japanese_sources_summary: '食べログ: 二条、鉄板焼・ステーキ、中京区堀川通二条下ル土橋町10 ANAクラウンプラザホテル京都 B1F、二条城前駅2番出口から徒歩約1分、11:30〜15:00 (L.O. 14:30)・17:00〜21:30 (L.O. 21:00)、水曜休み (祝日は営業)、原文で「サービス料10%、チャージ料なし」、19席 (カウンター13席、6名の個室1室)、禁煙、英語メニュー、カード・QUICPay・PayPay可、ホテル駐車場、京都駅からシャトルバス、1986年6月25日オープン。ホテルの公式サイト: 鉄板焼 二条、水曜定休 (祝日を除く)。口コミ (2017年6月〜2026年6月、英語): 御池・堀川・壬生のランチコース、フォアグラのステーキ、本日の魚介、国産牛フィレ100g、焼野菜、ガーリックライスと赤だし、白身魚のトマトバジルソース、あわびと黒毛和牛への変更、隣の四川料理店の Chen Kentaro の麻婆豆腐 (+900円)、誕生日のプレート、派手さのない昔ながらの鉄板焼、肉以外は印象に残らないという声、食材の産地の説明がほしいという声。',
      confidence: 'medium', sources: [SITE, TB, R + 'B366120633/', R + 'B431058391/', R + 'B451279780/', R + 'B462995206/', R + 'B505913056/', R + 'B506951090/', R + 'B518334532/', R + 'B530154645/'] },
    cultural_comfort: { level: 'english', note: 'Hotel restaurant; English menu; 10% service charge.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区堀川通二条下ル土橋町10 ANAクラウンプラザホテル京都 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through June 2026; hotel site lists it.' },
    pin_source: `Tabelog ${TB} (35.012595, 135.752955); cross-checked: GSI 京都府京都市中京区土橋町10番地 (lot) 51m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B451279780/', R + 'B366120633/'],
    price_note: 'Lunch prices from 2018–2022 reviews; may have changed.', last_checked: TODAY, items: [
      it('', '', '"Mibu" seafood and steak lunch (100 g domestic beef fillet)', '¥6,655', 'Lunch', 'ask', 'no', 'July 2022, tax included.', 'teppanyaki'),
      it('', '', 'Mapo tofu add-on (Chen Kentaro)', '+¥900', 'Lunch', 'no', 'no', 'July 2022.', 'mapo_tofu'),
    ] }, {
    cuisine: 'カウンターで焼く派手さのない昔ながらのホテルの鉄板焼 (2018〜2026年の口コミ)・近くの通りの名のランチコース。フォアグラのステーキ、本日の魚介、国産牛フィレ100gの「御池」(一休で5,300円、2021年10月)、フィレの「堀川」A (税込5,464円、2018年7月)、魚介とフィレ100gの「壬生」6,655円 (2022年7月)・あわびや黒毛和牛への変更、ご飯と赤だしはガーリックライスに変更可、白身魚のトマトバジルソース (2018〜2025年の口コミ)・ホテルの四川料理店の Chen Kentaro の麻婆豆腐を+900円で (2022年7月)・夜は1人15,000〜20,000円ほど (2022〜2026年の口コミ)',
    neighborhood: '二条城。ANAクラウンプラザホテル京都の地下、二条城前駅2番出口から徒歩1分',
    gf_detail: '要確認: 鉄板で焼く牛肉、魚介、野菜だが、ステーキの薬味に醤油、ポン酢、味噌があり (2018年7月)、ガーリックライスも同じ鉄板で焼く。アレルゲンの情報はない。',
    vegan_detail: 'ヴィーガン不可: 牛肉、フォアグラ、魚介のコース (2018〜2026年の口コミ)。',
    notes: '[鉄板焼・二条城、1986年からのホテルのカウンター] ANAクラウンプラザの地下で1986年から続く鉄板焼のカウンター。フォアグラ、本日の魚介、国産牛フィレを目の前で焼き、締めはガーリックライス。派手さのない落ち着いた店で、家族のお祝いの定番。ランチのコースは夜よりずっと手頃。肉以外の料理は印象に残らなかったという声 (2022年9月) や、あわびや牛肉の産地を説明してほしかったという声 (2026年6月) も。サービス料10%。水曜休み。',
  });
}

// ================================================================ 松山閣 松山 JR京都伊勢丹店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26000784/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '22:00']);
  put({
    id: 'kyoto_shozankaku_matsuyama_isetan', name: '京料理・本家生ゆば料理 松山閣 松山 JR京都伊勢丹店 (Shozankaku Matsuyama, JR Kyoto Isetan)', category: 'OMNI',
    lat: 34.985852, lng: 135.757424, cuisine_type: 'tofu',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: Tabelog says allergy information is available; yuba and soy milk are naturally wheat-free, but yuba tempura, fu and ponzu are on the courses (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi throughout; sashimi, fish, shrimp and conger eel in the courses (2026 reviews).',
    hours_raw: 'Tabelog: daily 11:00–22:00 (last order 21:15); closed on JR Kyoto Isetan\'s closing days. Reservations taken (private rooms by phone); seating about 2 hours. No service charge — Tabelog, Japanese original 「無」. 42 seats; private rooms for 8 and for 10–20; non-smoking; wheelchair accessible; English menu with photos; allergy information available; children welcome with a kids\' menu. Cards (Visa, Master, JCB, AMEX, Diners, UnionPay); no e-money or QR. On the 11th floor of JR Kyoto Isetan, with views of Kyoto Tower and the mountains (2026 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kyoto Station — JR Kyoto Isetan 11F, 1 min walk from JR Kyoto Stn',
    cuisine: 'Yuba kaiseki from a Kyoto yuba house, in the station department store (2026 reviews) · the signature homemade yuba served warm in a wooden tub ("yuba-oke") with ponzu, with the soy milk to drink (2026 reviews) · seasonal Kyo bento with the yuba tub ¥4,070: yuba, ginkgo tofu, rolled omelette, simmered dishes, mushroom rice with refills, yuba baumkuchen (October 2026); "Miyabi" course ¥5,500 (September 2026); "Sakae" kaiseki with matsutake dobin-mushi, grilled Spanish mackerel and lotus-root manju (October 2026) · à la carte yuba sashimi, yuba tempura, tofu dengaku (October 2026) · a range of Kyoto sake (2026 reviews)',
    website: null, gmaps: gm('松山閣 松山 JR京都伊勢丹'), menu_url: null,
    notes: '[Yuba kaiseki · Kyoto Station Isetan 11F, warm yuba in a tub] The station branch of a Kyoto yuba-cuisine house: warm, freshly made yuba scooped from a wooden tub with ponzu, yuba sashimi and tempura, and seasonal courses, with a view toward Kyoto Tower — convenient before a train. Diners in 2026 praise the yuba; some found the service stiff or harried (September and October 2026) and one found the seasoning salty (October 2026). No service charge.',
    chef_bio: { chef_name: null, roles: ['Not named in a source; branch of the yuba-cuisine house 松山閣 松山, whose main restaurant is elsewhere in Kyoto (Gurunavi)'], origin: null,
      background: 'Reviewers in 2026 describe a calm restaurant on the department-store restaurant floor with views of the mountains and Kyoto Tower, kimono-clad servers, rice crackers and hot water on arrival, and yuba that a September 2026 diner was told is made at a shop near Kinkaku-ji.',
      philosophy: null,
      specialty: 'Homemade yuba in a wooden tub (yuba-oke).',
      anecdotes: [
        { text: 'September 2026: "the service felt a bit disorganized, possibly due to being busy. The staff could have been a bit more friendly."', source: R + 'B535865908/' },
        { text: 'October 2026: "I found the saltiness to be quite pronounced, despite the presentation" — and the "matsutake rice" turned out to be mushroom rice.', source: R + 'B537781548/' },
        { text: 'October 2026: "the signature homemade yuba bucket was exquisite; I almost drank all the soy milk without realizing it."', source: R + 'B538726701/' },
        { text: 'October 2026: "the service from the most experienced-looking woman in a kimono was a bit intimidating."', source: R + 'B538072618/' },
      ],
      japanese_sources_summary: '食べログ: 京料理・本家生ゆば料理 松山閣 松山 JR京都伊勢丹店、日本料理・豆腐料理、下京区烏丸通塩小路下る東塩小路町901 ジェイアール京都伊勢丹 11F、JR京都駅から徒歩1分、毎日 11:00〜22:00 (L.O. 21:15)、休みはJR京都伊勢丹に準じる、予約可 (個室は電話で)、利用は2時間ほど、原文でサービス料「無」、42席、個室 (8名、10〜20名)、禁煙、車椅子可、英語と写真のメニュー、アレルギー表示あり、子供可・子供メニュー、カード可、電子マネー・QR不可。口コミ (2026年8〜10月、英語): 自家製の湯葉桶をポン酢で、豆乳、湯葉刺し、湯葉の天ぷら、豆腐の味噌田楽、季節の京弁当4,070円 (湯葉桶付き、きのこご飯はおかわり可、湯葉バウムクーヘン)、「Miyabi」コース5,500円、「Sakae」の会席 (松茸の土瓶蒸し、鰆の幽庵焼き、蓮根饅頭)、京都タワーや山の眺め、湯葉は金閣寺の近くの店で作るとの説明、サービスが慌ただしいという声、塩気が強いという声、年長の着物の女性の接客が怖かったという声。',
      confidence: 'medium', sources: [TB, R + 'B533760623/', R + 'B534369698/', R + 'B535088992/', R + 'B535865908/', R + 'B536200297/', R + 'B536492706/', R + 'B537005465/', R + 'B537781548/', R + 'B537902174/', R + 'B538072618/', R + 'B538726701/', 'https://r.gnavi.co.jp/k005201/'] },
    cultural_comfort: { level: 'english', note: 'English menu with photos; allergy information available.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区烏丸通塩小路下る東塩小路町901 ジェイアール京都伊勢丹 11F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.985852, 135.757424); cross-checked: GSI 京都府京都市下京区東塩小路町901番地 (lot) 96m — the lot is the station building; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B538072618/', R + 'B536492706/'],
    price_note: 'Prices from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Seasonal Kyo bento with homemade yuba tub', '¥4,070', 'Lunch', 'ask', 'no', 'October 2026.', 'yuba'),
      it('', '', '"Miyabi" course', '¥5,500', 'Course', 'ask', 'no', 'September 2026.', 'kaiseki_course'),
    ] }, {
    cuisine: '京都の湯葉料理の店の湯葉会席を駅の百貨店で (2026年の口コミ)・名物は木の桶で温かく出す自家製の生湯葉「湯葉桶」をポン酢で、豆乳も飲める (2026年の口コミ)・湯葉桶付きの季節の京弁当4,070円は湯葉、銀杏豆腐、だし巻、炊き合わせ、おかわりできるきのこご飯、湯葉のバウムクーヘン (2026年10月)。「Miyabi」コース5,500円 (2026年9月)。松茸の土瓶蒸し、鰆の幽庵焼き、蓮根饅頭の「Sakae」会席 (2026年10月)・単品で湯葉刺し、湯葉の天ぷら、豆腐田楽 (2026年10月)・京都の日本酒もいろいろ (2026年の口コミ)',
    neighborhood: '京都駅。JR京都伊勢丹11階、JR京都駅から徒歩1分',
    gf_detail: '要確認: 食べログではアレルギー表示あり。湯葉や豆乳は小麦を含まないが、湯葉の天ぷら、麩、ポン酢がコースにある (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: どの料理にも出汁。コースにお造り、魚、海老、鱧 (2026年の口コミ)。',
    notes: '[湯葉会席・京都駅伊勢丹11階、桶で出す温かい湯葉] 京都の湯葉料理の店の駅の店。木の桶からすくう温かい出来たての湯葉をポン酢で、湯葉刺しや天ぷら、季節のコースも。京都タワーの方を眺めながら、電車の前に便利。2026年の客は湯葉をほめるが、接客が硬い・慌ただしいという声 (2026年9月・10月) や、味付けが塩辛いという声 (2026年10月) も。サービス料なし。',
  });
}

// ================================================================ 三木鶏卵 錦本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26004870/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://mikikeiran.com/';
  const H = day(['09:00', '17:00']);
  put({
    id: 'kyoto_miki_keiran_nishiki', name: '三木鶏卵 (Miki Keiran)', category: 'OMNI',
    lat: 35.005054, lng: 135.764716, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: the dashimaki dashi is kombu with urume, soda-katsuo and mackerel flakes (official site), but soy seasoning is not stated; the sandwiches, buns and cream puffs are wheat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: egg dishes in a fish dashi (official site).',
    hours_raw: 'Official site and Tabelog: 9:00–17:00 daily; closed only at New Year. Take-away counter with a small standing eat-in space and a bin; staff will cut a dashimaki for eating on the spot (2024–2025 reviews). No reservations. Tabelog lists no cards, e-money or QR, but a March 2026 diner paid with PayPay. Popular items (pudding) sell out; a sold-out dashimaki can be made fresh if you wait (October 2025).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishiki Market, near the Tominokoji end — 10 min walk from Karasuma / Kawaramachi / Shijo Stns',
    cuisine: 'Dashimaki tamago specialist in Nishiki Market since 1928, hand-rolled by craftsmen (official site) · dashimaki small ¥690, medium ¥1,050, large ¥1,700, special ¥1,950; Kujo green-onion roll ¥1,190; kayaku (mixed-vegetable) roll ¥1,600; umaki (eel) ¥2,800; fukusa-yaki ¥580 (official site, November 2026) · from the sister bakery: dashimaki sandwich, yolk anpan, custard cream bun, cream puffs, bottled pudding with separate caramel (2024–2026 reviews)',
    website: SITE, gmaps: gm('三木鶏卵 錦市場'), menu_url: SITE,
    notes: '[Dashimaki · Nishiki Market, since 1928] A Nishiki Market egg shop since 1928 where craftsmen hand-roll dashi-heavy dashimaki in custom copper pans: buy a small roll to eat at the stand, a green-onion or eel roll, or the dashimaki sandwich and pudding. One diner expected it hot and got it cold (September 2026). Open daily 9:00–17:00.',
    chef_bio: { chef_name: null, roles: ['Not named in a source; Miki Keiran Co., Ltd. (official site)'], origin: null,
      background: 'Founded in Showa 3 (1928), with its main shop near the middle of Nishiki Market (official site). The dashi uses Nishiki well water and Rishiri kombu simmered slowly, with urume, soda-katsuo and mackerel flakes; every roll is still hand-cooked, rolled front to back in the "Kyo-maki" style over high heat in long, heavy copper pans made to order by Aritsugu, a craftsman working three pans at once (official site). Counters at Takashimaya Kyoto and JR Kyoto Isetan, and a bakery of egg breads and sweets, mikikeirando (official site).',
      philosophy: 'From its site: "創業以来、伝承の技法で変わらぬ味を守っています" (since its founding, keeping the same taste with handed-down techniques).',
      specialty: 'Dashimaki tamago.',
      anecdotes: [
        { text: 'January 2024: in a Nishiki now full of bar-like eateries, "the traditional ambiance still remains at a place called Miki Keiran."', source: R + 'B480660728/' },
        { text: 'May 2024: "If you want to eat it now, I\'ll cut the dashimaki for you," said the staff — "They even gave me three chopsticks."', source: R + 'B484203364/' },
        { text: 'September 2026: "I expected it to be freshly made, but it was cold, which was a bit disappointing."', source: R + 'B538482912/' },
      ],
      japanese_sources_summary: '公式サイト: 昭和三年創業のだし巻玉子専門店、錦市場のほぼ真ん中に本店、錦の井戸水と利尻昆布、うるめ節・宗田鰹・さば節の出汁、職人が一本ずつ手焼き、有次の特注の銅の玉子焼鍋、手前から奥へ巻く「京巻き」、三本の鍋を同時に使う、だし巻 (小690円・中1,050円・大1,700円・特上1,950円)、九条ねぎ巻1,190円、かやく巻1,600円、う巻2,800円、ふくさ焼580円、錦本店は9:00〜17:00で年始以外無休、高島屋京都店とJR京都伊勢丹店、パンと菓子の三木鶏卵堂 (mikikeirando)。食べログ: 三木鶏卵、日本料理・パン、中京区錦小路通富小路西入東魚屋町182、予約不可、持ち帰り、カード・電子マネー・QR不可。口コミ (2024年1月〜2026年9月、英語): だし巻、九条ねぎ巻、う巻、だし巻サンド、黄身あんぱん、クリームパン、シュークリーム、瓶のプリン、店の前で立って食べられる、PayPayで払えたという声、冷めていたという声。',
      confidence: 'high', sources: [SITE, SITE + '?mode=f1', SITE + '?mode=f8', TB, R + 'B1708238/', R + 'B480660728/', R + 'B483749280/', R + 'B484203364/', R + 'B489900708/', R + 'B515595242/', R + 'B524217971/', R + 'B524411187/', R + 'B534384393/', R + 'B538482912/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Take-away counter in Nishiki Market; small standing space.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区錦小路通富小路西入東魚屋町182',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site lists the Nishiki main shop; Tabelog reviews through September 2026.' },
    pin_source: `Tabelog ${TB} (35.005054, 135.764716); cross-checked: GSI 京都府京都市中京区東魚屋町182番地 (lot) 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE],
    price_note: 'Official online-shop prices, tax included; checked November 2026.', last_checked: TODAY, items: [
      it('だし巻（小）', '', 'Dashimaki tamago, small', '¥690', 'Dashimaki', 'ask', 'no', 'Official site.', 'dashimaki'),
      it('だし巻（特上）', '', 'Dashimaki tamago, special', '¥1,950', 'Dashimaki', 'ask', 'no', 'Official site.', 'dashimaki'),
      it('九条ねぎ巻', '', 'Kujo green-onion dashimaki', '¥1,190', 'Dashimaki', 'ask', 'no', 'Official site.', 'dashimaki'),
      it('う巻', '', 'Umaki (eel dashimaki)', '¥2,800', 'Dashimaki', 'ask', 'no', 'Official site.', 'umaki'),
    ] }, {
    cuisine: '1928年から錦市場にある、職人が手で巻くだし巻玉子の専門店 (公式サイト)・だし巻 小690円、中1,050円、大1,700円、特上1,950円。九条ねぎ巻1,190円、かやく巻1,600円、う巻2,800円、ふくさ焼580円 (公式サイト、2026年11月)・姉妹店のパン屋のだし巻サンド、黄身あんぱん、クリームパン、シュークリーム、カラメル別添えの瓶のプリン (2024〜2026年の口コミ)',
    neighborhood: '錦市場、富小路寄り。烏丸・河原町・四条駅から徒歩10分',
    gf_detail: '要確認: だし巻の出汁は昆布とうるめ節・宗田鰹・さば節 (公式サイト) だが、醤油の有無は書かれていない。サンド、パン、シュークリームは小麦。',
    vegan_detail: 'ヴィーガン不可: 魚の出汁の卵料理 (公式サイト)。',
    notes: '[だし巻・錦市場、1928年創業] 1928年から錦市場にある卵屋で、職人が特注の銅鍋で出汁たっぷりのだし巻を手で焼く。店先で食べる小さなだし巻、九条ねぎ巻やう巻、だし巻サンドやプリンも。焼きたてを期待したら冷めていたという声も (2026年9月)。毎日9時〜17時。',
  });
}

save();
