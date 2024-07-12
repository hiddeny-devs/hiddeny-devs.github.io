import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "博客",
    icon: "blog",
    link: "/article/index",
  },
  {
    text: "教程",
    icon: "lightbulb",
    link: "/tutorials/index",
  },
  {
    text: "API文档",
    icon: "book",
    link: "/docs/api/index",
  },
]);
