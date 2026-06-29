const portfolio = require("../../utils/portfolio");

Page({
  data: {
    profile: portfolio.profile,
    strengths: portfolio.strengths,
    services: portfolio.services,
    process: portfolio.process,
    contact: portfolio.contact,
    cases: portfolio.cases,
    links: portfolio.links,
    navItems: [
      { id: "hero", label: "首页" },
      { id: "works", label: "作品" },
      { id: "services", label: "服务" },
      { id: "process", label: "流程" },
      { id: "contact", label: "联系" },
    ],
    activeNav: "hero",
  },

  onShareAppMessage() {
    return {
      title: `${this.data.profile.name} | ${this.data.profile.role}`,
      path: "/pages/index/index",
    };
  },

  onShareTimeline() {
    return {
      title: `${this.data.profile.name} | ${this.data.profile.role}`,
    };
  },

  scrollTo(e) {
    const id = e.currentTarget.dataset.id;
    this.setData({ activeNav: id });
    wx.pageScrollTo({ selector: `#${id}`, duration: 300 });
  },

  openCase(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({ url: `/pages/case/case?id=${id}` });
  },

  openLink(e) {
    const url = e.currentTarget.dataset.url;
    wx.navigateTo({ url: `/pages/webview/webview?src=${encodeURIComponent(url)}` });
  },

  copyWechat() {
    wx.setClipboardData({
      data: this.data.contact.wechat,
      success: () => wx.showToast({ title: "已复制微信号", icon: "success" }),
    });
  },

  onPageScroll(e) {
    // 可选：根据滚动位置高亮导航
  },
});
