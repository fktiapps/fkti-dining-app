// Ginza Station half-mile sweep (805 m), batch 34 — owner search over Ginza's small sushi counters.
//   + 銀座いち分 (9-seat Edomae counter opened early summer 2017, "a small shop where the two of us, a married couple, quietly hung our noren";
//     owner-chef 小川武士 → MOM_AND_POP)
// Checked and not added as mom-and-pop: すし家 銀座本店 (鮨かねさか group), きよ田 (run by a succession of chefs, now a
// "fourth generation" that is not family), 鮨 いしやま (owner not named).
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-24';
const { put, save } = openSweep(TODAY);

{
  const HP = 'https://www.ginzaichibun.com/';
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13209942/'; const R = TB + 'dtlrvwlst/';
  const d = day(['18:00', '22:30']);
  put({
    id: 'tokyo_ginza_ichibun', name: '銀座いち分 (Ginza Ichibun)', category: 'MOM_AND_POP',
    lat: 35.671985, lng: 139.770165,
    gf_confidence: 'ask', gf_label: 'GF — ask',
    gf_detail: 'Ask. An Edomae omakase of 5–7 small dishes and 10–12 nigiri, with miso-marinated salmon roe, smoked tuna, chawanmushi, soup, tamagoyaki and a roll; no source describes the soy, nikiri or tsume ingredients or a gluten-free option.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan: a fixed seafood omakase with egg dishes.',
    hours_raw: 'Dinner only, two seatings at 18:00 (until 20:00) and 20:15; closed Wednesdays and Sundays, open on holidays and on a Sunday before a Monday holiday (official site, Tabelog). Online reservations only; no lunch. Cards accepted; no e-money or QR.',
    hours: { 0: d, 1: d, 3: d, 4: d, 5: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 2-chōme, ground floor of the Ginza Aruka Bldg, unsigned wooden door — 7 min from Higashi-Ginza Stn',
    cuisine: 'Edomae sushi omakase at a 9-seat counter · aged and tank-kept fish alongside tradition · couple-run since 2017', cuisine_type: 'sushi',
    website: HP, gmaps: gm('銀座いち分 銀座2-13-19 銀座アルカビル'), menu_url: HP,
    notes: "[Mom & Pop · the couple's nine-seat counter] 'A small shop with a nine-seat counter, where the two of us, a married couple, quietly hung our noren in a corner of Ginza,' writes owner-chef 小川武士 of the shop, opened in early summer 2017. There is no sign, just a closed wooden door. The kitchen uses modern techniques, including an in-house tank, ice-temperature ageing and low-temperature cooking, alongside the inherited craft of Edomae sushi. The only menu is an omakase of 5–7 small dishes and 10–12 nigiri, about 18 courses with soup, tamagoyaki and a roll, for ¥28,600 (official site; one June 2026 diner paid ¥25,300). Rice and portion size can be adjusted. In 2026 diners describe hairy crab with crab miso, a flight of three sea urchins, miso-marinated salmon roe, smoked tuna, yuzu-scented chawanmushi, abalone, torigai and a herring served for only two weeks of the year. Sake is chosen to match the food from ¥1,800. Dinner runs in two seatings, bookings are online only, and very casual clothes and outside drinks are declined.",
    chef_bio: {
      chef_name: '小川武士 (owner-chef), with spouse', roles: ['owner-chef', 'co-owner (spouse)'],
      origin: 'Opened early summer 2017 in Ginza 2-chōme',
      background: 'The official greeting, signed 小川武士, describes the shop as run by the couple.',
      philosophy: '「みなさまに美味しいお鮨を召し上がっていただきたい」 — and to combine modern techniques with the inherited culture of washoku and Edomae sushi.',
      specialty: 'Edomae omakase; aged and tank-kept fish.',
      anecdotes: [
        { text: '「当店は銀座の片隅に夫婦二人でひっそりと暖簾を掲げた、カウンター９席の小さなお店です」', source: HP },
        { text: '"The restaurant has no sign and the wooden door is closed, so I always hesitate to enter." — a fifteen-visit regular, August 2026.', source: R + 'B452908717/' },
        { text: '"The Herring (twelfth dish) was also exceptional … I learned that it can only be served for about two weeks." — June 2026.', source: R + 'B530718298/' },
      ],
      japanese_sources_summary: '公式サイト: 銀座いち分、銀座の片隅に夫婦二人で暖簾を掲げたカウンター9席の店、2017年初夏に開業、店内水槽飼育・氷温熟成・低温調理と和食文化、小川武士、おまかせコース(つまみ5〜7品・にぎり10〜12貫・お椀・玉子焼・巻物など全18品ほど)28,600円、シャリの量は調整可、ランチ営業なし、日本酒1,800円〜、ネット予約のみ、全席禁煙、過度にカジュアルな服装不可、中学生以上、カード可・電子マネーとQR不可、18:00と20:15の2部制、水日定休、銀座2-13-19 銀座アルカビル1F(東銀座駅から徒歩7分)。食べログ: 9席(カウンターのみ)、祝日は営業。2026年の口コミ: 看板のない木の扉、毛蟹と蟹味噌、雲丹3種、味噌漬けのいくら、燻製の鮪、柚子香る茶碗蒸し、鮑、鳥貝、2週間ほどしか出せない鰊、おまかせ25,300円(6月)・28,600円(8月)。',
      confidence: 'high', sources: [HP, TB, R + 'B452908717/', R + 'B530718298/', R + 'B534602510/', R + 'B535368167/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Unsigned door; book online only; arrive on time for the two fixed seatings. Smart-casual dress; no smoking.' },
    safety: {
      dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [],
      vegan_cross_contact: [{ text: 'Fixed seafood omakase including chawanmushi and tamagoyaki.', source: HP }],
      staff_allergy_handling: [], positives: [{ text: 'Rice amount and overall volume can be adjusted on request.', source: HP }], confidence: 'low', last_checked: TODAY,
    },
    mom_and_pop: true, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座2-13-19 銀座アルカビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site current; Tabelog reviews dated June–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座二丁目13番19号 (go) 7m; ${TODAY}`,
  }, { verified: 'verified', confidence: 'high', sources: [HP],
    price_note: 'Official site, tax included.', last_checked: TODAY, items: [
      it('おまかせコース', 'omakase koosu', 'Omakase: 5–7 small dishes, 10–12 nigiri, soup, tamagoyaki, roll (about 18 items)', '¥28,600', 'Courses', 'ask', 'no', '', 'omakase'),
      it('日本酒', 'nihonshu', 'Sake matched to the food', '¥1,800–', 'Drinks', 'gf', 'ask', '', 'sake'),
      it('サッポロラガー赤星 中瓶', 'sapporo raagaa akaboshi', 'Sapporo Lager "Akaboshi", medium bottle', '¥1,000', 'Drinks', 'no', 'ask', '', 'akaboshi'),
      it('グラスワイン(白)', 'gurasu wain', 'White wine by the glass', '¥1,600', 'Drinks', 'gf', 'ask', '', 'white_wine'),
      it('烏龍茶', 'uuron cha', 'Oolong tea', '¥600', 'Drinks', 'gf', 'vegan', '', 'oolong'),
    ] }, {
    cuisine: 'カウンター9席の江戸前鮨おまかせ・伝統と熟成や水槽飼育の技術・2017年から夫婦で営む',
    neighborhood: '銀座二丁目、銀座アルカビル1F、看板のない木の扉。東銀座駅から徒歩7分',
    gf_detail: '要確認。つまみ5〜7品とにぎり10〜12貫の江戸前のおまかせで、味噌漬けのいくら、燻製の鮪、茶碗蒸し、お椀、玉子焼、巻物など。醤油・煮切り・ツメの原材料やグルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。魚介と卵料理のおまかせのみです。',
    notes: '[個人店・夫婦のカウンター9席] 「当店は銀座の片隅に夫婦二人でひっそりと暖簾を掲げた、カウンター9席の小さなお店です」と店主の小川武士さん。2017年初夏の開業で、看板はなく木の扉が閉じているだけ。店内水槽での飼育や氷温熟成、低温調理など現代の技術も取り入れつつ、受け継がれてきた和食と江戸前鮨の文化を大切にしています。品書きはおまかせのみで、つまみ5〜7品、にぎり10〜12貫、お椀・玉子焼・巻物など全18品ほどで28,600円(公式サイト。2026年6月の口コミでは25,300円)。シャリの量や全体のボリュームは調整可。2026年の口コミでは、毛蟹と蟹味噌、雲丹3種の食べ比べ、味噌漬けのいくら、燻製の鮪、柚子香る茶碗蒸し、鮑、鳥貝、年に2週間ほどしか出せない鰊など。日本酒は料理に合わせて1,800円〜。18:00と20:15の2部制、予約はネットのみで、過度にカジュアルな服装や飲み物の持ち込みは不可。',
  });
}

save();
