# 重构技术文档 - personImage 微信小程序

## 一、项目现状分析

### 项目概述
面向客户的个人简介 + 资料集微信小程序，展示室内设计师顾涔潇的案例、服务和联系方式。

### 当前页面结构
| 页面 | 路径 | 功能 |
|------|------|------|
| 首页 | pages/index | 个人信息、案例列表、服务、流程、联系方式 |
| 案例详情 | pages/case | 单个案例的完整展示（图片画廊、效果图链接） |
| 效果图预览 | pages/webview | web-view 加载外部链接 |

---

## 二、发现的问题

### 严重问题

#### 1. app.js 为空壳
`App({})` 没有任何初始化逻辑，缺少全局数据管理、分享配置、错误处理。

#### 2. assets/modern 目录缺失
`portfolio.js` 引用了 `/assets/modern/` 下的素材，但文件系统中**只有 `assets/midcentury/`**，导致第二个案例（蝶湖一号）的所有图片和视频资源 404。

### 代码质量问题

#### 5. CSS 样式大量重复
- `.link-card`、`.link-card__actions` 等样式在 index 和 case 页面各自独立定义
- `.contact-row` 与 `.contact-cta__row` 逻辑完全相同

#### 6. 无组件化复用
图片预览弹窗（image-preview swiper）在 case.wxml 中内联实现，若其他页面需要预览则必须复制整段代码。

#### 7. 无全局主题变量
颜色值（如 `#1b1714`, `#8a6246`, `#f3efe8`）散落在各个 wxss 文件中，修改主题需要逐个文件查找替换。

#### 8. 导航栏标题硬编码
首页 `index.json` 中 `navigationBarTitleText` 固定为"资料集"，但 `portfolio.js` 中有 `profile.name`，应动态设置。

### 用户体验问题

#### 9. 无加载状态
页面切换时无任何过渡/loading 提示。

#### 10. 首页导航 pills 在长内容下不可见
导航胶囊按钮固定在顶部滚动区域内，滚动到下方时消失，用户需要手动滚回顶部才能跳转。

#### 11. 图片预览无手势缩放
case 页面的图片预览使用 swiper，不支持双指缩放，对于效果图展示不够友好。

#### 12. 无下拉刷新
没有 `onPullDownRefresh` 配置。

### 可维护性问题

#### 13. 数据结构设计不够清晰
`portfolio.js` 将 profile、cases、videos、kujialeLinks 全部平铺在一个对象中，随着案例增多会变得臃肿。

#### 14. 无错误边界
网络请求失败、资源加载失败均无处理。

---

## 三、重构方案

### Phase 1: 修复严重问题（优先级最高）

1. **补全 app.js**
   - 添加全局数据（如 globalData）
   - 添加 onLaunch 初始化逻辑
   - 添加全局错误处理

2. **修复 video 页面 onVideoError**
   - 在 video.js 中实现 `onVideoError` 方法

3. **数据去重**
   - 移除 `videos` 数组中的冗余数据，首页视频区块改为从 `cases` 中提取有视频的案例
   - 或者将视频独立管理（如果视频确实需要独立展示）

### Phase 2: 组件化改造

4. **抽取公共组件**
   - `image-preview` 组件：图片预览弹窗（支持 swiper + 缩放）
   - `section-header` 组件：统一的区块标题样式
   - `contact-bar` 组件：联系方式展示 + 复制功能
   - `link-card` 组件：效果图链接卡片

5. **抽取公共工具函数**
   - `utils/util.js`：copyText、copyLink、showToast 等通用函数

### Phase 3: 样式优化

6. **引入 CSS 变量**
   在 `app.wxss` 中定义主题变量：
   ```css
   page {
     --color-primary: #1b1714;
     --color-accent: #8a6246;
     --color-bg: #f3efe8;
     --color-card: #fbf7f1;
     --color-border: #ddd3c7;
     --color-text-secondary: #5f564d;
     --radius-lg: 18rpx;
     --radius-md: 14rpx;
     --radius-full: 999rpx;
   }
   ```

7. **消除重复样式**
   - 统一 `.link-card` 样式到 `app.wxss`
   - 统一联系方式行样式
   - 统一图片画廊卡片样式

### Phase 4: 体验提升

8. **首页导航改进**
   - 将导航 pills 改为 `position: sticky` 固定在顶部
   - 或使用自定义 tabBar（如果后续添加底部导航需求）

9. **添加页面生命周期钩子**
   - `onShow` 中更新导航栏标题
   - 添加骨架屏或 loading 态

10. **图片预览增强**
    - 使用 `wx.previewImage` API（原生支持缩放）替代自定义 swiper
    - 保留 swiper 作为可选模式

### Phase 5: 数据层优化

11. **portfolio.js 重构**
    - 按功能拆分为多个数据文件
    - 或保持单文件但增加数据校验

---

## 四、文件变更计划

| 操作 | 文件 | 说明 |
|------|------|------|
| 修改 | app.js | 补全全局初始化逻辑 |
| 修改 | app.wxss | 添加 CSS 变量，抽入公共样式 |
| 新建 | components/image-preview/ | 图片预览组件 |
| 新建 | components/contact-bar/ | 联系方式组件 |
| 新建 | components/link-card/ | 效果图链接组件 |
| 新建 | utils/util.js | 公共工具函数 |
| 修改 | pages/index/index.js | 修复导航、去除冗余 |
| 修改 | pages/index/index.wxml | 使用组件、优化结构 |
| 修改 | pages/index/index.wxss | 适配 CSS 变量、消除重复 |
| 修改 | pages/case/case.js | 使用组件 |
| 修改 | pages/case/case.wxml | 使用组件 |
| 修改 | pages/case/case.wxss | 适配 CSS 变量 |
| 修改 | portfolio.js | 数据去重 |

---

## 五、重构原则

1. **不改变功能逻辑**：重构只改善代码结构，不改变用户可见行为
2. **逐步推进**：每个 Phase 独立可验证
3. **保持兼容**：不修改 page 路径，不影响已分享的小程序链接
4. **最小改动**：只改必须改的，不做过度设计
