function copyText(value) {
  if (!value) return;
  wx.setClipboardData({
    data: value,
    success: () => wx.showToast({ title: "已复制", icon: "success" }),
  });
}

function copyLink(url) {
  if (!url) return;
  wx.setClipboardData({
    data: url,
    success: () => wx.showToast({ title: "已复制链接", icon: "success" }),
  });
}

function showToast(title, icon = "none") {
  wx.showToast({ title, icon });
}

function getCaseById(cases, id) {
  return cases.find((item) => item.id === id) || cases[0];
}

module.exports = { copyText, copyLink, showToast, getCaseById };
