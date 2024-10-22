import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "博客",
    icon: "blog",
    link: "/blog",
  },
  {
    text: "教程",
    icon: "lightbulb",
    link: "/tutorials/index",
  },
  {
    text: "关于",
    icon: "bars",
    children: [
      "/dev/index",
      "/about/credits",
      "/about/license",
      "/about/contribute",
      "/about/links",
    ],
  },
]);
