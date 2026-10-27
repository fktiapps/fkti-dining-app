// Osaka sweep (2-mile circle around Dotonbori), batch 67 — ramen phase (all OMNI).
//   + だしが命の塩らーめん ぎょぎょぎょ なんばパークス店 (dashi-first shio in Namba Parks 6F)
//   + 笑心 (Nagasaki-style white and red champon south of Nankai Namba since 2008)
//   + 家系ラーメン 頂喜家 長堀橋店 (iekei with an "Iekei Jiro" mountain bowl)
//   + 横浜家系ラーメン 魂心家 大阪なんば店 (iekei with free rice refills; reduced hours)
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-27';
const { put, save } = openCitySweep('osaka', TODAY, 67);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ ぎょぎょぎょ なんばパークス店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27122488/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_gyogyogyo_namba_parks', name: 'だしが命の塩らーめん ぎょぎょぎょ なんばパークス店 (Dashi Ga Inochi No Shio Ramen Gyogyogyo Namba Parks)', category: 'OMNI',
    lat: 34.661612, lng: 135.501847, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thin wheat noodles; kara-age.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood dashi, tonkotsu, chashu.',
    hours_raw: 'Daily 11:00–23:00 (L.O. 22:30) (Tabelog). Tablet ordering at the tables; food can take a while (August 2026). Cards and e-money accepted (Tabelog).',
    hours: ALL(day(['11:00', '23:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba Parks 6F (Nambanaka 2-10-70) — in front of Parks Cinema, about 4 min from Nankai Namba Stn',
    cuisine: 'Dashi-first shio ramen · "Dashi Ga Inochi" shio with ajitama ¥1,250 (October 2026) · niboshi black ramen · rich spicy tonkotsu ¥1,000 · tonkotsu with kara-age set · thin noodles · tablet ordering · counter and tables, 36 seats',
    website: null, gmaps: gm('ぎょぎょぎょ なんばパークス'), menu_url: null,
    notes: "[Ramen · dashi-first shio ramen in Namba Parks] A ramen shop on the sixth floor of Namba Parks, in front of Parks Cinema, open since 2021 and usually easy to get into, though one October lunch had a long line. The name says it: \"dashi is life\" shio ramen. A balanced shio with a well-seasoned egg was ¥1,250 (October 2026), and a former regular of an earlier Gyogyogyo near Namba Shrine was happy to find its seafood shio again here. There's also a niboshi black ramen, a frothy, spicy rich tonkotsu (¥1,000) and kara-age sets. Thin noodles are the norm. One diner saw a Michelin Bib Gourmand mention in the shop. Order on the table tablet; reviewers found prices a bit high and service slow at times.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 3 April 2021 (Tabelog)', background: 'A reviewer remembers an earlier Gyogyogyo near Namba Shrine in Honmachi (August 2026); one diner noticed a Michelin Bib Gourmand listing displayed (August 2026).', philosophy: 'Dashi first (shop name).', specialty: 'Seafood-dashi shio ramen.',
      anecdotes: [
        { text: '"I ordered the \'Shio Ramen\' and \'Ajitsuke Tamago\' for JPY 1,250… The ingredients were well-balanced, and the seasoning on the boiled egg was just right. And above all, the broth was amazing!" — October 2026.', source: R + 'B537398141/' },
        { text: '"The slightly frothy broth clung to the noodles, and it was quite spicy and delicious." — August 2026, rich spicy tonkotsu ¥1,000.', source: R + 'B533294195/' },
      ],
      japanese_sources_summary: '食べログ: だしが命の塩らーめん ぎょぎょぎょ なんばパークス店、大阪市浪速区難波中2-10-70 なんばパークス6F、南海なんば駅から220m、毎日11:00〜23:00(L.O.22:30)、カード・電子マネー可、36席、禁煙、2021年4月3日開店。口コミ(2026年6〜10月): 混んでいないことが多い、テーブルのタブレットで注文、提供に時間がかかる、値段はやや高め、カウンターとテーブル、濃厚辛豚骨1,000円(泡立つスープ)、魚介も試したい、本町の難波神社近くにあったぎょぎょぎょの塩ラーメン、だしが命の塩らーめん、煮干しブラック、豚骨と唐揚げのセット、パークスシネマの前、ミシュランのビブグルマンの掲載を見た、細麺、濃厚さは期待ほどではないという声、塩らーめんと味玉1,250円、行列。',
      confidence: 'medium', sources: [TB, R + 'B537398141/', R + 'B533294195/', R + 'B533669401/', R + 'B534203323/', R + 'B535037037/', R + 'B530034659/'] },
    ramen: {
      broth_base: ['gyokai'], broth_texture: 'chintan', tare: ['shio'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'thin', shape: null, hydration: null, handmade: false, notes: 'Thin noodles (August 2026); texture varies by bowl (September 2026).' },
      regional_style: [], sub_genre: ['ramen', 'niboshi'],
      signature_bowl: '"Dashi Ga Inochi" shio ramen with ajitama, ¥1,250 (October 2026).',
      chashu: null,
      notable_toppings: ['ajitama'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Seafood dashi.' },
      pantheon: 'Namba Parks\' dashi-first shio: a balanced seafood salt broth six floors above the station.',
      profile: { richness: 2, oiliness: 2, clarity: 4, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B537398141/', '"The ingredients were well-balanced" — placed low for the shio.'],
        oiliness: [R + 'B537398141/', 'No comment on oil — placed low.'],
        clarity: [R + 'B533669401/', 'Seafood-based shio ramen — placed high.'],
        tare_strength: [R + 'B537398141/', 'Balanced seasoning — mid-scale.'],
        noodle_firmness: [R + 'B535037037/', '"A slightly powdery feel" — mid-scale.'],
        aroma_punch: [R + 'B537398141/', '"The broth was amazing" — mid-scale.'],
      },
      confidence: 'low', sources: [R + 'B537398141/', R + 'B533669401/', R + 'B535037037/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Tablet ordering at the table.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区難波中2-10-70 なんばパークス 6F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated June–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区難波中二丁目10番70号 (go) 104m (large complex lot, Namba Parks); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537398141/', R + 'B533294195/', R + 'B533669401/'],
    price_note: 'Prices from August and October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Shio ramen with ajitama', '¥1,250', 'Ramen', 'no', 'no', 'October 2026.', 'shio_ajitama'),
      it('', '', 'Rich spicy tonkotsu ramen', '¥1,000', 'Ramen', 'no', 'no', 'August 2026.', 'kara_tonkotsu'),
      it('', '', 'Niboshi black ramen', '', 'Ramen', 'no', 'no', 'August 2026.', 'niboshi'),
      it('', '', 'Tonkotsu ramen with kara-age set', '', 'Sets', 'no', 'no', 'August 2026.', 'karaage_set'),
    ] }, {
    cuisine: 'だし重視の塩らーめん・だしが命の塩らーめんと味玉1,250円(2026年10月)・煮干しブラック・濃厚辛豚骨1,000円・豚骨と唐揚げのセット・細麺・タブレット注文・カウンターとテーブルで36席',
    neighborhood: 'なんばパークス6F(難波中2-10-70)。パークスシネマの前、南海なんば駅から徒歩約4分',
    gf_detail: 'グルテンフリーではありません。小麦の細麺、唐揚げ。',
    vegan_detail: 'ヴィーガンではありません。魚介のだし、豚骨、チャーシュー。',
    notes: '[ラーメン・なんばパークスのだし重視の塩らーめん] なんばパークス6階、パークスシネマの前にあるラーメン店で、2021年開店、たいていは入りやすいものの、10月の昼に長い行列ができていたことも。店名どおりの「だしが命」の塩らーめんで、バランスがよく、味玉の味付けもちょうどいい一杯が1,250円(2026年10月)。以前の難波神社近くのぎょぎょぎょに通っていた人は、魚介の塩にここで再会できて喜んでいました。煮干しブラック、泡立つ辛い濃厚豚骨(1,000円)、唐揚げのセットも。麺は細麺が基本。店内にミシュランのビブグルマン掲載の表示を見たという人も。注文はテーブルのタブレットで。値段はやや高め、提供が遅いこともあるという声。',
  });
}

// ================================================================ 笑心
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27018015/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:30', '14:30'], ['18:00', '21:30']), SU = day(['11:30', '15:30']);
  put({
    id: 'osaka_egokoro_champon_nambanaka', name: '笑心 (Egokoro)', category: 'OMNI',
    lat: 34.661732, lng: 135.500095, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat champon noodles; fried noodles for sara udon; doubanjiang.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone and chicken-bone broths with mixed toppings.',
    hours_raw: 'Mon–Fri 11:30–14:30 and 18:00–21:30; Sun 11:30–15:30; closed Saturday and holidays (Tabelog). Order verbally (July 2026). Smoking allowed (Tabelog). Cash only: no cards, e-money or QR (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 6: SU }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Nambanaka 3-3-10, Shimizu Bldg 1F — near Namba Parks, about 3 min from Nankai Namba Stn',
    cuisine: 'Nagasaki-style champon since 2008 · white champon: rich yet smooth pork-bone broth with finely chopped toppings · red champon: chicken-bone broth with Sichuan doubanjiang, mildly spicy · ¥900 each; set with rice +¥50 (¥950–1,000 with small side and pickles) · champon and fried-rice set ¥1,200 · sara udon · chewy medium-thick champon noodles · vinegar and chili oil as the table guide suggests · 6 counter seats and 3 tables, 16 seats',
    website: null, gmaps: gm('笑心 難波中 ちゃんぽん'), menu_url: null,
    notes: "[Champon · white and red champon near Namba Parks] A classic neighborhood Chinese shop near Namba Parks, three minutes from Nankai Namba, serving champon since 2008, with regulars who have come for years. There are two bowls, ¥900 each (September 2026). The white champon is a rich yet smooth pork-bone broth with finely chopped toppings; the red is a chicken-bone broth with Sichuan doubanjiang, mildly spicy. Both use chewy medium-thick champon noodles. For ¥50 more it becomes a set with rice, which you can drop into the leftover soup like porridge; a set with fried rice is ¥1,200. Follow the table guide and add vinegar and chili oil partway. There's sara udon too. Cash only; smoking allowed. Closed Saturdays and holidays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 24 September 2008 (Tabelog)', background: 'Local Chinese shop known for champon (Tabelog).', philosophy: null, specialty: 'White and red champon.',
      anecdotes: [
        { text: '"The rich yet smooth pork bone broth is filled with finely chopped ingredients. This creates a unique harmony with the champon noodles… for just an additional JPY 50, you can turn it into a set meal with white rice." — August 2026, white champon set ¥950.', source: R + 'B3818245/' },
        { text: '"Soup: A mild and slightly spicy broth made from chicken bones with Sichuan doubanjiang. Noodles: Chewy medium-thick champon noodles." — July 2026, red champon set ¥1,000.', source: R + 'B532874187/' },
      ],
      japanese_sources_summary: '食べログ: 笑心、大阪市浪速区難波中3-3-10 清水ビル1F、なんば駅・南海なんば駅から徒歩3分、月〜金11:30〜14:30・18:00〜21:30、日11:30〜15:30、土・祝休み、カード・電子マネー・QR不可、16席(4人テーブル2、2人テーブル1、カウンター6)、喫煙可、2008年9月24日開店、ちゃんぽんが有名で夜はゆっくり飲める。口コミ(2026年5〜9月): 白ちゃんぽん定食950円、濃厚でまろやかな豚骨スープに細かく刻んだ具、50円でご飯を付けて定食に、残ったスープでおじや風、赤ちゃんぽん定食、白ちゃんぽん焼飯セット1,200円、卓上の食べ方指南どおり酢とラー油、皿うどん、ちゃんぽん推し、口頭で注文、赤は鶏ガラに四川の豆板醤でマイルドな辛さ、中太のもちもちしたちゃんぽん麺、なんばで一番のちゃんぽん、何年も通っている、町中華の雰囲気、なんばパークスの近く、赤と白は各900円、白はクリーミー、赤はピリ辛。',
      confidence: 'medium', sources: [TB, R + 'B3818245/', R + 'B532874187/', R + 'B526621403/', R + 'B531311731/', R + 'B535601605/', R + 'B535834316/'] },
    ramen: {
      broth_base: ['tonkotsu', 'chicken'], broth_texture: 'paitan', tare: [], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'medium', shape: null, hydration: null, handmade: false, notes: 'Chewy medium-thick champon noodles (July 2026).' },
      regional_style: ['Nagasaki champon'], sub_genre: ['other'],
      signature_bowl: 'White champon, ¥900; red champon, ¥900 (September 2026).',
      chashu: null,
      notable_toppings: ['finely chopped vegetables and seafood', 'doubanjiang (red)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork-bone and chicken broths.' },
      pantheon: 'Nambanaka\'s champon counter: a creamy white pork-bone bowl or a mildly spicy red one, with rice for ¥50.',
      profile: { richness: 3, oiliness: 3, clarity: 1, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B3818245/', '"The rich yet smooth pork bone broth" — mid-scale.'],
        oiliness: [R + 'B535834316/', '"The white version is creamy" — mid-scale.'],
        clarity: [R + 'B3818245/', 'Creamy pork-bone broth — opaque.'],
        tare_strength: [R + 'B532874187/', '"A mild and slightly spicy broth" — mid-scale.'],
        noodle_firmness: [R + 'B532874187/', '"Chewy medium-thick champon noodles" — mid-scale.'],
        aroma_punch: [R + 'B535601605/', 'Vinegar and chili oil added — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B3818245/', R + 'B532874187/', R + 'B535834316/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Order verbally; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区難波中3-3-10 清水ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区難波中三丁目3番10号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535834316/', R + 'B3818245/', R + 'B526621403/'],
    price_note: 'Prices from August–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'White champon', '¥900', 'Champon', 'no', 'no', 'September 2026.', 'shiro'),
      it('', '', 'Red champon', '¥900', 'Champon', 'no', 'no', 'September 2026.', 'aka'),
      it('', '', 'Champon set with rice', '¥950', 'Sets', 'no', 'no', 'August 2026; +¥50 for rice.', 'teishoku'),
      it('', '', 'White champon and fried-rice set', '¥1,200', 'Sets', 'no', 'no', 'August 2026.', 'chahan_set'),
      it('', '', 'Sara udon', '', 'Noodles', 'no', 'no', 'July 2026.', 'sara_udon'),
    ] }, {
    cuisine: '2008年からの長崎風ちゃんぽん・白ちゃんぽん: 濃厚でまろやかな豚骨スープに細かく刻んだ具・赤ちゃんぽん: 鶏ガラに四川の豆板醤でマイルドな辛さ・各900円、ご飯付きの定食は+50円(小鉢と漬物付きで950〜1,000円)・ちゃんぽんと焼飯のセット1,200円・皿うどん・もちもちの中太ちゃんぽん麺・卓上の案内どおり酢とラー油・カウンター6席とテーブル3卓で16席',
    neighborhood: '難波中3-3-10 清水ビル1F。なんばパークスの近く、南海なんば駅から徒歩約3分',
    gf_detail: 'グルテンフリーではありません。小麦のちゃんぽん麺、皿うどんの揚げ麺、豆板醤。',
    vegan_detail: 'ヴィーガンではありません。豚骨や鶏ガラのスープに具。',
    notes: '[ちゃんぽん・なんばパークス近くの白と赤のちゃんぽん] なんばパークスの近く、南海なんば駅から3分の昔ながらの町中華の店で、2008年からちゃんぽんを出し、何年も通う常連も。ちゃんぽんは2種で各900円(2026年9月)。白は濃厚でまろやかな豚骨スープに細かく刻んだ具、赤は鶏ガラに四川の豆板醤でマイルドな辛さ。どちらももちもちの中太ちゃんぽん麺。50円足せばご飯付きの定食になり、残ったスープに入れておじや風に。焼飯とのセットは1,200円。途中で卓上の案内どおり酢とラー油を。皿うどんもあります。現金のみ、喫煙可。土・祝休み。',
  });
}

// ================================================================ 家系ラーメン 頂喜家 長堀橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27118992/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_iekei_itadakiya_nagahoribashi', name: '家系ラーメン 頂喜家 長堀橋店 (Iekei Ramen Itadakiya Nagahoribashi)', category: 'OMNI',
    lat: 34.674652, lng: 135.506529, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thick wheat noodles; shoyu tare.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone broth, chicken oil, back fat, chashu.',
    hours_raw: 'Daily 11:00–22:30; hours may change (Tabelog). Firmness and richness to order; ask for lighter salt (August–September 2026). No cards or e-money; PayPay, d Barai and Rakuten Pay accepted (Tabelog).',
    hours: ALL(day(['11:00', '22:30'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shimanouchi 1-19-15 — 20 m from Nagahoribashi Stn',
    cuisine: 'Iekei ramen · creamy tonkotsu shoyu with chicken oil, thick curly noodles, large chashu, spinach and nori · negi ramen ¥1,000 · "Iekei Jiro" ¥1,150 with a mountain of bean sprouts, minced garlic and diced back fat · ajitama ¥150 · large rice ¥250 · firmness and richness to order · plenty of table condiments',
    website: null, gmaps: gm('頂喜家 長堀橋'), menu_url: null,
    notes: "[Ramen · iekei with a Jiro-style option by Nagahoribashi] An iekei ramen shop 20 m from Nagahoribashi Station, open since 2020 and busy in the evenings. The base is a creamy tonkotsu shoyu with chicken oil over thick, chewy curly noodles, with a large chashu, spinach and nori; it leans salty, so ask for lighter if you prefer. The negi ramen is ¥1,000 and large rice ¥250 (August 2026). For a challenge, the \"Iekei Jiro\" (¥1,150) buries the bowl under bean sprouts with minced garlic and diced back fat, and a regular admits it's enormous. Set firmness and richness when ordering, and use the table condiments. One diner on crutches praised the attentive staff. PayPay accepted; no cards.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 4 September 2020 (Tabelog)', background: 'Iekei ramen shop by Nagahoribashi (2026 reviews).', philosophy: null, specialty: 'Iekei ramen; Iekei Jiro.',
      anecdotes: [
        { text: '"The broth was a flavorful tonkotsu soy sauce with minced garlic, and the back fat was cut into small cubes… The noodles were thick and curly, perfectly absorbing the rich soup." — September 2026, Iekei Jiro ¥1,150 with a soft-boiled egg ¥150.', source: R + 'B450905500/' },
        { text: '"It was a creamy Iekei ramen. I ordered the Negi Ramen (JPY 1,000) and a large rice (JPY 250)… The flavor was a bit on the salty side, but you can request a lighter version when ordering." — August 2026.', source: R + 'B533708046/' },
      ],
      japanese_sources_summary: '食べログ: 家系ラーメン 頂喜家 長堀橋店、大阪市中央区島之内1-19-15、長堀橋駅から20m、毎日11:00〜22:30、カード・電子マネー不可、QR可(PayPay・d払い・楽天ペイ)、禁煙、2020年9月4日開店。口コミ(2026年2〜10月): 家系の店の二郎系、もやしとにんにくの山、麺が熱々、量が多くスープを残した、家系二郎1,150円と半熟卵150円、硬め・濃いめ、鶏油は調整不可、刻みにんにく、角切りの背脂、太い縮れ麺、塩気は強め、クリーミーな家系、ねぎラーメン1,000円、ライス大250円、薄めにもできる、太麺、濃厚な豚骨醤油、大きなチャーシュー、ほうれん草と海苔、夜は次々に客、卓上の調味料が豊富、スタッフが親切。',
      confidence: 'medium', sources: [TB, R + 'B450905500/', R + 'B533708046/', R + 'B439362119/', R + 'B534074984/', R + 'B537439078/', R + 'B538131830/'] },
    ramen: {
      broth_base: ['tonkotsu', 'chicken'], broth_texture: 'paitan', tare: ['shoyu'], aroma_oil: ['chicken oil'], richness: 'kotteri',
      noodles: { thickness: 'thick', shape: 'curly', hydration: null, handmade: false, notes: 'Thick, chewy curly noodles; firmness to order (August–September 2026).' },
      regional_style: ['Yokohama iekei'], sub_genre: ['ramen', 'jiro_kei'],
      signature_bowl: 'Iekei ramen; "Iekei Jiro" ¥1,150 (September 2026).',
      chashu: 'Large and tender (August 2026).',
      notable_toppings: ['spinach', 'nori', 'bean sprouts (Jiro)', 'back fat (Jiro)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork-bone broth.' },
      pantheon: 'Nagahoribashi\'s iekei: a creamy, salty-leaning tonkotsu shoyu, with a Jiro-style mountain bowl for the brave.',
      profile: { richness: 4, oiliness: 4, clarity: 1, tare_strength: 4, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B534074984/', '"The rich tonkotsu soy sauce broth."'],
        oiliness: [R + 'B450905500/', 'Chicken oil and diced back fat.'],
        clarity: [R + 'B533708046/', '"A creamy Iekei ramen" — opaque.'],
        tare_strength: [R + 'B533708046/', '"A bit on the salty side."'],
        noodle_firmness: [R + 'B534074984/', '"Thick noodles, which had a chewy texture."'],
        aroma_punch: [R + 'B450905500/', 'Minced garlic on the Jiro bowl — mid-scale for the standard.'],
      },
      confidence: 'medium', sources: [R + 'B534074984/', R + 'B533708046/', R + 'B450905500/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Customization asked when ordering.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区島之内1-19-15',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区島之内一丁目19番15号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B450905500/', R + 'B533708046/'],
    price_note: 'Prices from August–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Negi ramen', '¥1,000', 'Ramen', 'no', 'no', 'August 2026.', 'negi'),
      it('', '', 'Iekei Jiro', '¥1,150', 'Ramen', 'no', 'no', 'September 2026.', 'jiro'),
      it('', '', 'Ajitama', '¥150', 'Toppings', 'ask', 'no', 'September 2026.', 'ajitama'),
      it('', '', 'Rice (large)', '¥250', 'Rice', 'ask', 'vegan', 'August 2026.', 'rice'),
    ] }, {
    cuisine: '家系ラーメン・鶏油の効いたクリーミーな豚骨醤油、太い縮れ麺、大きなチャーシュー、ほうれん草、海苔・ねぎラーメン1,000円・もやしの山に刻みにんにくと角切り背脂の「家系二郎」1,150円・味玉150円・ライス大250円・硬さと濃さを選べる・卓上の調味料が豊富',
    neighborhood: '島之内1-19-15。長堀橋駅から20m',
    gf_detail: 'グルテンフリーではありません。小麦の太麺、醤油のたれ。',
    vegan_detail: 'ヴィーガンではありません。豚骨スープ、鶏油、背脂、チャーシュー。',
    notes: '[ラーメン・長堀橋の二郎系もある家系] 長堀橋駅から20mの家系ラーメンの店で、2020年開店、夜は次々に客が来ます。基本は鶏油の効いたクリーミーな豚骨醤油で、もちもちの太い縮れ麺に大きなチャーシュー、ほうれん草、海苔。塩気は強めなので、好みで薄めを頼んで。ねぎラーメン1,000円、ライス大250円(2026年8月)。挑戦するなら「家系二郎」(1,150円)で、もやしの山に刻みにんにくと角切りの背脂、常連も量がすごいと認めるほど。硬さと濃さは注文時に、卓上の調味料もどうぞ。松葉杖の人に気を配ってくれたスタッフを褒める声も。PayPay可、カード不可。',
  });
}

// ================================================================ 横浜家系ラーメン 魂心家 大阪なんば店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27068505/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://www.konshinya.com/index.html';
  put({
    id: 'osaka_konshinya_osaka_namba', name: '横浜家系ラーメン 魂心家 大阪なんば店 (Yokohama Iekei Ramen Konshinya Osaka Namba)', category: 'OMNI',
    lat: 34.662468, lng: 135.504912, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thick wheat noodles; shoyu, shio or miso tare; fried rice.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone broth, chashu.',
    hours_raw: 'Tabelog lists Mon–Fri 11:00–24:00, Sat 10:30–1:00, Sun and holidays 10:30–24:00, but the same listing says the shop is currently on reduced hours of 11:00–21:00; open year-round. Ticket machine; firmness, richness and fat to order. Free rice refills all day (September 2026). Cash only: no cards, e-money or QR (Tabelog).',
    hours: ALL(day(['11:00', '21:00'])), hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Nambanaka 2-4-3, Naniwa — near Nippombashi, about 5 min from Namba Stn',
    cuisine: 'Yokohama iekei chain · Konshinya ramen ¥1,000 in shoyu, shio, miso or black-pepper miso · thick curly noodles · firmness, richness and fat to order, or "light and less" · free white rice with refills · fried-rice set ¥1,200 · finish the soup for a "makuri" ticket of free toppings for a month · 15 counter seats and 2 tables',
    website: OWN, gmaps: gm('魂心家 大阪なんば'), menu_url: null,
    notes: "[Ramen · Konshinya iekei with free rice, near Nippombashi] A branch of the Konshinya Yokohama-iekei chain between Namba and Nippombashi, open since 2012. The Konshinya ramen (¥1,000, August–September 2026) comes in shoyu, shio, miso or black-pepper miso; the miso is surprisingly creamy, and thick curly noodles are chewy. Set firmness, richness and fat, or go \"light and less\". White rice is free with refills all day, and the salty broth makes the case for it; the fried-rice set (¥1,200) is an alternative. Finish every drop of soup and you earn a \"makuri\" ticket for a month of free toppings. Expect a short line at peak times. The listing says it's currently on reduced hours, 11:00–21:00. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 19 October 2012 (Tabelog)', background: 'Konshinya Yokohama-iekei chain, with shops beyond Osaka such as near Zeze Station, Shiga (September 2026 review); official site konshinya.com.', philosophy: null, specialty: 'Konshinya ramen with free rice.',
      anecdotes: [
        { text: '"When ordering, you can choose from soy sauce, salt, miso, or black pepper miso for the broth… Once I placed my ramen order, I found out that white rice is free and refillable." — September 2026, Konshinya ramen ¥1,000.', source: R + 'B536464257/' },
        { text: '"The broth was incredibly creamy despite being miso-based. The thick, curly noodles were chewy and satisfying!" — August 2026.', source: R + 'B535227806/' },
      ],
      japanese_sources_summary: '公式 konshinya.com。食べログ: 横浜家系ラーメン 魂心家 大阪なんば店、大阪市浪速区難波中2-4-3、なんば駅から309m、月〜金11:00〜24:00、土10:30〜翌1:00、日・祝10:30〜24:00(現在は時短で11:00〜21:00)、年中無休、食券制、カード・電子マネー・QR不可、禁煙、カウンター席、2012年10月19日開店。口コミ(2026年2〜9月): 味噌、やわらかめ・あっさり・少なめ、醤油・塩・味噌の食べ比べ、魂心家ラーメン1,000円、まくりチケット(1か月トッピング無料)、味噌でもクリーミー、太い縮れ麺、白ご飯無料でおかわり、炒飯セット1,200円、硬め・濃いめ、塩気は強め、スープを完飲するとチケット、醤油・塩・味噌・黒胡椒味噌から選べる、ひとり客の女性も、行列、膳所駅近くの店、カウンター15席と4人テーブル2つ、濃いめ・脂多め。',
      confidence: 'medium', sources: [TB, OWN, R + 'B536464257/', R + 'B535227806/', R + 'B454024620/', R + 'B535616048/', R + 'B536894353/', R + 'B537908372/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'paitan', tare: ['shoyu', 'shio', 'miso'], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'thick', shape: 'curly', hydration: null, handmade: false, notes: 'Thick, chewy curly noodles; firmness to order (August–September 2026).' },
      regional_style: ['Yokohama iekei'], sub_genre: ['ramen'],
      signature_bowl: 'Konshinya ramen, ¥1,000 (August–September 2026).',
      chashu: null,
      notable_toppings: ['nori', 'spinach', 'quail eggs (makuri ticket)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork-bone broth.' },
      pantheon: 'Namba\'s Konshinya: salty, creamy iekei in four tare, with free rice to soak it up.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 5, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B537908372/', '"The broth was nicely concentrated."'],
        oiliness: [R + 'B537908372/', 'Fat to order — mid-scale.'],
        clarity: [R + 'B535227806/', '"Incredibly creamy" — opaque.'],
        tare_strength: [R + 'B535616048/', '"As always, the broth was quite salty."'],
        noodle_firmness: [R + 'B535227806/', '"The thick, curly noodles were chewy."'],
        aroma_punch: [R + 'B536464257/', 'No comment on aroma — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B535616048/', R + 'B535227806/', R + 'B537908372/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; customization asked.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区難波中2-4-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区難波中二丁目4番3号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535227806/', R + 'B535616048/', R + 'B536464257/'],
    price_note: 'Prices from August–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Konshinya ramen (shoyu, shio, miso or black-pepper miso)', '¥1,000', 'Ramen', 'no', 'no', 'August–September 2026.', 'konshin'),
      it('', '', 'Fried-rice set', '¥1,200', 'Sets', 'no', 'no', 'September 2026.', 'chahan_set'),
      it('', '', 'White rice (free, refillable)', '', 'Rice', 'ask', 'vegan', 'September 2026.', 'rice'),
    ] }, {
    cuisine: '横浜家系のチェーン・魂心家ラーメン1,000円(醤油、塩、味噌、黒胡椒味噌)・太い縮れ麺・硬さ、濃さ、脂を選べる、「あっさり少なめ」も・白ご飯は無料でおかわり自由・炒飯セット1,200円・スープを飲み干すと1か月トッピング無料の「まくりチケット」・カウンター15席とテーブル2つ',
    neighborhood: '浪速区難波中2-4-3。日本橋の近く、なんば駅から徒歩約5分',
    gf_detail: 'グルテンフリーではありません。小麦の太麺、醤油・塩・味噌のたれ、炒飯。',
    vegan_detail: 'ヴィーガンではありません。豚骨スープ、チャーシュー。',
    notes: '[ラーメン・日本橋近くのご飯無料の魂心家] なんばと日本橋の間にある横浜家系チェーン・魂心家の店で、2012年開店。魂心家ラーメン(1,000円、2026年8〜9月)は醤油、塩、味噌、黒胡椒味噌から選べ、味噌でも驚くほどクリーミー、太い縮れ麺はもちもち。硬さ、濃さ、脂を選ぶか、「あっさり少なめ」も。白ご飯は一日中無料でおかわり自由で、塩気の強いスープによく合います。炒飯セット(1,200円)も。スープを飲み干すと、1か月トッピングが無料になる「まくりチケット」がもらえます。混む時間は少し並びます。食べログには現在時短営業で11:00〜21:00とあります。現金のみ。',
  });
}

save();
