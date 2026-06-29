const portfolio = require("../../utils/portfolio");

Page({
  data: {
    profile: portfolio.profile,
    strengths: portfolio.strengths,
    stats: portfolio.stats,
    services: portfolio.services,
    process: portfolio.process,
    contact: portfolio.contact,
    cases: portfolio.cases,
    featuredCase: portfolio.cases[0],
    videos: portfolio.videos,
    kujialeLinks: portfolio.kujialeLinks,
    sections: [
      { id: "about", label: "简介" },
      { id: "cases", label: "案例" },
      { id: "links", label: "效果图" },
      { id: "videos", label: "视频" },
      { id: "services", label: "服务" },
      { id: "process", label: "流程" },
      { id: "contact", label: "联系" },
    ],
  },

  onShareAppMessage() {
    return {
      title: `${this.data.profile.name} - ${this.data.profile.role}`,
      path: "/pages/index/index",
    };
  },

  onShareTimeline() {
    return {
      title: `${this.data.profile.name} - ${this.data.profile.role}`,
    };
  },

  scrollToSection(event) {
    const target = event.currentTarget.dataset.target;
    if (!target) return;
    wx.pageScrollTo({
      selector: `#${target}`,
      duration: 300,
    });
  },

  openCase(event) {
    const id = event.currentTarget.dataset.id;
    if (!id) return;
    wx.navigateTo({
      url: `/pages/case/case?id=${id}`,
    });
  },

  openVideo(event) {
    const file = event.currentTarget.dataset.file;
    const title = event.currentTarget.dataset.title;
    if (!file) return;
    wx.navigateTo({
      url: `/pages/video/video?file=${encodeURIComponent(file)}&title=${encodeURIComponent(title || "视频")}`,
    });
  },

  openLink(event) {
    const src = event.currentTarget.dataset.src;
    if (!src) return;
    wx.navigateTo({
      url: `/pages/webview/webview?src=${encodeURIComponent(src)}`,
    });
  },

  copyLink(event) {
    const { src } = event.currentTarget.dataset;
    if (!src) return;
    wx.setClipboardData({
      data: src,
      success: () => {
        wx.showToast({ title: "已复制链接", icon: "success" });
      },
    });
  },

  copyText(event) {
    const { value } = event.currentTarget.dataset;
    if (!value) return;
    wx.setClipboardData({
      data: value,
      success: () => {
        wx.showToast({ title: "已复制", icon: "success" });
      },
    });
  },
});
