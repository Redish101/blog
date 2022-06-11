---
title: Github Codespaces初体验
tags:
  - Github
categories:
  - 白嫖之道
abbrlink: 36200
date: 2022-06-10 18:52:04
---
# 这是什么

在去年，GitHub上线了一个十分酷炫的新功能：`Codespaces`，使用Codespaces可以随时随地在浏览器里编辑、调试、运行托管在GitHub的代码，但这个功能一直在内测，只有企业才能申请使用。

但就在前几天，GitHub将此功能开放公测，任何用户都能申请使用，101早早的就收到了来自GitHub的邮件，于是便满心欢喜的来到了GitHub，美滋滋的体验了一番，于是就有了这篇文章。

![101收到的邮件](https://fastly.jsdelivr.net/gh/Redish101/cdn@src/img/20220610210634.png)

# 性能

先说性能，GitHub面对个人项目提供了一台4Cores 8RAM的机子，这性能对于普通的开发那是绰绰有余，话不多说，上bench截图：

![bench测试结果](https://fastly.jsdelivr.net/gh/Redish101/cdn@src/img/20220610211120.png)

配置虽好值得夸赞，但这网络之遭也十分的影响使用，在笔者试用的时候，2个小时中断线了将近十次。虽然大部分时间下编辑器的使用并为发现明显卡顿，但终端在使用时的卡顿是真的让人无法忍受。  

# 写代码

Codespaces使用了web版本的VS Code，
