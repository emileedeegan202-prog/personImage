const portfolio = require("../../utils/portfolio");

function getCaseById(id) {
  return portfolio.cases.find((item) => item.id === id) || portfolio.cases[0];
}

Page({
  data: {
    profile: portfolio.profile,
    contact: portfolio.contact,
    caseItem: null,
    kujialeLinks: portfolio.kujialeLinks,
    previewImages: [],
    previewOpen: false,
    previewIndex: 0,
  },

  onLoad(options) {
    const caseItem = getCaseById(options.id);
    // 封面图放第一个，然后是画廊图片
    const previewImages = Array.from(
      new Set(
        [caseItem.coverImage]
          .concat((caseItem.gallery || []).map((item) => item.src))
          .filter(Boolean)
      )
    );
    this.setData({ caseItem, previewImages });
    wx.setNavigationBarTitle({ title: caseItem.title });
  },

  previewImage(event) {
    const current = event.currentTarget.dataset.src;
    const urls = this.data.previewImages;
    if (!urls || urls.length === 0) {
      wx.showToast({ title: "没有可预览的图片", icon: "none" });
      return;
    }
    const index = Math.max(0, urls.indexOf(current || urls[0]));
    this.setData({
      previewOpen: true,
      previewIndex: index,
    });
  },

  closePreview() {
    this.setData({
      previewOpen: false,
    });
  },

  stopPreviewTap() {},

  onPreviewChange(event) {
    this.setData({
      previewIndex: event.detail.current || 0,
    });
  },

  copyText(event) {
    const { value } = event.currentTarget.dataset;
    if (!value) return;
    wx.setClipboardData({
      data: value,
      success: () => wx.showToast({ title: "已复制", icon: "success" }),
    });
  },

  copyLink(event) {
    const { src } = event.currentTarget.dataset;
    if (!src) return;
    wx.setClipboardData({
      data: src,
      success: () => wx.showToast({ title: "已复制链接", icon: "success" }),
    });
  },

  openLink(event) {
    const src = event.currentTarget.dataset.src;
    if (!src) return;
    wx.navigateTo({
      url: `/pages/webview/webview?src=${encodeURIComponent(src)}`,
    });
  },
});
