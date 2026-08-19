// The GF-Japan bakery/cafe guide moved host. The old host still answers but its
// 301 target is malformed (https://https//...), so all 109 stored citations are
// dead ends for a user tapping through to check our evidence.
// Eight paths survived the move; two (cafe-gf-hokuriku, cafe-gf-chugoku) are gone,
// so those point at the publication root rather than fabricating a new path.
import fs from 'node:fs';

const OLD = 'glutenfree.empacede.co.jp';
const NEW = 'jp.japan-glutenfree.com';
const GONE = new Set(['cafe-gf-hokuriku', 'cafe-gf-chugoku']);

const rewrite = url => {
  const path = (url.split(OLD)[1] || '/').replace(/^\/+|\/+$/g, '').split(/[?#]/)[0];
  return GONE.has(path) ? `https://${NEW}/` : `https://${NEW}/${path}/`;
};

let n = 0;
for (const f of fs.readdirSync('data').filter(f => f.endsWith('.json'))) {
  const p = `data/${f}`;
  const before = fs.readFileSync(p, 'utf8');
  if (!before.includes(OLD)) continue;
  // URLs first, then bare hostname mentions in prose ("the JP celiac guide
  // glutenfree.empacede.co.jp lists it ...") — otherwise the text still names a
  // dead site even once every link is repointed.
  let after = before.replace(/https?:\/\/glutenfree\.empacede\.co\.jp[^"\ ]*/g, m => { n++; return rewrite(m); });
  const bare = after.split(OLD).length - 1;
  if (bare) { after = after.split(OLD).join(NEW); n += bare; }
  fs.writeFileSync(p, after);
  console.log(`${f}: rewritten`);
}
console.log(`${n} citations repointed`);
