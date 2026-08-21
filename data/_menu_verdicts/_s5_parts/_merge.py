import json,glob,io,os,sys
sys.stdout.reconfigure(encoding='utf-8')
base=r'C:\pf\fkti-dining\data\_menu_verdicts'
order=json.load(io.open(r'C:\pf\fkti-dining\data\_tokyo_menu_shards\s5.json',encoding='utf-8'))
ids=[r['id'] for r in order]
parts={}
for f in glob.glob(os.path.join(base,'_s5_parts','*.json')):
    parts.update(json.load(io.open(f,encoding='utf-8')))
out={i:parts[i] for i in ids if i in parts}
json.dump(out, io.open(os.path.join(base,'tokyo_s5.json'),'w',encoding='utf-8'), ensure_ascii=False, indent=1)
print(len(out),'records,',sum(len(v['items']) for v in out.values()),'items')
for i in ids:
    print(('  OK  ' if i in out else '  --  '), i, len(out[i]['items']) if i in out else '')
