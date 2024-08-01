import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    "/tutorials/index",
    {
      icon: "circle-info",
      text: "关于",
      children: [
        "/about/version",
        "/about/credits",
        "/about/license",
        "/about/contribute",
        "/about/links"
      ]
    }
  ],
  "/dev": [
    "/dev/index",
    "/dev/publish-version"
  ],
  "/tutorials":[
    "/tutorials/index",
    "/tutorials/start",
    "/tutorials/manual-import",
    {
      icon: "gears",
      text: "游戏玩法",
      children: [
       "/tutorials/gameplay/article",
       "/tutorials/gameplay/quest",
       "/tutorials/gameplay/quest-list"
      ] 
    },
    {
      icon: "toolbox",
      text: "材料与工具",
      children: [
        "/tutorials/item/fuel_metal",
        "/tutorials/item/mineral_fuel"       
      ]
    },
    {
      icon: "utensils",
      text: "食物与饮品",
      children: [
      "/tutorials/item/copper_food",
        "/tutorials/item/syrup",
        "/tutorials/item/honey_candy",
        "/tutorials/item/marshallow",
        "/tutorials/item/chocolate",
        "/tutorials/item/medicine"
      ]
    },
    {
      icon: "book",
      text: "文章",
      children: [
        "/tutorials/article/beginning",
        "/tutorials/article/main",
        "/tutorials/article/sprite",
      ]
    }
  ]
});
