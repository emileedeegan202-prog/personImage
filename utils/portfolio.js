const portfolio = {
  profile: {
    name: "顾涔潇",
    role: "室内 / 空间设计师",
    city: "江苏",
    tagline: "专注住宅空间的设计、呈现与落地",
    summary: "空间方案、视觉表达和落地沟通，一条线完成。",
  },
  strengths: ["住宅空间", "方案深化", "软装搭配", "施工配合"],
  services: [
    {
      icon: "01",
      title: "空间方案",
      desc: "需求整理、动线梳理、平面优化",
    },
    {
      icon: "02",
      title: "效果呈现",
      desc: "效果图、视觉草图、方案沟通",
    },
    {
      icon: "03",
      title: "软装建议",
      desc: "材质、色彩、家具搭配",
    },
    {
      icon: "04",
      title: "落地配合",
      desc: "施工跟进、细节收口",
    },
  ],
  process: [
    { step: "01", title: "需求沟通", desc: "确认风格、预算、工期" },
    { step: "02", title: "方案输出", desc: "平面逻辑与空间关系" },
    { step: "03", title: "视觉确认", desc: "效果图与材料方向" },
    { step: "04", title: "落地执行", desc: "现场跟进与细节收口" },
  ],
  contact: {
    wechat: "cenxiao_Keith",
    phone: "",
  },
  cases: [
    {
      id: "jinding-01",
      title: "上海金顶公寓",
      type: "中古风",
      area: "147㎡",
      coverImage: "/assets/midcentury/case-01-sm.jpg",
      summary: "中古气质与居住感的平衡",
      challenge: "客户希望空间有中古氛围，但不能显得陈旧，也不能把视觉做得太满。",
      move: "用更克制的家具尺度、偏暖的材质组合和更稳的光线层次来控制气质。",
      result: "空间有了明确的风格辨识度，同时保留了日常居住的舒适度和耐看性。",
      gallery: [
        { src: "/assets/midcentury/case-01-sm.jpg" },
        { src: "/assets/midcentury/case-02-sm.jpg" },
        { src: "/assets/midcentury/case-03-sm.jpg" },
        { src: "/assets/midcentury/case-04-sm.jpg" },
        { src: "/assets/midcentury/case-05-sm.jpg" },
        { src: "/assets/midcentury/case-06-sm.jpg" },
        { src: "/assets/midcentury/case-07-sm.jpg" },
        { src: "/assets/midcentury/case-08-sm.jpg" },
        { src: "/assets/midcentury/case-09-sm.jpg" },
      ],
    },
    {
      id: "butterfly-01",
      title: "南通蝶湖一号",
      type: "现代风",
      area: "150㎡",
      coverImage: "/assets/modern/case-01-sm.jpg",
      summary: "现代空间与功能秩序",
      challenge: "项目面积不小，但客户不希望空间显空，也不希望风格过于用力。",
      move: "通过连续的体块关系、统一的色彩节奏和更清爽的动线组织，减弱空间碎感。",
      result: "整体更简洁、明亮，也更适合长期居住和后续软装延展。",
      gallery: [
        { src: "/assets/modern/case-01-sm.jpg" },
        { src: "/assets/modern/case-02-sm.jpg" },
        { src: "/assets/modern/case-03-sm.jpg" },
        { src: "/assets/modern/case-04-sm.jpg" },
        { src: "/assets/modern/case-05-sm.jpg" },
        { src: "/assets/modern/case-06-sm.jpg" },
        { src: "/assets/modern/case-07-sm.jpg" },
        { src: "/assets/modern/case-08-sm.jpg" },
        { src: "/assets/modern/case-09-sm.jpg" },
      ],
    },
  ],
  links: [
    {
      title: "VR 全景效果图",
      url: "https://vr.justeasy.cn/view/0917m849945b1v14-1750917714.html",
    },
  ],
};

module.exports = portfolio;
