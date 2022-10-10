---
layout: wiki  # 使用wiki布局模板
wiki: Hexo Studio # 这是项目名
title: 开发文档
order: 200
---
## 贡献流程

首先，从我们的[仓库](https://github.com/Redish101/Hexo-Studio)Fork`dev`分支到您的账户。  
在您Fork的仓库里编写代码，commit时需要遵守下方的commit规范（不遵守规范的commit信息无法通过commit验证，无法提交）。  
将您的修改提交到您的Fork仓库。  
创建一个新pr到Hexo Studio的主仓库的`dev`分支（提交到`main`分支的pr不被接受），并在标题内填写您的主要修改内容。  
等待审核。

## Commit信息规范

> 在每次commit都会通过commitlint进行commit信息验证，信息不符合格式无法完成commit操作。

提交信息的主要格式如下：

```
type: message
```

`type`为本次提交的类别；`message`为简短的描述信息。

附：
```javascript
// commit type列表
[
    'feat', // 新功能
    'fix', // 修补bug
    'docs', // 文档修改
    'refactor', // 重构
    'perf', // 优化相关，比如提升性能、体验
    'test', // 测试用例修改
    'revert', // 代码回滚
    'ci', // 持续集成修改
    'chore' // 其他改动
]
```