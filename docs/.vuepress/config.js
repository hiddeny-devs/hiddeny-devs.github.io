import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '隐藏之年',
  theme: plumeTheme({
    profile: {
      name: '隐藏之年开发组',
      description: '星屹工作室下隐藏之年的专门开发组',
      avatar: '/team.png',
      circle: false, 
      organization: '星屹工作室',
      location: '地球'
    },
     notes: {
      dir: '/notes/', // 声明所有笔记的目录
      link: '/', // 声明所有笔记默认的链接前缀， 默认为 '/'
      notes: [
        {
          dir: 'tutorials', // 声明笔记的目录，相对于 `notes.dir`
          link: '/tutorial/', // 声明笔记的链接前缀
          sidebar: [ // 配置侧边栏
            {
              text: '基础教程',
              items: ['start',"manual-import"] // 简化写法，主题会自动补全为 `foo.md`
            }
          ]
        }
      ]
    }
  }),
  bundler: viteBundler(),
})
