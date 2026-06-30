const midcenturyGallery = Array.from({ length: 9 }, (_, index) => ({
  src: `/assets/midcentury/case-${String(index + 1).padStart(2, "0")}-sm.jpg`,
}));

const portfolio = {
  profile: {
    name: "顾涔潇",
    role: "室内 / 空间设计师",
    city: "江苏",
    tagline: "把居住的秩序、质感和情绪，收束成可以落地的空间方案。",
    summary:
      "专注住宅空间设计，从需求梳理、平面优化、效果呈现到落地配合，帮助业主把理想生活变成可执行的空间语言。",
    heroImage: "/assets/midcentury/case-02-sm.jpg",
  },
  strengths: ["住宅空间", "方案深化", "软装搭配", "施工配合"],
  services: [
    {
      icon: "01",
      title: "空间方案",
      desc: "梳理居住需求、动线关系与收纳结构，让平面先变得好住。",
    },
    {
      icon: "02",
      title: "效果呈现",
      desc: "用效果图和材质方向提前校准审美，减少施工阶段的反复。",
    },
    {
      icon: "03",
      title: "软装建议",
      desc: "围绕家具、灯光、色彩和材质建立完整的空间气质。",
    },
    {
      icon: "04",
      title: "落地配合",
      desc: "配合现场沟通和关键节点把控，让细节按方案推进。",
    },
  ],
  process: [
    { step: "01", title: "需求沟通", desc: "确认居住习惯、预算边界、风格方向和工期。" },
    { step: "02", title: "方案输出", desc: "完成平面逻辑、空间关系和重点区域设计。" },
    { step: "03", title: "视觉确认", desc: "明确效果图、材质、灯光和软装节奏。" },
    { step: "04", title: "落地执行", desc: "跟进施工节点，协助处理现场细节和调整。" },
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
      location: "上海",
      coverImage: "/assets/midcentury/case-01-sm.jpg",
      summary: "以克制的中古气质平衡生活感和精致度，保留日常居住的松弛。",
      challenge:
        "业主希望空间具备中古氛围，但不能显得陈旧，也不希望视觉层次过满。",
      move:
        "用低饱和木色、温润石材和更稳定的灯光层次控制气质，让家具尺度服务日常动线。",
      result:
        "空间有了明确的风格辨识度，同时保留了舒适、耐看和适合长期居住的生活底色。",
      gallery: midcenturyGallery,
      links: [
        {
          title: "上海金顶公寓 VR 全景",
          url: "https://vr.justeasy.cn/view/0917m849945b1v14-1750917714.html",
          note: "打开后可查看空间动线与关键视角。",
        },
      ],
    },
  ],
};

portfolio.links = portfolio.cases.flatMap((item) =>
  (item.links || []).map((link) => ({
    ...link,
    caseId: item.id,
    caseTitle: item.title,
  }))
);

module.exports = portfolio;
