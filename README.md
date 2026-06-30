# 顾涔潇 - 室内设计师作品集小程序

面向潜在业主的微信小程序作品集，用于展示室内设计案例、服务内容、合作流程、VR 全景链接和联系方式。

## 当前内容

- 设计师：顾涔潇
- 定位：室内 / 空间设计师
- 城市：江苏
- 微信：`cenxiao_Keith`
- 当前案例：上海金顶公寓，147㎡，中古风

## 功能

- 首页展示设计师定位、精选作品、服务内容、合作流程和联系方式
- 案例详情展示项目概述、设计拆解、空间图集和 VR 全景
- 图片点击后使用微信原生 `wx.previewImage` 预览，支持缩放
- VR 链接支持复制和通过 `web-view` 打开
- 微信号一键复制

## 本地开发

1. 打开微信开发者工具。
2. 导入项目目录：`E:\xAI\personImage`。
3. 使用测试 AppID 可本地预览；正式发布前替换 `project.config.json` 中的 `appid`。

## 发布前配置

- 在微信小程序后台配置业务域名：`vr.justeasy.cn`。
- 当前 `project.config.json` 的 `urlCheck` 仍为 `false`，正式发布前建议开启并在真机检查。
- `assets/midcentury/case-01.jpg`、`case-02.jpg`、`case-03.jpg` 为未引用大图，已通过 `packOptions.ignore` 排除上传。正式素材建议放到 CDN 或云存储。

## 目录结构

```text
pages/
  index/      首页
  case/       案例详情
  webview/    VR 链接预览
components/
  contact-bar/ 联系方式组件
  link-card/   VR 链接组件
assets/
  midcentury/  上海金顶公寓素材
utils/
  portfolio.js 作品集数据
  util.js      通用工具函数
```

## 维护说明

- 添加案例：在 `utils/portfolio.js` 的 `cases` 数组中新增对象。
- 更新 VR：在对应案例的 `links` 数组中修改。
- 更新联系方式：修改 `portfolio.contact`。
- 添加图片：优先使用压缩后的 `*-sm.jpg`，避免把大图放进小程序主包。
