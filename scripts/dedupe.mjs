import fs from 'fs';

const path = 'data/kyoto.json';
let t = fs.readFileSync(path, 'utf8');

// Locate the places array
const ki = t.indexOf('"places":');
const arrStart = t.indexOf('[', ki);

// Walk the array, recording [start,end) byte spans of each top-level object
const spans = [];
let depth = 0, inStr = false, esc = false, objStart = -1;
for (let j = arrStart + 1; j < t.length; j++) {
  const c = t[j];
  if (inStr) {
    if (esc) esc = false;
    else if (c === '\\') esc = true;
    else if (c === '"') inStr = false;
    continue;
  }
  if (c === '"') { inStr = true; continue; }
  if (c === '{') { if (depth === 0) objStart = j; depth++; }
  else if (c === '}') { depth--; if (depth === 0) spans.push([objStart, j + 1]); }
  else if (c === ']' && depth === 0) break;
}

// First occurrence of each id wins; mark later ones for removal
const seen = new Set();
const remove = [];
for (const [s, e] of spans) {
  const obj = JSON.parse(t.slice(s, e));
  if (seen.has(obj.id)) remove.push([s, e, obj.id, obj.name]);
  else seen.add(obj.id);
}

console.log('total objects:', spans.length);
console.log('removing:', remove.length);
remove.forEach(r => console.log('  DROP', r[2], '->', r[3]));

// Excise from end to start, stripping the separating comma
remove.sort((a, b) => b[0] - a[0]);
for (const [s, e] of remove) {
  let cs = s - 1;
  while (cs >= 0 && /\s/.test(t[cs])) cs--;
  if (t[cs] === ',') {
    t = t.slice(0, cs) + t.slice(e);
  } else {
    let ce = e;
    while (ce < t.length && /\s/.test(t[ce])) ce++;
    if (t[ce] === ',') t = t.slice(0, s) + t.slice(ce + 1);
    else t = t.slice(0, s) + t.slice(e);
  }
}

const parsed = JSON.parse(t);
const ids = parsed.places.map(x => x.id);
const dup = ids.filter((v, i) => ids.indexOf(v) !== i);
console.log('new places count:', parsed.places.length);
console.log('remaining duplicate ids:', dup.length ? dup : 'none');

fs.writeFileSync(path, t);
console.log('written OK');
