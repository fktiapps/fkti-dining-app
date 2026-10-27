// Osaka sweep (2-mile circle around Dotonbori), batch 60 — ramen phase, chain branches left over from b58 (all OMNI).
//   + 一風堂 なんば店 (Hakata tonkotsu; free spicy bean sprouts and takana on request)
//   + 天下一品 難波ウインズ前店 (kotteri chicken ramen; Tenka Ippin Day coupons)
//   + 希望軒 心斎橋長堀店 (tonkotsu and spicy goma-miso, open to 6 am)
//   + 油そば・まぜそば ロマン なんば南口店 (abura-soba inside Nankai Namba Stn, 2F; pin approximate)
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-27';
const { put, save } = openCitySweep('osaka', TODAY, 60);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 一風堂 なんば店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27003207/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://www.ippudo.com/';
  const W = day(['10:30', '23:00']), F = day(['10:30', '01:00']);
  put({
    id: 'osaka_ippudo_namba', name: '一風堂 なんば店 (Ippudo Namba)', category: 'OMNI',
    lat: 34.662871, lng: 135.500518, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thin wheat noodles; tare and spicy miso not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone broth, chashu, egg.',
    hours_raw: 'Mon–Thu and Sun 10:30–23:00; Fri–Sat 10:30–1:00 am; hours may change (Tabelog). Spicy bean sprouts, takana, pickled ginger and garlic brought free on request (August–October 2026). App coupons (August 2026). Cards, e-money and QR accepted (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: F, 5: F, 6: W }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nambanaka 3-1-17, Naniwa — about 3 min from Nankai Namba Stn',
    cuisine: 'Hakata tonkotsu from the Ippudo chain · Akamaru Shinaji with spicy miso · Shiromaru · thin noodles in four firmness levels from barikata to yawa · kaedama · free spicy bean sprouts, takana, pickled ginger and garlic on request · limited miso ramen and abura-soba (2026) · 32 seats',
    website: OWN, gmaps: gm('一風堂 なんば店'), menu_url: null,
    notes: "[Ramen · Hakata Ippudo by Nankai Namba] The Namba branch of the Hakata Ippudo chain, three minutes from Nankai Namba and open until 1 am on Fridays and Saturdays. It's busy with visitors from abroad. Reviewers split between the Akamaru Shinaji, with a touch of spicy miso, and the plain Shiromaru tonkotsu, with thin noodles cooked to one of four firmness levels from barikata (extra firm) to yawa (soft). Order a kaedama for more noodles. Ask the staff for the free spicy bean sprouts, takana, pickled ginger and garlic; they come in a generous dish. Limited bowls rotate, such as a garlicky vegetable miso ramen in April and an abura-soba in September 2026. The Ippudo app gives coupons for things like a free egg or extra noodles.",
    chef_bio: { chef_name: null, roles: [], origin: 'Namba branch (Tabelog)', background: 'Hakata Ippudo chain (ippudo.com).', philosophy: null, specialty: 'Akamaru Shinaji; Shiromaru.',
      anecdotes: [
        { text: '"I usually stick to that with the extra-firm noodles and a side of kaedama… You can ask the staff for bean sprouts, garlic, takana (pickled mustard greens), and ginger." — August 2026, Akamaru; the staff bring them over.', source: R + 'B533719531/' },
        { text: '"You can choose the firmness of the noodles from 4 options: Bari Kata (extra firm), Kata (firm), Futsuu (regular), and Yawa (soft)." — August 2026.', source: R + 'B534118166/' },
      ],
      japanese_sources_summary: '公式 ippudo.com。食べログ: 一風堂 なんば店、大阪市浪速区難波中3-1-17、南海なんば駅から徒歩3分、月〜木・日10:30〜23:00、金・土10:30〜翌1:00、カード・電子マネー・QR可、32席、禁煙。口コミ(2026年4〜10月): Akamaru Shinaji、無料の辛もやしにごま、Shiromaruより少し辛い、替え玉は硬めで、期間限定の味噌ラーメン(野菜とにんにく、太麺)、アプリのクーポンで卵、細麺とスープ、もやし・にんにく・高菜・生姜は頼めば持ってきてくれる、観光客が多い、バリカタ・カタ・ふつう・やわの4段階、厚切りのバラチャーシュー、アプリで100ポイント、紅しょうが、期間限定の油そば、濃厚なスープ、替え玉クーポンで850円、辛もやしは頼むタイプで多めに出してくれる。',
      confidence: 'medium', sources: [TB, OWN, R + 'B533719531/', R + 'B534118166/', R + 'B517315521/', R + 'B534315749/', R + 'B535922928/', R + 'B536628767/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'paitan', tare: [], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Thin noodles, four firmness levels; kaedama available (August–October 2026).' },
      regional_style: ['Hakata'], sub_genre: ['ramen'],
      signature_bowl: 'Akamaru Shinaji (October 2026).',
      chashu: 'Thick, tender belly chashu (August–September 2026).',
      notable_toppings: ['spicy bean sprouts', 'takana', 'pickled ginger', 'garlic'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork-bone broth.' },
      pantheon: 'Namba\'s Ippudo: Hakata tonkotsu at your chosen firmness, with free spicy sprouts and takana on request.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 3, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B535922928/', '"The rich and thick broth paired beautifully with the noodles."'],
        oiliness: [R + 'B535922928/', 'No comment on oil — mid-scale.'],
        clarity: [R + 'B535922928/', 'Thick tonkotsu — opaque.'],
        tare_strength: [R + 'B517315521/', '"Just a hint of spiciness" on the Akamaru — mid-scale.'],
        noodle_firmness: [R + 'B517315521/', 'Ordered firm; "they soften a bit as you eat."'],
        aroma_punch: [R + 'B533719531/', 'Garlic added at will — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B535922928/', R + 'B517315521/', R + 'B533719531/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Chain ramen; many overseas guests (August 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区難波中3-1-17',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区難波中三丁目1番17号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534118166/', R + 'B536628767/'],
    price_note: 'Few prices captured; one August 2026 special bowl was ¥1,290.', last_checked: TODAY, items: [
      it('', '', 'Akamaru Shinaji', '', 'Ramen', 'no', 'no', 'September–October 2026.', 'akamaru'),
      it('', '', 'Shiromaru', '', 'Ramen', 'no', 'no', 'October 2026.', 'shiromaru'),
      it('', '', 'Kaedama (extra noodles)', '', 'Options', 'no', 'no', 'October 2026.', 'kaedama'),
      it('', '', 'Spicy bean sprouts (free, on request)', '', 'Condiments', 'ask', 'ask', 'October 2026.', 'moyashi'),
    ] }, {
    cuisine: '一風堂の博多豚骨・辛味噌のAkamaru Shinaji・Shiromaru・バリカタからやわまで4段階の細麺・替え玉・辛もやし、高菜、紅しょうが、にんにくは頼めば無料・期間限定の味噌ラーメンや油そば(2026年)・32席',
    neighborhood: '浪速区難波中3-1-17。南海なんば駅から徒歩約3分',
    gf_detail: 'グルテンフリーではありません。小麦の細麺、たれや辛味噌の中身は不明。',
    vegan_detail: 'ヴィーガンではありません。豚骨スープ、チャーシュー、卵。',
    notes: '[ラーメン・南海なんば近くの博多一風堂] 南海なんば駅から3分の博多一風堂のなんば店で、金・土は深夜1時まで。海外からの客でにぎわいます。辛味噌が少し入った口コミではAkamaru Shinaji派とシンプルなShiromaru派に分かれ、細麺はバリカタからやわまで4段階で。替え玉もどうぞ。無料の辛もやし、高菜、紅しょうが、にんにくはスタッフに頼めば多めの器で持ってきてくれます。限定も入れ替わり、4月はにんにくの効いた野菜味噌、9月は油そば(2026年)。一風堂のアプリでは卵や替え玉のクーポンも。',
  });
}

// ================================================================ 天下一品 難波ウインズ前店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27015596/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://www.tenkaippin.co.jp/';
  const W = day(['11:00', '21:00']), F = day(['11:00', '22:00']);
  put({
    id: 'osaka_tenka_ippin_namba_wins', name: '天下一品 難波ウインズ前店 (Tenka Ippin Namba Wins-mae)', category: 'OMNI',
    lat: 34.662709, lng: 135.500908, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; gyoza and fried rice.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: rich broth not described as meat-free; chashu.',
    hours_raw: 'Mon, Wed, Thu and Sun 11:00–21:00 (L.O. 20:30); Fri–Sat 11:00–22:00 (L.O. 21:30); closed Tuesday (moved when a holiday); hours may change (Tabelog). Self-service condiment corner and water dispenser (October 2026). Cards, e-money and QR accepted (Tabelog).',
    hours: { 0: W, 2: W, 3: W, 4: F, 5: F, 6: W }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nambanaka 2-8-99, Naniwa — 1 min from Nankai Namba Stn west exit, opposite WINS Namba',
    cuisine: 'Tenka Ippin kotteri ramen · rich ramen ¥920 (October 2026) · spicy miso on the table · free condiment corner with pickled cucumber, red ginger, spicy takana and grated garlic · gyoza · fried rice · lunch set with chashu rice bowl · summer cold ramen with citrus · 52 seats',
    website: OWN, gmaps: gm('天下一品 難波ウインズ前店'), menu_url: null,
    notes: "[Ramen · Tenka Ippin's kotteri ramen opposite WINS Namba] A 52-seat branch of the Tenka Ippin chain a minute from Nankai Namba's west exit, open since 2003. Everyone comes for the kotteri: a famously thick, rich broth, ¥920 in October 2026. Stir in spicy miso from the table, and load a side plate from the self-service corner with pickled cucumber (which tastes of garlic), red ginger, spicy takana and grated garlic. Green onions were dropped from the corner because of rising prices. Gyoza with crisp edges, fried rice, and a lunch set with a chashu rice bowl fill it out, and a summer cold ramen had a refreshing citrus broth. On Tenka Ippin Day, 1 October, visitors get coupons, and lines form by evening. Closed Tuesdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 25 May 2003 (Tabelog)', background: 'Tenka Ippin chain (tenkaippin.co.jp).', philosophy: null, specialty: 'Kotteri ramen.',
      anecdotes: [
        { text: '"At the service corner, I prepared some pickled cucumbers, red ginger, and spicy takana on a small plate… When the ramen arrived, I added some spicy miso." — October 2026, rich ramen.', source: R + 'B53265384/' },
        { text: '"I noticed several changes, such as a water dispenser being placed near the seating area and the absence of green onions at the service counter. I was told that the lack of green onions was due to rising prices." — October 2026.', source: R + 'B536667854/' },
      ],
      japanese_sources_summary: '公式 tenkaippin.co.jp。食べログ: 天下一品 難波ウインズ前店、大阪市浪速区難波中2丁目8-99、南海なんば駅西口から徒歩1分、月・水・木・日11:00〜21:00(L.O.20:30)、金・土11:00〜22:00(L.O.21:30)、火曜休み(祝日は振替)、カード・電子マネー・QR可、52席、禁煙、2003年5月25日開店。口コミ(2026年8〜10月): 10月1日の天下一品の日、こってり920円、辛味噌、アプリのクーポン、サービスコーナーにきゅうりの漬物・紅しょうが・辛高菜、ご飯、くじでジグソーパズル、餃子と炒飯、夏の冷やしラーメンは柑橘の風味、無料ラーメン券、ランチセットのチャーシュー丼、給水機、値上げでねぎはなくなった、おろしにんにく、夜7時は空いていたが帰りには行列。',
      confidence: 'medium', sources: [TB, OWN, R + 'B53265384/', R + 'B536667854/', R + 'B517393873/', R + 'B533842524/', R + 'B536841234/', R + 'B537004824/'] },
    ramen: {
      broth_base: [], broth_texture: 'paitan', tare: [], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: null, shape: null, hydration: null, handmade: false, notes: 'Not described.' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Rich (kotteri) ramen, ¥920 (October 2026).',
      chashu: null,
      notable_toppings: ['spicy miso', 'spicy takana', 'pickled cucumber', 'grated garlic'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Broth not described.' },
      pantheon: 'Namba\'s Tenka Ippin: the thick kotteri bowl, dressed from a free corner of pickles, takana and garlic.',
      profile: { richness: 5, oiliness: 3, clarity: 1, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B533842524/', '"It was the epitome of \'richness\'."'],
        oiliness: [R + 'B537004824/', 'No comment on oil — mid-scale.'],
        clarity: [R + 'B533842524/', 'Kotteri broth — opaque.'],
        tare_strength: [R + 'B517393873/', 'No comment on salt — mid-scale.'],
        noodle_firmness: [R + 'B537004824/', 'No comment on noodles — mid-scale.'],
        aroma_punch: [R + 'B536841234/', 'Spicy miso and grated garlic added at will — mid-scale.'],
      },
      confidence: 'low', sources: [R + 'B533842524/', R + 'B517393873/', R + 'B536841234/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Self-service condiment corner.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区難波中2丁目8-99',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区難波中二丁目8番99号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B517393873/', R + 'B533842524/', R + 'B536667854/'],
    price_note: 'One price from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Rich (kotteri) ramen', '¥920', 'Ramen', 'no', 'no', 'October 2026.', 'kotteri'),
      it('', '', 'Lunch set with chashu rice bowl', '', 'Sets', 'no', 'no', 'October 2026.', 'lunch_set'),
      it('', '', 'Gyoza', '', 'Sides', 'no', 'no', 'October 2026.', 'gyoza'),
      it('', '', 'Fried rice', '', 'Sides', 'no', 'no', 'October 2026.', 'chahan'),
      it('', '', 'Cold ramen (summer)', '', 'Seasonal', 'no', 'no', 'August 2026.', 'hiyashi'),
    ] }, {
    cuisine: '天下一品のこってりラーメン・こってり920円(2026年10月)・卓上の辛味噌・無料のサービスコーナー(きゅうりの漬物、紅しょうが、辛高菜、おろしにんにく)・餃子・炒飯・チャーシュー丼のランチセット・夏は柑橘の冷やしラーメン・52席',
    neighborhood: '浪速区難波中2丁目8-99。南海なんば駅西口から徒歩1分、WINS難波の前',
    gf_detail: 'グルテンフリーではありません。小麦の麺、餃子と炒飯。',
    vegan_detail: 'ヴィーガンではありません。濃厚なスープの中身は不明、チャーシュー。',
    notes: '[ラーメン・WINS難波前の天下一品のこってり] 南海なんば駅西口から1分の天下一品の店で、52席、2003年開店。目当てはこってりで、おなじみのとろりと濃厚なスープ、2026年10月で920円。卓上の辛味噌を溶かし、セルフのコーナーからにんにくの効いたきゅうりの漬物、紅しょうが、辛高菜、おろしにんにくを小皿に。ねぎは値上げのためコーナーからなくなったそう。縁がカリッとした餃子、炒飯、チャーシュー丼のランチセットもあり、夏の冷やしラーメンは柑橘の爽やかなスープ。10月1日の天下一品の日にはクーポンが配られ、夕方から行列も。火曜定休。',
  });
}

// ================================================================ 希望軒 心斎橋長堀店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27014425/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://kibou-ken.com/';
  put({
    id: 'osaka_kiboken_shinsaibashi_nagahori', name: '希望軒 心斎橋長堀店 (Kibou Ken Shinsaibashi Nagahori)', category: 'OMNI',
    lat: 34.674847, lng: 135.504484, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; goma-miso soup; gyoza.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: tonkotsu broth, minced meat in the goma-miso, chashu.',
    hours_raw: 'Daily 11:00–6:00 am (L.O. 5:30) (Tabelog). Cash or PayPay only: no cards or e-money (Tabelog; July 2026).',
    hours: ALL(day(['11:00', '06:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 1-10-9 — about 5 min from Shinsaibashi or Nagahoribashi Stn, on Nagahori-dori',
    cuisine: 'Long-running chain: tonkotsu ramen with thin noodles in a thick broth · goma-miso ramen with a choice of spice, up to "Ultra" · spicy tsukemen ¥1,080, goma-miso tsukemen "Pirika" · ajitama ¥120 · free garlic and garlic-chive kimchi · soup-wari for tsukemen · gyoza and rice set · hinepon · highballs · 28 counter seats',
    website: OWN, gmaps: gm('希望軒 心斎橋長堀店'), menu_url: null,
    notes: "[Ramen · Kibou Ken's tonkotsu and spicy goma-miso, open to 6 am] A 28-seat counter on Nagahori-dori from the long-running Kibou Ken chain, open from 11 am until 6 am. Two styles anchor the menu. The tonkotsu has a thick broth clinging to thin noodles, not overwhelming, and a nostalgic Shinsaibashi taste for some. The goma-miso is nutty, with a spice level you choose; the \"Ultra\" level was just about manageable for one spice-shy diner. A regular with thousands of bowls logged swears by the spicy tsukemen (¥1,080, October 2026) and the goma-miso \"Pirika\" tsukemen, stirred with the free garlic and garlic-chive kimchi and finished with soup-wari. There's an ajitama for ¥120, gyoza and rice sets, hinepon and highballs. One returning diner thought it had slipped. Cash or PayPay.",
    chef_bio: { chef_name: null, roles: [], origin: 'Shinsaibashi Nagahori branch (Tabelog)', background: 'Kibou Ken, a long-standing ramen chain (September 2026 review); official site kibou-ken.com.', philosophy: null, specialty: 'Tonkotsu ramen; spicy goma-miso.',
      anecdotes: [
        { text: '"I mixed the garlic and kimchi into the broth, which had a spicy sesame miso flavor… After finishing the noodles, I enjoyed the broth with a dilution of soup." — October 2026, spicy tsukemen ¥1,080 with an ajitama ¥120.', source: R + 'B420186680/' },
        { text: '"Their signature \'Tonkotsu Ramen\' features a thick, flavorful broth that perfectly clings to the thin noodles." — July 2026.', source: R + 'B532565281/' },
      ],
      japanese_sources_summary: '公式 kibou-ken.com。食べログ: 希望軒 心斎橋長堀店、大阪市中央区東心斎橋1-10-9、心斎橋駅・長堀橋駅から徒歩5分、毎日11:00〜翌6:00(L.O.5:30)、カード・電子マネー不可、QR可(PayPay)、28席、禁煙。口コミ(2026年7〜10月): 辛つけ麺1,080円と味玉120円、にんにくとニラキムチ、ごま味噌の辛いスープ、スープ割り、ごま味噌つけ麺Pirika、中太のちぢれ麺、ひき肉、豚バラのチャーシュー、豚骨ラーメンは濃厚なスープが細麺に絡む、ごま味噌ラーメンは辛さを選べる、現金とPayPay、以前ほどではないという声、老舗チェーン、ごま味噌ラーメン大と餃子とライスのセット1,640円、Ultra、ひねポン、ハイボール、懐かしい心斎橋のラーメン、くどくない豚骨。',
      confidence: 'medium', sources: [TB, OWN, R + 'B420186680/', R + 'B532565281/', R + 'B535725611/', R + 'B535963322/', R + 'B537294860/', R + 'B532915437/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'paitan', tare: ['miso'], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'thin', shape: null, hydration: null, handmade: false, notes: 'Thin noodles for the tonkotsu (July 2026); medium-thick curly for the tsukemen (August 2026).' },
      regional_style: [], sub_genre: ['ramen', 'tsukemen'],
      signature_bowl: 'Tonkotsu ramen; spicy goma-miso tsukemen ¥1,080 (October 2026).',
      chashu: 'Thin slices; fatty pork belly on the tsukemen (August–October 2026).',
      notable_toppings: ['garlic', 'garlic-chive kimchi', 'ajitama', 'minced meat'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Tonkotsu broth.' },
      pantheon: 'Nagahori-dori\'s all-night Kibou Ken: thick tonkotsu on thin noodles, or a fiery goma-miso with garlic-chive kimchi.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 3, noodle_firmness: 3, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B532565281/', '"A thick, flavorful broth that perfectly clings to the thin noodles."'],
        oiliness: [R + 'B537294860/', '"Though it\'s tonkotsu, it\'s not overwhelming" — mid-scale.'],
        clarity: [R + 'B532565281/', 'Thick tonkotsu — opaque.'],
        tare_strength: [R + 'B535725611/', '"Delicious, but nothing that truly blew me away" — mid-scale.'],
        noodle_firmness: [R + 'B420186680/', 'No comment on firmness — mid-scale.'],
        aroma_punch: [R + 'B420186680/', '"The garlic was strong."'],
      },
      confidence: 'medium', sources: [R + 'B532565281/', R + 'B420186680/', R + 'B537294860/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter seats; cash or PayPay.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-10-9',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目10番9号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B420186680/', R + 'B535725611/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Tonkotsu ramen', '', 'Ramen', 'no', 'no', 'July and October 2026.', 'tonkotsu'),
      it('', '', 'Goma-miso ramen (choose spice level)', '', 'Ramen', 'no', 'no', 'July–September 2026.', 'goma_miso'),
      it('', '', 'Spicy tsukemen', '¥1,080', 'Tsukemen', 'no', 'no', 'October 2026.', 'kara_tsuke'),
      it('', '', 'Ajitama', '¥120', 'Toppings', 'ask', 'no', 'October 2026.', 'ajitama'),
      it('', '', 'Large goma-miso ramen with gyoza and rice set', '¥1,640', 'Sets', 'no', 'no', 'September 2026.', 'set'),
    ] }, {
    cuisine: '老舗チェーンの豚骨ラーメン(濃厚なスープに細麺)・辛さを選べるごま味噌ラーメン(Ultraまで)・辛つけ麺1,080円、ごま味噌つけ麺Pirika・味玉120円・無料のにんにくとニラキムチ・つけ麺のスープ割り・餃子とライスのセット・ひねポン・ハイボール・カウンター28席',
    neighborhood: '東心斎橋1-10-9。長堀通り沿い、心斎橋駅・長堀橋駅から徒歩約5分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、ごま味噌のスープ、餃子。',
    vegan_detail: 'ヴィーガンではありません。豚骨スープ、ごま味噌のひき肉、チャーシュー。',
    notes: '[ラーメン・朝6時までの希望軒の豚骨と辛いごま味噌] 長堀通り沿いにある老舗チェーン・希望軒のカウンター28席の店で、朝11時から翌朝6時まで。柱は2つ。豚骨は濃厚なスープが細麺に絡み、くどくなく、懐かしい心斎橋の味という人も。ごま味噌は香ばしく、辛さを選べ、「Ultra」は辛いのが苦手な人がなんとか食べられる程度だったそう。数千杯を食べ歩く常連は辛つけ麺(1,080円、2026年10月)やごま味噌つけ麺「Pirika」に、無料のにんにくとニラキムチを混ぜ、最後はスープ割りで。味玉120円、餃子とライスのセット、ひねポン、ハイボールも。以前ほどではないと感じた人も。現金かPayPayで。',
  });
}

// ================================================================ 油そば・まぜそば ロマン なんば南口店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27148504/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_roman_namba_minamiguchi', name: '油そば・まぜそば ロマン なんば南口店 (Abura-soba Maze-soba Roman Namba Minamiguchi)', category: 'OMNI',
    lat: 34.66279, lng: 135.502649, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thick wheat noodles; sauce not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat and egg on the mazesoba.',
    hours_raw: 'Daily 11:00–15:30 and 17:00–22:00; hours may change (Tabelog). Delivery available (July 2026). Cash only: no cards, e-money or QR (Tabelog).',
    hours: ALL(day(['11:00', '15:30'], ['17:00', '22:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Namba 5-1-60, Nankai Namba Stn 2F, beside the south ticket gate',
    cuisine: 'Abura-soba and mazesoba · mazesoba ¥1,000 with meat, egg and a rich sauce on chewy thick noodles · all-toppings mazesoba · abura-soba finished with vinegar, chili oil, extra sauce and garlic · half rice to finish · small counter',
    website: null, gmaps: gm('ロマン なんば南口店'), menu_url: null,
    notes: "[Abura-soba · Roman's mazesoba stand beside the Nankai Namba south gate] A small, clean branch of the Roman abura-soba brand on the second floor of Nankai Namba Station, beside the south ticket gate, open since April 2025. It's convenient from the trains but a little tricky to find on foot. The mazesoba (¥1,000, September 2026) piles meat, egg and a rich sauce on chewy thick noodles, and the portion is generous. Add half rice at the end to soak up what's left. For the abura-soba, follow the shop's advice: two rounds of vinegar, chili oil to taste, extra sauce and a little garlic. One diner found it average and the staff chatter distracting. It also delivers. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 8 April 2025 (Tabelog)', background: 'A branch of the Roman abura-soba and mazesoba brand (Tabelog).', philosophy: null, specialty: 'Mazesoba; abura-soba.',
      anecdotes: [
        { text: '"The chewy thick noodles were perfectly coated with meat, egg, and a rich special sauce… Adding rice at the end mixed wonderfully with the remaining sauce." — July 2026, delivery.', source: R + 'B532109077/' },
        { text: '"Following the restaurant\'s recommendation, I added vinegar twice. Since I\'m not a fan of overly spicy flavors, I only added chili oil once." — October 2026, abura-soba.', source: R + 'B536843880/' },
      ],
      japanese_sources_summary: '食べログ: 油そば・まぜそば ロマン なんば南口店、大阪市中央区難波5-1-60 南海なんば駅2階南口改札横、毎日11:00〜15:30・17:00〜22:00、カード・電子マネー・QR不可、禁煙、2025年4月8日開店。口コミ(2026年4〜10月): 南海なんば駅の近くだが場所がわかりにくい、全部のせまぜそば大盛り、締めの半ライス、パンチのあるまぜそば、中太麺、デリバリー、もちもちの太麺に肉と卵と特製だれ、残りのたれにご飯、駅2階の南口改札のすぐ外、混んでいない、店内は広くない、好みが分かれる味、スタッフの話し声が気になったという声、量が多い、店のおすすめどおり酢を2周、ラー油、追いだれ、にんにく、まぜそば1,000円、小さく清潔な店内。',
      confidence: 'medium', sources: [TB, R + 'B532109077/', R + 'B536843880/', R + 'B526905324/', R + 'B532536876/', R + 'B533579523/', R + 'B537315600/'] },
    ramen: {
      broth_base: [], broth_texture: 'unknown', tare: [], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'thick', shape: null, hydration: null, handmade: false, notes: 'Chewy thick noodles (July 2026); "medium-thick" per an April 2026 review.' },
      regional_style: [], sub_genre: ['mazesoba_aburasoba'],
      signature_bowl: 'Mazesoba, ¥1,000 (September 2026).',
      chashu: null,
      notable_toppings: ['egg', 'meat', 'vinegar', 'chili oil', 'garlic'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Meat and egg.' },
      pantheon: 'Nankai Namba\'s station-gate Roman: thick mazesoba with meat and egg, and half rice for the last of the sauce.',
      profile: { richness: 4, oiliness: 3, clarity: 3, tare_strength: 4, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B532109077/', '"A rich special sauce."'],
        oiliness: [R + 'B536843880/', '"Easy to eat" — mid-scale.'],
        clarity: [R + 'B537315600/', 'Soupless noodles; not applicable — mid-scale.'],
        tare_strength: [R + 'B526905324/', '"The Maze-soba had a nice punch to it."'],
        noodle_firmness: [R + 'B532109077/', '"The chewy thick noodles."'],
        aroma_punch: [R + 'B536843880/', 'Vinegar, chili oil and garlic added at will — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B532109077/', R + 'B526905324/', R + 'B536843880/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Small station shop; cash.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '大阪府大阪市中央区難波5-1-60 南海なんば駅2階南口改札横',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated April–October 2026.' },
    pin_source: `Tabelog ${TB}; GSI 大阪府大阪市中央区難波五丁目1番60号 (go) 275m — the lot spans Nankai Namba Station, so the pin is approximate (Tabelog point near the south gate); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537315600/', R + 'B526905324/'],
    price_note: 'One price from a September 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Mazesoba', '¥1,000', 'Mazesoba', 'no', 'no', 'September 2026.', 'mazesoba'),
      it('', '', 'All-toppings mazesoba', '', 'Mazesoba', 'no', 'no', 'April 2026.', 'zenbu'),
      it('', '', 'Abura-soba', '', 'Abura-soba', 'no', 'no', 'October 2026.', 'abura'),
      it('', '', 'Half rice (to finish)', '', 'Rice', 'ask', 'vegan', 'April and July 2026.', 'rice'),
    ] }, {
    cuisine: '油そばとまぜそば・もちもちの太麺に肉、卵、濃厚なたれのまぜそば1,000円・全部のせまぜそば・酢、ラー油、追いだれ、にんにくで仕上げる油そば・締めの半ライス・小さなカウンター',
    neighborhood: '難波5-1-60、南海なんば駅2階の南口改札横',
    gf_detail: 'グルテンフリーではありません。小麦の太麺、たれの中身は不明。',
    vegan_detail: 'ヴィーガンではありません。まぜそばに肉と卵。',
    notes: '[油そば・南海なんば南口改札横のロマンのまぜそば] 南海なんば駅2階、南口改札のすぐ横にある油そばブランド・ロマンの小さく清潔な店で、2025年4月開店。電車からは便利ですが、歩いて行くと少しわかりにくい場所。まぜそば(1,000円、2026年9月)はもちもちの太麺に肉と卵、濃厚なたれで、量もたっぷり。最後は半ライスで残りのたれを。油そばは店のおすすめどおり酢を2周、ラー油はお好みで、追いだれとにんにくを少し。普通だった、スタッフの話し声が気になったという声も。デリバリーもあり。現金のみ。',
  });
}

save();
