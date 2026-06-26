export const meta = {
  name: 'spot-nagano',
  description: 'Tight-radius dining sweep for Nagano: discover (Haiku) + verify (Sonnet)',
  phases: [{ title: 'Discover' }, { title: 'Verify' }],
}
const ANGLES = ["善光寺 長野 グルテンフリー 対応 レストラン 食べログ","善光寺 長野 ヴィーガン ベジタリアン カフェ 食べログ","善光寺 長野 老舗 名店 個人店 食堂 食べログ","善光寺 長野 名物 郷土料理 食べログ","善光寺 長野 カフェ 甘味処 食べログ","善光寺 長野 restaurant gluten free vegan celiac","信州そば 食べログ","戸隠そば 食べログ","おやき 食べログ","精進料理 善光寺 食べログ","甘味処 長野 食べログ"];
const DISCOVERY_SCHEMA = {"type":"object","additionalProperties":false,"properties":{"candidates":{"type":"array","items":{"type":"object","additionalProperties":false,"properties":{"name_ja":{"type":"string"},"area":{"type":"string"},"cuisine":{"type":"string"},"tabelog_url":{"type":"string"}},"required":["name_ja","area","cuisine","tabelog_url"]}}},"required":["candidates"]};
const VERIFY_SCHEMA = {"type":"object","additionalProperties":false,"properties":{"found":{"type":"boolean"},"is_restaurant":{"type":"boolean"},"closed_or_on_hold":{"type":"boolean"},"name_ja":{"type":"string"},"name_en":{"type":"string"},"tabelog_url":{"type":"string"},"official_url":{"type":"string"},"category":{"type":"string","enum":["BOTH","GF","VEGAN","SHOJIN","OMNI","MOM_AND_POP"]},"cuisine":{"type":"string"},"neighborhood":{"type":"string"},"address_ja":{"type":"string"},"lat":{"type":["number","null"]},"lng":{"type":["number","null"]},"geocode_note":{"type":"string"},"seats":{"type":["integer","null"]},"seats_text":{"type":"string"},"gf_confidence":{"type":"string","enum":["dedicated","high","options","ask","no"]},"gf_detail":{"type":"string"},"vegan_status":{"type":"string","enum":["full","options","limited","ask","no"]},"vegan_detail":{"type":"string"},"hours_week":{"type":"array","items":{"type":"string"}},"hours_raw":{"type":"string"},"closed_days":{"type":"string"},"hours_status":{"type":"string","enum":["regular","irregular"]},"reservation_required":{"type":"boolean"},"cash_only":{"type":"boolean"},"independent":{"type":"boolean"},"under30":{"type":"string","enum":["yes","no","unsure"]},"cultural_comfort_level":{"type":"string","enum":["guide_only","japanese","konnichiwa","english"]},"cultural_comfort_note":{"type":"string"},"bio":{"type":"object","additionalProperties":false,"properties":{"chef_name":{"type":["string","null"]},"roles":{"type":"array","items":{"type":"string"}},"origin":{"type":["string","null"]},"background":{"type":["string","null"]},"philosophy":{"type":["string","null"]},"specialty":{"type":["string","null"]},"anecdotes":{"type":"array","items":{"type":"object","additionalProperties":false,"properties":{"text":{"type":"string"},"source":{"type":"string"}},"required":["text","source"]}},"confidence":{"type":"string","enum":["high","medium","low","none"]},"sources":{"type":"array","items":{"type":"string"}}},"required":["confidence","roles","anecdotes","sources"]},"safety":{"type":"object","additionalProperties":false,"properties":{"dedicated_fryer":{"type":["boolean","null"]},"gf_cross_contamination":{"type":"array","items":{"type":"object","additionalProperties":false,"properties":{"text":{"type":"string"},"source":{"type":"string"}},"required":["text"]}},"soy_sauce_wheat":{"type":"array","items":{"type":"object","additionalProperties":false,"properties":{"text":{"type":"string"},"source":{"type":"string"}},"required":["text"]}},"vegan_cross_contact":{"type":"array","items":{"type":"object","additionalProperties":false,"properties":{"text":{"type":"string"},"source":{"type":"string"}},"required":["text"]}},"staff_allergy_handling":{"type":"array","items":{"type":"object","additionalProperties":false,"properties":{"text":{"type":"string"},"source":{"type":"string"}},"required":["text"]}},"positives":{"type":"array","items":{"type":"object","additionalProperties":false,"properties":{"text":{"type":"string"},"source":{"type":"string"}},"required":["text"]}},"confidence":{"type":"string","enum":["high","medium","low","none"]}},"required":["confidence","gf_cross_contamination","soy_sauce_wheat","vegan_cross_contact","staff_allergy_handling","positives"]},"caveats":{"type":"string"},"sources":{"type":"array","items":{"type":"string"}}},"required":["found","is_restaurant","name_ja","category","vegan_status","gf_confidence","bio","safety"]};
const BOX = {"latMin":36.64689549549549,"latMax":36.67590450450451,"lngMin":138.16911859780822,"lngMax":138.20528140219176};
const norm = s => (s || '').replace(/[\s　・（）()「」、,.。\-本店店]/g, '').toLowerCase();

const discPrompt = (q, avoid) => `Find genuinely good DINING spots in Nagano, Japan, TIGHTLY within: Zenkō-ji (36.6614,138.1872) within 1.61km. Prefer GF-friendly, vegan/vegetarian, shōjin, and beloved local mom-&-pop places, plus notable local specialties. Search the web for: ${q}
Stay INSIDE the target radius — walking distance of those landmarks only, not the wider city.
${avoid ? 'We already have these — do NOT return them:\n' + avoid : ''}
Return up to 8 NEW places. For each: name_ja (exact), area (district + nearest landmark/station), cuisine, tabelog_url (if found, else "").`;

const verifyPrompt = c => `Verify ONE Nagano dining spot for a curated gluten-free/vegan-aware app and produce its full record. NEVER invent — every fact from a page you fetch (WebSearch then WebFetch: Tabelog, official site, blogs). found:false if you can't confirm it exists.
TARGET: ${c.name_ja} | area: ${c.area || '?'} | cuisine: ${c.cuisine || '?'}${c.tabelog_url ? ' | Tabelog: ' + c.tabelog_url : ''}
MUST be within the target area: Zenkō-ji (36.6614,138.1872) within 1.61km. If it's clearly outside that radius, set found:false.
A. IDENTITY: confirm it's a real, currently-operating spot. is_restaurant=false if not a place you eat. 掲載保留/閉店 → closed_or_on_hold=true. name_ja, name_en (romaji), tabelog_url, official_url.
B. CATEGORY (one): BOTH (vegan+GF focus) / GF (GF-dedicated) / VEGAN / SHOJIN / MOM_AND_POP (small independent local) / OMNI.
C. DIETARY (honest, celiac safety #1): gf_confidence (dedicated|high|options|ask|no)+gf_detail (wheat in shoyu/dashi/tempura, cross-contam, dedicated fryer); vegan_status (full|options|limited|ask|no)+vegan_detail (hidden dashi/katsuo/bonito). Be precise, never over-promise.
D. LOGISTICS: address_ja, then GEOCODE: fetch https://msearch.gsi.go.jp/address-search/AddressSearch?q=<URL-ENCODED address_ja>; first feature geometry.coordinates=[lng,lat]; retry chō-level if empty. Target box lat ${BOX.latMin.toFixed(3)}–${BOX.latMax.toFixed(3)}, lng ${BOX.lngMin.toFixed(3)}–${BOX.lngMax.toFixed(3)} — if outside, null + geocode_note. seats(int|null)+seats_text. hours_week 7 (Mon..Sun) each "closed" or "HH:MM-HH:MM" (comma for splits); hours_raw; closed_days; hours_status. reservation_required, cash_only, independent, under30. cultural_comfort_level + one-sentence note.
E. DINER-FACING — NO dev meta (never mention Tabelog/seat counts/review counts/awards-by-platform/sourcing). bio: the story of the place/people (background, specialty = signature dish, philosophy, anecdotes w/ source URLs); confidence:'none'+nulls if no real story. safety: dedicated_fryer + gf_cross_contamination/soy_sauce_wheat/vegan_cross_contact/staff_allergy_handling/positives (each {text,source}); empty arrays if nothing specific. name_en = romanization.`;

phase('Discover')
const seen = new Set(); const queue = [];
let round = 0, dry = 0;
while (round < 3 && dry < 1) {
  round++;
  const avoid = queue.length ? queue.map(c => c.name_ja).join('、') : '';
  const disc = await parallel(ANGLES.map((q, i) => () => agent(discPrompt(q, avoid), { label: 'disc r' + round + ' #' + i, phase: 'Discover', schema: DISCOVERY_SCHEMA, model: 'haiku' }).then(r => (r && r.candidates) || []).catch(() => [])));
  let fresh = 0;
  for (const list of disc) for (const c of (list || [])) { const k = norm(c.name_ja); if (!k || seen.has(k)) continue; seen.add(k); queue.push(c); fresh++; }
  log('nagano r' + round + ': +' + fresh + ' fresh (queue ' + queue.length + ')');
  if (fresh < 5) dry++;
}
log('nagano discovery done: ' + queue.length + ' candidates over ' + round + ' rounds');

phase('Verify')
const verified = (await parallel(queue.map(c => () => agent(verifyPrompt(c), { label: 'vf:' + c.name_ja.slice(0, 16), phase: 'Verify', schema: VERIFY_SCHEMA, model: 'sonnet' }).then(r => r ? { lead: c.name_ja, ...r } : null).catch(() => null)))).filter(Boolean);
const keep = verified.filter(r => r.found && r.is_restaurant && !r.closed_or_on_hold);
log('verified ' + verified.length + '; kept ' + keep.length);
return { counts: { candidates: queue.length, verified: verified.length, kept: keep.length, rounds: round }, kept: keep };
