---
categories:
  - 白嫖之道
date: '2022-07-08 21:21:53'
tags:
  - Picgo
  - 图床
  - Github Action
  - npm
  - cdn
title: Picgo + GitHub Action + npm 搭建超爽图床
updated: '2022-07-08 21:20:58'
abbrlink: 5408
cover: 'https://cdn1.tianli0.top/gh/Redish101/cdn@src/img/20220718215706.png'
---
图床，用于将本地的图片上传到互联网并生成唯一的直接链接，常常用于在网站中插入图片。目前市面上有许多的公用图床，体验也都还可以，但自己的图片放在别人的服务器多少有点不放心，要是跑路了更是直接玩完。此时有杠精要说了：“101，101，不是还有各大厂的对象储存吗”，您要是口袋比较充裕的话您就用，一个G的流量就0.5CNY，101是真的用不起。

## Step.1 搭建npm图床

市面上有非常多的npm cdn，通过这些cdn，我们可以引用发布到npm的文件，例如本站的npm包是 `redish101-blog`，最新版本为 `1.3.656820088`，需要获取 `/public/index.html`，通过Jsdelivr Fastly引用，直接链接就是这样的:

```plaintext
https://fastly.jsdelivr.net/npm/redish101-blog@1.3.656820088/public/index.html
```

> 这里为什么使用Fastly而非主域名(cdn.jsdelivr.net)：
>
> 最近,Jsd的主域名被dns污染了，Fastly是亚洲节点，所以没有受到影响，但电信访问Fastly绝对能急死人，所以，在目前情况下来看，在生产环境下使用jsd作为cdn是非常愚蠢的行为，这将大幅度拖慢网页加载速度。

> 20220702更新: 一个不幸的消息，Fastly也炸了🙁

同理，也可以获取发布到npm的图片。

### 具体操作

> 在搭建npm图床之前，需要安装npm

首先，我们在本地创建一个npm包：

```bash
mkdir redish101-pic # 新建文件夹以初始化npm包
cd redish101-pic # 进入上一步创建的文件夹
npm init # 将文件夹初始化为npm包
```

之后，我们可以在这个目录中存入图片。将需要的图片存入到目录之后发布到npm：

```bash
npm login # 登录到npm
npm publish # 上传到npm
```

可以看到，第一次上传没有出现任何问题，但如果再试一次，会出现以下报错：

![](https://cdn1.tianli0.top/gh/Redish101/cdn@src/img/20220703211438.png)

这是因为npm不允许发布重复的版本，我们需要手动更新 `package.json`中的 `version`字段更改版本，版本号需要符合[语义化版本](https://semver.org/lang/zh-CN/)。

上传之后，我们就可以获取图片的直接链接了，格式一般为这样：

```plaintext
https://你的cdn地址/包名@版本号/图片的相对路径
```

但jsd是个例外：

```plaintext
https://fastly.jsdelivr.net/npm/包名@版本号/相对路径
```

至于哪里有npm cdn可以用，请自行谷歌，101推荐eleme。

## Step.2 集成到Github

像上面这样在本地操作图片未免有些太麻烦了，要是换了个设备就需要重装了，那么，就让我们把图片放到Github。

### 具体操作

首先，我们在Github新建一个仓库，仓库名随意，然后把所有图片存到这个仓库里。然后前往[npm官网](https://www.npmjs.com/)，生成一个`Access Tokens`，保留备用。

![](https://cdn1.tianli0.top/gh/Redish101/cdn@src/img/20220707114628.png)

![](https://cdn1.tianli0.top/gh/Redish101/cdn@src/img/20220707114742.png)

![](https://cdn1.tianli0.top/gh/Redish101/cdn@src/img/20220707114931.png)

![](https://cdn1.tianli0.top/gh/Redish101/cdn@src/img/20220707115044.png)

回到Github，打开仓库设置=>secrets=>Action，新建一个Secret，名字为`NPM_TOKEN`，内容为刚才生成的Access Token，保存。

之后，写一个ci用于自动发布npm包，在仓库`.github/workflows`目录新建一个yml文件作为ci配置文件，名称随意，粘贴下面的内容：

```yaml
name: Deploy to NPM CDN
'on':
  - workflow_dispatch
  - push
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v1
        with:
          node-version: 16.x
      - uses: JS-DevTools/npm-publish@v1
        with:
          token: ${{ secrets.NPM_TOKEN }}
```

试试上传一张图片，等待一会，图片就自动上传到了npm，但我们再上传一遍，会出现之前版本号重复的问题，如果你不想每次上传都更改`packages.json`，可以像我一样写一个小小的脚本，并在ci中运行，下面是参考：

脚本：

```python
# new_version.py

import json;
import time;

with open("package.json",'r',encoding='utf-8') as f:
    jspack = json.load(f)

new_version = '1.1.'+str(int(time.time()))[1:11:1]
jspack['version']=new_version
with open("package.json",'w',encoding='utf-8') as f:
    json.dump(jspack, f,ensure_ascii=False)
```

ci配置：

```yaml
name: Deploy to NPM CDN
'on':
  - workflow_dispatch
  - push
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v1
        with:
          node-version: 16.x
      - run: python3 new_version.py
      - uses: JS-DevTools/npm-publish@v1
        with:
          token: ${{ secrets.NPM_TOKEN }}

```

到这里就完成搭建了。

## Step.3 集成到Picgo

Picgo是一个图床客户端，支持Github图床，可以更加方便的上传图片。

首先，我们去到[Picgo的仓库](https://github.com/Molunerfinn/PicGo)，进入releases，随意选择一个版本，打开附件列表，下载对应系统的安装包，安装，并且打开Picgo，进入图床设置=》GitHub图床，进行配置：

- **仓库名**：储存图片的GitHub仓库，格式为`用户名/仓库名`
- **分支名**：储存图片的仓库分支
- **Token**：你的GitHub密钥，在[这里](https://github.com/settings/tokens/new)生成，按这张图片填写信息![](https://cdn1.tianli0.top/gh/Redish101/cdn@src/img/20220708210252.png)
- **图片路径**：不用管
- **自定义域名**：你的npm包在npm的路径，版本选择latest，这里以jsd为例：`https://fastly.jsdelivr.net/npm/包名@latest/图片路径`

保存配置并设置为默认图床。

## 编者的话

终于把这篇文章写出来了，最近还搞好了新的评论系统——Artalk，大家有什么问题可以在下面评论，也可以闲聊，毕竟网站最近活跃不高，emm。
