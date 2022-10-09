---
layout: wiki  # 使用wiki布局模板
wiki: Hexo Studio # 这是项目名
title: 简介
order: 1
---
## 极速开始

从[发行版](https://github.com/Redish101/Hexo-Studio/releases)下载源码
```bash
# 安装依赖
npm install
```
修改`hs.confg.js`中的配置
```bash
# 构建
npm run build
```
将`dist`文件夹内的文件部署到您的服务器或任意一个静态网站托管平台  
完成！

## 注意事项

### 部署位置

HexoStudio只支持部署在网站的根目录，如`admin.yourdomain.com/`，部署在诸如`blog.yourdomain.com/admin`的位置会引起静态资源的引用错误

### 浏览器兼容性

Hexo Studio必须运行在满足以下条件的现代浏览器中：

1. 支持JavaScript
2. 支持原生`module`导入
3. 支持动态导入
4. 支持Service Worker（在`navigator`中含有`serviceWorker`项）
5. Vue.js的所有要求