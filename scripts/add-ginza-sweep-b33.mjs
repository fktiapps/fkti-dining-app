// Ginza Station half-mile sweep (805 m), batch 33 — owner search over the small in-radius candidates from the Tabelog cache.
//   + 鮨竹 (Edomae sushi, 8-seat counter; owner-chef 三好史恵, trained 8 years at 新ばし しみづ, opened 2014 → MOM_AND_POP)
// Searched and still no named owner: 銀座 とよだ (has a head chef, 船島誠司, and an okami; owner unclear), 有明そば, 木挽そば,
// バーあさ子, 鉄板お好み焼き 辻井.
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-24';
const { put, save } = openSweep(TODAY);

{
  const PR = 'https://precious.jp/articles/-/61641'; const OG = 'https://oggi.jp/190141';
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13169506/'; const R = TB + 'dtlrvwlst/';
  const ld = day(['11:30', '14:00'], ['17:00', '22:30']);
  put({
    id: 'tokyo_sushi_take_ginza', name: '鮨竹 (Sushi Take)', category: 'MOM_AND_POP',
    lat: 35.669784, lng: 139.761954,
    gf_confidence: 'ask', gf_label: 'GF — ask',
    gf_detail: 'Ask. Classic Edomae sushi on red-vinegar rice, with cured, simmered and sauced toppings (marinated tuna, simmered clam, anago) and tamagoyaki; no source describes the soy, nikiri or tsume ingredients or a gluten-free option.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan: an omakase of fish and shellfish sashimi, small dishes and nigiri, finishing with tamagoyaki.',
    hours_raw: 'Lunch 11:30–14:00 (L.O. 12:30) and dinner 17:00–22:30 (L.O. 21:00), Thu–Tue; closed Wednesdays and Mondays that fall on holidays (Tabelog). Online reservations; parties of up to three. Cards accepted; service included in the omakase.',
    hours: { 0: ld, 1: ld, 3: ld, 4: ld, 5: ld, 6: ld }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 7-chōme, fourth floor of the Ishii Kishūya Bldg — 5 min from Ginza Stn B3',
    cuisine: 'Classic Edomae sushi in the 鶴八 lineage · red-vinegar rice · 8-seat counter run by a woman taishō', cuisine_type: 'sushi',
    website: null, gmaps: gm('鮨竹 銀座7-6-5 石井紀州屋ビル'), menu_url: null,
    notes: "[Mom & Pop · the taishō who trained at Shimizu] An eight-seat white-wood counter on a Ginza 7-chōme fourth floor, run by owner-chef 三好史恵 with one young assistant. Born in Aichi, she studied interior design, worked at a design office, spent a year in Britain and cooked in a Japanese izakaya. At 28 she apprenticed at the Edomae master shop 新ばし しみづ, of the 鶴八 lineage, and opened Sushi Take in 2014 after eight years. 'It was a completely male world,' she says. She once thought of smashing every plate and running, but all she would have heard was 'Of course she quit, she's a woman.' In the first year she opened 365 days, on almost no capital, carried by a tuna wholesaler who let her pay later, a Ginza bartender who lent cash and senior apprentices who told her never to quit. Some guests still ask whether the 'taishō' will make their sushi, mistaking the assistant for the boss. The rice is brown with red vinegar. Diners describe an omakase of appetizers and five small dishes, then twelve or so nigiri such as kasugo, kohada, shako, marinated tuna, simmered clam, sea urchin and anago, finished with tamagoyaki. There is also a sushi-only course and, unusually now, à la carte. In 2026 diners put it at ¥20,000–40,000 a head.",
    chef_bio: {
      chef_name: '三好史恵 (Miyoshi Fumie, owner-chef)', roles: ['owner-chef (taishō)'],
      origin: 'Opened 2014 in Ginza 7-chōme',
      background: 'Born in Aichi; interior-design school and a design office, a year in the UK, a Japanese izakaya, then eight years at 新ばし しみづ from age 28 (Precious, 2026).',
      philosophy: '「私はすごく保守的で、未来や進化というより、過去や伝統に興味があり、常に基本に立ち返りたいと考える人間です」',
      specialty: 'Classic Edomae nigiri on red-vinegar rice; kohada, kasugo, anago.',
      anecdotes: [
        { text: '「完全なる男社会で、その流儀がわからずやらかしまくる私は、親方の怒りスイッチを押すのがすごく上手でした（笑）」', source: PR },
        { text: 'For the first year after opening she decided to work 365 days, and a tuna wholesaler told her she could pay on account for a year.', source: PR },
        { text: 'A guest who took the young assistant for the taishō once asked whether "the taishō" would not make their sushi.', source: OG },
      ],
      japanese_sources_summary: 'Precious(2026年8月号、web 2026.7.22): 鮨竹 大将・三好史恵(みよし・ふみえ)、愛知県生まれ、インテリア専門学校、設計事務所、イギリスで1年、和食居酒屋、28歳で「新ばし しみづ」に弟子入り、8年の修業を経て2014年に独立し銀座7丁目に開業、「鶴八」の系譜、「完全なる男社会」、最初の1年は365日営業、マグロの仲卸のツケ・銀座のバーテンダーの貸付・兄弟子の励まし、クラシックな鮨文化を守りたい。Oggi: 10人で満席の白木のカウンター、大将と若い衆1人、赤酢の酢飯、大将を若い衆と間違える客。食べログ: 銀座7-6-5 石井紀州屋ビル4F、8席、水曜休、ネット予約、サービス料はおまかせに込み。2026年の口コミ: おまかせ(つまみ5品・握り12貫・玉子)、握りのみのコース、お好みも可、春子・小肌・シャコ・ヅケ・煮蛤・雲丹・穴子、2〜4万円。',
      confidence: 'high', sources: [PR, OG, TB, R + 'B525336925/', R + 'B421773874/', R + 'B465318608/', R + 'B76307274/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Eight-seat counter; book online, parties of up to three. Photos allowed if silent, per one 2026 diner.' },
    safety: {
      dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [],
      vegan_cross_contact: [{ text: 'Omakase of fish and shellfish, finishing with tamagoyaki.', source: R + 'B525336925/' }],
      staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY,
    },
    mom_and_pop: true, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座7-6-5 石井紀州屋ビル 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Precious interview July 2026; Tabelog reviews dated March–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座七丁目6番5号 (go) 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B525336925/', R + 'B465318608/', R + 'B421773874/'],
    price_note: 'Courses as described in 2026 reviews; per-head spend ¥20,000–40,000 (Tabelog).', last_checked: TODAY, items: [
      it('おまかせ', 'omakase', 'Omakase: seasonal appetizer, five small dishes, about twelve nigiri, tamagoyaki', '', 'Courses', 'ask', 'no', '', 'omakase'),
      it('握りのみのコース', 'nigiri nomi no koosu', 'Sushi-only course', '', 'Courses', 'ask', 'no', '', 'nigiri_course'),
      it('お好み', 'okonomi', 'À la carte nigiri', '', 'Sushi', 'ask', 'no', '', 'okonomi'),
    ] }, {
    cuisine: '「鶴八」の系譜の古典的な江戸前鮨・赤酢のシャリ・女性大将の8席のカウンター',
    neighborhood: '銀座七丁目、石井紀州屋ビル4F。銀座駅B3出口から徒歩5分',
    gf_detail: '要確認。赤酢のシャリの古典的な江戸前鮨で、ヅケ・煮蛤・穴子など仕事をしたネタと玉子焼き。醤油・煮切り・ツメの原材料やグルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。魚介のつまみと握りのおまかせで、最後は玉子焼き。',
    notes: '[個人店・しみづで修業した女性大将] 銀座7丁目のビル4階、白木のカウンター8席を、大将の三好史恵さんと若い衆ひとりで切り盛りする鮨店。愛知県生まれで、インテリアの専門学校から設計事務所、1年間のイギリス暮らし、和食居酒屋を経て、28歳で「鶴八」の系譜を継ぐ江戸前の名店「新ばし しみづ」に弟子入り。8年の修業を経て2014年に独立しました。「完全なる男社会」で、店の皿を全部割って逃げようと思ったこともあったけれど、「やっぱり辞めたね、女だからね」と言われるだけだと踏みとどまったそう。独立1年目は365日営業と決め、運転資金はほぼゼロ。「1年間はツケでいい」というマグロの仲卸や、キャッシュを貸してくれた銀座のバーテンダー、「とにかく辞めるな」と背中を押す兄弟子たちに支えられました。今も若い衆を大将と間違える客がいるとか。シャリは赤酢の褐色。口コミによればおまかせはつまみ5品ほどに握り12貫前後(春子、小肌、シャコ、ヅケ、煮蛤、雲丹、穴子など)と玉子で、握りのみのコースや、今では珍しいお好みも。2026年の口コミでは1人2〜4万円。',
  });
}

save();
