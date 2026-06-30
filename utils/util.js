function copyText(value, title = "已复制") {
  if (!value) return;
  wx.setClipboardData({
    data: value,
    success: () => wx.showToast({ title, icon: "success" }),
  });
}

function copyLink(url) {
  copyText(url, "已复制链接");
}

function showToast(title, icon = "none") {
  wx.showToast({ title, icon });
}

function getCaseById(cases, id) {
  return cases.find((item) => item.id === id) || cases[0] || null;
}

function uniqueImages(images) {
  return Array.from(new Set(images.filter(Boolean)));
}

function splitColumns(items) {
  const columns = items.reduce(
    (columns, item, index) => {
      columns[index % 2].push(item);
      return columns;
    },
    [[], []]
  );

  return columns.map((list, index) => ({
    id: `column-${index}`,
    items: list,
  }));
}

function isAllowedWebviewUrl(url) {
  return /^https:\/\/vr\.justeasy\.cn\//.test(url || "");
}

module.exports = {
  copyText,
  copyLink,
  showToast,
  getCaseById,
  uniqueImages,
  splitColumns,
  isAllowedWebviewUrl,
};
