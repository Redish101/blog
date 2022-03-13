---
title: docsify - 一个优雅的静态文档生成器
date: 2022-03-05
tags: 
 - docsify
 - 静态站点
categories: 
 - 教程
author: 
 - Redish101
 - 宋紫睿
---

> 我的同学**宋紫睿**为这篇文章作出了不可磨灭的贡献。
> 阅读之前，告诉大家一个消息:**本文有彩蛋**。

## docsify好在哪里

开源项目的文档往往是一个很大的问题，许多静态站点生成器并不能兼顾**强大**与**简单**。

<!-- more -->

### 对比

#### Sphinx

先拿Sphinx来说吧，Sphinx因背后有python的驱动，功能十分强大，但是`reStructuredText`的复杂也劝退了许多人。

#### Vuepress

相比之下，vuepress在文档的编写上就没有那么复杂了，毕竟`markdown`还是很简单的。
But，vuepress的配置实在是太复杂了，而且构建速度及其缓慢，最重要的是需要`JavaScript`的基础。

#### mkdocs

mkdocs可以说是能和docsify抗衡了，但是，mkdocs需要构建

## 使用

经过上面的的对比，docsify的优点已经很明显了，下面我们就来安装docsify

### 安装

全局安装Docsify-cli:

```bash
yarn global add docsify-cli
# 或者使用npm
```

### 开始一个项目

```bash
docsify init <项目路径>
```

### 配置

配置也很简单，可以参考[配置项 (docsify.js.org)](https://docsify.js.org/#/zh-cn/configuration)

### 写作

这个更简单，只需要在`docs`文件夹里新建`markdown`文件即可。
(别说你不会，送你个指南[Markdown 官方教程](https://markdown.com.cn/))

#### 路径问题

这里要注意一下路径：

假设你的目录结构如下：

```text
.
└── docs
├── README.md
├── guide.md
└── zh-cn
├── README.md
└── guide.md
```

那么渲染后的路径就是：

```text
docs/README.md        => http://domain.com
docs/guide.md         => http://domain.com/guide
docs/zh-cn/README.md  => http://domain.com/zh-cn/
docs/zh-cn/guide.md   => http://domain.com/zh-cn/guide
```

## 部署

### Github Pages

将Github Pages的工作目录设置到docsify所在目录。

### Vercel

选中docsify所在仓库，点击下面的deploy

### 其他

具体我也不会用，只需要记住两点：

- 无需构建
- 工作目录在根目录

## 参考文献

1. [docsify中文文档](https://docsify.js.org/#/zh-cn/)
2. [Introduction to Vercel – Vercel Docs](https://vercel.com/docs)
3. [Vercel 上自动部署你的个人博客 Hugo - SegmentFault 思否](https://segmentfault.com/a/1190000040063325?utm_source=tag-newest)

感谢阅读
彩蛋：🥚呵呵呵，答应你们的蛋。

