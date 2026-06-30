# 重构记录 - personImage 微信小程序

## 已完成

- 修复作品数据：移除引用不存在的 `assets/modern` 案例，保留当前真实可用的上海金顶公寓案例。
- 调整数据模型：VR 链接挂到对应案例的 `links` 字段，首页从案例中聚合展示。
- 优化包体：未引用的大图通过 `project.config.json` 的 `packOptions.ignore` 排除上传。
- 首页重构：改为杂志感首屏、作品瀑布流、服务模块、流程和联系区。
- 详情页重构：项目头图、案例拆解、图库和 VR 预览结构更清晰。
- 性能优化：瀑布流列数据在 JS 中预处理，不再在 WXML 中双循环过滤。
- 组件复用：`contact-bar` 和 `link-card` 被首页和详情页复用。
- 图片预览：统一使用微信原生 `wx.previewImage`，删除未使用的自定义预览组件。
- WebView 加固：只允许打开 `https://vr.justeasy.cn/` 下的 VR 链接。

## 当前结构

| 模块 | 路径 | 说明 |
| --- | --- | --- |
| 首页 | `pages/index` | 设计师信息、作品、服务、流程、VR、联系 |
| 案例详情 | `pages/case` | 单个案例完整展示 |
| 链接预览 | `pages/webview` | `web-view` 打开 VR 链接 |
| 数据 | `utils/portfolio.js` | 作品集配置 |
| 工具 | `utils/util.js` | 复制、分列、去重、链接校验 |
| 联系组件 | `components/contact-bar` | 微信/电话复制 |
| 链接组件 | `components/link-card` | VR 链接复制和打开 |

## 后续建议

- 如果继续增加案例，建议把大图和图库迁移到 CDN 或云存储，主包只保留必要缩略图。
- 正式发布前替换真实 AppID，并在微信后台配置 `vr.justeasy.cn` 业务域名。
- 如果案例数量超过 10 个，可以把案例详情图集做分批渲染，进一步降低首屏内存压力。
