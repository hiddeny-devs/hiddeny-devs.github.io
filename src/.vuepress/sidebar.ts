import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "教程",
      icon: "book",
      prefix: "tutorials/",
      children: ["/tutorials/index", "/tutorials/start"],
    },
    {
      text: "API文档",
      icon: "person-chalkboard",
      link: "/docs/api/index",
    },
  ],
});
