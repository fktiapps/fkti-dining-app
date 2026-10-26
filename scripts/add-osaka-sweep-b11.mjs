// Osaka sweep (2-mile circle around Dotonbori), batch 11 — vegan/GF from the FMGF seeds, nearest first.
// No Tabelog ids, so pins are the FMGF point cross-checked by GSI and no queue-status rows are written.
//   + OKO takoyaki (soybean-flour takoyaki, sister of OKO Fun) — GF options, not queued
//   + Shojin Sushi Minamo (vegan, gluten-free sushi; GSI 171 m off, so the pin is single-source) — vegan full, GF options, queue dedicated
//   + Streamer Coffee Company (separately packaged GF bakes) — GF options, not queued
//   + Vegan Cafe Tsukineko (vegan, nearly all-GF menu; dedicated fryer reported) — vegan full, GF options, queue high
// Opening hours for all four were not found in any reachable source (Instagram-only shops).
import { openCitySweep, gm, it } from './lib-sweep.mjs';
const TODAY = '2026-10-26';
const { put, save } = openCitySweep('osaka', TODAY, 11);
const NOTE = 'Not applied: a dedicated/high label requires REVIEW_PROTOCOL.md pass 3 plus human sign-off. Queued in data/_underrated_queue.json.';
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [] };

// ================================================================ OKO takoyaki
{
  const FM = 'https://www.findmeglutenfree.com/biz/oko-takoyaki/6550368147865600';
  const IG = 'https://www.instagram.com/oko_tako_osaka/';
  put({
    id: 'osaka_oko_takoyaki_higashishinsaibashi', name: 'OKO takoyaki', category: 'GF',
    lat: 34.672553, lng: 135.503382, cuisine_type: 'okonomiyaki',
    gf_confidence: 'options', gf_label: 'Some GF options',
    gf_detail: 'Gluten-free takoyaki made with soybean flour (FMGF review, September 2026), plus GF dumplings, tempura, fries and fried rice reported by FMGF users. Reviewers call the food "fully gluten free", but FMGF marks it NOT a dedicated gluten-free facility. Confirm when ordering.',
    vegan_status: 'options', vegan_label: 'Some vegan options',
    vegan_detail: 'Reviewers disagree. Some call it fully vegan or "dedicated to vegan/vegetarian" (August–September 2026), while a July 2026 celiac reviewer wrote "Not vegan". Ask which dishes are vegan.',
    hours_raw: 'No hours found (the shop posts on Instagram). Upstairs; order and pay at the window, then listen for your number.',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 1-15-24, upstairs',
    cuisine: 'Gluten-free takoyaki from soybean flour · takoyaki set with rice, soup and cabbage · GF dumplings, tempura, fries · vegan and vegetarian options · casual, punk, hostel-style room · one-person shop',
    website: IG, gmaps: gm('OKO takoyaki 東心斎橋'), menu_url: null,
    notes: '[Takoyaki · gluten-free soybean-flour takoyaki in Higashi-Shinsaibashi] An upstairs takoyaki spot from the people behind OKO Fun Okonomiyaki Bar on Dotonbori, with the same casual, hostel-style, slightly punk feel, run by one person. The takoyaki batter is soybean flour, so it is gluten-free. The set adds rice, soup and cabbage, and there are GF dumplings, tempura and fries. Order and pay at the window, find a seat, and wait for your number on the speaker. Opinions split: cheap, plentiful and "greatest meal my coeliac daughter has had since being in Japan" (July 2026), but others wanted more seasoning or preferred the okonomiyaki branch. Not a dedicated GF facility.',
    chef_bio: { chef_name: null, roles: [], origin: 'Higashi-Shinsaibashi 1-chōme', background: 'A sister shop of OKO (Fun Okonomiyaki Bar), per an August 2026 FMGF review; run by one person.', philosophy: null, specialty: 'Soybean-flour takoyaki.',
      anecdotes: [
        { text: '"Fully gluten free and vegan takoyaki place! Delicious food and it\'s made with soybean flour. We had the set meal which comes with rice, soup and cabbage too." — FMGF review, September 2026.', source: FM },
        { text: '"Very surreal and chaotic vibes from this place. Great value with tons of gluten free food for cheap… Not vegan but enjoyed the experience." — FMGF review, July 2026.', source: FM },
      ],
      japanese_sources_summary: 'FindMeGlutenFree: OKO takoyaki、大阪市中央区東心斎橋1-15-24、090-7571-8939、Instagram @oko_tako_osaka、グルテンフリーのメニューあり、グルテンフリー専門ではない、2階。口コミ(2026年): 大豆粉のたこ焼き、ご飯・スープ・キャベツ付きのセット、1人で営業、窓口で注文と支払い、番号で呼ばれる、ヴィーガン・ベジタリアンとグルテンフリーという声と「ヴィーガンではない」という声、味付けが物足りない、もう一方のOKOのほうが好き、パンクな雰囲気、安くて量が多い、セリアック病の娘が日本で一番食べた。',
      confidence: 'medium', sources: [FM, IG] },
    cultural_comfort: { level: 'english', note: 'Popular with overseas gluten-free travellers; order at the window.' },
    safety: { ...SAFETY0,
      gf_cross_contamination: [{ text: 'FMGF: "This establishment is NOT a dedicated gluten-free facility."', source: FM }],
      positives: [{ text: 'Takoyaki batter of soybean flour (FMGF review, September 2026); FMGF users report a dedicated GF fryer and kitchen space.', source: FM }],
      confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-15-24',
    existence: { status: 'confirmed', checked: TODAY, note: 'FMGF reviews from September 2026.' },
    pin_source: `FindMeGlutenFree ${FM} point; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目15番24号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [FM],
    price_note: 'No prices captured.', last_checked: TODAY, items: [
      it('たこ焼き', 'takoyaki', 'Soybean-flour takoyaki', '', 'Takoyaki', 'gf', 'ask', 'FMGF, September 2026.', 'takoyaki'),
      it('', '', 'Takoyaki set with rice, soup and cabbage', '', 'Sets', 'gf', 'ask', 'FMGF, September 2026.', 'takoyaki_set'),
      it('', '', 'Gluten-free dumplings / tempura / fries', '', 'Sides', 'gf', 'ask', 'FMGF users.', 'sides'),
    ] }, {
    cuisine: '大豆粉のグルテンフリーたこ焼き・ご飯、スープ、キャベツ付きのセット・グルテンフリーの餃子、天ぷら、ポテト・ヴィーガンやベジタリアンの選択肢・パンクでゲストハウス風の気軽な店・1人営業',
    neighborhood: '東心斎橋1-15-24、2階',
    gf_detail: '大豆粉のグルテンフリーのたこ焼き(FMGFの口コミ、2026年9月)。グルテンフリーの餃子、天ぷら、ポテト、チャーハンの報告も。「すべてグルテンフリー」という口コミもありますが、FMGFではグルテンフリー専門ではないとされています。注文時に確認を。',
    vegan_detail: '口コミが分かれています。完全ヴィーガン、「ヴィーガン・ベジタリアン専門」という声(2026年8〜9月)と、「ヴィーガンではない」という声(2026年7月)。どれがヴィーガンか確認を。',
    notes: '[たこ焼き・東心斎橋の大豆粉のグルテンフリーたこ焼き] 道頓堀のOKO Fun Okonomiyaki Barの姉妹店で、2階にあるたこ焼きの店。同じくゲストハウス風で少しパンクな雰囲気、1人で営業しています。生地は大豆粉でグルテンフリー。セットにはご飯、スープ、キャベツが付き、グルテンフリーの餃子、天ぷら、ポテトも。窓口で注文して支払い、席を見つけ、スピーカーで番号が呼ばれるのを待ちます。評価は分かれ、安くて量が多く「セリアック病の娘が日本で一番食べた」(2026年7月)という声も、味付けが物足りない、お好み焼きの店のほうが好きという声も。グルテンフリー専門ではありません。',
  });
}

// ================================================================ Shojin Sushi Minamo
{
  const FM = 'https://www.findmeglutenfree.com/biz/shojin-sushi-minamo/6403464188264448';
  const IG = 'https://www.instagram.com/shojin_sushi_minamo/';
  put({
    id: 'osaka_shojin_sushi_minamo', name: 'Shojin Sushi Minamo', category: 'BOTH',
    lat: 34.673935, lng: 135.49936, cuisine_type: 'sushi',
    gf_confidence: 'options', gf_label: 'Some GF options',
    gf_detail: 'FindMeGlutenFree marks it "Reported to be dedicated gluten-free". Celiac reviewers (2025–July 2026) say everything is gluten-free, including the soy sauce, with GF beer. The shop itself publishes only an Instagram account, so this rests on community reports. Confirm when you visit.',
    vegan_status: 'full', vegan_label: 'Fully vegan',
    vegan_detail: 'Shōjin (plant-based) sushi: reviewers describe it as entirely vegan, with vegetable sushi that "looks and tastes as if it were regular" (2025).',
    hours_raw: 'No hours found. A 2025 reviewer warns it was "only open at lunchtime". Check Instagram before going.',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinsaibashisuji 1-10-11, Keiwa Bldg (Lufre 21) — the northern end of Shinsaibashi',
    cuisine: 'Vegan, gluten-free shōjin sushi that looks like the real thing · mixed sushi sets · GF soy sauce and GF beer · counter seats facing the chef · jazz',
    website: IG, gmaps: gm('Shojin Sushi Minamo 心斎橋'), menu_url: null,
    notes: '[Sushi · vegan, gluten-free shōjin sushi in Shinsaibashi] A small sushi counter making shōjin (plant-based) sushi that is vegan and, by FMGF reports, entirely gluten-free, with GF soy sauce and GF beer. Reviewers say it "looks and tastes as if it were regular": creative, beautifully plated vegetable nigiri in a mixed set, made in front of you at the counter to quiet jazz. Celiac travellers call it an oasis in hectic Osaka and great value. Staff are friendly, though English may be basic. A 2025 reviewer said it was only open at lunchtime, so check Instagram first. The map pin is approximate.',
    chef_bio: { chef_name: null, roles: [], origin: 'Shinsaibashisuji 1-chōme', background: 'A vegan shōjin-sushi counter; Instagram @shojin_sushi_minamo. No source names the chef.', philosophy: null, specialty: 'Vegan, gluten-free shōjin sushi.',
      anecdotes: [
        { text: '"While the place is totally vegan and GF, the sushi looks and tastes as if it were regular. You can sit at the counter watching how the food is being prepared." — FMGF review, 2025.', source: FM },
        { text: '"Arrived with 6 mins to the last order and had the mixed sushi and ginger and some gf beers… And all gluten free, heaven for celiacs!" — FMGF review, November 2025.', source: FM },
      ],
      japanese_sources_summary: 'FindMeGlutenFree: Shojin Sushi Minamo、大阪市中央区心斎橋筋1-10-11 敬和ビル ルフレ21、Instagram @shojin_sushi_minamo、グルテンフリー専門と報告、公開コレクション25。口コミ(2025年〜2026年7月): ヴィーガンでグルテンフリーの寿司、本物の寿司のような見た目と味、盛り合わせ、ガリ、グルテンフリーのビールと醤油、カウンターで調理が見える、ジャズ、ランチだけの営業だったという声(2025年)、英語は基本的なものだけ、手頃な値段。営業時間は見つからず。',
      confidence: 'low', sources: [FM, IG] },
    cultural_comfort: { level: 'konnichiwa', note: 'Friendly staff, English may be basic (2025).' },
    safety: { ...SAFETY0,
      positives: [{ text: 'FMGF: "Reported to be dedicated gluten-free and celiac friendly"; celiac reviewers 2025–2026.', source: FM }],
      confidence: 'low', last_checked: TODAY },
    gf_proposed_tier: { to: 'dedicated', from: 'options', by: 'osaka dotonbori sweep', date: TODAY, confidence: 'low', note: NOTE },
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '大阪府大阪市中央区心斎橋筋1-10-11 敬和ビル ルフレ21',
    existence: { status: 'probable', checked: TODAY, note: 'FMGF reviews through July 2026; no hours or official page beyond Instagram.' },
    pin_source: `FindMeGlutenFree ${FM} point; GSI 大阪府大阪市中央区心斎橋筋一丁目10番11号 (go) is 171m away, so the pin rests on the FMGF point alone; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [FM],
    price_note: 'No prices captured.', last_checked: TODAY, items: [
      it('', '', 'Mixed shōjin sushi', '', 'Sushi', 'gf', 'vegan', 'FMGF, November 2025.', 'mixed_sushi'),
      it('', '', 'Gluten-free beer', '', 'Drinks', 'gf', 'vegan', 'FMGF, November 2025.', 'gf_beer'),
    ] }, {
    cuisine: '本物そっくりのヴィーガン・グルテンフリーの精進寿司・盛り合わせ・グルテンフリーの醤油とビール・職人の前のカウンター席・ジャズ',
    neighborhood: '心斎橋筋1-10-11 敬和ビル(ルフレ21)、心斎橋の北側',
    gf_detail: 'FindMeGlutenFreeでは「グルテンフリー専門と報告」。セリアック病の客(2025年〜2026年7月)は、醤油も含めすべてグルテンフリーで、グルテンフリーのビールもあると書いています。店はInstagram以外の情報を出しておらず、利用者の報告に基づきます。来店時に確認を。',
    vegan_detail: '精進(植物性)の寿司。口コミではすべてヴィーガンで、野菜の寿司が「普通の寿司のような見た目と味」(2025年)。',
    notes: '[寿司・心斎橋のヴィーガン・グルテンフリー精進寿司] 精進(植物性)の寿司を出す小さなカウンターで、ヴィーガン、FMGFの報告ではすべてグルテンフリー。グルテンフリーの醤油やビールも。「普通の寿司のような見た目と味」という野菜の握りは独創的で盛り付けも美しく、盛り合わせを目の前のカウンターで、静かなジャズの中で握ってくれます。セリアック病の旅行者には慌ただしい大阪のオアシスで、お得という声も。スタッフは親切ですが英語は基本的なものだけかも。2025年にはランチだけの営業だったという声があるので、先にInstagramで確認を。地図の位置はおおよそです。',
  }, {
    field: 'gf_confidence', current: 'options', recommended: 'dedicated', evidence: [FM, IG],
    why: "Independent first-hand corroboration only: FindMeGlutenFree 'Reported to be dedicated gluten-free and celiac friendly', celiac reviewers 2025–July 2026 calling it 'all gluten free', GF soy sauce and beer. No own claim found (Instagram only, not fetchable), no hours, and the address does not geocode cleanly (GSI 171 m off). Before any upgrade: confirm the shop is open, its hours, and that soy sauce, vinegar and every topping are gluten-free.",
  });
}

// ================================================================ Streamer Coffee Company
{
  const FM = 'https://www.findmeglutenfree.com/biz/streamer-coffee-company/5606320634200064';
  const IG = 'https://www.instagram.com/streamer_coffee_company/';
  put({
    id: 'osaka_streamer_coffee_shinsaibashi', name: 'Streamer Coffee Company 心斎橋', category: 'GF',
    lat: 34.673645, lng: 135.49799, cuisine_type: 'cafe',
    gf_confidence: 'options', gf_label: 'Some GF options',
    gf_detail: 'A coffee shop with a small range of gluten-free bakes (brownies, cookie bars, cakes), packaged separately from the regular ones (2025–2026). A sign outside advertises them, but not every item is available every day. The food in the case is not labelled: the GF options are listed on a poster, and in October 2026 a celiac was handed a regular cookie instead. Check each item against the poster. Not a dedicated gluten-free facility (FMGF).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Oat milk is available for lattes (2026); whether the GF bakes contain egg or dairy is not stated.',
    hours_raw: 'No hours found in a reachable source. Check Instagram.',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishi-Shinsaibashi 1-10-19 (Amerikamura side)',
    cuisine: 'Specialty coffee and lattes (oat milk available) · separately packaged gluten-free brownies (matcha chocolate, peanut butter, salted chocolate), cookie bars and cakes · takeaway',
    website: IG, gmaps: gm('STREAMER COFFEE COMPANY 心斎橋'), menu_url: null,
    notes: '[Café · coffee with gluten-free brownies in Nishi-Shinsaibashi] A Streamer Coffee Company café on the Amerikamura side of Shinsaibashi with a small range of gluten-free bakes, sealed separately from the regular ones. Gluten-free reviewers rave about the chewy brownies (matcha chocolate, peanut butter and chocolate, salted chocolate), "not too sweet", and the chocolate-chip and macadamia white-chocolate cookie bars. There is an oat chai latte too. Two cautions: the selection changes daily, and the food itself isn\'t labelled. Match your pick to the gluten-free poster, as one celiac ended up with an Oreo-topped regular cookie in October 2026. Good for takeaway breakfast.',
    chef_bio: { chef_name: null, roles: [], origin: 'Nishi-Shinsaibashi 1-chōme', background: 'A branch of Streamer Coffee Company (FMGF listing name; Instagram @streamer_coffee_company).', philosophy: null, specialty: 'Coffee; gluten-free brownies.',
      anecdotes: [
        { text: '"The brownies are the bomb: had chocolate matcha, peanut butter and chocolate, and salted chocolate. Perfectly baked, great chewy consistency, and not too sweet." — FMGF review, April 2026.', source: FM },
        { text: '"The food itself isn\'t labelled, all the gf options are featured on a big poster on the side and you have to check if the one you want is there." — FMGF review, October 2026.', source: FM },
      ],
      japanese_sources_summary: 'FindMeGlutenFree: Streamer Coffee Company、大阪市中央区西心斎橋1-10-19、06-6252-7088、Instagram @streamer_coffee_company、グルテンフリーのメニューあり、グルテンフリー専門ではない。口コミ(2025年〜2026年10月): グルテンフリーのケーキやお菓子は少しで個包装、抹茶チョコ・ピーナッツバターチョコ・塩チョコのブラウニー、マカダミアホワイトチョコのバー、チョコチップ、オーツチャイラテ、店外にグルテンフリーの看板、毎日全部あるわけではない、商品にラベルがなくポスターで確認、グルテンフリーのブラウニーが売り切れで普通のクッキーを渡された(2026年10月)、グルテンフリーカードを見て飲み物も確認してくれた。',
      confidence: 'medium', sources: [FM, IG] },
    cultural_comfort: { level: 'english', note: 'Staff understood a gluten-free card and checked the drink (October 2026).' },
    safety: { ...SAFETY0,
      gf_cross_contamination: [
        { text: 'Items in the case are not labelled; GF options are only on a poster. A celiac was given a regular cookie when the GF brownie sold out (October 2026).', source: FM },
        { text: 'FMGF: "This establishment is NOT a dedicated gluten-free facility."', source: FM },
      ],
      staff_allergy_handling: [{ text: '"Showed them my gf card and they understood and checked if my drink was gf too." — FMGF review, October 2026.', source: FM }],
      positives: [{ text: 'GF sweets are packaged separately from other items (FMGF reviews, 2025).', source: FM }],
      confidence: 'medium', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区西心斎橋1-10-19',
    existence: { status: 'confirmed', checked: TODAY, note: 'FMGF reviews from October 2026.' },
    pin_source: `FindMeGlutenFree ${FM} point; cross-checked: GSI 大阪府大阪市中央区西心斎橋一丁目10番19号 (go) 22m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [FM],
    price_note: 'No prices captured.', last_checked: TODAY, items: [
      it('', '', 'Gluten-free brownies (matcha chocolate, peanut butter chocolate, salted chocolate)', '', 'Sweets', 'gf', 'ask', 'Packaged separately; check the poster (2026).', 'gf_brownie'),
      it('', '', 'Gluten-free cookie bars (chocolate chip, macadamia white chocolate)', '', 'Sweets', 'gf', 'ask', '2025–2026.', 'gf_cookie_bar'),
      it('', '', 'Oat chai latte', '', 'Drinks', 'ask', 'ask', 'March 2026.', 'oat_chai'),
    ] }, {
    cuisine: 'スペシャルティコーヒーとラテ(オーツミルクあり)・個包装のグルテンフリーのブラウニー(抹茶チョコ、ピーナッツバター、塩チョコ)、クッキーバー、ケーキ・持ち帰り',
    neighborhood: '西心斎橋1-10-19(アメリカ村側)',
    gf_detail: 'コーヒー店で、グルテンフリーの焼き菓子(ブラウニー、クッキーバー、ケーキ)が少しあり、普通の商品とは別に個包装(2025〜2026年)。店外に看板がありますが、毎日すべてそろうわけではありません。ケースの商品にはラベルがなく、グルテンフリーのものはポスターに載っているだけで、2026年10月にはセリアック病の客が普通のクッキーを渡されています。一つずつポスターと照らし合わせて。グルテンフリー専門ではありません(FMGF)。',
    vegan_detail: '要確認。ラテにはオーツミルクがあります(2026年)。グルテンフリーの焼き菓子に卵や乳製品が入るかは書かれていません。',
    notes: '[カフェ・西心斎橋のコーヒーとグルテンフリーのブラウニー] 心斎橋のアメリカ村側にあるStreamer Coffee Companyの店で、普通の商品とは別に個包装したグルテンフリーの焼き菓子が少しあります。グルテンフリーの客には、もっちりした「甘すぎない」ブラウニー(抹茶チョコ、ピーナッツバターとチョコ、塩チョコ)や、チョコチップとマカダミアホワイトチョコのクッキーバーが好評。オーツチャイラテも。注意点は2つで、品ぞろえが日によって変わることと、商品自体にラベルがないこと。グルテンフリーのポスターと照らし合わせて選んで(2026年10月にオレオ付きの普通のクッキーを食べてしまったセリアック病の客も)。持ち帰りの朝食にも。',
  });
}

// ================================================================ Vegan Cafe Tsukineko
{
  const FM = 'https://www.findmeglutenfree.com/biz/vegan-cafe-tsukineko/4888370975473664';
  const IG = 'https://www.instagram.com/vegancafe_tsukineko/';
  put({
    id: 'osaka_vegan_cafe_tsukineko', name: 'Vegan Cafe Tsukineko', category: 'BOTH',
    lat: 34.66301, lng: 135.49951, cuisine_type: 'cafe',
    gf_confidence: 'options', gf_label: 'Some GF options',
    gf_detail: 'FMGF reviewers (2025–October 2026) describe a menu that is gluten-free and vegan except for one drink, which is marked: rice-flour pancakes, gyoza, tempura from a reported dedicated GF fryer, curry, scones and ice cream with GF biscuit. A Spanish-language reviewer adds "sin trazas" (no traces). FMGF still marks it NOT a dedicated gluten-free facility. Ask about the one marked drink and confirm.',
    vegan_status: 'full', vegan_label: 'Fully vegan',
    vegan_detail: 'A vegan café: reviewers describe the whole menu as vegan (soy cream, vegan cream with the scones, vegan ice cream).',
    hours_raw: 'No hours found (Instagram only). Lunch and brunch reported. Only 7 seats, so service can be slow at busy times (October 2026).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nanbanaka 1-14-12, Ebenezer Bldg 1F, Naniwa-ku — a few minutes south-west of Namba',
    cuisine: 'Vegan, gluten-free café · cat-shaped rice-flour pancakes with fruit and soy cream · gyoza · vegetable tempura · vegan curry · scones with vegan cream · vegan ice cream with GF biscuit and granola · 7 seats, cat theme',
    website: IG, gmaps: gm('Vegan Cafe Tsukineko 難波中'), menu_url: null,
    notes: '[Café · vegan, gluten-free cat café-style kitchen south of Namba] A tiny, minimalist, cat-themed café with only 7 seats and low jazz, where the menu is vegan and, by reviewers\' accounts, gluten-free except for one marked drink. Favourites: cat-shaped rice-flour pancakes with fruit and soy cream, crisp vegetable tempura (even the eggplant won over a sceptic), gyoza, vegan curry with tempura, scones with apple and vegan cream, and vegan ice cream with GF biscuit and granola. For many celiac visitors it was the first gyoza or tempura in years. Portions are small and some find it pricey; one couple paid about AU$25 for two pancakes. There is room for only one or two groups, so it\'s not for big parties.',
    chef_bio: { chef_name: null, roles: [], origin: 'Nanbanaka 1-chōme, Naniwa-ku', background: 'A vegan café on Instagram as @vegancafe_tsukineko; no source names the owner.', philosophy: null, specialty: 'Vegan, gluten-free pancakes, gyoza and tempura.',
      anecdotes: [
        { text: '"Cute little cat themed cafe. Menu is gluten free and vegan. We had the pancakes with fruit and soy cream. Very tasty. Very small venue, only 7 seats." — FMGF review, October 2026.', source: FM },
        { text: '"I had the vegan curry with vegetable tempura and it was super good… The tempura was very crunchy. Like someone below said, everything is gf except one drink." — FMGF review, January 2026.', source: FM },
      ],
      japanese_sources_summary: 'FindMeGlutenFree: Vegan Cafe Tsukineko、大阪市浪速区難波中1-14-12 エベンエゼルビル1F、06-4400-3987、Instagram @vegancafe_tsukineko、グルテンフリーのメニューあり、グルテンフリー専門ではない、専用フライヤーの報告。口コミ(2025年〜2026年10月): 猫がテーマの小さなカフェ、7席、メニューはグルテンフリーでヴィーガン(飲み物1つを除き表示あり)、フルーツと豆乳クリームのパンケーキ、猫の形のパンケーキ、餃子、天ぷら(なすも)、ヴィーガンカレー、りんごとヴィーガンクリームのスコーン、ヴィーガンアイスとグルテンフリーのビスケットとグラノーラ、ジャズ、量が少なく高めという声、混む土曜の昼は提供が遅い、「トレースなし」。',
      confidence: 'medium', sources: [FM, IG] },
    cultural_comfort: { level: 'english', note: 'A regular stop for gluten-free and vegan travellers; tiny room.' },
    safety: { ...SAFETY0,
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: '"Almost everything is GF, except one drink and it\'s noted." — FMGF review, 2025.', source: FM }],
      positives: [
        { text: 'Reviewers describe the whole food menu as gluten-free and vegan; FMGF users report a dedicated GF fryer.', source: FM },
        { text: '"Sitio pequeño, con panqueques, gyozas, postres sin gluten, sin trazas!" — FMGF review, 2025.', source: FM },
      ],
      confidence: 'medium', last_checked: TODAY },
    gf_proposed_tier: { to: 'high', from: 'options', by: 'osaka dotonbori sweep', date: TODAY, confidence: 'medium', note: NOTE },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区難波中1-14-12 エベンエゼルビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'FMGF reviews from October 2026.' },
    pin_source: `FindMeGlutenFree ${FM} point; cross-checked: GSI 大阪府大阪市浪速区難波中一丁目14番12号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [FM],
    price_note: 'No prices captured; dishes from 2025–2026 FMGF reviews. Reviewers describe the food menu as gluten-free and vegan.', last_checked: TODAY, items: [
      it('', '', 'Rice-flour pancakes with fruit and soy cream (cat-shaped)', '', 'Sweets', 'gf', 'vegan', 'October 2026.', 'pancakes'),
      it('', '', 'Gyoza', '', 'Mains', 'gf', 'vegan', '2025–2026.', 'gyoza'),
      it('', '', 'Vegetable tempura', '', 'Mains', 'gf', 'vegan', 'January 2026.', 'tempura'),
      it('', '', 'Vegan curry rice with tempura', '', 'Mains', 'gf', 'vegan', 'January 2026.', 'curry'),
      it('', '', 'Scone with apple and vegan cream', '', 'Sweets', 'gf', 'vegan', 'March 2026.', 'scone'),
      it('', '', 'Vegan ice cream with GF biscuit and granola', '', 'Sweets', 'gf', 'vegan', '2025.', 'ice_cream'),
    ] }, {
    cuisine: 'ヴィーガン・グルテンフリーのカフェ・猫の形の米粉パンケーキ(フルーツと豆乳クリーム)・餃子・野菜の天ぷら・ヴィーガンカレー・ヴィーガンクリームのスコーン・グルテンフリーのビスケットとグラノーラのヴィーガンアイス・7席、猫がテーマ',
    neighborhood: '浪速区難波中1-14-12 エベンエゼルビル1F。なんばから南西へ数分',
    gf_detail: 'FMGFの口コミ(2025年〜2026年10月)によると、表示のある飲み物1つを除き、メニューはグルテンフリーでヴィーガン。米粉のパンケーキ、餃子、専用フライヤーの報告がある天ぷら、カレー、スコーン、グルテンフリーのビスケット付きのアイス。スペイン語の口コミでは「トレースなし」とも。ただしFMGFではグルテンフリー専門ではないとされています。表示のある飲み物について確認を。',
    vegan_detail: 'ヴィーガンカフェ。口コミではメニューはすべてヴィーガン(豆乳クリーム、スコーンのヴィーガンクリーム、ヴィーガンアイス)。',
    notes: '[カフェ・なんば南のヴィーガン・グルテンフリーの猫のカフェ] 席が7つだけの、ミニマルで猫がテーマの小さなカフェで、静かなジャズが流れます。メニューはヴィーガンで、口コミによれば表示のある飲み物1つを除いてグルテンフリー。人気は猫の形の米粉パンケーキ(フルーツと豆乳クリーム)、サクサクの野菜の天ぷら(苦手ななすも食べられたという客も)、餃子、天ぷら付きのヴィーガンカレー、りんごとヴィーガンクリームのスコーン、グルテンフリーのビスケットとグラノーラのヴィーガンアイス。セリアック病の客には何年ぶりかの餃子や天ぷらになることも。量は少なめで高めという声もあり、パンケーキ2枚で約25豪ドルだった客も。1〜2組しか入れないので大人数には向きません。',
  }, {
    field: 'gf_confidence', current: 'options', recommended: 'high', evidence: [FM, IG],
    why: "Independent first-hand corroboration: FindMeGlutenFree reviewers 2025–October 2026 describe the food menu as entirely gluten-free and vegan except one marked drink; dedicated GF fryer reported; 'sin trazas'. No own claim captured (Instagram only), and FMGF marks it not a dedicated facility, so 'high' rather than 'dedicated'. Ask: which drink contains gluten, and is the kitchen otherwise gluten-free (flours, soy sauce, the gyoza dipping sauce)?",
  });
}

save();
