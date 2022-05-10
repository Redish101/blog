---
title: Redish101 Blog Friend Links条款与申请方式
date: 2022-05-10 21:01:41
---

## 0.总则
为了规范化本站友链功能的运营，优化友链的成员项，提高友链成员文章的质量，制定本条款。

## 1.要求

### 域名
您的网站必须拥有独立域名（`github.io`、`vercel.app`等域名除外），若网站部署在顶级`Apex`域内或`www`域内无需验证；若部署在`二级域名`，则需将域名以`TXT`方式解析`Redish101-friend-links`到`redish101-friend-links.xxx.xxx`，在完成验证后可安全删除DNS记录。  

国内服务器请尽量提供域名对应的`ICP备案号`。

### 内容
需要有三篇以上原创文章（不包括广告类文章），并且内容不违反`中华人民共和国相关法律`。  
友链部分必须有本站链接，以下为本站信息
```yaml
标题: Redish101 Blog
介绍: Redish101的小站
logo: https://main-1302090947.cos.ap-beijing.myqcloud.com/64068446.png
链接: https://blog.redish101.tk/
```

## 2.申请
Fork本站的[源代码仓库](https://github.com/redish101/blog)，在`fluid.config.yml`文件中的第`916行`中`links`项中的`items`列表末尾添加内容，以下为格式demo:
```yaml
- {
        title: '站点标题',
        intro: '站点简介',
        link: '站点链接',
        avatar: '站点logo（或博主头像）'
    }
```
将`package.json`中的`version`项中的第三位加一，如`0.0.9`需改为`0.0.10`。  
将`themes/fluid/source/sw.js`中第`47行`中版本号改为上一步中指定的版本号。
> 为什么这样做？  
> 本站使用npm cdn优选实现加速效果，每次更新都需要指定版本号以保证内容的正常加载

在仓库中提交PR，等待审核。  

## 3.申请后
审核通过后我们会通过您网站的留言板，评论区等方式通知您 ，请留意站点评论区/留言板。  
请尽量保证您网站的运行正常，如停止运行，请联系我们。

## 4.总结
感谢您的配合，通过后，请您保证网站内容的更新，谢谢。

Redish101  
最后修订于2022年5月10日