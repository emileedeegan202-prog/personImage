const portfolio = require("../../utils/portfolio");
const { splitColumns } = require("../../utils/util");

const app = getApp();

Page({
  data: {
    profile: portfolio.profile,
    strengths: portfolio.strengths,
    services: portfolio.services,
    process: portfolio.process,
    contact: portfolio.contact,
    cases: portfolio.cases,
    caseColumns: splitColumns(portfolio.cases),
    links: portfolio.links,
    statusBarHeight: app.globalData.statusBarHeight || 0,
    navItems: [
      { id: "hero", label: "首页" },
      { id: "works", label: "作品" },
      { id: "services", label: "服务" },
      { id: "process", label: "流程" },
      { id: "contact", label: "联系" },
    ],
    activeNav: "hero",
  },

  onLoad() {
    wx.setNavigationBarTitle({
      title: `${portfolio.profile.name} | 室内设计师`,
    });
  },

  onShareAppMessage() {
    return {
      title: `${this.data.profile.name} | ${this.data.profile.role}`,
      path: "/pages/index/index",
      imageUrl: this.data.profile.heroImage,
    };
  },

  onShareTimeline() {
    return {
      title: `${this.data.profile.name} | ${this.data.profile.role}`,
      imageUrl: this.data.profile.heroImage,
    };
  },

  scrollTo(e) {
    const id = e.currentTarget.dataset.id;
    this.setData({ activeNav: id });
    wx.pageScrollTo({
      selector: `#${id}`,
      offsetTop: -72,
      duration: 320,
    });
  },

  openCase(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({ url: `/pages/case/case?id=${id}` });
  },
});
