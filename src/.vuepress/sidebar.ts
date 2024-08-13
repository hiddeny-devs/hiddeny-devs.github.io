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
      icon: "gamepad",
      text: "游戏玩法",
      children: [
       "/tutorials/gameplay/article",
       "/tutorials/gameplay/quest",
       "/tutorials/gameplay/quest-list"
      ] 
    },
    {
      icon: "cube",
      text: "材料",
      children: [
        "/tutorials/materials/index",
        "/tutorials/materials/wooden",  
        "/tutorials/materials/golden", 
        "/tutorials/materials/stone",
        "/tutorials/materials/copper",
        "/tutorials/materials/bone",
        "/tutorials/materials/amethyst",
        "/tutorials/materials/over_metal",
        "/tutorials/materials/flash_metal",
        "/tutorials/materials/iron",
        "/tutorials/materials/corrosion",
        "/tutorials/materials/flash_copper",
        "/tutorials/materials/diamond",
        "/tutorials/materials/steel",
        "/tutorials/materials/netherite",
        "/tutorials/materials/smaragdus",
      ]
    },
    {
      icon: "toolbox",
      text: "工具与武器",
      children: [
        "/tutorials/tools/index",  
        "/tutorials/tools/hammer",
        "/tutorials/tools/crowbar",
        "/tutorials/tools/awl",
        "/tutorials/tools/knife",
        "/tutorials/tools/dagger",
        "/tutorials/tools/boardsword",                            
      ]
    },
    {
      icon: "feather",
      text: "道具",
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
