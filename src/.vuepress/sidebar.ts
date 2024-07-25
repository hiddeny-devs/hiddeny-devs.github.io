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
      icon: "compass",
      text: "物品与方块",
      children: [
        "/tutorials/item/fuel_metal",
        "/tutorials/item/mineral_fuel",
        "/tutorials/item/copper_food",
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
