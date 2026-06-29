const { copyLink } = require("../../utils/util");

Component({
  properties: {
    title: { type: String, value: "" },
    url: { type: String, value: "" },
    note: { type: String, value: "" },
  },

  methods: {
    onCopyLink() {
      copyLink(this.data.url);
    },

    onOpenLink() {
      if (!this.data.url) return;
      wx.navigateTo({
        url: `/pages/webview/webview?src=${encodeURIComponent(this.data.url)}`,
      });
    },
  },
});
