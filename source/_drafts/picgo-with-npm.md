---
title: Picgo + GitHub Action + npm 搭建超爽图床
date: 2022-07-02 17:50:53
tags:
 - Picgo
 - 图床
 - Github Action
categories:
 - 白嫖之道
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

像上面这样在本地操作图片未免有些太麻烦了，要是换了个设备就需要重装了
