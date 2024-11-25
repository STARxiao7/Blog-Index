/** Website 分类配置 */
const WEBSITE_SORTS: WebsiteSort[] = [
  {
    title: "⠀首页⠀",
    sites: [
      {
        title: "小洛的被窝",
        url: "https://link3.cc/love7",
        description: "小洛的聚合页",
        icon: "/icons/小洛的被窝.png",
        //color: "#0171CD",
      },
      {
        title: "流量卡总汇",
        description: "涵盖国内四大运营商",
        url: "https://link3.cc/kaka6",
        icon: "/icons/四大运营商.png",
      },
    ],
  },
  {
    title: "⠀推荐⠀",
    sites: [
      {
        title: "今天吃什么",
        description: "如何解决吃什么的烦恼？",
        url: "https://eat.chenzs.com",
        icon: "https://eat.chenzs.com/favicon.png",
      },
      {
        title: "Poki",
        description: "在线小游戏集",
        url: "https://poki.com",
        icon: "https://a.poki-cdn.com/icons/apple-touch-icon.png",
      },
    ],
  },
  {
    title: "⠀工具⠀",
    sites: [
      {
        title: "iLoveIMG",
        description: "在线图片编辑",
        url: "https://www.iloveimg.com/zh-cn",
        icon: "https://www.iloveimg.com/img/favicons-img/favicon-16x16.png",
      },
      {
        title: "FreeConvert",
        description: "在线文件格式转换",
        url: "https://www.freeconvert.com/zh",
        icon: "https://www.freeconvert.com/favicon.ico",
      },
      {
        title: "JiDrop",
        description: "跨设备文件互传",
        url: "https://jidrop.com",
        icon: "https://jidrop.com/images/favicon-96x96.png",
      },
      {
        title: "JiDrop",
        description: "跨设备文件互传",
        url: "https://jidrop.com",
        icon: "https://jidrop.com/images/favicon-96x96.png",
      },
    ],
  },
/*  {
    title: "友情链接",
    sites: [
      {
        title: "EsunR Blog",
        description: "EsunR 的博客",
        url: "https://www.esunr.xyz",
        icon: "https://esunr-image-bed.oss-cn-beijing.aliyuncs.com/logo.jpg",
      },
    ],
  },*/
  {
    title: "⠀⠀",
  },
];


/** Website 配置（2023.3.29 已废弃） */
const WEBSITE_ITEMS: WebsiteItem[] = [];

const GLOBAL_CONFIG = {
  /**
   * 博客名称
   */
  BLOG_NAME: "小洛的被窝",
  /**
   * 个人博客链接
   */
  BLOG_URL: "https://link3.cc/love7",
  /**
   * 指定中心 LOGO 图片地址
   */
  LOGO_URL: null,
  /**
   * 个人 Github 链接
   */
  /*GITHUB_URL: "https://github.com/STARxiao7",
  /**
   * 背景图片地址
   */
  BACKGROUND_IMG_URL: "https://api.dujin.org/bing/1920.php",
  /**
   * ICP 备案号，留空不显示
   */
  ICP: "",
  ICP_URL: "https://beian.miit.gov.cn/",
  FOOTER_INFO: true,
  /**
   * 网站欢迎标语
   */
  SLOGANS: [
    "欢迎拜访",
    "歡迎拜訪",
    "Welcome, my friend!",
    "訪問へようこそ",
    "嗨，别来无恙",
    "不忘初心，一生浪漫",
    "最近还好吗？",
    "流星，落花，萤火",
    "马车越空，晃荡越响",
  ],
  /**
   * Website 分类配置
   */
  WEBSITE_SORTS,
  /**
   * Website 配置（2023.3.29 已废弃）
   */
  WEBSITE_ITEMS,
  /**
   * 网站 Title Keywords Description 的配置，用于 SEO
   */
  TKD: {
    title: "小洛的被窝",
    keywords: "Blog, Index, Index Page",
    description: "This is my personal blog index page.",
  },
};

export default GLOBAL_CONFIG;
