import json;
import random;

with open("package.json",'r',encoding='utf-8') as f:
    jspack = json.load(f)

new_version = str(random.randrange(100000000,999999999))
print('博客新版本为：'+ str(new_version))
jspack['version']=new_version
with open("package.json",'w',encoding='utf-8') as f:
    json.dump(jspack, f,ensure_ascii=False)