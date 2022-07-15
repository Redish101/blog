import json;
import time;
import yaml;

with open("package.json",'r',encoding='utf-8') as f:
    jspack = json.load(f)

new_version = '1.3.'+str(int(time.time()))[1:11:1]
print('博客新版本为：'+ str(new_version))
jspack['version']=new_version
with open("package.json",'w',encoding='utf-8') as f:
    json.dump(jspack, f,ensure_ascii=False)

with open(r"cw/config.yaml",'r',encoding='utf-8') as y:
    cw = yaml.safe_load(y)

a = cw['catch_rules']
b = a[0]
c = b['transform_rules']
d = c[5]
d['replace'] = 'blogcdn/redish101-blog@'+new_version+'/public'

with open(r"cw/config.yaml",'w',encoding='utf-8') as y:
    yaml.safe_dump(cw, y)