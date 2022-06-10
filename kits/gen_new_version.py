import json;
import time;

with open("package.json",'r',encoding='utf-8') as f:
    jspack = json.load(f)

new_version = '1.1.'+str(int(time.time()))[1:11:1]
print('博客新版本为：'+ str(new_version))
jspack['version']=new_version
with open("package.json",'w',encoding='utf-8') as f:
    json.dump(jspack, f,ensure_ascii=False)