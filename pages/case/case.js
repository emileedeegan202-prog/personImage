const portfolio = require("../../utils/portfolio");
const { getCaseById } = require("../../utils/util");

Page({
  data: {
    profile: portfolio.profile,
    contact: portfolio.contact,
    caseItem: null,
    links: portfolio.links,
    previewImages: [],
    previewOpen: false,
    previewIndex: 0,
  },

  onLoad(options) {
    const caseItem = getCaseById(portfolio.cases, options.id);
    if (!caseItem) return;

    const previewImages = [caseItem.coverImage]
      .concat(caseItem.gallery.map((g) => g.src))
      .filter(Boolean);

    this.setData({ caseItem, previewImages });
    wx.setNavigationBarTitle({ title: caseItem.title });
  },

  goBack() {
    wx.navigateBack();
  },

  previewImage(e) {
    const current = e.currentTarget.dataset.src;
    const urls = this.data.previewImages;
    if (!urls.length) return;

    wx.previewImage({
      current,
      urls,
    });
  },

  closePreview() {
    this.setData({ previewOpen: false });
  },

  onPreviewChange(e) {
    this.setData({ previewIndex: e.detail.current || 0 });
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
});
