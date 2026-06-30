const portfolio = require("../../utils/portfolio");
const { getCaseById, splitColumns, uniqueImages } = require("../../utils/util");

Page({
  data: {
    profile: portfolio.profile,
    contact: portfolio.contact,
    caseItem: null,
    galleryColumns: [[], []],
    previewImages: [],
  },

  onLoad(options) {
    const caseItem = getCaseById(portfolio.cases, options.id);
    if (!caseItem) {
      wx.showToast({ title: "项目不存在", icon: "none" });
      return;
    }

    const gallery = caseItem.gallery || [];
    const previewImages = uniqueImages([caseItem.coverImage].concat(gallery.map((item) => item.src)));

    this.setData({
      caseItem,
      galleryColumns: splitColumns(gallery),
      previewImages,
    });

    wx.setNavigationBarTitle({ title: caseItem.title });
  },

  goBack() {
    if (getCurrentPages().length > 1) {
      wx.navigateBack();
      return;
    }
    wx.redirectTo({ url: "/pages/index/index" });
  },

  previewImage(e) {
    const current = e.currentTarget.dataset.src;
    const urls = this.data.previewImages;
    if (!current || !urls.length) return;

    wx.previewImage({ current, urls });
  },
});
