Page({
  data: {
    title: "视频",
    file: "",
  },

  onLoad(options) {
    if (options.title) {
      this.setData({ title: decodeURIComponent(options.title) });
    }
    if (options.file) {
      this.setData({ file: decodeURIComponent(options.file) });
    }
    wx.setNavigationBarTitle({ title: this.data.title });
  },
});
