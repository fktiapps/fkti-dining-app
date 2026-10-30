// Exercise the "Ask" search tools (functions/api/ask.js) against the local index, no model:
// the tool calls a model would plausibly make for Greg's three example questions.
//   node scripts/build-ask-index.mjs && node scripts/test-ask.mjs
import fs from 'node:fs';
import { makeTools } from '../functions/api/ask.js';
const CITIES = ['kyoto', 'tokyo', 'nara', 'kanazawa', 'hiroshima', 'nagoya', 'nagano', 'toba', 'himeji', 'osaka'];
const load = async c => JSON.parse(fs.readFileSync(`data/ask/${c}.json`, 'utf8')).places.map(p => ({ ...p, city: c }));
const T = makeTools(CITIES, load, new Map());
const show = (label, r) => { console.log(`\n== ${label}: ${r.total_matches} matches`); for (const x of r.results.slice(0, 6)) console.log(' ', x.city, x.id, '|', x.name, '|', x.gf, x.vegan, x.ramen ? JSON.stringify(x.ramen.tare) : '', '|', (x.snippets[0] || '').slice(0, 120)); };
show('shio ramen', await T.search_places({ cuisine_types: ['ramen'], ramen_tare: ['shio'], keywords: ['shio', 'salt', 'light', 'clear'], limit: 8 }));
show('GF donburi Kyoto', await T.search_places({ cities: ['kyoto'], cuisine_types: ['donburi'], gf_at_least: 'options' }));
show('GF rice bowl Kyoto (keywords)', await T.search_places({ cities: ['kyoto'], gf_at_least: 'options', keywords: ['donburi', 'don ', 'rice bowl', 'kaisendon', 'oyakodon'] }));
show('farmer chef', await T.search_places({ keywords: ['farmer', 'own farm', 'grows', 'own vegetables', 'harvest', 'fields', 'farm-to-table'], limit: 10 }));
const one = (await T.search_places({ cuisine_types: ['ramen'], ramen_tare: ['shio'], limit: 1 })).results[0];
const d = await T.get_place({ id: one.id }); console.log('\nget_place', d.name, JSON.stringify(d.ramen?.profile), JSON.stringify(d).length, 'chars');
