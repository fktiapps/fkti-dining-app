// Ginza Station half-mile sweep (805 m), batch 39 — small Ginza sushi counters from the Tabelog crawl candidates (all OMNI).
//   + 鮨 いしやま (15 seats; "in the lineage of Sushi Kanesaka" per a 2026 regular; owner not named)
//   + すし家 銀座本店 (8 seats; opened 2012 as a branch of 鮨かねさか, per its Tabelog shop text)
//   + 鮨 一㐂 (20 seats with private rooms; owner not named)
// Skipped: バルカローレ (Tabelog listing has no reviews).
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-24';
const { put, save } = openSweep(TODAY);
const GF = 'Ask. Edomae sushi omakase; no source describes the soy, nikiri or tsume ingredients or a gluten-free option.';
const GF_JA = '要確認。江戸前鮨のおまかせ。醤油・煮切り・ツメの原材料やグルテンフリーの対応は書かれていません。';

// ================================================================ 鮨 いしやま
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13225073/'; const R = TB + 'dtlrvwlst/';
  const ld = day(['12:00', '15:00'], ['17:30', '22:30']);
  put({
    id: 'tokyo_sushi_ishiyama_ginza', name: '鮨 いしやま (Sushi Ishiyama)', category: 'OMNI',
    lat: 35.673128, lng: 139.765532,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: GF,
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish and shellfish omakase, including whale.',
    hours_raw: 'Tue–Sat 12:00–15:00 and 17:30–22:30 (last entry 22:30); closed Sundays and Mondays (Tabelog). Cards accepted.',
    hours: { 1: ld, 2: ld, 3: ld, 4: ld, 5: ld }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 3-chōme, Ginza Morita Bldg 4F — 3 min from Ginza-itchōme Stn',
    cuisine: 'Edomae sushi in the Kanesaka lineage · three-way sea-urchin tasting · main and sub counters', cuisine_type: 'sushi',
    website: null, gmaps: gm('鮨 いしやま 銀座3-3-6 銀座モリタビル'), menu_url: null,
    notes: "[Sushi · the Kanesaka-lineage counter] A fourth-floor Edomae sushi restaurant in Ginza 3-chōme with an eight-seat main counter and a seven-seat sub counter. A seven-visit regular places it 'in the lineage of Sushi Kanesaka'. The chef works quietly, with quality over show. 2026 diners describe Matsukawa flounder sashimi, cod milt with ponzu, seared bonito, a tasting of three sea urchins (Sadamisaki red, Himejima and Hokkaido bafun), whale, salmon roe and crab, then classic nigiri finishing with a sweet tamagoyaki. One grandparent says a grandson has been coming for over ten years and quizzes the chef about every fish. Dinner runs about ¥40,000–60,000 and lunch about ¥20,000–30,000, with a sushi-only lunch course.",
    chef_bio: {
      chef_name: null, roles: [], origin: 'Ginza 3-chōme; opening date not found in a source read',
      background: 'A 2026 regular describes it as in the lineage of Sushi Kanesaka; no source read names the chef.', philosophy: null, specialty: 'Sea-urchin tasting; Edomae nigiri.',
      anecdotes: [
        { text: '"A wonderful restaurant in the lineage of Sushi Kanesaka." — a seven-visit regular, October 2026.', source: R + 'B493790117/' },
        { text: '"My grandson has been coming for over ten years, so he\'s become good friends with the chef and often asks him questions." — October 2026.', source: R + 'B530660476/' },
        { text: '"With three types of sea urchin and delicious whale meat, there were many memorable dishes." — September 2026.', source: R + 'B536155109/' },
      ],
      japanese_sources_summary: '食べログ: 鮨 いしやま、銀座3-3-6 銀座モリタビル4F、銀座駅から186m、15席(メイン8・サブ7)、火〜土12:00〜15:00・17:30〜22:30、日月休、カード可、予算夜4〜5万円・昼2〜3万円。2026年の口コミ: かねさかの系譜、松川鰈、真鱈の白子ポン酢、鰹のたたき、雲丹3種(佐田岬の赤雲丹・姫島と北海道の馬糞雲丹)、鯨、いくら、蟹、甘い玉子、握りのみのランチコース、孫が10年以上通う。',
      confidence: 'low', sources: [TB, R + 'B493790117/', R + 'B530660476/', R + 'B535460852/', R + 'B536155109/', R + 'B537699349/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Calm counter; book ahead. Private use for up to 20.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座3-3-6 銀座モリタビル 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座三丁目3番6号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B493790117/', R + 'B530660476/'],
    price_note: 'Tabelog budget: dinner ¥40,000–50,000, lunch ¥20,000–30,000.', last_checked: TODAY, items: [
      it('おまかせ', 'omakase', 'Omakase of small dishes and nigiri', '', 'Courses', 'ask', 'no', '', 'omakase'),
      it('握りのみのランチコース', 'nigiri nomi no ranchi koosu', 'Sushi-only lunch course', '', 'Courses', 'ask', 'no', '', 'nigiri_lunch'),
    ] }, {
    cuisine: 'かねさかの系譜の江戸前鮨・雲丹3種の食べ比べ・メインとサブのカウンター',
    neighborhood: '銀座三丁目、銀座モリタビル4F。銀座一丁目駅から徒歩3分',
    gf_detail: GF_JA, vegan_detail: 'ヴィーガンではありません。鯨を含む魚介のおまかせです。',
    notes: '[鮨・かねさかの系譜のカウンター] 銀座三丁目のビル4階、メインのカウンター8席とサブのカウンター7席の江戸前鮨。7回通う常連は「鮨かねさかの系譜」と書きます。大将は派手さより素材と技で静かに握ります。2026年の口コミでは、松川鰈の刺身、真鱈の白子ポン酢、鰹のたたき、雲丹3種の食べ比べ(佐田岬の赤雲丹、姫島と北海道の馬糞雲丹)、鯨、いくら、蟹、そして古典的な握りから甘い玉子まで。10年以上通う孫が大将に魚のことを質問攻めにするという祖父母の口コミも。予算は夜4〜6万円、昼2〜3万円ほどで、握りのみのランチコースも。',
  });
}

// ================================================================ すし家 銀座本店
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13236300/'; const R = TB + 'dtlrvwlst/';
  const a = day(['12:00', '14:00'], ['17:30', '22:00']);
  put({
    id: 'tokyo_sushiya_ginza_honten', name: 'すし家 銀座本店 (Sushi Ya)', category: 'OMNI',
    lat: 35.671357, lng: 139.761434,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: GF,
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a single fish and shellfish omakase.',
    hours_raw: 'Daily 12:00–14:00, and dinner seatings 17:30–20:00 and 20:00–22:00 (Tabelog). Cards accepted; a service fee may be added.',
    hours: { 0: a, 1: a, 2: a, 3: a, 4: a, 5: a, 6: a }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 6-chōme, Hanatsubaki Bldg 2F — 5 min from Ginza Stn C3',
    cuisine: 'Edomae sushi · 鮨かねさか branch since 2012 · 8-seat counter', cuisine_type: 'sushi',
    website: null, gmaps: gm('すし家 銀座本店 銀座6-4-16 花椿ビル'), menu_url: null,
    notes: "[Sushi · the Kanesaka branch] An eight-seat counter on the second floor of the Hanatsubaki Building in Ginza 6-chōme, opened in 2012 as a branch of Sushi Kanesaka, according to its own Tabelog text. All the fish comes from Toyosu, and summer brings fresh horse mackerel, hairy crab from Izumi in Kagoshima, and white shrimp. There is one course at lunch, a crab appetizer and then sushi, with shellfish snacks in between; one August 2026 diner was given about four appetizers instead of one. Dinner runs in two seatings. In 2026 many guests are overseas visitors, and one reviewer found the sake prices high. Budget about ¥10,000–15,000 at lunch and ¥20,000–30,000 at dinner.",
    chef_bio: {
      chef_name: null, roles: [], origin: 'Opened 2012 as a branch of 鮨かねさか (Tabelog shop text)',
      background: 'Part of the Kanesaka group; no source read names the current chef.', philosophy: '"We believe every encounter with our customers is a once-in-a-lifetime experience." (Tabelog shop text)', specialty: 'Seasonal Toyosu fish; Edomae nigiri.',
      anecdotes: [
        { text: '"Although it was supposed to be just one appetizer, they brought out about four dishes for us." — August 2026.', source: R + 'B520246776/' },
        { text: '"This is a restaurant from the Kanesaka group." — September 2026.', source: R + 'B535483571/' },
        { text: 'A diner celebrating a birthday found the manager was a middle-school classmate, about to move to France (October 2026).', source: R + 'B537678678/' },
      ],
      japanese_sources_summary: '食べログ: すし家 銀座本店、銀座6-4-16 花椿ビル2F、銀座駅C3出口から徒歩5分、8席、毎日12:00〜14:00・17:30〜20:00・20:00〜22:00、カード可、サービス料あり、予算夜2〜3万円・昼1〜1.5万円。店舗紹介: 2012年に「鮨かねさか」の支店として開業、魚は豊洲から、夏は鯵、鹿児島・出水の毛蟹、白海老。2026年の口コミ: 昼はコース1種(蟹の先付、握り、貝のつまみ)、インバウンド客が多い、日本酒が高め。',
      confidence: 'medium', sources: [TB, R + 'B520246776/', R + 'B535483571/', R + 'B527997185/', R + 'B525372596/', R + 'B537678678/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Eight-seat counter, many overseas guests; two fixed dinner seatings.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座6-4-16 花椿ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated March–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座六丁目4番16号 (go) 8m — same building as 銀蕎麦 國定 (B1F); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B520246776/'],
    price_note: 'Tabelog budget: dinner ¥20,000–30,000, lunch ¥10,000–15,000.', last_checked: TODAY, items: [
      it('おまかせ', 'omakase', 'Omakase (one course at lunch)', '', 'Courses', 'ask', 'no', '', 'omakase'),
    ] }, {
    cuisine: '江戸前鮨・2012年からの鮨かねさかの支店・カウンター8席',
    neighborhood: '銀座六丁目、花椿ビル2F。銀座駅C3出口から徒歩5分',
    gf_detail: GF_JA, vegan_detail: 'ヴィーガンではありません。魚介のおまかせのみです。',
    notes: '[鮨・かねさかの支店] 銀座六丁目の花椿ビル2階、カウンター8席の鮨店で、食べログの店舗紹介によれば2012年に「鮨かねさか」の支店として開業。魚はすべて豊洲から仕入れ、夏は鯵、鹿児島・出水の毛蟹、白海老など。昼はコース1種で、蟹の先付から握り、合間に貝のつまみ。2026年8月には先付が1品のはずが4品ほど出たという口コミも。夜は2部制。2026年はインバウンド客が多く、日本酒が高めとの声も。予算は昼1〜1.5万円、夜2〜3万円ほど。',
  });
}

// ================================================================ 鮨 一㐂
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13258242/'; const R = TB + 'dtlrvwlst/';
  const a = day(['12:00', '14:30'], ['17:00', '23:00']);
  put({
    id: 'tokyo_sushi_ichiki_ginza', name: '一㐂 (Ichiki)', category: 'OMNI',
    lat: 35.671619, lng: 139.762998,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: GF,
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish and shellfish omakase with red miso soup.',
    hours_raw: 'Daily 12:00–14:30 (last entry 13:30) and 17:00–23:00 (last entry 21:00) (Tabelog). 10% service charge. Cards accepted.',
    hours: { 0: a, 1: a, 2: a, 3: a, 4: a, 5: a, 6: a }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 5-chōme, Nishigo Bldg 4F — 1 min from Ginza Stn',
    cuisine: 'Edomae sushi omakase · ¥11,000 lunch, ¥18,000 dinner · counter and private rooms', cuisine_type: 'sushi',
    website: null, gmaps: gm('一㐂 銀座5-4-15 西五ビル'), menu_url: null,
    notes: "[Sushi · omakase a minute from Ginza crossing] A fourth-floor sushi restaurant in an old Ginza 5-chōme building with a clean, pleasant room inside: a counter and private rooms for 2–8, 20 seats in all. At the counter, sushi alternates with appetizers. The lunch omakase is all sushi (¥11,000 in October 2026): medium-fatty tuna, squid, amberjack, kinki, kelp-cured sea bream, akami, bonito, surf clam, salmon roe, an 'Ichiki roll', sea urchin, seared toro, botan shrimp, anago, kanpyō roll, tamago and red-miso soup, with a Shine Muscat jelly. The evening omakase was ¥18,000 in 2026; autumn brings matsutake, hairy crab and sweet sea bream. Staff adjusted the menu for a guest who disliked certain fish. Many guests are from overseas. One September 2026 diner found the service stretched with a single server. A 10% service charge applies.",
    chef_bio: {
      chef_name: null, roles: [], origin: 'Ginza 5-chōme; opening date not found in a source read',
      background: 'No source read names the owner or chef.', philosophy: null, specialty: 'Marinated tuna with wasabi; Ichiki roll.',
      anecdotes: [
        { text: '"One of my friends is not fond of certain types of fish, but when I mentioned it, the staff kindly adjusted the menu for us!" — October 2026.', source: R + 'B537033719/' },
        { text: '"The marinated tuna with wasabi was especially outstanding. It was so good that I had to order more." — October 2026.', source: R + 'B537993705/' },
        { text: 'A five-time regular returned in September 2026 for matsutake, hairy crab and sweet sea bream in the evening omakase.', source: R + 'B477305175/' },
      ],
      japanese_sources_summary: '食べログ: 一㐂、銀座5-4-15 西五ビル4F、銀座駅から徒歩1分、20席・個室(2〜8名)、毎日12:00〜14:30(最終入店13:30)・17:00〜23:00(最終入店21:00)、サービス料10%、カード可。2026年の口コミ: 昼のおまかせ11,000円(中トロ、イカ、カンパチ、キンキ、鯛の昆布締め、赤身、鰹、北寄貝、いくら、一㐂巻き、雲丹、炙りトロ、牡丹海老、穴子、かんぴょう巻き、玉子、赤だし、シャインマスカットのゼリー)、夜のおまかせ18,000円、秋は松茸・毛蟹・甘鯛、苦手な魚に対応、海外客が多い、ホール1人で手が回らないとの声。',
      confidence: 'low', sources: [TB, R + 'B537227123/', R + 'B537033719/', R + 'B477305175/', R + 'B537993705/', R + 'B536186381/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Same-day bookings sometimes possible; many overseas guests. 10% service charge.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [{ text: 'Staff adjusted the omakase for a guest who disliked certain fish (October 2026).', source: R + 'B537033719/' }], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座5-4-15 西五ビル 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座五丁目4番15号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537227123/', R + 'B537033719/'],
    price_note: 'Course prices from October 2026 reviews; 10% service charge.', last_checked: TODAY, items: [
      it('ランチおまかせ', 'ranchi omakase', 'Lunch omakase (about 16 pieces, red-miso soup, jelly)', '¥11,000', 'Courses', 'ask', 'no', '2026.', 'lunch_omakase'),
      it('夜のおまかせ', 'yoru no omakase', 'Evening omakase (sushi and appetizers)', '¥18,000', 'Courses', 'ask', 'no', '2026.', 'dinner_omakase'),
    ] }, {
    cuisine: '江戸前鮨のおまかせ・昼11,000円、夜18,000円・カウンターと個室',
    neighborhood: '銀座五丁目、西五ビル4F。銀座駅から徒歩1分',
    gf_detail: GF_JA, vegan_detail: 'ヴィーガンではありません。魚介のおまかせと赤だし。',
    notes: '[鮨・銀座の交差点から1分のおまかせ] 銀座五丁目の古いビルの4階、中はきれいで心地よい鮨店で、カウンターと2〜8名の個室、計20席。カウンターでは握りとつまみが交互に。昼のおまかせは握りのみ(2026年10月11,000円)で、中トロ、イカ、カンパチ、キンキ、鯛の昆布締め、赤身、鰹、北寄貝、いくら、一㐂巻き、雲丹、炙りトロ、牡丹海老、穴子、かんぴょう巻き、玉子、赤だし、シャインマスカットのゼリー。夜のおまかせは2026年で18,000円、秋は松茸・毛蟹・甘鯛。苦手な魚に合わせて内容を変えてもらえたという口コミも。海外客が多く、2026年9月にはホール1人で手が回らないとの声も。サービス料10%。',
  });
}

save();
