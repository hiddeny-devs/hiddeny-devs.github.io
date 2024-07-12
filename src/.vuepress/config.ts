import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "隐藏之年",
  description: "隐藏之年官方网站",
  head: [
    [
      "link",
      { rel: "icon", href: "https://s21.ax1x.com/2024/07/11/pkhrmIf.png" },
    ],
  ],
  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
