const { isAllowedWebviewUrl } = require("../../utils/util");

Page({
  data: {
    src: "",
    message: "没有可预览的链接",
  },

  onLoad(options) {
    const src = options.src ? decodeURIComponent(options.src) : "";

    if (!src) return;

    if (!isAllowedWebviewUrl(src)) {
      this.setData({ message: "该链接暂不支持在小程序内打开" });
      wx.showToast({ title: "链接不可用", icon: "none" });
      return;
    }

    this.setData({ src });
  },
});
