import json, glob, html, sys, re

WORKLIST = 'data/_menu_worklist2/kyoto.json'
OUT = 'data/_menu_verdicts/kyoto2.json'

rows = json.load(open(WORKLIST, encoding='utf-8'))
want = [r['id'] for r in rows]
names = {r['id']: r['name'] for r in rows}

merged = {}
for f in sorted(glob.glob('data/_menu_verdicts/_part_*.json')):
    d = json.load(open(f, encoding='utf-8'))
    for k, v in d.items():
        if k in merged: print('DUPLICATE id', k, 'in', f)
        merged[k] = v
    print('loaded', f, len(d))

ENT = re.compile(r'&(amp|lt|gt|quot|#39|apos|nbsp);')
def clean(o):
    if isinstance(o, str): return ENT.sub(lambda m: html.unescape(m.group(0)), o)
    if isinstance(o, list): return [clean(x) for x in o]
    if isinstance(o, dict): return {k: clean(v) for k, v in o.items()}
    return o
merged = clean(merged)

ok = True
VER={'authoritative','partial','provisional'}; CONF={'high','medium','low'}
GF={'gf','ask','no'}; VG={'vegan','ask','no'}
FIELDS=('ja','romaji','en','price','section','gf','vegan','note','dish_key')
total=0
for k, v in merged.items():
    if k not in want: print('!! id not in worklist:', k); ok=False
    for f in ('verified','confidence','sources','price_note','last_checked','items'):
        if f not in v: print('!!',k,'missing',f); ok=False
    if v.get('verified') not in VER: print('!!',k,'bad verified',v.get('verified')); ok=False
    if v.get('confidence') not in CONF: print('!!',k,'bad confidence',v.get('confidence')); ok=False
    if not v.get('sources'): print('!!',k,'no sources'); ok=False
    keys=set(); total+=len(v['items'])
    for it in v['items']:
        for f in FIELDS:
            if f not in it: print('!!',k,it.get('ja'),'missing field',f); ok=False
        if it.get('gf') not in GF: print('!!',k,it.get('ja'),'bad gf',it.get('gf')); ok=False
        if it.get('vegan') not in VG: print('!!',k,it.get('ja'),'bad vegan',it.get('vegan')); ok=False
        dk=it.get('dish_key','')
        if dk and not re.fullmatch(r'[a-z0-9_]+',dk): print('!!',k,'bad dish_key',dk); ok=False
        if dk in keys: print('~~',k,'duplicate dish_key',dk)
        keys.add(dk)
        if re.search(r'&(amp|lt|gt|quot);', json.dumps(it,ensure_ascii=False)): print('!! entity left in',k,dk); ok=False
    if not v['items'] and v.get('confidence')!='low':
        print('!!',k,'empty items but confidence',v.get('confidence')); ok=False

missing=[i for i in want if i not in merged]
print('\nshops:',len(merged),'of',len(want),' items:',total)
if missing: print('MISSING:'); [print('  ',i,names[i]) for i in missing]
if len(sys.argv)>1 and sys.argv[1]=='write' and not missing:
    json.dump({i:merged[i] for i in want}, open(OUT,'w',encoding='utf-8'), ensure_ascii=False, indent=1)
    print('\nWROTE', OUT)
print('validation clean' if ok else 'VALIDATION ERRORS ABOVE')
