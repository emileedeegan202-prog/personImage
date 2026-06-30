App({
  globalData: {
    systemInfo: null,
    statusBarHeight: 0,
  },

  onLaunch() {
    const systemInfo = wx.getSystemInfoSync();
    this.globalData.systemInfo = systemInfo;
    this.globalData.statusBarHeight = systemInfo.statusBarHeight || 0;
  },
});
